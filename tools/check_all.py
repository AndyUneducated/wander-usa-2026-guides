#!/usr/bin/env python3
"""Site-wide integrity check: load every region's data.js and report structural and content issues.

Checks:
  - whether data.js can be parsed by node
  - required fields on each spot
  - north-to-south order, consecutive numbering, and a map pin for each spot
  - coordinates fall in a reasonable range (contiguous US plus AK/HI)
  - images: count, local files exist, leftover remote URLs
  - share of shots missing coordinates
  - whether resources referenced by HTML pages exist

Usage: python3 tools/check_all.py [--region dc]
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

# Rough bounding box for the contiguous US plus Alaska and Hawaii, to catch obviously wrong coordinates
LAT_RANGE = (18.0, 72.0)
LON_RANGE = (-180.0, -66.0)

REQUIRED_SPOT = ['id', 'n', 'en', 'tldr']
REQUIRED_REGION = ['id', 'name', 'spots']


def load_region(region: str):
    """Parse data.js via node so we don't have to write a JS parser."""
    path = ROOT / region / 'data.js'
    if not path.exists():
        return None, f'{region}/data.js does not exist'
    script = (
        'const fs=require("fs");'
        'const src=fs.readFileSync(process.argv[1],"utf8");'
        'const R=eval(src+"; REGIONS");'
        'process.stdout.write(JSON.stringify(R));'
    )
    res = subprocess.run(['node', '-e', script, str(path)],
                         capture_output=True, text=True, encoding='utf-8')
    if res.returncode != 0:
        return None, f'{region}/data.js could not be parsed: {res.stderr.strip().splitlines()[:1]}'
    try:
        return json.loads(res.stdout), None
    except json.JSONDecodeError as e:
        return None, f'{region}/data.js produced invalid JSON: {e}'


def pin_of(spot: dict):
    """Mirror the pin-picking logic in app.js so check results match the page."""
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
        problems.append(('data', err))
        return
    if not data:
        stats[region] = {'子地区': 0, '景点': 0, '机位': 0, '图片': 0}
        return

    n_spots = n_shots = n_imgs = 0
    n_must = n_tour = n_visit = 0
    seen_ids = {}

    for r in data:
        for f in REQUIRED_REGION:
            if not r.get(f):
                problems.append(('structure', f'{region}: sub-region missing field {f}'))
        spots = r.get('spots') or []
        # Numbers must be consecutive 1..N, otherwise map pins and cards won't line up
        ns = [s.get('n') for s in spots]
        if ns != list(range(1, len(spots) + 1)):
            problems.append(('numbering', f'{region}/{r.get("id")}: numbers are not consecutive 1..N, got {ns}'))

        lats = []
        for s in spots:
            n_spots += 1
            sid = s.get('id')
            if sid in seen_ids:
                problems.append(('duplicate id', f'{region}: id "{sid}" is duplicated in {seen_ids[sid]} and {r.get("id")}'))
            seen_ids[sid] = r.get('id')

            for f in REQUIRED_SPOT:
                if s.get(f) in (None, ''):
                    problems.append(('field', f'{region}/{r.get("id")}/{sid}: missing {f}'))

            # Fields added in the traditional-tourism rewrite. socal is out of that
            # rewrite, so we only measure coverage here and do not treat gaps as
            # problems; coverage is printed separately in main().
            if s.get('must') is not None:
                n_must += 1
                if not (0 <= s['must'] <= 5):
                    problems.append(('score', f'{region}/{sid}: must={s["must"]} is outside 0–5'))
            if s.get('tour'):
                n_tour += 1
            if (s.get('access') or {}).get('visit'):
                n_visit += 1

            # Pin
            pin = pin_of(s)
            if pin is None:
                problems.append(('pin', f'{region}/{r.get("id")}/{sid} ({s.get("en")}): no usable coordinates, will not appear on the map'))
            elif not coord_ok(pin):
                problems.append(('coords', f'{region}/{r.get("id")}/{sid}: pin coordinates out of range {pin}'))
            else:
                lats.append((s.get('n'), pin[0], s.get('en')))

            # Shot coordinates
            shots = s.get('shots') or []
            n_shots += len(shots)
            for sh in shots:
                for key in ('view', 'park', 'at'):
                    v = sh.get(key)
                    if v is not None and not coord_ok(v):
                        problems.append(('coords', f'{region}/{sid}: shot "{sh.get("name")}" {key} out of range {v}'))

            # Images
            imgs = s.get('images') or []
            n_imgs += len(imgs)
            if not s.get('gone') and len(imgs) < 2:
                problems.append(('images', f'{region}/{r.get("id")}/{sid} ({s.get("en")}): only {len(imgs)} image(s), spec requires 2–3'))
            for im in imgs:
                url = im.get('url', '')
                if not im.get('cap'):
                    problems.append(('images', f'{region}/{sid}: image missing cap (author and license): {url[:60]}'))
                if url.startswith('http'):
                    stats.setdefault('_remote', []).append(f'{region}/{sid}')
                elif not (ROOT / region / url).exists():
                    problems.append(('images', f'{region}/{sid}: local image file missing {url}'))

        # North to south
        for i in range(1, len(lats)):
            if lats[i][1] > lats[i - 1][1] + 1e-9:
                problems.append(('order', f'{region}/{r.get("id")}: item {lats[i][0]} "{lats[i][2]}"'
                                        f' latitude {lats[i][1]:.4f} is north of the previous {lats[i-1][1]:.4f}, not north-to-south'))
                break

    stats[region] = {'子地区': len(data), '景点': n_spots, '机位': n_shots, '图片': n_imgs,
                     'must': n_must, 'tour': n_tour, 'visit': n_visit}


