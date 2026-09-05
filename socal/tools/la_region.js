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
        id: 'griffith',
        n: 1,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Griffith_Observatory_facade.jpg', cap: 'Griffith Observatory 立面 · APickleForTheKnowingOnes / CC0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/View_from_the_balcony_at_Griffith_Observatory_on_the_Hollywood_sign_and_Mt._Lee_20220509_141352_%281%29.jpg', cap: '自西露台望 Hollywood Sign 与 Mount Lee · Steveshelokhonov / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Griffith_Observatory_2012_01.jpg', cap: 'Griffith Observatory 全景 · Mike Peel / CC BY-SA 4.0' }
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Hollywood_Sign_from_Park_on_Canyon_Lake_Drive_-_panoramio.jpg', cap: '自 Lake Hollywood Park 拍正面全字母 · Russell Lovrin / CC BY 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg', cap: 'Hollywood Sign 正面特写 · Thomas Wolf / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/View_from_behind_Hollywood_Sign_overlooking_LA.jpg', cap: '自 Mount Lee 山顶望字母背面与全城 · Michael E. Arth / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'wisdom-tree',
        n: 3,
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
            park: [34.1313, -118.3387],
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Wisdom_Tree%2C_Los_Angeles%2C_United_States_%28Unsplash%29.jpg', cap: 'Wisdom Tree 孤松 · Andre Benz / CC0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Panorama_of_Los_Angeles_from_Burbank_Peak.jpg', cap: '自 Burbank Peak 俯瞰洛杉矶全景 · Downtowngal / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Mount_Lee_from_Burbank_Peak.jpg', cap: '自 Burbank Peak 望 Mount Lee 与 Sign · Downtowngal / CC BY-SA 3.0' }
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/The_Hollywood_sign_-_panoramio.jpg', cap: '自 Mulholland 观景台方向拍 Hollywood Sign · Alistair Cunningham / CC BY 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Los_Angeles_-_-i---i-_%2827921358776%29.jpg', cap: 'Mulholland 沿线超宽幅全景 · Sergei Gussev / CC BY 2.0' }
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Getty_center_architecture_%28Unsplash%29.jpg', cap: 'Getty Center 白色几何建筑 · Armando Castillejos / CC0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Los_Angeles_from_the_Getty_Center_%285465683022%29.jpg', cap: '自 Getty Center 俯瞰洛杉矶 · KimonBerlin / CC BY-SA 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Architectural_Detail_-_The_Getty_Center_-_Los_Angeles_-_California_-_USA_-_08_%2846447743544%29.jpg', cap: '石灰华与几何细部 · Adam Jones / CC BY-SA 2.0' }
        ]
      },
      {
        id: 'lacma',
        n: 6,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/She_Is_Enchanted_Within_Urban_Lights%5E_In_Explore_May_31-22_-_Flickr_-_Joey_Z1.jpg', cap: 'Urban Light 灯阵夜间人像 · Joey Zanotti / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Levitated_Mass_at_LACMA_01.jpg', cap: 'Levitated Mass 悬石与下沉通道 · Leviclancy / CC0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Broad_Contemporary_Art_Museum_Entrance%2C_July_2023.JPG', cap: 'BCAM 入口（Renzo Piano）· Benoît Prieur / CC0' }
        ]
      },
      {
        id: 'disney-hall',
        n: 7,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Disney_Concert_Hall_%28Unsplash%29.jpg', cap: 'Disney Concert Hall 不锈钢曲面 · Brandon Smith / CC0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Disney_Concert_Hall_%2810920404614%29.jpg', cap: 'Gehry 钢帆的抽象曲面 · Daniel Hartwig / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/View_of_Walt_Disney_Concert_Hall_from_LA_City_Hall.jpg', cap: '自市政厅俯瞰音乐厅 · Levi Clancy / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'bradbury',
        n: 8,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Interior_of_the_Bradbury_Building_dllu.jpg', cap: 'Bradbury Building 天窗中庭 · Daniel L. Lu / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Bradbury_Building_Lobby.jpg', cap: '大堂与铸铁栏杆 · Visitor7 / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Bradbury_Building-3.jpg', cap: '笼形电梯与大理石楼梯 · Visitor7 / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'sixth-street-viaduct',
        n: 9,
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
            park: [34.0375, -118.2215],
            view: [34.036846, -118.221792]
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/6th_Street_bridge_Los_Angeles_Sunscape_1.jpg', cap: '第六街高架桥日落 · Downtowngal / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Los_Angeles_6th_Street_Bridge.jpg', cap: '拱肋序列 · Rcmrtnz96 / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/6th_Street_Bridge_Los_Angeles_Sunscape_2.jpg', cap: '桥体全景宽幅 · Downtowngal / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'vista-hermosa',
        n: 10,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/2013%2C_Vista_Hermosa_Natural_Park_-_panoramio.jpg', cap: 'Vista Hermosa 草甸与 Downtown 天际线 · Chris English / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Vista_Hermosa_Natural_Park%2C_2008.jpg', cap: '公园原生植被与步道 · Laurie Avocado / CC BY 2.0' }
        ]
      },
      {
        id: 'baldwin-hills',
        n: 11,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/View_from_Baldwin_Hills_Scenic_Overlook_-_Culver_City_-_Los_Angeles_-_California_-_USA_%2846257214935%29.jpg', cap: '自观景台俯瞰洛杉矶盆地 · Adam Jones / CC BY-SA 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Culver_City_Stairs.jpg', cap: 'Culver City Stairs 楼梯 · Accipitre / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Baldwin_Hills_Scenic_Overlook_%28Culver_City_Stairs%29_visitor%E2%80%99s_center.jpg', cap: '游客中心与原生灌丛 · Jengod / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'rodeo-drive',
        n: 12,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Written_%22BEVERLY_HILLS%22_in_Beverly_Gardens_Park.jpg', cap: 'Beverly Hills 招牌与睡莲池 · Andrek02 / CC0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Via_Rodeo_Drive.jpg', cap: 'Via Rodeo 鹅卵石斜坡 · Prayitno / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Rodeo_Drive_California.jpg', cap: 'Rodeo Drive 棕榈大道街景 · Prayitno / CC BY 2.0' }
        ]
      },
      {
        id: 'venice-canals',
        n: 13,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Los_Angeles_-_Venice_Canal_Historic_District_02.jpg', cap: 'Venice 运河与拱桥倒影 · Américo Toledano / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Los_Angeles_-_Venice_Canal_Historic_District_01.jpg', cap: '运河两岸住宅 · Américo Toledano / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Venice_canals_winter_evening.JPG', cap: '运河傍晚水面 · Satyajitc / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'muscle-beach',
        n: 14,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Muscle_Beach_Venice_Outdoor_Gym.jpg', cap: 'Muscle Beach 露天健身区 · DanielMichaelPerry / CC0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Venice_Beach_Boardwalk_Los_Angeles_2019.jpg', cap: 'Venice Boardwalk 街拍走廊 · Steven Lek / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Muscle_Beach_Venice_July_2023.JPG', cap: 'Muscle Beach 器械与看台 · Benoît Prieur / CC0' }
        ]
      },
      {
        id: 'santa-monica-pier',
        n: 15,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Santa_Monica_Pier_-_panoramio_%285%29.jpg', cap: 'Santa Monica 栈桥与摩天轮 · bynyalcin / CC BY 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Anglers_on_the_Santa_Monica_Pier.jpg', cap: '栈桥桥面与桥桩 · Jelson25 / Public domain' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Santa_Monica_and_Venice%2C_CA_%28September_2022%29_-_111.jpg', cap: '栈桥入口与霓虹 · Another Believer / CC BY-SA 4.0' }
        ]
      },
      {
        id: 'point-fermin',
        n: 16,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Point_Fermin_Lighthouse_%2846475598811%29.jpg', cap: 'Point Fermin 灯塔与白篱栅 · Ron Reiring / CC BY 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Point_Fermin_Lighthouse_-_San_Pedro%2C_California_%2811400358046%29.jpg', cap: '维多利亚木构与灯室 · Doug Kerr / CC BY-SA 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Point_Fermin_Lighthouse_%26_Flowers.jpg', cap: '灯塔与玫瑰花圃 · Cynthiastanley / CC BY-SA 4.0' }
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
          '前往此处需经 Palos Verdes Drive；<strong>该路穿越 Portuguese Bend 滑坡区的路段仍在持续沥青修补</strong>，轿车可通行但请减速、留意路面高差与横向裂缝，行前查 rpvca.gov/landmovement',
          '<strong>其他替代机位</strong>：Abalone Cove Shoreline Park（距 Wayfarers 原址仅约 350 米，有崖顶海景与潮池，但位于滑坡活跃区边缘，2026 年开放状态未能确认）；Terranea Resort 崖顶公共步道（California Coastal Trail 段，非住客停车通常收费）；Trump National Golf Club 崖顶眺望（公众通行范围未能确认）'
        ],
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Point_Vicente_Lighthouse_%2844623086120%29.jpg', cap: 'Point Vicente 灯塔与崖线 · Ron Reiring / CC BY-SA 2.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Parlos_Verdes_Light_House_Aug_2012.JPG', cap: '灯塔全景 · Mike Quach / CC BY-SA 3.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Point_Vicente_Lighthouse_on_Cliff.jpeg', cap: '崖顶白塔 · Nhostetler / CC BY-SA 3.0' }
        ]
      },
      {
        id: 'wayfarers-chapel',
        n: 18,
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
          { url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Wayfarers_Chapel_2018-2-19.jpg', cap: '拆解前的玻璃教堂（历史影像）· Sitao Xiang / CC BY-SA 4.0' },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Wayfarer%27s_Chapel_Plaza.jpg', cap: '教堂庭园（历史影像）· Prashila Amatya / CC BY-SA 4.0' }
        ]
      }
    ]
  },
