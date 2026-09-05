#!/usr/bin/env python3
"""用真实浏览器跑一遍全部页面，验证「能打开 / 功能完整 / 数据完整」。

和 tools/check_all.py 的分工：
  check_all.py  只看 data.js 的静态内容（字段、坐标、排序、图片文件存在性）
  test_pages.py 看页面跑起来之后的实际行为（渲染、地图、折叠、导航、控制台报错）

用法：
  python3 tools/test_pages.py                      # 本地起临时服务器测
  python3 tools/test_pages.py --base https://...   # 测线上站点
  python3 tools/test_pages.py --mobile             # 只跑移动端视口
"""
from __future__ import annotations

import argparse
import functools
import http.server
import json
import socketserver
import sys
import threading
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ['', 'socal/', 'dc/', 'nyc/', 'yellowstone/']

# 地域页应有的结构；落地页（'' ）单独判定
DESKTOP = {'width': 1440, 'height': 900}
MOBILE = {'width': 390, 'height': 844}

# 页面内注入的探针。返回一个 dict，Python 侧再做断言。
PROBE = r"""
() => {
  const q = (s) => document.querySelectorAll(s);
  const imgs = Array.from(document.images);
  const tiles = Array.from(q('img.leaflet-tile'));
  const cards = Array.from(q('.card'));
  const pins  = Array.from(q('.pin'));

  // 导航锚点是否都能落到真实元素上
  const nav = Array.from(q('#region-nav a')).map(a => {
    const h = a.getAttribute('href') || '';
    return { href: h, ok: h.startsWith('#') ? !!document.querySelector(h) : true };
  });

  // 折叠：随机取一张卡片，点一下 summary 看 open 是否翻转
  let foldOk = null;
  if (cards.length) {
    const c = cards[0];
    const before = c.open;
    c.querySelector('summary').click();
    foldOk = c.open !== before;
    c.open = before;
  }

  // 「展开全部 / 收起全部」按钮
  const bulk = Array.from(q('button')).map(b => b.textContent.trim())
                    .filter(t => t.indexOf('全部') > -1);

  // 卡片内的锚点链接（地图弹窗里的「跳到详情」用的是 #id）
  const cardIds = cards.map(c => c.id);

  // 地图弹窗：打开第一个针脚，检查弹窗内容与其中的链接
  let popup = null;
  const marker = document.querySelector('.leaflet-marker-icon');
  if (marker) {
    marker.click();
    const p = document.querySelector('.leaflet-popup-content');
    if (p) {
      const a = Array.from(p.querySelectorAll('a')).map(x => x.getAttribute('href'));
      popup = {
        text: p.textContent.slice(0, 60),
        links: a,
        anchorOk: a.filter(h => h && h.startsWith('#'))
                   .every(h => !!document.querySelector(h))
      };
    }
    const close = document.querySelector('.leaflet-popup-close-button');
    if (close) close.click();
  }

  // 图片是否有溢出容器（此前修过「图片过宽被裁剪」）。
  // 调用方已经把所有 details 展开了，这里保持展开状态，
  // 这样后面的 hScroll 是在「全部内容可见」的最严苛布局下测的。
  let imgOverflow = 0;
  cards.forEach(c => {
    c.querySelectorAll('img').forEach(im => {
      if (im.naturalWidth && im.getBoundingClientRect().width > c.getBoundingClientRect().width + 2) {
        imgOverflow++;
      }
    });
  });

  return {
    title: document.title,
    regions: (window.REGIONS || []).length,
    spots: (window.REGIONS || []).reduce((a, r) => a + r.spots.length, 0),
    maps: q('.map').length,
    cards: cards.length,
    pins: pins.length,
    pinTexts: pins.map(p => p.textContent),
    cardNums: Array.from(q('.card .card-num')).map(e => e.textContent),
    goneCards: q('.card.gone').length,
    goneFlagged: Array.from(q('.card.gone')).every(c => !!c.querySelector('.gone-flag')),
    details: q('details').length,
    imgTotal: imgs.length,
    imgBroken: imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.getAttribute('src')),
    tilesTotal: tiles.length,
    tilesBroken: tiles.filter(i => i.complete && i.naturalWidth === 0).length,
    tilesEsri: tiles.filter(i => (i.src || '').indexOf('arcgisonline') > -1).length,
    nav: nav,
    foldOk: foldOk,
    bulk: bulk,
    dupCardIds: cardIds.length - new Set(cardIds).size,
    popup: popup,
    imgOverflow: imgOverflow,
    heroChips: q('.hero-meta .chip').length,
    overviewFilled: (document.getElementById('overview-body') || {}).innerHTML ?
                    document.getElementById('overview-body').innerHTML.length : 0,
    appendixFilled: (document.getElementById('appendix-body') || {}).innerHTML ?
                    document.getElementById('appendix-body').innerHTML.length : 0,
    hScroll: document.documentElement.scrollWidth > window.innerWidth + 1,
  };
}
"""


