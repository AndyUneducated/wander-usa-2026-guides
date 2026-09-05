#!/usr/bin/env python3
"""给 <region>/parts/*.js 存快照，并检测景点数是否意外骤降。

存在的原因：研究员被要求「先落骨架再增量补内容」，如果同一个片段文件被
第二个研究员重新写一遍，它的增量过程会把已完成的版本覆盖成半成品。
这种回退很容易在 git add -A 时被一起提交掉而没人注意。

用法：
  python3 tools/snapshot_parts.py --save          # 派发研究员之前存一份
  python3 tools/snapshot_parts.py --check         # 对比当前与最近快照
  python3 tools/snapshot_parts.py --restore FILE  # 从快照恢复某个片段
"""
from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SNAP = ROOT / '.parts-snapshots'
REGIONS = ['socal', 'dc', 'nyc', 'yellowstone']


def spot_count(path: Path):
    """返回片段里的景点数；无法加载时返回 None。"""
    res = subprocess.run(
        ['node', '-e',
         'try{const r=require(process.argv[1]);'
         'process.stdout.write(String((r.spots||[]).length))}'
         'catch(e){process.stdout.write("ERR")}',
         str(path)],
        capture_output=True, text=True)
    out = res.stdout.strip()
    return None if out == 'ERR' or not out.isdigit() else int(out)


def inventory() -> dict:
    inv = {}
    for region in REGIONS:
        parts = ROOT / region / 'parts'
        if not parts.is_dir():
            continue
        for f in sorted(parts.glob('*.js')):
            key = f'{region}/parts/{f.name}'
            inv[key] = {'bytes': f.stat().st_size, 'spots': spot_count(f)}
    return inv


def save():
    stamp = datetime.now().strftime('%Y%m%d-%H%M%S')
    dest = SNAP / stamp
    inv = inventory()
    for key in inv:
        src = ROOT / key
        out = dest / key
        out.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, out)
    (dest / 'inventory.json').write_text(
        json.dumps(inv, ensure_ascii=False, indent=2))
    (SNAP / 'latest').write_text(stamp)
    print(f'已存快照 {stamp}，共 {len(inv)} 个片段')
    for k, v in inv.items():
        print(f'  {k:44s} {v["bytes"]:>7d} bytes  {v["spots"]} 个景点')
    return 0


def check():
    latest = SNAP / 'latest'
    if not latest.exists():
        print('还没有任何快照，先跑 --save')
        return 0
    stamp = latest.read_text().strip()
    prev = json.loads((SNAP / stamp / 'inventory.json').read_text())
    now = inventory()

    regressions, additions, growth = [], [], []
    for key, cur in now.items():
        old = prev.get(key)
        if old is None:
            additions.append((key, cur))
            continue
        if cur['spots'] is None:
            regressions.append(f'{key}: 现在无法加载（语法错误或写入中）')
        elif old['spots'] is not None and cur['spots'] < old['spots']:
            regressions.append(
                f'{key}: 景点数从 {old["spots"]} 降到 {cur["spots"]}'
                f'（{old["bytes"]} -> {cur["bytes"]} bytes）'
                f'　可从 .parts-snapshots/{stamp}/{key} 恢复')
        elif cur['spots'] != old['spots'] or cur['bytes'] != old['bytes']:
            growth.append(f'{key}: {old["spots"]} -> {cur["spots"]} 个景点')
    missing = [k for k in prev if k not in now]

    print(f'对比基准快照 {stamp}')
    if additions:
        print(f'\n新增 {len(additions)} 个片段：')
        for k, v in additions:
            print(f'  + {k}  {v["spots"]} 个景点')
    if growth:
        print(f'\n有更新 {len(growth)} 个：')
        for g in growth:
            print(f'  ~ {g}')
    if missing:
        print(f'\n⚠️ 消失了 {len(missing)} 个片段：')
        for m in missing:
            print(f'  - {m}')
    if regressions:
        print(f'\n❌ 检测到 {len(regressions)} 处回退（可能是第二个研究员覆盖了已完成的文件）：')
        for r in regressions:
            print(f'  - {r}')
        return 1
    if not (additions or growth or missing):
        print('\n无变化')
    else:
        print('\n✅ 没有检测到回退')
    return 0


def restore(target: str):
    latest = (SNAP / 'latest')
    if not latest.exists():
        sys.exit('没有快照可恢复')
    stamp = latest.read_text().strip()
    src = SNAP / stamp / target
    if not src.exists():
        sys.exit(f'快照 {stamp} 里没有 {target}')
    dest = ROOT / target
    shutil.copy2(dest, dest.with_suffix('.js.overwritten'))
    shutil.copy2(src, dest)
    print(f'已从快照 {stamp} 恢复 {target}')
    print(f'被覆盖的版本存为 {dest.name}.overwritten')
    return 0


def main():
    ap = argparse.ArgumentParser()
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument('--save', action='store_true')
    g.add_argument('--check', action='store_true')
    g.add_argument('--restore', metavar='REGION/FILE.js')
    args = ap.parse_args()
    if args.save:
        return save()
    if args.check:
        return check()
    return restore(args.restore)


if __name__ == '__main__':
    sys.exit(main())
