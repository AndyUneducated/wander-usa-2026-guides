# 数据准确性复核清单

每条都需要对着官方来源核对。改动请回写到 `<region>/parts/*.js`（socal 直接改 `socal/data.js`），然后重新跑 `tools/assemble.py`。

| 优先级 | 条数 | 含义 |
| --- | --- | --- |
| P0 | 1 | 声明不可抵达或已关闭，判错代价最大 |
| P1 | 104 | 含具体时刻/日期/价格，最易过期 |
| P2 | 36 | 预约与门票要求 |
| P3 | 0 | 停车与步行等 |


## P0（1 条）


### nyc / Boston

- `fenway-harborwalk` **2. Fenway Park Exterior & the Boston Harborwalk**  
  开放时间：Fenway Park 导览官方口径：「Available year-round. Public Tours depart at the top of each hour」，「April 1 through October 31: 9 a.m. – 5 p.m.」，「Last tour departs at 5 p.m. on non-game days」，「On game days the last tour departs THREE hours before game time」。11 月 1 日至 3 月 31 日改为 10:00–17:00。全年只在 Thanksgiving、Christmas、New Year's Day 闭馆。→ 所以十月下旬导览照常运行，这一点是好消息。但 2026 季后赛（Wild Card 9/29–10/1、Division Series 10/3–10、ALCS 10/12–20、World Series 10/23–31）若 Red Sox 打进主场轮次，导览大概率停开、球场周边封锁——这一段无法提前确认，只能到日子前查官网。Harborwalk、Long Wharf、Christopher Columbus Park 为公共通道与市属公园，实务上 24 小时开放。Christopher Columbus Park 棚架蓝灯官方口径「from the end of November through the middle of April」，点灯在感恩节前的周一（2026 年 11 月 23 日），行程窗口内不亮。Citgo 招牌：2026 年 5 月 29 日起拆除重建，官方口径复亮时间「by mid-November」，行程窗口内不亮。

## P1（104 条）


### nyc / Salem

- `seven-gables` **1. The House of the Seven Gables**  
  开放时间：官方原文（7gables.org，站头横幅）：「Open daily 10 A.M.-6 P.M.」，秋季无每周固定闭馆日，周一至周日均开——10 月 13 日（周二）正常开放。Grounds Pass 的最晚入场时间随季节为 16:00／17:00／18:00 三档之一（官方措辞「last entry at close (4,5,or 6PM seasonally)」），十月究竟适用哪一档未能从官方渠道确认，按 17:00 最晚入场规划最安全。10:00 才开门这一点很关键：它错开了日出那个人少的窗口，所以想拍花园与室内就必须接受人多。十月另有多场夜间活动（Shadows of the Seven Gables 9/30–11/1、Haunted Fables 10/15–19 等），10/15 起有 Haunted Fables 夜场，当晚园区会有活动人流。电话 (978) 744-0991。
- `seven-gables` **1. The House of the Seven Gables**  
  门票：十月 Mansion Tour Package（含 Grounds Pass）：成人 $31、老年 65+／急救人员／教师／大学生 $26、儿童 5–12 岁 $21、无障碍票 $16、5 岁以下免费。Salem 居民、NARM 会员／博物馆同业、SNAP／WIC／EBT 持卡人、Massachusetts 公立院校学生免费（均需证件）。11 月至次年 9 月同一张票为成人 $26，十月是唯一涨价的月份。Grounds Pass 单卖，但官网价目表未列出其十月价格，未能从官方渠道核实。从 Turner Street 与 Derby Street 街面拍外观完全免费。
- `seven-gables` **1. The House of the Seven Gables**  
  预约：十月必须提前买定时票，官方原文「Advance tickets are REQUIRED」。10 月 1–15 日的票于 9 月 1 日对会员、9 月 4 日对公众开放购买；10 月 16–31 日的票于 9 月 16 日与 9 月 19 日开放。不退款、不可改期、迟到不得入场（官方原文：「We do not have the staff resources to accommodate requests for rescheduling」「All sales final」「we cannot accept late arrivals」），需提前 15 分钟到场签到。Mansion Tour 的发团频次按季节浮动，官网现场看余位。Grounds Pass 可在开放时段内任意时间入场，最晚入场时间为闭馆时刻。
- `salem-burying-point-mcintire` **2. Old Burying Point, Witch Trials Memorial & McIntire Historic District**  
  开放时间：Chestnut Street：公共街道，24 小时。Witch Trials Memorial：官方口径「open from dawn till dusk」，即黎明到黄昏（这三天约 06:26–18:34），并注明可能因维护临时关闭。Old Burying Point：Welcome Center 夏季表为每日 10:00–17:00、最晚入场 16:45；十月版本为首场 10:00 入场、17:00 关门。Thanksgiving、Christmas Eve、Christmas Day、New Year's Eve、New Year's Day 与联邦假日闭园，恶劣天气可能临时闭园。秋季无每周固定闭馆日——10 月 13 日（周二）三处均正常。有一处口径不一致要提醒：一份二手来源写墓园十月只开 12:00–15:45、时段为 10 分钟一档，而官方页面写首场 10:00、15 分钟一档、17:00 关门。以官方页面为准，但这处矛盾说明规则年年在改，出发当天务必刷一次官网。
- `salem-burying-point-mcintire` **2. Old Burying Point, Witch Trials Memorial & McIntire Historic District**  
  门票：三处全部免费（墓园的十月预约也免费）。墓园旁的 Charter Street Cemetery Welcome Center（历史建筑 Pickman House 内）亦免费。
- `salem-burying-point-mcintire` **2. Old Burying Point, Witch Trials Memorial & McIntire Historic District**  
  预约：Chestnut Street 与 McIntire 历史区：公共街道，不需预约、不需票。Salem Witch Trials Memorial：不需预约、不需票。Old Burying Point / Charter Street Cemetery：十月必须做当日线上预约（charterstreetcemetery.com，免费，只能当天预约、每 15 分钟一档、首场 10:00，2026 年的预约制度自 9 月 18 日起生效）。官方特别声明：任何向你收费让你进墓园的人都与 Salem 市政府无关。
- `salem-maritime-derby-wharf` **3. Salem Maritime NHS, Derby Wharf & Friendship of Salem**  
  开放时间：NPS 官方 2026 年 9 月 21 日至 11 月 14 日季节表原文（nps.gov/sama/planyourvisit/basicinfo.htm，2026 年 8 月 19 日更新）：「Derby Wharf and Park Grounds Around Historic Structures — Open 24/7」；Salem Armory Regional Visitor Center 与 Waite &amp; Peirce Park Store 每日 9:30–16:30；Custom House 与 Public Stores &amp; Scale House 周三至周日 9:30–16:30（后者视天气）；Narbonne House 周三至周日 13:00–16:00；Derby House 在这个季节标注为「Closed for the season」；Central Wharf 洗手间每日 9:30–16:30。→ 10 月 13 日（周二）所有室内不开，栈桥与园区照常 24 小时可进。全年只在 Thanksgiving、Christmas Day、New Year's Day 闭馆。
- `salem-maritime-derby-wharf` **3. Salem Maritime NHS, Derby Wharf & Friendship of Salem**  
  门票：免费（NPS 官方原文：「All buildings and programs are free」，且无入园费）

### nyc / Boston

- `harvard-yard` **1. Harvard University · Harvard Yard**  
  开放时间：Harvard Yard：6 道门 24 小时（Widener、Thayer、Wadsworth、Meyer、Sever、Solomon/Lamont），Johnston Gate 行人 24 小时，另 4 道（Boylston、Holworthy、Straus、Loeb）06:00–19:00。官方警告「Gate openings are subject to change」，且 Yard 会因校内活动临时整体关闭（例：一家注册导览商在 2026 年 9 月挂出「Harvard Yard is closed on September 1st, 3rd, and 4th」）。Harvard Art Museums 官方原文：「Open Tuesday-Sunday 10am-5pm」「closed on Mondays and major holidays」，每月最后一个周四延长至 21:00（Harvard Art Museums At Night，免费）。你的窗口内两条已公布的例外：10 月 12 日（周一）本来就闭馆；10 月 23 日（周五）官方列为「Closing at 4pm」，提前一小时关门。10 月 29 日是本窗口内唯一的 At Night 夜场。Visitor Center：周一至周五 09:00–17:00。Adolphus Busch Hall：仅周三 13:00–17:00、周六 10:00–14:00。