def serve(directory: Path):
    handler = functools.partial(http.server.SimpleHTTPRequestHandler,
                                directory=str(directory))

    class Quiet(socketserver.TCPServer):
        allow_reuse_address = True

        def handle_error(self, *a):
            pass

    httpd = Quiet(('127.0.0.1', 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, f'http://127.0.0.1:{httpd.server_address[1]}/'


def run(base: str, viewport: dict, label: str, fails: list, notes: list):
    from playwright.sync_api import sync_playwright

    print(f'\n{"=" * 62}\n  {label}  视口 {viewport["width"]}x{viewport["height"]}\n{"=" * 62}')

    with sync_playwright() as p:
        browser = p.chromium.launch()
        for page_path in PAGES:
            url = base + page_path
            name = '/' + page_path if page_path else '/（落地页）'
            ctx = browser.new_context(viewport=viewport)
            page = ctx.new_page()

            console: list = []
            page.on('console', lambda m: console.append((m.type, m.text))
                    if m.type in ('error', 'warning') else None)
            page.on('pageerror', lambda e: console.append(('pageerror', str(e))))
            failed_req: list = []
            page.on('requestfailed',
                    lambda r: failed_req.append(f'{r.method} {r.url} — {r.failure}'))

            resp = page.goto(url, wait_until='load', timeout=45000)
            status = resp.status if resp else 0
            if status != 200:
                fails.append(f'{label} {name}: HTTP {status}')
                ctx.close()
                continue

            # 等地图瓦片加载
            page.wait_for_timeout(2000)

            # 图片几乎都在收起的 <details> 里，不展开的话浏览器根本不会去取，
            # 「0 张加载失败」就成了假通过。先全部展开、滚到底触发懒加载，
            # 再等图片真正落地。
            page.evaluate("""() => {
              document.querySelectorAll('details').forEach(d => d.open = true);
              document.querySelectorAll('img[loading="lazy"]')
                      .forEach(i => i.loading = 'eager');
            }""")
            page.evaluate("""async () => {
              const step = window.innerHeight;
              for (let y = 0; y < document.body.scrollHeight; y += step) {
                window.scrollTo(0, y);
                await new Promise(r => setTimeout(r, 60));
              }
              window.scrollTo(0, 0);
            }""")
            try:
                page.wait_for_function(
                    'Array.from(document.images).every(i => i.complete)',
                    timeout=60000)
            except Exception:
                pending = page.evaluate(
                    'Array.from(document.images).filter(i=>!i.complete).length')
                notes.append(f'{label} {name} 有 {pending} 张图片超时未加载完')
            page.wait_for_timeout(500)
            try:
                r = page.evaluate(PROBE)
            except Exception as e:
                fails.append(f'{label} {name}: 注入探针失败 {str(e)[:120]}')
                ctx.close()
                continue

            is_landing = page_path == ''
            ok = []

            # --- 能打开 ---
            ok.append(('HTTP 200', True))
            errs = [t for t in console if t[0] in ('error', 'pageerror')]
            # Leaflet 在部分环境会对 passive event listener 发 warning，不算失败
            ok.append((f'无控制台报错（{len(errs)} 条）', not errs))
            if errs:
                for t, m in errs[:4]:
                    notes.append(f'{label} {name} 控制台 [{t}] {m[:150]}')
            ok.append((f'无失败请求（{len(failed_req)} 个）', not failed_req))
            for f in failed_req[:4]:
                notes.append(f'{label} {name} 请求失败 {f[:150]}')

            # --- 数据完整 ---
            if is_landing:
                ok.append(('落地页有四张手册卡片',
                           page.locator('a.guide').count() == 4))
                links = page.eval_on_selector_all(
                    'a.guide', 'els => els.map(e => e.getAttribute("href"))')
                ok.append((f'四张卡片都指向站内 {links}',
                           all(l and not l.startswith('http') for l in links)))
            else:
                ok.append((f'data.js 已加载（{r["regions"]} 子地区 / {r["spots"]} 景点）',
                           r['regions'] > 0))
                ok.append((f'卡片数与数据一致（{r["cards"]} / {r["spots"]}）',
                           r['cards'] == r['spots']))
                ok.append((f'每个子地区一张地图（{r["maps"]} / {r["regions"]}）',
                           r['maps'] == r['regions']))
                ok.append((f'针脚数等于景点数（{r["pins"]} / {r["spots"]}）',
                           r['pins'] == r['spots']))
                ok.append(('地图编号与卡片编号完全对应',
                           r['pinTexts'] == r['cardNums']))
                ok.append((f'总览已填充（{r["overviewFilled"]} 字符）',
                           r['overviewFilled'] > 200))
                ok.append((f'附录已填充（{r["appendixFilled"]} 字符）',
                           r['appendixFilled'] > 100))
                ok.append((f'hero 有摘要 chip（{r["heroChips"]} 个）',
                           r['heroChips'] >= 3))
                ok.append(('卡片 id 无重复', r['dupCardIds'] == 0))
                if r['goneCards']:
                    ok.append((f'{r["goneCards"]} 张红卡都带不可抵达标记',
                               r['goneFlagged']))

            # --- 图片 ---
            ok.append((f'图片无加载失败（共 {r["imgTotal"]} 张）',
                       not r['imgBroken']))
            for s in r['imgBroken'][:5]:
                notes.append(f'{label} {name} 图片加载失败 {s}')
            if not is_landing:
                ok.append((f'图片未溢出卡片（{r["imgOverflow"]} 处）',
                           r['imgOverflow'] == 0))

            # --- 地图 ---
            if not is_landing:
                ok.append((f'瓦片全部加载（{r["tilesTotal"]} 张，{r["tilesBroken"]} 失败）',
                           r['tilesTotal'] > 0 and r['tilesBroken'] == 0))
                ok.append((f'瓦片来自 Esri（{r["tilesEsri"]}/{r["tilesTotal"]}）',
                           r['tilesTotal'] > 0 and r['tilesEsri'] == r['tilesTotal']))
                if r['popup']:
                    ok.append(('点针脚弹出信息窗且其中锚点有效',
                               r['popup']['anchorOk']))
                else:
                    ok.append(('点针脚弹出信息窗', False))

            # --- 交互 ---
            if not is_landing:
                ok.append(('卡片可折叠展开', r['foldOk'] is True))
                ok.append((f'有展开/收起全部按钮（{len(r["bulk"])} 个）',
                           len(r['bulk']) >= 2))
                bad_nav = [n['href'] for n in r['nav'] if not n['ok']]
                ok.append((f'导航锚点全部有效（{len(r["nav"])} 个）', not bad_nav))
                for h in bad_nav:
                    notes.append(f'{label} {name} 导航锚点无目标 {h}')

            # --- 布局 ---
            ok.append(('无横向滚动条', not r['hScroll']))

            bad = [t for t, good in ok if not good]
            mark = '✅' if not bad else '❌'
            print(f'\n  {mark} {name}   {r["title"][:44]}')
            for t, good in ok:
                print(f'      {"✓" if good else "✗"} {t}')
            for t in bad:
                fails.append(f'{label} {name}: {t}')

            ctx.close()
        browser.close()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--base', help='测线上站点，例如 https://user.github.io/repo/')
    ap.add_argument('--mobile', action='store_true', help='只跑移动端视口')
    ap.add_argument('--desktop', action='store_true', help='只跑桌面视口')
    args = ap.parse_args()

    httpd = None
    if args.base:
        base = args.base if args.base.endswith('/') else args.base + '/'
    else:
        httpd, base = serve(ROOT)
        print(f'临时服务器 {base}')

    fails: list = []
    notes: list = []
    try:
        if not args.mobile:
            run(base, DESKTOP, '桌面', fails, notes)
        if not args.desktop:
            run(base, MOBILE, '移动端', fails, notes)
    finally:
        if httpd:
            httpd.shutdown()

    print('\n' + '=' * 62)
    if notes:
        print(f'\n附注 {len(notes)} 条：')
        for n in notes[:25]:
            print('  · ' + n)
    if fails:
        print(f'\n❌ 失败 {len(fails)} 项：')
        for f in fails:
            print('  - ' + f)
        return 1
    print('\n✅ 全部通过')
    return 0


if __name__ == '__main__':
    sys.exit(main())
