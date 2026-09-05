#!/usr/bin/env python3
"""Query Overpass for named features in bboxes; print name + centroid."""
import json, ssl, sys, urllib.parse, urllib.request, functools
print = functools.partial(print, flush=True)
try:
    import certifi
    CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    CTX = ssl.create_default_context()
UA = "wander-guides/1.0 (coordinate verification)"
EP = "https://overpass-api.de/api/interpreter"

def q(ql):
    req = urllib.request.Request(EP, data=urllib.parse.urlencode({"data": ql}).encode(),
                                 headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=180) as r:
        return json.load(r)

def show(ql, label):
    print(f"\n########## {label} ##########")
    try:
        d = q(ql)
    except Exception as e:
        print("  FAIL", e); return
    for el in d.get("elements", []):
        t = el.get("tags", {})
        nm = t.get("name") or t.get("ref") or t.get("operator") or "(unnamed)"
        if el["type"] == "node":
            lat, lon = el["lat"], el["lon"]
        else:
            c = el.get("center") or {}
            lat, lon = c.get("lat"), c.get("lon")
        extra = " ".join(f"{k}={v}" for k, v in t.items()
                         if k in ("ele", "addr:housenumber", "addr:street", "tourism",
                                  "historic", "man_made", "amenity", "surface", "highway",
                                  "leisure", "building", "natural", "waterway", "operator"))
        print(f"  {nm:<52} {lat},{lon}   {extra}")

if __name__ == "__main__":
    which = sys.argv[1] if len(sys.argv) > 1 else "all"
    if which in ("all", "butte"):
        show("""[out:json][timeout:120];
(
node["name"~"Thornton|Kenwood|Piccadilly|Carpenters|Water Company|Courthouse|Hotel Finlen|Metals Bank|Curtis Music|Hirbour|Silver Bow Club|Mai Wah|Copper King Mansion|Dumas",i](45.99,-112.56,46.03,-112.51);
way["name"~"Thornton|Kenwood|Piccadilly|Carpenters|Water Company|Courthouse|Hotel Finlen|Metals Bank|Curtis Music|Hirbour|Silver Bow Club|Mai Wah|Copper King Mansion|Dumas",i](45.99,-112.56,46.03,-112.51);
);out center tags;""", "Butte Uptown buildings")
    if which in ("all", "head"):
        show("""[out:json][timeout:120];
(
node["name"~"headframe|head frame|Anselmo|Original Mine|Steward|Travona|Mountain Con|Belmont|Orphan Girl|Bell Diamond|Granite Mountain|Kelley|Lexington|Badger|Emma|Berkeley",i](45.98,-112.60,46.05,-112.48);
way["name"~"headframe|head frame|Anselmo|Original Mine|Steward|Travona|Mountain Con|Belmont|Orphan Girl|Bell Diamond|Granite Mountain|Kelley|Lexington|Badger|Emma|Berkeley",i](45.98,-112.60,46.05,-112.48);
);out center tags;""", "Butte headframes / mines")
    if which in ("all", "misc"):
        show("""[out:json][timeout:120];
(
node["name"~"Our Lady of the Rockies|World Museum of Mining|Berkeley Pit|Granite Mountain",i](45.95,-112.65,46.10,-112.40);
way["name"~"Our Lady of the Rockies|World Museum of Mining|Berkeley Pit|Granite Mountain",i](45.95,-112.65,46.10,-112.40);
relation["name"~"Berkeley Pit",i](45.95,-112.65,46.10,-112.40);
);out center tags;""", "Butte misc")
    if which in ("all", "pv"):
        show("""[out:json][timeout:180];
(
node["name"~"Emigrant Peak|Chico Hot Springs|Carter|Mallard|Pine Creek|Dailey Lake|Point of Rocks|Yankee Jim|Pray|Emigrant|Loch Leven|Mill Creek|Sixmile|Livingston Depot|Depot",i](45.00,-110.95,45.75,-110.40);
way["name"~"Emigrant Peak|Chico Hot Springs|Carter|Mallard|Pine Creek|Dailey Lake|Point of Rocks|Yankee Jim|Pray|Loch Leven|Livingston Depot",i](45.00,-110.95,45.75,-110.40);
);out center tags;""", "Paradise Valley")