- `harvard-yard` **1. Harvard University · Harvard Yard**  
  门票：Harvard Yard 免费。Harvard Art Museums 官方原文：「Admission is free to all visitors every day」。Adolphus Busch Hall 也免费、不需票。Visitor Center 的纸质自助地图 $3。Widener Library 内部不对游客开放，任何票都进不去。
- `harvard-yard` **1. Harvard University · Harvard Yard**  
  预约：Harvard Yard 与 Harvard Art Museums 都不需预约、不需票。Art Museums 官方建议周末提前线上登记以缩短入场排队，但 walk-in 一直欢迎；到馆后请先到 Visitor Services 台报到。免费的 Historical Tour of Harvard由学生带领、走 Harvard Yard，需线上登记、每团限 10 人，经 Harvard University Visitor Center（周一至周五 09:00–17:00）安排；也有免费的 Visit Harvard 手机 app 自助导览。第三方 Trademark Tours 的公开团约 成人 $22、4–17 岁 $20，3 岁以下免费。
- `fenway-harborwalk` **2. Fenway Park Exterior & the Boston Harborwalk**  
  门票：外景全部免费。Fenway Park 公众导览（Public Tour，约 60 分钟）：成人 $30、儿童 3–12 岁 $21、军人 $21。Pregame Tour $55（仅主场比赛日、开赛前三小时）。「Fenway in Fifteen」$20，但官方限定 5 月至 9 月的比赛日与周末 12:00–15:00——也就是说十月来的人拿不到这一项。Christopher Columbus Park、Long Wharf、Harborwalk 全程免费。
- `fenway-harborwalk` **2. Fenway Park Exterior & the Boston Harborwalk**  
  预约：Harborwalk、Long Wharf、Christopher Columbus Park、Rowes Wharf、Jersey Street 与 Lansdowne Street 全部是公共空间，不需预约、不需票。Fenway Park 球场导览需在 mlb.com/redsox/ballpark/tours 提前购票，官方称最多可提前 30 天，赛季中与周末常售罄，务必提前订。主场比赛日的当天最后一班导览在开赛前三小时发车——推论：9 月 25 日（19:10 开赛）最后一班约 16:00，9 月 27 日（15:05 开赛）最后一班约 12:00。
- `mit-killian-court` **3. MIT · Killian Court & the Great Dome**  
  开放时间：校园室外空间：实务上 24 小时可进入（MIT 是开放校园，无围墙、无门禁）。MIT Chapel 官方原文：「open to members of the general public for visiting hours, Monday – Friday, 10:00AM to 11:00AM and 1:30PM to 2:30PM」，并明确「sometimes religious services are scheduled during these hours. If you arrive during a service the Chapel is not available for viewing and we ask that you return on another day」。→ 周末与工作日的其余时间只对持 MIT 卡者开放，游客进不去。这是本区最窄的时段窗口，请把它当成一个「有场次」的目标来排。CAC 管理的活动空间整体开放时段为周日至周四 07:00–23:00、周五至周六 07:00–01:00，但那是给办活动用的，不等于游客可进。Barker Engineering Library（穹顶下的圆形阅览室）是否对公众开放未能从官方渠道确认。
- `mit-killian-court` **3. MIT · Killian Court & the Great Dome**  
  门票：全部免费。Killian Court、Great Dome、Stata Center、MIT Chapel、Harvard Bridge 均无门票。Kresge Auditorium 的演出另行售票（价格视场次）。
- `mit-killian-court` **3. MIT · Killian Court & the Great Dome**  
  预约：Killian Court、Great Dome 外景、Stata Center 外景、Kresge 外景、Harvard Bridge 全部不需预约、不需票、无时段限制。MIT Chapel 的公众时段也不需预约，门在那两个时段是开的，直接走进去。Kresge Auditorium 室内不对公众开放——它由 Campus Activities Complex（CAC）管理，只在有场次时进人；想进去只能买一场演出的票，校方活动日历（calendar.mit.edu/building_w16）能查到公开场次（例：10 月 23 日 20:00 有 MIT Family Weekend Concert）。
- `charles-river-esplanade` **4. Charles River Esplanade & the Longfellow Bridge**  
  开放时间：河岸公园与两座桥的人行道实务上 24 小时开放（Esplanade 由 Massachusetts DCR 管理，无门无闸）。但真正约束你的不是开放时间而是天光：9 月 25 日日落 18:38、民用暮光结束 19:04；10 月 22 日日落 17:53、民用暮光结束 18:21。换句话说十月下旬六点半以后这里已经没有可用的天光了。Charlesbank ＋ Smith Family Pavilion 工地（Museum of Science 一侧）目标 2026 年 11 月 1 日开放，行程窗口内仍在施工。
- `charles-river-esplanade` **4. Charles River Esplanade & the Longfellow Bridge**  
  门票：免费。四个机位全部无门票。
- `acorn-street-beacon-hill` **5. Acorn Street & Beacon Hill**  
  开放时间：Acorn Street 与 Louisburg Square：24 小时（公共街道）。Boston Common：全年开放（Boston 市属公园，夜间不建议久留）。Massachusetts State House 官方原文：「Tours are given weekdays year-round from 10 a.m. to 3:30 p.m., free of charge. The building is open weekdays from 8:45 a.m. to 5 p.m., and closed on weekends and holidays.」→ 周末与法定假日室内完全不开；你的窗口内 10 月 12 日（Indigenous Peoples Day）是假日，室内不开。金顶外景不受任何时段限制。注意 State House 室内全员过安检，入口在 Beacon Street 的 General Hooker Entrance，无障碍入口在 Bowdoin Street 一侧有坡道。
- `acorn-street-beacon-hill` **5. Acorn Street & Beacon Hill**  
  门票：Acorn Street、Louisburg Square、Boston Common、State House 全部免费。State House 导览官方原文「free of charge」，含 House 与 Senate Chambers、「Sacred Cod」与州昆虫瓢虫的典故。Louisburg Square 中央绿地是私产，任何票都进不去。
- `public-garden-boston-common` **6. Boston Public Garden & Boston Common**  
  门票：Public Garden 与 Boston Common 全部免费。园内所有雕像、桥、湖、草坪均无收费项目。
- `public-garden-boston-common` **6. Boston Public Garden & Boston Common**  
  预约：不需预约、不需票。天鹅船 2026 季已于 9 月 7 日结束，本来也是现场买票、不接受预约（供明年参考：成人 $4.75、2–15 岁 $3.25、65 岁以上 $4.25、2 岁以下免费，单程约 12–15 分钟，接受现金与信用卡）。
- `back-bay-newbury` **7. Back Bay Brownstones & Newbury Street**  
  开放时间：24 小时。唯一有时段性的是 Newbury Street 的商业氛围：多数店铺约 10:00 或 11:00 开门、18:00 或 19:00 关门（各店不同，未逐一核实），餐厅与露天座位到更晚。拍空街要 08:00–09:30，拍有人味要 16:30 之后。注意 10 月 22 日日落 17:52——「黄金时段的露天座位」与「蓝调的橱窗」在十月下旬只隔二十分钟，两张可以连着拍。
- `back-bay-newbury` **7. Back Bay Brownstones & Newbury Street**  
  门票：完全免费。Newbury Street 上的店铺与餐厅另算，但拍摄本身不产生任何费用。
