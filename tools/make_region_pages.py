#!/usr/bin/env python3
"""生成三个地域页的 index.html 骨架。三页结构完全一致，只有文案与配色不同。

所有地域页共用 ../assets/style.css 与 ../assets/app.js；
每个地域自带 data.js、intro.js 与 img/ 目录，图片路径相对该地域目录（img/xxx.jpg）。
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
<link rel="stylesheet" href="../assets/style.css?v=20260917a">
<link rel="manifest" href="../manifest.webmanifest">
<meta name="theme-color" content="#0f1115">
</head>
<body>

<div class="topbar">
  <div class="topbar-inner">
    <span class="brand"><a href="../" style="color:inherit;text-decoration:none">🧭 Wander USA 2026</a> / {brand}</span>
    <nav id="region-nav">
      <a href="../all.html">全部景点</a>
      <a href="#overview">总览</a>
    </nav>
  </div>
</div>

<header class="hero">
  <div class="wrap">
    <h1>{h1}</h1>
    <p class="sub">{sub}</p>
    <div class="hero-meta" id="hero-meta"></div>
  </div>
</header>

<section id="overview">
  <div class="wrap">
    <h2>执行总览</h2>
    <div id="overview-body"></div>
  </div>
</section>

<div id="regions"></div>

<section id="appendix">
  <div class="wrap">
    <h2>附录 · 参考数据</h2>
    <p class="section-lead">日出日落、开放时间总表、预约窗口与出发当天复查清单等查表型数据集中放在这里，正文不再穿插。各子地区卡片会直接引用这些数字。</p>
    <div id="appendix-body"></div>
  </div>
</section>

<footer>
  <div class="wrap">
    <p>本手册由实时联网查证生成，信息截至页面生成日期。开放时间、票价、预约规则与道路封闭状态可能随时变动，<b>出发当天请再次核对官方页面</b>，见附录的复查清单。</p>
    <p>地图底图 © Esri（Dark Gray Canvas）。参考图片来自 Wikimedia Commons，版权归原作者，仅作取景参考。</p>
    <p><a href="../" style="color:var(--text-faint)">← 回到四本手册的总入口</a></p>
  </div>
</footer>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script src="data.js?v=20260917a"></script>
<script src="../assets/copy.js?v=20260917a"></script>
<script src="../assets/rating.js?v=20260917a"></script>
<script src="../assets/facts.js?v=20260917a"></script>
<script src="../assets/geo.js?v=20260917a"></script>
<script src="../assets/explore.js?v=20260917a"></script>
<script src="../assets/app.js?v=20260917a"></script>
<script src="intro.js?v=20260917a"></script>
<script src="../assets/sw-reg.js?v=20260917a"></script>
</body>
</html>
'''

# 地域名要把实际覆盖范围说全：叫「Yellowstone」会让人以为不含 Grand Teton，
# 叫「New York」会漏掉 Boston 与新英格兰那一半。同时四本统一成
# 「A + B」的格式，不带「区域」二字，顶栏里才看得整齐。
PAGES = {
    'yellowstone': {
        'title': 'Yellowstone + Grand Teton 旅行手册 · Wander USA 2026',
        'brand': 'Yellowstone + Grand Teton',
        'h1': 'Yellowstone + Grand Teton 旅行手册',
        'sub': 'Yellowstone National Park · Grand Teton National Park · Western Montana ｜ 地热盆地、野生动物谷地、Beartooth 高线与剧集取景地',
    },
    'nyc': {
        'title': 'New York + New England 旅行手册 · Wander USA 2026',
        'brand': 'New York + New England',
        'h1': 'New York + New England 旅行手册',
        'sub': 'New York City · Boston · Salem · Hudson Valley ｜ 必去地标、博物馆与新英格兰秋色，附摄影机位',
    },
    'dc': {
        'title': 'Washington DC + Philadelphia 旅行手册 · Wander USA 2026',
        'brand': 'Washington DC + Philadelphia',
        'h1': 'Washington DC + Philadelphia 旅行手册',
        'sub': 'Washington DC · Philadelphia · Virginia 与 Maryland ｜ 纪念建筑群、Smithsonian 各馆、建国史迹与庄园',
    },
}


def main():
    for slug, cfg in PAGES.items():
        out = ROOT / slug / 'index.html'
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(TEMPLATE.format(**cfg), encoding='utf-8')
        print('已写入 ' + str(out.relative_to(ROOT)))


if __name__ == '__main__':
    main()
