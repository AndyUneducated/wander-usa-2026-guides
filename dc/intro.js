/* 总览、附录等静态内容。各地域一份。 */
(function () {
  'use strict';

  var META = [
    ['出行窗口', '9 月下旬 – 10 月下旬'],
    ['子地区', '装配中'],
    ['景点', '装配中'],
    ['核实日期', '2026-09-05']
  ];

  var OVERVIEW = [
    '<details class="callout good" open><summary class="title">✅ 联邦政府停摆风险：本窗口内已解除</summary>',
    '<p>这一区大部分场馆都是联邦机构，停摆就关门，所以这条本来是头号风险。<strong>现在它已经不是风险了。</strong></p>',
    '<p><strong>H.R. 6500《Continuing Appropriations and Extensions Act, 2027》已于 2026 年 9 月 2 日签署成为 Public Law 119-103</strong>，',
    '按 FY2026 水平延续拨款至 <strong>2026 年 12 月 11 日</strong>。参议院 8 月 8 日以 90–6 通过，众议院 9 月 1 日以 370–48 通过修正案。',
    '你 9 月下旬至 10 月下旬的整个出行窗口都落在这份临时决议的覆盖期内，<strong>10 月 1 日财年切换不会触发停摆</strong>。</p>',
    '<p>需要留意的只剩一件事：12 月 11 日之后仍需通过正式拨款法案，但那已在你离境之后。',
    '如果行程意外推迟到 12 月中旬以后，请重新评估。</p></details>',

    '<details class="callout info"><summary class="title">当前状态</summary>',
    '<p>本页正在装配中。各子地区的联网研究陆续入库，装配完成后这里会替换为完整的执行总览。</p></details>'
  ].join('');

  var APPENDIX = [
    '<h3 class="apx-h">A. 装配中</h3>',
    '<p class="section-lead">日出日落总表、开放时间与闭馆日交叉表、预约窗口日历、出发当天复查清单将在装配完成后补齐。</p>'
  ].join('');

  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('hero-meta', META.map(function (m) {
    return '<span class="chip">' + m[0] + ' <b>' + m[1] + '</b></span>';
  }).join(''));
  fill('overview-body', OVERVIEW);
  fill('appendix-body', APPENDIX);
})();