- `trinity-church-copley` **8. Trinity Church & Copley Square**  
  开放时间：官方原文（trinitychurchboston.org/tours）：「Trinity Church is open for tours Tuesday through Saturday from 10 am to 4:30 pm (Guests who purchase admission by 4:30 pm will have until 5 pm in the Sanctuary)」。→ 周日与周一不对游客开放，这是本条目最大的时段陷阱。夏季的周日时段（11:00–15:30）官方写明只到 9 月 6 日为止（「Through Sun. Sept. 6, Trinity Church will also be open for tours on Sundays」），你的窗口全部在这之后，所以周日一定进不去。另有两条已公布的临时调整（都在你的窗口之前）：9 月 10 日 12:00 才开、9 月 19 日 16:00 提前关。每周二 12:00–12:45 因 Tuesday Holy Eucharist 暂停入场与导览（30 分钟的午间礼拜，欢迎参加）。官方明确警告「As an active Episcopal parish, visitor services hours may vary due to weddings, funerals, worship services, and other parish events」，并说恶劣天气可能临时调整。主日礼拜时间（9 月 13 日起恢复学年制）：8:00、10:00（含直播）、17:00。
- `trinity-church-copley` **8. Trinity Church & Copley Square**  
  门票：官方原文：「The price is $10 for Adults, or $8 for Seniors, Students, Educators, Military, First Responders, and Massachusetts Residents. Children younger than 14 and EBT &amp; WIC cardholders are free.」门票含三种参观方式任选：自助（附地图，15–30 分钟）、音频导览（扫 QR 码或借设备，约 30 分钟）、docent 导览（45–60 分钟，限特定时段）。省钱的一招（已核实）：官方写明「From September through May, join us on Fridays at 12:15 pm for our weekly Organ Recitals. There is no charge for admission during the recital」——也就是说每周五 12:15 的管风琴音乐会期间进堂是免费的，建议捐 $10。你的窗口内每个周五都有。另有完全免费的 Free Exterior Audio Tour：West Porch 上有 QR 码，或访问 trinitychurchboston.org/feat，不受开放时间限制。Copley Square、喷泉、Phillips Brooks 像全部免费、24 小时。
- `trinity-church-copley` **8. Trinity Church & Copley Square**  
  预约：广场不需预约。教堂个人参观也不需预约，现场在 Narthex 的 Welcome Desk 买票即可（入口是朝 Copley Square 的 West Porch 主门）。Guided Tour 由 docent 带领、45–60 分钟、只在特定时段发车，场次见官网 web calendar。团体私人导览需填表申请，且周日与周一不提供。最新时段请电话确认：617-536-0944 转 102。
- `boston-public-library` **9. Boston Public Library · McKim Building**  
  开放时间：官方原文（bpl.org/locations/central，Central Library in Copley Square）：「Monday–Thursday 9:00 am – 8:00 pm / Friday 9:00 am – 5:00 pm / Saturday 9:00 am – 5:00 pm / Sunday 11:00 am – 5:00 pm」。→ 本区罕见的「每日开放、无每周闭馆日」的大馆。你的窗口内唯一的闭馆日是 10 月 12 日（Monday, October 12, 2026, Indigenous Peoples Day），官方 Holiday Closures 页写明「The Library will be closed.」。请特别注意周五与周六只到 17:00——而 10 月 22 日日落 17:52，所以「纯人工光的 Bates Hall」只有周一至周四（开到 20:00）能拍到。（另：9 月 6 日与 9 月 7 日因 Labor Day 闭馆，已过。）
- `boston-public-library` **9. Boston Public Library · McKim Building**  
  门票：免费。全馆所有公共区域（含 Bates Hall、内院、大楼梯、Abbey Room、Sargent Gallery）一律不收费。也有免费的馆方建筑导览，时段以现场公告为准。

### nyc / Hudson Valley

- `olana` **1. Olana State Historic Site, Hudson**  
  开放时间：庭园：每日 08:00 至日落，全年免费开放（官方原文「Park: Open Daily, 8AM – Sunset」）。Frederic Church Center 周二至周日 09:30–16:30。导览时段周二至周日 10:00–16:00，2026 导览季为 5 月 19 日–11 月 2 日，周一不开导览；历史宅邸 16:30 准时关闭。需注意 NYS Parks 页面另给出「grounds 08:30 至日落」的口径，与 Olana 官网的 08:00 略有出入，以官网为准
- `olana` **1. Olana State Historic Site, Hudson**  
  门票：250 英亩庭园免费。导览分项计价：Landscape Walk（Ridge Road and Viewshed 或 The Early Years）各 $12、The Artist’s House: Main Floor $20、特展 Frederic Church: Global Artist $15、Explore at Your Own Pace（仅周五至周日）$25、电瓶车导览 $40、两小时组合票 $45。16 岁及以下参加步行景观与宅邸导览免费；现役军人、退伍军人与急救人员凭证减 $5
- `kaaterskill-falls` **2. Kaaterskill Falls, Catskills**  
  开放时间：DEC 州立林地，无开闭园时间。实际限制来自天黑——峡谷内比空旷处早暗约 40 分钟，10 月下旬 17:00 后底部就已经很难看清落脚点
- `kaaterskill-falls` **2. Kaaterskill Falls, Catskills**  
  门票：完全免费，无入园费、无停车费（Mountain Top Historical Society 周末为建议捐赠 $20）
- `kaaterskill-falls` **2. Kaaterskill Falls, Catskills**  
  预约：不需预约、不需许可。DEC 顾问报告建议的定时入场与日客流上限 1,000 人目前仅为提案，尚未实施，但这是本区 2026 年内最可能变动的规则，出发前请查 dec.ny.gov/places/kaaterskill-wild-forest
- `minnewaska` **3. Minnewaska State Park Preserve, Shawangunks**  
  开放时间：每日 09:00 开园，闭园时间随季节变化。2026 年 9 月 8 日–10 月 12 日 09:00–19:00；10 月 13 日–10 月 31 日 09:00–18:00；11 月 1 日起 09:00–17:00（NYS Parks 官方时刻表）。10 月 12 日是本季最后一个能在园内看到日落的日子（当日日落 18:22）
- `minnewaska` **3. Minnewaska State Park Preserve, Shawangunks**  
  门票：$10 每车（15 座以下），Empire Pass 免费。大巴 $60（未提前预约 $150），周末与节假日不接受大巴。25 人以上团体须先致电 Lake Minnewaska Visitor Center（845-255-0752）
- `minnewaska` **3. Minnewaska State Park Preserve, Shawangunks**  
  预约：Minnewaska 主区不需预约。但同一保护区内的 Sam’s Point 区域，2026 年 4 月 18 日–11 月 15 日的周末与节假日必须提前在 ReserveAmerica.com 或 1-800-777-9644 预约车位，分 09:00–14:00 与 14:00 至闭园两个时段，最多提前 14 天，当天上午场截至 08:00、下午场截至 13:00；车位费 $10 加预约费 $0.95。车顶带自行车的车辆在预约时段不得进入 Sam’s Point
- `walkway-over-the-hudson` **4. Walkway Over the Hudson, Poughkeepsie**  
  开放时间：每日 07:00 开放，闭园时间按 NYS Parks 2026 年官方时刻表分段：9 月 14 日–10 月 4 日 07:00–19:00；10 月 5 日–10 月 18 日 07:00–18:30；10 月 19 日–10 月 31 日 07:00–18:00；11 月 1 日起 07:00–17:00。2026 年已公布的特殊时段：9 月 18 日提前至 16:00 关闭；9 月 20 日延后至 11:00 开放（Dutchess County Classic 马拉松）；10 月 11 日延后至 11:00 开放（BikeNY 活动）。园区办公室每日 07:30–16:00，电话 845-834-2867
- `walkway-over-the-hudson` **4. Walkway Over the Hudson, Poughkeepsie**  
  门票：走桥完全免费，全年 365 天开放。停车另计
