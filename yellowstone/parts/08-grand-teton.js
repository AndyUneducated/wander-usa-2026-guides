module.exports = {
  id: 'grand-teton',
  name: 'Grand Teton 与 Jackson',
  navName: 'Grand Teton',
  color: '#4bd18a',
  lead: '这个子地区只有一条主线逻辑：<strong>Teton Range 南北走向、整体立在河谷的西侧</strong>，所以山体在日出时是正面受光、在日落时是逆光。' +
    '本区十个点里有七个是<strong>纯日出题材</strong>，只有 Signal Mountain 一个真正意义上的日落点，Jackson 镇是唯一的夜间题材。' +
    '接下来是两个必须先接受的现实。第一，<strong>秋色的峰值在 9 月 18 日至 10 月 2 日前后，10 月中旬之后 Oxbow Bend 和蛇河沿线的棉白杨基本已经落光</strong>——' +
    '如果你的日期落在 10 月下旬，来这里就不再是「拍金色倒影」，而是「拍初雪与霜」，价值主张完全不同，请提前调整预期。' +
    '第二，<strong>2026 年 Moose-Wilson Road 自 9 月 8 日起因二期改建全线封闭至 11 月 15 日</strong>，' +
    '传统的驼鹿观察路线整条报废，替代方案只能是 Gros Ventre 一带。' +
    '好消息是主干道没问题：<strong>Teton Park Road 开到 10 月 31 日、US-26/89/191 全年开放</strong>，' +
    '而 10 月的游客量只有 7 月的零头，Mormon Row 日出不再是三十台三脚架抢位。' +
    '真正会卡住你的是<strong>食宿与加油的关门日</strong>——Jackson Lake Lodge 10 月 4 日、Signal Mountain 10 月 11 日、Colter Bay 加油站 10 月 9 日，' +
    '10 月中旬之后园内基本没有补给，一切要从 Jackson 出发。',
  callouts: [
    {
      type: 'warn',
      title: '2026 年园内道路封闭日期表——本区最重要的一张表',
      html: '<p>全部核对自 <a href="https://www.nps.gov/grte/planyourvisit/roads.htm">nps.gov/grte 官方 Park Roads 页</a>（最后更新 2026 年 9 月 2 日）与 ' +
        '<a href="https://www.nps.gov/grte/planyourvisit/road-construction.htm">Road Construction 页</a>（最后更新 2026 年 9 月 4 日）。</p>' +
        '<ul>' +
        '<li><strong>US-26/89/191（外环 / North Park Road）：全年开放</strong>，从 Jackson 一路铲雪通到 Flagg Ranch。这是本区一切方案的兜底路线。' +
        '但注意 <strong>Leeks Marina 至 Lizard Creek Campground 段仍在施工</strong>：白天 06:00–21:00 延误 15 分钟，' +
        '<strong>夜间 21:00–06:00 延误最长 1 小时</strong>，且施工段附近的 turnout 全部关闭。夜里去 Yellowstone 或从北面赶 Oxbow Bend 日出的话，这一小时必须算进去。</li>' +
        '<li><strong>Teton Park Road（内环，Taggart Lake Trailhead ↔ Signal Mountain Lodge）：11 月 1 日 – 4 月 30 日封闭。</strong>' +
        '官方原文「closed November 1 to April 30」，2026 年沿用。11 月 1 日之后到积雪前仍可步行与骑行，之后转为压雪的非机动通道。' +
        '<strong>也就是说 10 月 31 日是最后一个能开车走 Jenny Lake 那一侧的日子。</strong></li>' +
        '<li><strong>Signal Mountain Summit Road：11 月 1 日封闭。</strong>需要注意的是 <strong>2026 年官方 Park Roads 页并没有单独列出这条路的日期</strong>，' +
        '「11 月 1 日」来自 NPS 历年新闻稿口径（「Teton Park, Moose-Wilson, and Signal Mountain Summit roads are closed to public motor vehicle use beginning November 1」）' +
        '与 Jackson Hole 官方旅游局页面。它海拔高、路窄多弯，<strong>一场早雪就可能提前关</strong>，出发当天必须查实时路况图。</li>' +
        '<li><strong>Moose-Wilson Road（Laurance S. Rockefeller Preserve ↔ Moose）：2026 年 9 月 8 日起全线封闭至 11 月 15 日，车辆与自行车都不行。</strong>' +
        '这是 Moose-Wilson Road Phase II 改建（2026 年 5 月 – 2027 年），官方 2026 年时间表原文：' +
        '「May 1 – June 19: Closure / June 20 – September 7: Delay of 45 minutes or longer / <strong>September 8 – November 15: Closure</strong>」。' +
        '<strong>你的整个窗口都在封闭期内。</strong>紧接着 11 月 1 日又叠加常规冬季封闭（至次年 5 月中）。</li>' +
        '<li><strong>Death Canyon Road 与 Death Canyon Trailhead：2026 年 5 月 – 2027 年 6 月全时段封闭</strong>，行人也不行。Phelps Lake 只能从 Granite Canyon 或 LSR Preserve 走，停车位极少。</li>' +
        '<li><strong>Teton Park Road / Moose 入口环岛工程：5 月 1 日 – 11 月 15 日，延误 20 分钟</strong>（不含入口站排队）。' +
        '<strong>算日出机位时这 20 分钟必须扣掉</strong>——从 Jackson 走内环去 Jenny Lake 拍日出会撞上它。<strong>Menor\u2019s Ferry Road 工作日全天封闭</strong>。</li>' +
        '<li><strong>Schwabacher Landing Road：NPS 口径「typically closed mid-October to mid-May」</strong>，是条约 1 英里的碎石支路，约 20 个车位。' +
        '9 月下旬可靠，<strong>10 月下旬有实质概率已经关了</strong>。</li>' +
        '<li><strong>Antelope Flats Road / Mormon Row Road、Deadmans Bar、Pilgrim Creek、Two Ocean：官方归类为「closed seasonally based on conditions」，无固定日期</strong>，惯例也是 11 月 1 日前后。</li>' +
        '<li><strong>Grassy Lake Road（Rockefeller Parkway，Flagg Ranch 往西）：按条件关闭、冬季不铲雪</strong>，没有公布日期。它是未铺装路，10 月一场雨雪就会烂掉，除非你有高底盘车否则不必列入计划。</li>' +
        '<li><strong>Jenny Lake Scenic Drive（单行观景环路）：5 月 1 日 – 10 月 31 日开放。</strong></li>' +
        '</ul>' +
        '<p>实时路况：<a href="https://go.nps.gov/tetonroads">go.nps.gov/tetonroads</a> 的 Live Road Status Map，或电话 <strong>307-739-3682</strong>（园内路况专线）。' +
        '州级路况 <a href="http://www.wyoroad.info">wyoroad.info</a> 或手机拨 511。</p>'
    },
    {
      type: 'warn',
      title: '秋色时间窗：峰值 9/18–10/2，10 月下旬大概率已经光秃',
      html: '<p>这是本区最容易把整趟行程判死的一项。<strong>Grand Teton 谷底的 quaking aspen 与 narrowleaf cottonwood 变色窗口极短</strong>，' +
        '而 Oxbow Bend、Schwabacher Landing、蛇河沿线的全部价值都建立在这段金色上。</p>' +
        '<p>物候数据（fallphotoguide.com 对 Oxbow Bend 的历史模型）：' +
        '<strong>初变色 8/27–9/5 · 接近峰值 9/5–9/13 · 峰值 9/13–9/21 · 过峰 9/21–10/1 · <u>10 月 1 日 – 10 月 15 日为「bare」（落光）</u></strong>，典型峰值日 9 月 17 日。' +
        '同源数据给 Snake River Overlook 峰值 9 月 16 日、Schwabacher Landing 峰值 9 月 18 日。' +
        '<strong>2026 年实测（9 月 5 日）：Oxbow Bend 处于「初变色 10–25%」，模型预计还有约 13 天到峰值，即 9 月 18 日前后</strong>，与历史均值基本吻合、略偏晚。</p>' +
        '<p><strong>结论，说白话：</strong></p>' +
        '<ul>' +
        '<li><strong>9 月 20 日 – 9 月 30 日：这是你要的那一周。</strong>金色棉白杨 + 无风水面 + 全部设施还开着 + 人比夏天少。这段时间来，Oxbow Bend 值 5 分。</li>' +
        '<li><strong>10 月 1 日 – 10 月 10 日：过峰但还有残色</strong>，山上开始有初雪，「金 + 白」的组合其实很好看。设施陆续关门。</li>' +
        '<li><strong>10 月 15 日之后：棉白杨基本落光，Oxbow Bend 前景是灰褐色的枝干和枯柳。</strong>这时候 Oxbow Bend 仍然能拍——Mount Moran 加倒影这个构图本身不依赖树叶——但它已经不是「全园最好的一张照片」了，' +
        '真正的题材变成霜、雾凇、初雪和野生动物。<strong>如果你能选日期，别选 10 月下旬来拍秋色；如果日期已定在 10 月下旬，请把预期从「秋色」改成「初冬」，把重心从 Oxbow Bend 移到 Mormon Row 的霜和 Gros Ventre 的驼鹿。</strong></li>' +
        '</ul>' +
        '<p><strong>未能核实：</strong>没有任何机构发布 2026 年 Grand Teton 秋色的官方预报。上述判断来自历史物候模型 + 2026 年 9 月初的实测进度，' +
        '一次早霜或一场大风就能把峰值提前或直接结束。出发前一周请看 NPS 的 <a href="https://www.nps.gov/grte/planyourvisit/conditions.htm">Alerts &amp; Current Conditions</a> 与园区网络摄像头。</p>'
    },
    {
      type: 'warn',
      title: '食宿、加油、访客中心 2026 年关门日——10/4 与 10/11 是两个断崖',
      html: '<p>全部来自 <a href="https://www.nps.gov/grte/planyourvisit/hours.htm">nps.gov/grte 官方 Operating Hours &amp; Seasons 页</a>的 2026 年表格。' +
        '这直接决定你能不能在 Oxbow Bend 附近过夜去拍日出。</p>' +
        '<ul>' +
        '<li><strong>10 月 3 日：</strong>Jackson Lake Lodge 的 Blue Heron Lounge、Corrals。</li>' +
        '<li><strong>10 月 4 日（第一个断崖）：<u>Jackson Lake Lodge 全部关闭</u></strong>（含 Mural Room、Pioneer Grill、商店、咖啡车）、' +
        '<strong>Jenny Lake Lodge 与餐厅</strong>、<strong>Jenny Lake General Store</strong>、Headwaters Lodge（Flagg Ranch）、Jackson Hole Aerial Tram。' +
        '→ <strong>10 月 5 日起，Oxbow Bend 半小时车程内没有任何住宿。</strong></li>' +
        '<li><strong>10 月 9 日：Colter Bay 便利店与加油站</strong>（此前 24 小时自助）。</li>' +
        '<li><strong>10 月 10 日：</strong>Gros Ventre Campground、Colter Bay RV Park 与洗衣淋浴、Peaks Restaurant、Needles Gift Store、Deadmans Bar。</li>' +
        '<li><strong>10 月 11 日（第二个断崖）：<u>Signal Mountain Lodge 全部关闭</u></strong>——含 Trapper Grill、Timbers、营地、淋浴，' +
        '以及 <strong>Signal Mountain General Store 与加油站</strong>。→ <strong>10 月 12 日起，园内西侧完全没有补给。</strong></li>' +
        '<li><strong>10 月 12 日：Jenny Lake Visitor Center。</strong></li>' +
        '<li><strong>10 月 18 日：Headwaters（Flagg Ranch）便利店与加油站——这是园内最后一个加油点。</strong></li>' +
        '<li><strong>10 月 31 日：Craig Thomas Discovery and Visitor Center（Moose）、Menor\u2019s Ferry Historic District、String Lake 独木舟下水点。</strong>' +
        'Craig Thomas 是本区营业最久的访客中心，10 月下旬唯一能拿纸质地图、问路况、买 pass 的地方。</li>' +
        '<li>已经关掉的：Colter Bay Visitor Center（9/30）、Jenny Lake Campground 与 Colter Bay 各设施（9/27）、Signal Mountain Marina 与 Leeks Marina（9/20）、Laurance S. Rockefeller Preserve Center（9/20）。</li>' +
        '</ul>' +
        '<p><strong>加油的硬结论：10 月 18 日之后，从 Jackson 到 Yellowstone 之间没有任何加油站。</strong>Jackson 镇是唯一全年可靠的补给点，' +
        '离开 Jackson 前把油加满，来回 Oxbow Bend 一趟约 110 英里。</p>'
    },
    {
      type: 'info',
      title: '本区的几何基本盘：山在西边，所以几乎全是日出题材',
      html: '<p><strong>Teton Range 南北走向，整体位于 Jackson Hole 河谷的西侧，山脚没有前山缓冲，直接从平坦谷底拔起约 7,000 英尺。</strong>' +
        '这个几何决定了一切：<strong>太阳从东边的 Gros Ventre 山脉后面升起时，山体东壁被正面照亮；太阳落到 Teton 山脊背后时，你看到的是逆光剪影。</strong></p>' +
        '<p>实算日照数据（America/Denver 时区，NOAA 太阳位置算法，已用 Oxbow Bend 9 月 17 日的第三方数据交叉校验一致）：</p>' +
        '<ul>' +
        '<li><strong>9 月 25 日：</strong>民用晨光 06:44 · <strong>日出 07:13（方位 91°，正东）</strong> · 日落 19:15（方位 269°，正西） · 民用暮光结束 19:43</li>' +
        '<li><strong>10 月 22 日：</strong>民用晨光 07:16 · <strong>日出 07:46（方位 105°，东偏南 15°）</strong> · 日落 18:28（方位 255°） · 民用暮光结束 18:57</li>' +
        '<li><strong>10 月 31 日（夏令时最后一天）：</strong>日出 07:57 · 日落 18:14</li>' +
        '<li><strong>11 月 1 日 02:00 夏令时结束</strong>，钟表拨回一小时：日出 06:58 · 日落 17:13。' +
        '<strong>这一天正好也是 Teton Park Road 与 Signal Mountain Summit Road 的封闭日</strong>——如果你的行程压到月底，这两件事会在同一个早上撞在一起。' +
        '「9 月下旬至 10 月下旬」这个窗口本身不跨夏令时切换。</li>' +
        '</ul>' +
        '<p><strong>各机位到主峰的实算方位与仰角</strong>（用于判断哪个点什么时候会进山影，推算，海拔取地形近似值）：</p>' +
        '<ul>' +
        '<li>Oxbow Bend → Mount Moran：方位 <strong>259°</strong>、18.7 km、仰角 5.5°。9/25 日落方位 269°，<strong>太阳几乎正好落进 Mount Moran 背后，直射光比日历日落早约 30 分钟结束</strong>。</li>' +
        '<li>Snake River Overlook → Grand Teton：方位 <strong>265°</strong>、14.4 km、仰角 8.3°，<strong>直射光提前约 45 分钟结束</strong>。</li>' +
        '<li>Mormon Row → Grand Teton：方位 <strong>309°</strong>（西北），Mount Moran 方位 335°。日出方位 91–105° 恰好从谷仓正面照过去，山也是顺光。<strong>教科书级的日出点。</strong></li>' +
        '<li>Schwabacher Landing → Grand Teton：方位 287°、11.1 km、<strong>仰角 11.2°，直射光提前约 60 分钟结束</strong>。</li>' +
        '<li>Taggart Lake → Grand Teton：方位 317°、仅 5.6 km、<strong>仰角 20.8°</strong>——山太近太高，<strong>湖面在日落前 1.5–2 小时就进山影</strong>。</li>' +
        '</ul>' +
        '<p><strong>反过来，日出侧也有遮挡：</strong>东边的 Gros Ventre 山脊会把谷底真正见光的时间比日历日出推后约 10–20 分钟（推算）。' +
        '但<strong>山顶不受影响，Mount Moran 峰顶在日历日出时刻就已经开始转红</strong>。' +
        '「峰顶已亮、水面还暗」的那 15 分钟，正是 Oxbow Bend 与 Mormon Row 要抓的那一张。请按<strong>日历日出前 45 分钟到位</strong>安排。</p>'
    },
    {
      type: 'tip',
      title: '熊、低温、门票、信号：出门前的五件事',
      html: '<ul>' +
        '<li><strong>熊：9 月下旬到 10 月是 hyperphagia（增食期），全年冲突最高的时段。</strong>NPS 现行公告原文要求「travel in groups of three or more, make noise, and carry bear spray」，' +
        '<strong>法定距离：熊与狼 100 码（约 91 米），其他动物 25 码</strong>，车内车外一视同仁。' +
        '熊喷雾必须是 <strong>EPA 注册、标注「for deterring attacks by bears」、有效成分 1–2% capsaicinoids、喷射时长 ≥6 秒、射程 ≥25 英尺</strong>的产品，普通防身喷雾无效。' +
        'NPS 的使用口径：<strong>只在熊冲锋时用，拔掉保险，向熊前腿方向略微下压，在 15–30 英尺距离连喷 1–2 秒</strong>形成雾墙。' +
        '一般遭遇（熊没冲过来）时<strong>不要喷</strong>，慢慢后退。<strong>2026 年是热干夏季、浆果歉收年</strong>——参考量级：2024 年（歉收年）Jackson 辖区加园区记录到 164 起黑熊冲突与 22 起灰熊冲突，' +
        '2025 年（丰收年）只有 31 起与 4 起。<strong>今年请当成歉收年对待。</strong>喷雾不能带上飞机，在 Jackson 的户外店买或租。</li>' +
        '<li><strong>低温与器材：</strong>NOAA 1991–2020 常年值（Moose 1 NNE 站，海拔 6,466 英尺）——<strong>9 月均高 68°F/20°C、均低 35°F/1.5°C；10 月均高 53°F/11.5°C、均低 25°F/-4°C</strong>。' +
        'Jackson 逐日值：10 月 22 日均高 53°F、均低 23°F（-5°C），该站 10 月 26 日的历史极低是 <strong>-9°F（-23°C）</strong>。Moose 一年有约 234 天最低气温在冰点以下。' +
        '→ <strong>锂电池在 -5°C 下容量掉三到四成，日出机位请备三块以上并贴身放在内层口袋</strong>；' +
        '<strong>拍完从户外进车内或进屋前，先把机身镜头装进密封袋再进温暖环境</strong>，否则镜片和传感器腔内会结露，擦不掉且要等一小时。三脚架碳纤维管在 -5°C 下扳扣会变涩，戴薄手套操作。</li>' +
        '<li><strong>霜是资产不是麻烦。</strong>晴朗无风的夜里，Mormon Row 与 Antelope Flats 的 sagebrush 会挂一层白霜，日出侧光下整片鼠尾草滩会发亮——' +
        '<strong>这是这个季节 Mormon Row 相对夏天唯一的、也是决定性的加分项</strong>。要拿到它，需要前一夜晴朗、无风、最低温低于 -2°C，10 月满足条件的早晨很多。</li>' +
        '<li><strong>门票：你的 America the Beautiful 年票直接覆盖，不需要另外买任何东西。</strong>常规票价为私家车 <strong>$35 / 7 天</strong>，园区年票 $70。' +
        '<strong>另一件重要的事：非美国居民 16 岁以上要额外付 $100/人的 nonresident fee，但官方明确写着「unless admitted with an Annual or America the Beautiful Pass」——持年票即免。</strong>' +
        '入园验票时需要出示<strong>带照片的证件</strong>，年票是记名的。<strong>Grand Teton 全园不收现金</strong>，只刷卡。' +
        '本区不需要任何 timed entry 或车辆预约。</li>' +
        '<li><strong>手机信号：全园只有两座基站。</strong>可用区域基本限于 Jackson 谷地南段、Moose、Jenny Lake 一带、Colter Bay / Jackson Lake Lodge 周边与 Flagg Ranch；' +
        '运营商里 <strong>Verizon 在 Jackson Lake Lodge 与 Colter Bay 附近最可靠，AT&amp;T 与 T-Mobile 大段无服务</strong>。' +
        '<strong>Oxbow Bend、Signal Mountain 顶、Gros Ventre 上游基本没有信号。</strong>离线地图与离线的日出时刻表必备，别指望现场查路况。</li>' +
        '<li><strong>Elk reduction（园内减鹿计划）：本次窗口内不受影响。</strong>见下方 Gros Ventre 条目的详细说明。</li>' +
        '</ul>'
    }
  ],
  spots: [
    {
      id: 'oxbow-bend',
      n: 1,
      name: 'Oxbow Bend 牛轭湾',
      en: 'Oxbow Bend',
      score: 5,
      tldr: '全园第一机位：Mount Moran 在死水面上的完整倒影，路边下车即到。但只在日出成立，且 10 月中旬后棉白杨落光。',
      tags: [
        { t: '国家公园门票（年票覆盖）', c: 'paid' },
        { t: '停车即到', c: 'free' },
        { t: '仅日出成立', c: 'risk' },
        { t: '10 月中后无秋色', c: 'risk' },
        { t: '无手机信号', c: 'risk' }
      ],
      highlights: [
        '<strong>Mount Moran（12,610 英尺 / 3,844 米，2014 年激光雷达测值）自 Jackson Lake 水面拔起约 5,800 英尺</strong>，' +
          '正面朝东，山体中央有一条几乎垂直贯穿的黑色 <strong>diabase 岩脉（the Black Dike）</strong>，东壁上还挂着形似平底锅的 <strong>Skillet Glacier</strong>——' +
          '这两个特征让 Moran 成为全山脉最容易辨认、也最上镜的一座峰，1922 年 7 月 22 日才首登。',
        '所谓 oxbow 是<strong>蛇河在 Jackson Lake Dam 下游遗弃的一段旧河曲</strong>：主流改道后留下这段几乎不流动的死水。' +
          '<strong>「几乎不流动」就是这里的全部技术前提</strong>——它是 Grand Teton 唯一一处能在无风清晨拿到完整山体镜面倒影、而且开车到岸边只要走十步的地方。',
        '<strong>10 月中旬前，对岸密集的 narrowleaf cottonwood 与 quaking aspen 会形成一条金色带，正好压在深色水面与灰白山体之间</strong>，' +
          '这三层色阶是这张照片被称作「全园最好的一张」的真正原因。物候模型给出的典型峰值是 9 月 17 日，<strong>10 月 1 日以后进入落叶期</strong>。',
        '这里同时是全园密度最高的野生动物点之一：<strong>驼鹿在柳丛里觅食、白鹈鹕与号手天鹅停歇、白头海雕在对岸枯木顶上定点、水獭在浅滩活动</strong>。' +
          '带 400mm 以上的话，日出后一小时是最好的动物时段——但请守住 100 码（熊、狼）与 25 码（其他）的法定距离。',
        '<strong>致命的时段限制：Mount Moran 从这里看方位角 259°，仰角 5.5°；而 9 月 25 日日落方位 269°。</strong>' +
          '也就是说太阳几乎正好沉进 Moran 背后，<strong>直射光比日历日落早约 30 分钟就结束，之后山体是纯逆光剪影</strong>。' +
          '这里的傍晚不是没得拍（暮色剪影与倒影仍有画面），但<strong>「Oxbow Bend 拍日落」是一个被大量旅游文章重复的错误建议</strong>。'
      ],
      photo: '风光 <strong>5/5</strong>，野生动物 <strong>4.5/5</strong>，人像 <strong>3/5</strong>。' +
        '正面受光的雪山 + 镜面死水 + 前景金树 + 零步行距离，构图元素齐备到近乎作弊，这是本区唯一无条件给 5 分的点。' +
        '扣分只在时段极窄（一天里只有日出后 60–90 分钟真正成立）与人多。人像 3 分是因为岸边站位窄、背景是山不是人，只能拍环境肖像。',
      shots: [
        {
          name: 'Oxbow Bend Turnout 主观景点（第一机位）',
          park: [43.86626, -110.54750],
          view: [43.86608, -110.54758],
          desc: '<strong>US-89/191/287 路侧铺装 turnout，位于 Jackson Lake Junction 以东约 1 英里，停车到水边不足 30 米。</strong>' +
            '最佳时段 <strong>9/25：06:30–08:15（日出 07:13）；10/22：07:05–08:45（日出 07:46）</strong>——' +
            '请按<strong>日历日出前 45 分钟</strong>到位，因为东侧 Gros Ventre 山脊会把谷底见光推后 10–20 分钟（推算），' +
            '而<strong>山顶在日出时刻就已经开始转红，「峰顶亮、水面暗」的那 15 分钟是这里最好的一张</strong>。' +
            '<strong>镜头：24–70mm 是主力</strong>（35–50mm 能把 Moran 与倒影上下对称地放满画幅）；' +
            '<strong>16–35mm 只在前景有具体物体（枯木、岸边草丛）时才用</strong>，否则广角会把山推得太小；' +
            '<strong>70–200mm 抽 Moran 的黑色岩脉与 Skillet Glacier 细节，配上一小块倒影，是这里第二好的构图。</strong>' +
            '<strong>必须用偏振镜，但要反着用</strong>——正常消反光的角度会把倒影一起消掉，请转到反光最强的位置。' +
            '曝光上山顶与水面的动态范围可达 4–5 档，建议包围三张后期合成，或用软渐变灰。'
        },
        {
          name: '风与雾：为什么必须在 09:00 前收工',
          view: [43.86608, -110.54758],
          desc: '<strong>倒影的成败只取决于风。</strong>山地河谷夜间是下坡的重力流，天亮前风速通常接近零，水面呈镜面；' +
            '<strong>日出后太阳开始加热谷底，热力上坡风一般在日出后 1–2 小时启动</strong>（推算，无官方观测），' +
            '一旦起风，哪怕只有 2–3 m/s，倒影就会碎成一片色块，长曝也救不回来。' +
            '<strong>实操：把「有效拍摄窗口」定义为日出前 45 分钟到日出后 75 分钟，9 月下旬即 06:30–08:30，10 月下旬即 07:00–09:00。</strong>' +
            '另外<strong>当夜间气温降到露点以下、水温高于气温时，水面会起一层薄雾</strong>，10 月的清晨出现概率明显高于 9 月——' +
            '这是这里最好的加分条件，也是 10 月下旬来这里为数不多的补偿。雾天请把曝光加 +0.7 到 +1 档，否则会拍成灰。'
        },
        {
          name: 'Oxbow Bend Trail / 西侧岸线（换视角，避开人群）',
          park: [43.86626, -110.54750],
          view: [43.87232, -110.55627],
          desc: '主观景台以西北的一段沿岸小径，把机位往西挪约 1 公里，<strong>Mount Moran 的方位角会略向北移，前景水面更开阔，且人少一个量级</strong>。' +
            '代价是要走 10–15 分钟不平整的土路，天黑时需要头灯。' +
            '这里更适合 <strong>70–200mm 做局部构图</strong>，也是找驼鹿的主要范围（柳丛密集）。' +
            '<strong>单独走请务必带熊喷雾并出声</strong>，这一段视线被柳丛遮挡，是典型的近距离遭遇地形。'
        }
      ],
      access: {
        book: '不需预约。Grand Teton 全园无 timed entry、无车辆预约。',
        ticket: '园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>，且免掉非美居民 $100/人的附加费。园区不收现金。',
        hours: '<strong>24 小时开放，全年无休。</strong>turnout 无门禁、无关闭时间，可以在天黑前到位等日出。所在的 US-89/191/287 是全年开放的主干道。',
        parking: '路侧铺装 turnout，<strong>免费</strong>，约 20–30 个车位。<strong>秋季日出前 45 分钟基本会满</strong>，10 月下旬压力小很多。严禁停在行车道上。',
        walk: '<strong>不到 1 分钟 / 约 20–30 米</strong>，平坦。西侧岸线机位需另走 10–15 分钟土路。'
      },
      notes: [
        '<strong>这里不是日落点。</strong>Mount Moran 方位 259°、仰角 5.5°，9 月下旬直射光在 18:45 前后就结束（日历日落 19:15）。想拍日落请去 Signal Mountain。',
        '<strong>10 月 5 日起，半小时车程内没有任何住宿</strong>（Jackson Lake Lodge 10/4 关、Signal Mountain Lodge 10/11 关）。之后要拍这里的日出，意味着从 Jackson 出发、单程约 55 英里 / 70 分钟，凌晨 5 点前出门。',
        '<strong>US-89 上 Leeks Marina 至 Lizard Creek 段的夜间施工延误最长 1 小时（21:00–06:00）</strong>。从北面（Yellowstone 方向）赶日出的话，这一小时必须预留。',
        '<strong>无手机信号。</strong>离线地图、离线日出时刻表、满电的备用电源必备。',
        '<strong>清晨路上有大量野生动物</strong>，摸黑开车限速 45 mph 以下，驼鹿在暗色路面上几乎看不见。',
        '偏振镜要「反用」——转到保留反光的角度，别把倒影消没了。',
        '<strong>不要为了机位下到泥岸</strong>：岸线是软泥且冬季结薄冰，同时这是驼鹿的核心觅食区，靠近违反 25 码规定。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Oxbow_Bend_-_Grand_Teton_National_Park_-_Wyoming.jpg', cap: 'Oxbow Bend 与 Mount Moran 倒影 · Watts / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Oxbow_Bend_Morning.jpg', cap: '清晨死水面上的完整倒影 · Eric Kilby / CC BY-SA 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Oxbow_bend.jpg', cap: '主观景点全景视角 · Chris Light / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'schwabacher-landing',
      n: 2,
      name: 'Schwabacher Landing 河岸下水点',
      en: 'Schwabacher Landing',
      score: 4.5,
      tldr: '海狸坝把河水拦成静水，能拍到整条 Teton 山脊的完整倒影。碎石支路 10 月中旬后可能已封，出发前必查。',
      tags: [
        { t: '国家公园门票（年票覆盖）', c: 'paid' },
        { t: '碎石路 1 英里', c: 'risk' },
        { t: '10 月中后可能封路', c: 'risk' },
        { t: '仅约 20 车位', c: 'risk' }
      ],
      highlights: [
        '这是<strong>全园唯一能在河面高度（而不是台地上）拍到 Teton 山脊完整倒影的公共点位</strong>。' +
          '从 Moose Junction 沿 US-191 北行约 4 英里，向西拐进一条约 1 英里的碎石支路，一直下到蛇河的一条支汊边。',
        '<strong>倒影不是靠河，是靠海狸。</strong>河汊被一连串 beaver dam 拦成几段几乎不流动的水塘，' +
          '正是这些静水塘把 Grand Teton、Middle Teton、Mount Owen、Teewinot 一整排山脊完整地翻到水里。' +
          '<strong>海狸坝的位置每年都会变</strong>——某一年最好的那个水塘，第二年可能已经泄空，所以到现场要沿步道走一段找当年状态最好的一段。',
        '和 Oxbow Bend 相比，这里的<strong>山更近（Grand Teton 距离 11.1 公里，Oxbow 是 24.7 公里）、山体在画面里更大、山脊层次更完整</strong>，' +
          '但代价是仰角高达 <strong>11.2°</strong>——<strong>直射光比日历日落早约 60 分钟结束（推算）</strong>，' +
          '9 月下旬也就是 18:15 前后就没光了。这里比 Oxbow Bend 更彻底地只属于早晨。',
        'NPS 官方把这里列为可申请的婚礼场地，页面里给出了几项对拍摄有用的硬数据：' +
          '<strong>约 20 个车位、有旱厕、地面平整、步道为土路、「早晨非常繁忙、中午中等、傍晚非常繁忙」</strong>，' +
          '以及关键的一句——<strong>「Typically closed mid-October to mid-May」</strong>。'
      ],
      photo: '风光 <strong>5/5</strong>，人像 <strong>3.5/5</strong>，野生动物 <strong>3.5/5</strong>。' +
        '完整山脊 + 河面高度 + 静水倒影，构图密度高于 Oxbow Bend；扣分在于车位极少、路况季节性不稳、机位窄导致人挤人。' +
        '人像 3.5 分：河岸有几段干净的砾石滩可以站人，但清晨低温加逆着人流，实操不轻松。',
      shots: [
        {
          name: '北端停车场 + 海狸塘倒影（主机位）',
          park: [43.71151, -110.67059],
          view: [43.71151, -110.67059],
          desc: '碎石路尽头的北侧停车场，<strong>下车沿土路北行 3–10 分钟就是几处海狸塘</strong>。' +
            '最佳时段 <strong>9/25：06:35–08:00；10/22：07:10–08:30</strong>，山顶转红比谷底见光早 10–20 分钟。' +
            '<strong>Grand Teton 方位 287°，日出方位 91–105°——太阳在你正后方偏南，整排山脊是完美的正面受光。</strong>' +
            '<strong>镜头：24–70mm 主力，28–35mm 端最容易把整条山脊 + 完整倒影上下塞进一张。</strong>' +
            '<strong>16–35mm 用来带前景的枯枝与水草</strong>；70–200mm 抽 Grand Teton 与 Teewinot 的双峰关系。' +
            '快门方面水面越静越好，无需长曝；<strong>ND 在这里没有用处，倒影要的是瞬时的锐度不是丝滑</strong>。' +
            '偏振镜同样要转到保留反光的角度。'
        },
        {
          name: '碎石支路入口（先在这里确认能不能进去）',
          view: [43.70283, -110.67023],
          desc: '<strong>US-191 上的路口，距 Moose Junction 北约 4 英里。</strong>' +
            '这条支路属于 NPS 归类的「secondary road, closed seasonally based on conditions」，' +
            '<strong>官方口径是通常 10 月中旬到 5 月中旬关闭</strong>，但没有公布确切日期。' +
            '<strong>路口有闸门；如果闸门锁着，就是真的进不去，不要试图步行 1 英里再走回来赶日出——来不及。</strong>' +
            '路面是压实碎石，两驱轿车在干燥时没问题，<strong>雨后或初雪后会车辙泥泞</strong>。' +
            '摸黑下坡开这一段，请提前把远光调好并慢行，路两侧无护栏。'
        }
      ],
      access: {
        book: '不需预约（举办仪式才需 NPS 许可，每天仅发一张、全年上限 60 张）。',
        ticket: '园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。',
        hours: '<strong>24 小时开放</strong>，但<strong>支路按季节关闭，NPS 口径「typically closed mid-October to mid-May」</strong>。9 月下旬可靠，10 月下旬有实质概率已封。',
        parking: '<strong>约 20 个车位</strong>，免费，分南北两个小场。<strong>秋季日出前 40 分钟满位</strong>，满了只能原路退出去，路上无处掉头。',
        walk: '停车到最近的海狸塘 <strong>3–10 分钟 / 200–600 米</strong>，土路平坦，天黑需头灯。'
      },
      notes: [
        '<strong>出发当天必查 <a href="https://go.nps.gov/tetonroads">go.nps.gov/tetonroads</a> 或拨 307-739-3682 确认支路是否还开</strong>——这是本条目最大的不确定项。',
        '<strong>10 月下旬如果这条路已封，最近的等效替代是 Blacktail Ponds Overlook（往南 3 英里，US-191 路侧，全年可停）</strong>，但那是台地俯视、不是河面高度，倒影完整度差一截。',
        '<strong>这里比 Oxbow Bend 更不适合日落</strong>：Grand Teton 仰角 11.2°，直射光提前约一小时结束。',
        '<strong>海狸坝的位置和水位年年不同</strong>，别照着网上某张老照片找机位，到现场沿步道走一遍再决定。',
        '河岸是驼鹿常出没的柳丛地形，<strong>带熊喷雾、出声、不要为了角度钻进灌木</strong>。',
        '低温下这里比台地上更冷（冷空气沉在河谷），日出前实测常比 Jackson 低 3–5°C，多带一层。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Schwabacher_Landing_Sunrise_-_Grand_Teton_National_Park_-_Flickr_-_aparlette.jpg', cap: '海狸塘上的日出倒影 · Andrew Parlette / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Schwabachers_Landing_(48975245721).jpg', cap: '河汊与完整 Teton 山脊 · GrandTetonNPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Schwabacher_landing_reflection_Grand_Teton_national_park_-_Flickr_-_Mferbfriske.jpg', cap: '静水段的镜面反射 · Mferbfriske / CC BY-SA 2.0' }
      ]
    },
    {
      id: 'snake-river-overlook',
      n: 3,
      name: 'Snake River Overlook 蛇河观景台',
      en: 'Snake River Overlook',
      score: 3,
      tldr: 'Ansel Adams 1942 年那张的原址，但树长高了——他拍的那个前景已经不存在，河湾的 S 形现在被挡住大半。',
      tags: [
        { t: '国家公园门票（年票覆盖）', c: 'paid' },
        { t: '停车场大、无需步行', c: 'free' },
        { t: '经典构图已不可复制', c: 'risk' },
        { t: '仅日出成立', c: 'risk' }
      ],
      highlights: [
        '<strong>1942 年 Ansel Adams 在这里拍下《The Tetons and the Snake River》</strong>，' +
          '是他受内政部委托为国家公园做壁画项目时的作品，也是他最广为流传的一张——<strong>2020 年一幅壁画尺寸的原作在 Sotheby\u2019s 以 98.8 万美元成交，创下他作品的最高纪录</strong>。' +
          '这张照片后来被放进旅行者一号的金唱片。',
        '<strong>但你必须先接受这件事：Adams 拍的那个画面已经不存在了。</strong>' +
          '八十多年里，观景台与河之间的松树和灌木长了上来，' +
          '<strong>原作里那条从画面左下角蜿蜒进纵深的蛇河 S 形曲线，现在下半段被树冠完全挡住</strong>。' +
          '这不是某个季节的问题，也不是站位问题——<strong>它是永久性的，除非公园去砍树，而公园不会</strong>。',
        '<strong>现在你实际能看到什么：</strong>台地上一片开阔的鼠尾草滩，中景是一条深色的针叶林带，' +
          '林带上方<strong>能看到蛇河的一小段亮面（大致在画面中偏右），但看不到完整的 S</strong>，' +
          '再往上是从 Buck Mountain 到 Mount Moran 的完整山脊。' +
          '换句话说：<strong>它现在是一个「不错的宽幅山景 + 一小段河」的观景台，而不是一个可复制经典的机位。</strong>' +
          '现场右侧有 NPS 的解说牌讲这段历史，也算一个题材。',
        '几何上它其实还不错：<strong>Grand Teton 方位 265°、距 14.4 公里、仰角 8.3°</strong>，' +
          '日出时整排山脊正面受光，前景鼠尾草滩在低角度侧光下纹理很好。' +
          '<strong>但仰角 8.3° 意味着直射光比日历日落早约 45 分钟结束</strong>，傍晚同样不成立。'
      ],
      photo: '风光 <strong>3.5/5</strong>，人像 <strong>2.5/5</strong>，纪实 <strong>4/5</strong>。' +
        '给 3 分不是因为难看，而是因为<strong>大多数人来这里是为了复刻 Adams，而这件事已经做不到了</strong>，落差本身会毁掉体验。' +
        '把它当成「一个视野宽、停车方便、日出光很好的台地机位」，评价会公道很多。' +
        '纪实 4 分是因为「摄影史地标 + 已被时间改变」这个主题本身就值得拍一张对照。',
      shots: [
        {
          name: '观景台右侧（Adams 原址一带）',
          park: [43.75390, -110.62409],
          view: [43.75390, -110.62409],
          desc: '<strong>US-89/191 路侧的大型铺装停车场，容得下房车，下车即到栏杆。解说牌在观景区偏右侧，Adams 的机位就在那一带。</strong>' +
            '最佳时段 <strong>9/25：06:45–07:50；10/22：07:20–08:20</strong>，即日出前后各半小时。' +
            '<strong>镜头：这里唯一能救回来的构图是长焦。用 70–200mm（甚至 200–400mm）抽出中景那一小段亮起来的河面 + 上方山脊</strong>，' +
            '压缩之后河与山的比例关系反而接近原作的观感，' +
            '而<strong>广角只会忠实记录下那排挡住河的树</strong>。' +
            '24–70mm 适合拍「前景鼠尾草滩 + 山脊」的横幅，把河当成一个次要元素。' +
            '<strong>建议拍一张黑白转换的版本</strong>——原作是黑白，去掉颜色后树带与河面的明度关系会更清楚，也更容易和原作做对照。'
        },
        {
          name: '南侧 Teton Point Overlook（备选，视野略不同）',
          view: [43.71791, -110.66031],
          desc: '<strong>沿 US-191 往南约 3 英里的另一个铺装 turnout</strong>，同样是台地俯视，' +
            '<strong>前景树的遮挡情况和 Snake River Overlook 不同，某些年份这里能看到更完整的一段河道</strong>。' +
            '它离山更近（Grand Teton 距离约 12.5 公里），山体在画面里更大。' +
            '同样是日出机位，时段与主机位一致。如果你为了 Adams 而来又不想失望，<strong>建议两个点连着看，选当年遮挡较轻的那个</strong>。' +
            '这个 turnout 停车位比 Snake River Overlook 少，但秋季从不满。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。',
        hours: '<strong>24 小时开放。</strong>位于全年开放的 US-26/89/191 上，冬季也能到。',
        parking: '<strong>大型铺装停车场，免费</strong>，房车与拖挂可停。秋季几乎不会满。',
        walk: '<strong>0–1 分钟</strong>，停车场直接连观景平台，无高差，轮椅可达。'
      },
      notes: [
        '<strong>不要指望复刻 1942 年那张。</strong>树的生长是不可逆的，网上仍在流传的「Ansel Adams 机位」教程多数用的是几十年前的照片。',
        '<strong>唯一有效的技术对策是长焦压缩</strong>（70–200mm 起步），把可见的那段河面单独抽出来。',
        '<strong>这里不是日落点</strong>：Grand Teton 仰角 8.3°，直射光比日历日落早约 45 分钟结束。',
        '台地上风比河谷大，日出前体感温度会明显低于气温，防风外层必备。',
        '停车场大且靠主干道，是本区少数适合房车与行动不便者的机位。',
        '这一带属于 Elk Hunt Area 75 的范围边缘，但<strong>US-191 两侧各 1/4 英里全年禁止狩猎</strong>，且减鹿计划 2026 年的日期是 11 月 14 日至 12 月 6 日，不影响本次窗口。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Adams_The_Tetons_and_the_Snake_River.jpg', cap: '1942 年原作《The Tetons and the Snake River》 · Ansel Adams / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Grand_Teton_from_the_Snake_River_Overlook.jpg', cap: '现今从观景台看出去的实况，前景树带已长起 · Frank Kovalchek / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Snake_River_Overlook.JPG', cap: '观景台现场视角 · Fredlyfish4 / CC BY-SA 3.0' }
      ]
    },
    {
      id: 'mormon-row',
      n: 4,
      name: 'Mormon Row 摩门排屋历史区（Moulton 谷仓）',
      en: 'Mormon Row Historic District',
      score: 5,
      tldr: '木谷仓正对 Teton 山脊、日出正面顺光，秋天鼠尾草滩挂霜是决定性加分。2026 全季施工，机器和噪音会入镜。',
      tags: [
        { t: '国家公园门票（年票覆盖）', c: 'paid' },
        { t: '停车即到', c: 'free' },
        { t: '2026 全季施工中', c: 'risk' },
        { t: '日出人最多', c: 'risk' },
        { t: '霜期加分', c: 'free' }
      ],
      highlights: [
        '<strong>1890 年代起，一批摩门教徒从 Idaho 的 Teton Valley 翻山过来，在这条南北向的土路两侧成排定居</strong>，' +
          '刻意挨着建以便共享灌溉渠与互助——这就是「Row」的由来。鼎盛时有 27 户人家。' +
          '<strong>1997 年整片被列入 National Register of Historic Places。</strong>',
        '<strong>T. A. Moulton Barn 是全美被拍摄次数最多的谷仓，没有之一。</strong>' +
          'Thomas Alma Moulton 和儿子们从 1910 年代动工，<strong>断断续续盖了大约三十年才完工</strong>——' +
          '这也是它形态奇特的原因：屋脊线不对称、正面有个明显的斜披，' +
          '因为它不是一次性设计出来的，而是随着家里牲口数量增加一段段接上去的。',
        '<strong>往北约 300 米是 John Moulton Barn（T.A. 的兄弟）</strong>，' +
          '造型更方正、旁边还有那栋被称作 Pink House 的粉色住宅与几座附属建筑，' +
          '<strong>构图上比 T.A. 谷仓更「成组」，也明显人少</strong>。想避开三脚架墙就往北走。',
        '<strong>方位几何完美：从谷仓看 Grand Teton 方位 309°、Mount Moran 方位 335°，都在西北；而 9 月 25 日日出方位 91°、10 月 22 日 105°。</strong>' +
          '摄影者站在土路上朝西北拍，<strong>太阳从背后偏南方向打过来，同时照亮谷仓朝东的木板墙面和整排山体，是彻头彻尾的顺光</strong>。' +
          '<strong>反过来在日落时，太阳在方位 255–269°，位于山脊的南侧偏低处，谷仓朝向镜头的那一面完全落在阴影里</strong>——' +
          '所以<strong>结论明确：Mormon Row 是日出题材，黄昏在这里只能拍剪影，不能拍谷仓的木质纹理。</strong>',
        '<strong>2026 年的坏消息与好消息各一条。</strong>坏消息：' +
          '<strong>Mormon Row 历史区正在进行多年改建项目的最后一期，工期 2026 年 6 月至 11 月</strong>，' +
          'NPS 原文「Visitors will likely hear and see construction equipment in the vicinity of the historic district impacting the viewshed and soundscape」——' +
          '<strong>翻译过来就是：机械设备可能进画，噪音一定有。</strong>' +
          '好消息：<strong>历史区全季保持开放，没有任何封闭</strong>，而且项目内容正是修一个铺装停车场（含大巴位）、旱厕、遮阳棚与规范化的步道观景点，' +
          '2027 年还会加一个 Grand Teton Association 的设施。'
      ],
      photo: '建筑 <strong>5/5</strong>，风光 <strong>5/5</strong>，人像 <strong>4/5</strong>。' +
        '风化木质纹理 + 雪山 + 平坦鼠尾草前景 + 完美的日出方位，这是全园人文与自然结合得最好的一处。' +
        '<strong>加分项是这个季节独有的霜</strong>：晴朗无风的夜后，鼠尾草滩会挂一层白，侧光下整片发亮。' +
        '扣分只在施工与人多。人像 4 分：谷仓可以做背景框，但清晨机位前站人会挡住其他摄影者，请自觉。',
      shots: [
        {
          name: 'T. A. Moulton Barn 东侧土路（经典机位）',
          view: [43.66069, -110.66500],
          desc: '<strong>站在谷仓东侧的 Mormon Row 土路上朝西北拍。这是那张你见过一百次的照片的位置。</strong>' +
            '最佳时段 <strong>9/25：06:50–08:00（日出 07:13）；10/22：07:25–08:40（日出 07:46）</strong>。' +
            '<strong>关键在最早的那 10 分钟</strong>：谷底还没见光、Grand Teton 峰顶已经转成橙红，谷仓是深色剪影——' +
            '这一版比「全亮」的版本层次好得多。之后 15–20 分钟谷仓被照亮，切换到常规版本。' +
            '<strong>镜头：70–200mm 是这里的正解</strong>，用 100–135mm 把山脊压到谷仓正后方、让山看起来像贴在屋顶上；' +
            '<strong>24–70mm 拍带鼠尾草前景的环境版</strong>；16–35mm 慎用，广角会把山推远、谷仓变成一个小方块。' +
            '<strong>光圈 f/8–f/11 保证从前景草到山脊都在景深内</strong>，谷仓木纹需要足够的解析力。' +
            '有霜的早晨请用侧逆光角度（稍微往北挪几步），让霜晶挂上边缘光。'
        },
        {
          name: 'John Moulton Barn / Pink House 一组（往北，人少）',
          desc: '<strong>沿 Mormon Row 土路从 T.A. 谷仓往北约 300 米。</strong>建筑更成组：方正的谷仓 + 粉色住宅 + 几座附属棚屋，' +
            '<strong>可以用一个画面讲「一户人家」而不只是「一座谷仓」</strong>，而且这里的三脚架密度通常只有南边的三分之一。' +
            '时段与主机位相同。<strong>24–70mm 拍建筑组合，70–200mm 单独抽粉色住宅配山脊</strong>——粉色墙面在日出暖光下会偏得很好看。' +
            '<strong>此处无可靠的 OSM 实体节点可引用，故省略 view 坐标，地图上不会有针脚</strong>；' +
            '导航请以 T.A. Moulton Barn 为目标后沿土路北行。'
        },
        {
          name: 'Mormon Row 北端观景点（全区俯瞰）',
          view: [43.67246, -110.66453],
          desc: '土路北端靠近 Antelope Flats Road 的一处观景位置。' +
            '<strong>这里视野最开阔，适合拍「一整排建筑散布在鼠尾草滩上、背后是完整山脊」的宽幅</strong>，' +
            '是唯一能表达出「Row」这个概念的机位。' +
            '<strong>24–70mm 的 24–35mm 端或全景接片。</strong>清晨这里也常有 bison 群和 pronghorn 从 Antelope Flats 方向过来，' +
            '<strong>400mm 以上可以拍「动物 + 谷仓 + 山」的三元素</strong>，但请守住 25 码距离，bison 在秋季发情期后仍具攻击性。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。',
        hours: '<strong>24 小时开放，历史区 2026 年全季不关闭。</strong>但建筑内部不对外开放，只能外部拍摄。',
        parking: '<strong>免费。</strong>目前是沿 Mormon Row 土路的非正式路侧停车，<strong>2026 年正在施工新建铺装停车场（含大巴位与旱厕），工期到 11 月</strong>，' +
          '施工期间可用车位与位置可能临时变动。<strong>日出前 40 分钟车位就开始紧张</strong>（10 月下旬明显缓解）。严禁把车开进草地。',
        walk: '<strong>0–5 分钟。</strong>停车即在谷仓旁；从 T.A. 谷仓走到 John Moulton 一组约 300 米 / 4 分钟，土路平坦。'
      },
      notes: [
        '<strong>2026 年 6 月至 11 月全区施工，施工机械会进入取景范围、噪音全天存在。</strong>NPS 已明示「impacting the viewshed and soundscape」。往北走 200 米通常能避开大部分机械。',
        '<strong>这是日出点，不是日落点。</strong>日落时谷仓朝向镜头的一面完全在阴影中。',
        '<strong>不要触碰或攀爬历史建筑</strong>，也不要为了角度踩进围栏。这些是 1997 年列入 NRHP 的登录建筑。',
        '<strong>霜是本季最值得等的条件</strong>：需要前一夜晴朗、无风、最低温低于 -2°C。10 月满足的早晨很多，9 月下旬也时有。',
        '<strong>进入 Mormon Row 的 Antelope Flats Road 属于「按条件季节性关闭」的次级道路，无公布日期，惯例 11 月 1 日前后关</strong>。出发前查实时路况图。',
        '土路在雨后或融雪后会泥泞，两驱轿车慢行没问题，但别停在软路肩上。',
        '这一带（Antelope Flats 部分）虽在 Elk Hunt Area 75 边界内，但<strong>官方明确 Antelope Flats 段全季对减鹿计划关闭</strong>，且 2026 年计划日期为 11/14–12/6，与本次窗口无关。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Sunrise,_Mormon_Row_barns,_Grand_Teton_National_Park.jpg', cap: '日出时的 Moulton 谷仓与 Teton 山脊 · DASH713 / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/T.A._Molten_Barn,_Mormon_Row,_GTNP.jpg', cap: 'T. A. Moulton Barn 正面 · megmpete / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Mormon_Row,_GTNP.jpg', cap: 'Mormon Row 建筑群与鼠尾草滩 · megmpete / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'jenny-lake',
      n: 5,
      name: 'Jenny Lake · String Lake · Hidden Falls 与 Inspiration Point',
      en: 'Jenny Lake · String Lake · Hidden Falls · Inspiration Point',
      score: 4.5,
      tldr: '渡船 9/30 停航，之后去 Hidden Falls 往返多走 4 英里；观景环路开到 10/31。',
      tags: [
        { t: '国家公园门票（年票覆盖）', c: 'paid' },
        { t: '渡船 9/30 停航', c: 'risk' },
        { t: '渡船 $20 往返', c: 'paid' },
        { t: '10 月徒步单程加 2 英里', c: 'risk' },
        { t: '熊活动区', c: 'risk' }
      ],
      highlights: [
        '<strong>Jenny Lake 是冰川刻出来的槽谷湖，紧贴 Teewinot Mountain 与 Cascade Canyon 出口</strong>，' +
          '山离湖岸只有几公里，<strong>Grand Teton 从东岸看仰角高达 15.9°</strong>——' +
          '这是全园「山最压人」的湖，也是全园最挤的地方之一。',
        '<strong>最关键的 2026 数据：Jenny Lake Boating 的渡船与游船 <u>9 月 30 日是本季最后一天</u>，包括全部服务。</strong>' +
          '9 月 8 日起已改为 <strong>09:00–17:00</strong>（此前 07:00–19:00），每 10–15 分钟一班、不接受预订、到东岸码头现场买票。' +
          '<strong>票价：成人往返 $20 / 单程 $15，62 岁以上往返 $18 / 单程 $15，儿童往返 $15 / 单程 $12。</strong>' +
          '同期还有 10:00 与 12:00 两班 scenic cruise（成人 $30，建议预订，307-734-9227）。',
        '<strong>渡船停航后的实际后果要说清楚：</strong>渡船省掉的是<strong>单程 2 英里的环湖步行</strong>。' +
          '<strong>10 月 1 日起，从东岸游客中心走到 Hidden Falls 变成单程约 2.5 英里、到 Inspiration Point 单程约 3 英里</strong>，' +
          '往返 5–6 英里、爬升约 400–1,000 英尺，' +
          '而 10 月的日照只有 10 小时出头。<strong>这不是「难」，是要多花 2–3 小时，且要在天黑前下山。</strong>',
        '<strong>Hidden Falls 落差约 100 英尺，藏在 Cascade Creek 的峡口里；Inspiration Point 再往上约 0.5 英里、爬升约 400 英尺，是一处岩台，能俯瞰整个 Jackson Hole 河谷与 Jenny Lake 全貌。</strong>' +
          '瀑布本身在<strong>上午 09:00–11:00</strong>是柔和的漫射光（峡口深、直射光进不去），是最好的时段。',
        '<strong>String Lake 是本区被低估的一处。</strong>' +
          '它极浅、几乎不流动，<strong>正对 Mount Moran（方位 325°、距 6.9 公里、仰角 14.4°）</strong>，' +
          '清晨无风时倒影质量不输 Oxbow Bend，而且<strong>因为山近，Moran 在画面里的体量大得多</strong>。' +
          '游客绝大多数在夏天来这里泡水，秋天几乎没人。<strong>Jenny Lake Scenic Drive 与 String Lake 一带的通行取决于 Teton Park Road，10 月 31 日之后全部封闭。</strong>'
      ],
      photo: '风光 <strong>4.5/5</strong>，人像 <strong>4/5</strong>，野生动物 <strong>3/5</strong>。' +
        '山近、湖静、可选机位多；扣分在于 <strong>Jenny Lake 东岸虽然在日出时是顺光，但岸线被密林封住、开阔机位极少，湖又窄，构图很受限</strong>，' +
        '真正好用的是 String Lake（水更浅更静、角度更开）与地势更高的 Jenny Lake Overlook。' +
        '西岸的 Hidden Falls 与 Inspiration Point 是本区少数适合上午拍的目标。人像 4 分：湖岸砾石滩、栈桥、林间步道都好用。',
      shots: [
        {
          name: 'String Lake 南岸（本条目最佳风光机位）',
          park: [43.78445, -110.72739],
          view: [43.78445, -110.72739],
          desc: '<strong>从 North Jenny Lake Junction 西转，沿路北行到第一个停车场即 String Lake Trailhead。</strong>' +
            '最佳时段 <strong>日出前 30 分钟到日出后 60 分钟（9/25 约 06:45–08:15；10/22 约 07:15–08:45）</strong>，' +
            '<strong>Mount Moran 方位 325°，日出方位 91–105°，是斜侧顺光，山体立体感比 Oxbow Bend 的正面光更好。</strong>' +
            '湖极浅、水几乎不动，<strong>无风时能拿到接近完美的倒影，而且山只有 6.9 公里远，24mm 就能撑满画面</strong>。' +
            '<strong>16–35mm 拍水面 + 山的对称构图，24–70mm 主力，70–200mm 抽 Moran 的黑色岩脉。</strong>' +
            '偏振镜反用保留倒影。<strong>10 月下旬这里的车位几乎空着</strong>，是本条目最省心的一站。'
        },
        {
          name: 'Jenny Lake Overlook（Jenny Lake Scenic Drive 上）',
          view: [43.76812, -110.71779],
          desc: '<strong>单行的 Jenny Lake Scenic Drive（全长约 3 英里，从 North Jenny Lake Junction 进入）路侧的观景点，5 月 1 日 – 10 月 31 日开放。</strong>' +
            '视角比湖岸高，<strong>能同时收进 Jenny Lake 全湖面、Cascade Canyon 出口与 Teewinot / Grand Teton 的山脊线</strong>。' +
            '最佳时段<strong>上午 08:00–10:00</strong>——太阳升高之后山体受光更均匀，日出瞬间这个角度反而太暗。' +
            '<strong>24–70mm 与 70–200mm 都好用；这里是本区最适合接全景片的位置之一。</strong>' +
            '注意这条路是单行道，错过出口要绕回 Teton Park Road 重新进。'
        },
        {
          name: 'Hidden Falls · Inspiration Point（西岸，需渡船或绕湖）',
          park: [43.75148, -110.72233],
          view: [43.76632, -110.75120],
          desc: '<strong>9 月 30 日前：</strong>从 Jenny Lake Visitor Center 步行 100–150 码到东岸码头（<strong>坐标 43.75186, -110.72573</strong>），' +
            '渡船 09:00–17:00、每 10–15 分钟一班、约 10 分钟到西岸码头（<strong>43.76728, -110.74405</strong>），' +
            '再走 <strong>0.5 英里到 Hidden Falls、1 英里到 Inspiration Point（爬升约 400 英尺）</strong>。' +
            '<strong>10 月 1 日起：</strong>渡船停航，必须沿 Jenny Lake Loop Trail 绕南岸走，<strong>单程 2.5–3 英里、往返 5–6 英里、3–4 小时</strong>。' +
            '<strong>最佳时段：上午 09:00–11:00</strong>——峡口深，直射光进不来，瀑布是均匀的漫射光，' +
            '<strong>而 Inspiration Point 朝东南俯瞰河谷，上午同样是顺光</strong>。' +
            '<strong>镜头：瀑布用 24–70mm 加 ND，1/2–2 秒的慢门；Inspiration Point 用 16–35mm 拍河谷大场景、70–200mm 抽 Jenny Lake 的湖岸线条。</strong>' +
            '三脚架在这一段步道上完全合法。<strong>10 月的下午 16:00 之后峡谷内已经很暗，请把返程时间倒推好。</strong>'
        }
      ],
      access: {
        book: '园区不需预约。<strong>渡船不接受预订</strong>（现场买票）；scenic cruise 建议预订，307-734-9227。',
        ticket: '园区门票 <strong>$35 / 车 / 7 天</strong>，<strong>年票覆盖</strong>。' +
          '<strong>渡船另收：成人往返 $20 / 单程 $15；62+ 往返 $18 / 单程 $15；2–12 岁往返 $15 / 单程 $12。Scenic cruise 成人 $30 / 老人 $27 / 儿童 $25。</strong>',
        hours: '<strong>湖区与步道 24 小时开放。</strong>' +
          '<strong>Jenny Lake Boating 2026 年 9 月 30 日为本季最后一天</strong>，9/8–9/30 运营时间 09:00–17:00。' +
          '<strong>Jenny Lake Visitor Center 10 月 12 日关闭；Jenny Lake General Store 与 Jenny Lake Lodge 10 月 4 日关闭；Jenny Lake Campground 已于 9 月 27 日关闭。</strong>' +
          '<strong>Jenny Lake Scenic Drive 5 月 1 日 – 10 月 31 日开放；整个区域随 Teton Park Road 于 11 月 1 日封闭。</strong>',
        parking: 'South Jenny Lake 与 String Lake 均为免费铺装／碎石停车场。夏季中午必满，<strong>10 月下旬基本随到随停</strong>。',
        walk: '游客中心到东岸码头 <strong>100–150 码 / 2 分钟</strong>；西岸码头到 Hidden Falls <strong>0.5 英里</strong>、到 Inspiration Point <strong>1 英里 / 爬升 400 英尺</strong>；' +
          '<strong>渡船停航后从东岸绕行单程 2.5–3 英里</strong>。String Lake 停车即到湖岸。'
      },
      notes: [
        '<strong>渡船 2026 年 9 月 30 日停航，这是本条目最重要的一个日期。</strong>10 月来的话请直接按「往返 6 英里徒步」做计划，别到现场才发现。',
        '<strong>从 Jackson 走内环去 Jenny Lake 会撞上 Moose 入口环岛的 20 分钟延误（5/1–11/15）</strong>，赶日出必须多留半小时。',
        '<strong>Jenny Lake 东岸日出时是顺光，但岸线被密林封住、开阔机位极少</strong>——想在这一带拍日出，优先 String Lake 或 Jenny Lake Overlook。' +
          '另外<strong>山近而高（西侧山脊仰角约 11–16°），湖面在日历日落前约 1 小时就失去直射光（推算），傍晚不成立</strong>。',
        '<strong>Cascade Canyon 一带是黑熊与灰熊的高频活动区</strong>，NPS 明确要求三人以上结队、持续出声、随身带熊喷雾。10 月是增食期，风险更高。',
        '<strong>Jenny Lake Ranger Station 已于 9 月 7 日关闭</strong>，10 月要拿路况或后山许可只能去 Moose 的 Craig Thomas 访客中心（开到 10 月 31 日）。',
        '<strong>Inspiration Point 上方的步道秋季可能有薄冰</strong>，尤其是背阴的岩阶段，微钉鞋套值得带。',
        'String Lake 独木舟下水点开放到 10 月 31 日（随 Teton Park Road 封闭而关），但 10 月水温接近冰点，不建议下水。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Aerial_image_of_Jenny_Lake_(view_from_the_east).jpg', cap: 'Jenny Lake 与 Cascade Canyon 出口 · Carsten Steger / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Jenny_Lake_from_Inspiration_Point_2024.jpg', cap: '从 Inspiration Point 俯瞰 Jenny Lake 与河谷 · Larry D. Moore / CC BY 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Grand_Teton_National_Park._Hidden_Falls._01.JPG', cap: 'Hidden Falls · Miguel Hermoso Cuesta / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'signal-mountain',
      n: 6,
      name: 'Signal Mountain Summit Road 与 Jackson Point Overlook',
      en: 'Signal Mountain Summit Road · Jackson Point Overlook',
      score: 4.5,
      tldr: '本区唯一真正成立的日落点：从 800 英尺高处俯瞰蛇河曲流与整个河谷。11 月 1 日封路，早雪会提前关。',
      tags: [
        { t: '国家公园门票（年票覆盖）', c: 'paid' },
        { t: '唯一的日落点', c: 'free' },
        { t: '11/1 封路、早雪提前', c: 'risk' },
        { t: '禁房车与拖挂', c: 'risk' },
        { t: '顶上无信号', c: 'risk' }
      ],
      highlights: [
        '<strong>一条长约 5 英里、爬升约 800–1,000 英尺的窄而多弯的铺装山路，从 Teton Park Road 岔出（在 Signal Mountain Lodge 以南约 1 英里），单程车程约 20 分钟。</strong>' +
          '顶上有两处观景台：<strong>朝西南的 Jackson Point Overlook</strong>（主机位）和<strong>朝东北的 Emma Matilda Overlook</strong>。',
        '<strong>这是本区唯一在傍晚成立的点，原因需要说清楚，因为它跟直觉相反。</strong>' +
          'Teton 山脊在西侧，日落时依然是逆光——<strong>Mount Moran 从这里方位 266°、仰角 5.3°，太阳会在日历日落前约 30 分钟就沉进山脊背后（推算）</strong>。' +
          '所以<strong>这里的日落主体不是山，是脚下的河谷</strong>：' +
          '你比谷底高出约 800 英尺，<strong>蛇河在下面拧成一连串曲流，被西南方向的低角度暖光照亮，在深色的鼠尾草底子上读成一条条发亮的银带</strong>——' +
          '这个俯视关系在谷底任何一个点都拿不到。',
        '<strong>三个具体的傍晚题材：</strong>' +
          '（1）<strong>日落前 60–30 分钟</strong>：蛇河曲流受光最好，长焦压缩；' +
          '（2）<strong>太阳沉入山脊的那一刻</strong>，从 Jackson Point Overlook 可以拍到<strong>太阳正好落在 Grand Teton 或 Mount Moran 侧后方的星芒</strong>（f/16 收光圈出芒）；' +
          '（3）<strong>日落后 10–25 分钟的余晖</strong>——山体已在地球阴影里，但高处峰顶仍会挂上一层弱的粉红。' +
          '<strong>诚实地说，第三项在这里比在正对山的机位弱，别把它当主目标。</strong>',
        '<strong>朝东的 Emma Matilda Overlook 在傍晚反而是顺光</strong>：Gros Ventre 山脉、Emma Matilda Lake 与 Two Ocean Lake 一带被落日正面照亮，' +
          '<strong>而且日落后东侧天空会出现地球阴影带（Belt of Venus）</strong>——粉带压在深蓝的地影上，这一张在西侧机位是拍不到的。',
        '<strong>封闭日期：11 月 1 日。</strong>需要说明的是 <strong>2026 年 NPS 官方 Park Roads 页并未单独列出这条路的日期</strong>，' +
          '「11 月 1 日」来自 NPS 历年新闻稿口径与 Jackson Hole 官方旅游页；' +
          '<strong>由于它海拔高、路面窄，一场早雪就可能提前关，且顶上无手机信号</strong>，出发当天必须先在山下查实时路况图。'
      ],
      photo: '风光 <strong>4.5/5</strong>，人像 <strong>3/5</strong>，野生动物 <strong>2.5/5</strong>。' +
        '<strong>俯视视角 + 蛇河曲流 + 360 度视野 + 唯一可用的黄昏时段</strong>，在整个子地区里的战略价值极高。' +
        '扣分：山体在傍晚始终是逆光或剪影，想要「被照亮的 Teton」这里给不了；观景台空间不大，人多时机位紧张。',
      shots: [
        {
          name: 'Jackson Point Overlook（西南向，日落主机位）',
          park: [43.84589, -110.57561],
          view: [43.84589, -110.57561],
          desc: '<strong>顶上停车场往西南的观景平台，停车到位不足 2 分钟。</strong>' +
            '最佳时段 <strong>9/25：18:00–19:45（日落 19:15、暮光结束 19:43）；10/22：17:15–19:00（日落 18:28、暮光结束 18:57）</strong>。' +
            '<strong>注意直射光在日历日落前约 30 分钟就被山脊挡掉</strong>（9/25 约 18:45、10/22 约 18:00），' +
            '所以<strong>「黄金光」的真实窗口比日历时间早半小时，请提前到位。</strong>' +
            '<strong>镜头：70–200mm 是这里的主力</strong>，用来压缩蛇河曲流的层次、把远处的曲流段与近处的树林叠成图案；' +
            '<strong>16–35mm 拍河谷 + 山脊的宽幅，24–70mm 过渡</strong>。' +
            '<strong>拍太阳落进山脊的星芒用 f/16，注意保护取景器和眼睛。</strong>' +
            '<strong>暮光段（日落后 15–30 分钟）请上三脚架，1–4 秒曝光</strong>，此时河谷灯火极少，蓝调很干净。'
        },
        {
          name: 'Emma Matilda Overlook（东北向，地影与 Belt of Venus）',
          view: [43.84893, -110.56717],
          desc: '顶上另一侧的观景点，<strong>朝东北看 Emma Matilda Lake、Two Ocean Lake 与 Gros Ventre / Absaroka 山脉。</strong>' +
            '<strong>傍晚这一侧是顺光</strong>，日落前 30 分钟远山被暖光正面照亮；' +
            '<strong>日落后 10–20 分钟，东方地平线上会升起一条粉色的 Belt of Venus 压在深蓝的地球阴影上</strong>，' +
            '这是本区最容易拍到、也最容易被忽略的一张。' +
            '<strong>24–70mm 或 70–200mm，需要三脚架</strong>（此时亮度已经不足以手持）。' +
            '也可以在这里拍日出——朝东是正面迎光，但整个山脉会被压成剪影，价值不如西侧。'
        },
        {
          name: '上山路上的中段 turnout（备选，拍 Jackson Lake）',
          desc: '<strong>Summit Road 中段有几处小 turnout，能看到 Jackson Lake 与 Mount Moran 的组合，角度比顶上更偏北。</strong>' +
            '这几个 turnout 没有 OSM 实体节点，<strong>故省略 view 坐标，地图上不会有针脚</strong>；' +
            '实际操作是上山时留意路右侧，看到视野打开就停。' +
            '<strong>时段与顶上一致；这里更适合 70–200mm 抽 Jackson Lake 水面的反光带。</strong>' +
            '<strong>注意：路窄且无护栏，停车时必须完全驶出行车道</strong>，秋季下山时段车不多但速度快。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。',
        hours: '<strong>白天开放，无门禁时间；季节性封闭日为 11 月 1 日</strong>（NPS 历年新闻稿口径，<strong>2026 年官方 Park Roads 页未单独列出该路日期</strong>，' +
          '且<strong>可能因早雪提前关闭</strong>）。它依附于 Teton Park Road，后者同样 11 月 1 日封闭。',
        parking: '<strong>顶上有小型免费停车场</strong>，约 20–30 位。<strong>官方禁止房车（RV）与拖挂车上山</strong>，路窄多弯。日落前 30 分钟秋季通常仍有位。',
        walk: '<strong>1–2 分钟</strong>，停车场直连两处观景台，平坦短径。'
      },
      notes: [
        '<strong>直射光比日历日落早约 30 分钟结束</strong>（Mount Moran 仰角 5.3°，推算）。把「日落时刻」当成「收工时刻」会错过整个黄金光。',
        '<strong>顶上无手机信号</strong>，且下山是 5 英里窄弯路。带头灯，暮光拍完之后下山全程摸黑。',
        '<strong>禁止房车与拖挂上山。</strong>',
        '<strong>10 月 11 日之后 Signal Mountain Lodge、餐厅、商店与加油站全部关闭</strong>，山脚下没有任何补给或洗手间。',
        '<strong>早雪会让这条路提前关闭</strong>，且高海拔路段结冰早于谷底。当天先查 <a href="https://go.nps.gov/tetonroads">go.nps.gov/tetonroads</a> 或拨 307-739-3682。',
        '上山途中是黑熊常见区域，路边停车下车拍照前先四周看一眼。',
        '顶上风大且比谷底冷 3–5°C，暮光段站 40 分钟需要真正的防风层与手套。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Grand_Teton_National_Park_at_Signal_Mountain_Road.jpg', cap: 'Signal Mountain Road 上俯瞰河谷全景 · Wing-Chi Poon / CC BY-SA 2.5' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Signal_Mountain_-_Grand_Teton_National_Park_-_Wyoming.jpg', cap: '顶上观景台视角 · Dougtone / CC BY-SA 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Signal_Mountain_Lodge_GTNP1.jpg', cap: '山脚下的 Signal Mountain Lodge · Acroterion / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'jackson-lake-lodge-dam',
      n: 7,
      name: 'Jackson Lake Lodge 与 Jackson Lake Dam',
      en: 'Jackson Lake Lodge · Jackson Lake Dam',
      score: 4,
      tldr: '二层大堂 60 英尺落地窗把 Mount Moran 框成一幅画；但 10 月 4 日整栋关门，之后只剩水坝。',
      tags: [
        { t: '国家公园门票（年票覆盖）', c: 'paid' },
        { t: '酒店 10/4 关闭', c: 'risk' },
        { t: '大堂免费进入', c: 'free' },
        { t: '室内禁三脚架（推定）', c: 'risk' }
      ],
      highlights: [
        '<strong>Jackson Lake Lodge 建成于 1955 年，由 Gilbert Stanley Underwood（曾任美国联邦政府总建筑师）为 John D. Rockefeller Jr. 的 Grand Teton Lodge and Transportation Company 设计，' +
          '是 Mission 66 时期的代表作，2003 年列为 National Historic Landmark。</strong>' +
          '它刻意不建在景观核心里，而是退到一道天然台地边缘——<strong>整栋楼的存在理由就是那个视野</strong>。',
        '<strong>二层「Upper Lobby」的落地窗高 36 英尺、宽 60 英尺</strong>，' +
          '朝西正对 <strong>Willow Flats 湿地 → Jackson Lake → Jackson Lake Dam → Teton 山脊</strong>，' +
          '<strong>Mount Moran 方位 254°、距 16.6 公里</strong>，正好落在窗框的中偏左。' +
          '这是全美最著名的「用建筑框住风景」的室内空间之一，<strong>进楼免费、不用住店</strong>。',
        '<strong>楼后有露台，露台再往北是 Lunch Tree Hill。</strong>' +
          '1926 年 Horace Albright 带 Rockefeller 走到这个小丘上看风景，Rockefeller 当场被说服、后来买下大量土地捐给联邦——' +
          '<strong>Grand Teton 国家公园能扩到今天的范围，起点就是这个小丘上的一顿午餐</strong>，Rockefeller 自己给它取的名。丘顶有纪念铭牌，铺装步道可达。',
        '<strong>Jackson Lake Dam 是垦务局（Bureau of Reclamation）的灌溉工程，不是发电站。</strong>' +
          '1906–07 年的原木笼坝 1910 年溃决，1911–1916 年重建为混凝土加土石坝，' +
          '<strong>把天然的 Jackson Lake 水位抬高了约 39 英尺，蓄水 847,000 英亩英尺</strong>——' +
          '这些水属于 Minidoka Project，供给 100 多英里外 Idaho 的农田。' +
          '<strong>抬高水位淹死了岸边整片森林，大萧条时期由 CCC 的年轻人清理并烧掉。1980 年代整个水库被放空、坝体加固到可抗 M7.5 地震。</strong>',
        '<strong>一个对拍摄很实际的后果：因为它是灌溉水库，Jackson Lake 在夏末秋初会被大量放水。</strong>' +
          '<strong>9 月下旬到 10 月，湖面明显下降，岸边会露出大片泥滩、砾石与当年被淹死的树桩。</strong>' +
          '这既是减分（湖岸线难看、倒影带上泥滩）也是加分（枯树桩是极好的前景元素），取决于你怎么用。'
      ],
      photo: '建筑 <strong>4.5/5</strong>，风光 <strong>4/5</strong>，人像 <strong>3.5/5</strong>。' +
        '<strong>「60 英尺落地窗 + 雪山」是本区唯一的高质量室内建筑题材</strong>，也是全区唯一的雨雪天备案。' +
        '扣分：<strong>窗户朝西，日落时是正对太阳，几乎必然过曝或严重眩光；而且 10 月 4 日之后整栋关门。</strong>' +
        '水坝一带 4 分给的是水位低时的枯树桩前景与开阔水面。',
      shots: [
        {
          name: 'Upper Lobby 落地窗（室内，需在 10/4 前）',
          park: [43.87727, -110.57743],
          view: [43.87727, -110.57743],
          desc: '<strong>从主停车场进楼是 Lower Lobby，上楼梯到二层就是那个 60 × 36 英尺的窗。</strong>' +
            '<strong>最佳时段是清晨 07:00–09:00</strong>：Mount Moran 正面受光、室内还在阴影里，' +
            '而<strong>傍晚窗户正对落日，逆光加玻璃眩光，基本拍不了</strong>——这一点和大量旅游文章的说法相反。' +
            '次佳是<strong>日落后的蓝调（约 19:20–19:40 / 10 月约 18:35–18:55）</strong>：' +
            '室内灯亮起、窗外还有余晖，室内外亮度差最小，这一版最好拍。' +
            '<strong>镜头：16–35mm 拍「室内空间 + 整扇窗」的建筑关系，24–70mm 拍窗景本身。</strong>' +
            '<strong>玻璃反光是主要敌人</strong>：把镜头贴近玻璃、用手或衣物挡住侧面杂光，或直接用偏振镜。' +
            '<strong>室内三脚架政策未能从官方渠道确认</strong>——这是私营特许经营的酒店大堂，实务上高峰时段会被劝阻，请按手持准备（f/2.8、ISO 1600–6400）。'
        },
        {
          name: '后露台与 Lunch Tree Hill（室外，全年可达）',
          park: [43.87727, -110.57743],
          view: [43.88050, -110.57854],
          desc: '<strong>Upper Lobby 后门出去是大露台，露台向北有一条铺装步道上 Lunch Tree Hill，步行 5–8 分钟、爬升很小。</strong>' +
            '<strong>丘顶视野和窗里一样但没有玻璃，而且人少得多。</strong>' +
            '最佳时段<strong>日出后 30–90 分钟</strong>（Moran 正面受光、Willow Flats 湿地起雾）。' +
            '<strong>Willow Flats 是驼鹿与麋鹿的核心栖息地，清晨常能在湿地里看到它们</strong>——' +
            '<strong>400mm 以上配三脚架，距离足够安全</strong>。' +
            '<strong>24–70mm 拍湿地 + 湖 + 山的三层结构，70–200mm 抽 Moran。</strong>' +
            '注意 Willow Flats 每年 5 月 15 日 – 7 月 15 日禁止进入（护幼），秋季不在封闭期，但仍不要下到湿地里。' +
            '<strong>酒店 10 月 4 日关闭后，主楼进不去，但停车场与 Lunch Tree Hill 步道通常仍可从路边接近</strong>（未能从官方渠道确认关门后的具体管制范围，请以现场标识为准）。'
        },
        {
          name: 'Jackson Lake Dam 观景点与坝下蛇河',
          park: [43.85849, -110.58637],
          view: [43.85727, -110.58939],
          desc: '<strong>Teton Park Road 从坝顶横穿而过，坝的两端都有停车与观景设施（含解说牌、洗手间、无障碍通道）。</strong>' +
            '<strong>最佳时段：日出后 30 分钟内。</strong>坝面向西看 Jackson Lake 与 Mount Moran（方位 261°、距 15.2 公里），' +
            '<strong>清晨湖面无风时的倒影质量接近 Oxbow Bend，而且视野更开阔</strong>。' +
            '<strong>秋季水位下降露出的枯树桩与砾石滩是极好的前景</strong>，用 16–35mm 贴低机位把树桩放在近处。' +
            '<strong>坝下游的 Snake River Launch 一带能拍到河水从坝下奔出的段落</strong>，' +
            '这里也是本区观察白头海雕与钓鱼者的固定点。' +
            '<strong>70–200mm 抽坝体的混凝土结构线条 + 背后山脊</strong>，是一个有工业感的反差构图。' +
            '<strong>这一段属于 Teton Park Road，11 月 1 日随之封闭。</strong>'
        }
      ],
      access: {
        book: '大堂参观不需预约。住宿与 Mural Room 餐厅需预订（Grand Teton Lodge Company），但 2026 年 10 月 4 日后停业。',
        ticket: '园区门票 <strong>$35 / 车 / 7 天</strong>，<strong>年票覆盖</strong>。<strong>进入酒店大堂与露台完全免费，不需住店。</strong>',
        hours: '<strong>Jackson Lake Lodge 2026 年 5 月 15 日 – 10 月 4 日营业</strong>（Mural Room、Pioneer Grill、商店、咖啡车同为 10 月 4 日；Blue Heron Lounge 与马厩 10 月 3 日）。' +
          '<strong>10 月 5 日起整栋关闭，室内机位彻底不可用。</strong>' +
          '<strong>Jackson Lake Dam 一带全天开放，但随 Teton Park Road 于 11 月 1 日封闭</strong>（从北面经 Jackson Lake Junction 走 US-89 仍可全年通行到 Oxbow Bend 一侧）。',
        parking: '酒店有大型免费停车场（松树间分区）；水坝两端各有免费停车与洗手间。均不收费、无需许可。',
        walk: '停车场到 Upper Lobby <strong>2–3 分钟</strong>；Upper Lobby 到 Lunch Tree Hill 顶 <strong>5–8 分钟 / 铺装步道</strong>；水坝停车到观景点 <strong>1–3 分钟</strong>。'
      },
      notes: [
        '<strong>2026 年 10 月 4 日是最后一天。</strong>如果你的日期在 10 月 5 日之后，这个条目就只剩水坝那一半，请据此调整评分预期。',
        '<strong>落地窗朝西，傍晚是逆光</strong>——最佳室内时段是清晨与日落后的蓝调，不是日落本身。',
        '<strong>室内三脚架政策未能从官方渠道确认</strong>，按手持准备。玻璃反光用偏振镜或贴近玻璃解决。',
        '<strong>Willow Flats 是驼鹿与麋鹿的核心栖息地</strong>，不要下到湿地里；观察请用长焦并守住 25 码。',
        '<strong>秋季 Jackson Lake 因灌溉放水而水位明显下降</strong>，岸线会露出泥滩与枯树桩。这既可能毁掉倒影，也可能成为最好的前景，到现场再定构图。',
        '<strong>Colter Bay 加油站 10 月 9 日关、Signal Mountain 加油站 10 月 11 日关</strong>，这一带 10 月中旬之后加不到油。',
        '这一带（Jackson Lake Lodge 与 Colter Bay 周边）是全园手机信号相对最好的地方，<strong>Verizon 可用，AT&T 与 T-Mobile 基本无服务</strong>。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Mount_Moran_from_the_lobby_of_the_Jackson_Lake_Lodge,_WY.jpg', cap: '从二层大堂落地窗看 Mount Moran · Zeete / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Willow_Flats_area_and_Teton_Range_in_Grand_Teton_National_Park.jpg', cap: 'Willow Flats 湿地与 Teton 山脊 · Michael Gäbler / CC BY 3.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Jackson_Lake_and_Jackson_Lake_Dam,_Grand_Teton_National_Park_20110818_1.jpg', cap: 'Jackson Lake 与水坝 · DXR / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'gros-ventre-wildlife',
      n: 8,
      name: 'Gros Ventre Road 与 Blacktail Ponds（驼鹿与叉角羚）',
      en: 'Gros Ventre Road · Blacktail Ponds Overlook',
      score: 3.5,
      tldr: 'Moose-Wilson Road 本窗口全程封闭，找驼鹿只能来 Gros Ventre 河边柳丛，清晨黄昏概率最高。',
      tags: [
        { t: '国家公园门票（年票覆盖）', c: 'paid' },
        { t: 'Moose-Wilson 已封闭', c: 'risk' },
        { t: '需 400mm 以上', c: 'risk' },
        { t: '需运气', c: 'risk' },
        { t: '路边可停', c: 'free' }
      ],
      highlights: [
        '<strong>必须先讲清楚 Moose-Wilson Road 的状况，因为几乎所有指南都会把它列为找驼鹿的首选，而 2026 年它不可用。</strong>' +
          'NPS 官方 2026 年时间表：<strong>「September 8 – November 15: Closure between Laurance S. Rockefeller Preserve and Moose」——车辆与自行车都不行。</strong>' +
          '这是 Moose-Wilson Road Phase II 改建（把道路北段改接到新建的 Moose 环岛），工期到 2027 年。' +
          '紧接着 11 月 1 日又叠加常规冬季封闭。<strong>你的整个窗口都在封闭期内，那条沿路两侧长满 hawthorn 与 chokecherry、每年秋天黑熊排队吃果子的路，这一趟去不了。</strong>' +
          '同期 <strong>Death Canyon Road 与 Trailhead 也是 2026 年 5 月至 2027 年 6 月全时段封闭，行人也不行</strong>。',
        '<strong>替代方案是 Gros Ventre 一带。</strong>从 US-26/89/191 上的 Gros Ventre Junction 往东，沿 Gros Ventre River 走 Lower Gros Ventre Road 经 Kelly 再往上游，' +
          '<strong>河两侧是连片的柳丛与棉白杨林——这正是驼鹿在秋季的主要栖息与发情地形</strong>。' +
          '这条路属于 US-26/89/191 体系外的次级道路，但通到 Kelly 的路段是全年通行的（Kelly 是有人居住的社区）。',
        '<strong>Blacktail Ponds Overlook 是另一个可靠点位</strong>：US-26/89/191 路侧的铺装 turnout，' +
          '<strong>俯瞰一片由海狸活动形成的湿地池塘与蛇河河曲，背后是 Grand Teton（方位 314°、距 11.8 公里）</strong>。' +
          '它既是野生动物点（驼鹿、海狸、水鸟），也是 <strong>Schwabacher Landing 支路封闭时最近的倒影替代机位</strong>——' +
          '虽然是台地俯视、不是水面高度，完整度差一截，但它在全年开放的主干道上、永远能停。',
        '<strong>Antelope Flats 一带是叉角羚（pronghorn）的地方。</strong>' +
          '这些是北美跑得最快的陆生动物（时速可达 55 英里），<strong>每年秋天从 Jackson Hole 出发向南迁徙约 150 英里到 Upper Green River Basin 越冬</strong>——' +
          '这条被称作「Path of the Pronghorn」的通道是北美有记录的最古老的哺乳动物迁徙路线之一，至少已延续 6,000 年。' +
          '<strong>9 月下旬到 10 月正是它们开始南移的时候</strong>，在 Antelope Flats Road 与 Mormon Row 周边的开阔鼠尾草滩上概率最高。',
        '<strong>关于 elk reduction（园内减鹿计划），这是绝大多数指南不提、但你应该知道的一件事：</strong>' +
          'Grand Teton 是极少数在园界内合法开展有组织狩猎的国家公园（依据 1950 年扩界时的立法授权）。' +
          '<strong>核查结果：Wyoming Game &amp; Fish 2026 年第 7 章规章给出 Elk Hunt Area 75（即园内区域）的季节为 <u>2026 年 11 月 14 日至 12 月 6 日</u>。</strong>' +
          '<strong>也就是说，9 月下旬至 10 月下旬的整个窗口内，园内不会有减鹿计划活动，这一项对你没有影响。</strong>' +
          '另外即便在计划期内：<strong>Antelope Flats 段与 Deadmans Bar 至 Ditch Creek 的 Snake River Bottom 段全季关闭、Hunt Area 79 全季关闭、US-191 两侧各 1/4 英里禁猎、建筑物半英里内禁猎</strong>，' +
          '且参与者必须穿荧光橙／粉、携带熊喷雾、使用无铅弹。'
      ],
      photo: '野生动物 <strong>4/5</strong>，风光 <strong>3/5</strong>，人像 <strong>2/5</strong>。' +
        '这是本区唯一以动物为主目标的条目，<strong>但成败取决于运气与耐心，不取决于机位</strong>——所以综合分只给 3.5。' +
        'Blacktail Ponds 的风光价值是备用性质的。人像 2 分：没有可用的人物背景，纯功能性点位。',
      shots: [
        {
          name: 'Blacktail Ponds Overlook（铺装 turnout，全年可停）',
          park: [43.66669, -110.69538],
          view: [43.66709, -110.69698],
          desc: '<strong>US-26/89/191 上距 Moose Junction 北约 1.3 英里的铺装观景点，全年开放、停车即到。</strong>' +
            '<strong>动物：清晨 06:30–08:30 与傍晚 17:30 至天黑</strong>，俯瞰海狸湿地找驼鹿与海狸，<strong>400–600mm 配三脚架或豆袋</strong>。' +
            '<strong>风光：日出前后 30 分钟</strong>，Grand Teton 方位 314°，是斜侧顺光；' +
            '<strong>24–70mm 拍湿地 + 河曲 + 山的三层，70–200mm 抽山脊。</strong>' +
            '<strong>这里是 Schwabacher Landing 支路 10 月封闭后最近的倒影替代方案</strong>——从台地上往下拍，倒影完整度不如河面高度，但胜在永远能到。' +
            '注意 turnout 到湿地有明显高差，不要下切。'
        },
        {
          name: 'Lower Gros Ventre Road / Kelly 一带河谷（驼鹿主区）',
          park: [43.63340, -110.62691],
          view: [43.63340, -110.62691],
          desc: '<strong>从 Gros Ventre Junction 往东沿 Gros Ventre River 行驶，经 Kelly 社区，河两侧的柳丛与棉白杨林是驼鹿密度最高的一带。</strong>' +
            '<strong>最佳时段：日出前 30 分钟到日出后 90 分钟（9/25 约 06:45–08:45；10/22 约 07:15–09:15），以及日落前 90 分钟到天黑。</strong>' +
            '<strong>操作方式是慢速开车 + 停车扫视，不是徒步找</strong>——驼鹿在柳丛里几乎看不见，但过路的车队会告诉你哪里有。' +
            '<strong>镜头：400mm 起步，600mm 更好；秋季雄鹿的鹿角完整，是一年里最好的时候</strong>。' +
            '<strong>务必在车内或车旁拍，驼鹿在发情期（9 月中至 10 月上旬）具有真实攻击性，法定距离 25 码只是最低要求。</strong>' +
            '<strong>停车必须完全驶出行车道</strong>，Gros Ventre Road 窄且无路肩。' +
            '<strong>Gros Ventre Campground 已于 10 月 10 日关闭</strong>，之后这一带没有洗手间。'
        },
        {
          name: 'Antelope Flats Road（叉角羚与 bison）',
          view: [43.66489, -110.69444],
          desc: '<strong>从 US-26/89/191 往东进入的那段开阔鼠尾草滩，一路通到 Mormon Row。</strong>' +
            '<strong>叉角羚在开阔地上，比柳丛里的驼鹿好找得多</strong>，' +
            '<strong>清晨与傍晚的低角度光下，鼠尾草滩会变成暖金色，叉角羚的白色臀斑非常抢眼</strong>。' +
            '<strong>400–600mm；如果能把动物 + Teton 山脊放在一张里（用 200–400mm 后退拍），价值远高于纯动物特写。</strong>' +
            '这一带也常有 bison 群。<strong>bison 秋季仍具攻击性，25 码是最低距离，车是最好的掩体。</strong>' +
            '<strong>Antelope Flats Road 属「按条件季节性关闭」的次级道路，无公布日期，惯例 11 月 1 日前后关。</strong>'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。Kelly 社区与 Gros Ventre 上游部分路段在园界外，不另收费。',
        hours: '<strong>24 小时开放。</strong>Blacktail Ponds Overlook 位于全年开放的 US-26/89/191 上；' +
          '<strong>Lower Gros Ventre Road 至 Kelly 全年通行</strong>；' +
          '<strong>Antelope Flats Road 与 Gros Ventre Road 上游段为「按条件季节性关闭」，无公布日期。</strong>' +
          '<strong>Moose-Wilson Road（LSR Preserve ↔ Moose）2026 年 9 月 8 日 – 11 月 15 日全线封闭。</strong>',
        parking: 'Blacktail Ponds 为铺装 turnout，免费；Gros Ventre 与 Antelope Flats 沿线为路侧停车，免费，<strong>必须完全驶出行车道</strong>。',
        walk: '<strong>全部为车内或车旁拍摄，不需要步行。</strong>Blacktail Ponds 停车到栏杆 1 分钟。'
      },
      notes: [
        '<strong>Moose-Wilson Road 在 2026 年 9 月 8 日至 11 月 15 日全线封闭</strong>，任何把它列为驼鹿首选的攻略在这个窗口内都已失效。',
        '<strong>驼鹿发情期为 9 月中至 10 月上旬，雄鹿具真实攻击性。</strong>不要下车靠近，不要挡在它和水／母鹿之间，法定 25 码是最低值。',
        '<strong>2026 年减鹿计划的日期是 11 月 14 日 – 12 月 6 日，不在你的窗口内。</strong>若行程意外延到 11 月中之后，请在开放区域穿荧光橙或荧光粉。',
        '<strong>秋季是熊的增食期，Gros Ventre 河谷的棉白杨林里有黑熊</strong>。下车前先扫一圈，带熊喷雾。',
        '<strong>停车必须完全离开行车道</strong>——园内每年都有因为「动物堵车」导致的追尾。开双闪，别站在路面上。',
        '<strong>Gros Ventre Campground 10 月 10 日关闭</strong>，之后这一带没有洗手间与饮水。',
        '这一带手机信号断续，Kelly 附近尚可，往上游很快就没有了。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Bull_Moose_in_Gros_Ventre_River_(48905336898).jpg', cap: 'Gros Ventre River 中的公驼鹿 · GrandTetonNPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Moose_at_Gros_Ventre_(29704126705).jpg', cap: 'Gros Ventre 一带的驼鹿 · GrandTetonNPS / Public domain' }
      ]
    },
    {
      id: 'taggart-bradley-lakes',
      n: 9,
      name: 'Taggart Lake 与 Bradley Lake 步道',
      en: 'Taggart Lake · Bradley Lake Trailhead',
      score: 3.5,
      tldr: '3–5 英里的中等徒步换一个山就在眼前的湖。2026 北段步道封闭到 11/15，需走替代路线；湖面下午很早进山影。',
      tags: [
        { t: '国家公园门票（年票覆盖）', c: 'paid' },
        { t: '往返 3–6 英里', c: 'risk' },
        { t: '北段步道封闭至 11/15', c: 'risk' },
        { t: '上午最佳', c: 'free' },
        { t: '熊活动区', c: 'risk' }
      ],
      highlights: [
        '<strong>这是本区唯一需要真正走一段路才能到的机位，回报是「山就在眼前」。</strong>' +
          '<strong>从 Taggart Lake 看 Grand Teton 方位 317°、距离仅 5.6 公里、仰角 20.8°</strong>——' +
          '对比一下：Oxbow Bend 距离 24.7 公里、仰角 4.9°。<strong>这里的山在画幅里的体量是 Oxbow Bend 的四倍以上。</strong>',
        '两个湖都是<strong>冰川末端的终碛湖</strong>：冰川从 Avalanche Canyon 与 Garnet Canyon 推下来，' +
          '在谷口堆出弧形的碎石垄，融水积在垄后就成了湖。' +
          '<strong>Taggart Lake 往返约 3–4 英里、爬升约 400 英尺；加上 Bradley Lake 的环线往返约 5–6 英里、爬升约 600–800 英尺</strong>，' +
          '路况良好、坡度平缓，属于「中等偏易」。',
        '<strong>2026 年的具体限制必须先讲：NPS 明确「The northern segment of Taggart Lake Trail, between the first junction and Bradley Lake Trail, will be closed through November 15, 2026 for trail rehabilitation」。</strong>' +
          '<strong>好消息是 Taggart Lake Trailhead 与停车场保持开放，两个湖仍可经标示的替代路线到达</strong>，' +
          '但<strong>常规的「Taggart–Bradley 环线」这一趟走不成</strong>，实际是走一条进去、原路或另一条出来。' +
          '现场必须按标识走，不要进封闭段。',
        '<strong>时段上的关键事实：山太近太高，湖面下午很早就进山影。</strong>' +
          'Grand Teton 从湖边仰角 20.8°，<strong>推算湖面在日历日落前 1.5–2 小时就完全失去直射光</strong>——' +
          '9 月 25 日大约 17:20、10 月 22 日大约 16:45。' +
          '<strong>所以这里是上午的地方：日出后 1–3 小时（09:00–11:00）山体正面受光、湖面通常仍无风，是最好的窗口。</strong>' +
          '这也正好和「渡船停航后 Jenny Lake 变成半日徒步」错开，两者可以分在不同的上午。',
        '<strong>2016 年的火烧区仍在恢复中</strong>，步道前半段穿过一片以 lodgepole pine 幼树与灌木为主的开阔地——' +
          '这段视野比成熟林好得多，<strong>秋天灌木层会转成红褐色，是很好的前景</strong>，也是这条路线在秋季相对夏季的加分项。'
      ],
      photo: '风光 <strong>4/5</strong>，人像 <strong>3.5/5</strong>，野生动物 <strong>2.5/5</strong>。' +
        '<strong>山体在画面里的体量是本区最大的，湖岸有大量可用的石滩与倒木前景。</strong>' +
        '扣分：需要走 1.5–3 小时、下午光线不可用、2026 年步道有封闭段。' +
        '人像 3.5 分：湖岸开阔、背景是压人的山壁，环境肖像效果好，但要模特陪你走 4 英里。',
      shots: [
        {
          name: 'Taggart Lake 东岸（主机位）',
          park: [43.69314, -110.73294],
          view: [43.70410, -110.75512],
          desc: '<strong>从 Bradley-Taggart Trailhead 出发，单程约 1.6–2 英里、爬升约 400 英尺、步行 45–60 分钟。</strong>' +
            '<strong>最佳时段 09:00–11:00</strong>：山体正面受光、湖面通常仍平静、光线已经足够但还没到正午的平光。' +
            '<strong>镜头：16–35mm 是这里的正解</strong>——山近到广角才能装下，' +
            '而且湖岸有大量圆石与倒木可以做近前景；' +
            '<strong>24–70mm 拍常规的湖 + 山，70–200mm 抽 Grand Teton 与 Avalanche Canyon 的岩壁细节。</strong>' +
            '<strong>偏振镜在这里作用很大</strong>：湖面反光重，转到消反光角度能让水色变深、山影更清楚（这一处和倒影机位相反，消反光是对的）。' +
            '<strong>下午 17:00 之后湖面完全进山影（推算），不要把这里排在傍晚。</strong>'
        },
        {
          name: 'Bradley Lake（再往北，人更少）',
          park: [43.69314, -110.73294],
          view: [43.71233, -110.75172],
          desc: '<strong>Taggart Lake 以北约 1 英里，往返总计 5–6 英里、爬升 600–800 英尺。</strong>' +
            '<strong>2026 年北段步道（first junction 至 Bradley Lake Trail 之间）封闭至 11 月 15 日，必须走现场标示的替代路线</strong>，' +
            '实际距离与爬升会略有变化，出发前在 Craig Thomas 访客中心（开到 10 月 31 日）确认当日走法。' +
            '<strong>Bradley Lake 比 Taggart 更深、四周林木更密，正对 Garnet Canyon 与 Middle Teton</strong>，' +
            '<strong>人流通常只有 Taggart 的三分之一</strong>。' +
            '时段同样是上午 09:00–11:00。<strong>24–70mm 主力，70–200mm 抽 Middle Teton 的岩壁。</strong>'
        }
      ],
      access: {
        book: '不需预约（日间徒步无需许可；过夜露营需 backcountry permit）。',
        ticket: '园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。',
        hours: '<strong>步道 24 小时开放</strong>，但<strong>北段（first junction 至 Bradley Lake Trail）封闭至 2026 年 11 月 15 日</strong>；' +
          '<strong>Taggart Lake Trailhead 与停车场保持开放</strong>。' +
          '整个区域位于 Teton Park Road 上，<strong>11 月 1 日随之封闭</strong>。',
        parking: '<strong>Bradley-Taggart Trailhead 免费停车场</strong>，夏季上午 09:00 前必满，<strong>10 月下旬基本随到随停</strong>。' +
          '有旱厕。<strong>Trailhead 与步道本身也在 2026 年的改建范围内（官方状态「Partially open. Construction ongoing」），可能遇到局部围挡。</strong>',
        walk: 'Taggart Lake 单程 <strong>1.6–2 英里 / 45–60 分钟 / 爬升约 400 英尺</strong>；' +
          '加 Bradley Lake 总计 <strong>5–6 英里 / 3–4 小时 / 爬升 600–800 英尺</strong>。路面为压实土石，无技术难度。'
      },
      notes: [
        '<strong>2026 年 11 月 15 日前，Taggart Lake Trail 北段封闭，常规环线走不成。</strong>请按现场标识走替代路线，不要进封闭段。',
        '<strong>这是上午的地方。</strong>Grand Teton 仰角 20.8°，湖面在日历日落前 1.5–2 小时就进山影（推算）。',
        '<strong>Cascade / Avalanche Canyon 一带是黑熊与灰熊活动区</strong>，NPS 要求三人以上结队、出声、带熊喷雾。10 月是增食期。',
        '<strong>10 月步道背阴处可能有薄冰与残雪</strong>，微钉鞋套值得带；出发前查 NPS 的 Backcountry &amp; Trail Conditions 页。',
        '<strong>Teton Park Road 11 月 1 日封闭</strong>，之后这个 trailhead 只能靠步行或滑雪进入。',
        '沿途没有饮水，10 月气温低容易忘记喝水，至少带 1.5 升。',
        '这一带无手机信号，把行程告诉别人再出发。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Taggart_Lake_(21072005605).jpg', cap: 'Taggart Lake 与正对的 Teton 岩壁 · H.L.I.T. / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Taggart_Lake_(8983168016).jpg', cap: '湖岸石滩与山体 · Heidi / CC BY-SA 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Taggart_Lake_(29805486345).jpg', cap: 'Taggart Lake 全景 · mellow cat / CC BY 2.0' }
      ]
    },
    {
      id: 'jackson-town',
      n: 10,
      name: 'Jackson 镇：Town Square 鹿角拱门与 Million Dollar Cowboy Bar',
      en: 'Town of Jackson · Town Square Antler Arches · Million Dollar Cowboy Bar',
      score: 3.5,
      tldr: '四座鹿角拱门全部在位（2007–2015 逐座重建）。本区唯一的夜间与室内题材，也是唯一全年补给点。',
      tags: [
        { t: '完全免费（广场）', c: 'free' },
        { t: '全年开放', c: 'free' },
        { t: 'Cowboy Bar 严格 21+', c: 'risk' },
        { t: '博物馆 $18', c: 'paid' }
      ],
      highlights: [
        '<strong>四座鹿角拱门站在 George Washington Memorial Park（俗称 Town Square）的四个角上。</strong>' +
          '第一座由 Jackson Hole Rotary Club 在 1953 年建于西南角（至今仍是最热门的一角），' +
          '其余三座在 1966–1969 年补齐。<strong>每座用超过 2,000 支鹿角、总重约 14,000 磅</strong>，' +
          '角与角之间靠摩擦力与摆放咬合，只有外缘几支上了螺丝防偷。',
        '<strong>核实结果：四座拱门目前全部在位，且都不是原件。</strong>' +
          '鹿角的寿命约 50 年，Rotary Club 与镇政府用九年时间逐座重建：' +
          '<strong>2007 年第一座、2009 年东南角、2011 年东北角、2013 年西北角，2015 年 6 月最后一座（东北／西北角，报道口径略有出入）完工。</strong>' +
          '当年的公共工程主管 Larry Pardee 表示这批预计能撑到 <strong>2050 年前后</strong>。' +
          '旧拱门被拍卖，最后一座拍出 $59,000。' +
          '<strong>未能核实：有二手来源提到 2026 年秋季可能对拱门做维护工程（含脚手架与临时人行道封闭），但该来源日期自相矛盾、无法从 Town of Jackson 官方渠道确认，请到现场以实际情况为准。</strong>',
        '<strong>鹿角的来源是个值得知道的细节：全部来自镇北的 National Elk Refuge。</strong>' +
          '每年冬天有数千头麋鹿在那里越冬，<strong>春天公鹿在离开前自然脱角</strong>，' +
          '由 Boy Scouts 拾集后在 Town Square 拍卖，收益部分回流给避难所。<strong>没有一头鹿为这些拱门死过。</strong>',
        '<strong>Million Dollar Cowboy Bar 就在广场北侧（25 N. Cache Street），自 1937 年起营业至今。</strong>' +
          '<strong>那些真皮马鞍吧凳是 1973 年新东家 C.A. Poindexter 装上去的——他一次买了 20 副二手马鞍，每副 $97</strong>，' +
          '同时把这里改造成 country western 的现场演出场地（1975 年 Waylon Jennings、1976 年 Willie Nelson）。' +
          '室内是原木、松节疤木质地面与镶银的马具装饰。' +
          '<strong>硬性限制：全时段严格 21 岁以上，必须出示实体证件，无例外。每日 11:00–01:00；周一至周六 20:30 有现场乐队，周日 DJ。</strong>',
        '<strong>National Museum of Wildlife Art 值得单列出来说：值得去。</strong>' +
          '它在镇北 2.5 英里的一处山丘上，<strong>建筑本身是一座仿砂岩崖壁的低伏结构，从公路上几乎看不见</strong>，' +
          '正下方就是 National Elk Refuge。' +
          '<strong>免费的 3/4 英里 Sculpture Trail 沿山坡布置了 20 多件野生动物雕塑，背景是 Elk Refuge 与 Gros Ventre 山脉</strong>——' +
          '<strong>「雕塑剪影 + 真实山景」这个组合是本区独一无二的题材，而且它朝东，日出时是顺光。</strong>' +
          '<strong>2026 年 5 月 1 日 – 10 月 31 日每天 10:00–17:00；11 月 1 日起改为周二至周日。成人 $18、65+ $16。Sculpture Trail 免费，随馆开放时间。</strong>'
      ],
      photo: '人文 <strong>4/5</strong>，夜景 <strong>4/5</strong>，风光 <strong>2/5</strong>。' +
        '<strong>这是整个子地区唯一的夜间题材、唯一的室内人文题材，也是坏天气时唯一能拍的地方。</strong>' +
        '广场四角的木廊、拱门、以及入夜后店招牌的暖光，蓝调时段很好看。' +
        '扣分：白天广场就是一个游客密集的小公园，画面很杂；风光 2 分是因为镇内看不到 Teton 山脊（被 East Gros Ventre Butte 挡住）。',
      shots: [
        {
          name: '西南角鹿角拱门（最热门的一座）',
          park: [43.47997, -110.76180],
          view: [43.47977, -110.76214],
          desc: '<strong>1953 年第一座拱门的位置，也是所有明信片用的那一角（Broadway 与 Cache 路口）。</strong>' +
            '<strong>最佳时段是蓝调：9/25 约 19:20–19:45（日落 19:15）；10/22 约 18:35–19:00（日落 18:28）。</strong>' +
            '这时街灯与店招牌已亮、天空还有深蓝，鹿角的复杂结构会被路灯从下方勾出层次——' +
            '<strong>白天顶光下拱门会拍成一团灰白的乱枝，蓝调是唯一能把它拍好看的时段。</strong>' +
            '<strong>镜头：16–35mm 从拱门下方往上仰拍、把整座拱门与背后的天空一起框住</strong>；' +
            '<strong>24–70mm 拍拱门 + 街景；70–200mm 抽单支鹿角的纹理。</strong>' +
            '<strong>三脚架：位于市政公园与人行道，非商业用途通常无人干涉，但人流大，请收紧脚架并注意行人。</strong>' +
            '清晨 07:00 前是唯一能拍到「无人的拱门」的时间。'
        },
        {
          name: 'Million Dollar Cowboy Bar（室内，马鞍吧凳）',
          park: [43.47997, -110.76180],
          view: [43.47988, -110.76253],
          desc: '<strong>25 N. Cache Street，广场北侧，每日 11:00–01:00。</strong>' +
            '<strong>拍马鞍吧凳最好的时间是 11:00–15:00 的下午空场</strong>——' +
            '晚上 20:30 有乐队之后人满且光线全是彩色演出灯，拍不了静物。' +
            '<strong>光线极暗：f/1.4–f/2、ISO 3200–12800、1/60 秒起步。</strong>' +
            '<strong>35mm 或 50mm 大光圈定焦是这里唯一合适的配置</strong>，' +
            '<strong>不要用闪光灯</strong>（会毁掉气氛也会被制止），三脚架在营业中的酒吧内不现实。' +
            '<strong>严格 21+，必须带实体证件</strong>（护照或驾照，电子件不行）。' +
            '构图上：<strong>沿吧台压低机位、用 f/1.4 让一排马鞍向纵深虚化</strong>，是这里最有辨识度的一张。' +
            '拍店内其他客人前请征得同意。'
        },
        {
          name: 'National Museum of Wildlife Art 与 Sculpture Trail',
          park: [43.51907, -110.74895],
          view: [43.51907, -110.74895],
          desc: '<strong>2820 Rungius Road，镇北 2.5 英里，US-26/89/191 路东的山丘上，开车 6–8 分钟。</strong>' +
            '<strong>3/4 英里的 Sculpture Trail 免费、随馆开放时间（10 月 31 日前每天 10:00–17:00）。</strong>' +
            '<strong>最佳时段：开馆的 10:00–11:30</strong>——步道朝东俯瞰 National Elk Refuge 与 Gros Ventre 山脉，' +
            '<strong>上午是顺光，雕塑的青铜表面与远山同时受光</strong>；' +
            '傍晚这一侧会先进入山丘的阴影。' +
            '<strong>镜头：24–70mm 拍「雕塑 + 山景」的关系，70–200mm 把远山压到雕塑背后</strong>——' +
            '这个压缩关系是这条步道的核心玩法。' +
            '<strong>室内展馆成人 $18、65+ $16、5–18 岁首位 $10，可现场买票，无需预约。</strong>' +
            '<strong>室内三脚架政策未能从官方渠道确认，按手持准备。</strong>' +
            '<strong>这是本区最好的雨雪天备案</strong>：室内有大量 19–20 世纪野生动物题材绘画（含 Carl Rungius 的核心收藏），而且暖和。'
        }
      ],
      access: {
        book: '广场与拱门不需预约；Cowboy Bar 不接受订位（除售票演出）；博物馆可现场买票，无需预约。',
        ticket: '<strong>Town Square 与四座拱门完全免费</strong>；Sculpture Trail <strong>免费</strong>；' +
          '<strong>National Museum of Wildlife Art 成人 $18、65 岁以上 $16、5–18 岁首位 $10、其后每位 $5、4 岁以下免费</strong>（现场出示证件有本地与军人折扣）；' +
          'Cowboy Bar 免入场费，酒水另付。',
        hours: '<strong>Town Square 与拱门 24 小时开放、全年无休。</strong>' +
          '<strong>Million Dollar Cowboy Bar 每日 11:00–01:00</strong>，周一至周六 20:30 现场乐队、周日 DJ，<strong>全时段 21+</strong>。' +
          '<strong>National Museum of Wildlife Art：5 月 1 日 – 10 月 31 日每天 10:00–17:00；11 月 1 日 – 4 月 30 日周二至周日 10:00–17:00（周一闭馆）</strong>，' +
          '另于国庆日、退伍军人节、感恩节、12/25–26、元旦与总统日闭馆。',
        parking: '<strong>Jackson 镇内有路边停车与多处公共停车场</strong>，广场周边旺季紧张，步行或叫车更省事。' +
          '<strong>博物馆有自己的免费停车场。</strong>',
        walk: '广场四角之间步行 1–2 分钟；广场到 Cowboy Bar <strong>1 分钟</strong>；' +
          '博物馆停车到 Sculpture Trail 起点 <strong>2 分钟</strong>，整条步道 <strong>3/4 英里 / 25–40 分钟</strong>，有坡但铺装良好。'
      },
      notes: [
        '<strong>四座拱门确认全部在位</strong>（2007–2015 逐座重建，预计使用到 2050 年前后）。<strong>未能核实的是：某二手来源提到 2026 年秋可能有维护工程与临时封闭，无法从官方渠道确认。</strong>',
        '<strong>Million Dollar Cowboy Bar 全时段严格 21 岁以上，必须出示实体证件，官方原文「No exceptions」。</strong>',
        '<strong>拱门只在蓝调时段好拍。</strong>白天顶光会把它拍成一团灰白乱枝。',
        '<strong>Jackson 是本次行程唯一全年可靠的加油与补给点。</strong>园内加油站 10 月 9 日至 10 月 18 日间陆续关闭，离开镇子前请加满油。',
        '<strong>熊喷雾不能带上飞机</strong>，在 Jackson 的户外店购买或租用，离开时可以在部分店铺回收。',
        '<strong>镇内看不到 Teton 山脊</strong>（被 East Gros Ventre Butte 挡住），别指望在 Town Square 拍到雪山背景。',
        '博物馆的 Sculpture Trail 朝东，<strong>上午顺光、傍晚进阴影</strong>，别排在下班前去。'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Elk_antler_arch_at_Jackson_Square,_Jackson,_WY_2022-07-11.jpg', cap: 'Town Square 鹿角拱门 · Schwerdf / CC BY 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Antler_Base.jpg', cap: '拱门基座的鹿角咬合细节 · Sirguh / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Million_Dollar_Cowboy_Bar_(Jackson,_Wyoming)_001.jpg', cap: 'Million Dollar Cowboy Bar 外观 · Leonard J. DeFrancisci / CC BY-SA 3.0' }
      ]
    }
  ]
};
