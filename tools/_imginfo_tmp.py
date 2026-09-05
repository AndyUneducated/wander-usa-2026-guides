#!/usr/bin/env python3
"""Fetch Commons imageinfo (author/license/url) for explicit file titles."""
import json, re, ssl, sys, urllib.parse, urllib.request, functools
print = functools.partial(print, flush=True)
try:
    import certifi
    CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    CTX = ssl.create_default_context()
UA = "wander-usa-2026-guides/1.0 (image sourcing)"
API = "https://commons.wikimedia.org/w/api.php"

def strip(html):
    t = re.sub(r"<[^>]+>", "", html or "")
    return re.sub(r"\s+", " ", t).strip()

titles = ["File:" + t for t in sys.argv[1:]]
for i in range(0, len(titles), 20):
    chunk = titles[i:i+20]
    p = {"action": "query", "format": "json", "prop": "imageinfo",
         "iiprop": "url|size|extmetadata", "titles": "|".join(chunk)}
    req = urllib.request.Request(API + "?" + urllib.parse.urlencode(p),
                                 headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=45) as r:
        d = json.load(r)
    for pg in (d.get("query") or {}).get("pages", {}).values():
        t = pg.get("title", "?")
        ii = (pg.get("imageinfo") or [{}])[0]
        if not ii:
            print(f"MISSING  {t}")
            continue
        m = ii.get("extmetadata", {})
        print(f"\n{t}   {ii.get('width')}x{ii.get('height')}")
        print(f"  url    : {ii.get('url')}")
        print(f"  lic    : {strip((m.get('LicenseShortName') or {}).get('value'))}")
        print(f"  author : {strip((m.get('Artist') or {}).get('value'))[:110]}")
        print(f"  credit : {strip((m.get('Credit') or {}).get('value'))[:80]}")
        print(f"  desc   : {strip((m.get('ImageDescription') or {}).get('value'))[:170]}")
