module.exports = {
  id: 'ys-geyser-basins',
  name: 'Yellowstone · 间歇泉盆地与湖区',
  navName: '间歇泉盆地',
  color: '#ffb340',
  lead: '全球一半以上的活间歇泉集中在 Firehole River 沿岸这 30 公里里，再往东是北美最大的高海拔湖。' +
    '题材密度是全园最高的，但这一片同时也是整本指南里季节约束最狠的一段，' +
    '<strong>「9 月下旬来」和「10 月下旬来」几乎是两趟不同的旅行</strong>：' +
    '10 月 10–11 日 Lake Yellowstone Hotel 与 Grant Village 一起关，湖区当天起没有园内住宿；' +
    '<strong>10 月 12 日 Old Faithful Inn 按特许经营商口径关门</strong>（NPS 表格写 10/18，两边不一致，见下）；' +
    '10 月 24 日 Snow Lodge 客房关，Old Faithful 从此没有过夜的地方；' +
    '<strong>10 月 31 日主环路全线对汽车关闭</strong>，11 月 1 日起只剩北门那条走廊。' +
    '摄影上还有一条更要紧的、与常识相反的结论：' +
    '<strong>本区最重要的一张照片（Grand Prismatic 的彩环）必须在正午前后拍，而且晚秋很可能整天都拍不到</strong>——' +
    '冷空气让蒸汽厚到能把整个池子盖死。这一条决定了整个子地区的时间表：' +
    '<strong>清晨拍蒸汽，正午拍颜色，两者物理上不可兼得。</strong>' +
    '另有两处必须提前知道的封闭：<strong>Biscuit Basin 自 2024 年 7 月爆炸后全域封闭至今</strong>，' +
    '<strong>Firehole Lake Drive 因路面被地热烤化，2026 年对机动车关闭</strong>，Great Fountain 只能走进去。',
  callouts: [
    {
      type: 'warn',
      title: '2026 道路与住宿关闭日历：本区最关键的一张表',
      html: '<p>道路数据取自 <a href="https://www.nps.gov/yell/planyourvisit/parkroads.htm" target="_blank" rel="noopener">NPS Park Roads</a>' +
        '（该页最后更新 <strong>2026-09-01</strong>），住宿与设施取自 ' +
        '<a href="https://www.nps.gov/yell/planyourvisit/operating-dates.htm" target="_blank" rel="noopener">NPS Operating Dates</a>' +
        '（最后更新 <strong>2026-09-03</strong>）。道路首日 08:00 通车，<strong>所列末日为当天结束通车</strong>，' +
        '所有日期都可能因降雪提前。</p>' +
        '<p><strong>先说结论：本区没有任何一段路比主环路提前关闭</strong>——' +
        '也就是说封路不是这里的风险点，<strong>住宿与补给才是</strong>。</p>' +
        '<table><thead><tr><th>路段</th><th>2026 通车区间</th><th>覆盖本区哪些点</th></tr></thead><tbody>' +
        '<tr><td>West Entrance ↔ Madison ↔ Old Faithful；Madison ↔ Norris</td><td>4/17 – <strong>10/31</strong></td>' +
        '<td>Norris、Firehole Canyon、Fountain Paint Pot、Midway、Grand Prismatic、Black Sand、Old Faithful</td></tr>' +
        '<tr><td>Canyon Village ↔ Bridge Bay；East Entrance ↔ Fishing Bridge（Sylvan Pass）</td><td>5/1 – <strong>10/31</strong></td>' +
        '<td>Fishing Bridge、Gull Point Drive</td></tr>' +
        '<tr><td>South Entrance ↔ West Thumb；West Thumb ↔ Old Faithful（Craig Pass）；West Thumb ↔ Lake Village</td>' +
        '<td>5/8 – <strong>10/31</strong></td><td>West Thumb，以及从 Old Faithful 去湖区的那条捷径</td></tr>' +
        '<tr><td>North Entrance（Gardiner）↔ Northeast Entrance（Cooke City）</td><td><strong>全年</strong></td>' +
        '<td>与本区无关，但它是 11 月之后唯一还能开车进园的路</td></tr>' +
        '<tr><td>Canyon Village ↔ Tower Fall（Dunraven）、Beartooth Hwy、Chief Joseph Byway</td><td>5/22 – <strong>10/12</strong></td>' +
        '<td>不在本区，但会影响你从北面／东北面串行程</td></tr>' +
        '</tbody></table>' +
        '<p><strong>不要沿用「主环路在 11 月第一个周一关闭」这个流传很广的说法。</strong>' +
        '2026 年 NPS 公布的日期是 <strong>10 月 31 日（周六）</strong>，' +
        '而 2026 年 11 月第一个周一是 11/2。2026 版 ' +
        '<a href="https://home.nps.gov/yell/learn/management/upload/Yellowstone-Superintendent-s-Compendium.pdf" target="_blank" rel="noopener">Superintendent\u2019s Compendium</a> ' +
        '的原文也是按日期写的：<em>「Starting November 1st until spring opening in April or May, the Grand Loop Road ' +
        'and park entrance roads are closed to wheeled motor vehicle use by the public」</em>。' +
        '<strong>所以本窗口的硬边界就是 10/31，最后一个能开车拍摄的整天。</strong></p>' +
        '<p><strong>五个入口在本窗口内的状态：北门（Gardiner）全年开放，是唯一的年度通道；' +
        '西门、南门、东门、东北门在 10/31 结束通车。</strong>' +
        '本区实际只能从西门（West Yellowstone，离 Madison 14 英里）或南门进出最顺。</p>' +
        '<p><strong>住宿：这是本区真正的执行瓶颈。</strong>园内住宿决定了你能不能拍日出——' +
        '住在西门外的 West Yellowstone，到 Old Faithful 是 <strong>30 英里／约 45–55 分钟</strong>，' +
        '到 Midway 约 26 英里／40 分钟，到 West Thumb 约 <strong>52 英里／1 小时 20 分</strong>，全程夜路、限速 45 mph、大概率遇动物。</p>' +
        '<table><thead><tr><th>设施</th><th>NPS 表格末日</th><th>Xanterra 官网（退房日）</th></tr></thead><tbody>' +
        '<tr><td><strong>Old Faithful Inn 客房</strong></td><td><strong>10/18</strong>（餐饮／礼品店 10/19）</td>' +
        '<td><strong>10/12</strong>（餐厅、Bear Paw Deli、Espresso 同为 10/12；Bear Pit Lounge 与 Mezzanine Bar 10/11）</td></tr>' +
        '<tr><td><strong>Old Faithful Snow Lodge 客房</strong></td><td><strong>10/24</strong>（Obsidian 餐厅 10/25；<strong>Geyser Grill 与礼品店 10/31</strong>）</td><td>10/25</td></tr>' +
        '<tr><td>Old Faithful Lodge Cabins</td><td>10/3（餐饮／烘焙 10/4）</td><td>10/4</td></tr>' +
        '<tr><td><strong>Lake Yellowstone Hotel 客房</strong></td><td><strong>10/10</strong>（餐厅／Deli／礼品店 10/11）</td><td>10/11</td></tr>' +
        '<tr><td>Lake Lodge Cabins</td><td>10/3（Wylie\u2019s Canteen 10/4）</td><td>10/4</td></tr>' +
        '<tr><td><strong>Grant Village 客房</strong></td><td><strong>10/10</strong>（餐厅／礼品店 10/11）</td><td>10/11</td></tr>' +
        '<tr><td>Canyon Lodge 客房</td><td>10/24（餐饮 10/25）</td><td>10/25</td></tr>' +
        '<tr><td>Mammoth Hot Springs Hotel</td><td><strong>2027/3/7</strong></td><td>2027/3/8</td></tr>' +
        '</tbody></table>' +
        '<p><strong>Old Faithful Inn 的关门日期是本区唯一一处两个官方来源打架的地方，而且差了整整六天。</strong>' +
        '其余八家住宿两边完全吻合（Xanterra 的日期永远是 NPS 末日的次日，即退房日），唯独 Inn 对不上：' +
        'Xanterra 的开关门日期页与 Inn 单页、餐饮页三处一致写 <strong>10/12</strong>，' +
        'NPS 的表格写 <strong>10/18</strong>。<strong>无法判断哪一边是过期数据，未能核实。</strong>' +
        '实务口径：<strong>10/12 之前一定进得去大堂；10/13–10/19 属于赌运气；10/19 之后一定进不去。</strong>' +
        '若行程落在 10/13 之后且那个 1904 年的大堂是你的重点，出发前直接打 <strong>307-344-7311</strong> 确认。</p>' +
        '<p><strong>三个日期节点，翻译成实际后果：</strong></p>' +
        '<ul>' +
        '<li><strong>10/10 之后</strong>：Lake Yellowstone Hotel 与 Grant Village 同日关门，' +
        '<strong>整个湖区（Fishing Bridge、Gull Point、West Thumb）再没有园内住宿</strong>。' +
        '想在湖边拍日出，只能从 Old Faithful 出发（到 West Thumb 单程 <strong>39 公里／约 1 小时</strong>，要摸黑翻海拔 8,262 英尺的 Craig Pass），' +
        '或者从 Canyon Lodge 南下</li>' +
        '<li><strong>10/24 之后</strong>：Snow Lodge 客房也关，<strong>Old Faithful 一带彻底没有过夜的地方</strong>。' +
        '10/25–10/31 这七天想拍 Upper Geyser Basin 的日出，只能住 West Yellowstone 并在 06:10 前出发（10/31 民用曙光 07:29），' +
        '或者住 Mammoth（到 Old Faithful 51 英里／约 1 小时 40 分，更不现实）</li>' +
        '<li><strong>10/31 结束通车</strong>：这一天日落 18:15，之后你就在园外了</li>' +
        '</ul>' +
        '<p><strong>2026 年施工（已核对 NPS 官方延误清单）：与本区直接相关的只有两项。</strong>' +
        '<strong>Firehole River Bridge</strong>（Old Faithful 以南 1.5 英里，从 West Thumb 方向来必经）：' +
        '桥梁作业与栏杆油漆，<strong>9 月内最多 15 分钟延误</strong>。' +
        '<strong>Bridge Bay Bridge</strong>（Gull Point Drive 与 Fishing Bridge 之间）：' +
        '<strong>8/25 起至 11 月，最多 15 分钟延误</strong>——这一项直接压在湖区日出的路上，务必算进出发时间。' +
        '另有 <strong>Madison River Bridge</strong>（West Entrance Road）8/17 至 9 月初每晚 21:30–05:00 的钻探取芯作业（最多 15 分钟），' +
        '9 月下旬应已结束但值得复查；以及<strong>全园随机路段的碎石封层作业，最多 30 分钟延误</strong>。' +
        'Norris–Madison 与 Norris–Canyon 两段 2026 年无施工项目。</p>' +
        '<p>出发当天复查：<a href="https://www.nps.gov/yell/planyourvisit/parkroads.htm" target="_blank" rel="noopener">路况地图</a>、' +
        '电话 <strong>(307) 344-2117</strong> 录音、或发短信 <strong>82190</strong> 至 <strong>888-777</strong> 订阅路况提醒。' +
        '<strong>注意那张实时路况地图只画主环路与入口道，Firehole Lake Drive、Firehole Canyon Drive、Gull Point Drive 三条支线根本不在图上</strong>，' +
        '要确认只能打电话或到 Old Faithful 游客中心问 ranger。</p>'
    },
    {
      type: 'warn',
      title: '加油、餐饮、信号与雪：10 月这四件事会真的出问题',
      html: '<p><strong>加油。</strong>NPS 表格在每个站名后标注 <em>「fuel available 24/7, year-round」</em>，' +
        '指的是刷卡自助油泵；同时又给出有人值守的便利店营业日期，两个口径并列容易看错。' +
        '<strong>本区相关的四个站：Old Faithful Upper（店面 10/18）、Old Faithful Lower（店面 <strong>9/13</strong>，本窗口内基本全程关闭）、' +
        'Grant Village（店面 10/13）、Fishing Bridge（店面 10/11）。' +
        'Madison 与 Norris 没有加油站。</strong></p>' +
        '<p><strong>驾驶距离（园内限速 45 mph，秋季实际车速更低）：</strong></p>' +
        '<ul>' +
        '<li>West Yellowstone（西门外，全年有油有店）→ Madison <strong>14 英里</strong> → Old Faithful 再 <strong>16 英里</strong>，合计 30 英里</li>' +
        '<li>Old Faithful → Midway <strong>6 英里</strong> → Fountain Paint Pot 再 <strong>4 英里</strong> → Madison 再 <strong>6 英里</strong></li>' +
        '<li>Madison → Norris <strong>14 英里</strong>；Old Faithful → Norris 约 <strong>30 英里／1 小时</strong>（经 Madison）</li>' +
        '<li>Old Faithful → West Thumb <strong>17 英里／约 35 分钟</strong>（Craig Pass，8,262 英尺）→ Fishing Bridge 再 <strong>21 英里</strong></li>' +
        '<li>West Thumb → Grant Village 仅 <strong>2 英里</strong>，这是湖区南段唯一的加油点</li>' +
        '</ul>' +
        '<p><strong>结论很简单：10 月中旬以后，进园前在 West Yellowstone 或 Gardiner 把油加满，园内看到半箱就补。</strong>' +
        '低温会让续航再打折，而 Fishing Bridge 到 Old Faithful 之间 38 英里只有 Grant Village 一个补给点。</p>' +
        '<p><strong>餐饮与补给的实际末日：</strong>Old Faithful General Store 10/18；' +
        '<strong>Snow Lodge 的 Geyser Grill 与礼品店开到 10/31，这是本区最后一处还能买到热食的地方</strong>；' +
        'Old Faithful Medical Clinic 10/27；Old Faithful 邮局 10/15；' +
        'Fishing Bridge General Store 10/18、Fishing Bridge RV Park 10/17；' +
        'Grant Village General Store 9/27、Grant Mini Store 10/4；Lake General Store 9/13。' +
        '<strong>营地：Madison Campground 10/17、Lewis Lake 10/11、Bridge Bay 9/13、Grant Village 9/26。</strong>' +
        '访客中心：<strong>Old Faithful Visitor Education Center 10/31</strong>（间歇泉预报靠它，见 Old Faithful 条目）、' +
        'Norris Geyser Basin Museum 与 Norris Park Store 10/3、Madison Information Station 10/3、' +
        'Grant Visitor Center 10/3、Fishing Bridge Visitor Center 10/3；' +
        '<strong>West Thumb Information Station 已于 2026/7/13 关闭，秋季不会再开</strong>。' +
        '<strong>10/3 之后，本区七个点里有六个连厕所都要碰运气</strong>，请在 Old Faithful 一次性解决。</p>' +
        '<p><strong>手机信号：全园只有约 8% 的面积有覆盖。</strong>NPS 口径是基站设在 Mammoth、Old Faithful、' +
        'Canyon Village、Grant Village、Lake Village 与 Mount Washburn，「provide service to most developed areas」。' +
        '实务上：<strong>Old Faithful 村内、Grant Village、Lake Village 有信号（Verizon 最好），' +
        '走进 Upper Geyser Basin 深处、Fairy Falls 步道、Midway、Norris、Firehole Lake Drive 就基本没有。' +
        'Madison 不在基站名单里，按无信号准备。</strong>' +
        '免费公共 Wi-Fi 本区只有 <strong>Old Faithful Visitor Education Center</strong> 一处（开到 10/31）。' +
        '<strong>务必离线下载全园地图与 NPS App，导航会在半路失效。</strong>园内没有公共 EV 快充。</p>' +
        '<p><strong>雪与温度：9 月下旬和 10 月下旬是两个季节。</strong>' +
        'Old Faithful 一带海拔 7,365 英尺（2,245 米），NOAA 1991–2020 常年值：' +
        '<strong>9 月均高 18 °C／均低 −1 °C；10 月均高 10 °C／均低 −6 °C，10 月常年降雪 9 英寸</strong>，' +
        '<strong>10 月平均有 28.2 个夜晚在冰点以下（一共 31 天）</strong>——十月清晨结冰不是可能性，是默认值。' +
        '实际区间：9 月下旬白天 14–20 °C、夜间 −2 至 +2 °C；10 月下旬白天 5–10 °C、夜间 −8 至 −3 °C。' +
        '<strong>10 月的降雪会临时封路，而且往往只封几个小时到一天。</strong></p>' +
        '<p><strong>所以每一个开车日的早上，出门前都要看一次路况</strong>——' +
        '不是保守，是因为这里的临时封闭不会提前通知，而你可能已经开了 40 分钟。' +
        '<strong>关于雪链：NPS 的官方口径很干脆——<em>「If conditions in Yellowstone are bad enough to require tire chains, ' +
        'we generally close the roads until it\u2019s safe to travel.」</em>' +
        '也就是说园内路段不存在「必须挂链才能走」的情形，需要挂链的时候路已经关了。</strong>' +
        '但园外的进出路（US-191、US-20、US-89）冬季可能要求雪胎，' +
        '且 <strong>北门至 Cooke City 那条全年路段在冬季通常要求雪胎、必要时要求链条</strong>——本区用不到，但如果你要绕北环就要考虑。</p>'
    },
    {
      type: 'warn',
      title: '热区安全与野生动物：法定距离，不是建议',
      html: '<p><strong>热区。</strong>NPS 安全页原文：<em>「The ground surrounding these features may look solid, ' +
        'but it can be just a thin crust with super-heated water below.」</em>' +
        '园方公开口径是<strong>已有 20 多人因跌入或走进热泉致死</strong>，同期死于灰熊的是 8 人；' +
        'USGS 直言热水是 Yellowstone 对游客最严重的威胁，不是熊、也不是超级火山。' +
        '<strong>留在木栈道上是法律要求</strong>：2021 年一名游客在 Norris 走下栈道，' +
        '被判 <strong>7 天监禁 + 1,000 美元罚款 + 1,000 美元社区赔偿</strong>；' +
        '2024 年 9 月一名 60 岁游客在 Old Faithful 附近走出步道踩穿薄壳，腿部二三度烧伤、直升机转运。' +
        '就这一句：<strong>为了半米的构图差别下栈道，不值得，而且违法。</strong></p>' +
        '<p><strong>另外三条与拍摄直接相关的 Compendium 规定：</strong></p>' +
        '<ul>' +
        '<li><strong>热区内禁止饮食</strong>（除非装在背包类容器内），<strong>饮水不受限</strong>——' +
        '也就是说清晨端着一杯咖啡上栈道是违规的</li>' +
        '<li><strong>禁止使用无人值守／自动／移动侦测／遥控的拍摄设备</strong>，即不能架好相机定时离开</li>' +
        '<li><strong>全园禁止用人造光观察野生动物，含闪光灯</strong>。三脚架与独脚架被明确归入「handheld equipment」，' +
        '普通游客使用不需要拍摄许可</li>' +
        '</ul>' +
        '<p><strong>硫化氢是 Norris 与 Fountain Paint Pot 这类酸性区的专属问题。</strong>' +
        'H₂S 与 CO₂ 都比空气重，在<strong>异常寒冷且无风</strong>的夜里会在低洼处积到危险浓度——' +
        '2004 年 Norris Geyser Basin 就有<strong>五头野牛因此集体死亡</strong>。' +
        '<strong>你想拍的那种「冷、静、蒸汽最壮观」的早晨，恰好是气体浓度最高的早晨。</strong>' +
        'NPS 的处置口径只有一句：<em>「If you begin to feel sick while exploring a geyser basin, leave the area immediately.」</em>' +
        '眼刺痛、头痛、恶心、头晕就立刻往高处与上风向走，不要「再拍一张」。' +
        '高浓度下嗅觉会疲劳甚至麻痹，<strong>不要用「还闻得到吗」判断安全</strong>。</p>' +
        '<p><strong>野生动物的法定最小距离：与熊、狼、美洲狮 <strong>100 码（91 米）</strong>；' +
        '与其他所有动物、包括野牛与麋鹿 <strong>25 码（23 米）</strong>。这是可被引用处罚的规定。</strong></p>' +
        '<ul>' +
        '<li><strong>野牛发情期（rut）在 7–8 月，秋季已经结束</strong>，所以本季不会遇到公牛互斗与追人那种局面。' +
        '但野牛全年都在，Fountain Paint Pot 与 Midway 的栈道旁常有牛群卧着——<strong>挡路就原路退回，不要绕，不要从栈道边下去</strong></li>' +
        '<li><strong>麋鹿（elk）的 rut 在 9 月最活跃</strong>，一直延续到 10 月上旬。' +
        '发情期的公麋鹿具有攻击性，会主动逼近人与车，鸣叫（bugle）是很好的录音素材但<strong>不要靠声音去找它</strong>。' +
        '本区的湖畔与 Madison 一带都可能遇到</li>' +
        '<li><strong>熊在 9–10 月处于 hyperphagia（超量进食期）</strong>，为冬眠储脂，' +
        'NPS 口径是这段时间熊<strong>每天可增重 3 磅以上</strong>，觅食时间更长、更大胆、对干扰的容忍度更低。' +
        '首选食物是 whitebark pine 松子，歉收年会更多转向有蹄类尸体。' +
        '<strong>NPS 明确说明熊乡的范围「from the trails in the park\u2019s backcountry to the boardwalks and ' +
        'parking lots around Old Faithful」——包括停车场和栈道</strong></li>' +
        '</ul>' +
        '<p><strong>防熊喷雾：本区必带，尤其是 Fairy Falls 步道、Firehole Lake Drive 的步行段与 Observation Point。</strong>' +
        '握在手里或挂腰带／胸挂上，<strong>放在背包里等于没带</strong>。' +
        '熊冲锋时站住不动，等它进到 <strong>60 英尺（18 米）以内</strong>再喷。' +
        '<strong>园内租借点：Old Faithful 的 Bear Spray Rental Yurt 最后营业日 10/3</strong>' +
        '（Canyon 的 kiosk 到 10/10，但不在本区）。' +
        '<strong>10/3 之后只能自带，或在 West Yellowstone、Gardiner 的店里买（约 $50–60）。' +
        '喷雾不能带上飞机，托运也不行，只能落地后购买。</strong>' +
        '2026 年 5 月 4 日 Old Faithful 西北侧就有两名徒步者被带崽母灰熊袭击致伤，相关封闭已于事后解除。</p>'
    },
    {
      type: 'tip',
      title: '蒸汽 vs 颜色：本区的核心矛盾，以及它的物理',
      html: '<p><strong>这是本子地区最重要的一条摄影知识，值得先把物理讲清楚，因为结论完全反直觉。</strong></p>' +
        '<p>热泉表面的水在 70–95 °C，池面上方那层空气几乎是饱和的。' +
        '这团热湿空气一离开水面就与环境空气混合，' +
        '<strong>而混合后的水汽含量往往超过环境温度下的饱和量，多出来的部分立刻凝结成微小水滴——那就是你看到的白色蒸汽。</strong>' +
        '关键在于「环境温度下能容纳多少水汽」这个量随温度陡降：' +
        '按 Magnus 公式算饱和水汽压，<strong>+20 °C 是 2.34 kPa，+10 °C 是 1.23 kPa，0 °C 是 0.61 kPa，' +
        '−5 °C 是 0.42 kPa，−10 °C 只有 0.29 kPa。</strong></p>' +
        '<p><strong>换成人话：同样一池热水、同样的蒸发量，气温从 +10 °C 降到 −10 °C，' +
        '空气能「藏住」的水汽只剩原来的约 23%，其余全部变成可见的白雾。</strong>' +
        '这就是为什么 8 月中午在 Grand Prismatic 能看到整圈颜色，' +
        '而 10 月同一时刻可能只看到一锅奶白。<strong>不是天气不好，是热力学。</strong></p>' +
        '<p><strong>规则一：蒸汽是礼物的场合 —— 冷、静、低角度光，只拍蒸汽题材。</strong></p>' +
        '<ul>' +
        '<li>清晨（民用曙光到日出后 90 分钟）低角度阳光穿过厚蒸汽会形成通透的体积光，' +
        '<strong>这是本区上限最高的一类画面</strong>：Old Faithful 冷晨第一喷、Norris 的 Porcelain Basin、' +
        'Midway 的橙色径流沟与 Excelsior、Fountain Paint Pot 的 bobby socks trees、' +
        'West Thumb 贴着湖面横漫的蒸汽、Great Fountain 的台阶</li>' +
        '<li>判断标准：<strong>看前夜预报。夜间最低 −5 °C 以下且晴朗无风，第二天早上必须出门。</strong>' +
        '暖夜或有风的早上蒸汽会稀薄很多，那种早晨反而该去拍颜色</li>' +
        '<li>曝光通则：<strong>蒸汽一旦过曝就再也救不回来。</strong>逆光时点测最亮的蒸汽给 +1 到 +1.7 EV 让主体压成剪影，' +
        '或从矩阵测光欠 1 到 1.5 EV 再后期提暗部。二选一，不要两头都想要</li>' +
        '</ul>' +
        '<p><strong>规则二：蒸汽是破坏的场合 —— 颜色与细节题材，只在一天中最暖的时段拍。</strong></p>' +
        '<ul>' +
        '<li>受害者名单：<strong>Grand Prismatic 的彩环、Morning Glory Pool、Turquoise Pool、Opal Pool、' +
        'Abyss Pool、Black Pool、Emerald Spring、Sunset Lake、Emerald Pool</strong>——' +
        '所有「靠水下颜色出片」的池子</li>' +
        '<li>为什么必须是正午前后：<strong>两个条件同时指向它。</strong>' +
        '一是太阳高度——深蓝色来自纯水吸收长波，需要阳光真正穿进水体，太阳低了就只剩水面反光；' +
        '二是气温——一天的气温峰值出现在 <strong>14:00–16:00</strong>，比太阳最高的 13:10 晚两三个小时</li>' +
        '<li><strong>所以正确的做法不是「正午」，是「正午之后的那一小时半」</strong>：' +
        '取太阳高度窗口的后半段，牺牲 1–2° 的太阳高度换几度气温，蒸汽会明显更薄。' +
        '具体钟点见下面 Grand Prismatic 条目</li>' +
        '</ul>' +
        '<p><strong>规则三：风比气温更能决定成败，而风向决定你站哪边。</strong>' +
        '<strong>8–15 mph 的风能在 5 °C 的上午把一个池子完全吹开；一个无风的 10 °C 上午反而可能整天糊死。</strong>' +
        '实操两条：<strong>①站在池子的上风侧</strong>——蒸汽会被吹向远离你的一边，你看到的是清爽的池面而不是一堵墙；' +
        '<strong>②有风的日子优先安排颜色题材，无风的冷早晨优先安排蒸汽题材</strong>，' +
        '把 Grand Prismatic Overlook 排成一个「机动项」而不是固定日期。' +
        '出发前看 <a href="https://www.nps.gov/yell/learn/photosmultimedia/webcams.htm" target="_blank" rel="noopener">Old Faithful 的 NPS 网络摄像头</a>' +
        '就能直接看出当天的蒸汽状况，这比任何预报都准。</p>' +
        '<p><strong>器材后果：蒸汽是在持续给你的前镜片加湿。</strong>' +
        '站在喷气口下风侧几十秒镜片就花了，而低温下擦不干。做法：' +
        '<strong>装一片 UV／保护镜专门当挡雾片（脏了整片换下来擦，不要反复擦镀膜主镜）、' +
        '遮光罩装上（能挡掉相当一部分斜向来雾）、随身四块以上超细纤维布轮换、不拍时镜头朝下并盖盖。</strong>' +
        '每隔一两分钟擦一次，拍完立刻回看——水膜在 LCD 上看不出来，但会在逆光里变成一片雾状光斑。</p>'
    },
    {
      type: 'info',
      title: '日出日落钟点、山脊遮挡修正、低温与器材',
      html: '<p>全窗口均为 <strong>MDT（UTC−6）</strong>。' +
        '<strong>2026 年美国夏令时于 11 月 1 日（周日）02:00 结束——这一天在道路关闭日 10/31 之后，' +
        '整个行程不会遇到调表。</strong>若你在园外多待到 11/1，那天钟表回拨一小时。</p>' +
        '<p>下表按 <strong>Old Faithful（44.4605°N, −110.8281）</strong>计算。' +
        'Midway、Grand Prismatic、Norris、West Thumb、Fishing Bridge 与之相差不超过 2 分钟，可直接套用。</p>' +
        '<table><thead><tr><th>日期</th><th>民用晨光</th><th>日出（方位）</th><th>正午太阳高度</th><th>日落（方位）</th><th>民用暮光</th><th>日长</th></tr></thead><tbody>' +
        '<tr><td><strong>9/25</strong></td><td>06:45</td><td><strong>07:14</strong>（90°）</td><td><strong>44.8°</strong></td><td><strong>19:17</strong>（270°）</td><td>19:46</td><td>12:03</td></tr>' +
        '<tr><td>9/30</td><td>06:51</td><td>07:19（93°）</td><td>42.8°</td><td>19:07（267°）</td><td>19:37</td><td>11:48</td></tr>' +
        '<tr><td>10/10</td><td>07:03</td><td>07:32（98°）</td><td>39.0°</td><td>18:49（262°）</td><td>19:19</td><td>11:18</td></tr>' +
        '<tr><td>10/12</td><td>07:05</td><td>07:34（100°）</td><td>38.2°</td><td>18:46（261°）</td><td>19:15</td><td>11:12</td></tr>' +
        '<tr><td><strong>10/22</strong></td><td>07:18</td><td><strong>07:47</strong>（105°）</td><td><strong>34.6°</strong></td><td><strong>18:29</strong>（255°）</td><td>18:59</td><td>10:42</td></tr>' +
        '<tr><td>10/31</td><td>07:29</td><td>07:59（109°）</td><td>31.5°</td><td>18:15（251°）</td><td>18:46</td><td>10:16</td></tr>' +
        '</tbody></table>' +
        '<p>一个月内<strong>日出推迟 45 分钟、日落提前 48 分钟，可用光缩短 1 小时 47 分</strong>。' +
        '好处是 10 月下旬 07:47 才日出，不用凌晨四点起床。</p>' +
        '<p><strong>但上表是「平地平线」时刻，本区的实际可用光比它短得多，这一点必须单独说。</strong>' +
        'Yellowstone 位于山地时区的西缘（Old Faithful 在西经 110.83°，' +
        '而 MDT 的标准经线是西经 105°），所以太阳正午被推到 <strong>13:07–13:15</strong>；' +
        '同时它在海拔 2,245 米的高原上、四周被山脊围着。' +
        '<strong>Firehole River 走廊西侧是 Madison Plateau，山脊比谷底高约 250–320 米、距离 4–6 公里，' +
        '也就是把西边的地平线抬高了大约 3–5°。</strong></p>' +
        '<table><thead><tr><th>日期</th><th>表上日落</th><th>太阳降到 5°</th><th>太阳降到 3°</th><th>晨间：太阳升到 3°</th></tr></thead><tbody>' +
        '<tr><td>9/25</td><td>19:17</td><td>18:45</td><td>18:56</td><td>07:36（日出后 22 分）</td></tr>' +
        '<tr><td>10/12</td><td>18:46</td><td>18:13</td><td>18:24</td><td>07:57（日出后 23 分）</td></tr>' +
        '<tr><td>10/22</td><td>18:29</td><td>17:55</td><td>18:07</td><td>08:10（日出后 23 分）</td></tr>' +
        '<tr><td>10/31</td><td>18:15</td><td>17:40</td><td>17:53</td><td>08:22（日出后 23 分）</td></tr>' +
        '</tbody></table>' +
        '<p><strong>实用结论：直射光实际上比表上的日落早 20–35 分钟就结束，早上也比表上的日出晚 20–25 分钟才开始。</strong>' +
        '也就是说 10 月 22 日在 Upper Geyser Basin，' +
        '<strong>最后一缕打在间歇泉上的暖光大约在 17:55–18:07，不是 18:29</strong>；' +
        '而 <strong>07:47 「日出」时盆地还是一片蓝调，真正见光要等到 08:10</strong>。' +
        '<strong>好消息是这段「已经天亮但还没有直射光」的时间正是拍蒸汽与蓝调的最佳窗口，不是损失。</strong>' +
        '（山脊角度为按已知地形高差与距离推算，非实测；不同机位有 ±10 分钟偏差。' +
        'West Thumb 与 Fishing Bridge 的西侧地平线明显更低——湖面之上几乎无遮挡——' +
        '那两处的日落时刻接近表上数值，见各条目。）</p>' +
        '<p><strong>低温对器材的三个后果，按重要性排序：</strong></p>' +
        '<ul>' +
        '<li><strong>电池</strong>：锂电池在 −5 至 −10 °C 下可用容量约剩标称的 40–60%，' +
        '而且是「突然归零」不是线性下降。<strong>带 3–4 块以上，全部贴身放在内层口袋</strong>，' +
        '换下来的冷电池捂热后通常还能再撑一轮，不要当场丢掉</li>' +
        '<li><strong>结露，而且本区比别处严重</strong>：你一天里会反复从 −5 °C 的栈道钻进 20 °C 的 Old Faithful Inn 大堂、' +
        'Snow Lodge 餐厅或开着暖风的车。<strong>正确做法是进门／上车之前就把整机连镜头装进密封袋挤出空气，' +
        '室内静置 30–60 分钟再取出</strong>；反方向（暖到冷）没有这个问题。' +
        '<strong>绝对不要在车里开暖风对着相机吹</strong>，那是最快制造内部结露的方式</li>' +
        '<li><strong>木栈道在天亮前结冰</strong>：热泉径流淌上木板再冻住，形成头灯下看不见的透明薄冰。' +
        '<strong>一副轻量冰爪（microspikes）在本区的回报率比多带一支镜头高</strong>，' +
        '尤其是摸黑爬 Observation Point 或走 Fairy Falls 步道最后那段土坡</li>' +
        '</ul>' +
        '<p><strong>门票。</strong>私家车 7 日票 <strong>$35</strong>，America the Beautiful 年票 $80，' +
        '<strong>2026 年没有车辆定时预约制度</strong>。' +
        '关键的一条 2026 年新规：<strong>16 岁及以上的非美国居民须在标准门票之外另付 $100/人 的 nonresident fee，' +
        '但持 Annual Pass 或 America the Beautiful Pass 入园者豁免</strong>——' +
        '所以那张年票在本行程里每人省的是 $135 而不是 $35。' +
        '持卡人须本人在场并出示带照片证件，收据与截图不接受。' +
        '<strong>从南门进出会经过 Grand Teton，那是另一个公园、另一份门票，年票同样覆盖。</strong></p>'
    }
  ],
  spots: [
    {
      id: 'ys-gb-grand-prismatic',
      n: 6,
      name: '大棱镜泉与 Fairy Falls 观景台',
      en: 'Grand Prismatic Spring & the Fairy Falls Overlook',
      score: 5,
      tldr: '栈道上拍不到那圈彩环，只有 Overlook 能；而它必须在正午前后拍，10 月底窗口只剩 12:00–14:30，晚秋可能整天被蒸汽糊死。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '必须正午拍', c: 'risk' },
        { t: '往返 1.2–1.6 英里', c: 'paid' },
        { t: '晚秋可能整天无法拍', c: 'risk' },
        { t: '栈道看不到彩环', c: 'risk' }
      ],
      highlights: [
        '<strong>这是一个地点、两次完全不同的拍摄，把它们当成一件事是本区最常见的失败。</strong>' +
          '<strong>Midway Geyser Basin 的木栈道</strong>从泉体北侧与西侧贴着边缘走过，' +
          '给你的是<strong>蒸汽、边缘微生物垫的质感、和脚下 60–100 米宽的巨大池面带来的压迫感</strong>；' +
          '<strong>Fairy Falls Trailhead 出发的 Grand Prismatic Overlook</strong> 是' +
          '<strong>唯一能真正看到那圈同心色环的地面机位</strong>。两者不能互相替代，也不该连着走。',
        '<strong>为什么栈道上拍不出那张「像航拍」的照片——这是几何问题，不是技术问题。</strong>' +
          '泉体直径 <strong>200–330 英尺（60–100 米）</strong>、深 <strong>121 英尺（37 米）</strong>，' +
          '是 Yellowstone 最大的热泉、世界第三大。' +
          '你站在栈道上，眼高约 1.7 米、离池心三四十米，' +
          '<strong>视线与水面的夹角只有两三度——同心圆在这个角度下被压成一条重叠的色带，' +
          '而且前方几米就是一堵蒸汽墙。</strong>' +
          '而 Overlook 平台在泉心西南方约 <strong>233 米、高出约 32 米</strong>，' +
          '<strong>俯角约 7.8°</strong>——刚好够把从中心深蓝、到绿、黄、橙、红棕的整套色环摊开在一个平面上。' +
          '<strong>结论必须说清楚：不上 Overlook，就没有那张照片。没有任何镜头或后期能替代 32 米的高差。</strong>',
        '<strong>颜色的成因决定了拍摄时间，这不是经验之谈。</strong>' +
          '中心那圈深蓝来自<strong>纯水对长波（红光）的吸收</strong>——' +
          '需要阳光真正穿进水体、在 37 米深的水里走完一趟再散射回来，' +
          '<strong>太阳高度不够时光进不去，你看到的只是水面反射的天空色</strong>。' +
          '外圈的黄、橙、红棕来自<strong>嗜热微生物垫里的类胡萝卜素</strong>，' +
          '色环的顺序其实是一条温度梯度：池心约 70 °C 太热、几乎无生命所以是纯水的蓝，' +
          '往外每降一档温度就换一批菌群、换一种色素。<strong>你拍的是一张温度图。</strong>',
        '<strong>秋季的核心难题在这里：冷空气让蒸汽厚到能盖住整个池子，而唯一的解法是正午——这与常规的黄金时段建议完全相反。</strong>' +
          '实算（44.52°N，MDT）：<strong>9 月 25 日正午太阳高度 44.7°</strong>，' +
          '≥35° 的时段是 <strong>10:55–15:36</strong>、≥40° 是 <strong>11:41–14:51</strong>；' +
          '<strong>10 月 22 日正午只有 34.5°——全天都到不了 35°</strong>，≥30° 只剩 <strong>11:28–14:49</strong>；' +
          '<strong>10 月 31 日正午 31.4°，全天到不了 30°</strong>，≥25° 是 11:03–15:12。' +
          '<strong>夏天流传的「11:00–14:00」在 9 月下旬仍然成立，在 10 月下旬是错的——10/22 的 11:00 太阳只有 27.4°。</strong>',
        '<strong>而且必须诚实说：10 月下旬到 10 月底，这个点有相当概率整天都拍不到。</strong>' +
          '一个 −8 °C 的无风早晨，池面的蒸汽到中午也散不掉；' +
          '此时太阳高度又只有 34° 上下，穿透力本来就不足。' +
          '<strong>这不是「早点去或晚点去」能解决的问题，没有哪个钟点能救它。</strong>' +
          '唯一有效的对策是<strong>把它排成机动项，等一个有风的日子</strong>——' +
          '<strong>8–15 mph 的风能在 5 °C 的中午把整个池面吹开</strong>，' +
          '而无风的暖和日子反而可能糊死。出发前看 Old Faithful 的 NPS 网络摄像头，能直接看出当天蒸汽厚薄。',
        '<strong>步道数据两个口径，请按大的那个留时间。</strong>' +
          'NPS 页面写：从 Fairy Falls Trailhead 出发，<strong>单程 0.6 英里、爬升 105 英尺，往返 1.2 英里，' +
          '评级 Easy，建议时长 1–2 小时</strong>。' +
          '带 GPS 实走的人普遍记录到<strong>单程 0.8 英里、爬升约 200 英尺</strong>。' +
          '前 0.6 英里是平坦的碎石路（原来的公路路基，可推婴儿车），' +
          '<strong>最后 0.2 英里才是上坡土径，霜后打滑、雨后泥泞</strong>。' +
          '另注意 <strong>2026 年 NPS 的现行状态是「步道在 Overlook 以北封闭」——' +
          '也就是说你能上观景台，但不能继续走到 Fairy Falls 本体</strong>'
      ],
      photo: '风光 <strong>5/5</strong>，抽象／局部 <strong>4.5/5</strong>，人像 <strong>2/5</strong>。' +
        '<strong>这是整本指南里单张照片上限最高的机位，没有第二个。</strong>' +
        '机位本身毫无难度——一条铺装碎石路加 300 米土坡，平台有栏杆，手持完全够用。' +
        '扣分只在于<strong>成败几乎完全由当天的风与气温决定，你能控制的只有到场时间</strong>；' +
        '而人像基本不用考虑——平台朝向与光线都是为那口池子服务的。',
      shots: [
        {
          name: 'Overlook 观景平台 —— 唯一能拍到彩环的位置',
          park: [44.51525, -110.83248],
          view: [44.52353, -110.84004],
          desc: '<strong>时段就是这个机位的全部内容。</strong>' +
            '<strong>9 月下旬：11:00–15:00，核心 11:45–14:45。' +
            '10 月下旬：12:00–14:30，并且优先取后半段 13:00–14:30</strong>——' +
            '此时太阳高度只比正午低 1–2°，但气温已接近全天峰值（气温峰值落在 14:00–16:00，比太阳最高晚两三小时），' +
            '蒸汽明显更薄。<strong>10 月 31 日只剩 12:15–14:00 可用。</strong>' +
            '<strong>视线方位约 40°（东北），正午太阳在正南 175°–185°，' +
            '也就是从你的正后方偏右打过来</strong>——这正是中午成立的原因：水面无眩光、光线穿透最深。' +
            '焦段（按 233 米距离、全画幅推算）：' +
            '<strong>50–85mm 让彩环加外圈径流刚好撑满画面，这是主力；' +
            '24–35mm 收整个 Midway 盆地与 Firehole River 的环境关系；' +
            '135–200mm 只取色带做纯抽象</strong>。' +
            '<strong>偏振镜：建议带，而且建议用，但只转到半程。</strong>' +
            '理由是几何——俯角只有 7.8°，等于以约 82°（离法线）的擦射角看水面，' +
            '此时水面对天空的菲涅尔反射率高达三成以上，且强烈偏振。' +
            '<strong>CPL 转到合适角度能削掉这层洗白画面的天空反光，中心的蓝会明显加深、外圈湿润菌垫的饱和度也会提上来。</strong>' +
            '代价是 1.3–2 挡进光（本时段光线充足，不是问题）和广角下天空／蒸汽的亮度不均，' +
            '<strong>所以用 50–85mm 时可以转足，用 24–35mm 时转半程</strong>。' +
            '（这一条与网上常见的「此处不要用 CPL」相反，是按菲涅尔反射与偏振度推算的结论，' +
            '<strong>未能从官方或权威摄影渠道找到对应口径，请到场对比一张开／一张关</strong>。' +
            '反过来说，当蒸汽本身是主体、且是逆光时，CPL 会吃掉一挡半又压平体积感，那时不要装。）' +
            '曝光：按高光测光欠 0.7 EV 保住橙色不溢出，包围曝光 3 张应对蒸汽忽明忽暗。' +
            '（视线方位、距离与俯角由 OSM 坐标与高程推算。）'
        },
        {
          name: '上坡土径中段 —— 平台满人时的替代位与尺度对比',
          view: [44.52370, -110.83923],
          desc: '最后 0.2 英里上坡途中有几处树木开口，<strong>比平台低、更靠东</strong>，' +
            '能拍到彩环的斜侧视角：色环被压成椭圆，但前景可以纳入林线与倒木。' +
            '两个实际用处：<strong>一是平台上人多时这里是备位</strong>' +
            '（10 月工作日通常只有几个人，但周末与晴朗中午仍会挤）；' +
            '<strong>二是能拍到「人站在平台栏杆前看彩环」的尺度对比照</strong>，' +
            '这是说明这口池子有多大的最有效办法。' +
            '<strong>时段与主机位完全相同</strong>，早晚来这里同样只有一锅白雾。' +
            '35–85mm。<strong>坐标取自 OSM 步道路径上的近似点，不是实体节点，地图针脚有几十米误差。</strong>'
        },
        {
          name: 'Midway 栈道上的池边视角 —— 放弃全貌，只拍边缘质感',
          park: [44.52907, -110.83612],
          view: [44.52528, -110.83827],
          desc: '<strong>先接受这里拍不到彩环</strong>（原因见上面第二条），' +
            '然后这个机位就变得很好用：<strong>池边橙黄色微生物垫在近距离下是一流的抽象素材</strong>。' +
            '<strong>70–200mm 或 100mm 微距</strong>取一小块菌垫，配合前方飘过的水汽做虚实层次；' +
            '<strong>16–35mm 贴近栏杆</strong>可以拍「巨大池面 + 蒸汽墙 + 栈道透视」这种压迫感构图，' +
            '这是 Overlook 给不了的。' +
            '<strong>时段：与 Overlook 同一条规则</strong>（9 月下旬 11:00–15:00、10 月下旬 12:00–14:30），' +
            '清晨来这里等于白来。' +
            '<strong>如果同一天两处都要拍，先上 Overlook 再下来走 Midway</strong>——' +
            'Overlook 对时间的要求苛刻得多，而池边质感对太阳高度的依赖小一些。' +
            '<strong>过桥后逆风那 50 米镜头会立刻起雾，进场前先擦干净、进场后每两三分钟擦一次。</strong>'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '含在园区门票内，<strong>America the Beautiful 年票直接覆盖</strong>，另免 $100/人 的非居民附加费',
        hours: '<strong>步道与栈道均无门禁、全天可入</strong>' +
          '（NPS 步道页标注 Season: Winter, Summer, Fall）。' +
          '限制来自道路季节：<strong>Madison ↔ Old Faithful 段 2026 年通车至 10/31</strong>。' +
          '<strong>2026 年现行状态：Grand Prismatic Overlook Trail 从 Fairy Falls Trailhead 到观景台开放，' +
          '观景台以北通往 Fairy Falls 的部分封闭。</strong>' +
          '另注意该步道北段属熊管理区，每年 3 月上旬至 5 月下旬另有季节性封闭，与本窗口无关',
        parking: '<strong>Overlook 用的是 Fairy Falls Trailhead 停车场（44.51525, −110.83248）</strong>，' +
          '在 Midway 以南约 1 英里的 Grand Loop Road 东侧。' +
          '<strong>这不是 Midway 的那个停车场，停错要多走 2.6 公里。</strong>' +
          'NPS 提示车位「very limited」，但那是夏天的问题，10 月工作日通常有位。' +
          '池边视角用 <strong>Grand Prismatic Spring Parking（44.52907, −110.83612）</strong>，正规硬化停车场，均免费',
        walk: '<strong>Overlook：NPS 口径单程 0.6 英里／爬升 105 英尺；实走 GPS 普遍为单程 0.8 英里／爬升约 200 英尺。' +
          '往返按 1.6 英里／2.6 公里、50–70 分钟计（拍摄时间另加）。</strong>' +
          '前 0.6 英里平坦碎石路，最后 0.2 英里上坡土径。' +
          '池边视角：停车场到栈道尽头往返约 0.8 英里／1.3 公里、30–45 分钟，全程平坦木栈道'
      },
      notes: [
        '<strong>清晨与日落前后绝对不要来 Overlook。</strong>' +
          '那两个时段这里只有一锅白雾，你会走 2.6 公里去拍一张什么都没有的照片。' +
          '这是本区最反直觉、也最容易犯的错',
        '<strong>把它排成机动项，不要绑死日期。</strong>' +
          '判断顺序是：先看风（8–15 mph 最好），再看气温，最后才看是不是晴天。' +
          '一个有风的阴天比一个无风的晴冷天更可能出片',
        '<strong>这是熊管理区，且步道后段人少。</strong>务必带防熊喷雾挂在腰上、结伴而行、边走边出声。' +
          '2026 年 5 月 4 日就有两名徒步者在 Old Faithful 西北侧被带崽母灰熊袭击致伤' +
          '（相关临时封闭已解除，但这一带的熊活动是常态）。' +
          '<strong>Old Faithful 的喷雾租借亭 10/3 关门，之后只能自带或在 West Yellowstone 买</strong>',
        '往返约一小时，<strong>全程无遮挡、无厕所、无信号</strong>。' +
          '最近的厕所在 Midway 停车场。10 月正午气温可能只有 5–8 °C，但上坡会出汗，穿可脱的中层',
        '<strong>不要试图从 Midway 的栈道翻越护栏，或从 Firehole River 河边靠近取一个「高一点」的角度。</strong>' +
          '那是热区，地表是薄壳，且违法。要拍彩环只有 Overlook 这一条路',
        '观景平台不大、有栏杆，三脚架可以架但请留出通道；实际上本机位手持完全够用',
        '<strong>Fairy Falls Trailhead 与 Midway 停车场之间开车只要 3 分钟／1.6 公里</strong>，' +
          '但如上所述，两处应当安排在同一时段窗口内先后完成，而不是分早晚'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/View_from_the_Grand_Prismatic_Overlook_Trail_%2835637694570%29.jpg',
          cap: '从 Overlook 俯视整圈彩环，本条目的目标画面 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Grand_Prismatic_Spring_from_Fairy_Falls_Trail_overlook_%28Midway_Geyser_Basin%2C_Yellowstone_National_Park%29_2021-08-10%2C_01.jpg',
          cap: 'Fairy Falls Trail 观景点视角与周边环境关系 · Steven Pavlov / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Viewing_platform_on_the_Grand_Prismatic_Overlook_Trail_%2835187569644%29.jpg',
          cap: '观景平台本身与栏杆高度 · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-gb-old-faithful-upper-basin',
      n: 8,
      name: '老忠实与上间歇泉盆地',
      en: 'Old Faithful & the Upper Geyser Basin',
      score: 5,
      tldr: '全球间歇泉密度最高的一平方英里，六个泉有官方预报且游客中心开到 10/31；真正的收获在 Observation Point 与 Grand、Castle。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '六个泉有官方预报', c: 'free' },
        { t: '游客中心开到 10/31', c: 'free' },
        { t: '栈道清晨结冰', c: 'risk' },
        { t: 'Inn 关门日期有冲突', c: 'risk' }
      ],
      highlights: [
        '<strong>预报系统的现状（已核实，2026 年秋季正常运行）：NPS ranger 对六个间歇泉做预报——' +
          'Old Faithful、Castle、Grand、Daisy、Riverside、Great Fountain。</strong>' +
          '获取方式五条：<strong>①免费的 NPS App（可离线缓存）；' +
          '②Old Faithful Visitor Education Center 大厅的预报板；' +
          '③官网 <a href="https://www.nps.gov/yell/planyourvisit/geyser-activity.htm" target="_blank" rel="noopener">Current Geyser Activity</a> 的实时页；' +
          '④电话录音；⑤第三方的 GeyserTimes 网站与 App</strong>。' +
          '<strong>关键限制写在官网上：<em>「Predictions are not available when the Old Faithful Visitor Education Center is closed, ' +
          'typically early November through mid-December and mid-March through mid-April.」</em>' +
          '该中心 2026 年开到 10/31——整个 9/25–10/31 窗口都有预报，这一点不用担心。</strong>' +
          '另有一个容易误解的点：官网写着 <em>「The last prediction made will remain up until a new prediction is available」</em>，' +
          '<strong>你看到的可能是几小时前的旧预报</strong>；天亮前想知道情况，看 GeyserTimes 比等官网快，' +
          '因为 ranger 开门前本来就是靠 geyser gazer 的在线观测与网络摄像头判断的',
        '<strong>Old Faithful 的官方参数，以及「94 或 68 分钟」这个双峰间隔是怎么来的。</strong>' +
          'NPS 表格给的是 <strong>平均间隔「94 或 68 分钟（±10 分钟）」，持续 1.5–5 分钟，高 106–184 英尺（32–55 米）</strong>。' +
          '两个数字不是笔误：<strong>预报规则是看上一次喷发的持续时间——' +
          '短喷（约 2.5 分钟以内）之后接约 68 分钟的短间隔，长喷之后接约 94 分钟的长间隔。</strong>' +
          '这就是 ranger 在你眼前算出下一次时刻的全部依据，你自己也能算。' +
          '过去 30 年它的平均间隔只延长了约半小时，<strong>「越来越不准」的说法是夸张的</strong>。' +
          '注意官网那张行为表自身标注「last updated November 2020」，' +
          '<strong>个别条目明显过期（Fan &amp; Mortar 一栏还写着 2020 年的喷发记录），间隔数据请以现场预报板为准</strong>',
        '<strong>另外五个值得投入等待时间的单体，以及它们的官方间隔：</strong>' +
          '<strong>Grand</strong>——世界上最高的可预报间歇泉，<strong>6 小时 30 分（±60 分），持续 8–12 分钟，160+ 英尺（48+ 米）</strong>，' +
          '以多波次爆发，第一波通常最高；' +
          '<strong>Castle</strong>——全园最大的硅华泉锥，积累了数千年，' +
          '<strong>13 小时 30 分（±45 分），15–20 分钟，75 英尺</strong>，' +
          '「小喷之后的第二次大喷」另按 14 小时 45 分算；' +
          '<strong>Riverside</strong>——<strong>6 小时 30 分（±30 分），20 分钟，75 英尺</strong>，' +
          '水柱斜着射过 Firehole River，是全盆地构图最讲究的一个；' +
          '<strong>Daisy</strong>——<strong>2 小时 45 分（±30 分，有风时更长），3.5 分钟，75 英尺</strong>，' +
          '本区最容易碰上的一个；' +
          '<strong>Beehive</strong>——<strong>不在预报名单上，间隔从 22–36 小时到两周以上，150+ 英尺（45+ 米）</strong>，' +
          '是全盆地最壮观的喷发之一。' +
          '<strong>拍到 Beehive 的唯一办法是盯住它旁边那个叫 Beehive\u2019s Indicator 的小喷口</strong>' +
          '（44.46264, −110.82998）：它先喷，几分钟到二十几分钟后 Beehive 才起来，' +
          '现场的 gazer 会同步发到 GeyserTimes 上',
        '<strong>Observation Point 是把 Old Faithful 拍出「场面感」的唯一办法，而且它全年开放</strong>' +
          '（NPS 步道页标注 Season: Year Round）。' +
          '从游客中心沿栈道逆时针走约 0.3 英里，在 Geyser Hill 标牌处右转、过 Firehole River 上的桥，' +
          '桥后即是登山口；<strong>之字形上坡 0.5 英里到顶，往返 1.6 英里，NPS 评为 Moderate</strong>。' +
          '继续西行 0.9 英里可接 Solitary Geyser（44.46858, −110.82931）再下到 Geyser Hill 栈道，是很顺的一个环',
        '<strong>Morning Glory Pool 那圈醒目的橙边其实是人为破坏的产物，拍它的时候值得知道。</strong>' +
          '它原本是纯净的钴蓝色，<strong>几十年来游客往里扔硬币、垃圾和石头堵塞了热水通道，水温下降，' +
          '橙黄色的嗜热微生物才得以在边缘扩张</strong>。' +
          '它在栈道最远端，从游客中心单程约 1.5 英里／2.4 公里，往返一个半到两小时。' +
          '<strong>它是「颜色题材」，必须按正午规则拍，清晨去只能拍到一锅雾</strong>',
        '<strong>Old Faithful Inn 的 1904 年大堂就在喷口边上，非住客可以自由进入，但它的 2026 年关门日期两个官方来源打架。</strong>' +
          '设计者 <strong>Robert C. Reamer 接下这个委托时只有 29 岁</strong>，这是他的第一件重要作品；' +
          '大堂屋顶尖端距地面「近 77 英尺」（NPS 园刊原文），内部是一套支撑七层的原木框架，' +
          '1987 年列入 <strong>National Historic Landmark</strong>。' +
          '<strong>一个常见误解值得纠正：它不是「全木建造」</strong>——NPS 园刊明确澄清只有 Old House 的一层是承重的未削原木，' +
          '上部山墙其实是锯材框架加木瓦。' +
          '<strong>关门日期：Xanterra 官网三处一致写 10/12，NPS Operating Dates 表写客房 10/18、餐饮与礼品店 10/19。' +
          '未能核实哪边为准。安全口径是把 10/12 当作确定能进的最后一天</strong>（详见顶部警告栏）'
      ],
      photo: '风光 <strong>5/5</strong>，间歇泉动态 <strong>5/5</strong>，建筑（Inn 大堂）<strong>5/5</strong>，人像 <strong>3/5</strong>。' +
        '<strong>一个上午能拍到的题材密度在整本指南里无人能及</strong>：' +
        '六个有预报的间歇泉、一个能俯瞰全盆地的观景点、一座国家历史地标级的木构大堂，全在两公里内。' +
        '扣分只在于 <strong>Old Faithful 本体被拍烂了，很难拍出新意</strong>——' +
        '真正的收获在 Observation Point 的俯瞰、Grand 与 Castle 的等待、以及 Riverside 那道斜跨河面的水柱。',
      shots: [
        {
          name: 'Observation Point 俯瞰喷发 —— 本条目的招牌',
          park: [44.45794, -110.83073],
          view: [44.46471, -110.82444],
          desc: '<strong>这是唯一能俯视 Old Faithful 喷发、同时把整个 Upper Geyser Basin 与 Old Faithful Inn ' +
            '收进同一画面的机位</strong>，也是这个条目值 5 分的原因。' +
            '<strong>最佳时段是日出后的第一次喷发</strong>：' +
            '9/25 日出 07:14（方位 90°）、盆地真正见光约 07:36；' +
            '10/22 日出 07:47（方位 105°）、见光约 08:10。' +
            '<strong>你在喷口的东北侧，太阳从东／东南低角度射来，喷发水柱正好处于侧逆光，' +
            '而冷晨的蒸汽体量是夏天的两倍以上，会被彻底打亮。</strong>' +
            '<strong>务必提前 40–50 分钟从游客中心出发</strong>（0.3 英里栈道 + 0.5 英里之字坡，摸黑加结冰要留足），' +
            '到顶后按预报时刻等。' +
            '<strong>24–70mm 是主力</strong>（收喷发 + 盆地 + Inn 屋顶）；' +
            '<strong>70–200mm 压缩</strong>把远处的 Inn 与喷发水柱叠在一起。' +
            '快门 1/500 以上冻结水珠；曝光按最亮的蒸汽给、欠 1 EV。' +
            '<strong>摸黑上山用头灯而不是手机手电（要腾出手扶），轻量冰爪在这段之字坡上很值。</strong>'
        },
        {
          name: '喷口西侧看台 —— 逆光喷发，本区的签名画面',
          park: [44.45794, -110.83073],
          view: [44.46046, -110.82815],
          desc: '喷口（44.46046, −110.82815）周围有一圈木质看台，半径约 50–80 米。' +
            '<strong>关键是站位：要拍逆光就站在喷口的西侧、朝东对着刚升起的太阳</strong>' +
            '（9/25 太阳方位 90° 正东，10/22 是 105° 东南东，所以 10 月下旬应稍偏西北一点站）。' +
            '<strong>风向决定同一件事的成败，而且这里的风向通常是帮你的。</strong>' +
            'Firehole 走廊的盛行风来自西南／西，' +
            '<strong>也就是说你站在西侧时，喷发的水汽是被吹向远离你的东北方向</strong>——' +
            '水柱本体保持清晰、不会糊成一堵墙，前镜片也不会在两分钟内被浇透。' +
            '<strong>反过来，如果当天刮东风，请立刻换到喷口的东侧去拍侧光，不要硬扛逆光</strong>：' +
            '站在下风侧的结果是镜头全湿、画面一片白、机身进水。' +
            '<strong>快门有三个层次，请分开拍：1/500–1/1000 s 冻结水珠的颗粒感（首选，逆光下水珠会变成一片光点）；' +
            '1/60–1/125 s 让水柱有向上的运动感；1/8–1/2 s 把整根水柱拍成一层丝质的纱幕</strong>（需三脚架与 ND，秋季暮光时不需 ND）。' +
            '<strong>f/11–f/16 在太阳被蒸汽半遮时能得到干净的星芒。</strong>' +
            '曝光：点测最亮的蒸汽给 +1 到 +1.7 EV，让人物与栏杆自然压成剪影。' +
            '遮光罩在正对太阳时没用，用手或帽子挡前镜片的杂光，并每隔一两分钟擦一次镜头。' +
            '（盛行风向为一般气候特征，<strong>非当日预报，出发前请看实际风向</strong>。）'
        },
        {
          name: 'Grand、Castle 与 Riverside —— 值得等的三个',
          park: [44.45794, -110.83073],
          view: [44.46666, -110.83701],
          desc: '从游客中心沿栈道向西北 0.8–1.5 公里，三个泉在同一条线上：' +
            '<strong>Grand（44.46666, −110.83701）、Castle（44.46366, −110.83648）、' +
            'Riverside（44.47347, −110.84092）</strong>。' +
            '<strong>做法很简单：早上到游客中心把三个预报时刻抄下来，当天的行程就排好了。</strong>' +
            'Grand 喷发可达 160+ 英尺、以多波次爆发，<strong>24–70mm 竖构图</strong>才装得下；' +
            'Castle 的巨型硅华锥体<strong>不喷发时也完全成立</strong>，' +
            '<strong>35–85mm 侧逆光拍锥体的层积质感</strong>；' +
            'Riverside 的水柱斜跨 Firehole River，' +
            '<strong>70–200mm 从对岸压缩，把水柱、河面反光与后方林线叠成三层</strong>。' +
            '<strong>时段：清晨见光后的一小时（9/25 的 07:36–08:40、10/22 的 08:10–09:15）是蒸汽最厚、体积光最好的时候；' +
            '而下午晚些的西向逆光（直射光实际在 9/25 的 18:45 前后、10/22 的 17:55 前后就结束）' +
            '会把蒸汽染成金色。</strong>' +
            '等待可能长达一小时，<strong>带保温杯但记住热区内禁止饮食，只能喝水。</strong>'
        },
        {
          name: 'Morning Glory Pool —— 严格按颜色规则执行',
          park: [44.45794, -110.83073],
          view: [44.47506, -110.84353],
          desc: '栈道最远端，从游客中心单程约 <strong>1.5 英里／2.4 公里</strong>，往返一个半到两小时。' +
            '<strong>只在太阳最高、气温最高的时段来：9 月下旬 11:00–15:00，10 月下旬 12:00–14:30。' +
            '清晨来只能拍到一锅雾，走 5 公里白跑。</strong>' +
            '<strong>35–85mm 从栈道俯视，把整个池子放正、让蓝到橙的渐变对称</strong>——' +
            '这是一张构图上很「规矩」的照片，不要斜着拍。' +
            '<strong>偏振镜在这里有用</strong>：这是个深池，压掉水面反光后池底的层次会明显加深。' +
            '同一趟路会经过 Riverside，可以并成一次。' +
            '<strong>返程要算清时间</strong>：10/22 直射光在 17:55 前后就结束，' +
            '从这里走回停车场 30–40 分钟，不要拍到没光了才动身。'
        },
        {
          name: 'Old Faithful Inn 大堂 —— 混合色温与 9 EV 光比',
          park: [44.46063, -110.83169],
          view: [44.45963, -110.83129],
          desc: '<strong>最佳时段是上午 10:00–12:00 与下午 14:00–16:00</strong>：' +
            '此时山墙高窗与老虎窗有直射光进来，在原木框架上打出清晰的几何投影；' +
            '清晨与傍晚整个大堂是一片平淡的暖褐色，出片率大跌。' +
            '<strong>14–20mm 超广是必需的</strong>（空间窄、高度大，24mm 收不下框架全貌），' +
            '站在石砌壁炉前方的下沉区正中近乎垂直上仰；' +
            '二层环廊可以俯拍大堂地面与壁炉，是拍「巨大空间里的小人物」的最佳点。' +
            '<strong>务必包围曝光 3–5 张</strong>——山墙高窗到阴影的光比常超过 9 EV，单张一定顾此失彼。' +
            '参数起点：<strong>f/2.8–f/4，ISO 1600–3200，1/40 s，机身防抖开</strong>。' +
            '<strong>白平衡是这里真正的难点</strong>：光源是烛台造型的白炽灯（约 2800–3000K）与高窗日光（约 5500K）混合，' +
            '<strong>自动白平衡会取中间值把原木拍成发灰的土黄</strong>。' +
            '拍 RAW，然后二选一：<strong>设 3200–3800K 保住木头暖调、接受窗口偏蓝（推荐，蓝窗反而增加层次）；' +
            '或设 5200K 日光、接受整体重琥珀调</strong>。混合色温后期无法一键修好。' +
            '<strong>门廊二层屋顶是对公众开放的观喷平台</strong>，' +
            '能拍到「Old Faithful 喷发 + 木瓦屋檐做前景」这个只有这里成立的构图。' +
            '<strong>关门日期见顶部警告栏：10/12 之前一定进得去，10/13–10/19 赌运气，10/19 之后一定进不去。</strong>' +
            '（坐标为 Old Faithful Inn 建筑本体的 OSM／Nominatim 节点，室内各机位共用。）'
        }
      ],
      access: {
        book: '<strong>盆地与栈道不需预约；参观 Inn 大堂也不需预约，非住客可自由进入。</strong>' +
          'Inn 提供免费的 history tour（讲解员带看 Old House 内部与一间老式客房），' +
          '<strong>报名方式与秋季是否仍开班未能从官方渠道确认</strong>，到场问前台',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>；进入 Inn 大堂免费',
        hours: '<strong>盆地与全部木栈道无门禁、全天可入</strong>——这意味着你可以在天亮前上 Observation Point。' +
          '<strong>Old Faithful Visitor Education Center 2026 年开到 10/31</strong>（预报板与免费 Wi-Fi 都在里面）；' +
          'Old Faithful Park Store 10/31；General Store 10/18；Medical Clinic 10/27；' +
          '<strong>Bear Spray Rental Yurt 10/3</strong>。' +
          '<strong>Old Faithful Inn：Xanterra 写 10/12，NPS 写客房 10/18／餐饮 10/19，两者冲突未能核实。</strong>' +
          'Snow Lodge 客房 10/24、Geyser Grill 与礼品店 10/31。所在路段通车至 10/31',
        parking: '多个大型免费停车场：<strong>West Parking（44.45794, −110.83073，离 Inn 与 Observation Point 登山口最近）</strong>、' +
          'East Parking（44.45712, −110.82541）、Inn 专用场（44.46063, −110.83169）。' +
          '<strong>10 月完全不紧张，清晨基本空着</strong>',
        walk: 'West Parking 到喷口约 <strong>350 米／5 分钟</strong>；' +
          '到 <strong>Observation Point 往返 1.6 英里／2.6 公里含爬升，45–70 分钟</strong>；' +
          '到 <strong>Morning Glory Pool 往返 3 英里／4.8 公里，1.5–2 小时</strong>；' +
          'Grand／Castle 往返 1.5–2 公里。整个栈道网络走全约 5 英里'
      },
      notes: [
        '<strong>木栈道在天亮前普遍结冰</strong>——热泉径流淌上木板再冻住，形成头灯下看不见的透明薄冰。' +
          '<strong>轻量冰爪在这里是本区回报率最高的一件装备</strong>，尤其你要摸黑爬 Observation Point 那段之字坡',
        '<strong>不要一大早就冲 Morning Glory 或 Grand Prismatic。</strong>' +
          '正确的一天是：<strong>天亮前上 Observation Point 拍第一喷 → 见光后一小时在 Geyser Hill 与 Castle 拍蒸汽 → ' +
          '11:00 之后才去 Morning Glory 与 Grand Prismatic Overlook 拍颜色</strong>',
        '<strong>Old Faithful 区域有手机信号（Verizon 最好）与免费 Wi-Fi（游客中心）</strong>，' +
          '是本区唯一能可靠联网的地方；<strong>走进盆地深处（Morning Glory 一带）信号消失</strong>',
        '<strong>这一带是灰熊活动区，NPS 明确把「Old Faithful 周边的栈道与停车场」写进熊乡范围。</strong>' +
          '走 Observation Point 或去 Morning Glory 请带喷雾挂在腰上',
        '<strong>三脚架在园内不需要许可</strong>（Compendium 把 tripod／monopod 归入「handheld equipment」），' +
          '但木栈道窄，请靠边不要挡人。' +
          '<strong>Inn 由 Xanterra 特许经营，酒店自身是否另有三脚架规定未能从官方渠道确认</strong>——' +
          '人少时低调使用小三脚架，被劝阻就收起来，主力方案按手持 + 高 ISO + 包围曝光准备',
        '<strong>结露在这里比别处严重</strong>，因为你一天里会反复进出 Inn 大堂与 Snow Lodge。' +
          '进门前把相机装密封袋挤出空气，室内静置 30–60 分钟再取出',
        '<strong>Old Faithful 以南 1.5 英里的 Firehole River Bridge 在 2026 年 9 月内有桥梁作业，最多 15 分钟延误</strong>；' +
          '从 West Thumb 方向进来会遇到',
        '加油：<strong>Old Faithful Upper Gas Station 店面开到 10/18、Lower 站 9/13</strong>，' +
          '刷卡自助泵按 NPS 标注全年 24 小时可用（<strong>但店面关门后自助泵是否仍供油，NPS 表格口径自相矛盾，未能确认</strong>）。' +
          '不要赌，进园前加满'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Spring_Old_Faithful_eruption_from_Observation_Point.jpg',
          cap: '从 Observation Point 俯瞰喷发与整片盆地 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Old_Faithful_eruption_in_front_of_the_sun_%2836922264582%29.jpg',
          cap: '逆光中的 Old Faithful 喷发，本区签名画面 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Old_Faithful_Inn_lobby_at_night_%2835725047566%29.jpg',
          cap: 'Old Faithful Inn 大堂与七层原木框架 · NPS / Public domain' }
      ]
    }
  ]
};
