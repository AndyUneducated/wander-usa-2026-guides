/* 纽约地域的总览与附录。子地区研究完成后替换为正式内容。 */
(function () {
  'use strict';

  var META = [
    ['实际日期', 'Boston 10/13–15 · New York 10/16–18'],
    ['子地区', '装配中'],
    ['景点', '装配中'],
    ['核实日期', '装配中']
  ];

  var OVERVIEW = [
    '<details class="callout tip" open><summary class="title">📅 实际日期：Boston 10/13–15，New York 10/16–18</summary>',
    '<p>星期已换算：<strong>10/13 周二、10/14 周三、10/15 周四、',
    '10/16 周五、10/17 周六、10/18 周日</strong>。三条由此确定的结论：</p>',
    '<p><strong>1. The Met 周三闭馆，所以 10/17 周六是它唯一的完整窗口</strong>——',
    '而周六也是它最挤的一天，开门即入是唯一办法。</p>',
    '<p><strong>2. Columbus Day 长周末（10/10–12）完全避开了。</strong>',
    '10/13 周二才到 Boston，新英格兰全年最挤最贵的那个周末已经过去。</p>',
    '<p><strong>3. Boston 的秋色正在峰值上。</strong>Boston 的峰值约在 10 月第三周，',
    '10/13–15 正落在其中；Hudson Valley 与 Catskills 的高海拔段则更早，',
    '若要兼顾需要单独安排，具体日期等子地区研究交付后补。</p>',
    '<p><strong>夏令时结束于 11 月 1 日</strong>，整段行程都在 EDT 之内。</p></details>',
    '<details class="callout info" open><summary class="title">本页正在装配中</summary>',
    '<p>New York 区域的六个子地区正在联网研究中：已交付 Manhattan Midtown 与 Manhattan Downtown，',
    '仍在研究 Brooklyn 与 Queens、Boston 与 Cambridge、Salem 与 North Shore、Hudson Valley。',
    '每个子地区交付后会自动并入本页，届时这里会替换为完整的执行总览。</p>',
    '<p>景点按纬度<strong>从北到南</strong>排列，地图针脚编号与卡片编号一一对应。</p>',
    '<p>其他手册：<a href="../socal/">Southern California</a>（已完工）、',
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
