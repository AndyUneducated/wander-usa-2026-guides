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
    '<div class="callout warn"><span class="title">🔥 一号警报：Big Sur 正在烧，中央海岸段计划需要重做</span>',
    '<p>已向 CAL FIRE 与 Caltrans 核实（截至 2026-09-03）：</p><ul>',
    '<li><strong>Plaskett Fire 已烧 29,123 英亩，控制率仅 1%</strong>，是目前加州最大的活跃山火，且仍在向 Fort Hunter Liggett 方向蔓延。',
    '加上 Timber Fire（25,226 英亩、23%），Big Sur 两场火合计过火超 5.4 万英亩。</li>',
    '<li><strong>1 号公路南段封闭</strong>：Pacific Valley（MM16）至 Monterey/SLO 县界（MM0.09），<strong>无解封时间表</strong>。',
    'Monterey 到 San Simeon 无法贯通，Caltrans 明确建议改走 US-101。北段 MM56–MM45 已于 9/3 06:00 解封，但不解决贯通问题。</li>',
    '<li><strong>Cambria、Cayucos、Morro Bay 空气质量已达 Unhealthy / 敏感人群不健康</strong>，SLO 与 Santa Barbara 两县均已发布烟霾警告。',
    '这几个地方正是中央海岸段的核心拍摄区与住宿地。</li>',
    '<li><strong>SLO 县北部 SLC-001/002/003 三个疏散警告区已启动</strong>，Ragged Point 紧贴该区域边缘。</li>',
    '<li><strong>Big Sur 州立公园全部关闭</strong>：Pfeiffer Big Sur、Julia Pfeiffer Burns、Andrew Molera、Limekiln、Point Sur。<strong>McWay Falls 拍不到。</strong></li>',
    '</ul><p>浓烟会让海岸风光照片失去通透度和色彩，这是比封路更难绕开的问题。',
    '出发当天请复查 <a href="https://roads.dot.ca.gov/" target="_blank" rel="noopener">Caltrans 路况</a> 与 ',
    '<a href="https://www.fire.ca.gov/incidents/2026/8/26/plaskett-fire" target="_blank" rel="noopener">Plaskett Fire 页面</a>。</p></div>',

    '<div class="callout warn"><span class="title">📅 二号警报：行程前三天正好压在劳工节长周末</span>',
    '<p><strong>2026 年劳工节是 9 月 7 日（周一）</strong>。9/5 周六、9/6 周日、9/7 周一构成三天连休，是美国夏季最后一个、也是海滩人流最猛的长周末。</p><ul>',
    '<li>州立公园停车场通常 <strong>10:00 前满位</strong>；Malibu El Matador 停车场仅约 30 个位。</li>',
    '<li>Santa Monica、Venice、Laguna Beach 市区停车按节假日峰值计费且极难找位。</li>',
    '<li>住宿如果还没订，<strong>现在就得订</strong>，Cambria 与 Santa Barbara 尤其紧张。</li>',
    '<li>反过来利用：<strong>9/8 周二与 9/9 周三人流骤降</strong>，最需要干净构图的点应该排在这两天。</li>',
    '<li>劳工节当天（周一）没有通勤高峰，适合在 LA 盆地内部移动，<strong>那天跑城市与室内景点，别跑海滩</strong>。</li>',
    '</ul></div>',

    '<div class="callout tip"><span class="title">这份报告怎么用</span>',
    '<p>每个分区先给一张交互地图，图钉编号与下方卡片一一对应。卡片默认收起，点标题展开。',
    '卡片里的坐标<strong>可直接点开导航</strong>：「停车」是把车开到的位置，「机位」是下车后真正站着按快门的位置，两者常常不是同一个点。</p>',
    '<p>按 ⌘P 可导出 PDF，打印时会自动展开全部卡片。</p></div>',

    '<div class="callout info"><span class="title">当前状态</span>',
    '<p>你现在看到的是<strong>版式样例</strong>，只填了 3 个条目用于确认视觉效果。',
    '其余 4 组联网研究（中央海岸 / Santa Barbara+Malibu / Los Angeles / Laguna+San Diego）仍在进行，',
    '返回后会替换为全量数据，并补齐日出日落时刻、潮汐表与逐日行程。</p></div>'
  ].join('');

  var SUNSET = [
    ['Ragged Point', '06:41', '19:26'],
    ['Cambria', '06:40', '19:24'],
    ['Santa Barbara', '06:35', '19:18'],
    ['Malibu', '06:32', '19:14'],
    ['Griffith Observatory', '06:30', '19:12'],
    ['Laguna Beach', '06:28', '19:10'],
    ['San Diego', '06:26', '19:07']
  ];

  var DRIVE = [
    ['San Jose → Cambria（US-101）', '~200 mi', '3h00', '3h30–4h00'],
    ['San Jose → Ragged Point（Hwy 1 经 Big Sur）', '~215 mi', '🚫 封闭', '—'],
    ['Cambria → Santa Barbara', '~160 mi', '2h45', '3h15–3h30'],
    ['Santa Barbara → Malibu', '~70 mi', '1h15–1h30', '1h45–2h30'],
    ['Malibu → Santa Monica（PCH）', '~22 mi', '30–40 min', '1h00–1h30'],
    ['Santa Monica → Downtown LA（I-10）', '15 mi', '30–40 min', '⚠️ 70–110 min'],
    ['Downtown LA → Laguna Beach（I-5）', '~50 mi', '1h00', '1h45–2h30'],
    ['Laguna Beach → San Diego', '~65 mi', '1h10–1h30', '1h45–2h15'],
    ['San Diego → San Jose（I-5）', '~460–500 mi', '7h00–8h00', '门到门 9–11h']
  ];

  var PLAN = [
    '<div class="callout warn"><span class="title">可行性裁决：5 天装不下这份清单</span>',
    '<p>你列的景点大约是 <strong>7–8 天</strong>的内容量。Day 1 要花约 4 小时南下，Day 5 要花 <strong>9–11 小时</strong>北返，',
    '真正完整可用的只有 Day 2、3、4 三个白天。要在这三天里覆盖中央海岸 + Santa Barbara + Malibu + 整个 LA + Laguna + San Diego，',
    '结果只会是每站都压缩成「停车—拍三张—上车」。</p>',
    '<p><strong>建议砍掉</strong>：Salton Sea / Salvation Mountain 支线（净增 7–8.5 小时且完全反向）、',
    'Guadalupe &amp; Oceano Dunes（偏离 1.5–2 小时，题材与 Montaña de Oro 重叠）、',
    'Palos Verdes / San Pedro（偏离 1.5–2 小时，海崖题材与 Laguna 重叠）、',
    'Getty Center 与 Getty Villa 二选一（各需 2–3 小时）。</p></div>',

    '<div class="callout info"><span class="title">逐日行程生成中</span>',
    '<p>完整的 Day 1–5 安排会在其余 4 组研究返回后给出。',
    '排布原则是<strong>让每天最好的日落机位正好落在日落时刻</strong>——由北向南推进时海岸线始终在右手边（西侧），日落机位天然可用。</p></div>',

    '<h3 style="margin:28px 0 6px;font-size:18px">日出日落（2026-09-07）</h3>',
    '<div class="tbl-scroll"><table class="plan"><thead><tr><th>地点</th><th>日出</th><th>日落</th></tr></thead><tbody>',
    SUNSET.map(function (r) {
      return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td><td><b>' + r[2] + '</b></td></tr>';
    }).join(''),
    '</tbody></table></div>',

    '<h3 style="margin:28px 0 6px;font-size:18px">关键路段驾驶时间</h3>',
    '<p class="section-lead">纯驾驶时间，不含加油、用餐与拍摄停留。「高峰」含工作日早晚高峰与劳工节长周末下午。</p>',
    '<div class="tbl-scroll"><table class="plan"><thead><tr><th>路段</th><th>里程</th><th>常态</th><th>高峰 / 周末</th></tr></thead><tbody>',
    DRIVE.map(function (r) {
      return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td></tr>';
    }).join(''),
    '</tbody></table></div>',

    '<div class="callout tip"><span class="title">LA 段的一个具体建议</span>',
    '<p>Santa Monica → Downtown LA 走 I-10 在高峰期要 70–110 分钟，是全程时间损失比例最高的一段。',
    '如果 Downtown 那半天是步行拍摄（Broadway、Bradbury、Grand Central Market、Walt Disney Concert Hall），',
    '<strong>把车留在 Santa Monica，改坐 Metro E Line 轻轨</strong>，约 50 分钟且完全不受路面影响，比自驾更快也更可预测。</p></div>'
  ].join('');

  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('hero-meta', META.map(function (m) {
    return '<span class="chip">' + m[0] + ' <b>' + m[1] + '</b></span>';
  }).join(''));
  fill('overview-body', OVERVIEW);
  fill('plan-body', PLAN);
})();
