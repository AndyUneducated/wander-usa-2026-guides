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
  // 只数子地区地图上的针脚。全区总地图把同一批景点又标了一遍，
  // 两者相加正好是景点数的两倍，会让「针脚数等于景点数」这条断言失效。
  const pins  = Array.from(q('.pin')).filter(p => !p.closest('.map-all'));

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
    /* 全区总地图（.map-all）与子地区地图分开数：总地图把每个景点又标了一遍，
       混在一起会让针脚数正好翻倍。 */
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

    /* ---- 改版后的部件 ---- */
    /* 星级：以前用 ★ / ☆ / ⯨ 拼字符，半星那个字符在多数 Windows 字体里
       没有字形，会渲染成一排黄色小方块。现在一律是内联 SVG，所以这里既
       要数出 SVG，也要确认页面上再没有残留的星形字符。 */
    starSvg: q('.st').length,
    starGlyphs: (document.body.innerText.match(/[\u2605\u2606\u2BE8]/g) || []).length,
    /* 每个 SVG 应该是 5 个空星 + 5 个实星，实星那组按分值裁切 */
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
    /* 满分的那一颗应该整颗填满：裁切宽度等于整条宽度 */
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
    /* 分档文字（「值得专程前往」）应该存在但默认不占版面 */
    tierHidden: (() => {
      const t = document.querySelector('.rt-tier');
      if (!t) return null;
      return getComputedStyle(t).opacity === '0';
    })(),

    /* 速览条与要点清单 */
    quickBars: q('.quick').length,
    quickCells: q('.qk').length,
    ptItems: q('.pt').length,
    ptEmptyLead: Array.from(q('.pt-lead')).filter(e => !e.textContent.trim()).length,
    sectionKeys: Array.from(new Set(Array.from(q('.row > .k')).map(e => e.textContent))),

    /* 探索工具条 */
    xbar: q('#xbar').length,
    xFilters: Array.from(q('#xbar [data-f]')).map(b => b.dataset.f),
    xSorts: Array.from(q('#xbar [data-s]')).map(b => b.dataset.s),

    /* 离线与装桌面用的声明 */
    manifest: !!document.querySelector('link[rel="manifest"]'),
    swReg: !!document.querySelector('script[src*="sw-reg.js"]'),

    /* 页面上不该再出现「本站还在施工」这类字样。景点本身的施工是事实，
       要保留，所以这里只查描述站点状态的那几种说法。 */
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

    # 每个地区页的图片加起来约 50–60 MB。本地是文件读取，线上要真的过网络，
    # 而下面又刻意把所有图片改成 eager 一次性拉完，所以线上必须给足时间。
    remote = not base.startswith('http://127.0.0.1')
    img_timeout = 300_000 if remote else 60_000

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

            # 只等 DOM 就绪，不等 load。'load' 会连视口内的图片一起等，线上
            # 那是几十 MB，45 秒根本不够，会把「页面打不开」的假失败报出来。
            # 图片有下面的显式等待兜底，这里不需要重复等。
            resp = page.goto(url, wait_until='domcontentloaded', timeout=90000)
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
                    timeout=img_timeout)
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
                ok.append((f'全区总地图存在且只有一张（{r["allMaps"]}）',
                           r['allMaps'] == 1))
                ok.append((f'针脚数等于景点数（{r["pins"]} / {r["spots"]}）',
                           r['pins'] == r['spots']))
                ok.append(('地图编号与卡片编号完全对应',
                           r['pinTexts'] == r['cardNums']))
                ok.append((f'总览已填充（{r["overviewFilled"]} 字符）',
                           r['overviewFilled'] > 200))
                ok.append((f'附录已填充（{r["appendixFilled"]} 字符）',
                           r['appendixFilled'] > 100))
                # 顶部信息条现在只留季节参考与核实日期两项：景点数与子地区数
                # 已经在总地图标题里，重复列出反而把 banner 撑散。
                ok.append((f'hero 有摘要 chip（{r["heroChips"]} 个）',
                           r['heroChips'] >= 2))
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

            # --- 改版后的部件 ---
            ok.append((f'页面无「施工中/装配中」类字样（{r["wipWords"]}）',
                       not r['wipWords']))
            ok.append(('声明了 manifest 与 Service Worker 注册',
                       r['manifest'] and r['swReg']))
            if not is_landing:
                # 星级：核心是「不再依赖字体字形」
                ok.append((f'星级为内联 SVG（{r["starSvg"]} 个）', r['starSvg'] > 0))
                ok.append((f'页面无残留星形字符（{r["starGlyphs"]} 个）',
                           r['starGlyphs'] == 0))
                sh = r['starShape']
                ok.append((f'每条星级 5 空 5 实且裁切有效（{sh}）',
                           bool(sh) and sh['off'] == 5 and sh['on'] == 5
                           and 0 <= sh['clipW'] <= sh['boxW']))
                if r['starFull'] is not None:
                    ok.append(('5 分的星级整条填满', r['starFull'] is True))
                # 双评分并列
                ok.append((f'摄影价值也有星级（游览 {r["mustRows"]} / 摄影 {r["photoRows"]} 行）',
                           r['photoRows'] > 0))
                if r['tierHidden'] is not None:
                    ok.append(('分档文字默认不占版面（悬停/点击才显示）',
                               r['tierHidden'] is True))
                # 速览条与要点清单
                ok.append((f'卡片有速览条（{r["quickBars"]} 条 / {r["quickCells"]} 格）',
                           r['quickBars'] > 0))
                ok.append((f'要点做成摘要清单（{r["ptItems"]} 条）', r['ptItems'] > 0))
                ok.append((f'没有空摘要行（{r["ptEmptyLead"]} 条）',
                           r['ptEmptyLead'] == 0))
                keys = r['sectionKeys']
                ok.append((f'分节已改名为「看什么/怎么逛」（{keys}）',
                           '核心看点' not in keys and '游览要点' not in keys))
                # 工具条
                ok.append((f'探索工具条存在（筛选 {r["xFilters"]} / 排序 {r["xSorts"]}）',
                           r['xbar'] == 1 and len(r['xSorts']) >= 2))

            # --- 筛选与排序真的生效吗 ---
            # 上面只验证了控件存在。这里实际点一遍：筛选要能筛掉东西、
            # 筛剩的每一条都得满足条件、再点一次要能完全还原；
            # 排序要真的改变卡片顺序，而不只是把按钮点亮。
            if not is_landing and r['xbar'] == 1:
                for name_f, cond in [('must4', 'must >= 4'), ('quick', 'mins <= 60')]:
                    if name_f not in r['xFilters']:
                        continue
                    before = page.evaluate(
                        "() => document.querySelectorAll('details.card:not([hidden])').length")
                    page.click(f'#xbar [data-f="{name_f}"]')
                    page.wait_for_timeout(250)
                    res = page.evaluate("""(f) => {
                      const vis = Array.from(
                        document.querySelectorAll('details.card:not([hidden])'));
                      const bad = vis.filter(c => f === 'must4'
                        ? !(parseFloat(c.dataset.must) >= 4)
                        : !(c.dataset.mins && parseFloat(c.dataset.mins) <= 60));
                      return { n: vis.length, bad: bad.length };
                    }""", name_f)
                    ok.append((f'筛选 {name_f} 生效且结果都满足「{cond}」'
                               f'（{before} → {res["n"]}，越界 {res["bad"]}）',
                               res['n'] < before and res['bad'] == 0))
                    page.click(f'#xbar [data-f="{name_f}"]')
                    page.wait_for_timeout(250)
                    after = page.evaluate(
                        "() => document.querySelectorAll('details.card:not([hidden])').length")
                    ok.append((f'取消筛选 {name_f} 后完全还原（{after} / {before}）',
                               after == before))

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
                    ok.append((f'按游览价值排序后各区内单调不增（比较 {desc["checked"]} 对，'
                               f'逆序 {desc["bad"]} 对）',
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
                    ok.append((f'切回按编号后恢复原顺序（逆序 {restored} 对）',
                               restored == 0))

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
