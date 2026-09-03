#!/usr/bin/env python3
"""反查 data.js 中每个 park/view 坐标，输出其实际落点，供人工核对。"""
import json, re, ssl, time, urllib.parse, urllib.request, pathlib, functools

print = functools.partial(print, flush=True)
ROOT = pathlib.Path(__file__).resolve().parent.parent

try:
    import certifi
    CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    CTX = ssl.create_default_context()

UA = "socal-roadtrip-report/1.0 (coordinate verification; contact via github.com/AndyUneducated)"


def reverse(lat, lng):
    q = urllib.parse.urlencode({
        "lat": lat, "lon": lng, "format": "jsonv2",
        "zoom": 17, "addressdetails": 1,
    })
    req = urllib.request.Request(
        "https://nominatim.openstreetmap.org/reverse?" + q,
        headers={"User-Agent": UA, "Accept-Language": "en"},
    )
    with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
        return json.load(r)


def summarize(d):
    if not d or "error" in d:
        return "(无结果)"
    a = d.get("address", {})
    parts = [
        d.get("name") or "",
        a.get("road") or "",
        a.get("hamlet") or a.get("village") or a.get("town") or a.get("city")
        or a.get("suburb") or a.get("neighbourhood") or "",
        a.get("county") or "",
    ]
    return " · ".join(p for p in parts if p) or d.get("display_name", "")[:80]


def main():
    # 坐标清单由 node 从 data.js 导出，确保不遗漏
    coords = [
        (c["spot"], c["shot"], c["kind"], c["lat"], c["lng"])
        for c in json.loads(pathlib.Path("/tmp/coords.json").read_text())
    ]

    print(f"待核对坐标 {len(coords)} 个\n")
    for i, (spot, shot, kind, lat, lng) in enumerate(coords, 1):
        try:
            got = summarize(reverse(lat, lng))
        except Exception as e:
            got = f"(查询失败: {e})"
        print(f"[{i}/{len(coords)}] {spot}")
        print(f"    {kind:5s} {lat},{lng}  →  {got}")
        time.sleep(1.1)  # Nominatim 限速 1 req/s


if __name__ == "__main__":
    main()
