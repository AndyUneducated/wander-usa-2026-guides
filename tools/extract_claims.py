#!/usr/bin/env python3
"""Extract factual claims from the data that can go stale and can be checked externally, as a review checklist.

check_all.py checks internal consistency (fields present, sort order). It cannot tell
whether "hours 10:00–17:00" is actually correct. This script gathers those
externally verifiable claims so a review researcher can check them against official sites.

Priority rules:
  P0  Claims the spot is unreachable / gone, or wording like "closed" / "demolished" —
      wrong calls cost the most: a wasted trip, or wrongly talking people out of a place that is still open
  P1  Claims with specific dates, prices, or times — the ones that go stale fastest
  P2  Reservation and ticket requirements
  P3  Everything else

Usage:
  python3 tools/extract_claims.py                    # all regions, summarized by priority
  python3 tools/extract_claims.py --region dc        # one region
  python3 tools/extract_claims.py --p0               # highest-risk only
  python3 tools/extract_claims.py --out sheet.md     # write a file for the researcher
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

# Patterns that bump a claim to P1: specific times, dates, amounts
RE_TIME = re.compile(r'\d{1,2}:\d{2}')
RE_DATE = re.compile(r'\d{1,2}\s*[/月]\s*\d{1,2}|\d{4}\s*年|周[一二三四五六日]')
RE_MONEY = re.compile(r'\$\s?\d|\d+\s*美元|免费')
# Only long-term / indefinite closures count as P0.
# Routine days off like "closed Mondays" are normal info and should not land in the highest priority.
RE_INDEFINITE = re.compile(
    r'已拆|拆除|永久关闭|长期封闭|无限期|另行通知|无解封|无时间表|不可进入|'
    r'已移除|已停运|不再开放|停止开放|已焚毁|烧毁')


def load(region: str):
    """Parse data.js to JSON via node so we don't have to write a JS parser."""
    data = ROOT / region / 'data.js'
    if not data.exists():
        return []
    res = subprocess.run(
        ['node', '-e',
         'const fs=require("fs");'
         'const src=fs.readFileSync(process.argv[1],"utf8");'
         # Wrap in a function so const in this script does not clash with var REGIONS in data.js
         'const out=new Function(src+"; return REGIONS;")();'
         'process.stdout.write(JSON.stringify(out));',
         str(data)],
        capture_output=True, text=True)
    if res.returncode != 0:
        print(f'⚠️ failed to read {region}/data.js: {res.stderr[:200]}', file=sys.stderr)
        return []
    return json.loads(res.stdout)


def priority(spot: dict, field: str, value: str) -> str:
    """gone spots are marked P0 in collect(); this only ranks access fields.

    A wrong ticket or parking claim on a gone spot costs little (you cannot go anyway),
    so those are not escalated — otherwise P0 would fill up and lose its filtering value.
    """
    v = value or ''
    if not spot.get('gone') and RE_INDEFINITE.search(v):
        return 'P0'
    if field == 'hours':
        return 'P1' if (RE_TIME.search(v) or RE_DATE.search(v)) else 'P2'
    if field == 'ticket':
        return 'P1' if RE_MONEY.search(v) else 'P2'
    if field == 'book':
        return 'P1' if RE_DATE.search(v) else 'P2'
    return 'P3'


LABEL = {'book': 'reservation', 'ticket': 'tickets', 'hours': 'hours',
         'parking': 'parking', 'walk': 'walking'}


def collect(regions_filter=None):
    rows = []
    for region in REGIONS:
        if regions_filter and region != regions_filter:
            continue
        for sub in load(region):
            for sp in sub['spots']:
                base = {
                    'region': region,
                    'sub': sub.get('navName') or sub.get('name'),
                    'n': sp.get('n'),
                    'en': sp.get('en'),
                    'gone': bool(sp.get('gone')),
                    'score': sp.get('score'),
                    'id': sp.get('id'),
                }
                if sp.get('gone'):
                    rows.append({**base, 'field': 'gone',
                                 'label': '★ inaccessible verdict (confirm it really cannot be visited)',
                                 'value': sp.get('goneWhy') or sp.get('tldr') or '(no explanation)',
                                 'p': 'P0'})
                acc = sp.get('access') or {}
                for field in ('hours', 'ticket', 'book', 'parking', 'walk'):
                    v = acc.get(field)
                    if not v:
                        continue
                    v = re.sub(r'<[^>]+>', '', str(v)).strip()
                    rows.append({**base, 'field': field, 'label': LABEL[field],
                                 'value': v, 'p': priority(sp, field, v)})
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--region', choices=REGIONS)
    ap.add_argument('--p0', action='store_true', help='Output P0 only')
    ap.add_argument('--max-p', default='P3', choices=['P0', 'P1', 'P2', 'P3'])
    ap.add_argument('--out', help='Write to a file')
    args = ap.parse_args()

    rows = collect(args.region)
    cap = 'P0' if args.p0 else args.max_p
    keep = [p for p in ('P0', 'P1', 'P2', 'P3') if p <= cap]
    rows = [r for r in rows if r['p'] in keep]

    lines = []
    counts = {p: 0 for p in ('P0', 'P1', 'P2', 'P3')}
    for r in rows:
        counts[r['p']] += 1

    lines.append('# Data-accuracy review checklist\n')
    lines.append('Check every item against an official source. Write changes back to '
                 '`<region>/parts/*.js` (for socal, edit `socal/data.js` directly), '
                 'then re-run `tools/assemble.py`.\n')
    lines.append('| Priority | Count | Meaning |')
    lines.append('| --- | --- | --- |')
    lines.append(f'| P0 | {counts["P0"]} | Claims unreachable or closed; wrong calls cost the most |')
    lines.append(f'| P1 | {counts["P1"]} | Specific times/dates/prices; go stale fastest |')
    lines.append(f'| P2 | {counts["P2"]} | Reservation and ticket requirements |')
    lines.append(f'| P3 | {counts["P3"]} | Parking, walking, and similar |')
    lines.append('')

    for p in keep:
        group = [r for r in rows if r['p'] == p]
        if not group:
            continue
        lines.append(f'\n## {p} ({len(group)} item(s))\n')
        cur = None
        for r in group:
            tag = f'{r["region"]} / {r["sub"]}'
            if tag != cur:
                lines.append(f'\n### {tag}\n')
                cur = tag
            flag = ' **[marked unreachable]**' if r['gone'] and r['field'] != 'gone' else ''
            lines.append(f'- `{r["id"]}` **{r["n"]}. {r["en"]}**{flag}  \n'
                         f'  {r["label"]}: {r["value"]}')

    text = '\n'.join(lines) + '\n'
    if args.out:
        Path(args.out).write_text(text)
        print(f'Wrote {args.out} ({len(rows)} item(s))')
    else:
        print(text)
    for p in ('P0', 'P1', 'P2', 'P3'):
        if counts[p]:
            print(f'  {p}: {counts[p]} item(s)', file=sys.stderr)
    return 0


if __name__ == '__main__':
    sys.exit(main())
