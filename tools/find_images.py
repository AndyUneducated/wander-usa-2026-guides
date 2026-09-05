#!/usr/bin/env python3
"""按关键词在 Wikimedia Commons 搜图，输出高分辨率候选（含授权与尺寸）。"""
import json, ssl, sys, urllib.parse, urllib.request, functools

print = functools.partial(print, flush=True)

try:
    import certifi
    CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    CTX = ssl.create_default_context()

UA = "socal-roadtrip-report/1.0 (image sourcing; contact via github.com/AndyUneducated)"
API = "https://commons.wikimedia.org/w/api.php"


def api(**params):
    params.setdefault("format", "json")
    req = urllib.request.Request(
        API + "?" + urllib.parse.urlencode(params), headers={"User-Agent": UA}
    )
    with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
        return json.load(r)


def search(term, limit=12):
    res = api(action="query", generator="search", gsrsearch=f"filetype:bitmap {term}",
              gsrnamespace=6, gsrlimit=limit, prop="imageinfo",
              iiprop="url|size|extmetadata", iiurlwidth=1280)
    pages = (res.get("query") or {}).get("pages", {})
    out = []
    for p in pages.values():
        ii = (p.get("imageinfo") or [{}])[0]
        if not ii.get("url"):
            continue
        meta = ii.get("extmetadata", {})
        out.append({
            "title": p["title"].replace("File:", ""),
            "w": ii.get("width"), "h": ii.get("height"),
            "lic": (meta.get("LicenseShortName", {}) or {}).get("value", "?"),
            "author": (meta.get("Artist", {}) or {}).get("value", "?")[:60],
            "thumb": ii.get("thumburl"),
            "url": ii.get("url"),
        })
    out.sort(key=lambda x: -(x["w"] or 0) * (x["h"] or 0))
    return out


if __name__ == "__main__":
    for term in sys.argv[1:]:
        print(f"\n{'='*70}\n搜索: {term}\n{'='*70}")
        try:
            for r in search(term):
                if (r["w"] or 0) < 1200:
                    continue
                print(f"  {r['w']}x{r['h']:<6} {r['lic']:<18} {r['title'][:60]}")
                print(f"      {r['url']}")
        except Exception as e:
            print(f"  查询失败: {e}")
