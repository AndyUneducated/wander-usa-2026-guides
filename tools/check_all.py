#!/usr/bin/env python3
"""全站完整性检查：跑一遍所有地域的 data.js，报告结构与内容问题。

检查项：
  - data.js 能否被 node 解析
  - 每个景点的必填字段
  - 北到南排序、编号连续、每个景点是否有地图针脚
  - 坐标是否落在合理范围（美国本土）
  - 图片：数量、本地文件是否存在、远程链接残留
  - 机位缺坐标的比例
  - HTML 页面引用的资源是否存在

用法：python3 tools/check_all.py [--region dc]
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGIONS = ['socal', 'dc', 'nyc', 'yellowstone']

# 美国本土加阿拉斯加夏威夷的粗略包围盒，用来抓明显写错的坐标
LAT_RANGE = (18.0, 72.0)
LON_RANGE = (-180.0, -66.0)

REQUIRED_SPOT = ['id', 'n', 'en', 'tldr']
REQUIRED_REGION = ['id', 'name', 'spots']


def load_region(region: str):
    """用 node 把 data.js 读成 JSON，避免自己写 JS 解析器。"""
    path = ROOT / region / 'data.js'
    if not path.exists():
        return None, f'{region}/data.js 不存在'
    script = (
        'const fs=require("fs");'
        'const src=fs.readFileSync(process.argv[1],"utf8");'
        'const R=eval(src+"; REGIONS");'
        'process.stdout.write(JSON.stringify(R));'
    )
    res = subprocess.run(['node', '-e', script, str(path)],
                         capture_output=True, text=True)
    if res.returncode != 0:
        return None, f'{region}/data.js 无法解析：{res.stderr.strip().splitlines()[:1]}'
    try:
        return json.loads(res.stdout), None
    except json.JSONDecodeError as e:
        return None, f'{region}/data.js 解析出的 JSON 有问题：{e}'


def pin_of(spot: dict):
    """复制 app.js 里挑针脚坐标的逻辑，保证检查结果和页面一致。"""
    shots = spot.get('shots') or []
    if shots:
        first = shots[0]
        for key in ('view', 'park', 'at'):
            val = first.get(key)
            if isinstance(val, list) and len(val) == 2:
                return val
    at = spot.get('at')
    if isinstance(at, list) and len(at) == 2:
        return at
    return None


def coord_ok(c) -> bool:
    if not (isinstance(c, list) and len(c) == 2):
        return False
    lat, lon = c
    if not all(isinstance(x, (int, float)) for x in (lat, lon)):
        return False
    return LAT_RANGE[0] <= lat <= LAT_RANGE[1] and LON_RANGE[0] <= lon <= LON_RANGE[1]


def check_region(region: str, problems: list, stats: dict):
    data, err = load_region(region)
    if err:
        problems.append(('数据', err))
        return
    if not data:
        stats[region] = {'子地区': 0, '景点': 0, '机位': 0, '图片': 0}
        return

    n_spots = n_shots = n_imgs = 0
    seen_ids = {}

    for r in data:
        for f in REQUIRED_REGION:
            if not r.get(f):
                problems.append(('结构', f'{region}: 子地区缺字段 {f}'))
        spots = r.get('spots') or []
        # 编号必须是连续的 1..N，否则地图针脚和卡片对不上
        ns = [s.get('n') for s in spots]
        if ns != list(range(1, len(spots) + 1)):
            problems.append(('编号', f'{region}/{r.get("id")}: 编号不是连续 1..N，实际 {ns}'))

        lats = []
        for s in spots:
            n_spots += 1
            sid = s.get('id')
            if sid in seen_ids:
                problems.append(('重复 id', f'{region}: id "{sid}" 在 {seen_ids[sid]} 和 {r.get("id")} 中重复'))
            seen_ids[sid] = r.get('id')

            for f in REQUIRED_SPOT:
                if s.get(f) in (None, ''):
                    problems.append(('字段', f'{region}/{r.get("id")}/{sid}: 缺 {f}'))

            # 针脚
            pin = pin_of(s)
            if pin is None:
                problems.append(('针脚', f'{region}/{r.get("id")}/{sid} ({s.get("en")}): 无任何可用坐标，地图上不会出现'))
            elif not coord_ok(pin):
                problems.append(('坐标', f'{region}/{r.get("id")}/{sid}: 针脚坐标超出合理范围 {pin}'))
            else:
                lats.append((s.get('n'), pin[0], s.get('en')))

            # 机位坐标
            shots = s.get('shots') or []
            n_shots += len(shots)
            for sh in shots:
                for key in ('view', 'park', 'at'):
                    v = sh.get(key)
                    if v is not None and not coord_ok(v):
                        problems.append(('坐标', f'{region}/{sid}: 机位「{sh.get("name")}」的 {key} 超出合理范围 {v}'))

            # 图片
            imgs = s.get('images') or []
            n_imgs += len(imgs)
            if not s.get('gone') and len(imgs) < 2:
                problems.append(('图片', f'{region}/{r.get("id")}/{sid} ({s.get("en")}): 只有 {len(imgs)} 张图片，规范要求 2–3 张'))
            for im in imgs:
                url = im.get('url', '')
                if not im.get('cap'):
                    problems.append(('图片', f'{region}/{sid}: 图片缺 cap（作者与许可）: {url[:60]}'))
                if url.startswith('http'):
                    stats.setdefault('_remote', []).append(f'{region}/{sid}')
                elif not (ROOT / region / url).exists():
                    problems.append(('图片', f'{region}/{sid}: 本地图片文件不存在 {url}'))

        # 北到南
        for i in range(1, len(lats)):
            if lats[i][1] > lats[i - 1][1] + 1e-9:
                problems.append(('排序', f'{region}/{r.get("id")}: 第 {lats[i][0]} 个「{lats[i][2]}」'
                                        f'纬度 {lats[i][1]:.4f} 高于前一个 {lats[i-1][1]:.4f}，不符合北到南'))
                break

    stats[region] = {'子地区': len(data), '景点': n_spots, '机位': n_shots, '图片': n_imgs}


def check_html(problems: list):
    """检查页面里引用的本地资源是否真实存在。"""
    for html in sorted(ROOT.glob('*.html')) + sorted(ROOT.glob('*/index.html')):
        rel = html.relative_to(ROOT)
        text = html.read_text()
        for m in re.finditer(r'(?:src|href)="([^"]+)"', text):
            ref = m.group(1)
            if ref.startswith(('http', '#', 'mailto:')):
                continue
            target = (html.parent / ref.split('?')[0]).resolve()
            if not target.exists():
                problems.append(('引用', f'{rel}: 引用了不存在的 {ref}'))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--region', action='append', help='只检查指定地域，可重复')
    args = ap.parse_args()
    regions = args.region or REGIONS

    problems: list = []
    stats: dict = {}

    for r in regions:
        check_region(r, problems, stats)
    check_html(problems)

    print('=== 规模 ===')
    for r in regions:
        s = stats.get(r)
        if not s:
            continue
        print(f'  {r:12s} {s["子地区"]:2d} 子地区   {s["景点"]:3d} 景点   '
              f'{s["机位"]:3d} 机位   {s["图片"]:3d} 图片')

    remote = stats.get('_remote') or []
    if remote:
        print(f'\n  仍为远程图片链接（待本地化）：{len(remote)} 处，'
              f'涉及 {len(set(remote))} 个景点')

    if not problems:
        print('\n✅ 未发现问题')
        return 0

    print(f'\n=== 发现 {len(problems)} 个问题 ===')
    by_kind: dict = {}
    for kind, msg in problems:
        by_kind.setdefault(kind, []).append(msg)
    for kind in sorted(by_kind):
        msgs = by_kind[kind]
        print(f'\n[{kind}] {len(msgs)} 条')
        for m in msgs[:15]:
            print(f'  - {m}')
        if len(msgs) > 15:
            print(f'  … 另有 {len(msgs) - 15} 条')
    return 1


if __name__ == '__main__':
    sys.exit(main())
