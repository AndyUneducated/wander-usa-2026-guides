/* Manhattan Uptown：Museum Mile 与 Central Park。
   2026-09-13 新建的子地区——改版前手册以摄影为主，导致 The Met、AMNH、
   Guggenheim、Central Park 这几个「来纽约必去」的地方没有任何归属分区。 */
module.exports = {
  id: 'manhattan-uptown',
  name: 'Manhattan · Uptown 与 Museum Mile',
  navName: 'Uptown',
  color: '#4da3ff',
  lead: '这一区和 Midtown 的性质完全相反：<strong>Midtown 你买的是高度，这里你买的是时间。</strong>' +
    '本区的四个核心项目——Central Park、The Met、American Museum of Natural History、Guggenheim——' +
    '<strong>全部集中在 Fifth Avenue 与 Central Park West 之间那条 3 公里长的走廊上，彼此步行 10–20 分钟可达</strong>，' +
    '所以交通不是问题，<strong>问题是这四个地方合起来需要 12–16 小时，而你不可能在一天里做完。</strong>' +
    '结论先给：<strong>Central Park 与 The Met 是本区不可省的两项</strong>（各 must 5），' +
    'AMNH 只在带孩子或本人对自然史有兴趣时才值得那 3 小时，' +
    'Guggenheim 的价值一半在建筑本身而不在藏品——<strong>Frank Lloyd Wright 那条螺旋坡道是展品，走一遍 90 分钟就够。</strong>' +
    '<strong>票价上本区有一条全纽约最重要的规则：The Met 与 AMNH 对「纽约州居民」实行自定金额，' +
    '外地游客是固定票价，二者相差 $30–37。这条规则对你不适用，请按全价做预算</strong>（详见下方第一条提醒）。' +
    '三件必须先知道的现场事实：<strong>Bethesda Fountain 自 2026 年 8 月起停水并围挡施工到 2027 年夏</strong>' +
    '（全园最著名的那座天使喷泉，本次看不到水）；' +
    '<strong>The Met 每周三闭馆，而 10/13–10/26 这个窗口里有 10/14 与 10/21 两个周三</strong>；' +
    '<strong>纽约市的秋色要到 11 月第一周才进入盛期，10 月中下旬的 Central Park 以绿色为主</strong>，' +
    '想要满树金红的请把期待降下来。',
  callouts: [
    {
      type: 'warn',
      title: '「纽约州居民自定金额」：三馆口径核实结论（对你都不适用）',
      html: '<p><strong>核实日期 2026-09-14。这是本区最容易被中文攻略写错的一条，逐馆给官方原文口径：</strong></p>' +
        '<ul>' +
        '<li><strong>The Met（含 The Met Cloisters）——范围最宽的一家。</strong>' +
        '官方原文「New York State residents and New York, New Jersey, and Connecticut students: ' +
        'the amount you pay for admission is up to you, but you must pay something ' +
        '(<strong>$00.01 minimum per ticket</strong>)」。' +
        '<strong>也就是两类人：纽约州居民（不限身份），以及 NY／NJ／CT 三州院校的在读学生。</strong>' +
        '网上购买自定金额票<strong>必须有纽约州账单地址</strong>；' +
        '<strong>NJ 与 CT 的学生只能到现场凭学生证买，不能在网上买</strong>。' +
        '可接受的居民证明：纽约州驾照、纽约州身份证、IDNYC、写有纽约州地址的账单、学生证、纽约图书馆卡</li>' +
        '<li><strong>AMNH——只认纽约州居民，不含 NJ／CT。</strong>' +
        '官方票价页原文「Pay What You Wish: for NY State residents (with ID). ' +
        'The amount you pay for <strong>General Admission only</strong> is up to you」。' +
        '<strong>请注意两个限制：一是范围比 The Met 窄（没有 NJ／CT 学生这一类），' +
        '二是自定金额只覆盖 General Admission</strong>——' +
        '<strong>海登天象馆的 Space Show、蝴蝶馆、Invisible Worlds、巨幕电影这些「ticketed exhibition」' +
        '对所有人（包括纽约州居民）都是另行固定收费，不能挂在自定金额票上</strong>。' +
        '<strong>不少第三方页面写 AMNH 的自定金额适用「NY／NJ／CT 三州居民」，这与官方页面不符，是错的</strong></li>' +
        '<li><strong>Guggenheim——没有居民优惠，但有全民自定金额时段。</strong>' +
        '官方购票系统页面原文「Pay-What-You-Wish hours are on <strong>Sundays and Tuesdays, 4 pm to 5:30 pm</strong>. ' +
        'The suggested contribution is $10, and minimum is $1」，' +
        '<strong>不限居住地，所有人都能用</strong>。' +
        '提前票<strong>当天上午 10:00 才放出、数量很少、很快售罄</strong>，' +
        '其余名额留给时段内的现场排队。<strong>此类票不可退、不可改期</strong></li>' +
        '</ul>' +
        '<p><strong>对你的实际意义：The Met 与 AMNH 的自定金额你都用不上，请按 The Met $30 + AMNH $37 做预算。' +
        '唯一能省的是 Guggenheim——把它排在窗口内的周日（10/18、10/25）或周二（10/13、10/20）下午 16:00，' +
        '$30 的票按 $1–10 付，这是本区唯一对外地游客成立的官方折扣。</strong></p>'
    },
    {
      type: 'warn',
      title: '10/13–10/26 窗口内的闭馆日与施工：照这张表排',
      html: '<p><strong>本窗口的星期分布：10/13 周二、10/14 周三、10/15 周四、10/16 周五、10/17 周六、10/18 周日、' +
        '10/19 周一、10/20 周二、10/21 周三、10/22 周四、10/23 周五、10/24 周六、10/25 周日、10/26 周一。</strong></p>' +
        '<ul>' +
        '<li><strong>The Met Fifth Avenue 每周三闭馆</strong>，本窗口即 <strong>10/14 与 10/21 去不了</strong>。' +
        '周五与周六开到 21:00（其余日 17:00），<strong>这是本区唯一的晚间博物馆时段，也是全周人最少的时段</strong></li>' +
        '<li><strong>The Met Cloisters 的闭馆日与本馆不同</strong>：官方两处页面（metmuseum.org 首页与购票系统）' +
        '均写 <strong>Thursday–Tuesday 10 am–5 pm、Closed Wednesday</strong>；' +
        '但第三方导览站普遍写「周四至周一 10:00–16:30，周二与周三闭馆」。' +
        '<strong>两种口径都列在这里，去之前务必按你的日期在官网复核</strong>，' +
        '<strong>照官方口径则 10/14、10/21 闭馆，照第三方口径则 10/13、10/14、10/20、10/21 都去不了</strong></li>' +
        '<li><strong>AMNH 与 Central Park 在本窗口内每天开</strong>' +
        '（AMNH 官方原文「Open daily, 10 am–5:30 pm」，只在 Thanksgiving 与 12/25 闭馆；' +
        '公园每日 06:00–01:00、全年 365 天）</li>' +
        '<li><strong>Guggenheim 的营业日存在官方与第三方的直接矛盾，这是本区最需要你自己复核的一项。</strong>' +
        '一派口径是「每日 10:30–17:30、全周无休」（多个票务与目录站，并称museum自家订票系统里到 2027 年 3 月都是这个时间）；' +
        '另一派仍写「每周四闭馆、11:00–18:00、周六到 20:00」（旧口径）。' +
        '<strong>guggenheim.org 本身是 JS 动态渲染，2026-09-14 无法直接取到原文，未能定案。</strong>' +
        '窗口内 10/15 与 10/22 是周四——<strong>如果你打算周四去 Guggenheim，出发前必须打 ' +
        '<strong>+1 212-423-3500</strong> 确认，否则有白跑一趟的风险</strong></li>' +
        '<li><strong>施工：Bethesda Fountain 自 2026 年 8 月起停水、围挡，预计 2027 年夏完工。</strong>' +
        'Bethesda Terrace 与地下 Arcade 全程照常开放，<strong>只有喷泉本体被围起来且没有水</strong>。' +
        '同一笔 $3,700 万工程还包括 <strong>Conservatory Water（模型船池）的整体重建，官方说「late 2026」开工</strong>——' +
        '<strong>是否会在 10 月下旬就开始围挡，未能从官方渠道确认</strong></li>' +
        '</ul>'
    },
    {
      type: 'tip',
      title: '一天塞不下四项：本区的时间账与两种排法',
      html: '<p><strong>把官方与合理推算的时长加起来：Central Park 主线 2.5–3.5 小时、The Met 3–4 小时（走马观花 2 小时）、' +
        'AMNH 3–4 小时、Guggenheim 1.5–2 小时。合计 10–13 小时，加上馆间步行与排队就是 12–16 小时。</strong>' +
        '而本区的博物馆平日只开到 17:00，也就是说<strong>一天的有效时间只有 7 小时</strong>。</p>' +
        '<p><strong>两种可执行的排法：</strong></p>' +
        '<ul>' +
        '<li><strong>两天版（推荐）。</strong>' +
        '第一天：上午 Central Park 主线（从 Grand Army Plaza 往北走到 Conservatory Water），' +
        '中午在公园里吃，<strong>下午直接从 Conservatory Water 往北 660 米进 The Met</strong>，' +
        '<strong>挑周五或周六，博物馆开到 21:00，你能在里面待满 5 小时且后半段几乎没人</strong>。' +
        '第二天：上午 AMNH（在公园西侧），下午沿 Fifth Avenue 走到 Guggenheim' +
        '（若为周日或周二，压到 16:00 进去用自定金额时段）</li>' +
        '<li><strong>一天版（只有一天时）。</strong>' +
        '<strong>放弃 AMNH，Central Park 减到 90 分钟。</strong>' +
        '09:00 从 Grand Army Plaza 进公园 → The Mall → Bethesda Terrace → Conservatory Water → ' +
        '10:30 到 The Met 门口排队 → 10:00–14:00 在 Met（照下面 Met 条目里的三小时路线走）→ ' +
        '步行 15 分钟到 Guggenheim → 15:00–16:30 螺旋坡道。' +
        '<strong>这一天不要再加任何项目，本区的步行距离会比你预想的更耗体力</strong></li>' +
        '</ul>' +
        '<p><strong>Museum Mile 的实际距离（按 OSM 坐标算）：The Met（82 街）到 Guggenheim（89 街）' +
        '沿 Fifth Avenue <strong>约 900 米 / 步行 12 分钟</strong>；' +
        'The Met 到 AMNH 需横穿公园 <strong>约 1.1 公里 / 步行 15–20 分钟</strong>' +
        '（走 79 街横穿道，不要指望有直达地铁——这两馆分属公园东西两侧的不同线路）。</strong></p>'
    }
  ],
  spots: [
    {
      id: 'central-park',
      n: 1,
      name: '中央公园',
      en: 'Central Park',
      must: 5,
      score: 4.5,
      tldr: '免费、每日 06:00–01:00；南段主线 3 公里走 2.5 小时。Bethesda 喷泉施工停水到 2027 年夏。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '每日 06:00–01:00', c: 'free' },
        { t: '喷泉停水施工', c: 'risk' },
        { t: '马车三轮车宰客', c: 'risk' }
      ],
      highlights: [
        '<strong>843 英亩（341 公顷）</strong>，1858 年动工，' +
          '<strong>Frederick Law Olmsted 与 Calvert Vaux 以「Greensward Plan」赢得当年的设计竞赛</strong>，' +
          '是美国第一座大型人工造景公共公园。' +
          '<strong>反直觉的第一件事：这里几乎没有一寸是天然的。</strong>' +
          '原址是沼泽、裸岩与采石场，现在你看到的每一片「自然」草坡、湖泊、林地都是人工堆填与种植出来的；' +
          '<strong>1980 年成立的 Central Park Conservancy 与 NYC Parks 共同管理至今</strong>，' +
          '本区几乎所有修复工程都是这家非营利机构募款做的',
        '<strong>The Mall（66–72 街）是整座公园里唯一一条刻意的直线。</strong>' +
          'Olmsted 与 Vaux 的全园设计原则是不用直线、不用轴线，' +
          '唯独留了这一条 500 米长的正式散步道，作为通向 Bethesda Terrace 的仪式性前奏——' +
          '<strong>所以这条路要由南往北走，才是设计者安排的顺序</strong>。' +
          '两侧是拱成隧道的 <strong>American elm（美国榆）</strong>，' +
          '<strong>这是北美现存最大的美国榆成片林之一</strong>：荷兰榆树病在 20 世纪几乎抹掉了全美的行道榆树，' +
          '这一片活下来了。南端一段叫 <strong>Literary Walk</strong>，立着 Shakespeare、Robert Burns、' +
          'Walter Scott、Fitz-Greene Halleck 等文学家的雕像，再往南是 Christopher Columbus 像',
        '<strong>Bethesda Terrace 是 Vaux 与 Jacob Wrey Mould 设计的全园建筑核心，而它真正的绝品在地下。</strong>' +
          '穿过 Terrace Drive 下方的 <strong>Arcade</strong>，抬头是一面 ' +
          '<strong>15,876 块 Minton 手工彩陶砖（encaustic tile）拼成的悬吊天顶，49 个面板、每板 324 块</strong>，' +
          '英国 Stoke-on-Trent 的 Minton and Company 制造。' +
          '<strong>这是全世界已知唯一一处把 Minton 彩陶砖用作悬吊天顶的案例</strong>' +
          '（这种砖在欧洲一律是铺地板的）。' +
          '<strong>因背板锈蚀，整面天顶 1984 年被拆下入库 20 多年，2007 年 3 月 2 日经 700 万美元修复后重新开放</strong>：' +
          '约 14,000 块原砖由七名技师手工清洗修补，只有约 10% 损毁过重的由 Minton 的继承企业 Maw and Company 手工复制',
        '<strong>Bethesda Fountain 的「Angel of the Waters」是 Emma Stebbins 作品，1873 年 5 月 31 日揭幕，' +
          '而她是纽约市历史上第一位获得大型公共艺术委托的女性</strong>（酬金 8,000 美元金币，' +
          '1861–1868 年在罗马完成设计、慕尼黑铸造）。' +
          '它也是<strong>全园设计中唯一一座被专门委托创作的雕像</strong>。' +
          '题材是<strong>纪念 1842 年 Croton Aqueduct 通水</strong>——在此之前曼哈顿没有干净饮水；' +
          '天使手中百合代表纯洁，下方四个小像分别是 Peace、Health、Purity、Temperance。' +
          '<strong>但本次你看不到它出水：2026 年 8 月起喷泉停水并围挡，' +
          '属于与 Conservatory Water 合计 3,700 万美元的大修，预计 2027 年夏完工。' +
          'Terrace 与 Arcade 照常开放，被围起来的只有喷泉本体</strong>',
        '<strong>Bow Bridge（1862 年，Vaux 与 Mould 设计，Janes, Kirtland &amp; Co. 铸造）' +
          '全长 87 英尺（26.5 米）、跨湖净跨 60 英尺，是美国第二古老的铸铁桥，也是全园最长的桥。</strong>' +
          '桥名来自它像一张弓的弧线。<strong>一个容易被当成原件的细节：桥栏顶上那八只 3.5 英尺高的铸铁花瓮是复制品</strong>，' +
          '原件 1920 年代不知所踪，后来依据老照片与一只疑似原件复原重铸。' +
          '桥面原为南美 ipe 硬木（淋雨后转深红），<strong>2024 年 1 月已换成更耐磨的新木料</strong>。' +
          '它连接 Cherry Hill 与 the Ramble，站在桥上朝西北是 Central Park West 的 San Remo 双塔'
      ],
      tour: [
        '<strong>照这条由南往北的单向主线走，全程约 3 公里、不走回头路，终点正好是 The Met。</strong>' +
          '<strong>进口选 N／R／W 线「5 Av/59 St」站，出站即是 Fifth Avenue 与 59 街的 Grand Army Plaza，' +
          '从这里的东南角进园</strong>（不要选 59 St–Columbus Circle，那个口在西南角，' +
          '走到 The Mall 要多绕 500 米）。顺序是：' +
          '<strong>Grand Army Plaza →（北行约 700 米）The Mall 南端的 Literary Walk → ' +
          '（北行 500 米，榆树隧道）The Mall → Bethesda Terrace 与地下 Arcade → ' +
          '（西北 180 米）Bow Bridge → （东行约 600 米）Conservatory Water → ' +
          '（北行 660 米）Fifth Avenue 与 82 街的 The Met 正门</strong>。' +
          '距离按 OSM 节点坐标<strong>推算</strong>，实际步行因路径弯折会略长',
        '<strong>四个不能错过的，按重要性排：</strong>' +
          '<strong>①&nbsp;Bethesda Terrace 地下 Arcade 的 Minton 彩陶天顶</strong>——' +
          '<strong>这是全园最被低估的一件东西，绝大多数人站在上层平台拍完喷泉就走了，' +
          '根本没下到拱廊里抬头看</strong>。本次喷泉停水，反而应该把时间挪到这里。' +
          '<strong>②&nbsp;The Mall 的美国榆隧道</strong>，由南往北走，' +
          '<strong>③&nbsp;Bow Bridge</strong>（从 Bethesda 往西北 180 米，桥上朝西北看 San Remo 双塔），' +
          '<strong>④&nbsp;Conservatory Water</strong> 池畔的 <strong>Alice in Wonderland</strong>' +
          '（José de Creeft 1959 年作）与 <strong>Hans Christian Andersen</strong> 像——' +
          '<strong>这两座是设计给小孩爬的，爬上去不算不文明</strong>',
        '<strong>可以直接跳过的部分，省下来的时间给 The Met。</strong>' +
          '<strong>the Ramble</strong>（Bow Bridge 以北那片 14 公顷人工野林）路径刻意设计成迷宫、没有指示牌，' +
          '<strong>对只有半天的人是纯粹的时间黑洞，且手机信号与方向感都会失效</strong>；' +
          '<strong>Belvedere Castle 与 Great Lawn</strong> 在 79–85 街，已经偏离主线；' +
          '<strong>Central Park Zoo</strong>（East 64 街）要另外买票、以小型动物为主，' +
          '<strong>在有 AMNH 的行程里没有必要</strong>；' +
          'Strawberry Fields 的 Imagine 马赛克在公园西侧 72 街，' +
          '<strong>除非你是 John Lennon 的歌迷，否则它只是一块地砖，且常年被人围住</strong>',
        '<strong>十月的秋色要如实说：这个窗口看不到盛期。</strong>' +
          '纽约市是全州变色最晚的一批，<strong>盛期预测在 11 月 1–9 日</strong>，' +
          '<strong>10 月 13–26 日处于「早期变色」——红枫、山茱萸、黄栌已经转色，' +
          '而 The Mall 那一片美国榆和公园里的糖枫、栎树基本还是绿的，整体基调仍偏绿</strong>。' +
          '好处是这半个月<strong>气温舒适（日间多在 15–20°C）、蚊虫已过季、' +
          '而且比 11 月第一周那种「全城涌进公园」的密度松得多</strong>。' +
          '想要满树金红的湖畔照片，本窗口拿不到，别照着网上 11 月拍的照片设定目标',
        '<strong>人流与时段：主线上真正会挤的只有 Bethesda Terrace 与 Bow Bridge 两处。</strong>' +
          '<strong>最松的是开园后到 09:30，尤其工作日</strong>——' +
          'Bow Bridge 这种宽度只够四五个人并排的桥，' +
          '<strong>11:00 之后基本是持续排队等拍照的状态，桥上不可能拍到空景</strong>。' +
          '<strong>周末的 The Mall 从 11:00 起有大量街头表演与卖画摊位，穿过去要 20 分钟</strong>。' +
          '如果你打算当天接着进 The Met，<strong>08:00 进园、10:30 出园是最优解</strong>：' +
          '公园拿到最松的两小时，博物馆也赶在开门第一波',
        '<strong>厕所（这是全天行程最实际的约束，公园里选择很少）：</strong>' +
          '<strong>主线上唯一可靠的一处在 Bethesda Terrace，每日 06:30–21:00、' +
          '开放期为 3 月下旬至 11 月上旬，所以本窗口可用；但它不是无障碍设施</strong>。' +
          '<strong>请特别注意：mid-Park 65 街的 Dairy Visitor Center（每日 10:00–17:00）没有厕所</strong>，' +
          '很多人以为游客中心一定有，白跑一趟。' +
          '公园里所有公厕免费，<strong>只有 Central Park Zoo 里那间要先消费才能用</strong>。' +
          '完整分布与各处开放时间见 Conservancy 的 centralparknyc.org/restrooms 地图。' +
          '<strong>餐饮：主线上只有 Bethesda Terrace 一带的流动餐车与 Loeb Boathouse 一带的摊点，' +
          '价格是街面的两倍。合理做法是进园前在 Fifth Avenue 上买好水和三明治带进去</strong>'
      ],
      photo: '风光 <strong>4/5</strong>，建筑与装饰 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>。' +
        '免费、不限时段、可以合法架三脚架，这三条在纽约已经很少见；扣分是因为本窗口秋色未到盛期，而最招牌的 Bethesda Fountain 停水围挡。',
      shots: [
        {
          name: 'Bethesda Terrace 地下 Arcade 的 Minton 天顶',
          desc: '<strong>本窗口本区最该拍的一张，而且喷泉停水完全不影响它。</strong>' +
            '<strong>最佳是开园后 07:00–09:30</strong>：拱廊两端有自然光斜射进来，' +
            '而这个时段廊下几乎没人（白天这里是街头乐手与婚纱拍摄的固定场地）。' +
            '<strong>16–24mm 超广近乎垂直上仰</strong>，让 49 个面板的几何重复与四周拱肋一起构成对称框；' +
            '<strong>50–85mm 拍单块彩陶砖的釉面与拼花细节，这是能看出「手工压制彩泥」而非表面上釉的唯一焦段</strong>。' +
            '廊内光线比看起来暗得多，<strong>ISO 1600–6400、f/2–f/2.8、1/40s 以上，仰角务必开机身防抖</strong>。' +
            '<strong>这里是室外公共空间，三脚架合法可用</strong>（园内商业拍摄需向 Conservancy 申请）。' +
            '坐标为 OSM Bethesda Terrace 步行区节点。',
          view: [40.774219, -73.971053]
        },
        {
          name: 'Bow Bridge 与 San Remo 双塔',
          desc: '<strong>清晨 07:00–09:00 是唯一能拍到空桥的窗口，11:00 之后桥上是持续排队状态。</strong>' +
            '从桥面朝西北，Central Park West 的 San Remo 双塔在湖对岸升起，' +
            '<strong>24–35mm 把桥栏的铸铁镂空花纹作前景引导线、双塔收在上缘</strong>；' +
            '想拍桥本身的弓形弧线要下到南岸 Cherry Hill 一侧的湖边，' +
            '<strong>35–85mm 横构图、压低到接近水面，让桥拱与水中倒影合成一个椭圆</strong>' +
            '（南岸湖畔无 OSM 实体节点，此处坐标为桥本身）。' +
            '<strong>本窗口湖畔是早期变色，画面里会是绿中带零散红黄，不是成片金红。</strong>' +
            '坐标为 OSM Bow Bridge 桥要素节点。',
          view: [40.775764, -73.971772]
        }
      ],
      access: {
        visit: '<strong>2.5–3.5 小时走完上面那条 3 公里南段主线</strong>（含在 Bethesda Terrace 与 Bow Bridge 各停 20 分钟）。' +
          '分配：Grand Army Plaza 到 The Mall 南端 15 分钟、The Mall 与 Literary Walk 25 分钟、' +
          'Bethesda Terrace 与地下 Arcade <strong>30–40 分钟（本次的重点，别只在上层拍完就走）</strong>、' +
          'Bow Bridge 往返 25 分钟、Conservatory Water 20 分钟、到 The Met 正门 10 分钟。' +
          '<strong>只看重点 90 分钟</strong>：从 Grand Army Plaza 直插 The Mall，走到 Bethesda Terrace 下拱廊，' +
          '再往北看一眼 Bow Bridge 就往东出园。<strong>想把 the Ramble、Great Lawn、Belvedere Castle、' +
          '北端 Conservatory Garden 一起走完请按整天算（全园 843 英亩，南北 4 公里）</strong>',
        book: '<strong>不需预约</strong>，公园是开放城市空间，全部入口随时可进，无门禁无安检。' +
          'Central Park Conservancy 有若干免费与收费的主题步行导览，需另行在 centralparknyc.org 订；' +
          '划船（Loeb Boathouse）与 Central Park Zoo 是园内另行收费的独立项目',
        ticket: '<strong>核实日期 2026-09-14。进园完全免费，园内步道、The Mall、Literary Walk、' +
          'Bethesda Terrace 与地下 Arcade、Bow Bridge、Conservatory Water 全部免费且无需门票。</strong>' +
          '园内另行收费的是 Central Park Zoo、旋转木马、划船与冰场等独立设施，本条路线一个都不需要。' +
          '<strong>观光马车是受纽约市法律管制的定价项目，见下方 notes 第一条：' +
          'DCWP 官方原文为 2025 年 5 月 3 日起「$72.22 for the first twenty minutes or fraction thereof、' +
          '$28.89 for each additional ten minutes thereafter」，并明确「Rates charged may not exceed these amounts」。' +
          '三轮车（pedicab）则相反，纽约市法律不设费率</strong>',
        hours: '<strong>核实日期 2026-09-14，Central Park Conservancy 官方地图原文' +
          '「Central Park opens at 6:00 am and closes at 1:00 am, 365 days a year」。</strong>' +
          '也就是<strong>每日 06:00–01:00、全年无休、本窗口无任何季节性调整</strong>。' +
          '<strong>园内设施另有各自时间，与公园时间不同</strong>：' +
          'Bethesda Terrace 公厕每日 06:30–21:00（3 月下旬–11 月上旬开放）；' +
          'Dairy Visitor Center &amp; Gift Shop 每日 10:00–17:00' +
          '（Thanksgiving、圣诞、元旦闭门，<strong>此处没有厕所</strong>）。' +
          '<strong>请注意官方两份文件在 Dairy 的时间上不一致</strong>：' +
          'Conservancy 的地点页写「Daily: 10:00 AM - 5:00 PM」，' +
          '而官方园区地图 PDF 上另有一处写「Open year-round, 8:00 am to dusk」，' +
          '<strong>两种口径都列出，不替你选</strong>。' +
          '<strong>01:00–06:00 闭园时段内滞留园中属违规，且这几小时园内没有巡逻照明保障，不要尝试</strong>',
        parking: '<strong>不要开车。</strong>公园四周为路边表位与居民区，日间几乎不可能找到车位，' +
          '周边停车楼日间 $30–60。' +
          '<strong>本路线的进出口：南端入口用 N／R／W 线「5 Av/59 St」站（出站即 Grand Army Plaza，从东南角进园）；' +
          '北端出口在 Fifth Avenue 与 82 街，正对 The Met，最近车站是 4／5／6 线「86 St」。</strong>' +
          '其他常用口：B／C 线「72 St」（公园西侧，最近 Strawberry Fields 与 Bethesda Terrace）、' +
          'A／B／C／D／1 线「59 St–Columbus Circle」（西南角）、' +
          '6 线「68 St–Hunter College」与「77 St」（东侧）、' +
          'B／C 线「81 St–Museum of Natural History」（西侧，直通 AMNH）',
        walk: '<strong>南段主线全程约 3 公里、纯步行 45–60 分钟（不含停留）。</strong>' +
          '分段（按 OSM 节点坐标<strong>推算</strong>直线距离，实走略长）：' +
          '<strong>Grand Army Plaza 到 The Mall 南端约 700 米；The Mall 与 Literary Walk 一段约 440 米；' +
          'Bethesda Terrace 到 Bow Bridge 约 180 米（往返 360 米）；' +
          'Bow Bridge 到 Conservatory Water 约 430 米直线、绕湖实走约 600 米；' +
          'Conservatory Water 到 The Met 正门约 660 米</strong>。' +
          '<strong>全线铺装路面、坡度平缓，但 Bethesda Terrace 上下层之间是石阶</strong>' +
          '（Terrace 有无障碍绕行路线，地下 Arcade 的公厕不是无障碍设施）'
      },
      notes: [
        '<strong>观光马车：本条是本条目最重要的提醒，既是钱的问题也是安全问题。</strong>' +
          '<strong>纽约市法定上限是 $72.22 跑前 20 分钟、之后每 10 分钟 $28.89，且法律写明不得超过此数</strong>' +
          '（DCWP 官方页面，2025 年 5 月 3 日生效）。' +
          '<strong>公园南缘的车夫常年报出「$100 起」「每人多少钱」「半小时特价」等说法，这些都违法</strong>——' +
          '按人头加价、加税、强收小费、事后加价一概不合法，' +
          '<strong>上车前要求对方指出车上张贴的价目表，谈不清就走开，被宰了打 311 投诉</strong>。' +
          '另外<strong>不要向街上举牌的「推广员」付钱，只付给实际经营者</strong>',
        '<strong>马车这个项目本身正处在被取消的过程中，安全记录也确实不好，建议直接不坐。</strong>' +
          '<strong>2026 年 6 月 17 日，18 岁的印度游客 Romanch Mahajan 在园内被受惊失控的马车甩出致死</strong>；' +
          '行业自行停业一周后于 6 月下旬恢复营运。' +
          'Central Park Conservancy 称<strong>此前 13 个月内园内共发生 8 起与马匹相关的事故</strong>，' +
          '并已公开支持全面禁止。' +
          '以死者命名的 <strong>Romanch&rsquo;s Law</strong>（原名 Ryder&rsquo;s Law）' +
          '于 <strong>2026 年 7 月 15 日在市议会举行听证，方案是逐步淘汰、2028 年 6 月全面禁止</strong>，' +
          '市议长 Julie Menin 与市长 Zohran Mamdani 均表态支持，' +
          '<strong>该法案有 20 余位联署人、通过需 26 票，最早可在 2026 年 8 月付诸表决</strong>。' +
          '<strong>截至 2026-09-14，马车仍在营运，而表决结果与 10 月的营运状态未能确认</strong>',
        '<strong>三轮车（pedicab）比马车更容易被宰，因为纽约市法律根本不设它的费率。</strong>' +
          '法定要求只有程序性的几条，记住就够用：' +
          '<strong>①&nbsp;每分钟单价必须始终张贴在车身外侧与后座靠背上，看不到价目表就换一辆；' +
          '②&nbsp;必须装有带官方封签的数字计时器，按分钟计费且每分钟同价；' +
          '③&nbsp;按人头加价（最多载 3 人）、收税、强制小费一律违法；' +
          '④&nbsp;行程结束后不得以任何理由加价。</strong>' +
          '<strong>上车前把「每分钟单价 × 预计分钟数」算给对方听并确认，这是唯一有效的自保动作</strong>；' +
          '典型骗法是报「$3 一分钟」然后按人头乘三、或绕路把 15 分钟拖成 40 分钟。投诉打 311',
        '<strong>Bethesda Fountain 自 2026 年 8 月起停水并围挡施工，预计 2027 年夏完工</strong>' +
          '（Conservancy 官方原文「the fountain will be turned off for approximately one year ' +
          'while crews repair and restore it from the inside out. Bethesda Terrace itself will remain open throughout」）。' +
          '<strong>Terrace 与地下 Arcade 全程开放，所以这个点位不用放弃，只是把重心从喷泉挪到彩陶天顶</strong>',
        '<strong>Conservatory Water（模型船池）的整体重建官方说「late 2026」开工</strong>，' +
          '与喷泉同属那笔 3,700 万美元工程。' +
          '<strong>10 月下旬是否已开始围挡未能从官方渠道确认</strong>，' +
          '出发前请查 centralparknyc.org 或致电 Conservancy <strong>+1 212-310-6600</strong>；' +
          '若已围挡，把这一段改成从 Bethesda Terrace 直接往北出园去 The Met',
        '<strong>园内商业拍摄与任何带模特、灯具、反光板的拍摄需向 Central Park Conservancy 申请许可，' +
          '纯个人手持与三脚架拍摄不需要</strong>。' +
          '<strong>Bethesda Terrace 的地下 Arcade 是婚纱与街头乐手的固定场地</strong>，' +
          '10:00 之后基本被占，想拍天顶请赶早',
        '<strong>治安：主线所经的南段在白天人多、且是全园巡逻密度最高的区域，正常注意随身物品即可。</strong>' +
          '要避开的是<strong>入夜后的 the Ramble、North Woods 与各处无照明林间小径</strong>；' +
          '公园每日 01:00 闭园，<strong>日落后（本窗口 18:00 前后天黑）请只走 Park Drive 与主步道这类有照明的宽路</strong>。' +
          '园内各处有紧急呼叫柱，紧急情况直接拨 911',
        '<strong>骑车与跑步的人有路权优先的既成事实。</strong>' +
          'Park Drive 是行人、自行车与授权车辆共用，' +
          '<strong>横穿前务必看两边——园内自行车速度普遍不低，而横穿道（Transverse Road）是机动车专用、行人不要走</strong>'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Bethesda_Terrace_and_432_Park_Avenue_from_the_Lake%2C_Central_Park%2C_Manhattan%2C_New_York.jpg',
          cap: '自湖上望 Bethesda Terrace 与远处 432 Park Avenue · Christian David / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Bow_Bridge_over_the_Lake%2C_Central_Park%2C_Manhattan%2C_New_York.jpg',
          cap: 'Bow Bridge 跨湖的弓形铸铁桥身 · Christian David / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/The_Mall_%26_Literary_Walk%2C_Central_Park%2C_Manhattan%2C_NYC.JPG',
          cap: 'The Mall 与 Literary Walk 的美国榆隧道 · Ahodges7 / CC BY-SA 3.0' }
      ]
    },
    {
      id: 'metropolitan-museum-of-art',
      n: 2,
      name: '大都会艺术博物馆',
      en: 'The Metropolitan Museum of Art',
      must: 5,
      score: 3.5,
      tldr: '外地游客固定 $30、每周三闭馆；三小时看五个展厅够了。屋顶花园已彻底关到 2030 年。',
      tags: [
        { t: '成人 $30', c: 'paid' },
        { t: '每周三闭馆', c: 'risk' },
        { t: '禁三脚架', c: 'risk' },
        { t: '屋顶花园已关', c: 'risk' }
      ],
      highlights: [
        '1870 年创立，官方口径是<strong>「over 5,000 years of art」、17 个策展部门</strong>，' +
          '是西半球最大的艺术博物馆。' +
          '<strong>和本区一条有趣的联系：1880 年的原始馆舍由 Calvert Vaux 与 Jacob Wrey Mould 设计——' +
          '就是设计 Bethesda Terrace 与 Bow Bridge 的同一对搭档</strong>' +
          '（那座维多利亚哥特式建筑落成时就被嫌过时，现已被后来的扩建整个包在内部）。' +
          '你今天在第五大道上看到的 Beaux-Arts 立面是 <strong>Richard Morris Hunt 1902 年的作品</strong>',
        '<strong>Temple of Dendur（Gallery 131）是全馆第一顺位，也是唯一一件「建筑级」藏品。</strong>' +
          '风成砂岩，<strong>公元 10 年前完成、奥古斯都在位期间建于努比亚的 Dendur</strong>；' +
          '<strong>神庙本体高 6.40 米、宽 6.40 米、长 12.50 米，门楼高 8.08 米</strong>（藏品号 68.154）。' +
          '<strong>它之所以在纽约，是因为阿斯旺高坝要把原址淹掉：埃及 1965 年把它赠给美国，1967 年判给大都会。</strong>' +
          '所在的 Sackler Wing 用一整面朝中央公园的斜玻璃幕墙加一池浅水复原尼罗河畔的采光。' +
          '<strong>一个多数人没注意的细节：神庙外壁上留着 19 世纪欧洲旅行者刻的涂鸦，至今照原样保留</strong>',
        '<strong>必须先说清的坏消息：屋顶花园不是「季节性关闭」，是彻底没了。</strong>' +
          '<strong>Iris and B. Gerald Cantor Roof Garden（Gallery 926）在官方 Gallery Closures 页上列为关闭，' +
          'Cantor Roof Garden Bar 同样关闭</strong>。' +
          '<strong>2025 年 10 月 19 日 Jennie C. Jones 的「Ensemble」闭幕，那是历年屋顶委托项目的最后一个，' +
          '也是公众最后一天能上去。</strong>' +
          '原因是要拆掉 1987 年的 Lila Acheson Wallace Wing，改建成 Frida Escobedo 设计的 ' +
          '<strong>Oscar L. Tang and H.M. Agnes Hsu-Tang Wing（Tang Wing）</strong>，' +
          '<strong>Escobedo 是大都会建馆以来第一位设计新馆翼的女性建筑师</strong>；' +
          '设计 2025 年 4 月获 Landmarks Preservation Commission 一致通过，施工预计 2026 年夏开始',
        '<strong>关于屋顶花园的「季节性」，把新旧两套规则都说清楚，因为这是网上最容易查到过期信息的一项：</strong>' +
          '<strong>旧屋顶花园在五层、7,500 平方英尺，历年只在 4 月至 10 月开放，冬季一律关闭</strong>——' +
          '所以过去 10 月中下旬去确实还赶得上，很多攻略就是按这个写的。' +
          '<strong>但 2026 年 10 月它已经不存在了。</strong>' +
          '<strong>新的 Cantor Roof Garden 要等到 2030 年 Tang Wing 开放，届时移到四层、' +
          '面积扩到近 10,000 平方英尺，且四、五层合计约 18,500 平方英尺的室外空间将改为全年开放</strong>' +
          '（五层景观由 Nelson Byrd Woltz 的 Thomas Woltz 设计）。' +
          '<strong>结论：这一趟没有任何登高看中央公园的选项，想要那个俯瞰视角请去 Top of the Rock</strong>',
        '<strong>票价规则是本馆最反直觉的一条，而且对你不利：纽约州居民与 NY／NJ／CT 三州院校学生可以自定金额' +
          '（最低每票 $0.01），其他所有人是固定 $30。</strong>' +
          '也就是<strong>同一道门、同一批展厅，本地人可以付一分钱，你付 $30</strong>。' +
          '好消息有两条：<strong>官方原文「All tickets include exhibitions and same-day entry to ' +
          'both Met locations for the date on your ticket」——$30 已经含全部特展，' +
          '而且同一天还能用同一张票进 The Met Cloisters</strong>，' +
          '这让本馆在本区的单位性价比其实是最高的'
      ],
      tour: [
        '<strong>第一次来、只有三小时，就按这条线走五个展厅，其余全部放弃——这是本条目最该被照抄的一段。</strong>' +
          '<strong>进门先在 Great Hall 的服务台拿一张免费官方地图</strong>' +
          '（全馆 200 多个展厅、编号不连续，靠记忆或手机找路一定会迷路，这张纸能省你半小时）。' +
          '顺序设计成一条不折返的环线：' +
          '<strong>① Great Hall 往左（北）进 Egyptian Art，走到尽头的 Temple of Dendur（Gallery 131），40 分钟 → ' +
          '② 由此转进西北角的 The American Wing，30 分钟 → ' +
          '③ 穿 Medieval Hall 到 Arms and Armor（Gallery 371–379），20 分钟 → ' +
          '④ 回 Great Hall 上大楼梯到二层 European Paintings 1250–1800（Gallery 600–644），50 分钟 → ' +
          '⑤ 下楼到 Great Hall 右手（南）的 Greek and Roman Art，30 分钟</strong>。' +
          '合计 170 分钟加馆内步行，正好三小时',
        '<strong>五个展厅里各自不能错过的具体东西（只列这些，看完就走）：</strong>' +
          '<strong>Temple of Dendur</strong>——绕到神庙背面看那些 19 世纪涂鸦，正面隔水池拍；' +
          '<strong>European Paintings 1250–1800 是本馆真正的王牌</strong>，' +
          '<strong>必看 Vermeer（大都会藏五幅，而全世界存世只有三十几幅，这是单馆最大的一批）</strong>、' +
          'Bruegel 的《The Harvesters》（1565）、Caravaggio 的《The Musicians》、' +
          'El Greco 的《View of Toledo》、Rembrandt 的自画像；' +
          '<strong>The American Wing</strong> 看 Emanuel Leutze 的《Washington Crossing the Delaware》' +
          '（1851 年，<strong>3.78 × 6.47 米，一面墙那么大</strong>）与 Tiffany 玻璃；' +
          '<strong>Greek and Roman</strong> 看整间搬来的 <strong>Boscoreale 卧室壁画（公元前 1 世纪）</strong>与库罗斯像；' +
          '<strong>Arms and Armor</strong> 看 Gallery 371 里那队全装甲骑马武士与日本盔甲',
        '<strong>可以直接跳过、以及根本进不去的部分（2026-09-14 查官方 Gallery Closures 页）：</strong>' +
          '<strong>Modern and Contemporary Art 整个板块已关到 2030 年</strong>' +
          '（Galleries 399、900–913、917、919–925）——' +
          '<strong>想看 20 世纪之后的作品请改去 MoMA、Whitney 或本区的 Guggenheim，别在这里找</strong>；' +
          '<strong>Ancient West Asia 与 Ancient Cyprus 全关</strong>（173–175、400–406）；' +
          '另有部分关闭：American Wing 的 773–774 与 774A、Egyptian Art 的 116、' +
          'Greek and Roman 的 176、Asian Art 的 229–232、Arab Lands 的 451、Costume Institute 的 980–981、Gallery 999。' +
          '<strong>这张清单每周变，出发前务必自己查一遍 metmuseum.org 的 Gallery Closures 页</strong>',
        '<strong>还应该主动跳过的是临时特展。</strong>' +
          '$30 的票已经含全部特展，所以很多人觉得不看就亏了——' +
          '<strong>但一个特展会吃掉你一小时，而第一次来的人把这一小时放在 European Paintings 上收益高得多</strong>。' +
          '只有当某个特展正好是你专程要看的题材时才值得进去。同理，出口处的礼品店可以整个略过',
        '<strong>安检、寄存与排队，这里有一条对带相机的人是硬门槛：</strong>' +
          '全部入口都过安检，<strong>第五大道正门那道大台阶是全馆最长的队，高峰时段 15–25 分钟</strong>，' +
          '网上先买定时票能明显缩短。' +
          '<strong>官方原文写得很直接：「Large camera equipment cannot be stored in our coat check. ' +
          'If you bring it to the Museum, you will not be able to enter.」——' +
          '大型摄影器材既不能寄存、带来了也不让你进门。</strong>' +
          '大包、行李箱、乐器同样禁入且同样不能寄存。' +
          '<strong>一机两镜的常规摄影包没问题，灯架、反光板、脚架袋会被拒。</strong>' +
          '免费衣帽间在 Great Hall 两侧。<strong>票根一定收好，官方写明出馆再进可能要求重新验票，' +
          '且「Entry is only guaranteed for the date printed on your ticket」</strong>',
        '<strong>人最少的时段是周五与周六 17:00 之后，这是本馆唯一的晚间时段（开到 21:00），' +
          '其余日子 17:00 就关。</strong>' +
          '本窗口内可用的是 10/16、10/17、10/23、10/24 四天。' +
          '<strong>最挤的是每天 11:00–15:00，以及周三闭馆造成的「周二与周四人流叠加」。</strong>' +
          '最后入场时间官网未明确列出，<strong>第三方写闭馆前 30 分钟（平日 16:30、周五周六 20:30），' +
          '未能从官方渠道确认</strong>，按早半小时到场为准',
        '<strong>餐饮与卫生间（大馆必看项，这里的坑是「周三全关」与「两家已关」）：</strong>' +
          '馆内可用的是 <strong>The American Wing Cafe</strong>（一层美国翼）、' +
          '<strong>The Great Hall Balcony Cafe</strong>（二层 Great Hall 阳台，亚洲风味）与 ' +
          '<strong>Lehman Cafe Cart</strong>（Lehman 收藏一层）。' +
          '一般 11:00–16:00，<strong>周五周六延到 20:00；周三随全馆闭门</strong>。' +
          '<strong>The Met Dining Room 已永久关闭，Cantor Roof Garden Bar 因 Tang Wing 施工关闭。</strong>' +
          '<strong>请注意官方两页自相矛盾：Gallery Closures 页把 The Eatery 与 Petrie Court Cafe 都列为关闭，' +
          '而餐饮页写 Petrie Court Cafe 是「closed through September 30」（即 10 月起应恢复）——' +
          '两种口径都列出，不替你选。</strong>' +
          '卫生间各层多处，<strong>Great Hall 层与二层欧洲绘画区各有一组，是路线上最顺的两处</strong>'
      ],
      photo: '室内建筑 <strong>4/5</strong>，藏品记录 <strong>4.5/5</strong>，人像 <strong>2/5</strong>。' +
        '可以手持无闪光自由拍摄是加分，但三脚架与大型器材是硬禁——这是个用一机一镜做记录的地方，不是布光创作的地方。',
      shots: [
        {
          name: 'Temple of Dendur 与 Sackler Wing 斜玻璃幕墙',
          desc: '<strong>晴天的 14:00–16:00 最好</strong>：斜玻璃幕墙朝西面向中央公园，' +
            '<strong>下午的侧逆光会把砂岩打成暖色、并在前景水池上留下亮面</strong>，' +
            '上午这面墙是平光。' +
            '<strong>16–24mm 从水池对岸横构图，把神庙、门楼与整面幕墙一起收进来</strong>；' +
            '<strong>50–85mm 拍外壁的浮雕与那些 19 世纪旅行者涂鸦，这是全馆最有故事的一张细节照</strong>。' +
            '<strong>禁三脚架，ISO 800–3200、f/2.8–f/4、1/60s</strong>，靠柱子或矮墙做人体支撑。' +
            '大空间加大面积玻璃导致光比偏大，<strong>拍 raw、按砂岩测光、让窗外过曝</strong>。' +
            '坐标为 OSM 大都会博物馆建筑面要素中心点，Gallery 131 在馆体北侧。',
          view: [40.779440, -73.963383]
        },
        {
          name: 'Great Hall 穹顶与大楼梯',
          desc: '<strong>开门第一档 10:00–10:30 是唯一能拍到人不多的时段</strong>，' +
            '之后这里永远是全馆人流密度最高的一处。' +
            '三组罗马式穹顶加两侧对称大楼梯，<strong>14–24mm 站大厅正中做对称构图</strong>，' +
            '或<strong>35–50mm 从楼梯半层平台俯拍大厅地面与人流，做「巨大空间中的小人物」的尺度对比</strong>。' +
            '穹顶顶光加侧面高窗，白色石材容易被测光压暗，<strong>主动 +0.7 至 +1.3 EV</strong>。' +
            '<strong>无独立 OSM 实体，与 1 号机位同在馆内，地图不重复打针。</strong>'
        }
      ],
      access: {
        visit: '<strong>3–4 小时</strong>。<strong>官方未公布建议参观时长，以下按展厅规模与上面那条五展厅路线推算。</strong>' +
          '分配：Egyptian Art 与 Temple of Dendur 40 分钟、The American Wing 30 分钟、' +
          'Arms and Armor 20 分钟、<strong>European Paintings 1250–1800 共 50 分钟（本馆王牌，别压缩这一段）</strong>、' +
          'Greek and Roman 30 分钟，加馆内步行与找路约 30 分钟。' +
          '<strong>只看重点 2 小时</strong>：只留 Temple of Dendur 与 European Paintings 两处。' +
          '<strong>想把 17 个策展部门走遍要 2–3 天，不要在一天里尝试。</strong>' +
          '若当天还要用同一张票去 The Met Cloisters，<strong>本馆压到 3 小时、单程交通另留 45–60 分钟</strong>',
        book: '<strong>不需预约也能进，但强烈建议在 metmuseum.org 先买定时票</strong>——' +
          '能省掉第五大道大台阶前 15–25 分钟的购票队（安检队还是要排）。' +
          '<strong>票只保证你票面那一天有效，同日通用 Fifth Avenue 与 The Met Cloisters 两处。</strong>' +
          '<strong>自定金额票的购买限制：网上买必须有纽约州账单地址；' +
          'NJ 与 CT 的学生只能到现场凭学生证买，网上买不了。</strong>' +
          '<strong>官方明确不接受任何外部票务商的 voucher 或 pass</strong>' +
          '（原文「The Met does not accept vouchers or passes from any outside ticket sellers」），' +
          '请只在官网或馆内售票台买',
        ticket: '<strong>核实日期 2026-09-14，来源 metmuseum.org 票价页与官方购票系统。</strong>' +
          '<strong>成人 $30、长者（65 岁及以上）$22、学生 $17、12 岁以下免费、会员与 Patron 免费。</strong>' +
          '残障访客 $22（<strong>仅限现场购买</strong>），其陪护人员免费（亦仅限现场）。' +
          '<strong>核心规则：纽约州居民与 NY／NJ／CT 三州院校学生可自定金额，' +
          '官方原文「the amount you pay for admission is up to you, but you must pay something ' +
          '（$00.01 minimum per ticket）」——必须付钱，但最低一分钱即可。</strong>' +
          '可接受的居民证明：纽约州驾照、纽约州身份证、IDNYC、写有纽约州地址的账单、学生证、纽约图书馆卡。' +
          '<strong>这条对外地游客不适用，请按 $30 做预算。</strong>' +
          '<strong>$30 已含全部特展，且同日通用两馆</strong>（官方原文见上）。' +
          '另有几类免费入场：<strong>IDNYC 持卡人、纽约州 EBT／SNAP 持卡人（Museums for All）</strong>，' +
          '以及 <strong>Columbia University（含在职教职员工）、Barnard College、Bard Graduate Center、' +
          'Macaulay Honors College–CUNY、NYU Institute of Fine Arts、' +
          'NYU Institute for the Study of the Ancient World 的在读学生与纽约市高中生</strong>。' +
          '票务问题邮箱 onlinetickets@metmuseum.org，一般咨询电话 <strong>+1 212-535-7710</strong>',
        hours: '<strong>核实日期 2026-09-14，官方原文「Sunday–Tuesday and Thursday: 10 am–5 pm；' +
          'Friday and Saturday: 10 am–9 pm；Closed Wednesday」，' +
          '另「Closed Thanksgiving Day, December 25, January 1, and the first Monday in May」。</strong>' +
          '<strong>对本窗口的直接影响：10/14 与 10/21 这两个周三去不了；' +
          '10/16、10/17、10/23、10/24 四天开到 21:00，是本区唯一的晚间博物馆时段。</strong>' +
          '<strong>最后入场时间官网未明确列出</strong>，第三方口径为闭馆前 30 分钟' +
          '（平日 16:30、周五周六 20:30），<strong>未能从官方渠道确认</strong>。' +
          '<strong>The Met Cloisters 的时间与本馆不同</strong>：' +
          '官方（metmuseum.org 首页与购票系统两处一致）写 <strong>Thursday–Tuesday 10 am–5 pm、Closed Wednesday</strong>，' +
          '第三方则写周四至周一 10:00–16:30、周二与周三闭馆，' +
          '<strong>两种口径都列出，详见本区 Cloisters 条目</strong>',
        parking: '<strong>不要开车。</strong>' +
          '地铁 <strong>4／5／6 线「86 St」步行约 8 分钟</strong>（出站沿 86 街西行到第五大道再南行），' +
          '<strong>6 线「77 St」步行约 10 分钟</strong>；' +
          '公交 <strong>M1／M2／M3／M4 沿第五大道（南行）与麦迪逊大道（北行）直达馆前</strong>，' +
          'M79 横穿公园可在馆侧下车。' +
          '<strong>博物馆自有停车库的现行费率与开放状态未能从官方渠道确认</strong>，' +
          '需要的话请先电话核对 <strong>+1 212-535-7710</strong>；' +
          '上东区路边表位在日间基本找不到空位',
        walk: '<strong>正门在 Fifth Avenue 与 82 街交口，那道宽大台阶就是入口</strong>；' +
          '<strong>另有 81 街的无障碍（step-free）入口</strong>。' +
          '安检后即是 Great Hall。' +
          '本区内步行距离（按 OSM 坐标<strong>推算</strong>）：' +
          '<strong>Central Park 的 Conservatory Water 到本馆正门约 660 米 / 9 分钟；' +
          '本馆到 Guggenheim 沿第五大道约 900 米 / 12 分钟；' +
          '本馆到 AMNH 需走 79 街横穿公园约 1.1 公里 / 15–20 分钟</strong>' +
          '（这两馆分属公园东西两侧的不同地铁线，没有直达地铁，走过去比换乘快）'
      },
      notes: [
        '<strong>摄影政策的官方原文，逐条照抄：允许「Non-flash photography and video recording for ' +
          'private, non-commercial use」与「Hand-held cameras without flash」；' +
          '禁止「Selfie sticks, tripods, monopods, drones, and professional video equipment, ' +
          'unless previously arranged and approved by the Communications Department」。</strong>' +
          '<strong>换句话说：手持随便拍，一上脚架就违规</strong>，' +
          '真要架机器得事先向 Communications Department 申请',
        '<strong>最容易让人在门口栽跟头的一条：「Large camera equipment cannot be stored in our coat check. ' +
          'If you bring it to the Museum, you will not be able to enter.」</strong>' +
          '大型器材不能寄存、也不让带进馆，<strong>也就是说没有「先存着、逛完再取」这个选项</strong>。' +
          '大包、行李箱、乐器、电子设备同属禁入且不可寄存之列。' +
          '<strong>把器材精简到一机两镜装进常规背包，是唯一稳妥的做法</strong>',
        '<strong>禁闪光；另有部分单件展品与部分展厅单独标注禁拍，看到标识就收机器。</strong>' +
          '<strong>「Unauthorized photoshoots and staged photography（photo/film shoots, modeling shoots, ' +
          'engagement shoots）are not permitted」——摆拍性质的写真、婚纱、订婚照一律禁止</strong>，' +
          '即使全程手持也不行',
        '<strong>官方还写明在馆内拍摄的照片与视频「cannot be published, sold, reproduced, transferred, ' +
          'distributed, or otherwise commercially exploited in any manner whatsoever」。</strong>' +
          '个人留念与社媒分享不受影响，' +
          '<strong>但任何商业用途要走 image.licensing@metmuseum.org 申请授权</strong>',
        '<strong>屋顶花园（Gallery 926）与 Cantor Roof Garden Bar 已关闭，不是季节性关闭，' +
          '要等 2030 年 Tang Wing 开放才回来。</strong>' +
          '<strong>Modern and Contemporary Art（Galleries 399、900–913、917、919–925）同样关到 2030 年。</strong>' +
          '网上任何写「10 月还能上大都会屋顶看中央公园」的攻略都已过期',
        '<strong>Gallery Closures 是本馆最值得出发前查一次的页面，因为它每周更新。</strong>' +
          '2026-09-14 的清单：Ancient West Asia 与 Ancient Cyprus 全关（173–175、400–406）；' +
          '部分关闭为 American Wing 的 773–774 与 774A、Egyptian Art 的 116、Greek and Roman 的 176、' +
          'Asian Art 的 229–232、Arab Lands 的 451、Costume Institute 的 980–981、' +
          'Robert Lehman Collection 的 Ramadan Prayer Space、以及 Gallery 999',
        '<strong>全员过安检，第五大道正门高峰排队最长（15–25 分钟）。</strong>' +
          '禁入物品另含玻璃容器、罐装喷雾、除水以外的液体，' +
          '以及大型或跑步型婴儿车、自行车、滑板、轮滑与滑板车',
        '<strong>每周三闭馆这件事请单独记住，本窗口 10/14 与 10/21 都是周三。</strong>' +
          '相应地，<strong>周二与周四会承接周三的人流，是一周里除周末外最挤的两天</strong>；' +
          '想要人少又能待久，就选 10/16、10/17、10/23、10/24 的 17:00 之后进场'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Temple_of_Dendur%2C_Egyptian_collection%2C_Metropolitan_Museum_of_Art.jpg',
          cap: 'Temple of Dendur 与 Sackler Wing 的斜玻璃幕墙 · TheCatalyst31 / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Metropolitan_Museum_of_Art%2C_Great_Hall%2C_October_2025.jpg',
          cap: 'Great Hall 的罗马式穹顶与大楼梯 · TheCatalyst31 / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Metropolitan_Museum_of_Art_entrance_NYC.JPG',
          cap: '第五大道立面与正门大台阶 · Arad / CC BY-SA 3.0' }
      ]
    },
    {
      id: 'amnh',
      n: 3,
      name: '美国自然史博物馆',
      en: 'American Museum of Natural History',
      must: 5,
      score: 3.5,
      tldr: '外地游客 $37／$43／$48 三档；Gilder Center 含在门票里，天象馆与蝴蝶馆一律另收。',
      tags: [
        { t: '成人 $37 起', c: 'paid' },
        { t: '每日 10:00–17:30', c: 'free' },
        { t: '天象馆另收费', c: 'risk' },
        { t: '禁三脚架但可闪光', c: 'risk' }
      ],
      highlights: [
        '1869 年创立，主馆在 200 Central Park West，' +
          '<strong>官方口径是 3,300 万件标本、40 多个常设展厅</strong>，' +
          '外加 Rose Center for Earth and Space 与 Gilder Center 两个独立体量。' +
          '<strong>它也是本手册另一处信息的官方来源：Manhattanhenge 的逐年日期是由本馆发布的</strong>' +
          '（2026 年为 5 月 28–29 日与 7 月 11–12 日，都不在本次窗口内）',
        '<strong>三件跨越百年的招牌展品，构成本馆的全部不可替代性：</strong>' +
          '<strong>Milstein Hall of Ocean Life 里那条 94 英尺（28.7 米）的蓝鲸模型</strong>，' +
          '悬在一个刻意调暗的两层通高展厅顶上；' +
          '<strong>四层 Fossil Halls 的 Titanosaur 铸模</strong>——' +
          '这具 Patagotitan mayorum 的复制骨架长到<strong>脖子必须伸出展厅门外</strong>，' +
          '同层还有 T. rex 与 Triceratops；' +
          '以及 2021 年重装的 <strong>Allison and Roberto Mignone Halls of Gems and Minerals</strong>，' +
          '<strong>镇馆之物是 563 克拉的 Star of India 蓝宝石</strong>',
        '<strong>Richard Gilder Center for Science, Education, and Innovation 是本馆近年最大的变化，' +
          '而它的重点是建筑本身。</strong>' +
          '<strong>2023 年 5 月 4 日开放，Jeanne Gang 的 Studio Gang 设计，造价 4.65 亿美元、' +
          '面积 230,000 平方英尺</strong>（19 万新建 + 4 万改造）。' +
          '核心是 <strong>Kenneth C. Griffin Exploration Atrium</strong>：' +
          '<strong>五层通高、约 10,000 平方英尺、顶上开椭圆天窗、整个空间里没有一个直角</strong>，' +
          '形态取自美国西南部的峡谷。' +
          '<strong>做法很特别：用喷射混凝土（shotcrete）直接打在起伏的钢筋网上，全程不用一次性模板</strong>' +
          '（Gang 为此专门去看了在建的铁路隧道）。' +
          '<strong>它还顺手解决了本馆最大的实际问题——在 10 栋楼之间打通了 33 处连接，消掉了原先一堆死胡同</strong>',
        '<strong>票价结构是三档，而「哪些算另收费」是本馆最容易买错的地方。</strong>' +
          '<strong>General Admission 已包含 40 多个常设展厅、Rose Center for Earth and Space、' +
          '以及 Gilder Center 的入场</strong>（官方原文如此）。' +
          '<strong>但 Gilder Center 里那两个最受追捧的项目——二层的 Davis Family Butterfly Vivarium 与' +
          '三层的 Invisible Worlds——都要另行买票</strong>，' +
          '<strong>海登天象馆的 Space Show 同样另收费</strong>。' +
          '所以 <strong>+1（加一个）与 All Access（加两个以上）这两档的差价，买的就是这些项目的入场券</strong>',
        '<strong>一条反直觉的现场事实，拿着旧照片来的人会找不到：' +
          '中央公园西侧正门台阶前那座 Theodore Roosevelt 骑马像已于 2022 年初移除。</strong>' +
          '雕像（白人骑马、一名非裔与一名原住民步行随行）长期被批评带有种族等级意味，' +
          '经多年争议后撤走。<strong>Theodore Roosevelt Memorial Hall 本身仍在，只是门前的基座空了</strong>'
      ],
      tour: [
        '<strong>先做一个决定：这个馆值不值得你三小时。</strong>' +
          '<strong>带孩子、或你本人对恐龙、鲸鱼、矿物、宇宙其中任何一项真有兴趣——值得，它是同类里的世界第一。</strong>' +
          '<strong>如果你来纽约是为了看城市与艺术，那么在只有几天的行程里，' +
          '这三小时放在 The Met 或街面上的收益更高</strong>——' +
          '本条目给 must 5 是因为它在「来纽约会不会后悔没去」这个尺度上确实是世界级，' +
          '但它也是本区四个核心项目里最容易被合理放弃的一个',
        '<strong>从哪个门进，直接决定你要不要多走 20 分钟。</strong>' +
          '<strong>三个对公众开放的入口：' +
          '① Central Park West 正门（200 Central Park West，就是那道大台阶，进去是 Theodore Roosevelt Memorial Hall）；' +
          '② Rose Center 入口（54 West 81st Street，在 Central Park West 与 Columbus Avenue 之间）；' +
          '③ Gilder Center 入口（415 Columbus Avenue，79 街口）。</strong>' +
          '<strong>另有 200 Central Park West 台阶下方的会员专用门与 77 街门，后者只在特别活动时开。</strong>' +
          '<strong>推荐走 Gilder Center 那个门</strong>：它是 2023 年新建的，' +
          '<strong>安检通道最宽、队最短，而且你一进门就站在那个五层通高的喷射混凝土峡谷中庭里</strong>——' +
          '这本身就是本馆现在最值得看的空间。带婴儿车的话官方也推荐 81 街与 79 街这两个门',
        '<strong>三小时的看法：只锁四处，其余全部跳过。</strong>' +
          '<strong>① Gilder Center 的 Exploration Atrium（进门即是，15 分钟，别急着往里走，先在各层楼板边缘看这个空间）→ ' +
          '② 四层 Fossil Halls（Titanosaur、T. rex、Triceratops，50 分钟，这是本馆的绝对核心）→ ' +
          '③ 一层 Milstein Hall of Ocean Life 的 94 英尺蓝鲸（25 分钟）→ ' +
          '④ Mignone Halls of Gems and Minerals 与 Star of India（30 分钟）。</strong>' +
          '剩下的时间留给 Rose Center 的 Scales of the Universe 步道' +
          '（<strong>这一段含在门票里，不需要买 Space Show 的票也能走</strong>）',
        '<strong>可以跳过的部分，以及怎么决定要不要加钱买另收费项目：</strong>' +
          '各文化区的老式人类学展厅（非洲、亚洲、南美等）大多是几十年前的橱窗式陈列，' +
          '<strong>信息密度低、动线长，第一次来可以整片略过</strong>' +
          '（例外是 2022 年重装的 <strong>Northwest Coast Hall</strong>，值得 10 分钟）。' +
          '<strong>另收费的四个项目里，只有 Hayden Planetarium 的 Space Show 值得考虑</strong>：' +
          '现行节目是 <strong>「Encounters in the Milky Way」，片长 24 分钟，' +
          '每 30 分钟一场、首场 10:30、末场 16:30</strong>。' +
          '<strong>蝴蝶馆（Gilder 二层）的环境是 <strong>80°F（约 27°C）加高湿度</strong>，' +
          '穿着秋装进去会很难受；Invisible Worlds（Gilder 三层）是沉浸式投影，' +
          '带孩子加分、成人单独去一般</strong>',
        '<strong>买票的实操：先选人数与入馆日期，然后在结账流程里加挂 Space Show 或其他另收费项目。</strong>' +
          '<strong>这是唯一能锁定天象馆场次的方式——到现场再加买，热门场次很可能已满。</strong>' +
          '<strong>另一条容易忽略的官方规则对你有利：「Visitors may leave and return using the same ticket ' +
          'on the same day」——同一张票当天可以出馆再进</strong>，' +
          '所以可以上午看化石、出去在 Columbus Avenue 上吃顿正常价格的午饭、下午再回来',
        '<strong>人流：工作日上午明显比周末松，但有一个具体的坑——学校团体在 09:30–10:30 之间到达，' +
          '所以四层化石厅在 10:00 开门后的第一小时反而不空。</strong>' +
          '相对安静的窗口是 <strong>10:00 一开门先去蓝鲸厅与矿物厅（团体通常先冲恐龙），' +
          '14:00 之后再上四层</strong>。周六是全周最挤的一天',
        '<strong>餐饮与卫生间（这是本馆比 The Met 友好的一处，官方给了完整时间表）：</strong>' +
          '<strong>四个餐饮点——The Restaurant at Gilder（二层，桌边服务，俯瞰 Griffin 中庭，11:30–15:30）、' +
          'Food Court（地下层，选择最多、每日换菜单、有无麸质与无坚果选项，10:45–16:45）、' +
          'Cafe on 1（一层，11:00–16:30）、Cafe on 4（四层，就在化石厅旁边，11:00–16:30）。</strong>' +
          '<strong>官方明令禁止在任何展厅内进食，且不许带敞口的食物饮料容器进馆（水瓶可以）。</strong>' +
          '<strong>寄存柜是收费的：小柜 $7／天（32 × 28 × 50 厘米）、大柜 $12／天（56 × 28 × 50 厘米），' +
          '只到 17:00</strong>；<strong>超大行李、大型背包与食品饮料不收</strong>。' +
          '卫生间各层均有，四层化石厅与地下层餐区各有一组，是路线上最顺的两处'
      ],
      photo: '室内建筑 <strong>4/5</strong>（主要靠 Gilder 中庭），展品记录 <strong>3.5/5</strong>，人像 <strong>2/5</strong>。' +
        '<strong>注意一条与 The Met 相反的规则：本馆官方明文允许使用闪光灯（「using available light or electronic flash attachments」），' +
        '但同样禁三脚架与自拍杆</strong>——蓝鲸厅那种刻意压暗的展厅因此反而比 The Met 好拍。',
      shots: [
        {
          name: 'Gilder Center 的 Exploration Atrium（本馆第一机位）',
          desc: '<strong>最佳是 10:00–11:30 的晴天上午</strong>：顶上那组椭圆天窗此时把直射光引进中庭，' +
            '<strong>在喷射混凝土的曲面上打出明暗渐变，这是这个空间唯一有立体感的时段</strong>，' +
            '阴天或下午它会变成一片平淡的灰白。' +
            '<strong>16–24mm 从二层或三层的楼板边缘向斜上方拍</strong>，' +
            '让几道曲面开口与桥面层层套叠、人物做尺度参照；' +
            '<strong>35–50mm 拍单个洞口的边缘曲线与混凝土的喷射质感</strong>。' +
            '<strong>禁三脚架，但可以把机身压在各层栏板上；官方允许闪光，不过在这种大空间里闪光没有意义，' +
            '走 ISO 800–3200、f/2.8–f/4 更实际</strong>。' +
            '坐标为 OSM 美国自然史博物馆建筑面要素中心点，Gilder Center 在馆区西侧 Columbus Avenue 一线。',
          view: [40.781101, -73.974236]
        },
        {
          name: 'Milstein Hall of Ocean Life 的蓝鲸',
          desc: '<strong>不受时段限制（全靠人工照明），但避开 10:00–11:00 与周末午后的团体高峰。</strong>' +
            '展厅刻意压到接近全暗、鲸腹由下方泛光打亮，' +
            '<strong>14–20mm 站在下层展厅中央、近乎垂直上仰，让 28.7 米的鲸身斜穿整个画面对角线</strong>；' +
            '也可以上到二层环廊，<strong>35–85mm 与鲸体平齐拍侧面轮廓</strong>。' +
            '<strong>这是全馆最暗的展厅，ISO 3200–12800、f/1.4–f/2.8、1/40s 是现实参数</strong>；' +
            '<strong>官方允许闪光，但对一条 28 米长、离你十几米的展品，机顶闪光只会打亮前景灰尘，别开</strong>。' +
            '<strong>无独立 OSM 实体，与 1 号机位同在馆内，地图不重复打针。</strong>'
        }
      ],
      access: {
        visit: '<strong>3–4 小时看完常设部分。</strong>' +
          '<strong>官方未公布建议参观时长，以下按展厅数量与上面那条四点路线推算。</strong>' +
          '分配：Gilder Center 中庭 15 分钟、四层 Fossil Halls 50 分钟、蓝鲸厅 25 分钟、' +
          'Gems and Minerals 30 分钟、Rose Center 与 Scales of the Universe 30 分钟，' +
          '加馆内步行与找路 30 分钟（<strong>这个馆由 20 栋楼拼成，找路耗时要实打实算进去</strong>）。' +
          '<strong>只看重点 2 小时</strong>：只留四层化石厅与蓝鲸厅。' +
          '<strong>加海登天象馆 Space Show 另计 45 分钟</strong>（片长 24 分钟，加入场与散场）；' +
          '加蝴蝶馆或 Invisible Worlds 各再加 30 分钟。' +
          '<strong>想把 40 多个常设厅走遍要整整两天。</strong>' +
          '<strong>注意闭馆时间 17:30 且最后入场 17:00，实际上你不可能在下午两点后才开始逛</strong>',
        book: '<strong>不需强制预约，但官方建议提前在网上买票以加快入场</strong>' +
          '（原文「Get tickets in advance for faster entry」）。' +
          '<strong>关键流程：先选人数与入馆日期，然后在结账过程中加挂 Hayden Planetarium Space Show、' +
          'Davis Family Butterfly Vivarium、Invisible Worlds、巨幕电影等另收费项目——' +
          '这是唯一能提前锁定天象馆具体场次的办法。</strong>' +
          '<strong>Space Show 场次为每 30 分钟一场、首场 10:30、末场 16:30，片长 24 分钟。</strong>' +
          '<strong>同一张票当天可以出馆再进</strong>（官方 Code of Conduct 原文' +
          '「Visitors may leave and return using the same ticket on the same day」）。' +
          '10 人以上团体请先电话 <strong>+1 212-769-5200</strong>',
        ticket: '<strong>核实日期 2026-09-14，来源 amnh.org 的 Plan Your Visit 票价页与官方购票系统。' +
          '三档票价，两套价格表：</strong>' +
          '<strong>【外地游客适用的 Standard Pricing】General Admission 成人 $37、长者与学生 $30、' +
          '儿童（3–12 岁）$22；General Admission + One Ticketed Exhibition 成人 $43、长者与学生 $35、儿童 $26；' +
          'General Admission + All Ticketed Exhibitions 成人 $48、长者与学生 $39、儿童 $30。' +
          '会员全部免费，3 岁以下免费。</strong>' +
          '<strong>【纽约州居民的自定金额】官方原文「Pay What You Wish: for NY State residents (with ID). ' +
          'The amount you pay for General Admission only is up to you」，' +
          '建议金额为成人 $25、长者与学生 $20、儿童 $14；' +
          '对应的 +1 档 $30／$24／$17、All Access 档 $35／$28／$20。</strong>' +
          '<strong>请特别注意两条限制，这是本馆与 The Met 最大的差别：' +
          '一是自定金额只认「纽约州居民」，不含 NJ 与 CT（The Met 认三州学生，本馆不认）；' +
          '二是自定金额只覆盖 General Admission，' +
          '天象馆 Space Show、蝴蝶馆、Invisible Worlds、巨幕电影这些 ticketed exhibition ' +
          '对所有人（含纽约州居民）都是另行固定收费，不能挂在自定金额票上。</strong>' +
          '<strong>结论：这两条对你都不适用，请按成人 $37（只看常设）或 $43（加一个天象馆）做预算。</strong>' +
          '会员起价 $139（个人）／$179（家庭），咨询 <strong>+1 212-769-5606</strong>',
        hours: '<strong>核实日期 2026-09-14，官方 Hours 页原文「Open daily, 10 am–5:30 pm. ' +
          'Closed Thanksgiving Day and Christmas Day.」</strong>' +
          '<strong>也就是本窗口（10/13–10/26）14 天每天都开，没有周休日，也没有季节性调整——' +
          '这是本区四个核心项目里唯一不用查星期的一个。</strong>' +
          '<strong>最后入场 17:00</strong>（官方与第三方口径一致）。' +
          '<strong>但有一个必须自己查的东西：官方另有一份「Temporary Hall Closures」清单，' +
          '写明「This list is updated weekly」，逐日列出当周临时关闭的展厅与设施。</strong>' +
          '2026-09-14 可见的例子是蝴蝶馆与 The Restaurant at Gilder 在 9 月 8–18 日临时关闭、' +
          'Gilder Center 含 Gottesman Library 在 9 月 9 日整日关闭——' +
          '<strong>说明这个馆的单项关闭很频繁。本窗口的具体清单当天还查不到，' +
          '出发前请查 amnh.org/plan-your-visit/hours</strong>。' +
          '餐饮各点时间：The Restaurant at Gilder 11:30–15:30、Food Court 10:45–16:45、' +
          'Cafe on 1 与 Cafe on 4 均 11:00–16:30；寄存柜只到 17:00',
        parking: '<strong>不要开车。</strong>' +
          '地铁 <strong>B／C 线「81 St–Museum of Natural History」站，出站通道直通馆内</strong>' +
          '（这是全纽约少数从站台不出地面就能进馆的博物馆），' +
          '<strong>1 号线「79 St」步行约 5 分钟</strong>（沿 79 街东行到 Columbus Avenue 即是 Gilder Center 门口）。' +
          '公交 M7／M10／M11 沿 Columbus Avenue 与 Amsterdam Avenue，M79 横穿公园。' +
          '<strong>上西区路边表位在日间基本没有空位，周边停车楼日间 $30–50</strong>',
        walk: '<strong>三个公众入口：Central Park West 正门（200 Central Park West，那道大台阶）、' +
          'Rose Center 入口（54 West 81st Street）、Gilder Center 入口（415 Columbus Avenue，79 街口）。</strong>' +
          '<strong>推荐 Gilder Center 门——安检队最短，且一进门就是五层通高的中庭。</strong>' +
          'B／C 线站内通道到馆内 <strong>2 分钟</strong>；1 号线「79 St」到 Gilder Center 门口 <strong>5 分钟</strong>。' +
          '<strong>本馆到 The Met 需走 79 街横穿公园约 1.1 公里 / 15–20 分钟</strong>' +
          '（<strong>没有直达地铁，走过去比换乘快</strong>）；' +
          '<strong>到 Guggenheim 约 1.6 公里 / 22 分钟</strong>，同样横穿公园（按 OSM 坐标<strong>推算</strong>）'
      },
      notes: [
        '<strong>摄影政策原文（与 The Met 明显不同，值得单独记住）：' +
          '「Photography for personal use is allowed with handheld cameras, ' +
          'using available light or electronic flash attachments. ' +
          'Selfie sticks and tripods are not permitted.」</strong>' +
          '<strong>也就是：手持可以、闪光灯明文允许、三脚架与自拍杆禁止。</strong>' +
          '本馆是本区唯一允许闪光的馆，' +
          '<strong>但请自行判断——在蓝鲸厅、天象馆这类压暗空间里开闪光既拍不好也影响别人</strong>',
        '<strong>寄存柜是收费的，而且尺寸与时间都有硬限制：小柜 $7／天（12.5 × 11 × 19.5 英寸 / 32 × 28 × 50 厘米）、' +
          '大柜 $12／天（22 × 11 × 19.5 英寸 / 56 × 28 × 50 厘米），只开到 17:00（官方注明可能变动）。</strong>' +
          '<strong>超大行李、大型背包与食品饮料一律不收。</strong>' +
          '好消息是这个大柜尺寸相当宽松，常规摄影双肩包放得进去',
        '<strong>「什么算另收费」是本馆最容易花错钱的地方，再列一遍：' +
          'General Admission 含 40 多个常设厅 + Rose Center + Gilder Center 入场；' +
          '另收费的是 Davis Family Butterfly Vivarium（Gilder 二层）、' +
          'Invisible Worlds（Gilder 三层，从 Susan S. and Kenneth Wallach Gallery 进）、' +
          'Hayden Planetarium Space Show（一层）、巨幕电影，以及其他临时特展。</strong>' +
          '<strong>Rose Center 的建筑、展厅与 Scales of the Universe 步道是含在门票里的，' +
          '只有天象馆球幕里的那场放映要另买</strong>',
        '<strong>蝴蝶馆的环境要先知道再决定买不买：官方注明馆内维持 80°F（约 27°C）与高湿度。</strong>' +
          '十月中下旬纽约日间 15–20°C，你大概穿着长袖与外套，' +
          '<strong>进去十分钟就会开始出汗，而里面没有寄存处</strong>',
        '<strong>全员过安检。官方另明令：不得在任何展厅内进食，不许带敞口的食物饮料容器进馆（水瓶可以），' +
          '不得坐在地板或楼梯上，12 岁以下儿童须全程有成人陪同。</strong>' +
          '违反者可能被要求离馆且不退票、当天不得再入',
        '<strong>同一张票当天可以出馆再进</strong>（官方原文见 access.book）。' +
          '<strong>这一条的实际价值是午餐：馆内 Food Court 与咖啡点价格明显高于街面，' +
          '而 Columbus Avenue 与 Amsterdam Avenue 上有大量正常价位的餐厅，走出去五分钟就到</strong>',
        '<strong>中央公园西侧正门台阶前的 Theodore Roosevelt 骑马像已于 2022 年初移除</strong>，' +
          '按旧照片来找这座雕像的人会白跑。Theodore Roosevelt Memorial Hall 本体仍在',
        '<strong>这个馆由 20 栋楼拼接而成，是全纽约最容易迷路的博物馆。</strong>' +
          'Gilder Center 在 10 栋楼之间新增了 33 处连接、消掉了很多死胡同，但整体依然复杂。' +
          '<strong>进门务必拿纸质地图，或装官方的 Explorer app（有逐步导航，支持英、西、法、葡，没有中文）</strong>'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Central_atrium_of_the_Richard_Gilder_Center_for_Science%2C_Education%2C_and_Innovation_-_upper_level_view.jpg',
          cap: 'Gilder Center 的 Exploration Atrium 喷射混凝土中庭 · Zeete / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Blue_Whale_Nat%27l_Hist_Museum.JPG',
          cap: 'Milstein Hall of Ocean Life 的 94 英尺蓝鲸模型 · Breakyunit / CC BY-SA 3.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/AMNHTitanosaur.jpg',
          cap: '四层 Fossil Halls 的 Titanosaur 铸模全景 · D. Benjamin Miller / CC0' }
      ]
    },
    {
      id: 'guggenheim-museum',
      n: 4,
      name: '古根海姆博物馆',
      en: 'Solomon R. Guggenheim Museum',
      must: 4,
      score: 4,
      tldr: '建筑本身就是头号展品；成人 $30，但周日与周二 16:00–17:30 全民自定金额（$1 起）。',
      tags: [
        { t: '成人 $30', c: 'paid' },
        { t: '周日周二 $1 起', c: 'free' },
        { t: '禁三脚架', c: 'risk' },
        { t: '营业日口径有矛盾', c: 'risk' }
      ],
      highlights: [
        '<strong>先把定位说清楚：来这里主要是看建筑，藏品是附带的。</strong>' +
          'Frank Lloyd Wright 设计，<strong>1959 年 10 月 21 日开放——而 Wright 已在同年 4 月去世，' +
          '也就是说他没能看到自己这件作品落成</strong>。' +
          '从 1943 年首任馆长 Hilla Rebay 委托他设计（原话要一座「a temple of spirit, a monument」）' +
          '到开门，历时 16 年、画了 749 张图。' +
          '<strong>官方自己的说法是「The Guggenheim is Wright&rsquo;s most visited building」</strong>，' +
          '并于 <strong>2019 年 7 月以「The 20th-Century Architecture of Frank Lloyd Wright」' +
          '八处建筑之一列入 UNESCO 世界遗产</strong>（另为 2005 年国家史迹名录、2008 年国家历史地标）',
        '<strong>四个来自官方访客手册的数字，是这栋楼真正值得记住的东西：</strong>' +
          '<strong>①&nbsp;螺旋坡道全长四分之一英里（约 400 米），以恒定 3 度坡度上升；</strong>' +
          '<strong>②&nbsp;墙上的画作全部以 1.5 度角向后倾斜安装，而人眼看上去是垂直的</strong>' +
          '——Wright 的理由是画在画架上本来就是倾斜的；' +
          '<strong>③&nbsp;外墙厚度只有五英寸（约 13 厘米）</strong>，' +
          '靠 <strong>Gunite（喷射砂浆，一种常用于隧道与游泳池施工的喷涂砂水泥混合料）</strong>做到的' +
          '——<strong>有意思的是本区的 Gilder Center 在 2023 年用的还是同一类喷射混凝土工艺，相隔 64 年</strong>；' +
          '<strong>④&nbsp;Wright 把这个向上向外扩张的倒阶梯形态称为「optimistic ziggurat」（乐观的金字塔）</strong>',
        '<strong>参观方向是本条目最实用的一条，而九成游客都做错了：' +
          'Wright 的设计意图是先坐电梯到顶层，再顺着坡道一路走下来。</strong>' +
          '官方手册原文「Wright had imagined visitors would experience the museum from the top down. ' +
          'He had originally specified a glass elevator so visitors could look out onto the rotunda ' +
          'while ascending to level six.」' +
          '（那部玻璃电梯最终没有实现，现在是普通电梯。）' +
          '<strong>好处是双重的：一是 3 度下坡比上坡省力得多，二是你从第六层开始看，' +
          '整个中庭的螺旋几何在你正下方逐层展开，而从底层往上走则永远是仰视。</strong>' +
          '馆内有两部电梯（Rotunda Elevator 与 Tower Elevator），<strong>要坐前者</strong>',
        '<strong>结构上一个反直觉的事实：那条坡道不只是走道，它还是承重构件。</strong>' +
          '螺旋坡道在力学上相当于一道巨大的拱，把主展厅的柱子往外撑住、防止其向内倾倒。' +
          '另外<strong>整栋楼其实是三个体量拼的</strong>：' +
          '南侧六层的碗形主展厅（rotunda）、北侧四层的「monitor」' +
          '（<strong>Wright 原本是想把它做成 Hilla Rebay 与 Solomon Guggenheim 的公寓</strong>，' +
          '1990–92 年大修时全部改为展厅并更名 <strong>Thannhauser Building</strong>）、' +
          '以及东北角 1992 年由 Gwathmey Siegel 加建的十层附楼',
        '<strong>本窗口（10/13–10/26）馆内在展什么，以及为什么网上票价会看到两个数字：</strong>' +
          '<strong>主中庭是 Taryn Simon 的个展「Father Country I Do Love You」，' +
          '据第三方为 2026 年 9 月 18 日至 2027 年 3 月 14 日、42 件作品、占满整个 rotunda</strong>' +
          '（<strong>展期与规模未能从 guggenheim.org 原文确认</strong>）。' +
          'Tower Galleries 同期是 <strong>Collection in Focus | Modern European Currents（至 2027 年 1 月 10 日，' +
          '据官方 2026 年 5 月版访客手册）</strong>与常设的 <strong>Thannhauser Collection</strong>' +
          '（Picasso、Van Gogh、Kandinsky 一路的现代欧洲绘画，是本馆藏品的真正重点）。' +
          '<strong>关键提示：2026 年 8 月 3 日至 9 月 17 日因中庭换展曾把票价降到 $16，' +
          '所以你现在搜到的「古根海姆只要 $16」是那段时间的价。到 10 月已恢复 $30</strong>'
      ],
      tour: [
        '<strong>一句话逛法：上到六层，然后一路走下来。</strong>' +
          '<strong>进门先在大厅中央抬头看一眼那个玻璃穹顶（离地约 92 英尺 / 28 米），' +
          '然后直接找 Rotunda Elevator 上到 level 6，再沿 3 度下坡的坡道走回底层。</strong>' +
          '<strong>这不是什么冷门技巧，而是 Wright 本人写进设计里的动线</strong>——' +
          '绝大多数人进门就顺着坡道往上爬，结果既费力又全程仰视，把这栋楼最好的视角浪费掉了',
        '<strong>时间分配很简单，因为这个馆的结构就是一条线：坡道 400 米、六层，' +
          '慢慢走下来 45–60 分钟</strong>（中庭的展览就挂在坡道外墙上，边走边看，不需要另外找路）。' +
          '<strong>走完坡道再花 20–30 分钟去 Thannhauser Collection</strong>——' +
          '它在北侧 monitor 的上面三层，<strong>要坐 Tower Elevator 过去，很多人漏掉这一块</strong>，' +
          '而<strong>如果你是为了看画而不是看楼，这里才是全馆藏品含量最高的地方</strong>。' +
          '合计 90 分钟就能逛得很完整',
        '<strong>两个具体机位性质的看点，顺路不要错过：</strong>' +
          '<strong>①&nbsp;底层中庭正中向正上方看</strong>——六圈坡道向穹顶收束，是这栋楼最有辨识度的一眼；' +
          '<strong>②&nbsp;走到坡道中段（三、四层之间）回头横跨中庭看对面</strong>，' +
          '此时你能同时看到好几层坡道上的作品与走动的人，' +
          '<strong>这正是 Wright 说的「开放中庭让人同时看见不同层的作品」的实际效果，' +
          '也是任何传统一间间串起来的博物馆做不到的</strong>',
        '<strong>花钱的最优解：把这个馆排在周日或周二的 16:00。</strong>' +
          '<strong>官方购票系统原文「Pay-What-You-Wish hours are on Sundays and Tuesdays, 4 pm to 5:30 pm. ' +
          'The suggested contribution is $10, and minimum is $1」，并且不限居住地、所有人都能用</strong>——' +
          '<strong>这是本区唯一对外地游客成立的官方折扣</strong>。' +
          '窗口内可用的四天是 <strong>10/13（周二）、10/18（周日）、10/20（周二）、10/25（周日）</strong>。' +
          '<strong>代价是只有 90 分钟（16:00 到闭馆），而这个馆恰好 90 分钟就够——时间上正好合得上。</strong>' +
          '<strong>但请注意抢票规则：提前票只在当天上午 10:00 放出、数量很少、很快售罄，' +
          '余额留给时段内现场排队；此类票不可退、不可改期</strong>',
        '<strong>必须自己复核的一件事：这个馆到底周几闭馆，官方与第三方口径直接矛盾，' +
          '而窗口内 10/15 与 10/22 正是周四。</strong>' +
          '一派口径是<strong>每日 10:30–17:30、全周无休</strong>' +
          '（多个票务与目录站，并称本馆自家订票系统里到 2027 年 3 月都按这个排；' +
          '<strong>官方 2026 年 5 月版访客手册里 Café Rebay 写「Open 10:30 am–4 pm」，' +
          '间接支持 10:30 开门这个时间</strong>）；' +
          '另一派仍写<strong>每周四闭馆、11:00–18:00、周六延到 20:00</strong>（这是旧口径）。' +
          '<strong>guggenheim.org 本身是 JS 动态渲染页，2026-09-14 无法取到原文，两种说法都无法定案。</strong>' +
          '<strong>如果你只能周四去，出发前必须打 +1 212-423-3500 确认。' +
          '稳妥的做法是干脆排在周日或周二下午，既避开这个不确定性，又拿到自定金额时段</strong>',
        '<strong>餐饮与卫生间：</strong><strong>Café Rebay 是馆内唯一的餐饮点，' +
          '官方手册写明 10:30–16:00，且「taking in views of Central Park」——它有朝中央公园的窗景</strong>，' +
          '是走完坡道之后坐下来的合理选择（也是全区少见的「博物馆内有公园景观座位」）。' +
          '<strong>官方明令展厅内不得饮食。</strong>' +
          '礼品店在入口旁。' +
          '<strong>这个馆体量小，卫生间数量有限且集中在底层与地下的 Sackler Center 一侧；' +
          '具体分布未能从官方渠道确认，进门时先问一下保安</strong>',
        '<strong>免费导览资源值得一提：官方把完整的语音与文字导览做进了 Bloomberg Connects app 的' +
          '「Digital Guide」里，免费，内容包含策展人讲解与专门讲这栋 Wright 建筑的部分。</strong>' +
          '<strong>进门前先在手机上装好</strong>（Apple App Store 与 Google Play 都有），' +
          '馆内 Wi-Fi 名为「Guggenheim Guest」。需要轮椅的话直接向馆内保安要'
      ],
      photo: '建筑与室内 <strong>4.5/5</strong>，人像 <strong>3.5/5</strong>，藏品记录 <strong>3/5</strong>。' +
        '中庭的螺旋几何是纽约辨识度最高的室内建筑画面之一，而且官方允许手持无闪光拍摄；' +
        '<strong>扣分因为禁三脚架与镜头伸缩杆，且官方明令「不得把手机、相机或任何物件伸出坡道栏板外」，这直接掐掉了大部分探出去俯拍的构图</strong>。',
      shots: [
        {
          name: '底层中庭正中仰拍螺旋与穹顶（本馆招牌）',
          desc: '<strong>晴天的 11:00–14:00 最好</strong>：此时日光透过顶部玻璃穹顶直落中庭，' +
            '<strong>六圈坡道的白色栏板会形成明确的明暗层次</strong>；' +
            '接近闭馆时穹顶光变弱，画面会塌成一片均匀的白。' +
            '<strong>14–24mm 超广、站中庭正中近乎垂直上仰</strong>，' +
            '把螺旋收成同心的几何；<strong>竖构图比横构图更能表现 400 米坡道的纵深</strong>。' +
            '<strong>技术要点：白色墙面加顶部强光会让测光严重偏暗，主动 +1 至 +1.7 EV，' +
            '否则整栋楼会拍成灰色。</strong>' +
            '<strong>禁三脚架与镜头伸缩杆；官方还明令不得把相机伸出坡道栏板外</strong>，' +
            '所以「从高层探身俯拍中庭」这个常见构图是违规的，请在栏板内侧拍。' +
            'ISO 400–1600、f/4–f/5.6 足够。' +
            '坐标为 OSM 古根海姆博物馆建筑面要素中心点。',
          view: [40.782993, -73.958925]
        },
        {
          name: '第五大道对街拍外立面',
          desc: '<strong>14:00–17:00 是唯一有正面光的时段</strong>：立面朝西（第五大道），' +
            '<strong>下午的光斜打在那些外凸的曲面上，才能看出「向上向外扩张」的倒金字塔形态</strong>；' +
            '上午它整个处在阴影里。' +
            '<strong>站第五大道西侧人行道（公园一侧）用 24–35mm</strong>，' +
            '这个距离刚好能把主体连同北侧的 Thannhauser 体量一起收进来；' +
            '<strong>贴近到街对面用 16–20mm 仰拍，可以强调曲面与曼哈顿方格网的冲突</strong>' +
            '——这正是 Wright 当年的意图。' +
            '<strong>此处是公共人行道，三脚架合法可用</strong>（与馆内规则不同）。' +
            '<strong>无独立 OSM 实体，站位在第五大道 88–89 街之间人行道，地图不重复打针。</strong>'
        }
      ],
      access: {
        visit: '<strong>1.5–2 小时。</strong>' +
          '<strong>官方未公布建议参观时长，以下按坡道长度与展厅数量推算。</strong>' +
          '分配：<strong>电梯上到 level 6 再顺 3 度下坡走完 400 米坡道 45–60 分钟</strong>' +
          '（中庭的展览就挂在坡道外墙上，边走边看）、' +
          '<strong>Thannhauser Collection 20–30 分钟</strong>（北侧 monitor 上面三层，坐 Tower Elevator）、' +
          'Tower Galleries 的专题展 15 分钟。' +
          '<strong>只看建筑 45 分钟足够。</strong>' +
          '<strong>这是本区四个核心项目里最短的一个，所以它天然适合当作 The Met 之后的下半天</strong>；' +
          '<strong>用周日／周二 16:00 的自定金额时段进去，到闭馆正好 90 分钟，时间刚好够</strong>',
        book: '<strong>建议在 guggenheim.org 网上先买定时票</strong>，本馆体量小、' +
          '周末与假日的热门时段会售罄。' +
          '<strong>自定金额（Pay-What-You-Wish）时段的抢票规则单独记住：' +
          '提前票只在活动当天上午 10:00 放出、只在网上卖、数量很少且很快售罄；' +
          '剩余名额留给时段内到馆现场购买。此类票不可退款、不可改期</strong>' +
          '（官方原文「Pay-What-You-Wish tickets are non-refundable and cannot be rescheduled」）。' +
          '<strong>看到「Sorry, tickets are not available for this event」意思只是提前票卖完了，' +
          '现场仍有票</strong>——所以约不到也可以直接去排队',
        ticket: '<strong>核实日期 2026-09-14。成人 $30；长者（65 岁及以上）、学生、残障访客 $19；' +
          '美国现役军人 $25；12 岁以下免费；会员免费；残障访客的陪护人员免费。</strong>' +
          '<strong>【自定金额时段——本区唯一对外地游客成立的折扣】' +
          '官方购票系统页面原文「Pay-What-You-Wish hours are on Sundays and Tuesdays, 4 pm to 5:30 pm. ' +
          'The suggested contribution is $10, and minimum is $1」，不限居住地，所有人可用。' +
          '本窗口可用的四天：10/13、10/18、10/20、10/25。</strong>' +
          '<strong>请注意一个会让你搜到错价的情况：2026 年 8 月 3 日至 9 月 17 日因中庭换展（Taryn Simon 个展布展），' +
          '票价临时降为成人 $16、长者与学生 $12；9 月 18 日起已恢复 $30。' +
          '现在网上流传的「$16」是那段时间的价，不适用于 10 月。</strong>' +
          '<strong>另需说明：本馆没有纽约州居民优惠</strong>（与 The Met、AMNH 不同），' +
          '折扣只有上述自定金额时段这一条。' +
          '<strong>上述价格来自第三方汇总并称引自本馆订票系统，' +
          '因 guggenheim.org 为 JS 动态渲染页、当天无法取到原文，未能逐项在官网复核</strong>；' +
          '票价问题请打 <strong>+1 212-423-3500</strong>',
        hours: '<strong>核实日期 2026-09-14。这是本区最需要你自己复核的一项，两种口径直接矛盾，都列在这里：</strong>' +
          '<strong>【口径一，较新】每日 10:30–17:30，全周无休</strong>，' +
          '来源为多个票务与目录站，并称本馆自家订票系统里自 2026 年至 2027 年 3 月都按此排；' +
          '同一来源另给出本季的例外日：<strong>2026 年 11 月 10 日与 11 月 26 日闭馆、12 月 25 日闭馆；' +
          '9 月 22 日与 11 月 9 日提前于 15:00 关、12 月 24 日 16:00 关</strong>。' +
          '<strong>这个口径有一处官方间接佐证：官方 2026 年 5 月版访客手册里 Café Rebay 写' +
          '「Open 10:30 am–4 pm」，与 10:30 开门相符。</strong>' +
          '<strong>【口径二，旧】周日至周三与周五 11:00–18:00、周六 11:00–20:00、每周四闭馆</strong>，' +
          '来源为若干旅游站与目录站。' +
          '<strong>guggenheim.org 本身是 JS 动态渲染页，2026-09-14 无法直接取到原文，' +
          '因此周四是否闭馆未能从官方渠道确认。</strong>' +
          '<strong>对本窗口的影响：10/15 与 10/22 是周四。若按口径二，这两天去不了。' +
          '打算周四去的话出发前必须电话确认 +1 212-423-3500；' +
          '更稳的做法是排在周日或周二下午，顺便拿到自定金额时段。</strong>' +
          '<strong>两种口径一致的部分：每周都开的自定金额时段是周日与周二 16:00–17:30</strong>' +
          '（这一条来自官方购票系统，可信度最高，也反过来说明周日与周二肯定营业）',
        parking: '<strong>不要开车。</strong>' +
          '地铁 <strong>4／5／6 线「86 St」步行约 8 分钟</strong>' +
          '（出站沿 86 街西行至第五大道再北行三个街区）；' +
          '<strong>Q 线「86 St」（第二大道）步行约 12 分钟</strong>。' +
          '公交 <strong>M1／M2／M3／M4 沿第五大道（南行）与麦迪逊大道（北行）在 88–89 街下车即达</strong>。' +
          '<strong>上东区路边表位日间基本没有空位，周边停车楼日间 $30–50</strong>',
        walk: '<strong>正门在 1071 Fifth Avenue，第五大道与 89 街交口（88 与 89 街之间）</strong>，' +
          '入口与出口分设、都在底层，进门即是中庭。' +
          '本区内步行距离（按 OSM 坐标<strong>推算</strong>）：' +
          '<strong>The Met 到本馆沿第五大道约 900 米 / 12 分钟</strong>' +
          '（全程直线，沿途就是 Museum Mile，右手边一直是中央公园）；' +
          '<strong>AMNH 到本馆需横穿公园约 1.6 公里 / 22 分钟。</strong>' +
          '本馆西侧隔第五大道就是中央公园，' +
          '<strong>出馆后穿过马路即可进入公园的 Conservatory Garden 与 Reservoir 一带</strong>'
      },
      notes: [
        '<strong>摄影政策：官方口径为「Still photography for non-commercial, personal use is permitted, ' +
          'unless otherwise noted in the galleries. The use of tripods and camera extension poles is prohibited.」</strong>' +
          '也就是<strong>手持非商业拍摄可以、三脚架与镜头伸缩杆（含自拍杆）禁止，' +
          '且部分临时展览会单独标注禁拍</strong>。' +
          '<strong>该表述系第三方引述本馆政策，未能在 guggenheim.org 原文复核</strong>' +
          '（官网为 JS 动态渲染页），到场请看展厅门口标识',
        '<strong>这一条是官方访客手册的原文，也是本馆最独特的一条规矩：' +
          '「Please do not hold phones, cameras, or other objects over the ramp wall.」' +
          '——不得把手机、相机或任何物件伸出坡道栏板之外。</strong>' +
          '原因很直接：底下是六层通高的中庭，掉下去会砸到人。' +
          '<strong>这意味着「从高层探身向下俯拍中庭」这个在网上很常见的构图是违规的</strong>，' +
          '请把镜头保持在栏板内侧',
        '<strong>其余官方明文规定：展厅内不得饮食；不得触摸作品；' +
          '「Backpacks must be worn in the front or carried by hand」——背包必须前背或手提。</strong>' +
          '<strong>大包与大型背包需在入口附近寄存，另有衣帽间；所有包会在入口接受检查。</strong>' +
          '<strong>器材精简到一机一镜是这里最省事的做法</strong>，' +
          '因为坡道很窄、且你要在前背状态下走完 400 米',
        '<strong>参观方向请务必坐电梯上顶层再往下走（Rotunda Elevator）。</strong>' +
          '这是 Wright 写进设计的动线，官方手册也明确说明；' +
          '<strong>3 度坡道下行比上行省力得多，而且从上往下看螺旋才是这栋楼的正确视角</strong>',
        '<strong>不要漏掉 Thannhauser Collection。</strong>' +
          '它在北侧 monitor 体量的上面三层，<strong>要坐另一部 Tower Elevator 过去，' +
          '从坡道上不容易注意到入口</strong>。' +
          '<strong>如果你是为了看画而来，这里的现代欧洲绘画才是全馆藏品价值最高的部分</strong>，' +
          '而整个中庭永远是临时展览',
        '<strong>藏品期待要放对：这是一座以 20 世纪现代与当代艺术为主的馆，' +
          '主中庭永远是临时个展，没有「常设名画墙」。</strong>' +
          '<strong>如果你想看古典大师，那是 The Met 的活；' +
          '如果你想看 20 世纪之后最全的一批，MoMA 更强。' +
          '本馆真正不可替代的是那栋楼</strong>',
        '<strong>营业日的不确定性请当成实际风险管理，不要赌。</strong>' +
          '窗口内 10/15 与 10/22 是周四，' +
          '<strong>两种口径中有一种说周四闭馆</strong>；' +
          '同时第三方给出的 2026 年例外日（11/10、11/26、12/25 闭馆等）都在本窗口之外。' +
          '<strong>出发前打 +1 212-423-3500 是唯一可靠的核实方式</strong>',
        '<strong>免费的官方数字导览在 Bloomberg Connects app 里（搜 Guggenheim），' +
          '含策展人讲解与专讲这栋 Wright 建筑的部分，进门前先装好</strong>；' +
          '馆内 Wi-Fi 为「Guggenheim Guest」。' +
          '<strong>Café Rebay（10:30–16:00）有朝中央公园的窗景</strong>，' +
          '是走完坡道后合理的收尾'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Main_Gallery_Interior_and_Skylight_Solomon_R_Guggenheim_Museum.jpg',
          cap: '中庭螺旋坡道与顶部玻璃穹顶 · EgorovaSvetlana / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Frank_Lloyd_Wright_-_New_York%2C_NY_-_Solomon_R._Guggenheim_Museum_%28A%29.jpg',
          cap: '第五大道上的倒金字塔外立面 · Bmzuckerman / CC BY 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Frank_Lloyd_Wright_-_New_York%2C_NY_-_Solomon_R._Guggenheim_Museum_%28I%29.jpg',
          cap: '坡道外墙的曲面与仅五英寸厚的 Gunite 外壳 · Bmzuckerman / CC BY 4.0' }
      ]
    }
  ]
};
