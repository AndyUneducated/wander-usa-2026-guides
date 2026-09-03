/* =========================================================================
   REGIONS —— 分区景点数据
   数据来源：2026-09 联网查证。开放时间 / 票价 / 封闭状态会变动，出发前需复查。
   中央海岸与 LA 两区仍在等待研究返回，当前为样例条目。
   ========================================================================= */

var REGIONS = [
  {
    id: 'central-coast',
    name: '① San Jose → Santa Barbara 沿途',
    navName: '中央海岸',
    color: '#4da3ff',
    lead: 'Highway 1 中央海岸段。这一段的核心是「路本身」，机位大多是公路观景台（turnout），停车即拍，时间成本低但极依赖光线和路况。',
    callouts: [{
      type: 'warn',
      title: '待研究组确认：Big Sur 1 号公路通行状态',
      html: '<p>是否能从 Monterey 连续开到 San Simeon，直接决定第一天走海岸线还是绕 US-101。若有单向放行管制路段，还需按固定放行时刻安排出发时间。</p>'
    }],
    spots: [
      {
        id: 'bixby',
        n: 1,
        name: 'Bixby Creek 大桥',
        en: 'Bixby Creek Bridge, Big Sur',
        tldr: '公路边停车即拍的地标拱桥，下午到日落光线最好，停车位少。',
        score: 4.5,
        tags: [{ t: '免费', c: 'free' }, { t: '无需预约', c: 'free' }, { t: '停车位少', c: 'risk' }],
        highlights: [
          '1932 年建成的单跨混凝土拱桥，Big Sur 最具辨识度的地标',
          '桥北侧观景台可同时收进桥身、海崖与太平洋，是这条路上信息量最大的一个机位'
        ],
        photo: '风光 <strong>5/5</strong>，人像 <strong>3/5</strong>。桥体线条干净，逆光和侧光都成立；<strong>下午到日落</strong>光线打在桥的西立面最好。缺点是机位单一、游客多，构图容易撞图。',
        shots: [
          {
            name: '桥北观景台（主机位）',
            desc: '桥北端西侧的正式 turnout，可俯拍整座桥。建议 24–70mm；想压缩桥与远山用 70–200mm。人多时往北再走 100 米有更干净的角度。',
            park: [36.37327, -121.90180],
            view: [36.37380, -121.90230]
          },
          {
            name: 'Castle Rock 高点',
            desc: '从北侧观景台往内陆的土路步行上坡约 5 分钟，可拍到桥 + 海岸线的高角度全景。土路无护栏，注意脚下。',
            view: [36.37500, -121.90050]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免费',
          hours: '全天开放',
          parking: '桥两端各有免费 turnout，合计约 20 个车位，旺季常满；<strong>切勿停在车道内</strong>，此处事故多发',
          walk: '停车后 0–2 分钟即到主机位；Castle Rock 高点约 5–8 分钟上坡',
          drone: 'Big Sur 沿线多为州立公园管辖，<strong>禁飞</strong>'
        },
        notes: [
          '桥面人行道很窄且紧邻车道，站上桥拍照要格外注意来车',
          '此处常年有海雾，清晨可能完全看不见桥'
        ],
        images: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bixby_Creek_Bridge%2C_California%2C_USA_-_May_2013.jpg/1600px-Bixby_Creek_Bridge%2C_California%2C_USA_-_May_2013.jpg',
            cap: 'Bixby Creek Bridge 北侧观景台经典角度 · Wikimedia Commons'
          }
        ]
      }
    ]
  },
  {
    id: 'la',
    name: '③ Los Angeles',
    navName: '洛杉矶',
    color: '#ff8a3d',
    lead: '本次行程景点最密集的一区，建筑人文与海岸日落都集中在这里。难点全在交通和停车，而不是景点本身。',
    spots: [
      {
        id: 'griffith',
        n: 1,
        name: '格里菲斯天文台',
        en: 'Griffith Observatory',
        tldr: '建筑 + 城市全景双主题，日落前一小时到位；周一闭馆，停车收费且极堵。',
        score: 5,
        tags: [{ t: '入场免费', c: 'free' }, { t: '停车收费', c: 'paid' }, { t: '周一闭馆', c: 'risk' }],
        highlights: [
          '装饰艺术风格穹顶建筑本身即是主体，同时是俯瞰洛杉矶盆地与远眺 Hollywood Sign 的最佳公共平台',
          '日落后城市灯光亮起的「蓝调时刻」是这里价值最高的 20 分钟'
        ],
        photo: '建筑 <strong>5/5</strong>，风光 <strong>4.5/5</strong>，人像 <strong>4/5</strong>。建筑外立面朝向使其在<strong>日落前一小时</strong>被暖光正打；城市全景则要等到日落后 20–35 分钟。',
        shots: [
          {
            name: '西侧草坪（拍建筑 + 日落）',
            desc: '天文台西南侧草坡，可把穹顶放在画面右侧、夕阳留在左侧。35–85mm 适合建筑加人像。',
            view: [34.11835, -118.30060]
          },
          {
            name: '天台东南角（拍市区夜景）',
            desc: '登上天文台屋顶平台东南角，正对 Downtown LA 天际线。需 70–200mm 压缩，脚架在人多时不易架设。',
            view: [34.11862, -118.30036]
          }
        ],
        access: {
          book: '入场不需预约',
          ticket: '建筑与展厅免费；天象厅另行收费',
          hours: '<strong>周一闭馆</strong>；其余日通常至 22:00',
          parking: '园区路边与停车场均已改为收费；日落前后一位难求',
          walk: '停车场到建筑 2–10 分钟，视停到多远',
          drone: '市政公园范围内<strong>禁飞</strong>'
        },
        notes: ['日落时段上山单行道会严重堵塞，务必提前 90 分钟到'],
        images: [
          {
            url: 'assets/img/griffith-observatory-2006-3793f49e.jpg',
            cap: 'Griffith Observatory 建筑全貌 · Wikimedia Commons'
          }
        ]
      },
      {
        id: 'smp',
        n: 2,
        name: '圣莫尼卡栈桥（含 Pacific Park、West Coaster、圣莫尼卡海滩）',
        en: 'Santa Monica Pier · Pacific Park · West Coaster · Santa Monica Beach',
        tldr: '摩天轮 + 栈桥的南加符号，价值集中在日落后蓝调时刻；白天较平淡。',
        score: 4,
        tags: [{ t: '入场免费', c: 'free' }, { t: '游乐设施单独收费', c: 'paid' }, { t: '停车贵', c: 'paid' }],
        highlights: [
          '66 号公路终点标志、摩天轮与过山车构成的经典南加海岸符号',
          'Pacific Park 与 West Coaster 都在栈桥上，属同一地点，已合并为一条'
        ],
        photo: '风光 <strong>4/5</strong>，人像 <strong>4.5/5</strong>。<strong>日落后蓝调时刻</strong>摩天轮灯光与残霞同框是这里的最高价值画面，白天较平淡。',
        shots: [
          {
            name: '栈桥北侧沙滩（拍摩天轮侧影）',
            desc: '从栈桥北面沙滩回望，可把整座栈桥与摩天轮压在夕阳里。24–70mm；退到水线附近可拍到湿沙倒影。',
            park: [34.00990, -118.49700],
            view: [34.01120, -118.49820]
          }
        ],
        access: {
          book: '不需要',
          ticket: '栈桥免费；游乐设施单项或通票另购',
          hours: '栈桥全天；游乐园按季节',
          parking: 'Pier Deck 与 1550 PCH 停车场，节假日封顶价偏高',
          walk: '停车后 3–8 分钟到主要机位',
          drone: '<strong>禁飞</strong>'
        },
        notes: ['劳工节长周末人流极大，停车场可能提前满位'],
        images: [
          {
            url: 'assets/img/santa-monica-pier-entrance-evening-11993ea2.jpg',
            cap: 'Santa Monica Pier 入口夜景 · Wikimedia Commons'
          }
        ]
      }
    ]
  },

  {
    id: 'desert',
    name: '⑥ 沙漠支线（Salton Sea / Salvation Mountain）',
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
        title: '2026 年 9 月 5–9 日实际预报',
        html: '<p>高温 <strong>35–41°C</strong>，低于 9 月常态（月均高温 39°C），但伴随西南季风水汽入侵，' +
          '<strong>湿度显著偏高</strong>，每天有 10–30% 雷暴概率。' +
          '研究显示湿度会放大硫化氢臭味体感——今年这几天会是一个「没那么热、但明显更臭」的 Salton Sea。' +
          '雷暴还带来暴洪（土路瞬间不可通行）与沙尘暴（毁能见度和镜头）两个风险。</p>'
      },
      {
        type: 'good',
        title: '更好的时机',
        html: '<p>若改为独立专程安排在 <strong>11 月至次年 3 月</strong>：白天 21–26°C（官方推荐季），' +
          '硫化氢排放全年最低，Sonny Bono 保护区正值观鸟旺季（10 万+ 候鸟），黄砖路也更可能因志愿者充足而开放。' +
          '同样两个点，冬季的摄影回报明显高于 9 月。</p>'
      }
    ],
    spots: [
      {
        id: 'salvation-mountain',
        n: 1,
        name: '救赎山',
        en: 'Salvation Mountain, Niland',
        score: 4.5,
        tldr: '全免费、停车即到的民间艺术地标；人像与人文性价比极高，但必须清晨去，黄砖路已大部分关闭。',
        tags: [
          { t: '完全免费', c: 'free' }, { t: '无需预约', c: 'free' },
          { t: '黄砖路多已关闭', c: 'risk' }, { t: '高温风险', c: 'risk' }
        ],
        highlights: [
          'Leonard Knight 用 28 年、约 10 万加仑废弃乳胶漆加 adobe 黏土与麦秸堆出的民间艺术纪念碑，约 3 层楼高、100 英尺宽，核心标语 “GOD IS LOVE”',
          '2026 年恰逢建成 <strong>40 周年</strong>',
          '旁边有 Leonard 最后的作品 “Museum”（轮胎作树干、黏土球作花朵的树屋式结构）与数辆彩绘卡车'
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
            name: '侧面与 Museum 结构',
            desc: '主体东南侧，紧邻本体。Museum 已坍塌禁止进入，只能外部拍摄。上午同一时段，16–24mm 贴近拍纹理。',
            view: [33.25417, -115.47250]
          },
          {
            name: 'Slab City 入口牌坊',
            desc: '距救赎山约 1.2 公里。白天沿主路行车观光问题不大，但不要擅入营地、不要拍摄居民，日落后不建议逗留。',
            at: [33.25750, -115.46250]
          }
        ],
        access: {
          book: '不需要',
          ticket: '完全免费。无门票、无纪念品店，现场工作人员不主动索要捐款',
          hours: '日出至日落，全年 365 天',
          parking: '免费土地面，普通轿车可到（Beal Rd 末段非铺装，注意松沙，<strong>不需要四驱</strong>）。官方要求距彩绘与展示区至少 10 英尺',
          walk: '停车到机位 <strong>不到 1 分钟</strong>；建议停留 30–45 分钟',
          drone: '允许，但每段限 5 分钟、须保持在艺术表面上方 30 英尺以上、不得飞越看护人住所'
        },
        notes: [
          '<strong>黄砖路（Yellow Brick Road）现已大部分关闭</strong>：因游客屡次踩踏艺术表面且缺乏志愿者看护，仅在有人手带团时开放。请按「到场可能不能上山」预期',
          '<strong>Museum 结构已坍塌，禁止进入</strong>，官方说明只能从外部拍摄',
          '除黄砖路外，山体所有其他部分严禁攀爬',
          '捐款鼓励但非强制，<strong>只投现场捐款箱或线上捐，不要把现金交给现场任何人</strong>',
          '此处没有加油站、餐饮与可靠手机信号，<strong>最后一次加油请在 Niland 或 Calipatria 完成</strong>，并离线下载地图',
          '带每人至少 4L 水、宽檐帽与高倍防晒。场地限速 5 mph',
          '土地所有权存在风险：机构正募集 50 万美元购地基金以防被工业开发拆除，年运营预算仅约 6.5 万美元'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Salvation_Mountain%2C_Niland%2C_CA.jpg', cap: 'Salvation Mountain 正面全貌 · Wikimedia Commons' },
          { url: 'assets/img/salvation-mountain-flickr-gregthebusker-d31bfdc3.jpg', cap: 'Salvation Mountain · GregTheBusker via Flickr / Wikimedia Commons' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Salvation_Mountain_folk_art.jpg', cap: 'Salvation Mountain 色块与标语细节 · Wikimedia Commons' }
        ]
      },
      {
        id: 'salton-sea',
        n: 2,
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
            desc: '湖西北岸游客中心一带。需缴州立公园日间停车费（2026 年具体金额未能确认）。',
            at: [33.47417, -115.88900]
          },
          {
            name: 'Sonny Bono NWR · Rock Hill Trail',
            desc: '从 906 W Sinclair Rd, Calipatria 出发，2 英里往返，登顶可俯瞰湖景。' +
              '<strong>日出后是 9 月唯一可行的徒步窗口。</strong>注意 9 月并非观鸟季，主力候鸟群在 10 月至次年 5 月。',
            at: [33.15000, -115.73333]
          }
        ],
        access: {
          book: '三处均无需预约',
          ticket: 'Bombay Beach 免费；Sonny Bono NWR 完全免费；Salton Sea SRA 需缴州立公园日间停车费',
          hours: 'Bombay Beach 无门禁；Ski Inn 营业时间不定，建议先电话',
          parking: 'Bombay Beach 停镇内公共街道免费，<strong>务必合法停放、勿堵民宅车道</strong>。镇内为破损铺装与土路，普通轿车慢行可进',
          walk: '镇中心停车翻堤到装置区约 <strong>5–15 分钟</strong>；Rock Hill Trail 2 英里往返。建议停留 45 分钟至 2 小时',
          drone: 'Sonny Bono NWR 与 Salton Sea SRA 均<strong>严禁</strong>；Bombay Beach 镇域无特定禁令'
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/The_Swing_at_Bombay_Beach.jpg', cap: 'Bombay Beach 的秋千装置 · Wikimedia Commons' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bombay_Beach_at_Sunset_-_Flickr_-_RuggyBearLA.jpg', cap: 'Bombay Beach 日落 · RuggyBearLA via Flickr / Wikimedia Commons' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Bombay_Beach_art_pieces.jpg', cap: 'Bombay Beach 装置艺术 · Wikimedia Commons' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Old_Salton_Sea_Beach_Marina_2013.jpg', cap: 'Salton Sea 湖岸废墟 · Wikimedia Commons' }
        ]
      }
    ]
  }
];
