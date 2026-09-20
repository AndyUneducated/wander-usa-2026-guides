#!/usr/bin/env python3
"""Check that every image referenced in the data actually exists.

Why this is a separate check: most images sit inside collapsed <details>, so the
browser never fetches them unless they are expanded. "No broken images in the
browser" is therefore a strong false positive. Researchers sometimes mistype a
Wikimedia filename (a missing hyphen, wrong extension case); those errors only
show up when Commons is queried directly.

Local images: file exists and really is an image (magic bytes in the header).
Remote images: ask the Commons API whether the file exists — more reliable than
HEAD on the direct URL, and less likely to trip rate limits.

Usage:
  python3 tools/verify_images.py                # all regions
  python3 tools/verify_images.py --region dc
  python3 tools/verify_images.py --local-only   # skip network checks
"""
from __future__ import annotations

import argparse
import json
import re
import ssl
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGIONS = ['socal', 'dc', 'nyc', 'yellowstone']
UA = ('wander-usa-2026-guides/1.0 '
      '(static travel report; contact via GitHub AndyUneducated)')

_ctx = ssl.create_default_context()
_ctx.check_hostname = False
_ctx.verify_mode = ssl.CERT_NONE

MAGIC = {b'\xff\xd8\xff': 'jpeg', b'\x89PNG': 'png',
         b'GIF8': 'gif', b'RIFF': 'webp'}

_last = 0.0


def throttle(gap: float = 1.2):
    global _last
    w = gap - (time.monotonic() - _last)
    if w > 0:
        time.sleep(w)
    _last = time.monotonic()


def load(region: str):
    data = ROOT / region / 'data.js'
    if not data.exists():
        return []
    res = subprocess.run(
        ['node', '-e',
         'const fs=require("fs");'
         'const src=fs.readFileSync(process.argv[1],"utf8");'
         'const out=new Function(src+"; return REGIONS;")();'
         'process.stdout.write(JSON.stringify(out));',
                         str(data)], capture_output=True, text=True, encoding='utf-8')
    if res.returncode != 0:
        print(f'⚠️ {region}/data.js failed to load', file=sys.stderr)
        return []
    return json.loads(res.stdout)


def commons_filename(url: str):
    m = re.search(r'/commons/(?:thumb/)?[0-9a-f]/[0-9a-f]{2}/([^/]+)', url)
    return urllib.parse.unquote(m.group(1)) if m else None


def commons_exists(filename: str):
    """Return (exists, note). On success the note includes original dimensions."""
    q = urllib.parse.urlencode({
        'action': 'query', 'format': 'json', 'prop': 'imageinfo',
        'iiprop': 'url|size|mime', 'titles': 'File:' + filename})
    req = urllib.request.Request(
        'https://commons.wikimedia.org/w/api.php?' + q,
        headers={'User-Agent': UA})
    for attempt in range(3):
        try:
            throttle()
            with urllib.request.urlopen(req, timeout=30, context=_ctx) as r:
                d = json.load(r)
            break
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < 2:
                time.sleep(45 * (attempt + 1))
                continue
            return None, f'API error {e}'
        except Exception as e:
            if attempt < 2:
                time.sleep(5)
                continue
            return None, f'API error {e}'
    else:
        return None, 'API failed repeatedly'

    pages = list(d.get('query', {}).get('pages', {}).values())
    if not pages:
        return False, 'query returned no pages'
    if 'missing' in pages[0] or 'imageinfo' not in pages[0]:
        return False, 'file does not exist on Commons'
    i = pages[0]['imageinfo'][0]
    return True, f'{i.get("width")}x{i.get("height")} {i.get("mime")}'


def suggest(filename: str):
    """If the filename looks wrong, search for the most likely correct name."""
    stem = filename.rsplit('.', 1)[0]
    q = urllib.parse.urlencode({
        'action': 'query', 'format': 'json', 'list': 'search',
        'srsearch': 'filetype:bitmap ' + stem, 'srnamespace': 6, 'srlimit': 3})
    try:
        throttle()
        with urllib.request.urlopen(urllib.request.Request(
                'https://commons.wikimedia.org/w/api.php?' + q,
                headers={'User-Agent': UA}), timeout=30, context=_ctx) as r:
            d = json.load(r)
        return [s['title'] for s in d.get('query', {}).get('search', [])]
    except Exception:
        return []


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--region', choices=REGIONS)
    ap.add_argument('--local-only', action='store_true')
    args = ap.parse_args()

    problems = []
    stats = {}

    for region in REGIONS:
        if args.region and region != args.region:
            continue
        local_ok = local_bad = remote_ok = remote_bad = 0
        for sub in load(region):
            for sp in sub['spots']:
                for im in sp.get('images') or []:
                    url = im.get('url') or ''
                    where = f'{region} / {sp.get("n")}. {sp.get("en")}'
                    if url.startswith('http'):
                        if args.local_only:
                            continue
                        fn = commons_filename(url)
                        if not fn:
                            remote_bad += 1
                            problems.append(
                                f'{where}\n    could not parse a Commons filename from URL: {url}')
                            continue
                        ok, why = commons_exists(fn)
                        if ok:
                            remote_ok += 1
                        elif ok is False:
                            remote_bad += 1
                            msg = (f'{where}\n    ❌ {why}: {fn}')
                            for s in suggest(fn):
                                msg += f'\n       maybe this instead: {s}'
                            problems.append(msg)
                        else:
                            problems.append(f'{where}\n    ⚠️ could not confirm: {why} ({fn})')
                    else:
                        p = ROOT / region / url
                        if not p.exists():
                            local_bad += 1
                            problems.append(f'{where}\n    ❌ local file missing: {url}')
                            continue
                        head = p.open('rb').read(12)
                        if not any(head.startswith(m) for m in MAGIC):
                            local_bad += 1
                            problems.append(
                                f'{where}\n    ❌ not a valid image (header '
                                f'{head[:6]!r}): {url}')
                        else:
                            local_ok += 1
        stats[region] = (local_ok, local_bad, remote_ok, remote_bad)

    print('=== image check ===')
    for r, (lo, lb, ro, rb) in stats.items():
        parts = [f'local {lo} valid']
        if lb:
            parts.append(f'{lb} with problems')
        if ro or rb:
            parts.append(f'remote {ro} exist')
        if rb:
            parts.append(f'{rb} missing')
        print(f'  {r:14s}{", ".join(parts)}')

    if problems:
        print(f'\n❌ {len(problems)} problem(s):\n')
        for p in problems:
            print('  ' + p)
        return 1
    print('\n✅ all images verified')
    return 0


if __name__ == '__main__':
    sys.exit(main())
