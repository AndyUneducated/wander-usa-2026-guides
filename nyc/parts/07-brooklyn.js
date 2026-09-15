module.exports = {
  id: 'brooklyn',
  name: 'Brooklyn 与 Queens · 桥、天际线与秋色',
  navName: 'Brooklyn',
  color: '#4da3ff',
  lead: '这一区的价值在于「同一条河的另一侧」：Manhattan 的天际线在这里是<strong>被眺望的对象</strong>而不是你站的地方，' +
    '而且<strong>十二个条目里有七个完全免费</strong>（Brooklyn Bridge Park、DUMBO、Brooklyn Heights Promenade、' +
    'Prospect Park、Green-Wood、Williamsburg、Gantry Plaza），' +
    '另外三个是建议捐赠或十美元以下（Brooklyn Museum、Queens Museum、New York Transit Museum）。' +
    '<strong>需要专门挑日子的只有两件事：秋色，以及 Coney Island 的游乐场季节。</strong>' +
    '先说秋色——' +
    'Prospect Park、Brooklyn Botanic Garden、Green-Wood 三个点全靠落叶树，' +
    '而<strong>Kings County（Brooklyn）与 Queens County 的 2026 年预报峰值是 10 月 21 日前后</strong>，' +
    '是全纽约州最晚的一档。<strong>10 月 15 日之前去这三个地方，你拍到的基本是绿色的树。</strong>' +
    '两个好消息：<strong>Brooklyn Heights Promenade 完全开放</strong>（BQE 三重悬臂大修 2030 年才破土，' +
    '2026 年秋天只是在做环评听证）；<strong>Coney Island 两家游乐场秋季都还在营业</strong>，' +
    '<strong>Luna Park 的 2026 赛季末日是 11 月 1 日</strong>（官网 Halloween Harvest 档已公布）。' +
    '但 <strong>Deno\u2019s Wonder Wheel 的 2026 季末日期截至 2026-09-14 官方仍未公布</strong>——' +
    '官网钟点页只写到 9 月 8 日的夏季每日档，往后只有「周末与节日开放、到十月底结束」的惯例口径' +
    '（2025 年的实际季末是 10 月 26 日），<strong>秋季出行前必须打 (718) 372-2592 逐日确认</strong>。' +
    '一个坏消息：DUMBO 的 Washington Street 是一条<strong>有车通行的活街道</strong>，' +
    '而且任何一个「合理的钟点」你都会和几十个人抢同一块石板。',
  callouts: [
    {
      type: 'warn',
      title: '本区最重要的一条：Brooklyn 秋色峰值在 10 月 21 日前后',
      html: '<p>纽约市是全州最晚变色的地方，原因是<strong>城市热岛效应把物候整体往后推</strong>，加上临海气温缓冲。' +
        '具体数字：<strong>More Than Just Parks 的县级模型给 Kings County（Brooklyn）、Queens County、' +
        'Richmond County 的 2026 年峰值都是 10 月 21 日</strong>，是全州 62 个县里最晚的一档' +
        '（同一模型给 Greene County 的是 10 月 2 日，给全州中位数的是 10 月 13 日），' +
        '误差带自报为 <strong>±10 天</strong>。' +
        '<strong>Old Farmer\u2019s Almanac 的 2026 年秋色图更晚，把纽约市标在「11 月 1 日前后达到或接近峰值」</strong>，' +
        '并注明色彩可以拖到 11 月初。</p>' +
        '<p><strong>结论，请按这个用：10 月 15 日之前，Prospect Park / Brooklyn Botanic Garden / Green-Wood 三处基本还是绿的，' +
        '去了只能当公园逛，看不到秋色；<strong>10 月 20 日–11 月 5 日才是真窗口</strong>，' +
        '其中 10 月下旬（约 21 日前后的那一周）最稳。</strong>' +
        '如果你的日期落在 9 月底或 10 月上旬，请把这三个点的期望值调成「建筑与地形」而不是「颜色」，' +
        '把预算挪给 DUMBO、Brooklyn Bridge Park、Gantry Plaza 这些不依赖季节的点。</p>' +
        '<p>行前查什么：<strong>I LOVE NY 的官方每周秋色报告</strong>（州旅游局出，逐周更新，但有提前喊峰值的动机）；' +
        '<strong>New York Botanical Garden（Bronx）的实时树种色彩清单</strong>是纽约市范围内最靠得住的实时口径，' +
        '虽然在 Bronx，但和 Brooklyn 只差几天。' +
        '<strong>Brooklyn Botanic Garden 本身没有实时秋色追踪器</strong>——它只有一个静态的 Fall Highlights 页面' +
        '和一份 What\u2019s in Bloom 植物清单，不要指望它给你「今天几成」。</p>'
    },
    {
      type: 'warn',
      title: 'Coney Island 2026 赛季：Labor Day 后只开周末与犹太节日，10/25 收摊',
      html: '<p><strong>先记住一件最容易踩的事：Wonder Wheel 和 Cyclone 属于两家不同的公司，日历不一样。</strong>' +
        'Wonder Wheel、Phoenix、Spook-A-Rama 在 <strong>Deno\u2019s Wonder Wheel Amusement Park</strong>；' +
        'Cyclone、Thunderbolt、Tony\u2019s Express 在 <strong>Luna Park</strong>。' +
        '想拍「亮着灯还在转的 Wonder Wheel」，必须是 Deno\u2019s 的营业日。</p>' +
        '<p><strong>Deno\u2019s 官网已公布逐日 2026 日历，9/25–10/25 窗口内的营业日是：</strong></p>' +
        '<ul>' +
        '<li><strong>9/26（六）– 10/1（四）：连续六天全开</strong>（Sukkot 假期），是本窗口条件最好的一段</li>' +
        '<li>10/3（六）、10/4（日）</li>' +
        '<li>10/10（六）、10/11（日）、10/12（一，Indigenous Peoples\u2019 Day）</li>' +
        '<li>10/17（六）、10/18（日）</li>' +
        '<li><strong>10/24（六）、10/25（日）——2026 赛季最后两天，之后整园关闭至 2027 年</strong></li>' +
        '</ul>' +
        '<p><strong>其余所有日期 Deno\u2019s 都闭园，包括 9/25（周五）与 10/2（周五）——官网明确标注「Closed」。</strong>' +
        'Deno\u2019s 的开门时间是儿童区 11:00、Wonder Wheel 等成人机械 12:00。</p>' +
        '<p><strong>关园钟点现已查实：18:00，而且这是全季固定的，不是十月才这样。</strong>' +
        'denoswonderwheel.com 的 Hours 页日历里，<strong>9 月 8 日夏季档结束之后的每一个营业日都记为 18:00 结束</strong>' +
        '——9/9、9/21、9/29、9/30、10/1、10/12 这些单日条目全是 11:00–18:00，' +
        '各周末条目也一律以周日 18:00 收尾；作为对照，6/4–9/8 的夏季档结束时间是 22:00。' +
        '<strong>两点照实保留：这个 18:00 只出现在日历的结束时刻里，页面正文只宣传开门时间、没有用文字写出闭园钟点；' +
        '官方另有原话「Hours are subject to change based on weather and operating conditions」。' +
        '出发当天请打 (718) 372-2592 核实。</strong></p>' +
        '<p><strong>这条比日期表更要命，请务必读完：本窗口内最早的日落是 10/25 的 18:01，最晚是 9/25 的 18:47，' +
        '全部晚于 Deno\u2019s 的 18:00 关园。也就是说——不管你挑 9/25–10/25 里的哪一天，' +
        '「亮着灯还在转的 Wonder Wheel」都拍不到，你会在它点灯之前就被清场。</strong>' +
        '这不是挑日子的问题，是整个秋季档的钟点就是这样；要拍到得回到 9 月 8 日之前的夏季档（开到 22:00）。' +
        '<strong>关园之后摩天轮的 LED 是否仍然亮着，官方没有任何说明——未能确认，同样请打上面那个电话问。</strong></p>' +
        '<p><strong>Luna Park</strong> 的 Halloween Harvest 官方期间为 <strong>9/18–11/1</strong>，' +
        '整季通票有效期写到 <strong>2026 年 11 月 1 日</strong>。' +
        '<strong>官网 lunaparknyc.com/plan/park-hours 的活动日历现已展开到 11 月 1 日，十月逐日钟点是：</strong></p>' +
        '<ul>' +
        '<li><strong>周五 16:00–22:00</strong>（10/2、10/9、10/16、10/23、10/30）</li>' +
        '<li><strong>周六与周日 11:00–20:00</strong>（10/3、10/4、10/10、10/11、10/17、10/18、10/24、10/25）</li>' +
        '<li><strong>10/12（一，Indigenous Peoples\u2019 Day）11:00–20:00</strong>；周二至周四一律闭园</li>' +
        '<li><strong>10/31（六，万圣节）11:00–22:00</strong>；<strong>11/1（日）11:00–20:00，官网标注「Last day of Fall Season」</strong></li>' +
        '</ul>' +
        '<p><strong>请注意十月的周六不再像九月那样开到 22:00，而是 20:00</strong>——' +
        '十月里只有周五和万圣节当天是 22:00 场，本条原先按九月规律推测「周六 22:00」，是错的，已更正。</p>' +
        '<p><strong>如果只能挑一天，而你的日期在真实行程内：选 10 月 16 日（周五），目标是 Luna Park。</strong>' +
        'Luna Park 那天 16:00–22:00，当日日落 18:14、民用暮光结束 18:41，' +
        '<strong>整个蓝调加三个多小时夜场全在营业时间内，Cyclone 与 Thunderbolt 亮灯运转，是三天里唯一不用赶的一场</strong>' +
        '（代价是 Deno\u2019s 周五不开，Wonder Wheel 连白天转动的版本都没有）。' +
        '<strong>10/17 与 10/18（周六日）两园都开：Deno\u2019s 12:00–18:00、Luna Park 11:00–20:00。' +
        '想看转动的 Wonder Wheel 就 17:35–18:00 这段昏金光去拍，天还亮着；' +
        '18:00 被清场后转场 130 米到 Cyclone 拍蓝调，两件事一晚上能串起来。</strong></p>'
    },
    {
      type: 'good',
      title: 'Brooklyn Heights Promenade 与 BQE：2026 年秋天全线开放，无封闭',
      html: '<p>网上 2018–2019 年那批「promenade 要封六年」的说法已经彻底过期，现在的情况是明确的好消息。' +
        '<strong>2026 年 8 月 24 日，Mamdani 市长与 NYC DOT 局长 Michael Flynn 公布了 40 亿美元、十年期的 BQE Central 大修方案</strong>' +
        '（Atlantic Avenue 至 Sands Street 的 1.5 英里市属路段，含 promenade 底下那段 0.4 英里的三重悬臂）。' +
        '关键时间表：<strong>2026 年 9 月发环评范围界定公告，2026 年 11 月开公众范围界定会</strong>' +
        '（DOT 页面另列了 <strong>2026 年 10 月 6 日与 10 月 22 日</strong>两场同内容的 CEQR 公众会），' +
        'EIS 预计 2028 年夏出，<strong>2030 年破土</strong>，2032 年车流转到临时高架，<strong>2040 年完工</strong>。</p>' +
        '<p><strong>也就是说：2026 年秋天这里一米都没封，1,826 英尺（557 米）全长可走，视野零遮挡。</strong>' +
        '施工期确实会分段封闭 promenade（DOT 与 Flynn 都明说了），但那是 2030 年代的事，' +
        '而且官方承诺「任何时候至少保留一段开放」。' +
        '唯一可能的现场影响是环评期间偶有勘测车辆与临时围挡，属于噪音级别，不影响拍摄。</p>' +
        '<p>顺带一个对拍摄有用的背景：promenade 本身就是 BQE 的顶盖。' +
        '1943 年 Columbia Heights 的居民想把被高速切掉的后花园盖回来，Robert Moses 表面同意、' +
        '实际上 Andrews & Clark 已经画好了「盖成公共步道」的图。' +
        '南半段 1950 年 10 月 7 日开放、北半段 1951 年 12 月 7 日开放，高速本身要到 1954 年才通车。' +
        '你脚下十几米就是两层各三车道的车流，<strong>栏杆有持续低频震动，长曝光务必压低重心、关防抖、用延时或快门线</strong>。</p>'
    },
    {
      type: 'tip',
      title: '三脚架：四种完全不同的规矩，Botanic Garden 最坑',
      html: '<ul>' +
        '<li><strong>Brooklyn Botanic Garden——最需要注意的一个。</strong>' +
        '个人非专业摄影不需许可，器材上限是「一台相机 + 一个三脚架／机身支架／自拍杆」。' +
        '但官方原文写明：<strong>「tripods, body mounts, and selfie sticks may not be used in the ' +
        'Japanese Hill-and-Pond Garden, the Conservatory, or flower beds」</strong>——' +
        '也就是<strong>你最想拍的 Japanese Hill-and-Pond Garden 恰恰禁止三脚架</strong>，' +
        'Steinhardt Conservatory 与所有花床也一样。禁无人机。' +
        '专业人像与团体拍摄需许可（至少 5 个工作日）；婚纱／订婚 <strong>$366／25 人以内</strong>，' +
        '每场 60 分钟、配保安计时；商业与编辑拍摄需 14 个工作日。' +
        '→ Japanese Garden 请当成纯手持点位来准备器材。</li>' +
        '<li><strong>Green-Wood Cemetery——比传闻宽松。</strong>' +
        '现行 Visitor Guidelines 原文是「We welcome and encourage you to take photos of Green-Wood for personal use」，' +
        '<strong>全文没有一处提到三脚架</strong>。受限的只有「拟用于出版或商业用途的专业摄影」与摄影机，需书面同意' +
        '（(718) 768-7300）。另外明确<strong>禁止带道具与真人模特</strong>、禁无人机。' +
        '需要标注的灰区：该园 2010 年的旧「Photography Policy」页把「灯具、支架及其他器材」' +
        '（lights, stands or other equipment）归入专业摄影范畴，' +
        '<strong>「支架」是否涵盖普通三脚架，官方现行页面未作说明——未能确认</strong>。' +
        '实操上低调架、不挡路、看到葬礼队伍立刻收起来就没有问题。</li>' +
        '<li><strong>Brooklyn Bridge Park（含 DUMBO 的 Pebble Beach、Jane\u2019s Carousel、Pier 1）——另一处灰区。</strong>' +
        'MOFTB 与 NYC Parks 的许可在这里<strong>一律无效</strong>，必须单独向 BBP 申请；' +
        '许可只发工作日，费率以「仅手持器材」起算，<strong>超出手持的器材要逐项报备并加价</strong>，' +
        '而且<strong>草坪与人工草皮上只允许手持器材</strong>。禁无人机（官方写「with no exceptions」）。' +
        '官方页面只把商业影视／摄影列为需许可，普通游客带三脚架并未明文禁止，' +
        '<strong>但「个人用途的三脚架算不算超出手持」官方没有表态——未能确认</strong>。' +
        '稳妥做法：别上草坪，架在硬地与栈道上，别占道。' +
        '婚纱／订婚拍摄超过 20 人或使用非手持器材才需许可。</li>' +
        '<li><strong>Prospect Park 与所有 NYC Parks 场地——最宽松，三脚架明文合法。</strong>' +
        'NYC Parks 官方条件写得很清楚：只要「仅用手持相机或三脚架」、不要求独占空间、' +
        '不用道具或模拟紧急场面、不申请停车或车辆通行，<strong>就不需要 MOME 许可也不需要 Parks 的 MPA</strong>。' +
        '超出这个范围（灯具、发电机、封控人流）才要提前 7–14 天申请。</li>' +
        '<li><strong>Gantry Plaza State Park</strong> 属纽约州立公园系统，' +
        '州公园对影视／录音类活动可能要求许可，个人旅拍无需。' +
        '<strong>该园针对三脚架的具体条款未能从州公园官方页面找到——未能确认</strong>，' +
        '现场以护园员口径为准。</li>' +
        '</ul>'
    },
    {
      type: 'info',
      title: '日出日落钟点与方位角（NYC，2026 秋，全部 EDT）',
      html: '<p><strong>先排除一个变量：2026 年夏令时结束于 11 月 1 日</strong>，' +
        '所以九月底到十月底这段秋色窗口内不存在拨钟，下面的钟点全部是 EDT；' +
        '<strong>11 月 1 日之后来的读者请自行把下列钟点减一小时</strong>。' +
        '所以 9/25–10/25 之间不存在拨钟，下面全部是 EDT。</p>' +
        '<ul>' +
        '<li><strong>9/25</strong>：民用晨光 06:20 → 日出 <strong>06:47</strong>（方位 <strong>90.6°</strong>，几乎正东） ' +
        '｜ 日落 <strong>18:48</strong>（方位 <strong>269.2°</strong>，几乎正西） → 民用暮光结束 19:16。正午最大高度角 48.2°</li>' +
        '<li><strong>10/1</strong>：日出 06:53（93.7°）｜日落 18:38（266.1°）</li>' +
        '<li><strong>10/10</strong>：日出 07:02（98.2°）｜日落 18:24（261.7°）</li>' +
        '<li><strong>10/22</strong>：民用晨光 06:48 → 日出 <strong>07:15</strong>（方位 <strong>104.1°</strong>） ' +
        '｜ 日落 <strong>18:06</strong>（方位 <strong>255.9°</strong>） → 民用暮光结束 18:34。正午最大高度角 38.1°</li>' +
        '<li><strong>10/25</strong>：日出 07:19（105.5°）｜日落 18:02（254.5°）</li>' +
        '</ul>' +
        '<p><strong>可用的一句话总结</strong>：一个月里日落方位从 269° 一路南移到 254°，' +
        '整整挪了 15 度；日落钟点提前 46 分钟。' +
        '这个位移直接改写了两件事：<strong>Riegelmann Boardwalk 的沿栈道日落只在 10 月 6–8 日成立</strong>' +
        '（栈道轴向实测 83°／263°，10/7 日落方位 263.2°），' +
        '以及 <strong>Gantry Plaza 十月下旬的「灯亮 + 天还亮」重叠度比九月底好得多</strong>。' +
        '另外 10 月下旬日出已经到 07:15，<strong>已经进入工作日通勤时段</strong>——这对 DUMBO 的清场很不利。</p>'
    }
  ],
  spots: [
    {
      id: 'gantry-plaza',
      n: 1,
      name: 'Gantry Plaza 州立公园与 Pepsi-Cola 招牌',
      en: 'Gantry Plaza State Park · Pepsi-Cola Sign · Long Island City',
      must: 2,
      score: 4.5,
      tldr: '免费、地面高度、正对 Midtown 的最佳正面机位；但太阳会提前 30 分钟沉进天际线，真正的价值在蓝调——<strong>而州立公园官网对闭园钟点有两个打架的口径（22:00 与「dusk」），出发前先打电话问</strong>。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '不需预约', c: 'free' },
        { t: '22:00 闭园', c: 'risk' },
        { t: '十月下旬更好', c: 'free' }
      ],
      highlights: [
        '这是<strong>全纽约不花钱、不排队、不用上楼就能拍到的最正的 Midtown 天际线</strong>。' +
          '从园区北段实测方位：<strong>Empire State Building 在 275.6°、直线 2,362 米</strong>' +
          '（塔尖仰角约 10.6°），<strong>Chrysler Building 在 291.7°、1,592 米</strong>（仰角约 11.3°），' +
          '联合国总部在 291.5°、933 米。整条 East River 在你和它们之间，前景干净到不需要处理',
        '公园名字来自那两座 <strong>1925 年建的 car float transfer bridge（龙门架）</strong>，' +
          '属 James B. French 专利的 contained apron 型，当年把整节货运车厢吊上驳船，' +
          '经 East River 送到 Long Island Rail Road 的 North Shore Freight Branch。' +
          '铁路线原本走 48th Avenue 南侧的路堑，2000 年代初被填平——' +
          '<strong>现在的草坪下面是一条填掉的铁路</strong>',
        '北段那块 <strong>Pepsi-Cola 霓虹招牌，120 英尺长、60 英尺高</strong>，' +
          '1939 年由 General Outdoor Advertising Company 制造，1993 年由 Artkraft Strauss 重建，' +
          '原本立在 PepsiCo 装瓶厂屋顶上（厂 1999 年关）。' +
          '<strong>2009 年整体拆解后在公园里重新装配，2016 年 4 月 12 日被定为纽约市地标</strong>——' +
          '一块广告牌拿到地标身份，这在纽约是很少见的',
        '<strong>本区唯一一个「十月下旬明显优于九月底」的点位。</strong>' +
          '原因是 Midtown 的写字楼灯是按下班时间亮的，不是按太阳。' +
          '9/25 日落 18:48、暮光结束 19:16，灯还没怎么亮天就黑透了；' +
          '10/22 日落 18:06、暮光结束 18:34，<strong>而办公楼在 17:30–18:00 之间就陆续亮灯</strong>，' +
          '于是「窗光密度」和「天空还有蓝」这两件事重叠得多得多',
        '南邻的 <strong>Hunters Point South Park</strong>（2013 年一期、2018 年二期）是同一条岸线的延伸，' +
          '设计上更现代，有一处不能下水的「城市沙滩」、螺旋观景平台和 NYC Ferry 码头。' +
          '它的角度更偏南，能把 Empire State Building 和 One World Trade Center 同时收进一张横幅'
      ],
      tour: [
        '<strong>先认清这是什么：一个 12 英亩的滨水草坪，本身没有可参观的内容，全部价值在「对岸」。</strong>' +
          '园内只有两样实物值得走近看——<strong>1939 年的 Pepsi-Cola 霓虹招牌</strong>与<strong>两座 1925 年的货运龙门架</strong>，' +
          '其余是草地、长椅、球场和喷水池。因此它适合当作「顺路半小时」，不适合专程过河',
        '<strong>逛法，从北往南一条直线走完即可</strong>：7 号线 Vernon Blvd–Jackson Av 站出来往西 8 分钟到园区北端 → ' +
          'Pepsi 招牌（停 10 分钟）→ 龙门架栈道与四座伸入河里的木栈桥（15 分钟，栈桥端头是全园视野最好的位置）→ ' +
          '沿 Center Boulevard 往南 600 米进 Hunters Point South Park，' +
          '那里有一座<strong>螺旋坡道观景平台</strong>，能把 Empire State Building 与 One World Trade Center 一次看全，' +
          '是整段岸线最值得多走的十分钟',
        '<strong>可以直接跳过的：</strong>篮球场、手球场、运动场、儿童游乐区、喷水池（Labor Day 后已停用）与两处狗公园。' +
          '省下的时间要么往南给 Hunters Point South Park，要么坐 NYC Ferry 过河去 DUMBO——' +
          '<strong>从园内的 Hunters Point South 渡轮码头有直达 DUMBO／Fulton Ferry 的航线，' +
          '这是把 Queens 与 Brooklyn 两边串起来最省事的方式</strong>',
        '<strong>人流与安全：</strong>这里是密集住宅区的后花园，白天到夜里都有大量居民遛狗、跑步、推婴儿车，' +
          '治安属纽约市里较好的一档，单独前往没有问题。' +
          '<strong>但傍晚 17:00 之后临水的长椅与 Adirondack 椅会被本地人坐满</strong>，' +
          '想有位置坐下来看天际线，要么早到，要么往南走到人少的 Hunters Point South Park',
        '<strong>餐饮与卫生间：</strong>Center Boulevard 沿街（46th–48th Avenue 之间）是一整排咖啡馆、面包房与餐厅，' +
          '吃饭完全不成问题，且价格明显低于对岸 Manhattan。' +
          '<strong>公厕最可靠的一处是 47-40 Center Boulevard 的 Hunters Point Library</strong>' +
          '（Steven Holl 设计的那栋白色方盒子，本身也值得进去看一眼，二至五层的阶梯式书架正对天际线，免费）；' +
          '<strong>园内公厕的具体位置与季节性开放钟点未能在州立公园官方页面找到——未能从官方渠道确认</strong>'
      ],
      photo: '城市天际线 <strong>5/5</strong>，工业遗构 <strong>4/5</strong>，人像 <strong>4.5/5</strong>。' +
        '扣分只扣在一件事上：<strong>太阳不会在这里落到海平线</strong>——它会提前沉进 Manhattan 的楼群，' +
        '所以别指望「日落挂在天际线上」的画面，这里的钱都在蓝调那 28 分钟里。' +
        '人像给高分是因为 Pepsi 招牌那种红霓虹在人脸上是极好的边缘光，而且背景就是全世界最好认的天际线。',
      shots: [
        {
          name: 'Pepsi-Cola 招牌下方（招牌 + 天际线同框）',
          park: [40.746366, -73.957748],
          view: [40.747475, -73.957697],
          desc: '<strong>蓝调最佳：9/25 为 18:48–19:16，10/22 为 18:06–18:34</strong>，' +
            '霓虹亮度与天空亮度在这 28 分钟里达成平衡，之后霓虹就会过曝成一团红。' +
            '<strong>24–35mm</strong> 从招牌东南侧压低机位，让红色草书体占画面左侧三分之一、' +
            'Midtown 楼群铺满右侧三分之二；<strong>16–24mm</strong> 贴到招牌基座下方仰拍可以把「PEPSI」' +
            '的笔画拉成前景框。注意从这块招牌看 Empire State Building 的方位是 <strong>272.6°</strong>、' +
            '距离 2,358 米，几乎正西，<strong>所以九月底的日落方向就在招牌后面偏左 3 度</strong>——' +
            '想让残霞给招牌打背光就卡 18:15–18:35（9 月底）。需三脚架，1–8 秒。'
        },
        {
          name: '龙门架栈道（工业前景 + 天际线）',
          view: [40.746366, -73.957748],
          desc: '<strong>昏金光实际结束得比日历早：太阳会在自身高度角降到约 5° 时沉进对岸楼群</strong>，' +
            '实测 9/25 约 <strong>18:17</strong>（方位 264°）、10/22 约 <strong>17:33</strong>（方位 250°），' +
            '也就是比官方日落时刻早 <strong>30–35 分钟</strong>。' +
            '所以硬光的窗口是 17:00–17:35（10 月下旬）或 17:45–18:15（9 月底）。' +
            '<strong>24–70mm</strong> 沿栈道纵轴，把黑色铁架的桁架格纹当成天际线前面的几何滤网；' +
            '<strong>70–200mm</strong> 从栈道南侧压缩，让龙门架的立柱正好切在 Chrysler Building 旁边。' +
            '坐标取自 OSM 园区北段多边形中心，<strong>两座龙门架就在其正西侧临水处，步行 30–60 米内</strong>。'
        },
        {
          name: 'Hunters Point South Park 南端（ESB 与 One WTC 同框）',
          view: [40.741846, -73.961347],
          desc: '往南走 600 米换角度：这里视线更偏西北，' +
            '<strong>能把 Empire State Building 与 Lower Manhattan 的 One World Trade Center 收进同一张横幅</strong>，' +
            '这是 Gantry Plaza 北段做不到的。' +
            '<strong>清晨 07:15–08:30</strong>（10 月下旬）最好——此时太阳在你正后方（方位 104°），' +
            '整条天际线是<strong>完全正面受光</strong>，玻璃幕墙全部反射晨光，' +
            '而且河面在无风的清晨会给你完整倒影。' +
            '<strong>35–85mm</strong> 拍全景，<strong>135–300mm</strong> 单独压缩 Midtown 楼群与 Roosevelt Island 缆车。' +
            '坐标为 OSM 的 Hunters Point South／Long Island City 渡轮码头节点，机位就在码头两侧的岸线步道上。'
        }
      ],
      access: {
        visit: '<strong>45–90 分钟</strong>。分配：Pepsi 招牌 10 分钟 + 龙门架与四座木栈桥 15–20 分钟 ' +
          '+ 往南走到 Hunters Point South Park 的螺旋观景台来回 20–30 分钟。' +
          '<strong>只想看一眼天际线与招牌，25 分钟足够</strong>；' +
          '想坐下来等灯亮（办公楼 17:30–18:00 陆续亮灯），再加 40–60 分钟。' +
          '官方没有给建议时长，以上按 12 英亩的园区规模与岸线长度推算',
        book: '不需预约',
        ticket: '<strong>免费</strong>。parks.ny.gov 的园区页面在「Hours and Fees」栏未列任何 vehicle use fee 或入园费，' +
          '园区本身与 Hunters Point South Park 均为免费开放（2026 年 9 月 13 日复核）',
        hours: '<strong>这一条要当心：纽约州立公园官网在同一个页面上给出了两个互相矛盾的闭园口径，' +
          '而本条目的全部价值都在蓝调，所以这个矛盾必须写出来，不能替你二选一。</strong>' +
          'parks.ny.gov 的 Gantry Plaza State Park 页面里，' +
          '<strong>「Hours of Operation」栏写的是「Open daily, dawn to dusk」（日出到日落／黄昏），' +
          '而同一页讲遛狗规定那一段写的却是「during regular park hours --- 8 AM to 10 PM daily」（每日 08:00–22:00）。</strong>' +
          '原先本条只采信了后者。' +
          '<strong>两者的差别对拍摄是决定性的：真实日期 10/16–10/18 日落 18:13 前后、民用暮光 18:38–18:41 结束。' +
          '按 22:00 口径，你在蓝调结束后还有三个多小时，完全从容；' +
          '按「dusk」口径，园子大约在蓝调收尾的同时就该清场，' +
          '你能不能站在园内拍完整段蓝调就得看当天护园员怎么执行。</strong>' +
          '<strong>2026 年 9 月 13 日再查一轮，parks.ny.gov 的 Gantry Plaza State Park 页面两句原话仍然同时挂在站上、' +
          '一字未改：「Hours and Fees — Open daily, dawn to dusk.」与' +
          '「Effective October 4, 2018: Leashed dogs will be permitted on paved pathways and plazas throughout the park ' +
          'during regular park hours --- 8:00 am to 10:00 pm daily.」' +
          '也就是说这个矛盾到今天仍未消除，官方没有做过澄清。</strong>' +
          '<strong>未能从官方渠道判定哪一个是现行口径</strong>——' +
          '出发前请打园方电话 <strong>(347) 935-3039</strong> 问准当天的闭园钟点。' +
          '<strong>好在这个点位有一条现成的退路，风险因此可控：' +
          'Pepsi-Cola 招牌的霓虹整夜都亮、不受闭园时间限制，' +
          '从园外的 Center Boulevard 人行道上照样拍得到（角度差一些、少了栈桥前景）；' +
          '紧邻的 Hunters Point South Park 属 NYC Parks，按一般市属公园口径开到 01:00，' +
          '真被请出 Gantry Plaza 就往南挪几十米继续拍。</strong>' +
          '<strong>稳妥的排法是把到场时间提早：金光 17:33–17:36 起，' +
          '在 18:13 日落前就把主构图拍完，蓝调当加分而不是当计划。</strong>',
        parking: '<strong>强烈建议不要开车。</strong>Hunters Point 是密集住宅区，' +
          'Center Boulevard 与 47th Road 沿线路边车位极少且多为居民占用，' +
          '停车楼按 Manhattan 价格收费。' +
          '<strong>公共交通是压倒性的更优解</strong>：<strong>7 号线 Vernon Blvd–Jackson Av 站</strong>' +
          '（最近，出站往西走 8 分钟即到园区北入口，从 Grand Central 或 Times Square 乘 7 号线只需 10–15 分钟）；' +
          '<strong>E／M 线 Court Sq–23 St 站</strong>；<strong>G 线 21 St 或 Court Sq 站</strong>（步行略远）；' +
          '<strong>NYC Ferry East River 线 Hunters Point South 站</strong>直接停在南园里，' +
          '而且从 DUMBO／Fulton Ferry 有直达船——如果你同一天要拍 Brooklyn Bridge Park，坐船是最省事的接法',
        walk: 'Vernon Blvd–Jackson Av 站到 Pepsi 招牌约 <strong>650 米／8 分钟</strong>，全程平路；' +
          '招牌到龙门架约 150 米／2 分钟；招牌到 Hunters Point South Park 南端约 700 米／9 分钟'
      },
      notes: [
        '<strong>这里的「日落」是假的，请按天际线遮挡算</strong>：太阳在高度角约 5° 时就被对岸 East 30s–40s 的楼群吞掉，' +
          '比官方日落早 30–35 分钟。把闹钟按「日落前 60 分钟到位」设，别按「日落前 20 分钟」',
        '<strong>7 号线回程在傍晚会很挤</strong>，Vernon Blvd–Jackson Av 站是往 Manhattan 方向的上客大站；' +
          '带三脚架和背包的话，让一到两班车过去往往比硬挤更快',
        '园区是<strong>密集住宅楼的后花园</strong>，居民密度很高，日落时段 Adirondack 椅和栈道栏杆位会被本地人占满。' +
          '想要干净的前景请往南走到 Hunters Point South Park，人明显少',
        '<strong>河风比想象中大</strong>，栈道与浮桥段有轻微起伏。长曝光请挂重物、收中柱、用快门线',
        '这里是纽约<strong>最出名的婚纱与订婚拍摄点之一</strong>，周末傍晚常有多组人像团队在招牌前排队。' +
          '如果你要的是招牌无人特写，请在开园的 08:00–09:30 之间去',
        '<strong>Pepsi 招牌的红霓虹显色很难缠</strong>：自动白平衡会把整帧拉青。' +
          '建议固定白平衡在 3800–4500K，并对红通道留出至少 2/3 档余量，否则红色笔画会糊成没有细节的色块'
      ],
      images: [
        { url: 'img/long-island-city-pepsi-cola-sign-may-2026-ceacaff6.jpg',
          cap: 'Pepsi-Cola 招牌与 Midtown 天际线 · Anonymouscarrots / CC BY-SA 4.0' },
        { url: 'img/pepsi-cola-sign-park-view-ee82b923.jpg',
          cap: '自园内草坪望招牌与对岸楼群 · Sashimi-b / CC BY-SA 4.0' },
        { url: 'img/pepsi-cola-sign-in-gantry-plaza-state-park-long-island-city--e9d8221f.jpg',
          cap: '招牌侧向机位 · MusikAnimal / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'brooklyn-bridge-park',
      n: 2,
      name: 'Brooklyn Bridge Park · Pebble Beach 与各码头',
      en: 'Brooklyn Bridge Park · Pebble Beach · Granite Prospect · Jane\u2019s Carousel',
      must: 4.5,
      score: 5,
      tldr: '一条岸线上五个完全不同的机位，免费且 06:00–01:00 开放；<strong>选清晨</strong>，因为傍晚桥与天际线全在逆光里。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '06:00–01:00', c: 'free' },
        { t: '三脚架政策灰区', c: 'risk' },
        { t: '木马 17:50 关', c: 'risk' }
      ],
      highlights: [
        '<strong>先把光的账算清楚，这是本条目最有用的一句话。</strong>' +
          '从 Pebble Beach 实测方位：<strong>Brooklyn Bridge 的布鲁克林侧桥塔在 268.2°、708 米；' +
          'Manhattan 侧桥塔在 290.8°、1,224 米；One World Trade Center 在 295.8°、2,134 米</strong>' +
          '（塔尖仰角 14.2°）。而 9/25 的日落方位是 <strong>269.2°</strong>——' +
          '<strong>几乎正好压在布鲁克林侧桥塔上</strong>。听起来像好事，实际是最坏的情况：' +
          '太阳在方位角走到 268° 时高度角只剩 0.3°，早就被桥塔和 Manhattan 楼群整个挡住了，' +
          '你拿到的是<strong>纯逆光剪影加一团发灰的雾霾</strong>，桥的钢缆和石塔纹理全部丢掉。' +
          '<strong>所以这里的答案是清晨，不是傍晚</strong>：日出方位 90–105° 正好在你背后，' +
          '桥、Manhattan 天际线、One WTC 的玻璃幕墙全部<strong>正面受光</strong>，' +
          '而且清晨无风时河面会给完整倒影',
        '<strong>Pebble Beach</strong> 是全园唯一能走到水边卵石上的位置，' +
          '也是那张「Brooklyn Bridge 从画面左侧跨出、Manhattan 楼群在桥后」的构图的出处。' +
          '它同时是本区最容易犯错的地方：<strong>这是潮汐岸线，涨潮时可站的卵石带会缩到只剩两三米</strong>，' +
          '而 Brooklyn Bridge Park 官网首页每天挂当日高低潮时刻，出门前顺手看一眼',
        '<strong>Pier 1 的 Granite Prospect</strong> 是用 Brooklyn Bridge 改造工程拆下来的' +
          '<strong>再生花岗岩条石</strong>砌成的一段宽阶梯（OSM 直接标为 viewpoint）。' +
          '它的价值是<strong>抬高了约 4–5 米并且面朝西北</strong>，' +
          '从这里 One WTC 的方位是 311.6°、1,800 米，能把 Lower Manhattan 完整摊开而不被前景栈道切断。' +
          '阶梯本身是极好的人像台阶',
        '<strong>Jane\u2019s Carousel</strong>：1922 年 Philadelphia Toboggan Company 造的旋转木马，' +
          '原名 Idora Park Merry-Go-Round，在 Ohio 州 Youngstown 的 Idora Park 转了大半辈子，' +
          '<strong>1984 年 Walentas 夫妇在拍卖会上以 $385,000 买下</strong>，' +
          'Jane Walentas 亲手修复了 48 匹木马与两辆马车，' +
          '<strong>2011 年 9 月 16 日在 Jean Nouvel 设计的 900 万美元玻璃亭里重新开转</strong>。' +
          '<strong>必须更正一个流传极广的说法</strong>：Nouvel 原设计里那个「每到整点把木马的影子投在四面幕布上、' +
          '像一台城市时钟」的 magic lantern 效果，' +
          '<strong>从 2011 年开园起就从来没有真正运行过</strong>——' +
          'Jane Walentas 当时的说法是打这个效果需要的强光灯太热，会烤坏刚修好的丙烯颜料木马。' +
          '所以别为了看马影专门等整点。<strong>但玻璃亭本身在关门后仍整夜发光</strong>，' +
          '木马外圈的灯泡也亮着，「发光玻璃盒子 + 两座桥」这张照片照样成立',
        '<strong>Pier 2 与 Pier 3</strong> 往南走会把视线转得更正：从 Pier 3 看 One WTC 是 324.9°、2,008 米。' +
          '这两个码头的实际用途是<strong>把 Brooklyn Bridge 从画面里拿掉</strong>，' +
          '让 Lower Manhattan 单独成为主体，同时 Pier 3 的 Labyrinth 石阵和 Pier 2 的旱冰场／篮球场' +
          '给你完全不同的人文前景。全园 3,750 棵树，Pier 2 与 Pier 3 的 berm 土丘上有小片林地，' +
          '秋色虽然不如 Prospect Park，但胜在有天际线当背景'
      ],
      tour: [
        '<strong>这是绝大多数人走完 Brooklyn Bridge 之后的落脚点，也是本区唯一一个「就算什么都不干也值得待两小时」的地方。</strong>' +
          '标准逛法是<strong>从北往南一条线</strong>：Main Street／Empire Fulton Ferry 入园 → Jane\u2019s Carousel → ' +
          'Pebble Beach（走到水边卵石上，正对 Brooklyn Bridge 与 Lower Manhattan，' +
          '这是全园最该站的一处）→ Fulton Ferry Landing 的栈桥 → Pier 1 的 Granite Prospect 大台阶 → ' +
          'Pier 2 → Pier 3 → Pier 6。<strong>全程 2 公里、全平路无台阶，可轮椅通行。</strong>' +
          '时间不够就在 Pier 1 打住，前半段的看点密度远高于后半段',
        '<strong>四样别错过：</strong>①<strong>Jane\u2019s Carousel</strong>，1922 年的旋转木马装在 Jean Nouvel 设计的玻璃亭里，' +
          '$4 一次，成年人也能坐，是全纽约性价比最高的四美元；' +
          '②<strong>Pebble Beach 的卵石岸</strong>，全园唯一能走到水边的地方；' +
          '③<strong>Pier 1 的 Granite Prospect</strong>，用 Brooklyn Bridge 拆下来的旧花岗岩条石砌的宽台阶，' +
          '抬高 4–5 米面朝西北，是坐下来吃东西看天际线的最佳位置；' +
          '④<strong>Empire Stores</strong>，1870 年代的咖啡仓库改成的商场，' +
          '<strong>顶层有一个免费的屋顶花园</strong>，视野比地面高一层，' +
          '下雨或太冷时这里是唯一的室内退路',
        '<strong>可以跳过的：</strong>Pier 2 的旱冰场／篮球场／乒乓球、Pier 5 的足球场、Pier 6 的沙坑游乐区与排球场——' +
          '这些是给本地居民用的运动设施，对游客没有意义。' +
          '<strong>Pier 3 与 Pier 6 除非你要走完全程，否则不必去</strong>，' +
          '风景与 Pier 1 是同类，只是角度更偏南。省下的时间建议留给 DUMBO 的街区本身',
        '<strong>人流与安全：</strong>周六日 12:00–17:00 是全园峰值，Pebble Beach 与木马前会排队，' +
          'Jane\u2019s Carousel 周末下午要等 15–20 分钟。' +
          '<strong>清晨 07:00–09:00 几乎没人，是体验感最好的时段</strong>。' +
          '园区治安良好、有 Park Enforcement Police 驻点（99 Plymouth St），夜间也有人流，' +
          '<strong>唯一实际的危险是 Pebble Beach 的卵石：涨潮时可站的范围会缩到两三米，且湿卵石极滑</strong>，' +
          '园方官网首页每天挂当日高低潮时刻，出门前看一眼',
        '<strong>餐饮与卫生间（全天行程的硬约束，这里写全）：</strong>' +
          '园内公厕共七处——<strong>Pier 1 Pavilion、Pier 2 的橙色小屋、Pier 5 Boathouse、Pier 6 的 Fornino、' +
          'Pier 6 的 Quay Tower、Squibb Park、Main Street 的 Education Center，以及 Empire Stores 里</strong>；' +
          '<strong>官方钟点：3–10 月 07:00–23:00，11–3 月 07:00–22:00</strong>。' +
          '吃饭最集中的地方是<strong>北端 Empire Stores 里的 Time Out Market New York</strong>' +
          '（55 Water Street，24,000 平方英尺的美食广场，多家摊位加三个吧台与五层屋顶平台，有座位与洗手间，雨天首选；' +
          '<strong>官方钟点周一至周四与周日 08:00–22:00、周五周六 08:00–23:00</strong>，2026 年 9 月 13 日复核），' +
          '以及 Old Fulton Street 一带的 Grimaldi\u2019s 与 Juliana\u2019s 两家老字号披萨' +
          '（两家隔壁，同源不同人，排队都不短）、14 Old Fulton Street 的 Brooklyn Ice Cream Factory' +
          '（<strong>注意它已经不在 Fulton Ferry Landing 那座 1922 年消防船屋里了</strong>：' +
          '老铺 2019 年迁出，那栋消防船屋现在是 Van Leeuwen 冰淇淋，老铺搬到了马路对面）。' +
          '<strong>南段（Pier 5／Pier 6）只有 Fornino 一家，且为季节性营业</strong>，别指望走到南边才吃饭',
        '<strong>Pier 2 十月起提前两小时关门，这是今年新查到的一条</strong>：' +
          '官方写明「Pier 2: May–September 8am–11pm | October–April 8am–9pm」，' +
          '十月来的话 21:00 之后 Pier 2 就进不去了。' +
          '另外<strong>连通 Brooklyn Heights Promenade 与 Pier 1 的 Squibb Park & Bridge 现行钟点是 08:00–22:00</strong>，' +
          '想靠它上下 Brooklyn Heights 的话请在这个窗口内'
      ],
      photo: '城市风光 <strong>5/5</strong>，建筑 <strong>5/5</strong>，人像 <strong>5/5</strong>，秋色 <strong>2.5/5</strong>。' +
        '五个机位在 2 公里岸线内，题材从卵石滩、花岗岩阶梯、玻璃亭夜景到石阵，密度是本区最高的。' +
        '秋色低分是实话：这里的树都是 2010 年后新栽的，成色远不如 Green-Wood。' +
        '人像满分因为背景选择太多——桥、天际线、发光木马亭、旧码头木桩，四类背景互不重复。',
      shots: [
        {
          name: 'Pebble Beach 卵石岸（桥 + 天际线经典构图）',
          park: [40.704429, -73.989600],
          view: [40.704378, -73.990592],
          desc: '<strong>日出前后是唯一正确答案：9/25 民用晨光 06:20 → 日出 06:47，10/22 为 06:48 → 07:15。</strong>' +
            '日出前 25 分钟拍桥体照明还亮着而天空已泛蓝的版本；日出后 30–75 分钟拍桥塔石材与天际线全部正面受光的版本。' +
            '<strong>16–35mm</strong> 压低到卵石高度，让湿卵石的反光当前景、桥从左上角斜跨出画面；' +
            '<strong>24–70mm</strong> 是最实用的段，把桥塔放左三分点、One WTC 放右三分点。' +
            '傍晚来也可以，但要认清你拿到的是剪影：日落方位 269°（9 月底）正撞桥塔，' +
            '<strong>建议直接放弃细节、按剪影曝光，用 70–200mm 单拍桥塔轮廓配残霞</strong>。' +
            '涨潮时可站范围会缩到两三米，行前查园方官网当日潮时。'
        },
        {
          name: 'Jane\u2019s Carousel 玻璃亭（黄昏与夜景）',
          view: [40.704434, -73.992385],
          desc: '<strong>时间上有个硬约束必须先说：秋季木马 11:00–17:50 营业，' +
            '而本窗口任何一天的日落都在 18:02 之后</strong>（9/25 为 18:48、10/22 为 18:06）。' +
            '也就是说<strong>「转动中的木马 + 蓝调天空」这张照片在 9/25–10/25 之间物理上拍不到</strong>——' +
            '木马停转在前，天变蓝在后。可行的两个版本：' +
            '<strong>①</strong> 17:00–17:45 进去拍<strong>转动中的木马</strong>，' +
            '1/8–1/30 秒让马匹拉出旋转拖影、玻璃幕墙外的桥保持清晰，需要贴玻璃或进亭内手持；' +
            '<strong>②</strong> 18:10–18:40（10 月下旬）在亭外拍<strong>发光玻璃盒子</strong>，' +
            '这时木马已停但亭内灯与外圈灯泡整夜亮着，<strong>24–35mm</strong> 从东南侧退到 25–40 米外，' +
            '让亭子、Manhattan Bridge 的蓝色钢桁架、Brooklyn Bridge 的石塔在同一帧里三层排开。' +
            '需三脚架，2–10 秒，f/8。<strong>别等整点看马影投射——那个效果从未启用过。</strong>'
        },
        {
          name: 'Pier 1 Granite Prospect 花岗岩阶梯',
          view: [40.701995, -73.997408],
          desc: '<strong>清晨 06:50–08:15</strong>（Lower Manhattan 正面受光，且阶梯上还没人）' +
            '或<strong>蓝调 18:10–18:35</strong>（10 月下旬，楼群灯亮）。' +
            'One WTC 在此方位 311.6°、距离 1,800 米、塔尖仰角约 17°，' +
            '<strong>24–50mm</strong> 就能把 Lower Manhattan 完整装下而不必接片。' +
            '构图关键是<strong>用花岗岩条石的水平线做重复韵律</strong>：' +
            '压低机位让最近一级条石的边缘切在画面下缘，条石一级级退向水面、天际线压在上三分之一。' +
            '人像把对象放在第三、四级台阶上，f/2.8–f/4，天际线轻微虚化。' +
            '<strong>此处是硬地，架三脚架相对稳妥（草坪与人工草皮上禁非手持器材）。</strong>'
        },
        {
          name: 'Pier 3 端头（把桥拿掉，只留天际线）',
          view: [40.697961, -73.999696],
          desc: '<strong>蓝调 18:06–18:34（10/22）或 18:48–19:16（9/25）。</strong>' +
            '这里的作用是换叙事：Brooklyn Bridge 已经退到画面右边缘或干脆出画，' +
            'One WTC 在 324.9°、2,008 米，<strong>Lower Manhattan 单独成为主体</strong>。' +
            '<strong>35–85mm</strong> 拍天际线本体，<strong>135–300mm</strong> 压缩楼群做「墙」。' +
            '前景可用 Pier 3 Labyrinth 的石阵（园方以三种历史迷宫图样铺的地面）做几何引导，' +
            '或北退到 Old Pier 1 Piles 的旧木桩阵列（OSM 亦标为 viewpoint，' +
            '位于 40.700848, -73.996708）拍水面木桩的重复节奏。' +
            '往北 400 米是 Squibb Park Bridge，可从上方俯视 Pier 1。'
        }
      ],
      access: {
        visit: '<strong>2–3 小时走完全园（Main Street 到 Pier 6 的 2 公里岸线，含沿途停留）；' +
          '只看北段精华 60–75 分钟</strong>——' +
          'Jane\u2019s Carousel 15 分钟（含排队与坐一圈）+ Pebble Beach 20 分钟 + ' +
          'Fulton Ferry Landing 10 分钟 + Pier 1 的 Granite Prospect 20 分钟。' +
          '<strong>加上在 Time Out Market 吃一顿，请留半天（3.5–4 小时）</strong>。' +
          '公园官方未给建议时长，以上按 85 英亩的园区规模与 2 公里岸线步行时间推算；' +
          '<strong>要拍清晨光线请另外把到场时间提前到日出前 30 分钟</strong>',
        book: '不需预约。<strong>Jane\u2019s Carousel 也不需预约</strong>，现场买票即可',
        ticket: '公园<strong>免费</strong>（官方 Plan Your Visit 页原文「Entry is Free!」）。' +
          'Jane\u2019s Carousel 单次 <strong>$4</strong>；' +
          '一名 42 英寸以下儿童可与一名成人共用一张票，额外的 42 英寸以下儿童每人 $4；接受 SNAP／EBT 折扣。' +
          '<strong>以上于 2026 年 9 月 13 日在 janescarousel.com 的 Hours 页复核。' +
          '需要更正一条：该页现在只列「Tickets are $4」这一档，' +
          '原先本条记录的「12 Tickets – $20.00」联票已从官方页面撤下，本次核实时找不到——' +
          '请按 $4 单次准备，不要指望买到联票。</strong>' +
          '木马是 501(c)(3) 非营利机构运营',
        hours: '<strong>Brooklyn Bridge Park 每日 06:00–01:00</strong>（官方口径 365 天开放，' +
          '原文「Brooklyn Bridge Park is open 6am – 1am every day」）。' +
          '<strong>2026 年 9 月 13 日在 brooklynbridgepark.org/about 逐行复核，' +
          '分区例外有两处与原记录不同，都要改：</strong>' +
          '<strong>① Pier 2 十月起提前两小时关门</strong>——官方原文' +
          '「Pier 2: May–September: 8am–11pm | October–April: 8am–9pm」，' +
          '原先本条只写了「08:00–23:00（季节性）」，对十月的行程是错的；' +
          '<strong>② Squibb Park &amp; Bridge 现行钟点为 08:00–22:00</strong>（原文「Squibb Park &amp; Bridge: 8am–10pm」），' +
          '也就是说这座桥现在有明确公布的开放时间、不再是「状态不明」，但夜里 22:00 后就下不去 Pier 1 了。' +
          '其余分区：<strong>各儿童游乐场日出至日落</strong>、Pier 6 排球场 08:00–23:00、' +
          'Pier 5 野餐半岛烧烤区 06:00–22:00、Environmental Education Center 周四周五 15:00–17:00／周六日 13:00–17:00。' +
          '<strong>洗手间的分季钟点这次找到了官方出处，原先标注的「未能找到出处」可以撤销：' +
          '官方 Visiting The Park 与 FAQ 两页都写「Restrooms Hours: March–October: 7am–11pm | November–March: 7am–10pm」，' +
          '与本条原记录一致。</strong>' +
          '<strong>一处官方自相矛盾照实写出、不替你二选一：Pier 5 的钟点，' +
          'brooklynbridgepark.org/about 写的是「Pier 5: 7am–11pm」，' +
          '而 Plan Your Visit 与 FAQ 页写的是「Pier 5 - 6AM–11PM」，两页差一个小时；' +
          'Pier 6 排球场同样一页 8AM 起、一页 6AM 起。这两处都不影响本条目的机位。</strong>' +
          '<strong>对真实日期的结论：10/16–10/18 日落 18:11–18:14、民用暮光 18:38–18:41 结束，' +
          '离 01:00 闭园还有六个多小时，公园本身的开放时间完全不构成约束</strong>——' +
          '这一区真正卡时间的是下面的木马，不是公园。' +
          '<strong>Jane\u2019s Carousel 秋季时刻表已逐字核实（2026 年 9 月 13 日再次取自 janescarousel.com/hours，未变）：' +
          '「Fall Hours — September 14, 2026 to December 31, 2026 / Closed Monday and Tuesday / 11:00 AM–5:50 PM」' +
          '，即周一、周二闭馆，周三至周日 11:00–17:50</strong>——' +
          '这个 17:50 早于本窗口每一天的日落（最早的 10/25 也是 18:01），' +
          '<strong>意味着蓝调时段木马一定是停着的</strong>（玻璃亭仍发光）。' +
          '<strong>落到真实日期：10/16 周五、10/17 周六、10/18 周日三天木马都开，但都是 11:00–17:50，' +
          '当天日落 18:11–18:14——木马比太阳早收工二十多分钟，' +
          '「亮着灯还在转的木马 + 蓝调天空」这一帧三天都拿不到。</strong>' +
          '想拍转动的木马请安排在 17:00–17:50 这段，天还亮着，' +
          '要蓝调就只能拍熄了灯／停转的木马与仍然发光的 Jean Nouvel 玻璃亭。' +
          '<strong>原先记录的那处官方矛盾已经消失，这次要撤销：' +
          '9 月 6 日官网首页与 Hours 页顶部曾同时挂着一句「The Carousel is closed on Thursdays」，' +
          '与季节表的「周一、周二闭馆」对不上；' +
          '2026 年 9 月 13 日再查，该页只剩四段季节时刻表（春／夏／秋／冬）加一句「Tickets are $4」，' +
          '那句「closed on Thursdays」已不在页面上。' +
          '现行唯一口径就是秋季表：周一、周二闭馆，周三至周日 11:00–17:50。</strong>' +
          '<strong>木马的钟点仍是这一区最容易撞的坑，出发前请打 (718) 222-2502 ' +
          '或写信 info@janescarousel.org 再确认一次当天开不开。</strong>',
        parking: '<strong>DUMBO 与 Brooklyn Heights 一带的停车不值得尝试</strong>：' +
          '路边表位少、限时 2 小时、周末几乎无空位，' +
          '园内本身<strong>不提供任何访客停车</strong>（官方明确「不为制作车辆或房车提供停车」）。' +
          '地铁：<strong>F 线 York Street 站</strong>（离 Pebble Beach 与木马最近）、' +
          '<strong>A／C 线 High Street–Brooklyn Bridge 站</strong>、' +
          '南端 Pier 6 走 <strong>2／3／4／5／R 线 Borough Hall／Court St 站</strong>。' +
          '渡轮：<strong>NYC Ferry 停 DUMBO／Fulton Ferry 与 Pier 6／Atlantic Avenue 两处</strong>，' +
          '其中 DUMBO／Fulton Ferry 站有到 Long Island City（Hunters Point South）的直达航线',
        walk: 'York Street 站到 Pebble Beach 约 <strong>600 米／8 分钟</strong>；' +
          'Pebble Beach 到 Jane\u2019s Carousel 约 200 米／3 分钟；' +
          '木马到 Pier 1 Granite Prospect 约 700 米／9 分钟；' +
          'Granite Prospect 到 Pier 3 端头约 700 米／9 分钟。' +
          '<strong>全岸线从 Main Street 走到 Pier 6 约 2 公里／25–30 分钟</strong>，全程平坦无障碍'
      },
      notes: [
        '<strong>三脚架属灰区。</strong>MOFTB 与 NYC Parks 的许可在这里一律无效，' +
          '必须单独向 Brooklyn Bridge Park 申请；园方费率以「仅手持器材」起算并明说' +
          '「草坪与人工草皮上只允许手持器材」，但对<strong>个人用途的三脚架未作表态——未能确认</strong>。' +
          '稳妥做法：只在硬地与栈道上架、不占道、被劝阻就收',
        '<strong>无人机在园内与园区周边一律禁止</strong>，官方原文写「with no exceptions」',
        '<strong>Pebble Beach 是潮汐岸线</strong>，涨潮时可站的卵石带会缩到两三米，' +
          '且卵石湿滑。园方官网首页每天挂当日高低潮时刻，出门前看一眼',
        '<strong>周末的 Smorgasburg 食物市集</strong>（4–10 月）在 Pier 5 摆摊，' +
          '会把周六下午的人流整体拉向园区南段——这对北段的 Pebble Beach 与木马反而是好事',
        '<strong>Jane\u2019s Carousel 周一、周二闭馆</strong>。如果你的行程只有周一或周二在 DUMBO，' +
          '把木马当作纯外景（玻璃亭 + 桥）来拍，别指望进去',
        '婚纱与订婚拍摄若不超过 20 人且只用手持器材<strong>不需许可</strong>；' +
          '园方的婚礼仪式许可只开放 Pier 1 Granite Prospect、Empire Fulton Ferry Boardwalk、' +
          'Main Street Pebble 三处——这也从侧面说明了哪三个机位最上镜',
        '<strong>Squibb Park Bridge 曾因结构弹跳问题长期封闭、后经重建</strong>，' +
          '目前连通 Brooklyn Heights 与 Pier 1；如果你打算用它从 promenade 直接下到园里，' +
          '<strong>建议当天查园方 Park Alerts 页确认开放状态</strong>'
      ],
      images: [
        { url: 'img/brooklyn-bridge-and-the-lower-manhattan-skyline-from-pebble--22b9f2cf.jpg',
          cap: '自 Pebble Beach 拍 Brooklyn Bridge 与 Lower Manhattan 超宽幅 · Christian David / CC BY-SA 4.0' },
        { url: 'img/jane-s-carousel-dumbo-brooklyn-in-july-2017-8002019c.jpg',
          cap: 'Jane\u2019s Carousel 的 Jean Nouvel 玻璃亭 · MusikAnimal / CC BY-SA 4.0' },
        { url: 'img/brooklyn-bridge-above-jane-s-carousel-9f06c044.jpg',
          cap: 'Brooklyn Bridge 石塔与木马亭同框 · joiseyshowaa / CC BY-SA 2.0' }
      ]
    },
    {
      id: 'dumbo-washington-street',
      n: 3,
      name: 'DUMBO · Washington Street 桥景机位',
      en: 'Washington Street, DUMBO · Manhattan Bridge Framing',
      must: 4,
      score: 5,
      tldr: '全布鲁克林最出名的一帧，站位精确到几平方米；<strong>只有日出前后成立</strong>，08:00 后就是排队和汽车。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '24 小时可拍', c: 'free' },
        { t: '有车通行的活街道', c: 'risk' },
        { t: '08:00 后开始排队', c: 'risk' }
      ],
      highlights: [
        '<strong>先把几何讲清楚，因为这个机位之所以成立完全是几何巧合。</strong>' +
          '实测 OSM 路网：<strong>Washington Street 在 Front Street 到 Water Street 这一段的轴向是 3.0°</strong>' +
          '（几乎正南北）；<strong>而从 Washington × Front 路口看 Empire State Building 的方位是 3.7°、' +
          '直线距离 5,116 米</strong>。' +
          '两者只差 <strong>0.7 度</strong>——在 5.1 公里外折算成 <strong>约 62 米的横向偏移</strong>。' +
          '<strong>这就是「帝国大厦正好出现在桥洞正中」的全部原因</strong>：' +
          '这条 19 世纪仓库街的走向，恰好指向 1931 年才建成的那栋楼。' +
          'Manhattan Bridge 的布鲁克林侧桥塔从 Front 路口看是方位 341.7°、234 米，从 Water 路口看是 332.1°、166 米',
        '<strong>关于「太阳会沿街道对齐」的说法，可以直接否掉。</strong>' +
          '要让太阳出现在桥洞里、正对镜头，太阳方位角必须约 3°（正北）——' +
          '纽约纬度下太阳方位角的全年极值是<strong>夏至日出 57°、夏至日落 303°</strong>，' +
          '<strong>永远到不了 3°，这件事一年 365 天都不可能发生</strong>。' +
          '真正会发生的是另一件被混淆的事：<strong>太阳每天在 12:50–13:00 EDT 前后穿过街道轴线</strong>' +
          '（9/25 的 12:50 方位 180.9°、10/22 的 12:50 方位 183.0°），' +
          '但那时高度角是 <strong>38–48 度</strong>，光是从头顶砸下来的硬顶光，' +
          '既不是「日落穿街」也不好看，而且正是全天人最多的时候。' +
          '另外常被张冠李戴的 <strong>Manhattanhenge 与这里毫无关系</strong>——' +
          '那是 Manhattan 街网偏转 29° 造成的、需要日落方位角 299° 的现象，' +
          '每年只在 <strong>5 月 28 日与 7 月 13 日</strong>前后出现，且发生在 Manhattan 的东西向横街上',
        '<strong>结论是日出，而且理由不止一条。</strong>' +
          '① <strong>人</strong>：多个当地摄影工作室的口径一致——<strong>07:00 之前你能正常工作，' +
          '07:00 之后就是在跟人群协商一块路面，周末上午可以排到一小时</strong>。' +
          '② <strong>光</strong>：日出方位 90.6°（9/25）到 104.1°（10/22），' +
          '太阳在镜头右侧近 90 度，是<strong>纯侧光</strong>，' +
          '正好擦亮街西侧那栋砖楼朝东的上半截立面与桥塔的钢构，' +
          '而街底保持在阴影里——<strong>这正是那些著名照片里的光</strong>' +
          '（要让阳光打到街底需要高度角超过约 48 度，只有正午前后才做得到）。' +
          '③ <strong>主体</strong>：Empire State Building 从这里看到的是它的南立面，' +
          '<strong>清晨太阳在东南方，南立面是正面受光的</strong>；傍晚虽然南立面也受光，' +
          '但角度更擦、加上一整天累积的雾霾，桥洞里那个小小的塔尖会明显发灰',
        '<strong>具体钟点</strong>：9/25 民用晨光 06:20 → 日出 06:47，' +
          '<strong>最佳区间 06:20–07:45</strong>（前 27 分钟拍桥体照明还亮着的蓝调版，之后拍侧光版）；' +
          '10/22 民用晨光 06:48 → 日出 07:15，<strong>最佳区间 06:48–08:15</strong>。' +
          '注意十月下旬日出已经到 07:15，<strong>工作日的通勤车流和上班人流已经起来了</strong>，' +
          '所以<strong>如果日期可选，九月底的清晨在这里明显好于十月下旬</strong>——这与本区秋色的建议正好相反',
        '<strong>DUMBO 这个名字是故意起丑的。</strong>' +
          '常见说法是 1978 年前后本地居民把「Down Under the Manhattan Bridge Overpass」' +
          '缩成 DUMBO，就是为了让这片仓库区听起来难听、把开发商挡在外面。' +
          '结果当然失败了。这片 19 世纪的砖砌与钢筋混凝土仓库群' +
          '<strong>2007 年被纽约市定为 DUMBO Historic District</strong>，' +
          '街上那些花岗岩石板（Belgian block）不是复古装饰，是当年运货马车压出来的原铺装——' +
          '<strong>也正因为如此，它凹凸不平、雨后积水，拍倒影极好，走路极容易崴脚</strong>'
      ],
      tour: [
        '<strong>先把预期放平：Washington Street 的那个「桥洞框着 Manhattan Bridge」的路口，本身只是一个路口。</strong>' +
          '它值得来，但值得停留的时间只有五到十分钟——看一眼、拍一张、走人。' +
          '真正撑得起半天的是它周边这几百米：<strong>DUMBO Historic District 的 19 世纪砖砌仓库街区</strong>' +
          '（2007 年划定，街上那些凹凸不平的花岗岩石板 Belgian block 是当年运货马车压出来的原铺装）、' +
          '北边两百米的 <strong>Brooklyn Bridge Park</strong>，以及仓库改成的 <strong>Empire Stores</strong>。' +
          '把 DUMBO 当街区逛，而不是当一个打卡点跑',
        '<strong>这个路口的安全与礼仪，请务必读完再去——这是全布鲁克林最容易出事的一个「景点」。</strong>' +
          '<strong>Washington Street 是一条正常通车的街道</strong>：没有封路、没有交通协管、' +
          '没有围栏也没有任何保护措施，而最经典的取景位恰恰在<strong>车道正中间</strong>。' +
          '人背对来车方向站在路面上看相机屏幕，车从身后开过来——这是这里唯一真正的危险。' +
          '正确做法：<strong>①</strong> 先走到人行道上把构图想好，再快速进车道、拍完立刻退出，不要在路中央磨；' +
          '<strong>②</strong> 同行的人里指定一个专职看车的，南北两头都要看；' +
          '<strong>③</strong> 听到引擎声先退到路缘石上，别指望司机等你；' +
          '<strong>④</strong> 独自前往的话，退到南边一个街口的 <strong>Washington × Front Street</strong>，' +
          '那里站在人行道上就能拍到同样的桥洞构图，完全不必进车道。' +
          '礼仪方面有两条本地不成文但普遍遵守的规矩：<strong>不要在路面上长时间占位</strong>' +
          '（任何一个合理钟点都有十几到几十人在排同一块石板，轮流是常态），' +
          '以及<strong>遇到有人在这里求婚就退开几分钟</strong>——这里是全纽约最热门的求婚点之一',
        '<strong>三样别错过，都在步行十分钟内，而且比那个路口更值得花时间：</strong>' +
          '①<strong>Jane\u2019s Carousel</strong>（Old Dock Street 与 Water Street 之间的滨水草坪上），' +
          '1922 年 Philadelphia Toboggan Company 造的旋转木马，Jane Walentas 亲手修复了 48 匹木马，' +
          '2011 年装进 Jean Nouvel 设计的玻璃亭里重新开转，<strong>单次 $4，成年人也能坐</strong>，' +
          '<strong>周一、周二闭馆</strong>；' +
          '②<strong>Time Out Market New York</strong>（Empire Stores 内，55 Water Street），' +
          '24,000 平方英尺的美食广场加五层屋顶平台，是这一带吃饭、上厕所与躲雨的首选；' +
          '③<strong>Empire Stores 顶层的免费屋顶花园</strong>——1870 年代的咖啡仓库改造，' +
          '上去不要钱，视野比地面高一层',
        '<strong>可以跳过的：</strong>街区里那些卖设计小物与手工冰淇淋的网红小店，价格是曼哈顿的水平而东西并无特别；' +
          'Brooklyn Bridge Park 南段的 Pier 5、Pier 6 运动设施（足球场、排球场、沙坑）是给本地居民用的，' +
          '对游客没有意义。' +
          '省下的时间请给 <strong>Brooklyn Bridge Park 北段的 Pebble Beach</strong>（走到水边卵石上，' +
          '正对 Brooklyn Bridge 与 Lower Manhattan）与 <strong>Pier 1 的 Granite Prospect 大台阶</strong>',
        '<strong>人流：清晨 07:00 之前街上通常只有个位数的人，09:00 之后属极度拥挤，' +
          '10:00–18:00 是全天高峰，周末最甚，同一个取景位可以排到一小时。</strong>' +
          '如果只想安静看一眼街区，请选<strong>工作日上午九点前</strong>。' +
          '街区治安良好、有大量居民与上班族，夜间也有人流，单独前往没有问题；' +
          '实际的麻烦只有两个：<strong>车</strong>，以及<strong>石板路凹凸不平、雨后积水</strong>——' +
          '请穿平底防滑鞋，穿高跟鞋在这条街上走是自找的',
        '<strong>餐饮与卫生间：</strong>Washington Street 本身清晨基本不开门，' +
          '吃早饭要走到 <strong>Front Street 或 Jay Street</strong> 一带（面包房与咖啡馆集中在这两条街）。' +
          '正餐首选 <strong>Time Out Market</strong>（有座位、有洗手间、雨天唯一的室内退路）；' +
          '想吃老字号披萨就去 <strong>Old Fulton Street</strong> 的 Grimaldi\u2019s 与 Juliana\u2019s' +
          '（两家紧邻、同源不同人，排队都不短）。' +
          '<strong>公厕：</strong>街区内几乎没有独立公厕，可靠的是 Time Out Market 与 Empire Stores 内的洗手间，' +
          '以及 Brooklyn Bridge Park 沿线七处园内公厕' +
          '（<strong>官方钟点 3–10 月 07:00–23:00、11–3 月 07:00–22:00</strong>），' +
          '其中离这里最近的是 Main Street 的 Education Center 与 Pier 1 Pavilion'
      ],
      photo: '城市人文 <strong>5/5</strong>，建筑 <strong>5/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>2/5</strong>。' +
        '给满分是因为它的不可替代性——全世界找不到第二条街的走向能把一座 1909 年的桥和一栋 1931 年的楼叠成这样。' +
        '但必须诚实地说清代价：<strong>这是一个「一帧照片」的点位，不是一个可以待两小时的点位</strong>，' +
          '五到十分钟就能拿完，剩下的时间价值都在旁边的 Brooklyn Bridge Park 里。' +
          '人像扣 0.5 分不是因为背景，而是因为你几乎不可能拿到一个没有旁人入画的机会窗口。' +
          '风光低分是实话：这里没有天空，也没有地平线。',
      shots: [
        {
          name: '经典站位：Washington × Water 路口以南约 20–30 米，街道正中',
          view: [40.703201, -73.989580],
          desc: '<strong>9/25 的 06:20–07:45 或 10/22 的 06:48–08:15，工作日优于周末，周二至周四最佳。</strong>' +
            '坐标为 OSM 的 Washington Street × Water Street 交叉节点；' +
            '<strong>实际站位在该节点以南约 20–30 米的车道正中（推算）</strong>，' +
            '判断方法是：<strong>移动到桥塔左右两侧的砖墙边缘与画幅左右边缘平行、桥塔居中的那一点</strong>，' +
            '石板路上通常能看到一块被踩得发亮的位置。' +
            '焦段：<strong>24–35mm</strong> 带上两侧完整砖墙与更多石板前景（画面更「街」）；' +
            '<strong>50–85mm</strong> 是最经典的一档，两栋砖楼刚好夹住桥塔、桥洞里的 Empire State Building 清晰可辨；' +
            '<strong>135–200mm</strong> 把帝国大厦压到显著大小，但两侧砖墙会被裁掉，失去「街道框」的意思。' +
            '构图：<strong>相机水平、传感器与街道轴线严格对齐</strong>，' +
            '任何 1–2 度的偏航都会让两侧砖墙的透视不对称、整帧「歪」得很明显；' +
            '压低到腰高可以增加石板前景的纵深。<strong>晴天才有帝国大厦</strong>，' +
            '阴天雾霾天桥洞里是一片灰白——但阴天的砖与钢反而更像这个街区本来的样子，值得单拍一版。'
        },
        {
          name: 'Washington × Front 路口（长焦压缩位，退到更南）',
          view: [40.702523, -73.989627],
          desc: '同样时段。<strong>往南退到 Front Street 路口，桥塔距离拉到 234 米、方位 341.7°</strong>，' +
            '而 Empire State Building 的方位 3.7° 与街道轴线 3.0° 在这里差得最小——' +
            '<strong>这是「帝国大厦最居中」的那个位置</strong>。' +
            '代价是两侧砖墙的夹角变小、框住桥塔的效果减弱。' +
            '用 <strong>85–200mm</strong> 从这里往北拍，可以做出<strong>三层压缩</strong>：' +
            '近处石板路面 → 中景桥塔与两侧砖墙 → 远处 5.1 公里外的帝国大厦。' +
            '这个机位人少很多，而且<strong>站在路口的人行道上就能拍，不必站到车道里</strong>，' +
            '是想避开安全风险时的首选替代。'
        },
        {
          name: 'Water Street × Main Street 路口（侧向机位，看桥体本身）',
          view: [40.703276, -73.991247],
          desc: '<strong>清晨 07:00–08:30 或黄昏 17:15–18:00。</strong>' +
            '往西走两个路口换叙事：这里不再拍「街框桥」，而是从侧面拍' +
            '<strong>Manhattan Bridge 的蓝色钢桁架从砖仓库屋顶上斜切过去</strong>。' +
            '傍晚在这里反而比在 Washington Street 上更有价值——日落方位 256–269° 在西侧，' +
            '<strong>桥的钢构会被侧后方的暖光镶出边缘光</strong>。' +
            '<strong>35–85mm</strong> 拍桥与仓库的体量对比；<strong>16–24mm</strong> 贴到桥体正下方仰拍钢梁的重复格架。' +
            '往北 200 米就是 Brooklyn Bridge Park 的 Main Street 入口与 Pebble Beach，' +
            '<strong>这是把 DUMBO 和公园串起来的最短路径</strong>。'
        }
      ],
      access: {
        visit: '<strong>那个路口本身 5–10 分钟；把 DUMBO 街区逛完 45–60 分钟；' +
          '连着北边的 Brooklyn Bridge Park 一起走则要 2.5–3.5 小时。</strong>' +
          '分配：Washington × Water 路口 10 分钟 + 沿 Washington／Water／Front 三条街看砖仓库与石板路 20 分钟 ' +
          '+ Empire Stores 与屋顶花园 15 分钟 + Jane\u2019s Carousel 15 分钟（含排队与坐一圈）' +
          '+ Pebble Beach 20 分钟。' +
          '<strong>在 Time Out Market 吃一顿另加 60–90 分钟。</strong>' +
          '这是一条公共街道，没有官方建议时长，以上按街区尺度（三条街、南北 400 米）与步行时间推算',
        book: '不需预约',
        ticket: '<strong>免费</strong>——这是一条公共街道，没有门禁也没有营业时间。' +
          '街区内唯一要花钱的固定项目是 Jane\u2019s Carousel（单次 <strong>$4</strong>）。' +
          '<strong>2026 年 9 月 14 日复核</strong>',
        hours: '<strong>街道 24 小时开放、全年无休，没有门禁。</strong>' +
          '实际可用窗口由人流决定，不由时间决定：' +
          '<strong>日出前到 07:00 街上通常只有个位数的人、经常完全空无一人；' +
          '09:00 之后属「极度拥挤」；10:00–18:00 全天高峰，周末尤甚，' +
          '同一个取景位会有一条明显的排队队列，周末可以排一小时</strong>。' +
          '<strong>周一至周四的清晨与周末清晨也有明显差别</strong>，周末即使在日出时也已经有人。' +
          '<strong>周边配套的钟点（2026 年 9 月 14 日逐项复核）：' +
          'Jane\u2019s Carousel 秋季表「September 14, 2026 to December 31, 2026 / Closed Monday and Tuesday / ' +
          '11:00 AM–5:50 PM」，即周一周二闭馆、周三至周日 11:00–17:50；' +
          'Time Out Market New York 周一至周四与周日 08:00–22:00、周五周六 08:00–23:00；' +
          'Brooklyn Bridge Park 每日 06:00–01:00，园内公厕 3–10 月 07:00–23:00、11–3 月 07:00–22:00。</strong>' +
          '<strong>关于走 Brooklyn Bridge 过来的人最该知道的一条（本项目的遗留待查项，2026 年 9 月 14 日已复核）：' +
          'NYC DOT 的 Brooklyn Bridge 桥塔与引桥拱券大修（Contract 7）对步行道没有封闭影响。</strong>' +
          'DOT 官方项目页在 Impacts 栏的原文是' +
          '「The bridge promenade will be open at all times, although portions of the walkway may be narrowed at times」' +
          '（步行道全时段开放，个别路段可能临时收窄），' +
          '同页把该合同的工期写为「began in September 2019 and will continue until 2023」' +
          '——<strong>也就是说桥塔大修按官方页面口径已过工期，且从头到尾都没有要求关闭步行道。</strong>' +
          '<strong>需要注意的是另一件事：DOT 的每周交通公告里写明，' +
          '自 2026 年 8 月 31 日起桥上自行车道与去曼哈顿方向的左车道于每晚 21:00 至次日 05:00 封闭施工，' +
          '预计 2026 年 9 月 18 日完工，期间自行车被导流到步行道上、步行道变成人车混行的 shared path。</strong>' +
          '白天的步行道不受影响；夜里走桥的话请预期身边有自行车流。' +
          '<strong>由于类似的短期夜间施工会反复出现，出发当天请查 nyc.gov 的 DOT Weekly Traffic Advisory 页确认最新状态。</strong>' +
          '另外提醒一句常见混淆：<strong>Brooklyn Bridge 的桥上木板步道与 Brooklyn Heights Promenade 是两回事</strong>，' +
          '前者入口在 Tillary Street／Adams Street 一带',
        parking: '<strong>不要在 DUMBO 开车找车位，这件事在周末是必输的。</strong>' +
          '街区内路边表位少、多为限时 2 小时，商业停车楼按 Manhattan 价格计。' +
          '地铁：<strong>F 线 York Street 站是最近的，出站步行约 4 分钟</strong>；' +
          '<strong>A／C 线 High Street–Brooklyn Bridge 站</strong>步行约 8 分钟。' +
          '另有 <strong>NYC Ferry 的 DUMBO／Fulton Ferry 码头</strong>' +
          '（OSM 节点 40.703734, -73.995836），步行 10 分钟，' +
          '而且从 Manhattan 的 Wall St／Pier 11 与 Long Island City 都有直达船',
        walk: 'York Street 站到经典站位约 <strong>300 米／4 分钟</strong>，全程平路但' +
          '<strong>最后一段是 Belgian block 花岗岩石板，凹凸明显</strong>；' +
          '经典站位到 Pebble Beach 约 350 米／5 分钟；到 Brooklyn Bridge Park 的 Main Street 入口约 250 米／3 分钟'
      },
      notes: [
        '<strong>这是一条有车通行的活街道，没有封路、没有交通协管、没有任何保护措施。</strong>' +
          '人站在车道正中拍照、车从后面开过来，这是这里唯一真正的风险。' +
          '不必紧张但必须处理：<strong>①</strong> 提前构好图、上脚架前先看清南北两头；' +
          '<strong>②</strong> 让同伴专职看车；<strong>③</strong> 听到引擎声先退到人行道再回位；' +
          '<strong>④</strong> 如果只有你自己，用第二个机位（Front Street 路口）从人行道上拍，' +
          '牺牲一点框住效果换掉全部风险',
        '<strong>石板路面凹凸不平且雨后积水</strong>。请穿平底防滑鞋；' +
          '三脚架三只脚很容易一只落在缝里导致水平跑掉，架好后务必复查气泡',
        '<strong>不要指望「拍到空街」。</strong>诚实地说：本窗口内的任何一个合理钟点，' +
          '你都会和几十个人共用这几平方米。真正能拿到空街的只有' +
          '<strong>工作日日出前那 20–30 分钟，且不是周末</strong>。' +
          '退而求其次的做法是<strong>连拍 20–40 张后期做多帧去人</strong>，' +
          '或者干脆把人当成尺度参照拍进去——街上一个背影往往比空街更好看',
        '这里是<strong>纽约最热门的求婚点之一</strong>，也常有商业与网红团队占位。' +
          '看到有人在拍求婚请礼让几分钟，这是这条街上不成文但普遍遵守的规矩',
        '<strong>Washington Street 上的餐饮清晨基本不开门</strong>，' +
          '想拍完日出吃早饭要走到 Front Street 或 Jay Street 一带',
        '<strong>下雨反而是加分项</strong>：湿石板会把桥塔和砖墙的倒影铺满前景，' +
          '而且人会少一大半。带一块吸水布擦镜头前玻璃，别擦镜片'
      ],
      images: [
        { url: 'img/manhattan-bridge-from-washington-street-dumbo-brooklyn-new-y-8469bb7e.jpg',
          cap: '自 Washington Street 拍 Manhattan Bridge 经典竖幅 · Christian David / CC BY-SA 4.0' },
        { url: 'img/empire-state-building-through-the-manhattan-bridge-arch-dumb-00a98c6f.jpg',
          cap: '桥洞中的 Empire State Building 长焦特写 · Christian David / CC BY-SA 4.0' },
        { url: 'img/manhattan-bridge-view-from-washington-street-dumbo-brooklyn--d26a166e.jpg',
          cap: '清晨侧光下的砖墙与桥塔 · Eugene Krasnaok / CC BY 4.0' }
      ]
    },
    {
      id: 'brooklyn-heights-promenade',
      n: 4,
      name: 'Brooklyn Heights Promenade 悬臂步道',
      en: 'Brooklyn Heights Promenade (The Esplanade)',
      must: 4,
      score: 4.5,
      tldr: '2026 年秋全线开放（BQE 大修 2030 年才动工）；视线朝西北 322°，日落是侧光不是逆光，所以傍晚反而好用。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '24 小时开放', c: 'free' },
        { t: '2026 年无封闭', c: 'free' },
        { t: '栏杆有震动', c: 'risk' }
      ],
      highlights: [
        '<strong>这里最值钱的一条信息是几何，不是历史。</strong>' +
          '很多攻略把这里和 Brooklyn Bridge Park 一起写成「都朝西、日落逆光」——' +
          '<strong>这个说法不成立</strong>。实测方位：从 promenade 中段看 ' +
          '<strong>One World Trade Center 是 321.7°、2,177 米</strong>（塔尖仰角 14.0°），' +
          '看 <strong>Brooklyn Bridge 的布鲁克林侧桥塔是 349.9°、769 米</strong>。' +
          '也就是说<strong>天际线在西北偏北，不在正西</strong>。' +
          '而本窗口的日落方位是 269°→256°，<strong>比天际线偏左 52 到 66 度</strong>——' +
          '<strong>太阳落在 Upper New York Bay 的方向（Staten Island／Bayonne 一侧），根本不在天际线后面。</strong>' +
          '结果是：<strong>Lower Manhattan 在日落时得到的是西南方向的侧光，楼群的南立面被暖光擦亮，' +
          '而不是变成一团剪影</strong>。这与 Pebble Beach 的情况完全相反，也是本条目推荐傍晚的全部依据',
        '<strong>所以这两个点的建议是分开的，别混着用</strong>：' +
          '<strong>Brooklyn Bridge Park 的 Pebble Beach 选清晨</strong>' +
          '（那里天际线在 296°，正撞日落方位，傍晚只能拿剪影）；' +
          '<strong>Brooklyn Heights Promenade 选傍晚加蓝调</strong>' +
          '（这里天际线在 322°，日落偏出画面之外，得到侧光加办公楼灯光）。' +
          '清晨来 promenade 也不错——太阳在你正后方，天际线是完全正面受光的、玻璃幕墙全亮，' +
          '而且步道上几乎没人——但那种光平、缺立体感，属「资料照」而非「作品照」',
        '<strong>它本身就是一条高速公路的顶盖，这件事对拍摄有实际影响。</strong>' +
          '1943 年 Columbia Heights 的居民请求把被 BQE 切掉的后花园盖回来，' +
          'Robert Moses 表面同意，实际上 Andrews & Clark 已经画好了把顶盖做成' +
          '<strong>公共步道</strong>而非私人花园的方案。' +
          '1946 年秋开始拆 Furman Street 东侧的 19 世纪砖仓库，' +
          '<strong>南半段 1950 年 10 月 7 日开放、北半段 1951 年 12 月 7 日开放</strong>，' +
          '高速自己要到 1954 年才通车。' +
          '全长 <strong>1,826 英尺（557 米）</strong>、横跨八个街区，' +
          '下面是两层各三车道。<strong>产权归 NYC DOT 而不是 NYC Parks</strong>' +
          '（因为它法律上是「建在道路上的构筑物」而非公园），但日常养护由 Parks 负责',
        '<strong>2026 年的状态是明确的：全线开放，无封闭。</strong>' +
          '2026 年 8 月 24 日公布的 40 亿美元 BQE Central 方案' +
          '（Atlantic Avenue 至 Sands Street，含 promenade 底下 0.4 英里的三重悬臂）' +
          '<strong>2030 年才破土、2032 年车流转临时高架、2040 年完工</strong>；' +
          '2026 年秋只走到环评阶段（9 月发 scoping notice，' +
          'DOT 页面列出 <strong>10 月 6 日与 10 月 22 日</strong>两场同内容的 CEQR 公众会，11 月还有正式范围界定会）。' +
          '施工期间确实会分段封闭步道，DOT 承诺「任何时候至少保留一段开放」，但那是 2030 年代的事',
        '视野里能同时点出来的东西很多：<strong>Brooklyn Bridge、Lower Manhattan 天际线、' +
          'Governors Island、Statue of Liberty、Ellis Island、New York Harbor 的船流</strong>。' +
          '南端接 Adam Yauch Park（以 Beastie Boys 成员命名）、' +
          '北端接 Fort Stirling Park、Harry Chapin Park 与 Fruit Street Sitting Area，' +
          '再往北就是通往 Brooklyn Bridge Park Pier 1 的 Squibb Park Bridge。' +
          'promenade 是 <strong>Brooklyn Heights National Historic Landmark District</strong> 的构成要素'
      ],
      tour: [
        '<strong>这是一条 557 米（1,826 英尺）的直线步道，从头走到尾 7–8 分钟，全程平坦无台阶、可轮椅通行。</strong>' +
          '它没有「入口」也没有门票，八个街区各有一条横街可以接上来。' +
          '<strong>最省事的走法：2／3 线 Clark Street 站出来往西走五分钟接上北段 → 从北往南走完 → ' +
          '南端 Remsen Street 下坡 700 米进 Brooklyn Bridge Park 的 Pier 6。</strong>' +
          '反过来从公园往上走也行，只是要爬坡。' +
          '如果想从北端直接下到 Brooklyn Bridge Park 的 Pier 1，走 <strong>Squibb Park Bridge</strong>，' +
          '<strong>但它有开放时间（08:00–22:00），这个窗口之外必须绕路</strong>',
        '<strong>视野里能一次点出来的东西（从北到南依次出现）：</strong>' +
          'Brooklyn Bridge 的布鲁克林侧桥塔（北段离它只有 769 米，是全条步道桥占比最大的一段）、' +
          'Lower Manhattan 的整条天际线与 One World Trade Center、' +
          '<strong>Governors Island</strong>、<strong>Statue of Liberty 与 Ellis Island</strong>' +
          '（南段最清楚，约 4 公里外，肉眼是个小尖影，带望远镜或长焦会好很多）、' +
          '以及 New York Harbor 里往来的驳船与渡轮。' +
          '<strong>这是全纽约不花钱、不排队、不用上楼就能一次看全「桥 + 天际线 + 自由女神」的地方</strong>，' +
          '也是它虽然只是一条步道却值得专程来的全部理由',
        '<strong>别只走步道——东侧那几条街才是 Brooklyn Heights 的本体。</strong>' +
          '这一带是<strong>纽约市 1965 年划定的第一个历史街区</strong>，' +
          '19 世纪的褐石与联邦式住宅几乎原样保留。' +
          '<strong>值得多花二十分钟的三条街</strong>：' +
          '<strong>Willow Street</strong>（最漂亮的一段，70 号是 Truman Capote 1955–1965 年租住并写出' +
          '《Breakfast at Tiffany\u2019s》与《In Cold Blood》的那栋黄色联邦式住宅，' +
          '108–112 号是三栋 1880 年代的木构 Queen Anne）、' +
          '<strong>Middagh Street 与 Cranberry Street</strong>（街区里最老的一批木屋，' +
          'Middagh 24 号是 1820 年代的）、' +
          '以及<strong>Montague Street</strong>（本街区的商业主街，吃饭、咖啡、药店、ATM 都在这条街上）',
        '<strong>可以跳过的：</strong>步道中段那几段除了长椅什么都没有的路面（视野与两头基本一样）、' +
          '以及南北两端外接的几个小型社区公园（Adam Yauch Park、Harry Chapin Park、Fort Stirling Park）——' +
          '它们是给本地居民与小孩用的。' +
          '<strong>省下的时间给 Willow Street 与 Montague Street</strong>，' +
          '或者直接下到 Brooklyn Bridge Park',
        '<strong>人流与安全：这里是居民的日常步道，不是景区，请按这个前提行动。</strong>' +
          '东侧紧贴 Columbia Heights 的住宅后院（那些后院至今保留着 1940 年代改造时留下的上层花园），' +
          '清晨与傍晚有大量遛狗、跑步、推婴儿车的居民。' +
          '<strong>请压低音量、不要横排堵路、不要把镜头对着人家的后院与窗户。</strong>' +
          '治安属纽约市最好的一档，24 小时开放且入夜后仍有居民往来，单独前往没有问题。' +
          '人最多的时段是<strong>周末 14:00–日落</strong>，长椅会被坐满；' +
          '<strong>清晨与工作日上午几乎没人</strong>。' +
          '唯一的物理不适是<strong>下面两层各三车道的 BQE 车流噪音与栏杆的低频震动</strong>——' +
          '这里始终有一层持续的高速公路底噪，不是一个安静的地方',
        '<strong>餐饮与卫生间，这条必须提前安排：步道全长 557 米沿线没有任何餐饮摊位，也没有公厕。</strong>' +
          '<strong>最近的一条商业街是 Montague Street</strong>' +
          '（从步道中段的 Montague Street 出口往东走两分钟就是），' +
          '咖啡馆、餐厅、便利店集中在 Hicks Street 到 Court Street 这几个街口之间，' +
          '要用洗手间请在这里消费一次。' +
          '<strong>另一个可靠的公厕是 Brooklyn Bridge Park 的 Pier 1 Pavilion</strong>' +
          '（<strong>3–10 月 07:00–23:00、11–3 月 07:00–22:00</strong>），' +
          '从北段经 Squibb Park Bridge 下去约 5 分钟，但要在 22:00 之前。' +
          '<strong>带小孩或老人来请把这件事排在前面——步道上临时找不到厕所。</strong>'
      ],
      photo: '城市天际线 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>，建筑 <strong>3.5/5</strong>。' +
        '一条 557 米的直线步道，机位选择其实只有「北中南」三档，所以变化不如 Brooklyn Bridge Park 丰富。' +
        '加分在两点：<strong>视线抬高约 10 米</strong>，前景没有任何栈道或围栏遮挡；' +
        '以及那排铸铁长椅与栏杆本身是极好的人像道具。' +
        '扣分主因是<strong>下面的车流会持续给栏杆传低频震动</strong>，这对长曝光是实打实的技术问题。',
      shots: [
        {
          name: '中段（Montague Street 出口一带）——正对 Lower Manhattan',
          view: [40.697371, -73.997389],
          desc: '<strong>昏金光 17:30–18:06 加蓝调 18:06–18:34（10/22）；9/25 对应 18:10–18:48 与 18:48–19:16。</strong>' +
            'One WTC 在此方位 321.7°、2,177 米、塔尖仰角 14.0°，' +
            '<strong>24–50mm</strong> 就能把整条 Lower Manhattan 装下。' +
            '日落方位 256–269° 在画面左侧 52–66 度之外，' +
            '<strong>所以不必与逆光搏斗——直接对天际线测光，楼群南立面会有干净的暖侧光</strong>。' +
            '构图用铸铁栏杆的水平线压住画面下缘，或退两步把长椅的曲线扶手当前景。' +
            '<strong>135–300mm</strong> 单独压缩楼群做「墙」，前景纳入一两条驳船。' +
            '<strong>需三脚架但务必关防抖、收中柱、挂重物，并用延时或快门线</strong>——' +
            '下面两层车流的震动会通过铺装传上来。'
        },
        {
          name: '北段（Clark Street 与 Orange Street 出口之间）——桥为主体',
          view: [40.699280, -73.996468],
          desc: '<strong>清晨 06:50–08:15</strong>（桥的石塔正面受光、步道上几乎没人）' +
            '或<strong>蓝调 18:10–18:35</strong>（桥体照明与天空平衡）。' +
            'Brooklyn Bridge 的布鲁克林侧桥塔在此方位 349.9°、仅 769 米，' +
            '<strong>是全条步道离桥最近、桥占比最大的一段</strong>。' +
            '<strong>35–85mm</strong> 让桥塔与其后的 Manhattan 楼群叠成两层；' +
            '<strong>16–35mm</strong> 把步道的透视线一直引到桥下。' +
            '<strong>坐标为 OSM 的 promenade 北段步道节点。</strong>' +
            '再往北 300 米可接 Squibb Park Bridge 下到 Pier 1（出发前查 BBP 的 Park Alerts 确认桥是否开放）。'
        },
        {
          name: '南段（Remsen Street 端）——港口、Governors Island 与自由女神',
          view: [40.695630, -73.998325],
          desc: '<strong>日落 17:45–18:06（10/22）是这里的专属时段</strong>，' +
            '因为<strong>南段是全条步道唯一能把太阳本身放进画面的位置</strong>——' +
            '日落方位 256° 从这里看是偏南的开阔海面方向，没有建筑遮挡。' +
            '<strong>24–70mm</strong> 拍「太阳落海 + 右侧远处天际线」的宽幅；' +
            '<strong>200–400mm</strong> 压缩 Statue of Liberty（约 4 公里外）与经过的驳船，' +
            '在低角度暖光里剪影效果最好。' +
            '这一段人也比中段少。坐标为 OSM 标注的 promenade 观景点节点。'
        }
      ],
      access: {
        visit: '<strong>只走步道 20–30 分钟；把 Brooklyn Heights 的历史街区一起逛 1.5–2 小时。</strong>' +
          '分配：步道从北端走到南端 8 分钟 + 在中段与南段各停下来看一次视野 15 分钟 ' +
          '+ Willow Street 与 Middagh／Cranberry Street 的褐石住宅街 25 分钟 ' +
          '+ Montague Street 吃点东西或喝杯咖啡 30 分钟。' +
          '<strong>只想看一眼天际线与自由女神，15 分钟足够</strong>；' +
          '想坐在长椅上等傍晚对岸写字楼亮灯（17:30–18:00 之间陆续亮），再加 40–60 分钟。' +
          '<strong>接着往南下到 Brooklyn Bridge Park 的话，请另留 2 小时以上。</strong>' +
          '官方没有给建议时长，以上按 557 米步道长度与历史街区的步行范围推算',
        book: '不需预约',
        ticket: '<strong>免费</strong>，没有门禁也没有售票处（2026 年 9 月 14 日复核）',
        hours: '<strong>24 小时开放，全年无休。</strong>它法律上不是公园而是「建在道路上的构筑物」' +
          '（产权属 NYC DOT，日常养护由 NYC Parks 负责），' +
          '因此不适用市属公园的 06:00–01:00 关门规定。' +
          '<strong>2026 年 9 月 14 日复核，本步道无任何封闭，1,826 英尺（557 米）全长可走。</strong>' +
          '<strong>关于「promenade 要封六年」这个流传很广的说法，请按下面的官方口径更新认知：</strong>' +
          '那批说法来自 2018–2019 年的旧方案，已经作废。' +
          '<strong>现行方案是 2026 年 8 月 24 日由市长 Mamdani 与 NYC DOT 局长 Michael Flynn 公布的' +
          '约 40 亿美元 BQE Central 大修</strong>（Atlantic Avenue 至 Sands Street 的市属路段，' +
          '含 promenade 底下那段三重悬臂）。' +
          '<strong>市府新闻稿里有一句对本条目最关键的原话：' +
          'DOT 计划在 promenade 下方的 Furman Street 上方搭一座临时的两层高架便道，' +
          '「This bypass will be no higher than the existing Queens-bound highway and will not block the promenade」' +
          '（便道不会高于现有的往皇后区方向车道，也不会遮挡 promenade）</strong>，' +
          '新闻稿同时把「保留通往 Brooklyn Heights Promenade 与 Brooklyn Bridge Park 的通道」写成了方案目标之一。' +
          '时间表：<strong>2026 年秋启动 CEQR 环评程序（含公众范围界定会）、环评报告预计 2028 年夏完成、' +
          '2030 年破土、2032 年车流转到临时高架、2040 年完工</strong>。' +
          '施工期确实会分段封闭步道，DOT 承诺「任何时候至少保留一段开放」——但那是 2030 年代的事。' +
          '<strong>换句话说：今后几年来都可以正常走，真正要查封闭状态是 2030 年以后的读者的事。' +
          '出发前请在 nyc.gov/bqe 看一眼项目进度。</strong>' +
          '相邻的 Pierrepont Playground 等游乐场按 NYC Parks 规则「日出至日落」；' +
          '<strong>连通北端与 Brooklyn Bridge Park 的 Squibb Park &amp; Bridge 钟点为 08:00–22:00</strong>',
        parking: '<strong>Brooklyn Heights 是历史街区加高密度住宅，路边停车几乎无解</strong>：' +
          '限时表位少、居民车位优先、周末满位。' +
          '地铁是唯一合理选择：<strong>2／3 线 Clark Street 站最近</strong>' +
          '（站厅在 Hotel St. George 楼里，靠电梯上下，出站步行约 5 分钟即到北段）；' +
          '<strong>R 线 Court Street 站</strong>与<strong>4／5 线 Borough Hall 站</strong>步行 8–10 分钟；' +
          '<strong>A／C 线 High Street 站</strong>可从北端接入',
        walk: 'Clark Street 站到北段机位约 <strong>400 米／5 分钟</strong>；' +
          '<strong>步道全长 557 米，从北端走到南端 7–8 分钟</strong>，全程平坦无障碍、无台阶；' +
          '南端 Remsen Street 到 Brooklyn Bridge Park Pier 6 约 700 米／9 分钟（有下坡）'
      },
      notes: [
        '<strong>栏杆与铺装有来自下方车流的持续低频震动</strong>，这是这里唯一的技术性障碍。' +
          '长曝光务必：关机身与镜头防抖、收起中柱把重心压到最低、挂配重、' +
          '用 2 秒延时或快门线、并且<strong>不要把三脚架的脚顶在栏杆或长椅上</strong>',
        '<strong>三脚架合法</strong>：这里由 NYC Parks 养护，' +
          'NYC Parks 明文规定只用手持相机或三脚架、不占独占空间、不用道具、不申请停车即无需许可。' +
          '但步道宽度有限且是社区通行道，请靠栏杆一侧架、别横在路中',
        '<strong>这是居民的日常步道，不是景区。</strong>' +
          '东侧紧贴 Columbia Heights 的住宅后院（那些后院至今保留着原来的「上层花园」），' +
          '清晨与傍晚有大量遛狗、跑步、推婴儿车的居民。请压低音量、别堵路',
        '<strong>此处不是 Brooklyn Bridge 的桥上步道，两者常被搞混。</strong>' +
          '想走桥上那条木板步道要另去 Brooklyn Bridge 的入口（Tillary St／Adams St 一带），' +
          '和 promenade 是两回事',
        '<strong>Squibb Park Bridge 的状态请当天核实</strong>。这座连通 promenade 北端与 Pier 1 的步行桥' +
          '曾因结构弹跳问题长期封闭并经过重建，' +
          '如果你打算靠它下到 Brooklyn Bridge Park，出发前查 brooklynbridgepark.org 的 Park Alerts 页',
        '<strong>2026 年 10 月 6 日与 10 月 22 日两场 BQE 的 CEQR 公众会</strong>可能带来临时的勘测车辆、' +
          '临时围挡或本地媒体聚集。不影响拍摄，但如果你正好在那两天来、又要拍空景，' +
          '把时间放在清晨最保险'
      ],
      images: [
        { url: 'img/brooklyn-heights-promenade-view-be88e6b5.jpg',
          cap: '自步道望 Lower Manhattan 全景 · Kidfly182 / CC BY 4.0' },
        { url: 'img/brooklyn-heights-promenade-ny1-5206422b.jpg',
          cap: '悬臂步道本体与铸铁栏杆 · Acroterion / CC BY-SA 4.0' },
        { url: 'img/brooklyn-heights-promenade-01-9423355002-39af070d.jpg',
          cap: '步道北段与 Brooklyn Bridge · Joe Mabel / CC BY-SA 3.0' }
      ]
    },
    {
      id: 'brooklyn-botanic-garden',
      n: 6,
      name: 'Brooklyn Botanic Garden 布鲁克林植物园',
      en: 'Brooklyn Botanic Garden · Japanese Hill-and-Pond Garden',
      must: 3.5,
      score: 4,
      tldr: '$22、周一闭馆、18:00 关门；主角 Japanese Garden 恰恰禁三脚架，秋色要等 10 月 20 日后。',
      tags: [
        { t: '成人 $22', c: 'paid' },
        { t: '周一闭馆', c: 'risk' },
        { t: '日式庭园禁三脚架', c: 'risk' },
        { t: '10/24 需专门票', c: 'risk' }
      ],
      highlights: [
        '<strong>Japanese Hill-and-Pond Garden 是这 52 英亩里唯一不可替代的东西。</strong>' +
          '它由日本景观师 <strong>Takeo Shiota 设计、1915 年向公众开放</strong>，' +
          '被广泛认定为<strong>美国公共植物园中建成的第一座日本庭园</strong>。' +
          '池中立朱红鸟居、岸上有神社、山坡上是各品种的鸡爪枫与其栽培变种，' +
          '秋色峰值时园方自己的描述是「橙、红、黄、紫的层次无可比拟」。' +
          '<strong>但这里就是全园唯一明文禁止三脚架的区域之一</strong>——见下面的 notes',
        '<strong>秋色时间必须按本区的总口径来算，不能按「十月就有」来算。</strong>' +
          '园方 Fall Highlights 页面写的是「Spectacular autumn hues start to appear in October」——' +
          '注意是 <strong>start to appear</strong>。' +
          '结合 Kings County 2026 年预报峰值 10 月 21 日，' +
          '<strong>实用判断是：10 月 15 日之前来，Japanese Garden 的枫还基本是绿的；' +
          '10 月 20 日之后才是真的；10 月 22 日刚好踩在预报峰值上。</strong>' +
          '<strong>植物园本身不提供实时秋色追踪器</strong>，只有静态的 Fall Highlights 页面' +
          '与一份 What\u2019s in Bloom 植物清单——想要实时口径请去看 ' +
          'New York Botanical Garden（Bronx）的分早中晚期树种清单，那是纽约市范围内最靠得住的',
        '除了日式庭园，秋天真正有货的还有三处，都是园方点名的：' +
          '<strong>Cherry Esplanade 两侧成排的 scarlet oak（深红栎）</strong>，' +
          '东南角一小片黄叶银杏；<strong>Oak Circle 东侧那棵园里最老的连香树（katsura）</strong>——' +
          '它的叶色是<strong>分带渐变的</strong>，从黄到橙再到粉红与红，' +
          '而且<strong>落叶会散出棉花糖一样的甜味</strong>，这是个很少有人写但现场极明显的细节；' +
          '以及 <strong>Shelby White and Leon Levy Water Garden</strong> 里转成亮橙红的黑檀（black tupelo）。' +
          'Native Flora Garden 与 Discovery Garden 也有枫与漆树',
        '<strong>时间上有一个硬约束，会直接决定你能不能拍到好光。</strong>' +
          '<strong>10 月的开放时间是每天 10:00–18:00（周一闭馆）</strong>，' +
          '而<strong>末次入园是闭园前 30 分钟、专类园（含 Japanese Garden）在闭园前 30 分钟开始清园</strong>。' +
          '10/22 的日落是 18:06、太阳降到 6° 高度角是 17:28——' +
          '<strong>也就是说昏金光的头半小时（17:00–17:30）落在开放时间内，但 Japanese Garden 17:30 就要开始清人</strong>。' +
          '<strong>正确做法：16:40 之前进到日式庭园，把最好的二十分钟留在这里，然后再去别处。</strong>' +
          '想拍日落与蓝调的话，这个园区做不到，请把那部分预算给 Prospect Park（开到 01:00）',
        '<strong>2026 年 10 月有两个日历陷阱，都必须提前避开。</strong>' +
          '<strong>①10 月 24 日（周六）全天为 Fall Harvest Festival，需专门票，当天不售普通门票</strong>——' +
          '如果你的秋色日期恰好是 10 月 24 日，这一站就没法按常规访问。' +
          '<strong>②10 月 12 日（Indigenous Peoples\u2019 Day）是周一但照常开放 10:00–18:00</strong>，' +
          '这是十月里唯一一个开门的周一。另外' +
          '<strong>150 Eastern Parkway 入口目前临时关闭</strong>，只能走 455 Flatbush Avenue 或 990 Washington Avenue'
      ],
      tour: [
        '<strong>52 英亩，主路铺装、可轮椅通行，一条线走完不走回头路。</strong>' +
          '推荐顺序（从 455 Flatbush Avenue 入口进）：' +
          '<strong>Japanese Hill-and-Pond Garden（先去，它是主角，也是最会挤的地方）→ ' +
          'Cherry Esplanade 大草坪 → Steinhardt Conservatory 温室（含 C.V. Starr Bonsai Museum）→ ' +
          'Lily Pool Terrace 睡莲池 → Rock Garden → Cranford Rose Garden</strong>，' +
          '出 990 Washington Avenue 门正好接 Brooklyn Museum。' +
          '<strong>从 990 Washington Avenue 进就把上面的顺序倒过来走。</strong>' +
          '全程 2–2.5 公里',
        '<strong>四样别错过：</strong>' +
          '①<strong>Japanese Hill-and-Pond Garden</strong>——日本景观师 Takeo Shiota 设计、' +
          '1915 年开放，被广泛认定为<strong>美国公共植物园里建成的第一座日本庭园</strong>；' +
          '池中立朱红鸟居、岸上有神社、山坡上是各品种鸡爪枫，<strong>只有一条环池小径，二十分钟能走完</strong>；' +
          '②<strong>C.V. Starr Bonsai Museum</strong>（在 Steinhardt Conservatory 里）——' +
          '<strong>收藏 400 余株盆栽、是日本以外最大的公开盆栽收藏之一</strong>，' +
          '同时展出约 30 株并随季节换展，<strong>不少树龄超过一百年、还种在原来的盆里</strong>，' +
          '这是很多人漏掉但最值得进室内的二十分钟；' +
          '③<strong>Cherry Esplanade</strong>——一条南北向的宽草坪，两侧成排 scarlet oak（深红栎），' +
          '四月是全美最出名的赏樱地之一，十月是全园最饱和的深红；' +
          '④<strong>Oak Circle 东侧那棵园里最老的连香树（katsura）</strong>——' +
          '叶色是分带渐变的（黄→橙→粉红→红），而且<strong>落叶会散出棉花糖一样的甜味</strong>，' +
          '现场极明显，几乎没有攻略写它',
        '<strong>可以跳过的：</strong>Discovery Garden（儿童自然教育区，没带小孩就不必去）、' +
          'Plant Family Collection 的分科展示区（学术性强、观赏性弱）、' +
          'Osborne Garden 的意式广场（除紫藤花期外只是一块空地）、' +
          '以及 Terrain 礼品店（Anthropologie 旗下，东西好看但价格与逛园无关）。' +
          '<strong>省下的时间全部给日式庭园与盆栽馆</strong>——' +
          '这两处是这 $22 里真正买不到替代品的部分',
        '<strong>这里最容易踩的坑是清园规则，请照这个倒推时间：' +
          '末次入园是闭园前 30 分钟，而专类园（含 Japanese Hill-and-Pond Garden 与 Steinhardt Conservatory）' +
          '也从闭园前 30 分钟开始清人。</strong>' +
          '换句话说<strong>按闭园钟点减 35 分钟，是你最晚必须已经站在日式庭园里的时刻</strong>；' +
          '如果那天 18:00 闭园，就是 17:25。' +
          '<strong>人最少的时段是周中上午开园后那一小时</strong>（园方自己也这么建议）；' +
          '樱花季的周末、Sakura Matsuri 与秋色峰值的周末是全年最挤的时候，' +
          '日式庭园的环池小径很窄，届时会变成单向排队前进',
        '<strong>餐饮与卫生间（官方 FAQ 口径，2026 年 9 月 14 日复核）：</strong>' +
          '<strong>洗手间六处——Steinberg Visitor Center、Flatbush Avenue 入口、Magnolia Plaza、' +
          'Steinhardt Conservatory 内、Yellow Magnolia Café 门外、以及 Lily Pool Terrace</strong>；' +
          '其中 Yellow Magnolia Café 门外与 Flatbush Avenue 入口那两处是单间无障碍厕所。' +
          '吃饭三档：<strong>Yellow Magnolia Café</strong>（正式坐下来吃的餐厅，需留时间）、' +
          '<strong>Yellow Magnolia Canteen</strong>（Steinhardt Conservatory 门外的户外简餐，' +
          '三明治、沙拉、披萨，是最实用的一档，<strong>季节性营业</strong>）、' +
          '以及 <strong>Visitor Center 里的 Coffee Bar</strong>（咖啡与甜点）。' +
          '<strong>三家都有各自的营业时间且短于园区开放时间，出发前请查 bbg.org/visit/cafe。</strong>' +
          '园内禁止自带野餐（这条和隔壁 Prospect Park 完全不同），想野餐请去 Prospect Park',
        '<strong>和隔壁 Brooklyn Museum 连起来逛是这一站性价比最高的安排</strong>：' +
          '两馆只隔 990 Washington Avenue 一条路，官方有 <strong>Museum &amp; Garden 联票</strong>' +
          '（3 月初至 11 月初供应，须同日使用）。' +
          '<strong>但要先对日历：Brooklyn Museum 周一与周二都闭馆，而植物园只闭周一</strong>，' +
          '所以<strong>能用上联票的只有周三到周日</strong>。' +
          '两馆合计请留 5–6 小时'
      ],
      photo: '园林 <strong>4.5/5</strong>，秋色 <strong>4/5</strong>，人像 <strong>3.5/5</strong>，建筑 <strong>3/5</strong>。' +
        'Japanese Hill-and-Pond Garden 的完成度确实是美国东岸日式庭园里的第一档。' +
        '扣分有三条实打实的理由：<strong>主体区域禁三脚架</strong>、' +
        '<strong>18:00 关门拿不到日落与蓝调</strong>、' +
        '以及<strong>秋色窗口窄到大概只有两周</strong>，早来一周就是一园绿叶加 $22 门票。' +
        '人像分数不高是因为庭园步道窄、需要顾及其他访客，且商业与人像拍摄需另行许可。',
      shots: [
        {
          name: 'Japanese Hill-and-Pond Garden 池畔与观景亭',
          park: [40.670638, -73.963679],
          view: [40.668737, -73.962912],
          desc: '<strong>两个时段，选一个：①开园 10:00–11:00</strong>' +
            '（人最少，且十月上午的低角度光会从东南方斜射进山坡，把枫叶打成透光的）；' +
            '<strong>②16:40–17:30</strong>（昏金光的前半段，' +
            '但请注意专类园 17:30 开始清园，别把最后一分钟压在这里）。' +
            '<strong>全程手持——本区明文禁止三脚架、机身支架与自拍杆。</strong>' +
            '因此器材上请直接放弃慢门方案，用 <strong>f/2.0–f/2.8 大光圈 + ISO 400–1600</strong> 换快门。' +
            '焦段：<strong>35–85mm</strong> 拍「朱红鸟居 + 池面倒影 + 山坡枫林」的三层构图；' +
            '<strong>85–200mm</strong> 压缩单株枫的叶簇，把池面的碎光虚成背景圆斑；' +
            '<strong>16–24mm</strong> 从观景亭向池对岸拍全景。' +
            '<strong>拍逆光透叶是这里最值得做的一件事</strong>——把太阳藏在枝干后面，' +
            '对叶片高光测光后减 1/3 到 2/3 档，红枫会亮成灯笼。'
        },
        {
          name: 'Cherry Esplanade 与 Oak Circle（深红栎与连香树）',
          view: [40.668743, -73.964615],
          desc: '<strong>上午 10:00–11:30 或下午 16:00–17:30。</strong>' +
            'Cherry Esplanade 是一条南北向的宽草坪，' +
            '两侧成排的 scarlet oak 在峰值时是整园最饱和的深红，' +
            '<strong>而它的优势是空间开阔、可以合法架三脚架</strong>（禁区只限日式庭园、温室与花床）。' +
            '<strong>24–50mm</strong> 沿草坪纵轴拍两排树的对称透视；' +
            '<strong>70–200mm</strong> 从一端压缩，让两排树冠在长焦下合成一条红色隧道。' +
            '往东南 150 米的 <strong>Oak Circle（约 40.667130, -73.964333）</strong>' +
            '有那棵分带变色的连香树，用 <strong>100–200mm 微距或中长焦拍单枝叶色渐变</strong>，' +
            '这是全园最容易出「一张就够」的细节照。'
        },
        {
          name: 'Lily Pool Terrace 与 Rock Garden（水面倒影）',
          view: [40.666790, -73.962326],
          desc: '<strong>清晨开园的 10:00–10:40 是唯一无风时段</strong>，' +
            '睡莲池的水面这时最接近镜面，能把 Steinhardt Conservayory 的玻璃穹顶' +
            '与周边秋色一起倒进水里。' +
            '<strong>24–70mm</strong> 压低到池沿高度让倒影占画面下半；' +
            '<strong>偏振镜在这里是反过来用的</strong>——不要消反光，转到反光最强的角度保住倒影。' +
            '往西 130 米的 Rock Garden（约 40.666200, -73.963807）是冰川漂砾造的岩石园，' +
            '秋天有变色的多肉景天与转成橙褐的池杉（pond cypress），' +
            '<strong>85–200mm</strong> 拍岩石纹理与植物的质感对比。' +
            '<strong>注意 Steinhardt Conservatory 温室内部禁三脚架。</strong>'
        }
      ],
      access: {
        visit: '<strong>2–3 小时是主流走法；只看重点 75–90 分钟；把隔壁 Brooklyn Museum 一起做则整天 5–6 小时。</strong>' +
          '分配：Japanese Hill-and-Pond Garden 25–30 分钟（环池小径一圈 + 在观景亭坐一会儿）' +
          '+ Cherry Esplanade 与 Oak Circle 20 分钟 + Steinhardt Conservatory 与 C.V. Starr Bonsai Museum 30 分钟' +
          '（盆栽馆单独就值 20 分钟）+ Lily Pool Terrace 与 Rock Garden 20 分钟 ' +
          '+ Cranford Rose Garden 15 分钟。' +
          '<strong>只有 75 分钟的话：日式庭园 + 盆栽馆 + Cherry Esplanade 三样，其余全部放弃。</strong>' +
          '<strong>加上在 Yellow Magnolia Café 坐下来吃一顿另加 60–75 分钟。</strong>' +
          '园方未公布官方建议时长，以上按 52 英亩的园区规模、约 2 公里主路与各专类园数量推算；' +
          '<strong>务必按「闭园前 35 分钟必须已在日式庭园里」倒推，专类园提前清人</strong>',
        book: '<strong>建议线上预购但非强制</strong>。官方口径：advance tickets are recommended，' +
          '门票提前 <strong>30 天</strong>开售；现场各入口售票亭也有当日票，' +
          '但取决于余量。<strong>所有访客（含会员与儿童）都必须持票进场</strong>，会员凭会员证与免费票入场。' +
          '票不可退，但可提前换日期',
        ticket: '<strong>2026 年 9 月 14 日在 bbg.org/visit/hours 的 Ticket Prices 表逐行复核，票价未变：</strong>' +
          '成人现场 <strong>$22</strong>／线上 $23.67（含 $1.67 手续费）；' +
          '65 岁以上与 12 岁以上持证学生现场 <strong>$16</strong>／线上 $17.47；' +
          '<strong>12 岁以下免费</strong>（14 岁以下须 18 岁以上成人陪同）；会员免费。' +
          '<strong>12 月至次年 2 月的平日为 pay what you wish（自愿定价）。</strong>' +
          '另有 <strong>Museum &amp; Garden 联票</strong>（含隔壁 Brooklyn Museum 当日入场，' +
          '官方供应期为 3 月初至 11 月初）：' +
          '成人现场 $34／线上 $36.06，65+ 与 20 岁以上学生 $24，12–19 岁学生 $16，须同日使用。' +
          '<strong>这里要更正本手册原先的一处错误：Brooklyn Museum 不是只闭周二，而是周一与周二都闭馆</strong>' +
          '（官方原文「Monday–Tuesday Closed / Wednesday–Sunday 11 am–6 pm」，2026 年 9 月 14 日复核），' +
          '<strong>所以联票只在周三至周日用得上</strong>。' +
          '<strong>每日另有一定数量免费的 Community tickets</strong>（由 JPMorgan Chase 赞助，' +
          '官方写明「留给需要的人」，现场索取）',
        hours: '<strong>2026 年 9 月 14 日在 bbg.org/visit/hours 与 bbg.org/visit/faq 逐行复核。</strong>' +
          '<strong>秋季（10 月）：周二至周日 10:00–18:00；周一闭馆</strong>，' +
          '但 <strong>2026 年 10 月 12 日（Indigenous Peoples\u2019 Day）例外开放 10:00–18:00</strong>，' +
          '是那个月唯一开门的周一。' +
          '<strong>9 月：周二至周四 10:00–19:00、周五至周日 10:00–18:00、周一闭馆</strong>' +
          '（<strong>官方两处口径不一致，照实写出：hours 页写的是「Tuesday–Thursday: 10 a.m.–7 p.m.」，' +
          '而官网首页的 Hours 摘要写的是「Tuesday &amp; Thursday: 10 a.m.–7 p.m.；' +
          'Wednesday, Friday &amp; Sunday: 10 a.m.–6 p.m.」——差的是九月的周三是 18:00 还是 19:00 关。' +
          '不替你选一个，当天以 bbg.org 首页的 Today\u2019s Hours 为准</strong>）。' +
          '<strong>末次入园为闭园前 30 分钟；专类园（含 Japanese Hill-and-Pond Garden 与 Steinhardt Conservatory）' +
          '在闭园前 30 分钟开始清园——这是本条目最需要提前算的一条。</strong>' +
          '会员另有 Fall Mornings 提前入园：秋季周六日 09:00–10:00。' +
          '<strong>十月有一个日历陷阱：园方每年在十月下旬的一个周六办 Fall Harvest Festival，' +
          '当天需专门票、不售普通门票</strong>（<strong>2026 年是 10 月 24 日，' +
          '官方活动页写 11:00–17:00 ticketed event</strong>）。' +
          '<strong>将来的读者请自行核对那一年的日期</strong>——它是个固定惯例但日期逐年变。' +
          '<strong>一件必须先认清的事实：这里 18:00 关门，所以无论什么季节，' +
          '这个园子都拿不到日落之后的时段</strong>。' +
          '把它当白天场安排；想在同一天接着看傍晚光线，' +
          '<strong>正确顺序是植物园（至 17:45）→ 步行 5 分钟穿过 Flatbush Avenue 进 Prospect Park</strong>，' +
          '那边开到凌晨一点。' +
          '<strong>另外注意入口：150 Eastern Parkway 入口目前临时关闭，' +
          '只能走 455 Flatbush Avenue 或 990 Washington Avenue（2026 年 9 月 14 日官网仍挂着这条提示）。</strong>' +
          '<strong>秋色的时间窗口很窄</strong>：园方 Fall Highlights 页只写' +
          '「Spectacular autumn hues start to appear in October」（注意是 start to appear），' +
          '而 Kings County 的 2026 年预报峰值在 10 月 21 日前后，' +
          '<strong>十月中旬之前来大概率还是一园绿叶</strong>，见本区第一条提醒',
        parking: '<strong>900 Washington Avenue 有人看管停车场，07:00–22:00</strong>（无过夜停车）。' +
          '费率：1 小时 $10、2 小时 $12、3 小时 $14、4 小时 $16、5 小时 $18、' +
          '<strong>至闭园 $24</strong>、24 小时 $35、丢票每日 $35；繁忙日适用活动费率。' +
          '<strong>公共交通更省事</strong>：<strong>2／3 线 Eastern Parkway–Brooklyn Museum 站</strong>' +
          '（对应 990 Washington Avenue 入口，无障碍）；' +
          '<strong>B／Q／S 线 Prospect Park 站</strong>（对应 455 Flatbush Avenue 入口，' +
          '<strong>注意周末无 B 线</strong>）；' +
          'S（Franklin Avenue Shuttle）到 Franklin Avenue 站（无电梯）。' +
          '巴士 B16、B41、B43、B45、B48 均可达',
        walk: '<strong>重要：150 Eastern Parkway 入口临时关闭</strong>，' +
          '只能从 <strong>455 Flatbush Avenue</strong> 或 <strong>990 Washington Avenue</strong> 进。' +
          'Eastern Parkway–Brooklyn Museum 站到 990 Washington Avenue 入口约 500 米／6 分钟；' +
          'Prospect Park 站到 455 Flatbush Avenue 入口约 250 米／3 分钟。' +
          '入园后到 Japanese Hill-and-Pond Garden 约 300–500 米／5–7 分钟，' +
          '园内主路铺装、可轮椅通行，但部分历史小径较窄、不平或有坡'
      },
      notes: [
        '<strong>这是本区最需要注意的一条政策：Japanese Hill-and-Pond Garden 禁止三脚架。</strong>' +
          '官方原文「tripods, body mounts, and selfie sticks may not be used in the ' +
          'Japanese Hill-and-Pond Garden, the Conservatory, or flower beds」。' +
          '也就是说<strong>你专门为之而来的那个地方必须手持</strong>。' +
          '请据此调整器材：带大光圈定焦、把 ISO 上限放宽到 3200，别带那支需要慢门的镜头',
        '<strong>园内其余区域个人摄影不需许可</strong>，器材上限是「一台相机 + 一个三脚架／机身支架／自拍杆」，' +
          '<strong>不允许带灯具、反光板与道具</strong>。禁无人机。禁止挡路',
        '<strong>专业人像与团体拍摄需另行许可</strong>（至少 5 个工作日申请）；' +
          '婚纱与订婚拍摄 <strong>$366／25 人以内</strong>，每场 60 分钟、配保安计时、' +
          '<strong>禁止室内拍摄</strong>，4–10 月可预约时段为 10:00–16:30；' +
          '商业与编辑类拍摄需提前 14 个工作日',
        '<strong>周中上午是全园最安静的时段</strong>，园方自己也这么建议。' +
          '峰值秋色的周末与 Sakura Matsuri 是全年人最多的时候',
        '<strong>18:00 关门意味着这里没有日落与蓝调</strong>。' +
          '如果你想在同一天既拍 BBG 又拍傍晚光线，' +
          '<strong>正确顺序是 BBG（10:00–17:45）→ 步行 5 分钟到 Prospect Park（开到 01:00）拍日落与蓝调</strong>，' +
          '两园只隔一条 Flatbush Avenue',
        '<strong>秋色早到就是白花 $22。</strong>如果你的日期在 10 月 15 日之前，' +
          '而这一站的唯一目的是秋色，建议直接跳过换成 Prospect Park（免费），' +
          '把 BBG 留给下一次'
      ],
      images: [
        { url: 'img/japanese-hill-and-pond-garden-brooklyn-botanic-garden-60636-911abf98.jpg',
          cap: 'Japanese Hill-and-Pond Garden 池畔与鸟居 · Rhododendrites / CC BY-SA 4.0' },
        { url: 'img/brooklyn-botanic-garden-new-york-november-2016-006-1de7d667.jpg',
          cap: '秋色中的日式庭园 · King of Hearts / CC BY-SA 4.0' },
        { url: 'img/brooklyn-botanic-garden-new-york-october-2016-005-1cb0420b.jpg',
          cap: '十月园内秋叶 · King of Hearts / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'prospect-park',
      n: 5,
      name: 'Prospect Park 与 Long Meadow',
      en: 'Prospect Park · Long Meadow · Boathouse on the Lullwater · Grand Army Plaza',
      must: 3,
      score: 4,
      tldr: '免费、开到 01:00、三脚架明文合法——本区秋色三点里唯一能拍日落与蓝调的；但 10 月 20 日前还是绿的。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '05:00–01:00', c: 'free' },
        { t: '三脚架合法', c: 'free' },
        { t: '秋色需 10/20 后', c: 'risk' }
      ],
      highlights: [
        '<strong>Olmsted 与 Vaux 在做完 Central Park 之后做了这里，而且他们自己认为这一个更好。</strong>' +
          '1867 年开放，526 英亩。它和 Central Park 最大的不同是<strong>没有横穿的城市道路</strong>——' +
          'Olmsted 用地形与拱桥把车行、马行、步行三条系统完全立体分离，' +
          '所以你在园里几乎看不到边界。<strong>2018 年 1 月 2 日起全园永久禁止机动车通行</strong>，' +
          'East Drive 与 West Drive 现在是纯步行与自行车环线',
        '<strong>Long Meadow 是本区秋色的主场，理由是尺度而非色彩。</strong>' +
          '约 90 英亩、南北纵深近 1.6 公里的连续起伏草地，' +
          '<strong>四周被高大落叶乔木整圈围住</strong>——' +
          '这意味着你可以站在草地中央用长焦把对岸整片树冠压成一条连续的色带，' +
          '这是 Brooklyn Botanic Garden 那种「逐株欣赏」的园子做不到的构图。' +
          '清晨草地上常有薄雾（园方与摄影者都拍过雾中长草甸），' +
          '<strong>而园里 05:00 就开门，是本区秋色三点中唯一能拍到日出的</strong>',
        '<strong>Boathouse on the Lullwater 有一个对摄影极其关键的设计事实：它是刻意朝西建的，' +
          '就是为了接住水面上的落日。</strong>' +
          '1905–07 年由 Helmle &amp; Huberty 设计建造（两人都是 McKim, Mead &amp; White 的门生），' +
          '通体白色赤陶贴面，<strong>母题取自 Jacopo Sansovino 在威尼斯设计的 Library of St Mark 的底层</strong>。' +
          '它还有一段几乎失败的历史：<strong>1964 年 9 月，公园管理局距离拆掉它只剩 48 小时</strong>，' +
          '当时的公园局长 Newbold Morris 认定它没救了；' +
          '<strong>布鲁克林诗人 Marianne Moore 与一批保护主义者在最后关头把它保了下来</strong>，' +
          '它随即成为纽约市第 4 号指定地标（NYCL No. 0004，1965 年 10 月 14 日），' +
          '<strong>编号之低说明它是全市最早被保下来的那几栋建筑之一</strong>，1972 年列入国家史迹名录',
        '<strong>Grand Army Plaza 的 Soldiers\u2019 and Sailors\u2019 Memorial Arch</strong>' +
          '是园区北门的门面：<strong>1889 年动工、1892 年落成，建筑师 John H. Duncan</strong>' +
          '（也是 Grant\u2019s Tomb 的设计者），纪念南北战争中的联邦军。' +
          '<strong>拱顶那组四马战车群像由 Frederick MacMonnies 于 1898 年加装</strong>，' +
          '内侧另有 Lincoln 与 Grant 的骑马浮雕（浮雕由 MacMonnies 与 Thomas Eakins 参与）。' +
          '它站在一个交通环岛中央，<strong>意味着你几乎总能拍到「拱门 + 车流光轨」的组合</strong>',
        '往南的 <strong>Lullwater 与 Terrace Bridge</strong> 一带是全园水景最密的一段，' +
          '再往西的 <strong>Ravine</strong> 里是<strong>布鲁克林仅存的一片森林</strong>' +
          '（Olmsted 造的人工「山谷」，如今已长成成熟林相）。' +
          '园内另有 1912 年的旋转木马、Lefferts Historic House、' +
          'Audubon Center（就设在 Boathouse 里，是全美第一个城市 Audubon 中心）、' +
          '以及 Nethermead 与 Concert Grove Pavilion 这些 19 世纪构筑'
      ],
      tour: [
        '<strong>先说它和 Central Park 的关系，这决定你要不要来：同一对设计师（Olmsted 与 Vaux），' +
          '晚做几年，他们自己认为这一个做得更好，但它明显更本地化。</strong>' +
          'Central Park 是全世界游客的公园，Prospect Park 是布鲁克林人的后花园——' +
          '这里周末踢球的、遛狗的、办生日派对的、打鼓跳舞的绝大多数是住在旁边的人。' +
          '<strong>如果你在纽约的时间只够去一个大公园，去 Central Park；' +
          '如果你想看纽约人平常怎么过周末，来这里。</strong>' +
          '它和 Central Park 最大的结构差别是<strong>没有横穿的城市道路</strong>——' +
          'Olmsted 用地形与拱桥把车行、马行、步行三套系统立体分开，' +
          '<strong>2018 年 1 月 2 日起全园永久禁止机动车通行</strong>，' +
          '所以你在园里几乎意识不到自己在城市中间',
        '<strong>一条把主要看点全串起来的路线（约 4.5 公里、2.5–3 小时，全程主路铺装、坡度平缓）：</strong>' +
          '<strong>2／3 线 Grand Army Plaza 站出站即到 Soldiers\u2019 and Sailors\u2019 Memorial Arch</strong>' +
          '（1889 年动工、1892 年落成，建筑师 John H. Duncan，拱顶那组四马战车群像是 ' +
          'Frederick MacMonnies 1898 年加装的，站在交通环岛中央，只能从外圈人行道看）→ ' +
          '进北门穿 <strong>Endale Arch</strong>（1867 年的原始拱洞，' +
          'Olmsted 故意让你走过一段黑暗后突然看见整片草地，这个效果今天依然成立）→ ' +
          '<strong>Long Meadow</strong>（约 90 英亩、南北近 1.6 公里，' +
          '官方称它是<strong>全美城市公园里最长的一片不间断草地</strong>，' +
          '沿西侧的 West Drive 或直接在草地上往南走）→ ' +
          '<strong>Picnic House</strong>（1876 年）→ 穿 <strong>Ravine</strong>' +
          '（Olmsted 造的人工山谷，如今是<strong>布鲁克林仅存的一片森林</strong>，约 150 英亩）→ ' +
          '<strong>Nethermead</strong> → <strong>Boathouse on the Lullwater</strong> → ' +
          '<strong>Prospect Park Zoo 与 Lefferts Historic House</strong>（两者紧邻，都在东侧 Flatbush Avenue 一线）→ ' +
          '<strong>1912 年的旋转木马</strong>（就在 Lefferts 隔壁）→ ' +
          'B／Q／S 线 Prospect Park 站出园。' +
          '<strong>时间只有一半就走「拱门 → Endale Arch → Long Meadow → 原路返回」，' +
          '前半段的看点密度远高于南半部。</strong>',
        '<strong>东侧那一串（Boathouse、动物园、Lefferts、木马）是本园最值得规划的部分，因为四样紧挨在一起，' +
          '而且各有独立的开放时间与票价，串错了就会白跑。顺序建议由北往南：</strong>' +
          '①<strong>Boathouse on the Lullwater</strong>——1905–07 年 Helmle &amp; Huberty 设计，' +
          '通体白色赤陶，母题取自 Jacopo Sansovino 在威尼斯设计的 Library of St Mark 底层；' +
          '<strong>1964 年 9 月它距离被拆只剩 48 小时，是布鲁克林诗人 Marianne Moore 等人在最后关头保下来的</strong>，' +
          '随即成为<strong>纽约市第 4 号指定地标</strong>（编号之低说明它是全市最早被保下的那几栋之一）；' +
          '里面是<strong>全美第一个城市 Audubon 中心</strong>，免费，但开放时间很短、请当天查；' +
          '②往南 400 米是 <strong>Prospect Park Zoo</strong>（450 Flatbush Avenue，WCS 运营，' +
          '体量小、以小型动物与海狮为主，<strong>一小时够了，带小孩才值这个票价</strong>，' +
          '海狮训练展示是每天三场的固定节目）；' +
          '③紧邻动物园的 <strong>Lefferts Historic House</strong>——' +
          '<strong>18 世纪的 Flatbush 农舍，1918 年整栋从 563 Flatbush Avenue 搬进园里</strong>，' +
          '纽约市地标，由 Prospect Park Alliance 与 Historic House Trust 合管；' +
          '<strong>免费</strong>，有一座在耕作的历史菜园，' +
          '现在的展陈重点是<strong>Lenapehoking 的原住民与被 Lefferts 家族奴役的非洲人的故事</strong>，' +
          '不是一栋只给你看家具的老宅——<strong>半小时，是全园最有内容的室内一站</strong>；' +
          '④<strong>1912 年的旋转木马</strong>就在 Lefferts 隔壁，单次约 $3，季节性营业',
        '<strong>可以跳过的：</strong>Parade Ground 的球场群（纯运动场地）、' +
          'Prospect Park Tennis Center、LeFrak Center at Lakeside 的溜冰场（十月还没开冰）、' +
          '以及 Prospect Park Lake 南岸那一大圈（风景与 Lullwater 同类，但要多走 2 公里）。' +
          '<strong>Concert Grove 与 Music Island 一带值得顺路看一眼但不必专程。</strong>' +
          '省下的时间给 Long Meadow 与东侧那四样',
        '<strong>人流与安全：</strong>周末的 Long Meadow 与 Nethermead 从上午到日落都是满的——' +
          '足球、垒球、遛狗、烧烤、生日派对，<strong>这就是它的正常状态，也是来这里的理由之一</strong>；' +
          '想要空草地请在清晨（园门 5:00 或 6:00 就开，见下方开放时间那条）。' +
          '主路（East Drive、West Drive）与 Long Meadow 白天到傍晚人流充足、治安良好。' +
          '<strong>真正需要注意的是两处：Ravine 与 Midwood 的林间小径天黑后几乎没有照明、也没有人，' +
          '独行者不要在入夜后深入园区内部</strong>；' +
          '离园请沿 East Drive 或 West Drive 这类宽阔环线走出去，不要穿林间小路。' +
          '另外<strong>全园禁机动车但自行车与电动自行车在环线上速度很快</strong>，' +
          '横穿 East／West Drive 前请先看两头',
        '<strong>餐饮与卫生间：</strong>园区太大（526 英亩），' +
          '<strong>请把这两件事按「在哪个门附近」来记，不要指望走到哪儿都有</strong>。' +
          '固定餐饮只有两处半：<strong>LeFrak Center at Lakeside 的小卖部</strong>（南端）、' +
          '<strong>Prospect Park Zoo 里的 café</strong>（要买门票才进得去）、' +
          '以及<strong>每年 4 月至 10 月的每个周日 11:00–18:00 在 Breeze Hill 摆摊的 Smorgasburg 露天美食市集</strong>' +
          '（从 Lincoln Road 入口进，六十余家摊位，是园内唯一一个真正能吃饱的选择，' +
          '<strong>2026 年的收季日是 10 月 25 日</strong>）。' +
          '<strong>其余时候最靠得住的吃饭方案是出园</strong>：' +
          '北门外的 Park Slope（Seventh Avenue 与 Fifth Avenue 两条街）、' +
          '东门外的 Prospect Heights（Vanderbilt Avenue）、' +
          '以及东南门外 Lincoln Road 一带都是成排的餐厅。' +
          '<strong>公厕分布在 Picnic House、Boathouse、动物园、LeFrak Center 与几处游乐场附近，' +
          '各自的季节性钟点园方未逐处公布——未能从官方渠道确认</strong>，' +
          '进园前请在 Grand Army Plaza 或 Litchfield Villa（园方信息中心，' +
          '<strong>周一至周五 09:00–17:00</strong>）拿一份纸质地图，上面标了当季开放的洗手间'
      ],
      photo: '秋色 <strong>4.5/5</strong>，建筑 <strong>4/5</strong>，人像 <strong>4/5</strong>，风光 <strong>3.5/5</strong>。' +
        '秋色给到 4.5 是因为它同时具备<strong>免费、开到凌晨一点、三脚架明文合法、' +
        '以及大尺度草甸构图</strong>四项条件，这在纽约市里是独一份的组合。' +
        '扣分只扣在一件事上：<strong>它不像 Botanic Garden 那样有精选品种</strong>，' +
        '色彩饱和度和层次比不上人工配植的日式庭园，' +
        '而且园区太大（526 英亩），走完主要机位是 5–6 公里。',
      shots: [
        {
          name: 'Long Meadow 北端 · Endale Arch 出口（框景 + 草甸纵深）',
          view: [40.671085, -73.969054],
          desc: '<strong>清晨 06:50–08:00（9 月底）或 07:20–08:30（10 月下旬）</strong>——' +
            '这是全园最值得起早的一个机位。' +
            'Endale Arch 是 1867 年园区建成时的原始拱洞之一（近年完成修复），' +
            'Olmsted 的设计意图就是让你穿过一段黑暗的拱洞后<strong>突然看见整片 Long Meadow</strong>。' +
            '<strong>站在拱洞内往南拍，用洞口的暗弧当天然画框</strong>，' +
            '<strong>24–35mm</strong> 让拱洞占画面外圈三分之一、草甸与树冠填满洞口。' +
            '清晨太阳在东南（方位 91–104°），侧逆光会在草面拉出长影并把薄雾打亮。' +
            '曝光要点：<strong>对洞口的草地测光，让拱洞完全压成黑色剪影</strong>，' +
            '别试图把砖石细节救回来，那会毁掉框景的对比。'
        },
        {
          name: 'Long Meadow 中段（草甸中央，长焦压树冠色带）',
          view: [40.665684, -73.972874],
          desc: '<strong>昏金光 17:15–18:06（10/22）或 18:00–18:48（9/25），加蓝调到 18:34／19:16。</strong>' +
            '走到草甸中央，<strong>70–200mm 对着西侧与南侧的树线压缩</strong>——' +
            '长焦会把纵深压掉，把对岸整圈树冠变成一条连续的红黄色带，' +
            '前景留一条被低角度光打亮的草脊。' +
            '<strong>135–300mm</strong> 可以单独挑出一棵孤立大树配空草地。' +
            '傍晚这里的方向条件很好：日落方位 256–269° 正好在草甸西南侧的树线上，' +
            '<strong>秋叶被逆光穿透是本区最容易出效果的一件事</strong>——' +
            '把太阳藏在树干后，对叶片高光测光减 2/3 档。' +
            '<strong>三脚架在此明文合法</strong>（NYC Parks 规则），蓝调 2–8 秒。' +
            '往西 200 米是 1876 年的 Picnic House（约 40.665559, -73.971573）。'
        },
        {
          name: 'Boathouse on the Lullwater（西向立面 + 水面倒影）',
          view: [40.660825, -73.965280],
          desc: '<strong>这栋楼是刻意朝西建的，所以昏金光 17:15–18:00（10 月下旬）是它的设计时刻</strong>——' +
            '白色赤陶立面在低角度暖光下会整体发亮，' +
            '而 Lullwater 的水面把柱廊、拱券与栏杆完整倒影进去。' +
            '<strong>35–85mm</strong> 从水对岸（Lullwater Bridge 一侧，约 40.660617, -73.965878）正面拍，' +
            '<strong>压低机位到水面高度让倒影占画面下半</strong>；' +
            '<strong>85–200mm</strong> 单独压缩塔司干柱式的柱列与三陇板檐部。' +
            '清晨 07:00–08:00 无风时倒影最完整但立面在阴影里，' +
            '<strong>所以「倒影完整」与「立面受光」二者只能选一个</strong>——' +
            '要两者兼得就去多云天的下午。' +
            '往北 60 米有 Lullwater viewing platform（约 40.661351, -73.966270）可换高度。'
        },
        {
          name: 'Grand Army Plaza · Soldiers\u2019 and Sailors\u2019 Arch（蓝调加车流光轨）',
          view: [40.672989, -73.969903],
          desc: '<strong>蓝调 18:06–18:34（10/22）或 18:48–19:16（9/25）</strong>，' +
            '拱门泛光与天空亮度在这段时间平衡，之后拱门会过曝、天空会黑成一块。' +
            '<strong>24–50mm</strong> 从环岛外侧的人行道正面拍拱门全貌加顶部四马战车；' +
            '<strong>85–200mm</strong> 单独压缩 MacMonnies 的战车群像与马的肌肉细节' +
            '（1898 年加装，是全美最好的 Beaux-Arts 群雕之一）。' +
            '<strong>这里最值得做的是慢门车轨</strong>：' +
            '拱门立在交通环岛中央，<strong>4–15 秒</strong>就能把 Flatbush Avenue 与 ' +
            'Eastern Parkway 的车灯拉成绕着拱门的弧线。' +
            'f/11–f/16、ISO 100、需三脚架与快门线。' +
            '<strong>注意这是繁忙路口，架机位请完全站在人行道上、不要越过路缘石。</strong>'
        }
      ],
      access: {
        visit: '<strong>2.5–3 小时走完主要看点；只看北半部（拱门 + Endale Arch + Long Meadow）60–75 分钟；' +
          '把东侧的动物园与 Lefferts Historic House 一起做则 4–5 小时。</strong>' +
          '分配：Grand Army Plaza 的拱门 15 分钟 + Endale Arch 10 分钟 + ' +
          'Long Meadow 南北纵走 30–40 分钟 + Ravine 与 Nethermead 25 分钟 + ' +
          'Boathouse on the Lullwater 20 分钟 + Lefferts Historic House 30 分钟 + ' +
          'Prospect Park Zoo 60 分钟（带小孩加 30 分钟）+ 旋转木马 10 分钟。' +
          '<strong>想在草地上坐着待一下午（这是本地人的用法，也是这个公园最对的用法），' +
          '请留半天并自备野餐——园内允许野餐，隔壁的植物园不允许。</strong>' +
          '园方未公布官方建议时长，以上按 526 英亩的园区规模、约 4.5 公里的串线距离' +
          '与各处附属设施的规模推算',
        book: '<strong>公园本身不需预约。</strong>' +
          '<strong>Prospect Park Zoo 官方建议提前在线购买指定日期票</strong>' +
          '（官网原文「Advance purchase of date-specific tickets online is recommended」，' +
          '且注明<strong>日历上没有的日期表示当日已满，客服也无法补订</strong>）；' +
          'WCS 会员日间常规参观自 2026 年 3 月 3 日起不再需要预约。' +
          'Lefferts Historic House、旋转木马、Audubon Center 均不需预约',
        ticket: '<strong>公园免费</strong>，没有门禁也没有售票处。' +
          '<strong>园内收费的只有动物园与旋转木马（2026 年 9 月 14 日复核）：</strong>' +
          '<strong>Prospect Park Zoo</strong>——成人（13 岁及以上）<strong>$10.95</strong>、' +
          '65 岁以上 $8.95、儿童（3–12 岁）$7.95、<strong>2 岁及以下免费</strong>，WCS 会员免费；' +
          '<strong>旋转木马</strong>单次约 <strong>$3</strong>、五次票约 $13（季节性营业，冬季停开）。' +
          '<strong>Lefferts Historic House 与 Boathouse 里的 Audubon Center 都免费。</strong>' +
          '<strong>动物园的票价与旋转木马的票价均可能逐年调整，出发前请分别查 prospectparkzoo.com ' +
          '与 prospectpark.org 的对应页面。</strong>',
        hours: '<strong>开园时刻至今仍有两个官方口径互相打架，本条照实写出两种、不替你二选一' +
          '（2026 年 9 月 14 日再查一轮，两边一字未改，分歧仍然存在）：</strong>' +
          '<strong>① NYC 311 的官方知识库条目写的是「The park is open from 5 AM to 1 AM」' +
          '（每日 05:00–01:00）；' +
          '② 受托管理本园的 Prospect Park Alliance 在自家 General Information 页写的是' +
          '「Prospect Park is open daily from 6 am–1 am」（每日 06:00–01:00）。</strong>' +
          '<strong>差的是早上那一小时，闭园时刻两边都是 01:00。</strong>' +
          '实务上的处理办法：<strong>打算在 06:00 之后进园的人可以完全忽略这个分歧；' +
          '想在日出前就进园（夏季日出早到 05:25 前后）的人请按较晚的 06:00 做计划，' +
          '或打 311（纽约市外拨 212-639-9675）问当天口径。</strong>' +
          '<strong>Alliance 同页另列两条分区例外：儿童游乐场 21:00 关、Parade Ground 22:00 关。</strong>' +
          '<strong>园内附属设施各有独立钟点，全部于 2026 年 9 月 14 日复核，与公园本身无关：</strong>' +
          '<strong>Prospect Park Zoo</strong>——官方原文「April 2 — October 31, 2026：' +
          'Mon–Fri 10:00 AM–5:00 PM；Weekends &amp; Federal Holidays 10:00 AM–5:30 PM」，' +
          '「November 1, 2026 — March 2027：Daily 10:00 AM–4:30 PM」，' +
          '<strong>末次入园为闭园前 30 分钟、动物展区提前 30 分钟关</strong>；' +
          '<strong>Lefferts Historic House</strong>——官方原文' +
          '「Saturdays, Sundays and public school holidays 12–5 pm, from Labor Day through November 15」' +
          '（即<strong>秋季只开周六、周日与公立学校假日的 12:00–17:00，11 月 15 日后休季</strong>；' +
          '7 月至 Labor Day 为周三至周日 12:00–18:00，5–6 月为周六日与学校假日 12:00–17:00）；' +
          '<strong>Litchfield Villa（园方信息中心）周一至周五 09:00–17:00</strong>；' +
          '<strong>旋转木马与 Boathouse 内的 Audubon Center 为季节性营业、钟点逐季调整，' +
          '园方未公布长期表——出发当天请查 prospectpark.org。</strong>' +
          '<strong>这个园子在本区的独特价值就在开放时间：它开到凌晨一点，' +
          '是附近唯一一个日出前与日落后都进得去的大型绿地</strong>——' +
          'Brooklyn Botanic Garden 18:00 关门、Green-Wood 入夜前锁闸，只有这里不受限制。' +
          '<strong>2018 年 1 月 2 日起全园永久禁止机动车通行</strong>',
        parking: '园内不设访客停车场（且全园禁车）。' +
          '周边路边停车在 Park Slope 与 Prospect Heights 一侧竞争激烈，逐块读牌。' +
          '<strong>地铁覆盖是本区最好的，四个方向各有站</strong>：' +
          '<strong>2／3 线 Grand Army Plaza 站</strong>（正对拱门与北门，出站即到）；' +
          '<strong>B／Q／S 线 Prospect Park 站</strong>（东南角，靠近 Lullwater 与 Boathouse，' +
          '<strong>周末无 B 线</strong>）；' +
          '<strong>F／G 线 15 St–Prospect Park 站与 Fort Hamilton Parkway 站</strong>（西南侧）；' +
          '<strong>B／Q 线 Parkside Avenue 站</strong>（南侧，靠 Prospect Park Lake）',
        walk: 'Grand Army Plaza 站到拱门 <strong>0 分钟，出站即到</strong>；' +
          '拱门到 Endale Arch 约 350 米／5 分钟；' +
          'Endale Arch 到 Long Meadow 中段约 700 米／9 分钟；' +
          'Long Meadow 中段到 Boathouse 约 1.1 公里／15 分钟（有起伏）。' +
          '<strong>拱门 → Long Meadow → Boathouse → Prospect Park 站全线约 3.5 公里／50–60 分钟</strong>，' +
          '主路铺装、坡度平缓'
      },
      notes: [
        '<strong>三脚架明文合法，这是本区四种政策里最宽松的一档。</strong>' +
          'NYC Parks 官方条件：只用手持相机或三脚架、不要求独占空间、不用道具或模拟紧急场面、' +
          '不申请停车或车辆通行，<strong>就不需要 MOME 许可也不需要 Parks 的 MPA</strong>。' +
          '超出这个范围（灯具、发电机、封控人流）才需提前 7–14 天申请，' +
          '且 Prospect Park Alliance <strong>不在周末、周一与重大节假日次日发许可</strong>',
        '<strong>Boathouse、Picnic House 与旋转木马的室内属可租用私人场地</strong>，' +
          '不能自行进去拍：Boathouse 拍摄费率 $750／小时（4 小时起）或 $7,500／12 小时日。' +
          '室外拍它的立面完全免费',
        '<strong>秋色早到就是一园绿叶。</strong>10 月 15 日之前来，请把预期调成' +
          '「Olmsted 的地形设计 + 1905 年的建筑」而不是颜色。' +
          '好消息是这里免费，早来的代价只是时间',
        '<strong>清晨的雾是这里最值得赌的东西。</strong>Long Meadow 是低洼开阔草地，' +
          '晴朗无风的秋夜之后清晨常有贴地薄雾，日出后 30–60 分钟散去。' +
          '想赌雾就在日出前 20 分钟到位',
        '<strong>Ravine 与 Midwood 的林间小径在天黑后照明极少、人烟稀少</strong>，' +
          '独行者不建议入夜后深入园区内部。' +
          '蓝调拍完请沿 East Drive 或 West Drive 这类宽阔环线走出园区，' +
          '而不是穿林间小路',
        '<strong>Long Meadow 是本地人的日常运动场</strong>，' +
          '傍晚有足球、垒球、遛狗（园方设有特定时段的无绳遛狗区）。' +
          '想要空草地请在清晨，傍晚就把人拍进去当尺度'
      ],
      images: [
        { url: 'img/fall-morning-prospect-park-long-meadow-0824ed9c.jpg',
          cap: '秋日清晨的 Long Meadow · Badtartin / CC BY-SA 4.0' },
        { url: 'img/prospect-park-boathouse-61446p-daf9165a.jpg',
          cap: 'Boathouse on the Lullwater 与水面倒影 · Rhododendrites / CC BY-SA 4.0' },
        { url: 'img/soldiers-and-sailors-arch-brooklyn-c24569fe.jpg',
          cap: 'Grand Army Plaza 的 Soldiers\u2019 and Sailors\u2019 Arch · David Brossard / CC BY-SA 2.0' }
      ]
    },
    {
      id: 'green-wood',
      n: 7,
      name: 'Green-Wood Cemetery 绿荫公墓',
      en: 'The Green-Wood Cemetery · Gothic Gates · Battle Hill',
      must: 2.5,
      score: 4.5,
      tldr: '免费、478 英亩、8,000 棵老树的历史公墓兼树木园，1865 年哥特主门与布鲁克林最高点 Battle Hill 值得专程；<strong>但这是活跃墓地，有安静与礼仪要求，且 10–3 月只到 17:00 关门</strong>。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '365 天开放', c: 'free' },
        { t: '活跃墓地·需安静', c: 'risk' },
        { t: '秋冬 17:00 关', c: 'risk' },
        { t: '开车比走路省力', c: 'paid' }
      ],
      highlights: [
        '<strong>25th Street 的那座大门是全美哥特复兴建筑里的一件重器，不是「公墓门」那么简单。</strong>' +
          '<strong>1861 年动工、1865 年完成，建筑师 Richard M. Upjohn 与其父（Richard Upjohn，' +
          '美国哥特复兴教堂的开山人物）</strong>，用的是新泽西 Belleville 产的褐砂石。' +
          '构造是两道尖拱门夹一座 <strong>Flamboyant 式钟塔，塔高 106 英尺（32 米）</strong>，' +
          '钟塔靠两道飞扶壁撑住、扶壁又落到门洞外侧的巨大墩座上。' +
          '尖拱深凹的山花里是 <strong>John M. Moffitt 雕的四组新斯科舍石灰岩高浮雕</strong>，' +
          '题材是《拉撒路复活》《拿因寡妇之子》与《基督复活》。' +
          '1966 年被定为纽约市地标。<strong>钟至今仍在葬礼队伍到达时敲响</strong>',
        '<strong>门塔的尖顶上住着一群野生和尚鹦鹉（monk parakeet）</strong>，' +
          '来源是几十年前从阿根廷运抵纽约途中逃脱的一批鸟的后代，' +
          '如今在褐砂石的尖顶与花饰里筑了大巢。' +
          '<strong>这是全区最反直觉的一个拍摄对象</strong>——一座 1865 年的哥特钟塔上停着一群亮绿色的热带鹦鹉，' +
          '而且它们叫声极响、很好找。用 <strong>300–600mm</strong> 拍，晴天上午光最好',
        '<strong>Battle Hill 是布鲁克林的最高天然点，海拔 216 英尺（66 米）</strong>，' +
          '属末次冰期形成的 <strong>Harbor Hill 终端冰碛</strong>——' +
          '整座公墓那种起伏地形就是冰碛给的，这也是它 1838 年被选作公墓的原因。' +
          '<strong>1776 年 8 月 27 日的 Battle of Brooklyn（美国独立战争中规模最大的一场战役）中，' +
          '美军在这座山坡上给英军造成了全场最多的伤亡</strong>。' +
          '山顶那尊 <strong>《Altar to Liberty: Minerva》是 Frederick Ruckstull 1920 年的作品</strong>，' +
          '由本地商人 Charles M. Higgins 出资，<strong>Minerva 的视线越过纽约港正对自由女神像</strong>；' +
          '2006 年一场社区行动用「这条视线」为理由，挡掉了一栋会遮住它的新建筑',
        '<strong>老树是这里对比植物园的真正优势。</strong>' +
          '478 英亩、约 60 万人下葬、<strong>8,000 多棵树</strong>，' +
          '而且是<strong>一百多年没被打断的原生长树龄</strong>——' +
          '这一点是 2010 年才建成的 Brooklyn Bridge Park 和只有 52 英亩的 Botanic Garden 都给不了的。' +
          '配合起伏的冰碛地形和满山维多利亚时代的墓碑、方尖碑与陵墓，' +
          '<strong>秋色在这里是「有骨架的秋色」</strong>，不是一片好看的树。' +
          '秋色时间同样按本区总口径：Kings County 2026 年预报峰值 10 月 21 日前后',
        '<strong>园内有若干水面，是拍倒影的地方</strong>：' +
          'Sylvan Water（西南）、Valley Water、Crescent Water、Dell Water。' +
          '另有 1911 年 Warren &amp; Wetmore（Grand Central Terminal 的建筑师）' +
          '设计的 <strong>Historic Chapel</strong>。' +
          '名人墓包括 Leonard Bernstein、Jean-Michel Basquiat、Louis Comfort Tiffany、' +
          'Horace Greeley、Boss Tweed 与 Samuel Morse——但作为摄影目标，' +
          '<strong>地形与树比名字有用得多</strong>'
      ],
      tour: [
        '<strong>第一件要认清的事：这是一座仍在运营的墓地，不是公园，也不是博物馆。</strong>' +
          '478 英亩、约 60 万人下葬，而且每天都有新的葬礼与来祭扫的家属。' +
          '园方欢迎游客（<strong>官方原话「We\u2019re open 365 days a year, at no charge」</strong>），' +
          '但这份欢迎是有条件的，条件就是安静与分寸：' +
          '<strong>压低音量、不要大声说笑、不要奔跑或做运动、不要野餐、不要带宠物（导盲犬除外）。' +
          '遇到正在进行的葬礼队伍或祭扫的家属，请立刻停下、绕开、放下相机，并且不要把镜头对向他们。</strong>' +
          '另外<strong>明文禁止触摸墓碑或做碑文拓印</strong>（很多碑已过百年、石材脆弱），' +
          '也不要坐、踩或倚靠墓碑与陵墓（有倾倒风险）。' +
          '<strong>这些不是客套话——「欢迎个人来访」这条政策能不能保住，取决于来的人守不守规矩。</strong>',
        '<strong>三样一定要看到，其余随缘：</strong>' +
          '①<strong>25th Street 的哥特复兴主门</strong>——1861 年动工、1865 年完成，' +
          '建筑师 Richard M. Upjohn 与其父 Richard Upjohn（美国哥特复兴教堂的开山人物），' +
          '新泽西 Belleville 褐砂石，两道尖拱夹一座 <strong>106 英尺（32 米）高的 Flamboyant 式钟塔</strong>，' +
          '尖拱深凹的山花里是 John M. Moffitt 雕的四组高浮雕；' +
          '<strong>1966 年被定为纽约市地标，那口钟至今仍在葬礼队伍到达时敲响</strong>。' +
          '顺便抬头看塔尖——<strong>那里住着一群野生的和尚鹦鹉（monk parakeet）</strong>，' +
          '据说是几十年前从阿根廷运抵纽约途中逃脱的那批鸟的后代，' +
          '在褐砂石花饰里筑了大巢，叫声极响，很好找；' +
          '②<strong>Battle Hill</strong>——<strong>海拔 216 英尺（66 米），是布鲁克林的最高天然点</strong>，' +
          '整座墓园那种起伏地形来自末次冰期的 Harbor Hill 终端冰碛，也是它 1838 年被选作墓地的原因。' +
          '<strong>1776 年 8 月 27 日的 Battle of Brooklyn（美国独立战争中规模最大的一场战役）里，' +
          '美军在这座山坡上给英军造成了全场最多的伤亡</strong>；' +
          '山顶那尊 <strong>《Altar to Liberty: Minerva》</strong>是 Frederick Ruckstull 1920 年的作品，' +
          'Minerva 的视线越过纽约港正对自由女神像，2006 年一场社区行动曾以「这条视线」为由挡掉了一栋会遮住它的新建筑；' +
          '③<strong>1911 年的 Historic Chapel</strong>，Warren &amp; Wetmore（Grand Central Terminal 的建筑师）设计，' +
          '印第安纳石灰岩、平面近正方、上覆小穹顶，体量不大但细部极精',
        '<strong>名人墓：这里长眠着六十万人，其中有一批名字你一定听过，但请先做一个预期管理——' +
          '除了少数几座，它们都是很普通的墓碑，要靠地图才找得到，而且分散在方圆两公里内。</strong>' +
          '值得专门去看的：<strong>Leonard Bernstein</strong>（指挥家与《West Side Story》的作曲者，' +
          '1990 年葬于此，墓碑朴素，常有人放乐谱与石子）、' +
          '<strong>Boss Tweed</strong>（William M. Tweed，19 世纪 Tammany Hall 的头目、' +
          '美国政治腐败史上最著名的人物之一，最后死在监狱里——' +
          '<strong>他的墓就在这座他曾经搜刮过的城市的高地上，这个反差本身就是这一站最好的故事</strong>）、' +
          '<strong>Jean-Michel Basquiat</strong>（1988 年去世的涂鸦与新表现主义画家，墓前常有人留颜料与信）、' +
          '<strong>Louis Comfort Tiffany</strong>、<strong>Samuel Morse</strong>（电报与莫尔斯码）、' +
          '<strong>Horace Greeley</strong>（《New York Tribune》创办人）。' +
          '<strong>想按名字逛的人请在主门索取纸质地图（免费，官网也有 PDF），' +
          '园方另有付费的导览车与主题步行导览，那是效率最高的做法。</strong>' +
          '如果不打算找人，就别找——<strong>这里真正的看点是地形、老树与十九世纪的墓葬建筑，不是名单</strong>',
        '<strong>怎么逛：478 英亩、道路呈放射状蜿蜒，手机地图在园内的路径规划经常不可用，' +
          '所以逛法要按体力来选，这是本条目最实际的一条建议。</strong>' +
          '<strong>只想看主门与礼拜堂（半小时）</strong>：坐 R 线 25th Street 站，出站就在主门正对面，' +
          '进门 250 米就是 Historic Chapel，看完原路出来。' +
          '<strong>想走完三个重点（2–2.5 小时、约 3.5 公里且持续起伏）</strong>：' +
          '主门 → Historic Chapel（250 米）→ 往东南 550 米上 Battle Hill 与 Minerva' +
          '（<strong>从主门算起 543 米、持续上坡到海拔 66 米，步行 10–15 分钟，这是全程最累的一段</strong>）→ ' +
          '往西南下到 Sylvan Water（园内最大的一片水面，四周环绕成熟落叶乔木与维多利亚墓碑）→ 回主门。' +
          '<strong>体力有限、带老人或小孩、或者只有一个下午：直接开车进去。</strong>' +
          '<strong>园方明确欢迎自驾并允许在园内任意处免费停车</strong>' +
          '（要求靠道路右侧停、不上草地、留出通行空间）——' +
          '<strong>这是本区唯一一个「开车明显优于走路」的点位</strong>。' +
          '<strong>园内道路是人车共用的，家属会开车找墓位</strong>，' +
          '园方明确要求行人靠边走、留意来车，尤其是转弯处；' +
          '<strong>园内禁止自行车、滑板车与轮滑</strong>（入口有停车架）',
        '<strong>可以跳过的：</strong>Valley Water、Crescent Water、Dell Water 这三处小水面' +
          '（和 Sylvan Water 同类，只是更小）、' +
          '以及园区西侧与南侧那些 20 世纪以后的新葬区（墓碑规整、没有 19 世纪那种纪念建筑）。' +
          '<strong>Green-House 游客中心</strong>（主门内，Fifth Avenue &amp; 25th Street，从 25th Street 进）' +
          '值得进去拿地图、上厕所、看一眼当期小展览，' +
          '但它不是一个需要排时间的地方；' +
          '<strong>而且它的开放时间比墓园本身短得多，且在联邦假日闭馆——出发前请单独查一次。</strong>',
        '<strong>餐饮与卫生间，这一站要提前解决：园内没有任何餐饮设施，也没有自动售货机，请自带饮水。</strong>' +
          '（园内明文禁止野餐，所以也不要指望坐下来吃东西。）' +
          '<strong>公厕在主门附近的 Modern Chapel、Fort Hamilton 门的 Gatehouse，以及 Green-House 游客中心</strong>；' +
          '<strong>各处公厕的季节性开放钟点园方未逐处公布——未能从官方渠道确认</strong>，' +
          '进门时顺口问一下门房是最省事的办法。' +
          '<strong>吃饭请出门解决，而且出门就是两条极好的食街</strong>：' +
          '主门外的 <strong>Fifth Avenue 往南（Sunset Park 一侧）是布鲁克林最密的墨西哥与中美洲食街</strong>' +
          '（taqueria、tortilleria 成排，价格低廉）；' +
          '再往西两个街区的 <strong>Eighth Avenue 是布鲁克林的华人社区主街</strong>，' +
          '粤式与福州菜馆、点心铺与生鲜市场从 40th Street 一直排到 60th Street，' +
          '<strong>从 D／N／R 线 36th Street 站或 Sunset Park 门出来都很近</strong>。' +
          '这两条街都比墓园本身更能说明今天的布鲁克林是什么样子'
      ],
      photo: '建筑 <strong>5/5</strong>，秋色 <strong>4.5/5</strong>，风光 <strong>3.5/5</strong>，人像 <strong>1/5</strong>。' +
        '大门本体给满分——它的细节密度（飞扶壁、尖塔、四组浮雕、钟塔）能单独撑起半天。' +
        '<strong>人像给 1 分不是审美判断而是规则问题：园方明文「请不要带道具与真人模特」</strong>，' +
        '这里不适合做任何计划性人像。' +
        '风光扣分因为 Battle Hill 看 One World Trade Center 是 342.1°、6,494 米、' +
        '<strong>塔尖仰角只有 4.8 度</strong>——这个天际线视角很扁，需要长焦和极通透的空气才成立。',
      shots: [
        {
          name: '25th Street 主门（哥特门塔正立面）',
          park: [40.659010, -73.995613],
          view: [40.659010, -73.995613],
          desc: '<strong>上午 08:30–10:30 最好</strong>：主门朝西北，' +
            '<strong>但门塔与浮雕所在的立面高、上半截在上午会被东南方的太阳斜照亮</strong>，' +
            '深凹山花里的浮雕这时有最强的立体感——' +
            '正午顶光会把浮雕压平，傍晚整个立面进入阴影。' +
            '<strong>24–35mm</strong> 从 25th Street 对面人行道正面拍两道尖拱加钟塔全貌' +
            '（需要退到马路对面才装得下 106 英尺的塔）；' +
            '<strong>85–200mm</strong> 单独拍四组浮雕与飞扶壁的交接；' +
            '<strong>300–600mm</strong> 拍尖顶上的和尚鹦鹉。' +
            '<strong>竖幅优于横幅</strong>，因为主体是一座向上堆叠的塔。' +
            '坐标为 OSM 标注的 Main Entrance 节点，<strong>R 线 25th Street 站就在正对面</strong>。'
        },
        {
          name: 'Battle Hill · Altar to Liberty: Minerva（雕像与天际线）',
          view: [40.657254, -73.989370],
          desc: '<strong>清晨 07:00–08:30 是唯一正确的时段，而且只在 9 月成立。</strong>' +
            '原因是几何：从 Battle Hill 看 Manhattan 是方位 342.1°，' +
            '你看到的是楼群的南南东立面；' +
            '<strong>清晨太阳在方位 91–104°，正好把这些立面正面照亮；' +
            '而傍晚太阳在 256–269°，这些立面全部落入阴影</strong>。' +
            '问题是<strong>主门 4 月 1 日至 9 月 30 日 07:00 开，而 10 月 1 日至次年 3 月 31 日要到 08:00 才开' +
            '（2026 年 9 月 14 日据官方 Hours &amp; Directions 页查实，原先标注的「未公布，估计」已可撤销）</strong>，' +
            '而十月下旬的日出已经到 07:15 前后——<strong>秋冬季来这里就拿不到晨光了，' +
            '晨光版只在 4 月至 9 月成立</strong>。' +
            '<strong>200–400mm</strong> 压缩 6.5 公里外的 One WTC 与 Minerva 的青铜背影同框' +
            '（这是这里最值得做的一张：1920 年的雕像凝视 2014 年的塔）；' +
            '<strong>35–85mm</strong> 拍雕像与祭坛本体加秋树。' +
            'Battle Hill 观景点节点在约 40.657187, -73.989644，相距十几米。'
        },
        {
          name: 'Sylvan Water 岸边（水面倒影 + 秋树）',
          view: [40.653715, -73.998601],
          desc: '<strong>清晨 07:30–09:00（无风、倒影完整）或 17:00–17:45（暖光、逆光透叶）。</strong>' +
            '这是园内最大的一片水面，四周环绕成熟落叶乔木与维多利亚墓碑，' +
            '<strong>是「有骨架的秋色」这个说法最容易兑现的地方</strong>。' +
            '<strong>24–70mm</strong> 压低到水面高度让倒影占下半、对岸树冠与墓碑天际线压在上三分之一；' +
            '<strong>70–200mm</strong> 挑一座方尖碑配它背后的红枫做「一碑一树」的极简构图。' +
            '<strong>偏振镜反着用</strong>：转到反光最强的角度保住倒影而不是消掉它。' +
            '此处距主门约 900 米、有明显起伏，<strong>建议开车过来（园内免费停车）</strong>。'
        },
        {
          name: 'Historic Chapel 与 Valley Water 一带',
          view: [40.656346, -73.995305],
          desc: '<strong>下午 15:30–17:00。</strong>' +
            'Historic Chapel 是 1911 年 Warren &amp; Wetmore（Grand Central Terminal 的建筑师）的作品，' +
            '印第安纳石灰岩、平面近正方、上覆一座小穹顶，' +
            '<strong>体量小但细部极精，正好补足主门那种宏大尺度之外的另一档</strong>。' +
            '<strong>35–85mm</strong> 拍礼拜堂全貌加周围秋树；' +
            '<strong>85–200mm</strong> 拍石雕细部与穹顶。' +
            '往西北 200 米的 Valley Water（约 40.655671, -73.996525）可换水景，' +
            '往东南 550 米（方位 111.9°）就是 Battle Hill。' +
            '这一段的园区道路起伏明显，园方明确说明<strong>道路是人车共用的、请靠边走并注意来车</strong>。'
        }
      ],
      access: {
        visit: '<strong>只看主门与 Historic Chapel 30–40 分钟；步行走完三个重点 2–2.5 小时；' +
          '开车进去逛 1.5–2 小时；想按名人墓地图慢慢找人则要 3–4 小时。</strong>' +
          '分配（步行版，约 3.5 公里且持续起伏）：' +
          '主门的钟塔与四组浮雕 20 分钟（这一处细节密度高，别急着进门）+ ' +
          'Historic Chapel 15 分钟 + <strong>上 Battle Hill 与 Minerva 往返 40–50 分钟</strong>' +
          '（单程 543 米、持续上坡到海拔 66 米，这一段最消耗体力）+ ' +
          'Sylvan Water 岸边 20 分钟 + 沿途看墓葬建筑与老树 20 分钟。' +
          '<strong>开车版把上面三段之间的步行全部省掉，总时长压到 1.5 小时以内</strong>，' +
          '这是体力有限、带老人小孩或时间紧的人的正确选择——园内免费停车且园方明确欢迎自驾。' +
          '<strong>参加园方的导览车或主题步行导览的话按其公布时长（通常 1.5–2 小时）另算。</strong>' +
          '园方未公布官方建议时长，以上按 478 英亩的园区规模、主门到三个重点的实测距离' +
          '与持续起伏的地形推算',
        book: '<strong>自由参观不需预约</strong>。园方另有付费的导览车与主题步行导览，' +
          '那类活动需提前在 green-wood.com 订位',
        ticket: '<strong>免费</strong>。官方原文：「We\u2019re open 365 days a year, at no charge.」' +
          '<strong>园内停车也完全免费</strong>（官方原文「Free parking is available within Green-Wood」，' +
          '要求靠道路右侧停、禁止停在草地上）。' +
          '<strong>2026 年 9 月 14 日在 green-wood.com 复核，仍为免费开放。</strong>' +
          '园方的导览车与主题导览另行收费，价格逐场不同、以活动页为准',
        hours: '<strong>本项目的一个长期悬案，2026 年 9 月 14 日已经查实，结论和之前的两种猜测都不一样，请按新的写：' +
          '主门（Fifth Avenue &amp; 25th Street）的秋冬时刻表是每天 08:00–17:00，适用期为 10 月 1 日至次年 3 月 31 日。</strong>' +
          '官方原文（green-wood.com 的 Hours &amp; Directions 页）：' +
          '<strong>「Main Entrance (Fifth Avenue and 25th Street) 8 a.m. to 5 p.m. October 1 to Mar 31, every day / ' +
          '7 a.m. to 7 p.m. April 1 to September 30, every day」</strong>。' +
          '<strong>也就是说十月的闭园钟点是 17:00，比此前推测的 19:00 与 18:00 都更早</strong>——' +
          '此前那两种猜测正好把十月的日落时刻夹在中间，而真实答案落在两者之外，' +
          '<strong>整个十月的日落（月初约 18:38、月底约 18:02）都在闭园之后。</strong>' +
          '再叠上园方的硬规定——<strong>官方原文「always exit the premises at least ten minutes before the stated ' +
          'closing time, as the gates are closed and locked promptly on the hour」' +
          '（请至少提前 10 分钟离场，闸门准点上锁）</strong>——' +
          '<strong>实际上你 16:50 就得往门口走了。结论很明确：十月至次年三月来这里，' +
          '拿不到日落，也拿不到任何昏金光之后的时段，请把它当上午场或下午场安排。</strong>' +
          '万一被锁在里面，安保电话 <strong>347-865-4816</strong>。' +
          '<strong>其余三个门（同页口径）：Sunset Park 门（Fourth Avenue &amp; 35th Street）每天 08:00–16:00；' +
          'Fort Hamilton Parkway 门（Fort Hamilton Parkway &amp; Micieli Place）与 ' +
          'Prospect Park West 门（9th Avenue &amp; 20th Street）只在周末与「days of remembrance」开，' +
          '08:00–16:00</strong>——' +
          '官方把 days of remembrance 列为 Good Friday、Memorial Day、9 月 11 日、Veterans Day、' +
          'Thanksgiving、All Souls\u2019 Day、Christmas Eve 与 Christmas Day。' +
          '<strong>一处官方自相矛盾照实写出、不替你二选一：园方的 /hours 页与 /hours-directions-rules 页' +
          '对后三个门的说法不一致。</strong>' +
          '/hours 页只挂 4 月 1 日至 9 月 30 日那一季，并把 Sunset Park 门写成' +
          '「行人 08:00–19:00、车辆 08:00–16:00」、' +
          '把 Fort Hamilton 与 Prospect Park West 门写成「行人周一至周五 11:00–19:00、周六日 08:00–19:00，' +
          '车辆仅周六日 08:00–16:00」；' +
          '而 /hours-directions-rules 页给的是上面那份不分季节、也不分行人与车辆的简表。' +
          '<strong>两页对主门的说法是一致的（7–19 点夏季 / 8–17 点秋冬），' +
          '分歧只在次要入口——所以走主门就不会有问题，这也是推荐走主门的理由之一。</strong>' +
          '<strong>出发前若要用次要入口，请打 (718) 768-7300 或写 info@green-wood.com 问准当天该门开不开。</strong>' +
          '<strong>园内的 Green-House 游客中心钟点比墓园短得多、且逐季调整</strong>' +
          '（官网公布的 2026 年 4 月 18 日至 9 月 30 日档为周四至周一 10:00–19:00、周二周三闭馆），' +
          '<strong>10 月之后的 Green-House 钟点截至 2026 年 9 月 14 日官网尚未公布——未能从官方渠道确认</strong>；' +
          '它另有一份固定的联邦假日闭馆名单（含 New Year\u2019s Day、Martin Luther King Jr. Day、' +
          'Presidents\u2019 Day、Memorial Day、Juneteenth、Independence Day、Labor Day、' +
          'Indigenous Peoples\u2019 Day、Veterans Day、Thanksgiving Day 与 Christmas Day）',
        parking: '<strong>这是本区唯一一个开车明显优于地铁的点位</strong>，理由是园区面积：' +
          '478 英亩、地形起伏，从主门到 Battle Hill 543 米且要爬坡，到 Sylvan Water 约 900 米。' +
          '<strong>园方明确欢迎自驾并允许在园内任意处免费停车</strong>' +
          '（要求靠道路右侧停、不上草地、留出通行空间）。' +
          '地铁其实也极方便：<strong>R 线 25th Street 站就在主门正对面</strong>，' +
          '这是全区最省事的地铁接驳；<strong>D／N／R 线 36th Street 站</strong>' +
          '与 <strong>F／G 线 Fort Hamilton Parkway 站</strong>可从其他门进。' +
          '<strong>建议：只拍大门就坐 R 线；要拍 Battle Hill 与水景就开车</strong>',
        walk: '25th Street 站到主门 <strong>0–1 分钟，出站即到</strong>；' +
          '主门到 Historic Chapel 约 250 米／4 分钟；' +
          '<strong>主门到 Battle Hill 与 Minerva 约 543 米（方位 111.9°），步行 10–15 分钟且持续上坡至海拔 66 米</strong>；' +
          '主门到 Sylvan Water 约 900 米／13 分钟。' +
          '各入口均有免费地图，官网也有 PDF 版。' +
          '<strong>园内禁止自行车、滑板车与轮滑</strong>（入口有停车架）'
      },
      notes: [
        '<strong>摄影政策比传闻宽松：官方原文「We welcome and encourage you to take photos of ' +
          'Green-Wood for personal use」，而现行 Visitor Guidelines 全文没有一处提到三脚架。</strong>' +
          '需要书面同意的只有「拟用于出版或商业用途的专业摄影」与摄影机（(718) 768-7300）。' +
          '需要标注的灰区：该园 2010 年的旧摄影政策页把「灯具、支架及其他器材」归入专业摄影范畴，' +
          '<strong>「支架」是否涵盖普通三脚架，官方现行页面未作说明——未能确认</strong>。' +
          '低调架、不挡路，实际上不会有问题',
        '<strong>明文禁止：带道具与真人模特、无人机、宠物（导盲犬除外）、' +
          '自行车滑板轮滑、野餐、跑步与球类、大声喧哗。</strong>' +
          '另外<strong>禁止触摸或做墓碑拓印</strong>（很多碑已过百年、脆弱），' +
          '也不要坐、踩或倚靠墓碑与陵墓（有倾倒风险）',
        '<strong>这是一座仍在使用的公墓。</strong>你随时可能遇到正在进行的葬礼或来祭扫的家属。' +
          '遇到时请立刻放下相机、绕开、并且不要把镜头对向他们。' +
          '这是能不能长期保住「欢迎个人拍照」这条政策的关键',
        '<strong>园内道路人车共用</strong>，家属会开车找墓位。' +
          '园方明确要求行人尽量靠边走、留意来车，尤其是转弯处。' +
          '架三脚架时请完全离开车道',
        '<strong>秋冬的闭园钟点已经查实，请照这个排时间：10 月 1 日至次年 3 月 31 日主门每天 08:00–17:00，' +
          '加上园方要求提前 10 分钟离场，实际 16:50 就得往门口走。</strong>' +
          '（本条原先写的「十月闭园钟点未公布、可能是 18:00」已经过期，2026 年 9 月 14 日在官方 ' +
          'Hours &amp; Directions 页查到 10 月 1 日至 3 月 31 日的 08:00–17:00 原文，已更正。）' +
          '<strong>直接后果：整个秋冬季这里都拿不到日落——十月的日落在 18:02 到 18:38 之间，全在闭园之后。</strong>' +
          '请把这一站排成上午或下午场，' +
          '<strong>想在同一天接着看日落就去开到凌晨一点的 Prospect Park</strong>（两地隔着 Prospect Park West 门相邻）。' +
          '出发当天仍建议查一次 green-wood.com 或打 (718) 768-7300，节假日与特殊活动会有临时调整',
        '<strong>Battle Hill 的 Manhattan 视角很扁</strong>：' +
          'One WTC 仰角只有 4.8 度、距离 6.5 公里，' +
          '需要 200mm 以上以及非常通透的空气。' +
          '<strong>雨后第一个晴天是这里最好的机会</strong>，' +
          '普通秋日的霾会把 6.5 公里外的天际线洗成一片灰',
        '<strong>园区太大，务必在门口拿地图。</strong>478 英亩、道路蜿蜒且多为放射状，' +
          '手机地图在园内的路径规划经常不可用。四个入口与主门附近的 Modern Chapel、' +
          'Fort Hamilton 门的 Gatehouse 都有洗手间'
      ],
      images: [
        { url: 'img/green-wood-cemetery-gate-53784p-5c229a9c.jpg',
          cap: '25th Street 哥特复兴主门与钟塔 · Rhododendrites / CC BY-SA 4.0' },
        { url: 'img/green-wood-cemetery-gate-53753p-67b64453.jpg',
          cap: '主门尖拱与飞扶壁细部 · Rhododendrites / CC BY-SA 4.0' },
        { url: 'img/2015-green-wood-cemetery-gate-house-db396bf2.jpg',
          cap: '门侧的办公与礼拜堂翼楼 · Beyond My Ken / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'coney-island',
      n: 8,
      name: 'Coney Island · 木栈道与 Wonder Wheel',
      en: 'Coney Island · Riegelmann Boardwalk · Deno\u2019s Wonder Wheel · Cyclone · Parachute Jump',
      must: 3,
      score: 4,
      tldr: '1920 年的 Wonder Wheel、1927 年的木架 Cyclone、1939 年的跳伞塔挤在 500 米内，入园免费；<strong>但 Labor Day 之后只开周末与节日、十一月初收季</strong>，淡季来只剩栈道、水族馆与 Nathan\u2019s。',
      tags: [
        { t: '入园免费', c: 'free' },
        { t: '淡季仅周末与节日开', c: 'risk' },
        { t: '11 月初收季', c: 'risk' },
        { t: '水族馆全年开', c: 'paid' },
        { t: '地铁终点站直达', c: 'free' }
      ],
      highlights: [
        '<strong>先把最扫兴的结论说完：「亮着灯还在转的 Wonder Wheel」在 9/25–10/25 这整个窗口里一天都不存在。</strong>' +
          '原因不是日期挑得不对，是<strong>钟点根本对不上</strong>：' +
          'Deno\u2019s 官方日历里<strong>秋季每一个营业日都是 18:00 收摊</strong>，' +
          '而本窗口内最早的日落是 10/25 的 18:01、最晚是 9/25 的 18:47——' +
          '<strong>也就是说无论你哪天来，摩天轮都在太阳还没落下去的时候就已经停机清场了。</strong>' +
          '要赶上「Deno\u2019s 还在转 + 天已经黑」，得回到 9 月 8 日之前的夏季档（那时开到 22:00），' +
          '整个秋季窗口都没有这个机会',
        '<strong>但这里没有因此废掉，因为亮灯的园子是另一家。</strong>' +
          '有一个几乎所有攻略都写错的前提：<strong>Wonder Wheel 和 Cyclone 属于两家不同公司、日历与钟点都不同。</strong>' +
          'Wonder Wheel、Phoenix、Spook-A-Rama 在 <strong>Deno\u2019s Wonder Wheel Amusement Park</strong>（18:00 关）；' +
          'Cyclone、Thunderbolt、Tony\u2019s Express 在 <strong>Luna Park</strong>，' +
          '<strong>而 Luna Park 的 Halloween Harvest 十月周五开到 22:00、周末开到 20:00，都在日落之后</strong>。' +
          '所以<strong>「蓝调 + 亮灯 + 运转中的机械」这一帧在真实日期里是拿得到的，只是主角得换成 Cyclone 与 Thunderbolt</strong>，' +
          '而 Wonder Wheel 只能当一座停着的（是否仍亮灯未能确认）背景塔',
        'Deno\u2019s 官网已公布逐日 2026 日历，<strong>9/25–10/25 窗口内的营业日只有：' +
          '9/26–10/1（连续六天，Sukkot）、10/3、10/4、10/10、10/11、10/12、10/17、10/18、10/24、10/25</strong>，' +
          '其余全部闭园（含 9/25 与 10/2 两个周五，官网明确写 Closed）。' +
          '<strong>10/25 是 2026 赛季最后一天，11 月整月无营业日。</strong>' +
          '<strong>落到真实日期上：10/16（周五）Deno\u2019s 闭园、10/17 与 10/18 开，但都是 12:00–18:00。</strong>' +
          '详细日期与钟点见本区前置提醒',
        '<strong>Wonder Wheel 本身是一台 1920 年的机械异类，值得为它单独安排一次。</strong>' +
          '发明人 <strong>Charles Hermann</strong>，由 Eccentric Ferris Wheel Amusement Company 于 1918–1920 年建造，' +
          '<strong>1920 年 5 月 30 日 Memorial Day 开转，钢材是 Bethlehem 钢、在 Coney Island 的沙滩上现场锻造的</strong>。' +
          '高 <strong>150 英尺（46 米，相当于十五层楼）、重约 200 吨</strong>，' +
          '<strong>24 个吊舱里有 16 个是「摆动式」——它们沿蛇形轨道向轮心滑进、随轮转再甩向轮缘</strong>，' +
          '另外 8 个固定在轮缘上给你普通摩天轮的体验。' +
          '<strong>转一圈要整整 10 分钟</strong>（这个数字对长曝光很关键，见机位说明）。' +
          '发明人最初管它叫「Dip-the-Dip」，宣传语是同时给你缆车、摩天轮和滑水道三种刺激。' +
          '1983 年 6 月 7 日 Denos Vourderis 从 Fred Garms 手里买下它，' +
          '<strong>1989 年被定为纽约市地标，至今保持零事故记录</strong>',
        '<strong>Cyclone 是 1927 年的木制过山车，2026 年是它的 99 岁</strong>' +
          '（1927 年 6 月 26 日首航）。' +
          '首降 85 英尺、坡度约 58 度，全程 2,640 英尺，' +
          '<strong>1988 年被定为纽约市地标、1991 年列入国家史迹名录</strong>。' +
          '它归 Luna Park 管，所以<strong>日历要单独查</strong>',
        '<strong>Parachute Jump 是这片天际线的锚，而且它已经 58 年不动了。</strong>' +
          '发明人是海军中校 <strong>James H. Strong</strong>，由 Elwyn E. Seelye &amp; Company 结构设计，' +
          '<strong>1939–40 年纽约世界博览会上立在 Flushing Meadow，170 吨、262 英尺高</strong>，' +
          '当年在博览会上只比 Trylon 矮。世博结束后 1940–41 年迁到 Coney Island 的 Steeplechase Park，' +
          '<strong>1968 年停止运营，1989 年被定为纽约市地标</strong>。' +
          '它现在不载人，但<strong>装了 LED 照明、入夜后整塔变色</strong>——' +
          '<strong>而且它完全不受游乐场日历约束，任何一天的夜里都亮</strong>，' +
          '这是「园子没开」时的保底机位',
        '<strong>Riegelmann Boardwalk 的轴向给了一个可以精确到日的机会。</strong>' +
          '实测栈道走向是 <strong>83°／263°</strong>，' +
          '而本窗口内 <strong>10 月 6 日的日落方位是 263.6°、10 月 7 日是 263.2°、10 月 8 日是 262.7°</strong>——' +
          '<strong>也就是说 10 月 6–8 日这三天，落日会顺着木栈道的纵轴正对着你沉下去</strong>' +
          '（10/7 日落 18:29）。' +
          '需要诚实说明的代价：<strong>10 月 6–8 日是周二至周四，两家游乐场都不开</strong>，' +
          '所以那三天你能拿到的是「空栈道 + 沿轴落日 + Parachute Jump 剪影」，' +
          '拿不到亮灯的摩天轮。这两件事在本窗口内无法兼得'
      ],
      tour: [
        '<strong>季节决定这一站是什么，请先对日历再决定要不要来——这是本条目最重要的一句话。</strong>' +
          '<strong>五月底到 Labor Day（九月初）是旺季，两家游乐场每天营业、开到深夜，' +
          '摊档、啤酒摊、街头表演全在，那才是照片里的 Coney Island。</strong>' +
          '<strong>Labor Day 之后进淡季：游乐场只开周末与公众假日，多数小摊与游戏摊收季，' +
          '木栈道上的店铺一半上板。</strong>' +
          '<strong>十一月初整个游乐场季节结束，之后到次年春天这里只剩木栈道、沙滩、水族馆与 Nathan\u2019s。</strong>' +
          '<strong>2026 年的季末日期见下方 access.hours，逐年不同，将来的读者务必自己重查。</strong>' +
          '淡季来不是白来——空栈道、海风、几乎没人的沙滩、以及入夜后仍然整塔变色的 Parachute Jump 本身是一种题材，' +
          '<strong>但那是一个安静萧索的海滨，不是一个游乐场</strong>，来之前把期望值调对',
        '<strong>四样别错过，全部挤在 500 米之内，一条线走完约 1.3 公里、20 分钟：</strong>' +
          '①<strong>Deno\u2019s Wonder Wheel</strong>——<strong>1920 年 5 月 30 日开转的摩天轮，' +
          '高 150 英尺（46 米）、约 200 吨，钢材是 Bethlehem 钢、当年在这片沙滩上现场锻造的；' +
          '1989 年被定为纽约市地标，至今零事故</strong>。' +
          '它的机械设计是真正的异类：<strong>24 个吊舱里有 16 个是「摆动式」</strong>，' +
          '沿蛇形轨道向轮心滑进、再随轮转甩向轮缘，另外 8 个固定在轮缘上给普通摩天轮的体验。' +
          '<strong>转一圈整整 10 分钟，$10，是这一站最值得花的十美元</strong>；' +
          '②<strong>Coney Island Cyclone</strong>——<strong>1927 年 6 月 26 日首航的木制过山车，' +
          '首降 85 英尺、坡度约 58 度，全程 2,640 英尺；1988 年成为纽约市地标、1991 年列入国家史迹名录</strong>。' +
          '它在 Luna Park 里，和 Wonder Wheel 不是同一家公司；' +
          '③<strong>Parachute Jump</strong>——262 英尺、170 吨的钢塔，' +
          '原是<strong>1939–40 年纽约世界博览会上立在 Flushing Meadow 的跳伞塔</strong>，' +
          '世博结束后迁到这里，<strong>1968 年停止运营、1989 年定为纽约市地标</strong>。' +
          '现在不载人，但装了 LED，<strong>入夜后整塔变色，而且完全不受游乐场日历约束、任何一天都亮</strong>——' +
          '这是淡季来也一定看得到的一样东西；' +
          '④<strong>Riegelmann Boardwalk</strong>——2.5 英里的木栈道，宽阔、无台阶、可轮椅通行，' +
          '走完全程比逛游乐场更能理解这个地方',
        '<strong>三样全年开放、不受游乐场季节影响的，淡季来就靠它们撑起半天：</strong>' +
          '①<strong>New York Aquarium</strong>（602 Surf Avenue，WCS 运营，' +
          '就在木栈道东侧、从 Wonder Wheel 走过去八分钟）——<strong>每天开，票价与钟点见下方 access</strong>，' +
          '海狮剧场每天三场、有沙虎鲨与企鹅，<strong>官方自己给的建议时长是 2–2.5 小时</strong>，' +
          '这是淡季唯一一个能待够时间的室内选择，下雨天也是这一带唯一的退路；' +
          '②<strong>Nathan\u2019s Famous</strong>（1310 Surf Avenue，Surf 与 Stillwell 两条大道的转角）——' +
          '<strong>1916 年的原址店，一年 365 天营业</strong>（唯一一次被迫停业是 2012 年 Hurricane Sandy），' +
          '每年 7 月 4 日的吃热狗大赛就在这里办；' +
          '<strong>冬天室内照常营业，只有夏天才加开外面那排窗口</strong>。' +
          '菜单上有一样别处没有的：<strong>炸蛙腿，1950 年代至今只在这家店供应</strong>；' +
          '③<strong>沙滩与 Steeplechase Pier</strong>——伸进海里的木栈桥，免费，走到端头能回望整片天际线，' +
          '本地人一年四季在上面钓鱼',
        '<strong>可以跳过的：</strong>木栈道上那些打气球、投篮、砸地鼠的游戏摊（价格高、奖品廉价，' +
          '而且淡季多半关着）、Surf Avenue 上的纪念品店（T 恤与冰箱贴，与别处无差别）、' +
          '以及 MCU Park 的 Brooklyn Cyclones 小联盟棒球场（赛季九月初就结束了，之后只是一座空球场）。' +
          '<strong>Coney Island 的 sideshow 与 Coney Island Museum 是否开门逐季变动，去之前单独查一次</strong>；' +
          '省下的时间给水族馆或者干脆在栈道上多走一段',
        '<strong>人流与安全：旺季与淡季完全是两回事，请分开看。</strong>' +
          '<strong>旺季（尤其周末）Surf Avenue 与 West 10th 到 West 16th 之间的栈道核心段人挤人</strong>，' +
          '两园以家庭客为主、儿童密度极高，热门机械排队 20–40 分钟，注意随身财物。' +
          '<strong>淡季的非营业日夜里这一带会相当空</strong>——' +
          '<strong>独行者不建议在 20:00 之后往栈道东西两侧的僻静段走</strong>' +
          '（往东过 West 8th Street 或往西过 Parachute Jump 之后人就很少了），' +
          '也不要把器材或包放在无人看管的长椅上。' +
          '白天全年都没有问题，地铁终点站 Coney Island–Stillwell Avenue 始终有人。' +
          '另外<strong>海风比市区大得多、体感温度低五到八度</strong>，秋冬季来请按比市区多一层穿',
        '<strong>餐饮与卫生间：</strong>吃饭在这里不成问题，' +
          '<strong>Nathan\u2019s Famous 全年营业是这一带最可靠的一处</strong>；' +
          '木栈道上另有 Paul\u2019s Daughter、Tom\u2019s 等老摊与 Coney\u2019s Cones，' +
          '<strong>但这些多为季节性营业，淡季请不要指望</strong>。' +
          '<strong>想吃一顿正经饭，往东走二十分钟到 Brighton Beach</strong>——' +
          '<strong>那是纽约最大的俄语与乌克兰／中亚社区</strong>，' +
          'Brighton Beach Avenue 从 Coney Island Avenue 一直到 Brighton 14th Street 全是熟食店、' +
          '面包房与俄式餐厅，价格便宜、分量大，而且全年营业——' +
          '<strong>这是把这一站从「看两台老机械」变成「看一整片移民海滨」的关键一步，强烈建议加上</strong>。' +
          '<strong>公厕：</strong>NYC Parks 在木栈道沿线设有公厕（Stillwell Avenue 与 West 8th Street 一带各有一处），' +
          '<strong>但其季节性开放钟点未能从官方渠道确认</strong>；' +
          '可靠的替代是 Nathan\u2019s Famous 店内、New York Aquarium 内（需门票）' +
          '与两家游乐场内（营业日免票入园即可使用）'
      ],
      photo: '夜景与霓虹 <strong>4.5/5</strong>，人文 <strong>4.5/5</strong>，风光 <strong>3.5/5</strong>，人像 <strong>4/5</strong>。' +
        '亮灯营业时它的画面密度极高——1920 年的摩天轮、1927 年的木架过山车、1939 年的跳伞塔' +
        '挤在 500 米内，而且全部有 LED 照明。' +
        '<strong>整体扣分完全来自季节：本窗口有一多半的日子园子是关的</strong>，' +
        '那些日子这里会变成一个安静、空旷、略显萧索的海滨——那也是一种题材，' +
        '但不是你在照片里看到的那个 Coney Island。' +
        '风光分数一般是因为沙滩本身平淡，海滩朝正南、没有礁石或岬角这类前景。',
      shots: [
        {
          name: 'Wonder Wheel 正下方（蓝调慢门光轨）',
          view: [40.574041, -73.979145],
          desc: '<strong>坏消息先说：整个秋季（九月中下旬到十月底）这个机位都拍不成，请不要按它排时间。</strong>' +
            'Deno\u2019s 秋季每天 18:00 关园，而这段时间的日落是 18:01（10 月下旬）到 18:47（9 月下旬）——' +
            '<strong>蓝调开始时摩天轮已经停了、人也被请出去了。十月的任何一个周末都是如此，' +
            '而周五 Deno\u2019s 多半根本不开园。</strong>' +
            '<strong>要拿到「亮灯 + 运转 + 蓝调」，得回到 9 月上旬之前的夏季每日档（那时开到 22:00）。</strong>' +
            '<strong>关园后摩天轮的 LED 是否仍然亮着、能不能从园外当静态光源拍，未能从官方渠道确认' +
            '——想赌这一手请先打 (718) 372-2592 问清楚。</strong>' +
            '<strong>营业日里唯一还成立的版本是「白天／昏金光下转动的摩天轮」：' +
            '10/17 与 10/18 的昏金光 17:35 起、18:00 被清场，只有 25 分钟</strong>，' +
            '天还是亮的，拿到的是暖光打在轮辐上的立体感，不是光轨。' +
            '要真正的蓝调光轨，请改用 Luna Park 的 Cyclone 与 Thunderbolt（见下方机位）。' +
            '<strong>以下慢门参数留给夏季档（9 月 8 日前开到 22:00）或未来的行程，' +
            '因为快门要按转速算，这是这里最容易做错的一件事。</strong>' +
            'Wonder Wheel 转一圈 <strong>10 分钟</strong>，' +
            '轮缘线速度约 <strong>0.24 米／秒</strong>——' +
            '所以常见的「1/2 秒拍光轨」在这里<strong>完全拉不出轨迹</strong>（只移动 12 厘米）。' +
            '实用区间：<strong>4–15 秒</strong>出一段清晰的弧形光带；' +
            '<strong>20–30 秒</strong>让吊舱灯扫出接近连续的圆环。' +
            'f/8–f/11、ISO 100–200、三脚架加快门线。' +
            '想凝固轮体与霓虹细节则 1/15–1/60 秒、f/2.8、ISO 1600 手持。' +
            '焦段：<strong>14–24mm</strong> 贴到轮体基座下方仰拍让辐条呈放射状充满画面；' +
            '<strong>35–50mm</strong> 退到 30 米外把摩天轮与旁边的 Phoenix 过山车并置。' +
            '<strong>Phoenix 与 Thunderbolt 速度快得多，1/2–2 秒就有强烈拖影。</strong>'
        },
        {
          name: 'Riegelmann Boardwalk 西段（Parachute Jump 剪影与沿轴落日）',
          view: [40.573029, -73.983827],
          desc: '<strong>昏金光到蓝调：10/22 为 17:28–18:34，9/26 为 18:11–19:14。</strong>' +
            '栈道轴向实测 83°／263°，<strong>10 月 6–8 日日落方位 262.7–263.6°，' +
            '落日正好顺栈道纵轴沉下</strong>（10/7 日落 18:29）——' +
            '这三天用 <strong>24–50mm</strong> 沿栈道正西拍，' +
            '木板的透视线会把太阳一路引到画面消失点。' +
            '其他日期日落偏出轴线，改用 <strong>35–85mm</strong> 把 262 英尺的 Parachute Jump 塔' +
            '放在画面右侧当剪影主体、残霞铺在左侧。' +
            '<strong>200–400mm</strong> 可以压缩塔架的钢桁与远处 Verrazzano-Narrows Bridge。' +
            '<strong>Parachute Jump 的 LED 照明整夜都开、与游乐场日历无关</strong>，' +
            '所以蓝调 18:03–18:31（10 月下旬）在这里永远有东西可拍。' +
            '从这里看 Wonder Wheel 是方位 74.1°、411 米。'
        },
        {
          name: 'Coney Island Cyclone（木架结构与车厢拖影）',
          view: [40.574499, -73.977716],
          desc: '<strong>这是真实日期里唯一能拿到「亮灯 + 运转 + 蓝调」的机位，因为 Luna Park 的钟点跟 Deno\u2019s 完全不同。</strong>' +
            '<strong>10/16（周五）16:00–22:00 是三天里最好的一场：日落 18:14、暮光结束 18:41，' +
            '之后还有三个多小时的纯夜景营业时间，完全不必赶。' +
            '10/17 与 10/18 是 11:00–20:00，蓝调结束后仍有约 80 分钟余量。</strong>' +
            '<strong>昏金光 17:35–18:14（真实日期）／17:27–18:05（10/22 备用）拍白色木架结构</strong>——' +
            '低角度暖光会把 1927 年的木桁架照出立体的交叉阴影，这是它最好看的时候；' +
            '<strong>蓝调 18:14–18:41（10/16）／18:12–18:40（10/17）／18:11–18:38（10/18）拍亮灯版本</strong>。' +
            '<strong>70–200mm</strong> 从 Surf Avenue 一侧沿轨道方向拍，' +
            '<strong>1/500 秒以上凝固车厢</strong>（首降 85 英尺、坡度 58 度，速度很快），' +
            '或 <strong>1/15–1/8 秒追随</strong>拍出车厢与灯带的拖影。' +
            '<strong>16–35mm</strong> 贴到木架下方仰拍支撑柱阵列的重复韵律——' +
            '这是它区别于任何钢架过山车的地方。' +
            '往西 380 米是 Luna Park 的 Thunderbolt（约 40.574182, -73.982293）。'
        },
        {
          name: 'Steeplechase Pier（回望整片天际线）',
          view: [40.571077, -73.983655],
          desc: '<strong>蓝调，且这是唯一能把三个地标一次收进画面的机位。</strong>' +
            '走到伸入海里的木栈桥上回头往北拍，' +
            '<strong>Parachute Jump、Wonder Wheel、Cyclone 会在同一帧里横向排开</strong>，' +
            '前景是海水与桥桩。' +
            '<strong>24–50mm</strong> 拍完整天际线，<strong>70–200mm</strong> 压缩三个地标让它们看起来紧挨在一起。' +
            '<strong>需三脚架、2–15 秒</strong>；海面在长曝光下会抹平成雾状，' +
            '正好把注意力压到亮灯的建筑上。' +
            '<strong>桥面木板有缝隙且有涌浪传来的震动</strong>，请把三脚架的三只脚踩在同一块木板的实心处，' +
            '并在按快门后等 2 秒再曝光。潮位高时桥端浪花会打上来，注意器材防水。'
        }
      ],
      access: {
        visit: '<strong>只看三个地标加走一段栈道 60–90 分钟；营业日想坐几台机械 2.5–3.5 小时；' +
          '加上 New York Aquarium 则半天到一天（5–6 小时）。</strong>' +
          '分配：Wonder Wheel 25 分钟（排队 10–15 分钟 + <strong>转一圈整整 10 分钟</strong>）+ ' +
          'Cyclone 20 分钟（排队 + 一趟 1 分 50 秒）+ 沿木栈道走到 Parachute Jump 与 Steeplechase Pier 往返 30 分钟 + ' +
          'Nathan\u2019s Famous 吃一顿 30 分钟。' +
          '<strong>New York Aquarium 另算：官方 FAQ 给的建议时长是 2–2.5 小时。</strong>' +
          '<strong>往东加上 Brighton Beach 的食街再留 1.5–2 小时。</strong>' +
          '<strong>淡季（Labor Day 之后的非营业日）压到 45–60 分钟就够</strong>——' +
          '那时能看的只有栈道、沙滩、停着的机械与入夜后的 Parachute Jump。' +
          '游乐场未公布官方建议时长，以上按四个地标之间的实测距离（全程约 1.3 公里）' +
          '与各机械的运行时长推算；<strong>水族馆时长为官方口径</strong>',
        book: '<strong>两家游乐场都不需预约</strong>，现场买票或买手环即可。' +
          '<strong>New York Aquarium 必须提前在线购买指定日期票</strong>' +
          '（官方原文「All visitors must have a date-specific ticket. Every guest, every day」）；' +
          'WCS 会员日间常规参观自 2026 年 3 月 3 日起不再需要预约。' +
          '<strong>水族馆的周三下午免票场必须提前订</strong>，' +
          '官方规则是<strong>前一个周一 15:00 开放当周周三的名额、每单最多 4 张</strong>，' +
          '没有预约不要直接去',
        ticket: '<strong>以下于 2026 年 9 月 14 日在各官方页面复核。</strong>' +
          '<strong>两家游乐场都是免票入园</strong>（Deno\u2019s 官方原文' +
          '「Admission to Deno\u2019s Wonder Wheel Amusement Park is FREE at all times」），' +
          '设施按次单独计费。' +
          '<strong>Deno\u2019s 单项价（官网 Hours &amp; Ticket Info 页现行表）：' +
          'Wonder Wheel $10、Phoenix $10、Thunderbolt（音乐旋转）$10、Spook-A-Rama $8、' +
          '碰碰车 $8、Stop the Zombies $8、多数儿童设施 $5</strong>；' +
          '也可买点数包（<strong>$50／60 点、$90／125 点、$125／175 点</strong>，' +
          '每项机械按 5–10 点扣），现金与信用卡皆可。' +
          '<strong>Luna Park</strong> 另售当日无限次 Wristband，' +
          '官方 Wristbands 页原文「Valid Any Operating Day – Good for one public operating date between ' +
          'April 2 – November 1, 2026」，' +
          '<strong>即 2026 年整季通票的有效期到 11 月 1 日为止</strong>；' +
          'Halloween Harvest 的互动活动权益需搭配 Wristband，不含在单次票里。' +
          '<strong>New York Aquarium</strong>（602 Surf Avenue）分平峰与高峰两档：' +
          '<strong>成人（13 岁及以上）$29.95／$32.95、65 岁以上 $27.95／$29.95、' +
          '儿童（3–12 岁）$25.95／$27.95、2 岁及以下免费</strong>，WCS 会员免费；' +
          '票价含 4-D 影院一场。' +
          '<strong>水族馆每周三 15:00 之后免票（全年有效），但必须提前预约</strong>。' +
          '水族馆停车场 0–3 小时 $18、3–4 小时 $25、4 小时以上 $40，无大巴车位。' +
          '<strong>Nathan\u2019s Famous 与木栈道、沙滩、Steeplechase Pier 都不要钱</strong>',
        hours: '<strong>先记住一个几乎所有攻略都写错的前提：Wonder Wheel 和 Cyclone 属于两家不同的公司，' +
          '日历与钟点都不一样，必须分别查。</strong>' +
          'Wonder Wheel、Phoenix、Spook-A-Rama 在 <strong>Deno\u2019s Wonder Wheel Amusement Park</strong>；' +
          'Cyclone、Thunderbolt、Tony\u2019s Express、B&amp;B Carousell 在 <strong>Luna Park</strong>。' +
          '<strong>木栈道、沙滩、Steeplechase Pier 与 Parachute Jump 的夜间 LED 照明 24 小时不受游乐场日历限制。</strong>' +
          '<strong>两台老机械 2026 年的运营状态已确认正常：两园都在 2026 年 3 月 28–29 日开季，' +
          'Cyclone 在 2026 年是它的第 99 年（1927 年首航），Wonder Wheel 正常运转</strong>——' +
          '没有任何一台停运或大修。' +
          '<strong>2026 年季末日期，两园的核实结果不一样，照实分开写：</strong>' +
          '<strong>① Luna Park：2026 年 11 月 1 日是本季最后一个营业日</strong>，' +
          '依据是官方 Wristbands 页的原文「Good for one public operating date between April 2 – November 1, 2026」，' +
          '以及 Halloween Harvest 的官方活动期 <strong>2026 年 9 月 18 日至 11 月 1 日</strong>' +
          '（nyctourism.com 的官方活动条目与 Luna Park 活动页一致）。' +
          '<strong>② Deno\u2019s Wonder Wheel：2026 年的季末日期未能从官方渠道确认。</strong>' +
          '<strong>2026 年 9 月 14 日直接抓取 denoswonderwheel.com 的首页与 Hours &amp; Ticket Info 页，' +
          '页面文字只有三句：「Beginning May 25 through September 8, the park is open daily for the summer season」、' +
          '「Kiddie Park opens at 11:00 AM / Adult rides open at 12:00 PM」、' +
          '以及「Park Opens April 12. Depending on the day and the weather, park hours vary」。' +
          '页面上那个逐日营业日历是个脚本组件、抓取时没有渲染出内容，' +
          '所以本次无法复核九月八日之后的逐日营业日与闭园钟点。</strong>' +
          '<strong>官方另有一句必须记住的免责原话：' +
          '「Hours are subject to change based on weather and operating conditions」。</strong>' +
          '<strong>要用 Deno\u2019s 的当天钟点，请打 (718) 372-2592，或在出发当天用浏览器打开 ' +
          'denoswonderwheel.com/hours 看日历组件。</strong>' +
          '<strong>可以当作规律记住的几条（与两园历年做法一致，但每年请自行核对）：' +
          '五月底至 Labor Day 为每日营业的旺季；Labor Day 之后只开周末与公众假日；' +
          'Deno\u2019s 的开门时间是儿童区 11:00、成人机械 12:00；秋季的闭园钟点明显早于旺季，' +
          '旺季可以开到 22:00，秋季多在 18:00–20:00 之间收摊。</strong>' +
          '<strong>这条规律有一个对傍晚到访的人很要紧的后果：' +
          '十月的日落在 18:02 到 18:38 之间，而秋季的游乐场经常在 18:00 前后就清场，' +
          '所以「亮着灯还在转的机械 + 天已经黑」这一幕在秋季很可能拿不到。' +
          '想看亮灯运转的游乐场，请安排在夏季档，或者挑 Luna Park 公布的延长营业日' +
          '（历年万圣节当天与十月的周五常有夜场）。</strong>' +
          '<strong>New York Aquarium（全年每天开，不受游乐场季节影响，2026 年 9 月 14 日复核）：' +
          '官方原文「September 8 — October 31, 2026：Daily 10:00 AM–4:00 PM，Park closes at 5:00pm」' +
          '（即 10:00 开门、16:00 停止入场、17:00 闭园）；' +
          '「November 1, 2026 — March 2027：Daily 10:00 AM–3:30 PM，Park closes at 4:30pm」；' +
          '夏季档「May 23 — September 7, 2026：Daily 10:00 AM–5:00 PM，Park closes at 6:00pm」。' +
          '停车场比水族馆早半小时开（09:30）。</strong>' +
          '<strong>Nathan\u2019s Famous（1310 Surf Avenue）一年 365 天营业</strong>，' +
          '室内全年供餐，夏季另加开外侧窗口；' +
          '<strong>其逐日钟点官方网站未公布，第三方登记为每日 10:00–23:00、周五周六至 24:00' +
          '——未能从官方渠道确认，以现场为准</strong>',
        parking: '<strong>这是本区第二个开车不吃亏的点位</strong>：' +
          'Surf Avenue 沿线与 MCU Park（Brooklyn Cyclones 球场）一带有多个大型商业停车场，' +
          '<strong>秋季淡季（尤其非营业日）车位充裕</strong>，' +
          '这与 DUMBO、Brooklyn Heights 的情况完全相反。' +
          '但地铁同样极方便：<strong>D／F／N／Q 四条线的终点站 Coney Island–Stillwell Avenue</strong>' +
          '就在 Surf Avenue 上，出站步行 5 分钟即到 Wonder Wheel。' +
          '<strong>建议：如果要拍到蓝调之后（20:00 以后）且带三脚架，开车更省心；' +
          '否则地铁完全够用</strong>——终点站始终有车、座位有保障',
        walk: 'Stillwell Avenue 站到 Wonder Wheel 约 <strong>400 米／5 分钟</strong>；' +
          'Wonder Wheel 到 Cyclone 约 130 米／2 分钟；' +
          'Wonder Wheel 到 Parachute Jump 约 460 米／6 分钟（沿木栈道，全程平坦）；' +
          'Parachute Jump 到 Steeplechase Pier 端头约 250 米／4 分钟。' +
          '<strong>四个机位串起来约 1.3 公里、走完 20 分钟</strong>，' +
          '木栈道宽阔无台阶、可轮椅通行'
      },
      notes: [
        '<strong>只记一句话：来 Coney Island 拍夜景就定 10 月 16 日（周五）傍晚，目标是 Luna Park 不是 Wonder Wheel。</strong>' +
          'Luna Park 那天 16:00–22:00，日落 18:14、暮光结束 18:41，' +
          '<strong>整个蓝调加三个多小时夜场全在营业时间内，是三天里唯一不用赶的一场</strong>。' +
          '10/17 与 10/18（周六日）Luna Park 11:00–20:00 也够用，只是收尾早两小时',
        '<strong>原先这里写的「把日期定在 9 月 26 日周六就能拍到亮灯运转的 Wonder Wheel」是错的，已更正。</strong>' +
          '那天 Luna Park 确实开到 22:00，但 <strong>Deno\u2019s 一样是 18:00 关，而 9/26 日落 18:47</strong>——' +
          '摩天轮比太阳还早下班 47 分钟。' +
          '<strong>这条对整个 9/25–10/25 窗口都成立，没有哪个日期能绕开。</strong>' +
          '想要亮灯转动的 Wonder Wheel，只能挑 9 月 8 日之前的夏季档',
        '<strong>Deno\u2019s 关园后（或在它的非营业日），请重新设定这一站的目标</strong>：' +
          '拍 Luna Park 亮灯运转的 Cyclone 与 Thunderbolt、拍空栈道、拍 Parachute Jump 的 LED、拍沙滩与桥桩。' +
          '<strong>除 Cyclone 外这些都不依赖任何游乐场日历。</strong>' +
          '<strong>10 月 6–8 日虽然两园都关着，' +
          '但落日正对栈道纵轴，是那三天独有的补偿</strong>',
        '<strong>快门速度别照抄一般摩天轮的经验。</strong>' +
          'Wonder Wheel 转一圈 10 分钟、轮缘线速度只有约 0.24 米／秒，' +
          '<strong>1/2 秒完全拉不出光轨</strong>。要 4 秒以上才有弧线、20–30 秒才成圆环',
        '<strong>木栈道有缝隙、有海风、有涌浪震动。</strong>' +
          '三脚架请踩在木板实心处、挂重物、按快门后等 2 秒再曝光；' +
          '海边盐雾对镜头与卡口不友好，收工后擦拭',
        '<strong>入夜后的治安需要基本常识。</strong>' +
          'Surf Avenue 与木栈道核心段（West 10th 到 West 16th）在营业日人流充足；' +
          '<strong>非营业日的夜晚这一带会相当空</strong>，' +
          '独行者不建议在 20:00 后往东西两侧的僻静段走，也不要把器材放在无人看管的长椅上',
        '<strong>Luna Park 与 Deno\u2019s 的 Halloween Harvest 装饰从 9 月 18 日起就位</strong>，' +
          '南瓜、稻草与穿戏服的员工是免费的额外题材，' +
          '<strong>但相关的互动活动需要购买 Wristband</strong>',
        '两园都是家庭客为主、儿童密度极高。' +
          '<strong>架三脚架请贴边、别横在通道上</strong>，' +
          '并注意别把陌生儿童拍成画面主体'
      ],
      images: [
        { url: 'img/wonder-wheel-and-thunderbolt-at-night-coney-island-brooklyn-724640f6.jpg',
          cap: '夜间亮灯的 Wonder Wheel 与 Thunderbolt · Amaury Laporte / CC BY 4.0' },
        { url: 'img/parachute-jump-on-coney-island-01d12d00.jpg',
          cap: '262 英尺的 Parachute Jump 塔 · Rhododendrites / CC BY-SA 4.0' },
        { url: 'img/steeplechase-pier-facing-coney-island-boardwalk-a36d995f.jpg',
          cap: '自 Steeplechase Pier 回望木栈道与天际线 · Rhododendrites / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'brooklyn-museum',
      n: 9,
      name: 'Brooklyn Museum 布鲁克林美术馆',
      en: 'Brooklyn Museum · The Dinner Party · Egyptian Galleries',
      must: 4,
      score: 2.5,
      tldr: '纽约第二大美术馆，<strong>建议捐赠制（成人建议 $20，到人工窗口可自定金额）</strong>；Judy Chicago《The Dinner Party》与美国第一流的埃及收藏都在常设展里。<strong>周一、周二闭馆。</strong>',
      tags: [
        { t: '建议捐赠制', c: 'paid' },
        { t: '周一周二闭馆', c: 'risk' },
        { t: '地铁出站即到', c: 'free' },
        { t: '19 岁以下免费', c: 'free' },
        { t: '室内·不适合拍照', c: 'risk' }
      ],
      highlights: [
        '<strong>这是纽约市第二大的美术馆（仅次于 The Met），但它最值得讲的一件事是它没建成的那个版本。</strong>' +
          '1897 年开馆，建筑师是 <strong>McKim, Mead &amp; White</strong>（Beaux-Arts 的头号事务所），' +
          '而他们当年画的方案是一座<strong>会成为当时世界最大博物馆的建筑</strong>——' +
          '结果<strong>只建成了大约六分之一</strong>，布鲁克林 1898 年并入纽约市，' +
          '独立市政的野心随之终止。' +
          '所以你今天看到的这栋巨楼其实是一个残篇；' +
          '<strong>Eastern Parkway 正面那排科林斯柱与顶部一排代表文明的雕像，' +
          '是原方案留下来的唯一完整段落</strong>。' +
          '2004 年加的那个玻璃穹顶门廊（Polshek Partnership 设计）与老立面的关系至今仍有争议，' +
          '站在马路对面一眼就能看出两个时代',
        '<strong>Judy Chicago 的《The Dinner Party》（1974–79）是这里的头号常设展品，在四楼。</strong>' +
          '它是一张<strong>三角形的宴会长桌，摆了 39 套餐位，每一套纪念一位历史上的女性</strong>：' +
          '手工刺绣的桌旗、金质酒杯与餐具、以及<strong>以蝴蝶与女性身体为母题、' +
          '按被纪念者所处时代的风格彩绘的瓷盘</strong>。' +
          '桌下那片白瓷地砖上<strong>另有 999 个女性的名字以金色写就</strong>，合计 1,038 人。' +
          '<strong>这件作品当年被一位美国国会议员公开骂成「3-D 立体陶瓷色情」</strong>，' +
          '但观众从来很买它的账；' +
          '2002 年 Elizabeth A. Sackler 基金会买下它捐给本馆，' +
          '<strong>条件是馆方必须为它建一个女性主义艺术中心</strong>——' +
          '<strong>于是有了 Elizabeth A. Sackler Center for Feminist Art，' +
          '那个房间就是专门为这张桌子造的</strong>，' +
          '低照度与镜面墙都是为保护与放大它而设计的。2007 年 3 月起永久陈列',
        '<strong>三楼的埃及馆是全美最好的几个之一，而且它的来路很值得知道。</strong>' +
          '馆藏从 1902 年开始积累，' +
          '<strong>1916–1947 年间收进了美国第一代埃及学者 Charles Edwin Wilbour（1833–1896）的全部收藏</strong>，' +
          '并靠他家人设立的 Charles Edwin Wilbour Fund 建起了一座' +
          '<strong>世界一流的埃及学专业图书馆与一个独立的策展部门</strong>；' +
          '1948 年又从 New-York Historical Society 一次性买进两千余件。' +
          '<strong>现在 Martha A. and Robert S. Rubin Galleries 里有 1,200 余件在展</strong>，' +
          '时间跨度从公元前 3500 年的前王朝期一直到科普特与拜占庭时期。' +
          '必看的几件：<strong>贴金木雕的 Amunhotep III 小像</strong>、' +
          '<strong>中王国时期一位公主的绿泥石头像</strong>、' +
          '<strong>Ankhnes-meryre 王后抱着幼子 Pepy II 的雕像</strong>，' +
          '以及<strong>那尊五千多年前的陶塑女像「Bird Lady」</strong>——' +
          '后者是全馆最出名的一件东西。另有专门讲 Tutankhamun 少年时期与 Amarna 城的展区。' +
          '本馆自 1976 年起在 Karnak 的 Mut 女神神域持续做考古发掘，' +
          '<strong>这是一座还在自己挖东西的博物馆</strong>',
        '<strong>五楼的美国艺术部分有一个纽约少见的做法：Luce Center for American Art 是「可见库房」</strong>，' +
          '把平时锁在库里的几千件藏品排在玻璃柜里全部摊开给你看，' +
          '不做策展叙事、只按类别密集堆放。' +
          '喜欢这种看法的人会在这里耗掉一小时，不喜欢的人五分钟就走——' +
          '<strong>它是本馆最两极的一个区域，但值得进去站两分钟看看你属于哪一类</strong>。' +
          '同层另有一批美国装饰艺术的「时期房间」（把整间 17–19 世纪的房间拆来原样重装）',
        '<strong>非洲艺术收藏是这座馆在学术史上真正的一笔：' +
          '它是全美第一个把非洲物件当作「艺术」而非「人类学标本」来展出的博物馆（1923 年）。</strong>' +
          '这个决定在当时是异端，后来成了整个美国博物馆界的通例。' +
          '此外馆方长期以大体量的当代与流行文化特展著称' +
          '（历年办过 Jean-Paul Gaultier、David Bowie、Virgil Abloh 等），' +
          '<strong>这类特展需另买定时票、且是全馆人最多的地方</strong>，' +
          '来之前先看一眼当期在展什么，它会显著改变你这一趟的体验'
      ],
      tour: [
        '<strong>五层楼、体量很大，不要从一楼开始顺着往上走——那样走到三楼就累了，而重头戏在三楼和四楼。</strong>' +
          '<strong>推荐做法：进门买好票后直接坐电梯上到最高层，然后一层一层往下走。</strong>' +
          '顺序建议：<strong>五楼（美国艺术与 Luce Center 可见库房）→ 四楼（' +
          '<strong>Elizabeth A. Sackler Center for Feminist Art 与《The Dinner Party》</strong>，' +
          '以及装饰艺术）→ 三楼（<strong>埃及馆与欧洲绘画</strong>）→ 二楼（亚洲与伊斯兰艺术）→ ' +
          '一楼（非洲艺术、大堂与当期特展）</strong>。' +
          '<strong>时间只有一个半小时就只做四楼和三楼</strong>，其余全部放弃',
        '<strong>两样绝对不能错过，它们是这座馆不可替代的部分：</strong>' +
          '①<strong>四楼的《The Dinner Party》</strong>——请按「至少 25 分钟」来准备。' +
          '<strong>房间刻意做成低照度，进去后先站着让眼睛适应一分钟，否则盘面上的彩绘细节看不出来。</strong>' +
          '看法：先绕三角桌走一整圈把 39 套餐位过一遍，' +
          '再回到你有感觉的那几套前面细看瓷盘与刺绣桌旗（<strong>每一套的图样风格都对应那位女性所处的年代</strong>），' +
          '最后低头看桌下那片写着 999 个名字的白瓷地砖。' +
          '房间外圈的 Herstory Gallery 是轮换展，讲桌上那些人的故事，有兴趣再加 15 分钟；' +
          '②<strong>三楼 Rubin Galleries 的埃及馆</strong>——1,200 余件，' +
          '按时间顺序从前王朝期排到罗马时期，<strong>顺着走就行，不需要跳</strong>。' +
          '<strong>务必找到那尊五千多年前的陶塑「Bird Lady」</strong>（举着双臂、没有面部细节的女像），' +
          '以及 Ankhnes-meryre 王后抱着幼子 Pepy II 的那尊、' +
          '还有贴金的 Amunhotep III 小像。' +
          '<strong>Tutankhamun 少年时期与 Amarna 的两个专题展区是本馆的强项，别当过道穿过去</strong>',
        '<strong>可以跳过的：</strong>二楼的伊斯兰与亚洲艺术（体量不大、精品不多，' +
          '同类东西 The Met 的规模是它的十倍以上，' +
          '<strong>如果你这趟纽约还要去 The Met，这两层可以整层跳过</strong>）；' +
          '五楼的时期房间（除非你专门对美国装饰艺术有兴趣）；' +
          '以及一楼大堂的建筑与设计小展区。' +
          '<strong>Luce Center 的可见库房属于「进去站两分钟决定去留」的类型。</strong>' +
          '省下的时间请给《The Dinner Party》与埃及馆，' +
          '或者直接留给隔壁的 Brooklyn Botanic Garden',
        '<strong>票务与排队的实际流程，这里有一个容易多花钱的坑：</strong>' +
          '<strong>常设展是建议捐赠制（pay what you can），但官方明确写了' +
          '「在网上或馆内自助机购票即视为同意支付全额建议金额」——' +
          '想按自己的能力付，必须走到大堂里的人工 Admissions Desk（Admissions Desk 那一条队）。</strong>' +
          '换句话说<strong>网上买票等于按 $20 付，现场人工窗口才能少付</strong>。' +
          '主入口在 Eastern Parkway 那一侧，进门穿过大堂就是售票台。' +
          '<strong>当期的重磅特展是另一回事：固定票价、15 分钟一档的定时入场，' +
          '且票价已含常设展入场</strong>，这种票建议提前在线买，热门展会售完。' +
          '人最少的时段是<strong>周三与周四的开门后一小时（11:00–12:00）</strong>；' +
          '周末下午与「First Saturdays」（每月第一个周六晚间的免费大型活动，' +
          '<strong>只在部分月份举办</strong>）是全馆最挤的时候——' +
          '<strong>想安静看画千万避开 First Saturday，想看布鲁克林人怎么过夜生活就专门冲它去</strong>',
        '<strong>餐饮与卫生间：</strong>馆内有咖啡馆（在一楼），' +
          '<strong>但它的营业时间与美术馆不同步、由馆方另行公布，请在 brooklynmuseum.org 单独查一次</strong>；' +
          '不想赌的话，<strong>出门往北走 Washington Avenue 或往西走 Vanderbilt Avenue</strong>，' +
          '那两条街（Prospect Heights 一侧）是布鲁克林餐饮密度最高的地段之一，走五到十分钟就有一排选择。' +
          '<strong>洗手间在各层都有，一楼大堂旁那一处最好找。</strong>' +
          '馆内有免费衣帽寄存，<strong>大件包与背包按规定必须寄存</strong>，进门先办这件事能省事',
        '<strong>和隔壁 Brooklyn Botanic Garden 连着做是这一带最合理的一天</strong>：' +
          '两家只隔 990 Washington Avenue 一条路，官方有 <strong>Museum &amp; Garden Pass</strong> 联票' +
          '（在美术馆或线上买，凭票根当日进植物园；<strong>不含特展与 First Saturdays</strong>；' +
          '官方供应期为 3 月初至 11 月初）。' +
          '<strong>先对日历：美术馆周一与周二都闭馆、植物园只闭周一，所以联票只在周三至周日成立。</strong>' +
          '顺序建议<strong>上午先逛植物园（它 10:00 开、18:00 关，且专类园提前清人）、' +
          '下午进美术馆（它 11:00 才开、18:00 关）</strong>，两边的钟点正好接得上；' +
          '两馆合计请留 5–6 小时'
      ],
      photo: '建筑 <strong>3/5</strong>，室内 <strong>2/5</strong>。' +
        '<strong>这是一个「必去但不好拍」的条目，请按这个预期来</strong>：' +
        '馆内允许个人非商业拍照（禁闪光灯与三脚架，部分借展作品与特展另有禁拍标识，以现场牌子为准），' +
        '但常设展的照明是为保护文物做的、普遍偏暗，' +
        '<strong>《The Dinner Party》所在的房间更是刻意压暗加镜面墙，手持基本拍不出可用的东西</strong>。' +
        '真正能拍的是 Eastern Parkway 那排科林斯柱与顶部雕像，以及 2004 年那个玻璃门廊。' +
        '这一站的价值在于看，不在于拍。',
      shots: [
        {
          name: 'Eastern Parkway 正面（Beaux-Arts 立面与玻璃门廊）',
          view: [40.670955, -73.963295],
          desc: '<strong>上午 09:00–11:00</strong>：立面朝北偏西，' +
            '上午东南方的低角度光会擦过柱头与顶部那排文明雕像，把 McKim, Mead &amp; White 的线脚打出层次。' +
            '<strong>需要退到 Eastern Parkway 马路对面的中央步道上才装得下整条立面</strong>，' +
            '<strong>24–35mm</strong> 拍全貌（横幅），' +
            '<strong>85–200mm</strong> 单独压缩顶部的雕像群与柱头细部。' +
            '构图上最值得做的一件事是<strong>让 2004 年的玻璃门廊与 1897 年的石砌立面同框</strong>，' +
            '两个时代的接缝本身就是这栋楼最大的话题。' +
            '坐标为 Nominatim 反查到的 Brooklyn Museum 建筑节点（200 Eastern Parkway）；' +
            '<strong>2／3 线 Eastern Parkway–Brooklyn Museum 站的出口就在正门台阶下</strong>。'
        }
      ],
      access: {
        visit: '<strong>2.5–4 小时是主流走法；只看《The Dinner Party》与埃及馆 75–90 分钟；' +
          '想连一个大型特展一起看则 4–5 小时。</strong>' +
          '分配：<strong>四楼《The Dinner Party》25–35 分钟</strong>（含绕桌一圈 + 细看数套餐位 + ' +
          '外圈 Herstory Gallery）+ <strong>三楼埃及馆 45–60 分钟</strong>（1,200 余件在展，' +
          '按时间顺序走完不跳）+ 五楼美国艺术与 Luce Center 可见库房 30 分钟 + ' +
          '一楼非洲艺术 20 分钟 + 二楼亚洲与伊斯兰 20 分钟（这一段可整层跳过）。' +
          '<strong>当期特展另加 45–75 分钟。</strong>' +
          '<strong>加上隔壁 Brooklyn Botanic Garden 做成一整天，合计留 5–6 小时。</strong>' +
          '馆方未公布官方建议时长，以上按五个楼层的展厅数量、' +
          '两处核心常设展的展件数与馆内步行距离推算',
        book: '<strong>常设展不强制预约</strong>，但官方建议提前购票' +
          '（原文「We recommend purchasing tickets in advance. A limited number of tickets are ' +
          'reserved for same-day purchase at the Museum」），' +
          '现场另留有一定数量当日票，馆内也有自助购票机。' +
          '<strong>常设展票不限时段，当天开放时间内任意时间进场即可。</strong>' +
          '<strong>需另买票的特展是 15 分钟一档的定时入场，热门展会提前售完，务必线上先订</strong>；' +
          '会员免费且不限时段。' +
          '<strong>要按建议捐赠制自定金额的人不要在线上买票——必须到馆内人工窗口办，见下方票价那条。</strong>',
        ticket: '<strong>常设展是建议捐赠制（pay what you can），官方建议金额（2026 年 9 月 14 日在 ' +
          'brooklynmuseum.org/visit/tickets 的 Admission Prices 表逐行复核）：</strong>' +
          '<strong>成人 $20；65 岁以上 $14；20 岁以上持证学生 $14；身障访客 $14（陪护人免费）；' +
          '13–19 岁免费；4–12 岁免费；会员免费。</strong>' +
          '<strong>回答本项目原先的疑问：2026 年仍是建议捐赠制，没有改成固定票价。</strong>' +
          '<strong>但有一个必须知道的限制，官方原文写得很直白：' +
          '「By purchasing tickets online or at a kiosk, you agree to pay the full suggested amount. ' +
          'Visit our Admissions Desk to pay what you can.」' +
          '——线上或自助机购票即视为按全额建议金额支付，想自定金额必须走馆内的人工 Admissions Desk。</strong>' +
          '<strong>需另买票的特展是固定票价、不可自定：成人 $30、65 岁以上 $21、' +
          '20 岁以上学生 $21、13–19 岁 $21、4–12 岁 $12，' +
          '且票价已包含常设展入场</strong>（所以打算看特展的人不必另买常设展票）。' +
          '会员可享额外访客票 30% 折扣。' +
          '<strong>与隔壁植物园的 Museum &amp; Garden Pass 联票</strong>：' +
          '在美术馆或线上购买，凭票根当日进植物园，' +
          '<strong>官方供应期为每年 3 月初至 11 月初，不含特展与 First Saturdays</strong>',
        hours: '<strong>官方原文：「Monday–Tuesday Closed / Wednesday–Sunday 11 am–6 pm」' +
          '（周一、周二闭馆；周三至周日 11:00–18:00）。' +
          '另闭 Thanksgiving、Christmas 与 New Year\u2019s Day。</strong>' +
          '<strong>2026 年 9 月 14 日在 brooklynmuseum.org/visit 与 /visit/faqs 两页复核，口径一致。</strong>' +
          '<strong>请特别注意「周一周二都闭馆」这一条</strong>——' +
          '本手册原先在植物园条目里误记为「只闭周二」，已一并更正；' +
          '<strong>它直接决定了和隔壁植物园的联票只在周三至周日成立</strong>（植物园只闭周一）。' +
          '<strong>First Saturdays</strong> 是馆方每月第一个周六晚间的免费大型活动' +
          '（音乐、放映、导览、舞会），' +
          '<strong>但官方写明只在「select months」举办、并非每月都有，' +
          '且联票与特展票不适用于 First Saturdays</strong>——' +
          '想赶或想避都请先查当月日历。' +
          '<strong>馆内商店与美术馆同步开放（周三至周日 11:00–18:00）；' +
          '咖啡馆的钟点由馆方另行公布、与美术馆不同步，出发前单独查一次。</strong>' +
          '<strong>11:00 才开门这一点值得提前知道</strong>：' +
          '它比隔壁植物园（10:00 开）晚一小时，' +
          '所以两馆连着做的正确顺序是先植物园、后美术馆',
        parking: '<strong>不建议开车。</strong>Eastern Parkway 与 Washington Avenue 沿线路边表位少、限时且多被居民占用；' +
          '<strong>最近的停车场是隔壁植物园 990 Washington Avenue 的那一个（07:00–22:00，' +
          '1 小时 $10、至闭园 $24、24 小时 $35，繁忙日适用活动费率）</strong>，' +
          '走过来三分钟。' +
          '<strong>地铁是压倒性的更优解：2／3 线 Eastern Parkway–Brooklyn Museum 站的出口就在美术馆正门台阶下，' +
          '出站即到，且该站有电梯、无障碍。</strong>' +
          '另有 <strong>4／5 线 Franklin Avenue 站</strong>（步行约 8 分钟）、' +
          '<strong>B／Q／S 线 Prospect Park 站</strong>（步行约 12 分钟，<strong>周末无 B 线</strong>）、' +
          '以及 S 线 Botanic Garden 站。巴士 B41、B45、B48、B69 均可达',
        walk: 'Eastern Parkway–Brooklyn Museum 站到美术馆正门 <strong>0–1 分钟，出站即到</strong>；' +
          '美术馆正门到 <strong>Brooklyn Botanic Garden 的 990 Washington Avenue 入口约 250 米／3 分钟</strong>；' +
          '美术馆到 Prospect Park 的 Grand Army Plaza 拱门约 900 米／12 分钟（沿 Eastern Parkway 的中央步道走，' +
          '<strong>这条步道本身是 Olmsted 与 Vaux 设计的美国第一条 parkway，值得走一遍</strong>）；' +
          '馆内从大堂到四楼《The Dinner Party》坐电梯约 3 分钟，全馆无障碍'
      },
      notes: [
        '<strong>周一与周二闭馆，这是本条目最容易踩的坑。</strong>' +
          '很多人按「纽约的博物馆周一闭馆」的经验只避开周一，结果周二白跑一趟。' +
          '<strong>另闭 Thanksgiving、Christmas 与 New Year\u2019s Day</strong>',
        '<strong>要按建议捐赠制少付钱，就不能在网上买票。</strong>' +
          '官方规则是线上与自助机购票一律按全额建议金额（成人 $20）收，' +
          '<strong>只有馆内的人工 Admissions Desk 接受自定金额</strong>。' +
          '排人工窗口会多花几分钟，但对预算紧的访客值这几分钟',
        '<strong>《The Dinner Party》所在的房间是刻意压暗的，且四壁是镜面。</strong>' +
          '进去后先站定让眼睛适应，别急着往前走；' +
          '<strong>禁闪光灯（这里尤其会被制止，因为闪光会在镜面墙上反射干扰所有人）</strong>，' +
          '也不要靠上桌沿的护栏',
        '<strong>13 至 19 岁与 4 至 12 岁看常设展完全免费、无居住地要求</strong>，' +
          '带青少年或儿童来的家庭在这里的实际支出可以低到只有大人那一份。' +
          '不过<strong>特展对 13–19 岁收 $21、对 4–12 岁收 $12</strong>，' +
          '这个差别在带孩子时会显著影响预算',
        '<strong>大件包与背包按规定须寄存</strong>（免费衣帽间在一楼），' +
          '进门先办掉；三脚架、自拍杆与画架一律不得带入展厅',
        '<strong>先查一眼当期特展再决定来哪天。</strong>' +
          '本馆常办体量很大的当代与流行文化特展（历年有过 Jean-Paul Gaultier、David Bowie、Virgil Abloh 等），' +
          '这类展会把全馆人流整体拉高一档，也会占掉你两小时；' +
          '<strong>只想安静看《The Dinner Party》与埃及馆的话，挑一个没有重磅特展的周三或周四上午</strong>',
        '<strong>「纽约第二大美术馆」这个说法不要理解成「The Met 的缩小版」。</strong>' +
          '它的强项集中在少数几块——<strong>埃及、女性主义艺术、非洲艺术、美国艺术</strong>；' +
          '亚洲与伊斯兰部分明显弱于 The Met。' +
          '<strong>按「来看四个专长」而不是「来看通史」安排时间，这一趟的性价比会高很多</strong>'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Brooklyn_Museum_20170313.jpg',
          cap: 'Eastern Parkway 正面与 2004 年的玻璃门廊 · Suicasmo / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Brooklyn_Museum_-_Entrance_%2852302265063%29.jpg',
          cap: '正门入口与科林斯柱廊 · ajay_suresh / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Brooklyn_Museum_Night_2015.jpg',
          cap: '夜间亮灯的 Beaux-Arts 立面 · Cm300883 / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'williamsburg',
      n: 10,
      name: 'Williamsburg · Bedford Avenue 与滨水公园',
      en: 'Williamsburg · Bedford Avenue · Domino Park · Marsha P. Johnson State Park · Smorgasburg',
      must: 3.5,
      score: 3.5,
      tldr: '街区型条目：Bedford Avenue 的店铺带 + 两座滨水公园正面看 Manhattan 天际线 + <strong>周六的 Smorgasburg 露天美食市集（四月至十月下旬）</strong>。全部免费，地铁一站过河。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '市集仅 4–10 月', c: 'risk' },
        { t: 'L 线一站过河', c: 'free' },
        { t: '公厕有官方保证', c: 'free' }
      ],
      highlights: [
        '<strong>这个街区最值得先知道的一件事，是它其实被一条看不见的线切成两半，而且两半完全不像同一个地方。</strong>' +
          '<strong>Williamsburg Bridge 以北（North Williamsburg，以 Bedford Avenue 为轴）' +
          '是过去二十年被反复写烂的那个「潮流街区」</strong>：' +
          '独立咖啡馆、二手店、唱片店、精酿酒吧、滨水新公寓。' +
          '<strong>而桥以南（South Williamsburg）是全球最大的 Satmar Hasidic 犹太社区之一</strong>，' +
          '街上是意第绪语招牌、黑帽与长外套、大家庭与自营的犹太食品店，' +
          '周五日落到周六日落的安息日里整片街区会安静下来、商铺全关。' +
          '<strong>两边只隔几个街口，走过去五分钟，而这种「一个街区两个世界」的落差' +
          '是纽约最能让人具体感受到「移民城市」这件事的地方之一</strong>——' +
          '比任何一个观景台都有信息量。' +
          '<strong>南边不是景点，是别人的家和信仰生活，去的时候按「安静通过」的规矩来</strong>（见 notes）',
        '<strong>Bedford Avenue 是这个街区的门面，但它的价值需要说清楚：这里没有一个「必看的东西」。</strong>' +
          '它是一条长条形的商业街，<strong>最密的一段是 L 线 Bedford Avenue 站出来之后的 ' +
          'North 4th Street 到 North 10th Street 这六个街口</strong>，' +
          '书店、唱片店、二手服装店、面包房、咖啡馆与小餐厅一间挨一间，' +
          '再往两侧的 Wythe Avenue、Berry Street、North 6th Street 分散。' +
          '<strong>所以它适合当「逛」而不是「参观」</strong>：' +
          '你来这里是为了看纽约二三十岁的人平时买什么、吃什么、穿什么，' +
          '不是为了打卡某个地标。' +
          '<strong>如果你对这件事没兴趣，这条街可以整条跳过，直接去滨水的两座公园</strong>',
        '<strong>Domino Park 是这一带唯一一个「设计本身值得看」的地方，因为它把一座糖厂的残骸原地留下来了。</strong>' +
          '这块地是 <strong>Domino Sugar Refinery</strong> 的厂址' +
          '（19 世纪起在这里炼糖，曾是全世界最大的糖厂之一，最终停产），' +
          '开发商 Two Trees 请 <strong>James Corner Field Operations</strong>' +
          '（做 Manhattan 高线公园 The High Line 的那家）设计，<strong>2018 年 6 月开放</strong>。' +
          '关键做法：<strong>从厂房里抢救下 21 根旧钢柱、一台龙门吊与几只糖浆罐，原位保留在公园里</strong>，' +
          '并沿着旧柱子架起一条<strong>高约 9 米的架空步道（Elevated Walkway）</strong>，' +
          '走在上面既看得到工业遗构、也正面对着 East River 与 Manhattan 天际线。' +
          '<strong>园区面积官方两处写法不一致，照实写出：dominopark.com 首页写「6-acre public park」，' +
          '而同站的 Visit 页写「5-acre public park located at 15 River Street」</strong>——' +
          '差一英亩，不影响你怎么逛。' +
          '园内另有狗公园、bocce 球场、一座会喷雾的 fog bridge 与一个 taco 摊',
        '<strong>Marsha P. Johnson State Park 是本区的「望天际线 + 有干净厕所」双重解</strong>，' +
          '而且<strong>它的名字换过，很多旧攻略还在用老名字，这一条会直接影响你能不能找到它</strong>：' +
          '<strong>它原名 East River State Park，2007 年 6 月 26 日开放；' +
          '2020 年 2 月 1 日由州长更名，纪念 Stonewall 起义中的关键人物、' +
          '跨性别活动家 Marsha P. Johnson</strong>。' +
          '地址 <strong>90 Kent Avenue</strong>，七英亩，纽约州立公园，免费。' +
          '这块地原是 <strong>Brooklyn Eastern District Terminal</strong> 的驳船码头与铁路调车场，' +
          '1983 年废弃后荒了几十年，' +
          '<strong>所以草坪之间至今嵌着 19 世纪的鹅卵石街面与浇在混凝土里的铁轨</strong>，' +
          '现场有解说牌。' +
          '它有草坪、原生植物园、一小块沙滩、一个很受欢迎的木构游乐场与狗公园；' +
          '<strong>州立公园官方页面对园内 Park House 的原话是' +
          '「the cleanest public bathrooms in all of Williamsburg」（全 Williamsburg 最干净的公厕）</strong>——' +
          '一份官方文件愿意这么写，本身就是很有用的信息',
        '<strong>Smorgasburg 是这一站在四月到十月下旬之间最值得为之定日子的东西。</strong>' +
          '它是<strong>纽约最大的露天美食市集，2026 年是第 16 季，' +
          '每场 70 余家独立摊商、旺日客流上万</strong>，' +
          '被《纽约时报》称作「the Woodstock of eating」。' +
          '<strong>2026 年的常规场次：周六在 Williamsburg（就在 Marsha P. Johnson State Park 里，' +
          '90 Kent Avenue）、周日在 Prospect Park 的 Breeze Hill（从 Lincoln Road 入口进），' +
          '两场都是 11:00–18:00，免费入场。</strong>' +
          '同季另有周五在 World Trade Center 的 Oculus（11:00–18:00）' +
          '与一个新开的 Central Park 场次（周五至周日 12:00–20:00，36 Central Park West）。' +
          '<strong>具体的开季与收季日期逐年不同、必须自己核对</strong>——' +
          '<strong>2026 年的口径见下方 access.hours</strong>'
      ],
      tour: [
        '<strong>这是一个街区条目，没有门票也没有闭馆时间，所以怎么排顺序完全取决于你想不想赶 Smorgasburg。</strong>' +
          '<strong>周六来（有市集）：</strong>L 线 Bedford Avenue 站出来 → 沿 Bedford Avenue 往北逛到 North 10th Street → ' +
          '往西转进 <strong>Marsha P. Johnson State Park</strong> 吃 Smorgasburg 并在草坪上望天际线 → ' +
          '沿 Kent Avenue 往南走 1 公里到 <strong>Domino Park</strong>，上架空步道看糖厂遗构与 Williamsburg Bridge → ' +
          '从 Domino Park 南端出来就是 Williamsburg Bridge 的桥头。' +
          '<strong>其他日子来（无市集）：</strong>顺序不变，只是把市集那一段换成在公园草坪上坐一会儿，' +
          '吃饭改到 Bedford Avenue 或 Wythe Avenue 解决。' +
          '<strong>全程约 2.5 公里、全平路，两座公园之间沿 Kent Avenue 有连续的自行车道与人行道</strong>',
        '<strong>四样别错过：</strong>' +
          '①<strong>Domino Park 的架空步道</strong>——沿糖厂旧钢柱架起的高约 9 米的栈道，' +
          '<strong>这是全区唯一一个能同时看到工业遗构、East River 与 Manhattan 天际线的位置</strong>，' +
          '走一趟五分钟，是这一站最具体的一样东西；' +
          '②<strong>Marsha P. Johnson State Park 的草坪与嵌在混凝土里的旧铁轨</strong>——' +
          '这里正面朝西，<strong>是本区看 Midtown 与 Lower Manhattan 天际线最开阔的一处</strong>，' +
          '有沙滩、有解说牌、有长椅；' +
          '③<strong>Smorgasburg</strong>（若逢周六且在四月至十月下旬）——' +
          '70 余家摊商、全球口味，<strong>正确吃法是先绕全场走一圈只看不买、再回头挑三到四家分食</strong>，' +
          '每家买一份两人分，否则第三家就吃不下了；' +
          '④<strong>Williamsburg Bridge 的步行道</strong>——' +
          '从 Domino Park 南端上桥，<strong>走到桥中段回望布鲁克林一侧，是免费且不排队的天际线视角</strong>，' +
          '单程约 25 分钟到 Manhattan 的 Delancey Street，' +
          '<strong>想省一趟地铁的人可以走桥过河</strong>',
        '<strong>可以跳过的：</strong>Bedford Avenue 上那些卖同款印花 T 恤与手机壳的连锁店' +
          '（这条街近十年连锁化得很厉害，特色店已经被挤到两侧的横街上去了）、' +
          '以及沿 Kent Avenue 那一排新建玻璃公寓楼的底商。' +
          '<strong>Brooklyn Brewery（79 North 11th Street）除非你专门要喝啤酒、' +
          '否则不值得排它周末的队</strong>。' +
          '<strong>Peter Luger Steak House（1887 年开的老牌牛排馆，在 Williamsburg Bridge 桥下的 Broadway 上）' +
          '是另一回事——它很有名、很贵、只收现金与自家的借记卡、且必须提前很久订位</strong>，' +
          '不是可以顺路走进去的地方，想去请提前几周订。' +
          '省下的时间请给两座滨水公园',
        '<strong>人流与安全：</strong>North Williamsburg 白天到深夜都热闹，治安属好的一档，单独前往没有问题。' +
          '<strong>人最多的是周六的 Smorgasburg</strong>——' +
          '<strong>开场 11:00 到 13:00 之间人最少，13:00 之后各摊会排起 15–25 分钟的队</strong>，' +
          '想轻松吃就 11:00 准点到。' +
          '<strong>官方明确写明 Williamsburg 场次不允许带宠物（原文「No Pets Allowed」）</strong>，' +
          '而 Prospect Park 场次允许牵绳的狗——带狗的人请注意这个差别。' +
          '两座公园在日落后人会少很多，' +
          '<strong>Kent Avenue 与 River Street 一带夜里比较空旷，深夜独行请走 Bedford Avenue 那条有店铺的主街</strong>。' +
          '另外 <strong>Kent Avenue 的自行车道是全布鲁克林最繁忙的通勤车道之一</strong>，' +
          '横穿之前请先看两头',
        '<strong>南 Williamsburg 的 Hasidic 社区：想走过去看看完全可以，但请按下面这几条来。</strong>' +
          '<strong>这不是一个景区，是一个宗教社区的日常生活区</strong>：' +
          '穿着请保守（长裤或过膝裙、不要露肩），' +
          '<strong>不要对着人（尤其是儿童与女性）拍照</strong>，' +
          '不要在安息日（<strong>周五日落至周六日落</strong>）进去逛街——' +
          '那段时间几乎所有商铺都关门，而且街上是走去会堂的家庭。' +
          '<strong>想看这个社区最自然的状态就选周日或周一到周四的白天</strong>，' +
          'Lee Avenue 一带是它的商业主街，有面包房与犹太食品店',
        '<strong>餐饮与卫生间，这一站的答案比本区其它地方都好：</strong>' +
          '<strong>吃的完全不成问题</strong>——Bedford Avenue 与 Wythe Avenue 两条街从早餐到深夜都有选择，' +
          '价格明显低于对岸 Manhattan；周六还有 Smorgasburg。' +
          '<strong>公厕有两处官方保证的：</strong>' +
          '①<strong>Marsha P. Johnson State Park 的 Park House</strong>' +
          '（州立公园官方页面自己写成「全 Williamsburg 最干净的公厕」，' +
          '<strong>公园开放时间为每日 07:00–22:00</strong>；' +
          '<strong>Park House 里的 Classroom 另按周三与周六 10:00–12:00 及 13:30–16:30 开放</strong>，' +
          '但厕所与教室不是同一件事）；' +
          '②<strong>Domino Park</strong>（<strong>每日 06:00–23:00</strong>，园内设公厕，' +
          '<strong>但其具体位置与季节性钟点官方页面未逐项说明——未能从官方渠道确认</strong>）。' +
          '<strong>Smorgasburg 场地内另设临时卫生间。</strong>' +
          '带小孩的话把这两座公园当作这一天的补给站来用'
      ],
      photo: '城市天际线 <strong>4/5</strong>，街头人文 <strong>3.5/5</strong>，工业遗构 <strong>3.5/5</strong>。' +
        '这一站的摄影价值集中在两座滨水公园的西向视野与 Domino Park 的旧钢柱，' +
        '<strong>但必须说清它的短板：视线正朝西，所以傍晚是逆光</strong>——' +
        'Manhattan 天际线会变成剪影，想要正面受光的天际线得在清晨来。' +
        'Bedford Avenue 的街拍价值因人而异，它是一条普通的商业街，不是一条会自动出片的街。',
      shots: [
        {
          name: 'Domino Park 架空步道（糖厂钢柱 + 天际线 + Williamsburg Bridge）',
          view: [40.714106, -73.968275],
          desc: '<strong>清晨 07:00–09:00 是唯一能拿到「天际线正面受光」的时段</strong>' +
            '（太阳在你背后的东边，Manhattan 玻璃幕墙全亮，且步道上几乎没人）；' +
            '傍晚来只能按剪影拍，日落方向正在天际线后面。' +
            '<strong>24–35mm</strong> 沿步道纵轴，把 21 根旧钢柱的重复节奏当前景框、天际线压在上三分之一；' +
            '<strong>70–200mm</strong> 单独压缩 Williamsburg Bridge 的钢桁架与远处 Midtown 的楼群。' +
            '<strong>步道是架空钢结构，人走动时会有明显传振</strong>，长曝光请等身边没人时再按快门。' +
            '坐标为 Nominatim 反查到的 Domino Park 节点；' +
            '入口沿 Kent Avenue 在 South 5th、South 3rd 与 Grand Street 三处。'
        },
        {
          name: 'Marsha P. Johnson State Park 草坪西侧（开阔天际线与旧铁轨前景）',
          view: [40.721773, -73.962194],
          desc: '<strong>清晨（正面受光、无人）或日落前 30 分钟（剪影加残霞）。</strong>' +
            '这里是本区视野最开阔的一处，前景可用<strong>嵌在混凝土里的 19 世纪铁轨' +
            '与鹅卵石旧街面</strong>做引导线，这是别处没有的元素。' +
            '<strong>35–85mm</strong> 拍天际线本体；<strong>16–24mm</strong> 压低机位让铁轨从画面下缘穿向水面。' +
            '<strong>周六 11:00–18:00 这块地被 Smorgasburg 占满，届时拍不到空草坪</strong>，' +
            '想要空景请避开周六或在 10:00 之前到。' +
            '坐标为 Nominatim 反查到的 Marsha P. Johnson State Park 节点（90 Kent Avenue）。'
        }
      ],
      access: {
        visit: '<strong>2–3 小时是主流走法；只看两座滨水公园 60–75 分钟；' +
          '逢周六赶 Smorgasburg 则留 3.5–4.5 小时。</strong>' +
          '分配：Bedford Avenue 及两侧横街逛 45–60 分钟 + ' +
          'Marsha P. Johnson State Park 25 分钟（草坪、沙滩、旧铁轨与望天际线）+ ' +
          '沿 Kent Avenue 走到 Domino Park 15 分钟 + ' +
          'Domino Park 含架空步道 30 分钟。' +
          '<strong>Smorgasburg 另加 90–120 分钟</strong>（绕全场看一圈 + 排队 + 吃，' +
          '<strong>摊位七十余家，少于一个半小时会吃得很赶</strong>）。' +
          '<strong>想再走一趟 Williamsburg Bridge 步行道过河到 Manhattan，单程另加 25–30 分钟。</strong>' +
          '这是公共街区与公园，无官方建议时长，以上按约 2.5 公里的串线距离、' +
          '两座公园的面积（7 英亩与 5–6 英亩）与市集摊位数推算',
        book: '<strong>全部不需预约</strong>：两座公园、Bedford Avenue 的街区、' +
          'Smorgasburg 市集（免费入场、无需订票）都是走进去就行。' +
          '<strong>唯一需要提前很久订位的是 Peter Luger Steak House</strong>' +
          '（Broadway 上的 1887 年老牌牛排馆，' +
          '<strong>只收现金与自家借记卡、不收一般信用卡</strong>，周末常需提前数周）',
        ticket: '<strong>全部免费（2026 年 9 月 14 日复核）：</strong>' +
          '<strong>Domino Park</strong> 为 Two Trees 出资建设并运营的私有公共空间，免费开放；' +
          '<strong>Marsha P. Johnson State Park</strong> 属纽约州立公园系统，' +
          '官方 Hours and Fees 栏原文「The park is free and open to the public」，' +
          '<strong>未列任何入园费或车辆使用费</strong>；' +
          '<strong>Smorgasburg</strong> 免费入场（各摊位按份计价，' +
          '<strong>多数摊位收卡，但仍有少数只收现金，建议带一点现金</strong>）；' +
          'Bedford Avenue 是公共街道。' +
          '<strong>Williamsburg Bridge 的步行道与自行车道也免费</strong>',
        hours: '<strong>2026 年 9 月 14 日在各官方页面逐项复核。</strong>' +
          '<strong>Bedford Avenue 的街区本身 24 小时开放</strong>，但店铺多在 11:00 之后才陆续开门、' +
          '<strong>所以上午十一点前来这条街会发现一半的店还没开</strong>。' +
          '<strong>Domino Park：每日 06:00–23:00</strong>（官方原文「We are open daily 6 am — 11 pm」）。' +
          '<strong>Marsha P. Johnson State Park：每日 07:00–22:00</strong>' +
          '（州立公园官方原文「Open 7:00 a.m. to 10:00 p.m daily」）；' +
          '园内 <strong>Park House Classroom 另按周三与周六 10:00–12:00 及 13:30–16:30 开放</strong>。' +
          '<strong>Smorgasburg 的 2026 赛季（官方 smorgasburg.com/new-york 与合办方页面复核）：</strong>' +
          '<strong>周六场在 Williamsburg 的 Marsha P. Johnson State Park（90 Kent Avenue），11:00–18:00，' +
          '官方注明「No Pets Allowed」，2026 年的会期为 4 月 4 日至 10 月 24 日；' +
          '周日场在 Prospect Park 的 Breeze Hill（从 Lincoln Road 入口进），11:00–18:00，' +
          '2026 年的会期为 4 月 5 日至 10 月 25 日</strong>' +
          '（Prospect Park Alliance 的活动页原文写「every Sunday through October 25」，与上述一致）。' +
          '同季另有<strong>周五在 World Trade Center 的 Oculus（185 Greenwich Street）11:00–18:00</strong>' +
          '与<strong>新增的 Central Park 场次（36 Central Park West，周五至周日 12:00–20:00）</strong>。' +
          '<strong>要写给将来的读者的一句话：Smorgasburg 的开季与收季日期逐年变动，' +
          '大致是四月初开、十月下旬收，冬季停摆（历年有过室内冬季场但并非每年都办）。' +
          '出发前请查 smorgasburg.com/new-york 的 Locations 栏，那是唯一可靠的口径。</strong>' +
          '<strong>Williamsburg Bridge 的步行道 24 小时开放</strong>，' +
          '但偶有 NYC DOT 的短期施工封闭，出发当天可查 DOT 的 Weekly Traffic Advisory',
        parking: '<strong>不建议开车，但这里比 DUMBO 稍好一点。</strong>' +
          '街区内路边表位少、限时且周末几乎无空位；' +
          '<strong>Domino Park 官方指路给的付费停车场在 325 Kent Avenue</strong>' +
          '（入口在 South 3rd 与 South 4th Street 之间、Kent Avenue 与 Wythe Avenue 之间）。' +
          '<strong>地铁是最省事的：L 线 Bedford Avenue 站是本街区的门户，' +
          '从 Manhattan 的 14th Street–Union Square 过来只有一站、约 5 分钟</strong>' +
          '（<strong>但 L 线周末常有改点与区间停运，出发前查 MTA 的 Weekend Service</strong>）；' +
          '<strong>J／M／Z 线 Marcy Avenue 站</strong>与<strong>G 线 Metropolitan Avenue 站</strong>' +
          '离 Domino Park 更近。' +
          '<strong>渡轮也很好用：NYC Ferry 的 East River 线停 North Williamsburg 与 South Williamsburg 两站</strong>，' +
          '南 Williamsburg 站就在 Domino Park 旁边，' +
          '而且从 DUMBO／Fulton Ferry 与 Manhattan 的 East 34th Street 都有直达船。' +
          '巴士 B32、B62、Q59 可达 Kent Avenue 一线',
        walk: 'L 线 Bedford Avenue 站到 Bedford Avenue 最热闹的一段 <strong>0 分钟，出站即在街上</strong>；' +
          'Bedford Avenue 站往西到 <strong>Marsha P. Johnson State Park 约 600 米／8 分钟</strong>；' +
          '<strong>Marsha P. Johnson State Park 沿 Kent Avenue 往南到 Domino Park 约 1 公里／13 分钟</strong>，' +
          '全程平路、有连续人行道（<strong>注意同侧是繁忙自行车道</strong>）；' +
          'Domino Park 南端到 Williamsburg Bridge 的布鲁克林桥头约 500 米／7 分钟；' +
          '<strong>Williamsburg Bridge 步行道全长约 2.1 公里，走到 Manhattan 的 Delancey Street 约 25–30 分钟</strong>，' +
          '有坡但无台阶'
      },
      notes: [
        '<strong>Smorgasburg 只在四月初到十月下旬营业，这是这一站唯一的季节性风险。</strong>' +
          '冬季与早春来的话，Williamsburg 的周六就只是一个普通的周六；' +
          '<strong>所以如果市集是你来的主要理由，务必先在 smorgasburg.com 对一次当年的会期</strong>，' +
          '别按别人写的日期来',
        '<strong>East River State Park 这个名字已经不用了。</strong>' +
          '它<strong>2020 年 2 月 1 日更名为 Marsha P. Johnson State Park</strong>，' +
          '但纽约州立公园自己的页面标题至今仍并列写着' +
          '「Marsha P. Johnson State Park (East River State Park)」。' +
          '用旧名搜地图仍然找得到，但<strong>现场的指示牌与官方资料一律是新名字</strong>，' +
          '地址是 90 Kent Avenue',
        '<strong>南 Williamsburg 是 Satmar Hasidic 犹太社区，请按社区礼仪通过。</strong>' +
          '穿着保守、不要对人（尤其儿童与女性）拍照、压低音量；' +
          '<strong>周五日落至周六日落是安息日，商铺基本全关，那段时间不适合去逛</strong>。' +
          '这一条不是客套，是这个社区与游客之间长期紧张的实际原因',
        '<strong>L 线周末经常改点。</strong>Bedford Avenue 站是 L 线过河后的第一站，' +
          '<strong>周末与夜间常有区间停运或减班</strong>，' +
          '回程若赶时间请改走 J／M／Z 线 Marcy Avenue 站或坐 NYC Ferry，' +
          '出发前查一次 MTA 的周末施工公告',
        '<strong>Kent Avenue 的自行车道是全市最繁忙的几条之一。</strong>' +
          '它紧贴人行道且双向通行，速度很快，' +
          '<strong>从公园出来横穿 Kent Avenue 之前请务必先看两头</strong>，' +
          '带小孩的家庭尤其注意',
        '<strong>Smorgasburg 的正确吃法：先空腹绕全场一圈只看不买。</strong>' +
          '七十余家摊位、每家份量都不小，' +
          '<strong>常见的失误是在头三家就吃饱了，然后看着后面六十家干瞪眼</strong>。' +
          '两人同行的话每样买一份分食；' +
          '<strong>多数摊位收卡但仍有少数只收现金，带二三十美元现金以防万一</strong>',
        '<strong>这里的天际线视线朝西，傍晚是逆光。</strong>' +
          '想看正面受光、玻璃幕墙全亮的 Manhattan，' +
          '<strong>请在清晨 07:00–09:00 来两座滨水公园</strong>；' +
          '傍晚来就把它当剪影与残霞看，别期待细节'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/View_from_Domino_Park_002.jpg',
          cap: '自 Domino Park 望 East River 与 Manhattan 天际线 · Kidfly182 / CC BY 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Bedford_Av_-_NYC_Williamsburg_%2825877481737%29.jpg',
          cap: 'Bedford Avenue 的店铺街景 · FaceMePLS / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Brooklyn_Smorgasburg_%288173898964%29.jpg',
          cap: 'Smorgasburg 露天美食市集的摊位与人流 · Jill Laurie Goodman / CC BY 2.0' }
      ]
    },
    {
      id: 'nyc-transit-museum',
      n: 11,
      name: 'New York Transit Museum 纽约交通博物馆',
      en: 'New York Transit Museum · Court Street Station',
      must: 3,
      score: 3,
      tldr: '开在一座真正废弃的 1936 年地铁站里，<strong>站台上停着二十节从 1900 年代到 1970 年代的老车厢，可以走进去坐下</strong>。成人 $10，<strong>周一、周二闭馆，每天只开到 16:00</strong>。',
      tags: [
        { t: '成人 $10', c: 'paid' },
        { t: '周一周二闭馆', c: 'risk' },
        { t: '16:00 就关门', c: 'risk' },
        { t: '主入口两段楼梯', c: 'risk' },
        { t: '建议提前订票', c: 'risk' }
      ],
      highlights: [
        '<strong>这座博物馆的场地本身就是最大的展品：它开在一座真的废弃地铁站里，而且那座站是个著名的失败案例。</strong>' +
          '<strong>Court Street 站 1936 年作为 IND Fulton Street Line 的一部分启用，' +
          '却在 1946 年就对乘客关闭——通车不到十年</strong>。' +
          '原因是它本来被设计成一条往南延伸的支线的起点站，' +
          '那条延伸线始终没建，于是它成了一条只有两站长的盲肠，' +
          '加上离 Borough Hall 一带的几个大站太近、客流始终上不来。' +
          '<strong>1976 年美国建国两百周年之际，这座空站被改造成交通博物馆</strong>，' +
          '从此那条废弃的轨道派上了它最好的用场。' +
          '<strong>入口做得极不像博物馆——街角一个普通的地铁站口，' +
          '挂着一块老式的「Court St」马赛克站名牌，顺着楼梯往下走就进了展厅</strong>',
        '<strong>下到最底层的站台，你会看到这座馆真正的镇馆之宝：约二十节各年代的地铁与高架列车车厢，' +
          '停在原来的轨道上，而且绝大多数可以走进去。</strong>' +
          '年代跨度从<strong>1900 年代的木制高架车厢一直到 1970 年代的不锈钢车</strong>，' +
          '包括 BMT、IRT 与 IND 三大系统各自的代表车型。' +
          '<strong>最有意思的细节是车厢内部保留着当年的广告牌</strong>——' +
          '藤编座椅、旋转吊扇、白炽灯泡、以及五十年代卖香烟与止痛药的手绘车厢广告，' +
          '<strong>你可以坐在 1917 年的藤椅上抬头看 1950 年代的广告</strong>。' +
          '这一层是整座馆里小孩与大人同样待得住的地方',
        '<strong>上层（原来的售票大厅与夹层）讲的是「地铁是怎么挖出来的」，而这部分比想象中好看。</strong>' +
          '核心是 <strong>Steel, Stone &amp; Backbone</strong> 展——' +
          '1900 年代开挖第一条地铁时的现场照片、工具、盾构与「明挖回填」（cut-and-cover）的剖面模型，' +
          '以及那些用意大利与爱尔兰移民劳力在曼哈顿街道底下硬挖出来的施工记录。' +
          '<strong>另一个人人都会停下来的小展是一排按年代排列的真旋转闸机（turnstile）</strong>，' +
          '从投币式到代币式到 MetroCard，<strong>而且允许你实际推过去</strong>；' +
          '旁边是一整墙的历代代币（token）与车票。' +
          '同层还有讲公交车与有轨电车的 <strong>On the Streets</strong> 展区，' +
          '以及一个让小孩坐进去转方向盘的公交车驾驶座',
        '<strong>这是一座小馆，请按小馆的期望来——它的正确定位是「一两个小时的高密度专题馆」，' +
          '不是一座能撑半天的大馆。</strong>' +
          '好消息是<strong>门票只要 $10（儿童与 62 岁以上 $5）</strong>，' +
          '按每小时的信息量算，它是纽约性价比最高的博物馆之一。' +
          '<strong>它同时是一个对交通迷极端对路、对完全不感兴趣的人也能待住一小时的场馆</strong>——' +
          '因为「能走进去的老车厢」这件事不需要任何背景知识',
        '<strong>顺便记住它在 Grand Central Terminal 里另有一个免费的分馆。</strong>' +
          '<strong>Grand Central Gallery</strong> 位于 Grand Central Terminal 的 Shuttle Passage，' +
          '<strong>免票</strong>，是一个小型轮展空间加一家纪念品店，' +
          '钟点为<strong>周一至周五 10:00–19:30、周六日 10:00–18:00</strong>' +
          '（另闭 Martin Luther King Jr. Day、Presidents\u2019 Day、Memorial Day、Juneteenth、' +
          'Labor Day、Columbus Day、Thanksgiving、Christmas 与 New Year\u2019s Day）。' +
          '<strong>如果你没时间专门跑布鲁克林，至少在换车时进这个免费分馆看五分钟</strong>；' +
          '但要看老车厢就必须来 Court Street 这座本馆'
      ],
      tour: [
        '<strong>两层、不大，最省事的走法是「先下到底、再往上收」。</strong>' +
          '<strong>进门买票后直接下到最底层的站台看老车厢（这是全馆的重点，也是小孩最兴奋的地方），' +
          '然后上到夹层看 Steel, Stone &amp; Backbone 与闸机墙，最后在纪念品店收尾。</strong>' +
          '反过来走也行，但很多人在上层耗掉太多时间、下到站台时已经累了，' +
          '<strong>而站台那一层才是这座馆不可替代的部分</strong>',
        '<strong>三样别错过：</strong>' +
          '①<strong>站台层的老车厢队列</strong>——约二十节，' +
          '<strong>请挨着走进去、坐下来、抬头看车厢里的原版老广告</strong>，' +
          '这比在外面拍照有意思十倍；' +
          '留意车厢之间的年代差（藤编座椅与旋转吊扇 → 塑料座椅与日光灯），' +
          '<strong>一节一节走过去就是半个世纪的纽约通勤史</strong>；' +
          '②<strong>那排可以实际推过去的历代旋转闸机</strong>——' +
          '从投币式到代币式一路排到 MetroCard，' +
          '<strong>这是全馆最受欢迎的互动展项，带小孩的话会在这里耗掉十分钟</strong>；' +
          '③<strong>Steel, Stone &amp; Backbone</strong> 展里 1900 年代的开挖照片与 cut-and-cover 剖面模型——' +
          '看完你会明白曼哈顿的地铁是怎么在既有街道底下一段一段挖出来的',
        '<strong>可以跳过的：</strong>公交车与有轨电车的 On the Streets 展区' +
          '（除非你专门对巴士有兴趣，它的分量明显轻于地铁部分）、' +
          '以及部分临时小展。' +
          '<strong>省下的时间全部留给站台层的车厢</strong>——' +
          '这一站的钱与时间都该花在那里',
        '<strong>票务与排队：官方明确建议提前在线订票，并且警告现场票数量有限。</strong>' +
          '官方原文是「We recommend booking advance tickets for the Museum in Brooklyn」与' +
          '「A limited number of tickets can be purchased on site, but we strongly encourage advance reservations」，' +
          '<strong>而且经验上周末与学校假期的时段会提前售完</strong>，' +
          '可在线预订未来三周内的场次。' +
          '<strong>另有一条硬规则：8 人及以上的团体只能通过预约的馆方带领导览进场，不能自行买散票入场。</strong>' +
          '人最少的时段是<strong>周四与周五的上午开门后那一小时（10:00–11:00）</strong>；' +
          '周末上午与学校假期是全馆最挤的时候',
        '<strong>无障碍与体力，这一条必须提前知道：主入口是往地下走的两段楼梯，没有电梯。</strong>' +
          '官方原文「The main entrance to the Museum is down two flights of stairs」。' +
          '<strong>轮椅与推车请走 Schermerhorn Street 与 Court Street 转角的无障碍入口</strong>' +
          '（官方原文「A wheelchair-accessible entrance is available at the corner of Schermerhorn and Court Streets」）。' +
          '<strong>带婴儿车、行李箱或膝腿不便的人千万别硬走主入口</strong>，' +
          '到了街角先找那个无障碍口',
        '<strong>餐饮与卫生间：这是一座小馆，馆内没有餐厅也没有咖啡馆，别指望在里面吃饭。</strong>' +
          '<strong>好消息是它就在 Downtown Brooklyn 的核心，出门几步全是吃的</strong>：' +
          '<strong>Court Street 与 Montague Street 一带</strong>（往西北走三到五分钟）是成排的餐厅与咖啡馆，' +
          '<strong>Fulton Mall 一带</strong>（往东北走五分钟）有快餐与美食广场，' +
          '再走十分钟就是 Brooklyn Heights 的 Montague Street。' +
          '<strong>洗手间在馆内（夹层），入场后即可使用。</strong>' +
          '<strong>这一站最合理的接法是和 Brooklyn Heights Promenade 串起来</strong>——' +
          '两者步行十五分钟，一个是室内一小时、一个是室外半小时，天气差的日子这个组合尤其好用'
      ],
      photo: '室内与工业 <strong>3/5</strong>，人文 <strong>3/5</strong>。' +
        '<strong>这是一个「必去性大于可拍性」的条目，但它比一般博物馆好拍</strong>：' +
        '站台层的老车厢队列是一个很上镜的重复结构，' +
        '而且<strong>允许进车厢内部拍藤编座椅、旋转吊扇与原版老广告</strong>，' +
        '这类细节照是这座馆最容易出效果的东西。' +
        '扣分在照明——地下站台是暖色低照度的原始站台灯，' +
        '<strong>手持需要 f/2.8 与 ISO 1600 以上，且混合色温很难还原</strong>。' +
        '三脚架政策请以现场牌子与工作人员口径为准（小馆通道窄，架不开也不合适）。',
      shots: [
        {
          name: '站台层老车厢队列（纵向重复结构与车厢内部细节）',
          view: [40.690518, -73.989980],
          desc: '<strong>开门后的 10:00–11:00 人最少，这是唯一能拍到空车厢的时段。</strong>' +
            '<strong>16–24mm</strong> 沿站台纵轴拍一整排车厢的透视线（把原始站台的柱列一起收进来）；' +
            '<strong>24–50mm</strong> 进车厢内部拍藤编座椅、旋转吊扇与原版老广告，' +
            '<strong>这是本馆最值得做的一组细节照</strong>。' +
            '<strong>全程手持：站台照明是暖色低照度，请用 f/2.0–f/2.8、ISO 1600–3200 换快门，' +
            '并固定白平衡在 2800–3400K，自动白平衡在这里会整帧偏黄或偏青。</strong>' +
            '禁闪光灯。坐标为 Nominatim 反查到的 New York Transit Museum 节点' +
            '（99 Schermerhorn Street）；<strong>无障碍入口在 Schermerhorn 与 Court Street 转角</strong>。'
        }
      ],
      access: {
        visit: '<strong>1.5–2 小时是主流走法；只看站台层的老车厢 45 分钟；带小孩请留 2.5–3 小时。</strong>' +
          '分配：<strong>站台层老车厢 45–60 分钟</strong>（约二十节，逐节走进去看内部与老广告，' +
          '这是全馆重点，别压缩）+ 夹层的 Steel, Stone &amp; Backbone 与开挖史 25–30 分钟 + ' +
          '历代闸机墙与代币展 10–15 分钟（<strong>带小孩会翻倍</strong>）+ ' +
          'On the Streets 公交与电车区 10 分钟（可跳过）+ 纪念品店 10 分钟。' +
          '<strong>馆方未公布官方建议时长；多家访客指南给的是「约 2 小时」到「2–3 小时」，' +
          '以上按两层展厅的规模、车厢数量与互动展项数推算。</strong>' +
          '<strong>注意它 16:00 就关门</strong>，也就是说<strong>最晚 14:00 之前要进场</strong>，' +
          '否则来不及把站台层看完',
        book: '<strong>官方强烈建议提前在线订票，可预订未来三周内的场次</strong>' +
          '（原文「We recommend booking advance tickets for the Museum in Brooklyn」；' +
          '「A limited number of tickets can be purchased on site, but we strongly encourage ' +
          'advance reservations」）。' +
          '<strong>周末与学校假期的时段会提前售完，届时现场买不到票。</strong>' +
          '<strong>8 人及以上的团体不能买散票自行入场，只能通过预约的馆方带领导览' +
          '（成人团体导览或学校与青少年团体导览）进场</strong>。' +
          'Grand Central Gallery 分馆免票、不需预约',
        ticket: '<strong>2026 年 9 月 14 日在 nytransitmuseum.org 的 Know Before You Visit 页复核：</strong>' +
          '<strong>成人 $10；儿童（2–17 岁）$5；62 岁以上 $5；身障访客 $5（不适用 5 人以上团体）；' +
          '博物馆会员免费；MTA 员工免费（结账时输入 goingyourway）。</strong>' +
          '<strong>2 岁以下免费。</strong>' +
          '<strong>Grand Central Terminal 里的 Grand Central Gallery 分馆免票。</strong>' +
          '2 Broadway 的 The Shop 只是商店、不收门票也没有展厅。' +
          '<strong>按每小时的信息量算，$10 是纽约博物馆里性价比最高的一档</strong>',
        hours: '<strong>官方原文：「Hours Wednesday – Sunday 10am to 4pm」' +
          '（周三至周日 10:00–16:00；周一、周二闭馆）。' +
          '另闭 Juneteenth、Thanksgiving Day、Christmas Day 与 New Year\u2019s Day。</strong>' +
          '<strong>2026 年 9 月 14 日在 nytransitmuseum.org/know-before-you-visit 复核。</strong>' +
          '<strong>两条最容易踩的坑：一是周一与周二都闭馆</strong>' +
          '（馆方与多家访客指南都说明这两天用于维护与学校团体活动）；' +
          '<strong>二是它 16:00 就关门，比纽约绝大多数博物馆早两小时</strong>——' +
          '这意味着<strong>它没法排在一天的下午场收尾，只能放在上午或中午</strong>。' +
          '想在同一天既看这里又看别处，正确顺序是' +
          '<strong>上午 10:00 开门就来（1.5–2 小时）→ 中午走十五分钟到 Brooklyn Heights Promenade → ' +
          '下午接 Brooklyn Bridge Park 或 DUMBO</strong>，' +
          '那几处都不受早闭馆的限制。' +
          '<strong>Grand Central Gallery 分馆的钟点完全不同且长得多：' +
          '周一至周五 10:00–19:30、周六日 10:00–18:00</strong>，' +
          '另闭 Martin Luther King Jr. Day、Presidents\u2019 Day、Memorial Day、Juneteenth、' +
          'Labor Day、Columbus Day、Thanksgiving Day、Christmas Day 与 New Year\u2019s Day。' +
          '<strong>馆方偶尔会办需另行购票的特别活动（如老车厢的特别运行日与 Nostalgia Train 怀旧列车），' +
          '这类活动的日期与票价逐次公布、不在常规钟点里，有兴趣请关注官网的 Programs 页。</strong>',
        parking: '<strong>不要开车，这一带是 Downtown Brooklyn 的行政与商业核心，路边几乎无解。</strong>' +
          '官方明确说明<strong>馆方不设停车场</strong>，周边只有私营停车楼且按曼哈顿价格计。' +
          '<strong>地铁是压倒性的更优解——官方自己说这里「accessible via more than 20 subway and bus lines」，' +
          '是全纽约地铁可达性最好的博物馆之一：</strong>' +
          '<strong>2／3／4／5 线 Borough Hall 站</strong>（步行约 5 分钟）、' +
          '<strong>R 线 Court Street 站</strong>（最近，步行 2–3 分钟）、' +
          '<strong>A／C／G 线 Hoyt–Schermerhorn Streets 站</strong>（步行约 4 分钟）、' +
          '<strong>F 线 Jay Street–MetroTech 站</strong>（步行约 6 分钟）。' +
          '巴士 B25、B26、B38、B41、B45、B52、B57、B61、B62、B63、B65、B103 均可达',
        walk: 'R 线 Court Street 站到馆入口约 <strong>200 米／3 分钟</strong>；' +
          'Borough Hall 站约 400 米／5 分钟；' +
          '<strong>馆入口到 Brooklyn Heights Promenade 南端（Remsen Street）约 900 米／12–15 分钟</strong>，' +
          '沿 Court Street 往西北走，全程平路；' +
          '馆入口到 Brooklyn Bridge Park 的 Pier 6 约 1.1 公里／15 分钟；' +
          '<strong>馆内主入口是往下的两段楼梯（无电梯）</strong>，' +
          '<strong>无障碍入口在 Schermerhorn Street 与 Court Street 转角</strong>，' +
          '从街面到站台层馆内有电梯'
      },
      notes: [
        '<strong>周一与周二都闭馆，而且 16:00 就关门——这两条一起构成本条目最大的踩坑风险。</strong>' +
          '尤其是 16:00 关门这一点很反直觉（纽约多数博物馆开到 17:30 或 18:00），' +
          '<strong>请把它排在上午或中午，最晚 14:00 前进场</strong>',
        '<strong>主入口是往地下的两段楼梯，没有电梯。</strong>' +
          '轮椅、婴儿车、大件行李请直接去 <strong>Schermerhorn Street 与 Court Street 转角的无障碍入口</strong>，' +
          '不要在主入口的楼梯口才发现这件事',
        '<strong>提前订票，尤其是周末与学校假期。</strong>' +
          '官方明说现场票数量有限且强烈建议预约，' +
          '可在线预订未来三周内的时段；' +
          '<strong>8 人及以上的团体只能走预约导览，买不了散票</strong>',
        '<strong>老车厢是可以走进去坐下的，这是这座馆的正确用法。</strong>' +
          '请进去看车厢内部保留的原版老广告、藤编座椅与旋转吊扇；' +
          '<strong>但不要攀爬座椅与车门、不要触碰吊扇与灯具</strong>，' +
          '这些都是原件且很脆弱',
        '<strong>站台层是地下空间，照明暖而暗、空气流通一般，夏天会有些闷。</strong>' +
          '手持拍摄请把 ISO 上限放宽到 3200 并固定白平衡；<strong>禁闪光灯</strong>；' +
          '三脚架在这座小馆的窄通道里既架不开也不合适，以现场工作人员口径为准',
        '<strong>带小孩来这里的性价比极高。</strong>' +
          '儿童票 $5，而能走进去的老车厢、可以推的历代闸机与公交车驾驶座三样都是直接上手的，' +
          '<strong>不需要任何背景知识</strong>；' +
          '反过来说<strong>对交通完全无感又不带小孩的人，这一站可以降到「有时间再来」</strong>',
        '<strong>如果排不进这一站，Grand Central Terminal 里的免费分馆是个廉价替代</strong>' +
          '（Shuttle Passage 内，周一至周五 10:00–19:30、周六日 10:00–18:00）。' +
          '<strong>但它只有轮展与商店、没有老车厢</strong>，' +
          '所以它替代不了本馆，只能算一个补充'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/New_York_Transit_Museum_Court_Street_platform.jpg',
          cap: 'Court Street 废弃站台上的老车厢队列 · Marcin Wichary / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Court_St_signage_at_New_York_Transit_Museum.jpg',
          cap: '站内保留的老式「Court St」马赛克站名牌 · wctaiwan / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/New_York_Transit_Museum_July_2013_005.jpg',
          cap: '馆内展厅与历代车辆展陈 · King of Hearts / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'flushing-meadows',
      n: 12,
      name: 'Flushing Meadows Corona Park · Unisphere 与科学馆',
      en: 'Flushing Meadows Corona Park · Unisphere · New York Hall of Science · Queens Museum',
      must: 3,
      score: 3.5,
      tldr: '两届世界博览会的旧址：<strong>1964 年那座 43 米高的不锈钢地球 Unisphere 免费且全天可看</strong>，配 New York Hall of Science（成人 $22）与 Queens Museum 里那座 9,335 平方英尺的全纽约市模型。<strong>周六夜里另有百余摊的 Queens Night Market。</strong>',
      tags: [
        { t: '公园免费', c: 'free' },
        { t: '科学馆成人 $22', c: 'paid' },
        { t: '周六夜市 4–10 月', c: 'free' },
        { t: '两馆均周一闭馆', c: 'risk' },
        { t: '7 号线直达', c: 'free' }
      ],
      highlights: [
        '<strong>这是本手册里 Queens 的代表条目，理由很简单：897 英亩，两届世界博览会都在这里办，' +
          '而这两届世博留下的东西至今还立在原地。</strong>' +
          '<strong>1939–40 年与 1964–65 年的纽约世界博览会共用同一块场地</strong>，' +
          '推动这件事的是 Robert Moses。' +
          '它在成为公园之前是一片潮汐沼泽，后来被填成 Corona 的垃圾与煤灰堆场——' +
          '<strong>就是 Fitzgerald 在《The Great Gatsby》里写的那个「灰烬之谷」（valley of ashes）</strong>。' +
          '所以这块地的履历是：沼泽 → 垃圾场 → 两届世博 → 纽约市第四大公园。' +
          '<strong>它现在同时装着 Citi Field（Mets 的球场）、' +
          'USTA Billie Jean King National Tennis Center（US Open 的场地，每年八月底到九月初）、' +
          'Queens Zoo、Meadow Lake，以及下面这三样世博遗产</strong>',
        '<strong>Unisphere 是这一站的免费主角，而且它的三个圆环各有具体所指。</strong>' +
          '这是<strong>1964–65 年世博会的主题标志，主题是「Peace Through Understanding」</strong>，' +
          '由景观建筑师 <strong>Gilmore D. Clarke</strong> 设计、<strong>United States Steel 出资建造并捐赠</strong>。' +
          '常见公布的尺寸是<strong>高约 140 英尺（43 米）、直径约 120 英尺、重约 70 万磅（约 350 吨）不锈钢</strong>。' +
          '<strong>绕着地球的那三道倾斜大圆环不是装饰，它们纪念的是三次具体的轨道飞行：' +
          'Yuri Gagarin（人类首次进入太空）、John Glenn（首位绕地球飞行的美国人），' +
          '以及 Telstar（第一颗主动式通信卫星）</strong>——' +
          '把这件事讲给同行的人听，这个雕塑立刻从「一个大球」变成一份 1964 年的时代宣言。' +
          '<strong>1995 年被定为纽约市地标。</strong>' +
          '它立在一个大水池中央，<strong>喷泉为季节性运行、具体开放期官方未公布——未能从官方渠道确认</strong>；' +
          '不喷水的时候底座与池底会露出来，观感差不少',
        '<strong>Queens Museum 那栋楼比馆藏还有来头：它是唯一一座在两届世博会上都被使用过的建筑，' +
          '而且当过四年联合国大会的会场。</strong>' +
          '它 1939 年作为 <strong>New York City Building</strong>（纽约市馆）建成，' +
          '<strong>1946 至 1950 年间是联合国大会的所在地</strong>——' +
          '<strong>朝鲜半岛分治与 1947 年的巴勒斯坦分治决议都是在这栋楼里表决的</strong>，' +
          '从 Truman 到 Kennedy 的几位美国总统都走过它的走廊。' +
          '<strong>馆内的常设镇馆之宝是 Panorama of the City of New York</strong>：' +
          '<strong>Robert Moses 为 1964 年世博会建的全纽约市比例模型，占地 9,335 平方英尺，' +
          '把五个区的约 89.5 万栋建筑逐一做出来</strong>，' +
          '你可以沿着架空坡道绕它走一圈、从「上帝视角」认出自己住的街区——' +
          '<strong>这是全纽约最被低估的一件展品，单凭它这座馆就值得过河</strong>。' +
          '另有 1939 与 1964 两届世博的档案与纪念物，' +
          '以及<strong>1995 年起长期陈列的 Neustadt Collection of Tiffany Glass</strong>',
        '<strong>New York Hall of Science（NYSCI）开在 1964 年世博会的科学馆原址里，' +
          '而那栋楼本身是一件被严重低估的建筑。</strong>' +
          '建筑师 Wallace Harrison 做的 <strong>Great Hall</strong> 是一圈波浪状的混凝土墙，' +
          '墙上密布<strong>钴蓝色的 Dalle de verre（把彩色玻璃块浇进混凝土的工艺）</strong>——' +
          '<strong>走进去会像进了一座蓝色的教堂，这是全馆最好看的一处，而且很多人只顾着玩展项没抬头看。</strong>' +
          '馆内是典型的动手型科学中心（适合带小孩），' +
          '<strong>户外的 Rocket Park 里立着 1964 年世博会留下来的两枚真火箭——' +
          'Atlas 与 Titan II</strong>，这一处不进馆也能在围栏外看到。' +
          '馆内另有 3D 影院、Rocket Park 迷你高尔夫与 Science Playground，' +
          '<strong>这几项都要另外买票，不含在门票里</strong>',
        '<strong>另外两样不在门票里、但可能是你这一趟最难忘的东西：</strong>' +
          '①<strong>New York State Pavilion</strong>——Philip Johnson 与 Richard Foster 为 1964 年世博做的展馆，' +
          '包括那座顶部曾拉着彩色屋面的「Tent of Tomorrow」' +
          '（地面上原本铺着一整幅 Texaco 赞助的纽约州水磨石路线图）' +
          '与三座「Astro-View」观景塔。' +
          '<strong>它现在是一座被稳定保存下来的巨型废墟，平时只能在外面看、偶尔在特别开放日进去</strong>；' +
          '电影《Men in Black》里那两座「飞碟」就是它。' +
          '就算进不去，<strong>站在围栏外看这组 1964 年的未来主义残骸，是这个公园最强烈的一幕</strong>；' +
          '②<strong>Queens Night Market</strong>——' +
          '<strong>每周六傍晚在 NYSCI 后面的停车场摆的露天夜市，百余家独立摊商、几十个国家的食物，' +
          '而且刻意把大多数食物的单价压在几美元</strong>，' +
          '旺日客流上万。<strong>这是纽约「多族裔美食带」最集中、最便宜的一次性体验</strong>，' +
          '会期见下方 access.hours'
      ],
      tour: [
        '<strong>这个公园有 897 英亩，但游客真正要去的东西集中在南半部一小块里，' +
          '所以别被面积吓到，也别指望走完全园。</strong>' +
          '<strong>最省事的走法（约 2.5 公里、全平路）：7 号线 Mets–Willets Point 站下车 → ' +
          '沿园区主路往南走，穿过网球中心旁的林荫道 → Unisphere（免费，全天可看）→ ' +
          '紧邻的 Queens Museum（就在 Unisphere 西侧）→ 往西 600 米到 New York State Pavilion 的废墟 → ' +
          '再往西北 500 米到 New York Hall of Science 与 Rocket Park → ' +
          '从 7 号线 111th Street 站出园。</strong>' +
          '<strong>反过来从 111th Street 站进、Mets–Willets Point 站出也行</strong>，' +
          '看你先想逛室内还是室外。' +
          '<strong>只有两小时就做 Unisphere + Queens Museum 两样，它们紧挨在一起</strong>',
        '<strong>四样别错过：</strong>' +
          '①<strong>Unisphere</strong>——免费、全天、不排队，' +
          '<strong>绕它走一圈，并且把三道圆环代表 Gagarin、Glenn 与 Telstar 这件事讲出来</strong>，' +
          '十五分钟；' +
          '②<strong>Queens Museum 的 Panorama of the City of New York</strong>——' +
          '9,335 平方英尺、约 89.5 万栋建筑的全市模型，' +
          '<strong>沿架空坡道绕一整圈，然后花几分钟在上面找你住过或去过的地方</strong>，' +
          '这是全馆最该花时间的一处，<strong>至少留 30 分钟</strong>；' +
          '同馆的 Tiffany 玻璃收藏与两届世博档案各再加 15 分钟；' +
          '③<strong>New York State Pavilion 的废墟</strong>——' +
          '<strong>平时只能在围栏外看，但那组 1964 年的未来主义残骸值得专门走这 600 米</strong>；' +
          '④<strong>New York Hall of Science 的 Great Hall</strong>——' +
          '进馆后<strong>记得抬头看那一圈钴蓝色的 Dalle de verre 玻璃墙</strong>，' +
          '这是很多人玩完展项就走、完全错过的东西。' +
          '<strong>不进馆的话，户外 Rocket Park 的 Atlas 与 Titan II 两枚真火箭在围栏外也看得到</strong>',
        '<strong>可以跳过的：</strong>公园北半部的 Meadow Lake 与 Willow Lake' +
          '（本地人划船、烧烤、踢球的地方，风景平淡且离三个主要看点一到两公里）、' +
          'Queens Zoo（体量很小，已有 Prospect Park Zoo 或 Bronx Zoo 的话完全不必）、' +
          '以及 Citi Field 与网球中心的外围（非赛季只是空场馆）。' +
          '<strong>NYSCI 的 3D 影院、迷你高尔夫与 Science Playground 都要另外加钱，' +
          '不带小孩的话一律跳过。</strong>' +
          '省下的时间要么给 Panorama，要么坐 7 号线往东两站去 Flushing 吃饭（见下一条）',
        '<strong>这一站最值得加的一段，是坐 7 号线往东到终点站 Flushing–Main Street——' +
          '那是全美最大的华人聚居区之一，也是 Queens「全美族裔最多元的行政区」这句话最具体的地方。</strong>' +
          '<strong>从 Mets–Willets Point 站到 Flushing–Main Street 只有一站、约 3 分钟</strong>。' +
          '出站就是 Main Street 与 Roosevelt Avenue 的路口，' +
          '<strong>方圆几百米内是粤、闽、川、东北、台湾、上海各路菜系与港式茶餐厅、点心铺、' +
          '奶茶店、生鲜市场的高密度聚集</strong>，' +
          '另有几处开在商场地下的<strong>小吃广场式美食城</strong>（每个摊位一个地方菜系，几美元一份）。' +
          '再往外走还能吃到韩国、印度与南亚的馆子——' +
          '<strong>Flushing 一带在人口统计上是全美语言种类最多的地区之一</strong>。' +
          '<strong>具体店家变动极快，本手册不点名推荐，请到现场看哪家人多就进哪家</strong>，' +
          '这在 Flushing 是最可靠的选店办法',
        '<strong>人流与安全：公园本身白天人很多（本地家庭、球队、遛狗、放风筝），治安良好。</strong>' +
          '<strong>需要专门避开的是每年八月底到九月初的 US Open 期间</strong>——' +
          '那两周网球中心一带人山人海，<strong>NYSCI 的停车场在 US Open 期间不对外开放</strong>，' +
          '周边交通与停车全部瘫痪；同期 Queens Night Market 也会停摆两三周。' +
          '<strong>Mets 的主场比赛日（四月至九月）同样会让 Mets–Willets Point 站一带非常挤</strong>，' +
          '但影响范围比 US Open 小。' +
          '<strong>入夜后公园内部（尤其北半部的湖区与林地）照明少、人烟稀，独行者不要在天黑后深入</strong>；' +
          '周六的 Queens Night Market 是例外——那一片夜里人非常多、很安全',
        '<strong>餐饮与卫生间：</strong>' +
          '<strong>公园本身的餐饮很薄</strong>——NYSCI 馆内有小卖部（需门票才进得去）、' +
          'Queens Museum 内有小型咖啡区，' +
          '园内另有流动的冰淇淋车与拉美风味的食物车（elote 玉米、水果杯、taco，' +
          '<strong>集中在 Unisphere 周边与草坪区，但属非固定摊贩、无法保证</strong>）。' +
          '<strong>周六傍晚有 Queens Night Market 时，吃饭完全不是问题，而且是这一站的重点之一。</strong>' +
          '<strong>其它时候最可靠的吃饭方案是坐一站 7 号线去 Flushing</strong>，' +
          '那里从早到晚都有东西吃且价格低。' +
          '<strong>公厕：最可靠的三处是 NYSCI 馆内、Queens Museum 馆内（两者都需入场），' +
          '以及 NYC Parks 在园内设的公厕</strong>——' +
          '<strong>后者的具体位置与季节性开放钟点未能从官方渠道确认</strong>，' +
          '按大型市属公园的常规，冬季会关掉一部分。' +
          '<strong>带小孩的话请把两座博物馆当补给站，不要指望园内随处有厕所</strong>'
      ],
      photo: '雕塑与建筑 <strong>4/5</strong>，城市人文 <strong>3.5/5</strong>，室内 <strong>2.5/5</strong>。' +
        'Unisphere 是一个极好拍的主体——不锈钢在任何天光下都有层次，' +
        '而且它立在水池中央、四周开阔无遮挡，可以绕着它走 360 度找角度。' +
        '<strong>加分项是它免费、24 小时可接近、且入夜后有泛光照明</strong>；' +
        'New York State Pavilion 的废墟是另一个强主体（只能在围栏外拍）。' +
        '扣分在两处：<strong>喷泉不开的时候池底外露，画面明显变脏</strong>；' +
        '以及室内两馆都是低照度、禁三脚架的常规博物馆环境。',
      shots: [
        {
          name: 'Unisphere 水池南侧（不锈钢地球与三道轨道环）',
          view: [40.746384, -73.845075],
          desc: '<strong>清晨开园后到 09:00（人最少、光角度低）或日落前 40 分钟到蓝调结束</strong>' +
            '（不锈钢在低角度暖光下会整体泛金，入夜后泛光灯亮起可拍蓝调版）。' +
            '<strong>16–24mm</strong> 贴近水池边仰拍，让三道倾斜圆环的弧线充满画面、' +
            '球体压在上三分之二；<strong>35–70mm</strong> 退到池对岸拍球体与倒影的完整对称' +
            '（<strong>喷泉不开时水面更平、倒影更完整，但池底外露会脏画面，两者只能取其一</strong>）；' +
            '<strong>85–200mm</strong> 单独压缩那些焊接出来的大陆板块与经纬骨架的几何。' +
            '<strong>最值得做的一件事是绕着水池走完一整圈</strong>——' +
            '每转 45 度，三道圆环与大陆板块的重叠关系就完全不同，' +
            '这是一个真正需要用脚找机位的主体。' +
            '坐标为 Nominatim 反查到的 Unisphere 节点。'
        },
        {
          name: 'New York State Pavilion 外围（1964 年的未来主义废墟）',
          view: [40.745869, -73.846741],
          desc: '<strong>下午 15:30–日落</strong>：三座 Astro-View 观景塔与「Tent of Tomorrow」' +
            '的环形柱列在斜光下最有体积感。' +
            '<strong>平时只能在围栏外拍，无法进入</strong>（偶有特别开放日，需关注 NYC Parks 与 ' +
            'Queens Theatre 的公告）。' +
            '<strong>24–50mm</strong> 把三座塔与环形柱列一起收进横幅；' +
            '<strong>70–200mm</strong> 单独压缩塔顶的碟形结构（就是《Men in Black》里那两座「飞碟」）。' +
            '<strong>坐标为 Nominatim 反查到的 Queens Museum 节点，' +
            'New York State Pavilion 在其西南侧数百米内、沿园区主路步行 5–8 分钟可达；' +
            '本机位无 OSM 实体节点，地图针脚落在 Queens Museum 上（推算）。</strong>'
        }
      ],
      access: {
        visit: '<strong>公园的三个主要看点串起来 3–4 小时；只看 Unisphere 与 Queens Museum 两样 2–2.5 小时；' +
          '带小孩把 New York Hall of Science 做完则整天 5–6 小时。</strong>' +
          '分配：<strong>Unisphere 绕一圈 15–20 分钟</strong> + ' +
          '<strong>Queens Museum 60–75 分钟</strong>（其中 <strong>Panorama 至少 30 分钟</strong>，' +
          '沿架空坡道绕一整圈 + 在模型上找地方；Tiffany 玻璃与世博档案各 15 分钟）+ ' +
          'New York State Pavilion 围栏外 15 分钟 + ' +
          '<strong>New York Hall of Science 2–2.5 小时</strong>（馆方未给建议时长，' +
          '按展厅规模与动手型展项数量推算；<strong>带小孩加 Science Playground 与迷你高尔夫再加 60–90 分钟</strong>）+ ' +
          '园内步行转场合计 30–40 分钟。' +
          '<strong>周六加 Queens Night Market 另留 2 小时；坐一站去 Flushing 吃饭另留 1.5–2 小时。</strong>' +
          '<strong>公园面积 897 英亩，但上面这条线只用到南半部约 2.5 公里，不必担心走不完。</strong>',
        book: '<strong>公园与 Unisphere 不需预约，也不要门票。</strong>' +
          '<strong>New York Hall of Science</strong> 常规参观可现场买票，' +
          '<strong>但每周五 14:00–17:00 的免票场（Community Hours）必须提前预约</strong>——' +
          '<strong>官方同一页上给了两个时间口径，照实写出、不替你二选一：' +
          '一处写「visitors can reserve online Friday mornings beginning at 9 am」（当天上午 9:00 起在线预约），' +
          '另一处写「Book Tickets for This Starting at 10am the Same Day」（当天 10:00 起）。' +
          '名额少、放票即抢空，建议按较早的 09:00 守着，并打 718-699-0005 确认。</strong>' +
          '<strong>Queens Museum</strong> 为建议捐赠制，' +
          '官方「invite」访客提前预订定时入场票但不强制，现场也可购票',
        ticket: '<strong>以下于 2026 年 9 月 14 日在各官方页面复核。</strong>' +
          '<strong>公园本身与 Unisphere、New York State Pavilion 的外围观看全部免费</strong>' +
          '（NYC Parks 场地，无入园费）。' +
          '<strong>New York Hall of Science</strong>（47-01 111th Street）：' +
          '<strong>成人 $22；儿童、学生与老年人 $19</strong>' +
          '（官方原文「Adults $22 / Children, Students, Seniors $19」，' +
          '<strong>18 岁以下须成人陪同</strong>）。' +
          '<strong>这个票价是「General Admission」，官方明确不含 3D 影院、Rocket Park 迷你高尔夫' +
          '与其它需另行付费的体验项目</strong>；另有含全部附加项的 NYSCI Plus 票种。' +
          '<strong>每周五 14:00–17:00 为免票的 Community Hours，但必须提前预约</strong>' +
          '（同样不含影院、迷你高尔夫与需额外收费的课程）。' +
          '馆内停车场<strong>小车 $15、团体车辆 $20</strong>' +
          '（<strong>US Open 期间不对外开放</strong>；Queens Night Market 时段每车 $15；' +
          '部分会员免费）。' +
          '<strong>Queens Museum</strong>：<strong>建议捐赠制（Pay-What-You-Wish），' +
          '官方建议金额为成人 $8、老年人 $6、学生 $6，12 岁及以下免费</strong>。' +
          '<strong>需要提醒的一点：网上流传的旧数字（成人 $8／老年人 $4／18 岁以下免费）来自馆方 2018 年的 ' +
          'Fact Sheet，已经过期，请按现行 Visit 页的口径。</strong>' +
          '<strong>Queens Night Market</strong> 免费入场' +
          '（<strong>唯一例外是每季开幕前的两场 sneak preview 为售票场，用于控流</strong>），' +
          '各摊位按份计价、刻意把多数食物压在几美元一份',
        hours: '<strong>公园本身：按 NYC Parks 的市属公园通例每日 06:00–01:00。</strong>' +
          '<strong>Unisphere 立在公园的开放广场上、没有围栏与门禁，入夜后有泛光照明；' +
          '围绕它的水池喷泉为季节性运行，具体开放期官方未公布——未能从官方渠道确认。</strong>' +
          '<strong>New York State Pavilion 的内部平时不开放</strong>，只能在围栏外看；' +
          '偶有特别开放日，请关注 NYC Parks 与 Queens Theatre 的公告。' +
          '<strong>New York Hall of Science（2026 年 9 月 14 日在 nysci.org/visit 复核）：' +
          '官方原文「General Hours: Tuesday - Sunday 10am - 5pm | Last Entry at 4pm」，' +
          '即周二至周日 10:00–17:00、16:00 停止入场、周一闭馆</strong>；' +
          '官方另注明<strong>部分展项会比全馆更早关闭</strong>。' +
          '另有 <strong>Community Hours 每周五 14:00–17:00（免票，须预约）</strong>与' +
          '<strong>Sensory Sensitive Hour 每周六 10:00–11:00（降低声光强度）</strong>。' +
          '<strong>一条当下有效的临时闭馆，必须提前知道：官网首页写明' +
          '「The New York Hall of Science will be closed from Monday, August 31st through Tuesday, ' +
          'September 15th. We will reopen on Wednesday, September 16th!」' +
          '——即 2026 年 8 月 31 日至 9 月 15 日全馆闭馆，9 月 16 日（周三）重开。' +
          '这类多日维护性闭馆并非一次性，将来的读者请在出发前查一次 nysci.org 的首页公告。</strong>' +
          '<strong>Queens Museum（2026 年 9 月 14 日在 queensmuseum.org 复核）：' +
          '周一、周二闭馆；周三至周五 12:00–17:00；周六与周日 11:00–17:00。</strong>' +
          '<strong>此处有一个官方口径的新旧差异，照实写出：馆方 2018 年的 Fact Sheet 写的是' +
          '「Wednesday through Sunday, 11am to 5pm」，与现行官网上周三至周五 12:00 开门的' +
          '钟点表不一致——请按现行官网。</strong>' +
          '该馆另闭 July 4、Thanksgiving、Christmas 与 New Year\u2019s Day，' +
          '并在 12 月 24 日与 31 日 15:00 后闭馆。' +
          '<strong>两馆都周一闭馆，而 Queens Museum 连周二也闭——' +
          '所以想把两馆一天做完，只能选周三至周日。</strong>' +
          '<strong>Queens Night Market（2026 年 9 月 14 日据 queensnightmarket.com 复核）：' +
          '每周六 16:00–24:00，地点在 New York Hall of Science 后面的停车场（47-01 111th Street），' +
          '2026 赛季为 4 月 18 日至 8 月 22 日、' +
          '以及 9 月 19 日至 10 月 31 日两段，中间 8 月 23 日至 9 月 18 日为配合 US Open 停摆。</strong>' +
          '<strong>官方口径是「风雨无阻，除天气构成安全威胁时」；' +
          '会期与停摆窗口逐年随 US Open 日程变动，出发前请查 queensnightmarket.com。</strong>' +
          '<strong>另外把这两个日程记在心上：每年八月底到九月初的 US Open 期间' +
          '（在园内的 USTA Billie Jean King National Tennis Center），' +
          '以及四月至九月 Mets 在 Citi Field 的主场比赛日，' +
          '园区东北部的人流与停车会完全不同于平日。</strong>',
        parking: '<strong>这是本手册里少数几个开车不吃亏的点位，但仍以地铁为优。</strong>' +
          '<strong>New York Hall of Science 有自营停车场（小车 $15、团体车辆 $20），' +
          '但官方明确写明 US Open 期间不对外开放</strong>；' +
          'Queens Museum 与 Unisphere 一带另有园内停车场，' +
          '<strong>Mets 主场日与 US Open 期间会被占满或改为活动收费</strong>。' +
          '<strong>地铁只有一条但极好用：7 号线</strong>——' +
          '<strong>Mets–Willets Point 站</strong>（公园东北角，' +
          '<strong>官方指路：出站沿栈道进公园，看到大圆形广场后靠右沿林荫道走，' +
          '网球场在右手边，然后就会看见 Unisphere，Queens Museum 就在 Unisphere 再往前</strong>）；' +
          '<strong>111th Street 站</strong>（离 New York Hall of Science 与 Queens Night Market 最近，' +
          '<strong>官方指路：出站往南走四个街区、穿过一座跨线桥，夜市就在科学馆后面的左侧</strong>）。' +
          '<strong>7 号线从 Manhattan 的 Grand Central 或 Times Square 过来约 30–40 分钟，' +
          '且部分班次为跳站快车（车头标菱形），进站前看一眼是慢车还是快车。</strong>' +
          '巴士 Q23、Q48、Q58 可达公园周边。' +
          '<strong>Queens Night Market 官方自己劝人不要开车（「very limited parking availability」）</strong>',
        walk: 'Mets–Willets Point 站到 <strong>Unisphere 约 1.1 公里／14 分钟</strong>，全程平路、有铺装步道；' +
          'Unisphere 到 <strong>Queens Museum 约 200 米／3 分钟</strong>（就在西侧）；' +
          'Queens Museum 到 New York State Pavilion 约 400–600 米／5–8 分钟；' +
          'New York State Pavilion 到 <strong>New York Hall of Science 约 600 米／8 分钟</strong>；' +
          'New York Hall of Science 到 111th Street 站约 700 米／9 分钟（含一座跨线桥下的通道）。' +
          '<strong>三个主要看点串起来约 2.5 公里／全程步行 35–40 分钟，全平路可轮椅通行。</strong>' +
          '<strong>Mets–Willets Point 站到 7 号线终点 Flushing–Main Street 只有一站、约 3 分钟</strong>，' +
          '出站即是 Main Street 与 Roosevelt Avenue 的华人社区核心'
      },
      notes: [
        '<strong>先对日历再出门，这一站的闭馆规则最容易撞：两座博物馆都周一闭馆，' +
          '而 Queens Museum 连周二也闭，New York Hall of Science 周一闭。</strong>' +
          '想一天做完两馆只能选<strong>周三至周日</strong>。' +
          '另外 <strong>New York Hall of Science 有过连续两周以上的维护性闭馆</strong>' +
          '（2026 年是 8 月 31 日至 9 月 15 日），出发前务必查一次 nysci.org 首页公告',
        '<strong>Unisphere 的喷泉不是常年开的。</strong>' +
          '喷泉运行时它是一座立在水面上的地球，不运行时池底与底座外露、观感差很多；' +
          '<strong>季节性运行的具体开放期官方未公布——未能从官方渠道确认</strong>，' +
          '大体上暖季开、冷季关。' +
          '好消息是<strong>这个雕塑本身免费、没有门禁、入夜后有泛光照明</strong>，' +
          '所以就算喷泉不开也不至于白跑',
        '<strong>八月底到九月初请避开这个公园。</strong>' +
          '<strong>US Open 在园内的 USTA Billie Jean King National Tennis Center 举行</strong>，' +
          '那两周周边交通、停车与人流全面失控，' +
          '<strong>New York Hall of Science 的停车场在 US Open 期间不对外开放</strong>，' +
          '<strong>Queens Night Market 也会停摆两三周</strong>。' +
          '四月至九月 Mets 的主场比赛日同样会让东北角很挤，但影响范围小得多',
        '<strong>Queens Museum 的 Panorama 是全纽约最被低估的一件展品，请为它单独留时间。</strong>' +
          '9,335 平方英尺、约 89.5 万栋建筑，' +
          '<strong>正确的看法是沿架空坡道绕一整圈，再回头在模型上找你认识的地方</strong>，' +
          '而不是拍一张照就走。' +
          '这座馆是建议捐赠制，<strong>成本极低而回报很高，别因为「没听过」就跳过</strong>',
        '<strong>New York Hall of Science 的门票不含 3D 影院、Rocket Park 迷你高尔夫与部分体验项目。</strong>' +
          '带小孩的话这些加项会显著推高预算与时间，' +
          '<strong>请在售票前就决定要不要买含附加项的票种，进馆后再补会更麻烦</strong>。' +
          '不带小孩的成年访客建议只买 General Admission，把时间放在 Great Hall 的钴蓝玻璃墙' +
          '与户外 Rocket Park 的两枚真火箭上',
        '<strong>New York State Pavilion 平时进不去，别按「能进去逛」来计划。</strong>' +
          '它是一座经过结构稳定处理的废墟，' +
          '<strong>只在少数特别开放日对公众开放（需关注 NYC Parks 与 Queens Theatre 公告）</strong>；' +
          '平时能做的就是在围栏外绕着看。' +
          '这依然值得走那 600 米',
        '<strong>把 Flushing 加进来，这一站的性价比会翻一倍。</strong>' +
          '<strong>7 号线从 Mets–Willets Point 往东只有一站就是终点 Flushing–Main Street</strong>，' +
          '出站即是全美最大的华人聚居区之一，' +
          '粤闽川台各路菜系、点心铺、商场地下的小吃广场与生鲜市场高密度聚集，价格远低于 Manhattan。' +
          '<strong>店家变动极快，不要照着几年前的推荐名单走——现场看哪家人多进哪家是最可靠的办法。</strong>' +
          '这也是本手册给 Queens 这一条的理由：' +
          '<strong>它是全美族裔最多元的行政区，而这件事在 Flushing 的街上比在任何一个展馆里都清楚</strong>',
        '<strong>7 号线有跳站快车，进站前看一眼车头标识。</strong>' +
          '菱形标的是快车（部分小站不停），圆形标的是慢车；' +
          '<strong>Mets–Willets Point 与 111th Street 两站并非所有班次都停</strong>，' +
          '上错车会被带到终点再折回，多花二十分钟'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Flushing_Meadows_Unisphere.jpg',
          cap: 'Unisphere 与环绕它的三道轨道环 · Avery A. Benson / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Flushing_Meadows_Fair_Grounds_td_%282018-05-26%29_020_-_Unisphere.jpg',
          cap: '自水池对岸看不锈钢地球全貌 · Tdorante10 / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Queens_Museum_Panorama_with_Never_Built_New_York.jpg',
          cap: 'Queens Museum 的 Panorama of the City of New York 全市模型 · Jeremy Neiman / CC BY-SA 4.0' }
      ]
    }
  ]
};