- `dia-beacon` **5. Dia Beacon**  
  开放时间：周五至周一 10:00–17:00，2026 年该时段延续至 10 月 31 日；周二、周三、周四闭馆。最晚入场 16:30（官方原文「Please arrive before 4:30 pm for admission」）。另于感恩节、平安夜、圣诞节与元旦闭馆。官方注明「hours change seasonally」，且部分展厅可能因作品性质关闭或限制进入
- `dia-beacon` **5. Dia Beacon**  
  门票：成人 $25、65 岁以上 $18、学生 $12、残障访客 $12、5–11 岁儿童 $5；Dia 会员、5 岁以下、残障访客陪护、以及 Beacon 与 Newburgh 居民免费。Hudson Valley 十四县居民每月最后一个周日免费。退换票须提前 24 小时以上
- `storm-king` **6. Storm King Art Center, New Windsor**  
  开放时间：周三至周一 10:00–18:00，周二闭园，最晚入场 17:00。10 月的周六与周日提前至 09:00 开门。会员可于开放日 09:30 起入园。2026 季度：4 月 1 日开季、11 月 29 日季末闭园；感恩节闭园，Indigenous Peoples’ Day 与 Veterans Day 正常开放
- `storm-king` **6. Storm King Art Center, New Windsor**  
  门票：平日成人 $25、65 岁以上 $22、18 岁以上学生 $15、5–17 岁 $15、4 岁及以下免费。9 月 26 日–11 月 8 日 peak fall season 的周六周日上浮为成人 $28、senior $25、学生与青少年 $18。门票含园内停车。Orange County 21 岁以下学生凭证免费；SNAP/EBT、Whitney Museum 与 Aldrich 会员、AAM 与 ICOM 个人会员、博物馆从业者、残障访客陪护均可免费（须现场出示证件）
- `storm-king` **6. Storm King Art Center, New Windsor**  
  预约：官方原文：「Pre-purchased tickets are required to guarantee admission and parking. Onsite tickets may be limited or unavailable during for certain time slots.」即定时票不是绝对强制，但现场票在热门时段可能没有，秋季周末必须提前买。次月的票在当月 15 日放出（10 月票 9 月 15 日放）。会员全年免票、无需预约。12 人以上团体须至少提前三周申请
- `cold-spring-breakneck` **7. Cold Spring Village · Breakneck Ridge**  
  开放时间：公共空间无开闭时间限制，可拍到蓝调结束。店铺与餐厅通常 10:00/11:00 至 18:00/21:00
- `cold-spring-breakneck` **7. Cold Spring Village · Breakneck Ridge**  
  门票：村内街道、滨水公园与 Little Stony Point 全部免费
- `bear-mountain-perkins` **8. Bear Mountain State Park · Perkins Memorial Drive**  
  开放时间：公园本体：dawn to dusk，全年开放（NYS Parks 官方口径）。Perkins Memorial Drive 与 Perkins Memorial Tower：4 月 1 日–11 月 30 日，视天气开放（官方原文「April 1 - November 30, weather permitting」）。整个 9 月下旬至 10 月底的窗口都在季节内。但每日开关闸的具体钟点 NYS Parks 官网没有公布，未能从官方渠道确认：第三方资料给出「山顶塔楼 16:00 关闭」与「车道号称日出至日落但早晨开闸时间不可靠」两种说法。出发当天请致电 845-786-2701 核实
- `bear-mountain-perkins` **8. Bear Mountain State Park · Perkins Memorial Drive**  
  门票：Perkins Memorial Drive 与山顶停车免费；山下 Bear Mountain 主停车场 $10 每车
- `sleepy-hollow-tarrytown` **9. Sleepy Hollow Cemetery · Old Dutch Church · Lyndhurst**  
  开放时间：Sleepy Hollow Cemetery：周一至周五 08:00–16:30，周六周日 08:30–16:30，16:30 后不得入园。Lyndhurst：庭园 4 月至 12 月每日开放，官网 Plan Your Visit 页写 09:30–16:30、Daily Grounds Pass 页写 09:30–17:00 最晚入场 16:00、Hours 页写 09:00–17:00，三处口径不一致，建议出发前致电 914-631-4481 确认；宅邸导览 2026 年 Fall Classic Mansion Tour 为 9 月 24 日–11 月 1 日每日开放，10:00–16:00、每半点一场，11 月整月停止导览，平时周二与周三闭馆
- `sleepy-hollow-tarrytown` **9. Sleepy Hollow Cemetery · Old Dutch Church · Lyndhurst**  
  门票：Sleepy Hollow Cemetery 个人免费。Lyndhurst：Daily Grounds Pass 必买（官网 walking-and-recreation 页面写明「$10 per person fee for those visiting the grounds by vehicle」），宅邸导览另计——2026 年 Fall Classic Mansion Tour 官方标价区间为 $10–$29 加服务费，2025 年的分档为成人 $29、senior/AAA/军人/学生 $27、6–16 岁 $22、5 岁及以下 $10，2026 年逐档金额未能从官网确认；持宅邸票者不需另买 Grounds Pass。Blaze：基础定时票起价 $24，标准价成人 $32、senior $31、3–17 岁 $24，2 岁以下免费；含 VIP 体验的票起价 $39 与 $64；FLEX 起价 $129、FLEX PLUS 起价 $189（任意开放夜可入，售罄日也有效）。停车免费

### nyc / Midtown

- `top-of-the-rock` **1. Top of the Rock**  
  开放时间：官方：每日 08:00–24:00，末班电梯 23:10，全年 365 天开放。平安夜与跨年夜 22:00 关、末班电梯 21:10。这是本区四座观景台里营业最晚的一座（与 Summit 并列），比 Empire State Building 晚一小时
- `top-of-the-rock` **1. Top of the Rock**  
  门票：Timed Admission 成人 $42 起（第三方聚合站常报 $45，实为动态定价、周末与日落档浮到 $49–52）；儿童 $38 起、长者 $42 起、5 岁以下免费。Skip-the-line $82 起。Beam Combo $73 起。SKYLIFT + Admission $57 起，All-Inclusive $72 起，VIP Pass $185–207。RockMoMA 组合票 $63 起（含 MoMA）
- `st-patricks-cathedral` **2. St. Patrick's Cathedral**  
  开放时间：官方口径：每日 06:30–20:45，全年无休。但「开门」不等于「可以随便拍」：弥撒时段（周一至周五 07:00、07:30、08:00、12:00、13:00、17:30；周六 08:00、12:00、17:30；周日 07:00、08:00、09:00、10:15 大礼、12:00、13:00、16:00 西班牙语、17:30）中殿主通道不得站人拍照。有第三方来源称周日不提供参观导览（Sunday closed for tours），该说法未能在教堂官网确认，但周日八台弥撒几乎排满全天，纯摄影目的请避开周日
- `st-patricks-cathedral` **2. St. Patrick's Cathedral**  
  门票：免费（接受捐赠）。自助语音导览另收费
- `rockefeller-center-fifth-ave` **3. Rockefeller Center and Fifth Avenue**  
  开放时间：广场与步道为开放城市空间，实际上 24 小时可拍，夜间泛光照明整夜开启。冰场约 09:00–24:00（2026 季 10 月 10–11 日开放，具体开季日期官方尚未固定）。Atlas 所在的 630 Fifth Avenue 前庭为室外，同样全天可进；各楼大堂内部按办公楼时间，且不欢迎摄影
- `rockefeller-center-fifth-ave` **3. Rockefeller Center and Fifth Avenue**  
  门票：免费（广场、Channel Gardens、Prometheus、Atlas 全部免费）。滑冰含租鞋 $40–70/人
