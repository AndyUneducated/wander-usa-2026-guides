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
            "url": "img/reading-terminal-market-53587020195-2e4196f4.jpg",
            "cap": "市场大厅通道与摊位招牌 · ajay_suresh / CC BY 2.0"
          },
          {
            "url": "img/reading-terminal-market-3399715590-f703ae7a.jpg",
            "cap": "摊位与混合色温的实际观感 · Quinn Dombrowski / CC BY-SA 2.0"
          },
          {
            "url": "img/reading-terminal-market-2-a79e1437.jpg",
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
            "url": "img/elfreth-s-alley-streetscape-911d9636.jpg",
            "cap": "巷道街景与鹅卵石路面 · Sam Nabi / CC BY-SA 4.0"
          },
          {
            "url": "img/elfreth-s-alley-from-2nd-street-f5c8ff70.jpg",
            "cap": "自 N 2nd Street 西端望入（即主机位视角） · Beyond My Ken / CC BY-SA 4.0"
          },
          {
            "url": "img/elfreth-s-alley-south-side-from-front-street-c6e9382c.jpg",
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
            "url": "img/philadelphia-city-hall-tower-bf1d87f0.jpg",
            "cap": "钟塔与 William Penn 铜像 · Nickvud / CC BY-SA 4.0"
          },
          {
            "url": "img/philadelphia-city-hall-south-3cbdbe8f.jpg",
            "cap": "南立面与 Broad Street 轴线方向 · Magiluke / CC BY-SA 4.0"
          },
          {
            "url": "img/city-hall-2013-philadelphia-pa-3af5faf7.jpg",
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
            "url": "img/christ-church-philadelphia-12-2021-edited-1ebc8534.jpg",
            "cap": "Christ Church 立面与 1754 年塔尖 · Al R / CC BY-SA 2.0"
          },
          {
            "url": "img/christ-church-interior-5bec2526.jpg",
            "cap": "中殿柱廊与 Palladian 式圣坛窗 · J. Passepartout / CC BY-SA 4.0"
          },
          {
            "url": "img/christ-church-burial-ground-21dabc1f.jpg",
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
            "url": "img/liberty-bell-with-independence-hall-748ac37c.jpg",
            "cap": "自由钟与玻璃墙后的独立厅（招牌视线） · Abhiram Juvvadi / CC BY-SA 4.0"
          },
          {
            "url": "img/independence-hall-reflected-in-the-glass-of-the-liberty-bell-442cccb0.jpg",
            "cap": "独立厅倒映在玻璃上、钟透过玻璃可见 · Impala402 / CC BY-SA 4.0"
          },
          {
            "url": "img/independence-hall-and-liberty-bell-center-8ecd4077.jpg",
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
            "url": "img/chestnut-street-in-front-of-independence-hall-eff52992.jpg",
            "cap": "Chestnut Street 正立面机位视角 · Myotus / CC BY-SA 4.0"
          },
          {
            "url": "img/independence-hall-008-7f5f714d.jpg",
            "cap": "钟塔与正立面（阴天均匀光的效果） · Foolish Productions Photography / CC BY-SA 4.0"
          },
          {
            "url": "img/independence-hall-philadelphia-20240528-01d813ec.jpg",
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
            "url": "img/museum-of-the-american-revolution-53590618560-e76a3680.jpg",
            "cap": "3rd & Chestnut 街角外观 · ajay_suresh / CC BY 2.0"
          },
          {
            "url": "img/museum-of-the-american-revolution-joy-of-museums-3-4230d42b.jpg",
            "cap": "常设展厅内景（低照度加射灯的典型条件） · GordonMakryllos / CC BY-SA 4.0"
          },
          {
            "url": "img/museum-of-the-american-revolution-23134ba7.jpg",
            "cap": "博物馆建筑全景 · Frances 84 28 / CC BY-SA 4.0"
          }
        ]
      }
    ]
  },
  {
    "id": "philadelphia-parkway",
    "name": "Philadelphia · Benjamin Franklin Parkway 与博物馆区",
    "navName": "Philly Parkway",
    "color": "#7c5cff",
    "lead": "这一区的骨架是一条 2.08 公里的斜轴。<strong>从 Philadelphia Museum of Art 东阶顶量到 City Hall 塔，方位角实测 134.7°；反过来从 City Hall 望向美术馆是 314.7°</strong>（由 OSM 实体坐标 39.96557／-75.18092 与 39.95240／-75.16358 算得）。Benjamin Franklin Parkway 是 1917–1926 年由 Jacques Gréber 按巴黎 Champs-Élysées 的逻辑硬切进费城 1682 年正交网格里的，所以它与周围街道全部斜交——<strong>这条斜轴既是本区最强的构图资产，也决定了每一个机位的最佳钟点。</strong>本区七个点里<strong>三个完全免费且 24 小时可拍</strong>（美术馆东阶与东露台、Swann Fountain、Boathouse Row 与 Fairmount Water Works 外景），真正需要买票的四个里<strong>只有 Eastern State Penitentiary 是不可替代的摄影目的地</strong>，而它恰好是全区唯一允许架三脚架的室内空间。",
    "callouts": [
      {
        "type": "good",
        "title": "Parkway 轴线的太阳几何：最佳一小时是上午 10:00–10:45，不是日落",
        "html": "<p><strong>先说结论：在 9 月末到 10 月末这个窗口里，太阳从不落在 Parkway 的轴线上。</strong>日落方位从 9 月 25 日的 <strong>269.2°</strong> 移到 10 月 22 日的 <strong>256.1°</strong>，离轴线的 314.7° 差着 45–59 度；日出方位从 <strong>90.7°</strong> 移到 <strong>103.9°</strong>，离 134.7° 也差着 31–43 度。<strong>「夕阳沉在 Parkway 尽头」这张照片在秋季拍不到。</strong></p><p><strong>但真正有用的几何是另一件事：太阳方位每天都会扫过 134.7°。</strong>9 月 25 日约在 <strong>10:40</strong>（太阳高度约 39°），10 月 22 日约在 <strong>10:03</strong>（高度约 26°）。那一刻太阳<strong>正在你的正后方</strong>，反日点恰好落在 314.7° 上——也就是说<strong>站在美术馆东阶顶朝东南望，整条 Parkway、两侧行道树、Logan Square 的圆环与尽头的 City Hall 塔全部处于完全正面受光、影子全部藏在物体背后的状态</strong>。这是本区唯一一次「轴线对齐」，也是全天光线信息量最大的一小时。</p><p><strong>执行口径：把 10:00–10:45 锁死给 Parkway 轴线，两端都成立。</strong>美术馆东阶顶朝东南（134.7°）与 City Hall 一侧朝西北（314.7°）在同一时刻同时顺光。<strong>十月比九月更好用</strong>：太阳低 13 度，行道树的立体感与路面的长影都更强，而且时刻更早（10:03 比 10:40 人少得多）。</p><p>顺带一个推论：<strong>美术馆东立面（Greek Revival 神庙正面）的法向就是 134.7°</strong>，所以它受光区间是太阳方位 44.7°–224.7°，即<strong>从日出一直到约 15:10（9/25）／15:25（10/22）</strong>，而 10:40／10:03 那一刻是正打。<strong>这面墙秋季全天有光，跟 Old City 那些朝北的立面完全相反。</strong></p>"
      },
      {
        "type": "warn",
        "title": "Eastern State Penitentiary：10 月 2 日–11 月 7 日被 Halloween Nights 占据，白天照常开但要付代价",
        "html": "<p><strong>结论先给：白天的历史参观在整个秋季照常运营，不停、不缩短、不需要额外买 Halloween 的票。</strong>easternstate.org 的 Hours of Operation 页原文为 <strong>「March – November: Open Daily, 10:00 a.m. to 5:00 p.m.」</strong>，官网首页另注明<strong>最后入场 16:00</strong>。而 Halloween Nights 的官方口径是<strong>「open select nights from October 2 through November 7, 2026」</strong>，是<strong>夜场</strong>，与白天时段不重叠。</p><p><strong>代价在两处，都要算进来：</strong></p><ul><li><strong>① 五座鬼屋的实体布景整个 10 月都留在牢房区里。</strong>官方 FAQ 自己写 Halloween Nights 用的是「Hollywood-quality sets, props, and special FX makeup」，并逐一列出五座鬼屋的名字（<strong>Dark Tides、Big Top Terror、Machine Shop、Nightmares、The Crypt</strong>）。这些是搭在真实牢房与工场空间里的实体布景，不可能每天早上拆掉晚上再装回去。<strong>官方从未公布哪些牢房在白天因布景而关闭，也从未承认白天体验被降级</strong>——官网仍宣传白天可看「historic cellblocks、Death Row、Al Capone's Cell」。但按常识与官方自己的措辞推断，<strong>10 月的白天你会在部分空间里看到搭好的布景、围挡与器材</strong>，「1829 年的废墟本身」这个纯粹状态会被稀释。<strong>这一条属于推断，未能从官方渠道逐字确认。</strong>想拍纯废墟就把这一站排在 <strong>9 月 30 日之前</strong>——这是本区唯一一条真正影响日期选择的硬约束。</li><li><strong>② 白天导览团缩班。</strong>官方原文「Starting September 8, 2026: Guide-led tours are available at 12:00 pm on weekdays; 11:00 am on Saturdays and Sundays」，而夏季是每天三场（10:30／11:30／12:30）。<strong>自助音频导览不受影响、全天可进、不限停留时长。</strong></li></ul><p><strong>价格（官方 FAQ 逐字）：白天票线上 成人 $21、老年 $19、大学生与 7–17 岁 $17；现场分别为 $23／$21／$19。夜场 Halloween Nights「Tickets start at $49」</strong>，按夜别浮动，另有 Speakeasy 加购 $20、Hospital Flashlight Tour 加购 $13（只在现场售）、停车＋摆渡 $22／$30。<strong>夜场无退换，白天票可提前 24 小时免费改退。</strong></p><p><strong>三脚架：这是全区最关键的一条政策差异。</strong><strong>白天时段三脚架是允许的，但必须另买 $10／人／天的「photography equipment pass」，且这个 pass 只能在现场售票窗口买，线上买不到</strong>（官方原文：「non-members must purchase a daily photography equipment pass if they wish to use a tripod, monopod, or easel while on site... photography equipment passes can only be purchased at the admissions window on site.」）。<strong>反过来，Halloween Nights 夜场明文禁三脚架、禁灯、禁闪光灯，五座鬼屋内完全禁拍。</strong>→ <strong>要在牢房里架三脚架做包围曝光，只有白天这一条路，而且必须到窗口现买 pass。</strong></p>"
      },
      {
        "type": "good",
        "title": "Philadelphia Museum of Art 的周五 Pay What You Wish 仍在，已延长到 2027 年 6 月 25 日",
        "html": "<p>这是本区最有价值的一条核实结果。<strong>press.philamuseum.org 于 2026 年 9 月 3 日发布的新闻稿逐字写明：「the extension of Pay What You Wish (PWYW) Friday Nights through the last Friday of its fiscal year, June 25, 2027」，「Every Friday evening after 5 p.m., visitors can choose how much to pay for admission」。</strong>原定 2026 年 9 月 4 日结束，因为周五晚客流较 2025 年同期上涨 <strong>87%</strong>（36,411 人次对 19,513 人次）而延期。资金由 William Penn Foundation 与私人捐助方补足。</p><p><strong>对你的意义：周五 17:00–20:45 可以按自己出价进馆，而正价是 $30。</strong>并且周五是<strong>唯一开到 20:45 的一天</strong>——9 月 25 日日落 18:53、10 月 22 日日落 18:12，<strong>意味着周五是全周唯一能「在馆内待到天黑、再走出来直接拍东阶蓝调」的一天</strong>。这两件事叠在一起，把周五变成本区唯一的最优日。</p><p>注意<strong>Rodin Museum 不跟着延长</strong>：它周五也只开到 17:00（详见该条目）。</p>"
      },
      {
        "type": "info",
        "title": "各馆开放时间与闭馆日一览（本次逐一核实）",
        "html": "<ul><li><strong>Philadelphia Museum of Art 主馆</strong>：周一 10:00–17:00、<strong>周二与周三闭馆</strong>、周四 10:00–17:00、<strong>周五 10:00–20:45</strong>、周六日 10:00–17:00。成人 $30、老年 $28、学生 $14、<strong>18 岁及以下免费</strong>；票含两天与同日 Rodin Museum。</li><li><strong>Rodin Museum</strong>：<strong>周一 10:00–17:00、周二／周三／周四三天闭馆</strong>、周五／周六／周日 10:00–17:00。<strong>建议票价（pay what you wish）成人 $15</strong>。</li><li><strong>The Barnes Foundation</strong>：<strong>周四至周一 11:00–17:00，周二与周三闭馆</strong>（会员 10:00 起）。成人 $30、老年 $28、<strong>大学生与 13–18 岁各 $5</strong>、12 岁及以下免费；含特展、<strong>票有效两天</strong>。</li><li><strong>Eastern State Penitentiary</strong>：<strong>3 月至 11 月每日 10:00–17:00，最后入场 16:00，秋季无每周闭馆日</strong>。</li><li><strong>Cathedral Basilica of Saints Peter and Paul</strong>：周日 8:00–19:30、<strong>周一至周五 7:00–17:00</strong>、周六 9:00–18:30。免费。</li><li><strong>Swann Memorial Fountain、Boathouse Row、Fairmount Water Works 外景、美术馆东阶与东露台：全部露天、24 小时、免费。</strong></li></ul><p><strong>把三个闭馆日叠起来看，周二和周三是本区的死亡日</strong>：美术馆、Rodin、Barnes 三家同时闭馆，只剩 Eastern State、Cathedral 与全部露天点位。<strong>周四 Rodin 单独闭馆</strong>（美术馆与 Barnes 都开），这是最容易踩的坑。<strong>Barnes 11:00 才开门</strong>，正好与上午 10:00–10:45 的轴线时段不冲突。</p>"
      },
      {
        "type": "tip",
        "title": "日出日落、方位与秋色时间窗",
        "html": "<p>坐标取美术馆 39.96557／-75.18092。<strong>2026 年美国夏令时到 11 月 1 日才结束，整个 9 月末至 10 月末窗口全部是 EDT</strong>，以下时刻均为 EDT（自算，NOAA 太阳位置算法）：</p><ul><li><strong>9 月 25 日</strong>：日出 <strong>06:52</strong>（方位 <strong>90.7°</strong>），日落 <strong>18:53</strong>（方位 <strong>269.2°</strong>），正午 12:52 高度 <strong>49.0°</strong>。</li><li><strong>10 月 5 日</strong>：日出 07:02（95.8°），日落 18:37（264.2°），正午高度 45.1°。</li><li><strong>10 月 15 日</strong>：日出 07:12（100.7°），日落 18:22（259.4°），正午高度 41.3°。</li><li><strong>10 月 22 日</strong>：日出 <strong>07:19</strong>（方位 <strong>103.9°</strong>），日落 <strong>18:12</strong>（方位 <strong>256.1°</strong>），正午 12:45 高度 <strong>38.8°</strong>。</li><li><strong>10 月 31 日</strong>：日出 07:29（108.0°），日落 18:00（252.0°），正午高度 35.8°。</li></ul><p>黄金时段按日落前 45 分钟：9/25 <strong>18:08–18:53</strong>，10/22 <strong>17:27–18:12</strong>。蓝调按日落后 15–35 分钟：9/25 <strong>19:08–19:28</strong>，10/22 <strong>18:27–18:47</strong>。<strong>10 月末的蓝调在 18:30 前后结束，比九月早四十分钟——这直接决定 Boathouse Row 的到场时间。</strong></p><p><strong>秋色：费城是全宾州最晚变色的一角，这一点对本区很重要，因为 Parkway 三条林荫带与 Fairmount Park 都是画面主体。</strong>fallphotoguide.com 给 Philadelphia County 的 2026 年窗口是 <strong>10 月 16–24 日</strong>；morethanjustparks.com 的县级预报把费城定在 <strong>10 月 22 日前后（全州最晚的一个县）</strong>，并自陈误差带约 ±13 天；mywild.report 与 uncoveringpa 的口径都是「late October – early November」。<strong>综合判断：可用的秋色从 10 月 18 日左右开始，最佳区间 10 月 22 日–11 月 3 日。</strong>→ <strong>如果秋色是目标，把行程压到窗口的最后一周（10 月 20–26 日）</strong>：这一周同时满足秋色起色、太阳 10:03 扫过轴线、Swann 喷泉大概率还在运行三件事。<strong>9 月末来的话，行道树基本还是绿的，这不是失败，只是换成拍建筑与光线而不是拍色彩。</strong>注意各家都是模型推算而非实测，<strong>2026 年的实际峰值未能从官方渠道确认</strong>，出发前刷 PA DCNR 的每周 fall foliage report。</p>"
      },
      {
        "type": "info",
        "title": "三脚架政策逐家核实（差异极大，请照抄）",
        "html": "<ul><li><strong>Eastern State Penitentiary（白天）：允许，但需另买 $10／人／天的 photography equipment pass，且只能在现场售票窗口购买。</strong>这是本区唯一明文允许三脚架的室内空间，而它恰好是唯一真正需要三脚架的地方（塌顶天窗下的极高动态范围）。<strong>Halloween Nights 夜场则明文禁三脚架、禁灯、禁闪光。</strong></li><li><strong>The Barnes Foundation：禁三脚架，但个人拍摄本身是允许的。</strong>官方原文「Photography for personal use is allowed, unless otherwise posted. No flash, tripods, or selfie sticks.」<strong>这一条推翻了「Barnes 收藏展厅禁止摄影、只能拍建筑」的常见说法——不成立。</strong>另注意人多时馆方会要求停止拍摄与写生以维持动线。</li><li><strong>Philadelphia Museum of Art：禁三脚架、禁独脚架、禁自拍杆、禁闪光</strong>，常设展厅可手持拍摄，部分特展会在入口标示禁拍。<strong>东阶与东露台是室外公共空间，三脚架不受馆内政策约束。</strong></li><li><strong>Rodin Museum</strong>：官方 Visitor Policies 只写「Flash is not permitted — but take lots of pictures!」与禁背包上身、禁大包与自拍杆，<strong>没有逐字提到三脚架</strong>。按同机构主馆政策执行、建议一律手持。花园内的<strong>团体</strong>摄影需事先申请书面许可（个人拍摄不需要）。</li><li><strong>Cathedral Basilica：官网只发布了婚礼摄影师的作业规程，没有面向游客的一般摄影与三脚架政策。这一项未能从官方渠道确认，请一律手持、不要架设。</strong></li><li><strong>Swann Fountain、Boathouse Row 两岸步道、Fairmount Water Works 外围、美术馆东阶与 Eakins Oval：全是公共道路与公园，三脚架自由。</strong></li></ul>"
      },
      {
        "type": "good",
        "title": "本区没有联邦停摆风险，也没有脚手架",
        "html": "<p><strong>这七个点里没有一个是联邦运营的</strong>：美术馆与 Rodin 属 Philadelphia Museum of Art（市属非营利），Barnes 与 Eastern State 是独立 501(c)(3)，Cathedral 归 Archdiocese of Philadelphia，Swann Fountain、Boathouse Row 与 Fairmount Water Works 归 Philadelphia Parks &amp; Recreation 与 Fairmount Park Conservancy。<strong>联邦拨款问题与本区完全无关，不需要任何停摆预案</strong>（供参考：Public Law 119-103 已于 2026 年 9 月 2 日解决拨款至 12 月 11 日）。</p><p><strong>Frank Gehry 的美术馆改造已经结束，现在没有工程。</strong>$2.33 亿的 <strong>Core Project 于 2021 年 5 月 7 日完工开放</strong>，内容是打通首层与地面层、恢复 640 英尺长的 Vaulted Walkway、新增约 2 万平方英尺展厅（McNeil 与 Dietrich 两组新展厅）、把礼堂改成 Williams Forum。<strong>Gehry 母版规划里还有一期「在东露台地下挖出新展厅与礼堂」，这一期已被明确无限期搁置</strong>：Inquirer 2026 年 7 月 26 日的报道引馆长 Weiss 原话「It is not, at this time, appropriate for us to be evaluating the feasibility of a very substantial new capital project」，背景是全馆约 <strong>$3 亿的递延维护欠账</strong>与连年赤字。Gehry 已于 2025 年底去世。</p><p><strong>对拍摄的直接意义：东露台与东阶完全没有工程围挡，是干净的。</strong>唯一的实际影响是<strong>北侧的 Perelman Building 自疫情起关闭至今未重开</strong>（那是一栋 1926 年的 Art Deco 建筑，OSM 39.96796／-75.17927），外观仍可从街上拍，但进不去，别把它排进计划。<strong>2026 年未见任何一家场馆有外墙脚手架或展厅关闭的报道。</strong></p>"
      }
    ],
    "spots": [
      {
        "id": "boathouse-row-fairmount",
        "n": 1,
        "name": "船屋街与费尔芒特水厂",
        "en": "Boathouse Row & Fairmount Water Works",
        "score": 5,
        "tldr": "灯已确认在用：2024 年 3 月换过全新 6,400 颗 LED 系统，黄昏自动点亮、约 22:00 熄。免费。",
        "tags": [
          {
            "t": "完全免费 24 小时",
            "c": "free"
          },
          {
            "t": "灯已确认正常",
            "c": "free"
          },
          {
            "t": "黄昏亮至约 22:00",
            "c": "free"
          },
          {
            "t": "10/24–25 有大型赛艇赛",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>先回答灯的问题：灯是好的，而且是全新的。</strong>旧系统长期饱受<strong>连接故障与频繁断电</strong>之苦，<strong>Fairmount Park Conservancy 自 2023 年起主导了一次 210 万美元的彻底更换</strong>（照明设计 The Lighting Practice，资金来自 Joanna McNeil Trust 与费城市政府），<strong>全新系统于 2024 年 3 月揭幕</strong>：<strong>6,400 颗独立 LED、1,600 万种色彩组合</strong>，可做渐变、ombre 与「闪烁／流动」的动态场景，2025 年拿了 IES Philadelphia 的照明设计荣誉奖。<strong>2026 年 6–7 月还为费城主办的 FIFA World Cup 场次做过多轮「国家色」灯光秀</strong>，<strong>可以确认系统在 2026 年运行正常。</strong>",
          "<strong>点亮时间：黄昏自动点亮，亮到约 22:00。</strong>「自动」意味着它跟着光感器走而不是固定钟点，<strong>换算成你的窗口：9 月 25 日约 19:00–19:15 亮起（日落 18:53），10 月 22 日约 18:20–18:35 亮起（日落 18:12）</strong>。<strong>这个时间差是本条目最关键的执行细节</strong>：<strong>灯亮的那十几分钟正好压在蓝调的中段</strong>（10/22 蓝调 18:27–18:47），也就是说<strong>你只有大约 15–25 分钟的窗口，让「天空还有蓝色」与「灯已经亮」同时成立</strong>。早了灯没亮，晚了天空变死黑、水面失去反射的蓝底。<strong>另注意特别活动的灯光会从日落一直亮到日出</strong>（节庆与赞助场次），而且<strong>任何人都可以付费预订当晚的颜色</strong>（boathouserowlights.org）——<strong>所以你那天晚上看到的可能不是经典的白色轮廓灯，而是某个婚礼的粉色</strong>。这不是故障，是它的运营模式，<strong>出发当天可以去那个网站看当晚有没有预订。</strong>",
          "<strong>这些灯的来历很值得知道：它们是为了阻止拆房子而装的。</strong>1970 年代这排维多利亚船屋已经严重失修，<strong>市里在认真讨论把它们拆掉</strong>。照明设计师 <strong>Ray Grenald 听说这件事之后，主动提议给每栋房子勾一圈轮廓灯</strong>——理由是「夜里被看见的建筑才会被珍惜」。<strong>1979 年灯装上去，房子保住了</strong>，这排船屋 1987 年列入 National Register of Historic Places，2005 年改成 LED 并加上电脑控色。<strong>换句话说，这是一个「用照明救下一片历史街区」的完整案例</strong>，也是你拍的这张照片真正的内容。",
          "<strong>船屋本身是 Schuylkill Navy 的家</strong>——这个成立于 <strong>1858 年</strong>的赛艇联盟是<strong>全美最古老的业余体育管理机构</strong>。共 15 栋（门牌 1–15 Boathouse Row／Kelly Drive），大多是 19 世纪建筑，<strong>其中 1 号是 Lloyd Hall，是唯一对公众开放的一栋（公共活动中心，有洗手间）</strong>，OSM 坐标 39.96895／-75.18524。<strong>实测这排房子从 4 号（39.96929／-75.18637）到 15 号（39.96991／-75.18976）全长约 297 米、走向 283°／103°</strong>——这个数字直接决定了焦段选择（见机位）。",
          "<strong>山坡下的 Fairmount Water Works 是同一组照片里第二个主体，而且它的地位被严重低估。</strong>1812–1822 年由 Frederick Graff 设计建成，<strong>是美国第一个大型市政供水系统</strong>——把蒸汽泵房与配水设施做成一组临水的 Greek Revival 神庙，<strong>在 19 世纪它是全美头号旅游景点</strong>，Charles Dickens 与 Mark Twain 都专程来看过。后来它当过 <strong>Philadelphia Aquarium（1911–1962）</strong>，再后来当过游泳池，现在是免费的 Fairmount Water Works Interpretive Center。<strong>它就在美术馆那座小山的正下方（OSM 39.96634／-75.18356，距 Boathouse Row 中心 477 米、方位 316°），两者可以在同一次黄昏里连着拍完。</strong>"
        ],
        "photo": "夜景与蓝调 <strong>5/5</strong>，建筑 <strong>4.5/5</strong>，风光 <strong>4.5/5</strong>，秋色 <strong>4.5/5</strong>，人像 <strong>3/5</strong>。本区唯一的一流夜景题材，完全免费、三脚架自由、且 10 月下旬能同时拍到秋色；扣分只在西岸机位需要走一段路，以及那 15–25 分钟的窗口容错极低。",
        "shots": [
          {
            "name": "西岸 MLK Drive Trail（招牌反射机位）",
            "view": [
              39.97112,
              -75.19141
            ],
            "desc": "<strong>坐标为 OSM 的 Martin Luther King Junior Drive Trail 路径中心（way/1196533826），在 Schuylkill 西岸。从此点看船屋群：中心方位 119°、距离 386 米；15 号在 134°／195 米，4 号在 115°／475 米——也就是说这排房子只占约 18° 的方位角，视觉上是一条向远处递退的斜线，而不是正面展开的一排。</strong><strong>这正是那张经典照片的实际几何：灯光的山墙轮廓一栋接一栋往深处排开，水面把整条线原样翻下来。</strong><strong>到场时间（本机位唯一真正重要的参数）：日落前 20 分钟到位、架好、构图完成。</strong><strong>9 月 25 日 18:35 到（日落 18:53，灯约 19:00–19:15 亮，蓝调 19:08–19:28）；10 月 22 日 17:50 到（日落 18:12，灯约 18:20–18:35 亮，蓝调 18:27–18:47）。</strong><strong>可拍的窗口只有 15–25 分钟，不要在灯亮之后才开始找机位——那时窗口已经过半。</strong>视线方位 119°（东南偏东），<strong>太阳落在你身后的 256°–269°</strong>，所以<strong>日落前后船屋是正面暖光、身后天空会出现粉紫的反暮光带（Belt of Venus）</strong>，这是灯亮之前那二十分钟里另一张完全不同的照片，值得一并拍。<strong>焦段（按实测 297 米长、386 米远算）：35mm 覆盖约 397 米——刚好整排加余量；50mm 覆盖约 278 米——覆盖大部分，是密度最好的选择；70mm 覆盖约 199 米（约三分之二）；135mm 覆盖约 103 米，抽 3–4 栋做特写。</strong><strong>结论：整排用 35–50mm，压缩特写用 70–135mm，24mm 只在想把美术馆的山头一起收进时用。</strong><strong>曝光（水面反射的关键）：三脚架、ISO 100–200、f/8、手动模式，快门从 4 秒起试，按天空的蓝色定曝光而不是按灯定。</strong><strong>4–8 秒是这里的甜点</strong>：足够把水面的涟漪抹平成镜面、把灯的反射拉成完整的竖直光柱；<strong>短于 2 秒水面会碎成一堆断续的光点，反射不成形；长于 20 秒天空的蓝会被推过头、灯的暖色会溢出。</strong><strong>白平衡固定在 3800–4200K</strong>（让灯保持暖白、让天空保持蓝，自动白平衡会把两者都拉成灰）。<strong>关掉长曝降噪</strong>（会让每张多等一倍时间，而你只有 20 分钟）。<strong>建议对同一构图拍一组不同快门（2／4／8／15 秒），回去再挑水面质感。</strong><strong>这是公共步道，三脚架完全自由。</strong>"
          },
          {
            "name": "Fairmount Water Works 与栈道（美术馆山坡下）",
            "park": [
              39.96838,
              -75.1842
            ],
            "view": [
              39.96634,
              -75.18356
            ],
            "desc": "<strong>坐标为 OSM 的 Fairmount Water Works 节点（node/367975478）；停车点为 OSM 的 Lloyd Hall / Art Museum Trailhead 停车场（way/756360183）。临水栈道为 OSM way/705043631（39.96773／-75.18477）。</strong><strong>这里是同一次黄昏里的第二站，也是「船屋拍完之后往哪走」的答案</strong>（Water Works 距船屋中心 477 米、方位 316°）。<strong>Greek Revival 的泵房群直接坐在水面上、后面是美术馆所在的山头</strong>，<strong>「河—神庙—山上的神庙」三层叠压是这里独有的构图。</strong><strong>最佳两段：① 日落前 45 分钟的黄金光</strong>（9/25 18:08–18:53、10/22 17:27–18:12；太阳在西南低空，白色石构与柱廊被暖光正打，河面有金色反光）；<strong>② 蓝调加建筑照明</strong>（泵房夜间有泛光）。<strong>注意这两段与西岸船屋机位在时间上是冲突的——一个黄昏只能认真做一处，请先决定主目标。</strong>折中方案是<strong>把 Water Works 排在黄金时段（日落前）、然后立刻走到西岸赶蓝调</strong>，但两处相距约 800 米、需过 MLK Bridge，<strong>步行 10–12 分钟，时间很紧，必须提前走一遍路线。</strong>焦段：<strong>24–35mm 拍「栈道＋泵房＋山上的美术馆」的三层关系</strong>，<strong>50mm 拍单栋泵房的柱廊正立面</strong>，<strong>85–135mm 从栈道压缩、把泵房与山顶的美术馆叠在一起</strong>。<strong>低机位贴近水面用 24mm 拍倒影是这里的加分项</strong>（这一段水面比河道主流平静得多）。<strong>三脚架自由。</strong><strong>Interpretive Center 免费，但只开周三至周六 10:00–17:00，你在费城的 10/19（周一）与 10/20（周二）两天它都关着</strong>——室内当作看不到即可。室外的栈道、坝体与泵房外观全天可拍，不受馆方时间约束，而这里的主体本来就是外景。"
          },
          {
            "name": "Lloyd Hall 与东岸步道（船屋近景与赛艇）",
            "view": [
              39.96895,
              -75.18524
            ],
            "desc": "<strong>坐标为 OSM 的 Lloyd Hall Recreation Center（way/60945606），即 1 号船屋，是全排唯一对公众开放的一栋（有洗手间）。</strong><strong>东岸是拍「船屋的建筑细节与赛艇活动」的一侧，不是拍灯光全景的一侧</strong>（贴太近，看不到整排也看不到反射）。<strong>最佳 07:00–09:00</strong>：<strong>这是赛艇训练的时段——天没亮就有人扛着单人艇下水</strong>，而且此时太阳在东南低空（9/25 08:00 高度 12°、方位 102°；10/22 08:00 高度 7°、方位 111°），<strong>船屋朝河（西南）的一面处于柔和的阴面，而河面有低角度的顺光反射</strong>，是拍人与艇的最好条件。<strong>次佳 15:30–17:30</strong>（西南光正打在船屋临河立面上，维多利亚式的山墙、雨篷与彩绘木饰细节最立体）。焦段：<strong>35mm 沿步道拍船屋的连续立面</strong>，<strong>85–200mm 拍河面上的赛艇（长焦压缩能把艇与背景的船屋叠在一起，这是最好的一张）</strong>，<strong>50mm 拍单栋船屋的门廊与船库大门</strong>。<strong>快门 1/500 以上定住桨叶与水花。</strong><strong>2026 年 10 月 24–25 日是 Head of the Schuylkill Regatta</strong>——那两天这里有全美规模最大的赛艇赛之一，<strong>题材极好但人极多，而且 MLK Drive 那两天不封车（市政府为赛事运营开放机动车通行）</strong>。<strong>三脚架自由，但赛事日请不要占住步道。</strong>"
          }
        ],
        "access": {
          "book": "<strong>不需预约、不需票</strong>",
          "ticket": "<strong>全部免费</strong>（Fairmount Water Works Interpretive Center 也免费）",
          "hours": "<strong>船屋外景、Kelly Drive 东岸步道、MLK Drive Trail 西岸步道与 Water Works 外围：公共公园与步道，全天开放。</strong><strong>灯光：黄昏自动点亮、亮到约 22:00</strong>（换算到你的窗口：9/25 约 19:00–19:15 亮，10/22 约 18:20–18:35 亮）。<strong>特别活动的灯光会从日落亮到日出</strong>，且<strong>任何人可付费预订当晚颜色（boathouserowlights.org）——当晚颜色无法提前保证。</strong><strong>Fairmount Water Works Interpretive Center：周三至周六 10:00–17:00，周日至周二闭馆——10/19、10/20 两天进不去，只拍外景。</strong>Lloyd Hall（1 号船屋）作为公共活动中心开放，<strong>具体时间未能从官方渠道确认</strong>，但它是这一带唯一的公共洗手间来源。",
          "parking": "<strong>Lloyd Hall / Art Museum Trailhead 停车场</strong>（OSM way/756360183，39.96838／-75.18420），紧邻船屋东端，<strong>费率未能从官方渠道确认</strong>；也可用 Philadelphia Museum of Art Parking Garage（39.96715／-75.18202）。<strong>西岸机位：MLK Drive 每周六 07:00 至周一 07:00 对机动车封闭</strong>（2026 年 3 月 28 日至 11 月 29 日，另加 10 月 10–12 日 Indigenous Peoples' Day 周末），<strong>所以周末想开车到西岸机位是不行的，只能走或骑过去</strong>；工作日 MLK Drive 通车。<strong>例外：2026 年 10 月 24–25 日 Head of the Schuylkill Regatta 期间 MLK Drive 不封车。</strong>",
          "walk": "<strong>从 Philadelphia Museum of Art 到船屋东端约 700 米 / 9 分钟</strong>（方位 308°）。<strong>东岸到西岸机位必须过 MLK Drive Bridge</strong>（该桥 2023 年 3 月起做了 2,010 万美元的整修，<strong>2025 年 9 月已重新开放，新增一条 10.5 英尺宽的共享道</strong>），<strong>从 Lloyd Hall 走到西岸 MLK Drive Trail 的机位约 800 米 / 10–12 分钟</strong>。<strong>Schuylkill River Trail 与 MLK Drive Trail 在这一段完全贯通</strong>：2026 年 5 月的 MLK Drive 路面维护工程官方明确说明<strong>「The MLK Drive trail will remain open and will not be affected by the maintenance work」</strong>，<strong>2026 年未见任何影响本段步道的施工或改道。</strong>"
        },
        "notes": [
          "<strong>本条目最重要的一条：灯是新的、是好的。</strong>2024 年 3 月完成 210 万美元的全系统更换（6,400 颗 LED），2026 年 6–7 月的 World Cup 灯光秀可以确认它在正常运行。<strong>「黄昏自动点亮、约 22:00 熄」是官方口径</strong>",
          "<strong>可拍窗口只有 15–25 分钟</strong>：<strong>10 月 22 日请 17:50 到位、9 月 25 日请 18:35 到位</strong>，<strong>灯亮之后才开始架机器就已经晚了</strong>",
          "<strong>当晚的灯是什么颜色无法提前保证</strong>：任何人都可以付费预订整晚的颜色（婚礼、纪念日、企业赞助都可以）。<strong>出发当天可以查 boathouserowlights.org</strong>；看到粉色或彩虹色不是故障",
          "<strong>西岸机位的视角是「递退的斜线」而不是「正面展开的一排」</strong>（船屋群只占约 18° 方位角）。<strong>整排用 35–50mm，特写用 70–135mm</strong>",
          "<strong>水面反射的关键是 4–8 秒</strong>：短于 2 秒反射会碎成断续光点，长于 20 秒天空会过。<strong>ISO 100–200、f/8、白平衡固定 3800–4200K、关掉长曝降噪</strong>",
          "<strong>MLK Drive 周末对机动车封闭</strong>（每周六 07:00 至周一 07:00，2026 年 3 月 28 日至 11 月 29 日，另加 10 月 10–12 日）。<strong>周末去西岸只能步行或骑行</strong>，但反过来说，封车的周末西岸步道更安静好拍",
          "<strong>2026 年 10 月 24–25 日是 Head of the Schuylkill Regatta</strong>：题材极佳（全美最大规模的赛艇赛之一）但人流巨大，<strong>而且那两天 MLK Drive 例外地对机动车开放</strong>，西岸步道会同时有车流与人流",
          "<strong>Schuylkill River Trail 与 MLK Drive Trail 在这一段 2026 年完全贯通、无施工改道</strong>；MLK Drive Bridge 已于 2025 年 9 月整修完成重开、新增 10.5 英尺共享道",
          "<strong>Water Works 与西岸船屋的黄金／蓝调时段互相冲突</strong>，一个黄昏只能认真做一处。想两处都要就先拍 Water Works 的黄金光、再赶 800 米过桥拍西岸蓝调，<strong>但请务必提前走一遍这条路</strong>",
          "<strong>两岸步道秋季日落后照明有限、人烟稀少</strong>，带头灯（或手机灯）、不要单独在完全无人的路段久留，器材不要离身",
          "<strong>本条目由 Philadelphia Parks &amp; Recreation 与 Fairmount Park Conservancy 运营，不受联邦拨款影响</strong>"
        ],
        "images": [
          {
            "url": "img/boat-houses-at-night-2442597025-2a6f7be3.jpg",
            "cap": "入夜后的灯光轮廓与水面反射（即西岸机位效果） · Matt B / CC BY-SA 2.0"
          },
          {
            "url": "img/boathouse-row-oct-2024-ed3499d9.jpg",
            "cap": "十月的船屋群与河岸秋色 · Domaking9000 / CC BY-SA 4.0"
          },
          {
            "url": "img/fairmount-water-works-at-dusk-b71bb0d3.jpg",
            "cap": "黄昏的 Fairmount Water Works 与美术馆山坡 · SkipL / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "eastern-state-penitentiary",
        "n": 2,
        "name": "东州监狱",
        "en": "Eastern State Penitentiary",
        "score": 5,
        "tldr": "本区最强的室内摄影目标，也是唯一允许三脚架的地方（$10 现场加购）；但 10 月牢房里会有 Halloween 布景。",
        "tags": [
          {
            "t": "线上 $21 / 现场 $23",
            "c": "paid"
          },
          {
            "t": "三脚架需 $10 现场加购",
            "c": "risk"
          },
          {
            "t": "10 月有鬼屋布景",
            "c": "risk"
          },
          {
            "t": "每日 10:00–17:00",
            "c": "free"
          }
        ],
        "highlights": [
          "<strong>1829 年启用，是「penitentiary」这个词的字面来源</strong>——它不是一座普通监狱，而是一场关于「悔罪」（penitence）的建筑实验。英国建筑师 John Haviland 的<strong>放射状平面（radial plan）</strong>把七条牢房翼像车轮辐条一样从中央看守塔发散出去，看守站在圆心就能一眼看穿所有走廊。这套「Pennsylvania System」的核心是<strong>绝对单独关押</strong>：囚犯从入监到出监全程独处、被带出牢房时头上套着面罩，理论上通过孤独与劳动获得内省。<strong>它建成时是全美造价最高的建筑，并被超过 300 座监狱直接抄袭</strong>，从南美到日本，是美国出口到世界最成功的建筑类型之一。",
          "<strong>反直觉的两件事，都很值得知道：</strong><strong>① 每间牢房原本都有独立的小庭院和一扇天窗</strong>，天窗被称作「the Eye of God」——单人牢房里唯一的光源开在天花板正中，设计意图是让囚犯感到被神注视。这些天窗现在大量塌落，<strong>正是今天这里最强的摄影元素</strong>。<strong>② Charles Dickens 1842 年专程来看它，然后写了一篇极其严厉的批判</strong>，称这种单独关押是「a slow and daily tampering with the mysteries of the brain」，比肉体刑罚更残酷。他是对的：这套制度最终因导致精神崩溃而在 1913 年被废除。监狱在 <strong>1971 年关闭，随后被弃置二十余年，1994 年才作为「stabilized ruin」（稳定化的废墟）对公众开放</strong>——注意这个词：<strong>馆方明确选择「不修复」，只做结构加固</strong>，所以剥落的漆、塌陷的天窗、长在走廊里的树都是刻意保留的。",
          "<strong>这里唯一真正需要三脚架的原因是动态范围。</strong>拱顶牢房走廊内部照度极低（没有人工照明补光），而塌落的天窗直接开向天空，<strong>实测光比常在 10–14 EV</strong>，超出任何单张 RAW 的宽容度。手持只能二选一：要么天窗炸成纯白，要么走廊黑成一团。<strong>所以「能不能架三脚架」这件事在这里不是舒适度问题，而是能不能出片的问题。</strong>",
          "<strong>关于三脚架政策，请把官方原文记牢：白天允许，但要另买 $10 的 photography equipment pass，而且这个 pass 只能在现场售票窗口买，线上买不到。</strong>官方措辞是「non-members must purchase a daily photography equipment pass if they wish to use a tripod, monopod, or easel while on site... photography equipment passes can only be purchased at the admissions window on site」。<strong>会员则白天入场与 equipment pass 全年都免费。</strong>反过来，<strong>Halloween Nights 夜场明文「Tripods, monopods, easels, lights, and other photography equipment are not permitted」「No flash photography」，且五座鬼屋内完全禁拍</strong>。→ <strong>结论：拍这个地方只有白天一条路，而且到了先去窗口买 pass。</strong>",
          "<strong>秋季的时间成本必须说清：Halloween Nights 在 2026 年 10 月 2 日至 11 月 7 日的「select nights」运营。</strong>白天的历史参观<strong>不受影响、照常每日 10:00–17:00</strong>，但两件事会变：<strong>① 五座鬼屋（Dark Tides、Big Top Terror、Machine Shop、Nightmares、The Crypt）的「Hollywood-quality sets and props」整月留在牢房与工场空间内</strong>——官方从未公布白天哪些区域因此关闭，也从未承认体验降级，<strong>但布景不可能每天装拆，这属于合理推断而非官方确认</strong>；<strong>② 白天导览团自 9 月 8 日起从每天三场缩到一场</strong>（工作日 12:00、周六日 11:00），自助音频导览不受影响。<strong>要拍纯粹的废墟状态，唯一的办法是排在 9 月 30 日之前——这是本区唯一一条真正影响日期选择的硬约束。</strong>",
          "<strong>另一件实务上很重要的事：这里有铅漆。</strong>馆方在官网提供了一份关于 lead-based paint hazard 的公开声明。那些著名的、层层剥落的墙面就是铅漆。<strong>不要用手去摸剥落面、拍完洗手再吃东西。</strong>另外全场地面高低不平、石缘锐利，官方明确要求<strong>不穿凉鞋、人字拖、露趾鞋与高跟鞋</strong>。"
        ],
        "photo": "建筑与废墟 <strong>5/5</strong>，纪实 <strong>4.5/5</strong>，细节质感 <strong>5/5</strong>，人像 <strong>3/5</strong>，风光 <strong>1/5</strong>。题材独一无二、允许三脚架、可以慢慢磨（音频导览票不限停留时长）；扣分只在 10 月的 Halloween 布景污染与受限的外墙机位。",
        "shots": [
          {
            "name": "Cellblock 7 与拱顶走廊（塌顶天窗下）",
            "park": [
              39.96753,
              -75.17269
            ],
            "view": [
              39.96834,
              -75.17267
            ],
            "desc": "<strong>坐标为 OSM 监狱建筑轮廓中心（way/320052082）；停车点坐标为 OSM 的 Tour Entrance（way/50193080，在 Fairmount Avenue 一侧）。各条牢房翼在这个多边形内部，无独立 OSM 实体。</strong><strong>最佳时段 10:00–11:30。</strong>理由不是光「好」，而是天窗的光此时是<strong>斜射的</strong>（9/25 的 10:30 太阳高度 38°、10/22 的 10:30 为 30°），光柱会在地面与侧墙上拉出可见的形状；<strong>正午 12:30–13:00 太阳高度 39–49° 接近顶光，光直接砸在地上、走廊侧墙全黑，是最差的时段。</strong>下午 15:00 之后天窗光已弱，走廊会整体压暗、氛围最重但细节丢得多。<strong>阴天是这里的隐藏最优解</strong>：光比从 12 EV 掉到 5–6 EV，一张 RAW 就能拿下，还能保住剥落漆的层次。<strong>曝光与包围的具体做法：架三脚架、ISO 100、f/8、手动模式，按天窗测光定最亮那张，然后向暗部做五张包围（相对中间值 -4／-2／0／+2／+4 EV）</strong>，总跨度 8 EV 通常够；<strong>光比特别大的走廊做 7 张、间隔 2 EV</strong>。用<strong>反光镜预升或电子前帘、加 2 秒延时或快门线</strong>，木地板与砖地在人走动时会传震。焦段：<strong>16–24mm 沿走廊中轴拍拱顶的一点透视（这是招牌构图）</strong>，35mm 拍单间牢房门与门内的光，<strong>85–135mm 从走廊一端压缩，把一排拱门叠成重复的几何</strong>，100mm 微距拍剥落漆的层理。<strong>白平衡固定在 5000–5600K</strong>（唯一光源是天光，自动白平衡会被暖色砖墙带偏）。<strong>务必先在售票窗口买 $10 的 photography equipment pass 再进场</strong>，否则三脚架落地就会被制止。"
          },
          {
            "name": "Al Capone 牢房与 Death Row",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于监狱建筑体内）。</strong>Al Capone 的牢房被按 1929 年他实际服刑时的状态复原——<strong>有东方地毯、镶木家具、落地灯与一台收音机</strong>，和隔壁的空牢房形成极强的对比，这个对比本身就是内容。<strong>问题是它有隔断、只能从门口拍，站位固定、进深很浅。</strong><strong>做法：24–35mm 贴到隔断上，用橡胶遮光罩顶住玻璃消反射</strong>；室内是暖色人工布光，<strong>白平衡压到 2800–3200K</strong>，ISO 1600–3200、f/2.8、1/50。<strong>三脚架在这里反而没什么用</strong>（门口是通行动线、光是恒定人工光），手持更灵活。<strong>Death Row 是另一种气质</strong>：空间更窄、更规整、几乎没有装饰，35mm 拍一排铁门的重复，光全靠走廊尽端的天光。<strong>这两处是全场人最密的点位，请排在 10:00 开门后的第一波或 16:00 之后。</strong>"
          },
          {
            "name": "Fairmount Avenue 一侧的外墙与瞭望塔",
            "view": [
              39.96753,
              -75.17269
            ],
            "desc": "坐标为 OSM 的 Tour Entrance（way/50193080），入口在 2027 Fairmount Avenue。<strong>这是唯一的免费机位：外墙不用买票就能拍。</strong>30 英尺高的石砌城墙、哥特复兴式的碉楼与瞭望塔围了整整一个街区，而<strong>紧贴墙外就是 Fairmount 的维多利亚式排屋</strong>——「城市生活直接抵着一座监狱高墙」这个并置是这里最有意思的城市构图。<strong>Fairmount Avenue 是东西向街道（费城网格偏转 9°，走向约 99°／279°），南向的正立面法向约 189°，所以正午前后正面受光。</strong><strong>最佳 15:00–16:30</strong>：太阳转到西南（10/22 的 16:00 高度 22°、方位 232°），石材的粗面质感被侧光完全带出来、碉楼在墙上投出长影；正午顶光会把整面墙拍成一片灰。<strong>次佳是蓝调</strong>（10/22 约 18:27–18:47），高墙变成剪影、后面排屋的窗透出暖光。<strong>24mm 沿人行道纵向拍墙的透视（墙很长，广角能把它拍成一条压过来的斜线）</strong>，<strong>50mm 拍「排屋屋顶＋墙＋瞭望塔」的三层叠压</strong>，135mm 单抽塔楼。<strong>这是公共人行道，三脚架自由、不需要任何 pass。</strong><strong>10 月夜场期间 18:00 之后 Fairmount Avenue 近 21st Street 一侧会设上下客区，人车都多，避开。</strong>"
          }
        ],
        "access": {
          "book": "<strong>强烈建议线上预约（便宜 $2 且是定时票）</strong>，现场也可买但受当日余量限制。两种白天票二选一：<strong>Self-Guided Audio Tour</strong>（Steve Buscemi 旁白，主线 10 站约 40 分钟，之后可自由探索，<strong>停留时长不限</strong>）或 <strong>Guide-Led Tour &amp; Discussion</strong>（45 分钟带讲，<strong>2026 年 9 月 8 日起只有工作日 12:00 与周六日 11:00 各一场</strong>）。<strong>拍照请选 Self-Guided</strong>——跟团会被时间与路线绑死。白天票<strong>可在到访前 24 小时免费改期或退款</strong>（发邮件到 support@easternstate.org）；<strong>Halloween Nights 等特别活动一律不退不换</strong>。<strong>$10 的 photography equipment pass 无法线上购买，必须现场窗口买。</strong>",
          "ticket": "官方 FAQ 原文：<strong>线上 成人 $21、老年 $19、大学生与 7–17 岁 $17；现场 分别为 $23、$21、$19</strong>。会员白天免费。<strong>三脚架／独脚架／画架另需 $10／人／天的 photography equipment pass（仅现场窗口售、当日有效）；会员免费。</strong>优惠：Museums for All／ACCESS Card／SEPTA Key REDUCED FARE 持卡人白天 <strong>$2</strong>（可带 4 人）；残障访客白天 $2，付费陪护人免费；费城高中生凭学生证白天免费（STAMP 项目）；持 SEPTA Key 卡线上买成人票减 $2。<strong>以上优惠一律不适用于 Halloween Nights。</strong><strong>Halloween Nights 夜场「Tickets start at $49」</strong>，按夜别与场次浮动；加购 The Speakeasy $20（线上或现场）、Hospital Flashlight Tour $13（仅现场）、停车＋摆渡 $22 线上／$30 现场。<strong>外墙与瞭望塔在 Fairmount Avenue 人行道上拍摄完全免费。</strong>",
          "hours": "官方原文（easternstate.org/historic-site/hours-of-operation）：<strong>「March – November: Open Daily, 10:00 a.m. to 5:00 p.m.」</strong>，官网首页另注明音频导览<strong>「Available every day from 10 am to 5 pm (last entry 4 pm)」</strong>。→ <strong>9 月末至 10 月末每日开放，秋季没有每周闭馆日。</strong>全年只闭 New Year's Day、Thanksgiving、Christmas Eve、Christmas Day。<strong>Halloween Nights 为 2026 年 10 月 2 日–11 月 7 日的 select nights 夜场，「Opening and closing times vary each night, based on demand」，与白天时段不重叠。</strong>大多数访客在场约两小时，<strong>但音频导览票不限停留时长，认真拍可以待到闭馆。</strong>",
          "parking": "<strong>官方明确说明自己没有停车场。</strong><strong>最好用的是免费路边车位：官方原文指出 22nd Street（面对入口时的左侧）与 Brown Street（后墙一侧）「on the Eastern State side of the street, parallel parking is free and unlimited」</strong>——注意只有<strong>贴监狱那一侧</strong>免费不限时，对面不行。另有商业停车场在 22nd &amp; Fairmount，<strong>费率需致电 Parkway Corporation (267) 765-3665</strong>。<strong>Halloween Nights 夜场停车另设在 Philadelphia Zoo 车库（3500 W. Girard Ave）＋摆渡，$22／$30。</strong>公共交通：多条 SEPTA 巴士可达，Philly PHLASH 观光巴士停靠。",
          "walk": "<strong>从 Philadelphia Museum of Art 走过来约 770 米 / 10 分钟</strong>（方位 66°，官方口径「五个街区」）。22nd Street 免费车位到 Fairmount Avenue 入口约 <strong>150–250 米 / 3 分钟</strong>。<strong>入口到 Cellblock 7 沿单向参观动线走约 5 分钟</strong>；全场是一条单向路线，<strong>走回头路要绕，进场前先想好拍摄顺序。</strong>"
        },
        "notes": [
          "<strong>本条目最重要的一条：三脚架允许，但要 $10／人／天的 photography equipment pass，且只能在现场售票窗口买、线上买不到。</strong>到了先买 pass 再进场，这是本区唯一能合法在室内架三脚架的地方，也是唯一真正需要三脚架的地方",
          "<strong>要拍纯粹的废墟就排在 9 月 30 日之前。</strong>10 月 2 日–11 月 7 日的 Halloween Nights 期间，五座鬼屋的实体布景会留在牢房与工场空间里。<strong>白天参观本身照常运营、不缩短、不需要额外买票，但「牢房里有没有布景」这一点官方从未公布，属于合理推断而非官方确认</strong>",
          "<strong>白天导览团 9 月 8 日起只剩一场</strong>（工作日 12:00、周六日 11:00）。<strong>拍照请买 Self-Guided Audio Tour 票</strong>，不限时长、自由走位",
          "<strong>现场有铅漆</strong>（馆方有正式的 lead-based paint hazard 声明）。不要触摸剥落的墙面，拍完洗手再吃东西",
          "<strong>禁凉鞋、人字拖、露趾鞋与高跟鞋</strong>（官方明文）。地面高低不平、石缘锐利，低机位与三脚架都要留意站稳",
          "<strong>禁一切武器、防狼喷雾、折刀、打火机与手电筒</strong>——<strong>注意「flashlights」也在禁止清单里</strong>，别指望带补光手电进去照亮暗走廊，只能靠包围曝光",
          "<strong>全场没有空调也没有暖气</strong>（官方原文「the building does not have climate control」），10 月的石头建筑里体感明显低于室外，多穿一层",
          "<strong>禁灵异调查（含 EVP 录音机等设备）</strong>，官方明文；也禁止模特、服装与道具拍摄（那属于需预约的商业拍摄）",
          "<strong>场内没有餐饮</strong>，但 Fairmount 街区餐厅密度很高，可以拍完就近吃",
          "<strong>本条目为独立 501(c)(3)，不受联邦拨款影响</strong>"
        ],
        "images": [
          {
            "url": "img/eastern-state-penitentiary-philadelphia-pennsylvania-04-e7e974ee.jpg",
            "cap": "拱顶牢房走廊与塌落天窗（即主机位视角） · Adam Jones, Ph.D. / CC BY-SA 3.0"
          },
          {
            "url": "img/eastern-state-penitentiary-peeling-ceiling-paint-e3dd5c0d.jpg",
            "cap": "剥落的天花漆层（注意这是铅漆，不要触摸） · Saschacat916 / CC BY-SA 4.0"
          },
          {
            "url": "img/eastern-state-penitentiary-cell-block-a-e399302e.jpg",
            "cap": "牢房翼内部的高动态范围实况 · Jersey Milt / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "philadelphia-museum-of-art-steps",
        "n": 3,
        "name": "费城艺术博物馆与「洛奇台阶」",
        "en": "Philadelphia Museum of Art · East Terrace & the \"Rocky Steps\"",
        "score": 5,
        "tldr": "东阶与东露台露天免费 24 小时；顶上回望 Parkway 的轴线视野是全美最好的城市轴景之一，最佳 10:00–10:45。",
        "tags": [
          {
            "t": "台阶露台 24 小时免费",
            "c": "free"
          },
          {
            "t": "周五 Pay What You Wish",
            "c": "free"
          },
          {
            "t": "周二周三闭馆",
            "c": "risk"
          },
          {
            "t": "馆内 $30 / 禁三脚架",
            "c": "paid"
          }
        ],
        "highlights": [
          "<strong>先把免费与付费切开，这是本条目最实用的一句话：72 级东阶、东露台、以及从露台顶回望 Parkway 的那条轴线视野，全部是露天公共空间，24 小时开放、不收一分钱、不受馆内闭馆日与三脚架政策的约束。</strong>$30 的门票买的只是室内收藏。<strong>如果你只为那张轴线照片而来，你根本不需要买票</strong>，也不需要考虑周二周三闭馆——这条视线在周二凌晨三点同样成立。",
          "<strong>那条轴线是本区最重要的几何事实。</strong>站在东阶顶朝东南望，<strong>方位 134.7°、2.08 公里外正是 City Hall 的塔与塔顶 37 英尺高的 William Penn 铜像</strong>，它被 Parkway 两侧的行道树夹在正中央（美术馆 OSM 39.96557／-75.18092 → City Hall 39.95240／-75.16358，实测方位与距离）。这不是巧合：<strong>Jacques Gréber 在 1917–1926 年设计 Parkway 时，就是按 Champs-Élysées 的逻辑把这条斜轴硬切进费城 1682 年的正交网格，两端各锚一座纪念性建筑</strong>。美国有很多好的城市景观，但<strong>「一条两公里长的林荫大道，两端各站一座巨型建筑，中间还串起一个圆形喷泉广场」这样完整的巴洛克式轴线，全美只有这里和华盛顿的 National Mall</strong>。",
          "建筑本身是 <strong>1928 年落成的 Greek Revival 神庙群</strong>，Horace Trumbauer 事务所（实际主设计者是首位取得美国建筑师执照的非裔美国人 <strong>Julian Abele</strong>）与 Zantzinger, Borie and Medary 合作完成。<strong>一个反直觉的细节：那些屋顶不是石头，是上釉的彩色赤陶</strong>——蓝、金、红的多彩瓦面直接照抄古希腊神庙原本的彩绘做法，而这正是它在低角度光下比一般灰白色古典建筑更「上色」的原因。整栋楼坐在 Faire Mount 这座小山包上，也就是 1812 年 Fairmount Water Works 蓄水池的原址。",
          "<strong>Rocky 那件事的真实版本比传说有意思：那座铜像本来不该在这里。</strong>A. Thomas Schomberg 的雕像是 <strong>1980 年为《Rocky III》做的道具</strong>，Sylvester Stallone 拍完把它捐给费城，随即引发一场关于「电影道具算不算公共艺术」的多年争论；馆方一度把它挪去 Spectrum 体育馆，1990 年代才被安置到<strong>东阶底部东北侧的地面小广场上（不在台阶上）</strong>。<strong>1976 年《Rocky》里跑的那 72 级台阶本身没有任何标记</strong>，只有台阶顶的地面上嵌着一对铜脚印。<strong>这一点决定了两个机位是分开的</strong>：拍雕像要下到台阶底，拍轴线要上到台阶顶，两者不在同一张照片里。",
          "<strong>Frank Gehry 的改造已经完全结束，现场没有工程。</strong>$2.33 亿的 Core Project <strong>2021 年 5 月 7 日开放</strong>，恢复了封闭近 50 年的 <strong>640 英尺长 Vaulted Walkway</strong>（Guastavino 拱砖天花，是室内最强的摄影目标）并新增约 2 万平方英尺展厅。<strong>原计划在东露台地下再挖一层的下一期已被无限期搁置</strong>（2026 年 7 月馆长口径，背景是约 $3 亿递延维护欠账）。<strong>好消息：这意味着东露台在你到访时是干净的、没有围挡的。</strong>"
        ],
        "photo": "建筑 <strong>5/5</strong>，城市轴景 <strong>5/5</strong>，夜景 <strong>4.5/5</strong>，室内 <strong>4/5</strong>，人像 <strong>4/5</strong>。本区唯一一个「免费、24 小时、且拿得出全美级别构图」的点位；扣分只在室内禁三脚架与东露台白天人流（跑台阶拍照的人从早到晚不断）。",
        "shots": [
          {
            "name": "东阶顶／东露台回望 Parkway 与 City Hall（本区第一机位）",
            "park": [
              39.96715,
              -75.18202
            ],
            "view": [
              39.96557,
              -75.18092
            ],
            "desc": "<strong>坐标为 OSM 美术馆建筑轮廓中心（way/28533972）；实际站位在建筑东南侧的露台边缘，约在该点东南 40–60 米（推算），地图针脚落在楼体上是正常的。</strong><strong>视线方位 134.7°，目标是 2.08 公里外的 City Hall 塔。</strong><strong>最佳时段就是一段：10:00–10:45。</strong>9 月 25 日太阳方位在 <strong>10:40</strong> 扫过 134.7°（高度 39°），10 月 22 日在 <strong>10:03</strong> 扫过（高度 26°）——此刻太阳在你正后方，<strong>反日点精确落在轴线上，整条 Parkway 零阴影、完全正面受光</strong>。<strong>10 月优于 9 月</strong>：太阳低 13 度，行道树冠有立体感、路面有长影朝远端排开，而且时刻更早（10:03 比 10:40 人少得多）。<strong>焦段是这个机位的胜负手：135–200mm 是唯一正确的选择。</strong>2 公里外的塔用 24–35mm 会缩成一个几乎看不见的小点，<strong>只有长焦压缩才能把塔撑起来、同时把两侧行道树挤成一对紧密的绿框</strong>——这才是那张著名照片的实际做法。70mm 拍「Parkway 三条林荫带加 Logan Square 圆环」的中景关系，<strong>16–24mm 只用来拍「台阶＋露台柱廊＋远处城市」的环境构图，不要用来拍轴线本身。</strong><strong>另一个完全不同的时段是蓝调</strong>（9/25 19:08–19:28、10/22 18:27–18:47）：此时 City Hall 的 LED 立面照明与 Parkway 路灯串成一条光轴，<strong>用 135mm 以上压缩、f/8、ISO 200、2–8 秒</strong>，露台是公共空间<strong>可以自由架三脚架</strong>（馆内禁三脚架的政策不覆盖室外）。注意 2 公里的长焦视线穿过整个市中心的空气，<strong>热霾与雾会明显吃掉锐度</strong>，雨后或冷锋过境后的第一个上午是最清透的。"
          },
          {
            "name": "Eakins Oval 一侧仰拍神庙立面与 72 级台阶",
            "view": [
              39.9645,
              -75.17792
            ],
            "desc": "坐标为 OSM 的 Eakins Oval 路径节点（way/12149408）。<strong>东立面法向 134.7°，所以它从日出一直亮到约 15:10（9/25）／15:25（10/22）</strong>——<strong>这跟 Old City 那些朝北的立面完全相反，这里秋季全天有光。</strong><strong>最佳两段：07:30–09:00 的低角度暖光</strong>（9/25 08:00 太阳高度 12°、方位 102°；10/22 08:00 高度 7°、方位 111°，光斜擦过柱廊，柱子在墙上投出深长的竖影，彩色赤陶屋顶被点亮），<strong>以及 14:00–15:00 的西南侧光</strong>（此时光转到立面右侧，体积感最强，且台阶上人开始变少）。<strong>正午 12:00–13:00 请回避</strong>：太阳高度 39–49°、方位 160–185°，几乎顶光，柱廊全部拍平、屋顶反光。焦段 <strong>24–35mm</strong> 拍「台阶＋立面」的完整关系（这是明信片构图），<strong>16–20mm 贴到台阶底部仰拍</strong>会把 72 级台阶拉成一道陡峭的对角线、把神庙推到画面顶端，是最有冲击力的一张；70–200mm 单独抽三角楣与赤陶瓦的彩色细节。<strong>这里全天有人在跑台阶摆拍</strong>，要么用 1/500 以上快门把他们定住当作前景人物，要么等 07:30 之前。<strong>台阶是室外公共空间，三脚架自由。</strong>"
          },
          {
            "name": "Rocky 铜像（台阶底东北侧小广场）",
            "view": [
              39.96514,
              -75.1793
            ],
            "desc": "<strong>坐标为 OSM 的 Rocky Statue 艺术品节点（node/666546019）；注意 OSM 上有两个重复的同名节点（另一个在 39.96512／-75.18032），实际雕像只有一座，位于东阶底部东北侧的地面小广场上、不在台阶上。</strong><strong>这是本条目最容易失望的机位</strong>：雕像本身只有约 8.5 英尺高、坐在一片开阔铺装里、前面几乎永远有一队人在排队摆举拳头的姿势。<strong>唯一的解法是时间：07:00–08:00 是全天唯一有可能空场的时段</strong>，而且此时低角度的东南光正打在铜像正面（9/25 07:30 太阳高度 7°、方位 97°）。构图上<strong>不要拍雕像的正面标准像</strong>——那张照片网上有一百万张。<strong>正确做法是压低到腰高、用 35mm 从雕像侧后方仰拍，把举起的拳头与背景的神庙立面叠在一起</strong>，让「道具」和「殿堂」在一个画面里发生关系，这才是这件东西真正有意思的地方。85–135mm 单抽拳头与面部的铜绿质感。三脚架自由，但排队的人不会等你。"
          },
          {
            "name": "室内 Vaulted Walkway 与 Great Stair Hall",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于美术馆建筑体内）。</strong><strong>室内真正值得拍的是建筑而不是画。</strong>两处：<strong>① Vaulted Walkway</strong>——640 英尺长、Guastavino 拱砖天花的石砌隧道，封闭近 50 年后由 Gehry 在 2019 与 2021 分两段恢复，<strong>24mm 沿中轴拍对称的一点透视，这是全馆最强的一张</strong>；<strong>② Great Stair Hall</strong>——大楼梯与顶上 Augustus Saint-Gaudens 的镀金《Diana》（1892），<strong>35mm 从入口层仰拍能同时收进楼梯的曲线与 Diana 的剪影</strong>。<strong>参数：ISO 1600–3200、f/2.8、1/60–1/125</strong>，白平衡固定 <strong>3600–4200K</strong>（天光与钨丝混合）。<strong>禁三脚架、禁独脚架、禁自拍杆、禁闪光</strong>，常设展厅可手持拍摄、部分特展入口会标示禁拍。<strong>最佳日：周五 17:00 之后</strong>——按自己出价进馆，且此时天光转蓝、Great Stair Hall 的窗变成冷色而室内灯是暖色，冷暖对比是白天拍不到的；20:45 闭馆后走出来正好接东阶蓝调。"
          }
        ],
        "access": {
          "book": "<strong>东阶、东露台、Eakins Oval 与 Rocky 铜像不需预约、不需票、24 小时可拍。</strong>室内建议线上买定时票（philamuseum.org），现场也可买；<strong>周五 17:00 之后的 Pay What You Wish 时段现场即可按自己出价入场</strong>，旺季周五晚人流大（较 2025 年同期涨 87%），建议 17:00 就到。",
          "ticket": "<strong>室外全部免费。</strong>室内：<strong>成人 $30、老年（65+）$28、持证学生 $14、18 岁及以下免费、会员免费</strong>；会员携客 $15。<strong>票含当日与次日两天，并含同日 Rodin Museum 入场</strong>（名义上也含 Perelman Building 与 Mount Pleasant／Cedar Grove，<strong>但 Perelman Building 自疫情起关闭至今未重开</strong>）。<strong>每周五 17:00–20:45 为 Pay What You Wish，已延长至 2027 年 6 月 25 日。</strong>",
          "hours": "官方原文（philamuseum.org/main-building）：<strong>「Monday 10am–5pm / Tuesday Closed / Wednesday Closed / Thursday 10am–5pm / Friday 10am–8:45pm / Saturday 10am–5pm / Sunday 10am–5pm」</strong>。→ <strong>周二与周三闭馆，周五是唯一开到 20:45 的一天。</strong><strong>东阶、东露台与 Eakins Oval 是室外公共空间，24 小时开放、不受上述时间约束。</strong>",
          "parking": "<strong>Philadelphia Museum of Art Parking Garage</strong>（OSM way/61131910，39.96715／-75.18202，在主馆北侧 Anne d'Harnoncourt Drive 上）。<strong>周五晚官方公告的车库价格是 $10</strong>，<strong>其余时段费率未能从官方渠道确认</strong>。Benjamin Franklin Parkway、N 21st Street 与 N 22nd Street 上有路边计时表位，秋季周末极难找。公共交通：SEPTA 巴士 7、32、38、43、48 路可达；<strong>最近的地铁站都在 1.5 公里以外，不推荐。</strong>",
          "walk": "车库到东露台顶约 <strong>350 米 / 5 分钟</strong>（走建筑北侧绕到东面，不用爬台阶）。<strong>Eakins Oval 到台阶顶要爬完 72 级，约 3–4 分钟</strong>；台阶底到 Rocky 铜像约 <strong>80 米 / 1 分钟</strong>。到 Eastern State Penitentiary 约 <strong>770 米 / 10 分钟</strong>（方位 66°）；到 Boathouse Row 约 <strong>700 米 / 9 分钟</strong>（方位 308°）；到 Swann Memorial Fountain 沿 Parkway 约 <strong>1.22 公里 / 15 分钟</strong>。"
        },
        "notes": [
          "<strong>本条目最重要的一条：那张轴线照片是免费的、24 小时的、且必须用 135mm 以上。</strong>广角拍不出来这个构图——2 公里外的塔在 24mm 下只有几个像素高",
          "<strong>「夕阳落在 Parkway 尽头」在 9–10 月拍不到。</strong>日落方位 269°（9/25）到 256°（10/22），轴线是 314.7°，差 45–59 度。<strong>轴线的对齐时刻是上午 10:00–10:45 的顺光，不是日落</strong>",
          "<strong>周二与周三美术馆闭馆，Rodin 还要多闭一个周四</strong>。但东阶与露台照样可拍，所以周二周三来不是灾难，只是拍不到 Vaulted Walkway",
          "<strong>周五是本区唯一的最优日</strong>：17:00 后 Pay What You Wish、开到 20:45、出来正好接东阶蓝调（10/22 蓝调 18:27–18:47，还早于闭馆）",
          "<strong>馆内禁三脚架、禁独脚架、禁自拍杆、禁闪光；室外台阶与露台完全不受此限</strong>——这条区分是本条目最容易搞混的一点",
          "<strong>东立面秋季全天有光（日出到约 15:10），别把它跟 Independence Hall 那种朝北立面混为一谈</strong>。需要回避的只有正午 12:00–13:00 的顶光",
          "<strong>Perelman Building 自疫情起关闭、至今未重开</strong>（门票名义上含它）。外观仍可从街上拍（OSM 39.96796／-75.17927），但别安排进去",
          "<strong>Gehry 的下一期地下扩建已被无限期搁置，东露台没有工程围挡</strong>，2026 年未见任何脚手架或展厅关闭的报道",
          "台阶白天全天有人跑上跑下摆拍，<strong>想拍空场只有 07:00–08:00</strong>；露台上风大，长焦拍 2 公里外的塔时三脚架要压重物"
        ],
        "images": [
          {
            "url": "img/philadelphia-skyline-eakins-oval-and-benjamin-franklin-parkw-6eaea095.jpg",
            "cap": "自东阶顶朝东南望 Parkway 与 City Hall（即第一机位视角） · Dough4872 / CC BY-SA 4.0"
          },
          {
            "url": "img/philadelphia-museum-of-art-looking-northwest-from-bottom-of--299944b4.jpg",
            "cap": "自台阶底仰望神庙立面与 72 级台阶 · Dough4872 / CC BY-SA 4.0"
          },
          {
            "url": "img/rocky-statue-philadelphia-pa-2025-03-36898bf6.jpg",
            "cap": "Rocky 铜像（在台阶底的地面广场上，不在台阶上） · Horcrux / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "rodin-museum",
        "n": 4,
        "name": "罗丹博物馆",
        "en": "The Rodin Museum",
        "score": 4,
        "tldr": "花园是主角，《地狱之门》与《思想者》在门口；票含在美术馆票内，但周二三四连闭三天、周五不延时。",
        "tags": [
          {
            "t": "含在美术馆票内",
            "c": "free"
          },
          {
            "t": "单买建议价 $15",
            "c": "paid"
          },
          {
            "t": "周二至周四闭馆",
            "c": "risk"
          },
          {
            "t": "户外花园为主",
            "c": "free"
          }
        ],
        "highlights": [
          "<strong>最容易踩的坑先说：它比主馆多闭一天。</strong>philamuseum.org/rodin-museum 的 Hours 表原文为<strong>「Monday 10am–5pm / Tuesday Closed / Wednesday Closed / Thursday Closed / Friday 10am–5pm / Saturday 10am–5pm / Sunday 10am–5pm」</strong>。→ <strong>周二、周三、周四连闭三天</strong>，而主馆只闭周二周三。而且<strong>周五它只开到 17:00，不跟着主馆延到 20:45</strong>——也就是说<strong>「周五晚上 Pay What You Wish 顺路来看 Rodin」这个想法是不成立的</strong>。注意该页面底部还挂着一份主馆的时间表（周四开、周五到 20:45），<strong>那是站点通用页脚、不是 Rodin 自己的时间，两张表在同一页上矛盾，请以上方那张为准。</strong>",
          "<strong>这栋楼的来历比它的藏品还离奇：《思想者》原本差点被放进电影院大堂。</strong>官方自述写得很清楚——<strong>1924 年 9 月，费城本地人、当时全美最大连锁影院 Stanley Corporation of America 的老板 Jules Mastbaum 第一次参观巴黎的 Musée Rodin，当天就买下第一件 Rodin 铜雕</strong>；之后两年他<strong>陆续买了逾 150 件</strong>。<strong>他最初的打算是「把《思想者》这类标志性作品摆到自己名下影院的大堂里」</strong>（官方原文：he initially intended to place iconic works like The Thinker in the lobbies of his movie theatres），后来才改主意，决定在 Benjamin Franklin Parkway 上单建一座馆。<strong>Mastbaum 在开馆前因阑尾手术并发症去世</strong>，由遗孀 Etta 与三个女儿完成，<strong>1929 年 11 月开馆</strong>，赠给费城市。",
          "<strong>建筑师是 Paul Philippe Cret 与 Jacques Gréber——后者正是 Parkway 本身的设计者。</strong>换句话说，<strong>设计这条大道的人亲自设计了大道上的一栋馆，所以它与轴线的关系是精心安排过的</strong>：从 Parkway 上看，先是一道 Cret 仿建的<strong>Château d'Issy 立面残片</strong>（一件刻意的「废墟」布景），门内是正式的巴黎式花园与 Cret 设计的贝壳形水池，<strong>《思想者》守在临街的门口、《地狱之门》立在建筑正门前</strong>。这是全馆的招牌视线，也<strong>完全在户外</strong>。",
          "<strong>这里是巴黎之外最大的 Rodin 公共收藏</strong>，逾 140 件。除《思想者》与《地狱之门》外，<strong>《The Burghers of Calais》《The Age of Bronze》《Eternal Springtime》《Adam》《Eve》《The Hand of God》</strong>都在。当前特展 <strong>Rodin's Hands 展到 2027 年 1 月 31 日</strong>——Rodin 那些独立的手部习作是全馆最适合拍特写的一批东西。<strong>但要认清定位：室内只有几间不大的展厅，真正的摄影目标是户外花园。</strong>"
        ],
        "photo": "雕塑 <strong>4.5/5</strong>，建筑与园林 <strong>4/5</strong>，人像 <strong>4.5/5</strong>，风光 <strong>2/5</strong>。花园安静、雕塑与绿植的关系极好、几乎没有游客拥挤问题，是本区最舒服的拍摄环境；扣分在规模小（认真拍 60–90 分钟就够）与那三天连闭的开放时间。",
        "shots": [
          {
            "name": "花园与《地狱之门》（主机位）",
            "view": [
              39.96193,
              -75.17395
            ],
            "desc": "<strong>坐标为 OSM 的 Rodin Museum 建筑轮廓中心（way/183625405）；花园与《地狱之门》在临 Parkway 一侧、该点东南约 30–40 米（推算）。</strong><strong>建筑与花园朝 Parkway，立面法向约 224°（西南）</strong>（由 Parkway 313.9° 的走向推算，馆位于大道东北侧；<strong>此朝向为推算</strong>），所以<strong>受光区间是太阳方位 134°–314°，即上午 10:05（10/22）／10:40（9/25）之后一直到日落。</strong><strong>最佳 14:30–17:00</strong>：10/22 的 15:30 太阳高度 26°、方位 226°，几乎正打在立面与门上；<strong>《地狱之门》是深色铜浮雕，最怕顶光</strong>——正午高度 39–49° 会把所有浮雕的层次压平，而 26° 的低角度侧光能把上百个人物的体积一个个勾出来，<strong>这是本机位「十月明显优于九月」的原因。</strong><strong>另一个同样好的选择是阴天</strong>：均匀漫射光对深色铜器最友好、不会有炸掉的高光点。焦段：<strong>24–35mm 拍「花园＋水池＋门」的整体关系</strong>，<strong>50mm 拍《地狱之门》的正立面（要正对、要水平）</strong>，<strong>85–135mm 或 100mm 微距抽门上的单个人物与 Rodin's Hands 那批手部习作</strong>——<strong>长焦特写是这里出片率最高的做法</strong>，因为铜绿的层次在压缩后特别耐看。曝光按<strong>铜器的中间调给、常需 -0.3 到 -0.7 EV</strong>（深色主体容易被相机提亮成灰）。<strong>三脚架：官方 Visitor Policies 只写禁闪光、禁背包上身与自拍杆，没有逐字提三脚架；按同机构主馆政策执行、建议一律手持。花园内的团体拍摄需事先申请书面许可，个人拍摄不需要。</strong>"
          },
          {
            "name": "《思想者》与临街的 Château d'Issy 立面",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于 Rodin Museum 沿 Benjamin Franklin Parkway 的入口段内，距上一机位数十米）。</strong><strong>这是不买票也能拍的一段</strong>：《思想者》守在临 Parkway 的门口、身后是 Cret 仿建的 Château d'Issy 立面残片，<strong>「一件铜像＋一道假废墟＋一条巴黎式大道」这个组合是本条目最有辨识度的构图。</strong><strong>最佳 15:30–17:30</strong>（同上，西南低角度光；10/22 的 17:00 太阳高度 12°、方位 244°，光几乎平打，铜像的正面与肌肉起伏最立体）。<strong>次佳是蓝调</strong>：铜像变剪影、立面残片被泛光打亮、Parkway 的路灯串成背景，<strong>注意馆 17:00 闭门，蓝调时只能从人行道外侧拍——这一段本来就在街边，可行。</strong>焦段：<strong>35mm 竖幅把铜像、立面与一段大道收进（主构图）</strong>，<strong>85mm 从侧后方压缩、让立面残片充当铜像的背景板</strong>，135mm 单抽头部与手部。<strong>不要用超广角贴近仰拍</strong>——《思想者》的比例本来就紧凑，广角变形会让它显得笨重。"
          },
          {
            "name": "室内展厅（Rodin's Hands 特展）",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于 Rodin Museum 建筑体内）。</strong><strong>室内只有几间不大的展厅，光是天光加射灯的混合。</strong><strong>最佳 11:00–14:00</strong>——此时高窗的进光最强，室内不需要把 ISO 推得太高，而且大理石与石膏件的白色不会被射灯染色。<strong>参数：ISO 1600–3200、f/2–2.8、1/60–1/125</strong>，<strong>白平衡固定 3800–4400K</strong>（天光偏冷、射灯偏暖的折中）。<strong>Rodin's Hands（展至 2027 年 1 月 31 日）是这里最好的室内题材</strong>：那些脱离身体的手部习作在侧射灯下有极强的雕塑感，<strong>85mm 或 100mm 微距、大光圈、让背景彻底虚化</strong>，是唯一正确的做法。<strong>禁闪光（官方原文「Flash is not permitted — but take lots of pictures!」）；禁背包背在身后、禁大包、禁大伞与自拍杆，可用手提或单肩挎，现场有自助衣帽架。</strong>"
          }
        ],
        "access": {
          "book": "<strong>不需单独预约。</strong><strong>持 Philadelphia Museum of Art 主馆门票可当日免费入场</strong>（主馆票本身含两天，但 Rodin 是「same-day」）。单独来则现场按建议价付费即可（pay what you wish 性质）。",
          "ticket": "官方页面标题写的是 <strong>「Suggested Admission」</strong>：<strong>成人 $15、老年（65+）$14、持证学生 $7、13–18 岁免费、12 岁及以下免费、会员免费</strong>。→ <strong>这是「建议票价」而不是硬性票价，实质上是自愿定价。</strong><strong>另：持 Philadelphia Museum of Art 主馆票当日免费入场</strong>——如果你本来就要进主馆（成人 $30，或周五 Pay What You Wish），这里等于不额外花钱。<strong>临街的《思想者》与 Château d'Issy 立面从人行道上拍摄免费。</strong>",
          "hours": "官方原文（philamuseum.org/rodin-museum 的 Hours 表）：<strong>「Monday 10am–5pm / Tuesday Closed / Wednesday Closed / Thursday Closed / Friday 10am–5pm / Saturday 10am–5pm / Sunday 10am–5pm」</strong>。→ <strong>周二、周三、周四三天连闭；周五只到 17:00，不参与主馆的 20:45 延时。</strong><strong>口径冲突提示：同一页面的页脚另挂了一张「周四 10–17、周五 10–20:45」的表，那是站点通用的主馆时间，不是 Rodin 的。以上方 Hours 表为准最保险，但这处矛盾未能从官方渠道澄清——若周四非来不可，请先致电 215-763-8100 确认。</strong>",
          "parking": "<strong>Benjamin Franklin Parkway、N 21st Street 与 N 22nd Street 上有计时表位（官方原文「limited metered parking」）。</strong>也可停 <strong>Philadelphia Museum of Art Parking Garage</strong>（Anne d'Harnoncourt Drive，OSM 39.96715／-75.18202，距此约 800 米），<strong>费率未能从官方渠道确认（周五晚官方公告为 $10）。</strong>多条 SEPTA 巴士沿 Parkway 通行。",
          "walk": "<strong>到 Philadelphia Museum of Art 约 720 米 / 9 分钟</strong>（方位 304°，沿 Parkway 西北行）；<strong>到 The Barnes Foundation 约 220 米 / 3 分钟</strong>（就在 Parkway 下一个街区）；<strong>到 Swann Memorial Fountain 约 530 米 / 7 分钟</strong>（方位 147°）。入口在 Parkway 一侧，进门即是花园，<strong>从大门到《地狱之门》不到 60 米，纯拍照 60–90 分钟够用。</strong>"
        },
        "notes": [
          "<strong>本条目最重要的一条：它周二、周三、周四连闭三天，比主馆多闭一个周四。</strong>而且周五只到 17:00，不跟主馆延到 20:45",
          "<strong>持主馆门票当日可免费进</strong>——把两处排在同一天是最省钱的走法，但注意 Rodin 是「same-day」而不是像主馆票那样含两天",
          "<strong>户外花园才是主角，室内是加分项。</strong>如果时间紧，只在门外拍《思想者》与 Château d'Issy 立面也能拿到本条目八成的价值",
          "<strong>《地狱之门》最怕正午顶光</strong>，深色铜浮雕在高角度光下会彻底拍平。排在 14:30–17:00，或干脆挑阴天",
          "<strong>禁闪光</strong>（官方明文）；<strong>禁把背包背在身后、禁大包、禁大伞与自拍杆</strong>，小包要手提或单肩挎，现场有自助衣帽架",
          "<strong>花园内的团体摄影需事先申请书面许可、且要随身携带纸质件，无许可的团体会被拒入</strong>；个人拍摄不受此限",
          "<strong>三脚架政策官方未逐字说明</strong>，按同机构主馆的「禁三脚架」执行最保险，建议一律手持",
          "<strong>本条目由 Philadelphia Museum of Art 运营，不受联邦拨款影响</strong>"
        ],
        "images": [
          {
            "url": "img/rodin-museum-phila-jeh-073664d2.jpg",
            "cap": "临 Parkway 的立面与花园入口 · Jim.henderson / CC BY-SA 4.0"
          },
          {
            "url": "img/philadelphia-october-2017-13-rodin-museum-7ae23753.jpg",
            "cap": "十月的花园与 Beaux-Arts 建筑（即主机位视角） · Michael Barera / CC BY-SA 4.0"
          },
          {
            "url": "img/rodin-museum-entrance-in-philadelphia-pennsylvania-23e99347.jpg",
            "cap": "入口段与《地狱之门》一侧 · Nolabob / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "barnes-foundation",
        "n": 5,
        "name": "巴恩斯基金会",
        "en": "The Barnes Foundation",
        "score": 3.5,
        "tldr": "收藏展厅其实允许个人拍摄（禁闪光与三脚架），不是只能拍建筑；$30、周二周三闭馆、票有效两天。",
        "tags": [
          {
            "t": "$30 / 票含两天",
            "c": "paid"
          },
          {
            "t": "展厅可手持拍摄",
            "c": "free"
          },
          {
            "t": "禁三脚架与闪光",
            "c": "risk"
          },
          {
            "t": "周二周三闭馆",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>先纠正一个流传很广的说法：Barnes 的收藏展厅并不禁止摄影。</strong>barnesfoundation.org/plan-your-visit 的原文是<strong>「Photography for personal use is allowed, unless otherwise posted. No flash, tripods, or selfie sticks.」</strong>→ <strong>个人手持拍摄是允许的，禁的是闪光灯、三脚架与自拍杆</strong>，并且<strong>「除另有标示外」意味着个别特展或个别墙面可能单独禁拍</strong>，现场看牌子。另有一条实务限制：<strong>展厅拥挤时馆方会要求停止拍摄、写生与记录以维持动线</strong>（写生只许用石墨铅笔、笔记本不得大于 9×12 英寸）。<strong>所以这不是「只能拍建筑」的地方——但也别指望能慢慢架机器。</strong>",
          "<strong>这里真正独一无二的东西是「墙」，不是某一张画。</strong>Albert C. Barnes（靠一种含银的消炎药剂发家的化学家）把藏品按<strong>「ensembles」——对称的墙面组合</strong>来挂：一张 Renoir 旁边可能挂着一件非洲面具、一把 18 世纪的宾州铁铰链和一件织物，<strong>依据的是形状、色彩、线条与空间的形式呼应，而不是年代、国别或画派。</strong>这在全世界的大馆里几乎是绝无仅有的陈列逻辑。<strong>对摄影者的直接意义：这里最值得拍的不是单幅作品的翻拍（那毫无意义），而是整面墙的构图本身</strong>——一张 35mm 的正对墙面，就把 Barnes 的整套美学思想拍下来了。藏品规模上有 <strong>181 件 Renoir、69 件 Cézanne、59 件 Matisse、46 件 Picasso、7 件 Van Gogh</strong>，以及 Matisse 为原馆定制的巨幅壁画《The Dance》。",
          "<strong>这栋楼之所以存在，源于一场美国艺术界最著名的官司。</strong>Barnes 的遗嘱明确禁止藏品外移、禁止改变任何一件作品的位置。基金会原址在费城郊外的 Merion，<strong>2004 年法院裁定允许迁址</strong>，此举引发激烈争议（2009 年的纪录片《The Art of the Steal》就是一部完整的控诉）。<strong>妥协方案是：新馆里的展厅按 Merion 老宅的房间尺寸一比一复制，每一面墙的每一件作品都保持原位。</strong><strong>2012 年 5 月 19 日在 Parkway 开馆，造价约 1.5 亿美元。</strong>也就是说<strong>你在一栋 2012 年的现代建筑里，看到的是一座 1920 年代私宅内部的逐字复刻</strong>——这个「盒中盒」的关系是本馆最有意思的建筑事实。",
          "<strong>建筑本身（Tod Williams Billie Tsien Architects）才是最好拍的部分。</strong>外墙用的是<strong>来自以色列 Negev 沙漠的石灰石，按刻意打乱的随机砌法排列</strong>，表面有明显的凿痕与色差，<strong>低角度侧光下这面墙会整体「亮起来」</strong>，是本条目最容易出片的对象。入口序列是一道长石墙、一片浅反射水池、再进到有天光顶篷的 <strong>Light Court</strong>；建筑师自己的说法是「a gallery in a garden, a garden in a gallery」。<strong>反射水池是唯一能拍到「建筑倒影」的元素，也是本馆最上镜的一处。</strong>"
        ],
        "photo": "建筑 <strong>4.5/5</strong>，室内陈列 <strong>3.5/5</strong>，风光 <strong>1/5</strong>，人像 <strong>2.5/5</strong>。建筑与石墙质感很强、反射水池好用、展厅也确实能拍；扣分在 $30 的票价对纯摄影产出偏高、展厅禁三脚架且光线偏暗、以及「拍下来的墙别人看不懂」这个先天限制。",
        "shots": [
          {
            "name": "反射水池与 Negev 石灰石外墙（主机位）",
            "view": [
              39.96063,
              -75.17271
            ],
            "desc": "<strong>坐标为 OSM 的 Barnes Foundation 建筑轮廓中心（way/183620616）；水池与入口石墙在临 Parkway 一侧、该点东南约 30–40 米（推算）。</strong><strong>建筑朝 Parkway，立面法向约 224°（西南）</strong>（由 Parkway 313.9° 走向推算，馆位于大道东北侧；<strong>此朝向为推算</strong>），受光区间为太阳方位 134°–314°。<strong>最佳 15:00–17:30</strong>：10/22 的 16:00 太阳高度 22°、方位 232°，<strong>低角度侧光正打在 Negev 石灰石上，凿痕与随机砌缝的每一道阴影都被拉出来</strong>——这面墙在正午顶光下是一片死白，在 22° 的低光下是全区最好的材质特写题材，<strong>差别大到值得为它专门安排时段。</strong><strong>次佳是蓝调</strong>（10/22 约 18:27–18:47，但注意馆 17:00 闭门，此时只能从 Parkway 人行道外侧拍——石墙与水池本来就在临街一侧，可行）。焦段：<strong>24–35mm 拍「水池倒影＋石墙＋建筑体量」的完整入口序列（招牌构图）</strong>，<strong>50mm 压低贴近水面拍纯倒影</strong>，<strong>85–135mm 或 100mm 微距单抽石墙的砌法与凿痕</strong>——<strong>后者是这里最被低估的一张，几乎是抽象摄影。</strong><strong>CPL 在水池倒影上非常有用</strong>（可按需增强或消除反射，转到最强反射角能让倒影更实）。<strong>Parkway 人行道与馆前广场是室外公共空间，三脚架自由；进馆之后禁三脚架。</strong>"
          },
          {
            "name": "Light Court 与室内动线",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于 Barnes Foundation 建筑体内）。</strong><strong>Light Court 是室内最好的建筑目标</strong>：顶部有采光篷、四周是石墙与玻璃，<strong>光是本区最柔和均匀的室内光</strong>。<strong>最佳 12:00–14:00</strong>（顶篷进光最强、天光最白，10/22 正午太阳高度 38.8°、9/25 为 49.0°，都足够穿过采光层）。<strong>24mm 上仰拍顶篷的结构网格</strong>，<strong>35mm 拍「石墙＋光带＋人影」的横向切片</strong>，<strong>85mm 抽墙面与光的边界</strong>。<strong>参数：ISO 800–1600、f/2.8–4、1/125</strong>（这里比展厅亮得多），白平衡固定 <strong>5000–5600K</strong>（以天光为主）。这一段人不多、动线宽，是全馆最能从容构图的地方。"
          },
          {
            "name": "收藏展厅的 ensembles 墙面",
            "desc": "<strong>无独立 OSM 实体，地图无针脚（位于 Barnes Foundation 建筑体内）。</strong><strong>拍法只有一个正确答案：正对整面墙拍它的组合关系，不要单独翻拍某一幅画。</strong><strong>35mm 正对、水平校准、把一整面墙连同两侧的铁艺与家具一起收进</strong>，这一张才说得清 Barnes 这套陈列逻辑；<strong>50mm 拍「一幅 Renoir 加旁边一件非洲面具」这种局部并置</strong>，是最能一眼说明问题的构图。<strong>参数：展厅照度偏低，ISO 1600–3200、f/2–2.8、1/60–1/100</strong>；<strong>白平衡固定 3200–3600K</strong>（以暖色射灯为主，自动白平衡会随每面墙来回跳，整组片子会没法统一调色）。<strong>禁闪光、禁三脚架、禁自拍杆</strong>；<strong>画面上会有射灯在画框玻璃上的反光点，唯一的解法是侧移半步换角度，CPL 在人工光下作用有限。</strong><strong>人多时馆方会要求你停止拍摄</strong>，所以<strong>请排在开门后第一小时（周四至周一 11:00，会员 10:00）或 15:00 之后</strong>。"
          }
        ],
        "access": {
          "book": "<strong>建议线上预约定时票</strong>（barnesfoundation.org），周末与假日容易售完。<strong>票含特展、且有效两天</strong>。<strong>大学生 $5 的票只能电话购买（215.278.7000），线上买不到。</strong>现场另有一小时的 Collection Highlights 导览，<strong>周四至周一 11:30、12:30、13:30 三场，需在 box office 现买。</strong>",
          "ticket": "官方价目（barnesfoundation.org/plan-your-visit）：<strong>成人 $30、老年 $28、大学生（凭证件）$5、13–18 岁 $5、12 岁及以下免费</strong>。<strong>含特展，票有效两天。</strong>会员与费城教师免费。Philadelphia CityPASS 可打包。<strong>室外的石墙、反射水池与馆前广场从 Parkway 人行道上拍摄完全免费。</strong>",
          "hours": "官方原文：<strong>「Thu–Mon: 11am–5pm / Members: 10am–5pm」</strong>，<strong>周二与周三闭馆</strong>；全年另闭 July 4、Thanksgiving、Christmas。→ <strong>9 月末至 10 月末每周开五天（周四至周一），周二周三来是空跑。</strong><strong>注意它 11:00 才开门，是本区开门最晚的场馆</strong>，正好可以把上午 10:00–10:45 的 Parkway 轴线时段先做完再过来。<strong>会员可以 10:00 进场，这一小时是展厅最空、最好拍的时候。</strong>",
          "parking": "<strong>自有停车场：Pennsylvania Avenue 一侧 60 个车位，4 小时 $12、超时按小时加收</strong>（该费率来自第三方 2026 年 1 月核对的资料，<strong>未能在官网逐字确认</strong>）。车位很少，秋季周末基本停不进。<strong>更实际的是 SEPTA 巴士（沿 Parkway 与 20th／21st Street 多条线路）</strong>，或从 City Hall 沿 Parkway 步行约 1.1 公里。",
          "walk": "<strong>到 Rodin Museum 约 220 米 / 3 分钟</strong>（Parkway 上的下一个街区，两处必须连着做）；<strong>到 Swann Memorial Fountain 约 350 米 / 5 分钟</strong>（方位 149°）；<strong>到 Philadelphia Museum of Art 约 890 米 / 11 分钟</strong>（方位 308°，沿 Parkway 西北行）。<strong>官方建议留两小时看展，纯拍照 60 分钟够。</strong>"
        },
        "notes": [
          "<strong>本条目最重要的一条：收藏展厅可以个人手持拍摄，官方原文允许。</strong>禁的是闪光灯、三脚架与自拍杆，另加「除另有标示外」这个例外条款。<strong>「Barnes 展厅完全禁拍、只能当建筑题材」这个说法不成立</strong>",
          "<strong>但展厅拥挤时馆方会要求停止拍摄</strong>（连写生和记笔记都会被叫停）。要拍就排在 11:00 开门后第一小时或 15:00 之后，<strong>会员的 10:00 早场是最理想的一小时</strong>",
          "<strong>周二与周三闭馆</strong>，且<strong>11:00 才开门</strong>。11:00 这个晚开门其实是好事：上午 10:00–10:45 的 Parkway 轴线时段不冲突",
          "<strong>票有效两天、且含特展</strong>——第一天只拍建筑、第二天再进去看画是完全可行的",
          "<strong>大学生 $5 的票只能打电话买（215.278.7000）</strong>，线上界面上没有这个选项",
          "<strong>不要在展厅里翻拍单幅作品</strong>：那既没有意义（官网有更好的图），也会招来工作人员注意。<strong>拍整面墙的 ensemble 才是这里的正确题材</strong>",
          "<strong>外墙的 Negev 石灰石只在低角度侧光下好看</strong>（15:00–17:30），正午顶光会把它拍成一片死白。这是本条目唯一需要「等光」的部分",
          "<strong>写生只许用石墨铅笔、笔记本不得大于 9×12 英寸</strong>（官方明文），钢笔、马克笔与大画板都不行",
          "<strong>本条目为独立 501(c)(3)，不受联邦拨款影响</strong>"
        ],
        "images": [
          {
            "url": "img/the-barnes-foundation-in-philadelphia-by-mywikibiz-e5e4a908.jpg",
            "cap": "Tod Williams Billie Tsien 的建筑体量与 Negev 石灰石外墙 · Thekohser / CC BY-SA 4.0"
          },
          {
            "url": "img/reflecting-pool-outside-the-barnes-foundation-philadelphia-b-71c87af4.jpg",
            "cap": "入口反射水池（即主机位视角） · Thekohser / CC BY-SA 4.0"
          },
          {
            "url": "img/galerie-barnes-foundation-c0c7c90e.jpg",
            "cap": "收藏展厅内的 ensembles 墙面陈列 · Dav Sanetrník / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "swann-memorial-fountain",
        "n": 6,
        "name": "斯旺纪念喷泉与洛根圆环",
        "en": "Swann Memorial Fountain · Logan Square",
        "score": 4.5,
        "tldr": "2023 年起故障、2025 年 9 月全面停水，但已于 2026 年 5 月修复重新运行；秋季通常开到 10 月下旬。",
        "tags": [
          {
            "t": "完全免费 24 小时",
            "c": "free"
          },
          {
            "t": "2026 年 5 月已修复",
            "c": "free"
          },
          {
            "t": "10 月下旬可能停水",
            "c": "risk"
          },
          {
            "t": "在交通环岛中央",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>先回答那个最重要的问题：喷泉现在是运行的。</strong>这一项有过一段很糟的历史：<strong>中央大水柱的主泵在 2023 年因人为破坏损毁</strong>，之后几年只靠一台小泵勉强维持周边的小水景；<strong>2025 年 9 月初那台小泵也失效，导致喷泉完全停水、池底放空</strong>（Philadelphia Inquirer 2025 年 9 月 27 日报道）。Parks &amp; Recreation 当时给出的修复目标是 <strong>2026 年 5 月中</strong>，<strong>而 City of Philadelphia 官方在 2026 年 5 月 15 日发布「The Swann Memorial Fountain in Logan Square is back up and flowing」，确认已恢复运行。</strong>同期还完成了 Logan Circle 的人行道与八处无障碍坡道改造（原有混凝土路缘换成花岗岩），<strong>该工程原定 2026 年春季完工，但「是否已全部撤场」未能从官方渠道确认。</strong>",
          "<strong>第二个问题是关停时间，这决定了 10 月末来还有没有水。</strong>Parks &amp; Recreation 给 Inquirer 的官方口径是：<strong>「Ordinarily, Swann Fountain is running by the end of April or the beginning of May... Its run typically lasts at least until mid- to late October, but can continue until Thanksgiving Day, depending on when the area experiences freezing temperatures.」</strong>→ <strong>9 月末到 10 月中几乎肯定有水；10 月 20 日之后进入「看天」区间；如果那一周没有霜冻，很可能一直开到 11 月。</strong><strong>官方从不公布确切的关停日期，因为它是按气温临时决定的</strong>——这一点无法提前锁定，只能出发前几天看天气预报里有没有零度以下的夜温。<strong>干池是完全不同的一张照片</strong>：三尊铜像还在，但整个构图的动势与反光全部消失，只剩一个空的浅盆。",
          "<strong>这里最值得知道的事实与摄影无关，但会改变你怎么看这条大道：Parkway 的三个雕塑锚点是同一家人做的三代作品。</strong>喷泉出自 <strong>Alexander Stirling Calder</strong>（1924 年，与建筑师 Wilson Eyre 合作）；轴线东南端 City Hall 塔顶的 William Penn 铜像出自他的父亲 <strong>Alexander Milne Calder</strong>；而轴线西北端美术馆一带的现代雕塑出自他的儿子、动态雕塑（mobile）的发明者 <strong>Alexander「Sandy」Calder</strong>。<strong>祖、父、子三代人的作品，沿一条 2 公里的轴线依次排开</strong>——这是全世界城市规划里几乎找不到第二例的巧合（部分是后来有意促成的）。",
          "<strong>三尊铜像代表本地的三条水系，各有明确的可辨识细节，拍特写时要认对：</strong><strong>Delaware River</strong> 是一名手持弓的壮年男性，有一条鱼朝他喷水；<strong>Schuylkill River</strong> 是一名成年女性，手握一只天鹅的颈部；<strong>Wissahickon Creek</strong> 是一名少女，倚着一只喷水的天鹅。池中另有<strong>喷水的青铜蛙与龟</strong>——它们是最容易被忽略的前景元素，低机位贴近水面时可以当成画面的第一层。<strong>那些天鹅是双关：既是 Swann 的姓氏谐音，也暗指 Leda and the Swan 的古典母题。</strong>纪念对象 Dr. Wilson Cary Swann 是 Philadelphia Fountain Society 的创办人，该会在 19 世纪装了逾 80 座饮水泉，目的是给人和役畜提供干净水源以替代受污染的水与酒。",
          "<strong>Logan Circle 本身的历史很黑：它原名 Northwest Square，是 18 世纪的公开处刑场</strong>，1825 年改名 Logan Square，<strong>1917 年由 Jacques Gréber 在设计 Parkway 时把方形广场改成圆形环岛</strong>，喷泉 1924 年 7 月在一个酷热的日子里落成（当时现场有人在跳探戈）。2007 年由景观事务所 OLIN 做过一次整体复兴。<strong>环岛外圈的梧桐与泡桐是 Gréber 原始设计的一部分，也是本机位秋色的主要来源。</strong>"
        ],
        "photo": "建筑环境 <strong>4.5/5</strong>，雕塑细节 <strong>4.5/5</strong>，慢门水景 <strong>5/5</strong>，人像 <strong>4/5</strong>。免费、24 小时、且是全区唯一能做「慢门水流」的题材，还能同框 Cathedral 的圆顶与 Parkway 的轴线；扣分全在「水可能没了」这个不可控因素，以及它位于一个真正在跑车的环岛中央。",
        "shots": [
          {
            "name": "池西北侧低机位，喷泉配 Cathedral 圆顶（主机位）",
            "view": [
              39.95794,
              -75.17059
            ],
            "desc": "<strong>坐标为 OSM 的 Swann Memorial Fountain 节点（node/1015369635，即喷泉本体）；实际站位在池沿西北侧，距该点约 20 米（推算）。</strong><strong>Cathedral 在喷泉的东南方，方位 109°、距离 184 米</strong>（Cathedral OSM way/252221811，39.95740／-75.16855），所以<strong>站在池的西北侧朝东南拍，就能把喷泉、水柱与远处的褐石圆顶叠成三层</strong>。<strong>最佳 15:00–17:00</strong>：此时太阳在西南到西（10/22 的 16:00 太阳高度 22°、方位 232°），<strong>光从你背后偏右打过来，喷泉与 Cathedral 同时正面受光</strong>，这是构图最完整的时段。<strong>次佳是蓝调</strong>（10/22 约 18:27–18:47）：环岛路灯与 Cathedral 泛光已亮，池水变成深蓝、水柱在长曝下变成白色的丝状。<strong>快门速度是这个机位真正的选择题，三种效果差别极大：</strong><strong>① 1/1000–1/2000 s</strong>——把水柱与飞沫完全定住成一颗颗独立水珠，这是唯一能表现「Calder 设计的水形」的做法，需要 f/4–5.6、ISO 400–1600；<strong>② 1/125–1/250 s</strong>——半定住，水有质感也有动势，是最保险的通用值；<strong>③ 1/4–2 s</strong>——水柱化成雾状丝带，铜像在静止的丝雾里被衬出来，<strong>白天必须上 ND8–ND64 才做得到（f/16、ISO 100 也只能到 1/15 左右）</strong>，<strong>蓝调时段则不需要 ND</strong>，f/8、ISO 100 自然就是 1–4 秒。焦段：<strong>24–35mm 把喷泉、水柱与 Cathedral 圆顶一次收进（主构图）</strong>，50mm 拍单尊铜像加水柱，<strong>135–200mm 从池对侧压缩，让 184 米外的圆顶顶在喷泉正后方</strong>。<strong>这里是公共环岛人行道，三脚架自由。</strong>"
          },
          {
            "name": "池东侧朝西南，逆光打亮水雾",
            "view": [
              39.95803,
              -75.17059
            ],
            "desc": "<strong>坐标为 OSM 的 Logan Square 节点（way/1487845238 中心），即环岛中央绿地；实际站位在池沿东侧，需绕行环岛人行道（推算）。</strong><strong>这是这个点位唯一「非明信片」的做法：让太阳在水雾后面。</strong><strong>最佳 17:00–18:00（10 月 22 日）或 17:45–18:50（9 月 25 日）</strong>：10/22 的 17:00 太阳高度 12°、方位 244°，17:30 为 7°／249°；<strong>站在池的东侧朝西南方向拍，太阳压在水柱后方</strong>，飞沫会被完全点亮成一团发光的雾，铜像变成半剪影，<strong>而且低角度阳光穿过水雾时经常出现小段彩虹（水汽足够密的时候）。</strong><strong>关键器材要点：这是最容易起眩光的构图</strong>，把遮光罩装上、<strong>用手掌或帽子在镜头上方挡住直射太阳</strong>，或干脆<strong>让一尊铜像的头部正好遮住太阳盘</strong>——后者是最优雅的解法，还能出星芒（f/11–16）。曝光按<strong>水雾的高光给、-1 到 -2 EV</strong>，暗部就让它沉下去，这张照片的主体是光而不是雕塑。<strong>快门 1/500–1/1000</strong> 保住水珠的边缘。焦段 <strong>50–135mm</strong>（广角会把太阳拍得太小、雾的密度不够）。"
          },
          {
            "name": "环岛西北侧朝 Parkway 轴线（喷泉配大道纵深）",
            "desc": "<strong>无 OSM 实体节点可用，地图无针脚（站位在环岛西北侧人行道，由环岛几何推算）。</strong><strong>从这里 Parkway 朝西北以 313.9° 直指美术馆（1.22 公里），朝东南以 135.9° 指向 City Hall（858 米）</strong>，而喷泉正好坐在这条轴线的中点上——<strong>这是唯一能把「喷泉＋大道＋轴线两端之一」拍成一张的位置。</strong><strong>最佳 10:00–10:45</strong>（与全区轴线时段一致：太阳方位在 10/22 的 10:03、9/25 的 10:40 扫过 134.7°，此时朝西北望，整条 Parkway 与远端的美术馆完全正面受光、影子全部背离镜头）。<strong>朝东南拍 City Hall 则要选下午 15:00–16:30</strong>（太阳转到西南、在你背后）。焦段：<strong>朝西北拍美术馆需要 135–200mm</strong>（1.22 公里，广角完全不成立）；<strong>朝东南拍 City Hall 用 85–135mm</strong>（858 米，塔本身够高，中长焦即可撑满）；<strong>24–35mm 只用于拍「喷泉＋两侧行道树＋大道消失点」的环境构图</strong>，这一张在 10 月下旬秋色起来后是本区最好的季节性照片。<strong>注意 Logan Circle 是真正在跑车的多车道环岛</strong>，拍摄一律留在人行道与中央绿地内，不要为了对准轴线站到车道上。"
          }
        ],
        "access": {
          "book": "<strong>不需预约、不需票</strong>",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>公共环岛与广场，24 小时开放。</strong><strong>但「有没有水」是季节性的</strong>：Parks &amp; Recreation 官方口径为<strong>「通常 4 月底或 5 月初开始运行，一般至少开到 10 月中至下旬，若无霜冻可延续到 Thanksgiving」</strong>。<strong>官方不公布确切关停日期（按气温临时决定），这一项无法提前锁定。</strong>喷泉在 2023–2025 年间因人为破坏与泵故障长期不完整、2025 年 9 月完全停水，<strong>已于 2026 年 5 月修复并由市政府官方确认恢复运行。</strong>夜间有照明。",
          "parking": "<strong>不要在这里找车位。</strong>Logan Circle 周围是多车道环岛与 Parkway 主线，路边计时表位极少。<strong>SEPTA Broad Street Line 或 Market–Frankford Line 到 「15th Street」／「City Hall」站，再沿 Parkway 西北行 858 米（约 11 分钟）</strong>是最实际的方案；多条 SEPTA 巴士（2、7、32、33、38、48 等）沿 Parkway 与 19th／20th Street 通行。<strong>周边商业车库费率未能从官方渠道确认。</strong>",
          "walk": "<strong>到 The Barnes Foundation 约 350 米 / 5 分钟</strong>（方位 329°）；<strong>到 Rodin Museum 约 530 米 / 7 分钟</strong>（方位 327°）；<strong>到 Cathedral Basilica 约 184 米 / 3 分钟</strong>（方位 109°）；<strong>到 Philadelphia Museum of Art 沿 Parkway 约 1.22 公里 / 15 分钟</strong>（方位 314°）；到 City Hall 约 858 米 / 11 分钟（方位 136°）。<strong>Cathedral、Barnes、Rodin 与美术馆几乎排在一条直线上，是本区唯一可以纯步行连做的一串。</strong>环岛四周有多个信号灯过街口，绕行整圈约 400 米。"
        },
        "notes": [
          "<strong>本条目最重要的一条：出发前几天看夜间最低温。</strong>若预报有 0 °C 以下的夜温，市政府随时可能关泵放水，<strong>而干池与运行中的喷泉是两张完全不同的照片</strong>。10 月 20 日之前来基本安全，之后属于「看天」",
          "<strong>2026 年 5 月市政府官方确认喷泉已修复运行</strong>，中央大水柱（2023 年起损坏的那一支）也在修复范围内；<strong>但同期 Logan Circle 的人行道与无障碍坡道工程是否已全部撤场，未能从官方渠道确认</strong>",
          "<strong>这是一个真正在跑车的多车道环岛</strong>，进出必须走信号灯过街口，不要横穿；三脚架请架在人行道或中央绿地内、不要伸进车道",
          "<strong>想要慢门丝雾效果，白天必须带 ND 滤镜</strong>（ND8–ND64）。f/16、ISO 100 在晴天也只能到 1/15 秒左右，不够；<strong>蓝调时段则完全不需要 ND</strong>",
          "<strong>逆光机位一定会起眩光</strong>，遮光罩之外还要用手或帽子在镜头上方挡直射光，最好的解法是让一尊铜像的头挡住太阳盘",
          "喷泉是市民日常使用的水景，<strong>夏季常有人下水，秋季少见但仍有人坐在池沿</strong>；要拍空场请排在 08:00 之前",
          "池中<strong>喷水的青铜蛙与龟很容易被漏掉</strong>，低机位贴近水面时它们是最好的前景",
          "<strong>本条目由 Philadelphia Parks &amp; Recreation 运营，不受联邦拨款影响</strong>"
        ],
        "images": [
          {
            "url": "img/swann-memorial-fountain-philadelphia-fd8dfa16.jpg",
            "cap": "喷泉与三尊河流铜像（宽幅） · Dudva / CC BY-SA 4.0"
          },
          {
            "url": "img/swann-memorial-fountain-logan-square-philadelphia-pa-c83e400a.jpg",
            "cap": "水柱运行时的实际观感与环岛环境 · Ngilmour3 / CC BY-SA 3.0"
          },
          {
            "url": "img/children-in-swann-memorial-fountain-on-4th-july-9c59ce3b.jpg",
            "cap": "池沿低机位与飞沫（快门定住水珠的效果） · Haley Betrayal / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "cathedral-basilica-ss-peter-paul",
        "n": 7,
        "name": "圣伯多禄圣保禄圣殿主教座堂",
        "en": "Cathedral Basilica of Saints Peter and Paul",
        "score": 4,
        "tldr": "免费、每日开放；工作日弥撒都在旁边的小堂举行，所以正殿在 7:00–17:00 基本全天空着可拍。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "工作日正殿空场",
            "c": "free"
          },
          {
            "t": "活跃主教座堂",
            "c": "risk"
          },
          {
            "t": "游客摄影政策未公布",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这里有一条排程上的重大便利，是本条目最有用的信息：工作日的日常弥撒不在正殿里举行。</strong>官方 Mass Schedules 原文为 <strong>「Monday to Friday 7:15 am &amp; 12:05 pm in the Cathedral Chapel」「Saturday 12:05 pm in the Cathedral Chapel」</strong>——也就是<strong>周一到周六的日常弥撒全在旁边的 Cathedral Chapel（小堂），不在 Basilica 正殿</strong>。正殿里只有<strong>周一至周五 11:30 的告解</strong>（时间很短）、<strong>周六 16:15–17:00 告解与 17:15 的主日预备弥撒</strong>，以及<strong>周日的 8:00／9:30／11:00／18:30 四台弥撒</strong>。→ <strong>结论：周一至周五 7:00–17:00 这十个小时里，正殿基本是空的、可以自由拍摄，只需避开 11:30 前后那半小时。</strong><strong>这是全区最容易被浪费掉的一个机会</strong>——大多数人以为主教座堂随时都在做礼拜。",
          "<strong>最反直觉的建筑事实：这座教堂的窗户被刻意开得很高，是为了不让人从街上砸石头进来。</strong>1846 年动工时，费城刚经历 <strong>1844 年的 Nativist Riots（本土主义暴动）</strong>——反天主教暴徒在那场骚乱里烧掉了教堂、打死了人。按传统说法，主教 Francis Kenrick 因此要求<strong>把所有窗户开在「投石所及的高度以上」</strong>，所以你看到的这栋楼下部是一整圈几乎无窗的褐石实墙。<strong>对摄影的直接后果是室内极暗</strong>：光只从高窗和穹顶下的采光带进来，这既是它的困难，也是它的戏剧性来源。<strong>这条历史成因在官网上没有逐字表述，属于广为流传的传统记述，未能从官方渠道确认。</strong>",
          "<strong>1846–1864 年建成，是费城总教区的母堂，也是全美最大的天主教堂之一。</strong>建筑语汇是意大利文艺复兴复兴式（Palladian 传统），前后由 <strong>Napoleon LeBrun 与 John Notman</strong> 两位建筑师接手，外墙为褐石（brownstone），铜制穹顶是 Logan Square 天际线上最容易识别的元素。<strong>1976 年由 Paul VI 擢升为小型宗座圣殿（minor basilica）。</strong>这里同时是 <strong>Shrine of St. Katharine Drexel</strong>（这位费城出身的圣人的遗骸于 2018 年迁入）。<strong>Pope John Paul II 曾于 1979 年到访，Pope Francis 于 2015 年在此主持弥撒。</strong>",
          "<strong>摄影上要认清一件事：它的圆顶从远处比从近处好拍。</strong>教堂坐在 Logan Circle 东南侧（OSM way/252221811，39.95740／-75.16855），<strong>从 Swann Memorial Fountain 看它在方位 109°、距离 184 米</strong>，所以<strong>把它当成喷泉那张照片的背景板</strong>是最有效的用法。贴近拍反而困难：临街立面很高、街道很窄，广角会严重变形。<strong>主入口柱廊朝 18th Street（大致朝西，法向约 279°，由街网 9° 偏转推算；此朝向为推算而非实测）</strong>，因此<strong>立面受光区间是太阳方位 189°–369°，即约 13:15 之后到日落，最佳 16:00–17:30</strong>。"
        ],
        "photo": "建筑外观 <strong>3.5/5</strong>，室内 <strong>4.5/5</strong>，细节 <strong>4/5</strong>，风光 <strong>1/5</strong>。免费、工作日正殿空场、穹顶下的采光很有戏剧性；扣分在室内极暗且不能架三脚架、外立面被窄街与高度限制、以及必须小心分寸。",
        "shots": [
          {
            "name": "正殿中轴对称构图（穹顶下）",
            "view": [
              39.9574,
              -75.16855
            ],
            "desc": "<strong>坐标为 OSM 的 Cathedral of Saints Peter and Paul 建筑轮廓中心（way/252221811）。</strong><strong>最佳 周一至周五 13:00–15:30</strong>：此时太阳高度 30–39°、方位 185–226°，<strong>高窗与穹顶采光带的进光最强，正殿里会出现可见的光柱与落在地面的光斑</strong>；而且这个时段<strong>正殿完全没有礼拜活动</strong>（日常弥撒都在旁边小堂）。<strong>请避开周一至周五 11:30 前后</strong>（正殿有告解）与周六日全天。<strong>构图：24mm 沿中轴向主祭坛拍严格对称的一点透视，这是本堂最强的一张</strong>——要点是<strong>把相机放低到座椅靠背高度、用水平仪校正、镜头中心对准中轴</strong>，柱列一歪整张就废了。<strong>16–20mm 站在穹顶正下方垂直上仰</strong>是第二张必拍（穹顶的圆与鼓座窗的放射几何）；<strong>85mm 单抽祭坛、大理石细节与铜灯</strong>。<strong>参数：这里非常暗（下部几乎无窗是设计使然）。实测需要 ISO 3200–6400、f/1.8–2.8、1/30–1/60</strong>，<strong>强烈建议带一支 24mm 或 20mm 的 f/1.4–1.8 定焦</strong>，这是本区唯一一个「大光圈定焦不可替代」的机位。<strong>白平衡固定 3200–3800K</strong>（暖色钨丝灯为主，混一点高窗的冷光）。<strong>禁闪光是常识；三脚架请一律不要带</strong>——官网只发布了婚礼摄影师的作业规程，<strong>没有面向游客的一般摄影与三脚架政策，这一项未能从官方渠道确认</strong>，在一座活跃的主教座堂里架三脚架一定会被制止。<strong>若能靠住长椅靠背或柱础当支点，快门可以降到 1/15。</strong>"
          },
          {
            "name": "Logan Circle 一侧的褐石穹顶（外观）",
            "view": [
              39.95794,
              -75.17059
            ],
            "desc": "<strong>坐标为 OSM 的 Swann Memorial Fountain 节点，即从喷泉一侧回望教堂的位置；教堂在方位 109°、距离 184 米。</strong><strong>这是拍这栋楼最好的距离</strong>——贴近拍会被窄街与建筑高度逼死，184 米刚好能把整个铜穹顶与褐石体量收进来，还能用喷泉当前景。<strong>最佳 16:00–17:30</strong>：太阳在西南到西（10/22 的 16:30 高度 17°、方位 238°），<strong>褐石在低角度暖光下会转成饱和的红褐色，这是它一天里唯一好看的时候</strong>；正午顶光下褐石是一种很脏的灰褐。<strong>次佳是蓝调</strong>（10/22 约 18:27–18:47）：穹顶泛光已亮、天空还有色，<strong>此时若喷泉还在运行，「亮着的水柱＋亮着的穹顶＋深蓝天空」是本区最完整的一张夜景。</strong>焦段：<strong>85–135mm 从喷泉一侧压缩，让穹顶顶在水柱正后方（招牌构图）</strong>，<strong>50mm 拍「喷泉＋教堂＋环岛树冠」的中景</strong>，<strong>24mm 只在走近到街对面时用于拍立面与柱廊</strong>（会有明显仰角变形，后期要校正）。<strong>Logan Circle 人行道上三脚架自由。</strong>"
          }
        ],
        "access": {
          "book": "<strong>不需预约、不需票，随时可入内私人祈祷与自助参观。</strong><strong>导览团只以极有限的方式提供</strong>（官方原文「being given on a very limited basis」），需发邮件给 cathedral.ambassadors@gmail.com 预约；<strong>另有一场在周日 11:00 弥撒之后的导览，在主祭坛右侧的 Sacred Heart 侧祭坛前集合</strong>（遇洗礼等活动会取消，建议先邮件确认）。团体参观不需预约，但建议先邮件告知日期时间以免撞上仪式。",
          "ticket": "<strong>免费</strong>（教堂内有捐款箱；Cathedral Shop 在主祭坛右侧，周日 10:30–18:30、周三 10:30–14:00、周六 11:00–17:15，电话 215-665-9032）",
          "hours": "官方原文（cathedralphila.org/visitor-information）：<strong>「Sunday from 8:00 AM to 7:30 PM / Monday – Friday from 7:00 AM to 5:00 PM / Saturday from 9:00 AM to 6:30 PM」</strong>，并注明<strong>「Only the Cathedral Chapel is open for the 9:00 AM Mass on Federal Holidays」</strong>（联邦假日只开小堂——注意 <strong>2026 年 10 月 12 日 Indigenous Peoples' Day 是联邦假日</strong>）。<strong>弥撒时间（关键）：周一至周五 7:15 与 12:05 在 Cathedral Chapel（不在正殿）；周六 12:05 在 Chapel、17:15 主日预备弥撒在正殿；周日 8:00／9:30／11:00／18:30 在正殿，12:30 西班牙语在 Chapel。告解：周一至周五 11:30、周六 16:15–17:00、周日 9:00 与 17:30，均在正殿。</strong>→ <strong>拍摄请排在周一至周五，避开 11:30 前后。</strong>",
          "parking": "教堂有 <strong>Archdiocesan Parking Lot（入口在 17th Street）</strong>，官方在婚礼摄影规程里写明<strong>工作日 17:00 之后与周六周日全天可用</strong>——<strong>白天时段能否停放与费率均未能从官方渠道确认。</strong><strong>最实际的是公共交通</strong>：SEPTA Broad Street Line／Market–Frankford Line 到 「15th Street」／「City Hall」站，沿 Parkway 西北行约 900 米；或乘沿 Parkway 与 18th／19th Street 的多条巴士。教堂有三处带坡道的外部入口，<strong>只有主停车场那一侧的门有自动按钮</strong>。",
          "walk": "<strong>到 Swann Memorial Fountain 约 184 米 / 3 分钟</strong>（方位 289°，就在 Logan Circle 对面）；<strong>到 The Barnes Foundation 约 500 米 / 7 分钟</strong>；到 City Hall 沿 Parkway 与 Market Street 约 900 米 / 12 分钟。<strong>堂区办公室在 1723 Race St</strong>（周一至周五 9:00–16:00，<strong>守斋日与联邦假日不开</strong>）。纯拍照 <strong>30–45 分钟</strong>够用。"
        },
        "notes": [
          "<strong>本条目最重要的一条：工作日的日常弥撒在旁边的 Cathedral Chapel 举行，不在正殿。</strong>所以<strong>周一至周五 7:00–17:00 正殿基本空场可拍</strong>，只避开 11:30 前后的告解",
          "<strong>周六 17:15 与周日全天有正殿弥撒，请不要在那些时段拍摄。</strong>这是活跃的主教座堂与总教区母堂，遇到任何仪式（弥撒、婚礼、洗礼、葬礼）请立刻收起相机",
          "<strong>2026 年 10 月 12 日 Indigenous Peoples' Day 是联邦假日，官方明确说明联邦假日只开小堂</strong>——那天来看不到正殿",
          "<strong>室内极暗，这是设计使然</strong>（1844 年反天主教暴动之后窗户被开在投石高度之上）。<strong>带一支 24mm 或 20mm 的 f/1.4–1.8 定焦</strong>，这是本区唯一真正需要大光圈定焦的机位",
          "<strong>三脚架请一律不要带。</strong>官网只发布了婚礼摄影师规程，<strong>没有面向游客的一般摄影与三脚架政策，此项未能从官方渠道确认</strong>；在活跃主教座堂里架三脚架必然被制止",
          "<strong>穹顶从 184 米外的 Swann Fountain 一侧比贴近拍好得多</strong>。把这两个点当成一组来做，用喷泉当前景",
          "<strong>褐石只在 16:00–17:30 的低角度暖光下好看</strong>，正午会拍成脏灰褐",
          "<strong>本条目由 Archdiocese of Philadelphia 运营，不受联邦拨款影响</strong>"
        ],
        "images": [
          {
            "url": "img/2013-cathedral-basilica-of-saints-peter-and-paul-from-across-057cd7e8.jpg",
            "cap": "自 Benjamin Franklin Parkway 对侧看褐石立面与铜穹顶 · Beyond My Ken / CC BY-SA 4.0"
          },
          {
            "url": "img/interior-cathedral-basilica-of-saints-peter-and-paul-crop-5699941a.jpg",
            "cap": "正殿中轴与穹顶下的采光（即主机位视角） · Interstate295r / CC BY-SA 3.0"
          },
          {
            "url": "img/cathedral-basilica-of-saints-peter-and-paul-in-philadelphia--25a2220b.jpg",
            "cap": "Logan Square 一侧的教堂全貌 · 颐园居 / CC BY-SA 4.0"
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
            "url": "img/constitution-gardens-pond-9e79e84b.jpg",
            "cap": "Constitution Gardens 池塘 · Mdy66 / CC BY-SA 4.0"
          },
          {
            "url": "img/washington-monument-from-constitution-gardens-at-sunrise-6c38c1a5.jpg",
            "cap": "自宪法花园望向方尖碑（日出） · Mdy66 / CC BY-SA 4.0"
          },
          {
            "url": "img/constitution-gardens-washington-d-c-july-2017-01-7488b745.jpg",
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
            "desc": "<strong>日落前 40 分钟</strong>（9/25 约 18:20，10/22 约 17:40）。这组 1984 年加建的铜像位于 Apex 南偏西约 50 米的树丛边缘（旗杆旁），<strong>三人的视线朝向墙</strong>——用 70–200mm 从铜像后方越过肩膀拍，让墙作为虚化背景，是唯一能把「妥协产物」重新讲成一句完整叙事的角度。傍晚低角度侧光能勾出铜像表面的绿锈质感。<strong>版权提示：Three Servicemen 的影像版权由 Associated Press 持有，个人游客记录性拍摄无碍，任何商业用途需另行取得授权。</strong>坐标取自 OSM 雕塑本体（way 895985388 / wikidata Q1456408）；<strong>注意 OSM 里另有一个同名的陈旧节点被错标在 200 米外的 23rd St 附近，导航时别用错。</strong>",
            "view": [
              38.890539,
              -77.048168
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
            "url": "img/vietnam-veterans-memorial-wall-9-fdf858c2.jpg",
            "cap": "黑色辉长岩墙面与名字 · Almonroth / CC BY-SA 3.0"
          },
          {
            "url": "img/vietnam-veterans-memorial-wall-3-66e54bc6.jpg",
            "cap": "墙体沿地面切入的纵深 · Almonroth / CC BY-SA 3.0"
          },
          {
            "url": "img/vietnam-memorial-wall-with-washington-monument-fcc00356.jpg",
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
            "url": "img/washington-monument-at-sunrise-97797-2cca5972.jpg",
            "cap": "日出时的方尖碑 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "img/washington-monument-evening-f1c63e15.jpg",
            "cap": "傍晚泛光下的碑体 · Daniel Schwen / CC BY-SA 4.0"
          },
          {
            "url": "img/washington-october-2016-6-c7994066.jpg",
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
            "url": "img/pacific-arch-side-of-national-world-war-ii-memorial-20240601-3fc5ecb9.jpg",
            "cap": "Pacific 拱门一侧 · 颐园居 / CC BY-SA 4.0"
          },
          {
            "url": "img/atlantic-arch-side-of-national-world-war-ii-memorial-2024060-25f6081c.jpg",
            "cap": "Atlantic 拱门与立柱环 · 颐园居 / CC BY-SA 4.0"
          },
          {
            "url": "img/world-war-ii-monument-and-lincoln-memorial-82a11a4b.jpg",
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
            "url": "img/lincoln-memorial-night-focus-cda511cb.jpg",
            "cap": "夜间泛光下的柱廊与林肯像 · Ramakrishna Gundra / CC BY-SA 4.0"
          },
          {
            "url": "img/columns-of-the-lincoln-memorial-against-a-clear-sky-01603ef6.jpg",
            "cap": "仰视 36 根多立克柱 · Brett Guessford / CC BY-SA 4.0"
          },
          {
            "url": "img/2026-06-26-lincoln-memorial-undercroft-entrance-11-29-11-f8b30d6f.jpg",
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
            "url": "img/korean-war-veterans-memorial-pool-of-remembrance-july-2017-0-19b4389f.jpg",
            "cap": "Pool of Remembrance 全景 · MusikAnimal / CC BY-SA 4.0"
          },
          {
            "url": "img/aerial-view-of-korean-war-veterans-memorial-aa7d7711.jpg",
            "cap": "19 座雕像的三角阵列俯瞰 · Carol M. Highsmith / 公有领域"
          },
          {
            "url": "img/korean-war-veterans-memorial-without-soldiers-c01f26c4.jpg",
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
            "url": "img/martin-luther-king-jr-memorial-washington-d-c-43627795282-f770a493.jpg",
            "cap": "Stone of Hope 正面 · CBP Photography / 公有领域"
          },
          {
            "url": "img/martin-luther-king-jr-memorial-10-july-2012-41490fde.jpg",
            "cap": "自 Mountain of Despair 裂口望向雕像 · Another Believer / CC BY-SA 3.0"
          },
          {
            "url": "img/the-martin-luther-king-jr-memorial-and-the-lincoln-memorial--16c1271a.jpg",
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
            "url": "img/fdr-memorial-waterfall-3-394e2d86.jpg",
            "cap": "第三室的乱流瀑布 · Carol M. Highsmith / 公有领域"
          },
          {
            "url": "img/fdr-memorial-on-an-october-afternoon-b67df51f.jpg",
            "cap": "十月午后的花岗岩墙动线 · Lauren Bradish / CC BY-SA 4.0"
          },
          {
            "url": "img/fdrmemorial-77de3616.jpg",
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
            "url": "img/jefferson-memorial-washington-april-2017-002-6ee47be8.jpg",
            "cap": "隔 Tidal Basin 望向圆顶 · King of Hearts / CC BY-SA 4.0"
          },
          {
            "url": "img/jefferson-memorial-as-seen-from-across-the-tidal-basin-flick-9a6dbd96.jpg",
            "cap": "水面倒影与柱廊 · John Brighenti / CC BY 2.0"
          },
          {
            "url": "img/jefferson-memorial-at-dusk-1-9758884f.jpg",
            "cap": "蓝调时分的纪念堂 · Joe Ravi / CC BY-SA 3.0"
          }
        ]
      }
    ]
  },
  {
    "id": "dc-capitol-hill",
    "name": "Washington DC · Capitol Hill 立法与司法建筑群",
    "navName": "Capitol Hill",
    "color": "#4da3ff",
    "lead": "这一区和 National Mall 的露天纪念碑是两种完全不同的游戏。National Mall 24 小时免费无门槛，Capitol Hill 的五个点<strong>全部是要过安检的联邦建筑，全部有闭馆日，两个要抢定时票，而且全部会在联邦政府停摆时关闭</strong>。好消息是停摆风险这次基本被拆掉了——2026 年 9 月 2 日签署的 Public Law 119-103 把联邦拨款延到 <strong>2026 年 12 月 11 日</strong>，覆盖整个 9 月底至 10 月底窗口。坏消息是另一件事：<strong>国会大厦 East Front 从 2026 年夏天起被脚手架和防尘罩包住，要到 2028 年秋天才拆</strong>，所以东立面这次基本报废，全部重心要压到 West Front 的日落。摄影上真正的两个硬目标是 <strong>Library of Congress 的 Main Reading Room</strong>（全美最美室内空间之一，需 30 天前放的定时票，且禁三脚架）与 <strong>West Front 的日落加蓝调穹顶</strong>；Supreme Court 与 Union Station 是稳定的补充；Botanic Garden Conservatory 是本区唯一像样的雨天备案。",
    "callouts": [
      {
        "type": "good",
        "title": "联邦政府停摆：本次窗口内风险已解除（拨款已延续至 12/11）",
        "html": "<p>这五个点<strong>全部依赖联邦拨款</strong>（Capitol、Library of Congress、Botanic Garden 属立法机构，Supreme Court 属司法机构，Union Station 的联邦部分由 USRC/FRA 管），和露天的 Lincoln、Jefferson 纪念堂不一样——<strong>一旦拨款中断，这五个点全部关闭或大幅缩减</strong>：Capitol 停止全部导览、Library of Congress 关闭 Thomas Jefferson Building、Supreme Court 通常仅维持法庭开庭而关闭参观项目、Botanic Garden 直接关门。</p><p><strong>当前状态（截至 2026 年 9 月 5 日）：风险已基本解除。</strong>H.R.6500《Continuing Appropriations and Extensions Act, 2027》已于 <strong>2026 年 9 月 2 日签署成为 Public Law 119-103</strong>，按 FY2026 水平延续拨款，<strong>有效期至 2026 年 12 月 11 日</strong>。参议院 8 月 8 日以 90–6 通过、众议院 9 月 1 日以 370–48 通过，两党票数悬殊，这是近年来罕见的提前一个月完成 CR。原本 FY2026 拨款将于 <strong>9 月 30 日</strong>到期、10 月 1 日进入 FY2027，那才是本区的高危日；现在这个断点已被跨过。</p><p>→ <strong>结论：9 月下旬至 10 月下旬的任何日期，停摆导致关门的概率很低。</strong>真正的下一个断点是 <strong>12 月 11 日</strong>，与本次行程无关。需要注意的是 FY2027 的 12 部拨款法案至今众议院只通过 3 部、参议院 0 部，众议院拨款委员会主席 Tom Cole 已公开表示 12 月「要么全年 CR，要么停摆」——如果你的行程有任何可能推到 12 月中之后，请重新评估。</p><p>出发前一周自查：<a href=\"https://www.congress.gov/bill/119th-congress/house-bill/6500\">congress.gov H.R.6500 法案状态页</a>、<a href=\"https://www.visitthecapitol.gov/\">visitthecapitol.gov</a> 与 <a href=\"https://www.loc.gov/visit/\">loc.gov/visit</a> 的首页公告条。</p>"
      },
      {
        "type": "warn",
        "title": "East Front 被脚手架包住，到 2028 年秋——东立面这次放弃",
        "html": "<p>AOC 的 <strong>Capitol Exterior Preservation – Stone and Metal</strong> 项目第 4 期针对 <strong>East Front</strong>，官方口径：<strong>「Phase 4 has begun and is anticipated to be completed fall 2028」，2026 年夏季开工</strong>。AOC 自己的 FAQ 写明「The project will require scaffolding to execute the work… <strong>A scrim will cover the scaffolding</strong> to control dust and water spray」，并且<strong>夜间会给脚手架与建筑打工作照明</strong>（多数施工安排在周一至周六夜间）。</p><p>→ 实际后果：<strong>East Front Plaza 的东立面、山花雕塑、以及从东侧拍穹顶的机位这次基本不可用</strong>，穹顶本体虽不在施工范围，但下方立面会有防尘罩与钢管入镜，夜景还会有非常难看的施工射灯。<strong>Capitol Visitor Center 的入口仍在东侧地下，进出不受影响</strong>（AOC：「Most doors will remain open」）。</p><p>好消息：<strong>Phase 3 – West Front 已于 2024 年完工</strong>，西立面是干净的。所以本区所有外景重心请全部压到 West Front / Union Square 一侧。</p><p>另外南侧同期在建 <strong>Capitol South Screening Facility</strong>（新的众议院侧安检设施，2026 年刚发包，工期约两年），Capitol 南面也会有围挡。</p>"
      },
      {
        "type": "warn",
        "title": "闭馆日陷阱：周日这一区几乎全军覆没",
        "html": "<p>五个点的闭馆规律完全不一致，排错一天就是白跑。官方口径：</p><ul><li><strong>Capitol Visitor Center：周一至周六 8:30–16:30，周日闭馆。</strong>最后一场导览 15:20 开始（tour 时段 8:40–15:20）。</li><li><strong>Library of Congress（Thomas Jefferson Building）：周二至周六 10:00–17:00，周四延长至 20:00；<u>周日与周一闭馆</u></strong>，最后入场 16:30。</li><li><strong>Supreme Court：周一至周五 9:00–15:00，<u>周六、周日及全部联邦假日闭馆</u></strong>。</li><li><strong>Botanic Garden Conservatory：每天 10:00–17:00</strong>（仅 12/25 闭馆），是本区唯一全周开放的室内点。</li><li><strong>Union Station：每天 5:00–23:00 对公众开放</strong>（23:00–5:00 仅持票乘客），零售周一至周六 10:00–21:00、周日 12:00–18:00。</li></ul><p>→ <strong>周日：Capitol、Library of Congress、Supreme Court 三个全关，只剩 Union Station 与 Botanic Garden。</strong><br>→ <strong>周一：Library of Congress 关（Capitol 与 Supreme Court 开）。</strong><br>→ <strong>周六：Supreme Court 关，而且 Library of Congress 的 Main Reading Room 地面 walkthrough 周六不办</strong>（只有周二至周五与周四晚间）——周六只能从二层 Overlook 隔玻璃看。<br>→ <strong>唯一能一次吃下全部五个点的是周二至周五。</strong>10 月 12 日是 Columbus Day 联邦假日，Supreme Court 与 Library of Congress 会关，请避开。</p>"
      },
      {
        "type": "info",
        "title": "两张必须提前抢的免费票：Capitol 提前 90 天，Library of Congress 提前 30 天",
        "html": "<p><strong>U.S. Capitol 导览票：免费，滚动提前 90 天放。</strong>在 <a href=\"https://www.visitthecapitol.gov/visit/book-a-tour\">visitthecapitol.gov/visit/book-a-tour</a> 注册账号后自助预订（或通过参议员／众议员办公室，公众申请窗口为 7–90 天）。单账号一天最多 10 张。<strong>注意：官方要求「每位参观者的姓名必须在参观前至少 2 天填入预订」</strong>，别订完就不管。</p><p><strong>没抢到怎么办：官方口径是「Reservations are recommended, not required」，当天票（same-day passes）在 Emancipation Hall 的 Information Desk 发放，数量有限。</strong>官方建议无预约者「尽早到，最迟不晚于 14:30」。9 月下旬至 10 月下旬不是旺季（旺季是 3–7 月），当天票拿到的概率不低，但会消耗排队时间。</p><p><strong>Library of Congress 定时票：免费，滚动提前 30 天放，用 Etix 系统。</strong>入口在 <a href=\"https://www.loc.gov/visit/\">loc.gov/visit</a>。单次最多订 20 人。<strong>另有当天票，每个开放日 9:00 ET 在线释放</strong>——这是最可靠的补救路径，定好闹钟。20 人以上团体走另一套表单，可提前 60 天。票不可转让、不可改期，只能发信到 visit@loc.gov 取消。</p><p><strong>没有任何票会怎样：Library of Congress 会被拒于门外</strong>（「Every Library of Congress visitor, regardless of age, must reserve timed-entry passes」，无票不得进楼）；<strong>Capitol 只是要排队等当天票，不会完全进不去</strong>；Supreme Court、Union Station、Botanic Garden <strong>完全不需要预约</strong>。</p><p>顺便：<strong>Capitol Visitor Center 上层、House Appointment Desk 附近有一条通往 Library of Congress 的地下隧道</strong>，两栋楼之间不必出到地面（但 LOC 侧仍要独立安检并验票）。</p>"
      },
      {
        "type": "tip",
        "title": "三脚架：本区五个点没有一个可以随便架",
        "html": "<ul><li><strong>U.S. Capitol Grounds（含 West Lawn、Union Square、Capitol Reflecting Pool、Grant Memorial）：架三脚架需 U.S. Capitol Police 许可。</strong>这不是道听途说——AOC 摄影主管 Michael Dunn 在官方博客里的原话是「please be aware that <strong>use of a tripod requires a special permit from the United States Capitol Police</strong>」。注意 <strong>Union Square 自 2011 年 12 月 Public Law 112-74 起已从 NPS 转归 AOC</strong>，所以反射池那一带算 Capitol Grounds，不是 National Mall。<strong>要合法架脚架拍穹顶，请退到 3rd Street 以西</strong>——那边才是 NPS 管的 National Mall，非商业用途的三脚架不受限制，用 200mm 以上长焦压缩反而效果更好。</li><li><strong>Library of Congress：明确禁止。</strong>2026 年 3 月 19 日生效的联邦法规（36 C.F.R. 702.4，见 Federal Register 2026-05430）把「informal photography for personal use」定义为「不使用任何 supplemental equipment」的手持拍摄，并把 <strong>tripods 明确列入 supplemental equipment</strong>。要用脚架只能申请 formal photography 许可，而<strong>许可时段只在周一——也就是大楼对公众关闭的那天</strong>，45 分钟一场，需提前至少一周申请（PhotoSessions@loc.gov）。</li><li><strong>Supreme Court：楼内与正前方 plaza 禁止三脚架</strong>；界桩（bollards）以外的临街人行道可以用。</li><li><strong>Botanic Garden：可以用，但需许可。</strong>官方政策：手持随便拍，<strong>三脚架或画架需 permit</strong>，提前至少一周写信给 Visitor Services Coordinator（victoria.gesell@aoc.gov），或到 Conservatory 服务台现场申请（<strong>不保证当天批</strong>），且高峰时段不得使用。</li><li><strong>Union Station：未能从官方渠道找到明文的三脚架规定。</strong>这是私营管理的商业物业加交通枢纽，实务上大堂里架脚架通常会被保安劝阻。请按「手持」准备。</li></ul>"
      }
    ],
    "spots": [
      {
        "id": "union-station-dc",
        "n": 1,
        "name": "联合车站",
        "en": "Union Station",
        "score": 4,
        "tldr": "Beaux-Arts 金箔藻井拱顶，免费且每天开到 23:00；南向高窗光柱 11:00–14:00 最好。",
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
            "t": "每天 5:00–23:00",
            "c": "free"
          },
          {
            "t": "大堂已修复无脚手架",
            "c": "good"
          }
        ],
        "highlights": [
          "Daniel Burnham 设计、1907 年启用，是 McMillan Plan 之下 City Beautiful 运动在华盛顿最完整的实现。<strong>启用时它是全世界最大的火车站</strong>，正立面的白色 Vermont granite 拱廊直接照搬罗马 Arch of Constantine 的三拱构成，Main Hall 的桶形拱顶抄的是 Baths of Diocletian",
          "Main Hall 的<strong>格状藻井拱顶高 96 英尺</strong>，是本站唯一真正的摄影目标。<strong>2011 年 8 月那场 5.8 级地震把这块历史石灰泥拱顶震裂</strong>，随后是一场长达数年的修复：五个 bay 逐个做石膏修补、重新上漆并<strong>重铺 23 克拉金箔（超过 12 万张）</strong>，同时在拱顶上方加装了一整套钢支撑系统做抗震加固。<strong>五个 bay 全部于 2016 年春完工，脚手架已全部拆除</strong>",
          "<strong>关于当前施工状态，这次的核实结果是好消息：Main Hall 现在是干净的、没有脚手架。</strong>2016 年修复完成时同步拆掉了 Main Hall 中央的 Center Café 与两个圆形花池，<strong>把拱顶下方的空间恢复成 1907 年原始设计的无遮挡状态、这是近 50 年来第一次</strong>。至于那个长期悬着的重建计划：<strong>USDOT 已于 2026 年 7 月 24 日正式作废那个已获联邦批准的 88 亿美元扩建方案</strong>，改为投 2,400 万美元研究公私合营的新方案，另有 4.66 亿美元用于结构维修、concourse 改造与安保升级。<strong>新方案至今没有设计、造价与工期，所以短期内不会有影响 Main Hall 的大工程</strong>",
          "需要清楚的期待管理：<strong>这里首先是一个运营中的车站加商场</strong>（Amtrak、MARC、VRE、Metro Red 线、长途巴士总站，年客流四千余万）。Main Hall 与 East Hall 很美，但<strong>其余部分是彻底的普通商场</strong>；本条目的价值集中在一个空间、一个题材上，40 分钟足够"
        ],
        "photo": "建筑 <strong>4/5</strong>，人像 <strong>4/5</strong>，风光 <strong>1/5</strong>。拱顶与拱廊是干净的对称几何、又免费又开得晚，人像用大堂做背景非常出片；扣分是可拍范围只有一两个厅、且人流永不间断。",
        "shots": [
          {
            "name": "Main Hall 中轴（拱顶与光柱主机位）",
            "park": [
              38.899133,
              -77.006345
            ],
            "view": [
              38.897406,
              -77.00624
            ],
            "desc": "坐标取自 OSM 中标注为「Main Hall」的建筑实体（way/478697188），即大堂本体。<strong>正立面朝南</strong>（站体到南侧 Columbus Fountain 的实测方位约正南），<strong>因此高处采光来自南向</strong>——<strong>最佳时段是 11:00–14:00</strong>，此时太阳方位 146–200 度、正好穿过南侧高窗。<strong>而且 10 月下旬明显优于 9 月下旬：solar noon 太阳高度从 9/25 的 50 度降到 10/22 的 40 度，光线入射角更平、光柱在大堂里推得更深、更容易在地面拉出成形的光斑</strong>（9 月的 50 度接近顶光，光柱短而陡）。晴天为必要条件，阴天这里只剩一片均匀的平光。<strong>14–24mm 超广站大堂正中垂直上仰</strong>，让藻井格与两端半圆窗形成对称；<strong>24–35mm 平视拍纵深，把光柱与人流剪影一起收进来</strong>；<strong>70–200mm 抽藻井局部的金箔与阴影韵律</strong>做纯抽象。<strong>光比通常超过 7 EV（窗内到藻井阴影），建议拍 3–5 张包围曝光做 HDR</strong>；手持时 ISO 400–1600 足够，光柱段可以压到 ISO 200。"
          },
          {
            "name": "East Hall 拱廊（更安静的替代空间）",
            "view": [
              38.897593,
              -77.006159
            ],
            "desc": "坐标为 OSM 的 Washington Union Station 站体实体点，East Hall 在 Main Hall 东侧、无独立 OSM 节点，<strong>针脚为站体级精度</strong>。这里原是候车厅，现为柱廊环绕的零售与餐饮空间，<strong>彩绘天花与柱头细节比 Main Hall 更密</strong>，而且<strong>人少得多、允许慢慢构图</strong>。光源是天窗与人工照明的混合，<strong>不依赖具体钟点；但 10:00 商店开门前与 20:00 之后人最少</strong>。<strong>24–35mm 沿柱廊中轴拍透视</strong>，<strong>50–85mm 抽彩绘天花与柱头</strong>。这里也是本站最好的人像空间：柱廊侧光柔而有方向，把人放在两根柱子之间的暗区、让侧光勾轮廓。"
          },
          {
            "name": "Columbus Fountain 与南立面（日落与蓝调）",
            "view": [
              38.896388,
              -77.006599
            ],
            "desc": "坐标为 OSM 的 Columbus Fountain 实体点，在站前 Columbus Circle 上。<strong>正立面朝南，而日落方位 269 度（9/25）到 256 度（10/22）——即落日几乎从正西沿立面掠过，形成很强的横向擦射光</strong>，白色花岗岩的拱廊与柱头会被拉出长阴影，这是本立面唯一有立体感的时段：<strong>9/25 的 18:15–19:00、10/22 的 17:30–18:19</strong>。日落后立面泛光照明加深蓝天，<strong>19:05–19:30（10 月 18:25–18:50）</strong>是蓝调版本。Lorado Taft 1912 年的这座喷泉中央是 Columbus 立像，两侧有代表新旧大陆的卧像。<strong>24–35mm 用喷泉做前景、三拱门做背景</strong>。<strong>额外的构图：站体到 Capitol 穹顶实测方位 196 度、距离约 900 米</strong>，从 Columbus Circle 沿 Delaware Avenue 向南南西方向<strong>可以把穹顶收进画面，用 135–200mm 压缩</strong>，是「车站＋国会」的双主体构图。<strong>广场属公共道路空间，三脚架限制远小于 Capitol Grounds，但车流密集请紧贴环岛内侧</strong>。"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>",
          "ticket": "<strong>免费</strong>",
          "hours": "官方原文：<strong>「Washington Union Station is open 7 days a week」，「Union Station is closed to the public daily from 11PM to 5AM. During that time, the station will only be accessible to ticketed passengers.」</strong>→ <strong>公众每天 5:00–23:00，全年无闭馆日</strong>，是本区时间上最宽松的点。零售店铺周一至周六 10:00–21:00、周日 12:00–18:00；美食广场周一至周六 7:00–21:00、周日 7:00–18:00；正餐厅各自不同。<strong>Main Hall 与 East Hall 的建筑空间在 5:00–23:00 全程可进，不受店铺营业时间限制</strong>",
          "parking": "<strong>本区唯一有正规大型停车场的点</strong>：Union Station Parking Garage（站体北侧，4 层，入口在 1st Street NE / H Street NE 一侧）。<strong>具体费率未能从官方渠道核实</strong>，请现场看牌。也因此这里是「开车来 Capitol Hill」最现实的落脚点——停这里再步行或坐一站 Metro 去 Capitol",
          "walk": "Metro <strong>Union Station</strong> 站（Red 线）出站到 Main Hall 约 <strong>140 米 / 2 分钟</strong>，是本区最省力的点。停车楼到 Main Hall 约 200 米 / 3 分钟。步行去 Capitol 约 900 米 / 12 分钟，去 Supreme Court 约 850 米 / 11 分钟"
        },
        "notes": [
          "<strong>三脚架政策未能从官方渠道确认。</strong>这是私营管理的商业物业加交通枢纽，官网未见明文摄影规定；实务上大堂内架三脚架通常会被保安劝阻，<strong>请按纯手持准备</strong>。若要拍商业内容，需联系 Union Station 物业方申请",
          "<strong>人流是这里最大的构图障碍，而且没有任何时段是空的。</strong>最好的应对不是等空场，而是<strong>反向利用</strong>：用 1/8–1/15 秒让人流拖成虚影、拱顶保持清晰（手持配合机身防抖可行），或干脆把人做剪影放进光柱里。真要接近空场，只有<strong>清晨 5:00–6:30</strong>（但那时没有光柱）与<strong>21:30–23:00</strong>",
          "<strong>金箔藻井对白平衡很敏感</strong>：23 克拉金箔反射会把整个拱顶推向强黄，自动白平衡容易过度校正、把金子拉成灰。<strong>建议手动锁白平衡在 4500–5200K（晴天光柱时段）</strong>，拍 RAW 后期再调",
          "本站是运营中的车站，<strong>站台区与 Amtrak 候车区需车票才能进</strong>，不要试图进去拍列车。Main Hall、East Hall 与商业区不需车票",
          "<strong>站前 Columbus Circle 东侧的 Thurgood Marshall Federal Judiciary Building 目前有 AOC 的立面加固工程在进行</strong>（「Thurgood Marshall Façade Stabilization」，状态为 On Going），拍站前广场大场景时注意避开那一侧的围挡",
          "夜间站前广场与周边（尤其 H Street 与 Massachusetts Avenue 一带）人流复杂，<strong>21:00 后带显眼器材独行请提高警惕</strong>；站内有警力，站外无",
          "这里是本区唯一有大量餐饮与卫生间、且可以坐下来的地方，<strong>适合放在 Capitol Hill 一天行程的中段或收尾</strong>"
        ],
        "images": [
          {
            "url": "img/great-hall-washington-union-station-2024-l1005585-394bb995.jpg",
            "cap": "Main Hall 藻井拱顶 · Frank Schulenburg / CC BY-SA 4.0"
          },
          {
            "url": "img/washington-union-station-panoramic-54342017.jpg",
            "cap": "Main Hall 旋转镜头全景 · Antony-22 / CC BY-SA 4.0"
          },
          {
            "url": "img/east-hall-washington-union-station-2024-l1005594-4e33818b.jpg",
            "cap": "East Hall 拱廊与彩绘天花 · Frank Schulenburg / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "supreme-court",
        "n": 2,
        "name": "美国最高法院",
        "en": "Supreme Court of the United States",
        "score": 4,
        "tldr": "免费不预约，西立面铭文与 Great Hall 可拍；周末全关、15:00 关门，法庭内禁拍。",
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
            "t": "周末与假日闭馆",
            "c": "risk"
          },
          {
            "t": "15:00 就关门",
            "c": "risk"
          },
          {
            "t": "法庭内禁拍",
            "c": "risk"
          }
        ],
        "highlights": [
          "Cass Gilbert 设计、1929–1935 年建成。在此之前<strong>最高法院成立后的 146 年里一直没有自己的房子</strong>，长期借用国会大厦里的房间（包括现在的 Old Supreme Court Chamber）。外墙用<strong>佛蒙特 Imperial Danby 白色大理石</strong>，四个内庭院用乔治亚白色大理石，室内走廊用阿拉巴马乳白大理石",
          "西立面山花下的檐部刻着 <strong>「EQUAL JUSTICE UNDER LAW」</strong>——这句话<strong>不是引自宪法或任何法律文本，而是 Cass Gilbert 的事务所为了填满这块石头而拟的</strong>，四个词恰好排满檐部的长度。它后来反倒成了美国司法体系被引用最多的标语之一",
          "大台阶两侧是 James Earle Fraser 1935 年的两座坐像：北侧 <strong>Contemplation of Justice</strong>（女性像，手托一尊小型正义女神），南侧 <strong>Authority of Law</strong>（男性像，手持法典与剑）。这两座像是西立面构图里最好用的前景元素，且都有可核对的 OSM 坐标",
          "<strong>Courtroom Lecture 是普通游客进入法庭的唯一方式</strong>（官方原文：「Other than attending a Court session, Courtroom Lectures are the only way visitors may enter the Courtroom」）。25 分钟，全程在法庭内进行，由志愿讲解员带。<strong>时段为周一至周五 10:30、11:30、12:30、13:30、14:30；但联邦假日与「法院开庭日」不办。</strong>→ 已核实 <strong>October Term 2026 的 10 月庭期为 10 月 5、6、7 日与 10 月 13、14 日</strong>（10 月 12 日 Columbus Day 为假日）。<strong>所以：9 月下旬本届庭期尚未开始、10 月 19 日之后 10 月已无排庭，这两段时间讲座应正常运行；10 月 5–14 那一周半是空档区</strong>",
          "<strong>摄影规则很干净：公共区域可以拍，法庭内任何时候都不行。</strong>官方原文「Visitors may take non-flash photographs and videos for personal use in the public portions of the ground and first floors. Photography and audio/video recording is not permitted inside the Courtroom at any time.」→ <strong>Courtroom Lecture 你能进去听、但一张都不能拍</strong>；能拍的是 Great Hall、大台阶、以及一层与地下层的公共走廊与展览"
        ],
        "photo": "建筑 <strong>4.5/5</strong>，人像 <strong>3/5</strong>，风光 <strong>1/5</strong>。西立面是纯正的古典主义正面构图、且日落顺光；Great Hall 的柱廊纵深很强。扣分是开放时间短、周末全关、法庭这个最强空间完全不能拍。",
        "shots": [
          {
            "name": "西侧 plaza 正对立面（Contemplation of Justice 侧）",
            "view": [
              38.890742,
              -77.005225
            ],
            "desc": "坐标为 OSM 的 Contemplation of Justice 雕像实体点，在大台阶北侧。<strong>西立面朝西（法线约 270 度），与 Capitol West Front 同一个道理：日落是顺光而非逆光</strong>。<strong>9/25 黄金光 17:45–19:00（日落 19:00）、10/22 黄金光 17:00–18:19（日落 18:19）</strong>；白色大理石在低角度暖光下会转成奶油金，这是本立面最好的状态。<strong>建筑本身 15:00 就关门，但外景在公共人行道上不受时间限制</strong>——<strong>所以正确的安排是：白天进楼拍内部，日落再回来拍外立面</strong>。<strong>16–24mm 超广贴着雕像基座上仰</strong>，让雕像做近前景、16 根科林斯柱与山花做背景；<strong>24–35mm 平视拍完整正立面</strong>，注意保持相机水平否则柱子会外八。日落后 <strong>19:05–19:30（10 月为 18:25–18:50）</strong>大理石会被立面射灯打成暖白配深蓝天，是另一个成立的版本。<strong>plaza 上禁三脚架，界桩以外的临街人行道可以架</strong>。"
          },
          {
            "name": "「Equal Justice Under Law」檐部长焦特写",
            "view": [
              38.890494,
              -77.005221
            ],
            "desc": "坐标为 OSM 的 Authority of Law 雕像实体点，在大台阶南侧。<strong>70–200mm，200mm 端最好</strong>，从 plaza 后退到 1st Street NE 人行道上向上抽檐部。<strong>时段与上一机位一致（日落前 1 小时到日落）</strong>：斜射光能在浮雕字母的凿痕里留下阴影，字才立得起来；<strong>正午顶光会把字打平、几乎读不出来</strong>。构图两种：一是只留檐部铭文加上方 Robert Aitken 的山花群像做满幅，二是把 Authority of Law 的头肩剪影放在画面下缘、铭文在其上方，形成「法典—铭文」的双层呼应。<strong>注意 2025 年 1 月起法院在西立面做过一轮工程</strong>（加装照明、West Portico 防鸟系统、大理石清洗，官方公告称约八个月），<strong>本次未能确认脚手架是否已完全拆除</strong>——出发前请刷一眼近期照片。"
          },
          {
            "name": "Great Hall 内部柱廊",
            "park": [
              38.890742,
              -77.005225
            ],
            "view": [
              38.890593,
              -77.004439
            ],
            "desc": "坐标为 OSM 的 Supreme Court 建筑实体点，室内房间无独立 OSM 节点。<strong>Great Hall 在一层、法庭正前方</strong>，双排巨型大理石柱夹着一条纵深走廊，两侧壁龛里是历任首席大法官的胸像。<strong>光源是两端的高窗与柱间的间接照明，属稳定的低照度混合光，不依赖钟点</strong>——但<strong>建筑 9:00 开门、15:00 关门，所以你只有这 6 小时</strong>，且 <strong>Courtroom Lecture 的排队队伍就在 Great Hall 里形成</strong>（讲座前 15 分钟开始聚集），<strong>要拍空旷的走廊请在 9:00–10:15 之间来，或者错开每个整点半的讲座前 15 分钟</strong>。<strong>24–35mm 沿走廊中轴向法庭方向拍柱列的透视递退</strong>；<strong>85mm 抽单个首席大法官胸像</strong>，用后方柱子的虚化做背景。<strong>禁闭光灯、禁三脚架，ISO 1600–4000、f/2–f/2.8 手持</strong>。地下层还有 Cass Gilbert 设计的螺旋大理石楼梯与常设展览，同样可拍。"
          }
        ],
        "access": {
          "book": "<strong>不需预约。</strong>Courtroom Lecture 也不预约，<strong>队伍在一层 Great Hall、法庭门外现场排</strong>，官方建议提前至少 15 分钟到（春夏更早）。若想旁听庭辩（10 月 5、6、7、13、14 日 10:00 开庭），目前是「在线抽签＋当日先到先坐」的试点并行：当日队伍在 East Capitol Street 一侧人行道排，约 9:30 开始放人入座",
          "ticket": "<strong>免费</strong>",
          "hours": "官方原文：<strong>「The Supreme Court Building is open Monday to Friday from 9 a.m. to 3 p.m. It is closed on weekends and all federal holidays.」</strong><strong>Courtroom Lecture：周一至周五 10:30、11:30、12:30、13:30、14:30，联邦假日与法院开庭日不办</strong>，且「subject to cancellation due to Court business and… volunteer docent availability」。<strong>2026 年 10 月开庭日为 10/5、10/6、10/7、10/13、10/14；10/12 Columbus Day 全馆闭馆。</strong>官方另有一句必须照做的话：<strong>「the business of the Court may affect public access to the building and visitor programs. Please check Today at the Court on the homepage」</strong>——出发当天刷 supremecourt.gov 首页的 Today at the Court",
          "parking": "<strong>无游客停车场</strong>，周边为 Capitol Hill 居民区限时表位。Metro <strong>Capitol South</strong>（Blue／Orange／Silver 线）或 <strong>Union Station</strong>（Red 线）",
          "walk": "Metro Capitol South 站步行约 <strong>620 米 / 8 分钟</strong>；Union Station 站约 <strong>850 米 / 11 分钟</strong>。<strong>入口不在正面大台阶上</strong>，而在 plaza 层大台阶左右两侧的门（Northwest Door 与 Southwest Door），无障碍入口在 Maryland Avenue 一侧。开庭日 7:30 起对公务与旁听者开门"
        },
        "notes": [
          "<strong>法庭内任何时候都禁止摄影与录音录像</strong>，这是本条目最硬的一条。开庭期间法庭内另禁一切电子设备（含相机、手机、平板、智能手表）、食品饮料、包袋、帽子、外套、墨镜、书刊（笔记本可以）",
          "<strong>三脚架：楼内与正前方 plaza 都不允许，界桩（bollards）以外的临街人行道可以用。</strong>商业拍摄与影视拍摄需另行申请许可",
          "<strong>楼内完全禁止带入食品与饮料，连瓶装水都不行</strong>（官方原文「including bottled water」），只能在地下层的 Café 与自动售货机凹间内饮食。包尺寸上限同样是 18\" × 14\" × 8.5\"",
          "<strong>建筑 15:00 关门，比本区其他任何点都早</strong>。而日落在 9 月下旬是 19:00、10 月下旬是 18:19——<strong>内外景在同一天必须分两趟，中间隔三到四个小时</strong>。合理的接法是：下午 13:30–15:00 拍内部，然后走 400 米去 Library of Congress 或 Capitol，日落前再回来拍西立面",
          "<strong>未能核实的一项：2025 年 1 月 29 日法院公告的 West Façade Project</strong>（加装建筑与场地照明、West Portico 防鸟系统、外墙大理石清洗，需在西侧搭脚手架，工期约八个月、夜间施工）<strong>是否已完全收尾、脚手架是否已拆</strong>。AOC 官员在 2026 年 2 月的公开访谈中把最高法院的立面工程列为「2026 年内完工」的项目，但法院自 2025 年 1 月后未再发布相关公告，官网也无施工提示。<strong>出发前请搜一次近期实地照片确认西立面是否干净</strong>",
          "春夏（3–6 月）安检排队明显更长，<strong>9 月下旬至 10 月下旬是这栋楼一年里人最少、最好拍的时段之一</strong>",
          "一层与地下层有常设展览、Café 与礼品店；官方建议参观时长 1–1.5 小时（讲座 30 分钟＋展览与公共空间 30–60 分钟）"
        ],
        "images": [
          {
            "url": "img/panorama-of-united-states-supreme-court-building-at-dusk-9baea9bb.jpg",
            "cap": "西立面黄昏全景 · Joe Ravi / CC BY-SA 3.0"
          },
          {
            "url": "img/courtequaljustice-508582ca.jpg",
            "cap": "檐部「Equal Justice Under Law」铭文 · MattWade / CC BY-SA 3.0"
          },
          {
            "url": "img/usa-supreme-court-f5ef549f.jpg",
            "cap": "大台阶与科林斯柱廊 · Ingfbruno / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "us-capitol",
        "n": 3,
        "name": "美国国会大厦",
        "en": "United States Capitol",
        "score": 5,
        "tldr": "West Front 日落是本区第一机位；East Front 脚手架报废至 2028；导览免费但建议提前 90 天订。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "建议提前 90 天订票",
            "c": "risk"
          },
          {
            "t": "East Front 施工中",
            "c": "risk"
          },
          {
            "t": "三脚架需警方许可",
            "c": "risk"
          },
          {
            "t": "周日闭馆",
            "c": "risk"
          }
        ],
        "highlights": [
          "穹顶是 1855–1866 年在南北战争期间建成的<strong>铸铁</strong>结构，8,909,200 磅、由 Thomas U. Walter 设计，用来替换 Charles Bulfinch 那个矮而扁的木石穹顶。<strong>林肯坚持在战争最激烈的时候继续施工</strong>，理由是「如果人们看到穹顶继续建下去，就会知道联邦会继续存在下去」——顶端的 Statue of Freedom 最后一块在 1863 年 12 月 2 日安装完成",
          "Rotunda 直径 96 英尺、地面到穹顶内壁 180 英尺，顶部是 Constantino Brumidi 1865 年完成的《The Apotheosis of Washington》壁画，<strong>面积 4,664 平方英尺，画在距地面 180 英尺的凹面上；Brumidi 当年 65 岁，吊在脚手架上画了 11 个月</strong>。这块壁画是全楼唯一值得带广角来的目标",
          "National Statuary Hall 是 1807–1857 年的旧众议院议场，半圆形加希腊复兴式穹顶。<strong>它有一个著名的声学缺陷：穹顶把声音聚焦到特定几个点上，站在某些位置能听清房间对面的私下交谈</strong>——据说当年 John Quincy Adams 就是靠这一点在自己座位上偷听政敌。现在 50 个州各出两座雕像的收藏散布全楼，Statuary Hall 内只放 38 座",
          "<strong>本次最关键的坏消息：East Front 从 2026 年夏起进入 AOC 石材保护工程第 4 期，脚手架加防尘罩，官方预计 2028 年秋完工。</strong>而 West Front（Phase 3）已于 2024 年完工、立面干净。→ <strong>把全部外景预算压到西侧，东侧只当作走进 Visitor Center 的通道</strong>",
          "<strong>国会是否开会，对拍照几乎没有意义。</strong>官方禁止在 House／Senate Gallery 携带 <strong>「battery operated electronic devices」</strong>——相机与手机全部要在旁听席门口的寄存台交出。所以旁听席只是「看」的价值，不是机位。参考数据：<strong>众议院选前的最后一个投票日是 9 月 17 日</strong>——领导层已于 9 月 3 日取消了 9/21 与 9/28 两周的投票，之后一路休会到 11 月 9 日复会（11 月 3 日中期选举）；<strong>参议院 10 月 5 日至 11 月 6 日为 State Work Period</strong>。→ <strong>你 10/21–10/25 在 DC 的整段时间，两院都不开会。</strong>好处是这段休会长于一周，因此<strong>参议院旁听席按规定应当开放</strong>（平日 9:00 至 16:00–16:15），众议院旁听席在不开会时也照常开放（平日 9:00–16:00）——两边都进得去，只是里面空着。既然相机本来就要寄存，空场反而没有损失"
        ],
        "photo": "建筑 <strong>5/5</strong>，风光 <strong>3.5/5</strong>，人像 <strong>3/5</strong>。西立面加反射池是华盛顿最经典的建筑构图之一，且日落方位几乎正对轴线；扣分是东立面施工、三脚架要许可、以及室内只能跟团走。",
        "shots": [
          {
            "name": "Capitol Reflecting Pool 东岸（西立面日落主机位）",
            "park": [
              38.888805,
              -77.017739
            ],
            "view": [
              38.889831,
              -77.013688
            ],
            "desc": "<strong>这是本区第一机位。</strong>从反射池到穹顶的方位角实测 <strong>90.3 度</strong>，即西立面法线约 270 度；而 <strong>9 月 25 日日落方位 269 度、10 月 22 日日落方位 256 度</strong>——<strong>意味着西立面在日落时是被正面照亮的顺光，不是逆光</strong>，9 月下旬几乎是分秒不差地正对轴线，10 月下旬偏南 13 度、变成很好看的斜射侧光。<strong>9/25：黄金光 17:45–19:00（日落 19:00），蓝调 19:05–19:30（民用暮光 19:26 结束）；10/22：黄金光 17:00–18:19（日落 18:19），蓝调 18:25–18:50。</strong>穹顶常年夜间泛光照明，所以蓝调段「暖穹顶＋深蓝天」是这里的招牌版本。<strong>24–70mm 主力</strong>，35mm 拍池面倒影加完整立面，70mm 抽穹顶＋列柱。池水无风时倒影完整，注意 10 月清晨常有的风会把倒影打散。<strong>三脚架在这里属 Capitol Grounds、需 USCP 许可</strong>，手持请把 ISO 拉到 1600–6400 并靠池边石栏稳定。"
          },
          {
            "name": "Grant Memorial 骑马像前景（长焦压缩）",
            "view": [
              38.889764,
              -77.012899
            ],
            "desc": "<strong>16:30 至日落</strong>。Grant Memorial 到穹顶实测方位 <strong>89.1 度、距离 328 米</strong>，是本区少见的「近前景＋压缩背景」位置。<strong>70–200mm 是首选</strong>：把 Grant 的青铜骑马像与两侧的骑兵、炮兵群像压到与穹顶同一量级，让青铜的冷黑与大理石的暖白对撞。135mm 左右能把骑马像正好框在穹顶正下方。也可以往北 100 米用 Peace Monument（38.8906, -77.0123，到穹顶方位 108 度）换一个偏斜的对位关系。<strong>青铜在正午顶光下会死黑，必须等到侧光时段</strong>。"
          },
          {
            "name": "National Mall（3rd Street 以西，唯一可合法架脚架的位置）",
            "park": [
              38.888805,
              -77.017739
            ],
            "view": [
              38.888805,
              -77.017739
            ],
            "desc": "坐标取自 OSM 的 Jefferson Drive SW 路段节点，位置在 <strong>3rd Street 以西——这里已属 NPS 管辖的 National Mall，非商业用途的三脚架不受限制</strong>，是本区唯一不用申请许可就能长曝的穹顶机位。距穹顶约 <strong>900 米</strong>，<strong>必须用 200–400mm</strong>，短于 200mm 穹顶会小得没有意义。长焦压缩把穹顶、Grant Memorial、行道树叠成层次，是本机位存在的全部理由。<strong>另一个只在这个窗口成立的题材：National Mall 的东西轴线实测方位 89.1 度（华盛顿纪念碑→穹顶），而 9 月 22 日秋分的日出方位正好是 89.1 度、9 月 25 日为 90.6 度</strong>——即<strong>秋分前后数日太阳几乎沿轴线从穹顶后方升起</strong>。9/25 日出 06:58，考虑穹顶本身的仰角（约 3 度），太阳越过穹顶时方位已偏南到 93–94 度，落在穹顶右侧一点；<strong>请在 06:45 到位，06:55–07:20 密集拍摄</strong>。到 10 月 22 日日出方位已跑到 103.7 度、偏南十几度，这个对位关系不再成立。日出方向是<strong>纯逆光</strong>，请按剪影拍，或用 -1.5 到 -2 EV 保住太阳周围的层次。"
          },
          {
            "name": "Rotunda 与 National Statuary Hall（跟团，唯一的室内机位）",
            "park": [
              38.889804,
              -77.007458
            ],
            "view": [
              38.889813,
              -77.009021
            ],
            "desc": "坐标为 OSM 的 Capitol 建筑实体点，室内房间无独立 OSM 节点。<strong>导览全程约 45–60 分钟，含 Crypt、Rotunda、National Statuary Hall，路线随时可能改</strong>。Rotunda 内是<strong>纯人工照明加穹顶采光的混合光，色温混杂且非常暗</strong>，光比集中在《Apotheosis》壁画与下方阴影之间。<strong>14–20mm 超广是必需的</strong>：站 Rotunda 正中垂直上仰，让穹顶壁画与 frieze 形成同心圆构图；24mm 已经吃不下。<strong>禁三脚架、要跟着队伍走、通常只停留 8–12 分钟</strong>——所以必须预设参数：<strong>ISO 3200–6400、f/2.8、1/40–1/60，开机身防抖，直接连拍三张挑最稳的一张</strong>。Statuary Hall 换 24–35mm 拍雕像的密集排列与半圆穹顶，85mm 抽单座雕像。<strong>建议选 8:40 或 9:00 的第一批场次</strong>，Rotunda 里人最少。相机在 Visitor Center 与导览全程都允许使用，<strong>只有 Exhibition Hall 展出历史文件的那一段禁拍</strong>。"
          }
        ],
        "access": {
          "book": "<strong>强烈建议预约，但不是强制。</strong>免费定时导览票<strong>滚动提前 90 天</strong>在 <a href=\"https://www.visitthecapitol.gov/visit/book-a-tour\">visitthecapitol.gov/visit/book-a-tour</a> 自助预订，或通过参众议员办公室（公众申请窗口 7–90 天）；也可电话 202.226.8000。<strong>官方要求参观前至少 2 天补齐每位参观者姓名。</strong>没预约照样能进：Emancipation Hall 的 Information Desk 每天发放限量当天票，<strong>官方建议最迟 14:30 前到场</strong>。<strong>House／Senate Gallery 不含在导览内，需另领通行证</strong>——外国访客<strong>持本国有效身份证件（护照）到 Visitor Center 上层的 House 与 Senate Appointment Desk 现场索取</strong>，无需事先申请。中文导览每日 8:40 一场，需提前预约",
          "ticket": "<strong>完全免费</strong>，进 Visitor Center 与参加导览都不收费",
          "hours": "官方原文：<strong>「The Capitol Visitor Center is open Monday-Saturday from 8:30 a.m.-4:30 p.m.」，周日闭馆</strong>，另于 Thanksgiving、Christmas Day、New Year's Day、Inauguration Day 闭馆。<strong>导览场次 8:40–15:20，最后一场 15:20 开始</strong>。Exhibition Hall 8:30–16:30，Capitol Cafe 8:30–16:00，礼品店 9:00–16:30。旁听席：<strong>House Gallery 在众议院不开会时平日 9:00–16:00 开放</strong>、周末与假日闭馆（除非在开会），且「subject to unplanned, temporary closures」；<strong>Senate Gallery 仅在一周以上的休会期内平日 9:00–16:15 开放</strong>，不足一周的休会期不开。<strong>官方另有一句必须记住的话：「The U.S. Capitol is subject to the unscheduled suspension of tours」</strong>——临时停团随时可能，出发当天再刷一次首页",
          "parking": "<strong>Capitol Grounds 内没有游客停车场，不要开车来。</strong>周边 Capitol Hill 街边为居民区限时表位，执法很严。若必须开车，Union Station 停车楼（50 Massachusetts Ave NE）是最近的大型车库，步行约 15 分钟。<strong>公共交通是唯一合理方案</strong>：Metro <strong>Capitol South</strong> 站（Blue／Orange／Silver 线）最近；反射池一侧用 Federal Center SW 或 Smithsonian 站更近",
          "walk": "Metro Capitol South 站到 Visitor Center 东侧入口约 <strong>530 米 / 7 分钟</strong>；到 Capitol Reflecting Pool 约 <strong>830 米 / 11 分钟</strong>（绕行 Capitol Grounds，实际更远，建议改走 Federal Center SW）。<strong>安检队伍在旺季可排 30–45 分钟，9–10 月通常 10–20 分钟，请在场次前 45–60 分钟到场</strong>"
        },
        "notes": [
          "<strong>安检与禁带物品（2025 年 7 月更新版）：包的尺寸上限是 18\" 宽 × 14\" 高 × 8.5\" 深</strong>——普通摄影背包在这个尺寸内是允许的，但<strong>楼内没有寄存柜</strong>，超尺寸的包只能拿回车上或酒店。相机、镜头、电池均可带入，<strong>Capitol 与 Visitor Center 内明确禁止「Food, beverages」</strong>（连未开封的都不行，餐厅买的食物也不许带出餐厅），空的水瓶可以带、进去再灌",
          "<strong>三脚架在整个 Capitol Grounds 上需要 U.S. Capitol Police 许可</strong>（AOC 官方博客明文），申请走 USCP Special Events Section，需提前至少 10 天。<strong>Union Square 与 Capitol Reflecting Pool 自 2011 年 Public Law 112-74 起已归 AOC，同样受此约束</strong>；退到 3rd Street 以西的 National Mall 则不受限。自拍杆可以带入但<strong>禁止使用</strong>",
          "<strong>旁听席（Gallery）另有一层更严的规定：「battery operated electronic devices」全面禁止</strong>，相机、手机、平板、智能手表都要在门口的寄存台交出；瓶罐、食品饮料、婴儿车、包袋也全部禁止。<strong>把旁听席当成一次纯观看的行程，不要带任何拍摄期待</strong>。旁听席入口在 Visitor Center 上层，需二次安检，Joint Session 期间不对公众开放",
          "<strong>East Front 施工的连带影响：夜间施工照明会污染东侧全部夜景。</strong>AOC 明确「At night the scaffold and building will be lighted」，施工时段为周一至周六夜间。如果你想拍穹顶夜景，<strong>只能从西侧拍</strong>",
          "<strong>穹顶内部（Dome Tour，可以爬到穹顶内壁走廊）只能由参众议员办公室安排</strong>，公众无法自行预约；外国访客基本没有渠道。不要指望能上穹顶",
          "<strong>Capitol Visitor Center 上层、House Appointment Desk 附近有直通 Library of Congress 的地下隧道</strong>，天气不好时是这两个点之间最舒服的连接方式，但 LOC 一侧仍需独立安检并出示定时票",
          "9 月下旬至 10 月下旬是 Capitol Grounds 秋色期：AOC 的说法是<strong>「从 10 月初到 11 月，秋色是一株一株、一簇一簇陆续爆的，从来不会同时到位」</strong>（园内树种极杂，多为纪念树，来自各州）。想拍秋叶加穹顶，<strong>东北象限（Capitol Square 东北角）有一株银杏是 AOC 摄影师自己点名的最佳目标</strong>——但那一侧现在有 East Front 脚手架，构图要小心避开"
        ],
        "images": [
          {
            "url": "img/west-front-of-united-states-capitol-in-december-2017-2074c39c.jpg",
            "cap": "West Front 全景 · Mys 721tx / CC BY-SA 3.0"
          },
          {
            "url": "img/capitol-dome-at-dusk-with-the-tholos-illuminated-45170379825-86b72d72.jpg",
            "cap": "蓝调时段的泛光穹顶 · John Brighenti / CC BY 2.0"
          },
          {
            "url": "img/capitol-rotunda-20240601-59f9e138.jpg",
            "cap": "Rotunda 与 Apotheosis 壁画 · 颐园居 / CC BY 4.0"
          }
        ]
      },
      {
        "id": "library-of-congress-jefferson",
        "n": 4,
        "name": "国会图书馆 · 杰斐逊大楼",
        "en": "Library of Congress · Thomas Jefferson Building",
        "score": 5,
        "tldr": "全美最美室内空间之一；免费但需 30 天前抢定时票，周日周一闭馆，法规明文禁三脚架。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "必须有定时票",
            "c": "risk"
          },
          {
            "t": "周日周一闭馆",
            "c": "risk"
          },
          {
            "t": "法规禁三脚架",
            "c": "risk"
          },
          {
            "t": "阅览室仅二至五开放",
            "c": "risk"
          }
        ],
        "highlights": [
          "1897 年落成，是<strong>美国第一座专门为图书馆建造的意大利文艺复兴式建筑</strong>，也是当时全世界最大、造价最高的图书馆。国会给的预算是 650 万美元，最后<strong>实际花了 626 万、提前完工并有结余</strong>——这在 19 世纪末的联邦工程里是罕见的。楼内动用了 <strong>50 余位美国画家与雕塑家</strong>，是美国境内单一建筑内最大规模的本土艺术委托",
          "Main Reading Room 是一个八角形空间，<strong>直径 100 英尺、地面到穹顶顶端 160 英尺</strong>，八根巨柱之上是 8 座象征文明的女性雕像与 16 座历史人物青铜像，中央环形出纳台外放射出 250 个阅览座位。<strong>它由顶部的 lantern（采光亭）从正上方采光</strong>——这一点决定了这里的全部曝光策略",
          "Great Hall 是入口大厅：<strong>双层柱廊、彩色大理石地面上镶嵌黄铜的黄道十二宫，天花是彩色玻璃加金箔的格状藻井</strong>，二层回廊能俯视整个大厅。这里没有 Main Reading Room 的时段限制，是本楼<strong>唯一可以慢慢磨构图的空间</strong>",
          "<strong>Main Reading Room 有两种看法，规则完全不同：</strong>（1）<strong>二层 Overlook</strong>——从 Great Hall 二层进入，隔玻璃俯拍整个阅览室，随定时票开放；（2）<strong>地面 5 分钟 walkthrough</strong>——官方原文「short, 5-minute walkthroughs around the center desk」，绕中央出纳台走一圈，<strong>仅周二至周五 10:30–11:30 与 14:00–15:00，加周四晚 17:00–19:00；周六不办</strong>。免费票在 Great Hall 现场发，<strong>每场开始前 10 分钟起、先到先得</strong>",
          "<strong>关于「限制摄影日」：没有查到任何针对特定日期的摄影禁令，但有一条 2026 年新生效的联邦法规必须知道。</strong>2026 年 3 月 19 日生效的 36 C.F.R. 702.4 把参观者的手持拍摄定义为「informal photography for personal use」并明确允许，但<strong>把 tripods 与任何「rest on surfaces」的支撑装置、外置补光、外接麦克风、道具、背景布全部归为禁用的 supplemental equipment</strong>。要用这些只能申请 formal photography 许可，而<strong>许可只在周一发放——也就是大楼对公众关闭的日子</strong>"
        ],
        "photo": "建筑 <strong>5/5</strong>，人像 <strong>3.5/5</strong>（法规禁止摆拍与「directing subjects」），风光 <strong>0.5/5</strong>。本区乃至全华盛顿最强的室内建筑摄影目标；扣分全部来自规则：定时票、闭馆日、5 分钟限时、禁三脚架。",
        "shots": [
          {
            "name": "Main Reading Room 二层 Overlook（隔玻璃俯拍）",
            "park": [
              38.888689,
              -77.005777
            ],
            "view": [
              38.888683,
              -77.004646
            ],
            "desc": "坐标为 OSM 的 Thomas Jefferson Building 实体中心点（Main Reading Room 正是这栋楼的中央穹顶空间），<strong>房间本身无独立 OSM 节点，针脚为建筑级精度</strong>。<strong>光线：阅览室由顶部 lantern 从正上方采光，加高处半圆窗补光，穹顶内壁与柱头因此常年处于「上亮下暗」的垂直光梯度</strong>，地面出纳台一带比穹顶暗 3–4 EV。<strong>晴天正午（solar noon 12:52–13:00，9 月下旬太阳高度 50 度、10 月下旬 40 度）lantern 直射最强，穹顶会过曝而地面仍暗；反而薄云或阴天的均匀天光是这里最好的条件</strong>。<strong>16–24mm 超广是必需的</strong>，从 Overlook 的窗口向下俯拍，让放射状的书桌形成同心圆图案。<strong>务必拍 3–5 张包围曝光做 HDR</strong>。<strong>器材注意：Overlook 是封闭玻璃</strong>，请带一块橡胶遮光罩或用手掌贴住镜头前缘压在玻璃上消除反光，偏振镜在这里帮助有限（反光来自身后的室内灯）。<strong>官方明说 10:00–12:00 是全馆客流高峰、Overlook 会排长队</strong>——请安排 <strong>14:00–16:00</strong>，或直接选<strong>周四 17:00–19:30</strong>（延长开放到 20:00，人最少）。"
          },
          {
            "name": "Main Reading Room 地面 walkthrough（每场 5 分钟）",
            "view": [
              38.888683,
              -77.004646
            ],
            "desc": "同上坐标，建筑级精度。<strong>仅周二至周五 10:30–11:30、14:00–15:00，与周四 17:00–19:00；周六与周一无此项目。</strong>票在 Great Hall 现场领，<strong>开场前 10 分钟起发、先到先得</strong>，请提前 20 分钟去排。<strong>只有 5 分钟，而且是跟着走、不能停留</strong>——所以必须在进门前把参数定死：<strong>f/1.8–f/2.8、ISO 3200–6400、1/50–1/80，机身防抖全开，白平衡手动锁在 3200–3800K</strong>（室内是钨丝灯加天光的混合光，自动白平衡会在两个色温之间跳）。<strong>一支 20mm 或 24mm f/1.4–f/1.8 定焦在这里的价值远高于变焦</strong>：从地面仰拍穹顶，用中央出纳台的环形做前景。不要试图在 5 分钟里换镜头。<strong>三脚架、独脚架、把相机搁在栏杆或桌面上都在法规的 supplemental equipment 定义内</strong>，请纯手持。"
          },
          {
            "name": "Great Hall 大理石楼梯与彩玻璃藻井",
            "view": [
              38.888683,
              -77.004646
            ],
            "desc": "同上坐标，建筑级精度。<strong>没有时段限制，全开放时间可拍，是本楼唯一能慢慢磨的空间。</strong>光源是拱顶天窗与彩色玻璃藻井，属常年柔散射光，<strong>不依赖具体钟点</strong>；但入口一侧的大门在下午会有西斜光打进来，<strong>9 月下旬 17:00–18:30、10 月下旬 16:00–17:00</strong> 会在大理石地面上拉出长条光斑，这是唯一有「方向」的时段。<strong>14–24mm 超广贴楼梯扶手上仰</strong>，把双层柱廊与藻井压成对称框；<strong>85mm 或 100mm 微距拍楼梯栏柱上的小天使雕像（cherubs）与地面黄道十二宫的黄铜镶嵌</strong>。二层回廊是俯拍大厅地面图案的唯一位置。<strong>ISO 800–2000、f/2.8–f/4 足够</strong>，比 Main Reading Room 宽裕得多。"
          },
          {
            "name": "Court of Neptune Fountain 与西立面外景",
            "view": [
              38.888689,
              -77.005777
            ],
            "desc": "坐标为 OSM 的 Court of Neptune Fountain 实体点，在 1st Street SE 上、正对大楼西入口。<strong>西立面朝西（法线约 270 度），因此和 Capitol West Front 同理，日落是顺光</strong>：<strong>9/25 黄金光 17:45–19:00、10/22 黄金光 17:00–18:19</strong>。Roland Hinton Perry 1898 年的这组青铜喷泉里，海神 Neptune 坐像高 12 英尺，两侧有骑海马的 Tritons 与骑海龟的水中仙女。<strong>24–35mm 把喷泉做前景、立面与穹顶做背景</strong>；<strong>70–200mm 单拍 Neptune 的青铜肌理</strong>，侧光时段最能勾出细节。青铜在顶光下会死黑，正午不要来。<strong>这里属 Library Buildings and Grounds、同受 USCP 管辖，三脚架政策与 Capitol Grounds 一致（需许可），但未能从官方渠道找到针对本喷泉位置的明文规定</strong>，请按需许可准备。"
          }
        ],
        "access": {
          "book": "<strong>必须有免费定时票（timed-entry ticket）才能进楼，无票不得入内</strong>，官方原文：「Every Library of Congress visitor, regardless of age, must reserve timed-entry passes」。放票规则：<strong>滚动提前 30 天</strong>在 <a href=\"https://www.loc.gov/visit/\">loc.gov/visit</a> 经 Etix 系统预订，单次最多 20 人；<strong>另有当天票，每个开放日 9:00 ET 在线释放</strong>，这是最可靠的补救路径。票不可转让、不可改期，取消需发信 visit@loc.gov。20 人以上团体走 group registration form，可提前 60 天、需约 3 个工作日审核。<strong>周四晚 17:00 起的「Live! at the Library」需另一张专用票，白天的定时票在周四 16:30 后失效</strong>。Main Reading Room 地面 walkthrough 不预约，现场先到先得",
          "ticket": "<strong>免费</strong>（定时票也免费）",
          "hours": "官方原文：<strong>「The Thomas Jefferson Building is open to visitors Tuesday through Saturday from 10 a.m. to 5 p.m.」，「Closed: Sundays, Mondays, and select federal holidays」，周四延长至 20:00</strong>。<strong>最后入场 16:30</strong>（周四晚场另计）。<strong>Main Reading Room 地面 walkthrough：周二至周五 10:30–11:30 与 14:00–15:00，周四另有 17:00–19:00；周六不办。</strong>Library Store 周二至周三、周五至周六 10:00–17:00，周四 10:00–20:00。<strong>注意：阅览室对持证研究者是另一套时间表（含周一开放），与游客时段无关</strong>。10 月 12 日 Columbus Day 属联邦假日，预计闭馆，请以官网首页公告为准",
          "parking": "<strong>无游客停车场。</strong>周边 Capitol Hill 为居民区限时表位，执法严格，不建议开车。Metro <strong>Capitol South</strong> 站（Blue／Orange／Silver 线）最近；也可从 Union Station（Red 线）步行约 1.1 公里",
          "walk": "Metro Capitol South 站到大楼西侧游客入口约 <strong>410 米 / 5–6 分钟</strong>。<strong>入口在 1st Street SE、Independence Ave 与 East Capitol Street 之间的大台阶下方</strong>（不是正面大台阶上的门），定时票在这里扫码，出入同一个口。安检为「airport-like」，9–10 月通常 5–15 分钟（旺季 3–7 月会明显更久）。<strong>也可从 Capitol Visitor Center 上层走地下隧道过来</strong>"
        },
        "notes": [
          "<strong>三脚架、独脚架、外置补光、外接麦克风、道具与背景布全部禁止</strong>，法规依据是 2026 年 3 月 19 日生效的 36 C.F.R. 702.4：只有「不使用任何 supplemental equipment」的单机手持拍摄属于免许可的 informal photography。<strong>法规还明确把「rest on surfaces」或「permit separation between the photographer and the equipment」的装置归入禁用范围</strong>——所以把相机搁在栏杆上做长曝在字面上也是越界的（实务中鲜有人被拦，但请自行判断）。<strong>另外「非商业内容创作」（non-commercial content creation）也被划入需要许可的 formal photography</strong>，如果你在拍系统性的 vlog 或专题，法规上是需要报批的",
          "<strong>要合法用脚架只有一条路：申请 formal photography 许可，而许可只在周一发放</strong>（大楼对公众关闭日），45 分钟一场，需提前至少一周申请、3–5 个工作日审核，联系 PhotoSessions@loc.gov。<strong>这对认真拍室内建筑的人其实是本区最值得花时间的一件事</strong>——空场加脚架的 Main Reading Room 与开放日的手持完全不是一个量级",
          "<strong>禁带物品与包尺寸上限和 Capitol 一致（18\" × 14\" × 8.5\"），但有一个关键差异：LOC 允许带食品饮料（原包装）</strong>，而 Capitol 完全禁止。<strong>楼内 Ground Floor 有免费寄存（coat check），背包、外套、婴儿车都可以免费寄放</strong>——拍室内时把大包寄掉会舒服很多",
          "<strong>楼内没有餐饮</strong>，官方直接建议「进楼前吃饱喝足」。走完全部公共空间约需 90 分钟、步行约 0.8 公里",
          "定时票有 15 分钟粒度的入场窗口，<strong>官方要求「不要早于票面时间到场」</strong>；票扫码位置在大台阶下方，别走错到正面大台阶",
          "<strong>「Main Reading Room Overlook 是否开放」这一项已核实为开放</strong>：官方 Know Before You Go 页面在讨论客流时明确写「During this timeframe, there may be long lines to access the Main Reading Room Overlook」，即 Overlook 在正常运营。但官方同时留了一句「Some exhibitions, interactives, and indoor spaces may be closed or operate at limited capacity」，<strong>临时关闭的可能始终存在</strong>",
          "目前不提供团体导览，<strong>但有少量小团 guided tours 通过同一个 Etix 票务系统发放</strong>，值得在订定时票时顺手看一眼有没有余位；馆内有巡场志愿者可问路与讲解"
        ],
        "images": [
          {
            "url": "img/loc-main-reading-room-highsmith-168e8bba.jpg",
            "cap": "Main Reading Room 全景 · Carol M. Highsmith / Public domain"
          },
          {
            "url": "img/main-reading-room-of-the-library-of-congress-5-4a68da94.jpg",
            "cap": "自 Overlook 俯视阅览室 · APK / CC BY 4.0"
          },
          {
            "url": "img/library-congress-october-2016-2a-3229c728.jpg",
            "cap": "Great Hall 柱廊与藻井 · Alvesgaspar / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "us-botanic-garden",
        "n": 5,
        "name": "美国植物园温室",
        "en": "United States Botanic Garden Conservatory",
        "score": 3.5,
        "tldr": "本区唯一雨天备案：免费不预约、每天 10:00–17:00；三脚架需提前一周申请许可。",
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
            "t": "每天开放",
            "c": "good"
          },
          {
            "t": "三脚架需许可",
            "c": "risk"
          },
          {
            "t": "17:00 关门",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>1820 年设立，是北美持续运营时间最长的植物园</strong>，构想直接来自 George Washington、Thomas Jefferson 与 James Madison。现在的玻璃温室（Conservatory）建于 1933 年、2001 年完成大修，馆藏超过 <strong>9,500 个登录号、44,000 余株植物</strong>，从沙漠到热带雨林到兰花分区展示。它由 Architect of the Capitol 管理，行政上属立法机构",
          "<strong>本条目在这一区的真正价值不是植物，而是三件事：它是唯一每天开放的点（仅 12 月 25 日闭馆）、唯一完全不需要票或预约的室内空间、以及唯一像样的雨天与阴天备案。</strong>Capitol 周日关、Library of Congress 周日周一关、Supreme Court 周末关——这里永远开着",
          "选点说明：<strong>任务里给的备选是 Bartholdi Fountain 或 Capitol Reflecting Pool，我选择保留 Botanic Garden Conservatory 为主条目，并把 Bartholdi Fountain 收进本条目做一个机位</strong>（两者相距仅 240 米、同属 USBG 管辖、Bartholdi 独立成条太单薄）；Capitol Reflecting Pool 则已作为 U.S. Capitol 条目的第一机位处理。<strong>Bartholdi Fountain 是 Frédéric Auguste Bartholdi 为 1876 年费城百年博览会所作，同一位作者八年后完成了自由女神像</strong>，这座「Fountain of Light and Water」1877 年由联邦买下移来华盛顿"
        ],
        "photo": "建筑 <strong>3.5/5</strong>，人像 <strong>4/5</strong>，风光 <strong>2.5/5</strong>。温室的钢骨玻璃结构加高架步道能出不错的室内建筑构图，热带区的柔散射光对人像非常友好；扣分是空间不大、玻璃结构本身不如本区其他四栋建筑有分量。",
        "shots": [
          {
            "name": "Tropics 中庭高架步道（雨天主机位）",
            "view": [
              38.887963,
              -77.012912
            ],
            "desc": "坐标为 OSM 的 Conservatory 实体（relation/1029372），温室内房间无独立节点。中央的 Tropics 房间是全馆最高的空间，<strong>有一条环绕上层的高架步道，是唯一能俯拍棕榈冠层并同时纳入上方玻璃屋顶钢骨的位置</strong>。<strong>光线是玻璃漫射后的柔光，全天均匀、不依赖钟点——这正是它作为雨天／阴天备案的全部理由</strong>；反过来说<strong>晴天正午（solar noon 12:52–13:00）会有强烈的顶光光斑加钢骨影子打在叶面上</strong>，那是另一种题材，喜欢就挑晴天中午来。<strong>16–24mm 超广在步道上仰拍钢骨与玻璃的网格</strong>；<strong>50mm 或 85mm 拍叶片的透光肌理</strong>；<strong>100mm 微距拍兰花区</strong>。<strong>器材注意：温室内湿度极高，从室外进来镜头会立刻起雾</strong>——请<strong>提前 10 分钟把相机放在包里适应温度</strong>，并带两三块超细纤维布。<strong>官方建议平日 10:00–11:00 到（避开学生团）</strong>。"
          },
          {
            "name": "Bartholdi Fountain（自由女神作者的另一件作品）",
            "view": [
              38.887131,
              -77.012666
            ],
            "desc": "坐标为 OSM 的 Bartholdi Fountain 实体点，在 Independence Avenue 南侧、温室对面，属 Bartholdi Park。<strong>开放时间是 dawn to dusk——比温室的 10:00–17:00 宽得多，所以这里是本条目唯一能拍日出与日落的机位</strong>。<strong>喷泉到 Capitol 穹顶的实测方位是 46.6 度、距离 434 米</strong>，即穹顶在东北方向；<strong>日落方位 269 度（9/25）／256 度（10/22）意味着落日在你背后偏西，正面顺光照亮喷泉、同时穹顶也在受光面</strong>——<strong>可以用 35–50mm 把喷泉做前景、穹顶放在画面右上，一张收下两个主体</strong>。<strong>最佳时段：9/25 的 18:15–19:00、10/22 的 17:30–18:19</strong>，之后蓝调段喷泉本身有夜间照明。<strong>这里游客极少</strong>，是本区最安静的一个机位。<strong>注意穹顶方向有 East Front 脚手架的风险</strong>：从西南方向看过去主要是西立面与南立面，受影响有限，但长焦压缩时请检查画面里有没有钢管。"
          },
          {
            "name": "National Garden 户外花园（穹顶背景）",
            "view": [
              38.888102,
              -77.014182
            ],
            "desc": "坐标为 OSM 的 National Garden 实体（relation/12300247），在温室西侧。<strong>开放时间 7:30–17:00</strong>——注意<strong>4 月 1 日至 9 月 15 日才延长到 19:00，本次窗口（9 月下旬起）已恢复 17:00 关门</strong>，也就是说<strong>整个 9 月下旬至 10 月下旬，这个户外花园都赶不上日落</strong>（日落 19:00 / 18:19），请不要按黄金时段规划。<strong>可用的最佳时段是 15:30–17:00</strong>，斜射光加 Rose Garden 与 Regional Garden 的植栽、背景是 Capitol 穹顶。<strong>35–85mm</strong>，用花做前景虚化、穹顶压在背景。园内的 Amphitheater（38.8879, -77.0147）是一个下沉式圆形石阶空间，可作封闭式人像背景。<strong>10 月下旬 DC 的多年生植栽已过盛期</strong>，别期待花墙。"
          }
        ],
        "access": {
          "book": "<strong>不需预约。</strong>官方原文：「Admission to the U.S. Botanic Garden is free. No tickets required.」<strong>唯一需要提前申请的是三脚架许可</strong>：提前至少一周写信给 Visitor Services Coordinator Victoria Gesell（victoria.gesell@aoc.gov），或到 Conservatory 服务台现场申请，<strong>官方明说「same-day permit requests are not guaranteed」</strong>",
          "ticket": "<strong>完全免费</strong>",
          "hours": "官方原文：<strong>Conservatory「10 a.m. to 5 p.m. daily (closed Dec. 25)」</strong>；<strong>Bartholdi Fountain and Gardens「Dawn to dusk」</strong>；<strong>National Garden（gated outdoor gardens）7:30–17:00，仅 4/1–9/15 延长至 19:00</strong>——本次窗口内按 17:00 关门计。2026 年的四个夏季延长开放日（6/18、7/16、8/20 或 8/27、9/17，开到 20:00）<strong>全部早于 9 月下旬，本次窗口内没有延长开放日</strong>。礼品店在 West Gallery，随温室时间",
          "parking": "<strong>无游客停车场</strong>（官方 FAQ 明确「Can I park at the Garden?」为否）。周边 Independence Avenue 与 Washington Avenue SW 有少量街边表位。Metro <strong>Federal Center SW</strong>（Blue／Orange／Silver 线）最近，<strong>Capitol South</strong> 次近，L'Enfant Plaza 也可用",
          "walk": "Metro Federal Center SW 站到 Conservatory 约 <strong>430 米 / 6 分钟</strong>；Capitol South 站约 <strong>660 米 / 9 分钟</strong>。<strong>温室到 Bartholdi Fountain 约 240 米 / 3 分钟</strong>（穿过 Independence Avenue）；温室到 Capitol Reflecting Pool 约 <strong>300 米 / 4 分钟</strong>，到 Capitol Visitor Center 约 <strong>800 米 / 11 分钟</strong>。<strong>安检比本区其他点轻得多</strong>"
        },
        "notes": [
          "<strong>三脚架与画架必须有许可</strong>，官方原文：「the use of a tripod or easel requires a permit」，且<strong>「organized classes and the use of tripods, art equipment, or easels are not allowed during periods of peak visitation」</strong>——高峰时段即便有许可也不能用。使用时需<strong>随身出示许可</strong>。手持相机与手持摄像机全时段自由使用",
          "<strong>「摆拍」被明确禁止</strong>：官方原文「We do not allow visitors to do photoshoots or video shoots at the Garden」，并点名婚纱、时装、孕妇、毕业、订婚与全家福。<strong>带模特来这里拍人像组图是违规的</strong>，随手抓拍同行者不受影响。专业或收费摄影一律不允许，照片不得商用",
          "<strong>湿度是本条目最实际的技术障碍。</strong>Tropics 与 Jungle 房间常年高湿高温，<strong>从室外直接进去镜头必然起雾，且需 5–15 分钟才能恢复</strong>。对策：进门前把相机装包内静置、先逛干燥的 Desert 区过渡、随身两三块超细纤维布。<strong>玻璃与叶面反光很强，一片偏振镜会明显有用</strong>",
          "<strong>无人机明确禁止</strong>（在禁带清单上），闪光灯类的「external flash equipment or bulky accessory equipment」同样不允许",
          "<strong>本园与 Capitol、Library of Congress 一样属立法机构拨款范围，联邦停摆时会直接关门</strong>。本次窗口内因 Public Law 119-103 已覆盖至 12 月 11 日，风险很低",
          "<strong>可以带食品饮料进园</strong>，户外有桌椅（但垃圾桶少，官方要求自行带走）；<strong>园内没有正式餐厅</strong>，仅夏季周末有第三方饮品摊，本次窗口内可能已停。有饮水机与灌瓶点",
          "园内当前特展是「America's State Flowers: An America250 Celebration」（各州与属地的官方州花，活体植栽加植物插画加标本），<strong>是 2026 年独有的题材，值得顺手拍</strong>"
        ],
        "images": [
          {
            "url": "img/u-s-botanic-garden-conservatory-23696022410-0bd80502.jpg",
            "cap": "温室内部与钢骨玻璃屋顶 · DC Gardens / CC BY 2.0"
          },
          {
            "url": "img/united-states-botanic-garden-by-matt-bisanz-0577c21a.jpg",
            "cap": "Conservatory 外观 · MBisanz / CC BY-SA 3.0"
          },
          {
            "url": "img/bartholdi-fountain-96a3b450.jpg",
            "cap": "Bartholdi Fountain · EP313 / CC BY-SA 4.0"
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
            "url": "img/lafayette-park-and-the-north-portico-of-the-white-house-381e1795.jpg",
            "cap": "Lafayette Park 越过草坪看北门廊，即封闭前的视角 · TCY / CC BY-SA 3.0"
          },
          {
            "url": "img/the-white-house-and-the-lafayette-park-bebab7b1.jpg",
            "cap": "白宫与 Lafayette Park 全景 · Carol M. Highsmith / Public domain"
          },
          {
            "url": "img/the-people-s-house-a-white-house-experience-1-9b4a191a.jpg",
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
            "url": "img/museum-kogod-courtyard-2-96277ccb.jpg",
            "cap": "Kogod Courtyard 波浪玻璃顶全景 · Amy Vaughters, Smithsonian American Art Museum / CC BY-SA 3.0"
          },
          {
            "url": "img/museum-kogod-courtyard-5-48a459c4.jpg",
            "cap": "斜交网格与周边老墙的新旧界面 · Zack Frank, Smithsonian American Art Museum / CC BY-SA 3.0"
          },
          {
            "url": "img/panorama-of-the-western-facade-of-the-donald-w-reynolds-cent-85e17ef3.jpg",
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
            "url": "img/ford-s-theatre-interior-washington-d-c-6c8e4530.jpg",
            "cap": "剧场观众厅与总统包厢 · Wknight94 / CC BY-SA 3.0"
          },
          {
            "url": "img/the-interior-of-the-president-s-box-in-ford-s-theatre-430c59b7.jpg",
            "cap": "总统包厢内部（仅可从外拍摄）· Cory Hartman / CC BY-SA 3.0"
          },
          {
            "url": "img/petersen-house-washington-d-c-img-4512-d74e9873.jpg",
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
            "url": "img/us-national-archives-building-ca28ae4f.jpg",
            "cap": "Constitution Avenue 南立面柱廊 · David Samuel (User:Hellodavey1902) / CC BY-SA 3.0"
          },
          {
            "url": "img/ceiling-of-national-archives-rotunda-3f1967f1.jpg",
            "cap": "Rotunda 藻井穹顶，仰拍机位所见 · PatrykTBrown / CC0"
          },
          {
            "url": "img/usa-archives-of-the-united-states-of-america0-5cf134b8.jpg",
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
            "url": "img/east-building-of-the-national-gallery-of-art-atrium-a1532ce7.jpg",
            "cap": "East Building 天光中庭与三角梁架 · Difference engine / CC BY-SA 4.0"
          },
          {
            "url": "img/mercury-fountain-in-the-rotunda-of-the-national-gallery-of-a-6d365975.jpg",
            "cap": "West Building Rotunda 与 Mercury 喷泉 · John Menard / CC BY-SA 2.0"
          },
          {
            "url": "img/national-gallery-of-art-sculpture-garden-fountain-270c741d.jpg",
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
            "url": "img/the-iconic-african-elephant-specimen-at-the-center-of-the-sm-a0848535.jpg",
            "cap": "Rotunda 中央的非洲象 · Syed07 / CC BY 4.0"
          },
          {
            "url": "img/nationalhistoryelephant-7dc1d5af.jpg",
            "cap": "二层环廊俯拍视角与八角穹顶 · Sbrools / CC BY-SA 3.0"
          },
          {
            "url": "img/aerial-view-of-elephant-in-nmnh-rotunda-1981-8722701453-3bc02463.jpg",
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
            "url": "img/national-museum-of-african-american-history-and-culture-in-f-f98e1e73.jpg",
            "cap": "corona 青铜格栅外立面 · Frank Schulenburg / CC BY-SA 4.0"
          },
          {
            "url": "img/national-museum-of-african-american-history-and-culture-and--2f33425d.jpg",
            "cap": "与 Washington Monument 同框，可见 17 度倾角关系 · Mdy66 / CC BY-SA 4.0"
          },
          {
            "url": "img/interior-of-the-national-museum-of-african-american-history--9da57170.jpg",
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
            "url": "img/smithsonian-castle-viewed-from-the-enid-a-haupt-garden-2014-ce45a99d.jpg",
            "cap": "从 Haupt 花园看城堡南立面，即招牌机位 · Rizka / CC BY-SA 4.0"
          },
          {
            "url": "img/the-smithsonian-castle-in-winter-f8e4deed.jpg",
            "cap": "红色 Seneca 砂岩塔楼群 · Northern-Virginia-Photographer / CC BY-SA 4.0"
          },
          {
            "url": "img/enid-haupt-garden-6965483747-85e00861.jpg",
            "cap": "Haupt 花园刺绣式花坛 · Payton Chung / CC BY 2.0"
          }
        ]
      }
    ]
  },
  {
    "id": "northern-virginia",
    "name": "Northern Virginia · Arlington 与 Potomac 西岸",
    "navName": "N. Virginia",
    "color": "#4bd18a",
    "lead": "Potomac 西岸这一片是整个 DC 都会区<strong>唯一能在同一天里拍到「军礼仪式 + 城市天际线 + 十八世纪庄园 + 卵石老街 + 大瀑布」的组合</strong>，而且它的行政归属极为分散——Army、NPS、私营基金会、市政府各占一块，这意味着<strong>它同时也是全 DC 抗联邦停摆能力最强的一个子地区</strong>。摄影上最关键的一条几何事实是：<strong>Iwo Jima Memorial 与 Netherlands Carillon 都在 Arlington Ridge 上向东俯瞰 DC</strong>，所以它们是<strong>日出拍天际线、日落拍纪念碑本体</strong>的双重机位，而不是一般攻略里含糊说的「傍晚去」。Arlington National Cemetery 8:00–17:00 的硬性作息把它彻底排除在金色时段之外，Mount Vernon 9:00–17:00 同理——<strong>这一区的黄金光线只能给免费、无门禁的那三处</strong>。",
    "callouts": [
      {
        "type": "good",
        "title": "本区是全 DC 最强的「停摆免疫」备胎；而且这次窗口内根本不会停摆",
        "html": "<p><strong>先说结论：2026 年 9 月 2 日，H.R. 6500《Continuing Appropriations and Extensions Act, 2027》已签署成法</strong>，按 FY2026 水平为各联邦机构提供拨款至 <strong>2026 年 12 月 11 日</strong>（或相应正式拨款法案通过之日，以较早者为准）。也就是说<strong>九月下旬到十月下旬的整个行程窗口都被覆盖，本次不存在联邦停摆风险</strong>；下一个悬崖是 12 月 11 日。</p><p>但这一区的抗停摆结构本身值得记住，因为它是全 DC 最好的备胎池。七个点位的归属与停摆后果分别是：</p><ul><li><strong>Mount Vernon —— 完全免疫。</strong>由 Mount Vernon Ladies’ Association（1853 年成立的私营组织）运营，<strong>历史上从未接受联邦运营拨款</strong>，联邦停摆期间照常开放收票。这是本区最硬的一张牌。</li><li><strong>Old Town Alexandria 与 Torpedo Factory Art Center —— 完全免疫。</strong>King Street 是市政街道，Torpedo Factory 由 City of Alexandria 运营，两者与联邦拨款无关。</li><li><strong>Arlington National Cemetery —— 高概率照常开放。</strong>由 U.S. Army 运营，军人葬礼属于必须继续执行的职能，历次停摆中墓园本体都保持开放、Tomb 哨兵二十四小时不间断。但<strong>解说服务、Welcome Center 展陈与 tram 班次可能缩减</strong>，且这属于历史惯例而非成文保证。</li><li><strong>Arlington House —— 会关。</strong>它是 NPS 单位（挂在 George Washington Memorial Parkway 下），虽然物理位置在 Army 的墓园里，但建筑本体、博物馆与两处 Enslaved Quarters 由 NPS 管，停摆即闭门。</li><li><strong>Marine Corps War Memorial 与 Netherlands Carillon —— 大概率仍可进入。</strong>NPS 管辖，但都是<strong>无门无栅栏的露天纪念地</strong>，停摆时通常物理可达，只是无人值守、厕所锁闭、垃圾不清。</li><li><strong>Theodore Roosevelt Island —— 风险中等。</strong>NPS，停车场有闸口，可能被锁；从 Rosslyn 沿 Mount Vernon Trail 步行或骑行过人行桥通常仍进得去。</li><li><strong>Great Falls Park —— 风险最高。</strong>NPS，<strong>有实体收费亭与大门</strong>，历次停摆中曾整园上锁。这是本区唯一真正可能完全去不了的点。</li></ul><p>换句话说：<strong>Mount Vernon + Old Town Alexandria + Arlington National Cemetery 这三点足够撑起一整天高质量拍摄，且几乎完全不受联邦拨款影响</strong>。DC 河东岸的 Smithsonian 与 National Mall 建筑内景一旦停摆全线阵亡，本区是唯一的整块替代方案。</p>"
      },
      {
        "type": "warn",
        "title": "Arlington 换岗频率 10 月 1 日切换；三脚架政策极严",
        "html": "<p><strong>Tomb of the Unknown Soldier 的换岗仪式频率按官方原文分季：「every hour on the hour from October 1 through March 31, and every half hour from April 1 through September 30」。</strong>这条对行程影响很大：<strong>9 月 25 日去，整点与半点都有场次，等待上限 30 分钟；10 月 22 日去，只有整点一场，错过就是整整一小时。</strong>墓园开放 8:00–17:00，因此 10 月场次实际只有 <strong>9:00、10:00、11:00、12:00、13:00、14:00、15:00、16:00</strong> 这八次（8:00 为开门时刻，需预留安检时间）。闭园时段哨兵每 2 小时换一次，公众看不到。</p><p><strong>三脚架：官方 Prohibited Items 清单明列「Tripods which cannot fit into a purse/small bag」以及「Unauthorized media/photography equipment」。</strong>实务口径是——能塞进小包的桌面脚架／迷你脚架可过安检，<strong>常规摄影三脚架基本进不去</strong>。想用大脚架或明显的专业器材，须事先联系 ANC Public Affairs Office（703-614-0024）。</p><p><strong>这是一座仍在使用的墓园，工作日每天有 27–30 场葬礼。</strong>官方 Media Policy 的原文要求「refraining from taking pictures of or filming someone who is visibly mourning」，并要求拍摄正在扫墓的人须先征得许可。<strong>正在进行的葬礼一律不要拍，不要靠近，不要用长焦「远远拍一下」。</strong>葬礼也可能导致 tram 改线或临时封闭某些站点与道路。</p>"
      },
      {
        "type": "tip",
        "title": "秋色时间窗：DC 低地峰值在 10 月底至 11 月初，九月下旬完全没有色彩",
        "html": "<p>综合 Old Farmer’s Almanac 的历史物候分析、Virginia Tourism 的分区口径与 2026 年长期预报，DC 都会区这种低海拔平原的秋色进度是：<strong>Shenandoah National Park 与 Blue Ridge 山区约 10 月 10–20 日到峰，而 Arlington / Alexandria / Fairfax 这些低地要晚一到两周，near-peak 约 10 月 20–27 日，真正峰值落在 10 月 25 日至 11 月 8 日这个区间</strong>。</p><p>2026 年的修正项：Old Farmer’s Almanac 预测 Atlantic Corridor 九、十月气温约低于常年 <strong>1°F</strong>、降水少约 <strong>1 英寸</strong>。偏冷偏干通常让转色略微提前、饱和度更高，所以 2026 年<strong>可以把上述窗口整体往前挪三到五天来预期</strong>，但仍然不会早于 10 月中旬。</p><p>对本区的直接结论：</p><ul><li><strong>9 月 25 日左右去：Theodore Roosevelt Island 与 Great Falls Park 基本全绿</strong>，没有任何秋色价值。这两处此时应该按「地质构造与水」和「花岗岩纪念碑」来拍，不要按「红叶」来期待，<strong>Theodore Roosevelt Island 在此时可以降级或直接跳过</strong>。</li><li><strong>10 月 22 日左右去：处于 near-peak 边缘</strong>，Great Falls 因为略偏内陆、地势稍高，通常比 Old Town 的行道树早几天，Mather Gorge 两侧崖壁林会有可观的黄与橙；Theodore Roosevelt Island 的枫、橡、山核桃开始上色但未必到位。<strong>如果整个行程可以微调，把这两处排到 10 月最后一周比排到 10 月 22 日明显更值。</strong></li></ul>"
      },
      {
        "type": "info",
        "title": "日出日落钟点与方位角；以及 GW Parkway 的施工封路",
        "html": "<p>华盛顿特区（38.89°N, 77.04°W）实算值，两个日期均处于 EDT（夏令时 2026 年 11 月 1 日才结束）：</p><ul><li><strong>9 月 25 日：日出 06:59（方位角 91°，正东）／日落 19:00（方位角 269°，正西）。</strong>民用晨昏蒙影各约再向外 26 分钟，即 06:33 与 19:26。</li><li><strong>10 月 22 日：日出 07:25（方位角 104°，东偏南）／日落 18:20（方位角 256°，西偏南）。</strong></li></ul><p><strong>关键几何：从 Iwo Jima Memorial 望向 Capitol 的方位角约 91°，望向 Washington Monument 约 92°；从 Netherlands Carillon 望向这条轴线约 86–88°。</strong>而 9 月下旬的日出方位角正是 <strong>91°</strong>——也就是说<strong>秋分后一周左右，太阳几乎正从 Washington Monument 与 Capitol 的方向升起</strong>，这是一年里这两个机位最好的日出对齐窗口。到 10 月 22 日日出方位角已漂到 104°，<strong>太阳会从纪念碑轴线右侧（偏南）约 12–16° 升起</strong>，画面里日轮与地标不再重合，只能当侧光用。</p><p><strong>Old Town Alexandria 的 King Street 西向轴线约 278°</strong>，9 月 25 日日落方位角 269° 与它只差 9°——<strong>沿 King Street 向西的街道峡谷落日在九月下旬几乎正对</strong>；10 月 22 日的 256° 已偏离 22°，落日会掉到街道左侧的屋顶后面。</p><p><strong>路况：NPS 于 2026 年 9 月 1 日公告，George Washington Memorial Parkway 在 Route 123 与 Spout Run Parkway 之间于 9 月 21 日至 10 月 29 日期间、每周一至周四 9:30–14:30 全线封闭南向车道</strong>（树木评估与修剪）。这段正好是<strong>从 Great Falls 方向回 Rosslyn / Theodore Roosevelt Island 的主路</strong>，工作日白天走这条线要绕行并预留额外时间；周五至周日不受影响。（同一工程的北向封闭已于 9 月 17 日结束。）</p>"
      }
    ],
    "spots": [
      {
        "id": "great-falls-park-virginia",
        "n": 1,
        "name": "大瀑布公园（弗吉尼亚侧）",
        "en": "Great Falls Park (Virginia side)",
        "score": 4.5,
        "tldr": "本区最强自然题材，三个瀑布观景台全开。America the Beautiful 年卡免入园费；7:00 开门，闭园为日落后 30 分钟。",
        "tags": [
          {
            "t": "年卡可免费",
            "c": "free"
          },
          {
            "t": "否则 $20/车",
            "c": "paid"
          },
          {
            "t": "仅刷卡不收现金",
            "c": "risk"
          },
          {
            "t": "闭园=日落+30分",
            "c": "risk"
          },
          {
            "t": "勿走错马里兰侧",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>先解决最容易走错的一件事：Great Falls 有两个完全独立的公园，分处 Potomac 两岸。</strong><strong>弗吉尼亚侧才是本条目所指的 Great Falls Park</strong>（地址 9200 Old Dominion Dr, McLean, VA 22102），<strong>马里兰侧属于另一个单位 Chesapeake & Ohio Canal National Historical Park</strong>（Olmsted Island 栈道与 Billy Goat Trail 在那边），<strong>两侧各有自己的大门与收费站，隔着峡谷相望但没有任何桥相连——开车绕过去要走 American Legion Bridge 或 Beltway，单程通常 30–45 分钟以上</strong>。导航时务必确认输入的是 Virginia 一侧的地址",
          "<strong>三个瀑布观景台全部开放，且都在离访客中心五到十分钟步行内</strong>（官方原文「The three falls overlooks are located within a five to ten minute walk from the visitor center and parking lots」）。<strong>Overlook 2 与 Overlook 3 为无障碍</strong>。未查到任何观景台关闭告示；<strong>唯一有官方警示的是 Difficult Run Trail——已重新开放供徒步，但有一段受洪水破坏后变得又陡又窄，高水位时可能无法通行</strong>，而它并不在瀑布观景台的常规路线上",
          "<strong>Potomac 在这里于不到 1 英里的距离内落差约 76 英尺，然后被挤进宽仅 60–100 英尺的 Mather Gorge</strong>——这是整条 Potomac 上落差最陡的一段，也是本区唯一真正的「地质题材」。<strong>峡谷两侧的片岩崖壁与被水切出的凹槽是比瀑布本身更耐拍的东西</strong>",
          "<strong>园内还有 Patowmack Canal 的遗迹——由 George Washington 本人于 1785 年发起的美国最早运河之一</strong>，沿 Patowmack Canal Trail 可以走完整段船闸与开凿岩壁，<strong>历史开凿的岩沟内禁止攀岩</strong>（攀岩区在 Overlook 3 下游至 Sandy Landing 的紧急下水坡道之间）",
          "<strong>开门时间与日出时间的关系在这两个日期上完全不同，这条对拍摄计划影响最大：</strong>园区固定 <strong>7:00</strong> 开门。<strong>9 月 25 日日出 06:59——你进园时太阳已经出来了，拍不到日出前的暖调天空</strong>；<strong>10 月 22 日日出 07:25——7:00 进园还有整整 25 分钟可以布置机位、等第一缕光打上崖壁</strong>。<strong>十月因此明显优于九月，与秋色时间窗的结论一致</strong>"
        ],
        "photo": "风光 <strong>5/5</strong>，地质／细节 <strong>5/5</strong>，人像 <strong>2/5</strong>，建筑 <strong>2/5</strong>。<strong>这是华盛顿都会区半小时车程内唯一的一线自然风光题材</strong>：大落差瀑布、深切峡谷、片岩崖壁、长曝水流、十月末的崖壁林秋色，且<strong>三个观景台在十分钟步行内提供三种完全不同的视角与朝向</strong>。扣分在人像与人流：观景台面积有限，晴好周末下午几乎站不下三脚架，而且<strong>本区七个点里只有它在联邦停摆时可能整园上锁</strong>。",
        "shots": [
          {
            "name": "Overlook 1（最上游，东北向正对主瀑布）",
            "park": [
              38.998317,
              -77.255811
            ],
            "desc": "<strong>三个观景台里最靠上游的一个，视线约朝东北 45° 正对主瀑布群。</strong><strong>因此清晨的太阳（方位角 91°–104°）从视线右侧约 45° 打过来，是极好的侧逆光</strong>——水花与晨雾会被逆光勾出轮廓。<strong>最佳时段 7:00–8:30</strong>（10 月 22 日可以早于日出 25 分钟入场布置）。<strong>24–70mm 交代瀑布全貌与前景岩台；70–200mm 单挑某一股跌水的结构</strong>。午后太阳转到背后，改为顺光，反差降低但立体感也降低。<strong>三脚架在此完全允许</strong>（NPS 规定 8 人以内、手持器材、不独占场地、不影响资源与其他访客者无需许可）。view 坐标见 Overlook 2 条目下的说明，此处为 OSM viewpoint 节点。",
            "view": [
              38.996433,
              -77.253538
            ]
          },
          {
            "name": "Overlook 2（中段，北北东向，无障碍）",
            "view": [
              38.995934,
              -77.2533
            ],
            "desc": "<strong>视线约朝北北东 20°，是三个台里正面感最强的一个，也是无障碍台。</strong><strong>这里是长曝的主战场</strong>：<strong>1/4–2 秒是这段瀑布的黄金快门</strong>——足以把跌水拉成丝绢，又不至于像 10 秒以上那样把整片激流糊成一团失去力量感；<strong>想反向表现湍流的暴力感，用 1/500 秒以上凝结水花</strong>。白天需 <strong>ND8–ND64</strong> 才能压到 1/4 秒以下；<strong>偏振镜是这里的必备件</strong>，用来压掉湿岩石表面的反光、让片岩本色出来。<strong>16–35mm 竖构图把前景岩体与整片瀑布一起收</strong>。<strong>晴好周末下午这个台会站不下人</strong>，务必安排在上午或闭园前一小时。"
          },
          {
            "name": "Overlook 3 与 River Trail 起点（正北看瀑布，正南俯瞰 Mather Gorge）",
            "view": [
              38.995182,
              -77.252842
            ],
            "desc": "<strong>这个台的价值是一台两用：向正北看瀑布，向南南东俯瞰 Mather Gorge。</strong><strong>看瀑布时是纯侧光</strong>（清晨太阳在右手 90°、午后在左手 90°），<strong>侧光是三个台里最能拍出水体立体感的角度</strong>。<strong>向南俯瞰峡谷则相反</strong>：<strong>清晨对岸（Maryland 侧）的崖壁被低角度阳光正面打亮，而你所在的这一侧还在阴影里，光比极大但对岸崖壁的暖色与纹理最好</strong>；<strong>午后则轮到你脚下这侧受光、对岸转暗</strong>。<strong>拍对岸崖壁与十月末的峡谷秋色，请选 7:00–9:00</strong>。<strong>River Trail 自 Overlook 3 下游接入</strong>，沿崖顶走可以找到更贴近水面、更少人的机位，<strong>但那是中等难度的岩面步道，人多时会很堵，且不允许骑行与骑马</strong>。<strong>严禁游泳与涉水</strong>，靠近水边时务必留意湿滑岩面。"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>。婚礼需另办许可（703-757-3101）；<strong>8 人以内、仅手持器材、不独占场地的常规摄影（含三脚架）不需要许可</strong>",
          "ticket": "<strong>持 America the Beautiful 年卡免入园费——本次行程直接刷卡进场即可。</strong>否则：<strong>$20/私人车辆（含车内全部乘员，七日内有效）</strong>，步行、骑行或骑马入园 <strong>$10/人</strong>；另有 <strong>$35 的 Great Falls + C&amp;O Canal 双园年卡</strong>。<strong>园内一律不收现金，只接受 Master Card／VISA／Discover／American Express 与感应支付</strong>。线上预购的电子票（QR 码）<strong>务必在抵达前先下载到手机——园内手机信号很弱</strong>。<strong>2026 年免票日中在本次窗口内的是 9 月 17 日（Constitution Day）与 10 月 27 日（Theodore Roosevelt 诞辰）</strong>",
          "hours": "官方原文：<strong>Great Falls Park, overlooks, hiking trails, picnic areas and other outdoor areas, are open daily from 7:00 a.m. to thirty (30) minutes after sunset.</strong>（每日 7:00 至日落后 30 分钟；仅 12 月 25 日闭园）。<strong>换算到具体日期：9 月 25 日为 7:00–19:30，10 月 22 日为 7:00–18:50。</strong>访客中心 10:00–17:00；<strong>访客中心庭院洗手间 8:30–16:00</strong>（Old Carriage Road Trail 与 Matildaville Trail 的洗手间目前故障，现场设有移动厕所，全园开放时段可用）。小卖部通常仅周末 12:00–17:00 营业，工作日按季节",
          "parking": "主访客中心停车场 <strong>253 个车位</strong>（见 park 坐标，距访客中心与三个观景台最近，有路缘坡与人行道相连）；上层停车场另有约 300 个车位，但<strong>无无障碍车位、也没有人行道通到访客中心</strong>。<strong>官方明确警告：天气好的周末与假日，入园车队大约从 10:30–11:00 开始排，等待可长达 45 分钟到 1 小时。</strong><strong>请在 9:00 前抵达，或直接安排在闭园前一小时</strong>；付款方式提前备好可加快通行",
          "walk": "主停车场到访客中心约 <strong>250 米、3–4 分钟</strong>；<strong>访客中心到三个观景台各 5–10 分钟</strong>，Overlook 1 到 Overlook 3 之间沿栈道全程不到 200 米。River Trail 自 Overlook 3 下游接入，属中等难度岩面步道。<strong>三个台全部走完加从容拍摄，预留 1.5–2.5 小时</strong>"
        },
        "notes": [
          "<strong>三脚架允许且没有数量限制</strong>——NPS 对 8 人以内、手持器材、不独占场地、不影响园区资源与其他访客的静态摄影不要求许可。<strong>但观景台面积有限，晴好周末午后实际根本没有空间架三脚架</strong>，想稳定长曝就必须选清晨",
          "<strong>不要导航到马里兰侧</strong>：C&amp;O Canal National Historical Park 是独立单位、独立大门、独立收费，<strong>虽然隔着峡谷相望，开车绕过去单程通常要 30–45 分钟以上</strong>。马里兰侧的电话是 301-767-3714",
          "<strong>闭园时间随日落浮动</strong>：日落后 30 分钟即清园，<strong>这意味着蓝调时段基本没有——9/25 只到 19:30、10/22 只到 18:50</strong>。想拍暮色需精确掐时间并提前走到停车场",
          "<strong>严禁游泳与涉水</strong>，园内不允许饮酒。历史运河开凿的岩沟内禁止攀岩",
          "<strong>秋季秋色</strong>：Great Falls 略偏内陆、地势稍高，<strong>通常比 Old Town 与 Arlington 的行道树早几天转色</strong>；按 2026 年预报，<strong>10 月最后一周至 11 月初为峰值，10 月 22 日约为 near-peak 边缘</strong>，九月下旬全绿",
          "<strong>园内没有自动售货机，小卖部季节性营业</strong>，需自带水与食物。<strong>手机信号很弱，离线地图与提前下载的电子门票都必备</strong>",
          "宠物可入但须用不超过六英尺的牵引绳，<strong>访客中心内与 ranger 导览活动禁带宠物（服务犬除外）</strong>；瀑布观景台、River Trail、Patowmack Canal Trail、Mine Run 与 Matildaville Trail 均禁行自行车",
          "<strong>路况联动</strong>：2026 年 9 月 21 日至 10 月 29 日，GW Memorial Parkway 在 Route 123 与 Spout Run Parkway 之间每周一至周四 9:30–14:30 封闭南向车道，<strong>正好是从这里返回 Rosslyn / Arlington 的主路，工作日白天需绕行</strong>"
        ],
        "images": [
          {
            "url": "img/2019-09-07-14-49-40-panoramic-view-of-the-mather-gorge-of-th-95298d5e.jpg",
            "cap": "Mather Gorge 超宽幅全景 · Famartin / CC BY-SA 4.0"
          },
          {
            "url": "img/great-falls-park-virginia-8490239891-97aa7cb0.jpg",
            "cap": "观景台视角下的主瀑布群 · m01229 / CC BY 2.0"
          },
          {
            "url": "img/cloudy-day-in-great-falls-park-usa-f9fccfd2.jpg",
            "cap": "阴天柔光下的瀑布与片岩崖壁 · Melissa Guadalupe Huertas / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "theodore-roosevelt-island",
        "n": 2,
        "name": "西奥多·罗斯福岛",
        "en": "Theodore Roosevelt Island",
        "score": 3,
        "tldr": "人行桥正常开放、免费、6:00–22:00。九月下旬全绿基本没有拍点，十月最后一周秋色才值得来。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "6:00–22:00",
            "c": "free"
          },
          {
            "t": "九月下旬无秋色",
            "c": "risk"
          },
          {
            "t": "车位约 90 个",
            "c": "risk"
          },
          {
            "t": "全程土石路",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>88.5 英亩的林地岛，整座岛本身就是纪念碑</strong>——景观由 Frederick Law Olmsted, Jr. 设计为「living memorial」，1930 年代由 Civilian Conservation Corps 重新植被。<strong>岛上禁行汽车与自行车，唯一入口是从 Virginia 岸边停车场跨过的一座混凝土人行桥</strong>",
          "<strong>人行桥经核实开放正常</strong>：NPS 的无障碍页面（2026 年 4 月 24 日更新）明确描述「A wide concrete pedestrian bridge at the south end of the parking lot connects to the island」，未列任何封闭告示。<strong>容易搞混的是另一件事——横跨 Potomac 的 Theodore Roosevelt Bridge（车行桥，2025 年 4 月起大修约三年八个月）确实有间断性人行道封闭，但那座桥只是跨过岛、并不通到岛上，与本机位的人行桥无关</strong>",
          "<strong>Memorial Plaza 是全岛最高点上的一座人工广场</strong>，1967 年 10 月 27 日落成，建筑师 Eric Gugler、雕塑家 Paul Manship。中央是 <strong>17 英尺高的 Roosevelt 演讲姿态铜像</strong>，四周立着<strong>四块巨型花岗岩碑柱，分别刻着以 YOUTH、THE STATE、MANHOOD、NATURE 为题的十五段引文</strong>，另有两座大型水池。<strong>「花岗岩巨石阵 + 铜像 + 水面」的几何感是本机位真正的主体，秋色只是加分项</strong>",
          "<strong>Swamp Trail 的木栈道段是全岛唯一开阔、能看到水与对岸的地方</strong>，也是观鸟点（Roosevelt 本人是狂热鸟类爱好者，这段设计是刻意的）。林中土石小径在密林里终日弱光，<strong>阴天反而比晴天好拍</strong>"
        ],
        "photo": "风光 <strong>3/5</strong>（十月末可到 4/5），建筑／纪念物 <strong>4/5</strong>，人像 <strong>3/5</strong>。花岗岩碑柱与铜像的构成很强，而且<strong>广场是全岛唯一有开阔顶光与侧光的地方</strong>；林间步道则严重依赖阴天柔光。<strong>致命的季节性问题：九月下旬 DC 低地完全没有转色，此时这里就是一座普通的绿色城市林地，性价比在本区七个点里垫底——如果行程排在九月下旬，这一站可以直接舍弃。</strong>",
        "shots": [
          {
            "name": "Memorial Plaza（花岗岩碑柱与 Roosevelt 铜像）",
            "park": [
              38.896745,
              -77.067121
            ],
            "view": [
              38.897261,
              -77.064008
            ],
            "desc": "<strong>四块碑柱围出的开阔广场是全岛唯一有正经光线的地方。</strong><strong>16–35mm 贴近碑柱基部仰拍</strong>，用碑面的刻字纹理做前景、铜像做画面焦点；<strong>35–70mm 站到水池对岸，把铜像与两块碑柱的倒影一起收</strong>（水池并非全年注水，需现场确认）。<strong>最佳时段是 9/25 的 07:15–08:45 与 16:45–18:15、10/22 的 07:40–09:10 与 16:10–17:40</strong>：低角度侧光让花岗岩的凿痕与刻字产生投影，正午顶光会把整片浅色石面拍成一张过曝的白纸。<strong>三脚架允许</strong>；碑面刻字用 70–200mm 局部单拍效果很好。"
          },
          {
            "name": "Swamp Trail 木栈道段（观鸟与开阔水面）",
            "view": [
              38.898913,
              -77.062206
            ],
            "desc": "<strong>全岛唯一望得见水与对岸的开阔段，也是唯一适合早晨拍水汽的地方。</strong><strong>24–70mm 沿栈道纵深构图，用栏杆的重复线条做引导线</strong>；<strong>观鸟需 300mm 以上，清晨 06:30–08:00 活动最密</strong>。栈道两侧是沼泽植被，<strong>十月末转色时这一段的黄栌与枫树反射到水面上是全岛最好的一张</strong>。<strong>阴天与雨后是这里的最优天气</strong>，晴天正午树冠会在栈道上打出杂乱的斑驳硬光，非常难处理。木板潮湿时很滑，穿抓地鞋。"
          },
          {
            "name": "人行桥上（望向岛与 Potomac 水道）",
            "view": [
              38.896055,
              -77.065834
            ],
            "desc": "<strong>过桥时不要只顾着走</strong>——桥面本身是一个被忽略的机位。<strong>站在桥中段向南、向北各拍一张</strong>：向南可以把 Theodore Roosevelt Bridge 的桥体做背景，向北是 Key Bridge 与 Georgetown 方向。<strong>24–70mm，最佳时段日落后的蓝调</strong>（9/25 约 19:05–19:26，10/22 约 18:25–18:46），此时 Rosslyn 一侧的楼群灯光与水面倒影都出来了，而岛还是深色剪影。<strong>需三脚架，f/8、2–8 秒。</strong>注意岛上 22:00 关闭，蓝调结束后不要在岛内深处停留。"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>",
          "ticket": "<strong>完全免费</strong>",
          "hours": "NPS 官方口径：<strong>岛每日 6:00–22:00 开放</strong>（官方原文「The island is open from 6 am to 10 pm」）。<strong>NPS 提醒这是城市环境中的岛，天黑后请谨慎</strong>。Current Conditions 页面（最后更新 2025 年 11 月 14 日）未列任何关闭告示",
          "parking": "<strong>停车场只能从 George Washington Memorial Parkway 的北向车道驶入</strong>（位置在 Theodore Roosevelt Bridge 与 Key Bridge 之间），<strong>南向车道无法进入，走错必须绕一大圈</strong>。车位约 90–100 个（另有 1 个 van accessible 与 3 个无障碍车位，都在靠人行桥的南端）。<strong>周末容易满，但周转率高，NPS 称一般等不超过 15 分钟</strong>；<strong>只能停在划线车位内，其他位置会被开罚单</strong>。替代方案：从 Rosslyn Metro 站沿 Mount Vernon Trail 步行或骑行过来",
          "walk": "停车场南端过人行桥到 Memorial Plaza <strong>约 0.4 公里（1/4 英里）、步行 8–10 分钟</strong>。<strong>全岛没有一条铺装路面</strong>——过桥后是砾石路上坡（1–1.5 英寸碎石，坡度 1%–12%，其中约 60 米陡于 9%）；广场路口另有三级 5 英寸台阶，东侧有带扶手的金属坡道可绕开。到 Swamp Trail 栈道段再走 <strong>10–15 分钟</strong>"
        },
        "notes": [
          "<strong>时间价值判断（最重要的一条）</strong>：九月下旬 DC 低地零转色，这里此时只值得「顺路 45 分钟拍一下 Memorial Plaza」；<strong>要看秋色请排到 10 月最后一周或 11 月第一周</strong>，10 月 22 日只是 near-peak 边缘，赌成分不小",
          "<strong>三脚架允许</strong>，无器材限制。商业拍摄需向 George Washington Memorial Parkway 申请许可",
          "<strong>岛上禁行汽车与自行车</strong>；自行车须停在停车场的车架上。宠物可入但须牵引",
          "<strong>岛上没有任何餐饮与售货机</strong>，Memorial Plaza 有长椅与饮水台，Swamp Trail 栈道段也有长椅。垃圾须自行带出",
          "全程土石与砾石路，<strong>雨后泥泞、木栈道很滑</strong>；夏末初秋沼泽段蚊虫较多，建议带驱蚊剂",
          "<strong>路况联动</strong>：2026 年 9 月 21 日至 10 月 29 日，GW Memorial Parkway 在 Route 123 与 Spout Run Parkway 之间每周一至周四 9:30–14:30 封闭南向车道，<strong>从 Great Falls 方向过来会受影响</strong>；本岛停车场位于 Spout Run 以南，进场匝道本身不在封闭段内",
          "手机信号一般可用，但林中偶有弱区"
        ],
        "images": [
          {
            "url": "img/washington-d-c-theodore-roosevelt-island-20170819141015-e3945c0a.jpg",
            "cap": "Memorial Plaza 的花岗岩碑柱与铜像 · Riis2602 / CC BY-SA 4.0"
          },
          {
            "url": "img/theodore-roosevelt-island-dc-img-7198-d46a0770.jpg",
            "cap": "Roosevelt 铜像正面 · Daderot / Public domain"
          },
          {
            "url": "img/theodorerooseveltisland-fountain-fd23a6e2.jpg",
            "cap": "纪念广场水池与碑柱 · Wikimedia Commons 上传者 / Public domain"
          }
        ]
      },
      {
        "id": "marine-corps-war-memorial",
        "n": 3,
        "name": "美国海军陆战队战争纪念碑（硫磺岛纪念碑）",
        "en": "United States Marine Corps War Memorial (Iwo Jima Memorial)",
        "score": 5,
        "tldr": "免费、6:00–24:00 无门禁，是本区唯一能拍金光与蓝调的一线机位；九月下旬日出几乎正对 Washington Monument。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "6:00–24:00",
            "c": "free"
          },
          {
            "t": "不需预约",
            "c": "free"
          },
          {
            "t": "夜间有射灯",
            "c": "free"
          }
        ],
        "highlights": [
          "<strong>Felix de Weldon 依据 Joe Rosenthal 1945 年 2 月 23 日那张普利策奖照片放大而成的青铜群像</strong>：六名陆战队员的人像高约 <strong>32 英尺</strong>，他们竖起的青铜旗杆长 <strong>60 英尺</strong>，连基座总高约 78 英尺。<strong>整组雕塑分 108 块铸造后再焊接组装</strong>，1954 年 11 月 10 日（陆战队建军 179 周年）落成，建造费约 85 万美元<strong>全部由陆战队员与相关人士捐款，未用一分联邦经费</strong>",
          "<strong>旗杆上的国旗依 1961 年的总统公告二十四小时不降</strong>——这在美国是极少数被授权全天候悬挂国旗的地点之一，意味着<strong>你在任何时刻来都能拍到旗，不存在「旗降下来了」这种失手</strong>",
          "<strong>雕塑群朝东</strong>，Marines 面向 Potomac 河与 National Mall。因此<strong>还原 Rosenthal 照片构图的「正面」要站在纪念碑的西侧向东拍</strong>——这正好是能把 Lincoln Memorial、Washington Monument、U.S. Capitol 三个地标排在群像身后同一画面里的那一侧。<strong>方向与构图在这里是同一件事，没有取舍空间</strong>",
          "几何算出来的关键窗口：<strong>从纪念碑望向 Capitol 的方位角约 91°、望向 Washington Monument 约 92°；而 9 月 25 日的日出方位角正是 91°</strong>。<strong>秋分后一周左右，太阳几乎正从纪念碑与 Washington Monument 的连线上升起</strong>；到 10 月 22 日日出方位角漂到 104°，日轮会落到轴线右侧十几度，对齐效果消失",
          "夜间群像的<strong>每张脸都由基座旁独立射灯单独打亮</strong>，这是白天做不到的效果——70–200mm 拉近拍单个面孔的表情，是这里被严重低估的一个题材"
        ],
        "photo": "建筑／雕塑 <strong>5/5</strong>，城市天际线 <strong>5/5</strong>，人像 <strong>2/5</strong>。<strong>它同时拥有一线雕塑主体、DC 三地标背景、全天候旗帜、夜间专业布光，并且 6:00–24:00 无门无票——在整个 DC 都会区里，这四项同时成立的地方只有这一处。</strong>扣分只在人像：这里是军事纪念地，NPS 明文规定商业拍摄与婚礼需申请许可（703-289-2513）。",
        "shots": [
          {
            "name": "纪念碑西侧草坡正面机位（日出：天际线在群像身后）",
            "park": [
              38.890451,
              -77.071038
            ],
            "view": [
              38.890438,
              -77.069724
            ],
            "desc": "<strong>地图针脚标的是雕塑本体，实际站位在它西侧 25–40 米的草坡上</strong>，压低机位让旗杆顶端不切出画面。<strong>9 月 25 日：日出 06:59、方位角 91°，请在 06:15 前站好位置</strong>（民用晨光 06:33 起就能拍到有色天空）；<strong>10 月 22 日：日出 07:25、方位角 104°，太阳会从轴线右侧升起，此时应放弃「日轮压地标」的构想，改用 Washington Monument 剪影加渐变天空</strong>。<strong>24–70mm 交代全景加三地标；70–200mm 把 Washington Monument 压到群像肩后</strong>。此时群像完全逆光——<strong>不要试图补光提亮，直接按剪影处理，对天空测光后欠曝 1 挡，让人像与旗成为纯黑轮廓</strong>；或者包围曝光 ±2 挡回去合成。"
          },
          {
            "name": "同一西侧机位（日落顺光 + 蓝调射灯）",
            "view": [
              38.890438,
              -77.069724
            ],
            "desc": "同一站位、完全相反的用法。<strong>你面朝东，太阳在你背后的西方落下，因此低角度暖光会正面打亮群像的可见面</strong>，而身后的 DC 天际线此时处于阴影与冷色调中——<strong>这是拍「纪念碑本体」的正确时段，不是日出</strong>。<strong>9 月 25 日窗口 18:15–19:00；10 月 22 日窗口 17:35–18:20。</strong>日落后不要走：<strong>射灯在暮色中亮起、天空还剩深蓝的那 15–25 分钟是全天最好的一张</strong>（9/25 约 19:05–19:26，10/22 约 18:25–18:46）。<strong>此时必须上三脚架</strong>，f/8、ISO 100、1–4 秒；青铜的暖射灯与蓝天补色对比极强。露天场地无门禁，可以一路拍到 24:00。"
          },
          {
            "name": "基座东南侧低角度仰拍",
            "desc": "<strong>无对应 OSM 实体节点，地图不放针脚</strong>。从东侧步道走到基座东南角，<strong>16–24mm 贴近黑色花岗岩基座仰拍</strong>，用基座上镌刻的历次战役名单做前景、群像做顶端。这个角度看不到 DC 天际线，但<strong>能拍到「六个人合力推一根杆」这个动势本身</strong>，比正面构图更有压迫感。<strong>阴天或日落后的射灯时段最好</strong>，晴天正午顶光会让基座刻字完全失去立体感。"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>。仅商业拍摄、婚礼与团体活动需申请许可，电话 703-289-2513",
          "ticket": "<strong>完全免费</strong>",
          "hours": "NPS 官方原文：<strong>The memorial grounds are open year-round from 6 am until midnight.</strong>（每日 6:00–24:00，全年无休）。<strong>需要注意但本次不受影响的一点</strong>：夏季 Sunset Parade 期间（6–7 月部分周二 18:00–21:00，2026 年另加 8 月 5 日与 8 月 12 日 17:30–20:30）纪念碑广场会对公众关闭，<strong>九月下旬至十月下旬没有此类活动，广场全天可用</strong>",
          "parking": "Marshall Drive 上纪念碑西侧有免费停车场（约 115 米，见 park 坐标）。<strong>周末与晴好傍晚会满，日出时段几乎总是空的</strong>。公共交通：Metro Rosslyn 站（Blue／Orange／Silver）步行 10–15 分钟，Arlington Cemetery 站（Blue）步行 10–15 分钟",
          "walk": "停车场到纪念碑广场 <strong>约 115 米，全程铺装路面，2 分钟</strong>；有坡道与台阶两条路径。到 Netherlands Carillon 再走 <strong>约 250 米、3–4 分钟</strong>"
        },
        "notes": [
          "<strong>这是纪念地而非公园</strong>：NPS 明文禁止在雕塑与阅兵草坪上进行球类活动与放风筝。宠物须用不超过六英尺的牵引绳",
          "<strong>三脚架在这里完全允许</strong>——这一点与隔墙的 Arlington National Cemetery 截然相反。<strong>本区的长曝、蓝调与夜景题材应全部安排在这里和 Netherlands Carillon，不要指望墓园</strong>",
          "<strong>与 Arlington National Cemetery 的联动是本区最高效的一段行程结构</strong>：这里 6:00 就能进，墓园 8:00 才开；<strong>拍完日出后从北侧 Ord and Weitzel Gate 步行入园即可</strong>，不必回停车场绕行",
          "纪念碑附近已建有洗手间与饮水台，但清晨可能未开",
          "广场周边无遮挡、无座椅，秋季清晨风大且体感明显低于市区，<strong>日出机位建议加一层防风外套与手套</strong>",
          "雕塑近旁的射灯亮度很高，<strong>夜景构图时注意别让灯具本体入画</strong>，或用它做星芒"
        ],
        "images": [
          {
            "url": "img/marine-corps-war-memorial-at-sunrise-fa86916f.jpg",
            "cap": "日出时段的西侧正面机位 · APK / CC BY 4.0"
          },
          {
            "url": "img/marine-corps-war-memorial-at-night-1-d4b32ddd.jpg",
            "cap": "夜间射灯下的群像 · APK / CC BY 4.0"
          },
          {
            "url": "img/marine-corps-war-memorial-arlington-va-7703287876-1b3dc53b.jpg",
            "cap": "群像与青铜旗杆细部 · Esther Westerveld / CC BY 2.0"
          }
        ]
      },
      {
        "id": "netherlands-carillon",
        "n": 4,
        "name": "荷兰钟塔",
        "en": "Netherlands Carillon",
        "score": 4,
        "tldr": "紧邻硫磺岛纪念碑、免费、6:00–24:00；坡地是 Lincoln–Washington–Capitol 三点一线的最佳高位。塔身永久禁止攀登。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "6:00–24:00",
            "c": "free"
          },
          {
            "t": "塔身禁入",
            "c": "risk"
          },
          {
            "t": "郁金香仅四月",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>53 口钟悬挂在一座 127 英尺高的开放式钢塔里</strong>，是荷兰人民为感谢二战期间与战后美援所赠。钟 1954 年运抵、1960 年 5 月 5 日（荷兰解放十五周年）在现址落成。<strong>2019 年秋启动、2021 年完工的 440 万美元大修</strong>把全部外部钢板拆下清理更换、按修订后的风荷载规范加固了立柱，荷兰大使馆同时增补三口钟，<strong>使它补齐半音音阶、升级为「Grand Carillon」</strong>——现在你看到的塔身漆面与钢板都是那次换新的",
          "<strong>塔身永久不对公众开放，任何时候都不能登塔</strong>。NPS 官方原文是「For your safety, the carillon structure is closed to visitors at all times」，内部楼梯在底层即被铁栅封闭。<strong>网上仍在流传的「登塔看 DC 全景」是过时信息</strong>——本机位的价值来自<strong>塔所在的这片坡地本身的高度</strong>，不是塔",
          "<strong>坡地朝东的开阔面是本区最干净的「三点一线」机位</strong>：从这里望向 Lincoln Memorial 约 86°、Washington Monument 约 87°、U.S. Capitol 约 88°，<strong>三个地标在两度视角内几乎排成一条水平线</strong>，用 200mm 以上压缩后会得到那张经典的「Big Three 并列」画面。这条线在 Iwo Jima 那边是 91–92°，<strong>Carillon 这边更靠近正东，压缩效果更整齐</strong>",
          "<strong>季节提醒：塔基那片荷兰赠送的郁金香只在四月上旬前后开</strong>，九月下旬到十月下旬看不到。此时 <strong>50 个花坛组成的 Floral Library 换的是菊花</strong>，色彩仍在但形态完全不同；塔基两侧 Paul Phillip Koning 所作的两尊青铜卧狮全年都在"
        ],
        "photo": "城市天际线 <strong>5/5</strong>，建筑／构筑物 <strong>3/5</strong>，人像 <strong>3/5</strong>。<strong>三地标水平并列的压缩画面是这个机位不可替代的产出</strong>，且与 Iwo Jima Memorial 只隔 250 米、同为 6:00–24:00 无门禁，两处可以在同一个日出或日落里连拍。扣分在塔本身：开放式钢结构在晴天顶光下极难拍好，而且<strong>不能登塔就没有俯视视角</strong>。",
        "shots": [
          {
            "name": "东侧草坡边缘（Lincoln–Washington–Capitol 三点一线）",
            "park": [
              38.890451,
              -77.071038
            ],
            "view": [
              38.888172,
              -77.06787
            ],
            "desc": "<strong>view 坐标取自 OSM 上「USMC War Memorial & Netherlands Carillion」解说牌节点</strong>，位于塔东侧下坡约 145 米处，正是坡地视野最开阔的一段。<strong>200–400mm 是这个机位的必备焦段</strong>：把三个地标压成并列的一排，前景不要放任何树冠。<strong>9 月 25 日日出 06:59、方位角 91°，太阳几乎从这条轴线上升起，是全年最好的对齐日之一</strong>；<strong>10 月 22 日日出 07:25、方位角 104°</strong>，日轮偏到 Capitol 右侧，此时改拍蓝调时段（06:55–07:20）的城市灯火与渐变天空更划算。<strong>晨雾与河面水汽会让远处地标层次分离，这是本机位最值得等的天气条件。</strong>傍晚同一位置为逆向使用：日落后 15–25 分钟拍城市灯光初亮，须上三脚架、2–8 秒。"
          },
          {
            "name": "钟塔本体与坡地（塔身构图）",
            "view": [
              38.888216,
              -77.069496
            ],
            "desc": "<strong>开放式钢塔最怕正午顶光——钢格栅会变成一团无结构的深灰。</strong>正确做法有两种：<strong>一是日落后的蓝调时段，用天空的深蓝透过钢格栅形成剪影骨架</strong>，16–35mm 贴近塔基仰拍，f/8、2–6 秒；<strong>二是清晨低角度侧光（9/25 的 07:10–08:00、10/22 的 07:35–08:30），让钢板受光面与背光面分离出立体感</strong>。塔基两尊青铜卧狮用 50–85mm 单拍效果好；<strong>秋季 Floral Library 的菊花可作前景色块</strong>，但别指望春季郁金香那种效果。整片草坡起伏平缓，是本区少见的适合放模特的开阔绿地。"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>",
          "ticket": "<strong>完全免费</strong>",
          "hours": "NPS 官方原文：<strong>The carillon grounds are open year-round from 6 am until midnight.</strong>（草坪与广场每日 6:00–24:00，全年无休）。<strong>塔身「closed to visitors at all times」，永久不可攀登。</strong>每日有自动演奏与整点报时；夏秋两季会安排客座演奏家的现场音乐会，具体场次需查 NPS 活动日历",
          "parking": "与 Marine Corps War Memorial 共用 Marshall Drive 旁的免费停车场（见 park 坐标）。公共交通：Metro Rosslyn 站步行 10–15 分钟",
          "walk": "停车场到钟塔广场 <strong>约 250 米、3–4 分钟</strong>，铺装路面缓坡；再到东侧三地标机位需<strong>下坡走 100–150 米、再 2 分钟</strong>。<strong>从 Marine Corps War Memorial 走过来只需 3–4 分钟，两处务必安排在同一个光线时段里连拍</strong>"
        },
        "notes": [
          "<strong>三脚架允许</strong>，蓝调与夜景在这里没有任何器材限制",
          "<strong>不要按网上老攻略去找登塔入口</strong>——塔内楼梯在底部即被封闭，NPS 的措辞是「at all times」，不存在开放日",
          "这片草坡没有围栏、没有闸门，实际上任何时间都进得来；<strong>但 0:00–6:00 属官方闭园时段，不要在此时段停留</strong>",
          "<strong>东侧坡地前方有若干成年乔木</strong>，具体机位需在现场左右挪动几米避开树冠；秋末落叶后视野会比夏季明显干净",
          "塔身钟声在整点与自动演奏时段音量很大，<strong>如果同时在录视频需注意</strong>",
          "广场与坡地上没有洗手间，最近的在 Marine Corps War Memorial 一侧"
        ],
        "images": [
          {
            "url": "img/netherlands-carillon-arlington-va-46796334702-06248bc3.jpg",
            "cap": "钟塔与东侧坡地 · FaceMePLS / CC BY 2.0"
          },
          {
            "url": "img/netherlands-carillon-6d2dc0f6.jpg",
            "cap": "开放式钢塔与 53 口钟 · Ben Schumin / CC BY-SA 3.0"
          },
          {
            "url": "img/netherlands-carillon-at-night-610a2cac.jpg",
            "cap": "夜间的钟塔剪影 · Daniel Horowitz / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "arlington-national-cemetery",
        "n": 5,
        "name": "阿林顿国家公墓",
        "en": "Arlington National Cemetery",
        "score": 4.5,
        "tldr": "免费但 8:00–17:00 拍不到金光；换岗仪式 10 月起改为每小时整点一场，常规三脚架进不了安检。",
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
            "t": "8:00–17:00",
            "c": "risk"
          },
          {
            "t": "三脚架受限",
            "c": "risk"
          },
          {
            "t": "需过安检",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Tomb of the Unknown Soldier 的哨兵自 1937 年起从未中断过一分钟</strong>——由 3rd U.S. Infantry Regiment（绰号 The Old Guard）自 1948 年起接管，一年 365 天、任何天气二十四小时守卫。哨兵在黑垫上以<strong>每分钟 90 步</strong>的固定节拍行走，换岗时 relief commander 会做一次<strong>白手套逐部件验枪</strong>，并转身要求全场站立肃静。这套仪式的价值不在「壮观」，而在<strong>它的节拍完全可预测，因此可以事先决定用多少焦段、站在哪一级台阶</strong>",
          "<strong>John F. Kennedy Eternal Flame（1963 年 11 月 25 日由 Jacqueline Kennedy 点燃）所在的坡地平台，是全墓园唯一一处能把 Memorial Bridge、Lincoln Memorial、Washington Monument 串成一条轴线的东望机位</strong>。这条视线不是巧合——墓园与 Memorial Bridge、Lincoln Memorial 的中轴关系是 1920 年代 McMillan 规划的刻意安排。永久火焰在 2013 年做过燃烧器与传感器升级，现在的火头比老照片里更小更稳",
          "<strong>Arlington House 是墓园存在的原因本身</strong>：这栋 1802–1818 年由 George Washington Parke Custis（华盛顿的继孙）所建的希腊复兴式宅邸，后由 Robert E. Lee 通过婚姻取得使用权；1861 年 Lee 离开加入南军后联邦军接管此地，并<strong>刻意把阵亡者埋到宅邸的花园里，目的就是让 Lee 家永远无法回来居住</strong>。今天房子的解说重心已经转向在此被奴役的一百余人（Syphax、Parks、Gray、Norris、Branham、Burke 等家族），2018–2021 年一笔 <strong>1,235 万美元</strong>的私人捐赠（David M. Rubenstein）完成了整体修复",
          "<strong>639 英亩、约 40 万座墓，起伏的丘陵地形让「墓碑列阵」这个题材在这里比任何平地公墓都强</strong>——白色大理石碑随地形起伏形成的曲面阵列，用 100–200mm 压缩后是本区最有力量的一张画面。<strong>McClellan Gate（1879 年建成的红砂岩拱门）</strong>周边坡地是列阵密度与地形起伏兼顾的一段",
          "实用但反直觉的一条：<strong>步行或搭 Metro 进来的人不需要 REAL ID</strong>，只走 Welcome Center 的常规人身安检；<strong>只有开车进入墓园的人（含乘客）才需要出示 REAL ID</strong>。停在 Welcome Center 停车楼里也不需要"
        ],
        "photo": "建筑 <strong>4/5</strong>，纪实／仪式 <strong>5/5</strong>，风光 <strong>2/5</strong>。换岗仪式与墓碑列阵都是极强的题材，Arlington House 的柱廊与东望轴线也很上镜。扣分全在硬约束上：<strong>8:00–17:00 的作息意味着九月下旬到十月下旬这里永远拍不到日出日落，一年中最好的光线完全落在闭园时间外</strong>；加上安检把常规三脚架挡在门外，长曝与低光题材基本放弃。",
        "shots": [
          {
            "name": "Tomb of the Unknown Soldier 广场（换岗仪式主机位）",
            "view": [
              38.876386,
              -77.072252
            ],
            "desc": "<strong>提前 15 分钟到，站在广场西侧或北侧的第一排石阶上</strong>，视线越过黑垫。<strong>9 月：整点与半点各一场；10 月 1 日起只有整点一场。</strong><strong>70–200mm 是绝对主力</strong>——拍验枪的手部特写、哨兵侧脸、三人立正的三角构图；24–70mm 只在需要交代 Memorial Amphitheater 白色大理石背景时用。广场朝西南开口，<strong>上午 9:00–11:00 哨兵行走的黑垫一侧处于顺光、Tomb 石棺立面不过曝，是全天最好的时段</strong>；正午顶光会让白色大理石与深色制服的反差爆掉。<strong>器材务必低调</strong>：单机一镜、无脚架，仪式期间禁止走动与说话。"
          },
          {
            "name": "JFK Eternal Flame 平台（东望 Memorial Bridge–Lincoln–Washington Monument 轴线）",
            "view": [
              38.881534,
              -77.071507
            ],
            "desc": "火焰本身与身后那条东望轴线要分两张拍。<strong>轴线用 70–200mm 从平台栏杆处向东压缩</strong>，把 Memorial Bridge 的桥拱、Lincoln Memorial 与远处的 Washington Monument 叠成层次；<strong>视线方向约 75–85°，因此上午是逆光、下午是顺光</strong>——<strong>轴线选 15:00–16:30，火焰与花岗岩地面选 9:00–10:30 的柔侧光</strong>。火焰用 50–85mm、f/2.8–f/4 拍近景，白天火苗很淡，<strong>刻意欠曝 1/3–2/3 挡才能让火色出来</strong>。地面平台是抛光石材，雨后有倒影可用。"
          },
          {
            "name": "Arlington House 前廊与东侧台地",
            "view": [
              38.881177,
              -77.07264
            ],
            "desc": "<strong>八根多立克巨柱的希腊复兴式门廊是本区最强的单体建筑立面</strong>，正面朝东。<strong>因此上午 9:30–11:00 柱廊为顺光，是拍立面的唯一好时段</strong>；下午整个门廊落入自身阴影。16–35mm 贴近柱基仰拍强调柱列纵深；<strong>站到台地边缘回身用 35–50mm，可以把柱廊边缘与远处 DC 天际线放进同一画面</strong>。室内一层为自助参观（南翼为主，北翼与二层视人力临时开放），<strong>光线很弱、禁三脚架，需 f/1.4–f/2 加高感手持</strong>。博物馆与南北两处 Enslaved Quarters 9:00–16:30 开放，<strong>大于 18×16×8 英寸的包不得带入建筑内</strong>。"
          },
          {
            "name": "McClellan Gate 周边坡地（墓碑列阵）",
            "view": [
              38.878799,
              -77.067151
            ],
            "desc": "<strong>1879 年的红砂岩拱门本身可作前景，但真正的主体是它两侧沿坡起伏的白色墓碑阵列。</strong><strong>100–200mm 压缩视角、机位尽量低</strong>，让碑列在画面里堆成密不透风的层，是这个题材唯一有效的做法；广角会把它拍成一片稀疏的白点。<strong>最佳时段 15:30–16:45</strong>：低角度侧光让每块碑都产生一道投影，阵列的节奏感才出得来；正午顶光下墓碑无影，画面会彻底扁平。<strong>阴天柔光是这个题材的另一个好选择。</strong>注意：<strong>不要跨越、倚靠或站上墓碑</strong>；见到任何葬礼队列立即停止拍摄并绕行。"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>，墓园与 Arlington House 均免票免预约。tram 车票可现场在 Welcome Center 购买或线上先买，也不需预约",
          "ticket": "<strong>入园完全免费</strong>。可选的 interpretive tram tour <strong>成人约 $21.50 起</strong>（军人／退伍军人票约 $11.50 起，20 人以上团体票约 $17.50 起）；<strong>持残障停车证者本人加一名同行者免费搭乘</strong>",
          "hours": "官方口径：<strong>Arlington National Cemetery is open daily from 8 a.m. to 5 p.m.</strong>（每日 8:00–17:00）。<strong>Arlington House 与其博物馆、两处 Enslaved Quarters：9 月至次年 5 月 9:30–16:30</strong>（6–8 月为 9:00–16:30），<strong>宅邸最后入场 16:00</strong>，仅 New Year’s Day、Thanksgiving、Christmas 三天闭馆。tram 8:30–16:00 发车（<strong>ANC 官网写「every 20 minutes」，运营商官网写「every 30 minutes」，两处口径不一致，以现场告示为准</strong>）。另需注意：部分第三方来源称 4–9 月延长至 19:00 闭园，<strong>但 arlingtoncemetery.mil 现行页面只写 8:00–17:00，未能从官方渠道确认延长时段</strong>",
          "parking": "Welcome Center 停车楼（导航输入 <strong>1 Memorial Avenue</strong>），按小时收费；<strong>停这里不需要 REAL ID</strong>。更省事的是搭 Metro Blue Line 到 Arlington Cemetery 站，出站步行 5 分钟即达正门。<strong>若当天先拍 Iwo Jima Memorial，可从北侧 Ord and Weitzel Gate 步行入园</strong>（距 Rosslyn 站 15 分钟）",
          "walk": "Welcome Center 到 Tomb of the Unknown Soldier 约 <strong>1.2 公里、含持续上坡，步行 20–25 分钟</strong>；到 Arlington House 约 <strong>15 分钟上坡</strong>；JFK 墓区在两者之间。<strong>全园 639 英亩、丘陵地形，一圈走下来 5–7 公里，务必穿正经徒步鞋并预留安检 15–20 分钟</strong>"
        },
        "notes": [
          "<strong>三脚架政策（官方原文）</strong>：Prohibited Items 明列「Tripods which cannot fit into a purse/small bag」与「Unauthorized media/photography equipment」。<strong>能装进小包的迷你脚架可以过，常规三脚架与独脚架基本会被拦下</strong>；需要用专业器材请事先联系 ANC Public Affairs Office，703-614-0024",
          "<strong>葬礼纪律是这个点位的第一条规矩</strong>：工作日每天 27–30 场葬礼。官方 Media Policy 要求不得拍摄明显处于哀伤中的人，拍摄扫墓者须先征询同意。<strong>正在进行的葬礼一律不拍，不要用长焦规避距离</strong>。葬礼也会导致 tram 改线与临时封路",
          "<strong>所有人必须通过人身安检</strong>（含身份核验）。官方建议「bring minimal to no bags」；安检时手机、帽子与口袋物品要举过头顶通过。<strong>刀刃超过四英寸、酒精、喷雾、扬声设备、大于 8.5×11 英寸的旗帜均禁入</strong>；除服务犬与军犬外一律禁带宠物",
          "<strong>换岗仪式频率 10 月 1 日切换</strong>：4/1–9/30 每半小时一场，10/1–3/31 每小时整点一场。按 8:00–17:00 的开放时间算，十月下旬实际可看场次只有整点的八次",
          "园内<strong>禁止骑行与滑板</strong>；个人自行车只能停在 Welcome Center 外的车架上，共享单车与滑板车须停在 Metro 站",
          "Memorial Day 与 Veterans Day 等大型仪式日会启用更严格的禁带清单，<strong>那两天三脚架与自拍杆一律禁入、且禁止步行前往 Memorial Amphitheater</strong>。九月下旬至十月下旬无此类活动，但 <strong>tram 在 2026 年 12 月 19 日与 2027 年 1 月 9 日（Wreaths In / Wreaths Out）停运</strong>",
          "园内没有餐饮，Welcome Center 有洗手间与饮水；坡多且长，夏末初秋正午体感很闷"
        ],
        "images": [
          {
            "url": "img/tomb-of-the-unknown-soldier-arlington-national-cemetery-20-s-cf121e40.jpg",
            "cap": "Tomb of the Unknown Soldier 广场与 Memorial Amphitheater · DiscoA340 / CC BY-SA 4.0"
          },
          {
            "url": "img/memorial-day-in-arlington-national-cemetery-27085342830-bf17360a.jpg",
            "cap": "起伏地形上的墓碑列阵 · Arlington National Cemetery / Public domain"
          },
          {
            "url": "img/arlington-house-robert-e-lee-memorial-a9d3adb9.jpg",
            "cap": "Arlington House 东向八柱门廊 · Carlos Delgado / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "old-town-alexandria",
        "n": 6,
        "name": "亚历山德里亚老城",
        "en": "Old Town Alexandria",
        "score": 4,
        "tldr": "免费步行、市政管辖不受停摆影响；防洪工程要到 2027 年夏秋才动工，本次窗口滨水区基本正常。",
        "tags": [
          {
            "t": "步行免费",
            "c": "free"
          },
          {
            "t": "停摆免疫",
            "c": "free"
          },
          {
            "t": "不需预约",
            "c": "free"
          },
          {
            "t": "车表 $2.75/时",
            "c": "paid"
          },
          {
            "t": "艺术中心常提前闭馆",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>滨水防洪工程的时间表是本次最值得核实的一条，而结论是好消息。</strong>Alexandria 那个长期拖延的 Waterfront Flood Mitigation Project 在 2026 年3 月由市议会选定改用「Option 3 增强重力式雨水系统」方案（<strong>取消原定的抽水站</strong>，改为扩容重力管网、加装防倒流闸阀、将关键段护岸抬升至 6 英尺高程，并原样复建 Waterfront Park）。<strong>时间表是：2026 年秋完成 70% 设计，2026 年冬至 2027 年春完成最终设计，施工要到 2027 年夏或秋才开始。</strong>也就是说<strong>九月下旬到十月下旬的滨水区没有大型工地，Waterfront Park 正常开放</strong>；2026 年 7 月那轮沿 King Street、The Strand、Union Street、Prince Street 的地下管线试坑勘查（test pits）已在 7 月 24 日结束",
          "<strong>Captain’s Row 是 Prince Street 的 100 街区，那段卵石路面是全美东岸保存最完整的原始铺装之一</strong>，两侧是十八世纪末至十九世纪初的联邦式排屋。<strong>这里的卵石不是仿古装饰，是真的老路面——凹凸不平、极其难走，但对摄影是纯加分</strong>：低角度贴地拍时，圆石的高光会形成一整片有肌理的前景",
          "<strong>Torpedo Factory Art Center 是 1918 年动工的美国海军鱼雷生产厂，1974 年改造为艺术中心</strong>，现在是<strong>全美对公众开放的驻场艺术家工作室数量最多的一处</strong>，三层楼、免费进出。楼内还有 3 层的 Alexandria Archaeology Museum 与 1、2 层的 The Art League Gallery and School。<strong>工业厂房的钢窗、桁架与中庭光井是这里真正上镜的部分，不是画作</strong>",
          "<strong>方位事实需要说清楚，因为很多攻略含糊过去了：从 Alexandria 滨水区望向 Washington Monument 的方位角只有约 2°，也就是几乎正北，直线距离约 9.6 公里。</strong>这意味着<strong>DC 天际线在这里是一条很远的正北向视线，晴朗通透时才勉强分辨得出华盛顿纪念碑的方尖碑轮廓，它不是这个机位的主体</strong>。真正好拍的是<strong>正东跨河的日出</strong>（对岸是 Maryland 与 National Harbor），以及<strong>南偏东约 162°、约 1.2 公里外的 Woodrow Wilson Bridge</strong>",
          "<strong>King Street 的西向轴线方位角约 278°</strong>，而 <strong>9 月 25 日的日落方位角是 269°，只差 9°</strong>——<strong>九月下旬沿 King Street 向西看的街道峡谷落日几乎正对</strong>；到 10 月 22 日日落方位角掉到 256°，偏离 22°，太阳会落到街道左侧的屋顶后面。这是同一条街在一个月内完全不同的两种拍法"
        ],
        "photo": "街景／建筑 <strong>4/5</strong>，人像 <strong>4/5</strong>，风光 <strong>3/5</strong>。<strong>卵石路 + 联邦式排屋 + 工业厂房改造 + 东向开阔河面，四种质地在步行十五分钟的范围内齐备</strong>，而且完全免费、无门禁、不受联邦停摆影响，是本区可靠性最高的一站。扣分在天际线：<strong>DC 在这里太远（9.6 公里正北），别指望拍到 Iwo Jima 那种地标压缩效果</strong>。",
        "shots": [
          {
            "name": "King Street 100 街区向西（街道峡谷落日轴线）",
            "view": [
              38.804198,
              -77.039998
            ],
            "desc": "<strong>站在 King Street 最东端（Union Street 路口附近）沿街向西</strong>，用两侧连续的商铺立面与遮阳篷做街道峡谷。<strong>9 月 25 日：日落 19:00、方位角 269°，与街道 278° 的轴线只差 9°，18:30–19:05 是全年最好的对齐窗口</strong>，太阳会正对着你从街道尽头落下。<strong>10 月 22 日：日落 18:20、方位角 256°，偏离 22°</strong>，此时放弃对齐构想，改拍 17:50–18:20 的低角度暖光扫过北侧砖立面。<strong>70–200mm 压缩街道纵深、把远处的招牌与行人叠成层</strong>；<strong>24–70mm 拍完整街景</strong>。正对落日时务必用遮光罩并注意鬼影，或让太阳半藏在屋檐后拍星芒。<strong>King Street 最东两个街区为步行区，可以站在路中间</strong>。"
          },
          {
            "name": "Waterfront Park 与市政码头（东向跨河日出）",
            "view": [
              38.803385,
              -77.03943
            ],
            "desc": "<strong>这里正东跨 Potomac 望向 Maryland 岸，是老城唯一的开阔东向视野，因此是日出机位而不是日落机位。</strong><strong>9 月 25 日日出 06:59、方位角 91°（正东，日轮直接从对岸水平线升起）；10 月 22 日日出 07:25、方位角 104°（东偏南，会从 Woodrow Wilson Bridge 方向升起，桥体可入画）</strong>——<strong>十月的这个偏移反而更好用，因为桥给了日轮一个结构参照</strong>。民用晨光比日出早约 26 分钟，请提前四十分钟到位。<strong>16–35mm 拍河面与码头栈桥；70–200mm 压缩对岸的 National Harbor 与摩天轮</strong>。<strong>ND 加三脚架做 1–4 秒长曝可以把河面拍成镜面</strong>，这里没有任何三脚架限制。停泊在此的 Tall Ship Providence 是很好的前景桅杆剪影。傍晚这一侧背光，改为回身向西拍被落日染红的砖立面。"
          },
          {
            "name": "Captain’s Row（Prince Street 100 街区卵石路）",
            "view": [
              38.803205,
              -77.041178
            ],
            "desc": "<strong>Prince Street 与 Union Street 路口往西那一段的原始卵石路面。</strong><strong>正确做法是把机身放到接近地面的高度、用 24–35mm 贴地拍</strong>，让圆石的高光与阴影铺满前景下半幅，联邦式排屋的门廊与百叶窗做上半幅。Prince Street 也是东西走向，<strong>因此低角度斜光会顺着街道把每块卵石的立体感全部拉出来</strong>：<strong>9/25 的 18:15–18:55 与 10/22 的 17:35–18:15 向西拍最好</strong>，清晨（9/25 的 07:05–07:50）向东拍是另一个方向。<strong>雨后湿路面会让卵石反光，是这个题材最理想的条件。</strong>35–85mm 拍单栋门廊的门扇、扇形气窗与马蹄铁踏石细节。<strong>提醒：这是居民住宅区，不要进入前院台阶或对着窗户拍；路面极不平整，注意脚下与器材</strong>。"
          },
          {
            "name": "Torpedo Factory Art Center 内部（工业厂房结构）",
            "view": [
              38.804915,
              -77.03981
            ],
            "desc": "<strong>免费进出，主体是这栋 1918 年海军鱼雷厂的空间本身。</strong><strong>16–35mm 沿三层贯通的中庭仰拍或俯拍</strong>，利用钢桁架、栏杆与工作室门排的重复节奏；<strong>大面积钢窗在上午 10:00–12:00 会把柔和的侧光灌进中庭走廊，这是全天最好的时段</strong>。室内偏暗，<strong>f/2.8、ISO 800–1600 手持；三脚架建议避免——通道窄且人流多</strong>。<strong>拍摄艺术家作品或工作室内部前请先征得该艺术家同意</strong>，每位驻场艺术家自订工作时间，想找特定艺术家须事先联系。<strong>务必先查当天开放时间：2026 年 9 至 10 月有多个日期提前到 17:00 闭馆</strong>（9/18、9/19、9/26、9/27、10/3、10/10、10/11、10/17）。"
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>。King Street、滨水区、Captain’s Row 与 Torpedo Factory Art Center 均免费开放",
          "ticket": "<strong>步行游览完全免费</strong>，Torpedo Factory Art Center 自 1974 年起免费开放，Alexandria Archaeology Museum 与 The Art League Gallery 亦免费",
          "hours": "街道与滨水区<strong>全天开放</strong>。<strong>Torpedo Factory Art Center：每日 10:00–18:00</strong>，<strong>但常因私人活动提前到 17:00 闭馆——2026 年 9–10 月已公告的日期是 9/18、9/19、9/26、9/27、10/3、10/10、10/11、10/17</strong>；另于 New Year’s Day、Easter、Independence Day、Thanksgiving（2026 年 11 月 26 日）、Christmas 闭馆。<strong>驻场艺术家各自订时间，建筑开门不等于工作室都有人</strong>",
          "parking": "<strong>路边计时车表：2026 年 7 月 1 日起 $2.75/小时</strong>（罚单基准 $55），多数路段周一至周六 8:00–21:00 收费，<strong>周日与州法定假日免费</strong>；限时多为 2–3 小时，<strong>各街区规则不同，停车前必须逐块看标牌</strong>。<strong>Old Town 有 20 余处公共停车楼与停车场，多数在 $5–$10/天档位，不少提供「工作日 17:00 后与周末上限 $5」的优惠</strong>。市营设施包括 Courthouse Garage（111 South Pitt St）、North Union Street Garage（220 North Union St）、Thompson’s Alley Garage（10 Thompson’s Alley）等。<strong>注意：Market Square Garage 因 City Hall 翻修工程关闭中</strong>。公共交通：Metro King Street–Old Town 站（Blue／Yellow），出站可搭免费的 King Street Trolley 直达滨水区",
          "walk": "King Street 从 Metro 站到滨水区约 <strong>1.6 公里、步行 20–25 分钟</strong>（免费 trolley 全程约 10–15 分钟）。<strong>四个机位彼此极近</strong>：King Street 东端到 Waterfront Park 约 100 米，到 Torpedo Factory 约 150 米，到 Captain’s Row 约 250 米，<strong>全部串完步行不超过 15 分钟</strong>"
        },
        "notes": [
          "<strong>三脚架在户外街道与滨水区没有限制</strong>；Torpedo Factory 室内通道窄、人流大，建议不用架子",
          "<strong>Captain’s Row 是私人住宅区</strong>：不要踏上前院台阶、不要对着窗内拍摄、不要长时间堵在住户门前。卵石路面极不平整，<strong>穿硬底防滑鞋，别在这段路上换镜头</strong>",
          "<strong>防洪工程虽未开工，但零星的管线勘查与路面修补仍可能随时出现</strong>；出行前查 alexandriava.gov 的新闻页与 visitalexandria.com 确认当天有无临时封路",
          "<strong>滨水区会「晴天积水」（sunny day flooding）</strong>——这正是防洪工程要解决的问题：<strong>Potomac 高潮位时河水会从雨水管倒流，Waterfront Park 与 The Strand 一带在无雨的情况下也可能出现漫水</strong>。秋季朔望大潮期尤需留意，出发前查 NOAA 的 Alexandria 潮位站",
          "车表周日与州法定假日免费，<strong>但住宅区的按号付费路段周日也收费且费率更高</strong>，标牌必须看清",
          "滨水区傍晚风大；King Street 沿街餐饮密集，日落时段户外座位会挡住部分街景构图",
          "<strong>DC 天际线在这里距离约 9.6 公里且方位几乎正北</strong>，<strong>只有能见度极佳的日子才勉强辨认出 Washington Monument</strong>，不要把这条视线当作行程的理由"
        ],
        "images": [
          {
            "url": "img/100-block-of-king-street-looking-west-fron-union-old-town-al-50f7aec3.jpg",
            "cap": "King Street 100 街区自 Union 街口西望 · Ken Lund / CC BY-SA 2.0"
          },
          {
            "url": "img/prince-st-cobblestones-alexandria-va-11b38858.jpg",
            "cap": "Captain’s Row 的原始卵石路面 · AlbertHerring / CC BY 3.0"
          },
          {
            "url": "img/torpedo-factory-art-center-alexandria-september-2023-01-b4fc0fda.jpg",
            "cap": "Torpedo Factory Art Center 外立面 · DiscoA340 / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "mount-vernon",
        "n": 7,
        "name": "弗农山庄",
        "en": "Mount Vernon",
        "score": 4,
        "tldr": "私营运营、联邦停摆照常开门，是全 DC 最硬的备胎。$30、9:00–17:00、全园禁三脚架；宅邸内允许无闪光手持拍摄。",
        "tags": [
          {
            "t": "停摆免疫",
            "c": "free"
          },
          {
            "t": "门票 $30",
            "c": "paid"
          },
          {
            "t": "停车免费",
            "c": "free"
          },
          {
            "t": "全园禁三脚架",
            "c": "risk"
          },
          {
            "t": "宅邸需定时票",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>由 Mount Vernon Ladies’ Association 私营，这是本次行程里最有实用价值的一条事实。</strong>该组织成立于 1853 年（1858 年买下庄园），<strong>从未接受联邦运营拨款</strong>，因此<strong>联邦政府停摆期间它照常开放收票、全年 365 天不休</strong>。National Mall 一侧的 Smithsonian 与各纪念堂内景在停摆中全线阵亡时，这里是唯一同等级别的替代目标",
          "<strong>宅邸刚做完史上最大规模的修复，而且时机恰好</strong>：2023 年启动、耗资 <strong>4,000 万美元</strong>的 Mansion Revitalization Project 于<strong>2025 年 12 月 10 日举行剪彩，一、二层全部房间自 2024 年 1 月以来首次同时开放</strong>。工程重做了排水、楼板框架与地基，并新装 HVAC 以解决湿度问题。<strong>核心成果是 Washingtons’ Bedchamber 的全面复原</strong>——依据建筑与物质文化研究重制了 1790 年代复刻壁纸、重新抹灰，并按考证复位了华盛顿家族原件家具。<strong>但要注意：地窖（cellar）在 2026 年秋季前仍不对外，且宅邸北侧有一处围起来的施工区，外立面构图时需避开</strong>",
          "<strong>建筑本体的关键几何：宅邸的 Piazza（那条著名的两层柱廊门廊）朝东，俯瞰 Potomac；西立面朝 Bowling Green，是游客的来向。</strong>这直接决定了拍摄顺序——<strong>东立面与 Piazza 只有上午顺光，西立面与 Bowling Green 只有下午顺光</strong>，而园区 9:00–17:00 的作息刚好各给你一个半到两小时",
          "<strong>宅邸内部允许拍照，这一点与很多攻略的说法相反，值得核实清楚。</strong>官方 Guest Code of Conduct 原文是「Personal photography is allowed estate-wide except for inside all theaters or if posted otherwise in specific museum galleries. Flash photography is not permitted in the Mansion or museum galleries. Equipment, including tripods and selfie sticks, is not allowed.」也就是<strong>宅邸内可以手持无闪光拍摄，禁的是闪光灯与所有支撑器材</strong>，不是「禁止室内摄影」。<strong>只有专业拍摄与任何录像录音需要事先书面授权</strong>",
          "<strong>2026 年是美国建国 250 周年，园区把它当作重点</strong>：新常设展 <strong>George Washington: A Revolutionary Life</strong> 已于 2026 年 6 月在 Education Center 开幕，另有 Mount Vernon: Story of an American Icon 展与 Patriots Path 独立战争营地重现。<strong>好消息是人多、坏消息也是人多——宅邸定时票会更早售罄</strong>"
        ],
        "photo": "建筑 <strong>5/5</strong>，园林 <strong>4/5</strong>，人像 <strong>3/5</strong>，风光 <strong>3/5</strong>。<strong>东立面 Piazza 的柱廊加 Potomac 河景是整个华盛顿都会区最好的十八世纪建筑构图</strong>，室内也刚做完修复、允许手持拍摄。扣分两处：<strong>全园明令禁止三脚架（连包检清单上都单独列出「Camera equipment, including tripods, and selfie sticks」），因此室内弱光只能靠大光圈加高感硬扛</strong>；以及 <strong>9:00–17:00 的作息把日出日落全部排除在外，这里永远拍不到金色时段</strong>。",
        "shots": [
          {
            "name": "东立面 Piazza 与 Potomac 河景（上午唯一窗口）",
            "park": [
              38.71216,
              -77.086697
            ],
            "view": [
              38.70796,
              -77.086136
            ],
            "desc": "<strong>这是全庄园的招牌构图，而且只有上午能拍。</strong>Piazza 朝东，<strong>开园的 9:00–10:30 是它唯一的顺光时段</strong>，此时低角度的东向阳光会一路射进柱廊底下，把八根方柱与地砖的明暗节奏全部打开。<strong>16–35mm 从 Piazza 南端沿柱列纵深拍，机位放低贴近地砖</strong>；<strong>24–70mm 退到东侧草坡，把柱廊与身后的 Potomac 河面一起收</strong>。<strong>10:30 以后柱廊会整体落入自身阴影</strong>——那时改用 50–85mm 拍柱间的人像剪影，站在阴影里往亮处拍，反差很戏剧化。<strong>禁三脚架，全程手持</strong>；上午光线足，f/5.6、ISO 200 够用。"
          },
          {
            "name": "Bowling Green 西立面（下午唯一窗口）",
            "view": [
              38.708084,
              -77.086655
            ],
            "desc": "游客从 Bowling Green 一侧接近宅邸，看到的是西立面与那座标志性的八角穹顶小塔。<strong>这一侧只有下午顺光，最佳 15:30–16:45</strong>（园区 17:00 关门，别拖到最后）。<strong>24–70mm 从 Bowling Green 草坪中轴线正对宅邸</strong>，利用两侧的对称树列做框；<strong>70–200mm 单拍穹顶与风向标</strong>。<strong>务必留意宅邸北侧那片围起的施工围栏</strong>——构图时从偏南的角度切入可以避开。西立面外墙是所谓 rustication 工艺（木板刷砂浆漆冒充石材），<strong>低角度斜光下这层假石面的质感才看得出来，是这个机位真正的看点</strong>。"
          },
          {
            "name": "Washington’s Tomb（华盛顿夫妇墓）",
            "view": [
              38.706838,
              -77.088722
            ],
            "desc": "砖砌拱券墓室，1831 年建成，内有 George 与 Martha Washington 的石棺。<strong>墓室朝东南、位于坡下的林荫中，全天大部分时间处于树影里</strong>，<strong>阴天或上午 10:00–11:30 的柔光最好</strong>，晴天正午会打出极难处理的斑驳硬光。<strong>35–70mm 正对拱门</strong>，用砖券的弧线做构图核心；光线很暗，<strong>禁三脚架的条件下需 f/2.8、ISO 800–1600</strong>。再往南 100 米左右是 Slave Memorial 与 African American Burial Ground，<strong>那里的拍摄请保持与墓地相称的克制</strong>。"
          }
        ],
        "access": {
          "book": "<strong>园区门票（grounds pass）不强制预约，可现场买；但宅邸参观需另配定时票。</strong>官方原文：「Entry to the Mansion requires a ticket, available during online checkout or at the gate.」<strong>强烈建议线上先订以拿到想要的时段——官方明示旺季与周末现场买时，最早可用的宅邸场次可能在抵达后两小时以上</strong>。<strong>线上预约宅邸时段每人加收 $2</strong>",
          "ticket": "<strong>成人（12 岁以上）$30</strong>，青少年（6–11 岁）$16，<strong>0–5 岁免费</strong>。门票含历史区、园林、附属建筑、博物馆与语音导览。<strong>宅邸定时票线上预约每人另加 $2</strong>。15 岁及以下须成人陪同。<strong>停车全程免费</strong>",
          "hours": "官方口径：<strong>4 月至 10 月 9:00–17:00；11 月至次年 3 月 9:00–16:00。全年 365 天开放，含所有节假日。</strong><strong>九月下旬至十月下旬适用 9:00–17:00。</strong>Donald W. Reynolds Museum & Education Center 与 The Shops 比园区晚一小时关（4–10 月 9:00–18:00）。<strong>The Farm 与 Distillery & Gristmill 只在 4–10 月开放</strong>（Distillery & Gristmill 在 2.8 英里外，需自驾或搭接驳，单程约 12 分钟）",
          "parking": "<strong>访客停车永久免费</strong>，West / East / RV / Overflow 数个大场，先到先停。导航地址 3200 Mount Vernon Memorial Highway, Mount Vernon, VA 22121。从 DC 市区经 George Washington Memorial Parkway 南下约 25–40 分钟",
          "walk": "West Parking Area 到园区入口约 <strong>350 米、5–7 分钟</strong>；入口到宅邸 <strong>约 10 分钟</strong>，到 Tomb 约 <strong>10 分钟</strong>，到 Museum / Education Center 约 5 分钟。<strong>园区面积很大且多为土径与碎石路，官方建议至少留三小时</strong>；<strong>宅邸参观从票面时间起请整体预留一小时（含排队），并把后续行程排在票面时间之后 75 分钟以上</strong>"
        },
        "notes": [
          "<strong>三脚架政策（最硬的一条）</strong>：官方 Bag Inspection Policy 的禁带清单直接列出「Camera equipment, including tripods, and selfie sticks」，<strong>全园禁止三脚架与自拍杆，不只是宅邸内</strong>。室内弱光只能靠 f/1.4–f/2 大光圈加高感手持",
          "<strong>宅邸内摄影的准确口径</strong>：允许个人无闪光手持拍摄；<strong>禁闪光灯、禁三脚架、禁任何录像录音（无论个人或专业）</strong>；剧场内与部分标示的博物馆展厅完全禁拍。<strong>专业拍摄须提前四周向 Association 申请</strong>",
          "<strong>地窖（cellar）在 2026 年秋季前仍不对外开放</strong>，宅邸北侧有围起的施工作业区，外立面构图需避开。修复工程 Phase 4 排至 2026 年 9 月，<strong>个别房间仍可能临时闭展、参观路线随工程变动</strong>",
          "<strong>禁带清单其余项</strong>：除水以外的一切食品饮料、超过 3.5 英寸的刀具、武器、大于 16×16×8 英寸的包。<strong>婴儿车不得进入宅邸</strong>（可停在门外）",
          "FAA 已将 Mount Vernon 划为禁飞区；官方也几乎不批准航拍",
          "3–10 月有付费的 <strong>Photo Cruise on the Potomac</strong>（约 45 分钟），<strong>是从水面拍宅邸东立面与河崖的唯一途径</strong>，但需与宅邸定时票的时段错开安排",
          "<strong>宅邸参观为导览制，官方称一般 15–25 分钟走完</strong>（旺季更快）；队伍推进有节奏，<strong>每个房间只有十几秒，室内拍摄要预先想好焦段，不要现场换镜头</strong>"
        ],
        "images": [
          {
            "url": "img/mount-vernon-estate-mansion-2-3e230792.jpg",
            "cap": "宅邸东立面与 Piazza 柱廊 · Martin Falbisoner / CC BY-SA 3.0"
          },
          {
            "url": "img/mount-vernon-estate-mansion-1-0beac14b.jpg",
            "cap": "Bowling Green 一侧的西立面与八角穹顶 · Martin Falbisoner / CC BY-SA 3.0"
          },
          {
            "url": "img/east-face-of-mansion-mount-vernon-near-alexandria-virginia-2-278b15fe.jpg",
            "cap": "东立面全景 · Ken Lund / CC BY-SA 2.0"
          }
        ]
      }
    ]
  },
  {
    "id": "dc-neighborhoods",
    "name": "Washington DC · Georgetown 与外围街区",
    "navName": "Georgetown 与外围",
    "color": "#a78bfa",
    "lead": "这一区是 DC 里「纪念碑之外」的部分：联邦风格红砖排屋、一座世界第六大的哥特主教座堂、一座哈佛管的私人花园、一位废奴主义者的山顶宅邸，以及一条 300 英尺长的十三级叠瀑。<strong>本区最重要的三个「水到底通没通」的判断结果是：Meridian Hill 叠瀑已于 2026 年 5 月 14 日复流（去）；C&amp;O Canal 的 Georgetown 段官方状态仍是「De-watered」干河床（别指望倒影）；Dumbarton Oaks 的循环喷泉在 10 月 31 日前的常规季应当运行，但未能从官方渠道逐一确认。</strong>另有两个会坑人的时间坑：Dumbarton Oaks <strong>每天只开下午 14:00–18:00 且周一闭园</strong>，National Cathedral <strong>周日基本不售自助参观票</strong>。",
    "callouts": [
      {
        "type": "warn",
        "title": "C&O Canal 的 Georgetown 段仍是干河床",
        "html": "<p>NPS 官方「Current Park Conditions」页面的水位表（表内标注 Last Update: 4/16/2026，页面整体更新至 2026-08-24）写明：<strong>Locks 3–4、Locks 4–5、Locks 5–6 全部为「De-watered」</strong>。Locks 4–5 就是 Level 4——从 Wisconsin Avenue 往上游一直到 Brookmont 的那段长水面，也正是所有明信片照片的取景处。</p><p>原因是 2024 年 2 月开工的 <strong>$12.7M 船闸与石墙修复工程</strong>（Locks 1、2、5、Inlet Lock 1、Guard Lock 及 Level 1/2/4 石墙）。NPS 明确写「To facilitate construction, water will need to be lowered in the canal during the entire duration of construction」。工期原定 2026 年春完工，但 <strong>2026 年 2 月底 Level 1 北墙部分坍塌</strong>，需重做设计，官方最新口径改为「anticipated that the project will last through Fall 2026, weather dependent」。坍塌点周边的 towpath 至今封闭，Georgetown 段（Mile 0.4–1）有绕行。</p><p>有非官方博客称运河已在 Thomas Jefferson St 至 30th St 之间重新蓄水。<strong>该说法未能在 NPS 官方渠道得到证实</strong>，与官方水位表相互矛盾。请按「干河床」做预案，出发前致电园区总部 <strong>301-739-4200</strong> 确认。运河游船（Georgetown Heritage）状态为 Closed，官方目标是 <strong>2027 年春</strong>复航，这已是第三次推迟，不要指望。</p>"
      },
      {
        "type": "good",
        "title": "Meridian Hill 十三级叠瀑已复流（本区最确定的好消息）",
        "html": "<p>叠瀑自 2019 年因下层广场改造被关闭，是它建成以来<strong>历史上第一次完全停水</strong>，一停就是七年。NPS Rock Creek Park 官方页面写明：<strong>「The cascading fountain at Meridian Hill Park reopened to visitors on May 14, 2026」</strong>，下层反射池同日重开。</p><p>7 月初曾有一次插曲：Joan of Arc 雕像旁两座未列入改造合同的小喷泉试水，把管路里几十年的铁锈沉积冲进了互联的管网，叠瀑一度变成浑浊的棕色。NPS 冲洗加人工吸底，几天内恢复清澈。NPS 同时提示「Testing of the fountain will continue, to adjust the water levels and obtain the correct flow rate」，<strong>即流量仍可能被临时调整</strong>。</p><p>另需注意：2026 年整园养护中，<strong>上层草坪自 4 月底起被围栏封闭做草皮更新</strong>，NPS 只说「估计封闭到夏天」。<strong>9–10 月围栏是否已拆除未能确认。</strong>走道全程开放。</p>"
      },
      {
        "type": "info",
        "title": "联邦停摆风险：这个时间窗内已排除",
        "html": "<p>本区六个点里，C&amp;O Canal、Frederick Douglass NHS、Meridian Hill Park 三处属 NPS，理论上受停摆影响；Dumbarton Oaks 由 <strong>Harvard University 的 Trustees</strong> 运营，Washington National Cathedral 是<strong>私立圣公会机构</strong>，两者与联邦拨款无关，停摆照常开门。</p><p>拨款现状：<strong>H.R. 6500《Continuing Appropriations and Extensions Act, 2027》已于 2026 年 9 月 2 日由总统签署生效</strong>（参议院 8 月 8 日 90–6 通过，众议院 9 月 1 日 370–48 通过）。该 CR 按 FY2026 水平续拨，<strong>有效期至 2026 年 12 月 11 日</strong>。也就是说 <strong>10 月 1 日的财年切换不会触发停摆，整个 9 月底至 10 月底的行程窗口完全被覆盖</strong>。下一个悬崖是 12 月 11 日，与本次无关。</p>"
      },
      {
        "type": "warn",
        "title": "Dumbarton Oaks：只开下午、只能网购、禁三脚架",
        "html": "<ul><li><strong>2026 常规季（3/1–10/31）：周二至周日 14:00–18:00，17:30 停止入场。周一与联邦假日闭园。</strong>上午完全没戏，别安排早光。</li><li><strong>2026 年额外闭园日：10 月 8–10 日（内部活动，当日不售票、季票也不认）。</strong>另有 4/11、4/23–25、5/7–9 及各联邦假日。</li><li>票 <strong>$15/人</strong>，<strong>只能通过 Eventbrite 提前购买，现场无售票点、无候补、无 standby</strong>。每户每日限 10 张，售出不退，不可再次入场。2026 年季票已售罄。</li><li><strong>官方 Gardens Rules 明文禁止：三脚架、独脚架、自拍杆、灯具及其他大体积摄影器材；同时禁止一切商业与专业摄影摄像（含婚纱与订婚照）。</strong>手持拍摄没问题。</li><li>11/1–12/31 转入冬季时段 14:00–17:00（16:30 停止入场），<strong>免票但仍需提前预约</strong>；1/1–2/28 全季闭园。</li></ul>"
      },
      {
        "type": "tip",
        "title": "光线与秋色：具体到分钟与日期",
        "html": "<p><strong>日出日落（Washington DC，按 NOAA 算法计算，与官方发布值差异在 ±3 分钟内）：</strong></p><ul><li><strong>9 月 25 日</strong>：日出 <strong>06:58</strong>（方位 <strong>90°</strong>，正东）／日落 <strong>19:02</strong>（方位 <strong>270°</strong>，正西）；正午 13:00，太阳高度角 50°；民用暮光结束 19:28。</li><li><strong>10 月 22 日</strong>：日出 <strong>07:24</strong>（方位 <strong>104°</strong>）／日落 <strong>18:21</strong>（方位 <strong>257°</strong>）；正午 12:53，太阳高度角 40°；民用暮光结束 18:48。</li></ul><p>意义：<strong>9 月底日落几乎正西，10 月底西偏南 23°</strong>——这直接决定 Key Bridge 的剪影落在画面哪一侧。夏令时到 11 月 1 日才结束，本行程窗口内全程 EDT。</p><p><strong>秋色：DC 城区的历史平均峰值在 11 月第一周</strong>；Shenandoah 约 10 月 20 日，马里兰／弗吉尼亚内陆在 10 月下旬，然后才轮到低海拔的 DC。《Old Farmer's Almanac》对 2026 年大西洋沿岸 9–10 月的长期预报是<strong>气温低于常年约 1°F、降水少约 1 英寸</strong>，偏冷偏干通常有利于显色。<strong>结论：本区三个秋色目标（Dumbarton Oaks、Meridian Hill、运河纤道）在 9 月底基本还是全绿，10 月下旬能拍到 60–80% 转色，真正的峰值要等到 10 月最后几天到 11 月初。如果日期可选，选晚不选早。</strong>Dumbarton Oaks 自家通讯里说他们的菊花与树冠「always at their best in November」。</p>"
      }
    ],
    "spots": [
      {
        "id": "national-cathedral",
        "n": 1,
        "name": "华盛顿国家座堂",
        "en": "Washington National Cathedral",
        "score": 4.5,
        "tldr": "世界第六大主教座堂，$15 自助票；西立面日落正面受光，Space Window 的正午是唯一时段；北立面全被脚手架包住。",
        "tags": [
          {
            "t": "$15 自助参观",
            "c": "paid"
          },
          {
            "t": "周日基本不开放参观",
            "c": "risk"
          },
          {
            "t": "北立面脚手架",
            "c": "risk"
          },
          {
            "t": "私立·不受停摆影响",
            "c": "good"
          }
        ],
        "highlights": [
          "正式名称 Cathedral Church of Saint Peter and Saint Paul，<strong>世界第六大、全美第二大主教座堂</strong>。1907 年 Theodore Roosevelt 参加奠基，<strong>1990 年才安上最后一枚尖顶饰石，前后 83 年</strong>，全程用中世纪工法——承重石砌、飞扶壁、无钢结构。中央的 Gloria in Excelsis Tower 高 301 英尺，<strong>塔顶海拔 676 英尺，是全 DC 地理最高点</strong>",
          "<strong>Space Window（正式名 Scientists and Technicians Window）：全馆最著名的彩窗。</strong>设计者 Rodney Winfield 以 NASA 照片为蓝本画了一片星野，虚线暗示 Apollo 11 的飞行轨迹。<strong>画面中央那个大红圆里嵌着一片真的月岩</strong>——取自 Lunar Sample 10057 中心切片、重 <strong>7.18 克</strong>、采自 Mare Tranquillitatis，1974 年 7 月 21 日（登月五周年）由 Armstrong、Aldrin、Collins 三人亲手送来揭幕。Collins 本人是座堂旁 St. Albans School 的校友。<strong>窗旁的一枚拱顶浮雕刻的是宇航员的靴印</strong>",
          "<strong>Darth Vader 怪兽雕（grotesque）</strong>：1980 年代西北塔施工期间办过一次儿童设计竞赛，黑武士是获奖作品之一。它<strong>位于西北塔的北面、某个山花中央尖饰的下方、从正面看略偏左</strong>，而且是<strong>水平向外探头而非向下俯视</strong>，所以侧视角比正视角好找。<strong>坏消息是它永远在阴面</strong>——北面全年得不到直射光，本地导游的说法是「on the dark side」，这个双关是字面意义上的",
          "<strong>2011 年 8 月 23 日 M5.8 弗吉尼亚地震</strong>震落多枚尖饰石、扭歪或震塌数座小尖塔、有落石在金属屋面上砸出一个洞、后殿飞扶壁开裂，<strong>损失约 $3,800 万而座堂没有地震险</strong>。第一期 $1,000 万的内部拱顶石作已于 2015 年 2 月完成；2022 年 9 月启动的 $1.5 亿募款计划到 2025 年初结束时募到 <strong>$1.85 亿</strong>，<strong>所有地震修复资金已全部到位，目标 2030 年前全部完工</strong>",
          "<strong>当前脚手架状况（本条目最重要的核实项）：</strong><strong>中殿北立面已被一整套自立式脚手架包住</strong>，覆盖北侧的七至八道飞扶壁及其小尖塔与山花，<strong>作业平台每 6 英尺 6 英寸一层、总高 30 至 130 英尺</strong>，因为不能在历史石材上打锚，整套结构是落在下层坡屋面的铝梁与橡胶垫上自立的；北立面两处入口上方还搭了防坠护棚。同时<strong>中央塔的修复已经开工</strong>——座堂 2026 年 6 月 11 日的公告说 Garth 中庭与 All Souls Memorial Garden 因中央塔工程封闭，<strong>「We do not expect the Garth to be re-opened before late fall 2026」</strong>。<strong>西立面双塔与南立面目前没有搭架的报道，但中央塔本身是否已被围裹、以及北草坪看西北塔的视线是否被中殿脚手架切到，均未能从官方渠道确认</strong>"
        ],
        "photo": "建筑 <strong>5/5</strong>，人像 <strong>3/5</strong>，风光 <strong>2.5/5</strong>。外部有明确的日落正面光、内部有全 DC 最好的彩窗光柱，两条线都能独立成篇；扣分是北立面被脚手架废掉、Garth 中庭封闭、且 17:00 准时清场导致内部拍不到暮光。",
        "shots": [
          {
            "name": "Wisconsin Avenue 对街，西立面双塔正面",
            "desc": "<strong>座堂是标准东西朝向，双塔与 West Rose Window 组成的西立面正对 Wisconsin Avenue。这意味着它在下午到日落全程被正面照亮，是本条目最可靠的外景。</strong><strong>9 月 25 日日落方位 270°（正西），西立面被完全正打，几乎没有立体感但色温最暖；10 月 22 日日落方位 257°（西偏南 23°），光从左前方来，立面有了明暗过渡，塔身层次更好——就外立面而言 10 月下旬优于 9 月底。</strong><strong>时段：日落前 60 分钟到日落（9/25 是 18:00–19:02，10/22 是 17:20–18:21）。</strong>注意<strong>座堂内部 17:00 准时关门，但外部场地此时仍可停留</strong>，所以外景要排在参观之后。<strong>24mm 竖构图</strong>能把双塔完整收下；<strong>移轴或后期校正是必需的</strong>，仰角带来的汇聚线在哥特立面上特别刺眼。70–200mm 单拍西北塔顶的尖饰与怪兽雕群。",
            "park": [
              38.92918,
              -77.07322
            ],
            "view": [
              38.93031,
              -77.07274
            ]
          },
          {
            "name": "Bishop's Garden 南侧，飞扶壁与花园前景",
            "desc": "<strong>Garth 中庭封闭期间，Bishop's Garden 是唯一还开放的座堂花园</strong>，也是唯一能用植物做前景仰拍主体的位置。<strong>南立面全天受光</strong>：秋季太阳始终偏南，<strong>大致 10:00–16:00 南侧飞扶壁与扶壁尖塔都是正面或高侧光</strong>，其中 <strong>15:00–16:30 的低侧光最能勾出扶壁的立体骨架</strong>。<strong>而且这一侧目前没有脚手架</strong>，是拍「完整哥特外壳」唯一干净的角度。35mm 用花园的黄杨与石栏做前景框；100mm 单独压缩连排飞扶壁的重复节奏。这里也是全座堂最好的人像位——石墙加植物加柔和反射光。",
            "view": [
              38.92975,
              -77.07085
            ]
          },
          {
            "name": "中殿内部：Space Window 与南侧高侧窗光柱",
            "desc": "<strong>Space Window 位于中殿南侧的中层高侧窗（clerestory），这决定了它必须在太阳偏南时拍——也就是正午前后。</strong><strong>9/25 太阳正南时刻 13:00、高度角 50°；10/22 是 12:53、高度角 40°。实际可用窗口大致 11:30–14:30，其中 12:30–14:00 最强。</strong>此时阳光直接穿过南侧高窗，<strong>在北侧列柱与地面上投出成片的彩色光斑</strong>，这是这座堂最值得拍的内景现象，而不是彩窗本身。<strong>10 月下旬太阳更低，光柱在柱子上的位置更高、色块更长，效果优于 9 月底。</strong>拍窗本身用 <strong>200–400mm</strong>（窗在高处且不大，月岩那一小片圆需要长焦才看得清）；拍光柱落在柱身上用 <strong>24–70mm</strong>，站中央通道向东。<strong>光比经常超过 10 EV，务必包围曝光 3–5 张。</strong>ISO 1600–6400，f/2.8–f/4，机身防抖全开——<strong>实务上你只能手持</strong>。",
            "view": [
              38.93065,
              -77.0708
            ]
          },
          {
            "name": "北草坪找 Darth Vader 怪兽雕",
            "desc": "<strong>无 OSM 实体，地图无针脚。</strong>标准做法是站到座堂北侧、靠近 Wisconsin Avenue 的草坪上，抬头看西北塔北面中间那个山花。<strong>它非常小、位置非常高，肉眼只是一个凸起，必须 400mm 以上或带望远镜才找得到。</strong><strong>北面全年无直射光，等不到「好光」——只能靠阴天的均匀天光或多云时的亮边</strong>，拍出来必然是低反差的灰石头配亮天，<strong>后期要压天空、提暗部才能看清盔形轮廓</strong>。建议 <strong>ISO 400–800、1/500 秒以上</strong>抵消长焦抖动。<strong>重要不确定项：中殿北立面 30–130 英尺高的脚手架就在这条视线的前景方向，它是否会遮挡或干扰北草坪看西北塔的角度，未能从官方渠道确认。把这个机位当作「到现场再看」的可选项。</strong>",
            "park": [
              38.92918,
              -77.07322
            ]
          }
        ],
        "access": {
          "book": "自助参观<strong>建议提前在 cathedral.org 或 tix.cathedral.org 购票</strong>，现场也可买但热门时段会满。<strong>塔楼攀登与幕后导览必须提前预约</strong>，按讲解员排班开放，名额少。20 人以上团体必须提前申请",
          "ticket": "<strong>自助参观（Self-Guided Sightseeing）：成人 $15，5–12 岁儿童 $10，学生与长者周一至周三 8 折。</strong>票含 Bloomberg Connects 数字导览、主层与地下层、各展览，以及 <strong>Tower Observation Gallery「when available」——即观景廊是否开放逐日不定，不保证</strong>。导览类：Guided Spotlights Tour <strong>$20 / 儿童 $15</strong>（含 1 小时讲解，之后可继续自助参观）；Behind the Scenes Tour <strong>$35</strong>；<strong>Bell Tower Climb $50</strong>（爬 333 级到中央塔的鸣钟室，全程 70–90 分钟，有身高与年龄限制）。<strong>参加礼拜与私人祈祷永远免费</strong>",
          "hours": "<strong>官方原文：「Our sightseeing hours vary day-to-day to accommodate the wide range of activities and ministries offered at the Cathedral. Your ticket is valid for the hours posted that day.」</strong>实际常见为 <strong>10:00–17:00 或 11:00–17:00，17:00 准时清场（closes promptly at 5 pm）</strong>。<strong>周日：官方明确写「Touring is not available during Sunday services」</strong>，周日基本不售自助参观票；<strong>某个特定周日午后是否放开参观未能确认，必须逐日查 cathedral.org 的日历</strong>。<strong>Garth 中庭与 All Souls Memorial Garden 因中央塔工程封闭，官方称「不早于 2026 年晚秋」重开</strong>",
          "parking": "<strong>场地内有地下车库</strong>（由 Atlantic / asgpark.com 运营），入口在 Wisconsin Avenue、Woodley Road 南侧那个红绿灯处，<strong>开放 06:00–23:00，限高 7 英尺 6 英寸</strong>，各层电梯旁有无障碍车位与缴费机（收现金与信用卡）。<strong>周日礼拜时段免费</strong>。<strong>具体费率官方只给 PDF 且注明随时调整，2026 年数值未能核实</strong>。周边住宅区路边车位极少",
          "walk": "<strong>没有邻近地铁站。</strong>最近是红线 Woodley Park–Zoo/Adams Morgan 站，步行约 1.5 公里 / 20 分钟且是上坡；更实用的是 Wisconsin Avenue 走向的 Metrobus（D82 Wisconsin Avenue–Foggy Bottom 线在座堂门口设站，站点坐标 38.92969, -77.06651）。车库电梯到访客入口约 <strong>150 米 / 3 分钟</strong>；<strong>访客入口在从 Wisconsin Avenue 正对立面时的左前方，玻璃电梯对面</strong>"
        },
        "notes": [
          "<strong>三脚架（已逐项核实）：内部为「酌情限制」——官方原文是「Visitors may be limited in the use of photo equipment such as tripods or selfie sticks」，即工作人员可当场要求你收起来，实务上应按「只能手持」准备</strong>；个人非商业录像的政策则写「limited to hand-held and tripod equipment only」，两处口径不完全一致。<strong>外部与场地上的有计划拍摄需要 Photo Location Permit</strong>：基本许可为 2 小时、含摄影师在内最多 8 人、<strong>明确不含灯具与三脚架</strong>，<strong>起价 $250，而 10 月属旺季月份要 $350</strong>，审批需最多两周",
          "<strong>许可只覆盖座堂外部、指定场地与 Bishop's Garden；不含 Garth 喷泉区（那是纪念园）、不含 St. Albans、National Cathedral School、Beauvoir 等 Close 内其他机构；内部原则上只对在此举行仪式的当事人开放拍摄</strong>。普通游客手持随手拍不受这套许可约束",
          "<strong>礼拜与音乐会进行中一律禁止摄影摄像</strong>；不要把正在私人祈祷的人当作画面主体；官方导览手册明说<strong>闪光灯在这么大的内部空间里毫无作用</strong>，关掉它",
          "<strong>17:00 准时关门意味着你永远拍不到内部的暮光与夜景。</strong>要拍点灯后的外立面，只能在场地上从外面拍",
          "<strong>塔楼观景廊（Tower Observation Gallery）是「when available」而非固定开放</strong>，在中央塔施工期间尤其不稳定。如果观景视野是你此行的目的，<strong>请在买票当天先致电 (202) 537-6200 确认</strong>，不要指望自助票一定能上去",
          "<strong>属私立圣公会机构，联邦停摆完全不影响</strong>；真正影响开放的是葬礼、国家级礼拜、音乐会等临时占用，这类变更座堂会邮件通知并全额退款，但不会提前很久公布"
        ],
        "images": [
          {
            "url": "img/national-cathedral-in-dc-38a996bf.jpg",
            "cap": "座堂全景与中央塔 · Siubo11A / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/55/Space_Window_-_South_Nave_Bay_E_-_National_Cathedral_-_DC.JPG",
            "cap": "中殿南侧高窗上的 Space Window · Tim Evanson / CC BY-SA 2.0"
          },
          {
            "url": "img/washington-national-cathedral-from-bishop-s-garden-eb6d6616.jpg",
            "cap": "自 Bishop's Garden 仰望南立面 · Ron Dicker / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "meridian-hill",
        "n": 2,
        "name": "Meridian Hill Park（Malcolm X Park）",
        "en": "Meridian Hill Park (Malcolm X Park)",
        "score": 4,
        "tldr": "十三级叠瀑已于 2026 年 5 月 14 日复流，是本区最确定的好消息；免费、开到午夜、三脚架合法，蓝调长曝是正解。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "叠瀑已复流",
            "c": "good"
          },
          {
            "t": "开到午夜",
            "c": "good"
          },
          {
            "t": "三脚架合法",
            "c": "good"
          },
          {
            "t": "上层草坪或仍围挡",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>十三级叠瀑长约 300 英尺，是北美最长的连续跌水之一。</strong>它 2019 年因下层广场改造停水，<strong>是建成以来历史上第一次完全断流，一停七年</strong>；<strong>NPS 官方页面写明「reopened to visitors on May 14, 2026」，下层反射池同日重开</strong>。NPS 同时提示流量仍在调试中，可能被临时调整",
          "公园 1914 年由景观建筑师 <strong>George Burnap</strong> 起稿、<strong>Horace Peaslee</strong> 修订，按意大利文艺复兴台地园的路子做，<strong>直到 1936 年才算真正建成</strong>。1933 年划归 NPS，1994 年列为 National Historic Landmark",
          "<strong>对拍摄者最重要的一个技术事实：这里是美国「露石混凝土」（exposed-aggregate concrete）的试验场。</strong>石子按尺寸与颜色逐颗挑选，混凝土未完全硬化时就拆模，再用钢丝刷加酸洗把骨料表面刮出来。<strong>结果是整座公园的墙面、栏杆、台阶都有一层砂纸般的颗粒质感——低角度侧光下这层质感本身就是极好的抽象题材</strong>，比拍全景更值",
          "<strong>「Malcolm X Park」这个名字来自 1969 年 Angela Davis 在此集会时提出的更名倡议</strong>，至今是本地通用叫法但非官方名。<strong>周日下午的鼓圈（drum circle）自 1960 年代延续至今</strong>，在上层草坪靠近 Joan of Arc 雕像那一侧，通常从下午开始一直到天黑，NPS 官方页面把它列为公园的日常景象之一",
          "园内两件雕塑值得单独拍：<strong>1922 年的 Joan of Arc 骑马像是全 DC 唯一的女性骑马雕像</strong>（法国妇女团体所赠，2024 年 11 月做过修复）；<strong>下层广场那座浑天仪（armillary sphere）是 2024 年 11 月新装的复制品</strong>，原件在 1960 年代被破坏、1970 年代末拆除后失踪，新件是照历史照片与图纸重做的"
        ],
        "photo": "风光 <strong>4/5</strong>，建筑 <strong>4.5/5</strong>，人像 <strong>4/5</strong>。复流后的十三级跌水加露石混凝土的几何台地，是 DC 少有的「能拍慢门」的免费场地，且开到午夜、三脚架合法；扣分是上层草坪可能仍在围挡、以及秋季树冠遮蔽让下午光线很碎。",
        "shots": [
          {
            "name": "下层广场正对叠瀑仰拍（招牌机位）",
            "desc": "<strong>先把朝向说清楚：叠瀑从北端（38.92013）沿坡向南跌到下层反射池（38.91965），也就是整条水轴朝正南。你站在下层广场向北仰拍，太阳在你背后。</strong>这意味着<strong>正午前后叠瀑是被正面硬光打的，反差大、水花过曝，最不该拍的时段</strong>。<strong>真正的时段有三个：一是阴天全天（丝滑水流的最佳条件）；二是日落前 60–30 分钟（西侧台地与树把水池打进阴影、只有上部还留暖光，明暗分层最漂亮）；三是蓝调（9/25 约 19:05–19:30，10/22 约 18:25–18:50）</strong>。<strong>公园 5–10 月开到午夜，蓝调之后还有大量时间，这是本区唯一能合法慢慢拍夜景的地方。</strong><strong>慢门参数：白天要 ND8–ND64 才能到 1/2–2 秒；蓝调不需要 ND，2–15 秒直接拍。</strong><strong>1/2 到 1 秒的水是「有质地的丝」，超过 4 秒会糊成一片白，13 级台阶的层次就没了</strong>——这里不要盲目拉长曝光时间。24–35mm 竖构图从池边正中拍全程；配 CPL 压水面反光。",
            "park": [
              38.91967,
              -77.03498
            ],
            "view": [
              38.91965,
              -77.03564
            ]
          },
          {
            "name": "叠瀑顶端俯拍与 16th Street 壁龛",
            "desc": "从跌水最上一级的平台向南俯瞰，<strong>十三级水盘一路收窄消失在下层广场</strong>，是与上一个机位完全相反的视角，也更能表达「台地」这件事。<strong>此处朝南，秋季全天正对太阳，因此反过来——这个机位适合上午与傍晚的斜光，正午会直接吃到太阳进画面。</strong>推荐 <strong>日出后 1–2 小时（9/25 约 08:00–09:00，10/22 约 08:30–09:30）</strong>：此时太阳在东南、高度角 15–25°，<strong>擦地光会把每一级水盘边缘的露石混凝土质感全部勾出来</strong>，而且这个时段公园几乎没人。16–24mm 广角贴着栏杆向下压。往北再走 60 米就是 Joan of Arc 骑马像所在的上层平台。",
            "view": [
              38.92013,
              -77.03565
            ]
          },
          {
            "name": "上层平台：Joan of Arc 骑马像与周日鼓圈",
            "desc": "<strong>上层是开阔草坪与列树，也是周日下午鼓圈的地点</strong>（通常下午开始、持续到天黑，靠 Joan of Arc 雕像一侧）。<strong>拍鼓圈请用 35mm 或 50mm 走进去拍，不要在外围用长焦偷拍</strong>——这是一个持续六十年的社区活动，先站着听几分钟、点头示意，通常没人介意你拍，但远距离长焦会让人不舒服。<strong>雕像本身朝向使其正立面在下午受光</strong>，<strong>15:00–17:00 的侧光配秋树背景最好</strong>，85–135mm 浅景深单拍马与骑手的轮廓。<strong>重要提醒：2026 年整园养护中上层草坪自 4 月底起被围栏封闭做草皮更新，NPS 只说估计封闭到夏天，9–10 月围栏是否拆除未能确认</strong>——走道全程开放，但草坪本身可能进不去。",
            "view": [
              38.92071,
              -77.03571
            ]
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>（举办活动才需要 special use permit）",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>5 月至 10 月 05:00–24:00；11 月至次年 4 月 05:00–21:00。</strong><strong>整个 9 月底至 10 月底的行程窗口都适用「开到午夜」这一档</strong>，这是本区唯一能从容拍夜景的点位。无闭园日",
          "parking": "<strong>无专用停车场。</strong>16th Street NW、Euclid Street NW、W Street NW 一带是路边停车，<strong>大部分为居民许可区，非居民限停 2 小时且有时段限制，务必逐根看标杆</strong>。傍晚与周末车位竞争激烈，<strong>强烈建议不要开车</strong>",
          "walk": "<strong>Metro 绿/黄线 U Street 站</strong>步行到公园下层广场入口（16th &amp; W Street NW）约 <strong>900 米 / 12 分钟</strong>；<strong>红线 Columbia Heights 站</strong>约 <strong>1.0 公里 / 13 分钟</strong>。<strong>下层广场入口（16th &amp; Florida/W Street 角）是唯一的无障碍入口</strong>，有连续坡道通到 James Buchanan 纪念碑前的平台；<strong>16th Street 一侧的多数入口因台地与台阶不具无障碍条件</strong>。下层广场到叠瀑顶端约 150 米、要爬两段台阶"
        },
        "notes": [
          "<strong>三脚架（已逐项核实）：可以，不需要许可。</strong>NPS 现行摄影规则把三脚架、独脚架与手持灯具归入 handheld equipment，只有<strong>进入封闭区、需要独占场地、或搭建布景／使用非手持器材</strong>才需要 permit。公园本身也没有额外的三脚架禁令。架设时请避开主通道与鼓圈范围",
          "<strong>所有水体禁止涉水、游泳与洗浴（人与宠物皆然）</strong>，见 Superintendent's Compendium。想拍水面低机位就蹲在池边铺装上，不要下水，也不要把器材架进池里",
          "<strong>叠瀑的水在 2026 年 7 月初曾因旁边两座未改造的小喷泉试水而被冲进大量铁锈沉积、一度变成浑浊棕色</strong>，NPS 冲洗加人工吸底后数日内恢复。<strong>类似情况仍可能重演</strong>，出发当天可先看 PoPville 或 NPS Rock Creek Park 页面有无新公告",
          "<strong>NPS 明说「Testing of the fountain will continue, to adjust the water levels and obtain the correct flow rate」——流量并非固定</strong>，你看到的水量可能比历史照片大或小",
          "<strong>公园开到午夜不等于午夜适合待在这里。</strong>蓝调时段（日落后 20–50 分钟）人流仍多、照明正常，是拍夜景的合理窗口；<strong>再晚就不建议独自带三脚架停留</strong>，尤其是树荫密集的上层与东侧台阶",
          "秋季树冠茂密，<strong>下午的光在台地上是碎斑而不是整片</strong>，这也是为什么这里更推荐阴天与蓝调，而不是所谓的「黄金时刻」",
          "<strong>属 NPS（Rock Creek Park 管辖），但 2026 年 9 月 2 日生效的 CR 已把联邦拨款延到 12 月 11 日，本行程窗口内不存在停摆闭园风险</strong>"
        ],
        "images": [
          {
            "url": "img/cascading-water-fountain-at-meridian-hill-park-47c50237.jpg",
            "cap": "十三级叠瀑运行中 · Katy Van Every / CC BY-SA 4.0"
          },
          {
            "url": "img/looking-south-meridian-hill-park-fountain-15e0078f.jpg",
            "cap": "自叠瀑顶端向南俯瞰下层广场 · AgnosticPreachersKid / CC BY-SA 3.0"
          },
          {
            "url": "img/meridian-hill-park-a5605b77.jpg",
            "cap": "台地、露石混凝土墙与列树 · Kurt Kaiser / CC0"
          }
        ]
      },
      {
        "id": "dumbarton-oaks",
        "n": 3,
        "name": "Dumbarton Oaks 花园",
        "en": "Dumbarton Oaks Gardens",
        "score": 4,
        "tldr": "Beatrix Farrand 的台地园；只开下午 14:00–18:00、周一闭园、10/8–10 停开、$15 须网购、禁三脚架。",
        "tags": [
          {
            "t": "$15/人",
            "c": "paid"
          },
          {
            "t": "仅 Eventbrite 预购",
            "c": "risk"
          },
          {
            "t": "禁三脚架",
            "c": "risk"
          },
          {
            "t": "仅下午开放",
            "c": "risk"
          },
          {
            "t": "哈佛运营·不受停摆影响",
            "c": "good"
          }
        ],
        "highlights": [
          "<strong>先纠正一个常见的数字错误：正式花园是约 16 英亩，不是 27 英亩。</strong>Bliss 夫妇 1920 年买下的是一处 53 英亩产业；1940 年他们把<strong>上部 16 英亩连同宅邸捐给 Harvard University</strong>，成立拜占庭研究、前哥伦布研究与园林景观研究的研究所；<strong>剩下的 27 英亩划给了 NPS，成为今天独立的 Dumbarton Oaks Park</strong>——那是一处自然式的溪谷林地，免费、无人管、与这里不是一个地方。要拍台地园，买的是前者的票",
          "设计者 <strong>Beatrix Farrand</strong> 是美国景观设计师协会创始会员中唯一的女性。她与 Mildred Bliss <strong>密切合作了近三十年</strong>（1921 年起），<strong>每一级台地、每一张长椅、每一个石瓮与花境边缘都是两人逐项议定的</strong>。结果是一座随山势跌落、由正式到野趣逐段过渡的园子：Green Garden、Beech Terrace、Urn Terrace、Rose Garden、Fountain Terrace、Lovers' Lane Pool、Pebble Garden 一路向下",
          "<strong>1944 年 8 月到 10 月的 Dumbarton Oaks Conference 就在这栋楼里开</strong>——美、英、苏、中的代表在这里起草了后来成为《联合国宪章》骨架的方案。也就是说，你在深秋午后拍的这片草坪与台地，正是联合国蓝图定稿时窗外的景",
          "园内共有 <strong>12 座喷泉</strong>，原设计是活水常流、溢流后进雨水管网。2017–2018 年园方把 Pebble Garden、Fountain Terrace、Lovers' Lane、Ellipse 等几处改成循环系统，并于 2019 年装上紫外线灭藻灯替代加氯，<strong>年节水估计超过 2,800 万加仑</strong>。<strong>关于「秋天喷泉开不开」：官方从未公开发布过逐月运行表，未能从官方渠道确认。</strong>循环加 UV 的系统在防冻期之前没有停机理由，<strong>10 月 31 日前的常规季应当运行，信心中偏高；但请把它当作加分项而不是行程前提</strong>",
          "秋色：园方自家通讯里写他们的菊花与落叶树冠「always at their best in November」，<strong>与 DC 城区 11 月初的历史峰值一致</strong>。9 月底来基本全绿，10 月下旬能拍到明显转色但不是最盛"
        ],
        "photo": "建筑 <strong>4/5</strong>，风光 <strong>4/5</strong>，人像 <strong>4.5/5</strong>。台地、砖墙、铁门、水池构成一层层天然取景框，是全 DC 最适合环境人像的付费场地；扣分完全来自规则——禁三脚架、只开下午四小时、且禁止一切专业与商业拍摄。",
        "shots": [
          {
            "name": "North Vista 与主宅北立面",
            "desc": "进门后第一个正式空间，一条向北逐级收窄的草坪甬道，两侧砖墙与限石柱把远处视线压成一条。<strong>下午开园即到（14:00）时太阳在西南偏南，砖墙受侧光、草坪受顶光，反差偏大</strong>；<strong>真正好的是闭园前最后一小时</strong>——<strong>10 月下旬 17:00–18:00 正好是日落前 80 分钟到 20 分钟，整条甬道被极低角度的暖光贯穿</strong>（10/22 日落 18:21）。而 <strong>9 月底同样的 17:00–18:00 距日落还有一到两小时，光还是硬的</strong>——这是「晚十月明显优于晚九月」最直接的一处体现。24–35mm 站甬道正中轴线拍透视收敛；85mm 压缩台阶层次。禁三脚架，手持即可（光够）。",
            "park": [
              38.91406,
              -77.06358
            ],
            "view": [
              38.91436,
              -77.06287
            ]
          },
          {
            "name": "Fountain Terrace 与 Pebble Garden",
            "desc": "两处是园内最强的图案题材：Fountain Terrace 是对称双水池加铁艺花架，Pebble Garden 是整片彩色卵石拼成的 Bliss 家族纹章图案，<strong>上面覆着一层极浅的水膜——它靠的正是 2017 年改造后的循环系统</strong>。<strong>Pebble Garden 必须俯拍才成立</strong>，从上层台地边缘用 35–50mm 向下压，水膜会把天光反成一层高光，需要 <strong>CPL 偏振镜按需减反</strong>（留一点反光比全消掉好看）。<strong>时段选 16:00–17:30 的高侧光</strong>，此时卵石有立体感而水面还没进全阴影。<strong>若当日喷泉未运行，Pebble Garden 会变成一片干燥的灰色卵石，这个机位直接放弃。</strong>",
            "view": [
              38.91406,
              -77.06358
            ]
          },
          {
            "name": "Lovers' Lane Pool 与下层野趣段",
            "desc": "<strong>无独立 OSM 实体，地图无针脚</strong>（位于花园东南角、Fountain Terrace 下方）。一座仿意大利露天剧场式的椭圆水池，<strong>池后是 Farrand 1928–29 年设计的十五根带瓮列柱</strong>，半圆形阶梯座席贴着树林。这是全园最暗的一处，树冠遮蔽严重，<strong>阴天或 17:00 之后的散射光反而最适合</strong>，直射光会打出杂乱的斑驳。35mm 拍列柱与水面的对称；<strong>如果水池在运行，1/15 秒手持配机身防抖能拍出轻微的水面拉丝</strong>（不能用三脚架，只能靠稳）。ISO 800–3200 备用。往下走就进入非正式的林地段，10 月下旬这里落叶最厚。",
            "park": [
              38.91406,
              -77.06358
            ]
          }
        ],
        "access": {
          "book": "<strong>必须提前在 Eventbrite 购定时票，现场没有售票点、没有候补、没有 standby。</strong>票为定时入场，持票可在标注时间到 17:30 之间入园；每户每日限 10 张；售出不退（仅当园方自行闭园时例外）；<strong>不可再次入场</strong>。2026 年季票已全部售罄",
          "ticket": "常规季（3/1–10/31）<strong>$15/人</strong>，2 岁及以下免费。冬季（11/1–12/31）<strong>免票但仍需提前预约</strong>",
          "hours": "<strong>常规季 3 月 1 日–10 月 31 日：周二至周日 14:00–18:00，17:30 停止入场，周一及联邦假日闭园。</strong><strong>2026 年额外闭园日：10 月 8、9、10 日</strong>（当日不售票且季票不认）。冬季 11/1–12/31：14:00–17:00，16:30 停止入场，同样周一与联邦假日闭园。1/1–2/28 全季闭园。<strong>注意 10 月 12 日的 Columbus Day / Indigenous Peoples' Day 是周一，本就闭园，不额外冲突</strong>",
          "parking": "<strong>无自有停车场。</strong>周边 R Street、32nd Street、31st Street 是居民区路边停车，大部分路段有 Residential Permit Parking 时段限制（非居民通常限停 2 小时），<strong>看清每一根标杆</strong>。开车来建议停 Georgetown 商业区车库后步行上坡",
          "walk": "游客入口在 <strong>1703 32nd Street NW</strong>（32nd &amp; R Street 路口附近）。从 M Street 商业区走上来是持续爬坡约 <strong>1.1 公里 / 15–18 分钟</strong>；<strong>Metro 无邻近站</strong>，Dupont Circle 站（红线）步行约 1.9 公里 / 25 分钟，或搭 Wisconsin Avenue 走向的 Metrobus 到 Q Street 后步行 600 米"
        },
        "notes": [
          "<strong>三脚架、独脚架、自拍杆、灯具及其他大体积摄影器材一律禁止</strong>，这是官方 Gardens Rules 的明文条款，不是现场酌情。<strong>同时禁止一切商业与专业摄影摄像</strong>（含订婚照、婚纱、活动拍摄）",
          "园方要求把花园当作「户外博物馆」：<strong>禁止触摸、攀爬或坐在喷泉、雕塑与园墙上</strong>，禁止踩踏花境、摘花、爬树。想拍低机位请蹲在铺装路面上，不要跨进花床",
          "<strong>园内禁止饮食、禁止携带敞口容器</strong>，只能在长椅与座椅上坐。写生可以，但仅限铅笔或炭笔、画板不超过 12\"×18\"",
          "园区近年野生动物增多，<strong>包括无毒的黑鼠蛇（black rat snake）</strong>。园方明确说它们不具攻击性，遇到别惊动即可",
          "<strong>下午开园意味着你永远拍不到这里的晨雾与早光</strong>。接受这一点，把行程排成「上午别处、14:00 进园、18:00 出园直接接日落」",
          "<strong>由 Harvard University 的 Trustees 运营，联邦停摆完全不影响开放</strong>；真正会临时关门的是恶劣天气（园方保留在危险天气下闭园的权利）与内部活动日"
        ],
        "images": [
          {
            "url": "img/dumbarton-oaks-in-september-21676345916-67fce000.jpg",
            "cap": "九月的台地花园 · DC Gardens / CC BY 2.0"
          },
          {
            "url": "img/dumbarton-oaks-in-september-21676351366-92c70d31.jpg",
            "cap": "花境与砖墙层次 · DC Gardens / CC BY 2.0"
          },
          {
            "url": "img/dumbarton-oaks-north-face-df6bbbf3.jpg",
            "cap": "主宅北立面与 North Vista · AgnosticPreachersKid / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "exorcist-steps",
        "n": 4,
        "name": "驱魔人阶梯与 Georgetown 老街区",
        "en": "The Exorcist Steps, Cady's Alley & Georgetown Rowhouses",
        "score": 3.5,
        "tldr": "75 级深沟阶梯全天几乎无直射光，阴郁本身就是主题；配 O/P 街的鹅卵石与有轨电车轨道能凑一条完整扫街线。",
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
            "t": "深沟无光",
            "c": "risk"
          },
          {
            "t": "沿街是私宅",
            "c": "risk"
          }
        ],
        "highlights": [
          "阶梯 <strong>1895 年</strong>由本地民主党人物 George Killeen 主持修筑，与旁边的 <strong>Capital Traction Company Union Station（今 Georgetown Car Barn）</strong>同期完工。选址是 20 度斜坡、<strong>从 Prospect Street 到 M Street 落差 60 英尺</strong>，为了整平站场挖掉了八万多立方码土方，这道挡土墙与嵌在墙里的楼梯就是那次工程的副产品——它本质上是采光井兼公共通行权，不是景观楼梯",
          "<strong>在《The Exorcist》之前它被本地人叫作「Hitchcock steps」</strong>。1972 年 William Friedkin 在此取景，Karras 神父坠亡那场戏为保护替身在石阶上铺了泡沫垫，<strong>整段摔了两遍</strong>。2015 年万圣节前夜，市长 Muriel Bowser 在 Friedkin 与原著／编剧 William Peter Blatty 到场的仪式上，<strong>在阶梯底部揭幕纪念铭牌，正式列为 DC 地标与官方旅游景点</strong>。整组建筑（车库、挡土墙、楼梯）已列入 National Register，编号 100004248",
          "常说是 75 级，<strong>但当地有个梗是每次数的结果都不一样</strong>。楼梯是 36th Street NW 的延续，南北走向，被四层高的车库（东）与石挡土墙（西）夹成一条约 3–4 米宽的深沟",
          "<strong>O Street NW 与 P Street NW 在 33rd 到 36th 之间保留着全 DC 仅存的原状有轨电车轨道</strong>，嵌在比利时块石（Belgian block）路面里，未被沥青覆盖。Capital Traction 的电车 <strong>1962 年 1 月 28 日</strong>停运，这两条街是唯一没被铲掉的物证。潮湿或雨后轨道反光时最好拍",
          "N Street NW 是联邦风格排屋密度最高的一条：<strong>3307 N Street NW 是 John F. Kennedy 1957–1961 年的住所</strong>，他从这栋房子的台阶上出发去就职；<strong>3014 N Street 的 Laird-Dunlop House 曾属于 Robert Todd Lincoln</strong>，后来是《华盛顿邮报》的 Ben Bradlee 家。<strong>全部是有人居住的私宅</strong>"
        ],
        "photo": "建筑 <strong>4/5</strong>，人像 <strong>4/5</strong>，风光 <strong>1/5</strong>。阶梯的透视与压迫感是 DC 少有的电影感场景，鹅卵石街区适合环境人像；扣分因为阶梯几乎永远缺光、可站位极少，且是一条真正的通勤楼梯，不能久占。",
        "shots": [
          {
            "name": "阶梯底部（M Street 一侧停车场）向上仰拍",
            "desc": "<strong>这是招牌构图，也是唯一能表达 60 英尺落差的角度。</strong>沟是南北走向、南端向 M Street 敞口，所以<strong>推算</strong>只有太阳接近正南时光才可能顺着沟轴射进来：<strong>9 月 25 日太阳正南时刻 13:00、高度角 50°，10 月 22 日 12:53、高度角 40°</strong>，因此<strong>大致 12:30–13:30 会有一条窄光带扫到楼梯上半段，其余时间整条沟全天处于阴影</strong>。<strong>此为几何推算，未经实地核实。</strong>但反过来说——<strong>阴郁低光正是这个场景的正解</strong>，直射光会把气氛拍没。推荐阴天全天、或日落后 20–40 分钟靠沟内路灯拍（9/25 约 19:20–19:40，10/22 约 18:40–19:00）。<strong>16–24mm 贴着底部台阶正中低机位</strong>，让两侧墙面在画面上缘收成一点。手持需 ISO 3200–6400；架三脚架 1–4 秒会更干净，但楼梯是通行道，架完立刻拍完立刻收。",
            "park": [
              38.90285,
              -77.06342
            ],
            "view": [
              38.90552,
              -77.07016
            ]
          },
          {
            "name": "阶梯顶部（Prospect Street 与 36th Street 路口）俯拍",
            "desc": "与上一个机位同一 OSM 实体、相隔 60 英尺垂直落差。<strong>俯视构图更适合放人</strong>：让模特站在下方三分之一处仰头，24–35mm 从顶部铁栏杆外侧向下压，<strong>台阶的重复节奏会把视线一路带到底部的亮口</strong>，形成隧道效果。2015 年那块纪念铭牌在底部，想拍铭牌要下到最下面。顶部是 Prospect Street 的人行道，白天有游客排队打卡，<strong>要拍空镜请在日出后一小时内来（9/25 约 07:00–08:00，10/22 约 07:25–08:25）</strong>，那个时间人最少，且沟内仍是均匀的散射光，正合用。",
            "view": [
              38.90552,
              -77.07016
            ]
          },
          {
            "name": "O Street / P Street 的鹅卵石与有轨电车轨道",
            "desc": "<strong>O Street NW 在 33rd–34th 之间（38.90779, -77.06696）与 P Street NW 同段（38.90878, -77.06697）在 OSM 上都标为 surface=sett 且带 railway=disused，是可核对的实体。</strong><strong>最佳时段是日出后 30–60 分钟与日落前 60 分钟的低角度侧光</strong>——只有擦地光能把块石的圆顶与轨道的金属边缘同时勾出来，正午顶光下这条街完全是平的。<strong>35mm 或 50mm 蹲低到膝盖高度沿街纵向拍</strong>，让两道轨道在画面里收敛消失；85mm 拍单块石与轨道接缝的抽象。雨后或洒水车过后效果提升一个档次。街两侧是密集的联邦风格排屋，秋天时街树转色，10 月下旬这条街是本区最好的秋色街景。",
            "view": [
              38.90779,
              -77.06696
            ]
          },
          {
            "name": "Cady's Alley 设计街区",
            "desc": "M Street 南侧的一条改造后巷，两侧是玻璃幕墙嵌进旧砖仓库的设计家居店。<strong>巷子东西走向、宽度只有几米，全天大部分时间是散射光</strong>，正好适合<strong>环境人像与橱窗反射的双重曝光式构图</strong>。35–85mm，f/1.8 让背景的砖与玻璃虚成色块。<strong>最佳是黄昏 18:00 之后店内灯亮、天光未尽的 20 分钟</strong>（10 月下旬约 17:50–18:15）。巷内是私人商铺产权，架三脚架会被店员劝离，手持。",
            "view": [
              38.90466,
              -77.06691
            ]
          }
        ],
        "access": {
          "book": "<strong>不需预约</strong>",
          "ticket": "<strong>免费</strong>",
          "hours": "<strong>阶梯是公共通行权，24 小时开放无人管理</strong>；O/P Street 与 N Street 是普通市政道路，同样全天可达",
          "parking": "阶梯底部就是一个小型停车场（M Street 与 Canal Road 交口附近），车位极少；实际建议停 Waterfront Center 车库（38.90285, -77.06342）或用 Metro",
          "walk": "从滨水公园东端走到阶梯底部约 <strong>900 米 / 12 分钟</strong>；<strong>Rosslyn 站过 Key Bridge 到阶梯底部约 800 米 / 10 分钟，是最近的地铁路径</strong>。阶梯底部到 O Street 轨道段约 700 米 / 10 分钟，中间要爬上 Prospect Street 那 60 英尺"
        },
        "notes": [
          "<strong>三脚架：阶梯与街道均属公共空间，法律上可用</strong>，但阶梯窄且是实际通行道、Cady's Alley 属私人商铺产权，两处都建议手持或极短时间架设",
          "<strong>N Street、O Street、P Street 沿线全部是有人居住的私宅。</strong>不要走上台阶、不要把镜头对着窗户、不要在同一户门前停留超过一两分钟。这是这条线唯一真正会惹麻烦的地方",
          "阶梯石面在雨天与落叶季<strong>非常滑</strong>，坡度接近 40 度且没有中间平台；带器材上下请单手扶栏，不要边走边看取景器",
          "<strong>不要在阶梯上摆拍「坠落」姿势</strong>——除了危险，这里已是官方地标且常有本地人通行",
          "10 月 31 日前后是这里全年人最多的时候（万圣节朝圣），<strong>如果行程落在 10 月下旬且想要空镜，务必赶清晨</strong>",
          "Georgetown Car Barn 目前是 Georgetown University 的办公与教室楼，<strong>不对公众开放</strong>，只能拍外墙"
        ],
        "images": [
          {
            "url": "img/exorcist-steps-50391769906-ca13a718.png",
            "cap": "阶梯全貌与两侧夹壁 · Ben Schumin / CC BY-SA 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Looking_up_the_Exorcist_steps_in_Georgetown._-_panoramio.jpg",
            "cap": "自底部仰视 75 级台阶 · olekinderhook / CC BY 3.0"
          },
          {
            "url": "img/exorcist-steps-3-ebb3e8f9.jpg",
            "cap": "阶梯与 Georgetown Car Barn 挡土墙 · APK / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "georgetown-canal",
        "n": 5,
        "name": "C&O 运河与 Georgetown 滨水公园",
        "en": "C&O Canal Georgetown & Georgetown Waterfront Park",
        "score": 3,
        "tldr": "运河仍是干河床、游船停摆、纤道有绕行；真正值得来的是滨水公园的日落与 Key Bridge 剪影。",
        "tags": [
          {
            "t": "完全免费",
            "c": "free"
          },
          {
            "t": "运河无水",
            "c": "risk"
          },
          {
            "t": "纤道绕行",
            "c": "risk"
          },
          {
            "t": "日落机位强",
            "c": "good"
          }
        ],
        "highlights": [
          "Chesapeake &amp; Ohio Canal 1828 年动工、1850 年通到 Cumberland，全长 184.5 英里，<strong>Georgetown 就是 Mile 0</strong>。今天沿 Level 1 到 Level 4 还留着 Lock 1–4 四座石砌船闸，闸室、闸门槽、绞盘基座都是原物，即使没水也是很好的石构与几何题材",
          "<strong>但请先接受这个前提：水没了。</strong>NPS 官方水位表把 Locks 3–4、4–5、5–6 全部标为 De-watered。$12.7M 的船闸与石墙工程从 2024 年 2 月做到现在，<strong>2026 年 2 月底 Level 1 北墙部分坍塌</strong>后工期又延到「through Fall 2026」。网上流传的绿水倒影照都是 2023 年之前拍的",
          "运河两侧那排红砖厂房是 Georgetown 工业时代的遗存——面粉厂、制冰厂、仓库，19 世纪靠运河与 B&amp;O 铁路运货，1920 年代 Key Bridge 与 Whitehurst Freeway 建成后航运彻底衰败，厂房在 1970 年代被改造成 Canal Square 一类的商业体。<strong>Wisconsin Avenue 以西、Grace Street 一带砖立面最完整</strong>",
          "<strong>Georgetown Waterfront Park</strong> 2011 年秋建成，10 英亩，从 31st Street NW 一路延伸到 Key Bridge，<strong>24 小时开放且完全免费</strong>。西端有一座公共迷宫（labyrinth），中段 Percy Plaza 有一座季节性运行的喷泉（<strong>10 月是否还开未能从官方渠道确认</strong>，NPS 只写「seasonal」）",
          "<strong>Francis Scott Key Bridge</strong> 1923 年通车，是 DC 段 Potomac 河上现存最古老的桥，七跨钢筋混凝土开腹拱。它取代的是更早的 Aqueduct Bridge——那座桥曾把运河船直接驳过河去 Alexandria 运河，<strong>它的桥台残迹至今还立在滨水公园西端的河岸上</strong>，是很好的前景"
        ],
        "photo": "风光 <strong>3.5/5</strong>，建筑 <strong>3/5</strong>，人像 <strong>3.5/5</strong>。滨水公园的日落方位极好、开阔且免费，撑起了全部分数；运河本体因无水掉了至少一档，纤道工程围挡也让砖仓库那条线不完整。",
        "shots": [
          {
            "name": "Georgetown Waterfront Park 东段，日落对着 Key Bridge",
            "desc": "<strong>本条目唯一的招牌机位。</strong>从公园东端（31st Street NW 入口）沿河岸步道向西望 Key Bridge，方位约 <strong>280°</strong>。9 月 25 日日落方位 270°、10 月 22 日 257°——<strong>9 月底太阳几乎正落在桥的轴线上（偏左 10°），10 月底会明显偏到桥左侧的河面上</strong>。两种都好用，但构图不同：9 月底把太阳压在桥拱开口里做爆闪星芒（f/16），10 月底让桥留在画面右侧做纯剪影、左边留大片橙红天空。<strong>时段 9/25 是 18:20–19:28，10/22 是 17:40–18:48</strong>（日落前 40 分钟到民用暮光结束）。<strong>桥在这个时段是剪影而不是被照亮的主体</strong>——桥面路灯与对岸 Rosslyn 楼群会在日落后 15–20 分钟点亮，那 10 分钟是天空亮度与灯光亮度平衡的窗口，蓝调版本比金光版本更出片。24–70mm 通吃，70–200mm 压缩 Rosslyn 天际线与桥拱效果更强。三脚架无限制，河岸步道很宽。",
            "park": [
              38.90285,
              -77.06342
            ],
            "view": [
              38.90275,
              -77.06513
            ]
          },
          {
            "name": "Lock 3 / Lock 4 船闸段纤道",
            "desc": "<strong>把这里当石构与线条题材，不要当水景题材。</strong>Lock 3（38.90410, -77.05935）与 Lock 4（38.90418, -77.06033）之间这段 Level 3 是 Georgetown 保存最完整的闸室。无水状态下闸底铺石、闸墙分层砌缝、两侧红砖厂房的倒影墙全部裸露，<strong>反而更适合拍结构</strong>。运河呈东西走向、两侧被高楼夹住，<strong>只有 11:30–14:30 顶光能落到闸底</strong>，其余时间整条沟都在阴影里；想拍砖墙暖色就反过来选 16:30 之后的高侧光打上层立面。24–35mm 沿纤道纵向压缩闸室序列，35–85mm 拍闸门槽与铁件细节。<strong>纤道 Mile 0.4–1 有施工绕行，按现场旗手与告示牌走，Level 1 北墙坍塌点周边完全封闭。</strong>",
            "view": [
              38.9041,
              -77.05935
            ]
          },
          {
            "name": "Wisconsin Avenue 以西的砖仓库与吊桥段",
            "desc": "<strong>无 OSM 实体，地图无针脚。</strong>位置在 Wisconsin Avenue 跨运河桥往西，沿 Grace Street 与 Cady's Alley 之间那段 Level 4。这里是砖立面最连续、木质人行吊桥最上镜的一段，也正是 Level 4 石墙修复的工区之一——<strong>围挡与脚手架位置随施工推进变动，无法预告</strong>。光线同上：正午顶光进沟，傍晚打立面。这段建议放在行程末尾当机动项，到现场看围挡再决定要不要花时间。",
            "park": [
              38.90466,
              -77.06691
            ]
          }
        ],
        "access": {
          "book": "<strong>不需预约。</strong>运河游船（Georgetown Heritage）状态为 Closed，目标 2027 年春复航，本次无票可买",
          "ticket": "<strong>免费</strong>（C&amp;O Canal NHP 与 Georgetown Waterfront Park 均不收门票）",
          "hours": "Georgetown Waterfront Park <strong>24 小时开放</strong>。C&amp;O Canal 纤道无固定闭园钟点，但 <strong>Georgetown 段 Mile 0.4–1 有施工绕行、Level 1 北墙坍塌点周边封闭</strong>，绕行路线走相邻街道与巷子，多绕 0.3 英里以内。NPS 现况页显示 Georgetown Visitor Center 为「Open」，<strong>但其具体每日开放钟点未能从官方渠道确认</strong>，需要盖 Passport 章的话请先致电 301-739-4200",
          "parking": "<strong>不建议开车。</strong>Georgetown 街边咪表周一至周六收费（费率以现场标牌为准，<strong>2026 年具体价格未能核实</strong>）；车库首选 Washington Harbour（3000 K St NW）与 Georgetown Park（3222 M St NW），日间约 $20–30/天量级。Waterfront Center 车库（38.90285, -77.06342）离滨水公园最近",
          "walk": "Metro <strong>Foggy Bottom–GWU 站（蓝/橙/银线）</strong>步行到滨水公园约 <strong>1.3 公里 / 16 分钟</strong>；<strong>Rosslyn 站</strong>走 Key Bridge 过河约 <strong>1.2 公里 / 15 分钟</strong>，<strong>而且过桥时本身就是拍 Georgetown 天际线的免费机位</strong>。滨水公园东端到 Lock 3 约 700 米 / 9 分钟"
        },
        "notes": [
          "<strong>三脚架：滨水公园与纤道均可自由使用。</strong>NPS 2023 年起的全国摄影规则把三脚架、独脚架、手持灯具归为 handheld equipment，只有进入封闭区、需要独占场地、或搭建布景才需要许可证",
          "<strong>请务必在出发当天早上再查一次 nps.gov/choh 的 Current Park Conditions 页</strong>——水位、纤道封闭段与绕行路线都在那一页，且会随施工变动",
          "滨水公园的木质步道与河岸护栏在日落后没有照明死角，人流到 21:00 前都不少；<strong>但 Whitehurst Freeway 高架下与运河纤道夜间光线很差</strong>，独自带器材不建议天黑后走纤道",
          "公园西端的 labyrinth 是浅色石材铺地，<strong>正午顶光下几乎没有明暗对比，接近不可拍</strong>；要拍它必须等日落前 30 分钟的低角度侧光把石缝勾出来",
          "Percy Plaza 喷泉是季节性运行，<strong>10 月是否仍开放官方未公布</strong>，不要把它写进必拍清单",
          "Key Bridge 桥面人行道很窄且紧贴车流，<strong>桥上架三脚架会被 Arlington 一侧的警察劝离</strong>，桥上请手持"
        ],
        "images": [
          {
            "url": "img/chesapeake-and-ohio-canal-panorama-cfbbb349.jpg",
            "cap": "Georgetown 段运河与纤道全景 · APK / CC BY-SA 4.0"
          },
          {
            "url": "img/chesapeake-and-ohio-canal-and-key-bridge-57b97175.jpg",
            "cap": "运河尽头与 Key Bridge · APK / CC BY-SA 4.0"
          },
          {
            "url": "img/georgetown-waterfront-park-and-rosslyn-0177fb7e.jpg",
            "cap": "滨水公园对望 Rosslyn 天际线 · APK / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "cedar-hill",
        "n": 6,
        "name": "Frederick Douglass 故居（Cedar Hill）",
        "en": "Frederick Douglass National Historic Site (Cedar Hill)",
        "score": 3.5,
        "tldr": "免票但室内只能跟游、需 recreation.gov 预约 $1；周日周一闭馆，9:00 开门那一场的城市远眺光线最好。",
        "tags": [
          {
            "t": "免门票",
            "c": "free"
          },
          {
            "t": "预约费 $1",
            "c": "paid"
          },
          {
            "t": "室内仅限跟游",
            "c": "risk"
          },
          {
            "t": "周日周一闭馆",
            "c": "risk"
          },
          {
            "t": "室内可拍·禁闪光",
            "c": "good"
          }
        ],
        "highlights": [
          "Frederick Douglass <strong>1877 年</strong>买下这栋 1850 年代建于山顶的宅子，<strong>当时 Uniontown（今 Anacostia）的地契上带有禁止售予非裔的限制性条款，他的购入直接打破了它</strong>。他把这里命名为 Cedar Hill，住到 <strong>1895 年 2 月 20 日</strong>去世为止。房子共 21 间、山头 51 英尺高、连同园地约 9 英亩",
          "<strong>屋内约 70% 的陈设是道格拉斯本人或家人的原物</strong>——家具、藏书、画作、个人用品都还在原位，这在美国的历史宅邸里比例极高。<strong>后院还留着他称为「the Growlery」的一间独立小石屋书房</strong>，他用来独处写作",
          "他去世后由第二任妻子 <strong>Helen Pitts Douglass</strong> 发起保存，与全国有色人种妇女俱乐部联合会共同维系了几十年；<strong>1962 年 9 月 5 日由 Kennedy 签署设立为 Frederick Douglass Home</strong>，1972 年大修后重开，1982 年增建访客中心，<strong>1988 年经国会立法升格为 National Historic Site</strong>",
          "<strong>山顶视野是这里的摄影核心，方位需要说清楚：从故居门廊看出去，美国国会大厦在方位约 325°（西北偏北）、直线距离约 3.6 公里；Washington Monument 在方位约 304°（西北偏西）、约 5.3 公里。</strong>整片天际线大致落在 300°–330° 这个 30 度的扇形里，<strong>用 200–400mm 压缩才能让国会圆顶在画面中占到有效面积</strong>",
          "<strong>这是全区唯一「室内必须跟着讲解员走」的点位。</strong>房子只能通过 ranger 导览进入，每场 30 分钟、覆盖一二两层、上限 10 人。<strong>不给自由活动时间，也不允许中途插入</strong>——这直接决定了你的室内拍摄策略"
        ],
        "photo": "人文 <strong>4/5</strong>，风光 <strong>3.5/5</strong>，建筑 <strong>3.5/5</strong>。室内原物密度极高且明确允许拍摄，是本区唯一的历史室内题材；扣分是 30 分钟跟游节奏、禁背包、以及 17:00 闭园导致拍不到山顶的日落与蓝调。",
        "shots": [
          {
            "name": "山顶门廊向西北眺望国会大厦",
            "desc": "<strong>本条目的招牌机位，而且最佳时段被开门时间锁死了。</strong>视线朝西北（国会 325°、方尖碑 304°），<strong>意味着市中心那些朝东南的立面正对着你</strong>——要让它们受正面光，太阳必须在东到东南，也就是<strong>上午</strong>。<strong>访客中心 9:00 开门，此时太阳方位约 110–125°、高度角 15–20°，正是暖色低角度正面光，这就是全天最好的时刻，没有第二个。</strong><strong>所以请订 9:00 那一场</strong>：先在山顶拍城市，再进屋。<strong>17:00 闭园，日落是 19:02（9/25）／18:21（10/22），山顶的日落与蓝调你拍不到，别做计划。</strong><strong>200–400mm 是必需的</strong>（3.6 公里外的圆顶用 70mm 只有一个小疙瘩）；<strong>秋季清晨的低层霾是最大敌人</strong>，冷锋过境后的第一个晴天能见度最好。门廊与草坪上可以架三脚架。",
            "park": [
              38.86362,
              -76.98451
            ],
            "view": [
              38.86276,
              -76.9851
            ]
          },
          {
            "name": "故居正立面与门廊",
            "desc": "白色木构、带柱廊、坐在 51 英尺高的坡顶上。<strong>正立面朝西北，与山顶视野同向，因此正立面在上午处于背光、在下午才被正打。</strong>两种都能用：<strong>上午（9:00–10:30）拍逆光轮廓加天空，配合 85 级台阶做前景，强调「山上的房子」这个概念</strong>；<strong>下午（15:00–16:45）正面受光，白色木板墙细节最完整</strong>，而 15:00 与 15:30 场次正好落在这个窗口。<strong>24–35mm 从台阶中段仰拍</strong>，让门廊柱列与山坡的坡度一起进画。不要走进花圃，园地是历史景观的一部分。",
            "view": [
              38.86276,
              -76.9851
            ]
          },
          {
            "name": "室内导览中的书房与陈设",
            "desc": "<strong>官方规则原文：「Photography is permitted, but the flash must be off to protect light-sensitive objects.」——可以拍，但必须关闪光。</strong><strong>真正的限制是另一条：婴儿车、手提袋、背包与其他大件包一律不得带进屋。</strong>意味着<strong>你只能带一机一镜进去，其余留车上或访客中心</strong>——请提前决定好那支镜头。<strong>推荐 24mm 或 35mm 的 f/1.4–f/1.8 定焦</strong>：房间小、只能站在地毯走道上、不能踏木地板，广角加大光圈是唯一解。ISO 3200–6400 打底，1/60 秒以上，机身防抖全开。<strong>30 分钟走完两层，平均每个房间不到 3 分钟</strong>，进屋前想好「书房的书桌、客厅的钢琴、卧室的窗光」这三张，到位就按，不要现场构思。",
            "view": [
              38.86276,
              -76.9851
            ]
          }
        ],
        "access": {
          "book": "<strong>房屋内部只能通过 ranger 导览进入。</strong>官方强烈建议预约：<strong>recreation.gov（Facility 234636）或电话 1-877-444-6777</strong>，<strong>每张票收 $1 不可退的预约服务费，最晚需提前一天预约，最早可提前 6 个月</strong>。未被预约掉的余票在访客中心免费先到先得，<strong>但热门时段经常提前很久就订满</strong>。11 人以上团体必须预约（1-877-559-6777，提前至少一周，同样 $1/人，学校团体统一 $10）",
          "ticket": "<strong>免门票、免入园费</strong>。唯一的钱是 $1/张的网上预约服务费",
          "hours": "<strong>房屋导览仅在周二至周六进行</strong>（<strong>即周日与周一无法进屋</strong>）。标准场次：<strong>9:00、12:15、13:15、15:00、15:30，以及仅 4–10 月加开的 16:00 场</strong>，每场 30 分钟、上限 10 人。<strong>另有每天 11:30 的一场 Grounds Tour（户外，15–20 人）</strong>。访客中心 <strong>4–10 月 9:00–17:00</strong>（11–3 月 9:00–16:30）。<strong>提醒：NPS 导览页最后更新于 2025 年 8 月，2024 年曾因人手不足一度缩到每周只开三天，2026 年秋是否仍为周二至周六未能确认，出发前请致电 771-208-1499</strong>",
          "parking": "<strong>场内有免费停车场</strong>，位于 W Street SE 与 15th Street SE 交口，就在访客中心门口。车位不多但通常够用；停满可停周边住宅街道，<strong>但要看清居民许可时段标牌</strong>。行动不便者可先到访客中心告知 ranger，获准后直接把车开上山顶（山顶有两个无障碍车位）",
          "walk": "<strong>Metro 绿线 Anacostia 站</strong>，从「Howard Road / Buses」出口出站，右转 Howard Road 走一个街区、左转 Martin Luther King Jr. Avenue 走三个街区、右转 W Street 走四个街区到访客中心，<strong>全程约 1.2 公里 / 15 分钟</strong>，<strong>路线全在有商铺的主干道上</strong>。<strong>更省事的是从 Anacostia 站换 B2 或 V2 路公交，站点就在门口的 W &amp; 14th Street</strong>。停车场到访客中心 30 米；<strong>访客中心到山顶故居要爬 85 级台阶，或走无障碍坡道，约 3–5 分钟</strong>"
        },
        "notes": [
          "<strong>三脚架（已逐项核实）：户外的园地与山顶可以用。</strong>National Capital Parks-East 的 2026 年 Superintendent's Compendium 把三脚架、独脚架与手持灯具明确归为 handheld equipment，只有进入封闭区、独占场地或搭建布景才需许可。<strong>室内则因为禁带大件包、30 分钟跟游、且只能站在地毯上，实务上完全不可能架设</strong>",
          "<strong>关于 Anacostia 的实用建议（只讲操作，不讲刻板印象）：</strong>这里的报案犯罪率高于 DC 西北部，但故居本身有 NPS 工作人员常驻、免费停车场就在门口 30 米、且<strong>全年 17:00 就闭园，你不会在天黑后还留在附近</strong>。<strong>最省心的方案是开车直接停场内，或搭 B2/V2 在门口下车</strong>；走地铁那 15 分钟全程在 MLK Jr. Avenue 与 W Street 这两条有店面的主街上，白天走没问题",
          "<strong>器材上的建议是「少而精」而不是「藏起来」：</strong>带一机一镜（反正室内也不许背包），把长焦在山顶用完就收进车里，不要在街上边走边换镜头。这条对任何城市都适用，在这里只是更值得执行",
          "<strong>必须提前 30 分钟到访客中心取票</strong>（9:00 那场除外，因为访客中心 9:00 才开门）。<strong>导览一旦进屋就不能再加人</strong>，迟到即失效，且团体迟到超过 15 分钟直接作废",
          "屋内禁止饮食、嚼口香糖与吸烟；<strong>必须全程走在地毯走道上，不能踩到木地板</strong>；<strong>故居内没有洗手间</strong>，上山前先在访客中心解决",
          "访客中心有一部 19 分钟的影片《Fighter for Freedom: The Frederick Douglass Story》，<strong>提前 30 分钟到的时间正好够看完</strong>，看了再进屋，导览的信息密度会高很多"
        ],
        "images": [
          {
            "url": "img/frederick-douglass-house-2f8a4807.jpg",
            "cap": "Cedar Hill 故居正立面 · Peter Fitzgerald / CC BY-SA 3.0"
          },
          {
            "url": "img/frederick-douglass-house-a5f380b7.jpg",
            "cap": "山顶故居与前坡草地 · Aude / CC BY-SA 2.5"
          }
        ]
      }
    ]
  }
];
