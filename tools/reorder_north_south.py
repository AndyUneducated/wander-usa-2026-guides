#!/usr/bin/env python3
"""把每个分区内的景点按纬度从北到南重排，并重新编号 n。

地图针脚的坐标取自 shots[0].view || shots[0].park || shots[0].at || spot.at
（与 app.js 的 buildMap 一致），因此按同一坐标排序可保证卡片序号与地图序号一致。
"""
import argparse
import json
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

# 由 main() 按 --region 设置。socal 的 data.js 是手工维护的，
# 其余地域由 tools/assemble.py 生成（那个脚本自己会排序，无需本脚本）。
DATA = None


def spot_latitudes():
    """借 node 求出各分区景点的地图针脚纬度，保证与 app.js 取值逻辑一致。"""
    js = """
    eval(require('fs').readFileSync(process.argv[1],'utf8'));
    var out = REGIONS.map(function (r) {
      return {
        name: r.name,
        spots: r.spots.map(function (s) {
          var c = (s.shots && s.shots[0] && (s.shots[0].view || s.shots[0].park || s.shots[0].at)) || s.at;
          return { id: s.id, en: s.en, n: s.n, lat: c ? c[0] : null };
        })
      };
    });
    process.stdout.write(JSON.stringify(out));
    """
    res = subprocess.run(['node', '-e', js, str(DATA)], capture_output=True, text=True)
    if res.returncode != 0:
        sys.exit('node 解析失败：' + res.stderr)
    return json.loads(res.stdout)


def split_spots(block):
    """把 spots 数组正文切成单个景点的文本块。"""
    marker = re.compile(r'(?=      \{\n        id: )')
    parts = [p for p in marker.split(block) if p.strip()]
    return parts


def main():
    global DATA
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--region', default='socal',
                    help='地域目录名，默认 socal（其余地域由 assemble.py 负责排序）')
    args = ap.parse_args()

    DATA = ROOT / args.region / 'data.js'
    if not DATA.exists():
        sys.exit(f'找不到 {DATA}')

    regions = spot_latitudes()
    src = DATA.read_text(encoding='utf-8')

    # 逐个定位 spots: [ ... ] 正文
    starts = [m.end() for m in re.finditer(r'\n    spots: \[\n', src)]
    if len(starts) != len(regions):
        sys.exit('spots 数组数量与分区数不符')

    ends = []
    for st in starts:
        m = re.compile(r'\n    \]').search(src, st)
        if not m:
            sys.exit('找不到 spots 数组结尾')
        ends.append(m.start() + 1)  # 保留换行

    report = []
    # 从后往前替换，避免偏移失效
    for idx in range(len(regions) - 1, -1, -1):
        region = regions[idx]
        body = src[starts[idx]:ends[idx]]
        chunks = split_spots(body)
        if len(chunks) != len(region['spots']):
            sys.exit('分区「%s」文本块数 %d 与解析数 %d 不符' % (region['name'], len(chunks), len(region['spots'])))

        by_id = {}
        for ch in chunks:
            sid = re.search(r"id: '([^']+)'", ch).group(1)
            by_id[sid] = ch

        # 无针脚坐标的景点排到分区末尾。正常情况下不该有——
        # tools/check_all.py 会把这种情况报为「针脚」问题。
        ordered = sorted(region['spots'],
                         key=lambda sp: sp['lat'] if sp['lat'] is not None else -90.0,
                         reverse=True)

        new_chunks = []
        lines = []
        for i, sp in enumerate(ordered, start=1):
            ch = by_id[sp['id']]
            ch, cnt = re.subn(r'\n        n: \d+,\n', '\n        n: %d,\n' % i, ch, count=1)
            if cnt != 1:
                sys.exit('景点 %s 的 n 字段替换失败' % sp['id'])
            # 去掉块尾的换行与逗号，统一由下面重新拼接，避免原「最后一块无逗号」被挪到中间
            new_chunks.append(ch.rstrip().rstrip(','))
            moved = '' if sp['n'] == i else '   (原 n=%d)' % sp['n']
            lat = '%.4f' % sp['lat'] if sp['lat'] is not None else ' 无针脚'
            lines.append('  %2d  lat=%s  %s%s' % (i, lat, sp['en'], moved))

        new_body = ',\n'.join(new_chunks) + '\n'
        src = src[:starts[idx]] + new_body + src[ends[idx]:]

        report.append('=== ' + region['name'] + ' ===\n' + '\n'.join(lines))

    DATA.write_text(src, encoding='utf-8')
    for r in reversed(report):
        print(r)
        print()


if __name__ == '__main__':
    main()