- `edge-hudson-yards` **4. Edge at Hudson Yards**  
  开放时间：官方主页在不同日期给出不同营业时间，需按你的日期查 edgenyc.com。常见口径为 10:00–22:00（周一至周四）、09:00–24:00（周五至周日），旺季（4–10 月）可延长到 08:00–24:00。唯一稳定的规则是「末班电梯为关门前 50 分钟」；City Climb 末班约 20:00。全年无休，不允许再入场。本窗口（9/25–10/22）的每日确切时间未能从官方页面逐日确认，请以订票确认函上的时间为准
- `edge-hudson-yards` **4. Edge at Hudson Yards**  
  门票：General Admission 成人 $42 起（另加 $2 手续费），Advance Saver $34 起（提前 14 天以上），Tri-State Resident（纽约/新泽西/康州邮编）$36 起，儿童 6–11 岁 $35 起、长者 62+ $39 起、6 岁以下免费。Flex Admission $63–73 起（不限时段到场），Priority Access $88 起，Champagne Experience 约 $65。City Climb $202（含 Edge 入场、数字照片与香槟）
- `bryant-park-tunnel-views` **5. Bryant Park and the Midtown Street Vistas**  
  开放时间：Bryant Park 官方为每日 07:00 至夜间（闭园时间随季节调整，通常 22:00–24:00 之间，本窗口的确切闭园时间未能从官方页面确认，请查 bryantpark.org 当日公告）。Tudor City 天桥、Pershing Square Plaza、Herald Square 均为公共街道，24 小时可用
- `bryant-park-tunnel-views` **5. Bryant Park and the Midtown Street Vistas**  
  门票：免费
- `nypl-schwarzman` **6. New York Public Library · Stephen A. Schwarzman Building**  
  开放时间：官方原文：「The Rose Main Reading Room is also open for a visiting hour from 10 to 11 AM, Monday through Saturday. Please note that the last visitor entry is at 10:50 AM.」也就是每天只有一小时、周日完全没有。全馆开放时间：周一 10:00–18:00；周二、周三 10:00–20:00；周四至周六 10:00–18:00；周日闭馆。另有官方规定：Rose Main Reading Room 的最后入场为闭馆前 30 分钟（研究用途者在开放时段内可全程使用，参观者只有 10:00–11:00 那一小时）。General Research Division 的时间与全馆一致，但会有临时调整，出发前请查 nypl.org
- `nypl-schwarzman` **6. New York Public Library · Stephen A. Schwarzman Building**  
  门票：免费（参观、阅览室时段与两种导览全部免费）
- `nypl-schwarzman` **6. New York Public Library · Stephen A. Schwarzman Building**  
  预约：Rose Main Reading Room 的 10:00–11:00 参观时段不需预约、不需导览，直接进。另有两种免费导览：Rose Main Reading Room 短导览（周一至周六 11:20、13:30、15:00，约 15 分钟，在三楼 McGraw Rotunda 集合）与全馆导览（周一至周六 11:00 与 14:00，约 1 小时，需订票，每周日放出下一周的票）
- `summit-one-vanderbilt` **7. SUMMIT One Vanderbilt**  
  开放时间：官网首页原文：08:00–24:00，最后入场 22:30，「Open All Week Long」。有第三方来源称周二闭馆（decks-nyc 等），该说法与官网直接矛盾，以官网的「全周开放」为准，但出发前仍请复核。官方建议的停留时长是 90 分钟至 2.5 小时，比另三座都长——这是装置体验而非单纯看景，请把它算进时间预算
- `summit-one-vanderbilt` **7. SUMMIT One Vanderbilt**  
  门票：SUMMIT Experience（普通票）平日成人 $43–44、周末 $49–50；儿童 6–12 岁平日 $37–38、周末 $43–44；5 岁以下免费。日落档加价 $10（部分来源报 $12–13），时段大致是当天日落前约 2.5 小时开始——这是四座里唯一有明文日落加价的一座，另三座是动态定价、日落档在实务上也贵 $5–10。SUMMIT Signature（含一杯鸡尾酒）$58 起，SUMMIT Ascent（含玻璃电梯）$68 起，Ultimate SUMMIT $75 起，导览团 $162 起，私人导览 $1,088（至多 6 人）。Edge + SUMMIT 组合票 $65 起
- `grand-central-terminal` **8. Grand Central Terminal**  
  开放时间：官方：每日 05:15–02:00。这是本区可拍时间最长的一处，早于任何观景台开门、晚于任何观景台关门。West Balcony 上的 Cipriani Dolci 每日 11:30–22:00（台阶与栏杆位是公共空间，不用消费也能站）
- `grand-central-terminal` **8. Grand Central Terminal**  
  门票：免费（只有搭乘 Metro-North 列车才需要车票）。三脚架许可：Grand Central Terminal Still Photography/Film Permit，非商业用途填表费 $250、商业用途 $450，均不可退，商业用途另可能被要求付 MTA 知识产权授权费
- `empire-state-building` **9. Empire State Building Observatory**  
  开放时间：官方逐段时间（本窗口）：9 月 18 日–10 月 4 日 10:00–23:00，入场门 22:00 关；10 月 5 日–8 日 10:00–22:00，入场门 21:00 关；10 月 9 日–31 日 09:00–23:00，入场门 22:00 关。全年 365 天开放，风雨无阻，冬季 86 层露天平台会装辐射式取暖器。请注意本季它是四座里关得最早的——Top of the Rock 与 Summit 都开到 24:00。官方另口径：最挤的是开门后两小时与日落后一小时，最松的是 12:00–14:00
- `empire-state-building` **9. Empire State Building Observatory**  
  门票：86 层：成人 $44 起、儿童 $38 起、长者 $42 起。86 + 102 层：成人 $79 起、儿童 $73 起、长者 $77 起。每笔交易另加 $5 手续费（官方原文「A $5 booking charge is added to each transaction」）。Sunrise Experience $135/人（仅周六）。官网直挂的 CityPASS 价：成人 $283 → $169、儿童 $275 → $129，含 ESB 的 AM/PM 双次入场（86 层白天 + 关门前 3 小时内的同夜再入）加另外 4 项
- `empire-state-building` **9. Empire State Building Observatory**  
  预约：必须网上预订定时票（esbnyc.com），官方原文「All visits require a timed reservation」。日落档最先售罄，建议提前 1–2 周。Sunrise Experience 仅周六、常在数周前售罄。Express Pass 可跳过展览与电梯队列，在结账时加购

### nyc / Downtown

- `high-line` **1. The High Line**  
  开放时间：官方原文：4 月 1 日–11 月 30 日 7:00–22:00；12 月 1 日–3 月 31 日 7:00–20:00。行程窗口整段落在 7:00–22:00 内。但官网 FAQ 同时挂着「The Interim Walkway at the Western Rail Yards is temporarily closed.」——30th–33rd St、11th–12th Ave 之间那三分之一英里自 2024 年 10 月起封闭改建，官网未给重开日期，请按封闭计划。Gansevoort St 到 34th St／12th Ave 的主线、The Spur 与 Moynihan Connector 均正常开放
- `high-line` **1. The High Line**  
  门票：免费
- `high-line` **1. The High Line**  
  预约：不需预约。免费的 docent 导览团需另行报名，官网口径为 9–10 月的周二、周三与周末
- `little-island` **2. Little Island & Hudson River Park Piers**  
  开放时间：官方原文：Little Island「opens at 6:00 am, 365 days a year unless weather conditions dictate otherwise」。分季时刻：3/8–5/24 为 6:00–23:00；5/25–9/7 为 6:00–24:00；9/8–10/31 为 6:00–23:00；11/1–12/31 为 6:00–21:00。恶劣天气会临时闭园，出发前查官网
- `little-island` **2. Little Island & Hudson River Park Piers**  
  门票：免费。Hudson River Park 的 Pier 57 屋顶、Gansevoort Peninsula 与 Pier 45 同样免费
