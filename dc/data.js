/* 本文件由 tools/assemble.py 从 dc/parts/*.js 自动生成，请勿直接编辑。
   要改内容请改对应片段后重新运行：python3 tools/assemble.py --region dc
   景点已按纬度从北到南排序，n 字段为自动编号，与地图针脚一一对应。 */
var REGIONS = [
  {
    "id": "philadelphia-oldcity",
    "name": "Philadelphia · Old City 建国史迹",
    "navName": "Philly Old City",
    "color": "#ffd24d",
    "lead": "这一区的核心矛盾是：<strong>最有名的建筑恰好是全区最难拍的建筑</strong>。Old City 的街网整体偏转 9 度（Chestnut Street 实测走向 99°／279°），Independence Hall 的主立面因此朝向方位角约 9°——几乎正北。在 9 月末到 10 月末这个窗口，日出方位从 91° 移到 105°，也就是说<strong>Chestnut Street 一侧的正立面在 10 月 11 日之后全天得不到一秒直射光</strong>，这不是拍摄技巧能绕过的，是天文几何。反过来，真正出片的是几个「次要」目标：City Hall 的塔与 Broad Street 轴线、Elfreth's Alley 的全天柔光、Reading Terminal Market 的混合光人文，以及 Christ Church Burial Ground 那道<strong>免票、24 小时可拍</strong>的铁栅栏。本区七个点里有五个是免费或近免费的，唯一一张 $27 的门票（Museum of the American Revolution）恰恰是摄影价值最低的一个——它是内容目的地，不是摄影目的地。",
    "callouts": [
      {
        "type": "good",
        "title": "联邦停摆风险：本窗口内已基本排除",
        "html": "<p>Independence Hall、Liberty Bell Center 与整个 Independence National Historical Park 由 National Park Service 运营，<strong>拨款中断即全部关门</strong>，所以这一项本来是本区最大的不确定性。好消息是它<strong>已经解决</strong>：FY2027 的临时拨款决议 <strong>H.R. 6500</strong> 于 <strong>2026 年 8 月 8 日经参议院 90–6 通过、9 月 1 日经众议院 370–48 通过，总统随后签署</strong>，按 FY2026 水平延续拨款至 <strong>2026 年 12 月 11 日</strong>。也就是说 <strong>9 月末到 10 月末的整个行程窗口都在这份 CR 的保护期内，停摆概率极低</strong>。来源：<a href=\"https://www.congress.gov/crs-appropriations-status-table/2027\" target=\"_blank\" rel=\"noopener\">Congress.gov FY2027 Appropriations Status Table</a>。</p><p>真正的风险点在 12 月 11 日之后（国会把 FY2027 全年拨款推到中期选举之后处理），与本次行程无关。</p><p><strong>万一形势逆转，可用的备份清单</strong>（全部非 NPS 运营）：Museum of the American Revolution（私立）、Reading Terminal Market（市场公司）、Philadelphia City Hall 与 Dilworth Park（市政府 / Center City District）、Elfreth's Alley（公共街道，24 小时）、Christ Church 与 Christ Church Burial Ground（教会）。会关的只有 Independence Hall 与 Liberty Bell Center 两处，但 Independence Hall 的外景在 Chestnut Street 人行道上仍可自由拍摄。</p>"
      },
      {
        "type": "good",
        "title": "Independence Hall 的 9:00–9:50 免票 open house 仍然存在",
        "html": "<p>这是本区最有用的一条信息，已在 nps.gov 三个页面上逐字核实（<code>/inde/planyourvisit/independencehall.htm</code>、<code>/inde/planyourvisit/hours.htm</code>、<code>/places/000/independence-hall.htm</code>，其中 hours 页最后更新于 <strong>2026 年 8 月 17 日</strong>），官方原文为：<strong>「9 am–9:50 am: Open house (no tickets required)」</strong>。这段时间是<strong>自助参观</strong>，有 ranger 在场答问，不跟团、不限路线、可以自己控制站位与时间——对拍照来说比 20 分钟的 ranger 导览团<strong>好得多</strong>。</p><p>执行方式：<strong>8:45 安检开门，8:40 前到 5th Street 安检口排队</strong>（在 Chestnut 与 Walnut 之间，有台阶和无障碍坡道），过检后在 Independence Hall 背面排队。官方明确警告<strong>受楼内容量限制，open house 不保证所有人都能进</strong>，所以早到是唯一的对策。9:50 之后无票者必须离场。</p><p><strong>一处口径不一致：</strong>NPS 的学校团页面（<code>planafieldtrip.htm</code>）仍写着「9:00 am 至 10:30 am 不需票、10:30 全体离场、10:40–16:20 需票」。这与主页面的 9:50 / 10:00 口径冲突，<strong>推测是未同步的旧文案</strong>，规划时请以 9:50 为准（保守），但如果 9:50 没被清场就是白捡 40 分钟。</p>"
      },
      {
        "type": "warn",
        "title": "City Hall 塔顶观景台只在工作日 10:00–14:45——没有黄金时段",
        "html": "<p>官方页面（phlvisitorcenter.com/CityHallTowerTour）写明 <strong>Monday–Friday 10:00 a.m.–2:45 p.m.</strong>，<strong>周末与市政假日不开</strong>，因为 City Hall 本身周末不办公。这意味着<strong>塔顶完全拍不到日落、蓝调或夜景</strong>——9 月 25 日日落 18:53、10 月 22 日日落 18:11，都在闭馆四小时之后。把塔顶当成「上午的城市俯瞰」来规划，别指望黄金光。</p><p>电梯是 1900 年前后的原装机械，<strong>一次只能载 4 名游客加 1 名操作员</strong>，现场先到先得、每 15 分钟一趟，运力极小；官方另注明<strong>大风或恶劣天气会取消</strong>（可改期不退款）。<strong>没有查到 2026 年任何电梯故障或塔顶关闭的报道</strong>，但鉴于设备年龄与运力，出发当天请先致电 <strong>267-514-4757</strong> 确认。</p><p>另：官方文案称观景台在 <strong>548 英尺</strong>，而市政府 2017 年关于 William Penn 铜像保养的新闻稿写的是铜像本身「500 feet above the street」。548 英尺应是<strong>算到帽顶</strong>的高度，观景台实际约在 500 英尺——<strong>两个口径的差异未能从官方渠道澄清</strong>。</p>"
      },
      {
        "type": "tip",
        "title": "日出日落、太阳方位与那个 9 度偏转",
        "html": "<p>费城（39.949°N, 75.150°W），本文所有时刻为 EDT——<strong>2026 年美国夏令时到 11 月 1 日才结束，整个窗口都是 EDT</strong>：</p><ul><li><strong>9 月 25 日</strong>：日出 <strong>06:51</strong>（方位 <strong>91°</strong>），日落 <strong>18:53</strong>（方位 <strong>269°</strong>），正午 12:52 太阳高度 <strong>49°</strong>。</li><li><strong>10 月 22 日</strong>：日出 <strong>07:19</strong>（方位 <strong>104°</strong>），日落 <strong>18:11</strong>（方位 <strong>256°</strong>），正午 12:45 太阳高度 <strong>39°</strong>。</li></ul><p><strong>关键几何：Old City 与 Center City 的街网整体偏转，东西向街道实测走向 99°／279°</strong>（Chestnut Street、Market Street、Elfreth's Alley 全是 99°；South Broad Street 为 189.5°；Benjamin Franklin Parkway 为 314°。以上均由 OpenStreetMap 实际路径节点算出）。</p><p>推论一：任何朝北立面（法向 9°）只有在太阳方位落在 <strong>279°–99°</strong> 区间时才受光。9 月 25 日日出方位 91°，勉强擦到；<strong>10 月 11 日起日出方位超过 99°，朝北立面全天零直射</strong>。</p><p>推论二：日出方位在 <strong>10 月 10–11 日恰好扫过 99°</strong>，即那几天太阳从 Elfreth's Alley 的巷道轴线上升起。这是本区唯一的「街道对齐日出」。</p><p>黄金时段按日落前 45 分钟算：9 月 25 日 <strong>18:05–18:53</strong>，10 月 22 日 <strong>17:25–18:11</strong>；蓝调在日落后 15–30 分钟。</p>"
      },
      {
        "type": "info",
        "title": "三脚架、安检与各馆拍摄政策",
        "html": "<p><strong>NPS（Independence Hall / Liberty Bell Center）</strong>：2025 年 1 月生效的 EXPLORE Act（54 U.S.C. 100905）规定 <strong>8 人以内、只用手持器材、在对公众开放区域</strong>的静态摄影<strong>不需许可、不收费</strong>。反过来读：<strong>「hand-carried equipment only」意味着三脚架落地即超出免许可范围</strong>。室内实务上也不可能架三脚架（Assembly Room 是 20 分钟跟团、站位拥挤）。NPS 官方明确写「Photos are permitted at the Liberty Bell」；但<strong>「Assembly Room 内允许手持、禁闪光灯」这一条只见于二手来源，未能在 nps.gov 上逐字确认</strong>——实务共识是手持无反／单反没问题，请把闪光灯彻底关掉。</p><p><strong>安检（两处都有，机场级）</strong>：随身物品过 X 光或目视检查，走金属探测门；<strong>禁枪械、刀具（含小折刀）、爆炸物、任何武器</strong>；<strong>禁一切开口的食物饮料</strong>（一次性咖啡杯、敞口薯条不行，旋盖瓶可以）。NPS 页面<strong>没有公布具体的包体积上限</strong>，只说大背包与行李会被拒；<strong>园区内没有寄存柜</strong>——摄影包别带太大，一个 20L 以内的小包是安全的。Independence Hall 安检 8:45 开、闭馆前 15 分钟停止放人；Liberty Bell Center 安检约 16:45 停。</p><p><strong>Museum of the American Revolution</strong>：Washington's War Tent 剧场内<strong>明确禁止个人拍摄那顶帐篷</strong>（馆方提供高分辨率官方照片下载）。<strong>Reading Terminal Market</strong>：个人手持拍摄没问题，但 filming 需提前 7 个工作日申请，且<strong>11:00–14:00 禁止拍摄作业</strong>；市场保留收费权。<strong>City Hall</strong>：进楼过金属探测门。<strong>Christ Church</strong>：活跃的圣公会堂区，礼拜期间不要拍。</p>"
      }
    ],
    "spots": [
      {
        "id": "reading-terminal-market",
        "n": 1,
        "name": "雷丁车站市场",
        "en": "Reading Terminal Market",
        "score": 4,
        "tldr": "1893 年火车棚下的公共市场，免费、每日 8:00–18:00；混合光是唯一难点，Amish 摊位只有周三至周六。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "每日 8:00–18:00",
            "c": "free"
          },
          {
            "t": "混合色温",
            "c": "risk"
          },
          {
            "t": "11:00–14:00 禁拍摄作业",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>1893 年 2 月开业，建在 Reading Railroad 高架火车棚的下方</strong>——当年为了让列车月台架到市场之上，整条铁路被抬高。那座火车棚长 559 英尺、高 88 英尺，用掉 <strong>135,000 英尺玻璃与 5,000 万磅铁</strong>，容纳 13 条股道。市场开业初期有近 400 个摊位，<strong>现在约 80 家商户，建筑本身是 National Historic Landmark</strong>，楼上已改成 Pennsylvania Convention Center。地下那间 1893 年的冷藏库当时被认为是全美最先进的。",
          "<strong>这是本区唯一真正的街头与食物摄影场地。</strong>约 78,000 平方英尺的单一大厅，摊位密、招牌乱、动线交错、有真正在买菜的本地人而不只是游客——这些正是 Independence Mall 一带完全没有的东西。",
          "<strong>Pennsylvania Dutch（Amish 与 Mennonite）摊位集中在西北角，是全场氛围最独特的一块</strong>，摊主从 Lancaster County 开约 60 英里过来。<strong>关于营业日，来源不一致：多个二手来源与官方地图的标注都指向「周三至周六」，但 Wikipedia 同一页里既写「周日不营业」也写「周一至周六」。官方地图的图例只标了「CLOSED SUNDAY」。→ 最保险的读法是把周三至周六当作确定营业窗口，周日确定不营业，周一周二不确定。这一项未能从官方渠道给出确切答案，(215) 922-2317 可以问。</strong>这直接改变现场氛围：Amish 摊位关着的日子，西北角就只是一片拉下卷帘的柜台。",
          "<strong>光线是这里唯一的技术难点。</strong>市场在火车棚下方，<strong>天花低、几乎没有天窗，室内光以人工光为主</strong>：各摊位自选的钨丝灯、卤素灯、荧光灯与 LED 混在一起，色温从 2700K 跨到 6000K，<strong>同一张画面里常有三种色温</strong>。自然光只出现在 12th Street 与 Arch Street 出入口附近几米内。",
          "<strong>时段决定的不是光而是人。</strong>工作日上午 08:00–10:00 最松、能拍摊主备货与本地熟客；11:00–14:00 是午餐高峰，人挤到几乎无法构图，<strong>而且这正好是官方禁止拍摄作业的时段</strong>；<strong>周六上午人最多但氛围最饱满</strong>，Amish 摊位（尤其 Beiler's 的甜甜圈）常在中午前卖光。"
        ],
        "photo": "街拍 <strong>4.5/5</strong>，食物 <strong>4.5/5</strong>，人像 <strong>4/5</strong>，建筑 <strong>2.5/5</strong>。题材密度全区第一、完全免费、不受天气与拨款影响；扣分是混合色温、低照度、以及必须处理好「拍摊主」的分寸。",
        "shots": [
          {
            "name": "主十字通道（市场中轴）",
            "view": [
              39.95318,
              -75.15906
            ],
            "desc": "坐标为 OSM 市场建筑中心。<strong>最佳工作日 08:00–10:00</strong>：摊位刚摆开、灯全亮、人流稀，能拍到「空间」而不只是「人头」。<strong>35mm 是这里的标准镜头</strong>（50mm 太窄、24mm 会把摊位招牌拉得变形又收进太多杂物）。构图找两样东西：<strong>通道纵深里层层叠叠的悬挂招牌</strong>，以及<strong>摊位暖灯与通道冷顶灯之间的色温分界线</strong>——这条分界线是这里最有辨识度的视觉元素，不要在后期把它「校正」掉。<strong>参数：ISO 1600–3200、f/2–2.8、1/125–1/250</strong>（1/60 拍不住走动的人；宁可再推一档 ISO）。<strong>白平衡：拍 RAW，机内固定在 3600–4000K</strong>——这是钨丝摊灯（约 2900K）与顶部 LED（约 5000K）之间的折中点，把暖摊位留一点橙、把通道留一点青，反而是这里最真实的样子。<strong>不要开自动白平衡</strong>，一步一跳的色温会让整组片子无法统一调色。<strong>不要用闪光灯</strong>：会打死气氛，也会立刻招来摊主的反感。"
          },
          {
            "name": "Pennsylvania Dutch 西北角",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于市场大厅西北象限内）。</strong><strong>请先确认当天 Amish 摊位是否营业（保险起见排周三至周六，周日肯定关）。</strong><strong>最佳周三至周五 08:00–10:00</strong>：此时是烘焙出炉与备货的时段，蒸汽、面团、手工动作全都在，而且人少到可以慢慢等。<strong>50mm 或 85mm 拍手部动作与食物特写</strong>（长焦能保持距离，也是尊重的一部分），35mm 拍摊位全景与柜台后的人。<strong>这里的摊灯偏暖（约 2700–3000K），建议单独把白平衡压到 3200K</strong>。<strong>拍摊主前先用眼神或一句话征得同意</strong>——Amish 与 Mennonite 群体中有人因宗教原因不愿被拍脸，<strong>被拒绝就拍手、拍柜台、拍食物，不要硬拍。</strong>"
          },
          {
            "name": "Filbert Street 侧外立面与招牌",
            "view": [
              39.95289,
              -75.1591
            ],
            "desc": "坐标为 OSM 的 Filbert Street 路段。拍那块经典的市场招牌与 19 世纪的砖石立面。Filbert Street 是东西向（走向 99°），<strong>市场南立面朝南偏西</strong>，<strong>最佳 14:00–17:00 正面受光</strong>（10/22 的 15:00 太阳高度 30°、方位 219°，砖立面暖调最饱满）。<strong>另一个更好的时段是入夜后</strong>：霓虹式招牌亮起、砖墙在环境光下转冷，9/25 约 19:10 之后、10/22 约 18:30 之后。35mm 拍立面加招牌，85mm 单抽招牌字体。<strong>此处是市中心街道，行人与车流多，手持为宜。</strong>"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>",
          "ticket": "<strong>入场完全免费</strong>（吃东西另算；<strong>部分摊位尤其 Pennsylvania Dutch 摊位只收现金</strong>，建议带 $40–60 现钞）",
          "hours": "官方原文（readingterminalmarket.org）：<strong>「Open Daily, 8AM - 6PM」</strong>，并注明<strong>「individual merchant store hours may vary」</strong>。<strong>秋季无每周闭馆日</strong>，全年只闭 Thanksgiving、Christmas Day、New Year's Day。实际注意两点：<strong>① 许多熟食摊会在闭市前 30–60 分钟收摊</strong>；<strong>② Pennsylvania Dutch 摊位周日肯定不开，保险起见按周三至周六安排</strong>（营业日的确切范围未能从官方渠道确认，可致电 215-922-2317）。",
          "parking": "<strong>不要开车</strong>。市场就在 <strong>SEPTA Jefferson Station（原 Market East）</strong>与 Market–Frankford Line「11th Street」站之上，也紧邻 Pennsylvania Convention Center。<strong>周边车库费率未能从官方渠道确认</strong>，会展期间价格会明显上浮。",
          "walk": "<strong>Jefferson Station 站内直通市场</strong>；11th Street 地铁站到市场约 <strong>200 米 / 3 分钟</strong>。<strong>从 City Hall 走过来约 700 米 / 9 分钟</strong>——这两个点是天然的一组，City Hall 塔顶 14:45 收工后正好过来吃饭加拍照。"
        },
        "notes": [
          "<strong>官方政策原文（readingterminalmarket.org/film-photography）：filming 需提前至少 7 个工作日提交申请、申请不等于批准、「Filming is not permitted 11am – 2pm」、市场保留收费权。</strong>该表格用的是 filming 的措辞，<strong>并未明确覆盖个人静态摄影</strong>；实务上手持随手拍从无问题，<strong>但请把 11:00–14:00 理解为「不要在这段时间做任何看起来像作业的事」</strong>——不要架三脚架、不要打灯、不要长时间占位",
          "<strong>拍摊主必须先征得同意。</strong>这是他们的工作场所、是他们的生意，一句「Mind if I take a photo?」的成功率极高，不问而拍的失败率也极高。<strong>Amish 与 Mennonite 摊主中有人因宗教原因不愿被拍脸，请务必先问</strong>",
          "<strong>三脚架不要带</strong>：通道窄、人流大，官方虽未就静态摄影明文禁止，但架起来一定会被要求收掉",
          "<strong>不要用闪光灯</strong>。混合光下闪光会毁掉现场气氛，也是最容易引起冲突的动作",
          "<strong>白平衡策略是这里的胜负手</strong>：拍 RAW、机内固定 3600–4000K、关掉自动白平衡。想要一组能统一调色的片子，这一条比任何构图技巧都重要",
          "<strong>周六上午人最多、氛围最好、但几乎无法构图</strong>；想要「有人味但能拍」的平衡点是<strong>周三至周五 08:00–10:00</strong>",
          "市场里有一家做费城风景照片的商户（Phillyscapes by Russ Brown），<strong>在同行的摊位前拍摄请格外注意分寸</strong>",
          "<strong>本条目由市场公司运营，不受联邦拨款影响</strong>，是停摆情形下的可靠备份"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/04/Reading_Terminal_Market_%2853587020195%29.jpg",
            "cap": "市场大厅通道与摊位招牌 · ajay_suresh / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Reading_Terminal_Market_%283399715590%29.jpg",
            "cap": "摊位与混合色温的实际观感 · Quinn Dombrowski / CC BY-SA 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Reading_Terminal_Market_2.jpg",
            "cap": "市场内景 · N1NJ4 / CC BY 2.0"
          }
        ]
      },
      {
        "id": "elfreths-alley",
        "n": 2,
        "name": "埃尔弗雷斯巷",
        "en": "Elfreth's Alley",
        "score": 4.5,
        "tldr": "全区最好的街道摄影目标，路面秋季全天柔光；但这是私人住宅街，博物馆只在周五至周日 12:00–16:00 开。",
        "tags": [
          {
            "t": "街道 24 小时免费",
            "c": "free"
          },
          {
            "t": "私人住宅街",
            "c": "risk"
          },
          {
            "t": "博物馆仅周五至周日",
            "c": "risk"
          },
          {
            "t": "博物馆 $3",
            "c": "paid"
          }
        ],
        "highlights": [
          "<strong>号称全美最古老的持续有人居住的住宅街</strong>。巷道在 1702–1703 年前后成型（两名铁匠 Arthur Wells 与 John Gilbert 让出各自地块的一角开出这条车道），<strong>但要注意口径差别：现存 32 栋房子按官方历史标牌的说法建于 1720–1830 年之间</strong>，不是 1703 年。巷名来自 18 世纪的铁匠兼房产主 Jeremiah Elfreth。",
          "<strong>这是一条私人住宅街，不是景点，这一点决定了怎么拍。</strong>博物馆官网自己的措辞是「Yes, people do still live here!」。32 栋房子里绝大多数是私宅，门前台阶、窗台、花箱都是私人财产。<strong>不要坐台阶、不要靠门、不要把镜头对着窗户往里拍、不要在清早或夜间大声说话。</strong>这条巷子能保持现在的样子，靠的正是住户的忍耐度。",
          "<strong>巷道走向实测 99.2°／279.2°</strong>（OSM way 12150950 两端节点算得，西端 N 2nd Street 侧 39.952861／-75.143098，东端 N Front Street 侧 39.952683／-75.141665，全长约 124 米），与费城偏转 9° 的街网完全一致。",
          "<strong>关键光线结论：秋季路面全天见不到直射阳光。</strong>巷道立面间距约 6–7 米、房屋 2.5–3.5 层约 9–11 米高，<strong>阳光要打到路面需要太阳高度超过约 52–60°</strong>；而 9 月 25 日正午高度只有 <strong>49°</strong>，10 月 22 日只有 <strong>39°</strong>。也就是说<strong>整条巷子在你到访的每一天都是柔光棚</strong>——这对鹅卵石与红砖的质感是好事，反差小、高光不炸、全天可拍，<strong>反而是本区唯一不受「什么时候来」限制的机位。</strong>受光的只有北侧那一排房子（朝南）的上部楼层，约 10:00–15:30；南侧那一排全天无光。",
          "<strong>唯一的「有方向的光」出现在日出后半小时内：太阳方位每天从 92° 扫到 108° 附近，会经过巷道轴线 99°，10 月 10–11 日恰好在日出瞬间正对轴线。</strong>理论上此时光可以沿巷道纵向射入。<strong>但 N Front Street 对面的建筑是否会挡住这段低角度光，无法远程核实——请当成彩票而不是计划。</strong>"
        ],
        "photo": "建筑 <strong>4.5/5</strong>，街拍 <strong>5/5</strong>，人像 <strong>4/5</strong>。全天柔光、纵深强、色调统一（红砖加青灰石板加黑门），是本区出片率最高的地方；扣分只因不能用三脚架久留、不能拍住户、且旺季游客会站在你的构图里。",
        "shots": [
          {
            "name": "N 2nd Street 西端向东（鹅卵石纵深主机位）",
            "view": [
              39.95286,
              -75.1431
            ],
            "desc": "<strong>招牌构图。</strong>坐标为 OSM 巷道西端节点。相机降到<strong>膝高甚至 40 厘米</strong>，让前景鹅卵石占画面下三分之一，两侧砖立面向消失点收拢，巷尾的天光做出口。<strong>焦段选择比时段重要</strong>：24–28mm 是甜点（16mm 会把两侧拉得太散、让 124 米的巷子看起来只有 40 米），<strong>50mm 从西端压缩会让砖墙层层贴合、密度最高</strong>。<strong>时段 09:00–16:00 任意</strong>——路面本来就没直射光，但请避开 10:00–15:30 里天光最硬的时刻：那时北排房子的上部楼层会有一条亮砖带，容易在画面上缘炸掉，<strong>要么压半档曝光，要么把构图压低、别拍到屋檐</strong>。<strong>最干净的是 08:00–09:30 与 16:00–17:30</strong>，太阳低到连上部楼层都不受光，整个画面落在同一档均匀光里。<strong>雨后是彩蛋</strong>：湿鹅卵石会把天光反成一条亮线，纵深立刻翻倍。禁三脚架不是明文规定而是常识——这是住宅街，别在别人门口架二十分钟。"
          },
          {
            "name": "N Front Street 东端向西（顺光方向）",
            "view": [
              39.95268,
              -75.14167
            ],
            "desc": "<strong>清早唯一可能有纵向光的方向：站东端向西拍，太阳在你背后。</strong>9 月末 07:00–07:45、10 月末 07:30–08:15，太阳方位 92°–108° 扫过巷道轴线 99°，若光能越过 Front Street 对面的建筑，会沿巷道打亮整排立面并在鹅卵石上拉出长影。<strong>该遮挡关系未能核实，请把这趟当作低成本尝试：早到十分钟，成了就是全区最好的一张。</strong>不成也不亏——同一机位在均匀柔光下依然成立。35mm 竖幅拍「巷道加天空」的比例最舒服；<strong>85mm 从东端向西压缩，能把三十多扇黑色木门叠成一条重复图案</strong>，这是本巷最容易被忽略的抽象构图。"
          },
          {
            "name": "巷道西段（近 N 2nd Street，博物馆房所在街段）",
            "view": [
              39.95285,
              -75.14304
            ],
            "desc": "<strong>坐标为 OSM 巷道西段节点，反查落在 134 号门前；博物馆的 124 与 126 号在同一街段内、相差数个门牌（门牌级定位属推算）。</strong><strong>注意：博物馆是 124 与 126 两栋房子，不只是 126 号。</strong>这一段的门牌、门环、脚踏石、煤气灯式路灯是全巷细节最密的地方。<strong>50mm 或 85mm 拍单栋门面的正立面</strong>（要正对、要水平，砖缝一歪就毁），100mm 微距拍门环与年代铭牌。<strong>时段任意，柔光就是最好的细节光。</strong>巷子中段还有一条通向 <strong>Bladen's Court</strong> 的小院口，是全巷唯一的「巷中之巷」，值得进去拍一张 24mm 的封闭式小天井——但那里更贴近住户窗户，请更安静、更快。"
          }
        ],
        "access": {
          "book": "<strong>街道不需预约</strong>。博物馆<strong>不接受网络订票</strong>，只能现场买（收现金、信用卡与 Apple Pay）。导览团<strong>周六日 14:30 一场</strong>，40 分钟，走完全巷含 Bladen's Court 并含两栋博物馆房。",
          "ticket": "<strong>街道免费</strong>。博物馆入场 <strong>成人 $3、7–12 岁 $2、7 岁以下免费</strong>；<strong>导览团（含博物馆入场）成人 $10、7–12 岁 $5</strong>；另有 <strong>$3 的手机音频导览</strong>（elfrethsalley.org/audiotour），随时可买、不受开馆时间限制。",
          "hours": "<strong>街道 24 小时开放</strong>（公共街道）。<strong>博物馆已核实为 2026 年正常开放，但只有周五、周六、周日 12:00–16:00</strong>（官网原文「Museum hours are Fridays, Saturdays, and Sundays from 12pm - 4pm」）。<strong>整个季节只运营到 11 月中旬</strong>（官网：April 到 mid-November）。→ <strong>9 月末到 10 月末的任何日期都在季内，但周一至周四来只能拍街道、进不了房子。</strong>电话 (267) 457-4159。",
          "parking": "<strong>不要开车来</strong>。这一带是 18 世纪的窄巷网络，路边车位极少且限时。<strong>SEPTA Market–Frankford Line「2nd Street」站</strong>最近，或从 Old City 任意付费车库步行。",
          "walk": "2nd Street 地铁站到巷子西端约 <strong>450 米 / 6 分钟</strong>；从 Christ Church 走过来约 <strong>350 米 / 5 分钟</strong>；巷子全长仅 <strong>124 米</strong>，从头走到尾 2 分钟，但认真拍的话<strong>值得留 45–60 分钟</strong>。"
        },
        "notes": [
          "<strong>这是本条目最重要的一条：巷子里住着人。</strong>不要坐或站在住户台阶上、不要触碰门与花箱、不要把镜头对着窗户、不要把三脚架架在门前、不要在 08:00 前或 20:00 后大声交谈。<strong>住户有权要求你停止拍摄，请立刻配合</strong>",
          "<strong>不要拍摄进出门的住户</strong>。要拍人就拍自己的同行者，并且尽量不要长时间占用某一户门前的位置",
          "<strong>路面是真鹅卵石，很不平</strong>，低机位蹲拍时注意脚下；雨后石面极滑，穿硬底鞋要小心",
          "<strong>博物馆周一至周四不开</strong>，若你想进屋拍室内陈设，必须把行程排在周五、周六或周日（导览团只有周六日 14:30）",
          "巷子太窄，<strong>16mm 级别的超广会严重损害纵深感</strong>，24–28mm 与 50mm 才是这里的正确焦段",
          "<strong>秋季路面全天无直射光是本条目的最大优势</strong>——不用为了光线赶时间，可以把它排在任何一天的任何空档",
          "<strong>本条目不受联邦拨款影响</strong>（公共街道加私立小博物馆），是停摆情形下的可靠备份"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/06/Elfreth%27s_Alley_streetscape.jpg",
            "cap": "巷道街景与鹅卵石路面 · Sam Nabi / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Elfreth%27s_Alley_from_2nd_Street.jpg",
            "cap": "自 N 2nd Street 西端望入（即主机位视角） · Beyond My Ken / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Elfreth%27s_Alley_south_side_from_Front_Street.jpg",
            "cap": "自 N Front Street 东端看南侧一排 · Beyond My Ken / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "philadelphia-city-hall",
        "n": 3,
        "name": "费城市政厅",
        "en": "Philadelphia City Hall",
        "score": 5,
        "tldr": "全区最强的建筑目标，外景 24 小时免费；塔顶观景台仅工作日 10:00–14:45、每趟 4 人，拍不到黄金时段。",
        "tags": [
          {
            "t": "外景 24 小时免费",
            "c": "free"
          },
          {
            "t": "塔顶仅工作日",
            "c": "risk"
          },
          {
            "t": "塔顶每趟 4 人",
            "c": "risk"
          },
          {
            "t": "塔票约 $16",
            "c": "paid"
          }
        ],
        "highlights": [
          "1871 年动工、<strong>1901 年完工，建了三十年</strong>，John McArthur Jr. 设计的 Second Empire 式样（与巴黎 Louvre 同一语汇）。<strong>至今仍是世界上最高的承重砌体建筑</strong>——整栋楼靠石与砖自身承重，基座墙厚达 22 英尺，没有钢框架。塔完工后它短暂当过世界最高的可居住建筑。",
          "<strong>塔顶的 William Penn 铜像由 Alexander Milne Calder 作，高 37 英尺、重逾 53,000 磅</strong>，1888 年铸于费城本地的 Tacony Iron Works，<strong>是全世界置于建筑之上的最大雕像</strong>。整栋楼另有 <strong>250 余件雕塑</strong>，主要也归于 Calder。费城有过一条不成文的「绅士协定」，<strong>直到 1987 年 One Liberty Place 建成前，没有建筑高过 Penn 的帽子</strong>——之后就有了那个著名的「Billy Penn 的诅咒」。",
          "<strong>三条街道轴线是这里真正的摄影资产，而且都可以精确计算</strong>（数据取自 OSM 实际路径）：<strong>South Broad Street 走向 189.5°</strong>（自南向北笔直指向塔）；<strong>Benjamin Franklin Parkway 走向 314°</strong>（自市政厅西北方向直指 Philadelphia Museum of Art，约 2.1 公里）；以及东西向的 Market Street（99°／279°）。<strong>由此可得一条极实用的结论：上午 10:00–10:30，太阳方位 125°–133°，反日点正好落在 313°–314°，也就是 Parkway 的轴线上</strong>——此刻从塔顶朝西北看，Parkway 与远端的美术馆是<strong>完全正面受光、影子全部藏在建筑背后</strong>的状态。这恰好也是塔顶开放的第一个时段。",
          "<strong>塔顶的硬约束必须先说清：仅周一至周五 10:00–14:45，周末与市政假日不开。</strong>9 月 25 日日落 18:53、10 月 22 日日落 18:11，<strong>都在闭馆四小时之后——塔顶完全没有黄金时段、蓝调或夜景的可能。</strong>电梯是 1900 年前后的原装机械，<strong>一次 4 名游客加 1 名操作员、每 15 分钟一趟</strong>，现场先到先得，运力极小；大风与恶劣天气会取消。<strong>观景台是封闭式的（有玻璃与部分通风格栅），不是纯露台</strong>——玻璃反射是实拍中最大的麻烦。",
          "<strong>好消息：外观没有脚手架。</strong>北门与东门的砌体修复工程已于 2024 年 6 月完工，<strong>2024 年 6 月 Center City District 还完成了一套 685 万美元的 LED 立面照明</strong>（灯具装在周边 10 栋楼的屋顶与塔基），所以<strong>这里是本区夜景与蓝调最强的一个目标</strong>。2026 年未见任何外墙工程或塔顶关闭的报道。"
        ],
        "photo": "建筑 <strong>5/5</strong>，城市俯瞰 <strong>4/5</strong>，夜景 <strong>5/5</strong>，人像 <strong>4/5</strong>。本区唯一一个「白天拍外观、上午拍俯瞰、入夜拍灯光」三段都成立的目标，而且外景全部免费；扣分只在塔顶的时段限制与观景台玻璃。",
        "shots": [
          {
            "name": "塔顶观景台（约 500 英尺）",
            "view": [
              39.9524,
              -75.16358
            ],
            "desc": "坐标为 OSM 市政厅整体中心（塔与内院所在）。<strong>只有工作日 10:00–14:45，所以「哪个时段」的选择极窄，但方向选择很关键：</strong><strong>① 西北面（Benjamin Franklin Parkway 轴线，314°）——10:00–10:30 是全天最佳</strong>，太阳方位 125°–133°、反日点落在 314°，Parkway 与尽端的 Philadelphia Museum of Art 完全正面受光；<strong>美术馆距此 2.1 公里，需要 135–200mm 才能压出体量</strong>，70mm 拍 Parkway 的三条林荫带与 Logan Square 的圆形喷泉。<strong>② 西面（Comcast 双塔与现代天际线）——同样 10:00–11:30</strong>，此时太阳在东南，摩天楼朝东南的立面正对你，是唯一顺光的时段；<strong>下午两点后这一面全部转成逆光剪影</strong>。24–35mm 拍全景，85mm 抽玻璃幕墙的反射。<strong>③ 南面（South Broad Street 轴线，189.5°）——10:00–11:00 侧光最好</strong>，太阳在东南方 64° 处，街道东侧立面受光、长影横铺过路面，轴线的纵深最清楚；<strong>13:00 前后太阳压到 183°、几乎正对视线轴，会直接进光，请回避</strong>。35–70mm 竖幅把 Broad Street 拍成一条笔直的城市峡谷。<strong>④ 东面（Old City、Delaware River 与 Ben Franklin Bridge）——13:30–14:45 最好</strong>，太阳转到西南，东侧景物顺光。135–200mm 压缩，把大桥的塔与缆索叠在城市之上。<strong>器材要点：观景台封闭有玻璃，务必带橡胶遮光罩或用手掌围住镜头前缘顶住玻璃消反射</strong>；<strong>CPL 在这里非常有用</strong>（可压掉玻璃反光与远处霾）。空间极小、每趟只有 4 人、停留时间由操作员控制，<strong>上去之前先想好要拍哪三个方向，不要到了才换镜头</strong>。<strong>不要带三脚架</strong>（装不下也不允许）。"
          },
          {
            "name": "South Broad Street 向北（塔的轴线正视）",
            "view": [
              39.94745,
              -75.16484
            ],
            "desc": "坐标为 OSM 的 S Broad Street 过街节点，反查在 Broad 与 Spruce 一带（Kimmel Center 正门前），距塔约 <strong>560 米、方位 11°</strong>。<strong>Broad Street 走向 189.5°，从南往北笔直对着塔</strong>，这是全城最经典的「街道尽头一座塔」构图，而且<strong>24 小时免费</strong>。<strong>最佳两段：日落前 45 分钟</strong>（9/25 的 18:05–18:53、10/22 的 17:25–18:11，太阳在西南方，塔的西南面被暖光正打，砖石转成金褐色）；<strong>以及日落后 15–35 分钟的蓝调</strong>（2024 年新装的 LED 立面照明已亮、天空还有色，9/25 约 19:08–19:28、10/22 约 18:26–18:46）。<strong>焦段：70–200mm 是主力</strong>——压缩后塔会撑满 Broad Street 两侧建筑之间的缺口，这是本机位的关键；<strong>24–35mm 会让塔缩成一个小点，效果差很多</strong>。构图站在<strong>街心的安全岛或人行道边缘对准街道中轴</strong>，让两侧楼群形成对称的框。<strong>禁三脚架不是规定但是常识</strong>（Broad Street 是繁忙主干道），蓝调请把 ISO 推到 3200–6400 或找路灯杆当支点。<strong>Broad Street 上有 SEPTA Broad Street Line，从 Walnut–Locust 站上下最方便。</strong>"
          },
          {
            "name": "Dilworth Park 西侧与内院",
            "view": [
              39.95289,
              -75.16465
            ],
            "desc": "坐标为 OSM 的 Dilworth Park 中心。<strong>西立面朝西偏南，是市政厅唯一能拍到「正面暖光加建筑全貌」的一面</strong>：<strong>最佳 16:00–17:30</strong>（10/22 的 16:30 太阳高度 17°、方位 239°，光几乎平打在西立面上，Calder 的雕塑群会被侧光勾出全部体积）。<strong>Dilworth Park 的跳泉是这里的前景神器：官方口径为 4 月至 10 月运营、2026 年秋季的公告是「每日开放到 10 月 18 日」，泉水时段 7:45–22:00。</strong>→ <strong>10 月 18 日之前来，可以拍「水面反射市政厅」；之后来只有干铺装</strong>（溜冰场要到 11 月中旬才装）。低机位贴近水面用 24mm 拍倒影，35mm 拍广场与塔的关系，85mm 抽立面雕塑。<strong>市政厅的内院（courtyard）可以走进去</strong>，是拍四面立面向内围合、塔从正中升起的唯一位置，<strong>16–20mm 站在院子正中垂直上仰</strong>是这里最强的一张；<strong>内院光线全天靠天光漫射，正午 12:00–13:00 顶光最均匀</strong>。注意<strong>这是在办公的政府大楼</strong>，进楼要过金属探测门，内院与门廊虽是公共通道，但请不要挡住通行、不要长时间架设。"
          },
          {
            "name": "Benjamin Franklin Parkway 回望（City Hall 至美术馆轴线）",
            "view": [
              39.95604,
              -75.16793
            ],
            "desc": "坐标为 OSM 的 Benjamin Franklin Parkway 路径节点，<strong>距市政厅约 550 米、方位 138°，正落在 Parkway 的 314°／134° 轴线上</strong>。这是从街面表现「市政厅到美术馆」这条巴黎式轴线的最佳位置：<strong>朝东南回望，塔在轴线尽头、两侧是 Parkway 的行道树与旗阵</strong>。<strong>最佳 10:00–11:00</strong>（太阳在东南、正对你身后偏上，塔的西北面受光、林荫带的影子朝远端排开，纵深最强）；<strong>次佳是日落后的蓝调</strong>，塔的 LED 照明加 Parkway 的路灯串成一条光轴。<strong>70–135mm 压缩是必须的</strong>——广角会让 550 米外的塔小到不成立。若要拍轴线的另一端（Philadelphia Museum of Art，OSM 39.96469／-75.18118），注意<strong>它的主立面朝东南对着 Parkway，秋季 09:00–12:00 正面受光</strong>，与本机位的最佳时段重合，可以连着做。<strong>Parkway 是多车道快速道路，请留在人行道与中央林荫带内，不要站到车道上。</strong>"
          }
        ],
        "access": {
          "book": "<strong>外景与内院不需预约</strong>。<strong>塔顶观景台需定时票</strong>，可在 <strong>phlvisitorcenter.com/CityHallTowerTour</strong> 线上预购（线上另加约 $2 服务费），或到 <strong>City Hall Visitor Center（东门 Room 121）</strong>现场买；<strong>现场为先到先得，因电梯只能载 4 人，旺季可能当天售完</strong>。另有约 1 小时的 <strong>City Hall Building Tour</strong>（周一至周五 10:00、12:00、14:00 三场，约 $20–26，含内部与外部）。天气取消可改期（给 credit，不退款），联系 cityhall@phlvisitorcenter.com 或 267-514-4757。",
          "ticket": "<strong>外景、内院与 Dilworth Park 完全免费。</strong>塔顶票价<strong>未能从官方渠道确认</strong>——phlvisitorcenter.com 的塔票页面把价格放在 JavaScript 购物车模块里，静态页面读不到。<strong>二手来源口径：Philadelphia Inquirer（2025）称塔票 $10–$16（按年龄与军人身份），另有访客帖称成人 $16、老年与军人 $13、青少年与学生 $10、3 岁以下免费。</strong>请按 <strong>成人约 $16</strong> 预算并现场核实。",
          "hours": "<strong>塔顶观景台官方原文：「Monday - Friday 10:00 a.m. - 2:45 p.m.」，周末与市政假日不开。</strong><strong>City Hall Visitor Center（Room 121，东门）：周一至周五 10:00–16:00。</strong>建筑本身作为办公楼大致周一至周五 07:00–18:00（<strong>该时段来自二手来源，未能从官方渠道确认</strong>）。<strong>Dilworth Park：每日 06:00–01:00</strong>；<strong>跳泉 4 月至 10 月运营、2026 年公告为每日开放至 10 月 18 日，时段 7:45–22:00</strong>；溜冰场 11 月中旬至 2 月下旬。<strong>外景与 Broad Street、Parkway 的机位 24 小时可用。</strong>洗手间在 City Hall 楼内，时间不定。",
          "parking": "<strong>不要开车</strong>。这里是全费城公共交通的交汇点：<strong>SEPTA Broad Street Line「City Hall」站、Market–Frankford Line「15th Street」站、以及所有有轨电车线路都在 Dilworth Park 地下直通</strong>。周边商业车库费率<strong>未能从官方渠道确认</strong>。",
          "walk": "地铁出站即到 Dilworth Park（<strong>0 米，站厅与公园直连</strong>）。Dilworth Park 到东门 Room 121 约 <strong>250 米 / 4 分钟</strong>（需绕行或穿内院）。South Broad Street 机位在 Walnut–Locust 站附近，<strong>距塔约 560 米 / 7 分钟</strong>。Parkway 机位距市政厅约 <strong>550 米 / 7 分钟</strong>。<strong>到 Reading Terminal Market 约 700 米 / 9 分钟</strong>，两点适合连做。"
        },
        "notes": [
          "<strong>塔顶不可能拍到日落或夜景</strong>：14:45 收工，而 9 月末日落 18:53、10 月末 18:11。把塔顶排在上午 10:00 第一趟，夜景交给 Broad Street 与 Dilworth Park 的街面机位",
          "<strong>塔顶只有工作日开</strong>——如果你的行程只有周末在费城，这一项直接删掉，外景与内院照样能拍出全区最好的建筑照片",
          "<strong>电梯一次 4 人加操作员、每 15 分钟一趟、现场先到先得</strong>，强烈建议线上预购或 10:00 开门时就到 Room 121。<strong>迟到的票不予受理</strong>，且塔顶不适合有幽闭恐惧或需要无障碍通行的人",
          "<strong>观景台是封闭式（玻璃加部分通风格栅），玻璃反射是实拍最大的麻烦</strong>。橡胶遮光罩、深色上衣、CPL 三件套能救回大部分画面；格栅处有风，秋季塔顶体感明显更冷",
          "<strong>没有查到 2026 年任何塔顶关闭或电梯故障的报道</strong>，但设备是 1900 年前后的原装机械、大风即取消，<strong>出发当天请先致电 267-514-4757 确认当天是否运行</strong>。另：<strong>观景台高度的官方口径（548 英尺）与市政府新闻稿（铜像位于街面上方 500 英尺）不一致</strong>，548 应是算到帽顶，这处差异未能从官方渠道澄清",
          "<strong>Dilworth Park 的跳泉 2026 年只开到 10 月 18 日</strong>。想拍水面倒影的话，10 月 18 日是硬期限",
          "<strong>City Hall 是在办公的政府大楼</strong>，进楼过金属探测门；内院与门廊虽可通行，请不要挡道、不要长时间架设器材",
          "<strong>本条目由市政府与 Center City District 运营，不受联邦拨款影响</strong>，是停摆情形下最强的备份目标"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Philadelphia_City_Hall_tower.jpg",
            "cap": "钟塔与 William Penn 铜像 · Nickvud / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/87/Philadelphia_City_Hall_South.jpg",
            "cap": "南立面与 Broad Street 轴线方向 · Magiluke / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/80/City_Hall%2C_2013%2C_Philadelphia_PA.jpg",
            "cap": "Second Empire 立面与 Calder 雕塑群 · John Phelan / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "christ-church",
        "n": 4,
        "name": "基督堂与基督堂墓园",
        "en": "Christ Church & Christ Church Burial Ground",
        "score": 4,
        "tldr": "Franklin 墓在 5th & Arch 街角隔栅栏免票 24 小时可拍；教堂与墓园各 $5、合票 $8，每日 11:00 才开。",
        "tags": [
          {
            "t": "墓可免票隔栏拍",
            "c": "free"
          },
          {
            "t": "合票 $8",
            "c": "paid"
          },
          {
            "t": "两地相隔 400 米",
            "c": "risk"
          },
          {
            "t": "活跃堂区",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>教堂与墓园是两个分开售票、相距约 400 米的地点，这是最容易踩的坑。</strong>教堂在 N 2nd Street 近 Church Street（GPS 39.95081／-75.14409），<strong>Benjamin Franklin 的墓在 5th & Arch 的 Christ Church Burial Ground</strong>（39.95178／-75.14813），两处各收 $5，现场可买 <strong>$8 的合票</strong>。",
          "1695 年立堂，现存建筑 1727–1744 年建成，<strong>塔尖 1754 年完工时高约 196 英尺，是当时全北美最高的建筑</strong>，而且部分建设资金来自 Benjamin Franklin 组织的彩票。设计由 Dr. John Kearsley 主持，语汇直接来自 Christopher Wren 的伦敦教堂。这里是<strong>美国圣公会的发源地</strong>。",
          "<strong>教堂内部对游客开放，但它同时是一个活跃堂区。</strong>自助参观 $5，可以坐进 <strong>George Washington、Benjamin Franklin、Betsy Ross、Benjamin Rush 用过的长椅</strong>；<strong>周日上午 10:00 有礼拜，因此周日的开放时间被切成 9:45–11:00 与 11:30–17:00 两段</strong>。礼拜期间不要拍摄。",
          "墓园 2 英亩，<strong>安葬逾 4,000 人，含五位《独立宣言》签署者</strong>（Franklin、Joseph Hewes、Francis Hopkinson、George Ross、Benjamin Rush），还有大量黄热病疫情的死者。现存墓碑约 1,400 块，另有 2,500 余块已风化消失。Franklin 与妻子 Deborah 的平卧大理石墓板在<strong>西北角</strong>。",
          "<strong>最有用的一条：Franklin 墓不买票也能拍。</strong>19 世纪在围墙上开了缺口、后来换成铸铁栅栏，正是为了让公众随时看到墓；<strong>所以站在 5th Street 与 Arch Street 街角的人行道上，隔着栅栏 24 小时可以看到并拍到墓板与上面的硬币</strong>。至于那些硬币：投币源自「A penny saved is a penny earned」，教会每年因此收到约 $4,000–5,000；<strong>但 2017 年墓板因 1950 年代改造留下的渗水加上几十年硬币的挤压与刮擦而开裂，花了 45 天、$80,000 修复</strong>，此后教会更希望你把钱投进旁边的捐款箱而不是扔到石板上。"
        ],
        "photo": "建筑 <strong>4.5/5</strong>，室内 <strong>4/5</strong>，纪实 <strong>4/5</strong>，风光 <strong>1/5</strong>。塔尖是 Old City 最优雅的垂直元素；教堂内部的白色柱廊加拱窗在午后有极干净的侧光；扣分是两地分离、墓园本身视觉比较平淡。",
        "shots": [
          {
            "name": "N 2nd Street 教堂立面与塔尖",
            "view": [
              39.95081,
              -75.14409
            ],
            "desc": "教堂坐落在 2nd Street 东侧的窄街段里，<strong>塔尖需要退到街对面并上仰才能拍全</strong>。<strong>最佳 14:00–17:00</strong>：立面与塔的西南面此时受光，10 月 22 日 15:00 太阳高度 30°、方位 219°，砖体呈暖红、塔尖白木饰有明确的立体感；<strong>9 月太阳更高（15:00 时 40°），塔尖顶部反而容易过曝，10 月优于 9 月</strong>。<strong>24mm 竖幅是必需的</strong>（街道太窄，35mm 已经收不进整个塔）；70–200mm 单独抽塔尖的钟层与风向标，配上后面的天空最干净。街道两侧有电线与路灯杆，<strong>找角度让它们落在塔的一侧而不是横穿</strong>。"
          },
          {
            "name": "教堂内部中殿与柱廊",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于 Christ Church 建筑体内）。</strong>需买 $5 自助票（或 $8 合票）。<strong>最佳 13:00–16:00</strong>：拱窗此时透进侧光，白色柱身与包厢式长椅的木色分离得最好。<strong>24mm 沿中轴向圣坛拍对称构图</strong>（这是本堂最强的一张，Palladian 式圣坛窗在正中），35mm 拍长椅与柱廊的透视，85mm 拍管风琴与铜制烛台细节。室内不亮，<strong>ISO 1600–3200、f/2.8、1/60–1/100</strong>，<strong>三脚架不要带</strong>（活跃堂区、通道窄）。白平衡固定在 3500–4000K，堂内是暖色钨丝灯与冷色窗光的混合。<strong>如遇礼拜、婚礼或音乐会，请收起相机。</strong>"
          },
          {
            "name": "5th & Arch 街角铁栅栏（免票拍 Franklin 墓）",
            "view": [
              39.95179,
              -75.14867
            ],
            "desc": "<strong>这是本条目性价比最高的机位：不用买票、不受开放时间限制。</strong>坐标为 OSM 的 N 5th Street 路段节点，栅栏就在墓园西北角外侧。<strong>最佳 09:00–11:00</strong>：此时太阳在东南、高度 17–33°，斜光打在墓板与硬币上会让铜币出现明确的高光点，<strong>而 11:00 之后墓园西北角会落进围墙与树的阴影里，硬币会变成一片灰</strong>。<strong>50–85mm 是正确焦段</strong>：隔着栅栏用长焦加大光圈（f/2–2.8）可以把栅栏虚化到几乎消失，<strong>把镜头前缘尽量贴近栅栏缝隙</strong>，这是「隔栏拍摄」的标准做法。24mm 拍街角与栅栏、把墓当成环境中的一点也成立，但不如长焦干净。想进园内拍全景与其他签署者墓碑，<strong>入口在 5th Street 一侧（Arch Street 那道门只能看不能进）</strong>。"
          }
        ],
        "access": {
          "book": "<strong>两处都接受 walk-in</strong>，不需预约。导览团现场参加即可，<strong>10 人以上团体建议先电话预约</strong>（215-922-1695 转 32）。官网也有在线预付页面。",
          "ticket": "<strong>教堂</strong>：自助 成人 $5 / 5–12 岁 $2；导览 成人 $10 / 儿童 $5。<strong>墓园</strong>：自助 成人 $5 / 5–12 岁 $2；导览 成人 $10 / 儿童 $5。<strong>合票（教堂＋墓园，自助）成人 $8 / 5–12 岁 $3，只在现场售卖</strong>。园区地图 $1。<strong>5 岁以下免费。</strong><strong>Franklin 墓在 5th & Arch 街角隔栅栏看与拍完全免费。</strong>",
          "hours": "<strong>教堂</strong>（christchurchphila.org/visit）：<strong>每日 11:00–17:00，周日例外为 9:45–11:00 与 11:30–17:00 两段</strong>（10:00 礼拜期间不对游客开放）。<strong>墓园</strong>：<strong>3 月至 11 月每日 11:00–17:00</strong>；12 月缩短为 11:00–16:00 且视天气；<strong>1 月与 2 月整月闭园</strong>，另在 Easter Sunday、Thanksgiving、Christmas Day 闭园。→ <strong>9 月末至 10 月末全部在正常季内、每日开放、无每周闭馆日。</strong><strong>两处都要到 11:00 才开门，这是本区最晚开门的景点</strong>，把它排在上午 11:00 之后。",
          "parking": "<strong>SEPTA Market–Frankford Line：教堂用「2nd Street」站，墓园用「5th Street/Independence Hall」站。</strong>教堂 Neighborhood House 后方有停车场，但<strong>免费停车仅限周日做礼拜者（需领许可证）</strong>，游客不适用。",
          "walk": "<strong>教堂到墓园约 400 米 / 6 分钟</strong>（沿 Arch Street 西行）。2nd Street 站到教堂约 200 米 / 3 分钟；5th Street 站到墓园约 300 米 / 4 分钟。<strong>墓园内没有公共洗手间</strong>，最近的在 Independence Visitor Center。"
        },
        "notes": [
          "<strong>教堂是活跃的圣公会堂区（明确表示 LGBTQ+ 友好），周日 10:00 有礼拜、平日也可能有婚礼与音乐会。</strong>遇到仪式请立刻停止拍摄",
          "<strong>两处 11:00 才开门</strong>——如果你的当天计划是「早上 8:45 排 Independence Hall 的 open house」，这两处正好可以填 11:00 之后的档",
          "<strong>把 $8 合票的价值算清楚</strong>：Franklin 墓隔栅栏免费可拍，所以合票买的其实是「教堂内部 + 墓园内其他四位签署者的墓碑」。若只想拍 Franklin 墓，一分钱都不用花",
          "<strong>不要往墓板上扔硬币。</strong>2017 年那次 $80,000 的修复，成因之一正是几十年硬币的挤压与刮擦；旁边有捐款箱",
          "墓园内<strong>砖铺路面高低不平</strong>，雨后尤其滑，低机位拍墓碑时注意脚下",
          "墓园与教堂的官方页面均未提及三脚架政策，<strong>三脚架政策未能从官方渠道确认</strong>；实务上室内通道很窄、墓园空间小，<strong>建议一律手持</strong>",
          "<strong>本条目由教会运营，不受联邦拨款影响</strong>，是停摆情形下的可靠备份"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Christ_Church%2C_Philadelphia_12.2021_%28edited%29.jpg",
            "cap": "Christ Church 立面与 1754 年塔尖 · Al R / CC BY-SA 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/37/Christ_Church_interior.jpg",
            "cap": "中殿柱廊与 Palladian 式圣坛窗 · J. Passepartout / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Christ_Church_Burial_Ground.jpg",
            "cap": "Christ Church Burial Ground 墓园 · Andrea Kennedy (Fernweh Travel Images) / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "liberty-bell-center",
        "n": 5,
        "name": "自由钟中心",
        "en": "Liberty Bell Center",
        "score": 3.5,
        "tldr": "免票免预约，钟后玻璃墙确实能看到 Independence Hall；但玻璃朝南、全天逆光，避开 12:00–13:30。",
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
            "t": "必过安检",
            "c": "risk"
          },
          {
            "t": "全天逆光",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这条视线仍然成立，已核实。</strong>Bohlin Cywinski Jackson 设计的 2003 年玻璃亭把钟放在南端的玻璃展室里，<strong>南向玻璃墙外约 100 米就是 Independence Hall</strong>，「钟在前、独立厅在玻璃后」是设计意图而非巧合。Wikimedia Commons 上有多张拍到钟与独立厅同框（以及独立厅倒映在玻璃上）的照片可以印证。",
          "<strong>但设计意图正好制造了摄影难题：玻璃墙朝南，太阳整天在南边，所以这条视线全天逆光。</strong>而且 Independence Hall 面向自由钟的那一面正是它的<strong>北立面</strong>，秋季全天不受光——<strong>玻璃后面的独立厅永远是暗的、平的，天空却是亮的</strong>，这是本机位的核心动态范围问题。",
          "<strong>最难拍的时段可以精确到分钟：正午前后太阳方位落在 180° 左右</strong>（9/25 为 12:52，10/22 为 12:45），此时太阳就在独立厅正上方、正对镜头，直接进光造成鬼影与雾化。<strong>12:00–13:30 请回避。</strong>",
          "钟本身的细节值得单独拍：<strong>1752 年由伦敦 Whitechapel 的 Lester & Pack 铸造，运抵后即开裂，1753 年由本地铸工 Pass and Stow 重铸</strong>，重约 2,080 磅。<strong>铭文上「Pensylvania」少了一个 n</strong>——这个 18 世纪的拼写错误是最容易被忽略的特写题材。现在那道宽缝并非原始裂纹，而是 1840 年代为恢复音色而钻扩的修复痕迹，钻完之后又裂出一道细纹，钟从此哑了，<strong>最后一次敲响是 1846 年 2 月 23 日</strong>。",
          "<strong>不进馆也能拍：钟从 Chestnut Street 一侧的玻璃外墙 24 小时可见</strong>，不用排安检。夜间馆内有照明、街上没人，是拍「玻璃盒里的钟」这种冷调城市构图的时段。"
        ],
        "photo": "建筑 <strong>3.5/5</strong>，静物特写 <strong>4/5</strong>，风光 <strong>0.5/5</strong>。题材唯一且免费，但光线条件先天不利、可站位窄、人流不断，扣分主要是「同一张照片全世界已经拍过两千万遍」。",
        "shots": [
          {
            "name": "钟后玻璃墙对齐 Independence Hall（招牌视线）",
            "view": [
              39.94995,
              -75.15021
            ],
            "desc": "<strong>坐标取自 OSM 建筑轮廓中心；钟室在建筑南端，实际站位比该点再往南约 40 米（推算）。</strong><strong>最佳时段两段：09:00–10:00（开门即到，也是队最短的时候）与 15:30–16:45</strong>。9/25 的 09:00 太阳高度 23°、方位 113°，光从画面左侧的东向玻璃进来，独立厅不在光轴上；16:30 太阳高度 26°、方位 245°，光从右侧进来，同理成立。<strong>务必避开 12:00–13:30（太阳压在视线轴上）。</strong>焦段 24–35mm 把钟与独立厅一起收进（钟会显小但关系清楚），<strong>50–85mm 是更好的选择</strong>：压缩后独立厅在玻璃里变大，钟的轮廓也不会被广角拉变形。曝光按钟的暗部给，<strong>+1 到 +1.7 EV 或直接拍 3 张包围做 HDR</strong>，天空与钟身的光比常在 6–8 EV。带<strong>橡胶遮光罩顶住玻璃</strong>消反射，CPL 在 40–50° 入射角下有效但会吃掉一档半。<strong>禁三脚架</strong>，ISO 800–1600 手持即可。"
          },
          {
            "name": "6th & Chestnut 路口外侧（不进馆的免安检机位）",
            "view": [
              39.9493,
              -75.15073
            ],
            "desc": "<strong>钟从 Chestnut Street 一侧玻璃外墙 24 小时可见，不用排安检。</strong><strong>最佳是日落后 15–40 分钟</strong>（9/25 约 19:08–19:33，10/22 约 18:26–18:51）：馆内灯亮、天空还有蓝调，玻璃从「反射外面」翻转成「透出里面」，这是白天绝对拍不到的效果。35–50mm 平视，把玻璃框线当几何分割。<strong>此时反射被压到最低，是唯一不需要 CPL 的时段。</strong>无三脚架就靠 ISO 6400 加机身防抖，或找路口的护柱当支点。"
          },
          {
            "name": "5th Street 侧人行道（玻璃盒外部体量）",
            "view": [
              39.94982,
              -75.1492
            ],
            "desc": "拍建筑而不是拍钟。玻璃盒东立面朝向约 99°，<strong>上午 08:00–10:00 受正面光</strong>（9/25 的 08:00 太阳高度 12°、方位 102°，几乎正打）。24mm 沿人行道纵向拍这条 100 多米长的玻璃与石材的重复韵律；70–200mm 抽局部——玻璃里叠着独立厅的倒影与馆内人影，是本区最现代感的抽象构图。"
          }
        ],
        "access": {
          "book": "<strong>不需预约、不需票</strong>，先到先得，但必须先过安检。",
          "ticket": "<strong>免费</strong>",
          "hours": "官方原文（nps.gov/inde/planyourvisit/libertybellcenter.htm）：<strong>「Open daily 9 am–5 pm」</strong>，<strong>秋季无每周闭馆日</strong>，全年只闭 Thanksgiving、Christmas Day、New Year's Day。<strong>安检截止时间三个官方页面口径不一</strong>：NPS 主页写「闭馆前至少 5 分钟」、NPS 的 Things To Do 页写「10 分钟」、Philadelphia Visitor Center 写「16:45」。<strong>按 16:45 规划最安全。</strong>有第三方来源提到夏季延长到 19:00，秋季不适用。",
          "parking": "同 Independence Hall：<strong>建议地铁</strong>，SEPTA Market–Frankford Line「5th Street/Independence Hall」站出站即到。自驾可停 5th & Market 的 AutoPark at Independence Mall，<strong>费率未能从官方渠道确认</strong>。",
          "walk": "入口在 <strong>6th & Market</strong>，出口在南端近 Chestnut Street。地铁站到入口约 <strong>400 米 / 5–6 分钟</strong>；从 Independence Hall 的 5th Street 安检口走过来约 <strong>450 米 / 6 分钟</strong>（两处安检独立，不能互通）。"
        },
        "notes": [
          "<strong>NPS 官方明确写「Photos are permitted at the Liberty Bell」</strong>，个人手持拍摄没有问题；<strong>但三脚架超出 EXPLORE Act 的免许可范围</strong>（只覆盖手持器材），别带上去",
          "<strong>安检禁枪械刀具、禁一切开口食物饮料</strong>（旋盖瓶可以）；<strong>官方没有公布包尺寸上限，园区无寄存柜</strong>，大背包会被拒",
          "排队时间官方口径是 <strong>15–55 分钟</strong>，春夏与节假日更长；<strong>9:00 开门那一刻是全天最短的队</strong>，也正好是最佳光线之一，两件事恰好重合",
          "钟前永远有人在排队合影，<strong>想拍空场只有两个办法</strong>：9:00 第一批进场，或者放弃室内、改拍 Chestnut Street 外墙的蓝调",
          "馆内在钟之前有一整段展览通道（含 Freedom on Trial 等展项），<strong>光线更暗、天花更低</strong>，如要拍展陈请把 ISO 直接推到 3200 以上",
          "<strong>本条目与 Independence Hall 同属 NPS，拨款中断会一起关门</strong>；当前 CR 保护期到 2026 年 12 月 11 日，本窗口内风险极低（详见前置提醒）"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Liberty_Bell_with_Independence_Hall.jpg",
            "cap": "自由钟与玻璃墙后的独立厅（招牌视线） · Abhiram Juvvadi / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/50/Independence_Hall_reflected_in_the_glass_of_the_Liberty_Bell_Center_with_the_Liberty_Bell_visible_through_the_glass.jpg",
            "cap": "独立厅倒映在玻璃上、钟透过玻璃可见 · Impala402 / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Independence_Hall_and_Liberty_Bell_Center.jpg",
            "cap": "独立厅与自由钟中心的位置关系（宽幅） · Myotus / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "independence-hall",
        "n": 6,
        "name": "独立厅",
        "en": "Independence Hall",
        "score": 4.5,
        "tldr": "9:00–9:50 免票 open house 已核实仍在，是最佳拍摄窗口；但主立面朝正北，10 月 11 日后全天不受光。",
        "tags": [
          {
            "t": "开馆时段免票",
            "c": "free"
          },
          {
            "t": "10:00 后需定时票",
            "c": "risk"
          },
          {
            "t": "正立面全天背光",
            "c": "risk"
          },
          {
            "t": "禁三脚架",
            "c": "risk"
          }
        ],
        "highlights": [
          "1732 年动工、1753 年完工的 Pennsylvania State House。<strong>《独立宣言》与《美国宪法》在同一个房间里签署</strong>——1776 年第二届大陆会议与 1787 年制宪会议都在一楼的 Assembly Room，Washington 用过的「Rising Sun Chair」还在原位。1979 年列入 UNESCO 世界遗产。",
          "<strong>反直觉的事实：你拍的那座钟塔不是 1776 年那一座。</strong>原始木质塔尖因腐朽在 1781 年被整体拆除，Independence Hall 有将近半个世纪是「平顶」的；现在这个塔尖是 <strong>1828 年由 William Strickland 重建</strong>的。换句话说，全美最被拍摄的爱国符号之一，其最醒目的部分比它所纪念的事件晚了 52 年。",
          "<strong>正立面（Chestnut Street 一侧）朝向方位角约 9°，即几乎正北。</strong>朝北立面要受光，太阳方位必须落在 279°–99° 之间；9 月 25 日日出方位 91°、日落方位 269°，只有清晨那不到一小时能擦到极其掠射的光；<strong>10 月 11 日起日出方位超过 99°，这面墙全天零直射光。</strong>钟塔从 Chestnut Street 看到的也是它的北面，同样不受光——<strong>「从正面拍到被阳光照亮的独立厅」在秋季是做不到的。</strong>",
          "受光的那一面在 <strong>Independence Square（南侧）</strong>：南立面法向约 189°，正午太阳方位 183°、高度 49°（9/25）或 39°（10/22），几乎正打。南侧还有 Congress Hall 与 Old City Hall 两栋同期建筑围成三合院。",
          "<strong>2025 年 3 月启动的 Independence Square Improvement Project 已按计划在 2026 年 7 月前完工</strong>（含 2025/11/13–2026/1/28 的整楼闭馆），内容包括无障碍坡道、木构与砖石修复、按史料复原的天花与墙面漆色。<strong>也就是说你现在看到的室内是刚修完的状态，无脚手架。</strong>"
        ],
        "photo": "建筑 <strong>4/5</strong>，人文纪实 <strong>4.5/5</strong>，风光 <strong>1/5</strong>。加分在 open house 那 50 分钟能自由控制站位；扣分全在朝向——正立面秋季永远是阴面，只能靠阴天均匀光、蓝调补光或改拍南侧。",
        "shots": [
          {
            "name": "Chestnut Street 北侧人行道（正立面）",
            "view": [
              39.94921,
              -75.14999
            ],
            "desc": "这是明信片机位，也是全区最需要放弃执念的机位。<strong>立面朝正北，秋季全天处于自身阴影中</strong>，所以<strong>不要等光，要等云</strong>：薄云均匀漫射的时段反而是最佳，反差小、砖色与白色木饰的层次都保得住。若要有光影，唯一窗口是 <strong>9 月末 06:51–07:40</strong>（太阳方位 91°→99°，仅东端山墙有极掠射的暖光；10 月 11 日后连这个也没了）。<strong>另一条更可靠的路子是蓝调加建筑照明：日落后 15–30 分钟（9/25 约 19:08–19:23，10/22 约 18:26–18:41）</strong>，天空还有色、泛光照明已亮，冷暖对比成立，且此时街上人少。焦段 24–35mm 拍完整立面配前景铺装，16–20mm 贴近仰拍强调钟塔，70–200mm 单独抽塔顶时钟与风向标。<strong>禁三脚架（NPS 免许可条款只覆盖手持器材）</strong>，蓝调请把 ISO 推到 3200–6400、或用围栏石墩当支点。日间此处观光巴士与人群密集，用 1/250 以上快门避免拍到动态模糊的路人。"
          },
          {
            "name": "Independence Square 南侧（唯一受光的一面）",
            "view": [
              39.94838,
              -75.15015
            ],
            "desc": "<strong>要拍「阳光下的独立厅」只有这一面。</strong>南立面法向约 189°，<strong>最佳 11:30–14:30</strong>（9/25 正午 12:52 太阳高度 49°、方位 183°；10/22 为 12:45 / 39° / 175°）。十月因太阳更低，立面受光更立体、砖缝质感更好，<strong>10 月实际优于 9 月</strong>。需过 5th Street 安检才能进 Square，所以这个机位<strong>可以和 open house 连着做</strong>：9:50 被清出楼后不要出安检区，留在 Square 里等到 11:30。35mm 拍立面加草坪，24mm 把 Congress Hall 一起纳入，85mm 拍南门与窗框细节。Square 内游客密度远低于 Chestnut Street，是拍「有人但不乱」的场景的地方。"
          },
          {
            "name": "6th & Chestnut 西南角斜四十五度",
            "view": [
              39.9493,
              -75.15073
            ],
            "desc": "斜角机位能同时交代西翼与钟塔的体量关系，也是唯一能把 Liberty Bell Center 的玻璃盒与 Independence Hall 收进一张竖构图的位置。<strong>时段与正立面同理：阴天或蓝调。</strong>35–50mm 竖幅，把钟塔放在画面上三分之一、玻璃盒的反射带做中景。此处是过街路口，有信号灯与人流，注意不要站到车道里。"
          },
          {
            "name": "Assembly Room 室内（open house 时段）",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于 Independence Hall 建筑体内）。</strong><strong>9:00–9:50 自助时段是唯一能自己选站位、自己控制时间的机会</strong>——10:00 之后的 ranger 团只有 20 分钟且路线固定、全程有人讲话，基本只能在人头缝里抓拍。房间窗户开在南面（朝 Independence Square），所以<strong>9:00 时室内光还很弱、方向偏东南</strong>；现场是深色木饰加绿呢桌布，实测需要 <strong>ISO 3200–6400、f/1.8–2.8、1/60–1/125</strong>，强烈建议带一支 24mm 或 35mm 的 f/1.4–f/1.8 定焦。<strong>禁三脚架、请关闪光灯</strong>。构图上抓两样东西：正前方的 Rising Sun Chair，以及从南窗斜射进来打在木地板上的光带。白平衡把自动关掉、固定在 3200–3800K，否则木色会偏橙。"
          }
        ],
        "access": {
          "book": "<strong>9:00–9:50 的 open house 不需预约、不需票</strong>；10:00 之后的每场导览<strong>必须持定时票</strong>。票在 <strong>recreation.gov</strong> 或电话 1-877-444-6777（10:00–24:00）预订，<strong>每账号最多 10 张</strong>。放票分两批：<strong>① 提前批按 30 天滚动窗口放</strong>（官方举例：9 月 1 日的票在 8 月 3 日放）；<strong>② 次日批在前一天 17:00 放</strong>，先到先得，未订完的票会一直挂到开团时间。<strong>没抢到票怎么办：直接去赶 9:00 open house</strong>，这是官方制度而不是漏洞；或者当天 17:00 盯次日批；或者反复刷 recreation.gov 捡退单（<strong>但票一经预订不退不改</strong>）。持票者须<strong>提前 30 分钟</strong>到安检口，迟到不保证入场。",
          "ticket": "<strong>门票本身免费</strong>，但需票时收 <strong>$1.00／张的手续费</strong>，<strong>Interagency Pass（美国国家公园年票）不覆盖这笔费用</strong>。外景与 Independence Square 完全免费。",
          "hours": "官方原文（nps.gov/inde/planyourvisit/hours.htm，2026 年 8 月 17 日更新）：<strong>「9 am–9:50 am: Open house (no tickets required) / 10 am–4 pm: Tours every 20 minutes (tickets required) / 4:20 pm: Expanded tour (tickets required and not wheelchair accessible)」</strong>。<strong>安检 8:45 开门，闭馆前至少 15 分钟停止安检，团满亦可能提前停</strong>。<strong>秋季无每周固定闭馆日</strong>；全年只在 Thanksgiving、Christmas Day、New Year's Day 闭园。16:20 那场是<strong>加长团、可上二楼</strong>，但无障碍不可达。安检区内<strong>没有洗手间</strong>。",
          "parking": "不建议自驾。最近的公共车库是 <strong>AutoPark at Independence Mall</strong>（5th & Market，<strong>具体费率未能从官方渠道确认</strong>，Center City 车库日上限普遍在 $20–35）。更好的方案是 <strong>SEPTA Market–Frankford Line「5th Street/Independence Hall」站</strong>，出站即到 Independence Mall。",
          "walk": "5th Street 地铁站到 5th Street 安检口约 <strong>250 米 / 3–4 分钟</strong>；安检口到 Chestnut Street 正立面机位需绕行 Independence Square，约 <strong>300 米 / 5 分钟</strong>。"
        },
        "notes": [
          "<strong>安检口在建筑南侧的 5th Street 上（Chestnut 与 Walnut 之间），不在 Chestnut Street 正门。</strong>很多人第一次来会站在 Chestnut Street 正门口找入口，白白损失二十分钟——open house 期间这二十分钟很可能就是能不能进的差别",
          "<strong>三脚架实质不可用</strong>：NPS 的免许可条款只覆盖「hand-carried equipment」，落地三脚架即超出范围；室内跟团环境也没有架设空间",
          "<strong>禁枪械与任何刀具（含小折刀）、禁一切开口食物饮料</strong>（旋盖水瓶可以）。<strong>官方未公布包尺寸上限，园区内也没有寄存柜</strong>，大摄影包有被拒的风险，建议 20L 以内",
          "<strong>正立面秋季不受光这件事请当成前提而不是意外</strong>。把 Chestnut Street 排到阴天或蓝调，把晴天的正午留给 Independence Square 南侧，这是唯一正确的排法",
          "开馆时段无票者 9:50 必须离楼，但<strong>不必离开安检区</strong>——Congress Hall、Old City Hall 与西翼的 Great Essentials Exhibit（《宣言》与《宪法》的早期印本）都在同一个安检区内，<strong>同样不需票</strong>，可以顺路一并拍完",
          "<strong>2026 年 7 月的建国 250 周年活动期间曾多次封闭 Market Street 5th–6th 段与人行道</strong>，这类临时封路在纪念年内仍可能零星出现，出发前刷一下 nps.gov/inde 的 Alerts 页",
          "同一园区内的 <strong>Edgar Allan Poe National Historic Site 因公用设施改造工程闭馆</strong>（截至 nps.gov 8 月 17 日的口径），如原本想串这一站请删掉"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Chestnut_Street_in_front_of_Independence_Hall.jpg",
            "cap": "Chestnut Street 正立面机位视角 · Myotus / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Independence_Hall_008.jpg",
            "cap": "钟塔与正立面（阴天均匀光的效果） · Foolish Productions Photography / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/58/Independence_Hall%2C_Philadelphia_20240528.jpg",
            "cap": "独立厅全景 · 颐园居 / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "museum-american-revolution",
        "n": 7,
        "name": "美国革命博物馆",
        "en": "Museum of the American Revolution",
        "score": 2.5,
        "tldr": "$27 的现代馆，内容极强但摄影价值低：招牌的 Washington 帐篷剧场明确禁止个人拍摄。",
        "tags": [
          {
            "t": "$27 / 线上 $25",
            "c": "paid"
          },
          {
            "t": "招牌展项禁拍",
            "c": "risk"
          },
          {
            "t": "内容而非摄影目的地",
            "c": "risk"
          },
          {
            "t": "票含两天",
            "c": "free"
          }
        ],
        "highlights": [
          "2017 年 4 月 19 日开馆，Robert A.M. Stern Architects 设计的红砖加石灰石外壳，刻意与 Old City 的殖民地风貌接轨。<strong>它是本区唯一的当代馆，也是唯一的高价票。</strong>外观有一个不错的角度在 <strong>3rd & Chestnut 街角</strong>，但主立面朝北偏东、与 Old City 的 9° 偏转一致——<strong>意味着它跟 Independence Hall 一样，正立面秋季基本不受直射光</strong>，晴天正午只有 Chestnut Street 一侧的高层石材边缘有光。",
          "<strong>核心藏品是 George Washington 的司令部帐篷（兼卧室与办公室）</strong>，经 Custis 与 Lee 两家世代保存，1909 年由 W. Herbert Burk 牧师从 Robert E. Lee 之女 Mary Custis Lee 手中购得。织物保护师 Virginia Whelan 花了<strong>逾 500 小时</strong>做稳定处理，帐篷现在架在一个「金属伞加帆布罩」的支撑结构上。",
          "<strong>但对摄影者来说这里有个硬伤：帐篷剧场（二楼 Alan B. Miller Theater，100 座）明确禁止个人拍摄那顶帐篷。</strong>15 分钟的多媒体演出结束时屏幕升起、帐篷只露出约 90 秒，而这 90 秒正是禁拍的。馆方的替代方案是提供官方高分辨率照片下载。剧场座位有限、按场次先到先得，需要在二楼剧场门口排队。",
          "<strong>诚实的结论：这是内容目的地，不是摄影目的地。</strong>常设展是标准的现代博物馆语言——低照度、玻璃展柜、彩色射灯、大量文字面板。玻璃反射与混合色温会让展柜照片很难看；真正可拍的只有几处大尺度场景（一楼的私掠船复原甲板、Oneida Indian Nation 展厅的沉浸式场景）以及中庭楼梯的几何。<strong>如果这一天时间紧，把它删掉换成 Reading Terminal Market 或 City Hall，摄影产出会明显更高。</strong>"
        ],
        "photo": "建筑 <strong>3/5</strong>，室内 <strong>2/5</strong>，风光 <strong>0/5</strong>。低分不是因为馆差，而是因为<strong>最值得拍的那一件明确禁拍、其余是玻璃柜里的低照度展陈</strong>。如果你是为了内容而来，它值 4.5 分；为了照片而来，2.5 分已经是宽容的评价。",
        "shots": [
          {
            "name": "3rd & Chestnut 街角外观",
            "view": [
              39.94837,
              -75.14585
            ],
            "desc": "坐标为 OSM 博物馆节点。<strong>主立面朝北偏东（约 9°），秋季正立面几乎全天不受直射光</strong>，所以跟 Independence Hall 同一套办法：<strong>阴天均匀光，或日落后 15–30 分钟的蓝调加建筑照明</strong>（9/25 约 19:08–19:23，10/22 约 18:26–18:41）。24–35mm 拍街角两个立面的转折，能同时交代红砖与石灰石的材质对比；70–200mm 抽上层的窗序列与檐口石雕。<strong>这一带比 Independence Mall 清静得多，架相机不会被人流推着走。</strong>"
          },
          {
            "name": "室内中庭与大尺度场景展厅",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于博物馆建筑体内）。</strong><strong>可拍的只有三处</strong>：入口中庭的楼梯与天窗几何（24mm 上仰，<strong>上午 10:00–12:00 天窗光最强</strong>）；一楼私掠船复原甲板（35mm，木构与索具在射灯下有戏剧性明暗）；Oneida Indian Nation 沉浸式展厅（35mm，暖色布光）。<strong>其余展柜不建议拍</strong>——玻璃反射加多色温射灯，出来的片子基本不能用。参数：<strong>ISO 3200–6400、f/1.8–2.8、1/50–1/80</strong>，<strong>白平衡固定在 3000–3400K</strong>（展厅以暖射灯为主，自动白平衡会来回跳）。<strong>禁三脚架、禁闪光灯；帐篷剧场内完全禁拍。</strong>带一块小的橡胶遮光罩顶住展柜玻璃是唯一能救展柜照片的办法。"
          }
        ],
        "access": {
          "book": "<strong>建议线上买（便宜 $2 且能选时段）</strong>。现场票按时段发售、先到先得、可能售完。另有 <strong>Any Day 票</strong>（不指定日期时段，$27）。<strong>所有票均含当日与次日两天</strong>。",
          "ticket": "官方价目（amrevmuseum.org/at-the-museum/visit/visit-hours）：<strong>成人 现场 $27 / 线上 $25</strong>；<strong>65 岁以上、学生、教师、军人（均需证件）$21</strong>；<strong>6–17 岁 $14</strong>；<strong>5 岁及以下、会员免费</strong>；ACCESS 卡与 SNAP 受益人<strong>现场免费</strong>。线上另有「两成人加两青少年 $64」的家庭套票。出示 SEPTA Key 卡减 $2；出示 African American Museum in Philadelphia 的票根减 $4。Washington's War Tent 剧场<strong>含在普通门票内，不另收费</strong>。",
          "hours": "官方原文：<strong>「Museum Hours: Daily, 9:30 a.m.–5 p.m.」</strong>，<strong>秋季无每周闭馆日</strong>，只闭 Thanksgiving、Christmas Day、New Year's Day（另 2026 年 9 月 8 日曾闭馆一天，已过）。<strong>最后一个入场时段 15:30。</strong>Cross Keys Café：周日与周一 11:00–15:00，周二至周六 11:00–16:00。<strong>口径不一致：官网的 Plan Your Visit 页仍写着「9:30 a.m.–6 p.m. starting June 13, 2026」，而 Hours & Admission 页与 Tips 页都写 9:30–17:00。以 17:00 为准最保险，但这处矛盾未能从官方渠道澄清。</strong>",
          "parking": "无自有停车场。周边 Old City 有多个商业车库，<strong>费率未能从官方渠道确认</strong>。<strong>SEPTA Market–Frankford Line「2nd Street」站</strong>步行可达。",
          "walk": "2nd Street 地铁站到馆门约 <strong>350 米 / 5 分钟</strong>；从 Independence Hall 走过来约 <strong>450 米 / 6 分钟</strong>。<strong>馆内建议留 2–3 小时（内容量大），但纯拍照 45 分钟就够。</strong>"
        },
        "notes": [
          "<strong>Washington's War Tent 剧场内禁止个人拍摄帐篷</strong>，这是本馆最核心的展项。如果你买票的动机是「拍到那顶帐篷」，请重新考虑",
          "<strong>剧场座位有限、按场次先到先得</strong>，进馆后建议先上二楼排队看这一场，再回头逛常设展",
          "大件行李与大背包会被安检拦下，<strong>馆内寄存条件未能确认</strong>，建议把大包留在住处",
          "<strong>禁三脚架、禁闪光灯</strong>（现代馆通例，官网未逐条列出但现场执行）",
          "<strong>票含当日与次日两天</strong>，如果第一天只拍不看，第二天可以再进来慢慢看展",
          "<strong>本馆为私立机构，不受联邦拨款影响</strong>——万一 NPS 那两处关门，这里是 Old City 唯一还开着的大型室内目的地"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/65/Museum_of_the_American_Revolution_%2853590618560%29.jpg",
            "cap": "3rd & Chestnut 街角外观 · ajay_suresh / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Museum_of_the_American_Revolution_-_Joy_of_Museums_3.jpg",
            "cap": "常设展厅内景（低照度加射灯的典型条件） · GordonMakryllos / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Museum_of_the_American_Revolution.jpg",
            "cap": "博物馆建筑全景 · Frances 84 28 / CC BY-SA 4.0"
          }
        ]
      }
    ]
  },
  {
    "id": "dc-national-mall",
    "name": "Washington DC · National Mall 纪念建筑群",
    "navName": "National Mall",
    "color": "#4da3ff",
    "lead": "这是全美唯一一处「九个世界级拍摄对象挤在 2.5 公里内、全部免费、全部 24 小时开放、全部夜间打灯」的地方，效率高到不讲道理。但 2026 年秋天有两件事必须先知道：<strong>Lincoln Memorial Reflecting Pool 仍在围挡内</strong>（那面著名的倒影水池目前拍不到），而<strong>Tidal Basin 海堤重建工程已于 2026/4/21 全线完工重开</strong>——后者是好消息，网上 2024–2025 年那些「Jefferson Memorial 沿岸被封」的攻略已经全部过期。整个区域的核心是那条东西向中轴线：<strong>实测方位角 89°/269°</strong>，而 <strong>9 月 25 日的日落方位角正好是 269°</strong>——一年里只有春分秋分前后几天，太阳会精准地沿中轴线落进 Lincoln Memorial 背后。",
    "callouts": [
      {
        "type": "warn",
        "title": "Reflecting Pool 仍在围挡内，能否开放不确定",
        "html": "<p>NPS 现行封闭令（2026/8/6 签发）明确：<strong>水池本体、水池两侧步道、以及南北两条草地中带，封闭至 2026 年 9 月 10 日 23:59</strong>。但这已经是该项目第 N 次延期——$1,600 万翻修 6 月完工后随即出现蓝色涂层剥落与藻华，7 月再次放空，<strong>8 月底又新签了一份为期一年、$270 万的水处理设备维修合同</strong>（American Ag Energy）。官方 8 月 28 日的口径是「几周内重开」，但同一批人 7 月说过不会再发新合同。</p><p><strong>请把「9/25–10/22 期间水池有水且可走近」当成运气，不要当成计划。</strong>出发前查 nps.gov/nama 的 Alerts 页与 Reflecting Pool 封闭公告页。即便围挡仍在，隔着栏杆拍 Lincoln Memorial 主体完全不受影响——受影响的只有倒影构图和水池两侧的步道纵深。</p>"
      },
      {
        "type": "good",
        "title": "Tidal Basin 海堤工程已完工，沿岸全线重开",
        "html": "<p>持续近两年、封掉 Jefferson Memorial 与 FDR Memorial 之间约 1,830 米（6,000 英尺）岸线的<strong>Tidal Basin Seawall Reconstruction 已于 2026 年 4 月 21 日剪彩重开</strong>，围挡全部拆除。现在可以绕 Tidal Basin 走完整整一圈，新步道更宽、堤顶抬高，沿线补种了 546 棵树（含 353 株樱花）。</p><p>意味着：<strong>Jefferson Memorial 与 MLK Memorial 的临水机位全部恢复</strong>，包括 Inlet Bridge 到 Japanese Pagoda 那一段。但请注意树是新栽的，<strong>原来 Inlet Bridge 北侧那排著名的拱形老树已经砍掉不复存在</strong>，想复刻 2023 年之前的樱花隧道构图是不可能的。</p>"
      },
      {
        "type": "good",
        "title": "联邦政府关门风险：本窗口内已排除",
        "html": "<p>2026 年 9 月 2 日，H.R. 6500《Continuing Appropriations and Extensions Act, 2027》已签署成法，<strong>为联邦机构提供 FY2027 拨款直至 2026 年 12 月 11 日</strong>。也就是说 10 月 1 日财年切换不会关门，<strong>9/25–10/22 这个窗口被完整覆盖</strong>。</p><p>作为常识仍值得记住：真发生关门时，National Mall 各纪念碑是<strong>露天场地，物理上仍可进入</strong>，但厕所、ranger 讲解、书店、以及 <strong>Washington Monument 内部与 Lincoln Memorial Undercroft 会全部关闭</strong>，垃圾无人清运。12 月 11 日之后的行程需要重新评估。</p>"
      },
      {
        "type": "tip",
        "title": "三脚架：户外随便架，八个「限制区」内绝对不行",
        "html": "<p>NPS 官方 FAQ 原文：「Park visitors documenting a visit to the park are not required to obtain a permit for a tripod; however, tripods are not permitted in restricted areas of the memorials.」<strong>普通游客在户外用三脚架不需要任何许可</strong>，这一点很宽松。</p><p>但以下 <strong>Memorial Restricted Areas 内禁止三脚架、独脚架及任何支撑物</strong>（Superintendent’s Compendium 明列）：Lincoln Memorial 白色大理石台阶以上（含内殿）、Vietnam Veterans Memorial 的 Apex（两墙交汇处）、MLK Memorial 内圈 Stone of Hope、Thomas Jefferson Memorial 外圈立柱以内、Washington Monument 旗阵（circle of flags）以内、WWII Memorial 金星墙正前方、FDR Memorial 全域（另涉版权）、Korean War Veterans Memorial（状态标注为 TBD）。这几处只能手持——本页每个机位都已按此规则给了「架得住」的替代站位。</p>"
      },
      {
        "type": "info",
        "title": "日出日落时刻与中轴线几何（照抄可用）",
        "html": "<ul><li><strong>9 月 25 日</strong>：日出 <strong>06:58（方位 91°）</strong>，日落 <strong>19:00（方位 269°）</strong>；民用曙暮光 06:32 / 19:26，太阳正午 12:59（高度 50.1°）</li><li><strong>10 月 22 日</strong>：日出 <strong>07:24（方位 104°）</strong>，日落 <strong>18:19（方位 256°）</strong>；民用曙暮光 06:57 / 18:46，太阳正午 12:52（高度 39.9°）</li><li>两日期之间线性内插误差在几分钟内。<strong>夏令时到 11 月 1 日才结束，整个窗口都是 EDT，不用换算</strong></li><li><strong>Mall 中轴线（Lincoln Memorial → Washington Monument）实测方位角 89°/269°</strong>（据 OSM 坐标推算）。所以 9/22–9/26 日落几乎精准沿轴线落下，10 月 22 日已偏南 13°，落在 Lincoln Memorial 左后方</li><li>推论：<strong>Lincoln Memorial 正立面朝东，是日出正面光</strong>；<strong>Washington Monument 从西向东拍是日出逆光、从东向西拍是日落逆光</strong></li></ul>"
      }
    ],
    "spots": [
      {
        "id": "reflecting-pool-constitution-gardens",
        "n": 1,
        "name": "倒影池与宪法花园",
        "en": "Lincoln Memorial Reflecting Pool & Constitution Gardens",
        "score": 2.5,
        "tldr": "倒影池目前围挡封闭、重开时间高度不确定；北侧的 Constitution Gardens 池塘完全正常，是本区唯一安静的备胎。",
        "tags": [
          {
            "t": "花园 24 小时免费",
            "c": "free"
          },
          {
            "t": "倒影池围挡中",
            "c": "risk"
          },
          {
            "t": "重开时间未定",
            "c": "risk"
          },
          {
            "t": "花园可作备胎",
            "c": "free"
          }
        ],
        "highlights": [
          "<strong>先说结论：这一条保留为独立条目，不是因为它值得专程去，而是因为你必须知道它现在拍不了。</strong>所有 DC 摄影攻略的封面图——Lincoln Memorial 倒映在 618 米长水池里的那张——<strong>在 2026 年秋天大概率复制不出来</strong>，这个信息本身比机位重要",
          "事情的经过：2026 年上半年启动了一项原报价 $150 万、最终膨胀到 <strong>$1,600 万</strong>的翻修，目标是赶在 7 月 4 日建国 250 周年前完工。<strong>放水后数周内新涂的蓝色底漆开始剥落、藻华大规模爆发</strong>，7 月再次放空。8 月官方首次承认存在「承包商失误」；<strong>8 月下旬又签出一份为期一年、$270 万的水处理设备维修合同</strong>。自 2010 年那次重建算起，这个水池累计花掉约 <strong>$4,990 万</strong>",
          "<strong>现行 NPS 封闭令（2026/8/6 签发）</strong>：水池本体、水池两侧步道、以及南北两条介于池边步道与 Elm Walk 之间的草地中带，<strong>封闭至 2026 年 9 月 10 日 23:59</strong>——但这已是多次延期后的日期",
          "<strong>好消息在北边：Constitution Gardens 完全没有受影响。</strong>这片 1976 年建国 200 周年时建成的 50 英亩园区里有一座不规则形状的池塘，池心的 <strong>Signers Island</strong> 上立着《独立宣言》56 位签署者的签名石。<strong>柳树、水禽、几乎无人</strong>——它是整个 National Mall 上最不像 National Mall 的地方"
        ],
        "photo": "风光 <strong>2.5/5</strong>（若倒影池重开则升至 4.5/5），人像 <strong>3/5</strong>，建筑 <strong>2/5</strong>。现状下只有 Constitution Gardens 池塘可用，画面级别属于「城市公园」而非「国家地标」；给 2.5 分是对当前实际可拍内容的诚实评价。",
        "shots": [
          {
            "name": "Constitution Gardens 池塘南岸（现状下的唯一主力）",
            "desc": "<strong>清晨 06:45–08:00 或日落后 19:00–19:40（9 月下旬）。</strong>池塘不规则、四周垂柳环绕，<strong>清晨无风时水面是全区最平的</strong>（比 Reflecting Pool 更避风）。<strong>核心构图：从南岸向北偏西拍 Signers Island 的柳树倒影</strong>，24–50mm；或从池塘西南角向东，把 Washington Monument 的碑尖放在树冠缺口里，70–200mm 压缩。10 月下旬柳树开始转黄，是本站一年中最好的两周。这里不属于任何限制区，<strong>三脚架完全合法且几乎不会挡到任何人</strong>。坐标为 Constitution Gardens Pond OSM 实体。",
            "park": [
              38.891984,
              -77.043687
            ],
            "view": [
              38.890994,
              -77.042799
            ]
          },
          {
            "name": "Signers Island 签名石",
            "desc": "<strong>阴天全天，或清晨 07:30–09:00。</strong>一座小步桥通往池心岛，岛上 56 位签署者的签名以浅浮雕刻在低矮石块上、<strong>按当年各殖民地的排列顺序散布在草地里</strong>。晴天正午刻痕会完全消失，<strong>需要低角度侧光或阴天的柔光才拍得出字</strong>。50–100mm 拍单块签名石的特写，或 24mm 拍整片石阵配上方柳枝。<strong>这是全 Mall 最冷门的一处，你大概率会独占整座岛。</strong>坐标为 56 Signers 纪念物 OSM 节点。",
            "view": [
              38.891088,
              -77.042869
            ]
          },
          {
            "name": "Reflecting Pool 东端（仅在重开后成立）",
            "desc": "<strong>此机位当前处于封闭围挡内，去了也只能隔栏杆拍。</strong>若出发前确认已重开：<strong>9/25 约 18:40–19:20、10/22 约 17:55–18:35 向西拍</strong>，水面倒映 Lincoln Memorial 与晚霞；<strong>清晨 06:40–07:20 反向向东拍</strong>，倒映 Washington Monument 并且此时水面最平。35–50mm 收全景，70–85mm 压缩池长让建筑变大。<strong>不要装偏振镜——它会把倒影削掉，那正是你来这里的唯一理由。</strong>池边步道不在限制区内，三脚架合法。坐标为 Reflecting Pool OSM 水体实体（池体中段）。",
            "view": [
              38.889359,
              -77.044664
            ]
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>Constitution Gardens：24 小时开放，无限制。</strong><strong>Lincoln Memorial Reflecting Pool：现行封闭令有效期至 2026 年 9 月 10 日 23:59</strong>，范围含水池本体、两侧步道与南北草地中带。<strong>该日期之后是否重开、9/25–10/22 期间的实际状态，未能从官方渠道确认</strong>——官方 8 月底口径是「几周内」，但同一项目已多次跳票，且 8 月下旬刚签出为期一年的维修合同。出发前请查 nps.gov/nama 的 Alerts & Conditions 与 Reflecting Pool 封闭公告页",
          "parking": "<strong>Constitution Ave NW（15th–23rd St）路边表位</strong>离 Constitution Gardens 最近，$2.30/小时，7:00–20:00 收费，3 小时上限，只收卡或 ParkMobile",
          "walk": "Metro <strong>Foggy Bottom–GWU 站</strong>到 Constitution Gardens 池塘约 <strong>1.2 公里 / 15 分钟</strong>；<strong>Federal Triangle 站</strong>约 <strong>1.3 公里 / 16 分钟</strong>。从 Lincoln Memorial 沿 North Elm Walk 走到池塘约 <strong>700 米 / 9 分钟</strong>"
        },
        "notes": [
          "<strong>这条目的第一价值是让你别白跑。</strong>出发当天早上花 30 秒查一次 NPS Alerts 页，比任何机位建议都有用",
          "<strong>即便围挡仍在，隔着栏杆拍 Lincoln Memorial 主体完全没问题</strong>——受影响的只有倒影构图、水池两侧步道的纵深，以及南北草地中带",
          "<strong>Elm Walk（水池南北两侧的榆树林荫道）不在封闭范围内</strong>，仍可通行，10 月下旬榆树转黄时本身就是不错的题材",
          "<strong>Constitution Gardens 池塘边有较多水禽与鹅粪</strong>，趴地低机位前先看清地面",
          "园区西端紧邻 Vietnam Veterans Memorial，东端接 17th St；<strong>夜间这片林地照明稀疏、人极少，不建议单独夜访</strong>，想拍蓝调请在 Constitution Ave 一侧靠近路灯的位置",
          "<strong>不要试图翻越或移动围挡。</strong>2026 年夏天已有多人因破坏 Reflecting Pool 被逮捕起诉，现场执法尺度目前非常严"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Constitution_Gardens_Pond.jpg",
            "cap": "Constitution Gardens 池塘 · Mdy66 / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Washington_Monument_from_Constitution_Gardens_at_sunrise.jpg",
            "cap": "自宪法花园望向方尖碑（日出） · Mdy66 / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Constitution_Gardens%2C_Washington_D.C.%2C_July_2017_01.jpg",
            "cap": "园区柳树与水岸 · MusikAnimal / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "vietnam-veterans-memorial",
        "n": 2,
        "name": "越战阵亡将士纪念碑",
        "en": "Vietnam Veterans Memorial (The Wall)",
        "score": 4.5,
        "tldr": "21 岁本科生 Maya Lin 的黑色花岗岩墙，唯一的正解是拍「反射」而不是拍「墙」；顶点 Apex 禁三脚架。",
        "tags": [
          {
            "t": "24 小时免费",
            "c": "free"
          },
          {
            "t": "夜间打灯",
            "c": "free"
          },
          {
            "t": "Apex 禁三脚架",
            "c": "risk"
          },
          {
            "t": "需要克制",
            "c": "risk"
          }
        ],
        "highlights": [
          "1981 年那场匿名竞赛收到 1,421 份投稿，评审选中的是 <strong>耶鲁大学 21 岁本科生 Maya Lin 的方案</strong>。她把同一个设计交给自己的课程作业，<strong>只拿了 B+</strong>。方案公布后引发全国性争论，反对者称之为「羞耻的黑色伤疤」，最终以在旁边加建 Three Servicemen 铜像作为妥协才得以动工，1982 年 11 月 13 日落成",
          "两道墙各长 246 英尺 9 英寸，用<strong>产自印度 Bangalore 的黑色辉长岩</strong>（gabbro）——选这种石头的唯一理由就是它抛光后能像镜子一样反射。<strong>东臂指向 Washington Monument（方位约 99°），西臂指向 Lincoln Memorial（方位约 224°）</strong>，两墙在最深处相交，交点（Apex）高 10.1 英尺",
          "<strong>58,000 余个名字不按字母排序，而是按阵亡日期排列</strong>：从 Apex 东侧第 1 面板向东走到尽头，再从最西端折回、一路走到 Apex 西侧——<strong>于是战争的第一天与最后一天在同一点相遇</strong>。这是整个设计的核心，也是构图上唯一值得强调的东西",
          "<strong>墙面自西南向东北切入地面，抛光面朝北</strong>，因此<strong>全天大部分时间处于自身阴影中</strong>，光线极其均匀——这对拍反射是天赐条件，对拍「有立体感的建筑」则是灾难。不要试图把这里当建筑拍，它没有立面"
        ],
        "photo": "人文 <strong>5/5</strong>，建筑 <strong>3/5</strong>，风光 <strong>1/5</strong>。「名字 + 参观者倒影 + 天空」的三层叠加是本站唯一成立的画面语言；扣分因为它几乎没有第二种拍法。",
        "shots": [
          {
            "name": "Apex（两墙交汇点）向东臂纵深",
            "desc": "<strong>清晨 07:00–09:00 或阴天全天</strong>。晴天正午后西南方直射光会在抛光面上打出大片死白的镜面眩光，直接毁片。24–35mm 沿墙面切线方向拍<strong>墙体向远处收窄、名字密度递增</strong>的纵深，或 85mm 特写单块面板上的名字与其中的人脸倒影。<strong>关键技巧：把相机贴近墙面（30–50cm）用大光圈，让名字实、倒影虚，或反过来</strong>——两者都对焦清楚反而最难看。<strong>Apex 属 Memorial Restricted Area，三脚架、独脚架禁止，只能手持。</strong>坐标为 Vietnam Veterans Memorial 纪念物 OSM 节点，位于 Apex 附近。",
            "park": [
              38.89054,
              -77.049377
            ],
            "view": [
              38.89098,
              -77.048087
            ]
          },
          {
            "name": "东臂末段：墙内映出 Washington Monument",
            "desc": "<strong>这是本站最有名的一张，也是唯一同时讲清「历史」与「地理」的构图。</strong>东臂正指方尖碑，站在东臂靠外侧的低矮段落，<strong>压低机位让墙面同时收入名字与整根 Washington Monument 的倒影</strong>。<strong>最佳时段 16:00–17:30（10 月下旬）或 17:30–18:40（9 月下旬）</strong>：此时天空亮度降到与墙面反射率匹配，倒影才拍得出来；正午天太亮，倒影会被墙面本身的暗部吃掉。35–50mm。<strong>偏振镜在这里是反作用的，会削掉倒影，别装。</strong>此处已在 Apex 限制区之外，三脚架可用但请让开通道。坐标为东臂步道段（据 OSM 墙体几何推算）。",
            "view": [
              38.8912,
              -77.04684
            ]
          },
          {
            "name": "Three Servicemen 铜像（西南侧林中）",
            "desc": "<strong>日落前 40 分钟</strong>（9/25 约 18:20，10/22 约 17:40）。这组 1984 年加建的铜像位于墙体西南方约 40 米的树丛边缘，<strong>三人的视线朝向墙</strong>——用 70–200mm 从铜像后方越过肩膀拍，让墙作为虚化背景，是唯一能把「妥协产物」重新讲成一句完整叙事的角度。傍晚低角度侧光能勾出铜像表面的绿锈质感。<strong>版权提示：Three Servicemen 的影像版权由 Associated Press 持有，个人游客记录性拍摄无碍，任何商业用途需另行取得授权。</strong>坐标为 OSM 雕塑节点。",
            "view": [
              38.892613,
              -77.049783
            ]
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>24 小时开放</strong>（NPS：outdoor areas open 24 hours a day 7 days a week）。Ranger 值守 9:30–22:00。夜间有地面投射照明，墙面可读，<strong>但夜间灯位很低、反射面会出现明显的灯斑</strong>，夜拍效果远不如清晨",
          "parking": "同 Lincoln Memorial：Henry Bacon Drive NW 与 Constitution Ave NW 路边表位，<strong>$2.30/小时，7:00–20:00 收费，3 小时上限</strong>。20:00 后与 07:00 前免费",
          "walk": "Metro <strong>Foggy Bottom–GWU 站</strong>直线 1.11 公里，实际步行约 <strong>1.3 公里 / 16 分钟</strong>；从 Lincoln Memorial 台阶走过来仅 <strong>250 米 / 4 分钟</strong>"
        },
        "notes": [
          "<strong>Apex（两墙交汇处）是 Memorial Restricted Area，三脚架与独脚架禁止</strong>；两翼较外侧的低矮段落不在限制区内，可用",
          "<strong>这里经常有家属在拓印名字、放置遗物。</strong>把镜头对准正在哭的人是最不该做的事——要拍人，就拍背影、拍手、拍倒影，不要拍脸，不要用闪光灯",
          "每天放在墙脚的遗物会被 NPS 收走归档（已累积逾 40 万件）。<strong>不要移动、摆放或重新构图这些物品</strong>",
          "墙面是抛光石材，<strong>手指印会留在上面且很显眼</strong>，不要为了「找角度」扶墙",
          "路径为缓坡下沉式，无台阶，轮椅可通行；但两侧步道很窄，架三脚架几乎必然挡路，请见缝插针",
          "<strong>版权：Three Servicemen 铜像归 Associated Press，Vietnam Women’s Memorial 铜像归 Eastern National，墙体本身归 Vietnam Veterans Memorial Fund</strong>。个人记录性拍摄不受影响，商业使用需授权"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/28/Vietnam_Veterans_Memorial_Wall-9.jpg",
            "cap": "黑色辉长岩墙面与名字 · Almonroth / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Vietnam_Veterans_Memorial_Wall-3.jpg",
            "cap": "墙体沿地面切入的纵深 · Almonroth / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Vietnam_Memorial_Wall_with_Washington_Monument.jpg",
            "cap": "墙面映出 Washington Monument · David J. Jackson / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "washington-monument",
        "n": 3,
        "name": "华盛顿纪念碑",
        "en": "Washington Monument",
        "score": 4.5,
        "tldr": "外部随便拍，顶层 500 英尺观景台要抢定时票；观景台 17:00 关门，本窗口内永远拍不到日落。",
        "tags": [
          {
            "t": "外部 24 小时免费",
            "c": "free"
          },
          {
            "t": "登顶需定时票",
            "c": "risk"
          },
          {
            "t": "需过安检",
            "c": "risk"
          },
          {
            "t": "10/5 全天闭馆",
            "c": "risk"
          }
        ],
        "highlights": [
          "高 <strong>555 英尺 5⅛ 英寸（169.29 米）</strong>，1848 年动工、1884 年封顶，中间因资金枯竭、Know Nothing 党夺权与南北战争停工 <strong>23 年（1854–1877）</strong>。<strong>约 150 英尺高度处那道清晰的色差就是停工线</strong>——复工后原采石场已无法供货，换了另一处马里兰采石场的大理石，颜色永远对不上。晴天侧光下这道线最明显，是本站最值得拍的细节",
          "<strong>它并不在 L’Enfant 规划的理论中心点上。</strong>白宫南北轴与国会大厦东西轴的交点由 <strong>Jefferson Pier Stone</strong> 标记（就在方尖碑西北约 120 米处的草地上，一块不起眼的小石桩），当年那片地基太软撑不住 8 万吨石头，只好把碑往东南挪。<strong>这块石头本身就是一个绝佳的前景道具</strong>",
          "观景台在 <strong>500 英尺处，四面各有两扇窗共 8 扇</strong>；下一层 490 英尺是博物馆层，从这里搭电梯下行。<strong>电梯单程 70 秒</strong>。内部楼梯（897 级）永久对公众关闭",
          "<strong>关键的坏消息：观景台每天 17:00 关闭。</strong>9/25 日落 19:00、10/22 日落 18:19——<strong>本行程窗口内不存在从顶上拍日落的任何可能</strong>。能拿到的最好光线是 10 月下旬 16:00–16:30 那一场（此时太阳高度约 15–18°，已经明显偏暖）",
          "碑体外部整夜泛光，<strong>顶部还有一对红色航空障碍灯持续闪烁</strong>——拍长曝光时这两点会拖成红色断续线，构图时要么接受它、要么用短快门"
        ],
        "photo": "建筑 <strong>4/5</strong>，风光 <strong>4/5</strong>（登顶后的城市俯瞰），人像 <strong>3.5/5</strong>。外部作为背景元素几乎万能；扣分因为碑体本身是一根没有细节的柱子，而顶层观景台窗户小、玻璃厚且脏，隔窗拍摄的画质天花板很低。",
        "shots": [
          {
            "name": "Jefferson Pier Stone 前景 + 方尖碑（外部主机位）",
            "desc": "<strong>9/25 约 18:30–19:40、10/22 约 17:50–19:00（金光 + 蓝调）。</strong>这块小石桩在碑体西北约 120 米，<strong>16–24mm 超广贴地把它做成大前景、方尖碑竖立于画面上方</strong>，是唯一能给这根「光柱」加上叙事的构图。傍晚太阳在西（269°/256°），从这个位置向东南拍碑体是<strong>顺光偏侧光，大理石会被打成暖橙色</strong>，同时能拍到那道 150 英尺高的停工色差线。<strong>此处在旗阵（circle of flags）之外，三脚架合法。</strong>坐标为 Jefferson Pier Stone OSM 节点。",
            "park": [
              38.889478,
              -77.033387
            ],
            "view": [
              38.889804,
              -77.036545
            ]
          },
          {
            "name": "500 英尺观景台（需票）",
            "desc": "<strong>本窗口内最好的场次是 10 月下旬的 16:00 或 16:30（末班票）。</strong>17:00 闭馆，日落 18:19，<strong>拍不到日落，但 16:30 的低角度阳光已足够暖</strong>；9 月下旬同样时段太阳仍高（日落 19:00），画面会偏平。<strong>窗户小、玻璃厚且有明显反光</strong>：唯一解法是<strong>带一只橡胶遮光罩直接压在玻璃上</strong>，或用外套罩住镜头与玻璃之间的缝隙。24–70mm 足够，广角会把窗框拍进去。<strong>西窗看 Lincoln Memorial 与 Reflecting Pool 轴线（围挡期间会看到明显工地）、南窗看 Tidal Basin 与 Jefferson Memorial、东窗看 Capitol 与 Mall 中央草坪（目前大面积封闭围挡）、北窗看白宫</strong>。三脚架在此毫无意义也不被允许，靠玻璃稳住即可。坐标为纪念碑 OSM 节点。",
            "view": [
              38.889475,
              -77.035243
            ]
          },
          {
            "name": "西侧草坡向东：日出逆光剪影",
            "desc": "<strong>9/25 约 06:45–07:15、10/22 约 07:10–07:45。</strong>9 月底日出方位 91°、几乎在碑体正后方，能拍到<strong>太阳从方尖碑边缘探出的「切边」瞬间</strong>；10 月下旬方位 104°，太阳会偏在碑体右侧约 15°，构图上更从容。70–200mm 从 17th St 一带向东压缩。<strong>提醒：Washington Monument 以东的 Mall 中央草坪（3rd–14th St SW）封闭至 2027 年 1 月 24 日</strong>，围挡与枯黄草皮会出现在长焦背景里，选机位时尽量把地平线压低。坐标为方尖碑西侧草坪（据 OSM 碑体位置向西推算，无独立实体节点）。",
            "view": [
              38.8895,
              -77.0378
            ]
          }
        ],
        "access": {
          "book": "<strong>登顶必须定时票。</strong>recreation.gov 或 877-444-6777。<strong>提前票：参观日前 30 天的上午 10:00 ET 整点放出，每张收 $1.00 不可退手续费</strong>；<strong>另有一批「前一日票」在参观前一天 15:00 ET 放出</strong>（部分官方页面写作「前一日 10:00」，<strong>两种口径同时存在于 NPS 与 recreation.gov 页面，未能确认哪个为准，建议两个时间点都盯</strong>）。<strong>当日免费票在 Washington Monument Lodge（15th St，Madison 与 Jefferson Drive 之间）8:45 起发放</strong>，一人（16 岁以上）最多领 6 张、可指定时段，先到先得。旺季秒光，务必提前注册好账号并预先登录",
          "ticket": "<strong>门票免费</strong>；提前预订收 <strong>$1.00/张</strong> 不可退服务费。当日现场票完全免费",
          "hours": "<strong>纪念碑内部：每日 9:00–17:00。</strong>末班参观时间官方两处口径不一（NPS 基础信息页写 16:30，recreation.gov 写 16:00），<strong>建议按 16:00 规划</strong>。<strong>碑体外部与整片 Washington Monument 草坪 24 小时开放</strong>。<strong>2026 年闭馆日（每月首周一天例行维护）：9 月 10 日、10 月 5 日、11 月 11 日、11 月 26 日、12 月 25 日</strong>——<strong>10 月 5 日（周一）落在本行程窗口内，那天登不了顶</strong>。另外雷暴与大风会临时关闭并作废该时段票",
          "parking": "<strong>Washington Monument Lodge 旁 15th St 与 Jefferson Drive SW 路边表位最近</strong>，$2.30/小时，7:00–20:00 收费，3 小时上限。免费选项仍是 Hains Point（约 520 位），步行 2.5 公里以上",
          "walk": "Metro <strong>Smithsonian 站</strong>出站直线约 620 米，实际步行 <strong>650 米 / 8 分钟</strong>，是全区离地铁最近的一个点。Washington Monument Lodge 到碑体入口约 <strong>170 米 / 3 分钟</strong>"
        },
        "notes": [
          "<strong>入内必过安检</strong>。Superintendent’s Compendium 明列禁带物：<strong>超过 18\"×16\"×8\" 的行李箱、旅行袋或背包；婴儿车；食物（少量密封食品除外）；饮料（水、牛奶、婴儿配方奶需装在透明塑料容器内除外）</strong>；另有一份长长的危险品清单（刀具、工具、三脚架式的钝器不在其中，但螺丝刀、扳手、锤子明确禁止）。<strong>大三脚架很可能因尺寸被拦，别带上去</strong>",
          "<strong>旗阵（circle of flags）以内是 Memorial Restricted Area，三脚架禁止</strong>；旗阵以外的整片草坡随便架",
          "<strong>草坪在结霜、积水或土壤饱和时禁止进入</strong>（Compendium 明文），10 月清晨常有重霜，若见到临时围绳请走铺装路",
          "碑体是 DC 高度限制的参照物，几乎在任何一个 Mall 机位里都会入镜——<strong>把它当构图元素比把它当主体更划算</strong>",
          "登顶后停留时间没有硬性上限，但闭馆前会清场；<strong>如果拿到 16:00 场，实际可用拍摄时间约 40 分钟</strong>",
          "<strong>观景台没有可开启的窗</strong>，无法把镜头伸出去，也没有防眩光贴膜，反光是硬约束"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Washington_Monument_at_sunrise_%2897797%29.jpg",
            "cap": "日出时的方尖碑 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Washington_Monument_evening.jpg",
            "cap": "傍晚泛光下的碑体 · Daniel Schwen / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Washington_October_2016-6.jpg",
            "cap": "十月的方尖碑与旗阵 · Alvesgaspar / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "wwii-memorial",
        "n": 4,
        "name": "二战纪念碑",
        "en": "National World War II Memorial",
        "score": 4,
        "tldr": "喷泉水池 + 56 根石柱构成 Mall 上最好的对称构图，也是全区唯一能同时框进方尖碑与林肯堂的位置。",
        "tags": [
          {
            "t": "24 小时免费",
            "c": "free"
          },
          {
            "t": "夜间水景打灯",
            "c": "free"
          },
          {
            "t": "金星墙前禁三脚架",
            "c": "risk"
          },
          {
            "t": "白天人极多",
            "c": "risk"
          }
        ],
        "highlights": [
          "Friedrich St. Florian 设计，2004 年 4 月 29 日落成，位于 Reflecting Pool 东端原 Rainbow Pool 的位置。<strong>56 根花岗岩立柱代表二战期间的 48 个州加哥伦比亚特区与 7 个领地</strong>，柱间以青铜绳索相连，象征各州的联结",
          "南北两端各有一座 <strong>43 英尺高的凯旋门</strong>，分别标注 ATLANTIC 与 PACIFIC，门内四只青铜鹰共托一顶胜利花环。<strong>Atlantic 在北、Pacific 在南</strong>，这个方位对判断光线很有用：<strong>清晨 Pacific 拱门的东侧受光、傍晚 Atlantic 拱门的西侧受光</strong>",
          "西侧的 <strong>Freedom Wall 上镶着 4,048 颗金星，每颗代表 100 名阵亡美军</strong>，合计 404,800 人。墙前铭文只有一句：「Here we mark the price of freedom.」这面墙正前方是 NPS 明列的限制区",
          "两处不显眼的地方刻着 <strong>「Kilroy Was Here」涂鸦</strong>——那个探头看墙的秃头小人是二战美军最著名的都市传说，设计者把它藏进了纪念碑里。<strong>分别在 Atlantic 与 Pacific 拱门附近的封闭铁门后侧</strong>，需要蹲下来找",
          "<strong>这是全 Mall 唯一一个「站在中轴线上，一次收进 Washington Monument 与 Lincoln Memorial」的点位</strong>。缺点是它太受欢迎了：白天几乎不可能拍到没有人的画面"
        ],
        "photo": "建筑 <strong>4/5</strong>，夜景 <strong>4.5/5</strong>，人像 <strong>3/5</strong>，风光 <strong>3/5</strong>。对称几何加喷泉水面加夜间打灯，出片率很高；扣分因人流密度全区第一，且构图选择相对单一。",
        "shots": [
          {
            "name": "Rainbow Pool 东侧中轴：向西框住 Lincoln Memorial",
            "desc": "<strong>9 月下旬这是本页最强的一张。9/25 日落 19:00、方位角 269°，而 Mall 中轴线方位角 89°/269°——太阳会精准地沿轴线落进 Lincoln Memorial 背后。</strong>这个对齐一年只在春分秋分前后几天成立，<strong>9/22–9/26 是本窗口内唯一的机会，10/22 已偏南 13°</strong>。站水池正东端中线，<strong>24–35mm 横构图，让喷泉、水面、Lincoln Memorial 与落日排在一条直线上</strong>；70–200mm 则可以把太阳压得很大、正好卡在柱廊上方。<strong>直视落日请用实时取景不要用光学取景器。</strong>此处在金星墙限制区之外，三脚架可用。坐标为 Rainbow Pool OSM 实体。",
            "park": [
              38.88925,
              -77.0385
            ],
            "view": [
              38.889403,
              -77.040515
            ]
          },
          {
            "name": "水池西侧向东：Washington Monument 日出逆光",
            "desc": "<strong>9/25 约 06:40–07:20、10/22 约 07:05–07:45。</strong>日出方位 91°（9 月底）几乎正对轴线，<strong>太阳会从 Washington Monument 正后方升起</strong>；10 月下旬偏到 104°，方尖碑会偏在太阳左侧，反而更好构图（不用死磕正逆光）。16–24mm 低机位贴近水面，让喷泉水花做前景。<strong>此时段最大的红利是没有人</strong>——07:00 前这里基本空场，白天几乎不可能。带渐变灰减光镜压天空，或包围曝光 3 张合成。坐标为 Freedom Wall 前水池西端（OSM 节点）。",
            "view": [
              38.889396,
              -77.040984
            ]
          },
          {
            "name": "Pacific / Atlantic 拱门内向外框景",
            "desc": "<strong>日落前 30 分钟至蓝调结束</strong>（9/25 约 18:30–19:40，10/22 约 17:50–19:00）。站在拱门正下方向外拍，<strong>用拱门的方形开口把 Washington Monument 或 Lincoln Memorial 框进去</strong>，是本站最省力的一个「框中框」。24mm，机位压到齐胸高，让拱顶的四只青铜鹰进入画面上缘。夜间拱门内壁被暖光打亮、外面天空是冷蓝，<strong>色温反差本身就是内容</strong>。坐标为 WWII Memorial OSM 实体节点（拱门附近，推算）。",
            "view": [
              38.889424,
              -77.040308
            ]
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>24 小时开放</strong>。Ranger 值守 9:30–22:00。<strong>喷泉的运行时段官网未明示</strong>，实务上春秋两季白天与前半夜运行、深夜与冬季停机排空，<strong>未能从官方渠道确认 9–10 月的具体停机钟点</strong>——想拍喷泉请别把凌晨 03:00 当成机会",
          "parking": "<strong>17th St NW 沿线与 Constitution Ave NW（15th–23rd St）路边表位最近</strong>，$2.30/小时，7:00–20:00 收费，3 小时上限。20:00 后免费",
          "walk": "Metro <strong>Smithsonian 站（Blue/Orange/Silver）</strong>直线约 1.06 公里，实际步行约 <strong>1.1 公里 / 14 分钟</strong>；<strong>Federal Triangle 站</strong>亦可，距离相近"
        },
        "notes": [
          "<strong>Freedom Wall（金星墙）正前方是 NPS 明列的 Memorial Restricted Area，三脚架禁止</strong>；水池外圈、拱门下方与东侧广场不在限制区内",
          "<strong>National Mall 中央草坪（3rd St SW 至 14th St SW）自 2026 年 9 月 1 日起封闭至 2027 年 1 月 24 日做草皮修复</strong>，另有两块中央草坪自 9 月 16 日起加入封闭。这一段在 Washington Monument 以东，<strong>不影响 WWII Memorial 本体</strong>，但会影响你从更东侧回望时的前景，且沿线有连续围挡",
          "喷泉水花在有风时会飘到 5–8 米外，<strong>低机位贴水面拍时前镜片几分钟就会花</strong>，带擦镜布与遮光罩",
          "这里是旅行团、Honor Flight 老兵团与毕业旅行的必到点，<strong>10:00–16:00 人流密度全 Mall 最高</strong>；想要干净画面只有 07:00 前与 21:00 后两个窗口",
          "水池边缘是抛光花岗岩，湿滑；夜间三脚架架在池沿有滑落风险，请架在铺装地面上",
          "找 Kilroy 涂鸦时不要翻越或撬动铁门，它就在门后可视范围内"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/96/Pacific_Arch_side_of_National_World_War_II_Memorial_20240601.jpg",
            "cap": "Pacific 拱门一侧 · 颐园居 / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Atlantic_Arch_side_of_National_World_War_II_Memorial_20240601.jpg",
            "cap": "Atlantic 拱门与立柱环 · 颐园居 / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/c9/World_War_II_Monument_and_Lincoln_Memorial.jpg",
            "cap": "自纪念碑向西望 Lincoln Memorial · Kurt Kaiser / CC0"
          }
        ]
      },
      {
        "id": "lincoln-memorial",
        "n": 5,
        "name": "林肯纪念堂",
        "en": "Lincoln Memorial",
        "score": 5,
        "tldr": "全 DC 最强夜景，正立面朝东是日出正面光；2026 年 6 月新开的地下 Undercroft 博物馆需定时票，别和主殿混为一谈。",
        "tags": [
          {
            "t": "24 小时免费",
            "c": "free"
          },
          {
            "t": "整夜打灯",
            "c": "free"
          },
          {
            "t": "台阶以上禁三脚架",
            "c": "risk"
          },
          {
            "t": "Undercroft 需定时票",
            "c": "risk"
          }
        ],
        "highlights": [
          "Henry Bacon 设计，1922 年 5 月 30 日落成。<strong>外圈 36 根多立克柱代表林肯去世时联邦的 36 个州</strong>，柱身有意做了微凸（entasis）并整体向内倾斜，用来抵消远观时柱列外张的视错觉——这意味着<strong>你用超广角贴近拍柱廊时，几何本身就是「不直」的，后期强行拉直反而会拍得不对</strong>",
          "殿内 Daniel Chester French 的坐像高 19 英尺，由 Piccirilli 兄弟用 <strong>28 块乔治亚白色大理石拼成</strong>，原设计只有 10 英尺，是因为在这个尺度的殿堂里显得太小才放大了近一倍。南墙第二次就职演说铭文中的 <strong>FUTURE 曾被误刻成 EUTURE</strong>，补刻的下横笔画至今看得出来",
          "<strong>东侧台阶自顶层平台往下数第 18 级</strong>，正中嵌着一块刻字石板：「I HAVE A DREAM / MARTIN LUTHER KING, JR. / THE MARCH ON WASHINGTON FOR JOBS AND FREEDOM / AUGUST 28, 1963」。2003 年 8 月 22 日（演讲 40 周年）揭幕，Coretta Scott King 到场。<strong>石板齐平地面、字未上色，晴天几乎看不见</strong>——老办法是往刻痕里倒一点水，字立刻显形，这也是唯一能拍出可读效果的方法",
          "<strong>2026 年 6 月 25 日，尘封 104 年的地下空间 Undercroft 首次对公众开放</strong>：$6,800 万工程、15,000 平方英尺、<strong>122 根支撑整座纪念堂的混凝土拱柱</strong>，Burgum 称之为「一座大教堂」。这是本区域<strong>今年唯一的全新拍摄对象</strong>，但需要定时票 + 机场级安检，且与参观主殿完全是两回事",
          "正立面朝正东（法线约 89°），<strong>意味着日出时整面柱廊被正面暖光打亮，而日落时它是纯逆光剪影</strong>。大多数人只在傍晚来这里，因此清晨的正面光机位反而常常空无一人"
        ],
        "photo": "建筑 <strong>5/5</strong>，夜景 <strong>5/5</strong>，人像 <strong>4/5</strong>，风光 <strong>3.5/5</strong>。整夜泛光照明加 24 小时开放，是全美最容易出片的夜间建筑；扣分只因 Reflecting Pool 围挡期间少了倒影这一半的价值。",
        "shots": [
          {
            "name": "正东台阶下方仰拍柱廊（夜景招牌）",
            "desc": "<strong>9/25 约 19:20–19:50、10/22 约 18:40–19:10 是唯一窗口</strong>——日落后 20–50 分钟，泛光灯已开而天空仍有深蓝底色。<strong>纪念堂整夜亮灯，没有「等灯亮」这回事，要等的是天空暗到与灯光同亮度的那 20 分钟。</strong>曝光难点在于殿内林肯像被打得极亮、柱廊阴影极深，<strong>实测光比常超过 9 EV</strong>：按殿内高光测光会让柱廊全黑，按柱廊测光则林肯直接过曝。解法是 <strong>f/8、ISO 100、包围 ±2EV 拍 5 张做 HDR</strong>，或干脆放弃殿内细节拍纯剪影柱列。16–24mm 竖构图。<strong>这个位置在白色大理石台阶以下，三脚架合法</strong>，再往上一级就不行了。",
            "park": [
              38.889478,
              -77.049802
            ],
            "view": [
              38.889213,
              -77.050172
            ]
          },
          {
            "name": "「I Have a Dream」铭文（顶层平台下 18 级）",
            "desc": "<strong>清晨 07:10–08:30 最好</strong>：日出方位 91°（9 月底）/104°（10 月底）几乎正对台阶，低角度侧光会在刻痕里投出阴影，<strong>这是唯一不靠倒水就能让字显形的时段</strong>。正午顶光下刻痕完全消失，别去。35–50mm 俯拍取正方形构图，或 24mm 低角度把铭文做前景、Reflecting Pool 与 Washington Monument 做背景（围挡期间背景会有临时护栏，压低机位到贴近地面可以把护栏藏在铭文后方）。<strong>此处已在白色大理石台阶范围内，三脚架禁止，只能手持</strong>；早晨光线充足，1/125s、f/5.6、ISO 200 足够。坐标为 OSM 实体节点。",
            "view": [
              38.889277,
              -77.049802
            ]
          },
          {
            "name": "西北侧 Arts of Peace / Memorial Bridge 方向的侧背景",
            "desc": "<strong>日落后蓝调 + 夜景通用</strong>。从 Lincoln Memorial 西北角外侧拍侧立面，好处是<strong>完全避开东侧广场的人流</strong>，且可以把 Arts of Peace 与 Arts of War 的镀金铜马组进画面。这四座雕塑刚做完重镀金修复、脚手架已拆除，<strong>金箔是全新的，夜间打灯下反光极强</strong>，按金色部分测光会让白色大理石严重欠曝，建议对雕塑与建筑分别曝光后合成。<strong>注意：Arts of War 与 Arts of Peace 周边的全部草坪与草皮方格封闭至 2026 年 9 月 30 日</strong>（人行道与通往 Memorial Bridge 的步道不受影响，道路不封）。10 月起草坪应恢复，但请以现场围挡为准。70–200mm 压缩。坐标为 Arts of Peace 雕塑 OSM 节点。",
            "view": [
              38.889791,
              -77.052179
            ]
          },
          {
            "name": "Undercroft 地下拱柱阵（新，需定时票）",
            "desc": "<strong>无自然光，全天任意时段等效</strong>，取决于你的票。122 根混凝土拱柱构成的重复网格是典型的「无限纵深」题材：<strong>14–24mm 超广，站在柱列轴线上让透视灭点落在画面正中</strong>，或用 35mm 拍单柱的混凝土肌理与钢筋锈迹。展陈照明偏暖且很暗，<strong>预期 ISO 3200–6400、f/2.8、1/40s，务必带大光圈镜头并开机身防抖</strong>。<strong>安检区内禁止拍照录像，过了安检进入展区后才允许拍</strong>。不要指望架三脚架。排队入口在 Vietnam Veterans Memorial 售票亭附近，需提前 5 分钟到。无独立 OSM 实体节点，坐标取自 Undercroft 入口位置（推算）。",
            "view": [
              38.88915,
              -77.0506
            ]
          }
        ],
        "access": {
          "book": "<strong>主殿与台阶：不需预约。</strong><strong>Undercroft 博物馆：必须定时票</strong>（2 岁以上全员需票）。提前票 recreation.gov 或 877-444-6777，<strong>可提前 30 天预订，每日 11:00 ET 放出 30 天后那一天的库存</strong>，每单最多 6 张，票免费但收 <strong>$1.00/单</strong> 手续费；另有一部分提前票在<strong>参观前一日 16:00 ET</strong> 释出。当日免费票在 <strong>Korean War Veterans Memorial 售票亭（Daniel Chester French Drive）8:45 起</strong>先到先得，一人（16 岁以上）最多领 6 张，周末与旺季会提前排队",
          "ticket": "<strong>全部免费</strong>（Undercroft 提前票仅收 $1 手续费）",
          "hours": "NPS 官方原文：「The public may visit the sites of National Mall and Memorial Parks <strong>24 hours per day</strong>. Rangers are on duty at the sites to answer questions from <strong>9:30 a.m. to 10:00 p.m. daily</strong>.」Superintendent’s Compendium 另载：「Outdoor areas within the park are open 24 hours a day 7 days a week unless otherwise noted.」<strong>主殿与台阶全天候无门禁，凌晨可进</strong>。<strong>Undercroft 每日 9:00–21:00（3–10 月）</strong>，末班票为闭馆前 1 小时、闭馆前 45 分钟停止入场，每月固定闭馆一天做例行维护（具体日期未在官网列出，<strong>未能确认 9–10 月的闭馆日</strong>，建议订票时看 recreation.gov 库存）",
          "parking": "<strong>没有专用停车场。</strong>最近的路边表位在 Parkway Drive NW、Henry Bacon Drive NW 与 Constitution Ave NW（15th–23rd St），<strong>$2.30/小时，每日 7:00–20:00 收费（12/25 除外），3 小时封顶且同一位置不可续费</strong>，只收卡或 ParkMobile，不收现金硬币。<strong>拍日出与夜景的人有个便宜可占：20:00 后与 07:00 前表位不收费</strong>。免费车位只有 Hains Point（East Potomac Park）约 520 个，离这里 3 公里以上。<strong>注意 Ohio Drive SW 在 Independence Ave 与 West Basin Drive 之间因 Potomac River Tunnel 工程封闭至 2030 年，Ohio Drive 上的 B、C 号停车场同样关闭至 2030 年</strong>",
          "walk": "<strong>Metro Foggy Bottom–GWU 站（Blue/Orange/Silver）</strong>是最近的地铁，直线 1.28 公里，实际步行约 <strong>1.5 公里 / 18–20 分钟</strong>。<strong>DC Circulator 的 National Mall 线已于 2024 年 12 月 31 日永久停运且无替代班车</strong>，别再照着旧攻略等那趟红色巴士。Capital Bikeshare 在 Henry Bacon Dr 与 Lincoln Memorial Circle 路口有站"
        },
        "notes": [
          "<strong>白色大理石台阶以上（含内殿）属 Memorial Restricted Area，三脚架、独脚架、任何支撑物一律禁止。</strong>台阶以下的广场与 Reflecting Pool 步道则完全允许",
          "<strong>Reflecting Pool 本体、两侧步道、南北草地中带目前围挡封闭</strong>（现行公告到 2026/9/10，多次延期，9/25–10/22 期间状态<strong>未能确认</strong>）。围挡不影响从东侧远距离拍纪念堂主体，只影响倒影与近水步道",
          "<strong>Arts of War 与 Arts of Peace 周边草坪封闭至 2026 年 9 月 30 日</strong>；人行道与 Memorial Bridge 步道正常，无道路封闭",
          "殿内林肯像前的地面反光强、且常年有人排队合影，<strong>想拍无人的坐像只能凌晨 05:00–06:30 去</strong>，那个时段确实空无一人，且泛光灯仍亮",
          "<strong>Undercroft 需过机场式安检</strong>，安检区内禁止拍摄。大件背包与三脚架请预判会被拦",
          "本区域夜间有 US Park Police 巡逻、人流也不少，独自带器材拍夜景相对安全；但 <strong>Constitution Ave 以北与 Rock Creek Parkway 沿线夜间空旷，不建议单独绕行</strong>",
          "台阶大理石雨后极滑，且清晨常有露水；带三脚架在台阶下架设时注意不要挡住轮椅坡道"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Lincoln_Memorial_Night_Focus.jpg",
            "cap": "夜间泛光下的柱廊与林肯像 · Ramakrishna Gundra / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/76/Columns_of_the_Lincoln_Memorial_Against_a_Clear_Sky.jpg",
            "cap": "仰视 36 根多立克柱 · Brett Guessford / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/2026-06-26_Lincoln_Memorial_Undercroft_entrance_11-29-11.jpg",
            "cap": "2026 年 6 月新开放的 Undercroft 入口 · G. Edward Johnson / CC BY 4.0"
          }
        ]
      },
      {
        "id": "korean-war-veterans-memorial",
        "n": 6,
        "name": "朝鲜战争老兵纪念碑",
        "en": "Korean War Veterans Memorial",
        "score": 4,
        "tldr": "19 座不锈钢士兵在雾气与低光下最像鬼魂，清晨与夜间是仅有的两个正确时段；2022 年新增的 Wall of Remembrance 改变了动线。",
        "tags": [
          {
            "t": "24 小时免费",
            "c": "free"
          },
          {
            "t": "夜间打灯极强",
            "c": "free"
          },
          {
            "t": "三脚架政策 TBD",
            "c": "risk"
          },
          {
            "t": "正午基本废片",
            "c": "risk"
          }
        ],
        "highlights": [
          "Frank Gaylord 的 <strong>19 座不锈钢雕像，每座高约 7 英尺 3 英寸</strong>，构成一支在稻田与灌木间行进的巡逻小队：<strong>14 名陆军、3 名陆战队、1 名海军、1 名空军</strong>，身披雨披、表情各异、彼此不对视。1995 年 7 月 27 日（停战协定 42 周年）落成",
          "右侧 164 英尺长的花岗岩壁上，Louis Nelson 用喷砂工艺蚀刻了 <strong>约 2,500 张取自档案照片的面孔</strong>——不是装饰，是真实的人。<strong>19 座雕像映在这面抛光壁上就变成 38 座</strong>，通常被解读为呼应三八线与 38 个月的战期",
          "<strong>2022 年 7 月 27 日增建的 Wall of Remembrance 是本站近年最大的变化</strong>：环绕 Pool of Remembrance 的低矮弧墙上刻着 <strong>36,634 名美军与 7,174 名 KATUSA</strong> 阵亡者姓名。施工同时对已 25 岁的原纪念碑做了整体翻修，<strong>目前状态良好，无脚手架、无围挡</strong>",
          "不锈钢是这里全部技术难点的来源：<strong>它既不吸光也不是纯镜面，晴天正午会同时出现死白高光与漆黑阴影</strong>，任何测光模式都救不回来。这也是为什么这个地方在阴天、雨天、雾天、雪天的照片质量远高于晴天"
        ],
        "photo": "人文 <strong>4.5/5</strong>，建筑 <strong>3.5/5</strong>，风光 <strong>2/5</strong>。夜间地灯从下方打亮雨披与面孔，是全 Mall 最具戏剧性的一组雕塑；扣分因为晴天正午几乎不可用。",
        "shots": [
          {
            "name": "雕像阵列内侧步道（低角度贴地）",
            "desc": "<strong>9/25 约 19:20–20:00、10/22 约 18:40–19:20（蓝调 + 地灯）</strong>是第一选择，<strong>清晨 06:40–07:30（日出前的柔散射光）</strong>是第二选择。地灯从雕像脚下向上打，会在雨披褶皱与面部投出强烈的下方阴影——<strong>这是本站的招牌质感，白天完全复制不出来</strong>。24–35mm 蹲到膝盖高度贴近前排士兵，让雕像在画面里显得比实际更高；<strong>85mm 单拍某一张脸，用大光圈把后面 18 个虚成一片钢灰</strong>，是更强的一张。<strong>NPS 把本纪念碑的限制区状态标为「TBD」，三脚架政策不明确</strong>——实务上户外步道架设未见拦阻，但请做好被要求收起的准备，优先靠高 ISO（3200–6400）与机身防抖手持。坐标为雕像群 OSM 节点（据 19 座雕像节点取中，推算）。",
            "park": [
              38.8872,
              -77.0484
            ],
            "view": [
              38.8878,
              -77.0477
            ]
          },
          {
            "name": "花岗岩壁前：19 尊变 38 尊",
            "desc": "<strong>阴天全天最佳；晴天限 07:00–08:30 与 17:30 之后</strong>。站在雕像与抛光花岗岩壁之间，<strong>用 35mm 同时收入实体雕像与壁上的倒影</strong>，让画面里出现两支队伍。壁上蚀刻的 2,500 张面孔在斜射光下会显形、在顶光下会消失，<strong>所以时段的选择直接决定这张照片有没有内容</strong>。想拍蚀刻面孔的特写用 50–100mm，贴近到 1 米内、让光线与壁面成小夹角。坐标为纪念碑 OSM 节点。",
            "view": [
              38.887839,
              -77.047749
            ]
          },
          {
            "name": "Pool of Remembrance 与 Wall of Remembrance",
            "desc": "<strong>清晨 06:45–07:20 无风时段是唯一能拍到镜面倒影的窗口</strong>，过了 08:00 风起水面就碎了。24mm 从水池南侧向北拍，让 <strong>Wall of Remembrance 的弧线与水面构成一个闭合的环</strong>，远处树线作为上边框。<strong>这是本站唯一一个「风光式」构图</strong>，其余机位都是雕塑与人文。带 ND 减光镜可以做 2–4 秒慢门把水面彻底抹平。坐标为 Pool of Remembrance OSM 节点。",
            "view": [
              38.88773,
              -77.047273
            ]
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>24 小时开放</strong>。Ranger 值守 9:30–22:00。<strong>注意：本纪念碑旁 Daniel Chester French Drive 上的售票亭自 8:45 起发放 Lincoln Memorial Undercroft 当日票</strong>，清晨 08:30–09:30 这里会有一条排队人龙，拍摄请避开这个时段的东侧步道",
          "parking": "Daniel French Drive SW 与 Independence Ave SW 路边表位，<strong>$2.30/小时，7:00–20:00 收费</strong>；West Basin Drive SW 亦有表位。20:00 后免费",
          "walk": "Metro <strong>Foggy Bottom–GWU 站</strong>步行约 <strong>1.6 公里 / 20 分钟</strong>；从 Lincoln Memorial 走过来 <strong>350 米 / 5 分钟</strong>，从 MLK Memorial 走过来约 <strong>500 米 / 7 分钟</strong>"
        },
        "notes": [
          "<strong>NPS 官方限制区清单里，本纪念碑的状态标注为「TBD」</strong>——意思是三脚架是否允许尚未定论，<strong>未能从官方渠道取得明确口径</strong>。建议以手持为主要方案",
          "<strong>不要走进雕像之间的碎石与灌木地面。</strong>那是作品的一部分（模拟朝鲜的稻田地形），也是最容易被 ranger 制止的行为",
          "晴天正午（12:00–14:00，10 月下旬太阳高度仍有 40°）不锈钢直接反射天光，<strong>动态范围会超出任何单张曝光能力，别浪费时间</strong>",
          "<strong>版权归 Korean War Veterans Memorial Foundation 持有</strong>，个人记录性拍摄不受影响，商业用途需授权",
          "每年 9–10 月这里常有老兵团体与献花仪式（如 2026 年 9 月 6 日就有一场社区洗墙活动），<strong>遇到仪式请退到外圈，不要越过绳线</strong>",
          "雕像基座周围地面不平且有低矮地灯，夜间容易绊倒；三脚架腿别压在灯罩上"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Korean_War_Veterans_Memorial_Pool_of_Remembrance%2C_July_2017_01.jpg",
            "cap": "Pool of Remembrance 全景 · MusikAnimal / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Aerial_view_of_Korean_War_Veterans_Memorial.jpg",
            "cap": "19 座雕像的三角阵列俯瞰 · Carol M. Highsmith / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Korean_War_Veterans_Memorial_Without_Soldiers.jpg",
            "cap": "花岗岩壁与蚀刻面孔 · U.S. Navy / 公有领域"
          }
        ]
      },
      {
        "id": "mlk-memorial",
        "n": 7,
        "name": "马丁·路德·金纪念碑",
        "en": "Martin Luther King, Jr. Memorial",
        "score": 4,
        "tldr": "30 英尺高的 Stone of Hope 面朝东南，只有清晨的侧光能打亮那张脸；内圈禁三脚架且涉及肖像版权。",
        "tags": [
          {
            "t": "24 小时免费",
            "c": "free"
          },
          {
            "t": "内圈禁三脚架",
            "c": "risk"
          },
          {
            "t": "肖像涉版权",
            "c": "risk"
          },
          {
            "t": "下午全在阴面",
            "c": "risk"
          }
        ],
        "highlights": [
          "2011 年落成（原定 8 月 28 日的揭幕仪式因飓风 Irene 推迟到 10 月 16 日）。整个构思来自「I Have a Dream」里的一句话：<strong>「Out of the mountain of despair, a stone of hope.」</strong>所以入口是被劈开的 <strong>Mountain of Despair</strong>，从中被推出的那一块就是 <strong>Stone of Hope</strong>，<strong>King 的半身像从石头正面浮出，双臂交抱、眉头微蹙，尚未完全脱离石体</strong>",
          "<strong>Stone of Hope 高 30 英尺，由中国雕塑家雷宜锌（Lei Yixin）雕刻</strong>，石材为花岗岩。选用中国雕塑家在当年引发过争议，但雷最终完成了这件全 Mall 尺度最大的单体人像",
          "纪念碑的门牌号是 <strong>1964 Independence Ave SW</strong>——这个号码是特意申请的，指向 1964 年《民权法案》。同理，MLK Memorial 与 Lincoln Memorial 之间的连线穿过 Tidal Basin，<strong>King 的视线朝东南、正对 Jefferson Memorial（实测方位约 129°）</strong>，整个位置是被精确安排过的",
          "环绕的花岗岩弧墙上刻着 14 段 King 的语录（原有的一句「drum major」引言因断章取义争议已于 2013 年铲除重整）。<strong>引文墙的版权与 King 的肖像、文字一并由 King 家族通过 Intellectual Properties Management 管理</strong>，这是 NPS 官方明列需要版权授权的少数几处之一"
        ],
        "photo": "人像/雕塑 <strong>4.5/5</strong>，建筑 <strong>3.5/5</strong>，风光 <strong>2.5/5</strong>。一张 30 英尺高、有明确视线方向的脸，是全 Mall 最上镜的雕塑；扣分因为它朝东南，<strong>过了中午整张脸就进入自身阴影，下午来等于白来</strong>。",
        "shots": [
          {
            "name": "Stone of Hope 正面仰拍（唯一正确时段：清晨）",
            "desc": "<strong>9/25 约 07:10–09:00、10/22 约 07:40–09:30。这是硬约束。</strong>King 像的面部朝向约 129°（东南），日出方位 91°（9 月底）/104°（10 月底）——<strong>清晨阳光从左前方以 25–38° 的夹角斜射面部，是唯一能同时打出鼻梁、眉弓与嘴角阴影的角度</strong>。中午顶光会让眼窝全黑；<strong>下午整张脸进入阴影，只剩一块灰石头</strong>。35–50mm 从正面偏左仰拍，或 85–135mm 只取头部与交抱的双臂。<strong>内圈 Stone of Hope 周边是 Memorial Restricted Area，三脚架、独脚架禁止</strong>，清晨光线足够手持。坐标为 Stone of Hope OSM 实体。",
            "park": [
              38.886367,
              -77.045214
            ],
            "view": [
              38.886294,
              -77.044343
            ]
          },
          {
            "name": "穿过 Mountain of Despair 裂口的框景",
            "desc": "<strong>清晨 07:00–08:30 或日落后蓝调</strong>。从北侧入口（Independence Ave 一侧）进入，<strong>站在被劈开的两块巨石之间，用那道裂缝把 Stone of Hope 与背后的 Tidal Basin 一起框住</strong>——这是设计者预设的观看序列，也是把「绝望之山」与「希望之石」讲成一句话的唯一构图。24–35mm，机位居中，注意两侧石壁与中间亮部的光比很大，<strong>建议对亮部测光让石壁走向剪影</strong>，不要试图把两边都提亮。此处在内圈限制区之外，三脚架可用。坐标为 MLK Memorial OSM 实体（入口轴线上，推算）。",
            "view": [
              38.886089,
              -77.044038
            ]
          },
          {
            "name": "自 Tidal Basin 岸边回望（含水面）",
            "desc": "<strong>日落后 19:15–19:50（9 月下旬）/ 18:35–19:10（10 月下旬）</strong>。海堤工程完工后这一段临水步道已全线重开。<strong>站在东南侧水边，把 Stone of Hope 的侧影、水面倒影与远处 Jefferson Memorial 的圆顶排在一起</strong>。此时 King 像已被地灯打亮，天空仍有蓝调余色，<strong>这是本站唯一能拍到「有环境、有水、有第二个地标」的机位</strong>。35–70mm。需三脚架做 2–8 秒曝光把水面抹平；此处在限制区之外，合法。坐标为 Tidal Basin 西北岸步道（据 OSM 岸线推算）。",
            "view": [
              38.8859,
              -77.0435
            ]
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>24 小时开放</strong>。Ranger 值守 9:30–22:00。书店（West Basin Drive 一侧）为白天营业，<strong>具体钟点官网未列，未能确认</strong>",
          "parking": "<strong>West Basin Drive SW 与 Independence Ave SW 路边表位</strong>，$2.30/小时，7:00–20:00 收费。<strong>注意 Ohio Drive SW 在 Independence Ave 与 West Basin Drive 之间封闭至 2030 年</strong>（Potomac River Tunnel 工程），导航可能仍给出旧路线，请按现场指示绕行",
          "walk": "Metro <strong>Smithsonian 站</strong>直线 1.43 公里，实际步行约 <strong>1.7 公里 / 21 分钟</strong>；从 Lincoln Memorial 走过来约 <strong>800 米 / 10 分钟</strong>，从 FDR Memorial 北端过来约 <strong>450 米 / 6 分钟</strong>"
        },
        "notes": [
          "<strong>内圈 Stone of Hope 周边是 NPS 明列的 Memorial Restricted Area，三脚架与任何支撑物禁止。</strong>外圈引文墙一带与临水步道不在限制区内",
          "<strong>King 的肖像与文字版权由 King 家族（Intellectual Properties Management）持有</strong>，NPS 官方页面明确列出。个人记录性拍摄不受影响，<strong>任何商业用途需另行取得授权</strong>",
          "<strong>下午与傍晚整张脸都在阴影里</strong>。如果你的行程只能安排下午来，就放弃正面像，改拍引文墙的字与石材质感，或直接等到天黑拍地灯版本",
          "雕像基座正下方常有人献花与摆放物品，构图时注意避开，也不要移动",
          "这一带（West Potomac Park）夜间照明较暗、人流明显少于 Lincoln 一侧，<strong>独自带器材夜拍建议结伴，并把车停在 West Basin Drive 而不是更偏的位置</strong>",
          "Tidal Basin 海堤翻新后步道抬高、边缘无护栏，<strong>夜间贴水面架三脚架要留意脚下</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Martin_Luther_King%2C_Jr_Memorial%2C_Washington_D_C_%2843627795282%29.jpg",
            "cap": "Stone of Hope 正面 · CBP Photography / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/02/Martin_Luther_King%2C_Jr._Memorial_10_-_July_2012.JPG",
            "cap": "自 Mountain of Despair 裂口望向雕像 · Another Believer / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/08/The_Martin_Luther_King_Jr._Memorial_and_the_Lincoln_Memorial_During_the_Spring_in_Washington%2C_DC._%28c5e18b8e-1d80-4001-9e0e-416e0e24bdb8%29.jpg",
            "cap": "MLK 与 Lincoln Memorial 的轴线关系 · Rachel Hendrix / 公有领域"
          }
        ]
      },
      {
        "id": "fdr-memorial",
        "n": 8,
        "name": "罗斯福纪念公园",
        "en": "Franklin Delano Roosevelt Memorial",
        "score": 4,
        "tldr": "四个露天「房间」串成 800 米叙事线，全区唯一的水景与质感题材；但全域禁三脚架且雕塑另有版权。",
        "tags": [
          {
            "t": "24 小时免费",
            "c": "free"
          },
          {
            "t": "全域禁三脚架",
            "c": "risk"
          },
          {
            "t": "雕塑涉版权",
            "c": "risk"
          },
          {
            "t": "水景或停机",
            "c": "risk"
          }
        ],
        "highlights": [
          "景观建筑师 Lawrence Halprin 设计，1997 年 5 月 2 日落成，占地 7.5 英亩。<strong>它不是一座「碑」，而是四个依次展开的露天房间，各对应罗斯福的一届任期</strong>，游客沿一条约 800 米的红色 Dakota 花岗岩墙动线走完 1933–1945 这十二年",
          "<strong>四个房间的水景是有语法的</strong>：第一室水流平静（大萧条前）；第二室水从高处跌落成阶（新政）；第三室水流被打乱成互相冲撞的乱流（二战）；第四室水面重新归于平静（罗斯福逝世与和平）。<strong>这是全 Mall 唯一一处「水的形态本身就是内容」的地方</strong>，也是本站的核心拍摄对象",
          "雕塑阵容罕见地豪华且分属不同作者：Neil Estern 的罗斯福与 Fala 犬、Eleanor 像；George Segal 的 <strong>Depression Breadline（排队领救济的五个人）</strong>与 Fireside Chat；Leonard Baskin 的 Funeral Cortege 浮雕；Robert Graham 的 Prologue。<strong>Breadline 那五个青铜人是全 DC 最好的人像摄影道具</strong>——真人尺寸、可并肩站立",
          "<strong>入口处那尊坐轮椅的罗斯福像不是原设计。</strong>1997 年落成时全场没有一处显示他残疾，残障权益团体强烈抗议，<strong>2001 年 1 月才在前厅补建了这尊 Robert Graham 的轮椅像</strong>。知道这段以后再去拍它，画面的意义完全不同",
          "<strong>全园被大树覆盖，是常年柔散射光环境。</strong>这意味着它<strong>不依赖日出日落</strong>，反而是本页唯一一个「阴天来比晴天来好」的地点"
        ],
        "photo": "雕塑 <strong>4.5/5</strong>，人像 <strong>4/5</strong>，建筑 <strong>3.5/5</strong>，风光 <strong>2.5/5</strong>。水、粗糙花岗岩、青铜三种质感的对照极强；<strong>扣分主要因为全域禁三脚架——想拍慢门丝滑水流在这里基本不可行</strong>。",
        "shots": [
          {
            "name": "第三室瀑布（乱流墙）",
            "desc": "<strong>阴天或多云全天最佳；晴天限 08:00–10:00 与 16:00 之后。</strong>巨石被刻意堆成无序状态、水从各方向对冲，是四个房间里视觉冲击最强的一处。<strong>难点在于禁三脚架：想要 1/2–2 秒的丝滑水流，只能把相机压在花岗岩台面上或用豆袋</strong>（豆袋不构成「支撑结构」，实务上不被拦，但这是经验判断而非官方许可，<strong>未能从官方渠道确认豆袋是否被视为违规</strong>）。手持方案：<strong>1/8s、f/11、ISO 100、开机身防抖连拍 10 张挑一张</strong>，这个快门速度已足够让水流出现拉丝而石头仍清晰。24–50mm。坐标为 FDR Memorial OSM 实体（园区中段，推算）。",
            "park": [
              38.884719,
              -77.045324
            ],
            "view": [
              38.88331,
              -77.04285
            ]
          },
          {
            "name": "Depression Breadline（第二室）",
            "desc": "<strong>清晨 07:30–09:00 或阴天。</strong>George Segal 这五个真人尺寸的青铜人排成一列等待救济，<strong>是全 DC 唯一一处你可以站进队伍里成为「第六个人」的地方</strong>——这也是这里最经典的人像玩法：让被摄者站在队尾、同样低头，用 35mm 侧后方拍全景。纯雕塑拍法用 85–135mm 只取一张脸与帽檐，<strong>青铜表面的绿锈与斑驳在柔光下细节最好，直射硬光会拍成一团黑</strong>。<strong>版权提示：Breadline 版权归 George and Helen Segal Foundation</strong>，商业用途需授权。坐标为 FDR Memorial 第二室（据园区 OSM 范围推算，无独立实体节点）。",
            "view": [
              38.8837,
              -77.0433
            ]
          },
          {
            "name": "Japanese Pagoda / Tidal Basin 岸边（园区东北出口外）",
            "desc": "<strong>日出前 20 分钟到日出后 30 分钟</strong>（9/25 约 06:40–07:30，10/22 约 07:05–07:55）。走出 FDR 园区东北侧就是 Tidal Basin 西南岸，<strong>海堤工程 2026 年 4 月完工后这一段已全线重开、步道加宽</strong>。这里是拍 Jefferson Memorial 日出的黄金位置（详见 Jefferson 条目），同时那座 1957 年日本赠送的石塔（Japanese Pagoda）本身就是极好的前景。24–35mm 把石塔放在画面左下、水面与远处圆顶在右上。<strong>此处已在 FDR 限制区之外，三脚架合法。</strong>坐标为 Japanese Pagoda OSM 节点。",
            "view": [
              38.882645,
              -77.04129
            ]
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>24 小时开放</strong>。Ranger 值守 9:30–22:00。<strong>水景（四室瀑布）在冬季会放空停机，秋季通常运行</strong>，但 <strong>NPS 未公布具体的季节性开关机日期，未能确认 10 月下旬是否仍在运行</strong>——若水景停机，本条目一大半价值会消失，建议出发当天先看 nps.gov/frde 的 Alerts",
          "parking": "<strong>West Basin Drive SW 路边表位</strong>最近，$2.30/小时，7:00–20:00 收费。<strong>Ohio Drive SW 在 Independence Ave 与 West Basin Drive 之间封闭至 2030 年</strong>，沿 Ohio Drive 的 B、C 号停车场同样关闭至 2030 年；A 号场与 Buckeye Drive 的 D 号场仍开放（表位 6 小时上限）",
          "walk": "<strong>这是全区离地铁最远的一个点。</strong>Metro Smithsonian 站直线 1.40 公里，实际步行约 <strong>1.9 公里 / 24 分钟</strong>。从 MLK Memorial 走过来约 <strong>450 米 / 6 分钟</strong>。园区本身南北纵深约 800 米，<strong>从入口走到出口再走回来要留 45–60 分钟</strong>"
        },
        "notes": [
          "<strong>FDR Memorial 全域是 NPS 明列的限制区，三脚架禁止</strong>——这一条对水景摄影是致命的，请提前把「手持能拍到什么」想清楚",
          "<strong>雕塑版权分属五组不同权利人</strong>：Neil Estern（罗斯福与 Fala、Eleanor、第一次就职、社会保障）、George Segal（Breadline、Fireside Chat、农民夫妇）、Leonard Baskin（送葬浮雕）、Robert Graham（轮椅像与 Prologue）、John Benson（全园铭文刻字）。个人记录性拍摄不受影响，<strong>商业用途须逐一取得授权</strong>",
          "花岗岩地面在水景旁常年潮湿有青苔，<strong>穿防滑鞋</strong>；靠近瀑布时镜头会挂水雾，随身带擦镜布",
          "园区树冠茂密，<strong>10 月下旬入园后实际可用光比 Mall 上其他地方暗 1–1.5 EV</strong>，手持请把 ISO 上限设到 3200 起",
          "四个房间之间有导览牌但动线不算直觉，<strong>务必从北侧（MLK 方向）入口按顺序走</strong>，反着走整个叙事就散了",
          "入夜后园区照明偏暗且遮蔽多，<strong>不建议单独夜访</strong>；要拍夜景优先选靠 Tidal Basin 岸边的开阔段"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/FDR-Memorial-Waterfall-3.jpg",
            "cap": "第三室的乱流瀑布 · Carol M. Highsmith / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/FDR_Memorial_on_an_October_Afternoon.jpg",
            "cap": "十月午后的花岗岩墙动线 · Lauren Bradish / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/29/FDRMemorial.jpg",
            "cap": "罗斯福与 Fala 犬铜像 · Codera23 / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "jefferson-memorial",
        "n": 9,
        "name": "杰斐逊纪念堂",
        "en": "Thomas Jefferson Memorial & Tidal Basin",
        "score": 5,
        "tldr": "隔 Tidal Basin 拍日出是 DC 第一名的风光机位；海堤工程已完工全线重开，10 月下旬太阳几乎从圆顶正后方升起。",
        "tags": [
          {
            "t": "24 小时免费",
            "c": "free"
          },
          {
            "t": "沿岸已全线重开",
            "c": "free"
          },
          {
            "t": "柱廊内禁三脚架",
            "c": "risk"
          },
          {
            "t": "日出是硬约束",
            "c": "risk"
          }
        ],
        "highlights": [
          "John Russell Pope 设计，仿罗马 Pantheon 的圆形穹顶柱廊，<strong>1943 年 4 月 13 日（杰斐逊 200 岁生日）落成</strong>。当年这个「过时的古典主义」设计遭现代主义者猛烈批评，<strong>为腾地砍掉樱花树时还有女性抗议者把自己拴在树上</strong>。殿内 Rudulph Evans 的 19 英尺青铜立像迟至 1947 年才安装——战时青铜被管制，先用石膏像顶了四年",
          "<strong>主入口朝正北、对着白宫</strong>。这个朝向决定了它的全部光线逻辑：<strong>正午前后北立面完全处于阴影中，只有清晨与傍晚的低角度侧光能把柱廊打出立体感</strong>",
          "<strong>Tidal Basin Seawall Reconstruction 已于 2026 年 4 月 21 日完工重开</strong>，此前封闭近两年的 Jefferson–FDR 之间约 1,830 米岸线全部恢复通行，新步道更宽、堤顶抬高、沿线补种 546 棵树（含 353 株樱花）。<strong>2024–2025 年那些「Jefferson 沿岸被封、拍不了倒影」的攻略已经全部过期</strong>",
          "<strong>几何上的好消息：从 Tidal Basin 西南岸的 Japanese Pagoda 望向纪念堂，方位角约 108°</strong>（据 OSM 坐标推算）；<strong>而 10 月 22 日的日出方位角是 104°、10 月 31 日是 108°</strong>。也就是说<strong>整个 10 月下旬，太阳几乎就从 Jefferson Memorial 的圆顶正后方升起</strong>；再考虑到实际地平线是 East Potomac Park 的树线（真正见到太阳时方位会再南偏几度），对齐只会更好",
          "<strong>对照：9 月 25 日日出方位 91°，偏在圆顶左侧 17°</strong>——此时不是背后出日，而是从左侧斜射，会把北立面的柱子一根根打亮。两种光都好，但它们是完全不同的两张照片"
        ],
        "photo": "风光 <strong>5/5</strong>，建筑 <strong>4.5/5</strong>，人像 <strong>3/5</strong>。全 DC 唯一一个把「地标 + 大面积水体 + 正确的日出方位」三者凑齐的机位，且现在障碍全部清除。",
        "shots": [
          {
            "name": "Japanese Pagoda 一带西南岸（10 月下旬首选）",
            "desc": "<strong>10/22 抵达时间 06:45，日出 07:24；建议 06:55 前架好机位。</strong>此处到圆顶距离约 430 米，方位约 108°，<strong>10 月下旬太阳基本从圆顶后方升起——先是穹顶轮廓被逆光勾出金边，几分钟后太阳越过树线、在水面上拉出一条直指镜头的金色光路</strong>。<strong>16–24mm 竖构图把光路做成引导线</strong>；70–200mm 则可以在太阳刚探头的那 90 秒里把日轮压得与圆顶等大。<strong>务必带 ND 渐变镜或做包围曝光</strong>，太阳入画时光比超过 12 EV。此处在柱廊限制区之外，三脚架合法。坐标为 Japanese Pagoda OSM 节点。",
            "park": [
              38.884719,
              -77.045324
            ],
            "view": [
              38.882645,
              -77.04129
            ]
          },
          {
            "name": "西北岸 Japanese Lantern 一带（9 月下旬首选）",
            "desc": "<strong>9/25 抵达 06:25，日出 06:58，民用曙暮光 06:32 开始。</strong>此处到圆顶距离约 710 米、方位约 144°（东南），<strong>日出方位 91° 落在纪念堂左侧约 53°——不是逆光而是左前侧光，会把北立面的爱奥尼柱廊一根根打成暖白色，圆顶顶部先亮、下部后亮</strong>。<strong>这是「拍建筑」而非「拍太阳」的机位，出片更稳、失败率更低。</strong>35–70mm 横构图，让圆顶居中、水面占下方三分之一；<strong>日出前 20 分钟水面最平，倒影最完整，日出后 15 分钟内风起就散了</strong>。三脚架 + 2–4 秒曝光。坐标为 Japanese Lantern OSM 节点。",
            "view": [
              38.886563,
              -77.041371
            ]
          },
          {
            "name": "Kutz Bridge 北岸（含桥体前景）",
            "desc": "<strong>日出后 07:30–08:30 或日落后蓝调 19:15–19:50（9 月下旬）。</strong>此处到圆顶约 665 米、方位约 158°（南偏东），<strong>是唯一能把 Independence Ave 的 Kutz Bridge 桥拱与纪念堂叠在一起的位置</strong>，桥体可以做画面左侧的横向支撑。24–50mm。蓝调时纪念堂被地灯打成暖金、水面倒影完整，是本站夜间版本的最佳解。<strong>桥面有车流，长曝光会拉出车灯光轨，可以利用也可以避开（选桥下岸边机位即可）。</strong>坐标为 Kutz Bridge OSM 实体。",
            "view": [
              38.886942,
              -77.039482
            ]
          },
          {
            "name": "殿内立像与穹顶（不需早起的备选）",
            "desc": "<strong>全天可拍，但 08:00 前与 20:00 后才没有人。</strong>19 英尺的杰斐逊青铜立像与穹顶藻井，用 14–24mm 从像脚下贴近仰拍，<strong>让穹顶的同心圆与立像的垂直线形成对冲</strong>。殿内四壁刻着《独立宣言》与其他四段文本，50mm 拍局部铭文的凿痕质感。<strong>「外圈立柱以内」是 NPS 明列的 Memorial Restricted Area，三脚架、独脚架禁止</strong>——殿内偏暗，请上 ISO 1600–3200 配大光圈手持。坐标为 Thomas Jefferson 立像 OSM 节点。",
            "view": [
              38.881387,
              -77.036559
            ]
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>24 小时开放</strong>（NPS：outdoor areas open 24 hours a day 7 days a week）。Ranger 值守 9:30–22:00。<strong>殿内不设门，凌晨与深夜同样可进</strong>，整夜打灯",
          "parking": "<strong>Tidal Basin 停车场（Maine Ave SW）与 East Basin Drive SW 路边表位最近</strong>，$2.30/小时，7:00–20:00 收费。<strong>拍日出的实际优势：06:00 到场时还没开始计费，07:00 才起表</strong>。免费选项 Hains Point（East Potomac Park）约 520 位，从那里步行到纪念堂约 1.2 公里；<strong>注意 2025 年 9 月 1 日起 Ohio Drive SW 自 Buckeye Drive 至高尔夫球场入口新增约 110 个咪表位</strong>，免费区比旧攻略里写的更小",
          "walk": "Metro <strong>Smithsonian 站</strong>直线 1.07 公里，实际步行约 <strong>1.4 公里 / 18 分钟</strong>；<strong>L’Enfant Plaza 站</strong>距离相近。绕 Tidal Basin 走完整整一圈约 <strong>3.2 公里 / 45 分钟</strong>（现已全线贯通）"
        },
        "notes": [
          "<strong>「外圈立柱以内」是 Memorial Restricted Area，三脚架禁止</strong>；台阶下方、环湖步道与整个 Tidal Basin 沿岸完全允许",
          "<strong>Tidal Basin 海堤工程已完工（2026/4/21 重开），目前无任何围挡</strong>。但请注意<strong>新栽的树很矮</strong>，Inlet Bridge 北侧原来那排拱形老树已在施工期砍除，沿岸的遮挡与前景关系与旧照片完全不同",
          "<strong>Tidal Basin 是潮汐水体</strong>，水位一天两涨两落，高潮位时步道边缘会更贴近水面、倒影更完整，低潮位时会露出堤基。想拍最好的倒影就挑高潮位 + 无风的清晨",
          "日出机位在西南岸与西北岸，<strong>这两段夜间照明很暗、离最近的路边停车 300–500 米</strong>，摸黑走过去请带头灯，并建议结伴",
          "这里是全 DC 拍日出人最多的点，<strong>樱花季会挤到无法立足，但 9–10 月通常只有个位数摄影师</strong>，提前 20 分钟到就能占到中线位置",
          "殿内地面为抛光大理石，反光强；<strong>清晨低角度阳光会从北门直射进来在地面拉出长条光斑</strong>，这是殿内唯一有戏剧性的几分钟，值得专门等"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Jefferson_Memorial_Washington_April_2017_002.jpg",
            "cap": "隔 Tidal Basin 望向圆顶 · King of Hearts / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/50/Jefferson_Memorial_as_Seen_From_Across_the_Tidal_Basin_-_Flickr_-_John_Brighenti.jpg",
            "cap": "水面倒影与柱廊 · John Brighenti / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/13/Jefferson_Memorial_At_Dusk_1.jpg",
            "cap": "蓝调时分的纪念堂 · Joe Ravi / CC BY-SA 3.0"
          }
        ]
      }
    ]
  },
  {
    "id": "dc-museums",
    "name": "Washington DC · 博物馆群与 Penn Quarter",
    "navName": "博物馆群",
    "color": "#4da3ff",
    "lead": "这一区是整个 DC 行程里<strong>免费程度最高、室内建筑质量最好、但政策变化最快</strong>的一段。八个点位里六个完全免费且不需预约，真正需要抢票的只有 NMAAHC 和 Ford's Theatre。本次研究推翻了三条流传很广的旧说法：<strong>（1）National Archives Rotunda 的摄影禁令已经废止</strong>，现在官方明确「鼓励」无闪光拍摄；<strong>（2）联邦停摆风险在本次旅行窗口内已经解除</strong>，H.R. 6500 已于 2026 年 9 月 2 日签署，拨款覆盖到 12 月 11 日；<strong>（3）Smithsonian Castle 今年夏天确实开放过，但 9 月 7 日重新关闭</strong>，late September 到访会正好错过两三周。真正的坏消息在别处：<strong>White House 北侧的 Lafayette Park、南侧的 Ellipse、以及 Pennsylvania Avenue 步行广场目前全部处于 Secret Service 要求的临时封闭状态</strong>，按月续期、已连续数月，这是本区唯一会实质性毁掉机位的因素。",
    "callouts": [
      {
        "type": "warn",
        "title": "White House 周边park区目前封闭，按月续期",
        "html": "<p>NPS 于 <strong>2026 年 9 月 1 日</strong>签发 Record of Determination，应 Secret Service 要求关闭 <strong>Ellipse、Lafayette Park、Sherman Park、First Division Monument、E Street 及其人行道、以及 White House Sidewalk（即 Pennsylvania Avenue 步行广场）</strong>，期限 <strong>9 月 1 日 00:00 至 9 月 22 日 23:59</strong>。这是 8 月 1–31 日同类封闭令的续期，而 8 月那一轮之前，Lafayette Park 自 <strong>2026 年 1 月</strong>起就已被临时钢围栏圈住做修复工程。</p><p>ACLU 在公开意见中明确指出：<strong>这道临时围栏的存废是「一个月一决定」</strong>。换句话说，9 月 22 日到期不代表会恢复开放——过去八个月的记录是连续续期。<strong>请按「Lafayette Park 内部、Ellipse、Pennsylvania Avenue 广场都进不去」来做计划</strong>，能开放算意外收获。目前仍开放的是外围人行道：H Street NW 南侧、15th Street、17th Street、Constitution Avenue。另据报道 <strong>Ellipse 被整体围起来作为 Marine One 的临时起降场</strong>。</p><p>更长期的背景：Secret Service 与 NPS 正在推进一份 79 页方案，要给 Lafayette Square 加装<strong>永久性钢围栏</strong>并在 15th–17th 街之间的 Pennsylvania Avenue 两端设大门。National Capital Planning Commission 已于 <strong>2026 年 9 月 3 日</strong>听取意见并接受了多个版本，最终表决在未来几个月，施工目标是 2027 年动工。出发前请务必查一次官方封闭页：<a href=\"https://www.nps.gov/whho/learn/management/temporary-area-closures.htm\" target=\"_blank\" rel=\"noopener\">nps.gov/whho 临时封闭公告</a>。</p>"
      },
      {
        "type": "warn",
        "title": "Smithsonian Castle 9 月 7 日后重新关闭",
        "html": "<p>Castle 自 <strong>2023 年 2 月</strong>起因五年期、约 <strong>5.3 亿美元</strong>的现代化改造关闭。为配合美国建国 250 周年，施工<strong>暂停</strong>并让建筑在 <strong>2026 年 5 月 22 日至 9 月 7 日</strong>（Labor Day）临时对外开放，一层部分区域可进，每日 8:30–17:30。<strong>9 月 7 日之后重新关闭</strong>——WTOP 的说法是「关到 2027 年」，Washington Examiner 引述 Smithsonian 施工方说整个项目还要「四到五年」才全部完成。</p><p>也就是说，如果你在 <strong>late September 到 late October</strong> 之间到访，<strong>会正好错过这个窗口两到三周</strong>。旁边的 <strong>Arts and Industries Building</strong> 同样只开放到 9 月 7 日（展览「Voices and Votes」），一起关闭。</p><p>好消息是 <strong>Enid A. Haupt Garden 全程正常开放</strong>，每日 dawn–dusk，Castle 两侧的人行通道也保持通行。所以这个点位从「进楼看 Great Hall」降级成「拍红砂岩外立面加花园」，但没有完全消失。详见该景点的红色卡片。</p>"
      },
      {
        "type": "good",
        "title": "联邦停摆风险：本次行程窗口内已解除",
        "html": "<p>本区八个点位里有六个会在拨款中断时直接关门（全部 Smithsonian、National Gallery of Art、National Archives Museum、以及 NPS 属下的 Ford's Theatre），所以这件事必须先查清。<strong>结论是：不用担心。</strong></p><p><strong>Continuing Appropriations and Extensions Act, 2027（H.R. 6500）</strong>已经生效：Senate 于 8 月 8 日以 90–6 通过，House 于 9 月 1 日以 370–48 通过，总统于 <strong>2026 年 9 月 2 日签署成法</strong>。该法案按 FY2026 水平继续拨款至<strong>2026 年 12 月 11 日</strong>（或相应拨款法案生效之日，以较早者为准）。FY2027 于 10 月 1 日开始，因此<strong>整个 late September 至 late October 窗口都在 CR 覆盖范围内</strong>，10 月 1 日不会发生停摆。法案原文：<a href=\"https://www.congress.gov/bill/119th-congress/house-bill/6500\" target=\"_blank\" rel=\"noopener\">congress.gov H.R.6500</a>。</p><p>需要留意的只有两点。第一，<strong>下一个悬崖是 12 月 11 日</strong>，在你离开之后；截至 9 月初 12 个 FY2027 拨款法案<strong>一个都没有两院通过</strong>，年底大概率还要吵，但与本次无关。第二，这不是理论风险——<strong>2025 年 10 月的停摆就真的把 Smithsonian 全部关掉了</strong>，Wikimedia Commons 上还留着 2025 年 10 月 15 日 Haupt Garden 挂着闭园牌的照片。</p><p>万一真的出现意外停摆，八个点位中<strong>唯一确定还开的是 The People's House</strong>——它由 White House Historical Association 私营，不靠联邦拨款。这就是停摆情形下的唯一室内备胎，请记住这一条。</p>"
      },
      {
        "type": "info",
        "title": "摄影政策：三脚架全区禁止，但 Archives 的禁令已废除",
        "html": "<p><strong>最重要的一条更正：National Archives Rotunda 现在可以拍照。</strong>2010 年 1 月 NARA 确实发过联邦公报规则（36 CFR 1280.52(c)），自 2010 年 2 月 25 日起禁止在包括 Rotunda 在内的所有展区拍照、摄像。但 <strong>NARA 现行官方政策已经反转</strong>，原文是：「Non-flash photography, filming, and videotaping for personal use is <em>encouraged</em> in all public areas of the National Archives unless otherwise posted.」禁止项只剩<strong>闪光灯、补光设备、自拍杆、独脚架</strong>。来源：<a href=\"https://visit.archives.gov/visit/tips-guidelines/photography-policy\" target=\"_blank\" rel=\"noopener\">visit.archives.gov 摄影政策页</a>。别再照着旧攻略把相机留在酒店。</p><p>其余各馆口径：</p><ul><li><strong>全部 Smithsonian（NMAAHC / NPG / SAAM / NMNH / Castle）</strong>：非商业用途的静态与视频拍摄允许，除另有告示；<strong>三脚架、独脚架、自拍杆一律禁止，无例外</strong>。媒体要用三脚架必须事先获得该馆 Public Affairs 批准并由馆员全程陪同。</li><li><strong>NMAAHC 额外限制</strong>：官方 FAQ 明确写「Photography of fine art is prohibited」（艺术品展区禁拍）。另有多方来源指出 <strong>Emmett Till 纪念展区完全禁止拍照</strong>——这一条<strong>未能在 si.edu 官方页面上找到明文</strong>，但现场有告示，请一律遵守。</li><li><strong>National Gallery of Art</strong>：常设展区个人用途拍摄允许，而且官方 FAQ <strong>连闪光灯都明确允许</strong>（「including flash」），这在大馆里非常罕见；特展与另有标示处禁止。<strong>三脚架与独脚架禁止。</strong>即便允许闪光，也请不要用——对画作无益，对旁人不礼貌。</li><li><strong>Ford's Theatre</strong>：剧场与博物馆允许手持拍摄，<strong>但 President's Box 内部长期封闭</strong>（保护文物），只能从外面拍。</li></ul><p>结论：<strong>这一整区请当成「无三脚架区」来准备器材</strong>。带一支 f/1.4–f/2.8 的广角、把 ISO 上限放到 6400、开机身防抖，比带脚架实用得多。</p>"
      },
      {
        "type": "tip",
        "title": "日出日落钟点与安检包尺寸",
        "html": "<p><strong>Washington DC 太阳数据（本区所有机位共用）：</strong></p><ul><li><strong>9 月 25 日</strong>：日出 <strong>06:58</strong>（方位 91°，近正东）、日落 <strong>19:00</strong>（方位 269°，近正西）；民用晨光始 06:32、民用暮光终 19:26；太阳正午 12:59，最大高度角 <strong>50.1°</strong>。</li><li><strong>10 月 22 日</strong>：日出 <strong>07:23–07:25</strong>、日落 <strong>18:18–18:21</strong>（不同数据源差约 2 分钟）；民用晨光始 06:57、民用暮光终 18:47；太阳正午 12:52，最大高度角约 <strong>40°</strong>。</li><li>换算成计划口径：<strong>10 月下旬比 9 月下旬日落早了整整 40 分钟</strong>，而各馆闭馆时间不变（多数 17:00–17:30）。这意味着 <strong>10 月下旬「出馆即黄金时段」，9 月下旬出馆后还要等一个多小时</strong>。两个月份的行程节奏完全不同，别照抄。</li></ul><p><strong>安检与包：</strong>Smithsonian 各馆现在都要过安检。NMAAHC、NPG、SAAM、NMNH <strong>必须走金属探测门</strong>（无法通过者由保安用手持探测棒人工检查），包一律手检或过 X 光。禁带清单包括<strong>三脚架、独脚架、自拍杆、剪刀、喷雾罐、工具、食品饮料</strong>。NMNH 官方说法是「类似机场安检，只是不用脱鞋解皮带」。</p><p><strong>National Archives 的包限制是本区最严也最具体的：每人只准带一个包，尺寸不得超过 17 × 26 英寸（43 × 66 厘米）</strong>。一个装了 24–70 加 70–200 的双肩摄影包通常没问题，登机箱级别的会被拦。NGA 则要求双肩包在展厅内必须寄存或改为手提／前抱。</p>"
      }
    ],
    "spots": [
      {
        "id": "dc-whitehouse",
        "n": 1,
        "name": "白宫外景 + The People's House",
        "en": "White House Exterior + The People's House",
        "score": 2.5,
        "tldr": "北侧 Lafayette Park、南侧 Ellipse、Pennsylvania Ave 广场目前全部封闭；The People's House 是唯一可靠的替代。",
        "tags": [
          {
            "t": "park区封闭中",
            "c": "risk"
          },
          {
            "t": "按月续期",
            "c": "risk"
          },
          {
            "t": "入内几无可能",
            "c": "risk"
          },
          {
            "t": "TPH 免费",
            "c": "free"
          }
        ],
        "highlights": [
          "<strong>先把最重要的事说清楚：本条目的三个主要外景机位目前都进不去。</strong>NPS 于 2026 年 9 月 1 日签发的 Record of Determination，应 Secret Service 要求关闭 <strong>Lafayette Park、Ellipse、Sherman Park、First Division Monument、E Street 及其人行道，以及 White House Sidewalk</strong>（即 Pennsylvania Avenue 步行广场），期限至 <strong>9 月 22 日 23:59</strong>。这是 8 月同类命令的续期，而 Lafayette Park 自 <strong>2026 年 1 月</strong>起就已被临时钢围栏圈住做修复",
          "<strong>关键在于续期机制：ACLU 在公开意见中指出这道围栏的存废是「一个月一决定」。</strong>过去八个月的实际记录是连续续期，所以 9 月 22 日到期<strong>不能假设会恢复开放</strong>。另据 Fox 5 DC 报道，<strong>Ellipse 被整体围起来充当 Marine One 的临时起降场</strong>，这个用途不会随封闭令到期而消失",
          "<strong>更长期的变化正在发生：</strong>Secret Service 与 NPS、Executive Office of the President 提交了一份 79 页方案，要给这片 8 英亩的广场<strong>装一圈永久钢围栏</strong>，南北两端设大门，并封住 15th–17th 街之间 Pennsylvania Avenue 的两端。National Capital Planning Commission 已于 <strong>9 月 3 日</strong>听取反对意见并接受了多个版本，最终表决在未来几个月，<strong>希望 2027 年动工</strong>。<strong>Lafayette Square 上一次有永久围栏是 1800 年代末</strong>",
          "<strong>The People's House: A White House Experience</strong>（1700 Pennsylvania Avenue NW）是 2024 年开的免费票制博物馆，<strong>由 White House Historical Association 私营</strong>，用等比复原的 Oval Office、Cabinet Room、State Dining Room 等场景讲行政官邸的故事。<strong>它明确不提供进入白宫、西翼或白宫园区的通道</strong>，但这是现实中唯一稳定可行的「白宫内部」体验",
          "<strong>真正的白宫参观基本不用考虑。</strong>外国公民必须通过<strong>本国驻美使馆</strong>在<strong>行前 21 至 90 天</strong>提交申请，而<strong>绝大多数使馆并不为旅游目的受理此类请求</strong>。请直接按「进不去」规划，把 The People's House 当作正式替代，而不是备胎"
        ],
        "photo": "建筑 <strong>2.5/5</strong>，人像 <strong>1/5</strong>，风光 <strong>1/5</strong>。评分低不是因为建筑不好，而是<strong>能站的位置几乎全被封了</strong>：剩下的 H Street 长焦机位距离近 290 米、隔着树，出片难度陡增。The People's House 室内布景照明规整、拍起来轻松，是本条目实际的得分来源。",
        "shots": [
          {
            "name": "H Street NW 南侧人行道，长焦越过 Lafayette Park 拍北立面",
            "desc": "<strong>封闭期内唯一还站得住的北侧机位。</strong>H Street 人行道到北门廊直线距离约 <strong>290 米</strong>，<strong>焦段必须算清楚：全画幅 200mm 时，290 米处的横向视野约 52 米，正好等于白宫北立面的宽度——也就是说 200mm 刚好把立面收满边到边</strong>。想单拍那个半圆形北门廊，需要 <strong>300–400mm</strong>；低于 135mm 则主体太小、前景全是树，没有意义。<strong>时段是这个机位的生死线。北门廊朝北，在 9 月底至 10 月底几乎整天背光</strong>：11:00–15:00 太阳在正南方高处，立面完全落在阴影里、天空却很亮，光比 4–5 EV，怎么拍都是灰墙加白天。三个可用窗口：<strong>（1）日出后一小时（9/25 07:00–08:15，10/22 07:25–08:40）</strong>，太阳方位 91–110° 且很低，斜擦立面东端；<strong>（2）日落前一小时（9/25 18:00–19:00，10/22 17:20–18:20）</strong>，太阳方位约 260–269°，斜擦立面西端，暖光最好；<strong>（3）最强的是日落后的泛光灯时段——9/25 的 19:20–19:50、10/22 的 18:40–19:10</strong>，此时白宫外墙泛光已开、天空仍有余蓝，是唯一能把立面亮度与天空拉平的时刻。长焦加暗光而又禁不禁三脚架不明（NPS 户外原则上允许，但这一带保安密度极高，<strong>架脚架很可能被要求收起</strong>），建议靠栏杆手持加高感。<strong>坐标为依 OSM Lafayette Square 与 White House 实体推算的 H Street 人行道位置，非实体节点。</strong>",
            "view": [
              38.9005,
              -77.03654
            ]
          },
          {
            "name": "Pennsylvania Avenue 步行广场（封闭中，开放则为首选）",
            "desc": "<strong>如果哪天封闭令真的解除，这里是压倒性的第一机位</strong>：到北门廊仅约 <strong>60–70 米</strong>，<strong>35–50mm 就能让北立面充满画面，85–135mm 拍门廊柱式细节</strong>，铁栅栏可以贴上去让栏杆虚化掉。光线逻辑与上一机位相同——<strong>避开 11:00–15:00，用日出后、日落前或泛光灯时段</strong>。<strong>但请把这个机位当作彩票而不是计划</strong>：现行 NPS 命令明确把 White House Sidewalk 列入封闭范围，而永久围栏方案要把这段路两端设门。出发当天先查 NPS 封闭页再决定要不要走过来。<strong>坐标为依 OSM White House 实体（38.897639, -77.036552）向北推算至 Pennsylvania Avenue 人行道，非实体节点。</strong>",
            "view": [
              38.89845,
              -77.036552
            ]
          },
          {
            "name": "Ellipse 北缘看南草坪与南门廊（封闭中）",
            "desc": "南侧机位。<strong>南立面朝南，是全天有光的一面，光线条件远好于北侧</strong>——这也是为什么南草坪的照片总比北门廊的好看。<strong>最佳 15:30–18:00（9 月）／14:40–17:30（10 月）</strong>，太阳方位 215–265°，斜照南立面与那个半圆形阳台，立体感最强；正午顶光会把立面拍平。距离约 <strong>170 米</strong>，<strong>需 200–300mm</strong>；画面里会自然带进南草坪的树与喷泉。<strong>问题同样是进不去</strong>：Ellipse 在现行封闭令内，并被报道整体围为 Marine One 起降场。退而求其次可站 <strong>Constitution Avenue 或 15th／17th Street 的外围人行道</strong>（这些是命令中列明仍开放的边缘人行道），但视角会被树严重遮挡。<strong>坐标取 OSM Ellipse 轮廓（way/238456698）北缘中点，由实体 bbox 推算。</strong>",
            "view": [
              38.895181,
              -77.03655
            ]
          },
          {
            "name": "The People's House 馆内复原场景",
            "desc": "<strong>本条目唯一稳定出片的地方。</strong>等比复原的 <strong>Oval Office</strong> 是主目标，布景照明是固定的展陈灯光、色温统一、亮度充足，<strong>反而比真正的历史建筑好拍</strong>：24–35mm 拍整间，f/2.8、ISO 1600、1/60s 即可。Cabinet Room 的长桌适合做纵深构图，State Dining Room 拍水晶灯与壁炉。<strong>时段建议开门即到（9:00）或 15:00 之后</strong>，中段团体较多。<strong>三层楼看完约 60–90 分钟。</strong>坐标取 OSM 实体 node/801383799。",
            "view": [
              38.898586,
              -77.039735
            ]
          }
        ],
        "access": {
          "book": "<strong>白宫外景不需任何预约</strong>，但出发前<strong>必须</strong>查一次 <a href=\"https://www.nps.gov/whho/learn/management/temporary-area-closures.htm\" target=\"_blank\" rel=\"noopener\">NPS 临时封闭公告页</a>，那里会挂当期的 Record of Determination 与封闭地图。<br><strong>The People's House 建议提前订免费定时票。</strong>放票规则很特殊：<strong>每月第一个工作日 17:00 ET 之前，释放次月全月的票</strong>（官方例子：11 月的票在 10 月第一个工作日 17:00 ET 前放出）。换算过来：<strong>要去 10 月下旬，票在 9 月 1 日就已经放出；要去 9 月下旬，票在 8 月初已放出。</strong><strong>现场也有少量 walk-up 票，先到先得</strong>，但热门时段靠不住。16 人以上团体<strong>必须提前 6 周</strong>申请团体票。订票 <a href=\"https://www.thepeopleshouse.com/passes\" target=\"_blank\" rel=\"noopener\">thepeopleshouse.com/passes</a>。<br><strong>真正的白宫参观</strong>：外国公民须经<strong>本国驻美使馆</strong>于行前 <strong>21–90 天</strong>提交，<strong>多数使馆不受理旅游申请，请视为不会发生</strong>",
          "ticket": "外景 <strong>免费</strong>。The People's House <strong>免费</strong>，官方建议每人捐 <strong>$15</strong>（自愿，非强制）",
          "hours": "外景区域理论上 24 小时，<strong>但实际以 NPS／Secret Service 的临时封闭令为准</strong>，且官方警告「areas often close without any advance notice」。<br><strong>The People's House：每周七天 9:00–17:00，最后入场 16:00</strong>（闭馆前 1 小时）；<strong>Thanksgiving、圣诞节、元旦闭馆</strong>；官方注明「with some exceptions」，偶尔会因特别活动或预定维护关闭，会在官网公告。<strong>附设的 History Shop 同为 9:00–17:00，无需票即可进</strong>",
          "parking": "<strong>这一带基本无法停车</strong>：多条街道封闭、其余为限时表位且执法严格。地铁 <strong>McPherson Square 站或 Farragut West 站（Blue/Orange/Silver）</strong>离 The People's House 与 Lafayette Park 北侧都最近；南侧机位走 <strong>Federal Triangle 站</strong>",
          "walk": "McPherson Square 站到 1700 Pennsylvania Ave 约 <strong>400 米 / 6 分钟</strong>；到 H Street 长焦机位约 <strong>500 米 / 7 分钟</strong>。The People's House 到 H Street 机位约 <strong>350 米 / 5 分钟</strong>，<strong>两者可以串成一站</strong>"
        },
        "notes": [
          "<strong>封闭令中明确仍开放的是外围人行道</strong>：H Street NW（Lafayette Park 北缘，含一处邻 H Street 的中央切口）、15th Street、17th Street、Constitution Avenue。<strong>请把行走范围限制在这些街道上</strong>，不要试图翻越或绕过临时围栏",
          "<strong>这一带 Secret Service、Park Police 与 Uniformed Division 密度极高。</strong>长焦镜头指向白宫是完全合法的，但<strong>架三脚架、久留不动、或使用看起来像专业摄制的器材很可能被上前询问</strong>。保持配合、别争论、器材尽量低调",
          "<strong>Lafayette Park 内部即便开放，也已经过 2026 年初的修复施工</strong>，网上 2019 年前那种绿草如茵、能走到南缘栏杆前的照片<strong>不代表现状</strong>",
          "<strong>The People's House 不需要过金属探测门</strong>（截至研究时官方未列明该要求），相比 Smithsonian 各馆入场快得多。<strong>官方未公布馆内摄影政策细则，未能从官方渠道确认是否禁三脚架</strong>；按同类私营博物馆惯例请自行假定禁止",
          "<strong>停摆情形下的唯一幸存者就是 The People's House</strong>——由 White House Historical Association 私营、不依赖联邦拨款。而白宫周边的 NPS 户外区域在停摆时通常物理上仍可通行但无人值守",
          "<strong>不要指望「运气好能看到 Marine One」。</strong>Ellipse 作为起降场正是它被围起来的原因，起降时段周边管控会更严而不是更松"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/94/Lafayette_Park_and_the_North_Portico_of_the_White_House.jpg",
            "cap": "Lafayette Park 越过草坪看北门廊，即封闭前的视角 · TCY / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/99/The_White_House_and_the_Lafayette_Park.jpg",
            "cap": "白宫与 Lafayette Park 全景 · Carol M. Highsmith / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/The_People%27s_House_A_White_House_Experience_-_1.jpg",
            "cap": "The People's House 馆内复原场景 · APK / CC BY 4.0"
          }
        ]
      },
      {
        "id": "dc-npg-saam",
        "n": 2,
        "name": "国立肖像画廊 + 美国艺术博物馆（Kogod 中庭）",
        "en": "National Portrait Gallery + Smithsonian American Art Museum",
        "score": 5,
        "tldr": "Norman Foster 的波浪玻璃顶中庭，免费、不需预约、开到 19:00——本区性价比最高的建筑机位。",
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
            "t": "开到 19:00",
            "c": "free"
          },
          {
            "t": "禁三脚架",
            "c": "risk"
          }
        ],
        "highlights": [
          "两馆共用一栋楼：<strong>Old Patent Office Building</strong>，1836–1867 年分期建成，<strong>全美最好的希腊复兴式建筑</strong>，国家历史地标。Walt Whitman 称它是「the noblest of Washington buildings」。<strong>1865 年 3 月 4 日 Lincoln 的第二次就职舞会就在这栋楼里举行。</strong>1958 年它已被列入拆除计划，<strong>是 Eisenhower 出手把它划给 Smithsonian 才保住的</strong>",
          "<strong>Robert and Arlene Kogod Courtyard</strong> 于 2007 年 11 月 18 日开放，是 <strong>Foster + Partners（Norman Foster）</strong>在 2004 年一场国际邀请竞赛中胜出的方案，SmithGroup 任在地建筑师、<strong>Gustafson Guthrie Nichol</strong> 做景观。屋顶是三个互相流入的连续拱面，<strong>由 864 块玻璃组成，没有任何两块形状相同</strong>，覆盖约 37,500 平方英尺，<strong>整个荷载只靠周边 8 根阳极氧化铝包覆的柱子承担</strong>——刻意不让新屋顶压到 19 世纪的老墙上，且屋面抬高于原女儿墙，新旧界限一目了然",
          "<strong>最反直觉的一个细节：屋顶里塞了 9,000 条被撕碎的牛仔裤。</strong>玻璃中庭的混响时间通常在 9–11 秒，完全没法办活动。解法是在钢制斜交网格的每个面横向固定一排 15 毫米钢棒，<strong>钢棒后面填进 9,000 双撕碎的牛仔裤作吸声材料</strong>，把混响压到约 <strong>3 秒</strong>。你抬头看到的那层网格纹理，一半是结构，一半是吸音棉",
          "地面是黑色花岗岩，配白色大理石种植池，种的是<strong>榕树与黑橄榄树</strong>。<strong>四道「water scrim」——每道仅 1/4 英寸深的水膜</strong>——是 Gustafson 的设计，<strong>办活动时可以排干</strong>。地板下埋了辐射式冷暖系统",
          "这个方案的结构与环境思路直接延续自 Foster 在 <strong>British Museum Great Court</strong> 的屋顶，设计口号是「do the most with the least」。如果你去过伦敦那个，会立刻认出同一套语汇——但这里的曲面更软、更像一块被吹起的布"
        ],
        "photo": "建筑 <strong>5/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>1/5</strong>。本区综合评分最高的一个：免费、不需预约、开到 19:00、有咖啡座可以坐着等光，而且中庭那层网格在任何天气下都成立。唯一扣分是禁三脚架加光线偏平。",
        "shots": [
          {
            "name": "Kogod Courtyard 正中向上仰拍波浪网格",
            "desc": "<strong>招牌机位，站在中庭正中偏南、用 14–24mm 近乎垂直上仰</strong>，让三段拱面的曲线与斜交网格填满整个画面，四周老楼的女儿墙在四边形成硬边框。<strong>关于光线，必须讲清楚这是玻璃顶室内、光是漫射的，所以不存在「黄金时段」。</strong>实际差别在两处：<strong>（1）11:30 开门到 13:30，太阳高度角 40–50°，阳光能穿过屋顶在北侧老墙上打出清晰的网格投影</strong>，这是唯一能拍到「网格阴影落在砂岩墙上」的时段，也是最出片的；<strong>（2）17:00 之后天光转弱、馆内灯亮起，屋顶从「透光面」变成「反光面」</strong>，会映出中庭内部的树与人，适合拍气氛而非结构。10 月下旬 18:20 日落后还有 40 分钟馆内时间，<strong>可以拍到玻璃顶完全变成黑镜的版本</strong>。<strong>白平衡是这里最大的技术陷阱</strong>：屋顶玻璃透进来的是天光（约 6500–7500K，阴天更蓝），而四周墙面是暖色砂岩加大理石、地面是黑花岗岩、咖啡座与展厅入口是暖色 LED——<strong>同一画面里至少三个色温</strong>。自动白平衡在这里几乎必然翻车，会在洋红与青绿之间摇摆。<strong>务必拍 RAW，并用白色大理石种植池做一次自定义白平衡</strong>，或直接锁 5600K 后期再修。<strong>坐标取 OSM 建筑轮廓 way/48041275 的几何中心（推算），该中心即中庭位置。</strong>",
            "view": [
              38.897837,
              -77.022964
            ]
          },
          {
            "name": "NPG 三层 Great Hall 与拱形长廊",
            "desc": "三层的 <strong>Great Hall</strong> 是文艺复兴复兴式的彩瓷地砖大厅，连续尖拱与彩色天窗构成很强的重复韵律，<strong>与楼下 Foster 的现代曲面正好是一组对照</strong>。24–35mm 沿长廊中轴纵深构图，让拱券一层层退开；<strong>85mm 拍单个拱与彩瓷地面的局部更容易出干净画面</strong>。光线全靠天窗，比中庭暗 2–3 EV，f/2.8、ISO 1600–3200。<strong>这里几乎总是没人，是全楼最安静的角落。</strong>坐标取 OSM NPG 节点 node/611558744。",
            "view": [
              38.897866,
              -77.022372
            ]
          },
          {
            "name": "SAAM 三层 Lincoln Gallery 与 Luce Foundation Center",
            "desc": "<strong>Lincoln Gallery</strong> 就是当年开就职舞会的那个大厅，现在挂当代艺术，白墙加铸铁柱列加拱顶，是拍「人在巨大空间里」的好背景，35–50mm。隔壁 <strong>Luce Foundation Center</strong> 是开放式储藏展示区，<strong>3,300 多件作品密密麻麻塞在通高玻璃柜里</strong>，视觉密度极高，用 24mm 拍整墙玻璃柜的重复感，或 70–200mm 压缩单柜细节。<strong>注意特展区可能单独禁拍，请看墙上告示。</strong>坐标取 OSM SAAM 节点 node/611558742。",
            "view": [
              38.897866,
              -77.02359
            ]
          },
          {
            "name": "F Street NW 北立面与 8th Street 门廊外景",
            "desc": "希腊复兴式的八柱式门廊，仿帕特农的多立克柱式。<strong>北立面朝北，在 9 月底至 10 月底基本全天处于阴影中</strong>——这不算坏事，柱廊在均匀阴影下反而没有恼人的高光，<strong>建议阴天或 9:00–10:00 来拍，用低反差处理出石材的质感</strong>。想要有光的立面就去南边 G Street 一侧。24–70mm，退到马路对面。<strong>坐标为依 OSM 建筑轮廓北缘推算至 F Street 人行道，非实体节点。</strong>",
            "view": [
              38.898259,
              -77.022964
            ]
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>，没有任何票务系统，直接走进去",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>这是本区开得最晚的馆，也是唯一能拍到日落后室内的馆。</strong>Smithsonian American Art Museum 官网首页现行口径是<strong>「Open Daily, 11:30 a.m.–7:00 p.m.」</strong>，Smithsonian Gardens 官方页面对中庭的口径是<strong>「The Robert and Arlene Kogod Courtyard … is open 11:30 a.m. to 7 p.m. daily and closed on December 25」</strong>，两处一致。National Portrait Gallery 同楼同时段。<strong>请注意 11:30 才开门</strong>，比其他 Smithsonian 晚 90 分钟，别把上午第一站排在这里；作为补偿它比别人晚关 90 分钟",
          "parking": "<strong>无自有停车场</strong>，Penn Quarter 一带路边表位竞争激烈。周边商业停车楼日均 $18–30。地铁最方便：<strong>Gallery Place–Chinatown 站（Red/Green/Yellow 线）出口就在楼的东北角</strong>",
          "walk": "Gallery Place–Chinatown 站到 F Street 或 G Street 入口 <strong>约 80 米 / 1–2 分钟</strong>。进门后到 Kogod Courtyard 约 1 分钟，<strong>是本区从地铁到主机位最快的一个</strong>"
        },
        "notes": [
          "<strong>三脚架、自拍杆及类似长杆器材在展厅内一律禁止</strong>，官方理由是保护展品。手持拍摄与视频「generally encouraged」",
          "<strong>特展中的特定作品可能单独禁拍</strong>，官方要求「check the wall signage to confirm」，请留意展签旁的相机图标",
          "<strong>主楼 G Street 与 F Street 入口都要过金属探测门</strong>；保安可能要求把较小的双肩包手提或背在身前。（同属 SAAM 的 <strong>Renwick Gallery</strong> 在 White House 旁另一栋楼，只做人工手检，开放时间是 10:00–17:30，与主楼不同，别记混）",
          "<strong>中庭有咖啡座（Courtyard Café），可以点一杯坐着等光</strong>，这在本区是独一份的便利——别的馆都没法让你在最佳机位旁边坐两小时",
          "中庭常被租用办活动（音乐会、晚宴、酒会），<strong>此时 water scrim 会被排干、地面摆满桌椅</strong>。官方说活动多在闭馆后，但布场可能提前占用。<strong>如果对空场有执念，建议开门即到（11:30）</strong>",
          "<strong>两馆合计藏品与展厅面积很大，纯建筑摄影 1.5 小时足够</strong>，把时间留给中庭、Great Hall 与 Luce Center 三处即可"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Museum_Kogod_Courtyard_2.jpg",
            "cap": "Kogod Courtyard 波浪玻璃顶全景 · Amy Vaughters, Smithsonian American Art Museum / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Museum_Kogod_Courtyard_5.jpg",
            "cap": "斜交网格与周边老墙的新旧界面 · Zack Frank, Smithsonian American Art Museum / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/14/Panorama_of_the_western_facade_of_the_Donald_W._Reynolds_Center%2C_January_2026.jpg",
            "cap": "Old Patent Office Building 西立面全景 · Marc Merlin / CC BY 4.0"
          }
        ]
      },
      {
        "id": "dc-fords",
        "n": 3,
        "name": "福特剧院与 Petersen House",
        "en": "Ford's Theatre and Petersen House",
        "score": 3,
        "tldr": "林肯遇刺现场，免费但需 $5 手续费的定时票；剧场不含在每一张票里，且今年刚做过维修封闭。",
        "tags": [
          {
            "t": "门票免费",
            "c": "free"
          },
          {
            "t": "$5 订票手续费",
            "c": "paid"
          },
          {
            "t": "需定时票",
            "c": "risk"
          },
          {
            "t": "剧场可能关闭",
            "c": "risk"
          }
        ],
        "highlights": [
          "1865 年 4 月 14 日晚，<strong>John Wilkes Booth 潜入总统包厢开枪</strong>；Lincoln 被抬过 10th Street 送进对面的 <strong>Petersen House</strong> 寄宿公寓，<strong>次日清晨 7:22 在那间后卧室去世</strong>。两栋楼隔街相望，直线距离不到 50 米，<strong>这是全美最紧凑的一组历史现场</strong>",
          "整个「campus」由四部分组成，是理解票务的关键：<strong>Theatre（重建的剧场内景）、Museum（地下层展厅）、Petersen House、以及 Aftermath Exhibits</strong>（后者在 Center for Education and Leadership 内，讲刺杀后的追捕、审判与灵柩专列一路回到 Springfield）",
          "<strong>剧场至今仍是运营中的演出场地</strong>，这直接决定了你能不能进去看。NPS 官方原文：「Ford's Theatre is an active theater, and there are times when the theater is closed for matinee performances, rehearsals and special events.」Ford's Theatre Society 更直接：<strong>「The Theatre is not included in every ticket. Certain entries only include visits to the Petersen House and Aftermath Exhibits.」</strong>",
          "<strong>总统包厢内部长期封闭</strong>，官方理由是防止文物损坏，只能从剧场地面层或二层向上拍。包厢按 1865 年原样布置：美国国旗加一幅 George Washington 肖像"
        ],
        "photo": "建筑 <strong>3/5</strong>，人像 <strong>1.5/5</strong>，风光 <strong>0.5/5</strong>。剧场内景与 Petersen House 后卧室都是有分量的历史画面，但空间小、光线暗、人流按半小时一批灌进来，而且剧场不保证开放。属于「值得去但不要抱摄影期待」的一类。",
        "shots": [
          {
            "name": "剧场地面层后排向舞台与总统包厢",
            "desc": "<strong>唯一能同时收进舞台、二层包厢与那面国旗的位置。</strong>站在地面层最后几排的中轴上，<strong>24–35mm 横构图</strong>把整个观众厅的马蹄形围合收进来，包厢在画面左上。想单拍包厢用 <strong>85–135mm</strong>。光线是舞台灯加壁灯，色温偏暖且不均匀，<strong>f/2–f/2.8、ISO 3200–6400、1/60s</strong>，锁 3200–3800K。<strong>禁三脚架</strong>。每批入场约 15–20 分钟，<strong>一进场先拍空场再听讲解</strong>，否则座位很快坐满。坐标取 OSM Ford's Theatre 实体。",
            "view": [
              38.896676,
              -77.025645
            ]
          },
          {
            "name": "Petersen House 后卧室（Lincoln 去世处）",
            "desc": "<strong>非常小的一间屋，宽度不到 3 米，靠绳索隔开，动线是单向不能回头的。</strong>这决定了机位只有一个：从门口向内。<strong>必须用 16–24mm 超广</strong>，24mm 已经勉强。光线极暖极暗（模拟煤气灯），<strong>f/1.8–f/2.8、ISO 6400、1/40s，锁 3000K</strong>。<strong>前面那批人走完、下一批还没到的那 30–60 秒是唯一能拍到空房间的窗口</strong>，建议在自己那批的队尾慢走，制造这个时间差。坐标取 OSM Petersen House 实体。",
            "view": [
              38.896762,
              -77.026202
            ]
          },
          {
            "name": "10th Street NW 街景：Ford's 立面与对面的 Petersen House",
            "desc": "10th Street 南北走向、街道很窄、两侧楼高，<strong>所以街面几乎全天在阴影里，只有正午前后一小时阳光能落到地面</strong>（9/25 约 12:30–13:30，10/22 约 12:20–13:20，太阳高度角 40–50°）。<strong>但阴影其实更适合这个题材</strong>：砖立面、白色门框、悬挂的美国国旗，在均匀光下颜色最干净。35–50mm 站在西侧人行道拍 Ford's 立面，<strong>转身 180° 就是 Petersen House</strong>，两张放一起就是完整叙事。<strong>坐标为依两栋建筑 OSM 实体推算的街心位置，非实体节点。</strong>",
            "view": [
              38.8967,
              -77.0259
            ]
          }
        ],
        "access": {
          "book": "<strong>每人都必须有票，票本身免费，但网上订每张收 $5.00 手续费</strong>（NPS 原文：「The Ford's Theatre Society charges a $5.00 reservation fee for each ticket」）。<strong>每单限 6 张</strong>；该手续费<strong>在 NPS 免费入园日也不豁免，国家公园年卡不能抵扣</strong>。<strong>同日免费票当天 8:30 起在 box office 现场发放，每人限 6 张、数量有限</strong>，热门时段可能完全没有。NPS 建议<strong>至少提前一天买</strong>。20 人以上团体写 groups@fords.org。订票与班次日历：<a href=\"https://fords.org/visit-us/historic-site-visit/\" target=\"_blank\" rel=\"noopener\">fords.org</a>。<strong>关键操作：订票前必须打开 Ford's Theatre Society 的日历，逐个时段确认你那一档到底含不含 Theatre 与 Museum</strong>——这是本景点唯一真正需要动脑的一步",
          "ticket": "<strong>免费</strong>；网上订票每张 <strong>$5.00</strong> 手续费；Acoustiguide 语音导览另加 <strong>$5/台</strong>",
          "hours": "官方口径：<strong>每日开放，入场时段 9:00–16:00、每半小时一档</strong>；<strong>Thanksgiving 与 12 月 25 日闭馆</strong>。官方建议留 <strong>2–3 小时</strong>走完四个部分，其中 Museum 约 30 分钟。<strong>但「每日开放」不等于「四个部分每天都开」</strong>：NPS 明确说明剧场本体可能因演出、装台、排练而关闭，且「The schedule varies considerably … please check the reservations schedule on the Ford's Theatre Society site for specific details on what is available on any given day or entry time」",
          "parking": "<strong>无自有停车场</strong>，Penn Quarter 路边表位难找，周边停车楼日均 $18–30。地铁 <strong>Metro Center 站（Red/Blue/Orange/Silver）或 Gallery Place–Chinatown 站</strong>",
          "walk": "Metro Center 站到 511 10th Street NW 约 <strong>350 米 / 5 分钟</strong>；Gallery Place 站约 <strong>500 米 / 7 分钟</strong>。Ford's 到 Petersen House 只需<strong>过一条街，不到 1 分钟</strong>"
        },
        "notes": [
          "<strong>今年的维修封闭必须交代清楚。</strong>NPS 依 36 CFR §1.5 自 <strong>2026 年 6 月 3 日</strong>起对 Theatre 与 Museum 实施临时封闭以做消防与生命安全改造，<strong>Theatre 计划 7 月 31 日 9:00 重开、Museum 计划 8 月 15 日 9:00 重开</strong>；Atlantic Lobby、Petersen House 与 Center for Experiential Learning 全程未关",
          "<strong>但截至本次研究时，fords.org 的 Plan Your Visit 页面仍挂着「the historic theatre and museum are temporarily closed for maintenance work」的横幅，并写着「Tickets … through August 31, 2026, are now on sale」。这与 NPS 的重开日期相矛盾，最可能是官网横幅未及时撤下</strong>。<strong>该矛盾未能从官方渠道得到确认</strong>——请在订票时以日历上实际可选的时段为准，必要时打 (202) 347-4833 问清楚",
          "<strong>总统包厢内部不开放</strong>，任何时候都只能从外面拍。剧场内有 ranger 值守答问",
          "<strong>剧场内禁三脚架</strong>；Petersen House 空间极窄，<strong>大三脚架与大背包实际上无法通行</strong>，建议只带机身加一支广角",
          "<strong>动线是单向的</strong>：Museum → Theatre → 过街到 Petersen House → Aftermath Exhibits，中途不能回头补拍。想拍什么请一次拍够",
          "<strong>停摆情形下这里会关。</strong>Ford's Theatre National Historic Site 是 NPS 属地、由 Ford's Theatre Society 合作运营，拨款中断时按 NPS 惯例闭馆。本次行程窗口已由 CR 覆盖，但这一点值得知道"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Ford%27s_Theatre_interior%2C_Washington%2C_D.C.jpg",
            "cap": "剧场观众厅与总统包厢 · Wknight94 / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/The_interior_of_the_President%27s_box_in_Ford%27s_Theatre.JPG",
            "cap": "总统包厢内部（仅可从外拍摄）· Cory Hartman / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Petersen_House%2C_Washington%2C_D.C.IMG_4512.JPG",
            "cap": "Petersen House 街景立面 · Billy Hathorn / CC0"
          }
        ]
      },
      {
        "id": "dc-archives",
        "n": 4,
        "name": "国家档案馆博物馆",
        "en": "National Archives Museum",
        "score": 3.5,
        "tldr": "Rotunda 的摄影禁令已废止，现在官方鼓励无闪光拍摄；免费不需票，$1 定时票可跳队。",
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
            "t": "$1 可跳队",
            "c": "paid"
          },
          {
            "t": "禁闪光禁独脚架",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>本条目最重要的信息是一条更正：Rotunda 现在可以拍照了。</strong>2010 年 1 月 25 日 NARA 在联邦公报发布最终规则，自 2 月 25 日起<strong>禁止在 National Archives Building 所有展区（含 Rotunda）拍照摄像</strong>，理由是馆方估算文件每年要挨约 <strong>5 万次闪光</strong>，而自动闪光相机让旧规则无法执行。<strong>但这条禁令已经不再是现行政策</strong>：NARA 现在的官方摄影页写的是「非闪光拍摄在所有公共区域<em>受到鼓励</em>」，还附了官方 Instagram tag。几乎所有 2010–2020 年间写的攻略在这一点上都是错的",
          "<strong>Rotunda for the Charters of Freedom</strong> 是全世界唯一能看到<strong>《独立宣言》《宪法》《权利法案》原件</strong>的地方，同一空间还放着 <strong>《解放奴隶宣言》与第 19 修正案</strong>。文件封在 2003 年新装的密封展柜里，<strong>展柜内光照被严格控制在 3 英尺烛光（foot-candle）以下</strong>并加装紫外滤片",
          "建筑是 <strong>John Russell Pope</strong> 设计的新古典主义大楼，Constitution Avenue 一侧的南立面是主入口，柯林斯柱廊配三角楣。Rotunda 内两侧是 <strong>Barry Faulkner 1936 年的两幅巨型壁画</strong>（《Declaration of Independence》与《Constitution》）——<strong>这两幅壁画其实比那几张文件好拍得多</strong>，尺幅大、有内容、不反光",
          "下层 <strong>David M. Rubenstein Gallery</strong> 入口处放着一份<strong>1297 年的《大宪章》原件</strong>，后面接「Records of Rights」常设展。另有新的「The American Story」签名展厅与 Discovery Center"
        ],
        "photo": "建筑 <strong>4/5</strong>，风光 <strong>1/5</strong>，人像 <strong>1.5/5</strong>。Rotunda 的穹顶与两幅壁画是扎实的建筑／室内目标，且刚刚从「完全禁拍」变成「可拍」；扣分是空间极暗、禁独脚架、文件本身在低反射玻璃后面很难拍出好看的样子。",
        "shots": [
          {
            "name": "Rotunda 内，穹顶与 Faulkner 壁画",
            "desc": "<strong>先说清楚该拍什么：不要把时间花在那三份文件上。</strong>它们在密封柜里、照度被压到 3 英尺烛光以下、玻璃有弧度，手持拍出来就是一片暗黄加一个反光斑，没有任何观看价值。<strong>真正的目标是穹顶与两侧壁画。</strong>穹顶是带方格藻井的半球，用 <strong>14–24mm 站在 Rotunda 正中向上仰拍</strong>，能得到完整的同心圆构图。壁画高约 14 英尺，<strong>24–35mm 横构图</strong>可整幅收进。<strong>器材要求很硬：环境照度极低，禁闪光禁独脚架，请准备 f/1.4–f/2 大光圈加 ISO 6400</strong>，快门守住 1/40s 并开防抖。<strong>时段选 10:00 开馆头 30 分钟或 16:30 之后</strong>，中段 11:00–15:00 人多到无法站在正中不被撞。坐标取 OSM way/66418953。",
            "view": [
              38.892808,
              -77.022919
            ]
          },
          {
            "name": "Constitution Avenue 南立面外景",
            "desc": "柯林斯柱廊加三角楣，台阶两侧是 <strong>Heritage 与 Vigilance 两尊坐像</strong>。南立面朝南，<strong>全天有光</strong>，但正午顶光会让柱廊失去纵深。<strong>最佳是 9/25 的 16:30–18:30 或 10/22 的 15:40–17:50</strong>：太阳方位转到 235–265°，斜照柱廊使每根柱子在墙上投出等距阴影，这是拍新古典柱列唯一成立的光。24–70mm，站在 Constitution Ave 对面人行道上退到最远，<strong>务必用镜头校正修梯形变形</strong>，或者干脆蹲低到 1 米高度拍以减少仰角。<strong>坐标为依 OSM 建筑轮廓向南推算至 Constitution Ave 人行道，非实体节点。</strong>",
            "view": [
              38.8924,
              -77.022919
            ]
          },
          {
            "name": "Rubenstein Gallery 与 1297 年《大宪章》",
            "desc": "下层展厅，比 Rotunda 更暗但人也更少。《大宪章》同样在密封柜里、同样不好拍，<strong>值得拍的是展厅本身的暗色调空间与展柜发出的冷光</strong>——把一个观众的剪影放在发光展柜前，是这里唯一有力的画面。35mm f/1.4，ISO 6400，1/50s。<strong>此展厅在下层且无独立 OSM 实体，省略坐标，地图上不会有针脚。</strong>"
          }
        ],
        "access": {
          "book": "<strong>不需预约，所有人都可以直接来。</strong>但官方「鼓励」订票以启用馆内新的个性化系统，共三种：<strong>（1）免费 general admission 票</strong>；<strong>（2）$1 定时票（timed-entry），唯一作用是跳过现场排队</strong>，入场时段 10:15–16:30、每 15 分钟一档；<strong>（3）6 人以上团体 $1 定时票</strong>。$1 是不可退的手续费，改期免费、取消不退。<strong>10 月、11 月、12 月 2026 的票已于 9 月 1 日 11:00 ET 开始释放。</strong>订票走 Etix，入口在 <a href=\"https://visit.archives.gov/visit/tickets\" target=\"_blank\" rel=\"noopener\">visit.archives.gov/visit/tickets</a>。实务判断：<strong>旺季正午现场队伍可能排 30–60 分钟，$1 非常值得花</strong>；若你按建议在 10:00 开馆时到，则完全不必订",
          "ticket": "<strong>免费</strong>（$1 仅为定时票手续费）",
          "hours": "官方原文：展区 <strong>每日 10:00–17:30</strong>，<strong>最后入场为闭馆前 30 分钟（即 17:00）</strong>；<strong>除 Thanksgiving 与 12 月 25 日外全年开放</strong>。定时票时段止于 16:30，官方解释是要留足时间让人看完 Rotunda。（注：今年夏天曾有到 7 月 5 日为止的 10:00–22:00 延长开放，<strong>该延长已结束</strong>，10 月不要指望晚场）",
          "parking": "<strong>周边只有零星路边计时表位，官方明确建议不要开车。</strong>地铁 <strong>Archives–Navy Memorial–Penn Quarter 站（Green/Yellow 线）</strong>就在门口",
          "walk": "Archives 地铁站出口到博物馆入口约 <strong>100 米 / 2 分钟</strong>，是本区通达性最好的一个点。个人或 6 人以下请<strong>提前 15 分钟</strong>到以过安检，7 人以上提前 30 分钟"
        },
        "notes": [
          "<strong>现行摄影政策：非闪光的照片与视频在所有公共区域「受鼓励」。禁止闪光灯、任何补光设备、自拍杆、独脚架及类似器材。</strong>官方未单独提及三脚架，但既然独脚架都禁，<strong>请当作三脚架同样禁止</strong>",
          "<strong>包的限制是本区最严的：每人限带一个包，尺寸不得超过 17 × 26 英寸（43 × 66 厘米）。</strong>婴儿车、轮椅、助行设备允许。所有物品都要过安检并<strong>全程随身，不能寄存后离开</strong>",
          "<strong>展厅与影院内禁止食物、口香糖与饮料</strong>",
          "官方建议动线：先上层 Rotunda 看 Charters，出来后到 East／West Rotunda Galleries 看轮换文件展，再下到 Rubenstein Gallery 看《大宪章》与 Records of Rights。<strong>纯摄影的话 45–60 分钟足够</strong>",
          "<strong>迟到不保证入场。</strong>官方写明早到或晚到都可能被要求等下一个时段，且受建筑容量限制",
          "<strong>如遇特殊活动或国家安全原因临时闭馆，$1 手续费一律不退</strong>，馆方只会尝试通知并帮你改期"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/96/US_National_Archives_Building.jpg",
            "cap": "Constitution Avenue 南立面柱廊 · David Samuel (User:Hellodavey1902) / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/55/Ceiling_of_National_Archives_Rotunda.jpg",
            "cap": "Rotunda 藻井穹顶，仰拍机位所见 · PatrykTBrown / CC0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/USA-Archives_of_the_United_States_of_America0.jpg",
            "cap": "档案馆建筑全景 · Ingfbruno / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "dc-nga",
        "n": 5,
        "name": "国家美术馆（西馆 + 东馆）",
        "en": "National Gallery of Art (West Building + East Building)",
        "score": 5,
        "tldr": "I.M. Pei 东馆天光中庭配 Calder 动态雕塑，加西馆穹顶与雕塑花园；免费、不需票、屋顶平台开放。",
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
            "t": "屋顶平台开放",
            "c": "good"
          },
          {
            "t": "禁三脚架",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>East Building</strong> 是 <strong>I.M. Pei</strong> 的作品，1978 年 6 月 1 日开放。场地是个梯形余角，Pei 的解法是<strong>把它切成两个咬合的三角形</strong>：等腰三角形放展厅、直角三角形放研究中心。结果是整栋楼没有一个直角房间，<strong>连墙角都是 19.5 度的锐角</strong>——外墙那个著名的锐利石角被几十年来的游客摸得发亮",
          "中庭上方是巨大的三角形玻璃天窗。<strong>2022 年 2 月 28 日至 6 月 30 日东馆曾整体关闭更换天窗玻璃</strong>，新玻璃<strong>把进光量恢复到 1978 年刚建成时的水平</strong>，所以现在的中庭比 2010 年代的照片明显更亮。中庭悬着 <strong>Calder 1976 年的巨型动态雕塑</strong>，地面还有 Noguchi 的《Great Rock of Inner Seeking》、Serra 的《Five Plates, Two Poles》与 Ernst 的《Capricorn》",
          "<strong>Roof Terrace 目前正常开放</strong>，位于 East Building 的 Tower Level，是 2016 年那轮改造新增的（同时在原有轮廓内加了 12,250 平方英尺展厅与两个塔楼展室，常设展出作品从 350 件增到 500 件）。平台上站着 <strong>Katharina Fritsch 的《Hahn/Cock》</strong>——一只约 <strong>4.7 米高的亮蓝色公鸡</strong>，2013 年首展于伦敦 Trafalgar Square 的第四基座，2016 年 7 月移到这里，<strong>2021 年由 Glenstone Museum 正式捐赠</strong>成为永久藏品。它<strong>没有底座、直接立在平台上</strong>，正对 Pennsylvania Avenue，东望国会山",
          "<strong>West Building</strong> 是 <strong>John Russell Pope</strong> 设计、1941 年开放的新古典主义大馆。Rotunda 是穹顶圆厅，<strong>一圈深绿色托斯卡纳大理石柱</strong>围着中央的 Mercury 喷泉，穹顶有藻井与圆形天眼。<strong>与东馆的锐角几何形成本区最强的一组建筑对照</strong>——同一座美术馆，两种完全相反的空间语言",
          "<strong>Sculpture Garden</strong> 是 6 英亩的独立街区，20 多件现代雕塑加一座中央大喷泉（冬天改成溜冰场），有 Louise Bourgeois、Alexander Calder、Marc Chagall 等人的作品，还有 Pavilion Café"
        ],
        "photo": "建筑 <strong>5/5</strong>，人像 <strong>4/5</strong>，风光 <strong>2.5/5</strong>。东馆中庭、西馆穹顶、雕塑花园三种完全不同的空间，全部免费且不需预约，再加上一个开放的屋顶平台——这是本区可拍内容最丰富的一个点位。扣分只有禁三脚架与 17:00 早闭。",
        "shots": [
          {
            "name": "East Building 中庭：天窗、Calder 动态雕塑与锐角几何",
            "desc": "<strong>本条目的招牌机位，也是曝光最难的。这是一个天光高反差空间，三角形天窗与阴影处的大理石墙面通常相差 6–8 EV。</strong>三种策略，按目标选：<strong>（1）想要干净影调：构图直接避开天窗</strong>——站在夹层向下拍 Calder 与地面人流，让背景是大理石墙而不是玻璃，一次曝光即可解决，这是成功率最高的做法。<strong>（2）想要完整空间：手持包围曝光 3–5 张做 HDR</strong>，±2 EV 一档；<strong>禁三脚架，所以必须靠高快门保证可对齐</strong>——ISO 800–1600、f/5.6、1/125s 以上，连拍模式一口气拍完。<strong>（3）想要戏剧性：为天窗测光，让 Calder 与三角梁架变成剪影</strong>，这是最省事也最有力的一种。<strong>时段选 11:00–14:00</strong>（9/25 太阳最高 50.1°、10/22 约 40°），此时天窗被完全照亮、中庭最通透；16:00 后光衰减明显。<strong>白平衡注意：内外墙都是粉色的 Tennessee 大理石，会给整个空间铺一层暖调</strong>，自动白平衡会过度校正成偏青，建议锁 5200–5600K 拍 RAW。14–24mm 拍整个中庭，70–200mm 压缩 Calder 与梁架的层叠。坐标取 OSM way/66418590。",
            "view": [
              38.891304,
              -77.016542
            ]
          },
          {
            "name": "East Building Roof Terrace 与《Hahn/Cock》",
            "desc": "在 Tower Level，<strong>目前正常开放、随馆内时间 10:00–17:00</strong>。那只蓝公鸡直接立在铺装上没有基座，<strong>可以贴很近用 24mm 仰拍，让它顶着天空、下方露出 Pennsylvania Avenue 与国会山方向</strong>——这是唯一能把「一只荒诞的蓝公鸡」与「美国国会」放进同一画面的位置，也是它的全部意思所在。<strong>最佳 15:30–17:00</strong>：低角度侧光让亮蓝色饱和度最高，天空也不至于白掉。<strong>正午顶光会让蓝色发灰、并在雕塑上留下难看的高光</strong>。35–50mm 拍雕塑与平台几何的关系。<strong>注意 17:00 闭馆，10 月下旬日落 18:18，所以在这里拍不到日落</strong>，别做这个计划。坐标同为 OSM way/66418590（东馆轮廓）。",
            "view": [
              38.891304,
              -77.016542
            ]
          },
          {
            "name": "West Building Rotunda 穹顶与 Mercury 喷泉",
            "desc": "深绿色托斯卡纳柱列围合的圆厅，中央 Mercury 喷泉，穹顶有藻井与圆形天眼。<strong>14–24mm 站在喷泉正南、把镜头压到接近水面高度向北拍</strong>，柱列会形成完整对称、天眼落在画面正中上方。<strong>光源只有天眼加壁灯，比东馆中庭暗 2–3 EV</strong>，f/2.8–f/4、ISO 1600–3200、1/60s。<strong>深绿大理石在暖色壁灯下容易发褐，务必拍 RAW</strong>。<strong>时段选 10:00 开馆头 20 分钟</strong>——这是穿行动线的交叉口，10:30 之后几乎不可能拍到没有人的地面。想要人反而更好：<strong>85mm 从柱廊阴影里拍走过天眼光斑的行人剪影</strong>。坐标取 OSM way/66418944。",
            "view": [
              38.891317,
              -77.019907
            ]
          },
          {
            "name": "Sculpture Garden 中央喷泉与雕塑群",
            "desc": "<strong>本条目唯一的室外机位，也是唯一能拍日落的部分——但要注意 17:00 关园。</strong>9 月 25 日日落 19:00、10 月 22 日 18:18，<strong>都在关园之后，所以这里拍不到黄金时段</strong>，实际可用的最好光是 <strong>15:30–17:00 的低角度侧光</strong>，此时雕塑投出长影、喷泉逆光有水珠反光。（注：今年夏季曾有周三至周六延长到 20:00 的安排，<strong>该延长已于 9 月 5 日结束</strong>，10 月一律 17:00 关。）24–70mm 拍雕塑与树的关系，<strong>贴近喷泉水面用 1/1000s 定格水花</strong>，或 f/16 加 ND 做慢门（无脚架的话可把机身压在池沿上）。10 月下旬这里的落叶色是全区最好的。坐标取 OSM way/175895751。",
            "view": [
              38.891272,
              -77.022968
            ]
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>，无票务系统",
          "ticket": "<strong>免费</strong>（官方口径「Always free」）",
          "hours": "官方原文：<strong>East Building 与 West Building 每日 10:00–17:00；Sculpture Garden 每日 10:00–17:00</strong>。全年仅 12 月 25 日与 1 月 1 日闭馆。East Building 的 Terrace Café 每日 10:00–16:00。<strong>17:00 早闭是这个点位最大的结构性缺陷</strong>：9 月下旬闭馆后还有 2 小时日光、10 月下旬还有 1 小时 15 分，<strong>请把这段时间预留给别处的室外机位，不要指望在馆内拍黄金时段</strong>",
          "parking": "<strong>无自有停车场</strong>，Constitution Avenue 与 Madison Drive 有路边表位但极难找。地铁 <strong>Archives–Navy Memorial–Penn Quarter 站（Green/Yellow）</strong>离西馆与雕塑花园最近；<strong>Judiciary Square 或 L'Enfant Plaza</strong> 也可",
          "walk": "Archives 站到 Sculpture Garden 入口约 <strong>200 米 / 3 分钟</strong>，到 West Building 约 <strong>350 米 / 5 分钟</strong>。<strong>West Building 与 East Building 之间有地下通道相连</strong>（沿途是 Leo Villareal 的灯光装置《Multiverse》），不用出门过马路，步行约 <strong>5 分钟</strong>；Sculpture Garden 则需出馆过 7th Street，约 3 分钟"
        },
        "notes": [
          "<strong>摄影政策在大馆里算宽松得反常</strong>：官方 FAQ 原文是「Photography for personal use, <em>including flash</em>, is permitted, except in special exhibitions and where specifically prohibited.」<strong>连闪光灯都明确允许</strong>。<strong>但 monopods 与 tripods 明确禁止。</strong>即便允许闪光也请别用——对油画无益，且中庭那种空间闪光完全无效",
          "<strong>特展区通常禁止拍摄</strong>，且教育团体页面注明手持相机「allowed in the permanent collection areas but not in special exhibitions」。请看现场标示",
          "<strong>双肩包不能背进展厅</strong>，需寄存或改为手提／前抱；入馆时所有随身物品要接受检查。三脚架、画架、墨水与粉笔类绘画材料<strong>未经事先特别许可禁止</strong>",
          "<strong>East Building 的锐角外墙是免费的室外机位</strong>，不进馆也能拍；<strong>4th Street Plaza 的玻璃棱锥天窗</strong>（通道的采光井）在低角度光下也很好",
          "<strong>NGA 在拨款中断时会关闭。</strong>本次行程窗口已由 CR 覆盖至 12 月 11 日，但若行程有变请重新确认",
          "<strong>East Building 中庭 2022 年换过天窗玻璃</strong>，现在比网上 2015–2020 年的照片明显更亮更通透，<strong>按那些老照片估曝光会低估 1–1.5 EV</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/63/East_Building_of_the_National_Gallery_of_Art%2C_atrium.jpg",
            "cap": "East Building 天光中庭与三角梁架 · Difference engine / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Mercury_Fountain_in_the_Rotunda_of_the_National_Gallery_of_Art.jpg",
            "cap": "West Building Rotunda 与 Mercury 喷泉 · John Menard / CC BY-SA 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/41/National_Gallery_of_Art_Sculpture_Garden_-_Fountain.jpg",
            "cap": "Sculpture Garden 中央喷泉 · AgnosticPreachersKid / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "dc-nmnh",
        "n": 6,
        "name": "国立自然历史博物馆",
        "en": "Smithsonian National Museum of Natural History",
        "score": 3.5,
        "tldr": "免费不需票，穹顶大象与 Sant Ocean Hall 是主目标；但大象展台 2026 年 6 月刚重做，Insect Zoo 关闭中。",
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
            "t": "禁三脚架",
            "c": "risk"
          },
          {
            "t": "部分展厅关闭",
            "c": "risk"
          }
        ],
        "highlights": [
          "Rotunda 正中那头<strong>非洲象</strong>自 <strong>1959 年</strong>就站在这里，约 <strong>11–12 吨、高 14 英尺</strong>，是全馆最上镜的居民。它是 1955 年 József Fénykövi 在安哥拉猎得的个体，标本师 Sinclair Clark 完成鞣制",
          "<strong>但有一条必须知道的变化：大象的展台已经重做。</strong>si.edu 的展览页显示新的布景「探索大象从最早的祖先到现代三个物种的演化」，<strong>展期标为 2026 年 6 月 18 日至 2029 年</strong>。<strong>也就是说你看到的不是网上流传几十年的那个经典土台造型</strong>，构图请以现场为准，不要照着老照片规划",
          "<strong>Sant Ocean Hall</strong> 于 2008 年 9 月 27 日开放，是永久展厅。核心展品是 <strong>「Phoenix」——一头真实存在的北大西洋露脊鲸的等比模型</strong>，悬在通高空间里。这个厅的蓝色环境照明是全馆最有辨识度的",
          "其余重点：<strong>Hope Diamond</strong> 在 Janet Annenberg Hooker 地质宝石矿物厅；<strong>David H. Koch Hall of Fossils「Deep Time」</strong>是 31,000 平方英尺的新改造化石厅；还有 Human Origins Hall、Mammals Hall、African Voices，以及 2026 年 6 月新开的「From These Lands」"
        ],
        "photo": "建筑 <strong>3.5/5</strong>，人像 <strong>2/5</strong>，风光 <strong>0/5</strong>。Rotunda 穹顶配大象是一个扎实的对称构图，Ocean Hall 的蓝调很有氛围；扣分是这里是全 DC 最挤的馆之一（尤其亲子客流），且多个展厅正在关闭中。",
        "shots": [
          {
            "name": "Rotunda 二层环廊俯拍大象与八角穹顶",
            "desc": "<strong>唯一正确的机位在二层环廊，不在地面。</strong>从地面拍大象只会得到一堆人头加一个逆光的象屁股；<strong>上到二层沿环廊走到大象正后方或正前方，向下俯拍</strong>，大象、八角形地面拼花与穹顶天窗会形成三层同心结构，这是这个空间被设计出来的样子。<strong>16–24mm 竖构图</strong>可同时收进穹顶与地面；<strong>35–50mm 只拍大象与地面拼花</strong>更干净。<strong>时段务必选 10:00 开馆后的头 30 分钟</strong>——这是全馆人流曲线最低的窗口，10:30 之后 Rotunda 会持续满人到 16:00。穹顶天窗是主光源，与阴影处光比约 4–5 EV，<strong>为大象皮肤测光并让天窗过曝</strong>，f/4、ISO 1600、1/80s。<strong>禁三脚架</strong>，靠环廊栏杆稳定机身。坐标取 OSM way/66418787。",
            "view": [
              38.891252,
              -77.025972
            ]
          },
          {
            "name": "Sant Ocean Hall 与露脊鲸模型「Phoenix」",
            "desc": "<strong>全馆最好的氛围机位。</strong>环境照明是深蓝色、亮度很低，鲸鱼模型悬在通高空间中央。<strong>16–24mm 站在厅的一端向斜上方拍</strong>，让鲸鱼的曲线横贯画面、下方带进仰头看的观众做尺度参照。<strong>技术上这是本区最暗的机位之一：f/1.8–f/2.8、ISO 6400、1/40s</strong>，并开机身防抖。<strong>白平衡千万不要用自动</strong>——整厅是单一蓝色光源，自动白平衡会把蓝色全部中和掉，拍出一片灰白，<strong>那个蓝正是这个厅唯一值得拍的东西</strong>。请锁 4500–5000K 保留蓝调，或拍 RAW 后期决定。<strong>此厅在建筑内部、无独立 OSM 实体，省略坐标，地图上不会有针脚。</strong>"
          },
          {
            "name": "Madison Drive 北立面与穹顶外景",
            "desc": "新古典主义立面配科林斯柱廊与中央绿色穹顶，1910 年开放的老楼。<strong>立面朝北（Madison Drive 在 Mall 一侧）</strong>，在 9 月底至 10 月底基本全天处于自身阴影中。<strong>因此最好的处理是日落前后拍侧面：9/25 的 18:00–19:00、10/22 的 17:20–18:20</strong>，太阳方位转到 258–269°，会斜擦到建筑的西端与穹顶顶部，<strong>穹顶是唯一能吃到暖光的部分</strong>，从 Mall 草坪上用 70–200mm 单拍穹顶效果最好。要拍完整立面就退到 Mall 中央用 24–35mm，接受阴影下的均匀光。<strong>坐标为依 OSM 建筑轮廓北缘推算至 Madison Drive，非实体节点。</strong>",
            "view": [
              38.8919,
              -77.025972
            ]
          }
        ],
        "access": {
          "book": "<strong>不需预约，不需任何票。</strong>官方明确「No tickets are required」",
          "ticket": "<strong>免费</strong>",
          "hours": "官方原文：<strong>「The museum is open seven days a week from 10 a.m. to 5:30 p.m., except December 25.」</strong>并特别注明<strong>「At 5:30 p.m., the doors close and all visitors must exit the building.」</strong>——17:30 是硬性清场，不是最后入场。馆内商店（Ground Floor, Evans Gallery 的 Gallery Store 与 Family Store）同为 10:00–17:30",
          "parking": "<strong>无自有停车场</strong>，Madison Drive 与 Constitution Avenue 路边表位极难找。地铁 <strong>Smithsonian 站（Blue/Orange/Silver，走 Mall 出口）</strong>或 <strong>Federal Triangle 站</strong>",
          "walk": "Smithsonian 站 Mall 出口到 Madison Drive 入口约 <strong>600 米 / 8 分钟</strong>；Federal Triangle 站约 <strong>450 米 / 6 分钟</strong>。<strong>安检旺季排队 10–20 分钟</strong>，想拍空场的 Rotunda 请在 9:40 就到门口排队"
        },
        "notes": [
          "<strong>当前展厅关闭情况（据 2026 年 6 月 17 日版官方馆内地图）：</strong><strong>O. Orkin Insect Zoo 临时关闭</strong>；<strong>Q?rius Science Education Center 仅限时开放</strong>；<strong>Evans Gallery 仅限时开放</strong>；Gems & Minerals Store 标注「Opening Soon」。另有来源称 <strong>Butterfly Pavilion 已永久关闭</strong>，<strong>该永久关闭的说法未能在官方页面上找到明文确认</strong>",
          "<strong>大象展台已于 2026 年 6 月 18 日换成新布景</strong>（展期至 2029 年），请勿依据旧照片规划构图",
          "<strong>安检是全套的。</strong>官方原话：「a full security screening similar to what you might experience at the airport, except you can keep your shoes and belts on.」禁带清单含<strong>三脚架、独脚架、自拍杆、滑板、电子烟</strong>",
          "<strong>三脚架与独脚架绝对禁止</strong>，媒体需经 Press Office 批准并由馆员陪同。这个馆光线普遍偏暗又不许用架子，<strong>大光圈镜头是必需而非可选</strong>",
          "<strong>这是本区人流最大的馆</strong>，尤其周末与学校团体时段。<strong>Rotunda 与 Ocean Hall 在 10:30–16:00 之间基本没有空场可能</strong>，要么早到要么接受把人拍进去",
          "<strong>官方提示馆内会对访客进行拍摄记录用于宣传</strong>（「Visitors may be filmed…」）",
          "<strong>自带午餐必须收好</strong>，馆内无冷藏寄存"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d7/The_iconic_African_elephant_specimen_at_the_center_of_the_Smithsonian_National_Museum_of_Natural_History.jpg",
            "cap": "Rotunda 中央的非洲象 · Syed07 / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/NationalHistoryElephant.jpg",
            "cap": "二层环廊俯拍视角与八角穹顶 · Sbrools / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/98/Aerial_View_of_Elephant_in_NMNH_Rotunda%2C_1981_%288722701453%29.jpg",
            "cap": "Rotunda 俯视历史影像（1981）· Smithsonian Institution Archives / No restrictions"
          }
        ]
      },
      {
        "id": "dc-nmaahc",
        "n": 7,
        "name": "国立非裔美国人历史与文化博物馆",
        "en": "National Museum of African American History and Culture (NMAAHC)",
        "score": 4.5,
        "tldr": "青铜格栅「corona」是 DC 最好的当代建筑摄影目标；免费但每人必须有定时票，同日票每早 8:15 放。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "必须定时票",
            "c": "risk"
          },
          {
            "t": "禁三脚架",
            "c": "risk"
          },
          {
            "t": "周一 12:00 才开",
            "c": "risk"
          }
        ],
        "highlights": [
          "2016 年开馆，设计方是四家事务所组成的 <strong>Freelon Adjaye Bond/SmithGroupJJR（FAB）</strong>：Phil Freelon 任主建筑师，<strong>David Adjaye 任设计建筑师</strong>并主导了那层青铜外壳。外壳叫 <strong>corona</strong>，由 <strong>3,600 块青铜色铸铝板</strong>构成，总重 <strong>230 吨</strong>",
          "三层向上外扩的轮廓来自<strong>约鲁巴柱头（Yoruban caryatid）</strong>——西非传统木柱顶端的冠形结构。而 corona 的倾角<strong>精确对应 Washington Monument 顶石的 17 度角</strong>，连板材尺寸与排布都是参照方尖碑的石材模数定的。所以这栋楼和它旁边那根碑<strong>在几何上是咬合的</strong>，这是构图时最该利用的一点",
          "格栅上的镂空纹样<strong>取自 19 世纪 New Orleans、Charleston 与 Savannah 的装饰铁艺</strong>，那些铁艺大量由被奴役与自由的非裔工匠打造。<strong>纹样密度是可以调节的</strong>，用来控制进光量与内外透视程度——这不是纯装饰，是一套被动遮阳系统，青铜壳与玻璃幕墙之间留有空腔",
          "<strong>建筑一半以上在地下</strong>，地上五层、地下四层，基坑最深处下挖约 65 英尺打进底下的沼泽层。历史展厅按时间倒序自下而上：Concourse 3「Slavery and Freedom」→ C2「Era of Segregation」→ C1「1968 and Beyond」，<strong>全靠坡道爬升</strong>，走完是一段体力活，也是设计上刻意安排的「往上走」叙事",
          "<strong>Contemplative Court</strong> 在 Concourse 0，是历史展厅出口处的静室：一圈圆柱形水幕从<strong>上方 45 英尺高的椭圆形 oculus</strong> 倾泻而下，天光被水打散。这是全馆最好的室内画面，也是唯一「安静到可以慢下来拍」的地方"
        ],
        "photo": "建筑 <strong>5/5</strong>，风光 <strong>2.5/5</strong>，人像 <strong>3.5/5</strong>。外立面是本区第一梯队的建筑目标，青铜格栅在低角度侧光下会真的发光；扣分全在门槛——必须抢票、内部禁三脚架、艺术品展区禁拍。",
        "shots": [
          {
            "name": "15th Street NW 人行道，正对西立面",
            "desc": "<strong>这是「让格栅发光」的唯一正解机位。</strong>9 月 25 日日落方位 269°、10 月 22 日约 258°，都几乎正对西立面——也就是说<strong>日落前一小时太阳直打西墙</strong>，光从青铜板正面掠过，镂空的每一道边缘都会亮起来，而板后的空腔变成暗底，反差最大。<strong>9/25 的窗口是 17:45–19:00，10/22 是 16:50–18:20</strong>。再早光太高、格栅是平的；再晚就只剩剪影。24–70mm 竖构图能收进完整三层轮廓；<strong>换 70–200mm 压缩单层格栅做抽象纹理，出片率更高</strong>。注意青铜色在暖光下会严重偏橙，建议手动锁 5200–5600K 而不是用自动白平衡，否则相机会把整面墙拉成土黄。<strong>坐标为依 OSM 建筑轮廓（way/398810868）向西推算，非实体节点。</strong>",
            "view": [
              38.89106,
              -77.03345
            ]
          },
          {
            "name": "The Porch（Madison Drive 南入口）向北仰拍",
            "desc": "南立面配那道悬挑门廊。<strong>南面是全天有光的一面</strong>，但正午（12:52–12:59，高度角 40–50°）顶光会把格栅拍平，别在那时来。<strong>真正好的是 15:30–17:00：太阳方位约 215–250°，同时斜照南面与西面</strong>，门廊在墙上投出长条阴影，格栅立体感最强。16–24mm 贴近门廊柱子向上仰，让 corona 的三层出檐在画面上层层退开。<strong>这里也是唯一能把 corona 与 Washington Monument 放进同一画面的位置</strong>——退到 Madison Drive 草坪上，用 24–35mm 横构图，把方尖碑放在画面右侧，两者 17 度的倾角关系就出来了。坐标取 OSM 门廊构筑物 way/898560007 中心。",
            "view": [
              38.890738,
              -77.032703
            ]
          },
          {
            "name": "Contemplative Court 水幕静室（室内首选）",
            "desc": "<strong>全馆最值得拍的室内空间，也是最难曝光的。</strong>顶部 oculus 是唯一强光源，与四周深色石材的光比通常在 <strong>7–9 EV</strong>。<strong>禁三脚架，所以放弃慢门丝滑水幕的想法</strong>——改用两种思路：一是 <strong>1/125s 以上、f/2–f/2.8、ISO 3200–6400 定格水珠</strong>，水幕会呈颗粒状垂线；二是靠在墙上手持 1/15–1/30s 加机身防抖赌一张，水会有轻微拉丝。测光务必<strong>对准石壁中间调并让 oculus 过曝</strong>，如果为天窗压曝光，整个空间会黑得没有细节。35mm 或 24mm 竖构图，把 oculus 放在画面顶端三分之一处。人流在 11:00–14:00 最密，<strong>建议订当天最早的入场时段（10:00）先直下 Concourse 3，逆着人流走到这里时大约 10:40–11:00，是最空的窗口</strong>。此处在地下且无独立 OSM 实体，<strong>省略坐标，地图上不会有针脚</strong>。"
          },
          {
            "name": "corona 内侧四／五层观景走廊向 Mall 外拍",
            "desc": "上层展厅（Community / Culture Galleries）外圈是沿 corona 内侧走的走廊，<strong>青铜格栅在此变成一层现成的前景滤网</strong>，透过它可以拍 Washington Monument、Federal Triangle 的红瓦屋顶与整条 Mall。<strong>最佳时段 16:30–18:00</strong>：外面亮、室内暗，把焦点放在远处建筑上、让格栅虚化成一层青铜色的网，是这栋楼独有的画面。<strong>反过来对焦在格栅上、让远景虚化</strong>也成立，可拍纹样特写。35–85mm，f/2.8–f/4。注意<strong>玻璃幕墙就在格栅内侧，会产生反光</strong>，镜头贴上去或用手掌／衣服在镜头周围挡光。坐标取 OSM 建筑轮廓 way/398810868 几何中心。",
            "view": [
              38.891062,
              -77.032704
            ]
          }
        ],
        "access": {
          "book": "<strong>必须持免费定时票（timed-entry pass），所有人不论年龄都要有，包括婴儿</strong>。官方已确认<strong>目前仍然要求定时票</strong>（这一点历史上反复变过，2019 年曾按淡旺季区分、9–2 月工作日可 walk-in，现在<strong>没有淡季豁免了</strong>）。放票有两个渠道：<strong>（1）提前票按滚动方式提前 30 天释放</strong>；<strong>（2）同日票每天上午 8:15 ET 之前在线释放</strong>，仅限网络、不在现场发。每个账号一次最多订 <strong>9 张</strong>，10 人以上须走 group passes。<strong>官方明确写「The museum cannot always accommodate walk-up visitors」，没票基本进不去。</strong>退役军人、现役军人与急救人员例外：无需提前订票，现场出示军方或工作证件并填表即可入场，<strong>可带最多 4 名同行者</strong>。订票入口 <a href=\"https://nmaahc.si.edu/visit/plan-your-visit\" target=\"_blank\" rel=\"noopener\">nmaahc.si.edu/visit</a>。实务建议：<strong>先按 30 天提前票抢，抢不到再蹲 8:15 同日票</strong>，旺季同日票常在几分钟内清空，请提前登录 Smithsonian 账号、把人数填好等着刷",
          "ticket": "<strong>免费</strong>（定时票本身也免费，无手续费）",
          "hours": "官方口径：<strong>周二至周日 10:00–17:30；周一 12:00–17:30</strong>；联邦假日当天 10:00 开门；<strong>仅 12 月 25 日闭馆</strong>。<strong>持票者可从票面时间起入场，最晚 16:00</strong>（团体票有 2 小时宽限期），之后按容量决定、不保证放行。<strong>周一晚开两小时是很容易踩的坑</strong>，别把周一上午安排到这里",
          "parking": "<strong>无自有停车场。</strong>周边 Constitution Ave 与 15th Street 有路边计时表位但极难找；Ronald Reagan Building 停车楼日均约 $26，是最近的正规选择。强烈建议乘地铁：<strong>Federal Triangle 站（Blue/Orange/Silver）或 Smithsonian 站（走 Mall 出口）</strong>",
          "walk": "Federal Triangle 站到 Constitution Ave 入口约 <strong>500 米 / 7 分钟</strong>；Smithsonian 站到 Madison Drive 的 Porch 入口约 <strong>700 米 / 10 分钟</strong>。<strong>过安检排队旺季要另加 15–25 分钟</strong>，请按票面时间提前半小时到"
        },
        "notes": [
          "<strong>三脚架、独脚架、自拍杆一律禁止</strong>，安检直接拦下，没有寄存以外的余地。禁带清单还包括食品饮料、剪刀、喷雾罐（含防狼喷雾）、工具",
          "<strong>官方 FAQ 明文规定「Photography of fine art is prohibited」</strong>，即艺术品展区（主要在四／五层的 Visual Arts 部分）禁止拍摄。其余展厅无闪光手持拍摄允许",
          "<strong>Emmett Till 纪念展区完全禁止拍照。</strong>多个第三方来源一致提及，现场有明确告示，<strong>但该条未能在 si.edu 官方页面上找到明文表述</strong>。无论如何请遵守——这是一个放着遗体照片的纪念空间，不是机位",
          "<strong>所有人必须走金属探测门</strong>，包手检或过 X 光。入口在 <strong>Madison Drive（南）与 Constitution Avenue（北）</strong>两处，票在哪边都能扫",
          "<strong>不要早于票面时间到</strong>，官方明确要求「Please do not arrive before the entry time」，早到会被请到一边等",
          "馆内动线设计成从地下往上走，<strong>官方与多数攻略建议留 4–6 小时</strong>。如果只为摄影，2–2.5 小时够用：Contemplative Court 加上层格栅走廊是核心，历史展厅光线极暗且人挤，不是出片的地方",
          "如果票实在抢不到，<strong>外立面本身就值得单独跑一趟</strong>——corona 是从街上免费可见的，日落西立面那个机位不需要任何票"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/db/National_Museum_of_African_American_History_and_Culture_in_February_2020.jpg",
            "cap": "corona 青铜格栅外立面 · Frank Schulenburg / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/National_Museum_of_African_American_History_and_Culture_and_Washington_Monument.jpg",
            "cap": "与 Washington Monument 同框，可见 17 度倾角关系 · Mdy66 / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/78/Interior_of_the_National_Museum_of_African_American_History_and_Culture_%28NMAAHC%29_looking_south.jpg",
            "cap": "格栅内侧向南望 Mall · Scott218 / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "dc-castle",
        "n": 8,
        "gone": "本次无法入内（9 月 7 日后重新关闭）",
        "name": "史密森尼「城堡」与 Enid A. Haupt 花园",
        "en": "Smithsonian Castle and the Enid A. Haupt Garden",
        "score": 2,
        "tldr": "城堡 9 月 7 日后重新关闭至 2027 年以后，本次进不去；但 Haupt 花园与红砂岩外立面仍可自由拍摄。",
        "tags": [
          {
            "t": "室内关闭至 2027+",
            "c": "risk"
          },
          {
            "t": "花园正常开放",
            "c": "free"
          },
          {
            "t": "外景免费",
            "c": "free"
          },
          {
            "t": "施工围挡",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>先讲清楚为什么这是一张红卡。</strong>Castle 自 <strong>2023 年 2 月</strong>起关闭进行五年期、约 <strong>5.3 亿美元</strong>的现代化改造（外立面与内部修缮、系统更换、抗震加固），这是它 50 多年来第一次大修。为配合建国 250 周年，施工<strong>暂停</strong>，建筑在 <strong>2026 年 5 月 22 日至 9 月 7 日</strong>（Labor Day）临时开放，一层部分区域可进，每日 8:30–17:30，还办了「American Aspirations」特展（该展本身只到 8 月 10 日）。<strong>9 月 7 日之后重新关闭</strong>：WTOP 报道是「关到 2027 年」，Washington Examiner 引述 Smithsonian 施工方称整个项目还需「四到五年」完成",
          "<strong>结论：late September 至 late October 的到访会正好错过这个窗口两到三周。这一年里唯一能进城堡的 109 天刚好在你到达前结束。</strong>同样的命运也落在旁边的 <strong>Arts and Industries Building</strong> 上——它只开放 6 月 16 日至 9 月 7 日（展览「Voices and Votes: Exploring Democracy Across America」），之后一并关闭。<strong>请不要按今年夏天的新闻报道来规划</strong>",
          "<strong>但花园完全不受影响，这是本条目的救赎。</strong>Smithsonian Gardens 官方明确：「During construction on the Smithsonian Castle, the Enid A. Haupt Garden will remain open. Pedestrian routes on both sides of the Castle will allow access from the National Mall to the National Museum of African Art, the National Museum of Asian Art, and the garden.」<strong>城堡两侧的人行通道保持通行，花园每日 dawn–dusk 开放，免费无票</strong>",
          "<strong>Haupt Garden 本身就是个有意思的东西：它是一座 4.2 英亩的屋顶花园。</strong>1987 年 5 月 22 日开放，<strong>底下埋着三座地下博物馆</strong>——Arthur M. Sackler Gallery、National Museum of African Art 与 S. Dillon Ripley Center。你在草坪上走的其实是别人的屋顶。设计由建筑师 Jean Paul Carlhian、景观建筑师 Lester Collins、Sasaki Associates 与 Smithsonian 园艺部创始主任 James Buckler 合作完成",
          "花园分三段：中央是<strong>几何刺绣式花坛（embroidered parterre）</strong>，按季轮换植栽；东侧邻 Sackler 是<strong>亚洲风格园</strong>；西侧邻非洲艺术馆是<strong>摩尔风格园</strong>。周边配 19 世纪铸铁园艺家具与玉兰。<strong>Independence Avenue 一侧的入口铁门是依 James Renwick Jr. 的原设计复制的</strong>——Renwick 正是 Castle 的建筑师。（顺带一提，这个「屋顶」多年来一直渗水，也是本轮工程要处理的问题之一）",
          "Castle 建筑本体：<strong>James Renwick Jr.</strong> 设计，<strong>1855 年落成</strong>，<strong>红色 Seneca 砂岩</strong>砌成的诺曼／罗曼式复兴风格，是 Smithsonian 的第一座建筑与象征性总部，比南北战争还早。<strong>它的外立面从街上完全可见且免费，这才是本次真正可拍的东西</strong>"
        ],
        "photo": "建筑 <strong>3.5/5</strong>（仅外景）， 风光 <strong>3/5</strong>，人像 <strong>3/5</strong>。红砂岩塔楼在低角度暖光下非常上镜，配 Haupt 花园的对称花坛是一组可靠的构图；<strong>但内部的 Great Hall 本次完全无法进入，Smithsonian Visitor Center 也随之关闭</strong>，评分按「只能拍外面」计。",
        "shots": [
          {
            "name": "Haupt Garden 中轴向北拍 Castle 南立面",
            "desc": "<strong>本条目的招牌机位，也是唯一能把「城堡」拍成城堡的角度。</strong>站在花园中央的刺绣花坛南端、沿中轴向北，红砂岩塔楼群会完整地立在花坛后面，<strong>24–35mm 横构图</strong>把花坛的几何图案作为前景。<strong>南立面朝南，是全天有光的一面——这是它比北立面好拍得多的原因。</strong><strong>最佳时段 16:00–18:00（9 月）／15:10–17:20（10 月）</strong>：太阳方位转到 225–265°，斜照南立面与西侧塔楼，<strong>红砂岩在低角度暖光下会显出很深的橙红</strong>，这是它最好的状态。正午顶光会让砂岩发白发平，务必避开。<strong>10 月下旬花坛已换成秋季植栽、周边玉兰开始转色</strong>，比 9 月下旬更有层次。坐标取 OSM Haupt Garden 实体。",
            "view": [
              38.888258,
              -77.026003
            ]
          },
          {
            "name": "Jefferson Drive（Mall 一侧）拍 Castle 北立面与塔楼天际线",
            "desc": "北立面正对 National Mall，是最经典的明信片角度，<strong>但朝北意味着 9 月底至 10 月底几乎整天在自身阴影里</strong>。两个解法：<strong>（1）日出后一小时（9/25 07:00–08:15，10/22 07:25–08:40）</strong>，太阳方位 91–110° 且低，会斜擦到东侧塔楼；<strong>（2）日落前一小时，太阳转到 258–269°，斜擦西侧塔楼与钟楼顶部</strong>——<strong>此时只有塔尖吃到暖光而楼身在阴影中，反差最强，是这个立面最好的一张</strong>，用 70–200mm 单拍塔尖。要拍完整立面就退到 Mall 草坪中央用 24mm，接受平光。<strong>注意：改造期间北立面周边有施工围挡与设备，2023 年前那种干净前景已不存在</strong>，构图请尽量抬高视线或用长焦裁掉地面。<strong>坐标为依 OSM Smithsonian Institution Building 实体（relation/7393969）向北推算至 Jefferson Drive，非实体节点。</strong>",
            "view": [
              38.8892,
              -77.025947
            ]
          },
          {
            "name": "Independence Avenue 的 Renwick 复制铁门",
            "desc": "花园南入口那对铁门是<strong>依 Renwick 原设计复制的</strong>，铸铁镂空纹样细密，<strong>是很好的框景元素</strong>：站在门外用 35–50mm 透过门洞拍进去，让铁门做暗色前景框、花园与城堡在框内。<strong>最佳 16:30–18:00</strong>，此时门内亮门外暗，框景效果最明显。<strong>85–135mm 拍铸铁纹样的局部抽象</strong>也成立，侧光勾边最好。<strong>坐标为依 OSM Haupt Garden 实体向南推算至 Independence Avenue 入口，非实体节点。</strong>",
            "view": [
              38.8879,
              -77.026003
            ]
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>（花园与外景无票务）。<strong>城堡室内本次无法预约也无法进入</strong>。花园有免费导览：<strong>3 月 13 日至 10 月 30 日每周五 10:00</strong>，5 月起加开<strong>每周三 10:00</strong>，视天气而定，最新排期见 <a href=\"https://gardens.si.edu/plan-your-visit/\" target=\"_blank\" rel=\"noopener\">gardens.si.edu</a>",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>Castle 室内：关闭。</strong>si.edu 的口径是「part of the first floor is open <strong>through September 7, 2026</strong>」，此后重新关闭，<strong>官方尚未公布永久重开日期</strong>。<br><strong>Enid A. Haupt Garden：每日 dawn 至 dusk，仅 12 月 25 日闭园。</strong>换算成钟点：9 月 25 日约 <strong>06:32–19:26</strong>、10 月 22 日约 <strong>06:57–18:47</strong>（按民用晨昏光时刻）。<strong>这是本区唯一能覆盖日出与日落全时段的点位</strong>，也是它在城堡关门后仍值得来的主要理由。<br>参考：同属 Smithsonian Gardens 的 <strong>Freer Courtyard Garden 每日 10:00–17:30</strong>，<strong>Kogod Courtyard 每日 11:30–19:00</strong>",
          "parking": "<strong>无自有停车场</strong>，Independence Avenue 与 Jefferson Drive 表位极少。地铁 <strong>Smithsonian 站（Blue/Orange/Silver）出口就在 Castle 西侧约 150 米</strong>，是本区最近的地铁接驳",
          "walk": "Smithsonian 站到 Haupt Garden 主机位约 <strong>250 米 / 4 分钟</strong>。<strong>花园与 NMNH 之间沿 Mall 步行约 500 米 / 7 分钟</strong>，与 NMAAHC 约 900 米 / 12 分钟，很容易串在一起"
        },
        "notes": [
          "<strong>这张卡是红色的原因只有一个：城堡室内进不去。</strong>花园、外立面、两侧通道全部正常，<strong>请不要因为红卡就跳过这个点位</strong>——它仍然是 Mall 南侧最好的一个日落外景机位",
          "<strong>随城堡一同关闭的还有 Smithsonian Visitor Center 与 Castle Café。</strong>如果你原本打算把这里当作 Mall 的信息与休息中转站，<strong>请改用 NMNH 或 NGA</strong>",
          "<strong>Arts and Industries Building 同样只到 9 月 7 日</strong>，本次一并进不去。这两栋楼常被攻略推荐为「城堡组合」，现在都不成立",
          "<strong>南 Mall 园区（South Mall Campus）改造施工仍在进行</strong>，花园周边与城堡外围有围挡、机械与临时通道。<strong>具体哪几条小径被临时封闭会随施工推进变化，未能预先确认</strong>，出发前查一次 gardens.si.edu 的日历",
          "<strong>花园内禁三脚架、独脚架与自拍杆</strong>——Smithsonian 的器材禁令明确覆盖「in our museums <em>and gardens</em>」，室外花园不例外。这是很多人会误判的一条",
          "花园地处地下博物馆屋顶，<strong>草坪与花坛区域请勿踩踏</strong>，园艺部对植栽维护要求较严，有工作人员巡视",
          "<strong>停摆时花园会关。</strong>2025 年 10 月停摆期间 Haupt Garden 挂出闭园牌，Wikimedia Commons 上有当时的照片存证。本次窗口已由 CR 覆盖"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Smithsonian_Castle%2C_Viewed_from_the_Enid_A._Haupt_Garden_%282014%29.jpg",
            "cap": "从 Haupt 花园看城堡南立面，即招牌机位 · Rizka / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/7c/The_Smithsonian_Castle_in_Winter.jpg",
            "cap": "红色 Seneca 砂岩塔楼群 · Northern-Virginia-Photographer / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Enid_Haupt_Garden_%286965483747%29.jpg",
            "cap": "Haupt 花园刺绣式花坛 · Payton Chung / CC BY 2.0"
          }
        ]
      }
    ]
  }
];
