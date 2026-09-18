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
    ('nyc-allmap', 'nyc/#all-map', None),
    ('nyc-cards', 'nyc/#manhattan-midtown', None),
    ('nyc-card-open', 'nyc/#top-of-the-rock', 'open-first'),
    ('nyc-copy', 'nyc/#manhattan-midtown', 'copy-title'),
    ('nyc-search', 'nyc/', 'search'),
    ('socal-cards', 'socal/#big-sur', None),
    # 改版后新增的部件
    ('nyc-rating', 'nyc/#manhattan-midtown', 'hover-rating'),
    ('nyc-points', 'nyc/#the-met', 'open-points'),
    ('nyc-filter', 'nyc/', 'filter'),
    ('nyc-nearby', 'nyc/', 'nearby'),
    ('nyc-route', 'nyc/', 'route'),
]

# 「离我最近」与「顺路」要真的有个坐标才能跑。这里用时代广场的位置模拟，
# 不然只能验证按钮存在，验不到距离算得对不对、面板长什么样。
FAKE_POS = {'latitude': 40.7580, 'longitude': -73.9855}


def serve(directory: pathlib.Path):
    class Handler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):  # 每张图上百个请求，日志会把结论冲掉
            pass

    handler = functools.partial(Handler, directory=str(directory))

    # 必须多线程：Service Worker 装载时会并发抓一批文件，单线程的
    # TCPServer 会被排在后面的请求堵死，页面就一直等不到 DOMContentLoaded。
    class Quiet(socketserver.ThreadingTCPServer):
        allow_reuse_address = True
        daemon_threads = True

        def handle_error(self, *a):
            pass

    httpd = Quiet(('127.0.0.1', 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, f'http://127.0.0.1:{httpd.server_address[1]}/'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--full', action='store_true', help='整页长图')
    ap.add_argument('--mobile', action='store_true', help='390x844 窄视口')
    ap.add_argument('--only', default='', help='只拍名字含该子串的视图')
    args = ap.parse_args()
    views = [v for v in VIEWS if args.only in v[0]]

    from playwright.sync_api import sync_playwright

    OUT.mkdir(parents=True, exist_ok=True)
    httpd, base = serve(ROOT)
    vp = {'width': 390, 'height': 844} if args.mobile else {'width': 1400, 'height': 950}
    suffix = '-mobile' if args.mobile else ''

    with sync_playwright() as p:
        browser = p.chromium.launch()
        for name, path, action in views:
            geo = action in ('nearby', 'route')
            ctx = browser.new_context(
                viewport=vp, device_scale_factor=2,
                geolocation=FAKE_POS if geo else None,
                permissions=['geolocation'] if geo else None)
            page = ctx.new_page()
            page.goto(base + path, wait_until='domcontentloaded', timeout=90000)
            page.wait_for_timeout(2500)

            if action == 'open-first':
                page.evaluate("""() => {
                    const c = document.querySelector('details.card');
                    if (c) { c.open = true; c.scrollIntoView({block: 'start'}); }
                }""")
            elif action == 'copy-title':
                # 点一下标题里的专名：要能复制、要弹提示、且不能把卡片撑开
                ctx.grant_permissions(['clipboard-read', 'clipboard-write'])
                page.click('details.card .card-title .cp')
                page.wait_for_timeout(400)
                state = page.evaluate("""() => {
                    const c = document.querySelector('details.card');
                    const t = document.getElementById('toast');
                    return { opened: c.open, toast: t ? t.textContent : null };
                }""")
                print('    点标题后：卡片展开=' + str(state['opened']) +
                      '  提示=' + str(state['toast']))
            elif action == 'search':
                page.fill('#q', '博物馆')
                page.wait_for_timeout(600)
            elif action == 'hover-rating':
                # 悬停在游览价值那一行上，分档文字（「值得专程前往」）应该滑出来
                page.hover('details.card .rt-must')
                page.wait_for_timeout(600)
                tier = page.evaluate("""() => {
                    const t = document.querySelector('.rt-must .rt-tier');
                    return t ? { text: t.textContent,
                                 shown: getComputedStyle(t).opacity !== '0' } : null;
                }""")
                print('    悬停评分行：分档「' + str(tier and tier['text']) +
                      '」可见=' + str(tier and tier['shown']))
            elif action == 'open-points':
                # 展开一张卡片，再点开其中第二条要点，看「摘要 + 详情」的层次
                page.evaluate("""() => {
                    const c = document.querySelector('details.card');
                    if (c) { c.open = true; c.scrollIntoView({block: 'start'}); }
                }""")
                page.wait_for_timeout(500)
                pts = page.query_selector_all('details.card .pt > details')
                if len(pts) > 1:
                    pts[1].query_selector('summary').click()
                page.wait_for_timeout(500)
            elif action == 'filter':
                # 点亮两个筛选条件，看工具条的状态与结果条数
                page.click('#xbar [data-f="must4"]')
                page.wait_for_timeout(300)
                page.click('#xbar [data-f="nobook"]')
                page.wait_for_timeout(600)
                n = page.evaluate(
                    "() => document.querySelectorAll('details.card:not([hidden])').length")
                print(f'    筛选「游览 4 分以上 + 免预约」后剩 {n} 个景点')
                page.evaluate("() => window.scrollTo(0, 0)")
            elif action in ('nearby', 'route'):
                page.click(f'#xbar [data-s="{"near" if action == "nearby" else "route"}"]')
                # 定位是异步的，等面板真的出现再截图
                page.wait_for_selector('#xp-panel .near-li', timeout=15000)
                page.wait_for_timeout(700)
                info = page.evaluate("""() => {
                    const li = Array.from(document.querySelectorAll('#xp-panel .near-li'));
                    return {
                      n: li.length,
                      head: (document.querySelector('#xp-panel h2') || {}).textContent,
                      top: li.slice(0, 3).map(x => ({
                        name: x.querySelector('.near-t').textContent.trim().slice(0, 34),
                        d: x.querySelector('.near-d').textContent,
                        go: (x.querySelector('.near-go') || {}).href
                      }))
                    };
                }""")
                print(f'    模拟位置：时代广场  面板「{info["head"]}」共 {info["n"]} 条')
                for t in info['top']:
                    print(f'      {t["d"]:>10}  {t["name"]}')
                # 导航链接必须带上该景点的坐标，否则点了等于没用
                assert info['top'][0]['go'] and 'query=' in info['top'][0]['go'], '导航链接缺坐标'
                # 面板插在总览之后，回到页顶就拍不到它了
                page.evaluate(
                    "() => document.getElementById('xp-panel')"
                    ".scrollIntoView({block: 'start'})")
                page.wait_for_timeout(500)
            # 让 hash 定位与懒加载图片落位。复制提示只显示两秒，
            # 这一档再等就只能拍到它消失之后的画面了。
            if action not in ('copy-title', 'nearby', 'route'):
                page.wait_for_timeout(1800)

            dest = OUT / f'{name}{suffix}.png'
            page.screenshot(path=str(dest), full_page=args.full)
            print(f'  {dest.relative_to(ROOT)}')
            ctx.close()
        browser.close()

    httpd.shutdown()


if __name__ == '__main__':
    main()