def check_html(problems: list):
    """Check that local assets referenced in pages actually exist."""
    for html in sorted(ROOT.glob('*.html')) + sorted(ROOT.glob('*/index.html')):
        rel = html.relative_to(ROOT)
        text = html.read_text()
        for m in re.finditer(r'(?:src|href)="([^"]+)"', text):
            ref = m.group(1)
            if ref.startswith(('http', '#', 'mailto:')):
                continue
            target = (html.parent / ref.split('?')[0]).resolve()
            if not target.exists():
                problems.append(('ref', f'{rel}: references missing {ref}'))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--region', action='append', help='Check only the given region (repeatable)')
    args = ap.parse_args()
    regions = args.region or REGIONS

    problems: list = []
    stats: dict = {}

    for r in regions:
        check_region(r, problems, stats)
    check_html(problems)

    print('=== Scale ===')
    for r in regions:
        s = stats.get(r)
        if not s:
            continue
        print(f'  {r:12s} {s["子地区"]:2d} sub-regions   {s["景点"]:3d} spots   '
              f'{s["机位"]:3d} shots   {s["图片"]:3d} images')

    print('\n=== Traditional-tourism field coverage (socal is out of scope for the rewrite) ===')
    for r in regions:
        s = stats.get(r)
        if not s:
            continue
        total = s['景点'] or 1
        flag = '✅' if s['must'] == s['visit'] == s['tour'] == s['景点'] else '…'
        print(f'  {flag} {r:12s} must {s["must"]:3d}/{s["景点"]:3d}   '
              f'tour {s["tour"]:3d}/{s["景点"]:3d}   visit duration {s["visit"]:3d}/{s["景点"]:3d}'
              f'   ({s["must"] * 100 // total}%)')

    remote = stats.get('_remote') or []
    if remote:
        print(f'\n  Still remote image URLs (pending localization): {len(remote)} place(s), '
              f'covering {len(set(remote))} spot(s)')

    if not problems:
        print('\n✅ No problems found')
        return 0

    print(f'\n=== Found {len(problems)} problem(s) ===')
    by_kind: dict = {}
    for kind, msg in problems:
        by_kind.setdefault(kind, []).append(msg)
    for kind in sorted(by_kind):
        msgs = by_kind[kind]
        print(f'\n[{kind}] {len(msgs)} item(s)')
        for m in msgs[:15]:
            print(f'  - {m}')
        if len(msgs) > 15:
            print(f'  … plus {len(msgs) - 15} more')
    return 1


if __name__ == '__main__':
    sys.exit(main())
