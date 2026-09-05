#!/usr/bin/env python3
"""把 <region>/parts/*.js 的子地区片段拼装成 <region>/data.js。

- 片段按文件名排序决定子地区在页面上的先后（所以文件名前缀用 01-、02- 编号）
- 每个子地区内部的景点自动按纬度从北到南排序，并重新编号 n = 1..k
  排序坐标与 assets/app.js 的 buildMap 取值一致：shots[0].view || park || at || spot.at
- 输出的 data.js 是 `var REGIONS = [...]` 形式，供页面直接 <script> 引入

用法：
    python3 tools/assemble.py --region dc
    python3 tools/assemble.py --all
"""

import argparse
import json
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
REGIONS = ('yellowstone', 'nyc', 'dc')

# 没有任何机位坐标的景点，用真实位置纬度参与排序（不产生地图针脚）
FALLBACK_LAT: dict[str, float] = {}

NODE_SCRIPT = r'''
const fs = require('fs');
const path = require('path');
const dir = process.argv[1];
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();
const out = files.map(f => {
  const mod = require(path.join(dir, f));
  return { __file: f, ...mod };
});
process.stdout.write(JSON.stringify(out));
'''


def pin_lat(spot):
    """与 app.js buildMap 相同的取值顺序。"""
    shots = spot.get('shots') or []
    if shots:
        s0 = shots[0]
        for k in ('view', 'park', 'at'):
            if s0.get(k):
                return s0[k][0]
    if spot.get('at'):
        return spot['at'][0]
    return None


def load_parts(region: str):
    parts_dir = ROOT / region / 'parts'
    if not parts_dir.is_dir():
        sys.exit(f'找不到 {parts_dir}')
    res = subprocess.run(['node', '-e', NODE_SCRIPT, str(parts_dir)],
                         capture_output=True, text=True)
    if res.returncode != 0:
        sys.exit(f'读取 {region} 的片段失败：\n{res.stderr}')
    return json.loads(res.stdout)


def build(region: str) -> int:
    parts = load_parts(region)
    if not parts:
        sys.exit(f'{region}/parts 下没有片段文件')

    # 研究员会先落一个只有骨架、spots 为空的文件占位，再逐步补内容。
    # 这种半成品不该进 data.js，否则页面上会出现一个没有景点的空子地区。
    skeletons = [p['__file'] for p in parts if not (p.get('spots') or [])]
    parts = [p for p in parts if p.get('spots')]
    if skeletons:
        print(f'\n  跳过 {len(skeletons)} 个尚无景点的骨架片段（研究进行中）：'
              + '、'.join(skeletons))
    if not parts:
        sys.exit(f'{region}/parts 下还没有含景点的片段')

    seen_spot_ids: dict[str, str] = {}
    seen_region_ids: set[str] = set()
    warnings: list[str] = []

    print(f'\n=== {region} ===')
    for part in parts:
        src = part.pop('__file')
        rid = part.get('id')
        if not rid:
            sys.exit(f'{src} 缺少 id')
        if rid in seen_region_ids:
            sys.exit(f'{src} 的子地区 id 重复：{rid}')
        seen_region_ids.add(rid)

        spots = part.get('spots') or []
        if not spots:
            warnings.append(f'{src}：spots 为空')

        # 按纬度从北到南排序 + 重新编号
        def sort_key(sp):
            lat = pin_lat(sp)
            if lat is None:
                lat = FALLBACK_LAT.get(sp.get('id', ''), -90.0)
            return -lat

        spots.sort(key=sort_key)
        for i, sp in enumerate(spots, 1):
            sp['n'] = i
            sid = sp.get('id')
            if not sid:
                sys.exit(f'{src} 中有景点缺少 id')
            if sid in seen_spot_ids:
                sys.exit(f'景点 id 重复：{sid}（{src} 与 {seen_spot_ids[sid]}）')
            seen_spot_ids[sid] = src
            if pin_lat(sp) is None:
                warnings.append(f'{src}：{sp.get("en", sid)} 无任何机位坐标，地图上不会有针脚')
            if not sp.get('images'):
                warnings.append(f'{src}：{sp.get("en", sid)} 没有图片')

        print(f'  {src:34s} {rid:24s} {len(spots):3d} 个景点')

    total = sum(len(p.get('spots') or []) for p in parts)
    print(f'  {"合计":34s} {len(parts):>24d} 个子地区  {total:3d} 个景点')

    body = json.dumps(parts, ensure_ascii=False, indent=2)
    header = (
        '/* 本文件由 tools/assemble.py 从 %s/parts/*.js 自动生成，请勿直接编辑。\n'
        '   要改内容请改对应片段后重新运行：python3 tools/assemble.py --region %s\n'
        '   景点已按纬度从北到南排序，n 字段为自动编号，与地图针脚一一对应。 */\n'
    ) % (region, region)
    (ROOT / region / 'data.js').write_text(header + 'var REGIONS = ' + body + ';\n',
                                           encoding='utf-8')

    check = subprocess.run(['node', '--check', str(ROOT / region / 'data.js')],
                           capture_output=True, text=True)
    if check.returncode != 0:
        sys.exit('生成的 data.js 语法有问题：\n' + check.stderr)
    print(f'  → {region}/data.js  语法校验通过')

    if warnings:
        print(f'  提示 {len(warnings)} 条：')
        for w in warnings:
            print('    · ' + w)
    return total


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--region', choices=REGIONS)
    ap.add_argument('--all', action='store_true')
    args = ap.parse_args()

    targets = REGIONS if args.all else ([args.region] if args.region else [])
    if not targets:
        ap.error('需要 --region 或 --all')

    grand = 0
    for r in targets:
        if (ROOT / r / 'parts').is_dir():
            grand += build(r)
        else:
            print(f'\n=== {r} === 尚无 parts 目录，跳过')
    if len(targets) > 1:
        print(f'\n三地域合计 {grand} 个景点')


if __name__ == '__main__':
    main()