- `whitney-museum` **3. Whitney Museum of American Art**  
  开放时间：官方原文：周一 10:30–18:00；周二闭馆；周三 10:30–18:00；周四 10:30–18:00；周五 10:30–22:00；周六 10:30–18:00；周日 10:30–18:00。周二闭馆已核实（官网 Plan your visit 页与 2026 年 6 月 2 日新闻稿口径一致）。注：2026 年 6 月 16 日–8 月 18 日曾临时改为每周七天开放，该临时安排在行程窗口内已结束
- `whitney-museum` **3. Whitney Museum of American Art**  
  门票：官方票价：成人 $30，65 岁以上与学生 $24，25 岁及以下免费。每周五 17:00–22:00 全馆对所有人免费，每月第二个周日全天免费。一层展厅、大堂、商店与 Frenchette Bakery 常年免票
- `washington-square-park` **4. Washington Square Park & Greenwich Village**  
  开放时间：每天 6:00 至次日 0:00（0:00–6:00 闭园，由 NYPD 与公园执法队每晚人工摆放铁马围栏封闭 11 个入口，包括拱门一侧那道 100 英尺宽的开口）。喷泉的水一般在 4 月至 10 月运行，10 月下旬有可能已停水，未能从官方渠道确认 2026 年的具体停水日期——如果冲着「喷泉喷水加拱门」去，请把这一点算进风险
- `washington-square-park` **4. Washington Square Park & Greenwich Village**  
  门票：免费
- `one-world-observatory` **5. One World Observatory**  
  开放时间：官方原文：Monday – Sunday 9:00 AM – 9:00 PM，全年 365 天开放（含公共假日）。末次入场约 20:00–20:10（闭馆前 45–60 分钟）。也就是说行程窗口内的日落（9/25 18:49、10/22 18:06）与蓝调都在营业时间内，闭馆前还剩 2–3 小时的纯夜景余量。特殊活动与假日可能调整，出发前查官方日历
- `one-world-observatory` **5. One World Observatory**  
  门票：官方页面不公布固定价格（动态定价，只写 "Prices are subject to additional fees"）。第三方汇总口径：General Admission $31 起（成人与 6–12 岁儿童 $31、65 岁以上 $35），Priority／Skip All Lines $59 起，All-Inclusive Flex $70 起，VIP 导览 $74 起，每笔交易另加 $3.50 手续费；6 岁以下免费但需在 Guest Services 领取免费票。另有第三方来源报出成人 $44–53，与上述口径矛盾，未能从官方渠道确认具体数字——请以下单页面当天显示为准。票为不可退（non-refundable）
- `nine-eleven-memorial` **6. National September 11 Memorial (Reflecting Pools)**  
  开放时间：广场官方原文：每天 8:00–20:00。博物馆：周三至周一以及部分周二，9:00–19:00，末次入场 17:30。注意官方写的是「and many Tuesdays」／「select Tuesdays」，即常规闭馆日是周二但部分周二仍开，具体日期只能在购票页面查当天——如果行程里只有周二能去博物馆，务必先查
- `nine-eleven-memorial` **6. National September 11 Memorial (Reflecting Pools)**  
  门票：广场免费。博物馆：成人（18–64）$36、13–17 岁 $30、7–12 岁 $24、6 岁及以下免费（仍需票）；导览团含门票 $48–60；Memorial + Museum 导览 $85；家庭套票 $106／$125。语音导览现场租借 $11（九种语言含 ASL），官方另有免费的 Bloomberg Connects 手机版
- `nine-eleven-memorial` **6. National September 11 Memorial (Reflecting Pools)**  
  预约：广场不需预约。博物馆必须提前买定时票（最多可提前 6 个月购）；周一免费票每周一 07:00 ET 放出、每人限 4 张。预约可在开始前 24 小时以上退改，免费换票一次
- `oculus-wtc-hub` **7. World Trade Center Transportation Hub (Oculus)**  
  开放时间：大厅作为交通设施基本全天开放，但港务局明确：「The Oculus street level access is limited overnight from 1:00 am to 5:00 am」——这段时间要走 Vesey Street 或 Fulton Street 经 2 WTC 北通道进出。Westfield 店铺（官方原文）：周一–周五 10:00–20:00，周六 10:00–19:00，周日 11:00–18:00。想拍空大厅就在 10:00 前到
- `oculus-wtc-hub` **7. World Trade Center Transportation Hub (Oculus)**  
  门票：免费。官方口径：进入 Oculus 大厅与各公共通道完全免费，只有购物、餐饮与乘 PATH／地铁才付费
- `brooklyn-bridge-manhattan` **8. Brooklyn Bridge (Manhattan-Side Promenade)**  
  门票：免费，24 小时开放（行人步道）
- `staten-island-ferry` **9. Staten Island Ferry**  
  门票：免费

### nyc / Brooklyn

- `gantry-plaza` **1. Gantry Plaza State Park · Pepsi-Cola Sign · Long Island City**  
  开放时间：Gantry Plaza State Park 每日 08:00–22:00（纽约州立公园系统，节假日或有活动时可能调整）。Hunters Point South Park 属 NYC Parks，按一般市属公园口径 06:00–01:00。22:00 闭园对本窗口没有影响——10 月下旬民用暮光 18:34 就结束，天文暮光 19:06 结束，你有充裕的三个多小时。Pepsi-Cola 招牌的霓虹是整夜亮的，不受闭园时间限制，从园外的 Center Boulevard 上仍可拍到（角度差一些）
- `gantry-plaza` **1. Gantry Plaza State Park · Pepsi-Cola Sign · Long Island City**  
  门票：免费
- `brooklyn-bridge-park` **2. Brooklyn Bridge Park · Pebble Beach · Granite Prospect · Jane’s Carousel**  
  开放时间：Brooklyn Bridge Park 每日 06:00–01:00（官方口径 365 天开放）。分区例外：Pier 2 为 08:00–23:00（季节性）、Pier 5 为 06:00–23:00、Pier 6 排球场 06:00–23:00、各儿童游乐场为日出至日落、洗手间 3–10 月 07:00–23:00、11–3 月 07:00–22:00。Jane’s Carousel 秋季时刻表（2026 年 9 月 14 日至 12 月 31 日）：周一、周二闭馆，周三至周日 11:00–17:50——这个 17:50 早于本窗口每一天的日落，意味着蓝调时段木马一定是停着的（玻璃亭仍发光）
- `brooklyn-bridge-park` **2. Brooklyn Bridge Park · Pebble Beach · Granite Prospect · Jane’s Carousel**  
  门票：公园免费。Jane’s Carousel 单次 $4；一名 42 英寸以下儿童可与一名成人共用一张票，额外的 42 英寸以下儿童每人 $4；接受 SNAP／EBT 折扣。木马是 501(c)(3) 非营利机构运营
- `dumbo-washington-street` **3. Washington Street, DUMBO · Manhattan Bridge Framing**  
  开放时间：24 小时可拍。但实际可用窗口由人流决定，不由时间决定：日出前到 07:00 街上通常只有个位数的人、经常完全空无一人；09:00 之后属「极度拥挤」；10:00–18:00 全天高峰，周末尤甚，同一帧会有一条明显的排队队列，周末可以排一小时。周一至周四的清晨与周末清晨也有明显差别，周末即使在日出时也已经有人
- `dumbo-washington-street` **3. Washington Street, DUMBO · Manhattan Bridge Framing**  
  门票：免费——这是一条公共街道，没有门禁也没有营业时间
- `brooklyn-heights-promenade` **4. Brooklyn Heights Promenade (The Esplanade)**  
  开放时间：24 小时开放，全年无休。它法律上不是公园（产权属 NYC DOT），因此不适用市属公园的 06:00–01:00 关门规定。2026 年秋季无任何封闭——BQE Central 大修 2030 年才破土。相邻的 Pierrepont Playground 等游乐场按 NYC Parks 规则「日出至日落」
- `brooklyn-heights-promenade` **4. Brooklyn Heights Promenade (The Esplanade)**  
  门票：免费
