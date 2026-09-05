#!/usr/bin/env python3
"""Look up coordinates via Nominatim (1 req/s), print OSM type/id + lat/lon + display name."""
import json, ssl, sys, time, urllib.parse, urllib.request, functools
print = functools.partial(print, flush=True)
try:
    import certifi
    CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    CTX = ssl.create_default_context()
UA = "wander-usa-2026-guides/1.0 (coordinate verification; contact github.com/AndyUneducated)"

def search(qstr, limit=3, viewbox=None):
    p = {"q": qstr, "format": "jsonv2", "limit": str(limit), "addressdetails": "1",
         "extratags": "1"}
    if viewbox:
        p["viewbox"] = viewbox
        p["bounded"] = "1"
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode(p)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=45) as r:
        return json.load(r)

QUERIES = sys.argv[1:] or []

for qstr in QUERIES:
    vb = None
    if "|" in qstr:
        qstr, vb = qstr.split("|", 1)
    print(f"\n=== {qstr} ===")
    try:
        for it in search(qstr, viewbox=vb):
            et = it.get("extratags") or {}
            ele = et.get("ele", "")
            print(f"  [{it['osm_type']}/{it['osm_id']}] {it['lat']},{it['lon']}  "
                  f"({it.get('category')}/{it.get('type')}) ele={ele}")
            print(f"      {it['display_name'][:150]}")
    except Exception as e:
        print("  FAIL", e)
    time.sleep(1.2)
