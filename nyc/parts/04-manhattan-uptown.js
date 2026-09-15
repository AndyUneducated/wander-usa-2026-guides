/* Manhattan Uptown：Museum Mile 与 Central Park。
   2026-09-13 新建的子地区——改版前手册以摄影为主，导致 The Met、AMNH、
   Guggenheim、Central Park 这几个「来纽约必去」的地方没有任何归属分区。 */
module.exports = {
  id: 'manhattan-uptown',
  name: 'Manhattan · Uptown 与 Museum Mile',
  navName: 'Uptown',
  color: '#4da3ff',
  lead: '这一区和 Midtown 的性质完全相反：<strong>Midtown 卖的是高度，这里卖的是时间。</strong>' +
    '本区的四个核心项目——Central Park、The Met、American Museum of Natural History、Guggenheim——' +
    '<strong>全部集中在 Fifth Avenue 与 Central Park West 之间那条 3 公里长的走廊上，彼此步行 10–20 分钟可达</strong>，' +
    '所以交通不是问题，<strong>问题是这四个地方合起来需要 12–16 小时，而本区的博物馆平日只开到 17:00，' +
    '一天的有效时间只有七小时——四项放不进一天，这是本区最硬的约束。</strong>' +
    '结论先给：<strong>Central Park 与 The Met 是本区不可省的两项</strong>（各 must 5），' +
    'AMNH 适合带孩子或本人对自然史有兴趣的人，' +
    'Guggenheim 的价值一半在建筑本身而不在藏品——<strong>Frank Lloyd Wright 那条螺旋坡道就是展品，走一遍 90 分钟。</strong>' +
    '<strong>本区的分数梯度往下还有一层，值得按兴趣取舍：</strong>' +
    'must 3.5 的 <strong>The Met Cloisters</strong>（曼哈顿最北端的中世纪分馆，往返加参观要 4–5 小时）、' +
    '<strong>Cathedral of Saint John the Divine</strong>（开工 134 年仍未完工的世界最大主教座堂）、' +
    '<strong>Harlem 与 Apollo Theater</strong>（街区型条目），' +
    'must 3 的 <strong>Columbia University 校园</strong>、<strong>Neue Galerie</strong>与 ' +
    '<strong>Riverside Church</strong>（北美最高教堂塔楼，$20 登塔看 360° 露天全景）。' +
    '<strong>票价上本区有一条全纽约最重要的规则：The Met（含 Cloisters）与 AMNH 对「纽约州居民」实行自定金额，' +
    '州外游客是固定票价，二者相差 $30–37</strong>（逐馆口径详见下方第一条提醒）。' +
    '<strong>闭馆日在本区不统一，排序时必须先看这一项：The Met 与 The Met Cloisters 周三闭馆、' +
    'Neue Galerie 周二闭馆、Studio Museum in Harlem 周一与周二闭馆，' +
    '而 Central Park、AMNH 与那座座堂每天开。</strong>' +
    '<strong>十月的两条季节性事实：一是这半个月气温多在 15–20°C、蚊虫已过季，' +
    '而人流比 11 月第一周「全城涌进公园」的密度松得多；' +
    '二是纽约市是全州变色最晚的一批，秋色盛期预测在 11 月 1–9 日，' +
    '十月中下旬的 Central Park 仍以绿色为主</strong>——想要满树金红的请把期待放到 11 月。' +
    '<strong>另有两项 2026 年的临时状态会明显改变体验：Bethesda Fountain 自 2026 年 8 月起停水围挡到 2027 年夏；' +
    'Neue Galerie 的展厅要到 2026 年 11 月 12 日才随 25 周年特展重开</strong>（咖啡馆与商店 10 月 1 日先开）。' +
    '<strong>以上均以 2026-09-14 的官方页面为准，出行前请复查。</strong>',
  callouts: [
    {
      type: 'warn',
      title: '「纽约州居民自定金额」：三馆口径逐条核实',
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
        '<p><strong>对州外与海外游客的实际意义：The Met 与 AMNH 的自定金额都用不上，' +
        '预算请按 The Met $30 + AMNH $37 计。' +
        '唯一能省的是 Guggenheim——把它排在周日或周二下午 16:00 进场，$30 的票按 $1–10 付，' +
        '这是本区唯一对所有人成立的官方折扣，不限居住地。</strong></p>' +
        '<p><strong>还有两项与居住地无关的免费或减免通道，同样值得知道：' +
        'Neue Galerie 在部分周五 17:00–20:00 免费（First Fridays，先到先入），' +
        '并对 SNAP／EBT 持卡人本人加三位同行者免费；' +
        'Studio Museum in Harlem 每周日（Studio Sundays）对所有人免费，' +
        '其余日为建议金额制（成人建议 $16）。</strong></p>'
    },
    {
      type: 'warn',
      title: '本区按星期排，不按顺路排：闭馆日与施工一览',
      html: '<p><strong>本区九个条目的闭馆日彼此错开，而且没有哪一天是全部开门的。' +
        '先定星期、再定路线，顺序反了必然有一项白跑。以下核实日期 2026-09-14。</strong></p>' +
        '<ul>' +
        '<li><strong>周一：Studio Museum in Harlem 闭馆</strong>（周一与周二均闭）。' +
        'The Met、Cloisters、Neue Galerie、Guggenheim、Central Park、AMNH、座堂、Columbia 正常</li>' +
        '<li><strong>周二：Neue Galerie 闭馆、Studio Museum in Harlem 闭馆。</strong>' +
        '<strong>这一天 Museum Mile 上稳开的大馆只有 The Met</strong>；' +
        '同时这一天下午 16:00–17:30 是 Guggenheim 的自定金额时段</li>' +
        '<li><strong>周三：The Met Fifth Avenue 与 The Met Cloisters 同日闭馆。</strong>' +
        '<strong>两馆星期完全重叠，不能用「一馆关门就去另一馆」互补，这是本区最容易踩的一条。</strong>' +
        '周三可去的是 Guggenheim、Studio Museum、座堂、Neue Galerie 与公园；' +
        'Apollo 的导览周三有 11:00 与 13:00 两场</li>' +
        '<li><strong>周五与周六：The Met Fifth Avenue 开到 21:00（其余日 17:00）。</strong>' +
        '<strong>这是本区唯一的晚间大馆时段，也是全周人最少的时段</strong>，' +
        '把 The Met 排在这两天的收益最大</li>' +
        '<li><strong>周日：Studio Museum in Harlem 全场免费（Studio Sundays）；' +
        'Guggenheim 下午 16:00–17:30 为自定金额时段；座堂 12:00 才开（其余日 09:30）。</strong>' +
        '想听 Harlem 的 gospel 也只有周日，且 09:30 前就要到场排队</li>' +
        '<li><strong>The Met Cloisters 的时间口径已经核实清楚，这里给出结论：' +
        '官方为 Thursday–Tuesday 10 am–5 pm、Closed Wednesday；' +
        '而 The Met 官方团体参观页的注脚写「The Met Cloisters closes at 4:30 pm November–February」。</strong>' +
        '<strong>也就是说第三方页面上那个「16:30 关门」的说法是冬季口径，不是全年口径——' +
        '3 月至 10 月按 17:00、11 月至次年 2 月按 16:30。</strong>' +
        '闭馆日只有周三这一天</li>' +
        '<li><strong>AMNH 与 Central Park 每天开</strong>' +
        '（AMNH 官方原文「Open daily, 10 am–5:30 pm」，只在 Thanksgiving 与 12/25 闭馆；' +
        '公园每日 06:00–01:00、全年 365 天）。' +
        '<strong>Cathedral of Saint John the Divine 也无固定闭馆日</strong>' +
        '（周一至周六 09:30–17:00、周日 12:00–17:00），' +
        '<strong>是本区唯一周二与周三都开的大型室内项目</strong></li>' +
        '<li><strong>Guggenheim 的营业日存在官方与第三方的直接矛盾，这是本区最需要自行复核的一项。</strong>' +
        '一派口径是「每日 10:30–17:30、全周无休」（多个票务与目录站，并称馆方自家订票系统里到 2027 年 3 月都是这个时间）；' +
        '另一派仍写「每周四闭馆、11:00–18:00、周六到 20:00」（旧口径）。' +
        '<strong>guggenheim.org 本身是 JS 动态渲染，2026-09-14 无法直接取到原文，未能定案。</strong>' +
        '<strong>打算周四去 Guggenheim 的，出发前务必打 +1 212-423-3500 确认，否则有白跑的风险</strong></li>' +
        '<li><strong>施工与临时关闭（2026 年）：</strong>' +
        '<strong>①&nbsp;Bethesda Fountain 自 2026 年 8 月起停水、围挡，预计 2027 年夏完工</strong>——' +
        'Bethesda Terrace 与地下 Arcade 全程照常开放，只有喷泉本体被围起来且没有水；' +
        '同一笔 $3,700 万工程还包括 <strong>Conservatory Water（模型船池）的整体重建，官方说「late 2026」开工</strong>，' +
        '<strong>具体围挡起始日未能从官方渠道确认</strong>。' +
        '<strong>②&nbsp;Neue Galerie 分两步重开：咖啡馆与商店 2026 年 10 月 1 日、' +
        '二三楼展厅 2026 年 11 月 12 日</strong>——' +
        '<strong>10 月来看不到 Klimt。</strong>' +
        '<strong>③&nbsp;Apollo 的历史剧院整修中，官方称预计 2026 年底重开</strong>，' +
        '期间演出移到街对面 199 座的 The Apollo Stages at The Victoria</li>' +
        '</ul>'
    },
    {
      type: 'tip',
      title: '本区的时间账：核心四项放不进一天',
      html: '<p><strong>把官方与合理推算的时长加起来：Central Park 主线 2.5–3.5 小时、The Met 3–4 小时（走马观花 2 小时）、' +
        'AMNH 3–4 小时、Guggenheim 1.5–2 小时。合计 10–13 小时，加上馆间步行与排队就是 12–16 小时。</strong>' +
        '而本区的博物馆平日只开到 17:00，<strong>一天的有效时间只有七小时</strong>。' +
        '<strong>结论：核心四项至少要两天；只有一天的话必须砍掉两项。</strong></p>' +
        '<p><strong>两种成立的分法：</strong></p>' +
        '<ul>' +
        '<li><strong>两天版。</strong>' +
        '第一天做公园东侧：上午 Central Park 南段主线（Grand Army Plaza 北行到 Conservatory Water），' +
        '中午在公园里吃，<strong>下午从 Conservatory Water 往北 660 米直接进 The Met</strong>；' +
        '<strong>这一天挑周五或周六，The Met 开到 21:00，能在里面待满五小时且后半段几乎没人。</strong>' +
        '第二天做公园西侧与 Museum Mile 上段：上午 AMNH，下午沿 Fifth Avenue 走到 Guggenheim' +
        '（<strong>若为周日或周二，压到 16:00 进场用自定金额时段</strong>）</li>' +
        '<li><strong>一天版。</strong>' +
        '<strong>放弃 AMNH，Central Park 压到 90 分钟</strong>：' +
        '开园后从 Grand Army Plaza 进园 → The Mall → Bethesda Terrace 与地下 Arcade → Conservatory Water → ' +
        '开门时段进 The Met（照 Met 条目里的三小时路线走）→ 步行 12 分钟到 Guggenheim 走螺旋坡道。' +
        '<strong>这一天不要再加任何项目，本区的步行距离比多数人预想的更耗体力</strong></li>' +
        '</ul>' +
        '<p><strong>把 must 3–3.5 的那几项加进来时，请按「另开半天」算，不要塞进上面两种分法：</strong>' +
        '<strong>The Met Cloisters 往返加参观 4–5 小时（在曼哈顿最北端，距本馆 8 公里）；' +
        'Cathedral of Saint John the Divine 与 Columbia 校园可合成一个下午（两者步行 10 分钟）；' +
        'Harlem 的 125 街步行线 1.5–2 小时；Neue Galerie 展厅 60–90 分钟，' +
        '但 Café Sabarsky 的排队要另算 30–40 分钟。</strong></p>' +
        '<p><strong>本区的实际步行距离（按 OSM 坐标推算）：</strong>' +
        'The Met（82 街）→ Neue Galerie（86 街）<strong>约 400 米 / 5 分钟</strong>；' +
        'Neue Galerie → Guggenheim（89 街）<strong>约 300 米 / 4 分钟</strong>；' +
        'The Met → Guggenheim 沿 Fifth Avenue <strong>约 900 米 / 12 分钟</strong>；' +
        'The Met → AMNH 需横穿公园 <strong>约 1.1 公里 / 15–20 分钟</strong>' +
        '（走 79 街横穿道，不要指望有直达地铁——这两馆分属公园东西两侧的不同线路）；' +
        'Cathedral of Saint John the Divine（112 街）→ Columbia 主门（116 街）<strong>约 800 米 / 10 分钟</strong>；' +
        'Columbia → Harlem 的 125 街 <strong>1 号线北行两站</strong>。</p>'
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
        { url: 'img/bethesda-terrace-and-432-park-avenue-from-the-lake-central-p-6590a69b.jpg',
          cap: '自湖上望 Bethesda Terrace 与远处 432 Park Avenue · Christian David / CC BY-SA 4.0' },
        { url: 'img/bow-bridge-over-the-lake-central-park-manhattan-new-york-009381f4.jpg',
          cap: 'Bow Bridge 跨湖的弓形铸铁桥身 · Christian David / CC BY-SA 4.0' },
        { url: 'img/the-mall-literary-walk-central-park-manhattan-nyc-9692c491.jpg',
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
        { url: 'img/temple-of-dendur-egyptian-collection-metropolitan-museum-of--cbcf77dc.jpg',
          cap: 'Temple of Dendur 与 Sackler Wing 的斜玻璃幕墙 · TheCatalyst31 / CC BY-SA 4.0' },
        { url: 'img/metropolitan-museum-of-art-great-hall-october-2025-1812ae00.jpg',
          cap: 'Great Hall 的罗马式穹顶与大楼梯 · TheCatalyst31 / CC BY-SA 4.0' },
        { url: 'img/metropolitan-museum-of-art-entrance-nyc-16e22086.jpg',
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
        { url: 'img/central-atrium-of-the-richard-gilder-center-for-science-educ-7235ef1e.jpg',
          cap: 'Gilder Center 的 Exploration Atrium 喷射混凝土中庭 · Zeete / CC BY-SA 4.0' },
        { url: 'img/blue-whale-nat-l-hist-museum-bdd21dc6.jpg',
          cap: 'Milstein Hall of Ocean Life 的 94 英尺蓝鲸模型 · Breakyunit / CC BY-SA 3.0' },
        { url: 'img/amnhtitanosaur-cdfa5265.jpg',
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
        { url: 'img/main-gallery-interior-and-skylight-solomon-r-guggenheim-muse-6dcef73c.jpg',
          cap: '中庭螺旋坡道与顶部玻璃穹顶 · EgorovaSvetlana / CC BY-SA 4.0' },
        { url: 'img/frank-lloyd-wright-new-york-ny-solomon-r-guggenheim-museum-a-cdf4369c.jpg',
          cap: '第五大道上的倒金字塔外立面 · Bmzuckerman / CC BY 4.0' },
        { url: 'img/frank-lloyd-wright-new-york-ny-solomon-r-guggenheim-museum-i-5646b261.jpg',
          cap: '坡道外墙的曲面与仅五英寸厚的 Gunite 外壳 · Bmzuckerman / CC BY 4.0' }
      ]
    },
    {
      id: 'met-cloisters',
      n: 5,
      name: '修道院博物馆',
      en: 'The Met Cloisters',
      must: 3.5,
      score: 4,
      tldr: '曼哈顿最北端山崖上的中世纪分馆，藏 Unicorn Tapestries。周三闭馆；Met 门票只管当天两馆通用。',
      tags: [
        { t: '$30（与本馆同票）', c: 'paid' },
        { t: '周三闭馆', c: 'risk' },
        { t: '只当天通用', c: 'risk' },
        { t: '免费停车', c: 'free' }
      ],
      highlights: [
        '<strong>这是全美唯一一座专门只做中世纪欧洲艺术的博物馆</strong>，' +
          '1938 年 5 月 10 日开馆，约 <strong>5,000 件藏品</strong>，重心在 <strong>12–15 世纪</strong>。' +
          '<strong>整栋楼不是一座真的修道院，而是一栋 1930 年代的新建筑，' +
          '把五处法国修道院回廊的原石构件拆运过来重新砌进去</strong>：' +
          'Saint-Michel-de-Cuxa、Saint-Guilhem-le-Désert、Bonnefont-en-Comminges、' +
          'Trie-sur-Baïse、Froville。' +
          '建筑师 <strong>Charles Collens</strong>——同一个人设计了本区的 Riverside Church。' +
          '雕塑家 <strong>George Grey Barnard</strong> 二十世纪初在法国乡下收购这些被当废石卖掉的回廊柱头，' +
          '1914 年在附近自办了一间小博物馆，<strong>1925 年 John D. Rockefeller Jr. 花约 60 万美元买下他的全部收藏捐给 The Met</strong>',
        '<strong>最反直觉的一条：对面那片新泽西山崖之所以至今没有房子，是因为 Rockefeller 把它买下来了。</strong>' +
          '他捐地建馆时同时买下 <strong>哈德逊河对岸 Palisades 约 700 英亩</strong>并转赠新泽西州，' +
          '目的只有一个——<strong>保证从修道院窗口往西看出去永远是林崖而不是公寓楼</strong>。' +
          '这是美国历史上少见的「为了一个博物馆的视野而买下另一个州的一整条山脊」',
        '<strong>Unicorn Tapestries（The Hunt of the Unicorn）是本馆的绝对核心，' +
          '七幅一组，约 1495–1505 年南尼德兰织造</strong>，' +
          '羊毛经线配羊毛、丝、银线与金银包丝纬线。' +
          '<strong>Rockefeller 1922 年从法国 La Rochefoucauld 家族手中买下，1937 年捐给 The Met</strong>。' +
          '<strong>一个具体的细节值得站近看：其中多幅的织纹里反复出现字母组合「A」与倒写的「E」，' +
          '至今没人能确定它指的是哪一对订制者</strong>。' +
          '另有一组更早的 <strong>Nine Heroes Tapestries（约 1400 年）</strong>，' +
          '是现存最古老的一批世俗题材大型挂毯之一',
        '<strong>Fuentidueña Chapel 是进门后第一个会让人愣住的空间：' +
          '一整座 12 世纪西班牙罗马式教堂后殿，约 3,300 块石头逐块编号拆运重砌。</strong>' +
          '<strong>它在法律上并不属于 The Met——这是与西班牙政府之间的长期互借</strong>' +
          '（西班牙出借这座后殿，The Met 出借六幅 San Baudelio 壁画），' +
          '协议 1957 年达成、1961 年装好',
        '<strong>三座真正种着植物的园子，是本馆区别于一般博物馆的地方，也是它秋天仍然好看的原因。</strong>' +
          'Cuxa Cloister 的中庭园（粉色 Languedoc 大理石柱廊）、' +
          '<strong>Bonnefont Cloister 的药草园种着 250 余种中世纪文献里实际记载过的植物</strong>，' +
          '以及 Trie Cloister 园。' +
          '绘画方面最重要的一件是 <strong>Robert Campin 的 Mérode Altarpiece（约 1427–1432 年）</strong>，' +
          '把《天使报喜》搬进了一间尼德兰市民家的起居室'
      ],
      tour: [
        '<strong>先把最容易犯的错说清楚：这里不是 The Met 本馆的一个展厅，而是在曼哈顿最北端、' +
          '距本馆 8 公里的独立馆区，单程地铁 35–45 分钟。</strong>' +
          '<strong>而 2026 年的门票规则是「同一张票只管当天两馆通用」</strong>' +
          '（详见 access.ticket，这一条近年改过），' +
          '<strong>所以想用一张票把两馆都看完，必须同一天做，并且这一天会非常赶——' +
          '合理的做法是把本馆排在上午、修道院排在下午，或者干脆分两天各买一张票</strong>',
        '<strong>逛法：这馆不大，一层一圈、地下一圈，按「进门先左转」的顺时针顺序一遍走完就行，不需要攻略。</strong>' +
          '主厅（Main Hall）出来先进 <strong>Fuentidueña Chapel</strong>，' +
          '再沿 <strong>Saint-Guilhem Cloister → Cuxa Cloister（中庭，全馆的中心）→ ' +
          'Early Gothic Hall → Unicorn Tapestries Room（Gallery 17）</strong> 走，' +
          '然后下到地下层看 <strong>Treasury（珍宝室）</strong>、' +
          '<strong>Bonnefont 与 Trie 两座园子（地下层向外开门，是室外露台，能看到哈德逊河）</strong>。' +
          '<strong>不能错过的四件：Unicorn Tapestries、Fuentidueña 后殿、Mérode Altarpiece、' +
          'Treasury 里的 Belles Heures of Jean de France, Duc de Berry（Limbourg 兄弟 1405–1408 年绘的时祷书）</strong>',
        '<strong>可以跳过的：一层若干只放建筑构件的小过厅（柱头、门楣、洗礼盆）</strong>——' +
          '这些东西量大、标签学术、对没有中世纪艺术背景的人回报很低。' +
          '<strong>省下的时间给两处：一是 Cuxa 中庭坐十分钟，二是出馆后的 Fort Tryon Park。</strong>' +
          '<strong>公园本身值得单独留 30–45 分钟</strong>：' +
          'Frederick Law Olmsted Jr. 设计，<strong>Heather Garden 是纽约市最大的公共石楠园</strong>，' +
          '崖顶平台正对哈德逊河与对岸 Palisades（就是上面说的那片被买下来的山崖）。' +
          '<strong>十月中下旬这一带的变色比中央公园早、也更明显，' +
          '因为地势高、树种以栎树与枫树为主</strong>',
        '<strong>排队与安检：这是 The Met 系统里最不用排队的一个点。</strong>' +
          '入口在内院（Postern 进去后的 courtyard），' +
          '<strong>包检有但队伍通常是个位数，工作日上午 10:00 开门时往往门口只有十几个人</strong>。' +
          '<strong>人最少的是周四与周五上午 10:00–11:30</strong>；' +
          '周末下午是本地家庭与散步人群的高峰，Unicorn Tapestries 那间屋子会挤到要等位。' +
          '<strong>回程注意：A 线周末常有轨道施工与跳站，出发前查 MTA</strong>，' +
          '官方页面自己也挂着这条提醒',
        '<strong>餐饮与卫生间：这是本条最实际的约束——馆内没有正式餐厅。</strong>' +
          '<strong>只有 Trie Cloister 一侧的 Trie Café（季节性营业，供应咖啡、三明治一类轻食），' +
          '规模很小、冬季常关</strong>；' +
          '<strong>馆外最近的成规模餐饮要下山到 Dyckman Street 或 Broadway 一带，步行 15–20 分钟</strong>。' +
          '合理做法是进馆前在地铁站附近买好东西，或者把这一站压在午饭之后。' +
          '<strong>卫生间在主厅与地下层各有，干净且不排队。</strong>' +
          '公园里另有公厕，但开放时间不稳定',
        '<strong>额外一句，关于「值不值得专程」：如果只有三四天在纽约，这一站排不进去也不必遗憾。</strong>' +
          '<strong>但如果对中世纪艺术、建筑或安静的园子有兴趣，这是全纽约气质最特殊的一座博物馆</strong>——' +
          '它和 The Met 本馆的拥挤程度、噪音、人群密度完全是两个世界。' +
          '<strong>往返交通加参观要算 4–5 小时，这是决定要不要去的真正门槛，不是门票</strong>'
      ],
      photo: '建筑与庭园 <strong>4.5/5</strong>，室内展品 <strong>3/5</strong>，风光 <strong>4/5</strong>。' +
        '回廊拱券与药草园在侧光下极好，加分项是人少、不必抢机位；扣分是室内光线暗且禁三脚架。',
      shots: [
        {
          name: 'Cuxa Cloister 中庭回廊',
          desc: '<strong>开门后 10:00–11:00 是唯一能拍到空廊的时段。</strong>' +
            '站在粉色 Languedoc 大理石柱廊的一角，' +
            '<strong>24–35mm 沿柱列方向斜拍，让重复的双柱与柱头雕刻形成透视纵深</strong>；' +
            '中庭是露天的，<strong>上午侧光会在拱下投出整排柱影，这是这里最好的光</strong>。' +
            '<strong>馆内全程禁止三脚架与自拍杆</strong>，手持即可，室内段 ISO 1600–3200。' +
            '坐标为 OSM The Met Cloisters 建筑节点（中庭无独立实体节点）。',
          view: [40.864868, -73.931923]
        }
      ],
      access: {
        visit: '<strong>1.5–2.5 小时看馆，另加 30–45 分钟走 Fort Tryon Park 与 Heather Garden；' +
          '算上往返地铁，从中城出发这一站要占掉 4–5 小时。</strong>' +
          '分配（<strong>按展厅规模与藏品数量推算，The Met 官方未给建议时长</strong>）：' +
          'Fuentidueña Chapel 与一层各回廊 40 分钟、' +
          '<strong>Unicorn Tapestries Room 20–25 分钟（本馆唯一值得站久的一间）</strong>、' +
          'Treasury 与地下层 25 分钟、Bonnefont 与 Trie 两园 20 分钟。' +
          '<strong>只看重点 60 分钟</strong>：Fuentidueña → Cuxa 中庭 → Unicorn Tapestries → Treasury，' +
          '其余一层过厅一律快走',
        book: '<strong>不需预约，但建议先在 metmuseum.org 买好定时票</strong>——' +
          '不是为了抢位（这里基本不满），而是门口现场购票窗口只有一两个，' +
          '<strong>而且买票时要选好日期，这张票同时也是本馆的票</strong>。' +
          'Met 会员与 Patron 免票直入。' +
          '<strong>10 人以上团体须提前联系团体部门</strong>；' +
          '官方导览（Guided visits）在 <strong>周四至周二 11:00–15:00</strong> 时段内安排，需另约',
        ticket: '<strong>核实日期 2026-09-14，metmuseum.org 官方票价页与 The Met Cloisters 页口径一致：' +
          '成人 $30、老年（65 岁及以上）$22、学生 $17、残障访客 $22、' +
          '12 岁及以下儿童免费、会员与 Patron 免费、残障访客的陪同者免费（仅现场办理）。</strong>' +
          '<strong>纽约州居民与 NY／NJ／CT 三州在读学生为自定金额（每张票最低 $00.01）</strong>，' +
          '网上买自定金额票需纽约州账单地址，NJ／CT 学生只能现场凭学生证买。' +
          '<strong>【通票规则，这是本条最需要注意的一项】' +
          '官方票价页 2026 年当前原文为「All tickets include exhibitions and same-day entry to ' +
          'both Met locations for the date on your ticket.」——' +
          '即一张票含特展，并且覆盖 The Met Fifth Avenue 与 The Met Cloisters 两馆，' +
          '但仅限票面当天。</strong>' +
          '<strong>与此并存的是 2018 年 1 月 4 日 The Met 新闻稿与官方说明文的旧口径：' +
          '「All full-priced admissions tickets will be honored for three consecutive days ' +
          "at The Met's three locations」（三个连续日、三处馆区）。" +
          '两种口径都列在这里：旧口径已不出现在 2026 年的购票页上，' +
          '而 Met 的《Ticketing and Admission Policies》页写' +
          '「A valid admission ticket includes the date and location of the visit... ' +
          'shall become invalid upon the expiration of the time or period stated on the ticket」，' +
          '也就是以票面标注为准。<strong>请按「只管当天」做计划，' +
          '若确实想分两天用一张票，出行前打 +1 212-535-7710 确认</strong></strong>',
        hours: '<strong>核实日期 2026-09-14。metmuseum.org 的 The Met Cloisters 页与多家目录站口径一致：' +
          '<strong>Thursday–Tuesday 10 am–5 pm，Closed Wednesday</strong>。</strong>' +
          '<strong>另有一条季节性调整，来自 The Met 官方团体参观页的注脚原文' +
          '「The Met Cloisters closes at 4:30 pm November–February」——' +
          '即 11 月至次年 2 月提前到 16:30 关门。' +
          '这条正好解释了为什么不少第三方页面把本馆写成「16:30 关门」：' +
          '那是冬季口径，不是全年口径。</strong>' +
          '<strong>十月适用的是 10:00–17:00。周三闭馆这一点与本馆相同，' +
          '所以本馆与修道院无法用「一馆闭馆日去另一馆」互补</strong>。' +
          '<strong>Trie Café 为季节性营业、时间不固定，未能从官方渠道确认十月的具体营业时段</strong>，' +
          '可打 +1 212-923-3700 问当天情况',
        parking: '<strong>官方页面原文「Free public parking is available in Fort Tryon Park around ' +
          'The Met Cloisters」——公园内围绕馆区有免费公共停车，这在曼哈顿极为罕见</strong>，' +
          '但车位数量有限，周末上午容易满。' +
          '<strong>自驾者可直接开到内院的无台阶入口下客。</strong>' +
          '不自驾则完全不必考虑停车，地铁直达',
        walk: '<strong>标准走法：A 线到 190 Street 站，出站必须坐电梯（站台在地下约 43 米，' +
          '这是纽约地铁最深的车站之一，没有扶梯直通地面），' +
          '出地面后沿 Margaret Corbin Drive 向北穿 Fort Tryon Park 步行约 10 分钟。</strong>' +
          '<strong>不想走的可以在地铁站门口换 M4 公交向北坐一站到 ' +
          '「Margaret Corbin Dr/Cloisters」，车站就在馆门口。</strong>' +
          '<strong>需要全程无障碍的走法（官方口径）：A 线到 181 Street 站，坐电梯出站，' +
          '换 M4 向北坐 7 站到 Margaret Corbin Dr/Cloisters。</strong>' +
          '<strong>官方页面另挂一条提醒：周末 A 线常有轨道维护与线路封闭，出发前查 MTA。</strong>' +
          '从 The Met 本馆过来：4／5／6 线 86 街站 → 换 A 线（需经 125 街或中城换乘），' +
          '<strong>实际 35–45 分钟，不是十几分钟能到的距离</strong>'
      },
      notes: [
        '<strong>周三闭馆，与 The Met 本馆同一天闭馆。</strong>' +
          '这意味着两馆在星期上完全重叠，安排时不要指望「本馆关门就去修道院」',
        '<strong>三脚架、镜头伸缩杆与自拍杆禁止，手持非商业拍摄允许（与 The Met 本馆同一套政策）。</strong>' +
          '<strong>Unicorn Tapestries Room 的照度刻意压得很低（挂毯的天然染料怕光），' +
          '室内段基本要 ISO 1600 以上，且禁止闪光灯</strong>',
        '<strong>这是一栋 1930 年代仿中世纪建筑，台阶、坡道、石板地面多，' +
          '官方明确说「Accessibility... is somewhat limited for wheelchair users」。</strong>' +
          '需要无台阶通行的可用<strong>免费接驳车，上车点在 Postern 入口附近，' +
          '送到内院的无障碍入口</strong>',
        '<strong>两座园子（Bonnefont、Trie）是露天的，下雨或大风会关</strong>，' +
          '而它们恰好是本馆最值得看的部分之一——' +
          '<strong>雨天来这里的回报会明显打折，可换到天气好的一天</strong>',
        '<strong>Fort Tryon Park 是 1776 年 Fort Washington 战役的战场遗址</strong>，' +
          '公园名来自当时的英军据点；' +
          'Margaret Corbin Drive 纪念的 <strong>Margaret Corbin 是美国历史上第一位领到军人抚恤金的女性</strong>' +
          '——她在丈夫阵亡后接手他的火炮继续作战。' +
          '<strong>公园白天治安正常，但入夜后崖边小径没有照明，不要天黑后在园内穿行</strong>',
        '<strong>免费官方数字导览在 Bloomberg Connects app 里（The Met 频道内含 Cloisters 专门内容），' +
          '进馆前先下载</strong>；馆内手机信号在石墙建筑里时有时无'
      ],
      images: [
        { url: 'img/the-met-cloisters-ny-17-f3ab36ad.jpg',
          cap: '回廊与中庭园 · Polka0505 / CC BY-SA 4.0' },
        { url: 'img/the-cloisters-hudson-river-crop-708d55de.jpg',
          cap: '从哈德逊河方向看 Fort Tryon 崖顶上的馆体 · Paweł Drozd，Beyond My Ken 裁切 / CC BY-SA 3.0' },
        { url: 'img/the-unicorn-surrenders-to-a-maiden-the-unicorn-tapestries-so-db54a6f7.jpg',
          cap: 'Unicorn Tapestries 之《独角兽向少女屈服》 · EgorovaSvetlana / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'st-john-the-divine',
      n: 6,
      name: '圣约翰神明座堂',
      en: 'Cathedral Church of Saint John the Divine',
      must: 3.5,
      score: 4,
      tldr: '全长 601 英尺、世界最大主教座堂，开工 134 年至今未完工。观光票 $15；登塔导览 $20，只在个别周六。',
      tags: [
        { t: '观光 $15', c: 'paid' },
        { t: '祈祷免费入内', c: 'free' },
        { t: '登塔需抢场次', c: 'risk' },
        { t: '周一至周五院子关闭', c: 'risk' }
      ],
      highlights: [
        '<strong>全长 601 英尺（183 米），官方与自身页面均称「the largest cathedral in the world」' +
          '（按建筑面积计，约 121,000 平方英尺）。</strong>' +
          '<strong>1892 年 12 月 27 日奠基，到 2026 年已经开工 134 年，至今没有完工——' +
          '本地人叫它「St. John the Unfinished」，而这不是玩笑，是它真实的建筑状态。</strong>' +
          '官方 FAQ 自己的回答很坦白：' +
          '「Like the great Medieval cathedrals... St. John the Divine will continue to be ' +
          'constructed over many centuries. Currently, funding is directed to prioritize ' +
          'serving the community through our programming and social initiatives」——' +
          '<strong>也就是钱现在优先花在社区项目和维护上，不在建造上</strong>',
        '<strong>「未完工」具体是哪几处，到场能亲眼看出来，这是本条最值得知道的事：</strong>' +
          '<strong>①&nbsp;南耳堂（south transept）完全不存在</strong>，北耳堂<strong>只建了一半</strong>；' +
          '<strong>②&nbsp;中殿交叉部（the Crossing）头顶那座穹顶本来是临时的</strong>——' +
          '西班牙建筑师 <strong>Rafael Guastavino 1909 年 5 至 8 月只用 15 周砌成的陶砖薄壳穹顶</strong>，' +
          '原计划等耳堂建好后拆掉换成正式的塔楼与尖顶，' +
          '<strong>结果这座「临时屋顶」用到今天已经 117 年，还成了世界上最大的自承重穹顶之一</strong>' +
          '（官方描述：底下能塞进一整座自由女神像；壳体顶部仅 4 英寸厚、底部 7.5 英寸）；' +
          '<strong>③&nbsp;西立面的南塔（St. Paul Tower）只砌到约设计高度的三分之二，' +
          '官方自己的说法是「停在了半句话上（stopped "in mid-sentence"）」</strong>',
        '<strong>为什么停了：两次中断的时间点都非常具体。</strong>' +
          '<strong>1941 年 11 月 30 日全长落成祝圣，一周之后珍珠港事件爆发，美国参战，工程当场停止。</strong>' +
          '此后 1969 年 Donegan 主教明确宣布任内不再动工；' +
          '<strong>1978 年 Morton 院长宣布复工，1979 年开设自己的石作场（Stoneyard），' +
          '招募本地青年做石匠学徒、由英国石匠师傅带教</strong>' +
          '（因为美国本土已经找不到会砌大教堂的石匠大师）。' +
          '<strong>1982 年，走钢丝的 Philippe Petit 从 Amsterdam Avenue 对面走钢索到西立面，' +
          '作为南塔工程的开工仪式</strong>。' +
          '<strong>到 1992–1993 年建造预算耗尽，石作场关闭，南塔又长高了约 50 英尺就再没动过</strong>，' +
          '部分脚手架在上面锈了十五年',
        '<strong>建筑风格在中途换过一次，这是它外观显得「不太统一」的原因。</strong>' +
          '1891 年设计竞赛由 <strong>Heins &amp; LaFarge</strong> 以罗马式–拜占庭方案获胜；' +
          '<strong>George Heins 1907 年去世后合约作废，1911 年 Ralph Adams Cram 接手，改成法国哥特式。</strong>' +
          '<strong>所以高坛（chancel）周围那八根整料花岗岩巨柱与筒形拱顶是原来的罗马式设计，' +
          '而中殿与西立面是哥特式的</strong>——站在交叉部往东西两头各看一眼，就能看出两套语言的接缝。' +
          '<strong>西立面的 Rose Window 直径 40 英尺、约 10,000 片玻璃，是全美最大的彩绘玻璃玫瑰窗</strong>',
        '<strong>2001 年 12 月 18 日的一场大火烧掉了礼品店、烧坏了北耳堂与两幅 17 世纪 Barberini 挂毯，' +
          '整座座堂关闭做全面清洗，2008 年 11 月才重新开放。</strong>' +
          '<strong>Guastavino 穹顶又在 2019–2022 年做了一笔约 1,700 万美元的三年大修</strong>' +
          '（修补砖壳裂缝、加了新的铜屋面）。' +
          '也就是说<strong>现在看到的室内是 2008 年之后清洗过的状态，比老照片上干净得多</strong>'
      ],
      tour: [
        '<strong>先决定去哪一种：这座堂有三种完全不同的进法，价格与体验差很远。</strong>' +
          '<strong>①&nbsp;自助观光（$15）</strong>——自己进去走一圈，看中殿、交叉部、七座 Chapels of the Tongues 与 Rose Window；' +
          '<strong>②&nbsp;Highlights Tour（$16／学生老年 $14，每天 13:00 一场、约 1 小时）</strong>，' +
          '有讲解员从 Great Bronze Doors 讲到七座小圣堂，' +
          '<strong>对这种「半成品」建筑来说，讲解的价值明显高于自己看</strong>；' +
          '<strong>③&nbsp;Vertical Tour（$20／$18）</strong>——本条最值得排的一项，' +
          '<strong>沿旋转楼梯往上爬超过 124 英尺、走到飞扶壁上、最后登屋顶看曼哈顿</strong>，' +
          '<strong>但只在个别周六开一场，必须提前抢</strong>（详见 access.book）',
        '<strong>自己逛的顺序与不能错过的几件：</strong>' +
          '从 Amsterdam Avenue 的 <strong>Great Bronze Doors</strong> 进去（门上浮雕是新旧约场景），' +
          '<strong>先沿中殿走到底站在交叉部正中抬头看 Guastavino 穹顶——这是全堂第一位的一件东西</strong>，' +
          '也是能看懂「这座堂为什么没完工」的唯一位置：' +
          '<strong>头顶就是那个用了 117 年的临时屋顶，左右两侧本该是耳堂的地方一边是墙、一边只有半个</strong>。' +
          '然后回头看西端的 <strong>Rose Window</strong>（从堂内往西看才是正面），' +
          '再走侧廊尽头的 <strong>七座 Chapels of the Tongues</strong>' +
          '（分别献给不同移民族群，这个设置在全世界的主教座堂里很少见）。' +
          '<strong>另外两件容易漏掉的：Poets\' Corner（美国作家纪念地砖）' +
          '与 Keith Haring 的三联作《The Life of Christ》——那是他 1990 年去世前完成的最后一件作品</strong>',
        '<strong>可以跳过的：侧廊上大量的纪念碑铭与近年的装置艺术展。</strong>' +
          '这座堂常年在中殿里放当代艺术装置（2026 年秋季的排期见官网 press release），' +
          '<strong>喜欢就看，不喜欢完全可以直接走过——它们不是这座建筑的主体</strong>。' +
          '<strong>省下的时间强烈建议用在两处：一是交叉部多站十分钟，二是如果日期对得上就去登塔。</strong>' +
          '<strong>登塔是全纽约少见的「爬进一座哥特式建筑的骨架内部」的机会</strong>，' +
          '比在中殿里走一圈的信息量大得多',
        '<strong>排队、安检与院子：这里几乎不排队，但院子的开放时间是个坑。</strong>' +
          '<strong>官方页面原文：「Please note that the Cathedral grounds are closed Monday – Friday ' +
          'to ensure a safe environment for students at the Cathedral School and ACT Programs.」' +
          '——周一至周五院子（close）关闭，因为里面有学校。</strong>' +
          '<strong>这意味着 Greg Wyatt 1985 年的 Peace Fountain 与院里常年放养的几只孔雀，' +
          '工作日看不到，只有周末能进院子</strong>。' +
          '想同时看堂内与院子，<strong>请排周六（堂内 09:30–17:00，院子开）</strong>；' +
          '周日堂内 12:00 才开，上午是礼拜时间',
        '<strong>如果碰上礼拜：任何人都可以免费进来祈祷或静坐（官方原文' +
          '「All those who are seeking a place for prayer or meditation will be welcomed without charge」），' +
          '但这时进去要按礼仪规矩来。</strong>' +
          '<strong>做法：进门后在后排入座，不要沿中殿向前走动；' +
          '手机静音；礼拜进行中不要拍照，尤其不要拍领受圣餐的人与祭坛方向；' +
          '不必跟着跪拜或唱诵，安静坐着即可</strong>。' +
          '<strong>着装：不要求正装，但不要穿无袖上衣、短裤与人字拖，帽子进堂要脱。</strong>' +
          '<strong>周日主礼拜通常在交叉部举行，此时交叉部与中殿不对观光开放</strong>',
        '<strong>餐饮与卫生间：堂内没有餐厅。</strong>' +
          '<strong>卫生间在 Visitor Center（进门后）一侧，数量不多，周末大活动时会排队。</strong>' +
          '<strong>吃饭往西走两个街区到 Broadway 与 110–112 街一带，那是哥大南缘的学生餐饮区，' +
          '便宜、选择多、步行 5 分钟</strong>——' +
          '这一带和下面 Columbia 那条可以合成一个下午'
      ],
      photo: '建筑外观 <strong>3.5/5</strong>，室内 <strong>4.5/5</strong>，彩窗 <strong>4/5</strong>。' +
        '中殿进深 183 米加上高侧窗的光柱是全纽约最好的教堂内景之一；外观扣分是因为南塔未完工、西立面长期显得不完整。',
      shots: [
        {
          name: '中殿轴线与交叉部穹顶',
          desc: '<strong>站在中殿西端正中沿轴线向东，把 601 英尺的进深一次收进画面。</strong>' +
            '<strong>晴天 11:00–14:00 高侧窗会在中殿地面打出成排光斑，这是这里最好的光</strong>；' +
            '<strong>14–24mm 超广、机身水平、尽量贴轴线中心以免柱列歪斜</strong>。' +
            '交叉部下抬头拍 Guastavino 穹顶用 16–24mm 近垂直上仰。' +
            '<strong>室内很暗，ISO 3200–6400、f/2.8、1/30s 起，靠机身防抖；' +
            '三脚架需事先申请，散客不要带</strong>。礼拜进行中一律收起相机。' +
            '坐标为 OSM 座堂建筑实体（中殿内无独立节点）。',
          view: [40.803766, -73.961784]
        }
      ],
      access: {
        visit: '<strong>自助观光 45–75 分钟；加 Highlights Tour 约 2 小时；' +
          '若参加 Vertical Tour 另加 1 小时（导览本身 60 分钟）。</strong>' +
          '分配：中殿与交叉部 20–25 分钟（<strong>穹顶下至少站 10 分钟</strong>）、' +
          'Rose Window 与西端 10 分钟、七座 Chapels of the Tongues 15 分钟、' +
          'Poets\' Corner 与 Keith Haring 三联作 10 分钟、' +
          '周末再加院子与 Peace Fountain 15 分钟。' +
          '<strong>只看重点 30 分钟</strong>：进门直走到交叉部抬头，回身看 Rose Window，走两座小圣堂出来。' +
          '<strong>时长为按建筑规模与官方导览时长推算，官方未给建议参观时长</strong>',
        book: '<strong>核实日期 2026-09-14。自助观光官方口径是' +
          '「It is strongly encouraged that sightseeing visitors purchase timed tickets in advance」' +
          '——强烈建议提前在 stjohndivine.org/visit/timed-tickets 买定时票，但不是强制。</strong>' +
          '<strong>Vertical Tour 必须提前订，而且这是本条最需要提前规划的一项：' +
          '它不是每天都有，官方日历上是零散的周六单场</strong>' +
          '（<strong>2026 年已挂出的例子：10 月 3 日 12:00–13:00、10 月 24 日 14:00–15:00</strong>），' +
          '在 stjohndivine.org/visit/public-guided-tours 订。' +
          '<strong>年龄限制口径不一致：导览总览页把 Vertical Tour 标为「All Ages」，' +
          '而官方日历的每一场单页都写「All participants must be 12 years or older」。' +
          '两种口径都列出，按 12 岁下限准备更稳妥。</strong>' +
          'Highlights Tour 每天 13:00 一场，现场或网上买均可。' +
          '<strong>10 人以上团体须提前联系 groups@stjohndivine.org 或 +1 212-932-7347</strong>',
        ticket: '<strong>核实日期 2026-09-14。这里有一处官方页面自相矛盾，两种口径都列出：</strong>' +
          '<strong>①&nbsp;《Plan Your Visit》与《Hours &amp; Admission》页、以及购票页原文：' +
          '「Admission is $15 for adults, $12 for seniors and students」' +
          '（成人 $15、老年与学生同为 $12）；' +
          '②&nbsp;《Hours and Information》页原文：' +
          '「Admission is $15 for adults, $12 for seniors and $10 for students」' +
          '（学生 $10）。</strong>' +
          '学生按 $10–12 之间准备，现场以窗口为准。' +
          '<strong>免费条件写得很明确：' +
          '「All those who are seeking a place for prayer or meditation will be welcomed without charge」' +
          '——为祈祷或静坐而来的人免费入内</strong>，' +
          '这不是含糊的客套，是写进官方票价页的正式条款，' +
          '<strong>但它对应的是安静入座祈祷，不是绕一圈观光</strong>。' +
          '<strong>导览另计：Highlights／Cathedral Arts／Stained Glass／Architecture 四种均为 $16 成人、' +
          '$14 大学生与老年；Vertical Tour $20 成人、$18 大学生与老年。</strong>' +
          '此前部分资料写的「建议捐赠」已不是当前口径——' +
          '<strong>2026 年是明码固定票价 $15，只是同时保留了祈祷者免费入内这一条</strong>',
        hours: '<strong>核实日期 2026-09-14，stjohndivine.org 官方原文：' +
          '「Monday – Friday 9:30 am – 5 pm；Saturday 9:30 am – 5 pm；Sunday 12 pm – 5 pm」。</strong>' +
          '<strong>也就是周一至周六 09:30–17:00、周日 12:00–17:00，全周无固定闭馆日</strong>' +
          '（这一点与本区各博物馆不同，是本区唯一周三也开的大型室内项目）。' +
          '<strong>另有两条官方附注：' +
          '一是「Cathedral grounds are closed Monday – Friday」——院子工作日关闭；' +
          '二是「Due to cleaning and ongoing conservation at the Cathedral, ' +
          'some areas may occasionally be inaccessible」——局部区域可能临时关闭。</strong>' +
          '<strong>节假日与大型礼拜日的时间会变，未能就 2026 年具体节假日特例取得官方逐日清单</strong>，' +
          '可打 <strong>+1 212-316-7490</strong> 确认',
        parking: '<strong>无自有停车场。</strong>周边 Amsterdam Avenue 与 Morningside Drive 是路边计时车位，' +
          '<strong>工作日上学时段（08:00–09:00、14:30–15:30）门前会因接送而堵</strong>。' +
          '这一带路边停车比上东区宽松，但仍建议坐地铁',
        walk: '<strong>地铁 1 号线「Cathedral Pkwy–110 St」站下，沿 110 街东行到 Amsterdam Avenue 再北行两个街区，' +
          '步行约 7–9 分钟</strong>；' +
          '或 B／C 线「Cathedral Pkwy（110 St）」站（在公园西侧），步行约 12 分钟。' +
          '<strong>正门在 1047 Amsterdam Avenue（112 街口）</strong>，' +
          '建筑从 Amsterdam Avenue 一直横跨到 Morningside Drive，占满一整个街区。' +
          '<strong>到 Columbia University 的 Low Library 台阶步行约 10 分钟（沿 Amsterdam Avenue 北行到 116 街）</strong>，' +
          '两条可以连着走'
      },
      notes: [
        '<strong>这里是仍在使用的活教堂，不是遗址。</strong>' +
          '礼拜、音乐会、葬礼与社区活动随时可能占用中殿或交叉部，' +
          '<strong>官方也明说部分区域可能临时不可进入</strong>——' +
          '碰上了不要和工作人员争，这是它作为教堂的本职',
        '<strong>十月第一个周日是本堂全年最大的一场活动：' +
          'Feast of St. Francis 与 Blessing of the Animals。</strong>' +
          '官方 FAQ 原文「The St. Francis Day Blessing of the Animals occurs on the ' +
          'first Sunday of October」，' +
          '服务 10:30 开始（管风琴前奏 10:20），含 Procession of the Animals——' +
          '<strong>真的会有大型动物被牵进中殿</strong>；' +
          '之后的户外市集与宠物祝福「rain or shine」。' +
          '<strong>按官方规则推算，2026 年即 10 月 4 日（周日）</strong>；' +
          '<strong>2026 年的具体时间、是否需要免费入场券（往年有几年需要、有几年不需要）' +
          '未能从官方渠道确认</strong>，' +
          '要去请提前在 stjohndivine.org/calendar 查当年的页面。' +
          '<strong>这一天不适合当作普通观光日来</strong>',
        '<strong>手持非商业拍摄允许，三脚架需事先申请。</strong>' +
          '<strong>礼拜与音乐会进行中禁止拍摄</strong>；' +
          'Vertical Tour 途中楼梯狭窄且黑，<strong>建议一机一镜、双手要能抓扶手，不要带大包</strong>',
        '<strong>Vertical Tour 的体力门槛要如实看：124 英尺以上的旋转石梯、无电梯、' +
          '中途要在飞扶壁上行走。</strong>' +
          '<strong>怕高、膝关节不好、有心肺问题的不要报</strong>；' +
          '穿抓地的平底鞋，<strong>裙装与硬底皮鞋会很难受</strong>',
        '<strong>免费的官方数字导览在 Bloomberg Connects app 里（搜 Cathedral of St. John the Divine），' +
          '另有纸质导览手册。</strong>' +
          '<strong>对这座堂来说数字导览的性价比很高</strong>——' +
          '因为它「哪里没建完、原计划是什么样」这类信息，光看现场是看不出来的',
        '<strong>治安：Morningside Heights 白天正常，是哥大的校区外围。</strong>' +
          '<strong>但座堂东侧的 Morningside Park 是一片陡坡地形，入夜后不要穿行</strong>，' +
          '要从东边过来请走 110 街或 116 街的正规台阶路'
      ],
      images: [
        { url: 'img/cathedral-church-of-st-john-the-divine-the-groundview-bc43e9e2.jpg',
          cap: 'Amsterdam Avenue 一侧的西立面与未完工的南塔 · The groundview / CC BY-SA 4.0' },
        { url: 'img/the-cathedral-church-of-saint-john-the-divine-choir-2e300912.jpg',
          cap: '高坛与罗马式花岗岩巨柱 · Jpapanestor007 / CC BY 4.0' },
        { url: 'img/st-john-the-divine-rose-window-from-inside-0634c694.jpg',
          cap: '堂内西望直径 40 英尺的 Rose Window · Gesalbte / Public domain' }
      ]
    },
    {
      id: 'harlem-apollo',
      n: 7,
      name: '哈莱姆与阿波罗剧院',
      en: 'Harlem &amp; the Apollo Theater',
      must: 3.5,
      score: 3.5,
      tldr: '125 街文化带。Apollo 剧院整修中，预计 2026 年底重开；导览 $17 须预约。Studio Museum 已重开。',
      tags: [
        { t: '街区免费', c: 'free' },
        { t: '历史剧院整修中', c: 'risk' },
        { t: '导览须预约', c: 'risk' },
        { t: '周日博物馆免费', c: 'free' }
      ],
      highlights: [
        '<strong>125th Street 不是一条普通商业街，它在 1811 年 Commissioners\' Plan 里就被划成曼哈顿 15 条' +
          '「宽幅横街」之一，而且是其中连通性最好的一条</strong>——' +
          '<strong>从哈德逊河一直通到东河，同时接上 Henry Hudson Parkway、FDR Drive 与 Triborough Bridge</strong>。' +
          '二十世纪初这一带剧院密集，被叫做「Harlem\'s 42nd Street」；' +
          '<strong>2007 年美国规划协会（APA）把它列为全美「十条伟大街道」之一</strong>。' +
          '现在的实际面貌是：<strong>连锁店（Whole Foods、H&amp;M、Red Lobster）与老店、教堂、' +
          '街头布道者和音响摊混在同一条街上</strong>——' +
          '这条街的价值在于它仍然是活的黑人商业与文化主街，不是被整理好的历史街区',
        '<strong>Apollo Theater 的建筑本身 1913–14 年由 George Keister 设计，' +
          '而它最初的名字叫 Hurtig and Seamon\'s New Burlesque Theater——' +
          '一家黑人既不能进场也不能上台的滑稽歌舞剧院。</strong>' +
          '<strong>1933 年 Fiorello La Guardia 发起取缔 burlesque 的运动，这家剧院随之关门；' +
          '1934 年 Sidney Cohen 与 Morris Sussman 把它改名为 125th Street Apollo Theatre 重开，' +
          '节目改为综艺，并把营销对象转向哈莱姆日益增长的黑人社区。</strong>' +
          '<strong>也就是说这座「黑人音乐圣殿」是从一家排斥黑人的剧院改过来的，' +
          '转向只发生在 1934 年那一年</strong>。' +
          '现有约 1,500 个座位，<strong>1983 年获得州与市两级地标身份</strong>',
        '<strong>Amateur Night 同样起于 1934 年，创办人 Ralph Cooper，而它最有名的道具有一个很实在的来历。</strong>' +
          '舞台边放着一段树桩叫 <strong>Tree of Hope</strong>：' +
          '原树长在附近 Lafayette Theatre 对面，<strong>失业的艺人聚在树下表演，' +
          '希望被 Lafayette 的经理看上，久而久之被认为能带来好运</strong>；' +
          '<strong>1934 年那棵树被砍掉后，Cooper 把一段搬进 Apollo，让参赛者上台前摸一下求不被观众嘘下去</strong>。' +
          '观众可以直接把人「嘘走」这件事是正式的比赛规则（be good or be gone），' +
          '<strong>大奖最高 $20,000，另有 18 岁以下的 Child Stars of Tomorrow 组、奖金 $5,000</strong>',
        '<strong>Walk of Fame 就在 Apollo 那块招牌雨棚底下的人行道上，2010 年才做，' +
          '而且刻意不做成好莱坞那种星形——是长方形铜牌嵌进人行道。</strong>' +
          '<strong>首批七块（2010 年 5 月装）是 Quincy Jones、Patti LaBelle、Smokey Robinson、' +
          'James Brown、Little Richard、Ella Fitzgerald、Gladys Knight and the Pips</strong>，' +
          'Michael Jackson 与 Aretha Franklin 的在同年 6 月补上。' +
          '<strong>经费里有 Harlem Community Development Corporation 的 $75,000 拨款。</strong>' +
          '另有一条更早的「Striver\'s Walk of Fame」在 135 街 7 至 8 大道之间，名单与 Apollo 的多有重叠',
        '<strong>Studio Museum in Harlem 是本条最大的一个变化：' +
          '它 2018 年拆掉旧楼后闭馆七年，2025 年 11 月 15 日在原址 144 West 125th Street 重开。</strong>' +
          '<strong>新馆由 Adjaye Associates 设计（Cooper Robertson 为执行建筑师），' +
          '七层、82,000 平方英尺，是这家 1968 年成立的机构 57 年历史上第一栋专为自己的功能建造的房子</strong>，' +
          '募款总额超过 3 亿美元。' +
          '<strong>它的定位是「非洲裔艺术家的艺术」，并且有一个在美国博物馆里很少见的驻馆艺术家项目（Artist-in-Residence）</strong>——' +
          '这个项目是它名字里 Studio 的来源',
        '<strong>值得多走五个街区的是 Striver\'s Row（正式名 St. Nicholas Historic District）。</strong>' +
          '位置在 <strong>West 138 与 139 街、Adam Clayton Powell Jr. Boulevard（七大道）至 ' +
          'Frederick Douglass Boulevard（八大道）之间</strong>，' +
          '<strong>1891–93 年由开发商 David H. King, Jr. 建造，原名 King Model Houses，' +
          '而且一次请了三组建筑师做三种风格</strong>：' +
          '138 街南侧的红砖褐石为 James Brown Lord 的 Georgian Revival；' +
          '138 街北侧与 139 街南侧的黄砖白石灰石为 Bruce Price 与 Clarence S. Luce 的 Colonial Revival；' +
          '<strong>139 街北侧的深色砖与陶饰是 McKim, Mead &amp; White 的 Stanford White 做的意大利文艺复兴复兴式</strong>。' +
          '<strong>1919 年之后成为哈莱姆黑人专业人士与艺术家的聚居地，「Striver」（奋斗者）的绰号由此而来；' +
          '楼间的马车后巷至今还挂着「Private Road, Walk Your Horses」的老牌子</strong>'
      ],
      tour: [
        '<strong>先把 2026 年最关键的一条说清楚：Apollo 的历史剧院正在整修，进不去。</strong>' +
          '<strong>官方网站页首原文「The Apollo\'s Historic Theater is currently closed for renovation ' +
          'and is expected to reopen in late 2026.」——一笔约 6,500 万美元的整修，预计 2026 年底重开</strong>' +
          '（核实日期 2026-09-14）。' +
          '<strong>期间所有演出移到街对面的 The Apollo Stages at The Victoria，233 West 125th Street 三楼</strong>，' +
          '<strong>那里的主厅 Victoria Theater 1 只有 199 个座位，是个黑盒剧场，' +
          '和 1,500 座的历史剧院完全不是一回事</strong>。' +
          '<strong>如果到访时间在重开之后，请重新核实——本条按「整修中」状态写</strong>',
        '<strong>散客能不能参加导览：可以，但必须提前订，不能到了门口临时买。</strong>' +
          '<strong>官方导览页原文「Tours MUST be scheduled in advance — Date and times are based on ' +
          'calendar availability」，并且明确列出「Individuals &amp; Groups of 19 or less：' +
          'Mon, Wed &amp; Sat，$17 Per Person」——散客有正式价目，不是只做团体。</strong>' +
          '<strong>场次：周一 11:00 与 13:00、周三 11:00 与 13:00、周六 11:00。</strong>' +
          '<strong>整修期间的版本叫 Apollo Experience tour，' +
          '由驻馆历史学家 Billy「Mr. Apollo」Mitchell 本人带</strong>——' +
          '他讲 James Brown、Stevie Wonder、Mary J. Blige 的后台故事，' +
          '<strong>官方形容为「part performance and part historical lecture」，' +
          '这是本条真正的看点，不是那栋楼</strong>。' +
          '<strong>订法：打 +1 212-531-5337 或写 historic.tour@apollotheater.org。' +
          '全英文进行，票售出不退不换</strong>',
        '<strong>一条 90 分钟的步行线，按这个顺序走：</strong>' +
          '<strong>地铁 A／B／C／D 线「125 St」站出来（就在 St. Nicholas Avenue 与 125 街口）→ ' +
          '东行到 253 West 125th Street 的 Apollo：看那块 1940 年代式样的招牌雨棚与脚下的 Walk of Fame ' +
          '（铜牌在雨棚正下方的人行道上，容易走过头，要低头找）→ ' +
          '再东行到 144 West 125th Street 的 Studio Museum（40 分钟）→ ' +
          '继续东行看沿街的老剧院立面与商业带，到 Adam Clayton Powell Jr. Boulevard 路口 → ' +
          '北行 13 个街区到 Striver\'s Row（138–139 街）</strong>。' +
          '<strong>Striver\'s Row 这一段是全线最安静也最出乎意料的部分——' +
          '从 125 街那种喧闹一下切换到两排 1890 年代联排住宅，落差很大</strong>',
        '<strong>Studio Museum 怎么逛与怎么省钱：七层楼但展览面积不算大，60–90 分钟够。</strong>' +
          '<strong>票价是建议金额（pay what you can）：官方建议成人 $16、' +
          '65 岁以上老年与学生及残障访客 $9、陪同者免费、16 岁及以下免费。</strong>' +
          '<strong>每周日全场免费（Studio Sundays 项目），但仍需领票</strong>——' +
          '<strong>这是本区性价比最高的一条，周日来这里等于零成本</strong>。' +
          '<strong>周一、周二闭馆（周二只接受预约的学校团体）。</strong>' +
          '下层有<strong>免费寄存（Coat Check），对走了一天的人很实用</strong>；' +
          '入展厅前部分物品必须寄存',
        '<strong>如果想听 gospel：这是本区最容易失手的一件事，规矩比大多数人以为的严得多。</strong>' +
          '最有名的是 <strong>Abyssinian Baptist Church（132 Odell Clark Place，即 138 街，' +
          'Lenox Avenue 与 Adam Clayton Powell Jr. Blvd 之间）</strong>，' +
          '<strong>官方游客政策原文逐条如下：免费；游客只能参加周日 10:00 的礼拜；' +
          '「Visitors should arrive no later than 9:30 a.m.」并且「admitted on a first-come, ' +
          'first-served basis」「Admittance is not guaranteed」；' +
          '游客入口在 West 138th Street 与 Adam Clayton Powell Jr. Blvd 的东南角，' +
          '是露天的，官方明说要做好长时间站立与风雨的准备。</strong>' +
          '<strong>着装硬性规定：「Visitors wearing tank tops, flip-flops, shorts or leggings ' +
          'will not be allowed to enter」，且「Women and men are required to cover their ' +
          'shoulders upon entering」——背心、人字拖、短裤、紧身裤一律不得入内，男女都必须遮住肩膀。' +
          '背包不得带进礼拜堂，且教会不提供寄存。</strong>' +
          '<strong>礼仪上最重要的一条：官方要求游客「remain in the Sanctuary until the end of the ' +
          'Worship Service」——进去了就要待到礼拜结束，不能听几首歌就走。</strong>' +
          '<strong>官方页面开头那句话定了性质：「Worship at the Abyssinian Baptist Church ' +
          'IS NOT A GOSPEL PERFORMANCE or entertainment of any kind.」' +
          '——这不是演出，按去教堂而不是按看表演准备</strong>',
        '<strong>餐饮与卫生间：125 街沿线餐饮很多，但公共卫生间极少，这是这条线最实际的约束。</strong>' +
          '<strong>可靠的三处：Studio Museum 馆内（有票即可用）、' +
          '125 街上的 Whole Foods（100 West 125th Street）与 Harlem 各连锁咖啡店（需消费）。</strong>' +
          '吃饭的经典选择是 <strong>Sylvia\'s Restaurant（328 Malcolm X Boulevard，1962 年开业的 soul food 老店，' +
          '周日有 gospel brunch、需排队）</strong>' +
          '与 <strong>Red Rooster（310 Lenox Avenue）</strong>；' +
          '<strong>两家周末都要等位，想省时间就吃 125 街上的快餐</strong>。' +
          '<strong>2026 年具体营业时间未逐家核实，去前请自行确认</strong>'
      ],
      photo: '街景 <strong>3.5/5</strong>，建筑 <strong>3.5/5</strong>，人文纪实 <strong>4/5</strong>。' +
        'Apollo 的招牌雨棚是全区最有辨识度的一件东西；扣分是整条 125 街杂乱、电线与脚手架多，且整修期间剧院立面可能有围挡。',
      shots: [
        {
          name: 'Apollo 招牌雨棚与 Walk of Fame',
          desc: '<strong>站在 125 街对面（北侧）人行道上拍雨棚全貌，' +
            '35–50mm 横构图把「APOLLO」竖招牌与雨棚一起收进来。</strong>' +
            '<strong>傍晚 18:00 之后霓虹点亮、天光未尽的那 20 分钟是这里最好的时段</strong>；' +
            '白天顶光会让雨棚下方全黑。' +
            '<strong>Walk of Fame 的铜牌要低头拍，35mm 以下贴近地面斜拍，避开自己的影子。</strong>' +
            '<strong>整修期间立面可能有围挡或防护网，到场以实际状况为准。</strong>' +
            '坐标为 OSM Apollo Theater 建筑实体。',
          view: [40.810090, -73.949995]
        }
      ],
      access: {
        visit: '<strong>街区步行线 1.5–2 小时（Apollo 外观与 Walk of Fame 20 分钟 + ' +
          'Studio Museum 60–90 分钟 + 125 街商业带 20 分钟）；' +
          '加 Striver\'s Row 再加 45–60 分钟（含往返步行）。</strong>' +
          '<strong>参加 Apollo Experience tour 另加约 60–75 分钟。</strong>' +
          '<strong>想听 gospel 请单独留出周日上午 09:30–12:30 整段三小时</strong>' +
          '（排队一小时 + 礼拜必须待到结束）。' +
          '<strong>只看重点 45 分钟</strong>：地铁出来直奔 Apollo 拍外观与 Walk of Fame，' +
          '东行到 Studio Museum 看一层与一个展厅，原路返回地铁。' +
          '<strong>时长为按步行距离与馆方规模推算</strong>',
        book: '<strong>核实日期 2026-09-14。街区本身不需预约。</strong>' +
          '<strong>Apollo Experience tour 必须提前预约</strong>' +
          '（+1 212-531-5337 或 historic.tour@apollotheater.org，' +
          '场次周一／周三 11:00 与 13:00、周六 11:00，' +
          '官方另注「The Apollo is a working theater and tours are often scheduled around ' +
          'the various productions」，即场次随演出档期变动）。' +
          '<strong>Studio Museum 建议提前在 studiomuseum.org/visit 订票，周日免费票也要领。</strong>' +
          '<strong>演出票（含 Amateur Night）走 Ticketmaster.com，' +
          '或到 The Apollo Stages at the Victoria 的售票窗口现买（开演前两小时开窗）；' +
          '10 人以上团体联系 group.sales@apollotheater.org。</strong>' +
          '<strong>Abyssinian Baptist Church 散客不需预约（也无法预约），' +
          '10 人以上团体须提前至少两周联系 info@abyssinian.org</strong>',
        ticket: '<strong>核实日期 2026-09-14。逐项列：</strong>' +
          '<strong>①&nbsp;街区、Walk of Fame、Striver\'s Row：免费。</strong>' +
          '<strong>②&nbsp;Apollo Experience tour（官方页原文）：散客与 19 人以下小团 ' +
          '周一／周三／周六均 $17 每人；20–55 人团体周一与周三 $15、周六 $17。' +
          '全英文，票售出不退不换。</strong>' +
          '<strong>③&nbsp;Studio Museum in Harlem：建议金额制，成人 $16、' +
          '老年（65 岁及以上）／学生／残障访客 $9、陪同者免费、16 岁及以下免费，' +
          '每周日（Studio Sundays）对所有人免费。</strong>' +
          '<strong>④&nbsp;Abyssinian Baptist Church 周日礼拜：' +
          '官方原文「There are no fees to worship at Abyssinian Baptist Church」，免费。</strong>' +
          '<strong>⑤&nbsp;Amateur Night：2026 年的场次日期与票价未能从官方渠道确认。' +
          '官方 2026 季页面只写「Amateur Night... 继续在 The Apollo Stages at The Victoria 上演」，' +
          '没有挂出日历与价目；可查到的最近具体价格是 2025 年在历史剧院的场次' +
          '「Start at $30」与「Start at $33」（周三 19:30 开演、18:30 开门）。' +
          '<strong>由于演出已移到 199 座的小厅，票价与放票方式都可能改变，' +
          '请打 +1 212-531-5305 或查 Ticketmaster</strong></strong>',
        hours: '<strong>核实日期 2026-09-14。</strong>' +
          '<strong>①&nbsp;125th Street 是公共街道，全天可走；' +
          '商业带的实际活跃时段约 10:00–20:00，入夜后店铺陆续关门。</strong>' +
          '<strong>②&nbsp;Apollo 历史剧院：整修中不对外开放，官方原文「expected to reopen in late 2026」。' +
          '票务办公室时间为 WEEKDAYS 10AM–6PM、SATURDAY 12PM–5PM、SUNDAY Closed。</strong>' +
          '<strong>③&nbsp;Studio Museum in Harlem：官方原文' +
          '「open Wednesday through Sunday, from 11:00 am to 6:00 pm」，周一与周二闭馆，' +
          '会员专属时段为周六 10:00–11:00。' +
          '延长开放时间这一项官方两处口径不一致：2025 年 11 月的开馆新闻稿写' +
          '「with extended hours on Friday and Saturday, from 11:00 am to 9:00 pm」（周五与周六到 21:00），' +
          '而 2026 年秋季季目发布稿写「with extended hours on Friday, from 11:00 am to 9:00 pm」' +
          '（只有周五到 21:00）。两种口径都列出，想赶晚间时段请先在 studiomuseum.org/visit 复核。</strong>' +
          '<strong>④&nbsp;Abyssinian Baptist Church：游客只能参加周日 10:00 的礼拜，09:30 前必须到。</strong>',
        parking: '<strong>不要开车来。</strong>125 街沿线是商业带，路边车位少、' +
          '双排停车与送货车常年占道，<strong>车位周转极慢且有清扫日限制</strong>。' +
          '<strong>商业停车场集中在 125 街与 Frederick Douglass Boulevard、Lenox Avenue 交口附近，' +
          '按小时计费，2026 年具体费率未核实。</strong>' +
          '这一站地铁覆盖极好，没有自驾的必要',
        walk: '<strong>地铁选择是本条的优势：125 街被四组线路横向串起来。</strong>' +
          '<strong>A／B／C／D 线「125 St」站在 St. Nicholas Avenue 口，出站往东走 3 分钟就是 Apollo（253 W 125th）；' +
          '2／3 线「125 St」站在 Lenox Avenue 口，出站往西走 5 分钟到 Studio Museum（144 W 125th）；' +
          '4／5／6 线「125 St」站在 Lexington Avenue 口，偏东，走到 Apollo 约 15 分钟。</strong>' +
          '<strong>Apollo 到 Studio Museum 沿 125 街东行约 550 米 / 步行 7 分钟</strong>（按 OSM 坐标推算）；' +
          '<strong>Apollo 到 Striver\'s Row（138–139 街）北行约 1.5 公里 / 步行 18–20 分钟</strong>，' +
          '或坐 B／C 线一站到 135 St 再走 4 个街区。' +
          '<strong>从本区南缘的 Columbia University（116 街）过来：1 号线两站到 125 St（在 Broadway 口），' +
          '再东行 700 米；或 B／C 线同样两站</strong>'
      },
      notes: [
        '<strong>Studio Museum in Harlem 已经重开——这一条请覆盖任何 2025 年 11 月之前写的攻略。</strong>' +
          '它<strong>从 2018 年拆旧楼起闭馆了七年，原定 2022 年重开，实际是 2025 年 11 月 15 日</strong>。' +
          '中文与英文网上仍有大量「长期闭馆、展览在合作场馆巡回」的旧信息，' +
          '<strong>2026 年的状态是正常开放的七层新馆</strong>',
        '<strong>十月有一个具体的日子游客进不去 Abyssinian：官方游客政策列出了一张' +
          '「Tourists will not be admitted」的日期表，其中包括「Men\'s Day – 2nd Sunday in October」。</strong>' +
          '<strong>按此规则推算 2026 年即 10 月 11 日（周日）游客不得入场</strong>；' +
          '同一张表还包括元旦、三月第二个周日的 Women\'s Day、Palm Sunday、母亲节、' +
          '九月第二个周日的 Homecoming。' +
          '<strong>撞上这些日子只能改期，现场不会通融</strong>',
        '<strong>礼拜堂内拍照：Abyssinian 的官方游客政策没有写摄影条款，' +
          '但按普通教会礼仪，礼拜进行中不要拍照、录像或录音，尤其不要拍唱诗班与讲道者。</strong>' +
          '<strong>摄影政策未能从官方渠道确认，可去前写 info@abyssinian.org 或打 ' +
          '+1 212-862-7474 问清；现场看不到明确标识时，按「不拍」处理最稳妥。</strong>' +
          '<strong>Studio Museum 的具体摄影政策也未在官方页面查到</strong>，' +
          '按一般美术馆惯例即手持无闪光可拍、特展可能另有限制',
        '<strong>治安：125 街商业带白天人多、警力常驻，正常注意随身物品即可。</strong>' +
          '<strong>入夜后不建议在 125 街以北的住宅街区无目的闲逛</strong>，' +
          '要去 Striver\'s Row 请安排在白天；' +
          '<strong>Marcus Garvey Park 与 Morningside Park 天黑后不要穿行</strong>。' +
          '街上偶有推销「hip-hop tour」或索要小费的自称导游，不必理会',
        '<strong>这是一个人们真正生活的社区，不是景区，' +
          '拍街上的人（尤其教堂门口做礼拜的人、店主、坐在门廊上的老人）之前请先问一句。</strong>' +
          '<strong>被拒绝就收起相机</strong>——这一条在本区比在中城重要得多',
        '<strong>Apollo 整修的另一面：如果到访时间落在 2026 年底重开之后，' +
          '这一条的分量会明显上升</strong>——' +
          '<strong>届时历史剧院与舞台重新可看，导览内容也会从「Apollo Experience」回到实地版本，' +
          '值得把 must 分往上调</strong>。' +
          '出行前请查 apollotheater.org/visit-the-apollo 的页首公告',
        '<strong>无障碍：125 街的四个地铁站里，A／B／C／D 线的 125 St 站与 2／3 线的 125 St 站' +
          '设施情况不一，部分只有楼梯。</strong>' +
          '<strong>Studio Museum 新馆是 2025 年落成的新建筑，无障碍设施完整，' +
          '并提供辅助设备与感官友好材料；Apollo 的历史剧院无障碍条件受限</strong>'
      ],
      images: [
        { url: 'img/apollo-theater-harlem-nyc-2010-c79049ad.jpg',
          cap: 'Apollo Theater 的招牌雨棚与竖招牌 · Hans Joachim Dudeck / CC BY-SA 3.0' },
        { url: 'img/studio-museum-in-harlem-nov-2025-62b5fea9.jpg',
          cap: 'Studio Museum in Harlem 新馆立面，2025 年 11 月开馆后摄 · 19h00s / CC BY 4.0' },
        { url: 'img/2014-striver-s-row-219-203-w-138-2360-acp-by-bruce-price-cla-a652b293.jpg',
          cap: "Striver's Row：138 街 219–203 号的 Colonial Revival 联排 · Beyond My Ken / CC BY-SA 3.0" }
      ]
    },
    {
      id: 'columbia-morningside',
      n: 8,
      name: '哥伦比亚大学与晨边高地',
      en: 'Columbia University &amp; Morningside Heights',
      must: 3,
      score: 3.5,
      tldr: '2024 年抗议后校园收紧门禁。2026 年 9 月状态：普通游客不能凭证件自行进入，须预约导览或由校内人员登记。',
      tags: [
        { t: '免费但有门禁', c: 'risk' },
        { t: '须预约导览', c: 'risk' },
        { t: '官方口径互相矛盾', c: 'risk' },
        { t: '街区免费可逛', c: 'free' }
      ],
      highlights: [
        '<strong>这是本区最容易白跑的一个地方，原因不是开放时间，而是门禁。</strong>' +
          '<strong>2024 年 4 月校园抗议（南草坪扎营、4 月 30 日 Hamilton Hall 被占领后由纽约警方清场）之后，' +
          '哥大把 Morningside 校园从「城市里的开放中庭」改成了刷卡与预登记制</strong>，' +
          '并建立了一套 <strong>Green／Yellow／Orange／Red 四级校园状态</strong>加' +
          '<strong>「I」（ID Only）级别</strong>的管理体系。' +
          '<strong>这套制度到 2026 年 9 月仍在运行，而且级别是按天调整的</strong>——' +
          '这意味着「上周有人进去了」不能作为当天能否进入的依据（详见 access.book 与 access.ticket）',
        '<strong>Low Memorial Library 是全校的视觉中心，而它已经九十多年不是图书馆了。</strong>' +
          '<strong>1895–97 年建成，Charles Follen McKim（McKim, Mead &amp; White）设计，' +
          '资金来自校长 Seth Low 为纪念其父 Abiel Abbot Low 的个人捐款</strong>，' +
          '<strong>圆顶是全美最大的全花岗岩穹顶</strong>，形制远祖是罗马万神殿。' +
          '<strong>1934 年藏书全部搬去 Butler Library 之后，它就只做行政楼用了</strong>——' +
          '现在里面是校长办公室与礼仪空间，<strong>普通人进不去，值得看的是它前面那片台阶</strong>。' +
          '这片台阶是全校的社交客厅，天气好时坐满学生',
        '<strong>台阶上那尊青铜坐像 Alma Mater 是 Daniel Chester French 1903 年作品' +
          '（同一位雕塑家做了华盛顿的林肯坐像）。</strong>' +
          '<strong>两个具体细节：一是 1962 年她被镀了金，但因抗议而把镀金去掉了，所以现在是青铜本色；' +
          '二是她袍子的褶皱里藏着一只小猫头鹰</strong>，' +
          '<strong>校内传说第一个找到它的新生会成为毕业生代表</strong>——' +
          '找它是到这片台阶上唯一值得做的「任务」。' +
          '1968 年校园抗议期间这尊像曾被炸伤过，底座至今留有修补痕迹',
        '<strong>Butler Library（1931–34 年，James Gamble Rogers 设计，原名 South Hall）' +
          '正对 Low 的台阶，是哥大最大的单体图书馆。</strong>' +
          '<strong>它的立面檐壁上刻着一排西方古典作者的名字——Homer、Herodotus、Sophocles、' +
          'Plato、Aristotle、Demosthenes、Cicero、Vergil</strong>，' +
          '<strong>这份名单本身在 20 世纪后期成了校内反复争论的对象（谁被刻上、谁没有）</strong>，' +
          '是理解美国大学通识教育史的一个实物注脚。' +
          '<strong>馆内对非校内人员不开放，能看的只有立面</strong>',
        '<strong>整个 Morningside Heights 被叫做「学术卫城（Academic Acropolis）」，' +
          '密度在全美绝无仅有：</strong>' +
          '<strong>Columbia、Barnard College、Teachers College、Union Theological Seminary、' +
          'Jewish Theological Seminary、Manhattan School of Music、Riverside Church、' +
          '以及本区那座未完工的 Cathedral of Saint John the Divine，全部挤在南北不到 20 个街区里。</strong>' +
          '<strong>校园总体规划由 McKim, Mead &amp; White 于 1894 年做成，' +
          '是美国 Beaux-Arts／American Renaissance 校园规划的范本</strong>' +
          '（原址是 Bloomingdale Insane Asylum 的地块）。' +
          '哥大本身<strong>1754 年以 King\'s College 之名创办，是美国第五古老的高等院校，1897 年迁到此地</strong>'
      ],
      tour: [
        '<strong>先解决「能不能进」这个问题，这是本条存在的主要理由。</strong>' +
          '<strong>2026-09-14 核实，哥大官方三处页面的口径互相矛盾，全部列出：</strong>' +
          '<strong>①&nbsp;Public Safety 的校园出入页写当前级别是「Access Level "I" – ID Only：' +
          'CUID holders, alumni, and approved guests only」——只有在校证件持有者、已登记校友、' +
          '以及被批准的客人；' +
          '②&nbsp;Visitors Center 首页横幅写「Access to Columbia\'s Morningside Heights campus is ' +
          'currently limited to CUID holders and registered guests, including visitors who have ' +
          'registered ahead of time for tours. At this time, the Visitors Center cannot accommodate ' +
          'walk-on tour registrations, self-guided tours, or other visitors to campus.」' +
          '——明确说不接受现场报名、不接受自助参观；' +
          '③&nbsp;同一站点的 Tours 页与 Explore the Highlights 页横幅却写' +
          '「Access... is currently open between 7:00 a.m. and 5:00 p.m. daily」' +
          '——每日 07:00–17:00 开放。</strong>' +
          '<strong>三种口径同时挂在官网上。保守做法是按①与②准备，即「不要假设能走进去」</strong>',
        '<strong>实际可行的进校路径只有两条，都要提前做：</strong>' +
          '<strong>①&nbsp;报名官方导览。</strong>' +
          'Visitors Center 有历史／建筑／雕塑主题的校园步行导览，' +
          '本科招生办另有面向申请者的校园游；' +
          '<strong>招生办页面原文「Prior registration is required for all tours」' +
          '且「cannot accommodate walk-on tour registrations or other visitors to campus」，' +
          '名额满了页面上就不显示该日期</strong>。' +
          '<strong>②&nbsp;由校内人员代为登记。</strong>' +
          '<strong>哥大／Barnard／Teachers College 的学生、教职员可通过 guest registration portal ' +
          '代为登记，每人每天最多两位当日客人；超过两人的申请必须在到访前一天 17:00 前提交。</strong>' +
          '<strong>登记后访客会收到带二维码的确认邮件，进校时要同时出示二维码与姓名一致的政府签发证件；' +
          '二维码只能扫一次，多日到访要分日分别登记。</strong>' +
          '<strong>没有校内关系又没报上导览的人，2026 年 9 月的现实是进不去</strong>',
        '<strong>进得去的话，校园核心区 40 分钟就能走完，顺序是：</strong>' +
          '<strong>从 116 街与 Broadway 的 College Walk 主门进 →（正前方）Low Memorial Library 的台阶，' +
          '在台阶上找 Alma Mater 袍褶里的猫头鹰 → 回身看正对面的 Butler Library 檐壁作者名 → ' +
          '（Low 东侧）St. Paul\'s Chapel</strong>。' +
          '<strong>St. Paul\'s Chapel（1904–07 年，Howells &amp; Stokes 设计）是校内最值得进去的一栋房子</strong>：' +
          '<strong>它的拱顶也是 Guastavino 陶砖工艺——和本区那座座堂的临时穹顶同一家公司的手艺，' +
          '两处对着看很有意思</strong>。' +
          '<strong>Low 与 Butler 两栋楼的内部对非校内人员都不开放，' +
          '不要把「进楼」写进计划</strong>',
        '<strong>进不去也不等于白来——校园外这一圈本身就值得走，而且完全没有门禁。</strong>' +
          '<strong>可行的替代线（全程公共人行道，60–75 分钟）：</strong>' +
          '<strong>Cathedral of Saint John the Divine（112 街）→ 沿 Broadway 北行看 116 街主门的立面与铁门 → ' +
          'Barnard College 一侧（Broadway 西侧）→ 120 街的 Teachers College 与 Union Theological Seminary 的' +
          '哥特式立面 → Riverside Church（120 街与 Riverside Drive）</strong>。' +
          '<strong>Riverside Church 的塔楼是纽约最高的教堂钟塔（392 英尺），' +
          '而它的建筑师 Charles Collens 正是本区 The Met Cloisters 的设计者</strong>——' +
          '<strong>这两栋房子出自同一个人之手，对着看是本区的一条隐藏线索</strong>' +
          '（Riverside Church 的 2026 年开放时间与登塔是否开放未核实，去前请查 trcnyc.org）',
        '<strong>餐饮与卫生间：这是本区餐饮性价比最高的一段，因为是学生商圈。</strong>' +
          '<strong>Broadway 的 110–116 街之间密布平价餐馆、面包店与咖啡店，' +
          '比上东区便宜一半以上</strong>。' +
          '<strong>其中 Tom\'s Restaurant（2880 Broadway，112 街口）是《Seinfeld》里 ' +
          '「Monk\'s Café」的外景地，也是 Suzanne Vega 那首 Tom\'s Diner 的题目来源</strong>——' +
          '<strong>只有外立面出镜、店内和剧里毫无关系，当成一家普通通宵餐馆看就对了</strong>。' +
          '<strong>卫生间的实际约束要说清：校园内的洗手间都在需要刷卡的楼里，' +
          '进校后基本用不到；请在 Broadway 沿街的咖啡店解决（需消费）</strong>',
        '<strong>如果只有半天，这一条的定位要放准：它是「顺路看建筑」而不是「专程景点」。</strong>' +
          '<strong>合理组合是与本区的 Cathedral of Saint John the Divine 连成一个下午</strong>' +
          '（两者相距 10 分钟步行），' +
          '或者从 Harlem 的 125 街坐 1 号线两站下来收个尾。' +
          '<strong>为了看 Low 的台阶而单独跑一趟、又没预约，回报与风险都不划算</strong>'
      ],
      photo: '建筑 <strong>4/5</strong>，人文氛围 <strong>3.5/5</strong>，风光 <strong>2/5</strong>。' +
        'Low 的花岗岩穹顶与 Butler 的檐壁列名是典型的 Beaux-Arts 对称构图；扣分主要是进不去校园时只能拍铁门外的立面。',
      shots: [
        {
          name: 'College Walk 轴线上的 Low Memorial Library 台阶',
          desc: '<strong>站在 College Walk 中轴线（116 街延长线）朝北，' +
            '把 Alma Mater、台阶与花岗岩穹顶叠在一条中轴上。</strong>' +
            '<strong>上午 09:00–11:00 是最好的光（东南侧光打在立柱上）</strong>；' +
            '正午顶光会让柱廊下方死黑。' +
            '<strong>24–35mm 横构图收全立面，85mm 单拍 Alma Mater 的面部与袍褶</strong>' +
            '（找猫头鹰要凑近到两三米内）。' +
            '<strong>两条硬性提醒：一是校园需预登记才能进，拍不到就在 116 街铁门外拍立面；' +
            '二是官方明文「filming of our Information Sessions and Campus Tours is not permitted」' +
            '——参加导览时不得录制，工作人员会要求删除。</strong>' +
            '坐标为 OSM Low Memorial Library 建筑实体。',
          view: [40.808223, -73.961835]
        }
      ],
      access: {
        visit: '<strong>校园核心区（Low 台阶、Butler 立面、St. Paul\'s Chapel）40–60 分钟；' +
          '官方历史导览约 60–75 分钟；' +
          '加校园外的 Morningside Heights 建筑线（Barnard、Teachers College、Riverside Church）再 60–75 分钟。</strong>' +
          '分配：Low 台阶与 Alma Mater 20 分钟、Butler 立面 10 分钟、St. Paul\'s Chapel 15 分钟、' +
          '校园漫步 15 分钟。' +
          '<strong>只看重点 20 分钟</strong>：从 116 街主门进，台阶上站一会儿，回身看 Butler，原路出。' +
          '<strong>务必额外预留 15–30 分钟给门口的核验排队</strong>' +
          '（116 街与 Broadway 北门的二维码访客专用通道只在周一至周五 07:00–19:00 开）。' +
          '<strong>时长为按校园尺度与官方导览时长推算</strong>',
        book: '<strong>核实日期 2026-09-14。这是本条的关键项：普通游客实际上必须预约。</strong>' +
          '<strong>Visitors Center 原文：「the Visitors Center cannot accommodate walk-on tour ' +
          'registrations, self-guided tours, or other visitors to campus」；' +
          '本科招生办原文：「Prior registration is required for all tours」。</strong>' +
          '<strong>两条路径：①&nbsp;在 visit.columbia.edu 或 undergrad.admissions.columbia.edu/visit ' +
          '提前报名导览（名额有限，满了日历上就不显示）；' +
          '②&nbsp;找哥大／Barnard／Teachers College 的在校人员通过 guest registration portal ' +
          '（academic.cuit.columbia.edu/guestaccess）代为登记。</strong>' +
          '<strong>登记规则的官方原文要点：每位在校人员每天可登记最多两位当日客人；' +
          '超过两人须于前一日 17:00 前提交；' +
          '客人凭确认邮件里的二维码加姓名一致的政府签发证件入校；' +
          '「QR codes can only be scanned once for valid entry」，多日需分日登记。</strong>' +
          '<strong>2026 年已公布的导览停办日（因校历与校内活动）：10 月 6 日与 7 日、' +
          '11 月 2 日与 3 日、11 月 25 日</strong>——' +
          '<strong>十月上旬要来的请特别注意 10/6 与 10/7 这两天没有导览</strong>',
        ticket: '<strong>核实日期 2026-09-14。<strong>进校园与参加 Visitors Center 的校园导览均免费</strong>，' +
          '没有门票这回事——本条的门槛全部是门禁与预约，不是钱。</strong>' +
          '<strong>校园内各图书馆、实验室、宿舍一律需要 CUID 刷卡，不对公众开放，也不售票。</strong>' +
          '<strong>校园外的 Morningside Heights 建筑线全部是公共街道，免费。</strong>' +
          '<strong>Riverside Church 的参观与登塔是否收费，2026 年未能从官方渠道确认</strong>' +
          '（可打 <strong>+1 212-870-6700</strong> 问）',
        hours: '<strong>核实日期 2026-09-14。此项官方两种口径直接冲突，两种都列出，不替使用者选：</strong>' +
          '<strong>①&nbsp;Public Safety 校园出入页：当前为「Access Level "I" – ID Only」，' +
          '即「Campus open to active affiliate Columbia University ID (CUID) holders and ' +
          'approved guests only」，并未给出「对公众开放的钟点」；' +
          '可用出入口为 116 街与 Broadway（24/7，北门另设二维码访客专用通道，周一至周五 07:00–19:00）、' +
          '116 街与 Amsterdam Avenue（24/7）、Wien Gate（116 街，Amsterdam 与 Morningside Drive 之间，24/7）、' +
          'Earl Gate（117 街与 Broadway，周一至周五 07:00–19:00）。' +
          '②&nbsp;Visitors Center 的 Tours 页与 Explore the Highlights 页横幅：' +
          '「Access to Columbia\'s Morningside Heights campus is currently open between ' +
          '7:00 a.m. and 5:00 p.m. daily」，即每日 07:00–17:00。</strong>' +
          '<strong>官方同时强调「restrictions may change day-to-day」——限制按天变动。' +
          '因此这一条不存在一个稳定答案：出行当天必须查 publicsafety.columbia.edu 的校园出入页，' +
          '或打 Public Safety +1 212-854-2797 确认</strong>',
        parking: '<strong>不要开车。</strong>Morningside Heights 是校区加住宅区，' +
          '<strong>路边车位极紧、且多为居民优先与清扫日限制</strong>；' +
          '<strong>校内停车场只供校内人员</strong>。' +
          'Broadway 与 Amsterdam Avenue 上有少量商业停车库，按小时计费，' +
          '<strong>2026 年具体费率未核实</strong>',
        walk: '<strong>地铁 1 号线「116 St–Columbia University」站出来就是 116 街与 Broadway 的 College Walk 主门，' +
          '出站步行 1 分钟——这是全纽约离大学正门最近的地铁站之一。</strong>' +
          '<strong>Low Memorial Library 的台阶在主门正前方约 150 米。</strong>' +
          '<strong>到 Cathedral of Saint John the Divine：沿 Amsterdam Avenue 南行到 112 街，约 800 米 / 10 分钟；' +
          '到 Riverside Church：沿 Broadway 北行到 120 街再西行，约 700 米 / 9 分钟；' +
          '到 Tom\'s Restaurant（112 街与 Broadway）：南行约 500 米 / 6 分钟</strong>' +
          '（距离按 OSM 坐标推算）。' +
          '<strong>到 Harlem 的 125 街：1 号线北行两站</strong>'
      },
      notes: [
        '<strong>这一条最实际的建议只有一句：出发前当天查一次校园出入级别，' +
          '并且不要把「进校园」当成计划里的必成项。</strong>' +
          '<strong>级别按天调整，历史上出现过从对所有人开放（Green）到只准住校者进入（Red）的全区间</strong>，' +
          '触发条件通常是校内外的抗议风险。' +
          '<strong>publicsafety.columbia.edu 的校园出入页是唯一权威来源，' +
          '第三方攻略与旅行社页面在这件事上普遍过时</strong>',
        '<strong>进校后要注意：校园是私有财产，出入管理由 Public Safety 执行，' +
          '登记访客的那位校内人员要为该访客的行为负责（官方原文：' +
          '「Anyone registering a guest assumes responsibility for their registered guest(s) ' +
          'and their guest(s)\' actions」）。</strong>' +
          '<strong>不要在草坪上扎营式久坐、不要进需要刷卡的楼、被要求出示证件时配合。</strong>' +
          '需要紧急协助或在限制时段需入校，官方电话 <strong>+1 212-854-2797</strong>',
        '<strong>摄影：校园内手持拍摄建筑与公共空间一般不受限，但有一条明文禁止——' +
          '官方原文「Due to University Policy, filming of our Information Sessions and Campus Tours ' +
          'is not permitted. Guests who do not comply with this policy will be asked to delete ' +
          'any unauthorized recordings.」</strong>' +
          '<strong>也就是招生说明会与校园导览不得录制，违规会被要求删除。</strong>' +
          '<strong>校园内是否允许三脚架未能从官方渠道确认</strong>，' +
          '按门禁校园的惯例，不要带',
        '<strong>校友身份是一条容易被忽略的通道：官方把「registered alumni」与在校生并列，' +
          '而校友「once on campus」还可以进图书馆。</strong>' +
          '<strong>如果同行者中有哥大校友，先去做校友登记，进校会顺得多</strong>',
        '<strong>St. Paul\'s Chapel 是否对访客开放要单独确认。</strong>' +
          '它属于校园内建筑，<strong>在校园门禁状态下，即使进了校园也可能因活动或礼拜而关闭；' +
          '2026 年的具体开放时间未能从官方渠道确认</strong>',
        '<strong>治安：Morningside Heights 白天是全曼哈顿上城最安稳的一段，' +
          '晚间 Broadway 沿线也一直有学生流动。</strong>' +
          '<strong>需要避开的是两侧的两座坡地公园——东边的 Morningside Park 与西边通往 Riverside Park 的坡道，' +
          '天黑后不要穿行</strong>；' +
          '从东边（Harlem）过来请走 116 街的正规台阶路',
        '<strong>Barnard College 是与哥大隔 Broadway 相望的独立女子学院，' +
          '有自己的一套出入规定，同样不保证公众可进。</strong>' +
          '<strong>想进 Barnard 校园请单独查 barnard.edu 的访客页面，' +
          '不要以为哥大的访客登记同时适用</strong>'
      ],
      images: [
        { url: 'img/low-memorial-library-at-columbia-university-12-17-2025-c8fa951f.jpg',
          cap: 'Low Memorial Library 的台阶与全花岗岩穹顶，2025 年摄 · Magpieturtle / CC BY 4.0' },
        { url: 'img/butler-library-columbia-university-7746b6de.jpg',
          cap: 'Butler Library 北立面与檐壁上的古典作者名 · JSquish / CC BY-SA 4.0' },
        { url: 'img/2014-columbia-university-alma-mater-64748ecc.jpg',
          cap: 'Daniel Chester French 1903 年的 Alma Mater 坐像 · Beyond My Ken / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'neue-galerie',
      n: 9,
      name: '新画廊',
      en: 'Neue Galerie New York',
      must: 3,
      score: 2.5,
      tldr: 'Klimt「金衣女人」所在。展厅要到 2026-11-12 才随整修重开；$28，周二闭馆，12 岁以下禁入。',
      tags: [
        { t: '$28 固定票价', c: 'paid' },
        { t: '周二闭馆', c: 'risk' },
        { t: '12 岁以下禁入', c: 'risk' },
        { t: '展厅 11/12 才重开', c: 'risk' }
      ],
      highlights: [
        '<strong>这里只有一件东西是真正的理由：Gustav Klimt 1907 年的 ' +
          '《Adele Bloch-Bauer I》，通称「金衣女人（Woman in Gold）」。</strong>' +
          '<strong>Ronald Lauder 2006 年以 1.35 亿美元买下它，当时是全世界画作成交价的最高记录</strong>。' +
          '而它之所以能被买卖，是因为<strong>同一年奥地利仲裁庭把它判还给 Adele 的侄女 ' +
          'Maria Altmann——这幅画 1938 年被纳粹从 Bloch-Bauer 家族没收，' +
          '此后在维也纳 Belvedere 挂了六十年</strong>。' +
          '<strong>这场返还诉讼就是 2015 年电影《Woman in Gold》的原型</strong>。' +
          '同馆还有 Klimt 的《Adele Bloch-Bauer II》曾经展出过的位置' +
          '（该画已由 Lauder 出售，<strong>是否在馆内展出请到场确认</strong>）',
        '<strong>本馆的定位很窄，这是它值不值得去的关键：只做 20 世纪初的奥地利与德国艺术与设计。</strong>' +
          '<strong>二楼是维也纳 1900（Klimt、Schiele、Kokoschka，以及 Wiener Werkstätte 的家具、银器、玻璃）；' +
          '三楼是德国部分（Die Brücke、Der Blaue Reiter、Bauhaus、新客观主义）。</strong>' +
          '<strong>Egon Schiele 的素描与水彩收藏在美国是最强的一批</strong>。' +
          '<strong>如果对这个时期没有兴趣，这里没有第二条理由——它不是「小型 Met」，' +
          '而是一家专题馆</strong>',
        '<strong>房子本身是 1914 年的 William Starr Miller House，' +
          'Carrère &amp; Hastings 设计（同一家事务所做了纽约公共图书馆总馆）</strong>，' +
          '法国新古典风格的五大道私邸，<strong>后来是 Cornelius Vanderbilt III 夫人的住所</strong>。' +
          '<strong>Neue Galerie 2001 年由 Ronald Lauder 与 Serge Sabarsky 创办</strong>，' +
          '两人都是奥地利裔，Sabarsky 在开馆前去世。' +
          '<strong>2026 年秋天正好是创馆 25 周年</strong>',
        '<strong>Café Sabarsky 在一楼，它不是博物馆的附属餐厅，而是很多人来这里的主要目的。</strong>' +
          '<strong>整间咖啡馆是按世纪之交维也纳咖啡馆复原的，而且用的是真东西：' +
          'Josef Hoffmann 的灯具、Adolf Loos 的家具、' +
          '用 1912 年 Otto Wagner 织物做面的长排座椅，角落里一台 Bösendorfer 三角钢琴。</strong>' +
          '<strong>菜单是维也纳菜（Executive Chef Christopher Engel）</strong>，' +
          '甜点里 Sachertorte、Apfelstrudel、Milchrahmstrudel、Kaiserschmarren 是招牌。' +
          '那台钢琴用于馆内的 Cabaret at Café Sabarsky 与室内乐演出'
      ],
      tour: [
        '<strong>2026 年最关键的一条，先说，否则容易白跑：整栋楼在 2026 年夏季因整修关闭，' +
          '而重开是分两步走的。</strong>' +
          '<strong>官方原文：Café Sabarsky、Book Store 与 Design Shop ' +
          '「will resume regular hours of operation on Thursday, October 1」（2026 年 10 月 1 日）；' +
          '而「The museum\'s galleries, which are located on the second and third floors of the building, ' +
          'will reopen to the public with the "25th Anniversary Exhibition," ' +
          'which debuts on Thursday, November 12, 2026.」</strong>' +
          '<strong>换句话说：2026 年 10 月 1 日至 11 月 11 日这段时间，' +
          '咖啡馆与商店可以进，但二三楼的展厅不开，看不到「金衣女人」。' +
          '11 月 12 日起展厅才恢复，首展是 25 周年特展（2026-11-12 至 2027-01-11）。</strong>' +
          '<strong>十月来这一站只能当成「维也纳咖啡馆」来，不要当成美术馆</strong>（核实日期 2026-09-14）',
        '<strong>展厅恢复之后怎么逛：这馆很小，两层展厅，90 分钟到顶，路线几乎没有选择余地。</strong>' +
          '<strong>进门后直接上二楼，先找《Adele Bloch-Bauer I》——' +
          '它有自己的一个主位，不用满屋子找。</strong>' +
          '<strong>不能错过的三件：①&nbsp;《Adele Bloch-Bauer I》；' +
          '②&nbsp;Egon Schiele 的素描与水彩（本馆最有分量的一批纸上作品）；' +
          '③&nbsp;二楼的 Wiener Werkstätte 设计品陈列</strong>' +
          '——<strong>这部分容易被当成「配角」走过去，但维也纳工坊的银器与家具是这馆区别于任何美国美术馆的地方</strong>。' +
          '<strong>可以快走的是三楼的德国部分</strong>：' +
          '如果不专门对 Die Brücke 与 Bauhaus 有兴趣，20 分钟足够',
        '<strong>票价与省钱的门道：这里的票价是固定的，不是建议金额（官方 FAQ 明确说 ' +
          '「No, the admission price is fixed」），但有两条正式的免费通道。</strong>' +
          '<strong>①&nbsp;First Fridays：部分周五 17:00–20:00 免费开放，' +
          '官方注明「Admission is granted on a first-come, first-served basis」，' +
          '而且是「select Fridays」不是每个周五——要去请先在 neuegalerie.org 查具体日期。</strong>' +
          '<strong>②&nbsp;SNAP／EBT 持卡人本人加三位同行者免费，无需预约，入场时出示卡即可。</strong>' +
          '<strong>没有「纽约州居民自定金额」这类优惠——本馆与 The Met、AMNH 不同，' +
          '外地游客与本地人同价</strong>',
        '<strong>Café Sabarsky 的排队要按最坏情况准备，这是本条最实际的一段。</strong>' +
          '<strong>官方规则原文：「Guests are seated on a first-come, first-served basis for ' +
          'breakfast and lunch. Dinner reservations are available via Resy.」' +
          '——早餐与午餐一律现场排队、不接受预订，只有晚餐可以在 Resy 上订。</strong>' +
          '<strong>唯一的插队办法写在官方页面上：' +
          '「Neue Galerie Members at the Sustaining level and above may make reservations ' +
          'for breakfast, lunch, and dinner」——Sustaining 级别及以上的会员可以预订。</strong>' +
          '<strong>实际排队情况（来自访客反馈，非官方数据）：' +
          '11:00 前后就开始排队，午餐等位 30–40 分钟，周日更长；' +
          '楼下另有一间同菜单的副厅，等位会快一些但没有原厅的氛围。</strong>' +
          '<strong>官方另有一条提醒：16:00 之后开始备晚餐，此时的 walk-in 名额很有限。</strong>' +
          '<strong>合理做法：把它排在 09:00–10:30 的早餐时段（同样的厅、同样的甜点、几乎不用等），' +
          '或 14:00–15:30 的午后</strong>',
        '<strong>寄存、安检与馆内规矩：这是一栋 1914 年的私邸改的馆，空间窄、楼梯陡，' +
          '所以对随身物品的限制比大馆更严。</strong>' +
          '<strong>大包、背包与伞须在入口寄存；官方明文「shirts and shoes are required to enter」' +
          '（含博物馆、商店与咖啡馆）。</strong>' +
          '<strong>安检队伍很短——这里的日常客流远小于 The Met 与 Guggenheim，' +
          '进门几乎不排队</strong>，' +
          '<strong>真正要排的是咖啡馆</strong>。' +
          '<strong>卫生间在馆内，规模小、午餐时段会排队</strong>',
        '<strong>怎么把它排进本区：它在 1048 Fifth Avenue（86 街口），' +
          '在 The Met（82 街）与 Guggenheim（89 街）正中间，三家在同一条街上、彼此步行 5–7 分钟。</strong>' +
          '<strong>最省事的组合是：上午 The Met → 中午 Café Sabarsky 吃维也纳菜 → ' +
          '下午 Neue Galerie 展厅 90 分钟 → 步行到 Guggenheim。</strong>' +
          '<strong>但要注意闭馆日不重叠：The Met 周三闭馆，Neue Galerie 周二闭馆</strong>——' +
          '<strong>周二来 Museum Mile 的话本馆去不了，周三来则 The Met 去不了</strong>'
      ],
      photo: '建筑与室内 <strong>3/5</strong>，藏品 <strong>不适合拍照</strong>。' +
        '这是一家以观看为主的小馆，展厅摄影政策未能核实且空间狭窄，篇幅应该放在看什么与排队上。',
      shots: [
        {
          name: '1048 Fifth Avenue 的立面与入口',
          desc: '<strong>唯一可靠的机位在馆外：站在第五大道对面（中央公园一侧的人行道）' +
            '拍这栋 1914 年 Carrère &amp; Hastings 法国新古典私邸的立面。</strong>' +
            '<strong>下午 15:00–17:00 西斜光正打在立面上（房子朝西对着公园）</strong>，' +
            '<strong>35–50mm 横构图，把 86 街转角的两个立面一起收进来</strong>。' +
            '<strong>展厅内的摄影政策未能从官方渠道确认</strong>——' +
            '按维也纳分离派与表现主义作品的普遍借展条件，' +
            '<strong>应假定展厅禁止拍照，到场以门口标识与工作人员指示为准；三脚架不要带</strong>。' +
            '坐标为 OSM Neue Galerie 建筑实体。',
          view: [40.781224, -73.960237]
        }
      ],
      access: {
        visit: '<strong>展厅 60–90 分钟（二楼维也纳 45–60 分钟、三楼德国 20–30 分钟）；' +
          '加 Café Sabarsky 请另算 1.5–2 小时（等位 30–40 分钟 + 用餐 60 分钟）。</strong>' +
          '<strong>只看重点 40 分钟</strong>：直上二楼看《Adele Bloch-Bauer I》、' +
          'Schiele 的纸上作品与 Wiener Werkstätte 陈列，三楼跳过。' +
          '<strong>官方未给建议参观时长，以上为按两层展厅规模推算。</strong>' +
          '<strong>注意官方硬性截止：「Final entry to the galleries is at 5:30 p.m.」' +
          '——展厅最后入场 17:30，比 18:00 闭馆早半小时，别按闭馆时间掐</strong>',
        book: '<strong>核实日期 2026-09-14。不需预约。</strong>' +
          '官方原文「While you are always welcome to purchase same-day admission at the museum, ' +
          'Advance Admission tickets are also available for purchase online」' +
          '——现场买当日票与网上提前买都行，<strong>提前票的唯一好处是省去窗口排队</strong>。' +
          '<strong>会员可免排队入场（skip the line）。</strong>' +
          '<strong>Café Sabarsky：早餐与午餐不接受预订，只能现场排队；' +
          '晚餐走 Resy 预订；Cabaret at Café Sabarsky 是另行售票的演出。' +
          'Sustaining 级别及以上会员可预订全部三餐（联系 membership@neuegalerie.org）。</strong>' +
          '另有自助数字导览、私人导览与学校团体参观三类选项',
        ticket: '<strong>核实日期 2026-09-14，neuegalerie.org 官方票价页与 FAQ 口径一致：' +
          '<strong>General Admission $28、Seniors（65 岁及以上）$18、' +
          'Students 与 Educators $15（须出示有效证件）、' +
          'Visitors with Disabilities $15、会员免费。</strong></strong>' +
          '<strong>官方 FAQ 明确这是固定价而非建议价：' +
          '「No, the admission price is fixed at a price of $28, regular admission; $18, seniors; ' +
          'and $15, students, educators and persons with disabilities.」' +
          '——注意此前部分资料写 $30，2026 年的官方数字是 $28。</strong>' +
          '<strong>儿童政策（这是本馆最特殊的一条，2026 年仍然有效）：' +
          '官方原文「Children under the age of 12 years old are not admitted to the galleries ' +
          'during regular museum hours」——12 岁以下在常规开放时段不得进入展厅；' +
          '「those aged 12 to 16 must be accompanied by an adult」，' +
          '且 12–16 岁按 Students 档 $15；' +
          '「Infants may be brought into the galleries at no charge, provided they are in a ' +
          'carrier or sling on the front of an adult」——婴儿须用前挂式背带或吊带方可免费带入。' +
          '官方解释这项政策的理由是保护展出作品与维持这栋房子的时代陈设。</strong>' +
          '<strong>两条免费通道：First Fridays 部分周五 17:00–20:00 免费（先到先入）；' +
          'SNAP／EBT 持卡人本人加三位同行者免费、无需预约。</strong>' +
          '<strong>Café Sabarsky 与商店可单独进入、不需博物馆门票</strong>',
        hours: '<strong>核实日期 2026-09-14。本条需要分「整修前后」两段看，' +
          '这是 2026 年最容易搞错的一项：</strong>' +
          '<strong>①&nbsp;当前（2026 年夏）状态，官方原文：' +
          '「Neue Galerie New York – including the galleries, shops, and Café Sabarsky – ' +
          'is closed for the summer. We are undertaking a multi-phased construction project ' +
          'to enhance our historic building and fortify it for the future. ' +
          'Our doors will reopen in Autumn 2026.」——全馆关闭。</strong>' +
          '<strong>②&nbsp;2026 年 10 月 1 日（周四）起：Café Sabarsky、Book Store、Design Shop 恢复营业。' +
          '商店为 Monday, Wednesday–Sunday, 10 a.m. to 6 p.m.（Closed Tuesday）；' +
          '餐饮为 Monday, 9 a.m. to 6 p.m.、Wednesday–Sunday, 9 a.m. to 9 p.m.（Closed Tuesday）。</strong>' +
          '<strong>③&nbsp;2026 年 11 月 12 日（周四）起：二三楼展厅随 25 周年特展重开。' +
          '博物馆常规时间为 Wednesday–Monday 10 a.m. to 6 p.m.（Closed Tuesday），' +
          '展厅最后入场 17:30。</strong>' +
          '<strong>也就是每周二闭馆——官方 FAQ 解释每周只开六天是为了维护这栋历史建筑。</strong>' +
          '<strong>官方另注「The Neue Galerie is closed or has modified hours on select holidays」' +
          '与「Café Sabarsky also has modified hours on evenings when we host special events」；' +
          '2026 年具体的节假日调整清单未能逐日核实</strong>，' +
          '可打 <strong>+1 212-628-6200</strong>（博物馆）或 <strong>+1 212-288-0665</strong>（咖啡馆）确认',
        parking: '<strong>无自有停车场，第五大道与 86 街一带是上东区最难停车的路段之一。</strong>' +
          '<strong>商业停车库在 Madison Avenue 与 Park Avenue 之间的 85–87 街上，' +
          '按小时计费且价格高，2026 年具体费率未核实。</strong>' +
          '地铁直达，不必自驾',
        walk: '<strong>地铁 4／5／6 线「86 St」站（Lexington Avenue 口）下，' +
          '沿 86 街西行三个街区到第五大道，步行约 8–10 分钟；' +
          'Q 线「86 St」站（Second Avenue 口）更远，约 14 分钟。</strong>' +
          '<strong>馆址 1048 Fifth Avenue，就在 86 街东北角，正对中央公园。</strong>' +
          '<strong>到 The Met（82 街）沿第五大道南行约 400 米 / 步行 5 分钟；' +
          '到 Guggenheim（89 街）沿第五大道北行约 300 米 / 步行 4 分钟</strong>' +
          '（按 OSM 坐标推算）。' +
          '<strong>出门过一条马路就是中央公园的 Reservoir 一带</strong>，' +
          '走完这三家馆想喘口气的话，公园就在对面'
      },
      notes: [
        '<strong>2026 年 10 月至 11 月初来的人请特别注意：能吃到 Café Sabarsky，但看不到 Klimt。</strong>' +
          '<strong>展厅 11 月 12 日才随 25 周年特展重开</strong>，' +
          '<strong>如果「金衣女人」是来这一站的唯一理由，那就不要在 11/12 之前来</strong>。' +
          '出发前请复核 neuegalerie.org 的首页公告——' +
          '<strong>整修工期是分阶段的，日期有可能再变</strong>',
        '<strong>12 岁以下儿童不得进入展厅这一条是硬规定，2026 年仍然有效，现场不通融。</strong>' +
          '<strong>带小孩的家庭要么改去本区的 AMNH，要么只进一楼的 Café Sabarsky 与商店</strong>' +
          '（<strong>咖啡馆与商店不受此限，且不需要博物馆门票</strong>）。' +
          '<strong>12–16 岁须成人陪同；婴儿只有在前挂式背带里才能免费带进展厅，' +
          '推车与后背式背带不行</strong>',
        '<strong>展厅摄影政策未能从官方渠道确认。</strong>' +
          '<strong>这类馆的通例是常设可手持拍摄、借展作品禁拍，而本馆藏品多涉借展与私人收藏</strong>，' +
          '<strong>请按「先看标识、不确定就不拍」处理，并且不要带三脚架</strong>' +
          '（这栋房子的展厅极窄，三脚架实际也无法展开）。' +
          '要确认可打 +1 212-628-6200',
        '<strong>周二闭馆这一点要和本区其它馆对齐来排：' +
          'The Met 与 The Met Cloisters 周三闭馆、Neue Galerie 周二闭馆、' +
          'Studio Museum in Harlem 周一与周二闭馆。</strong>' +
          '<strong>周二在 Museum Mile 上唯一稳开的大馆是 The Met；' +
          '周三则是 Guggenheim 与 Studio Museum</strong>',
        '<strong>Café Sabarsky 想少排队就吃早餐。</strong>' +
          '<strong>09:00 开门时同一间厅、同一份甜点单，几乎不用等；' +
          '而 11:00 之后门口就开始排队</strong>。' +
          '<strong>16:00 之后开始备晚餐，此时 walk-in 只看有无空位与取消；' +
          '晚餐要吃就提前在 Resy 上订</strong>（<strong>官方与第三方均提到有 no-show 费用，' +
          '订了别忘</strong>）',
        '<strong>这一站的性质要说清：它是一家专题小馆，不是「必去」清单上的项目。</strong>' +
          '<strong>对维也纳 1900、Klimt、Schiele 或 Wiener Werkstätte 有兴趣的人，' +
          '它在美国是不可替代的；如果没有，$28 看两层小展厅的回报有限</strong>，' +
          '<strong>同样的钱与时间放在 The Met 上更划算</strong>。' +
          '反过来说，<strong>Café Sabarsky 本身值得专程</strong>——' +
          '这是把它排进行程的另一个独立理由'
      ],
      images: [
        { url: 'img/entrance-to-the-neue-galerie-new-york-b4403fc6.jpg',
          cap: '1048 Fifth Avenue 的入口立面 · Mike Peel（www.mikepeel.net） / CC BY-SA 4.0' },
        { url: 'img/gustav-klimt-1907-adele-bloch-bauer-i-neue-galerie-new-york-ab96849d.jpg',
          cap: 'Gustav Klimt《Adele Bloch-Bauer I》，1907 年 · Gustav Klimt / Public domain' },
        { url: 'img/shop-in-the-neue-galerie-new-york-81a43f5c.jpg',
          cap: '一楼 Design Shop 与 Book Store 所在的主层空间 · Mike Peel（www.mikepeel.net） / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'riverside-church',
      n: 10,
      name: '河滨教堂',
      en: 'The Riverside Church',
      must: 3,
      score: 4,
      tldr: '北美最高的教堂塔楼，塔顶 360° 露天观景廊 + 74 口钟的世界最大调音钟。登塔 $20，周三至周六两场。',
      tags: [
        { t: '登塔 $20', c: 'paid' },
        { t: '中殿周日免费', c: 'free' },
        { t: '塔楼须 12 岁以上', c: 'risk' },
        { t: '周一周二不开', c: 'risk' }
      ],
      highlights: [
        '<strong>官方口径是「the tallest church tower in North America」——' +
          '392 英尺、24 层，而这座塔真正的身份是一栋钢框架高楼外面包了一层哥特石壳。</strong>' +
          '<strong>1930 年落成，仿的是法国 13 世纪的 Chartres 主教座堂</strong>，' +
          '但内部结构是同时代摩天楼的做法，塔里有电梯——' +
          '<strong>这也是它能让普通游客登顶、而本区那座 St. John the Divine 只能徒步爬 124 英尺的原因</strong>。' +
          '<strong>主要出资人是 John D. Rockefeller Jr.</strong>，' +
          '教堂从创立起就标榜 interdenominational、interracial、international 三条原则',
        '<strong>建筑师是 Charles Collens——本区 The Met Cloisters 的同一位设计者。</strong>' +
          '<strong>这两栋房子出自同一人之手：一栋在曼哈顿最北端把五座法国修道院回廊拼起来，' +
          '一栋在 120 街仿了 Chartres</strong>；' +
          '<strong>两者相隔 6 公里、都在哈德逊河东岸的崖线上，对着看是本区最有意思的一条建筑线索</strong>',
        '<strong>塔里那套钟是这一站真正不可替代的东西：Laura Spelman Rockefeller Memorial Carillon，' +
          '74 口钟，以 Rockefeller 的母亲命名。</strong>' +
          '<strong>其中最大的一口重 20 吨，官方称是世界上最大的调音钟（largest tuned bell）；' +
          '最小的一口只有 10 磅</strong>——' +
          '<strong>同一套乐器里最大与最小的钟相差四千倍，这个对比在塔梯上是能亲眼看到的，' +
          '因为登塔路线会经过钟室</strong>',
        '<strong>1967 年 4 月 4 日，Martin Luther King Jr. 在这里发表了 ' +
          '《Beyond Vietnam: A Time to Break Silence》——他第一次公开全面反对越战的演讲，' +
          '当时被包括民权运动内部在内的各方广泛批评。</strong>' +
          '<strong>整整一年之后的同一天，他在孟菲斯被刺杀。</strong>' +
          '1990 年 Nelson Mandela 出狱后访美也在这里讲过话。' +
          '<strong>这座教堂在 20 世纪美国公共生活里的位置，' +
          '比它作为一栋建筑的知名度要高得多</strong>'
      ],
      tour: [
        '<strong>这一站的核心是 Tower Tour，不是教堂本身——先把场次记住，因为它一天只有两场。</strong>' +
          '<strong>官方排期：周三至周六 11:00 与 14:00 各一场；周日只有 13:30 一场，' +
          '而周日那场「oftentimes featuring a live carillon performance」——常常带现场钟乐演奏。</strong>' +
          '<strong>周一与周二没有导览，教堂也不对访客开放。</strong>' +
          '每场约 1 小时，<strong>名额有限（官方写「limited on each tour」），旺季建议提前在 trcnyc.org 买票</strong>',
        '<strong>Tower Tour 的实际内容与顺序（官方描述）：' +
          '先讲一段教堂简史并看中殿（Nave），然后上塔，' +
          '途中经过钟室看那 74 口钟，最后到塔顶的露天观景廊（outdoor penthouse gallery）看 360° 全景。</strong>' +
          '<strong>塔顶能看到的四样东西值得先知道：哈德逊河与对岸新泽西、' +
          '街对面的 Grant\'s Tomb、南边的 Columbia University 校园、以及东边的 West Harlem。</strong>' +
          '<strong>这是本区唯一一个能从高处俯看整个 Morningside Heights 的位置</strong>，' +
          '而且<strong>是露天的，没有玻璃</strong>——' +
          '这一点和帝国大厦、洛克中心那种收费观景台的体验完全不同',
        '<strong>不想付钱登塔的话，中殿有一条免费的路，但只在周日成立。</strong>' +
          '<strong>官方原文「If you wish to view the Nave without attending the service, ' +
          'you are welcome to enter before or after worship at no charge」' +
          '——周日礼拜前后可免费进中殿看，不必参加礼拜。</strong>' +
          '<strong>礼拜时间是 11:00（10:30 起有管风琴与钟乐前奏），' +
          '全程约 1 小时 15 分至 1 小时 30 分、最晚 12:30 结束；每月第一个周日有圣餐。</strong>' +
          '<strong>也就是说周日 09:00–10:30 与 12:30–15:00 这两段是免费看中殿的窗口</strong>' +
          '（<strong>周三至周六中殿不单独开放，只能通过 Tower Tour 看到</strong>，' +
          '这一点见 access.hours 里的两种官方口径）',
        '<strong>参加礼拜的礼仪与着装：这是一间以社会议题讲道著称的自由派教堂，' +
          '气氛比多数游客想象的松，但基本规矩仍在。</strong>' +
          '<strong>做法：从 490 Riverside Drive 主门进（周日才开），在安保台问中殿方向；' +
          '晚到的从后排入座，不要沿中殿向前走动；手机静音；' +
          '礼拜进行中不要拍照，尤其不要拍唱诗班与讲道者。</strong>' +
          '<strong>着装不要求正装，但不要穿无袖上衣、短裤与人字拖，帽子进堂要脱。</strong>' +
          '<strong>官方没有对游客单列着装条款（与 Harlem 的 Abyssinian 不同，那边是硬性规定）</strong>，' +
          '但按去教堂而不是按看表演准备',
        '<strong>怎么和本区其它条目串起来：这一站最省事的排法是与 Columbia 校园连成一条线。</strong>' +
          '<strong>地铁 1 号线「116 St–Columbia University」站出来，先看哥大主门与 Low 台阶' +
          '（能进则进，进不去就看立面），沿 Broadway 北行到 120 街再西行，约 700 米 / 9 分钟到本堂；' +
          '出来过一条街就是 Grant\'s Tomb（General Grant National Memorial，' +
          '美国国家公园管理局管辖、免费）。</strong>' +
          '<strong>整条线加上 112 街的 Cathedral of Saint John the Divine，' +
          '是一个结构完整的半天——两座大教堂加一所常春藤校园，全部在 Morningside Heights 之内</strong>',
        '<strong>餐饮与卫生间：堂内没有餐厅，Welcome Center 一侧有礼品店。</strong>' +
          '<strong>卫生间在 91 Claremont Avenue 入口进去的一层，数量不多。</strong>' +
          '<strong>吃饭往南走到 Broadway 的 110–116 街学生商圈，步行 10 分钟、便宜且选择多</strong>' +
          '——和 Columbia 那一条是同一片餐饮区',
        '<strong>体力与恐高要如实评估：塔顶观景廊是露天的，登塔过程有电梯但也有石梯段。</strong>' +
          '<strong>官方硬性规定参加者须满 12 岁</strong>，' +
          '<strong>怕高或不愿意走窄梯的人，把钱省下来只看周日的免费中殿就够</strong>'
      ],
      photo: '城市全景 <strong>4.5/5</strong>，建筑 <strong>4/5</strong>，室内 <strong>3.5/5</strong>。' +
        '塔顶是露天无玻璃的 360° 廊道，这在纽约的付费高点里极少见；扣分是场次少、必须跟团上去，没法自由选时段。',
      shots: [
        {
          name: '塔顶露天观景廊的 360° 全景',
          desc: '<strong>这是本区唯一能俯看 Morningside Heights 全貌的位置，而且没有玻璃反光的问题。</strong>' +
            '<strong>两场里选 14:00 那场：西斜光照亮哈德逊河与对岸 Palisades，' +
            '11:00 那场朝西是逆光</strong>。' +
            '<strong>24–35mm 拍全景带前景的石栏与滴水兽；' +
            '70–200mm 单拍街对面 Grant\'s Tomb 的圆顶与南侧 Columbia 的校园屋顶群。</strong>' +
            '<strong>廊道很窄且是跟团上去的，停留时间有限，' +
            '换镜头的时间不够——建议一机一变焦。三脚架不要带。</strong>' +
            '坐标为 OSM Riverside Church 建筑实体（塔顶无独立节点）。',
          view: [40.811787, -73.963145]
        }
      ],
      access: {
        visit: '<strong>Tower Tour 约 1 小时（官方口径「Hour-long tours」），' +
          '含中殿讲解、钟室与塔顶观景廊。</strong>' +
          '<strong>只看周日的免费中殿：20–30 分钟。</strong>' +
          '<strong>加上街对面的 Grant\'s Tomb（免费）再 30 分钟；' +
          '与 Columbia 校园连成一条线按 2.5–3 小时算。</strong>' +
          '分配（<strong>按官方导览时长与建筑规模推算</strong>）：' +
          '中殿与简史 15 分钟、上塔与钟室 15 分钟、<strong>塔顶观景廊 20–25 分钟（本站重点）</strong>、下塔 10 分钟。' +
          '<strong>务必提前 15 分钟到 Welcome Center 集合</strong>',
        book: '<strong>核实日期 2026-09-14。中殿（周日）免费进入，不需预约。</strong>' +
          '<strong>Tower Tour 建议提前在 trcnyc.org/tours 买票</strong>——' +
          '官方注明每场名额有限，也可到 Welcome Center / Gift Shop 现场买' +
          '（<strong>该店周三至周六 10:00–16:00、周日 10:00–14:30，主要节假日关门</strong>）。' +
          '<strong>场次：周三至周六 11:00 与 14:00；周日 13:30 一场（常带现场钟乐演奏）。' +
          '周一与周二无导览。</strong>' +
          '<strong>官方另挂过一条季节性停办公告：2026 年 7 月 20 日至 8 月 19 日期间无导览、礼品店关闭' +
          '——该时段已过，但说明这家会有整段停办期，出行前请查官网</strong>',
        ticket: '<strong>核实日期 2026-09-14，trcnyc.org 官方导览页原文：' +
          '<strong>「Cost: $20 per person Wednesday-Saturday / $25 per person on Sundays」' +
          '——登塔导览周三至周六每人 $20，周日每人 $25</strong>' +
          '（周日贵 $5，换来的是常有的现场钟乐演奏）。</strong>' +
          '<strong>年龄下限：参加者须满 12 岁。</strong>' +
          '<strong>免费部分：周日礼拜前后进中殿参观免费，官方原文' +
          '「you are welcome to enter before or after worship at no charge」；' +
          '参加周日 11:00 礼拜本身也免费，「All are welcome to attend」。</strong>' +
          '<strong>街对面的 Grant\'s Tomb 由美国国家公园管理局管辖，免费。</strong>' +
          '<strong>是否有老年、学生或儿童折扣票，官方页面未列出、未能从官方渠道确认</strong>，' +
          '可打 <strong>+1 212-870-6700</strong> 或写 welcome@trcnyc.org 问',
        hours: '<strong>核实日期 2026-09-14。此项官方两处页面口径不完全一致，两种都列出：</strong>' +
          '<strong>①&nbsp;Visit 页原文：「The Riverside Church is open to visitors Wednesday through ' +
          'Sunday from 9:00 a.m. – 5:00 p.m. except for major holidays. Please note our Nave ' +
          'sanctuary is closed except on Sundays 9:00 a.m. – 3:00 p.m., except worship from ' +
          '10:30 a.m. – 12:30 p.m.」' +
          '——教堂周三至周日 09:00–17:00 对访客开放，但中殿只在周日 09:00–15:00 开，' +
          '且 10:30–12:30 的礼拜时段除外。</strong>' +
          '<strong>②&nbsp;FAQ 页原文：中殿「Open every Sunday during worship，10:30 AM–12:30 PM，' +
          'Free to visit before or after service」' +
          '——把 10:30–12:30 列为中殿的开放时段。</strong>' +
          '<strong>两者的差别在于礼拜进行中访客能不能进去看。' +
          '稳妥的做法是把参观安排在周日 09:00–10:30 或 12:30–15:00，' +
          '这两段在两种口径下都成立。</strong>' +
          '<strong>周一与周二不对访客开放。</strong>' +
          '<strong>入口两个且开放时间不同：主入口 490 Riverside Drive ' +
          '（官方一处写「opens at 9:30 AM, doors close at 2:00 PM」，另一处写「Open Sundays and ' +
          'during major events」——即平日可能不开）；' +
          '无障碍入口与首选送达地址为 91 Claremont Avenue，Welcome Center 就在这个门里侧。</strong>' +
          '<strong>平日到访请直接走 91 Claremont Avenue 那个门。</strong>' +
          '<strong>2026 年主要节假日的逐日安排未能从官方渠道确认</strong>',
        parking: '<strong>这是本区少见的有自有停车安排的点。官方原文：' +
          '「The Claremont Avenue Garage is operated by iPark, and is accessed from 120th Street ' +
          'between Riverside Drive and Claremont Avenue. Normal hours of operation are daily from ' +
          '6:00 a.m. to 12:00 midnight. There is a fee for parking, with reduced rates available ' +
          'for most worship services. A limited amount of street parking may also be available.」</strong>' +
          '<strong>即 120 街上的 Claremont Avenue 车库，每日 06:00–24:00，收费，' +
          '多数礼拜时段有折扣费率；周边另有少量路边车位。</strong>' +
          '<strong>2026 年具体费率未核实</strong>',
        walk: '<strong>地铁 1 号线「125 St」站（在 Broadway 上，是高架站）下，' +
          '南行并西行约 700 米 / 步行 9–10 分钟；' +
          '或 1 号线「116 St–Columbia University」站下，沿 Broadway 北行到 120 街再西行，' +
          '同样约 700 米 / 9 分钟。</strong>' +
          '<strong>教堂地址 490 Riverside Drive（120 街口），无障碍入口在 91 Claremont Avenue。</strong>' +
          '<strong>到 Grant\'s Tomb：出门过 Riverside Drive 即到，步行 2 分钟；' +
          '到 Columbia 主门（116 街与 Broadway）：约 700 米 / 9 分钟；' +
          '到 Cathedral of Saint John the Divine（112 街与 Amsterdam Avenue）：约 1.2 公里 / 15 分钟；' +
          '到 Harlem 的 125 街商业带：1 号线一站，或东行步行 15 分钟</strong>' +
          '（距离按 OSM 坐标推算）'
      },
      notes: [
        '<strong>周一与周二完全不开，这是本条最容易踩空的一点</strong>——' +
          '<strong>而本区周一与周二恰好也是 Studio Museum in Harlem 与 Neue Galerie 的闭馆日</strong>，' +
          '所以这两天的上城室内项目选择很少，能开的主要是 The Met 与那座未完工的座堂',
        '<strong>Tower Tour 的年龄下限是 12 岁，与 St. John the Divine 的 Vertical Tour 相同。</strong>' +
          '<strong>带小孩的家庭请不要指望到场通融</strong>；' +
          '替代方案是周日免费看中殿，或去街对面的 Grant\'s Tomb',
        '<strong>塔顶是露天的，风、雨与低温会直接影响体验，也可能导致临时不开。</strong>' +
          '<strong>十月中下旬在 392 英尺高处的实际体感会明显低于地面，风也更大——' +
          '外套要比街上多一层</strong>；' +
          '<strong>恶劣天气下是否取消当场导览，未能从官方渠道确认</strong>，' +
          '可当天打 +1 212-870-6700 问',
        '<strong>这仍然是一间在使用中的教堂，礼拜、音乐会、葬礼与社区活动会占用中殿。</strong>' +
          '<strong>礼拜与音乐会进行中禁止拍摄；' +
          '塔顶与钟室的摄影政策未在官方页面列出、未能从官方渠道确认</strong>，' +
          '按导览员现场指示为准，<strong>三脚架不要带</strong>',
        '<strong>钟乐是可以只听不登塔的：教堂全年有 Carillon Recitals（钟乐演奏会），' +
          '而钟声在户外整个 Morningside Heights 都听得到。</strong>' +
          '<strong>周日 10:30 起的礼拜前奏含钟乐，这是不花钱听那 74 口钟最简单的办法</strong>；' +
          '<strong>2026 年的演奏会具体排期请查 trcnyc.org</strong>',
        '<strong>治安：120 街与 Riverside Drive 一带白天正常，是哥大与教堂的势力范围。</strong>' +
          '<strong>但西侧通往 Riverside Park 的坡道与台阶入夜后没有人，不要天黑后走</strong>；' +
          '<strong>Grant\'s Tomb 周边的绿地入夜后同样不要停留</strong>'
      ],
      images: [
        { url: 'img/riverside-church-mar-2026-27-7b44d26f.jpg',
          cap: '从 Riverside Drive 看教堂与塔楼，2026 年 3 月摄 · Epicgenius / CC BY-SA 4.0' },
        { url: 'img/riverside-church-mar-2026-21-f0fdb08c.jpg',
          cap: '392 英尺的塔楼立面细部 · Epicgenius / CC BY-SA 4.0' },
        { url: 'img/riverside-church-mar-2026-40-ae6af627.jpg',
          cap: '仿 Chartres 的哥特石作与入口一带 · Epicgenius / CC BY-SA 4.0' }
      ]
    }
  ]
};
