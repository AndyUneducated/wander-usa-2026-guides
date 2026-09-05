/* 纽约地域的总览与附录。子地区研究完成后替换为正式内容。 */
(function () {
  'use strict';

  var META = [
    ['出行窗口', '9 月下旬 – 10 月下旬'],
    ['子地区', '装配中'],
    ['景点', '装配中'],
    ['核实日期', '装配中']
  ];

  var OVERVIEW = [
    '<details class="callout info" open><summary class="title">本页正在装配中</summary>',
    '<p>New York 区域的六个子地区（Manhattan Midtown、Manhattan Downtown、Brooklyn 与 Queens、',
    'Boston 与 Cambridge、Salem 与 North Shore、Hudson Valley）正在联网研究中。',
    '每个子地区交付后会自动并入本页，届时这里会替换为完整的执行总览。</p>',
    '<p>已经可以确定的两条约定：景点按纬度<strong>从北到南</strong>排列，地图针脚编号与卡片编号一一对应；',
    '<strong>夏令时结束于 11 月 1 日</strong>，整个出行窗口都还在 EDT 之内。</p>',
    '<p>其他三本手册可用：<a href="../socal/">Southern California</a>（已完工）、',
    '<a href="../dc/">Washington DC 区域</a>（已完工）、<a href="../yellowstone/">Yellowstone</a>（装配中）。</p>',
    '</details>'
  ].join('');

  var APPENDIX = [
    '<h3 class="apx-h">装配中</h3>',
    '<p class="section-lead">日出日落总表、闭馆日交叉表、预约窗口清单与出发当天复查清单将在子地区研究交付后补齐。</p>'
  ].join('');

  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('hero-meta', META.map(function (m) {
    return '<span class="chip">' + m[0] + ' <b>' + m[1] + '</b></span>';
  }).join(''));
  fill('overview-body', OVERVIEW);
  fill('appendix-body', APPENDIX);
})();
