module.exports = {
  id: 'salem-north-shore',
  name: 'Salem 与 North Shore',
  navName: 'Salem',
  color: '#5ac8fa',
  lead: '这个子地区是<strong>波士顿以北的 Essex County 海岸</strong>，' +
    '手册里收了七个条目：<strong>Salem 老城五个</strong>' +
    '（Peabody Essex Museum、House of the Seven Gables、Salem Maritime 与 Derby Wharf、' +
    'Witch House、Old Burying Point 与 Witch Trials Memorial 及 McIntire 历史区），' +
    '外加两个不在 Salem 的海港小镇：<strong>Marblehead 与 Rockport</strong>。' +
    '<strong>先说最有用的一条：在这片地方，「星期几」比「几点到」重要得多。</strong>' +
    'PEM <strong>每周二与周三连闭两天</strong>，NPS 的室内建筑是<strong>周三至周日</strong>制，' +
    'Marblehead 的 Jeremiah Lee Mansion 是<strong>周二至周六</strong>、还只开六月到十月，' +
    'Abbot Hall 按镇政府作息、<strong>周五中午 12:30 就关</strong>——' +
    '<strong>把这几条排错，一天能白跑三个地方</strong>（逐馆的闭馆日见下面的专条）。' +
    '<strong>第二条：Salem 的十月是另一个世界。</strong>' +
    'Haunted Happenings <strong>整个十月运行</strong>，' +
    '给这座只有约 4.4 万人口的小城带来<strong>超过一百万人次</strong>访客' +
    '（Destination Salem 官方口径原文「draws more than 1 million visitors」），' +
    '而人全挤在 Essex Street 到 Derby Street 之间不到一平方公里的殖民地核心区里。' +
    '<strong>万圣节季来的人必须接受三件事：定时票、当日限流预约、以及 10:00 之后街上没有空隙。</strong>' +
    '<strong>第三条，也是本区真正的解法：Salem 之外还有两个同样够看、却完全不受这股人流影响的镇子。</strong>' +
    '<strong>Marblehead</strong> 是新英格兰保存最完整的殖民时期老城之一，' +
    '全城免费、没有旺季加价、秋季工作日常常安静到只有你自己；' +
    '<strong>Rockport</strong> 直接坐在通勤铁路的终点站上，' +
    '<strong>Motif No. 1 与 Bearskin Neck 全部免费</strong>。' +
    '<strong>最后一条几何事实值得记住：北岸的海岸整体朝东与东北，这是一条日出海岸而不是日落海岸</strong>' +
    '（与加州完全相反）——' +
    'Salem 的 Derby Wharf 是清晨的主场，而想看黄昏就得去朝西的港湾（Marblehead 与 Rockport 内港）。',
  callouts: [
    {
      type: 'warn',
      title: '万圣节季（十月）的 Salem：先知道会发生什么',
      html: '<p><strong>Haunted Happenings 不是一个周末的活动，是一整个月的城市状态。</strong>' +
        '它<strong>每年十月 1 日到 31 日全月运行</strong>（2026 年为 10 月 1 日至 10 月 31 日），' +
        '<strong>整月为 Salem 带来超过一百万人次访客</strong>。' +
        '<strong>关键是：这不是节假日的临时措施，周二到周四同样适用。</strong>' +
        '十月中旬起客流持续爬坡，<strong>真正的峰值在最后一周与万圣夜。</strong></p>' +
        '<p><strong>具体会遇到的限制（以下为 2026-09-14 核实的当年口径，制度每年微调，出行前请复查官网）：</strong></p>' +
        '<ul>' +
        '<li><strong>House of the Seven Gables：十月必须提前买定时票</strong>' +
        '（官方原文「Advance tickets are REQUIRED」），<strong>不退款、不可改期、迟到不得入场</strong>，' +
        '而且<strong>十月成人票 $31，比其他月份的 $26 贵 $5</strong>。' +
        '票按半月分批放，需要在前一个月的放票日就下手。</li>' +
        '<li><strong>Witch House：十月所有票只能在线买，每天早上 08:00 放当天的票、只放当天</strong>，' +
        '售完即止、不退款、不接受迟到入场，<strong>而且要在室外等到自己那个时段</strong>。</li>' +
        '<li><strong>Old Burying Point（Charter Street Cemetery）：十月限流，需要当日线上预约</strong>' +
        '（免费、每 15 分钟一档、首场 10:00、17:00 关门、<strong>只能当天预约</strong>）。' +
        '2026 年的预约制自 <strong>9 月 18 日</strong>起生效。' +
        '官方另有一句警告值得记住：<strong>「任何向你收费让你进墓园的人都与 Salem 市政府无关」</strong>。</li>' +
        '<li><strong>停车：十月不要开车进 Salem。</strong>' +
        '市政府的临时季节性居民停车许可覆盖<strong>九月中旬到十一月初</strong>' +
        '（2026 年为 9 月 15 日至 11 月 1 日），游客停进居民区会被开票。' +
        'House of the Seven Gables 官方自己写<strong>「Parking is extremely scarce during October in Salem」</strong>。</li>' +
        '<li><strong>封路：市政府的正式封路公告只针对十月的周末、Indigenous Peoples\' Day（十月第二个周一）' +
        '与 10 月 31 日</strong>，典型条文是「Essex Street from Hawthorne Boulevard to New Liberty Street ' +
        '与 Front Street 每个周六与周日 09:00–22:00 禁止穿行、禁止路边停车」。' +
        '<strong>也就是说十月的普通工作日大概率没有硬性封路</strong>，' +
        '但 Essex Street 本来就是常年步行街，Derby Street、Hawthorne Boulevard 与 Charter Street 一带' +
        '会因摊位、导览队伍与警戒线出现事实上的通行受阻。' +
        '<strong>封路清单逐年发布，出行前刷 salemma.gov。</strong></li>' +
        '</ul>' +
        '<p><strong>实务建议，不含糊：</strong>' +
        '<strong>① 十月想来 Salem，选周三到周五，避开周末与 10 月最后一周；' +
        '② 收费景点的票在放票日当天就买掉；' +
        '③ 把免费且不限流的那几样当成保底（见下一条）；' +
        '④ 如果你只有一天、又不想被人潮支配，直接把这一天给 Marblehead 或 Rockport。</strong>' +
        '实时停车余量与封路看 <strong>parksalem.com</strong>。' +
        '（<strong>注：2026 年恰好是 Salem 建城 400 周年（Salem 400+），官方口径明确把当年当成加码的一年</strong>；' +
        '这条只对 2026 年成立。）</p>'
    },
    {
      type: 'good',
      title: '不要票、不要预约、也不受限流影响的那几样',
      html: '<p><strong>这一条是整个子地区最实用的信息：即使在万圣节季，也有一批高质量的点位完全免费、' +
        '不需要预约、没有开放时间限制。</strong>行程再乱，这些都不会掉。</p>' +
        '<ul>' +
        '<li><strong>Salem Maritime National Historical Park 的户外园区与 Derby Wharf：官方口径「Open 24/7」</strong>，' +
        '<strong>全部免费</strong>（NPS 原文「All buildings and programs are free」）。' +
        '623 米的栈桥、尽端的 Derby Wharf Light、Friendship of Salem 的泊位、Custom House 的外立面' +
        '——<strong>这些加起来已经是 Salem 户外部分的主体，而且一分钱不要、不受十月任何限流影响。</strong>' +
        'NPS 甚至专门做了一个「在 Derby Wharf 看日出」的官方页面，海滩上放了 6 把先到先得的 Adirondack 椅。</li>' +
        '<li><strong>Salem Witch Trials Memorial：免费、不需预约、黎明到黄昏开放、不限流。</strong>' +
        '二十条刻着被处死者姓名与处刑日期的悬挑石凳，' +
        '以及门槛上那段被墙刻意截断的辩词——<strong>这是 Salem 最有分量的十五分钟，而它是免费的。</strong></li>' +
        '<li><strong>Chestnut Street 与 McIntire 历史区：公共街道，24 小时，免费。</strong>' +
        '449 米连续的联邦式豪宅立面，距节庆核心区约 700 米，' +
        '<strong>是 Salem 老城里全天都安静的一条街。</strong></li>' +
        '<li><strong>Marblehead：Fort Sewall 与 Crocker Park 全部免费</strong>，' +
        '<strong>Abbot Hall 里的《The Spirit of \'76》原作也免费</strong>。</li>' +
        '<li><strong>Rockport：Motif No. 1、Bearskin Neck、花岩防波堤与 Front Beach 全部免费</strong>' +
        '（唯一支出是火车票）。</li>' +
        '</ul>' +
        '<p><strong>时段上的一条通则：Salem 核心区在 10:00 之后开始上人，' +
        '万圣节季 11:00–17:00 基本是人挤人。</strong>' +
        '<strong>所以「清晨那一档」在这里价值极高</strong>——' +
        '日出到 08:30 之间，Derby Wharf、Chestnut Street 与 Witch Trials Memorial 通常只有本地跑步的人，' +
        '而这三处恰好全部免费且不限时间。' +
        '<strong>反过来要认清：收费的几个馆最早也要 10:00 才开门</strong>' +
        '（Seven Gables 10:00、PEM 10:00、Witch House 10:00、墓园首场 10:00），' +
        '早起换不到它们的清场，只能换到户外的清场。</p>'
    },
    {
      type: 'info',
      title: '星期比时辰重要：本区各处的每周闭馆日一览',
      html: '<p><strong>这是本区最容易造成整天浪费的一条，核实日期 2026-09-14。</strong>' +
        '各处的规则互不相同，而且其中两处的闭馆日恰好错开，很容易两头都扑空：</p>' +
        '<ul>' +
        '<li><strong>Peabody Essex Museum：周二与周三闭馆</strong>，其余日 10:00–17:00。</li>' +
        '<li><strong>Salem Maritime（NPS）室内建筑：周三至周日</strong> 9:30–16:30' +
        '（Narbonne House 秋季为 13:00–16:00；<strong>Derby House 九月下旬起整季闭馆</strong>）。' +
        '<strong>→ 周一与周二所有室内不开，但户外园区与栈桥 24 小时照常。</strong></li>' +
        '<li><strong>House of the Seven Gables：每日 10:00–18:00，无每周闭馆日</strong>' +
        '（含周二——在 Salem 这一点很值钱）。</li>' +
        '<li><strong>Witch House：4 月 15 日至 11 月 15 日每日 10:00–17:00</strong>（最晚入场 16:30）；' +
        '<strong>11 月 16 日至 4 月 14 日只开周四至周日 12:00–16:00</strong>。' +
        '<strong>但官方把「联邦法定假日」也列为闭馆日，十月第二个周一就是一个联邦假日，' +
        '旺季当天是否照常开放未能确认。</strong></li>' +
        '<li><strong>Witch Trials Memorial、Old Burying Point、Chestnut Street：无每周闭馆日。</strong></li>' +
        '<li><strong>Marblehead 的 Jeremiah Lee Mansion：只开 6 月 1 日至 10 月 31 日、周二至周六</strong>，' +
        '整点发团、<strong>最后一团 15:00</strong>；周日与周一不开。</li>' +
        '<li><strong>Abbot Hall（含《The Spirit of \'76》）：按镇政府作息</strong>——' +
        '周一、周二、周四 8:00–17:00，周三 8:00–18:00，<strong>周五 8:00–12:30</strong>。</li>' +
        '</ul>' +
        '<p><strong>据此给出三条结论：</strong>' +
        '<strong>① 周四至周六是本区最完整的日子，几乎所有室内都开；</strong>' +
        '<strong>② 周一适合去 PEM（PEM 开、NPS 室内关）；</strong>' +
        '<strong>③ 周二是最差的一天——PEM 闭馆、NPS 室内闭馆、Abbot Hall 虽开但 Lee Mansion 才刚好开</strong>，' +
        '如果只能周二来，就把这一天全部交给户外（Derby Wharf、Chestnut Street、Fort Sewall、Rockport）。</p>'
    },
    {
      type: 'info',
      title: '无车怎么走：MBTA Newburyport/Rockport 线实操',
      html: '<p>这是无车旅行者的决定性因素。全线从 <strong>Boston North Station</strong> 发车，' +
        '在 <strong>Beverly</strong> 分岔为 Rockport 支线与 Newburyport 支线，' +
        '<strong>两条支线的车都停 Salem</strong>。' +
        '票价为 <strong>2026-09-14 核实的 MBTA 官方票价表</strong>：</p>' +
        '<ul>' +
        '<li><strong>Salem：约 33–37 分钟，Zone 3，单程 $8.00（优惠票 $4.00）。</strong>' +
        '工作日班次很密，早晚高峰约每 30 分钟一班，白天 30–60 分钟一班。' +
        '<strong>车站到 Derby Wharf 约 1.2 公里／15 分钟，到 PEM 约 800 米／10 分钟，' +
        '到 Chestnut Street 约 900 米／11 分钟。</strong></li>' +
        '<li><strong>Rockport（终点站）：约 76–79 分钟，Zone 8，单程 $12.25（优惠票 $6.00）。</strong>' +
        '<strong>下车走 10–12 分钟即到 Dock Square 与 Bearskin Neck，这是全区可达性最好的重点目标。</strong>' +
        '<strong>注意 Rockport 站没有自动售票机，请用 mTicket App 提前买票。</strong></li>' +
        '<li><strong>Marblehead：不在通勤铁路上，这是本区可达性最差的一处。</strong>' +
        '官方列出的公交是 <strong>441／442 路（自蓝线 Wonderland 站）</strong>与' +
        '<strong>448／449 路（自 Downtown Crossing）</strong>，' +
        '在 Pleasant St @ Rockaway 下车后走几个街区到 Abbot Hall；' +
        '<strong>从 Salem 过来要坐 455 路到 Lynn 再换 441／442，约 60–83 分钟，' +
        '直接打车约 6.5 公里、10–15 分钟更省事。</strong></li>' +
        '</ul>' +
        '<p><strong>两条能省钱省事的规则：</strong>' +
        '<strong>① $10 Commuter Rail Weekend Pass 在周六与周日可无限次乘坐所有线路与区段</strong>——' +
        '周末往返 Rockport 只要 $10，而两张单程票是 $24.50。' +
        '<strong>MBTA 还把周一／周五的假日并成三天期的 Holiday Weekend Pass</strong>' +
        '（2026 年的 Columbus Day / Indigenous Peoples\' Day 档期为 10 月 10–12 日），' +
        '正好覆盖十月那个长周末；假日档期每年不同，出行前查 mbta.com。' +
        '<strong>② 工作日没有这种通票，只能按单程票买。</strong></p>' +
        '<p><strong>关于十月加班车有一个常见误解要纠正：MBTA 为 Salem 的 Haunted Happenings 加开的班次历来只加周末。</strong>' +
        '官方新闻稿的措辞一贯是「Several extra trains will run on <strong>Saturdays and Sundays</strong>」，' +
        '并配套 <strong>$10 周末通票</strong>与 10 月 31 日的单日通票。' +
        '<strong>十月的周二至周四跑的是常规工作日班表——这其实不是坏事，' +
        '工作日班表本身就比周末密，车上也没有周末那种满载的节庆人流。</strong></p>' +
        '<p><strong>最后一条必须自己做的功课：MBTA 的时刻表按春夏／秋冬换版，' +
        '而换版时刻常常晚于你订行程的时间。出行前务必按自己的日期在 mbta.com 上重查一次具体班次，' +
        '尤其是末班车。</strong>' +
        '一条串点建议：<strong>Rockport 支线的车经停 Salem，Salem 到 Rockport 约 40 分钟，' +
        '所以「Salem 半天 + Rockport 半天」是同一条线上一趟车能做完的</strong>；' +
        '而 Marblehead 与 Rockport 不在一天里，硬凑会把时间全花在换乘上。' +
        '客服 617-222-3200（周一至周五 6:30–20:00）。</p>'
    },
    {
      type: 'tip',
      title: '秋季来这里要先懂的三件事：光、潮位、秋色',
      html: '<p><strong>① 光：Massachusetts 处在东部时区的最东缘，所以这里的白天两头都被压短。</strong>' +
        '以<strong>十月中旬</strong>、取点 42.5°N / 70.9°W 为例（由 NOAA 太阳位置算法计算）：' +
        '<strong>日出约 06:53–06:56（方位约 100°），日落约 18:03–18:07（方位约 260°），' +
        '正午太阳高度只有约 39°</strong>。' +
        '<strong>越往十月下旬走，日出越晚、日落越早；而美国夏令时到 11 月第一个周日才结束，' +
        '之后日落会再提前一小时。</strong>' +
        '实际后果是：<strong>秋季一天里真正好用的光大约只有两小时</strong>' +
        '（日出后一小时与日落前一小时），' +
        '而本区多数收费景点 10:00 才开、17:00–18:00 就关，' +
        '<strong>等于把清晨与黄昏这两段全留给了免费的户外点位。</strong></p>' +
        '<p><strong>② 朝向：北岸是日出海岸，不是日落海岸。</strong>' +
        'Cape Ann 与整条北岸的开阔海面在<strong>东到东北</strong>方向，' +
        '秋季日出方位约 100°–115° 正落在海上，日落方位约 245°–260° 落在内陆一侧。' +
        '<strong>这与加州海岸完全相反，排时间时必须按这个来：</strong></p>' +
        '<ul>' +
        '<li><strong>清晨主场</strong>：<strong>Salem 的 Derby Wharf</strong>' +
        '（栈桥朝东南约 152° 伸进海港，日出的低光从左前方横切整道栈桥与灯塔）。</li>' +
        '<li><strong>黄昏主场</strong>：只有<strong>朝西的港湾</strong>成立——' +
        '<strong>Marblehead 的 Fort Sewall 与 Crocker Park</strong>（越过港口朝西南看老城与锚地）、' +
        '<strong>Rockport 的内港</strong>（午后到黄昏的光正打在 Motif No. 1 的正面）。</li>' +
        '<li><strong>不吃方向、全天可看</strong>：<strong>Chestnut Street</strong>' +
        '（街道走向实测 72.5°／252.5°，全长 449 米；' +
        '<strong>北侧那排联邦式立面法向约 162.5°，秋季全天受光，而南侧那排全天零直射</strong>；' +
        '另有一个彩蛋：<strong>十月的日落方位与街道轴线只差不到 8°，落日基本沿街道纵轴下沉</strong>）、' +
        '以及 <strong>Marblehead 的老城街巷</strong>（巷窄楼高，秋季正午太阳高度只有约 39°，路面全天柔光）。</li>' +
        '</ul>' +
        '<p><strong>③ 潮位：本区有两个潮汐口径，差别很大，必须分开用。</strong>' +
        '数据源是 <strong>NOAA Tides &amp; Currents 官方预报</strong>的两个站：' +
        '<strong>Boston（8443970）用于 Salem 与 Marblehead，潮差约 10 英尺；' +
        'Gloucester（8447435）用于 Rockport 与 Cape Ann，潮差只有 5–6 英尺，而且比 Boston 晚约 50 分钟</strong>' +
        '（Boston 在 Massachusetts Bay 内部有放大效应，Cape Ann 在外侧）。' +
        '<strong>哪里要满潮、哪里要低潮：</strong>' +
        '<strong>Rockport 内港（Motif No. 1）要满潮</strong>——满潮时船浮起、倒影完整，' +
        '低潮会露出泥滩与水草、船身坐底；' +
        '<strong>Derby Wharf 低潮时栈桥根部会露出滩石与海藻</strong>，' +
        '当纹理前景是加分，想看「满潮的港口」就得等高潮（而那往往是人最多的时段）；' +
        '<strong>Rockport 的花岩防波堤在涨潮与涌浪时极滑，那时不要上去</strong>。' +
        '<strong>出行前按自己的日期查一次这两个站的潮表，这是本区最容易被忽略、又最影响结果的一项功课。</strong></p>' +
        '<p><strong>④ 秋色：这一条要纠正一个很常见的误判。</strong>' +
        '<strong>Massachusetts 沿海的秋色比内陆晚一到两周，比 Vermont 与 New Hampshire 晚两到四周</strong>' +
        '（海水的热惯性把沿海夜温托高，落叶推迟）。' +
        '各方口径：<strong>全州综合峰值约十月 7–15 日（由内陆与 Berkshires 主导）；' +
        '但 Greater Boston、North Shore 与 Cape Ann 的峰值普遍给到十月 18 日至 11 月 1 日</strong>，' +
        '有来源把 Cape Ann 单列为<strong>十月 22 日至 11 月 5 日</strong>，' +
        '长期跟踪新英格兰秋色的 Jeff Foliage 更直接写「在 Salem 看到最漂亮的秋色是十月 25 日到 11 月 5 日」。' +
        '<strong>→ 所以十月上中旬来北岸海岸线的人，大概会遇到三到五成转色的状态：' +
        '红枫有零星色块，橡树与山毛榛基本还是绿的，不要指望满山金红。' +
        '要在这条海岸上看到峰值秋色，得等到十月下旬至十一月初。</strong>' +
        '<strong>反过来有一个被严重低估、而且十月中旬就正好的题材：盐沼。</strong>' +
        'Spartina 盐沼草的转色与树木无关，<strong>十月中旬正是它从绿转成铜金色的时候</strong>。' +
        '<strong>当年的实际转色进度无法提前预知，出行前刷 mass.gov 的 foliage report。</strong></p>'
    }
  ],
  spots: [
    {
      id: 'seven-gables',
      n: 1,
      name: '七个尖角的房子',
      en: 'The House of the Seven Gables',
      must: 4,
      score: 3.5,
      tldr: '1668 年殖民地大宅，外观与海边花园是拍摄主体；十月必须提前买定时票、成人涨到 $31、不退不改。',
      tags: [
        { t: '十月成人 $31', c: 'paid' },
        { t: '必须提前买定时票', c: 'risk' },
        { t: '不退不改不改期', c: 'risk' },
        { t: '室内禁闪光灯', c: 'risk' }
      ],
      highlights: [
        '<strong>1668 年由船主兼商人 John Turner 建于 Salem 港边</strong>，' +
          '正式名称是 <strong>Turner-Ingersoll Mansion</strong>，' +
          '是 <strong>新英格兰现存最古老的木构大宅之一</strong>。' +
          'Nathaniel Hawthorne 1851 年的小说《The House of the Seven Gables》以它为原型——' +
          '<strong>但要注意因果关系是反的：小说出版时这栋房子的尖角早已被拆到只剩三个</strong>，' +
          '现在你看到的七个尖角是 <strong>1908–1910 年由 Caroline Emmerton 出资、' +
          '按小说描述与建筑考古复原出来的</strong>。' +
          '换句话说，<strong>这栋建筑的最著名特征是小说反向塑造建筑的结果</strong>。',
        '<strong>Emmerton 把它开成博物馆的目的不是旅游而是社会工作</strong>：' +
          '门票收入用来办 Settlement House 服务当时 Salem 的移民社区。' +
          '<strong>这条传统一直延续到今天——机构现在仍然免费提供 ESL 与公民入籍课程</strong>，' +
          '你买的这张 $31 的票有一部分是在付这个。' +
          '园区 2007 年被列为 National Historic Landmark District，' +
          '<strong>占地 2 英亩，含殖民复兴式海边花园与若干历史建筑</strong>，' +
          '其中包括被整体搬迁过来的 <strong>Nathaniel Hawthorne Birthplace</strong>。',
        '<strong>摄影主体是外观与海边花园，不是室内。</strong>' +
          '室内是 1600–1700 年代的低矮木构、分多层、跟团 45 分钟、通道极窄，' +
          '官方明确<strong>禁止闪光灯与摄像</strong>，实际上也没有架设空间。' +
          '真正出片的是<strong>朝海港那一侧的黑色木瓦山墙群</strong>——' +
          '七个尖角在同一个立面上重叠出的锯齿轮廓线，是这里唯一无法替代的构图。',
        '<strong>十月的票务规则是硬约束，必须提前几周处理：</strong>' +
          '官方原文写明<strong>「Advance tickets are REQUIRED」、门票不退款、不可改期、' +
          '迟到不得入场也不退款、需提前 15 分钟到场签到</strong>。' +
          '<strong>10 月 1–15 日的票在 9 月 1 日（会员）与 9 月 4 日（公众）放出</strong>，' +
          '<strong>10 月 16–31 日的票在 9 月 16 日与 9 月 19 日放出</strong>。' +
          '也就是说<strong>想在十月上半月进这栋房子，就得在前一个月的放票日当天去抢（2026 年对公众是 9 月 4 日）</strong>。',
        '<strong>十月的价格与平时不同，这一条容易踩坑。</strong>' +
          'Mansion Tour Package（含 Grounds Pass）<strong>十月成人 $31、老年／教师／急救人员／大学生 $26、' +
          '5–12 岁儿童 $21、无障碍票 $16</strong>；' +
          '而<strong>11 月至 9 月同一张票只要 $26</strong>——十月每人贵 $5。' +
          '<strong>Salem 居民、NARM 会员、SNAP／WIC／EBT 持卡人与 Massachusetts 公立院校学生免费</strong>，' +
          '5 岁以下免费。<strong>只逛花园与外围的 Grounds Pass 单独出售，但官网未把它的十月价格列在价目表里，未能核实其具体票价。</strong>'
      ],
      tour: [
        '<strong>进主宅只有一条路：跟团。</strong>官方 FAQ 原文是' +
          '「a 45-minute guided tour through <strong>9 historic rooms</strong>」，' +
          '<strong>不能自己进去逛、不能中途脱队、也不能回头重看</strong>。' +
          '到 115 Derby Street 的 Visitor Center 换票签到（<strong>官方要求提前 15 分钟</strong>），' +
          '讲解员带队从一层走到阁楼层，全程站立并爬楼梯。' +
          '<strong>Newsweek 把它评为全美第一的历史民居导览，这个团的质量本身就是这里的主要卖点</strong>——' +
          '只买 Grounds Pass 不进主宅，这个景点的价值会掉一半以上。',
        '<strong>三样别错过：</strong>① <strong>藏在烟囱后面的暗楼梯（secret staircase）</strong>，' +
          '全程唯一会让整团发出声音的一处，讲解员会让你自己爬上去；' +
          '② <strong>阁楼层那组尖角的内侧屋架</strong>，' +
          '只有在那里才看得懂「七个尖角」是怎么搭出来的；' +
          '③ 讲解会点明<strong>现在的七个尖角是 1908–1910 年按小说描述复原的，而小说出版时实物只剩三个</strong>——' +
          '这条因果颠倒的事实是整场导览里最值得带走的一句话。',
        '<strong>跟团之外的部分全是自助，按这个顺序走最省时间：</strong>' +
          '<strong>Nathaniel Hawthorne Birthplace</strong>（作家出生的那栋房子，' +
          '20 世纪从 Union Street 整体搬迁到园内）→ ' +
          '<strong>海边的 Colonial Revival 花园与草坪</strong> → Counting House / Kids\' Cove → Museum Store。' +
          '官方另配<strong>一段 30 分钟的手机自助音频导览</strong>（含西班牙语版），' +
          '自备耳机，建议进园前先加载好。',
        '<strong>可以跳过的：Counting House 与 Museum Store，赶时间直接放弃不心疼。</strong>' +
          '<strong>但不要跳花园</strong>——它是全园唯一能同时看到宅子与 Salem 港水面的地方，' +
          '也是唯一能坐下歇脚的地方，对带老人孩子的人是刚需。' +
          '带孩子的反过来：跟团之外的时间全给 Kids\' Cove 与那片草坪。',
        '<strong>人流与流程上的坑：真正的风险不是排队，而是赶不上自己那一场。</strong>' +
          '<strong>定时票不退不改、迟到不得入场也不退款</strong>，' +
          '而万圣节季（十月）场场满员。' +
          '<strong>最安静的一团是开门那场 10:00</strong>，越到下午越挤。' +
          '<strong>室内是 1600 年代木构：天花极低、楼梯陡窄、要爬多层</strong>，' +
          '大背包、婴儿车与行李箱都带不进去；' +
          '官方明说历史建筑不适合轮椅，行动不便者只能看一楼（另有 $16 的 Accessibility 票）。',
        '<strong>餐饮与卫生间：园内没有餐厅</strong>，' +
          'Museum Store 只有少量零食饮料。' +
          '<strong>卫生间在 Visitor Center，是无障碍的，也是 Derby Street 这一带最靠得住的一处公共卫生间</strong>' +
          '（NPS 的 Central Wharf 卫生间只在 9:30–16:30 开）。' +
          '<strong>食物不得带入主宅，但持票可以在花园与草坪上吃</strong>，' +
          '所以最省事的吃法是在 Derby Street 沿街买好带进花园。'
      ],
      photo: '建筑 <strong>4/5</strong>，园林 <strong>3.5/5</strong>，室内 <strong>2/5</strong>，风光 <strong>2/5</strong>。' +
        '加分在那组山墙轮廓与紧贴海港的位置；' +
        '扣分全在票务与人流——<strong>十月这里是 Salem 最典型的「定时票加满场」体验，' +
        '你几乎不可能拿到一张没有其他游客的室内照片</strong>。',
      shots: [
        {
          name: 'Turner Street 街面（免票拍山墙群）',
          view: [42.52182, -70.88382],
          desc: '<strong>坐标为 OSM 的 The House of the Seven Gables 实体节点（115 Derby Street）。</strong>' +
            '<strong>这是本条目性价比最高的机位：从公共街道拍，不需要票、不受 10:00 开门限制。</strong>' +
            '<strong>最佳 06:53–08:00</strong>（以十月中旬为例：日出约 06:53、方位约 100°、高度 0°→11°）：' +
            '低角度的暖光从东南东扫过黑色木瓦，<strong>七个尖角会各自投出一道影子，锯齿轮廓最清楚</strong>；' +
            '而且这个时段街上基本没人，这在十月的 Salem 是唯一能白捡的东西。' +
            '<strong>次佳 15:30–17:00</strong>（方位 226°–248°），光从西南来，' +
            '打的是山墙的另一侧，反差更硬、木瓦纹理更粗。' +
            '<strong>焦段 24–35mm 拍完整立面加前景铺装，50mm 是这里最好的焦段</strong>——' +
            '压缩之后七个尖角会层层贴合、密度最高，而广角会把它们拉散成一排孤立的三角形。' +
            '<strong>85–135mm 单独抽两三个尖角与烟囱的重叠关系</strong>，是这里最容易被忽略的构图。' +
            '街道窄、有电线与路灯杆，<strong>找角度让它们落在山墙一侧而不是横穿画面</strong>。' +
            '手持即可，<strong>不要在住宅区人行道上架三脚架挡道</strong>。'
        },
        {
          name: '海边花园与朝海立面（需门票）',
          desc: '<strong>无独立 OSM 实体，地图无针脚（位于 115 Derby Street 园区内，在主建筑东南侧靠海港一侧）。</strong>' +
            '<strong>要进这里必须持 Grounds Pass 或 Mansion Tour Package，最早 10:00 开门。</strong>' +
            '这一侧是殖民复兴式的对称花园加草坪，背后就是 Salem 港的水面。' +
            '<strong>最佳 15:00–17:00</strong>：园区 <strong>18:00 才关</strong>（官方原文「Open daily 10 A.M.-6 P.M.」），' +
            '<strong>所以这里是 Salem 少数能拍到接近黄金光的付费景点</strong>——' +
            '十月中旬的 17:00 太阳高度只有约 10.7°、方位约 248.6°，' +
            '低光从西南西斜切过草坪，把花园的黄杨边框与砖径的影子全部拉长。' +
            '<strong>注意 18:00 关门而日落 18:07，所以最后一档只能拍到日落前 7 分钟，真正的日落与蓝调在里面拍不到。</strong>' +
            '24–35mm 把花园、山墙与海面收在一张里（这是唯一能同时交代「宅子就在海边」的构图），' +
            '85mm 压花园细节与远处港口的船。' +
            '<strong>器材注意：官方允许「recreational photography for personal use」，' +
            '但「professional photography shoots」需要事先批准、签合同并提供保险证明。' +
            '一个人拿一机一镜没问题，架起三脚架加反光板就会被当成商业拍摄。</strong>'
        },
        {
          name: '室内跟团（Mansion Tour，45 分钟）',
          desc: '<strong>无独立 OSM 实体，地图无针脚（位于 Turner-Ingersoll Mansion 建筑体内）。</strong>' +
            '<strong>官方明确：允许个人手持拍摄，但禁止闪光灯与摄像（原文「no flash photography or videography is allowed」）。</strong>' +
            '房子是 1600–1700 年代木构，<strong>天花极低、窗小、木饰全为深色</strong>，' +
            '实测需要 <strong>ISO 3200–6400、f/1.8–2.8、1/50–1/80</strong>，' +
            '强烈建议带一支 <strong>24mm 或 35mm 的 f/1.4–f/1.8 定焦</strong>，变焦头在这里基本废掉。' +
            '<strong>白平衡固定在 3200–3800K</strong>，自动白平衡在深色木饰加窗光的混合下会来回跳。' +
            '构图只抓两样：<strong>那道著名的暗藏楼梯</strong>，以及<strong>从小窗斜射进来打在宽木地板上的光带</strong>。' +
            '<strong>45 分钟跟团、多层楼、通道窄、十月场场满，' +
            '实务上你只能在人头缝里抓拍，不要指望干净的空房间。</strong>' +
            '<strong>禁三脚架（无明文，但通道宽度决定了不可能）。</strong>' +
            '需要爬楼梯，无障碍不可达（另有 $16 的一楼无障碍票）。'
        }
      ],
      access: {
        visit: '<strong>建议 100–120 分钟</strong>：签到提前 15 分钟 + <strong>45 分钟主宅跟团</strong>' +
          ' + 30 分钟花园与自助音频导览 + 15 分钟 Hawthorne Birthplace。' +
          '<strong>只看重点 60 分钟</strong>（跟团 45 分钟 + 花园快走 15 分钟，放弃音频导览与 Counting House）。' +
          '<strong>不买票、只在 Turner Street 与 Derby Street 街面看外观：15–20 分钟。</strong>' +
          '（依据：官方 45 分钟导览时长 + 30 分钟官方音频导览时长 + 2 英亩园区规模推算。）',
        book: '<strong>万圣节季（十月）必须提前买定时票，官方原文「Advance tickets are REQUIRED」。</strong>' +
          '<strong>放票规则（2026 年官网 7gables.org/tickets 原文，核实日期 2026-09-14）：' +
          '平时是「提前一个月放下一个月的票，会员每月 1 日、公众每月 4 日」，十月单独处理——' +
          '10 月 1–15 日的票于 2026 年 9 月 1 日对会员、9 月 4 日对公众放出；' +
          '10 月 16–31 日的票于 9 月 16 日与 9 月 19 日放出。</strong>' +
          '<strong>也就是说想在万圣节季进这栋房子，必须在前一个月的放票日就下手；' +
          '放票日期每年会变，请以出行当年官网为准。</strong>' +
          '<strong>不退款、不可改期、迟到不得入场（官方原文：「We do not have the staff resources to accommodate ' +
          'requests for rescheduling」「All sales final」「we cannot accept late arrivals」）</strong>，' +
          '<strong>需提前 15 分钟到场签到</strong>。' +
          'Mansion Tour 的发团频次按季节浮动，官网现场看余位。' +
          'Grounds Pass 可在开放时段内任意时间入场，最晚入场时间为闭馆时刻。',
        ticket: '<strong>核实日期 2026-09-14，来源 7gables.org/tickets 价目表与官方售票页（Blackbaud 结账页）。' +
          '票价分「十月」与「十一月至次年九月」两套，这是本条目最容易踩的坑。</strong>' +
          '<strong>① 十月（万圣节季）Mansion Tour Package（含 Grounds Pass）：成人 $31、' +
          '儿童 5–12 岁 $21、5 岁以下免费、Accessibility 票（仅一楼）$16。</strong>' +
          '<strong>② 十一月至次年九月的平日口径：同一张票成人 $26、老年 65+ $21' +
          '——也就是说十月每位成人贵 $5。</strong>' +
          '<strong>③ 优惠档在两个来源之间有出入，两种口径都写出来：' +
          '7gables.org/tickets 的十月价目表写「Senior (65+) $26、Military–Adult $26」，' +
          '而官方售票结账页同期列的是「Senior (65+) $25、First Responder/Teacher $25、' +
          'College Student $25、Military–Adult $25、Military–Child (5–12) $19」。' +
          '差额只有 $1，按 $26 备钱即可，不要因此争执。</strong>' +
          '<strong>免费档（均需证件）：Salem 居民、NARM 会员与博物馆同业、SNAP／WIC／EBT 持卡人、' +
          'Massachusetts 公立院校学生。</strong>' +
          '<strong>Gardens and Grounds Pass（不含主宅导览）单独出售，' +
          '但官网价目表未列出它的十月价格，未能从官方渠道确认；' +
          '要确切数字请打 (978) 744-0991。</strong>' +
          '<strong>从 Turner Street 与 Derby Street 街面看外观完全免费。</strong>',
        hours: '<strong>核实日期 2026-09-14。官方原文（7gables.org 站头横幅与 Mansion Tour 页）：' +
          '「Open daily 10 A.M.-6 P.M.」。</strong>' +
          '<strong>全年无每周固定闭馆日，周一至周日均开（含很多 Salem 博物馆会闭馆的周二）</strong>，' +
          '这一点在 Salem 很值钱——周二来的人常发现半个城的馆都关着，而这里开。' +
          '<strong>十月特例与平日口径的区别不在开门时间（都是 10:00–18:00），而在三件事：' +
          '① 十月必须提前买定时票；② 十月票价上浮 $5；③ 十月加开夜间戏剧场次，' +
          '入夜后园区另有一套人流与临时布置。</strong>' +
          '<strong>夜场档期每年重排（2026 年的场次集中在十月的几个周末与 10 月 31 日，' +
          '需电话订票：(978) 744-0991 转 104），出行前请按当年官网 October 页复核。</strong>' +
          '<strong>Grounds Pass 的最晚入场时间随季节为 16:00／17:00／18:00 三档之一' +
          '（官方措辞「last entry at close (4, 5, or 6PM seasonally)」），' +
          '十月适用哪一档未能从官方渠道确认，按 17:00 最晚入场规划最安全。</strong>' +
          '<strong>10:00 才开门这一点要提前认下来</strong>：' +
          'Salem 核心区在万圣节季 10:00 之后就开始拥挤，' +
          '所以「早起避人」这招在这里用不上，只能靠定时票本身的限流。' +
          '电话 (978) 744-0991。',
        parking: '<strong>不要开车。官方自己写「Parking is extremely scarce during October in Salem」，' +
          '并明确「Though The Gables has a parking lot, parking is not guaranteed」，' +
          '且自有停车场只在你参观期间可用。</strong>' +
          '正确方案是 <strong>MBTA Newburyport/Rockport 线 Salem 站</strong>，' +
          '<strong>官方文案也直接推荐「using public transportation is highly recommended」</strong>。',
        walk: 'Salem 站到 115 Derby Street 约 <strong>1.4 公里 / 17 分钟</strong>；' +
          '从 Derby Wharf 走过来约 <strong>500 米 / 6 分钟</strong>（两点是天然一组，' +
          '日出拍完 Derby Wharf 正好在这里等 10:00 开门）。' +
          '<strong>园区内建议留 90 分钟（含 45 分钟跟团），纯拍外观 20 分钟够。</strong>'
      },
      notes: [
        '<strong>票务是本条目最大的风险，不是光线。</strong>' +
          '十月上半月的票在前一个月的放票日对公众开卖（2026 年为 <strong>9 月 4 日</strong>），' +
          '<strong>不退不改不改期、迟到即作废</strong>——把它当成机票而不是门票来处理',
        '<strong>十月成人票 $31，比其他月份贵 $5</strong>。' +
          '如果你只想拍那组山墙轮廓，<strong>Turner Street 街面免费机位已经够了，一分钱不用花</strong>',
        '<strong>室内明确禁闪光灯与摄像</strong>，但允许个人手持静态摄影；' +
          '<strong>「professional photography shoots」需事先批准、签合同并附保险证明</strong>，' +
          '所以不要带三脚架、反光板或助手，那会被判定为商业拍摄',
        '<strong>室内是 1600 年代木构，天花低、楼梯窄、需爬多层</strong>，' +
          '大摄影包在跟团时会不断刮到墙与家具，建议只带机身加一支定焦',
        '<strong>官方提醒行程要留足余量</strong>（原文「PLEASE PLAN EXTRA TIME FOR TRAVEL」），' +
          '因为十月 Salem 的路面通行状况不可预测；从 Salem 站走过来请预留 25 分钟而不是 17 分钟',
        '<strong>十月有戏剧夜场，会改变入夜之后的园区状态</strong>：2026 年官网 October 页列出的场次集中在 10/11–13、10/18–19、' +
          '10/25–26 与 10/31，<strong>有夜场的晚上 19:15 之后园区会有人流与临时布置，' +
          '没有夜场的晚上反而干净</strong>；<strong>档期每年重排，请按当年官网 October 页复核</strong>',
        '<strong>食物不能带进 Turner-Ingersoll Mansion</strong>，但持票可以在花园里吃'
      ],
      images: [
        { url: 'img/house-of-the-seven-gables-ma1-982ceb48.jpg',
          cap: 'Turner-Ingersoll Mansion 山墙侧立面全貌 · Acroterion / CC BY-SA 4.0' },
        { url: 'img/house-of-the-seven-gables-side-salem-massachusetts-58f2f7a5.jpg',
          cap: '从侧面看层层叠出的七个山墙与雪松木瓦 · Daderot / CC BY-SA 3.0' },
        { url: 'img/house-of-seven-gables-salem-ma-1-145d0169.jpg',
          cap: '海侧花园一侧的房屋与草坪 · Upstateherd / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'salem-maritime-derby-wharf',
      n: 2,
      name: 'Salem 海事国家历史公园与 Derby Wharf',
      en: 'Salem Maritime NHS, Derby Wharf & Friendship of Salem',
      must: 3.5,
      score: 4,
      tldr: '免票、园区 24 小时开放，是 Salem 唯一能绕过十月人潮的机位；Friendship 已核实在泊位上，但仍带工程罩。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '园区 24 小时开放', c: 'free' },
        { t: '日出主场', c: 'free' },
        { t: '周二室内不开', c: 'risk' }
      ],
      highlights: [
        '<strong>1938 年设立，是全美第一处 National Historic Site</strong>，' +
          '现在的正式名称已改为 Salem Maritime National Historical Park。' +
          '园区 9 英亩、12 栋历史建筑，' +
          '<strong>核心是 Derby Wharf——全长 2,045 英尺（约 623 米）伸入 Salem 港，尽端立着 Derby Wharf Light</strong>。' +
          '18 世纪末 Salem 一度是全美最富的城市之一，' +
          'Elias Hasket Derby 被认为是美国第一位百万富翁，这道栈桥就是那段全球贸易的物证。',
        '<strong>关键事实核实结果：Friendship of Salem 现在就在 Derby Wharf 的泊位上，招牌构图存在。</strong>' +
          '这艘 1797 年 Salem 造 East Indiaman 的全尺寸复制品（1996 年在 Albany 的 Scarano Shipyard 铺龙骨），' +
          '<strong>2024 年 11 月 13 日被拖到 Gloucester Marine Railway 做船首结构大修，' +
          '2025 年 7 月 15 日 14:30 拖回 Derby Wharf</strong>（NPS 官方页面记录）。' +
          '<strong>但要打折的地方在这里：回泊时船上仍蒙着施工防护罩，' +
          '桅杆与索具的安装从 2025 年夏末开始、原计划贯穿整个冬春，为 America 250 与 Salem 400+ 做准备。' +
          'NPS 该页面最后更新于 2025 年 7 月 16 日，' +
          '所以「到 2026 年 10 月是否已撤罩、三根桅杆是否立起」未能从官方渠道确认。</strong>' +
          '<strong>诚实的预期是：船体一定在，「三桅方帆船的完整索具剪影」有可能还没有。</strong>' +
          '出发前打 978-740-1650 问一句最省事。',
        '<strong>栈桥的走向是本条目的关键几何，而且它正好指向对的方向。</strong>' +
          'Derby Wharf 自 Derby Street 一侧向<strong>南偏东约 152°</strong>伸入海港' +
          '（自 OSM 的栈桥根部与 Derby Wharf Light 实体 42.51658／-70.88354 推算），' +
          '尽端灯塔距岸约 570 米。' +
          '<strong>Salem 港在这里向东南方向敞开，而秋季日出方位约 100°</strong>——' +
          '也就是<strong>太阳从栈桥左前方约 53° 的海面上升起</strong>，' +
          '低角度暖光横切过整道栈桥与灯塔的东侧面，' +
          '<strong>这是本区最干净的一个日出机位，也是整个 Salem 唯一不受人潮影响的机位</strong>。' +
          'NPS 官方甚至专门做了一个「Watch the Sunrise from Derby Wharf」的活动页，' +
          '并在海滩上放了 <strong>6 把 Adirondack 椅</strong>（先到先得）。',
        '<strong>Derby Wharf Light 的可达性是好消息：塔就在栈桥尽端，走过去就到，免费、无门禁。</strong>' +
          '这是一座 1871 年的方形砖塔、约 23 英尺高，' +
          '<strong>塔身不对公众开放（内部不可进），但外部可以贴到脚下拍</strong>。' +
          '走完 623 米的栈桥单程约 8–10 分钟，路面是平整碎石。' +
          '<strong>注意栈桥完全暴露在海风里，十月清晨风冷且没有任何遮挡</strong>。',
        '<strong>室内建筑的开放日必须单独看，而且周一与周二恰好全部闭馆。</strong>' +
          'NPS 的 2026 年 9 月 21 日至 11 月 14 日季节表（页面 <strong>2026 年 8 月 19 日更新</strong>）写明：' +
          '<strong>Custom House 与 Public Stores &amp; Scale House 为周三至周日 9:30–16:30、' +
          'Narbonne House 周三至周日 13:00–16:00、' +
          '而 Derby House 在这个时段是「Closed for the season」。</strong>' +
          '<strong>→ 周一与周二这些室内全部不开，只能看外立面；周三至周日正常开。</strong>' +
          'Salem Armory Regional Visitor Center 与 Waite &amp; Peirce Park Store 每日 9:30–16:30。' +
          '<strong>所有建筑与所有项目全部免费。</strong>'
      ],
      tour: [
        '<strong>先认清它的形态：这不是一栋博物馆，而是一片沿 Derby Street 散开的园区</strong>' +
          '（9 英亩、12 栋历史建筑、一道栈桥、一条船），<strong>而且全部免费</strong>。' +
          '<strong>正确的第一步是进 Salem Armory Regional Visitor Center</strong>（每日 9:30–16:30，免费），' +
          '拿一张园区地图、问清「今天哪几栋开、Ranger 导览几点发、Friendship 能不能登船」——' +
          '<strong>这三件事天天在变，官网表格答不了，只有前台能答</strong>。' +
          '如果你到的时间在 9:30 之前（户外园区 24 小时可进），就先走栈桥，回头再进 Visitor Center。',
        '<strong>三样是核心，其余都是加分项：</strong>' +
          '① <strong>走完 Derby Wharf 到尽端的 Derby Wharf Light</strong>' +
          '（全长 2,045 英尺／623 米，单程 8–10 分钟，平整碎石路，' +
          '<strong>灯塔内部不开放，只能走到塔脚下</strong>）；' +
          '② <strong>Friendship of Salem</strong>——1797 年 Salem 造 East Indiaman 的全尺寸复制品，' +
          '<strong>登船免费、不需预约</strong>，甲板有容量限制；' +
          '③ <strong>Custom House 室内</strong>，1819 年的联邦式海关楼，' +
          'Nathaniel Hawthorne 在这里当过测量员，<strong>《The Scarlet Letter》开篇那一章就叫「The Custom-House」</strong>，' +
          '楼上能看到他的办公室与那套关税秤具。',
        '<strong>开放日是这里最大的坑，务必先看星期：室内建筑一律周三至周日制，周一与周二只有户外。</strong>' +
          '<strong>Custom House 与 Public Stores &amp; Scale House 周三至周日 9:30–16:30；' +
          'Narbonne House 秋季周三至周日 13:00–16:00（时段很窄，容易错过）；' +
          'Derby House 从九月下旬起整季闭馆，只能看外墙。</strong>' +
          '<strong>换句话说，周一或周二来的人只能拍外立面加走栈桥——这仍然值得来，' +
          '但别指望进屋；想看室内请把它排在周三到周日。</strong>',
        '<strong>可以跳过的：Public Stores &amp; Scale House</strong>' +
          '（视天气开放，内容是关税仓储的器物，兴趣不大就略过），' +
          '以及 Waite &amp; Peirce Park Store——那是商店而不是展馆。' +
          '<strong>省下的时间全部给栈桥</strong>：623 米走过去再走回来是这个景点的主体，' +
          '也是唯一能让你直观理解「18 世纪末 Salem 曾是全美最富的港口之一」的东西。',
        '<strong>排队与人流：这里几乎不用排队，但 Ranger 导览要抢。</strong>' +
          '<strong>免费的 Ranger 带队导览每团上限 8 人、需当日到 Visitor Center 现场领位、先到先得</strong>，' +
          '想跟就开门就去。' +
          '<strong>万圣节季（十月）Salem 核心区人满为患，但这片园区是全城最不挤的地方</strong>——' +
          '因为它是户外、免费、没有闸机，人群会被摊位与女巫主题馆吸走；' +
          '<strong>栈桥越往尽端走人越少，走过一半基本就清场了</strong>。',
        '<strong>餐饮与卫生间，这条是全天行程的实际约束：</strong>' +
          '<strong>Central Wharf 卫生间每日 9:30–16:30</strong>，' +
          '<strong>这是栈桥附近唯一的公共卫生间，而栈桥往返要 20 分钟以上且全程无任何设施</strong>——' +
          '<strong>上栈桥之前先去</strong>。' +
          '园内没有餐饮（只有商店卖零食饮料），吃饭要走到 Derby Street 对面或 Pickering Wharf。' +
          '<strong>栈桥上只有根部海滩的 6 把 Adirondack 椅可以坐，先到先得，其余 623 米无座椅、无遮阴、无挡风。</strong>'
      ],
      photo: '风光 <strong>4/5</strong>，建筑 <strong>3.5/5</strong>，日出 <strong>4.5/5</strong>，人文纪实 <strong>3/5</strong>。' +
        '加分在完全免费、24 小时开放、朝向正确、且是本区唯一能在人潮之前完成的目标；' +
        '扣分在 Friendship 的索具状态不确定、以及日出恰好赶上低潮（栈桥根部露泥）。',
      shots: [
        {
          name: 'Derby Wharf 栈桥纵深与灯塔（日出主机位）',
          view: [42.51796, -70.88480],
          desc: '<strong>坐标为 OSM 的 Derby Wharf 实体（栈桥中段）。</strong>' +
            '<strong>最佳日出前 15 分钟到日出后 50 分钟（十月中旬为 06:40–07:45，日出约 06:53–06:56、方位约 100°），' +
            '民用晨光 06:26 就已经有色，值得提早 25 分钟到位。</strong>' +
            '站在栈桥中段偏根部处朝<strong>南偏东 152°</strong>看，' +
            '<strong>太阳在你左前方约 53° 的海平线上，光横切过碎石路面与灯塔的东侧壁</strong>——' +
            '这是有方向、有立体感的光，而不是正对镜头的逆光。' +
            '<strong>焦段 24–35mm 拍栈桥纵深加灯塔小点（这是最经典的一张，' +
            '让 623 米的线性透视做主角）；70–200mm 从根部压缩，' +
            '灯塔会被推到很大、和天空的色带贴在一起</strong>。' +
            '<strong>不要用 16mm 级超广</strong>——它会把栈桥拉成一条细线，纵深反而崩掉。' +
            '<strong>潮位注意：十月中旬的低潮常落在 07:20–08:50 之间（Boston 站，逐日不同，出行前自查），' +
            '日出时都接近低潮，栈桥根部与海滩会露出滩石与海藻</strong>，' +
            '把它当前景纹理用是加分项，想要满潮水面就得等 13:35–14:59（人最多）。' +
            '<strong>三脚架在这里完全可用</strong>（24 小时开放的户外园区、清晨无人），' +
            '这是本区少数能安心架机器的地方；带 ND 做 1–4 秒长曝把海面拉平会很好看。' +
            '<strong>栈桥毫无遮挡，十月清晨风大且冷，带防风外套与手套。</strong>'
        },
        {
          name: 'Friendship of Salem 与 Central Wharf 之间（船体与索具）',
          view: [42.51906, -70.88558],
          desc: '<strong>坐标为 OSM 的 Salem Maritime National Historical Park 实体（160 Derby Street，' +
            'Friendship 泊位在 Derby Wharf 与 Central Wharf 之间）。</strong>' +
            '<strong>最佳 06:53–08:00</strong>：船停在朝东南敞开的泊位上，' +
            '日出的低光从东南东打在船身左舷与船尾，<strong>黑红船体的漆面与舷窗序列此时最有层次</strong>。' +
            '<strong>次佳 16:30–17:30</strong>，光从西南来打右舷。' +
            '<strong>35mm 拍全船加 Custom House 的关系（这是唯一能同时交代船与海关楼的构图）；' +
            '85–135mm 抽船尾雕饰、舷窗与索具节点</strong>。' +
            '<strong>关键预期管理：如果索具还没装完或船上还蒙着施工罩，' +
            '就放弃「完整三桅剪影」这张，改拍船体的局部与工程本身</strong>——' +
            '施工罩加脚手架其实是一个很好的纪实题材，' +
            '而且这个状态几年后就不存在了。' +
            '登船参观按季节安排（2025 年秋季为周三至周日 13:30–16:30，' +
            '<strong>2026 年 10 月的登船时段未能从官方渠道确认</strong>），免费、不需预约、甲板有容量限制。'
        },
        {
          name: 'Custom House 立面（Hawthorne 与《红字》的那一栋）',
          view: [42.52166, -70.88723],
          desc: '<strong>坐标为 OSM 的 Custom House 实体（164/174/178 Derby Street）。</strong>' +
            '这是 1819 年的联邦式海关楼，屋顶上有一只金色木雕鹰；' +
            'Nathaniel Hawthorne 1846–1849 年在这里当过测量员，' +
            '<strong>《The Scarlet Letter》的开篇「The Custom-House」写的就是这栋楼</strong>。' +
            '<strong>主立面朝南偏东面向 Derby Street 与海港，所以受光条件很好：' +
            '最佳 08:00–10:30（方位 111°–140°、高度 11°–29°），砖体呈暖红、白色木饰与门廊柱有明确立体感</strong>；' +
            '<strong>15:30–17:00 是第二档</strong>，光转到西南，反差更硬。' +
            '<strong>24mm 竖幅拍完整立面加台阶（街道不宽，35mm 已经勉强）；' +
            '135–200mm 单独抽屋顶那只金鹰配天空，是这里最容易被忽略的一张。</strong>' +
            '<strong>室内只在周三至周日 9:30–16:30 开，周一与周二不开</strong>，' +
            '但外立面在公共人行道上 24 小时可拍。' +
            '注意 Derby Street 是主干道，有车流与公交，用 1/250 以上快门避免拍到动态模糊的路人。'
        },
        {
          name: 'Derby Wharf Light 塔基特写',
          view: [42.51658, -70.88354],
          desc: '<strong>坐标为 OSM 的 Derby Wharf Light 灯塔实体。</strong>' +
            '<strong>走完 623 米栈桥才能到，单程 8–10 分钟，请把它排在日出机位之后</strong>' +
            '（先在中段拍纵深，再走到尽端拍塔）。' +
            '这是一座 1871 年的方形砖塔，约 23 英尺高，<strong>塔内不开放，只能拍外部</strong>。' +
            '<strong>最佳 07:00–07:50</strong>：低光打在塔的东南面，' +
            '砖体与白色顶部灯室的分离最好，背后是 Salem 港与远处 Marblehead 的地平线。' +
            '<strong>24mm 贴近仰拍强调塔的锥形与天空（这是最有力的一张）；' +
            '50mm 平视拍塔加栈桥尽端的护栏；' +
            '70–200mm 回身朝西北压缩，把塔当前景、Salem 老城的屋顶与教堂尖顶做背景</strong>。' +
            '<strong>尽端风最大、没有任何遮挡</strong>，三脚架要压重或降低重心；' +
            '低潮时塔基外侧的花岩块会露出，可以做前景。'
        }
      ],
      access: {
        visit: '<strong>建议 1.5–2.5 小时。</strong>' +
          '分配：<strong>栈桥往返含在尽端灯塔停留 45–60 分钟</strong>（623 米单程 8–10 分钟）' +
          ' + Friendship 登船 15–20 分钟 + Custom House 室内 20–30 分钟 + Visitor Center 与 Narbonne House 20 分钟。' +
          '<strong>只看重点 50 分钟</strong>：走到栈桥尽端灯塔再折回，顺路看 Friendship 船身与 Custom House 外立面。' +
          '<strong>周一、周二来（室内全关）实际只需 60 分钟。</strong>' +
          '<strong>想跟 Ranger 免费导览的另加 45–60 分钟。</strong>' +
          '（依据：官方公布的园区规模 9 英亩／12 栋建筑、栈桥官方长度 2,045 英尺，' +
          '按实际步行速度与各建筑开放时段推算。）',
        book: '<strong>不需预约、不需票。</strong>' +
          'Ranger 带队的免费导览需当日到 Salem Armory Visitor Center 现场领位，' +
          '<strong>每团上限 8 人</strong>。' +
          '登船参观免费、不需预约，甲板有容量限制。',
        ticket: '<strong>免费，而且是彻底免费</strong>——' +
          'NPS 官方原文「<strong>All buildings and programs are free</strong>」，' +
          '<strong>无入园费、无建筑门票、Ranger 导览与登船参观也全部免费</strong>' +
          '（核实日期 2026-09-14，nps.gov/sama/planyourvisit/basicinfo.htm）。' +
          '<strong>万圣节季不加价、不设旺季票——这是它在十月的 Salem 最大的结构性优势：' +
          '全城几乎所有收费景点在十月都会涨价或限流，这里不会。</strong>' +
          '停车与 MBTA 车票要另付（见 parking）。',
        hours: '<strong>核实日期 2026-09-14；NPS 官方页面自身标注的最后更新为 2026 年 8 月 28 日</strong>' +
          '（nps.gov/sama 的 Places To Go／Things To Do 季节表；' +
          'Basic Information 页同一张表标注 8 月 19 日更新，内容一致）。' +
          '<strong>官方按季节分两栏，十月落在后一栏：</strong>' +
          '<strong>① 户外园区全年不变：「Derby Wharf and Park Grounds Around Historic Structures — Open 24/7」' +
          '（原文照录）——栈桥、灯塔、草坪、花园 24 小时随时可进，这一条不受万圣节季影响。</strong>' +
          '<strong>② 9 月 21 日至 11 月 14 日（含整个十月）的室内口径：' +
          'Salem Armory Regional Visitor Center 与 Waite &amp; Peirce Park Store 每日 9:30–16:30；' +
          'Custom House 与 Public Stores &amp; Scale House 周三至周日 9:30–16:30（后者视天气）；' +
          'Narbonne House 周三至周日 13:00–16:00；' +
          'Derby House 标注「Closed for the season」；Central Wharf 卫生间每日 9:30–16:30。</strong>' +
          '<strong>③ 夏季口径（5 月 10 日至 9 月 20 日）作对照：Narbonne House 是 13:30–16:30，' +
          '且 Derby House 以周三至周日 9:30–12:00 开放公众导览——' +
          '也就是说想进 Derby House 只能在夏季来。</strong>' +
          '<strong>→ 结论：十月与平日的开放时间没有区别，唯一要盯的是星期——' +
          '周一、周二所有室内不开，户外照常。</strong>' +
          '全年只在 Thanksgiving、Christmas Day、New Year\'s Day 关闭建筑。' +
          '电话 978-740-1650。',
        parking: '<strong>十月不要开车来 Salem。</strong>' +
          '园区没有大型自有停车场，周边路边车位在十月被居民临时许可与摊位大量占用。' +
          '<strong>正确方案是 MBTA Newburyport/Rockport 线 Salem 站</strong>' +
          '（工作日班次密，单程 $8，约 33–37 分钟）。' +
          '若必须停车，Museum Place Garage 是最近的市营车库，' +
          '<strong>十月周末与假日费率可能改为一次性平价，具体金额未能从官方渠道确认</strong>。',
        walk: 'Salem 站到 Derby Wharf 根部约 <strong>1.2 公里 / 15 分钟</strong>' +
          '（沿 Washington Street 南行再折向 Derby Street）。' +
          '<strong>栈桥根部到尽端灯塔 623 米 / 单程 8–10 分钟</strong>，' +
          '来回加拍摄请留 <strong>45–60 分钟</strong>。' +
          '到 House of the Seven Gables 约 500 米 / 6 分钟，' +
          '到 Witch Trials Memorial 约 700 米 / 9 分钟。'
      },
      notes: [
        '<strong>这是本区最重要的一条：园区 24 小时开放且免费，' +
          '所以它是绕过 Salem 十月人潮的唯一正规途径。</strong>' +
          '06:26 民用晨光到 08:00 之间，整道栈桥基本只有你和几个跑步的本地人',
        '<strong>Friendship of Salem 已核实在泊位上（2025 年 7 月 15 日 14:30 归泊），' +
          '但索具安装工程是否完成、施工罩是否已撤，未能从官方渠道确认</strong>——' +
          '<strong>2026 年 9 月 5 日复查时，NPS 的 Friendship 工程页仍停在 2025 年 7 月 16 日那一次更新，' +
          '一年多没有新进度公告</strong>。' +
          '出发前打 <strong>978-740-1650</strong> 问一句',
        '<strong>Derby Wharf 十月有一个官方活动要知道：Witch Hats on the Wharf，' +
          '2026 年 10 月 17 日（周六）11:00</strong>，' +
          '由 City of Salem、Salem Maritime National Historical Park 与 Destination Salem 合办，' +
          '为 Salem 400 周年做一次「整条栈桥站满戴女巫帽的人」的世界纪录尝试。' +
          '<strong>平日的行程不受影响，但若你正好排在那个周六，' +
          '栈桥当天上午会是全年人最多的状态，日出那一档也会提前上人</strong>',
        '<strong>周一与周二，Custom House、Public Stores 与 Narbonne House 都不开</strong>' +
          '（周三至周日制）；<strong>Derby House 整个秋季闭馆</strong>。' +
          '想看室内就把这里排到周三至周日',
        '<strong>三脚架在这里没问题</strong>——户外国家公园园区、清晨无人。' +
          '按 EXPLORE Act，8 人以内、公众开放区域的静态摄影不需许可；' +
          '<strong>但该法免许可条款的措辞是「hand-carried equipment」，' +
          '严格读会把落地三脚架排除在外，实务上清晨栈桥上没人会管</strong>',
        '<strong>栈桥完全暴露在海风中、623 米内没有任何遮挡或座位</strong>' +
          '（只有根部海滩上 6 把先到先得的 Adirondack 椅）。' +
          '十月清晨海边体感明显低于内陆，带防风外套、手套与帽子',
        '<strong>日出恰逢低潮</strong>（十月中旬的低潮多在 07:20–08:50 之间，Boston 站，逐日不同）。' +
          '滩石与海藻会露出来——当纹理用是好事，' +
          '<strong>想要满潮的港口面貌只有 13:35／14:16／14:59 三个高潮时刻，而那正是人最多的时候</strong>',
        '<strong>Derby Wharf Light 塔内不开放</strong>，只能拍外部；' +
          '塔基花岩在潮湿时很滑，低机位拍摄注意脚下',
        '<strong>本条目由 NPS 运营，联邦拨款中断时室内建筑会关，但 24/7 的园区与栈桥通常仍可通行</strong>；' +
          '出发前刷一下 nps.gov/sama 的 Current Conditions 页'
      ],
      images: [
        { url: 'img/derby-wharf-lighthouse-p1000617-aac24def.jpg',
          cap: '栈桥尽头的 Derby Wharf Light 方塔 · NewtonCourt / CC BY-SA 4.0' },
        { url: 'img/friendship-of-salem-salem-maritime-national-historic-site-49-a0ad6a5f.jpg',
          cap: '满索具状态下的 Friendship of Salem 复原船 · Robert Linsdell / CC BY 2.0' },
        { url: 'img/friendship-of-salem-without-masts-e6d27a29.jpg',
          cap: '桅杆被拆除、只剩船体停在 Derby Wharf 的 Friendship——这正是修船期间的样子，是本条目最要紧的风险画面 · Fletcher / CC BY 4.0' }
      ]
    },
    {
      id: 'salem-burying-point-mcintire',
      n: 3,
      name: 'Old Burying Point、女巫审判纪念碑与 McIntire 历史区',
      en: 'Old Burying Point, Witch Trials Memorial & McIntire Historic District',
      must: 3,
      score: 4,
      tldr: 'Chestnut Street 才是 Salem 真正的摄影高点：住宅街、免票、24 小时、人少；墓园十月需当日预约且 10:00 才开。',
      tags: [
        { t: 'Chestnut Street 全免费', c: 'free' },
        { t: '墓园需当日线上预约', c: 'risk' },
        { t: '墓园 10:00 才首场', c: 'risk' },
        { t: '纪念碑黎明到黄昏免票', c: 'free' }
      ],
      highlights: [
        '<strong>本条目的核心判断：三个点里 Chestnut Street 最强，而且它恰好是最不受十月人潮影响的一个。</strong>' +
          'McIntire Historic District 以 Salem 本地木雕师兼建筑师 <strong>Samuel McIntire（1757–1811）</strong>命名，' +
          '<strong>Chestnut Street 一整条街是联邦式（Federal）豪宅的连续立面</strong>，' +
          '建于 1800 年前后 Salem 全球贸易鼎盛期，屋主是那一代的船东与商人。' +
          '<strong>关键在于它是纯住宅街、距 Essex Street 的节庆核心区约 700 米，' +
          '不在任何导览路线与摊位分布上——十月的人流密度和 Derby Street 差一个数量级。</strong>' +
          '（这一点已通过位置关系与街道性质核实；<strong>具体的十月分时人流数据没有任何官方来源，' +
          '此处是基于「它是住宅街、无景点入口、不在活动区」的推断</strong>。）',
        '<strong>Chestnut Street 的几何算得很干净，而且有一个彩蛋。</strong>' +
          '街道走向<strong>实测 72.5°／252.5°</strong>，全长 <strong>449 米</strong>' +
          '（自 OSM 路径两端节点算出：西端 42.51879／-70.90369，东端 42.52001／-70.89847）。' +
          '推论一：<strong>北侧那排房子的立面法向约 162.5°（朝南偏东），' +
          '十月中旬太阳方位从 07:00 的约 101° 走到 17:00 的约 249°，全部落在 72.5°–252.5° 区间内，' +
          '所以北侧立面全天受光</strong>，' +
          '而<strong>南侧那排法向 342.5°（朝北偏西），十月全天零直射光</strong>。' +
          '推论二（彩蛋）：<strong>十月中旬日落方位约 259°–260°，' +
          '与街道轴线 252.5° 只差 6.6°–7.7°</strong>——' +
          '<strong>也就是说落日基本沿着 Chestnut Street 的纵轴下沉</strong>。' +
          '不是完美对齐（完全对齐要到 10 月下旬），但足以在最后 20 分钟做出「太阳压在街道尽头」的效果。',
        '<strong>Old Burying Point（又名 Charter Street Cemetery、Central Burying Point）是 Salem 最老的墓地，' +
          '1637 年启用，现存最早的墓石刻着 1673 年。</strong>' +
          '1.47 英亩，收藏了新英格兰最好的 17–19 世纪墓碑雕刻之一。' +
          '<strong>要点名的两处误解：一，被 1692 年处死的人没有葬在这里</strong>' +
          '（官方说法：这里虽非圣化之地但仍是市有财产，被国家处死者不会葬入，' +
          '且多数受害者并不住在附近）；' +
          '<strong>二，这块墓地在审判中没有扮演任何特定角色</strong>。' +
          '真正埋在这里的是<strong>审判法官 John Hathorne 与 Bartholomew Gedney、' +
          '总督 Simon Bradstreet、以及 Samuel McIntire 本人</strong>，' +
          '还有 Derby、Forrester、Fiske 等 18 世纪商业家族。' +
          'John Hathorne 是 Nathaniel Hawthorne 的高祖父——' +
          '<strong>作家在自己姓氏里加了一个 w，一般认为就是为了和这位法官脱钩</strong>。',
        '<strong>墓园的十月限流是硬约束，已在官方页面逐字核实。</strong>' +
          'charterstreetcemetery.com 的「Visiting In October」页原文：' +
          '<strong>十月访客必须做当日的线上预约、预约免费、' +
          '时段每 15 分钟一档、首场 10:00 入场、墓园 17:00 关门、' +
          '预约只能当天做（不接受提前预约）</strong>，' +
          '并明确<strong>「Reservations will be required starting September 18th」</strong>。' +
          '日限流量官方称「仍在每日 1,000 人以上」。' +
          '另有两条摄影相关：<strong>禁无人机</strong>、' +
          '<strong>「Any filming or photoshoots must have written permission from the Salem Film Office」</strong>。' +
          '<strong>还有一件更要紧的：门口除了拥挤的人行道之外没有等候空间</strong>，' +
          '官方建议早到的人先去转角的 Witch Trials Memorial。',
        '<strong>Salem Witch Trials Memorial 反而是三个点里最省事的：黎明到黄昏开放、免费、不需预约。</strong>' +
          '1992 年为审判三百周年落成，就在墓园的转角、Liberty Street 上（Charter Street 与 Derby Street 之间）。' +
          '设计是<strong>二十条从矮花岩墙上悬挑出来的石凳，每一条刻着一位被处死者的姓名与处刑日期</strong>；' +
          '入口处的地面刻着受审者辩词的片段，而<strong>刻字被刻意做成半途中断、被墙截断</strong>——' +
          '意思是这些人的话从未被听完。' +
          '<strong>这个细节是本条目最值得拍的一处特写，而且几乎没有人会低头去拍它。</strong>'
      ],
      tour: [
        '<strong>这是三个性质完全不同的点被地理捆在一起，先分清再决定去哪几个：</strong>' +
          '<strong>Salem Witch Trials Memorial</strong>（免费、无门槛、10 分钟，情感分量最重）、' +
          '<strong>Old Burying Point 墓园</strong>（免费但万圣节季要当日预约，历史分量重、视觉平淡）、' +
          '<strong>Chestnut Street 的 McIntire 历史区</strong>（免费、24 小时、纯建筑，' +
          '距前两者约 750 米）。' +
          '<strong>推荐顺序：Memorial → 墓园（就在转角 80 米）→ 走 10 分钟到 Chestnut Street。</strong>' +
          '墓园正确的入口在 <strong>Liberty Street 一侧</strong>，' +
          '先在 Pickman House 的 Welcome Center 拿地图再进去。',
        '<strong>Memorial 里有一样东西几乎所有人都走过去没看见，那是这里最值得停下来的三分钟：</strong>' +
          '二十条从矮花岩墙上悬挑出来的石凳各刻一位被处死者的姓名与处刑日期（1692 年 6 月 10 日至 9 月 22 日之间的五个日子），' +
          '<strong>而入口地面的石门槛上刻着受审者从法庭记录里摘出的辩词——' +
          '包括「God knows I am innocent」——刻字被刻意做成半句被墙截断</strong>，' +
          '意思是这些人的话从未被听完。' +
          '<strong>进门先低头看脚下，再抬头看石凳，这个顺序才读得懂这个设计。</strong>',
        '<strong>墓园要先纠正预期，否则一定失望：这里没有「女巫的墓」。</strong>' +
          '<strong>1692 年被处死的人没有葬在这里</strong>（被国家处死者不得葬入市有墓地）。' +
          '真正埋在这里的是另一侧的人：<strong>审判法官 John Hathorne 与 Bartholomew Gedney、' +
          '总督 Simon Bradstreet，以及建筑师 Samuel McIntire 本人</strong>。' +
          '<strong>看点是墓碑本身</strong>——1637 年启用、现存最早的碑刻着 1673 年，' +
          '<strong>17 世纪那批板岩碑上的带翼骷髅头（death\'s head）与 18 世纪的柳树骨灰瓮，' +
          '是新英格兰最好的一批殖民地墓碑雕刻</strong>。' +
          '<strong>园内碎石路面高低不平、只准走指定路径、官方明确禁止拓碑（grave-rubbings）与无人机。</strong>' +
          '旁边 Pickman House 里的 Welcome Center 免费，是这三处唯一有展陈与解说的地方，也值 10 分钟。',
        '<strong>Chestnut Street 要说句实话：它是一条私人住宅街，不是景点，没有任何入口、展陈或商店。</strong>' +
          '全长 449 米，从头走到尾 6 分钟，' +
          '内容就是 1800 年前后 Salem 船东与商人留下的一整排联邦式（Federal）豪宅立面。' +
          '<strong>对建筑与街区有兴趣的人会认为这是 Salem 最好的 20 分钟；' +
          '对建筑没兴趣的人可以干脆跳过，不用觉得亏</strong>——省下的时间给 PEM 或 Derby Wharf 更值。' +
          '<strong>既然是住宅街，规矩就要守：不要坐或站上住户台阶、不要碰门与花箱、' +
          '不要把镜头对着窗户往里看、清早不要大声说话。住户有权要求你停止，请立刻配合。</strong>',
        '<strong>排队与人流：三处的差别极大。</strong>' +
          'Memorial 与 Chestnut Street <strong>不限流、不需票，任何时候都能进</strong>；' +
          '<strong>墓园在万圣节季（十月）限流，而且是当天才能预约的免费时段票，' +
          '门口除了拥挤的人行道之外没有任何等候空间</strong>（官方原话），' +
          '官方自己建议早到的人先去转角的 Memorial。' +
          '<strong>整个街区在万圣节季 10:00 之后人就密了，Essex Street 与 Charter Street 一带' +
          '11:00–17:00 基本是人挤人；Chestnut Street 是例外，它全天都安静。</strong>',
        '<strong>餐饮与卫生间：这三处一个卫生间都没有，这是实际约束。</strong>' +
          '最近的公共卫生间是 <strong>PEM（161 Essex Street，需门票）</strong>、' +
          '<strong>NPS Central Wharf（每日 9:30–16:30，免费，约 700 米）</strong>' +
          '与 <strong>Salem Armory Visitor Center（9:30–16:30，免费）</strong>。' +
          '餐饮集中在 Essex Street 步行街与 Pickering Wharf，' +
          '<strong>但万圣节季那两处中午排队会很长，想省时间就提前买好带走</strong>。' +
          'Memorial 里禁止饮食（是纪念场所），墓园内也不要吃东西。'
      ],
      photo: '建筑 <strong>4.5/5</strong>（Chestnut Street），街拍 <strong>4/5</strong>，' +
        '纪实与静物 <strong>4/5</strong>（纪念碑刻字与墓碑），风光 <strong>1/5</strong>。' +
        '加分几乎全部来自 Chestnut Street 那 449 米连续的联邦式立面——' +
        '免票、24 小时、人少、朝向正确，是 Salem 唯一同时满足这四条的目标；' +
        '扣分在墓园的预约门槛与视觉上的平淡。',
      shots: [
        {
          name: 'Chestnut Street 中段（联邦式立面主机位）',
          view: [42.51940, -70.90100],
          desc: '<strong>坐标为 OSM 的 Chestnut Street 路径中点。</strong>' +
            '<strong>最佳 07:30–10:00</strong>：十月中旬 08:00 的太阳高度约 10.9°、方位约 111.4°，' +
            '<strong>低光沿街道斜切过来，北侧那排联邦式立面正面受光、砖缝与白色门楣的立体感最强，' +
            '而路面上会拉出整排长影</strong>。' +
            '<strong>这个时段同时是十月 Salem 最安静的时段，两件事恰好重合。</strong>' +
            '<strong>次佳 15:30–17:00</strong>（方位 226°–248°），光更暖但角度已经偏到街道后方。' +
            '<strong>第三档也是最特殊的一档：日落前 20 分钟（十月中旬约 17:45–18:07，日落方位约 260°）</strong>——' +
            '<strong>站在街道东端朝西看，落日几乎压在街道纵轴上（轴线 252.5°，差 7.7°），' +
            '整条街会被一道极低的暖光贯穿，同时南侧那排全天无光的立面在这一刻才勉强被擦到</strong>。' +
            '<strong>焦段：50mm 是这里的甜点</strong>——压缩之后两侧的立面层层贴合，' +
            '把 449 米的街拍成密实的一片；' +
            '<strong>85–135mm 抽单栋门廊、扇形气窗与铁栏杆的重复韵律</strong>（这是 McIntire 的手艺所在）；' +
            '<strong>24–28mm 才用来拍街道纵深加天空，不要更广</strong>。' +
            '<strong>这是一条私人住宅街</strong>：不要坐台阶、不要靠门、不要把镜头对着窗户往里拍、' +
            '不要在 08:00 之前大声说话，也不要在某户门前架三脚架站二十分钟。'
        },
        {
          name: 'Salem Witch Trials Memorial（免票、黎明到黄昏）',
          view: [42.52084, -70.89190],
          desc: '<strong>坐标为 OSM 的 Salem Witch Trials Memorial 实体节点（Liberty Street 上）。</strong>' +
            '<strong>免费、不需预约、黎明到黄昏开放——所以它是唯一能配合日出窗口的 Salem 人文点。</strong>' +
            '<strong>最佳 06:53–08:00</strong>：低角度光斜射进这个矮墙围合的方院，' +
            '<strong>二十条悬挑石凳会各自投出一道横影，刻字的凹槽在掠射光下才读得出来</strong>；' +
            '正午顶光下刻字会完全消失成一片灰，这是本机位最需要避开的时段。' +
            '<strong>次佳 16:30–17:30</strong>，同理。' +
            '<strong>构图两个层次：24–35mm 站在入口拍整个方院与二十条石凳的排列</strong>' +
            '（把 Old Burying Point 的墓碑收在墙后做背景，两处的关系就交代清楚了）；' +
            '<strong>85mm 或 100mm 微距贴近拍单条石凳的姓名与日期，以及入口地面那段被墙截断的辩词刻字</strong>——' +
            '<strong>后者是本条目最好的一张特写，而且几乎没人拍。</strong>' +
            '<strong>这是纪念场所，请安静、不要坐在石凳上、不要踩刻字。</strong>' +
            '手持为宜；若要长曝，清晨无人时用低机位小三脚架，不要挡住通道。'
        },
        {
          name: 'Old Burying Point 墓园内（十月需当日预约）',
          view: [42.52037, -70.89221],
          desc: '<strong>坐标为 OSM 的 Charter Street Cemetery 实体。</strong>' +
            '<strong>十月必须当天在 charterstreetcemetery.com 抢当日的免费时段票，' +
            '首场 10:00、每 15 分钟一档、17:00 关门；预约不能提前做。</strong>' +
            '<strong>所以这里拍不到清晨光，只能在 10:00 之后的高角度光下工作</strong>——' +
            '十月中旬 10:00 的太阳高度已有约 29.2°、方位约 136.4°。' +
            '<strong>对策是不要拍全景而是拍单块石碑</strong>：' +
            '<strong>85–135mm 侧对石碑、让光从画面一侧掠过，' +
            '17 世纪那些带翼骷髅头（death\'s head）与柳树骨灰瓮的浮雕才会有明暗</strong>；' +
            '正对石碑拍会把浅浮雕拍成一片平。' +
            '<strong>35mm 拍石碑群的倾斜与错落（这里的板岩碑普遍歪斜，是本墓园的视觉特征）。</strong>' +
            '<strong>如果当天是阴天，反而是这里最好的条件</strong>：均匀漫射光下石碑与草地的层次全保得住。' +
            '<strong>官方明确禁止拓碑（grave-rubbings）与无人机；' +
            '任何 filming 或 photoshoot 需 Salem Film Office 的书面许可</strong>——' +
            '一个人手持一机一镜不属于此列，但不要带三脚架加灯。' +
            '园内是碎石路面且高低不平，只准走指定路径。'
        },
        {
          name: 'Hawthorne Boulevard 与 Salem Common（可选的第四点）',
          view: [42.52452, -70.88901],
          desc: '<strong>坐标为 OSM 的 Salem Common 公园实体。</strong>' +
            '<strong>这是 Haunted Happenings 的活动主场地，所以整个十月这里会有摊位、帐篷与围栏</strong>——' +
            '<strong>要拍「安静的殖民地公共绿地」整个十月都做不到，请把它当成节庆纪实题材而不是风景题材。</strong>' +
            '真要拍的话，<strong>06:53–07:45 是摊位还没开门的唯一窗口</strong>，' +
            '此时公园周边那圈联邦式与希腊复兴式住宅的东南立面正面受光' +
            '（方位 100°–108°、高度 0°–8°）。' +
            '<strong>35mm 拍公园铸铁围栏与后面的住宅立面；' +
            '135mm 压缩抽 Salem Common 那座 1802 年的拱门（Washington Arch）与树冠。</strong>' +
            '<strong>十月中旬这里的树大概只有三到五成转色</strong>（见前置提醒的秋色那条），' +
            '不要指望满树金黄。' +
            '若愿意换个方向，08:00 之后从 Hawthorne Boulevard（OSM 42.52187／-70.89040）' +
            '朝西可以把 Nathaniel Hawthorne 铜像与街景一起收进来。'
        }
      ],
      access: {
        visit: '<strong>三处合计建议 70–100 分钟</strong>，分配：' +
          '<strong>Witch Trials Memorial 10–15 分钟</strong>（认真读完二十条石凳与门槛刻字要 15 分钟）' +
          ' + <strong>Old Burying Point 墓园 20–30 分钟</strong>' +
          ' + Pickman House 的 Welcome Center 10 分钟' +
          ' + <strong>Chestnut Street 20–30 分钟</strong>（走完只要 6 分钟，' +
          '慢慢看立面细节值 30 分钟）+ 点与点之间步行 15 分钟。' +
          '<strong>只看重点 25 分钟：Memorial 加墓园，放弃 Chestnut Street。</strong>' +
          '<strong>只想看建筑 30 分钟：直接去 Chestnut Street，其余不看。</strong>' +
          '（依据：官方未给建议时长；按墓园 1.47 英亩、Chestnut Street 实测 449 米、' +
          'Memorial 二十条铭文的阅读量推算。）',
        book: '<strong>Chestnut Street 与 McIntire 历史区：公共街道，不需预约、不需票。</strong>' +
          '<strong>Salem Witch Trials Memorial：不需预约、不需票。</strong>' +
          '<strong>Old Burying Point / Charter Street Cemetery：十月必须做当日线上预约</strong>' +
          '（charterstreetcemetery.com，<strong>免费</strong>，' +
          '<strong>只能当天预约、每 15 分钟一档、首场 10:00</strong>，' +
          '2026 年的预约制度<strong>自 9 月 18 日起生效</strong>）。' +
          '<strong>官方特别声明：任何向你收费让你进墓园的人都与 Salem 市政府无关。</strong>',
        ticket: '<strong>三处全部免费，没有任何一处收门票</strong>' +
          '（核实日期 2026-09-14，来源 charterstreetcemetery.com 与 salemma.gov）。' +
          '<strong>墓园在万圣节季（十月）需要的当日线上预约同样免费</strong>——' +
          '官方为此专门加了一句警告：' +
          '<strong>「Anyone who charges you to visit the cemetery is not affiliated with the City of Salem」' +
          '（任何向你收费让你进墓园的人都与市政府无关）</strong>，' +
          '十月街头确实有人拿这个骗钱。' +
          '墓园旁 Pickman House 内的 <strong>Charter Street Cemetery Welcome Center 与其展陈也免费</strong>' +
          '（里面的纪念品店收入用于墓园维护）。' +
          '<strong>万圣节季与平日在票价上没有区别：都是零。</strong>',
        hours: '<strong>核实日期 2026-09-14。三处要分开看，而且墓园的十月特例与平日口径差别很大。</strong>' +
          '<strong>① Chestnut Street 与 McIntire 历史区：公共街道，24 小时，无任何限制。</strong>' +
          '<strong>② Salem Witch Trials Memorial：官方口径「open from dawn till dusk」（黎明到黄昏），' +
          '免费、不需预约、全年无休、万圣节季不限流</strong>，' +
          '官方注明可能因维护临时关闭。' +
          '（按新英格兰十月中下旬的实际日照，大致是 06:20 前后到 18:30 前后，越往月底越短。）' +
          '<strong>③ Old Burying Point / Charter Street Cemetery——十月特例：' +
          '官方「Visiting In October」页原文为「Time slots are every 15 minutes, beginning with first entry ' +
          'at 10:00AM」「the cemetery does close at 5:00PM」「Reservations are only available for the day of ' +
          'your visit」，并写明「Reservations will be required starting September 18th」。' +
          '参观本身不限时长，但入场必须按时段，而且只能当天预约。</strong>' +
          '<strong>④ 平日（非十月）口径：这里出现了官方渠道自相矛盾，按规矩两种都写出来——' +
          'charterstreetcemetery.com 的 Plan Your Visit 页写「Summer schedule，每日 10:00–17:00，' +
          '最晚入场 16:45」；而市政府页 salemma.gov 同期写「currently open every day from 12-4」' +
          '（每日 12:00–16:00）。另有官方渠道提到 11 月 16 日至 5 月 14 日为 12:00–16:00 的冬季表，' +
          '这可能是两者不一致的来源。不要替你选一个：出行当天先刷官网。</strong>' +
          '<strong>Thanksgiving、Christmas Eve、Christmas Day、New Year\'s Eve、New Year\'s Day 与联邦假日闭园，' +
          '恶劣天气可能临时闭园。三处都没有每周固定闭馆日（包括周二）。</strong>',
        parking: '<strong>十月不要开车。</strong>' +
          'Chestnut Street 一带是居民临时许可停车区（<strong>2026 年的临时季节性居民许可从 9 月 15 日到 11 月 1 日</strong>），' +
          '游客停进去会被开票。' +
          '<strong>正确方案是 MBTA Salem 站</strong>，或市营 Museum Place Garage。' +
          '<strong>2026 年市政府取消了十月周末的摆渡巴士服务</strong>，' +
          '108 Jefferson Avenue 停车场周末免费但没有摆渡接驳。',
        walk: 'Salem 站到 Chestnut Street 西端约 <strong>900 米 / 11 分钟</strong>；' +
          '<strong>Chestnut Street 全长 449 米，从头走到尾 6 分钟，但认真拍值得留 45–60 分钟。</strong>' +
          'Chestnut Street 东端到 Witch Trials Memorial 约 <strong>750 米 / 10 分钟</strong>；' +
          'Witch Trials Memorial 到墓园入口（51 Charter Street）约 <strong>80 米 / 1 分钟</strong>（就在转角）；' +
          '墓园到 Derby Wharf 约 <strong>700 米 / 9 分钟</strong>。'
      },
      notes: [
        '<strong>本条目最重要的一条：把重心放在 Chestnut Street，不要放在墓园。</strong>' +
          '墓园十月要抢当日预约、10:00 才首场、视觉上也比较平淡；' +
          'Chestnut Street 免票、24 小时、人少、朝向正确，摄影产出高得多',
        '<strong>Chestnut Street 是私人住宅街，不是景点。</strong>' +
          '不要坐或站在住户台阶上、不要触碰门与花箱、不要把镜头对着窗户往里拍、' +
          '不要在清早大声交谈。住户有权要求你停止拍摄，请立刻配合',
        '<strong>墓园的十月预约只能当天做</strong>，' +
          '所以出门前必须在手机上守着放票——这也意味着你无法提前把它排进日程，' +
          '<strong>请把它当成「抢到就去、抢不到就算」的可选项</strong>',
        '<strong>墓园明确禁无人机、禁拓碑；任何 filming 或 photoshoot 需 Salem Film Office 书面许可。</strong>' +
          '一个人手持拍摄没问题，但不要带三脚架加灯——那会被判定为 photoshoot',
        '<strong>墓园门口没有等候空间</strong>（官方原话），' +
          '早到的话按官方建议先去转角的 Witch Trials Memorial 拍，时间刚好',
        '<strong>Witch Trials Memorial 是纪念场所而不是拍照背景。</strong>' +
          '不要坐在那二十条石凳上、不要踩地面刻字、不要在里面大声说话；' +
          '有人在悼念时请等一等',
        '<strong>Salem Common 整个十月是 Haunted Happenings 的活动主场地</strong>，' +
          '有摊位与围栏。想拍空场只有 07:45 之前那一档',
        '<strong>这三处没有每周固定闭馆日，含周二均正常</strong>；' +
          '但同区的 Custom House 与 Peabody Essex Museum 周二可能不开，串点时留意'
      ],
      images: [
        { url: 'img/chestnut-street-salem-7e569ad3.jpg',
          cap: 'Chestnut Street 连续的联邦式立面——本条目真正的主体 · Fletcher6 / CC BY-SA 3.0' },
        { url: 'img/salem-witch-trials-memorial-a2225b4c.jpg',
          cap: 'Salem Witch Trials Memorial 从矮墙悬挑出的石凳 · Christine Zenino / CC BY 2.0' },
        { url: 'img/old-burying-point-cemetery-in-salem-2638749323-f14068ed.jpg',
          cap: 'Old Burying Point 歪斜的板岩墓碑群 · Reading Tom / CC BY 2.0' }
      ]
    },
    {
      id: 'peabody-essex-museum',
      n: 4,
      name: 'Peabody Essex 博物馆（含荫余堂）',
      en: 'Peabody Essex Museum (PEM) & Yin Yu Tang',
      must: 4,
      score: 2.5,
      tldr: 'Salem 唯一的世界级博物馆，含一整栋从徽州搬来重建的荫余堂；周二、周三闭馆，荫余堂需另约时段票且正在修缮。',
      tags: [
        { t: '成人 $25', c: 'paid' },
        { t: '周二周三闭馆', c: 'risk' },
        { t: '荫余堂需另约时段票', c: 'risk' },
        { t: '荫余堂在修缮中', c: 'risk' },
        { t: '16 岁以下免费', c: 'free' }
      ],
      highlights: [
        '<strong>这是 Salem 唯一一座世界级博物馆，也是整座城市里唯一「与女巫无关」的重量级去处。</strong>' +
          '它的根是 <strong>1799 年成立的 East India Marine Society</strong>——' +
          '一个由 Salem 船长与押货人组成的组织，入会条件是你必须绕过好望角或合恩角航行过。' +
          '<strong>因此它常被称为美国最古老的连续运营博物馆之一</strong>，' +
          '藏品也带着那个出身：不是欧洲油画为主，而是<strong>海事艺术、亚洲外销艺术、' +
          '中国与日本与印度的工艺、美洲原住民与大洋洲藏品</strong>。' +
          '现在的规模是<strong>三层楼、25 个展厅、近 130,000 平方英尺</strong>（官方 FAQ 数字）。',
        '<strong>本条目对中文读者最重要的一件事：荫余堂（Yin Yu Tang）。</strong>' +
          '这是一栋<strong>清代（1644–1911）安徽徽州黄村黄氏家族的 16 间卧房大宅</strong>，' +
          '1990 年代作为文化交流项目被<strong>整栋拆解、编号、海运到 Massachusetts</strong>，' +
          '由中美两国工匠与保护建筑师<strong>历时七年在 PEM 园区内重新竖立，2003 年对公众开放</strong>。' +
          '黄家在这栋房子里住了八代、两百多年，<strong>最后一批后人 1982 年离村</strong>。' +
          '官方还点出一个风水细节：' +
          '<strong>中国民居通常坐北朝南，而荫余堂朝北——朝着村中溪水流去的方向（象征财源），背靠山峦</strong>。' +
          '<strong>这是全美唯一一栋完整的中国古民居，也是本区最不可替代的一件展品。</strong>',
        '<strong>但必须把修缮状况说在前面（核实日期 2026-09-14）：荫余堂正在做一轮大修，' +
          '官方明确写「the house may be intermittently closed」。</strong>' +
          'PEM 官网原文：<strong>「Yin Yu Tang is currently undergoing work to preserve its roof tiles ' +
          'and masonry walls. During your visit, scaffolding may be present and work may be actively underway.」</strong>' +
          '工程内容是<strong>换屋瓦（英国 Dreadnought Tiles 依原样复制了约 47,200 片 18 世纪式样的黏土瓦，' +
          '其中一坡保留原装中国旧瓦）、拆修全部 28 道马头墙并加铅制防水层、重做灰浆抹面</strong>；' +
          '<strong>2026 年的工序里还有一项特别的：2003 年为它画外墙彩绘的安徽泥水匠姚德生将再次受邀回来，' +
          '补全外墙的彩绘</strong>（PEM 官方 2025–2026 保护工程页）。' +
          '施工方与建筑师的说法是尽量保持开放、让访客看到「保护施工本身」。',
        '<strong>荫余堂的两个硬性门槛，买票前必须知道：</strong>' +
          '<strong>① 它虽然含在通票内，但需要单独的定时预约</strong>' +
          '（官方原文「Included with admission. Advanced reservations required online or at the Admissions Desk」）；' +
          '<strong>② 名额有限、会卖光</strong>（官方原文「tickets to Yin Yu Tang: A Chinese Home are limited ' +
          'and may sell out」）。' +
          '<strong>正确做法是在 pem.org/tickets 买通票时就在结账流程里把荫余堂的时段一起选掉，' +
          '不要到了现场再问。</strong>' +
          '另外 PEM 名下的 <strong>Ropes Mansion</strong>（1727–1729 年宅邸与花园）' +
          '只在季节性周末开放自助参观、同样需要定时票。',
        '<strong>一条反直觉的事实，可以省下无谓的期待：1692 年女巫审判的原始法庭文书归 PEM 所有，' +
          '但不在 Salem。</strong>' +
          '它们存放在 PEM 的 <strong>Phillips Library</strong>，' +
          '地址是 <strong>306 Newburyport Turnpike, Rowley, MA</strong>——' +
          '距 Salem 约 30 分钟车程的另一个镇。' +
          '<strong>主馆里能看到与审判相关的展陈与部分实物，但「去 PEM 看 1692 年原始文件」这个想法不成立。</strong>'
      ],
      tour: [
        '<strong>先定路线：三层、25 个展厅，官方自己给的建议是「至少两小时」</strong>' +
          '（FAQ 原文「we suggest allowing for at least two hours」），' +
          '<strong>门票是全天有效的，可以中途出去吃饭再回来</strong>。' +
          '<strong>正确顺序：进门先去 Admissions Desk 确认荫余堂当天开不开、你的时段票几点，' +
          '然后按「荫余堂时段」倒排其余展厅</strong>——' +
          '因为荫余堂是定时的，而别的展厅随时能看。' +
          '时间很紧的人直接用官方的 <strong>highlights tour</strong>（官网上的重点路线）。',
        '<strong>不能错过的三样：</strong>' +
          '① <strong>荫余堂</strong>——从坡道走进去，' +
          '重点看<strong>中央天井（skywell）与两方鱼池、一层卧房那些镂空木格窗、' +
          '以及 1926 年的那间婚房</strong>；' +
          '<strong>十月来有个小便宜：PEM 每年十一月才在天井上装可拆卸的采光罩、四月拆掉，' +
          '所以十月看到的是没有罩子的、真正露天的天井</strong>。' +
          '② <strong>East India Marine Hall</strong>（1824–25 年建成、已并入主楼），' +
          '那是这家博物馆的物理起点。' +
          '③ <strong>亚洲外销艺术与海事艺术展厅</strong>——' +
          'Salem 船长两百年从广州、长崎、加尔各答带回来的东西，' +
          '这是 PEM 真正比别家强的部分，而不是它的西洋画。',
        '<strong>可以跳过的：如果你只有 90 分钟，放弃临时特展与美洲原住民展厅</strong>' +
          '（后者很好，但内容与 New England 这条线索关系最弱），' +
          '把时间压在荫余堂与亚洲外销艺术上。' +
          '<strong>Ropes Mansion 也可以放弃</strong>——' +
          '它在馆外 0.4 英里、只在季节性周末开、还要另约时段票，' +
          '性价比明显低于馆内展厅（花园免费可看，路过时进去五分钟就够）。',
        '<strong>排队、安检与寄存的实际流程：</strong>' +
          '<strong>所有包都可能被检查；18 × 13.5 × 10 英寸以上的包必须经安检并领通行牌；' +
          '双肩包不许背在背上，要抱在身前；雨伞不得带进展厅</strong>（官方规定）。' +
          '<strong>人最少的时段是开门 10:00 到 11:30，以及闭馆前最后一小时</strong>；' +
          '<strong>万圣节季（十月）的周末与雨天是最挤的两种情况</strong>——' +
          '下雨时全城的户外游客会同时涌进这里，这是 Salem 十月最典型的一种拥堵。' +
          '<strong>注意周二、周三闭馆，这是 Salem 行程里最常见的一个失误。</strong>',
        '<strong>餐饮与卫生间：馆内有 Atrium Café</strong>' +
          '（供正餐、汤、三明治、甜点与饮料，有无麸质与儿童选项，会员九折；' +
          '<strong>核实日期 2026-09-14 当天的营业时间是 10:00–16:00，比馆方 17:00 闭馆早一小时收</strong>，' +
          '所以想在馆里吃饭的不要拖到下午三点半以后）。' +
          '<strong>PEM 的卫生间是 Essex Street 一带最可靠的一处</strong>（Witch House 明确没有公共卫生间），' +
          '这在万圣节季很关键：把这里当成逛老城时的补给站。',
        '<strong>拍照规矩要提前认下来：允许个人无闪光拍摄（部分展品另行标注禁止），' +
          '但明确禁止闪光灯、录像、三脚架与自拍杆</strong>（官方原文' +
          '「Flash photography, video and the use of tripods and selfie sticks are not permitted by the general public」）。' +
          '<strong>这是一个「必去但不适合拍照」的典型条目：把它当成看东西的地方，别当成拍照的地方。</strong>'
      ],
      photo: '室内 <strong>2.5/5</strong>，建筑 <strong>3/5</strong>，人文题材 <strong>3.5/5</strong>（荫余堂）。' +
        '<strong>整体不适合拍照</strong>：禁三脚架与闪光灯，展厅光线为展品服务而不是为相机服务；' +
        '唯一真正值得拍的是荫余堂的天井与木格窗，而它现在可能带着脚手架。' +
        '来这里是为了看，不是为了拍。',
      shots: [
        {
          name: 'PEM 主入口与 East India Square 立面',
          view: [42.52159, -70.89219],
          desc: '<strong>坐标为 OSM 的 Peabody Essex Museum 实体（way 215901152，161 Essex Street，' +
            'Essex Street 与 New Liberty Street 转角）。</strong>' +
            '这是唯一能在馆外免费拍的角度：现代玻璃与砖石的新馆立面接着老馆。' +
            '<strong>Essex Street 这一段是步行街，没有车流干扰，但万圣节季白天人很密</strong>，' +
            '想要干净前景只有清晨。' +
            '<strong>24–35mm 拍立面与广场关系，50mm 抽新旧建筑的交接。</strong>' +
            '手持即可，步行街上不要架三脚架挡道。'
        },
        {
          name: '荫余堂天井（馆内，需时段票）',
          desc: '<strong>无独立 OSM 实体，地图无针脚（位于 PEM 园区内、主楼东侧靠 Charter Street 一侧）。</strong>' +
            '<strong>馆内允许个人无闪光手持拍摄，禁三脚架与录像。</strong>' +
            '天井是唯一有自然顶光的空间，<strong>正午前后（11:00–14:00）天井底部的光最多</strong>，' +
            '其余时间室内很暗。' +
            '<strong>实测需要 ISO 1600–6400、f/1.8–2.8；带一支 24mm 或 35mm 大光圈定焦最实用。</strong>' +
            '构图抓两样：<strong>从天井仰看四面屋檐围出的方形天空</strong>，' +
            '以及<strong>一层卧房镂空木格窗透出的鱼池</strong>。' +
            '<strong>预期管理：修缮期间可能有脚手架，甚至可能当天整栋关闭</strong>——' +
            '真遇上了就把脚手架与工匠本身当题材，那是几年后就不存在的画面。'
        }
      ],
      access: {
        visit: '<strong>建议 2–3 小时（官方 FAQ 原文：「we suggest allowing for at least two hours」）。</strong>' +
          '分配：<strong>荫余堂 30–40 分钟</strong>（含坡道展陈与排队进场）' +
          ' + 亚洲外销艺术与海事艺术展厅 45–60 分钟 + East India Marine Hall 与临时特展 30–45 分钟。' +
          '<strong>只看重点 75 分钟：荫余堂 + 亚洲外销艺术两块，其余放弃。</strong>' +
          '<strong>想把 25 个展厅走全需要 4 小时以上</strong>；' +
          '<strong>门票全天有效，可以中途出馆吃饭再回来</strong>（官方 FAQ：「Your admission ticket grants you ' +
          'all-day access」），这是排半天行程时很好用的一条。',
        book: '<strong>普通门票不需预约，现场买即可；但荫余堂必须另外约时段票。</strong>' +
          '官方原文：<strong>「Included with admission. Advanced reservations required online or at the ' +
          'Admissions Desk」</strong>，且<strong>「tickets to Yin Yu Tang: A Chinese Home are limited and ' +
          'may sell out」</strong>。' +
          '<strong>正确做法：在 pem.org/tickets 买通票的结账流程里同时选荫余堂的时段</strong>，' +
          '不要指望到现场还有名额，万圣节季尤其如此。' +
          '<strong>Ropes Mansion 只在季节性周末开放自助参观，也需要定时票。</strong>' +
          '节目与门票预约电话 (978) 542-1511。',
        ticket: '<strong>核实日期 2026-09-14，来源 pem.org/visit 官方票价表：' +
          '成人 $25、老年 65+ $23、学生（凭证件）$15、16 岁以下免费、Salem 居民免费。</strong>' +
          '<strong>在 Salem 工作的人凭名片或工牌在售票台可免费入场</strong>（官方原文）。' +
          '<strong>荫余堂与大部分特展都含在通票里，不另收费</strong>（但荫余堂要另约时段）。' +
          '<strong>万圣节季不涨价：这里与 House of the Seven Gables 相反，十月与平日同价。</strong>' +
          '官网另有完整的免费入场名单（complimentary admissions）页，' +
          '<strong>本次未逐条核实其全部条件</strong>，符合条件的请自行查 pem.org。' +
          '电话 (978) 745-9500。',
        hours: '<strong>核实日期 2026-09-14，来源 pem.org/visit 与官网页脚的 Museum Hours：' +
          '周一 10:00–17:00、周二闭馆、周三闭馆、周四至周日 10:00–17:00。</strong>' +
          '<strong>也就是说每周连闭两天（周二与周三），这是 Salem 行程最容易踩的一个坑</strong>——' +
          '很多人把 PEM 和只在周三至周日开的 NPS 室内建筑排在同一天，结果两边都进不去。' +
          '<strong>可行的组合是：周一去 PEM（NPS 室内关、PEM 开）；周四至周日两边都开；' +
          '周二两边的室内都关，那天只适合走户外。</strong>' +
          '<strong>万圣节季与平日的开放时间没有区别（都是 10:00–17:00），' +
          '十月也不延长开放</strong>——' +
          '这一点与 Salem 许多女巫主题馆不同，不要以为十月会有夜场。' +
          '<strong>有一处口径不一致要写明：第三方票务网站列出「周五 10:00–19:00」的延长时段，' +
          '而 PEM 官网页脚与 Visit 页均写周五 10:00–17:00。以官网为准，' +
          '若你打算压在傍晚去，请先打 (978) 745-9500 确认。</strong>' +
          'Atrium Café 核实当日为 10:00–16:00。',
        parking: '<strong>不建议开车，万圣节季更不要。</strong>' +
          '官方列出的停车点：<strong>Museum Place Garage（New Liberty Street，最近）、' +
          'MBTA 通勤铁路车库（252 Bridge Street）、South Harbor Garage（10 Congress Street）、' +
          'St. Peter Street 市营停车场</strong>，' +
          '以及 Salem Common 周边极有限的路边车位与两小时表位。' +
          '<strong>正确方案是 MBTA Newburyport/Rockport 线到 Salem 站</strong>，' +
          '<strong>或者从 Boston Long Wharf 坐 Salem Ferry</strong>' +
          '（高速双体船约 50 分钟，停 Blaney Street Wharf，' +
          '<strong>官方口径为「mid-May through October」季节运行，' +
          '十月的具体末班日期每年不同，未能从官方渠道确认，请查 Boston Harbor City Cruises</strong>）。',
        walk: '<strong>Salem 站到 PEM 约 0.5 英里 / 800 米 / 10 分钟</strong>' +
          '（官方原文「approximately half a mile from the Salem station」，' +
          '路线：Bridge Street → Washington Street → 左转进 Essex Street 步行街，PEM 在步行街尽端右手）。' +
          '<strong>PEM 到 Witch House 沿 Essex Street 向西约 650 米 / 8 分钟；' +
          '到 Old Burying Point 与 Witch Trials Memorial 约 400 米 / 5 分钟；' +
          '到 Derby Wharf 约 900 米 / 12 分钟。</strong>' +
          '<strong>PEM 与老城几个点位构成一个半天的步行圈，全程平路。</strong>'
      },
      notes: [
        '<strong>最要紧的一条：周二与周三闭馆。</strong>' +
          '把 PEM 排在周二或周三是 Salem 行程里最常见的失误，' +
          '<strong>而 Salem 在万圣节季周二周三的人流并不低，等于白挤一天</strong>',
        '<strong>荫余堂要在买通票时一并预约时段，名额有限会卖光</strong>' +
          '（官方原文「limited and may sell out」）；' +
          '<strong>而且它在 2025–2026 年的保护工程期间可能间歇性关闭、可能有脚手架</strong>。' +
          '如果荫余堂是你来 PEM 的唯一理由，' +
          '<strong>出发前务必打 (978) 745-9500 或 (978) 542-1511 问当天是否开放</strong>',
        '<strong>1692 年女巫审判的原始法庭文书虽归 PEM，但存放在 Rowley 的 Phillips Library' +
          '（306 Newburyport Turnpike），不在 Salem 主馆</strong>。' +
          '想看原始档案的人要单独跑一趟，并事先联系图书馆',
        '<strong>禁闪光灯、禁录像、禁三脚架与自拍杆</strong>；' +
          '个人无闪光拍摄允许（部分展品另行标注禁止）。' +
          '<strong>商业与约拍项目要走官网的申请表，可能收费，审核约两周</strong>',
        '<strong>包与雨伞的规定比一般博物馆严</strong>：' +
          '大包要过安检领牌、双肩包必须抱在身前、<strong>雨伞不得带进展厅</strong>。' +
          '雨天来的人要留出寄存时间',
        '<strong>这里被官方认证为 Sensory Inclusive™（与 KultureCity 合作）</strong>，' +
          '有感官友好设施与免费 App，' +
          '带感官敏感的孩子或长辈来 Salem 的话，这是全城最从容的一个室内去处',
        '<strong>雨天策略：Salem 一下雨，全城的户外游客都会挤进 PEM。</strong>' +
          '真遇上雨天想来，10:00 开门就到，或者压在 15:30 之后',
        '<strong>Salem 居民与在 Salem 工作的人免费</strong>（后者凭名片或工牌），' +
          '16 岁以下免费——带孩子来的家庭实际支出比想象低很多'
      ],
      images: [
        { url: 'img/yin-yu-tang-house-salem-mass-29c03981.jpg',
          cap: '荫余堂重建后的外观与马头墙 · Caseyleebrown / CC BY-SA 4.0' },
        { url: 'img/yin-yu-tang-house-reception-hall-4885055d.jpg',
          cap: '荫余堂内部厅堂与木构 · Gkuriger / CC BY-SA 4.0' },
        { url: 'img/peabody-essex-museum-afc21548.jpg',
          cap: 'PEM 主楼与 East India Square 立面 · Fletcher6 / CC BY-SA 3.0' }
      ]
    },
    {
      id: 'salem-witch-house',
      n: 5,
      name: '女巫之家（Jonathan Corwin 宅）',
      en: 'The Witch House (Jonathan Corwin House)',
      must: 3.5,
      score: 3,
      tldr: 'Salem 唯一一栋与 1692 年审判有直接关联的现存建筑；自助参观、$17、室内全程禁拍照与电子设备。',
      tags: [
        { t: '成人 $17', c: 'paid' },
        { t: '室内全程禁拍照', c: 'risk' },
        { t: '十月当日 08:00 放票', c: 'risk' },
        { t: '馆内无公共卫生间', c: 'risk' },
        { t: '需在室外等候', c: 'risk' }
      ],
      highlights: [
        '<strong>这是本条目存在的全部理由：它是 Salem 唯一一栋与 1692 年女巫审判有直接关联、' +
          '且对公众开放的现存建筑。</strong>' +
          '<strong>Jonathan Corwin（1640–1718）1675 年从 Capt. Nathaniel Davenport 手里买下这栋当时还没完工的房子</strong>' +
          '（那年他 35 岁），在这里住了四十多年，房子直到 19 世纪中叶都还在 Corwin 家手里。' +
          '<strong>1692 年他是 Court of Oyer and Terminer 的法官之一——那个法庭判了十九个人死刑——' +
          '而他在这栋房子里主持过多场对被告的庭前审问（pre-trial examinations）。</strong>' +
          '换句话说，<strong>你站的是审判发生的物理现场之一，而不是后人搭的场景</strong>。' +
          'Salem 满城的女巫主题馆里，只有这一栋做得到这件事。',
        '<strong>Corwin 这个人本身是这栋房子最不舒服的部分，也是最值得知道的部分。</strong>' +
          '他与另一位审判法官 <strong>John Hathorne</strong>（葬在 Old Burying Point、Nathaniel Hawthorne 的高祖父）' +
          '既是密友也是姻亲；' +
          '审判之后他继续当 Superior Court 法官与遗嘱检验法官，' +
          '<strong>终其一生从未对 1692 年的所作所为表示过悔意，1718 年以 78 岁高龄去世，富有而受人尊敬</strong>，' +
          '葬在 Salem 的 Broad Street Cemetery。' +
          '<strong>这栋房子讲的不是受害者的故事，是加害者的日常生活</strong>——' +
          '也正因如此，它和转角的 Witch Trials Memorial 是一组必须一起看的对照。',
        '<strong>建筑本身要诚实交代：它是 First Period（新英格兰最早期）木构，' +
          '但你今天看到的样子有相当大一部分是 20 世纪的复原。</strong>' +
          '建造年代有两种口径：<strong>传统说法 1642 年，MACRIS 的认定是约 1675 年</strong>。' +
          '19 世纪末至 20 世纪初它被改成公寓与店铺（前面甚至加了一间 1856 年的药店门面）；' +
          '<strong>1940 年代因为 North Street 要拓宽，它面临拆除</strong>，' +
          '一群市民为此募到 $42,500，<strong>1945 年冬把整栋房子向后移了约 35 英尺</strong>，' +
          '并由建筑师 <strong>Frank Chouteau Brown 与 Gordon Robb</strong> 复原成推定的 17 世纪外貌' +
          '（含重做那道陡坡屋顶），<strong>1948 年作为博物馆开放</strong>。' +
          '<strong>MACRIS 的评语很直白：复原结果虽然显得更古老，但房子今天「consists of much ' +
          'twentieth-century material」。</strong>' +
          '顺带一提，<strong>这场抢救直接催生了 Historic Salem, Inc.（1944 年成立）</strong>，' +
          'Salem 后来那一整片老城能保下来，起点就是这栋房子。',
        '<strong>参观形式与限制，这一条决定你会不会失望：自助参观（self-guided），' +
          '每 15 分钟放一批人进去，没有讲解员全程带队。</strong>' +
          '看的是七世纪末的家庭生活、家具与建筑细节，配文字说明板。' +
          '<strong>而室内的限制是全 Salem 最严的一处：' +
          '官方明文「No photos or videos are allowed」「Use of electronics of any kind is prohibited」' +
          '——不只是禁拍照，是禁止使用任何电子设备</strong>，' +
          '手机也要收起来。<strong>另外馆内没有公共卫生间、不得饮食、婴儿车与大背包必须留在室外、' +
          '只有一楼符合无障碍标准。</strong>' +
          '<strong>好的一面：房子不大、自助参观节奏由你自己掌握，20–30 分钟就能看完，' +
          '是 Salem 性价比很高的一个小时。</strong>'
      ],
      tour: [
        '<strong>先把预期调对：这是一栋小房子，不是一座博物馆。</strong>' +
          '自助参观、<strong>每 15 分钟放一批人</strong>、房间数有限，' +
          '<strong>正常节奏 20–30 分钟走完</strong>。' +
          '进门在礼品店一侧检票，然后按指示的单向路线走一楼与二楼。' +
          '<strong>它的价值全部来自「这就是当年那栋房子」这一件事——' +
          '带着这个念头去看，它很有分量；指望灯光音效与沉浸式表演，会大失所望</strong>' +
          '（那些在 Essex Street 上的其它女巫主题馆里，但那些馆没有一栋是真的）。',
        '<strong>四样别错过：</strong>' +
          '① <strong>一楼那间被认定为 Corwin 用来做庭前审问的房间</strong>——' +
          '站在里面读说明板上审问记录的片段，是这栋房子唯一会让人后背发凉的地方；' +
          '② <strong>巨大的中央烟囱与开放式壁炉</strong>，' +
          'First Period 民居就是围着这根烟囱长出来的；' +
          '③ <strong>菱形小格铅条窗（leaded casement windows）与二楼的悬挑（overhang）</strong>，' +
          '这是 17 世纪英格兰做法直接搬到新英格兰的证据；' +
          '④ <strong>17 世纪的家具与厨房器物</strong>，' +
          '大部分人来这里只想到「女巫」，结果记住的却是那个时代怎么做饭、怎么睡觉。',
        '<strong>可以跳过的：二楼靠后的几间陈设房间如果人太挤，不必硬排队等空位。</strong>' +
          '省下的时间<strong>一定要花在转角外的两处免费点上</strong>：' +
          '<strong>Witch Trials Memorial</strong>（Liberty Street，黎明到黄昏免费，' +
          '二十条刻名石凳，见本区 Old Burying Point 那一条）' +
          '与 <strong>Chestnut Street</strong>（就在 Witch House 西南侧几步，同属 McIntire 历史区）。' +
          '<strong>「加害者的房子 + 受害者的纪念碑」这个组合才是 Salem 最值得走的一条线，' +
          '而后者一分钱不要。</strong>',
        '<strong>排队与人流：万圣节季（十月）的规则完全不同，而且很容易白跑一趟。</strong>' +
          '<strong>十月所有票只能在线买，每天早上 08:00 放当天的票、只放当天的</strong>（官方原文），' +
          '<strong>不退款、不接受迟到入场</strong>，' +
          '<strong>4 岁以上每人都要票</strong>。' +
          '<strong>而且官方明说你得在室外等到自己那个时段</strong>' +
          '（原文「You will have to wait outside for your tour time. Please be prepared for chilly or ' +
          'rainy conditions」）——' +
          '<strong>十月的 Salem 早晚很冷、常下雨，而门口没有遮雨处，穿够衣服。</strong>' +
          '平日（非十月）人少得多，现场买票即可，工作日上午几乎不用等。',
        '<strong>餐饮与卫生间：馆内没有公共卫生间</strong>（官方原文「There are no public restrooms」），' +
          '<strong>也不得带任何食物饮料进去</strong>（门内礼品店旁有垃圾桶给你扔掉手上的东西）。' +
          '<strong>最近的卫生间是 PEM（Essex Street 向东约 650 米，需门票）与 ' +
          'NPS 的 Salem Armory Visitor Center（9:30–16:30，免费）</strong>——' +
          '<strong>进门前先解决，这不是客套话，是这里最常见的抱怨。</strong>',
        '<strong>几条会被拦住的小事，提前知道省掉争执：</strong>' +
          '<strong>婴儿车与背带式婴儿座必须停在室外；大背包与行李箱不得带入；' +
          '只有导盲犬等服役动物可入（需出示标识）；不得触碰任何家具与展品；只有一楼是无障碍的。</strong>' +
          '<strong>室外可以拍照</strong>，但官方要求<strong>不要堵住前门</strong>（那是出口），' +
          '也<strong>不要坐上或搬动门口的干草捆、南瓜与其它季节装饰</strong>。'
      ],
      photo: '建筑 <strong>3.5/5</strong>（仅限外观），室内 <strong>0/5</strong>。' +
        '<strong>室内完全不能拍：官方明文禁止照片、录像与任何电子设备的使用</strong>，' +
        '这是全 Salem 最严的一条，别试。' +
        '外观是很好的题材：陡坡屋顶、二层悬挑与深色木瓦，是新英格兰 17 世纪民居的教科书立面。',
      shots: [
        {
          name: 'Essex Street 与 North Street 转角（唯一可拍的角度）',
          view: [42.52155, -70.89890],
          desc: '<strong>坐标为 OSM 的 The Witch House 实体（way 215904008，310½ Essex Street）。</strong>' +
            '<strong>从公共人行道拍，不需门票。</strong>' +
            '房子的主立面朝<strong>东北</strong>面向 Essex Street 转角，' +
            '<strong>所以它是一个上午的立面：清晨到 10:00 左右正面受光，' +
            '午后整面转入阴影、只能靠天光</strong>。' +
            '<strong>24–35mm 竖幅把陡坡屋顶与两层悬挑完整收进来</strong>' +
            '（这栋房子的特征全在轮廓上，广角拍全景反而更清楚）；' +
            '<strong>85mm 抽那组菱形小格铅条窗</strong>。' +
            '<strong>注意 Essex Street 与 North Street 在这里是通车路口，有车流与信号灯</strong>，' +
            '不要为了退后取景站到马路上。' +
            '万圣节季门口会摆干草捆与南瓜，' +
            '<strong>想要不带装饰的「素颜」立面就得在十月之外来</strong>。'
        }
      ],
      access: {
        visit: '<strong>建议 30–45 分钟（含在室外等自己那个入场时段的时间）。</strong>' +
          '<strong>室内自助参观本身 20–30 分钟</strong>（房子不大、每 15 分钟放一批人，节奏自己掌握）；' +
          '<strong>只看外观 5 分钟。</strong>' +
          '<strong>建议连着转角的 Witch Trials Memorial 与 Chestnut Street 一起走，三处合计 75–90 分钟。</strong>' +
          '（依据：官方未给建议时长；按自助参观形式、开放房间数量与 15 分钟一批的入场间隔推算。）',
        book: '<strong>分两套规则，差别很大：</strong>' +
          '<strong>① 平日（非十月）：不需预约，现场买票即可</strong>，工作日上午基本不用等。' +
          '<strong>② 万圣节季（十月）：所有票必须在线购买，官方原文「All tickets must be purchased online... ' +
          'Tickets will be available at 8:00 am each morning for that day only」</strong>——' +
          '<strong>每天早上 08:00 放当天的票，只放当天，卖完就没有，不接受提前预约。</strong>' +
          '<strong>票不退款、不接受迟到入场；4 岁以上每人一票。</strong>' +
          '<strong>（2026 年官网写的是十月票务从 8 月 15 日起启用此规则；放票安排每年会调整，' +
          '核实日期 2026-09-14，出行当年请复查 thewitchhouse.org 的 Visiting in October 页。）</strong>' +
          '<strong>学校团体票 $5／学生、每 10 名学生配一名免费随队成人，但十月不接受团体预订。</strong>',
        ticket: '<strong>核实日期 2026-09-14，来源 thewitchhouse.org 的 Plan Your Visit 页：' +
          '票价一律 $17.00。</strong>' +
          '<strong>官网只写了这一个数字，没有列出老年、学生或儿童分档；' +
          '唯一的另一档是学校团体的 $5／学生。' +
          '「4 岁以上每人都要票」（十月页原文），4 岁以下未明确说明是否免费，未能从官方渠道确认。</strong>' +
          '<strong>要提醒一处常见的错误信息：网上多篇二手攻略仍在写「成人 $12、老年与 6–14 岁 $8」，' +
          '那是旧价，与现行官网的 $17.00 不符。以官网为准，带够现金或直接线上买。</strong>' +
          '<strong>万圣节季与平日票价相同（都是 $17），十月不涨价</strong>——' +
          '十月变的是购票方式（只能当天线上抢）而不是价格。' +
          '<strong>室外看立面免费。</strong>' +
          '联系方式：witchhouseadmin@gmail.com（官网未公布对外电话，' +
          '要电话确认可打 Salem 市政府总机 (978) 745-9595）。',
        hours: '<strong>核实日期 2026-09-14，来源 thewitchhouse.org Plan Your Visit 页，官方原文照录：</strong>' +
          '<strong>① 常规季 4 月 15 日至 11 月 15 日：「Open Daily 10:00 am-5:00 pm（Last Entry is 4:30 pm）」' +
          '——整个十月都在这一档内，每天开，无每周闭馆日。</strong>' +
          '<strong>② 冬季 11 月 16 日至 4 月 14 日：「Thursday-Sunday 12pm-4pm（Last Entry is 3:45 pm）」' +
          '——每周只开四天、每天只开四小时，冬天来的人务必按这个排。</strong>' +
          '<strong>③ 闭馆日原文：「Closed Thanksgiving, Christmas Eve, Christmas Day, New Years Eve, ' +
          'and New Years Day and Federally Recognized Holidays」。</strong>' +
          '<strong>→ 这里有一个必须自己去确认的坑：官方把「联邦法定假日」也列为闭馆日，' +
          '而十月里就有一个联邦假日（Columbus Day / Indigenous Peoples\' Day，每年十月的第二个周一）。' +
          '万圣节旺季当天究竟照常开还是按假日闭馆，官网没有写清，未能从官方渠道确认。' +
          '如果你的行程只有那一天，请先发邮件到 witchhouseadmin@gmail.com 问明。</strong>' +
          '<strong>万圣节季与平日的开放时间没有区别（都是 10:00–17:00、最晚入场 16:30），' +
          '十月不延长、也没有夜场。</strong>',
        parking: '<strong>不要开车，这一带是 Salem 最难停的位置之一。</strong>' +
          'Essex Street 与 North Street 路口周边是居民区与两小时表位，' +
          '万圣节季基本没有空位。' +
          '<strong>正确方案是 MBTA Newburyport/Rockport 线 Salem 站</strong>；' +
          '若必须停车，最近的是 <strong>Museum Place Garage（New Liberty Street）</strong>' +
          '与 <strong>St. Peter Street 市营停车场</strong>，' +
          '从后者步行过来约 400 米。',
        walk: '<strong>Salem 站到 310½ Essex Street 约 1.0 公里 / 13 分钟</strong>' +
          '（沿 Bridge Street → Washington Street → Essex Street 向西）。' +
          '<strong>PEM 到这里沿 Essex Street 向西约 650 米 / 8 分钟</strong>；' +
          '<strong>到 Chestnut Street 东端约 300 米 / 4 分钟</strong>（两者同属 McIntire／Federal Street 历史区，' +
          '天然是一组）；' +
          '<strong>到 Witch Trials Memorial 与 Old Burying Point 约 750 米 / 10 分钟</strong>；' +
          '到 Derby Wharf 约 1.3 公里 / 17 分钟。'
      },
      notes: [
        '<strong>本条目与本区 Old Burying Point 那一条是一组，请一起读：' +
          '这里是审判法官 Jonathan Corwin 的家，Witch Trials Memorial 是受害者的纪念碑，' +
          '两处相距 750 米、后者免费。</strong>' +
          '只看一处会得到一个偏掉的印象',
        '<strong>室内禁止照片、录像与任何电子设备的使用（官方明文），这是全 Salem 最严的一条。</strong>' +
          '不要带三脚架，也不要试图举手机——工作人员会当场制止',
        '<strong>馆内没有公共卫生间，也不许带食物饮料进去。</strong>' +
          '进门前在 PEM 或 NPS 的 Salem Armory Visitor Center（9:30–16:30，免费）解决',
        '<strong>万圣节季（十月）只能在当天早上 08:00 抢线上票，不退款、迟到作废。</strong>' +
          '这意味着你没法提前把它锁进行程，' +
          '<strong>请把它当成「抢到就去」的项目，并准备一个抢不到时的替代方案</strong>' +
          '（Witch Trials Memorial 与 Chestnut Street 都免费且不限流）',
        '<strong>官方要求在室外等到自己那个入场时段，而门口没有遮雨处</strong>' +
          '（原文「Please be prepared for chilly or rainy conditions」）。' +
          '十月的北岸早晚体感明显低于内陆，带一件防风外套',
        '<strong>婴儿车、婴儿背带座、大背包与行李箱都必须留在室外；只有一楼符合无障碍标准</strong>' +
          '（2008 年曾获拨款做过无障碍改造，但二楼仍不可达）',
        '<strong>建造年代有两种官方口径：传统说法 1642 年，MACRIS 认定约 1675 年。</strong>' +
          '同时 MACRIS 明确指出现存建筑「含大量 20 世纪材料」——' +
          '<strong>它的真实性在于位置与产权历史，而不在于每一根木头都是 1675 年的</strong>',
        '<strong>室外拍照可以，但不要堵住前门（那是出口），' +
          '也不要坐上或移动门口的干草捆、南瓜与季节装饰</strong>（官方明文要求）'
      ],
      images: [
        { url: 'img/the-witch-house-salem-ma-2023-02-23-04-8197b9bd.jpg',
          cap: '陡坡屋顶与二层悬挑的正面立面 · Crisco 1492 / CC BY-SA 4.0' },
        { url: 'img/the-witch-house-salem-2009-eb84f762.jpg',
          cap: 'Essex Street 转角看 Witch House 全貌 · chensiyuan / CC BY-SA 4.0' },
        { url: 'img/salem-witch-house-ii-b458a526.jpg',
          cap: '深色木瓦墙面与菱形小格铅条窗 · SalemPuritan / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'marblehead-old-town-fort-sewall',
      n: 6,
      name: 'Marblehead 老城与 Fort Sewall',
      en: 'Marblehead Old Town & Fort Sewall',
      must: 3,
      score: 4,
      tldr: '新英格兰保存最完整的殖民时期老城之一，游客量比 Salem 少一个数量级；Fort Sewall 免费且俯瞰整条港湾。',
      tags: [
        { t: 'Fort Sewall 完全免费', c: 'free' },
        { t: '老城街巷免费', c: 'free' },
        { t: '没有通勤铁路', c: 'risk' },
        { t: 'Lee Mansion 成人 $10', c: 'paid' },
        { t: '人少得多', c: 'good' }
      ],
      highlights: [
        '<strong>这是本区的「反 Salem」选项：同样是 17–18 世纪的海港老城，' +
          '保存度不输 Salem，而游客量差一个数量级。</strong>' +
          '<strong>Marblehead Historic District 于 1984 年列入 National Register</strong>' +
          '（范围大致由 Marblehead Harbor、Waldron Court、Essex、Elm、Pond 与 Norman 街围合），' +
          '<strong>整片老城是密集的殖民时期与联邦时期木构民居，街巷窄而弯、依着岩坡起伏</strong>，' +
          '很多房子门口挂着建造年代与原主人职业的铭牌。' +
          '<strong>它不是被复原出来的历史街区，而是一个一直有人住、房子一直没拆的镇子</strong>——' +
          '这也意味着它没有门票、没有闸机、没有排队，也没有摊位。',
        '<strong>Fort Sewall 是这里最好的免费去处，而且它的故事比土堆本身精彩。</strong>' +
          '<strong>1644 年由殖民地政府拨地在 Gale\'s Head 建起土垒炮台</strong>，' +
          '用来防海盗、法国人与荷兰人；法印战争与独立战争期间都实际驻过兵，' +
          '之后移交联邦政府扩建，<strong>1863 年南北战争期间再次整修</strong>。' +
          '<strong>1814 年改名 Fort Sewall，纪念 Marblehead 本地人、Massachusetts 最高法院法官 Samuel Sewall。</strong>' +
          '<strong>它最有名的一刻是 1814 年 4 月 3 日（周日）：美国海军的 Constitution（「Old Ironsides」）' +
          '被两艘英国巡防舰追击，靠着这座炮台的火炮掩护逃进 Marblehead 港。</strong>' +
          '<strong>1922 年 2 月 25 日由美国国会法案把这块地永久移交给 Marblehead 镇作公园</strong>，' +
          '现在是约 2.5 英亩的公共绿地，<strong>地下还留着当年驻兵与关押俘虏用的掩体与地下室</strong>。',
        '<strong>Fort Sewall 的位置是它真正的价值：它在 Marblehead 港的北口岬角上，' +
          '三面是水，能一眼看完整条港湾、对面的 Marblehead Neck 与港口里成片的帆船。</strong>' +
          '<strong>完全免费、不需预约、没有开放时间限制，季节性开放的公共卫生间就在公园里</strong>。' +
          '<strong>要先降低一处期待：地面上没什么「城堡」可看</strong>——' +
          '留下的主要是土垒、少量石构与一座不总开放的掩体，' +
          '<strong>来这里是为了那个视野与那段历史，不是为了看遗迹规模。</strong>' +
          '公园里还装了免费的观景望远镜。',
        '<strong>老城里两个收费景点要分清值不值：</strong>' +
          '<strong>① Jeremiah Lee Mansion（161 Washington Street，1768 年）——这一个值。</strong>' +
          'Jeremiah Lee 是殖民时期 Massachusetts 最富的商人与船东，' +
          '这栋乔治亚式大宅<strong>保存在接近原状的状态，' +
          '最珍贵的是那批 18 世纪英国手绘壁纸——官方口径说这是唯一仍原地保存下来的此类壁纸</strong>；' +
          '<strong>三层十八个陈设房间，45 分钟讲解导览</strong>。' +
          '<strong>② Abbot Hall（188 Washington Street，1876–77 年建）——免费，而且藏着一张名画。</strong>' +
          '<strong>Archibald M. Willard 的《The Spirit of \'76》原作就挂在二楼的 Selectmen\'s Room 里</strong>' +
          '（那是为 1876 年费城百年博览会画的，原名《Yankee Doodle》；' +
          'Willard 后来画过多幅副本，这一幅是原作，1880 年由 John H. Devereux 将军买下捐给本镇）；' +
          '<strong>同一间屋里还有 1684 年本镇向 Naumkeag 人购地的原始地契（价格是 16 英镑）</strong>，' +
          '以及 George Washington、Paul Revere 的信件与 John Hancock、Samuel Adams 签署的文件。'
      ],
      tour: [
        '<strong>先定一条路线，否则老城的窄巷很容易把人绕晕。</strong>' +
          '推荐：<strong>Abbot Hall（免费，看《The Spirit of \'76》与 1684 年地契）→ ' +
          'Washington Street 往下走看 Jeremiah Lee Mansion → ' +
          'Crocker Park（免费，港湾正面视野）→ 沿 Front Street 走到尽头的 Fort Sewall</strong>。' +
          '全程约 1.5 公里、有起伏但不陡，<strong>最后停在 Fort Sewall 是对的</strong>——' +
          '那里视野最好、有长椅、有季节性卫生间，适合收尾。',
        '<strong>三样别错过：</strong>' +
          '① <strong>Abbot Hall 二楼 Selectmen\'s Room 的《The Spirit of \'76》原作</strong>——' +
          '这是全镇最被低估的一件东西，免费，而且大多数来 Marblehead 的人根本不知道它在这儿；' +
          '② <strong>Fort Sewall 岬角上的港口全景</strong>，' +
          '正对 Marblehead Neck 与整条锚地，天气好时港里停着几百条帆船；' +
          '③ <strong>Lee Mansion 里那批原地保存的 18 世纪英国手绘壁纸</strong>' +
          '（如果你只打算进一处收费景点，进这一处）。' +
          '<strong>另外 Lee Mansion 的花园自 1936 年由 Marblehead Garden Club 维护，' +
          '黎明到黄昏免费开放、有长椅、可以带午餐进去吃</strong>——不进屋也值得穿过去。',
        '<strong>可以跳过的：老城里零散的小型历史屋与纪念牌不必逐个打卡。</strong>' +
          '<strong>Abbot Hall 的 Sign Museum 目前因翻修关闭</strong>（官方说明），别专程去找。' +
          '省下的时间就用来在 Washington Street 与 Front Street 之间乱走——' +
          '<strong>这个镇子的价值在整体氛围而不在单点，走进没有游客的横巷才是正确玩法。</strong>',
        '<strong>开放日与时段是这里最容易踩的坑，三处规则各不相同：</strong>' +
          '<strong>① Lee Mansion 只在 6 月 1 日至 10 月 31 日开，而且是周二至周六、' +
          '整点发团、最后一团 15:00——周日与周一关门，冬天整季不开。</strong>' +
          '<strong>② Abbot Hall 是镇政府办公楼，按政府作息开</strong>' +
          '（周一、周二、周四 8:00–17:00，周三 8:00–18:00，<strong>周五只到 12:30</strong>），' +
          '<strong>而 Selectmen\'s Room 是现役会议室，开会或办婚礼时可能进不去</strong>——' +
          '想稳妥就避开周五下午与晚间会议时段，或先打 (781) 631-0000 问一句。' +
          '<strong>③ Fort Sewall 与 Crocker Park 是公共公园，随时可去，这两个不用算时间。</strong>',
        '<strong>人流：这是 Marblehead 相对 Salem 的最大优势，不需要任何避人技巧。</strong>' +
          '<strong>万圣节季（十月）Salem 一天涌进数万人，而 Marblehead 完全在那股人流之外</strong>——' +
          '它不在通勤铁路上、没有女巫主题产业，秋季的工作日老城街巷常常安静到只有你自己。' +
          '<strong>真正的拥堵只出现在夏季周末与帆船赛期间</strong>' +
          '（七月的 Marblehead Race Week 一带停车会瘫）。' +
          '<strong>Fort Sewall 在夏季周末与独立日前后会有历史重演活动与人群</strong>，' +
          '平时几乎空着。',
        '<strong>餐饮与卫生间：这一条要提前安排，老城的公共设施比 Salem 少。</strong>' +
          '<strong>Fort Sewall 里有公共卫生间，但只在季节性开放</strong>（官方措辞「open seasonally」，' +
          '<strong>十月是否仍开未能从官方渠道确认</strong>），' +
          '<strong>Abbot Hall 作为镇政府办公楼在上班时段有卫生间可用，这是最可靠的一处</strong>。' +
          '餐饮集中在 <strong>Washington Street 与 Atlantic Avenue／Pleasant Street 一带</strong>，' +
          '是小镇餐馆而不是游客街，<strong>很多店周日或淡季会缩短营业时间，' +
          '傍晚之后选择明显变少</strong>——想坐下吃饭的别拖到 20:00。' +
          'Lee Mansion 花园允许带餐野餐，是最舒服的午餐地点。'
      ],
      photo: '风光 <strong>4/5</strong>，建筑 <strong>4/5</strong>，街拍 <strong>3.5/5</strong>。' +
        '加分在朝西的港湾（这是本区少数成立的日落方向）与几乎没有游客的殖民地街巷；' +
        '扣分在没有单一的标志性主体——它是「一整片好」而不是「一个点极好」。',
      shots: [
        {
          name: 'Fort Sewall 岬角（俯瞰整条 Marblehead 港）',
          view: [42.50857, -70.84130],
          desc: '<strong>坐标为 OSM 的 Fort Sewall 公园实体（way 29697306，Front Street 尽端）。</strong>' +
            '<strong>免费、无门禁。站在土垒顶上朝西南看整条港湾与对面的 Marblehead Neck。</strong>' +
            '<strong>最佳时段是日落前 60 分钟到日落</strong>：' +
            '<strong>这是本区少数真正成立的日落机位</strong>——' +
            '北岸多数海岸朝东，而这里是朝西越过港口看，' +
            '低角度的光会把港内成片的帆船桅杆与老城的白色立面一起打亮。' +
            '<strong>24–35mm 拍港湾全景加前景的土垒线条；70–200mm 压缩抽对岸 Marblehead Light ' +
            '与密集的桅杆群</strong>。' +
            '<strong>岬角三面临水、风很大且无遮挡</strong>，三脚架要压重。' +
            '园内草坡湿滑时注意脚下，地下掩体不总开放。'
        },
        {
          name: 'Crocker Park（老城与港口的正面关系）',
          view: [42.50295, -70.84877],
          desc: '<strong>坐标为 OSM 的 Crocker Park 实体（way 29697424）。</strong>' +
            '<strong>免费的岩石小公园，位置比 Fort Sewall 更靠港湾内侧</strong>，' +
            '<strong>所以它是唯一能把「老城的房子 + 港口的船」收进同一张的地方</strong>' +
            '（Fort Sewall 太靠外，拍不到城）。' +
            '<strong>同为朝西南的黄昏机位，日落前 45 分钟最好。</strong>' +
            '35mm 横幅拍城与港，<strong>135mm 抽岸边层叠的木构房屋立面</strong>。' +
            '公园是花岩露头，鞋要防滑；这里也是本镇看焰火与帆船赛的位置，那种日子会挤。'
        }
      ],
      access: {
        visit: '<strong>建议 2.5–4 小时（不含往返交通）。</strong>' +
          '分配：<strong>Fort Sewall 30–45 分钟</strong>（视野与土垒，含坐下看港口的时间）' +
          ' + <strong>老城街巷漫步 60–90 分钟</strong>（Washington Street 与 Front Street 一带）' +
          ' + <strong>Abbot Hall 30 分钟</strong>（《The Spirit of \'76》与 1684 年地契）' +
          ' + <strong>Jeremiah Lee Mansion 45 分钟导览</strong>（官方明示 45-minute tours）' +
          ' + Crocker Park 15 分钟。' +
          '<strong>只看重点 90 分钟：Abbot Hall → Crocker Park → Fort Sewall，全程免费，不进 Lee Mansion。</strong>' +
          '<strong>只来 Fort Sewall 的话 40 分钟够</strong>，但那样不值得专程跑一趟 Marblehead。' +
          '（依据：Lee Mansion 官方导览时长 45 分钟；其余按历史街区范围与实测步行距离推算。）',
        book: '<strong>Fort Sewall、Crocker Park、老城街巷与 Lee Mansion 花园：全部不需预约、不需票。</strong>' +
          '<strong>Abbot Hall：不需预约、免费，按镇政府办公时段自由进出</strong>' +
          '（但 Selectmen\'s Room 是现役会议室，有会议或活动时可能临时不可进）。' +
          '<strong>Jeremiah Lee Mansion：官方「要求访客预先在线购票并选定场次」</strong>' +
          '（原文「We are asking visitors to pre-purchase your admission tickets for a scheduled tour」），' +
          'marbleheadmuseum.org 上订，电话 (781) 631-1768。' +
          '<strong>Fort Ranger 免费导览：由镇里派驻的 Fort Ranger 带队，' +
          '官方口径为「Tuesday through Sunday, Noon to 4:00 PM」，' +
          '计划安排是「每年夏季自 Memorial Day 至 Labor Day，秋季只在周末」' +
          '——也就是说十月大概只有周末有 Ranger，' +
          '具体的秋季排班未能从官方渠道确认，请打 (781) 631-0000 问 Recreation and Parks。</strong>',
        ticket: '<strong>核实日期 2026-09-14。</strong>' +
          '<strong>① Fort Sewall：完全免费</strong>（1922 年国会法案规定永久作公共公园之用），' +
          '园内免费观景望远镜，<strong>Crocker Park 与老城街巷同样免费</strong>。' +
          '<strong>② Abbot Hall 与 Selectmen\'s Room 的《The Spirit of \'76》：免费</strong>' +
          '（官方页面原文提到「Free, on-street parking is usually available」，入内亦不收费）。' +
          '<strong>③ Jeremiah Lee Mansion：成人 $10；' +
          '博物馆会员、NARM、MTA、持 EBT／WIC／ConnectorCare 卡的家庭、现役军人及其家属、' +
          '以及 14 岁以下儿童免费</strong>（marbleheadmuseum.org 官方票务页）。' +
          '<strong>Lee Mansion 的花园免费，黎明到黄昏开放。</strong>' +
          '<strong>万圣节季与平日票价完全相同——Marblehead 没有旺季加价，' +
          '这是它相对 Salem 的又一个优势。</strong>',
        hours: '<strong>核实日期 2026-09-14。四套时间要分开记：</strong>' +
          '<strong>① Fort Sewall 与 Crocker Park：公共公园，没有公布的开放时间限制，' +
          '实务上视同随时可进。园内公共卫生间官方口径为「open seasonally」，' +
          '十月是否仍开未能从官方渠道确认。</strong>' +
          '<strong>② Abbot Hall（含 Selectmen\'s Room 与馆内展陈）按镇政府办公时段：' +
          'marbleheadma.gov 官方公布为周一、周二与周四 8:00–17:00，周三 8:00–18:00，' +
          '周五 8:00–12:30——注意周五中午就关，周末按此口径不开。</strong>' +
          '<strong>③ 但这里有一处口径不一致，两种都写出来：' +
          '有第三方汇总页列出「Memorial Day 周末至十月的周末延长时段：周五 13:00–16:00、' +
          '周六 10:00–17:00、周日 11:00–17:00」，' +
          '这套周末时段未能在 marbleheadma.gov 或 marbleheadhistory.org 上找到官方原文确认。' +
          '打算周末去看《The Spirit of \'76》的人，请先打 (781) 631-0000 确认。</strong>' +
          '<strong>④ Jeremiah Lee Mansion：官方原文「Open June 1st through October 31st, ' +
          'Tuesday through Saturday, 10am-4pm (last tour at 3pm), Tours depart on the hour」' +
          '——即 6 月 1 日至 10 月 31 日、周二至周六、整点发团、最后一团 15:00；' +
          '周日与周一不开，11 月至 5 月整季关闭。花园全年黎明到黄昏开放。</strong>' +
          '<strong>→ 万圣节季（十月）与平日相比：Marblehead 这边没有任何旺季特例，' +
          '开放时间、票价、预约规则一律照常。唯一的季节性节点是 Lee Mansion 在 10 月 31 日收季，' +
          '十一月起就只剩免费的户外部分了。</strong>',
        parking: '<strong>开车其实是来 Marblehead 最实际的方式</strong>（见 walk 一条说明为什么）。' +
          '<strong>Abbot Hall 一带通常有免费路边车位</strong>（官方页面原文「Free, on-street parking is ' +
          'usually available for visitors」）。' +
          '<strong>Fort Sewall 在 Front Street 尽端，车位极少且是狭窄的住宅街</strong>——' +
          '<strong>正确做法是把车停在老城上坡的 Washington Street／Abbot Hall 一带，走下去</strong>。' +
          '<strong>夏季周末与帆船赛期间老城停车会瘫，秋季工作日几乎没有问题。</strong>' +
          '（各路段的具体限时与居民许可规定未逐条核实，下车前请读路牌。）',
        walk: '<strong>这一条是 Marblehead 唯一的硬伤：它不在通勤铁路上，没有火车。</strong>' +
          '<strong>公交方案（官方页面列出）：MBTA 441／442 路从 Wonderland 站（蓝线）来，' +
          '448／449 路从 Downtown Crossing 来，' +
          '到 Pleasant St @ Rockaway 站下车后步行几个街区即到 Abbot Hall。</strong>' +
          '<strong>从 Salem 过来没有直达公交：要先坐 455 路到 Lynn 再换 441／442 路</strong>，' +
          '实测约 60–83 分钟；<strong>从 Salem 站直接打车约 6.5 公里、10–15 分钟，' +
          '这是从 Salem 串点最省时间的走法。</strong>' +
          '<strong>镇内步行距离：Abbot Hall 到 Jeremiah Lee Mansion 约 250 米 / 3 分钟</strong>' +
          '（都在 Washington Street 上）；' +
          '<strong>Abbot Hall 到 Crocker Park 约 350 米 / 5 分钟；' +
          'Crocker Park 到 Fort Sewall 沿 Front Street 约 700 米 / 9 分钟</strong>；' +
          '<strong>Abbot Hall 直接走到 Fort Sewall 约 1.0 公里 / 13 分钟，有上下坡。</strong>'
      },
      notes: [
        '<strong>最要紧的一条：Marblehead 没有通勤铁路。</strong>' +
          '无车的人要走 Wonderland（蓝线）换 441／442 路，或从 Salem 站打车；' +
          '<strong>不要以为它像 Salem 与 Rockport 那样下火车就到</strong>——' +
          '这是本区可达性最差的几个点之一',
        '<strong>Jeremiah Lee Mansion 只开 6 月 1 日至 10 月 31 日、周二至周六，最后一团 15:00。</strong>' +
          '周日周一来的人只能看外观与免费花园；' +
          '<strong>而且官方明示这栋房子不是无障碍的（三层十八个房间、楼梯多）</strong>',
        '<strong>Abbot Hall 的 Selectmen\'s Room 是现役会议室</strong>，' +
          '开会、办婚礼或其它活动时可能临时进不去。' +
          '<strong>《The Spirit of \'76》原作就挂在那间屋里，专程为它来的话先打 (781) 631-0000 确认</strong>',
        '<strong>Fort Sewall 地面上没有多少「城堡」可看</strong>——' +
          '主要是土垒、少量石构与一座不总开放的地下掩体。' +
          '<strong>它的价值是那个视野与免费</strong>，别带着看要塞遗迹的期待来',
        '<strong>Fort Sewall 的公共卫生间只在季节性开放，十月是否仍开未能确认。</strong>' +
          '最可靠的替代是上班时段的 Abbot Hall；' +
          '走 Front Street 之前先解决',
        '<strong>老城是有人居住的社区而不是景区。</strong>' +
          '窄巷、私人车道与住户门前台阶都不要占用；' +
          '<strong>很多房子门口的年代铭牌很吸引人，但那都是私宅，看就好，不要靠门或进院</strong>',
        '<strong>Fort Sewall 岬角三面临水、常年风大</strong>，' +
          '秋冬体感明显低于内陆；草坡与花岩在潮湿时滑，' +
          '带孩子的注意公园边缘没有连续护栏',
        '<strong>这里是 Salem 在万圣节季的最佳替代方案：' +
          '同样的殖民地海港质感，没有旺季加价、没有限流预约、没有人潮。</strong>' +
          '若你的行程正撞上十月的 Salem 而只想安静看老城，把时间挪到这里'
      ],
      images: [
        { url: 'img/fort-sewall-marblehead-42961558995-4cd2ba15.jpg',
          cap: 'Fort Sewall 的土垒与俯瞰港口的岬角 · Haydn Blackey / CC BY-SA 2.0' },
        { url: 'img/marblehead-massachusetts-view-from-fort-sewall-looking-north-1b81f100.jpg',
          cap: '自 Fort Sewall 朝东北看港口与 Marblehead Neck · Tomwsulcer / CC0' },
        { url: 'img/marblehead-harbor-from-crocker-park-spring-defc4cbf.jpg',
          cap: '自 Crocker Park 看老城立面与锚地帆船 · Lisapaulinet / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'rockport-motif-no-1',
      n: 7,
      name: 'Rockport 与 Motif No. 1',
      en: 'Rockport, Bearskin Neck & Motif No. 1',
      must: 3,
      score: 4.5,
      tldr: '渔港小镇，火车终点站下车即到；Motif No. 1 是全美被画得最多的渔屋，全部免费。',
      tags: [
        { t: '景点本身全免费', c: 'free' },
        { t: '火车直达终点站', c: 'free' },
        { t: '单程 $12.25', c: 'paid' },
        { t: '店铺有季节性歇业', c: 'risk' },
        { t: '防波堤无护栏', c: 'risk' }
      ],
      highlights: [
        '<strong>Motif No. 1 是一间红色的渔具棚，被称为「全美被画得最多的建筑」——' +
          '而它现在这一栋是 1978 年的复制品，这件事必须说在最前面。</strong>' +
          '原棚约建于 <strong>1884–85 年</strong>，立在 Bradley Wharf 的花岩码头尽端，' +
          '位置与比例太适合入画，成了 Rockport 画家群体的固定题材。' +
          '<strong>1978 年的 Blizzard of \'78 里，它被风暴潮整体摧毁；' +
          '同一年镇上按原样重建了一栋几乎一模一样的</strong>。' +
          '<strong>所以你拍到的是一栋 1978 年的房子，承载的是 1884 年以来的名声</strong>——' +
          '知道这一点再去看，不会有被骗的感觉；不知道的人常在现场觉得「就这？」。',
        '<strong>这个名字的来历是本条目最好的故事。</strong>' +
          '插画家与蚀刻画家 <strong>Lester Hornby（1882–1956）</strong>冬天在巴黎教画，' +
          '法国学生习惯把常画的固定题材编号叫「motif」。' +
          '他夏天在 Rockport 教学时，发现学生一个接一个交上来的都是那间破渔棚，' +
          '<strong>某次批改作业时脱口而出：「What — Motif No. 1 again!」（怎么又是第一号题材！）</strong>' +
          '这句话就这么留了下来。' +
          '另有两个细节：<strong>1942 年画家 Aldro Hibbard 组织镇上画家重漆这间渔棚，' +
          '在红漆里掺了四加仑曲轴箱废油来消除反光</strong>，' +
          '并交代「千万别弄成那种谷仓红」——今天那种暗哑的红就是这么来的；' +
          '<strong>1933 年镇上还造了一座 27 英尺的等比模型花车开到 Chicago 参加游行并拿了第一名</strong>。' +
          '本地人不叫它 Motif，叫「the Motive」。',
        '<strong>Bearskin Neck 是一条窄到极点的花岩半岛，也是这个镇的商业主轴。</strong>' +
          '从 <strong>Dock Square 到尽端的防波堤约 300 码</strong>，' +
          '两侧挤满画廊、首饰店、古董店、手工艺铺与海鲜小馆，' +
          '<strong>房子都是渔业时代的小木屋改的，所以巷子只有一两米宽</strong>。' +
          '<strong>尽端向 Sandy Bay 里伸出一道约 900 英尺的花岩防波堤</strong>，' +
          '天气好时可以走上去一段——<strong>但那是粗糙的花岩块、块与块之间有缝、全程没有护栏</strong>，' +
          '涨潮或有涌浪时湿滑危险，不要上。' +
          'Rockport 从 20 世纪初就是艺术家聚落，<strong>Rockport Art Association 成立于 1921 年</strong>，' +
          '至今仍在运作。',
        '<strong>可达性是这里最大的优势，全区最好：它就在通勤铁路的终点站上。</strong>' +
          '<strong>MBTA Newburyport/Rockport 线从 Boston North Station 直达 Rockport，' +
          '约 76–79 分钟，Rockport 是终点站——不会坐过站</strong>，' +
          '<strong>下车步行 10–12 分钟就到 Dock Square 与 Bearskin Neck</strong>。' +
          '<strong>而且景点本身完全免费</strong>：Motif No. 1、Bearskin Neck、防波堤与 Front Beach 都不收钱，' +
          '<strong>唯一的支出是火车票（Zone 8，单程 $12.25）与你自己在店里花的钱</strong>。' +
          '<strong>要注意 Motif No. 1 不能进去</strong>——它是一间棚子，' +
          '没有展陈、没有导览、没有开放时间，只能在外面看。'
      ],
      tour: [
        '<strong>路线很简单，几乎不会走错：</strong>' +
          '<strong>Rockport 车站 → 沿 Railroad Avenue 与 Main Street 下坡走到 Dock Square ' +
          '→ 进 Bearskin Neck → 走到尽端的花岩防波堤 → 回头到 T Wharf 一侧看 Motif No. 1</strong>。' +
          '<strong>关键一条：Motif No. 1 不是从 Bearskin Neck 上看的，' +
          '而是要站到内港对面（T Wharf 与 Dock Square 一侧）回头看</strong>——' +
          '在 Bearskin Neck 上你其实站在它旁边，反而看不到那个著名的角度。' +
          '很多人在 Neck 上找了半天找不到「那张明信片」，原因就是站错了岸。',
        '<strong>三样别错过：</strong>' +
          '① <strong>从内港西岸看 Motif No. 1 与背后的 Cape Ann 丘陵</strong>' +
          '（这就是让 Rockport 出名的那个构图）；' +
          '② <strong>走上尽端的花岩防波堤回望整个港口</strong>' +
          '（天气与潮位允许时；这是免费又最有分量的十分钟）；' +
          '③ <strong>Shalin Liu Performance Center</strong>——' +
          'Main Street 上的音乐厅，<strong>舞台背后是一整面朝海的落地窗</strong>，' +
          '有演出时那面窗就是布景；没演出时它的临街空间也值得进去看一眼。' +
          '另外 <strong>Front Beach 离车站只有约 700 米</strong>，' +
          '想看海滩不用专门跑远。',
        '<strong>可以跳过的：Bearskin Neck 上大部分纪念品店。</strong>' +
          '那条巷子里真正值得进的是画廊与几家老手工店，' +
          '其余是 T 恤、冰箱贴与软糖，逛半小时就够了。' +
          '<strong>省下的时间放在防波堤与内港西岸</strong>——' +
          '这个镇的价值在水边而不在店里。' +
          '带孩子的可以反过来：巷子窄、店密、有冰淇淋与软糖店，孩子在 Neck 上会比在防波堤上开心。',
        '<strong>人流与时段：这里的拥堵规律很清楚。</strong>' +
          '<strong>最舒服的是工作日上午 09:00–11:00，摊子刚开、旅游巴士还没到</strong>；' +
          '<strong>夏季周末的 13:00 之后 Bearskin Neck 会挤到没法正常逛</strong>。' +
          '<strong>秋季明显比夏季清爽：气温低、湿度低、光线干净，而大部分商家仍在营业</strong>。' +
          '<strong>十月中下旬到十一月初是这个镇的换季点</strong>——' +
          '人一天天变少，店也一家家开始关。',
        '<strong>店铺的季节性歇业是本条目最需要提前认清的一件事。</strong>' +
          '<strong>普遍规律是：商家大致营业到 Columbus Day（十月的第二个周一）那个长周末，' +
          '之后逐步缩短时间，Bearskin Neck 上相当一部分店从十一月关到次年四月</strong>；' +
          '常见的营业时段是 10:00–17:00，淡季更短。' +
          '<strong>这套规律没有任何官方机构统一发布，属于当地通行做法，未能从官方渠道核实</strong>' +
          '——<strong>十月下旬以后去的人，请按「部分店关门、餐饮选择变少」来准备，' +
          '并且不要把晚餐指望在这里</strong>。' +
          '好消息是<strong>免费的那几样（Motif No. 1、防波堤、海滩、港口）全年都在，不受影响</strong>。',
        '<strong>餐饮与卫生间：</strong>餐饮集中在 <strong>Bearskin Neck 与 Dock Square 一带</strong>，' +
          '以海鲜小馆与冰淇淋、软糖店为主，' +
          '<strong>多数店午市比晚市可靠，淡季晚上可能整条街只剩一两家开着</strong>。' +
          '<strong>公共卫生间集中在 Dock Square／Bearskin Neck 入口一带与车站附近</strong>，' +
          '<strong>但具体位置与开放时段（尤其淡季）未能从官方渠道核实</strong>，' +
          '<strong>实务建议：上防波堤之前先在店里或 Dock Square 解决</strong>——' +
          'Neck 尽端与防波堤上没有任何设施。'
      ],
      photo: '风光 <strong>4.5/5</strong>，建筑 <strong>4/5</strong>，人文街拍 <strong>3.5/5</strong>。' +
        '这是本子地区单点摄影价值最高的目标：一个有明确主体、有干净背景、又完全免费的港口构图。' +
        '扣分只在它太有名，很难拍出没被拍过的角度。',
      shots: [
        {
          name: 'Motif No. 1 与内港（从西岸回望的经典角度）',
          view: [42.65942, -70.61517],
          desc: '<strong>坐标为 OSM 的 Bradley Wharf 实体（node 959119262，Motif No. 1 所在的码头）。' +
            '注意实际站位要在内港对岸（T Wharf 与 Dock Square 一侧）朝这个方向看，' +
            '不是站在这个坐标上。</strong>' +
            '<strong>最佳时段是下午到日落前</strong>：' +
            '内港朝东南，<strong>午后到黄昏的光从西边打在渔棚正面，暗红木墙与白色窗框的层次最好</strong>；' +
            '上午是逆光，红色会发死。' +
            '<strong>潮位比光线更要紧：要涨潮到满潮</strong>——' +
            '低潮时码头下会露出泥滩与水草、船身坐底，倒影全无；' +
            '满潮时船浮起来、水面完整，这张照片才成立。' +
            '<strong>35–50mm 拍渔棚加船只与背后屋顶（最经典的一张）；' +
            '85–135mm 单独压缩渔棚与桅杆</strong>。' +
            '西岸是公共步道，手持即可，人多时不要架三脚架挡道。'
        },
        {
          name: 'Bearskin Neck 尽端防波堤（回望港口全景）',
          view: [42.65993, -70.61551],
          desc: '<strong>坐标为 OSM 的 Bearskin Neck 道路实体（way 9566897）中段，' +
            '防波堤在这条路的东端尽头。</strong>' +
            '走到尽端朝西回望，<strong>能把整个内港、Bearskin Neck 的屋顶群与远处的镇子收在一张里</strong>。' +
            '<strong>24–35mm 横幅拍全景，70–200mm 抽岸线上层叠的木屋。</strong>' +
            '<strong>安全第一：防波堤是粗糙花岩块堆成的，块间有缝、全程没有护栏</strong>，' +
            '<strong>涨潮、有涌浪或刚下过雨时不要上去</strong>；' +
            '低潮且海面平静时才走，穿有抓地力的鞋、不要背着重器材边走边看取景器。'
        }
      ],
      access: {
        visit: '<strong>建议 2.5–4 小时（不含往返火车）。</strong>' +
          '分配：<strong>Bearskin Neck 逛店与走到尽端 60–90 分钟</strong>' +
          ' + <strong>防波堤 20–30 分钟</strong>' +
          ' + <strong>内港西岸看 Motif No. 1 20–30 分钟</strong>' +
          ' + 吃一顿海鲜或冰淇淋 45–60 分钟 + 车站往返步行 25 分钟。' +
          '<strong>只看重点 75 分钟：车站 → Dock Square → 看 Motif No. 1 → 走一趟 Bearskin Neck → 回车站。</strong>' +
          '<strong>想加上 Front Beach 或 Shalin Liu 再留 45 分钟。</strong>' +
          '<strong>实际约束是火车班次而不是景点</strong>：班次约每 60–90 分钟一班，' +
          '所以现实中的停留时间往往被四舍五入成 2 小时或 3.5 小时。' +
          '（依据：Bearskin Neck 官方与地方资料给出的约 300 码长度、防波堤约 900 英尺，' +
          '按实测步行距离与班次间隔推算。）',
        book: '<strong>全部不需预约、不需票。</strong>' +
          'Motif No. 1 是一间渔具棚，<strong>不对内开放、没有导览、没有开放时间</strong>，' +
          '只能在外面看（研究者的记录里也提到这里「从来没有导览」）。' +
          'Bearskin Neck、防波堤、Dock Square 与 Front Beach 都是公共空间。' +
          '<strong>唯一需要提前处理的是火车票</strong>：' +
          '<strong>Rockport 站没有自动售票机</strong>（MBTA 官方站点信息原文），' +
          '<strong>请用 mTicket App 提前买好，或在附近代售点购买</strong>，不要到了车站才找机器。' +
          '<strong>Shalin Liu Performance Center 的演出需单独购票</strong>，' +
          '档期与票价请查 rockportmusic.org。',
        ticket: '<strong>核实日期 2026-09-14。景点本身全部免费</strong>：' +
          'Motif No. 1、Bearskin Neck、花岩防波堤、Dock Square、Front Beach 一律不收费。' +
          '<strong>真正的费用是交通：MBTA 通勤铁路 Rockport 属 Zone 8，' +
          '官方票价表为单程 $12.25、优惠票（老年、残障、青少年等）$6.00</strong>' +
          '（mbta.com/fares/commuter-rail-fares/zones，往返按两张单程票卖）。' +
          '<strong>省钱的关键一条：MBTA 的 $10 Commuter Rail Weekend Pass 在周六与周日可无限次乘坐' +
          '所有线路与所有区段——也就是说周末去 Rockport 往返只要 $10，比两张单程票（$24.50）便宜一半以上。</strong>' +
          '<strong>而且 MBTA 把 Columbus Day / Indigenous Peoples\' Day 这类周一假日并入三天期的 ' +
          'Holiday Weekend Pass（2026 年对应 10 月 10–12 日）</strong>，' +
          '<strong>正好覆盖十月那个长周末</strong>；' +
          '假日档期每年不同，出行前请查 mbta.com。' +
          '<strong>工作日没有这种通票，只能按 $12.25 单程买。</strong>',
        hours: '<strong>核实日期 2026-09-14。分三层看：</strong>' +
          '<strong>① 户外部分（Motif No. 1 外观、Bearskin Neck 巷道、防波堤、Dock Square、Front Beach）：' +
          '公共空间，没有开放时间限制。Motif No. 1 本身不对内开放，任何时候都只能看外面。</strong>' +
          '<strong>② 店铺：常见营业时段约 10:00–17:00，夏季部分店晚至 20:00；' +
          '淡季普遍缩短。地方通行做法是营业到 Columbus Day 长周末，' +
          '之后逐步缩减，Bearskin Neck 上相当一部分店十一月至次年四月整季关闭。' +
          '→ 这套季节规律没有官方发布来源，未能从官方渠道核实；' +
          '十月下旬之后去的人请按「部分店已关」来准备。</strong>' +
          '<strong>③ 火车班次（这是实际决定你能待多久的东西）：' +
          'Newburyport/Rockport 线全年每日运行，Rockport 是终点站；' +
          '实测常规班表约每 60–90 分钟一班，晚间班次明显变稀。' +
          '→ 十月确实有直达车，这一点可以确认：MBTA 官网可查到十月日期的 Rockport 时刻表。' +
          '但要提醒两条：一是 MBTA 的季节性时刻表按春夏／秋冬换版，' +
          '出行前必须按你自己的日期在 mbta.com 上重新查一次具体班次；' +
          '二是万圣节季 MBTA 为 Salem 加开的班次历来只加周末，' +
          '那些加班车与 Rockport 的常规班表是两件事。</strong>' +
          '信息与客服 617-222-3200（周一至周五 6:30–20:00）。',
        parking: '<strong>开车与坐火车都可行，但坐火车更省事。</strong>' +
          '<strong>Rockport 车站自带停车场共 88 个车位，由 Rockport 镇管理，' +
          '按 MBTA 官方站点页面标注「Daily: free」（当日停车免费）、过夜费率未标明</strong>；' +
          '停车场事务电话 978-546-6786。' +
          '<strong>镇中心与 Bearskin Neck 一带的路边车位极少，夏季周末基本停不进去</strong>，' +
          '<strong>正确做法是把车停在车站免费车位再走 10–12 分钟下去</strong>，' +
          '或干脆从 Boston 坐火车来。' +
          '车站还有室外自行车架。',
        walk: '<strong>Rockport 站（17 Railroad Avenue）到 Dock Square 与 Bearskin Neck 入口' +
          '约 800–900 米 / 10–12 分钟</strong>，' +
          '去程是下坡、回程是上坡（回车站赶车请多留 5 分钟）。' +
          '<strong>Dock Square 走完整条 Bearskin Neck 到尽端防波堤约 300 码 / 约 5 分钟</strong>；' +
          '<strong>车站到 Front Beach 约 700 米 / 9 分钟。</strong>' +
          '<strong>车站无电梯、无扶梯，只有 mini high 站台（部分车厢可平层上车）</strong>，' +
          '带大件行李或行动不便者请预留时间。' +
          '<strong>Salem 站到 Rockport 站约 40 分钟——两地在同一条线上，' +
          '所以「Salem 半天 + Rockport 半天」是一趟车能做完的组合</strong>；' +
          '而 Marblehead 不在这条线上，不要和 Rockport 排在同一天。'
      },
      notes: [
        '<strong>最容易踩的一条：Motif No. 1 要从内港对岸（T Wharf／Dock Square 一侧）看，' +
          '不是走进 Bearskin Neck 找。</strong>' +
          '在 Neck 上你站在它旁边，那个著名的角度反而看不到',
        '<strong>现在这一栋是 1978 年 Blizzard of \'78 之后重建的复制品</strong>' +
          '（原棚约建于 1884–85 年，被风暴潮摧毁）。' +
          '<strong>知道这件事再去，就不会失望；不知道的人到现场常觉得受骗</strong>',
        '<strong>Motif No. 1 不能进去</strong>——它是渔具棚，没有内部参观、没有导览、没有开放时间。' +
          '来这里就是在外面看和拍',
        '<strong>Bearskin Neck 尽端的花岩防波堤没有护栏、块间有缝、湿了极滑。</strong>' +
          '<strong>涨潮、涌浪或雨后不要上去</strong>；带小孩的全程牵手，' +
          '不要背重器材边走边看取景器',
        '<strong>店铺季节性歇业：大致做到 Columbus Day 长周末，之后逐步关，' +
          '十一月至次年四月有相当一部分整季关闭。</strong>' +
          '<strong>这套规律无官方来源，未能核实</strong>；' +
          '十月下旬之后来的人请把餐饮当成不确定项，尤其不要指望在这里吃晚饭',
        '<strong>Rockport 站没有自动售票机</strong>（MBTA 官方明示），' +
          '<strong>请用 mTicket App 提前买票</strong>，别到了站台才发现没处买。' +
          '<strong>周末与周一假日用 $10 Commuter Rail Weekend／Holiday Pass 最划算</strong>' +
          '（往返 $10 对两张 $12.25 的单程票），<strong>工作日没有这个优惠</strong>',
        '<strong>班次约每 60–90 分钟一班、晚间更稀，所以回程车次决定你的停留时长。</strong>' +
          '下车时先拍一张回程时刻表，别靠记忆',
        '<strong>拍 Motif No. 1 要配合潮位</strong>：满潮时船浮起、倒影完整；' +
          '低潮时码头下露泥滩、船坐底，画面差很多。' +
          '出发前查 NOAA 的 Gloucester 站（8447435）潮表，' +
          '<strong>注意 Cape Ann 的潮差只有 5–6 英尺、比 Boston 晚约 50 分钟</strong>'
      ],
      images: [
        { url: 'img/motif-number-1-rockport-ma-23bd68f9.jpg',
          cap: 'Motif No. 1 与内港——从西岸回望的经典角度 · John Phelan / CC BY-SA 4.0' },
        { url: 'img/motif-number-1-bradley-wharf-rockport-493905-11690225934-26022e30.jpg',
          cap: '立在 Bradley Wharf 花岩码头上的红色渔棚 · Robert Linsdell / CC BY 2.0' },
        { url: 'img/bearskin-neck-in-rockport-ma-a2c4e68a.jpg',
          cap: 'Bearskin Neck 的店铺带与窄巷 · MBCF / CC BY-SA 4.0' }
      ]
    }
  ]
};
