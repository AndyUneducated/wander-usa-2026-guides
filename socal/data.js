/* =========================================================================
   REGIONS —— 分区景点数据
   数据来源：2026-09 联网查证（Caltrans / CAL FIRE / NOAA / 各官方页面）。
   开放时间、票价、封闭状态会变动，出发前需复查。
   ========================================================================= */

var REGIONS = [

  /* ===================== ① 中央海岸 ===================== */
  {
    id: 'central-coast',
    name: '① San Jose → Santa Barbara 沿途',
    navName: '中央海岸',
    color: '#4da3ff',
    lead: '因 Plaskett Fire，1 号公路南段（SLO/Monterey 县界至 Kirk Creek 一带）仍然封闭，南下主干必须走 US-101 经 Paso Robles 再转 CA-46 West 下到 Cambria。' +
      '好消息是 Green Valley 观景点和 DAOU 酒庄本来就在这条绕行路上，从「绕远」变成了「顺路」。' +
      '<strong>9 月 3 日起北段已解封至 PM45，Pfeiffer Beach 恢复可达</strong>，但只能从 Carmel/Monterey 方向进出后原路折返，不能南北贯通。',
    callouts: [
      {
        type: 'warn',
        title: '绕行路线本身也在施工',
        html: '<p>CA-46 West 靠近 Hwy 1 路口的 8 英里路段正在做封层，<strong>单向交替放行</strong>（引导车带队）：' +
          '日间每天 08:00–16:00，夜间周一至周五 19:00–06:00，<strong>持续至 2026 年 9 月 25 日</strong>，覆盖你的全部行程。' +
          'Caltrans 承诺日间延误控制在 15 分钟内，但 8 月 3 日首日曾出现 45 分钟堵车。' +
          'Paso Robles 到 Cambria 正常 36–46 分钟，<strong>请额外预留 20–30 分钟</strong>。</p>'
      },
      {
        type: 'warn',
        title: '哪些点去不了、哪个点在 9/3 又回来了',
        html: '<p><strong>仍然去不了：</strong>Sand Dollar Beach、Jade Cove、Willow Creek Vista Point、Plaskett Creek、Gorda——' +
          '它们既在 Hwy 1 南段封闭区内，又被 Los Padres 森林封闭令逐条点名，双重封锁，且封闭令要到两场火「declared out」才解除。</p>' +
          '<p>Pfeiffer Big Sur、Julia Pfeiffer Burns（<strong>McWay Falls</strong>）、Andrew Molera、Limekiln、Point Sur 等州立公园' +
          '<strong>现在车能开到门口，但公园自己仍关闭至另行通知</strong>（California State Parks 8 月 28 日公告）。' +
          'McWay Falls 还有一层：观景用的 Overlook Trail 早在 2024 年 11 月就已长期封闭，即便公园重开也未必能拍。</p>' +
          '<p><strong>唯一的好消息：Pfeiffer Beach 恢复可达。</strong>森林封闭令标题明文写着「EXCEPT PFEIFFER BEACH AND SYCAMORE CANYON ROAD」，' +
          '加上北段 9/3 解封，从北侧南下即可抵达——但 9 月拍不到 Keyhole Arch 的穿孔日落，那是冬至前后的现象。</p>'
      },
      {
        type: 'info',
        title: '烟雾分布：越往南越干净',
        html: '<p>Cambria 一带空气质量在「中等 / 不健康」间波动，Paso Robles 与 Atascadero 受影响也重。' +
          '而 <strong>Guadalupe、Oceano、Montaña de Oro 距火场 90–120 英里，是本次行程的「烟雾避难所」</strong>。' +
          '北边烟大时，把重心南移。带 CPL 和后期降霾预案；侧面看，烟尘也可能造就极浓烈的红色日落。</p>'
      },
      {
        type: 'tip',
        title: '日出日落（Cambria / San Simeon）',
        html: '<p>9/5 日出 06:40、日落 <strong>19:26</strong>；9/9 日出 06:43、日落 <strong>19:20</strong>。' +
          '海岸线朝西，<strong>日落是主场，日出基本无用</strong>（太阳从内陆山后升起，海岸背光）。' +
          '有效蓝调时刻约在日落后 25 分钟内。九月典型「marine layer」低云：清晨到上午常有雾，下午转晴。</p>'
      }
    ],
    spots: [
      {
        id: 'pfeiffer-beach',
        n: 1,
        name: 'Pfeiffer 海滩（钥匙孔石拱）',
        en: 'Pfeiffer Beach · Keyhole Arch',
        score: 4,
        tldr: '9/3 起重新可达：森林封闭令把这里明文列为例外，Hwy 1 北段也已解封。但 9 月拍不到让它出名的穿孔日落。',
        tags: [{ t: '9/3 起可达', c: 'free' }, { t: '需从北侧进出', c: 'risk' }, { t: '9 月无穿孔日落', c: 'risk' }, { t: '$15/车', c: 'paid' }],
        highlights: [
          '紫色沙滩配海蚀拱门，<strong>Keyhole Arch 的穿孔日落</strong>是 Big Sur 最著名的摄影题材之一——但那个现象只在<strong>每年 12 月至次年 1 月</strong>前后出现，9 月太阳方位角偏北，光线不会穿过拱洞',
          '<strong>这里的紫色沙是真的</strong>：上游锰榴石（manganese garnet）风化后沉积在滩面，雨后与浪线附近颜色最明显，是加州少有的地质题材',
          '即便没有穿孔光，礁岩群本身的形态、退浪拉丝与逆光水雾仍然成立，是一处扎实的海岸长曝光机位',
          '<strong>2026 年 9 月的特殊状态</strong>：Los Padres 国家森林的紧急封闭令 <strong>Forest Order 05-07-51-26-10</strong> 标题即写明「EXCEPT PFEIFFER BEACH AND SYCAMORE CANYON ROAD」，把这里明文排除在封闭之外；配合 Hwy 1 北段于 <strong>9 月 3 日 6:00 解封至 PM45</strong>，从 Carmel / Monterey 方向南下可以正常抵达'
        ],
        photo: '风光 <strong>4/5</strong>，人像 <strong>3/5</strong>，人文 <strong>1.5/5</strong>。扣分不在于景观，而在于时令——让这里封神的那张照片是冬至前后的现象，9 月只能拍常规海景与礁石。',
        shots: [
          {
            name: 'Keyhole Arch 正对沙滩（主机位）',
            park: [36.238100, -121.815500],
            view: [36.239371, -121.818018],
            desc: '沿 Sycamore Canyon Road 开到尽头停车场后步行下滩。<strong>日落前 40 分钟至日落（约 18:35–19:20）</strong>光线最好。16–35mm 拍拱门与礁岩群全景，70–200mm 单独压缩拱洞。<strong>建议带 ND 与偏振镜，1–4 秒慢门拍退浪拉丝</strong>，让水流从画面下缘的礁石间抽走形成引导线。9 月太阳落点偏拱洞北侧，别等穿孔。'
          },
          {
            name: '滩北端紫沙带',
            view: [36.240100, -121.817200],
            desc: '退潮后沿滩向北走，注意脚下颜色偏紫红的细沙层。<strong>35–50mm 或 100mm 微距</strong>贴地拍紫沙与常规石英砂的分界，或把紫沙作为前景、拱门虚化在后。阴天与雨后颜色最饱和，正午顶光下反而看不出来。'
          }
        ],
        access: {
          book: '不需预约',
          ticket: '<strong>$15/车</strong>（Los Padres National Forest 日间使用费）',
          hours: '日间使用区通常 09:00 至日落，<strong>日落后闸门上锁</strong>——拍完日落要立刻走，别拖到蓝调',
          parking: '尽头的日间使用区停车场，<strong>车位极少且不接受大车与拖挂</strong>。Sycamore Canyon Road 为狭窄单车道，会车困难',
          walk: '停车场到沙滩约 <strong>200 米 / 3 分钟</strong>，短且平缓'
        },
        notes: [
          '<strong>2026 年 9 月的通行前提：只能从北侧（Carmel / Monterey 方向）南下抵达，不能南北贯通。</strong>Hwy 1 南段（县界 PM0 至 Kirk Creek 一带）因 Plaskett Fire 仍然封闭，无 pilot car、无限时通行、无预计重开时间',
          '<strong>Forest Order 5-07-51-25-02 规定：Sycamore Canyon Road 从 Hwy 1 路口起向西约 2.5 英里必须待在机动车内，禁止步行。</strong>也就是不能把车停在 Hwy 1 路边走进去，必须开车进入',
          '<strong>Plaskett Fire 至今控制率仅 1%</strong>，面积在 8/30 至 9/2 两天内从 15,479 英亩涨到 28,968 英亩。这条封闭令在两场火「declared out」之前不会解除，而封闭范围随时可能再变——<strong>出发当天务必复查 Caltrans 实时路况与 Los Padres 森林封闭令</strong>',
          '北段解封本身也不是永久保证：这条路在 8 月就有过解封后又因火势重新封闭的先例',
          '若从 Carmel 南下，注意 <strong>Rocky Creek Bridge（Monterey 以南 15.7 英里）24 小时单向交通管制，持续到 2026 年 11 月 30 日</strong>，会产生等待，日落时段的时间预算要留余量',
          '如果将来专程为穿孔日落再访，请安排在 <strong>12 月中至 1 月中</strong>，且需要低潮加晴朗天空同时满足'
        ],
        images: [
          { url: 'img/pfeiffer-beach-ii-19295487233-11703d13.jpg', cap: 'Pfeiffer 海滩礁岩与浪 · Wikimedia Commons / CC BY-SA 2.0' },
          { url: 'img/pfeiffer-beach-keyhole-arch-panoramio-055368a1.jpg', cap: 'Keyhole Arch 钥匙孔石拱 · panoramio / CC BY 3.0' },
          { url: 'img/pfeiffer-beach-at-dusk-unsplash-0c30b48f.jpg', cap: 'Pfeiffer Beach 暮色 · Unsplash / CC0' }
        ]
      },
      {
        id: 'mcway-falls',
        n: 2,
        gone: '本次无法抵达',
        name: 'McWay 瀑布',
        en: 'McWay Falls, Julia Pfeiffer Burns SP',
        score: 5,
        tldr: '9/3 起道路已能开到公园门口，但公园本身仍关闭至另行通知；且观景步道自 2024 年 11 月起就已长期封闭。',
        tags: [{ t: '公园关闭', c: 'risk' }, { t: '步道长期封闭', c: 'risk' }, { t: '无解封时间表', c: 'risk' }],
        highlights: [
          '80 英尺高的瀑布直落海滩，是加州仅有的几条「潮汐瀑布」之一，也是整条 Big Sur 海岸最著名的单一画面',
          '<strong>不可达的理由在 9/3 变了：现在不是路的问题，是公园自己关着。</strong>Hwy 1 北段已于 9 月 3 日 6:00 解封至 PM45，车能开到公园门口；但 California State Parks 于 <strong>8 月 28 日发布的「CLOSURE OF BIG SUR STATE PARKS」公告仍然有效</strong>，Julia Pfeiffer Burns 与另外四座州立公园一并关闭至另行通知',
          '<strong>即便公园突然重开，经典机位也未必能拍到</strong>：通往观景点的 Overlook Trail 在火灾之前就已长期关闭（自 2024 年 11 月起即无 McWay Falls 通道）。围栏之外的悬崖、沙滩、Saddle Rock 与瀑布区域一律禁入，违规可被引用甚至逮捕'
        ],
        photo: '正常年份是 5/5 的顶级风光题材。<strong>但本次行程为 0——公园关闭，且观景步道本身已封闭近两年。</strong>',
        shots: [
          {
            name: 'Overlook Trail（当前关闭）',
            view: [36.157821, -121.672396],
            desc: '正常情况下从 Hwy 1 路边停车场穿隧道即到，往返约 0.6 英里。<strong>目前全园关闭。</strong>',
            at: [36.15780, -121.67080]
          }
        ],
        access: {
          book: '—',
          ticket: '正常年份 $10/车日间使用费',
          hours: '<strong>因山火全园关闭，无解封时间表</strong>',
          parking: '不可进入',
          walk: '不可进入',
        },
        notes: [
          '<strong>双重阻断</strong>：一是公园本身因火关闭，二是 Hwy 1 在 Pacific Valley（MM16）至县界（MM0.09）封闭，即便公园开放，从 San Simeon 方向也上不去',
          '若你从 Monterey 方向单独进入是另一条路线，但那与本次「由北向南贯通」的行程不兼容',
          '出发当天可复查 <a href="https://roads.dot.ca.gov/" target="_blank" rel="noopener">Caltrans 路况</a>，但按目前控制率（1%）预期解封的可能性很低'
        ],
        images: [
          { url: 'img/mcway-falls-1-unsplash-e88c60c2.jpg', cap: 'McWay 瀑布与海湾全景 · Unsplash / CC0' },
          { url: 'img/mcway-falls-big-sur-may-2011-001-cd67ff7a.jpg', cap: 'McWay Falls 竖构图 · Wikimedia Commons / CC BY-SA 3.0' },
          { url: 'img/2016-06-03-usa-ca-mcway-cove-dsc-8734-dxo-1-4a2ddc4d.jpg', cap: 'McWay Cove 海湾全景 · Wikimedia Commons / CC BY 4.0' }
        ]
      },
      {
        id: 'sand-dollar-jade',
        n: 3,
        gone: '本次无法抵达',
        name: '沙钱海滩 / 翡翠湾 / 柳溪观景点',
        en: 'Sand Dollar Beach · Jade Cove · Willow Creek Vista',
        score: 4,
        tldr: '双重封锁：既在 Hwy 1 仍封闭的南段内，又被森林封闭令逐条点名。可以确定地排除，无需再抱期望。',
        tags: [{ t: 'Hwy 1 封闭段内', c: 'risk' }, { t: '森林封闭令点名', c: 'risk' }, { t: '无到期日', c: 'risk' }],
        highlights: [
          '<strong>Sand Dollar Beach</strong> 是 Big Sur 最长的沙滩；<strong>Jade Cove</strong> 以海滩上可捡到的蛇纹石玉著称；<strong>Willow Creek Vista</strong> 是俯瞰河口的路边观景台',
          '三处沿 Hwy 1 相邻分布，正常情况下可一次串联，<strong>已合并为一条</strong>',
          '<strong>Plaskett Creek 与 Gorda 就在同一路段，同样不可达</strong>'
        ],
        photo: '<strong>本次为 0。</strong>这一段正是 Plaskett Fire 得名的位置，是整场火最核心的区域。',
        shots: [
          {
            name: 'Sand Dollar Beach（当前不可达）',
            view: [35.923925, -121.469841],
            desc: 'Hwy 1 西侧停车场下切至沙滩。<strong>位于封闭段内。</strong>',
            at: [35.92180, -121.46400]
          },
          {
            name: 'Jade Cove（当前不可达）',
            view: [35.913777, -121.470412],
            desc: '路边停车后翻栅栏下陡坡。<strong>位于封闭段内。</strong>',
            at: [35.91470, -121.46000]
          }
        ],
        access: {
          book: '—',
          ticket: '正常年份 Sand Dollar $10/车，Jade Cove 免费',
          hours: '<strong>Hwy 1 封闭：Pacific Valley（MM16）至 Monterey/SLO 县界（MM0.09），无解封时间表</strong>',
          parking: '不可进入',
          walk: '不可进入',
        },
        notes: [
          '<strong>Plaskett Fire 已烧 29,123 英亩、控制率仅 1%</strong>，这一段短期内不具备开放条件',
          '这三处的替代方案：<strong>Montaña de Oro</strong> 的岩石海岸与潮池题材最接近，且完全免费、烟雾影响小'
        ],
        images: [
          { url: 'img/jade-cove-big-sur-california-cdb74d17.jpg', cap: 'Jade Cove 翡翠湾 · Wikimedia Commons / CC BY 2.0' },
          { url: 'img/route-1-big-sur-coast-highway-sand-dollar-picnic-area-and-be-88755fd4.jpg', cap: 'Sand Dollar 海滩与 Hwy 1 · NARA / Public domain' },
          { url: 'img/willow-creek-road-big-sur-25785902100-5d230abd.jpg', cap: 'Willow Creek 与 Hwy 1 桥 · Wikimedia Commons / CC BY-SA 2.0' }
        ]
      },
      {
        id: 'ragged-point',
        n: 4,
        name: '拉格德角（含崖下 Young Creek Beach）',
        en: 'Ragged Point · Young Creek Beach',
        score: 4,
        tldr: 'Big Sur 唯一还能到达的高位双向海岸视角，免费且停车即到；但位于疏散警告区内，且现在是条尽头路。',
        tags: [
          { t: '免费', c: 'free' }, { t: '无需预约', c: 'free' },
          { t: '在疏散警告区内', c: 'risk' }, { t: '尽头路需原路返回', c: 'risk' }
        ],
        highlights: [
          '整个建筑群坐落在向海突出约 500 英尺、高 250–350 英尺的岬角上，是 <strong>Big Sur 海岸线唯一能同时向北和向南拍到大跨度弯曲海岸的公共立足点</strong>',
          '崖边有观景台、雕塑与婚礼凉亭，Monterey Cypress 树冠可做前景暗框',
          '崖下 <strong>Young Creek Beach</strong> 是一片深色沙滩，四周环绕巨型卵石——这就是原清单里的「Young Creek Beach」，与本条是同一地点的上下两层',
          '沙滩后方峡谷有 Black Swift Falls（约 300 英尺），但<strong>从崖上和沙滩都看不到瀑布本体</strong>，且 9 月旱季末很可能断流'
        ],
        photo: '风光 <strong>5/5</strong>，人像 <strong>4/5</strong>，建筑 <strong>3/5</strong>。' +
          '高位俯拍加双向海岸线延伸加正西朝向，日落条件近乎完美；悬崖高度让你能拍到浪拍岩石的俯视纹理，' +
          '这是海平面机位做不到的。崖下沙滩另算 3/5——黑沙配白色浪丝很有质感，但日落时会很早进入崖影。',
        shots: [
          {
            name: '崖边观景台 / 凉亭区（主机位）',
            desc: '「Million Dollar View」。最佳时段 <strong>18:45–19:50</strong>（暮金光到蓝调）。' +
              '16–35mm 拍海岸大跨度；70–200mm 压缩远处海岬层次与浪花细节。向北就是被封闭的 Big Sur 海岸。',
            park: [35.78130, -121.32950],
            view: [35.78050, -121.33080]
          },
          {
            name: 'Monterey Cypress 树冠通道',
            desc: 'Inn 主楼与悬崖之间的步道。用树冠做前景暗框框住远处海岸线，是这里最有辨识度的构图。24–70mm。',
            view: [35.78050, -121.33080]
          },
          {
            name: 'Young Creek Beach 崖下沙滩（需下切 330 英尺）',
            desc: '步道入口在礼品店与餐厅后方，现场标识只写「Nature Trail」。' +
              '<strong>下行 15–25 分钟，返程上行 25–40 分钟</strong>，之字形陡坡，底部有大卵石需攀爬。' +
              '最佳时段 <strong>上午 09:00–13:00</strong>（崖影最小、光为漫射）。' +
              '慢门 1–2 秒配 ND 拍浪绕黑沙，黑沙与白色浪丝的对比是这里最强的画面。建议精简器材，一机一镜。',
            view: [35.78100, -121.33000]
          }
        ],
        access: {
          book: '观景不需要（餐厅建议预约 805-927-5708）',
          ticket: '免费',
          hours: '崖上全天；餐厅周一至周六早餐 8–11、午餐 12–16、晚餐 17–20',
          parking: 'Ragged Point Inn 私有停车场，<strong>免费</strong>，位置充足，直接从 Hwy 1 拐入',
          walk: '停车到崖上机位 <strong>2–3 分钟</strong>、约 100–150 米平坦草坪；下切到沙滩单程 0.4–0.5 英里、落差 330 英尺',
        },
        notes: [
          '<strong>位于 SLO 县 SLC-001 疏散警告区内</strong>，出发当天必查 readyslo.org',
          '<strong>疏散警告区内不建议做难以快速撤离的活动</strong>——下切 330 英尺再爬回来正是这种。烟况或火情紧张时请只在崖上拍',
          'Hwy 1 在此以北封闭，<strong>这里现在是一条尽头路</strong>，看完必须原路南返',
          '8 月下旬 Inn 曾因火情取消活动，抵达前请电话确认营业状态',
          '注意区分：真正叫 Ragged Point Beach 的沙滩在更南边，需从 San Carpoforo Beach 进入，是另一个地方',
          '崖上有餐厅、酒吧、espresso bar、冰淇淋店与礼品店，拍完可就地补给'
        ],
        images: [
          { url: 'img/ragged-point-from-ragged-point-inn-7339d0a7.jpg', cap: 'Ragged Point Inn 崖上南望 Big Sur 海岸 · ECTran71 / CC BY-SA 4.0' },
          { url: 'img/ragged-point-8005a4f0.jpg', cap: '南望 SLO 海岸线，平坦沙滩为 San Carpoforo Creek 口 · Eric Polk / CC BY-SA 4.0' },
          { url: 'img/ragged-point-seals-1-211a17f6.jpg', cap: 'Ragged Point 海豹 · CC BY-SA 4.0' }
        ]
      },
      {
        id: 'daou',
        n: 5,
        name: 'DAOU 酒庄',
        en: 'DAOU Vineyards, Paso Robles',
        score: 4,
        tldr: '这条线上唯一的高质量建筑题材，也是最佳人像点；但必须提前预约，且 17:00 关门拍不到日落。',
        tags: [{ t: '必须预约', c: 'book' }, { t: '$50 起／人', c: 'paid' }, { t: '拍不到日落', c: 'risk' }, { t: '顺路', c: 'free' }],
        highlights: [
          '<strong>DAOU Mountain 海拔 2,200 英尺，是加州中央海岸海拔最高的酒庄</strong>，山坡坡度可达 56%，从海岸山脉中戏剧性拔起',
          '<strong>西班牙殖民／教会风格</strong>白色建筑群，钟塔上挂着一口 <strong>1740 年的西班牙修道院铜钟</strong>，' +
            '入口有 EST 2007 锻铁拱门，外围是大片薰衣草田与俯瞰葡萄园的大露台',
          '因 Hwy 1 封闭、绕行必经 Paso Robles，<strong>这里从「绕远点」变成了「顺路点」</strong>'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>5/5</strong>，风光 <strong>4/5</strong>。' +
          '西班牙殖民风格白墙加钟塔加锻铁拱门加 1740 年古钟加薰衣草前景，元素完整且有主题性。' +
          '白墙、钟塔、拱门、薰衣草、露台、无尽山景——这是整条线上最适合人像与打卡的地点，且环境舒适（有座位、餐食、洗手间）。',
        shots: [
          {
            name: '入口锻铁拱门（EST 2007）+ 薰衣草田',
            desc: '抵达时必拍。薰衣草做前景，拱门做框架。24–70mm；35mm 拍环境人像。',
            park: [35.64140, -120.78430],
            view: [35.64140, -120.78430]
          },
          {
            name: '钟塔 + 白色主建筑立面',
            desc: '最佳时段 <strong>上午 10:00–11:30</strong>，光线最柔且人最少。24–70mm，广角端注意梯形畸变，' +
              '建议移轴或后期校正。塔有门禁，能否登塔请现场询问。',
            view: [35.64140, -120.78430]
          },
          {
            name: '大露台 / 庭院俯瞰葡萄园与海岸山脉',
            desc: '本地点的风光机位。受营业时间限制，<strong>最佳可用时段是 16:00–17:00</strong>（闭店前一小时，光线开始转暖）。' +
              '<strong>70–200mm 压缩山脉层次是这里的正解</strong>，24–70mm 拍露台环境。',
            view: [35.64140, -120.78430]
          }
        ],
        access: {
          book: '<strong>强制要求。</strong>官方原文：每一张桌子都需预订，即便吧台也不保证 walk-in。工作日多数时段可当天约；<strong>周末需提前 2–4 周</strong>',
          ticket: 'Discover DAOU（60 分钟）<strong>$50/人</strong>；The Estate Experience（90 分钟）$95–110/人；Patrimony Immersion（2.5 小时，仅周一至周四）$275/人',
          hours: '<strong>每日 10:00–17:00，仅接受预约</strong>',
          parking: '山上停车位有限，<strong>仅供已确认预约的客人</strong>。入口 Kiosk 有工作人员核验后分配上下层停车场——<strong>不要越过 Kiosk 自行开进去</strong>',
          walk: '<strong>1–3 分钟</strong>，建筑群内步行',
        },
        notes: [
          '<strong>17:00 关门，而 9 月 Paso Robles 日落约 19:20——你无法在正常预约中拍到日落</strong>，甚至拍不到完整暮金光。旧游记说这里日落极佳，那是营业时间更晚的时期',
          '应对方案：把 DAOU 定位为白天的建筑人文加高位风光点，日落另找 Cambria 或 Montaña de Oro；或预约当日最后一档（约 15:30–16:00 入场）拿到开始转暖的光',
          '<strong>你的行程含劳工节长周末，9/5–7 的档位现在很可能已满，请立刻预订，或安排在 9/8、9/9</strong>',
          '酒庄建议订上午场避热（多数座位在户外，海拔 2,200 英尺）',
          '<strong>品酒涉及饮酒，Hidden Mountain Road 是多弯盘山路，请安排不饮酒的驾驶员</strong>',
          '所有预约均为品酒 flight，不是单杯或单瓶',
          'Plaskett Fire 正向东烧入 Fort Hunter Liggett，Paso Robles 在其东南方向，需留意空气质量'
        ],
        images: [
          { url: 'img/daou-winery-view-paso-robles-e2a92da7.jpg', cap: 'DAOU 露台视角俯瞰葡萄园 · SD Dirk / CC BY 2.0' },
          { url: 'img/daou-vineyards-paso-robles-california-usa-feb-2012-0be8a8bf.jpg', cap: 'DAOU 葡萄园宽幅全景 · SD Dirk / CC BY 2.0' }
        ]
      },
      {
        id: 'moonstone',
        n: 6,
        name: '月光石海滩',
        en: 'Moonstone Beach, Cambria',
        score: 5,
        tldr: '免费、停车即机位、正西日落、栈道人像布景四种齐备——这条线上性价比第一的日落点。',
        tags: [{ t: '免费', c: 'free' }, { t: '无需预约', c: 'free' }, { t: '无障碍栈道', c: 'free' }],
        highlights: [
          '悬崖上一条约 1–1.5 英里的木栈道，从南端 Santa Rosa Creek 一直连到北端 Leffingwell Landing，全程无遮挡海景',
          '海滩以玛瑙、月光石卵石著称；南端 Santa Rosa Creek 入海形成潟湖河口，鸟况极好',
          '可见海獭浮在海藻床上、鹈鹕、鸬鹚、海豚。栈道平坦、ADA 无障碍'
        ],
        photo: '风光 <strong>5/5</strong>，人像 <strong>5/5</strong>，建筑 <strong>3/5</strong>。' +
          '正西朝向、免费、停车就在机位旁、栈道提供无数机位选择、退潮时湿沙反射晚霞——' +
          '栈道本身也是极好的引导线元素。木栈道加海景加漂流木加柏树，四种人像布景在 1 英里内全部具备，且离车极近。',
        shots: [
          {
            name: '栈道中段悬崖边（主机位）',
            desc: '用栈道栏杆做前景引导线指向落日。最佳时段 <strong>18:45–19:50</strong>。24–70mm 主力，16–35mm 拍栈道透视。',
            park: [35.56930, -121.10800],
            view: [35.57480, -121.11190]
          },
          {
            name: '海滩上（中段阶梯下去）',
            desc: '<strong>必须查潮汐挑退潮时段</strong>，低潮才能走长距离，湿沙倒影是这里的招牌。' +
              '后方有大型漂流木与岩石可做前景。16–35mm 贴地拍卵石与湿沙倒影；1/4–1 秒慢门拍退浪拉丝。',
            view: [35.57480, -121.11400]
          },
          {
            name: 'Santa Rosa Creek 河口潟湖（南端）',
            desc: '河口加潟湖倒影加鸟群，构图比开阔海滩更有层次。70–200mm 拍鸟，24–70mm 拍河口全景。',
            view: [35.56930, -121.10800]
          },
          {
            name: 'Leffingwell Landing（北端）',
            desc: '有野餐区，人较少；岩石海岸线比南段更嶙峋。推荐动线：停 Santa Rosa Creek 走海滩北上，从栈道折返成环线，约 2 英里。',
            park: [35.58070, -121.11810],
            view: [35.58070, -121.11810]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免费',
          hours: '全天',
          parking: '<strong>完全免费</strong>。Moonstone Beach Drive 全线路肩可停，两端另有两个正式停车场。<strong>日落前会迅速停满</strong>',
          walk: '<strong>1–3 分钟、50–200 米</strong>，栈道紧邻马路，是这条线上最省力的机位',
        },
        notes: [
          '<strong>烟雾是最大变量</strong>：Cambria 距 Plaskett Fire 仅数十英里，烟正南飘。两种预案都准备',
          '劳工节周末路肩车位在日落前 1 小时基本满位，建议 <strong>17:30 前到位</strong>',
          '因 Hwy 1 封闭加 CA-46 施工，Cambria 现在是南下车流的漏斗口，镇上餐厅住宿会比平常紧张',
          '9 月不是野花季，灰鲸迁徙在 12–4 月；9 月主要是海獭、海豚、鹈鹕',
          '上午常有浓雾，若要清透深蓝海水请等下午'
        ],
        images: [
          { url: 'img/cambria-ca-15-743fc60f.jpg', cap: 'Moonstone Beach 海岸 · Stilfehler / CC BY-SA 4.0' },
          { url: 'img/cambria-ca-17-2b3bcb1c.jpg', cap: 'Moonstone Beach 栈道与礁岩 · Stilfehler / CC BY-SA 4.0' },
          { url: 'img/cambria-ca-23-f183f098.jpg', cap: 'Moonstone Beach 海岸线 · Stilfehler / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'green-valley',
        n: 7,
        name: '绿谷观景点',
        en: 'Green Valley Viewing Point, CA-46',
        score: 3,
        tldr: '位置更正：不在 Big Sur，而在 CA-46 绕行路上，顺路免费。但 9 月山谷是金黄不是绿，且极依赖能见度。',
        tags: [{ t: '免费', c: 'free' }, { t: '顺路', c: 'free' }, { t: '9 月非最佳季', c: 'risk' }, { t: '施工路段', c: 'risk' }],
        highlights: [
          '<strong>位置更正</strong>：原清单标注在 Big Sur 一带，经核实不正确。真实位置是 <strong>CA-46 West 沿线的路边观景土台</strong>，' +
            '在 Cambria 以东约 6.7–8.5 英里的内陆山区。因 Hwy 1 封闭、绕行必经此路，这个点反而从「绕远」变成了顺路',
          '海拔约 1,700 英尺，180° 俯瞰层叠丘陵，晴天可越过丘陵看到太平洋与远处的 <strong>Morro Rock</strong>'
        ],
        photo: '风光 <strong>3/5</strong>（9 月）／春季可达 5/5。构图潜力很高——长焦压缩丘陵层次加远处 Morro Rock 剪影是极好的题材，' +
          '但 <strong>9 月是致命季节问题</strong>：山谷只在 4–5 月是绿的，其余时间是金黄色，当地人直言这时候是「Brown Valley」。' +
          '金色丘陵配日落暖光自有一种加州特质美，但达不到宣传照的水准。',
        shots: [
          {
            name: '西侧土台（主点）',
            park: [35.545474, -120.918648],
            view: [35.545474, -120.918648],
            desc: '<strong>70–200mm 是这里的主力镜头</strong>——压缩丘陵层次、把远处 Morro Rock 拉近，100–400mm 更佳。' +
              '16–35mm 拍全景效果一般（丘陵会被压扁）。最佳时段日落前 1 小时至日落。' +
              '<strong>拍摄前提是能见度，这是受烟雾影响最严重的点位，烟大时基本报废。</strong>',
            at: [35.54550, -120.91860]
          },
          {
            name: '西侧土台之二（多份游记称视野最佳）',
            park: [35.545685, -120.916466],
            view: [35.545685, -120.916466],
            desc: '紧邻主点，位置稍高。三处土台都停一下实际取景对比即可，停车位置就是机位。',
            at: [35.54570, -120.91650]
          },
          {
            name: '东侧土台',
            park: [35.542553, -120.902518],
            view: [35.542553, -120.902518],
            desc: '距 Hwy 1/CA-46 路口约 11.4 英里，视角略有不同，可作对比机位。东段景观转为葡萄园。',
            at: [35.54260, -120.90250]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免费',
          hours: '全天',
          parking: '路边土质 turnout，免费。<strong>转入方式相当惊险</strong>，一份游记原文形容为「hair-raising」，减速要早并注意后车',
          walk: '<strong>0 分钟</strong>，停车位置即机位',
        },
        notes: [
          '<strong>CA-46 West 单向交替放行施工至 9 月 25 日</strong>，观景点很可能就在或紧邻施工段内，施工车辆与临时锥桶会影响取景和停车',
          '<strong>无厕所、无水、无垃圾桶、无标识牌</strong>——这些是非正式路肩，不是管理型景区',
          '傍晚在此逗留后需继续开山路，注意 CA-46 山区弯道加夜间施工',
          '白天有农业机械上路，弯道盲区多',
          'Wikimedia Commons 上没有这个地点的照片。搜到的同名图片是印度 Tamil Nadu 的 Kodaikanal 同名景点，与此无关'
        ],
        images: [
          { url: 'img/beautiful-scenes-along-route-46-in-california-lccn2013632166-10394e50.jpg', cap: 'CA-46 沿线金色丘陵与海雾 · Carol M. Highsmith / 公有领域' },
          { url: 'img/beautiful-scenes-along-route-46-in-california-lccn2013632565-52c3c1fd.jpg', cap: '海雾翻越山脊，丘陵层次分明 · Carol M. Highsmith / 公有领域' }
        ]
      },
      {
        id: 'montana-de-oro',
        n: 8,
        name: '黄金山州立公园（Spooner\u2019s Cove + Bluff Trail）',
        en: 'Montaña de Oro State Park, Los Osos',
        score: 5,
        tldr: '独特倾斜岩层加 2.1 英里悬崖步道，完全免费——这条线上最强的海岸风光点，且距火场 120 英里烟雾影响小。',
        tags: [{ t: '完全免费', c: 'free' }, { t: '无需预约', c: 'free' }, { t: '烟雾影响小', c: 'free' }, { t: 'Corallina Cove 下切关闭', c: 'risk' }],
        highlights: [
          '<strong>Spooner\u2019s Cove</strong>：被砂岩崖壁环抱的小湾，湾内有极具雕塑感的古老岩层——倾斜层理、蜂窝风化（tafoni）、Submarine Rock、The Sphynx。<strong>这些倾斜的层状岩石是整条中央海岸线上最独特的地质题材</strong>',
          '<strong>Bluff Trail</strong>：单程 2.1 英里，几乎全平（爬升约 0 英尺），紧贴悬崖边缘。沿线有 Quarry Cove、Grotto Rock、天然拱桥、Islay Point。近期改造后可轮椅通行',
          '<strong>Spooner Ranch House</strong>：1890 年代牧场主宅，现为访客中心，内有时代家具陈设',
          '园区 8,000+ 英亩、8 英里海岸线。名字意为「黄金之山」，得名于春季金色野花'
        ],
        photo: '风光 <strong>5/5</strong>，人像 <strong>4/5</strong>，建筑 <strong>3/5</strong>。' +
          '悬崖高度适中（既有俯视感又能拍到浪的细节）、独特的倾斜岩层让构图元素远比普通沙滩丰富、正西朝向、' +
          '2.1 英里悬崖步道提供数十个机位、完全免费、可望见 Morro Rock 作远景锚点。Bluff Trail 平坦好走，模特不受苦，但风大。',
        shots: [
          {
            name: 'Bluff Trail 首个观景点 —— 俯瞰 Spooner\u2019s Cove（第一机位）',
            desc: '从主停车场步行 <strong>3–5 分钟</strong>。俯拍小湾全景加倾斜岩层，北望 Morro Rock。' +
              '最佳时段日落前 1 小时至暮光（18:20–19:50）；上午顺光拍岩层纹理也很好。' +
              '16–35mm 拍小湾全景，24–70mm 主力，70–200mm 压缩 Morro Rock 与海岬层次。',
            park: [35.27290, -120.88860],
            view: [35.27320, -120.88980]
          },
          {
            name: 'Spooner\u2019s Cove 沙滩（海平面机位）',
            desc: '从沙滩停车场步行 1–2 分钟。湾内岩层从低角度看极具压迫感，退潮有潮池。' +
              '<strong>必查潮汐，退潮为佳。</strong>日落时湾内会先进入阴影，建议日落前 1.5 小时拍岩层，再上悬崖拍日落。' +
              '16–35mm 贴近岩石，慢门 1/2–2 秒拍浪绕岩。',
            park: [35.27450, -120.88850],
            view: [35.27490, -120.88880]
          },
          {
            name: 'Bluff Trail 南段 —— Quarry Cove / Grotto Rock / 天然拱桥',
            desc: '自主停车场南行 0.7–1.7 英里（步行 20–45 分钟）。Quarry Cove 潮池活跃（海葵、贻贝、海星），' +
              'Grotto Rock 与天然拱桥是构图地标。24–70mm 加 70–200mm。' +
              '注意 Corallina Cove 处（约 0.5 英里）的下切阶梯已无限期关闭，但 Bluff Trail 主线正常。',
            view: [35.27230, -120.89480]
          },
          {
            name: 'Spooner Ranch House（建筑）',
            desc: '1890 年代真实历史牧场建筑，木构、时代陈设，比 Dunes Center 的题材更「加州西部」。' +
              '上午柔光或傍晚斜光，24–70mm。访客中心开放时间随季节变动，需电话 805-539-6857 确认。',
            view: [35.27400, -120.88800]
          }
        ],
        access: {
          book: '不需要',
          ticket: '<strong>完全免费</strong>，官方明示无入园费也无停车费',
          hours: '日用区 <strong>06:00–22:00</strong>，可以拍完蓝调再走',
          parking: '园内多处 turnout，主停车场在 Spooner Ranch House 附近。<strong>周末与假日热门 trailhead 车位很快满，务必早到</strong>',
          walk: '首个观景点 3–5 分钟／250 米；沙滩 1–2 分钟／100 米；南段 Grotto Rock 20–45 分钟／0.7–1.7 英里',
        },
        notes: [
          '<strong>Corallina Cove 下切通道无限期关闭</strong>（风暴侵蚀导致不安全）。Bluff Trail 主线不受影响；替代方案是往南多走到 Quarry Cove，潮池同样丰富',
          '劳工节周末停车位竞争激烈，建议排在 9/8 或 9/9，或当天 15:30 前到达',
          '<strong>园内没有任何餐饮服务</strong>，需自带水和食物',
          '<strong>Poison Oak 全园分布广泛</strong>，走岔路时特别注意',
          '夏季海边比内陆低约 30°F，务必分层穿衣；悬崖上风大',
          '手机信号差，离线地图必备',
          '狗仅限营地、车行道与 Spooner\u2019s Cove 沙滩（需牵引绳），所有步道禁止'
        ],
        images: [
          { url: 'img/spooners-cove-mdosp-e85eed66.jpg', cap: 'Spooner\u2019s Cove 南望全景 · Eric Polk / CC BY-SA 4.0' },
          { url: 'img/cliffs-at-montana-de-oro-state-park-panoramio-35f330ab.jpg', cap: '崖顶机位实景 · hakkun / CC BY-SA 3.0' },
          { url: 'img/montana-de-oro-state-park-bluff-trail-4-142c2d5a.jpg', cap: 'Bluff Trail 俯瞰 Spooner\u2019s Cove · Stilfehler / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'oceano-dunes',
        n: 9,
        name: '奥西亚诺沙丘访客中心 + Pismo 栈桥',
        en: 'Oceano Dunes Visitor Center · Pismo Beach Pier',
        score: 3,
        tldr: '步行进沙滩完全免费不需通行证；Edward Weston 1936 年就在这片沙丘拍出摄影史经典。Pismo 栈桥是可靠的日落备案。',
        tags: [{ t: '步行免费', c: 'free' }, { t: '中心周日周一闭馆', c: 'risk' }, { t: '烟雾影响最小', c: 'free' }],
        highlights: [
          '访客中心只是个小型解说站，真正价值在周边沙丘与海滩。' +
            '<strong>Edward Weston 1936 年就在这片沙丘拍出了 20 世纪现代主义摄影的里程碑之作</strong>——' +
            '对摄影史有兴趣的话，站在 Weston 拍过的沙丘上本身就是这一站的意义',
          '<strong>Pismo Beach Pier</strong> 在北侧约 3 英里，是本区最可靠的日落加建筑结构机位'
        ],
        photo: '风光 <strong>4/5</strong>，人像 <strong>3/5</strong>，建筑 <strong>2/5</strong>。' +
          '沙丘加正西海滩加免费步行进入。<strong>但这里是全加州唯一允许机动车上沙滩的州立公园之一</strong>，' +
          '越野车会严重干扰画面纯净度和沙面完整性。<strong>关键技巧：往 Pier Avenue 以北走，那一侧非越野区，沙面干净。</strong>',
        shots: [
          {
            name: 'Pier Avenue 尽头沙滩，向北走（主机位）',
            desc: '<strong>关键</strong>：Post 2 位于 Pier Avenue 以南 1 英里，是越野区起点。<strong>往北走等于无车、干净沙面。</strong>' +
              '最佳时段日落前 1 小时至暮光（18:20–19:45）。16–35mm 拍沙纹前景加落日，70–200mm 拍沙脊层次。' +
              '<strong>步行进入免费，不需要车辆通行证。</strong>',
            park: [35.10670, -120.62680],
            view: [35.10590, -120.63090]
          },
          {
            name: 'Pismo Beach Pier（日落备案）',
            park: [35.138974, -120.642746],
            view: [35.138331, -120.644608],
            desc: '北侧约 3 英里，车程 8–10 分钟。<strong>栈桥桩柱剪影加落日是经典构图。</strong>' +
              '时段日落至暮光（19:20–19:45）。24–70mm；慢门 1–4 秒配 ND 拍桩柱周围的水流雾化。',
            at: [35.13980, -120.64370]
          },
          {
            name: '访客中心室内展示',
            view: [35.106700, -120.626800],
            desc: '仅在开放时段（周二至周六 12:00–16:00）。光线弱，需大光圈。',
            at: [35.10670, -120.62680]
          }
        ],
        access: {
          book: '不需要',
          ticket: '访客中心<strong>免费</strong>；<strong>步行进沙滩免费且无需通行证</strong>；车辆上沙滩 $5/车',
          hours: '访客中心 <strong>周二至周六 12:00–16:00</strong>，周日与周一关闭；车辆上沙滩 07:00–22:00',
          parking: '访客中心与 Pier Avenue 沿线有街边停车，铺装车位免费',
          walk: '访客中心 <strong>0 分钟</strong>；到沙滩机位步行 <strong>5–8 分钟</strong>、约 400 米',
        },
        notes: [
          '<strong>访客中心 9/6 周日、9/7 劳工节关闭</strong>，即使开放也只有四小时',
          '两个官方页面对营业日有矛盾记载（一处写周二至周六，一处写每日 12:00–16:00），已按较严格者规划，建议电话确认',
          '劳工节周末车辆通行证极可能启用线上预售制（闸口不售票，上限 1,800 辆/日，年票在预售日无效）。<strong>但如果你只是步行进沙滩拍照，这完全不影响你</strong>',
          'Pier Avenue 正在施工重铺，Beach 至 Norswing Drive 段由四车道缩为三车道，可能有临时延误',
          '<strong>距火场约 100 英里，烟雾影响最小——这是本次行程的空气质量最优区</strong>'
        ],
        images: [
          { url: 'img/dunes-oceano-1936-by-edward-weston-27f1f153.jpg', cap: 'Dunes, Oceano, 1936 · Edward Weston / 公有领域' },
          { url: 'img/pismo-beach-pier-north-view-20110805-1-0e397f05.jpg', cap: 'Pismo Beach Pier 日落，即机位 B · DXR / CC BY-SA 4.0' },
          { url: 'img/view-of-the-guadalupe-nipomo-dunes-from-oceano-3a2d6cb5.jpg', cap: '从 Oceano 俯瞰沙丘复合体北端 · Engl145 / 公有领域' }
        ]
      },
      {
        id: 'guadalupe-dunes',
        n: 10,
        name: '瓜达卢佩沙丘（含沙丘中心）',
        en: 'Rancho Guadalupe Dunes Preserve · Dunes Center',
        score: 4,
        tldr: '西海岸最高沙丘（550 英尺）。9 月仍在雪鸻繁殖季封闭期，内陆沙丘与河口进不去，但海滩本身开放，远景轮廓照常可拍。',
        tags: [{ t: '海滩开放', c: 'free' }, { t: '中心 $7/人', c: 'paid' }, { t: '内陆沙丘封闭', c: 'risk' }, { t: '9/7 上午闸门关', c: 'risk' }],
        highlights: [
          '<strong>西海岸最高的沙丘，高达 550 英尺</strong>，加上 Santa Maria River 河口湿地，构成生态学上极重要的复合体',
          '这里<strong>没有既成步道系统</strong>——官方原文「doesn\u2019t have a system of established trails」。主要徒步是沿海滩南行至 Mussel Rock',
          '<strong>Dunes Center</strong>（1055 Guadalupe St）是一栋修复过的 <strong>1910 年 Craftsman bungalow</strong>：外露椽头、宽门廊、低坡屋顶、粗壮方柱',
          '中心展出 <strong>《十诫》考古文物</strong>——1923 年 Cecil B. DeMille 在这片沙丘拍摄默片，整套巨型埃及布景被就地掩埋，至今仍完整埋在沙下。这是本次行程唯一的电影史题材'
        ],
        photo: '风光 <strong>5/5</strong>（若无封闭）／人像 <strong>4/5</strong>／沙丘中心建筑 <strong>4/5</strong>。' +
          '550 英尺沙丘加正西朝向海滩，是本次行程唯一的大型沙丘题材。沙丘的光影脊线与风纹在低角度光下极具雕塑感，' +
          '这是海岸线摄影里完全不同的一种语言。纯净沙丘曲线做背景、无任何杂物入镜，是极高级的人像布景。',
        shots: [
          {
            name: '停车场南侧沙滩与前沙丘（主机位）',
            desc: '最佳时段日落前 1 小时至暮光（18:20–19:50），<strong>低角度侧光是拍沙丘风纹的唯一正确光线</strong>。' +
              '16–35mm 贴近沙面拍风纹透视；<strong>70–200mm 压缩沙丘脊线层次</strong>（沙丘摄影长焦往往比广角更强）。' +
              '技巧：极低机位贴沙 20cm 配小光圈超焦距。注意别把脚印拍进画面。',
            park: [34.96510, -120.65040],
            view: [34.95950, -120.65040]
          },
          {
            name: 'Mussel Rock 方向（南行 2.5 英里）',
            desc: '从南端可回望整个沙丘复合体。<strong>深沙中往返 5 英里非常耗体力</strong>，单程约 60–75 分钟。' +
              '官方警告此处浪况危险。若要在此拍日落需精算返程时间——暮光结束后在沙丘里走夜路有风险。',
            view: [34.93290, -120.66260]
          },
          {
            name: 'Dunes Center 建筑正立面',
            desc: 'Guadalupe St 街对面人行道。最佳时段上午 10:00–12:00，或阴天薄雾天。' +
              '24–70mm，广角端拍全立面，35–50mm 拍门廊细节与椽头。移轴或后期校正梯形畸变。' +
              '室内《十诫》展品光线弱，需高 ISO 或大光圈，<strong>拍摄前务必先询问工作人员</strong>。',
            park: [34.97230, -120.57210],
            view: [34.97230, -120.57210]
          }
        ],
        access: {
          book: '均不需要（Dunes Center 欢迎预约）',
          ticket: '沙丘保护区<strong>无正式门票</strong>，入口大门处请求自愿捐款；Dunes Center 成人 <strong>$7</strong>、老年 $6、12 岁及以下免费',
          hours: '沙丘保护区<strong>每日 07:00 至黄昏</strong>（9 月黄昏约 19:45，<strong>可以拍到日落</strong>）；Dunes Center <strong>周二至周六 10:00–15:00</strong>',
          parking: '沙丘：路尽头铺装停车场<strong>免费</strong>，假日与周末会很早满，大门会关闭并采用「出一辆进一辆」。<strong>入口道路沿线禁止停车或停留</strong>。Dunes Center：街边免费，小镇车少非常好停',
          walk: '沙丘：<strong>1–3 分钟</strong>到沙滩与前沙丘；到 Mussel Rock 约 60–75 分钟单程。Dunes Center：0–2 分钟',
        },
        notes: [
          '<strong>雪鸻／燕鸥繁殖季封闭：3 月 1 日至 9 月 30 日，你的行程完全落在封闭期内。</strong>内陆沙丘与河口被绳索围起禁止进入；仅海滩本身与入口道路沿线开放',
          '<strong>实际影响</strong>：能拍到海滩、前缘沙丘和 550 英尺沙丘的远景，但不能走进沙丘深处拍那些最精彩的纯净风纹和脊线。绳索通常在季节正式结束前几天才撤，9 月上旬太早',
          '<strong>Dunes Center 在 9/6（周日）与 9/7（劳工节）关闭</strong>，可行日期只有 9/5、9/8、9/9，且必须 15:00 前到',
          '<strong>9/7 周一上午大门可能因清沙／道路维护关闭</strong>，通常 12:00 前重开。当日建议下午来，或电话 805-343-2354 确认',
          '<strong>车辆完全禁止上沙滩</strong>（与北边的 Oceano Dunes 不同）',
          '入口道路会有流沙上路，弯道盲区多',
          '9 月的海雾可能整日不散，下午通常较好。深沙行走极耗体力，请带足水',
          '<strong>距火场远，烟雾影响小</strong>——北边烟大时这里是替代方案'
        ],
        images: [
          { url: 'img/guadalupe-nipomo-dunes-nwr-sunset-11519903986-7521feb1.jpg', cap: '沙丘日落（本题材标杆之作）· Ian Shive / USFWS / 公有领域' },
          { url: 'img/guadalupe-dunes-county-park-beach-c782aa27.jpg', cap: 'Rancho Guadalupe 沙滩，即主机位 · Adbar / CC BY-SA 3.0' },
          { url: 'img/us-ca-mussel-rock-guadalupe-beach-b8338eb4.jpg', cap: '南端 Mussel Rock 回望视角 · Kevin P. Rice / CC BY-SA 3.0' }
        ]
      }
    ]
  },

  /* ===================== ② Santa Barbara + Malibu ===================== */
  {
    id: 'sb-malibu',
    name: '② Santa Barbara + Malibu 海岸段',
    navName: 'SB + Malibu',
    color: '#f2b134',
    lead: '原清单在这一区只有 4 个点，我补了 4 处高价值机位（Old Mission、Stearns Wharf + Butterfly Beach、Point Mugu Rock、El Matador），' +
      '都标注为「补充建议」。9 月在这段海岸被当地人称为 second summer，是全年最通透的月份之一，June Gloom 已基本退场。',
    callouts: [
      {
        type: 'good',
        title: 'PCH 在 9/4–9/7 完全不封道',
        html: '<p>PCH 已于 2025 年 5 月恢复公众通行，无需通行证。但 Temescal Canyon Rd 至 Carbon Beach Terrace 一段<strong>仍是活跃施工区</strong>：' +
          '工作日 09:00–15:00 可能单车道封闭，限速 25–35 mph，<strong>施工区内禁止停车、禁止路边停留、禁止行人，罚款翻倍</strong>。</p>' +
          '<p>好消息：Caltrans 明确 <strong>9/4 06:00 至 9/7 23:59 不设任何车道封闭</strong>，所以 9/5–9/7 这段路况最好；<strong>9/8 起恢复常规施工</strong>。</p>' +
          '<p>另外 2026 年初 Malibu 市界内 21 英里 PCH 已完成固定测速摄像头部署，请严格守速。</p>'
      },
      {
        type: 'warn',
        title: 'Getty Villa 周二闭馆 —— 9/8 千万别去',
        html: '<p>2025 年 1 月 Palisades Fire 后闭馆约 5.5 个月，2025 年夏季已重新开放，建筑与藏品未受损。' +
          '但<strong>园区约 44% 的树木因火损被移除</strong>，花园视觉与 2025 年前的网图有明显差异。' +
          '现行制度：<strong>免门票但必须预约免费定时入场票（不接受 walk-in），停车 $25／15:00 后 $15，仅刷卡</strong>。' +
          '<strong>每周二闭馆，9/8 是周二。</strong>可去的日期是 9/5、9/6、9/7、9/9。</p>'
      },
      {
        type: 'warn',
        title: 'Point Dume 主通道无限期关闭——但崖顶可能另有入口',
        html: '<p>2026 年 8 月 1–2 日高潮位与涌浪造成严重侵蚀，崖缘不稳、局部落差近 8 英尺，路基部分塌陷。' +
          '<strong>成因是海岸侵蚀，不是山火修复工程</strong>（Palisades Fire 只是间接背景：烧毁的滨海住宅连带失去了原有海堤）。' +
          '<strong>Westward Beach Road 与 373 车位的下层停车场已关闭，无预计重开日期</strong>；' +
          '8 月 6 日起进一步升级，<strong>Birdview Avenue 入口在每日 05:00–15:00 对行人和自行车也关闭</strong>。</p>' +
          '<p><strong>但县方公告点名关闭的是 Westward Beach Road 入口，并未提及崖顶保护区在 Cliffside Drive 29188 号的独立入口</strong>' +
          '（约 10 个车位、限时 2 小时、不经施工闸门）。这一条无法从官方渠道确认，<strong>出发当天请致电 LA County Beaches &amp; Harbors 询问</strong>——' +
          '这是唯一可能保住整个 Point Dume 拍摄点的信息。详见该条目，另有 Zuma Beach 替代方案。</p>' +
          '<p>另需留意：飓风 Marie 的外围涌浪（9/4 起 6–8 英尺、持续到 9/8）正是造成 8 月 1 日崩塌的同一类组合，<strong>封闭范围在行程期内可能再变</strong>。</p>'
      },
      {
        type: 'tip',
        title: '日落与 Sundowner 焚风',
        html: '<p>Santa Barbara 日落 9/5 <strong>19:22</strong> → 9/9 <strong>19:16</strong>；Malibu 9/5 <strong>19:17</strong> → 9/9 <strong>19:12</strong>。' +
          '黄金时刻为日落前 40 分钟，蓝调最佳在日落后 15–25 分钟，海边约 19:30–19:45 收工。</p>' +
          '<p>需留意 Santa Barbara 县西南部特有的 <strong>Sundowner 焚风</strong>：傍晚可能从 Santa Ynez 山脉下沉，带来强阵风与浮尘，' +
          '对长曝和三脚架稳定性有影响，但<strong>常常反而让日落色彩更浓</strong>。</p>'
      }
    ],
    spots: [
      {
        id: 'old-mission-sb',
        n: 1,
        name: '圣巴巴拉老教堂（补充建议）',
        en: 'Old Mission Santa Barbara',
        score: 4.5,
        tldr: '加州唯一双钟塔的传教站教堂，与法院构成 Santa Barbara「西班牙风格双璧」，只拍其一是明显遗漏。',
        tags: [{ t: '补充建议', c: 'book' }, { t: '$17/人', c: 'paid' }, { t: '停车免费', c: 'free' }, { t: '外景免票可拍', c: 'free' }],
        highlights: [
          '<strong>「Queen of the Missions」（传教站女王）</strong>，1786 年方济各会创建，是加州 21 座传教站中的第十座，' +
            '也是<strong>唯一拥有双钟塔</strong>的一座——这个对称立面正是它得名的原因',
          '现在这座建筑是 1820 年的第四代。前三座分别毁于地震与年久失修，1925 年 Santa Barbara 大地震又震塌了钟塔，' +
            '现存立面是此后按原样重建的。<strong>它是加州唯一自建成起从未中断使用的传教站</strong>',
          '玫瑰色砂岩立面配新古典式三角山花，这个设计据信参考了古罗马建筑师维特鲁威的著作插图——' +
            '一本 1787 年的西班牙语译本至今还留在教堂藏书室里',
          '前方是宽阔草坪与 <strong>A.C. Postel 玫瑰园</strong>；内部有博物馆展厅、中庭花园，以及一片仍在使用的历史墓园，' +
            '安葬着约 4,000 名 Chumash 原住民'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>4/5</strong>，风光 <strong>2/5</strong>。' +
          '立面朝东南偏南，<strong>午后光最饱满</strong>，暖光下砂岩呈玫瑰金色。侧翼连续拱券的透视与光斑是人像绝佳素材。',
        shots: [
          {
            name: '草坪正对面中轴线',
            desc: '双塔完全对称，24–35mm。<strong>下午 15:00–17:30 立面正面受光</strong>，清晨也可但光偏冷。',
            park: [34.43754, -119.71316],
            view: [34.43770, -119.71360]
          },
          {
            name: '玫瑰园低机位',
            desc: '用前景花丛框住教堂，35mm。春夏花期更佳，9 月玫瑰仍有二次花。',
            view: [34.43770, -119.71360]
          },
          {
            name: '侧翼拱廊与内部中庭',
            desc: '连续拱券的透视与光斑，50mm 或 85mm，人像绝佳。内部中庭花园与墓园用 85mm 浅景深，光线柔和。',
            view: [34.43837, -119.71374]
          }
        ],
        access: {
          book: '自助游览无需预约（10 人以下）',
          ticket: '成人 <strong>$17</strong>、65+ 与现役军人 $15、5–17 岁 $12、4 岁以下免费。<strong>草坪与立面外景不需买票就能拍</strong>，门票是进博物馆、中庭与墓园用的',
          hours: '周一至周六 09:30–17:00，周日 12:30–17:00，<strong>均为 16:00 停止售票</strong>。周日上午 09:30–12:30 因弥撒不对游客开放教堂',
          parking: '教堂<strong>免费停车场</strong>，Los Olivos Street 侧',
          walk: '<strong>约 100 米、2 分钟</strong>',
        },
        notes: ['建议停留 1–2 小时'],
        images: [
          { url: 'img/facade-mission-santa-barbara-laguna-street-santa-barbara-ca--2e4d674f.jpg', cap: 'Old Mission 正立面 · Warren LeMay / CC BY-SA 2.0' },
          { url: 'img/mission-santa-barbara01-7ce6d357.jpg', cap: 'Mission Santa Barbara 双钟塔 · Bernard Gagnon / CC BY-SA 3.0' },
          { url: 'img/mission-santa-barbara-laguna-street-santa-barbara-ca-5392916-59c2993e.jpg', cap: 'Mission 与前方草坪 · Warren LeMay / CC BY-SA 2.0' }
        ]
      },
      {
        id: 'sb-courthouse',
        n: 2,
        name: '圣巴巴拉县法院大楼',
        en: 'Santa Barbara County Courthouse',
        score: 5,
        tldr: '免费登塔、内部可拍、光线极佳的西班牙殖民复兴建筑；但 16:30 门禁，比日落早近三小时。',
        tags: [{ t: '完全免费', c: 'free' }, { t: '无需预约', c: 'free' }, { t: '16:30 门禁', c: 'risk' }],
        highlights: [
          '<strong>确认：原清单上的「Superior Court Of California County Of Santa Barbara」就是这一栋。</strong>1929 年落成，被称为「全美最美的政府建筑」，导航软件里常以法院正式名称登记',
          'Great Arch 大拱门、手绘瓷砖楼梯、二楼 Mural Room 环绕壁画、Bisno-Schall 钟机房',
          '塔顶 <strong>El Mirador 观景台</strong> 360° 全景：城市红瓦屋顶、Santa Ynez 山脉、太平洋，晴天能看到 Channel Islands 与海上钻井平台'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>5/5</strong>，风光 <strong>3/5</strong>。' +
          '免费、可登高、内部允许拍摄、光线条件优秀，红瓦加白墙加棕榈的组合在午后暖光下极出片。' +
          '拱门与瓷砖楼梯是全城最抢手的人像背景。唯一不占优的是海岸日落项。',
        shots: [
          {
            name: 'Sunken Gardens 下沉花园西南角',
            desc: '仰拍钟塔与拱廊的经典机位，广角 16–24mm。<strong>上午 9–11 点</strong>正面受光最好。',
            park: [34.42344, -119.70277],
            view: [34.42466, -119.70212]
          },
          {
            name: 'El Mirador 钟塔观景台',
            desc: '四面开放的拱形窗洞，用拱券做前景框住城市。24–70mm 为主，想压缩红瓦屋顶层次带 70–200mm。' +
              '<strong>下午 15:30–16:20 光线最暖</strong>，但注意 16:30 后禁止入内，赶不上真正的日落。',
            view: [34.42423, -119.70247]
          },
          {
            name: 'Great Arch 与瓷砖楼梯',
            desc: '室内弱光，35mm 或 50mm 大光圈，禁用三脚架处请提高 ISO。二楼 Mural Room 用广角加高感，人像可借壁画做背景。',
            view: [34.42436, -119.70217]
          }
        ],
        access: {
          book: '不需要',
          ticket: '<strong>全程免费</strong>（含电梯）',
          hours: '周一至周五 08:00–17:00，周末及法定休庭日 10:00–17:00，<strong>16:30 后不再放行访客</strong>，观景台闭馆前 30 分钟关闭。<strong>9/7 劳工节按 10:00–17:00 执行</strong>',
          parking: 'City Lot #7（法院正对面）前 75 分钟免费，之后 $3/小时；路边车位限 75 分钟',
          walk: '<strong>约 120 米、2 分钟</strong>；加安检与电梯，从下车到站上观景台预留 <strong>12–15 分钟</strong>',
        },
        notes: [
          '<strong>最大的时间陷阱是 16:30 门禁</strong>，它比 9 月的日落（19:20）早近三小时，所以法院和日落机位必须排在同一天的不同时段，不能指望在塔上拍日落',
          '这是运行中的法院，<strong>安检严格</strong>，大型摄影包可能被要求开包，请勿在法庭区域拍摄。三脚架在公共区域通常可用但建议先问工作人员',
          'Clock Gallery 钟机房仅<strong>周三、周六、周日 10:45–12:05</strong> 开放入内，其余时间隔玻璃看——9/5、9/6、9/9 都在窗口内',
          '免费导览：周一至周五 10:30、每日 14:00，Mural Room 集合，约 1 小时，无需预约'
        ],
        images: [
          { url: 'img/2014-04-11-santa-barbara-county-courthouse-2-26dd9ac0.jpg', cap: 'Santa Barbara County Courthouse · Gunnar Klack / CC BY-SA 4.0' },
          { url: 'img/santa-barbara-courthouse-tower-view-af7f8517.jpg', cap: '塔顶俯瞰视角 · Photopippo / CC BY-SA 3.0' },
          { url: 'img/santa-barbara-county-courthouse-7fd7dc5b.jpg', cap: '法院大楼全貌 · Konrad Summers / CC BY-SA 2.0' }
        ]
      },
      {
        id: 'stearns-butterfly',
        n: 3,
        name: 'Stearns 码头 + 蝴蝶海滩（补充建议）',
        en: 'Stearns Wharf · Butterfly Beach',
        score: 4,
        tldr: 'Santa Barbara 日落的一套连招。Butterfly Beach 是加州罕见的朝南海滩，能看到太阳真正落进海里。',
        tags: [{ t: '补充建议', c: 'book' }, { t: '免费', c: 'free' }, { t: '码头停车 $4/hr', c: 'paid' }, { t: '车位极少', c: 'risk' }],
        highlights: [
          '<strong>Stearns Wharf</strong>：1872 年的加州最古老深水木栈桥，<strong>可以直接把车开上桥</strong>，向北回望能同框山脉与棕榈海岸线',
          '<strong>Butterfly Beach</strong>：在 Montecito，紧邻 Four Seasons Biltmore。' +
            '加州海岸大多朝西南，这里因海岸线转折而<strong>朝南——于是能看到太阳真正落进海里</strong>，远处还横着 Channel Islands 的剪影。两处相距约 4 公里'
        ],
        photo: 'Stearns Wharf 风光 <strong>4/5</strong>、人像 3.5/5；<strong>Butterfly Beach 风光 5/5</strong>、人像 4/5。' +
          'Butterfly Beach 是这一带纯风光日落的最优解——落潮时湿沙形成天然反射面，可把晚霞倒影一起收进来。',
        shots: [
          {
            name: 'Butterfly Beach 潮线处（主推机位）',
            desc: '<strong>日落前 30 分钟到日落后 20 分钟</strong>（18:50–19:40）。落潮时湿沙做天然反射面，16–35mm 低机位。' +
              '<strong>仅有 Channel Drive 免费路边车位，数量有限、日落前会满，请提前 40 分钟到。</strong>',
            park: [34.41710, -119.64370],
            view: [34.41762, -119.63513]
          },
          {
            name: 'Stearns Wharf 桥头向西',
            desc: '拍日落沉入海平面与游艇港，24–70mm。桥面木质纹理做前景。可直接开车上桥，停好即在桥上。',
            park: [34.41182, -119.68867],
            view: [34.40849, -119.68499]
          },
          {
            name: 'East Beach 沙滩向西拍栈桥',
            desc: '把整座木桥当剪影主体。<strong>日落后蓝调时段桥上灯光亮起最美</strong>，需三脚架加慢门。',
            view: [34.41280, -119.68620]
          }
        ],
        access: {
          book: '不需要',
          ticket: '均免费',
          hours: 'Stearns Wharf 停车运营 08:00–22:00',
          parking: 'Stearns Wharf 上桥<strong>前 90 分钟免费</strong>，之后 <strong>$4.00/小时</strong>，单日封顶 $40（栈桥网站 FAQ 仍写 $3/小时属未更新，以市政费率表为准）。Butterfly Beach 仅 Channel Drive 免费路边位，<strong>无正式停车场</strong>',
          walk: 'Stearns Wharf <strong>0–2 分钟</strong>；Butterfly Beach 下沙滩需走一段台阶，1–3 分钟，无无障碍坡道',
        },
        notes: ['Butterfly Beach 无救生员、禁篝火、禁犬'],
        images: [
          { url: 'img/bright-white-sunset-at-butterfly-beach-montecito-california--b9e1b24d.jpg', cap: 'Butterfly Beach 日落 · Damian Gadal / CC BY 2.0' },
          { url: 'img/stearns-wharf-don-ramey-logan-eedd0098.jpg', cap: 'Stearns Wharf · Don Ramey Logan / CC BY-SA 3.0' },
          { url: 'img/beach-and-stearns-wharf-brewbooks-c5795555.jpg', cap: '海滩与 Stearns Wharf 宽幅 · brewbooks / CC BY-SA 2.0' }
        ]
      },
      {
        id: 'point-mugu-rock',
        n: 4,
        name: '穆古岩（补充建议）',
        en: 'Point Mugu Rock',
        score: 4,
        tldr: 'PCH 最上镜的路边地标，免费停车即拍。Santa Barbara 到 Malibu 之间最容易被跳过、也最值得停的一站。',
        tags: [{ t: '补充建议', c: 'book' }, { t: '完全免费', c: 'free' }, { t: '停车即拍', c: 'free' }, { t: '注意禁左转', c: 'risk' }],
        highlights: [
          '1937 年为修路炸开山体形成的巨型独立岩柱，<strong>PCH 从中穿切而过</strong>——这就是无数汽车广告的取景地',
          '也是 Santa Monica 山脉在海岸的终点。岩体、公路、海面三者的关系极具张力'
        ],
        photo: '风光 <strong>4.5/5</strong>，人像 <strong>4/5</strong>，建筑 0/5。' +
          '经典的「公路加岩石加车」打卡构图，且完全免费。<strong>日落前一小时</strong>岩面被暖光正打，岩石的赭红色最饱和。',
        shots: [
          {
            name: '岩石南侧海侧 turnout（主机位）',
            desc: '向西北拍岩柱与其后的海岸线，24–70mm。日落前一小时暖光正打。',
            park: [34.08617, -119.05886],
            view: [34.08605, -119.05894]
          },
          {
            name: '北侧高位 turnout',
            park: [34.091672, -119.065669],
            view: [34.091409, -119.060098],
            desc: '俯拍 PCH 绕岩弯道，<strong>长焦 70–200mm 压缩公路曲线，拍行驶中的车辆最有故事感</strong>。',
            at: [34.08802, -119.06297]
          },
          {
            name: '贴近岩基的海滩',
            park: [34.088022, -119.062975],
            view: [34.086122, -119.060526],
            desc: '广角仰拍岩体，用涌浪做慢门前景。',
            at: [34.08541, -119.06099]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免费',
          hours: '全天',
          parking: 'PCH 路边 turnout <strong>免费</strong>。若开进 Point Mugu State Park 正式停车场则收费：全日 $12、3 小时 $9、1 小时 $3',
          walk: '<strong>不足 1 分钟</strong>',
        },
        notes: [
          '<strong>多处禁止左转标志</strong>，进出 turnout 要提前规划方向——南下（由 Oxnard 往 Malibu）方向停车最顺',
          '<strong>紧邻 Naval Air Station Point Mugu，请勿把镜头对准军事设施</strong>',
          '海风常年强劲，三脚架需压重。周中上午人最少'
        ],
        images: [
          { url: 'img/mugu-rock-on-california-route-1-c067fb28.jpg', cap: 'Mugu Rock 与 PCH · Tim Pearce / CC BY 2.0' },
          { url: 'img/point-mugu-september-2013-panorama-5ea4de81.jpg', cap: 'Point Mugu 超宽幅全景 · King of Hearts / CC BY-SA 3.0' },
          { url: 'img/point-mugu-september-2013-002-ec07fd88.jpg', cap: 'Point Mugu 海岸 · King of Hearts / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'getty-villa',
        n: 5,
        name: '盖蒂别墅博物馆',
        en: 'The Getty Villa',
        score: 4.5,
        tldr: '全洛杉矶最上镜的对称场景之一，免票但必须预约、停车 $25。周二闭馆，9/8 千万别排。',
        tags: [{ t: '必须预约', c: 'book' }, { t: '门票免费', c: 'free' }, { t: '停车 $25', c: 'paid' }, { t: '周二闭馆', c: 'risk' }, { t: '禁三脚架', c: 'risk' }],
        highlights: [
          '<strong>仿赫库兰尼姆的 Villa dei Papiri（莎草纸别墅）复建的罗马乡间宅邸</strong>。原型在公元 79 年维苏威火山爆发时被火山灰掩埋，' +
            '至今仍未完全发掘——J. Paul Getty 1970 年代依据 18 世纪的发掘图纸和同期罗马建筑推测复原了它。' +
            '换句话说，你走进的是一栋<strong>「被推测出来的」古罗马建筑</strong>，这件事本身就很有意思',
          '摄影主体是建筑而非藏品：外柱廊花园中央 <strong>220 英尺长的反射水池</strong>、双层多立克柱廊、' +
            '按庞贝壁画配色重绘的墙面、依原作翻铸的青铜雕像，以及一条望向太平洋的开阔轴线',
          '园林里的植物是<strong>按古罗马文献考证选种的</strong>——月桂、桃金娘、石榴、黄杨，都是当年真会种在那栋别墅里的品种',
          '藏品聚焦希腊、罗马与伊特鲁里亚古物，镇馆之作是<strong>《胜利的青年》（Statue of a Victorious Youth）</strong>，' +
            '一尊公元前 4 世纪的希腊青铜像，也是全球仅存的少数几尊大型古希腊青铜原作之一'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>5/5</strong>，风光 <strong>2/5</strong>（17:00 闭馆，拍不到日落）。' +
          '柱廊加水池是全洛杉矶最上镜的对称场景之一，免票、光影质量极高，是这一段建筑类的头号目标。',
        shots: [
          {
            name: 'Outer Peristyle 反射水池南端沿中轴线北望（招牌机位）',
            desc: '柱廊与水中倒影完美对称。16–24mm 广角，<strong>机位放低贴近水面</strong>。' +
              '<strong>上午 10:00–11:30</strong>（一开馆就去）光线柔和且人少；正午顶光会让水池反光过硬。',
            park: [34.04410, -118.56664],
            view: [34.04489, -118.56523]
          },
          {
            name: 'Outer Peristyle 柱廊内侧走廊（人像首选）',
            desc: '利用柱列做重复韵律与明暗节奏，35–50mm，<strong>站在阴影里向亮处拍，反差非常戏剧化</strong>。',
            view: [34.04489, -118.56523]
          },
          {
            name: 'Inner Peristyle 内柱廊',
            desc: '更小、更私密，彩色壁画墙加小水池，光线偏柔，<strong>50–85mm 拍半身人像最好</strong>。' +
              'East Garden 有喷泉与镶嵌墙面，游客较少。',
            view: [34.04546, -118.56476]
          },
          {
            name: '展厅内部',
            desc: '允许手持拍摄，弱光，需 f/1.4–f/2 大光圈加高感。「Statue of a Victorious Youth」等名作值得单拍。',
            view: [34.04498, -118.56409]
          }
        ],
        access: {
          book: '<strong>必须预约免费定时入场票</strong>，线上或致电 (310) 440-7300，<strong>不接受 walk-in</strong>。旺季请提前订，想避人流选最早时段',
          ticket: '<strong>门票免费</strong>',
          hours: '<strong>每日 10:00–17:00，周二闭馆</strong>。劳工节正常开放。<strong>9/5、9/6、9/7、9/9 可去；9/8 闭馆</strong>',
          parking: '<strong>$25/辆；15:00 后 $15；晚间活动 18:00 后 $10。仅刷卡不收现金。</strong>步行、骑行或乘公交进入无需付停车费',
          walk: 'South Parking Garage 到博物馆入口约 <strong>255 米，含电梯与上坡阶梯 8–10 分钟</strong>；再到 Outer Peristyle 约 2–3 分钟。从停车到站上主机位预留 15 分钟',
        },
        notes: [
          '<strong>摄影规则</strong>：室外与常设展厅允许手持设备加现场光；<strong>三脚架与独脚架一律禁止</strong>；自拍杆仅限室外；' +
            '<strong>禁止专业拍摄，包括婚纱、模特与摆拍的订婚照</strong>。有访客报告在展厅内被保安以「看起来像专业拍摄」为由制止，<strong>器材尽量低调</strong>',
          '<strong>火灾后园林变化</strong>：约 44% 的树木被移除，遮荫与绿量明显少于 2025 年前的网图。好的一面是柱廊与建筑线条更加干净通透，对建筑摄影反而有利；坏的一面是正午缺乏遮荫、光比更大',
          '从这里沿 PCH 向西进入 Malibu 会立即进入 25 mph 施工限速段，<strong>该段禁止停车与路边停留，不要试图在烧毁区路边下车拍摄</strong>',
          '超过 11×17×8 英寸的背包需寄存。建议游览时长 2–3 小时'
        ],
        images: [
          { url: 'img/getty-villa-outer-peristyle-garden-pacific-palisades-c0a6c8c0.jpg', cap: '外柱廊花园全景，即招牌机位 · Dale Cruse / CC BY 4.0' },
          { url: 'img/getty-villa-outer-peristyle-colonnade-pacific-palisades-los--fa25f548.jpg', cap: '柱廊内侧竖构图 · Dale Cruse / CC BY 4.0' },
          { url: 'img/060807-002-gettyvilla001-ce83e354.jpg', cap: 'Getty Villa 建筑 · Bobak Ha\u2019Eri / CC BY 3.0' }
        ]
      },
      {
        id: 'el-matador',
        n: 6,
        name: '斗牛士海滩（补充建议）',
        en: 'El Matador State Beach',
        score: 5,
        tldr: '加州最上镜的海滩，没有之一。若整条 SB–Malibu 线只能加一站，选这里。但车位仅约 30 个。',
        tags: [{ t: '补充建议', c: 'book' }, { t: '停车 $8–12', c: 'paid' }, { t: '车位仅约 30', c: 'risk' }, { t: '强依赖潮汐', c: 'risk' }],
        highlights: [
          '巨型岩柱（sea stack）直立于沙中与浅水里，形成<strong>天然拱门、隐蔽小湾与穿行通道</strong>。' +
            '这些岩柱是 Santa Monica 山脉在此入海后被浪蚀切割的残留物——原本是崖体的一部分，' +
            '较软的岩层被掏走，留下最硬的核心站在原地',
          '北端有一个<strong>落潮时可进入的大型海蚀洞</strong>。当光线以特定角度射入、涌浪在洞口进退时，' +
            '是整个南加州海岸最戏剧化的画面之一',
          '沙滩坡度陡、颗粒粗，<strong>退浪会在湿沙上留下极干净的镜面反射</strong>，' +
            '这是它在婚纱与时尚摄影圈常年高居榜首的技术原因——同样的岩柱，倒影会让画面多出一整层',
          '同属 Robert H. Meyer Memorial State Beach 的还有北侧的 <strong>La Piedra 与 El Pescador</strong>，' +
            '地貌类似但人少得多。El Matador 车位满了的话，这两处是现成的备胎'
        ],
        photo: '风光 <strong>5/5</strong>，人像 <strong>5/5</strong>，建筑 0/5。婚纱与时尚大片常驻地。' +
          '<strong>日落前 45 分钟至日落后 20 分钟（18:30–19:35）为绝对黄金窗口。</strong>',
        shots: [
          {
            name: '主礁柱群（阶梯下到沙滩后向西走 50–100 米）',
            desc: '把海蚀柱作为主体，涌浪回流做慢门丝绸质感，16–35mm。' +
              '贴地低机位拍湿沙倒影，把礁柱倒影与晚霞一起收，机身几乎贴沙。',
            park: [34.03903, -118.87496],
            view: [34.03797, -118.87499]
          },
          {
            name: '穿过岩拱向外拍',
            desc: '用天然拱门框住落日，需站位精确，35–50mm。人像可拍礁柱之间窄通道的逆光剪影，85mm。',
            view: [34.03797, -118.87499]
          },
          {
            name: '北端海蚀洞（仅落潮可入）',
            desc: '洞口框海，广角加三脚架，长曝 1–4 秒。<strong>涨潮时通道与洞会被淹没甚至困人。</strong>',
            view: [34.03805, -118.87482]
          }
        ],
        access: {
          book: '不需要',
          ticket: '海滩免费，<strong>仅停车收费 $8–12</strong>（各来源报价不一，普遍 $10 上下，备好刷卡与零钱）',
          hours: '<strong>08:00 至日落</strong>',
          parking: '约 30–45 车位，<strong>常在上午就满</strong>。PCH 路肩可停但标牌需逐块看清，巡逻员开罚频繁',
          walk: '约 120 米，但含一段<strong>陡峭砾石小径与阶梯</strong>：下行 5–8 分钟、<strong>上行 8–12 分钟</strong>。穿抓地鞋，别背太重器材',
        },
        notes: [
          '<strong>潮汐是成败关键</strong>：涨潮时礁柱通道与海蚀洞会被淹没甚至困人。理想是日落时段恰逢落潮，出发前查 NOAA Santa Monica 或 Malibu 潮汐表',
          '<strong>2026 年初 El Matador 路口已改造为环岛</strong>，进出方式与旧攻略不同，跟着导航走',
          '商业与婚纱拍摄需加州州立公园拍摄许可，个人摄影无需',
          '不适合婴儿车与行动不便者。三脚架允许，但注意涌浪与流沙'
        ],
        images: [
          { url: 'img/el-matador-state-beach-malibu-unsplash-b1cf1a96.jpg', cap: 'El Matador 海蚀柱 · Joseph Yates / CC0' },
          { url: 'img/el-matador-beach-malibu-a6226328.jpg', cap: 'El Matador 海滩 · Graham / CC BY 2.0' },
          { url: 'img/el-matador-state-beach-rushing-tides-35173442584-139a4f3d.jpg', cap: 'El Matador 涌浪 · Santa Monica Mountains NRA / 公有领域' }
        ]
      },
      {
        id: 'malibu-pier',
        n: 7,
        name: '马里布栈桥',
        en: 'Malibu Pier',
        score: 3.5,
        tldr: '真正价值在「冲浪者 + 栈桥」的长焦组合，而不是「太阳落在桥后」——桥朝南，不是正对构图。',
        tags: [{ t: '上桥免费', c: 'free' }, { t: '停车 $10–20', c: 'paid' }, { t: '劳工节 $20', c: 'paid' }],
        highlights: [
          '1905 年的老栈桥，两座标志性白色塔楼，桥头是 Malibu Farm 餐厅',
          '桥西侧即 <strong>Surfrider Beach</strong>——世界冲浪保护区，右手长浪，全天有冲浪者，是抓拍与长焦剪影的绝佳素材库'
        ],
        photo: '风光 <strong>4/5</strong>，人像 <strong>4/5</strong>，建筑 <strong>3/5</strong>。' +
          '<strong>栈桥朝南</strong>，日落时太阳落在西侧，能拍到侧逆光下的桥身剪影和金色海面，但<strong>不是「太阳落在桥后」的正对构图</strong>。' +
          '真正价值在冲浪者与栈桥的组合，以及塔楼作为人像背景的辨识度。扣分点是停车贵、PCH 车流噪杂、桥上视觉元素略杂乱。',
        shots: [
          {
            name: 'Surfrider Beach 沙滩、栈桥西侧 300–400 米处（最经典）',
            desc: '把栈桥整体放进画面，前景是冲浪者与浪花。<strong>日落前 45 分钟至日落</strong>（18:30–19:17）。' +
              '24–70mm 拍全景，<strong>70–200mm 或 100–400mm 压缩冲浪者与桥柱是这里最出片的打法</strong>。',
            park: [34.03771, -118.67569],
            view: [34.03380, -118.67952]
          },
          {
            name: '栈桥桥面向岸回望',
            desc: '拍 Malibu 山脊线与海岸别墅，早晨顺光。白色塔楼特写与人像用 35–85mm，日出后或日落前一小时的暖光，中午顶光很难看。',
            view: [34.03641, -118.67610]
          },
          {
            name: '桥下木桩',
            desc: '低角度贴沙面拍桥墩阵列与涌浪，需慢门 1/4–2 秒配 ND 镜，落潮时可站位更远。',
            view: [34.03641, -118.67610]
          }
        ],
        access: {
          book: '不需要',
          ticket: '上桥免费',
          hours: '<strong>日出至日落，全年 365 天开放</strong>（官网首页原文为 OPEN SUNRISE TO SUNSET, 365 DAYS）',
          parking: '桥前收费场约 96 车位 <strong>$10–20</strong>；隔壁 Surfrider Beach 县属场夏季周末 06:00–16:00 约 $15、16:00 后 $3；<strong>劳工节 9/7 按节假日费率 06:00–16:00 $20</strong>',
          walk: '到桥面约 150 米、2 分钟；<strong>到 Surfrider 沙滩最佳机位约 430 米、6–7 分钟</strong>',
        },
        notes: [
          'Malibu Pier 位于 Carbon Beach Terrace 以西，<strong>不在 PCH 施工限制段内</strong>，通行正常。但从 Getty Villa 往西开必然要穿过 25 mph 施工段',
          '<strong>9/5–9/7 仍属劳工节周末，路边违停风险高</strong>（周末与节假日运行拖车场），请务必停进正规车位',
          '夏季海滩执法队运行至劳工节，海滩禁酒执法严格'
        ],
        images: [
          { url: 'img/the-malibu-pier-from-surfrider-beach-panoramio-6714a11e.jpg', cap: '从 Surfrider 沙滩拍栈桥，即主机位 · Darin R. McClure / CC BY 3.0' },
          { url: 'img/malibu-pier-dfc772e5.jpg', cap: 'Malibu Pier 与白色塔楼 · Levi Clancy / CC BY-SA 4.0' },
          { url: 'img/malibu-pier-with-waves-crashing-03-d8c86f0b.jpg', cap: 'Malibu Pier 涌浪 · Levi Clancy / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'point-dume',
        n: 8,
        gone: '主通道无限期关闭',
        name: '杜姆角',
        en: 'Point Dume State Beach',
        score: 2.5,
        tldr: '主通道因 8/1 海岸侵蚀无限期关闭。但崖顶保护区另有一个 Cliffside Drive 入口不经施工闸门，值得当天打电话确认。',
        tags: [{ t: '免费', c: 'free' }, { t: '下层停车场关闭', c: 'risk' }, { t: '入口 05:00–15:00 禁行', c: 'risk' }, { t: '崖缘不稳', c: 'risk' }],
        highlights: [
          '凸入太平洋的圆丘状火山岬角，是 Santa Monica Bay 的西北端点。崖顶木栈道通向观景平台，' +
            '可俯瞰 Westward Beach 与 Zuma Beach 的白沙一路延伸到 Point Mugu，晴天可见 Catalina Island',
          '灰鲸洄游期是 12 月至次年 4 月中，<strong>9 月看不到</strong>，但海豚全年可见'
        ],
        photo: '<strong>潜力 4.5/5，但 2026 年 9 月实际可执行性仅 2.5/5</strong>。' +
          '风光 5/5、海岸日落 5/5（西北向俯瞰长滩，日落方位极佳）、人像 3/5。' +
          '这本该是本段最强的风光机位——<strong>问题完全出在通达性上</strong>。',
        shots: [
          {
            name: '岬顶观景平台（主机位）',
            desc: '西北向俯拍 Westward 加 Zuma 双滩弧线，16–35mm 广角接片；<strong>日落前一小时</strong>侧光最能表现沙滩纹理与海浪层次。' +
              '崖顶木栈道中段比平台更避风，适合架三脚架做慢门。',
            park: [34.00450, -118.80569],
            view: [34.00163, -118.80668]
          },
          {
            name: '⭐ 强烈建议的替代方案：Zuma Beach 南端远眺',
            desc: '<strong>如果崖顶去不了，这是最好的替代。</strong>改停 Zuma Beach 收费停车场（$8–15），' +
              '从北侧远景拍 Point Dume 岬角剪影，长焦压缩，同样能拿到日落好片，<strong>且完全没有关闭风险</strong>。',
            park: [34.01615, -118.82191],
            view: [34.01615, -118.82191]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免门票',
          hours: '<strong>Birdview Avenue 入口每日 05:00–15:00 对行人和自行车也关闭</strong>（施工作业区，有承包商与警长副手驻场）',
          parking: '<strong>Westward Beach Road 收费闸口以外路段与 373 车位的下层停车场自 2026 年 8 月起无限期关闭</strong>。崖顶 Preserve 免费小场约 2 小时限时、车位极少，周边住宅区严禁停车',
          walk: '崖顶停车场到岬顶约 <strong>330 米、爬升 60 米、10–12 分钟</strong>',
        },
        notes: [
          '<strong>关闭的真正原因是海岸侵蚀，不是山火修复工程。</strong>2026 年 8 月 1 日夜间的高潮位加大浪造成崖缘局部近 8 英尺落差、路基部分塌陷并损坏路面下的水管。山火只是间接背景——2025 年 1 月 Palisades Fire 烧毁的海滨住宅连带失去原有海堤，这段海岸从此没有了缓冲',
          '<strong>这条路的状态在一年里已经反复变过：</strong>它曾因另一项排水工程封闭，并于 2026 年 6 月 11 日恢复通行，8 月 1 日才因侵蚀再次关闭。<strong>任何超过几周的旧攻略都不可靠，出发当天必须重查</strong>',
          '<strong>可能保住这个点的一条线索：崖顶保护区另有一个独立入口，在 Cliffside Drive 29188 号</strong>（约 10 个车位、其中 2 个无障碍、限时 2 小时），<strong>不经过 Birdview Avenue 的施工闸门</strong>。县方公告点名关闭的是 Westward Beach Road 入口，并未提及 Cliffside Drive 一侧，因此「连行人都禁行」对崖顶步道未必适用。<strong>但这一条无法从官方渠道确认，请当天致电 LA County Beaches &amp; Harbors 询问该入口是否开放</strong>——这是唯一可能保住整个 Point Dume 拍摄点的信息',
          '<strong>崖缘不稳、局部落差近 8 英尺，绝对不要越过警戒锥、警示带或围栏</strong>，越界可致重伤且属违规',
          '这处火烧区岸段因原有海堤随房屋损毁而失去保护，<strong>侵蚀仍在持续</strong>',
          '1、2、3 号卫生间因水管被侵蚀损坏关闭，仅有临时化学厕所',
          '下到 Big Dume 沙滩的长阶梯受潮汐控制，<strong>高潮时通道会被完全切断</strong>',
          '出发当天务必查 malibucity.org 的 Alert Center 与 parks.ca.gov 公告栏。保护区内禁止携犬',
          '<strong>行程期内这里有再次变化的现实可能</strong>：飓风 Marie 的外围涌浪（9/4 起 6–8 英尺、持续到 9/8）与高潮位，正是 8 月 1 日造成崩塌的同一类组合。封闭范围可能扩大，也可能因施工阶段结束而取消时段限制',
          '若改去 Zuma Beach，注意 Westward Beach Road 与 Zuma 主入口之间的 <strong>Zuma Creek 涌水路口曾于 2026 年 6 月 11 日因高浪漫溢而封闭</strong>，出发前可致电 City of Malibu（310-456-2489）确认已恢复'
        ],
        images: [
          { url: 'img/point-dume-from-zuma-beach-932994ed.jpg', cap: '从 Zuma Beach 远眺 Point Dume，即推荐的替代机位 · OMCV / 公有领域' },
          { url: 'img/point-dume-beach-51985228879-077fc2ad.jpg', cap: 'Point Dume 海滩 · Santa Monica Mountains NRA / 公有领域' },
          { url: 'img/point-dume-state-beach-01-07c1a6f9.jpg', cap: 'Point Dume 崖顶视角 · Michael Benatar / CC BY 2.0' }
        ]
      }
    ]
  },

  /* ===================== ③ Los Angeles ===================== */
  {
    id: 'la',
    name: '③ Los Angeles',
    navName: '洛杉矶',
    color: '#ff8a3d',
    lead: '本次行程景点最密集的一区，建筑人文与海岸日落都集中在这里。难点全在交通、停车与闭馆日，而不是景点本身。',
    callouts: [
      {
        type: 'warn',
        title: '闭馆日交叉表：三处大馆的休息日互相错开，排错日子就白跑',
        html: '<p><strong>9/7 是周一，且是 Labor Day 劳动节</strong>，这个组合会连环踩坑。</p>' +
          '<ul>' +
          '<li><strong>LACMA</strong> 每周三闭馆 → <strong>9/9 进不去</strong>（Urban Light 与 Levitated Mass 在室外，不需门票）</li>' +
          '<li><strong>Getty Center</strong> 每周一闭馆 → <strong>9/7 闭馆</strong></li>' +
          '<li><strong>Getty Villa</strong>（②区）每周二闭馆 → 9/8 闭馆，与 Getty Center 刚好互补</li>' +
          '<li><strong>Griffith Observatory</strong> 每周一闭馆 → 9/7 建筑闭馆，<strong>但室外露台与全部机位照常开放</strong></li>' +
          '<li><strong>Point Fermin Lighthouse</strong> 周一闭馆 + 重大节日可能闭馆 → <strong>9/7 双重命中，改约 9/8 或 9/9 下午</strong></li>' +
          '<li><strong>Bradbury Building</strong> 周末仅 10:00–14:00；<strong>9/7 是否开放未能确认</strong>，楼内有 LAPD 机构，建议先致电 (213) 592-3222</li>' +
          '<li><strong>Pacific Park</strong>（Santa Monica Pier）<strong>9/9 提前 18:00 关闭</strong>，早于当日日落 19:09 → 当晚拍不到亮灯摩天轮</li>' +
          '</ul>' +
          '<p><strong>唯一不可替代的时间锚点：Getty Center 只有 9/5（周六）开放到 21:00</strong>，是全程唯一能在那里拍到日落与蓝调的日子，请优先固定。</p>'
      },
      {
        type: 'warn',
        title: '停车才是洛杉矶的真正门槛：三处住宅区禁停规则会直接卡死机位',
        html: '<p>本区多个机位位于住宅社区，周末与节假日的许可停车制度是硬约束。</p>' +
          '<ul>' +
          '<li><strong>Lake Hollywood Park（Hollywood Sign 正面机位）</strong>：2026 年 5 月起 PPD 320 扩区生效，' +
          '<strong>周五、周六、周日及节假日</strong>禁止无证停车，违者拖车。→ <strong>9/5、9/6、9/7 三天不能开车去，只能安排 9/8 或 9/9</strong>。</li>' +
          '<li><strong>Wisdom Tree 起登点</strong>：<strong>绝对不要停 Wonder View Drive</strong>（无公共车位，居民直接叫拖车），' +
          '只能停 Lake Hollywood Drive；该路 <strong>21:00–06:00 禁停</strong>，因此赶不上 06:30 的日出。</li>' +
          '<li><strong>Point Fermin 园内停车场日落即关</strong>——而那正是拍日落的时段。请停 Paseo del Mar 路边免费车位，否则车被锁在场内。</li>' +
          '<li><strong>Griffith Observatory</strong> 停车约 $10/小时且全年每天执法，节假日费率上调。缴费机只收信用卡，' +
          '<strong>收据必须放回挡风玻璃</strong>，否则付了钱照样罚单。</li>' +
          '</ul>' +
          '<p><strong>Griffith 免费方案</strong>：Greek Theatre 停车场在无演出日免费，加 DASH 巴士 $0.50 直达天文台正门。' +
          '但 9/6、9/8、9/9 有演出（13:00 后不可停），<strong>只有 9/5 与 9/7 两天可用</strong>。</p>'
      },
      {
        type: 'info',
        title: '两处已确认无法抵达，行前请勿按旧攻略前往',
        html: '<ul>' +
          '<li><strong>Wayfarers Chapel</strong>：2024 年因 Portuguese Bend 滑坡拆解入库，原址与庭园全部封闭，' +
          '重建希望 2027 年秋开工。已在下方列为红色卡片并附四个替代机位。</li>' +
          '<li><strong>Sunken City</strong>：2026 年仍属非法侵入，罚款约 $450。市议会 2026 年 2 月才刚拨款做围栏设计与环境监测，' +
          '官方称还要约一年。只能从 Point Fermin Park 崖顶用长焦合法眺望。</li>' +
          '</ul>'
      }
    ],
    spots: [
      {
        id: 'wisdom-tree',
        n: 1,
        name: '智慧树与伯班克峰',
        en: 'Wisdom Tree · Burbank Peak · Cahuenga Peak',
        score: 4.5,
        tldr: '孤树立于窄脊，是本区风光属性最强的点；停车只能停 Lake Hollywood Drive，且该路 21:00 至次日 06:00 禁停。',
        tags: [{ t: '免费', c: 'free' }, { t: '陡峭 24% 坡', c: 'risk' }, { t: '日落最佳', c: 'free' }, { t: '需头灯', c: 'risk' }],
        highlights: [
          'Wisdom Tree 是 2007 年 Griffith Park 大火中<strong>山顶唯一幸存的孤松</strong>，树下有铁盒供徒步者留言，已成为洛杉矶的民间精神地标',
          '孤树立于窄脊之上，背后是 Hollywood Reservoir、Burbank 与 Verdugo Hills，构成极强的「孤独感」剪影题材——<strong>这是本区唯一能拍到山脊加孤树加城市的纯风光构图</strong>',
          '沿 Aileen Getty Ridge Trail 东行可上 Cahuenga Peak（553 米，Griffith Park 最高点），再往东即 Mount Lee 与 Hollywood Sign 背面',
          '这片土地曾在 2000 年代面临五栋豪宅开发计划，经 Aileen Getty、Hugh Hefner 等出资募捐，于 2010 年并入 Griffith Park'
        ],
        photo: '风光 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>，人文 <strong>2.5/5</strong>。孤树配窄脊与天空的极简背景对人像极其友好，逆光剪影与轮廓光效果出色，且人流远少于 Lake Hollywood Park。',
        shots: [
          {
            name: 'Wisdom Tree 树下（Burbank Peak 顶）',
            desc: '<strong>日落金光 18:35–19:10</strong>拍孤树西向逆光剪影，或日出 06:30–07:10 让东侧晨光给树冠轮廓光。24–35mm 拍孤树配完整山脊与天空，16mm 贴地仰拍把树顶顶到画面上缘。<strong>关键是压低机位到膝盖以下</strong>，让山脊线降到画面下三分之一、天空留大——这是让孤树成立的前提。人像时让模特站树的一侧，留出树冠的负空间。',
            park: [34.131157, -118.337791],
            view: [34.136026, -118.332110]
          },
          {
            name: 'Burbank Peak 石堆与西侧脊线',
            desc: '蓝调 19:15–19:35，Valley 灯光起。24–70mm，用石堆做前景、脊线向西延伸做引导线，灯海在下方。',
            view: [34.1358, -118.3325]
          },
          {
            name: 'Aileen Getty Ridge Trail 脊线中段',
            desc: '日出后 07:00–08:30。70–200mm 压缩脊线起伏与远处 Mount Lee 天线塔；Sign 距此约 0.9 公里，135mm 左右可拍到字母侧后方轮廓。让脊线从画面左下切入、Mount Lee 塔群在右上形成对角线。',
            view: [34.1364, -118.3290]
          },
          {
            name: 'Cahuenga Peak 顶（全园最高点）',
            desc: '日出。16–35mm 接片拍 360 度全景，山顶有保育纪念铭牌可作前景。',
            view: [34.136991, -118.325834]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '免费',
          hours: '步道规定日落关闭',
          parking: '<strong>绝对不要停 Wonder View Drive</strong>——无公共车位、无过境通行，居民会直接叫拖车（多份旧攻略把停车点错标在这里）。正确做法是停 <strong>Lake Hollywood Drive</strong> 免费路边车位，尽量往坡顶靠。<strong>该路 21:00–06:00 禁止停车</strong>，这直接卡死日出计划：06:00 才能合法停车，步行 35–40 分钟上山，最快 06:40 到顶，已错过 06:30 的日出与全部蓝调。<strong>日落方案不受此限</strong>',
          walk: 'Lake Hollywood Dr 车位到 Wonder View Dr 顶端黄色闸门约 8–10 分钟 / 0.4 公里（铺装上坡）；闸门到 Wisdom Tree 约 <strong>25–30 分钟 / 0.72 公里，爬升 174 米</strong>。合计单程约 35–40 分钟、总爬升约 225 米'
        },
        notes: [
          '<strong>本区最陡的一段</strong>：0.72 公里内爬升 174 米（平均坡度 24%），碎石松动、无遮荫、无水源，必须穿有抓地力的鞋',
          '<strong>下撤风险高于上山</strong>。碎石陡坡在暮色中极易滑倒，若拍日落，<strong>头灯是必需品</strong>（不是手机手电）',
          '请勿攀爬或触碰 Wisdom Tree。树枝部分时段会被保护性包裹以进行养护，切勿拉扯、刻字或悬挂物品',
          'Lake Hollywood Drive 应不在 PPD 320 周末禁停范围内，但两个区域仅隔一个山谷且规则都在变动，<strong>请现场逐块核对标志牌</strong>',
          '山上手机信号差，返程叫车困难，建议下撤到 Barham Blvd 再叫车'
        ],
        images: [
          { url: 'img/wisdom-tree-los-angeles-united-states-unsplash-157645ea.jpg', cap: 'Wisdom Tree 孤松 · Andre Benz / CC0' },
          { url: 'img/panorama-of-los-angeles-from-burbank-peak-e7bf284b.jpg', cap: '自 Burbank Peak 俯瞰洛杉矶全景 · Downtowngal / CC BY-SA 3.0' },
          { url: 'img/mount-lee-from-burbank-peak-cc299f9c.jpg', cap: '自 Burbank Peak 望 Mount Lee 与 Sign · Downtowngal / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'hollywood-sign',
        n: 2,
        name: '好莱坞标志',
        en: 'Hollywood Sign · Lake Hollywood Park · Mount Lee',
        score: 4.5,
        tldr: '正面全字母机位在 Lake Hollywood Park，但周五至周日及节假日禁止无证停车——本次只能安排 9/8 或 9/9。',
        tags: [{ t: '免费', c: 'free' }, { t: '9/5–9/7 禁停', c: 'risk' }, { t: '上午顺光', c: 'free' }],
        highlights: [
          '1923 年立起的世界级文化符号，原本是 HOLLYWOODLAND 房地产广告，2022 年完成最近一次大修。字母高 13.7 米、总宽约 110 米，架设在 Mount Lee 南坡',
          '<strong>不存在任何合法方式站到字母之间或上面</strong>——围栏、13 个监控摄像头加 LAPD 警员全天候看守。可拍的是三类画面：正面远景含字母全貌、近距离仰视、以及从 Mount Lee 山顶拍字母背面加全城俯瞰',
          'Lake Hollywood Park 距 Sign 仅 0.89 公里且正南无遮挡，是<strong>全洛杉矶最省力的高质量 Sign 机位</strong>：草坪开阔、有长椅、不需徒步',
          'Tyrolean Tank 观景点是距字母最近的正面合法视角（约 0.5 公里），有 Hollywoodland 时期的历史水塔可作前景，是少数能同时讲「历史」与「符号」两个故事的构图',
          '<strong>执法正在收紧</strong>：同一 14 天窗口内该区域车流从 2024 年 2 月的 14,300 辆增至 2026 年 2 月的 32,300 辆，两年增长 124%。市议员已表示下一步重点是加大开罚与拖车力度'
        ],
        photo: '人像打卡 <strong>5/5</strong>，人文 <strong>4.5/5</strong>，风光 <strong>4/5</strong>。Lake Hollywood Park 是唯一无需徒步、可用中焦拍到完整字母做背景的合法点位。',
        shots: [
          {
            name: 'Lake Hollywood Park（正面全字母）',
            desc: '<strong>上午 08:00–11:00 最佳</strong>，Sign 正面充分受光、白色字母不过曝且山体有立体感；<strong>傍晚为完全逆光，不推荐</strong>。字母横宽 110 米在 889 米外，<strong>70–200mm 是核心区间</strong>（135mm 左右字母约占画面半宽），24–70mm 拍人物全身配完整字母背景。草坡制高点压低机位，让草地占下三分之一、Sign 在上三分点。',
            park: [34.126905, -118.325870],
            view: [34.126905, -118.325870]
          },
          {
            name: 'Tyrolean Tank Viewpoint（最近正面视角）',
            desc: '进 Deronda 闸门后左转上坡数十米即到。<strong>日出后 06:35–08:30</strong>光线最佳且游客未至。距离近，24–70mm 即可拍全字母（建议 35–50mm 避免广角变形），16–24mm 拍水塔加字母的夸张透视。把圆柱形水塔放在画面一侧做前景。',
            view: [34.130628, -118.318828]
          },
          {
            name: 'Mount Lee 山顶（字母背面加全城）',
            desc: '<strong>强烈建议日出 06:30 前后</strong>或午后；日落虽壮观但下撤需摸黑一个半小时以上。16–35mm 拍字母背面钢架配其下 Hollywood 城区的纵深，70–200mm 拍 Downtown 与天文台。站字母正后方上坡处，让背面支撑桁架构成画面下缘的几何纹理。',
            view: [34.134582, -118.321971]
          },
          {
            name: 'Brush Canyon Trail 起登（驾车最稳妥通道）',
            desc: '3200 Canyon Dr，<strong>有正规园内停车场</strong>、人行道与设施，无居民区停车纠纷。往返 6.4 英里、爬升约 320 米至 Mount Lee 山顶，单程约 1 小时 20 分。周末 08:00 前坐满。',
            park: [34.1268, -118.3105],
            view: [34.134563, -118.323203]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '<strong>全部免费</strong>',
          hours: '户外无限制，但 <strong>Deronda 行人闸门日落后不能进入</strong>（9/5–9/9 即 19:07–19:13 后只能出不能进）。Griffith Park 步道规定日落关闭',
          parking: '<strong>本条目最大的坑。</strong>Lake Hollywood Park 一带 Canyon Lake Dr 为免费路边车位，<strong>但 2026 年 5 月起 PPD 320 扩区：周五、周六、周日及节假日禁止无证停车，违者开罚并拖车</strong>。→ <strong>9/5（六）、9/6（日）、9/7（Labor Day）三天不可开车前往，只能安排 9/8 或 9/9</strong>。平日免费且通常有位，但周末即使合规日也会在 09:00 前坐满。<strong>Beachwood Gate 自 2017 年 4 月起永久关闭</strong>，九年未重开',
          walk: 'Canyon Lake Dr 车位到 Lake Hollywood Park 草坪约 <strong>3–5 分钟 / 250 米</strong>；到 Deronda 闸门后方约 10 分钟 / 0.7 公里；Brush Canyon 停车场到 Mount Lee 山顶约 <strong>1 小时 20 分 / 5.1 公里单程</strong>，爬升约 320 米'
        },
        notes: [
          '部分路段已加装<strong>遮挡视线的围栏</strong>，专门阻止游客停车自拍，一些旧攻略里的路边机位已失效',
          '<strong>Red Flag 强风日</strong>：LAFD 在强风事件期间实施红旗停车限制，<strong>违规车辆直接拖走</strong>。九月是 Santa Ana 风季起点，出发前查 LAFD 红旗警报',
          'Deronda Dr 与 Mulholland Hwy 一带道路极窄且属 Hollywoodland 优先停车区，周六日与节假日需居民许可证，<strong>强烈不建议开车进入</strong>',
          '规则可能在你到访前再次收紧——市府正在研究 Canyon Lake Drive 硬性封闭方案，<strong>出发当天务必重新核对</strong>',
          '无饮用水补给点，九月山脊午后地表温度显著高于海边，建议 08:00 前起步。步道有响尾蛇，勿穿凉鞋'
        ],
        images: [
          { url: 'img/hollywood-sign-from-park-on-canyon-lake-drive-panoramio-798da69b.jpg', cap: '自 Lake Hollywood Park 拍正面全字母 · Russell Lovrin / CC BY 3.0' },
          { url: 'img/hollywood-sign-zuschnitt-1081a785.jpg', cap: 'Hollywood Sign 正面特写 · Thomas Wolf / CC BY-SA 3.0' },
          { url: 'img/view-from-behind-hollywood-sign-overlooking-la-e850500e.jpg', cap: '自 Mount Lee 山顶望字母背面与全城 · Michael E. Arth / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'griffith',
        n: 3,
        name: '格里菲斯天文台',
        en: 'Griffith Observatory',
        score: 5,
        tldr: '建筑、城市全景、Hollywood Sign 三个题材一次拍完；周一闭馆但室外机位照常，堵车与停车是主要成本。',
        tags: [{ t: '入场免费', c: 'free' }, { t: '停车 $10/hr', c: 'paid' }, { t: '周一闭馆', c: 'risk' }, { t: '日落前必堵', c: 'risk' }],
        highlights: [
          '1935 年开放的 Art Deco 装饰艺术天文台，三穹顶青铜屋顶配白色混凝土立面，是《La La Land》与《Rebel Without a Cause》的取景地，本身就是洛杉矶最上镜的公共建筑之一',
          '它的不可替代性在于<strong>一个机位同时提供三个题材</strong>：建筑主体、俯瞰 Downtown LA 天际线的高位视角、以及距离 2.6 公里的 Hollywood Sign 正面视角',
          '海拔约 346 米，西向视野越过 Santa Monica 山脊。<strong>注意实际日落比理论时刻早 3–8 分钟</strong>，因为太阳是沉入山脊线而非海平面',
          '日落后建筑泛光灯亮起、山下城市灯网铺开，<strong>蓝调时刻的画面密度是全程最高的</strong>',
          '1935 年的捐赠契约规定不得收门票，因此建筑、场地与公共望远镜至今全部免费',
          '9/5–9/9 傍晚天空无月（残月要到下半夜才升起），对城市夜景是极好的条件'
        ],
        photo: '建筑 <strong>5/5</strong>，城市日落 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>。西露台栏杆配 Hollywood Sign 背景是全洛杉矶辨识度最高的人像背景之一，缺点是日落时段栏杆位基本无空隙。',
        shots: [
          {
            name: '西露台栏杆（Hollywood Sign 正面）',
            desc: '<strong>日出后 06:30–08:00 最佳</strong>，Sign 受晨光正面照亮且几乎无人；傍晚金光时 Sign 处于逆光、反差大易发灰。Sign 距此 2.64 公里，横宽约 110 米——要填满全画幅长边需约 860mm，不现实。实用区间是 <strong>200–400mm</strong> 让 Sign 占画面四分之一到一半并带山体，<strong>400–600mm</strong> 拍字母紧凑特写。用露台弧形石栏做前景引导线，Sign 放右上三分点。',
            park: [34.11835, -118.3006],
            view: [34.1182, -118.3010]
          },
          {
            name: '前草坪与 Astronomers Monument',
            desc: '<strong>蓝调 19:20–19:30 的十分钟</strong>是全天最高价值时段，建筑泛光与天空亮度在此达成平衡。16–35mm 拍建筑全貌加纪念碑前景，35–50mm 拍单穹顶配人物剪影。从纪念碑南侧压低机位，让方尖碑基座切入画面下缘、三穹顶横排成线。需三脚架，快门 1–4 秒。',
            view: [34.118907, -118.300375]
          },
          {
            name: '东露台（Downtown LA 方向）',
            desc: '<strong>日出前蓝调 06:04–06:25</strong>，Downtown 楼群灯还亮着而天空已泛蓝；或日落后 19:25–19:45 拍城市灯网。70–200mm 压缩楼群，100–300mm 在晨霾中拍层叠山脊。九月清晨若有海雾层，可拍到高楼刺破云海。',
            view: [34.1182, -118.2998]
          },
          {
            name: 'Charlie Turner Trailhead 上方步道',
            desc: '日落前一小时起步，走 5–10 分钟即高于停车场人群。24–70mm 拍「天文台建筑加其后 Downtown 天际线」的同框俯视——这是从建筑本身拍不到的角度。往北 500 米是 Berlin Forest 松林，可拍松枝框住 Hollywood Sign。',
            park: [34.120945, -118.300379],
            view: [34.120945, -118.300379]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '建筑、场地、公共望远镜<strong>全部免费</strong>（1935 年捐赠契约规定不得收门票）。Samuel Oschin 天象厅成人 $12、55+ 与学生 $10、5–12 岁 $8，<strong>仅现场购当日场次，无法网购或预订</strong>',
          hours: '周二至周五 12:00–22:00；周六日 10:00–22:00；<strong>周一闭馆</strong>。<strong>场地与露台每天开放</strong>。免费公众望远镜观测：开馆日 19:00–21:30。Griffith Park 全园 05:00–22:30',
          parking: '官方停车场与 West/Western Canyon Road 路边约 <strong>$10/小时</strong>，无时长上限，<strong>仅收信用卡</strong>，收据须放挡风玻璃内否则罚单。收费时段周一至周五 12:00–22:00、周六日 10:00–22:00，<strong>全年每天执法且节假日费率上调</strong>。<strong>周末与晴朗日落夜在日落前 90 分钟基本满位</strong>，满位后车辆会被劝返下山。免费替代：Greek Theatre 停车场（无演出日）加步行约 1 英里，或 DASH 巴士 $0.50',
          walk: '主停车场到西露台约 <strong>3–5 分钟 / 200–300 米</strong>；Greek Theatre 步行上山 20–30 分钟、爬升约 130 米'
        },
        notes: [
          '<strong>9/7 Labor Day 建筑闭馆</strong>（周一规则照常），但场地、露台、西栏杆观景位全部开放，对纯摄影行程影响有限',
          '<strong>切勿在日落前 20–45 分钟抵达</strong>——这是最糟的窗口：停车场已满、上山单行道 stop-and-go、路边车位被抢，而你人还在车里。正确做法是日落前 90–120 分钟到位',
          '拥堵时警方会<strong>直接封闭上山道路</strong>，届时只有 DASH 巴士、旅游大巴与无障碍接驳车放行——这本身就是选 DASH 的最强理由',
          'Greek Theatre 演出日 13:00 后不提供停车。9/5 与 9/7 无演出（可免费停），<strong>9/6、9/8、9/9 有演出</strong>',
          '上山时注意选车道：West Observatory Road 左车道进停车场，右车道是路边停车与过境，<strong>走错车道无法进停车场</strong>',
          'East Observatory Road 现为单向下山。日落后 19:30–20:30 是下山高峰，留到 21:00 后再走会顺畅很多',
          '园区大门 22:00 关闭，若约车接送务必让司机 22:00 前进园'
        ],
        images: [
          { url: 'img/griffith-observatory-facade-8b9a45ab.jpg', cap: 'Griffith Observatory 立面 · APickleForTheKnowingOnes / CC0' },
          { url: 'img/view-from-the-balcony-at-griffith-observatory-on-the-hollywo-2648a267.jpg', cap: '自西露台望 Hollywood Sign 与 Mount Lee · Steveshelokhonov / CC BY-SA 4.0' },
          { url: 'img/griffith-observatory-2012-01-b6efc40f.jpg', cap: 'Griffith Observatory 全景 · Mike Peel / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'mulholland-overlooks',
        n: 4,
        name: '穆赫兰道观景台',
        en: 'Mulholland Scenic Overlooks (Jerome C. Daniel · Universal City)',
        score: 3.5,
        tldr: 'Jerome C. Daniel 一个机位涵盖 Hollywood Bowl、Downtown、Sign 与天文台，但闭园时间存疑可能拍不到日落。',
        tags: [{ t: '免费', c: 'free' }, { t: '停车仅约 7 位', c: 'risk' }, { t: '闭园时间存疑', c: 'risk' }],
        highlights: [
          'Jerome C. Daniel Overlook 1984 年为洛杉矶奥运会而建，是<strong>无需徒步、可驾车抵达的 ADA 无障碍观景平台</strong>，视野同时涵盖正下方的 Hollywood Bowl 贝壳形舞台、南向 Downtown 天际线、东北向 Hollywood Sign 与 Griffith Observatory、北向 San Fernando Valley',
          '<strong>2025 年年中因 1984 年建的木桩挡土墙老化而封闭大修</strong>，进行结构、安全与 ADA 升级，<strong>已于 2026 年 6 月重新开放</strong>——网络上的旧照片可能与现状不符',
          '这里能拍到 <strong>Hollywood Sign 与 Griffith Observatory 同框</strong>，用 300–400mm 压缩即可，是很少见的构图',
          'Universal City Overlook 朝北正对 Universal Studios 片场与 Valley，<strong>唯一独占优势是开放到 21:00，能合法拍蓝调</strong>'
        ],
        photo: 'Jerome C. Daniel 风光 <strong>4/5</strong>、人文 <strong>4/5</strong>；Universal City 综合 <strong>3/5</strong>。前者的视野广度是本区最好之一，扣分因平台主朝向为南与东南，而九月日落方位角 278 度在其右后方，拍不到日落沉入画面。',
        shots: [
          {
            name: 'Jerome C. Daniel 平台中段（Hollywood Bowl 俯视）',
            desc: '<strong>午后 15:00–17:30</strong> Bowl 舞台受光。70–200mm 拍贝壳舞台特写是主力，135–300mm 把 Bowl 与其后 Downtown 楼群压缩成两层。锁定贝壳舞台的同心弧线，让弧线开口朝向画面一侧，以其后山坡树林做深色底衬。',
            park: [34.116823, -118.341360],
            view: [34.116823, -118.341360]
          },
          {
            name: 'Jerome C. Daniel 平台东端（Sign 与天文台同框）',
            desc: '<strong>上午 08:00–10:00</strong>，此处朝东北顺光且 Sign 正面受光。Sign 距此 2.65 公里，200–400mm 为主；天文台距约 3.8 公里，需 300mm 以上。<strong>用 300–400mm 把两个地标压缩进同一画面</strong>是这里最值得专门尝试的构图。',
            view: [34.1168, -118.3410]
          },
          {
            name: 'Universal City Overlook 平台（蓝调）',
            desc: '<strong>蓝调 19:15–19:40</strong>，此处开放到 21:00，是这一带唯一能合法拍完整蓝调的观景台。24–35mm 拍 Valley 全景，70–200mm 拍 Universal 片场建筑群与远处 Verdugo Hills。Valley 灯海占下三分之二，远山剪影压地平线。',
            park: [34.128937, -118.365220],
            view: [34.128937, -118.365220]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '免费',
          hours: '<strong>Jerome C. Daniel 的闭园时间三说并存、未能确认</strong>：一说每日 07:00–18:00、一说至日落、一说闸门 19:00 关。9/5–9/9 日落为 19:07–19:13，<strong>若按 18:00 关闸执行则完全拍不到日落与蓝调</strong>。建议出发当日致电 MRCA (310) 589-3200 确认。Universal City Overlook 各来源一致为 <strong>每日 06:00–21:00</strong>',
          parking: 'Jerome C. Daniel <strong>仅约 7 个车位</strong>的小型停车场，极易满，周末与节假日尤甚；亦可在 Mulholland Dr 路边合法处停靠。Universal City Overlook 为小型免费停车场，仅容数辆车',
          walk: '两处均为<strong>停车即到，0–1 分钟</strong>，ADA 无障碍'
        },
        notes: [
          '若时间只够一处，<strong>选 Jerome C. Daniel</strong>；但若目标是蓝调，只能去 Universal City Overlook',
          '若执意在 Jerome C. Daniel 拍蓝调，可把车停在闸门外的 Mulholland Dr 路边合法车位，步行至平台——但请先确认平台本身未上锁',
          '<strong>Hollywood Bowl 有大型演出时可能限制进入</strong>，9/5–9/9 排期未能确认，行前请查 hollywoodbowl.com',
          '停车位少加旅游大巴频繁停靠，Mulholland 此段弯道视距差，上下车与架器材时高度注意来车',
          '任务清单中的「Autry Overlook」经核实<strong>不在 Griffith Park</strong>，而在 Studio City 的 Mulholland Dr 上（8601 号），朝北、<strong>完全看不到 Hollywood Sign</strong>，两者相距约 10 公里。其性价比低，建议直接跳过'
        ],
        images: [
          { url: 'img/the-hollywood-sign-panoramio-2d4f9349.jpg', cap: '自 Mulholland 观景台方向拍 Hollywood Sign · Alistair Cunningham / CC BY 3.0' },
          { url: 'img/los-angeles-i-i-27921358776-841c0bea.jpg', cap: 'Mulholland 沿线超宽幅全景 · Sergei Gussev / CC BY 2.0' }
        ]
      },
      {
        id: 'getty-center',
        n: 5,
        name: '盖蒂中心',
        en: 'The Getty Center, Brentwood',
        score: 5,
        tldr: 'Richard Meier 的白色几何殿堂，免票但必须预约；只有 9/5 周六开放到 21:00，是全程唯一能在此拍日落的日子。',
        tags: [{ t: '入场免费', c: 'free' }, { t: '必须预约', c: 'risk' }, { t: '周一闭馆', c: 'risk' }, { t: '禁三脚架', c: 'risk' }],
        highlights: [
          'Richard Meier 1997 年完成的山顶园区：约 11 万平方米建筑，覆以 <strong>16,000 吨来自意大利 Bagni di Tivoli 的粗面石灰华</strong>配白色搪瓷金属板，一整套正交与 22.5 度旋转叠加的几何网格',
          '<strong>建筑本身就是这里的第一号展品</strong>——白色石材在加州强烈阳光下产生极干净的明暗切分，庭院、坡道、圆形楼梯间、方形水池构成无穷的抽象构图',
          '石灰华表面有大量化石纹理与孔洞，<strong>值得用 85mm 或微距单独拍一组质感特写</strong>',
          'Robert Irwin 设计的 Central Garden 有下沉溪流与漂浮杜鹃迷宫，是园区内唯一的大面积色彩，与其他地方的纯白形成对比',
          'South Promontory 向南俯瞰整个洛杉矶盆地直到太平洋，<strong>周六延长至 21:00 使其成为本区唯一能合法拍城市夜景的高点</strong>',
          '<strong>值得提前知道</strong>：Getty Center 将于 2027 年 3 月 15 日起整体闭馆约一年做现代化改造，预计 2028 年春季重开'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>4/5</strong>。白色石墙是天然柔光板与反光板，人像肤色极干净。',
        shots: [
          {
            name: 'South Promontory 观景平台',
            desc: '面向南至西南，可看到 Century City、Downtown 与西南方的太平洋。<strong>18:00–19:13 黄金时段</strong>；<strong>若为 9/5 周六可留到 20:45 拍蓝调与城市灯光</strong>。70–200mm 压缩 Century City 与 Downtown 楼群，24–70mm 拍白色栏杆前景配城市远景。用 Meier 的白色石灰华护墙做前景几何线条，把城市压在中景。',
            park: [34.088303, -118.475634],
            view: [34.076006, -118.473240]
          },
          {
            name: '主庭院与入口大厅（白色几何抽象）',
            desc: '<strong>11:00–15:00 是石灰华墙面明暗切分最锐利的时段</strong>，硬边阴影最强——这与大多数景点的规律相反。24–70mm 主力，14–24mm 拍坡道与楼梯透视，70–200mm 抽取墙面纹理与阴影几何。找「白墙加一道对角阴影加一个人」的极简三元素。',
            view: [34.077017, -118.474010]
          },
          {
            name: 'Central Garden 中央花园',
            desc: '<strong>上午 10:00–11:30</strong>（花园下沉，早上光线柔和且能照到底部）或 17:30–18:30 暖光。正午顶光会让下沉部分光比过大。24–70mm 拍花园螺旋布局，100mm 微距拍植栽，85mm 拍人像。从上方步道俯拍杜鹃迷宫的三个圆形图案，或走进下沉溪流用两侧植栽夹出通道。',
            view: [34.076016, -118.474991]
          },
          {
            name: '圆形楼梯间与外部坡道',
            desc: '11:00–15:00 强光产生锐利弧形阴影。16–35mm 超广仰拍或俯拍螺旋，50mm 拍局部曲线。纯几何构图：画面里只有白色曲面、阴影弧线，和一个小小的人。',
            view: [34.0772, -118.4745]
          }
        ],
        access: {
          book: '<strong>必须提前在线预约限时入场票</strong>，getty.edu 或致电 (310) 440-7300。不保证 walk-in 有位，<strong>请提前数周预订</strong>，尤其 Labor Day 长周末的 9/5、9/6',
          ticket: '<strong>免费</strong>，含所有常设与临时展览',
          hours: '周二至周五与周日 10:00–18:30；<strong>周六 10:00–21:00</strong>；<strong>周一闭馆</strong>。→ <strong>9/7 Labor Day 闭馆</strong>；9/9 周三只开到 18:30，日落 19:07 之前就要离场；<strong>9/5 周六是全程唯一能在此拍到日落与蓝调的日子</strong>',
          parking: '<strong>$25/车；15:00 后 $15；18:00 后 $10；周六 18:00 后免费</strong>。已全面无现金化，仅接受银行卡。<strong>省钱技巧：9/5 周六 15:00 后到场只需 $15，18:00 后进场仅 $10</strong>，而这正好覆盖黄金时段与蓝调',
          walk: '停车楼到博物馆入口直线约 1.26 公里，<strong>需搭免费自动缆车上山，行程 4–5 分钟</strong>。从停好车到走进博物馆入口，含安检与候车请<strong>预留 15–20 分钟</strong>'
        },
        notes: [
          '<strong>三脚架与独脚架全部明确禁止</strong>，且户外庭院也适用——这是本次行程最严格的三脚架禁令之一。若打算在 9/5 拍蓝调，必须完全手持：建议带 f/1.4–f/1.8 大光圈定焦，并善用石灰华护墙作为支撑面',
          '<strong>专业拍摄一律不允许</strong>，官方明文包含婚纱与模特拍摄。不要带反光板、闪光灯架、助理团队或明显的拍摄阵仗',
          '自拍杆仅限户外使用。允许的是户外与常设展厅内手持设备加现场自然光拍摄，照片仅限个人用途',
          '<strong>展厅局部翻修中</strong>：South Pavilion 的 101、102、206 号，West Pavilion 的 102、103 号，以及 East 与 North Pavilion 全部展厅关闭。<strong>建筑与庭院、Central Garden、South Promontory 均不受影响</strong>',
          '白色石灰华在正午会严重过曝，建议点测光或包围曝光并做 -1/3 至 -2/3 EV 补偿保护高光。<strong>偏振镜很有用</strong>，能压下白墙镜面反光并加深天空',
          'Labor Day 长周末会非常拥挤，且 I-405 通往 Getty 的路段尤其堵。9/5 周六 15:00 后入场既省停车费又能等到人潮散去（多数人 18:00 后离开）'
        ],
        images: [
          { url: 'img/getty-center-architecture-unsplash-165b85e0.jpg', cap: 'Getty Center 白色几何建筑 · Armando Castillejos / CC0' },
          { url: 'img/los-angeles-from-the-getty-center-5465683022-2bec4c14.jpg', cap: '自 Getty Center 俯瞰洛杉矶 · KimonBerlin / CC BY-SA 2.0' },
          { url: 'img/architectural-detail-the-getty-center-los-angeles-california-0142c4b2.jpg', cap: '石灰华与几何细部 · Adam Jones / CC BY-SA 2.0' }
        ]
      },
      {
        id: 'rodeo-drive',
        n: 6,
        name: '罗迪欧大道',
        en: 'Rodeo Drive · Beverly Hills Sign · Via Rodeo',
        score: 3.5,
        tldr: '三个机位步行可达，全部免费；市政停车楼 7:00–18:00 前两小时免费，两小时内拍完可以零成本。',
        tags: [{ t: '全部免费', c: 'free' }, { t: '停车前 2 小时免费', c: 'free' }, { t: '清晨才空场', c: 'risk' }],
        highlights: [
          '<strong>Beverly Hills Sign 与睡莲池</strong>：40 英尺长的发光招牌立在睡莲池后。这组景观源于 1907 年的房地产推广——当年潜在买主从对面火车站下车，第一眼看到的就是这个池塘。原招牌一度残破消失，2014 年为庆祝建市百年由市政与居民捐资完整复原',
          '<strong>Walk of Style</strong>：North Rodeo Drive 人行道上嵌有纪念 Armani、Tom Ford、Ferragamo、Manolo Blahnik、Valentino、Cartier、Versace 等时尚业名人的铜牌；Dayton Way 交口有 Robert Graham 专为此路创作的 14 英尺高实心铝雕《Torso》',
          '<strong>Two Rodeo Drive / Via Rodeo</strong>：欧洲小城风格的鹅卵石斜坡街道，坡底立着著名的路牌。<strong>术语澄清：Beverly Hills 并没有官方名为「Spanish Steps」的地标</strong>，那是游客对 Two Rodeo 鹅卵石台阶的俗称，查资料请用 Two Rodeo Drive 或 Via Rodeo',
          'Beverly Gardens Park 绿带全长 1.9 英里、跨 22 个街区，从招牌走到 Rodeo Drive 一路都是补充素材，含 Electric Fountain、玫瑰园、仙人掌园与多件公共艺术'
        ],
        photo: '人像打卡 <strong>5/5</strong>，建筑 <strong>3.5/5</strong>，风光 <strong>1.5/5</strong>。本区人像打卡属性最强的一站，全部免费且全部好拍；扣分因整体属于商业布景式建筑，缺乏建筑深度。',
        shots: [
          {
            name: 'Beverly Hills Sign 与睡莲池',
            desc: '招牌面朝南全天受光。<strong>清晨 06:45–08:30 是最佳选择</strong>——光线柔和、无人，且招牌照明仍可见。次选 18:15–19:10 暖光（但人多）。<strong>19:10 日落后招牌点亮，19:15–19:35 蓝调期可拍「招牌发光配深蓝天空」，这是这里的最高级版本。</strong>24–35mm 把睡莲池、招牌、后方棕榈一起纳入。<strong>关键是蹲低到接近水面，让睡莲池的倒影把招牌复制一遍</strong>——这是区别于千篇一律游客照的要点。',
            park: [34.0700, -118.4009],
            view: [34.072407, -118.403523]
          },
          {
            name: 'North Rodeo Drive 棕榈大道与 Walk of Style',
            desc: 'Rodeo Drive 为南北走向，<strong>日落时被西侧建筑遮挡，因此这里不是日落机位</strong>。<strong>上午 08:00–10:30</strong>（店铺尚未开门、街上几乎没人、东侧立面受暖光）是拍「空无一人的 Rodeo Drive」的唯一机会。24–35mm 沿街拍棕榈树列透视，50mm 或 100mm 接近垂直向下拍地面铜牌以避免反光。',
            view: [34.067707, -118.401485]
          },
          {
            name: 'Two Rodeo Drive 鹅卵石斜坡',
            desc: '窄街高墙，<strong>大部分时间处于阴影中——这是一个「柔光箱」机位，不依赖直射阳光</strong>。10:00–12:00 或 16:00–18:00 天空散射光最好，<strong>正午顶光会在鹅卵石上打出杂乱斑点，避开</strong>。35mm 或 50mm 还原「站在欧洲小巷里」的透视感，85mm 拍台阶上的人像。站坡底用 Via Rodeo 路牌做前景左侧，鹅卵石斜坡向上延伸做引导线。',
            view: [34.067499, -118.400945]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '<strong>全部免费</strong>，Beverly Gardens Park 与 Rodeo Drive 均为开放公共空间',
          hours: '户外区域无限制。店铺通常 10:00/11:00–18:00/19:00，<strong>9/7 Labor Day 多家可能缩短营业，但不影响任何户外拍摄</strong>',
          parking: '<strong>本区性价比最高的一处</strong>：市政停车楼（如 450 North Rexford Drive）与 Two Rodeo 私有停车场均提供 <strong>每日 7:00–18:00 前两小时免费</strong>。全市另有多个 2 小时免费地面停车场。→ <strong>两小时内的拍摄可以做到停车零成本</strong>',
          walk: '450 N Rexford Dr 停车楼到 Two Rodeo 约 <strong>280 米 / 4 分钟</strong>；Beverly Hills Sign 到 Rodeo Drive 主段约 <strong>595 米 / 8 分钟</strong>。<strong>Metro D 线「Wilshire/Rodeo」站</strong>可完全避开停车与堵车'
        },
        notes: [
          '<strong>私人保安是这里最大的变量。</strong>Rodeo Drive 奢侈品店门口普遍有保安，在店门口或店内拍摄很可能被劝止，尤其带大三脚架时。<strong>建议站在公共人行道上拍店面外观（合法），不要把镜头对着店内或顾客</strong>',
          '三脚架在公共人行道与公园内法律上可用，但 Rodeo Drive 商业段架三脚架极易被询问；<strong>Beverly Gardens Park（招牌处）宽松得多</strong>，拍蓝调时用三脚架通常没问题',
          '<strong>商业与模特拍摄需许可</strong>，带专业模特、造型团队、反光板阵仗一定会被要求出示。个人旅行摄影与手持人像不受影响',
          '<strong>Beverly Hills Sign 处几乎全天排队拍照</strong>（尤其 10:00–17:00），<strong>清晨 07:00–08:30 是唯一的空场窗口</strong>——强烈建议牺牲一个早上',
          '建议路线：停 Rexford Dr 到招牌（8 分钟），沿 Beverly Gardens Park 绿带走回 Rodeo Drive（8 分钟），再到 Walk of Style 与 Two Rodeo。全程步行 25–35 分钟，加拍摄共 1.5–2 小时',
          'Beverly Hills 是本区最安全的区域，但该市也有砸车抢夺案件，<strong>车内不要留器材</strong>'
        ],
        images: [
          { url: 'img/written-beverly-hills-in-beverly-gardens-park-a0bf4095.jpg', cap: 'Beverly Hills 招牌与睡莲池 · Andrek02 / CC0' },
          { url: 'img/via-rodeo-drive-3ccf06d3.jpg', cap: 'Via Rodeo 鹅卵石斜坡 · Prayitno / CC BY 2.0' },
          { url: 'img/rodeo-drive-california-ba14fce5.jpg', cap: 'Rodeo Drive 棕榈大道街景 · Prayitno / CC BY 2.0' }
        ]
      },
      {
        id: 'lacma',
        n: 7,
        name: '洛杉矶郡立美术馆',
        en: 'LACMA · Urban Light · Levitated Mass',
        score: 4.5,
        tldr: 'Zumthor 新馆 2026 年 5 月已开放，施工围挡结束；Urban Light 灯阵免费且全天开放，周三闭馆。',
        tags: [{ t: '室外免费', c: 'free' }, { t: '周三闭馆', c: 'risk' }, { t: '停车 $24', c: 'paid' }, { t: '禁三脚架', c: 'risk' }],
        highlights: [
          '<strong>David Geffen Galleries（Peter Zumthor 设计）已于 2026 年 5 月 4 日正式向公众开放</strong>，大规模施工围挡阶段已结束。这是一座跨越 Wilshire Blvd 的单层、约 900 英尺长的混凝土加玻璃「桥式」建筑，取代了原有的 Pereira 三馆',
          'Urban Light 是南加州被拍摄次数最多的公共艺术作品：<strong>202 根 1920–30 年代的灰白铸铁路灯排成规整网格</strong>，太阳能供电、黄昏自动点亮，形成透视线极强的「灯柱森林」',
          'Levitated Mass 是一块 <strong>340 吨重的花岗巨石悬跨于一道下沉混凝土通道之上</strong>，人走在石下形成极强的尺度对比',
          '新馆抬升的底层留出 1.4 万平方米开放空间，柱列与阴影本身就是建筑摄影素材；室外另有 Calder、Tony Smith、Jeff Koons 与 Rodin 铜雕园',
          '<strong>Urban Light 与 Levitated Mass 均为免费户外作品，不需门票</strong>'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>5/5</strong>，风光 <strong>2/5</strong>。Urban Light 是全洛杉矶人像出片率最高的免费机位，灯柱提供天然造型框架与点光源背景虚化。',
        shots: [
          {
            name: 'Urban Light 灯阵内部',
            desc: '<strong>18:45–19:45 是唯一的黄金窗口</strong>：灯在黄昏自动点亮而天空仍有余量，真正的「灯亮加天蓝」平衡期只有约 <strong>15–20 分钟（19:10–19:30）</strong>，过了 19:35 天空转黑、光比失控。24–35mm 钻进灯阵拍纵深透视，85mm f/1.4 隔着两三排灯柱拍人像让灯泡化成大光斑，14–20mm 贴地上仰把灯柱拍成放射线。<strong>沿对角线拍摄</strong>得到的汇聚线最强；人物站第三到四排灯柱之间、面朝西。',
            park: [34.0640, -118.3572],
            view: [34.063049, -118.359214]
          },
          {
            name: 'Wilshire Blvd 南侧人行道（新馆南立面）',
            desc: '<strong>17:30–19:00</strong>。Geffen Galleries 长边南立面正对 Wilshire Blvd 朝南，九月正午太阳高度 62 度偏南，因此<strong>南立面全天受光，下午 15:00 后为最佳斜射侧光</strong>，混凝土的模板纹理会被拉出来。70–200mm 把跨街段与灯阵叠在一层画面里——<strong>这是 2026 年才可能拍到的新构图</strong>。',
            view: [34.06265, -118.35915]
          },
          {
            name: 'Levitated Mass 下沉通道',
            desc: '<strong>11:00–14:00</strong>（太阳高度 61–62 度，光线能打进下沉通道，巨石在混凝土壁上投出硬边阴影），或 18:00 后拍柔光低对比版本。16–24mm 站通道中央贴近石体下方上仰制造压迫感。通道是直线下沉的，<strong>站在通道尽端沿轴线拍</strong>让人物剪影出现在巨石正下方——这是这件作品唯一必拍的构图。',
            view: [34.064472, -118.359946]
          },
          {
            name: 'Geffen Galleries 抬升底层柱廊',
            desc: '10:00–12:00 或 16:00–18:00，斜光穿过柱列产生条纹阴影。24–70mm，<strong>建议带移轴或做好后期透视校正</strong>（柱列极易变形）。沿柱廊纵向拍重复韵律，把人物放在第三根柱的阴影边缘。',
            view: [34.062851, -118.357330]
          }
        ],
        access: {
          book: '入馆需<strong>限时预约票</strong>，强烈建议提前在 lacma.org 预订，现场票时段常售罄。<strong>室外作品免费且不需门票</strong>',
          ticket: '成人 LA County 居民 $25、非居民 $30；65+ 与学生居民 $21、非居民 $26；17 岁以下居民免费。<strong>周一至周五 15:00 后 LA County 居民免费</strong>（需身份证明）。持 Metro 通票减 $2',
          hours: '周一、周二、周四 11:00–18:00；周五 11:00–20:00；周六日 10:00–19:00；<strong>周三闭馆</strong>。<strong>9/9 周三进不去；9/7 Labor Day 按周一时间正常开放</strong>',
          parking: 'Pritzker Parking Garage（6th St，Fairfax Ave 东侧一街区），每日 5:00–22:00，<strong>统一价 $24，20:00 后进入 $16</strong>',
          walk: '停车楼到 Urban Light 约 <strong>130 米 / 2 分钟</strong>；到新馆入口约 250 米 / 3–4 分钟；到 Levitated Mass 约 300 米 / 4–5 分钟'
        },
        notes: [
          '<strong>馆内严禁三脚架、闪光灯与自拍杆</strong>。个人手持摄影在多数展厅允许，个别作品或临展会标注禁拍',
          'Urban Light 是户外公共区域理论上可用三脚架，但灯阵内游客密度极高（尤其周末与 Labor Day 傍晚），<strong>三脚架会挡路且容易被要求收起，建议高感手持或独脚架</strong>',
          '<strong>隐藏的最佳窗口</strong>：想拍「空场」的 Urban Light，请在 06:00–07:00 日出前后来——此时灯还亮着而人极少',
          'Wikimedia Commons 上 Urban Light 的可用高清照片极少，且<strong>没有 Geffen Galleries 建成后的照片</strong>。原因是美国对公共场所艺术作品不适用「全景自由」，Commons 会删除大量此类照片'
        ],
        images: [
          { url: 'img/she-is-enchanted-within-urban-lights-in-explore-may-31-22-fl-b38e39fb.jpg', cap: 'Urban Light 灯阵夜间人像 · Joey Zanotti / CC BY 2.0' },
          { url: 'img/levitated-mass-at-lacma-01-674f8aa0.jpg', cap: 'Levitated Mass 悬石与下沉通道 · Leviclancy / CC0' },
          { url: 'img/broad-contemporary-art-museum-entrance-july-2023-95d4a1c4.jpg', cap: 'BCAM 入口（Renzo Piano）· Benoît Prieur / CC0' }
        ]
      },
      {
        id: 'vista-hermosa',
        n: 8,
        name: '美景自然公园',
        en: 'Vista Hermosa Natural Park',
        score: 4,
        tldr: '野草与橡树前景配 Downtown 天际线，是最「自然」的城市天际线机位；但日落即闭园，拍不到蓝调。',
        tags: [{ t: '完全免费', c: 'free' }, { t: '日落即闭园', c: 'risk' }, { t: '人少', c: 'free' }, { t: '砸车风险', c: 'risk' }],
        highlights: [
          '10.5 英亩的城市自然公园，由 Santa Monica Mountains Conservancy 在一片<strong>废弃油田上建成</strong>（2008 年开放），是该密集人口区一百多年来的第一座公园',
          '<strong>核心摄影价值在于：站在小山丘的草甸上，前景是野草与橡树，背景是完整的 Downtown 天际线</strong>——一种「野地里看见大城市」的强烈反差，是所有天际线机位中最自然的一个',
          '园内还有地中海式原生植被、橡树草原、小溪流、岩石探险区与下沉石窟式露天剧场',
          '游客极少（大多是附近居民），本地常有 Quinceañera 与毕业照在此拍摄'
        ],
        photo: '风光 <strong>4/5</strong>，人像 <strong>4.5/5</strong>，建筑 <strong>3.5/5</strong>。免费、人少、多种背景，天际线作背景的人像出片率极高；扣分因日落即闭园拍不到蓝调。',
        shots: [
          {
            name: '山顶草甸（天际线主机位）',
            desc: 'Downtown 楼群位于公园正东。<strong>日落 18:10–19:10 时太阳在你背后，楼群被正面暖金色光照亮</strong>——这是本机位的最佳时段，顺光下玻璃幕墙会整片反射橙金色。<strong>70–200mm 是首选</strong>，把楼群压缩放大让它们「贴」在草地后方；<strong>广角会让 Downtown 显得又小又远</strong>。蹲低让前景野草占画面下三分之一、天际线压上三分之一、中间留橡树剪影。',
            park: [34.0620, -118.2572],
            view: [34.061699, -118.256900]
          },
          {
            name: '野草前景低机位（草地南侧）',
            desc: '18:30–19:05，低角度光穿透草叶形成金色轮廓光。35mm 或 50mm 贴地拍摄，逆光或侧逆光穿草、天际线做背景。<strong>这是本公园最容易出「杂志感」照片的机位。</strong>',
            view: [34.0614, -118.2572]
          },
          {
            name: '石窟露天剧场',
            desc: '10:00–15:00 阴影中的柔光或 18:00 后。24–50mm 拍石阶的同心弧线配上方植被，是与天际线完全不同的封闭式人像背景，适合拍情绪肖像。',
            view: [34.0619, -118.2566]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '<strong>完全免费</strong>',
          hours: '<strong>日出至日落，日落即闭园</strong>。9/5–9/9 日落 19:07–19:13。→ <strong>可以拍到日落前的黄金时段（正是本机位最佳时段），但拍不到日落后的蓝调与城市灯光</strong>。实际执行：18:00 到场，18:15–19:10 密集拍摄，19:10 立刻撤离',
          parking: '主入口 100 N Toluca St 有<strong>小型免费专用停车场</strong>，但车位非常少，高峰时段需找路边车位',
          walk: '停车场到山顶草甸观景点约 <strong>110 米 / 2–3 分钟</strong>，有上坡但为铺装步道。全园环形步道约 0.5 英里 / 11 分钟走完'
        },
        notes: [
          '<strong>砸车盗窃是本条目最需注意的风险</strong>。多条访客反馈提到停车场与周边曾发生砸车。<strong>不要把任何器材或包袋留在车内可见处</strong>，尤其后座',
          '如果你要的是灯光天际线，请改去 6th Street Viaduct——这里日落就得走',
          '三脚架可正常使用（MRCA 未见明文禁止，公园环境宽松）',
          '公园紧邻 Edward R. Roybal Learning Center 中学，上下学时段学生密集，拍人像注意避免误拍未成年人'
        ],
        images: [
          { url: 'img/2013-vista-hermosa-natural-park-panoramio-d5f12b62.jpg', cap: 'Vista Hermosa 草甸与 Downtown 天际线 · Chris English / CC BY-SA 3.0' },
          { url: 'img/vista-hermosa-natural-park-2008-ff2c895f.jpg', cap: '公园原生植被与步道 · Laurie Avocado / CC BY 2.0' }
        ]
      },
      {
        id: 'disney-hall',
        n: 9,
        name: '迪士尼音乐厅',
        en: 'Walt Disney Concert Hall · Blue Ribbon Garden',
        score: 5,
        tldr: 'Gehry 的不锈钢曲面，西南面日落最佳；屋顶 Blue Ribbon Garden 免费且 9/5–9/9 无演出，被封概率低。',
        tags: [{ t: '完全免费', c: 'free' }, { t: '不需预约', c: 'free' }, { t: '地铁直达', c: 'free' }],
        highlights: [
          'Gehry 2003 年完成的 <strong>6,500 块不锈钢板曲面外壳</strong>，是继 Hollywood Sign 之后洛杉矶被拍摄最多的建筑',
          '曲面钢板在低角度阳光下会产生强烈的高光带与<strong>色温分离</strong>——一侧冷蓝反射天空、一侧暖金反射落日，是「金属加光」题材的教科书',
          '屋顶的 Blue Ribbon Garden 近 4,000 平方米，藏在钢壳背面，内有 Gehry 设计的《A Rose for Lilly》——<strong>用数千片碎裂的 Royal Delft 青花瓷拼成的玫瑰喷泉</strong>，是极少人知道的免费机位',
          '<strong>本次行程的好消息</strong>：2026/27 演出季在此的首场演出为 9 月 25 日，<strong>9/5–9/9 期间没有 LA Phil 音乐会</strong>，屋顶花园因演出被封的概率很低',
          '外部广场、大台阶、Grand Lobby 与屋顶花园<strong>全部免费开放，无需门票或预约</strong>'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>2.5/5</strong>。钢板作为巨型反光板使人像轮廓光极干净；碎瓷玫瑰喷泉是独一无二的背景。',
        shots: [
          {
            name: 'Grand Ave 人行道（主立面）',
            desc: 'Grand Ave 沿建筑东侧南北走向，<strong>主立面朝东偏北，因此上午 07:00–10:00 受光最佳</strong>（日出方位 82 度几乎正对）。16–24mm 超广贴墙上仰把钢帆拍成抽象曲面，70–200mm 抽取局部高光带。早晨贴着钢板拍纯抽象曲面，天空只留一条窄缝；<strong>避开正午，顶光会让钢板变成一片死白</strong>。',
            park: [34.0552, -118.2505],
            view: [34.05543, -118.24950]
          },
          {
            name: '2nd St 与 Hope St 侧（西南面，日落主机位）',
            desc: '该侧朝西南，<strong>日落方位 277–278 度，17:45–19:10 为最佳斜射光</strong>，钢板会被染成金橙色——这是本建筑最出片的时段与面向。24–70mm 主力，35mm 拍「人加曲面加暖光」。顺着建筑外侧大台阶向上拍，用台阶斜线切分画面；<strong>日落后 19:15–19:35 蓝调期间钢板转为冷蓝</strong>，可再拍一轮反差版本。',
            view: [34.05505, -118.25060]
          },
          {
            name: 'Blue Ribbon Garden 屋顶花园',
            desc: '<strong>10:00–12:00 最佳</strong>。花园被钢壳半包围、处于建筑阴影中，属常年柔光环境，<strong>不依赖日落</strong>；反而正午柔散射光最均匀，适合拍碎瓷玫瑰纹理与人像。50mm 或 85mm 拍碎瓷特写与人像，24mm 拍花园配上方钢壳的包裹感。低角度让碎瓷玫瑰做前景、上方倾斜钢板形成夹角——这是唯一能同时表现「Gehry 的硬」与「Lillian Disney 的软」的机位。<strong>可直接从 2nd St 停车库搭电梯上屋顶</strong>。',
            view: [34.055574, -118.250265]
          },
          {
            name: 'Grand Park 方向远景',
            desc: '日落后 19:15–19:35，钢板反射城市灯光配蓝调天空。70–200mm 压缩，把音乐厅与 Bunker Hill 高层叠在一起。需三脚架，注意夜间安全。',
            view: [34.0562, -118.2450]
          }
        ],
        access: {
          book: '<strong>不需要</strong>。免费自助语音导览每日 10:00–15:00（最后一场 14:00 开始），约 60 分钟，在 Grand Avenue Lobby 的 Tour Check-In 台开始，由 John Lithgow 配音，扫码收听，无需预约。<strong>导览不含音乐厅内部</strong>，且会因演出或彩排临时变更',
          ticket: '<strong>免费</strong>',
          hours: '屋顶花园官方未公布固定营业时间，实际是「建筑开放时即可进」。演出前约 90 分钟起会封闭、演出后 30–60 分钟重开。<strong>9/5–9/9 无 LA Phil 演出</strong>，但私人租用活动仍可能临时封锁（花园是热门婚宴场地），建议当天先致电 (213) 972-7300',
          parking: '<strong>Walt Disney Concert Hall Garage</strong>（2nd St，Hope St 与 Grand Ave 之间）：<strong>周末全天 $10</strong>（9/5、9/6 适用）；平日 16:30 后 $10；其他时段 $3.50/15 分钟、单日上限 $20。Labor Day 按平日还是周末计价未能确认',
          walk: '停车库到 Grand Ave 主入口约 <strong>130 米 / 2–3 分钟</strong>；也可直接从库内电梯上屋顶花园，约 3 分钟。<strong>Metro A/E 线「Grand Av Arts/Bunker Hill」站就在马路对面</strong>'
        },
        notes: [
          '公共区域（大堂、屋顶花园、外部广场）允许摄影，演出期间禁拍。<strong>三脚架政策官方未明文公布</strong>；实务上安保对屋顶花园内的三脚架容忍度低，建议手持',
          '钢板反射极强，<strong>中午会有刺眼的聚焦光斑</strong>（早年曾因反光烤热邻近公寓而做过打磨处理），拍摄时注意护眼并小心过曝',
          '建筑周边有安保巡逻，贴墙拍摄一般不受干扰，但架三脚架超过几分钟通常会被询问',
          '<strong>Bunker Hill 夜间人流稀少</strong>，独自在 2nd St 或 Lower Grand 一带带器材拍夜景需注意安全，建议结伴'
        ],
        images: [
          { url: 'img/disney-concert-hall-unsplash-3c996187.jpg', cap: 'Disney Concert Hall 不锈钢曲面 · Brandon Smith / CC0' },
          { url: 'img/disney-concert-hall-10920404614-d4442fd4.jpg', cap: 'Gehry 钢帆的抽象曲面 · Daniel Hartwig / CC BY 2.0' },
          { url: 'img/view-of-walt-disney-concert-hall-from-la-city-hall-4a407628.jpg', cap: '自市政厅俯瞰音乐厅 · Levi Clancy / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'bradbury',
        n: 10,
        name: '布拉德伯里大厦',
        en: 'Bradbury Building',
        score: 5,
        tldr: '《银翼杀手》取景地，五层通高天窗中庭；免费但只能进一层大堂，正午光线才成立，且禁三脚架。',
        tags: [{ t: '完全免费', c: 'free' }, { t: '仅一层可进', c: 'risk' }, { t: '禁三脚架', c: 'risk' }, { t: '周末仅 4 小时', c: 'risk' }],
        highlights: [
          '1893 年由 32 岁、未受正规训练的绘图员 George Wyman 完成（据说依据一次通灵留言接下委托）。红褐色砖砂外观平淡无奇，<strong>但一进门就是五层通高的天窗中庭</strong>',
          '奶油色砖墙、西班牙瓷砖、意大利大理石楼梯、法国铸铁栏杆、两部开放式笼形电梯，全部沐浴在顶部天窗直射的光柱下',
          '<strong>《Blade Runner》(1982) 中 J.F. Sebastian 的公寓即在此拍摄</strong>，另有《D.O.A.》《500 Days of Summer》等 100 余部影视作品取景，是全美最著名的室内摄影空间之一',
          '<strong>公众仅可进入一层大堂与第一层楼梯平台</strong>，二层以上为私人办公区（现有租户包括 LAPD 内务部与共享办公空间），参观 15–20 分钟足够',
          '马路对面就是 Grand Central Market，可串成一条街区人文扫街线'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>4/5</strong>，风光 <strong>0.5/5</strong>。本区最强的室内建筑摄影目标且完全免费；扣分因可站位窄、有保安、不能上楼。',
        shots: [
          {
            name: '大堂中央正对天窗仰拍',
            desc: '<strong>11:00–14:00 是唯一成立的时段</strong>（九月正午太阳高度 61–62 度，solar noon 12:50），此时阳光垂直穿过天窗，在砖墙与铸铁栏杆上投出清晰几何阴影。<strong>早于 10:00 或晚于 15:30，中庭会变成平淡的均匀灰光，出片率大幅下降。</strong>14–20mm 超广是必需的（中庭窄、层高高，24mm 已不够）。站大堂正中近乎垂直上仰，让四周楼层围合成对称方框。<strong>建议拍 3–5 张包围曝光做 HDR</strong>，天窗与阴影处光比通常超过 8 EV。',
            park: [34.0504, -118.2490],
            view: [34.05048, -118.24779]
          },
          {
            name: '第一层楼梯平台（可到达的最高点）',
            desc: '同为 11:00–14:00。24–35mm 平视拍对面楼层，85mm 拍笼形电梯的铸铁细节。<strong>这是唯一能俯拍大堂地面瓷砖并同时纳入上方天窗的位置</strong>。让人物站在下方大堂中央、从平台俯拍，可得到「巨大空间中的小人物」的尺度对比。',
            view: [34.05048, -118.24781]
          },
          {
            name: '大理石楼梯与铸铁栏杆细节',
            desc: '侧射光勾出铸铁镂空的立体感。50mm、85mm 或 100mm 微距。纯抽象构图：只拍铸铁曲线与光斑的重复韵律，不带人。',
            view: [34.05048, -118.24780]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '<strong>免费</strong>',
          hours: '官方：周一至周五 9:00–17:00；<strong>周六日仅 10:00–14:00</strong>。周末窗口很短且刚好覆盖最佳光线的前半段，<strong>9/5 与 9/6 请务必在 11:00–13:30 之间到，别拖到 14:00</strong>。<strong>9/7 Labor Day 是否开放未能确认</strong>——楼内有 LAPD 办公机构，节假日关闭可能性较高，建议致电 (213) 592-3222 确认',
          parking: '无自有停车场，<strong>建议不要开车</strong>。周边路边表价 $0.50–$6/小时（需求动态定价）；213 S Spring St 停车楼日上限 $12，离此最近',
          walk: '<strong>Metro A/E 线「Historic Broadway」站</strong>最近（官方推荐）；或 B/D 线「Pershing Square」站步行约 <strong>340 米 / 5 分钟</strong>'
        },
        notes: [
          '<strong>三脚架明确禁止</strong>（未经许可），闪光灯同样禁止。专业与商业拍摄需事先获得物业书面许可',
          '有第三方来源声称「仅允许手机拍照、专业相机不得使用」，<strong>该说法未能在官方渠道核实</strong>。实务经验与绝大多数来源显示手持单反与无反是被允许的，但请做好被要求收起大器材的准备，并保持低调',
          '<strong>这仍是运营中的办公楼</strong>，一层有保安值守。请保持安静、不要挡住电梯与楼梯通道、不要试图上二层以上（会被立即拦下）',
          '因禁用三脚架加高光比，<strong>务必提高 ISO 到 800–3200 并开启机身防抖</strong>；带一支 f/1.4–f/2.8 大光圈广角会显著提高成功率',
          '这一区靠近 Skid Row 边缘，白天有 Grand Central Market 人流相对安全，<strong>日落后不建议携带显眼器材独行</strong>'
        ],
        images: [
          { url: 'img/interior-of-the-bradbury-building-dllu-4cebcaf3.jpg', cap: 'Bradbury Building 天窗中庭 · Daniel L. Lu / CC BY-SA 4.0' },
          { url: 'img/bradbury-building-lobby-798f0c6c.jpg', cap: '大堂与铸铁栏杆 · Visitor7 / CC BY-SA 3.0' },
          { url: 'img/bradbury-building-3-9a329c1c.jpg', cap: '笼形电梯与大理石楼梯 · Visitor7 / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'sixth-street-viaduct',
        n: 11,
        name: '第六街高架桥',
        en: 'Sixth Street Viaduct (Ribbon of Light)',
        score: 4,
        tldr: '日落几乎正对桥轴线，东端向西拍拱门配天际线是招牌构图；但标志性拱门灯光至今未修复，别指望夜景亮灯。',
        tags: [{ t: '24/7 免费', c: 'free' }, { t: '拱门灯未修复', c: 'risk' }, { t: '夜间治安差', c: 'risk' }],
        highlights: [
          '5.88 亿美元、约 3,500 英尺长的桥梁，<strong>10 组成对的白色混凝土拱肋</strong>致敬 1932 年原桥的拱形语汇，宽度是旧桥两倍',
          '桥面向西可直视 Downtown 天际线，<strong>6th St 近乎东西走向而日落方位 277 度，意味着日落几乎正对桥轴线</strong>',
          '这里同时是低底盘车文化与街头时尚拍摄的圣地，是洛杉矶最具当代感的城市摄影场景',
          '<strong>最关键的坏消息：标志性的「Ribbon of Light」拱门 LED 灯光至今仍未修复。</strong>2023 年末起铜缆被盗，2024 年 6 月窃贼一次性剥走约 7 英里铜线，已黑暗近两年。2026 年 2 月市府选定承包商重新布线，<strong>目标是 2028 年奥运会前完成</strong>',
          '→ <strong>网上流传的发光拱门照片都是 2022–2023 年拍的。</strong>请把这里当作日落与蓝调剪影加天际线的机位，而不是灯光机位'
        ],
        photo: '建筑 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>3.5/5</strong>。拱门作为巨型几何框架是现在最热门的时尚与街拍背景，扣分是灯光未修复与安全顾虑。',
        shots: [
          {
            name: '东端 Boyle Heights 侧（招牌构图）',
            desc: '<strong>18:30–19:35。这是唯一能同时把拱肋与 Downtown 天际线叠进一张画面、且日落在正后方的机位</strong>，是本条目的招牌构图。<strong>70–200mm 是首选</strong>，把远处 Downtown 楼群压缩放大到与拱肋等量级，让拱肋成为前景框、天际线在拱门开口中央。日落后 20 分钟拍蓝调版本效果最佳。',
            park: [34.036500, -118.220200],
            view: [34.036869, -118.221148]
          },
          {
            name: '桥面拱肋区中段（纵向拱门序列）',
            desc: '<strong>18:15–19:10 黄金时段</strong>加 19:10–19:35 蓝调。24–35mm 沿人行道站在拱肋正下方向西拍纵深递退的拱门序列，70–200mm 压缩让 10 组拱门叠成密集图案。<strong>向西是主方向</strong>，光轴顺着桥走。把人物放在第二或第三组拱肋下方拍逆光剪影。桥面宽、车流快，务必留在人行道内。',
            view: [34.038240, -118.225377]
          },
          {
            name: '西端 Arts District 引桥与螺旋坡道',
            desc: '<strong>日出 06:30–07:15</strong>，日出方位 82 度使桥体被正面暖光照亮，且此时几乎无人无车——<strong>这是拍「空桥」唯一可行的时段</strong>。16–35mm 拍引桥与螺旋人行坡道的曲线，把 Downtown 楼群放在拱肋之间的缝隙里。',
            park: [34.0382, -118.2340],
            view: [34.038187, -118.232389]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '<strong>免费，24/7 开放</strong>（行人与自行车）',
          hours: '无固定时间，<strong>但会因街道霸占事件而临时封闭机动车道</strong>（尤其夜间），随机且无法预知',
          parking: '桥两端<strong>没有专用停车场</strong>。Arts District 一侧（Mateo St 附近）有免费路边车位但需碰运气；也可停 Union Station 付费停车场后打车',
          walk: 'Mateo St 路边停车到拱肋区中段约 <strong>600–800 米 / 8–11 分钟</strong>；桥全长约 1,067 米，<strong>从西端走到东端约 15 分钟</strong>。无紧邻地铁站'
        },
        notes: [
          '<strong>安全是本条目的首要问题。</strong>桥自 2022 年开放后即成为飙车、街道霸占、涂鸦与攀爬拱肋行为的聚集地。<strong>不要攀爬拱门</strong>（有人因此受伤或死亡，且违法）。夜间尽量避免单独前往；如要拍蓝调请结伴、车停近处、拍完立刻离开',
          '<strong>桥下与 LA River 河床一带治安风险显著高于桥面</strong>，有无家可归者营地。不建议单独前往，<strong>绝对不要在日落后进入</strong>',
          '桥体照明未修复意味着桥面夜间很暗，除安全隐患外也<strong>对焦困难</strong>，请开启峰值对焦或手动预对焦',
          '拱肋与桥体现有大量涂鸦，<strong>不要期待 2022 年那种洁白如新的混凝土</strong>。可以反向利用——涂鸦加混凝土其实很适合街头风人像',
          '桥下的 12 英亩 Sixth Street PARC 公园预计今年晚些时候开放，届时会增加通往地面的楼梯，但 9 月是否已开放未能确认'
        ],
        images: [
          { url: 'img/6th-street-bridge-los-angeles-sunscape-1-0070afa6.jpg', cap: '第六街高架桥日落 · Downtowngal / CC BY-SA 4.0' },
          { url: 'img/los-angeles-6th-street-bridge-961f6a14.jpg', cap: '拱肋序列 · Rcmrtnz96 / CC BY-SA 4.0' },
          { url: 'img/6th-street-bridge-los-angeles-sunscape-2-583d4b25.jpg', cap: '桥体全景宽幅 · Downtowngal / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'baldwin-hills',
        n: 12,
        name: '鲍德温山观景台',
        en: 'Baldwin Hills Scenic Overlook',
        score: 4,
        tldr: '唯一能同时拍到城市天际线与太平洋方向日落的点；停车到机位仅 2 分钟，但 8:00 才开门、日落即闭园。',
        tags: [{ t: '停车 $6/天', c: 'paid' }, { t: '8:00 开门', c: 'risk' }, { t: '日落即闭园', c: 'risk' }, { t: '无遮荫', c: 'risk' }],
        highlights: [
          '海拔约 420–511 英尺的山头，提供<strong>整个洛杉矶盆地的 360 度全景</strong>：Downtown 在东北、Santa Monica 与太平洋在西与西北、Hollywood Hills 与 San Gabriel 山脉在北',
          '<strong>这是本区唯一能同时拍到城市天际线与太平洋方向日落的机位</strong>',
          '这块地曾是被钻探开采的油田，现已复育为海岸鼠尾草灌丛与 chaparral 原生栖地，是「修复与保育」的象征',
          '<strong>公园本体正常开放</strong>；仅 Culver City Stairs 的登山口与下段因步道改善工程暂时封闭——但<strong>从 Hetzler Rd 顶部停车场直接开车上山、步行 2 分钟即到观景台，完全不需要走那段楼梯</strong>'
        ],
        photo: '风光 <strong>4.5/5</strong>，人像 <strong>3.5/5</strong>，建筑 <strong>3/5</strong>。本区风光属性最强的一站；扣分因日落即闭园，且 Downtown 距此约 12 公里只能拍整体轮廓。',
        shots: [
          {
            name: '主观景平台（山顶）',
            desc: '<strong>两个方向要分开处理，且时间上互相冲突。</strong>Downtown 在东北，日落时为顺光、楼群被暖金色正面照亮；太平洋在西至西北，日落方位 277 度几乎正对。建议 <strong>18:10–18:50 先向东北用 200–400mm 压缩 Downtown</strong>（距此 12 公里，200mm 以下拍出来只有指甲盖大小；九月常有 haze 反而增加层次），<strong>18:50–19:07 转向西用 24–35mm 拍海面日落配前景灌丛剪影</strong>。',
            park: [34.0180, -118.3820],
            view: [34.017774, -118.381650]
          },
          {
            name: '观景台南侧步道（原生灌丛前景）',
            desc: '18:30–19:05 低角度侧逆光穿透灌丛。24–50mm，用海岸鼠尾草与 chaparral 做前景框、中景城市、远景山脉。<strong>这是唯一能表现「这里是被修复的原生栖地」这一叙事的机位。</strong>',
            view: [34.01726, -118.38170]
          },
          {
            name: 'Culver City Stairs 顶端（俯拍楼梯）',
            desc: '清晨光线最好、空气最通透、人最少（下午这里会挤满健身人群且暴晒）。70–200mm 压缩楼梯台阶成密集图案，24mm 拍人物攀登姿态。<strong>注意楼梯下段与登山口目前因施工封闭，只能在顶端拍，不能走下去。</strong>',
            view: [34.0173, -118.3830]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '公园本身无入园门票',
          hours: '<strong>每日 8:00 至日落</strong>。→ 9/5–9/9 闭园为 19:07–19:13，<strong>拍不到日落后的蓝调与城市灯光</strong>；且 <strong>8:00 才开门意味着拍不到 6:31 的日出</strong>，「日出机位」实际只能拍到清晨光。Visitor Center 仅周五至周日 9:30–16:30（9/7、9/8 关闭，不影响拍摄）',
          parking: '<strong>$2/小时或 $6/天</strong>，停车场内自动缴费机，<strong>收据须放在仪表台上展示</strong>',
          walk: 'Hetzler Rd 顶部停车场到主观景平台约 <strong>100 米 / 2 分钟</strong>，平缓且全部无障碍——<strong>这是本区「停车到机位」最省力的一站</strong>'
        },
        notes: [
          '<strong>完全无遮蔽、九月下午极热。</strong>务必带水、防晒、帽子。正午光线最差且最难受，不要在正午来',
          '<strong>9/5、9/6、9/7 Labor Day 长周末会非常拥挤，停车场可能满位。</strong>工作日早上最清静——本次行程只有 <strong>9/8 周二</strong>符合，是拍这里的最佳日子',
          '实际执行建议：18:00 前入园以免赶不上黄金时段，18:10–19:05 密集拍摄，日落后立即下山',
          'Hetzler Rd 是一条窄的上山路，注意会车',
          '九月午后常有雾霾，会降低远距离天际线的通透度；清晨通透度显著优于午后'
        ],
        images: [
          { url: 'img/view-from-baldwin-hills-scenic-overlook-culver-city-los-ange-e30c78d2.jpg', cap: '自观景台俯瞰洛杉矶盆地 · Adam Jones / CC BY-SA 2.0' },
          { url: 'img/culver-city-stairs-68416569.jpg', cap: 'Culver City Stairs 楼梯 · Accipitre / CC BY-SA 4.0' },
          { url: 'img/baldwin-hills-scenic-overlook-culver-city-stairs-visitor-s-c-96959d0d.jpg', cap: '游客中心与原生灌丛 · Jengod / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'santa-monica-pier',
        n: 13,
        name: '圣莫尼卡栈桥',
        en: 'Santa Monica Pier · Pacific Park · West Coaster · Route 66 End of the Trail',
        score: 5,
        tldr: '日落素材最丰富的一站；但 9/9 游乐场 18:00 就关，当晚拍不到亮灯摩天轮，蓝调请安排 9/5–9/8。',
        tags: [{ t: '入园免费', c: 'free' }, { t: '9/9 提前 18:00 关', c: 'risk' }, { t: '停车节日加价', c: 'paid' }],
        highlights: [
          '1909 年建成的百年木栈桥，是<strong>全球辨识度最高的加州海滨符号</strong>',
          '桥上的 Pacific Park 是<strong>不设门禁的免费入园</strong>游乐场，共 12 项设施。两大主角是 <strong>Pacific Wheel——全球首座且唯一的太阳能供电摩天轮</strong>，夜间有灯光秀；以及 West Coaster 海滨过山车',
          '桥头的 <strong>Route 66「End of the Trail」标志</strong>立于 2009 年（Route 66 诞生 83 周年），是全 Route 66 最常被拍摄的标志之一。<strong>注意：Route 66 的官方终点其实在 Lincoln Blvd 与 Olympic Blvd 路口</strong>，栈桥上这块是「精神终点」',
          '另有 1922 年 Looff Hippodrome 内的历史旋转木马',
          '桥下木桩阵列与宽阔沙滩提供大量前景选择，<strong>日落素材是本区最丰富的</strong>'
        ],
        photo: '风光日落 <strong>5/5</strong>，人像 <strong>5/5</strong>，建筑 <strong>4/5</strong>。摩天轮、Route 66 招牌、霓虹拱门、沙滩四类高识别度背景。',
        shots: [
          {
            name: '栈桥南侧沙滩（栈桥剪影与桥桩）',
            desc: '昏金光 18:38–19:15 与蓝调 19:15–19:35。16–35mm 拍桥桩透视与广角海天，70–200mm 压缩桥体层次。低机位贴湿沙拍桥桩阵列的重复韵律与倒影。<strong>日落方位 278 度位于栈桥右后方，可让太阳贴海、栈桥作暗部剪影</strong>——本周做不到「日落穿栈桥」。<strong>9/5 此机位最佳</strong>（傍晚水位已回落、沙滩最宽）；<strong>9/7 高潮与日落重合（19:10 达 6.30 英尺）</strong>，改用 1/4–2 秒慢门拍浪花包裹桥桩。',
            park: [34.0099, -118.497],
            view: [34.007800, -118.497000]
          },
          {
            name: 'Pacific Wheel 摩天轮下方',
            desc: '<strong>蓝调 19:20–19:32 的黄金 12 分钟</strong>，灯光与天空亮度平衡。14–24mm 超广角贴近轮体基座向上仰，让辐条呈放射状充满画面；或退至 20 米外以 35mm 把摩天轮与过山车轨道并置。人像可让对象站轮前，用轮体灯光作巨大环形背景光，1/60s、f/2.0、ISO 1600–3200 手持可行。',
            view: [34.008227, -118.497834]
          },
          {
            name: 'West Coaster 过山车',
            desc: '昏金光至蓝调 18:45–19:30。70–200mm 从桥面东侧沿轨道方向拍，1/500s 以上凝固车厢，或 1/15–1/8 秒追随拍出灯带拖影。轨道与摩天轮可在长焦下压缩重叠。',
            view: [34.008241, -118.497662]
          },
          {
            name: 'Route 66 End of the Trail 标志',
            desc: '<strong>清晨 06:45–07:30</strong>（人最少可拍空景）或蓝调 19:20–19:35（标志亮灯）。24–35mm 正面平拍标志牌全文，背景纳入栈桥纵深与远处摩天轮。位置：沿 Colorado Avenue 西行至尽头登桥后直行约 60 米，在 Bubba Gump 之后、Playland 街机厅之前。',
            view: [34.008700, -118.496400]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '<strong>栈桥免费；Pacific Park 免门票入园</strong>，设施按次单独计费每项 $6–20。线上预购 Pacific Wheel 或 West Coaster 单次 $14（现场 $20）。另有当日无限次腕带。<strong>Pacific Wheel 不接受单人乘坐</strong>',
          hours: '栈桥每日 6:00 至 23:00。<strong>Pacific Park：9/5、9/6 为 11:00–23:00（已确认）；9/7、9/8 推测同样但未能确认；9/9 提前 18:00 关闭（官方明确公告）</strong>。→ <strong>9/9 当晚拍不到亮灯摩天轮的蓝调照片</strong>（当日日落 19:09），灯光蓝调务必安排在 9/5–9/8',
          parking: '<strong>Pier Deck 桥上停车场</strong>：夏季平日 $4.25/小时上限 $20、周末上限 $22，位置最好但最早满（周末与节假日常在 10:00–11:00 满）。<strong>海滨停车场</strong>：夏季平日 $12/次、周末 $15/次，营业 6:00–21:00。<strong>Labor Day 属特殊节日费率，请按周末价上浮预算</strong>。有利的一点是<strong>日落时段 18:00 后反而会因日间游客离场而释放车位</strong>',
          walk: 'Pier Deck 到 Route 66 标志约 <strong>100 米 / 1–2 分钟</strong>；到摩天轮约 200 米 / 3 分钟；海滨停车场到南侧沙滩机位约 300–450 米 / 4–6 分钟。<strong>Metro E 线 Downtown Santa Monica 站步行 10–15 分钟可完全避开停车问题</strong>'
        },
        notes: [
          '<strong>拍摄许可主管方已变更</strong>：自 2025 年 9 月 1 日起 FilmLA 不再负责 Santa Monica，改由 Film Santa Monica 主管，商业影视与商业静物摄影均需许可且需提前 5 个工作日。<strong>纯个人旅拍不需要许可</strong>',
          '个人三脚架一般可以，但不得阻碍人流。桥面木板有缝隙且人流大，请踩稳并看管器材；<strong>大型专业灯光与器材可能被要求出示许可</strong>',
          '<strong>想拍空旷桥面请在 06:00–07:30 到</strong>（栈桥 6:00 开放，正好覆盖九月日出 06:30 与晨金光）',
          '栈桥与 Santa Monica 沙滩夜间治安优于 Venice Boardwalk，但仍建议 23:00 闭桥前离开',
          '<strong>9/7–9/9 傍晚水位高</strong>，勿在桥桩间久留，注意涌浪'
        ],
        images: [
          { url: 'img/santa-monica-pier-panoramio-5-479a42b1.jpg', cap: 'Santa Monica 栈桥与摩天轮 · bynyalcin / CC BY 3.0' },
          { url: 'img/anglers-on-the-santa-monica-pier-deb75fe5.jpg', cap: '栈桥桥面与桥桩 · Jelson25 / Public domain' },
          { url: 'img/santa-monica-and-venice-ca-september-2022-111-fca32430.jpg', cap: '栈桥入口与霓虹 · Another Believer / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'venice-canals',
        n: 14,
        name: '威尼斯运河历史街区',
        en: 'Venice Canal Historic District',
        score: 4,
        tldr: '1905 年开凿的运河与九座拱桥，全洛杉矶最可靠的倒影场景；区内完全没有访客停车位。',
        tags: [{ t: '免费', c: 'free' }, { t: '区内无停车', c: 'risk' }, { t: '居民社区', c: 'risk' }],
        highlights: [
          '1905 年由 Abbot Kinney 开凿的六条海水运河，为 National Register 历史街区。<strong>九座拱形步行桥横跨约 50 英尺宽的水道</strong>',
          '两岸建筑从 1900 年代原始小屋到当代玻璃住宅并置，<strong>建筑年代跨度是本区人文密度最高的</strong>',
          '<strong>水面平静如镜，是全洛杉矶最可靠的倒影场景</strong>。清晨有各类海鸟在船坞与小船上觅食，黄昏水面光色最美',
          '全区约 1.5 英里可步行水岸，慢走加拍照约需 1 小时'
        ],
        photo: '建筑人文 <strong>5/5</strong>，人像 <strong>4/5</strong>，风光 <strong>2/5</strong>。拱桥是天然人像框架、背景干净、光线柔和；扣分因空间狭窄且需顾及居民。',
        shots: [
          {
            name: 'Grand Canal 北段步行桥',
            desc: '<strong>日出后 06:35–07:05</strong>（晨间无风时倒影最完整）或昏金光 18:40–19:10。24–35mm 立于桥面中央沿运河纵轴向南望，用拱桥栏杆做前景引导线，<strong>压低机位至栏杆高度让水面倒影占画面下半</strong>。',
            park: [33.98600, -118.47000],
            view: [33.985934, -118.465102]
          },
          {
            name: 'Dell Avenue 跨 Carroll Canal 桥',
            desc: '昏金光 18:40–19:12。Dell Avenue 是唯一贯穿运河区的车道，四座桥连成序列。35–85mm 站桥侧人行道向水道望，<strong>可把一座拱桥完整纳入并在水中形成「O」形闭环倒影</strong>。人像置于桥拱正中，f/2.8–f/4 使两岸房屋轻微虚化。',
            view: [33.984577, -118.466591]
          },
          {
            name: 'Grand Canal Court 水岸步道桥',
            desc: '蓝调 19:15–19:35，住宅灯火亮起后用 16–24mm 超广角贴近水面拍两岸窗光在水中的拉长倒影。需三脚架，2–8 秒曝光。<strong>注意步道很窄，避免占道。</strong>',
            view: [33.983328, -118.467587]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '<strong>免费</strong>，24 小时开放（官方建议白天 6:00–21:00 造访）',
          parking: '<strong>本条目最大的难题：运河区内完全没有访客停车位。</strong>只能停街区外围 Venice Blvd、Washington Blvd、Pacific Avenue、Strongs Drive 的路边车位（免费但竞争激烈），或走远些用 Venice Beach 公共停车场 $5–15。路边智能停车表约 $1–2/小时、<strong>通常限停 2 小时</strong>，多数周一至周六 8:00–20:00 收费。<strong>务必逐块读牌</strong>，部分属优先停车区需居民许可证。建议上午 10 点前抵达',
          walk: '从 Pacific Avenue 沿线车位入运河区约 <strong>250–500 米 / 3–6 分钟</strong>；从 South City Parking Lot 步行约 900 米 / 11–13 分钟'
        },
        notes: [
          '<strong>这是一个居民社区，不是景区。</strong>步道是公共通行权，但花园、船坞、庭院、船只均为私人财产，踏入即属侵入。城市立牌写明风险自负',
          '<strong>水面传声极好，请压低音量。</strong>居民协会与市府合作管理标识，明确要求访客留在步道上',
          '禁止游泳与垂钓，禁止在步道骑车或滑板（需推行），遛狗须系绳并清理',
          '<strong>夜间照明极少、人烟稀少</strong>，独行者不建议天黑后久留',
          '步道狭窄，三脚架容易挡道，请尽量收拢并礼让行人'
        ],
        images: [
          { url: 'img/los-angeles-venice-canal-historic-district-02-b36a5958.jpg', cap: 'Venice 运河与拱桥倒影 · Américo Toledano / CC BY-SA 4.0' },
          { url: 'img/los-angeles-venice-canal-historic-district-01-8776c827.jpg', cap: '运河两岸住宅 · Américo Toledano / CC BY-SA 4.0' },
          { url: 'img/venice-canals-winter-evening-9e907b7c.jpg', cap: '运河傍晚水面 · Satyajitc / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'muscle-beach',
        n: 15,
        name: '肌肉海滩与威尼斯海滨步道',
        en: 'Muscle Beach Venice · Venice Boardwalk · Venice Sign',
        score: 4.5,
        tldr: '街头文化密度最高的一站，纪实与人像素材极多；但天黑后治安明显下降，蓝调拍完即撤。',
        tags: [{ t: '免费', c: 'free' }, { t: '停车 $9–15', c: 'paid' }, { t: '夜间治安差', c: 'risk' }],
        highlights: [
          'Muscle Beach Venice 是<strong>户外健身文化的圣地</strong>——沙地上的露天举重区，蓝色器械、看台与棕榈树构成极具辨识度的美式亚文化场景，健美者常在此训练与表演，是<strong>纪实与人物特写的富矿</strong>',
          'Venice Boardwalk（Ocean Front Walk）绵延 3 英里，街头艺人、涂鸦墙、滑板公园、手绘店招连成一条<strong>高密度街拍走廊</strong>',
          'Windward Avenue 上方横跨的 Venice Sign 是标志性打卡门框，<strong>夜间亮灯</strong>',
          '沙滩宽阔且正西向，可拍海上落日与棕榈剪影'
        ],
        photo: '人文 <strong>5/5</strong>，人像 <strong>5/5</strong>，风光 <strong>3/5</strong>。器械区、Venice Sign、涂鸦墙三种截然不同的人像背景，风格强烈；风光扣分因视觉杂乱、缺乏干净前景。',
        shots: [
          {
            name: 'Muscle Beach 露天健身区',
            desc: '<strong>昏金光 18:40–19:12</strong>（低角侧光勾勒肌肉线条与器械金属反光），或上午 9–11 点训练人多时。35mm 定焦拍环境人物，<strong>70–200mm 拍不干扰的特写并压缩看台层次</strong>。由沙地低机位仰拍，让人物与器械顶在天空上形成干净剪影。<strong>拍摄他人前请征得同意。</strong>',
            park: [33.9855, -118.4735],
            view: [33.985456, -118.472593]
          },
          {
            name: 'Venice Sign（Windward Avenue 上方）',
            desc: '<strong>蓝调 19:15–19:35</strong>，招牌亮灯与天空同亮度。24–50mm 站在 Windward Avenue 路中央（注意车辆）沿街道轴线向东望，让招牌横跨画面上缘、两侧历史柱廊建筑形成对称走廊，人像置于街心以招牌为顶部框架。',
            view: [33.987613, -118.472361]
          },
          {
            name: 'Boardwalk 街拍走廊',
            desc: '下午 16:00–18:30 人流与光线俱佳。28mm 或 35mm 贴近抓拍，沿步道纵轴利用棕榈树列与店招做重复韵律。<strong>浅景深不适用，建议 f/8 全景深街拍。</strong>',
            view: [33.986000, -118.472700]
          },
          {
            name: '沙滩向西拍海上落日',
            desc: '19:00–19:20。16–35mm 拍棕榈剪影配落日，或 200mm 以上压缩落日与人物剪影。日落方位约 278 度正对海面。<strong>9/5 沙滩最宽，最适合此机位</strong>（当日高潮早在 16:55，日落时水位已明显回落）。',
            view: [33.985100, -118.474500]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '<strong>免费</strong>。Muscle Beach 围栏健身区内部使用需付费，但从外围拍摄免费',
          parking: '三个公共停车场（South City Lot 2100 Ocean Front Walk、North City Lot 300 Ocean Front Walk、Washington Blvd Lot 3100 Washington Blvd）：<strong>夏季 6:00–9:00 $9，9:00–24:00 $15</strong>。付费机需输车牌，收卡与 $1、$5 纸币不找零，票据面朝上放驾驶侧仪表台。<strong>一车一入，当日不可重复进出</strong>。夏季周末与节假日常在 10:00–11:00 前满，Labor Day 更早，建议 9:30 前到',
          walk: 'South City Lot 到 Muscle Beach 约 <strong>400 米 / 5 分钟</strong>；Muscle Beach 到 Venice Sign 约 300 米 / 4 分钟；到 Venice Canals 约 1.3 公里 / 15–18 分钟'
        },
        notes: [
          '<strong>天黑后的 Venice Boardwalk 安全等级明显下降。</strong>此处长期存在无家可归者营地、街头纠纷与偷窃。<strong>强烈建议蓝调拍完（约 19:35）即撤离</strong>，不要在步道南段或偏僻沙滩独行，器材不外露，勿把包放在脚边。若要拍夜景请结伴并留在人多灯亮的 Windward Plaza 一带',
          '<strong>Labor Day 是全年海滨最挤的日子之一</strong>，Boardwalk 从上午 10 点起就极为拥挤',
          '<strong>商业拍摄许可仅限周一至周五</strong>，不接受周末与节假日——9/7 Labor Day 当天不可申请。纯个人旅拍不需要许可',
          '拍摄街头艺人通常被期待给小费；健美者多数乐于被拍但请先问'
        ],
        images: [
          { url: 'img/muscle-beach-venice-outdoor-gym-c71bfe16.jpg', cap: 'Muscle Beach 露天健身区 · DanielMichaelPerry / CC0' },
          { url: 'img/venice-beach-boardwalk-los-angeles-2019-4ed8f08b.jpg', cap: 'Venice Boardwalk 街拍走廊 · Steven Lek / CC BY-SA 4.0' },
          { url: 'img/muscle-beach-venice-july-2023-2769acb0.jpg', cap: 'Muscle Beach 器械与看台 · Benoît Prieur / CC0' }
        ]
      },
      {
        id: 'wayfarers-chapel',
        n: 16,
        gone: '本次无法抵达',
        name: '玻璃教堂',
        en: 'Wayfarers Chapel',
        score: 0,
        tldr: '2024 年因滑坡拆解入库，原址与庭园全部封闭，重建希望 2027 年秋开工。请从行程中删除。',
        tags: [{ t: '已拆解', c: 'risk' }, { t: '原址封闭', c: 'risk' }],
        highlights: [
          'Lloyd Wright（Frank Lloyd Wright 之子）设计的「玻璃教堂」，1951 年落成，以玻璃墙与红杉林交融的中世纪现代主义杰作闻名，<strong>2023 年 12 月刚被指定为 National Historic Landmark</strong>',
          '<strong>2024 年 2 月因 Portuguese Bend 滑坡复活而关闭</strong>——教堂地基出现大面积裂缝、结构失稳；<strong>2024 年 5 月起专业拆解，7 月拆解完成</strong>，绝大部分材料（含 Walk of Honor 刻名纪念砖）已编号入库',
          '<strong>官方已判定原址不可能重建。</strong>新址选在 City Hall 旁的 Battery Barnes（一处约 4 英亩、现属 U.S. Coast Guard 的二战海防用地，距原址西约 1 英里）',
          '<strong>卡点在于该地块转让需国会立法</strong>：Rep. Ted Lieu 于 2026 年 1 月表示将提案，但 RPV 市长明确表示「目前尚无任何承诺或协议」；截至 2026 年 2 月最新项目更新，Battery Barnes 仍被教会自己的材料描述为「拟定」地点',
          '官网 FAQ 称<strong>希望第一期重建于 2027 年秋季开工</strong>——即本次行程期间既无教堂，也无工地可拍'
        ],
        photo: '<strong>本次无法拍摄。</strong>请勿驱车前往原址——该处封闭，且位于滑坡活跃区。替代机位见上一条 Point Vicente。',
        shots: [],
        /* 无机位，但保留原址坐标以便地图上出现 17 号红色针脚，
           与卡片编号对应。坐标为 OSM way/873354664 实体。 */
        at: [33.743735, -118.377480],
        access: {
          book: '—',
          ticket: '—',
          hours: '<strong>原址与周边庭园全部封闭</strong>',
          parking: '—',
          walk: '—'
        },
        notes: [
          '<strong>请将此点从行程中删除。</strong>教会活动未中断：主日聚会以视频进行，并在 Palos Verdes Estates 的 St. Francis Chapel 提供线下选项',
          '首选替代是 <strong>Point Vicente Lighthouse 与 Interpretive Center</strong>（见上一条），崖顶正西无遮挡、日落方位正对、停车免费',
          '其次可考虑 Abalone Cove Shoreline Park（最接近原计划位置）、Terranea Resort 崖顶公共步道、Trump National Golf Club 崖顶眺望'
        ],
        images: [
          { url: 'img/wayfarers-chapel-2018-2-19-ca513868.jpg', cap: '拆解前的玻璃教堂（历史影像）· Sitao Xiang / CC BY-SA 4.0' },
          { url: 'img/wayfarer-s-chapel-plaza-67d09927.jpg', cap: '教堂庭园（历史影像）· Prashila Amatya / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'point-vicente',
        n: 17,
        name: '文森特角灯塔',
        en: 'Point Vicente Lighthouse · Interpretive Center',
        score: 4.5,
        tldr: 'Wayfarers Chapel 的首选替代：崖顶正西无遮挡、日落方位正对，且停车免费。',
        tags: [{ t: '免费', c: 'free' }, { t: '停车免费', c: 'free' }, { t: '塔内通常不开放', c: 'risk' }],
        highlights: [
          '1926 年建成的 <strong>67 英尺白色圆塔</strong>立于 Palos Verdes 半岛西端崖顶，塔身洁白、灯室 Fresnel 透镜完整，是南加州最上镜的灯塔之一',
          '<strong>崖顶正西开阔、无任何遮挡，而九月日落方位角 277–279 度几乎正对</strong>——这是本区最干净的海上落日机位',
          '可完美替代已无法抵达的 Wayfarers Chapel 的「建筑加海景」组合，且<strong>停车完全免费</strong>',
          'Interpretive Center 为市立博物馆与灰鲸观测点（鲸季在冬春，九月无），崖顶步道与草坪开阔'
        ],
        photo: '风光日落 <strong>5/5</strong>，建筑 <strong>4/5</strong>，人像 <strong>4/5</strong>。白塔配蓝海与崖顶草坪，背景干净高级；建筑扣分因塔内平日不开放。',
        shots: [
          {
            name: 'The Major Vista Point 观景台',
            desc: '<strong>昏金光 18:37–19:12，日落 19:09–19:14，蓝调至 19:36</strong>。24–70mm 拍灯塔配海，16–24mm 拍崖线全景。灯塔置于画面左或右三分线，让开阔海平面与落日占据其余空间，崖顶野草与龙舌兰可作前景。',
            park: [33.744889, -118.410241],
            view: [33.743170, -118.410373]
          },
          {
            name: '灯塔全景机位',
            desc: '70–200mm 从北侧压缩拍塔身与崖壁层次，35mm 拍塔、崖、海的关系。',
            view: [33.741883, -118.410743]
          },
          {
            name: 'Interpretive Center 崖顶草坪（人像）',
            desc: '昏金光时段。85–135mm，f/1.8–2.8 逆光拍人物发丝光，背景为虚化的海平面与落日。',
            view: [33.744761, -118.411400]
          }
        ],
        access: {
          book: '不需预约',
          ticket: '崖顶步道与观景台免费。Interpretive Center 2026 年 9 月开放时间与门票<strong>未能确认</strong>（历史上为低价或免费、周一可能闭馆），请行前查 rpvca.gov——<strong>但户外崖顶机位不受此影响</strong>',
          hours: '崖顶步道全天可达。<strong>灯塔塔身由 U.S. Coast Guard 管理，通常不对外开放内部</strong>（历史上仅每月一次开放日），2026 年 9 月安排未能确认',
          parking: '<strong>多个免费停车场</strong>（OSM 标注 fee=no）',
          walk: '停车场到 The Major Vista Point 约 <strong>200–280 米 / 3–4 分钟</strong>；到灯塔观景位约 350 米 / 5 分钟'
        },
        notes: [
          '崖壁陡直无护栏处极危险，勿靠近边缘或翻越围栏。<strong>海风强劲，三脚架需压重</strong>',
          '前往此处需经 Palos Verdes Drive South；<strong>该路对汽车正常开放</strong>，穿越 Portuguese Bend 滑坡区的路段仍在持续沥青修补，请减速、留意路面高差与横向裂缝。' +
            '好消息是<strong>滑动已显著减速</strong>：峰值曾达每周 12 英寸，2026 年 8 月最新读数为每周约 1.1 英寸。行前仍建议查 rpvca.gov/landmovement',
          '<strong>注意两轮车禁令仍然有效</strong>：出于安全考虑，Palos Verdes Drive South 的滑坡路段禁止摩托车、电动自行车与自行车通行——这只影响两轮出行，自驾不受限',
          '<strong>其他替代机位</strong>：Abalone Cove Shoreline Park（距 Wayfarers 原址仅约 350 米，有崖顶海景与潮池，但位于滑坡活跃区边缘，2026 年开放状态未能确认）；Terranea Resort 崖顶公共步道（California Coastal Trail 段，非住客停车通常收费）；Trump National Golf Club 崖顶眺望（公众通行范围未能确认）'
        ],
        images: [
          { url: 'img/point-vicente-lighthouse-44623086120-4b329d3c.jpg', cap: 'Point Vicente 灯塔与崖线 · Ron Reiring / CC BY-SA 2.0' },
          { url: 'img/parlos-verdes-light-house-aug-2012-1a9287d1.jpg', cap: '灯塔全景 · Mike Quach / CC BY-SA 3.0' },
          { url: 'img/point-vicente-lighthouse-on-cliff-b159e179.jpg', cap: '崖顶白塔 · Nhostetler / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'point-fermin',
        n: 18,
        name: '费尔明角灯塔与公园',
        en: 'Point Fermin Lighthouse · Point Fermin Park · Sunken City',
        score: 4.5,
        tldr: '旧金山与圣地亚哥之间现存最古老的灯塔，免费；9/7 周一加节日双重闭馆，请改 9/8 或 9/9 下午。',
        tags: [{ t: '完全免费', c: 'free' }, { t: '周一闭馆', c: 'risk' }, { t: '每场限 8 人', c: 'risk' }, { t: '停车场日落即关', c: 'risk' }],
        highlights: [
          '1874 年建成，是 San Pedro Bay 的首座导航灯，也是<strong>旧金山与圣地亚哥之间现存最古老的灯塔</strong>。Stick Style 维多利亚木构（加州红杉），为建筑师 Paul J. Pelz 仅存三例设计之一',
          '现为市立博物馆，内藏时期家具、灯塔看守人制服，以及<strong>失踪六十年后被寻回的原始四等 Fresnel 透镜</strong>',
          '白色尖桩篱栅与玫瑰花圃环绕，春至秋开花，园内有巨大的 Moreton Bay fig 遮荫古树，<strong>是热门婚纱与订婚拍摄地</strong>',
          'Point Fermin Park 是崖顶草坪公园，有凉亭与露天小剧场，可俯瞰 San Pedro 海岸线；附近还有 Korean Friendship Bell 韩国友谊钟，钟亭与全景视野俱佳',
          '<strong>Sunken City</strong> 是约一世纪前整片街区滑入海中留下的断裂街道与管道残骸，被数代涂鸦艺术家改造成末世感强烈的废墟景观（《The Big Lebowski》撒骨灰一幕取景于此），<strong>但 2026 年仍属非法侵入</strong>'
        ],
        photo: '人文 <strong>5/5</strong>，人像 <strong>4/5</strong>，风光 <strong>4/5</strong>。1874 年国家级历史木构灯塔加原始 Fresnel 透镜加韩国友谊钟，人文厚度极高；这也是本区最清静的一站。',
        shots: [
          {
            name: '灯塔正面（白篱栅与玫瑰花圃）',
            desc: '<strong>昏金光 18:37–19:10</strong>暖光正打在白色木构与塔身最讨喜；或开放时段 13:00–16:00 拍室内与院落细节。24–70mm 拍全景，85–135mm 拍塔顶灯室与木饰细节。<strong>以白色尖桩篱栅作前景引导线斜切入画</strong>，玫瑰花圃压低机位作虚化前景，灯塔置于三分线。',
            park: [33.705663, -118.293906],
            view: [33.705442, -118.293695]
          },
          {
            name: 'Point Fermin Park 崖顶（西南向日落）',
            desc: '19:00–19:20 日落，19:20–19:35 蓝调。日落方位约 277.5 度正对崖前开阔海面。16–35mm 拍崖线与海天，70–200mm 压缩落日与海面船影，用凉亭或古树剪影作画框前景。',
            view: [33.707715, -118.292151]
          },
          {
            name: '崖下岩滩潮池',
            desc: '<strong>仅 9/8 与 9/9 下午可用</strong>（低潮 13:56 为 1.86 英尺、14:42 为 1.35 英尺，后者是五天中最低的白天潮位）。16–35mm 配偏振镜消除水面反光看清池底，或 90–100mm 微距拍潮池生物。低机位让潮池占前景、灯塔或崖壁在远景。<strong>下行土径陡且湿滑，务必穿抓地鞋。</strong>',
            view: [33.705100, -118.294300]
          },
          {
            name: 'Sunken City 合法眺望位（勿翻越围栏）',
            desc: '废墟本体<strong>不可进入</strong>。合法观看位置为 Point Fermin Park 东侧崖顶与 Pacific Overlook Park。<strong>70–200mm 或 100–400mm 从围栏外长焦压缩</strong>拍废墟涂鸦与断裂路面。',
            view: [33.706400, -118.290500]
          }
        ],
        access: {
          book: '不需预约。<strong>灯塔内部仅限导览参观</strong>，13:00、14:00、15:00 三场先到先得，<strong>每场限 8 人</strong>（空间狭小），约 45–60 分钟。大型团体或私人导览须提前致电 (310) 241-0684',
          ticket: '<strong>灯塔与公园均免费</strong>，欢迎捐款',
          hours: '灯塔<strong>周二至周日 13:00–16:00，周一固定闭馆</strong>，且重大节日与园内特别活动期间可能关闭。→ <strong>9/7 周一加 Labor Day 双重命中，几乎确定无法进入，请改约 9/8 或 9/9 下午</strong>。公园 6:30–22:00',
          parking: '<strong>免费</strong>。园内小型停车场与 Angels Gate Overflow Lot 忙日很快满；Paseo del Mar 及周边街道有充足免费路边车位。<strong>关键：停车场仅日出至日落开放，而那正是拍日落的时段——请务必停在 Paseo del Mar 路边，否则日落后车会被锁在场内</strong>',
          walk: '园内停车场到灯塔约 <strong>100 米 / 1–2 分钟</strong>；灯塔到崖顶约 230 米 / 3 分钟；到韩国友谊钟约 480 米 / 6–7 分钟（有上坡）；到 Sunken City 眺望点约 200 米 / 3 分钟'
        },
        notes: [
          '<strong>Sunken City 进入至今仍属违法。</strong>2026 年 2 月市议会才刚拨款 14 万美元做工程设计、4 万做环境监测，计划仅开放较稳定的上层台地，且需取得海岸开发许可；市议员办公室明确表示<strong>没有确切时间表、可能还需整整一年</strong>。执法强度高——San Pedro 曾在一天内开出数十张罚单，<strong>罚款约 $450</strong>，可能以 Penal Code §602 侵入轻罪传票处理。<strong>坠崖风险真实</strong>，此处约每两三个月就有人坠落或被困需搜救',
          '<strong>崖壁危险</strong>：Point Fermin 一带为活动性滑坡与侵蚀地形，边缘无护栏处随时可能崩落。请留在铺装步道与护栏内侧',
          '<strong>潮池安全</strong>：涨潮时岩滩会被切断，请在低潮前后各 1.5 小时内完成，留意涌浪与湿滑藻类',
          '身高低于 48 英寸不得登塔，18 岁以下须成人陪同。周末 8 人名额很快满，建议提前 15–20 分钟到场排队',
          '婚纱与订婚等有偿商业拍摄需办证（此处是热门婚拍地），<strong>个人旅拍不需要</strong>',
          '园内浣熊会主动接近人，勿投喂、看管食物与器材包'
        ],
        images: [
          { url: 'img/point-fermin-lighthouse-46475598811-b4781d15.jpg', cap: 'Point Fermin 灯塔与白篱栅 · Ron Reiring / CC BY 2.0' },
          { url: 'img/point-fermin-lighthouse-san-pedro-california-11400358046-f72afeac.jpg', cap: '维多利亚木构与灯室 · Doug Kerr / CC BY-SA 2.0' },
          { url: 'img/point-fermin-lighthouse-flowers-281d5483.jpg', cap: '灯塔与玫瑰花圃 · Cynthiastanley / CC BY-SA 4.0' }
        ]
      }
    ]
  },
  /* ===================== ④ Laguna Beach ===================== */
  {
    id: 'laguna',
    name: '④ Laguna Beach, Orange County',
    navName: 'Laguna',
    color: '#4bd18a',
    lead: '三个条目（Victoria Beach 与 Pirate Tower 已合并）。这一区最大的变量不是天气也不是人流，而是<strong>潮汐</strong>。',
    callouts: [
      {
        type: 'warn',
        title: '🌊 Pirate Tower 这五天无法在日落时拍摄',
        html: '<p>NOAA La Jolla 站数据显示，9/5–9/9 的深度低潮<strong>全部落在凌晨 00:44–02:45</strong>（-0.11 至 -0.65 ft），' +
          '而日落时段（19:03–19:12）正好撞上 <strong>5.9–6.4 ft 的高潮</strong>。</p>' +
          '<p>需要 ≤2.5 ft 才能绕过岩角，理想 ≤1.5 ft。可行窗口只有：</p><ul>' +
          '<li><strong>最佳：9/9（周三）12:30–16:30</strong>，围绕 14:34 的 1.27 ft 低潮</li>' +
          '<li>次佳：9/8（周二）11:45–15:45，围绕 13:48 的 1.79 ft 低潮</li>' +
          '<li>9/7 中午 12:57（2.37 ft）属临界，只在浪小无涌时尝试</li>' +
          '<li><strong>9/5、9/6 全天不可行</strong></li></ul>' +
          '<p>这与「南下先经 Laguna、后到 San Diego」的自然顺序直接冲突——按常规动线 Laguna 会落在潮位最差的 9/6–9/7。' +
          '若 Pirate Tower 是必拍项，<strong>考虑把 Laguna 放在返程</strong>（San Diego 折回约 105 km / 1.2 小时，若 9/9 沿 I-5 北返反而顺路）。</p>'
      },
      {
        type: 'info',
        title: '专业摄影许可',
        html: '<p>Laguna Beach 市政法典第 5.66 章规定，市属公园与海滩上的「专业静态摄影」须持证，' +
          '<strong>判定标准是是否有金钱交易——自用旅拍不需要</strong>。实操中的执法触发点是：落地灯架、沙袋、反光板推车，或阻挡步道与阶梯。' +
          '海滩开放 05:00–01:00。</p>'
      },
      {
        type: 'tip',
        title: '日落时刻',
        html: '<p>9/5 <strong>19:12</strong> → 9/9 <strong>19:07</strong>。黄金时刻约 18:34–19:28，蓝调再补 10 分钟。' +
          '日落方位角 276.7°–278.5°，近正西偏北。</p>'
      }
    ],
    spots: [
      {
        id: 'heisler',
        n: 1,
        name: '海斯勒公园海滩阶梯',
        en: 'Heisler Park Beach Stairway',
        score: 4.5,
        tldr: 'Laguna 最「少走路、多机位」的一站，全程铺装易带器材，阶梯是最出名的人像机位之一。',
        tags: [{ t: '免费', c: 'free' }, { t: '无需预约', c: 'free' }, { t: '停车 $2.50/hr', c: 'paid' }],
        highlights: [
          '崖顶草坪步道加多层弧形石阶直落沙滩，下方 <strong>Divers Cove、Picnic Beach、Rockpile Beach</strong> 三个岩石海湾串联，退潮时潮池成片',
          '另有凉亭与圆形剧场可作人像布景。全程铺装、离车极近，是 Laguna 最「少走路、多机位」的一站'
        ],
        photo: '风光 <strong>5/5</strong>，人像 <strong>5/5</strong>，建筑 <strong>3/5</strong>。' +
          '西向正对日落方位（277–278°），崖顶前景层次丰富。阶梯是 Laguna 最出名的人像机位之一，路径全铺装、易带器材。',
        shots: [
          {
            name: 'Divers Cove 阶梯顶（主机位）',
            desc: '俯拍阶梯加海湾。<strong>24–35mm 竖构图，站阶梯顶 1–2 级，人物置于第三个转折处。</strong>' +
              '核心窗口 18:35–19:25，蓝调补到 19:35。',
            park: [33.54477, -117.79202],
            view: [33.54491, -117.79398]
          },
          {
            name: '公园最北端阶梯',
            desc: '视野最开阔。16–24mm 广角向西南收 Divers Cove 岩石。',
            view: [33.54502, -117.79475]
          },
          {
            name: 'Picnic Beach / Rockpile 下切阶梯',
            desc: '潮池特写与慢门拉丝用 70–200mm 或 24–70mm 配 ND。<strong>9/8–9/9 上午 08:30–10:00</strong> 潮位较低时下到岩滩。',
            view: [33.54380, -117.79257]
          },
          {
            name: 'Heisler Park 凉亭（人像常用）',
            view: [33.542882, -117.789012],
            desc: '公园东南端，环境干净。',
            at: [33.54289, -117.78901]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免费',
          hours: '海滩开放 05:00–01:00',
          parking: 'Cliff Drive 路边计时表 <strong>$2.50/小时</strong>，多为 3–4 小时上限，<strong>不可续投</strong>。执法市中心 08:00–21:00、以外至 19:00。备选：Glenneyre 停车楼步行 5 分钟；<strong>Act V 免费大场加免费接驳车</strong>（周六日 09:00–19:00）',
          walk: '<strong>185 米 / 3 分钟</strong>，全程铺装平路',
        },
        notes: ['阶梯石面在晨雾后湿滑', '夏季狗禁入沙滩，看现场标示'],
        images: [
          { url: 'img/heisler-park-laguna-beach-california-01-0f21fa32.jpg', cap: 'Heisler Park 海岸 · Norbert Nagel / CC BY-SA 4.0' },
          { url: 'img/heisler-park-laguna-beach-california-05-098a07d1.jpg', cap: 'Heisler Park 崖顶视角 · Norbert Nagel / CC BY-SA 4.0' },
          { url: 'img/mermaid-beach-heisler-park-laguna-beach-california-e41b90ac.jpg', cap: 'Mermaid Beach · Norbert Nagel / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'victoria-pirate',
        n: 2,
        name: '维克多利亚海滩 & 海盗塔',
        en: 'Victoria Beach & Pirate Tower (La Tour)',
        score: 4.5,
        tldr: '已合并（塔在海滩北端岩角内侧）。全加州最独特的海岸建筑单体，但这五天只有 9/9 下午能拍。',
        tags: [{ t: '免费', c: 'free' }, { t: '仅 9/9 下午可行', c: 'risk' }, { t: '停车极难', c: 'risk' }, { t: '塔为私产不可入内', c: 'risk' }],
        highlights: [
          '<strong>1926 年建成的 60 英尺混凝土塔楼</strong>，带尖顶角楼，看上去像童话城堡，' +
            '实际功能朴素得多——它是当时的加州参议员 William E. Brown 为自己崖顶宅邸修的<strong>封闭式下海楼梯间</strong>，' +
            '内部是一道螺旋梯。塔至今仍属私产，<strong>不可入内</strong>',
          '真正让它出名的是后来的住户：一位会打扮成海盗、在塔里和沙滩上招呼孩子的老先生 Harold Kendrick，' +
            '「Pirate Tower」这个名字就是这么来的，而不是因为真有海盗',
          '塔旁有一座圆形混凝土水池（原为业主的潮汐泳池），<strong>会随季节被浪与沙填满或掏空</strong>——' +
            '你去的时候它可能是个清澈水池，也可能只是一圈埋在沙里的边缘',
          '塔身紧贴崖壁，<strong>必须绕过一段外凸的岩角才能抵达，只有低潮可行</strong>。这是它高门槛的全部原因'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>5/5</strong>，风光 3/5（<strong>本次行程无法在日落拍摄，已降级</strong>）。' +
          '童话塔楼与天然崖壁的组合无可替代，是橙县最高人气打卡点之一。',
        shots: [
          {
            name: '塔东南向约 25 米沙滩（主机位）',
            desc: '可同时收塔身、崖壁与水池。<strong>唯一可行窗口：9/9 12:30–16:30</strong>（次选 9/8 11:45–15:45）。' +
              '正午前后光线偏硬：用崖壁阴影做塔身侧光，或反过来利用高反差拍剪影质感。' +
              '塔身竖构图用 24–35mm 贴近崖壁仰拍；塔加海湾环境用 16–24mm 从水池位置回望；塔顶角楼细节用 70–200mm 从沙滩远端压缩。',
            park: [33.52138, -117.76217],
            view: [33.52055, -117.76435]
          },
          {
            name: '公共阶梯入口（2713 Victoria Drive 旁）',
            park: [33.521808, -117.763391],
            view: [33.521808, -117.763391],
            desc: '长而陡的公共通道，返程是上坡。阶梯顶到阶梯底约 190 米陡阶，阶梯底到塔约 105 米岩石地形。',
            at: [33.52149, -117.76205]
          },
          {
            name: 'Dumond Drive 通道（携带器材推荐走这条）',
            park: [33.519777, -117.762649],
            view: [33.519777, -117.762649],
            desc: '应急车辆坡道加公共步道，<strong>坡度比 Victoria Drive 阶梯缓</strong>。',
            at: [33.51978, -117.76265]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免费；<strong>塔为私产且常年锁闭，只能外部拍摄</strong>',
          hours: '海滩 05:00–01:00',
          parking: '<strong>这里最大的难题。</strong>Victoria Drive / Dumond Drive 属狭窄住宅街道，合法公共车位极少且执法严格。主流做法是<strong>停在 Coast Highway 内侧</strong>再步行 5–10 分钟',
          walk: '合计约 <strong>700 米、15–25 分钟</strong>（视潮位与攀爬速度）',
        },
        notes: [
          '<strong>潮汐是生死问题，不只是构图问题</strong>：涌浪拍打岩角时严禁通过，被困在岩角内侧是这里最常见的事故。' +
            '建议提前约 1 小时到低潮点，并在潮位回升前离开。出发前用 NOAA Newport Beach 站（9410580）复核当日实况',
          '<strong>2026 新变数</strong>：加州海岸委员会已于 2026 年 8 月 20 日批准 South Laguna PCH 付费停车试点，' +
            '范围（Ruby Street 至 Vista del Sol 以南 500 英尺）<strong>覆盖 Victoria Beach 的 PCH 路段</strong>，08:00–19:00 限停 5 小时。' +
            '<strong>但截至 2026 年 8 月启用日期尚未公布，9/5–9/9 是否已生效未能确认</strong>——请现场读标识并预留预算',
          '经核查，Victoria Drive / Dumond Drive 一带<strong>并无正式的居民优先停车区</strong>，实际约束是通用限时/禁停标识加严格执法',
          '这是<strong>居民区</strong>，塔本身是私人住宅的一部分。请勿攀爬、翻越，或在住宅前长时间架设器材',
          '无洗手间、无淋浴、无救生员常驻',
          'Wikimedia Commons 上仅有一张该地点的可用图片，已全库检索多组关键词，不足 2–3 张'
        ],
        images: [
          { url: 'img/victoria-beach-pirate-tower-nov-2019-0458a0a7.jpg', cap: 'Victoria Beach 海盗塔 · Carl Glover / CC BY 2.0' },
          { url: 'img/cameo-cove-laguna-beach-ca-by-don-ramey-logan-5f777115.jpg', cap: '紧邻的 Cameo Cove 海岸地形 · Don Ramey Logan / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'treasure-island',
        n: 3,
        name: '宝藏岛海滩',
        en: 'Treasure Island Beach',
        score: 4,
        tldr: '紧邻 Montage 度假村但海滩与崖顶步道均为公共产权；比 Heisler 人少，北端有天然拱门。',
        tags: [{ t: '免费', c: 'free' }, { t: '无需预约', c: 'free' }, { t: '停车费率未确认', c: 'risk' }],
        highlights: [
          'Montage Laguna Beach 五星度假村下方的<strong>公共</strong>海滩，崖顶草坪步道加观景平台',
          '<strong>北端有天然拱门</strong>，南侧串联 Goff Cove、Middle Man Cove、Christmas Cove 三个小湾'
        ],
        photo: '风光 <strong>4/5</strong>，人像 <strong>4/5</strong>，建筑 <strong>3/5</strong>。' +
          '崖顶平台正西向，小湾与礁石构成前景；草坪加棕榈加海景，构图干净，<strong>比 Heisler 人少</strong>。' +
          'Montage 的加州工艺美术风格建筑可作背景，但不可入内拍摄。',
        shots: [
          {
            name: 'Lookout Point 崖顶观景点（主机位）',
            desc: '日落前 40 分钟到位，16–35mm 横构图收整段海岸线。小湾特写用 70–200mm 从崖顶压缩礁石与浪花层次。' +
              '慢门用 ND1000 配三脚架，1–4 秒，日落后蓝调 19:20–19:35。',
            park: [33.51580, -117.75635],
            view: [33.51428, -117.75817]
          },
          {
            name: '下沙滩石阶与北端天然拱门',
            desc: '<strong>低潮时才能靠近拱门</strong>，但<strong>比 Pirate Tower 宽容得多</strong>。' +
              '9/8–9/9 下午的低潮窗口（13:48 / 14:34）同样适用。',
            view: [33.51410, -117.75668]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免费，海滩与崖顶步道全公共',
          hours: '海滩 05:00–01:00',
          parking: 'City Lot 7（地面）/ Lot 8（车库），位于 30799–30801 Coast Highway。<strong>具体费率未能确认</strong>，建议用 Laguna Beach Parking App 现场查实时空位与价格',
          walk: '到崖顶观景点约 <strong>240 米 / 4 分钟</strong>；到沙滩石阶约 190 米 / 3 分钟，之后一段中等坡度石阶',
        },
        notes: [
          '度假村范围内（泳池、露台、餐厅）属私产，<strong>请勿架设器材</strong>',
          '冬季涌浪会把北端沙滩冲成纯礁石，9 月初通常有沙',
          '崖顶部分轮椅可达'
        ],
        images: [
          { url: 'img/north-end-of-treasure-island-beach-laguna-beach-with-natural-f383595a.jpg', cap: '北端天然拱门 · Beyond My Ken / CC BY-SA 4.0' },
          { url: 'img/view-from-atop-treasure-island-beach-63491a6f.jpg', cap: '崖顶俯瞰 · ZacharyCrespin / CC BY 4.0' },
          { url: 'img/goff-cove-laguna-beach-from-south-4b8a3932.jpg', cap: 'Goff Cove · Beyond My Ken / CC BY-SA 4.0' }
        ]
      }
    ]
  },

  /* ===================== ⑤ San Diego ===================== */
  {
    id: 'sandiego',
    name: '⑤ San Diego',
    navName: 'San Diego',
    color: '#c77dff',
    lead: 'La Jolla 三点我没有硬合并，因为<strong>时间维度不兼容</strong>：Gliderport 与 Salk 实测仅相距约 450 米，' +
      '但 Salk 只能参加上午的导览团，它在物理上属于这个簇，在时间上不属于任何傍晚动线。Scripps Pier 在南侧约 2.6 公里，需驾车。',
    callouts: [
      {
        type: 'warn',
        title: 'Salk Institute 已不能自由进入中庭 —— 且这五天只有 9/9 可行',
        html: '<p>现行政策：中庭与「生命之河」水景<strong>只能作为已注册导览团的一部分参观</strong>，' +
          '每周三、四、五 <strong>10:00 与 11:30</strong> 两场，<strong>$25/人，必须提前线上预订</strong>，' +
          '<strong>严禁三脚架</strong>。周末、节假日、私人活动期间全部闭园。</p>' +
          '<p>对照你的日期：9/5 周六、9/6 周日闭园，9/7 劳工节闭园，9/8 周二不在公众团日。' +
          '<strong>只有 9/9（周三）10:00 或 11:30 两场可选，请尽早预订。</strong></p>'
      },
      {
        type: 'warn',
        title: '📐 Scripps Pier 的「穿柱日落」9 月不会发生',
        html: '<p>著名的 <strong>Scrippshenge</strong>（落日正好嵌在桥墩之间）每年只出现两次，<strong>5 月初与 8 月初</strong>，' +
          '对应日落方位角约 289.5°。而 9/5–9/9 的方位角为 <strong>276.6°–278.3°，偏南约 11–13°</strong>。</p>' +
          '<p><strong>但这不代表这站没价值，只是换构图</strong>：太阳偏南意味着，站在栈桥<strong>北侧</strong>沙滩向南拍，' +
          '可以让落日落在栈桥的侧后方，用栈桥做画面右侧的剪影框架、桥下透光。' +
          '这其实比正中对齐更耐看，只是没有「网红同款」的奇观。</p>'
      },
      {
        type: 'good',
        title: '推荐傍晚连拍动线（以 9/9 为例，日落 19:03）',
        html: '<ul>' +
          '<li><strong>17:00–18:10</strong> Gliderport：滑翔伞逆光剪影、崖线大景</li>' +
          '<li><strong>18:10–18:25</strong> 驾车转场约 5 km</li>' +
          '<li><strong>18:25–19:15</strong> Scripps Pier 沙滩：黄金时刻加日落，栈桥剪影</li>' +
          '<li><strong>19:15–19:35</strong> 同上，蓝调长曝，ND 拉丝</li>' +
          '<li><strong>19:45–20:30</strong> Mount Soledad：城市灯光加残余晚霞（园区 22:00 关门）</li>' +
          '</ul><p>转场总里程约 12 km，全程无门票。若当天加 Salk，安排在上午 10:00 场，与傍晚动线不冲突。</p>'
      },
      {
        type: 'tip',
        title: '日落时刻与月相',
        html: '<p>9/5 <strong>19:08</strong> → 9/9 <strong>19:03</strong>。黄金时刻约 18:31–19:24。' +
          '月相：<strong>9/9 为新月（2.3%）</strong>，9/5–9/6 月亮在日落前即已落下，对长曝海景是有利条件。</p>'
      }
    ],
    spots: [
      {
        id: 'gliderport',
        n: 1,
        name: '托里松滑翔机场',
        en: 'Torrey Pines Gliderport',
        score: 4,
        tldr: '免费、停车免费、走两分钟就到崖顶，能拍「人在天上飞 + 海岸线」。9 月初日落时段大概率仍有伞在飞。',
        tags: [{ t: '完全免费', c: 'free' }, { t: '停车免费', c: 'free' }, { t: '活跃飞行场', c: 'risk' }],
        highlights: [
          '运营近百年的无动力飞行场，滑翔伞与悬挂滑翔翼常年在 <strong>350 英尺高的砂岩崖顶</strong>起降；' +
            '崖顶可俯瞰 Black\u2019s Beach 与整条 Torrey Pines 崖线',
          '这是拍「人在天上飞 + 海岸线」的独特机位，现场还有 Cliff Hanger Cafe 可以补给'
        ],
        photo: '风光 <strong>5/5</strong>，人像 <strong>4/5</strong>，建筑 2/5。' +
          '西向崖顶，砂岩崖壁在落日下呈金橙色，崖线纵深极佳。以滑翔伞与崖线为背景，画面辨识度高。' +
          '<strong>长焦在这里比在其他站更有用。</strong>',
        shots: [
          {
            name: '起飞崖沿（主机位）',
            desc: '<strong>伞加落日剪影</strong>：70–200mm 或 100–400mm，日落前 20 分钟，等伞飞过日面。' +
              '崖线大景用 16–35mm 从崖沿向北收 Torrey Pines 崖壁与 Black\u2019s Beach。' +
              '起飞瞬间用 24–70mm 连拍，站在起飞区侧后方，<strong>勿进入起飞区内</strong>。',
            park: [32.89004, -117.25057],
            view: [32.88990, -117.25130]
          },
          {
            name: '南侧 / 北侧土场（备用停车）',
            park: [32.889940, -117.247084],
            view: [32.889940, -117.247084],
            desc: '沙土面，公共开放免费。周末主场很快满位。',
            at: [32.89109, -117.25014]
          }
        ],
        access: {
          book: '不需要，观景免费',
          ticket: '<strong>免费。</strong>Tandem 体验若有兴趣：滑翔伞 $175–200 起，悬挂滑翔翼 $225 起，现金付款有折扣，先到先服务',
          hours: '官方 tandem 运营 <strong>09:00–17:00</strong>（看风况）。但飞行社说明更精确：秋冬 11:00–16:00 风况最佳，<strong>春夏 09:00 到 19:00 甚至更晚都常可飞</strong>——9 月初属夏季尾，日落时段大概率仍有伞在天上',
          parking: '<strong>完全免费</strong>，土质大场，但周末很快满位',
          walk: '<strong>150 米 / 2 分钟</strong>，平坦土路',
        },
        notes: [
          '<strong>这是运行中的飞行场</strong>：起飞区与降落区严禁进入，站位听从现场人员指挥，伞索与翼尖扫过范围很大',
          '<strong>Black\u2019s Beach 步道</strong>：Gliderport Trail 从停车场最南端下切，<strong>圣地亚哥市已在此立「DO NOT USE」警示牌</strong>（崖体不稳定、频发滞困与坠亡）；北侧的 Black\u2019s Beach Trail 更陡更险，碎石浮沙极易滑倒。' +
            '<strong>崖顶已经能拍到本站 90% 的价值，携器材下海滩的风险回报比不佳</strong>',
          '若一定要下，走 Gliderport Trail、穿抓地力好的鞋、避开涨潮，并注意 <strong>Black\u2019s Beach 是事实上的天体海滩</strong>，拍摄时请注意分寸与他人隐私',
          '崖体持续侵蚀，勿站崖沿悬空处、勿翻越围栏',
          '崖顶风大，广角镜头易进沙，换镜头请背风。无正式厕所（除咖啡馆）'
        ],
        images: [
          { url: 'img/torrey-pines-gliderport-1-26a3e3f2.jpg', cap: 'Torrey Pines Gliderport 崖顶 · Ncysea / CC BY-SA 4.0' },
          { url: 'img/torrey-pines-gliderport-b535a186.jpg', cap: 'Gliderport 滑翔伞 · Dmadeo / CC BY-SA 3.0' },
          { url: 'img/torrey-pines-gliderport-2-2019-04-16-45152331.jpg', cap: 'Gliderport 崖线 · FASTILY / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'salk',
        n: 2,
        name: '索尔克生物研究所',
        en: 'Salk Institute for Biological Studies',
        score: 5,
        tldr: '二十世纪现代建筑殿堂级作品，但门禁与摄影政策都已收紧：$25 导览团、禁三脚架、禁摆拍人像，且只有 9/9 上午可去。',
        tags: [{ t: '必须预约', c: 'book' }, { t: '$25/人', c: 'paid' }, { t: '仅 9/9 可行', c: 'risk' }, { t: '禁三脚架', c: 'risk' }, { t: '禁摆拍人像', c: 'risk' }],
        highlights: [
          'Louis Kahn 1965 年设计、脊髓灰质炎疫苗发明者 Jonas Salk 创立，<strong>公认的二十世纪现代建筑殿堂级作品</strong>。' +
            'Salk 给 Kahn 的要求很有名：造一个「连毕加索都愿意来的地方」，因为他相信环境的开阔会带来思想的开阔',
          '<strong>中庭原本的设计是一片花园</strong>。传说是墨西哥建筑师 Luis Barragán 到访后对 Kahn 说：' +
            '「不要种一棵树、一片叶子，把它做成一个石头的广场，天空就是立面。」Kahn 采纳了——' +
            '于是有了今天这片空无一物、只有石灰石与天空的中庭，也成了整栋建筑最强的一笔',
          '两栋对称的混凝土实验楼夹出中庭，<strong>一道仅数厘米宽的「生命之河」（River of Life）水槽笔直指向太平洋</strong>，' +
            '尽头是一道无限延伸的地平线。每年春分与秋分前后，落日会正对着这条水槽轴线沉入海面',
          '材质是这里的另一半故事：<strong>清水混凝土掺了火山灰呈暖粉调、模板木纹被刻意保留</strong>，' +
            '柚木窗框未做任何涂装、任其风化成银灰色，与石灰石地面构成三种质感的对照。这是建筑摄影的教科书级样本',
          '实验楼采用「服务层与被服务层」分离的结构：每层实验室上方都有一整层管道夹层，' +
            '让内部空间可以完全无柱、随科研需要自由改造——这个理念影响了此后半个世纪的实验室建筑'
        ],
        photo: '建筑 <strong>5/5</strong>，风光 <strong>2/5</strong>，<strong>人像 0/5（摆拍人像明令禁止，不要尝试）</strong>。' +
          '中庭朝西正对太平洋，日落时是最佳光线——<strong>但导览团只在上午 10:00/11:30，根本拍不到日落，这是本站最大的遗憾</strong>。',
        shots: [
          {
            name: '中庭中轴对称（必拍一张）',
            desc: '站水槽东端中线，<strong>16–24mm 竖构图，水槽引导线直指海平面</strong>。' +
              '<strong>建议选 10:00 场</strong>，太阳位置略低，墙面阴影更有层次。' +
              '无三脚架但上午光线足够手持；<strong>超广角机身水平必须手动找准，对称构图歪一度就废，建议开机内电子水平仪</strong>。',
            park: [32.89004, -117.25057],
            view: [32.88762, -117.24668]
          },
          {
            name: '混凝土与柚木材质细节',
            desc: '35–50mm，侧光下混凝土的木纹模板痕迹最清楚。建筑几何用 24–70mm，利用两侧塔楼的斜切墙面做重复韵律。' +
              '<strong>只能带一台手持相机，建议一支 16–35mm 变焦搞定全部。</strong>',
            view: [32.88762, -117.24668]
          }
        ],
        access: {
          book: '<strong>必须提前线上注册。</strong>公众团每周三、四、五 <strong>10:00 与 11:30</strong>，约 1 小时。私人团周一至周五 09:00–15:00，1–10 人 $250，须提前至少 10 个工作日申请',
          ticket: '<strong>$25 / 人</strong>',
          hours: '<strong>周末、节假日、私人活动期间全部闭园。</strong>本次行程<strong>只有 9/9（周三）可行</strong>',
          parking: '<strong>校园内无公共访客停车。</strong>最近的免费公共停车是 Torrey Pines Gliderport 土场',
          walk: 'Gliderport 到研究所直线约 450 米，<strong>实际步行绕行 600–700 米 / 8–10 分钟</strong>，但官方建议按 15–20 分钟预留',
        },
        notes: [
          '<strong>摄影政策严格。允许</strong>：仅导览团期间的休闲个人拍摄，<strong>限一台手持相机或手机</strong>，不得使用任何附加器材',
          '<strong>明令禁止</strong>：三脚架、自拍杆、灯光设备（含离机闪光灯）、道具、服装、' +
            '<strong>正式或摆拍或受委托的摄影摄像</strong>（婚纱、订婚、毕业、家庭写真、模特作品集、学生作业均在内）、' +
            '作品集摄影、实验室内部拍摄。不得为了拍照而拖延或打断团队行进',
          '<strong>专业与商业摄影一律禁止</strong>，除非事先获批并由 Salk 传播团队全程陪同，申请邮箱 press@salk.edu',
          '<strong>导览准时出发，迟到超过 10 分钟可能不被允许加入</strong>',
          '官方提示<strong>园区正在进行保护与修复施工，包括主中庭内部及周边</strong>，可能有围挡影响构图',
          '这是私有产权，Salk 保留对违规者拒绝或撤销进入许可的权利。<strong>请勿试图在非导览时段进入园区拍摄——这是近年政策收紧的直接原因</strong>',
          '中庭石灰石地面反光强，注意镜头耀斑'
        ],
        images: [
          { url: 'img/salk-institute-highsmith-a4d3f2ab.jpg', cap: 'Salk Institute 中庭与生命之河 · Carol M. Highsmith / 公有领域' },
          { url: 'img/salk-institute-for-biological-studies-and-a-seagull-dllu-9d48f0b7.jpg', cap: 'Salk Institute 中庭 · Daniel L. Lu / CC BY-SA 4.0' },
          { url: 'img/chairs-and-table-at-salk-institute-dllu-159def22.jpg', cap: 'Salk Institute 细部 · Daniel L. Lu / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'scripps-pier',
        n: 3,
        name: '斯克里普斯海洋研究所纪念栈桥',
        en: 'Ellen Browning Scripps Memorial Pier (UCSD)',
        score: 4,
        tldr: '栈桥对公众关闭，但 Birch Aquarium 的日落导览是唯一合法登桥途径，9 月起有场次，热门时段常售罄——想上桥请立刻订票。',
        tags: [{ t: '沙滩免费', c: 'free' }, { t: '停车免费', c: 'free' }, { t: '栈桥不可上', c: 'risk' }, { t: '9 月无穿柱日落', c: 'risk' }],
        highlights: [
          '<strong>1,084 英尺（330 米）长的全混凝土研究栈桥</strong>，1988 年建成，是全球最大的在用海洋研究栈桥之一',
          '自 1916 年起每日采集水温盐度，是<strong>全球最长连续海洋观测序列之一</strong>。紧邻 La Jolla 海底峡谷头部',
          '<strong>✅ 确认栈桥对公众关闭</strong>，仅限研究人员使用。唯一合法上桥途径是 Birch Aquarium 的 Sunset Pier Walk 导览（<strong>$40，须官网提前预订，季节性开放通常 9 月至次年 4 月</strong>，9 月初是否已开当季首场未能确认）'
        ],
        photo: '风光 <strong>4/5</strong>，人像 <strong>3.5/5</strong>，建筑 <strong>4/5</strong>。' +
          '桥墩纵深与剪影框架都很强，只是 9 月没有 Scrippshenge 的对齐奇观。',
        shots: [
          {
            name: '栈桥以北沙滩 150–250 米（日落主机位）',
            desc: '把栈桥整体收进画面，<strong>让落日落在桥体左后方，用栈桥做画面右侧的剪影框架、桥下透光</strong>。' +
              '24–70mm，18:35–19:10。慢门用 ND1000 配三脚架 1–8 秒，蓝调 19:10–19:35。' +
              '<strong>注意 9 月初日落时正逢涨潮，浪线推进快，留好器材与退路。</strong>',
            park: [32.86450, -117.25400],
            view: [32.86661, -117.25576]
          },
          {
            name: '栈桥正下方（桥墩纵深）',
            desc: '<strong>16–24mm 超广角贴近水面顺桥墩纵向拍</strong>，退潮时桥墩基座裸露层次最好。' +
              '9/8–9/9 下午低潮（13:48 / 14:34）适合拍桥墩基座，但那时段光线硬；' +
              '日落时是高潮（19:54 / 20:39 达 6.3–6.4 ft），浪会打到桥墩，适合慢门拍雾化水面。',
            view: [32.86661, -117.25576]
          }
        ],
        access: {
          book: '沙滩拍摄不需预约。<strong>唯一合法登桥途径是 Birch Aquarium 的 Sunset Scripps Pier Walk</strong>：90 分钟导览，会员 $30、公众 $40，9 岁以上可参加，须提前在 aquarium.ucsd.edu 在线订票，集合点在栈桥入口闸门（8650 Kennel Way）。该项目为季节性，通常 9 月至次年 4 月运行，当前列为「部分周六与周日，持续至 2026 年 12 月」——<strong>请立刻去查 9/5、9/6、9/8、9/9 是否有场次</strong>',
          ticket: '免费（沙滩公共）',
          hours: '沙滩全天；Kellogg Park 停车场<strong>全年 22:00–04:00 禁停</strong>',
          parking: '<strong>La Jolla Shores Drive 沿线有免费路边位</strong>（最省时，距沙滩约 250 米）；Kellogg Park 停车场车位更多但离栈桥远。<strong>两者均免费</strong>',
          walk: '<strong>建议走 La Jolla Shores Drive 路边方案</strong>：约 450 米 / 9 分钟。从 Kellogg Park 走要 1.0 公里 / 13–15 分钟全程软沙，带三脚架会明显吃力，<strong>能省约 20 分钟往返沙地步行</strong>',
        },
        notes: [
          '<strong>9 月圣地亚哥沿岸清晨与傍晚常有海雾，会直接吞掉落日</strong>，建议当天下午查一下海岸能见度再决定是否前往',
          '请勿试图攀爬栈桥或使用科研潜水楼梯——这是 UCSD 设施，有安保。桥面通行严格限于 UCSD 授权人员、科研潜水队伍与官方导览团',
          '从沙滩向栈桥拍摄<strong>没有任何新增限制</strong>：2026 年 5 月与 8 月的两次 Scrippshenge（落日恰好穿过桥墩）都有大批摄影者聚集在沙滩上，秩序正常',
          '桥墩区域涨潮时浪大且有回卷，注意脚下与器材',
          '这一带是 Matlahuayl 州立海洋保护区，<strong>禁止采集任何生物</strong>'
        ],
        images: [
          { url: 'img/scripps-institution-of-oceanography-pier-photo-don-ramey-log-b51a87cb.jpg', cap: 'Scripps Pier · Don Ramey Logan / CC BY-SA 3.0' },
          { url: 'img/scripps-pier-la-jolla-california-e4ebb281.jpg', cap: 'Scripps Pier 桥墩 · Mwinog2777 / CC BY-SA 4.0' },
          { url: 'img/la-jolla-shores-photo-don-ramey-logan-d2f38a1d.jpg', cap: 'La Jolla Shores · Don Ramey Logan / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'mount-soledad',
        n: 4,
        name: '索莱达山国家退伍军人纪念碑',
        en: 'Mount Soledad National Veterans Memorial',
        score: 3.5,
        tldr: '免费、停车免费、走一分钟就到。360° 视野，日落明显优于日出，日落后可立刻转拍市区灯光。',
        tags: [{ t: '完全免费', c: 'free' }, { t: '停车免费', c: 'free' }, { t: '22:00 锁门', c: 'risk' }],
        highlights: [
          '<strong>确认：原清单上的「Soledad Mountain」就是这里。</strong>圣地亚哥县最高海岸峰（约 822 英尺）',
          '核心是 29 英尺（含基座 43 英尺）混凝土十字架，周围 14 道黑色花岗岩墙嵌有<strong>逾 6,000 块退伍军人纪念牌</strong>，含 6 位美国总统与 27 位荣誉勋章获得者',
          '360° 视野：西向太平洋、南向市区天际线与科罗纳多大桥、东向山脉、北向 Del Mar，晴日可远眺墨西哥'
        ],
        photo: '风光 <strong>4/5</strong>，建筑 <strong>4/5</strong>，人像 <strong>2/5</strong>（环境偏庄严，且游客与旅游大巴多）。' +
          '<strong>日落明显优于日出</strong>：孤峰全向视野，西侧直面太平洋无遮挡，太阳直落海平面；' +
          '同时日落后可立即转拍南向市区灯光加蓝调天空的双层画面。日出方向朝内陆山脉，缺少水面，' +
          '且 9 月清晨海雾极常见容易整片糊掉。唯一支持日出的场景是想要最清透的远景能见度。',
        shots: [
          {
            name: '十字架基座（主机位）',
            desc: '<strong>日落前 30–45 分钟抵达</strong>抢车位与观景位置（山顶车位极少，旅游大巴常占）。' +
              '十字架框景用 16–24mm 仰拍，利用墙体开口切割晚霞；海岸大景用 24–70mm 西向，压低地平线突出天空。' +
              '<strong>城市天际线与科罗纳多大桥用 70–200mm 或 100–400mm 南向长焦压缩，日落后 20–40 分钟灯光与天空亮度平衡最佳。</strong>' +
              '花岗岩墙细节用 35–50mm。山顶开阔风大，三脚架建议挂重物。',
            park: [32.83957, -117.24508],
            view: [32.83982, -117.24469]
          }
        ],
        access: {
          book: '不需要',
          ticket: '<strong>永久免费</strong>（纪念碑由捐赠资助运营）',
          hours: '<strong>每日 07:00–22:00，大门 22:00 准时上锁</strong>，切勿把车留在场内',
          parking: '<strong>免费。</strong>纪念碑周边零散车位数个；下方五分钟步行处有一个大停车场；满位时可停 La Jolla Scenic Drive South 路边（免费）',
          walk: '近处车位到十字架基座约 <strong>40 米 / 1 分钟</strong>；大停车场约 5 分钟上坡',
        },
        notes: [
          '这是<strong>现役纪念场所</strong>，常有家属祭扫与仪式，架设器材请避让',
          '上山路陡窄弯多，<strong>自行车骑行者极多，慎超车</strong>',
          '山顶风大温差明显，日落后迅速降温。仅有移动厕所',
          '<strong>注意导航</strong>：OSM 上另有一个标为「Soledad Mountain」的峰点节点位于纪念碑以西约 730 米，与纪念碑不是同一位置，请使用本条给出的坐标'
        ],
        images: [
          { url: 'img/mount-soledad-i-4883143285-033bf0e7.jpg', cap: 'Mount Soledad 十字架 · Antonio Zugaldia / CC BY 2.0' },
          { url: 'img/mount-soledad-ii-4883143499-9ad992a6.jpg', cap: 'Mount Soledad 纪念墙 · Antonio Zugaldia / CC BY 2.0' },
          { url: 'img/mount-soledad-iii-4883747540-41aac087.jpg', cap: 'Mount Soledad 全景 · Antonio Zugaldia / CC BY 2.0' }
        ]
      },
      {
        id: 'sunset-cliffs',
        n: 5,
        name: '日落崖自然公园',
        en: 'Sunset Cliffs Natural Park, Point Loma',
        score: 5,
        tldr: '名字就写着答案——整个圣地亚哥最强的海岸日落机位，正西向无遮挡，全部免费。',
        tags: [{ t: '完全免费', c: 'free' }, { t: '停车免费', c: 'free' }, { t: '崖体活跃侵蚀', c: 'risk' }],
        highlights: [
          'Point Loma 半岛西侧约 68 英亩的砂岩崖线公园，<strong>崖顶步道几乎全程平坦</strong>，是本行程无障碍性最好的海岸步道之一',
          '<strong>地质是这里的主角</strong>：崖体是约 4,000 万年前始新世的 Bay Point 砂岩，质地松软。' +
            '太平洋的涌浪逐层掏空崖脚，形成海蚀凹槽，凹槽扩大成海蚀洞，洞顶塌陷成天窗，' +
            '两侧贯通则成海蚀拱门——<strong>你在这一公里崖线上能同时看到这个演化序列的每一个阶段</strong>，这在加州海岸并不多见',
          '正因为软，它也在快速消失。近年多次发生崖沿整块崩落，公园持续在后撤围栏。' +
            '<strong>你今天拍到的崖线形状，几十年后不会是这个样子</strong>',
          '低潮时从 Ladera St 石阶下到浪蚀平台，可进入成片的潮池区：寄居蟹、藤壶、海葵、海胆、海星。' +
            '这一带属 <strong>Matlahuayl 州立海洋保护区</strong>，生物密度高但禁止采集',
          '公园正西朝向、无任何遮挡——名字就写着答案，这是整个圣地亚哥最强的海岸日落机位'
        ],
        photo: '风光 <strong>5/5</strong>，人像 <strong>4/5</strong>，建筑 1/5。' +
          '本行程最强日落点。9 月初日落方位角 276.5–278.3°，正对崖线开口。' +
          '崖顶剪影人像极出片，但<strong>崖沿危险，务必退到安全距离，用长焦压缩制造「贴边」的视觉效果</strong>。',
        shots: [
          {
            name: '崖顶观景点（日落主机位）',
            desc: '16–35mm 横构图，前景用崖沿砂岩纹理，中景浪花，远景落日。' +
              '<strong>周末请至少在日落前 45 分钟到</strong>（9/5–9/6 约 18:20 前），Ladera St 土场是最热门的一个。' +
              '慢门用 ND1000 配三脚架 2–15 秒，蓝调 19:05–19:30。',
            park: [32.71791, -117.25489],
            view: [32.71765, -117.25567]
          },
          {
            name: 'Ladera St 下海滩石阶（潮池）',
            desc: '<strong>最好走、路径最清楚的下海通道。</strong>底部左转进潮池区。' +
              '9/8–9/9 下午低潮（13:48 / 14:34）可拍潮池，24–70mm 微距端或 100mm 微距。',
            view: [32.71862, -117.25547]
          },
          {
            name: 'The Arch 海蚀拱门',
            desc: '位于 Sunset Cliffs Boulevard 中段。低潮时可靠近细看，高潮时只能从崖顶俯拍。24–70mm 或 70–200mm 压缩。<strong>OpenStreetMap 无此地物，精确坐标未能确认，故地图上不设标记</strong>——请沿崖顶步道边走边找，从主机位向南步行数分钟即可看到。',
            at: [32.71957, -117.25688]
          },
          {
            name: '开顶海蚀洞（建议只远观）',
            desc: '位于 Sunset Cliffs Blvd 与 Monaco Street 路口附近，需从 Luscomb Point 一条陡而常打滑的小径下切。' +
              '<strong>需要负潮才安全，而本次行程的负潮全在凌晨，白天最低只有 9/9 的 1.27 ft，属「可看不可深入」。建议只从崖顶远观，不要下切。</strong>OpenStreetMap 无此地物，精确坐标未能确认，故地图上不设标记；大致位于 Sunset Cliffs Blvd 与 Monaco Street 路口西侧崖沿。',
            at: [32.72446, -117.25753]
          }
        ],
        access: {
          book: '不需要',
          ticket: '<strong>免费</strong>',
          hours: '公园全天；注意车辆宵禁',
          parking: '<strong>全部免费。</strong>Ladera Street 土场是园区南端主场，<strong>最热门、最先满</strong>；Sunset Cliffs Blvd 沿线有免费路边位',
          walk: 'Ladera St 土场到崖顶观景点约 <strong>75 米 / 1 分钟</strong>；到下海石阶约 100 米 / 2 分钟。崖顶步道几乎全程平坦，是本行程无障碍性最好的海岸步道之一',
        },
        notes: [
          '<strong>车辆宵禁</strong>：Ladera Street 场全年 23:00–04:00 禁停；其余 4 个场全年 02:00–04:00 禁停。这是车辆限制而非公园关闭，但超时会被开罚单',
          '<strong>砂岩崖体处于持续活跃侵蚀状态，崖沿会在无预警下整块崩落。</strong>围起来的区域请不要翻越，那不是装饰',
          '三大风险：崖体崩塌与落石（不要站在崖沿悬空段）、<strong>疯狗浪</strong>（即便低潮浪蚀平台也会突然被大浪扫过）、湿滑藻类与浮石',
          '<strong>架三脚架时至少离崖沿 2 米</strong>，用长焦替代「再往前一步」',
          '近年因违法跳崖导致多起重伤，<strong>跳崖是明令禁止行为</strong>',
          '日落后崖顶迅速变黑且无照明，<strong>请带头灯</strong>。周边住宅街可停但请勿堵车道',
          '9 月海雾可能在傍晚快速涌入，直接吞掉落日。潮池区禁止采集任何生物'
        ],
        images: [
          { url: 'img/sunset-cliffs-san-diego-2013-e555473c.jpg', cap: 'Sunset Cliffs 日落 · Tuxyso / CC BY-SA 3.0' },
          { url: 'img/people-at-sunset-cliffs-natural-park-san-diego-2013-29976f87.jpg', cap: 'Sunset Cliffs 崖顶 · Tuxyso / CC BY-SA 3.0' },
          { url: 'img/azure-vista-panoramic-f67d64c8.jpg', cap: 'Point Loma 崖线全景 · RightCowLeftCoast / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'uss-midway',
        n: 6,
        name: '中途岛号航母博物馆',
        en: 'USS Midway Museum',
        score: 4,
        tldr: '巨型工业结构 + 军事史，甲板机群质感极强。17:00 关门拍不到日落，但馆外 Tuna Harbor Park 可以。',
        tags: [{ t: '$39 线上', c: 'paid' }, { t: '停车 $20/6hr', c: 'paid' }, { t: '17:00 关门', c: 'risk' }],
        highlights: [
          '<strong>服役 47 年（1945–1992），是 20 世纪服役时间最长的美国航母</strong>。' +
            '下水时是全球最大的军舰，且大到无法通过巴拿马运河——这在当时是个新问题',
          '它的履历几乎是一部冷战史：1947 年从甲板上发射了美国第一枚缴获的 V-2 火箭，' +
            '越战期间参与作战，1975 年西贡撤离时执行「常风行动」，1991 年在海湾战争中指挥空袭。' +
            '<strong>约 20 万名水兵曾在这艘船上服役</strong>',
          '<strong>飞行甲板上陈列近 30 架复原舰载机</strong>，从二战螺旋桨机到 F-14 雄猫；' +
            '舰内可参观机库、舰桥、住舱、伙房、禁闭室与弹射器，动线覆盖约 60 个展点',
          '相邻的 Tuna Harbor Park 有 25 英尺高的 <strong>《无条件投降》（Unconditional Surrender）雕塑</strong>，' +
            '取材自 1945 年对日战争胜利日当天时代广场的那张著名照片，是本站的第二个主机位'
        ],
        photo: '建筑 <strong>5/5</strong>，人像 <strong>4/5</strong>，风光 <strong>3/5</strong>。' +
          '巨型工业结构加军事史，甲板机群与舰岛的金属质感极强。' +
          '《无条件投降》雕塑是全圣地亚哥最高人气打卡点之一。',
        shots: [
          {
            name: '馆内甲板（上午 10:00–12:30）',
            desc: '开门 10:00 即入，<strong>上午甲板侧光最好，正午顶光最差</strong>。' +
              '甲板机群用 16–35mm 贴近机鼻低角度仰拍压出机身线条；舰岛与雷达桅用 70–200mm 从甲板尾部压缩。' +
              '舰内机库与住舱光线极暗，需大光圈定焦加高感，三脚架在人流密集处不便展开。',
            park: [32.71430, -117.17490],
            view: [32.71380, -117.17520]
          },
          {
            name: 'Tuna Harbor Park（推荐日落时段）',
            desc: '西北向拍舰体全景剪影，<strong>19:00–19:30 蓝调时舰体轮廓灯亮起</strong>，24–70mm。' +
              '《无条件投降》雕塑用 35–85mm 低角度仰拍让雕塑压过天空；日落后与 Midway 同框可用 16–24mm。' +
              '<strong>全天最佳组合：上午馆内，傍晚 18:30–19:40 馆外。</strong>',
            view: [32.71342, -117.17331]
          }
        ],
        access: {
          book: '<strong>非必需但强烈建议</strong>：官网预订每张便宜 $2 并可跳过入场排队。现役军人优惠必须现场票亭办理',
          ticket: '成人 <strong>$39 线上 / $41 现场</strong>；青少年 $29/$31；退伍军人 $26；<strong>现役与后备役免费</strong>（仅现场票亭）；3 岁及以下免费；EBT 持卡人 $5/人',
          hours: '<strong>每日 10:00–17:00，最后入场 16:00</strong>。建议游览 3–5 小时，<strong>可当日再入场</strong>',
          parking: 'Navy Pier 场（入口前）<strong>4–9 月 $20 / 6 小时内</strong>，超 6 小时 $25。约 300 车位，<strong>夏季与周末上午 11 点前即满</strong>。更省：Tuna Harbor 场步行 5 分钟约 $5/2 小时；<strong>最省</strong>：停免费换乘中心加有轨电车 $2.50 到 Santa Fe Depot 再步行 10–15 分钟',
          walk: '停车场到入口 <strong>80 米 / 1 分钟</strong>；博物馆到 Tuna Harbor Park 约 190 米 / 3 分钟，全程平坦铺装',
        },
        notes: [
          '<strong>Navy Pier 正在进行桥墩加固施工</strong>，博物馆周边有围挡区域',
          '甲板全程无遮阳，9 月正午晒；舰内温差大',
          '甲板金属地面对三脚架不友好（易滑且人流密集），建议小型独脚架或手持。部分舰内区域禁用闪光灯',
          '雕塑周边全天有游客排队合影，干净构图需早或晚',
          'Harbor Drive 路边计时表限停 2–3 小时，<strong>不够看完全馆</strong>'
        ],
        images: [
          { url: 'img/san-diego-california-usa-uss-midway-museum-2012-5365-da29c3a8.jpg', cap: 'USS Midway 舰体 · Dietmar Rabich / CC BY-SA 4.0' },
          { url: 'img/uss-midway-museum-2022-26-fbf177ff.jpg', cap: 'USS Midway 飞行甲板 · Issac I Navarro / CC BY 4.0' },
          { url: 'img/the-unconditional-surrender-statue-ff99b7a5.jpg', cap: '《无条件投降》雕塑 · Seankimstyle / CC BY-SA 4.0' }
        ]
      }
    ]
  },

  /* ===================== ⑥ 沙漠支线 ===================== */
  {
    id: 'desert',
    name: '⑥ Salton Sea / Salvation Mountain 沙漠支线',
    navName: '沙漠支线',
    color: '#e0743c',
    lead: '这两个点在地理上既不属于 LA 也不属于 San Diego，位于 San Diego 东北方内陆。' +
      '题材独特性很高，但与「经 I-5 北返」的路线完全反向，且 9 月的气候会把可拍窗口压缩到很窄。',
    callouts: [
      {
        type: 'warn',
        title: '时间代价：整整一个白天，且是净增的',
        html: '<p>从 San Diego 往返合计约 <strong>330 英里 / 7–8.5 小时</strong>（单程 2h30–3h00，现场 2–2.5 小时）。' +
          'Salton Sea 在 San Diego 东北方内陆，而 I-5 从 San Diego 向西北出发——它不在任何顺路位置上。' +
          '从 LA 切入是 3h00–3h30 单程，代价相当。</p>'
      },
      {
        type: 'warn',
        title: '两个最佳光线窗口相隔 12 小时',
        html: '<p>Salvation Mountain 主立面朝西北偏西，<strong>清晨顺侧光最好</strong>；' +
          'Bombay Beach 是<strong>西向机位、日落最好</strong>。两者相距约 30 分钟车程，' +
          '但中间夹着 8 小时 38–41°C 的高温死区。要两个都拍好，必须在 Niland / Brawley 附近住一晚。</p>'
      },
      {
        type: 'info',
        title: '2026 年 9 月 5–9 日实际预报（9/3 更新）',
        html: '<p>比原先预计的<strong>凉快不少</strong>：9/5、9/6 高温约 <strong>32°C</strong>，9/7 起升至 <strong>38°C</strong> 左右，全程不到 40°C，' +
          '且<strong>当前没有任何高温预警</strong>（上一次极端高温预警已于 8 月 29 日到期）。清晨仍是最佳拍摄时段，但已不再是安全上的硬性约束。</p>' +
          '<p>代价是湿度：飓风 Marie 的水汽自 9/5 起移入，<strong>湿度显著偏高、每天有雷暴机会</strong>。' +
          '研究显示湿度会放大硫化氢臭味体感——这几天会是一个「没那么热、但明显更臭」的 Salton Sea。' +
          '雷暴还带来暴洪（土路瞬间不可通行，Slab City 之后尤其要谨慎）与沙尘暴（毁能见度和镜头）两个风险。' +
          '反过来，<strong>雷暴云层对沙漠段的光线其实是加分项</strong>。</p>'
      },
      {
        type: 'good',
        title: '更好的时机',
        html: '<p>若改为独立专程安排在 <strong>11 月至次年 3 月</strong>：白天 21–26°C（官方推荐季），' +
          '硫化氢排放全年最低，Sonny Bono 保护区正值观鸟旺季（10 万+ 候鸟），且该保护区的游客中心夏季（5/6 月至 10 月）闭馆、冬季才开放。' +
          '同样两个点，冬季的摄影回报明显高于 9 月。</p>'
      }
    ],
    spots: [
      {
        id: 'salton-sea',
        n: 1,
        name: '索尔顿湖 / 孟买海滩',
        en: 'Salton Sea · Bombay Beach',
        score: 4,
        tldr: '末日感废墟小镇加常设装置艺术，题材独特性满分；但硫化氢臭味在 9 月是大概率事件。',
        tags: [
          { t: '免费', c: 'free' }, { t: '无需预约', c: 'free' },
          { t: '硫化氢臭味', c: 'risk' }, { t: '设施多已关闭', c: 'risk' }
        ],
        highlights: [
          '<strong>Bombay Beach</strong>：1950–60 年代度假胜地因湖水盐化崩塌形成的废墟小镇。Bombay Beach Biennale 自 2015 年起把整镇变成开放式装置艺术场域，作品永久留置',
          '核心常设装置：<strong>Bombay Beach Drive-In</strong>（原子时代招牌加一排废弃汽车对着货柜「银幕」，有常驻放映机）、Opera House、The Hermitage Museum、堤外的秋千，以及大量「末日片场」式街区',
          '<strong>Ski Inn</strong>：西半球海拔最低的酒吧，墙面贴满数万张签名美钞。Hermitage 等室内装置的钥匙寄放在吧台后',
          '<strong>Sonny Bono 国家野生动物保护区</strong>：太平洋迁徙路线关键湿地，设 2 座翻新摄影掩体、观测塔与 Rock Hill Trail（2 英里往返）'
        ],
        photo: '人文 <strong>4.5/5</strong>，风光 <strong>4/5</strong>，人像 <strong>4/5</strong>。' +
          '龟裂湖床、鱼骨滩与废墟叠加当代装置，人文密度极高，但没有传统意义上的「美景」，' +
          '且背景杂乱，需要耐心找干净构图。综合分被 9 月的执行难度严重拉低。',
        shots: [
          {
            name: '堤顶俯瞰废墟带（主机位）',
            desc: 'Bombay Beach 西缘防洪堤顶部任意一段，向西正对落日与湖面。' +
              '最佳时间为<strong>日落前 40 分钟至日落</strong>（日落 19:01）。镜头 24–70mm。',
            park: [33.35083, -115.72972],
            view: [33.35100, -115.73300]
          },
          {
            name: 'Drive-In 装置',
            desc: '越堤向西数百米。日落前 1 小时暖光打在锈车上，或日出后逆光剪影（日出 06:20）。35mm 环境叙事 / 85mm 局部。',
            view: [33.35100, -115.73300]
          },
          {
            name: 'Salton Sea State Recreation Area（Varner Harbor）',
            park: [33.502653, -115.915200],
            view: [33.502653, -115.915200],
            desc: '湖西北岸游客中心一带。<strong>州立游憩区本身开放</strong>，日间使用区与营地 24 小时开放，需缴州立公园日间停车费（2026 年具体金额未能确认）。<strong>注意 Varner Harbor 对船只无限期封闭</strong>，因水位下降已无任何机动船下水点，且园区内任何时候都禁止车辆驶上沙滩——但这不影响岸上取景。',
            at: [33.47417, -115.88900]
          },
          {
            name: 'Sonny Bono NWR · Rock Hill Trail',
            park: [33.176795, -115.619322],
            view: [33.183651, -115.623324],
            desc: '从 906 W Sinclair Rd, Calipatria 出发，2 英里往返，登顶可俯瞰湖景。' +
              '<strong>步道全年日出至日落开放，但游客中心 5/6 月至 10 月夏季闭馆，9 月上旬前往时会关门</strong>（总部区的抽水马桶与饮水机全年可用）。' +
              '日出后是 9 月最舒适的徒步窗口。注意 9 月并非观鸟季，主力候鸟群在 10 月至次年 5 月。' +
              'Unit 1（Bannister Rd 与 Vendel Rd 路口）另有 Hardenberger Trail 与两个新翻修的摄影掩体及观景平台。',
            at: [33.15000, -115.73333]
          }
        ],
        access: {
          book: '三处均无需预约',
          ticket: 'Bombay Beach 免费；Sonny Bono NWR 完全免费；Salton Sea SRA 需缴州立公园日间停车费',
          hours: 'Bombay Beach 无门禁；Ski Inn 营业时间不定，建议先电话',
          parking: 'Bombay Beach 停镇内公共街道免费，<strong>务必合法停放、勿堵民宅车道</strong>。镇内为破损铺装与土路，普通轿车慢行可进',
          walk: '镇中心停车翻堤到装置区约 <strong>5–15 分钟</strong>；Rock Hill Trail 2 英里往返。建议停留 45 分钟至 2 小时',
        },
        notes: [
          '<strong>不要下水、不要碰湖水。</strong>高盐、高硒、农业径流富集，岸边常有大面积死鱼与鱼骨堆积',
          '岸边「沙滩」实由破碎鱼骨与藤壶壳构成，<strong>必须穿包脚硬底鞋</strong>，不要穿凉鞋或人字拖',
          '湖床边缘有软泥陷坑，看似干燥的地表可能塌陷，不要单独远离硬地',
          '<strong>硫化氢超标是常态</strong>：SSET 社区监测站仅 2024 年 5–9 月就录得 243 小时超过加州 30 ppb 标准，且夏季最频繁。症状包括眼睛刺痛、头痛、恶心、疲倦、头晕',
          'Bombay Beach 是<strong>有人居住的社区</strong>，装置艺术与居民私宅外观难以区分。任何在私有地块上的东西除非明确标示公开，一律视为不可进入；不要拍摄居民',
          '<strong>设施关闭</strong>：Bombay Beach 营地已关闭；Varner Harbor 船只入水通道无限期关闭；因水位下降目前已知没有任何机动船下水点；禁止车辆驶入 SRA 沙滩',
          '各装置的精确坐标不提供——湖岸线持续退缩，秋千等装置已多次搬迁，Biennale 作品每年增删锈蚀。请导航到镇中心后步行翻堤自行寻找',
          '手机信号不可靠，务必离线下载地图'
        ],
        images: [
          { url: 'img/the-swing-at-bombay-beach-856e72f6.jpg', cap: 'Bombay Beach 的秋千装置 · Wikimedia Commons' },
          { url: 'img/bombay-beach-at-sunset-flickr-ruggybearla-cf09824f.jpg', cap: 'Bombay Beach 日落 · RuggyBearLA via Flickr / Wikimedia Commons' },
          { url: 'img/old-salton-sea-beach-marina-2013-d55de5c5.jpg', cap: 'Salton Sea 湖岸废墟 · Wikimedia Commons' }
        ]
      },
      {
        id: 'salvation-mountain',
        n: 2,
        name: '救赎山',
        en: 'Salvation Mountain, Niland',
        score: 4.5,
        tldr: '全免费、日出到日落全年开放的民间艺术地标；人像与人文性价比极高。黄砖路是唯一指定通行路径，务必踩着它走。',
        tags: [
          { t: '完全免费', c: 'free' }, { t: '无需预约', c: 'free' },
          { t: '全年日出至日落', c: 'free' }, { t: '9/7 起 38°C', c: 'risk' }
        ],
        highlights: [
          '<strong>Leonard Knight 用 28 年、约 10 万加仑废弃乳胶漆</strong>，混合 adobe 黏土与麦秸，一个人堆出的民间艺术纪念碑。' +
            '约 3 层楼高、100 英尺宽，核心标语是 “GOD IS LOVE”。2026 年恰逢建成 <strong>40 周年</strong>',
          '它的起点其实是一次失败：Knight 原本想造一个写着这句话的<strong>热气球</strong>，做了十几年都没能升空。' +
            '1984 年他放弃气球，改用水泥在这片荒地上堆了第一座小山——结果因结构不稳在 1989 年<strong>整个塌掉</strong>。' +
            '他把它推平，改用当地黏土加麦秸重来一遍，才有了今天这座',
          '1994 年 Imperial County 曾以「有毒废弃物堆」为由准备铲平它。' +
            '土壤检测送到实验室后结果是安全的，加上舆论声援，拆除计划取消。' +
            '<strong>2002 年它被列入国会记录，认定为「国家级民间艺术珍宝」</strong>',
          'Knight 在此独居生活了近 30 年——没有电、没有自来水，住在旁边一辆卡车里，全部收入靠捐款。' +
            '他 2011 年因健康问题离开，2014 年去世，现在由一个非营利组织维护',
          '旁边是他最后的作品 “Museum”：以轮胎作树干、黏土球作花朵的树屋式结构，' +
            '<strong>目前已坍塌、禁止进入</strong>，只能从外部拍摄。周围还散落着数辆彩绘卡车'
        ],
        photo: '人文 <strong>5/5</strong>，人像 <strong>5/5</strong>，风光 <strong>2/5</strong>。' +
          '高饱和色块加标语文字是极强的人像背景板，这是本次行程里人文与人像性价比最高的单点。' +
          '扣分项是周边为极平坦无特征的 Imperial Valley 荒地，没有地形层次可用。',
        shots: [
          {
            name: '正面全景（主机位）',
            desc: '主体西南侧、Beal Rd 路面上，退后约 40–60 米可用 24mm 收全。' +
              '<strong>务必清晨拍</strong>：日出 06:20，最佳窗口 06:50–08:00，此时西北偏西的主立面是柔和顺侧光且几乎无人。' +
              '正午顶光会把色块拍得死平，下午整个立面在阴影里。镜头 24–35mm 全景 / 85mm 压缩局部色块。',
            park: [33.25417, -115.47250],
            view: [33.25390, -115.47280]
          },
          {
            name: 'Museum 结构与侧面',
            desc: '主体东南侧，紧邻本体。Museum 已坍塌禁止进入，只能外部拍摄。上午同一时段，16–24mm 贴近拍纹理。',
            view: [33.25417, -115.47250]
          },
          {
            name: 'Slab City 入口牌坊',
            view: [33.257951, -115.462841],
            desc: '距救赎山约 1.2 公里。Beal Road 铺装路面延伸至救赎山，之后转为土石路，低底盘车辆需谨慎。白天沿主路行车观光问题不大，但不要擅入营地、不要拍摄居民，日落后不建议逗留。附近的 <strong>East Jesus 装置艺术园区 10:00–17:00 开放</strong>，免费、接受现金捐赠。<strong>区内无自来水、无电力、无垃圾清运</strong>，请自备每人每天至少 5 加仑水，最近加油站在约 4 英里外的 Niland。',
            at: [33.25750, -115.46250]
          }
        ],
        access: {
          book: '不需要',
          ticket: '完全免费。无门票、无纪念品店，现场工作人员不主动索要捐款',
          hours: '日出至日落，全年 365 天',
          parking: '免费土地面，普通轿车可到（Beal Rd 末段非铺装，注意松沙，<strong>不需要四驱</strong>）。官方要求距彩绘与展示区至少 10 英尺',
          walk: '停车到机位 <strong>不到 1 分钟</strong>；建议停留 30–45 分钟',
        },
        notes: [
          '<strong>黄砖路（Yellow Brick Road）是志愿者指定的唯一通行路径，不是封闭区</strong>：官方明确要求参观者严格沿着地面画出的黄砖路行走，以免踩坏脆弱的黏土结构。<strong>请踩着它走，不要走在它之外的任何山体表面</strong>',
          '<strong>Museum 结构已坍塌，禁止进入</strong>，官方说明只能从外部拍摄',
          '除黄砖路外，山体所有其他部分严禁攀爬',
          '捐款鼓励但非强制，<strong>只投现场捐款箱或线上捐，不要把现金交给现场任何人</strong>',
          '此处没有加油站、餐饮与可靠手机信号，<strong>最后一次加油请在 Niland 或 Calipatria 完成</strong>，并离线下载地图',
          '<strong>气温：9/5、9/6 约 32°C，9/7 起升到 38°C 左右，全程无高温预警</strong>（上一次极端高温预警已于 8/29 到期）。清晨仍是最佳拍摄时段，但不再是安全上的硬性约束。带每人至少 4L 水、宽檐帽与高倍防晒。场地限速 5 mph',
          '土地所有权存在风险：机构正募集 50 万美元购地基金以防被工业开发拆除，年运营预算仅约 6.5 万美元'
        ],
        images: [
          { url: 'img/salvation-mountain-niland-ca-2942c5a2.jpg', cap: 'Salvation Mountain 正面全貌 · Wikimedia Commons' },
          { url: 'img/salvation-mountain-flickr-gregthebusker-d31bfdc3.jpg', cap: 'Salvation Mountain · GregTheBusker via Flickr / Wikimedia Commons' },
          { url: 'img/salvation-mountain-folk-art-726b41a4.jpg', cap: 'Salvation Mountain 色块与标语细节 · Wikimedia Commons' }
        ]
      }
    ]
  }
];
