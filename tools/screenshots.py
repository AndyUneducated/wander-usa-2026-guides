#!/usr/bin/env python3
"""给页面截图，用于人工核对视觉改动。

  python tools/screenshots.py                # 默认几张关键视图
  python tools/screenshots.py --full         # 整页长图
  python tools/screenshots.py --mobile       # 窄视口

截图写到 tools/.shots/，该目录不入库。
"""
import argparse
import functools
import http.server
import pathlib
import socketserver
import threading

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'tools' / '.shots'

# (文件名, 页面路径, 进页后要先做的事)
VIEWS = [
    ('landing', '', None),
    ('all-spots', 'all.html', None),
    ('nyc-cards', 'nyc/#manhattan-midtown', None),
    ('nyc-card-open', 'nyc/#top-of-the-rock', 'open-first'),
    ('nyc-search', 'nyc/', 'search'),
    ('socal-cards', 'socal/#big-sur', None),
]


def serve(directory: pathlib.Path):
    handler = functools.partial(http.server.SimpleHTTPRequestHandler,
                                directory=str(directory))

    class Quiet(socketserver.TCPServer):
        allow_reuse_address = True

        def handle_error(self, *a):
            pass

    httpd = Quiet(('127.0.0.1', 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, f'http://127.0.0.1:{httpd.server_address[1]}/'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--full', action='store_true', help='整页长图')
    ap.add_argument('--mobile', action='store_true', help='390x844 窄视口')
    args = ap.parse_args()

    from playwright.sync_api import sync_playwright

    OUT.mkdir(parents=True, exist_ok=True)
    httpd, base = serve(ROOT)
    vp = {'width': 390, 'height': 844} if args.mobile else {'width': 1400, 'height': 950}
    suffix = '-mobile' if args.mobile else ''

    with sync_playwright() as p:
        browser = p.chromium.launch()
        for name, path, action in VIEWS:
            ctx = browser.new_context(viewport=vp, device_scale_factor=2)
            page = ctx.new_page()
            page.goto(base + path, wait_until='domcontentloaded', timeout=90000)
            page.wait_for_timeout(2500)

            if action == 'open-first':
                page.evaluate("""() => {
                    const c = document.querySelector('details.card');
                    if (c) { c.open = true; c.scrollIntoView({block: 'start'}); }
                }""")
            elif action == 'search':
                page.fill('#q', '博物馆')
                page.wait_for_timeout(600)
            # 让 hash 定位与懒加载图片落位
            page.wait_for_timeout(1800)

            dest = OUT / f'{name}{suffix}.png'
            page.screenshot(path=str(dest), full_page=args.full)
            print(f'  {dest.relative_to(ROOT)}')
            ctx.close()
        browser.close()

    httpd.shutdown()


if __name__ == '__main__':
    main()
