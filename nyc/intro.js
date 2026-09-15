/* New York / New England 地域的总览与附录静态内容。
   景点数据在 nyc/data.js（由 tools/assemble.py 从 nyc/parts/*.js 生成），
   共 7 个子地区、79 个景点：Salem 与 North Shore、Boston 与 Cambridge、
   Hudson Valley 与 Catskills、Manhattan Uptown、Manhattan Midtown、
   Manhattan Downtown、Brooklyn 与 Queens。

   本文件只写「整个地域层面的执行约束」——预约窗口、闭馆日、季节分界、城际交通。
   单个景点的开放时间与票价一律以各 parts 文件里的 access 字段为准，
   这里只做跨景点的汇总与排序。 */
(function () {
  'use strict';

  /* 本页所有实时信息（开放时间、票价、预约规则、活动档期）的联网核实日期。
     各 parts 文件的景点级数据核实于 2026-09-13 至 2026-09-14，与此一致。 */
  var VERIFIED = '2026-09-15';

  /* 顶部信息条只保留两条：季节口径与核实日期。
     日期属于读者自己的行程，子地区与景点数量在页面别处已有，不在这里重复。 */
  var META = [
    ['季节参考', '秋色与旺季：九月下旬至十月下旬'],
    ['核实日期', VERIFIED]
  ];

  /* ---------- 总览：这个地域真正的执行约束，按重要性排序 ---------- */
  var OVERVIEW = [

    /* 第一块放预约。这一区与 DC 的区别在于：DC 的票大多免费但需定时票，
       而这一区是「贵 + 少 + 放票规律各不相同」，且有三四项的提前期以月计。
       排在最前是因为它是唯一一个「出发前没做就无法补救」的约束。 */
    '<details class="callout warn" open><summary class="title">🎟️ 头号门槛：预约制。有三项以「月」为单位提前，错过窗口现场无法补救</summary>',
    '<p>这一区绝大多数主力景点都实行<strong>日期 + 时段绑定的定时票</strong>，' +
    '而且放票规律彼此不同。下面按「必须提前多久」分三层，完整清单见<a href="#appendix">附录 C</a>。' +
    '以下规则核实于 <strong>' + VERIFIED + '</strong>。</p>',

    '<p><strong>第一层：提前数月，且有固定放票时刻——这三项决定行程能不能成立。</strong></p><ul>',
    '<li><strong>Statue of Liberty 皇冠票（Crown Reserve）</strong>是全区最难拿的一张票。' +
    '放票规律是<strong>每月 1 日放出六个月后整月的票</strong>，即十月的皇冠票在当年 4 月 1 日放出，' +
    '按 ET 午夜开闸。每日名额只有几百人，秋季日期通常在<strong>提前 4–8 周</strong>就售罄，' +
    '热门周末更早。<strong>没有当日票、没有候补、没有 standby</strong>，且票面记名不可转让。' +
    '皇冠段是 167 级螺旋梯、无电梯。票价 Crown Reserve 成人 $26.30、62 岁以上 $23.30、4–12 岁 $17.30。' +
    '唯一合法渠道是 <a href="https://www.statuecitycruises.com/" target="_blank" rel="noopener">Statue City Cruises</a>' +
    '（NPS 明示这是<strong>唯一</strong>获授权的渡轮与售票商），电话 <strong>877-523-9849</strong>。' +
    'NPS 特别警告 Battery 一带有大量第三方票贩，价格更高且<strong>船根本不靠岛</strong>。</li>',
    '<li><strong>Ellis Island 不需要单独预约</strong>——它包含在同一张渡轮通票里，' +
    '这是最容易被攻略写错的一条。真正要提前的只是渡轮班次本身，秋季提前几天到一周足够；' +
    '基座（Pedestal）票是中间档，秋季提前 1–2 周通常还有。' +
    '换句话说，<strong>只有皇冠票需要按月计划，两岛本身不需要</strong>。</li>',
    '<li><strong>9/11 Memorial Museum</strong> 的票最多可提前 <strong>6 个月</strong>购买，' +
    '票价 $24–$36，<strong>必须提前买定时票</strong>。另有一条容易错过的免费通道：' +
    '<strong>周一 17:30–19:00 免费入场，票在每周一 07:00 ET 上线</strong>，先到先得、每人限 4 张，' +
    '数量很少。博物馆本体周三至周一开放（外加部分周二）09:00–19:00，' +
    '<strong>最后入场 17:30</strong>；露天的纪念水池每天 08:00–20:00 且完全免费，两者不要混为一谈。' +
    '电话 <strong>212-312-8800</strong>。</li>',
    '</ul>',

    '<p><strong>第二层：提前数周，主要是为了拿到日落时段。</strong>' +
    '四座观景台的门票本身不难买，难的是<strong>日落前后那两三个时段</strong>——' +
    '这是全区价格弹性最大的一类票，越晚买越贵。</p><ul>',
    '<li><strong>Empire State Building</strong>：官方原文「All visits require a timed reservation」，' +
    '即<strong>一律需要定时预约</strong>。12 W 34th Street 的售票处可现场买，但官方自己写明' +
    '「strongly recommended to book online in advance」。官方给出的人流规律很有用：' +
    '<strong>最挤的是开门后两小时与日落后一小时</strong>，最空的是 <strong>12:00–14:00</strong>。</li>',
    '<li><strong>SUMMIT One Vanderbilt</strong>：<strong>逢周二闭馆</strong>。' +
    '这是本轮核实中改掉的一条——网上流传的「Open All Week Long」口径已经不成立，' +
    '按周二闭馆来排。日落时段常在<strong>提前数周</strong>售罄。</li>',
    '<li><strong>Edge at Hudson Yards</strong>：定时票。' +
    '官方 <strong>Advance Saver</strong> 档明示<strong>提前至少 14 天购买可省最多 35%</strong>，' +
    '这是全区最明确的一条「早买省钱」规则。当日票只在 Level 4 的 Guest Services 柜台售卖，' +
    '官方明示<strong>周末与旺季不保证有</strong>。</li>',
    '<li><strong>Top of the Rock</strong>：定时票，起价 $42，' +
    '每日 08:00–24:00、<strong>最后入场 23:10</strong>，是四座里营业时间最长的一座，' +
    '因此也最容易用「非日落时段」绕开抢票——深夜场通常随时有票。</li>',
    '</ul>',

    '<p><strong>第三层：只能靠场次，不靠提前期。</strong></p><ul>',
    '<li><strong>Tenement Museum</strong> 是本区机制最特殊的一家：' +
    '<strong>只能跟随教育员带领的导览进入，没有自助参观这个选项</strong>。' +
    '票价 $30，线上与电话另收 <strong>$3/张</strong>手续费。' +
    '关键在于它<strong>只提前 2–3 个月放出部分场次，其余名额每周四补放</strong>——' +
    '所以看到「Sold Out」不等于没戏，盯周四。现场 Museum Shop 与 Visitor Center 也按先到先得卖余票。' +
    '电话 <strong>877-975-3786</strong>。</li>',
    '<li><strong>Boston 的两处 Freedom Trail 主力反而不需要预约，这与多数人的预期相反。</strong>' +
    '<strong>Paul Revere House</strong> 官方原文「Aside from groups, no advanced tickets or reservations are required」，' +
    '即散客<strong>不需预约</strong>，现场售票窗口买即可（10 人以上团体必须预约）。' +
    '门票成人 $6、老年与大学生 $5.50、5–17 岁 $1，现金优先、刷卡需满 $10。' +
    '开放期 <strong>4 月 15 日–10 月 31 日每日 10:00–17:15</strong>，电话 <strong>617-523-2338</strong>。' +
    '<strong>Old State House</strong> 与 Old South Meeting House 同属 Revolutionary Spaces，' +
    '一张联票 $18 / $16 / $10（5 岁以下免费），散客同样无需预约，10 人以上团体需<strong>提前至少三周</strong>。' +
    '电话 <strong>617-720-1713</strong>。' +
    '<strong>但这家的开放时间存在官方页面互相矛盾</strong>：Museum Admission 页写' +
    '「open seven days per week from 10:00 AM to 6:00 PM」，' +
    'Visit 与 Know Before You Go 两页却写「10 AM to 5 PM」。' +
    '两种口径都照录在此，不替读者选一个——<strong>按 17:00 打算、按 18:00 期待</strong>，' +
    '想压到闭馆前请先打电话确认当日。</li>',
    '<li><strong>Salem 十月各馆</strong>见下方专门一块。简言之：' +
    'House of the Seven Gables 与 The Witch House 走定时票且十月常在当日售罄，' +
    'Peabody Essex Museum 则是<strong>周二、周三连闭两天</strong>，这比抢票更容易毁掉一天。</li>',
    '</ul>',
    '<p class="muted">未能从官方渠道确认的项目，逐条列在<a href="#appendix">附录 D</a> 并附官方电话，' +
    '本页不做推测性填空。</p></details>',

    /* 第二块：闭馆日。这一区博物馆密度极高，而闭馆日不像 DC 那样按城市成片，
       是按「星期」成片——周二与周三各毁掉一批完全不同的馆，所以必须做成交叉表。 */
    '<details class="callout warn" open><summary class="title">🚪 闭馆日会成片废掉一整天：周二最凶，周三带走 The Met</summary>',
    '<p>这一区的景点密度高到几乎不用规划路线，真正决定哪天去哪儿的是闭馆日。' +
    '和按城市分裂的 DC 不同，<strong>这一区是按星期成片倒下，而且周二与周三倒下的是完全不同的两批馆</strong>。' +
    '完整交叉表见<a href="#appendix">附录 B</a>，这里只讲结论。</p>',

    '<p><strong>周三：The Met 闭馆——这是全区最贵的一条闭馆日。</strong>' +
    'metmuseum.org 官方原文为「Sunday–Tuesday and Thursday: 10 am–5 pm；Friday and Saturday: 10 am–9 pm；' +
    '<strong>Closed Wednesday</strong>」，全年适用，不是季节性安排。' +
    '同一天倒下的还有 <strong>Peabody Essex Museum</strong>（Salem 的头号室内馆）与 <strong>Dia Beacon</strong>。' +
    '所以<strong>周三适合给露天与街区题材</strong>：Central Park、Brooklyn Bridge、High Line、' +
    'Freedom Trail 的户外段、Hudson Valley 的步道。</p>',

    '<p><strong>周二：全区最差的一天，六七家主力同时关门。</strong>' +
    'Boston 的 <strong>Museum of Fine Arts</strong> 与 <strong>Isabella Stewart Gardner Museum</strong> 双双闭馆——' +
    '这两家就是 Boston 室内馆的全部上限；<strong>Peabody Essex Museum</strong> 周二也关（它周二周三连关两天）；' +
    '纽约这边 <strong>Whitney Museum</strong>、<strong>SUMMIT One Vanderbilt</strong>、' +
    '<strong>Brooklyn Museum</strong>、<strong>New York Transit Museum</strong> 全部关闭；' +
    'Hudson Valley 的 <strong>Storm King Art Center</strong> 闭园、<strong>Dia Beacon</strong> 闭馆。' +
    '<strong>9/11 Memorial Museum 只在「部分周二」开放</strong>，不能默认它开。' +
    '周二的可行解是：Freedom Trail 户外段、Manhattan 的观景台（Summit 除外）、' +
    'Central Park 与 The Met（周二开到 17:00）。</p>',

    '<p><strong>周一：Brooklyn 整体关门。</strong>' +
    'Brooklyn Museum、New York Transit Museum、Brooklyn Botanic Garden 三家同时闭馆，' +
    'Brooklyn 子地区周一只剩桥、Promenade、DUMBO 街景与 Coney Island 这类露天题材。' +
    '<strong>Broadway 绝大多数剧院周一暗场</strong>，想看演出不要排周一。' +
    '反过来周一有两个好处：Dia Beacon 与 Storm King 都开（两家都是 Fri/Wed–Mon 制），' +
    'MFA 与 Gardner 也都开。</p>',

    '<p><strong>周四有一个孤立的坑</strong>：Dia Beacon 周二、周三、周四连闭三天，' +
    '它的开放窗口只有<strong>周五至周一 10:00–17:00</strong>。想把 Dia Beacon 与 Storm King 排在同一天，' +
    '可行的只有<strong>周五、周六、周日、周一</strong>四天。</p>',

    '<p><strong>周五与周六是延长开放日，价值被低估。</strong>' +
    'The Met 周五周六开到 <strong>21:00</strong>，MoMA 周五开到 <strong>20:30</strong>。' +
    '十月下旬日落已提前到 18:05 前后，所以<strong>这两天可以先拍日落、再进馆看三四个小时</strong>，' +
    '是全周唯一能把室外与室内叠在同一天的排法。</p></details>',

    /* 第三块：Salem 的十月。这一块的年份敏感度最高——2026 年市政取消了摆渡车，
       而 hauntedhappenings.org 的交通页仍在描述旧的摆渡方案，属于官方渠道互相矛盾，
       按项目既定做法两种口径都写出来。 */
    '<details class="callout warn" open><summary class="title">🎃 Salem 的十月是另一种状态：2026 年市政取消了全部摆渡车</summary>',
    '<p>Salem 平日是个安静的小城，<strong>但整个十月它是全美人流密度最高的小镇之一</strong>。' +
    'Haunted Happenings 活动贯穿 10 月 1–31 日全月，周末与万圣节前后的市中心接近饱和。' +
    '以下为 <strong>2026 年</strong>的安排，核实于 <strong>' + VERIFIED + '</strong>，' +
    '来源为 salemma.gov 的 October Parking &amp; Transportation 页与市政新闻稿。' +
    '<strong>这类逐年变动的安排，出行前必须自行复查。</strong></p>',

    '<p><strong>1. 2026 年最大的变化：市政摆渡车取消了。</strong>' +
    'salemma.gov 原文写得非常直白：「<strong>NEW FOR 2026, there will be no shuttle service provided by the City.</strong>' +
    'The parking lot at 108 Jefferson Avenue will be available for free parking on October weekends and ' +
    'Indigenous Peoples\u2019 Day. Spaces are limited, and <strong>there will be no shuttle provided</strong> ' +
    'between this lot and the downtown.」' +
    '也就是说：<strong>108 Jefferson Avenue 十月周末与 Indigenous Peoples\u2019 Day 免费停车，但车位有限，且没有车把人送进市中心。</strong></p>',

    '<p><strong>这里有一处官方渠道互相矛盾，照实写出。</strong>' +
    'hauntedhappenings.org 的 Transportation 页<strong>至今仍在描述旧的摆渡方案</strong>' +
    '（「Park at Salem State University, Salem High School, or Salem Hospital and catch a ride downtown. ' +
    'Shuttles run weekends in October」），2025 年的市政新闻稿也仍在引导访客' +
    '「drive to a free satellite parking lot and ride the free shuttle」。' +
    '<strong>市政官网的 2026 年口径与活动方官网的口径不一致</strong>，两者都列在此，' +
    '不替读者选一个——但<strong>市政官网是停车与交通的权威来源，且明确标注了「NEW FOR 2026」</strong>。' +
    '出行前请以 salemma.gov 为准，或致电 Salem 市政停车部门确认当年是否恢复摆渡。</p>',

    '<p><strong>2. 十月居民专用停车从 9 月 15 日就开始了。</strong>' +
    '官方原文「Permits are available to Salem residents on these streets from September 15th - November 1st」，' +
    '<strong>2026 年适用期为 9 月 15 日至 11 月 1 日</strong>。' +
    '这意味着市中心周边成片街道在这段时间只许持证居民停车，<strong>九月下旬来也已经受限</strong>，' +
    '不是只有十月才紧。</p>',

    '<p><strong>3. 加价是制度性的，不是临时的。</strong>' +
    '官方原文「Parking rates at the City garages, lots, and on-street meters are subject to change on ' +
    'October weekends and holidays. The City may choose to implement <strong>flat fees</strong> as opposed to ' +
    'regular hourly rates」——即十月周末与假日，市属车库、停车场与路边表位<strong>可能改按一次性平价计费</strong>，' +
    '不再按小时。具体金额官方不预先公布，属于本页<strong>未能从官方渠道确认</strong>的项目之一。</p>',

    '<p><strong>4. 交通管制：万圣节当天最晚中午就开始封路。</strong>' +
    '市政口径是 <strong>10 月 31 日的市中心封路「starting no later than 12:00 noon」</strong>，' +
    '且明示<strong>视人流与公共安全可能提前</strong>；十月全月都会有分散的封路。' +
    '安保措施包括硬质路障、大量便衣与制服警力、武器禁令、临时摄像头与反无人机措施。' +
    '<strong>2026 年的 Haunted Happenings Grand Parade 为 10 月 1 日 18:30–20:00</strong>，' +
    '当晚市中心一带同样有封路。实时封路以 <strong>My Salem MA</strong> 或 <strong>Destination Salem</strong> ' +
    'App 推送为准。</p>',

    '<p><strong>5. 替代方案：十月不要开车进 Salem 市中心。</strong>' +
    '市政原文就是这句——「Visitors to Salem in October should not plan to drive into downtown Salem, ' +
    'especially on weekends」。可行的三条路：</p><ul>',
    '<li><strong>MBTA 通勤铁路</strong>（Newburyport / Rockport 线）：从 Boston North Station 到 Salem 约 <strong>30 分钟</strong>，' +
    '车站在 252 Bridge St；从 Beverly 站过来只要约 5 分钟。电话 <strong>800-392-6100</strong>。' +
    '这是十月最稳的进城方式。</li>',
    '<li><strong>Salem Ferry</strong>：Boston 的 Long Wharf 到 Salem 的 Blaney Street（10 Blaney St），' +
    '电话 <strong>978-741-0220</strong>。<strong>注意这是季节性航线，十月末的收班日期需自行核实</strong>。</li>',
    '<li><strong>停远一点再坐火车</strong>：活动方自己的建议是「park at a nearby station and take the train downtown」，' +
    '在摆渡车取消之后，这条比 108 Jefferson Avenue 那个无接驳的免费场更实用。</li>',
    '</ul>',

    '<p><strong>6. 什么时候来能避开。</strong>十月的<strong>工作日上午</strong>与整个<strong>九月下旬</strong>' +
    '是 Salem 唯一接近常态的窗口。若只想看 House of the Seven Gables、The Witch House、' +
    'Salem Maritime NHS 与 Old Burying Point 这几处实体史迹而不在意节庆气氛，' +
    '<strong>九月下旬来体验明显更好</strong>：同样的开放时间、没有限流与加价、' +
    '而且 Peabody Essex Museum 的周二周三闭馆是全年恒定的，与十月无关。' +
    '反过来，想要的正是那个气氛的话，代价就是上面这五条，得认。</p></details>',

    /* 第四块：秋色。这一区横跨海岸低地与两段高地，峰期差两到三周，
       是「同一个季节里去哪儿」的唯一决定因素。写成季节区间 + 示例日期，
       并且必须说清这些预报是纬度/海拔模型而非实测，否则读者会当成承诺。 */
    '<details class="callout tip"><summary class="title">🍁 秋色分两段到达：高地九月末起，沿海低地要等到十月中下旬</summary>',
    '<p>这一区的秋色不是一个日期，而是<strong>一条从西北高地向东南沿海推进两三周的锋线</strong>。' +
    '搞错这件事的代价很具体：同一周里 Catskills 的山脊可能已经落叶，而 Boston 的行道树还是绿的。' +
    '按海拔与纬度分三段看。</p>',

    '<p><strong>第一段：高海拔的 Catskills 与 Berkshires，九月末至十月上旬。</strong>' +
    'New York 州的模型口径是全州典型峰期约 10 月 4 日，' +
    '而<strong>3,750 英尺左右的山脊与隘口约在 9 月 27 日</strong>；' +
    'Massachusetts 的 Berkshire County 约为 <strong>10 月 4–15 日</strong>，' +
    'Mount Greylock（3,493 英尺）更早。' +
    '一条可以直接套用的换算：<strong>每升高 1,000 英尺，峰期提前约 3.5 天</strong>。' +
    '实用推论是——<strong>低处错过了可以往高处开，高处错过了就只能往低处走</strong>。</p>',

    '<p><strong>第二段：Hudson Valley 河谷本体，十月中旬。</strong>' +
    '这一段是本区最有价值的秋色窗口，因为它<strong>橡树占比高，转色晚而且持续久</strong>。' +
    '官方与模型口径一致指出 <strong>Hudson Valley 的颜色会一直延续到十月下旬</strong>。' +
    '以 <strong>Bear Mountain 的 Perkins Memorial Tower</strong>（1,299 英尺）为例，模型给出的峰期约 10 月 12 日，' +
    '而其橡树主导的坡面「color holds here into late October」。' +
    'Storm King、Dia Beacon、Olana、Sleepy Hollow 一带都属于这一段。</p>',

    '<p><strong>第三段：Boston、Salem 与沿海低地，十月中下旬至十一月初。</strong>' +
    'Boston Globe 于 <strong>2026 年 9 月 4 日</strong>刊出的当年展望写得很清楚：' +
    '「By mid- to late October, the colorful canopy reaches Boston and much of Massachusetts. ' +
    'The more southern parts of New England and coastal areas are usually the last to peak, ' +
    'with some locations holding onto color into early November.」' +
    '两套模型对 Boston 的估计分别是 <strong>10 月 10–19 日</strong>与<strong>10 月 14–19 日</strong>，' +
    'Salem 所在的 Essex County 约 <strong>10 月 9–17 日</strong>。' +
    '这一带<strong>由橡树与山核桃主导</strong>，所以颜色偏深红、铜红与褐金，' +
    '不是明信片上那种北方糖枫的明黄——期待值要照此调整。</p>',

    '<p><strong>两个示例日期，用来校准取舍：</strong>' +
    '以 <strong>10 月 10 日</strong>为例，此时高地（Catskills 山脊、Berkshires）大概率在峰期或刚过，' +
    'Hudson Valley 河谷接近峰期，而 Boston 与沿海仍在转色早期——' +
    '这一周的重心应该放在西边与高处。' +
    '以 <strong>10 月 22 日</strong>为例，情况正好翻转：高地多半已落叶，' +
    'Hudson Valley 的橡树坡面仍然成立，Boston 与 Salem 则在峰期或近峰——' +
    '这一周的重心该放在东边与低处。</p>',

    '<p><strong>2026 年有一条利好，但也只是利好。</strong>' +
    '上述 Boston Globe 报道指出当年新英格兰的干旱已明显缓解，' +
    '并引述预报者称摆脱干旱的区域（Green Mountains、Berkshires、康涅狄格东北部）' +
    '「be especially good destinations for leaf peepers」。' +
    '同一篇也点明最大的变数是<strong>九月末到十月初的天气</strong>。</p>',

    '<p class="muted"><strong>重要限定：上面这些峰期都是纬度与海拔模型的推算，不是当年的实测。</strong>' +
    '模型页面自己标注为「low confidence. Long range. Treat as a planning estimate only.」，' +
    '一次早霜或一场干旱可以整体挪动数天。' +
    '出行前请以 <a href="https://www.mass.gov/topics/fall-foliage" target="_blank" rel="noopener">Massachusetts</a> 与 ' +
    '<a href="https://www.iloveny.com/travel-tools/fall-foliage-report/" target="_blank" rel="noopener">I LOVE NY 秋色周报</a> ' +
    '的当周实测为准。以上核实于 ' + VERIFIED + '。</p></details>',

    /* 第五块：交通。三地相距 190 英里上下，城际方式的取舍与市内通票的值不值，
       是这一区花钱最容易出错的两处，所以放在一起讲。 */
    '<details class="callout info"><summary class="title">🚆 交通：城际坐火车，市内刷 OMNY，自驾只在 Hudson Valley 才划算</summary>',
    '<p>这一区的三个落点（Salem/Boston、Hudson Valley、New York City）之间的取舍相当清晰，' +
    '因为它们对车的需求完全不同。核实于 ' + VERIFIED + '。</p>',

    '<p><strong>1. Boston ⇄ New York：火车，几乎没有悬念。</strong>' +
    '两地相距约 <strong>190 英里（306 公里）</strong>，Amtrak 每日约 18 班，' +
    '走的是 South Station ⇄ Moynihan Train Hall at Penn Station，' +
    '<strong>两端都直接落在市中心</strong>，这是它压倒自驾与飞机的根本原因。' +
    '<strong>Acela 约 3 小时 36 分至 3 小时 55 分；Northeast Regional 约 4 小时至 4 小时 30 分。</strong>' +
    '票价是浮动的：Northeast Regional 的 Value 档最低约 <strong>$22–$29</strong> 起，' +
    '随座位售出逐级涨到 <strong>$114</strong> 以上；Acela 只有商务舱与头等，' +
    '商务舱常见起价 <strong>$75–$139</strong>。' +
    '<strong>提前订与临期订在这条线上的差价约为每趟 $70–$100</strong>，' +
    '而 Acela 比 Regional 只快 15–30 分钟——' +
    '结论是<strong>提前订 Northeast Regional，不要临期买 Acela</strong>。' +
    '<span class="muted">票价与时刻为指示性区间，非官方发布；请以 ' +
    '<a href="https://www.amtrak.com/" target="_blank" rel="noopener">amtrak.com</a> 当日查询为准，' +
    '电话 1-800-872-7245（1-800-USA-RAIL）。</span></p>',

    '<p><strong>2. 城际巴士：便宜，但要把时间成本算进去。</strong>' +
    '同一走廊有多家巴士运营商，票价通常明显低于火车，代价是' +
    '<strong>耗时更长且受 I-95 与进出纽约隧道的拥堵影响</strong>，' +
    '而火车基本不受路面影响。若行程里有任何一段是「必须在某个钟点到场」' +
    '（定时票、导览团、演出），<strong>不要把巴士排在它前面</strong>。' +
    '<strong>各家运营商的具体班次与票价未在本轮从官方渠道逐一核实</strong>，' +
    '请自行查询各承运人官网。</p>',

    '<p><strong>3. 自驾：只在 Hudson Valley 段是净收益，在两座城市里是净负担。</strong>' +
    'Hudson Valley 与 Catskills 的点位彼此相距数十英里、公共交通覆盖差，' +
    'Olana、Kaaterskill Falls、Minnewaska、Storm King、Bear Mountain 的 Perkins Memorial Drive ' +
    '这类地方<strong>没有车基本无法串起来</strong>——这一段该租车。' +
    '反过来，<strong>Manhattan 与 Boston 市区的停车成本与找位时间足以吃掉半天</strong>，' +
    '且 Salem 十月的市中心已被明文劝阻开车进入（见上一块）。' +
    '比较务实的组合是：<strong>城市段不租车，只在进 Hudson Valley 的那几天租，' +
    '还车之后再进纽约市区。</strong>' +
    '<strong>本轮未从官方渠道核实各停车场的具体费率</strong>，' +
    '停车价格波动大，请按各设施当日公示为准。</p>',

    '<p><strong>4. 纽约市内：刷 OMNY，2026 年起 MetroCard 已经退场。</strong>' +
    'MTA 官方口径：地铁与本地公交单程 <strong>$3</strong>，快线公交 <strong>$7.25</strong>。' +
    '<strong>OMNY 的 7 日封顶是这一区最实用的一条省钱规则</strong>：' +
    '用同一张卡或同一台设备，<strong>累计 12 次付费乘车之后，该 7 日周期内其余乘车全部免费，' +
    '上限 $35</strong>（含快线公交的上限为 $67，2026 年 1 月起生效）。' +
    '无需注册、无需 App，任意一天开始计算。' +
    '<strong>关键的 2026 年变化：自 2026 年 1 月 1 日起，MetroCard 已不能再购买或充值</strong>，' +
    '旧卡余额需到 Customer Service Center 转入 OMNY 卡。' +
    '现金在公交上的受理也将于 2026 年内终止，具体日期官方尚未公布。</p>',

    '<p><strong>5. CityPASS 一类通票：只有在真的会去齐才划算。</strong>' +
    'citypass.com 官方当前定价：<strong>New York CityPASS 成人（18+）$149</strong>，含 5 个景点、9 天有效，' +
    '其中 <strong>Empire State Building 与 American Museum of Natural History 是强制包含项</strong>，' +
    '另从名单中自选 3 个；<strong>C3 为成人（13+）$109</strong>，任选 3 个。' +
    '判断方法很简单：<strong>只要不打算去 AMNH，CityPASS 的账就算不平</strong>——' +
    '强制项付了却不用，省下的差价直接被抵掉，这种情况应该看 C3 或干脆单买。' +
    '反过来，第一次来且确实会去齐五个的话，它的真实价值主要不在省钱，' +
    '而在<strong>把五处的定时票收在一个界面里预约</strong>。' +
    '<span class="muted">第三方比价文章引用的 $164 / $114 与官网当前挂出的 $149 / $109 不一致，' +
    '此处采用官网口径；票价请出行前复查。</span></p></details>',

    /* 第六块：官方口径互相矛盾的汇总。这是本轮逐景点核实里反复出现的一类问题，
       按项目既定做法两种口径都写、不替读者选一个；集中列出是因为
       它们分散在各卡片里时容易被当成笔误，集中起来才看得出这是本区的系统性特征。 */
    '<details class="callout info"><summary class="title">📋 有八处景点的官方页面自相矛盾，两种口径都要带上</summary>',
    '<p>这一区在逐景点核实中反复撞到同一类问题：<strong>同一家机构的不同官方页面给出不同的开放时间</strong>。' +
    '按本手册的既定做法，<strong>两种口径都照录、不替读者选一个</strong>，' +
    '但集中列在这里，是因为它们分散在各景点卡片里时容易被当成笔误，' +
    '而实际上这是本区的系统性特征，值得进场前就知道。' +
    '各条的完整原文见对应景点卡片的 <em>access.hours</em>。核实于 2026-09-13 至 ' + VERIFIED + '。</p><ul>',
    '<li><strong>Revolutionary Spaces（Old State House / Old South Meeting House）</strong>：' +
    'Museum Admission 页写 10:00–18:00，Visit 与 Know Before You Go 两页写 10:00–17:00。' +
    '差整整一小时，且直接决定能不能压在闭馆前进场。</li>',
    '<li><strong>The Met Cloisters</strong>：metmuseum.org 的 Cloisters 页与多家目录站为' +
    '「Thursday–Tuesday 10:00–17:00，Closed Wednesday」，' +
    '而另一套广泛流传的口径是「Thursday–Monday 10:00–16:30，周二与周三均闭馆」。' +
    '<strong>差异落在周二是否开放与闭馆是 17:00 还是 16:30</strong>，专程前往请先电话确认。</li>',
    '<li><strong>Solomon R. Guggenheim Museum</strong>：本区最需要自行复核的一项，两种口径直接矛盾。' +
    '较新的一套是每日 10:30–17:30、全周无休。</li>',
    '<li><strong>Edge at Hudson Yards</strong>：官方给的是「常规时间」而非逐日表，' +
    '且<strong>三处官方口径互不一致</strong>，卡片内三种全列。</li>',
    '<li><strong>Prospect Park</strong>：开园时刻有两个官方口径长期打架（NYC 311 知识库与公园方自己的页面），' +
    '2026-09-14 复查时两边一字未改，分歧仍在。</li>',
    '<li><strong>Gantry Plaza State Park</strong>：parks.ny.gov <strong>在同一个页面上</strong>' +
    '给出了两个互相矛盾的闭园时刻。该点位的全部价值都在蓝调时段，所以这个矛盾直接影响可行性。</li>',
    '<li><strong>Columbia University</strong>：Public Safety 的校园出入页与其他官方页面口径冲突，' +
    '当前为限制性出入等级，<strong>校园是否对公众开放取决于当日政策</strong>。</li>',
    '<li><strong>USS Constitution</strong>：海军官网与 NPS 的开放时间口径不一致，卡片内两者并列。</li>',
    '</ul>',
    '<p>另有两项属于<strong>本轮未能从官方渠道核实</strong>，而非口径矛盾：' +
    '<strong>St. Patrick\u2019s Cathedral</strong> 的访客页在核实当天被 Cloudflare 反爬拦截，' +
    '开放时间只能取多个第三方的一致口径，未能从官网原文复核；' +
    '<strong>West Point</strong> 的每日导览发车时刻表官网不以表格形式公布，只能在预订流程里看到。' +
    '这两项与其余未核实项一并列在<a href="#appendix">附录 D</a>。</p></details>'
  ].join('');

  /* ---------- 附录 ---------- */

  /* 表格渲染：与 dc/intro.js 完全一致的实现，首列加粗。
     外层 tbl-scroll 由本函数直接产出，页面脚本不会重复包裹。 */
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

  /* 日出日落：按 NOAA 太阳位置算法自行计算（大气折射取 90.833° 天顶角），
     取秋季三个示例日期。三地纬度接近，差异主要来自经度：
     Salem 与 Boston 几乎同步，New York City 晚约 12–13 分钟。 */
  var SUN = [
    ['Salem, MA', '06:34 / 91°', '18:35 / 269°', '06:51 / 98°', '18:09 / 261°', '07:05 / 105°', '17:50 / 255°'],
    ['Boston, MA', '06:35 / 91°', '18:36 / 269°', '06:52 / 98°', '18:10 / 261°', '07:06 / 104°', '17:51 / 255°'],
    ['New York City', '06:47 / 91°', '18:48 / 269°', '07:02 / 98°', '18:23 / 261°', '07:15 / 104°', '18:05 / 256°']
  ];

  /* 闭馆日交叉表：按星期而非按城市组织，因为这一区是按星期成片倒下。
     各馆时刻以对应 parts 文件的 access.hours 为准，此处只做汇总。 */
  var CLOSED = [
    ['周一', 'Brooklyn Museum、New York Transit Museum、Brooklyn Botanic Garden<span class="muted">（Brooklyn 三馆同关）</span>',
     'Broadway 绝大多数剧院暗场',
     'Brooklyn 只剩露天题材；但 Dia Beacon、Storm King、MFA、Gardner、PEM 这天全开'],
    ['周二', '<b>全区最差的一天</b>：MFA、Isabella Stewart Gardner、Peabody Essex Museum、Whitney、SUMMIT One Vanderbilt、Brooklyn Museum、New York Transit Museum、Storm King、Dia Beacon',
     '9/11 Memorial Museum <b>仅「部分周二」开放</b>，不可默认',
     '改走 Freedom Trail 户外段、Central Park、The Met（开到 17:00）、除 SUMMIT 外的观景台'],
    ['周三', '<b>The Met 闭馆</b><span class="muted">（全年适用）</span>、The Met Cloisters、Peabody Essex Museum、Dia Beacon',
     '—',
     '给露天与街区：Central Park、Brooklyn Bridge、High Line、Hudson Valley 步道'],
    ['周四', 'Dia Beacon<span class="muted">（周二至周四连闭三天）</span>',
     '—',
     'Dia Beacon 与 Storm King 想同日完成，只有周五至周一可行'],
    ['周五', '—',
     'The Met 延长至 <b>21:00</b>；MoMA 延长至 <b>20:30</b>；Dia Beacon 开放窗口起始日',
     '<b>全周最好排的一天</b>：先拍日落再进馆，室内外可叠在同一天'],
    ['周六', '—',
     'The Met 延长至 <b>21:00</b>；十月的 Storm King 提前至 09:00 开门',
     'Salem 十月周六是全季最挤的时段，且市政停车可能改按平价计费'],
    ['周日', '—',
     'The Met 10:00–17:00；9/11 Museum 每月第一个周日 16:00–19:00 对本地居民免费',
     '各馆基本全开，是闭馆风险最低的一天']
  ];

  /* 预约窗口：按「提前多久放票」从长到短排序，这是排序依据也是行动顺序。
     不需预约的两项放在末尾，因为它们最容易被攻略误写成需要预约。 */
  var BOOK = [
    ['Statue of Liberty<span class="muted">（皇冠 Crown Reserve）</span>',
     '<b>每月 1 日放出六个月后整月的票</b>，ET 午夜开闸',
     '秋季日期通常提前 <b>4–8 周</b>售罄；每日名额仅数百人；<b>无当日票、无候补</b>；记名不可转让。' +
     '成人 $26.30 / 62+ $23.30 / 4–12 岁 $17.30。' +
     '<a href="https://www.statuecitycruises.com/" target="_blank" rel="noopener">statuecitycruises.com</a>' +
     '（NPS 明示为唯一授权售票商），电话 <b>877-523-9849</b>'],
    ['9/11 Memorial Museum',
     '最多提前 <b>6 个月</b>',
     '$24–$36，<b>必须提前买定时票</b>。周三至周一（外加部分周二）09:00–19:00，<b>最后入场 17:30</b>。' +
     '<b>周一 17:30–19:00 免费场的票在每周一 07:00 ET 上线</b>，先到先得、每人限 4 张。' +
     '露天纪念水池每日 08:00–20:00 免费，与博物馆本体是两回事。' +
     '<a href="https://www.911memorial.org/visit" target="_blank" rel="noopener">911memorial.org</a>，电话 <b>212-312-8800</b>'],
    ['Tenement Museum',
     '<b>只提前 2–3 个月放出部分场次；其余名额每周四补放</b>',
     '<b>只能跟随教育员导览进入，没有自助参观</b>。$30，线上与电话另收 $3/张手续费。' +
     '看到「Sold Out」不等于没戏，盯周四。现场 Museum Shop 与 Visitor Center 按先到先得卖余票。' +
     '<a href="https://www.tenement.org/tours/" target="_blank" rel="noopener">tenement.org/tours</a>，电话 <b>877-975-3786</b>'],
    ['Edge at Hudson Yards',
     '<b>提前 ≥14 天</b>可享 Advance Saver，省最多 <b>35%</b>',
     '定时票。日落时段最先售罄且越晚越贵。当日票只在 Level 4 的 Guest Services 售卖，' +
     '官方明示<b>周末与旺季不保证有</b>。<b>官方三处口径对开放时间互不一致</b>，见景点卡片'],
    ['SUMMIT One Vanderbilt',
     '日落时段常提前 <b>数周</b>售罄',
     '<b>逢周二闭馆</b>——网上流传的「Open All Week Long」口径已不成立，按周二闭馆排'],
    ['Empire State Building',
     '定时预约为<b>强制</b>，时段越接近日落越早满',
     '官方原文「All visits require a timed reservation」。12 W 34th Street 售票处可现场买，' +
     '但官方自己写「strongly recommended to book online in advance」。' +
     '官方人流口径：<b>最挤是开门后两小时与日落后一小时，最空是 12:00–14:00</b>'],
    ['Top of the Rock',
     '提前几天足够；<b>深夜场通常随时有</b>',
     '起价 $42。每日 08:00–24:00、<b>最后入场 23:10</b>，是四座观景台里营业最长的一座，' +
     '因此最容易用非日落时段绕开抢票'],
    ['Statue of Liberty / Ellis Island<span class="muted">（两岛一般入场）</span>',
     '提前几天至一周足够',
     '<b>Ellis Island 不需单独预约</b>，包含在同一张渡轮通票内——这是最常被写错的一条。' +
     '需要提前的只是渡轮班次；基座（Pedestal）票秋季提前 1–2 周通常仍有。' +
     'NPS 警告 Battery 一带第三方票贩价格更高且<b>船不靠岛</b>'],
    ['Old State House / Old South Meeting House',
     '<b>散客不需预约</b>；10 人以上团体需<b>提前至少三周</b>',
     '联票成人 $18 / 65+ $16 / 6–17 岁 $10 / 5 岁以下免费。' +
     '<b>开放时间官方两页矛盾：10:00–18:00 与 10:00–17:00</b>，按 17:00 打算。' +
     'Old State House 单次容量上限 30 人。电话 <b>617-720-1713</b>'],
    ['Paul Revere House',
     '<b>散客不需预约</b>；10 人以上团体必须预约，否则可能被拒',
     '官方原文「Aside from groups, no advanced tickets or reservations are required」。' +
     '成人 $6 / 老年与大学生 $5.50 / 5–17 岁 $1；现金优先，刷卡需满 $10。' +
     '<b>4 月 15 日–10 月 31 日每日 10:00–17:15</b>。电话 <b>617-523-2338</b>']
  ];

  /* 开放时间与闭馆日总表：只收各子地区的主力与「时间本身构成约束」的点位。
     「最后入场」一列凡官方未单独公布的，如实写「官方未单列」，不做推算。 */
  var HOURS = [
    ['The Met Fifth Avenue', '周日–周二、周四 10:00–17:00；周五、周六 10:00–21:00', '<b>周三</b>', '官方未单列'],
    ['The Met Cloisters', '周四–周二 10:00–17:00<span class="muted">（另一口径为周四–周一 10:00–16:30）</span>', '周三<span class="muted">（另一口径周二亦闭）</span>', '官方未单列'],
    ['American Museum of Natural History', '每日 10:00–17:30', '仅感恩节与圣诞节', '官方未单列'],
    ['The Museum of Modern Art (MoMA)', '每日 10:30–17:30；周五至 20:30', '全周无休', '官方未单列'],
    ['Solomon R. Guggenheim Museum', '每日 10:30–17:30<span class="muted">（较新口径；<b>两种官方口径矛盾</b>）</span>', '较新口径为全周无休', '官方未单列'],
    ['Whitney Museum of American Art', '周一 10:30–18:00；周三起 10:30–18:00', '<b>周二</b>', '官方未单列'],
    ['9/11 Memorial Museum', '周三–周一及部分周二 09:00–19:00', '周二<span class="muted">（部分周二开放）</span>', '<b>17:30</b>'],
    ['National September 11 Memorial<span class="muted">（露天水池）</span>', '每日 08:00–20:00，免费', '全年无休', '不设限'],
    ['Top of the Rock', '每日 08:00–24:00', '全年 365 天开放', '<b>23:10</b>'],
    ['One World Observatory', '周一–周日 09:00–21:00', '全周无休', '官方未单列'],
    ['SUMMIT One Vanderbilt', '见官方购票页营业时间表', '<b>周二</b>', '官方未单列'],
    ['Central Park', '每日 06:00–01:00，365 天', '全年无休', '不设限'],
    ['The High Line', '4 月 1 日–11 月 30 日 07:00–22:00；12 月 1 日–3 月 31 日 07:00–20:00', '全年无休', '不设限'],
    ['Brooklyn Museum', '周三–周日 11:00–18:00', '<b>周一、周二</b>', '官方未单列'],
    ['Brooklyn Botanic Garden', '十月：周二–周日 10:00–18:00', '<b>周一</b>', '官方未单列'],
    ['New York Transit Museum', '周三–周日 10:00–16:00', '<b>周一、周二</b>', '官方未单列'],
    ['Brooklyn Bridge Park', '每日 06:00–01:00', '全年无休', '不设限'],
    ['The Green-Wood Cemetery<span class="muted">（主门）</span>', '秋冬时刻表每日 08:00–17:00', '全年开放', '闭园即止'],
    ['Museum of Fine Arts, Boston', '周日、周一、周三 10:00–17:00；周四、周五延长', '<b>周二</b>', '官方未单列'],
    ['Isabella Stewart Gardner Museum', '周一、周三 11:00–17:00；周四起延长', '<b>周二</b>', '官方未单列'],
    ['Old State House / Old South Meeting House', '每周七天 10:00–17:00 <b>或</b> 10:00–18:00<span class="muted">（官方两页矛盾）</span>', '无固定闭馆日', '官方未单列'],
    ['Paul Revere House', '4 月 15 日–10 月 31 日每日 10:00–17:15；11 月 1 日–4 月 14 日 10:00–16:15', '一至三月的周一；感恩节、平安夜、圣诞、元旦', '闭馆即止'],
    ['Peabody Essex Museum (PEM)', '周一 10:00–17:00；周四–周日 10:00–17:00', '<b>周二、周三</b>', '官方未单列'],
    ['The House of the Seven Gables', '每日 10:00–18:00', '无每周固定闭馆日', '官方未单列'],
    ['The Witch House', '常规季 4 月 15 日–11 月 15 日每日开放', '常规季内无固定闭馆日', '官方未单列'],
    ['Storm King Art Center', '周三–周一 10:00–18:00；十月周六周日提前至 09:00', '<b>周二</b>', '<b>17:00</b>'],
    ['Dia Beacon', '周五–周一 10:00–17:00', '<b>周二、周三、周四</b>', '官方未单列'],
    ['Olana State Historic Site<span class="muted">（庭园）</span>', '每日 08:00 至日落，免费', '全年开放', '日落即止'],
    ['Sleepy Hollow Cemetery', '周一–周五 08:00–16:30；周六周日 08:30–16:30', '全年每日开放', '<b>16:30 后不得入园</b>'],
    ['Minnewaska State Park Preserve', '每日 09:00 开园；9/8–10/12 至 19:00；10/13–10/31 见官方分段表', '全年开放', '闭园即止'],
    ['Walkway Over the Hudson', '每日 07:00 开放；9/14–10/4 至 19:00；10/5 起见官方分段表', '全年开放', '闭园即止']
  ];

  /* 出发当天复查清单：按「变动可能性」分级。
     「高」的四条都属于逐年或逐月变动、且已知与网上流传口径不一致的项目。 */
  var RECHECK = [
    ['<b>Salem 十月摆渡车是否恢复</b>——市政官网 2026 年口径为「无摆渡」，活动方官网仍在描述旧摆渡方案', '<b>高</b>',
     '<a href="https://www.salemma.gov/363/October-Parking-Transportation" target="_blank" rel="noopener">salemma.gov 十月停车与交通页</a>；' +
     '实时封路看 <b>My Salem MA</b> 与 <b>Destination Salem</b> App'],
    ['<b>Salem 十月周末停车费率</b>是否改按一次性平价计费，以及金额', '<b>高</b>',
     '官方明示「subject to change」但不预先公布金额，属<b>未能从官方渠道确认</b>；' +
     '同上页面，或致电 Salem 市政停车部门'],
    ['<b>皇冠票是否还有余量</b>；若计划包含皇冠段，这是唯一无法现场补救的一项', '<b>高</b>',
     '<a href="https://www.statuecitycruises.com/" target="_blank" rel="noopener">statuecitycruises.com</a>，电话 <b>877-523-9849</b>'],
    ['<b>Revolutionary Spaces 当日闭馆时间是 17:00 还是 18:00</b>', '<b>高</b>',
     '两页官方口径矛盾。压闭馆前进场请先电话确认：<b>617-720-1713</b>'],
    ['当周秋色实测进度<span class="muted">（决定该往高处还是往低处走）</span>', '中',
     '<a href="https://www.mass.gov/topics/fall-foliage" target="_blank" rel="noopener">Massachusetts 秋色</a>、' +
     '<a href="https://www.iloveny.com/travel-tools/fall-foliage-report/" target="_blank" rel="noopener">I LOVE NY 秋色周报</a>'],
    ['9/11 Museum 的「部分周二」当周是否开放', '中',
     '<a href="https://www.911memorial.org/visit" target="_blank" rel="noopener">911memorial.org</a>，电话 <b>212-312-8800</b>'],
    ['Salem Ferry 当年的季节性收班日期', '中',
     '<b>未能从官方渠道确认十月末收班日</b>；致电 <b>978-741-0220</b>（10 Blaney St）'],
    ['West Point 导览的当日发车时刻', '中',
     '<b>官网不以表格形式公布</b>，只能在预订流程内看到；须走官方预订页确认'],
    ['St. Patrick\u2019s Cathedral 开放时间', '中',
     '<b>官网访客页在核实当天被 Cloudflare 反爬拦截，未能从官方原文复核</b>；现用口径来自多个第三方的一致说法'],
    ['Columbia University 当日是否对公众开放', '中',
     'Public Safety 校园出入等级逐日变动，且与其他官方页面口径冲突'],
    ['The Met Cloisters 周二是否开放、闭馆 17:00 还是 16:30', '中',
     '两种口径并存；专程前往前电话确认'],
    ['Guggenheim 当日开放时间', '中',
     '两种官方口径直接矛盾，卡片内两者并列'],
    ['Edge 当日开放时间', '中',
     '<b>三处官方口径互不一致</b>，以入场当日 edgenyc.com 站头显示为准'],
    ['城际巴士班次与票价', '低',
     '<b>本轮未从官方渠道逐一核实</b>；请查各承运人官网。对钟点敏感的行程建议改用 Amtrak'],
    ['Amtrak 票价与时刻', '低（但票价随售出逐级上涨）',
     '<a href="https://www.amtrak.com/" target="_blank" rel="noopener">amtrak.com</a>，电话 <b>1-800-872-7245</b>。' +
     '提前订与临期订在这条线上差约每趟 $70–$100'],
    ['CityPASS 与 C3 当前定价', '低',
     '<a href="https://www.citypass.com/new-york-comparison" target="_blank" rel="noopener">citypass.com</a>；' +
     '第三方比价文章的 $164 / $114 与官网 $149 / $109 不一致，以官网为准'],
    ['各停车场当日费率', '低',
     '<b>本轮未从官方渠道核实</b>；波动大，按各设施当日公示为准'],
    ['MTA 现金停止受理的具体日期', '低',
     '官方称 2026 年内终止但<b>尚未公布具体日期</b>。' +
     '<a href="https://www.mta.info/fares-tolls/subway-bus" target="_blank" rel="noopener">mta.info 票价页</a>']
  ];

  var APPENDIX = [
    '<h3 class="apx-h">A. 日出日落与太阳方位（示例日期，EDT）</h3>',
    '<p class="section-lead"><strong>下表三个日期是秋季的示例日期，用来校准季节性的光线条件，不是任何一次行程的日程。</strong>' +
    '格式为「时刻 / 方位角」，方位角自北顺时针。' +
    '黄金时刻约为日落前 40 分钟至日落，<strong>蓝调最佳在日落后 15–25 分钟</strong>。' +
    '三地纬度接近，差异主要来自经度：Salem 与 Boston 几乎同步，' +
    '<strong>New York City 比 Boston 晚约 12–13 分钟</strong>。' +
    '<strong>夏令时结束于 2026 年 11 月 1 日</strong>，因此九月下旬至十月下旬的整个秋季窗口都在 EDT 之内；' +
    '11 月 1 日之后日落时刻会<strong>骤然提前一小时</strong>，十一月上旬来的话须把下表全部减去一小时。</p>',
    table(['地点', '日出 9/25', '日落 9/25', '日出 10/10', '日落 10/10', '日出 10/22', '日落 10/22'], SUN),
    '<p class="section-lead"><strong>两条可以直接用的推论。</strong>' +
    '第一，日落方位从 9 月 25 日的 <strong>269°（近正西）</strong>偏到 10 月 22 日的 <strong>255°（西南偏西）</strong>，' +
    '一个月里移动约 14°——<strong>朝向正西的街道峡谷（Manhattan 的东西向街道、Boston 的 Commonwealth Avenue 轴线）' +
    '在九月下旬受光最正，十月下旬则偏到街道南侧</strong>。' +
    '第二，白昼在这一个月里缩短约 <strong>1 小时 15 分钟</strong>' +
    '（以 New York City 为例，9/25 为 12 小时 01 分，10/22 为 10 小时 50 分），' +
    '而各馆闭馆时间不变——<strong>十月下旬出馆时正好撞上黄金时段，九月下旬则要在馆外空等一小时</strong>。' +
    '这两个月需要完全不同的日程编排。</p>',
    '<p class="muted">数据按 NOAA 太阳位置算法自行计算，天顶角取 90.833°（含大气折射与日面半径）。' +
    '坐标取 Salem 42.5195, -70.8967；Boston 42.3550, -71.0656；New York City 40.7484, -73.9857。</p>',

    '<h3 class="apx-h">B. 开放时间与闭馆日总表</h3>',
    '<p class="section-lead">只收各子地区的主力景点与「时间本身构成约束」的点位，' +
    '完整口径与官方原文见各景点卡片的 <em>access.hours</em>。' +
    '<strong>「最后入场」一列凡官方未单独公布的，如实写「官方未单列」，不做推算</strong>——' +
    '这类场馆请按闭馆前 30–60 分钟自行留出余量。' +
    '带「官方两页矛盾」「另一口径」标注的行，两种说法都已列出，不替读者选一个。' +
    '核实于 2026-09-13 至 ' + VERIFIED + '。</p>',
    table(['景点', '开放时间', '闭馆日', '最后入场'], HOURS),
    '<p class="section-lead"><strong>按星期看的完整交叉表如下</strong>，' +
    '它比上表更适合决定「哪天去哪儿」：<strong>周二最凶，周三带走 The Met，周一 Brooklyn 整体关门</strong>。</p>',
    table(['星期', '完全关闭', '部分关闭 / 特殊时段', '实用建议'], CLOSED),

    '<h3 class="apx-h">C. 预约窗口清单（按提前多久放票排序）</h3>',
    '<p class="section-lead">排序即行动顺序：<strong>从上往下办，最上面那项的窗口以月计，错过无法补救</strong>。' +
    '末尾两项恰恰相反，是最常被攻略误写成「需要预约」的两处 Boston 史迹，' +
    '<strong>散客其实现场买票即可</strong>。' +
    '票价与规则核实于 ' + VERIFIED + '，<strong>逐年变动，出行前请自行复查</strong>。</p>',
    table(['项目', '提前多久 / 放票规则', '要点与官方渠道'], BOOK),

    '<h3 class="apx-h">D. 出发当天复查清单</h3>',
    '<p class="section-lead">本页实时信息核实于 <strong>' + VERIFIED + '</strong>，' +
    '各景点级数据核实于 2026-09-13 至 2026-09-14。' +
    '下表按<strong>变动可能性</strong>分级。' +
    '<strong>标「高」的四条请在出发前逐条点开或打电话确认</strong>：' +
    '前两条属于逐年变动的市政安排，第三条是唯一无法现场补救的票，' +
    '第四条是官方自相矛盾且直接影响能否进场。' +
    '凡标注「<strong>未能从官方渠道确认</strong>」的，本页不做推测性填空，只给官方电话与页面。</p>',
    table(['要查什么', '变动可能', '链接 / 电话 / 方式'], RECHECK)
  ].join('');

  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('hero-meta', META.map(function (m) {
    return '<span class="chip">' + m[0] + ' <b>' + m[1] + '</b></span>';
  }).join(''));
  fill('overview-body', OVERVIEW);
  fill('appendix-body', APPENDIX);
})();
