module.exports = {
  id: 'philadelphia-parkway',
  name: 'Philadelphia · Benjamin Franklin Parkway 与博物馆区',
  navName: 'Philly Parkway',
  color: '#7c5cff',
  lead: '这一区的骨架是一条 2.08 公里的斜轴。<strong>从 Philadelphia Museum of Art 东阶顶量到 City Hall 塔，' +
    '方位角实测 134.7°；反过来从 City Hall 望向美术馆是 314.7°</strong>' +
    '（由 OSM 实体坐标 39.96557／-75.18092 与 39.95240／-75.16358 算得）。' +
    'Benjamin Franklin Parkway 是 1917–1926 年由 Jacques Gréber 按巴黎 Champs-Élysées 的逻辑' +
    '硬切进费城 1682 年正交网格里的，所以它与周围街道全部斜交——' +
    '<strong>这条斜轴既是本区最强的构图资产，也决定了每一个机位的最佳钟点。</strong>' +
    '本区七个点里<strong>三个完全免费且 24 小时可拍</strong>' +
    '（美术馆东阶与东露台、Swann Fountain、Boathouse Row 与 Fairmount Water Works 外景），' +
    '真正需要买票的四个里<strong>只有 Eastern State Penitentiary 是不可替代的摄影目的地</strong>，' +
    '而它恰好是全区唯一允许架三脚架的室内空间。',
  callouts: [
    {
      type: 'good',
      title: 'Parkway 轴线的太阳几何：最佳一小时是上午 10:00–10:45，不是日落',
      html: '<p><strong>先说结论：在 9 月末到 10 月末这个窗口里，太阳从不落在 Parkway 的轴线上。</strong>' +
        '日落方位从 9 月 25 日的 <strong>269.2°</strong> 移到 10 月 22 日的 <strong>256.1°</strong>，' +
        '离轴线的 314.7° 差着 45–59 度；日出方位从 <strong>90.7°</strong> 移到 <strong>103.9°</strong>，' +
        '离 134.7° 也差着 31–43 度。<strong>「夕阳沉在 Parkway 尽头」这张照片在秋季拍不到。</strong></p>' +
        '<p><strong>但真正有用的几何是另一件事：太阳方位每天都会扫过 134.7°。</strong>' +
        '9 月 25 日约在 <strong>10:40</strong>（太阳高度约 39°），10 月 22 日约在 <strong>10:03</strong>（高度约 26°）。' +
        '那一刻太阳<strong>正在你的正后方</strong>，反日点恰好落在 314.7° 上——' +
        '也就是说<strong>站在美术馆东阶顶朝东南望，整条 Parkway、两侧行道树、Logan Square 的圆环' +
        '与尽头的 City Hall 塔全部处于完全正面受光、影子全部藏在物体背后的状态</strong>。' +
        '这是本区唯一一次「轴线对齐」，也是全天光线信息量最大的一小时。</p>' +
        '<p><strong>执行口径：把 10:00–10:45 锁死给 Parkway 轴线，两端都成立。</strong>' +
        '美术馆东阶顶朝东南（134.7°）与 City Hall 一侧朝西北（314.7°）在同一时刻同时顺光。' +
        '<strong>十月比九月更好用</strong>：太阳低 13 度，行道树的立体感与路面的长影都更强，' +
        '而且时刻更早（10:03 比 10:40 人少得多）。</p>' +
        '<p>顺带一个推论：<strong>美术馆东立面（Greek Revival 神庙正面）的法向就是 134.7°</strong>，' +
        '所以它受光区间是太阳方位 44.7°–224.7°，即<strong>从日出一直到约 15:10（9/25）／15:25（10/22）</strong>，' +
        '而 10:40／10:03 那一刻是正打。<strong>这面墙秋季全天有光，跟 Old City 那些朝北的立面完全相反。</strong></p>'
    },
    {
      type: 'warn',
      title: 'Eastern State Penitentiary：10 月 2 日–11 月 7 日被 Halloween Nights 占据，白天照常开但要付代价',
      html: '<p><strong>结论先给：白天的历史参观在整个秋季照常运营，不停、不缩短、不需要额外买 Halloween 的票。</strong>' +
        'easternstate.org 的 Hours of Operation 页原文为 <strong>「March – November: Open Daily, 10:00 a.m. to 5:00 p.m.」</strong>，' +
        '官网首页另注明<strong>最后入场 16:00</strong>。' +
        '而 Halloween Nights 的官方口径是<strong>「open select nights from October 2 through November 7, 2026」</strong>，' +
        '是<strong>夜场</strong>，与白天时段不重叠。</p>' +
        '<p><strong>代价在两处，都要算进来：</strong></p>' +
        '<ul>' +
        '<li><strong>① 五座鬼屋的实体布景整个 10 月都留在牢房区里。</strong>' +
        '官方 FAQ 自己写 Halloween Nights 用的是「Hollywood-quality sets, props, and special FX makeup」，' +
        '并逐一列出五座鬼屋的名字（<strong>Dark Tides、Big Top Terror、Machine Shop、Nightmares、The Crypt</strong>）。' +
        '这些是搭在真实牢房与工场空间里的实体布景，不可能每天早上拆掉晚上再装回去。' +
        '<strong>官方从未公布哪些牢房在白天因布景而关闭，也从未承认白天体验被降级</strong>——' +
        '官网仍宣传白天可看「historic cellblocks、Death Row、Al Capone\'s Cell」。' +
        '但按常识与官方自己的措辞推断，<strong>10 月的白天你会在部分空间里看到搭好的布景、围挡与器材</strong>，' +
        '「1829 年的废墟本身」这个纯粹状态会被稀释。' +
        '<strong>这一条属于推断，未能从官方渠道逐字确认。</strong>' +
        '想拍纯废墟就把这一站排在 <strong>9 月 30 日之前</strong>——' +
        '这是本区唯一一条真正影响日期选择的硬约束。</li>' +
        '<li><strong>② 白天导览团缩班。</strong>官方原文' +
        '「Starting September 8, 2026: Guide-led tours are available at 12:00 pm on weekdays; 11:00 am on Saturdays and Sundays」，' +
        '而夏季是每天三场（10:30／11:30／12:30）。<strong>自助音频导览不受影响、全天可进、不限停留时长。</strong></li>' +
        '</ul>' +
        '<p><strong>价格（官方 FAQ 逐字）：白天票线上 成人 $21、老年 $19、大学生与 7–17 岁 $17；' +
        '现场分别为 $23／$21／$19。夜场 Halloween Nights「Tickets start at $49」</strong>，按夜别浮动，' +
        '另有 Speakeasy 加购 $20、Hospital Flashlight Tour 加购 $13（只在现场售）、停车＋摆渡 $22／$30。' +
        '<strong>夜场无退换，白天票可提前 24 小时免费改退。</strong></p>' +
        '<p><strong>三脚架：这是全区最关键的一条政策差异。</strong>' +
        '<strong>白天时段三脚架是允许的，但必须另买 $10／人／天的「photography equipment pass」，' +
        '且这个 pass 只能在现场售票窗口买，线上买不到</strong>（官方原文：' +
        '「non-members must purchase a daily photography equipment pass if they wish to use a tripod, monopod, or easel while on site... ' +
        'photography equipment passes can only be purchased at the admissions window on site.」）。' +
        '<strong>反过来，Halloween Nights 夜场明文禁三脚架、禁灯、禁闪光灯，五座鬼屋内完全禁拍。</strong>' +
        '→ <strong>要在牢房里架三脚架做包围曝光，只有白天这一条路，而且必须到窗口现买 pass。</strong></p>'
    },
    {
      type: 'good',
      title: 'Philadelphia Museum of Art 的周五 Pay What You Wish 仍在，已延长到 2027 年 6 月 25 日',
      html: '<p>这是本区最有价值的一条核实结果。' +
        '<strong>press.philamuseum.org 于 2026 年 9 月 3 日发布的新闻稿逐字写明：' +
        '「the extension of Pay What You Wish (PWYW) Friday Nights through the last Friday of its fiscal year, June 25, 2027」，' +
        '「Every Friday evening after 5 p.m., visitors can choose how much to pay for admission」。</strong>' +
        '原定 2026 年 9 月 4 日结束，因为周五晚客流较 2025 年同期上涨 <strong>87%</strong>' +
        '（36,411 人次对 19,513 人次）而延期。资金由 William Penn Foundation 与私人捐助方补足。</p>' +
        '<p><strong>对你的意义：周五 17:00–20:45 可以按自己出价进馆，而正价是 $30。</strong>' +
        '并且周五是<strong>唯一开到 20:45 的一天</strong>——9 月 25 日日落 18:53、10 月 22 日日落 18:12，' +
        '<strong>意味着周五是全周唯一能「在馆内待到天黑、再走出来直接拍东阶蓝调」的一天</strong>。' +
        '这两件事叠在一起，把周五变成本区唯一的最优日。</p>' +
        '<p>注意<strong>Rodin Museum 不跟着延长</strong>：它周五也只开到 17:00（详见该条目）。</p>'
    },
    {
      type: 'info',
      title: '各馆开放时间与闭馆日一览（本次逐一核实）',
      html: '<ul>' +
        '<li><strong>Philadelphia Museum of Art 主馆</strong>：周一 10:00–17:00、' +
        '<strong>周二与周三闭馆</strong>、周四 10:00–17:00、<strong>周五 10:00–20:45</strong>、周六日 10:00–17:00。' +
        '成人 $30、老年 $28、学生 $14、<strong>18 岁及以下免费</strong>；票含两天与同日 Rodin Museum。</li>' +
        '<li><strong>Rodin Museum</strong>：<strong>周一 10:00–17:00、周二／周三／周四三天闭馆</strong>、' +
        '周五／周六／周日 10:00–17:00。<strong>建议票价（pay what you wish）成人 $15</strong>。</li>' +
        '<li><strong>The Barnes Foundation</strong>：<strong>周四至周一 11:00–17:00，周二与周三闭馆</strong>' +
        '（会员 10:00 起）。成人 $30、老年 $28、<strong>大学生与 13–18 岁各 $5</strong>、12 岁及以下免费；含特展、<strong>票有效两天</strong>。</li>' +
        '<li><strong>Eastern State Penitentiary</strong>：<strong>3 月至 11 月每日 10:00–17:00，最后入场 16:00，秋季无每周闭馆日</strong>。</li>' +
        '<li><strong>Cathedral Basilica of Saints Peter and Paul</strong>：周日 8:00–19:30、' +
        '<strong>周一至周五 7:00–17:00</strong>、周六 9:00–18:30。免费。</li>' +
        '<li><strong>Swann Memorial Fountain、Boathouse Row、Fairmount Water Works 外景、美术馆东阶与东露台：' +
        '全部露天、24 小时、免费。</strong></li>' +
        '</ul>' +
        '<p><strong>把三个闭馆日叠起来看，周二和周三是本区的死亡日</strong>：' +
        '美术馆、Rodin、Barnes 三家同时闭馆，只剩 Eastern State、Cathedral 与全部露天点位。' +
        '<strong>周四 Rodin 单独闭馆</strong>（美术馆与 Barnes 都开），这是最容易踩的坑。' +
        '<strong>Barnes 11:00 才开门</strong>，正好与上午 10:00–10:45 的轴线时段不冲突。</p>'
    },
    {
      type: 'tip',
      title: '日出日落、方位与秋色时间窗',
      html: '<p>坐标取美术馆 39.96557／-75.18092。' +
        '<strong>2026 年美国夏令时到 11 月 1 日才结束，整个 9 月末至 10 月末窗口全部是 EDT</strong>，' +
        '以下时刻均为 EDT（自算，NOAA 太阳位置算法）：</p>' +
        '<ul>' +
        '<li><strong>9 月 25 日</strong>：日出 <strong>06:52</strong>（方位 <strong>90.7°</strong>），' +
        '日落 <strong>18:53</strong>（方位 <strong>269.2°</strong>），正午 12:52 高度 <strong>49.0°</strong>。</li>' +
        '<li><strong>10 月 5 日</strong>：日出 07:02（95.8°），日落 18:37（264.2°），正午高度 45.1°。</li>' +
        '<li><strong>10 月 15 日</strong>：日出 07:12（100.7°），日落 18:22（259.4°），正午高度 41.3°。</li>' +
        '<li><strong>10 月 22 日</strong>：日出 <strong>07:19</strong>（方位 <strong>103.9°</strong>），' +
        '日落 <strong>18:12</strong>（方位 <strong>256.1°</strong>），正午 12:45 高度 <strong>38.8°</strong>。</li>' +
        '<li><strong>10 月 31 日</strong>：日出 07:29（108.0°），日落 18:00（252.0°），正午高度 35.8°。</li>' +
        '</ul>' +
        '<p>黄金时段按日落前 45 分钟：9/25 <strong>18:08–18:53</strong>，10/22 <strong>17:27–18:12</strong>。' +
        '蓝调按日落后 15–35 分钟：9/25 <strong>19:08–19:28</strong>，10/22 <strong>18:27–18:47</strong>。' +
        '<strong>10 月末的蓝调在 18:30 前后结束，比九月早四十分钟——这直接决定 Boathouse Row 的到场时间。</strong></p>' +
        '<p><strong>秋色：费城是全宾州最晚变色的一角，这一点对本区很重要，因为 Parkway 三条林荫带与 Fairmount Park 都是画面主体。</strong>' +
        'fallphotoguide.com 给 Philadelphia County 的 2026 年窗口是 <strong>10 月 16–24 日</strong>；' +
        'morethanjustparks.com 的县级预报把费城定在 <strong>10 月 22 日前后（全州最晚的一个县）</strong>，' +
        '并自陈误差带约 ±13 天；mywild.report 与 uncoveringpa 的口径都是「late October – early November」。' +
        '<strong>综合判断：可用的秋色从 10 月 18 日左右开始，最佳区间 10 月 22 日–11 月 3 日。</strong>' +
        '→ <strong>如果秋色是目标，把行程压到窗口的最后一周（10 月 20–26 日）</strong>：' +
        '这一周同时满足秋色起色、太阳 10:03 扫过轴线、Swann 喷泉大概率还在运行三件事。' +
        '<strong>9 月末来的话，行道树基本还是绿的，这不是失败，只是换成拍建筑与光线而不是拍色彩。</strong>' +
        '注意各家都是模型推算而非实测，<strong>2026 年的实际峰值未能从官方渠道确认</strong>，' +
        '出发前刷 PA DCNR 的每周 fall foliage report。</p>'
    },
    {
      type: 'info',
      title: '三脚架政策逐家核实（差异极大，请照抄）',
      html: '<ul>' +
        '<li><strong>Eastern State Penitentiary（白天）：允许，但需另买 $10／人／天的 photography equipment pass，' +
        '且只能在现场售票窗口购买。</strong>这是本区唯一明文允许三脚架的室内空间，' +
        '而它恰好是唯一真正需要三脚架的地方（塌顶天窗下的极高动态范围）。' +
        '<strong>Halloween Nights 夜场则明文禁三脚架、禁灯、禁闪光。</strong></li>' +
        '<li><strong>The Barnes Foundation：禁三脚架，但个人拍摄本身是允许的。</strong>' +
        '官方原文「Photography for personal use is allowed, unless otherwise posted. No flash, tripods, or selfie sticks.」' +
        '<strong>这一条推翻了「Barnes 收藏展厅禁止摄影、只能拍建筑」的常见说法——不成立。</strong>' +
        '另注意人多时馆方会要求停止拍摄与写生以维持动线。</li>' +
        '<li><strong>Philadelphia Museum of Art：禁三脚架、禁独脚架、禁自拍杆、禁闪光</strong>，' +
        '常设展厅可手持拍摄，部分特展会在入口标示禁拍。' +
        '<strong>东阶与东露台是室外公共空间，三脚架不受馆内政策约束。</strong></li>' +
        '<li><strong>Rodin Museum</strong>：官方 Visitor Policies 只写' +
        '「Flash is not permitted — but take lots of pictures!」与禁背包上身、禁大包与自拍杆，' +
        '<strong>没有逐字提到三脚架</strong>。按同机构主馆政策执行、建议一律手持。' +
        '花园内的<strong>团体</strong>摄影需事先申请书面许可（个人拍摄不需要）。</li>' +
        '<li><strong>Cathedral Basilica：官网只发布了婚礼摄影师的作业规程，' +
        '没有面向游客的一般摄影与三脚架政策。这一项未能从官方渠道确认，请一律手持、不要架设。</strong></li>' +
        '<li><strong>Swann Fountain、Boathouse Row 两岸步道、Fairmount Water Works 外围、美术馆东阶与 Eakins Oval：' +
        '全是公共道路与公园，三脚架自由。</strong></li>' +
        '</ul>'
    },
    {
      type: 'good',
      title: '本区没有联邦停摆风险，也没有脚手架',
      html: '<p><strong>这七个点里没有一个是联邦运营的</strong>：美术馆与 Rodin 属 Philadelphia Museum of Art（市属非营利），' +
        'Barnes 与 Eastern State 是独立 501(c)(3)，Cathedral 归 Archdiocese of Philadelphia，' +
        'Swann Fountain、Boathouse Row 与 Fairmount Water Works 归 Philadelphia Parks &amp; Recreation ' +
        '与 Fairmount Park Conservancy。' +
        '<strong>联邦拨款问题与本区完全无关，不需要任何停摆预案</strong>' +
        '（供参考：Public Law 119-103 已于 2026 年 9 月 2 日解决拨款至 12 月 11 日）。</p>' +
        '<p><strong>Frank Gehry 的美术馆改造已经结束，现在没有工程。</strong>' +
        '$2.33 亿的 <strong>Core Project 于 2021 年 5 月 7 日完工开放</strong>，' +
        '内容是打通首层与地面层、恢复 640 英尺长的 Vaulted Walkway、新增约 2 万平方英尺展厅' +
        '（McNeil 与 Dietrich 两组新展厅）、把礼堂改成 Williams Forum。' +
        '<strong>Gehry 母版规划里还有一期「在东露台地下挖出新展厅与礼堂」，这一期已被明确无限期搁置</strong>：' +
        'Inquirer 2026 年 7 月 26 日的报道引馆长 Weiss 原话' +
        '「It is not, at this time, appropriate for us to be evaluating the feasibility of a very substantial new capital project」，' +
        '背景是全馆约 <strong>$3 亿的递延维护欠账</strong>与连年赤字。Gehry 已于 2025 年底去世。</p>' +
        '<p><strong>对拍摄的直接意义：东露台与东阶完全没有工程围挡，是干净的。</strong>' +
        '唯一的实际影响是<strong>北侧的 Perelman Building 自疫情起关闭至今未重开</strong>' +
        '（那是一栋 1926 年的 Art Deco 建筑，OSM 39.96796／-75.17927），' +
        '外观仍可从街上拍，但进不去，别把它排进计划。' +
        '<strong>2026 年未见任何一家场馆有外墙脚手架或展厅关闭的报道。</strong></p>'
    }
  ],
  spots: [
    {
      id: 'philadelphia-museum-of-art-steps',
      n: 1,
      name: '费城艺术博物馆与「洛奇台阶」',
      en: 'Philadelphia Museum of Art · East Terrace & the "Rocky Steps"',
      score: 5,
      tldr: '东阶与东露台露天免费 24 小时；顶上回望 Parkway 的轴线视野是全美最好的城市轴景之一，最佳 10:00–10:45。',
      tags: [
        { t: '台阶露台 24 小时免费', c: 'free' },
        { t: '周五 Pay What You Wish', c: 'free' },
        { t: '周二周三闭馆', c: 'risk' },
        { t: '馆内 $30 / 禁三脚架', c: 'paid' }
      ],
      highlights: [
        '<strong>先把免费与付费切开，这是本条目最实用的一句话：72 级东阶、东露台、以及从露台顶回望 Parkway 的那条轴线视野，' +
          '全部是露天公共空间，24 小时开放、不收一分钱、不受馆内闭馆日与三脚架政策的约束。</strong>' +
          '$30 的门票买的只是室内收藏。<strong>如果你只为那张轴线照片而来，你根本不需要买票</strong>，' +
          '也不需要考虑周二周三闭馆——这条视线在周二凌晨三点同样成立。',
        '<strong>那条轴线是本区最重要的几何事实。</strong>站在东阶顶朝东南望，' +
          '<strong>方位 134.7°、2.08 公里外正是 City Hall 的塔与塔顶 37 英尺高的 William Penn 铜像</strong>，' +
          '它被 Parkway 两侧的行道树夹在正中央（美术馆 OSM 39.96557／-75.18092 → City Hall 39.95240／-75.16358，' +
          '实测方位与距离）。这不是巧合：<strong>Jacques Gréber 在 1917–1926 年设计 Parkway 时，' +
          '就是按 Champs-Élysées 的逻辑把这条斜轴硬切进费城 1682 年的正交网格，两端各锚一座纪念性建筑</strong>。' +
          '美国有很多好的城市景观，但<strong>「一条两公里长的林荫大道，两端各站一座巨型建筑，中间还串起一个圆形喷泉广场」' +
          '这样完整的巴洛克式轴线，全美只有这里和华盛顿的 National Mall</strong>。',
        '建筑本身是 <strong>1928 年落成的 Greek Revival 神庙群</strong>，' +
          'Horace Trumbauer 事务所（实际主设计者是首位取得美国建筑师执照的非裔美国人 <strong>Julian Abele</strong>）' +
          '与 Zantzinger, Borie and Medary 合作完成。' +
          '<strong>一个反直觉的细节：那些屋顶不是石头，是上釉的彩色赤陶</strong>——' +
          '蓝、金、红的多彩瓦面直接照抄古希腊神庙原本的彩绘做法，' +
          '而这正是它在低角度光下比一般灰白色古典建筑更「上色」的原因。' +
          '整栋楼坐在 Faire Mount 这座小山包上，也就是 1812 年 Fairmount Water Works 蓄水池的原址。',
        '<strong>Rocky 那件事的真实版本比传说有意思：那座铜像本来不该在这里。</strong>' +
          'A. Thomas Schomberg 的雕像是 <strong>1980 年为《Rocky III》做的道具</strong>，' +
          'Sylvester Stallone 拍完把它捐给费城，随即引发一场关于「电影道具算不算公共艺术」的多年争论；' +
          '馆方一度把它挪去 Spectrum 体育馆，1990 年代才被安置到<strong>东阶底部东北侧的地面小广场上（不在台阶上）</strong>。' +
          '<strong>1976 年《Rocky》里跑的那 72 级台阶本身没有任何标记</strong>，' +
          '只有台阶顶的地面上嵌着一对铜脚印。' +
          '<strong>这一点决定了两个机位是分开的</strong>：拍雕像要下到台阶底，拍轴线要上到台阶顶，' +
          '两者不在同一张照片里。',
        '<strong>Frank Gehry 的改造已经完全结束，现场没有工程。</strong>' +
          '$2.33 亿的 Core Project <strong>2021 年 5 月 7 日开放</strong>，' +
          '恢复了封闭近 50 年的 <strong>640 英尺长 Vaulted Walkway</strong>（Guastavino 拱砖天花，' +
          '是室内最强的摄影目标）并新增约 2 万平方英尺展厅。' +
          '<strong>原计划在东露台地下再挖一层的下一期已被无限期搁置</strong>' +
          '（2026 年 7 月馆长口径，背景是约 $3 亿递延维护欠账）。' +
          '<strong>好消息：这意味着东露台在你到访时是干净的、没有围挡的。</strong>'
      ],
      photo: '建筑 <strong>5/5</strong>，城市轴景 <strong>5/5</strong>，夜景 <strong>4.5/5</strong>，室内 <strong>4/5</strong>，人像 <strong>4/5</strong>。' +
        '本区唯一一个「免费、24 小时、且拿得出全美级别构图」的点位；' +
        '扣分只在室内禁三脚架与东露台白天人流（跑台阶拍照的人从早到晚不断）。',
      shots: [
        {
          name: '东阶顶／东露台回望 Parkway 与 City Hall（本区第一机位）',
          park: [39.96715, -75.18202],
          view: [39.96557, -75.18092],
          desc: '<strong>坐标为 OSM 美术馆建筑轮廓中心（way/28533972）；实际站位在建筑东南侧的露台边缘，' +
            '约在该点东南 40–60 米（推算），地图针脚落在楼体上是正常的。</strong>' +
            '<strong>视线方位 134.7°，目标是 2.08 公里外的 City Hall 塔。</strong>' +
            '<strong>最佳时段就是一段：10:00–10:45。</strong>' +
            '9 月 25 日太阳方位在 <strong>10:40</strong> 扫过 134.7°（高度 39°），' +
            '10 月 22 日在 <strong>10:03</strong> 扫过（高度 26°）——' +
            '此刻太阳在你正后方，<strong>反日点精确落在轴线上，整条 Parkway 零阴影、完全正面受光</strong>。' +
            '<strong>10 月优于 9 月</strong>：太阳低 13 度，行道树冠有立体感、路面有长影朝远端排开，' +
            '而且时刻更早（10:03 比 10:40 人少得多）。' +
            '<strong>焦段是这个机位的胜负手：135–200mm 是唯一正确的选择。</strong>' +
            '2 公里外的塔用 24–35mm 会缩成一个几乎看不见的小点，' +
            '<strong>只有长焦压缩才能把塔撑起来、同时把两侧行道树挤成一对紧密的绿框</strong>——' +
            '这才是那张著名照片的实际做法。70mm 拍「Parkway 三条林荫带加 Logan Square 圆环」的中景关系，' +
            '<strong>16–24mm 只用来拍「台阶＋露台柱廊＋远处城市」的环境构图，不要用来拍轴线本身。</strong>' +
            '<strong>另一个完全不同的时段是蓝调</strong>（9/25 19:08–19:28、10/22 18:27–18:47）：' +
            '此时 City Hall 的 LED 立面照明与 Parkway 路灯串成一条光轴，' +
            '<strong>用 135mm 以上压缩、f/8、ISO 200、2–8 秒</strong>，' +
            '露台是公共空间<strong>可以自由架三脚架</strong>（馆内禁三脚架的政策不覆盖室外）。' +
            '注意 2 公里的长焦视线穿过整个市中心的空气，<strong>热霾与雾会明显吃掉锐度</strong>，' +
            '雨后或冷锋过境后的第一个上午是最清透的。'
        },
        {
          name: 'Eakins Oval 一侧仰拍神庙立面与 72 级台阶',
          view: [39.96450, -75.17792],
          desc: '坐标为 OSM 的 Eakins Oval 路径节点（way/12149408）。' +
            '<strong>东立面法向 134.7°，所以它从日出一直亮到约 15:10（9/25）／15:25（10/22）</strong>——' +
            '<strong>这跟 Old City 那些朝北的立面完全相反，这里秋季全天有光。</strong>' +
            '<strong>最佳两段：07:30–09:00 的低角度暖光</strong>' +
            '（9/25 08:00 太阳高度 12°、方位 102°；10/22 08:00 高度 7°、方位 111°，' +
            '光斜擦过柱廊，柱子在墙上投出深长的竖影，彩色赤陶屋顶被点亮），' +
            '<strong>以及 14:00–15:00 的西南侧光</strong>（此时光转到立面右侧，体积感最强，且台阶上人开始变少）。' +
            '<strong>正午 12:00–13:00 请回避</strong>：太阳高度 39–49°、方位 160–185°，' +
            '几乎顶光，柱廊全部拍平、屋顶反光。' +
            '焦段 <strong>24–35mm</strong> 拍「台阶＋立面」的完整关系（这是明信片构图），' +
            '<strong>16–20mm 贴到台阶底部仰拍</strong>会把 72 级台阶拉成一道陡峭的对角线、把神庙推到画面顶端，' +
            '是最有冲击力的一张；70–200mm 单独抽三角楣与赤陶瓦的彩色细节。' +
            '<strong>这里全天有人在跑台阶摆拍</strong>，要么用 1/500 以上快门把他们定住当作前景人物，' +
            '要么等 07:30 之前。<strong>台阶是室外公共空间，三脚架自由。</strong>'
        },
        {
          name: 'Rocky 铜像（台阶底东北侧小广场）',
          view: [39.96514, -75.17930],
          desc: '<strong>坐标为 OSM 的 Rocky Statue 艺术品节点（node/666546019）；' +
            '注意 OSM 上有两个重复的同名节点（另一个在 39.96512／-75.18032），' +
            '实际雕像只有一座，位于东阶底部东北侧的地面小广场上、不在台阶上。</strong>' +
            '<strong>这是本条目最容易失望的机位</strong>：雕像本身只有约 8.5 英尺高、坐在一片开阔铺装里、' +
            '前面几乎永远有一队人在排队摆举拳头的姿势。' +
            '<strong>唯一的解法是时间：07:00–08:00 是全天唯一有可能空场的时段</strong>，' +
            '而且此时低角度的东南光正打在铜像正面（9/25 07:30 太阳高度 7°、方位 97°）。' +
            '构图上<strong>不要拍雕像的正面标准像</strong>——那张照片网上有一百万张。' +
            '<strong>正确做法是压低到腰高、用 35mm 从雕像侧后方仰拍，把举起的拳头与背景的神庙立面叠在一起</strong>，' +
            '让「道具」和「殿堂」在一个画面里发生关系，这才是这件东西真正有意思的地方。' +
            '85–135mm 单抽拳头与面部的铜绿质感。三脚架自由，但排队的人不会等你。'
        },
        {
          name: '室内 Vaulted Walkway 与 Great Stair Hall',
          desc: '<strong>无独立 OSM 实体，地图无针脚（位于美术馆建筑体内）。</strong>' +
            '<strong>室内真正值得拍的是建筑而不是画。</strong>两处：' +
            '<strong>① Vaulted Walkway</strong>——640 英尺长、Guastavino 拱砖天花的石砌隧道，' +
            '封闭近 50 年后由 Gehry 在 2019 与 2021 分两段恢复，' +
            '<strong>24mm 沿中轴拍对称的一点透视，这是全馆最强的一张</strong>；' +
            '<strong>② Great Stair Hall</strong>——大楼梯与顶上 Augustus Saint-Gaudens 的镀金《Diana》（1892），' +
            '<strong>35mm 从入口层仰拍能同时收进楼梯的曲线与 Diana 的剪影</strong>。' +
            '<strong>参数：ISO 1600–3200、f/2.8、1/60–1/125</strong>，' +
            '白平衡固定 <strong>3600–4200K</strong>（天光与钨丝混合）。' +
            '<strong>禁三脚架、禁独脚架、禁自拍杆、禁闪光</strong>，' +
            '常设展厅可手持拍摄、部分特展入口会标示禁拍。' +
            '<strong>最佳日：周五 17:00 之后</strong>——按自己出价进馆，且此时天光转蓝、' +
            'Great Stair Hall 的窗变成冷色而室内灯是暖色，冷暖对比是白天拍不到的；' +
            '20:45 闭馆后走出来正好接东阶蓝调。'
        }
      ],
      access: {
        book: '<strong>东阶、东露台、Eakins Oval 与 Rocky 铜像不需预约、不需票、24 小时可拍。</strong>' +
          '室内建议线上买定时票（philamuseum.org），现场也可买；' +
          '<strong>周五 17:00 之后的 Pay What You Wish 时段现场即可按自己出价入场</strong>，' +
          '旺季周五晚人流大（较 2025 年同期涨 87%），建议 17:00 就到。',
        ticket: '<strong>室外全部免费。</strong>室内：<strong>成人 $30、老年（65+）$28、持证学生 $14、' +
          '18 岁及以下免费、会员免费</strong>；会员携客 $15。' +
          '<strong>票含当日与次日两天，并含同日 Rodin Museum 入场</strong>' +
          '（名义上也含 Perelman Building 与 Mount Pleasant／Cedar Grove，' +
          '<strong>但 Perelman Building 自疫情起关闭至今未重开</strong>）。' +
          '<strong>每周五 17:00–20:45 为 Pay What You Wish，已延长至 2027 年 6 月 25 日。</strong>',
        hours: '官方原文（philamuseum.org/main-building）：<strong>「Monday 10am–5pm / Tuesday Closed / ' +
          'Wednesday Closed / Thursday 10am–5pm / Friday 10am–8:45pm / Saturday 10am–5pm / Sunday 10am–5pm」</strong>。' +
          '→ <strong>周二与周三闭馆，周五是唯一开到 20:45 的一天。</strong>' +
          '<strong>东阶、东露台与 Eakins Oval 是室外公共空间，24 小时开放、不受上述时间约束。</strong>',
        parking: '<strong>Philadelphia Museum of Art Parking Garage</strong>（OSM way/61131910，' +
          '39.96715／-75.18202，在主馆北侧 Anne d\'Harnoncourt Drive 上）。' +
          '<strong>周五晚官方公告的车库价格是 $10</strong>，' +
          '<strong>其余时段费率未能从官方渠道确认</strong>。' +
          'Benjamin Franklin Parkway、N 21st Street 与 N 22nd Street 上有路边计时表位，秋季周末极难找。' +
          '公共交通：SEPTA 巴士 7、32、38、43、48 路可达；' +
          '<strong>最近的地铁站都在 1.5 公里以外，不推荐。</strong>',
        walk: '车库到东露台顶约 <strong>350 米 / 5 分钟</strong>（走建筑北侧绕到东面，不用爬台阶）。' +
          '<strong>Eakins Oval 到台阶顶要爬完 72 级，约 3–4 分钟</strong>；' +
          '台阶底到 Rocky 铜像约 <strong>80 米 / 1 分钟</strong>。' +
          '到 Eastern State Penitentiary 约 <strong>770 米 / 10 分钟</strong>（方位 66°）；' +
          '到 Boathouse Row 约 <strong>700 米 / 9 分钟</strong>（方位 308°）；' +
          '到 Swann Memorial Fountain 沿 Parkway 约 <strong>1.22 公里 / 15 分钟</strong>。'
      },
      notes: [
        '<strong>本条目最重要的一条：那张轴线照片是免费的、24 小时的、且必须用 135mm 以上。</strong>' +
          '广角拍不出来这个构图——2 公里外的塔在 24mm 下只有几个像素高',
        '<strong>「夕阳落在 Parkway 尽头」在 9–10 月拍不到。</strong>' +
          '日落方位 269°（9/25）到 256°（10/22），轴线是 314.7°，差 45–59 度。' +
          '<strong>轴线的对齐时刻是上午 10:00–10:45 的顺光，不是日落</strong>',
        '<strong>周二与周三美术馆闭馆，Rodin 还要多闭一个周四</strong>。' +
          '但东阶与露台照样可拍，所以周二周三来不是灾难，只是拍不到 Vaulted Walkway',
        '<strong>周五是本区唯一的最优日</strong>：17:00 后 Pay What You Wish、开到 20:45、' +
          '出来正好接东阶蓝调（10/22 蓝调 18:27–18:47，还早于闭馆）',
        '<strong>馆内禁三脚架、禁独脚架、禁自拍杆、禁闪光；室外台阶与露台完全不受此限</strong>——' +
          '这条区分是本条目最容易搞混的一点',
        '<strong>东立面秋季全天有光（日出到约 15:10），别把它跟 Independence Hall 那种朝北立面混为一谈</strong>。' +
          '需要回避的只有正午 12:00–13:00 的顶光',
        '<strong>Perelman Building 自疫情起关闭、至今未重开</strong>（门票名义上含它）。' +
          '外观仍可从街上拍（OSM 39.96796／-75.17927），但别安排进去',
        '<strong>Gehry 的下一期地下扩建已被无限期搁置，东露台没有工程围挡</strong>，' +
          '2026 年未见任何脚手架或展厅关闭的报道',
        '台阶白天全天有人跑上跑下摆拍，<strong>想拍空场只有 07:00–08:00</strong>；' +
          '露台上风大，长焦拍 2 公里外的塔时三脚架要压重物'
      ],
      images: [
        { url: 'img/philadelphia-skyline-eakins-oval-and-benjamin-franklin-parkw-6eaea095.jpg',
          cap: '自东阶顶朝东南望 Parkway 与 City Hall（即第一机位视角） · Dough4872 / CC BY-SA 4.0' },
        { url: 'img/philadelphia-museum-of-art-looking-northwest-from-bottom-of--299944b4.jpg',
          cap: '自台阶底仰望神庙立面与 72 级台阶 · Dough4872 / CC BY-SA 4.0' },
        { url: 'img/rocky-statue-philadelphia-pa-2025-03-36898bf6.jpg',
          cap: 'Rocky 铜像（在台阶底的地面广场上，不在台阶上） · Horcrux / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'eastern-state-penitentiary',
      n: 2,
      name: '东州监狱',
      en: 'Eastern State Penitentiary',
      score: 5,
      tldr: '本区最强的室内摄影目标，也是唯一允许三脚架的地方（$10 现场加购）；但 10 月牢房里会有 Halloween 布景。',
      tags: [
        { t: '线上 $21 / 现场 $23', c: 'paid' },
        { t: '三脚架需 $10 现场加购', c: 'risk' },
        { t: '10 月有鬼屋布景', c: 'risk' },
        { t: '每日 10:00–17:00', c: 'free' }
      ],
      highlights: [
        '<strong>1829 年启用，是「penitentiary」这个词的字面来源</strong>——' +
          '它不是一座普通监狱，而是一场关于「悔罪」（penitence）的建筑实验。' +
          '英国建筑师 John Haviland 的<strong>放射状平面（radial plan）</strong>把七条牢房翼像车轮辐条一样' +
          '从中央看守塔发散出去，看守站在圆心就能一眼看穿所有走廊。' +
          '这套「Pennsylvania System」的核心是<strong>绝对单独关押</strong>：' +
          '囚犯从入监到出监全程独处、被带出牢房时头上套着面罩，' +
          '理论上通过孤独与劳动获得内省。' +
          '<strong>它建成时是全美造价最高的建筑，并被超过 300 座监狱直接抄袭</strong>，' +
          '从南美到日本，是美国出口到世界最成功的建筑类型之一。',
        '<strong>反直觉的两件事，都很值得知道：</strong>' +
          '<strong>① 每间牢房原本都有独立的小庭院和一扇天窗</strong>，' +
          '天窗被称作「the Eye of God」——单人牢房里唯一的光源开在天花板正中，' +
          '设计意图是让囚犯感到被神注视。' +
          '这些天窗现在大量塌落，<strong>正是今天这里最强的摄影元素</strong>。' +
          '<strong>② Charles Dickens 1842 年专程来看它，然后写了一篇极其严厉的批判</strong>，' +
          '称这种单独关押是「a slow and daily tampering with the mysteries of the brain」，' +
          '比肉体刑罚更残酷。他是对的：这套制度最终因导致精神崩溃而在 1913 年被废除。' +
          '监狱在 <strong>1971 年关闭，随后被弃置二十余年，' +
          '1994 年才作为「stabilized ruin」（稳定化的废墟）对公众开放</strong>——' +
          '注意这个词：<strong>馆方明确选择「不修复」，只做结构加固</strong>，' +
          '所以剥落的漆、塌陷的天窗、长在走廊里的树都是刻意保留的。',
        '<strong>这里唯一真正需要三脚架的原因是动态范围。</strong>' +
          '拱顶牢房走廊内部照度极低（没有人工照明补光），而塌落的天窗直接开向天空，' +
          '<strong>实测光比常在 10–14 EV</strong>，超出任何单张 RAW 的宽容度。' +
          '手持只能二选一：要么天窗炸成纯白，要么走廊黑成一团。' +
          '<strong>所以「能不能架三脚架」这件事在这里不是舒适度问题，而是能不能出片的问题。</strong>',
        '<strong>关于三脚架政策，请把官方原文记牢：白天允许，但要另买 $10 的 photography equipment pass，' +
          '而且这个 pass 只能在现场售票窗口买，线上买不到。</strong>' +
          '官方措辞是「non-members must purchase a daily photography equipment pass if they wish to use a tripod, ' +
          'monopod, or easel while on site... photography equipment passes can only be purchased at the admissions window on site」。' +
          '<strong>会员则白天入场与 equipment pass 全年都免费。</strong>' +
          '反过来，<strong>Halloween Nights 夜场明文「Tripods, monopods, easels, lights, and other photography equipment are not permitted」' +
          '「No flash photography」，且五座鬼屋内完全禁拍</strong>。' +
          '→ <strong>结论：拍这个地方只有白天一条路，而且到了先去窗口买 pass。</strong>',
        '<strong>秋季的时间成本必须说清：Halloween Nights 在 2026 年 10 月 2 日至 11 月 7 日的「select nights」运营。</strong>' +
          '白天的历史参观<strong>不受影响、照常每日 10:00–17:00</strong>，但两件事会变：' +
          '<strong>① 五座鬼屋（Dark Tides、Big Top Terror、Machine Shop、Nightmares、The Crypt）的' +
          '「Hollywood-quality sets and props」整月留在牢房与工场空间内</strong>' +
          '——官方从未公布白天哪些区域因此关闭，也从未承认体验降级，' +
          '<strong>但布景不可能每天装拆，这属于合理推断而非官方确认</strong>；' +
          '<strong>② 白天导览团自 9 月 8 日起从每天三场缩到一场</strong>' +
          '（工作日 12:00、周六日 11:00），自助音频导览不受影响。' +
          '<strong>要拍纯粹的废墟状态，唯一的办法是排在 9 月 30 日之前——' +
          '这是本区唯一一条真正影响日期选择的硬约束。</strong>',
        '<strong>另一件实务上很重要的事：这里有铅漆。</strong>' +
          '馆方在官网提供了一份关于 lead-based paint hazard 的公开声明。' +
          '那些著名的、层层剥落的墙面就是铅漆。<strong>不要用手去摸剥落面、拍完洗手再吃东西。</strong>' +
          '另外全场地面高低不平、石缘锐利，' +
          '官方明确要求<strong>不穿凉鞋、人字拖、露趾鞋与高跟鞋</strong>。'
      ],
      photo: '建筑与废墟 <strong>5/5</strong>，纪实 <strong>4.5/5</strong>，细节质感 <strong>5/5</strong>，人像 <strong>3/5</strong>，风光 <strong>1/5</strong>。' +
        '题材独一无二、允许三脚架、可以慢慢磨（音频导览票不限停留时长）；' +
        '扣分只在 10 月的 Halloween 布景污染与受限的外墙机位。',
      shots: [
        {
          name: 'Cellblock 7 与拱顶走廊（塌顶天窗下）',
          park: [39.96753, -75.17269],
          view: [39.96834, -75.17267],
          desc: '<strong>坐标为 OSM 监狱建筑轮廓中心（way/320052082）；停车点坐标为 OSM 的 Tour Entrance' +
            '（way/50193080，在 Fairmount Avenue 一侧）。各条牢房翼在这个多边形内部，无独立 OSM 实体。</strong>' +
            '<strong>最佳时段 10:00–11:30。</strong>理由不是光「好」，而是天窗的光此时是<strong>斜射的</strong>' +
            '（9/25 的 10:30 太阳高度 38°、10/22 的 10:30 为 30°），' +
            '光柱会在地面与侧墙上拉出可见的形状；' +
            '<strong>正午 12:30–13:00 太阳高度 39–49° 接近顶光，光直接砸在地上、走廊侧墙全黑，是最差的时段。</strong>' +
            '下午 15:00 之后天窗光已弱，走廊会整体压暗、氛围最重但细节丢得多。' +
            '<strong>阴天是这里的隐藏最优解</strong>：光比从 12 EV 掉到 5–6 EV，一张 RAW 就能拿下，还能保住剥落漆的层次。' +
            '<strong>曝光与包围的具体做法：架三脚架、ISO 100、f/8、手动模式，' +
            '按天窗测光定最亮那张，然后向暗部做五张包围（相对中间值 -4／-2／0／+2／+4 EV）</strong>，' +
            '总跨度 8 EV 通常够；<strong>光比特别大的走廊做 7 张、间隔 2 EV</strong>。' +
            '用<strong>反光镜预升或电子前帘、加 2 秒延时或快门线</strong>，木地板与砖地在人走动时会传震。' +
            '焦段：<strong>16–24mm 沿走廊中轴拍拱顶的一点透视（这是招牌构图）</strong>，' +
            '35mm 拍单间牢房门与门内的光，<strong>85–135mm 从走廊一端压缩，' +
            '把一排拱门叠成重复的几何</strong>，100mm 微距拍剥落漆的层理。' +
            '<strong>白平衡固定在 5000–5600K</strong>（唯一光源是天光，自动白平衡会被暖色砖墙带偏）。' +
            '<strong>务必先在售票窗口买 $10 的 photography equipment pass 再进场</strong>，' +
            '否则三脚架落地就会被制止。'
        },
        {
          name: 'Al Capone 牢房与 Death Row',
          desc: '<strong>无独立 OSM 实体，地图无针脚（位于监狱建筑体内）。</strong>' +
            'Al Capone 的牢房被按 1929 年他实际服刑时的状态复原——' +
            '<strong>有东方地毯、镶木家具、落地灯与一台收音机</strong>，' +
            '和隔壁的空牢房形成极强的对比，这个对比本身就是内容。' +
            '<strong>问题是它有隔断、只能从门口拍，站位固定、进深很浅。</strong>' +
            '<strong>做法：24–35mm 贴到隔断上，用橡胶遮光罩顶住玻璃消反射</strong>；' +
            '室内是暖色人工布光，<strong>白平衡压到 2800–3200K</strong>，' +
            'ISO 1600–3200、f/2.8、1/50。' +
            '<strong>三脚架在这里反而没什么用</strong>（门口是通行动线、光是恒定人工光），手持更灵活。' +
            '<strong>Death Row 是另一种气质</strong>：空间更窄、更规整、几乎没有装饰，' +
            '35mm 拍一排铁门的重复，光全靠走廊尽端的天光。' +
            '<strong>这两处是全场人最密的点位，请排在 10:00 开门后的第一波或 16:00 之后。</strong>'
        },
        {
          name: 'Fairmount Avenue 一侧的外墙与瞭望塔',
          view: [39.96753, -75.17269],
          desc: '坐标为 OSM 的 Tour Entrance（way/50193080），入口在 2027 Fairmount Avenue。' +
            '<strong>这是唯一的免费机位：外墙不用买票就能拍。</strong>' +
            '30 英尺高的石砌城墙、哥特复兴式的碉楼与瞭望塔围了整整一个街区，' +
            '而<strong>紧贴墙外就是 Fairmount 的维多利亚式排屋</strong>——' +
            '「城市生活直接抵着一座监狱高墙」这个并置是这里最有意思的城市构图。' +
            '<strong>Fairmount Avenue 是东西向街道（费城网格偏转 9°，走向约 99°／279°），' +
            '南向的正立面法向约 189°，所以正午前后正面受光。</strong>' +
            '<strong>最佳 15:00–16:30</strong>：太阳转到西南（10/22 的 16:00 高度 22°、方位 232°），' +
            '石材的粗面质感被侧光完全带出来、碉楼在墙上投出长影；' +
            '正午顶光会把整面墙拍成一片灰。' +
            '<strong>次佳是蓝调</strong>（10/22 约 18:27–18:47），高墙变成剪影、后面排屋的窗透出暖光。' +
            '<strong>24mm 沿人行道纵向拍墙的透视（墙很长，广角能把它拍成一条压过来的斜线）</strong>，' +
            '<strong>50mm 拍「排屋屋顶＋墙＋瞭望塔」的三层叠压</strong>，135mm 单抽塔楼。' +
            '<strong>这是公共人行道，三脚架自由、不需要任何 pass。</strong>' +
            '<strong>10 月夜场期间 18:00 之后 Fairmount Avenue 近 21st Street 一侧会设上下客区，人车都多，避开。</strong>'
        }
      ],
      access: {
        book: '<strong>强烈建议线上预约（便宜 $2 且是定时票）</strong>，现场也可买但受当日余量限制。' +
          '两种白天票二选一：<strong>Self-Guided Audio Tour</strong>（Steve Buscemi 旁白，主线 10 站约 40 分钟，' +
          '之后可自由探索，<strong>停留时长不限</strong>）或 <strong>Guide-Led Tour &amp; Discussion</strong>' +
          '（45 分钟带讲，<strong>2026 年 9 月 8 日起只有工作日 12:00 与周六日 11:00 各一场</strong>）。' +
          '<strong>拍照请选 Self-Guided</strong>——跟团会被时间与路线绑死。' +
          '白天票<strong>可在到访前 24 小时免费改期或退款</strong>（发邮件到 support@easternstate.org）；' +
          '<strong>Halloween Nights 等特别活动一律不退不换</strong>。' +
          '<strong>$10 的 photography equipment pass 无法线上购买，必须现场窗口买。</strong>',
        ticket: '官方 FAQ 原文：<strong>线上 成人 $21、老年 $19、大学生与 7–17 岁 $17；' +
          '现场 分别为 $23、$21、$19</strong>。会员白天免费。' +
          '<strong>三脚架／独脚架／画架另需 $10／人／天的 photography equipment pass（仅现场窗口售、当日有效）；会员免费。</strong>' +
          '优惠：Museums for All／ACCESS Card／SEPTA Key REDUCED FARE 持卡人白天 <strong>$2</strong>（可带 4 人）；' +
          '残障访客白天 $2，付费陪护人免费；费城高中生凭学生证白天免费（STAMP 项目）；' +
          '持 SEPTA Key 卡线上买成人票减 $2。<strong>以上优惠一律不适用于 Halloween Nights。</strong>' +
          '<strong>Halloween Nights 夜场「Tickets start at $49」</strong>，按夜别与场次浮动；' +
          '加购 The Speakeasy $20（线上或现场）、Hospital Flashlight Tour $13（仅现场）、' +
          '停车＋摆渡 $22 线上／$30 现场。' +
          '<strong>外墙与瞭望塔在 Fairmount Avenue 人行道上拍摄完全免费。</strong>',
        hours: '官方原文（easternstate.org/historic-site/hours-of-operation）：' +
          '<strong>「March – November: Open Daily, 10:00 a.m. to 5:00 p.m.」</strong>，' +
          '官网首页另注明音频导览<strong>「Available every day from 10 am to 5 pm (last entry 4 pm)」</strong>。' +
          '→ <strong>9 月末至 10 月末每日开放，秋季没有每周闭馆日。</strong>' +
          '全年只闭 New Year\'s Day、Thanksgiving、Christmas Eve、Christmas Day。' +
          '<strong>Halloween Nights 为 2026 年 10 月 2 日–11 月 7 日的 select nights 夜场，' +
          '「Opening and closing times vary each night, based on demand」，与白天时段不重叠。</strong>' +
          '大多数访客在场约两小时，<strong>但音频导览票不限停留时长，认真拍可以待到闭馆。</strong>',
        parking: '<strong>官方明确说明自己没有停车场。</strong>' +
          '<strong>最好用的是免费路边车位：官方原文指出 22nd Street（面对入口时的左侧）与 Brown Street（后墙一侧）' +
          '「on the Eastern State side of the street, parallel parking is free and unlimited」</strong>——' +
          '注意只有<strong>贴监狱那一侧</strong>免费不限时，对面不行。' +
          '另有商业停车场在 22nd &amp; Fairmount，<strong>费率需致电 Parkway Corporation (267) 765-3665</strong>。' +
          '<strong>Halloween Nights 夜场停车另设在 Philadelphia Zoo 车库（3500 W. Girard Ave）＋摆渡，$22／$30。</strong>' +
          '公共交通：多条 SEPTA 巴士可达，Philly PHLASH 观光巴士停靠。',
        walk: '<strong>从 Philadelphia Museum of Art 走过来约 770 米 / 10 分钟</strong>（方位 66°，官方口径「五个街区」）。' +
          '22nd Street 免费车位到 Fairmount Avenue 入口约 <strong>150–250 米 / 3 分钟</strong>。' +
          '<strong>入口到 Cellblock 7 沿单向参观动线走约 5 分钟</strong>；' +
          '全场是一条单向路线，<strong>走回头路要绕，进场前先想好拍摄顺序。</strong>'
      },
      notes: [
        '<strong>本条目最重要的一条：三脚架允许，但要 $10／人／天的 photography equipment pass，' +
          '且只能在现场售票窗口买、线上买不到。</strong>到了先买 pass 再进场，' +
          '这是本区唯一能合法在室内架三脚架的地方，也是唯一真正需要三脚架的地方',
        '<strong>要拍纯粹的废墟就排在 9 月 30 日之前。</strong>' +
          '10 月 2 日–11 月 7 日的 Halloween Nights 期间，五座鬼屋的实体布景会留在牢房与工场空间里。' +
          '<strong>白天参观本身照常运营、不缩短、不需要额外买票，但「牢房里有没有布景」这一点' +
          '官方从未公布，属于合理推断而非官方确认</strong>',
        '<strong>白天导览团 9 月 8 日起只剩一场</strong>（工作日 12:00、周六日 11:00）。' +
          '<strong>拍照请买 Self-Guided Audio Tour 票</strong>，不限时长、自由走位',
        '<strong>现场有铅漆</strong>（馆方有正式的 lead-based paint hazard 声明）。' +
          '不要触摸剥落的墙面，拍完洗手再吃东西',
        '<strong>禁凉鞋、人字拖、露趾鞋与高跟鞋</strong>（官方明文）。' +
          '地面高低不平、石缘锐利，低机位与三脚架都要留意站稳',
        '<strong>禁一切武器、防狼喷雾、折刀、打火机与手电筒</strong>——' +
          '<strong>注意「flashlights」也在禁止清单里</strong>，' +
          '别指望带补光手电进去照亮暗走廊，只能靠包围曝光',
        '<strong>全场没有空调也没有暖气</strong>（官方原文「the building does not have climate control」），' +
          '10 月的石头建筑里体感明显低于室外，多穿一层',
        '<strong>禁灵异调查（含 EVP 录音机等设备）</strong>，官方明文；' +
          '也禁止模特、服装与道具拍摄（那属于需预约的商业拍摄）',
        '<strong>场内没有餐饮</strong>，但 Fairmount 街区餐厅密度很高，可以拍完就近吃',
        '<strong>本条目为独立 501(c)(3)，不受联邦拨款影响</strong>'
      ],
      images: [
        { url: 'img/eastern-state-penitentiary-philadelphia-pennsylvania-04-e7e974ee.jpg',
          cap: '拱顶牢房走廊与塌落天窗（即主机位视角） · Adam Jones, Ph.D. / CC BY-SA 3.0' },
        { url: 'img/eastern-state-penitentiary-peeling-ceiling-paint-e3dd5c0d.jpg',
          cap: '剥落的天花漆层（注意这是铅漆，不要触摸） · Saschacat916 / CC BY-SA 4.0' },
        { url: 'img/eastern-state-penitentiary-cell-block-a-e399302e.jpg',
          cap: '牢房翼内部的高动态范围实况 · Jersey Milt / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'swann-memorial-fountain',
      n: 3,
      name: '斯旺纪念喷泉与洛根圆环',
      en: 'Swann Memorial Fountain · Logan Square',
      score: 4.5,
      tldr: '2023 年起故障、2025 年 9 月全面停水，但已于 2026 年 5 月修复重新运行；秋季通常开到 10 月下旬。',
      tags: [
        { t: '完全免费 24 小时', c: 'free' },
        { t: '2026 年 5 月已修复', c: 'free' },
        { t: '10 月下旬可能停水', c: 'risk' },
        { t: '在交通环岛中央', c: 'risk' }
      ],
      highlights: [
        '<strong>先回答那个最重要的问题：喷泉现在是运行的。</strong>' +
          '这一项有过一段很糟的历史：<strong>中央大水柱的主泵在 2023 年因人为破坏损毁</strong>，' +
          '之后几年只靠一台小泵勉强维持周边的小水景；<strong>2025 年 9 月初那台小泵也失效，' +
          '导致喷泉完全停水、池底放空</strong>（Philadelphia Inquirer 2025 年 9 月 27 日报道）。' +
          'Parks &amp; Recreation 当时给出的修复目标是 <strong>2026 年 5 月中</strong>，' +
          '<strong>而 City of Philadelphia 官方在 2026 年 5 月 15 日发布「The Swann Memorial Fountain in Logan Square ' +
          'is back up and flowing」，确认已恢复运行。</strong>' +
          '同期还完成了 Logan Circle 的人行道与八处无障碍坡道改造（原有混凝土路缘换成花岗岩），' +
          '<strong>该工程原定 2026 年春季完工，但「是否已全部撤场」未能从官方渠道确认。</strong>',
        '<strong>第二个问题是关停时间，这决定了 10 月末来还有没有水。</strong>' +
          'Parks &amp; Recreation 给 Inquirer 的官方口径是：' +
          '<strong>「Ordinarily, Swann Fountain is running by the end of April or the beginning of May... ' +
          'Its run typically lasts at least until mid- to late October, but can continue until Thanksgiving Day, ' +
          'depending on when the area experiences freezing temperatures.」</strong>' +
          '→ <strong>9 月末到 10 月中几乎肯定有水；10 月 20 日之后进入「看天」区间；' +
          '如果那一周没有霜冻，很可能一直开到 11 月。</strong>' +
          '<strong>官方从不公布确切的关停日期，因为它是按气温临时决定的</strong>——' +
          '这一点无法提前锁定，只能出发前几天看天气预报里有没有零度以下的夜温。' +
          '<strong>干池是完全不同的一张照片</strong>：三尊铜像还在，但整个构图的动势与反光全部消失，' +
          '只剩一个空的浅盆。',
        '<strong>这里最值得知道的事实与摄影无关，但会改变你怎么看这条大道：Parkway 的三个雕塑锚点是同一家人做的三代作品。</strong>' +
          '喷泉出自 <strong>Alexander Stirling Calder</strong>（1924 年，与建筑师 Wilson Eyre 合作）；' +
          '轴线东南端 City Hall 塔顶的 William Penn 铜像出自他的父亲 <strong>Alexander Milne Calder</strong>；' +
          '而轴线西北端美术馆一带的现代雕塑出自他的儿子、动态雕塑（mobile）的发明者 ' +
          '<strong>Alexander「Sandy」Calder</strong>。' +
          '<strong>祖、父、子三代人的作品，沿一条 2 公里的轴线依次排开</strong>——' +
          '这是全世界城市规划里几乎找不到第二例的巧合（部分是后来有意促成的）。',
        '<strong>三尊铜像代表本地的三条水系，各有明确的可辨识细节，拍特写时要认对：</strong>' +
          '<strong>Delaware River</strong> 是一名手持弓的壮年男性，有一条鱼朝他喷水；' +
          '<strong>Schuylkill River</strong> 是一名成年女性，手握一只天鹅的颈部；' +
          '<strong>Wissahickon Creek</strong> 是一名少女，倚着一只喷水的天鹅。' +
          '池中另有<strong>喷水的青铜蛙与龟</strong>——它们是最容易被忽略的前景元素，' +
          '低机位贴近水面时可以当成画面的第一层。' +
          '<strong>那些天鹅是双关：既是 Swann 的姓氏谐音，也暗指 Leda and the Swan 的古典母题。</strong>' +
          '纪念对象 Dr. Wilson Cary Swann 是 Philadelphia Fountain Society 的创办人，' +
          '该会在 19 世纪装了逾 80 座饮水泉，目的是给人和役畜提供干净水源以替代受污染的水与酒。',
        '<strong>Logan Circle 本身的历史很黑：它原名 Northwest Square，是 18 世纪的公开处刑场</strong>，' +
          '1825 年改名 Logan Square，<strong>1917 年由 Jacques Gréber 在设计 Parkway 时把方形广场改成圆形环岛</strong>，' +
          '喷泉 1924 年 7 月在一个酷热的日子里落成（当时现场有人在跳探戈）。' +
          '2007 年由景观事务所 OLIN 做过一次整体复兴。' +
          '<strong>环岛外圈的梧桐与泡桐是 Gréber 原始设计的一部分，也是本机位秋色的主要来源。</strong>'
      ],
      photo: '建筑环境 <strong>4.5/5</strong>，雕塑细节 <strong>4.5/5</strong>，慢门水景 <strong>5/5</strong>，人像 <strong>4/5</strong>。' +
        '免费、24 小时、且是全区唯一能做「慢门水流」的题材，还能同框 Cathedral 的圆顶与 Parkway 的轴线；' +
        '扣分全在「水可能没了」这个不可控因素，以及它位于一个真正在跑车的环岛中央。',
      shots: [
        {
          name: '池西北侧低机位，喷泉配 Cathedral 圆顶（主机位）',
          view: [39.95794, -75.17059],
          desc: '<strong>坐标为 OSM 的 Swann Memorial Fountain 节点（node/1015369635，即喷泉本体）；' +
            '实际站位在池沿西北侧，距该点约 20 米（推算）。</strong>' +
            '<strong>Cathedral 在喷泉的东南方，方位 109°、距离 184 米</strong>' +
            '（Cathedral OSM way/252221811，39.95740／-75.16855），' +
            '所以<strong>站在池的西北侧朝东南拍，就能把喷泉、水柱与远处的褐石圆顶叠成三层</strong>。' +
            '<strong>最佳 15:00–17:00</strong>：此时太阳在西南到西（10/22 的 16:00 太阳高度 22°、方位 232°），' +
            '<strong>光从你背后偏右打过来，喷泉与 Cathedral 同时正面受光</strong>，这是构图最完整的时段。' +
            '<strong>次佳是蓝调</strong>（10/22 约 18:27–18:47）：环岛路灯与 Cathedral 泛光已亮，' +
            '池水变成深蓝、水柱在长曝下变成白色的丝状。' +
            '<strong>快门速度是这个机位真正的选择题，三种效果差别极大：</strong>' +
            '<strong>① 1/1000–1/2000 s</strong>——把水柱与飞沫完全定住成一颗颗独立水珠，' +
            '这是唯一能表现「Calder 设计的水形」的做法，需要 f/4–5.6、ISO 400–1600；' +
            '<strong>② 1/125–1/250 s</strong>——半定住，水有质感也有动势，是最保险的通用值；' +
            '<strong>③ 1/4–2 s</strong>——水柱化成雾状丝带，铜像在静止的丝雾里被衬出来，' +
            '<strong>白天必须上 ND8–ND64 才做得到（f/16、ISO 100 也只能到 1/15 左右）</strong>，' +
            '<strong>蓝调时段则不需要 ND</strong>，f/8、ISO 100 自然就是 1–4 秒。' +
            '焦段：<strong>24–35mm 把喷泉、水柱与 Cathedral 圆顶一次收进（主构图）</strong>，' +
            '50mm 拍单尊铜像加水柱，<strong>135–200mm 从池对侧压缩，让 184 米外的圆顶顶在喷泉正后方</strong>。' +
            '<strong>这里是公共环岛人行道，三脚架自由。</strong>'
        },
        {
          name: '池东侧朝西南，逆光打亮水雾',
          view: [39.95803, -75.17059],
          desc: '<strong>坐标为 OSM 的 Logan Square 节点（way/1487845238 中心），即环岛中央绿地；' +
            '实际站位在池沿东侧，需绕行环岛人行道（推算）。</strong>' +
            '<strong>这是这个点位唯一「非明信片」的做法：让太阳在水雾后面。</strong>' +
            '<strong>最佳 17:00–18:00（10 月 22 日）或 17:45–18:50（9 月 25 日）</strong>：' +
            '10/22 的 17:00 太阳高度 12°、方位 244°，17:30 为 7°／249°；' +
            '<strong>站在池的东侧朝西南方向拍，太阳压在水柱后方</strong>，' +
            '飞沫会被完全点亮成一团发光的雾，铜像变成半剪影，' +
            '<strong>而且低角度阳光穿过水雾时经常出现小段彩虹（水汽足够密的时候）。</strong>' +
            '<strong>关键器材要点：这是最容易起眩光的构图</strong>，' +
            '把遮光罩装上、<strong>用手掌或帽子在镜头上方挡住直射太阳</strong>，' +
            '或干脆<strong>让一尊铜像的头部正好遮住太阳盘</strong>——后者是最优雅的解法，还能出星芒（f/11–16）。' +
            '曝光按<strong>水雾的高光给、-1 到 -2 EV</strong>，暗部就让它沉下去，' +
            '这张照片的主体是光而不是雕塑。' +
            '<strong>快门 1/500–1/1000</strong> 保住水珠的边缘。' +
            '焦段 <strong>50–135mm</strong>（广角会把太阳拍得太小、雾的密度不够）。'
        },
        {
          name: '环岛西北侧朝 Parkway 轴线（喷泉配大道纵深）',
          desc: '<strong>无 OSM 实体节点可用，地图无针脚（站位在环岛西北侧人行道，由环岛几何推算）。</strong>' +
            '<strong>从这里 Parkway 朝西北以 313.9° 直指美术馆（1.22 公里），' +
            '朝东南以 135.9° 指向 City Hall（858 米）</strong>，' +
            '而喷泉正好坐在这条轴线的中点上——<strong>这是唯一能把「喷泉＋大道＋轴线两端之一」拍成一张的位置。</strong>' +
            '<strong>最佳 10:00–10:45</strong>（与全区轴线时段一致：太阳方位在 10/22 的 10:03、9/25 的 10:40 扫过 134.7°，' +
            '此时朝西北望，整条 Parkway 与远端的美术馆完全正面受光、影子全部背离镜头）。' +
            '<strong>朝东南拍 City Hall 则要选下午 15:00–16:30</strong>（太阳转到西南、在你背后）。' +
            '焦段：<strong>朝西北拍美术馆需要 135–200mm</strong>（1.22 公里，广角完全不成立）；' +
            '<strong>朝东南拍 City Hall 用 85–135mm</strong>（858 米，塔本身够高，中长焦即可撑满）；' +
            '<strong>24–35mm 只用于拍「喷泉＋两侧行道树＋大道消失点」的环境构图</strong>，' +
            '这一张在 10 月下旬秋色起来后是本区最好的季节性照片。' +
            '<strong>注意 Logan Circle 是真正在跑车的多车道环岛</strong>，' +
            '拍摄一律留在人行道与中央绿地内，不要为了对准轴线站到车道上。'
        }
      ],
      access: {
        book: '<strong>不需预约、不需票</strong>',
        ticket: '<strong>免费</strong>',
        hours: '<strong>公共环岛与广场，24 小时开放。</strong>' +
          '<strong>但「有没有水」是季节性的</strong>：Parks &amp; Recreation 官方口径为' +
          '<strong>「通常 4 月底或 5 月初开始运行，一般至少开到 10 月中至下旬，' +
          '若无霜冻可延续到 Thanksgiving」</strong>。' +
          '<strong>官方不公布确切关停日期（按气温临时决定），这一项无法提前锁定。</strong>' +
          '喷泉在 2023–2025 年间因人为破坏与泵故障长期不完整、2025 年 9 月完全停水，' +
          '<strong>已于 2026 年 5 月修复并由市政府官方确认恢复运行。</strong>' +
          '夜间有照明。',
        parking: '<strong>不要在这里找车位。</strong>Logan Circle 周围是多车道环岛与 Parkway 主线，' +
          '路边计时表位极少。<strong>SEPTA Broad Street Line 或 Market–Frankford Line 到 ' +
          '「15th Street」／「City Hall」站，再沿 Parkway 西北行 858 米（约 11 分钟）</strong>是最实际的方案；' +
          '多条 SEPTA 巴士（2、7、32、33、38、48 等）沿 Parkway 与 19th／20th Street 通行。' +
          '<strong>周边商业车库费率未能从官方渠道确认。</strong>',
        walk: '<strong>到 The Barnes Foundation 约 350 米 / 5 分钟</strong>（方位 329°）；' +
          '<strong>到 Rodin Museum 约 530 米 / 7 分钟</strong>（方位 327°）；' +
          '<strong>到 Cathedral Basilica 约 184 米 / 3 分钟</strong>（方位 109°）；' +
          '<strong>到 Philadelphia Museum of Art 沿 Parkway 约 1.22 公里 / 15 分钟</strong>（方位 314°）；' +
          '到 City Hall 约 858 米 / 11 分钟（方位 136°）。' +
          '<strong>Cathedral、Barnes、Rodin 与美术馆几乎排在一条直线上，是本区唯一可以纯步行连做的一串。</strong>' +
          '环岛四周有多个信号灯过街口，绕行整圈约 400 米。'
      },
      notes: [
        '<strong>本条目最重要的一条：出发前几天看夜间最低温。</strong>' +
          '若预报有 0 °C 以下的夜温，市政府随时可能关泵放水，' +
          '<strong>而干池与运行中的喷泉是两张完全不同的照片</strong>。' +
          '10 月 20 日之前来基本安全，之后属于「看天」',
        '<strong>2026 年 5 月市政府官方确认喷泉已修复运行</strong>，' +
          '中央大水柱（2023 年起损坏的那一支）也在修复范围内；' +
          '<strong>但同期 Logan Circle 的人行道与无障碍坡道工程是否已全部撤场，未能从官方渠道确认</strong>',
        '<strong>这是一个真正在跑车的多车道环岛</strong>，' +
          '进出必须走信号灯过街口，不要横穿；三脚架请架在人行道或中央绿地内、不要伸进车道',
        '<strong>想要慢门丝雾效果，白天必须带 ND 滤镜</strong>（ND8–ND64）。' +
          'f/16、ISO 100 在晴天也只能到 1/15 秒左右，不够；' +
          '<strong>蓝调时段则完全不需要 ND</strong>',
        '<strong>逆光机位一定会起眩光</strong>，遮光罩之外还要用手或帽子在镜头上方挡直射光，' +
          '最好的解法是让一尊铜像的头挡住太阳盘',
        '喷泉是市民日常使用的水景，<strong>夏季常有人下水，秋季少见但仍有人坐在池沿</strong>；' +
          '要拍空场请排在 08:00 之前',
        '池中<strong>喷水的青铜蛙与龟很容易被漏掉</strong>，低机位贴近水面时它们是最好的前景',
        '<strong>本条目由 Philadelphia Parks &amp; Recreation 运营，不受联邦拨款影响</strong>'
      ],
      images: [
        { url: 'img/swann-memorial-fountain-philadelphia-fd8dfa16.jpg',
          cap: '喷泉与三尊河流铜像（宽幅） · Dudva / CC BY-SA 4.0' },
        { url: 'img/swann-memorial-fountain-logan-square-philadelphia-pa-c83e400a.jpg',
          cap: '水柱运行时的实际观感与环岛环境 · Ngilmour3 / CC BY-SA 3.0' },
        { url: 'img/children-in-swann-memorial-fountain-on-4th-july-9c59ce3b.jpg',
          cap: '池沿低机位与飞沫（快门定住水珠的效果） · Haley Betrayal / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'rodin-museum',
      n: 4,
      name: '罗丹博物馆',
      en: 'The Rodin Museum',
      score: 4,
      tldr: '花园是主角，《地狱之门》与《思想者》在门口；票含在美术馆票内，但周二三四连闭三天、周五不延时。',
      tags: [
        { t: '含在美术馆票内', c: 'free' },
        { t: '单买建议价 $15', c: 'paid' },
        { t: '周二至周四闭馆', c: 'risk' },
        { t: '户外花园为主', c: 'free' }
      ],
      highlights: [
        '<strong>最容易踩的坑先说：它比主馆多闭一天。</strong>' +
          'philamuseum.org/rodin-museum 的 Hours 表原文为' +
          '<strong>「Monday 10am–5pm / Tuesday Closed / Wednesday Closed / Thursday Closed / ' +
          'Friday 10am–5pm / Saturday 10am–5pm / Sunday 10am–5pm」</strong>。' +
          '→ <strong>周二、周三、周四连闭三天</strong>，而主馆只闭周二周三。' +
          '而且<strong>周五它只开到 17:00，不跟着主馆延到 20:45</strong>——' +
          '也就是说<strong>「周五晚上 Pay What You Wish 顺路来看 Rodin」这个想法是不成立的</strong>。' +
          '注意该页面底部还挂着一份主馆的时间表（周四开、周五到 20:45），' +
          '<strong>那是站点通用页脚、不是 Rodin 自己的时间，两张表在同一页上矛盾，请以上方那张为准。</strong>',
        '<strong>这栋楼的来历比它的藏品还离奇：《思想者》原本差点被放进电影院大堂。</strong>' +
          '官方自述写得很清楚——<strong>1924 年 9 月，费城本地人、当时全美最大连锁影院 ' +
          'Stanley Corporation of America 的老板 Jules Mastbaum 第一次参观巴黎的 Musée Rodin，' +
          '当天就买下第一件 Rodin 铜雕</strong>；之后两年他<strong>陆续买了逾 150 件</strong>。' +
          '<strong>他最初的打算是「把《思想者》这类标志性作品摆到自己名下影院的大堂里」</strong>' +
          '（官方原文：he initially intended to place iconic works like The Thinker in the lobbies of his movie theatres），' +
          '后来才改主意，决定在 Benjamin Franklin Parkway 上单建一座馆。' +
          '<strong>Mastbaum 在开馆前因阑尾手术并发症去世</strong>，' +
          '由遗孀 Etta 与三个女儿完成，<strong>1929 年 11 月开馆</strong>，赠给费城市。',
        '<strong>建筑师是 Paul Philippe Cret 与 Jacques Gréber——后者正是 Parkway 本身的设计者。</strong>' +
          '换句话说，<strong>设计这条大道的人亲自设计了大道上的一栋馆，所以它与轴线的关系是精心安排过的</strong>：' +
          '从 Parkway 上看，先是一道 Cret 仿建的<strong>Château d\'Issy 立面残片</strong>（一件刻意的「废墟」布景），' +
          '门内是正式的巴黎式花园与 Cret 设计的贝壳形水池，' +
          '<strong>《思想者》守在临街的门口、《地狱之门》立在建筑正门前</strong>。' +
          '这是全馆的招牌视线，也<strong>完全在户外</strong>。',
        '<strong>这里是巴黎之外最大的 Rodin 公共收藏</strong>，逾 140 件。' +
          '除《思想者》与《地狱之门》外，<strong>《The Burghers of Calais》《The Age of Bronze》' +
          '《Eternal Springtime》《Adam》《Eve》《The Hand of God》</strong>都在。' +
          '当前特展 <strong>Rodin\'s Hands 展到 2027 年 1 月 31 日</strong>——' +
          'Rodin 那些独立的手部习作是全馆最适合拍特写的一批东西。' +
          '<strong>但要认清定位：室内只有几间不大的展厅，真正的摄影目标是户外花园。</strong>'
      ],
      photo: '雕塑 <strong>4.5/5</strong>，建筑与园林 <strong>4/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>2/5</strong>。' +
        '花园安静、雕塑与绿植的关系极好、几乎没有游客拥挤问题，是本区最舒服的拍摄环境；' +
        '扣分在规模小（认真拍 60–90 分钟就够）与那三天连闭的开放时间。',
      shots: [
        {
          name: '花园与《地狱之门》（主机位）',
          view: [39.96193, -75.17395],
          desc: '<strong>坐标为 OSM 的 Rodin Museum 建筑轮廓中心（way/183625405）；' +
            '花园与《地狱之门》在临 Parkway 一侧、该点东南约 30–40 米（推算）。</strong>' +
            '<strong>建筑与花园朝 Parkway，立面法向约 224°（西南）</strong>' +
            '（由 Parkway 313.9° 的走向推算，馆位于大道东北侧；<strong>此朝向为推算</strong>），' +
            '所以<strong>受光区间是太阳方位 134°–314°，即上午 10:05（10/22）／10:40（9/25）之后一直到日落。</strong>' +
            '<strong>最佳 14:30–17:00</strong>：10/22 的 15:30 太阳高度 26°、方位 226°，几乎正打在立面与门上；' +
            '<strong>《地狱之门》是深色铜浮雕，最怕顶光</strong>——正午高度 39–49° 会把所有浮雕的层次压平，' +
            '而 26° 的低角度侧光能把上百个人物的体积一个个勾出来，' +
            '<strong>这是本机位「十月明显优于九月」的原因。</strong>' +
            '<strong>另一个同样好的选择是阴天</strong>：均匀漫射光对深色铜器最友好、不会有炸掉的高光点。' +
            '焦段：<strong>24–35mm 拍「花园＋水池＋门」的整体关系</strong>，' +
            '<strong>50mm 拍《地狱之门》的正立面（要正对、要水平）</strong>，' +
            '<strong>85–135mm 或 100mm 微距抽门上的单个人物与 Rodin\'s Hands 那批手部习作</strong>——' +
            '<strong>长焦特写是这里出片率最高的做法</strong>，因为铜绿的层次在压缩后特别耐看。' +
            '曝光按<strong>铜器的中间调给、常需 -0.3 到 -0.7 EV</strong>（深色主体容易被相机提亮成灰）。' +
            '<strong>三脚架：官方 Visitor Policies 只写禁闪光、禁背包上身与自拍杆，没有逐字提三脚架；' +
            '按同机构主馆政策执行、建议一律手持。花园内的团体拍摄需事先申请书面许可，个人拍摄不需要。</strong>'
        },
        {
          name: '《思想者》与临街的 Château d\'Issy 立面',
          desc: '<strong>无独立 OSM 实体，地图无针脚（位于 Rodin Museum 沿 Benjamin Franklin Parkway 的入口段内，' +
            '距上一机位数十米）。</strong>' +
            '<strong>这是不买票也能拍的一段</strong>：《思想者》守在临 Parkway 的门口、' +
            '身后是 Cret 仿建的 Château d\'Issy 立面残片，' +
            '<strong>「一件铜像＋一道假废墟＋一条巴黎式大道」这个组合是本条目最有辨识度的构图。</strong>' +
            '<strong>最佳 15:30–17:30</strong>（同上，西南低角度光；10/22 的 17:00 太阳高度 12°、方位 244°，' +
            '光几乎平打，铜像的正面与肌肉起伏最立体）。' +
            '<strong>次佳是蓝调</strong>：铜像变剪影、立面残片被泛光打亮、Parkway 的路灯串成背景，' +
            '<strong>注意馆 17:00 闭门，蓝调时只能从人行道外侧拍——这一段本来就在街边，可行。</strong>' +
            '焦段：<strong>35mm 竖幅把铜像、立面与一段大道收进（主构图）</strong>，' +
            '<strong>85mm 从侧后方压缩、让立面残片充当铜像的背景板</strong>，' +
            '135mm 单抽头部与手部。' +
            '<strong>不要用超广角贴近仰拍</strong>——《思想者》的比例本来就紧凑，广角变形会让它显得笨重。'
        },
        {
          name: '室内展厅（Rodin\'s Hands 特展）',
          desc: '<strong>无独立 OSM 实体，地图无针脚（位于 Rodin Museum 建筑体内）。</strong>' +
            '<strong>室内只有几间不大的展厅，光是天光加射灯的混合。</strong>' +
            '<strong>最佳 11:00–14:00</strong>——此时高窗的进光最强，' +
            '室内不需要把 ISO 推得太高，而且大理石与石膏件的白色不会被射灯染色。' +
            '<strong>参数：ISO 1600–3200、f/2–2.8、1/60–1/125</strong>，' +
            '<strong>白平衡固定 3800–4400K</strong>（天光偏冷、射灯偏暖的折中）。' +
            '<strong>Rodin\'s Hands（展至 2027 年 1 月 31 日）是这里最好的室内题材</strong>：' +
            '那些脱离身体的手部习作在侧射灯下有极强的雕塑感，' +
            '<strong>85mm 或 100mm 微距、大光圈、让背景彻底虚化</strong>，是唯一正确的做法。' +
            '<strong>禁闪光（官方原文「Flash is not permitted — but take lots of pictures!」）；' +
            '禁背包背在身后、禁大包、禁大伞与自拍杆，可用手提或单肩挎，现场有自助衣帽架。</strong>'
        }
      ],
      access: {
        book: '<strong>不需单独预约。</strong>' +
          '<strong>持 Philadelphia Museum of Art 主馆门票可当日免费入场</strong>' +
          '（主馆票本身含两天，但 Rodin 是「same-day」）。' +
          '单独来则现场按建议价付费即可（pay what you wish 性质）。',
        ticket: '官方页面标题写的是 <strong>「Suggested Admission」</strong>：' +
          '<strong>成人 $15、老年（65+）$14、持证学生 $7、13–18 岁免费、12 岁及以下免费、会员免费</strong>。' +
          '→ <strong>这是「建议票价」而不是硬性票价，实质上是自愿定价。</strong>' +
          '<strong>另：持 Philadelphia Museum of Art 主馆票当日免费入场</strong>——' +
          '如果你本来就要进主馆（成人 $30，或周五 Pay What You Wish），这里等于不额外花钱。' +
          '<strong>临街的《思想者》与 Château d\'Issy 立面从人行道上拍摄免费。</strong>',
        hours: '官方原文（philamuseum.org/rodin-museum 的 Hours 表）：' +
          '<strong>「Monday 10am–5pm / Tuesday Closed / Wednesday Closed / Thursday Closed / ' +
          'Friday 10am–5pm / Saturday 10am–5pm / Sunday 10am–5pm」</strong>。' +
          '→ <strong>周二、周三、周四三天连闭；周五只到 17:00，不参与主馆的 20:45 延时。</strong>' +
          '<strong>口径冲突提示：同一页面的页脚另挂了一张「周四 10–17、周五 10–20:45」的表，' +
          '那是站点通用的主馆时间，不是 Rodin 的。以上方 Hours 表为准最保险，' +
          '但这处矛盾未能从官方渠道澄清——若周四非来不可，请先致电 215-763-8100 确认。</strong>',
        parking: '<strong>Benjamin Franklin Parkway、N 21st Street 与 N 22nd Street 上有计时表位' +
          '（官方原文「limited metered parking」）。</strong>' +
          '也可停 <strong>Philadelphia Museum of Art Parking Garage</strong>' +
          '（Anne d\'Harnoncourt Drive，OSM 39.96715／-75.18202，距此约 800 米），' +
          '<strong>费率未能从官方渠道确认（周五晚官方公告为 $10）。</strong>' +
          '多条 SEPTA 巴士沿 Parkway 通行。',
        walk: '<strong>到 Philadelphia Museum of Art 约 720 米 / 9 分钟</strong>（方位 304°，沿 Parkway 西北行）；' +
          '<strong>到 The Barnes Foundation 约 220 米 / 3 分钟</strong>（就在 Parkway 下一个街区）；' +
          '<strong>到 Swann Memorial Fountain 约 530 米 / 7 分钟</strong>（方位 147°）。' +
          '入口在 Parkway 一侧，进门即是花园，' +
          '<strong>从大门到《地狱之门》不到 60 米，纯拍照 60–90 分钟够用。</strong>'
      },
      notes: [
        '<strong>本条目最重要的一条：它周二、周三、周四连闭三天，比主馆多闭一个周四。</strong>' +
          '而且周五只到 17:00，不跟主馆延到 20:45',
        '<strong>持主馆门票当日可免费进</strong>——把两处排在同一天是最省钱的走法，' +
          '但注意 Rodin 是「same-day」而不是像主馆票那样含两天',
        '<strong>户外花园才是主角，室内是加分项。</strong>' +
          '如果时间紧，只在门外拍《思想者》与 Château d\'Issy 立面也能拿到本条目八成的价值',
        '<strong>《地狱之门》最怕正午顶光</strong>，深色铜浮雕在高角度光下会彻底拍平。' +
          '排在 14:30–17:00，或干脆挑阴天',
        '<strong>禁闪光</strong>（官方明文）；<strong>禁把背包背在身后、禁大包、禁大伞与自拍杆</strong>，' +
          '小包要手提或单肩挎，现场有自助衣帽架',
        '<strong>花园内的团体摄影需事先申请书面许可、且要随身携带纸质件，无许可的团体会被拒入</strong>；' +
          '个人拍摄不受此限',
        '<strong>三脚架政策官方未逐字说明</strong>，按同机构主馆的「禁三脚架」执行最保险，建议一律手持',
        '<strong>本条目由 Philadelphia Museum of Art 运营，不受联邦拨款影响</strong>'
      ],
      images: [
        { url: 'img/rodin-museum-phila-jeh-073664d2.jpg',
          cap: '临 Parkway 的立面与花园入口 · Jim.henderson / CC BY-SA 4.0' },
        { url: 'img/philadelphia-october-2017-13-rodin-museum-7ae23753.jpg',
          cap: '十月的花园与 Beaux-Arts 建筑（即主机位视角） · Michael Barera / CC BY-SA 4.0' },
        { url: 'img/rodin-museum-entrance-in-philadelphia-pennsylvania-23e99347.jpg',
          cap: '入口段与《地狱之门》一侧 · Nolabob / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'barnes-foundation',
      n: 5,
      name: '巴恩斯基金会',
      en: 'The Barnes Foundation',
      score: 3.5,
      tldr: '收藏展厅其实允许个人拍摄（禁闪光与三脚架），不是只能拍建筑；$30、周二周三闭馆、票有效两天。',
      tags: [
        { t: '$30 / 票含两天', c: 'paid' },
        { t: '展厅可手持拍摄', c: 'free' },
        { t: '禁三脚架与闪光', c: 'risk' },
        { t: '周二周三闭馆', c: 'risk' }
      ],
      highlights: [
        '<strong>先纠正一个流传很广的说法：Barnes 的收藏展厅并不禁止摄影。</strong>' +
          'barnesfoundation.org/plan-your-visit 的原文是' +
          '<strong>「Photography for personal use is allowed, unless otherwise posted. ' +
          'No flash, tripods, or selfie sticks.」</strong>' +
          '→ <strong>个人手持拍摄是允许的，禁的是闪光灯、三脚架与自拍杆</strong>，' +
          '并且<strong>「除另有标示外」意味着个别特展或个别墙面可能单独禁拍</strong>，现场看牌子。' +
          '另有一条实务限制：<strong>展厅拥挤时馆方会要求停止拍摄、写生与记录以维持动线</strong>' +
          '（写生只许用石墨铅笔、笔记本不得大于 9×12 英寸）。' +
          '<strong>所以这不是「只能拍建筑」的地方——但也别指望能慢慢架机器。</strong>',
        '<strong>这里真正独一无二的东西是「墙」，不是某一张画。</strong>' +
          'Albert C. Barnes（靠一种含银的消炎药剂发家的化学家）' +
          '把藏品按<strong>「ensembles」——对称的墙面组合</strong>来挂：' +
          '一张 Renoir 旁边可能挂着一件非洲面具、一把 18 世纪的宾州铁铰链和一件织物，' +
          '<strong>依据的是形状、色彩、线条与空间的形式呼应，而不是年代、国别或画派。</strong>' +
          '这在全世界的大馆里几乎是绝无仅有的陈列逻辑。' +
          '<strong>对摄影者的直接意义：这里最值得拍的不是单幅作品的翻拍（那毫无意义），' +
          '而是整面墙的构图本身</strong>——一张 35mm 的正对墙面，' +
          '就把 Barnes 的整套美学思想拍下来了。' +
          '藏品规模上有 <strong>181 件 Renoir、69 件 Cézanne、59 件 Matisse、46 件 Picasso、7 件 Van Gogh</strong>，' +
          '以及 Matisse 为原馆定制的巨幅壁画《The Dance》。',
        '<strong>这栋楼之所以存在，源于一场美国艺术界最著名的官司。</strong>' +
          'Barnes 的遗嘱明确禁止藏品外移、禁止改变任何一件作品的位置。' +
          '基金会原址在费城郊外的 Merion，<strong>2004 年法院裁定允许迁址</strong>，' +
          '此举引发激烈争议（2009 年的纪录片《The Art of the Steal》就是一部完整的控诉）。' +
          '<strong>妥协方案是：新馆里的展厅按 Merion 老宅的房间尺寸一比一复制，' +
          '每一面墙的每一件作品都保持原位。</strong>' +
          '<strong>2012 年 5 月 19 日在 Parkway 开馆，造价约 1.5 亿美元。</strong>' +
          '也就是说<strong>你在一栋 2012 年的现代建筑里，看到的是一座 1920 年代私宅内部的逐字复刻</strong>——' +
          '这个「盒中盒」的关系是本馆最有意思的建筑事实。',
        '<strong>建筑本身（Tod Williams Billie Tsien Architects）才是最好拍的部分。</strong>' +
          '外墙用的是<strong>来自以色列 Negev 沙漠的石灰石，按刻意打乱的随机砌法排列</strong>，' +
          '表面有明显的凿痕与色差，<strong>低角度侧光下这面墙会整体「亮起来」</strong>，' +
          '是本条目最容易出片的对象。' +
          '入口序列是一道长石墙、一片浅反射水池、再进到有天光顶篷的 <strong>Light Court</strong>；' +
          '建筑师自己的说法是「a gallery in a garden, a garden in a gallery」。' +
          '<strong>反射水池是唯一能拍到「建筑倒影」的元素，也是本馆最上镜的一处。</strong>'
      ],
      photo: '建筑 <strong>4.5/5</strong>，室内陈列 <strong>3.5/5</strong>，风光 <strong>1/5</strong>，人像 <strong>2.5/5</strong>。' +
        '建筑与石墙质感很强、反射水池好用、展厅也确实能拍；' +
        '扣分在 $30 的票价对纯摄影产出偏高、展厅禁三脚架且光线偏暗、以及「拍下来的墙别人看不懂」这个先天限制。',
      shots: [
        {
          name: '反射水池与 Negev 石灰石外墙（主机位）',
          view: [39.96063, -75.17271],
          desc: '<strong>坐标为 OSM 的 Barnes Foundation 建筑轮廓中心（way/183620616）；' +
            '水池与入口石墙在临 Parkway 一侧、该点东南约 30–40 米（推算）。</strong>' +
            '<strong>建筑朝 Parkway，立面法向约 224°（西南）</strong>' +
            '（由 Parkway 313.9° 走向推算，馆位于大道东北侧；<strong>此朝向为推算</strong>），' +
            '受光区间为太阳方位 134°–314°。' +
            '<strong>最佳 15:00–17:30</strong>：10/22 的 16:00 太阳高度 22°、方位 232°，' +
            '<strong>低角度侧光正打在 Negev 石灰石上，凿痕与随机砌缝的每一道阴影都被拉出来</strong>——' +
            '这面墙在正午顶光下是一片死白，在 22° 的低光下是全区最好的材质特写题材，' +
            '<strong>差别大到值得为它专门安排时段。</strong>' +
            '<strong>次佳是蓝调</strong>（10/22 约 18:27–18:47，但注意馆 17:00 闭门，' +
            '此时只能从 Parkway 人行道外侧拍——石墙与水池本来就在临街一侧，可行）。' +
            '焦段：<strong>24–35mm 拍「水池倒影＋石墙＋建筑体量」的完整入口序列（招牌构图）</strong>，' +
            '<strong>50mm 压低贴近水面拍纯倒影</strong>，' +
            '<strong>85–135mm 或 100mm 微距单抽石墙的砌法与凿痕</strong>——' +
            '<strong>后者是这里最被低估的一张，几乎是抽象摄影。</strong>' +
            '<strong>CPL 在水池倒影上非常有用</strong>（可按需增强或消除反射，转到最强反射角能让倒影更实）。' +
            '<strong>Parkway 人行道与馆前广场是室外公共空间，三脚架自由；进馆之后禁三脚架。</strong>'
        },
        {
          name: 'Light Court 与室内动线',
          desc: '<strong>无独立 OSM 实体，地图无针脚（位于 Barnes Foundation 建筑体内）。</strong>' +
            '<strong>Light Court 是室内最好的建筑目标</strong>：顶部有采光篷、四周是石墙与玻璃，' +
            '<strong>光是本区最柔和均匀的室内光</strong>。' +
            '<strong>最佳 12:00–14:00</strong>（顶篷进光最强、天光最白，' +
            '10/22 正午太阳高度 38.8°、9/25 为 49.0°，都足够穿过采光层）。' +
            '<strong>24mm 上仰拍顶篷的结构网格</strong>，' +
            '<strong>35mm 拍「石墙＋光带＋人影」的横向切片</strong>，' +
            '<strong>85mm 抽墙面与光的边界</strong>。' +
            '<strong>参数：ISO 800–1600、f/2.8–4、1/125</strong>（这里比展厅亮得多），' +
            '白平衡固定 <strong>5000–5600K</strong>（以天光为主）。' +
            '这一段人不多、动线宽，是全馆最能从容构图的地方。'
        },
        {
          name: '收藏展厅的 ensembles 墙面',
          desc: '<strong>无独立 OSM 实体，地图无针脚（位于 Barnes Foundation 建筑体内）。</strong>' +
            '<strong>拍法只有一个正确答案：正对整面墙拍它的组合关系，不要单独翻拍某一幅画。</strong>' +
            '<strong>35mm 正对、水平校准、把一整面墙连同两侧的铁艺与家具一起收进</strong>，' +
            '这一张才说得清 Barnes 这套陈列逻辑；' +
            '<strong>50mm 拍「一幅 Renoir 加旁边一件非洲面具」这种局部并置</strong>，' +
            '是最能一眼说明问题的构图。' +
            '<strong>参数：展厅照度偏低，ISO 1600–3200、f/2–2.8、1/60–1/100</strong>；' +
            '<strong>白平衡固定 3200–3600K</strong>（以暖色射灯为主，自动白平衡会随每面墙来回跳，' +
            '整组片子会没法统一调色）。' +
            '<strong>禁闪光、禁三脚架、禁自拍杆</strong>；' +
            '<strong>画面上会有射灯在画框玻璃上的反光点，唯一的解法是侧移半步换角度，' +
            'CPL 在人工光下作用有限。</strong>' +
            '<strong>人多时馆方会要求你停止拍摄</strong>，' +
            '所以<strong>请排在开门后第一小时（周四至周一 11:00，会员 10:00）或 15:00 之后</strong>。'
        }
      ],
      access: {
        book: '<strong>建议线上预约定时票</strong>（barnesfoundation.org），周末与假日容易售完。' +
          '<strong>票含特展、且有效两天</strong>。' +
          '<strong>大学生 $5 的票只能电话购买（215.278.7000），线上买不到。</strong>' +
          '现场另有一小时的 Collection Highlights 导览，' +
          '<strong>周四至周一 11:30、12:30、13:30 三场，需在 box office 现买。</strong>',
        ticket: '官方价目（barnesfoundation.org/plan-your-visit）：' +
          '<strong>成人 $30、老年 $28、大学生（凭证件）$5、13–18 岁 $5、12 岁及以下免费</strong>。' +
          '<strong>含特展，票有效两天。</strong>会员与费城教师免费。' +
          'Philadelphia CityPASS 可打包。' +
          '<strong>室外的石墙、反射水池与馆前广场从 Parkway 人行道上拍摄完全免费。</strong>',
        hours: '官方原文：<strong>「Thu–Mon: 11am–5pm / Members: 10am–5pm」</strong>，' +
          '<strong>周二与周三闭馆</strong>；全年另闭 July 4、Thanksgiving、Christmas。' +
          '→ <strong>9 月末至 10 月末每周开五天（周四至周一），周二周三来是空跑。</strong>' +
          '<strong>注意它 11:00 才开门，是本区开门最晚的场馆</strong>，' +
          '正好可以把上午 10:00–10:45 的 Parkway 轴线时段先做完再过来。' +
          '<strong>会员可以 10:00 进场，这一小时是展厅最空、最好拍的时候。</strong>',
        parking: '<strong>自有停车场：Pennsylvania Avenue 一侧 60 个车位，4 小时 $12、超时按小时加收</strong>' +
          '（该费率来自第三方 2026 年 1 月核对的资料，<strong>未能在官网逐字确认</strong>）。' +
          '车位很少，秋季周末基本停不进。' +
          '<strong>更实际的是 SEPTA 巴士（沿 Parkway 与 20th／21st Street 多条线路）</strong>，' +
          '或从 City Hall 沿 Parkway 步行约 1.1 公里。',
        walk: '<strong>到 Rodin Museum 约 220 米 / 3 分钟</strong>（Parkway 上的下一个街区，两处必须连着做）；' +
          '<strong>到 Swann Memorial Fountain 约 350 米 / 5 分钟</strong>（方位 149°）；' +
          '<strong>到 Philadelphia Museum of Art 约 890 米 / 11 分钟</strong>（方位 308°，沿 Parkway 西北行）。' +
          '<strong>官方建议留两小时看展，纯拍照 60 分钟够。</strong>'
      },
      notes: [
        '<strong>本条目最重要的一条：收藏展厅可以个人手持拍摄，官方原文允许。</strong>' +
          '禁的是闪光灯、三脚架与自拍杆，另加「除另有标示外」这个例外条款。' +
          '<strong>「Barnes 展厅完全禁拍、只能当建筑题材」这个说法不成立</strong>',
        '<strong>但展厅拥挤时馆方会要求停止拍摄</strong>（连写生和记笔记都会被叫停）。' +
          '要拍就排在 11:00 开门后第一小时或 15:00 之后，' +
          '<strong>会员的 10:00 早场是最理想的一小时</strong>',
        '<strong>周二与周三闭馆</strong>，且<strong>11:00 才开门</strong>。' +
          '11:00 这个晚开门其实是好事：上午 10:00–10:45 的 Parkway 轴线时段不冲突',
        '<strong>票有效两天、且含特展</strong>——第一天只拍建筑、第二天再进去看画是完全可行的',
        '<strong>大学生 $5 的票只能打电话买（215.278.7000）</strong>，线上界面上没有这个选项',
        '<strong>不要在展厅里翻拍单幅作品</strong>：那既没有意义（官网有更好的图），' +
          '也会招来工作人员注意。<strong>拍整面墙的 ensemble 才是这里的正确题材</strong>',
        '<strong>外墙的 Negev 石灰石只在低角度侧光下好看</strong>（15:00–17:30），' +
          '正午顶光会把它拍成一片死白。这是本条目唯一需要「等光」的部分',
        '<strong>写生只许用石墨铅笔、笔记本不得大于 9×12 英寸</strong>（官方明文），' +
          '钢笔、马克笔与大画板都不行',
        '<strong>本条目为独立 501(c)(3)，不受联邦拨款影响</strong>'
      ],
      images: [
        { url: 'img/the-barnes-foundation-in-philadelphia-by-mywikibiz-e5e4a908.jpg',
          cap: 'Tod Williams Billie Tsien 的建筑体量与 Negev 石灰石外墙 · Thekohser / CC BY-SA 4.0' },
        { url: 'img/reflecting-pool-outside-the-barnes-foundation-philadelphia-b-71c87af4.jpg',
          cap: '入口反射水池（即主机位视角） · Thekohser / CC BY-SA 4.0' },
        { url: 'img/galerie-barnes-foundation-c0c7c90e.jpg',
          cap: '收藏展厅内的 ensembles 墙面陈列 · Dav Sanetrník / CC BY-SA 3.0' }
      ]
    },
    {
      id: 'cathedral-basilica-ss-peter-paul',
      n: 6,
      name: '圣伯多禄圣保禄圣殿主教座堂',
      en: 'Cathedral Basilica of Saints Peter and Paul',
      score: 4,
      tldr: '免费、每日开放；工作日弥撒都在旁边的小堂举行，所以正殿在 7:00–17:00 基本全天空着可拍。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '工作日正殿空场', c: 'free' },
        { t: '活跃主教座堂', c: 'risk' },
        { t: '游客摄影政策未公布', c: 'risk' }
      ],
      highlights: [
        '<strong>这里有一条排程上的重大便利，是本条目最有用的信息：工作日的日常弥撒不在正殿里举行。</strong>' +
          '官方 Mass Schedules 原文为 <strong>「Monday to Friday 7:15 am &amp; 12:05 pm in the Cathedral Chapel」' +
          '「Saturday 12:05 pm in the Cathedral Chapel」</strong>——' +
          '也就是<strong>周一到周六的日常弥撒全在旁边的 Cathedral Chapel（小堂），不在 Basilica 正殿</strong>。' +
          '正殿里只有<strong>周一至周五 11:30 的告解</strong>（时间很短）、' +
          '<strong>周六 16:15–17:00 告解与 17:15 的主日预备弥撒</strong>，' +
          '以及<strong>周日的 8:00／9:30／11:00／18:30 四台弥撒</strong>。' +
          '→ <strong>结论：周一至周五 7:00–17:00 这十个小时里，正殿基本是空的、可以自由拍摄，' +
          '只需避开 11:30 前后那半小时。</strong>' +
          '<strong>这是全区最容易被浪费掉的一个机会</strong>——大多数人以为主教座堂随时都在做礼拜。',
        '<strong>最反直觉的建筑事实：这座教堂的窗户被刻意开得很高，是为了不让人从街上砸石头进来。</strong>' +
          '1846 年动工时，费城刚经历 <strong>1844 年的 Nativist Riots（本土主义暴动）</strong>——' +
          '反天主教暴徒在那场骚乱里烧掉了教堂、打死了人。' +
          '按传统说法，主教 Francis Kenrick 因此要求' +
          '<strong>把所有窗户开在「投石所及的高度以上」</strong>，' +
          '所以你看到的这栋楼下部是一整圈几乎无窗的褐石实墙。' +
          '<strong>对摄影的直接后果是室内极暗</strong>：光只从高窗和穹顶下的采光带进来，' +
          '这既是它的困难，也是它的戏剧性来源。' +
          '<strong>这条历史成因在官网上没有逐字表述，属于广为流传的传统记述，未能从官方渠道确认。</strong>',
        '<strong>1846–1864 年建成，是费城总教区的母堂，也是全美最大的天主教堂之一。</strong>' +
          '建筑语汇是意大利文艺复兴复兴式（Palladian 传统），' +
          '前后由 <strong>Napoleon LeBrun 与 John Notman</strong> 两位建筑师接手，' +
          '外墙为褐石（brownstone），铜制穹顶是 Logan Square 天际线上最容易识别的元素。' +
          '<strong>1976 年由 Paul VI 擢升为小型宗座圣殿（minor basilica）。</strong>' +
          '这里同时是 <strong>Shrine of St. Katharine Drexel</strong>' +
          '（这位费城出身的圣人的遗骸于 2018 年迁入）。' +
          '<strong>Pope John Paul II 曾于 1979 年到访，Pope Francis 于 2015 年在此主持弥撒。</strong>',
        '<strong>摄影上要认清一件事：它的圆顶从远处比从近处好拍。</strong>' +
          '教堂坐在 Logan Circle 东南侧（OSM way/252221811，39.95740／-75.16855），' +
          '<strong>从 Swann Memorial Fountain 看它在方位 109°、距离 184 米</strong>，' +
          '所以<strong>把它当成喷泉那张照片的背景板</strong>是最有效的用法。' +
          '贴近拍反而困难：临街立面很高、街道很窄，广角会严重变形。' +
          '<strong>主入口柱廊朝 18th Street（大致朝西，法向约 279°，由街网 9° 偏转推算；' +
          '此朝向为推算而非实测）</strong>，' +
          '因此<strong>立面受光区间是太阳方位 189°–369°，即约 13:15 之后到日落，最佳 16:00–17:30</strong>。'
      ],
      photo: '建筑外观 <strong>3.5/5</strong>，室内 <strong>4.5/5</strong>，细节 <strong>4/5</strong>，风光 <strong>1/5</strong>。' +
        '免费、工作日正殿空场、穹顶下的采光很有戏剧性；' +
        '扣分在室内极暗且不能架三脚架、外立面被窄街与高度限制、以及必须小心分寸。',
      shots: [
        {
          name: '正殿中轴对称构图（穹顶下）',
          view: [39.95740, -75.16855],
          desc: '<strong>坐标为 OSM 的 Cathedral of Saints Peter and Paul 建筑轮廓中心（way/252221811）。</strong>' +
            '<strong>最佳 周一至周五 13:00–15:30</strong>：' +
            '此时太阳高度 30–39°、方位 185–226°，' +
            '<strong>高窗与穹顶采光带的进光最强，正殿里会出现可见的光柱与落在地面的光斑</strong>；' +
            '而且这个时段<strong>正殿完全没有礼拜活动</strong>（日常弥撒都在旁边小堂）。' +
            '<strong>请避开周一至周五 11:30 前后</strong>（正殿有告解）与周六日全天。' +
            '<strong>构图：24mm 沿中轴向主祭坛拍严格对称的一点透视，这是本堂最强的一张</strong>——' +
            '要点是<strong>把相机放低到座椅靠背高度、用水平仪校正、镜头中心对准中轴</strong>，' +
            '柱列一歪整张就废了。' +
            '<strong>16–20mm 站在穹顶正下方垂直上仰</strong>是第二张必拍（穹顶的圆与鼓座窗的放射几何）；' +
            '<strong>85mm 单抽祭坛、大理石细节与铜灯</strong>。' +
            '<strong>参数：这里非常暗（下部几乎无窗是设计使然）。' +
            '实测需要 ISO 3200–6400、f/1.8–2.8、1/30–1/60</strong>，' +
            '<strong>强烈建议带一支 24mm 或 20mm 的 f/1.4–1.8 定焦</strong>，' +
            '这是本区唯一一个「大光圈定焦不可替代」的机位。' +
            '<strong>白平衡固定 3200–3800K</strong>（暖色钨丝灯为主，混一点高窗的冷光）。' +
            '<strong>禁闪光是常识；三脚架请一律不要带</strong>' +
            '——官网只发布了婚礼摄影师的作业规程，' +
            '<strong>没有面向游客的一般摄影与三脚架政策，这一项未能从官方渠道确认</strong>，' +
            '在一座活跃的主教座堂里架三脚架一定会被制止。' +
            '<strong>若能靠住长椅靠背或柱础当支点，快门可以降到 1/15。</strong>'
        },
        {
          name: 'Logan Circle 一侧的褐石穹顶（外观）',
          view: [39.95794, -75.17059],
          desc: '<strong>坐标为 OSM 的 Swann Memorial Fountain 节点，即从喷泉一侧回望教堂的位置；' +
            '教堂在方位 109°、距离 184 米。</strong>' +
            '<strong>这是拍这栋楼最好的距离</strong>——贴近拍会被窄街与建筑高度逼死，' +
            '184 米刚好能把整个铜穹顶与褐石体量收进来，还能用喷泉当前景。' +
            '<strong>最佳 16:00–17:30</strong>：太阳在西南到西（10/22 的 16:30 高度 17°、方位 238°），' +
            '<strong>褐石在低角度暖光下会转成饱和的红褐色，这是它一天里唯一好看的时候</strong>；' +
            '正午顶光下褐石是一种很脏的灰褐。' +
            '<strong>次佳是蓝调</strong>（10/22 约 18:27–18:47）：穹顶泛光已亮、天空还有色，' +
            '<strong>此时若喷泉还在运行，「亮着的水柱＋亮着的穹顶＋深蓝天空」是本区最完整的一张夜景。</strong>' +
            '焦段：<strong>85–135mm 从喷泉一侧压缩，让穹顶顶在水柱正后方（招牌构图）</strong>，' +
            '<strong>50mm 拍「喷泉＋教堂＋环岛树冠」的中景</strong>，' +
            '<strong>24mm 只在走近到街对面时用于拍立面与柱廊</strong>（会有明显仰角变形，后期要校正）。' +
            '<strong>Logan Circle 人行道上三脚架自由。</strong>'
        }
      ],
      access: {
        book: '<strong>不需预约、不需票，随时可入内私人祈祷与自助参观。</strong>' +
          '<strong>导览团只以极有限的方式提供</strong>（官方原文「being given on a very limited basis」），' +
          '需发邮件给 cathedral.ambassadors@gmail.com 预约；' +
          '<strong>另有一场在周日 11:00 弥撒之后的导览，在主祭坛右侧的 Sacred Heart 侧祭坛前集合</strong>' +
          '（遇洗礼等活动会取消，建议先邮件确认）。' +
          '团体参观不需预约，但建议先邮件告知日期时间以免撞上仪式。',
        ticket: '<strong>免费</strong>（教堂内有捐款箱；Cathedral Shop 在主祭坛右侧，' +
          '周日 10:30–18:30、周三 10:30–14:00、周六 11:00–17:15，电话 215-665-9032）',
        hours: '官方原文（cathedralphila.org/visitor-information）：' +
          '<strong>「Sunday from 8:00 AM to 7:30 PM / Monday – Friday from 7:00 AM to 5:00 PM / ' +
          'Saturday from 9:00 AM to 6:30 PM」</strong>，' +
          '并注明<strong>「Only the Cathedral Chapel is open for the 9:00 AM Mass on Federal Holidays」</strong>' +
          '（联邦假日只开小堂——注意 <strong>2026 年 10 月 12 日 Indigenous Peoples\' Day 是联邦假日</strong>）。' +
          '<strong>弥撒时间（关键）：周一至周五 7:15 与 12:05 在 Cathedral Chapel（不在正殿）；' +
          '周六 12:05 在 Chapel、17:15 主日预备弥撒在正殿；' +
          '周日 8:00／9:30／11:00／18:30 在正殿，12:30 西班牙语在 Chapel。' +
          '告解：周一至周五 11:30、周六 16:15–17:00、周日 9:00 与 17:30，均在正殿。</strong>' +
          '→ <strong>拍摄请排在周一至周五，避开 11:30 前后。</strong>',
        parking: '教堂有 <strong>Archdiocesan Parking Lot（入口在 17th Street）</strong>，' +
          '官方在婚礼摄影规程里写明<strong>工作日 17:00 之后与周六周日全天可用</strong>——' +
          '<strong>白天时段能否停放与费率均未能从官方渠道确认。</strong>' +
          '<strong>最实际的是公共交通</strong>：SEPTA Broad Street Line／Market–Frankford Line 到 ' +
          '「15th Street」／「City Hall」站，沿 Parkway 西北行约 900 米；' +
          '或乘沿 Parkway 与 18th／19th Street 的多条巴士。' +
          '教堂有三处带坡道的外部入口，<strong>只有主停车场那一侧的门有自动按钮</strong>。',
        walk: '<strong>到 Swann Memorial Fountain 约 184 米 / 3 分钟</strong>（方位 289°，就在 Logan Circle 对面）；' +
          '<strong>到 The Barnes Foundation 约 500 米 / 7 分钟</strong>；' +
          '到 City Hall 沿 Parkway 与 Market Street 约 900 米 / 12 分钟。' +
          '<strong>堂区办公室在 1723 Race St</strong>（周一至周五 9:00–16:00，' +
          '<strong>守斋日与联邦假日不开</strong>）。' +
          '纯拍照 <strong>30–45 分钟</strong>够用。'
      },
      notes: [
        '<strong>本条目最重要的一条：工作日的日常弥撒在旁边的 Cathedral Chapel 举行，不在正殿。</strong>' +
          '所以<strong>周一至周五 7:00–17:00 正殿基本空场可拍</strong>，只避开 11:30 前后的告解',
        '<strong>周六 17:15 与周日全天有正殿弥撒，请不要在那些时段拍摄。</strong>' +
          '这是活跃的主教座堂与总教区母堂，遇到任何仪式（弥撒、婚礼、洗礼、葬礼）请立刻收起相机',
        '<strong>2026 年 10 月 12 日 Indigenous Peoples\' Day 是联邦假日，' +
          '官方明确说明联邦假日只开小堂</strong>——那天来看不到正殿',
        '<strong>室内极暗，这是设计使然</strong>（1844 年反天主教暴动之后窗户被开在投石高度之上）。' +
          '<strong>带一支 24mm 或 20mm 的 f/1.4–1.8 定焦</strong>，' +
          '这是本区唯一真正需要大光圈定焦的机位',
        '<strong>三脚架请一律不要带。</strong>' +
          '官网只发布了婚礼摄影师规程，<strong>没有面向游客的一般摄影与三脚架政策，此项未能从官方渠道确认</strong>；' +
          '在活跃主教座堂里架三脚架必然被制止',
        '<strong>穹顶从 184 米外的 Swann Fountain 一侧比贴近拍好得多</strong>。' +
          '把这两个点当成一组来做，用喷泉当前景',
        '<strong>褐石只在 16:00–17:30 的低角度暖光下好看</strong>，正午会拍成脏灰褐',
        '<strong>本条目由 Archdiocese of Philadelphia 运营，不受联邦拨款影响</strong>'
      ],
      images: [
        { url: 'img/2013-cathedral-basilica-of-saints-peter-and-paul-from-across-057cd7e8.jpg',
          cap: '自 Benjamin Franklin Parkway 对侧看褐石立面与铜穹顶 · Beyond My Ken / CC BY-SA 4.0' },
        { url: 'img/interior-cathedral-basilica-of-saints-peter-and-paul-crop-5699941a.jpg',
          cap: '正殿中轴与穹顶下的采光（即主机位视角） · Interstate295r / CC BY-SA 3.0' },
        { url: 'img/cathedral-basilica-of-saints-peter-and-paul-in-philadelphia--25a2220b.jpg',
          cap: 'Logan Square 一侧的教堂全貌 · 颐园居 / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'boathouse-row-fairmount',
      n: 7,
      name: '船屋街与费尔芒特水厂',
      en: 'Boathouse Row & Fairmount Water Works',
      score: 5,
      tldr: '灯已确认在用：2024 年 3 月换过全新 6,400 颗 LED 系统，黄昏自动点亮、约 22:00 熄。免费。',
      tags: [
        { t: '完全免费 24 小时', c: 'free' },
        { t: '灯已确认正常', c: 'free' },
        { t: '黄昏亮至约 22:00', c: 'free' },
        { t: '10/24–25 有大型赛艇赛', c: 'risk' }
      ],
      highlights: [
        '<strong>先回答灯的问题：灯是好的，而且是全新的。</strong>' +
          '旧系统长期饱受<strong>连接故障与频繁断电</strong>之苦，' +
          '<strong>Fairmount Park Conservancy 自 2023 年起主导了一次 210 万美元的彻底更换</strong>' +
          '（照明设计 The Lighting Practice，资金来自 Joanna McNeil Trust 与费城市政府），' +
          '<strong>全新系统于 2024 年 3 月揭幕</strong>：' +
          '<strong>6,400 颗独立 LED、1,600 万种色彩组合</strong>，' +
          '可做渐变、ombre 与「闪烁／流动」的动态场景，2025 年拿了 IES Philadelphia 的照明设计荣誉奖。' +
          '<strong>2026 年 6–7 月还为费城主办的 FIFA World Cup 场次做过多轮「国家色」灯光秀</strong>，' +
          '<strong>可以确认系统在 2026 年运行正常。</strong>',
        '<strong>点亮时间：黄昏自动点亮，亮到约 22:00。</strong>' +
          '「自动」意味着它跟着光感器走而不是固定钟点，' +
          '<strong>换算成你的窗口：9 月 25 日约 19:00–19:15 亮起（日落 18:53），' +
          '10 月 22 日约 18:20–18:35 亮起（日落 18:12）</strong>。' +
          '<strong>这个时间差是本条目最关键的执行细节</strong>：' +
          '<strong>灯亮的那十几分钟正好压在蓝调的中段</strong>（10/22 蓝调 18:27–18:47），' +
          '也就是说<strong>你只有大约 15–25 分钟的窗口，让「天空还有蓝色」与「灯已经亮」同时成立</strong>。' +
          '早了灯没亮，晚了天空变死黑、水面失去反射的蓝底。' +
          '<strong>另注意特别活动的灯光会从日落一直亮到日出</strong>（节庆与赞助场次），' +
          '而且<strong>任何人都可以付费预订当晚的颜色</strong>（boathouserowlights.org）——' +
          '<strong>所以你那天晚上看到的可能不是经典的白色轮廓灯，而是某个婚礼的粉色</strong>。' +
          '这不是故障，是它的运营模式，<strong>出发当天可以去那个网站看当晚有没有预订。</strong>',
        '<strong>这些灯的来历很值得知道：它们是为了阻止拆房子而装的。</strong>' +
          '1970 年代这排维多利亚船屋已经严重失修，' +
          '<strong>市里在认真讨论把它们拆掉</strong>。' +
          '照明设计师 <strong>Ray Grenald 听说这件事之后，主动提议给每栋房子勾一圈轮廓灯</strong>——' +
          '理由是「夜里被看见的建筑才会被珍惜」。' +
          '<strong>1979 年灯装上去，房子保住了</strong>，' +
          '这排船屋 1987 年列入 National Register of Historic Places，2005 年改成 LED 并加上电脑控色。' +
          '<strong>换句话说，这是一个「用照明救下一片历史街区」的完整案例</strong>，' +
          '也是你拍的这张照片真正的内容。',
        '<strong>船屋本身是 Schuylkill Navy 的家</strong>——' +
          '这个成立于 <strong>1858 年</strong>的赛艇联盟是<strong>全美最古老的业余体育管理机构</strong>。' +
          '共 15 栋（门牌 1–15 Boathouse Row／Kelly Drive），大多是 19 世纪建筑，' +
          '<strong>其中 1 号是 Lloyd Hall，是唯一对公众开放的一栋（公共活动中心，有洗手间）</strong>，' +
          'OSM 坐标 39.96895／-75.18524。' +
          '<strong>实测这排房子从 4 号（39.96929／-75.18637）到 15 号（39.96991／-75.18976）' +
          '全长约 297 米、走向 283°／103°</strong>——这个数字直接决定了焦段选择（见机位）。',
        '<strong>山坡下的 Fairmount Water Works 是同一组照片里第二个主体，而且它的地位被严重低估。</strong>' +
          '1812–1822 年由 Frederick Graff 设计建成，' +
          '<strong>是美国第一个大型市政供水系统</strong>——' +
          '把蒸汽泵房与配水设施做成一组临水的 Greek Revival 神庙，' +
          '<strong>在 19 世纪它是全美头号旅游景点</strong>，' +
          'Charles Dickens 与 Mark Twain 都专程来看过。' +
          '后来它当过 <strong>Philadelphia Aquarium（1911–1962）</strong>，' +
          '再后来当过游泳池，现在是免费的 Fairmount Water Works Interpretive Center。' +
          '<strong>它就在美术馆那座小山的正下方（OSM 39.96634／-75.18356，' +
          '距 Boathouse Row 中心 477 米、方位 316°），两者可以在同一次黄昏里连着拍完。</strong>'
      ],
      photo: '夜景与蓝调 <strong>5/5</strong>，建筑 <strong>4.5/5</strong>，风光 <strong>4.5/5</strong>，秋色 <strong>4.5/5</strong>，人像 <strong>3/5</strong>。' +
        '本区唯一的一流夜景题材，完全免费、三脚架自由、且 10 月下旬能同时拍到秋色；' +
        '扣分只在西岸机位需要走一段路，以及那 15–25 分钟的窗口容错极低。',
      shots: [
        {
          name: '西岸 MLK Drive Trail（招牌反射机位）',
          view: [39.97112, -75.19141],
          desc: '<strong>坐标为 OSM 的 Martin Luther King Junior Drive Trail 路径中心（way/1196533826），' +
            '在 Schuylkill 西岸。从此点看船屋群：中心方位 119°、距离 386 米；' +
            '15 号在 134°／195 米，4 号在 115°／475 米——' +
            '也就是说这排房子只占约 18° 的方位角，视觉上是一条向远处递退的斜线，而不是正面展开的一排。</strong>' +
            '<strong>这正是那张经典照片的实际几何：灯光的山墙轮廓一栋接一栋往深处排开，水面把整条线原样翻下来。</strong>' +
            '<strong>到场时间（本机位唯一真正重要的参数）：日落前 20 分钟到位、架好、构图完成。</strong>' +
            '<strong>9 月 25 日 18:35 到（日落 18:53，灯约 19:00–19:15 亮，蓝调 19:08–19:28）；' +
            '10 月 22 日 17:50 到（日落 18:12，灯约 18:20–18:35 亮，蓝调 18:27–18:47）。</strong>' +
            '<strong>可拍的窗口只有 15–25 分钟，不要在灯亮之后才开始找机位——那时窗口已经过半。</strong>' +
            '视线方位 119°（东南偏东），<strong>太阳落在你身后的 256°–269°</strong>，' +
            '所以<strong>日落前后船屋是正面暖光、身后天空会出现粉紫的反暮光带（Belt of Venus）</strong>，' +
            '这是灯亮之前那二十分钟里另一张完全不同的照片，值得一并拍。' +
            '<strong>焦段（按实测 297 米长、386 米远算）：' +
            '35mm 覆盖约 397 米——刚好整排加余量；' +
            '50mm 覆盖约 278 米——覆盖大部分，是密度最好的选择；' +
            '70mm 覆盖约 199 米（约三分之二）；135mm 覆盖约 103 米，抽 3–4 栋做特写。</strong>' +
            '<strong>结论：整排用 35–50mm，压缩特写用 70–135mm，24mm 只在想把美术馆的山头一起收进时用。</strong>' +
            '<strong>曝光（水面反射的关键）：三脚架、ISO 100–200、f/8、手动模式，' +
            '快门从 4 秒起试，按天空的蓝色定曝光而不是按灯定。</strong>' +
            '<strong>4–8 秒是这里的甜点</strong>：足够把水面的涟漪抹平成镜面、把灯的反射拉成完整的竖直光柱；' +
            '<strong>短于 2 秒水面会碎成一堆断续的光点，反射不成形；' +
            '长于 20 秒天空的蓝会被推过头、灯的暖色会溢出。</strong>' +
            '<strong>白平衡固定在 3800–4200K</strong>' +
            '（让灯保持暖白、让天空保持蓝，自动白平衡会把两者都拉成灰）。' +
            '<strong>关掉长曝降噪</strong>（会让每张多等一倍时间，而你只有 20 分钟）。' +
            '<strong>建议对同一构图拍一组不同快门（2／4／8／15 秒），回去再挑水面质感。</strong>' +
            '<strong>这是公共步道，三脚架完全自由。</strong>'
        },
        {
          name: 'Fairmount Water Works 与栈道（美术馆山坡下）',
          park: [39.96838, -75.18420],
          view: [39.96634, -75.18356],
          desc: '<strong>坐标为 OSM 的 Fairmount Water Works 节点（node/367975478）；' +
            '停车点为 OSM 的 Lloyd Hall / Art Museum Trailhead 停车场（way/756360183）。' +
            '临水栈道为 OSM way/705043631（39.96773／-75.18477）。</strong>' +
            '<strong>这里是同一次黄昏里的第二站，也是「船屋拍完之后往哪走」的答案</strong>' +
            '（Water Works 距船屋中心 477 米、方位 316°）。' +
            '<strong>Greek Revival 的泵房群直接坐在水面上、后面是美术馆所在的山头</strong>，' +
            '<strong>「河—神庙—山上的神庙」三层叠压是这里独有的构图。</strong>' +
            '<strong>最佳两段：① 日落前 45 分钟的黄金光</strong>' +
            '（9/25 18:08–18:53、10/22 17:27–18:12；太阳在西南低空，' +
            '白色石构与柱廊被暖光正打，河面有金色反光）；' +
            '<strong>② 蓝调加建筑照明</strong>（泵房夜间有泛光）。' +
            '<strong>注意这两段与西岸船屋机位在时间上是冲突的——一个黄昏只能认真做一处，请先决定主目标。</strong>' +
            '折中方案是<strong>把 Water Works 排在黄金时段（日落前）、然后立刻走到西岸赶蓝调</strong>，' +
            '但两处相距约 800 米、需过 MLK Bridge，' +
            '<strong>步行 10–12 分钟，时间很紧，必须提前走一遍路线。</strong>' +
            '焦段：<strong>24–35mm 拍「栈道＋泵房＋山上的美术馆」的三层关系</strong>，' +
            '<strong>50mm 拍单栋泵房的柱廊正立面</strong>，' +
            '<strong>85–135mm 从栈道压缩、把泵房与山顶的美术馆叠在一起</strong>。' +
            '<strong>低机位贴近水面用 24mm 拍倒影是这里的加分项</strong>（这一段水面比河道主流平静得多）。' +
            '<strong>三脚架自由。</strong>' +
            '<strong>Interpretive Center 免费，但只开周三至周六 10:00–17:00，' +
            '你在费城的 10/19（周一）与 10/20（周二）两天它都关着</strong>——' +
            '室内当作看不到即可。室外的栈道、坝体与泵房外观全天可拍，不受馆方时间约束，' +
            '而这里的主体本来就是外景。'
        },
        {
          name: 'Lloyd Hall 与东岸步道（船屋近景与赛艇）',
          view: [39.96895, -75.18524],
          desc: '<strong>坐标为 OSM 的 Lloyd Hall Recreation Center（way/60945606），即 1 号船屋，' +
            '是全排唯一对公众开放的一栋（有洗手间）。</strong>' +
            '<strong>东岸是拍「船屋的建筑细节与赛艇活动」的一侧，不是拍灯光全景的一侧</strong>' +
            '（贴太近，看不到整排也看不到反射）。' +
            '<strong>最佳 07:00–09:00</strong>：' +
            '<strong>这是赛艇训练的时段——天没亮就有人扛着单人艇下水</strong>，' +
            '而且此时太阳在东南低空（9/25 08:00 高度 12°、方位 102°；10/22 08:00 高度 7°、方位 111°），' +
            '<strong>船屋朝河（西南）的一面处于柔和的阴面，而河面有低角度的顺光反射</strong>，' +
            '是拍人与艇的最好条件。' +
            '<strong>次佳 15:30–17:30</strong>（西南光正打在船屋临河立面上，' +
            '维多利亚式的山墙、雨篷与彩绘木饰细节最立体）。' +
            '焦段：<strong>35mm 沿步道拍船屋的连续立面</strong>，' +
            '<strong>85–200mm 拍河面上的赛艇（长焦压缩能把艇与背景的船屋叠在一起，这是最好的一张）</strong>，' +
            '<strong>50mm 拍单栋船屋的门廊与船库大门</strong>。' +
            '<strong>快门 1/500 以上定住桨叶与水花。</strong>' +
            '<strong>2026 年 10 月 24–25 日是 Head of the Schuylkill Regatta</strong>' +
            '——那两天这里有全美规模最大的赛艇赛之一，' +
            '<strong>题材极好但人极多，而且 MLK Drive 那两天不封车（市政府为赛事运营开放机动车通行）</strong>。' +
            '<strong>三脚架自由，但赛事日请不要占住步道。</strong>'
        }
      ],
      access: {
        book: '<strong>不需预约、不需票</strong>',
        ticket: '<strong>全部免费</strong>（Fairmount Water Works Interpretive Center 也免费）',
        hours: '<strong>船屋外景、Kelly Drive 东岸步道、MLK Drive Trail 西岸步道与 Water Works 外围：' +
          '公共公园与步道，全天开放。</strong>' +
          '<strong>灯光：黄昏自动点亮、亮到约 22:00</strong>' +
          '（换算到你的窗口：9/25 约 19:00–19:15 亮，10/22 约 18:20–18:35 亮）。' +
          '<strong>特别活动的灯光会从日落亮到日出</strong>，' +
          '且<strong>任何人可付费预订当晚颜色（boathouserowlights.org）——当晚颜色无法提前保证。</strong>' +
          '<strong>Fairmount Water Works Interpretive Center：周三至周六 10:00–17:00，' +
          '周日至周二闭馆——10/19、10/20 两天进不去，只拍外景。</strong>' +
          'Lloyd Hall（1 号船屋）作为公共活动中心开放，' +
          '<strong>具体时间未能从官方渠道确认</strong>，但它是这一带唯一的公共洗手间来源。',
        parking: '<strong>Lloyd Hall / Art Museum Trailhead 停车场</strong>' +
          '（OSM way/756360183，39.96838／-75.18420），紧邻船屋东端，' +
          '<strong>费率未能从官方渠道确认</strong>；' +
          '也可用 Philadelphia Museum of Art Parking Garage（39.96715／-75.18202）。' +
          '<strong>西岸机位：MLK Drive 每周六 07:00 至周一 07:00 对机动车封闭</strong>' +
          '（2026 年 3 月 28 日至 11 月 29 日，另加 10 月 10–12 日 Indigenous Peoples\' Day 周末），' +
          '<strong>所以周末想开车到西岸机位是不行的，只能走或骑过去</strong>；' +
          '工作日 MLK Drive 通车。' +
          '<strong>例外：2026 年 10 月 24–25 日 Head of the Schuylkill Regatta 期间 MLK Drive 不封车。</strong>',
        walk: '<strong>从 Philadelphia Museum of Art 到船屋东端约 700 米 / 9 分钟</strong>（方位 308°）。' +
          '<strong>东岸到西岸机位必须过 MLK Drive Bridge</strong>' +
          '（该桥 2023 年 3 月起做了 2,010 万美元的整修，' +
          '<strong>2025 年 9 月已重新开放，新增一条 10.5 英尺宽的共享道</strong>），' +
          '<strong>从 Lloyd Hall 走到西岸 MLK Drive Trail 的机位约 800 米 / 10–12 分钟</strong>。' +
          '<strong>Schuylkill River Trail 与 MLK Drive Trail 在这一段完全贯通</strong>：' +
          '2026 年 5 月的 MLK Drive 路面维护工程官方明确说明' +
          '<strong>「The MLK Drive trail will remain open and will not be affected by the maintenance work」</strong>，' +
          '<strong>2026 年未见任何影响本段步道的施工或改道。</strong>'
      },
      notes: [
        '<strong>本条目最重要的一条：灯是新的、是好的。</strong>' +
          '2024 年 3 月完成 210 万美元的全系统更换（6,400 颗 LED），' +
          '2026 年 6–7 月的 World Cup 灯光秀可以确认它在正常运行。' +
          '<strong>「黄昏自动点亮、约 22:00 熄」是官方口径</strong>',
        '<strong>可拍窗口只有 15–25 分钟</strong>：' +
          '<strong>10 月 22 日请 17:50 到位、9 月 25 日请 18:35 到位</strong>，' +
          '<strong>灯亮之后才开始架机器就已经晚了</strong>',
        '<strong>当晚的灯是什么颜色无法提前保证</strong>：' +
          '任何人都可以付费预订整晚的颜色（婚礼、纪念日、企业赞助都可以）。' +
          '<strong>出发当天可以查 boathouserowlights.org</strong>；' +
          '看到粉色或彩虹色不是故障',
        '<strong>西岸机位的视角是「递退的斜线」而不是「正面展开的一排」</strong>' +
          '（船屋群只占约 18° 方位角）。<strong>整排用 35–50mm，特写用 70–135mm</strong>',
        '<strong>水面反射的关键是 4–8 秒</strong>：' +
          '短于 2 秒反射会碎成断续光点，长于 20 秒天空会过。' +
          '<strong>ISO 100–200、f/8、白平衡固定 3800–4200K、关掉长曝降噪</strong>',
        '<strong>MLK Drive 周末对机动车封闭</strong>（每周六 07:00 至周一 07:00，' +
          '2026 年 3 月 28 日至 11 月 29 日，另加 10 月 10–12 日）。' +
          '<strong>周末去西岸只能步行或骑行</strong>，' +
          '但反过来说，封车的周末西岸步道更安静好拍',
        '<strong>2026 年 10 月 24–25 日是 Head of the Schuylkill Regatta</strong>：' +
          '题材极佳（全美最大规模的赛艇赛之一）但人流巨大，' +
          '<strong>而且那两天 MLK Drive 例外地对机动车开放</strong>，' +
          '西岸步道会同时有车流与人流',
        '<strong>Schuylkill River Trail 与 MLK Drive Trail 在这一段 2026 年完全贯通、无施工改道</strong>；' +
          'MLK Drive Bridge 已于 2025 年 9 月整修完成重开、新增 10.5 英尺共享道',
        '<strong>Water Works 与西岸船屋的黄金／蓝调时段互相冲突</strong>，' +
          '一个黄昏只能认真做一处。想两处都要就先拍 Water Works 的黄金光、' +
          '再赶 800 米过桥拍西岸蓝调，<strong>但请务必提前走一遍这条路</strong>',
        '<strong>两岸步道秋季日落后照明有限、人烟稀少</strong>，' +
          '带头灯（或手机灯）、不要单独在完全无人的路段久留，器材不要离身',
        '<strong>本条目由 Philadelphia Parks &amp; Recreation 与 Fairmount Park Conservancy 运营，' +
          '不受联邦拨款影响</strong>'
      ],
      images: [
        { url: 'img/boat-houses-at-night-2442597025-2a6f7be3.jpg',
          cap: '入夜后的灯光轮廓与水面反射（即西岸机位效果） · Matt B / CC BY-SA 2.0' },
        { url: 'img/boathouse-row-oct-2024-ed3499d9.jpg',
          cap: '十月的船屋群与河岸秋色 · Domaking9000 / CC BY-SA 4.0' },
        { url: 'img/fairmount-water-works-at-dusk-b71bb0d3.jpg',
          cap: '黄昏的 Fairmount Water Works 与美术馆山坡 · SkipL / CC BY-SA 4.0' }
      ]
    }
  ]
};