- `prospect-park` **5. Prospect Park · Long Meadow · Boathouse on the Lullwater · Grand Army Plaza**  
  开放时间：每日 05:00–01:00，全年开放（NYC 311 官方口径）。这是本区秋色三点里唯一覆盖日出、日落与蓝调的开放时间——Brooklyn Botanic Garden 18:00 关、Green-Wood 入夜前锁门，只有这里不受限制。2018 年 1 月 2 日起全园永久禁止机动车通行
- `prospect-park` **5. Prospect Park · Long Meadow · Boathouse on the Lullwater · Grand Army Plaza**  
  门票：免费（Boathouse 内的 Audubon Center 与旋转木马另有各自的开放时间与票价）
- `brooklyn-botanic-garden` **6. Brooklyn Botanic Garden · Japanese Hill-and-Pond Garden**  
  开放时间：9 月：周二至周四 10:00–19:00；周五至周日 10:00–18:00；周一闭馆。10 月：周二至周日 10:00–18:00；周一闭馆，但 10 月 12 日（Indigenous Peoples’ Day）例外开放 10:00–18:00。末次入园为闭园前 30 分钟；专类园（含 Japanese Hill-and-Pond Garden 与温室）在闭园前 30 分钟开始清园。10 月 24 日（周六）为 Fall Harvest Festival，需专门票，当天不售普通门票。会员另有 Fall Mornings 提前入园：周六日 09:00–10:00（9 月 12 日起）
- `brooklyn-botanic-garden` **6. Brooklyn Botanic Garden · Japanese Hill-and-Pond Garden**  
  门票：成人现场 $22／线上 $23.67（含 $1.67 手续费）；65 岁以上与 12 岁以上持证学生现场 $16／线上 $17.47；12 岁以下免费（14 岁以下须 18 岁以上成人陪同）。另有 Museum &amp; Garden 联票（含隔壁 Brooklyn Museum 当日入场）：成人现场 $34／线上 $36.06，65+ 与 20 岁以上学生 $24，12–19 岁学生 $16——注意 Brooklyn Museum 周二闭馆，联票须同日使用。每日另有一定数量免费的 Community tickets
- `green-wood` **7. The Green-Wood Cemetery · Gothic Gates · Battle Hill**  
  开放时间：官网现行公布的是 2026 年 4 月 1 日至 9 月 30 日的时刻表：主门（Fifth Avenue &amp; 25th Street）每天 07:00–19:00，车辆与行人皆可；Sunset Park 门（Fourth Avenue &amp; 35th Street）行人 08:00–19:00、车辆 08:00–16:00；Fort Hamilton Parkway 门与 Prospect Park West 门行人周一至周五 11:00–19:00、周六日 08:00–19:00，车辆仅周六日 08:00–16:00。10 月 1 日起的 2026 年秋冬时刻表官网尚未公布——未能从官方渠道确认。近年惯例是十月初至十一月初改为 08:00–18:00、之后 08:00–17:00。这件事直接决定你能不能拍到日落：9/25–9/30 期间 19:00 关园、当日日落 18:48–18:40，是本窗口内唯一能在园内拍到完整昏金光的时段；若十月照 18:00 执行，10/17（日落 18:13）与 10/22（日落 18:06）都在闭园之后，十月来就拍不到日落。园方特别提醒请在闭园时间前至少 10 分钟离场，闸门准点上锁（被锁在里面请打安保 347-865-4816）。园内的 Green-House 游客中心 4/18–9/30 周四至周一 10:00–19:00、周二周三闭，联邦假日闭馆（含 Labor Day 与 10 月 12 日 Indigenous Peoples’ Day）
- `green-wood` **7. The Green-Wood Cemetery · Gothic Gates · Battle Hill**  
  门票：免费。官方原文：「We’re open 365 days a year, at no charge.」园内停车也完全免费
- `coney-island` **8. Coney Island · Riegelmann Boardwalk · Deno’s Wonder Wheel · Cyclone · Parachute Jump**  
  开放时间：木栈道、沙滩与 Parachute Jump 的夜间照明不受游乐场日历限制。Deno’s Wonder Wheel Park 2026 年营业日（官网逐日日历，本窗口内）：9/26–10/1 连续六天、10/3、10/4、10/10、10/11、10/12、10/17、10/18、10/24、10/25；其余日期闭园（含 9/25 与 10/2 两个周五）。开门：儿童区 11:00、Wonder Wheel 等成人机械 12:00。闭园钟点随天气浮动，2026 年 10 月的具体时间官网未公布——未能从官方渠道确认；2025 年 10 月的官方口径是 18:00 关，若照此执行则十月中下旬拍不到蓝调亮灯轮。当天打 (718) 372-2592 确认。Luna Park 的 Halloween Harvest 期间为 9/18–11/1，9 月口径为周五 16:00–22:00、周六 11:00–22:00、周日 11:00–20:00、节假周中 12:00–20:00；10 月 2 日以后的逐日钟点官网日历尚未展开——未能确认
- `coney-island` **8. Coney Island · Riegelmann Boardwalk · Deno’s Wonder Wheel · Cyclone · Parachute Jump**  
  门票：两家游乐场都是免票入园（Admission is FREE at all times），设施按次单独计费。Deno’s：Wonder Wheel 单次 $10、Phoenix $10、Thunderbolt（音乐旋转）$10、Spook-A-Rama $8、碰碰车 $8、Stop the Zombies $8、多数儿童设施 $5；也可买点数包（$50/60 点、$90/125 点、$125/175 点），现金与信用卡皆可。Luna Park 另售当日无限次 Wristband，整季通票的有效期写到 2026 年 11 月 1 日，Halloween Harvest 的活动权益需搭配 Wristband

## P2（36 条）


### nyc / Salem

- `salem-maritime-derby-wharf` **3. Salem Maritime NHS, Derby Wharf & Friendship of Salem**  
  预约：不需预约、不需票。Ranger 带队的免费导览需当日到 Salem Armory Visitor Center 现场领位，每团上限 8 人。登船参观免费、不需预约，甲板有容量限制。

### nyc / Boston

- `charles-river-esplanade` **4. Charles River Esplanade & the Longfellow Bridge**  
  预约：不需预约。Charles River Esplanade、Cambridge 岸的 Memorial Drive 河滨路径、Longfellow Bridge 与 Harvard Bridge 的人行道全部是公共空间，直接走进去即可，没有任何票务或登记环节。
- `acorn-street-beacon-hill` **5. Acorn Street & Beacon Hill**  
  预约：Acorn Street、Louisburg Square、Boston Common 全部是公共空间，不需预约、不需票。State House 室内自助参观不需预约；免费的 40 分钟导览需要提前电话预约——官方口径「We can only accept tour reservations by phone」，电话 617-727-3676，1–50 人皆可，10 人以上须提前至少三周。
- `public-garden-boston-common` **6. Boston Public Garden & Boston Common**  
  开放时间：两座公园都是 Boston Parks and Recreation Department 管理的市属公园，全年开放，没有围栏关门的机制，实务上 24 小时可进入。但夜间不建议久留（尤其 Boston Common 靠 Tremont Street 一侧）。官方明确规定：Public Garden 内禁止喂任何鸟类（原文「The Boston Parks and Recreation Department restricts the feeding of all birds in the Boston Public Garden to maintain the health of the wildlife and the cleanliness of the Public Garden lagoon」）。湖面在天鹅船收季后是否会放水检修，未能从官方渠道确认——往年一般在入冬前才放，但如果你极度依赖倒影这张，建议出发前打 Boston Parks 或 617-522-1966 问一句。
- `back-bay-newbury` **7. Back Bay Brownstones & Newbury Street**  
  预约：全部是公共街道，不需预约、不需票、无任何开放时间限制。Comm Ave Mall 是公共步道，Marlborough 与 Beacon 是公共街道（沿街建筑为私宅，不入内）。
