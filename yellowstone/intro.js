/* Yellowstone + Grand Teton 地域的总览与附录静态内容。
   景点数据在 yellowstone/data.js（由 tools/assemble.py 从 yellowstone/parts/*.js 生成）。

   这一本与另外三本的结构差别在于：城市手册的关键约束是「闭馆日」，
   这一本的关键约束是「关门日期」——园区道路与食宿设施从十月初开始逐段关闭，
   而且各家关的日子都不一样。所以附录 A 是一张关门日历，而不是开放时间总表。 */
(function () {
  'use strict';

  var VERIFIED = '2026-09-15';

  /* 顶部信息条只留季节与核实日期：具体日期属于某一次行程，
     景点数量在全区总地图的标题里已经有了。 */
  var META = [
    ['季节参考', '设施与路网同时完整的最后一段：九月下旬至十月初'],
    ['核实日期', VERIFIED]
  ];

  /* ---------- 2026 年秋季关门日历 ----------
     日期来自各子地区卡片里已逐条核实的官方与特许经营商页面。
     Old Faithful Inn 一行保留了 NPS 与 Xanterra 两个互相矛盾的口径，
     因为这正是需要出行前自己再确认一次的那类信息。 */
  var CLOSE = [
    ['9 月 7 日', 'Roosevelt Lodge（已关）、Jenny Lake Ranger Station', 'Tower–Roosevelt 一带此后没有住处'],
    ['9 月 8 日', 'Grand Teton 的 Moose-Wilson Road（施工）', '2026 年秋季全段不可通行，看 moose 改去 Gros Ventre'],
    ['9 月底', 'Jenny Lake Campground（9/27）、Colter Bay 各项设施陆续', '园内营地开始成片收摊'],
    ['10 月 4 日', '<b>Jackson Lake Lodge 全部关闭</b>、Jenny Lake General Store 与 Jenny Lake Lodge',
      '那面 60 英尺落地窗从这天起看不到了'],
    ['10 月 9–11 日', 'Colter Bay 加油站（9 日）、Gros Ventre Campground（10 日）、<b>Signal Mountain Lodge 与加油站</b>（11 日）',
      '10 月 12 日起 Grand Teton 西侧完全没有补给'],
    ['10 月 10 日', 'Lake Yellowstone Hotel、Grant Village', '黄石湖区从此没有园内住宿'],
    ['10 月 12 日', '<b>Old Faithful Inn</b>（Xanterra 口径；NPS 表格写 10 月 18 日，<b>两边不一致，出行前自查</b>）、Jenny Lake Visitor Center',
      '同期 Beartooth Highway 与 Dunraven Pass 一带也进入关闭期'],
    ['10 月 18 日', 'Headwaters（Flagg Ranch）便利店与加油站',
      '<b>此后 Jackson 到 Yellowstone 之间没有任何加油站</b>'],
    ['10 月 25 日', 'Canyon Lodge', '园内最后一批客房'],
    ['10 月 31 日', '<b>黄石主环路全线对汽车关闭</b>；Craig Thomas 访客中心（Grand Teton）',
      '11 月 1 日起全园只剩北门 Gardiner 至 Cooke City 一条走廊'],
    ['11 月 1 日前后', 'Antelope Flats Road 等「按条件关闭」的次级道路', '无公布日期，按惯例，出行前查实时路况图']
  ];

  /* ---------- 野生动物与地热的硬规定 ----------
     这两类是园内最常见的伤亡原因，规定本身是执法层面的，不是建议。 */
  var SAFETY = [
    ['熊与狼', '<b>至少 100 码（91 米）</b>', '动物主动靠近也要退开；绝对不要跑，跑会触发追击'],
    ['其它所有野生动物', '<b>至少 25 码（23 米）</b>', '包括 bison、elk、moose；bison 伤人数常年高于熊'],
    ['发情期公 elk（9 月中–10 月）', '<b>比 25 码更远</b>', 'Mammoth 村的草坪与停车场之间就有，会主动冲撞，别挡在它与母鹿之间'],
    ['地热区', '<b>严禁离开栈道，任何时候</b>', '地壳薄处下面就是沸水，这是园内最常见的死亡原因之一；牵绳的狗也不得上栈道'],
    ['随身装备', '熊喷雾', '要带在身上、会用；锁在车里等于没有']
  ];

  /* ---------- 日出日落（示例日期） ----------
     取 Old Faithful 一处即可：全园东西跨度带来的差异在十分钟以内，
     Jackson 方向比这里早几分钟。 */
  var SUN = [
    ['9 月 25 日', '07:14', '19:19', '12h05m'],
    ['10 月 1 日', '07:21', '19:08', '11h47m'],
    ['10 月 10 日', '07:32', '18:51', '11h20m'],
    ['10 月 25 日', '07:51', '18:26', '10h35m'],
    ['10 月 31 日', '07:59', '18:17', '10h18m']
  ];

  /* ---------- 出发当天复查清单 ----------
     按变动可能性排序。前两条在秋季几乎每天都可能变。 */
  var RECHECK = [
    ['园内道路实时状态（含临时雪封）', '高',
      '<a href="https://www.nps.gov/yell/planyourvisit/parkroads.htm" target="_blank" rel="noopener">nps.gov/yell 道路页</a>；' +
      '录音电话 <b>307-344-2117</b>'],
    ['Beartooth Highway（US 212）是否已季节性关闭', '高',
      'Montana 与 Wyoming 两侧都要查：<b>511</b> 路况系统，或 mdt.mt.gov 与 wyoroad.info'],
    ['当天的火情与烟霾', '高',
      '<a href="https://fire.airnow.gov/" target="_blank" rel="noopener">AirNow Fire and Smoke Map</a>；' +
      '北部烟重就把重心南移到 Grand Teton'],
    ['园内住宿与餐饮是否还在营业季内', '中',
      'Xanterra（黄石）<b>307-344-7311</b>；Grand Teton Lodge Company 与 Signal Mountain Lodge 各自官网'],
    ['间歇泉喷发预测', '中',
      'NPS App 或 Old Faithful Visitor Education Center 现场张贴；Grand Geyser 往往比 Old Faithful 更值得等'],
    ['熊类活动与步道临时封闭', '中',
      '各访客中心与步道口公告板；Grand Teton 总机 <b>307-739-3300</b>，Yellowstone 总机 <b>307-344-7381</b>'],
    ['Biscuit Basin 是否重开', '低',
      '2024 年 7 月热液爆炸后关闭至今，2026 年 6 月 13 日再次爆炸，<b>无重开日期</b>']
  ];

  var OVERVIEW = [
    '<details class="callout warn" open><summary class="title">🗓 这一本的关键约束不是开门时间，是关门日期</summary>',
    '<p>城市手册里最要紧的是闭馆日，这一本不是。' +
    '<strong>黄石与 Grand Teton 的景观全年都在，卡住行程的是道路与食宿设施的季节性关闭</strong>——' +
    '而且各家关的日子都不一样，从九月初一直零散地关到十月底。</p>',
    '<p><strong>先记三个日期</strong>（2026 年，核实于 ' + VERIFIED + '）：' +
    '<strong>10 月 4 日</strong> Jackson Lake Lodge 关，Grand Teton 的食宿开始垮；' +
    '<strong>10 月 18 日</strong> 之后 Jackson 到 Yellowstone 之间<strong>没有任何加油站</strong>；' +
    '<strong>10 月 31 日</strong> 黄石主环路全线对汽车关闭，' +
    '11 月 1 日起全园只剩北门 Gardiner 至 Cooke City 那一条全年走廊。' +
    '完整日历见<a href="#appendix">附录 A</a>。</p>',
    '<p><strong>不要沿用「主环路在 11 月第一个周一关闭」这个流传很广的说法</strong>，' +
    '它与官方日期对不上，差几天就是白跑一趟。</p>',
    '<p><strong>由此得出的季节判断：九月下旬至十月初，是路网与设施同时完整的最后一段。</strong>' +
    '十月中旬之后来，看的东西一样不少，但吃、住、加油基本都要在园外解决，' +
    '行程要按「每天从门外进园、天黑前出园」来排。</p></details>',

    '<details class="callout warn" open><summary class="title">⚠️ 两条会出人命的规定，不是建议</summary>',
    '<p><strong>第一，地热区严禁离开栈道。</strong>看着结实的地壳下面可能就是沸水，' +
    '这是园内最常见的死亡原因之一，每隔几年就发生一次。为了一张照片跨过栏杆是这一带最不划算的事。</p>',
    '<p><strong>第二，野生动物有法定观察距离：熊与狼至少 100 码（91 米），其它所有野生动物至少 25 码（23 米）。</strong>' +
    '常年伤人最多的不是熊，是 bison。<strong>九月中到十月是 elk 的发情期</strong>，' +
    'Mammoth 村的草坪与停车场之间就站着发情的公鹿，它们会主动冲撞。' +
    '完整规定见<a href="#appendix">附录 B</a>。</p>',
    '<p>熊喷雾要带在身上、并且知道怎么用；锁在车里等于没带。</p></details>',

    '<details class="callout tip"><summary class="title">💡 秋天来的两个理由，以及它们各自的时间窗</summary>',
    '<p><strong>一、Grand Teton 的棉白杨与白杨。</strong>' +
    '典型年份：<strong>8 月底开始变色，9 月 13–21 日是峰值（典型峰值日 9 月 17 日前后），' +
    '10 月 1–15 日基本落光</strong>。' +
    '也就是说十月中旬之后 Oxbow Bend 的前景会是灰褐色枝干——' +
    '那张照片依然成立（Mount Moran 加倒影不依赖树叶），但它不再是全区最好的一张。' +
    '<strong>10 月 1–10 日是「过峰残色 + 山上初雪」的组合，金加白其实很好看。</strong></p>',
    '<p><strong>二、elk 发情期。</strong>高峰在<strong>九月中至九月末</strong>，' +
    'Mammoth Hot Springs 一带是园内最可靠的观赏点，清晨与黄昏能听到 bugling。' +
    '这两件事在九月下旬正好叠在一起，这是这一区秋季最值钱的一周。</p>',
    '<p>Lamar 与 Hayden 两条谷地的野生动物观察则不挑这一周——' +
    '<strong>黎明与黄昏才是变量</strong>，白天去基本只能看到远处的黑点。带双筒或单筒望远镜。</p></details>',

    '<details class="callout info"><summary class="title">出发前仍要自己盯的四件事</summary>',
    '<p><strong>1. 早雪。</strong>九月下旬夜间常低于冰点，高海拔随时可能降雪。' +
    'Dunraven Pass 与 Beartooth Highway 虽然有公布的季节关闭日，' +
    '<strong>雪来了会提前关</strong>。建议 AWD，并且每个驾驶日清早查一次 NPS 道路状况页。' +
    '反过来说，秋天的一场雨雪飑往往一小时就散，留下峰顶新雪。</p>',
    '<p><strong>2. 山火烟霾。</strong>整个西部的九月都可能有烟，' +
    '烟重时山脊会整片糊掉，这一区的价值会大打折扣。出发前几天起每天看 AirNow 的 Fire and Smoke Map。</p>',
    '<p><strong>3. 热液活动导致的临时封闭。</strong>' +
    '<strong>Biscuit Basin 自 2024 年 7 月爆炸后关闭至今，2026 年 6 月 13 日又炸了一次，仍无重开日期。</strong>' +
    '这类封闭没有预告，出发前查一次官方公告。</p>',
    '<p><strong>4. 施工。</strong>Grand Teton 的 <strong>Moose-Wilson Road 自 2026 年 9 月 8 日起因施工封闭</strong>，' +
    '整个秋季都进不去，原本沿路看黑熊吃果子的那条路今年作废，看 moose 改去 Gros Ventre 河谷。</p>',
    '<p>以上四条连同联系方式都列进了<a href="#appendix">附录 D 的出发当天复查清单</a>。</p></details>'
  ].join('');

  /* ---------- 附录 ---------- */
  function table(head, rows) {
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
    '<h3 class="apx-h">A. 秋季关门日历（2026）</h3>',
    '<p class="section-lead">这是本地域最重要的一张表。' +
    '<strong>日期只对 2026 年成立</strong>，逐年会有几天出入，' +
    '但「十月上旬食宿成片关、十月底道路关」的节奏每年都一样。' +
    '核实于 ' + VERIFIED + '，出行前请按<a href="#appendix">附录 D</a> 再查一遍。</p>',
    table(['日期', '关闭项目', '影响'], CLOSE),
    '<p class="section-lead"><strong>冬季走廊：</strong>' +
    '北门 Gardiner 经 Mammoth、Tower 到东北门 Cooke City 这一段<strong>全年对汽车开放</strong>，' +
    '是主环路关闭后唯一能自驾进入的部分。' +
    '其余路段在十二月中旬之后转为雪地车与雪上巴士通行。</p>',

    '<h3 class="apx-h">B. 野生动物与地热的法定距离</h3>',
    '<p class="section-lead">下面这些是<strong>执法层面的规定，不是礼貌建议</strong>，违反会被罚款乃至起诉。' +
    '距离按「你与动物之间」算，动物主动靠近时由你后退。</p>',
    table(['对象', '最小距离', '要点'], SAFETY),

    '<h3 class="apx-h">C. 日出日落（示例日期，Old Faithful，MDT）</h3>',
    '<p class="section-lead">全园东西跨度带来的差异在十分钟以内，Grand Teton 一侧比这里略早。' +
    '<strong>2026 年夏令时结束于 11 月 1 日</strong>，下表整段都在 MDT 之内。' +
    '秋分是 9 月 22 日，此后日照每周缩短约 20 分钟——' +
    '<strong>十月下旬只剩十个半小时天光，行程密度要跟着往下调。</strong></p>',
    table(['示例日期', '日出', '日落', '日照'], SUN),

    '<h3 class="apx-h">D. 出发当天复查清单</h3>',
    '<p class="section-lead">本页信息核实于 <strong>' + VERIFIED + '</strong>。' +
    '<strong>标「高」的三条请在每个驾驶日的清早各看一遍</strong>——' +
    '这一区的道路状态是按小时变的，不是按周变的。</p>',
    table(['要查什么', '变动可能', '链接 / 电话'], RECHECK)
  ].join('');

  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('hero-meta', META.map(function (m) {
    return '<span class="chip">' + m[0] + ' <b>' + m[1] + '</b></span>';
  }).join(''));
  fill('overview-body', OVERVIEW);
  fill('appendix-body', APPENDIX);
})();
