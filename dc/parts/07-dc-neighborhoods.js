module.exports = {
  id: 'dc-neighborhoods',
  name: 'Washington DC · Georgetown 与外围街区',
  navName: 'Georgetown 与外围',
  color: '#a78bfa',
  lead: '这一区是 DC 里「纪念碑之外」的部分：联邦风格红砖排屋、一座世界第六大的哥特主教座堂、' +
    '一座哈佛管的私人花园、一位废奴主义者的山顶宅邸，以及一条 300 英尺长的十三级叠瀑。' +
    '<strong>本区最重要的三个「水到底通没通」的判断结果是：Meridian Hill 叠瀑已于 2026 年 5 月 14 日复流（去）；' +
    'C&amp;O Canal 的 Georgetown 段官方状态仍是「De-watered」干河床（别指望倒影）；' +
    'Dumbarton Oaks 的循环喷泉在 10 月 31 日前的常规季应当运行，但未能从官方渠道逐一确认。</strong>' +
    '另有两个会坑人的时间坑：Dumbarton Oaks <strong>每天只开下午 14:00–18:00 且周一闭园</strong>，' +
    'National Cathedral <strong>周日基本不售自助参观票</strong>。',
  callouts: [
    {
      type: 'warn',
      title: 'C&O Canal 的 Georgetown 段仍是干河床',
      html: '<p>NPS 官方「Current Park Conditions」页面的水位表（表内标注 Last Update: 4/16/2026，页面整体更新至 2026-08-24）写明：' +
        '<strong>Locks 3–4、Locks 4–5、Locks 5–6 全部为「De-watered」</strong>。' +
        'Locks 4–5 就是 Level 4——从 Wisconsin Avenue 往上游一直到 Brookmont 的那段长水面，' +
        '也正是所有明信片照片的取景处。</p>' +
        '<p>原因是 2024 年 2 月开工的 <strong>$12.7M 船闸与石墙修复工程</strong>（Locks 1、2、5、Inlet Lock 1、Guard Lock 及 Level 1/2/4 石墙）。' +
        'NPS 明确写「To facilitate construction, water will need to be lowered in the canal during the entire duration of construction」。' +
        '工期原定 2026 年春完工，但 <strong>2026 年 2 月底 Level 1 北墙部分坍塌</strong>，需重做设计，' +
        '官方最新口径改为「anticipated that the project will last through Fall 2026, weather dependent」。' +
        '坍塌点周边的 towpath 至今封闭，Georgetown 段（Mile 0.4–1）有绕行。</p>' +
        '<p>有非官方博客称运河已在 Thomas Jefferson St 至 30th St 之间重新蓄水。' +
        '<strong>该说法未能在 NPS 官方渠道得到证实</strong>，与官方水位表相互矛盾。' +
        '请按「干河床」做预案，出发前致电园区总部 <strong>301-739-4200</strong> 确认。' +
        '运河游船（Georgetown Heritage）状态为 Closed，官方目标是 <strong>2027 年春</strong>复航，' +
        '这已是第三次推迟，不要指望。</p>'
    },
    {
      type: 'good',
      title: 'Meridian Hill 十三级叠瀑已复流（本区最确定的好消息）',
      html: '<p>叠瀑自 2019 年因下层广场改造被关闭，是它建成以来<strong>历史上第一次完全停水</strong>，一停就是七年。' +
        'NPS Rock Creek Park 官方页面写明：<strong>「The cascading fountain at Meridian Hill Park reopened to visitors on May 14, 2026」</strong>，' +
        '下层反射池同日重开。</p>' +
        '<p>7 月初曾有一次插曲：Joan of Arc 雕像旁两座未列入改造合同的小喷泉试水，把管路里几十年的铁锈沉积冲进了互联的管网，' +
        '叠瀑一度变成浑浊的棕色。NPS 冲洗加人工吸底，几天内恢复清澈。' +
        'NPS 同时提示「Testing of the fountain will continue, to adjust the water levels and obtain the correct flow rate」，' +
        '<strong>即流量仍可能被临时调整</strong>。</p>' +
        '<p>另需注意：2026 年整园养护中，<strong>上层草坪自 4 月底起被围栏封闭做草皮更新</strong>，' +
        'NPS 只说「估计封闭到夏天」。<strong>9–10 月围栏是否已拆除未能确认。</strong>走道全程开放。</p>'
    },
    {
      type: 'info',
      title: '联邦停摆风险：这个时间窗内已排除',
      html: '<p>本区六个点里，C&amp;O Canal、Frederick Douglass NHS、Meridian Hill Park 三处属 NPS，理论上受停摆影响；' +
        'Dumbarton Oaks 由 <strong>Harvard University 的 Trustees</strong> 运营，' +
        'Washington National Cathedral 是<strong>私立圣公会机构</strong>，两者与联邦拨款无关，停摆照常开门。</p>' +
        '<p>拨款现状：<strong>H.R. 6500《Continuing Appropriations and Extensions Act, 2027》已于 2026 年 9 月 2 日由总统签署生效</strong>' +
        '（参议院 8 月 8 日 90–6 通过，众议院 9 月 1 日 370–48 通过）。' +
        '该 CR 按 FY2026 水平续拨，<strong>有效期至 2026 年 12 月 11 日</strong>。' +
        '也就是说 <strong>10 月 1 日的财年切换不会触发停摆，2026 年九月底至十月底这段时间完全被覆盖</strong>。' +
        '<strong>下一个拨款悬崖是 2026 年 12 月 11 日</strong>——' +
        '十二月中旬之后出行的读者请自行重查当时的拨款状态。</p>'
    },
    {
      type: 'warn',
      title: 'Dumbarton Oaks：只开下午、只能网购、禁三脚架',
      html: '<ul>' +
        '<li><strong>2026 常规季（3/1–10/31）：周二至周日 14:00–18:00，17:30 停止入场。周一与联邦假日闭园。</strong>' +
        '上午完全没戏，别安排早光。</li>' +
        '<li><strong>2026 年额外闭园日：10 月 8–10 日（内部活动，当日不售票、季票也不认）。</strong>' +
        '另有 4/11、4/23–25、5/7–9 及各联邦假日。</li>' +
        '<li>票 <strong>$15/人</strong>，<strong>只能通过 Eventbrite 提前购买，现场无售票点、无候补、无 standby</strong>。' +
        '每户每日限 10 张，售出不退，不可再次入场。2026 年季票已售罄。</li>' +
        '<li><strong>但请分清：花园与博物馆是两回事。</strong>' +
        'Museum（1703 32nd Street NW，拜占庭与前哥伦布艺术收藏）<strong>周二至周日 11:30–17:30，免费、不需票、不需预约</strong>；' +
        '花园入口另在 31st &amp; R Street NW、14:00 才开、要 $15。' +
        '<strong>最划算的走法是 11:30 先进免费博物馆，14:00 再进花园</strong>；' +
        '对园林没特别兴趣的人只逛博物馆完全合理。</li>' +
        '<li><strong>官方 Gardens Rules 明文禁止：三脚架、独脚架、自拍杆、灯具及其他大体积摄影器材；' +
        '同时禁止一切商业与专业摄影摄像（含婚纱与订婚照）。</strong>手持拍摄没问题。</li>' +
        '<li>11/1–12/31 转入冬季时段 14:00–17:00（16:30 停止入场），<strong>免票但仍需提前预约</strong>；1/1–2/28 全季闭园。</li>' +
        '</ul>'
    },
    {
      type: 'tip',
      title: '光线与秋色：具体到分钟与日期',
      html: '<p><strong>日出日落（Washington DC，按 NOAA 算法计算，与官方发布值差异在 ±3 分钟内）：</strong></p>' +
        '<ul>' +
        '<li><strong>9 月 25 日</strong>：日出 <strong>06:58</strong>（方位 <strong>90°</strong>，正东）／日落 <strong>19:02</strong>（方位 <strong>270°</strong>，正西）；' +
        '正午 13:00，太阳高度角 50°；民用暮光结束 19:28。</li>' +
        '<li><strong>10 月 22 日</strong>：日出 <strong>07:24</strong>（方位 <strong>104°</strong>）／日落 <strong>18:21</strong>（方位 <strong>257°</strong>）；' +
        '正午 12:53，太阳高度角 40°；民用暮光结束 18:48。</li>' +
        '</ul>' +
        '<p>意义：<strong>9 月底日落几乎正西，10 月底西偏南 23°</strong>——这直接决定 Key Bridge 的剪影落在画面哪一侧。' +
        '夏令时到 11 月 1 日才结束，九月底至十月底全程是 EDT，不用换算。</p>' +
        '<p><strong>秋色：DC 城区的历史平均峰值在 11 月第一周</strong>；Shenandoah 约 10 月 20 日，' +
        '马里兰／弗吉尼亚内陆在 10 月下旬，然后才轮到低海拔的 DC。' +
        '《Old Farmer\'s Almanac》对 2026 年大西洋沿岸 9–10 月的长期预报是<strong>气温低于常年约 1°F、降水少约 1 英寸</strong>，' +
        '偏冷偏干通常有利于显色。' +
        '<strong>结论：本区三个秋色目标（Dumbarton Oaks、Meridian Hill、运河纤道）在 9 月底基本还是全绿，' +
        '10 月下旬能拍到 60–80% 转色，真正的峰值要等到 10 月最后几天到 11 月初。' +
        '如果日期可选，选晚不选早。</strong>Dumbarton Oaks 自家通讯里说他们的菊花与树冠「always at their best in November」。</p>'
    }
  ],
  spots: [
    {
      id: 'georgetown-canal',
      n: 1,
      name: 'C&O 运河与 Georgetown 滨水公园',
      en: 'C&O Canal Georgetown & Georgetown Waterfront Park',
      /* 游览价值：Georgetown 滨水公园是免费开阔的河岸，Mile 0 的四座船闸是真实工业遗迹，
         但运河干涸、游船停摆之后，它属于「已经在 Georgetown 逛街、顺路走下来」的层级，
         不是为它单独安排半天的地方。 */
      must: 3,
      score: 3,
      tldr: '运河仍是干河床、游船停摆、纤道有绕行；真正值得来的是滨水公园的日落与 Key Bridge 剪影。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '运河无水', c: 'risk' },
        { t: '纤道绕行', c: 'risk' },
        { t: '日落机位强', c: 'good' }
      ],
      highlights: [
        'Chesapeake &amp; Ohio Canal 1828 年动工、1850 年通到 Cumberland，全长 184.5 英里，' +
          '<strong>Georgetown 就是 Mile 0</strong>。今天沿 Level 1 到 Level 4 还留着 Lock 1–4 四座石砌船闸，' +
          '闸室、闸门槽、绞盘基座都是原物，即使没水也是很好的石构与几何题材',
        '<strong>但请先接受这个前提：水没了。</strong>NPS 官方水位表把 Locks 3–4、4–5、5–6 全部标为 De-watered。' +
          '$12.7M 的船闸与石墙工程从 2024 年 2 月做到现在，' +
          '<strong>2026 年 2 月底 Level 1 北墙部分坍塌</strong>后工期又延到「through Fall 2026」。' +
          '网上流传的绿水倒影照都是 2023 年之前拍的',
        '运河两侧那排红砖厂房是 Georgetown 工业时代的遗存——面粉厂、制冰厂、仓库，' +
          '19 世纪靠运河与 B&amp;O 铁路运货，1920 年代 Key Bridge 与 Whitehurst Freeway 建成后航运彻底衰败，' +
          '厂房在 1970 年代被改造成 Canal Square 一类的商业体。<strong>Wisconsin Avenue 以西、Grace Street 一带砖立面最完整</strong>',
        '<strong>Georgetown Waterfront Park</strong> 2011 年秋建成，10 英亩，从 31st Street NW 一路延伸到 Key Bridge，' +
          '<strong>24 小时开放且完全免费</strong>。西端有一座公共迷宫（labyrinth），中段 Percy Plaza 有一座季节性运行的喷泉' +
          '（<strong>10 月是否还开未能从官方渠道确认</strong>，NPS 只写「seasonal」）',
        '<strong>Francis Scott Key Bridge</strong> 1923 年通车，是 DC 段 Potomac 河上现存最古老的桥，' +
          '七跨钢筋混凝土开腹拱。它取代的是更早的 Aqueduct Bridge——那座桥曾把运河船直接驳过河去 Alexandria 运河，' +
          '<strong>它的桥台残迹至今还立在滨水公园西端的河岸上</strong>，是很好的前景'
      ],
      tour: [
        '<strong>合理的走法是一条「河岸去、运河回」的环线，全程 1–1.5 小时。</strong>' +
          '从 31st Street NW 的入口进 Georgetown Waterfront Park，' +
          '沿河岸步道向西走到 Key Bridge 下（<strong>约 700 米、9 分钟</strong>，全程平地铺装、轮椅可通行），' +
          '看西端的 Aqueduct Bridge 桥台残迹与公共迷宫；' +
          '再从 Key Bridge 一侧上到 M Street、折回沿 C&amp;O Canal 纤道往东走，' +
          '看 <strong>Lock 3 与 Lock 4</strong> 两座原物石砌船闸，最后从 Thomas Jefferson Street 出到 M Street 商业区。' +
          '<strong>只想看河景：滨水公园单独 30–40 分钟就够。</strong>',
        '<strong>先把运河的现状说清楚，这是这一站最容易按旧攻略踩空的地方：河床是干的，没有水。</strong>' +
          'NPS 官方「Current Park Conditions」水位表（表内标注 Last Update 4/16/2026）把 ' +
          '<strong>Locks 3–4、4–5、5–6 全部标为「De-watered」</strong>，' +
          '原因是 2024 年 2 月开工的 $12.7M 船闸与石墙修复工程，' +
          '<strong>2026 年 2 月底 Level 1 北墙部分坍塌后工期延到「through Fall 2026」</strong>。' +
          '<strong>运河游船同样不要指望</strong>：NPS 现况页把 Georgetown Canal Boat 列为「Closed for the Season」。' +
          '网上那些绿水倒影、船闸放水、骡子拉船的照片与视频都是 2023 年之前的，' +
          '<strong>现在看到的是一条铺着石底的干沟</strong>——把它当石构遗迹看就不会失望，当水景看一定失望。',
        '<strong>可以跳过与必须绕行的部分。</strong>' +
          '<strong>纤道 Mile 0.4–1（Georgetown 段）有施工绕行、Level 1 北墙坍塌点周边完全封闭</strong>，' +
          '绕行走相邻街道与巷子，多绕 0.3 英里以内，按现场旗手与告示牌走。' +
          '<strong>Wisconsin Avenue 以西那段 Level 4 正是石墙修复的工区之一</strong>，围挡与脚手架位置随施工推进变动，' +
          '时间紧就直接跳过，把时间留给滨水公园与 Lock 3–4。' +
          '<strong>Georgetown Visitor Center（1057 Thomas Jefferson Street NW）值得进去五分钟</strong>' +
          '拿一份纤道现况图与绕行图，也是盖 Passport 章的地方，但<strong>周一周二闭馆</strong>。',
        '<strong>交通是这一区最大的坑：Georgetown 全境没有地铁站，而且接驳巴士的名字在 2025 年全变过一次。</strong>' +
          '<strong>最近的地铁是 Foggy Bottom–GWU（蓝/橙/银线），步行到滨水公园约 1.3 公里 / 16 分钟</strong>；' +
          '<strong>另一个更省力的办法是从 Rosslyn 站（蓝/橙/银线）走 Key Bridge 过河，约 1.2 公里 / 15 分钟</strong>，' +
          '过桥时本身就能看到 Georgetown 的河岸天际线。' +
          '<strong>不要再找 DC Circulator 那趟红色巴士——它已于 2024 年 12 月 31 日永久停运，没有替代班车。</strong>' +
          '现在沿 Wisconsin Avenue 与 M Street 的是 Metrobus <strong>D80</strong>（Wisconsin Ave–Union Station，全天运行，' +
          '原 33 路）、<strong>D82</strong>（Wisconsin Ave–Foggy Bottom，<strong>仅平日高峰</strong>，原 31 路）' +
          '与 <strong>A58</strong>（M Street 往 Rosslyn 方向，原 38B）。' +
          '<strong>周末开车来是最差的选择</strong>：街边咪表位周末照样收费且几乎永远满位，' +
          '车库首选 Washington Harbour（3000 K St NW）与 Georgetown Park（3222 M St NW）。',
        '<strong>餐饮与卫生间：这一站本身设施很少，吃饭要靠 M Street 与 Washington Harbour。</strong>' +
          '<strong>Washington Harbour（3000 K St NW）沿河一圈是本区最集中的餐厅群</strong>，也紧邻滨水公园东端，' +
          '走出公园就能吃饭上厕所。' +
          '运河边两家最有名的甜点店时段差别很大、很容易白跑：' +
          '<strong>Baked &amp; Wired（1052 Thomas Jefferson St NW）官方公布「8 am – 4 pm daily」，下午四点就关</strong>；' +
          '<strong>Georgetown Cupcake（3301 M St NW）周一至周六 10:00–21:00、周日 10:00–20:00</strong>，' +
          '晚上还开但常年排队。<strong>想两家都试，必须先去 Baked &amp; Wired。</strong>' +
          '（餐饮时段据各店官网，<strong>2026-09-15 核实</strong>，请出行前复查）'
      ],
      photo: '风光 <strong>3.5/5</strong>，建筑 <strong>3/5</strong>，人像 <strong>3.5/5</strong>。' +
        '滨水公园的日落方位极好、开阔且免费，撑起了全部分数；运河本体因无水掉了至少一档，' +
        '纤道工程围挡也让砖仓库那条线不完整。',
      shots: [
        {
          name: 'Georgetown Waterfront Park 东段，日落对着 Key Bridge',
          desc: '<strong>本条目唯一的招牌机位。</strong>从公园东端（31st Street NW 入口）沿河岸步道向西望 Key Bridge，' +
            '方位约 <strong>280°</strong>。9 月 25 日日落方位 270°、10 月 22 日 257°——' +
            '<strong>9 月底太阳几乎正落在桥的轴线上（偏左 10°），10 月底会明显偏到桥左侧的河面上</strong>。' +
            '两种都好用，但构图不同：9 月底把太阳压在桥拱开口里做爆闪星芒（f/16），' +
            '10 月底让桥留在画面右侧做纯剪影、左边留大片橙红天空。' +
            '<strong>时段 9/25 是 18:20–19:28，10/22 是 17:40–18:48</strong>（日落前 40 分钟到民用暮光结束）。' +
            '<strong>桥在这个时段是剪影而不是被照亮的主体</strong>——桥面路灯与对岸 Rosslyn 楼群会在日落后 15–20 分钟点亮，' +
            '那 10 分钟是天空亮度与灯光亮度平衡的窗口，蓝调版本比金光版本更出片。' +
            '24–70mm 通吃，70–200mm 压缩 Rosslyn 天际线与桥拱效果更强。三脚架无限制，河岸步道很宽。',
          park: [38.90285, -77.06342],
          view: [38.90275, -77.06513]
        },
        {
          name: 'Lock 3 / Lock 4 船闸段纤道',
          desc: '<strong>把这里当石构与线条题材，不要当水景题材。</strong>Lock 3（38.90410, -77.05935）与 Lock 4（38.90418, -77.06033）' +
            '之间这段 Level 3 是 Georgetown 保存最完整的闸室。无水状态下闸底铺石、闸墙分层砌缝、' +
            '两侧红砖厂房的倒影墙全部裸露，<strong>反而更适合拍结构</strong>。' +
            '运河呈东西走向、两侧被高楼夹住，<strong>只有 11:30–14:30 顶光能落到闸底</strong>，其余时间整条沟都在阴影里；' +
            '想拍砖墙暖色就反过来选 16:30 之后的高侧光打上层立面。24–35mm 沿纤道纵向压缩闸室序列，' +
            '35–85mm 拍闸门槽与铁件细节。<strong>纤道 Mile 0.4–1 有施工绕行，' +
            '按现场旗手与告示牌走，Level 1 北墙坍塌点周边完全封闭。</strong>',
          view: [38.90410, -77.05935]
        },
        {
          name: 'Wisconsin Avenue 以西的砖仓库与吊桥段',
          desc: '<strong>无 OSM 实体，地图无针脚。</strong>位置在 Wisconsin Avenue 跨运河桥往西，' +
            '沿 Grace Street 与 Cady\'s Alley 之间那段 Level 4。这里是砖立面最连续、木质人行吊桥最上镜的一段，' +
            '也正是 Level 4 石墙修复的工区之一——<strong>围挡与脚手架位置随施工推进变动，无法预告</strong>。' +
            '光线同上：正午顶光进沟，傍晚打立面。<strong>这一段建议当机动项</strong>，' +
            '到现场看围挡再决定要不要花时间。',
          park: [38.90466, -77.06691]
        }
      ],
      access: {
        visit: '<strong>1–1.5 小时走完「河岸去、运河回」的环线。</strong>' +
          '分配：Georgetown Waterfront Park 从 31st Street 走到 Key Bridge 下并看 Aqueduct Bridge 桥台残迹 ' +
          '<strong>30–40 分钟</strong>、折回沿纤道看 Lock 3 与 Lock 4 两座石砌船闸 <strong>20–30 分钟</strong>、' +
          'Georgetown Visitor Center <strong>5–10 分钟</strong>。' +
          '<strong>只看滨水公园的河景与日落：30 分钟足够。</strong>' +
          '若还要把 Wisconsin Avenue 以西那段砖仓库走完，另加 20 分钟（工区，到现场看围挡再决定）。' +
          '<strong>这一站没有需要排队或限时的环节，时间完全可压缩，适合当作 Georgetown 逛街的尾段。</strong>',
        book: '<strong>不需预约。</strong>' +
          '<strong>运河游船目前买不到票，而且两个官方渠道的说法不一致：</strong>' +
          'NPS「Current Park Conditions」页把 Georgetown Canal Boat 列为 <strong>「Closed for the Season」</strong>；' +
          '而运营方 Georgetown Heritage 自己的 Canal Boat Info 页仍写着' +
          '<strong>「season lasts from April or May through the end of October，Wed–Sun 10:00／12:00／14:00／16:00 发船」</strong>' +
          '的常规班次说明。' +
          '<strong>两种口径同时存在，未能确认 2026 年秋季是否真有船</strong>——' +
          '但考虑到河道本身是干的，物理上无法行船，请按「无船」做预案。' +
          '要确认可电 NPS <strong>301-739-4200</strong> 或 Georgetown Heritage <strong>202-480-9540</strong>。' +
          '（<strong>2026-09-15 核实</strong>）',
        ticket: '<strong>免费</strong>（C&amp;O Canal NHP 与 Georgetown Waterfront Park 均不收门票、不收入园费）。' +
          'Georgetown Visitor Center 亦免费。' +
          '（据 nps.gov/choh，<strong>2026-09-15 核实</strong>）',
        hours: 'Georgetown Waterfront Park <strong>24 小时开放</strong>。' +
          'C&amp;O Canal 纤道无固定闭园钟点，但 <strong>Georgetown 段 Mile 0.4–1 有施工绕行、' +
          'Level 1 北墙坍塌点周边封闭</strong>，绕行路线走相邻街道与巷子，多绕 0.3 英里以内。' +
          '<strong>Georgetown Visitor Center（1057 Thomas Jefferson Street NW）官方钟点：' +
          '周三至周日 9:00–16:00，周一与周二闭馆</strong>，状态为「Open for the Season」。' +
          '需要盖 Passport 章或拿绕行图请避开周一周二，或先电 301-739-4200。' +
          '（据 nps.gov/choh 的 Visitor Centers 与 Directions 页，<strong>2026-09-15 核实</strong>）',
        parking: '<strong>不建议开车，尤其是周末。</strong>' +
          '<strong>Georgetown 全境没有地铁站，于是所有人都开车来，周末与晚间的路边车位几乎不存在</strong>，' +
          '绕圈找位半小时是常态。街边咪表周一至周六收费（费率以现场标牌与 ParkMobile 为准，' +
          '<strong>2026 年具体价格未能从官方渠道核实</strong>）。' +
          '车库首选 Washington Harbour（3000 K St NW）与 Georgetown Park（3222 M St NW），日间约 $20–30/天量级；' +
          'Waterfront Center 车库（38.90285, -77.06342）离滨水公园最近。' +
          '<strong>更省事的做法是把车停在地铁站边（或干脆不开车），坐到 Foggy Bottom–GWU 或 Rosslyn 再走进来。</strong>',
        walk: '<strong>Georgetown 没有地铁站，这是本区第一号实际约束。</strong>' +
          'Metro <strong>Foggy Bottom–GWU 站（蓝/橙/银线）</strong>步行到滨水公园约 <strong>1.3 公里 / 16 分钟</strong>；' +
          '<strong>Rosslyn 站（蓝/橙/银线）</strong>走 Key Bridge 过河约 <strong>1.2 公里 / 15 分钟</strong>，' +
          '<strong>而且过桥时本身就是看 Georgetown 河岸天际线的免费观景点</strong>；' +
          'Dupont Circle 站（红线）到 M Street 约 1.6 公里 / 20 分钟，且是下坡去、上坡回。' +
          '<strong>公交：DC Circulator 已于 2024 年 12 月 31 日永久停运</strong>，' +
          '现由 Metrobus <strong>D80</strong>（Wisconsin Ave–Union Station，全天）、' +
          '<strong>D82</strong>（Wisconsin Ave–Foggy Bottom，仅平日高峰）与 <strong>A58</strong>（M Street 往 Rosslyn）接驳；' +
          '这些编号是 2025 年 6 月 29 日 Better Bus Network 改版后的新名，旧攻略里的 31／33／38B 已不存在。' +
          '滨水公园东端到 Lock 3 约 700 米 / 9 分钟'
      },
      notes: [
        '<strong>三脚架：滨水公园与纤道均可自由使用。</strong>NPS 2023 年起的全国摄影规则把三脚架、独脚架、手持灯具归为 handheld equipment，' +
          '只有进入封闭区、需要独占场地、或搭建布景才需要许可证',
        '<strong>请务必在出发当天早上再查一次 nps.gov/choh 的 Current Park Conditions 页</strong>——' +
          '水位、纤道封闭段与绕行路线都在那一页，且会随施工变动',
        '滨水公园的木质步道与河岸护栏在日落后没有照明死角，人流到 21:00 前都不少；' +
          '<strong>但 Whitehurst Freeway 高架下与运河纤道夜间光线很差</strong>，独自带器材不建议天黑后走纤道',
        '公园西端的 labyrinth 是浅色石材铺地，<strong>正午顶光下几乎没有明暗对比，接近不可拍</strong>；' +
          '要拍它必须等日落前 30 分钟的低角度侧光把石缝勾出来',
        'Percy Plaza 喷泉是季节性运行，<strong>10 月是否仍开放官方未公布</strong>，不要把它写进必拍清单',
        'Key Bridge 桥面人行道很窄且紧贴车流，<strong>桥上架三脚架会被 Arlington 一侧的警察劝离</strong>，桥上请手持'
      ],
      images: [
        { url: 'img/chesapeake-and-ohio-canal-panorama-cfbbb349.jpg',
          cap: 'Georgetown 段运河与纤道全景 · APK / CC BY-SA 4.0' },
        { url: 'img/chesapeake-and-ohio-canal-and-key-bridge-57b97175.jpg',
          cap: '运河尽头与 Key Bridge · APK / CC BY-SA 4.0' },
        { url: 'img/georgetown-waterfront-park-and-rosslyn-0177fb7e.jpg',
          cap: '滨水公园对望 Rosslyn 天际线 · APK / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'exorcist-steps',
      n: 2,
      name: '驱魔人阶梯与 Georgetown 老街区',
      en: 'The Exorcist Steps, Cady\'s Alley & Georgetown Rowhouses',
      /* 游览价值：阶梯本身只是影视取景地（单看约 1.5 分），但这一条目实际覆盖的是
         Georgetown 历史街区那条步行线——M Street 与 Wisconsin Avenue 的商业十字、
         N/O/P Street 的联邦风格排屋与原状电车轨道、Old Stone House、Georgetown University
         的 Healy Hall。作为「来 Georgetown 就该走一遍」的那条线，给 3.5。 */
      must: 3.5,
      score: 3.5,
      tldr: '75 级深沟阶梯全天几乎无直射光，阴郁本身就是主题；配 O/P 街的鹅卵石与有轨电车轨道能凑一条完整扫街线。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '24 小时可拍', c: 'free' },
        { t: '深沟无光', c: 'risk' },
        { t: '沿街是私宅', c: 'risk' }
      ],
      highlights: [
        '阶梯 <strong>1895 年</strong>由本地民主党人物 George Killeen 主持修筑，' +
          '与旁边的 <strong>Capital Traction Company Union Station（今 Georgetown Car Barn）</strong>同期完工。' +
          '选址是 20 度斜坡、<strong>从 Prospect Street 到 M Street 落差 60 英尺</strong>，' +
          '为了整平站场挖掉了八万多立方码土方，这道挡土墙与嵌在墙里的楼梯就是那次工程的副产品——' +
          '它本质上是采光井兼公共通行权，不是景观楼梯',
        '<strong>在《The Exorcist》之前它被本地人叫作「Hitchcock steps」</strong>。1972 年 William Friedkin 在此取景，' +
          'Karras 神父坠亡那场戏为保护替身在石阶上铺了泡沫垫，<strong>整段摔了两遍</strong>。' +
          '2015 年万圣节前夜，市长 Muriel Bowser 在 Friedkin 与原著／编剧 William Peter Blatty 到场的仪式上，' +
          '<strong>在阶梯底部揭幕纪念铭牌，正式列为 DC 地标与官方旅游景点</strong>。' +
          '整组建筑（车库、挡土墙、楼梯）已列入 National Register，编号 100004248',
        '常说是 75 级，<strong>但当地有个梗是每次数的结果都不一样</strong>。楼梯是 36th Street NW 的延续，' +
          '南北走向，被四层高的车库（东）与石挡土墙（西）夹成一条约 3–4 米宽的深沟',
        '<strong>O Street NW 与 P Street NW 在 33rd 到 36th 之间保留着全 DC 仅存的原状有轨电车轨道</strong>，' +
          '嵌在比利时块石（Belgian block）路面里，未被沥青覆盖。Capital Traction 的电车 <strong>1962 年 1 月 28 日</strong>停运，' +
          '这两条街是唯一没被铲掉的物证。潮湿或雨后轨道反光时最好拍',
        'N Street NW 是联邦风格排屋密度最高的一条：<strong>3307 N Street NW 是 John F. Kennedy 1957–1961 年的住所</strong>，' +
          '他从这栋房子的台阶上出发去就职；<strong>3014 N Street 的 Laird-Dunlop House 曾属于 Robert Todd Lincoln</strong>，' +
          '后来是《华盛顿邮报》的 Ben Bradlee 家。<strong>全部是有人居住的私宅</strong>'
      ],
      tour: [
        '<strong>这一站真正的内容不是那道楼梯，而是一条 2.5–3 公里的历史街区步行线。</strong>' +
          '合理顺序（自东向西、最后下坡收尾）：' +
          '<strong>M Street 与 Wisconsin Avenue 路口</strong>（Georgetown 的商业十字，连锁店与本地店混杂）→ ' +
          '<strong>Old Stone House（3051 M Street NW）</strong>→ 上坡到 <strong>N Street</strong> 看联邦风格排屋 → ' +
          '<strong>O Street 与 P Street 的比利时块石路面与原状电车轨道</strong>（33rd–36th 之间）→ ' +
          '<strong>Georgetown University 校园与 Healy Hall</strong> → 下到 <strong>Prospect Street</strong> 走到 ' +
          '<strong>驱魔人阶梯</strong>顶端、沿 75 级台阶下到 M Street → ' +
          '收尾进 <strong>Cady\'s Alley</strong>（M Street 南侧的设计家居后巷）。' +
          '<strong>全程 1.5–2 小时；只想看阶梯与 M Street：40 分钟。</strong>' +
          '<strong>注意这条线有一段 60 英尺（约四层楼）的爬坡</strong>，反方向走要一路上台阶，体力成本明显更高。',
        '<strong>Old Stone House 是这条线上唯一的室内项目，而且免费，很多人从门口走过完全没注意。</strong>' +
          '<strong>1765 年建成，是华盛顿特区现存最古老的、仍立在原始地基上的建筑</strong>——' +
          '英军 1814 年烧华盛顿时它已经 59 岁了。它能保存下来纯属误会：' +
          '<strong>当地长期以为华盛顿在这里住过（并非事实），于是没人敢拆</strong>，' +
          '1953 年联邦政府买下时它正在当汽车经销店。' +
          '<strong>目前因整修仅部分开放，只有一层的厨房展陈与书店可看，15–20 分钟足够</strong>；' +
          '后院花园是 M Street 上少有的免费歇脚处，日出到日落开放。' +
          '<strong>周六周日有免费 ranger 导览（每场 30 分钟）</strong>，对 18 世纪日常生活有兴趣值得排一场。',
        '<strong>Georgetown University 校园可以自由步行进入，值得绕进去二十分钟，但别指望参观室内。</strong>' +
          '核心是 <strong>Healy Hall</strong>（1877–1879 年建，建筑师 Paul J. Pelz 与 John L. Smithmeyer ' +
          '<strong>正是国会图书馆 Jefferson Building 的设计者</strong>，1987 年列为 National Historic Landmark）——' +
          '哥特复兴加罗马式的双塔立面，从 37th Street 的校门进去正对着它，是全 DC 最像欧洲大学的一处庭院。' +
          '<strong>但 Healy Hall 是行政与教学楼，不是博物馆</strong>：' +
          '楼内的 Riggs Library（全美现存不多的铸铁书库之一）与 Gaston Hall 只在有活动时开放，' +
          '<strong>没有面向游客的常规参观</strong>。' +
          '学校的 campus tour 是招生用的（约 2 小时，45 分钟宣讲加 75 分钟学生带队，需提前在官网登记），' +
          '<strong>普通游客不必报名，自己在中庭与 Dahlgren Quad 走走就够</strong>。' +
          '需要厕所可进 Healy Hall（Dahlgren Chapel 内没有公共厕所）。',
        '<strong>阶梯与街区这一段，最该注意的是「这里住着人」。</strong>' +
          '驱魔人阶梯本身是公共通行权、24 小时开放无人管理，' +
          '<strong>2015 年万圣节前夜市长 Muriel Bowser 在底部揭幕了纪念铭牌</strong>（要看铭牌得走到最下面）；' +
          '<strong>但 N Street、O Street、P Street 沿线全部是有人居住的私宅</strong>——' +
          '不要走上人家台阶、不要把镜头对着窗户、不要在同一户门前逗留。' +
          '<strong>Georgetown Car Barn（阶梯东侧那栋四层楼）现在是 Georgetown University 的办公与教室楼，不对公众开放</strong>，' +
          '只能看外墙。' +
          '<strong>10 月 31 日前后是阶梯全年人最多的时候</strong>（万圣节朝圣），想清静就赶清晨。' +
          '阶梯坡度接近 40 度、没有中间平台，<strong>雨天与落叶季石面非常滑</strong>，下行请扶栏。',
        '<strong>交通：Georgetown 没有地铁站，这条线的起终点选择直接决定要走多少路。</strong>' +
          '<strong>最省力的路径是从 Rosslyn 站走 Key Bridge 过河，到阶梯底部约 800 米 / 10 分钟</strong>，' +
          '正好是这条线的西端，走完从 M Street 东端离开；' +
          'Foggy Bottom–GWU 站到 M Street 东端约 <strong>1.3 公里 / 16 分钟</strong>。' +
          '<strong>DC Circulator 已于 2024 年 12 月 31 日永久停运</strong>，' +
          '现在沿 M Street 与 Wisconsin Avenue 的是 Metrobus <strong>D80</strong>（全天）、' +
          '<strong>D82</strong>（仅平日高峰）与 <strong>A58</strong>（往 Rosslyn）。' +
          '<strong>周末不要开车进来找路边车位</strong>，阶梯底部那个小停车场只有几个位子，' +
          '实际要停车请用 Washington Harbour（3000 K St NW）或 Georgetown Park（3222 M St NW）车库。',
        '<strong>餐饮与卫生间：这条线上最不缺的就是吃的，但两家最有名的甜点店时段差别很大。</strong>' +
          '<strong>Baked &amp; Wired（1052 Thomas Jefferson St NW）官方公布「8 am – 4 pm daily」，下午四点关门</strong>；' +
          '<strong>Georgetown Cupcake（3301 M St NW）周一至周六 10:00–21:00、周日 10:00–20:00</strong>，' +
          '开得晚但常年排长队。<strong>两家都想试就必须先去 Baked &amp; Wired。</strong>' +
          '正餐集中在 M Street 与 Wisconsin Avenue 沿线以及河边的 Washington Harbour。' +
          '<strong>公共厕所在这一区很紧张</strong>：可靠的是 Old Stone House（开放时段内）、' +
          'Georgetown Park 商场与 Healy Hall；街边店铺多数只给消费者用。' +
          '（餐饮时段据各店官网，<strong>2026-09-15 核实</strong>，请出行前复查）'
      ],
      photo: '建筑 <strong>4/5</strong>，人像 <strong>4/5</strong>，风光 <strong>1/5</strong>。' +
        '阶梯的透视与压迫感是 DC 少有的电影感场景，鹅卵石街区适合环境人像；' +
        '扣分因为阶梯几乎永远缺光、可站位极少，且是一条真正的通勤楼梯，不能久占。',
      shots: [
        {
          name: '阶梯底部（M Street 一侧停车场）向上仰拍',
          desc: '<strong>这是招牌构图，也是唯一能表达 60 英尺落差的角度。</strong>' +
            '沟是南北走向、南端向 M Street 敞口，所以<strong>推算</strong>只有太阳接近正南时光才可能顺着沟轴射进来：' +
            '<strong>9 月 25 日太阳正南时刻 13:00、高度角 50°，10 月 22 日 12:53、高度角 40°</strong>，' +
            '因此<strong>大致 12:30–13:30 会有一条窄光带扫到楼梯上半段，其余时间整条沟全天处于阴影</strong>。' +
            '<strong>此为几何推算，未经实地核实。</strong>' +
            '但反过来说——<strong>阴郁低光正是这个场景的正解</strong>，直射光会把气氛拍没。' +
            '推荐阴天全天、或日落后 20–40 分钟靠沟内路灯拍（9/25 约 19:20–19:40，10/22 约 18:40–19:00）。' +
            '<strong>16–24mm 贴着底部台阶正中低机位</strong>，让两侧墙面在画面上缘收成一点。' +
            '手持需 ISO 3200–6400；架三脚架 1–4 秒会更干净，但楼梯是通行道，架完立刻拍完立刻收。',
          park: [38.90285, -77.06342],
          view: [38.90552, -77.07016]
        },
        {
          name: '阶梯顶部（Prospect Street 与 36th Street 路口）俯拍',
          desc: '与上一个机位同一 OSM 实体、相隔 60 英尺垂直落差。<strong>俯视构图更适合放人</strong>：' +
            '让模特站在下方三分之一处仰头，24–35mm 从顶部铁栏杆外侧向下压，' +
            '<strong>台阶的重复节奏会把视线一路带到底部的亮口</strong>，形成隧道效果。' +
            '2015 年那块纪念铭牌在底部，想拍铭牌要下到最下面。' +
            '顶部是 Prospect Street 的人行道，白天有游客排队打卡，' +
            '<strong>要拍空镜请在日出后一小时内来（9/25 约 07:00–08:00，10/22 约 07:25–08:25）</strong>，' +
            '那个时间人最少，且沟内仍是均匀的散射光，正合用。',
          view: [38.90552, -77.07016]
        },
        {
          name: 'O Street / P Street 的鹅卵石与有轨电车轨道',
          desc: '<strong>O Street NW 在 33rd–34th 之间（38.90779, -77.06696）与 P Street NW 同段（38.90878, -77.06697）' +
            '在 OSM 上都标为 surface=sett 且带 railway=disused，是可核对的实体。</strong>' +
            '<strong>最佳时段是日出后 30–60 分钟与日落前 60 分钟的低角度侧光</strong>——' +
            '只有擦地光能把块石的圆顶与轨道的金属边缘同时勾出来，正午顶光下这条街完全是平的。' +
            '<strong>35mm 或 50mm 蹲低到膝盖高度沿街纵向拍</strong>，让两道轨道在画面里收敛消失；' +
            '85mm 拍单块石与轨道接缝的抽象。雨后或洒水车过后效果提升一个档次。' +
            '街两侧是密集的联邦风格排屋，秋天时街树转色，10 月下旬这条街是本区最好的秋色街景。',
          view: [38.90779, -77.06696]
        },
        {
          name: 'Cady\'s Alley 设计街区',
          desc: 'M Street 南侧的一条改造后巷，两侧是玻璃幕墙嵌进旧砖仓库的设计家居店。' +
            '<strong>巷子东西走向、宽度只有几米，全天大部分时间是散射光</strong>，' +
            '正好适合<strong>环境人像与橱窗反射的双重曝光式构图</strong>。' +
            '35–85mm，f/1.8 让背景的砖与玻璃虚成色块。' +
            '<strong>最佳是黄昏 18:00 之后店内灯亮、天光未尽的 20 分钟</strong>（10 月下旬约 17:50–18:15）。' +
            '巷内是私人商铺产权，架三脚架会被店员劝离，手持。',
          view: [38.90466, -77.06691]
        }
      ],
      access: {
        visit: '<strong>整条街区线 1.5–2 小时</strong>（约 2.5–3 公里，含 60 英尺爬坡）。' +
          '分配：M Street／Wisconsin Avenue 商业段与 Cady\'s Alley <strong>30 分钟</strong>、' +
          'Old Stone House <strong>15–20 分钟</strong>（免费，仅一层开放；赶上周末 ranger 导览另加 30 分钟）、' +
          'N/O/P Street 的排屋与电车轨道 <strong>25–30 分钟</strong>、' +
          'Georgetown University 校园与 Healy Hall 外观 <strong>20 分钟</strong>、' +
          '驱魔人阶梯上下一趟加找底部铭牌 <strong>15 分钟</strong>。' +
          '<strong>只看阶梯与 M Street：40 分钟。只看阶梯本身：10 分钟。</strong>',
        book: '<strong>全部不需预约</strong>（阶梯、街道、Old Stone House 与 Georgetown University 校园均可直接前往）。' +
          'Georgetown University 的 campus tour 是招生用的、需官网登记，普通游客不必报',
        ticket: '<strong>全部免费</strong>：阶梯、街道、Cady\'s Alley、Georgetown University 校园一律无门票；' +
          '<strong>Old Stone House 也免费、无需门票</strong>，周末的 ranger 导览同样免费。' +
          '（据 nps.gov/rocr 的 Old Stone House 页，<strong>2026-09-15 核实</strong>）',
        hours: '<strong>阶梯是公共通行权，24 小时开放无人管理</strong>；O/P Street 与 N Street 是普通市政道路，同样全天可达。' +
          '<strong>Old Stone House（3051 M Street NW）官方钟点：周日 11:00–19:00、周一 12:00–19:00、' +
          '周二与周三闭馆、周四与周五 12:00–19:00、周六 11:00–19:00；室外庭院每日日出至日落开放。</strong>' +
          'NPS 另注两条：<strong>「Old Stone House is partially closed for rehabilitation」（目前仅一层的书店与厨房展陈开放）</strong>，' +
          '以及<strong>「Hours may be reduced if staff is not available to open the building」——人手不足会临时缩短</strong>。' +
          '<strong>2026 年 12 月 25 日闭馆。</strong>' +
          'Cady\'s Alley 与 Georgetown Park 的店铺一般 11:00–19:00（各店自定，周日偏晚开偏早关）。' +
          '（<strong>2026-09-15 核实</strong>）',
        parking: '阶梯底部就是一个小型停车场（M Street 与 Canal Road 交口附近），车位极少；' +
          '实际建议停 Waterfront Center 车库（38.90285, -77.06342）、Washington Harbour（3000 K St NW）' +
          '或 Georgetown Park（3222 M St NW）。' +
          '<strong>周末与傍晚 Georgetown 的路边车位基本找不到</strong>，' +
          '而且 N/O/P Street 这些住宅街多为 Residential Permit Parking 时段限制路段（非居民通常限停 2 小时），' +
          '<strong>务必逐根看标杆</strong>。强烈建议用 Metro',
        walk: '<strong>Georgetown 没有地铁站。最近的地铁路径是 Rosslyn 站（蓝/橙/银线）过 Key Bridge，' +
          '到阶梯底部约 800 米 / 10 分钟</strong>，正好落在这条线的西端。' +
          'Foggy Bottom–GWU 站（蓝/橙/银线）到 M Street 东端约 <strong>1.3 公里 / 16 分钟</strong>；' +
          'Dupont Circle 站（红线）到 M Street 约 <strong>1.6 公里 / 20 分钟</strong>（去是下坡、回是上坡）。' +
          '<strong>公交：Metrobus D80（Wisconsin Ave–Union Station，全天）、D82（Foggy Bottom，仅平日高峰）、' +
          'A58（M Street 往 Rosslyn）；DC Circulator 已于 2024/12/31 永久停运，无替代班车。</strong>' +
          '从滨水公园东端走到阶梯底部约 <strong>900 米 / 12 分钟</strong>；' +
          '阶梯底部到 O Street 轨道段约 700 米 / 10 分钟，中间要爬上 Prospect Street 那 60 英尺'
      },
      notes: [
        '<strong>三脚架：阶梯与街道均属公共空间，法律上可用</strong>，但阶梯窄且是实际通行道、' +
          'Cady\'s Alley 属私人商铺产权，两处都建议手持或极短时间架设',
        '<strong>N Street、O Street、P Street 沿线全部是有人居住的私宅。</strong>不要走上台阶、不要把镜头对着窗户、' +
          '不要在同一户门前停留超过一两分钟。这是这条线唯一真正会惹麻烦的地方',
        '阶梯石面在雨天与落叶季<strong>非常滑</strong>，坡度接近 40 度且没有中间平台；' +
          '带器材上下请单手扶栏，不要边走边看取景器',
        '<strong>不要在阶梯上摆拍「坠落」姿势</strong>——除了危险，这里已是官方地标且常有本地人通行',
        '10 月 31 日前后是这里全年人最多的时候（万圣节朝圣），' +
          '<strong>十月下旬来又想要空镜，务必赶清晨</strong>',
        'Georgetown Car Barn 目前是 Georgetown University 的办公与教室楼，<strong>不对公众开放</strong>，只能拍外墙'
      ],
      images: [
        { url: 'img/exorcist-steps-50391769906-ca13a718.png',
          cap: '阶梯全貌与两侧夹壁 · Ben Schumin / CC BY-SA 2.0' },
        { url: 'img/looking-up-the-exorcist-steps-in-georgetown-panoramio-9189f7ba.jpg',
          cap: '自底部仰视 75 级台阶 · olekinderhook / CC BY 3.0' },
        { url: 'img/exorcist-steps-3-ebb3e8f9.jpg',
          cap: '阶梯与 Georgetown Car Barn 挡土墙 · APK / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'dumbarton-oaks',
      n: 3,
      name: 'Dumbarton Oaks 花园',
      en: 'Dumbarton Oaks Gardens',
      /* 游览价值：美国最重要的私家台地园之一，加 1944 年联合国蓝图会议的现场，
         内容分量足；但收费、只开下午四小时、周一闭园、须提前网购，
         而且要有一点园林或历史兴趣才觉得值。给 3.5，是本区第二高。 */
      must: 3.5,
      score: 4,
      tldr: 'Beatrix Farrand 的台地园；只开下午 14:00–18:00、周一闭园、10/8–10 停开、$15 须网购、禁三脚架。',
      tags: [
        { t: '$15/人', c: 'paid' },
        { t: '仅 Eventbrite 预购', c: 'risk' },
        { t: '禁三脚架', c: 'risk' },
        { t: '仅下午开放', c: 'risk' },
        { t: '哈佛运营·不受停摆影响', c: 'good' }
      ],
      highlights: [
        '<strong>先纠正一个常见的数字错误：正式花园是约 16 英亩，不是 27 英亩。</strong>' +
          'Bliss 夫妇 1920 年买下的是一处 53 英亩产业；1940 年他们把<strong>上部 16 英亩连同宅邸捐给 Harvard University</strong>，' +
          '成立拜占庭研究、前哥伦布研究与园林景观研究的研究所；' +
          '<strong>剩下的 27 英亩划给了 NPS，成为今天独立的 Dumbarton Oaks Park</strong>——那是一处自然式的溪谷林地，' +
          '免费、无人管、与这里不是一个地方。要拍台地园，买的是前者的票',
        '设计者 <strong>Beatrix Farrand</strong> 是美国景观设计师协会创始会员中唯一的女性。' +
          '她与 Mildred Bliss <strong>密切合作了近三十年</strong>（1921 年起），' +
          '<strong>每一级台地、每一张长椅、每一个石瓮与花境边缘都是两人逐项议定的</strong>。' +
          '结果是一座随山势跌落、由正式到野趣逐段过渡的园子：' +
          'Green Garden、Beech Terrace、Urn Terrace、Rose Garden、Fountain Terrace、Lovers\' Lane Pool、Pebble Garden 一路向下',
        '<strong>1944 年 8 月到 10 月的 Dumbarton Oaks Conference 就在这栋楼里开</strong>——' +
          '美、英、苏、中的代表在这里起草了后来成为《联合国宪章》骨架的方案。' +
          '也就是说，深秋午后这片草坪与台地，正是联合国蓝图定稿时窗外的景',
        '园内共有 <strong>12 座喷泉</strong>，原设计是活水常流、溢流后进雨水管网。' +
          '2017–2018 年园方把 Pebble Garden、Fountain Terrace、Lovers\' Lane、Ellipse 等几处改成循环系统，' +
          '并于 2019 年装上紫外线灭藻灯替代加氯，' +
          '<strong>年节水估计超过 2,800 万加仑</strong>。' +
          '<strong>关于「秋天喷泉开不开」：官方从未公开发布过逐月运行表，未能从官方渠道确认。</strong>' +
          '循环加 UV 的系统在防冻期之前没有停机理由，' +
          '<strong>10 月 31 日前的常规季应当运行，信心中偏高；但请把它当作加分项而不是前提</strong>',
        '秋色：园方自家通讯里写他们的菊花与落叶树冠「always at their best in November」，' +
          '<strong>与 DC 城区 11 月初的历史峰值一致</strong>。9 月底来基本全绿，10 月下旬能拍到明显转色但不是最盛'
      ],
      tour: [
        '<strong>先把票买掉，这是这一站唯一会让人白跑的环节。</strong>' +
          '<strong>门票 $15/人，只能在 Eventbrite 提前买；现场没有售票点、没有候补、没有 standby，' +
          '到了门口买不到票就是进不去。</strong>' +
          '2026 年季票已全部售罄。票是定时入场票，<strong>持票可在票面时间到 17:30 之间入园，18:00 闭园</strong>；' +
          '每户每日限 10 张、售出不退（仅园方自行闭园时例外）、<strong>出园后不可再次入场</strong>。' +
          '<strong>2026 年常规季（3/1–10/31）：周二至周日 14:00–18:00，周一与联邦假日闭园</strong>——' +
          '<strong>上午完全没有花园可逛，别把它排进早上。</strong>' +
          '<strong>另外 2026 年 10 月 8、9、10 日三天因内部活动闭园，当日不售票、季票也不认。</strong>' +
          '（<strong>2026-09-15 核实于 doaks.org/visit/plan 与 Eventbrite 售票页</strong>）',
        '<strong>花园与博物馆是两回事，票、时间、入口全都不一样，而且博物馆是免费的——这是最容易被漏掉的便宜。</strong>' +
          '<strong>Museum（拜占庭与前哥伦布艺术收藏）在 1703 32nd Street NW，周二至周日 11:30–17:30，' +
          '免费、不需票、不需预约</strong>；' +
          '<strong>Gardens 的入口在 31st 与 R Street NW 路口，14:00 才开，要 $15 的票。</strong>' +
          '于是最划算的走法是：<strong>先 11:30 进免费的博物馆看藏品与 Music Room，' +
          '再 14:00 从另一个入口进花园</strong>，两者之间顺便在 Museum Shop（周二至周日 13:00–17:00）转一圈。' +
          '<strong>Rare Book Library 仅周六周日 11:30–17:30 对公众开放</strong>，也免费。' +
          '只想省钱、对园林没特别兴趣的人，<strong>只逛免费博物馆、跳过 $15 的花园，是完全合理的选择</strong>。',
        '<strong>花园的正确走法是「顺着山势一路往下」，因为它本来就是按这个顺序设计的。</strong>' +
          '从入口进去先是 <strong>North Vista</strong>（一条向北逐级收窄的草坪甬道，两侧砖墙把远处视线压成一条），' +
          '然后 <strong>Green Garden → Beech Terrace → Urn Terrace → Rose Garden → Fountain Terrace → ' +
          'Lovers\' Lane Pool → Pebble Garden</strong>，' +
          '<strong>整体是从极正式逐段过渡到野趣林地</strong>，越往下越松、树冠越密。' +
          '<strong>非要挑三处必看：Pebble Garden</strong>（整片彩色卵石拼成 Bliss 家族纹章、上面覆一层浅水膜，' +
          '必须从上层台地边缘俯看才成立）、<strong>Fountain Terrace</strong>（对称双水池加铁艺花架）、' +
          '以及 <strong>Lovers\' Lane Pool</strong>（仿意大利露天剧场的椭圆水池，池后是 1928–29 年设计的十五根带瓮列柱）。' +
          '<strong>时间紧就走到 Fountain Terrace 为止，下层林地可以跳过</strong>——' +
          '内容相对薄，但往返要多花 20 分钟爬坡。',
        '<strong>知道两件背景，这座园子的信息量会翻倍。</strong>' +
          '一是<strong>设计者 Beatrix Farrand 是美国景观设计师协会创始会员中唯一的女性</strong>，' +
          '她与业主 Mildred Bliss 合作了近三十年，' +
          '<strong>每一级台地、每一张长椅、每一个石瓮与花境边缘都是两人逐项议定的</strong>；' +
          '二是 <strong>1944 年 8 月至 10 月的 Dumbarton Oaks Conference 就在这栋宅子里开</strong>，' +
          '美、英、苏、中的代表在此起草了后来成为《联合国宪章》骨架的方案——' +
          '<strong>园里这片草坪与台地，正是联合国蓝图定稿时窗外的景</strong>。' +
          '另外<strong>常见的「27 英亩花园」说法是错的</strong>：正式花园约 16 英亩，' +
          '1940 年连同宅邸捐给 Harvard University；' +
          '<strong>剩下的 27 英亩划给了 NPS，成为今天独立、免费、无人管的 Dumbarton Oaks Park 溪谷林地——那是另一个地方。</strong>',
        '<strong>园内规则比一般公园严，几条容易犯的先记住。</strong>' +
          '<strong>禁止饮食、禁止携带敞口容器</strong>，园内没有餐厅也没有咖啡；' +
          '<strong>禁止触摸、攀爬或坐在喷泉、雕塑与园墙上</strong>，禁止踩踏花境、摘花、爬树；' +
          '<strong>三脚架、独脚架、自拍杆、灯具一律禁止</strong>（官方 Gardens Rules 明文，不是现场酌情），' +
          '官方摄影政策只欢迎「vacation style photography」，' +
          '<strong>一切商业与正式拍摄（含婚纱、订婚照）不允许</strong>。' +
          '园区近年野生动物增多，<strong>包括无毒无攻击性的黑鼠蛇（black rat snake）</strong>，遇到别惊动即可。' +
          '<strong>由 Harvard University 的 Trustees 运营，联邦停摆完全不影响开放</strong>，' +
          '真正会临时关门的是恶劣天气与内部活动日。',
        '<strong>交通与体力：这里在 Georgetown 的最高处，而 Georgetown 没有地铁站，所以不管怎么来都要爬坡。</strong>' +
          '<strong>官方给的最近地铁是 Dupont Circle 站（红线）与 Foggy Bottom–GWU 站（蓝/橙/银线）</strong>，' +
          '两者步行都在 1.9–2.2 公里 / 25 分钟量级且全程上坡；' +
          '<strong>更省力的是换 Metrobus：D80 在 Wisconsin Avenue 与 R Street 设站（离花园入口最近），' +
          'C91／D94／D96 在 Q Street 与 31st Street 设站，下车后步行 300–600 米。</strong>' +
          '从 M Street 商业区直接走上来是持续爬坡 <strong>1.1 公里 / 15–18 分钟</strong>。' +
          '<strong>园内本身是台地，从入口到最下层落差可观、多处台阶，婴儿车与轮椅很难通行</strong>，' +
          '砖铺与碎石路面居多，穿平底防滑鞋。<strong>厕所在入口附近，园内深处没有。</strong>' +
          '卫生间与休息之外，<strong>吃饭只能出园回 Wisconsin Avenue 或 M Street</strong>，' +
          '而那时已经 18:00、正好接上晚饭。'
      ],
      photo: '建筑 <strong>4/5</strong>，风光 <strong>4/5</strong>，人像 <strong>4.5/5</strong>。' +
        '台地、砖墙、铁门、水池构成一层层天然取景框，是全 DC 最适合环境人像的付费场地；' +
        '扣分完全来自规则——禁三脚架、只开下午四小时、且禁止一切专业与商业拍摄。',
      shots: [
        {
          name: 'North Vista 与主宅北立面',
          desc: '进门后第一个正式空间，一条向北逐级收窄的草坪甬道，两侧砖墙与限石柱把远处视线压成一条。' +
            '<strong>下午开园即到（14:00）时太阳在西南偏南，砖墙受侧光、草坪受顶光，反差偏大</strong>；' +
            '<strong>真正好的是闭园前最后一小时</strong>——' +
            '<strong>10 月下旬 17:00–18:00 正好是日落前 80 分钟到 20 分钟，整条甬道被极低角度的暖光贯穿</strong>' +
            '（10/22 日落 18:21）。' +
            '而 <strong>9 月底同样的 17:00–18:00 距日落还有一到两小时，光还是硬的</strong>——' +
            '这是「晚十月明显优于晚九月」最直接的一处体现。' +
            '24–35mm 站甬道正中轴线拍透视收敛；85mm 压缩台阶层次。禁三脚架，手持即可（光够）。',
          park: [38.91406, -77.06358],
          view: [38.91436, -77.06287]
        },
        {
          name: 'Fountain Terrace 与 Pebble Garden',
          desc: '两处是园内最强的图案题材：Fountain Terrace 是对称双水池加铁艺花架，' +
            'Pebble Garden 是整片彩色卵石拼成的 Bliss 家族纹章图案，' +
            '<strong>上面覆着一层极浅的水膜——它靠的正是 2017 年改造后的循环系统</strong>。' +
            '<strong>Pebble Garden 必须俯拍才成立</strong>，从上层台地边缘用 35–50mm 向下压，' +
            '水膜会把天光反成一层高光，需要 <strong>CPL 偏振镜按需减反</strong>（留一点反光比全消掉好看）。' +
            '<strong>时段选 16:00–17:30 的高侧光</strong>，此时卵石有立体感而水面还没进全阴影。' +
            '<strong>若当日喷泉未运行，Pebble Garden 会变成一片干燥的灰色卵石，这个机位直接放弃。</strong>',
          view: [38.91406, -77.06358]
        },
        {
          name: 'Lovers\' Lane Pool 与下层野趣段',
          desc: '<strong>无独立 OSM 实体，地图无针脚</strong>（位于花园东南角、Fountain Terrace 下方）。' +
            '一座仿意大利露天剧场式的椭圆水池，<strong>池后是 Farrand 1928–29 年设计的十五根带瓮列柱</strong>，' +
            '半圆形阶梯座席贴着树林。这是全园最暗的一处，树冠遮蔽严重，' +
            '<strong>阴天或 17:00 之后的散射光反而最适合</strong>，直射光会打出杂乱的斑驳。' +
            '35mm 拍列柱与水面的对称；<strong>如果水池在运行，1/15 秒手持配机身防抖能拍出轻微的水面拉丝</strong>' +
            '（不能用三脚架，只能靠稳）。ISO 800–3200 备用。' +
            '往下走就进入非正式的林地段，10 月下旬这里落叶最厚。',
          park: [38.91406, -77.06358]
        }
      ],
      access: {
        visit: '<strong>花园 1.5–2 小时</strong>（园内约 16 英亩、台地落差大，走一圈实际比看地图想象的久）。' +
          '分配：North Vista 与主宅北立面 15 分钟、' +
          'Green Garden 至 Rose Garden 一段台地 25–30 分钟、' +
          'Fountain Terrace 与 Pebble Garden 20–25 分钟、' +
          'Lovers\' Lane Pool 与下层野趣林地 20–30 分钟。' +
          '<strong>只看到 Fountain Terrace 为止：50–60 分钟</strong>，这是时间紧时的正确取舍。' +
          '<strong>加上免费的 Museum，整站留 3–3.5 小时</strong>' +
          '（11:30 进博物馆 1–1.5 小时 → Museum Shop → 14:00 进花园 1.5–2 小时 → 18:00 闭园）。' +
          '<strong>注意开放时段本身只有四小时（14:00–18:00），花园部分的时间上限是硬的。</strong>',
        book: '<strong>花园必须提前在 Eventbrite 购定时票；现场没有售票点、没有候补、没有 standby，到门口买不到票。</strong>' +
          '官方原文：「We do not offer a waitlist or standby tickets. Tickets are not sold on site.」' +
          '票为定时入场，<strong>持票可在票面时间到 17:30 之间入园</strong>；' +
          '<strong>每户每日限 10 张</strong>；售出不退（仅当园方自行闭园时例外），' +
          '买错日期只能在原日期之前通过 Eventbrite 账号自行改期，否则作废；' +
          '<strong>出园后不可再次入场（Reentry is not permitted）</strong>。' +
          '<strong>2026 年季票已全部售罄。</strong>' +
          '<strong>Museum 与 Rare Book Library 则完全不需要票、不需要预约</strong>' +
          '（官方原文：「Admission to the Museum and the Rare Book Library is free and unticketed.」）。' +
          '（<strong>2026-09-15 核实</strong>）',
        ticket: '<strong>花园常规季（3/1–10/31）$15/人，2 岁及以下免费</strong>，' +
          '无成人／老年／学生分档（学生优惠只出现在已售罄的家庭季票里）。' +
          '<strong>Museum、Rare Book Library：免费且不售票。</strong>' +
          '冬季（11/1–12/31）花园<strong>免票，但仍需提前在 Eventbrite 预约</strong>。' +
          '已售罄的 2026 年季票原价供参考：个人 $75、双人 $95、家庭 $110（含 2 名成人与最多 3 名 2–18 岁儿童或持证学生）。' +
          '（据 doaks.org/visit/plan，<strong>2026-09-15 核实</strong>）',
        hours: '<strong>花园常规季 3 月 1 日–10 月 31 日：周二至周日 14:00–18:00，17:30 停止入场；周一及联邦假日闭园。</strong>' +
          '官方原文：「Open 2:00–6:00 p.m. (last public entry will be permitted at 5:30 p.m.), Tuesday–Sunday, ' +
          'except for federal holidays.」' +
          '<strong>博物馆是另一套钟点：周二至周日 11:30–17:30，同样周一与联邦假日闭馆；' +
          'Rare Book Library 仅周六周日 11:30–17:30；Museum Shop 周二至周日 13:00–17:00。</strong>' +
          '<strong>2026 年花园额外闭园日：10 月 8、9、10 日</strong>（内部活动，当日不售票且季票不认）；' +
          '同年另有 4/11（Family Day，须另行登记）、4/23–25、5/7–9。' +
          '<strong>2026 年全馆闭门的节假日：6/19、7/4、11/1、11/11、11/26、12/25</strong>。' +
          '<strong>10 月 12 日的 Columbus Day / Indigenous Peoples\' Day 是周一，本就闭园，不额外冲突。</strong>' +
          '冬季 11/1–12/31：花园 14:00–17:00、16:30 停止入场；' +
          '<strong>自 2027 年起 1 月与 2 月整月闭园</strong>。' +
          '园方另保留恶劣天气下临时闭园的权利。' +
          '（据 doaks.org/visit/plan，<strong>2026-09-15 核实</strong>）',
        parking: '<strong>无自有停车场</strong>（官方原文：「Dumbarton Oaks does not have parking facilities for visitors.」）。' +
          '周边 R Street、32nd Street、31st Street 是居民区路边停车，' +
          '<strong>两小时限停、先到先得</strong>；' +
          '官方特别提醒<strong>周日没有时限，但平日与周六特区开罚超时非常勤快</strong>，' +
          '<strong>看清每一根标杆</strong>。' +
          '开车来建议停 Georgetown 商业区车库（Washington Harbour、Georgetown Park）后步行上坡',
        walk: '<strong>花园入口与博物馆入口不是同一个，别走错：花园入口在 31st 与 R Street NW 路口' +
          '（售票页地址写作 3101 R Street NW），博物馆入口在 1703 32nd Street NW。</strong>' +
          '从 M Street 商业区走上来是持续爬坡约 <strong>1.1 公里 / 15–18 分钟</strong>。' +
          '<strong>Georgetown 没有地铁站</strong>；官方给的最近两站是 <strong>Dupont Circle（红线）</strong>' +
          '与 <strong>Foggy Bottom–GWU（蓝/橙/银线）</strong>，步行均约 <strong>1.9–2.2 公里 / 25 分钟且全程上坡</strong>。' +
          '<strong>更省力的是到站后换 Metrobus：D80 在 Wisconsin Avenue 与 R Street 设站，' +
          'C91／D94／D96 在 Q Street 与 31st Street 设站</strong>（自 Dupont Circle 可乘 C91／D94／D96，' +
          '自 Foggy Bottom–GWU 可乘 D80／D94／D96），下车后步行 300–600 米。' +
          '最近的 Capital Bikeshare 站在 Wisconsin Avenue 与 34th Street，距博物馆入口两个街区；' +
          '园区两个入口都有自行车架'
      },
      notes: [
        '<strong>三脚架、独脚架、自拍杆、灯具及其他大体积摄影器材一律禁止</strong>，这是官方 Gardens Rules 的明文条款，' +
          '不是现场酌情。<strong>同时禁止一切商业与专业摄影摄像</strong>（含订婚照、婚纱、活动拍摄）',
        '园方要求把花园当作「户外博物馆」：<strong>禁止触摸、攀爬或坐在喷泉、雕塑与园墙上</strong>，' +
          '禁止踩踏花境、摘花、爬树。想拍低机位请蹲在铺装路面上，不要跨进花床',
        '<strong>园内禁止饮食、禁止携带敞口容器</strong>，只能在长椅与座椅上坐。写生可以，但仅限铅笔或炭笔、画板不超过 12"×18"',
        '园区近年野生动物增多，<strong>包括无毒的黑鼠蛇（black rat snake）</strong>。园方明确说它们不具攻击性，遇到别惊动即可',
        '<strong>下午开园意味着这里的晨雾与早光永远拍不到</strong>。接受这一点，' +
          '合理的安排是「上午去别处或看免费的博物馆、14:00 进园、18:00 出园直接接日落」',
        '<strong>由 Harvard University 的 Trustees 运营，联邦停摆完全不影响开放</strong>；' +
          '真正会临时关门的是恶劣天气（园方保留在危险天气下闭园的权利）与内部活动日'
      ],
      images: [
        { url: 'img/dumbarton-oaks-in-september-21676345916-67fce000.jpg',
          cap: '九月的台地花园 · DC Gardens / CC BY 2.0' },
        { url: 'img/dumbarton-oaks-in-september-21676351366-92c70d31.jpg',
          cap: '花境与砖墙层次 · DC Gardens / CC BY 2.0' },
        { url: 'img/dumbarton-oaks-north-face-df6bbbf3.jpg',
          cap: '主宅北立面与 North Vista · AgnosticPreachersKid / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'national-cathedral',
      n: 4,
      name: '华盛顿国家座堂',
      en: 'Washington National Cathedral',
      /* 游览价值：世界第六大、全美第二大主教座堂，83 年工期的真正中世纪石砌工法，
         加嵌着月岩的 Space Window——这是本区唯一进得了主流必去清单的点位，给 4。
         没给更高是因为它离地铁远、要门票、周日不开放参观，且北立面被脚手架包住。 */
      must: 4,
      score: 4.5,
      tldr: '世界第六大主教座堂，本区唯一的主流必去项；自助票约 $17 但周日不开放参观（礼拜免费可进），开放钟点逐日变动、17:00 准时清场。',
      tags: [
        { t: '自助票约 $17', c: 'paid' },
        { t: '周日基本不开放参观', c: 'risk' },
        { t: '北立面脚手架', c: 'risk' },
        { t: '私立·不受停摆影响', c: 'good' }
      ],
      highlights: [
        '正式名称 Cathedral Church of Saint Peter and Saint Paul，<strong>世界第六大、全美第二大主教座堂</strong>。' +
          '1907 年 Theodore Roosevelt 参加奠基，<strong>1990 年才安上最后一枚尖顶饰石，前后 83 年</strong>，' +
          '全程用中世纪工法——承重石砌、飞扶壁、无钢结构。' +
          '中央的 Gloria in Excelsis Tower 高 301 英尺，<strong>塔顶海拔 676 英尺，是全 DC 地理最高点</strong>',
        '<strong>Space Window（正式名 Scientists and Technicians Window）：全馆最著名的彩窗。</strong>' +
          '设计者 Rodney Winfield 以 NASA 照片为蓝本画了一片星野，虚线暗示 Apollo 11 的飞行轨迹。' +
          '<strong>画面中央那个大红圆里嵌着一片真的月岩</strong>——' +
          '取自 Lunar Sample 10057 中心切片、重 <strong>7.18 克</strong>、采自 Mare Tranquillitatis，' +
          '1974 年 7 月 21 日（登月五周年）由 Armstrong、Aldrin、Collins 三人亲手送来揭幕。' +
          'Collins 本人是座堂旁 St. Albans School 的校友。<strong>窗旁的一枚拱顶浮雕刻的是宇航员的靴印</strong>',
        '<strong>Darth Vader 怪兽雕（grotesque）</strong>：1980 年代西北塔施工期间办过一次儿童设计竞赛，' +
          '黑武士是获奖作品之一。它<strong>位于西北塔的北面、某个山花中央尖饰的下方、从正面看略偏左</strong>，' +
          '而且是<strong>水平向外探头而非向下俯视</strong>，所以侧视角比正视角好找。' +
          '<strong>坏消息是它永远在阴面</strong>——北面全年得不到直射光，' +
          '本地导游的说法是「on the dark side」，这个双关是字面意义上的',
        '<strong>2011 年 8 月 23 日 M5.8 弗吉尼亚地震</strong>震落多枚尖饰石、扭歪或震塌数座小尖塔、' +
          '有落石在金属屋面上砸出一个洞、后殿飞扶壁开裂，' +
          '<strong>损失约 $3,800 万而座堂没有地震险</strong>。' +
          '第一期 $1,000 万的内部拱顶石作已于 2015 年 2 月完成；' +
          '2022 年 9 月启动的 $1.5 亿募款计划到 2025 年初结束时募到 <strong>$1.85 亿</strong>，' +
          '<strong>所有地震修复资金已全部到位，目标 2030 年前全部完工</strong>',
        '<strong>当前脚手架状况（本条目最重要的核实项）：</strong>' +
          '<strong>中殿北立面已被一整套自立式脚手架包住</strong>，覆盖北侧的七至八道飞扶壁及其小尖塔与山花，' +
          '<strong>作业平台每 6 英尺 6 英寸一层、总高 30 至 130 英尺</strong>，' +
          '因为不能在历史石材上打锚，整套结构是落在下层坡屋面的铝梁与橡胶垫上自立的；' +
          '北立面两处入口上方还搭了防坠护棚。' +
          '同时<strong>中央塔的修复已经开工</strong>——座堂 2026 年 6 月 11 日的公告说 ' +
          'Garth 中庭与 All Souls Memorial Garden 因中央塔工程封闭，' +
          '<strong>「We do not expect the Garth to be re-opened before late fall 2026」</strong>。' +
          '<strong>西立面双塔与南立面目前没有搭架的报道，但中央塔本身是否已被围裹、' +
          '以及北草坪看西北塔的视线是否被中殿脚手架切到，均未能从官方渠道确认</strong>'
      ],
      tour: [
        '<strong>去之前必须查当天的钟点，这一站没有固定开放时间——而且周日通常根本不开放参观。</strong>' +
          '官方原文：「Our sightseeing hours vary day-to-day to accommodate the wide range of activities and ' +
          'ministries offered at the Cathedral. Your ticket is valid for the hours posted that day.」' +
          '实测 2026 年 9 月中那一周的官方日历：<strong>周一 10:00–17:00、周二 11:00–17:00、周三 10:00–16:00、' +
          '周四至周六 10:00–17:00，而周日整天标注「Self-Guided Sightseeing not available this day」</strong>。' +
          '<strong>也就是说周日进不去参观，周三这类有晚间活动的日子还会提前一小时关门。</strong>' +
          '出行前逐日查 cathedral.org 的 Calendar 页，别按「每天 10–17 点」想当然。' +
          '（<strong>2026-09-15 核实</strong>）',
        '<strong>如果只能周日来，不要放弃——改去做礼拜，免费而且照样进得了中殿。</strong>' +
          '官方立场是「there is never a charge for worship services or private prayer」，' +
          '<strong>一切礼拜与私人祈祷永远免费、无需门票</strong>（少数节庆大礼拜因容量需领 pass）。' +
          '周日的固定场次为 <strong>8:00 Early Sunday Eucharist（St. Mary\'s Chapel）、' +
          '11:15–12:45 Principal Sunday Eucharist（中殿）、16:00–17:00 Sunday Choral Evensong（Great Choir）</strong>；' +
          '平日还有 12:00 Noon Eucharist 与 <strong>17:00–17:45 的 Weekday Choral Evensong</strong>，' +
          '周六 12:30 另有一场免费的 <strong>Carillon Recital（在室外场地听）</strong>。' +
          '<strong>唱诗班的 Evensong 是这座建筑最好的用法之一：声学是它被造出来的理由。</strong>' +
          '但请注意<strong>礼拜进行中禁止拍照摄像，也不能四处走动参观</strong>——这是做礼拜，不是参观。',
        '<strong>进去以后按「主层一条线、地下层一条线」走，45–75 分钟能把精华看完。</strong>' +
          '主层从西端进、沿中殿往东：' +
          '<strong>West Rose Window</strong> → 沿途南侧高侧窗 → ' +
          '<strong>Space Window（正式名 Scientists and Technicians Window，在中殿南侧中层高窗）</strong> → ' +
          '<strong>Canterbury Pulpit</strong> → 东端的 High Altar 与 Great Choir。' +
          '<strong>Space Window 是这里的头号看点，也最容易看漏：它在高处、窗不大，' +
          '画面中央那个大红圆里嵌着一片真的月岩</strong>——' +
          '取自 Lunar Sample 10057、重 7.18 克、采自 Mare Tranquillitatis，' +
          '<strong>1974 年 7 月 21 日由 Armstrong、Aldrin、Collins 三人亲手送来揭幕</strong>。' +
          '肉眼只能看到一个小红点，<strong>想看清得带望远镜或长焦</strong>。' +
          '然后下到地下层（crypt）看几座小礼拜堂与展览，那里也是 LEGO 座堂模型的所在，带孩子的必去。',
        '<strong>塔楼是需要单独决策的部分：自助票里的观景廊「不保证开放」，想上塔得另买导览。</strong>' +
          '自助票包含 <strong>Tower Observation Gallery「when available」——逐日不定、不保证</strong>，' +
          '中央塔施工期间尤其不稳定。' +
          '<strong>塔顶所在的 Gloria in Excelsis Tower 高 301 英尺、塔顶海拔 676 英尺，是全 DC 地理最高点</strong>，' +
          '视野确实值得，但<strong>如果登塔观景是来这一站的主要目的，请在买票当天先电 (202) 537-6200 确认</strong>。' +
          '想确定能登高只能买导览类：<strong>Bell Tower Climb（爬 333 级到中央塔鸣钟室，全程 70–90 分钟，有身高与年龄限制）、' +
          'Angels &amp; Monsters Tower Climb、Combination Tower Climb、Behind the Scenes Tour</strong>，' +
          '这几种<strong>名额少、按讲解员排班开放、必须提前预约</strong>。' +
          '<strong>只想省钱又想听讲解的，选 Guided Spotlights Tour（每天多场、1 小时，结束后还能继续自助参观）性价比最高。</strong>',
        '<strong>户外部分是免费的，而且目前比室内更完整——南侧没有脚手架，北侧全被包住。</strong>' +
          '<strong>Bishop\'s Garden（座堂南侧的围墙花园）开放且免费</strong>，' +
          '是 Garth 中庭封闭期间唯一还能进的座堂花园，黄杨、石栏与飞扶壁叠在一起，' +
          '<strong>15–20 分钟，值得走</strong>。' +
          '<strong>Garth 中庭与 All Souls Memorial Garden 因中央塔修复封闭，官方称「不早于 2026 年晚秋」重开。</strong>' +
          '北侧草坪可以抬头找那尊<strong>1980 年代儿童设计竞赛获奖作品 Darth Vader 怪兽雕</strong>' +
          '（在西北塔北面、山花中央尖饰下方、水平向外探头），' +
          '<strong>但它极小极高、又永远在阴面，肉眼基本只是一个凸起</strong>——' +
          '当成彩蛋找，找不到别较劲。' +
          '<strong>中殿北立面已被 30 至 130 英尺高的自立式脚手架整套包住</strong>，那一侧不必安排时间。',
        '<strong>交通、餐饮与实际约束：这里同样没有邻近地铁站，而且 17:00 准时清场。</strong>' +
          '官方现在写的最近地铁是<strong>红线 Tenleytown–AU 与 Woodley Park–Zoo/Adams Morgan，两站都要走 1.5 公里以上且是上坡</strong>；' +
          '<strong>实际最省力的是 Metrobus D80（Wisconsin Ave–Union Station，全天运行），' +
          '在 Wisconsin Avenue 与 Woodley Road／Cathedral Avenue 下车步行约 2 分钟</strong>' +
          '（D82 只在平日高峰跑，别指望）。' +
          '<strong>场地内有地下车库，06:00–23:00，限高 7 英尺 6 英寸，周日礼拜时段免费。</strong>' +
          '<strong>包规定要注意：手提包与背包不得超过 11"×17"×6"，大件行李与登机箱一律不许带，' +
          '现场没有寄存也没有存衣处</strong>；婴儿车可以推进去。' +
          '吃饭在座堂旁 South Road 上的 <strong>Open City at the National Cathedral</strong>（咖啡与简餐），' +
          '礼品店在主层、随参观时段开放。' +
          '有免费 Wi-Fi（PECF Guest）与 Bloomberg Connects 数字导览（支持 40 多种语言），<strong>建议到场前先下载</strong>。' +
          '<strong>17:00 准时关门（closes promptly at 5 pm），室内看不到暮光，想看点灯后的立面只能在场地上从外面看。</strong>'
      ],
      photo: '建筑 <strong>5/5</strong>，人像 <strong>3/5</strong>，风光 <strong>2.5/5</strong>。' +
        '外部有明确的日落正面光、内部有全 DC 最好的彩窗光柱，两条线都能独立成篇；' +
        '扣分是北立面被脚手架废掉、Garth 中庭封闭、且 17:00 准时清场导致内部拍不到暮光。',
      shots: [
        {
          name: 'Wisconsin Avenue 对街，西立面双塔正面',
          desc: '<strong>座堂是标准东西朝向，双塔与 West Rose Window 组成的西立面正对 Wisconsin Avenue。' +
            '这意味着它在下午到日落全程被正面照亮，是本条目最可靠的外景。</strong>' +
            '<strong>9 月 25 日日落方位 270°（正西），西立面被完全正打，几乎没有立体感但色温最暖；' +
            '10 月 22 日日落方位 257°（西偏南 23°），光从左前方来，立面有了明暗过渡，塔身层次更好——' +
            '就外立面而言 10 月下旬优于 9 月底。</strong>' +
            '<strong>时段：日落前 60 分钟到日落（9/25 是 18:00–19:02，10/22 是 17:20–18:21）。</strong>' +
            '注意<strong>座堂内部 17:00 准时关门，但外部场地此时仍可停留</strong>，所以外景要排在参观之后。' +
            '<strong>24mm 竖构图</strong>能把双塔完整收下；' +
            '<strong>移轴或后期校正是必需的</strong>，仰角带来的汇聚线在哥特立面上特别刺眼。' +
            '70–200mm 单拍西北塔顶的尖饰与怪兽雕群。',
          park: [38.92918, -77.07322],
          view: [38.93031, -77.07274]
        },
        {
          name: 'Bishop\'s Garden 南侧，飞扶壁与花园前景',
          desc: '<strong>Garth 中庭封闭期间，Bishop\'s Garden 是唯一还开放的座堂花园</strong>，' +
            '也是唯一能用植物做前景仰拍主体的位置。' +
            '<strong>南立面全天受光</strong>：秋季太阳始终偏南，' +
            '<strong>大致 10:00–16:00 南侧飞扶壁与扶壁尖塔都是正面或高侧光</strong>，' +
            '其中 <strong>15:00–16:30 的低侧光最能勾出扶壁的立体骨架</strong>。' +
            '<strong>而且这一侧目前没有脚手架</strong>，是拍「完整哥特外壳」唯一干净的角度。' +
            '35mm 用花园的黄杨与石栏做前景框；100mm 单独压缩连排飞扶壁的重复节奏。' +
            '这里也是全座堂最好的人像位——石墙加植物加柔和反射光。',
          view: [38.92975, -77.07085]
        },
        {
          name: '中殿内部：Space Window 与南侧高侧窗光柱',
          desc: '<strong>Space Window 位于中殿南侧的中层高侧窗（clerestory），' +
            '这决定了它必须在太阳偏南时拍——也就是正午前后。</strong>' +
            '<strong>9/25 太阳正南时刻 13:00、高度角 50°；10/22 是 12:53、高度角 40°。' +
            '实际可用窗口大致 11:30–14:30，其中 12:30–14:00 最强。</strong>' +
            '此时阳光直接穿过南侧高窗，<strong>在北侧列柱与地面上投出成片的彩色光斑</strong>，' +
            '这是这座堂最值得拍的内景现象，而不是彩窗本身。' +
            '<strong>10 月下旬太阳更低，光柱在柱子上的位置更高、色块更长，效果优于 9 月底。</strong>' +
            '拍窗本身用 <strong>200–400mm</strong>（窗在高处且不大，月岩那一小片圆需要长焦才看得清）；' +
            '拍光柱落在柱身上用 <strong>24–70mm</strong>，站中央通道向东。' +
            '<strong>光比经常超过 10 EV，务必包围曝光 3–5 张。</strong>' +
            'ISO 1600–6400，f/2.8–f/4，机身防抖全开——<strong>实务上只能手持</strong>。',
          view: [38.93065, -77.07080]
        },
        {
          name: '北草坪找 Darth Vader 怪兽雕',
          desc: '<strong>无 OSM 实体，地图无针脚。</strong>标准做法是站到座堂北侧、靠近 Wisconsin Avenue 的草坪上，' +
            '抬头看西北塔北面中间那个山花。' +
            '<strong>它非常小、位置非常高，肉眼只是一个凸起，必须 400mm 以上或带望远镜才找得到。</strong>' +
            '<strong>北面全年无直射光，等不到「好光」——只能靠阴天的均匀天光或多云时的亮边</strong>，' +
            '拍出来必然是低反差的灰石头配亮天，<strong>后期要压天空、提暗部才能看清盔形轮廓</strong>。' +
            '建议 <strong>ISO 400–800、1/500 秒以上</strong>抵消长焦抖动。' +
            '<strong>重要不确定项：中殿北立面 30–130 英尺高的脚手架就在这条视线的前景方向，' +
            '它是否会遮挡或干扰北草坪看西北塔的角度，未能从官方渠道确认。' +
            '把这个机位当作「到现场再看」的可选项。</strong>',
          park: [38.92918, -77.07322]
        }
      ],
      access: {
        visit: '<strong>室内自助参观 1.5–2 小时</strong>。分配：中殿主层（West Rose Window、Space Window、' +
          'Canterbury Pulpit、High Altar 与 Great Choir）<strong>45–60 分钟</strong>、' +
          '地下层小礼拜堂与展览（含 LEGO 座堂模型）<strong>25–35 分钟</strong>、' +
          'Tower Observation Gallery 若当日开放 <strong>15–20 分钟</strong>。' +
          '<strong>只看中殿与 Space Window：40 分钟。</strong>' +
          '<strong>加上免费的户外部分（Bishop\'s Garden 15–20 分钟、北侧草坪找怪兽雕 10 分钟、' +
          '西立面外观 10 分钟），整站留 2.5–3 小时。</strong>' +
          '参加 Guided Spotlights Tour 的话讲解占 1 小时，之后可继续自助参观，总计仍按 2.5–3 小时算；' +
          '<strong>Bell Tower Climb 单独就要 70–90 分钟</strong>。' +
          '<strong>硬约束是 17:00 准时清场</strong>，倒推最晚 15:00 前必须进门',
        book: '自助参观<strong>建议提前在 cathedral.org 或 tix.cathedral.org 购票</strong>，' +
          '现场也可买但热门时段会满。' +
          '<strong>塔楼攀登（Bell Tower Climb、Angels &amp; Monsters、Combination）与 Behind the Scenes Tour 必须提前预约</strong>，' +
          '按讲解员排班开放，名额少。' +
          'Guided Spotlights Tour 每天多场，也建议提前订。' +
          '<strong>20 人以上团体必须提前申请。</strong>' +
          '官方另有一条对旅客有利的规定：' +
          '<strong>「If a conflict arises and we cannot be open for touring at the date/time you have purchased, ' +
          'we will contact you by email and your credit card will be refunded.」</strong>' +
          '——因葬礼、国家级礼拜、音乐会等临时占用而无法参观时会邮件通知并全额退款，但不会提前很久公布。' +
          '<strong>礼拜与私人祈祷不需要票也不需要预约。</strong>',
        ticket: '<strong>官方「Visit &amp; Tour」页现在只写「Prices Vary」，不再公布固定票价，' +
          '实际价格按日期在售票系统里显示——这一项请务必按自己的日期复查。</strong>' +
          '<strong>目前查到两套并存的官方口径：</strong>' +
          '<strong>① 2026 年的售票页与官方活动页给的是成人 $17、长者（65+）$14、学生（持证）$14、' +
          '5–12 岁儿童 $12、4 岁及以下免费</strong>；' +
          '<strong>② tix.cathedral.org 的场次说明横幅仍写着旧价「Tickets: $15; Youth (age 5-12) $10; ' +
          'Students/Seniors 20% discount Monday-Wednesday」</strong>。' +
          '<strong>两者同时挂在官方渠道上，未能确认哪一套适用于 2026 年秋季的具体某一天</strong>，' +
          '按 $17/人预算比较安全，确切数字请在 tickets.cathedral.org 选定日期后查看，或电 (202) 537-6200。' +
          '票含 Bloomberg Connects 数字导览与纸质手册、主层与地下层、各展览，' +
          '以及 <strong>Tower Observation Gallery「when available」——即观景廊是否开放逐日不定，不保证</strong>。' +
          '导览类（2025–2026 年公布价，同样请复查）：Guided Spotlights Tour <strong>$20 / 儿童 $15</strong>；' +
          'Behind the Scenes Tour <strong>$35</strong>；<strong>Bell Tower Climb $50</strong>。' +
          '<strong>参加礼拜与私人祈祷永远免费</strong>（官方原文：「there is never a charge for worship services or private prayer」）。' +
          '（<strong>2026-09-15 核实</strong>）',
        hours: '<strong>官方原文：「Our sightseeing hours vary day-to-day to accommodate the wide range of activities ' +
          'and ministries offered at the Cathedral. Your ticket is valid for the hours posted that day.」' +
          '——这里没有固定开放时间，必须逐日查 cathedral.org 的 Calendar 页。</strong>' +
          '<strong>2026 年 9 月 15–21 日那一周的官方日历实测值（可作典型参考）：' +
          '周一 10:00–17:00、周二 11:00–17:00、周三 10:00–16:00、周四 10:00–17:00、' +
          '周五 10:00–17:00、周六 10:00–17:00、周日不开放参观。</strong>' +
          '<strong>17:00 准时清场（closes promptly at 5 pm）</strong>；有晚间活动的日子会提前到 16:00 关门。' +
          '<strong>周日：官方 FAQ 写「Touring is not available during Sunday services and other services in the ' +
          'Cathedral nave」，而 9 月 20 日（周日）的日历页直接标注「Self-Guided Sightseeing not available this day」' +
          '——周日基本不开放自助参观，请按「周日进不去」规划。</strong>' +
          '<strong>但周日的礼拜免费且开放：8:00 Early Sunday Eucharist、11:15–12:45 Principal Sunday Eucharist、' +
          '16:00–17:00 Sunday Choral Evensong；平日 12:00 Noon Eucharist 与 17:00–17:45 Weekday Choral Evensong；' +
          '周六 12:30 室外 Carillon Recital。</strong>' +
          '<strong>Garth 中庭与 All Souls Memorial Garden 因中央塔工程封闭，官方称「不早于 2026 年晚秋」重开；' +
          'Bishop\'s Garden 与其余场地照常开放。</strong>' +
          '（<strong>2026-09-15 核实</strong>）',
        parking: '<strong>场地内有地下车库</strong>（由 Atlantic / asgpark.com 运营），' +
          '入口在 Wisconsin Avenue、Woodley Road 南侧那个红绿灯处，' +
          '<strong>开放 06:00–23:00，限高 7 英尺 6 英寸（含车顶附件），不接受拖车与 RV</strong>，' +
          '各层电梯旁有无障碍车位；缴费机在 B1、B2 层电梯厅与 Wisconsin Avenue 出口处，' +
          '<strong>收现金与信用卡，建议备小面额（找零只给硬币）</strong>。' +
          '<strong>周日礼拜时段免费。</strong>' +
          '<strong>具体费率官方只给 PDF 且注明随时调整，2026 年数值未能从官方渠道核实</strong>' +
          '（以 asgpark.com 或现场标示为准；特定活动期间另有特别费率且可能只收现金）。' +
          '周边住宅区路边车位极少',
        walk: '<strong>没有邻近地铁站。官方现在写的最近两站是红线 Tenleytown–AU 与 Woodley Park–Zoo/Adams Morgan</strong>，' +
          '两站步行都在 <strong>1.5 公里 / 20 分钟以上且是上坡</strong>。' +
          '<strong>更实用的是 Metrobus：D80（Wisconsin Ave–Union Station，全天运行，原 33 路）在 ' +
          'Wisconsin Avenue 与 Woodley Road／Cathedral Avenue 设站，下车步行约 2 分钟</strong>；' +
          '<strong>D82（Wisconsin Ave–Foggy Bottom，原 31 路）仅平日高峰运行，不要当作全天方案</strong>。' +
          '另有 C51、C85、D90 在附近设站。' +
          '（这些编号是 2025 年 6 月 29 日 Better Bus Network 改版后的新名；' +
          '<strong>DC Circulator 已于 2024/12/31 永久停运</strong>。）' +
          '车库电梯到访客入口约 <strong>150 米 / 3 分钟</strong>；' +
          '<strong>访客入口在座堂西北角、从 Wisconsin Avenue 正对立面时的左前方，玻璃电梯对面，' +
          '无障碍坡道门在主入口左侧</strong>。所有人可能须过安检'
      },
      notes: [
        '<strong>三脚架（已逐项核实）：内部为「酌情限制」——官方原文是「Visitors may be limited in the use of ' +
          'photo equipment such as tripods or selfie sticks」，即工作人员可当场要求你收起来，' +
          '实务上应按「只能手持」准备</strong>；个人非商业录像的政策则写「limited to hand-held and tripod equipment only」，' +
          '两处口径不完全一致。<strong>外部与场地上的有计划拍摄需要 Photo Location Permit</strong>：' +
          '基本许可为 2 小时、含摄影师在内最多 8 人、<strong>明确不含灯具与三脚架</strong>，' +
          '<strong>起价 $250，而 10 月属旺季月份要 $350</strong>，审批需最多两周',
        '<strong>许可只覆盖座堂外部、指定场地与 Bishop\'s Garden；不含 Garth 喷泉区（那是纪念园）、' +
          '不含 St. Albans、National Cathedral School、Beauvoir 等 Close 内其他机构；' +
          '内部原则上只对在此举行仪式的当事人开放拍摄</strong>。普通游客手持随手拍不受这套许可约束',
        '<strong>礼拜与音乐会进行中一律禁止摄影摄像</strong>；不要把正在私人祈祷的人当作画面主体；' +
          '官方导览手册明说<strong>闪光灯在这么大的内部空间里毫无作用</strong>，关掉它',
        '<strong>17:00 准时关门意味着内部的暮光与夜景永远拍不到。</strong>' +
          '要拍点灯后的外立面，只能在场地上从外面拍',
        '<strong>塔楼观景廊（Tower Observation Gallery）是「when available」而非固定开放</strong>，' +
          '在中央塔施工期间尤其不稳定。如果登塔观景是来这一站的主要目的，' +
          '<strong>请在买票当天先致电 (202) 537-6200 确认</strong>，不要指望自助票一定能上去',
        '<strong>属私立圣公会机构，联邦停摆完全不影响</strong>；真正影响开放的是葬礼、国家级礼拜、音乐会等临时占用，' +
          '这类变更座堂会邮件通知并全额退款，但不会提前很久公布'
      ],
      images: [
        { url: 'img/national-cathedral-in-dc-38a996bf.jpg',
          cap: '座堂全景与中央塔 · Siubo11A / CC BY-SA 3.0' },
        { url: 'img/space-window-south-nave-bay-e-national-cathedral-dc-531f7b3a.jpg',
          cap: '中殿南侧高窗上的 Space Window · Tim Evanson / CC BY-SA 2.0' },
        { url: 'img/washington-national-cathedral-from-bishop-s-garden-eb6d6616.jpg',
          cap: '自 Bishop\'s Garden 仰望南立面 · Ron Dicker / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'cedar-hill',
      n: 5,
      name: 'Frederick Douglass 故居（Cedar Hill）',
      en: 'Frederick Douglass National Historic Site (Cedar Hill)',
      /* 游览价值：本区唯一的历史室内，且屋内约 70% 是道格拉斯本人的原物——
         这个比例在美国历史宅邸里极高。但它在 Anacostia 河东、离 Mall 一段距离、
         室内只能跟游 30 分钟、周日周一进不了屋，属于「对 19 世纪美国史有兴趣再专程去」。 */
      must: 3,
      score: 3.5,
      tldr: '免票但室内只能跟游、需 recreation.gov 预约 $1；周日周一闭馆，9:00 开门那一场的城市远眺光线最好。',
      tags: [
        { t: '免门票', c: 'free' },
        { t: '预约费 $1', c: 'paid' },
        { t: '室内仅限跟游', c: 'risk' },
        { t: '周日周一闭馆', c: 'risk' },
        { t: '室内可拍·禁闪光', c: 'good' }
      ],
      highlights: [
        'Frederick Douglass <strong>1877 年</strong>买下这栋 1850 年代建于山顶的宅子，' +
          '<strong>当时 Uniontown（今 Anacostia）的地契上带有禁止售予非裔的限制性条款，他的购入直接打破了它</strong>。' +
          '他把这里命名为 Cedar Hill，住到 <strong>1895 年 2 月 20 日</strong>去世为止。' +
          '房子共 21 间、山头 51 英尺高、连同园地约 9 英亩',
        '<strong>屋内约 70% 的陈设是道格拉斯本人或家人的原物</strong>——家具、藏书、画作、个人用品都还在原位，' +
          '这在美国的历史宅邸里比例极高。<strong>后院还留着他称为「the Growlery」的一间独立小石屋书房</strong>，' +
          '他用来独处写作',
        '他去世后由第二任妻子 <strong>Helen Pitts Douglass</strong> 发起保存，' +
          '与全国有色人种妇女俱乐部联合会共同维系了几十年；' +
          '<strong>1962 年 9 月 5 日由 Kennedy 签署设立为 Frederick Douglass Home</strong>，' +
          '1972 年大修后重开，1982 年增建访客中心，<strong>1988 年经国会立法升格为 National Historic Site</strong>',
        '<strong>山顶视野是这里的摄影核心，方位需要说清楚：从故居门廊看出去，' +
          '美国国会大厦在方位约 325°（西北偏北）、直线距离约 3.6 公里；' +
          'Washington Monument 在方位约 304°（西北偏西）、约 5.3 公里。</strong>' +
          '整片天际线大致落在 300°–330° 这个 30 度的扇形里，' +
          '<strong>用 200–400mm 压缩才能让国会圆顶在画面中占到有效面积</strong>',
        '<strong>这是全区唯一「室内必须跟着讲解员走」的点位。</strong>房子只能通过 ranger 导览进入，' +
          '每场 30 分钟、覆盖一二两层、上限 10 人。<strong>不给自由活动时间，也不允许中途插入</strong>——' +
          '这一条决定了整站的节奏安排'
      ],
      tour: [
        '<strong>这一站的核心决策是「要不要进屋」，而进屋只有一条路：跟 ranger 导览，且名额只有 10 人。</strong>' +
          '<strong>房屋导览仅周二至周六进行，标准场次 9:00、12:15、13:15、15:00、15:30，' +
          '外加仅 4–10 月加开的 16:00 场；每场 30 分钟、覆盖一二两层、上限 10 人。</strong>' +
          '<strong>官方强烈建议提前在 recreation.gov 预约（每张 $1 不可退服务费，最晚须提前一天，最早可提前 6 个月）</strong>，' +
          '未被预约掉的余票在访客中心免费先到先得，但周末与旺季经常很早就满。' +
          '<strong>周日与周一进不了屋</strong>——那两天来只能看外观与园地。' +
          '（<strong>2026-09-15 核实于 nps.gov/frdo 与 recreation.gov facility 234636</strong>）',
        '<strong>正确的到场节奏：提前 30 分钟到访客中心，先看 19 分钟的影片，再上山进屋。</strong>' +
          '访客中心（1411 W Street SE，在山脚停车场旁）有展陈、原件展品、书店、卫生间、饮水机' +
          '与一个放映厅，循环放映 <strong>19 分钟的《Fighter for Freedom: The Frederick Douglass Story》</strong>。' +
          '<strong>官方要求提前半小时到取票（9:00 那场例外，因为访客中心 9:00 才开门）</strong>，' +
          '而这半小时正好够把影片看完——<strong>看了再进屋，导览的信息密度会高很多</strong>。' +
          '<strong>导览一旦进屋就不能再加人，迟到即失效</strong>（团体迟到超过 15 分钟直接作废）。' +
          '<strong>故居内没有洗手间</strong>，上山前先在访客中心解决。',
        '<strong>进屋以后看什么：这里的价值全在「原物密度」，不在建筑。</strong>' +
          '<strong>屋内约 70% 的陈设是道格拉斯本人或家人的原物</strong>——家具、藏书、画作、个人用品都还在原位，' +
          '这个比例在美国的历史宅邸里极高。' +
          '重点是<strong>他的书房与书桌</strong>（藏书上千册，他是自学识字的）、' +
          '客厅的钢琴，以及二层卧室。' +
          '<strong>出屋后别忘了后院那间他自己叫作「the Growlery」的独立小石屋书房</strong>，' +
          '他用来独处写作，就在主屋后方几十米，不在导览路线内、可自行走过去看。' +
          '<strong>30 分钟走完两层，平均每个房间不到 3 分钟，没有自由活动时间</strong>，' +
          '想细看某件东西就当场问 ranger。',
        '<strong>不进屋也有值得看的：11:30 的免费户外导览，以及山顶那片视野。</strong>' +
          '<strong>Grounds Tour 每天 11:30 一场（在本站开放日内），5–20 人</strong>，' +
          '在访客中心前台报到、由工作人员通知上山到门廊集合，讲宅子与园地的来历，不进屋。' +
          '<strong>山顶视野是这一站免费的最大收获：从门廊看出去，国会大厦在方位约 325°、直线约 3.6 公里，' +
          'Washington Monument 在方位约 304°、约 5.3 公里</strong>，整片天际线落在 300°–330° 的扇形里。' +
          '<strong>这是全 DC 少有的能同时看到国会圆顶与方尖碑的免费高点</strong>，' +
          '不过肉眼看过去它们都很小——带望远镜会好很多。' +
          '道格拉斯 1877 年买下这栋 1850 年代的山顶宅子时，' +
          '<strong>当地地契上还带着禁止售予非裔的限制性条款，他的购入直接打破了它</strong>。',
        '<strong>交通与体力：开车或坐公交直接到门口最省事，走地铁 15 分钟也完全可行。</strong>' +
          '<strong>场内有免费停车场</strong>（W Street SE 与 15th Street SE 交口，访客中心门口 30 米），' +
          '车位不多但通常够用。' +
          '<strong>Metro 绿线 Anacostia 站</strong>从「Howard Road / Buses」出口出站，' +
          '沿 Howard Road → Martin Luther King Jr. Avenue → W Street，' +
          '<strong>全程约 1.2 公里 / 15 分钟，路线全在有商铺的主干道上</strong>；' +
          '<strong>更省事的是在 Anacostia 站换 B2 或 V2 路公交，站点就在门口的 W &amp; 14th Street</strong>。' +
          '<strong>访客中心到山顶故居要爬 85 级台阶，或走无障碍坡道，约 3–5 分钟</strong>；' +
          '行动不便者可先向 ranger 说明，获准后直接把车开上山顶（山顶有两个无障碍车位）。' +
          '<strong>周边没有餐厅，本站也没有餐饮</strong>，吃饭要回 Martin Luther King Jr. Avenue 沿线或过河。',
        '<strong>时段建议与可跳过的部分。</strong>' +
          '<strong>上午场（9:00）是最好的选择</strong>：山顶朝西北，市中心那些朝东南的立面在上午正对着你、被正面光打亮，' +
          '而下午同一片天际线会逆光发灰。' +
          '<strong>而且 17:00 就闭园，山顶的日落与夜景根本看不到</strong>，没必要为了傍晚光线留到最后。' +
          '合理安排是<strong>订 9:00 那一场，先在山顶看城市，再进屋，11:00 前后就能离开</strong>。' +
          '时间很紧、又不特别关心 19 世纪美国史的人，' +
          '<strong>跳过整站是合理决定</strong>——它在 Anacostia 河东，来回通勤本身就要一个多小时。'
      ],
      photo: '人文 <strong>4/5</strong>，风光 <strong>3.5/5</strong>，建筑 <strong>3.5/5</strong>。' +
        '室内原物密度极高且明确允许拍摄，是本区唯一的历史室内题材；' +
        '扣分是 30 分钟跟游节奏、禁背包、以及 17:00 闭园导致拍不到山顶的日落与蓝调。',
      shots: [
        {
          name: '山顶门廊向西北眺望国会大厦',
          desc: '<strong>本条目的招牌机位，而且最佳时段被开门时间锁死了。</strong>' +
            '视线朝西北（国会 325°、方尖碑 304°），<strong>意味着市中心那些朝东南的立面正对着你</strong>——' +
            '要让它们受正面光，太阳必须在东到东南，也就是<strong>上午</strong>。' +
            '<strong>访客中心 9:00 开门，此时太阳方位约 110–125°、高度角 15–20°，正是暖色低角度正面光，' +
            '这就是全天最好的时刻，没有第二个。</strong>' +
            '<strong>所以请订 9:00 那一场</strong>：先在山顶拍城市，再进屋。' +
            '<strong>17:00 闭园，而日落在 19:02（9/25）／18:21（10/22），山顶的日落与蓝调拍不到，别做计划。</strong>' +
            '<strong>200–400mm 是必需的</strong>（3.6 公里外的圆顶用 70mm 只有一个小疙瘩）；' +
            '<strong>秋季清晨的低层霾是最大敌人</strong>，冷锋过境后的第一个晴天能见度最好。' +
            '门廊与草坪上可以架三脚架。',
          park: [38.86362, -76.98451],
          view: [38.86276, -76.98510]
        },
        {
          name: '故居正立面与门廊',
          desc: '白色木构、带柱廊、坐在 51 英尺高的坡顶上。' +
            '<strong>正立面朝西北，与山顶视野同向，因此正立面在上午处于背光、在下午才被正打。</strong>' +
            '两种都能用：<strong>上午（9:00–10:30）拍逆光轮廓加天空，配合 85 级台阶做前景，' +
            '强调「山上的房子」这个概念</strong>；' +
            '<strong>下午（15:00–16:45）正面受光，白色木板墙细节最完整</strong>，' +
            '而 15:00 与 15:30 场次正好落在这个窗口。' +
            '<strong>24–35mm 从台阶中段仰拍</strong>，让门廊柱列与山坡的坡度一起进画。' +
            '不要走进花圃，园地是历史景观的一部分。',
          view: [38.86276, -76.98510]
        },
        {
          name: '室内导览中的书房与陈设',
          desc: '<strong>官方规则原文：「Photography is permitted, but the flash must be off ' +
            'to protect light-sensitive objects.」——可以拍，但必须关闪光。</strong>' +
            '<strong>真正的限制是另一条：婴儿车、手提袋、背包与其他大件包一律不得带进屋。</strong>' +
            '意味着<strong>只能带一机一镜进去，其余留在车上或访客中心</strong>——' +
            '请提前决定好那支镜头。' +
            '<strong>推荐 24mm 或 35mm 的 f/1.4–f/1.8 定焦</strong>：房间小、只能站在地毯走道上、不能踏木地板，' +
            '广角加大光圈是唯一解。ISO 3200–6400 打底，1/60 秒以上，机身防抖全开。' +
            '<strong>30 分钟走完两层，平均每个房间不到 3 分钟</strong>，' +
            '进屋前想好「书房的书桌、客厅的钢琴、卧室的窗光」这三张，到位就按，不要现场构思。',
          view: [38.86276, -76.98510]
        }
      ],
      access: {
        visit: '<strong>1.5–2 小时</strong>。分配：访客中心展陈与 19 分钟影片 <strong>30–40 分钟</strong>' +
          '（这正好是官方要求的提前到场时间，不额外占时间）、' +
          '爬 85 级台阶或走坡道上山 <strong>5 分钟</strong>、' +
          '山顶门廊看国会大厦与方尖碑方向的天际线 <strong>10–15 分钟</strong>、' +
          '房屋导览 <strong>30 分钟（固定，不可延长）</strong>、' +
          '后院 the Growlery 小石屋与园地 <strong>10–15 分钟</strong>。' +
          '<strong>不进屋、只看外观与山顶视野：40 分钟。</strong>' +
          '<strong>加上往返 Anacostia 的通勤，请为这一站整体留半天。</strong>',
        book: '<strong>房屋内部只能通过 ranger 导览进入。</strong>官方强烈建议预约：' +
          '<strong>recreation.gov（Facility 234636）或电话 1-877-444-6777</strong>，' +
          '<strong>每张票收 $1 不可退的预约服务费，最晚需提前一天（至前一日午夜）预约，最早可提前 6 个月</strong>。' +
          '未被预约掉的余票在访客中心免费先到先得（限 10 人及以下的个人与小团），' +
          '<strong>但周末与旺季经常提前很久就订满</strong>。' +
          '<strong>所有人都必须先到访客中心（1411 W Street SE）取票</strong>，' +
          '并<strong>提前至少 30 分钟到场</strong>（团体至少 15 分钟）；' +
          '<strong>导览在故居正门准时出发，进屋后不再放人</strong>。' +
          '11 人以上团体必须预约（1-877-559-6777，提前至少一周，同样 $1/人，上限 60 人并会拆成小组；' +
          '团体场次为 9:30、10:45、14:00）。教育机构另有团体价，电 (771) 208-1499 询问。' +
          '<strong>11:30 的 Grounds Tour 不需预约</strong>，到访客中心前台报到即可。' +
          '（<strong>2026-09-15 核实</strong>）',
        ticket: '<strong>免门票、免入园费，导览本身也免费</strong>' +
          '（recreation.gov 原文：「Tours and admission are free at Frederick Douglass Home.」）。' +
          '唯一的钱是 <strong>$1/张的网上预约服务费，不可退</strong>。' +
          '（<strong>2026-09-15 核实</strong>）',
        hours: '<strong>房屋导览仅在周二至周六进行</strong>（<strong>即周日与周一无法进屋</strong>）。' +
          '标准场次（1–10 人）：<strong>9:00、12:15、13:15、15:00、15:30，以及仅 4–10 月加开的 16:00 场</strong>，' +
          '每场 30 分钟、上限 10 人。' +
          '<strong>Grounds Tour（户外，5–20 人）：本站开放日每天 11:30 一场。</strong>' +
          '<strong>访客中心：4 月 1 日–10 月 31 日 9:00–17:00，11 月 1 日–3 月 31 日 9:00–16:30。</strong>' +
          '<strong>官方两个页面对「本站周日周一是否开放」说法不一致：' +
          '访客中心页写「open everyday」（每日开放），而导览页写「everyday the site is open to the public ' +
          '(Tuesday through Saturday)」（本站对公众开放的日子是周二至周六）。' +
          '两种口径同时存在于 nps.gov，未能确认周日与周一访客中心与园地是否照常开放</strong>——' +
          '确定要在周日或周一来（哪怕只看外观），请先电 <strong>(771) 208-1499</strong> 确认。' +
          '<strong>1 月 1 日、感恩节与 12 月 25 日闭园。</strong>' +
          '（房屋导览时段与访客中心钟点据 nps.gov/frdo 与 recreation.gov，<strong>2026-09-15 核实</strong>；' +
          '2024 年曾因人手不足一度缩减开放天数，出行前仍建议复查）',
        parking: '<strong>场内有免费停车场</strong>，位于 W Street SE 与 15th Street SE 交口，就在访客中心门口。' +
          '车位不多但通常够用；停满可停周边住宅街道，<strong>但要看清居民许可时段标牌</strong>。' +
          '行动不便者可先到访客中心告知 ranger，获准后直接把车开上山顶（山顶有两个无障碍车位）',
        walk: '<strong>Metro 绿线 Anacostia 站</strong>，从「Howard Road / Buses」出口出站，' +
          '右转 Howard Road 走一个街区、左转 Martin Luther King Jr. Avenue 走三个街区、' +
          '右转 W Street 走四个街区到访客中心，<strong>全程约 1.2 公里 / 15 分钟</strong>，' +
          '<strong>路线全在有商铺的主干道上</strong>。' +
          '<strong>更省事的是从 Anacostia 站换 B2 或 V2 路公交，站点就在门口的 W &amp; 14th Street</strong>。' +
          '停车场到访客中心 30 米；<strong>访客中心到山顶故居要爬 85 级台阶，或走无障碍坡道，约 3–5 分钟</strong>'
      },
      notes: [
        '<strong>三脚架（已逐项核实）：户外的园地与山顶可以用。</strong>' +
          'National Capital Parks-East 的 2026 年 Superintendent\'s Compendium 把三脚架、独脚架与手持灯具' +
          '明确归为 handheld equipment，只有进入封闭区、独占场地或搭建布景才需许可。' +
          '<strong>室内则因为禁带大件包、30 分钟跟游、且只能站在地毯上，实务上完全不可能架设</strong>',
        '<strong>关于 Anacostia 的实用建议（只讲操作，不讲刻板印象）：</strong>' +
          '这里的报案犯罪率高于 DC 西北部，但故居本身有 NPS 工作人员常驻、免费停车场就在门口 30 米、' +
          '且<strong>全年 17:00 就闭园，参观者不会在天黑后还留在附近</strong>。' +
          '<strong>最省心的方案是开车直接停场内，或搭 B2/V2 在门口下车</strong>；' +
          '走地铁那 15 分钟全程在 MLK Jr. Avenue 与 W Street 这两条有店面的主街上，白天走没问题',
        '<strong>器材上的建议是「少而精」而不是「藏起来」：</strong>带一机一镜（反正室内也不许背包），' +
          '把长焦在山顶用完就收进车里，不要在街上边走边换镜头。这条对任何城市都适用，' +
          '在这里只是更值得执行',
        '<strong>必须提前 30 分钟到访客中心取票</strong>（9:00 那场除外，因为访客中心 9:00 才开门）。' +
          '<strong>导览一旦进屋就不能再加人</strong>，迟到即失效，且团体迟到超过 15 分钟直接作废',
        '屋内禁止饮食、嚼口香糖与吸烟；<strong>必须全程走在地毯走道上，不能踩到木地板</strong>；' +
          '<strong>故居内没有洗手间</strong>，上山前先在访客中心解决',
        '访客中心有一部 19 分钟的影片《Fighter for Freedom: The Frederick Douglass Story》，' +
          '<strong>提前 30 分钟到的时间正好够看完</strong>，看了再进屋，导览的信息密度会高很多'
      ],
      images: [
        { url: 'img/frederick-douglass-house-2f8a4807.jpg',
          cap: 'Cedar Hill 故居正立面 · Peter Fitzgerald / CC BY-SA 3.0' },
        { url: 'img/frederick-douglass-house-a5f380b7.jpg',
          cap: '山顶故居与前坡草地 · Aude / CC BY-SA 2.5' }
      ]
    },
    {
      id: 'meridian-hill',
      n: 6,
      name: 'Meridian Hill Park（Malcolm X Park）',
      en: 'Meridian Hill Park (Malcolm X Park)',
      /* 游览价值：叠瀑复流后是一座很好的城市公园，但它终究是社区公园而不是国家地标——
         属于「住在附近、或者已经在 U Street／Columbia Heights 一带、顺路走进去」的层级。
         专程从 Mall 跨城过来不划算，给 2.5。 */
      must: 2.5,
      score: 4,
      tldr: '十三级叠瀑已于 2026 年 5 月 14 日复流，是本区最确定的好消息；免费、开到午夜、三脚架合法，蓝调长曝是正解。',
      tags: [
        { t: '完全免费', c: 'free' },
        { t: '叠瀑已复流', c: 'good' },
        { t: '开到午夜', c: 'good' },
        { t: '三脚架合法', c: 'good' },
        { t: '上层草坪或仍围挡', c: 'risk' }
      ],
      highlights: [
        '<strong>十三级叠瀑长约 300 英尺，是北美最长的连续跌水之一。</strong>' +
          '它 2019 年因下层广场改造停水，<strong>是建成以来历史上第一次完全断流，一停七年</strong>；' +
          '<strong>NPS 官方页面写明「reopened to visitors on May 14, 2026」，下层反射池同日重开</strong>。' +
          'NPS 同时提示流量仍在调试中，可能被临时调整',
        '公园 1914 年由景观建筑师 <strong>George Burnap</strong> 起稿、<strong>Horace Peaslee</strong> 修订，' +
          '按意大利文艺复兴台地园的路子做，<strong>直到 1936 年才算真正建成</strong>。' +
          '1933 年划归 NPS，1994 年列为 National Historic Landmark',
        '<strong>对拍摄者最重要的一个技术事实：这里是美国「露石混凝土」（exposed-aggregate concrete）的试验场。</strong>' +
          '石子按尺寸与颜色逐颗挑选，混凝土未完全硬化时就拆模，再用钢丝刷加酸洗把骨料表面刮出来。' +
          '<strong>结果是整座公园的墙面、栏杆、台阶都有一层砂纸般的颗粒质感——' +
          '低角度侧光下这层质感本身就是极好的抽象题材</strong>，比拍全景更值',
        '<strong>「Malcolm X Park」这个名字来自 1969 年 Angela Davis 在此集会时提出的更名倡议</strong>，' +
          '至今是本地通用叫法但非官方名。<strong>周日下午的鼓圈（drum circle）自 1960 年代延续至今</strong>，' +
          '在上层草坪靠近 Joan of Arc 雕像那一侧，通常从下午开始一直到天黑，' +
          'NPS 官方页面把它列为公园的日常景象之一',
        '园内两件雕塑值得单独拍：<strong>1922 年的 Joan of Arc 骑马像是全 DC 唯一的女性骑马雕像</strong>' +
          '（法国妇女团体所赠，2024 年 11 月做过修复）；' +
          '<strong>下层广场那座浑天仪（armillary sphere）是 2024 年 11 月新装的复制品</strong>，' +
          '原件在 1960 年代被破坏、1970 年代末拆除后失踪，新件是照历史照片与图纸重做的'
      ],
      tour: [
        '<strong>好消息先说：叠瀑现在是通水的，而 2026 年那场把全园围起来的整修已经结束。</strong>' +
          'NPS 的 Fountains 页当前状态写的是 <strong>「The Cascading Fountain at Meridian Hill Park is on.」</strong>，' +
          '叠瀑<strong>自 2019 年停水七年后于 2026 年 5 月 14 日重新开放</strong>，下层反射池同日重开。' +
          '<strong>上层草坪的封闭令官方有效期是 2026 年 3 月 23 日 07:00 至 9 月 4 日 17:00，现已到期</strong>，' +
          '本地媒体 PoPville 在 <strong>2026 年 8 月 17 日</strong>报道围栏开始拆除。' +
          '（另有报道称下层广场的一项封闭延至 9 月 30 日，' +
          '<strong>此说未能在 NPS 的封闭令原文中得到证实</strong>，以现场围挡为准。' +
          '<strong>2026-09-15 核实</strong>）',
        '<strong>怎么逛：这是一座意大利台地园式的公园，正确走法是从下层看上去、再从上层看下来，一共 40–60 分钟。</strong>' +
          '从 <strong>16th &amp; W Street NW 的下层广场入口</strong>进（这也是唯一的无障碍入口，有连续坡道），' +
          '站在下层反射池边正对<strong>十三级叠瀑</strong>——' +
          '<strong>全长约 300 英尺，是北美最长的连续跌水</strong>，水从北端一路跌到南端的池子里，' +
          '这是全园唯一真正的「必看」。' +
          '看完沿两侧台阶上到叠瀑顶端俯瞰（约 150 米、两段台阶），' +
          '再往北 60 米到上层平台看 <strong>Joan of Arc 骑马像</strong>与开阔草坪。' +
          '<strong>只看叠瀑：15–20 分钟就够。</strong>',
        '<strong>两个容易走过不看的细节。</strong>' +
          '一是<strong>整座公园的墙面、栏杆与台阶都是「露石混凝土」（exposed-aggregate concrete）</strong>——' +
          '石子按尺寸与颜色逐颗挑选，混凝土未完全硬化时就拆模，再用钢丝刷加酸洗把骨料刮出来；' +
          '<strong>这里是这项工艺在美国的试验场</strong>，凑近摸一把就明白为什么整园看起来像砂纸。' +
          '二是下层广场那座<strong>浑天仪（armillary sphere）是 2024 年 11 月新装的复制品</strong>，' +
          '原件在 1960 年代被破坏、1970 年代末拆除后失踪，新件是照历史照片与图纸重做的。' +
          '另外 <strong>Joan of Arc 骑马像（1922 年，法国妇女团体所赠）是全 DC 唯一的女性骑马雕像</strong>。',
        '<strong>什么时段来最有意思：周日下午。</strong>' +
          '<strong>周日下午的鼓圈（drum circle）自 1960 年代延续至今</strong>，' +
          '地点在上层草坪靠 Joan of Arc 雕像那一侧（公园南端），通常从下午开始一直到天黑，' +
          'NPS 官方页面把它列为公园的日常景象之一。' +
          '<strong>2026 年的整修期间，园方特意没有封闭这一块，就是为了不打断鼓圈。</strong>' +
          '想听就走进去站着听几分钟，这是一个持续六十年的社区活动而不是表演；' +
          '<strong>要拍人请走近、点头示意，不要在外圈用长焦偷拍。</strong>' +
          '「Malcolm X Park」这个通用叫法来自 1969 年 Angela Davis 在此集会时提出的更名倡议，至今非官方名。',
        '<strong>交通与安全：不要开车，公园开到午夜但不等于午夜适合待在这里。</strong>' +
          '<strong>Metro 绿/黄线 U Street 站</strong>步行到下层广场入口约 <strong>900 米 / 12 分钟</strong>，' +
          '<strong>红线 Columbia Heights 站</strong>约 <strong>1.0 公里 / 13 分钟</strong>。' +
          '<strong>无专用停车场</strong>，16th Street、Euclid Street、W Street 一带大部分是居民许可区、' +
          '非居民限停 2 小时且有时段限制，傍晚与周末几乎找不到位。' +
          '<strong>5–10 月公园开到 24:00（11–4 月到 21:00），无闭园日</strong>，' +
          '日落后 20–50 分钟人流仍多、照明正常；' +
          '<strong>再晚就不建议独自停留，尤其是树荫密集的上层与东侧台阶。</strong>' +
          '<strong>园内没有餐饮也没有商店</strong>，吃饭往南走 900 米到 U Street 或往北到 Columbia Heights，' +
          '厕所同理——<strong>这一站没有可靠的公共卫生间，来之前先解决。</strong>',
        '<strong>顺路怎么连：这一站的正确用法是和 U Street／Shaw 串在一起，而不是单独跑一趟。</strong>' +
          '从下层广场入口沿 16th Street 往南走 900 米就是 U Street 一带，' +
          '<strong>先在 U Street 吃饭看历史街区、再北上进公园看叠瀑，或者反过来</strong>，' +
          '半天能把两站一起走完。' +
          '<strong>单独从 National Mall 跨城过来只为看一道叠瀑，不划算</strong>——' +
          '这也是它 must 只给 2.5 的原因。' +
          '所有水体<strong>禁止涉水、游泳与洗浴（人与宠物皆然）</strong>，见 Superintendent\'s Compendium。'
      ],
      photo: '风光 <strong>4/5</strong>，建筑 <strong>4.5/5</strong>，人像 <strong>4/5</strong>。' +
        '复流后的十三级跌水加露石混凝土的几何台地，是 DC 少有的「能拍慢门」的免费场地，' +
        '且开到午夜、三脚架合法；扣分是上层草坪可能仍在围挡、以及秋季树冠遮蔽让下午光线很碎。',
      shots: [
        {
          name: '下层广场正对叠瀑仰拍（招牌机位）',
          desc: '<strong>先把朝向说清楚：叠瀑从北端（38.92013）沿坡向南跌到下层反射池（38.91965），' +
            '也就是整条水轴朝正南。你站在下层广场向北仰拍，太阳在你背后。</strong>' +
            '这意味着<strong>正午前后叠瀑是被正面硬光打的，反差大、水花过曝，最不该拍的时段</strong>。' +
            '<strong>真正的时段有三个：一是阴天全天（丝滑水流的最佳条件）；' +
            '二是日落前 60–30 分钟（西侧台地与树把水池打进阴影、只有上部还留暖光，明暗分层最漂亮）；' +
            '三是蓝调（9/25 约 19:05–19:30，10/22 约 18:25–18:50）</strong>。' +
            '<strong>公园 5–10 月开到午夜，蓝调之后还有大量时间，这是本区唯一能合法慢慢拍夜景的地方。</strong>' +
            '<strong>慢门参数：白天要 ND8–ND64 才能到 1/2–2 秒；蓝调不需要 ND，2–15 秒直接拍。</strong>' +
            '<strong>1/2 到 1 秒的水是「有质地的丝」，超过 4 秒会糊成一片白，13 级台阶的层次就没了</strong>——' +
            '这里不要盲目拉长曝光时间。24–35mm 竖构图从池边正中拍全程；配 CPL 压水面反光。',
          park: [38.91967, -77.03498],
          view: [38.91965, -77.03564]
        },
        {
          name: '叠瀑顶端俯拍与 16th Street 壁龛',
          desc: '从跌水最上一级的平台向南俯瞰，<strong>十三级水盘一路收窄消失在下层广场</strong>，' +
            '是与上一个机位完全相反的视角，也更能表达「台地」这件事。' +
            '<strong>此处朝南，秋季全天正对太阳，因此反过来——这个机位适合上午与傍晚的斜光，' +
            '正午会直接吃到太阳进画面。</strong>' +
            '推荐 <strong>日出后 1–2 小时（9/25 约 08:00–09:00，10/22 约 08:30–09:30）</strong>：' +
            '此时太阳在东南、高度角 15–25°，' +
            '<strong>擦地光会把每一级水盘边缘的露石混凝土质感全部勾出来</strong>，' +
            '而且这个时段公园几乎没人。16–24mm 广角贴着栏杆向下压。' +
            '往北再走 60 米就是 Joan of Arc 骑马像所在的上层平台。',
          view: [38.92013, -77.03565]
        },
        {
          name: '上层平台：Joan of Arc 骑马像与周日鼓圈',
          desc: '<strong>上层是开阔草坪与列树，也是周日下午鼓圈的地点</strong>' +
            '（通常下午开始、持续到天黑，靠 Joan of Arc 雕像一侧）。' +
            '<strong>拍鼓圈请用 35mm 或 50mm 走进去拍，不要在外围用长焦偷拍</strong>——' +
            '这是一个持续六十年的社区活动，先站着听几分钟、点头示意，' +
            '通常没人介意你拍，但远距离长焦会让人不舒服。' +
            '<strong>雕像本身朝向使其正立面在下午受光</strong>，' +
            '<strong>15:00–17:00 的侧光配秋树背景最好</strong>，85–135mm 浅景深单拍马与骑手的轮廓。' +
            '<strong>重要提醒：2026 年整园养护中上层草坪自 4 月底起被围栏封闭做草皮更新，' +
            'NPS 只说估计封闭到夏天，9–10 月围栏是否拆除未能确认</strong>——' +
            '走道全程开放，但草坪本身可能进不去。',
          view: [38.92071, -77.03571]
        }
      ],
      access: {
        visit: '<strong>40–60 分钟。</strong>分配：下层广场正对叠瀑 <strong>15–20 分钟</strong>、' +
          '沿台阶上到叠瀑顶端俯瞰 <strong>10 分钟</strong>、' +
          '上层平台与 Joan of Arc 骑马像 <strong>10–15 分钟</strong>、' +
          '露石混凝土墙与浑天仪等细节 <strong>5–10 分钟</strong>。' +
          '<strong>只看叠瀑：15–20 分钟。</strong>' +
          '<strong>周日赶上鼓圈想站着听一会儿，另加 30–60 分钟。</strong>' +
          '园区南北纵深不大，但下层广场到叠瀑顶端要爬两段台阶',
        book: '<strong>不需预约</strong>（举办活动才需要 special use permit）',
        ticket: '<strong>免费</strong>，无任何分档。园内没有商店与餐饮。' +
          '（据 nps.gov/rocr，<strong>2026-09-15 核实</strong>）',
        hours: '<strong>5 月至 10 月 05:00–24:00；11 月至次年 4 月 05:00–21:00。无闭园日。</strong>' +
          '<strong>九月底至十月底适用「开到午夜」这一档</strong>，' +
          '这是本区唯一能从容看夜景的点位。' +
          '<strong>叠瀑当前状态：NPS Fountains 页写「The Cascading Fountain at Meridian Hill Park is on.」' +
          '（2019 年停水七年后于 2026 年 5 月 14 日重开）</strong>；' +
          'NPS 另提示会继续调试流量（「Testing of the fountain will continue, to adjust the water levels ' +
          'and obtain the correct flow rate」），<strong>看到的水量可能与历史照片不同</strong>。' +
          '<strong>NPS 惯例是冬季关闭全部喷泉防冻、春夏视气温与维护状态开启，具体开关机日期官方未公布。</strong>' +
          '<strong>上层草坪封闭令的官方有效期为 2026/3/23 07:00 至 2026/9/4 17:00，已到期</strong>，' +
          '围栏据 PoPville 报道自 2026 年 8 月 17 日起拆除；' +
          '<strong>另有报道称下层广场一项封闭延至 9 月 30 日，此说未能在 NPS 封闭令原文中证实</strong>，以现场围挡为准。' +
          '（<strong>2026-09-15 核实</strong>）',
        parking: '<strong>无专用停车场。</strong>16th Street NW、Euclid Street NW、W Street NW 一带是路边停车，' +
          '<strong>大部分为居民许可区，非居民限停 2 小时且有时段限制，务必逐根看标杆</strong>。' +
          '傍晚与周末车位竞争激烈，<strong>强烈建议不要开车</strong>',
        walk: '<strong>Metro 绿/黄线 U Street 站</strong>步行到公园下层广场入口（16th &amp; W Street NW）' +
          '约 <strong>900 米 / 12 分钟</strong>；' +
          '<strong>红线 Columbia Heights 站</strong>约 <strong>1.0 公里 / 13 分钟</strong>。' +
          '<strong>下层广场入口（16th &amp; Florida/W Street 角）是唯一的无障碍入口</strong>，' +
          '有连续坡道通到 James Buchanan 纪念碑前的平台；' +
          '<strong>16th Street 一侧的多数入口因台地与台阶不具无障碍条件</strong>。' +
          '下层广场到叠瀑顶端约 150 米、要爬两段台阶'
      },
      notes: [
        '<strong>三脚架（已逐项核实）：可以，不需要许可。</strong>' +
          'NPS 现行摄影规则把三脚架、独脚架与手持灯具归入 handheld equipment，' +
          '只有<strong>进入封闭区、需要独占场地、或搭建布景／使用非手持器材</strong>才需要 permit。' +
          '公园本身也没有额外的三脚架禁令。架设时请避开主通道与鼓圈范围',
        '<strong>所有水体禁止涉水、游泳与洗浴（人与宠物皆然）</strong>，见 Superintendent\'s Compendium。' +
          '想拍水面低机位就蹲在池边铺装上，不要下水，也不要把器材架进池里',
        '<strong>叠瀑的水在 2026 年 7 月初曾因旁边两座未改造的小喷泉试水而被冲进大量铁锈沉积、一度变成浑浊棕色</strong>，' +
          'NPS 冲洗加人工吸底后数日内恢复。<strong>类似情况仍可能重演</strong>，' +
          '出发当天可先看 PoPville 或 NPS Rock Creek Park 页面有无新公告',
        '<strong>NPS 明说「Testing of the fountain will continue, to adjust the water levels and obtain ' +
          'the correct flow rate」——流量并非固定</strong>，你看到的水量可能比历史照片大或小',
        '<strong>公园开到午夜不等于午夜适合待在这里。</strong>' +
          '蓝调时段（日落后 20–50 分钟）人流仍多、照明正常，是拍夜景的合理窗口；' +
          '<strong>再晚就不建议独自带三脚架停留</strong>，尤其是树荫密集的上层与东侧台阶',
        '秋季树冠茂密，<strong>下午的光在台地上是碎斑而不是整片</strong>，' +
          '这也是为什么这里更推荐阴天与蓝调，而不是所谓的「黄金时刻」',
        '<strong>属 NPS（Rock Creek Park 管辖），但 2026 年 9 月 2 日生效的 CR 已把联邦拨款延到 12 月 11 日，' +
          '2026 年九月底至十月底不存在停摆闭园风险；十二月中旬之后出行请自行重查</strong>'
      ],
      images: [
        { url: 'img/cascading-water-fountain-at-meridian-hill-park-47c50237.jpg',
          cap: '十三级叠瀑运行中 · Katy Van Every / CC BY-SA 4.0' },
        { url: 'img/looking-south-meridian-hill-park-fountain-15e0078f.jpg',
          cap: '自叠瀑顶端向南俯瞰下层广场 · AgnosticPreachersKid / CC BY-SA 3.0' },
        { url: 'img/meridian-hill-park-a5605b77.jpg',
          cap: '台地、露石混凝土墙与列树 · Kurt Kaiser / CC0' }
      ]
    },
    {
      id: 'u-street-shaw',
      n: 7,
      name: 'U Street 与 Shaw（Black Broadway）',
      en: 'U Street Corridor & Shaw (Black Broadway)',
      /* 游览价值：历史分量是实打实的——20 世纪上半叶美国最重要的非裔文化中心之一，
         209,145 个名字的内战纪念碑就在街口。但它终究是一条街区而不是一处景点，
         看点靠讲解与铭牌而不是视觉冲击，属于「对美国黑人史与城市史有兴趣就该来」的层级。 */
      must: 3,
      score: 2.5,
      tldr: '20 世纪的「Black Broadway」，看点是历史与吃而不是打卡；纪念碑户外免费常年可看，但museum 到 2026/9/30 才重开，最佳时段是下午到晚饭。',
      tags: [
        { t: '街区免费', c: 'free' },
        { t: '博物馆免票', c: 'free' },
        { t: '9/30 前博物馆闭馆', c: 'risk' },
        { t: '地铁直达', c: 'good' },
        { t: '看点靠铭牌', c: 'risk' }
      ],
      highlights: [
        '<strong>20 世纪上半叶，在 Harlem 之外，U Street 是全美最重要的非裔文化与商业中心，' +
          '当年就被称作「Black Broadway」。</strong>' +
          '这不是后来追加的营销称号：种族隔离时代的华盛顿把非裔排除在市中心的剧院、旅馆与餐馆之外，' +
          '于是 U Street 一带自己长出了完整的一套——剧院、酒店、银行、保险公司、医生诊所、报社。' +
          '<strong>1968 年 4 月 Martin Luther King, Jr. 遇刺后的骚乱重创了这条街，' +
          '此后衰败了二十多年，直到 1991 年地铁站开通才开始恢复</strong>，' +
          '今天看到的是一条历史层与士绅化层叠在一起的街',
        '<strong>True Reformer Building（1200 U Street NW，12th 与 U 街西南角）是这条街上最该知道的一栋楼。</strong>' +
          '1902 年由 Grand United Order of True Reformers（一个非裔互助保险组织）委建、' +
          '<strong>1903 年 7 月 15 日落成，是重建时代之后全美第一栋由非裔独立设计、融资、建造并拥有的建筑</strong>——' +
          '当年《华盛顿邮报》的报道标题就叫「Erected by Negroes, White Race Had No Hand In Any Part of Work」。' +
          '建筑师 <strong>John Anderson Lankford 是特区第一位注册非裔建筑师</strong>，当时 28 岁。' +
          '<strong>Duke Ellington 在这栋楼二层的礼堂里完成了他最早的付费演出之一，报酬 75 美分</strong>；' +
          '地面层曾是华盛顿黑人国民警卫队 First Separate Battalion 的操练厅与军械库，该部队参加过一战。' +
          '（造价在史料里有两个数字：PBS 记为 $46,000，Cultural Tourism DC 的街头铭牌记为 $100,000）',
        '<strong>African American Civil War Memorial（Spirit of Freedom，10th 与 U 街口）：' +
          '环绕雕像的荣誉墙上刻着 209,145 个名字</strong>，' +
          '那是内战期间在联邦军 United States Colored Troops 服役的全部人员——' +
          '<strong>这是全美唯一一处把这份名单完整刻出来的地方</strong>。' +
          '雕像为 Ed Hamilton 作，1998 年落成。' +
          '<strong>纪念碑本体是户外场地、完全免费、常年可看</strong>，' +
          '与马路对面那座需要开门的博物馆是两回事',
        '<strong>Ben\'s Chili Bowl（1213 U Street NW）1958 年开业，是这条街活着的连续性本身。</strong>' +
          '它熬过了 1968 年的骚乱（当时街上宵禁，店主获许继续营业给警察与救援人员供餐）、' +
          '熬过了地铁施工那十几年把 U Street 挖成工地的日子，至今仍是家族经营。' +
          '招牌是 <strong>chili half-smoke</strong>（半猪半牛的粗烟熏肠，淋自家辣肉酱）。' +
          '<strong>店外侧墙那幅「Famous Faces」壁画是 Aniekan Udofia 2012 年所作</strong>，画的是这家店的老顾客',
        '<strong>这一区的两座老剧院都还在营业，不是遗址。</strong>' +
          '<strong>Lincoln Theatre（1215 U Street NW，就在 Ben\'s 隔壁）1922 年开业</strong>，' +
          '1994 年整修后重开，现为现役演出场地；' +
          '<strong>Howard Theatre（620 T Street NW）1910 年开业，是全美最早面向非裔观众与表演者的大型剧院之一</strong>，' +
          '2012 年整修后重开。' +
          '街区的另一个背景是 <strong>Howard University 就在东北侧几个街区外</strong>，' +
          '这条街的知识分子气质有一半来自它'
      ],
      tour: [
        '<strong>这一区的价值是历史与吃，不是景点打卡——先把这个预期定对，否则会觉得「什么都没有」。</strong>' +
          '这里没有可以排队进门的大场馆，' +
          '<strong>看点是一条街上的几栋楼、一面刻着 209,145 个名字的墙、几家老店，以及沿街的历史铭牌</strong>' +
          '（Cultural Tourism DC 的 Heritage Trail 标牌一路都有，值得停下来读）。' +
          '<strong>合理走法是一条约 1.5 公里的直线：</strong>' +
          '从 <strong>U Street／African American Civil War Memorial／Cardozo 地铁站</strong>的 ' +
          '<strong>10th &amp; U Street 出口</strong>出来，出站口正对纪念碑 → ' +
          '沿 U Street 往西到 <strong>1200 U Street 的 True Reformer Building 与山墙上的 Duke Ellington 壁画</strong> → ' +
          '<strong>Ben\'s Chili Bowl 与隔壁的 Lincoln Theatre（1213／1215 U Street）</strong> → ' +
          '往北一个街区可加 <strong>Howard Theatre（620 T Street NW）</strong>。' +
          '<strong>全程 1.5–2.5 小时（含吃饭）；纯走马观花 45 分钟。</strong>',
        '<strong>纪念碑与博物馆是两件事，而 2026 年秋天这一点特别关键。</strong>' +
          '<strong>African American Civil War Memorial（10th &amp; U 街口）是户外场地，免费、无门禁、任何时候都能看</strong>，' +
          '去读荣誉墙上的名字不需要任何安排。' +
          '<strong>但马路对面 1925 Vermont Avenue NW 的 African American Civil War Memorial Museum ' +
          '目前因整修闭馆，官方公告的重开日是 2026 年 9 月 30 日（周三）</strong>，' +
          '并同日举办开馆仪式。<strong>重开后的每日开放钟点官方称「将在近期公布」，截至 2026-09-15 尚未公布。</strong>' +
          '<strong>博物馆本身永远免费</strong>（成人／长者／学生一律 $0），馆方建议至少留一小时，' +
          '馆内可拍照但不得用闪光灯或补光灯。要确认当天开不开，电 <strong>202-667-2667</strong>。',
        '<strong>什么时段来：下午到晚饭，这是本区少见的「越晚越对」的一站。</strong>' +
          '上午这条街基本是睡着的，店铺多数十一点以后才开；' +
          '<strong>最合理的安排是下午三四点到，走完街区、读完铭牌，正好接上晚饭</strong>，' +
          '入夜后剧院与酒吧的招牌亮起来，街面才是它真正的样子。' +
          '<strong>Ben\'s Chili Bowl 官方钟点：周日至周四 11:00–23:00，周五与周六 11:00–04:00</strong>' +
          '——周末凌晨四点才关，是散场后的传统去处（电话 202-667-0909，<strong>2026-09-15 核实</strong>）。' +
          '<strong>饭点（12:00–13:30 与 18:00–20:00）Ben\'s 会排到店外</strong>，' +
          '避开这两段或者干脆接受排队；' +
          '这一带餐厅密度很高，埃塞俄比亚菜（Shaw 一带尤其集中）与新派小馆都不缺，不必死守一家。',
        '<strong>可以跳过的部分，以及带孩子的取舍。</strong>' +
          'Howard Theatre 与 Howard University 校园属于「有兴趣再走」——' +
          '<strong>两处都在主街以北、以东，多走 20–30 分钟，且都只能看外观</strong>（剧院无常规参观）。' +
          '时间紧就把范围压在 <strong>10th 到 14th 街之间的 U Street 这四个街区</strong>，' +
          '那里集中了纪念碑、True Reformer Building、壁画、Ben\'s 与 Lincoln Theatre，' +
          '<strong>是这一区 80% 的内容</strong>。' +
          '<strong>带小孩的话这一站偏枯燥</strong>（看点靠阅读），' +
          '博物馆重开后会好一些；不想勉强就只吃一顿 Ben\'s、看一眼纪念碑走人，也很合理。',
        '<strong>交通：这是本区唯一一个地铁直达门口的点位，开车反而最糟。</strong>' +
          '<strong>Metro 绿线／黄线 U Street／African American Civil War Memorial／Cardozo 站</strong>，' +
          '<strong>走 10th &amp; U Street 出口，出站即是纪念碑</strong>；' +
          '另有 13th &amp; U Street 出口更靠近 Ben\'s 一侧。' +
          '公交沿 U Street 与 14th Street 密集。' +
          '<strong>不要开车：这一带几乎全是居民许可停车区（非居民限停 2 小时），' +
          '晚间又是全市夜生活最密集的地段之一，车位竞争极激烈</strong>，' +
          '而且喝了酒就不该开车。' +
          '<strong>顺路提示：沿 16th Street 往北走 900 米就是 Meridian Hill Park</strong>，' +
          '把这两站串成半天是本区最省力的组合。',
        '<strong>卫生间与实际注意事项。</strong>' +
          '<strong>这条街没有公共厕所</strong>，靠餐厅与咖啡馆（消费后使用）；' +
          '地铁站内也没有。' +
          '博物馆重开后是一个可靠选项。' +
          '<strong>这一带入夜后人很多、街面热闹，属于有生气而不是空旷的那种夜晚</strong>，' +
          '但和任何城市的夜生活区一样，深夜散场时段（尤其周五周六 01:00 之后）人多口杂，' +
          '<strong>贵重物品收好、不要在路边长时间摆弄相机或手机</strong>。' +
          '沿街多为营业店铺与住宅混合，拍店面没问题，<strong>但不要对着住宅门窗与店内顾客拍</strong>。'
      ],
      photo: '街拍 <strong>3/5</strong>，建筑 <strong>2.5/5</strong>，人像 <strong>2.5/5</strong>。' +
        '壁画与老剧院招牌在入夜后有霓虹街景的味道，但白天街面杂乱、电线与临时招牌很多，' +
        '构图不容易干净——这一站的分数主要来自历史而不是画面。',
      shots: [
        {
          name: 'Ben\'s Chili Bowl 与 Lincoln Theatre 的连排店面（入夜霓虹）',
          desc: '<strong>日落后 20–40 分钟是唯一好时段</strong>：此时 Ben\'s 的招牌与 Lincoln Theatre 的 marquee 已点亮，' +
            '天空仍有蓝底，街面亮度与灯箱亮度接近。' +
            '站在 U Street 北侧人行道向南拍，<strong>35mm 或 50mm 横构图把两家的招牌与「Famous Faces」壁画收在一起</strong>；' +
            '白天来则整条街是平光加杂乱电线，基本拍不出东西。' +
            '<strong>人行道很窄且是主要通行道，三脚架会挡路，手持为主</strong>，ISO 1600–3200 足够。' +
            '坐标为 Ben\'s Chili Bowl 的 OSM 实体节点（node 487493227）。',
          view: [38.917158, -77.028774]
        },
        {
          name: 'African American Civil War Memorial 的荣誉墙',
          desc: '<strong>阴天全天，或清晨 07:30–09:00 的斜射光。</strong>' +
            '重点不是那尊铜像，而是环绕它的弧形荣誉墙——' +
            '<strong>209,145 个名字按团队分区排列，密密麻麻刻满整面</strong>，' +
            '用 35–50mm 沿墙面切线方向拍能表达这个数量级，比正面拍雕像有力得多。' +
            '<strong>正午顶光下浅刻的字会基本消失</strong>，需要低角度侧光或阴天柔光。' +
            '这里是户外公共场地，三脚架无限制，且人流稀疏不会挡到谁。' +
            '坐标为纪念碑 OSM 实体节点（node 358960294）。',
          view: [38.916542, -77.025970]
        }
      ],
      access: {
        visit: '<strong>1.5–2.5 小时（含一顿饭）。</strong>' +
          '分配：African American Civil War Memorial 与荣誉墙 <strong>15–20 分钟</strong>、' +
          '沿 U Street 走到 True Reformer Building 与 Duke Ellington 壁画 <strong>20 分钟</strong>、' +
          'Ben\'s Chili Bowl 吃一顿 <strong>30–45 分钟（含排队）</strong>、' +
          'Lincoln Theatre 外观与沿街历史铭牌 <strong>15 分钟</strong>。' +
          '<strong>不吃饭、只走一遍街区：45 分钟。</strong>' +
          '<strong>博物馆 2026 年 9 月 30 日重开后，馆方建议另留至少 1 小时</strong>；' +
          '再加 Howard Theatre 与 Howard University 校园外观另加 30 分钟',
        book: '<strong>街区、纪念碑与博物馆均不需预约。</strong>' +
          '博物馆的大型团体建议先联系馆方（202-667-2667）。' +
          'Lincoln Theatre 与 Howard Theatre 只在有演出时开放，' +
          '<strong>两处都没有面向游客的常规参观，想进去必须买当晚的演出票</strong>',
        ticket: '<strong>街区与 African American Civil War Memorial：完全免费</strong>，户外无门禁。' +
          '<strong>African American Civil War Memorial Museum：免费</strong>' +
          '（官网票价表原文为「Students: Free　Adults: Free　Seniors: Free」）。' +
          '（据 afroamcivilwar.org，<strong>2026-09-15 核实</strong>）',
        hours: '<strong>街区与纪念碑本体：户外公共空间，24 小时可达、无门禁。</strong>' +
          '<strong>African American Civil War Memorial Museum（1925 Vermont Ave NW）：' +
          '目前因整修闭馆，官方公告「we will officially reopen to the public on Wednesday, September 30, 2026」。</strong>' +
          '<strong>重开后的具体钟点官方称将在近期公布，截至 2026-09-15 未能从官方渠道确认。</strong>' +
          '（另需注意馆方现有页面自相矛盾：Hours of Operation 栏同时挂着' +
          '「Daily: 10 a.m. – 5 p.m.／Monday &amp; Holidays: Closed」与「Indoor exhibit is closed」两行，' +
          '另一页则写「open daily except on Sundays」。' +
          '<strong>三种口径并存，出行前请电 202-667-2667 确认当天是否开门与钟点。</strong>）' +
          '<strong>Ben\'s Chili Bowl（1213 U St NW）：周日至周四 11:00–23:00，周五与周六 11:00–04:00</strong>' +
          '（官网，<strong>2026-09-15 核实</strong>）。' +
          '沿街店铺一般 11:00 之后才开，<strong>上午来这条街基本是关着的</strong>',
        parking: '<strong>强烈不建议开车。</strong>U Street、Vermont Avenue、11th–14th Street 一带' +
          '<strong>绝大部分是 Residential Permit Parking 区，非居民通常限停 2 小时且有时段限制，务必逐根看标杆</strong>。' +
          '这里是全市夜生活最密集的地段之一，<strong>傍晚之后路边车位基本不存在</strong>。' +
          '14th Street 与 U Street 一带有少量商业车库（费率以现场为准，' +
          '<strong>2026 年具体价格未能从官方渠道核实</strong>）。' +
          '本站地铁直达门口，用 Metro 是明显更优解',
        walk: '<strong>Metro 绿线／黄线 U Street／African American Civil War Memorial／Cardozo 站，' +
          '走 10th &amp; U Street 出口，出站即到纪念碑（约 30 米）</strong>；' +
          '13th &amp; U Street 出口更靠近 Ben\'s Chili Bowl 一侧。' +
          '纪念碑到 True Reformer Building（1200 U St）约 <strong>350 米 / 5 分钟</strong>，' +
          '再到 Ben\'s Chili Bowl 约 <strong>150 米 / 2 分钟</strong>；' +
          'Howard Theatre（620 T St NW）从纪念碑走约 <strong>500 米 / 7 分钟</strong>。' +
          '<strong>沿 16th Street 往北到 Meridian Hill Park 约 900 米 / 12 分钟</strong>，' +
          '这两站连着走最顺。全程平地、人行道连续，轮椅与推车可通行'
      },
      notes: [
        '<strong>这一站的内容密度取决于愿不愿意读字。</strong>' +
          'Cultural Tourism DC 的 Heritage Trail 铭牌沿街都有、写得相当扎实，' +
          '<strong>不读铭牌的话这条街就只是一条有几家餐馆的普通街道</strong>',
        '<strong>African American Civil War Memorial Museum 在 2026 年 9 月 30 日之前进不去</strong>，' +
          '但户外的纪念碑与荣誉墙不受影响、照常免费开放。别因为博物馆闭馆就整站跳过',
        '<strong>Lincoln Theatre 与 Howard Theatre 都是现役演出场地，不是可参观的遗址</strong>，' +
          '白天只能看外立面；想进去就买一场演出票，这其实是体验这条街最好的方式',
        '<strong>Ben\'s Chili Bowl 是现金友好但以刷卡为主的小店，座位很少、翻台很快</strong>，' +
          '饭点会排到店外；带大件行李或推车进去会很局促',
        '<strong>这一带住宅与商铺紧邻。</strong>拍店面、壁画、剧院招牌都没问题，' +
          '<strong>但不要对着住宅门窗、也不要把店内正在吃饭的顾客当主体</strong>',
        '入夜后街面热闹、人流稳定，但<strong>周五周六凌晨的散场时段人多口杂</strong>，' +
          '贵重物品收好，不要在路边长时间摆弄器材',
        '<strong>整条街没有公共厕所</strong>，只能靠餐厅与咖啡馆（通常需消费），来之前先解决'
      ],
      images: [
        { url: 'img/african-american-civil-war-memorial-01-ff6ca15d.jpg',
          cap: 'Spirit of Freedom 雕像与荣誉墙 · U.S. Department of Defense / 公有领域' },
        { url: 'img/lincoln-theatre-and-ben-s-chili-bowl-2a30bbb4.jpg',
          cap: 'Lincoln Theatre 与 Ben\'s Chili Bowl 的连排店面 · APK / CC BY-SA 3.0' },
        { url: 'img/ben-s-chili-bowl-night-ff65fbec.jpg',
          cap: '入夜后的 Ben\'s Chili Bowl 招牌 · Kurt Kaiser / CC0' }
      ]
    }
  ]
};
