#!/usr/bin/env python3
"""Snapshot <region>/parts/*.js and flag unexpected drops in spot counts.

Why this exists: researchers are asked to land a skeleton first and then fill
content incrementally. If a second researcher rewrites the same fragment file,
that incremental process can overwrite a finished version with a half-done one.
That kind of rollback is easy to commit unnoticed with git add -A.

Usage:
  python3 tools/snapshot_parts.py --save          # snapshot before assigning researchers
  python3 tools/snapshot_parts.py --check         # compare current files to the latest snapshot
  python3 tools/snapshot_parts.py --restore FILE  # restore one fragment from the snapshot
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
    """Return the number of spots in a fragment; None if it cannot be loaded."""
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
    print(f'saved snapshot {stamp}, {len(inv)} fragment(s)')
    for k, v in inv.items():
        print(f'  {k:44s} {v["bytes"]:>7d} bytes  {v["spots"]} spots')
    return 0


def check():
    latest = SNAP / 'latest'
    if not latest.exists():
        print('no snapshots yet; run --save first')
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
            regressions.append(f'{key}: cannot load now (syntax error or still being written)')
        elif old['spots'] is not None and cur['spots'] < old['spots']:
            regressions.append(
                f'{key}: spot count dropped from {old["spots"]} to {cur["spots"]}'
                f' ({old["bytes"]} -> {cur["bytes"]} bytes)'
                f'  restore from .parts-snapshots/{stamp}/{key}')
        elif cur['spots'] != old['spots'] or cur['bytes'] != old['bytes']:
            growth.append(f'{key}: {old["spots"]} -> {cur["spots"]} spots')
    missing = [k for k in prev if k not in now]

    print(f'comparing against snapshot {stamp}')
    if additions:
        print(f'\n{len(additions)} new fragment(s):')
        for k, v in additions:
            print(f'  + {k}  {v["spots"]} spots')
    if growth:
        print(f'\n{len(growth)} updated:')
        for g in growth:
            print(f'  ~ {g}')
    if missing:
        print(f'\n⚠️ {len(missing)} fragment(s) disappeared:')
        for m in missing:
            print(f'  - {m}')
    if regressions:
        print(f'\n❌ {len(regressions)} regression(s) (a second researcher may have overwritten a finished file):')
        for r in regressions:
            print(f'  - {r}')
        return 1
    if not (additions or growth or missing):
        print('\nno changes')
    else:
        print('\n✅ no regressions detected')
    return 0


def restore(target: str):
    latest = (SNAP / 'latest')
    if not latest.exists():
        sys.exit('no snapshot to restore from')
    stamp = latest.read_text().strip()
    src = SNAP / stamp / target
    if not src.exists():
        sys.exit(f'{target} is not in snapshot {stamp}')
    dest = ROOT / target
    shutil.copy2(dest, dest.with_suffix('.js.overwritten'))
    shutil.copy2(src, dest)
    print(f'restored {target} from snapshot {stamp}')
    print(f'overwritten version saved as {dest.name}.overwritten')
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
