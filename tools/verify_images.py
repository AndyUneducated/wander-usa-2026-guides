#!/usr/bin/env python3
"""逐条核对数据里的每张图片是否真的存在。

为什么单独做这件事：图片绝大多数放在收起的 <details> 里，浏览器不展开
就不会去取，所以「浏览器里没有加载失败的图」是个假阳性很强的结论。
研究员偶尔会把 Wikimedia 的文件名写错（少一个连字符、扩展名大小写不对），
这类错误只有直接向 Commons 问一次才能发现。

本地图片：检查文件存在且确实是图片（读文件头的魔术字节）。
远程图片：向 Commons API 查该文件是否存在，比 HEAD 直链更可靠且不易触发限流。

用法：
  python3 tools/verify_images.py                # 全部地域
  python3 tools/verify_images.py --region dc
  python3 tools/verify_images.py --local-only   # 跳过联网检查
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
         str(data)], capture_output=True, text=True)
    if res.returncode != 0:
        print(f'⚠️ {region}/data.js 读取失败', file=sys.stderr)
        return []
    return json.loads(res.stdout)


def commons_filename(url: str):
    m = re.search(r'/commons/(?:thumb/)?[0-9a-f]/[0-9a-f]{2}/([^/]+)', url)
    return urllib.parse.unquote(m.group(1)) if m else None


def commons_exists(filename: str):
    """返回 (是否存在, 说明)。存在时说明里带原图尺寸。"""
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
            return None, f'API 出错 {e}'
        except Exception as e:
            if attempt < 2:
                time.sleep(5)
                continue
            return None, f'API 出错 {e}'
    else:
        return None, 'API 反复失败'

    pages = list(d.get('query', {}).get('pages', {}).values())
    if not pages:
        return False, '查询无结果'
    if 'missing' in pages[0] or 'imageinfo' not in pages[0]:
        return False, '该文件在 Commons 上不存在'
    i = pages[0]['imageinfo'][0]
    return True, f'{i.get("width")}x{i.get("height")} {i.get("mime")}'


def suggest(filename: str):
    """文件名写错时，搜一下最可能的正确名字。"""
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
                                f'{where}\n    无法从链接解析出 Commons 文件名：{url}')
                            continue
                        ok, why = commons_exists(fn)
                        if ok:
                            remote_ok += 1
                        elif ok is False:
                            remote_bad += 1
                            msg = (f'{where}\n    ❌ {why}：{fn}')
                            for s in suggest(fn):
                                msg += f'\n       也许应该是：{s}'
                            problems.append(msg)
                        else:
                            problems.append(f'{where}\n    ⚠️ 未能确认：{why}（{fn}）')
                    else:
                        p = ROOT / region / url
                        if not p.exists():
                            local_bad += 1
                            problems.append(f'{where}\n    ❌ 本地文件不存在：{url}')
                            continue
                        head = p.open('rb').read(12)
                        if not any(head.startswith(m) for m in MAGIC):
                            local_bad += 1
                            problems.append(
                                f'{where}\n    ❌ 不是有效图片（文件头 '
                                f'{head[:6]!r}）：{url}')
                        else:
                            local_ok += 1
        stats[region] = (local_ok, local_bad, remote_ok, remote_bad)

    print('=== 图片核对 ===')
    for r, (lo, lb, ro, rb) in stats.items():
        parts = [f'本地 {lo} 张有效']
        if lb:
            parts.append(f'{lb} 张有问题')
        if ro or rb:
            parts.append(f'远程 {ro} 张存在')
        if rb:
            parts.append(f'{rb} 张不存在')
        print(f'  {r:14s}{"，".join(parts)}')

    if problems:
        print(f'\n❌ 共 {len(problems)} 处问题：\n')
        for p in problems:
            print('  ' + p)
        return 1
    print('\n✅ 所有图片都已核对通过')
    return 0


if __name__ == '__main__':
    sys.exit(main())