- `boston-public-library` **9. Boston Public Library · McKim Building**  
  预约：不需预约、不需票、不需登记，直接走进去。但如果你打算做「正式拍摄」（带助手、换装、打灯、婚纱或订婚照），必须事先申请：官方原文「Unfortunately we cannot allow formal photography shoots during library hours」，只能安排在开馆前的工作日早晨（约 08:00–09:00），联系 Special Events Office：events@bpl.org / 617.859.2212。二手来源称许可费 $750 起，未在 bpl.org 上找到公布价格。

### nyc / Hudson Valley

- `olana` **1. Olana State Historic Site, Hudson**  
  预约：庭园不需预约。历史宅邸导览「strongly recommended」提前预约，官方明确说明 tours sell out quickly，10 月周末实际等同于必须预约。tickets.olana.org 在线购买，或致电 518-751-0344。10 人以上团体与任何第三方带团一律必须提前预约
- `walkway-over-the-hudson` **4. Walkway Over the Hudson, Poughkeepsie**  
  预约：不需预约
- `dia-beacon` **5. Dia Beacon**  
  预约：官方口径「Advance reservations are suggested, but not required」，即建议但非必须。次月的票在当月 15 日放出。10 人以上团体须另行预约（grouptours@diaart.org）
- `cold-spring-breakneck` **7. Cold Spring Village · Breakneck Ridge**  
  预约：不需预约
- `bear-mountain-perkins` **8. Bear Mountain State Park · Perkins Memorial Drive**  
  预约：不需预约
- `sleepy-hollow-tarrytown` **9. Sleepy Hollow Cemetery · Old Dutch Church · Lyndhurst**  
  预约：Sleepy Hollow Cemetery 个人参观不需预约（但所有团体必须由墓园工作人员陪同，未经许可的团体会被立即请离）。Lyndhurst 的宅邸导览必须提前在线购票，官方口径「Advance ticket purchase is strongly recommended; tours do sell out」；进庭园也需要 Daily Grounds Pass。Great Jack O’Lantern Blaze 全部为定时票、只在线预售、现场不售票，售罄日期只能靠 FLEX 票入场

### nyc / Midtown

- `top-of-the-rock` **1. Top of the Rock**  
  预约：必须网上预订定时票（rockefellercenter.com 或 topoftherocknyc.com），门票当日全天有效——订日落前 60 分钟的档，可以一票拍完金光、日落、蓝调三段。日落档是全天最先售罄的，平日建议提前 1–2 周、周末与假日提前 2–4 周。SKYLIFT 无法单独预订，只能现场加购 $35 或买含 SKYLIFT 的票种
- `st-patricks-cathedral` **2. St. Patrick's Cathedral**  
  预约：不需预约，直接进。官方自助语音导览另行售票（约 1 小时，现场取机）；10 人以上团体导览需提前电话预约
- `rockefeller-center-fifth-ave` **3. Rockefeller Center and Fifth Avenue**  
  预约：不需预约（广场、步道、雕塑全为开放空间）。滑冰需另行网上预约时段票，12 月起必须提前订，10 月现场买通常有位
- `edge-hudson-yards` **4. Edge at Hudson Yards**  
  预约：必须网上预订定时票（edgenyc.com）。Advance Saver 提前至少 14 天订 $34 起，最多省 35%——这是官方自己给的最低价，摄影行程日期确定后第一时间订这个。日落与周末档最先售罄，建议提前 2–3 周。City Climb 每天仅 5 个时段、需单独预订，出发前一天 23:59 前可全额退
- `bryant-park-tunnel-views` **5. Bryant Park and the Midtown Street Vistas**  
  预约：不需预约，四个机位全部是公共街道与公园
- `summit-one-vanderbilt` **7. SUMMIT One Vanderbilt**  
  预约：必须网上预订定时票（summitov.com）。票是定时的，迟到超过 20 分钟可能被拒入；改期需付改期费（$25 起）加补时段差价。日落档与周末档最先售罄，建议提前 1–2 周、日落档提前 2–3 周
- `grand-central-terminal` **8. Grand Central Terminal**  
  预约：不需预约（车站为公共空间，进出、Main Concourse、下层用餐区与 Whispering Gallery 全部免费）。但用三脚架必须提前申请许可，见下

### nyc / Downtown

- `little-island` **2. Little Island & Hudson River Park Piers**  
  预约：不需预约（已在官网 Rules & FAQ 逐条核实，无 timed entry 条款）。仅 The Amph 的付费演出需要票（座票 $25、站栏 $15，经官网或 TodayTix），行程窗口内基本无演出
- `whitney-museum` **3. Whitney Museum of American Art**  
  预约：免费时段也需要票。官方原文：「though admission is free, tickets are required and capacity is limited」。Free Friday Nights 的免费票提前 5 周放出（「free tickets are available up to five weeks in advance」），线上先领；现场也发但容量有限。平日票可现场买或线上买
- `washington-square-park` **4. Washington Square Park & Greenwich Village**  
  预约：不需预约
- `one-world-observatory` **5. One World Observatory**  
  预约：强烈建议线上预购定时票。普通票绑定日期与 15 分钟到达时段；All-Inclusive Flex 票不绑时段、当天任意时间进——这一点对追日落的人有实际价值，因为日落时段的普通票经常先售空。Combination／Priority 票另含安检、电梯与出口的优先通道
- `oculus-wtc-hub` **7. World Trade Center Transportation Hub (Oculus)**  
  预约：不需预约。但带三脚架需提前申请许可，见 notes
- `brooklyn-bridge-manhattan` **8. Brooklyn Bridge (Manhattan-Side Promenade)**  
  开放时间：无固定开放时间。步道全天候可走，但夜间照明不足，凌晨与深夜的自动对焦会很困难，请开峰值对焦或手动预对焦到无限远
- `brooklyn-bridge-manhattan` **8. Brooklyn Bridge (Manhattan-Side Promenade)**  
  预约：不需预约
- `staten-island-ferry` **9. Staten Island Ferry**  
  开放时间：24 小时、365 天。NYC DOT 官方时刻表：平日高峰约每 15–20 分钟一班，平峰每 30 分钟，深夜 30–60 分钟；周末全天每 30 分钟（整点与半点）。主要联邦假日按周末时刻表。官方把「晚于表定时刻 6 分钟以上」定义为延误，可向站务索取延误证明
- `staten-island-ferry` **9. Staten Island Ferry**  
  预约：不需预约、不需票、不需刷卡，直接走上船。码头附近有人向游客推销「渡轮票」，那是骗局——渡轮不卖票。

### nyc / Brooklyn

- `gantry-plaza` **1. Gantry Plaza State Park · Pepsi-Cola Sign · Long Island City**  
  预约：不需预约
- `brooklyn-bridge-park` **2. Brooklyn Bridge Park · Pebble Beach · Granite Prospect · Jane’s Carousel**  
  预约：不需预约。Jane’s Carousel 也不需预约，现场买票即可
- `dumbo-washington-street` **3. Washington Street, DUMBO · Manhattan Bridge Framing**  
  预约：不需预约
- `brooklyn-heights-promenade` **4. Brooklyn Heights Promenade (The Esplanade)**  
  预约：不需预约
- `prospect-park` **5. Prospect Park · Long Meadow · Boathouse on the Lullwater · Grand Army Plaza**  
  预约：不需预约
- `brooklyn-botanic-garden` **6. Brooklyn Botanic Garden · Japanese Hill-and-Pond Garden**  
  预约：建议线上预购但非强制。官方口径：advance tickets are recommended，门票提前 30 天开售；现场各入口售票亭也有当日票，但取决于余量。所有访客（含会员与儿童）都必须持票进场，会员凭会员证与免费票入场。票不可退，但可提前换日期
- `green-wood` **7. The Green-Wood Cemetery · Gothic Gates · Battle Hill**  
  预约：不需预约
- `coney-island` **8. Coney Island · Riegelmann Boardwalk · Deno’s Wonder Wheel · Cyclone · Parachute Jump**  
  预约：不需预约
