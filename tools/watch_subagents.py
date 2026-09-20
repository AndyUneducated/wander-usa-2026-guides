#!/usr/bin/env python3
"""Watch research subagents for stalls, and check that the files they should deliver are on disk.

Use two independent signals so we do not kill an agent that is still doing a long web search:

  transcript freshness   mtime of the .jsonl. It keeps updating while tool calls are written
  whether output landed  whether the matching fragment file exists under parts/ and is a reasonable size

Four combined states:

  ✅ delivered    fragment file exists and passes node --check
  ⏳ in progress  transcript is moving (< STALE_MIN minutes), fragment not there yet
  ⚠️  suspicious   transcript has been quiet STALE_MIN–DEAD_MIN minutes; may be a long search
  ❌ likely stuck  transcript quiet more than DEAD_MIN minutes and no output — interrupt and reassign

Usage:
    python3 tools/watch_subagents.py
    python3 tools/watch_subagents.py --watch --interval 60
"""

import argparse
import json
import re
import subprocess
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TRANSCRIPTS = Path.home() / '.cursor' / 'projects'

# Lesson from practice (2026-09-05): the 02-philadelphia-parkway subagent transcript was quiet for 37 minutes,
# was wrongly treated as stuck and reassigned, then at minute 38 it wrote a 68KB finished file in one go.
# Subagents usually write to disk only after all research is done, so "no output yet" is normal the whole time they work,
# and a quiet transcript only means they are calling tools back-to-back. Thresholds must be far longer than one full research pass.
STALE_MIN = 25.0   # transcript quiet this long: worth noticing, but leave it alone
DEAD_MIN = 50.0    # quiet this long with no output: only then consider reassigning

# Agreed output paths at assignment time → easy to check. Keys are human-facing task names
EXPECTED = {
    'dc': [
        '01-philadelphia-oldcity.js',
        '02-philadelphia-parkway.js',
        '03-national-mall.js',
        '04-capitol-hill.js',
        '05-museums.js',
        '06-northern-virginia.js',
        '07-dc-neighborhoods.js',
    ],
    'nyc': [
        '01-salem-north-shore.js',
        '02-boston-cambridge.js',
        '03-hudson-valley.js',
        '04-manhattan-midtown.js',
        '05-manhattan-downtown.js',
        '06-brooklyn.js',
    ],
    'yellowstone': [
        '01-bitterroot.js',
        '02-butte-paradise.js',
        '03-mammoth-lamar.js',
        '04-beartooth-chief-joseph.js',
        '05-canyon-hayden.js',
        '06-geyser-basins.js',
        '08-grand-teton.js',
    ],
}


PART_RE = re.compile(r'parts/((?:\d{2})-[a-z0-9-]+\.js)')


def transcript_target(path: Path):
    """Read which output file this subagent is supposed to write from the transcript.

    The assignment prompt includes an absolute path in the first few lines, so scanning the start is enough.
    """
    try:
        with path.open(errors='ignore') as fh:
            for _ in range(40):
                line = fh.readline()
                if not line:
                    break
                m = PART_RE.search(line)
                if m:
                    return m.group(1)
    except OSError:
        pass
    return None


def find_transcripts():
    """Find all subagent transcripts; return (mtime, path) newest first."""
    out = []
    for p in TRANSCRIPTS.glob('*/agent-transcripts/*/subagents/*.jsonl'):
        try:
            st = p.stat()
        except OSError:
            continue
        out.append((st.st_mtime, p))
    return sorted(out, reverse=True)


def check_part(region: str, fname: str):
    """Return (status string, spot count or None)."""
    p = ROOT / region / 'parts' / fname
    if not p.exists():
        return 'missing', None
    if p.stat().st_size < 2000:
        return 'too-small', None
    res = subprocess.run(['node', '-e',
                          'const r=require(process.argv[1]);'
                          'process.stdout.write(String((r.spots||[]).length))',
                          str(p)], capture_output=True, text=True)
    if res.returncode != 0:
        return 'broken', None
    try:
        return 'ok', int(res.stdout.strip())
    except ValueError:
        return 'broken', None


def fmt_ago(minutes: float) -> str:
    if minutes < 60:
        return f'{minutes:.0f} min ago'
    return f'{minutes / 60:.1f} h ago'


def snapshot() -> bool:
    """Print one snapshot. Return True if every expected output has been delivered."""
    now = time.time()
    print(f'—— {time.strftime("%H:%M:%S")} output check ——')

    all_ok = True
    for region, files in EXPECTED.items():
        rows = []
        for f in files:
            state, n = check_part(region, f)
            if state == 'ok':
                rows.append(f'  ✅ {f:34s} {n:2d} spots')
            else:
                all_ok = False
                label = {'missing': 'not delivered', 'too-small': 'file too small',
                         'broken': 'cannot require'}[state]
                rows.append(f'  ⬜ {f:34s} {label}')
        done = sum(1 for r in rows if r.lstrip().startswith('✅'))
        print(f'{region}  {done}/{len(files)} delivered')
        for r in rows:
            print(r)

    print('\n—— running subagents (aligned to the output they own) ——')
    print(f'   Subagents usually finish all research before writing once, so "no output yet" is normal the whole time they work; '
          f'a quiet transcript only means they are calling tools back-to-back.\n'
          f'   Only consider reassigning when output is missing AND the transcript has been quiet more than {DEAD_MIN:.0f} minutes; '
          f'back up any existing output before reassigning.')

    ts = find_transcripts()
    shown = 0
    for mtime, path in ts:
        age_min = (now - mtime) / 60
        if age_min > 180:      # older than three hours: treat as history, do not list
            continue
        target = transcript_target(path)

        # If the output is already on disk, this subagent is done no matter how old the transcript is
        delivered = False
        if target:
            for region, files in EXPECTED.items():
                if target in files and check_part(region, target)[0] == 'ok':
                    delivered = True
                    break

        if delivered:
            mark, note = '✅ delivered', 'output is on disk, no need to watch'
        elif age_min > DEAD_MIN:
            mark, note = '⚠️  consider reassign', f'quiet more than {DEAD_MIN:.0f} min with no output'
        elif age_min > STALE_MIN:
            mark, note = '·  quiet', 'normal; dense tool use does not write the transcript'
        else:
            mark, note = '⏳ active', ''

        tgt = target or '(could not identify output)'
        print(f'  {mark:14s} {path.stem[:8]}  {tgt:30s} last activity {fmt_ago(age_min)}'
              + (f'  — {note}' if note else ''))
        shown += 1
    if shown == 0:
        print('  no active subagents in the last three hours')

    return all_ok


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--watch', action='store_true')
    ap.add_argument('--interval', type=int, default=60)
    ap.add_argument('--max-min', type=int, default=120)
    args = ap.parse_args()

    deadline = time.time() + args.max_min * 60
    while True:
        if snapshot():
            print('\nAll outputs delivered.')
            return 0
        if not args.watch:
            return 0
        if time.time() > deadline:
            print(f'\nHit the {args.max_min}-minute cap, exiting.')
            return 4
        print()
        time.sleep(args.interval)


if __name__ == '__main__':
    raise SystemExit(main())
