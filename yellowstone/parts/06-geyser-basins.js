module.exports = {
  id: 'ys-geyser-basins',
  name: 'Yellowstone · 间歇泉盆地与湖区',
  navName: '间歇泉盆地',
  color: '#ffb340',
  lead: '全球一半以上的活间歇泉集中在 Firehole River 沿岸这 30 公里里，再往东是北美最大的高海拔湖。' +
    '题材密度是全园最高的，但这一片同时也是整本指南里季节约束最狠的一段，' +
    '<strong>「9 月下旬来」和「10 月下旬来」几乎是两趟不同的旅行</strong>：' +
    '10 月 10 日 Lake Yellowstone Hotel 与 Grant Village 同日关门，湖区从此没有园内住宿；' +
    '<strong>10 月 12 日 Old Faithful Inn 按特许经营商口径关门</strong>（NPS 表格写 10/18，两边不一致，见下）；' +
    '10 月 24 日 Snow Lodge 客房关，Old Faithful 一带彻底没有过夜的地方；' +
    '<strong>10 月 31 日主环路全线对汽车关闭</strong>，11 月 1 日起只剩北门那条走廊。' +
    '摄影上还有一条更要紧、且与常识相反的结论：' +
    '<strong>本区最重要的那张照片（Grand Prismatic 的彩环）必须在正午前后拍，而且晚秋很可能整天都拍不到</strong>——' +
    '冷空气会让蒸汽厚到把整个池子盖死。这一条决定了整个子地区的时间表：' +
    '<strong>清晨拍蒸汽，正午拍颜色，两者在物理上不可兼得。</strong>' +
    '另有两处必须提前知道的封闭：<strong>Biscuit Basin 自 2024 年 7 月爆炸后全域封闭至今，2026 年 6 月又炸了一次</strong>；' +
    '<strong>Firehole Lake Drive 因路基被地热烤化，2026 年对机动车关闭</strong>，Great Fountain 只能走进去。',
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
        '2026 年 NPS 公布的日期是 <strong>10 月 31 日（周六）</strong>，而 2026 年 11 月第一个周一是 11/2。' +
        '2026 版 <a href="https://home.nps.gov/yell/learn/management/upload/Yellowstone-Superintendent-s-Compendium.pdf" target="_blank" rel="noopener">Superintendent\u2019s Compendium</a> ' +
        '的原文也是按日期写的：<em>「Starting November 1st until spring opening in April or May, the Grand Loop Road ' +
        'and park entrance roads are closed to wheeled motor vehicle use by the public」</em>。' +
        '<strong>所以本窗口的硬边界就是 10/31，那是最后一个能开车拍摄的整天。</strong></p>' +
        '<p><strong>入口：北门（Gardiner）全年开放，是唯一的年度通道；西门、南门、东门、东北门在 10/31 结束通车。</strong>' +
        '本区实际只能从西门（West Yellowstone，离 Madison 14 英里）或南门进出最顺。</p>' +
        '<p><strong>住宿是本区真正的执行瓶颈</strong>，因为它决定你能不能拍日出。' +
        '一旦园内全关，只能住西门外的 West Yellowstone：到 Old Faithful <strong>30 英里／约 45–55 分钟</strong>，' +
        '到 Midway 约 26 英里／40 分钟，到 West Thumb 约 <strong>52 英里／1 小时 20 分</strong>，' +
        '全程夜路、限速 45 mph、大概率遇动物。</p>' +
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
        'Xanterra 的开关门日期页、Inn 单页与餐饮页三处一致写 <strong>10/12</strong>，' +
        'NPS 表格写 <strong>10/18</strong>。<strong>无法判断哪一边是过期数据，未能核实。</strong>' +
        '实务口径：<strong>10/12 之前一定进得去大堂；10/13–10/19 属于赌运气；10/19 之后一定进不去。</strong>' +
        '若行程落在 10/13 之后而那个 1904 年的大堂是你的重点，出发前直接打 <strong>307-344-7311</strong> 确认。</p>' +
        '<p><strong>三个日期节点，翻译成实际后果：</strong></p>' +
        '<ul>' +
        '<li><strong>10/10 之后</strong>：Lake Yellowstone Hotel 与 Grant Village 同日关门，' +
        '<strong>整个湖区（Fishing Bridge、Gull Point、West Thumb）再没有园内住宿</strong>。' +
        '想在湖边拍日出只能从 Old Faithful 出发（到 West Thumb 单程 <strong>17 英里／约 35 分钟</strong>，' +
        '到 Fishing Bridge <strong>38 英里／约 1 小时 15 分</strong>，要摸黑翻海拔 8,262 英尺的 Craig Pass），' +
        '或者从 Canyon Lodge 南下</li>' +
        '<li><strong>10/24 之后</strong>：Snow Lodge 客房也关，<strong>Old Faithful 一带彻底没有过夜的地方</strong>。' +
        '10/25–10/31 这七天想拍 Upper Geyser Basin 的日出，只能住 West Yellowstone 并在 06:10 前出发' +
        '（10/31 民用曙光 07:29、盆地见光 08:22），或者住 Mammoth（到 Old Faithful 51 英里，更不现实）</li>' +
        '<li><strong>10/31 结束通车</strong>：这一天日落 18:15，之后你就在园外了</li>' +
        '</ul>' +
        '<p><strong>2026 年施工（已核对 NPS 官方延误清单）：与本区直接相关的只有两项。</strong>' +
        '<strong>Firehole River Bridge</strong>（Old Faithful 以南 1.5 英里，从 West Thumb 方向来必经）：' +
        '桥梁作业与栏杆油漆，<strong>9 月内最多 15 分钟延误</strong>。' +
        '<strong>Bridge Bay Bridge</strong>（Gull Point Drive 与 Fishing Bridge 之间）：' +
        '<strong>8/25 起至 11 月，最多 15 分钟延误</strong>——这一项直接压在湖区日出的路上，务必算进出发时间。' +
        '另有 <strong>Madison River Bridge</strong>（West Entrance Road）8/17 至 9 月初每晚 21:30–05:00 的钻探取芯作业' +
        '（最多 15 分钟，9 月下旬应已结束但值得复查），' +
        '以及<strong>全园随机路段的碎石封层作业，最多 30 分钟延误</strong>。' +
        'Norris–Madison 与 Norris–Canyon 两段本年度无施工项目。</p>' +
        '<p>出发当天复查：<a href="https://www.nps.gov/yell/planyourvisit/parkroads.htm" target="_blank" rel="noopener">路况地图</a>、' +
        '电话 <strong>(307) 344-2117</strong> 录音，或发短信 <strong>82190</strong> 至 <strong>888-777</strong> 订阅路况提醒。' +
        '<strong>注意那张实时路况地图只画主环路与入口道，Firehole Lake Drive、Firehole Canyon Drive、Gull Point Drive ' +
        '三条支线根本不在图上</strong>，要确认只能打电话或到 Old Faithful 游客中心问 ranger。</p>'
    },
    {
      type: 'warn',
      title: '加油、餐饮、信号与雪：10 月这四件事会真的出问题',
      html: '<p><strong>加油。</strong>NPS 表格在每个站名后标注 <em>「fuel available 24/7, year-round」</em>（指刷卡自助泵），' +
        '同时又给出有人值守便利店的营业日期，两个口径并列，很容易看错。' +
        '<strong>本区相关的四个站：Old Faithful Upper（店面 10/18）、Old Faithful Lower（店面 9/13，本窗口内基本全程关闭）、' +
        'Grant Village（店面 10/13）、Fishing Bridge（店面 10/11）。Madison 与 Norris 没有加油站。</strong></p>' +
        '<p><strong>驾驶距离（园内限速 45 mph，秋季实际更慢）：</strong></p>' +
        '<ul>' +
        '<li>West Yellowstone（西门外，全年有油有店）→ Madison <strong>14 英里</strong> → Old Faithful 再 <strong>16 英里</strong></li>' +
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
        '营地：<strong>Madison Campground 10/17、Lewis Lake 10/11、Bridge Bay 9/13、Grant Village 9/26</strong>。' +
        '访客中心：<strong>Old Faithful Visitor Education Center 10/31</strong>（间歇泉预报靠它）、' +
        'Norris Geyser Basin Museum 与 Norris Park Store 10/3、Madison Information Station 10/3、' +
        'Grant Visitor Center 10/3、Fishing Bridge Visitor Center 10/3；' +
        '<strong>West Thumb Information Station 已于 2026/7/13 关闭，秋季不会再开</strong>。' +
        '<strong>10/3 之后本区九个点里有六个连厕所都要碰运气</strong>，请在 Old Faithful 一次性解决。</p>' +
        '<p><strong>手机信号：全园只有约 8% 的面积有覆盖。</strong>NPS 口径是基站设在 Mammoth、Old Faithful、' +
        'Canyon Village、Grant Village、Lake Village 与 Mount Washburn，「provide service to most developed areas」。' +
        '实务上：<strong>Old Faithful 村内、Grant Village、Lake Village 有信号（Verizon 最好），' +
        '走进 Upper Geyser Basin 深处、Fairy Falls 步道、Midway、Norris、Firehole Lake Drive 就基本没有；' +
        'Madison 不在基站名单里，按无信号准备。</strong>' +
        '免费公共 Wi-Fi 本区只有 <strong>Old Faithful Visitor Education Center</strong> 一处（开到 10/31）。' +
        '<strong>务必离线下载全园地图与 NPS App，导航会在半路失效。</strong>园内没有公共 EV 快充。</p>' +
        '<p><strong>雪与温度：9 月下旬和 10 月下旬是两个季节。</strong>' +
        'Old Faithful 一带海拔 7,365 英尺（2,245 米），NOAA 1991–2020 常年值：' +
        '<strong>9 月均高 18 °C／均低 −1 °C；10 月均高 10 °C／均低 −6 °C，10 月常年降雪 9 英寸</strong>，' +
        '且 <strong>10 月平均有 28.2 个夜晚在冰点以下（一共 31 天）</strong>——' +
        '十月清晨结冰不是可能性，是默认值。' +
        '实际区间：9 月下旬白天 14–20 °C、夜间 −2 至 +2 °C；10 月下旬白天 5–10 °C、夜间 −8 至 −3 °C。' +
        '<strong>10 月的降雪会造成临时封路，而且往往只封几小时到一天。</strong></p>' +
        '<p><strong>所以每一个开车日的早上，出门前都要看一次路况</strong>——' +
        '这不是保守，而是因为临时封闭不会提前通知，而你可能已经开了 40 分钟。' +
        '<strong>关于雪链，NPS 的官方口径很干脆：' +
        '<em>「If conditions in Yellowstone are bad enough to require tire chains, we generally close the roads ' +
        'until it\u2019s safe to travel.」</em>' +
        '也就是说园内不存在「必须挂链才能走」的情形——需要挂链的时候路已经关了。</strong>' +
        '但园外的进出路（US-191、US-20、US-89）冬季可能要求雪胎，' +
        '<strong>北门至 Cooke City 那条全年路段在冬季通常要求雪胎、必要时要求链条</strong>；本区用不到，但绕北环要考虑。</p>'
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
        '清晨端着一杯咖啡上栈道是违规的</li>' +
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
        '高浓度下嗅觉会疲劳甚至麻痹，<strong>不要用「还闻得到吗」来判断安全</strong>。</p>' +
        '<p><strong>野生动物的法定最小距离：与熊、狼、美洲狮 100 码（91 米）；' +
        '与其他所有动物、包括野牛与麋鹿 25 码（23 米）。这是可被引用处罚的规定，不是建议。</strong></p>' +
        '<ul>' +
        '<li><strong>野牛发情期（rut）在 7–8 月，秋季已经结束</strong>，所以本季不会遇到公牛互斗追人那种局面。' +
        '但野牛全年都在，Fountain Paint Pot 与 Midway 的栈道旁常有牛群卧着——' +
        '<strong>挡路就原路退回，不要绕，也不要从栈道边下去</strong></li>' +
        '<li><strong>麋鹿（elk）的 rut 在 9 月最活跃</strong>，延续到 10 月上旬。' +
        '发情期的公麋鹿具攻击性、会主动逼近人与车；鸣叫（bugle）是极好的录音素材，' +
        '<strong>但不要顺着声音去找它</strong>。本区的湖畔与 Madison 一带都可能遇到</li>' +
        '<li><strong>熊在 9–10 月处于 hyperphagia（超量进食期）</strong>，为冬眠储脂。' +
        'NPS 口径是这段时间熊<strong>每天可增重 3 磅以上</strong>，觅食时间更长、更大胆、对干扰的容忍度更低。' +
        '首选食物是 whitebark pine 松子，歉收年会更多转向有蹄类尸体。' +
        '<strong>NPS 明确写明熊乡的范围 <em>「from the trails in the park\u2019s backcountry to the boardwalks ' +
        'and parking lots around Old Faithful」</em>——包括停车场与栈道</strong></li>' +
        '</ul>' +
        '<p><strong>防熊喷雾：本区必带，尤其是 Fairy Falls 步道、Firehole Lake Drive 的步行段与 Observation Point。</strong>' +
        '握在手里或挂在腰带／胸挂上，<strong>放在背包里等于没带</strong>。' +
        '熊冲锋时站住不动，等它进到 <strong>60 英尺（18 米）以内</strong>再喷。' +
        '<strong>园内租借：Old Faithful 的 Bear Spray Rental Yurt 最后营业日 10/3</strong>' +
        '（Canyon 的 kiosk 到 10/10，但不在本区）。' +
        '<strong>10/3 之后只能自带，或在 West Yellowstone、Gardiner 的店里买（约 $50–60）；' +
        '喷雾不能带上飞机，托运也不行，只能落地后购买。</strong>' +
        '2026 年 5 月 4 日 Old Faithful 西北侧就有两名徒步者被带崽母灰熊袭击致伤，相关临时封闭已于事后解除。</p>'
    },
    {
      type: 'tip',
      title: '蒸汽 vs 颜色：本区的核心矛盾，以及它的物理',
      html: '<p><strong>这是本子地区最重要的一条摄影知识，值得先把物理讲清楚，因为结论完全反直觉。</strong></p>' +
        '<p>热泉表面的水在 70–95 °C，紧贴池面那层空气几乎是饱和的。' +
        '这团热湿空气一离开水面就与环境空气混合，' +
        '<strong>而混合后的水汽量往往超过环境温度下能容纳的上限，多出来的部分立刻凝结成微小水滴——那就是白色蒸汽。</strong>' +
        '关键在于「环境温度下能容纳多少水汽」这个量随温度陡降：按 Magnus 公式算饱和水汽压，' +
        '<strong>+20 °C 是 2.34 kPa，+10 °C 是 1.23 kPa，0 °C 是 0.61 kPa，−5 °C 是 0.42 kPa，−10 °C 只剩 0.29 kPa。</strong></p>' +
        '<p><strong>换成人话：同一池热水、同样的蒸发量，气温从 +10 °C 降到 −10 °C，' +
        '空气能「藏住」的水汽只剩原来的约 23%，其余全部变成可见的白雾。</strong>' +
        '这就是为什么 8 月中午在 Grand Prismatic 能看到整圈颜色，而 10 月同一时刻可能只看到一锅奶白。' +
        '<strong>不是天气不好，是热力学。</strong></p>' +
        '<p><strong>规则一：蒸汽是礼物的场合 —— 冷、静、低角度光，只拍蒸汽题材。</strong></p>' +
        '<ul>' +
        '<li>清晨（民用曙光到见光后 90 分钟）低角度阳光穿过厚蒸汽会形成通透的体积光，' +
        '<strong>这是本区上限最高的一类画面</strong>：Old Faithful 冷晨第一喷、Norris 的 Porcelain Basin、' +
        'Midway 的橙色径流沟与 Excelsior、Fountain Paint Pot 的 bobby socks trees、' +
        'West Thumb 贴着湖面横漫的蒸汽、Great Fountain 的硅华台阶</li>' +
        '<li>判断标准：<strong>看前夜预报。夜间最低 −5 °C 以下且晴朗无风，第二天早上必须出门</strong>；' +
        '暖夜或有风的早上蒸汽会稀薄很多，那种早晨反而应该去拍颜色</li>' +
        '<li>曝光通则：<strong>蒸汽一旦过曝就再也救不回来。</strong>' +
        '逆光时点测最亮的蒸汽给 +1 到 +1.7 EV 让主体压成剪影，' +
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
        '<li><strong>所以正确的做法不是「正午」，而是「正午之后的那一小时半」</strong>：' +
        '取太阳高度窗口的后半段，牺牲 1–2° 的太阳高度换几度气温，蒸汽会明显更薄。' +
        '具体钟点见 Grand Prismatic 条目</li>' +
        '</ul>' +
        '<p><strong>规则三：风比气温更能决定成败，而风向决定你站哪一边。</strong>' +
        '<strong>8–15 mph 的风能在 5 °C 的上午把一个池子完全吹开；一个无风的 10 °C 上午反而可能整天糊死。</strong>' +
        '实操两条：<strong>①站在池子的上风侧</strong>——蒸汽被吹向远离你的一边，' +
        '你看到的是清爽的池面而不是一堵墙；' +
        '<strong>②有风的日子优先安排颜色题材，无风的冷早晨优先安排蒸汽题材</strong>，' +
        '把 Grand Prismatic Overlook 排成机动项而不是固定日期。' +
        '出发前看 <a href="https://www.nps.gov/yell/learn/photosmultimedia/webcams.htm" target="_blank" rel="noopener">Old Faithful 的 NPS 网络摄像头</a>' +
        '就能直接看出当天的蒸汽状况，比任何预报都准。</p>' +
        '<p><strong>器材后果：蒸汽是在持续给你的前镜片加湿。</strong>' +
        '站在喷气口下风侧几十秒镜片就花了，而低温下擦不干。做法：' +
        '<strong>装一片 UV／保护镜专门当挡雾片（脏了整片换下来擦，不要反复擦镀膜主镜）、' +
        '装上遮光罩（能挡掉相当一部分斜向来雾）、随身四块以上超细纤维布轮换、不拍时镜头朝下并盖盖。</strong>' +
        '每隔一两分钟擦一次，拍完立刻回看——水膜在 LCD 上看不出来，但会在逆光里变成一片雾状光斑。</p>'
    },
    {
      type: 'info',
      title: '日出日落钟点、山脊遮挡修正、低温与器材',
      html: '<p>全窗口均为 <strong>MDT（UTC−6）</strong>。' +
        '<strong>2026 年美国夏令时于 11 月 1 日（周日）02:00 结束——这一天在道路关闭日 10/31 之后，' +
        '整个行程不会遇到调表。</strong>若你在园外多待到 11/1，那天钟表回拨一小时。</p>' +
        '<p>下表按 <strong>Old Faithful（44.4605°N, −110.8281）</strong>计算；' +
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
        '好处是 10 月下旬 07:47 才日出，不必凌晨四点起床。</p>' +
        '<p><strong>但上表是「平地平线」时刻，本区实际可用的直射光比它短得多，这一点必须单独说。</strong>' +
        'Yellowstone 位于山地时区的西缘（Old Faithful 在西经 110.83°，而 MDT 的标准经线是西经 105°），' +
        '所以太阳正午被推到 <strong>13:05–13:15</strong>；' +
        '同时它在海拔 2,245 米的高原上、四周被山脊围着。' +
        '<strong>Firehole River 走廊西侧是 Madison Plateau，山脊比谷底高约 250–320 米、距离 4–6 公里，' +
        '相当于把西边的地平线整体抬高了大约 3–5°。</strong></p>' +
        '<table><thead><tr><th>日期</th><th>表上日落</th><th>太阳降到 5°</th><th>太阳降到 3°</th><th>晨间：太阳升到 3°</th></tr></thead><tbody>' +
        '<tr><td>9/25</td><td>19:17</td><td><strong>18:45</strong></td><td><strong>18:56</strong></td><td>07:36（日出后 22 分）</td></tr>' +
        '<tr><td>10/12</td><td>18:46</td><td>18:13</td><td>18:24</td><td>07:57（日出后 23 分）</td></tr>' +
        '<tr><td>10/22</td><td>18:29</td><td><strong>17:55</strong></td><td><strong>18:07</strong></td><td>08:10（日出后 23 分）</td></tr>' +
        '<tr><td>10/31</td><td>18:15</td><td>17:40</td><td>17:53</td><td>08:22（日出后 23 分）</td></tr>' +
        '</tbody></table>' +
        '<p><strong>实用结论：直射光实际上比表上的日落早 20–35 分钟就结束，早上也比表上的日出晚 20–25 分钟才开始。</strong>' +
        '也就是说 10 月 22 日在 Upper Geyser Basin，' +
        '<strong>最后一缕打在间歇泉上的暖光大约在 17:55–18:07，而不是 18:29</strong>；' +
        '而 <strong>07:47「日出」时盆地还是一片蓝调，真正见光要等到 08:10</strong>。' +
        '<strong>好消息是这段「已经天亮但还没有直射光」的时间正是拍蒸汽与蓝调的最佳窗口，不算损失，' +
        '但你必须按它安排出发时间而不是按日落表。</strong>' +
        '（山脊角度为按已知地形高差与距离推算，非实测，不同机位有 ±10 分钟偏差。' +
        '<strong>West Thumb 与 Fishing Bridge 的西侧是开阔湖面、几乎无遮挡，那两处的日落接近表上数值</strong>；' +
        '而 Fishing Bridge 朝东是 25–40 公里外的 Absaroka 山脊，约抬高 1.5°，' +
        '晨间见光只比表上日出晚 10 分钟上下。）</p>' +
        '<p><strong>低温对器材的三个后果，按重要性排序：</strong></p>' +
        '<ul>' +
        '<li><strong>电池</strong>：锂电池在 −5 至 −10 °C 下可用容量约剩标称的 40–60%，' +
        '而且是「突然归零」不是线性下降。<strong>带 3–4 块以上，全部贴身放在内层口袋</strong>；' +
        '换下来的冷电池捂热后通常还能再撑一轮，不要当场丢掉</li>' +
        '<li><strong>结露，而且本区比别处严重</strong>：你一天里会反复从 −5 °C 的栈道钻进 20 °C 的 Old Faithful Inn 大堂、' +
        'Snow Lodge 餐厅或开着暖风的车。' +
        '<strong>正确做法是进门／上车之前就把整机连镜头装进密封袋挤出空气，室内静置 30–60 分钟再取出</strong>；' +
        '反方向（暖到冷）没有这个问题。' +
        '<strong>绝对不要在车里开暖风对着相机吹</strong>，那是最快制造内部结露的方式</li>' +
        '<li><strong>木栈道在天亮前结冰</strong>：热泉径流淌上木板再冻住，形成头灯下看不见的透明薄冰。' +
        '<strong>一副轻量冰爪（microspikes）在本区的回报率比多带一支镜头高</strong>，' +
        '尤其是摸黑爬 Observation Point 或走 Fairy Falls 步道最后那段土坡</li>' +
        '</ul>' +
        '<p><strong>门票。</strong>私家车 7 日票 <strong>$35</strong>，America the Beautiful 年票 $80，' +
        '<strong>2026 年没有车辆定时预约制度</strong>。' +
        '关键的 2026 年新规：<strong>16 岁及以上的非美国居民须在标准门票之外另付 $100/人 的 nonresident fee，' +
        '但持 Annual Pass 或 America the Beautiful Pass 入园者豁免</strong>——' +
        '所以那张年票在本行程里每人省的是 $135 而不是 $35。' +
        '持卡人须本人在场并出示带照片证件，收据与截图不接受。' +
        '<strong>从南门进出会经过 Grand Teton，那是另一个公园、另一份门票，年票同样覆盖。</strong></p>'
    }
  ],
  spots: [
    {
      id: 'ys-gb-norris',
      n: 1,
      name: '诺里斯间歇泉盆地',
      en: 'Norris Geyser Basin',
      score: 4.5,
      tldr: '全园最热、最酸、变化最快的盆地，栈道无封闭；Porcelain Basin 的白色酸壳是最好的抽象素材，但 Steamboat 基本别指望。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '栈道正常开放', c: 'free' },
        { t: '硫化氢风险', c: 'risk' },
        { t: '博物馆与厕所 10/3 关', c: 'risk' },
        { t: '两条环线共 2.25 英里', c: 'paid' }
      ],
      highlights: [
        '<strong>Yellowstone 最热、最酸、也最不稳定的热区。</strong>NPS 原话：这里许多热泉与喷气孔的温度' +
          '<strong>超过沸点（200 ºF / 93 ºC）</strong>，而且<strong>绝大多数水体是酸性的，包括极为罕见的「酸性间歇泉」</strong>。' +
          '它坐落在三条大断层与 64 万年前 Yellowstone Caldera 环形断裂的交汇处，' +
          '有热液活动的证据至少可追溯 <strong>11.5 万年</strong>',
        '<strong>这里每年都会「换脸」，NPS 为此有个专有词叫 thermal disturbance。</strong>' +
          '清澈的池子会突然变浑、剧烈沸腾，甚至临时变成间歇泉；原有的间歇泉停喷或改变周期；新泉眼凭空出现。' +
          '一次扰动持续几天到一周多。<strong>摄影上的直接含义：你在网上看到的任何一张 Norris 照片都可能已经不存在了</strong>，' +
          '到场之前不要把构图想死',
        '<strong>Steamboat Geyser 在这里，世界现存最高的活间歇泉（大喷可达 300–400 英尺／91–122 米）。' +
          '但现实预期是：你看不到。</strong>' +
          'NPS 自己的口径就是 <em>「Steamboat\u2019s major eruptions are unpredictable and often many years apart」</em>；' +
          'GeyserTimes 记录的最近一次大喷发是 <strong>2026 年 2 月 27 日 19:01</strong>，' +
          'USGS 3 月月度简报明确称这是<strong>「2026 年的第一次 Steamboat 喷发」</strong>，' +
          '此后各月简报持续记录为 minor activity。' +
          '<strong>它频繁得多的「minor phase」只有 10–40 英尺（3–12 米）。</strong>' +
          '正确做法是<strong>把它当成一个巨大的喷气孔来拍——它两个泉眼持续吐出的蒸汽柱在逆光下本身就很可观</strong>，' +
          '喷发当中彩票',
        '<strong>2026 年 Norris 本身有两条新鲜变化值得知道。</strong>' +
          '其一，<strong>Echinus Geyser（世界最大的酸性间歇泉，pH 约 3.5）于 2026 年 2 月 7 日喷发，' +
          '这是它自 2020 年 12 月以来的第一次</strong>，此后到 2 月下旬进入频繁喷发期；' +
          '其二，USGS 3 月简报报告 <strong>Norris 出现了一处新的热泉，附带一个 2024 年末形成的爆炸坑</strong>，' +
          '同时那个从 2025 年 7 月开始的 Norris 地面抬升异常在 <strong>2026 年初已停止或暂停</strong>。' +
          '<strong>这类变化正是来这里的理由——它是全园唯一一个「每年都不一样」的盆地</strong>',
        '<strong>两条环线的角色完全不同。Porcelain Basin</strong>' +
          '（NPS 口径 <strong>3/4 英里／1.2 公里</strong>，裸地加木栈道）是一片几乎无树的白色酸性荒原，' +
          '<strong>视觉上是全园最「外星」的地方</strong>；' +
          '<strong>Back Basin</strong>（<strong>1.5 英里／2.4 公里</strong>，林间穿行）是 Steamboat、' +
          'Echinus、Emerald Spring 所在的那条。NPS 给的总游览时长是 30–90 分钟，走全两条要 1.5–2 小时',
        '<strong>颜色直接对应水温，拍局部时这套关系很有用。</strong>' +
          '<strong>黄色含硫（60–83 °C，也就是那股臭鸡蛋味的来源）、红棕色含铁与高浓度砷（60 °C 以下）、' +
          '翠绿色藻垫（56 °C 以下）、墨绿至黑色的 Zygogonium 藻（更凉）。</strong>' +
          '换句话说你拍的每一道彩色径流沟都是一条温度梯度'
      ],
      photo: '风光 <strong>4.5/5</strong>，抽象／局部 <strong>5/5</strong>，人像 <strong>2/5</strong>。' +
        '<strong>Porcelain Basin 那片白色酸壳配彩色径流是全园最强的抽象素材</strong>，' +
        '而且它是本区唯一一个广角与长焦都成立的盆地。' +
        '扣分在于<strong>没有一个可靠的标志性单体可拍</strong>（Steamboat 基本不喷），' +
        '以及博物馆 10 月 3 日就关门，之后连厕所都没有。',
      shots: [
        {
          name: 'Porcelain Basin 观景平台俯瞰 —— 主机位',
          park: [44.72622, -110.70074],
          view: [44.72828, -110.70397],
          desc: '从博物馆西侧下坡即到，<strong>是全区唯一能一眼收下整片白色酸壳荒原的高点</strong>。' +
            '<strong>最佳时段 07:35–09:00（9 月下旬）／08:10–09:30（10 月下旬）</strong>——' +
            '注意这里用的是「盆地真正见光」的时刻而不是表上的日出' +
            '（9/25 日出 07:13 但直射光约 07:35 才到；10/22 日出 07:47、见光约 08:10）。' +
            '此时低角度阳光斜射，<strong>蒸汽被打亮成一片体积光，同时白壳还没被顶光拍平</strong>。' +
            '<strong>16–24mm 拍全景纵深</strong>（前景放彩色径流沟、中景蒸汽带、远景林线）；' +
            '<strong>70–200mm 压缩</strong>把七八处喷气孔的蒸汽柱叠成一片，是这里最容易出片的做法。' +
            '<strong>正午顶光会把白壳拍成一片死白、反差全无，不要在 11:00–14:00 拍这里</strong>——' +
            '这与本区其他「颜色题材」的规则正好相反，因为这里的主体是形态与蒸汽，不是水下的颜色。' +
            '<strong>偏振镜在这里要慎用</strong>：它会削掉蒸汽的通透感与体积。'
        },
        {
          name: 'Back Basin —— Emerald Spring、Echinus 与 Steamboat 的蒸汽柱',
          park: [44.72622, -110.70074],
          view: [44.72565, -110.70427],
          desc: '<strong>Emerald Spring（44.72565, −110.70427）是这条环线上最值得单拍的一池</strong>：' +
            '池底硫黄的黄叠加深水的蓝，成了罕见的祖母绿。' +
            '<strong>35–85mm 俯视构图，正午前后颜色最饱和</strong>——' +
            '这是本条目里唯一遵守「颜色规则」的机位，因为它是个小池子、蒸汽量不足以毁掉画面。' +
            '再往南约 300 米是 <strong>Steamboat（44.72350, −110.70303）</strong>，' +
            '<strong>即使不喷，用 70–200mm 拍它两个泉眼吐出的蒸汽柱形态变化也完全成立</strong>，清晨逆光最好。' +
            '<strong>Echinus Geyser 在 Steamboat 以东约 200 米</strong>，2026 年 2 月刚从五年多的休眠中醒来——' +
            '<strong>到场先看栈道边的解说牌与 ranger 的临时告示，值不值得等要看当天的状态</strong>。' +
            '这条环线在林间，光线更碎，<strong>阴天反而比晴天好拍</strong>。'
        },
        {
          name: 'Norris Geyser Basin Overlook —— 不用下车的远景',
          view: [44.74121, -110.71219],
          desc: '在 Grand Loop Road 上、盆地以北约 1.8 公里的一处路边高点，' +
            '<strong>是唯一不用下车就能远眺整个 Norris 盆地蒸汽云的机位</strong>。' +
            '<strong>100–300mm 压缩「一整片林子在冒烟」的画面</strong>，' +
            '也是万一 Steamboat 喷发时最安全的远观位置（历史照片多从这里拍）。' +
            '<strong>清晨逆光效果最好，下午侧逆光也可用。</strong>' +
            '这个点的另一个实际用处：<strong>开车经过时先在这里看一眼当天的蒸汽厚度，' +
            '再决定要不要下去走两条环线</strong>——蒸汽太薄的暖天，Porcelain Basin 的吸引力会掉一半。' +
            '（此处为路侧观景带，<strong>无独立停车面数据，故省略 park 字段</strong>。）'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>',
        hours: '<strong>盆地本身没有门禁、全天可入</strong>' +
          '（NPS 步道页标注 Season: Spring, Summer, Fall；Time of Day: Any Time）。' +
          '<strong>已核实：2026 年秋季 Norris 的木栈道没有公布的封闭段</strong>，' +
          'NPS 步道页只有一条注记——' +
          '<em>「Thermal activity throughout this entire area. Stay on the boardwalks and designated trails at all times.」</em>' +
          '<strong>Norris Geyser Basin Museum 与 Norris Park Store 最后营业日均为 10/3</strong>，' +
          '之后厕所与讲解台全部关闭。' +
          '所在的 Mammoth ↔ Norris、Norris ↔ Canyon、Madison ↔ Norris 三段公路 2026 年均通车至 <strong>10/31</strong>，' +
          '且这三段本年度无施工项目',
        parking: '博物馆东侧的免费停车场，<strong>NPS 标注 143 个车位 + 17 个加长车位</strong>，' +
          '夏季常满并有 ranger 指挥，<strong>10 月完全不紧张</strong>。' +
          '本条采用 OSM 停车面中心 <strong>44.72622, −110.70074</strong>' +
          '（<strong>NPS 该页同时给出的一组停车场经纬度落在 Old Faithful，与 Norris 不符，疑为页面错误，故不采用</strong>）。' +
          '注意<strong>停车场本身是已知的地热破坏点之一，路面有沉降坑，慢行</strong>',
        walk: '停车场到 Porcelain Basin 观景平台约 <strong>150 米／3 分钟</strong>，' +
          '但<strong>从博物馆下到盆地那段坡陡且不平</strong>（NPS 无障碍说明明确提示）。' +
          '<strong>Porcelain Basin 环线 3/4 英里／1.2 公里；Back Basin 环线 1.5 英里／2.4 公里；' +
          '两条走全约 2.25 英里／3.6 公里、1.5–2 小时。</strong>路面是木栈道、铺装路与土路的混合'
      },
      notes: [
        '<strong>硫化氢在这里是真问题，而且冷晨最危险。</strong>' +
          '2004 年一个「异常寒冷且无风」的夜晚过后，Norris 有<strong>五头野牛因 CO₂ 与 H₂S 在近地面积聚而死</strong>。' +
          '两种气体都比空气重、往低处沉——<strong>而你想拍的那种无风冷晨正好是最容易积气的条件</strong>。' +
          '眼刺痛、头痛、恶心就立刻往高处、往上风走',
        '<strong>硫化氢会让银饰发黑，也会腐蚀相机的电子触点。</strong>' +
          '离开后把器材从包里拿出来通风，别闷一整晚；机身与镜头筒用微湿的布擦一遍再擦干',
        '<strong>Norris 的木栈道历史上因地面过热被烧焦而整段拆改</strong>' +
          '（2018 年 Porcelain Basin 就有一段整体挪了 3 英尺）。' +
          '<strong>现场如果有围挡，那是真的危险，不要绕过去</strong>',
        '这一带是灰熊活动区，10 月是 hyperphagia 高峰。' +
          '<strong>Norris 没有喷雾租借点</strong>（本区唯一的租借亭在 Old Faithful，10/3 关门），进园前自备',
        '<strong>Norris 到 Old Faithful 单程约 30 英里／1 小时（经 Madison），到 Canyon 约 12 英里。</strong>' +
          '<strong>不要把 Norris 的日出和 Old Faithful 的日出排在同一天</strong>——' +
          '10 月下旬两地见光时间只差 3 分钟，你不可能都赶上',
        '<strong>10/3 之后这里没有厕所、没有饮水、没有讲解，也没有手机信号。</strong>' +
          'Madison 一带同样无信号，最近可靠的联网点是 Old Faithful Visitor Education Center',
        '这里的水是酸性的，<strong>蒸汽冷凝水落在镜片镀膜与三脚架金属件上会留痕</strong>，不要让它自然干掉'
      ],
      images: [
        { url: 'img/yellowstone-national-park-wy-usa-norris-geyser-basin-2022-26-c0bc7022.jpg',
          cap: 'Porcelain Basin 的白色酸壳荒原 · Dietmar Rabich / CC BY-SA 4.0' },
        { url: 'img/steam-shadows-norris-geyser-basin-36f97b50-1dd8-b71b-0b68-82-9e254fb2.jpg',
          cap: '蒸汽在地面投下的影子，冷晨的典型状态 · Neal Herbert / NPS / Public domain' },
        { url: 'img/steamboat-geyser-steam-phase-viewed-from-the-norris-geyser-b-dd5ae4e3.jpg',
          cap: '从 Norris Overlook 远观 Steamboat 的蒸汽相 · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-gb-firehole-canyon-drive',
      n: 2,
      name: '火洞峡谷车道与 Firehole Falls',
      en: 'Firehole Canyon Drive & Firehole Falls',
      score: 3.5,
      tldr: '已核实：单行道、由北向南、全长 2.21 英里，正常开放。40 英尺瀑布配 800 英尺厚的流纹岩崖壁，20 分钟拍完。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '单行道（南下）', c: 'free' },
        { t: '禁大巴／拖挂／房车', c: 'risk' },
        { t: '车位极少', c: 'risk' },
        { t: '无单独公布的关闭日', c: 'risk' }
      ],
      highlights: [
        '<strong>方向与长度已核实（OSM 路网实测）：单行道，从北向南通行，全长 3,555 米／2.21 英里，沥青路面。</strong>' +
          '北端入口在 <strong>44.63888, −110.85856</strong>（Madison Junction 以南约 0.6 英里的 Grand Loop Road 上），' +
          '南端出口在 <strong>44.61728, −110.85500</strong>。' +
          '<strong>也就是说从 Madison 往 Old Faithful 方向开是顺路的；从 Old Faithful 北上则会先遇到出口、进不去</strong>，' +
          '必须开到 Madison Junction 再折回来（约 10 分钟）',
        '<strong>Firehole Falls 落差约 40 英尺（12 米）</strong>，Firehole River 在这里切进一段' +
          '<strong>厚达 800 英尺（240 米）的流纹岩熔岩流</strong>。' +
          '<strong>这是本子地区唯一一处「峡谷 + 瀑布 + 深色岩壁」的组合</strong>，' +
          '色调与遍地白壳的间歇泉盆地形成强烈对比——' +
          '在一整天都在拍白色硅华与蒸汽之后，它是唯一能换口气的题材',
        '<strong>Compendium 明文禁止大巴、拖挂车与房车驶入</strong>，限速 <strong>25 mph</strong>，' +
          '路窄、可停车的路肩非常少。<strong>这里最大的执行障碍不是能不能进，是能不能停</strong>',
        '<strong>关于那个游泳洞：Firehole Swim Area 目前关闭。</strong>' +
          'NPS Current Conditions 页原文 <em>「Closed. Estimated opening date: no earlier than late summer/early fall.」</em>' +
          '<strong>本窗口内是否重开未能确认</strong>，但对摄影没有影响——' +
          '真正的影响是那一段的停车位也用不了，而它本来是这条路上最大的一片路肩。' +
          '（顺带说一句：10 月的水温在个位数摄氏度，就算开了也不该下水）'
      ],
      photo: '风光 <strong>3.5/5</strong>，长曝水流 <strong>4/5</strong>，人像 <strong>2/5</strong>。' +
        '<strong>加分项是它反规则：峡谷东西两侧崖壁很高，直射光只在中午前后短暂进入谷底，' +
        '所以阴天与清晨的全阴影状态反而是这里最好的光线</strong>——' +
        '这让它成为「颜色题材还没到点、蒸汽题材已经过点」那段空档里最合适的去处。' +
        '扣分在于规模不大、机位单一、且几乎没有可站位的空间。',
      shots: [
        {
          name: 'Firehole Falls 路边观景点',
          park: [44.62947, -110.86284],
          view: [44.62881, -110.86333],
          desc: '瀑布正对面的路肩观景点，下车走几步就到。' +
            '<strong>最佳时段：阴天全天，或 09:00 之前的全阴影状态。</strong>' +
            '理由不是「光好」而是「光不好」：<strong>峡谷窄、崖壁高，直射光进来后水面高光会直接溢出，' +
            '而你要的是均匀漫射光让水流有层次、让深色岩壁的纹理出来</strong>。' +
            '<strong>24–70mm</strong> 收瀑布加两侧岩壁；' +
            '<strong>ND8–ND64 配 f/11，快门 1/2–2 秒</strong>做水流丝化，' +
            '或反过来 <strong>1/500 以上</strong>冻结水花颗粒——秋季水量小，两种都成立。' +
            '<strong>10 月是枯水期，水量比夏天小得多，不要指望汹涌</strong>，' +
            '但好处是水雾少、镜头不会糊。' +
            '<strong>路肩太窄不适合架三脚架，栏杆是可用的稳定支点。</strong>'
        },
        {
          name: '峡谷中段路侧崖壁 —— 真正值得拍的其实是岩壁',
          view: [44.62805, -110.86076],
          desc: '整条单行道穿行在流纹岩壁之间，' +
            '<strong>柱状节理与氧化色带比那道 40 英尺的瀑布更有看头</strong>。' +
            '<strong>35–85mm 拍岩壁纹理的抽象。</strong>' +
            '<strong>日落前一小时西侧崖壁被暖光照亮、东侧仍在阴影里，是唯一有明确层次的时刻</strong>——' +
            '按本区的山脊修正，实际时刻是 <strong>9/25 约 17:45–18:45、10/22 约 16:55–17:55</strong>' +
            '（不是表上的 19:17／18:29）。' +
            '<strong>此段几乎无处停车：看到路肩就停，不要在道上慢行找位置</strong>，' +
            '单行道上后车看不见你、也没有超车空间。' +
            '（坐标取自 OSM 路侧点，非正式停车面，故省略 park 字段。）'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>',
        hours: '无门禁。<strong>NPS 没有为 Firehole Canyon Drive 单独公布 2026 年季节性关闭日期</strong>——' +
          '按 2026 版 Superintendent\u2019s Compendium 的通则' +
          '（<em>「Starting November 1st ... the Grand Loop Road and park entrance roads are closed to wheeled ' +
          'motor vehicle use」</em>），它应与主环路同步在 <strong>10/31 结束通车</strong>；' +
          '<strong>但这一点未能从官方渠道单独确认</strong>，且它是低海拔窄路、遇早雪临时封闭完全可能。' +
          '<strong>它也不在 NPS 实时路况地图上</strong>，只能打 (307) 344-2117 或到访客中心问',
        parking: '<strong>没有正式停车场，只有若干极小的路肩</strong>。瀑布处那片最大，也只容几台车。' +
          '<strong>禁止大巴、拖挂与房车进入</strong>',
        walk: '停车即到，全程步行不超过 30 米。<strong>开完整条路加拍摄约 20–40 分钟</strong>'
      },
      notes: [
        '<strong>单行道方向不可逆，这是最容易踩的坑。</strong>' +
          '从 Old Faithful 北上时你会先遇到南端出口，' +
          '<strong>必须继续开到 Madison Junction 再从北端进，来回多花约 10 分钟</strong>',
        '限速 25 mph，路面窄、有急弯，<strong>秋季清晨背阴段可能结冰</strong>——' +
          '这条路一天里大部分时间在崖壁阴影中，霜化得比别处慢',
        '<strong>Madison 一带没有加油站、也基本没有手机信号</strong>；' +
          'Madison Information Station 最后营业日 <strong>10/3</strong>，Madison Campground 开到 <strong>10/17</strong>。' +
          '此后最近的厕所在 Old Faithful（16 英里）或 West Yellowstone（14 英里）',
        '<strong>West Entrance Road（West Yellowstone–Madison）2026 年 8/17 至 9 月初有每晚 21:30–05:00 的' +
          '钻探取芯作业，最多 15 分钟延误。</strong>' +
          '9 月下旬进园时应已结束，但如果你要在清晨从 West Yellowstone 出发，出发前确认一次',
        '这条路上没有热区，<strong>是本区唯一一处不需要担心薄壳与硫化氢的点位</strong>；' +
          '但它在 Firehole River 边的林子里，秋季有麋鹿与野牛，路窄且视线被弯道挡住，慢开',
        '顺路关系：<strong>北端入口离 Madison Junction 只有 0.6 英里，南端出口离 Fountain Paint Pot 约 5 英里</strong>，' +
          '串在「Madison → Fountain Paint Pot → Midway → Old Faithful」这条线上零成本'
      ],
      images: [
        { url: 'img/firehole-falls-15-june-2023-firehole-river-yellowstone-wyomi-3e2eee29.jpg',
          cap: 'Firehole Falls 正面视角 · James St. John / CC BY 2.0' },
        { url: 'img/firehole-river-firehole-canyon-yellowstone-wyoming-usa-10-94075de8.jpg',
          cap: '峡谷段的流纹岩崖壁与柱状节理 · James St. John / CC BY 2.0' },
        { url: 'img/winter-at-firehole-falls-24232310646-922c8442.jpg',
          cap: '低温季节的 Firehole Falls · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-gb-fountain-paint-pot',
      n: 3,
      name: '喷泉泥浆池与火洞湖车道',
      en: 'Fountain Paint Pot & Firehole Lake Drive',
      score: 4,
      tldr: '已核实：Firehole Lake Drive 因路面被地热烤化，2026 年对机动车关闭、仅可步行与骑行——Great Fountain 得走 1.5 公里进去。Fountain Paint Pot 栈道正常。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: 'Firehole Lake Drive 禁车', c: 'risk' },
        { t: 'Paint Pot 栈道正常', c: 'free' },
        { t: '泥浆池秋季最稠', c: 'free' },
        { t: '需走 3 公里往返', c: 'paid' }
      ],
      highlights: [
        '<strong>这是全园唯一一处能在同一条 0.5 英里栈道上看齐四类热液特征的地方</strong>：' +
          '热泉（Celestine、Silex）、间歇泉（Fountain、Clepsydra、Jet、Spasm）、' +
          '泥浆池（Fountain Paint Pot 本体）与喷气孔（Red Spouter 的季节性变身）。' +
          'NPS 步道页给的是 <strong>0.5 英里／0.8 公里的木栈道环线，全程无障碍</strong>，' +
          '游览 30 分钟到 1 小时',
        '<strong>泥浆池的稠度随季节变化，而秋季是它最好看的时候。</strong>' +
          'NPS 的解释很直接：泥来自酸性蒸汽把流纹岩分解成的黏土，' +
          '<strong>春季融雪多、泥被稀释成汤；到夏末与秋季水少了，泥变稠，才会出现那种「咕嘟一声炸开一个泡」的形态</strong>。' +
          '换句话说 10 月来这里拍泥浆池是占了便宜的',
        '<strong>Clepsydra Geyser 几乎持续喷发，是本区最可靠的间歇泉题材。</strong>' +
          '它的名字来自希腊语「水钟」，因为它曾经精确到每三分钟一次；' +
          '<strong>1959 年 Hebgen Lake 7.3 级地震之后它变成了近乎不间断喷发，至今如此</strong>。' +
          '<strong>你不需要等它——这在 Yellowstone 是很罕见的待遇</strong>',
        '<strong>Firehole Lake Drive 的 2026 年状态是这一条目里最要紧的信息，而它不在任何实时路况地图上。</strong>' +
          'NPS Current Conditions 页明确写：' +
          '<em>「Firehole Lake Drive is closed to motorized vehicles due to hydrothermal heat damaging the road surface. ' +
          'Foot and bicycle traffic is allowed.」</em>' +
          '<strong>也就是说地热把沥青路基烤软塌了，2026 年全季对汽车关闭，但人和自行车可以进。</strong>' +
          '这条 <strong>2 英里的单行道（自南向北）</strong>上有 Great Fountain Geyser、White Dome Geyser、' +
          'Pink Cone Geyser 与 Firehole Lake——' +
          '<strong>结果就是：这几个点从「开车到路边就能拍」变成了「走 1–1.5 公里单程进去」。</strong>' +
          '好处是它现在几乎没人',
        '<strong>Great Fountain Geyser 是这条路上真正的目标，也是本区上限最高的一张照片。</strong>' +
          '它从一圈层层叠叠的硅华台阶（sinter terraces）中央喷出，' +
          '<strong>平常 75–100 英尺，偶发的「superburst」可达 200 英尺</strong>；' +
          'NPS 给的预报间隔是 <strong>约 11 小时 30 分 ± 2 小时</strong>——' +
          '<strong>误差窗口四小时宽，而且现在你还得走进去</strong>，' +
          '所以现实做法是：先在 Old Faithful Visitor Education Center 问当天预报时间，' +
          '只有当它落在日落前后一两小时内才值得专程去。' +
          '<strong>那些「喷泉映在台阶浅水里、背后是紫红色晚霞」的经典照片，' +
          '就是在这个预报窗口刚好碰上日落时拍到的</strong>',
        '<strong>White Dome Geyser 是另一种题材：一个 12 英尺高的巨大泉锥。</strong>' +
          '它是全园最大的间歇泉锥之一，喷发只有 30 英尺高、持续 2 分钟，' +
          '<strong>但那个厚重的锥体本身就是极好的剪影主体</strong>，不喷也能拍',
        '<strong>栈道上的 bobby socks trees 是被低估的题材。</strong>' +
          '热泉的矿化水被树根吸上去，在树干下部沉积成白色硅质外壳，' +
          '形成「穿了白袜子的死树」。' +
          '<strong>Silex Spring 一带成片站着这样的枯树，清晨逆光配蒸汽是本区最有气氛的一组画面</strong>'
      ],
      photo: '风光 <strong>4/5</strong>，微距／细节 <strong>4.5/5</strong>，人像 <strong>2/5</strong>。' +
        '<strong>它是本区题材密度第二高的盆地（仅次于 Upper Geyser Basin），而且人比 Midway 与 Old Faithful 少得多。</strong>' +
        '泥浆池的高速抓拍、Clepsydra 的持续喷发、bobby socks trees 的逆光剪影是三个各自独立成立的方向。' +
        '扣分只在 Firehole Lake Drive 禁车这一条上——它把 Great Fountain 从「顺路」变成了「远征」。',
      shots: [
        {
          name: 'Fountain Paint Pot 泥浆池 —— 高速抓拍泥泡',
          park: [44.54792, -110.80788],
          view: [44.55061, -110.80624],
          desc: '栈道最高处的泥浆池平台。' +
            '<strong>核心技术要点：这是一个纯粹的快门速度题材，光线是次要的。</strong>' +
            '泥泡从鼓起到炸开只有零点几秒，' +
            '<strong>用 1/1000–1/2000 秒冻结泥浆炸开瞬间的皇冠状飞溅</strong>，' +
            '为此不惜把 ISO 推到 1600–3200。' +
            '<strong>70–200mm 或 100–400mm 长焦压缩</strong>（栈道离池面有距离，广角拍不出东西），' +
            '<strong>高速连拍 + 预对焦在一个反复冒泡的固定位置</strong>——' +
            '泥浆池的活跃点通常固定，先观察一分钟找出它。' +
            '<strong>光线上要的是侧光</strong>：正午顶光会让泥面失去立体感，' +
            '<strong>上午 09:30–11:00 或下午 15:00–16:30 的斜射光能把泥泡的凸起打出高光与阴影</strong>。' +
            '阴天也完全可用，这是本区少数不受蒸汽干扰的题材（泥浆池蒸汽量小）。'
        },
        {
          name: 'Silex Spring 与 bobby socks trees 逆光剪影',
          park: [44.54792, -110.80788],
          view: [44.55020, -110.80592],
          desc: '<strong>本区最有氛围的一组画面，只在冷晨成立。</strong>' +
            '<strong>时段：见光后到 09:30</strong>' +
            '（9/25 约 07:36–09:30；10/22 约 08:10–09:30）。' +
            '低角度阳光从东侧穿过 Silex Spring 与周围喷气孔的蒸汽，' +
            '<strong>把白袜枯树打成剪影、蒸汽变成通透的体积光</strong>。' +
            '<strong>24–70mm，站在蒸汽的另一侧朝太阳方向拍</strong>；' +
            '<strong>曝光按最亮的蒸汽给 +1 到 +1.7 EV，让树完全压成黑色</strong>——' +
            '不要试图同时保住树干的白袜细节，那是另一张照片（顺光时拍）。' +
            '<strong>判断标准就一条：前夜最低温 −5 °C 以下且无风</strong>，' +
            '暖夜的早晨蒸汽不够、这个机位不成立。' +
            '注意 <strong>Red Spouter 就在附近，它在春季是泥浆池、到秋季常常变成干喷气孔</strong>，' +
            '10 月来看到的很可能是一个愤怒地吼着蒸汽的洞——那本身也是个好主体。'
        },
        {
          name: 'Clepsydra Geyser 持续喷发',
          park: [44.54792, -110.80788],
          view: [44.55114, -110.80894],
          desc: '<strong>全园最不需要等待的间歇泉，适合练手也适合收尾。</strong>' +
            '它几乎不停地从多个泉眼同时喷出 45 英尺的水柱。' +
            '<strong>1/500–1/1000 秒冻结水珠</strong>，' +
            '或反过来 <strong>1/15–1/4 秒配 ND 让水流拉成丝</strong>——' +
            '后者在这里特别成立，因为喷发是连续的，长曝不会拍到空白。' +
            '<strong>70–200mm。清晨逆光时水柱会被打成亮银色，是最好的时刻</strong>；' +
            '傍晚侧逆光也可用。' +
            '旁边的 <strong>Fountain Geyser</strong> 是这一组里更大的那个' +
            '（可达 50 英尺、持续约 30 分钟），' +
            '<strong>但它没有公布预报，看到它在喷就立刻改拍它</strong>。'
        },
        {
          name: 'Great Fountain Geyser 硅华台阶 —— 需步行进入',
          view: [44.53574, -110.80039],
          desc: '<strong>2026 年这里只能走进去：Firehole Lake Drive 对汽车关闭。</strong>' +
            '从主路上 Firehole Lake Drive 的南端入口步行约 <strong>1.2–1.5 公里单程</strong>，' +
            '沿平坦的旧沥青路走，20 分钟左右。' +
            '<strong>这是本区回报最高、也最不确定的一个机位。</strong>' +
            '<strong>构图核心是那圈同心的硅华台阶</strong>：' +
            '台阶上的浅水层在喷发前会被涌出的水灌满，变成一面面镜子，' +
            '<strong>把水柱与天空一起反射进来</strong>。' +
            '<strong>16–35mm 贴近水面低机位</strong>，让最近的一级台阶占据前景下缘。' +
            '<strong>时机策略：先在 Old Faithful 游客中心拿当天的 Great Fountain 预报时间</strong>' +
            '（间隔约 11h30 ± 2h），' +
            '<strong>只有当预报窗口与日落重叠时才值得专程走进去</strong>——' +
            '按山脊修正，日落前的暖光实际在 <strong>9/25 约 17:45–18:45、10/22 约 16:55–17:55</strong> 结束。' +
            '<strong>务必算好回程：走出来还要 20 分钟，而暮光在日落后约 30 分钟就没了，头灯必带。</strong>' +
            '喷发前会有一段「溢流期」，水开始漫过台阶就说明快了。' +
            '<strong>顺路的第二个主体：White Dome Geyser 在 Great Fountain 以北约 400 米' +
            '（44.53934, −110.80284），是全园最大的间歇泉锥之一、高约 12 英尺</strong>，' +
            '<strong>喷不喷都能拍——35–85mm 让锥体占满画面，' +
            '而日落方向（9/25 方位 270°、10/22 方位 255°）正在它西侧，压成剪影配晚霞最直接</strong>。' +
            '它的喷发只有 30 英尺高、持续 2 分钟、无预报，' +
            '<strong>不要为它等，把它当成走去 Great Fountain 路上顺手的一张</strong>。' +
            '（Firehole Lake Drive 上无正式停车面，且 2026 年禁车，故省略 park 字段。）'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>',
        hours: 'Fountain Paint Pot 栈道无门禁、全天可入，' +
          '<strong>2026 年秋季无公布的封闭段</strong>。' +
          '<strong>Firehole Lake Drive：2026 年对机动车关闭（NPS Current Conditions 原文，' +
          '原因是「hydrothermal heat damaging the road surface」），步行与自行车允许通行。</strong>' +
          '网络上有一则关于北段部分恢复通车的说法，<strong>未能从官方渠道确认，按全线禁车准备</strong>。' +
          '所在的 Madison ↔ Old Faithful 路段 2026 年通车至 <strong>10/31</strong>',
        parking: 'Fountain Paint Pot 有正式停车场（OSM 停车面中心 <strong>44.54792, −110.80788</strong>），' +
          '10 月车位充裕。' +
          '<strong>Firehole Lake Drive 的南端入口在主路旁，把车停在 Fountain Paint Pot 停车场步行进入最稳</strong>' +
          '（到 Great Fountain 约 1.2–1.5 公里）',
        walk: 'Fountain Paint Pot 环线 <strong>0.5 英里／0.8 公里木栈道，全程无障碍、有缓坡</strong>，' +
          '30 分钟到 1 小时。' +
          '<strong>加上 Firehole Lake Drive 的步行段，往返约 3 公里、总计 2–3 小时</strong>'
      },
      notes: [
        '<strong>Firehole Lake Drive 的步行段没有栈道、没有厕所、没有手机信号，且是熊乡。</strong>' +
          '带防熊喷雾、握在手里，走路时出点声音。' +
          '<strong>路面是被地热破坏的旧沥青，有沉降与裂缝，头灯下要看清脚下</strong>',
        '这一带的路侧与栈道旁常有野牛群卧着晒太阳，' +
          '<strong>挡住栈道就原路退回，25 码是法定距离</strong>。' +
          '野牛的 rut 已在 8 月结束，秋季不会遇到公牛互斗',
        '<strong>Fountain Paint Pot 到 Midway 约 4 英里、到 Madison 约 6 英里、到 Old Faithful 约 10 英里。</strong>' +
          '<strong>它正好在 Madison 与 Midway 之间，是这条线上零成本的一站</strong>',
        '<strong>泥浆池会甩出泥点，能落到几米外。</strong>' +
          '不要把镜头正对活跃点凑太近，用长焦保持距离；泥浆是酸性的，落在镜片上要立刻处理',
        '<strong>Silex Spring 的水温接近沸点，栈道紧贴池边。</strong>' +
          '冷晨栈道会因热泉径流结冰，' +
          '<strong>天亮前走这段务必带头灯与轻量冰爪</strong>',
        '<strong>Great Fountain 的预报误差是 ± 2 小时，这是全园预报间歇泉里最宽的。</strong>' +
          '不要把它安排成行程里的固定项——' +
          '<strong>它是「如果预报刚好落在日落前后就去，否则放弃」的机动项目</strong>',
        '<strong>10/3 之后最近的厕所在 Old Faithful（10 英里）或 Madison Campground（开到 10/17）。</strong>' +
          '这一带无加油站、无信号'
      ],
      images: [
        { url: 'img/fountain-paint-pot-16245193997-e295e6f7.jpg',
          cap: 'Fountain Paint Pot 的泥浆池 · NPS / Public domain' },
        { url: 'img/bobby-socks-trees-at-fountain-paint-pots-4b18bc86-3e16-4114--d34306ff.jpg',
          cap: '穿着白袜子的枯树（bobby socks trees） · NPS / Public domain' },
        { url: 'img/great-fountain-geyser-terraces-at-sunset-30766842144-ffc9ee0b.jpg',
          cap: 'Great Fountain Geyser 的硅华台阶与日落 · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-gb-midway',
      n: 4,
      name: '中途间歇泉盆地',
      en: 'Midway Geyser Basin',
      score: 4.5,
      tldr: '橙色径流扇流进 Firehole River 是本区最好的清晨题材，而且它是唯一一个「蒸汽越厚越好」的机位；Excelsior 每分钟往河里倒 4,000 加仑热水。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '0.8 英里栈道环线', c: 'free' },
        { t: '停车场 9 点后就满', c: 'risk' },
        { t: '蒸汽最厚的盆地', c: 'risk' },
        { t: '桥上机位最强', c: 'free' }
      ],
      highlights: [
        '<strong>先把预期校正好：从 Midway 的栈道上你拍不到 Grand Prismatic 的彩环。</strong>' +
          '栈道贴着池边、只比水面高一两米，' +
          '<strong>你看到的是脚下几米范围内的颜色梯度与一面蒸汽墙，不是那个圆</strong>。' +
          '想拍圆必须去 Fairy Falls 那侧的 Overlook（见下一条目）。' +
          '<strong>这不是缺陷，而是分工：Midway 给你质感、径流与蒸汽，Overlook 给你形状。</strong>' +
          '两个都要拍，而且要在一天里的不同时刻拍',
        '<strong>Excelsior Geyser Crater 是本盆地被严重低估的主角。</strong>' +
          '它曾是世界上最大的间歇泉，' +
          '<strong>1880 年代喷发高达 300 英尺，之后炸毁了自己的泉道、从此变成一个持续沸腾的巨坑</strong>' +
          '（最近一次真正喷发是 1985 年，持续了 47 小时）。' +
          '现在它 <strong>每分钟向 Firehole River 排放约 4,000 加仑 199 °F 的热水</strong>——' +
          '<strong>这条排水就是本盆地最好的照片</strong>',
        '<strong>那道流进 Firehole River 的橙色径流扇，是整个 Yellowstone 最容易出好照片的地方之一。</strong>' +
          '嗜热菌垫在流出的热水里按温度梯度分层生长，' +
          '<strong>从近池口的白、黄，到远处的橙、赭、深红，最后汇进河里的青绿</strong>；' +
          '而它<strong>正好位于木桥的下游侧，你站在桥上就是标准俯视机位</strong>。' +
          '<strong>关键是：这个题材不怕蒸汽，蒸汽反而是它的一部分</strong>——' +
          '这让它成为清晨唯一值得来 Midway 的理由',
        '<strong>Turquoise Pool 与 Opal Pool 是两个纯颜色题材，规则与径流扇完全相反。</strong>' +
          'Turquoise Pool 的蓝绿来自纯净深水对长波的吸收，' +
          '<strong>必须在太阳够高、气温够暖、蒸汽够薄时才看得见</strong>。' +
          'Opal Pool 曾经是间歇泉、1979 年之后基本安静下来。' +
          '<strong>实操顺序：清晨先拍桥上的径流扇，然后离开去别处，正午之后再回来拍池子</strong>' +
          '——它离 Old Faithful 只有 6 英里，这个往返完全划得来',
        '<strong>NPS 的官方数据：栈道环线 0.8 英里／1.3 公里，全程无障碍，游览 30 分钟到 1 小时。</strong>' +
          'Grand Prismatic 本体直径约 <strong>370 英尺（113 米）、深 121 英尺</strong>，' +
          '是美国最大、世界第三大的热泉'
      ],
      photo: '风光 <strong>4.5/5</strong>，细节／抽象 <strong>5/5</strong>，人像 <strong>2.5/5</strong>。' +
        '<strong>桥上那道径流扇是本区（也许是全园）性价比最高的一张照片：走 200 米就到，' +
        '不需要预报、不需要等待，而且蒸汽越厚越好。</strong>' +
        '扣分在于停车场是全区最挤的，以及栈道上除了径流扇之外的构图选择相当有限。',
      shots: [
        {
          name: 'Firehole River 木桥上的橙色径流扇 —— 招牌机位',
          park: [44.52907, -110.83612],
          view: [44.52765, -110.83608],
          desc: '<strong>从停车场走进栈道后跨过 Firehole River 的那座木桥，站在桥上朝下游／池方向。</strong>' +
            '<strong>最佳时段：见光后到 09:30 的冷晨</strong>' +
            '（9/25 约 07:36–09:30；10/22 约 08:10–09:30）。' +
            '<strong>这是本区唯一一个「蒸汽越厚越好」的机位</strong>：' +
            '低角度阳光从东南方穿过 Excelsior 排水带起的蒸汽，' +
            '<strong>橙色菌垫被逆光照透、蒸汽变成金色的帘幕、下方是深绿的河水</strong>。' +
            '<strong>16–35mm 广角俯视</strong>让径流扇的分叉纹理从画面下缘一直延伸到池口，' +
            '<strong>或 70–200mm 单独压缩菌垫的色彩条带做抽象</strong>。' +
            '<strong>偏振镜在这里要摘掉</strong>——' +
            '它会削掉蒸汽的通透感，而水面反光在这个俯角下本来就不是问题。' +
            '<strong>曝光：逆光时点测亮部欠 1–1.5 EV 保住蒸汽，暗部后期提。</strong>' +
            '<strong>桥面是木板、人走过会晃，三脚架要等人少的间隙</strong>，' +
            '10 月早晨这不是问题。'
        },
        {
          name: 'Excelsior Geyser Crater 上方栈道',
          park: [44.52907, -110.83612],
          view: [44.52627, -110.83674],
          desc: '栈道绕到 Excelsior 巨坑北缘的位置。' +
            '<strong>这里是本盆地蒸汽最猛的点——一个直径 200 英尺、持续沸腾的深蓝色坑</strong>。' +
            '<strong>时段与风向比时间更重要：站在坑的上风侧</strong>，' +
            '否则你面对的就是一堵白墙、什么也拍不到。' +
            '<strong>24–70mm 收坑缘的深蓝水体与翻滚的蒸汽</strong>；' +
            '<strong>正午前后气温高、蒸汽相对薄，才有机会看到那个深靛蓝的坑底</strong>。' +
            '<strong>清晨则完全放弃「看清水面」，改拍蒸汽柱的形态与逆光</strong>。' +
            '这个坑还有一个很少被拍的角度：' +
            '<strong>坑缘那一圈被反复沉积的白色硅华边，用 70–200mm 贴着水汽拍会有金属质感</strong>。'
        },
        {
          name: 'Grand Prismatic 池边 —— 只拍质感，不拍形状',
          park: [44.52907, -110.83612],
          view: [44.52528, -110.83827],
          desc: '栈道在 Grand Prismatic 东南侧最贴近池边的一段。' +
            '<strong>再说一次：这里拍不到那个圆，不要在这个机位上浪费正午的宝贵时间去试。</strong>' +
            '值得拍的是<strong>脚下几米内的东西：菌垫从橙到赭到深红的条带、' +
            '菌丝被水流梳成的平行纹理、蒸汽墙里偶尔透出的一小块钴蓝</strong>。' +
            '<strong>70–200mm 或 100–400mm 做局部抽象是这里的正解</strong>，' +
            '广角在这里只会拍到一片白。' +
            '<strong>时段：正午到 15:00 蒸汽最薄，颜色最能看清</strong>；' +
            '有风的日子会好得多。' +
            '<strong>Turquoise Pool 就在这段栈道的东侧</strong>' +
            '（在 OSM 上没有独立节点，故不单列机位），' +
            '<strong>那是一个小而完整、可以在一张照片里拍全的池子，正午颜色最好</strong>。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>',
        hours: '无门禁、全天可入。<strong>2026 年秋季无公布的栈道封闭</strong>。' +
          'NPS 步道页只注明 <em>「Stay on boardwalk」</em>。' +
          '所在的 Madison ↔ Old Faithful 路段通车至 <strong>10/31</strong>；' +
          '<strong>Old Faithful 以南 1.5 英里的 Firehole River Bridge 有桥梁作业，9 月内最多 15 分钟延误</strong>' +
          '（从 West Thumb 方向来才会遇到，从 Madison 方向来不受影响）',
        parking: '主路西侧的大停车场（OSM 停车面中心 <strong>44.52907, −110.83612</strong>）。' +
          '<strong>这是本区夏季最堵的停车场，9 点之后经常需要排队等位；但 10 月上午 9 点前基本空着</strong>。' +
          '有厕所（秋季可能关闭）',
        walk: '停车场到木桥约 <strong>150 米／3 分钟</strong>。' +
          '<strong>栈道环线 0.8 英里／1.3 公里，全程无障碍</strong>，' +
          '拍摄含等风的时间算 <strong>45–90 分钟</strong>'
      },
      notes: [
        '<strong>这是全区蒸汽最厚的盆地，镜片起雾在这里是必然而不是意外。</strong>' +
          '装保护镜当挡雾片、上遮光罩、带四块以上超细纤维布轮换，' +
          '<strong>每一两分钟擦一次并立刻回看</strong>——' +
          '水膜在 LCD 上看不出来，但会在逆光里毁掉整张',
        '<strong>Excelsior 排出的水是 199 °F（93 °C），径流沟就在栈道下方几十厘米处。</strong>' +
          '<strong>留在栈道上是法律要求</strong>，这里的地面尤其是薄壳',
        '<strong>「清晨拍径流扇、正午回来拍池子」这个往返值得做</strong>：' +
          'Midway 到 Old Faithful 只有 6 英里／10 分钟，' +
          '<strong>中间那段时间正好可以去 Upper Geyser Basin 走一圈或等 Old Faithful 的一次喷发</strong>',
        '<strong>Grand Prismatic 的彩环只能从 Fairy Falls 侧的 Overlook 拍到</strong>，' +
          '而那个 trailhead 在<strong>主路更南边、离 Midway 停车场约 1.6 公里，不能从 Midway 栈道走过去</strong>——' +
          '两者之间隔着 Firehole River 且无连通步道，必须开车转场',
        '<strong>停车场与栈道之间常有野牛穿行</strong>，' +
          '木桥宽度只够两三个人并行，<strong>野牛上桥时唯一正确的做法是退回停车场等</strong>',
        '<strong>无手机信号。</strong>最近的厕所与联网点是 Old Faithful（6 英里）'
      ],
      images: [
        { url: 'img/yellowstone-national-park-wy-usa-firehole-river-abflusskanal-074abf62.jpg',
          cap: 'Excelsior 的橙色径流扇汇入 Firehole River · Dietmar Rabich / CC BY-SA 4.0' },
        { url: 'img/yellowstone-national-park-wy-usa-excelsior-geyser-crater-202-2f3791bb.jpg',
          cap: '持续沸腾的 Excelsior Geyser Crater · Dietmar Rabich / CC BY-SA 4.0' },
        { url: 'img/yellowstone-national-park-wy-usa-grand-prismatic-spring-2022-ff0dfbbe.jpg',
          cap: '栈道视角下的 Grand Prismatic 菌垫质感 · Dietmar Rabich / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'ys-gb-grand-prismatic-overlook',
      n: 5,
      name: '大棱镜泉与 Fairy Falls 观景台',
      en: 'Grand Prismatic Spring & the Fairy Falls Overlook',
      score: 5,
      tldr: '唯一能看见整个彩环的地方，必须正午前后去，而且晚秋有整天糊死的真实风险——这一条与「黄金时刻」的常识完全相反，请照做。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '必须正午前后', c: 'risk' },
        { t: '晚秋可能整天拍不到', c: 'risk' },
        { t: '单程 1.2 公里上坡', c: 'paid' },
        { t: '本区第一优先', c: 'free' }
      ],
      highlights: [
        '<strong>先说最重要的一条，因为它与你所有关于风光摄影的习惯相反：' +
          '这张照片必须在正午前后拍，清晨与日落都是浪费时间。</strong>' +
          '两个独立的物理原因同时指向正午之后那一两个小时：' +
          '<strong>①太阳高度</strong>——那圈深钴蓝来自纯水对长波的吸收，' +
          '需要阳光真正穿进水体而不是在水面反射掉，太阳低于约 30° 时你看到的主要是天空反光；' +
          '<strong>②气温</strong>——蒸汽厚度由气温决定，而一天的气温峰值在 14:00–16:00。' +
          '<strong>所以最佳窗口是 12:30–14:30，取「太阳还够高」与「气温已经上来」的交集。</strong>' +
          '如果只能选一个方向偏移，<strong>往晚偏，不要往早偏</strong>——' +
          '牺牲 1–2° 太阳高度换几度气温是值得的交易',
        '<strong>接下来是必须诚实说的部分：晚秋你有可能整天都拍不到。</strong>' +
          '实测的太阳高度窗口逐日缩短得非常快' +
          '（Grand Prismatic 位置 44.525°N，MDT）：' +
          '<strong>9/25 太阳高度 ≥30° 的时间是 10:18–16:12（近 6 小时），正午最高 44.8°；' +
          '10/10 是 10:51–15:30，最高 38.9°；' +
          '10/22 是 11:28–14:48，最高 34.5°；' +
          '到 10/31 只剩 12:10–14:04（不足 2 小时），最高 31.4°。</strong>' +
          '<strong>换句话说 10 月最后一周，你每天只有约两小时的机会窗口，' +
          '而那两小时里气温可能仍在 5 °C 以下、蒸汽仍然盖死整个池子。</strong>' +
          '<strong>结论：9 月下旬来的人大概率能拍到；10 月下旬来的人要有拍不到的心理准备，' +
          '并把它排成「有合适天气就立刻去」的机动项，不要定在某一天。</strong>' +
          '判断当天可行性最快的办法是<strong>看 NPS 在 Old Faithful 的网络摄像头</strong>，' +
          '蒸汽状况一眼就知道',
        '<strong>栈道拍不到那个圆，这一点必须在出发前就接受。</strong>' +
          'Midway Geyser Basin 的栈道只比水面高一两米，' +
          '<strong>那些看起来像航拍的照片全部来自 Fairy Falls 步道上的 Grand Prismatic Overlook，没有例外</strong>。' +
          '<strong>Overlook 是唯一的选择</strong>，也是本区唯一一个「不去就等于没来过」的机位',
        '<strong>但 Overlook 也不是航拍视角，这一点同样要校正预期。</strong>' +
          '观景平台比池面高约 <strong>105 英尺／32 米</strong>，水平距离约 <strong>225 米</strong>，' +
          '<strong>俯角只有大约 8°</strong>。' +
          '<strong>所以你看到的是一个被严重压扁的椭圆，不是正圆</strong>——' +
          '真正的正圆只有直升机能拍。' +
          '知道这一点之后构图会好很多：' +
          '<strong>不要试图「把圆拍圆」，而是利用这个斜角，' +
          '让前景的橙色菌垫、中间的蓝心与背后的 Firehole River 和林线叠成层次</strong>',
        '<strong>步道数据：从 Fairy Falls Trailhead 到 Overlook 约 1.2 公里单程</strong>' +
          '（前 900 米是平坦的旧车道，最后 300 米是上坡土径与木台阶），' +
          '<strong>爬升约 30 米，单程 20–25 分钟</strong>。' +
          '往返加拍摄算 <strong>1.5 小时</strong>。' +
          '<strong>Trailhead 在 Midway 停车场以南约 1.6 公里的主路西侧，' +
          '不能从 Midway 栈道走过去</strong>——中间隔着 Firehole River，必须开车转场',
        '<strong>Grand Prismatic 的数据：直径约 370 英尺（113 米），深 121 英尺（37 米），' +
          '是美国最大、世界第三大的热泉，中心水温约 189 °F（87 °C）。</strong>' +
          '那圈颜色来自不同温度带的嗜热菌群：' +
          '<strong>中心因水温太高而无生物、呈纯粹的深蓝；向外依次是黄、橙、赭、红棕</strong>，' +
          '越外圈水温越低、类胡萝卜素比例越高。' +
          '<strong>秋季菌垫的颜色比夏季更偏橙红</strong>（低光照下叶绿素比例下降），这是加分不是减分'
      ],
      photo: '风光 <strong>5/5</strong>，人像 <strong>2/5</strong>。' +
        '<strong>本子地区乃至全园的第一优先，也是唯一一个我会建议为它调整整天行程的机位。</strong>' +
        '它的分数不是因为好拍——恰恰相反，它是本指南里对天气条件最挑的一张照片；' +
        '分数在于<strong>成功时的画面无可替代，而且没有任何其他地点可以顶替</strong>。',
      shots: [
        {
          name: 'Grand Prismatic Overlook 观景平台 —— 唯一机位',
          park: [44.51525, -110.83248],
          view: [44.52353, -110.84004],
          desc: '<strong>时间：12:30–14:30，取「太阳高度 ≥30°」与「日内气温峰值」的交集。</strong>' +
            '具体到日期：<strong>9/25 可用 10:18–16:12、最佳 12:30–14:30；' +
            '10/22 可用 11:28–14:48、最佳 12:45–14:30；10/31 只有 12:10–14:04，别无选择。</strong>' +
            '<strong>光位是这个机位最幸运的地方</strong>：' +
            '平台在池子的西南侧，<strong>你朝东北方向（方位约 41°）拍</strong>，' +
            '而这个时段太阳在<strong>方位 170°–205°（正南到西南偏南）、也就是你的右后方</strong>——' +
            '<strong>标准的越肩顺光，池面几乎没有朝向你的反光</strong>，' +
            '这正是能看进水里的关键。' +
            '<strong>焦距：全画幅 24–35mm 收整个池子加 Firehole River 与背后林线</strong>' +
            '（35mm 是最常用的一档），' +
            '<strong>50–85mm 只取彩环本体</strong>' +
            '（池子在 225 米外张角约 27°，70mm 刚好填满画面）。' +
            '<strong>偏振镜：装上，转到最大效果。</strong>' +
            '你的视线以约 8° 的极掠射角打在水面上，' +
            '<strong>此时水面反射的天空辉光很强且高度偏振，偏振镜能明显压掉这层灰白、' +
            '让蓝心更深、橙圈更饱和</strong>——这是本指南里少数强烈建议用偏振镜的机位。' +
            '代价是 1.3–2 挡进光，在正午的强光下无关紧要。' +
            '<strong>但要澄清一个常见误解：偏振镜不能「穿透」蒸汽</strong>，' +
            '蒸汽是米氏散射、基本不偏振，' +
            '<strong>蒸汽只能靠气温和风解决，不能靠滤镜解决</strong>。' +
            '<strong>三脚架在平台上可用但空间有限</strong>，' +
            '10 月人少不成问题。'
        },
        {
          name: '上坡土径中段的侧视角 —— 备用与补充',
          park: [44.51525, -110.83248],
          view: [44.52370, -110.83923],
          desc: '从平台往回走几十米、在最后那段上坡土径上的几处开阔点。' +
            '<strong>角度略低、更偏侧，池子被压得更扁</strong>，' +
            '<strong>但好处是能把前景的树与坡地纳入构图，做出「从林间望出去」的层次</strong>，' +
            '也是平台挤满人时的替代位。' +
            '<strong>70–200mm 在这里比广角好用</strong>。' +
            '另一个实际用途：<strong>如果你到平台时发现蒸汽正好挡住，' +
            '在这段路上边走边等风比在平台上干等更有效率</strong>——' +
            '不同高度看过去的蒸汽厚度不一样，' +
            '<strong>有时往下走 20 米就能从蒸汽的边缘看进去</strong>。' +
            '<strong>不要为了「更好的角度」离开步道</strong>，' +
            '这一带是熊乡且坡面松散，且离开指定步道违规。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>',
        hours: '<strong>步道无门禁、全天可入，但这个机位只有正午前后才有意义</strong>。' +
          '<strong>2026 年秋季 Fairy Falls Trail 与 Grand Prismatic Overlook 无公布的封闭</strong>。' +
          '需注意两点：<strong>①该步道每年春季（约 3 月中至 5 月下旬）有例行的熊类管理封闭</strong>，' +
          '秋季不适用；<strong>②2026 年 5 月 4 日 Old Faithful 西北侧曾发生带崽母灰熊袭人事件、' +
          '相关临时封闭已解除</strong>。' +
          '<strong>Overlook 以北通往 Fairy Falls 本体的步道段是否全程开放，' +
          '未能从官方渠道就秋季情况确认</strong>——不过 Overlook 本身在岔口之前，不受影响。' +
          '所在的 Madison ↔ Old Faithful 路段通车至 <strong>10/31</strong>',
        parking: '<strong>Fairy Falls Trailhead 停车场</strong>，主路西侧' +
          '（OSM 停车面中心 <strong>44.51525, −110.83248</strong>）。' +
          '<strong>规模不大、夏季会满，10 月完全不紧张。有厕所（秋季可能关闭）。</strong>' +
          '<strong>它在 Midway 停车场以南约 1.6 公里，是另一个入口，不要开错</strong>',
        walk: '<strong>单程约 1.2 公里／20–25 分钟</strong>，' +
          '前 900 米是平坦宽阔的旧车道（可推车），' +
          '<strong>最后 300 米是上坡土径与木台阶，爬升约 30 米</strong>。' +
          '往返加拍摄与等风 <strong>1.5–2 小时</strong>。' +
          '<strong>不是无障碍步道</strong>'
      },
      notes: [
        '<strong>把它排成机动项，不要定在某一天。</strong>' +
          '判断标准：<strong>当天有 8–15 mph 的风、气温能上到 8 °C 以上、且时间落在太阳高度窗口内，就立刻去</strong>；' +
          '无风的冷天去了大概率白走 2.4 公里',
        '<strong>秋季日照短，这个机位与「清晨拍蒸汽」在时间上不冲突，但与「日落」冲突。</strong>' +
          '10 月下旬直射光在 17:55–18:07 就结束了，' +
          '<strong>所以正确的一天是：清晨 Midway 桥上拍径流扇 → 上午 Upper Geyser Basin → ' +
          '12:30–14:30 Overlook → 下午回 Midway 拍池子 → 日落前在 Upper Geyser Basin 或 Great Fountain</strong>',
        '<strong>这段步道是熊乡，10 月是 hyperphagia 高峰，且步道人少。</strong>' +
          '带防熊喷雾并握在手里，' +
          '<strong>Old Faithful 的喷雾租借亭 10/3 关门，之后只能自带或在 West Yellowstone 买</strong>',
        '<strong>最后那段土径清晨会结霜、下午化成泥。</strong>' +
          '10 月下旬雪后会很滑，<strong>轻量冰爪在这里用得上</strong>',
        '<strong>步道上无手机信号、无厕所（trailhead 的厕所秋季可能关闭）。</strong>' +
          '最近可靠的补给是 Old Faithful（约 8 英里）',
        '<strong>不要为了更好的角度走出步道。</strong>' +
          'Compendium 明文规定热区周边必须留在指定步道与栈道上，' +
          '且此处坡面是松散的硅质土，踩踏会造成不可恢复的破坏',
        '<strong>如果你的行程只允许在这一带停留半天，把这半天放在正午，而不是清晨或傍晚。</strong>' +
          '这是本条目最实用的一句话'
      ],
      images: [
        { url: 'img/grand-prismatic-spring-from-fairy-falls-trail-overlook-midwa-ed955d94.jpg',
          cap: '从 Fairy Falls 步道观景台看到的完整彩环 · Steven Pavlov / CC BY-SA 4.0' },
        { url: 'img/view-from-the-grand-prismatic-overlook-trail-35637694570-00d93774.jpg',
          cap: 'Overlook 步道上的视野与蒸汽状况 · NPS / Public domain' },
        { url: 'img/viewing-platform-on-the-grand-prismatic-overlook-trail-35187-5dc56e2e.jpg',
          cap: '观景平台本身，可见平台高度有限 · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-gb-black-sand-biscuit',
      n: 6,
      name: '黑沙盆地与饼干盆地',
      en: 'Black Sand Basin & Biscuit Basin',
      score: 3.5,
      tldr: 'Biscuit Basin 已核实：自 2024 年 7 月爆炸后关闭至今，2026 年 6 月 13 日又炸了一次，仍然关闭、无重开日期。Black Sand Basin 正常开放，是本区最省时的一站。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: 'Black Sand 正常开放', c: 'free' },
        { t: 'Biscuit Basin 全域关闭', c: 'risk' },
        { t: '0.25 英里栈道', c: 'free' },
        { t: '离 Old Faithful 1 英里', c: 'free' }
      ],
      highlights: [
        '<strong>Biscuit Basin 的状态是本区唯一一个真正的重大不确定项，答案是：仍然关闭，而且没有重开日期。</strong>' +
          '时间线已核实：<strong>2024 年 7 月 23 日上午 10 点前，Black Diamond Pool 发生一次显著的热液爆炸，' +
          '碎屑抛到近 200 英尺高、摧毁了附近的木栈道</strong>，栈道上的游客四散躲避，无人受伤；' +
          '园方随即封闭整个盆地。' +
          '<strong>2026 年 6 月 13 日 05:09（MDT），同一盆地在 Black Diamond Pool 以北数百英尺处又发生一次较小的爆炸</strong>：' +
          '抛石数十英尺，地面裂开一道 <strong>60 英尺长、灌满沸水的裂缝</strong>；' +
          '两天后那片地面塌陷成一个 <strong>21 × 17 英尺的沸腾水池</strong>，' +
          '6 月 18 日起间断喷发到 20–30 英尺高，Firehole River 从 Biscuit Basin 到 Midway 之间' +
          '<strong>6 公里河段变成灰白色浑浊水流</strong>。' +
          '<strong>USGS 与 NPS 的当前口径都是「Biscuit Basin remains closed to visitors because of the damage to the ' +
          'boardwalk and the potential for hazardous and unpredictable activity」——栈道未修复、活动不可预测，' +
          '停车场同样关闭。</strong>' +
          '<strong>把它从行程里划掉，不要抱期待。</strong>' +
          '（顺带一句：这次是有史以来第一次有监测仪器近距离记录到热液爆炸——' +
          '爆炸点离 2025 年夏天新装的监测站只有 100 米）',
        '<strong>所以这一条目实际上只剩 Black Sand Basin，而它出人意料地好用。</strong>' +
          '<strong>0.25 英里的短栈道、就在 Old Faithful 西北约 1 英里的主路旁、有自己的停车场</strong>，' +
          '<strong>是本区唯一一个「15 分钟就能拍完一轮」的盆地</strong>。' +
          '它的名字来自遍地黑色的黑曜岩碎砂——' +
          '<strong>那层黑砂是它区别于全园其他白壳盆地的唯一视觉特征，也是拍它的理由</strong>',
        '<strong>Cliff Geyser 是这里最好的主体，因为它是全园少见的「间歇泉直接坐在溪流边」的构图。</strong>' +
          '它就在 Iron Spring Creek 的岸边喷发（高度约 40 英尺、活动不规律但相当频繁），' +
          '<strong>可以在同一张照片里同时收进喷发的水柱、溪水的流动与对岸的林线</strong>。' +
          '<strong>无预报，但它活跃度高，站着等十几分钟经常能等到</strong>',
        '<strong>Emerald Pool 与 Sunset Lake 是两个颜色题材，规则同 Grand Prismatic：正午之后拍。</strong>' +
          'Emerald Pool 的绿来自蓝色深水叠加池壁的黄色硫黄沉积——' +
          '<strong>这是「蓝 + 黄 = 绿」在自然界最干净的一个例子</strong>。' +
          'Sunset Lake 是一个较大的浅热泉，' +
          '<strong>橙色菌垫的边缘比 Grand Prismatic 更容易在一张照片里拍完整</strong>',
        '<strong>这一带的实际角色是「Old Faithful 的填空题」。</strong>' +
          '因为它离 Old Faithful 只有 1 英里／3 分钟车程，' +
          '<strong>最好的用法是在等 Old Faithful 下一次喷发的那 60–90 分钟空档里过来拍一轮</strong>，' +
          '而不是单独安排时间'
      ],
      photo: '风光 <strong>3.5/5</strong>，细节 <strong>4/5</strong>，人像 <strong>2/5</strong>。' +
        '<strong>Black Sand Basin 的强项是效率与独特性</strong>：黑砂底色 + 溪边间歇泉的组合在全园找不到第二处，' +
        '而且 15 分钟就能走完。' +
        '扣分主要来自 <strong>Biscuit Basin 的关闭直接砍掉了这条目原本一半的内容</strong>' +
        '（Sapphire Pool、Jewel Geyser、Black Opal Pool 全在里面），以及 Black Sand 本身规模确实小。',
      shots: [
        {
          name: 'Cliff Geyser 与 Iron Spring Creek',
          park: [44.46208, -110.85304],
          view: [44.46226, -110.85398],
          desc: '栈道西侧、紧贴 Iron Spring Creek 的位置。' +
            '<strong>这是本条目的主机位，也是全园唯一能把间歇泉与流动溪水放进同一构图的地方。</strong>' +
            '<strong>时段：清晨见光后到 09:30 逆光最好</strong>' +
            '（9/25 约 07:36 起、10/22 约 08:10 起），' +
            '此时水柱与蒸汽被打成亮银色、溪面有反光。' +
            '<strong>24–70mm 横构图</strong>把溪流当前景引导线、间歇泉放在中景；' +
            '<strong>喷发时 1/500–1/1000 冻结水珠，不喷时改用 1/4–1 秒 + ND 让溪水丝化、把蒸汽拉成流动的雾</strong>。' +
            '<strong>它没有预报，但活跃度高</strong>——' +
            '实操做法是先架好机位、对好焦，一边等一边拍溪水长曝，' +
            '<strong>喷发起来时直接切到高速快门</strong>。' +
            '阴天也完全成立，溪水与黑砂的反差在漫射光下更好控制。'
        },
        {
          name: 'Sunset Lake 与 Emerald Pool',
          park: [44.46208, -110.85304],
          view: [44.46282, -110.85480],
          desc: '栈道北段。<strong>纯颜色题材，时段是正午到 15:00</strong>——' +
            '和本区所有池子一样，要的是高太阳角度加上一天里最暖的气温。' +
            '<strong>Emerald Pool 用 35–85mm 俯视、把整池收满</strong>，' +
            '构图上让池壁的黄色硫黄圈完整包住中间的绿；' +
            '<strong>Sunset Lake 更大更浅，用 24–35mm 收进橙色菌垫的外缘与背后的黑砂地</strong>。' +
            '<strong>偏振镜在这两处装上有明显帮助</strong>（压掉水面天光反射、提升水下颜色饱和度），' +
            '但同样提醒：<strong>它压不掉蒸汽</strong>。' +
            '<strong>Sunset Lake 蒸汽量不小，有风的日子来会好很多。</strong>' +
            '这一段栈道两侧是成片的黑曜岩黑砂，' +
            '<strong>低机位把黑砂放进前景能立刻让照片区别于其他盆地</strong>。'
        },
        {
          name: 'Biscuit Basin —— 只能从主路远观',
          desc: '<strong>2026 年全域关闭，停车场也关闭，进不去。</strong>' +
            '但从主路（Grand Loop Road，Old Faithful 以北约 2 英里）经过时，' +
            '<strong>可以在车里看到 Biscuit Basin 方向升起的蒸汽，以及 2026 年 6 月新形成的两条流向 Firehole River 的' +
            '径流沟</strong>——' +
            'USGS 明确写这两条新径流沟「were also visible from the road throughout the day」。' +
            '<strong>这是一个记录性的、而非风光性的画面：一个正在活跃改变、被封闭起来的热区。</strong>' +
            '<strong>不要为了拍它停在主路上或试图靠近</strong>，' +
            '封闭区内活动不可预测，且进入封闭区违法。' +
            '（无合法可站位的机位与停车面，故 <strong>park 与 view 字段一并省略</strong>。）'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>',
        hours: '<strong>Black Sand Basin：无门禁、全天可入，2026 年秋季无公布的封闭。</strong>' +
          '<strong>Biscuit Basin：自 2024 年 7 月 23 日爆炸后封闭至今，2026 年 6 月 13 日再次爆炸后维持封闭，' +
          'NPS 与 USGS 均未给出重开日期或估计。已核实，按「不可进入」规划。</strong>' +
          '所在的 Madison ↔ Old Faithful 路段通车至 <strong>10/31</strong>',
        parking: 'Black Sand Basin 有自己的小停车场（OSM 停车面中心 <strong>44.46208, −110.85304</strong>），' +
          '<strong>规模小、夏季常满，10 月无压力</strong>。' +
          '<strong>Biscuit Basin 停车场随盆地一并关闭</strong>',
        walk: 'Black Sand Basin 栈道 <strong>0.25 英里／0.4 公里，平坦、基本无障碍</strong>，' +
          '<strong>走完 15 分钟，含等 Cliff Geyser 喷发算 30–45 分钟</strong>'
      },
      notes: [
        '<strong>Biscuit Basin 的封闭是有人因此受过重伤的那种封闭。</strong>' +
          '2024 年那次爆炸把石块抛到近 200 英尺高、摧毁了栈道，' +
          '<strong>2026 年 6 月又在原址以北数百英尺处形成新的喷口与沸腾池，地面仍在塌陷</strong>。' +
          '园方的措辞是「hazardous and unpredictable」，这不是行政保守',
        '<strong>Black Sand Basin 与 Old Faithful 只隔 1 英里／3 分钟车程</strong>，' +
          '<strong>最经济的用法是把它塞进等待 Old Faithful 喷发的空档里</strong>' +
          '（间隔约 68 或 94 分钟，足够往返加拍摄）',
        '<strong>Iron Spring Creek 的水一部分来自热泉，冷晨栈道会因水汽结冰。</strong>' +
          '这里栈道贴着溪边且有台阶，天亮前来要带头灯',
        '<strong>这里的黑砂是黑曜岩碎屑，踩上去会带进相机包与镜头筒。</strong>' +
          '不要把器材直接放在地上，' +
          '<strong>黑曜岩碎屑硬度高，擦镜头前先吹干净</strong>',
        '<strong>无手机信号、无厕所。</strong>' +
          '最近的厕所与联网点是 Old Faithful Visitor Education Center（开到 10/31）',
        '这一带 2026 年 5 月 4 日曾发生带崽母灰熊袭人事件（在 Old Faithful 西北侧），' +
          '<strong>相关临时封闭已解除，但说明这就是熊活动区</strong>；栈道虽短，喷雾照带'
      ],
      images: [
        { url: 'img/iron-spring-creek-at-black-sand-basin-yellowstone-national-p-afbc3400.jpg',
          cap: 'Iron Spring Creek 与 Black Sand Basin 的黑砂地 · Tony Webster / CC BY 2.0' },
        { url: 'img/sunset-lake-20190714-132237-1-4feae75f.jpg',
          cap: 'Sunset Lake 的橙色菌垫外缘 · G. Edward Johnson / CC BY 3.0' },
        { url: 'img/sapphire-pool-biscuit-basin-in-yellowstone-dyeclan-com-panor-aa17488d.jpg',
          cap: 'Biscuit Basin 的 Sapphire Pool，2026 年已无法进入 · The Dye Clan / CC BY-SA 3.0' }
      ]
    },
    {
      id: 'ys-gb-old-faithful',
      n: 7,
      name: '老忠实与上间歇泉盆地',
      en: 'Old Faithful & the Upper Geyser Basin',
      score: 5,
      tldr: '全球四分之一的活间歇泉集中在这 2.6 平方公里里。预报间隔约 68 或 94 分钟（视上一次喷发时长而定），拍喷发站西侧逆光、快门 1/800。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '有官方喷发预报', c: 'free' },
        { t: '访客中心开到 10/31', c: 'free' },
        { t: 'Inn 关门日两说', c: 'risk' },
        { t: '10/24 后园内无住宿', c: 'risk' }
      ],
      highlights: [
        '<strong>题材密度上这里没有对手：Upper Geyser Basin 一平方英里内有约 150 个热液特征，' +
          '占全球已知活间歇泉的四分之一左右</strong>，' +
          '而且<strong>它是全园唯一有官方喷发预报的地方</strong>——' +
          '也就是说这是本区唯一能「按时间表拍照」的盆地',
        '<strong>Old Faithful 的预报机制值得先搞清楚，因为它不是「每 90 分钟一次」那么简单。</strong>' +
          'NPS 的做法是<strong>根据上一次喷发的持续时间来预测下一次的间隔</strong>：' +
          '<strong>上一次喷发较长（超过约 2.5 分钟）→ 下一次约 94 分钟后；' +
          '上一次较短 → 约 68 分钟后；两者的误差都是 ± 10 分钟。</strong>' +
          '原理是喷发时间长意味着排空的水多、重新充水加热要更久。' +
          '<strong>喷发本身高 106–184 英尺（32–56 米）、持续 1.5–5 分钟</strong>。' +
          '<strong>所以现场的正确做法是：看完一次喷发，立刻看板上写的下一次时间，然后决定这 68 或 94 分钟怎么用</strong>' +
          '（去 Black Sand Basin 一个往返、或走到 Grand Geyser、或吃饭）',
        '<strong>拿预报的四个渠道，按可靠性排序：</strong>' +
          '<strong>①Old Faithful Visitor Education Center 大厅的预报板</strong>' +
          '——最权威，六个预报间歇泉全在上面，<strong>2026 年最后营业日 10/31，正好覆盖整个窗口</strong>；' +
          '<strong>②官方 NPS Yellowstone App 的 Geyser Activity 页</strong>' +
          '——需要提前在有信号处下载，进园后可离线看已缓存的预报；' +
          '<strong>③Old Faithful Inn 与 Old Faithful Lodge 大堂也贴同一份预报板</strong>（受 Inn 关门日期影响）；' +
          '<strong>④ranger 讲解</strong>。' +
          '<strong>NPS 一共只预报六个间歇泉：Old Faithful、Castle、Grand、Riverside、Daisy、Great Fountain</strong>' +
          '——其余全部靠运气或靠社区观测',
        '<strong>其他四个大间歇泉的实际预期，按「值不值得等」排序：</strong>' +
          '<strong>Grand Geyser</strong> 是全球最高的可预报间歇泉' +
          '（150–200 英尺，间隔约 <strong>6 小时 30 分 ± 1 小时</strong>）——' +
          '<strong>如果预报窗口落在你的时段里，它比 Old Faithful 更值得等</strong>；' +
          '<strong>Castle Geyser</strong>（间隔约 <strong>13 小时 30 分 ± 45 分</strong>）' +
          '有一个巨大的、像城堡废墟的硅华锥，<strong>不喷时那个锥体本身就是最好的主体</strong>；' +
          '<strong>Riverside Geyser</strong>（约 <strong>6 小时 30 分 ± 30 分</strong>）' +
          '斜着从 Firehole River 岸边喷出、水柱横跨河面，<strong>是构图最优雅的一个</strong>；' +
          '<strong>Beehive Geyser</strong> 不在预报名单里' +
          '（间隔 22–36 小时甚至更长、极不规律），' +
          '<strong>但它有一个可用的提示：旁边的 Beehive\u2019s Indicator 小喷口会在正式喷发前几分钟到二十几分钟开始喷水</strong>——' +
          '<strong>在盆地里看到有人突然一起往那个方向跑，跟着跑就对了</strong>，' +
          '它的水柱又细又高（150–200 英尺），像从消防水枪里射出来',
        '<strong>Morning Glory Pool 在栈道最北端，单程约 1.4 英里／2.2 公里，是本盆地最远也最值得走的一段。</strong>' +
          '它曾经是主路的路边景点，' +
          '<strong>几十年里被游客投进硬币、石块与垃圾，堵塞了泉道、降低了水温，' +
          '结果橙黄色的菌群向内蔓延、原本纯净的钴蓝缩小到只剩中心一小块</strong>。' +
          '<strong>这是全园关于「人为损害」最直观的一课，也让它成了一个更复杂的拍摄对象</strong>：' +
          '现在的画面是蓝心加一整圈橙黄的侵蚀边缘，反而更有叙事性',
        '<strong>Old Faithful Inn 值得单独说，因为它的关门日期是本区唯一一处官方来源打架的地方。</strong>' +
          '这是 1904 年建成的原木大屋，' +
          '<strong>七层高的中庭全靠扭曲的枯松原木支撑，是美国最大的原木建筑之一，也是国家历史地标</strong>。' +
          '<strong>NPS 表格写客房末日 10/18（餐饮与礼品店 10/19），' +
          'Xanterra 官网三个页面一致写 10/12</strong>——差六天，' +
          '<strong>其余八家住宿两个来源完全吻合，唯独 Inn 对不上，无法判断哪边是过期数据。</strong>' +
          '实务口径：<strong>10/12 之前一定进得去，10/13–10/19 赌运气，之后一定进不去。</strong>' +
          '要拍那个大堂就打 <strong>307-344-7311</strong> 确认。' +
          '<strong>大堂在关门前对所有人开放，不住店也能进去拍</strong>' +
          '（三脚架属于「handheld equipment」、不需许可，但室内空间紧、留意其他客人）'
      ],
      photo: '风光 <strong>5/5</strong>，建筑 <strong>4.5/5</strong>，人像 <strong>3/5</strong>。' +
        '<strong>本区唯一一个可以放心排两个半天的地方</strong>：题材多、有预报、' +
        '有唯一的室内建筑题材（Inn 大堂）、有唯一的高点俯拍机位（Observation Point）、' +
        '而且从清晨到日落每个时段都有对应的拍法。' +
        '这也是<strong>本区唯一有厕所、热食、Wi-Fi 与手机信号的地方</strong>——' +
        '在 10 月这一点的实际价值不亚于摄影价值。',
      shots: [
        {
          name: 'Observation Point 俯瞰喷发 —— 招牌机位',
          park: [44.45794, -110.83073],
          view: [44.46471, -110.82444],
          desc: '<strong>唯一能俯拍 Old Faithful 喷发、并把整个盆地与 Old Faithful Inn 一起收进画面的机位。</strong>' +
            '从喷口北侧的栈道岔出，<strong>往返约 1.3 公里、爬升约 50 米（160 英尺），单程 15–20 分钟</strong>。' +
            '<strong>时段：清晨的第一次或第二次喷发（见光后 90 分钟内）。</strong>' +
            '9/25 约 07:36–09:10、10/22 约 08:10–09:40——' +
            '<strong>低角度阳光从东侧穿过冷晨的厚蒸汽，' +
            '而你在高处朝西南俯拍，得到的是「一柱被侧光打亮的水汽 + 下方整片冒烟的盆地」</strong>。' +
            '<strong>24–70mm 是这里的主力</strong>（收喷发加 Inn 加林线），' +
            '<strong>70–200mm 单独压缩喷发与建筑的关系</strong>。' +
            '<strong>关键执行细节：按预报时间倒推，必须在预报时刻前 30 分钟就开始爬</strong>' +
            '——上去要 20 分钟，而喷发只持续 1.5–5 分钟，赶不上就得再等 68 或 94 分钟。' +
            '<strong>天亮前爬这段土径务必带头灯，且它清晨结霜、下坡更滑，轻量冰爪有用。</strong>'
        },
        {
          name: 'Old Faithful 喷口西侧看台 —— 逆光喷发',
          park: [44.45794, -110.83073],
          view: [44.46046, -110.82815],
          desc: '<strong>站位是这张照片的全部，而两个条件恰好指向同一侧。</strong>' +
            '<strong>①光</strong>：清晨太阳在东（9/25 方位 90°、10/22 方位 105°），' +
            '<strong>所以站在喷口的西到西南侧、朝东北方向拍，才能得到逆光</strong>——' +
            '逆光是这张照片的一切，它让水柱变成半透明的发光体而不是一团白。' +
            '<strong>②风</strong>：盆地的盛行风来自西南，' +
            '<strong>意味着蒸汽会被吹向东北、也就是远离你的方向</strong>，' +
            '你面对的是清爽的水柱而不是一堵糊住镜头的雾墙。' +
            '<strong>两个条件都指向西南侧看台，这是本区少有的、光与风不冲突的机位。</strong>' +
            '<strong>快门：主力 1/800 秒</strong>' +
            '（足够冻结水珠边缘、又不至于把 ISO 逼太高）；' +
            '<strong>想要水柱有流动感用 1/60–1/125</strong>，' +
            '<strong>想要一整根柔化的柱体用 ND + 1/2–2 秒</strong>。' +
            '<strong>焦距 24–70mm 收全柱加地面</strong>，' +
            '<strong>70–200mm 只取水柱顶端被风撕开的形态</strong>。' +
            '<strong>光圈 f/8、连拍全程、宁欠不过</strong>——' +
            '逆光下水柱高光一旦溢出就没救了，欠 1–1.5 EV 后期提暗部。' +
            '<strong>傍晚规则完全反转：太阳落在西（9/25 方位 270°、10/22 方位 255°），' +
            '此时要站到喷口的东侧朝西拍</strong>，' +
            '但那时风向未变、蒸汽会朝你飘，所以晚场比早场难得多。'
        },
        {
          name: '栈道北段 · Castle、Grand、Riverside 与 Morning Glory Pool',
          park: [44.45794, -110.83073],
          view: [44.47506, -110.84353],
          desc: '<strong>这是一条线而不是一个点：沿铺装栈道一路往北，' +
            '单程约 1.4 英里／2.2 公里、步行 30–40 分钟（可推轮椅与自行车），终点是 Morning Glory Pool。</strong>' +
            '<strong>途中三个主体：</strong>' +
            '<strong>Castle Geyser</strong>（约 700 米处，44.46666, −110.83701 附近）' +
            '那个像城堡废墟的巨大硅华锥是全园最好的「静态」主体，' +
            '<strong>不喷时更好拍——35–85mm 在侧光下拍锥体表面层层叠叠的硅华纹理，' +
            '清晨与傍晚的低角度光最出质感</strong>；' +
            '<strong>Grand Geyser</strong>（约 900 米处）是全球最高的可预报间歇泉，' +
            '150–200 英尺、间隔约 6h30 ± 1h、喷发时多股水柱交错持续 9–12 分钟，' +
            '<strong>先在访客中心看它的预报窗口，落在你的时段就直接过去坐长椅上等，24–70mm 收全貌、1/1000 冻结</strong>；' +
            '<strong>Riverside Geyser</strong>（约 1,300 米处，间隔约 6h30 ± 30 分）' +
            '斜着从 Firehole River 岸上喷出、<strong>水柱横跨河面，是本盆地构图最优雅的一个，' +
            '70–200mm 从对岸压缩最好</strong>。' +
            '<strong>终点的 Morning Glory Pool 是纯颜色题材，时段是正午到 15:00</strong>——' +
            '和本区所有池子同一条规则：太阳要高、气温要暖、最好有点风。' +
            '<strong>35–85mm 俯视、把整池收满是标准做法</strong>；' +
            '<strong>构图上要处理的核心矛盾是「已经被侵蚀的橙黄边缘」</strong>：' +
            '与其回避它，不如<strong>让橙黄的菌群与中心残余的钴蓝形成明确对比，' +
            '这张照片讲的是一个池子被慢慢改变的故事</strong>。' +
            '<strong>偏振镜装上，能明显提升水下颜色</strong>。' +
            '<strong>时间管理提醒：来回 4.4 公里加拍摄要 1.5 小时以上，' +
            '而正午窗口也是 Grand Prismatic Overlook 的唯一窗口——这两个在同一天里冲突</strong>，' +
            '安排在不同天，或者接受 Morning Glory 在 15:00–16:00 的次优光线。'
        },
        {
          name: 'Old Faithful Inn 大堂原木框架',
          park: [44.45794, -110.83073],
          view: [44.45962, -110.83134],
          desc: '<strong>本区唯一的室内建筑题材，也是唯一一个不受天气影响的机位——' +
            '阴天、下雪、蒸汽糊死一切的日子，就来拍这里。</strong>' +
            '1904 年的原木大屋，<strong>七层通高的中庭由扭曲的枯松原木撑起</strong>。' +
            '<strong>三个拍法：①大堂正中仰拍</strong>' +
            '（<strong>14–24mm 超广角，竖构图，机身水平以免原木线条歪斜</strong>，' +
            '这是最容易出片的一张）；' +
            '<strong>②二层环廊俯拍</strong>（<strong>24–35mm</strong>，能同时收进壁炉、原木楼梯与人群，' +
            '<strong>傍晚开灯后暖色调最好</strong>）；' +
            '<strong>③门廊屋顶的观喷平台</strong>（可从二层走出去，' +
            '<strong>是唯一能把建筑与 Old Faithful 喷发放在同一张照片里的位置</strong>）。' +
            '<strong>室内光比极大：白天窗光与暗部差 6–8 挡，用包围曝光或直接欠曝保窗户</strong>；' +
            '<strong>三脚架可用（不需拍摄许可），但空间紧、以不挡通道为前提。</strong>' +
            '<strong>最佳时间是清晨 07:00–08:30 与晚 21:00 之后，客人最少。</strong>' +
            '<strong>务必先确认关门日期（10/12 或 10/18，两说）。</strong>'
        }
      ],
      access: {
        book: '<strong>盆地与大堂都不需预约；园内住宿必须极早预订（Xanterra，一般提前一年开放）</strong>',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>。<strong>Inn 大堂免费开放，不住店也能进</strong>',
        hours: '<strong>盆地与栈道无门禁、全天可入，2026 年秋季无公布的封闭。</strong>' +
          '<strong>Old Faithful Visitor Education Center 最后营业日 10/31</strong>' +
          '（预报板与免费 Wi-Fi 在这里，覆盖整个窗口）。' +
          '<strong>Old Faithful Inn 客房：NPS 写 10/18、Xanterra 写 10/12，两说，未能核实哪边正确。</strong>' +
          '<strong>Snow Lodge 客房 10/24（Obsidian 餐厅 10/25，Geyser Grill 与礼品店 10/31）；' +
          'Old Faithful Lodge Cabins 10/3。</strong>' +
          '<strong>10/24 之后 Old Faithful 一带没有任何过夜的地方。</strong>' +
          'General Store 10/18、医务室 10/27、邮局 10/15、' +
          '<strong>防熊喷雾租借亭 10/3</strong>。' +
          '所在路段通车至 <strong>10/31</strong>；' +
          '<strong>以南 1.5 英里的 Firehole River Bridge 有桥梁作业，9 月内最多 15 分钟延误</strong>',
        parking: '<strong>Old Faithful 有全园最大的停车系统，分成好几片</strong>' +
          '（本条采用喷口西南侧主停车面中心 <strong>44.45794, −110.83073</strong>）。' +
          '<strong>夏季正午一位难求，10 月完全不紧张。</strong>' +
          '天亮前来拍 Observation Point 日出的话，停车场基本是空的',
        walk: '<strong>停车场到 Old Faithful 喷口看台约 300–400 米／5 分钟，铺装、无障碍。</strong>' +
          '<strong>Observation Point 往返 1.3 公里、爬升 50 米、单程 15–20 分钟（土径与木台阶，非无障碍）。</strong>' +
          '<strong>到 Morning Glory Pool 单程 1.4 英里／2.2 公里（铺装，可推轮椅）。</strong>' +
          '<strong>Upper Geyser Basin 全部步道加起来约 4.9 英里，走全一天</strong>'
      },
      notes: [
        '<strong>整个行程规划的关键日期是 10/24：那天之后 Old Faithful 没有住宿。</strong>' +
          '10/25–10/31 想拍这里的日出，只能住 West Yellowstone' +
          '（<strong>30 英里／45–55 分钟</strong>）并在 <strong>06:10 前出发</strong>' +
          '（10/31 民用曙光 07:29、盆地真正见光 08:22，还要留 20 分钟爬 Observation Point）',
        '<strong>预报是「时刻 ± 10 分钟」，不是「时刻」。</strong>' +
          '实操：<strong>比预报时刻早 20 分钟到位，并做好等 30 分钟的准备</strong>；' +
          '看完一次立刻记下下一次的时间，' +
          '<strong>68 或 94 分钟的空档正好够去 Black Sand Basin 一个往返（1 英里／3 分钟车程）</strong>',
        '<strong>Beehive Geyser 不在预报名单里，但有个免费的提示系统：Beehive\u2019s Indicator</strong>。' +
          '它会在正式喷发前几分钟到二十几分钟开始喷水，' +
          '<strong>盆地里的常客都盯着它——看到有人集体往那个方向快走，跟上就对了</strong>',
        '<strong>这是本区唯一有手机信号、Wi-Fi、热食、厕所与医务室的地方</strong>' +
          '（Wi-Fi 在 Visitor Education Center，开到 10/31；' +
          '<strong>Geyser Grill 也开到 10/31，是本区最后一处热食</strong>）。' +
          '<strong>所有需要联网的事情都在这里办完</strong>——' +
          '离开 Old Faithful 后到 Grant Village 之前都没有信号',
        '<strong>加油站有两个，注意口径差别：Upper 站的便利店开到 10/18、Lower 站的店 9/13 就关了，' +
          '但两处的刷卡自助泵按 NPS 标注全年 24 小时可用。</strong>' +
          '低温会让续航打折，看到半箱就补',
        '<strong>栈道与铺装路在天亮前会结冰</strong>——' +
          '热泉径流淌上路面再冻住，形成头灯下看不见的透明薄冰。' +
          '<strong>Observation Point 那段土径与木台阶尤其滑，轻量冰爪在这里的回报率很高</strong>',
        '<strong>留在栈道上是法律要求。</strong>' +
          '2024 年 9 月一名 60 岁游客在 Old Faithful 附近走出步道踩穿薄壳，' +
          '腿部二三度烧伤、直升机转运。' +
          '另外<strong>热区内禁止饮食（水除外）、禁止无人值守／遥控拍摄设备、禁止对野生动物用闪光灯</strong>',
        '<strong>这里的野牛会直接走上栈道与铺装路。</strong>' +
          '<strong>25 码是法定距离，挡路就原路退回、不要绕行</strong>；' +
          '9 月麋鹿 rut 活跃，公麋鹿会主动逼近人。' +
          '<strong>NPS 明确把 Old Faithful 的栈道与停车场划在熊乡范围内</strong>，' +
          '喷雾租借亭 10/3 关门后只能自带'
      ],
      images: [
        { url: 'img/old-faithful-eruption-in-front-of-the-sun-36922264582-06eaa7a3.jpg',
          cap: '逆光下的 Old Faithful 喷发 · NPS / Public domain' },
        { url: 'img/morning-glory-pool-yellowstone-91b387c2.jpg',
          cap: 'Morning Glory Pool 与被侵蚀的橙黄边缘 · Clément Bardot / CC BY-SA 4.0' },
        { url: 'img/old-faithful-inn-lobby-at-night-35725047566-36f9c1fd.jpg',
          cap: 'Old Faithful Inn 大堂的七层原木中庭 · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-gb-west-thumb',
      n: 8,
      name: '西拇指间歇泉盆地',
      en: 'West Thumb Geyser Basin',
      score: 4.5,
      tldr: '全园唯一「热泉直接开在湖岸线上」的地方，0.6 英里栈道、日出朝东正对湖面。已核实无季节性封闭，但信息站 7 月已关、10/10 后附近无住宿。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '栈道正常开放', c: 'free' },
        { t: '日出题材', c: 'free' },
        { t: '信息站已关闭', c: 'risk' },
        { t: '10/10 后附近无住宿', c: 'risk' }
      ],
      highlights: [
        '<strong>这里的独一无二在于地理叠加：热液特征直接开在 Yellowstone Lake 的岸线上，' +
          '有几个泉锥甚至泡在湖水里。</strong>' +
          '全园没有第二处能在一张照片里同时放进沸腾的热泉、湖面与远处的山脊线——' +
          '<strong>这是本子地区题材独特性最高的一个点，尽管规模不大</strong>',
        '<strong>地质上 West Thumb 本身就是一个「火山口里的火山口」。</strong>' +
          '那个在地图上明显突出的西侧湖湾，' +
          '<strong>是约 17.4 万年前一次爆炸形成的独立火山口，套在 64 万年前的 Yellowstone Caldera 里面</strong>；' +
          '<strong>它的形状与直径（约 4 公里）跟 Crater Lake 相当</strong>。' +
          '换句话说你站在一个小火山口的边上，脚下的热液活动就是它还没冷透的证据',
        '<strong>Fishing Cone 是这里最著名的单体，一个直接长在湖里的泉锥。</strong>' +
          '19 世纪的游客会站在锥子上钓鱼、然后把鱼直接放进沸腾的锥口里煮——' +
          '这个做法早已禁止，但那个画面留下了它的名字。' +
          '<strong>秋季湖水位较低，泉锥露出得更多，比夏季好拍</strong>',
        '<strong>Abyss Pool 与 Black Pool 是两个深水颜色题材。</strong>' +
          'Abyss Pool 是全园最深的热泉之一（约 53 英尺），' +
          '<strong>那种从边缘的祖母绿骤然坠入中心近乎墨黑的渐变，是「深渊」这个名字的字面意思</strong>；' +
          'Black Pool 名字来自它历史上被深色菌垫覆盖的样子，' +
          '<strong>1991 年一次升温杀死了那些菌群、它现在反而是清澈的蓝</strong>——' +
          '名字与现状不符，这本身就是个好解说点',
        '<strong>NPS 数据：栈道 0.6 英里／1 公里（分内外两个环，可只走内环缩短），全程无障碍，' +
          '游览 30 分钟到 1 小时。</strong>' +
          '<strong>这是本区性价比最高的一段栈道——一公里之内把湖、热泉、蒸汽、山脊全给你了</strong>',
        '<strong>这里的日出是本区最好的日出之一，而且原因很具体：栈道朝东正对湖面。</strong>' +
          '9/25 日出方位 90°（正东）、10/22 方位 105°（东偏南），' +
          '<strong>太阳从湖对面升起，低角度光横着穿过贴在湖面上漫开的蒸汽</strong>。' +
          '而且<strong>与 Firehole River 走廊不同，这里西侧是开阔湖面、几乎没有山脊遮挡</strong>，' +
          '<strong>东侧的湖对岸也只有 25–40 公里外的低角度山脊，' +
          '所以这里的日出与日落时刻接近表上的数值，不需要做 20–35 分钟的修正</strong>'
      ],
      photo: '风光 <strong>4.5/5</strong>，细节 <strong>4/5</strong>，人像 <strong>3/5</strong>。' +
        '<strong>加分全在「热泉 + 湖」这个全园唯一的组合上，而且它是本区少数几个日出机位里' +
        '光线不被山脊吃掉的一个。</strong>' +
        '扣分在于规模小（一公里走完）、离住宿远（10/10 之后附近全关），' +
        '以及从 Old Faithful 摸黑翻 Craig Pass 过来是个实打实的成本。',
      shots: [
        {
          name: '湖畔栈道 · Fishing Cone 与日出 —— 招牌机位',
          park: [44.41576, -110.57423],
          view: [44.41729, -110.57026],
          desc: '外环栈道最靠湖的那一段，Fishing Cone 一带。' +
            '<strong>时段：日出前 20 分钟到日出后 60 分钟</strong>' +
            '（9/25 约 06:55–08:15；10/22 约 07:25–08:45）——' +
            '<strong>注意这里可以直接用表上的日出时刻，不像 Old Faithful 要延后 20–25 分钟</strong>，' +
            '因为东侧的湖对岸只有远处的低角度山脊。' +
            '<strong>16–35mm 广角低机位</strong>：' +
            '<strong>把栈道边的泉锥或径流沟放进前景下缘、中景是漫过湖面的蒸汽、远景是对岸山脊与初升的太阳</strong>。' +
            '<strong>冷晨（前夜 −5 °C 以下、无风）时这里的蒸汽会贴着湖面横向漫开几十米，' +
            '那才是这个机位真正的样子</strong>。' +
            '<strong>逆光曝光：点测最亮蒸汽给 +1 到 +1.7 EV，让泉锥与栈道压成剪影。</strong>' +
            '<strong>三脚架必备</strong>——日出前的蓝调时段需要 1/4 到 2 秒，' +
            '而<strong>长曝会把湖面拍平、让蒸汽拉成流动的雾，这两点都是加分</strong>。' +
            '<strong>偏振镜此时摘掉</strong>（进光不够、且会削掉蒸汽的通透）。'
        },
        {
          name: 'Abyss Pool 与 Black Pool',
          park: [44.41576, -110.57423],
          view: [44.41701, -110.57197],
          desc: '内环栈道南段。<strong>纯颜色题材，规则与本区其他池子一致：正午到 15:00。</strong>' +
            '<strong>Abyss Pool 的重点是那道从边缘祖母绿骤降到中心墨黑的渐变</strong>——' +
            '<strong>35–85mm 略俯视、把池子放满画面，让渐变自己成为主体</strong>；' +
            '为了让深处的黑不发灰，<strong>偏振镜装上、压掉水面天光反射，并适度欠曝</strong>。' +
            '<strong>Black Pool 现在是清澈的蓝，用 24–70mm 收进池子加背后的湖面</strong>——' +
            '<strong>这是这里唯一能把「热泉」与「湖」在中焦下叠在一起的构图</strong>。' +
            '这两个池子蒸汽量中等，' +
            '<strong>有风的午后是最理想的条件</strong>。'
        },
        {
          name: '栈道北段 · 蒸汽漫过湖面',
          park: [44.41576, -110.57423],
          view: [44.41591, -110.57374],
          desc: '外环北段、栈道折回内陆之前的位置。' +
            '<strong>这个机位的主体不是任何一个热泉，而是「蒸汽 + 湖面 + 光」这个组合本身。</strong>' +
            '<strong>70–200mm 压缩</strong>：' +
            '把湖面上横漫的蒸汽带、湖水的深蓝与对岸山脊的层次压成三条水平色带，' +
            '<strong>这是极简构图的好素材</strong>。' +
            '<strong>清晨逆光最好，但傍晚也成立</strong>——' +
            '日落方位 9/25 是 270°、10/22 是 255°，' +
            '<strong>此时太阳在你身后偏右，蒸汽被顺光打成亮白、湖面呈深蓝，反差干净</strong>。' +
            '<strong>湖面在清晨最平静、午后起风，所以要倒影就必须早来</strong>。' +
            '<strong>严格留在栈道上</strong>：Compendium 明文禁止在 Little Thumb Creek 到 West Thumb 热区南端之间的' +
            '<strong>湖岸靠岸与登岸</strong>，不要为了低机位走到湖滩上。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>',
        hours: '<strong>栈道无门禁、全天可入，2026 年秋季无公布的季节性封闭或栈道封闭段（已核实）。</strong>' +
          '<strong>但 West Thumb Information Station 已于 2026 年 7 月 13 日结束营业，秋季不会再开</strong>——' +
          '<strong>停车场厕所秋季也可能关闭，请在 Old Faithful 或 Grant Village 解决</strong>。' +
          '所在的 West Thumb ↔ Grant Village ↔ South Entrance 与 West Thumb ↔ Old Faithful（Craig Pass）' +
          '两段公路 2026 年通车至 <strong>10/31</strong>',
        parking: '主路旁的专用停车场（OSM 停车面中心 <strong>44.41576, −110.57423</strong>），' +
          '<strong>规模中等，10 月无压力</strong>。' +
          '<strong>清晨来拍日出时停车场是空的</strong>',
        walk: '停车场到湖畔栈道约 <strong>150 米／3 分钟</strong>。' +
          '<strong>栈道 0.6 英里／1 公里，分内外两环、可只走内环，全程无障碍。</strong>' +
          '含拍摄 <strong>45–75 分钟</strong>'
      },
      notes: [
        '<strong>10/10 之后这一带没有园内住宿：Grant Village 与 Lake Yellowstone Hotel 同日关门。</strong>' +
          '要在这里拍日出只能从 <strong>Old Faithful 出发（17 英里／约 35 分钟，摸黑翻海拔 8,262 英尺的 Craig Pass）</strong>，' +
          '而 <strong>10/24 之后 Old Faithful 也没有住宿了</strong>——' +
          '<strong>换句话说 10/25–10/31 这七天，West Thumb 的日出实际上不可行</strong>' +
          '（从 West Yellowstone 开过来要 1 小时 20 分，得 05:50 前出发）',
        '<strong>Craig Pass 是本区海拔最高的一段路（8,262 英尺），最容易积雪与结冰。</strong>' +
          '<strong>10 月下旬摸黑翻这段要格外小心</strong>，' +
          '出发前查路况（(307) 344-2117）——' +
          '<strong>但注意这条路上没有加油站、也没有信号，路上出问题无法求援</strong>',
        '<strong>Grant Village 是湖区南段唯一的加油点，离 West Thumb 只有 2 英里</strong>：' +
          '<strong>便利店开到 10/13，但刷卡自助泵按 NPS 标注全年 24 小时可用</strong>。' +
          'Grant Visitor Center 10/3、Grant Village General Store 9/27、Grant Mini Store 10/4、' +
          'Grant Village Campground 9/26',
        '<strong>秋季常有野牛与麋鹿在栈道附近活动</strong>，' +
          '好处是湖畔视野开阔、能提前发现。' +
          '<strong>与野牛／麋鹿 25 码、与熊／狼 100 码是法定距离</strong>；' +
          '9 月麋鹿 rut 活跃，10 月熊处于 hyperphagia',
        '<strong>栈道紧贴湖岸，清晨会结霜结冰</strong>；' +
          '<strong>天亮前来拍日出必带头灯，冰爪有用</strong>',
        '<strong>H₂S 在无风冷晨会在低洼处积聚</strong>，' +
          '眼刺痛、头痛、恶心就立刻往高处与上风向走',
        '<strong>基本没有手机信号</strong>（最近的基站在 Grant Village 与 Lake Village）；' +
          '离线地图必备'
      ],
      images: [
        { url: 'img/west-thumb-geyser-basin-sunrise-36920812466-39a4a1eb.jpg',
          cap: 'West Thumb 的湖畔日出与漫过湖面的蒸汽 · NPS / Public domain' },
        { url: 'img/fishing-cone-at-west-thumb-geyser-basin-on-yellowstone-lake--a9466448.jpg',
          cap: '泡在湖水里的 Fishing Cone · Neal Herbert / NPS / Public domain' },
        { url: 'img/west-thumb-geyser-basin-48350384107-59e786f0.jpg',
          cap: '热泉与 Yellowstone Lake 的叠加视野 · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-gb-yellowstone-lake',
      n: 9,
      name: '黄石湖 · 渔桥与海鸥角',
      en: 'Yellowstone Lake · Fishing Bridge & Gull Point',
      score: 4,
      tldr: '北美 7,000 英尺以上最大的湖，132 平方英里、最深 430 英尺。午后起风、只有清晨才有镜面倒影，对岸就是 Absaroka 山脊。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '日出最佳', c: 'free' },
        { t: '午后起风无倒影', c: 'risk' },
        { t: '10/10 后无住宿', c: 'risk' },
        { t: 'Bridge Bay 桥梁施工', c: 'risk' }
      ],
      highlights: [
        '<strong>规模数据值得记住，因为它决定了你怎么拍：Yellowstone Lake 面积 132 平方英里（341 平方公里）、' +
          '岸线长 141 英里（227 公里）、平均水深 140 英尺、最深约 430 英尺，湖面海拔 7,733 英尺——' +
          '是北美海拔 7,000 英尺以上最大的湖。</strong>' +
          '<strong>摄影上的含义很直接：它太大了，广角只会拍出一条无聊的水平线</strong>。' +
          '<strong>这里的正解是长焦压缩与前景优先，而不是「拍下整个湖」</strong>',
        '<strong>「清晨光更好」在这里有一个具体的物理原因，不是审美偏好：湖面午后必起风。</strong>' +
          '132 平方英里的开阔水面配上山谷地形，' +
          '<strong>白天升温后风几乎每天都会起来，湖面从镜面变成碎浪</strong>。' +
          '<strong>要倒影就只有清晨，而且是日出前后那一小时——这是本条目最重要的一句话。</strong>' +
          '午后来这里只能拍浪与光斑，那是完全不同的（也更弱的）照片',
        '<strong>对岸的 Absaroka Range 是这里的天际线，但它的光位需要想清楚。</strong>' +
          '山脊在湖的<strong>东侧与东南侧、距离 25–40 公里</strong>，' +
          '而<strong>秋季日出方位是 90°（9/25）到 105°（10/22）——正好从这道山脊后面升起</strong>。' +
          '<strong>所以清晨的 Absaroka 是逆光的剪影，不是被照亮的山峰</strong>：' +
          '你要拍的是<strong>「深蓝的山脊剪影 + 天空的粉橙渐变 + 镜面湖水把这一切复制一遍」</strong>，' +
          '而不是阿尔卑斯式的山峰暖光。' +
          '<strong>反过来，要看到 Absaroka 被暖光正面照亮，必须在日落前的最后半小时来</strong>' +
          '（太阳落在西边、正面照向东侧山脊），' +
          '<strong>但那时湖面已经起风、没有倒影——两者不可兼得，这是本条目的核心权衡</strong>',
        '<strong>Fishing Bridge 是湖的出水口，Yellowstone River 从这里流出，也是最容易抵达的岸边机位。</strong>' +
          '桥本身建于 1937 年，' +
          '<strong>历史上曾是钓褐鳟的著名地点，1973 年起全面禁钓</strong>' +
          '（这段河道是本地割喉鳟的关键产卵区），' +
          '<strong>但正因为禁钓，秋季常能在桥上看到水下的鳟鱼，也常有水獬、鹈鹕与鹗</strong>。' +
          '桥面本身是很好的引导线',
        '<strong>Gull Point Drive 是湖西岸的一条 2 英里支线，把你带到真正贴着水的地方。</strong>' +
          '它从 Bridge Bay 与 Lake Village 之间岔出，' +
          '<strong>沿湖岸走一段后回到主路，途中的 Gull Point 与 Gull Point Picnic Area 是本条目最好的低机位</strong>——' +
          '<strong>可以直接走到湖石滩上，把湖石与浮木放进前景</strong>' +
          '（<strong>与 West Thumb 不同，这一段湖岸没有登岸限制</strong>）。' +
          '<strong>关于它是否为单行道：OSM 路网数据上没有 oneway 标签，' +
          '而多份第三方旅游资料称它是单行；未能从官方渠道确认，进入前看现场标牌</strong>',
        '<strong>秋季这一带是本区最好的野生动物机会区之一。</strong>' +
          'Pelican Creek 一带的湿地、湖岸的开阔视野、' +
          '<strong>加上 9 月的麋鹿 rut——湖畔的公麋鹿鸣叫是极好的录音与远摄素材</strong>。' +
          '<strong>但这一带也是灰熊密度较高的区域</strong>' +
          '（Fishing Bridge 一带历史上因熊活动而长期限制过夜露营）'
      ],
      photo: '风光 <strong>4/5</strong>，野生动物 <strong>4/5</strong>，人像 <strong>3/5</strong>。' +
        '<strong>它是本子地区里唯一的「大风景」题材，也是唯一一个不需要处理蒸汽问题的地方</strong>——' +
        '在连拍三天间歇泉之后，这一点的价值比分数看起来更高。' +
        '扣分在于<strong>它对时间窗口极为苛刻（只有清晨那一小时）、离住宿远（10/10 后附近全关）、' +
        '而且湖太大，很容易拍出平淡的照片</strong>。',
      shots: [
        {
          name: 'Gull Point 湖石滩低机位 —— 主机位',
          park: [44.52632, -110.41721],
          view: [44.52744, -110.41659],
          desc: '<strong>Gull Point Drive 上的 Gull Point 与相邻的野餐区，是本条目唯一能走到水边的低机位。</strong>' +
            '<strong>时段：日出前 30 分钟到日出后 45 分钟</strong>' +
            '（9/25 约 06:45–08:00；10/22 约 07:15–08:30）。' +
            '<strong>16–35mm 广角、机位压到离水面 20–40 厘米</strong>：' +
            '<strong>让湖石、浮木或结霜的岸草占据画面下三分之一，中景是镜面湖水，远景是 Absaroka 剪影</strong>——' +
            '<strong>前景是这里成败的关键，没有前景的湖面照片一定平淡。</strong>' +
            '<strong>三脚架必备</strong>，蓝调时段需要 1/2 到 4 秒；' +
            '<strong>1–4 秒的长曝会把残余的细浪抹平，让倒影更干净</strong>。' +
            '<strong>偏振镜要摘掉</strong>——它会削弱水面倒影，而倒影就是这张照片的全部。' +
            '<strong>如果当天起风、倒影没了，就立刻切到 70–200mm 拍对岸山脊的层次</strong>，' +
            '不要浪费时间等风停（湖上的风一起来通常不会在早上停）。' +
            '<strong>另一个方向：Gull Point 朝东南望出去水面开阔，' +
            '日落前最后半小时太阳在你身后照亮对岸山脊，那是这里唯一的暖光机会。</strong>'
        },
        {
          name: 'Fishing Bridge 桥上与出水口',
          park: [44.56440, -110.37759],
          view: [44.56660, -110.38206],
          desc: '<strong>桥本身是最好用的构图元素：栏杆与桥面的透视是天然的引导线。</strong>' +
            '<strong>时段同样是清晨</strong>' +
            '（9/25 约 06:45–08:00；10/22 约 07:15–08:30）；' +
            '<strong>这里朝东看出去是 25–40 公里外的 Absaroka 山脊，抬高约 1.5°，' +
            '所以真正见光只比表上日出晚 10 分钟左右，比 Old Faithful 那边的 20–25 分钟修正小得多</strong>。' +
            '<strong>24–70mm 竖构图沿桥面纵深</strong>，' +
            '或<strong>走到桥的一端、用 35–50mm 把桥的侧影与湖出水口一起收进来</strong>。' +
            '<strong>Yellowstone River 从这里流出，水面比湖面更容易起雾</strong>——' +
            '<strong>冷晨（−5 °C 以下）这段河面会有一层贴水的晨雾，那是这个机位最好的状态</strong>。' +
            '<strong>桥上是很好的野生动物观察点</strong>：' +
            '禁钓五十多年，水下常见鳟鱼，也常有鹈鹕、鹗与水獬。' +
            '<strong>长焦（100–400mm）值得带上</strong>。' +
            '<strong>桥面人车共用、有栏杆可作支点，但车经过会震动，长曝要挑空档。</strong>'
        },
        {
          name: 'Pelican Creek Nature Trail 湿地',
          park: [44.56440, -110.37759],
          view: [44.55836, -110.36307],
          desc: '<strong>Fishing Bridge 以东约 1.5 公里的一条 1.3 公里短环线，穿过湿地走到湖岸沙滩。</strong>' +
            '<strong>这是本条目最好的野生动物与氛围机位，也是唯一一处有「湿地 + 湖」层次的地方。</strong>' +
            '<strong>清晨的湿地容易起雾，配上麋鹿鸣叫（9 月）是很强的组合</strong>。' +
            '<strong>24–70mm 拍湿地的草与水洼，100–400mm 拍水鸟与远处的麋鹿。</strong>' +
            '<strong>步道尽头的湖岸沙滩是另一个可用的低机位</strong>，' +
            '比 Gull Point 更少人。' +
            '<strong>重要提醒：这条步道穿过灰熊高活动区的湿地，秋季视野被高草挡住</strong>——' +
            '<strong>防熊喷雾握在手里、结伴而行、出声，不要在天完全没亮时单独进去。</strong>' +
            '（Trailhead 无独立停车面数据，' +
            '<strong>park 字段沿用 Fishing Bridge Picnic Area 的坐标</strong>。）'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '含在园区门票内，<strong>年票覆盖</strong>',
        hours: '<strong>湖岸与桥无门禁、全天可入。</strong>' +
          '<strong>Gull Point Drive 是季节性支线，2026 年没有单独公布的关闭日期</strong>，' +
          '按通则应与主环路同步在 <strong>10/31</strong> 结束通车，' +
          '<strong>但这一点未能从官方渠道单独确认，且它不在 NPS 实时路况地图上</strong>；' +
          '<strong>是否单行也未能核实（OSM 无 oneway 标签，第三方资料称单行）</strong>，进入前看现场标牌。' +
          '所在的 Canyon ↔ Bridge Bay、East Entrance ↔ Fishing Bridge（Sylvan Pass）、' +
          'West Thumb ↔ Lake Village 三段均通车至 <strong>10/31</strong>。' +
          '设施：<strong>Fishing Bridge Visitor Center 10/3、Fishing Bridge General Store 10/18、' +
          'Fishing Bridge RV Park 10/17、Bridge Bay Campground 9/13</strong>',
        parking: '<strong>Fishing Bridge Picnic Area（44.56440, −110.37759）与 ' +
          'Gull Point Picnic Area（44.52632, −110.41721）是两处最实用的停车点</strong>，' +
          '均为正式设施、10 月无压力。' +
          '桥两端也有路侧停车带，但清晨结霜时路肩滑',
        walk: '<strong>Fishing Bridge 停车即到、桥长约 100 米。</strong>' +
          '<strong>Gull Point 从野餐区走到水边不足 100 米。</strong>' +
          '<strong>Pelican Creek Nature Trail 环线 1.3 公里／0.8 英里，平坦，30–40 分钟。</strong>' +
          '整个条目含转场 <strong>1.5–2.5 小时</strong>'
      },
      notes: [
        '<strong>Bridge Bay Bridge 的桥梁施工直接压在这条线路上：2026 年 8 月 25 日起至 11 月，最多 15 分钟延误。</strong>' +
          '<strong>它就在 Gull Point Drive 与 Fishing Bridge 之间</strong>——' +
          '<strong>摸黑赶日出时务必把这 15 分钟算进出发时间</strong>',
        '<strong>10/10 之后这一带没有园内住宿：Lake Yellowstone Hotel 与 Grant Village 同日关门，' +
          'Lake Lodge Cabins 更早（10/3）。</strong>' +
          '之后要拍这里的日出只能从 <strong>Canyon Lodge（16 英里／约 30 分钟，开到 10/24）</strong>' +
          '或 <strong>Old Faithful（38 英里／约 1 小时 15 分，开到 10/24）</strong>出发；' +
          '<strong>10/25 之后从任何还营业的住宿点过来都超过 1 小时 30 分，实际上不可行</strong>',
        '<strong>午后必起风，这是规划上的硬约束。</strong>' +
          '<strong>要倒影就必须清晨来；如果你的行程只能安排在午后，' +
          '就把这一站降级成「路过时拍对岸山脊的长焦压缩」，不要指望镜面湖水</strong>',
        '<strong>Fishing Bridge 一带是全园灰熊密度较高的区域之一</strong>' +
          '（历史上因此长期限制此处的帐篷露营，RV Park 只允许硬壳车辆）。' +
          '<strong>10 月熊处于 hyperphagia，Pelican Creek 的湿地视野差</strong>——' +
          '<strong>喷雾握在手里、结伴、出声</strong>；' +
          '<strong>本区唯一的喷雾租借亭在 Old Faithful 且 10/3 关门，之后只能自带</strong>',
        '<strong>9 月麋鹿 rut 在这一带活跃</strong>，' +
          '<strong>发情期公麋鹿会主动逼近人与车，25 码是法定距离</strong>；' +
          '鸣叫是好素材但不要循声靠近',
        '<strong>湖水常年约 5 °C（41 °F），落水后失温极快。</strong>' +
          '<strong>清晨湖石与浮木上结霜结冰，低机位时不要踩上湿滑的圆石</strong>——' +
          '<strong>为一个前景滑进 5 °C 的水里是本条目最现实的风险</strong>',
        '<strong>加油：Fishing Bridge 的便利店开到 10/11，' +
          '但刷卡自助泵按 NPS 标注全年 24 小时可用</strong>；' +
          '<strong>往南 21 英里的 Grant Village 是另一处（店面 10/13）</strong>。' +
          '这两点之间没有别的补给',
        '<strong>手机信号：Lake Village 与 Grant Village 有基站，桥上通常有弱信号，' +
          '但 Gull Point Drive 与 Pelican Creek 步道上基本没有。</strong>' +
          '离线地图必备'
      ],
      images: [
        { url: 'img/yellowstone-lake-on-a-smoky-sunrise-d4456571.jpg',
          cap: 'Yellowstone Lake 的日出与镜面湖水 · Jrmichae / CC BY-SA 4.0' },
        { url: 'img/fishing-bridge-yellowstone-national-park-2024-e74ff757.jpg',
          cap: 'Yellowstone River 出水口上的 Fishing Bridge · Larry D. Moore / CC BY 4.0' },
        { url: 'img/stevenson-island-yellowstone-lake-ynp1-c3573ba5.jpg',
          cap: '湖面与对岸远山的层次（Stevenson Island 方向） · Acroterion / CC BY-SA 4.0' }
      ]
    }
  ]
};
