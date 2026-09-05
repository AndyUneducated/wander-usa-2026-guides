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
    '<details class="callout warn"><summary class="title">🔥 一号警报：Hwy 1 北段 9/3 已解封，Pfeiffer Beach 恢复可达；南段仍封，不能南北贯通</summary>',
    '<p><strong>这条在 9 月 3 日刚变过，旧攻略全部作废。</strong>当天 6:00，Caltrans 解除了因 Timber Fire 造成的北段封闭，',
    '重开 PM56（Little Sur River 以南）至 PM45（Big Sur Post Office 以南）约 11 英里。',
    'Caltrans 实时路况目前对 SR 1 中加州段<strong>只列出一处火灾封闭</strong>：SLO/Monterey 县界 PM0 向北至 Kirk Creek 一带（约 PM19–20）。</p>',
    '<p>直接后果有两个。<strong>第一，Pfeiffer Beach 重新可达</strong>——Los Padres 的紧急封闭令 Forest Order 05-07-51-26-10 标题即写明',
    '「EXCEPT PFEIFFER BEACH AND SYCAMORE CANYON ROAD」，把它明文排除在封闭之外，配合北段解封，从 Carmel/Monterey 南下即可抵达',
    '（但 9 月拍不到 Keyhole Arch 的穿孔日落，那是冬至前后的现象）。<strong>第二，仍然不能南北贯通</strong>——',
    'Big Sur 段只能<strong>从北侧进出、原路折返</strong>，南下 San Diego 的主干请走 US-101。</p>',
    '<p>仍然拍不到的是：<strong>McWay Falls</strong>（车能开到门口，但州立公园自己关闭至另行通知，且观景步道自 2024 年 11 月起就封了）、',
    '<strong>Sand Dollar Beach / Jade Cove / Willow Creek</strong>（既在南段封闭区内，又被森林封闭令逐条点名）。</p>',
    '<p><strong>这个状态随时可能再变，方向两边都有可能。</strong>Plaskett Fire 已烧约 29,123 英亩而<strong>控制率仍只有 1%</strong>，',
    '面积在 8/30 至 9/2 两天内从 15,479 英亩接近翻倍；火场东侧「50 多年未经历过大火」，燃料负荷极重。',
    'Caltrans 表示南段<strong>没有时间表</strong>。反过来，北段是在火势稳定后迅速解封的，南段部分解封也并非不可能。',
    '北段本身也不保险——这条路在 8 月就有过解封后又重新封闭的先例。</p>',
    '<p>另外两件顺带说明：<strong>历史滑坡点已全部不是障碍</strong>，Caltrans D5 文件标题即为「All of Highway 1 is open as of January 14, 2026」，',
    'Regent\'s Slide、Paul\'s Slide、Rat Creek 等六个工点全部完工；但从 Carmel 南下会遇到 ',
    '<strong>Rocky Creek Bridge 24 小时单向交通管制</strong>（Monterey 以南 15.7 英里，持续到 2026 年 11 月 30 日），会产生等待。</p>',
    '<p>出发当天复查 <a href="https://roads.dot.ca.gov/roadscell.php?roadnumber=1" target="_blank" rel="noopener">Caltrans 实时路况（SR 1）</a>、',
    '<a href="https://www.fire.ca.gov/incidents/2026/8/26/plaskett-fire" target="_blank" rel="noopener">Plaskett Fire 页面</a> 与 ',
    '<a href="https://www.fs.usda.gov/r05/lospadres/alerts" target="_blank" rel="noopener">Los Padres 森林封闭令</a>。</p></details>',

    '<details class="callout warn"><summary class="title">🌊 二号警报：飓风 Marie 的外围会盖住整个行程期——涌浪、阵雨与雷暴</summary>',
    '<p>Marie 于 9 月 1 日在东太平洋生成。NWS 判断它<strong>以热带系统形式直接影响南加州的可能性非常低</strong>，路径向西远离陆地，',
    '但它的外围影响会完整覆盖 9/5–9/9。</p><ul>',
    '<li><strong>涌浪与离岸流</strong>：自 9/4（周五）起南向涌浪增强至 <strong>6–8 英尺</strong>，持续整个长周末到 9/8（周二）。',
    'San Diego 一带自 9/5 起为高离岸流风险，高潮位期间沿岸有淹水可能。<strong>这对 Malibu 尤其重要</strong>——',
    '正是同一类「高潮位加大浪」的组合在 8 月 1 日造成了 Point Dume 的崩塌，行程期内该处出现新的侵蚀或封闭扩大是现实可能。</li>',
    '<li><strong>降雨与雷暴</strong>：Marie 的湿气自 9/5（周六）移入，LA、Orange、San Diego 三县均有阵雨与雷暴机会，可能持续到 9/8。',
    '<strong>最大概率日是 9/6（周日）</strong>。以轻到中雨为主，雷暴形成时可能短时强降雨。请给器材备防雨罩。</li>',
    '<li><strong>体感</strong>：湿度回升到 35%–50%，闷热。LA 高温 30–31°C、沿海多晨雾与阴云；San Diego 26–28°C，以阴天为主。</li>',
    '</ul><p>换个角度看，这未必全是坏事：<strong>阴天与雷暴云层对沙漠段（Salton Sea、Salvation Mountain）的光线其实是加分项</strong>，',
    '但内陆若下雷暴，土路会迅速变得难行，Slab City 之后的土石路请特别谨慎。</p></details>',

    '<details class="callout info"><summary class="title">✅ 已排除的风险：没有红旗警报、没有 Santa Ana 风、没有高温预警</summary>',
    '<p>核实结果是好消息：LAFD 红旗停车限制未生效，加州境内当前没有针对南加州的 Red Flag Warning，也没有 Santa Ana 风事件。',
    'Salton Sea 一带上一次极端高温预警已于 <strong>8 月 29 日到期</strong>，9/5–9/6 仅约 32°C，9/7–9/9 约 38°C，全程不到 40°C——',
    '沙漠段清晨拍摄仍是最佳选择，但已不是安全上的硬性约束。</p>',
    '<p>唯一需要绕行的是 <strong>Gibby Fire</strong>：9 月 2 日在 Orange County 的 Ortega Highway（SR-74）与 Gibby Road 附近起火，',
    '截至 9/3 约 217 英亩、控制率 5%。<strong>SR-74 东行在 Avenida La Pata 处、西行在 Lake Elsinore 的 Grand Avenue 处封闭</strong>，',
    'Caspers Wilderness Park 关闭。若原计划走 Ortega Highway 穿行内陆，请改走 I-5 或 I-15。</p>',
    '<p>另需注意 PCH 与 Topanga Canyon 的 <strong>Palisades Fire 灾后重建工程持续进行</strong>，',
    '工作日 09:00–15:00 之间可能随时出现单车道封闭，Malibu 段通行时间请预留缓冲。</p></details>',

    '<details class="callout warn"><summary class="title">📅 三号警报：前三天压在劳工节长周末（9/7 周一）</summary>',
    '<p>9/5–9/7 是美国夏季最后一个长周末，也是海滩人流最猛的三天。州立公园停车场通常 <strong>10:00 前满位</strong>，',
    'El Matador 仅约 30 个车位；Santa Monica、Laguna Beach 市区按节假日峰值计费且极难找位。住宿未订的话现在就得订。</p>',
    '<p>反过来利用：<strong>9/8、9/9 人流骤降</strong>，最需要干净构图的点排这两天；',
    '劳工节当天没有通勤高峰，<strong>适合在 LA 盆地跑城市与室内景点，别跑海滩</strong>。</p></details>',

    '<details class="callout warn"><summary class="title">🔒 四号警报：三个「只有某一天能去」的硬约束，全部指向 9/9</summary>',
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
    '<p>六个分区的联网研究<strong>已全部完成并入库</strong>，共 47 个景点、140 个机位；日出日落与潮汐均取自官方数据源，',
    '机位坐标逐个经 OpenStreetMap 与 Nominatim 反查核对。</p>',
    '<p><strong>不可达与受限景点已于 2026 年 9 月 3 日联网二次核实</strong>，结论有三处改变：Pfeiffer Beach 恢复可达、',
    'Salvation Mountain 的黄砖路其实是指定通行路径（并非关闭）、Point Dume 的关闭成因是海岸侵蚀而非山火修复。',
    '各景点卡片内已按最新状态更新。</p>',
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
    '</tbody></table></div>',

    '<h3 class="apx-h">E. 出发当天复查清单</h3>',
    '<p class="section-lead">这份报告的实时信息核实于 <strong>2026 年 9 月 3 日</strong>。' +
    '其中有几项在核实当天仍在变动——Plaskett Fire 控制率只有 1%，飓风 Marie 的影响尚未落地，Point Dume 的封闭一年内已反复三次。' +
    '<strong>下面这些请在出发当天早上逐条点开看一遍</strong>，尤其是标了「高」的三条。</p>',
    '<div class="tbl-scroll"><table class="plan"><thead><tr><th>要查什么</th><th>变动可能</th><th>链接 / 方式</th></tr></thead><tbody>',
    [
      ['Hwy 1 封闭范围（南段是否部分解封、北段是否重新封闭）', '<b>高</b>',
       '<a href="https://roads.dot.ca.gov/roadscell.php?roadnumber=1" target="_blank" rel="noopener">Caltrans 实时路况 SR 1</a>'],
      ['Plaskett Fire 火势与疏散区（影响 Ragged Point、烟雾分布）', '<b>高</b>',
       '<a href="https://www.fire.ca.gov/incidents/2026/8/26/plaskett-fire" target="_blank" rel="noopener">CAL FIRE 事件页</a>'],
      ['Point Dume 的 Cliffside Drive 崖顶入口是否开放', '<b>高</b>',
       '致电 LA County Beaches &amp; Harbors；另查 <a href="https://www.malibucity.org/alerts" target="_blank" rel="noopener">Malibu Alert Center</a>'],
      ['Los Padres 森林封闭令是否变更（Pfeiffer Beach 的例外条款）', '中',
       '<a href="https://www.fs.usda.gov/r05/lospadres/alerts" target="_blank" rel="noopener">Los Padres 封闭令与警报</a>'],
      ['Big Sur 州立公园是否重开（McWay Falls）', '中',
       '<a href="https://www.parks.ca.gov/" target="_blank" rel="noopener">California State Parks</a>'],
      ['飓风 Marie 外围：涌浪、高离岸流、阵雨与雷暴', '中',
       '<a href="https://www.weather.gov/lox/" target="_blank" rel="noopener">NWS Los Angeles/Oxnard</a>、<a href="https://www.weather.gov/sgx/" target="_blank" rel="noopener">NWS San Diego</a>'],
      ['Scripps Pier 日落导览是否还有 9/5、9/6、9/8、9/9 场次', '中（会售罄）',
       '<a href="https://aquarium.ucsd.edu/" target="_blank" rel="noopener">Birch Aquarium 订票</a>——想上桥请<b>现在就订</b>'],
      ['Gibby Fire 与 SR-74 Ortega Highway 封闭', '中',
       '<a href="https://roads.dot.ca.gov/roadscell.php?roadnumber=74" target="_blank" rel="noopener">Caltrans SR 74</a>'],
      ['Rancho Guadalupe 大门（9/7 周一上午可能因清沙关闭）', '低',
       '致电 805-343-2354，通常 12:00 前重开'],
      ['南加州红旗警报 / Santa Ana 风（当前无）', '低',
       '<a href="https://www.weather.gov/lox/" target="_blank" rel="noopener">NWS 警报页</a>'],
      ['Portuguese Bend 滑坡与 Palos Verdes Drive South 路况', '低（已减速至 1.1 英寸/周）',
       '<a href="https://www.rpvca.gov/landmovement" target="_blank" rel="noopener">rpvca.gov/landmovement</a>'],
      ['已确认关闭、无需再查：Wayfarers Chapel、Sunken City', '—',
       'Wayfarers 重建希望 2027 年秋开工；Sunken City 长期封闭且圣佩德罗持续执法']
    ].map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>';
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
