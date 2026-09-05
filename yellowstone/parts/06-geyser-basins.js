module.exports = {
  id: 'ys-geyser-basins',
  name: 'Yellowstone · 间歇泉群与 West Thumb',
  navName: '间歇泉群',
  color: '#ff8a3d',
  lead: '这一片是全球间歇泉密度最高的地方——地球上过半的间歇泉集中在 Firehole River 沿岸这 30 公里里。' +
    '但 9 月底到 10 月底来拍，真正决定成败的不是构图，是三件已经写死的事：' +
    '<strong>园区主环路 2026 年 10 月 31 日关闭</strong>（11 月 1 日起 Grand Loop 全线禁止民用车辆）、' +
    '<strong>Old Faithful Inn 的 1904 年大堂在 10 月中旬随酒店一起锁门</strong>、' +
    '<strong>Biscuit Basin 自 2024 年 7 月爆炸后至今全域封闭，2026 年 6 月 13 日又炸了一次</strong>。' +
    '另外还有一条几乎没人提的坏消息：<strong>Firehole Lake Drive 因路面被地热烤化，2026 年整季对机动车关闭</strong>，' +
    'Great Fountain Geyser 只能走进去。',
  callouts: [
    {
      type: 'warn',
      title: '2026 道路封闭日期表：10/31 是硬门槛',
      html: '<p>以下全部取自 nps.gov/yell「Park Roads」页（该页 2026/9/1 更新）与 2026 版 ' +
        '<em>Superintendent’s Compendium</em>。Compendium 原文：' +
        '「Starting November 1st until spring opening in April or May, the Grand Loop Road and park entrance roads ' +
        'are closed to wheeled motor vehicle use by the public」——' +
        '<strong>所以「11 月第一个周一」这个流传很广的说法在 2026 年不成立，是 11 月 1 日（周日）</strong>，' +
        '最后一个能开车的整天是 <strong>10 月 31 日</strong>。</p>' +
        '<ul>' +
        '<li><strong>West Entrance → Madison、Madison → Old Faithful、Madison → Norris、Mammoth → Norris、Norris → Canyon</strong>：' +
        '4/17 – <strong>10/31</strong></li>' +
        '<li><strong>South Entrance → West Thumb、West Thumb → Old Faithful（Craig Pass）、West Thumb → Lake</strong>：' +
        '5/8 – <strong>10/31</strong></li>' +
        '<li><strong>East Entrance → Fishing Bridge（Sylvan Pass）、Canyon → Bridge Bay</strong>：5/1 – <strong>10/31</strong></li>' +
        '<li><strong>Canyon → Tower Fall（Dunraven Pass）、Beartooth Highway、Chief Joseph Scenic Byway</strong>：' +
        '5/22 – <strong>10/12</strong>（高海拔，比主环路早关 19 天）</li>' +
        '<li><strong>North Entrance → Northeast Entrance</strong>：全年开放，是 11 月之后唯一能开车进的走廊——但它离本区 100 公里以上，救不了间歇泉群</li>' +
        '</ul>' +
        '<p><strong>Firehole Lake Drive（Great Fountain / White Dome 所在的 3.3 英里单行道）：2026 年整季对机动车关闭。</strong>' +
        '原因是路基下方地热把沥青烤软（2014 年首次因此封路），外加一座 1935 年的桥待修。' +
        '园方发言人 Linda Veress 2026 年确认「目前没有施工，园方正在评估短期与长期方案」。' +
        '<strong>步行与自行车允许通行</strong>。另有 2026/6/9 一位 NPS 道路维护人员的说法称园方接近开放' +
        '「北门到 Firehole Lake」那一段双向通车（仅小车），Great Fountain 所在的南段仍只准步行——' +
        '<strong>这条说法未能从官方渠道确认</strong>。</p>' +
        '<p><strong>Firehole Canyon Drive（2 英里单行道，Firehole Falls）：正常开放</strong>，' +
        'Compendium 明确禁止大巴、拖挂与房车驶入，限速 25 mph。' +
        '<strong>NPS 没有为它单独公布关闭日期</strong>，按 Compendium 的通则应与主环路同步于 11/1 关闭，' +
        '但它是低海拔窄路，提前因降雪临时关闭完全可能。</p>' +
        '<p><strong>施工：Norris–Canyon 与 Norris–Madison 两段目前均无施工项目</strong>' +
        '（已核对 NPS 实时路况数据库 road_construction 表，仅 Mammoth–Tower、Northeast Entrance、' +
        'Fishing Bridge–Bridge Bay、West Entrance–Madison 四段有条目）。' +
        '本区唯一相关的是 <strong>Old Faithful 以南 1.5 英里的 Firehole River Bridge，9 月内最多 15 分钟延误</strong>。</p>' +
        '<p>出发当天务必再查一次：nps.gov/yell/planyourvisit/parkroads.htm，或拨 <strong>(307) 344-2117</strong> 听录音，' +
        '或发短信 <strong>82190 到 888-777</strong> 订阅路况提醒。' +
        '<strong>注意：NPS 那张实时路况地图只覆盖主环路与各入口道，Firehole Lake Drive 与 Firehole Canyon Drive 根本不在图上</strong>，' +
        '想确认这两条路只能打电话或到 Old Faithful 游客中心问 ranger。</p>'
    },
    {
      type: 'warn',
      title: '住宿与设施关门日期：Old Faithful Inn 大堂可能只开到 10/12',
      html: '<p><strong>这是本区最容易踩空的一项</strong>：Old Faithful Inn 的关门日期，NPS 与运营方 Xanterra 给的数字差了整整一周。</p>' +
        '<ul>' +
        '<li><strong>Xanterra 官方口径（yellowstonenationalparklodges.com 开关门日期页，同页还列了 2027 年数据）：' +
        'Old Faithful Inn 2026/5/1 – <strong>2026/10/12</strong>（当日 11:00 退房结束营业）</strong></li>' +
        '<li><strong>NPS 口径（nps.gov/yell「Operating Dates」表，2026/9/3 更新）：Inn 客房末日 <strong>10/18</strong>，' +
        '餐厅 / Bear Paw Deli / 礼品店末日 <strong>10/19</strong></strong></li>' +
        '</ul>' +
        '<p>其余九家住宿两边数字全部对得上（Xanterra 的日期永远比 NPS 的「末日」晚一天，即退房日），' +
        '唯独 Inn 对不上。<strong>无法判断哪一边是过期数据。</strong>' +
        '实务结论：<strong>10 月 12 日之前一定能进大堂；10 月 13–19 日属于赌运气；10 月 19 日之后一定进不去。</strong>' +
        '若行程落在 10/13 之后且这个大堂是你的重点，出发前请直接致电 <strong>307-344-7311</strong> 确认。</p>' +
        '<p>其余关门日（NPS Operating Dates 表，均为「最后营业日」）：</p>' +
        '<ul>' +
        '<li><strong>Old Faithful Lodge Cabins</strong> 客房 10/3、餐厅与烘焙店 10/4</li>' +
        '<li><strong>Old Faithful Snow Lodge</strong> 客房 <strong>10/24</strong>、Obsidian 餐厅 10/25、' +
        'Geyser Grill 与礼品店 <strong>10/31</strong>——<strong>这是本窗口末段唯一还能住在 Old Faithful 的地方</strong></li>' +
        '<li><strong>Lake Yellowstone Hotel</strong> 客房 <strong>10/10</strong>、餐厅与礼品店 10/11；' +
        '<strong>Grant Village</strong> 客房 10/10、餐厅 10/11（这两家一关，West Thumb 附近就没有住宿了）</li>' +
        '<li><strong>Canyon Lodge</strong> 客房 10/24；<strong>Mammoth Hot Springs Hotel</strong> 开到 2027/3/7，本区唯一的全年选项</li>' +
        '<li>游客中心：<strong>Old Faithful Visitor Education Center 开到 10/31</strong>（间歇泉预报靠它）、' +
        'Norris Geyser Basin Museum 10/3、Madison Information Station 10/3、Grant Visitor Center 10/3、' +
        '<strong>West Thumb Information Station 已于 2026/7/13 关闭</strong></li>' +
        '<li>加油：园内所有加油站<strong>全年 24 小时刷卡自助加油</strong>；便利店部分 ' +
        'Old Faithful Upper 开到 10/18、Old Faithful Lower 9/13、Canyon 10/31、Grant 10/13、Mammoth 10/4。' +
        '<strong>Madison 与 Norris 没有加油站</strong>，Madison 最近的油在 West Yellowstone（约 14 英里）或 Old Faithful（约 16 英里）</li>' +
        '<li>Old Faithful Medical Clinic 开到 10/27；Old Faithful General Store 开到 10/18</li>' +
        '</ul>'
    },
    {
      type: 'warn',
      title: '热区安全：地面看着结实，其实是一层壳',
      html: '<p>NPS 安全页原文：「The ground surrounding these features may look solid, but it can be just a thin crust ' +
        'with super-heated water below.」——<strong>这句话是字面意思，不是修辞。</strong>' +
        '园方公开口径：<strong>已有 20 多人因跌入或走进热泉被烫伤致死</strong>，' +
        '同期死于灰熊的是 8 人。USGS 直言热水是「Yellowstone 对游客最严重的威胁」，' +
        '而不是熊、也不是超级火山。</p>' +
        '<p>2024 年 9 月，一名 60 岁游客在 Old Faithful 附近 Mallard Lake Trailhead 一带走出步道，' +
        '<strong>踩穿薄壳、腿部二度与三度烧伤</strong>，直升机转运至爱达荷。' +
        '2021 年一名游客在 Norris 走下木栈道，被判 <strong>7 天监禁加 1,000 美元罚款加 1,000 美元社区赔偿</strong>。' +
        '这不是吓唬人的条文，是实际判决。</p>' +
        '<ul>' +
        '<li><strong>任何情况下不下木栈道。</strong>为了一个机位多站半米也不行——白色硅华壳与实地在低光下几乎无法分辨</li>' +
        '<li>不要碰热泉水与径流；不要抓挠微生物垫（那些颜色就是它们）</li>' +
        '<li>Compendium 明文：<strong>热区内禁止饮食</strong>（除非装在背包类容器内），<strong>水不受限</strong>。' +
        '换句话说，凌晨拿一杯咖啡上栈道是违规的</li>' +
        '<li>宠物全面禁止上木栈道与进入热区，抱着、装推车里都不行</li>' +
        '<li><strong>硫化氢：这是 Norris 的专属问题。</strong>H₂S 与 CO₂ 都比空气重，' +
        '在「异常寒冷且无风」的夜里会在低洼处积到危险浓度。' +
        '2004 年 Norris Geyser Basin 就有<strong>五头野牛因此集体死亡</strong>。' +
        'NPS 的处置口径只有一句：<strong>「If you begin to feel sick while exploring a geyser basin, leave the area immediately.」</strong>' +
        '眼刺痛、头痛、恶心、头晕就立刻往高处、往上风走，不要「再拍一张」</li>' +
        '<li>Compendium 另外两条摄影相关规定：<strong>禁止使用无人值守 / 自动 / 移动侦测 / 遥控的拍摄设备</strong>' +
        '（不能架好相机定时离开），以及<strong>全园禁止用人造光观察野生动物，含闪光灯</strong></li>' +
        '</ul>'
    },
    {
      type: 'tip',
      title: '蒸汽 vs 颜色：本区的核心矛盾与决策规则',
      html: '<p>冷空气让热泉水汽瞬间凝结成浓白蒸汽。这件事同时是本区<strong>最好的礼物</strong>和' +
        '<strong>最大的破坏</strong>——它把逆光的间歇泉盆地变成史诗，也把 Grand Prismatic 的彩环彻底盖住。' +
        '<strong>这两个目标在物理上不可兼得，必须分时段执行。</strong></p>' +
        '<p><strong>规则一：最冷的那个清晨（日出前后 90 分钟），只去拍蒸汽题材。</strong>' +
        'Upper Geyser Basin、Norris、West Thumb 湖畔、Fountain Paint Pot、Great Fountain。' +
        '此时低角度阳光穿过蒸汽形成体积光，是本区的招牌画面。</p>' +
        '<p><strong>规则二：Grand Prismatic Overlook 只在一天中太阳最高、气温最高的那段去。</strong>' +
        '实算（44.52°N，MDT，未考虑地形遮挡）：</p>' +
        '<ul>' +
        '<li><strong>9 月 25 日</strong>：正午太阳高度 <strong>44.4°</strong>（13:15）。' +
        '高度 ≥35° 的时段是 <strong>10:57–15:33</strong>，≥40° 是 <strong>11:43–14:46</strong>。' +
        '→ 可用窗口 <strong>11:00–15:00</strong>，核心 11:45–14:45。夏天流传的「11:00–14:00」在这一天仍然成立</li>' +
        '<li><strong>10 月 22 日</strong>：正午太阳高度只有 <strong>34.2°</strong>——<strong>全天都到不了 35°</strong>。' +
        '≥30° 只有 <strong>11:30–14:45</strong>，≥25° 是 10:40–15:35。' +
        '→ 可用窗口收缩到 <strong>12:00–14:30</strong>。' +
        '而且因为一天中的气温峰值在 14:00–16:00，<strong>10 月请优先取窗口的后半段（13:00–14:30）</strong>：' +
        '此时太阳高度只比正午低 1–2°，但气温高好几度，蒸汽明显更薄。' +
        '<strong>「夏天的 11:00–14:00」在 10 月底是错的，11:00 时太阳只有 27°。</strong></li>' +
        '<li><strong>10 月 31 日</strong>（最后一个能开车的日子）：正午 <strong>31.2°</strong>，' +
        '≥30° 只剩 <strong>12:14–13:59</strong>，不到两小时</li>' +
        '</ul>' +
        '<p><strong>规则三：风比气温更能决定成败。</strong>10–15 mph 的风能在 5°C 的上午吹开 Grand Prismatic；' +
        '而一个无风的 5°C 上午可能整天糊死。出发前看 Old Faithful 的 NPS 网络摄像头与风力预报，' +
        '<strong>把 Overlook 排成一个「机动项」——哪天风大就哪天去</strong>，不要绑死日期。</p>' +
        '<p><strong>日出日落实算（Old Faithful，44.4605°N / −110.8281，MDT = UTC−6）：</strong></p>' +
        '<ul>' +
        '<li><strong>9/25</strong>：民用曙光 06:45 / 日出 <strong>07:13</strong>（方位 90°）/ ' +
        '日落 <strong>19:17</strong>（方位 270°）/ 民用暮光 19:45</li>' +
        '<li><strong>10/22</strong>：民用曙光 07:18 / 日出 <strong>07:46</strong>（方位 105°）/ ' +
        '日落 <strong>18:29</strong>（方位 255°）/ 民用暮光 18:58</li>' +
        '<li><strong>10/31</strong>：日出 07:58 / 日落 18:16</li>' +
        '<li><strong>夏令时：2026 年美国夏令时于 11 月 1 日（周日）02:00 结束。' +
        '这一天在本窗口之外，甚至在道路关闭日 10/31 之后——整个行程不会遇到调表。</strong></li>' +
        '</ul>' +
        '<p>注意 9/25 到 10/22 之间，<strong>日出推迟 33 分钟、日落提前 48 分钟，白昼缩短 81 分钟</strong>。' +
        '10 月底的一天实际可用光只有约 10 小时 40 分。</p>'
    },
    {
      type: 'info',
      title: '低温、器材、门票、信号',
      html: '<p><strong>海拔与气温。</strong>Old Faithful / Upper Geyser Basin 海拔约 <strong>7,300–7,500 英尺（2,225–2,290 米）</strong>，' +
        'Great Fountain Geyser 实测 7,349 英尺。NOAA 1991–2020 常年值：' +
        '<strong>9 月均高 18°C / 均低 −1°C；10 月均高 10°C / 均低 −6°C</strong>。' +
        '9 月下旬实际区间通常是白天 14–20°C、夜间 −2 至 +2°C；' +
        '10 月下旬白天 5–10°C、夜间 <strong>−8 至 −3°C</strong>。' +
        '统计上 Old Faithful <strong>10 月平均有 28.2 个夜晚在冰点以下（一共 31 天）</strong>——' +
        '意思是十月的清晨结冰不是可能性，是默认值。10 月常年降雪 9 英寸。</p>' +
        '<ul>' +
        '<li><strong>电池崩塌。</strong>锂电在 0°C 以下容量骤降，−5 至 −10°C 的清晨大约只剩标称的 40–60%。' +
        '<strong>带 3 块以上备电，全部贴身放在冲锋衣内层口袋</strong>。' +
        '「没电」的冷电池捂热后通常能再撑一轮，不要当场丢掉</li>' +
        '<li><strong>镜头结露。</strong>从 −5°C 的栈道直接走进 20°C 的 Old Faithful Inn 大堂或 Snow Lodge 餐厅，' +
        '镜片会瞬间起雾，更麻烦的是<strong>机身内部也会凝水</strong>。' +
        '正确做法：<strong>进门之前</strong>把相机装进密封袋挤出空气，室内静置 30–60 分钟再取出。' +
        '反方向（暖到冷）没有这个问题</li>' +
        '<li><strong>蒸汽本身就在给你的前镜片加湿。</strong>站在喷气口下风侧几十秒镜片就花了。' +
        '<strong>带 4 块以上超细纤维布轮换</strong>，湿布在低温下擦不干净。UV 镜在这里有实际价值（脏了直接换）</li>' +
        '<li><strong>木栈道在天亮前结冰。</strong>热泉径流淌上木板再冻住，形成透明薄冰，头灯下看不出来。' +
        '带一副轻量冰爪（microspikes）比带三脚架更能提高清晨出片率</li>' +
        '<li>三脚架：Compendium 把 tripod / monopod 明确归入「handheld equipment」，' +
        '<strong>普通游客在园内使用三脚架不需要许可</strong>。但木栈道很窄，请靠边、不要挡人</li>' +
        '</ul>' +
        '<p><strong>门票。</strong>私家车 7 日票 $35，America the Beautiful 年票 $80。' +
        '<strong>持年票直接刷卡入园，不再另付任何费用。</strong>' +
        '特别注意一条 2026 年的新规：' +
        '<strong>非美国居民（16 岁以上）每人须另付 $100 的 nonresident fee，' +
        '但「unless admitted with an Annual or America the Beautiful Pass」——持年票即豁免</strong>。' +
        '所以这张年票在本行程里省的不止 $35。另外 <strong>10 月 27 日（Theodore Roosevelt 生日）是 2026 年免费入园日</strong>。' +
        '从 South Entrance 进出会穿过 Grand Teton，那是<strong>另一个公园、另一份门票</strong>（年票同样覆盖）。</p>' +
        '<p><strong>信号与网络。</strong>NPS 官方口径：' +
        '基站设在 Mammoth、Old Faithful、Canyon Village、Grant Village、Lake Village 与 Mount Washburn，' +
        '「provide service to most developed areas」。实务上：' +
        '<strong>Old Faithful 村内有信号（Verizon 最好，AT&amp;T 次之），走进 Upper Geyser Basin 深处或 Norris、' +
        'Midway、Fairy Falls 步道就基本没有</strong>。' +
        '<strong>Madison 不在基站名单里，那一带按没有信号准备。</strong>' +
        '免费公共 Wi-Fi 只有三处：Albright Visitor Center、<strong>Old Faithful Visitor Education Center</strong>、' +
        'West Yellowstone Visitor Information Center。' +
        '<strong>务必离线下载全园地图</strong>，导航 App 会在半路失效。' +
        '园内<strong>没有任何公共 EV 充电桩</strong>，只有 Xanterra 几家旅馆的 Level 2 慢充。</p>'
    }
  ],
  spots: [
    {
      id: 'ys-norris-geyser-basin',
      n: 1,
      name: '诺里斯间歇泉盆地',
      en: 'Norris Geyser Basin',
      score: 4.5,
      tldr: '全园最热、最酸、变化最快的盆地，冷晨蒸汽最壮观；但 Steamboat 2026 年只喷过一次，别抱期待。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '硫化氢风险', c: 'risk' },
        { t: '博物馆 10/3 关', c: 'risk' },
        { t: '两条环线共 2.25 英里', c: 'paid' }
      ],
      highlights: [
        '<strong>Yellowstone 最热、最酸、也最不稳定的热区</strong>。NPS 原话：许多热泉与喷气孔的温度' +
          '<strong>超过沸点（200ºF / 93ºC）</strong>。它坐落在三条大断层与 64 万年前 Yellowstone Caldera 环形断裂的交汇处',
        '这里每年都会「换脸」。NPS 用了一个专有词叫 <strong>thermal disturbance</strong>：' +
          '清澈的池子会突然变浑、剧烈沸腾，甚至临时变成间歇泉；原有的间歇泉停喷或改变周期；新泉眼凭空出现。' +
          '一次扰动持续几天到一周多，<strong>成因至今没有完全搞清楚</strong>。' +
          '摄影上的含义是：<strong>你在网上看到的任何一张 Norris 照片都可能已经不存在了</strong>',
        '<strong>Steamboat Geyser 在这里，世界现存最高的活间歇泉（主喷可达 300 英尺 / 90 米）。' +
          '但现实预期是：你看不到。</strong>它在 2018 至 2023 年初狂喷了 165 次，' +
          '而 2025 年全年只喷了 2 次（2/3、4/14），<strong>2026 年至今只喷过 1 次——2 月 27 日 19:01</strong>。' +
          'USGS 每月简报 7 月、8 月都写着「only minor eruptive activity」。' +
          'USGS 的 Michael Poland 说得很直白：<strong>「the sequence of frequent, predictable eruptions is probably over」</strong>。' +
          '按最近 100 次间隔统计，中位数 10 天、均值 22 天、最长纪录 261 天——' +
          '<strong>把它当成一个巨大的喷气孔来拍，喷发就当中彩票</strong>',
        '两条环线：<strong>Porcelain Basin</strong>（较短，约 0.75 英里，几乎无树的白色酸性荒原，' +
          '是全园视觉上最「外星」的地方）与 <strong>Back Basin</strong>（约 1.5 英里，林间穿行，' +
          'Steamboat、Echinus Geyser、Emerald Spring 都在这条上）。NPS 给的游览时长是 30–90 分钟',
        '颜色全部来自嗜热微生物，且直接对应水温：<strong>黄色含硫（60–83°C，就是它们在制造那股臭鸡蛋味）、' +
          '红棕色含铁与高浓度砷（60°C 以下）、翠绿色藻垫（56°C 以下）、墨绿黑色 Zygogonium 藻（更凉）</strong>。' +
          '拍局部时这套对应关系很有用——颜色即温度梯度'
      ],
      photo: '风光 <strong>4.5/5</strong>，抽象 / 局部 <strong>5/5</strong>，人像 <strong>2/5</strong>。' +
        'Porcelain Basin 那片白色酸壳配彩色径流是全园最强的抽象素材；扣分在于没有一个「标志性单体」可拍' +
        '（Steamboat 基本不喷），且博物馆 10 月 3 日就关门，之后连厕所都没有。',
      shots: [
        {
          name: 'Porcelain Basin 观景平台俯瞰（主机位）',
          park: [44.72622, -110.70074],
          view: [44.72828, -110.70397],
          desc: '从博物馆西侧下坡即到，是全区唯一能一眼收下整片白色酸壳荒原的高点。' +
            '<strong>最佳时段 07:15–09:00（9 月底）/ 07:50–09:30（10 月底）</strong>：' +
            '低角度阳光斜射，蒸汽被打亮成一片体积光，同时白壳还没被顶光拍平。' +
            '<strong>16–24mm 拍全景纵深</strong>（前景放彩色径流沟，中景蒸汽带，远景林线）；' +
            '<strong>70–200mm 压缩</strong>把七八处喷气孔的蒸汽柱叠成一片，是这里最容易出片的做法。' +
            '正午顶光会把白壳拍成一片死白，反差全无，<strong>不要在 11:00–14:00 来拍这里</strong>。' +
            '偏振镜在这里要慎用——它会削掉蒸汽的通透感。'
        },
        {
          name: 'Back Basin · Emerald Spring 与 Steamboat 喷气孔',
          view: [44.72565, -110.70427],
          desc: 'Emerald Spring 因池底硫黄的黄色与深水的蓝叠加成罕见的祖母绿，' +
            '<strong>是这条环线上最值得单拍的一池</strong>，35–85mm 俯视构图，正午前后（太阳最高时）颜色最饱和——' +
            '这是本区少数「反规则」的点位，因为它是个小池子，蒸汽量不足以毁掉画面。' +
            '再往南 300 米是 Steamboat（44.72350, −110.70303），' +
            '<strong>即使不喷，它两个泉眼持续吐出的蒸汽柱在逆光下也很可观</strong>，用 70–200mm 拍蒸汽的形态变化。'
        },
        {
          name: 'Norris Geyser Basin Overlook（路边高点）',
          view: [44.74121, -110.71219],
          desc: '在 Grand Loop Road 上、盆地以北约 1.8 公里的一处路边高点，' +
            '<strong>是唯一不用下车、能远眺整个 Norris 盆地蒸汽云的机位</strong>。' +
            '适合 <strong>100–300mm</strong> 压缩「一整片林子在冒烟」的画面，' +
            '也是 Steamboat 万一喷发时最安全的远观位置（历史照片多从这里拍）。' +
            '清晨逆光效果最好；下午侧逆光也可用。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '<strong>年票覆盖，不另收费</strong>',
        hours: '<strong>盆地本身没有门禁，全天可入</strong>（NPS 该步道页标注 Season: Spring, Summer, Fall，' +
          'Time of Day: Any Time）。<strong>Norris Geyser Basin Museum 与 Norris Park Store 最后营业日均为 2026/10/3</strong>，' +
          '之后厕所与讲解台全部关闭。冬季（11 月起）此处只能靠雪地摩托抵达',
        parking: '博物馆东侧有多个免费停车场（本页坐标取 44.72622, −110.70074）。' +
          '<strong>停车场是本区已知的地热破坏点之一</strong>，路面有沉降坑，慢行',
        walk: '停车场到 Porcelain Basin 观景平台约 <strong>150 米 / 3 分钟</strong>，' +
          '但<strong>从博物馆下到盆地的那段坡陡且不平</strong>（NPS 无障碍说明明确提示）。' +
          '走完两条环线约 <strong>2.25 英里 / 3.6 公里，1.5–2 小时</strong>'
      },
      notes: [
        '<strong>硫化氢在这里是真问题，而且冷晨最危险。</strong>2004 年一个「异常寒冷且无风」的夜晚过后，' +
          'Norris 有五头野牛因 CO₂ 与 H₂S 在近地面积聚而死。' +
          '这两种气体都比空气重、往低处沉——<strong>而你想拍的那种无风冷晨正好是最容易积气的条件</strong>。' +
          '感到眼刺痛、头痛、恶心就立刻离开低洼段',
        '硫化氢会让银饰发黑，也会腐蚀相机的电子触点。回车后把器材从包里拿出来通风，别闷一整晚',
        '<strong>Norris 的木栈道历史上因地面过热被烧焦而整段拆改</strong>（2018 年 Porcelain Basin 就有一段整体挪了 3 英尺）。' +
          '如果现场有围挡，那是真的危险，不要绕过去',
        '这一带是灰熊活动区，10 月是熊进食高峰期（hyperphagia）。<strong>停车场到盆地这段虽然人多，仍建议随身带熊喷雾</strong>' +
          '（Old Faithful 与 Canyon 有租借点，但 Norris 没有；Old Faithful 的 Bear Spray Rental Yurt 最后营业日 10/3）',
        '<strong>Norris–Canyon 与 Norris–Madison 两段公路 2026 年均无施工项目</strong>（已核对 NPS 实时施工数据库），' +
          '两段都开到 10/31',
        'Norris 到 Old Faithful 单程约 <strong>50 公里 / 1 小时</strong>（经 Madison），' +
          '<strong>不要把 Norris 的日出和 Old Faithful 的日出排在同一天</strong>'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Norris_Geyser_Basin_--_2022_--_2690.jpg',
          cap: 'Porcelain Basin 白色酸壳荒原 · Dietmar Rabich / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Steam_shadows%2C_Norris_Geyser_Basin_%2836f97b50-1dd8-b71b-0b68-82d8b2bcca66%29.jpg',
          cap: '蒸汽在地面投下的影子 · Neal Herbert / NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Steamboat_Geyser_steam_phase_viewed_from_the_Norris_Geyser_Basin_Overlook_%2848678874817%29.jpg',
          cap: '从 Norris Overlook 远观 Steamboat 蒸汽相 · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-firehole-canyon-drive',
      n: 2,
      name: '火洞峡谷车道',
      en: 'Firehole Canyon Drive',
      score: 3.5,
      tldr: '2 英里单行道，40 英尺瀑布配 800 英尺厚的流纹岩崖壁；停车位极少，10 分钟就能拍完。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '禁大巴 / 拖挂 / 房车', c: 'risk' },
        { t: '车位极少', c: 'risk' },
        { t: '关闭日期未公布', c: 'risk' }
      ],
      highlights: [
        '<strong>我把它单列成一个条目而不是并入 Fountain Paint Pot</strong>——理由是它在 Madison Junction 南侧 0.5 英里，' +
          '离 Fountain Paint Pot 有 14 公里，题材（瀑布与火山岩崖壁）也和热区完全不同，' +
          '合并会让地图针脚落错位置',
        '<strong>Firehole Falls 落差约 40 英尺（12 米）</strong>，Firehole River 在这里切进一段' +
          '<strong>厚达 800 英尺（240 米）的流纹岩熔岩流</strong>。' +
          '这是本区唯一一处「峡谷 + 瀑布 + 深色岩壁」的组合，色调与遍地白壳的间歇泉盆地形成强烈对比',
        '单行道全长 2 英里，方向为南下（从 Madison Junction 一侧进）。' +
          '<strong>Compendium 明文禁止大巴、拖挂车与房车驶入</strong>，限速 25 mph。' +
          '路窄、可停车的路肩非常少，是这里最大的执行障碍',
        '<strong>Firehole Swim Area 目前关闭</strong>（NPS Current Conditions 页原文「Closed. ' +
          'Estimated opening date: no earlier than late summer/early fall.」）。' +
          '对摄影没有影响，但意味着那一段的停车位也用不了'
      ],
      photo: '风光 <strong>3.5/5</strong>，长曝水流 <strong>4/5</strong>，人像 <strong>2/5</strong>。' +
        '峡谷本身在阴天与清晨柔光下最好拍，是本区唯一能做长曝丝滑水流的地方；' +
        '扣分在于规模不大、机位单一、且几乎没有可站位的空间。',
      shots: [
        {
          name: 'Firehole Falls 路边观景点',
          park: [44.62947, -110.86284],
          view: [44.62881, -110.86333],
          desc: '瀑布正对面的路肩观景点，走几步就到。' +
            '<strong>峡谷东西两侧崖壁很高，直射阳光只在中午前后短暂进入谷底</strong>——' +
            '这反而是好事：<strong>阴天或 09:00 之前的全阴影状态是这里最佳的光线</strong>，' +
            '光比小、水面无高光溢出。' +
            '<strong>24–70mm</strong> 收瀑布加两侧岩壁；<strong>ND8–ND64 加 f/11，快门 1/2–2 秒</strong>做水流丝化。' +
            '10 月是枯水期，水量比夏天小，不要指望汹涌。<strong>栏杆是可用的稳定支点</strong>，' +
            '路肩太窄不适合架三脚架。'
        },
        {
          name: '峡谷段路侧崖壁（车道中段）',
          view: [44.62805, -110.86076],
          desc: '整条单行道穿行在流纹岩壁之间，<strong>真正值得拍的其实是崖壁本身的柱状节理与色带</strong>，' +
            '而不是瀑布。<strong>35–85mm 拍岩壁纹理的抽象</strong>，' +
            '<strong>日落前 1 小时（9/25 约 18:15 / 10/22 约 17:30）西侧崖壁被暖光照亮</strong>，' +
            '东侧仍在阴影里，是唯一有明确层次的时刻。此段几乎无处停车，' +
            '<strong>看到路肩就停，不要在道上慢行找位置（后车看不见你）</strong>。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '<strong>年票覆盖</strong>',
        hours: '无门禁。<strong>NPS 没有为 Firehole Canyon Drive 单独公布 2026 年季节性关闭日期</strong>——' +
          '按 Superintendent’s Compendium 的通则，它应与 Grand Loop 同步于 <strong>11 月 1 日</strong>关闭；' +
          '<strong>但这一点未能从官方渠道单独确认</strong>，且窄路遇早雪可能提前关闭。' +
          '它也不在 NPS 那张实时路况地图上，只能打 (307) 344-2117 问',
        parking: '<strong>没有正式停车场，只有若干极小的路肩</strong>。瀑布处的路肩最大但也只容几台车。' +
          '禁止大巴、拖挂与房车进入',
        walk: '停车即到，全程步行不超过 30 米。开完整条路加拍摄约 <strong>20–40 分钟</strong>'
      },
      notes: [
        '<strong>单行道，方向不可逆</strong>。错过瀑布只能开出去再从 Madison Junction 绕回来（约 10 分钟）',
        '限速 25 mph，路面窄且有急弯，秋季早晨背阴段可能结冰',
        'Madison Junction 附近的 <strong>Madison Information Station 最后营业日 10/3</strong>，' +
          'Madison Campground 开到 10/17。此后这一带最近的厕所在 Old Faithful 或 West Yellowstone',
        '<strong>Madison 一带没有加油站，也基本没有手机信号</strong>。加油请在 West Yellowstone 或 Old Faithful 解决',
        'West Entrance Road（West Yellowstone–Madison）2026 年 8/17 至 9 月初有夜间 21:30–05:00 的' +
          '<strong>钻探取芯作业，最多 15 分钟延误</strong>；若你在 9 月下旬清晨从 West Yellowstone 进园，' +
          '这项作业届时应已结束，但值得出发前确认一次'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Firehole_Falls_%2815_June_2023%29_%28Firehole_River%2C_Yellowstone%2C_Wyoming%2C_USA%29_1.jpg',
          cap: 'Firehole Falls · James St. John / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Firehole_River_%28Firehole_Canyon%2C_Yellowstone%2C_Wyoming%2C_USA%29_10.jpg',
          cap: '峡谷段的流纹岩崖壁 · James St. John / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Winter_at_Firehole_Falls_%2824232310646%29.jpg',
          cap: '低温季节的 Firehole Falls · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-fountain-paint-pot',
      n: 3,
      name: '喷泉泥浆池与下间歇泉盆地',
      en: 'Fountain Paint Pot · Lower Geyser Basin',
      score: 3.5,
      tldr: '0.5 英里木栈道一次看齐四类热泉，泥浆池是全园最好拍的一处；秋季泥浆变稠，气泡形态最漂亮。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '0.5 英里平缓栈道', c: 'free' },
        { t: '正规停车场', c: 'free' },
        { t: '题材偏小', c: 'risk' }
      ],
      highlights: [
        '<strong>这是全园唯一一条能在半英里内集齐四种水热类型的栈道</strong>：' +
          '喷泉（Fountain / Clepsydra Geyser）、热泉（Silex Spring）、泥浆池（Fountain Paint Pot）、' +
          '喷气孔（Fumarole）。教科书式的地质剖面，对讲故事的照片很有价值',
        '<strong>Fountain Paint Pot 的泥浆稠度随季节变化：春天融雪多、泥稀，秋天水少、泥稠。</strong>' +
          '9 月底到 10 月正是一年里泥最稠的时候——<strong>气泡鼓起再破裂的形态最完整、最容易抓拍</strong>，' +
          '这是选在这个窗口来的一个实际好处',
        '<strong>Clepsydra Geyser 几乎持续喷发</strong>（名字来自希腊语「水钟」，因为它曾经每三分钟准时喷一次）。' +
          '它是本区少数「不用等」的间歇泉，任何时候到都在喷，' +
          '<strong>是给整片盆地照片加一个动态主体的可靠办法</strong>',
        '<strong>Fountain Geyser 是 NPS 列出的六个预报间歇泉之外的常规喷发者</strong>，' +
          '平均间隔 4.5–7 小时、持续 25–50 分钟、高约 50 英尺（15 米）。它不在预报名单上，靠碰',
        '栈道边有一片著名的「<strong>bobby socks trees</strong>」——' +
          '被富含二氧化硅的热水浸泡的死树，硅质从根部往上沉积把树干下段染成白色，像穿了白袜子。' +
          '逆光剪影配蒸汽是这里辨识度最高的一张'
      ],
      photo: '风光 <strong>3/5</strong>，微距 / 局部 <strong>4.5/5</strong>，人像 <strong>2/5</strong>。' +
        '泥浆池的高速抓拍与 bobby socks trees 的剪影是这里的两张牌；' +
        '扣分在于整体规模小、大景构图缺乏纵深，容易变成「到此一游」。',
      shots: [
        {
          name: 'Fountain Paint Pot 泥浆池（高速抓拍）',
          park: [44.54792, -110.80788],
          view: [44.55061, -110.80624],
          desc: '从停车场沿栈道上坡约 200 米。<strong>这是全区最需要「快门优先」思维的机位</strong>：' +
            '<strong>1/1000 秒以上冻结泥浆气泡爆开的瞬间</strong>，' +
            '或 <strong>1/15–1/30 秒</strong>让泥浆拉出流动感——两种都成立，但要分开拍。' +
            '<strong>100–200mm 或 100mm 微距</strong>，只取一小块泥面做纯抽象。' +
            '连拍模式必开，气泡破裂无法预判。<strong>光线上要顺光或侧顺光</strong>（上午 09:00–11:00 最好），' +
            '逆光时泥浆是深灰色，什么细节都没有。<strong>泥点会溅到镜头上，装 UV 镜。</strong>'
        },
        {
          name: 'Silex Spring 与 bobby socks trees 逆光剪影',
          view: [44.55020, -110.80592],
          desc: '<strong>日出后 30–90 分钟（9/25 约 07:45–08:45 / 10/22 约 08:15–09:15）</strong>，' +
            '太阳方位 90°–105° 正好在栈道东侧，<strong>把白袜子树与蒸汽同时打成逆光</strong>。' +
            '<strong>24–70mm，把树干放在画面边缘做前景框，让蒸汽占据中间的高光区</strong>。' +
            '测光按最亮的蒸汽给 +1 至 +1.7 EV，树干自然压成剪影。' +
            'Silex Spring 本身在正午前后颜色最好（蓝绿到橙的完整温度梯度），可以同一天来两趟。'
        },
        {
          name: 'Clepsydra Geyser 持续喷发',
          view: [44.55114, -110.80894],
          desc: '栈道最西端。<strong>它几乎全天在喷，是本条目最可靠的动态主体</strong>。' +
            '<strong>70–200mm 压缩</strong>把它的水柱与背后 Fountain Geyser 的池子叠在一起；' +
            '或用 <strong>16–35mm 贴近栈道栏杆</strong>拍水柱撑满画面的广角冲击。' +
            '<strong>下午晚些时候（日落前 1–1.5 小时）西向逆光</strong>会让水柱变成一团金色，' +
            '这是这个点位一天里最好的 20 分钟。快门 1/500 以上冻结水珠。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '<strong>年票覆盖</strong>',
        hours: '无门禁，全天可入。所在的 Madison–Old Faithful 段公路 2026 年开放至 <strong>10/31</strong>',
        parking: '<strong>Fountain Paint Pot Parking 是正规硬化停车场</strong>（44.54792, −110.80788），' +
          '容量在本区算大，10 月几乎不会满。这里也是 Firehole Lake Drive 北门旁最方便的停车点',
        walk: '停车场到栈道起点 <strong>50 米</strong>；整条环线 <strong>0.5 英里 / 0.8 公里，30–45 分钟</strong>，' +
          '上坡段平缓，是本区最省力的一条'
      },
      notes: [
        '整条栈道<strong>没有遮挡也没有座椅</strong>，10 月清晨风大时体感极低，戴上手套再出发（触屏手套在这里很值）',
        '泥浆池的泥会溅到栏杆与地板上，<strong>别把相机包放地上</strong>',
        '<strong>此处是本区离 Firehole Lake Drive 北门最近的正规停车场</strong>。' +
          '但 2026 年 Firehole Lake Drive 对机动车关闭，Great Fountain 需从<strong>南门</strong>步行进入，' +
          '不要从这里走（从北门走到 Great Fountain 要绕整条 3.3 英里单行道）',
        '这里有明确的野牛活动，秋季常见牛群直接躺在栈道旁。' +
          '<strong>NPS 规定与野牛保持 25 码（23 米）</strong>，牛挡路就原路退回，不要绕，也不要试图从栈道边下去',
        '10 月的清晨栈道结冰概率很高，木板上的透明薄冰在头灯下看不见'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Fountain_Paint_Pot_%2816245193997%29.jpg',
          cap: 'Fountain Paint Pot 泥浆池 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/%22Bobby_socks_trees%22_at_Fountain_Paint_Pots_%284b18bc86-3e16-4114-b8bb-f8611640bd89%29.jpg',
          cap: '「白袜子树」bobby socks trees · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Fountain_Geyser_--_2022_--_2443.jpg',
          cap: 'Fountain Geyser 喷发 · Dietmar Rabich / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'ys-firehole-lake-drive',
      n: 4,
      name: '火洞湖车道 · 大喷泉与白丘间歇泉',
      en: 'Firehole Lake Drive · Great Fountain Geyser & White Dome Geyser',
      score: 4,
      tldr: '全园唯一「可预报的大间歇泉正好赶上日落」的机位；但 2026 年整季禁车，单程要走 1.6 公里。',
      tags: [
        { t: '2026 全季禁车', c: 'risk' },
        { t: '单程步行 1.6 公里', c: 'risk' },
        { t: '需摸黑走回', c: 'risk' },
        { t: '年票覆盖', c: 'free' }
      ],
      highlights: [
        '<strong>Great Fountain Geyser 是 Lower Geyser Basin 里唯一被 NPS 正式预报的间歇泉</strong>。' +
          'NPS 公布参数：<strong>平均间隔 11 小时 30 分（±2 小时）</strong>，' +
          '<strong>持续 45–60 分钟</strong>，<strong>高 70–200+ 英尺（22–60+ 米）</strong>，' +
          '喷发由一连串「爆发—静止」的循环组成，通常第一波最高',
        '<strong>它是本区唯一能主动「安排」到日落的大间歇泉，这才是它的真正价值。</strong>' +
          '做法：早上到 Old Faithful 游客中心抄下当天 Great Fountain 的预报时刻，' +
          '如果预报窗口的中心落在日落前后 2 小时内，这一晚就值得押它。' +
          '<strong>预报可以现场收窄</strong>——NPS 与观测者的共识是：' +
          '<strong>喷发前 70–100 分钟泉池开始溢流</strong>，此后约半小时池边开始出现小气泡，' +
          '气泡长到 3 英尺（1 米）高就是喷发开始。' +
          '<strong>看到溢流，就能把 ±2 小时收窄到大约 ±15 分钟</strong>',
        '它喷发时水会顺着泉口周围<strong>层层叠叠的硅华台阶</strong>漫下来，' +
          '而这些浅水台阶在日落时会变成一整片反射晚霞的镜面。' +
          '<strong>「Great Fountain 台阶日落」是本条目的招牌构图，即使不喷发也成立</strong>',
        '同一条路上的 <strong>White Dome Geyser 每 15–30 分钟喷一次，高约 30 英尺（9 米）</strong>，' +
          '泉锥是一个高约 12 英尺、造型极辨识的白色硅华丘。' +
          '<strong>等 Great Fountain 的空档就拍它，几乎不会白等</strong>',
        '<strong>坏消息也在这里：2026 年整季，Firehole Lake Drive 对机动车关闭。</strong>' +
          '原因是路基下方的地热持续把沥青烤软（2014 年第一次因此封路），加上一座 1935 年的桥待修。' +
          '园方发言人 2026 年的口径是「目前没有施工，园方正在评估短期与长期方案」。' +
          '<strong>步行与自行车允许通行</strong>，且路上几乎无人——' +
          '这条路现在反而是本区最安静的地方'
      ],
      photo: '风光 <strong>4.5/5</strong>，间歇泉动态 <strong>4.5/5</strong>，人像 <strong>1.5/5</strong>。' +
        '「大喷发 + 日落 + 反光台阶」的组合在全园独一份；' +
        '综合分被 2026 年的禁车严重拉低——所有拍摄都要按「负重徒步 3.2 公里往返、摸黑走回」来规划。',
      shots: [
        {
          name: 'Great Fountain Geyser 台阶日落（招牌机位）',
          view: [44.53574, -110.80039],
          desc: '路侧原有的观景点，在泉口<strong>南南西方向约 95 米</strong>，视线朝北北东。' +
            '<strong>9/25 日落 19:17（方位 270°）/ 10/22 日落 18:29（方位 255°）</strong>，' +
            '太阳在你的左后方——<strong>泉锥与台阶得到正面暖光，而浅水台阶同时反射西边的晚霞，' +
            '这就是那批经典照片的成因</strong>。' +
            '<strong>最佳时段：日落前 30 分钟到日落后 25 分钟</strong>（蓝调时段台阶会变成粉紫色）。' +
            '<strong>16–35mm 贴近台阶做前景倒影</strong>是首选；' +
            '有喷发时换 <strong>24–70mm</strong> 让水柱占画面高度的三分之二。' +
            '喷发瞬间快门 <strong>1/500 以上</strong>冻结水珠；' +
            '无喷发时用 <strong>0.5–2 秒</strong>拍台阶浅水的镜面效果。' +
            '<strong>三脚架在这里是必需的</strong>（蓝调时段手持没戏），路面宽、随便架。' +
            '（方位与距离由 OSM 坐标推算。）'
        },
        {
          name: 'White Dome Geyser 泉锥',
          view: [44.53934, -110.80284],
          desc: '沿路再往北约 400 米。<strong>每 15–30 分钟一次，是等待期间最好的消遣</strong>。' +
            '这个泉锥形状极好，<strong>70–200mm 从南侧压缩拍它孤立在荒地上的剪影</strong>，' +
            '日落前 40 分钟侧逆光最佳。' +
            '喷发只有 2 分钟左右，<strong>提前把构图、对焦、参数全部锁死，看到水起来就连拍</strong>。' +
            '注意从这里走回南门是 2.0 公里，摸黑走回请预留 25–30 分钟。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '<strong>年票覆盖</strong>',
        hours: '<strong>2026 年整季对机动车关闭，仅允许步行与自行车。</strong>' +
          '无门禁时间限制。有未经证实的说法称园方可能开放「北门到 Firehole Lake」一段双向小车通行，' +
          '<strong>但 Great Fountain 与 White Dome 所在的南段无论如何仍是步行区</strong>。' +
          '<strong>这条路不在 NPS 实时路况地图上</strong>，出发前只能拨 (307) 344-2117 或问 ranger',
        parking: '<strong>南门（44.53533, −110.81772，与 Grand Loop Road 的路口）旁只有一小片非正式路肩，' +
          '大约能停几台车，无 OSM 实体、地图无针脚。</strong>' +
          '备选是 <strong>Fountain Paint Pot Parking（44.54792, −110.80788）</strong>，' +
          '但那里靠近北门，走过去要绕整条 3.3 英里的路，不要选',
        walk: '<strong>南门到 Great Fountain 沿路 1,586 米（约 1.0 英里），步行 20–25 分钟；' +
          '再到 White Dome 追加 374 米。往返 Great Fountain + White Dome 约 4 公里，1 小时左右</strong>' +
          '（沿 OSM 路网实测量算）。路面为铺装（虽然破损），坡度可忽略'
      },
      notes: [
        '<strong>拍完日落必须摸黑走 1.6 公里回车上，这是本条目最需要提前想清楚的一件事。</strong>' +
          '带头灯（不是手机手电）、带备用电池、走在路中间（路两侧就是热区）。' +
          '<strong>10/22 民用暮光 18:58 结束，之后是完全的黑</strong>',
        '<strong>这段路上没有厕所、没有信号、10 月几乎没有别人。</strong>结伴，或至少让同行者知道你的计划',
        '一定<strong>随身带熊喷雾并放在腰挂 / 胸挂上</strong>。这是灰熊活动区，10 月是熊的进食高峰期，' +
          '而你会在暮色中独自走在一条无人的路上——这是本区风险最高的组合',
        '骑车是合法且高效的替代方案（往返只要 15 分钟），但<strong>园内没有自行车租赁点在 10 月还开着</strong>' +
          '（Old Faithful Bike Rentals 最后营业日 9/7），只能自带',
        'Great Fountain 偶尔会进入所谓 <strong>wild-phase</strong>：喷发时长大幅拉长、间隔可达三天，' +
          '此期间完全无法预报。若游客中心当天没有给出 Great Fountain 预报，多半就是这个原因，直接放弃改去别处',
        '<strong>Compendium 另外规定 Firehole Lake Drive 禁止 6 吨以上车辆</strong>——即使将来重开，' +
          '房车与拖挂也进不去'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Great_Fountain_Geyser_terraces_at_sunset_%2830766842144%29.jpg',
          cap: 'Great Fountain 硅华台阶的日落反光 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Great_Fountain_Geyser_Sunset.jpg',
          cap: 'Great Fountain 日落喷发 · user:Flicka / CC BY-SA 3.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/White_Dome_Geyser_%2823756295554%29.jpg',
          cap: 'White Dome Geyser 泉锥 · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-midway-geyser-basin',
      n: 5,
      name: '中途间歇泉盆地',
      en: 'Midway Geyser Basin',
      score: 4.5,
      tldr: '栈道从 Excelsior 巨坑上方横过，橙色径流沟本身就是一流题材；但在这里看不到 Grand Prismatic 的彩环。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '0.8 英里栈道', c: 'free' },
        { t: '停车 10–18 时最紧张', c: 'risk' },
        { t: '看不到彩环', c: 'risk' }
      ],
      highlights: [
        '<strong>Excelsior Geyser Crater 是一个 200×300 英尺的爆炸坑</strong>，' +
          '木栈道从它正上方横过，脚下是 199°F 的沸水与冲天蒸汽——' +
          '<strong>这是全园最有压迫感的一段栈道</strong>。它现在是一个持续排水的巨型热泉，' +
          '常年以每分钟数千加仑的量把热水灌进 Firehole River',
        '<strong>真正被低估的是那些橙色径流沟（runoff channels）</strong>。' +
          'Grand Prismatic 溢出的热水沿着扇形沟渠流向 Firehole River，' +
          '橙红色的嗜热微生物垫在沟里长成一道道放射状的条纹。' +
          '<strong>这是一个独立成立的抽象摄影题材，比在这里勉强拍 Grand Prismatic 本体强得多</strong>',
        '<strong>必须先接受一个事实：在 Midway 的栈道上看不到 Grand Prismatic 的彩环。</strong>' +
          '这池子直径 200–330 英尺（60–100 米）、深 121 英尺（37 米），是 Yellowstone 最大的热泉——' +
          '站在它边上，你的视线高度不足以看出同心圆结构，只会看到一片蓝加一片白雾。' +
          '<strong>要拍彩环必须去 Grand Prismatic Overlook（本区另设条目）。</strong>' +
          '这两处是完全不同的两次拍摄，不能合并',
        'Turquoise Pool 与 Opal Pool 就在同一条栈道上，' +
          '<strong>是这里少数在近距离也能拍出颜色的池子</strong>，正午前后蓝绿最纯',
        'Excelsior 在 1880 年代曾经是一个能喷到 300 英尺的巨型间歇泉，' +
          '<strong>剧烈喷发把自己的泉道炸坏之后就再没恢复</strong>，' +
          '1985 年有过一次持续 47 小时的意外复活。现在它只是安静地流'
      ],
      photo: '风光 <strong>4/5</strong>，抽象 / 局部 <strong>5/5</strong>，人像 <strong>2.5/5</strong>。' +
        '径流沟与 Excelsior 蒸汽是这里的两张牌，且都在冷晨表现更好；' +
        '扣分只因为很多人带着「拍彩虹池」的期待来，然后失望。',
      shots: [
        {
          name: 'Firehole River 上的木桥与径流扇（招牌机位）',
          park: [44.52907, -110.83612],
          view: [44.52765, -110.83608],
          desc: '从停车场跨过 Firehole River 的那座木桥，以及桥后爬上台地的第一段栈道。' +
            '<strong>这是全区拍橙色径流沟的唯一位置</strong>：热水从台地边缘倾泻而下汇入河里，' +
            '扇形沟渠与河水的冷暖对比极强。' +
            '<strong>最佳时段是日出后 30–90 分钟</strong>（9/25 约 07:45–08:45 / 10/22 约 08:15–09:15），' +
            '低角度光斜射进沟里，橙色被打到最饱和，同时上方的蒸汽被逆光打亮。' +
            '<strong>24–70mm 拍全景（把桥当引导线）；70–200mm 只取沟渠的纹理做纯抽象。</strong>' +
            '<strong>偏振镜在这里非常有用</strong>——它能压掉浅水面的反光，让水下的微生物垫颜色跳出来，' +
            '这是本条目唯一强烈建议用 CPL 的地方。'
        },
        {
          name: 'Excelsior Geyser Crater 上方栈道',
          view: [44.52627, -110.83674],
          desc: '栈道从大坑北缘横过。<strong>拍它的关键是解决「白茫茫一片」</strong>：' +
            '不要在无风的冷晨来（什么也看不见），<strong>选有风的中午前后</strong>，' +
            '蒸汽被吹成斜向的带状，坑缘与深蓝色的水面才能露出来。' +
            '<strong>16–35mm 贴近栏杆向下拍</strong>，让坑缘的橙色硅华占前景。' +
            '曝光按最亮的蒸汽给，欠 1 到 1.5 EV 再后期提暗部——' +
            '<strong>蒸汽一旦过曝就再也救不回来</strong>。'
        },
        {
          name: 'Grand Prismatic 池边（近距离质感）',
          view: [44.52528, -110.83827],
          desc: '<strong>放弃拍全貌，只拍边缘</strong>。池边的橙黄色微生物垫在近距离下是极好的抽象素材，' +
            '<strong>70–200mm 或 100mm 微距</strong>取一小块，配合水汽做虚实层次。' +
            '<strong>时段与规则二一致：太阳最高、气温最高的那两三个小时（9 月底 11:00–15:00，10 月底 12:00–14:30）</strong>，' +
            '此时蒸汽最薄。清晨来这里等于白来。' +
            '如果同一天要去 Overlook，<strong>先去 Overlook 再下来走 Midway</strong>，' +
            '因为 Overlook 对时间的要求更苛刻。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '<strong>年票覆盖</strong>',
        hours: '无门禁，全天可入。所在路段（Madison–Old Faithful）2026 年开放至 <strong>10/31</strong>',
        parking: '<strong>Grand Prismatic Spring Parking（44.52907, −110.83612）</strong>，正规硬化停车场。' +
          'NPS 官方提示「Limited parking, especially 10 am–6 pm」——' +
          '但那是给夏天说的，<strong>10 月的工作日基本随到随停</strong>。' +
          '注意这个停车场<strong>不是</strong>去 Overlook 用的那个',
        walk: '停车场到栈道尽头往返约 <strong>0.8 英里 / 1.3 公里，30–45 分钟</strong>，全程平坦木栈道'
      },
      notes: [
        '<strong>栈道全程在热区上方，且几乎没有护栏之外的空间</strong>。三脚架请立在栈道靠内侧，' +
          '不要把脚伸到栏杆外',
        '<strong>Compendium 规定：Midway Geyser Basin 人行桥上下游各 200 码禁止钓鱼</strong>，' +
          '与摄影无关但常有人不知道',
        '这一段的蒸汽量非常大，<strong>过桥后逆风的那 50 米镜头会立刻起雾</strong>。' +
          '进场前先把镜头擦干净，进场后每两三分钟擦一次',
        'Midway 到 Fairy Falls Trailhead（去 Overlook 的停车场）开车只要 <strong>3 分钟 / 1.6 公里</strong>，' +
          '<strong>但两处必须分两个时段拍，不要连着走</strong>',
        '2026 年 6 月 13 日 Biscuit Basin 的水热爆炸曾让 Firehole River 从 Biscuit Basin 一路到 Midway' +
          '（约 6 公里）变成灰白色浑水。这类事件之后河水浑浊会持续一段时间，' +
          '<strong>如果你到场发现河水不是清的，那不是污染，是上游又炸了</strong>'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Excelsior_Geyser_Crater_--_2022_--_2479.jpg',
          cap: 'Excelsior Geyser Crater · Dietmar Rabich / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Firehole_River%2C_Abflusskanal_des_Excelsior_Geysirs_--_2022_--_2572-4.jpg',
          cap: '汇入 Firehole River 的橙色径流沟 · Dietmar Rabich / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Grand_Prismatic_Spring_--_2022_--_2514.jpg',
          cap: '池边视角的 Grand Prismatic · Dietmar Rabich / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'ys-grand-prismatic-overlook',
      n: 6,
      name: '大棱镜泉观景台',
      en: 'Grand Prismatic Spring Overlook',
      score: 5,
      tldr: '唯一能看到彩环的地方，也是全园对时间最苛刻的机位：9 月底 11:00–15:00，10 月底收缩到 12:00–14:30。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '时间窗口极窄', c: 'risk' },
        { t: '1.2 英里往返 / 爬升 105 英尺', c: 'paid' },
        { t: '停车位很少', c: 'risk' }
      ],
      highlights: [
        '<strong>这是全园唯一能真正看到 Grand Prismatic 同心彩环的地面机位。</strong>' +
          '观景平台在泉体西南方约 240 米、高出约 32 米，俯角约 7.6°——' +
          '刚好够把从中心的深蓝、到绿、黄、橙、红棕的整套色环压进一个平面',
        '<strong>颜色的物理原理决定了拍摄时间，这不是经验之谈。</strong>' +
          '中心的深蓝来自纯水对红光的吸收（需要阳光直射并穿透进水体才成立）；' +
          '外圈的橙红来自嗜热微生物垫的类胡萝卜素。' +
          '<strong>太阳高度不够，光就无法穿进水里，中心那圈蓝拍不出来；' +
          '气温太低，蒸汽会直接把整个池子盖住。这两件事都指向同一个结论：只能在正午前后拍。</strong>',
        '<strong>10 月的太阳比 9 月低得多，夏天那套「11:00–14:00」在 10 月底是错的。</strong>' +
          '实算（44.52°N，MDT）：<strong>9 月 25 日正午太阳高度 44.4°</strong>，' +
          '≥35° 的时段是 <strong>10:57–15:33</strong>；' +
          '<strong>10 月 22 日正午只有 34.2°——全天都到不了 35°</strong>，' +
          '≥30° 只剩 <strong>11:30–14:45</strong>；' +
          '10 月 31 日正午 31.2°，≥30° 只有 12:14–13:59。' +
          '<strong>10 月底 11:00 时太阳只有 27.2°，这个时刻在 9 月是可用的，在 10 月不是。</strong>',
        '<strong>NPS 给的步道数据：Fairy Falls Trailhead 出发，0.6 英里内爬升 105 英尺，' +
          '往返 1.2 英里（1.9 公里），标为 Easy，建议时长 1–2 小时。</strong>' +
          '带 GPS 实走的人普遍记录到单程 0.8 英里、爬升约 200 英尺——' +
          '<strong>请按后者留时间</strong>。前 0.6 英里是平坦的碎石路（原为公路路基），' +
          '最后 0.2 英里才是上坡土径',
        '<strong>Fairy Falls Trailhead 停车场在本季正常开放</strong>，它就在 Grand Loop Road 边上，' +
          '随主路一起开到 10/31。NPS 页面明确写着「Parking is very limited」——' +
          '但那是夏天的问题，10 月工作日通常有位。' +
          '另需注意：<strong>2026 年 5 月因熊袭事件封闭的 Fairy Falls Trail 北段已于事后解除封闭</strong>，' +
          '通往 Overlook 这一段当时就始终开放'
      ],
      photo: '风光 <strong>5/5</strong>，抽象 <strong>4.5/5</strong>，人像 <strong>2/5</strong>。' +
        '这是本次行程里单张照片上限最高的机位，没有之一；' +
        '扣分只在于成败几乎完全由当天的风与气温决定，你能控制的只有到场时间。',
      shots: [
        {
          name: '观景平台正对彩环（唯一机位）',
          park: [44.51525, -110.83248],
          view: [44.52353, -110.84004],
          desc: '<strong>时段是这个机位的全部。9 月底：11:00–15:00，核心 11:45–14:45。' +
            '10 月底：12:00–14:30，且优先取后半段 13:00–14:30</strong>——' +
            '此时太阳高度只比正午低 1–2°，但气温已接近全天最高，蒸汽明显更薄。' +
            '视线方位约 <strong>36°（东北）</strong>，正午太阳在正南，' +
            '<strong>光线从你正后方来，水面无眩光、穿透最深，这正是中午成立的原因</strong>。' +
            '焦段（按 240 米距离与全画幅推算）：' +
            '<strong>50–85mm 让彩环加外圈径流刚好撑满画面（这是主力焦段）；' +
            '24–35mm 收整个 Midway 盆地与 Firehole River 的环境关系；' +
            '135–200mm 只取色带做纯抽象</strong>。' +
            '曝光：<strong>不要用偏振镜</strong>——CPL 会削弱水面反射同时压暗中心的蓝，得不偿失；' +
            '按高光测光欠 0.7 EV，保住橙色不溢出；' +
            '包围曝光 3 张应对蒸汽的忽明忽暗。手持完全够用，但平台有栏杆可当支点。'
        },
        {
          name: '上坡土径中段的侧视角',
          view: [44.52370, -110.83923],
          desc: '最后 0.2 英里上坡途中有几处开阔口，<strong>比平台低、更靠东，能拍到彩环的斜侧视角</strong>，' +
            '色环会被压成椭圆但前景能纳入林线与倒木。' +
            '价值在于<strong>平台上人多时这里是替代位</strong>，以及能拍到「人站在平台上看彩环」的尺度对比照。' +
            '同样只在正午窗口内成立。坐标取自 OSM 步道路径中点，为路径上的近似位置。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '<strong>年票覆盖</strong>',
        hours: '<strong>步道无门禁，NPS 标注 Season: Winter, Summer, Fall</strong>（秋季正常开放）。' +
          '限制来自 Grand Loop Road：Madison–Old Faithful 段开到 <strong>10/31</strong>。' +
          '<strong>另注意步道在 Overlook 以北通往 Fairy Falls 的部分是熊管理区，' +
          '每年 3 月上旬至 5 月下旬另有季节性封闭，与本窗口无关</strong>',
        parking: '<strong>Fairy Falls Trailhead 停车场（44.51525, −110.83248）</strong>，' +
          '位于 Midway Geyser Basin 以南 1 英里的 Grand Loop Road 东侧。' +
          '<strong>这不是 Midway 的那个停车场，别停错——停错要多走 2.6 公里</strong>。' +
          'NPS 提示车位「very limited」',
        walk: '<strong>NPS 口径：单程 0.6 英里 / 爬升 105 英尺；实走 GPS 普遍为单程 0.8 英里 / 爬升约 200 英尺。' +
          '往返按 1.6 英里 / 2.6 公里、50–70 分钟（含拍摄另加）计算。</strong>' +
          '前 0.6 英里为平坦碎石路，可推婴儿车；最后 0.2 英里为上坡土径，雨后泥泞、霜后打滑'
      },
      notes: [
        '<strong>把这个点排成「机动项」，不要绑死日期。</strong>' +
          '风比气温更能决定成败——10–15 mph 的风能在低温上午吹开池面，' +
          '而一个无风的暖和上午也可能整天糊死。出发前看 Old Faithful 的 NPS 网络摄像头判断当天蒸汽状况',
        '<strong>清晨绝对不要来这里。</strong>日出时这里只有一锅白雾，你会走 2.6 公里去拍一张什么都没有的照片。' +
          '同理，日落前后也不行',
        '这是<strong>熊管理区</strong>，且步道后段人少。' +
          '<strong>务必带熊喷雾、放在腰挂上，结伴而行、边走边出声</strong>。' +
          '2026 年 5 月 4 日就有两名徒步者在 Old Faithful 西北侧被带崽母灰熊袭击致伤（相关封闭现已解除）',
        '观景平台不大，旺季会挤，<strong>10 月通常只有几个人</strong>。三脚架可以架但请留出通道',
        '往返约一小时且全程无遮挡、无厕所（<strong>最近的厕所在 Midway 停车场</strong>）。' +
          '10 月正午气温可能只有 5–8°C，但上坡会出汗，穿可脱的中层',
        '<strong>不要试图从 Midway 的栈道翻越或从河边靠近——那是热区且违法</strong>。' +
          '要拍彩环只有这一条路'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/View_from_the_Grand_Prismatic_Overlook_Trail_%2835637694570%29.jpg',
          cap: '观景台俯视彩环 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Grand_Prismatic_Spring_from_Fairy_Falls_Trail_overlook_%28Midway_Geyser_Basin%2C_Yellowstone_National_Park%29_2021-08-10%2C_01.jpg',
          cap: 'Fairy Falls Trail 观景点视角 · Steven Pavlov / CC BY-SA 4.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Viewing_platform_on_the_Grand_Prismatic_Overlook_Trail_%2835187569644%29.jpg',
          cap: '观景平台本身 · NPS / Public domain' }
      ]
    },
    {
      id: 'ys-biscuit-black-sand-basin',
      n: 7,
      gone: 'Biscuit Basin 自 2024/7 爆炸后全域封闭至今，本条目仅 Black Sand Basin 可拍',
      name: '黑沙盆地与饼干盆地',
      en: 'Black Sand Basin & Biscuit Basin',
      score: 3,
      tldr: 'Black Sand Basin 正常开放且几乎无人；Biscuit Basin 连停车场都封着，2026 年 6 月又炸了一次。',
      tags: [
        { t: 'Biscuit Basin 封闭中', c: 'risk' },
        { t: 'Black Sand 正常开放', c: 'free' },
        { t: '年票覆盖', c: 'free' },
        { t: '两处相距 3 公里', c: 'paid' }
      ],
      highlights: [
        '<strong>Biscuit Basin 的判定：仍然全域封闭，包括停车场与全部木栈道，2026 年秋季不可能进入。</strong>' +
          '2024 年 7 月 23 日约 10:00，Black Diamond Pool 发生水热爆炸，' +
          '把水、岩石、泥浆抛到数百英尺高，<strong>摧毁了池边一段木栈道</strong>，' +
          '当时在场的人是跑着躲开的（无人受伤）。此后再未开放',
        '<strong>而且它还在继续炸。</strong>2026 年 6 月 13 日 05:09，监测设备记录到地震与次声信号，' +
          '在 Black Diamond Pool 以北约 100 米开出<strong>一组新泉眼和一道 60 英尺（18 米）长、灌满沸水的裂缝</strong>；' +
          '6 月 14–16 日地面塌陷形成一个 <strong>21×17 英尺的沸水池</strong>，' +
          '6 月 18 日与 23 日这个新池子还喷了。当天 Firehole River 从 Biscuit Basin 一路到 Midway' +
          '（约 6 公里）变成灰白色浑水。' +
          'USGS 8 月简报又记录到 Black Diamond Pool 8 月 13 日晚约 22:00 的一次大喷',
        '<strong>NPS 2026 年的正式措辞：「The closure related to the 2024 Biscuit Basin hydrothermal explosion ' +
          'remains in place due to continued unpredictable hydrothermal activity.」</strong>' +
          'Grand Loop Road 本身正常通行，但你只能在车里路过。' +
          '园方 2025 年 5 月在栈道上装了监测相机、7 月装了地震 / 次声 / GPS 站，' +
          '2026 年爆炸后又加装了一台视野更广的相机——' +
          '<strong>这些都是「短期内不会重开」的信号</strong>',
        '<strong>好消息是 Black Sand Basin 完全正常开放</strong>，而且因为紧邻 Old Faithful 却几乎没人去，' +
          '<strong>是本区人最少的一个盆地</strong>。' +
          '这里的 Sunset Lake、Emerald Pool 与 Cliff Geyser 都在一条短栈道上，' +
          '<strong>Cliff Geyser 直接坐落在 Iron Spring Creek 的岸边——' +
          '「间歇泉在溪流里喷发」这个构图在全园找不到第二处</strong>',
        '名字里的「黑沙」来自这一带的<strong>黑色黑曜石碎屑</strong>，' +
          '与其他盆地清一色的白色硅华完全不同，是这里唯一的视觉特征'
      ],
      photo: '风光 <strong>3/5</strong>，局部 <strong>4/5</strong>，人像 <strong>2.5/5</strong>。' +
        'Black Sand Basin 单独看是一个 3.5 分的小盆地，胜在无人与 Cliff Geyser 的溪边构图；' +
        '整个条目被 Biscuit Basin 的封闭拖到 3 分——你损失了 Sapphire Pool 和 Jewel Geyser。',
      shots: [
        {
          name: 'Cliff Geyser 与 Iron Spring Creek',
          park: [44.46208, -110.85304],
          view: [44.46226, -110.85398],
          desc: '从停车场沿栈道走 3 分钟。<strong>这是本条目唯一的招牌构图</strong>：' +
            '泉眼就在溪岸上，喷发时热水直接落进冷溪，蒸汽在水面上贴着流。' +
            '<strong>日出后 30–60 分钟（9/25 约 07:45–08:15 / 10/22 约 08:15–08:45）逆光最好</strong>，' +
            '此时蒸汽被打亮、溪水呈暗调。' +
            '<strong>24–70mm 把溪流当引导线；1/4–1 秒的慢门</strong>让溪水丝化而蒸汽拉出流向，' +
            '两者的运动速度差会形成很好的层次。三脚架必备。' +
            'Cliff Geyser 喷发不规律（几分钟到几小时），到场先架好机位再等。'
        },
        {
          name: 'Sunset Lake 与 Emerald Pool',
          view: [44.46282, -110.85480],
          desc: 'Sunset Lake 是一个持续冒着大量蒸汽的浅热泉，边缘有很宽的橙色微生物垫。' +
            '<strong>这一处要按「颜色规则」拍——正午前后（9 月底 11:00–15:00 / 10 月底 12:00–14:30）</strong>，' +
            '蒸汽最薄时才能拍到水面颜色。' +
            '<strong>35–85mm 拍池子加倒影，100mm 微距拍微生物垫的纹理</strong>。' +
            '再往前是 Emerald Pool，一个更小但颜色更纯的绿池，同样是正午题材。'
        },
        {
          name: 'Biscuit Basin 路边（只能远观）',
          desc: '<strong>此处无法进入，停车场与栈道全部封闭，不提供拍摄坐标。</strong>' +
            '经过时可以在 Grand Loop Road 上看到 Black Diamond Pool 方向持续的蒸汽柱，' +
            '但<strong>路边没有合法停车位，不要为了这个停车</strong>。' +
            '若你想记录这件事，可以从 Midway 一侧观察 Firehole River 的水色——' +
            '爆炸后河水会呈灰白色。（无可用机位，地图无针脚。）'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '<strong>年票覆盖</strong>',
        hours: '<strong>Black Sand Basin：无门禁，全天可入，2026 年秋季正常开放。</strong>' +
          '<strong>Biscuit Basin：全域封闭（停车场 + 全部木栈道），无预计重开日期。</strong>' +
          '两处所在的 Madison–Old Faithful 段公路开到 10/31',
        parking: 'Black Sand Basin 有独立的免费停车场（44.46208, −110.85304），容量小但 10 月足够。' +
          '<strong>Biscuit Basin 停车场封闭中，Grand Loop Road 沿线也不要临时停靠</strong>',
        walk: 'Black Sand Basin 栈道环线约 <strong>0.3 英里 / 0.5 公里，20–30 分钟</strong>，全平。' +
          '从 Old Faithful 开车过来约 <strong>4 分钟 / 3 公里</strong>'
      },
      notes: [
        '<strong>不要试图接近 Biscuit Basin。</strong>2026 年 6 月的爆炸把石块抛出数十英尺、' +
          '在地面开出 18 米长的沸水裂缝，而且发生在凌晨 5 点——没有任何预警。' +
          'USGS 的评论是：<strong>「In Yellowstone, unstable ground is not always marked by a pool, spring, or visible vent.」</strong>',
        'Black Sand Basin 离 Old Faithful 只有 3 公里，' +
          '<strong>适合塞进「等 Old Faithful 下一次喷发」的 90 分钟空档</strong>',
        '这里同样在 2026 年 5 月的熊管理封闭范围之外（当时官方明确列为「开放」），' +
          '但仍是熊活动区，带熊喷雾',
        '停车场很小且入口不明显（在 Grand Loop Road 西侧），<strong>开过头很常见，注意看标牌</strong>',
        'Iron Spring Creek 岸边的栈道在清晨结霜后特别滑，此处几乎没有其他游客，摔了没人扶'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Iron_Spring_Creek_at_Black_Sand_Basin_-_Yellowstone_National_Park_-_Wyoming.jpg',
          cap: 'Iron Spring Creek 与 Black Sand Basin · Tony Webster / CC BY 2.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Sunset_lake_20190714_132237_1.jpg',
          cap: 'Sunset Lake · G. Edward Johnson / CC BY 3.0' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Sapphire_Pool%2C_Biscuit_Basin_in_Yellowstone_DyeClan.com_-_panoramio.jpg',
          cap: 'Biscuit Basin 的 Sapphire Pool，现已封闭 · The Dye Clan / CC BY-SA 3.0' }
      ]
    },
    {
      id: 'ys-old-faithful-inn',
      n: 8,
      name: '老忠实旅舍',
      en: 'Old Faithful Inn',
      score: 4.5,
      tldr: '1904 年的七层原木框架大堂，世界最大木结构之一；但 2026 年可能 10/12 就锁门，务必先确认日期。',
      tags: [
        { t: '大堂免费开放', c: 'free' },
        { t: '关门日期有冲突', c: 'risk' },
        { t: '室内光比极大', c: 'risk' },
        { t: '三脚架政策未明', c: 'risk' }
      ],
      highlights: [
        '<strong>1903–1904 年冬天建成，设计者 Robert C. Reamer 接下这个委托时只有 29 岁</strong>，' +
          '这是他的第一件重要作品。造价 14 万美元、家具另花 2.5 万，' +
          '总面积 188,445 平方英尺，是 <strong>National Historic Landmark（1987 年列入）</strong>，' +
          '也被普遍称为<strong>世界最大的原木建筑</strong>',
        '<strong>核心是那个大堂：屋顶尖端距地面「近 77 英尺」（NPS 自己的园刊原文），' +
          '内部是一套支撑七层的原木框架——其中六层其实是屋顶结构本身。</strong>' +
          '注意一个反直觉的事实：<strong>「全木建造」是个误解</strong>，' +
          'NPS 园刊明确澄清只有 Old House 的一层是承重的未削原木（十一根高、逐根刻槽鞍接），' +
          '上部山墙其实是锯材框架加木瓦。Haynes 导览册当年记载「一层就用了一万多根原木」',
        '<strong>Reamer 特意用扭曲、弯曲的树枝做内外支撑与栏杆</strong>，' +
          '这是整栋建筑「rustic」气质的来源，也是拍局部时最好的题材。' +
          '大堂有两层环廊，从二层廊道有木梯继续爬到框架里一个叫 <strong>Crow’s Nest</strong> 的平台' +
          '（当年乐队在上面演奏），再往上到距地板 92 英尺的山墙顶',
        '<strong>Old House 的朝向是刻意转了 90 度</strong>，让抵达的客人从门廊看出去时' +
          'Old Faithful 正好被门廊框住；门廊屋顶本身就是一个观喷平台。' +
          '主立面则朝向 Firehole River 对岸的 Geyser Hill',
        '<strong>最关键的现实问题：2026 年的关门日期，NPS 与运营方 Xanterra 差了一周。</strong>' +
          'Xanterra 官网写 <strong>10 月 12 日</strong>（同页 2027 年为 10 月 11 日），' +
          'NPS Operating Dates 表（2026/9/3 更新）写客房末日 <strong>10 月 18 日</strong>、餐厅礼品店 10 月 19 日。' +
          '<strong>其余九家住宿两边数字完全一致，唯独这家对不上，无法判断哪边过期。' +
          '安全做法：把 10 月 12 日当作确定能进的最后一天。</strong>'
      ],
      photo: '建筑 <strong>5/5</strong>，人像 <strong>3.5/5</strong>，风光 <strong>1/5</strong>。' +
        '全美最好的木构室内空间之一，且不用买票就能进大堂；' +
        '扣分在于光比极大（山墙高窗到阴影常超过 9 EV）、能站的位置有限、且随时可能已经关门。',
      shots: [
        {
          name: '大堂正中仰拍原木框架（主机位）',
          park: [44.46063, -110.83169],
          view: [44.45962, -110.83134],
          desc: '<strong>最佳时段是上午 10:00–12:00 与下午 14:00–16:00</strong>：' +
            '此时山墙高窗与老虎窗有直射光进来，在原木框架上打出清晰的几何投影；' +
            '而清晨与傍晚整个大堂是一片平淡的暖褐色，出片率大跌。' +
            '<strong>14–20mm 超广是必需的</strong>（空间窄、高度大，24mm 收不下框架全貌），' +
            '站在石砌壁炉前方的下沉区正中近乎垂直上仰。' +
            '<strong>务必包围曝光 3–5 张做 HDR</strong>，' +
            '窗口与阴影处光比常超过 9 EV，单张一定顾此失彼。' +
            '参数起点：<strong>f/4，ISO 1600–3200，1/40 秒，机身防抖开</strong>；' +
            '若能架三脚架则 f/8、ISO 400、长曝。'
        },
        {
          name: '二层环廊俯拍大堂',
          view: [44.45962, -110.83134],
          desc: '<strong>这是唯一能同时俯拍大堂地面、壁炉与上方框架的位置</strong>，' +
            '也是拍「巨大空间中的小人物」尺度对比的最佳点——让同伴站在壁炉前的下沉区，从环廊俯拍。' +
            '<strong>24–35mm 平视对面的木栏杆序列；85mm 单拍那座手工铜与锻铁大钟的细节</strong>。' +
            '环廊木地板会因人走动而轻微震动，慢门时要等人走过去。' +
            '（此坐标为 Old Faithful Inn 建筑本体的 OSM 中心点，室内各机位共用。）'
        },
        {
          name: '门廊屋顶观喷平台与建筑外立面',
          view: [44.45962, -110.83134],
          desc: '门廊的二层屋顶是对公众开放的观喷平台，' +
            '<strong>能拍到「Old Faithful 喷发 + Inn 的木瓦屋檐做前景」这个只有这里成立的构图</strong>。' +
            '<strong>日落前 30 分钟（9/25 约 18:45 / 10/22 约 18:00）</strong>暖光正好打在西向立面上。' +
            '<strong>16–35mm 带屋檐做前景；70–200mm 单压喷发水柱。</strong>' +
            '建筑外立面本身建议退到停车场西侧用 24–35mm 拍全貌，' +
            '<strong>蓝调时段（日落后 15–30 分钟）室内灯光透出木格窗，是外景最好的 20 分钟</strong>。'
        }
      ],
      access: {
        book: '<strong>参观大堂不需预约，非住客也可自由进入</strong>。' +
          'Inn 提供免费的 history tour（由讲解员带看 Old House 内部与一间老式客房），' +
          '<strong>报名方式与秋季是否仍开班未能从官方渠道确认</strong>，到场问前台',
        ticket: '<strong>进入大堂免费</strong>（园区门票年票已覆盖）',
        hours: '<strong>这是本条目最重要的核实项，且两个官方来源冲突：</strong>' +
          'Xanterra 开关门日期页写 <strong>2026/5/1 – 2026/10/12</strong>（当日 11:00 结束）；' +
          'NPS Operating Dates 表（2026/9/3 更新）写客房末日 <strong>10/18</strong>、' +
          '餐厅 / Bear Paw Deli / 礼品店末日 <strong>10/19</strong>。' +
          '<strong>10/12 之前一定能进；10/13–10/19 属于赌运气；10/19 之后一定进不去。' +
          '行程落在 10/13 之后请致电 307-344-7311 确认。</strong>' +
          '关门后整栋建筑上锁，大堂不对外开放；' +
          '此时 Old Faithful 区域唯一还开的旅馆是 <strong>Snow Lodge（客房到 10/24，Geyser Grill 到 10/31）</strong>，' +
          '但那是 1999 年的新建筑，没有可拍的木构大堂',
        parking: 'Inn 有专用停车场（44.46063, −110.83169），以及 Old Faithful 区域的 West Parking' +
          '（44.45794, −110.83073）等多个大型免费停车场，10 月完全不紧张',
        walk: '停车即到。大堂到 Old Faithful 喷口步行约 <strong>250 米 / 4 分钟</strong>'
      },
      notes: [
        '<strong>白平衡是这里的主要技术难点。</strong>光源是 Reamer 设计成烛台造型的白炽灯（约 2800–3000K）' +
          '与山墙高窗进来的日光（约 5500K）混合。' +
          '<strong>自动白平衡会取中间值，把原木拍成一片发灰的土黄</strong>。' +
          '<strong>务必拍 RAW</strong>，然后二选一：' +
          '设 <strong>3200–3800K</strong> 保住木头的暖调、接受窗口偏蓝（推荐，蓝窗反而增加层次）；' +
          '或设 <strong>5200K 日光</strong>接受整体重琥珀色调（这实际上很符合这个空间的气质）。' +
          '不要指望后期一键修好——混合色温只能局部调',
        '<strong>ISO 策略：手持时 ISO 1600–6400 是正常范围，不要为了低噪点把快门拖到 1/15。</strong>' +
          '大堂比肉眼感觉暗得多，f/2.8 大光圈广角在这里价值极高',
        '<strong>三脚架政策：Yellowstone 的 Superintendent’s Compendium 把 tripod 与 monopod 明确归入' +
          '「handheld equipment」，即在园内使用不需要拍摄许可。' +
          '但 Inn 由 Xanterra 特许经营，酒店自身是否另有规定未能从官方渠道确认。</strong>' +
          '实务建议：<strong>人少的清晨或晚间低调使用小三脚架，被劝阻就收起来</strong>；' +
          '主力方案仍按手持 + 高 ISO + 包围曝光准备',
        '<strong>结露：从 −5°C 的室外直接进 20°C 的大堂，镜头会立刻起雾且机身内部也会凝水。</strong>' +
          '进门前把相机装密封袋挤出空气，室内静置 30–60 分钟再拿出来。' +
          '这一条在本区比在任何地方都重要，因为你一天里会反复进出',
        '<strong>这是一栋运营中的酒店</strong>，大堂是客人休息与办理入住的地方。' +
          '不要挡住前台与楼梯通道、不要用闪光灯、不要拍摄客人',
        '2004–2012 年做过一轮大规模抗震与修复改造，' +
          '<strong>大堂壁炉周围的下沉区是那次按 Reamer 原设计复原的</strong>——' +
          '也就是说你现在看到的比 1990 年代更接近 1904 年的样子'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Old_Faithful_Inn_lobby_at_night_%2835725047566%29.jpg',
          cap: '大堂与七层原木框架 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Old_Faithful_Inn%2C_architectural_detail_in_lobby_%289411164540%29.jpg',
          cap: '大堂木构细部 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Upper_Geyser_Basin%2C_Old_Faithful_Inn_--_2022_--_2642.jpg',
          cap: 'Old Faithful Inn 外立面 · Dietmar Rabich / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'ys-old-faithful-upper-basin',
      n: 9,
      name: '老忠实与上间歇泉盆地',
      en: 'Old Faithful & Upper Geyser Basin',
      score: 5,
      tldr: '全球间歇泉密度最高的一平方英里，预报系统 10/31 前正常运行；Observation Point 全年开放。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '六个泉有官方预报', c: 'free' },
        { t: '游客中心开到 10/31', c: 'free' },
        { t: '栈道清晨结冰', c: 'risk' }
      ],
      highlights: [
        '<strong>预报系统的现状（已核实，2026 年秋季正常运行）：NPS ranger 目前对六个间歇泉做预报——' +
          'Old Faithful、Castle、Grand、Daisy、Riverside、Great Fountain。</strong>' +
          '获取方式有五条：<strong>①免费的 NPS App（离线可缓存）；' +
          '②Old Faithful Visitor Education Center 大厅的预报板；' +
          '③官网 nps.gov/yell/planyourvisit/geyser-activity.htm 的实时页面；' +
          '④电话录音；⑤第三方的 GeyserTimes 网站与 App</strong>。' +
          '<strong>关键限制：预报由游客中心的 ranger 发布，游客中心一关就没有预报。' +
          '2026 年该中心开到 10/31，因此整个 9/25–10/22 窗口都有预报，不用担心。</strong>' +
          '另一个有用的细节：<strong>游客中心开门前的清晨，ranger 是依靠基地里的间歇泉爱好者' +
          '（geyser gazers）在线发布的观测和网络摄像头来做判断的</strong>——' +
          '所以你在天亮前想知道情况，直接看 GeyserTimes 比等官网更快',
        '<strong>Old Faithful 的实际参数（NPS，截至 2025 年 1 月）：' +
          '喷发间隔中位数 102 分钟 ± 10 分钟，实测区间 54–118 分钟；' +
          '高度 106 至 180+ 英尺（32–55 米），平均 130 英尺；' +
          '持续 1.5–5 分钟；每次喷出 3,700–8,400 加仑；泉口水温 203°F（95.6°C）。</strong>' +
          '过去 30 年它的平均间隔只延长了约 30 分钟——所以「越来越不准」的说法是夸张的',
        '<strong>Observation Point 是把 Old Faithful 拍出「场面感」的唯一办法，且它全年开放</strong>' +
          '（NPS 步道页标注 Season: Year Round）。' +
          '从游客中心沿栈道逆时针走约 0.3 英里，在 Geyser Hill 标牌处右转、过 Firehole River 上的桥，' +
          '桥后即是登山口；<strong>之字形上坡 0.5 英里到达，往返 1.6 英里，NPS 评为 Moderate</strong>。' +
          '继续向西走 0.9 英里可接上 Solitary Geyser 再下到 Geyser Hill 栈道',
        '<strong>Grand Geyser 是世界上最高的可预报间歇泉</strong>（喷发可达 200 英尺），' +
          '而 <strong>Castle Geyser 拥有全园最大的泉锥</strong>——这个硅华锥体估计积累了' +
          '数千年，是整个盆地里最有「纪念碑感」的单体。两者都在预报名单上，' +
          '<strong>把它们的预报时刻抄下来当天的行程就基本排好了</strong>',
        '<strong>Morning Glory Pool 在栈道最远端（往返约 3 公里）</strong>。' +
          '它原本是纯净的钴蓝色，' +
          '<strong>因为几十年来游客往里扔硬币、垃圾和石头堵塞了热水通道，水温下降，' +
          '橙黄色的嗜热微生物得以在边缘扩张——今天那圈醒目的橙边其实是人为破坏的产物</strong>。' +
          '拍它的时候值得知道这一点'
      ],
      photo: '风光 <strong>5/5</strong>，间歇泉动态 <strong>5/5</strong>，人像 <strong>3/5</strong>。' +
        '全球间歇泉密度最高的地方，一个上午能拍到的题材密度在本次行程里无人能及；' +
        '扣分只在于 Old Faithful 本体因为被拍烂了，很难拍出新意——真正的收获在 Observation Point 与 Grand / Castle。',
      shots: [
        {
          name: 'Observation Point 俯瞰喷发（招牌机位）',
          park: [44.45794, -110.83073],
          view: [44.46471, -110.82444],
          desc: '<strong>这是唯一能俯视 Old Faithful 喷发、同时把整个 Upper Geyser Basin 与 Old Faithful Inn ' +
            '收进同一画面的机位</strong>，也是这个条目值 5 分的原因。' +
            '<strong>最佳时段是日出后的第一次喷发</strong>（9/25 日出 07:13 / 10/22 日出 07:46）：' +
            '太阳从东方（方位 90°–105°）低角度射来，' +
            '<strong>而你在喷口的东北侧，喷发水柱正好处于侧逆光，蒸汽被彻底打亮</strong>。' +
            '<strong>务必提前 40 分钟从游客中心出发</strong>（走 0.3 英里栈道 + 爬 0.5 英里之字坡，' +
            '摸黑加结冰要留足时间），到顶后按预报时刻等。' +
            '<strong>24–70mm 是主力</strong>（收喷发加盆地加 Inn）；' +
            '<strong>70–200mm 压缩</strong>把远处的 Inn 屋顶与喷发水柱叠在一起。' +
            '快门 1/500 以上冻结水珠；曝光按最亮的蒸汽给，欠 1 EV。'
        },
        {
          name: '喷口东南侧看台 · 逆光喷发',
          park: [44.45794, -110.83073],
          view: [44.46046, -110.82815],
          desc: '喷口周围有一圈木质看台。<strong>秋冬清晨的第一喷是这里的招牌</strong>——' +
            '气温在冰点以下时喷出的水柱几乎瞬间全部变成蒸汽，体量比夏天大一倍以上。' +
            '<strong>站在喷口的西侧、朝东（对着刚升起的太阳）拍逆光</strong>：' +
            '这是本区的签名画面，因为低角度阳光穿过巨大的蒸汽体形成通透的金色，' +
            '而背景的深色林线把它衬得很干净。' +
            '<strong>曝光方法：点测最亮的蒸汽、给 +1 到 +1.7 EV，让人物与栏杆自然压成剪影</strong>；' +
            '或从矩阵测光欠 1.5–2 EV 再后期提暗部。' +
            '<strong>f/11–f/16 可以在太阳被蒸汽半遮时得到干净的星芒</strong>。' +
            '遮光罩在正对太阳时没用，用手或帽子挡住前镜片的杂光，' +
            '<strong>并每隔一两分钟擦一次镜头</strong>——蒸汽会持续在前镜片上凝水。'
        },
        {
          name: 'Grand Geyser 与 Castle Geyser',
          view: [44.46666, -110.83701],
          desc: '从游客中心沿栈道向西北约 0.8 公里。' +
            '<strong>先在游客中心抄下这两个泉的预报时刻，然后按时刻表安排</strong>——' +
            '这是本区最值得投入等待时间的两个目标。' +
            'Grand 喷发可达 200 英尺且以多波次爆发，<strong>24–70mm 竖构图</strong>才装得下；' +
            'Castle（44.46366, −110.83648）的巨大硅华锥体更适合' +
            '<strong>35–85mm 侧逆光拍锥体质感</strong>，不喷发时也完全成立。' +
            '<strong>下午晚些时候（日落前 1–1.5 小时）西向逆光</strong>会把两者的蒸汽染成金色。' +
            '等待时间可能长达一小时，带保温杯（但记住热区内禁止饮食，只能喝水）。'
        },
        {
          name: 'Morning Glory Pool',
          view: [44.47506, -110.84353],
          desc: '栈道最远端，从游客中心单程约 <strong>1.5 英里 / 2.4 公里</strong>，往返一个半小时。' +
            '<strong>严格按「颜色规则」执行：只在太阳最高、气温最高的时段来</strong>' +
            '（9 月底 11:00–15:00 / 10 月底 12:00–14:30），清晨来只能拍到一锅雾。' +
            '<strong>35–85mm 从栈道俯视，构图把整个池子放正、让蓝到橙的渐变对称</strong>。' +
            '<strong>偏振镜在这里有用</strong>——压掉水面反光后池底的层次会明显加深。' +
            '同一趟路上会经过 Riverside Geyser（44.47347, −110.84092，也在预报名单上，' +
            '喷发时水柱斜着射过 Firehole River，是很好的构图）。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '<strong>年票覆盖</strong>',
        hours: '<strong>盆地与全部木栈道无门禁，全天可入</strong>（这意味着你可以在天亮前上 Observation Point）。' +
          '<strong>Old Faithful Visitor Education Center 2026 年开到 10/31</strong>，' +
          '预报板与免费 Wi-Fi 都在里面。所在路段开到 10/31',
        parking: 'Old Faithful 区域有多个大型免费停车场：West Parking（44.45794, −110.83073，离 Inn 与 Observation Point ' +
          '登山口最近）、East Parking（44.45712, −110.82541）等。<strong>10 月完全不紧张</strong>',
        walk: 'West Parking 到 Old Faithful 喷口约 <strong>350 米 / 5 分钟</strong>；' +
          '到 <strong>Observation Point 往返 1.6 英里 / 2.6 公里，含爬升，45–70 分钟</strong>；' +
          '到 <strong>Morning Glory Pool 往返 3 英里 / 4.8 公里，1.5–2 小时</strong>。' +
          '整个 Upper Geyser Basin 栈道网络走全约 5 英里'
      },
      notes: [
        '<strong>木栈道在天亮前普遍结冰</strong>：热泉径流淌上木板再冻住，形成头灯下看不见的透明薄冰。' +
          '<strong>轻量冰爪在这里是本区回报率最高的一件装备</strong>，尤其你要摸黑爬 Observation Point',
        '<strong>Observation Point 那段之字坡在结霜时明显打滑</strong>，NPS 把它评为 Moderate 不是虚的。' +
          '摸黑上山务必用头灯而不是手机手电（要腾出手扶）',
        '预报有一个容易误解的点：<strong>官网页面写着「The last prediction made will remain up until a ' +
          'new prediction is available」</strong>——也就是说你看到的可能是几小时前的旧预报。' +
          '以现场预报板与 NPS App 为准',
        'Old Faithful 区域<strong>有手机信号（Verizon 最好）、有免费 Wi-Fi（游客中心）</strong>，' +
          '是本区唯一能可靠联网的地方。<strong>走进盆地深处（Morning Glory 一带）信号消失</strong>',
        '<strong>Old Faithful 以南 1.5 英里的 Firehole River Bridge 在 2026 年 9 月内有桥梁作业，' +
          '最多 15 分钟延误</strong>。若你从 West Thumb 方向进来会遇到',
        '这一带是灰熊活动区，<strong>NPS 明确说明「from the trails in the park’s backcountry to the ' +
          'boardwalks and parking lots around Old Faithful」都是熊乡</strong>。' +
          '<strong>Bear Spray Rental Yurt 最后营业日 10/3</strong>，之后只能自带或在 West Yellowstone 买',
        '燃油：Old Faithful Upper Gas Station 便利店开到 10/18、Lower 站 9/13，' +
          '<strong>但两站的刷卡自助加油全年 24 小时可用</strong>'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Spring_Old_Faithful_eruption_from_Observation_Point.jpg',
          cap: '从 Observation Point 俯瞰喷发 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Old_Faithful_eruption_in_front_of_the_sun_%2836922264582%29.jpg',
          cap: '逆光中的 Old Faithful 喷发 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Morning_Glory_Pool%2C_Yellowstone.jpg',
          cap: 'Morning Glory Pool · Clément Bardot / CC BY-SA 4.0' }
      ]
    },
    {
      id: 'ys-west-thumb-geyser-basin',
      n: 10,
      name: '西拇指间歇泉盆地',
      en: 'West Thumb Geyser Basin',
      score: 4,
      tldr: '热泉直接开在 Yellowstone Lake 岸边，是全园唯一的「热区 + 湖景」组合；日出机位在这里。',
      tags: [
        { t: '年票覆盖', c: 'free' },
        { t: '0.6 英里平缓栈道', c: 'free' },
        { t: '信息站已于 7/13 关闭', c: 'risk' },
        { t: '湖畔风大体感低', c: 'risk' }
      ],
      highlights: [
        '<strong>这是本区唯一「热泉直接开在大湖岸边」的地方，也是它与其他八个盆地的根本差别。</strong>' +
          '其他盆地的背景是林线与荒地，这里的背景是 Yellowstone Lake 与对岸的 Absaroka 山脉——' +
          '<strong>你终于有了地平线和远景层次</strong>',
        '<strong>West Thumb 本身是一个「套娃火山口」：它是约 17.4 万年前一次火山爆发形成的破火山口，' +
          '塌陷后灌水成为 Yellowstone Lake 的一个延伸湾。</strong>' +
          'NPS 的比较很有画面感——<strong>它的尺寸和俄勒冈的 Crater Lake 差不多，' +
          '却只是 60 万年前那个巨型 Yellowstone Caldera 里面的一个小坑</strong>。' +
          '热源据信只在地下 10,000 英尺（3,000 米）处，比别处浅得多',
        '<strong>Fishing Cone 是这里的招牌：一个直接立在湖水里的间歇泉锥。</strong>' +
          '1870 年 Washburn 探险队第一次记录下当地人的做法——' +
          '<strong>在冷湖里钓上一条鳟鱼，不摘钩，直接甩进沸腾的泉眼里煮熟</strong>。' +
          '这个「Chowder Pot」的把戏后来成了全美闻名的游客项目，' +
          '<strong>但因为不断有人被烫伤、脚也踩坏了泉锥，现已完全禁止</strong>。' +
          'Fishing Cone 只有 1919 与 1939 两年有喷发记录，' +
          '<strong>春夏湖水位高时整个锥体会被淹没——秋季来反而是能拍到它露出水面的季节</strong>',
        '<strong>Abyss Pool 深 53 英尺（16 米），是全园最深的热泉之一</strong>，' +
          '颜色在绿松石蓝、翡翠绿与褐色之间变化。' +
          '1883 年一位游客形容它是「a great, pure, sparkling sapphire, rippling with heat」。' +
          '旁边的 Black Pool 深 35–40 英尺',
        '<strong>栈道是双环：外环 0.5 英里、内环 0.25 英里，NPS 给的总长是 0.6 英里（1 公里）环线，' +
          '30–60 分钟</strong>，全程平坦，有无障碍车位。这是本区最省力的一条'
      ],
      photo: '风光 <strong>4.5/5</strong>，人像 <strong>3/5</strong>，抽象 <strong>3.5/5</strong>。' +
        '「蒸汽 + 湖面 + 远山」的三层结构在全园独一份，日出机位质量极高；' +
        '扣分因为单体热泉的规模都不大，且离 Old Faithful 有 1 小时车程，' +
        '在只有一两个清晨的行程里很难和 Upper Geyser Basin 抢时间。',
      shots: [
        {
          name: '湖畔栈道 · Fishing Cone 与日出（招牌机位）',
          park: [44.41576, -110.57423],
          view: [44.41729, -110.57026],
          desc: '外环最东段，泉锥就在栈道外侧的湖水里。' +
            '<strong>这是本区最好的日出机位之一：9/25 日出 07:12（方位 90° 正东）/ ' +
            '10/22 日出 07:45（方位 105° 东南偏东），而湖面正在东南方向</strong>——' +
            '<strong>太阳直接从湖对岸升起，你可以把泉锥、湖面反光、湖上蒸汽和远山一次收进画面</strong>。' +
            '<strong>最佳时段是民用曙光到日出后 40 分钟</strong>（9/25 约 06:44–07:52 / 10/22 约 07:17–08:25）。' +
            '<strong>24–70mm 为主，把泉锥放在三分点、湖面留出反光带</strong>；' +
            '<strong>70–200mm 压缩</strong>让远山与蒸汽叠成层次。' +
            '曙光段用三脚架 + 1–4 秒长曝把湖面拍平；日出后改手持追蒸汽的形态。' +
            '<strong>湖畔风大，三脚架要挂重物</strong>。'
        },
        {
          name: 'Abyss Pool 与 Black Pool',
          view: [44.41701, -110.57197],
          desc: '内环上，两池相邻。<strong>按「颜色规则」，这两池要留到太阳最高的时段</strong>' +
            '（9 月底 11:00–15:00 / 10 月底 12:00–14:30），此时深水的蓝绿才出得来。' +
            '<strong>35–85mm 从栈道俯视，用偏振镜压掉水面反光</strong>——' +
            '深池对 CPL 的响应比浅池明显得多，这里值得带。' +
            'Abyss 深 16 米，能拍出「看不到底」的通透感，是本区少数适合做「深渊」意象的池子。'
        },
        {
          name: '栈道北段 · 蒸汽漫过湖面',
          view: [44.41591, -110.57374],
          desc: '栈道起点（trailhead）附近往北看的一段。' +
            '<strong>在气温 −5°C 以下的清晨，湖岸的热泉蒸汽会贴着水面横向漫开数十米</strong>，' +
            '与湖面自身的蒸发雾混在一起，' +
            '<strong>这是本区唯一能拍到「蒸汽在开阔水面上流动」的地方</strong>。' +
            '<strong>16–35mm 低机位贴近水面</strong>，或 <strong>85–200mm</strong> 只取一层蒸汽做极简。' +
            '曝光按蒸汽的高光给，欠 0.7–1 EV。'
        }
      ],
      access: {
        book: '不需预约',
        ticket: '<strong>年票覆盖</strong>',
        hours: '<strong>盆地无门禁，全天可入</strong>（NPS 步道页标注 Season: Summer, Fall；Time of Day: Any Time）。' +
          '<strong>West Thumb Information Station 已于 2026 年 7 月 13 日关闭</strong>，秋季不会再开。' +
          '进出这里的两段公路（South Entrance–West Thumb、West Thumb–Old Faithful 的 Craig Pass 段）' +
          '2026 年均开放至 <strong>10/31</strong>',
        parking: '<strong>West Thumb Geyser Basin Parking（44.41576, −110.57423）</strong>，' +
          '正规免费停车场，紧邻栈道起点，设有无障碍车位',
        walk: '停车场到栈道起点 <strong>30 米</strong>；' +
          '<strong>外环 0.5 英里、内环 0.25 英里，NPS 标注环线 0.6 英里 / 1 公里，30–60 分钟</strong>，全平'
      },
      notes: [
        '<strong>湖畔清晨的体感温度远低于气温</strong>：这里海拔 7,733 英尺、正对开阔湖面，' +
          '10 月清晨 −6°C 加上湖风相当于 −12°C 以下。<strong>防风外层、厚手套、帽子一件不能少</strong>',
        '<strong>最近的住宿是 Grant Village（客房末日 10/10）与 Lake Yellowstone Hotel（客房末日 10/10）。' +
          '10 月 11 日之后，想在这里拍日出就只能从 Old Faithful 出发——单程约 1 小时车程 / 39 公里，' +
          '意味着 10 月底要 06:15 前出发，且要摸黑翻 Craig Pass（海拔 8,262 英尺，最容易结冰的一段）。</strong>' +
          '这是本条目最大的执行障碍，务必提前评估',
        '<strong>Compendium 规定：禁止在任何热区 25 码以内靠岸或下水，' +
          '以及禁止在 Little Thumb Creek 到 West Thumb 热区南端之间的湖岸靠岸</strong>。' +
          '不要为了低机位走到湖滩上',
        '这一带没有加油站（最近在 Grant Village，便利店开到 10/13，' +
          '<strong>刷卡自助加油全年 24 小时可用</strong>），也基本没有手机信号',
        'Grant Visitor Center 最后营业日 10/3；West Thumb 停车场有厕所但秋季可能关闭，' +
          '<strong>出发前在 Old Faithful 或 Grant Village 解决</strong>',
        '秋季常有野牛与麋鹿在栈道附近活动，湖畔视野开阔更容易提前发现；' +
          '<strong>NPS 规定与野牛 / 麋鹿保持 25 码、与熊 / 狼保持 100 码</strong>'
      ],
      images: [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/West_Thumb_Geyser_Basin_sunrise_%2836920812466%29.jpg',
          cap: 'West Thumb 湖畔日出 · NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Fishing_Cone_at_West_Thumb_Geyser_Basin_on_Yellowstone_Lake_%28e04eb640-206d-43bc-baf7-d40348849121%29.jpg',
          cap: '湖水中的 Fishing Cone · Neal Herbert / NPS / Public domain' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/West_Thumb_Geyser_Basin_%2848350384107%29.jpg',
          cap: 'West Thumb 盆地与 Yellowstone Lake · NPS / Public domain' }
      ]
    }
  ]
};
