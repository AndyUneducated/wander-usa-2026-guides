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
    lead: '因 Plaskett Fire，1 号公路南段封闭，这一段必须走 US-101 经 Paso Robles 再转 CA-46 West 下到 Cambria。' +
      '好消息是 Green Valley 观景点和 DAOU 酒庄本来就在这条绕行路上，从「绕远」变成了「顺路」。',
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
        title: '封闭区内这些点这次完全去不了',
        html: '<p>Sand Dollar Beach、Jade Cove、Willow Creek Vista Point、Plaskett Creek、Gorda，' +
          '以及 Pfeiffer Big Sur、Julia Pfeiffer Burns（<strong>McWay Falls</strong>）、Andrew Molera、Limekiln、Point Sur 等州立公园。</p>'
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
        id: 'ragged-point',
        n: 1,
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
          drone: '<strong>禁止</strong>（SLO Coast District 全域禁飞令，另有火场临时飞行限制）'
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Ragged_Point_from_Ragged_Point_Inn.jpg', cap: 'Ragged Point Inn 崖上南望 Big Sur 海岸 · ECTran71 / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Ragged_Point.jpg', cap: '南望 SLO 海岸线，平坦沙滩为 San Carpoforo Creek 口 · Eric Polk / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Ragged_Point_seals_1.jpg', cap: 'Ragged Point 海豹 · CC BY-SA 4.0' }
        ]
      },
      {
        id: 'moonstone',
        n: 2,
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
          drone: '<strong>禁止</strong>（SLO Coast District 禁飞令）'
        },
        notes: [
          '<strong>烟雾是最大变量</strong>：Cambria 距 Plaskett Fire 仅数十英里，烟正南飘。两种预案都准备',
          '劳工节周末路肩车位在日落前 1 小时基本满位，建议 <strong>17:30 前到位</strong>',
          '因 Hwy 1 封闭加 CA-46 施工，Cambria 现在是南下车流的漏斗口，镇上餐厅住宿会比平常紧张',
          '9 月不是野花季，灰鲸迁徙在 12–4 月；9 月主要是海獭、海豚、鹈鹕',
          '上午常有浓雾，若要清透深蓝海水请等下午'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Cambria%2C_CA_15.jpg', cap: 'Moonstone Beach 海岸 · Stilfehler / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Cambria%2C_CA_17.jpg', cap: 'Moonstone Beach 栈道与礁岩 · Stilfehler / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Cambria%2C_CA_23.jpg', cap: 'Moonstone Beach 海岸线 · Stilfehler / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'green-valley',
        n: 3,
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
            desc: '<strong>70–200mm 是这里的主力镜头</strong>——压缩丘陵层次、把远处 Morro Rock 拉近，100–400mm 更佳。' +
              '16–35mm 拍全景效果一般（丘陵会被压扁）。最佳时段日落前 1 小时至日落。' +
              '<strong>拍摄前提是能见度，这是受烟雾影响最严重的点位，烟大时基本报废。</strong>',
            at: [35.54550, -120.91860]
          },
          {
            name: '西侧土台之二（多份游记称视野最佳）',
            desc: '紧邻主点，位置稍高。三处土台都停一下实际取景对比即可，停车位置就是机位。',
            at: [35.54570, -120.91650]
          },
          {
            name: '东侧土台',
            desc: '距 Hwy 1/CA-46 路口约 8.5 英里，视角略有不同，可作对比机位。东段景观转为葡萄园。',
            at: [35.54260, -120.90250]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免费',
          hours: '全天',
          parking: '路边土质 turnout，免费。<strong>转入方式相当惊险</strong>，一份游记原文形容为「hair-raising」，减速要早并注意后车',
          walk: '<strong>0 分钟</strong>，停车位置即机位',
          drone: '非公园土地无特定禁令，但当前火场空域有临时飞行限制'
        },
        notes: [
          '<strong>CA-46 West 单向交替放行施工至 9 月 25 日</strong>，观景点很可能就在或紧邻施工段内，施工车辆与临时锥桶会影响取景和停车',
          '<strong>无厕所、无水、无垃圾桶、无标识牌</strong>——这些是非正式路肩，不是管理型景区',
          '傍晚在此逗留后需继续开山路，注意 CA-46 山区弯道加夜间施工',
          '白天有农业机械上路，弯道盲区多',
          'Wikimedia Commons 上没有这个地点的照片。搜到的同名图片是印度 Tamil Nadu 的 Kodaikanal 同名景点，与此无关'
        ],
        images: []
      },
      {
        id: 'montana-de-oro',
        n: 4,
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
          drone: '<strong>禁止</strong>（SLO Coast District 禁飞令辖区）'
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Spooners_Cove_MDOSP.jpg', cap: 'Spooner\u2019s Cove 南望全景 · Eric Polk / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Cliffs_at_Montana_de_Oro_State_Park_-_panoramio.jpg', cap: '崖顶机位实景 · hakkun / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Monta%C3%B1a_de_Oro_State_Park%2C_United_States_%28Unsplash%29.jpg', cap: 'Montaña de Oro 海岸 · John Konrad / CC0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Montana_de_Oro_State_Park_-_Bluff_Trail_%284%29.jpg', cap: 'Bluff Trail 俯瞰 Spooner\u2019s Cove · Stilfehler / CC BY-SA 4.0' }
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
          drone: '私有产业，需酒庄许可'
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Daou_winery_view_Paso_Robles.jpg', cap: 'DAOU 露台视角俯瞰葡萄园 · SD Dirk / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Daou_Vineyards_-_Paso_Robles%2C_California%2C_USA_-_Feb._2012.jpg', cap: 'DAOU 葡萄园宽幅全景 · SD Dirk / CC BY 2.0' }
        ]
      },
      {
        id: 'guadalupe-dunes',
        n: 6,
        name: '瓜达卢佩沙丘（含沙丘中心）',
        en: 'Rancho Guadalupe Dunes Preserve · Dunes Center',
        score: 4,
        tldr: '西海岸最高沙丘（550 英尺），但 9 月正处雪鸻繁殖季封闭期，核心沙丘进不去，只能拍打折版。',
        tags: [{ t: '沙丘免费', c: 'free' }, { t: '中心 $7/人', c: 'paid' }, { t: '繁殖季封闭', c: 'risk' }, { t: '周日周一闭馆', c: 'risk' }],
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
          drone: '<strong>禁止</strong>（野生动物保护区，雪鸻保护）'
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Guadalupe-Nipomo_Dunes_NWR_sunset_%2811519903986%29.jpg', cap: '沙丘日落（本题材标杆之作）· Ian Shive / USFWS / 公有领域' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Guadalupe_Dunes_County_Park_beach.JPG', cap: 'Rancho Guadalupe 沙滩，即主机位 · Adbar / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/US-CA-Mussel-Rock-Guadalupe-Beach.jpg', cap: '南端 Mussel Rock 回望视角 · Kevin P. Rice / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/DUNES_IN_GUADALUPE-NIPOMO_COMPLEX.jpg', cap: 'Guadalupe-Nipomo 沙丘复合体 · Jerrye & Roy Klotz / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'oceano-dunes',
        n: 7,
        name: '奥西亚诺沙丘访客中心 + Pismo 栈桥',
        en: 'Oceano Dunes Visitor Center · Pismo Beach Pier',
        score: 3,
        tldr: '步行进沙滩完全免费不需通行证；Edward Weston 1936 年就在这片沙丘拍出摄影史经典。Pismo 栈桥是可靠的日落备案。',
        tags: [{ t: '步行免费', c: 'free' }, { t: '中心周日周一闭馆', c: 'risk' }, { t: '9/30 前禁飞', c: 'risk' }, { t: '烟雾影响最小', c: 'free' }],
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
            desc: '北侧约 3 英里，车程 8–10 分钟。<strong>栈桥桩柱剪影加落日是经典构图。</strong>' +
              '时段日落至暮光（19:20–19:45）。24–70mm；慢门 1–4 秒配 ND 拍桩柱周围的水流雾化。',
            at: [35.13980, -120.64370]
          },
          {
            name: '访客中心室内展示',
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
          drone: '<strong>禁止。</strong>命令 554-022-2025：3 月 1 日至 9 月 30 日禁飞；Pismo Dunes Natural Preserve 全年禁飞'
        },
        notes: [
          '<strong>访客中心 9/6 周日、9/7 劳工节关闭</strong>，即使开放也只有四小时',
          '两个官方页面对营业日有矛盾记载（一处写周二至周六，一处写每日 12:00–16:00），已按较严格者规划，建议电话确认',
          '劳工节周末车辆通行证极可能启用线上预售制（闸口不售票，上限 1,800 辆/日，年票在预售日无效）。<strong>但如果你只是步行进沙滩拍照，这完全不影响你</strong>',
          'Pier Avenue 正在施工重铺，Beach 至 Norswing Drive 段由四车道缩为三车道，可能有临时延误',
          '<strong>距火场约 100 英里，烟雾影响最小——这是本次行程的空气质量最优区</strong>'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Dunes%2C_Oceano%2C_1936%2C_by_Edward_Weston.jpg', cap: 'Dunes, Oceano, 1936 · Edward Weston / 公有领域' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Pismo_Beach_Pier%2C_North_view_20110805_1.jpg', cap: 'Pismo Beach Pier 日落，即机位 B · DXR / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/View_of_the_Guadalupe-Nipomo_Dunes_from_Oceano.jpg', cap: '从 Oceano 俯瞰沙丘复合体北端 · Engl145 / 公有领域' }
        ]
      },

      /* ---- 以下为因 Plaskett Fire 封闭、本次无法抵达的点位 ---- */
      {
        id: 'mcway-falls',
        n: 8,
        gone: '本次无法抵达',
        name: 'McWay 瀑布',
        en: 'McWay Falls, Julia Pfeiffer Burns SP',
        score: 5,
        tldr: '公园因 Plaskett Fire 关闭，且 Hwy 1 南段封闭无法从 San Simeon 方向北上抵达。这次拍不到。',
        tags: [{ t: '公园关闭', c: 'risk' }, { t: 'Hwy 1 封闭', c: 'risk' }, { t: '无解封时间表', c: 'risk' }],
        highlights: [
          '80 英尺高的瀑布直落海滩，是加州仅有的几条「潮汐瀑布」之一，也是整条 Big Sur 海岸最著名的单一画面',
          '<strong>Julia Pfeiffer Burns State Park 已因 Plaskett Fire 全园关闭</strong>，观景步道不可进入'
        ],
        photo: '正常年份是 5/5 的顶级风光题材。<strong>但本次行程为 0 —— 到不了。</strong>',
        shots: [
          {
            name: 'Overlook Trail（当前关闭）',
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
          drone: '禁止'
        },
        notes: [
          '<strong>双重阻断</strong>：一是公园本身因火关闭，二是 Hwy 1 在 Pacific Valley（MM16）至县界（MM0.09）封闭，即便公园开放，从 San Simeon 方向也上不去',
          '若你从 Monterey 方向单独进入是另一条路线，但那与本次「由北向南贯通」的行程不兼容',
          '出发当天可复查 <a href="https://roads.dot.ca.gov/" target="_blank" rel="noopener">Caltrans 路况</a>，但按目前控制率（1%）预期解封的可能性很低'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/McWay_Falls%2C_Julia_Pfeiffer_Burns_State_Park.jpg', cap: 'McWay Falls · Wikimedia Commons' }
        ]
      },
      {
        id: 'pfeiffer-beach',
        n: 9,
        gone: '本次无法抵达',
        name: 'Pfeiffer 海滩（钥匙孔石拱）',
        en: 'Pfeiffer Beach · Keyhole Arch',
        score: 5,
        tldr: '冬季穿孔日落的名场面，但 9 月本就对不上光轴，且现在整个 Big Sur 段封闭。双重不可行。',
        tags: [{ t: '区域封闭', c: 'risk' }, { t: '9 月光轴对不上', c: 'risk' }],
        highlights: [
          '紫色沙滩加海蚀拱门，<strong>Keyhole Arch 的穿孔日落</strong>是 Big Sur 最著名的摄影题材之一',
          '但穿孔现象只在<strong>每年 12 月至次年 1 月</strong>前后出现，9 月太阳方位角偏北，光线不会穿过拱洞'
        ],
        photo: '<strong>本次为 0。</strong>即便道路开放，9 月也拍不到让这里出名的那张照片——那是冬至前后的现象。',
        shots: [
          {
            name: 'Keyhole Arch 正对沙滩（当前不可达）',
            desc: '正常情况下从 Sycamore Canyon Road（狭窄单车道）下到海滩。<strong>目前区域封闭。</strong>',
            at: [36.23770, -121.81400]
          }
        ],
        access: {
          book: '—',
          ticket: '正常年份 $15/车',
          hours: '<strong>Big Sur 区域封闭中</strong>',
          parking: '不可进入',
          walk: '不可进入',
          drone: '禁止'
        },
        notes: [
          '即使未来单独重访，也请安排在 <strong>12 月中至 1 月中</strong>，且需要低潮加晴朗天空同时满足',
          'Sycamore Canyon Road 常年限制大车，停车场车位极少'
        ],
        images: []
      },
      {
        id: 'sand-dollar-jade',
        n: 10,
        gone: '本次无法抵达',
        name: '沙钱海滩 / 翡翠湾 / 柳溪观景点',
        en: 'Sand Dollar Beach · Jade Cove · Willow Creek Vista',
        score: 4,
        tldr: '三处相邻点位全部落在 Hwy 1 封闭段（MM16 以北）内，并紧邻 Plaskett Fire 火场核心。',
        tags: [{ t: 'Hwy 1 封闭段内', c: 'risk' }, { t: '紧邻火场', c: 'risk' }],
        highlights: [
          '<strong>Sand Dollar Beach</strong> 是 Big Sur 最长的沙滩；<strong>Jade Cove</strong> 以海滩上可捡到的蛇纹石玉著称；<strong>Willow Creek Vista</strong> 是俯瞰河口的路边观景台',
          '三处沿 Hwy 1 相邻分布，正常情况下可一次串联，<strong>已合并为一条</strong>',
          '<strong>Plaskett Creek 与 Gorda 就在同一路段，同样不可达</strong>'
        ],
        photo: '<strong>本次为 0。</strong>这一段正是 Plaskett Fire 得名的位置，是整场火最核心的区域。',
        shots: [
          {
            name: 'Sand Dollar Beach（当前不可达）',
            desc: 'Hwy 1 西侧停车场下切至沙滩。<strong>位于封闭段内。</strong>',
            at: [35.92180, -121.46400]
          },
          {
            name: 'Jade Cove（当前不可达）',
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
          drone: '禁止（另有火场临时飞行限制）'
        },
        notes: [
          '<strong>Plaskett Fire 已烧 29,123 英亩、控制率仅 1%</strong>，这一段短期内不具备开放条件',
          '这三处的替代方案：<strong>Montaña de Oro</strong> 的岩石海岸与潮池题材最接近，且完全免费、烟雾影响小'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Sand_Dollar_Beach%2C_Big_Sur.jpg', cap: 'Sand Dollar Beach · Wikimedia Commons' }
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
        title: 'Point Dume 下层停车场无限期关闭',
        html: '<p>2026 年 8 月 1–2 日高潮位与涌浪造成严重侵蚀，崖缘不稳、局部落差近 8 英尺。' +
          '<strong>Westward Beach Road 与 373 车位的下层停车场已关闭，无预计重开日期</strong>；' +
          '8 月 6 日起进一步升级，<strong>Birdview Avenue 入口在每日 05:00–15:00 对行人和自行车也关闭</strong>。' +
          '详见该条目，我给了 Zuma Beach 的替代方案。</p>'
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
        id: 'sb-courthouse',
        n: 1,
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
          drone: '禁止'
        },
        notes: [
          '<strong>最大的时间陷阱是 16:30 门禁</strong>，它比 9 月的日落（19:20）早近三小时，所以法院和日落机位必须排在同一天的不同时段，不能指望在塔上拍日落',
          '这是运行中的法院，<strong>安检严格</strong>，大型摄影包可能被要求开包，请勿在法庭区域拍摄。三脚架在公共区域通常可用但建议先问工作人员',
          'Clock Gallery 钟机房仅<strong>周三、周六、周日 10:45–12:05</strong> 开放入内，其余时间隔玻璃看——9/5、9/6、9/9 都在窗口内',
          '免费导览：周一至周五 10:30、每日 14:00，Mural Room 集合，约 1 小时，无需预约'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/2014-04-11-Santa-Barbara-County-Courthouse-2.jpg', cap: 'Santa Barbara County Courthouse · Gunnar Klack / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Santa_Barbara_courthouse_tower_view.jpg', cap: '塔顶俯瞰视角 · Photopippo / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Santa_Barbara_County_Courthouse.jpg', cap: '法院大楼全貌 · Konrad Summers / CC BY-SA 2.0' }
        ]
      },
      {
        id: 'old-mission-sb',
        n: 2,
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
          drone: '禁止'
        },
        notes: ['建议停留 1–2 小时'],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Facade%2C_Mission_Santa_Barbara%2C_Laguna_Street%2C_Santa_Barbara%2C_CA_%2853928717401%29.jpg', cap: 'Old Mission 正立面 · Warren LeMay / CC BY-SA 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Mission_Santa_Barbara01.jpg', cap: 'Mission Santa Barbara 双钟塔 · Bernard Gagnon / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Mission_Santa_Barbara%2C_Laguna_Street%2C_Santa_Barbara%2C_CA_%2853929165550%29.jpg', cap: 'Mission 与前方草坪 · Warren LeMay / CC BY-SA 2.0' }
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
          drone: '禁止'
        },
        notes: ['Butterfly Beach 无救生员、禁篝火、禁犬'],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Bright_white_sunset_at_Butterfly_Beach_%28Montecito%2C_California%29_-_Feb_2013.jpg', cap: 'Butterfly Beach 日落 · Damian Gadal / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Stearns_Wharf_-_Don_Ramey_Logan.jpg', cap: 'Stearns Wharf · Don Ramey Logan / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Beach_and_Stearns_Wharf_-_brewbooks.jpg', cap: '海滩与 Stearns Wharf 宽幅 · brewbooks / CC BY-SA 2.0' }
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
            desc: '俯拍 PCH 绕岩弯道，<strong>长焦 70–200mm 压缩公路曲线，拍行驶中的车辆最有故事感</strong>。',
            at: [34.08802, -119.06297]
          },
          {
            name: '贴近岩基的海滩',
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
          drone: '州立公园禁飞'
        },
        notes: [
          '<strong>多处禁止左转标志</strong>，进出 turnout 要提前规划方向——南下（由 Oxnard 往 Malibu）方向停车最顺',
          '<strong>紧邻 Naval Air Station Point Mugu，请勿把镜头对准军事设施</strong>',
          '海风常年强劲，三脚架需压重。周中上午人最少'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Mugu_Rock_on_California_Route_1.jpg', cap: 'Mugu Rock 与 PCH · Tim Pearce / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Point_Mugu_September_2013_panorama.jpg', cap: 'Point Mugu 超宽幅全景 · King of Hearts / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Point_Mugu_September_2013_002.jpg', cap: 'Point Mugu 海岸 · King of Hearts / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'el-matador',
        n: 5,
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
          drone: '<strong>禁止</strong>（加州州立海滩禁飞令）'
        },
        notes: [
          '<strong>潮汐是成败关键</strong>：涨潮时礁柱通道与海蚀洞会被淹没甚至困人。理想是日落时段恰逢落潮，出发前查 NOAA Santa Monica 或 Malibu 潮汐表',
          '<strong>2026 年初 El Matador 路口已改造为环岛</strong>，进出方式与旧攻略不同，跟着导航走',
          '商业与婚纱拍摄需加州州立公园拍摄许可，个人摄影无需',
          '不适合婴儿车与行动不便者。三脚架允许，但注意涌浪与流沙'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/El_Matador_State_Beach%2C_Malibu_%28Unsplash%29.jpg', cap: 'El Matador 海蚀柱 · Joseph Yates / CC0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/El_matador_beach_malibu.jpg', cap: 'El Matador 海滩 · Graham / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/El_Matador_State_Beach_-_Rushing_Tides_%2835173442584%29.jpg', cap: 'El Matador 涌浪 · Santa Monica Mountains NRA / 公有领域' }
        ]
      },
      {
        id: 'malibu-pier',
        n: 6,
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
            view: [34.03550, -118.67900]
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
          hours: '日出至日落，全年 365 天',
          parking: '桥前收费场约 96 车位 <strong>$10–20</strong>；隔壁 Surfrider Beach 县属场夏季周末 06:00–16:00 约 $15、16:00 后 $3；<strong>劳工节 9/7 按节假日费率 06:00–16:00 $20</strong>',
          walk: '到桥面约 150 米、2 分钟；<strong>到 Surfrider 沙滩最佳机位约 430 米、6–7 分钟</strong>',
          drone: '<strong>禁止</strong>（LA County Code 17.04.510，属轻罪）'
        },
        notes: [
          'Malibu Pier 位于 Carbon Beach Terrace 以西，<strong>不在 PCH 施工限制段内</strong>，通行正常。但从 Getty Villa 往西开必然要穿过 25 mph 施工段',
          '<strong>9/5–9/7 仍属劳工节周末，路边违停风险高</strong>（周末与节假日运行拖车场），请务必停进正规车位',
          '夏季海滩执法队运行至劳工节，海滩禁酒执法严格'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/The_Malibu_Pier_from_Surfrider_Beach_-_panoramio.jpg', cap: '从 Surfrider 沙滩拍栈桥，即主机位 · Darin R. McClure / CC BY 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Malibu_Pier.jpg', cap: 'Malibu Pier 与白色塔楼 · Levi Clancy / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Malibu_Pier_with_waves_crashing_03.jpg', cap: 'Malibu Pier 涌浪 · Levi Clancy / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'point-dume',
        n: 7,
        gone: '主通道无限期关闭',
        name: '杜姆角',
        en: 'Point Dume State Beach',
        score: 2.5,
        tldr: '本该是这一段最强的风光机位，但下层停车场无限期关闭、入口每日 05:00–15:00 连行人都禁行。已给出 Zuma Beach 替代方案。',
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
          drone: '<strong>禁止</strong>'
        },
        notes: [
          '<strong>唯一稳妥的窗口是 15:00 之后</strong>（施工时段结束），且必须做好扑空准备。崖顶 Preserve 停车场与关闭的入口共用 Birdview Avenue 通道，15:00 后能否步行进入保护区步道<strong>未能从官方渠道确认</strong>',
          '<strong>崖缘不稳、局部落差近 8 英尺，绝对不要越过警戒锥、警示带或围栏</strong>，越界可致重伤且属违规',
          '这处火烧区岸段因原有海堤随房屋损毁而失去保护，<strong>侵蚀仍在持续</strong>',
          '1、2、3 号卫生间因水管被侵蚀损坏关闭，仅有临时化学厕所',
          '下到 Big Dume 沙滩的长阶梯受潮汐控制，<strong>高潮时通道会被完全切断</strong>',
          '出发当天务必查 malibucity.org 的 Alert Center 与 parks.ca.gov 公告栏。保护区内禁止携犬'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Point_Dume_from_Zuma_Beach.JPG', cap: '从 Zuma Beach 远眺 Point Dume，即推荐的替代机位 · OMCV / 公有领域' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Point_Dume_Beach_%2851985228879%29.jpg', cap: 'Point Dume 海滩 · Santa Monica Mountains NRA / 公有领域' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Point_Dume_State_Beach_01.jpg', cap: 'Point Dume 崖顶视角 · Michael Benatar / CC BY 2.0' }
        ]
      },
      {
        id: 'getty-villa',
        n: 8,
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
          drone: '<strong>明文禁止</strong>'
        },
        notes: [
          '<strong>摄影规则</strong>：室外与常设展厅允许手持设备加现场光；<strong>三脚架、独脚架、无人机一律禁止</strong>；自拍杆仅限室外；' +
            '<strong>禁止专业拍摄，包括婚纱、模特与摆拍的订婚照</strong>。有访客报告在展厅内被保安以「看起来像专业拍摄」为由制止，<strong>器材尽量低调</strong>',
          '<strong>火灾后园林变化</strong>：约 44% 的树木被移除，遮荫与绿量明显少于 2025 年前的网图。好的一面是柱廊与建筑线条更加干净通透，对建筑摄影反而有利；坏的一面是正午缺乏遮荫、光比更大',
          '从这里沿 PCH 向西进入 Malibu 会立即进入 25 mph 施工限速段，<strong>该段禁止停车与路边停留，不要试图在烧毁区路边下车拍摄</strong>',
          '超过 11×17×8 英寸的背包需寄存。建议游览时长 2–3 小时'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Getty_Villa_-_Outer_Peristyle_Garden_-_Pacific_Palisades.jpg', cap: '外柱廊花园全景，即招牌机位 · Dale Cruse / CC BY 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Getty_Villa_-_Outer_Peristyle_Colonnade_-_Pacific_Palisades%2C_Los_Angeles.jpg', cap: '柱廊内侧竖构图 · Dale Cruse / CC BY 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/060807-002-GettyVilla001.jpg', cap: 'Getty Villa 建筑 · Bobak Ha\u2019Eri / CC BY 3.0' }
        ]
      }
    ]
  },

  /* ===================== ③ Los Angeles（研究进行中） ===================== */
  {
    id: 'la',
    name: '③ Los Angeles',
    navName: '洛杉矶',
    color: '#ff8a3d',
    lead: '本次行程景点最密集的一区，建筑人文与海岸日落都集中在这里。难点全在交通和停车，而不是景点本身。',
    callouts: [{
      type: 'info',
      title: '本区数据仍在补全',
      html: '<p>洛杉矶片区的联网研究仍在进行（含 Griffith、Hollywood Sign、Wisdom Tree、Getty Center、LACMA、' +
        'Walt Disney Concert Hall、Bradbury Building、6th Street Viaduct、Venice、Santa Monica、Palos Verdes 等）。' +
        '下面两条是版式样例，返回后会替换为全量条目。</p>'
    }],
    spots: [
      {
        id: 'griffith',
        n: 1,
        name: '格里菲斯天文台',
        en: 'Griffith Observatory',
        score: 5,
        tldr: '建筑 + 城市全景双主题，日落前一小时到位；周一闭馆，停车收费且极堵。',
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
          { url: 'assets/img/griffith-observatory-2006-3793f49e.jpg', cap: 'Griffith Observatory 建筑全貌 · Wikimedia Commons' }
        ]
      },
      {
        id: 'smp',
        n: 2,
        name: '圣莫尼卡栈桥（含 Pacific Park、West Coaster、圣莫尼卡海滩）',
        en: 'Santa Monica Pier · Pacific Park · West Coaster · Santa Monica Beach',
        score: 4,
        tldr: '摩天轮 + 栈桥的南加符号，价值集中在日落后蓝调时刻；白天较平淡。',
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
          { url: 'assets/img/santa-monica-pier-entrance-evening-11993ea2.jpg', cap: 'Santa Monica Pier 入口夜景 · Wikimedia Commons' }
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
          '全区<strong>严禁无人机</strong>。海滩开放 05:00–01:00。</p>'
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
          drone: '<strong>禁止</strong>'
        },
        notes: ['阶梯石面在晨雾后湿滑', '夏季狗禁入沙滩，看现场标示'],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Heisler_Park_-_Laguna_Beach_-_California_-_01.jpg', cap: 'Heisler Park 海岸 · Norbert Nagel / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Heisler_Park_-_Laguna_Beach_-_California_-_05.jpg', cap: 'Heisler Park 崖顶视角 · Norbert Nagel / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Mermaid_Beach_-_Heisler_Park_-_Laguna_Beach_-_California.jpg', cap: 'Mermaid Beach · Norbert Nagel / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'treasure-island',
        n: 2,
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
          drone: '<strong>禁止</strong>'
        },
        notes: [
          '度假村范围内（泳池、露台、餐厅）属私产，<strong>请勿架设器材</strong>',
          '冬季涌浪会把北端沙滩冲成纯礁石，9 月初通常有沙',
          '崖顶部分轮椅可达'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/North_end_of_Treasure_Island_Beach%2C_Laguna_Beach_with_natural_archway.jpg', cap: '北端天然拱门 · Beyond My Ken / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/View_from_atop_Treasure_Island_Beach.jpg', cap: '崖顶俯瞰 · ZacharyCrespin / CC BY 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Goff_Cove%2C_Laguna_Beach_from_south.jpg', cap: 'Goff Cove · Beyond My Ken / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'victoria-pirate',
        n: 3,
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
            park: [33.52220, -117.76050],
            view: [33.52055, -117.76435]
          },
          {
            name: '公共阶梯入口（2713 Victoria Drive 旁）',
            desc: '长而陡的公共通道，返程是上坡。阶梯顶到阶梯底约 190 米陡阶，阶梯底到塔约 105 米岩石地形。',
            at: [33.52149, -117.76205]
          },
          {
            name: 'Dumond Drive 通道（携带器材推荐走这条）',
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
          drone: '<strong>禁止</strong>'
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Victoria_Beach_Pirate_Tower_Nov_2019.jpg', cap: 'Victoria Beach 海盗塔 · Carl Glover / CC BY 2.0' }
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
        id: 'sunset-cliffs',
        n: 1,
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
            desc: '位于 Sunset Cliffs Boulevard 中段。低潮时可靠近细看，高潮时只能从崖顶俯拍。24–70mm 或 70–200mm 压缩。',
            at: [32.71957, -117.25688]
          },
          {
            name: '开顶海蚀洞（建议只远观）',
            desc: '位于 Sunset Cliffs Blvd 与 Monaco Street 路口附近，需从 Luscomb Point 一条陡而常打滑的小径下切。' +
              '<strong>需要负潮才安全，而本次行程的负潮全在凌晨，白天最低只有 9/9 的 1.27 ft，属「可看不可深入」。建议只从崖顶远观，不要下切。</strong>精确坐标未能确认。',
            at: [32.72446, -117.25753]
          }
        ],
        access: {
          book: '不需要',
          ticket: '<strong>免费</strong>',
          hours: '公园全天；注意车辆宵禁',
          parking: '<strong>全部免费。</strong>Ladera Street 土场是园区南端主场，<strong>最热门、最先满</strong>；Sunset Cliffs Blvd 沿线有免费路边位',
          walk: 'Ladera St 土场到崖顶观景点约 <strong>75 米 / 1 分钟</strong>；到下海石阶约 100 米 / 2 分钟。崖顶步道几乎全程平坦，是本行程无障碍性最好的海岸步道之一',
          drone: '<strong>禁止</strong>。紧邻的 Cabrillo National Monument 由国家公园管理局全面禁飞，不要搞混'
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunset_Cliffs_San_Diego_2013.jpg', cap: 'Sunset Cliffs 日落 · Tuxyso / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/People_at_Sunset_Cliffs_Natural_Park_San_Diego_2013.jpg', cap: 'Sunset Cliffs 崖顶 · Tuxyso / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Azure_Vista_panoramic.jpg', cap: 'Point Loma 崖线全景 · RightCowLeftCoast / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'gliderport',
        n: 2,
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
          drone: '<strong>禁止</strong>——这是活跃的载人飞行空域，风险与违规性质都远高于普通公园'
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Torrey_Pines_Gliderport_1.jpg', cap: 'Torrey Pines Gliderport 崖顶 · Ncysea / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Torrey-pines-gliderport.JPG', cap: 'Gliderport 滑翔伞 · Dmadeo / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Torrey_Pines_Gliderport_2_2019-04-16.jpg', cap: 'Gliderport 崖线 · FASTILY / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'scripps-pier',
        n: 3,
        name: '斯克里普斯海洋研究所纪念栈桥',
        en: 'Ellen Browning Scripps Memorial Pier (UCSD)',
        score: 4,
        tldr: '栈桥本身对公众关闭（科研设施）。9 月拍不到穿柱日落，但换个构图反而更耐看。停车免费。',
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
          book: '不需要（上桥需 $40 导览）',
          ticket: '免费（沙滩公共）',
          hours: '沙滩全天；Kellogg Park 停车场<strong>全年 22:00–04:00 禁停</strong>',
          parking: '<strong>La Jolla Shores Drive 沿线有免费路边位</strong>（最省时，距沙滩约 250 米）；Kellogg Park 停车场车位更多但离栈桥远。<strong>两者均免费</strong>',
          walk: '<strong>建议走 La Jolla Shores Drive 路边方案</strong>：约 450 米 / 9 分钟。从 Kellogg Park 走要 1.0 公里 / 13–15 分钟全程软沙，带三脚架会明显吃力，<strong>能省约 20 分钟往返沙地步行</strong>',
          drone: '<strong>禁止</strong>。La Jolla 海岸有野生动物保护封闭区（海豹、海狮、鸟类），低空飞行属骚扰野生动物'
        },
        notes: [
          '<strong>9 月圣地亚哥沿岸清晨与傍晚常有海雾，会直接吞掉落日</strong>，建议当天下午查一下海岸能见度再决定是否前往',
          '请勿试图攀爬栈桥或使用科研潜水楼梯——这是 UCSD 设施，有安保',
          '桥墩区域涨潮时浪大且有回卷，注意脚下与器材',
          '这一带是 Matlahuayl 州立海洋保护区，<strong>禁止采集任何生物</strong>'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Scripps_Institution_of_Oceanography_pier_photo_Don_Ramey_Logan.jpg', cap: 'Scripps Pier · Don Ramey Logan / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Scripps_Pier%2C_La_Jolla%2C_California.jpg', cap: 'Scripps Pier 桥墩 · Mwinog2777 / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/La_Jolla_Shores_photo_Don_Ramey_Logan.jpg', cap: 'La Jolla Shores · Don Ramey Logan / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'salk',
        n: 4,
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
          drone: '<strong>禁止</strong>'
        },
        notes: [
          '<strong>摄影政策严格。允许</strong>：仅导览团期间的休闲个人拍摄，<strong>限一台手持相机或手机</strong>，不得使用任何附加器材',
          '<strong>明令禁止</strong>：三脚架、自拍杆、灯光设备（含离机闪光灯）、无人机、道具、服装、' +
            '<strong>正式或摆拍或受委托的摄影摄像</strong>（婚纱、订婚、毕业、家庭写真、模特作品集、学生作业均在内）、' +
            '作品集摄影、实验室内部拍摄。不得为了拍照而拖延或打断团队行进',
          '<strong>专业与商业摄影一律禁止</strong>，除非事先获批并由 Salk 传播团队全程陪同，申请邮箱 press@salk.edu',
          '<strong>导览准时出发，迟到超过 10 分钟可能不被允许加入</strong>',
          '官方提示<strong>园区正在进行保护与修复施工，包括主中庭内部及周边</strong>，可能有围挡影响构图',
          '这是私有产权，Salk 保留对违规者拒绝或撤销进入许可的权利。<strong>请勿试图在非导览时段进入园区拍摄——这是近年政策收紧的直接原因</strong>',
          '中庭石灰石地面反光强，注意镜头耀斑'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Salk_Institute_Highsmith.jpg', cap: 'Salk Institute 中庭与生命之河 · Carol M. Highsmith / 公有领域' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Salk_Institute_for_Biological_Studies_and_a_seagull_dllu.jpg', cap: 'Salk Institute 中庭 · Daniel L. Lu / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Chairs_and_table_at_Salk_Institute_dllu.jpg', cap: 'Salk Institute 细部 · Daniel L. Lu / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'mount-soledad',
        n: 5,
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
          drone: '<strong>禁止</strong>'
        },
        notes: [
          '这是<strong>现役纪念场所</strong>，常有家属祭扫与仪式，架设器材请避让',
          '上山路陡窄弯多，<strong>自行车骑行者极多，慎超车</strong>',
          '山顶风大温差明显，日落后迅速降温。仅有移动厕所',
          '<strong>注意导航</strong>：OSM 上另有一个标为「Soledad Mountain」的峰点节点位于纪念碑以西约 730 米，与纪念碑不是同一位置，请使用本条给出的坐标'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Mount_Soledad_%28I%29_%284883143285%29.jpg', cap: 'Mount Soledad 十字架 · Antonio Zugaldia / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mount_Soledad_%28II%29_%284883143499%29.jpg', cap: 'Mount Soledad 纪念墙 · Antonio Zugaldia / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Mount_Soledad_%28III%29_%284883747540%29.jpg', cap: 'Mount Soledad 全景 · Antonio Zugaldia / CC BY 2.0' }
        ]
      },
      {
        id: 'uss-midway',
        n: 6,
        name: '中途岛号航母博物馆',
        en: 'USS Midway Museum',
        score: 4,
        tldr: '巨型工业结构 + 军事史，甲板机群质感极强。17:00 关门拍不到日落，但馆外 Tuna Harbor Park 可以。',
        tags: [{ t: '$39 线上', c: 'paid' }, { t: '停车 $20/6hr', c: 'paid' }, { t: '17:00 关门', c: 'risk' }, { t: '严禁无人机', c: 'risk' }],
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
          drone: '<strong>🚫 全行程限制最严的一站</strong>'
        },
        notes: [
          '<strong>无人机</strong>：位于 San Diego International（Lindbergh Field）的 B 类管制空域内且处于跑道进近路径下方，' +
            '该网格限高常为 <strong>0 英尺</strong>——即便申请 LAANC 也可能拿不到任何高度授权。' +
            '未经授权起飞 FAA 民事罚款起步约 $1,100/次，鲁莽操作可升级刑事指控。<strong>此处不要带无人机出包</strong>',
          '<strong>Navy Pier 正在进行桥墩加固施工</strong>，博物馆周边有围挡区域',
          '甲板全程无遮阳，9 月正午晒；舰内温差大',
          '甲板金属地面对三脚架不友好（易滑且人流密集），建议小型独脚架或手持。部分舰内区域禁用闪光灯',
          '雕塑周边全天有游客排队合影，干净构图需早或晚',
          'Harbor Drive 路边计时表限停 2–3 小时，<strong>不够看完全馆</strong>'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/San_Diego_%28California%2C_USA%29%2C_USS_Midway_Museum_--_2012_--_5365.jpg', cap: 'USS Midway 舰体 · Dietmar Rabich / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/USS_Midway_Museum_2022_26.jpg', cap: 'USS Midway 飞行甲板 · Issac I Navarro / CC BY 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/The_Unconditional_Surrender_Statue.jpg', cap: '《无条件投降》雕塑 · Seankimstyle / CC BY-SA 4.0' }
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Salvation_Mountain_-_Flickr_-_GregTheBusker.jpg', cap: 'Salvation Mountain · GregTheBusker via Flickr / Wikimedia Commons' },
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
