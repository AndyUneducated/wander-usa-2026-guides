#!/usr/bin/env python3
"""Take page screenshots for visual review.

  python tools/screenshots.py                # default key views
  python tools/screenshots.py --full         # full-page long screenshot
  python tools/screenshots.py --mobile       # narrow viewport

Screenshots are written to tools/.shots/; that directory is not committed.
"""
import argparse
import functools
import http.server
import pathlib
import socketserver
import threading

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'tools' / '.shots'

# (filename, page path, action to run after load)
VIEWS = [
    ('landing', '', None),
    ('all-spots', 'all.html', None),
    ('nyc-allmap', 'nyc/#all-map', None),
    ('nyc-cards', 'nyc/#manhattan-midtown', None),
    ('nyc-card-open', 'nyc/#top-of-the-rock', 'open-first'),
    ('nyc-copy', 'nyc/#manhattan-midtown', 'copy-title'),
    ('nyc-search', 'nyc/', 'search'),
    ('socal-cards', 'socal/#big-sur', None),
    # views added after the redesign
    ('nyc-rating', 'nyc/#manhattan-midtown', 'hover-rating'),
    ('nyc-points', 'nyc/#the-met', 'open-points'),
    ('nyc-filter', 'nyc/', 'filter'),
    ('nyc-nearby', 'nyc/', 'nearby'),
    ('nyc-route', 'nyc/', 'route'),
]

# "Nearest to me" and "Along the way" need a real coordinate to run. Times Square
# is used as a stand-in so we can check distance math and panel layout, not just
# that the buttons exist.
FAKE_POS = {'latitude': 40.7580, 'longitude': -73.9855}


def serve(directory: pathlib.Path):
    class Handler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):  # hundreds of requests per shot; logs would drown the results
            pass

    handler = functools.partial(Handler, directory=str(directory))

    # Must be multithreaded: Service Worker install fetches many files concurrently;
    # a single-threaded TCPServer would stall later requests and the page would
    # never reach DOMContentLoaded.
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
    ap.add_argument('--full', action='store_true', help='full-page screenshot')
    ap.add_argument('--mobile', action='store_true', help='390x844 narrow viewport')
    ap.add_argument('--only', default='', help='only capture views whose names contain this substring')
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
                # click a proper name in the title: must copy, show a toast, and not expand the card
                ctx.grant_permissions(['clipboard-read', 'clipboard-write'])
                page.click('details.card .card-title .cp')
                page.wait_for_timeout(400)
                state = page.evaluate("""() => {
                    const c = document.querySelector('details.card');
                    const t = document.getElementById('toast');
                    return { opened: c.open, toast: t ? t.textContent : null };
                }""")
                print('    after title click: card opened=' + str(state['opened']) +
                      '  toast=' + str(state['toast']))
            elif action == 'search':
                page.fill('#q', '博物馆')
                page.wait_for_timeout(600)
            elif action == 'hover-rating':
                # hover the visit-value row; the tier label ("worth a dedicated trip") should slide in
                page.hover('details.card .rt-must')
                page.wait_for_timeout(600)
                tier = page.evaluate("""() => {
                    const t = document.querySelector('.rt-must .rt-tier');
                    return t ? { text: t.textContent,
                                 shown: getComputedStyle(t).opacity !== '0' } : null;
                }""")
                print('    hover rating row: tier "' + str(tier and tier['text']) +
                      '" visible=' + str(tier and tier['shown']))
            elif action == 'open-points':
                # expand a card, then open its second bullet to check summary + detail layering
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
                # enable two filters and check toolbar state plus result count
                page.click('#xbar [data-f="must4"]')
                page.wait_for_timeout(300)
                page.click('#xbar [data-f="nobook"]')
                page.wait_for_timeout(600)
                n = page.evaluate(
                    "() => document.querySelectorAll('details.card:not([hidden])').length")
                print(f'    after filters "rating 4+ + no reservation": {n} spots left')
                page.evaluate("() => window.scrollTo(0, 0)")
            elif action in ('nearby', 'route'):
                page.click(f'#xbar [data-s="{"near" if action == "nearby" else "route"}"]')
                # geolocation is async; wait for the panel before capturing
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
                print(f'    fake position: Times Square  panel "{info["head"]}"  {info["n"]} rows')
                for t in info['top']:
                    print(f'      {t["d"]:>10}  {t["name"]}')
                # nav links must include the spot's coordinates or the click is useless
                assert info['top'][0]['go'] and 'query=' in info['top'][0]['go'], 'nav link missing coordinates'
                # the panel is inserted after overview; scrolling to top would miss it
                page.evaluate(
                    "() => document.getElementById('xp-panel')"
                    ".scrollIntoView({block: 'start'})")
                page.wait_for_timeout(500)
            # Let hash targeting and lazy-loaded images settle. The copy toast only
            # lasts two seconds; waiting this extra beat would capture after it vanishes.
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
