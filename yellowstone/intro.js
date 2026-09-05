/* 黄石地域的总览与附录。子地区研究完成后替换为正式内容。 */
(function () {
  'use strict';

  var META = [
    ['出行窗口', '9 月下旬 – 10 月下旬'],
    ['子地区', '装配中（3 / 7 已入库）'],
    ['景点', '装配中（26 已入库）'],
    ['核实日期', '2026-09-05']
  ];

  var OVERVIEW = [
    '<details class="callout warn" open><summary class="title">⚠️ 这是四本里时间约束最硬的一本</summary>',
    '<p>与其他三本不同，黄石的可达性不取决于开放时间，而取决于<strong>季节性道路与设施关闭</strong>。',
    '园区内多条道路与几乎所有旅舍从 10 月初开始逐段关闭，到 11 月初除北环以外基本全部封闭。',
    '<strong>九月下旬与十月下旬在这一区是两种完全不同的行程</strong>，不能混用同一套计划。</p>',
    '<p>具体的关闭日期、Beartooth Highway 的状态与各盆地的可达性正在逐个子地区核实中，交付后会替换本卡片。</p>',
    '</details>',
    '<details class="callout info"><summary class="title">本页正在装配中</summary>',
    '<p>七个子地区里已有三个入库：<strong>Mammoth 与 Lamar Valley</strong>、',
    '<strong>Canyon 与 Hayden Valley</strong>、<strong>Grand Teton</strong>，共 26 个景点。',
    '仍在研究：Geyser Basins、Beartooth 与 Chief Joseph Highway、Butte 与 Paradise Valley、Bitterroot。</p>',
    '<p>景点按纬度<strong>从北到南</strong>排列，地图针脚编号与卡片编号一一对应。</p>',
    '<p>其他手册：<a href="../socal/">Southern California</a>（已完工）、',
    '<a href="../dc/">Washington DC 区域</a>（已完工）、<a href="../nyc/">New York 区域</a>（装配中）。</p>',
    '</details>'
  ].join('');

  var APPENDIX = [
    '<h3 class="apx-h">装配中</h3>',
    '<p class="section-lead">日出日落总表、季节性道路关闭日历、野生动物观察距离规定与出发当天复查清单将在子地区研究交付后补齐。</p>'
  ].join('');

  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('hero-meta', META.map(function (m) {
    return '<span class="chip">' + m[0] + ' <b>' + m[1] + '</b></span>';
  }).join(''));
  fill('overview-body', OVERVIEW);
  fill('appendix-body', APPENDIX);
})();
