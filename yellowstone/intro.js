/* 黄石地域的总览与附录。子地区研究完成后替换为正式内容。 */
(function () {
  'use strict';

  var META = [
    ['实际日期', '9/22 – 9/29（八天）'],
    ['子地区', '装配中（4 / 7 已入库）'],
    ['景点', '装配中（36 已入库）'],
    ['核实日期', '2026-09-05']
  ];

  var OVERVIEW = [
    '<details class="callout good" open><summary class="title">✅ 你的 9/22–9/29 正好卡在设施与路网同时完整的最后一周</summary>',
    '<p>黄石的可达性不取决于开放时间，而取决于<strong>季节性道路与设施关闭</strong>。',
    '按你的实际日期，几乎所有关闭节点都在你离开之后，这是一个相当理想的窗口：</p>',
    '<p><strong>路网全开，含 Beartooth。</strong>Beartooth Highway、Chief Joseph Scenic Byway 与 ',
    'Dunraven Pass 都在 <strong>10/12</strong> 关闭，你 9/29 就走了，三条都能跑。',
    '全园道路对汽车的封闭要到 <strong>11/2</strong> 才开始。</p>',
    '<p><strong>园内旅舍还开着。</strong>Old Faithful Inn 开到 10/12、Canyon Lodge 到 10/25、',
    'Lake Lodge 到 10/4，你的日期全都在营业期内——这决定了你能不能住在园内拍日出。',
    '但 <strong>Roosevelt Lodge 已于 9/7 关闭</strong>，Tower–Roosevelt 一带没有住处。</p>',
    '<p><strong>两个季节红利同时到位。</strong>Elk 发情期高峰在 9 月中至末，Mammoth Hot Springs ',
    '是园内最佳观赏点，清晨与黄昏的 bugling 是这个季节的标志；',
    'Grand Teton 谷地的 aspen 金黄峰值在 9 月末至 10 月初。<strong>这一周两件事叠在一起。</strong></p>',
    '<p><strong>星期换算：</strong>9/22 周二、9/23 周三、9/24 周四、9/25 周五、',
    '9/26 周六、9/27 周日、9/28 周一、9/29 周二。周末两天园内会明显更挤。</p>',
    '</details>',
    '<details class="callout warn" open><summary class="title">⚠️ 仍然要盯的三件事</summary>',
    '<p><strong>1. 早雪。</strong>九月下旬夜间常低于冰点，高海拔可能降雪，',
    'Dunraven Pass 虽然官方 10/12 关，但雪来了会提前关。建议租 AWD，',
    '并且<strong>每个驾驶日的清早都查一次 NPS 道路状况页</strong>。',
    '反过来说，九月的一场雨雪飑往往一小时就散，留下峰顶新雪——那通常是一趟里最好的照片。</p>',
    '<p><strong>2. 山火烟霾。</strong>九月 southwest Wyoming（黄石门户）火险回落至正常，',
    '但 northern Montana 与 Idaho 仍高于正常。出发前五天起每天看 AirNow 的 Fire and Smoke Map。',
    '若北部烟重，把重心南移到 Grand Teton。</p>',
    '<p><strong>3. Grand Teton 的 Moose-Wilson Road 自 9/8 起因施工封闭至 11 月</strong>，',
    '看 moose 要改去 Gros Ventre 河谷。Jenny Lake 游船运营至 9/30，你的日期刚好还在。</p>',
    '</details>',
    '<details class="callout info"><summary class="title">本页正在装配中</summary>',
    '<p>七个子地区里已有四个入库：<strong>Mammoth 与 Lamar Valley</strong>、',
    '<strong>Canyon 与 Hayden Valley</strong>、<strong>间歇泉盆地与湖区</strong>、',
    '<strong>Grand Teton</strong>，共 36 个景点。',
    '仍在研究：Beartooth 与 Chief Joseph Highway、Butte 与 Paradise Valley、Bitterroot。</p>',
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
