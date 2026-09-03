/* ===== 顶部信息条 / 执行总览 / 行程骨架 ===== */
(function () {
  'use strict';

  var META = [
    ['日期', '2026.9.5 – 9.9（5 天）'],
    ['方式', '自驾环线 · San Jose 出发与返回'],
    ['里程', '约 1,600–1,800 km'],
    ['摄影侧重', '海岸风光 · 建筑人文 · 人像'],
    ['景点', '原始收藏 47 处，合并后重排']
  ];

  var OVERVIEW = [
    '<div class="callout tip"><span class="title">这份报告怎么用</span>',
    '<p>每个分区先给一张交互地图，图钉编号与下方卡片一一对应。卡片里的坐标是<strong>可直接点开导航</strong>的：',
    '「停车」是把车开到的位置，「机位」是下车后真正站着按快门的位置，两者常常不是同一个点。</p></div>',

    '<div class="callout warn"><span class="title">出发前必须自查的三件事</span><ul>',
    '<li><strong>9/5–9/9 覆盖美国劳工节长周末</strong>：海滩、州立公园与栈桥停车场会异常拥挤，热门点建议把到达时间整体提前 60–90 分钟。</li>',
    '<li><strong>Big Sur 1 号公路通行状态</strong>：决定第一天走海岸线还是绕 US-101，出发当天务必查 Caltrans 实时路况。</li>',
    '<li><strong>Wayfarers Chapel 已于 2024 年因山体滑坡拆解</strong>：现场大概率无可拍内容，报告中会给出替代方案。</li>',
    '</ul></div>',

    '<div class="callout info"><span class="title">当前状态</span>',
    '<p>你现在看到的是<strong>版式样例</strong>，只填了 3 个条目用于确认视觉效果。',
    '5 组联网研究（中央海岸 / Santa Barbara+Malibu / Los Angeles / Laguna+San Diego / 沙漠支线与行程可行性）仍在进行，',
    '返回后会替换为全量数据，并补齐日出日落时刻、潮汐表与逐日行程。</p></div>'
  ].join('');

  var PLAN = '<div class="callout info"><p>逐日行程将在研究组返回「实际车程 + 日落时刻」后生成，' +
    '排布原则是<strong>让最好的日落机位正好落在日落时间</strong>，其余时段用于赶路与建筑/室内类景点。</p></div>';

  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('hero-meta', META.map(function (m) {
    return '<span class="chip">' + m[0] + ' <b>' + m[1] + '</b></span>';
  }).join(''));
  fill('overview-body', OVERVIEW);
  fill('plan-body', PLAN);
})();
