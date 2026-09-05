/* Washington DC 地域的总览与附录静态内容。
   景点数据在 dc/data.js（由 tools/assemble.py 从 dc/parts/*.js 生成）。 */
(function () {
  'use strict';

  var VERIFIED = '2026-09-05';

  var META = [
    ['实际日期', 'Philadelphia 10/19–20 · DC 10/21–25'],
    ['子地区', '7'],
    ['景点', '48'],
    ['核实日期', VERIFIED]
  ];

  /* ---------- 日出日落：本地域全境差异极小，一张表够用 ---------- */
  var SUN = [
    ['Washington DC（National Mall）', '06:58 / 90°', '19:02 / 270°', '07:10 / 97°', '18:41 / 263°', '07:24 / 104°', '18:21 / 257°'],
    ['Philadelphia（City Hall）', '06:51 / 90°', '18:54 / 270°', '07:03 / 97°', '18:33 / 263°', '07:18 / 104°', '18:12 / 256°'],
    ['Arlington / Mount Vernon', '06:58 / 90°', '19:02 / 270°', '07:10 / 97°', '18:42 / 263°', '07:24 / 103°', '18:21 / 257°']
  ];

  /* ---------- 闭馆日交叉表：本地域最容易踩的坑 ---------- */
  var CLOSED = [
    ['周一', 'Library of Congress<span class="muted">（周日也关）</span>', 'Philadelphia Museum of Art、Rodin Museum、Barnes Foundation<span class="muted">（周二也关）</span>', '按周一走 National Mall 露天纪念碑最划算'],
    ['周二', '<b>Philadelphia 全区近乎瘫痪</b>：Museum of Art、Barnes、Rodin、Whitney 式的全部主力馆', '—', '周二不要放在 Philadelphia'],
    ['周三', '—', '—', '本区唯一没有系统性闭馆的一天'],
    ['周四', '—', 'Library of Congress 有晚场开放', 'Library of Congress 主阅览室走廊在周四有晚间时段'],
    ['周五', '—', 'Elfreth\'s Alley Museum 开放<span class="muted">（仅五六日）</span>', 'Philadelphia Museum of Art 有 Pay What You Wish 晚场'],
    ['周六', 'Supreme Court', 'Library of Congress 主阅览室地面走廊<span class="muted">（仅二至五）</span>', 'Capitol、LOC 主楼仍开，但看不到阅览室地面'],
    ['周日', '<b>Capitol Hill 全军覆没</b>：US Capitol、Library of Congress、Supreme Court 同时关闭', 'Dumbarton Oaks<span class="muted">（周一也关）</span>', '周日只适合露天纪念碑与街区']
  ];

  /* ---------- 需要提前抢的票：按提前天数排序 ---------- */
  var BOOK = [
    ['Frederick Douglass NHS<span class="muted">（宅邸 ranger 导览）</span>', '最多提前 <b>6 个月</b>',
     'recreation.gov Facility 234636，$1 不退手续费。最晚需提前一天'],
    ['United States Capitol', '滚动提前 <b>90 天</b>',
     'visitthecapitol.gov 自助预约，免费。参观前至少 2 天补齐每位参观者姓名。未预约也可在 Emancipation Hall 领当日余票'],
    ['The People\'s House<span class="muted">（白宫官方访客中心）</span>', '<b>次月全月票在每月第一个工作日 17:00 ET 前放出</b>',
     '<b>10 月的票已于 9 月 1 日放出，现在就该订。</b>9 月下旬的票 8 月 1 日已放完'],
    ['Library of Congress · Jefferson Building', '滚动提前 <b>30 天</b>',
     '必须有免费定时票才能进楼，无票不得入内。loc.gov/visit 经 Etix，单次最多 20 人；另有当天票'],
    ['Washington Monument<span class="muted">（登顶）</span>', '滚动提前 <b>30 天</b> 上午 10:00 ET',
     'recreation.gov，$1 不退手续费。另有一批「前一日票」，官方页面对放票时刻有 15:00 与 10:00 两种口径，<b>两个时间点都盯</b>'],
    ['NMAAHC', '滚动提前 <b>30 天</b>；同日票每天 8:15 ET 前在线放出',
     '所有人不论年龄都需定时票，含婴儿。<b>现在已无淡季 walk-in 豁免</b>，2019 年那套旺淡季规则已废除'],
    ['Dumbarton Oaks Gardens', '越早越好',
     '必须 Eventbrite 定时票，<b>现场无售票点、无候补、无 standby</b>。每户每日限 10 张，售出不退，不可再次入场'],
    ['Ford\'s Theatre', '提前几天足够',
     '票免费但线上每张收 $5 手续费，年卡不能抵扣。当日免费票 8:30 起现场发放。<b>注意并非每个时段都含剧场本体</b>，有些只含 Petersen House'],
    ['Eastern State Penitentiary', '提前几天足够',
     '<b>2026 年 9 月 8 日起导览团大幅缩减</b>：工作日只剩 12:00 一场，周六日 11:00 一场。自助音频票不受影响'],
    ['Mount Vernon<span class="muted">（宅邸）</span>', '提前几天足够',
     '园区票可现场买，但宅邸需另配定时票。官方明示旺季现场买时最早场次可能在抵达后两小时以上'],
    ['Washington National Cathedral', '塔楼攀登必须提前',
     '自助参观现场也可买。<b>塔楼攀登与幕后导览名额很少</b>，按讲解员排班开放']
  ];

  /* ---------- 出发当天复查清单 ---------- */
  var RECHECK = [
    ['<b>Lafayette Park / Ellipse / Pennsylvania Ave 广场</b>是否仍封闭', '<b>高</b>',
     '现行封闭令到 <b>9/22</b> 为止，但自 1 月 19 日起已按月连续续期八次。' +
     '<a href="https://www.nps.gov/whho/learn/management/temporary-area-closures.htm" target="_blank" rel="noopener">NPS 临时封闭公告页</a>'],
    ['<b>Lincoln Memorial Reflecting Pool</b> 是否重开、池内是否有水', '<b>高</b>',
     '现行封闭令到 <b>9/10</b>，但该项目已多次跳票，且 9 月初刚签出一份为期一年的水处理合同。' +
     '<a href="https://www.nps.gov/nama/learn/management/notice-to-public-reflecting-pool-closure.htm" target="_blank" rel="noopener">NPS 封闭公告</a>'],
    ['<b>Ford\'s Theatre</b> 官网与 NPS 公告的矛盾', '<b>高</b>',
     'NPS 称剧场 7/31、博物馆 8/15 已重开，但 fords.org 仍挂着「temporarily closed」横幅且只卖到 8/31 的票。' +
     '<a href="https://fords.org/" target="_blank" rel="noopener">fords.org</a> 订票时确认'],
    ['<b>The People\'s House</b> 定时票是否还有余量', '<b>高</b>',
     '放票机制特殊（见附录 C），错过就只能等下一批。' +
     '<a href="https://www.thepeopleshouse.org/" target="_blank" rel="noopener">thepeopleshouse.org</a>'],
    ['Washington Monument <b>10/5 全天维护关闭</b>是否有变动或新增日期', '中',
     '<a href="https://www.nps.gov/wamo/planyourvisit/conditions.htm" target="_blank" rel="noopener">NPS Washington Monument 现状页</a>'],
    ['Smithsonian Castle 是否延长开放<span class="muted">（现定 9/7 后重新关闭）</span>', '中',
     '<a href="https://www.si.edu/museums/smithsonian-institution-building" target="_blank" rel="noopener">si.edu Castle 页面</a>'],
    ['秋色进度<span class="muted">（决定 Rock Creek、Prospect 式林地与 Great Falls 值不值得去）</span>', '中',
     'DC 低地峰值预计 <b>10/25–11/8</b>，近峰 10/20–27；Blue Ridge 早两周。' +
     '<a href="https://www.virginia.org/fall-foliage-report/" target="_blank" rel="noopener">Virginia 秋色周报</a>'],
    ['GW Memorial Parkway 南行封路<span class="muted">（9/21–10/29 周一至四 9:30–14:30）</span>', '中',
     '影响从 Great Falls 返回 Rosslyn 的主路线。' +
     '<a href="https://www.nps.gov/gwmp/planyourvisit/conditions.htm" target="_blank" rel="noopener">NPS GW Parkway 现状页</a>'],
    ['Supreme Court 西立面脚手架是否已拆', '中',
     '2025 年 1 月启动的约 8 个月工程，AOC 官员 2026 年 2 月称「2026 年内完工」，之后无公告。出发前搜一下近期照片'],
    ['C&O Canal Georgetown 段是否已复水<span class="muted">（目前是干河床）</span>', '低',
     '2026 年 2 月渠壁垮塌，工程排到 2026 年秋。' +
     '<a href="https://www.nps.gov/choh/planyourvisit/conditions.htm" target="_blank" rel="noopener">NPS C&amp;O Canal 现状页</a>'],
    ['联邦拨款状态<span class="muted">（仅当行程推迟到 12 月中旬以后才需要看）</span>', '低',
     'PL 119-103 覆盖至 <b>2026/12/11</b>，本窗口内无停摆风险']
  ];

  var SOURCES = [
    ['日出日落 / 方位角', '按 NOAA 太阳位置算法自行计算（tools/sun.py），并与各研究独立结果交叉核对'],
    ['封闭令与临时关闭', 'NPS 各园区 Temporary Closures 与 Record of Determination 原文'],
    ['拨款状态', 'Public Law 119-103（H.R. 6500），2026 年 9 月 2 日签署'],
    ['开放时间 / 票价 / 预约规则', '各机构官方页面，2026 年 9 月核实；si.edu、nps.gov、loc.gov、aoc.gov、supremecourt.gov 等'],
    ['摄影与三脚架政策', '各馆官方规定，逐一单独核实；Library of Congress 依 36 C.F.R. 702.4'],
    ['秋色时间', 'Virginia / Pennsylvania 官方秋色周报与 2026 年季度气候展望'],
    ['坐标', 'OpenStreetMap 实体节点；由几何推算的已在正文标注「推算」'],
    ['参考图片', 'Wikimedia Commons，多为 CC BY-SA / CC0 / 公有领域']
  ];

  /* ---------- 总览 ---------- */
  var OVERVIEW = [
    /* 按实际行程日期收窄后的结论。原先按笼统的「9 月下旬–10 月下旬」写，
       收窄后有大量条目直接失效或反转，这张卡片就是差异清单。 */
    '<details class="callout tip" open><summary class="title">📅 按你的实际日期收窄：Philadelphia 10/19–20，Washington DC 10/21–25</summary>',
    '<p>下面这几条是把笼统窗口换成实际日期后<strong>结论发生变化</strong>的部分，' +
    '优先看这里，再看其余卡片里的通用内容。星期已换算好：' +
    '<strong>10/19 周一、10/20 周二、10/21 周三、10/22 周四、10/23 周五、10/24 周六、10/25 周日</strong>。</p>',

    '<p><strong>1. 10/20 周二是 Philadelphia 的死日，必须靠排序绕开。</strong>' +
    'Philadelphia Museum of Art、Barnes Foundation、Rodin Museum <strong>周二全部闭馆</strong>——' +
    '这三个就是 Parkway 子地区的全部主力。你在 Philadelphia 只有两天，所以顺序是被锁死的：' +
    '<strong>Parkway 博物馆群必须放 10/19 周一，Old City 那批（Independence Hall、Liberty Bell 全年无休）放 10/20 周二。</strong>' +
    '10/19 周一还要注意 Eastern State 的导览团工作日全天只有 12:00 一场。</p>',

    '<p><strong>2. 10/25 周日 Capitol Hill 全军覆没。</strong>' +
    'US Capitol、Library of Congress、Supreme Court 三个同时关门，' +
    '而 10/25 是你在 DC 的最后一天。<strong>Capitol Hill 必须排在 10/21–10/23 这三天（周三至周五）之内。</strong>' +
    '10/24 周六也不行：Supreme Court 周六关，且 Library of Congress 主阅览室的地面走廊只在周二至周五开放，' +
    '周六你只能从二层 Overlook 往下拍。</p>',

    '<p><strong>3. 秋色反而是好消息。</strong>DC 低地的近峰期是 <strong>10/20–10/27</strong>，' +
    '你的 DC 段 10/21–25 <strong>整段落在近峰窗口内</strong>。' +
    '这和笼统窗口下「九月下旬完全没有颜色」的结论正好相反——按你的实际日期，' +
    'Rock Creek 一带的林地、Great Falls 的峡谷两岸、Dumbarton Oaks 的园景都成立，值得排进去。' +
    'Philadelphia 略早于 DC，10/19–20 也已进入转色期。</p>',

    '<p><strong>4. 这几条原本的警告可以直接划掉，都在你抵达之前：</strong>' +
    'Washington Monument 的 <strong>10/5 全天维护关闭</strong>、' +
    '<strong>Columbus Day 10/12 周一</strong>的联邦假日安排、' +
    'Dumbarton Oaks 的 <strong>10/8–10 闭园</strong>。' +
    'Dumbarton Oaks 平时周一周二闭园，但你在 DC 的日子是周三到周日，不受影响。</p>',

    '<p><strong>5. 两条被日期锁死的坏消息。</strong>' +
    '<strong>Smithsonian Castle</strong> 在 9 月 7 日后重新关闭，你以一个多月之差确定错过（Haupt Garden 仍开）。' +
    '<strong>国会两院 10 月整月休会</strong>，旁听席即便开放也只能看空场，' +
    '而且两院议席区<strong>禁止携带任何电子设备</strong>，相机手机都要寄存——这个点位在你的日期下没有摄影价值。</p>',

    '<p><strong>6. Arlington 换岗频率已切换。</strong>10 月 1 日起改为<strong>每小时整点一次</strong>' +
    '（4–9 月是每半小时）。配合 8:00–17:00 的开放时间，10/25 那天只有八场可看，' +
    '想拍就得对着整点安排。</p>',

    '<p><strong>7. The People\'s House 的票现在就得订。</strong>' +
    '它的放票规则是每月第一个工作日 17:00 ET 前放出次月全月票，' +
    '所以<strong>10 月的票已于 9 月 1 日放出</strong>。详见<a href="#appendix">附录 C</a>。</p>',

    '<p class="muted">其余卡片保留了整个 9 月下旬至 10 月下旬的通用信息，' +
    '万一行程调整仍然可用。</p></details>',

    '<details class="callout warn" open><summary class="title">⚠️ 两处「按月续期」的封闭令，是本区唯一真正的变数</summary>',
    '<p>这一区绝大多数点位都稳定得像博物馆时刻表，但有两处例外，' +
    '它们的共同特点是<strong>封闭命令按月签发、恰好在你出行窗口开始前到期</strong>，所以现在无法给你确定答案。</p>',
    '<p><strong>1. White House 周边的公园区域。</strong>' +
    'NPS 于 9 月 1 日签署 Record of Determination，应 Secret Service 要求关闭 Lafayette Park、Ellipse、Sherman Park、' +
    'First Division Monument、E Street 与 White House Sidewalk，<strong>有效期至 9 月 22 日</strong>。' +
    '但这是 8 月同类命令的续期，而 Lafayette Park 自 <strong>1 月 19 日</strong>起就一直被临时钢围栏圈着——' +
    '至今已连续续期八个月。国家首都规划委员会 9 月 3 日刚受理了给 Lafayette Square 加装<strong>永久围栏</strong>的方案。' +
    '<strong>请按「进不去」来做计划</strong>，可用的替代是 H Street NW 人行道用 200mm 越过公园拍北立面。</p>',
    '<p><strong>2. Lincoln Memorial Reflecting Pool。</strong>' +
    '水池本体、两侧步道与南北草地中带都在围挡内，<strong>现行封闭令到 9 月 10 日</strong>。' +
    '$1,600 万翻修 6 月完工后随即出现涂层剥落与藻华，7 月再次放空，9 月初又新签了一份为期一年、$270 万的水处理合同。' +
    '<strong>把「水池有水且能走近」当成运气，不要当成计划。</strong>' +
    '围挡不影响从东侧拍纪念堂主体，只影响倒影构图。</p>',
    '<p>这两条都列进了<a href="#appendix">附录 E 的出发当天复查清单</a>。</p></details>',

    '<details class="callout good"><summary class="title">✅ 联邦政府停摆风险：本窗口内已解除</summary>',
    '<p>这一区大部分场馆都是联邦机构，停摆就关门，所以这条本来该是头号风险。<strong>现在它不是了。</strong></p>',
    '<p><strong>H.R. 6500《Continuing Appropriations and Extensions Act, 2027》已于 2026 年 9 月 2 日签署成为 Public Law 119-103</strong>，' +
    '按 FY2026 水平延续拨款至 <strong>2026 年 12 月 11 日</strong>。参议院以 90–6 通过，众议院以 370–48 通过，' +
    '比 9 月 30 日的悬崖提前了约四周。你 9 月下旬到 10 月下旬的整个窗口都在覆盖期内，' +
    '<strong>10 月 1 日财年切换不会触发停摆</strong>。</p>',
    '<p>下一个真实节点是 12 月 11 日，在你离境之后。仅当行程推迟到 12 月中旬以后才需要重新评估。</p>',
    '<p>顺带一句：即便真的停摆，<strong>Mount Vernon</strong>（私营，Mount Vernon Ladies\' Association）与' +
    '<strong>Old Town Alexandria</strong>（市政）完全免疫，是本区最可靠的备胎。</p></details>',

    '<details class="callout warn"><summary class="title">⚠️ 闭馆日是本区最容易踩的坑：周二毁 Philadelphia，周日毁 Capitol Hill</summary>',
    '<p>这一区的景点密度高到几乎不用规划路线，但闭馆日会成片地废掉整个子地区，' +
    '而且两个城市的「死日」正好不同。</p>',
    '<p><strong>周二：Philadelphia 近乎瘫痪。</strong>Museum of Art、Barnes Foundation、Rodin Museum 同时关闭——' +
    '这三个就是 Parkway 子地区的全部主力。周二请把 Philadelphia 整个跳过。</p>',
    '<p><strong>周日：Capitol Hill 全军覆没。</strong>US Capitol、Library of Congress、Supreme Court 三个同时关门。' +
    '<strong>周一 Library of Congress 也关</strong>，所以这个子地区实际只有周二到周五能拿全。</p>',
    '<p><strong>周六还有一个隐藏陷阱</strong>：Library of Congress 主阅览室的地面走廊只在周二至周五开放' +
    '（加周四晚场），周六你只能从二层 Overlook 往下拍。完整交叉表见<a href="#appendix">附录 B</a>。</p></details>',

    '<details class="callout tip"><summary class="title">💡 秋色：你的 10/21–25 正好落在近峰窗口内</summary>',
    '<p>这条决定了本区好几个点位值不值得去。</p>',
    '<p><strong>DC 低地的秋色峰值在 10 月 25 日至 11 月 8 日</strong>，近峰期 10 月 20–27 日。' +
    'Blue Ridge 与 Shenandoah 早得多，约 10 月 10–20 日。Philadelphia 与 DC 大致同步，略早几天。' +
    '2026 年的季度展望是大西洋走廊比常年略冷略干，据此可以把上述日期<strong>再往前挪 3–5 天</strong>。</p>',
    '<p><strong>按你的实际日期，秋色是成立的。</strong>DC 段 10/21–25 整段在近峰期内，' +
    'Theodore Roosevelt Island 这类纯林地点位、Great Falls 的峡谷两岸、Dumbarton Oaks 的园景都值得排；' +
    '若展望里的偏冷偏干成立，10/21 就可能已经接近峰值。Philadelphia 的 10/19–20 略早于 DC，' +
    '处在转色期，Parkway 沿线与 Boathouse Row 的河岸坡地已有颜色但未到最浓。</p>',
    '<p class="muted">若行程改到九月下旬，结论完全反转：那时低地没有任何颜色，' +
    '上述几个纯林地点位应直接跳过。</p>',
    '<p>反过来说，<strong>十月下旬有一个九月没有的好处</strong>：日落提前到 18:20，而各馆闭馆时间不变，' +
    '所以你走出博物馆时正好撞上黄金时段；九月下旬日落 19:00，出馆后要空等一个多小时。' +
    '这两个月需要完全不同的日程编排。</p></details>',

    '<details class="callout info"><summary class="title">本区被降级或无法抵达的点位</summary>',
    '<p>只有一个点位标成了红色卡片：<strong>Smithsonian Castle</strong>。' +
    '它自 2023 年 2 月起就因一项约 $5.3 亿、为期五年的工程关闭，' +
    '期间为 America 250 短暂开放了 <strong>5 月 22 日至 9 月 7 日</strong>，之后重新关闭——' +
    '你会以两三周之差错过。<strong>Enid A. Haupt Garden 不受影响，照常开放</strong>，所以卡片保留了室外机位。</p>',
    '<p>另外几处虽然可达但已明显降级，正文里都写清了原因：' +
    '<strong>White House</strong> 掉到 2.5 分（周边公园区全封）、' +
    '<strong>Capitol 东立面</strong>被脚手架包到 2028 年秋（外景全部改走西立面）、' +
    '<strong>C&amp;O Canal 的 Georgetown 段是干河床</strong>（2 月渠壁垮塌）、' +
    '<strong>Netherlands Carillon 塔身永久禁止攀登</strong>（网上那些「登塔看景」的攻略已经过期）。</p></details>',

    '<details class="callout info"><summary class="title">当前状态</summary>',
    '<p>七个子地区的联网研究全部完成并入库，共 <strong>48 个景点</strong>。' +
    '所有景点已按纬度<strong>从北到南</strong>排序，地图针脚编号与卡片编号一一对应。' +
    '实时信息核实于 <strong>' + VERIFIED + '</strong>。</p>',
    '<p>研究过程中有三条被推翻的常见说法值得单独点出：' +
    '<strong>National Archives 圆厅的禁拍令已经废除</strong>（现行政策是「鼓励」无闪光拍摄，几乎所有攻略都还在抄旧规矩）；' +
    '<strong>Tidal Basin 海堤工程已于 2026 年 4 月 21 日全线完工重开</strong>（2024–25 年那批「Jefferson Memorial 沿岸封闭」的说法全部过期）；' +
    '<strong>Mount Vernon 宅邸内部允许手持无闪光拍摄</strong>。</p>',
    '<p>本页仍有一项待办：景点图片目前直连 Wikimedia Commons，尚未本地化到仓库。</p></details>'
  ].join('');

  /* ---------- 附录 ---------- */
  function table(head, rows, cls) {
    return '<div class="tbl-scroll"><table class="plan"><thead><tr>' +
      head.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr>' + r.map(function (c, i) {
          return '<td>' + (i === 0 ? '<b>' + c + '</b>' : c) + '</td>';
        }).join('') + '</tr>';
      }).join('') +
      '</tbody></table></div>';
  }

  var APPENDIX = [
    '<h3 class="apx-h">A. 日出日落与太阳方位（2026，EDT）</h3>',
    '<p class="section-lead">方位角自北顺时针。' +
    '黄金时刻约为日落前 40 分钟至日落；<strong>蓝调最佳在日落后 15–25 分钟</strong>，' +
    '这一区所有夜景建筑（Lincoln、Jefferson、Capitol 西立面、Union Station）都在这个窗口内最好看。' +
    '<strong>夏令时结束于 11 月 1 日，整个出行窗口都还在 EDT 之内。</strong>' +
    '本地域南北跨度带来的差异很小：Philadelphia 比 DC 早约 7–9 分钟，方位角几乎相同。</p>',
    table(['地点', '日出 9/25', '日落 9/25', '日出 10/8', '日落 10/8', '日出 10/22', '日落 10/22'], SUN),
    '<p class="section-lead"><strong>一条可以直接抄的几何事实：</strong>' +
    'National Mall 的东西中轴线实测方位角为 <strong>89° / 269°</strong>。' +
    '9 月 25 日的日落方位是 270°，几乎正落在轴线上——' +
    '这意味着 <strong>Capitol 西立面在日落时是正面受光而不是逆光</strong>，' +
    '而日出方位 90° 让太阳几乎正好升在穹顶背后。到 10 月 22 日方位偏到 257°，这个对齐就散了。' +
    '同理，Iwo Jima Memorial 到 Capitol 的视线是 91°，' +
    '<strong>九月下旬的日出几乎精确落在这条轴上</strong>，十月下旬则不再成立。</p>',

    '<h3 class="apx-h">B. 闭馆日交叉表</h3>',
    '<p class="section-lead">本区的闭馆日会成片废掉整个子地区，而 Philadelphia 与 DC 的「死日」不同。' +
    '<strong>能拿全 Capitol Hill 的只有周二至周五。</strong>' +
    '另注意 <strong>10 月 12 日是 Columbus Day</strong>，联邦假日安排与平日不同。</p>',
    table(['星期', '完全关闭', '部分关闭 / 特殊时段', '实用建议'], CLOSED),

    '<h3 class="apx-h">C. 需要提前抢的票（按提前天数排序）</h3>',
    '<p class="section-lead">这一区的门票大多免费，但<strong>免费不等于容易拿</strong>——' +
    'Library of Congress 现在无票根本不许进楼，NMAAHC 取消了淡季 walk-in 豁免，' +
    'Dumbarton Oaks 现场既无售票点也无候补。' +
    '<strong>其中 The People\'s House 的放票机制最容易错过，请先看它那一行。</strong></p>',
    table(['项目', '提前多久 / 放票规则', '要点'], BOOK),
    '<p class="section-lead"><strong>三脚架：这一区几乎处处禁止，值得单独记住。</strong>' +
    'Capitol Grounds 需 USCP 许可（Union Square 与 Reflecting Pool 自 2011 年起也算 Capitol Grounds，' +
    '想合法架三脚架要退到 3rd Street 以西的 NPS 地界）；' +
    'Library of Congress 依 <strong>36 C.F.R. 702.4（2026 年 3 月 19 日生效）</strong>明令禁止，' +
    '许可只在周一闭馆日发放；八个博物馆全部禁止；' +
    'Arlington 的禁止清单原文是「装不进手袋的三脚架」；Mount Vernon 全庄园禁止。' +
    '<strong>露天纪念碑的户外广场可以架，但踏上白色大理石台阶就进了 Memorial Restricted Area，一律禁止。</strong></p>',

    '<h3 class="apx-h">D. 数据来源</h3>',
    table(['数据', '来源'], SOURCES),

    '<h3 class="apx-h">E. 出发当天复查清单</h3>',
    '<p class="section-lead">本报告的实时信息核实于 <strong>' + VERIFIED + '</strong>。' +
    '其中有几项在核实当天仍在变动，且都属于「按月续期」的行政命令——' +
    '<strong>标了「高」的四条请在出发当天早上逐条点开看一遍</strong>，' +
    '尤其是前两条，它们的现行命令到期日都落在你出行窗口开始之前。</p>',
    table(['要查什么', '变动可能', '链接 / 方式'], RECHECK)
  ].join('');

  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('hero-meta', META.map(function (m) {
    return '<span class="chip">' + m[0] + ' <b>' + m[1] + '</b></span>';
  }).join(''));
  fill('overview-body', OVERVIEW);
  fill('appendix-body', APPENDIX);
})();
