#!/usr/bin/env python3
"""Walk every page in a real browser and check that they open, work, and have complete data.

Division of labor with tools/check_all.py:
  check_all.py  inspects only the static contents of data.js (fields, coords, sort order, image files)
  test_pages.py inspects live page behavior (render, maps, collapse, navigation, console errors)

Usage:
  python3 tools/test_pages.py                      # spin up a local temp server
  python3 tools/test_pages.py --base https://...   # test a live site
  python3 tools/test_pages.py --mobile             # mobile viewport only
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

# Region pages have a shared structure; the landing page ('') is checked separately
DESKTOP = {'width': 1440, 'height': 900}
MOBILE = {'width': 390, 'height': 844}

# Probe injected into the page. Returns a dict; Python then asserts on it.
PROBE = r"""
() => {
  const q = (s) => document.querySelectorAll(s);
  const imgs = Array.from(document.images);
  const tiles = Array.from(q('img.leaflet-tile'));
  const cards = Array.from(q('.card'));
  // Count pins only on sub-region maps. The all-region map plots the same
  // spots again, so adding both would be exactly 2× the spot count and
  // would break the "pin count equals spot count" assertion.
  const pins  = Array.from(q('.pin')).filter(p => !p.closest('.map-all'));

  // Do all nav anchors resolve to real elements?
  const nav = Array.from(q('#region-nav a')).map(a => {
    const h = a.getAttribute('href') || '';
    return { href: h, ok: h.startsWith('#') ? !!document.querySelector(h) : true };
  });

  // Collapse: click the first card's summary and see whether `open` flips
  let foldOk = null;
  if (cards.length) {
    const c = cards[0];
    const before = c.open;
    c.querySelector('summary').click();
    foldOk = c.open !== before;
    c.open = before;
  }

  // "Expand all / Collapse all" buttons
  const bulk = Array.from(q('button')).map(b => b.textContent.trim())
                    .filter(t => t.indexOf('全部') > -1);

  // In-card anchors (map popups use #id to jump to the detail)
  const cardIds = cards.map(c => c.id);

  // Map popup: open the first pin and check popup content plus its links
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

  // Do images overflow their container (we previously fixed "image too wide and cropped")?
  // The caller has already opened every details element; keep them open so
  // the later hScroll check runs against the strictest "all content visible" layout.
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
    /* Count all-region maps (.map-all) separately from sub-region maps:
       the overview map plots every spot again, so mixing them doubles the pin count. */
    maps: q('.map:not(.map-all)').length,
    allMaps: q('.map-all').length,
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

    /* ---- Post-redesign widgets ---- */
    /* Stars: we used to concatenate ★ / ☆ / ⯨. The half-star glyph is missing
       in most Windows fonts and rendered as a row of yellow squares. Everything
       is now inline SVG, so count SVGs and confirm no leftover star characters. */
    starSvg: q('.st').length,
    starGlyphs: (document.body.innerText.match(/[\u2605\u2606\u2BE8]/g) || []).length,
    /* Each SVG should be 5 empty stars + 5 filled stars; the filled group is clipped by score */
    starShape: (() => {
      const s = document.querySelector('.st');
      if (!s) return null;
      const clip = s.querySelector('clipPath rect');
      return {
        off: s.querySelectorAll('.st-off').length,
        on: s.querySelectorAll('.st-on').length,
        clipW: clip ? parseFloat(clip.getAttribute('width')) : -1,
        boxW: parseFloat((s.getAttribute('viewBox') || '0 0 0 0').split(' ')[2])
      };
    })(),
    /* A perfect 5 should fill the whole row: clip width equals the full width */
    starFull: (() => {
      const rows = Array.from(q('.rt-must'));
      const five = rows.find(r => (r.querySelector('.rt-num') || {}).textContent === '5');
      if (!five) return null;
      const s = five.querySelector('.st');
      const clip = s.querySelector('clipPath rect');
      return parseFloat(clip.getAttribute('width')) ===
             parseFloat(s.getAttribute('viewBox').split(' ')[2]);
    })(),
    mustRows: q('.rt-must').length,
    photoRows: q('.rt-photo').length,
    /* Tier copy ("worth a special trip") should exist but take no layout by default */
    tierHidden: (() => {
      const t = document.querySelector('.rt-tier');
      if (!t) return null;
      return getComputedStyle(t).opacity === '0';
    })(),

    /* Quick-look bar and key-points list */
    quickBars: q('.quick').length,
    quickCells: q('.qk').length,
    ptItems: q('.pt').length,
    ptEmptyLead: Array.from(q('.pt-lead')).filter(e => !e.textContent.trim()).length,
    sectionKeys: Array.from(new Set(Array.from(q('.row > .k')).map(e => e.textContent))),

    /* Explore toolbar */
    xbar: q('#xbar').length,
    xFilters: Array.from(q('#xbar [data-f]')).map(b => b.dataset.f),
    xSorts: Array.from(q('#xbar [data-s]')).map(b => b.dataset.s),
    /* Opposite pairs (free/paid, no-booking/booking-required) are welded into
       one segmented control, so the pair must sit inside a single .xseg */
    xSegs: Array.from(q('#xbar .xseg'))
             .map(s => Array.from(s.querySelectorAll('[data-f]')).map(b => b.dataset.f)),

    /* Appendix: every section collapsed into its own card, with a short title
       and a line saying which spots it covers. No bare headings left behind. */
    apxFolds: q('#appendix-body > details.apx-fold').length,
    apxStrayHeads: q('#appendix-body .apx-h').length,
    apxTitles: Array.from(q('.apx-sum')).map(s => [
      (s.querySelector('.apx-t') || {}).textContent || '',
      (s.querySelector('.apx-scope') || {}).textContent || ''
    ]),

    /* A card must be exactly as wide as the map above it, so the stack reads as
       one column instead of stepping in and out at the map boundary. */
    cardVsMap: (() => {
      const c = document.querySelector('#regions .card');
      const m = document.querySelector('#regions .map');
      if (!c || !m) return null;
      return Math.round(c.getBoundingClientRect().width -
                        m.getBoundingClientRect().width);
    })(),
    /* Narrower than the container, but still starting on the same left edge as
       the section heading and the map above it — capping the width must not
       knock the whole card stack out of the column. */
    cardOffset: (() => {
      const c = document.querySelector('#regions .card');
      const h = document.querySelector('#regions h2');
      if (!c || !h) return null;
      return Math.round(c.getBoundingClientRect().left - h.getBoundingClientRect().left);
    })(),

    /* Offline / add-to-home declarations */
    manifest: !!document.querySelector('link[rel="manifest"]'),
    swReg: !!document.querySelector('script[src*="sw-reg.js"]'),

    /* Site-status copy like "this site is still under construction" should be gone.
       Spot-level construction is a real fact and must stay, so only match phrases
       that describe the site itself. */
    wipWords: (document.body.innerText.match(/装配中|改版中|敬请期待|本页施工/g) || []),
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

    # Threaded so concurrent Service Worker precache requests cannot stall the server
    class Quiet(socketserver.ThreadingTCPServer):
        allow_reuse_address = True
        daemon_threads = True

        def handle_error(self, *a):
            pass

    httpd = Quiet(('127.0.0.1', 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, f'http://127.0.0.1:{httpd.server_address[1]}/'


def run(base: str, viewport: dict, label: str, fails: list, notes: list):
    from playwright.sync_api import sync_playwright

    print(f'\n{"=" * 62}\n  {label}  viewport {viewport["width"]}x{viewport["height"]}\n{"=" * 62}')

    # Images on each region page add up to about 50–60 MB. Locally that is file
    # reads; remotely they actually go over the network, and below we force every
    # image to eager so they all fetch at once — remote runs need a long timeout.
    remote = not base.startswith('http://127.0.0.1')
    img_timeout = 300_000 if remote else 60_000

    with sync_playwright() as p:
        browser = p.chromium.launch()
        for page_path in PAGES:
            url = base + page_path
            name = '/' + page_path if page_path else '/ (landing)'
            ctx = browser.new_context(viewport=viewport)
            page = ctx.new_page()

            console: list = []
            page.on('console', lambda m: console.append((m.type, m.text))
                    if m.type in ('error', 'warning') else None)
            page.on('pageerror', lambda e: console.append(('pageerror', str(e))))
            failed_req: list = []
            page.on('requestfailed',
                    lambda r: failed_req.append(f'{r.method} {r.url} — {r.failure}'))

            # Wait only for DOM ready, not load. 'load' also waits for in-viewport
            # images; remotely that is tens of MB and 45s is not enough, which
            # reports a false "page will not open" failure. Images have an explicit
            # wait below, so there is no need to wait twice here.
            resp = page.goto(url, wait_until='domcontentloaded', timeout=90000)
            status = resp.status if resp else 0
            if status != 200:
                fails.append(f'{label} {name}: HTTP {status}')
                ctx.close()
                continue

            # Wait for map tiles
            page.wait_for_timeout(2000)

            # Whether a section ships open or collapsed can only be read before
            # the expansion below, which force-opens every <details> on the page.
            shipped_folded = page.evaluate("""() => {
              const d = document.querySelector('#overview details.sec-fold');
              return d ? !d.open : null;
            }""")

            # Almost all images sit inside collapsed <details>; if we do not open
            # them the browser never fetches, and "0 failed loads" is a false pass.
            # Expand everything, scroll to the bottom to trigger lazy load, then
            # wait until images actually land.
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
                    timeout=img_timeout)
            except Exception:
                pending = page.evaluate(
                    'Array.from(document.images).filter(i=>!i.complete).length')
                notes.append(f'{label} {name}: {pending} image(s) timed out before finishing load')
            page.wait_for_timeout(500)
            try:
                r = page.evaluate(PROBE)
            except Exception as e:
                fails.append(f'{label} {name}: probe injection failed {str(e)[:120]}')
                ctx.close()
                continue

            is_landing = page_path == ''
            ok = []

            # --- Opens ---
            ok.append(('HTTP 200', True))
            errs = [t for t in console if t[0] in ('error', 'pageerror')]
            # Leaflet may warn about passive event listeners in some environments; not a failure
            ok.append((f'no console errors ({len(errs)})', not errs))
            if errs:
                for t, m in errs[:4]:
                    notes.append(f'{label} {name} console [{t}] {m[:150]}')
            ok.append((f'no failed requests ({len(failed_req)})', not failed_req))
            for f in failed_req[:4]:
                notes.append(f'{label} {name} request failed {f[:150]}')

            # --- Data complete ---
            if is_landing:
                ok.append(('landing page has four guide cards',
                           page.locator('a.guide').count() == 4))
                links = page.eval_on_selector_all(
                    'a.guide', 'els => els.map(e => e.getAttribute("href"))')
                ok.append((f'all four cards point in-site {links}',
                           all(l and not l.startswith('http') for l in links)))
            else:
                ok.append((f'data.js loaded ({r["regions"]} sub-regions / {r["spots"]} spots)',
                           r['regions'] > 0))
                ok.append((f'card count matches data ({r["cards"]} / {r["spots"]})',
                           r['cards'] == r['spots']))
                ok.append((f'one map per sub-region ({r["maps"]} / {r["regions"]})',
                           r['maps'] == r['regions']))
                ok.append((f'all-region map exists and there is only one ({r["allMaps"]})',
                           r['allMaps'] == 1))
                ok.append((f'pin count equals spot count ({r["pins"]} / {r["spots"]})',
                           r['pins'] == r['spots']))
                ok.append(('map numbers match card numbers exactly',
                           r['pinTexts'] == r['cardNums']))
                ok.append((f'overview filled ({r["overviewFilled"]} chars)',
                           r['overviewFilled'] > 200))
                # The overview is a pre-trip read; on the road it would only push
                # the spots off the first screen, so the section ships collapsed.
                ok.append(('overview ships collapsed', shipped_folded is True))
                ok.append((f'appendix filled ({r["appendixFilled"]} chars)',
                           r['appendixFilled'] > 100))
                # The hero bar now keeps only seasonal notes and the verified date:
                # spot and sub-region counts already live in the overview-map title,
                # and repeating them blows out the banner.
                ok.append((f'hero has summary chips ({r["heroChips"]})',
                           r['heroChips'] >= 2))
                ok.append(('card ids are unique', r['dupCardIds'] == 0))
                if r['goneCards']:
                    ok.append((f'{r["goneCards"]} red card(s) all have an unreachable marker',
                               r['goneFlagged']))

            # --- Images ---
            ok.append((f'no failed image loads ({r["imgTotal"]} total)',
                       not r['imgBroken']))
            for s in r['imgBroken'][:5]:
                notes.append(f'{label} {name} image failed to load {s}')
            if not is_landing:
                ok.append((f'images do not overflow cards ({r["imgOverflow"]} overflow(s))',
                           r['imgOverflow'] == 0))

            # --- Maps ---
            if not is_landing:
                ok.append((f'all tiles loaded ({r["tilesTotal"]} tiles, {r["tilesBroken"]} failed)',
                           r['tilesTotal'] > 0 and r['tilesBroken'] == 0))
                ok.append((f'tiles come from Esri ({r["tilesEsri"]}/{r["tilesTotal"]})',
                           r['tilesTotal'] > 0 and r['tilesEsri'] == r['tilesTotal']))
                if r['popup']:
                    ok.append(('clicking a pin opens a popup whose anchors are valid',
                               r['popup']['anchorOk']))
                else:
                    ok.append(('clicking a pin opens a popup', False))

            # --- Interaction ---
            if not is_landing:
                ok.append(('cards can collapse and expand', r['foldOk'] is True))
                ok.append((f'expand-all / collapse-all buttons present ({len(r["bulk"])})',
                           len(r['bulk']) >= 2))
                bad_nav = [n['href'] for n in r['nav'] if not n['ok']]
                ok.append((f'all nav anchors are valid ({len(r["nav"])})', not bad_nav))
                for h in bad_nav:
                    notes.append(f'{label} {name} nav anchor has no target {h}')

            # --- Post-redesign widgets ---
            ok.append((f'page has no "under construction / assembling" site-status copy ({r["wipWords"]})',
                       not r['wipWords']))
            ok.append(('manifest and Service Worker registration are declared',
                       r['manifest'] and r['swReg']))
            if not is_landing:
                # Stars: the point is "no longer depend on font glyphs"
                ok.append((f'stars are inline SVG ({r["starSvg"]})', r['starSvg'] > 0))
                ok.append((f'no leftover star characters on the page ({r["starGlyphs"]})',
                           r['starGlyphs'] == 0))
                sh = r['starShape']
                ok.append((f'each star row has 5 empty + 5 filled and a valid clip ({sh})',
                           bool(sh) and sh['off'] == 5 and sh['on'] == 5
                           and 0 <= sh['clipW'] <= sh['boxW']))
                if r['starFull'] is not None:
                    ok.append(('a 5-star rating fills the whole row', r['starFull'] is True))
                # Dual scores side by side
                ok.append((f'photo value also has stars (visit {r["mustRows"]} / photo {r["photoRows"]} rows)',
                           r['photoRows'] > 0))
                if r['tierHidden'] is not None:
                    ok.append(('tier copy takes no layout by default (shown on hover/click)',
                               r['tierHidden'] is True))
                # Quick-look bar and key-points list
                ok.append((f'cards have a quick-look bar ({r["quickBars"]} bars / {r["quickCells"]} cells)',
                           r['quickBars'] > 0))
                ok.append((f'key points are a summary list ({r["ptItems"]} items)', r['ptItems'] > 0))
                ok.append((f'no empty summary rows ({r["ptEmptyLead"]})',
                           r['ptEmptyLead'] == 0))
                keys = r['sectionKeys']
                ok.append((f'sections renamed away from the old headings ({keys})',
                           '核心看点' not in keys and '游览要点' not in keys))
                # Toolbar
                ok.append((f'explore toolbar present (filters {r["xFilters"]} / sorts {r["xSorts"]})',
                           r['xbar'] == 1 and len(r['xSorts']) >= 2))
                # The two location-based sorts lead: standing at the roadside,
                # "nearest to me" and "on my way" are the only ones worth a tap.
                ok.append((f'location sorts come first ({r["xSorts"][:2]})',
                           r['xSorts'][:2] == ['near', 'route']))
                for pair in (['free', 'paid'], ['nobook', 'needbook']):
                    if not all(k in r['xFilters'] for k in pair):
                        continue
                    ok.append((f'{pair} is one segmented control ({r["xSegs"]})',
                               pair in r['xSegs']))
                # Appendix folded into per-section cards
                ok.append((f'appendix is folded into sections ({r["apxFolds"]})',
                           r['apxFolds'] >= 3))
                ok.append((f'no bare appendix headings left ({r["apxStrayHeads"]})',
                           r['apxStrayHeads'] == 0))
                blank = [t for t in r['apxTitles'] if not t[0].strip() or not t[1].strip()]
                ok.append((f'every appendix section has a title and a scope line ({len(r["apxTitles"])})',
                           r['apxTitles'] and not blank))
                for t, s in r['apxTitles']:
                    notes.append(f'{label} {name} appendix section「{t}」→ {s}')
                # Card width
                ok.append((f'cards are exactly as wide as the map (delta {r["cardVsMap"]}px)',
                           r['cardVsMap'] is not None and abs(r['cardVsMap']) <= 2))
                ok.append((f'cards still start on the section left edge (offset {r["cardOffset"]}px)',
                           r['cardOffset'] is not None and abs(r['cardOffset']) <= 2))

            # --- Do filter and sort actually work? ---
            # Above we only checked that the controls exist. Click them for real:
            # a filter must drop some cards, every remaining card must satisfy the
            # condition, and clicking again must restore the full set;
            # sort must actually change card order, not merely light up the button.
            if not is_landing and r['xbar'] == 1:
                # (key, human-readable condition, JS expression that is true for a card
                #  that should NOT have survived the filter)
                filter_cases = [
                    ('must4', 'must >= 4', "!(parseFloat(c.dataset.must) >= 4)"),
                    ('quick', 'mins <= 60', "!(c.dataset.mins && parseFloat(c.dataset.mins) <= 60)"),
                    ('free', 'admission is free', "c.dataset.free !== '1'"),
                    ('paid', 'admission costs money', "c.dataset.paid !== '1'"),
                    ('nobook', 'no booking needed', "c.dataset.book !== 'no'"),
                    ('needbook', 'booking required', "c.dataset.book !== 'yes'"),
                ]
                for name_f, cond, bad_expr in filter_cases:
                    if name_f not in r['xFilters']:
                        continue
                    before = page.evaluate(
                        "() => document.querySelectorAll('details.card:not([hidden])').length")
                    page.click(f'#xbar [data-f="{name_f}"]')
                    page.wait_for_timeout(250)
                    res = page.evaluate("""() => {
                      const vis = Array.from(
                        document.querySelectorAll('details.card:not([hidden])'));
                      const bad = vis.filter(c => %s);
                      return { n: vis.length, bad: bad.length };
                    }""" % bad_expr)
                    ok.append((f'filter {name_f} applies and every result satisfies "{cond}"'
                               f' ({before} → {res["n"]}, out of range {res["bad"]})',
                               0 < res['n'] < before and res['bad'] == 0))
                    page.click(f'#xbar [data-f="{name_f}"]')
                    page.wait_for_timeout(250)
                    after = page.evaluate(
                        "() => document.querySelectorAll('details.card:not([hidden])').length")
                    ok.append((f'clearing filter {name_f} fully restores the list ({after} / {before})',
                               after == before))

                # Within a segmented pair only one side can be lit: picking the
                # opposite must release the first, not stack two contradictory
                # conditions and produce an empty page.
                if all(k in r['xFilters'] for k in ('free', 'paid')):
                    page.click('#xbar [data-f="free"]')
                    page.wait_for_timeout(200)
                    page.click('#xbar [data-f="paid"]')
                    page.wait_for_timeout(250)
                    seg = page.evaluate("""() => ({
                      free: document.querySelector('#xbar [data-f="free"]').classList.contains('on'),
                      paid: document.querySelector('#xbar [data-f="paid"]').classList.contains('on'),
                      n: document.querySelectorAll('details.card:not([hidden])').length
                    })""")
                    ok.append((f'picking 收费 releases 免费 and still shows results ({seg})',
                               seg['paid'] and not seg['free'] and seg['n'] > 0))
                    page.click('#xbar [data-f="paid"]')
                    page.wait_for_timeout(200)

                if 'must' in r['xSorts']:
                    page.click('#xbar [data-s="must"]')
                    page.wait_for_timeout(300)
                    desc = page.evaluate("""() => {
                      let bad = 0, checked = 0;
                      document.querySelectorAll('#regions > section').forEach(sec => {
                        const v = Array.from(sec.querySelectorAll('details.card'))
                          .map(c => c.dataset.must === '' ? -1 : parseFloat(c.dataset.must));
                        for (let i = 1; i < v.length; i++) {
                          checked++;
                          if (v[i] > v[i - 1]) bad++;
                        }
                      });
                      return { bad: bad, checked: checked };
                    }""")
                    ok.append((f'after sorting by visit value, each region is non-increasing '
                               f'({desc["checked"]} pairs compared, {desc["bad"]} inversions)',
                               desc['checked'] > 0 and desc['bad'] == 0))
                    page.click('#xbar [data-s="n"]')
                    page.wait_for_timeout(300)
                    restored = page.evaluate("""() => {
                      let bad = 0;
                      document.querySelectorAll('#regions > section').forEach(sec => {
                        const v = Array.from(sec.querySelectorAll('details.card'))
                          .map(c => parseFloat(c.dataset.n));
                        for (let i = 1; i < v.length; i++) if (v[i] < v[i - 1]) bad++;
                      });
                      return bad;
                    }""")
                    ok.append((f'switching back to number order restores original order ({restored} inversions)',
                               restored == 0))

            # --- Layout ---
            ok.append(('no horizontal scrollbar', not r['hScroll']))

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
    ap.add_argument('--base', help='Test a live site, e.g. https://user.github.io/repo/')
    ap.add_argument('--mobile', action='store_true', help='Mobile viewport only')
    ap.add_argument('--desktop', action='store_true', help='Desktop viewport only')
    args = ap.parse_args()

    httpd = None
    if args.base:
        base = args.base if args.base.endswith('/') else args.base + '/'
    else:
        httpd, base = serve(ROOT)
        print(f'Temp server {base}')

    fails: list = []
    notes: list = []
    try:
        if not args.mobile:
            run(base, DESKTOP, 'desktop', fails, notes)
        if not args.desktop:
            run(base, MOBILE, 'mobile', fails, notes)
    finally:
        if httpd:
            httpd.shutdown()

    print('\n' + '=' * 62)
    if notes:
        print(f'\n{len(notes)} note(s):')
        for n in notes[:25]:
            print('  · ' + n)
    if fails:
        print(f'\n❌ {len(fails)} failure(s):')
        for f in fails:
            print('  - ' + f)
        return 1
    print('\n✅ All passed')
    return 0


if __name__ == '__main__':
    sys.exit(main())
