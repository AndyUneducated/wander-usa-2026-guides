/* 本文件由 tools/assemble.py 从 nyc/parts/*.js 自动生成，请勿直接编辑。
   要改内容请改对应片段后重新运行：python3 tools/assemble.py --region nyc
   景点已按纬度从北到南排序，n 字段为自动编号，与地图针脚一一对应。 */
var REGIONS = [
  {
    "id": "manhattan-midtown",
    "name": "Manhattan · Midtown 与观景台",
    "navName": "Midtown",
    "color": "#4da3ff",
    "lead": "这一区的成本结构和别处完全不同：四座观景台每张票 $42–79，是整份指南里最贵的单项支出，而它们的照片有大量重叠。<strong>所以本区真正需要决策的不是「去不去」，而是「去哪一座、几点进去」。</strong>结论先给：<strong>只去一座就去 Top of the Rock</strong>——它的 70 层是纽约唯一一处完全无玻璃、连眼平高度栏杆都没有的观景平台，Empire State Building 在正南 1.29 公里、Central Park 在正北 1.0 公里，转身 180 度两个题材全收。<strong>去第二座就去 Edge</strong>，它离 Statue of Liberty 只有 8.1 公里、朝南没有任何遮挡，是四座里下城与海港方向最强的；代价是全周边 2.7 米高的斜面玻璃，你必须隔着玻璃拍。Summit One Vanderbilt 的镜面房间是独立题材而不是天际线机位，<strong>它的玻璃反光是四座里最严重的</strong>（墙、地、顶三面镜子把反光量放大数倍）。<strong>四座全部禁三脚架</strong>，唯一的例外写在 Summit 的条款里：只禁「完全展开超过 12 英寸」的三脚架与独脚架——换句话说桌面脚架在这一座是合规的，另外三座连迷你脚架都要看保安心情。街面的六个点全部免费，其中 Grand Central Terminal 与 New York Public Library 是本区照片质量的真正天花板。三件季节性事实必须先知道：<strong>溜冰场 10 月 10 日开、圣诞树 11 月 7 日才到</strong>（10 月下旬能拍到冰面但拍不到树）、<strong>Manhattanhenge 在这个窗口里几何上不可能发生</strong>、<strong>纽约市的秋色要到 11 月 1–9 日才进入盛期</strong>，10 月 22 日从 Top of the Rock 往北看仍然是以绿色为主。",
    "callouts": [
      {
        "type": "info",
        "title": "四座观景台：哪一座拍什么（直接照抄）",
        "html": "<ul><li><strong>要 Empire State Building 进画面 → Top of the Rock。</strong>70 层完全开放、无玻璃，ESB 在方位 204°（正南偏西）、距离 <strong>1.29 公里</strong>，从 259 米高度看它的塔尖（443 米）是仰视的。塞满全画幅长边需约 <strong>105mm</strong>，所以 70–200mm 是主力、24–70mm 拍 ESB 加天际线关系。Summit 离 ESB 更近（795 米、方位 230°）、Edge 也看得到（1.40 公里、方位 64°），但这两座都要隔玻璃，而且拍不到「ESB 与 Central Park 各在一边」的对倒结构</li><li><strong>要 Central Park → Top of the Rock 70 层北栏。</strong>公园南缘距此 <strong>1.0 公里、正北</strong>，公园长 4 公里宽 800 米，16–24mm 收全园、35–50mm 拍公园配上 Central Park West 的塔楼群。ESB 距公园 3.5 公里，同样的画面在那里小一半且被中城楼群切断</li><li><strong>要 Statue of Liberty 与下城天际线 → Edge。</strong>自由女神距 Edge <strong>8.1 公里、方位 207°</strong>，是四座中最近的（Top of the Rock 9.5 公里、ESB 8.3 公里），而且 Edge 位于哈德逊河边、正南方向毫无楼群遮挡。<strong>但请把预期调低：8.1 公里外一座含基座 93 米的雕像，400mm 也只占画面高度约 19%</strong>，它是海港画面里的一个细节而不是主体。真正的收益是完整、不被切割的下城天际线</li><li><strong>玻璃与开放：这是四座之间唯一不可逆的差别。</strong>Top of the Rock 67 层室内玻璃、69 层室外无框玻璃、<strong>70 层完全无玻璃无栏杆</strong>；ESB 86 层是露天，但周圈有菱形钢丝网，<strong>把镜头从网孔里探出去即可完全无遮挡</strong>，102 层是落地玻璃全封闭；<strong>Edge 全周长 9 英尺（2.7 米）无框斜面玻璃</strong>（外倾 6.6°，可以靠上去），另有玻璃地板；Summit 91–92 层基本是室内玻璃盒子，加上镜面墙地顶，<strong>反光是四座里最难处理的</strong></li><li><strong>结论：追求反光零干扰的天际线 → Top of the Rock 70 层与 ESB 86 层，二选一。</strong>这两座是四座里唯一能让镜头前方没有任何玻璃的</li></ul>"
      },
      {
        "type": "warn",
        "title": "三脚架：四座全禁，只有 Summit 写了可执行的数字",
        "html": "<p>逐座核实的官方口径：</p><ul><li><strong>Empire State Building</strong>——官方禁带清单原文列有「Professional camera equipment and stands (tripods, monopods, bipods)」。<strong>楼内没有寄存柜</strong>（官方 FAQ 明确说明「There are no locker or storage facilities available on-site」），带去只能指望安检台临时收存，不要把它算进计划</li><li><strong>Top of the Rock</strong>——官方 FAQ 原文「Tripods are also not allowed」，自拍杆与额外摄影器材同样禁止，SKYLIFT 平台上另有一份更严的禁带清单。好消息是 <strong>70 层周圈有一圈混凝土矮台，把机身直接压在台面上是完全可行的替代方案</strong></li><li><strong>Edge</strong>——官方 FAQ 原文「Professional photographic equipment, video cameras, recording devices, tripods, and lights are not permitted」，自拍杆仅限室内。条款里还写明<strong>「large photographic equipment」属于禁带的 Large Items</strong></li><li><strong>Summit One Vanderbilt</strong>——禁带政策原文是「selfie sticks, tripods or monopods <strong>longer than 12&quot; fully extended</strong>」。<strong>这是四座里唯一给出数字门槛的一座，也就是说完全展开不超过 12 英寸（约 30 厘米）的桌面脚架在字面上是合规的。</strong>如果你一定要在中城高处架一次机器，这里是唯一有条款依据的地方——但请做好被安检人员按自由裁量拦下的准备，条款同时写明「the decisions of Summit One Vanderbilt personnel regarding the permissibility ... are final」</li></ul><p><strong>推论：蓝调时刻的长曝在四座上基本不成立。</strong>可执行方案是 ISO 1600–6400、f/1.4–f/2.8、开机身防抖、把机身压在混凝土台或钢丝网上，连拍 5–10 张挑最稳的一张。带一支大光圈定焦（24mm f/1.4 或 35mm f/1.4）比带任何支撑都实用。</p>"
      },
      {
        "type": "info",
        "title": "日出日落、方位角与蓝调窗口（照抄可用）",
        "html": "<ul><li><strong>9 月 25 日</strong>：日出 <strong>06:47（方位 91°）</strong>，日落 <strong>18:48（方位 269°）</strong>；民用曙暮光 06:19 / 19:15；太阳正午 12:48（高度 48.2°）</li><li><strong>10 月 10 日</strong>（窗口中点）：日出 07:02，日落 18:24；民用曙暮光 06:34 / 18:51</li><li><strong>10 月 22 日</strong>：日出 <strong>07:15（方位 104°）</strong>，日落 <strong>18:06（方位 256°）</strong>；民用曙暮光 06:47 / 18:33；太阳正午 12:40（高度 38.0°）</li><li><strong>夏令时 2026 年 11 月 1 日才结束，整个窗口都是 EDT，不需要任何换算。</strong>但请注意日落在 27 天里提前了整整 42 分钟，10 月下旬 18:06 就天黑，意味着<strong>整个下午到日落之间只剩很短的时间，别把两座观景台排在同一个傍晚</strong></li><li><strong>蓝调窗口——本区最有价值的一条时间信息。</strong>城市灯光已全亮而天空仍有深蓝底色的重叠区间是<strong>日落后 15 到 40 分钟</strong>，核心 20–30 分钟：<strong>9/25 是 19:03–19:28、10/22 是 18:21–18:46</strong>。所有好的天际线照片都是在这 25 分钟里拍成的，早 15 分钟天太亮灯不显、晚 15 分钟天空变死黑、画面只剩一堆亮点</li><li><strong>所以票要订在日落前 60–75 分钟的时段：9/25 订 17:30–17:45，10/22 订 16:45–17:00。</strong>四座都要过机场级安检加排电梯，实测从进门到站上平台 20–40 分钟；你需要在金光时段就到位占好栏杆位置，因为蓝调一开始栏杆前不会再有空隙</li><li>Manhattan 网格的横街方位角是 <strong>299°/119°</strong>。本窗口日落方位从 269° 退到 256°，<strong>比街轴偏南 30–43 度</strong>，这就是 Manhattanhenge 只发生在 5 月底与 7 月中的原因（详见下一条）</li></ul>"
      },
      {
        "type": "warn",
        "title": "季节现实：冰场开了、树没到、Manhattanhenge 不在、秋色还早",
        "html": "<ul><li><strong>The Rink at Rockefeller Center 2026 季于 10 月 10–11 日开放</strong>（不同来源给 10/10 与 10/11，官方尚未在页面上固定单一日期）。也就是说 <strong>9 月下旬去只有空的下沉广场，10 月中旬之后才有冰面与滑冰者</strong>——这两张照片完全不是一回事</li><li><strong>圣诞树 11 月 7 日清晨运抵并当天 07:00 吊装，12 月 2 日点灯。</strong><strong>整个 9 月下旬到 10 月下旬的窗口里都没有树。</strong>网上 Rockefeller Center 那些「冰场 + 巨树 + 金色 Prometheus」的招牌照片，这次一张都复刻不了，请提前把预期改成「Art Deco 广场 + Prometheus + 旗阵」</li><li><strong>Manhattanhenge 在这个窗口里不会发生，明确说清楚以免你白等。</strong>2026 年的四个日期是 <strong>5 月 28 日（半日）、5 月 29 日（全日）、7 月 11 日（全日）、7 月 12 日（半日）</strong>（AMNH 官方口径，时刻 20:13–20:21 EDT），另有 1 月 11–12 日的日出版 Reverse Manhattanhenge。原因就是几何：横街轴线 299°，而 9 月底到 10 月底的日落方位在 269°→256° 之间，<strong>差 30–43 度，物理上不可能对齐</strong></li><li><strong>纽约市秋色：Old Farmer’s Almanac 2026 版预测本市在 11 月 1 日前后进入盛期</strong>，第三方物候追踪给出的盛期区间是 <strong>11 月 4–12 日</strong>。纽约是全州最晚的一批，Adirondacks 9 月底就开始、一路向南推进到 10 月。<strong>结论：10 月 22 日从 Top of the Rock 往北看 Central Park，处于「早期变色」阶段——红枫与山茱萸已经转色、糖枫与栎树还是绿的，整体基调仍偏绿。</strong>想要满树金红的 Central Park 俯瞰，需要 11 月第一周之后，本窗口拿不到</li></ul>"
      },
      {
        "type": "tip",
        "title": "多景点通票：只逛 2–3 座观景台的人不要买",
        "html": "<p>2026 年四种票的实价：<strong>New York CityPASS $164–169</strong>（9 天，5 项，Empire State Building 与 American Museum of Natural History 两项强制 + 6 选 3，含 Top of the Rock，<strong>不含 Edge 与 Summit</strong>）；<strong>C3 by CityPASS $114</strong>（9 天，10 选 3，含 Edge 与 MoMA）；<strong>Go City Explorer $89（2 选）/ $119–129（3 选）</strong>（30 天，107 项，含 ESB、Top of the Rock、Edge、Summit、One World）；<strong>Go City All-Inclusive $169（1 天）/ $194–219（2 天）/ $269（3 天）</strong>。</p><p><strong>算账：</strong>只上两座（Top of the Rock $42 + ESB $44 + $5 手续费 = $91）对 Explorer 2 选 $89，省 $2。上三座（再加 Summit 平日 $43 ≈ $135）对 Explorer 3 选 $119，省 $16。CityPASS 强制捆绑 AMNH（单价 $28）——<strong>纯摄影行程大概不会去自然史博物馆，那 $28 就是白扔，CityPASS 直接变成亏</strong>。C3 的 $114 对应 Edge $42 + Top of the Rock $42 + MoMA $30 = $114，<strong>省 $0</strong>。</p><p><strong>结论：不值，除了一种情况。</strong>摄影行程只买单张票，因为<strong>通票买到的是入场权而不是你要的那个日落时段</strong>——所有四座都是定时票，日落档最先售罄，而通票需要另行预约时段。你在一趟行程里只有一两个晴朗傍晚，为了省 $16 去赌那晚能不能约到 17:30 的档，是明显的坏交易。<strong>只有当你另外还要去 4 项以上收费景点（9/11 博物馆、One World、观光船、大巴等），Go City Explorer 5 选 $179 才开始真的划算。</strong>另需注意：<strong>Edge 的 City Climb 与 Top of the Rock 的 SKYLIFT 不含在任何通票里</strong>，必须单独付费。通票能否锁定具体日落时段，<strong>未能从各官方渠道逐一确认</strong>，请以购买页面当日说明为准。</p>"
      }
    ],
    "spots": [
      {
        "id": "top-of-the-rock",
        "n": 1,
        "name": "洛克菲勒中心观景台",
        "en": "Top of the Rock",
        "score": 5,
        "tldr": "70 层无玻璃，Empire State Building 在正南、Central Park 在正北，转身两题材全收。",
        "tags": [
          {
            "t": "成人 $42 起",
            "c": "paid"
          },
          {
            "t": "70 层无玻璃",
            "c": "free"
          },
          {
            "t": "禁三脚架",
            "c": "risk"
          },
          {
            "t": "日落档必抢",
            "c": "risk"
          }
        ],
        "highlights": [
          "30 Rockefeller Plaza（1933 年落成，原名 RCA Building，后为 GE Building，现称 Comcast Building）顶部的三层观景区：<strong>67 层室内 250 米、69 层室外配无框玻璃 256 米、70 层完全开放 259 米</strong>。关键在 70 层：<strong>平台是从楼体边缘向内退进的，所以你走到周边时眼平高度既没有玻璃也没有栏杆</strong>，这是纽约唯一一处做到这一点的公众观景平台",
          "它的不可替代性不是高度（259 米，四座里最矮）而是几何位置：<strong>Empire State Building 在方位 204°、距 1.29 公里；Central Park 南缘在正北、距 1.0 公里。一个平台上转身 180 度，纽约最著名的两个俯瞰题材各在一边。</strong>这是所有其他观景台都做不到的——因为它们要么身在 ESB 之内，要么离 Central Park 太远",
          "因为没有玻璃，这里也是四座里唯一<strong>不需要处理反光、指纹、镀膜偏色、以及室内灯反射</strong>的地方。摄影上的差别不是「稍好」而是「另一个量级」：隔玻璃拍夜景，室内灯的反射会在天空亮部里叠出一层洗不掉的灰雾，后期无法完全消除",
          "<strong>SKYLIFT 是 2024 年 10 月新增的开放式旋转平台</strong>，从 70 层再升高 9.1 米（离地约 268 米），单次 3.5 分钟。它<strong>不能单独预订</strong>：现场加购 $35，或选 SKYLIFT + Admission（$57 起）、All-Inclusive（$72 起）、VIP Pass（$185–207，含私人导览与专属 Beam）。平台上的禁带清单比观景台本身更严，<strong>三脚架、自拍杆、任何额外摄影器材、以及无法固定的松散物品全部禁止</strong>——把它当作一次没有相机的体验，别指望在上面拍到东西",
          "<strong>The Beam Experience 是 69 层的付费摆拍装置</strong>，复刻 1932 年那张「Lunch Atop a Skyscraper」（民工坐在钢梁上吃午饭）的构图，需 Beam Combo（$73 起）或 VIP Pass，身高门槛 42 英寸。<strong>它不包含在普通门票里，且经常售罄</strong>"
        ],
        "photo": "城市天际线 <strong>5/5</strong>，建筑 <strong>4.5/5</strong>，人像 <strong>4/5</strong>，风光 <strong>3/5</strong>。无玻璃这一条足以让它成为纽约出片率最高的高处机位；扣分只因禁三脚架让长曝路线彻底走不通，且日落时段南栏基本挤不进去。",
        "shots": [
          {
            "name": "70 层南栏（Empire State Building 招牌构图）",
            "desc": "<strong>9/25 的 19:03–19:28、10/22 的 18:21–18:46 是唯一的核心窗口</strong>——日落后 15–40 分钟，ESB 的塔冠 LED 与整片中城灯网已亮，天空仍有深蓝底。ESB 在方位 204°、距 1.29 公里、塔尖 443 米，<strong>从你所在的 259 米看它是仰视的</strong>；<strong>竖构图塞满全画幅长边需约 105mm</strong>，所以 <strong>70–200mm 是主力焦段</strong>，把 ESB 压成画面主体、两侧楼群夹成走廊。24–70mm 拍 ESB 与整片中城的关系，广角端会让 ESB 明显偏小。<strong>禁三脚架，把机身直接压在周圈混凝土矮台上</strong>，ISO 1600–3200、f/2–f/2.8、1/15–1/30s，连拍挑片。南栏在日落前 30 分钟就会站满，<strong>请在金光时段（9/25 的 18:00 前、10/22 的 17:20 前）就占位并守住</strong>。",
            "view": [
              40.759034,
              -73.979395
            ]
          },
          {
            "name": "70 层北栏（Central Park 全景）",
            "desc": "<strong>清晨开门后 08:00–09:30 最佳</strong>，此时太阳在东南（方位 91–104°），公园与两侧 Central Park West、Fifth Avenue 的塔楼群受侧前方光照，立体感最强，而且平台上几乎没人。公园南缘距此 1.0 公里正北，全园长 4 公里、宽 800 米：<strong>16–24mm 才能把公园完整收进一张</strong>，35–50mm 拍公园配 Central Park West 的双塔剪影（San Remo、Beresford、Eldorado 一线）。<strong>10 月 22 日这里仍以绿色为主</strong>（纽约盛期 11/1–11/9），想拍秋色请把期待放在零散的红枫点缀而不是成片金红。坐标为 30 Rockefeller Plaza 建筑 OSM 中心点，平台在其正上方。",
            "view": [
              40.759123,
              -73.979556
            ]
          },
          {
            "name": "69 层无框玻璃层（夜景玻璃散景与 Beam）",
            "desc": "<strong>纯夜间机位，20:30 之后最好。</strong>69 层周圈是室外无框安全玻璃，白天它只是 70 层的次选，但<strong>入夜后玻璃边缘会把远处灯点折出细长的光斑，是 70 层拍不到的效果</strong>。技巧是<strong>把镜头贴住玻璃面板的接缝边缘拍，可以完全避开反光</strong>；或反过来利用玻璃拍城市灯点的虚化前景。The Beam 装置也在这一层。35–85mm 为主。<strong>无独立 OSM 实体，与 1 号机位同在 30 Rockefeller Plaza 楼内，地图不重复打针。</strong>"
          }
        ],
        "access": {
          "book": "<strong>必须网上预订定时票</strong>（rockefellercenter.com 或 topoftherocknyc.com），门票当日全天有效——<strong>订日落前 60 分钟的档，可以一票拍完金光、日落、蓝调三段</strong>。<strong>日落档是全天最先售罄的，平日建议提前 1–2 周、周末与假日提前 2–4 周</strong>。SKYLIFT 无法单独预订，只能现场加购 $35 或买含 SKYLIFT 的票种",
          "ticket": "<strong>Timed Admission 成人 $42 起</strong>（第三方聚合站常报 $45，实为动态定价、周末与日落档浮到 $49–52）；儿童 $38 起、长者 $42 起、<strong>5 岁以下免费</strong>。Skip-the-line $82 起。Beam Combo $73 起。SKYLIFT + Admission $57 起，All-Inclusive $72 起，VIP Pass $185–207。RockMoMA 组合票 $63 起（含 MoMA）",
          "hours": "官方：<strong>每日 08:00–24:00，末班电梯 23:10</strong>，全年 365 天开放。平安夜与跨年夜 22:00 关、末班电梯 21:10。<strong>这是本区四座观景台里营业最晚的一座（与 Summit 并列），比 Empire State Building 晚一小时</strong>",
          "parking": "<strong>不要开车</strong>，中城路边表位与停车楼在这一带日间 $30–60 且极难找。地铁 <strong>B/D/F/M 线「47-50 Streets–Rockefeller Center」站</strong>，出站即达；N/Q/R/W 线「49 St」、1 线「50 St」亦在两个街区内",
          "walk": "<strong>入口在 50th Street、Fifth 与 Sixth Avenue 之间</strong>（30 Rock 南侧，认红地毯），另有 30 Rockefeller Plaza 地下层入口。地铁出站到入口 <strong>2 分钟</strong>；<strong>入口到 70 层平台含安检与两段电梯实测 20–40 分钟，请按 30 分钟预留</strong>"
        },
        "notes": [
          "<strong>三脚架、独脚架、自拍杆一律禁止</strong>（官方 FAQ「Tripods are also not allowed」）。有第三方来源称迷你脚架架在混凝土矮台上可能被放行，<strong>该说法未能在官方渠道确认</strong>，请按「不能架」做准备",
          "<strong>大包与行李箱禁止入场，且场内不提供任何寄存</strong>（官方原文「Storage is not available on site」）。官方未公布尺寸数字，实务上小挎包、腰包、单肩包可过；<strong>一个装两机三镜的摄影背包属于高风险，请精简到一机两镜</strong>",
          "外带食物饮料禁止，玻璃瓶、打火机、易燃物、任何刀具（含瑞士军刀、笔刀）禁止。全员过安检门加开包检查",
          "<strong>70 层完全露天且没有挡风</strong>，259 米高度风速常比地面高一个量级。10 月傍晚体感明显低于地面气温，<strong>务必带风衣与帽子，帽子要能扣住</strong>；同时注意任何松散物品（镜头盖、滤镜、遮光罩）掉下去是重大事故，Summit 与本处均明确将抛物列为可能构成重罪",
          "SKYLIFT 在极端天气下会关闭，能否运行只能到场问工作人员。它在 70 层西侧，有专用电梯",
          "<strong>最省钱也最出片的时段是开门第一档（08:00–09:00）的工作日</strong>：价格在动态定价的低点、平台上几乎无人、且东南方向来的晨光正好打亮 Central Park 一侧",
          "票价另有动态浮动，<strong>周二至周四同一时段通常比周五周六便宜约 $5、人流少一半、画面完全一样</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Empire_State_Building_at_Night_from_Top_of_the_Rock_%2826453938287%29.jpg",
            "cap": "自 Top of the Rock 夜拍 Empire State Building · Nan Palmero / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/39/NYC_Top_of_the_Rock_Pano.jpg",
            "cap": "70 层无玻璃平台全景 · Daniel Schwen / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/54/Top_of_30_Rock_%286279766362%29.jpg",
            "cap": "观景平台与周圈混凝土矮台 · Erik Drost / CC BY 2.0"
          }
        ]
      },
      {
        "id": "st-patricks-cathedral",
        "n": 2,
        "name": "圣帕特里克主教座堂",
        "en": "St. Patrick's Cathedral",
        "score": 3.5,
        "tldr": "免费、每天 06:30–20:45；正立面整季在阴影里，主风琴已拆走送修到 2027 春。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "每天 06:30–20:45",
            "c": "free"
          },
          {
            "t": "禁三脚架禁闪光",
            "c": "risk"
          },
          {
            "t": "主风琴已拆除",
            "c": "risk"
          }
        ],
        "highlights": [
          "James Renwick Jr. 设计的新哥特式主教座堂，1858 年奠基、南北战争期间停工、<strong>1879 年 5 月 25 日祝圣</strong>，双尖塔 1888 年完成、高 <strong>101 米</strong>——落成时是全纽约最高的结构物。堂长 124 米、宽 53 米，坐 2,400 人，北塔挂 <strong>19 座 1897 年法国铸造的钟</strong>，每座以不同圣徒命名。玫瑰窗直径 8 米，第五大道那两扇青铜门每扇重 <strong>4,082 公斤</strong>",
          "<strong>本窗口最重要的现场变化：主风琴与中殿风琴已被拆走。</strong>据教堂官网，Casavant Frères（魁北克 Saint-Hyacinthe）于 <strong>2025 年 5 月 12 日开始拆卸Gallery Organ 与 Nave Organ，预计 2027 年春季修复完成后运回</strong>（Chancel Organ 已于 2025 年 3 月装回、4 月 4 日完成调音）。<strong>意味着：第五大道入口上方玫瑰窗下的那面风琴管立面目前是空的</strong>，而且拆卸时在唱经楼搭了大型作业平台。想拍「玫瑰窗 + 风琴管」这个经典正对构图的，这次拍不到——1928 年那台 Kilgen 已服役 97 年",
          "<strong>光线上的硬约束（据 OSM 坐标与建筑高度推算）：正立面朝西，而正对面 630 Fifth Avenue（International Building）高 156 米、街宽只有约 30 米、退距约 100 米。要让阳光越过它照到立面需要太阳高度超过 58 度，本窗口正午最高 48.2 度。也就是说这个季节正立面全天没有直射光，永远是开放阴影。</strong>这对拍白色大理石细节其实有利（无爆高光、反差温和），但别期待暖光正面立面照",
          "2012–2015 年做过 <strong>1.77 亿美元</strong>的全面修复（Murphy Burnham & Buttrick 主持，起因是外立面开始掉石块），清洗了全部外墙大理石、修复了 3,000 片彩窗、重涂天顶、换了地面与台阶，<strong>脚手架 2016 年 7 月全部拆除</strong>。<strong>核实结果：目前教堂本体没有任何大面积围挡或脚手架</strong>（2026 年那份 1.9 亿元「St Patrick’s 修复计划」的新闻指的是墨尔本的同名教堂，不是纽约）",
          "它仍然是一座高强度运转的堂区教堂：<strong>周一至周五每天六台弥撒（07:00、07:30、08:00、12:00、13:00、17:30），周日八台（含 10:15 的大礼弥撒与 16:00 的西班牙语弥撒）</strong>。弥撒进行时中殿主通道不能站人拍照，这是本条目最实际的时间约束"
        ],
        "photo": "建筑 <strong>4/5</strong>，室内 <strong>4/5</strong>，人像 <strong>2/5</strong>，夜景 <strong>3.5/5</strong>。免费加长营业时间是它的最大优势；扣分因为立面整季无直射光、主风琴缺席、且弥撒时段会切掉大量可拍时间。",
        "shots": [
          {
            "name": "中殿中轴线仰拍（室内招牌）",
            "desc": "<strong>工作日 08:45–11:45 与 14:00–17:00 是唯一干净的两个窗口</strong>（避开 07:00/07:30/08:00/12:00/13:00/17:30 六台弥撒）。<strong>晴天的 10:00–14:00 最好</strong>：此时高侧窗的彩玻璃透光最足，在中殿柱列与拱肋上投出彩色光斑，这是这座教堂最值得拍的东西。<strong>16–24mm 竖构图站主通道正中</strong>，让两侧柱列汇聚到远处的白色大理石主祭台。<strong>光比是最大难点：彩窗与柱列阴影常超过 8 EV</strong>，按窗测光则中殿全黑、按中殿测光则窗全爆——<strong>请拍 ±2EV 的 5 张包围做 HDR</strong>，或直接放弃窗内细节拍纯剪影柱列。<strong>禁三脚架，ISO 1600–6400、f/2–f/2.8、1/40–1/60s、开机身防抖</strong>。坐标为 OSM 教堂面要素中心点。",
            "view": [
              40.758558,
              -73.976364
            ]
          },
          {
            "name": "630 Fifth Avenue 前庭望立面与双尖塔",
            "desc": "<strong>正午到 14:00 拍开放阴影版本，或蓝调（9/25 的 19:03–19:28、10/22 的 18:21–18:46）拍泛光版本。</strong>立面整季没有直射光（见 highlights 的推算），所以<strong>不要为「金光打亮尖塔」等待，它不会发生</strong>。实用做法有两条：一是<strong>阴影光下用 24–35mm 从街对面前庭仰拍</strong>，白色大理石在均匀光下细节最完整，后期只需提对比；二是<strong>蓝调时拍泛光立面配深蓝天空</strong>，这是这个立面全年最强的形态。第五大道街宽有限、双尖塔 101 米，<strong>16–20mm 才能把两塔完整收进竖构图</strong>，<strong>务必在后期修正透视，否则塔身会明显外张</strong>；85–135mm 拍单塔的尖顶细节与雕饰。这个站位就在 Atlas 雕像旁，坐标沿用同一 OSM 节点。",
            "view": [
              40.758948,
              -73.97718
            ]
          },
          {
            "name": "侧廊、Pietà 与 Lady Chapel",
            "desc": "<strong>同样是 08:45–11:45 与 14:00–17:00。</strong>主祭台后方的 Pietà 体积是梵蒂冈那尊米开朗基罗的三倍，东端 Lady Chapel（1901–1906 年增建）的彩窗由 Paul Vincent Woodroffe 于 1912–1930 年间完成，<strong>光线比中殿柔和得多，是这座教堂里最适合中长焦的地方</strong>。35–85mm 拍侧廊 21 座小祭台的重复韵律，85–135mm 拍雕像与彩窗局部。<strong>有第三方来源称 Lady Chapel 内禁止拍照，该说法未能在官方渠道确认</strong>——进门前请看门口标识，看到禁拍牌就收机器。<strong>无独立 OSM 实体，与 1 号机位同在教堂内，地图不重复打针。</strong>"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>，直接进。官方自助语音导览另行售票（约 1 小时，现场取机）；10 人以上团体导览需提前电话预约",
          "ticket": "<strong>免费</strong>（接受捐赠）。自助语音导览另收费",
          "hours": "<strong>官方口径：每日 06:30–20:45，全年无休。</strong><strong>但「开门」不等于「可以随便拍」</strong>：弥撒时段（周一至周五 07:00、07:30、08:00、12:00、13:00、17:30；周六 08:00、12:00、17:30；<strong>周日 07:00、08:00、09:00、10:15 大礼、12:00、13:00、16:00 西班牙语、17:30</strong>）中殿主通道不得站人拍照。<strong>有第三方来源称周日不提供参观导览（Sunday closed for tours），该说法未能在教堂官网确认</strong>，但周日八台弥撒几乎排满全天，<strong>纯摄影目的请避开周日</strong>",
          "parking": "<strong>不要开车。</strong>地铁 E/M 线「Fifth Avenue–53 St」步行 3 分钟；B/D/F/M 线「47-50 Streets–Rockefeller Center」步行 4 分钟；6 线「51 St」步行 5 分钟",
          "walk": "第五大道正门在 50th 与 51st Street 之间（东侧）。<strong>正门排队时改走 50th 或 51st Street 的侧门，通常没人且更靠近中殿</strong>。有安检，高峰时段 3–8 分钟。从 Rockefeller Center 下沉广场步行 <strong>200 米 / 3 分钟</strong>"
        },
        "notes": [
          "<strong>三脚架、独脚架与闪光灯明确禁止</strong>，手持相机与手机可以。专业与商业拍摄需事先获得书面许可",
          "<strong>这是运转中的教堂而不是博物馆。</strong>随时可能有信众在祈祷、告解或参加弥撒；请把快门声关掉、不要对着祈祷者拍脸、不要越过祭台栏杆",
          "<strong>Gallery Organ 与 Nave Organ 自 2025 年 5 月 12 日起已拆走送往加拿大，预计 2027 年春回装</strong>。第五大道入口上方玫瑰窗下的风琴管立面目前是空的，这个季节复刻不了「玫瑰窗 + 风琴」的经典构图",
          "因禁三脚架加高光比，<strong>务必 ISO 1600–6400 起步并带 f/1.4–f/2.8 的广角</strong>；室内是彩窗日光 + 暖色吊灯 + 烛光的混合光源，<strong>自动白平衡会左右摇摆，请拍 raw 并按 3200–3600K 定基调再单独处理窗户</strong>",
          "入口有安检，大包与三脚架袋会被要求打开。<strong>场内不提供寄存</strong>",
          "正立面全季无直射光这一点是几何推算（<strong>推算</strong>，依据 OSM 坐标与 630 Fifth Avenue 的 156 米高度），不是官方信息；到场后可用手机指南针与实际阴影快速自查"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/1f/NYC_-_St._Patrick%27s_Cathedral_-_Interior.JPG",
            "cap": "中殿中轴线与主祭台 · Jean-Christophe BENOIST / CC BY 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Spires_of_St_Patricks_Cathedral_Rising_Above_Fifth_Avenue_2019-09-30_18-19.jpg",
            "cap": "第五大道上的双尖塔 · Axel Tschentscher / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/20/St-Patricks-Cathedral_renovated-interior-1.jpg",
            "cap": "2015 年修复后的室内拱肋与柱列 · GordonStrong / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "rockefeller-center-fifth-ave",
        "n": 3,
        "name": "洛克菲勒中心与第五大道",
        "en": "Rockefeller Center and Fifth Avenue",
        "score": 4,
        "tldr": "Channel Gardens 中轴线与 Prometheus 全天免费；冰场 10/10 开、树 11/7 到。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "24 小时可拍",
            "c": "free"
          },
          {
            "t": "10/10 才开冰场",
            "c": "risk"
          },
          {
            "t": "窗口内无圣诞树",
            "c": "risk"
          }
        ],
        "highlights": [
          "1930 年代建成的 19 栋 Art Deco 建筑群，核心是一条从 Fifth Avenue 向西的下坡步道 <strong>Channel Gardens</strong>（名字来自它把 La Maison Française 与 British Empire Building 隔开，如英吉利海峡），尽头正对 259 米的 30 Rockefeller Plaza。<strong>这条中轴线的方位角是 299°/119°（曼哈顿网格横街轴），是全纽约最强的人造透视走廊之一</strong>",
          "Paul Manship 的 <strong>Prometheus（1934）</strong>：镀金青铜、长 5.5 米、重 8 吨，悬在下沉广场东壁前，身下是一圈黄道十二宫铭环。<strong>它是全美被拍摄次数最多的公共雕塑之一，而它成立的前提是背后那面水幕或冰面</strong>——这就是为什么冰场开与不开会彻底改变这张照片",
          "Lee Lawrie 的 <strong>Atlas（1937）</strong>：4.5 米高青铜像，连基座总高 <strong>14 米（45 英尺）</strong>，立在 630 Fifth Avenue（International Building，1935 年落成、41 层、<strong>156 米</strong>、Raymond Hood 设计、<strong>只用 136 天建成</strong>）的前庭正中，肩上顶着一个镂空的黄道天球。<strong>它正对街的东侧就是 St Patrick’s Cathedral，「Atlas 前景 + 哥特尖塔背景」是这一带最有辨识度的街面构图</strong>",
          "<strong>冰场（The Rink at Rockefeller Center）2026 季于 10 月 10–11 日开放</strong>（多个来源分别给出 10/10 与 10/11，官方尚未固定单一日期），运营到次年 4 月初，每场 40–60 分钟、含租鞋 $40–70、同时只容 150 人。<strong>9 月下旬去只有一个空的下沉广场（夏季这里是露天餐座），10 月中旬之后才有冰</strong>",
          "<strong>圣诞树 11 月 7 日清晨运抵、当天 07:00 吊装，12 月 2 日点灯，所以整个 9/25–10/22 窗口都拍不到树。</strong>请把这一点当作既定事实来规划构图——不要按网上那些「冰场 + 巨树 + 金色 Prometheus」的照片设定目标"
        ],
        "photo": "建筑 <strong>4.5/5</strong>，雕塑 <strong>4.5/5</strong>，人像 <strong>3.5/5</strong>，夜景 <strong>4/5</strong>。免费、24 小时、夜间打灯，是本区性价比最高的街面点位；扣分因为这个季节缺了冰面与圣诞树两个最强元素，且白天人流极密。",
        "shots": [
          {
            "name": "Channel Gardens 中轴线望 30 Rock",
            "desc": "<strong>最佳是清晨 07:00–08:30 与蓝调（9/25 的 19:03–19:28、10/22 的 18:21–18:46）。</strong>中轴线朝 299°（西北偏西），<strong>本窗口日落方位 269°→256°，比街轴偏南 30–43 度，所以日落不会落在轴线尽头</strong>——不要为这个等。清晨的价值在人少：这条 60 米长的步道白天几乎不可能拍到空景。<strong>24–35mm 竖构图</strong>，压低机位让步道两侧花坛与铜制水池喷口形成引导线，30 Rock 楼体收在正中；<strong>70–200mm 从 Fifth Avenue 人行道端压缩，把楼体拍成填满画面上半的墙</strong>。坐标为 OSM Channel Gardens 步道中心点。",
            "view": [
              40.758446,
              -73.977956
            ]
          },
          {
            "name": "下沉广场 Prometheus 与旗阵",
            "desc": "<strong>蓝调是唯一的最佳窗口</strong>：泛光灯把镀金像打亮，而周圈约 200 面万国旗在这个时段仍能看清颜色。<strong>请先确认日期：10 月 10–11 日之前身后是空广场或餐座，之后才是冰面。有冰面时从广场西侧栏杆俯拍，让冰面反射把 Prometheus 与 30 Rock 一起翻上来</strong>；没有冰面时改成 85–135mm 拍雕像本身与黄道铭环的局部，避开空荡的地面。像身长 5.5 米、距栏杆约 20 米，<strong>50mm 拍雕像加背景楼体、135mm 拍上半身与天球特写</strong>。这里禁不禁三脚架无明文规定，但这是私人物业的公共通道，架起来大概率会被保安要求收起。",
            "view": [
              40.758705,
              -73.978578
            ]
          },
          {
            "name": "Atlas 前庭望 St Patrick’s 尖塔",
            "desc": "<strong>正午到 14:00 的开放阴影光，或蓝调后的泛光版本。</strong>Atlas 到教堂的方位是 <strong>122°（东偏南）、距离仅 81 米</strong>，<strong>16–24mm 从雕像西侧压低仰拍，让 14 米高的 Atlas 占据画面下三分之二、101 米的双尖塔从他肩后升起</strong>。关键的光线事实（据 OSM 坐标与建筑高度<strong>推算</strong>）：你身后的 630 Fifth Avenue 高 156 米、离教堂正立面只有约 100 米，<strong>要让阳光越过它照到教堂需要太阳高度超过 58 度，而本窗口正午最高只有 48.2 度</strong>——也就是说<strong>教堂立面与这条视线在整个 9 月底到 10 月底全天都处在阴影里</strong>。好处是白色大理石不会过曝、反差温和；代价是永远拍不到暖光正面。入夜后教堂立面有泛光照明，蓝调版本反而是这条视线最强的形态。",
            "view": [
              40.758948,
              -73.97718
            ]
          },
          {
            "name": "冰场东侧栏杆俯拍（仅 10/10 之后成立）",
            "desc": "<strong>10 月 10–11 日开季之后才有意义，最佳时段 18:30 之后的灯光时段与开门首场（约 09:00）。</strong>冰面尺寸约 37×18 米、同时 150 人，<strong>1/250s 以上才能定住滑行者</strong>，想要拉丝效果用 1/8–1/15s 追随。35–85mm 从东侧栏杆俯拍，<strong>把 Prometheus 放在画面一侧、滑冰者的运动轨迹放另一侧</strong>。<strong>10 月人少、票价低、且没有 12 月那种排队进场的密度</strong>，是本季唯一的优势。坐标为 OSM 冰场面要素中心点。",
            "view": [
              40.758679,
              -73.978392
            ]
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>（广场、步道、雕塑全为开放空间）。滑冰需另行网上预约时段票，12 月起必须提前订，10 月现场买通常有位",
          "ticket": "<strong>免费</strong>（广场、Channel Gardens、Prometheus、Atlas 全部免费）。滑冰含租鞋 $40–70/人",
          "hours": "<strong>广场与步道为开放城市空间，实际上 24 小时可拍</strong>，夜间泛光照明整夜开启。冰场约 09:00–24:00（<strong>2026 季 10 月 10–11 日开放，具体开季日期官方尚未固定</strong>）。Atlas 所在的 630 Fifth Avenue 前庭为室外，同样全天可进；<strong>各楼大堂内部按办公楼时间，且不欢迎摄影</strong>",
          "parking": "<strong>不要开车。</strong>地铁 B/D/F/M 线「47-50 Streets–Rockefeller Center」站直达广场地下层；E/M 线「Fifth Avenue–53 St」步行 5 分钟",
          "walk": "地铁出站到 Channel Gardens 与下沉广场 <strong>2–3 分钟</strong>；Channel Gardens 东端（Fifth Avenue）到西端下沉广场约 <strong>60 米</strong>；下沉广场到 Atlas 前庭约 <strong>170 米 / 3 分钟</strong>；到 St Patrick’s 正门约 <strong>200 米 / 3 分钟</strong>"
        },
        "notes": [
          "<strong>这是私人物业上的公共通道</strong>，不是市政公园。手持拍摄没问题，<strong>三脚架与任何看起来像商业拍摄的架势会被保安要求停止</strong>，正式商拍需向 Tishman Speyer 物业申请",
          "<strong>Channel Gardens 与下沉广场是全中城人流密度最高的几十米之一</strong>，10:00–20:00 基本不存在「拍到空景」这回事。想要干净画面只有 07:00–08:30 一个窗口",
          "广场周边有大量团队导游、街头表演与扮装人物（部分会索费）。<strong>拿出大机器会被主动搭话，请预设会被打断</strong>",
          "Prometheus 与 Atlas 的泛光照明整夜开启，<strong>不存在「等灯亮」，要等的是天空暗到与灯光同亮度的那 25 分钟</strong>",
          "<strong>2026 年的圣诞树要到 11 月 7 日才吊装、12 月 2 日才点灯，本窗口内一定拍不到。</strong>同理，Saks Fifth Avenue 对街的灯光秀也是 11 月下旬才开始",
          "Fifth Avenue 沿线（尤其 49th–51st）是中城最容易遇到临时脚手架的路段。<strong>教堂与 630 Fifth 本体目前均无大面积围挡</strong>，但周边商铺立面的临时棚架年年都有，构图时留意画面下缘"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Channel_Gardens_Rockefeller_Center_New_York_2022.jpg",
            "cap": "Channel Gardens 中轴线望 30 Rockefeller Plaza · Larry D. Moore / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/52/PROMETHEUS%2C_Rockefeller_Center%2C_New_York%2C_NY.jpg",
            "cap": "下沉广场的镀金 Prometheus · Peter K Burian / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Atlas-Rockefeller_Center.jpg",
            "cap": "Lee Lawrie 的 Atlas 与其身后的第五大道 · P. Hughes / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "edge-hudson-yards",
        "n": 4,
        "name": "Edge 悬空观景台",
        "en": "Edge at Hudson Yards",
        "score": 4.5,
        "tldr": "西半球最高室外平台，朝南无遮挡，下城与自由女神方向最强；但全周斜面玻璃必须隔着拍。",
        "tags": [
          {
            "t": "成人 $42 起",
            "c": "paid"
          },
          {
            "t": "提前 14 天 $34",
            "c": "paid"
          },
          {
            "t": "全周玻璃围挡",
            "c": "risk"
          },
          {
            "t": "包尺寸 9×14×22 吋",
            "c": "risk"
          }
        ],
        "highlights": [
          "30 Hudson Yards 第 100 层的三角形悬臂平台，<strong>从楼体外挑出 80 英尺（24 米）</strong>，面积 7,500 平方英尺，<strong>平台面离地 1,131 英尺（345 米）</strong>，是西半球最高的室外观景平台——比 Empire State Building 的 86 层还高 50 英尺。KPF 设计，结构由 schlaich bergermann partner 完成：<strong>20 个独立钢模块在意大利制造、运到 335 米高空对接，模块间偏差控制在 3 毫米以内</strong>",
          "<strong>它的不可替代性是朝南方向完全没有遮挡。</strong>Statue of Liberty 距此 <strong>8.1 公里、方位 207°</strong>，是四座里最近的（Top of the Rock 9.5 公里、Empire State Building 8.3 公里）；而且因为 Hudson Yards 在最西侧河边，从这里往南是整片不被中城楼群切断的下城天际线。<strong>Empire State Building 也在画面里，方位 64°、距 1.40 公里</strong>",
          "<strong>但请先把预期算清：8.1 公里外一座连基座 93 米的雕像，用 400mm 也只占画面高度约 19%。</strong>这是海港画面里的一个可辨识细节，不是可以单独成片的主体。真正的收益是完整的下城天际线加哈德逊河口的开阔感",
          "<strong>周边围挡是 9 英尺（2.7 米）高的无框斜面玻璃，外倾 6.6 度，玻璃厚超过 2 英寸</strong>（德国制造、意大利完工），可以整个人靠上去。<strong>这是它相对 Top of the Rock 的核心劣势：全周长你都必须隔着玻璃拍。</strong>另有中央三角形玻璃地板（厚 2.5 英寸，共 4 块等尺寸面板便于更换）与室内的「Hull Window」玻璃地窗",
          "<strong>City Climb 是攀爬 30 Hudson Yards 外墙到 1,271 英尺的独立体验，票价 $202（含 Edge 入场）</strong>，全程扣在连续安全导轨上，最后在顶端向外倾身俯瞰。每天 5 个时段（10:15、11:00、11:45、12:30、13:45），全程 75–90 分钟，<strong>最低年龄 13 岁、身高 4.9–6.7 英尺、体重 65–310 磅</strong>。<strong>关键：City Climb 全程禁止个人拍摄</strong>，照片由教练统一拍；而且它<strong>不含在任何通票里</strong>，必须单独买"
        ],
        "photo": "城市天际线 <strong>4.5/5</strong>，下城与海港 <strong>5/5</strong>，人像 <strong>4.5/5</strong>，建筑 <strong>3.5/5</strong>。朝南无遮挡加悬空感是四座里最强的；扣分完全来自全周玻璃——夜景反光的处理成本比 Top of the Rock 高一个量级。",
        "shots": [
          {
            "name": "Eastern Point 三角尖端（下城与自由女神）",
            "desc": "<strong>核心窗口是蓝调：9/25 的 19:03–19:28、10/22 的 18:21–18:46。</strong>这是平台三角形的窄尖端，两侧都是玻璃、一次只站得下一两个人，<strong>出电梯后直接来这里，不要在门口的拍照队伍里排</strong>。<strong>隔玻璃拍的完整技法：把橡胶遮光罩整个压在玻璃上（这是最有效的一步）；穿深色上衣，浅色衣物会在玻璃上留下无法消除的亮影；关闭闪光；如果没有橡胶罩，用深色外套或围巾在镜头周围围一圈挡住内侧灯光。</strong>焦段：16–24mm 拍下城全景加玻璃的斜面几何，<strong>70–200mm 压缩下城楼群</strong>，<strong>300–400mm 拍 Statue of Liberty（8.1 公里，400mm 时约占画面高度 19%）</strong>。坐标为 OSM 30 Hudson Yards 建筑中心点，平台在其第 100 层向东南方向挑出。",
            "view": [
              40.753983,
              -74.000603
            ]
          },
          {
            "name": "中央玻璃地板（垂直向下）",
            "desc": "<strong>正午 11:00–14:00 是唯一成立的时段</strong>——需要足够强的顶光穿到 345 米下的街面，否则地板下方只是一团没有细节的暗色。<strong>16–24mm 完全垂直下俯</strong>，让 Hudson Yards 的 Vessel 与街网构成几何图案。<strong>务必把镜头压在玻璃上，否则地板会同时反射天空与你自己</strong>。注意这块玻璃是磨砂与透明分区的，先看清哪一块能拍。<strong>无独立 OSM 实体，与 1 号机位同在 30 Hudson Yards 楼内，地图不重复打针。</strong>"
          },
          {
            "name": "Skyline Steps 朝南阶梯座（人像与逆光剪影）",
            "desc": "<strong>金光时段：9/25 的 18:10–18:48、10/22 的 17:30–18:06。</strong>连接 100 与 101 层的室外木质阶梯座，朝南，<strong>是平台上唯一挡风的地方</strong>——345 米高度的风常大到无法稳定持机，这一点在 10 月傍晚很关键。把人物放在阶梯上、下城天际线做背景，<strong>35–85mm、f/2–f/2.8</strong>；日落方位 269°→256° 在你右手侧，可以拍侧逆光轮廓。<strong>无独立 OSM 实体，与 1 号机位同在 30 Hudson Yards 楼内，地图不重复打针。</strong>"
          }
        ],
        "access": {
          "book": "<strong>必须网上预订定时票</strong>（edgenyc.com）。<strong>Advance Saver 提前至少 14 天订 $34 起，最多省 35%——这是官方自己给的最低价，摄影行程日期确定后第一时间订这个</strong>。<strong>日落与周末档最先售罄，建议提前 2–3 周</strong>。City Climb 每天仅 5 个时段、需单独预订，出发前一天 23:59 前可全额退",
          "ticket": "<strong>General Admission 成人 $42 起</strong>（另加 $2 手续费），<strong>Advance Saver $34 起</strong>（提前 14 天以上），<strong>Tri-State Resident（纽约/新泽西/康州邮编）$36 起</strong>，儿童 6–11 岁 $35 起、长者 62+ $39 起、<strong>6 岁以下免费</strong>。Flex Admission $63–73 起（不限时段到场），Priority Access $88 起，Champagne Experience 约 $65。<strong>City Climb $202</strong>（含 Edge 入场、数字照片与香槟）",
          "hours": "<strong>官方主页在不同日期给出不同营业时间，需按你的日期查 edgenyc.com。</strong>常见口径为 <strong>10:00–22:00（周一至周四）、09:00–24:00（周五至周日）</strong>，旺季（4–10 月）可延长到 08:00–24:00。<strong>唯一稳定的规则是「末班电梯为关门前 50 分钟」</strong>；City Climb 末班约 20:00。<strong>全年无休，不允许再入场。</strong><strong>本窗口（9/25–10/22）的每日确切时间未能从官方页面逐日确认，请以订票确认函上的时间为准</strong>",
          "parking": "<strong>不要开车。</strong>地铁 <strong>7 号线「34 St–Hudson Yards」站</strong>直达商场，A/C/E 线「34 St–Penn Station」步行 12 分钟",
          "walk": "<strong>入口在 The Shops &amp; Restaurants at Hudson Yards 的 Level 4</strong>，不是 30 Hudson Yards 的办公大堂。地铁出站到入口 <strong>5 分钟</strong>；<strong>入口到平台含安检加 52 秒高速电梯，实测 20–35 分钟，请按 30 分钟预留</strong>"
        },
        "notes": [
          "<strong>三脚架、独脚架、专业摄影器材、录像机与灯具明确禁止</strong>（官方 FAQ 原文），自拍杆仅限室内。条款里另把「large photographic equipment」列为禁带大件",
          "<strong>四座里唯一公布了包尺寸数字的一座：任何超过 9×14×22 英寸的包、包裹或背包不得入场</strong>（约 23×36×56 厘米）。<strong>场内没有寄存柜。</strong>好消息是这个尺寸相当宽松——一个标准摄影双肩包通常在限内，<strong>但机场级安检会开包检查，别带看起来像商业器材的灯架与反光板</strong>",
          "<strong>只能带透明塑料瓶装的水，任何外带食物会被没收</strong>，玻璃瓶严禁。雨伞属于禁带大件（Large Items）",
          "<strong>玻璃地板与玻璃围挡的着装提示：地板透明，请穿长裤、短裤或紧身裤。</strong>拍照角度上更重要的是<strong>穿深色</strong>——浅色衣物在夜间会在斜面玻璃上留下亮影",
          "<strong>345 米的风比 Top of the Rock 更猛且平台三面临空。</strong>10 月傍晚务必带防风外套；镜头盖、滤镜、遮光罩全部要有绑绳或收进包里",
          "<strong>City Climb 全程禁止个人拍摄</strong>，且不含在任何通票内。如果你的目的是拍照而不是体验刺激，$202 花在别处更值",
          "不允许再入场（no re-entry）。一次订票就是一次机会，<strong>所以要把整段金光到蓝调（约 75 分钟）都规划在一次进场里</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/ad/NewYorkTheEdgePanorama.jpg",
            "cap": "自 Edge 平台俯瞰中城与下城全景 · Erik Grönnerud / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/65/Edge_NYC_observation_deck_at_30_Hudson_Yards.jpg",
            "cap": "三角形悬臂平台与斜面玻璃围挡 · Wikipettanko / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Edge_from_One_Vanderbilt_New_York_2022.jpg",
            "cap": "自 One Vanderbilt 看 Edge 悬出楼体的形态 · Larry D. Moore / CC BY 4.0"
          }
        ]
      },
      {
        "id": "bryant-park-tunnel-views",
        "n": 5,
        "name": "布莱恩特公园与中城街道对轴机位",
        "en": "Bryant Park and the Midtown Street Vistas",
        "score": 3.5,
        "tldr": "免费、可架三脚架的街面替代；草坪望 Empire State Building 约 50mm 满幅。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "24 小时可拍",
            "c": "free"
          },
          {
            "t": "无 Manhattanhenge",
            "c": "risk"
          },
          {
            "t": "晨拍才有正面光",
            "c": "risk"
          }
        ],
        "highlights": [
          "Bryant Park 是 New York Public Library 背后的 3.9 公顷方形绿地，中央是一片开阔草坪。<strong>从草坪北端望 Empire State Building 的方位是 194°（南偏西）、距离 597 米</strong>，<strong>这个距离下 50mm 竖构图刚好让 443 米高的 ESB 塞满全画幅长边</strong>——这是全中城最容易得到「一栋楼填满画面且前景是草地而不是车流」的免费机位",
          "<strong>Manhattanhenge 在这个窗口里几何上不可能发生，直接说清楚以免你白等。</strong>2026 年只有四个日期：<strong>5 月 28 日 20:14（半日）、5 月 29 日 20:13（全日）、7 月 11 日 20:20（全日）、7 月 12 日 20:21（半日）</strong>（AMNH 官方口径），另有 1 月 11–12 日的日出版 Reverse Manhattanhenge。<strong>原理：曼哈顿网格的横街轴线方位角是 299°，而 9 月 25 日的日落方位是 269°、10 月 22 日退到 256°，比街轴偏南 30–43 度。</strong>横街尽头看不到落日，太阳会落在街道左侧的楼群背后",
          "<strong>Tudor City 天桥（East 42nd Street 上方的 Tudor City Place）是 Chrysler Building 的经典正对机位</strong>：42 街在此处笔直向西，<strong>Chrysler Building（1930 年、319 米、William Van Alen 设计的不锈钢冠顶）正好立在街道尽头</strong>，距天桥约 1.05 公里。这里同时是 Manhattanhenge 的头号观测点——但那要等到 5 月与 7 月",
          "<strong>Pershing Square Plaza（42 街与 Park Avenue 交口）是本区被严重低估的一个机位</strong>：Park Avenue 高架桥的钢结构在前景，Grand Central Terminal 的 42 街立面在中景，<strong>246 米的 MetLife Building（1963 年，原 Pan Am Building）在正后方压顶</strong>，三层建筑年代（1913、1963、当代）在一张画面里叠成纽约最有信息量的街景之一",
          "<strong>本窗口的光线规律（据 OSM 坐标推算）：Fifth Avenue 方位 29°/209°，横街 119°/299°。日出方位 91°→104°、日落方位 269°→256°。结论是这一带所有向南、向西看楼体正面的机位都要在上午拍——上午太阳在东南，楼体的东立面与南立面同时受光；下午它们全部转成逆光或阴影。</strong>傍晚的价值只在蓝调时刻的灯光版本"
        ],
        "photo": "建筑 <strong>4/5</strong>，街拍 <strong>4/5</strong>，人像 <strong>3.5/5</strong>，风光 <strong>2.5/5</strong>。完全免费、不限时段、可以架三脚架，是观景台之外唯一能做长曝的选择；扣分因为四个机位分散在 1.5 公里内且都要挑时段。",
        "shots": [
          {
            "name": "Bryant Park 草坪北端望 Empire State Building",
            "desc": "<strong>08:00–10:30 是最佳窗口</strong>：太阳在东南（方位 91–104°），ESB 朝向公园的东立面与南立面同时受暖色晨光，而且草坪上人少。<strong>ESB 距此 597 米、方位 194°、高 443 米：50mm 竖构图正好满幅</strong>，<strong>24–35mm 带草坪与两侧梧桐做前景</strong>，85–135mm 拍塔冠与装饰艺术退台细节。<strong>蓝调（9/25 的 19:03–19:28、10/22 的 18:21–18:46）拍塔冠 LED 版本同样成立</strong>，此时公园里可以合法使用三脚架，是本区唯一能做 2–8 秒长曝的位置。注意 <strong>10 月中旬起草坪常被冬季市集（Winter Village）的摊位与溜冰场占用</strong>，开阔草坪视野可能已被切断，请到场先确认。坐标为 OSM Bryant Park 面要素中心点。",
            "view": [
              40.753751,
              -73.983543
            ]
          },
          {
            "name": "Tudor City 天桥望 Chrysler Building（42 街正对）",
            "desc": "<strong>07:15–09:00 与蓝调两段。</strong>清晨时太阳在你正后方（方位 91–104°，而你面向西方 299°），<strong>Chrysler 的不锈钢冠顶被正面晨光打亮、反射最强，这是这个机位一年里最好的光</strong>。Chrysler 距此约 1.05 公里、高 319 米，<strong>70–200mm 是主力：把冠顶压缩放大、让 42 街两侧楼体夹成对称的街道走廊</strong>；135–200mm 拍冠顶的三角窗与鹰形滴水兽。24–50mm 会让 Chrysler 小到失去意义。<strong>天桥人行道窄、下面就是 42 街车流，三脚架请靠边并留出通道。</strong>坐标为 OSM Tudor City Place 路段（天桥段），此处非独立节点。",
            "view": [
              40.749478,
              -73.970139
            ]
          },
          {
            "name": "Pershing Square Plaza（高架桥 + Grand Central + MetLife）",
            "desc": "<strong>蓝调是首选（9/25 的 19:03–19:28、10/22 的 18:21–18:46）</strong>：Grand Central 的 42 街立面泛光、Park Avenue 高架桥上的车灯拉成光带、MetLife 楼体亮灯，三层元素同时成立。<strong>24–35mm 从 42 街人行道压低机位</strong>，让高架桥钢梁切入画面下缘、Grand Central 的三扇巨拱窗与顶上 Jules-Félix Coutan 的「Glory of Commerce」雕塑群居中、MetLife 收在上缘。<strong>1–4 秒长曝拉车灯，这里可以架三脚架（公共人行道）</strong>。白天版本请在 09:00–11:00 拍，此时 42 街立面（朝南）受光最正。坐标为 OSM Pershing Square Plaza 步行区。",
            "view": [
              40.751723,
              -73.977775
            ]
          },
          {
            "name": "Herald Square 沿 34 街东望 Empire State Building",
            "desc": "<strong>08:00–10:00。</strong>34 街在此笔直向东，ESB 在 Fifth Avenue 交口、距此约 400 米，<strong>上午太阳在东南方向，也就是几乎在你面前——这是逆光</strong>，所以这个机位的正确用法不是拍楼体细节而是<strong>拍街道剪影与逆光人流</strong>：35–85mm，把 ESB 拍成街道尽头的剪影主体，前景是被逆光勾边的行人与黄色出租车。想要 ESB 受正面光就改去 Fifth Avenue 上 38th–40th Street 之间往南看（无独立 OSM 节点，本页不单列）。<strong>Herald Square 是全纽约最拥挤的路口之一，三脚架基本不现实，手持为准。</strong>坐标为 OSM Herald Square 广场面要素。",
            "view": [
              40.750263,
              -73.987778
            ]
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>，四个机位全部是公共街道与公园",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>Bryant Park 官方为每日 07:00 至夜间</strong>（闭园时间随季节调整，通常 22:00–24:00 之间，<strong>本窗口的确切闭园时间未能从官方页面确认</strong>，请查 bryantpark.org 当日公告）。<strong>Tudor City 天桥、Pershing Square Plaza、Herald Square 均为公共街道，24 小时可用</strong>",
          "parking": "<strong>不要开车。</strong>Bryant Park：B/D/F/M 线「42 St–Bryant Park」或 7 线「5 Av」，出站即达。Pershing Square：4/5/6/7/S 线「Grand Central–42 St」。Tudor City：4/5/6/7/S 线「Grand Central–42 St」沿 42 街东行约 900 米 / 12 分钟。Herald Square：B/D/F/M/N/Q/R/W 线「34 St–Herald Sq」",
          "walk": "四个机位沿 42 街一线分布，<strong>Herald Square 到 Bryant Park 约 900 米、Bryant Park 到 Pershing Square 约 500 米、Pershing Square 到 Tudor City 天桥约 900 米</strong>，全程步行 <strong>2.3 公里 / 30 分钟</strong>（不含拍摄）"
        },
        "notes": [
          "<strong>这四个机位是本区唯一可以合法使用三脚架的地方</strong>（公共人行道与公园），也就是唯一能做长曝与包围曝光的地方。观景台上做不到的事请在这里做",
          "<strong>纽约市对公共人行道上的非商业三脚架拍摄不要求许可</strong>，但阻碍通行会被要求移开；商业拍摄需向 MOME 申请。Bryant Park 是私营管理的公园，<strong>园内商业拍摄需向 Bryant Park Corporation 申请</strong>",
          "<strong>Bryant Park 的 Winter Village 通常在 10 月下旬到 11 月初开始搭建</strong>，开阔草坪会被摊位与溜冰场取代。<strong>本窗口内是否已开始搭建未能确认，10 月中旬之后前往请先查 bryantpark.org</strong>",
          "<strong>Manhattanhenge 不在这个窗口内</strong>（见 highlights 的几何说明）。任何声称「秋天可以拍 Manhattanhenge」的说法都是错的——秋分前后落日方位是 269°，而街轴是 299°",
          "Tudor City 天桥的人行道很窄且紧贴 42 街车流，<strong>清晨与夜间行人稀少，独自携带显眼器材请留意周围</strong>",
          "Herald Square 与 34 街一带扒手集中，<strong>相机包务必前挂</strong>",
          "所有向西看的机位在日落后会有大量车头灯直射镜头。<strong>用手挡或换角度，别指望遮光罩能解决</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/00/Bryant_Park_%26_Emp_State.JPG",
            "cap": "自 Bryant Park 草坪望 Empire State Building · Phi / CC0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/American_Radiator_Building_and_Empire_State_Building%2C_2025_%2854982982508%29.jpg",
            "cap": "American Radiator Building 与 Empire State Building 同框 · Ethan Long / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bryant_Park_with_the_Empire_State_Building_in_the_background_-_panoramio.jpg",
            "cap": "草坪前景加 Empire State Building 的竖构图 · Martin Ibert / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "nypl-schwarzman",
        "n": 6,
        "name": "纽约公共图书馆总馆",
        "en": "New York Public Library · Stephen A. Schwarzman Building",
        "score": 4.5,
        "tldr": "Rose Main Reading Room 参观只限周一至周六 10:00–11:00，免费但禁三脚架禁闪光。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "阅览室仅 1 小时",
            "c": "risk"
          },
          {
            "t": "周日闭馆",
            "c": "risk"
          },
          {
            "t": "禁三脚架禁闪光",
            "c": "risk"
          }
        ],
        "highlights": [
          "Carrère &amp; Hastings 设计的 Beaux-Arts 巨构，1911 年 5 月 23 日开放，当时是全美最大的大理石建筑。外墙用的是 Vermont 的 Danby 大理石——<strong>2011 年之后的修复与 2010 年代的 40 街新入口还专门从同一座 1911 年的采石场取料</strong>，以求色差一致",
          "<strong>Rose Main Reading Room（第 315 室）是本区最强的室内建筑目标</strong>：长 <strong>78 米</strong>、宽 <strong>23.8 米</strong>、天花高 <strong>15.8 米（52 英尺）</strong>，两端各七扇巨型拱窗，天顶绘着云天壁画，中间一排铜制台灯与长条橡木阅读桌。<strong>它建在 Bryant Park 地下书库之上，2016 年因为一块石膏花饰坠落而全面加固后重开</strong>",
          "<strong>Astor Hall</strong> 是入口大厅：全白 Vermont 大理石、双拱交叉的穹顶、两侧对称的宽阔大楼梯。<strong>这里的光线来自第五大道那面高窗，是全馆唯一有强侧光可用的空间</strong>，而且不受阅览室那一小时的限制",
          "<strong>Patience 与 Fortitude</strong>——第五大道台阶两侧的一对大理石狮子，1911 年随建筑落成，由 Bronx 的 Piccirilli 兄弟工作室雕刻（同一家工作室后来用 28 块乔治亚大理石拼出了华盛顿的林肯坐像）。<strong>名字是大萧条时期 Fiorello LaGuardia 市长起的</strong>：他说纽约人要靠「耐心与坚韧」渡过难关。<strong>它们用的是多孔的 Tennessee 粉色大理石，每 7–10 年要做一次保护</strong>，上一次是 2019 年（激光清洗加灌浆补裂，$25 万），此前是 2011 与 2004 年",
          "<strong>核实结果：目前建筑没有正在进行的立面修复或狮子围挡。</strong>2019 年的狮子保护与 2022 年前后完成的 Midtown Campus 改造（Beyer Blinder Belle 与 Mecanoo，含 40 街 Marshall Rose Plaza 新入口）都已结束"
        ],
        "photo": "建筑 <strong>5/5</strong>，室内 <strong>5/5</strong>，人像 <strong>3/5</strong>，风光 <strong>1/5</strong>。免费加两个世界级室内空间，是本区照片质量的天花板；扣分因为阅览室每天只有一小时窗口、禁三脚架、且不能拍到人。",
        "shots": [
          {
            "name": "Rose Main Reading Room 长轴",
            "desc": "<strong>周一至周六 10:00–11:00 是唯一的自由参观窗口，最后入场 10:50。</strong><strong>请在 10:00 开门就到位——这一小时里会陆续挤进大量游客，前 15 分钟是唯一能拍到干净长桌的时间。</strong>房间长 78 米、天花 15.8 米，<strong>14–20mm 超广是必需的（24mm 已装不下</strong>，不像 Bradbury 那种窄中庭，这里是长方形巨室）。站短边正中沿长轴拍，让两排橡木长桌与铜台灯汇聚到远端拱窗。<strong>ISO 策略（这是本机位最关键的技术点）：光源是两端拱窗的日光加天顶暗区加桌面暖色台灯，典型的高反差混合光。禁三脚架，所以走「大光圈 + 高 ISO + 机身防抖」路线：f/2–f/2.8、ISO 1600–6400、快门守住 1/40–1/60s（15.8 米天花意味着你要仰角，手抖被放大，1/30s 以下废片率陡增）。</strong><strong>白平衡不要交给相机</strong>——拍 raw，先按台灯的 2800–3200K 定基调，再用蒙版单独把拱窗那两块拉回 5500K。窗与室内的光比常有 6–8 EV，<strong>手持连拍 3 张不同曝光做手动对齐融合是唯一可行的 HDR 方式</strong>。坐标为 OSM Schwarzman Building 面要素中心点。",
            "view": [
              40.753344,
              -73.982152
            ]
          },
          {
            "name": "Astor Hall 与对称大楼梯",
            "desc": "<strong>不受阅览室时段限制，全馆开放时间内都可拍，最佳是 10:00–12:00</strong>（此时第五大道那面高窗有斜射光，在白色大理石上投出可用的明暗层次）。<strong>14–24mm 站大厅正中对称构图</strong>，让两侧楼梯与交叉拱顶围成对称框；<strong>35–50mm 从一侧楼梯平台俯拍大厅地面与走过的人，做「巨大空间中的小人物」的尺度对比</strong>。全白大理石容易让测光偏暗，<strong>请主动 +0.7 至 +1.3 EV 曝光补偿</strong>，否则大理石会拍成灰色。<strong>无独立 OSM 实体，与 1 号机位同在馆内，地图不重复打针。</strong>"
          },
          {
            "name": "Patience 与 Fortitude 与第五大道立面",
            "desc": "<strong>08:00–10:00 是唯一有正面光的窗口。</strong>立面朝西（第五大道），<strong>上午太阳在东南，也就是在建筑背后</strong>——所以立面本身处于开放阴影，但这对拍白色大理石与狮子的粉色大理石纹理其实有利（无爆高光、反差温和）。<strong>清晨的真正价值是台阶上还没坐满人</strong>：10:00 之后台阶会变成中城的露天休息区。35–85mm 拍单只狮子配立面柱廊，24–35mm 拍整面立面与台阶。<strong>狮子的粉色 Tennessee 大理石与背后白色 Danby 大理石的色差是这张照片的重点</strong>，别用自动白平衡把它抹平。<strong>此处未在 OSM 中找到 Patience/Fortitude 的实体节点，省略坐标，地图无针脚。</strong>"
          }
        ],
        "access": {
          "book": "<strong>Rose Main Reading Room 的 10:00–11:00 参观时段不需预约、不需导览，直接进。</strong>另有两种免费导览：<strong>Rose Main Reading Room 短导览（周一至周六 11:20、13:30、15:00，约 15 分钟，在三楼 McGraw Rotunda 集合）</strong>与<strong>全馆导览（周一至周六 11:00 与 14:00，约 1 小时，需订票，每周日放出下一周的票）</strong>",
          "ticket": "<strong>免费</strong>（参观、阅览室时段与两种导览全部免费）",
          "hours": "<strong>官方原文：「The Rose Main Reading Room is also open for a visiting hour from 10 to 11 AM, Monday through Saturday. Please note that the last visitor entry is at 10:50 AM.」也就是每天只有一小时、周日完全没有。</strong><strong>全馆开放时间：周一 10:00–18:00；周二、周三 10:00–20:00；周四至周六 10:00–18:00；周日闭馆。</strong>另有官方规定：<strong>Rose Main Reading Room 的最后入场为闭馆前 30 分钟</strong>（研究用途者在开放时段内可全程使用，参观者只有 10:00–11:00 那一小时）。<strong>General Research Division 的时间与全馆一致，但会有临时调整，出发前请查 nypl.org</strong>",
          "parking": "<strong>不要开车。</strong>地铁 B/D/F/M 线「42 St–Bryant Park」或 7 线「5 Av」步行 2 分钟；4/5/6/7/S 线「Grand Central–42 St」步行 8 分钟",
          "walk": "主入口在 Fifth Avenue 与 41st Street 交口（狮子之间那道台阶）；<strong>另有 40th Street 的 Marshall Rose Plaza 无障碍入口</strong>。入口到 Astor Hall 即到；<strong>Astor Hall 到三楼 Rose Main Reading Room 走大楼梯约 3 分钟</strong>，有电梯。从 Bryant Park 草坪穿过公园到 40 街入口 <strong>300 米 / 4 分钟</strong>"
        },
        "notes": [
          "<strong>官方摄影政策原文：「Handheld cameras are permitted. Flash, lights, and tripods are prohibited.」另加「Scanners are prohibited」「Cameras must be set on mute」与「No photographs of the staff, other researchers or certain reading rooms may be taken.」</strong>也就是说<strong>阅览室里的读者不能拍进画面</strong>，这直接决定了你的构图必须是纯建筑",
          "<strong>Rose Main Reading Room 是运转中的研究阅览室，不是展厅。</strong>请保持安静、关掉快门声、不要在长桌之间的通道久站、不要挪动椅子与台灯（官方明令禁止）",
          "<strong>那一小时窗口极短且不可协商。</strong>如果你的行程只能在下午到这一带，<strong>阅览室就只剩 11:20/13:30/15:00 的 15 分钟短导览一条路</strong>，在导览节奏下能拍的东西非常有限",
          "<strong>周日全馆闭馆</strong>，周一只到 18:00。安排上唯一宽松的是周二与周三（开到 20:00），但阅览室的参观时段仍然只有上午那一小时",
          "禁三脚架加室内暗光加 15.8 米仰角，<strong>一支 f/1.4–f/2 的 20mm 或 24mm 定焦在这里的价值超过任何变焦</strong>。也可以考虑靠在门框或柱子上做人体支撑",
          "入口有安检与包检。<strong>展览与部分特藏阅览室另有更严的规定</strong>，看到禁拍标识就收机器",
          "<strong>核实结果：立面与狮子目前均无脚手架或围挡</strong>（上一次狮子保护是 2019 年，外立面全面修复是 2011 年）。但中城临时棚架变化很快，到场后请自行确认"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/New_York_Public_Library_Rose_Reading_Room_%2840430027685%29.jpg",
            "cap": "Rose Main Reading Room 长轴与铜制台灯 · Nan Palmero / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/80/Astor_Hall%2C_New_York_Public_Library.jpg",
            "cap": "Astor Hall 白色大理石大厅与对称楼梯 · bryansjs / CC BY-SA 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/86/New_York_City%2C_Midtown_Manhattan%2C_New_York_Public_Library%2C_Stephen_A._Schwarzman_Building%2C_1897-1911._5th_Avenue_%282011%29.jpg",
            "cap": "第五大道立面与 Patience、Fortitude 双狮 · vincent desjardins / CC BY 2.0"
          }
        ]
      },
      {
        "id": "summit-one-vanderbilt",
        "n": 7,
        "name": "Summit One Vanderbilt",
        "en": "SUMMIT One Vanderbilt",
        "score": 3.5,
        "tldr": "镜面装置是独立题材而不是天际线机位，反光是四座里最难处理的；但它是唯一在条款上允许 12 英寸以内桌面脚架的一座。",
        "tags": [
          {
            "t": "平日 $43 起",
            "c": "paid"
          },
          {
            "t": "日落档 +$10",
            "c": "paid"
          },
          {
            "t": "镜面反光最重",
            "c": "risk"
          },
          {
            "t": "12 吋内脚架合规",
            "c": "free"
          }
        ],
        "highlights": [
          "One Vanderbilt（2020 年落成、<strong>427 米、中城最高的商业塔楼</strong>、KPF 设计）第 91–93 层的三层体验，2021 年 10 月 21 日开放。<strong>主平台高 324 米、Ascent 玻璃电梯到 369 米</strong>。它紧贴 Grand Central Terminal，入口就在 Grand Central 的换乘大厅里",
          "<strong>核心是 Kenzo Digital 的沉浸式镜面装置「Air」</strong>：91 与 92 层的墙、地、顶全部铺镜面，把城市天际线在画面里无限复制。<strong>请把它理解成一件装置艺术而不是观景台</strong>——它的照片辨识度很高，但拍的是装置本身而不是纽约。另有 Yayoi Kusama 的作品与悬出楼体的 <strong>Levitation 玻璃盒</strong>",
          "<strong>摄影上必须承认的短板：这是四座里反光最难处理的一座。</strong>不只是室内玻璃对天际线的常规反射——<strong>镜面墙、镜面地、镜面顶会把室内所有光源反复叠加进玻璃里，反光量是普通玻璃观景台的数倍</strong>。橡胶遮光罩压玻璃这一招在这里效果有限，因为反光不是来自一个方向",
          "<strong>但它是四座里唯一给出可执行数字门槛的一座。</strong>禁带政策原文只禁「selfie sticks, tripods or monopods <strong>longer than 12&quot; fully extended</strong>」——<strong>完全展开不超过 12 英寸（约 30 厘米）的桌面脚架在字面上是合规的。</strong>如果你一定要在中城高处做一次长曝，这里是唯一有条款依据的地方",
          "<strong>着装是硬性要求而不是建议</strong>：官方 Code of Conduct 明确要求鞋底不能损伤镜面地板（<strong>细高跟、钢头靴、运动钉鞋、重型工作靴一律不许上玻璃地板</strong>），并写明「guests who are concerned about unwanted exposure as a result of the mirrored floors and ceilings are responsible for dressing in a manner to avoid such exposure」——<strong>翻译过来就是：镜面地板会把裙下拍进去，请穿长裤、短裤或紧身裤</strong>"
        ],
        "photo": "装置艺术 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>，城市天际线 <strong>3/5</strong>，建筑 <strong>2.5/5</strong>。镜面房间是纽约辨识度最高的室内人像背景之一；作为天际线机位它明显弱于 Top of the Rock 与 Edge，因为几乎全程隔着重反光的玻璃。",
        "shots": [
          {
            "name": "「Air」镜面房间（91 层，主力机位）",
            "desc": "<strong>金光时段最好：9/25 的 18:10–18:48、10/22 的 17:30–18:06。</strong>此时暖光穿过玻璃进入镜面空间，被墙地顶反复反射，<strong>是这个装置一天里唯一有方向性光线的时刻</strong>；正午的光太平、入夜后只剩室内灯的冷白。<strong>16–24mm 超广，压低机位甚至贴近镜面地板</strong>，让天际线在上下两个方向同时延伸，人物站在中央做尺度参照。<strong>技术要点：这里必须用手动对焦或点对焦锁定——镜面会让相机反复在「镜面本身」与「镜中影像」之间来回拉风箱</strong>。关闪光（闪光在镜面房间里会直接打回镜头）。ISO 800–3200、f/2.8–f/4（f/1.4 在这里景深太浅、镜中影像会糊）。坐标为 OSM One Vanderbilt 面要素中心点。",
            "view": [
              40.752974,
              -73.97854
            ]
          },
          {
            "name": "Levitation 玻璃盒与 Empire State Building 方向",
            "desc": "<strong>蓝调（9/25 的 19:03–19:28、10/22 的 18:21–18:46）。</strong>Levitation 是悬出楼体的透明玻璃盒，站进去可以垂直向下看 300 多米。<strong>Empire State Building 在方位 230°（西南）、距 795 米——四座里离 ESB 最近的一座</strong>，<strong>这个距离下 24–50mm 就能让 ESB 撑满画面，比 Top of the Rock 需要的 105mm 轻松得多</strong>。但代价是隔着玻璃且反光重，而且从这个角度看不到「ESB 与 Central Park 各在一边」的对倒结构。<strong>把橡胶遮光罩压在玻璃上、穿深色衣物、关闪光，是三条必做动作</strong>。<strong>无独立 OSM 实体，与 1 号机位同在 One Vanderbilt 楼内，地图不重复打针。</strong>"
          },
          {
            "name": "93 层露台与 Ascent 玻璃电梯",
            "desc": "<strong>露台是全场唯一的室外空间</strong>，也是唯一不隔玻璃看天空的地方，<strong>蓝调时在这里拍中城灯网优于室内任何位置</strong>。Ascent 是外挂的全玻璃电梯，升到 369 米，需买 SUMMIT Ascent（$68 起）或 Ultimate SUMMIT 票种；<strong>电梯内四面玻璃加脚下玻璃，反光无法处理，实际上拍不出干净照片</strong>——把它当体验，别当机位。Après 咖啡吧也在这一层，是全场唯一能坐下来等蓝调的地方。<strong>无独立 OSM 实体，与 1 号机位同在 One Vanderbilt 楼内，地图不重复打针。</strong>"
          }
        ],
        "access": {
          "book": "<strong>必须网上预订定时票</strong>（summitov.com）。<strong>票是定时的，迟到超过 20 分钟可能被拒入</strong>；改期需付改期费（$25 起）加补时段差价。<strong>日落档与周末档最先售罄，建议提前 1–2 周、日落档提前 2–3 周</strong>",
          "ticket": "<strong>SUMMIT Experience（普通票）平日成人 $43–44、周末 $49–50</strong>；儿童 6–12 岁平日 $37–38、周末 $43–44；<strong>5 岁以下免费</strong>。<strong>日落档加价 $10（部分来源报 $12–13），时段大致是当天日落前约 2.5 小时开始</strong>——<strong>这是四座里唯一有明文日落加价的一座</strong>，另三座是动态定价、日落档在实务上也贵 $5–10。SUMMIT Signature（含一杯鸡尾酒）$58 起，SUMMIT Ascent（含玻璃电梯）$68 起，Ultimate SUMMIT $75 起，导览团 $162 起，私人导览 $1,088（至多 6 人）。Edge + SUMMIT 组合票 $65 起",
          "hours": "<strong>官网首页原文：08:00–24:00，最后入场 22:30，「Open All Week Long」。</strong><strong>有第三方来源称周二闭馆（decks-nyc 等），该说法与官网直接矛盾，以官网的「全周开放」为准</strong>，但出发前仍请复核。<strong>官方建议的停留时长是 90 分钟至 2.5 小时，比另三座都长</strong>——这是装置体验而非单纯看景，请把它算进时间预算",
          "parking": "<strong>不要开车。</strong>地铁 <strong>4/5/6/7/S 线「Grand Central–42 St」</strong>，步行 1 分钟",
          "walk": "<strong>入口在 Vanderbilt Avenue 下方，从 Grand Central Terminal 主大厅往西走进换乘大厅（或走 One Vanderbilt 里 TD Bank 旁那道门）。</strong><strong>明确注意：不能从 One Vanderbilt 的办公大堂进入。</strong>Grand Central 主大厅到入口约 <strong>150 米 / 3 分钟</strong>；入口到 91 层含安检与电梯实测 20–35 分钟"
        },
        "notes": [
          "<strong>三脚架与独脚架的门槛是「完全展开 12 英寸」，这是四座里唯一的数字条款。</strong>但同一份文件写明「the decisions of Summit One Vanderbilt personnel regarding the permissibility of any such bag or package are final」，<strong>请把它当成「有依据可以争辩」而不是「一定能带进去」</strong>",
          "<strong>自拍杆同样受 12 英寸限制；专业 A/V 器材、商业摄影器材、录音设备与任何尺寸的无人机禁止。</strong>个人手机与手持相机明确允许",
          "<strong>包的规则是描述性的而不是数字：超过「标准背包、手袋或信使包」尺寸即禁止</strong>，行李箱、带轮行李袋、登机箱全禁。<strong>场内没有任何寄存</strong>",
          "<strong>着装是硬性要求：必须穿不会损伤镜面地板的平底鞋（细高跟、钢头靴、钉鞋、重工作靴禁止上玻璃地板）；并且请穿长裤、短裤或紧身裤——镜面地板与顶棚会把你的一切反射出来</strong>",
          "<strong>拍照上最容易被忽略的一点：镜面房间里自动对焦会持续失效。</strong>提前切到手动对焦或用单点对焦锁定实体（栏杆、人物），别让相机自己找",
          "关掉闪光。<strong>在镜面房间里开闪光会直接打回镜头，一张都用不了</strong>，而且会干扰周围所有人",
          "<strong>如果你只上一座观景台，不要选这里。</strong>它作为镜面装置是独一无二的，作为纽约天际线机位明显弱于 Top of the Rock 与 Edge。合理定位是「第三座」或「专程为镜面题材来一次」"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bc/2022-0402-NYC-Summit_One_Vanderbilt-01.jpg",
            "cap": "Kenzo Digital 的镜面装置「Air」内部 · Bobak Ha'Eri / CC BY 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/08/2022-0402-NYC-Summit_One_Vanderbilt-02.jpg",
            "cap": "镜面墙地顶与中城天际线的多重反射 · Bobak Ha'Eri / CC BY 3.0"
          }
        ]
      },
      {
        "id": "grand-central-terminal",
        "n": 8,
        "name": "中央车站",
        "en": "Grand Central Terminal",
        "score": 5,
        "tldr": "免费、每天 05:15–02:00，星空天顶加光柱是本区最强画面；手持完全合法，但一上三脚架就需要 $250 起的许可。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "每天 05:15–02:00",
            "c": "free"
          },
          {
            "t": "三脚架需 $250 许可",
            "c": "risk"
          },
          {
            "t": "10 月光柱更好",
            "c": "free"
          }
        ],
        "highlights": [
          "Reed &amp; Stem 与 Warren &amp; Wetmore 设计，<strong>1913 年 2 月开放</strong>，两层共 <strong>44 个站台</strong>，是全世界站台数最多的火车站。<strong>反直觉的一点：全站有 25 条坡道而几乎没有楼梯</strong>——原设计者认为坡道疏散人流比台阶快也更安全，这是为年吞吐一亿人次设计的",
          "<strong>Main Concourse 的椭圆筒形拱顶：起拱 37 米、拱顶最高 48.8 米</strong>（121.5 与 160.25 英尺），上面绘着黄道十二宫的星空图。<strong>反直觉的事实：你看到的不是 1913 年那幅。</strong>1944 年原顶已损毁到无法修复，于是加了一层复制原画的假吊顶。1990 年代那次修复没有拆掉它（面板含石棉、且这是日流量 50 万人的车站），<strong>1998 年脚手架拆除后一直维持现状</strong>",
          "<strong>West Balcony 拱顶东北角故意留了一块没洗的深色矩形</strong>——就在巨蟹座（Cancer）那只蟹的爪子旁边。1990 年代清洗时刻意保留，让人看见当年被烟垢熏成什么样。<strong>那层污垢的主成分是烟草</strong>：几十年香烟烟雾在这个封闭大厅里无处可去。清洗用的是温和皂液加棉签，不是高压水枪",
          "<strong>Whispering Gallery 在下层用餐区 Grand Central Oyster Bar 门外</strong>：Rafael Guastavino 的瓷砖交叉拱顶，<strong>两个人分别站在对角的两根柱子前对着墙角低声说话，对方能清楚听见</strong>。摄影上它的价值是那片 Guastavino 瓷砖的人字形拼法与拱顶几何",
          "<strong>本窗口最有用的一条判断：拍光柱，10 月下旬明确优于 9 月下旬。</strong>大厅东西两侧的巨型拱窗要靠低角度阳光才能在地面上投出成束的光柱，<strong>而这个现象的季节是 10 月到次年 3 月</strong>。数字上：<strong>9 月 25 日正午太阳高度 48.2°，10 月 22 日降到 38.0°，低了整整 10 度</strong>——低 10 度意味着光柱在地面上延伸得更深、更长、更像「教堂里的光」。<strong>最佳时段是上午 09:00–11:00（东侧窗）与下午 15:00–17:00（西侧窗，色温更暖）</strong>，前提是晴天或少云，<strong>阴天完全没有光柱</strong>"
        ],
        "photo": "室内建筑 <strong>5/5</strong>，街拍与人流 <strong>5/5</strong>，人像 <strong>4/5</strong>，外立面 <strong>4/5</strong>。免费、每天开 21 小时、且同时提供建筑、光线与人流三个题材，是本区综合价值最高的一处；扣分只因三脚架需要付费许可。",
        "shots": [
          {
            "name": "West Balcony 台阶顶（Main Concourse 招牌俯视）",
            "desc": "<strong>光柱：上午 09:00–11:00（东侧窗）与下午 15:00–17:00（西侧窗）。10 月下旬明确优于 9 月下旬——正午太阳高度从 48.2° 降到 38.0°，光柱延伸得更深。</strong>人流：工作日 07:30–09:30 与 17:00–19:00 是通勤高峰，<strong>密度最高、最适合慢门拉出人流虚影</strong>；<strong>想拍空大厅只有周日 06:00–07:30 一个窗口</strong>。<strong>16–35mm 从西侧大楼梯顶端俯拍</strong>，让中央问询亭的四面铜钟居中、两侧楼梯与拱窗对称收边；<strong>70–200mm 单独压缩问询亭铜钟与它背后的人流</strong>。<strong>手持慢门是这里的技术核心：靠在楼梯石栏上，1/8–1/4s 让行人拉成虚影而建筑保持锐利。</strong>ISO 400–1600、f/4–f/5.6。混合光源（拱窗日光 + 暖色吊灯 + 发车板的冷蓝绿），<strong>拍 raw、别指望自动白平衡能同时处理三种色温</strong>。坐标为 OSM Grand Central Terminal 面要素中心点。West Balcony 上是 Cipriani Dolci 餐厅（每日 11:30–22:00），<strong>台阶与栏杆位属于公共空间可自由站，但别挡住餐厅出入口</strong>。",
            "view": [
              40.752694,
              -73.977253
            ]
          },
          {
            "name": "星空天顶与那块未清洗的污渍",
            "desc": "<strong>任何时段都成立（天顶靠人工照明，不受日光影响），但避开 07:30–09:30 与 17:00–19:00 的通勤高峰</strong>——不是为了光线，是为了你需要站在大厅正中仰头，高峰期会被人流冲走。拱顶最高 48.8 米，<strong>14–24mm 超广近乎垂直上仰</strong>，让四周拱肋围合成对称方框、黄道十二宫居中。<strong>那块故意留下的深色矩形在 West Balcony 上方、巨蟹座那只蟹的爪子左侧</strong>，<strong>85–200mm 才能把它与周围洗净的部分放在同一张里做对比——这是这个大厅最有信息量的一张细节照</strong>。天顶亮度低，<strong>ISO 1600–6400、f/2–f/2.8、1/40s 以上</strong>，手持仰角务必开机身防抖。坐标为 OSM Grand Central Terminal 车站节点。",
            "view": [
              40.752806,
              -73.977179
            ]
          },
          {
            "name": "Whispering Gallery（下层 Oyster Bar 门外）",
            "desc": "<strong>不受时段限制，但午餐时段 12:00–14:00 会被 Oyster Bar 的排队人流占满，请避开。</strong>Guastavino 瓷砖交叉拱顶，光线很暗且全是暖色人工光。<strong>35mm 或 50mm 定焦是最合适的选择</strong>（超广会让拱顶几何变形失去韵律），f/1.4–f/2、ISO 1600–6400、1/50s。构图重点是<strong>四道拱在中心汇聚的人字形瓷砖拼法</strong>：站在拱心正下方向上拍纯几何，或让一个人站在对角柱前做尺度参照。坐标为 OSM Grand Central Oyster Bar 入口节点，Whispering Gallery 就在其门外的拱廊。",
            "view": [
              40.752419,
              -73.977343
            ]
          },
          {
            "name": "42 街立面与「Glory of Commerce」雕塑群",
            "desc": "<strong>上午 09:00–11:00 拍正面光</strong>（立面朝南，上午太阳在东南方向，受光最正），<strong>或蓝调 9/25 的 19:03–19:28、10/22 的 18:21–18:46 拍泛光版本</strong>。立面顶上是 Jules-Félix Coutan 的雕塑群「Glory of Commerce」（Mercury、Hercules、Minerva 三像，落成时是世界最大的雕塑群），下方是那座 Tiffany 彩玻璃大钟——<strong>直径 4 米，是全世界最大的 Tiffany 玻璃制品</strong>。<strong>70–200mm 从 42 街南侧人行道压缩拍雕塑群与钟，是唯一能看清细节的焦段</strong>；24–35mm 拍三扇巨拱窗的完整立面，但要留意背后 246 米的 MetLife Building 会压在画面上缘。<strong>此处是公共人行道，三脚架不需许可</strong>（与馆内规则不同）。<strong>站位在 42 街人行道与 Pershing Square Plaza 一带，无独立 OSM 节点，省略坐标。</strong>"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>（车站为公共空间，进出、Main Concourse、下层用餐区与 Whispering Gallery 全部免费）。<strong>但用三脚架必须提前申请许可，见下</strong>",
          "ticket": "<strong>免费</strong>（只有搭乘 Metro-North 列车才需要车票）。<strong>三脚架许可：Grand Central Terminal Still Photography/Film Permit，非商业用途填表费 $250、商业用途 $450，均不可退</strong>，商业用途另可能被要求付 MTA 知识产权授权费",
          "hours": "<strong>官方：每日 05:15–02:00。</strong>这是本区可拍时间最长的一处，早于任何观景台开门、晚于任何观景台关门。West Balcony 上的 Cipriani Dolci 每日 11:30–22:00（<strong>台阶与栏杆位是公共空间，不用消费也能站</strong>）",
          "parking": "<strong>不要开车。</strong>地铁 <strong>4/5/6/7/S 线「Grand Central–42 St」</strong>直达站内；Metro-North 全线终点站",
          "walk": "主入口在 East 42nd Street（Park Avenue 与 Vanderbilt Avenue 之间），另有 Vanderbilt Avenue 与 Lexington Passage 等多个入口。<strong>无安检、无排队，从 42 街正门直入 Main Concourse</strong>。Main Concourse 到下层 Whispering Gallery 走坡道或楼梯 <strong>2 分钟</strong>；到 Summit One Vanderbilt 入口 <strong>150 米 / 3 分钟</strong>；到 New York Public Library <strong>700 米 / 8 分钟</strong>"
        },
        "notes": [
          "<strong>手持拍摄完全合法且不需任何许可。</strong>MTA 与车站官方口径原文：「Anyone is free to take pictures or video with a cell phone or handheld consumer camera for non-commercial personal use inside Grand Central Terminal – without a permit or fee.」<strong>单反、无反、大光圈定焦都算 handheld consumer camera，不要被网上「必须申请许可」的说法吓退</strong>",
          "<strong>但一旦用上三脚架、灯或稳定器，即使纯私人用途也必须先拿许可。</strong>官方原文：「if you will be using professional equipment, like a tripod, light, or stabilizer, for your photography or filming (<strong>including for non-commercial uses</strong>), ... you must obtain a location agreement or permit.」<strong>费用 $250 起、需提前至少 5 个工作日申请（复杂需求建议提前一周以上），所以对一次性旅行摄影者来说等于「不能用三脚架」</strong>",
          "<strong>替代方案：靠石栏与柱子做人体支撑，1/8–1/4s 的手持慢门在这里完全可行</strong>，而且拉出人流虚影的效果比死板的长曝更好",
          "<strong>商业用途另需付知识产权授权费</strong>——车站内外大部分元素受商标保护，MTA 把「带广告性质的社媒帖」也算商业言论。纯个人作品集与社媒分享不受影响",
          "<strong>核实结果：Main Concourse 目前没有脚手架，天顶也没有在修。</strong>拱顶周边的装饰石膏与仿 Caen 石修复（EverGreene 承接）已于 2021 年完成；目前在建的是<strong>地下列车棚顶与 Park Avenue 高架桥</strong>，<strong>都在主大厅之外，不影响任何室内机位</strong>",
          "大厅日流量约 50 万人次。<strong>三脚架即使有许可也会挡人流</strong>，而 West Balcony 台阶是全站最拥挤的几平方米之一",
          "<strong>光柱完全取决于天气：晴天或少云才有，阴天一点都没有。</strong>这是唯一无法用技术弥补的变数，请把它当成加分项而不是计划"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Grand_Central_Terminal_Main_Concourse%2C_New_York%2C_August_2021.jpg",
            "cap": "Main Concourse 与星空天顶 · PCN02WPS / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Grand_Central_Station_Main_Concourse_Rectilinear_projection_Jan_2006.jpg",
            "cap": "自 West Balcony 俯视大厅与中央问询亭铜钟 · Diliff / CC BY 2.5"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/70/42nd_Street_Facade%2C_Grand_Central_Terminal%2C_October_2025.jpg",
            "cap": "42 街立面与 Glory of Commerce 雕塑群 · TheCatalyst31 / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "empire-state-building",
        "n": 9,
        "name": "帝国大厦观景台",
        "en": "Empire State Building Observatory",
        "score": 4,
        "tldr": "86 层露天钢丝网，镜头探出网孔即无遮挡；但本季只开到 23:00，是四座里最早关的。",
        "tags": [
          {
            "t": "86 层 $44 起",
            "c": "paid"
          },
          {
            "t": "86+102 层 $79 起",
            "c": "paid"
          },
          {
            "t": "禁三脚架无寄存",
            "c": "risk"
          },
          {
            "t": "拍不到 ESB 本身",
            "c": "risk"
          }
        ],
        "highlights": [
          "Shreve, Lamb &amp; Harmon 设计，1931 年落成，<strong>塔尖 443 米</strong>。<strong>86 层观景台在 1,050 英尺（320 米），是露天环绕式、四面都能走；102 层在 1,250 英尺（381 米），是落地玻璃全封闭的室内平台</strong>，靠一段玻璃电梯上去，晴天可见 80 英里、六个州",
          "<strong>摄影上最重要的一条：86 层的围挡是低矮墙加菱形钢丝网，而钢丝网是可以把镜头探出去的。</strong>这意味着<strong>它和 Top of the Rock 70 层一样，属于「镜头前方没有玻璃」的那一类</strong>，这是它相对 Edge 与 Summit 的决定性优势。<strong>102 层则相反：室内玻璃加狭小空间加各方向的室内灯，反光极难处理</strong>，有经验的拍摄者会自带 lens skirt（镜头遮光裙）与吸盘座",
          "<strong>必须诚实指出的一条：站在 ESB 上，你唯一拍不到的就是 ESB。</strong>想让这栋楼进画面必须去 Top of the Rock（1.29 公里、方位 204°）、Summit（795 米、方位 230°）、Edge（1.40 公里、方位 64°）或街面机位。<strong>它的价值在别处：360 度、位置更居中、以及全区最长的营业时间</strong>",
          "<strong>但「开得很晚」这件事在本窗口要打折。</strong>官方逐段时间：<strong>9 月 18 日至 10 月 4 日 10:00–23:00（入场门 22:00 关）；10 月 5 日至 8 日 10:00–22:00（入场门 21:00 关）；10 月 9 日至 31 日 09:00–23:00（入场门 22:00 关）。</strong><strong>换句话说：Top of the Rock 与 Summit 这个季节都开到 24:00，ESB 反而是四座里关得最早的。</strong>夏季那个 01:00 关门、00:15 末班电梯的时刻表（7/19–8/25）已经过去了",
          "<strong>Sunrise Experience 是本区唯一的日出机位</strong>：开门前独占 86 层，<strong>仅周六提供、$135/人、常在数周前售罄</strong>，含咖啡与点心。<strong>9/25 日出 06:47、10/22 日出 07:15</strong>——如果你的行程里有一个周六且天气预报晴，这是全区独一无二的选项"
        ],
        "photo": "城市天际线 <strong>4/5</strong>，夜景 <strong>4.5/5</strong>，人像 <strong>3.5/5</strong>，建筑 <strong>2/5</strong>。86 层的无玻璃露天加 360 度环绕是真优势；扣分因为拍不到 ESB 本身、钢丝网限制机位自由度、且本季关门比另两座都早。",
        "shots": [
          {
            "name": "86 层南侧（下城天际线与 Statue of Liberty 方向）",
            "desc": "<strong>核心窗口是蓝调：9/25 的 19:03–19:28、10/22 的 18:21–18:46。</strong>注意<strong>官方自己说「最挤的时段是开门后两小时与日落后一小时」</strong>，所以蓝调必然人多，请在金光时段（9/25 的 18:10 前、10/22 的 17:30 前）就到位占住南侧栏杆。<strong>关键技法：把镜头从菱形钢丝网的网孔里探出去，这样画面里完全没有遮挡物，效果等同无玻璃观景台</strong>；<strong>把镜身直接压在钢丝网与矮墙的夹角上做支撑，实测可以稳住 1/4–4 秒</strong>（这是禁三脚架条件下唯一能长曝的办法）。Statue of Liberty 距此 8.3 公里、方位 217°，<strong>400mm 时只占画面高度约五分之一，请当细节不当主体</strong>。16–24mm 拍下城全景，70–200mm 压缩 One World Trade Center 一线。ISO 800–3200、f/2.8–f/5.6。坐标为 OSM Empire State Building 面要素中心点。",
            "view": [
              40.748442,
              -73.985659
            ]
          },
          {
            "name": "86 层北侧（中城塔群与 Central Park 方向）",
            "desc": "<strong>清晨最佳</strong>：10 月 9 日之后 09:00 开门，<strong>此时太阳在东南（方位 98–104°），中城楼群的南立面与东立面同时受暖光，而平台上几乎无人</strong>。这个方向的主体是密集的中城塔群：Top of the Rock 所在的 30 Rockefeller Plaza、Chrysler Building、One Vanderbilt、以及 57 街那一排超细塔楼。<strong>70–200mm 压缩塔群做「城市峡谷」的层叠效果，是这个方向最强的用法</strong>；<strong>Central Park 距此 3.5 公里，用 24mm 只是画面上缘一条绿带、而且被中城楼群切断——要拍 Central Park 请去 Top of the Rock，不要在这里勉强</strong>。<strong>无独立 OSM 实体，与 1 号机位同在 ESB 楼内，地图不重复打针。</strong>"
          },
          {
            "name": "102 层室内玻璃平台",
            "desc": "<strong>白天 12:00–14:00 是唯一相对成立的时段</strong>（官方也推荐这个区间避开人流），因为室外亮、室内灯的相对影响最小。<strong>入夜后这里的反光基本无解</strong>：空间小、人多、四面室内灯，有经验的做法是自带 <strong>lens skirt 与吸盘座</strong>（吸盘座把机身固定在玻璃上，遮光裙挡掉室内反射）——<strong>但请注意吸盘座是否会被安检判为「camera stand」，未能确认，做好被拦下的准备</strong>。基础三条必做：<strong>镜头压玻璃、穿深色衣物（你离玻璃最近，浅色会反进画面）、关闪光</strong>。381 米的高度差换来的画面提升有限，<strong>$79 对 $44 的差价主要买的是「更少的人」而不是「更好的照片」</strong>。<strong>无独立 OSM 实体，与 1 号机位同在 ESB 楼内，地图不重复打针。</strong>"
          }
        ],
        "access": {
          "book": "<strong>必须网上预订定时票</strong>（esbnyc.com），官方原文「All visits require a timed reservation」。<strong>日落档最先售罄，建议提前 1–2 周</strong>。Sunrise Experience 仅周六、常在数周前售罄。Express Pass 可跳过展览与电梯队列，在结账时加购",
          "ticket": "<strong>86 层：成人 $44 起、儿童 $38 起、长者 $42 起。</strong><strong>86 + 102 层：成人 $79 起、儿童 $73 起、长者 $77 起。</strong><strong>每笔交易另加 $5 手续费</strong>（官方原文「A $5 booking charge is added to each transaction」）。Sunrise Experience $135/人（仅周六）。<strong>官网直挂的 CityPASS 价：成人 $283 → $169、儿童 $275 → $129</strong>，含 ESB 的 AM/PM 双次入场（86 层白天 + 关门前 3 小时内的同夜再入）加另外 4 项",
          "hours": "<strong>官方逐段时间（本窗口）：9 月 18 日–10 月 4 日 10:00–23:00，入场门 22:00 关；10 月 5 日–8 日 10:00–22:00，入场门 21:00 关；10 月 9 日–31 日 09:00–23:00，入场门 22:00 关。</strong><strong>全年 365 天开放，风雨无阻，冬季 86 层露天平台会装辐射式取暖器。</strong><strong>请注意本季它是四座里关得最早的</strong>——Top of the Rock 与 Summit 都开到 24:00。官方另口径：最挤的是开门后两小时与日落后一小时，最松的是 12:00–14:00",
          "parking": "<strong>不要开车。</strong>地铁 B/D/F/M/N/Q/R/W 线「34 St–Herald Sq」步行 4 分钟；6 线「33 St」步行 4 分钟；1/2/3/A/C/E 线「34 St–Penn Station」步行 8 分钟",
          "walk": "<strong>入口在 West 34th Street</strong>（无障碍入口也在这一侧），另有 Fifth Avenue 大堂入口。地铁出站到入口 <strong>4–8 分钟</strong>；<strong>入口到 86 层要过安检、穿两层展览、换两段电梯，实测 30–60 分钟</strong>（买 Express Pass 可省 30–45 分钟）。<strong>这是四座里从进门到站上平台耗时最长的一座，请按 45 分钟预留</strong>"
        },
        "notes": [
          "<strong>官方禁带清单原文列有「Professional camera equipment and stands (tripods, monopods, bipods)」，另禁「Large bags, suitcases, carry-on luggage, or oversized packages」。</strong><strong>而且官方 FAQ 明确写「There are no locker or storage facilities available on-site」——没有寄存柜。</strong>有旅行者记录过安检台临时收存三脚架并给号牌，<strong>但这是个案而非政策，不要把它算进计划</strong>",
          "<strong>「专业相机」的界定在实务上非常模糊。</strong>主流经验是单反与无反手持拍摄不受阻，<strong>真正会被拦的是肩扛摄像机、大型灯具、以及带模特与器材组的商业拍摄</strong>（后者需事先书面许可并签场地协议）。带 400mm 白炮出现在安检口会引来额外提问，请预留时间",
          "玻璃制品、酒精饮料、罐装瓶装容器、外带食物、乐器、运动器材、喷漆与马克笔、服装道具与面具（PPE 除外）全部禁止。<strong>全员过机场级安检</strong>",
          "<strong>86 层是露天且四面临空，320 米高度的风远大于地面。</strong>10 月傍晚务必带防风外套；镜头盖、滤镜、遮光罩要有绑绳。婴儿车可带但在观景台上必须折叠",
          "<strong>日落后回程电梯会排很长的队</strong>（大家同时拍完夜景一起下楼），实测可能等 20–40 分钟。<strong>解法是拍完蓝调后再多留 20 分钟拍纯夜景，等第一波人潮走掉再下</strong>",
          "<strong>再说一次：这里拍不到 Empire State Building。</strong>如果你行程里只上一座观景台，而你想要的照片里有那栋楼，<strong>就该去 Top of the Rock 而不是这里</strong>",
          "<strong>102 层的 $35 差价（$79 对 $44）主要换来的是更少的人和更高的视点，不是更好的照片</strong>——玻璃反光会抵消掉大部分高度优势。预算有限时把这 $35 留给另一座观景台"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/01/New_York_City_%28New_York%2C_USA%29%2C_Empire_State_Building_--_2012_--_6448.jpg",
            "cap": "Empire State Building 塔身与装饰艺术退台 · Dietmar Rabich / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Empire_state_building-20120518-RM-163038.jpg",
            "cap": "自街面仰望塔冠 · Ermell / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Empire_State_Building_view3.jpg",
            "cap": "自 86 层观景台俯瞰中城 · Benn Newman / MIT License"
          }
        ]
      }
    ]
  },
  {
    "id": "manhattan-downtown",
    "name": "Manhattan · Downtown 与 West Side",
    "navName": "Downtown",
    "color": "#4da3ff",
    "lead": "这一区有一个别处不具备的物理条件：<strong>West Side 正对着一条 1.2 公里宽的开阔水面，这是整个 Manhattan 唯一能看到不被建筑遮挡的日落的地方。</strong>日落方位从 9 月 25 日的 <strong>269.4°</strong>（几乎正西）移到 10 月 22 日的 <strong>255.9°</strong>（西偏南），Hudson 在 Chelsea 一段的走向约 020°／200°，也就是说<strong>两个日期太阳都近乎垂直落进河面</strong>，落点从 Hoboken 的水岸线向南滑到 Jersey City 的高层楼群一侧。这条件必须用掉：Little Island、Pier 57 屋顶、Gansevoort Peninsula、Whitney 的西侧玻璃、以及 High Line 北段的 The Spur，全部指向同一个 35 分钟的窗口。另一半价值在下城：<strong>Oculus 是纽约最强的室内建筑目标且完全免费</strong>，Staten Island Ferry 是全球最便宜的自由女神机位（成本为零），9/11 Memorial 广场免票免安检，Brooklyn Bridge 步道 24 小时开放。<strong>九个点里七个是完全免费的</strong>，唯一两张票（Whitney $30、One World Observatory $31 起）里还有一张可以靠周五晚免费拿到。这一区不缺机位，缺的是准时——本区几乎每一张好片都锁死在日出前 40 分钟或日落后 30 分钟这两个窄带里。",
    "callouts": [
      {
        "type": "good",
        "title": "Whitney 周五晚免费仍在跑，而且口径升级了",
        "html": "<p><strong>已逐字核实：现在不是「随喜付费」，是直接免费。</strong>whitney.org 原文：「Admission to the Whitney is free for everyone from 5–10 pm every Friday night.」2026 年 6 月 2 日的官方新闻稿口径一致：「The Museum offers FREE admission and special programming for visitors of all ages every Friday evening from 5–10 pm and on the second Sunday of every month.」历史上那套 pay-what-you-wish 的说法已经过时。</p><p><strong>为什么这是全区性价比最高的一条：</strong>Whitney 的 5–8 层外挑露台是需要门票才能上的（官方 FAQ：「Visitors do need tickets to access the Museum's terraces, which are located on Floors 5–8」），而 17:00–22:00 这个免费窗口<strong>正好把两个日期的日落都包住</strong>（9/25 日落 18:49、10/22 日落 18:06），也就是说<strong>你可以零成本站在 Renzo Piano 的露台上拍金光与蓝调</strong>。常规票价是成人 $30、65 岁以上与学生 $24、25 岁及以下常年免费。</p><p><strong>但免费票仍然要领：</strong>官方原文「though admission is free, tickets are required and capacity is limited」，<strong>免费票提前 5 周放出</strong>，请一确定日期就去官网领。现场也发，但容量有限，周五晚有 DJ 与现场演出，是全周最挤的时段。</p>"
      },
      {
        "type": "good",
        "title": "零成本清单：九个点里七个完全免费",
        "html": "<p><strong>免费且不需要预约：</strong>The High Line（7:00–22:00）、Oculus 大厅（几乎 24 小时）、9/11 Memorial 广场（8:00–20:00，<strong>无票无安检</strong>）、Brooklyn Bridge 步道（24 小时）、Staten Island Ferry（<strong>24 小时、直接走上船</strong>）、Washington Square Park（6:00–24:00）、Little Island 与 Hudson River Park 各码头（6:00–23:00）。</p><p><strong>Staten Island Ferry 是这份清单里被最严重低估的一项。</strong>它是纽约市自 1905 年起自营的通勤设施，全程免费、24 小时、单程 25 分钟，航道在 Liberty Island 以东约 800 米处经过——<strong>这是全世界成本最低的自由女神与下城天际线水上机位，而且班次密到可以按光线挑船</strong>。见该条目里给到具体班次的推荐。</p><p><strong>码头附近有人向游客推销「渡轮票」，那是骗局，渡轮不卖票。</strong></p>"
      },
      {
        "type": "warn",
        "title": "High Line 并非全线贯通：Western Rail Yards 段封闭",
        "html": "<p>thehighline.org 的 FAQ 页面上现在挂着一行字：<strong>「The Interim Walkway at the Western Rail Yards is temporarily closed.」</strong>指的是 30th–33rd Street、11th–12th Avenue 之间那三分之一英里的路段——全线唯一保留了原始自播生长植被的一段，自 2024 年 10 月起封闭，要改建成带照明与座椅的永久步道。<strong>官网没有给出重开日期，请按封闭计划行程。</strong></p><p><strong>好消息是其余全部开放：</strong>Gansevoort Street 到 34th Street／12th Avenue 的主线、30th Street 与 Tenth Avenue 的 The Spur（含 High Line Plinth 雕塑基座），以及 <strong>2023 年 6 月开放的 High Line – Moynihan Connector</strong>（沿 30th Street 东行、再沿 Dyer Avenue 北转进 Manhattan West，可一路走到 Moynihan Train Hall，全程只需过一次马路）——官网把 31st Street 与 Dyer Avenue 列为常规无障碍入口，即 Connector 正常运营。</p><p>另一处需要更新认知的是 <strong>Washington Square Park：没有在建工程。</strong>2026 年 5 月社区委员会 CB2 通过决议要求公园管理处提出替代每晚人工搬移 NYPD 铁马的方案（可能是链条也可能是永久铁门），但<strong>截至目前无正式设计、无预算、无施工</strong>，喷泉与拱门都正常，不会有围挡或脚手架。</p>"
      },
      {
        "type": "tip",
        "title": "本区太阳时刻表：夏令时在窗口结束后才切换",
        "html": "<p>先解决时制问题：<strong>2026 年美国夏令时于 11 月 1 日结束，落在行程窗口之外</strong>，所以下面所有钟点都是 EDT，不需要做任何换算。</p><ul><li><strong>9 月 25 日</strong>：日出 <strong>06:47</strong>（方位 90.6°）／日落 <strong>18:49</strong>（方位 269.4°）；民用晨光 06:20 起、民用昏影终 19:16；正午太阳高度 48.2°（12:47）。<strong>金光时段（太阳高度 6° 以下）18:12–18:49，蓝调 18:49–19:16。</strong></li><li><strong>10 月 22 日</strong>：日出 <strong>07:15</strong>（方位 104.0°）／日落 <strong>18:06</strong>（方位 255.9°）；民用晨光 06:48 起、民用昏影终 18:34；正午太阳高度 38.1°（12:40）。<strong>金光时段 17:28–18:06，蓝调 18:06–18:34。</strong></li></ul><p><strong>一个容易漏掉的修正：</strong>从 Hudson 岸边看，New Jersey 一侧的 Palisades 台地（海拔约 60–70 米、距 2.5 公里左右）会把太阳提前挡掉，<strong>实际可见日落比上表早约 5–8 分钟（推算）</strong>。所以 Little Island 与 Pier 57 的收尾请按 18:40（9/25）／17:58（10/22）算。</p><p><strong>秋色时间：NYC 是全州最晚的。</strong>Old Farmer's Almanac 的 2026 年秋叶预报把纽约市定在<strong>11 月 1 日前后达到或接近盛期</strong>；多个口径一致把 Hudson Valley、NYC 与 Long Island 归为「late October – early November」，比 Adirondacks 晚两到三周。<strong>可执行的结论：本区的实用盛期是 10 月 25 日–11 月 5 日，10 月 22 日只是「接近盛期」，9 月下旬完全不是秋色季。</strong>不过本区的秋色主体不是枫树而是 High Line 的 Piet Oudolf 草本——<strong>草与种穗的最佳状态从 10 月中旬就开始，而且不受落叶影响，所以 10 月下旬去 High Line 是稳赚的，去 Washington Square Park 看树色则要靠运气。</strong></p>"
      },
      {
        "type": "warn",
        "title": "三脚架政策逐点核实：五种不同规则",
        "html": "<ul><li><strong>One World Observatory：明确禁止。</strong>官方 Prohibited Items 第 7 条列出 tripods、lights、professional cameras、recording devices。<strong>但 FAQ 另有一句「DSLR cameras and flash pieces are permitted」——手持单反／无反是允许的</strong>，被禁的是架子、灯与摄像机。</li><li><strong>9/11 Memorial 广场与博物馆：明确禁止</strong>三脚架、独脚架、自拍杆（原文「Using tripods and/or professional camera and/or audio recording equipment」）。博物馆内<strong>全程禁闪光灯</strong>，历史展区与 In Memoriam 纪念展区<strong>完全禁止拍照</strong>。</li><li><strong>Oculus：需要许可，即使非商业也要。</strong>港务局 FAQ 原文：「If you're bringing a tripod or have a crew of five or more (including for non-commercial use), a permit is required.」<strong>Short Form Photo Permit 的审批周期是 10 个工作日</strong>，临时想架是不可能的。手持拍摄不需要许可。</li><li><strong>Whitney：明确禁止</strong>三脚架、独脚架、自拍杆与闪光灯，<strong>露台与户外区域同样适用</strong>。</li><li><strong>High Line、Little Island、Brooklyn Bridge、Washington Square Park、Staten Island Ferry：无明文禁令</strong>，但都受「不得阻碍人流」约束。实务判断：High Line 只有 7:00–9:00 架得开；Brooklyn Bridge 只有日出前那 30–40 分钟；Little Island 日落时挤到架不开（改去 Gansevoort Peninsula 或 Pier 45）；渡轮甲板持续振动，三脚架毫无意义。</li></ul><p><strong>另有两处安检：</strong>One World Observatory（机场式，包件上限 25″×17″×9″，<strong>现场无寄存柜</strong>，禁外带食品饮料）与 9/11 Memorial 博物馆（机场式）。<strong>9/11 Memorial 广场本身没有安检</strong>，Oculus 大厅也没有。</p>"
      }
    ],
    "spots": [
      {
        "id": "high-line",
        "n": 1,
        "name": "高线公园",
        "en": "The High Line",
        "score": 4.5,
        "tldr": "1.45 英里高架线性公园，免费 7:00–22:00；Oudolf 草本 10 月下旬最佳，10th Avenue Square 取景窗是招牌；Rail Yards 段封闭。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "7:00–22:00",
            "c": "free"
          },
          {
            "t": "Rail Yards 段封闭",
            "c": "risk"
          },
          {
            "t": "人流大难架架子",
            "c": "risk"
          }
        ],
        "highlights": [
          "1934 年通车的 West Side Elevated Line 货运高架，建造目的是把 Tenth Avenue 上的地面铁路抬离街面——那条地面线因频繁撞死行人而被叫作 <strong>\"Death Avenue\"</strong>，铁路公司甚至雇了骑马挥旗的 \"West Side Cowboys\" 在火车前开道。<strong>最后一列车在 1980 年运走三车皮冷冻火鸡后停运</strong>",
          "1999 年 Joshua David 与 Robert Hammond 成立 Friends of the High Line 阻止拆除。分期开放：<strong>2009 年 6 月首段 Gansevoort St–20th St；2011 年延至 30th St；2014 年 Rail Yards 段；2019 年春 The Spur 收尾</strong>。累计接待超过 7,500 万人次，带动周边超过 20 亿美元的私人投资",
          "景观由 Field Operations、Diller Scofidio + Renfro 与 <strong>Piet Oudolf</strong> 三方完成。Oudolf 的核心设计原则是<strong>把植物的整个生命周期都算进方案里</strong>——按官方园艺博客的说法，「凋谢的花序、种穗与干枯的茎稈在他的方案里和春天的新芽同等重要」，园丁团队从春天就开始为秋天的样子做取舍，且<strong>要到 11 月底至 12 月的 cutback 才修剪</strong>",
          "→ <strong>这意味着 10 月下旬对本条目是加分项，不是减分项。</strong>Chelsea Grasslands 的五种基质草（Andropogon gerardii、Sorghastrum nutans、Panicum virgatum、Schizachyrium scoparium、Sporobolus heterolepis）此时转成酒红与铁锈色，种穗逆光时呈半透明。<strong>这是全年最适合拍这条公园的两周，而且不依赖枫树变色</strong>",
          "真正成立的三个建筑取景点：<strong>10th Avenue Square</strong>（下沉式阶梯剧场加嵌在栏杆里的巨幅取景窗，俯视 Tenth Avenue 车流）、<strong>Chelsea Thicket</strong>（20th–22nd St 之间的密植林荫隧道，全天柔光）、以及 <strong>The Spur</strong>（30th St 与 Tenth Avenue 交口的支线，尽端是 High Line Plinth 大型雕塑基座）"
        ],
        "photo": "建筑 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>3/5</strong>。取景窗、林荫隧道与秋草三类素材互不重复，且全部免费；扣分是步道最窄处仅约 3 米、9:00 之后基本无法从容构图。",
        "shots": [
          {
            "name": "10th Avenue Square 取景窗（招牌构图）",
            "park": [
              40.7448,
              -74.0068
            ],
            "view": [
              40.744856,
              -74.006837
            ],
            "desc": "下沉式阶梯剧场正对 Tenth Avenue，视线沿街道向南（Tenth Avenue 走向约 029°／209°）。<strong>14:00–14:30 是唯一的逆光时段</strong>：9/25 太阳方位 206°、高度 45°；10/22 方位 204°、高度 35°——此时阳光顺着 Tenth Avenue 的街道峡谷灌进取景窗，下方车流成剪影。24–35mm 从阶梯最高一排向下拍，把玻璃窗框当画框；70–200mm 压缩 Tenth Avenue 的车流与远处楼群。<strong>上午来只有平光，画面会很闷。</strong>阶梯常坐满人，广角容易吃到人头，f/8 缩到景深里把前排观众当前景反而更好用。"
          },
          {
            "name": "Chelsea Thicket 林荫隧道（唯一全天可拍的机位）",
            "view": [
              40.746719,
              -74.005602
            ],
            "desc": "20th–22nd Street 之间的密植段，木兰、丁香、山茱萸与冬青把步道收成一条约 3 米宽的隧道。<strong>全天柔光，正午也成立</strong>——这是本条目唯一不受时段限制的机位，也是行程被打乱时的保底。35mm 或 50mm 顺步道方向拍纵深，f/2–f/2.8 让远端虚化成一团暖色。10 月下旬叶色转黄后隧道整体偏暖，是本区最好的人像机位之一。<strong>人物请站在隧道中段而不是出口</strong>，出口处的天光会把脸打成剪影。"
          },
          {
            "name": "The Spur 与 High Line Plinth（看 Hudson Yards 的黄金时段）",
            "view": [
              40.752076,
              -74.000912
            ],
            "desc": "30th Street 与 Tenth Avenue 交口向东伸出的支线，2019 年春开放，尽端是 High Line Plinth 大型雕塑基座（轮换展示委约作品）。<strong>17:00–18:12（9/25）／16:30–17:28（10/22）</strong>：太阳在西南偏西（方位 250–256°），从背后打亮 Hudson Yards 的玻璃幕墙。24mm 把雕塑作前景剪影、30 Hudson Yards 与 The Vessel 作背景；换 85mm 单独压缩雕塑与玻璃楼的反射。<strong>这也是全线离 Moynihan Connector 最近的一段</strong>，往北走 31st Street／Dyer Avenue 即可衔接。"
          },
          {
            "name": "Gansevoort Street 南端入口楼梯（唯一能拍空景的时段）",
            "view": [
              40.739415,
              -74.008178
            ],
            "desc": "公园南端起点，钢楼梯与 Whitney 的 Renzo Piano 悬挑体量正对。<strong>07:00–08:30 是唯一无人的时段</strong>：公园 7:00 开门，9/25 日出 06:47、10/22 日出 07:15，<strong>开门即到就能拍到完全空的步道</strong>，9:00 之后再也不可能。16–24mm 从楼梯底部向上仰拍钢结构与高架桥腹板的铆接细节；转身用 35mm 拍 Whitney 的层层退台。<strong>这个时段也是全线唯一架得开三脚架的窗口。</strong>"
          }
        ],
        "access": {
          "book": "<strong>不需预约。</strong>免费的 docent 导览团需另行报名，官网口径为 9–10 月的周二、周三与周末",
          "ticket": "<strong>免费</strong>",
          "hours": "官方原文：<strong>4 月 1 日–11 月 30 日 7:00–22:00；12 月 1 日–3 月 31 日 7:00–20:00</strong>。行程窗口整段落在 7:00–22:00 内。<strong>但官网 FAQ 同时挂着「The Interim Walkway at the Western Rail Yards is temporarily closed.」——30th–33rd St、11th–12th Ave 之间那三分之一英里自 2024 年 10 月起封闭改建，官网未给重开日期，请按封闭计划。</strong>Gansevoort St 到 34th St／12th Ave 的主线、The Spur 与 Moynihan Connector 均正常开放",
          "parking": "<strong>不要开车。</strong>Chelsea 一带路边表价约 $4.50–5.50/小时且极难找位，停车楼日价 $35–55。地铁替代方案完善",
          "walk": "南端 <strong>A/C/E 线 14th Street 站</strong>步行约 700 米／9 分钟到 Gansevoort 入口；中段 <strong>C/E 线 23rd Street 站</strong>步行约 600 米／8 分钟；北端 <strong>7 号线 34th Street–Hudson Yards 站</strong>直达。全线走完约 1.45 英里／45 分钟"
        },
        "notes": [
          "三脚架无明文禁令，但步道最窄处仅约 3 米宽且日均人流极大，<strong>实务上只有 7:00–9:00 架得开</strong>，其余时段会被工作人员要求收起",
          "商业拍摄（含婚纱、模特、商品）需 Friends of the High Line 事先许可；<strong>纯个人旅拍不需要</strong>",
          "<strong>出入口不能随便选</strong>：设电梯的只有 Gansevoort St、14th St、23rd St、30th St 与 31st St／Dyer Ave（Moynihan Connector）五处，其余入口全是楼梯——带三脚架与大包必须按此规划",
          "全线禁止自行车、滑板、轮滑与宠物（工作犬除外），也禁止在草坪上行走",
          "<strong>无遮荫段（Sundeck、Chelsea Grasslands、Wildflower Field）在 10 月下旬风很大</strong>：高出地面约 9 米加上 Hudson 的西风，体感通常比手机预报低 3–5 度",
          "拍草穗需要 1/125 秒以上凝固晃动；想要「风中的草」的柔化效果可降到 1/15–1/8 秒，但要等风势的间隙做包围"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/f9/At_New_York_City_2023_024_-_High_Line_Section_3.jpg",
            "cap": "High Line 步道与两侧种植 · Mike Peel / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6c/High_Line%2C_New_York_City%2C_20231001_1806_1489.jpg",
            "cap": "十月初的 High Line 草本与楼群 · Jakub Hałun / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Highline_and_IAC_Building_NY1.jpg",
            "cap": "High Line 与 IAC Building · Acroterion / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "little-island",
        "n": 2,
        "name": "小岛公园与 Hudson River Park 码头",
        "en": "Little Island & Hudson River Park Piers",
        "score": 4.5,
        "tldr": "免费、不需预约、9/8–10/31 为 6:00–23:00；132 根混凝土「郁金香盆」把公园端在水面之上，日落正对 Hudson 对岸。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "不需预约",
            "c": "free"
          },
          {
            "t": "6:00–23:00",
            "c": "free"
          },
          {
            "t": "演出时全场禁摄",
            "c": "risk"
          }
        ],
        "highlights": [
          "2021 年 5 月开放，坐在旧 Pier 54 与 Pier 56 之间的水面上，由 Thomas Heatherwick 设计、Barry Diller 家族出资约 2.6 亿美元。<strong>132 根钻石截面的混凝土桩（官方叫 tulip pots）从河床升起，把这座 2.4 英亩的公园端在水面之上 4.6–19 米</strong>，桩顶高度刻意做得不一致，走上去像在一片起伏的小丘上",
          "<strong>预约政策核实结论：目前不需要定时预约票。</strong>littleisland.org 的 Rules & FAQ 原文只有一句：「Yes, the park is free and open to the public. The only activity that requires a paid ticket to attend are all performances in The Amph.」<strong>2021 年开园初期那套 timed entry 制度已经取消，官方 FAQ 全文不再出现 timed entry 字样。</strong>这一条容易搞错，因为大量二手攻略还在写「高峰期需免费预约」",
          "<strong>季节性开放时间（官网原文照抄）：3/8–5/24 为 6:00–23:00；5/25–9/7 为 6:00–24:00；9/8–10/31 为 6:00–23:00；11/1–12/31 为 6:00–21:00。</strong>行程窗口整段落在 6:00–23:00 内，<strong>但只要跨到 10 月 31 日之后，闭园就提前两小时</strong>",
          "2026 年的演出季只跑了 <strong>7 月 29 日–9 月 6 日的六周、约 56 场</strong>（比上年的约 110 场腰斩）。<strong>行程窗口内 The Amph 基本没有演出</strong>——这对摄影是好事：圆形剧场空着的时候才拍得到它的木构座席弧线与背后的混凝土桩",
          "相邻的 Hudson River Park 码头才是这一区真正的日落资产群，全部免费：<strong>Pier 57 屋顶公园</strong>（Little Island 北侧约 200 米，视角更高更开阔）、<strong>Gansevoort Peninsula</strong> 的人造沙滩（2023 年开放，<strong>Manhattan 唯一的河滨沙滩</strong>）、以及 <strong>Pier 45</strong>（Christopher Street 尽头的大平台）"
        ],
        "photo": "风光日落 <strong>5/5</strong>，建筑 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>。本区乃至整个 Manhattan 最好的免费日落机位群；扣分是阴天时混凝土桩会显得灰白平淡、毫无层次。",
        "shots": [
          {
            "name": "Little Island 西南侧高点看 Hudson 日落（招牌构图）",
            "park": [
              40.7419,
              -74.0112
            ],
            "view": [
              40.742005,
              -74.01061
            ],
            "desc": "<strong>金光时段 18:12–18:49（9/25）／17:28–18:06（10/22）。</strong>日落方位 9/25 为 269.4°、10/22 为 255.9°；Hudson 在此处宽约 1.2 公里，<strong>两个日期太阳都落在 Hoboken 的水岸线上</strong>，10 月下旬会更偏南、压到 Jersey City 的高层玻璃楼群一侧。16–35mm 把桩顶的混凝土花瓣作前景剪影、太阳压在画面右三分之一；70–200mm 压缩太阳与对岸楼群。<strong>重要修正：New Jersey 一侧的 Palisades 台地（海拔约 60–70 米、距约 2.5 公里）会把太阳提前挡掉，实际可见日落比表上时刻早约 5–8 分钟（推算）——请按 18:40／17:58 收尾，不要等到表上的日落时刻。</strong>"
          },
          {
            "name": "圆形剧场 The Amph 的木构座席（演出季已结束，空场可拍）",
            "view": [
              40.741873,
              -74.01117
            ],
            "desc": "针脚落在入口桥头（剧场本体无独立 OSM 实体）。<strong>全天可拍，但 10:00 前与 16:00 后最好</strong>——正午顶光会把混凝土打成没有层次的死白。24mm 从最高一排向下俯拍座席弧线与背后的 Hudson；换 85mm 单独拍一根桩体花瓣状顶盖的曲面细节。<strong>硬性限制：The Amph 有演出时全场禁止任何拍照与录音</strong>（官方原文「The use of any recording device, either audio or video, and the taking of photographs, either with or without flash, is not allowed during performances in The Amph.」），空场时不受此限。"
          },
          {
            "name": "Pier 57 屋顶公园（本条目最完整的一张）",
            "park": [
              40.743431,
              -74.010809
            ],
            "view": [
              40.743554,
              -74.010807
            ],
            "desc": "Little Island 北侧约 200 米，Pier 57 屋顶的公共草坪，免费。<strong>同一个金光时段（18:12–18:49／17:28–18:06）</strong>，但这里比 Little Island 更高更开阔，<strong>能同时把 Little Island 的桩体、Hudson 水面与对岸日落装进一张画面</strong>——这是本条目构图最完整的机位。24–35mm 横幅，把 Little Island 放在画面左下三分之一处做前景。屋顶靠 Pier 57 内部电梯上去（入口 40.743431／-74.010809），<strong>大风与雷雨会临时关闭屋顶，没有替代方案时只剩 Pier 45。</strong>"
          },
          {
            "name": "Gansevoort Peninsula 沙滩低机位（唯一能架三脚架的地方）",
            "view": [
              40.739967,
              -74.01073
            ],
            "desc": "Manhattan 唯一的河滨人造沙滩，可以把机身贴到沙面上。<strong>最佳时段是日落后的蓝调 18:49–19:16（9/25）／18:06–18:34（10/22）</strong>：此时 Hoboken 与 Jersey City 亮灯、水面转深蓝，是本区最容易出片的 25 分钟。<strong>这也是本条目里唯一能从容落三脚架的机位</strong>（沙滩宽、无人流冲突）：1–4 秒慢门把河面拉平成镜面，把对岸灯光拉成竖直光柱。16–24mm，机位低到离沙面 20 公分。"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>（已在官网 Rules & FAQ 逐条核实，无 timed entry 条款）。仅 The Amph 的付费演出需要票（座票 $25、站栏 $15，经官网或 TodayTix），<strong>行程窗口内基本无演出</strong>",
          "ticket": "<strong>免费。</strong>Hudson River Park 的 Pier 57 屋顶、Gansevoort Peninsula 与 Pier 45 同样免费",
          "hours": "官方原文：Little Island「opens at 6:00 am, 365 days a year unless weather conditions dictate otherwise」。分季时刻：<strong>3/8–5/24 为 6:00–23:00；5/25–9/7 为 6:00–24:00；9/8–10/31 为 6:00–23:00；11/1–12/31 为 6:00–21:00</strong>。恶劣天气会临时闭园，出发前查官网",
          "parking": "无自有停车场。West Street（West Side Highway）沿线路边位少，Chelsea 停车楼日价 $35–50。建议地铁或步行",
          "walk": "<strong>A/C/E 与 L 线 14th Street／8th Avenue 站</strong>步行约 1.0 公里／13 分钟；<strong>1 号线 Christopher Street 站</strong>到 Pier 45 约 600 米／8 分钟。从 Whitney 或 High Line 南端步行到 Little Island 入口约 500 米／7 分钟"
        },
        "notes": [
          "允许个人拍照录像，官方原文「Anyone is welcome to take photos and videos in the park, provided it does not create an unsafe condition or make exclusive use of any area」；<strong>商业摄影与影视拍摄一律不允许</strong>",
          "<strong>明确禁止无人机</strong>（官网禁止行为清单列有 Flying drones）",
          "三脚架无明文禁令，但 Little Island 步道窄、坡多、护栏低，<strong>日落时段挤到根本架不开</strong>；要用三脚架请改去 Gansevoort Peninsula 或 Pier 45",
          "只允许工作犬入园，<strong>情感支持动物不算工作犬</strong>",
          "水岸风大，10 月下旬日落后体感会掉到 5–8 度；<strong>河雾会在镜头前组凝水</strong>，请带擦拭布并给镜头留适应时间",
          "<strong>Pier 57 屋顶与 Little Island 都会因大风与雷雨临时闭园</strong>，同一天两处经常一起关，请把 Pier 45 当备份",
          "园内不设售票口也不设安检，但入园处有工作人员做人流管控，<strong>非常拥挤时会短暂排队等候</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/31/Hudson_River_Park_td_%282024-08-18%29_001_-_Little_Island_at_Pier_55.jpg",
            "cap": "Little Island 与混凝土桩阵列 · Tdorante10 / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Little_Island_Amphitheater%2C_New_York_City%2C_20231001_1824_1523.jpg",
            "cap": "圆形剧场 The Amph 与 Hudson · Jakub Hałun / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Hudson_River_Park_td_%282024-08-18%29_010_-_Little_Island_at_Pier_55.jpg",
            "cap": "自水面看桩顶的起伏 · Tdorante10 / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "whitney-museum",
        "n": 3,
        "name": "惠特尼美国艺术博物馆",
        "en": "Whitney Museum of American Art",
        "score": 4,
        "tldr": "每周五 17:00–22:00 全馆免费（已不是随喜付费，是真免费），这段正好包住日落；5–8 层露台需门票，周二闭馆，禁三脚架。",
        "tags": [
          {
            "t": "周五夜全馆免费",
            "c": "free"
          },
          {
            "t": "平日成人 $30",
            "c": "paid"
          },
          {
            "t": "周二闭馆",
            "c": "risk"
          },
          {
            "t": "禁三脚架",
            "c": "risk"
          }
        ],
        "highlights": [
          "2015 年 5 月启用的 Renzo Piano 新馆，地址 99 Gansevoort Street，正好坐在 High Line 南端起点与 Hudson 之间。建筑把 5–8 层的东侧做成四层外挑露台、再用外置钢楼梯串起来——<strong>露台与那组钢楼梯本身就是这一栏的主要摄影对象，比馆内展览更容易出片</strong>",
          "<strong>免费口径已经变了，必须说清：历史上的「周五晚随喜付费（pay-what-you-wish）」已被替换为直接免费。</strong>whitney.org 原文：「Admission to the Whitney is free for everyone from 5–10 pm every Friday night.」另有<strong>每月第二个周日全天免费</strong>，以及<strong>25 岁及以下常年免费</strong>",
          "一层（Floor 1 gallery、大堂、Whitney Shop、Frenchette Bakery）<strong>任何时候都免票</strong>，不需要门票就能进。<strong>但露台不在免票范围内</strong>——官方 FAQ 明确：「Visitors do need tickets to access the Museum's terraces, which are located on Floors 5–8 on the east side of the Museum.」",
          "<strong>露台朝东，这条决定了它全部的光线逻辑：</strong>日落时露台上看到的不是太阳，而是<strong>被落日正面打亮的 Manhattan 楼群与脚下的 High Line</strong>；真正的 Hudson 日落要从西侧展厅的整面落地玻璃看，那里有双层玻璃与天花板灯的反光。把这两件事搞混是这一栏最常见的失误"
        ],
        "photo": "建筑 <strong>4.5/5</strong>，风光 <strong>3.5/5</strong>，人像 <strong>4/5</strong>。外置钢楼梯与外挑板是一流的几何素材；扣分是禁三脚架、露台面积小、且周五免费夜正是全周最挤的时候。",
        "shots": [
          {
            "name": "8 层露台与外置钢楼梯（周五免费时段唯一要用掉的机位）",
            "view": [
              40.739633,
              -74.008939
            ],
            "desc": "<strong>周五 17:30–19:00（9/25，日落 18:49）／17:00–18:05（10/22，日落 18:06）</strong>——这是免费时段与最佳光线唯一重合的窗口，必须用掉。露台朝东，所以拍的是被落日侧光打亮的 Manhattan 楼群、脚下的 High Line 与 Meatpacking 的砖楼。24–35mm 沿露台栏杆向北拍 High Line 的纵深；70–200mm 压缩远处的 Empire State Building 与 One Vanderbilt。<strong>外置钢楼梯是这里最强的构图</strong>：从 7 层平台向上仰或向下俯拍楼梯的折线，14–24mm、f/8。禁三脚架，手持保持 1/125 秒以上；<strong>栏杆偏高，广角容易吃到栏杆下沿，把机身举过栏杆或干脆用栏杆做前景线。</strong>"
          },
          {
            "name": "西侧展厅落地窗看 Hudson 日落",
            "desc": "同一栋楼转到西侧展厅。<strong>这是馆内唯一能正对 Hudson 日落的位置</strong>（露台不朝西）。玻璃是双层且反光强，<strong>必须把镜头贴上玻璃并用手掌围住镜筒挡掉室内灯</strong>，带一块深色布或把外套披在镜头周围效果更好。日落方位 9/25 为 269.4°、10/22 为 255.9°，正对 Hoboken 与 Jersey City 天际线。35–85mm，避开超广以减少反光面积；<strong>画面上半部一定会有天花板灯带的鬼影，构图时把水平线压到画面下三分之一，让上半部留给天空渐变。</strong><strong>无独立 OSM 实体，地图不出针脚。</strong>"
          },
          {
            "name": "Gansevoort Street 街对面拍建筑体量（免票机位）",
            "view": [
              40.739415,
              -74.008178
            ],
            "desc": "站在 High Line 南端入口处拍，不需要进馆、不需要门票。<strong>上午 08:00–10:00</strong>：建筑东立面（面向 High Line 与 Washington Street 一侧）此时受直射光。16–24mm 从楼梯下方向上拍层层退台的悬挑；换 50mm 拍露台与钢楼梯的几何切割。<strong>日落时段这一侧转为剪影，反而适合拍露台上人物的轮廓——把长焦对准 7 层或 8 层露台的栏杆线即可。</strong>"
          }
        ],
        "access": {
          "book": "<strong>免费时段也需要票。</strong>官方原文：「though admission is free, tickets are required and capacity is limited」。<strong>Free Friday Nights 的免费票提前 5 周放出</strong>（「free tickets are available up to five weeks in advance」），线上先领；现场也发但容量有限。平日票可现场买或线上买",
          "ticket": "官方票价：<strong>成人 $30，65 岁以上与学生 $24，25 岁及以下免费</strong>。<strong>每周五 17:00–22:00 全馆对所有人免费</strong>，每月第二个周日全天免费。一层展厅、大堂、商店与 Frenchette Bakery 常年免票",
          "hours": "官方原文：<strong>周一 10:30–18:00；周二闭馆；周三 10:30–18:00；周四 10:30–18:00；周五 10:30–22:00；周六 10:30–18:00；周日 10:30–18:00</strong>。<strong>周二闭馆已核实</strong>（官网 Plan your visit 页与 2026 年 6 月 2 日新闻稿口径一致）。注：2026 年 6 月 16 日–8 月 18 日曾临时改为每周七天开放，该临时安排在行程窗口内已结束",
          "parking": "无自有停车场。Meatpacking 一带路边位极少且多为装卸区，停车楼日价 $40–60。建议地铁",
          "walk": "<strong>A/C/E 与 L 线 14th Street／8th Avenue 站</strong>步行约 700 米／9 分钟；<strong>从 High Line 南端 Gansevoort 入口下楼梯即到，约 80 米／1 分钟</strong>"
        },
        "notes": [
          "<strong>三脚架、独脚架、自拍杆与闪光灯全部禁止</strong>，官方原文「The use of flash, tripods, and selfie sticks is prohibited」，<strong>露台与户外区域同样适用</strong>",
          "个人非商业拍摄允许，但官方口径限于<strong>公共区域与永久馆藏展厅</strong>；临展区可能另挂「禁止拍摄」标示，以现场为准",
          "<strong>入馆所有包都要查</strong>（「All bags will be inspected upon arrival」），任何尺寸的行李箱都不准带入，-1 层有免费寄存与衣帽间",
          "周五免费夜有 DJ 与现场演出（官方节目单会提前公布），<strong>露台会挤满人</strong>；想拍空露台请挑周一或周四的 10:30 开门时段",
          "官方要求<strong>不得在未经同意的情况下拍摄馆内员工</strong>；同时入馆即视为同意被馆方拍摄用于宣传",
          "商业与编辑类拍摄不接受现场申请，需事先联系 Press Office 并可能要签 Location Agreement"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Whitney_Museum_from_west.jpg",
            "cap": "自西侧看 Renzo Piano 的悬挑体量 · Beyond My Ken / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/22/2025-05-15-Whitney-Museum-of_American-Art-Meatpacking-District-building.jpg",
            "cap": "东侧外挑露台与外置钢楼梯 · Gunnar Klack / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Square%2C_Whitney_Museum_of_American_Art_%28Unsplash%29.jpg",
            "cap": "博物馆与 Gansevoort Street 街景 · Michael Mroczek / CC0"
          }
        ]
      },
      {
        "id": "washington-square-park",
        "n": 4,
        "name": "华盛顿广场公园与 Greenwich Village",
        "en": "Washington Square Park & Greenwich Village",
        "score": 4,
        "tldr": "免费，6:00–24:00；拱门框住 Fifth Avenue 尽头的 Empire State Building 是唯一招牌构图，需 135–200mm；无在建工程。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "0:00–6:00 闭园",
            "c": "risk"
          },
          {
            "t": "人流嘈杂",
            "c": "risk"
          }
        ],
        "highlights": [
          "公园地下曾是 1797–1825 年的公共墓地，<strong>估计仍有约 2 万具遗骸埋在草坪之下</strong>；2015 年市政施工时在公园东侧挖出两个完整的地下墓室。这不是都市传说，是有考古记录的",
          "<strong>Washington Square Arch</strong> 由 Stanford White 设计。先有 1889 年为华盛顿就职百年立的临时版本（石膏与木头做的），因太受欢迎而在 1892 年改建为大理石永久拱门。高 23.5 米，开口宽约 9 米。<strong>拱门正对 Fifth Avenue 的南端起点——Fifth Avenue 的门牌号就是从这里开始编的</strong>",
          "<strong>招牌构图的几何（这是本条目的核心）：</strong>从拱门南侧沿 Fifth Avenue 轴线向北看，<strong>Empire State Building 在 2.1 公里外、方位角约 26.8°，而 Fifth Avenue 轴线约 28.0°</strong>（由 OSM 实体坐标算得）。也就是说帝国大厦只偏离轴线 1.2°，<strong>在拱门开口里落在中央偏左一点</strong>——这是全城最容易执行、也最好认的「地标套地标」构图",
          "喷泉在 2009 年完成的一期改造里被整体移位并对齐到拱门轴线上，所以「喷泉—拱门—Fifth Avenue—Empire State Building」现在是一条直线。同一期改造还把中央广场做平以实现无障碍，并让绿地面积增加约 20%",
          "<strong>2026 年施工状态：没有在建工程。</strong>2026 年 5 月 21 日社区委员会 CB2 全体会议通过决议（50 票中仅 6 票反对），要求公园管理处提出替代目前那套每晚人工搬移 NYPD 铁马围栏的方案——选项从简单的链条到与历史铁栅栏风格一致的永久铁门都有。<strong>但截至目前无正式设计、无成本估算、无施工，且因公园位于历史保护区还要过 Landmarks 委员会。行程窗口内不会有围挡或脚手架。</strong>"
        ],
        "photo": "人像 <strong>5/5</strong>，建筑 <strong>4/5</strong>，风光 <strong>2.5/5</strong>。街头人文与人像的密度是全区最高（街头象棋、跳水池的滑板与即兴演奏常年不断）；扣分是没有任何一个方向能拍到干净的天际线。",
        "shots": [
          {
            "name": "喷泉南侧沿 Fifth Avenue 轴线拍拱门框帝国大厦（招牌）",
            "view": [
              40.730823,
              -73.997452
            ],
            "desc": "针脚落在 Washington Square Fountain 的 OSM 实体。站在喷泉正南、Fifth Avenue 轴线上向北拍（<strong>实际站位需要向东挪几米才正好压在轴线上，这个微调点为推算、无 OSM 实体</strong>）。<strong>135–200mm 是必需焦段</strong>：帝国大厦在 2.1 公里外，50mm 拍出来只有指甲盖大小，200mm 才能把它压缩到与拱门开口相称。<strong>最佳时段是 07:00–08:30</strong>（9/25 日出 06:47、10/22 日出 07:15）：此时公园几乎无人、Fifth Avenue 两侧建筑受东侧来光、帝国大厦西南面亮。<strong>下午与傍晚这个方向是平光加逆光混合，拱门会整体掉进暗部。</strong>f/8–f/11 保证 2 公里外的塔顶也清楚；<strong>长焦压缩下热气流扰动明显，请连拍 5–8 张挑最锐的一张。</strong>"
          },
          {
            "name": "拱门下方仰拍藻井与华盛顿雕像",
            "view": [
              40.731235,
              -73.997103
            ],
            "desc": "<strong>14:00–15:00</strong>（9/25 太阳方位 206°、高度 45°；10/22 方位 204°、高度 35°）：太阳在正南略偏西，<strong>这是拱门北立面在这个季节唯一得到直射光的时段</strong>——其余时间朝北那一面全在阴影里。16–24mm 贴到拱门正下方向上仰拍拱腹的方格藻井，两侧基座上是两尊华盛顿像（西侧 \"Washington as Commander-in-Chief\"、东侧 \"Washington as President\"）。<strong>南立面（朝公园那一面）全天有光，是保底选项。</strong>拱门下常有街头乐手与滑板，1/500 秒以上可凝固动作。"
          },
          {
            "name": "Washington Mews 与 MacDougal Alley 的褐石小巷",
            "park": [
              40.7315,
              -73.996
            ],
            "view": [
              40.731441,
              -73.995665
            ],
            "desc": "Washington Mews 是公园东北角一条铺石弹石路的私巷（原是 Washington Square North 联排住宅的马厩改建，现属 NYU），MacDougal Alley 在拱门西侧（40.732391／-73.997766）是同类型的另一条。<strong>这两条巷子的价值是全天柔光</strong>：巷宽仅 6–8 米、两侧二层砖楼，<strong>正午也不会出现硬光，是行程被打乱时的保底人像机位。</strong>35mm 或 50mm 顺巷子方向拍纵深，f/2 让远端虚化；10 月下旬两侧的爬藤与街树转黄后色调最好。<strong>Washington Mews 是私产，铁门有时锁闭，只能从 Fifth Avenue 一侧的门口向内拍；请不要翻门。</strong>"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>每天 6:00 至次日 0:00</strong>（0:00–6:00 闭园，由 NYPD 与公园执法队每晚人工摆放铁马围栏封闭 11 个入口，包括拱门一侧那道 100 英尺宽的开口）。<strong>喷泉的水一般在 4 月至 10 月运行，10 月下旬有可能已停水，未能从官方渠道确认 2026 年的具体停水日期</strong>——如果冲着「喷泉喷水加拱门」去，请把这一点算进风险",
          "parking": "<strong>不要开车。</strong>Greenwich Village 路边表价约 $4.50–5.50/小时且几乎找不到位，停车楼日价 $40–60",
          "walk": "<strong>A/B/C/D/E/F/M 线 West 4th Street–Washington Square 站</strong>步行约 350 米／5 分钟；<strong>N/Q/R/W 与 4/5/6 线 8th Street–NYU 站</strong>步行约 500 米／7 分钟。从喷泉到拱门约 50 米／1 分钟，到 Washington Mews 约 250 米／4 分钟"
        },
        "notes": [
          "三脚架无明文禁令，公园对个人摄影很宽容；<strong>但拱门下与喷泉周边人流大，07:00–08:30 之外基本架不开</strong>",
          "<strong>商业拍摄需 NYC Parks 的许可</strong>（含婚纱、模特与商品拍摄）；纯个人旅拍不需要",
          "这是纽约最有名的街头演出与街头象棋据点，<strong>拍摄表演者时按惯例应投钱到琴盒或帽子里</strong>；被拒绝拍摄时请立刻停手",
          "<strong>公园东南角（约 MacDougal 与 West 4th 一带）夜间有毒品交易与酒精聚集</strong>，深夜不建议独自带器材停留；白天人多时安全",
          "喷泉周边的石阶在雨后很滑，<strong>放器材包前先看地面是否有积水</strong>",
          "<strong>本区秋色靠运气</strong>：NYC 盛期在 10 月 25 日–11 月 5 日，10 月 22 日只是接近盛期；公园里以美国榆与 London plane 为主，黄色为主调、缺红色，出片强度不如 Central Park"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Washington_Square_Arch%2C_New_York.jpg",
            "cap": "Washington Square Arch 正面 · Marco Almbauer / CC0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/15/Washington_Square_Park%2C_Manhattan_%282014%29_-_05.JPG",
            "cap": "喷泉与拱门的轴线关系 · Another Believer / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Washington_Square_Arch_September_2022.jpg",
            "cap": "九月的拱门与公园人流 · Kidfly182 / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "one-world-observatory",
        "n": 5,
        "name": "世界贸易中心一号楼观景台",
        "en": "One World Observatory",
        "score": 3.5,
        "tldr": "全城最高（386 米）但全封闭无露台；$31 起、每天 9:00–21:00；画面主体是海港与桥梁而不是 Midtown 天际线——想拍天际线该去 Midtown。",
        "tags": [
          {
            "t": "$31 起",
            "c": "paid"
          },
          {
            "t": "全封闭无露台",
            "c": "risk"
          },
          {
            "t": "禁三脚架",
            "c": "risk"
          },
          {
            "t": "强制安检",
            "c": "risk"
          }
        ],
        "highlights": [
          "位于 One World Trade Center 的 100–102 层，观景面海拔 <strong>1,268 英尺／386 米</strong>，是纽约可公开进入的最高观景层（建筑含天线 1,776 英尺／541 米，西半球最高）。SkyPod 电梯 <strong>47 秒</strong>到顶，轿厢内播 500 年纽约天际线演变的 LED 动画",
          "<strong>先说清取景局限，这决定了这张票值不值：它在下城最南端。</strong>从这里向北看，Empire State Building 与 One Vanderbilt 在 4–6 公里外，被一整片下城到中城之间的低层楼群垫在下面、显得又远又小。<strong>画面真正的主体是 New York Harbor、Statue of Liberty、Governors Island、Brooklyn Bridge 与 Manhattan Bridge——是海港与桥梁的地理，不是「教科书式 Manhattan 天际线」。</strong>想拍后者应该去 Midtown 的观景台（那里能把下城与上城同时收进一张）",
          "<strong>完全封闭、没有任何户外平台。</strong>Empire State 的 86 层、Top of the Rock 与 Edge 都有露台，这里没有。所有拍摄都要透过双层玻璃，<strong>而且天花板灯带会在玻璃上留下横向鬼影</strong>——这一条把夜景与蓝调的可行性砍掉一半",
          "三层分工：<strong>100 层</strong>主观景层（含 City Pulse 互动屏与 Sky Portal 地面投影）、<strong>101 层</strong> One Dine 餐厅与 ONE Mix 酒吧、<strong>102 层</strong> SEE FOREVER 剧场。全部票种都含三层",
          "官方设有 <strong>\"See Forever Commitment\"</strong>：在官方判定为零可见度的日子可改期或补偿，但原文口径是「at the discretion of the Observatory」——<strong>一般的雾霾与薄云不算，而且票本身是不可退的（non-refundable）</strong>"
        ],
        "photo": "风光 <strong>3.5/5</strong>，建筑 <strong>3/5</strong>，人像 <strong>2.5/5</strong>。海港与双桥的俯视角度独一无二；扣分是全封闭玻璃、禁三脚架、且门票价格与出片率不成正比。",
        "shots": [
          {
            "name": "100 层西南侧玻璃拍 Statue of Liberty 与 New York Harbor",
            "view": [
              40.712949,
              -74.013044
            ],
            "desc": "<strong>9/25 的 17:00–18:30、10/22 的 16:30–18:00</strong>：太阳在西南偏西（方位 250–256°），<strong>正好把 Statue of Liberty、Ellis Island 与 Governors Island 一带的水面打成一整片金色反光</strong>，自由女神在约 3.9 公里外。70–200mm 是主力（需要压缩距离），200mm 端能把女神像与背后的 Verrazzano-Narrows Bridge 叠在一起。<strong>镜头必须贴上玻璃</strong>：镜筒抵住玻璃、另一只手掌围成罩挡掉室内灯，否则整幅都是天花板灯带的鬼影。<strong>带一块深色布或把外套披在镜头周围是这里最有用的一件小器材。</strong>"
          },
          {
            "name": "100 层东侧拍 Brooklyn Bridge 与 Manhattan Bridge 双桥叠压",
            "desc": "<strong>上午 09:00–10:30 是这个方向唯一的顺光时段</strong>（9/25 太阳方位 113–127°、10/22 方位 122–135°，正在东南方，把两座桥的桥面与桥塔正面打亮）。<strong>这也恰好是全天人最少的时段</strong>——9:00 开门，而官方与第三方口径一致把 12:00–17:00 列为最拥挤。100–200mm 从略偏的角度向下压缩，让 Brooklyn Bridge 的两座花岗岩塔与 Manhattan Bridge 的钢塔在画面里前后叠成两层。<strong>下午这个方向是逆光加雾霾，基本废掉。</strong>与机位一同一层但不同侧，<strong>无独立 OSM 实体，地图不出针脚。</strong>"
          },
          {
            "name": "100 层北侧拍下城楼群俯视几何与玻璃前人物剪影",
            "desc": "<strong>正午 11:00–14:00</strong>（太阳高度 9/25 为 41–45°、10/22 为 33–35°）：<strong>这是唯一能让下城的屋顶、水塔与街道峡谷同时有光有影的时段</strong>，其余时段街道全在阴影里、俯视图会变成一片灰。70–200mm 垂直向下压缩拍屋顶阵列与水塔；或 24–35mm 把玻璃前观众的剪影作前景、楼群作背景——<strong>这是本条目人像唯一可行的构图，因为室内光远暗于窗外，人自然成剪影，不需要任何布光。</strong><strong>无独立 OSM 实体，地图不出针脚。</strong>"
          }
        ],
        "access": {
          "book": "<strong>强烈建议线上预购定时票。</strong>普通票绑定日期与 15 分钟到达时段；<strong>All-Inclusive Flex 票不绑时段、当天任意时间进</strong>——这一点对追日落的人有实际价值，因为日落时段的普通票经常先售空。Combination／Priority 票另含安检、电梯与出口的优先通道",
          "ticket": "<strong>官方页面不公布固定价格</strong>（动态定价，只写 \"Prices are subject to additional fees\"）。第三方汇总口径：<strong>General Admission $31 起（成人与 6–12 岁儿童 $31、65 岁以上 $35），Priority／Skip All Lines $59 起，All-Inclusive Flex $70 起，VIP 导览 $74 起，每笔交易另加 $3.50 手续费；6 岁以下免费但需在 Guest Services 领取免费票</strong>。<strong>另有第三方来源报出成人 $44–53，与上述口径矛盾，未能从官方渠道确认具体数字</strong>——请以下单页面当天显示为准。票为不可退（non-refundable）",
          "hours": "官方原文：<strong>Monday – Sunday 9:00 AM – 9:00 PM，全年 365 天开放</strong>（含公共假日）。<strong>末次入场约 20:00–20:10（闭馆前 45–60 分钟）</strong>。也就是说<strong>行程窗口内的日落（9/25 18:49、10/22 18:06）与蓝调都在营业时间内，闭馆前还剩 2–3 小时的纯夜景余量</strong>。特殊活动与假日可能调整，出发前查官方日历",
          "parking": "不建议开车。WTC 一带停车楼日价 $45–70",
          "walk": "入口在 <strong>West Street 与 Vesey Street 交口（117 West Street）</strong>；从 Oculus 大厅经地下通道过去约 300 米／4 分钟。地铁同 Oculus 条目"
        },
        "notes": [
          "<strong>三脚架明确禁止</strong>，官方 Prohibited Items 第 7 条：「Professional photo or video equipment including: tripods, lights, professional cameras (video or photo), recording devices」。<strong>但 FAQ 另有一句「DSLR cameras and flash pieces are permitted」——手持单反／无反是允许的</strong>，被禁的是架子、灯与摄像机",
          "<strong>强制安检</strong>（机场式），官方原文「all guests must submit to a security screening prior to entering the Observatory」。包件尺寸上限 <strong>25 英寸高 × 17 英寸宽 × 9 英寸深</strong>，超过不准进；<strong>现场没有寄存柜也没有行李暂存</strong>，最近的第三方寄存在 WTC 园区外",
          "禁止携带外带食品与饮料通过安检；17 岁以下须成人全程陪同",
          "<strong>请自己关掉闪光灯</strong>：对着玻璃打闪光只会得到一片白斑，而且会毁掉旁边所有人的照片",
          "<strong>不能走楼梯</strong>，上下全靠 SkyPod 电梯（官方原文明确楼梯仅供紧急疏散）",
          "<strong>当天能见度差就不要上去</strong>：先在地面看 One World Trade Center 的塔顶是否被云吞掉，票不可退",
          "偏振镜在这里基本没用（双层玻璃且入射角不定），<strong>橡胶或硅胶的可折叠贴玻璃遮光罩才是有效工具</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Midtown_Manhattan_skyline_from_the_One_World_Observatory%2C_New_York_City.jpg",
            "cap": "自观景台北望 Midtown（注意距离感） · Christian David / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Interior_of_the_One_World_Observatory_with_visitors_backlit_against_the_windows%2C_New_York_City.jpg",
            "cap": "玻璃前逆光的观众剪影 · Christian David / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Panorama_of_Midtown_Manhattan_from_the_One_World_Observatory%2C_New_York_City.jpg",
            "cap": "观景层全景接片 · Christian David / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "nine-eleven-memorial",
        "n": 6,
        "name": "9/11 国家纪念广场",
        "en": "National September 11 Memorial (Reflecting Pools)",
        "score": 4.5,
        "tldr": "广场免费、8:00–20:00、无票无安检；两个方形瀑布池只在柔光与夜间亮灯时成立，正午光比超 10 EV 必废。禁三脚架。",
        "tags": [
          {
            "t": "广场完全免费",
            "c": "free"
          },
          {
            "t": "博物馆 $36 需定时票",
            "c": "paid"
          },
          {
            "t": "禁三脚架",
            "c": "risk"
          },
          {
            "t": "拍摄需克制",
            "c": "risk"
          }
        ],
        "highlights": [
          "Michael Arad 与 Peter Walker 的方案「Reflecting Absence」，2011 年 9 月 11 日启用。<strong>两个各约 1 英亩的方池精确落在双塔原有的基础轮廓之内</strong>，水从四边下落 30 英尺进入池底，再从池底中央的方孔落入看不见的第二层——<strong>那个「看不到底的洞」是整个设计的核心：它拒绝给出一个终点。</strong>这也是它作为摄影对象的全部难度所在",
          "池沿是青铜栏板（官方术语 <strong>Names Parapets</strong>），刻着 2001 年 9 月 11 日与 1993 年 2 月 26 日两次袭击中丧生的 <strong>2,983</strong> 人姓名。<strong>名字不按字母排序，而按 \"meaningful adjacencies\" 排列</strong>——按当事人生前的关系分组（同一班飞机、同一层楼、同一个消防队、朋友与家人），这套排列由专门的算法与数年的人工核对共同完成",
          "<strong>广场是免费的，已核实。</strong>官方原文：「The 9/11 Memorial is free and open to the public seven days a week, 8 a.m.–8 p.m.」<strong>不需要票、不需要预约、没有安检</strong>——这一点与博物馆完全不同",
          "<strong>博物馆是独立的付费设施，必须提前买定时票。</strong>成人（18–64）<strong>$36</strong>、13–17 岁 $30、7–12 岁 $24、6 岁及以下免费但仍需领票；<strong>周三至周一以及部分周二 9:00–19:00，末次入场 17:30</strong>。<strong>每周一 17:30–19:00 免费入场</strong>，免费票每周一 07:00 ET 在官网放出、每人限 4 张、先到先得；每月第一个周日 16:00–19:00 对在纽约地区居住、工作或就读者免费（需证件）",
          "广场上另有两处容易被忽略：<strong>Survivor Tree</strong>（一棵在废墟中被救出、修复后重新栽回的美国梨树）与 <strong>Memorial Glade</strong>（2019 年增设的六块倾斜花岗岩，纪念因救援与清理工作而患病死亡者）。两处都不显眼，但作为单独的构图比方池更容易处理"
        ],
        "photo": "建筑 <strong>4.5/5</strong>，风光 <strong>2/5</strong>，人像 <strong>1/5</strong>。方池的几何与水幕的连续运动是极强的抽象素材；<strong>人像分极低不是技术问题——这里不适合拍人像，请不要在名字栏板前摆拍。</strong>",
        "shots": [
          {
            "name": "North Pool 西北角俯拍瀑布面与名字栏板",
            "view": [
              40.712139,
              -74.013176
            ],
            "desc": "<strong>先说清为什么正午一定失败：</strong>方池是下沉 30 英尺的深坑，正午太阳高度 9/25 为 48.2°、10/22 为 38.1°——此时池内一半是刺眼直射的花岗岩、另一半是全黑的阴影，<strong>光比超过 10 EV：青铜栏板上的名字会曝成一片死白，池底的第二层洞口则是纯黑，这不是后期能救回来的。</strong><strong>成立的时段只有两个：08:00–09:00</strong>（广场 8:00 开门，此时全池在柔和的漫射光里且人极少）<strong>与日落后到闭园的 18:49–20:00（9/25）／18:06–20:00（10/22）</strong>（池壁照明亮起，水幕在暖白灯下呈丝状）。24–35mm 沿栏板贴近拍水幕的纵深；70–200mm 单独压缩水幕的丝状纹理。<strong>手持约 1/15 秒能把水拉成柔和的帘子，再慢就抖了（禁三脚架）</strong>，请开机身防抖并连拍。"
          },
          {
            "name": "两池之间的广场看 Oculus 与 One World Trade Center",
            "view": [
              40.71103,
              -74.013081
            ],
            "desc": "针脚落在 Memorial South Pool 的 OSM 实体，站在池的北侧向北看。<strong>蓝调 18:49–19:16（9/25）／18:06–18:34（10/22）</strong>：此时 One World Trade Center 的玻璃体量、Oculus 的白色钢翼与池壁照明三者亮度正好平衡。16–24mm 把 South Pool 的栏板作前景线、One World Trade Center 放画面右上、Oculus 放左侧。<strong>白天这个方向的问题是 One World Trade Center 太高，广角会把它压成一块斜插的玻璃板；蓝调时它变成一根发光的柱子，反而更好构图。</strong>"
          },
          {
            "name": "青铜栏板的字母凹槽抽象细节",
            "desc": "<strong>全天可拍，阴天最好。</strong>100mm 或微距，只拍青铜上镌刻字母的凹槽边缘与表面的氧化纹理，<strong>不带人、不带完整姓名、不摆放任何物件。</strong>请注意分寸：官方规则明确禁止<strong>向池中投掷或放置任何物品（包括硬币）</strong>，也禁止<strong>用粉笔或其他有害标记直接写在栏板上</strong>；并明确要求尊重其他访客——原文「due to the somber nature of this establishment, not all visitors wish to be taped, photographed, recorded, or bothered in any other manner」，<strong>也就是不要拍摄正在悼念的人。</strong>常见的白玫瑰是工作人员在当事人生日当天插进名字凹槽里的，<strong>那是别人的纪念：拍全景可以，凑上去拍特写请征得同意或干脆放弃。</strong><strong>无独立 OSM 实体，地图不出针脚。</strong>"
          }
        ],
        "access": {
          "book": "广场<strong>不需预约</strong>。博物馆<strong>必须提前买定时票</strong>（最多可提前 6 个月购）；周一免费票每周一 07:00 ET 放出、每人限 4 张。预约可在开始前 24 小时以上退改，免费换票一次",
          "ticket": "广场<strong>免费</strong>。博物馆：<strong>成人（18–64）$36</strong>、13–17 岁 $30、7–12 岁 $24、6 岁及以下免费（仍需票）；导览团含门票 $48–60；Memorial + Museum 导览 $85；家庭套票 $106／$125。语音导览现场租借 $11（九种语言含 ASL），官方另有免费的 Bloomberg Connects 手机版",
          "hours": "广场官方原文：<strong>每天 8:00–20:00</strong>。博物馆：<strong>周三至周一以及部分周二，9:00–19:00，末次入场 17:30</strong>。<strong>注意官方写的是「and many Tuesdays」／「select Tuesdays」，即常规闭馆日是周二但部分周二仍开，具体日期只能在购票页面查当天</strong>——如果行程里只有周二能去博物馆，务必先查",
          "parking": "不建议开车。WTC 一带停车楼日价 $45–70",
          "walk": "广场四面开放（南界 Fulton St、北界 Liberty St、西界 West St、东界 Greenwich St）。<strong>Oculus 大厅西侧出口出来约 150 米／2 分钟</strong>；地铁同 Oculus 条目。博物馆入口在 180 Greenwich Street、广场南侧"
        },
        "notes": [
          "<strong>广场与博物馆内均禁止三脚架、独脚架与自拍杆</strong>，官方明列「Using tripods and/or professional camera and/or audio recording equipment」为禁止行为",
          "个人非商业拍摄在广场与博物馆内均允许，<strong>但博物馆内全程禁闪光灯</strong>（原文「The use of a flash is prohibited in all Memorial Museum areas, at all times」），且<strong>历史展区与 In Memoriam 纪念展区完全禁止拍照</strong>",
          "<strong>进博物馆要过机场式安检</strong>；三脚架即使被允许带入也是「permissible at the discretion of Security Staff」，实务上会被要求寄存",
          "<strong>广场没有安检，但有大量便衣与制服安保巡逻</strong>，架起大器材超过几分钟一定会被询问",
          "<strong>不要坐在栏板上、不要把器材包放在栏板上</strong>——这是本条目最容易被立刻制止的行为",
          "广场没有遮蔽，WTC 楼群之间风口效应明显，<strong>10 月下旬体感比街面低 3–5 度</strong>",
          "<strong>想拍空广场只有 08:00–08:30</strong>；9:00 之后旅游团开始进场，10:00–17:00 池沿基本站满人"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/North_reflecting_pool_of_the_National_September_11_Memorial%2C_New_York_City.jpg",
            "cap": "North Pool 与四面下落的水幕 · Christian David / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/9c/National_September_11_Memorial_South_Pool_-_03.jpg",
            "cap": "South Pool 与青铜名字栏板 · Oleg Yunakov / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/National_September_11_Memorial%2C_World_Trade_Center%2C_Manhattan%2C_New_York.jpg",
            "cap": "广场与 Oculus、One World Trade Center 的关系 · Christian David / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "oculus-wtc-hub",
        "n": 7,
        "name": "世界贸易中心交通枢纽（Oculus）",
        "en": "World Trade Center Transportation Hub (Oculus)",
        "score": 5,
        "tldr": "免费、几乎 24 小时的白色钢肋大厅；天窗光带沿纵轴对齐的时刻是 9/25 的 10:07、10/22 的 09:29；三脚架需提前 10 个工作日申请许可。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "三脚架需许可",
            "c": "risk"
          },
          {
            "t": "1:00–5:00 街面口关闭",
            "c": "risk"
          },
          {
            "t": "大楼梯禁拍",
            "c": "risk"
          }
        ],
        "highlights": [
          "Santiago Calatrava 设计，2016 年 3 月启用，造价约 40 亿美元，<strong>是全球最贵的火车站</strong>。外部由两组约 350 英尺长的白色钢「翼」构成，设计意象按 Calatrava 自己的说法是<strong>「一只从孩子手中飞出的鸟」</strong>",
          "主大厅净跨约 350 英尺、中央无一根落地柱。<strong>这是纽约最强的室内建筑摄影目标，而且完全免费、几乎 24 小时开放</strong>——在这一区里没有第二个点能同时满足这三条",
          "屋脊上是一条 <strong>355 英尺长的可开启天窗</strong>（最窄端 12 英尺、中央 22 英尺宽，由 40 块可回缩的防爆玻璃板组成）。Calatrava 把整栋建筑相对 Manhattan 街网<strong>刻意扭转了一个角度</strong>，使每年 9 月 11 日 10:28（北塔倒塌的时刻）阳光正好沿大厅纵轴投下一条光带，他称之为 <strong>\"Way of Light\"</strong>；这个角度同时呼应 Libeskind 总体规划里的 \"Wedge of Light\" 广场概念",
          "<strong>必须说清的坏消息：这条天窗打不开了。</strong>2018 年 9 月 11 日开启后橡胶密封条撕裂，港务局先用 Flex Tape 补漏花了约 3 万美元，2019 年正式以「due to continuing engineering analysis necessary to repair the skylight operating systems」为由不再开启。<strong>未能从官方渠道确认它此后是否修复过，请按「玻璃固定、不会打开」预期。</strong>网上那些「天窗大开、阳光直落」的照片基本是 2016–2018 年拍的",
          "<strong>但好消息是几何仍然成立：</strong>光要透过玻璃而不是透过空气，强度与边缘锐度会打折，太阳方位角的对齐关系却分毫不变——本条目下面给出的时刻表就是据此反推的"
        ],
        "photo": "建筑 <strong>5/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>0/5</strong>。全区最强的室内建筑目标且零门票；扣分只在于三脚架许可制度与两条最出名的大楼梯被列入禁拍区。",
        "shots": [
          {
            "name": "大厅正中仰拍钢肋对称（招牌构图）",
            "view": [
              40.711542,
              -74.011422
            ],
            "desc": "<strong>时刻表（由 9 月 11 日 10:28 的太阳方位角 128.4° 反推得出，本区最有用的一组数字）：天窗光带沿大厅纵轴对齐的时刻是 9 月 25 日 10:07（太阳高度 34.6°）、10 月 1 日 09:58、10 月 10 日 09:45、10 月 22 日 09:29（高度 21.9°）、10 月 31 日 09:19。</strong>越往后太阳越低，光带越长、越偏向大厅西北端，<strong>9 月底的对齐质量明显优于 10 月底</strong>；如果只能来一次，选 9 月那一档。14–20mm 超广是必需的（大厅高、钢肋密，24mm 已经装不下两侧钢肋的收束）；站大厅正中向上垂直仰拍，让钢肋在画面中央汇成对称的椭圆开口。<strong>拍 3–5 张包围曝光做 HDR</strong>，天窗与地面石材的光比通常超过 8 EV。地面是抛光石材，<strong>可以正向利用做对称倒影：机身贴近地面、把倒影放在画面下半部。</strong>"
          },
          {
            "name": "大厅长轴走道的钢肋透视与人流",
            "view": [
              40.711238,
              -74.010918
            ],
            "desc": "针脚落在 Entrance to Oculus 的 OSM 实体。<strong>08:00 前或 20:00 后是唯一的低人流窗口</strong>：Westfield 店铺 10:00 才开门，而通勤高峰 08:00–09:30 与 17:00–18:30 人最多。24–35mm 沿大厅长轴拍钢肋阵列的重复韵律；<strong>换 70–200mm 从走道端头压缩，把两侧钢肋叠成密集的白色网格——这是本条目最抽象、最耐看的一张。</strong>想拍人流虚影需要 1/8–1/2 秒，<strong>但禁三脚架意味着手持做不到</strong>：折中办法是把机身抵在栏杆或柱子上、1/8 秒开防抖连拍 10 张挑一张。"
          },
          {
            "name": "Church Street 一侧 North Oculus Plaza 拍钢翼外观",
            "view": [
              40.712086,
              -74.009874
            ],
            "desc": "<strong>蓝调 18:49–19:16（9/25）／18:06–18:34（10/22）是唯一成立的时段。</strong>大厅内部亮灯后整栋建筑变成一只发光的白色灯笼，与背景 One World Trade Center 的深色玻璃体量形成冷暖与明暗的双重对比。16–24mm 从东北侧仰拍钢肋的尖端；<strong>白天这个角度是纯白建筑对着亮天空，反差极低，画面会非常平——蓝调是唯一的解。</strong>这里是港务局官方明列的允许拍摄区（North Oculus Plaza），可以放心拍。"
          }
        ],
        "access": {
          "book": "不需预约。<strong>但带三脚架需提前申请许可，见 notes</strong>",
          "ticket": "<strong>免费。</strong>官方口径：进入 Oculus 大厅与各公共通道完全免费，只有购物、餐饮与乘 PATH／地铁才付费",
          "hours": "大厅作为交通设施基本全天开放，<strong>但港务局明确：「The Oculus street level access is limited overnight from 1:00 am to 5:00 am」</strong>——这段时间要走 Vesey Street 或 Fulton Street 经 2 WTC 北通道进出。Westfield 店铺（官方原文）：<strong>周一–周五 10:00–20:00，周六 10:00–19:00，周日 11:00–18:00</strong>。<strong>想拍空大厅就在 10:00 前到</strong>",
          "parking": "不建议开车，WTC 一带停车楼日价 $45–70",
          "walk": "<strong>PATH 线 World Trade Center 站</strong>直达大厅；<strong>地铁 E 线 World Trade Center 站、R/W 线 Cortlandt Street 站，以及 2/3、4/5、A/C、J/Z 线 Fulton Street 站</strong>均由地下通道直连，<strong>不用出地面</strong>。9/11 Memorial 池就在大厅西侧出口外约 150 米／2 分钟，One World Observatory 入口约 300 米／4 分钟"
        },
        "notes": [
          "<strong>三脚架需要许可，这一条与博物馆规则不同、务必读清</strong>：港务局官方 FAQ 原文「If you're bringing a tripod or have a crew of five or more (including for non-commercial use), a permit is required.」——<strong>即使非商业个人拍摄，带三脚架也要提前申请 Short Form Photo Permit，审批周期 10 个工作日</strong>。手持拍摄不需要许可",
          "官方明列的<strong>允许拍摄区</strong>只有：Oculus 主大厅（Oculus floor / main concourse）、North 与 South Oculus Plaza、2 WTC Plaza、Cortlandt Way、Liberty Park",
          "官方明列的<strong>禁止拍摄区</strong>：所有垂直交通（电梯、扶梯、楼梯、坡道）、<strong>Fulton Stairs 与 Grand Stairs</strong>、Oculus 东西两侧的 grade projection、Westfield 服务台、PATH 站台层与闸机内。<strong>大厅里那两条最出名的大楼梯正好在禁拍名单上</strong>，站在楼梯上架机会被安保叫停",
          "不合规拍摄会被安保记录，官方原文「will be flagged by security and not allowed to shoot at World Trade Center campus」——<strong>后果是整个园区都不能再拍</strong>",
          "手持长曝光不可行，<strong>请把 ISO 提到 1600–6400 并开机身防抖，带一支 f/1.4–f/2.8 广角会显著提高成功率</strong>",
          "<strong>这是运营中的交通枢纽，不是博物馆</strong>：通勤高峰时段站在大厅正中仰拍会挡住人流，会被要求移动。请贴着一侧或选 08:00 前",
          "大厅冬暖夏凉但气流很强，<strong>从地下站台上来时镜头容易结雾</strong>，请留 5–10 分钟适应温差"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Oculus_%2841323p%29.jpg",
            "cap": "大厅钢肋与天窗全景 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Oculus_Interior_252.jpg",
            "cap": "大厅内部钢肋阵列 · Kidfly182 / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/One_World_Trade_Center_through_the_Oculus_%2891538%29.jpg",
            "cap": "自大厅内透过天窗看 One World Trade Center · Rhododendrites / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "brooklyn-bridge-manhattan",
        "n": 8,
        "name": "布鲁克林大桥（Manhattan 侧步道）",
        "en": "Brooklyn Bridge (Manhattan-Side Promenade)",
        "score": 5,
        "tldr": "免费 24 小时；2021 年自行车道移下步道后拥挤度实质改善；哥特拱对称构图是日出题材，9/25 要 06:00 上桥、10/22 要 06:30。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "24 小时开放",
            "c": "free"
          },
          {
            "t": "日出前才有空景",
            "c": "risk"
          },
          {
            "t": "桥上风大",
            "c": "risk"
          }
        ],
        "highlights": [
          "1883 年通车，主跨 1,595.5 英尺，<strong>通车时是全球最长的悬索桥，也是首座使用钢缆的悬索桥</strong>。两座新哥特式花岗岩桥塔各高 276.5 英尺，<strong>塔上的双尖拱开口是这座桥全部辨识度的来源，也是本条目唯一真正的招牌</strong>",
          "设计者 John A. Roebling 在勘测时被渡船压伤脚趾，因破伤风于 1869 年去世；工程由其子 Washington Roebling 接手，而 Washington 因潜水沉箱作业患上沉箱病（decompression sickness）而瘫痪。<strong>此后十余年的现场指挥实际上由他的妻子 Emily Warren Roebling 完成</strong>——她自学了索力计算与工程规范，是这座桥事实上的总工程师",
          "<strong>2021 年的改造是本条目最重要的事实：市政府把自行车道从步道移到了桥面机动车道</strong>（占用一条车道做双向保护自行车道），<strong>从此步道只走行人</strong>。日均自行车量从 2021 年的 2,652 辆翻倍到 2025 年的 5,625 辆，而这些车全部不在步道上——<strong>步道拥挤程度因此实质性改善，网上 2020 年之前那些「挤到没法拍照」的说法已经过时。</strong>",
          "<strong>2026 年又补了最后一刀。</strong>DOT 于 2026 年 4 月动工、7 月完工：把 Centre Street（Chambers Street 至桥头之间）的一条南向机动车道改成双向保护自行车道，给自行车划了单独的过街道，并把 City Hall Park 与桥头之间那条南侧人行横道加宽一倍。<strong>Manhattan 侧原来那个「自行车急转弯冲进行人堆」的瓶颈至此彻底解决，截至 2026 年 7 月已有现场报道确认建成。</strong>步道日均行人仍近 3 万人",
          "<strong>这个人流量决定了拍摄策略：不是「早点去」，而是「日出前必须已经站在桥上」。</strong>由 OSM 实体坐标算得桥轴走向约 <strong>136°／316°</strong>，Manhattan 侧步道向 Brooklyn 望去是东南 136°；日出方位 9/25 为 90.6°、10/22 为 104.0°，<strong>太阳从视线左前方约 32–45° 升起，正好斜照在花岗岩塔的东北面与钢缆上——这是唯一能让塔身有立体感、缆索有高光的时段。傍晚这个方向全在阴影里。</strong>"
        ],
        "photo": "建筑 <strong>5/5</strong>，风光 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>。哥特拱与钢缆的几何是全城最强的桥梁构图，而且日出、日落、蓝调三个时段各有不同方向的正确用法；扣分只有人流一项。",
        "shots": [
          {
            "name": "Manhattan 塔正下方向东南拍拱与缆索对称（招牌构图）",
            "view": [
              40.706205,
              -73.997003
            ],
            "desc": "<strong>这是日出题材而不是日落题材，理由是几何（见 highlights 里的桥轴与日出方位）。具体钟点是本条目的关键：9 月 25 日请在 06:00 之前就站上步道</strong>（民用晨光 06:20 开始、日出 06:47）；<strong>10 月 22 日请在 06:30 之前</strong>（民用晨光 06:48、日出 07:15）。<strong>晚 30 分钟就会有跑步与拍照的人流开始，对称构图里再也去不掉人。</strong>16–24mm 站在步道正中央（木板铺装的中缝就是对称轴）向上向前拍，让双尖拱居中、两侧缆索呈放射状收向塔顶；<strong>f/8–f/11 能把初升的太阳拍成穿过缆索的星芒。</strong>从步道入口走到这里约 800 米／11 分钟，<strong>请把这段时间算进出发时刻。</strong>"
          },
          {
            "name": "桥中段向西北回望 Manhattan 天际线（日落与蓝调）",
            "view": [
              40.705117,
              -73.995637
            ],
            "desc": "<strong>9/25 的 18:12–19:16、10/22 的 17:28–18:34（金光加蓝调）。</strong>视线 316°（西北），日落方位 269°／256° 在视线左侧 47–60°，<strong>所以太阳不在画面里，但 Financial District 的玻璃楼群正面受光——这才是这个方向的正确用法。</strong>24–35mm 让缆索的网格作前景框、下城楼群落在拱门开口中；70–200mm 压缩，让 One World Trade Center 与 8 Spruce Street 叠进缆索的缝隙里。<strong>日落后 20–30 分钟的蓝调版本（楼群亮灯、天空仍有余蓝）是这个机位全天最好的一张。</strong>"
          },
          {
            "name": "Manhattan 侧步道入口的引桥透视（唯一能架三脚架的机位）",
            "park": [
              40.7121,
              -74.0044
            ],
            "view": [
              40.712114,
              -74.004431
            ],
            "desc": "<strong>入口位置说清：在 Centre Street 与 Park Row 交口、City Hall Park 东北角。</strong>地铁 4/5/6 线 Brooklyn Bridge–City Hall 站或 J/Z 线 Chambers Street 站出来即是。<strong>这里正是 2026 年 7 月刚改造完的路段，行人与自行车已完全分流，走错道的概率大幅降低。</strong>拍摄上：<strong>日出前的蓝调 06:20–06:47（9/25）／06:48–07:15（10/22）</strong>，24mm 沿引桥向东南拍木板步道的纵深收束，把 Manhattan 塔放在消失点上。<strong>引桥段较宽且此时无人，这是全桥唯一能从容落三脚架的时段与位置</strong>——2–8 秒慢门可以把偶尔经过的行人抹成透明的雾。"
          },
          {
            "name": "拱门开口下的人物逆光剪影（人像机位）",
            "view": [
              40.704209,
              -73.994485
            ],
            "desc": "<strong>日出后 06:47–07:30（9/25）／07:15–08:00（10/22）。</strong>低角度阳光顺着桥轴斜射，<strong>把人物放在塔的拱门开口正下方拍逆光剪影</strong>，缆索在背景里自然形成放射线。85–135mm 从人物西北侧 20–30 米处压缩拍，<strong>长焦压缩会让拱门在人物背后放大成一个巨大的哥特画框。</strong>这个时段人少到可以等到画面里只剩你的模特；<strong>08:30 之后就不可能了。</strong>曝光按天空测光再减 0.7 EV，让人物成纯剪影。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费，24 小时开放</strong>（行人步道）",
          "hours": "无固定开放时间。<strong>步道全天候可走，但夜间照明不足，凌晨与深夜的自动对焦会很困难</strong>，请开峰值对焦或手动预对焦到无限远",
          "parking": "桥两端<strong>没有专用停车场</strong>。Lower Manhattan 停车楼日价 $40–60。强烈建议地铁",
          "walk": "<strong>4/5/6 线 Brooklyn Bridge–City Hall 站</strong>或 <strong>J/Z 线 Chambers Street 站</strong>出站即到步道入口（Centre Street／Park Row）；<strong>R/W 线 City Hall 站</strong>步行约 400 米／5 分钟。从入口走到 Manhattan 塔约 <strong>800 米／11 分钟</strong>，走到 Brooklyn 一侧尽头约 1.8 公里／28 分钟"
        },
        "notes": [
          "<strong>自行车自 2021 年起已不在步道上</strong>，但电动滑板车与外卖电单车仍偶有违规上步道，架三脚架时留意背后",
          "三脚架无明文禁令，<strong>但步道日均近 3 万行人，实务上只有日出前那 30–40 分钟架得开</strong>",
          "<strong>步道是木板铺装且板间有缝</strong>：滤镜、镜头盖、电池掉下去就直接落到桥面机动车道，缆索之间也是敞开的",
          "桥上风大且完全无遮蔽，<strong>10 月下旬日出前体感可到 5 度以下</strong>，手会僵——带一副薄手套",
          "<strong>不要为了构图爬上缆索或护栏</strong>：这是违法的，每年都有人因此被逮捕或坠落",
          "<strong>桥头 City Hall Park 一带清晨有无家可归者聚集</strong>，日出前独自带器材前往建议结伴；步道上本身安全（有跑步人流与巡逻）",
          "桥面机动车道的施工与活动会临时改变通行安排，<strong>出发前查 NYC DOT 的桥梁公告</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/94/2024-06-15_09_55_03_View_from_the_pedestrian_walkway_of_the_Brooklyn_Bridge_northwestward_towards_the_Manhattan_tower_in_Manhattan%2C_New_York_City%2C_New_York.jpg",
            "cap": "自步道望 Manhattan 塔的双尖拱 · Famartin / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/b0/2024-06-15_09_53_30_View_from_the_middle_of_the_Brooklyn_Bridge_looking_northwest_along_the_pedestrian_walkway_in_Manhattan%2C_New_York_City%2C_New_York.jpg",
            "cap": "桥中段向西北看步道与缆索 · Famartin / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/25/Brooklyn_Bridge_as_viewed_from_pedestrian_walkway.jpg",
            "cap": "缆索网格与塔的对称关系 · Guushing / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "staten-island-ferry",
        "n": 9,
        "name": "史泰登岛渡轮",
        "en": "Staten Island Ferry",
        "score": 4.5,
        "tldr": "全免费、24 小时、单程 25 分钟；去程站右舷（starboard）拍自由女神、回程站左舷；金光请搭 18:00（9/25）或 17:15（10/22）那班。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "24 小时不停",
            "c": "free"
          },
          {
            "t": "不需票不需预约",
            "c": "free"
          },
          {
            "t": "甲板拥挤且晃",
            "c": "risk"
          }
        ],
        "highlights": [
          "纽约市自 1905 年起自营，<strong>完全免费、24 小时、365 天不停</strong>，单程 5.2 英里／约 25 分钟。NYC DOT 官方数据：年运量超过 1,600 万人次，平日五条船跑 117 班、载客约 4.5 万人；周末三条船跑 96 班。<strong>这是全世界成本最低的自由女神与下城天际线水上机位，成本为零。</strong>",
          "航线从 <strong>Whitehall Terminal（4 South Street）</strong>到 <strong>St. George Terminal（1 Bay Street）</strong>，<strong>航道在 Liberty Island 以东约 0.5 英里（约 800 米）处经过</strong>，不停靠。所以这里拍到的自由女神是中景不是特写——<strong>200mm 端雕像大约占画面高度三分之一，这就是它的上限。</strong>",
          "<strong>左右舷是这一栏的全部价值，必须记住：从 Whitehall 出发（南下）时自由女神在右舷（starboard，船的右侧）；从 St. George 返回（北上）时在左舷（port，船的左侧）。</strong>记法很简单——<strong>无论哪个方向，自由女神都在西侧</strong>。这也直接推出了光线逻辑：<strong>它在西侧，所以傍晚一定是逆光，早晨才是正面受光。</strong>",
          "上层露天甲板朝 New Jersey 那一侧总是最挤。<strong>挤不进去就下到主甲板：视野同样开阔，空间反而更大，而且船体振动略小。</strong>",
          "班次（NYC DOT 官方时刻表口径）：<strong>平日高峰（约 6:00–9:30 与 15:30–20:00）每 15–20 分钟一班，平峰每 30 分钟，深夜 30–60 分钟；周末全天每 30 分钟（整点与半点），无高峰加密。</strong>新年、马丁·路德·金纪念日、总统日、阵亡将士纪念日、六月节、独立日、劳动节、感恩节与圣诞节按周末时刻表。2026 年 5 月 20 日冬季检修结束后已恢复全额班次，<strong>行程窗口内不受检修影响</strong>"
        ],
        "photo": "风光 <strong>4.5/5</strong>，建筑 <strong>4/5</strong>（下城天际线），人像 <strong>3.5/5</strong>。零成本换到别处买不到的水上视角，且班次密到可以按光线挑船；扣分是甲板晃、拥挤、且站位不能自己选。",
        "shots": [
          {
            "name": "去程右舷拍自由女神（Whitehall → St. George）",
            "park": [
              40.701,
              -74.013
            ],
            "view": [
              40.700995,
              -74.012968
            ],
            "desc": "针脚落在 Staten Island Ferry Whitehall Terminal 的 OSM 实体（登船点，船上无固定坐标）。<strong>登船后立刻走到右舷（starboard），离港约 8–12 分钟后自由女神最近。</strong>光线上要认清：<strong>雕像在航道西侧，所以傍晚它是逆光。</strong>逆光版本很好用（女神像剪影压在落日余晖上），<strong>但想要正面受光的女神像必须走早班：9/25 的 07:00–08:30 或 10/22 的 07:30–09:00</strong>（此时太阳在东南、方位 95–122°，从船的方向正打在雕像正面）。70–200mm 是必需焦段；<strong>船在动，快门不要低于 1/500 秒</strong>，开镜头防抖但不要开三脚架模式。"
          },
          {
            "name": "回程左舷拍下城天际线金光（本条目的核心推荐）",
            "desc": "<strong>这是本条目最值得执行的一条，直接给班次：</strong><strong>9 月 25 日（周五，日落 18:49，金光 18:12–18:49，蓝调至 19:16）：搭 Whitehall 18:00 那班南下（18:25 抵 St. George），立刻转 18:30 那班北上</strong>——你会在 18:30–18:55 正好横在港中央，太阳 18:49 落下，下城天际线在正前方被最后的暖光正面打亮，随后进入蓝调、楼群亮灯。<strong>这一趟是整个窗口最优的一班。</strong><strong>10 月 22 日（周四，日落 18:06，金光 17:28–18:06，蓝调至 18:34）：搭 Whitehall 17:15 南下（17:40 抵），转 17:45 北上；想要纯蓝调版本就改搭 18:00 北上那班。</strong><strong>周末只有整点与半点两班，请按 18:30（9 月底）／18:00（10 月底）北上取整。</strong>构图：站左舷偏船头，24–70mm 拍下城天际线全景（One World Trade Center 在画面左、Brooklyn Bridge 与 Manhattan Bridge 在右后方）；70–200mm 压缩 Financial District 楼群。<strong>回程时太阳在左后方（方位 256–269°），楼群受的是正面偏侧的光，这正是拍天际线最好的光位。</strong><strong>机位在水面上，无 OSM 实体，地图不出针脚。</strong>"
          },
          {
            "name": "Whitehall Terminal 候船大厅的落地玻璃",
            "view": [
              40.700995,
              -74.012968
            ],
            "desc": "候船大厅整面朝南的落地玻璃正对港口。<strong>候船的 10–25 分钟不要浪费：日落后的蓝调 18:49–19:16（9/25）／18:06–18:34（10/22）</strong>，用 35–85mm 拍玻璃前候船人群的剪影与港口余晖，或等另一艘橙色渡轮进港作主体。<strong>这是本条目唯一能架三脚架的地方</strong>（室内、地面固定），但仍要避开人流通道。玻璃有反光，把镜头贴上去或用手掌围罩。"
          },
          {
            "name": "船尾拍尾流与 Verrazzano-Narrows Bridge",
            "desc": "去程船尾朝北，<strong>回程船尾朝南、正对 Verrazzano-Narrows Bridge</strong>（约 6 公里外）。<strong>回程 17:00–18:00 用 70–200mm 从船尾压缩大桥与尾流的白色扇形</strong>，逆光下尾流会呈半透明的丝状。<strong>快门 1/1000 秒以上——船尾是全船振动最大的位置</strong>，低于这个值几乎必糊。<strong>无 OSM 实体，地图不出针脚。</strong>"
          }
        ],
        "access": {
          "book": "<strong>不需预约、不需票、不需刷卡，直接走上船。</strong><strong>码头附近有人向游客推销「渡轮票」，那是骗局——渡轮不卖票。</strong>",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>24 小时、365 天。</strong>NYC DOT 官方时刻表：<strong>平日高峰约每 15–20 分钟一班，平峰每 30 分钟，深夜 30–60 分钟；周末全天每 30 分钟（整点与半点）</strong>。主要联邦假日按周末时刻表。官方把「晚于表定时刻 6 分钟以上」定义为延误，可向站务索取延误证明",
          "parking": "Whitehall Terminal 没有游客停车场。强烈建议地铁",
          "walk": "<strong>1 号线 South Ferry 站</strong>直连候船大厅；<strong>R/W 线 Whitehall Street 站</strong>与 <strong>4/5 线 Bowling Green 站</strong>步行 3–5 分钟。从 9/11 Memorial 步行到 Whitehall 约 1.4 公里／18 分钟，或坐 R/W 线两站"
        },
        "notes": [
          "<strong>到 St. George 必须下船</strong>（全部乘客清舱），然后走回闸口重新排队上下一班；<strong>转乘间隔通常只有 5–10 分钟，动作要快</strong>——这也是上面班次推荐能成立的前提",
          "想占到右舷／左舷的外侧栏杆位，<strong>请在开船前 10 分钟就进候船区、排在队伍前端</strong>；开船后再挤是挤不到的",
          "<strong>允许携带并使用相机与三脚架，但甲板人多、船体持续振动，三脚架在船上毫无意义</strong>；请用高快门加机身防抖",
          "甲板风极大，<strong>10 月下旬水上体感会比岸上低 6–10 度</strong>；<strong>换镜头请进室内舱做</strong>，海水飞沫对镜头前组与传感器都不友好",
          "这是通勤设施：<strong>平日 17:00–19:00 的北上班次会挤满下班人流，而这与最佳光线时段完全重叠</strong>——要么接受挤，要么改在周末（每 30 分钟一班、以旅客为主）",
          "船上有厕所与小卖部（部分船只供应啤酒），<strong>但不要指望能安静构图</strong>",
          "<strong>不要试图从船上拍 Ellis Island 的建筑细节</strong>：航道离 Ellis Island 比离 Liberty Island 更远，400mm 也拍不出细节"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Statue_of_Liberty_from_Staten_Island_Ferry%2C_January_8_2026.jpg",
            "cap": "自渡轮看自由女神（右舷视角） · Dillan Payne / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/View_of_Liberty_Island_from_Staten_Island_Ferry%2C_NYC%2C_20231002_1645_1793.jpg",
            "cap": "十月傍晚的 Liberty Island · Jakub Hałun / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/57/Statue_of_Liberty_from_the_Staten_Island_Ferry_Evening_%286251160214%29.jpg",
            "cap": "傍晚逆光下的女神像剪影 · Tony Hisgett / CC BY 2.0"
          }
        ]
      }
    ]
  },
  {
    "id": "brooklyn",
    "name": "Brooklyn 与 Queens · 桥、天际线与秋色",
    "navName": "Brooklyn",
    "color": "#4da3ff",
    "lead": "这一区的价值在于「同一条河的另一侧」：Manhattan 的天际线在这里是<strong>被拍摄对象</strong>而不是你站的地方，而且八个点位里有六个完全免费。但整区的成败几乎只由一件事决定——<strong>秋色时间</strong>。Prospect Park、Brooklyn Botanic Garden、Green-Wood 三个点全靠落叶树，而<strong>Kings County（Brooklyn）与 Queens County 的 2026 年预报峰值是 10 月 21 日前后</strong>，是全纽约州最晚的一档。<strong>10 月 15 日之前去这三个地方，你拍到的基本是绿色的树。</strong>两个好消息：<strong>Brooklyn Heights Promenade 完全开放</strong>（BQE 三重悬臂大修 2030 年才破土，2026 年秋天只是在做环评听证）；<strong>Coney Island 两家游乐场都还在营业</strong>，Deno’s Wonder Wheel 的 2026 赛季末日是 <strong>10 月 25 日</strong>——但只在周末与犹太节日开，日期表必须逐日对。一个坏消息：DUMBO 的 Washington Street 是一条<strong>有车通行的活街道</strong>，而且任何一个「合理的钟点」你都会和几十个人抢同一块石板。",
    "callouts": [
      {
        "type": "warn",
        "title": "本区最重要的一条：Brooklyn 秋色峰值在 10 月 21 日前后",
        "html": "<p>纽约市是全州最晚变色的地方，原因是<strong>城市热岛效应把物候整体往后推</strong>，加上临海气温缓冲。具体数字：<strong>More Than Just Parks 的县级模型给 Kings County（Brooklyn）、Queens County、Richmond County 的 2026 年峰值都是 10 月 21 日</strong>，是全州 62 个县里最晚的一档（同一模型给 Greene County 的是 10 月 2 日，给全州中位数的是 10 月 13 日），误差带自报为 <strong>±10 天</strong>。<strong>Old Farmer’s Almanac 的 2026 年秋色图更晚，把纽约市标在「11 月 1 日前后达到或接近峰值」</strong>，并注明色彩可以拖到 11 月初。</p><p><strong>结论，请按这个用：10 月 15 日之前，Prospect Park / Brooklyn Botanic Garden / Green-Wood 三处基本还是绿的，去了只能当公园逛，拍不到秋色；10 月 20 日–11 月 5 日才是真窗口；10 月 22 日恰好踩在预报峰值的第一两天上，是本行程窗口内唯一站得住的秋色日期。</strong>如果你的日期落在 9 月底或 10 月上旬，请把这三个点的期望值调成「建筑与地形」而不是「颜色」，把预算挪给 DUMBO、Brooklyn Bridge Park、Gantry Plaza 这些不依赖季节的点。</p><p>行前查什么：<strong>I LOVE NY 的官方每周秋色报告</strong>（州旅游局出，逐周更新，但有提前喊峰值的动机）；<strong>New York Botanical Garden（Bronx）的实时树种色彩清单</strong>是纽约市范围内最靠得住的实时口径，虽然在 Bronx，但和 Brooklyn 只差几天。<strong>Brooklyn Botanic Garden 本身没有实时秋色追踪器</strong>——它只有一个静态的 Fall Highlights 页面和一份 What’s in Bloom 植物清单，不要指望它给你「今天几成」。</p>"
      },
      {
        "type": "warn",
        "title": "Coney Island 2026 赛季：Labor Day 后只开周末与犹太节日，10/25 收摊",
        "html": "<p><strong>先记住一件最容易踩的事：Wonder Wheel 和 Cyclone 属于两家不同的公司，日历不一样。</strong>Wonder Wheel、Phoenix、Spook-A-Rama 在 <strong>Deno’s Wonder Wheel Amusement Park</strong>；Cyclone、Thunderbolt、Tony’s Express 在 <strong>Luna Park</strong>。想拍「亮着灯还在转的 Wonder Wheel」，必须是 Deno’s 的营业日。</p><p><strong>Deno’s 官网已公布逐日 2026 日历，9/25–10/25 窗口内的营业日是：</strong></p><ul><li><strong>9/26（六）– 10/1（四）：连续六天全开</strong>（Sukkot 假期），是本窗口条件最好的一段</li><li>10/3（六）、10/4（日）</li><li>10/10（六）、10/11（日）、10/12（一，Indigenous Peoples’ Day）</li><li>10/17（六）、10/18（日）</li><li><strong>10/24（六）、10/25（日）——2026 赛季最后两天，之后整园关闭至 2027 年</strong></li></ul><p><strong>其余所有日期 Deno’s 都闭园，包括 9/25（周五）与 10/2（周五）——官网明确标注「Closed」。</strong>Deno’s 的开门时间是儿童区 11:00、Wonder Wheel 等成人机械 12:00。<strong>关园时间随天气浮动，2026 年 10 月的具体闭园钟点官网未公布——未能从官方渠道确认。</strong>作为参照，2025 年 10 月的官方口径是儿童区与成人机械都 <strong>18:00 关</strong>；若 2026 年照此执行，则 10 月中下旬（10/17 日落 18:13、10/24 日落 18:03）<strong>你会在摩天轮灯亮之前就被清场，拍不到蓝调亮灯轮</strong>。当天出发前请打 (718) 372-2592 问实际关园时间。</p><p><strong>Luna Park</strong> 的 Halloween Harvest 官方期间为 <strong>9/18–11/1</strong>，整季通票有效期写到 <strong>2026 年 11 月 1 日</strong>。官网活动日历已展开到 10 月 1 日，9 月的口径是：<strong>周五 16:00–22:00、周六 11:00–22:00、周日 11:00–20:00、节假周中 12:00–20:00</strong>（9/25 五 16:00–22:00、9/26 六 11:00–22:00、9/27 日 11:00–20:00、9/28–10/1 每天 12:00–20:00）。<strong>10 月 2 日以后的逐日钟点官网日历尚未展开，未能确认</strong>，按 9 月规律推测是「周五 + 周末 + Columbus Day」，但请以官网 lunaparknyc.com/plan/park-hours 为准。</p><p><strong>如果只能挑一天：选 9 月 26 日（周六）。</strong>两园同开、Luna Park 开到 22:00、当日日落 18:47、民用暮光结束 19:14——<strong>整个蓝调时段完整落在营业时间内</strong>，这是本窗口里唯一毫无悬念的组合。次选 10/3、10/10、10/17、10/24 的周六，越早越好（日落越晚，越不容易撞上闭园）。</p>"
      },
      {
        "type": "good",
        "title": "Brooklyn Heights Promenade 与 BQE：2026 年秋天全线开放，无封闭",
        "html": "<p>网上 2018–2019 年那批「promenade 要封六年」的说法已经彻底过期，现在的情况是明确的好消息。<strong>2026 年 8 月 24 日，Mamdani 市长与 NYC DOT 局长 Michael Flynn 公布了 40 亿美元、十年期的 BQE Central 大修方案</strong>（Atlantic Avenue 至 Sands Street 的 1.5 英里市属路段，含 promenade 底下那段 0.4 英里的三重悬臂）。关键时间表：<strong>2026 年 9 月发环评范围界定公告，2026 年 11 月开公众范围界定会</strong>（DOT 页面另列了 <strong>2026 年 10 月 6 日与 10 月 22 日</strong>两场同内容的 CEQR 公众会），EIS 预计 2028 年夏出，<strong>2030 年破土</strong>，2032 年车流转到临时高架，<strong>2040 年完工</strong>。</p><p><strong>也就是说：2026 年秋天这里一米都没封，1,826 英尺（557 米）全长可走，视野零遮挡。</strong>施工期确实会分段封闭 promenade（DOT 与 Flynn 都明说了），但那是 2030 年代的事，而且官方承诺「任何时候至少保留一段开放」。唯一可能的现场影响是环评期间偶有勘测车辆与临时围挡，属于噪音级别，不影响拍摄。</p><p>顺带一个对拍摄有用的背景：promenade 本身就是 BQE 的顶盖。1943 年 Columbia Heights 的居民想把被高速切掉的后花园盖回来，Robert Moses 表面同意、实际上 Andrews & Clark 已经画好了「盖成公共步道」的图。南半段 1950 年 10 月 7 日开放、北半段 1951 年 12 月 7 日开放，高速本身要到 1954 年才通车。你脚下十几米就是两层各三车道的车流，<strong>栏杆有持续低频震动，长曝光务必压低重心、关防抖、用延时或快门线</strong>。</p>"
      },
      {
        "type": "tip",
        "title": "三脚架：四种完全不同的规矩，Botanic Garden 最坑",
        "html": "<ul><li><strong>Brooklyn Botanic Garden——最需要注意的一个。</strong>个人非专业摄影不需许可，器材上限是「一台相机 + 一个三脚架／机身支架／自拍杆」。但官方原文写明：<strong>「tripods, body mounts, and selfie sticks may not be used in the Japanese Hill-and-Pond Garden, the Conservatory, or flower beds」</strong>——也就是<strong>你最想拍的 Japanese Hill-and-Pond Garden 恰恰禁止三脚架</strong>，Steinhardt Conservatory 与所有花床也一样。禁无人机。专业人像与团体拍摄需许可（至少 5 个工作日）；婚纱／订婚 <strong>$366／25 人以内</strong>，每场 60 分钟、配保安计时；商业与编辑拍摄需 14 个工作日。→ Japanese Garden 请当成纯手持点位来准备器材。</li><li><strong>Green-Wood Cemetery——比传闻宽松。</strong>现行 Visitor Guidelines 原文是「We welcome and encourage you to take photos of Green-Wood for personal use」，<strong>全文没有一处提到三脚架</strong>。受限的只有「拟用于出版或商业用途的专业摄影」与摄影机，需书面同意（(718) 768-7300）。另外明确<strong>禁止带道具与真人模特</strong>、禁无人机。需要标注的灰区：该园 2010 年的旧「Photography Policy」页把「灯具、支架及其他器材」（lights, stands or other equipment）归入专业摄影范畴，<strong>「支架」是否涵盖普通三脚架，官方现行页面未作说明——未能确认</strong>。实操上低调架、不挡路、看到葬礼队伍立刻收起来就没有问题。</li><li><strong>Brooklyn Bridge Park（含 DUMBO 的 Pebble Beach、Jane’s Carousel、Pier 1）——另一处灰区。</strong>MOFTB 与 NYC Parks 的许可在这里<strong>一律无效</strong>，必须单独向 BBP 申请；许可只发工作日，费率以「仅手持器材」起算，<strong>超出手持的器材要逐项报备并加价</strong>，而且<strong>草坪与人工草皮上只允许手持器材</strong>。禁无人机（官方写「with no exceptions」）。官方页面只把商业影视／摄影列为需许可，普通游客带三脚架并未明文禁止，<strong>但「个人用途的三脚架算不算超出手持」官方没有表态——未能确认</strong>。稳妥做法：别上草坪，架在硬地与栈道上，别占道。婚纱／订婚拍摄超过 20 人或使用非手持器材才需许可。</li><li><strong>Prospect Park 与所有 NYC Parks 场地——最宽松，三脚架明文合法。</strong>NYC Parks 官方条件写得很清楚：只要「仅用手持相机或三脚架」、不要求独占空间、不用道具或模拟紧急场面、不申请停车或车辆通行，<strong>就不需要 MOME 许可也不需要 Parks 的 MPA</strong>。超出这个范围（灯具、发电机、封控人流）才要提前 7–14 天申请。</li><li><strong>Gantry Plaza State Park</strong> 属纽约州立公园系统，州公园对影视／录音类活动可能要求许可，个人旅拍无需。<strong>该园针对三脚架的具体条款未能从州公园官方页面找到——未能确认</strong>，现场以护园员口径为准。</li></ul>"
      },
      {
        "type": "info",
        "title": "日出日落钟点与方位角（NYC，2026 秋，全部 EDT）",
        "html": "<p><strong>先排除一个变量：2026 年夏令时结束于 11 月 1 日，落在本行程窗口之外</strong>，所以 9/25–10/25 之间不存在拨钟，下面全部是 EDT。</p><ul><li><strong>9/25</strong>：民用晨光 06:20 → 日出 <strong>06:47</strong>（方位 <strong>90.6°</strong>，几乎正东） ｜ 日落 <strong>18:48</strong>（方位 <strong>269.2°</strong>，几乎正西） → 民用暮光结束 19:16。正午最大高度角 48.2°</li><li><strong>10/1</strong>：日出 06:53（93.7°）｜日落 18:38（266.1°）</li><li><strong>10/10</strong>：日出 07:02（98.2°）｜日落 18:24（261.7°）</li><li><strong>10/22</strong>：民用晨光 06:48 → 日出 <strong>07:15</strong>（方位 <strong>104.1°</strong>） ｜ 日落 <strong>18:06</strong>（方位 <strong>255.9°</strong>） → 民用暮光结束 18:34。正午最大高度角 38.1°</li><li><strong>10/25</strong>：日出 07:19（105.5°）｜日落 18:02（254.5°）</li></ul><p><strong>可用的一句话总结</strong>：一个月里日落方位从 269° 一路南移到 254°，整整挪了 15 度；日落钟点提前 46 分钟。这个位移直接改写了两件事：<strong>Riegelmann Boardwalk 的沿栈道日落只在 10 月 6–8 日成立</strong>（栈道轴向实测 83°／263°，10/7 日落方位 263.2°），以及 <strong>Gantry Plaza 十月下旬的「灯亮 + 天还亮」重叠度比九月底好得多</strong>。另外 10 月下旬日出已经到 07:15，<strong>已经进入工作日通勤时段</strong>——这对 DUMBO 的清场很不利。</p>"
      }
    ],
    "spots": [
      {
        "id": "gantry-plaza",
        "n": 1,
        "name": "Gantry Plaza 州立公园与 Pepsi-Cola 招牌",
        "en": "Gantry Plaza State Park · Pepsi-Cola Sign · Long Island City",
        "score": 4.5,
        "tldr": "免费、地面高度、正对 Midtown 的最佳正面机位；但太阳会提前 30 分钟沉进天际线，真正的价值在蓝调。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "不需预约",
            "c": "free"
          },
          {
            "t": "22:00 闭园",
            "c": "risk"
          },
          {
            "t": "十月下旬更好",
            "c": "free"
          }
        ],
        "highlights": [
          "这是<strong>全纽约不花钱、不排队、不用上楼就能拍到的最正的 Midtown 天际线</strong>。从园区北段实测方位：<strong>Empire State Building 在 275.6°、直线 2,362 米</strong>（塔尖仰角约 10.6°），<strong>Chrysler Building 在 291.7°、1,592 米</strong>（仰角约 11.3°），联合国总部在 291.5°、933 米。整条 East River 在你和它们之间，前景干净到不需要处理",
          "公园名字来自那两座 <strong>1925 年建的 car float transfer bridge（龙门架）</strong>，属 James B. French 专利的 contained apron 型，当年把整节货运车厢吊上驳船，经 East River 送到 Long Island Rail Road 的 North Shore Freight Branch。铁路线原本走 48th Avenue 南侧的路堑，2000 年代初被填平——<strong>现在的草坪下面是一条填掉的铁路</strong>",
          "北段那块 <strong>Pepsi-Cola 霓虹招牌，120 英尺长、60 英尺高</strong>，1939 年由 General Outdoor Advertising Company 制造，1993 年由 Artkraft Strauss 重建，原本立在 PepsiCo 装瓶厂屋顶上（厂 1999 年关）。<strong>2009 年整体拆解后在公园里重新装配，2016 年 4 月 12 日被定为纽约市地标</strong>——一块广告牌拿到地标身份，这在纽约是很少见的",
          "<strong>本区唯一一个「十月下旬明显优于九月底」的点位。</strong>原因是 Midtown 的写字楼灯是按下班时间亮的，不是按太阳。9/25 日落 18:48、暮光结束 19:16，灯还没怎么亮天就黑透了；10/22 日落 18:06、暮光结束 18:34，<strong>而办公楼在 17:30–18:00 之间就陆续亮灯</strong>，于是「窗光密度」和「天空还有蓝」这两件事重叠得多得多",
          "南邻的 <strong>Hunters Point South Park</strong>（2013 年一期、2018 年二期）是同一条岸线的延伸，设计上更现代，有一处不能下水的「城市沙滩」、螺旋观景平台和 NYC Ferry 码头。它的角度更偏南，能把 Empire State Building 和 One World Trade Center 同时收进一张横幅"
        ],
        "photo": "城市天际线 <strong>5/5</strong>，工业遗构 <strong>4/5</strong>，人像 <strong>4.5/5</strong>。扣分只扣在一件事上：<strong>太阳不会在这里落到海平线</strong>——它会提前沉进 Manhattan 的楼群，所以别指望「日落挂在天际线上」的画面，这里的钱都在蓝调那 28 分钟里。人像给高分是因为 Pepsi 招牌那种红霓虹在人脸上是极好的边缘光，而且背景就是全世界最好认的天际线。",
        "shots": [
          {
            "name": "Pepsi-Cola 招牌下方（招牌 + 天际线同框）",
            "park": [
              40.746366,
              -73.957748
            ],
            "view": [
              40.747475,
              -73.957697
            ],
            "desc": "<strong>蓝调最佳：9/25 为 18:48–19:16，10/22 为 18:06–18:34</strong>，霓虹亮度与天空亮度在这 28 分钟里达成平衡，之后霓虹就会过曝成一团红。<strong>24–35mm</strong> 从招牌东南侧压低机位，让红色草书体占画面左侧三分之一、Midtown 楼群铺满右侧三分之二；<strong>16–24mm</strong> 贴到招牌基座下方仰拍可以把「PEPSI」的笔画拉成前景框。注意从这块招牌看 Empire State Building 的方位是 <strong>272.6°</strong>、距离 2,358 米，几乎正西，<strong>所以九月底的日落方向就在招牌后面偏左 3 度</strong>——想让残霞给招牌打背光就卡 18:15–18:35（9 月底）。需三脚架，1–8 秒。"
          },
          {
            "name": "龙门架栈道（工业前景 + 天际线）",
            "view": [
              40.746366,
              -73.957748
            ],
            "desc": "<strong>昏金光实际结束得比日历早：太阳会在自身高度角降到约 5° 时沉进对岸楼群</strong>，实测 9/25 约 <strong>18:17</strong>（方位 264°）、10/22 约 <strong>17:33</strong>（方位 250°），也就是比官方日落时刻早 <strong>30–35 分钟</strong>。所以硬光的窗口是 17:00–17:35（10 月下旬）或 17:45–18:15（9 月底）。<strong>24–70mm</strong> 沿栈道纵轴，把黑色铁架的桁架格纹当成天际线前面的几何滤网；<strong>70–200mm</strong> 从栈道南侧压缩，让龙门架的立柱正好切在 Chrysler Building 旁边。坐标取自 OSM 园区北段多边形中心，<strong>两座龙门架就在其正西侧临水处，步行 30–60 米内</strong>。"
          },
          {
            "name": "Hunters Point South Park 南端（ESB 与 One WTC 同框）",
            "view": [
              40.741846,
              -73.961347
            ],
            "desc": "往南走 600 米换角度：这里视线更偏西北，<strong>能把 Empire State Building 与 Lower Manhattan 的 One World Trade Center 收进同一张横幅</strong>，这是 Gantry Plaza 北段做不到的。<strong>清晨 07:15–08:30</strong>（10 月下旬）最好——此时太阳在你正后方（方位 104°），整条天际线是<strong>完全正面受光</strong>，玻璃幕墙全部反射晨光，而且河面在无风的清晨会给你完整倒影。<strong>35–85mm</strong> 拍全景，<strong>135–300mm</strong> 单独压缩 Midtown 楼群与 Roosevelt Island 缆车。坐标为 OSM 的 Hunters Point South／Long Island City 渡轮码头节点，机位就在码头两侧的岸线步道上。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "Gantry Plaza State Park <strong>每日 08:00–22:00</strong>（纽约州立公园系统，节假日或有活动时可能调整）。Hunters Point South Park 属 NYC Parks，按一般市属公园口径 06:00–01:00。<strong>22:00 闭园对本窗口没有影响</strong>——10 月下旬民用暮光 18:34 就结束，天文暮光 19:06 结束，你有充裕的三个多小时。<strong>Pepsi-Cola 招牌的霓虹是整夜亮的</strong>，不受闭园时间限制，从园外的 Center Boulevard 上仍可拍到（角度差一些）",
          "parking": "<strong>强烈建议不要开车。</strong>Hunters Point 是密集住宅区，Center Boulevard 与 47th Road 沿线路边车位极少且多为居民占用，停车楼按 Manhattan 价格收费。<strong>公共交通是压倒性的更优解</strong>：<strong>7 号线 Vernon Blvd–Jackson Av 站</strong>（最近，出站往西走 8 分钟即到园区北入口，从 Grand Central 或 Times Square 乘 7 号线只需 10–15 分钟）；<strong>E／M 线 Court Sq–23 St 站</strong>；<strong>G 线 21 St 或 Court Sq 站</strong>（步行略远）；<strong>NYC Ferry East River 线 Hunters Point South 站</strong>直接停在南园里，而且从 DUMBO／Fulton Ferry 有直达船——如果你同一天要拍 Brooklyn Bridge Park，坐船是最省事的接法",
          "walk": "Vernon Blvd–Jackson Av 站到 Pepsi 招牌约 <strong>650 米／8 分钟</strong>，全程平路；招牌到龙门架约 150 米／2 分钟；招牌到 Hunters Point South Park 南端约 700 米／9 分钟"
        },
        "notes": [
          "<strong>这里的「日落」是假的，请按天际线遮挡算</strong>：太阳在高度角约 5° 时就被对岸 East 30s–40s 的楼群吞掉，比官方日落早 30–35 分钟。把闹钟按「日落前 60 分钟到位」设，别按「日落前 20 分钟」",
          "<strong>7 号线回程在傍晚会很挤</strong>，Vernon Blvd–Jackson Av 站是往 Manhattan 方向的上客大站；带三脚架和背包的话，让一到两班车过去往往比硬挤更快",
          "园区是<strong>密集住宅楼的后花园</strong>，居民密度很高，日落时段 Adirondack 椅和栈道栏杆位会被本地人占满。想要干净的前景请往南走到 Hunters Point South Park，人明显少",
          "<strong>河风比想象中大</strong>，栈道与浮桥段有轻微起伏。长曝光请挂重物、收中柱、用快门线",
          "这里是纽约<strong>最出名的婚纱与订婚拍摄点之一</strong>，周末傍晚常有多组人像团队在招牌前排队。如果你要的是招牌无人特写，请在开园的 08:00–09:30 之间去",
          "<strong>Pepsi 招牌的红霓虹显色很难缠</strong>：自动白平衡会把整帧拉青。建议固定白平衡在 3800–4500K，并对红通道留出至少 2/3 档余量，否则红色笔画会糊成没有细节的色块"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Long_Island_City_Pepsi_Cola_Sign_-_May_2026.jpg",
            "cap": "Pepsi-Cola 招牌与 Midtown 天际线 · Anonymouscarrots / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Pepsi-Cola_sign_park_view.jpg",
            "cap": "自园内草坪望招牌与对岸楼群 · Sashimi-b / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pepsi-Cola_sign_in_Gantry_Plaza_State_Park%2C_Long_Island_City%2C_New_York.jpg",
            "cap": "招牌侧向机位 · MusikAnimal / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "brooklyn-bridge-park",
        "n": 2,
        "name": "Brooklyn Bridge Park · Pebble Beach 与各码头",
        "en": "Brooklyn Bridge Park · Pebble Beach · Granite Prospect · Jane’s Carousel",
        "score": 5,
        "tldr": "一条岸线上五个完全不同的机位，免费且 06:00–01:00 开放；<strong>选清晨</strong>，因为傍晚桥与天际线全在逆光里。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "06:00–01:00",
            "c": "free"
          },
          {
            "t": "三脚架政策灰区",
            "c": "risk"
          },
          {
            "t": "木马 17:50 关",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>先把光的账算清楚，这是本条目最有用的一句话。</strong>从 Pebble Beach 实测方位：<strong>Brooklyn Bridge 的布鲁克林侧桥塔在 268.2°、708 米；Manhattan 侧桥塔在 290.8°、1,224 米；One World Trade Center 在 295.8°、2,134 米</strong>（塔尖仰角 14.2°）。而 9/25 的日落方位是 <strong>269.2°</strong>——<strong>几乎正好压在布鲁克林侧桥塔上</strong>。听起来像好事，实际是最坏的情况：太阳在方位角走到 268° 时高度角只剩 0.3°，早就被桥塔和 Manhattan 楼群整个挡住了，你拿到的是<strong>纯逆光剪影加一团发灰的雾霾</strong>，桥的钢缆和石塔纹理全部丢掉。<strong>所以这里的答案是清晨，不是傍晚</strong>：日出方位 90–105° 正好在你背后，桥、Manhattan 天际线、One WTC 的玻璃幕墙全部<strong>正面受光</strong>，而且清晨无风时河面会给完整倒影",
          "<strong>Pebble Beach</strong> 是全园唯一能走到水边卵石上的位置，也是那张「Brooklyn Bridge 从画面左侧跨出、Manhattan 楼群在桥后」的构图的出处。它同时是本区最容易犯错的地方：<strong>这是潮汐岸线，涨潮时可站的卵石带会缩到只剩两三米</strong>，而 Brooklyn Bridge Park 官网首页每天挂当日高低潮时刻，出门前顺手看一眼",
          "<strong>Pier 1 的 Granite Prospect</strong> 是用 Brooklyn Bridge 改造工程拆下来的<strong>再生花岗岩条石</strong>砌成的一段宽阶梯（OSM 直接标为 viewpoint）。它的价值是<strong>抬高了约 4–5 米并且面朝西北</strong>，从这里 One WTC 的方位是 311.6°、1,800 米，能把 Lower Manhattan 完整摊开而不被前景栈道切断。阶梯本身是极好的人像台阶",
          "<strong>Jane’s Carousel</strong>：1922 年 Philadelphia Toboggan Company 造的旋转木马，原名 Idora Park Merry-Go-Round，在 Ohio 州 Youngstown 的 Idora Park 转了大半辈子，<strong>1984 年 Walentas 夫妇在拍卖会上以 $385,000 买下</strong>，Jane Walentas 亲手修复了 48 匹木马与两辆马车，<strong>2011 年 9 月 16 日在 Jean Nouvel 设计的 900 万美元玻璃亭里重新开转</strong>。<strong>必须更正一个流传极广的说法</strong>：Nouvel 原设计里那个「每到整点把木马的影子投在四面幕布上、像一台城市时钟」的 magic lantern 效果，<strong>从 2011 年开园起就从来没有真正运行过</strong>——Jane Walentas 当时的说法是打这个效果需要的强光灯太热，会烤坏刚修好的丙烯颜料木马。所以别为了看马影专门等整点。<strong>但玻璃亭本身在关门后仍整夜发光</strong>，木马外圈的灯泡也亮着，「发光玻璃盒子 + 两座桥」这张照片照样成立",
          "<strong>Pier 2 与 Pier 3</strong> 往南走会把视线转得更正：从 Pier 3 看 One WTC 是 324.9°、2,008 米。这两个码头的实际用途是<strong>把 Brooklyn Bridge 从画面里拿掉</strong>，让 Lower Manhattan 单独成为主体，同时 Pier 3 的 Labyrinth 石阵和 Pier 2 的旱冰场／篮球场给你完全不同的人文前景。全园 3,750 棵树，Pier 2 与 Pier 3 的 berm 土丘上有小片林地，秋色虽然不如 Prospect Park，但胜在有天际线当背景"
        ],
        "photo": "城市风光 <strong>5/5</strong>，建筑 <strong>5/5</strong>，人像 <strong>5/5</strong>，秋色 <strong>2.5/5</strong>。五个机位在 2 公里岸线内，题材从卵石滩、花岗岩阶梯、玻璃亭夜景到石阵，密度是本区最高的。秋色低分是实话：这里的树都是 2010 年后新栽的，成色远不如 Green-Wood。人像满分因为背景选择太多——桥、天际线、发光木马亭、旧码头木桩，四类背景互不重复。",
        "shots": [
          {
            "name": "Pebble Beach 卵石岸（桥 + 天际线经典构图）",
            "park": [
              40.704429,
              -73.9896
            ],
            "view": [
              40.704378,
              -73.990592
            ],
            "desc": "<strong>日出前后是唯一正确答案：9/25 民用晨光 06:20 → 日出 06:47，10/22 为 06:48 → 07:15。</strong>日出前 25 分钟拍桥体照明还亮着而天空已泛蓝的版本；日出后 30–75 分钟拍桥塔石材与天际线全部正面受光的版本。<strong>16–35mm</strong> 压低到卵石高度，让湿卵石的反光当前景、桥从左上角斜跨出画面；<strong>24–70mm</strong> 是最实用的段，把桥塔放左三分点、One WTC 放右三分点。傍晚来也可以，但要认清你拿到的是剪影：日落方位 269°（9 月底）正撞桥塔，<strong>建议直接放弃细节、按剪影曝光，用 70–200mm 单拍桥塔轮廓配残霞</strong>。涨潮时可站范围会缩到两三米，行前查园方官网当日潮时。"
          },
          {
            "name": "Jane’s Carousel 玻璃亭（黄昏与夜景）",
            "view": [
              40.704434,
              -73.992385
            ],
            "desc": "<strong>时间上有个硬约束必须先说：秋季木马 11:00–17:50 营业，而本窗口任何一天的日落都在 18:02 之后</strong>（9/25 为 18:48、10/22 为 18:06）。也就是说<strong>「转动中的木马 + 蓝调天空」这张照片在 9/25–10/25 之间物理上拍不到</strong>——木马停转在前，天变蓝在后。可行的两个版本：<strong>①</strong> 17:00–17:45 进去拍<strong>转动中的木马</strong>，1/8–1/30 秒让马匹拉出旋转拖影、玻璃幕墙外的桥保持清晰，需要贴玻璃或进亭内手持；<strong>②</strong> 18:10–18:40（10 月下旬）在亭外拍<strong>发光玻璃盒子</strong>，这时木马已停但亭内灯与外圈灯泡整夜亮着，<strong>24–35mm</strong> 从东南侧退到 25–40 米外，让亭子、Manhattan Bridge 的蓝色钢桁架、Brooklyn Bridge 的石塔在同一帧里三层排开。需三脚架，2–10 秒，f/8。<strong>别等整点看马影投射——那个效果从未启用过。</strong>"
          },
          {
            "name": "Pier 1 Granite Prospect 花岗岩阶梯",
            "view": [
              40.701995,
              -73.997408
            ],
            "desc": "<strong>清晨 06:50–08:15</strong>（Lower Manhattan 正面受光，且阶梯上还没人）或<strong>蓝调 18:10–18:35</strong>（10 月下旬，楼群灯亮）。One WTC 在此方位 311.6°、距离 1,800 米、塔尖仰角约 17°，<strong>24–50mm</strong> 就能把 Lower Manhattan 完整装下而不必接片。构图关键是<strong>用花岗岩条石的水平线做重复韵律</strong>：压低机位让最近一级条石的边缘切在画面下缘，条石一级级退向水面、天际线压在上三分之一。人像把对象放在第三、四级台阶上，f/2.8–f/4，天际线轻微虚化。<strong>此处是硬地，架三脚架相对稳妥（草坪与人工草皮上禁非手持器材）。</strong>"
          },
          {
            "name": "Pier 3 端头（把桥拿掉，只留天际线）",
            "view": [
              40.697961,
              -73.999696
            ],
            "desc": "<strong>蓝调 18:06–18:34（10/22）或 18:48–19:16（9/25）。</strong>这里的作用是换叙事：Brooklyn Bridge 已经退到画面右边缘或干脆出画，One WTC 在 324.9°、2,008 米，<strong>Lower Manhattan 单独成为主体</strong>。<strong>35–85mm</strong> 拍天际线本体，<strong>135–300mm</strong> 压缩楼群做「墙」。前景可用 Pier 3 Labyrinth 的石阵（园方以三种历史迷宫图样铺的地面）做几何引导，或北退到 Old Pier 1 Piles 的旧木桩阵列（OSM 亦标为 viewpoint，位于 40.700848, -73.996708）拍水面木桩的重复节奏。往北 400 米是 Squibb Park Bridge，可从上方俯视 Pier 1。"
          }
        ],
        "access": {
          "book": "不需预约。<strong>Jane’s Carousel 也不需预约</strong>，现场买票即可",
          "ticket": "公园<strong>免费</strong>。Jane’s Carousel 单次 <strong>$4</strong>；一名 42 英寸以下儿童可与一名成人共用一张票，额外的 42 英寸以下儿童每人 $4；接受 SNAP／EBT 折扣。木马是 501(c)(3) 非营利机构运营",
          "hours": "<strong>Brooklyn Bridge Park 每日 06:00–01:00</strong>（官方口径 365 天开放）。分区例外：Pier 2 为 08:00–23:00（季节性）、Pier 5 为 06:00–23:00、Pier 6 排球场 06:00–23:00、<strong>各儿童游乐场为日出至日落</strong>、洗手间 3–10 月 07:00–23:00、11–3 月 07:00–22:00。<strong>Jane’s Carousel 秋季时刻表（2026 年 9 月 14 日至 12 月 31 日）：周一、周二闭馆，周三至周日 11:00–17:50</strong>——这个 17:50 早于本窗口每一天的日落，<strong>意味着蓝调时段木马一定是停着的</strong>（玻璃亭仍发光）",
          "parking": "<strong>DUMBO 与 Brooklyn Heights 一带的停车不值得尝试</strong>：路边表位少、限时 2 小时、周末几乎无空位，园内本身<strong>不提供任何访客停车</strong>（官方明确「不为制作车辆或房车提供停车」）。地铁：<strong>F 线 York Street 站</strong>（离 Pebble Beach 与木马最近）、<strong>A／C 线 High Street–Brooklyn Bridge 站</strong>、南端 Pier 6 走 <strong>2／3／4／5／R 线 Borough Hall／Court St 站</strong>。渡轮：<strong>NYC Ferry 停 DUMBO／Fulton Ferry 与 Pier 6／Atlantic Avenue 两处</strong>，其中 DUMBO／Fulton Ferry 站有到 Long Island City（Hunters Point South）的直达航线",
          "walk": "York Street 站到 Pebble Beach 约 <strong>600 米／8 分钟</strong>；Pebble Beach 到 Jane’s Carousel 约 200 米／3 分钟；木马到 Pier 1 Granite Prospect 约 700 米／9 分钟；Granite Prospect 到 Pier 3 端头约 700 米／9 分钟。<strong>全岸线从 Main Street 走到 Pier 6 约 2 公里／25–30 分钟</strong>，全程平坦无障碍"
        },
        "notes": [
          "<strong>三脚架属灰区。</strong>MOFTB 与 NYC Parks 的许可在这里一律无效，必须单独向 Brooklyn Bridge Park 申请；园方费率以「仅手持器材」起算并明说「草坪与人工草皮上只允许手持器材」，但对<strong>个人用途的三脚架未作表态——未能确认</strong>。稳妥做法：只在硬地与栈道上架、不占道、被劝阻就收",
          "<strong>无人机在园内与园区周边一律禁止</strong>，官方原文写「with no exceptions」",
          "<strong>Pebble Beach 是潮汐岸线</strong>，涨潮时可站的卵石带会缩到两三米，且卵石湿滑。园方官网首页每天挂当日高低潮时刻，出门前看一眼",
          "<strong>周末的 Smorgasburg 食物市集</strong>（4–10 月）在 Pier 5 摆摊，会把周六下午的人流整体拉向园区南段——这对北段的 Pebble Beach 与木马反而是好事",
          "<strong>Jane’s Carousel 周一、周二闭馆</strong>。如果你的行程只有周一或周二在 DUMBO，把木马当作纯外景（玻璃亭 + 桥）来拍，别指望进去",
          "婚纱与订婚拍摄若不超过 20 人且只用手持器材<strong>不需许可</strong>；园方的婚礼仪式许可只开放 Pier 1 Granite Prospect、Empire Fulton Ferry Boardwalk、Main Street Pebble 三处——这也从侧面说明了哪三个机位最上镜",
          "<strong>Squibb Park Bridge 曾因结构弹跳问题长期封闭、后经重建</strong>，目前连通 Brooklyn Heights 与 Pier 1；如果你打算用它从 promenade 直接下到园里，<strong>建议当天查园方 Park Alerts 页确认开放状态</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach%2C_New_York.jpg",
            "cap": "自 Pebble Beach 拍 Brooklyn Bridge 与 Lower Manhattan 超宽幅 · Christian David / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Jane%27s_Carousel%2C_Dumbo_Brooklyn_in_July_2017.jpg",
            "cap": "Jane’s Carousel 的 Jean Nouvel 玻璃亭 · MusikAnimal / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Brooklyn_Bridge_Above_Jane%27s_Carousel.jpg",
            "cap": "Brooklyn Bridge 石塔与木马亭同框 · joiseyshowaa / CC BY-SA 2.0"
          }
        ]
      },
      {
        "id": "dumbo-washington-street",
        "n": 3,
        "name": "DUMBO · Washington Street 桥景机位",
        "en": "Washington Street, DUMBO · Manhattan Bridge Framing",
        "score": 5,
        "tldr": "全布鲁克林最出名的一帧，站位精确到几平方米；<strong>只有日出前后成立</strong>，08:00 后就是排队和汽车。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "24 小时可拍",
            "c": "free"
          },
          {
            "t": "有车通行的活街道",
            "c": "risk"
          },
          {
            "t": "08:00 后开始排队",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>先把几何讲清楚，因为这个机位之所以成立完全是几何巧合。</strong>实测 OSM 路网：<strong>Washington Street 在 Front Street 到 Water Street 这一段的轴向是 3.0°</strong>（几乎正南北）；<strong>而从 Washington × Front 路口看 Empire State Building 的方位是 3.7°、直线距离 5,116 米</strong>。两者只差 <strong>0.7 度</strong>——在 5.1 公里外折算成 <strong>约 62 米的横向偏移</strong>。<strong>这就是「帝国大厦正好出现在桥洞正中」的全部原因</strong>：这条 19 世纪仓库街的走向，恰好指向 1931 年才建成的那栋楼。Manhattan Bridge 的布鲁克林侧桥塔从 Front 路口看是方位 341.7°、234 米，从 Water 路口看是 332.1°、166 米",
          "<strong>关于「太阳会沿街道对齐」的说法，可以直接否掉。</strong>要让太阳出现在桥洞里、正对镜头，太阳方位角必须约 3°（正北）——纽约纬度下太阳方位角的全年极值是<strong>夏至日出 57°、夏至日落 303°</strong>，<strong>永远到不了 3°，这件事一年 365 天都不可能发生</strong>。真正会发生的是另一件被混淆的事：<strong>太阳每天在 12:50–13:00 EDT 前后穿过街道轴线</strong>（9/25 的 12:50 方位 180.9°、10/22 的 12:50 方位 183.0°），但那时高度角是 <strong>38–48 度</strong>，光是从头顶砸下来的硬顶光，既不是「日落穿街」也不好看，而且正是全天人最多的时候。另外常被张冠李戴的 <strong>Manhattanhenge 与这里毫无关系</strong>——那是 Manhattan 街网偏转 29° 造成的、需要日落方位角 299° 的现象，每年只在 <strong>5 月 28 日与 7 月 13 日</strong>前后出现，且发生在 Manhattan 的东西向横街上",
          "<strong>结论是日出，而且理由不止一条。</strong>① <strong>人</strong>：多个当地摄影工作室的口径一致——<strong>07:00 之前你能正常工作，07:00 之后就是在跟人群协商一块路面，周末上午可以排到一小时</strong>。② <strong>光</strong>：日出方位 90.6°（9/25）到 104.1°（10/22），太阳在镜头右侧近 90 度，是<strong>纯侧光</strong>，正好擦亮街西侧那栋砖楼朝东的上半截立面与桥塔的钢构，而街底保持在阴影里——<strong>这正是那些著名照片里的光</strong>（要让阳光打到街底需要高度角超过约 48 度，只有正午前后才做得到）。③ <strong>主体</strong>：Empire State Building 从这里看到的是它的南立面，<strong>清晨太阳在东南方，南立面是正面受光的</strong>；傍晚虽然南立面也受光，但角度更擦、加上一整天累积的雾霾，桥洞里那个小小的塔尖会明显发灰",
          "<strong>具体钟点</strong>：9/25 民用晨光 06:20 → 日出 06:47，<strong>最佳区间 06:20–07:45</strong>（前 27 分钟拍桥体照明还亮着的蓝调版，之后拍侧光版）；10/22 民用晨光 06:48 → 日出 07:15，<strong>最佳区间 06:48–08:15</strong>。注意十月下旬日出已经到 07:15，<strong>工作日的通勤车流和上班人流已经起来了</strong>，所以<strong>如果日期可选，九月底的清晨在这里明显好于十月下旬</strong>——这与本区秋色的建议正好相反",
          "<strong>DUMBO 这个名字是故意起丑的。</strong>常见说法是 1978 年前后本地居民把「Down Under the Manhattan Bridge Overpass」缩成 DUMBO，就是为了让这片仓库区听起来难听、把开发商挡在外面。结果当然失败了。这片 19 世纪的砖砌与钢筋混凝土仓库群<strong>2007 年被纽约市定为 DUMBO Historic District</strong>，街上那些花岗岩石板（Belgian block）不是复古装饰，是当年运货马车压出来的原铺装——<strong>也正因为如此，它凹凸不平、雨后积水，拍倒影极好，走路极容易崴脚</strong>"
        ],
        "photo": "城市人文 <strong>5/5</strong>，建筑 <strong>5/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>2/5</strong>。给满分是因为它的不可替代性——全世界找不到第二条街的走向能把一座 1909 年的桥和一栋 1931 年的楼叠成这样。但必须诚实地说清代价：<strong>这是一个「一帧照片」的点位，不是一个可以待两小时的点位</strong>，五到十分钟就能拿完，剩下的时间价值都在旁边的 Brooklyn Bridge Park 里。人像扣 0.5 分不是因为背景，而是因为你几乎不可能拿到一个没有旁人入画的机会窗口。风光低分是实话：这里没有天空，也没有地平线。",
        "shots": [
          {
            "name": "经典站位：Washington × Water 路口以南约 20–30 米，街道正中",
            "view": [
              40.703201,
              -73.98958
            ],
            "desc": "<strong>9/25 的 06:20–07:45 或 10/22 的 06:48–08:15，工作日优于周末，周二至周四最佳。</strong>坐标为 OSM 的 Washington Street × Water Street 交叉节点；<strong>实际站位在该节点以南约 20–30 米的车道正中（推算）</strong>，判断方法是：<strong>移动到桥塔左右两侧的砖墙边缘与画幅左右边缘平行、桥塔居中的那一点</strong>，石板路上通常能看到一块被踩得发亮的位置。焦段：<strong>24–35mm</strong> 带上两侧完整砖墙与更多石板前景（画面更「街」）；<strong>50–85mm</strong> 是最经典的一档，两栋砖楼刚好夹住桥塔、桥洞里的 Empire State Building 清晰可辨；<strong>135–200mm</strong> 把帝国大厦压到显著大小，但两侧砖墙会被裁掉，失去「街道框」的意思。构图：<strong>相机水平、传感器与街道轴线严格对齐</strong>，任何 1–2 度的偏航都会让两侧砖墙的透视不对称、整帧「歪」得很明显；压低到腰高可以增加石板前景的纵深。<strong>晴天才有帝国大厦</strong>，阴天雾霾天桥洞里是一片灰白——但阴天的砖与钢反而更像这个街区本来的样子，值得单拍一版。"
          },
          {
            "name": "Washington × Front 路口（长焦压缩位，退到更南）",
            "view": [
              40.702523,
              -73.989627
            ],
            "desc": "同样时段。<strong>往南退到 Front Street 路口，桥塔距离拉到 234 米、方位 341.7°</strong>，而 Empire State Building 的方位 3.7° 与街道轴线 3.0° 在这里差得最小——<strong>这是「帝国大厦最居中」的那个位置</strong>。代价是两侧砖墙的夹角变小、框住桥塔的效果减弱。用 <strong>85–200mm</strong> 从这里往北拍，可以做出<strong>三层压缩</strong>：近处石板路面 → 中景桥塔与两侧砖墙 → 远处 5.1 公里外的帝国大厦。这个机位人少很多，而且<strong>站在路口的人行道上就能拍，不必站到车道里</strong>，是想避开安全风险时的首选替代。"
          },
          {
            "name": "Water Street × Main Street 路口（侧向机位，看桥体本身）",
            "view": [
              40.703276,
              -73.991247
            ],
            "desc": "<strong>清晨 07:00–08:30 或黄昏 17:15–18:00。</strong>往西走两个路口换叙事：这里不再拍「街框桥」，而是从侧面拍<strong>Manhattan Bridge 的蓝色钢桁架从砖仓库屋顶上斜切过去</strong>。傍晚在这里反而比在 Washington Street 上更有价值——日落方位 256–269° 在西侧，<strong>桥的钢构会被侧后方的暖光镶出边缘光</strong>。<strong>35–85mm</strong> 拍桥与仓库的体量对比；<strong>16–24mm</strong> 贴到桥体正下方仰拍钢梁的重复格架。往北 200 米就是 Brooklyn Bridge Park 的 Main Street 入口与 Pebble Beach，<strong>这是把 DUMBO 和公园串起来的最短路径</strong>。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>——这是一条公共街道，没有门禁也没有营业时间",
          "hours": "<strong>24 小时可拍</strong>。但实际可用窗口由人流决定，不由时间决定：<strong>日出前到 07:00 街上通常只有个位数的人、经常完全空无一人；09:00 之后属「极度拥挤」；10:00–18:00 全天高峰，周末尤甚，同一帧会有一条明显的排队队列，周末可以排一小时</strong>。<strong>周一至周四的清晨与周末清晨也有明显差别</strong>，周末即使在日出时也已经有人",
          "parking": "<strong>不要在 DUMBO 开车找车位，这件事在周末是必输的。</strong>街区内路边表位少、多为限时 2 小时，商业停车楼按 Manhattan 价格计。地铁：<strong>F 线 York Street 站是最近的，出站步行约 4 分钟</strong>；<strong>A／C 线 High Street–Brooklyn Bridge 站</strong>步行约 8 分钟。另有 <strong>NYC Ferry 的 DUMBO／Fulton Ferry 码头</strong>（OSM 节点 40.703734, -73.995836），步行 10 分钟，而且从 Manhattan 的 Wall St／Pier 11 与 Long Island City 都有直达船",
          "walk": "York Street 站到经典站位约 <strong>300 米／4 分钟</strong>，全程平路但<strong>最后一段是 Belgian block 花岗岩石板，凹凸明显</strong>；经典站位到 Pebble Beach 约 350 米／5 分钟；到 Brooklyn Bridge Park 的 Main Street 入口约 250 米／3 分钟"
        },
        "notes": [
          "<strong>这是一条有车通行的活街道，没有封路、没有交通协管、没有任何保护措施。</strong>人站在车道正中拍照、车从后面开过来，这是这里唯一真正的风险。不必紧张但必须处理：<strong>①</strong> 提前构好图、上脚架前先看清南北两头；<strong>②</strong> 让同伴专职看车；<strong>③</strong> 听到引擎声先退到人行道再回位；<strong>④</strong> 如果只有你自己，用第二个机位（Front Street 路口）从人行道上拍，牺牲一点框住效果换掉全部风险",
          "<strong>石板路面凹凸不平且雨后积水</strong>。请穿平底防滑鞋；三脚架三只脚很容易一只落在缝里导致水平跑掉，架好后务必复查气泡",
          "<strong>不要指望「拍到空街」。</strong>诚实地说：本窗口内的任何一个合理钟点，你都会和几十个人共用这几平方米。真正能拿到空街的只有<strong>工作日日出前那 20–30 分钟，且不是周末</strong>。退而求其次的做法是<strong>连拍 20–40 张后期做多帧去人</strong>，或者干脆把人当成尺度参照拍进去——街上一个背影往往比空街更好看",
          "这里是<strong>纽约最热门的求婚点之一</strong>，也常有商业与网红团队占位。看到有人在拍求婚请礼让几分钟，这是这条街上不成文但普遍遵守的规矩",
          "<strong>Washington Street 上的餐饮清晨基本不开门</strong>，想拍完日出吃早饭要走到 Front Street 或 Jay Street 一带",
          "<strong>下雨反而是加分项</strong>：湿石板会把桥塔和砖墙的倒影铺满前景，而且人会少一大半。带一块吸水布擦镜头前玻璃，别擦镜片"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/53/Manhattan_Bridge_from_Washington_Street%2C_Dumbo%2C_Brooklyn%2C_New_York.jpg",
            "cap": "自 Washington Street 拍 Manhattan Bridge 经典竖幅 · Christian David / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/51/Empire_State_Building_through_the_Manhattan_Bridge_arch%2C_Dumbo%2C_Brooklyn%2C_New_York.jpg",
            "cap": "桥洞中的 Empire State Building 长焦特写 · Christian David / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Manhattan_Bridge_view_from_Washington_Street_DUMBO_Brooklyn_Morning_2022.jpg",
            "cap": "清晨侧光下的砖墙与桥塔 · Eugene Krasnaok / CC BY 4.0"
          }
        ]
      },
      {
        "id": "brooklyn-heights-promenade",
        "n": 4,
        "name": "Brooklyn Heights Promenade 悬臂步道",
        "en": "Brooklyn Heights Promenade (The Esplanade)",
        "score": 4.5,
        "tldr": "2026 年秋全线开放（BQE 大修 2030 年才动工）；视线朝西北 322°，日落是侧光不是逆光，所以傍晚反而好用。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "24 小时开放",
            "c": "free"
          },
          {
            "t": "2026 年无封闭",
            "c": "free"
          },
          {
            "t": "栏杆有震动",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这里最值钱的一条信息是几何，不是历史。</strong>很多攻略把这里和 Brooklyn Bridge Park 一起写成「都朝西、日落逆光」——<strong>这个说法不成立</strong>。实测方位：从 promenade 中段看 <strong>One World Trade Center 是 321.7°、2,177 米</strong>（塔尖仰角 14.0°），看 <strong>Brooklyn Bridge 的布鲁克林侧桥塔是 349.9°、769 米</strong>。也就是说<strong>天际线在西北偏北，不在正西</strong>。而本窗口的日落方位是 269°→256°，<strong>比天际线偏左 52 到 66 度</strong>——<strong>太阳落在 Upper New York Bay 的方向（Staten Island／Bayonne 一侧），根本不在天际线后面。</strong>结果是：<strong>Lower Manhattan 在日落时得到的是西南方向的侧光，楼群的南立面被暖光擦亮，而不是变成一团剪影</strong>。这与 Pebble Beach 的情况完全相反，也是本条目推荐傍晚的全部依据",
          "<strong>所以这两个点的建议是分开的，别混着用</strong>：<strong>Brooklyn Bridge Park 的 Pebble Beach 选清晨</strong>（那里天际线在 296°，正撞日落方位，傍晚只能拿剪影）；<strong>Brooklyn Heights Promenade 选傍晚加蓝调</strong>（这里天际线在 322°，日落偏出画面之外，得到侧光加办公楼灯光）。清晨来 promenade 也不错——太阳在你正后方，天际线是完全正面受光的、玻璃幕墙全亮，而且步道上几乎没人——但那种光平、缺立体感，属「资料照」而非「作品照」",
          "<strong>它本身就是一条高速公路的顶盖，这件事对拍摄有实际影响。</strong>1943 年 Columbia Heights 的居民请求把被 BQE 切掉的后花园盖回来，Robert Moses 表面同意，实际上 Andrews & Clark 已经画好了把顶盖做成<strong>公共步道</strong>而非私人花园的方案。1946 年秋开始拆 Furman Street 东侧的 19 世纪砖仓库，<strong>南半段 1950 年 10 月 7 日开放、北半段 1951 年 12 月 7 日开放</strong>，高速自己要到 1954 年才通车。全长 <strong>1,826 英尺（557 米）</strong>、横跨八个街区，下面是两层各三车道。<strong>产权归 NYC DOT 而不是 NYC Parks</strong>（因为它法律上是「建在道路上的构筑物」而非公园），但日常养护由 Parks 负责",
          "<strong>2026 年的状态是明确的：全线开放，无封闭。</strong>2026 年 8 月 24 日公布的 40 亿美元 BQE Central 方案（Atlantic Avenue 至 Sands Street，含 promenade 底下 0.4 英里的三重悬臂）<strong>2030 年才破土、2032 年车流转临时高架、2040 年完工</strong>；2026 年秋只走到环评阶段（9 月发 scoping notice，DOT 页面列出 <strong>10 月 6 日与 10 月 22 日</strong>两场同内容的 CEQR 公众会，11 月还有正式范围界定会）。施工期间确实会分段封闭步道，DOT 承诺「任何时候至少保留一段开放」，但那是 2030 年代的事",
          "视野里能同时点出来的东西很多：<strong>Brooklyn Bridge、Lower Manhattan 天际线、Governors Island、Statue of Liberty、Ellis Island、New York Harbor 的船流</strong>。南端接 Adam Yauch Park（以 Beastie Boys 成员命名）、北端接 Fort Stirling Park、Harry Chapin Park 与 Fruit Street Sitting Area，再往北就是通往 Brooklyn Bridge Park Pier 1 的 Squibb Park Bridge。promenade 是 <strong>Brooklyn Heights National Historic Landmark District</strong> 的构成要素"
        ],
        "photo": "城市天际线 <strong>4.5/5</strong>，人像 <strong>4.5/5</strong>，建筑 <strong>3.5/5</strong>。一条 557 米的直线步道，机位选择其实只有「北中南」三档，所以变化不如 Brooklyn Bridge Park 丰富。加分在两点：<strong>视线抬高约 10 米</strong>，前景没有任何栈道或围栏遮挡；以及那排铸铁长椅与栏杆本身是极好的人像道具。扣分主因是<strong>下面的车流会持续给栏杆传低频震动</strong>，这对长曝光是实打实的技术问题。",
        "shots": [
          {
            "name": "中段（Montague Street 出口一带）——正对 Lower Manhattan",
            "view": [
              40.697371,
              -73.997389
            ],
            "desc": "<strong>昏金光 17:30–18:06 加蓝调 18:06–18:34（10/22）；9/25 对应 18:10–18:48 与 18:48–19:16。</strong>One WTC 在此方位 321.7°、2,177 米、塔尖仰角 14.0°，<strong>24–50mm</strong> 就能把整条 Lower Manhattan 装下。日落方位 256–269° 在画面左侧 52–66 度之外，<strong>所以不必与逆光搏斗——直接对天际线测光，楼群南立面会有干净的暖侧光</strong>。构图用铸铁栏杆的水平线压住画面下缘，或退两步把长椅的曲线扶手当前景。<strong>135–300mm</strong> 单独压缩楼群做「墙」，前景纳入一两条驳船。<strong>需三脚架但务必关防抖、收中柱、挂重物，并用延时或快门线</strong>——下面两层车流的震动会通过铺装传上来。"
          },
          {
            "name": "北段（Clark Street 与 Orange Street 出口之间）——桥为主体",
            "view": [
              40.69928,
              -73.996468
            ],
            "desc": "<strong>清晨 06:50–08:15</strong>（桥的石塔正面受光、步道上几乎没人）或<strong>蓝调 18:10–18:35</strong>（桥体照明与天空平衡）。Brooklyn Bridge 的布鲁克林侧桥塔在此方位 349.9°、仅 769 米，<strong>是全条步道离桥最近、桥占比最大的一段</strong>。<strong>35–85mm</strong> 让桥塔与其后的 Manhattan 楼群叠成两层；<strong>16–35mm</strong> 把步道的透视线一直引到桥下。<strong>坐标为 OSM 的 promenade 北段步道节点。</strong>再往北 300 米可接 Squibb Park Bridge 下到 Pier 1（出发前查 BBP 的 Park Alerts 确认桥是否开放）。"
          },
          {
            "name": "南段（Remsen Street 端）——港口、Governors Island 与自由女神",
            "view": [
              40.69563,
              -73.998325
            ],
            "desc": "<strong>日落 17:45–18:06（10/22）是这里的专属时段</strong>，因为<strong>南段是全条步道唯一能把太阳本身放进画面的位置</strong>——日落方位 256° 从这里看是偏南的开阔海面方向，没有建筑遮挡。<strong>24–70mm</strong> 拍「太阳落海 + 右侧远处天际线」的宽幅；<strong>200–400mm</strong> 压缩 Statue of Liberty（约 4 公里外）与经过的驳船，在低角度暖光里剪影效果最好。这一段人也比中段少。坐标为 OSM 标注的 promenade 观景点节点。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>24 小时开放，全年无休。</strong>它法律上不是公园（产权属 NYC DOT），因此不适用市属公园的 06:00–01:00 关门规定。<strong>2026 年秋季无任何封闭</strong>——BQE Central 大修 2030 年才破土。相邻的 Pierrepont Playground 等游乐场按 NYC Parks 规则「日出至日落」",
          "parking": "<strong>Brooklyn Heights 是历史街区加高密度住宅，路边停车几乎无解</strong>：限时表位少、居民车位优先、周末满位。地铁是唯一合理选择：<strong>2／3 线 Clark Street 站最近</strong>（站厅在 Hotel St. George 楼里，靠电梯上下，出站步行约 5 分钟即到北段）；<strong>R 线 Court Street 站</strong>与<strong>4／5 线 Borough Hall 站</strong>步行 8–10 分钟；<strong>A／C 线 High Street 站</strong>可从北端接入",
          "walk": "Clark Street 站到北段机位约 <strong>400 米／5 分钟</strong>；<strong>步道全长 557 米，从北端走到南端 7–8 分钟</strong>，全程平坦无障碍、无台阶；南端 Remsen Street 到 Brooklyn Bridge Park Pier 6 约 700 米／9 分钟（有下坡）"
        },
        "notes": [
          "<strong>栏杆与铺装有来自下方车流的持续低频震动</strong>，这是这里唯一的技术性障碍。长曝光务必：关机身与镜头防抖、收起中柱把重心压到最低、挂配重、用 2 秒延时或快门线、并且<strong>不要把三脚架的脚顶在栏杆或长椅上</strong>",
          "<strong>三脚架合法</strong>：这里由 NYC Parks 养护，NYC Parks 明文规定只用手持相机或三脚架、不占独占空间、不用道具、不申请停车即无需许可。但步道宽度有限且是社区通行道，请靠栏杆一侧架、别横在路中",
          "<strong>这是居民的日常步道，不是景区。</strong>东侧紧贴 Columbia Heights 的住宅后院（那些后院至今保留着原来的「上层花园」），清晨与傍晚有大量遛狗、跑步、推婴儿车的居民。请压低音量、别堵路",
          "<strong>此处不是 Brooklyn Bridge 的桥上步道，两者常被搞混。</strong>想走桥上那条木板步道要另去 Brooklyn Bridge 的入口（Tillary St／Adams St 一带），和 promenade 是两回事",
          "<strong>Squibb Park Bridge 的状态请当天核实</strong>。这座连通 promenade 北端与 Pier 1 的步行桥曾因结构弹跳问题长期封闭并经过重建，如果你打算靠它下到 Brooklyn Bridge Park，出发前查 brooklynbridgepark.org 的 Park Alerts 页",
          "<strong>2026 年 10 月 6 日与 10 月 22 日两场 BQE 的 CEQR 公众会</strong>可能带来临时的勘测车辆、临时围挡或本地媒体聚集。不影响拍摄，但如果你正好在那两天来、又要拍空景，把时间放在清晨最保险"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/53/Brooklyn_Heights_Promenade_View.jpg",
            "cap": "自步道望 Lower Manhattan 全景 · Kidfly182 / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Brooklyn_Heights_Promenade_NY1.jpg",
            "cap": "悬臂步道本体与铸铁栏杆 · Acroterion / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Brooklyn_Heights_Promenade_01_%289423355002%29.jpg",
            "cap": "步道北段与 Brooklyn Bridge · Joe Mabel / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "prospect-park",
        "n": 5,
        "name": "Prospect Park 与 Long Meadow",
        "en": "Prospect Park · Long Meadow · Boathouse on the Lullwater · Grand Army Plaza",
        "score": 4,
        "tldr": "免费、05:00–01:00、三脚架明文合法——本区秋色三点里唯一能拍日落与蓝调的；但 10 月 20 日前还是绿的。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "05:00–01:00",
            "c": "free"
          },
          {
            "t": "三脚架合法",
            "c": "free"
          },
          {
            "t": "秋色需 10/20 后",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Olmsted 与 Vaux 在做完 Central Park 之后做了这里，而且他们自己认为这一个更好。</strong>1867 年开放，526 英亩。它和 Central Park 最大的不同是<strong>没有横穿的城市道路</strong>——Olmsted 用地形与拱桥把车行、马行、步行三条系统完全立体分离，所以你在园里几乎看不到边界。<strong>2018 年 1 月 2 日起全园永久禁止机动车通行</strong>，East Drive 与 West Drive 现在是纯步行与自行车环线",
          "<strong>Long Meadow 是本区秋色的主场，理由是尺度而非色彩。</strong>约 90 英亩、南北纵深近 1.6 公里的连续起伏草地，<strong>四周被高大落叶乔木整圈围住</strong>——这意味着你可以站在草地中央用长焦把对岸整片树冠压成一条连续的色带，这是 Brooklyn Botanic Garden 那种「逐株欣赏」的园子做不到的构图。清晨草地上常有薄雾（园方与摄影者都拍过雾中长草甸），<strong>而园里 05:00 就开门，是本区秋色三点中唯一能拍到日出的</strong>",
          "<strong>Boathouse on the Lullwater 有一个对摄影极其关键的设计事实：它是刻意朝西建的，就是为了接住水面上的落日。</strong>1905–07 年由 Helmle &amp; Huberty 设计建造（两人都是 McKim, Mead &amp; White 的门生），通体白色赤陶贴面，<strong>母题取自 Jacopo Sansovino 在威尼斯设计的 Library of St Mark 的底层</strong>。它还有一段几乎失败的历史：<strong>1964 年 9 月，公园管理局距离拆掉它只剩 48 小时</strong>，当时的公园局长 Newbold Morris 认定它没救了；<strong>布鲁克林诗人 Marianne Moore 与一批保护主义者在最后关头把它保了下来</strong>，它随即成为纽约市第 4 号指定地标（NYCL No. 0004，1965 年 10 月 14 日），<strong>编号之低说明它是全市最早被保下来的那几栋建筑之一</strong>，1972 年列入国家史迹名录",
          "<strong>Grand Army Plaza 的 Soldiers’ and Sailors’ Memorial Arch</strong>是园区北门的门面：<strong>1889 年动工、1892 年落成，建筑师 John H. Duncan</strong>（也是 Grant’s Tomb 的设计者），纪念南北战争中的联邦军。<strong>拱顶那组四马战车群像由 Frederick MacMonnies 于 1898 年加装</strong>，内侧另有 Lincoln 与 Grant 的骑马浮雕（浮雕由 MacMonnies 与 Thomas Eakins 参与）。它站在一个交通环岛中央，<strong>意味着你几乎总能拍到「拱门 + 车流光轨」的组合</strong>",
          "往南的 <strong>Lullwater 与 Terrace Bridge</strong> 一带是全园水景最密的一段，再往西的 <strong>Ravine</strong> 里是<strong>布鲁克林仅存的一片森林</strong>（Olmsted 造的人工「山谷」，如今已长成成熟林相）。园内另有 1912 年的旋转木马、Lefferts Historic House、Audubon Center（就设在 Boathouse 里，是全美第一个城市 Audubon 中心）、以及 Nethermead 与 Concert Grove Pavilion 这些 19 世纪构筑"
        ],
        "photo": "秋色 <strong>4.5/5</strong>，建筑 <strong>4/5</strong>，人像 <strong>4/5</strong>，风光 <strong>3.5/5</strong>。秋色给到 4.5 是因为它同时具备<strong>免费、开到凌晨一点、三脚架明文合法、以及大尺度草甸构图</strong>四项条件，这在纽约市里是独一份的组合。扣分只扣在一件事上：<strong>它不像 Botanic Garden 那样有精选品种</strong>，色彩饱和度和层次比不上人工配植的日式庭园，而且园区太大（526 英亩），走完主要机位是 5–6 公里。",
        "shots": [
          {
            "name": "Long Meadow 北端 · Endale Arch 出口（框景 + 草甸纵深）",
            "view": [
              40.671085,
              -73.969054
            ],
            "desc": "<strong>清晨 06:50–08:00（9 月底）或 07:20–08:30（10 月下旬）</strong>——这是全园最值得起早的一个机位。Endale Arch 是 1867 年园区建成时的原始拱洞之一（近年完成修复），Olmsted 的设计意图就是让你穿过一段黑暗的拱洞后<strong>突然看见整片 Long Meadow</strong>。<strong>站在拱洞内往南拍，用洞口的暗弧当天然画框</strong>，<strong>24–35mm</strong> 让拱洞占画面外圈三分之一、草甸与树冠填满洞口。清晨太阳在东南（方位 91–104°），侧逆光会在草面拉出长影并把薄雾打亮。曝光要点：<strong>对洞口的草地测光，让拱洞完全压成黑色剪影</strong>，别试图把砖石细节救回来，那会毁掉框景的对比。"
          },
          {
            "name": "Long Meadow 中段（草甸中央，长焦压树冠色带）",
            "view": [
              40.665684,
              -73.972874
            ],
            "desc": "<strong>昏金光 17:15–18:06（10/22）或 18:00–18:48（9/25），加蓝调到 18:34／19:16。</strong>走到草甸中央，<strong>70–200mm 对着西侧与南侧的树线压缩</strong>——长焦会把纵深压掉，把对岸整圈树冠变成一条连续的红黄色带，前景留一条被低角度光打亮的草脊。<strong>135–300mm</strong> 可以单独挑出一棵孤立大树配空草地。傍晚这里的方向条件很好：日落方位 256–269° 正好在草甸西南侧的树线上，<strong>秋叶被逆光穿透是本区最容易出效果的一件事</strong>——把太阳藏在树干后，对叶片高光测光减 2/3 档。<strong>三脚架在此明文合法</strong>（NYC Parks 规则），蓝调 2–8 秒。往西 200 米是 1876 年的 Picnic House（约 40.665559, -73.971573）。"
          },
          {
            "name": "Boathouse on the Lullwater（西向立面 + 水面倒影）",
            "view": [
              40.660825,
              -73.96528
            ],
            "desc": "<strong>这栋楼是刻意朝西建的，所以昏金光 17:15–18:00（10 月下旬）是它的设计时刻</strong>——白色赤陶立面在低角度暖光下会整体发亮，而 Lullwater 的水面把柱廊、拱券与栏杆完整倒影进去。<strong>35–85mm</strong> 从水对岸（Lullwater Bridge 一侧，约 40.660617, -73.965878）正面拍，<strong>压低机位到水面高度让倒影占画面下半</strong>；<strong>85–200mm</strong> 单独压缩塔司干柱式的柱列与三陇板檐部。清晨 07:00–08:00 无风时倒影最完整但立面在阴影里，<strong>所以「倒影完整」与「立面受光」二者只能选一个</strong>——要两者兼得就去多云天的下午。往北 60 米有 Lullwater viewing platform（约 40.661351, -73.966270）可换高度。"
          },
          {
            "name": "Grand Army Plaza · Soldiers’ and Sailors’ Arch（蓝调加车流光轨）",
            "view": [
              40.672989,
              -73.969903
            ],
            "desc": "<strong>蓝调 18:06–18:34（10/22）或 18:48–19:16（9/25）</strong>，拱门泛光与天空亮度在这段时间平衡，之后拱门会过曝、天空会黑成一块。<strong>24–50mm</strong> 从环岛外侧的人行道正面拍拱门全貌加顶部四马战车；<strong>85–200mm</strong> 单独压缩 MacMonnies 的战车群像与马的肌肉细节（1898 年加装，是全美最好的 Beaux-Arts 群雕之一）。<strong>这里最值得做的是慢门车轨</strong>：拱门立在交通环岛中央，<strong>4–15 秒</strong>就能把 Flatbush Avenue 与 Eastern Parkway 的车灯拉成绕着拱门的弧线。f/11–f/16、ISO 100、需三脚架与快门线。<strong>注意这是繁忙路口，架机位请完全站在人行道上、不要越过路缘石。</strong>"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>（Boathouse 内的 Audubon Center 与旋转木马另有各自的开放时间与票价）",
          "hours": "<strong>每日 05:00–01:00</strong>，全年开放（NYC 311 官方口径）。<strong>这是本区秋色三点里唯一覆盖日出、日落与蓝调的开放时间</strong>——Brooklyn Botanic Garden 18:00 关、Green-Wood 入夜前锁门，只有这里不受限制。<strong>2018 年 1 月 2 日起全园永久禁止机动车通行</strong>",
          "parking": "园内不设访客停车场（且全园禁车）。周边路边停车在 Park Slope 与 Prospect Heights 一侧竞争激烈，逐块读牌。<strong>地铁覆盖是本区最好的，四个方向各有站</strong>：<strong>2／3 线 Grand Army Plaza 站</strong>（正对拱门与北门，出站即到）；<strong>B／Q／S 线 Prospect Park 站</strong>（东南角，靠近 Lullwater 与 Boathouse，<strong>周末无 B 线</strong>）；<strong>F／G 线 15 St–Prospect Park 站与 Fort Hamilton Parkway 站</strong>（西南侧）；<strong>B／Q 线 Parkside Avenue 站</strong>（南侧，靠 Prospect Park Lake）",
          "walk": "Grand Army Plaza 站到拱门 <strong>0 分钟，出站即到</strong>；拱门到 Endale Arch 约 350 米／5 分钟；Endale Arch 到 Long Meadow 中段约 700 米／9 分钟；Long Meadow 中段到 Boathouse 约 1.1 公里／15 分钟（有起伏）。<strong>拱门 → Long Meadow → Boathouse → Prospect Park 站全线约 3.5 公里／50–60 分钟</strong>，主路铺装、坡度平缓"
        },
        "notes": [
          "<strong>三脚架明文合法，这是本区四种政策里最宽松的一档。</strong>NYC Parks 官方条件：只用手持相机或三脚架、不要求独占空间、不用道具或模拟紧急场面、不申请停车或车辆通行，<strong>就不需要 MOME 许可也不需要 Parks 的 MPA</strong>。超出这个范围（灯具、发电机、封控人流）才需提前 7–14 天申请，且 Prospect Park Alliance <strong>不在周末、周一与重大节假日次日发许可</strong>",
          "<strong>Boathouse、Picnic House 与旋转木马的室内属可租用私人场地</strong>，不能自行进去拍：Boathouse 拍摄费率 $750／小时（4 小时起）或 $7,500／12 小时日。室外拍它的立面完全免费",
          "<strong>秋色早到就是一园绿叶。</strong>10 月 15 日之前来，请把预期调成「Olmsted 的地形设计 + 1905 年的建筑」而不是颜色。好消息是这里免费，早来的代价只是时间",
          "<strong>清晨的雾是这里最值得赌的东西。</strong>Long Meadow 是低洼开阔草地，晴朗无风的秋夜之后清晨常有贴地薄雾，日出后 30–60 分钟散去。想赌雾就在日出前 20 分钟到位",
          "<strong>Ravine 与 Midwood 的林间小径在天黑后照明极少、人烟稀少</strong>，独行者不建议入夜后深入园区内部。蓝调拍完请沿 East Drive 或 West Drive 这类宽阔环线走出园区，而不是穿林间小路",
          "<strong>Long Meadow 是本地人的日常运动场</strong>，傍晚有足球、垒球、遛狗（园方设有特定时段的无绳遛狗区）。想要空草地请在清晨，傍晚就把人拍进去当尺度"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Fall_Morning_Prospect_Park_Long_Meadow.jpg",
            "cap": "秋日清晨的 Long Meadow · Badtartin / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Prospect_Park_boathouse_%2861446p%29.jpg",
            "cap": "Boathouse on the Lullwater 与水面倒影 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/46/Soldiers%27_and_Sailors%27_Arch%2C_Brooklyn.jpg",
            "cap": "Grand Army Plaza 的 Soldiers’ and Sailors’ Arch · David Brossard / CC BY-SA 2.0"
          }
        ]
      },
      {
        "id": "brooklyn-botanic-garden",
        "n": 6,
        "name": "Brooklyn Botanic Garden 布鲁克林植物园",
        "en": "Brooklyn Botanic Garden · Japanese Hill-and-Pond Garden",
        "score": 4,
        "tldr": "$22、周一闭馆、18:00 关门；主角 Japanese Garden 恰恰禁三脚架，秋色要等 10 月 20 日后。",
        "tags": [
          {
            "t": "成人 $22",
            "c": "paid"
          },
          {
            "t": "周一闭馆",
            "c": "risk"
          },
          {
            "t": "日式庭园禁三脚架",
            "c": "risk"
          },
          {
            "t": "10/24 需专门票",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Japanese Hill-and-Pond Garden 是这 52 英亩里唯一不可替代的东西。</strong>它由日本景观师 <strong>Takeo Shiota 设计、1915 年向公众开放</strong>，被广泛认定为<strong>美国公共植物园中建成的第一座日本庭园</strong>。池中立朱红鸟居、岸上有神社、山坡上是各品种的鸡爪枫与其栽培变种，秋色峰值时园方自己的描述是「橙、红、黄、紫的层次无可比拟」。<strong>但这里就是全园唯一明文禁止三脚架的区域之一</strong>——见下面的 notes",
          "<strong>秋色时间必须按本区的总口径来算，不能按「十月就有」来算。</strong>园方 Fall Highlights 页面写的是「Spectacular autumn hues start to appear in October」——注意是 <strong>start to appear</strong>。结合 Kings County 2026 年预报峰值 10 月 21 日，<strong>实用判断是：10 月 15 日之前来，Japanese Garden 的枫还基本是绿的；10 月 20 日之后才是真的；10 月 22 日刚好踩在预报峰值上。</strong><strong>植物园本身不提供实时秋色追踪器</strong>，只有静态的 Fall Highlights 页面与一份 What’s in Bloom 植物清单——想要实时口径请去看 New York Botanical Garden（Bronx）的分早中晚期树种清单，那是纽约市范围内最靠得住的",
          "除了日式庭园，秋天真正有货的还有三处，都是园方点名的：<strong>Cherry Esplanade 两侧成排的 scarlet oak（深红栎）</strong>，东南角一小片黄叶银杏；<strong>Oak Circle 东侧那棵园里最老的连香树（katsura）</strong>——它的叶色是<strong>分带渐变的</strong>，从黄到橙再到粉红与红，而且<strong>落叶会散出棉花糖一样的甜味</strong>，这是个很少有人写但现场极明显的细节；以及 <strong>Shelby White and Leon Levy Water Garden</strong> 里转成亮橙红的黑檀（black tupelo）。Native Flora Garden 与 Discovery Garden 也有枫与漆树",
          "<strong>时间上有一个硬约束，会直接决定你能不能拍到好光。</strong><strong>10 月的开放时间是每天 10:00–18:00（周一闭馆）</strong>，而<strong>末次入园是闭园前 30 分钟、专类园（含 Japanese Garden）在闭园前 30 分钟开始清园</strong>。10/22 的日落是 18:06、太阳降到 6° 高度角是 17:28——<strong>也就是说昏金光的头半小时（17:00–17:30）落在开放时间内，但 Japanese Garden 17:30 就要开始清人</strong>。<strong>正确做法：16:40 之前进到日式庭园，把最好的二十分钟留在这里，然后再去别处。</strong>想拍日落与蓝调的话，这个园区做不到，请把那部分预算给 Prospect Park（开到 01:00）",
          "<strong>2026 年 10 月有两个日历陷阱，都必须提前避开。</strong><strong>①10 月 24 日（周六）全天为 Fall Harvest Festival，需专门票，当天不售普通门票</strong>——如果你的秋色日期恰好是 10 月 24 日，这一站就没法按常规访问。<strong>②10 月 12 日（Indigenous Peoples’ Day）是周一但照常开放 10:00–18:00</strong>，这是十月里唯一一个开门的周一。另外<strong>150 Eastern Parkway 入口目前临时关闭</strong>，只能走 455 Flatbush Avenue 或 990 Washington Avenue"
        ],
        "photo": "园林 <strong>4.5/5</strong>，秋色 <strong>4/5</strong>，人像 <strong>3.5/5</strong>，建筑 <strong>3/5</strong>。Japanese Hill-and-Pond Garden 的完成度确实是美国东岸日式庭园里的第一档。扣分有三条实打实的理由：<strong>主体区域禁三脚架</strong>、<strong>18:00 关门拿不到日落与蓝调</strong>、以及<strong>秋色窗口窄到大概只有两周</strong>，早来一周就是一园绿叶加 $22 门票。人像分数不高是因为庭园步道窄、需要顾及其他访客，且商业与人像拍摄需另行许可。",
        "shots": [
          {
            "name": "Japanese Hill-and-Pond Garden 池畔与观景亭",
            "park": [
              40.670638,
              -73.963679
            ],
            "view": [
              40.668737,
              -73.962912
            ],
            "desc": "<strong>两个时段，选一个：①开园 10:00–11:00</strong>（人最少，且十月上午的低角度光会从东南方斜射进山坡，把枫叶打成透光的）；<strong>②16:40–17:30</strong>（昏金光的前半段，但请注意专类园 17:30 开始清园，别把最后一分钟压在这里）。<strong>全程手持——本区明文禁止三脚架、机身支架与自拍杆。</strong>因此器材上请直接放弃慢门方案，用 <strong>f/2.0–f/2.8 大光圈 + ISO 400–1600</strong> 换快门。焦段：<strong>35–85mm</strong> 拍「朱红鸟居 + 池面倒影 + 山坡枫林」的三层构图；<strong>85–200mm</strong> 压缩单株枫的叶簇，把池面的碎光虚成背景圆斑；<strong>16–24mm</strong> 从观景亭向池对岸拍全景。<strong>拍逆光透叶是这里最值得做的一件事</strong>——把太阳藏在枝干后面，对叶片高光测光后减 1/3 到 2/3 档，红枫会亮成灯笼。"
          },
          {
            "name": "Cherry Esplanade 与 Oak Circle（深红栎与连香树）",
            "view": [
              40.668743,
              -73.964615
            ],
            "desc": "<strong>上午 10:00–11:30 或下午 16:00–17:30。</strong>Cherry Esplanade 是一条南北向的宽草坪，两侧成排的 scarlet oak 在峰值时是整园最饱和的深红，<strong>而它的优势是空间开阔、可以合法架三脚架</strong>（禁区只限日式庭园、温室与花床）。<strong>24–50mm</strong> 沿草坪纵轴拍两排树的对称透视；<strong>70–200mm</strong> 从一端压缩，让两排树冠在长焦下合成一条红色隧道。往东南 150 米的 <strong>Oak Circle（约 40.667130, -73.964333）</strong>有那棵分带变色的连香树，用 <strong>100–200mm 微距或中长焦拍单枝叶色渐变</strong>，这是全园最容易出「一张就够」的细节照。"
          },
          {
            "name": "Lily Pool Terrace 与 Rock Garden（水面倒影）",
            "view": [
              40.66679,
              -73.962326
            ],
            "desc": "<strong>清晨开园的 10:00–10:40 是唯一无风时段</strong>，睡莲池的水面这时最接近镜面，能把 Steinhardt Conservayory 的玻璃穹顶与周边秋色一起倒进水里。<strong>24–70mm</strong> 压低到池沿高度让倒影占画面下半；<strong>偏振镜在这里是反过来用的</strong>——不要消反光，转到反光最强的角度保住倒影。往西 130 米的 Rock Garden（约 40.666200, -73.963807）是冰川漂砾造的岩石园，秋天有变色的多肉景天与转成橙褐的池杉（pond cypress），<strong>85–200mm</strong> 拍岩石纹理与植物的质感对比。<strong>注意 Steinhardt Conservatory 温室内部禁三脚架。</strong>"
          }
        ],
        "access": {
          "book": "<strong>建议线上预购但非强制</strong>。官方口径：advance tickets are recommended，门票提前 <strong>30 天</strong>开售；现场各入口售票亭也有当日票，但取决于余量。<strong>所有访客（含会员与儿童）都必须持票进场</strong>，会员凭会员证与免费票入场。票不可退，但可提前换日期",
          "ticket": "成人现场 <strong>$22</strong>／线上 $23.67（含 $1.67 手续费）；65 岁以上与 12 岁以上持证学生现场 <strong>$16</strong>／线上 $17.47；<strong>12 岁以下免费</strong>（14 岁以下须 18 岁以上成人陪同）。另有 <strong>Museum &amp; Garden 联票</strong>（含隔壁 Brooklyn Museum 当日入场）：成人现场 $34／线上 $36.06，65+ 与 20 岁以上学生 $24，12–19 岁学生 $16——注意 <strong>Brooklyn Museum 周二闭馆</strong>，联票须同日使用。每日另有一定数量免费的 Community tickets",
          "hours": "<strong>9 月：周二至周四 10:00–19:00；周五至周日 10:00–18:00；周一闭馆。</strong><strong>10 月：周二至周日 10:00–18:00；周一闭馆，但 10 月 12 日（Indigenous Peoples’ Day）例外开放 10:00–18:00。</strong><strong>末次入园为闭园前 30 分钟；专类园（含 Japanese Hill-and-Pond Garden 与温室）在闭园前 30 分钟开始清园。</strong><strong>10 月 24 日（周六）为 Fall Harvest Festival，需专门票，当天不售普通门票。</strong>会员另有 Fall Mornings 提前入园：周六日 09:00–10:00（9 月 12 日起）",
          "parking": "<strong>900 Washington Avenue 有人看管停车场，07:00–22:00</strong>（无过夜停车）。费率：1 小时 $10、2 小时 $12、3 小时 $14、4 小时 $16、5 小时 $18、<strong>至闭园 $24</strong>、24 小时 $35、丢票每日 $35；繁忙日适用活动费率。<strong>公共交通更省事</strong>：<strong>2／3 线 Eastern Parkway–Brooklyn Museum 站</strong>（对应 990 Washington Avenue 入口，无障碍）；<strong>B／Q／S 线 Prospect Park 站</strong>（对应 455 Flatbush Avenue 入口，<strong>注意周末无 B 线</strong>）；S（Franklin Avenue Shuttle）到 Franklin Avenue 站（无电梯）。巴士 B16、B41、B43、B45、B48 均可达",
          "walk": "<strong>重要：150 Eastern Parkway 入口临时关闭</strong>，只能从 <strong>455 Flatbush Avenue</strong> 或 <strong>990 Washington Avenue</strong> 进。Eastern Parkway–Brooklyn Museum 站到 990 Washington Avenue 入口约 500 米／6 分钟；Prospect Park 站到 455 Flatbush Avenue 入口约 250 米／3 分钟。入园后到 Japanese Hill-and-Pond Garden 约 300–500 米／5–7 分钟，园内主路铺装、可轮椅通行，但部分历史小径较窄、不平或有坡"
        },
        "notes": [
          "<strong>这是本区最需要注意的一条政策：Japanese Hill-and-Pond Garden 禁止三脚架。</strong>官方原文「tripods, body mounts, and selfie sticks may not be used in the Japanese Hill-and-Pond Garden, the Conservatory, or flower beds」。也就是说<strong>你专门为之而来的那个地方必须手持</strong>。请据此调整器材：带大光圈定焦、把 ISO 上限放宽到 3200，别带那支需要慢门的镜头",
          "<strong>园内其余区域个人摄影不需许可</strong>，器材上限是「一台相机 + 一个三脚架／机身支架／自拍杆」，<strong>不允许带灯具、反光板与道具</strong>。禁无人机。禁止挡路",
          "<strong>专业人像与团体拍摄需另行许可</strong>（至少 5 个工作日申请）；婚纱与订婚拍摄 <strong>$366／25 人以内</strong>，每场 60 分钟、配保安计时、<strong>禁止室内拍摄</strong>，4–10 月可预约时段为 10:00–16:30；商业与编辑类拍摄需提前 14 个工作日",
          "<strong>周中上午是全园最安静的时段</strong>，园方自己也这么建议。峰值秋色的周末与 Sakura Matsuri 是全年人最多的时候",
          "<strong>18:00 关门意味着这里没有日落与蓝调</strong>。如果你想在同一天既拍 BBG 又拍傍晚光线，<strong>正确顺序是 BBG（10:00–17:45）→ 步行 5 分钟到 Prospect Park（开到 01:00）拍日落与蓝调</strong>，两园只隔一条 Flatbush Avenue",
          "<strong>秋色早到就是白花 $22。</strong>如果你的日期在 10 月 15 日之前，而这一站的唯一目的是秋色，建议直接跳过换成 Prospect Park（免费），把 BBG 留给下一次"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Japanese_Hill-and-Pond_Garden%2C_Brooklyn_Botanic_Garden_%2860636%29.jpg",
            "cap": "Japanese Hill-and-Pond Garden 池畔与鸟居 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Brooklyn_Botanic_Garden_New_York_November_2016_006.jpg",
            "cap": "秋色中的日式庭园 · King of Hearts / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/25/Brooklyn_Botanic_Garden_New_York_October_2016_005.jpg",
            "cap": "十月园内秋叶 · King of Hearts / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "green-wood",
        "n": 7,
        "name": "Green-Wood Cemetery 绿荫公墓",
        "en": "The Green-Wood Cemetery · Gothic Gates · Battle Hill",
        "score": 4.5,
        "tldr": "免费、478 英亩、8,000 棵老树，个人拍照官方明说「欢迎并鼓励」；但 10 月起的闭园钟点未公布，可能拍不到日落。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "365 天开放",
            "c": "free"
          },
          {
            "t": "十月闭园时间未公布",
            "c": "risk"
          },
          {
            "t": "开车比走路省力",
            "c": "paid"
          }
        ],
        "highlights": [
          "<strong>25th Street 的那座大门是全美哥特复兴建筑里的一件重器，不是「公墓门」那么简单。</strong><strong>1861 年动工、1865 年完成，建筑师 Richard M. Upjohn 与其父（Richard Upjohn，美国哥特复兴教堂的开山人物）</strong>，用的是新泽西 Belleville 产的褐砂石。构造是两道尖拱门夹一座 <strong>Flamboyant 式钟塔，塔高 106 英尺（32 米）</strong>，钟塔靠两道飞扶壁撑住、扶壁又落到门洞外侧的巨大墩座上。尖拱深凹的山花里是 <strong>John M. Moffitt 雕的四组新斯科舍石灰岩高浮雕</strong>，题材是《拉撒路复活》《拿因寡妇之子》与《基督复活》。1966 年被定为纽约市地标。<strong>钟至今仍在葬礼队伍到达时敲响</strong>",
          "<strong>门塔的尖顶上住着一群野生和尚鹦鹉（monk parakeet）</strong>，来源是几十年前从阿根廷运抵纽约途中逃脱的一批鸟的后代，如今在褐砂石的尖顶与花饰里筑了大巢。<strong>这是全区最反直觉的一个拍摄对象</strong>——一座 1865 年的哥特钟塔上停着一群亮绿色的热带鹦鹉，而且它们叫声极响、很好找。用 <strong>300–600mm</strong> 拍，晴天上午光最好",
          "<strong>Battle Hill 是布鲁克林的最高天然点，海拔 216 英尺（66 米）</strong>，属末次冰期形成的 <strong>Harbor Hill 终端冰碛</strong>——整座公墓那种起伏地形就是冰碛给的，这也是它 1838 年被选作公墓的原因。<strong>1776 年 8 月 27 日的 Battle of Brooklyn（美国独立战争中规模最大的一场战役）中，美军在这座山坡上给英军造成了全场最多的伤亡</strong>。山顶那尊 <strong>《Altar to Liberty: Minerva》是 Frederick Ruckstull 1920 年的作品</strong>，由本地商人 Charles M. Higgins 出资，<strong>Minerva 的视线越过纽约港正对自由女神像</strong>；2006 年一场社区行动用「这条视线」为理由，挡掉了一栋会遮住它的新建筑",
          "<strong>老树是这里对比植物园的真正优势。</strong>478 英亩、约 60 万人下葬、<strong>8,000 多棵树</strong>，而且是<strong>一百多年没被打断的原生长树龄</strong>——这一点是 2010 年才建成的 Brooklyn Bridge Park 和只有 52 英亩的 Botanic Garden 都给不了的。配合起伏的冰碛地形和满山维多利亚时代的墓碑、方尖碑与陵墓，<strong>秋色在这里是「有骨架的秋色」</strong>，不是一片好看的树。秋色时间同样按本区总口径：Kings County 2026 年预报峰值 10 月 21 日前后",
          "<strong>园内有若干水面，是拍倒影的地方</strong>：Sylvan Water（西南）、Valley Water、Crescent Water、Dell Water。另有 1911 年 Warren &amp; Wetmore（Grand Central Terminal 的建筑师）设计的 <strong>Historic Chapel</strong>。名人墓包括 Leonard Bernstein、Jean-Michel Basquiat、Louis Comfort Tiffany、Horace Greeley、Boss Tweed 与 Samuel Morse——但作为摄影目标，<strong>地形与树比名字有用得多</strong>"
        ],
        "photo": "建筑 <strong>5/5</strong>，秋色 <strong>4.5/5</strong>，风光 <strong>3.5/5</strong>，人像 <strong>1/5</strong>。大门本体给满分——它的细节密度（飞扶壁、尖塔、四组浮雕、钟塔）能单独撑起半天。<strong>人像给 1 分不是审美判断而是规则问题：园方明文「请不要带道具与真人模特」</strong>，这里不适合做任何计划性人像。风光扣分因为 Battle Hill 看 One World Trade Center 是 342.1°、6,494 米、<strong>塔尖仰角只有 4.8 度</strong>——这个天际线视角很扁，需要长焦和极通透的空气才成立。",
        "shots": [
          {
            "name": "25th Street 主门（哥特门塔正立面）",
            "park": [
              40.65901,
              -73.995613
            ],
            "view": [
              40.65901,
              -73.995613
            ],
            "desc": "<strong>上午 08:30–10:30 最好</strong>：主门朝西北，<strong>但门塔与浮雕所在的立面高、上半截在上午会被东南方的太阳斜照亮</strong>，深凹山花里的浮雕这时有最强的立体感——正午顶光会把浮雕压平，傍晚整个立面进入阴影。<strong>24–35mm</strong> 从 25th Street 对面人行道正面拍两道尖拱加钟塔全貌（需要退到马路对面才装得下 106 英尺的塔）；<strong>85–200mm</strong> 单独拍四组浮雕与飞扶壁的交接；<strong>300–600mm</strong> 拍尖顶上的和尚鹦鹉。<strong>竖幅优于横幅</strong>，因为主体是一座向上堆叠的塔。坐标为 OSM 标注的 Main Entrance 节点，<strong>R 线 25th Street 站就在正对面</strong>。"
          },
          {
            "name": "Battle Hill · Altar to Liberty: Minerva（雕像与天际线）",
            "view": [
              40.657254,
              -73.98937
            ],
            "desc": "<strong>清晨 07:00–08:30 是唯一正确的时段，而且只在 9 月成立。</strong>原因是几何：从 Battle Hill 看 Manhattan 是方位 342.1°，你看到的是楼群的南南东立面；<strong>清晨太阳在方位 91–104°，正好把这些立面正面照亮；而傍晚太阳在 256–269°，这些立面全部落入阴影</strong>。问题是<strong>主门 9 月 30 日之前 07:00 开、10 月起（未公布，估计）08:00 开</strong>，而 10/22 日出是 07:15——<strong>十月来这里就拿不到晨光了</strong>。<strong>200–400mm</strong> 压缩 6.5 公里外的 One WTC 与 Minerva 的青铜背影同框（这是这里最值得做的一张：1920 年的雕像凝视 2014 年的塔）；<strong>35–85mm</strong> 拍雕像与祭坛本体加秋树。Battle Hill 观景点节点在约 40.657187, -73.989644，相距十几米。"
          },
          {
            "name": "Sylvan Water 岸边（水面倒影 + 秋树）",
            "view": [
              40.653715,
              -73.998601
            ],
            "desc": "<strong>清晨 07:30–09:00（无风、倒影完整）或 17:00–17:45（暖光、逆光透叶）。</strong>这是园内最大的一片水面，四周环绕成熟落叶乔木与维多利亚墓碑，<strong>是「有骨架的秋色」这个说法最容易兑现的地方</strong>。<strong>24–70mm</strong> 压低到水面高度让倒影占下半、对岸树冠与墓碑天际线压在上三分之一；<strong>70–200mm</strong> 挑一座方尖碑配它背后的红枫做「一碑一树」的极简构图。<strong>偏振镜反着用</strong>：转到反光最强的角度保住倒影而不是消掉它。此处距主门约 900 米、有明显起伏，<strong>建议开车过来（园内免费停车）</strong>。"
          },
          {
            "name": "Historic Chapel 与 Valley Water 一带",
            "view": [
              40.656346,
              -73.995305
            ],
            "desc": "<strong>下午 15:30–17:00。</strong>Historic Chapel 是 1911 年 Warren &amp; Wetmore（Grand Central Terminal 的建筑师）的作品，印第安纳石灰岩、平面近正方、上覆一座小穹顶，<strong>体量小但细部极精，正好补足主门那种宏大尺度之外的另一档</strong>。<strong>35–85mm</strong> 拍礼拜堂全貌加周围秋树；<strong>85–200mm</strong> 拍石雕细部与穹顶。往西北 200 米的 Valley Water（约 40.655671, -73.996525）可换水景，往东南 550 米（方位 111.9°）就是 Battle Hill。这一段的园区道路起伏明显，园方明确说明<strong>道路是人车共用的、请靠边走并注意来车</strong>。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>。官方原文：「We’re open 365 days a year, at no charge.」<strong>园内停车也完全免费</strong>",
          "hours": "<strong>官网现行公布的是 2026 年 4 月 1 日至 9 月 30 日的时刻表：</strong>主门（Fifth Avenue &amp; 25th Street）<strong>每天 07:00–19:00</strong>，车辆与行人皆可；Sunset Park 门（Fourth Avenue &amp; 35th Street）行人 08:00–19:00、车辆 08:00–16:00；Fort Hamilton Parkway 门与 Prospect Park West 门行人周一至周五 11:00–19:00、周六日 08:00–19:00，车辆仅周六日 08:00–16:00。<strong>10 月 1 日起的 2026 年秋冬时刻表官网尚未公布——未能从官方渠道确认。</strong>近年惯例是十月初至十一月初改为 <strong>08:00–18:00</strong>、之后 08:00–17:00。<strong>这件事直接决定你能不能拍到日落</strong>：9/25–9/30 期间 19:00 关园、当日日落 18:48–18:40，<strong>是本窗口内唯一能在园内拍到完整昏金光的时段</strong>；若十月照 18:00 执行，10/17（日落 18:13）与 10/22（日落 18:06）都在闭园之后，<strong>十月来就拍不到日落</strong>。园方特别提醒<strong>请在闭园时间前至少 10 分钟离场，闸门准点上锁</strong>（被锁在里面请打安保 347-865-4816）。园内的 Green-House 游客中心 4/18–9/30 周四至周一 10:00–19:00、周二周三闭，联邦假日闭馆（含 Labor Day 与 10 月 12 日 Indigenous Peoples’ Day）",
          "parking": "<strong>这是本区唯一一个开车明显优于地铁的点位</strong>，理由是园区面积：478 英亩、地形起伏，从主门到 Battle Hill 543 米且要爬坡，到 Sylvan Water 约 900 米。<strong>园方明确欢迎自驾并允许在园内任意处免费停车</strong>（要求靠道路右侧停、不上草地、留出通行空间）。地铁其实也极方便：<strong>R 线 25th Street 站就在主门正对面</strong>，这是全区最省事的地铁接驳；<strong>D／N／R 线 36th Street 站</strong>与 <strong>F／G 线 Fort Hamilton Parkway 站</strong>可从其他门进。<strong>建议：只拍大门就坐 R 线；要拍 Battle Hill 与水景就开车</strong>",
          "walk": "25th Street 站到主门 <strong>0–1 分钟，出站即到</strong>；主门到 Historic Chapel 约 250 米／4 分钟；<strong>主门到 Battle Hill 与 Minerva 约 543 米（方位 111.9°），步行 10–15 分钟且持续上坡至海拔 66 米</strong>；主门到 Sylvan Water 约 900 米／13 分钟。各入口均有免费地图，官网也有 PDF 版。<strong>园内禁止自行车、滑板车与轮滑</strong>（入口有停车架）"
        },
        "notes": [
          "<strong>摄影政策比传闻宽松：官方原文「We welcome and encourage you to take photos of Green-Wood for personal use」，而现行 Visitor Guidelines 全文没有一处提到三脚架。</strong>需要书面同意的只有「拟用于出版或商业用途的专业摄影」与摄影机（(718) 768-7300）。需要标注的灰区：该园 2010 年的旧摄影政策页把「灯具、支架及其他器材」归入专业摄影范畴，<strong>「支架」是否涵盖普通三脚架，官方现行页面未作说明——未能确认</strong>。低调架、不挡路，实际上不会有问题",
          "<strong>明文禁止：带道具与真人模特、无人机、宠物（导盲犬除外）、自行车滑板轮滑、野餐、跑步与球类、大声喧哗。</strong>另外<strong>禁止触摸或做墓碑拓印</strong>（很多碑已过百年、脆弱），也不要坐、踩或倚靠墓碑与陵墓（有倾倒风险）",
          "<strong>这是一座仍在使用的公墓。</strong>你随时可能遇到正在进行的葬礼或来祭扫的家属。遇到时请立刻放下相机、绕开、并且不要把镜头对向他们。这是能不能长期保住「欢迎个人拍照」这条政策的关键",
          "<strong>园内道路人车共用</strong>，家属会开车找墓位。园方明确要求行人尽量靠边走、留意来车，尤其是转弯处。架三脚架时请完全离开车道",
          "<strong>十月的闭园钟点是这一站最大的不确定项。</strong>出发当天请查 green-wood.com/hours 或打 (718) 768-7300 确认。如果确认是 18:00 关，请把行程改到上午，并接受<strong>这一站十月只有平光可用</strong>",
          "<strong>Battle Hill 的 Manhattan 视角很扁</strong>：One WTC 仰角只有 4.8 度、距离 6.5 公里，需要 200mm 以上以及非常通透的空气。<strong>雨后第一个晴天是这里最好的机会</strong>，普通秋日的霾会把 6.5 公里外的天际线洗成一片灰",
          "<strong>园区太大，务必在门口拿地图。</strong>478 英亩、道路蜿蜒且多为放射状，手机地图在园内的路径规划经常不可用。四个入口与主门附近的 Modern Chapel、Fort Hamilton 门的 Gatehouse 都有洗手间"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Green-Wood_Cemetery_gate_%2853784p%29.jpg",
            "cap": "25th Street 哥特复兴主门与钟塔 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Green-Wood_Cemetery_gate_%2853753p%29.jpg",
            "cap": "主门尖拱与飞扶壁细部 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a3/2015_Green-Wood_Cemetery_gate_house.jpg",
            "cap": "门侧的办公与礼拜堂翼楼 · Beyond My Ken / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "coney-island",
        "n": 8,
        "name": "Coney Island · 木栈道与 Wonder Wheel",
        "en": "Coney Island · Riegelmann Boardwalk · Deno’s Wonder Wheel · Cyclone · Parachute Jump",
        "score": 4,
        "tldr": "2026 赛季 10/25 收摊、只开周末与犹太节日；<strong>最优日期是 9/26 周六</strong>，其余日子摩天轮是黑的。",
        "tags": [
          {
            "t": "入园免费",
            "c": "free"
          },
          {
            "t": "仅周末与节日开",
            "c": "risk"
          },
          {
            "t": "10/25 赛季结束",
            "c": "risk"
          },
          {
            "t": "十月闭园钟点未定",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>能不能拍到「亮着灯还在转的摩天轮」，完全取决于你哪天来，这是本条目的全部要点。</strong>而且有一个几乎所有攻略都写错的前提：<strong>Wonder Wheel 和 Cyclone 属于两家不同公司、日历不同。</strong>Wonder Wheel、Phoenix、Spook-A-Rama 在 <strong>Deno’s Wonder Wheel Amusement Park</strong>；Cyclone、Thunderbolt、Tony’s Express 在 <strong>Luna Park</strong>。Deno’s 官网已公布逐日 2026 日历，<strong>9/25–10/25 窗口内的营业日只有：9/26–10/1（连续六天，Sukkot）、10/3、10/4、10/10、10/11、10/12、10/17、10/18、10/24、10/25</strong>，其余全部闭园（含 9/25 与 10/2 两个周五，官网明确写 Closed）。<strong>10/25 是 2026 赛季最后一天。</strong>详细日期与钟点见本区前置提醒",
          "<strong>Wonder Wheel 本身是一台 1920 年的机械异类，值得为它单独安排一次。</strong>发明人 <strong>Charles Hermann</strong>，由 Eccentric Ferris Wheel Amusement Company 于 1918–1920 年建造，<strong>1920 年 5 月 30 日 Memorial Day 开转，钢材是 Bethlehem 钢、在 Coney Island 的沙滩上现场锻造的</strong>。高 <strong>150 英尺（46 米，相当于十五层楼）、重约 200 吨</strong>，<strong>24 个吊舱里有 16 个是「摆动式」——它们沿蛇形轨道向轮心滑进、随轮转再甩向轮缘</strong>，另外 8 个固定在轮缘上给你普通摩天轮的体验。<strong>转一圈要整整 10 分钟</strong>（这个数字对长曝光很关键，见机位说明）。发明人最初管它叫「Dip-the-Dip」，宣传语是同时给你缆车、摩天轮和滑水道三种刺激。1983 年 6 月 7 日 Denos Vourderis 从 Fred Garms 手里买下它，<strong>1989 年被定为纽约市地标，至今保持零事故记录</strong>",
          "<strong>Cyclone 是 1927 年的木制过山车，2026 年是它的 99 岁</strong>（1927 年 6 月 26 日首航）。首降 85 英尺、坡度约 58 度，全程 2,640 英尺，<strong>1988 年被定为纽约市地标、1991 年列入国家史迹名录</strong>。它归 Luna Park 管，所以<strong>日历要单独查</strong>",
          "<strong>Parachute Jump 是这片天际线的锚，而且它已经 58 年不动了。</strong>发明人是海军中校 <strong>James H. Strong</strong>，由 Elwyn E. Seelye &amp; Company 结构设计，<strong>1939–40 年纽约世界博览会上立在 Flushing Meadow，170 吨、262 英尺高</strong>，当年在博览会上只比 Trylon 矮。世博结束后 1940–41 年迁到 Coney Island 的 Steeplechase Park，<strong>1968 年停止运营，1989 年被定为纽约市地标</strong>。它现在不载人，但<strong>装了 LED 照明、入夜后整塔变色</strong>——<strong>而且它完全不受游乐场日历约束，任何一天的夜里都亮</strong>，这是「园子没开」时的保底机位",
          "<strong>Riegelmann Boardwalk 的轴向给了一个可以精确到日的机会。</strong>实测栈道走向是 <strong>83°／263°</strong>，而本窗口内 <strong>10 月 6 日的日落方位是 263.6°、10 月 7 日是 263.2°、10 月 8 日是 262.7°</strong>——<strong>也就是说 10 月 6–8 日这三天，落日会顺着木栈道的纵轴正对着你沉下去</strong>（10/7 日落 18:29）。需要诚实说明的代价：<strong>10 月 6–8 日是周二至周四，两家游乐场都不开</strong>，所以那三天你能拿到的是「空栈道 + 沿轴落日 + Parachute Jump 剪影」，拿不到亮灯的摩天轮。这两件事在本窗口内无法兼得"
        ],
        "photo": "夜景与霓虹 <strong>4.5/5</strong>，人文 <strong>4.5/5</strong>，风光 <strong>3.5/5</strong>，人像 <strong>4/5</strong>。亮灯营业时它的画面密度极高——1920 年的摩天轮、1927 年的木架过山车、1939 年的跳伞塔挤在 500 米内，而且全部有 LED 照明。<strong>整体扣分完全来自季节：本窗口有一多半的日子园子是关的</strong>，那些日子这里会变成一个安静、空旷、略显萧索的海滨——那也是一种题材，但不是你在照片里看到的那个 Coney Island。风光分数一般是因为沙滩本身平淡，海滩朝正南、没有礁石或岬角这类前景。",
        "shots": [
          {
            "name": "Wonder Wheel 正下方（蓝调慢门光轨）",
            "view": [
              40.574041,
              -73.979145
            ],
            "desc": "<strong>只在 Deno’s 营业日成立，且必须是蓝调：9/26 为 18:47 日落 → 19:14 暮光结束，10/17 为 18:13 → 18:41，10/24 为 18:03 → 18:31。</strong><strong>快门要按转速算，这是这里最容易做错的一件事。</strong>Wonder Wheel 转一圈 <strong>10 分钟</strong>，轮缘线速度约 <strong>0.24 米／秒</strong>——所以常见的「1/2 秒拍光轨」在这里<strong>完全拉不出轨迹</strong>（只移动 12 厘米）。实用区间：<strong>4–15 秒</strong>出一段清晰的弧形光带；<strong>20–30 秒</strong>让吊舱灯扫出接近连续的圆环。f/8–f/11、ISO 100–200、三脚架加快门线。想凝固轮体与霓虹细节则 1/15–1/60 秒、f/2.8、ISO 1600 手持。焦段：<strong>14–24mm</strong> 贴到轮体基座下方仰拍让辐条呈放射状充满画面；<strong>35–50mm</strong> 退到 30 米外把摩天轮与旁边的 Phoenix 过山车并置。<strong>Phoenix 与 Thunderbolt 速度快得多，1/2–2 秒就有强烈拖影。</strong>"
          },
          {
            "name": "Riegelmann Boardwalk 西段（Parachute Jump 剪影与沿轴落日）",
            "view": [
              40.573029,
              -73.983827
            ],
            "desc": "<strong>昏金光到蓝调：10/22 为 17:28–18:34，9/26 为 18:11–19:14。</strong>栈道轴向实测 83°／263°，<strong>10 月 6–8 日日落方位 262.7–263.6°，落日正好顺栈道纵轴沉下</strong>（10/7 日落 18:29）——这三天用 <strong>24–50mm</strong> 沿栈道正西拍，木板的透视线会把太阳一路引到画面消失点。其他日期日落偏出轴线，改用 <strong>35–85mm</strong> 把 262 英尺的 Parachute Jump 塔放在画面右侧当剪影主体、残霞铺在左侧。<strong>200–400mm</strong> 可以压缩塔架的钢桁与远处 Verrazzano-Narrows Bridge。<strong>Parachute Jump 的 LED 照明整夜都开、与游乐场日历无关</strong>，所以蓝调 18:03–18:31（10 月下旬）在这里永远有东西可拍。从这里看 Wonder Wheel 是方位 74.1°、411 米。"
          },
          {
            "name": "Coney Island Cyclone（木架结构与车厢拖影）",
            "view": [
              40.574499,
              -73.977716
            ],
            "desc": "<strong>需要 Luna Park 的营业日（与 Deno’s 不同，请单独核对官网日历）。</strong><strong>昏金光 17:30–18:10（10 月下旬）拍白色木架结构</strong>——低角度暖光会把 1927 年的木桁架照出立体的交叉阴影，这是它最好看的时候；<strong>蓝调 18:03–18:31 拍亮灯版本</strong>。<strong>70–200mm</strong> 从 Surf Avenue 一侧沿轨道方向拍，<strong>1/500 秒以上凝固车厢</strong>（首降 85 英尺、坡度 58 度，速度很快），或 <strong>1/15–1/8 秒追随</strong>拍出车厢与灯带的拖影。<strong>16–35mm</strong> 贴到木架下方仰拍支撑柱阵列的重复韵律——这是它区别于任何钢架过山车的地方。往西 380 米是 Luna Park 的 Thunderbolt（约 40.574182, -73.982293）。"
          },
          {
            "name": "Steeplechase Pier（回望整片天际线）",
            "view": [
              40.571077,
              -73.983655
            ],
            "desc": "<strong>蓝调，且这是唯一能把三个地标一次收进画面的机位。</strong>走到伸入海里的木栈桥上回头往北拍，<strong>Parachute Jump、Wonder Wheel、Cyclone 会在同一帧里横向排开</strong>，前景是海水与桥桩。<strong>24–50mm</strong> 拍完整天际线，<strong>70–200mm</strong> 压缩三个地标让它们看起来紧挨在一起。<strong>需三脚架、2–15 秒</strong>；海面在长曝光下会抹平成雾状，正好把注意力压到亮灯的建筑上。<strong>桥面木板有缝隙且有涌浪传来的震动</strong>，请把三脚架的三只脚踩在同一块木板的实心处，并在按快门后等 2 秒再曝光。潮位高时桥端浪花会打上来，注意器材防水。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>两家游乐场都是免票入园（Admission is FREE at all times）</strong>，设施按次单独计费。Deno’s：<strong>Wonder Wheel 单次 $10</strong>、Phoenix $10、Thunderbolt（音乐旋转）$10、Spook-A-Rama $8、碰碰车 $8、Stop the Zombies $8、多数儿童设施 $5；也可买点数包（$50/60 点、$90/125 点、$125/175 点），现金与信用卡皆可。Luna Park 另售当日无限次 Wristband，<strong>整季通票的有效期写到 2026 年 11 月 1 日</strong>，Halloween Harvest 的活动权益需搭配 Wristband",
          "hours": "<strong>木栈道、沙滩与 Parachute Jump 的夜间照明不受游乐场日历限制。</strong><strong>Deno’s Wonder Wheel Park 2026 年营业日（官网逐日日历，本窗口内）：9/26–10/1 连续六天、10/3、10/4、10/10、10/11、10/12、10/17、10/18、10/24、10/25</strong>；其余日期闭园（<strong>含 9/25 与 10/2 两个周五</strong>）。开门：儿童区 11:00、Wonder Wheel 等成人机械 12:00。<strong>闭园钟点随天气浮动，2026 年 10 月的具体时间官网未公布——未能从官方渠道确认</strong>；2025 年 10 月的官方口径是 18:00 关，<strong>若照此执行则十月中下旬拍不到蓝调亮灯轮</strong>。当天打 (718) 372-2592 确认。<strong>Luna Park</strong> 的 Halloween Harvest 期间为 9/18–11/1，9 月口径为周五 16:00–22:00、周六 11:00–22:00、周日 11:00–20:00、节假周中 12:00–20:00；<strong>10 月 2 日以后的逐日钟点官网日历尚未展开——未能确认</strong>",
          "parking": "<strong>这是本区第二个开车不吃亏的点位</strong>：Surf Avenue 沿线与 MCU Park（Brooklyn Cyclones 球场）一带有多个大型商业停车场，<strong>秋季淡季（尤其非营业日）车位充裕</strong>，这与 DUMBO、Brooklyn Heights 的情况完全相反。但地铁同样极方便：<strong>D／F／N／Q 四条线的终点站 Coney Island–Stillwell Avenue</strong>就在 Surf Avenue 上，出站步行 5 分钟即到 Wonder Wheel。<strong>建议：如果要拍到蓝调之后（20:00 以后）且带三脚架，开车更省心；否则地铁完全够用</strong>——终点站始终有车、座位有保障",
          "walk": "Stillwell Avenue 站到 Wonder Wheel 约 <strong>400 米／5 分钟</strong>；Wonder Wheel 到 Cyclone 约 130 米／2 分钟；Wonder Wheel 到 Parachute Jump 约 460 米／6 分钟（沿木栈道，全程平坦）；Parachute Jump 到 Steeplechase Pier 端头约 250 米／4 分钟。<strong>四个机位串起来约 1.3 公里、走完 20 分钟</strong>，木栈道宽阔无台阶、可轮椅通行"
        },
        "notes": [
          "<strong>只记一句话：想拍亮灯运转的 Wonder Wheel，把日期定在 9 月 26 日（周六）。</strong>两园同开、Luna Park 开到 22:00、日落 18:47、暮光结束 19:14——整个蓝调完整落在营业时间内。次选是 10/3、10/10、10/17、10/24 的周六，越早越好",
          "<strong>如果你的日期落在非营业日，请重新设定这一站的目标</strong>：拍空栈道、拍 Parachute Jump 的 LED、拍 Cyclone 静止的木桁架、拍沙滩与桥桩。这些都不依赖游乐场。<strong>10 月 6–8 日虽然园子关着，但落日正对栈道纵轴，是那三天独有的补偿</strong>",
          "<strong>快门速度别照抄一般摩天轮的经验。</strong>Wonder Wheel 转一圈 10 分钟、轮缘线速度只有约 0.24 米／秒，<strong>1/2 秒完全拉不出光轨</strong>。要 4 秒以上才有弧线、20–30 秒才成圆环",
          "<strong>木栈道有缝隙、有海风、有涌浪震动。</strong>三脚架请踩在木板实心处、挂重物、按快门后等 2 秒再曝光；海边盐雾对镜头与卡口不友好，收工后擦拭",
          "<strong>入夜后的治安需要基本常识。</strong>Surf Avenue 与木栈道核心段（West 10th 到 West 16th）在营业日人流充足；<strong>非营业日的夜晚这一带会相当空</strong>，独行者不建议在 20:00 后往东西两侧的僻静段走，也不要把器材放在无人看管的长椅上",
          "<strong>Luna Park 与 Deno’s 的 Halloween Harvest 装饰从 9 月 18 日起就位</strong>，南瓜、稻草与穿戏服的员工是免费的额外题材，<strong>但相关的互动活动需要购买 Wristband</strong>",
          "两园都是家庭客为主、儿童密度极高。<strong>架三脚架请贴边、别横在通道上</strong>，并注意别把陌生儿童拍成画面主体"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/15/Wonder_Wheel_and_Thunderbolt_at_night%2C_Coney_Island%2C_Brooklyn.jpg",
            "cap": "夜间亮灯的 Wonder Wheel 与 Thunderbolt · Amaury Laporte / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Parachute_Jump_on_Coney_Island.jpg",
            "cap": "262 英尺的 Parachute Jump 塔 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/db/Steeplechase_Pier_facing_Coney_Island_Boardwalk.jpg",
            "cap": "自 Steeplechase Pier 回望木栈道与天际线 · Rhododendrites / CC BY-SA 4.0"
          }
        ]
      }
    ]
  }
];
