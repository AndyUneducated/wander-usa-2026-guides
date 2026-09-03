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
    '<details class="callout warn"><summary class="title">🔥 一号警报：Big Sur 在烧，Hwy 1 南段封闭，中央海岸改走 US-101 + CA-46</summary>',
    '<p>Plaskett Fire 已烧 29,123 英亩、<strong>控制率仅 1%</strong>。Hwy 1 由 Pacific Valley（MM16）至 Monterey/SLO 县界封闭，',
    '<strong>无解封时间表</strong>；Big Sur 各州立公园全部关闭，<strong>McWay Falls、Sand Dollar Beach、Pfeiffer Beach 这次都拍不到</strong>（见中央海岸区的红色卡片）。</p>',
    '<p>更难绕开的是烟：Cambria、Cayucos、Morro Bay 空气质量已达不健康级别，浓烟会直接夺走海岸照片的通透度。',
    '越往南越干净，<strong>Guadalupe、Oceano、Montaña de Oro 是烟雾避难所</strong>。Ragged Point 紧贴疏散警告区边缘。</p>',
    '<p>出发当天复查 <a href="https://roads.dot.ca.gov/" target="_blank" rel="noopener">Caltrans 路况</a> 与 ',
    '<a href="https://www.fire.ca.gov/incidents/2026/8/26/plaskett-fire" target="_blank" rel="noopener">Plaskett Fire 页面</a>。</p></details>',

    '<details class="callout warn"><summary class="title">📅 二号警报：前三天压在劳工节长周末（9/7 周一）</summary>',
    '<p>9/5–9/7 是美国夏季最后一个长周末，也是海滩人流最猛的三天。州立公园停车场通常 <strong>10:00 前满位</strong>，',
    'El Matador 仅约 30 个车位；Santa Monica、Laguna Beach 市区按节假日峰值计费且极难找位。住宿未订的话现在就得订。</p>',
    '<p>反过来利用：<strong>9/8、9/9 人流骤降</strong>，最需要干净构图的点排这两天；',
    '劳工节当天没有通勤高峰，<strong>适合在 LA 盆地跑城市与室内景点，别跑海滩</strong>。</p></details>',

    '<details class="callout warn"><summary class="title">🔒 三号警报：三个「只有某一天能去」的硬约束，全部指向 9/9</summary>',
    '<p>这三条不是建议，是物理与制度上的门槛。它们比任何偏好都更能决定行程怎么排：</p><ul>',
    '<li><strong>Salk Institute 只有 9/9（周三）可去。</strong>中庭已不再自由开放，只能参加每周三/四/五 10:00 与 11:30 的 $25 导览团。',
    '9/5 周六、9/6 周日闭园，9/7 劳工节闭园，9/8 周二不在公众团日。<strong>需提前线上预订，且严禁三脚架、禁摆拍人像。</strong></li>',
    '<li><strong>Pirate Tower 只有 9/9 下午能拍（次选 9/8 下午）。</strong>NOAA 数据显示这五天的深度低潮全在凌晨 00:44–02:45，',
    '而日落时段正好撞上 5.9–6.4 ft 的高潮。绕过岩角需要 ≤2.5 ft，唯一好窗口是 <strong>9/9 12:30–16:30</strong>（14:34 低潮 1.27 ft）。',
    '<strong>这五天的任何一个日落时段都不可行。</strong></li>',
    '<li><strong>Getty Villa 周二闭馆，9/8 千万别排。</strong>可去的是 9/5、9/6、9/7、9/9，且必须提前预约免费定时票，不接受 walk-in，停车 $25。</li>',
    '</ul><p>好消息是前两条时段不冲突（Salk 上午 10:00–11:00、Pirate Tower 下午 12:30–16:30），',
    '但两地相距约 105 km（I-5 北上约 1.2 小时），同一天完成<strong>时间勉强可行、没有余量</strong>。',
    '若 9/9 本就是沿 I-5 北返的日子，这条动线反而顺路。</p></details>',

    '<details class="callout info"><summary class="title">当前状态</summary>',
    '<p>中央海岸、Santa Barbara + Malibu、Laguna + San Diego、沙漠支线四组研究已完成并入库，',
    '日出日落与潮汐均取自官方数据源。<strong>洛杉矶片区仍在研究中</strong>（Griffith、Hollywood Sign、Getty Center、',
    'Walt Disney Concert Hall、Bradbury、6th Street Viaduct、Venice、Santa Monica、Palos Verdes 等），返回后会补齐。</p>',
    '<p>各分区的前置提醒已移入页面末尾的 <a href="#appendix">附录</a>，正文里每个分区直接从景点卡片开始。</p></details>'
  ].join('');

  var SUNSET = [
    ['Ragged Point / Cambria', '06:40', '19:26', '19:20'],
    ['Guadalupe / Oceano', '06:39', '19:24', '19:19'],
    ['Santa Barbara', '06:35', '19:22', '19:16'],
    ['Malibu', '06:33', '19:17', '19:12'],
    ['Laguna Beach', '06:26', '19:12', '19:07'],
    ['San Diego', '06:25', '19:08', '19:03']
  ];

  /* NOAA La Jolla 站 9410230，ft / MLLW / PDT。Newport Beach 站数值几乎相同 */
  var TIDES = [
    ['9/5（六）', '—', '10:05 / 3.23 ❌', '16:48 / 5.54'],
    ['9/6（日）', '00:44 / -0.11 🌙', '11:52 / 2.92 ❌', '18:03 / 5.88'],
    ['9/7（一）', '01:31 / -0.47 🌙', '12:57 / 2.37 ⚠️', '19:03 / 6.20'],
    ['9/8（二）', '02:10 / -0.65 🌙', '13:48 / 1.79 ✅', '19:54 / 6.37'],
    ['9/9（三）', '02:45 / -0.64 🌙', '<b>14:34 / 1.27 ✅✅</b>', '20:39 / 6.33']
  ];

  var DRIVE = [
    ['San Jose → Cambria（US-101 + CA-46 W）', '~200 mi', '3h00', '3h30–4h00'],
    ['San Jose → Ragged Point（Hwy 1 经 Big Sur）', '~215 mi', '🚫 封闭', '—'],
    ['Paso Robles → Cambria（CA-46 W，施工段）', '~26 mi', '36–46 min', '⚠️ +20–30 min'],
    ['Cambria → Ragged Point（往返，尽头路）', '~44 mi', '1h20 往返', '1h30'],
    ['Cambria → Santa Barbara', '~160 mi', '2h45', '3h15–3h30'],
    ['Santa Barbara → Malibu', '~70 mi', '1h15–1h30', '1h45–2h30'],
    ['Malibu → Santa Monica（PCH）', '~22 mi', '30–40 min', '1h00–1h30'],
    ['Santa Monica → Downtown LA（I-10）', '15 mi', '30–40 min', '⚠️ 70–110 min'],
    ['Downtown LA → Laguna Beach（I-5）', '~50 mi', '1h00', '1h45–2h30'],
    ['Laguna Beach → San Diego', '~65 mi', '1h10–1h30', '1h45–2h15'],
    ['La Jolla ⇄ Laguna Beach（9/9 折返方案）', '~65 mi', '1h10–1h20', '1h45'],
    ['San Diego ⇄ Salton Sea（往返支线）', '~330 mi', '7h00–8h30 往返', '—'],
    ['San Diego → San Jose（I-5）', '~460–500 mi', '7h00–8h00', '门到门 9–11h']
  ];

  var PLAN = [
    '<div class="callout warn"><span class="title">可行性裁决：5 天装不下这份清单</span>',
    '<p>你列的景点大约是 <strong>7–8 天</strong>的内容量。Day 1 要花约 4 小时南下，Day 5 要花 <strong>9–11 小时</strong>北返，',
    '真正完整可用的只有 Day 2、3、4 三个白天。要在这三天里覆盖中央海岸 + Santa Barbara + Malibu + 整个 LA + Laguna + San Diego，',
    '结果只会是每站都压缩成「停车—拍三张—上车」。</p>',
    '<p>你已经确认<strong>全部保留、一个不砍</strong>。那么这份报告的定位就随之改变：',
    '它不再是一份「照着走」的行程单，而是一份<strong>现场决策手册</strong>——每个点位都给足坐标、光线窗口、潮汐条件与关闭风险，',
    '让你在路上根据当天的烟况、车位和潮位<strong>临场取舍</strong>。逐日行程会按「必去」与「顺路可选」两层来排，而不是把 28 条塞进 5 天。</p>',
    '<p>需要你自己心里有数的四处高代价项：Salton Sea 支线净增 7–8.5 小时且完全反向；',
    'Guadalupe 与 Oceano 偏离 1.5–2 小时且题材与 Montaña de Oro 重叠；',
    'Palos Verdes 海崖题材与 Laguna 重叠；Getty Center 与 Getty Villa 各需 2–3 小时。</p></div>',

    '<div class="callout info"><span class="title">逐日行程生成中</span>',
    '<p>完整的 Day 1–5 安排会在洛杉矶片区研究返回后给出。',
    '排布原则是<strong>让每天最好的日落机位正好落在日落时刻</strong>——由北向南推进时海岸线始终在右手边（西侧），日落机位天然可用。</p>',
    '<p>日出日落、潮汐与驾驶时间三张查表型数据已移到页面末尾的 <a href="#appendix">附录</a>。</p></div>',

    '<div class="callout tip"><span class="title">LA 段的一个具体建议</span>',
    '<p>Santa Monica → Downtown LA 走 I-10 在高峰期要 70–110 分钟，是全程时间损失比例最高的一段。',
    '如果 Downtown 那半天是步行拍摄（Broadway、Bradbury、Grand Central Market、Walt Disney Concert Hall），',
    '<strong>把车留在 Santa Monica，改坐 Metro E Line 轻轨</strong>，约 50 分钟且完全不受路面影响，比自驾更快也更可预测。</p></div>'
  ].join('');

  /* ---------- 附录：查表型参考数据 ---------- */
  var APPENDIX = [
    '<h3 class="apx-h">A. 日出日落（2026 年 9 月）</h3>',
    '<p class="section-lead">黄金时刻约为日落前 40 分钟；蓝调最佳在日落后 15–25 分钟，海边通常 19:30–19:45 收工。' +
    '整周月相由亏凸转新月，<strong>9/9 为新月</strong>，对长曝海景有利。' +
    '日落方位角全程在 276.5°–278.5° 之间，即<strong>近正西偏北</strong>。</p>',
    '<div class="tbl-scroll"><table class="plan"><thead><tr><th>地点</th><th>日出（9/5）</th><th>日落（9/5）</th><th>日落（9/9）</th></tr></thead><tbody>',
    SUNSET.map(function (r) {
      return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td><td><b>' + r[2] + '</b></td><td><b>' + r[3] + '</b></td></tr>';
    }).join(''),
    '</tbody></table></div>',

    '<h3 class="apx-h">B. 潮汐表（NOAA La Jolla 站 9410230）</h3>',
    '<p class="section-lead">单位 ft，MLLW 基准，PDT。Newport Beach 站（9410580，代表 Laguna Beach）数值几乎相同，时间晚 4–6 分钟。' +
    '🌙 = 凌晨深潮实际不可用｜❌ 过高｜⚠️ 勉强｜✅ 可行。' +
    '这张表决定了 Pirate Tower、Sunset Cliffs 潮池、El Matador 海蚀洞、Treasure Island 拱门四处的可拍性。</p>',
    '<div class="tbl-scroll"><table class="plan"><thead><tr><th>日期</th><th>低潮 ①</th><th>低潮 ②（白天）</th><th>高潮（傍晚）</th></tr></thead><tbody>',
    TIDES.map(function (r) {
      return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td></tr>';
    }).join(''),
    '</tbody></table></div>',

    '<h3 class="apx-h">C. 关键路段驾驶时间</h3>',
    '<p class="section-lead">纯驾驶时间，不含加油、用餐与拍摄停留。「高峰」含工作日早晚高峰与劳工节长周末下午。</p>',
    '<div class="tbl-scroll"><table class="plan"><thead><tr><th>路段</th><th>里程</th><th>常态</th><th>高峰 / 周末</th></tr></thead><tbody>',
    DRIVE.map(function (r) {
      return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td></tr>';
    }).join(''),
    '</tbody></table></div>',

    '<h3 class="apx-h">D. 数据来源</h3>',
    '<div class="tbl-scroll"><table class="plan"><thead><tr><th>数据</th><th>来源</th></tr></thead><tbody>',
    [
      ['日出日落 / 方位角', 'sunrisesunset.io，按各地点经纬度分别计算'],
      ['潮汐', 'NOAA CO-OPS 官方 API（站点 9410230 La Jolla / 9410580 Newport Beach）'],
      ['道路封闭与施工', 'Caltrans QuickMap 与各区 District 公告'],
      ['山火状态', 'CAL FIRE Incidents（Plaskett Fire / Timber Fire）'],
      ['坐标', 'OpenStreetMap 实体节点；几何推算的已在正文标注「推算」'],
      ['票价 / 开放时间', '各景点官方页面，2026 年 9 月核实'],
      ['参考图片', 'Wikimedia Commons，多为 CC BY-SA / CC0 / 公有领域']
    ].map(function (r) {
      return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td></tr>';
    }).join(''),
    '</tbody></table></div>'
  ].join('');

  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('hero-meta', META.map(function (m) {
    return '<span class="chip">' + m[0] + ' <b>' + m[1] + '</b></span>';
  }).join(''));
  fill('overview-body', OVERVIEW);
  fill('plan-body', PLAN);
  fill('appendix-body', APPENDIX);
})();
