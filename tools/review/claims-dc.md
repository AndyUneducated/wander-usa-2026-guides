# 数据准确性复核清单

每条都需要对着官方来源核对。改动请回写到 `<region>/parts/*.js`（socal 直接改 `socal/data.js`），然后重新跑 `tools/assemble.py`。

| 优先级 | 条数 | 含义 |
| --- | --- | --- |
| P0 | 1 | 声明不可抵达或已关闭，判错代价最大 |
| P1 | 108 | 含具体时刻/日期/价格，最易过期 |
| P2 | 36 | 预约与门票要求 |
| P3 | 0 | 停车与步行等 |


## P0（1 条）


### dc / 博物馆群

- `dc-castle` **8. Smithsonian Castle and the Enid A. Haupt Garden**  
  ★不可抵达判定（需二次确认真的去不了）：城堡 9 月 7 日后重新关闭至 2027 年以后，本次进不去；但 Haupt 花园与红砂岩外立面仍可自由拍摄。

## P1（108 条）


### dc / Philly Old City

- `reading-terminal-market` **1. Reading Terminal Market**  
  开放时间：官方原文（readingterminalmarket.org）：「Open Daily, 8AM - 6PM」，并注明「individual merchant store hours may vary」。秋季无每周闭馆日，全年只闭 Thanksgiving、Christmas Day、New Year's Day。实际注意两点：① 许多熟食摊会在闭市前 30–60 分钟收摊；② Pennsylvania Dutch 摊位周日肯定不开，保险起见按周三至周六安排（营业日的确切范围未能从官方渠道确认，可致电 215-922-2317）。
- `reading-terminal-market` **1. Reading Terminal Market**  
  门票：入场完全免费（吃东西另算；部分摊位尤其 Pennsylvania Dutch 摊位只收现金，建议带 $40–60 现钞）
- `elfreths-alley` **2. Elfreth's Alley**  
  开放时间：街道 24 小时开放（公共街道）。博物馆已核实为 2026 年正常开放，但只有周五、周六、周日 12:00–16:00（官网原文「Museum hours are Fridays, Saturdays, and Sundays from 12pm - 4pm」）。整个季节只运营到 11 月中旬（官网：April 到 mid-November）。→ 9 月末到 10 月末的任何日期都在季内，但周一至周四来只能拍街道、进不了房子。电话 (267) 457-4159。
- `elfreths-alley` **2. Elfreth's Alley**  
  门票：街道免费。博物馆入场 成人 $3、7–12 岁 $2、7 岁以下免费；导览团（含博物馆入场）成人 $10、7–12 岁 $5；另有 $3 的手机音频导览（elfrethsalley.org/audiotour），随时可买、不受开馆时间限制。
- `elfreths-alley` **2. Elfreth's Alley**  
  预约：街道不需预约。博物馆不接受网络订票，只能现场买（收现金、信用卡与 Apple Pay）。导览团周六日 14:30 一场，40 分钟，走完全巷含 Bladen's Court 并含两栋博物馆房。
- `philadelphia-city-hall` **3. Philadelphia City Hall**  
  开放时间：塔顶观景台官方原文：「Monday - Friday 10:00 a.m. - 2:45 p.m.」，周末与市政假日不开。City Hall Visitor Center（Room 121，东门）：周一至周五 10:00–16:00。建筑本身作为办公楼大致周一至周五 07:00–18:00（该时段来自二手来源，未能从官方渠道确认）。Dilworth Park：每日 06:00–01:00；跳泉 4 月至 10 月运营、2026 年公告为每日开放至 10 月 18 日，时段 7:45–22:00；溜冰场 11 月中旬至 2 月下旬。外景与 Broad Street、Parkway 的机位 24 小时可用。洗手间在 City Hall 楼内，时间不定。
- `philadelphia-city-hall` **3. Philadelphia City Hall**  
  门票：外景、内院与 Dilworth Park 完全免费。塔顶票价未能从官方渠道确认——phlvisitorcenter.com 的塔票页面把价格放在 JavaScript 购物车模块里，静态页面读不到。二手来源口径：Philadelphia Inquirer（2025）称塔票 $10–$16（按年龄与军人身份），另有访客帖称成人 $16、老年与军人 $13、青少年与学生 $10、3 岁以下免费。请按 成人约 $16 预算并现场核实。
- `philadelphia-city-hall` **3. Philadelphia City Hall**  
  预约：外景与内院不需预约。塔顶观景台需定时票，可在 phlvisitorcenter.com/CityHallTowerTour 线上预购（线上另加约 $2 服务费），或到 City Hall Visitor Center（东门 Room 121）现场买；现场为先到先得，因电梯只能载 4 人，旺季可能当天售完。另有约 1 小时的 City Hall Building Tour（周一至周五 10:00、12:00、14:00 三场，约 $20–26，含内部与外部）。天气取消可改期（给 credit，不退款），联系 cityhall@phlvisitorcenter.com 或 267-514-4757。
- `christ-church` **4. Christ Church & Christ Church Burial Ground**  
  开放时间：教堂（christchurchphila.org/visit）：每日 11:00–17:00，周日例外为 9:45–11:00 与 11:30–17:00 两段（10:00 礼拜期间不对游客开放）。墓园：3 月至 11 月每日 11:00–17:00；12 月缩短为 11:00–16:00 且视天气；1 月与 2 月整月闭园，另在 Easter Sunday、Thanksgiving、Christmas Day 闭园。→ 9 月末至 10 月末全部在正常季内、每日开放、无每周闭馆日。两处都要到 11:00 才开门，这是本区最晚开门的景点，把它排在上午 11:00 之后。
- `christ-church` **4. Christ Church & Christ Church Burial Ground**  
  门票：教堂：自助 成人 $5 / 5–12 岁 $2；导览 成人 $10 / 儿童 $5。墓园：自助 成人 $5 / 5–12 岁 $2；导览 成人 $10 / 儿童 $5。合票（教堂＋墓园，自助）成人 $8 / 5–12 岁 $3，只在现场售卖。园区地图 $1。5 岁以下免费。Franklin 墓在 5th & Arch 街角隔栅栏看与拍完全免费。
- `liberty-bell-center` **5. Liberty Bell Center**  
  开放时间：官方原文（nps.gov/inde/planyourvisit/libertybellcenter.htm）：「Open daily 9 am–5 pm」，秋季无每周闭馆日，全年只闭 Thanksgiving、Christmas Day、New Year's Day。安检截止时间三个官方页面口径不一：NPS 主页写「闭馆前至少 5 分钟」、NPS 的 Things To Do 页写「10 分钟」、Philadelphia Visitor Center 写「16:45」。按 16:45 规划最安全。有第三方来源提到夏季延长到 19:00，秋季不适用。
- `liberty-bell-center` **5. Liberty Bell Center**  
  门票：免费
- `independence-hall` **6. Independence Hall**  
  开放时间：官方原文（nps.gov/inde/planyourvisit/hours.htm，2026 年 8 月 17 日更新）：「9 am–9:50 am: Open house (no tickets required) / 10 am–4 pm: Tours every 20 minutes (tickets required) / 4:20 pm: Expanded tour (tickets required and not wheelchair accessible)」。安检 8:45 开门，闭馆前至少 15 分钟停止安检，团满亦可能提前停。秋季无每周固定闭馆日；全年只在 Thanksgiving、Christmas Day、New Year's Day 闭园。16:20 那场是加长团、可上二楼，但无障碍不可达。安检区内没有洗手间。
- `independence-hall` **6. Independence Hall**  
  门票：门票本身免费，但需票时收 $1.00／张的手续费，Interagency Pass（美国国家公园年票）不覆盖这笔费用。外景与 Independence Square 完全免费。
- `independence-hall` **6. Independence Hall**  
  预约：9:00–9:50 的 open house 不需预约、不需票；10:00 之后的每场导览必须持定时票。票在 recreation.gov 或电话 1-877-444-6777（10:00–24:00）预订，每账号最多 10 张。放票分两批：① 提前批按 30 天滚动窗口放（官方举例：9 月 1 日的票在 8 月 3 日放）；② 次日批在前一天 17:00 放，先到先得，未订完的票会一直挂到开团时间。没抢到票怎么办：直接去赶 9:00 open house，这是官方制度而不是漏洞；或者当天 17:00 盯次日批；或者反复刷 recreation.gov 捡退单（但票一经预订不退不改）。持票者须提前 30 分钟到安检口，迟到不保证入场。
- `museum-american-revolution` **7. Museum of the American Revolution**  
  开放时间：官方原文：「Museum Hours: Daily, 9:30 a.m.–5 p.m.」，秋季无每周闭馆日，只闭 Thanksgiving、Christmas Day、New Year's Day（另 2026 年 9 月 8 日曾闭馆一天，已过）。最后一个入场时段 15:30。Cross Keys Café：周日与周一 11:00–15:00，周二至周六 11:00–16:00。口径不一致：官网的 Plan Your Visit 页仍写着「9:30 a.m.–6 p.m. starting June 13, 2026」，而 Hours & Admission 页与 Tips 页都写 9:30–17:00。以 17:00 为准最保险，但这处矛盾未能从官方渠道澄清。
- `museum-american-revolution` **7. Museum of the American Revolution**  
  门票：官方价目（amrevmuseum.org/at-the-museum/visit/visit-hours）：成人 现场 $27 / 线上 $25；65 岁以上、学生、教师、军人（均需证件）$21；6–17 岁 $14；5 岁及以下、会员免费；ACCESS 卡与 SNAP 受益人现场免费。线上另有「两成人加两青少年 $64」的家庭套票。出示 SEPTA Key 卡减 $2；出示 African American Museum in Philadelphia 的票根减 $4。Washington's War Tent 剧场含在普通门票内，不另收费。

### dc / Philly Parkway

- `eastern-state-penitentiary` **1. Eastern State Penitentiary**  
  开放时间：官网 Seasonal & Holiday Schedule 原文：March – November: Open Daily, 10:00 a.m. to 5:00 p.m.（1–2 月与 12 月上半月才有周二闭馆）。末次入场为闭馆前 1 小时。九月下旬至十月底没有任何闭馆日，最近的闭馆日是 11 月 26 日感恩节。Halloween Nights 为 10 月 2 日–11 月 7 日部分夜晚的独立售票活动，不影响白天开放
- `eastern-state-penitentiary` **1. Eastern State Penitentiary**  
  门票：线上：成人 $21，长者 $19，大学生与 7–17 岁 $17；现场窗口各贵 $2（$23/$21/$19）。一张票含音频导览、Mini Tours、全部展览与艺术装置。SEPTA Key 卡成人票线上再减 $2。不建议 7 岁以下儿童入场。另需单独购买 $10/人/日的「photography equipment pass」才能使用三脚架/独脚架/画架，这张证只能在现场售票窗口买，线上买不到
- `eastern-state-penitentiary` **1. Eastern State Penitentiary**  
  预约：强烈建议线上预约（easternstate.org/tickets）。两种白天票二选一：Self-Guided Audio Tour（自由进出，主线 10 站约 40 分钟）或 Guide-Led Tour & Discussion（45 分钟讲解，票为日期＋时刻锁定）。2026 年 9 月 8 日起导览团大幅缩减：工作日只剩 12:00 一场，周六日 11:00 一场（9 月 7 日之前是每天 10:30/11:30/12:30 三场）。导览团准点出发，迟到不补。白天票可在 24 小时前免费改期或退票（发信 support@easternstate.org）
- `boathouse-row` **2. Boathouse Row**  
  开放时间：河岸与步道 24 小时开放。灯光每晚自动在日落亮起、日出关闭（Fairmount Park Conservancy 与 Philadelphia Parks & Recreation 2024 年新闻稿原文：「Each night the lights are automatically scheduled to go on at sunset and off at sunrise」）。另有第三方来源称灯只亮到约 22:00，与官方口径矛盾，本次以官方为准，但深夜拍摄前请留个心
- `boathouse-row` **2. Boathouse Row**  
  门票：免费。船屋内部为各私人划船俱乐部所有，不对公众开放，只能拍外观
- `fairmount-water-works` **3. Fairmount Water Works**  
  开放时间：外景与崖径 24 小时开放。室内 Interpretive Center 官网原文：Wednesday – Saturday 10:00am – 5:00pm，周日、周一、周二及节假日闭馆。周六 13:00–16:00 另有动手活动。注意它是本区唯一在周三开门的室内场馆——周三美术馆与 Barnes 都关门，这里是唯一的室内替代。你的窗口内正在展出 John Brady 摄影展（2026-09-19 至 2027-01-08）
- `fairmount-water-works` **3. Fairmount Water Works**  
  门票：外景与栈道完全免费。室内 Interpretive Center 也免费（欢迎捐款）
- `philadelphia-museum-of-art` **4. Philadelphia Museum of Art**  
  开放时间：官网原文：Monday 10am-5pm；Tuesday Closed；Wednesday Closed；Thursday 10am-5pm；Friday 10am-8:45pm；Saturday 10am-5pm；Sunday 10am-5pm。末次入场一般为闭馆前 30 分钟。周二、周三闭馆是本区最硬的约束
- `philadelphia-museum-of-art` **4. Philadelphia Museum of Art**  
  门票：成人 $30，65 岁以上 $28，持证学生 $14，18 岁及以下免费。票连续两天有效，含 Rodin Museum。每周五 17:00–20:45 Pay What You Wish（官方 2026-09-03 发稿宣布延长至 2027-06-25）；每月第一个周日全天 Pay What You Wish。台阶、露台、Rocky 雕像等全部外景免费，24 小时可站
- `philadelphia-museum-of-art` **4. Philadelphia Museum of Art**  
  预约：不强制预约，官方鼓励线上买定时票以免排队，现场也可购。philamuseum.org。周五 Pay What You Wish 的免费/自定价票需线上预约，热门时段会满
- `barnes-foundation` **5. The Barnes Foundation**  
  开放时间：官网原文：Thursday–Monday 11am – 5pm，会员 10:00 起入场。周二、周三闭馆（官网未列在营业表内，第三方与官网 hours 模块口径一致）。另闭 7 月 4 日、感恩节、圣诞节——均在你的窗口之外
- `barnes-foundation` **5. The Barnes Foundation**  
  门票：成人 $30，长者 $28，大学生 $5（电话购），13–18 岁 $5，12 岁及以下免费。含特展，连续两天有效。ACCESS/EBT 卡与费城 pre-K–12 教师免费。每月第一个周日免费（需注册）。南前庭与外墙免费
- `barnes-foundation` **5. The Barnes Foundation**  
  预约：建议线上预约定时入场票（barnesfoundation.org / 215.278.7000），周末与特展期强烈建议提前几天；现场票房也售票但不保证有位。大学生 $5 票只能电话购买（215.278.7000），线上买不到。每月首个周日的 PECO Free First Sunday 免费但必须注册，容量有限，放票时间是活动前一个周四 10:00（如 10 月 4 日那场，10 月 1 日 10:00 放票）
- `swann-memorial-fountain` **6. Swann Memorial Fountain / Logan Square**  
  开放时间：24 小时开放，全年无闭。但喷泉本身是季节性运行：费城 Parks & Recreation 的口径是「通常四月底或五月初开始通水，至少运行到十月中下旬，视是否出现冰点温度可延续到感恩节」。晚九月几乎肯定在喷；10 月 20 日之后正好落在关水的临界区间，出发前请查 @philaparkandrec 或电询 Parks & Rec
- `swann-memorial-fountain` **6. Swann Memorial Fountain / Logan Square**  
  门票：免费

### dc / National Mall

- `reflecting-pool-constitution-gardens` **1. Lincoln Memorial Reflecting Pool & Constitution Gardens**  
  开放时间：Constitution Gardens：24 小时开放，无限制。Lincoln Memorial Reflecting Pool：现行封闭令有效期至 2026 年 9 月 10 日 23:59，范围含水池本体、两侧步道与南北草地中带。该日期之后是否重开、9/25–10/22 期间的实际状态，未能从官方渠道确认——官方 8 月底口径是「几周内」，但同一项目已多次跳票，且 8 月下旬刚签出为期一年的维修合同。出发前请查 nps.gov/nama 的 Alerts & Conditions 与 Reflecting Pool 封闭公告页
- `reflecting-pool-constitution-gardens` **1. Lincoln Memorial Reflecting Pool & Constitution Gardens**  
  门票：免费
- `vietnam-veterans-memorial` **2. Vietnam Veterans Memorial (The Wall)**  
  开放时间：24 小时开放（NPS：outdoor areas open 24 hours a day 7 days a week）。Ranger 值守 9:30–22:00。夜间有地面投射照明，墙面可读，但夜间灯位很低、反射面会出现明显的灯斑，夜拍效果远不如清晨
- `vietnam-veterans-memorial` **2. Vietnam Veterans Memorial (The Wall)**  
  门票：免费
- `washington-monument` **3. Washington Monument**  
  开放时间：纪念碑内部：每日 9:00–17:00。末班参观时间官方两处口径不一（NPS 基础信息页写 16:30，recreation.gov 写 16:00），建议按 16:00 规划。碑体外部与整片 Washington Monument 草坪 24 小时开放。2026 年闭馆日（每月首周一天例行维护）：9 月 10 日、10 月 5 日、11 月 11 日、11 月 26 日、12 月 25 日——10 月 5 日（周一）落在本行程窗口内，那天登不了顶。另外雷暴与大风会临时关闭并作废该时段票
- `washington-monument` **3. Washington Monument**  
  门票：门票免费；提前预订收 $1.00/张 不可退服务费。当日现场票完全免费
- `wwii-memorial` **4. National World War II Memorial**  
  开放时间：24 小时开放。Ranger 值守 9:30–22:00。喷泉的运行时段官网未明示，实务上春秋两季白天与前半夜运行、深夜与冬季停机排空，未能从官方渠道确认 9–10 月的具体停机钟点——想拍喷泉请别把凌晨 03:00 当成机会
- `wwii-memorial` **4. National World War II Memorial**  
  门票：免费
- `lincoln-memorial` **5. Lincoln Memorial**  
  开放时间：NPS 官方原文：「The public may visit the sites of National Mall and Memorial Parks 24 hours per day. Rangers are on duty at the sites to answer questions from 9:30 a.m. to 10:00 p.m. daily.」Superintendent’s Compendium 另载：「Outdoor areas within the park are open 24 hours a day 7 days a week unless otherwise noted.」主殿与台阶全天候无门禁，凌晨可进。Undercroft 每日 9:00–21:00（3–10 月），末班票为闭馆前 1 小时、闭馆前 45 分钟停止入场，每月固定闭馆一天做例行维护（具体日期未在官网列出，未能确认 9–10 月的闭馆日，建议订票时看 recreation.gov 库存）
- `lincoln-memorial` **5. Lincoln Memorial**  
  门票：全部免费（Undercroft 提前票仅收 $1 手续费）
- `korean-war-veterans-memorial` **6. Korean War Veterans Memorial**  
  开放时间：24 小时开放。Ranger 值守 9:30–22:00。注意：本纪念碑旁 Daniel Chester French Drive 上的售票亭自 8:45 起发放 Lincoln Memorial Undercroft 当日票，清晨 08:30–09:30 这里会有一条排队人龙，拍摄请避开这个时段的东侧步道
- `korean-war-veterans-memorial` **6. Korean War Veterans Memorial**  
  门票：免费
- `mlk-memorial` **7. Martin Luther King, Jr. Memorial**  
  开放时间：24 小时开放。Ranger 值守 9:30–22:00。书店（West Basin Drive 一侧）为白天营业，具体钟点官网未列，未能确认
- `mlk-memorial` **7. Martin Luther King, Jr. Memorial**  
  门票：免费
- `fdr-memorial` **8. Franklin Delano Roosevelt Memorial**  
  开放时间：24 小时开放。Ranger 值守 9:30–22:00。水景（四室瀑布）在冬季会放空停机，秋季通常运行，但 NPS 未公布具体的季节性开关机日期，未能确认 10 月下旬是否仍在运行——若水景停机，本条目一大半价值会消失，建议出发当天先看 nps.gov/frde 的 Alerts
- `fdr-memorial` **8. Franklin Delano Roosevelt Memorial**  
  门票：免费
- `jefferson-memorial` **9. Thomas Jefferson Memorial & Tidal Basin**  
  开放时间：24 小时开放（NPS：outdoor areas open 24 hours a day 7 days a week）。Ranger 值守 9:30–22:00。殿内不设门，凌晨与深夜同样可进，整夜打灯
- `jefferson-memorial` **9. Thomas Jefferson Memorial & Tidal Basin**  
  门票：免费

### dc / Capitol Hill

- `union-station-dc` **1. Union Station**  
  开放时间：官方原文：「Washington Union Station is open 7 days a week」，「Union Station is closed to the public daily from 11PM to 5AM. During that time, the station will only be accessible to ticketed passengers.」→ 公众每天 5:00–23:00，全年无闭馆日，是本区时间上最宽松的点。零售店铺周一至周六 10:00–21:00、周日 12:00–18:00；美食广场周一至周六 7:00–21:00、周日 7:00–18:00；正餐厅各自不同。Main Hall 与 East Hall 的建筑空间在 5:00–23:00 全程可进，不受店铺营业时间限制
- `union-station-dc` **1. Union Station**  
  门票：免费
- `supreme-court` **2. Supreme Court of the United States**  
  开放时间：官方原文：「The Supreme Court Building is open Monday to Friday from 9 a.m. to 3 p.m. It is closed on weekends and all federal holidays.」Courtroom Lecture：周一至周五 10:30、11:30、12:30、13:30、14:30，联邦假日与法院开庭日不办，且「subject to cancellation due to Court business and… volunteer docent availability」。2026 年 10 月开庭日为 10/5、10/6、10/7、10/13、10/14；10/12 Columbus Day 全馆闭馆。官方另有一句必须照做的话：「the business of the Court may affect public access to the building and visitor programs. Please check Today at the Court on the homepage」——出发当天刷 supremecourt.gov 首页的 Today at the Court
- `supreme-court` **2. Supreme Court of the United States**  
  门票：免费
- `supreme-court` **2. Supreme Court of the United States**  
  预约：不需预约。Courtroom Lecture 也不预约，队伍在一层 Great Hall、法庭门外现场排，官方建议提前至少 15 分钟到（春夏更早）。若想旁听庭辩（10 月 5、6、7、13、14 日 10:00 开庭），目前是「在线抽签＋当日先到先坐」的试点并行：当日队伍在 East Capitol Street 一侧人行道排，约 9:30 开始放人入座
- `us-capitol` **3. United States Capitol**  
  开放时间：官方原文：「The Capitol Visitor Center is open Monday-Saturday from 8:30 a.m.-4:30 p.m.」，周日闭馆，另于 Thanksgiving、Christmas Day、New Year's Day、Inauguration Day 闭馆。导览场次 8:40–15:20，最后一场 15:20 开始。Exhibition Hall 8:30–16:30，Capitol Cafe 8:30–16:00，礼品店 9:00–16:30。旁听席：House Gallery 在众议院不开会时平日 9:00–16:00 开放、周末与假日闭馆（除非在开会），且「subject to unplanned, temporary closures」；Senate Gallery 仅在一周以上的休会期内平日 9:00–16:15 开放，不足一周的休会期不开。官方另有一句必须记住的话：「The U.S. Capitol is subject to the unscheduled suspension of tours」——临时停团随时可能，出发当天再刷一次首页
- `us-capitol` **3. United States Capitol**  
  门票：完全免费，进 Visitor Center 与参加导览都不收费
- `library-of-congress-jefferson` **4. Library of Congress · Thomas Jefferson Building**  
  开放时间：官方原文：「The Thomas Jefferson Building is open to visitors Tuesday through Saturday from 10 a.m. to 5 p.m.」，「Closed: Sundays, Mondays, and select federal holidays」，周四延长至 20:00。最后入场 16:30（周四晚场另计）。Main Reading Room 地面 walkthrough：周二至周五 10:30–11:30 与 14:00–15:00，周四另有 17:00–19:00；周六不办。Library Store 周二至周三、周五至周六 10:00–17:00，周四 10:00–20:00。注意：阅览室对持证研究者是另一套时间表（含周一开放），与游客时段无关。10 月 12 日 Columbus Day 属联邦假日，预计闭馆，请以官网首页公告为准
- `library-of-congress-jefferson` **4. Library of Congress · Thomas Jefferson Building**  
  门票：免费（定时票也免费）
- `library-of-congress-jefferson` **4. Library of Congress · Thomas Jefferson Building**  
  预约：必须有免费定时票（timed-entry ticket）才能进楼，无票不得入内，官方原文：「Every Library of Congress visitor, regardless of age, must reserve timed-entry passes」。放票规则：滚动提前 30 天在 loc.gov/visit 经 Etix 系统预订，单次最多 20 人；另有当天票，每个开放日 9:00 ET 在线释放，这是最可靠的补救路径。票不可转让、不可改期，取消需发信 visit@loc.gov。20 人以上团体走 group registration form，可提前 60 天、需约 3 个工作日审核。周四晚 17:00 起的「Live! at the Library」需另一张专用票，白天的定时票在周四 16:30 后失效。Main Reading Room 地面 walkthrough 不预约，现场先到先得
- `us-botanic-garden` **5. United States Botanic Garden Conservatory**  
  开放时间：官方原文：Conservatory「10 a.m. to 5 p.m. daily (closed Dec. 25)」；Bartholdi Fountain and Gardens「Dawn to dusk」；National Garden（gated outdoor gardens）7:30–17:00，仅 4/1–9/15 延长至 19:00——本次窗口内按 17:00 关门计。2026 年的四个夏季延长开放日（6/18、7/16、8/20 或 8/27、9/17，开到 20:00）全部早于 9 月下旬，本次窗口内没有延长开放日。礼品店在 West Gallery，随温室时间
- `us-botanic-garden` **5. United States Botanic Garden Conservatory**  
  门票：完全免费

### dc / 博物馆群

- `dc-whitehouse` **1. White House Exterior + The People's House**  
  开放时间：外景区域理论上 24 小时，但实际以 NPS／Secret Service 的临时封闭令为准，且官方警告「areas often close without any advance notice」。The People's House：每周七天 9:00–17:00，最后入场 16:00（闭馆前 1 小时）；Thanksgiving、圣诞节、元旦闭馆；官方注明「with some exceptions」，偶尔会因特别活动或预定维护关闭，会在官网公告。附设的 History Shop 同为 9:00–17:00，无需票即可进
- `dc-whitehouse` **1. White House Exterior + The People's House**  
  门票：外景 免费。The People's House 免费，官方建议每人捐 $15（自愿，非强制）
- `dc-whitehouse` **1. White House Exterior + The People's House**  
  预约：白宫外景不需任何预约，但出发前必须查一次 NPS 临时封闭公告页，那里会挂当期的 Record of Determination 与封闭地图。The People's House 建议提前订免费定时票。放票规则很特殊：每月第一个工作日 17:00 ET 之前，释放次月全月的票（官方例子：11 月的票在 10 月第一个工作日 17:00 ET 前放出）。换算过来：要去 10 月下旬，票在 9 月 1 日就已经放出；要去 9 月下旬，票在 8 月初已放出。现场也有少量 walk-up 票，先到先得，但热门时段靠不住。16 人以上团体必须提前 6 周申请团体票。订票 thepeopleshouse.com/passes。真正的白宫参观：外国公民须经本国驻美使馆于行前 21–90 天提交，多数使馆不受理旅游申请，请视为不会发生
- `dc-npg-saam` **2. National Portrait Gallery + Smithsonian American Art Museum**  
  开放时间：这是本区开得最晚的馆，也是唯一能拍到日落后室内的馆。Smithsonian American Art Museum 官网首页现行口径是「Open Daily, 11:30 a.m.–7:00 p.m.」，Smithsonian Gardens 官方页面对中庭的口径是「The Robert and Arlene Kogod Courtyard … is open 11:30 a.m. to 7 p.m. daily and closed on December 25」，两处一致。National Portrait Gallery 同楼同时段。请注意 11:30 才开门，比其他 Smithsonian 晚 90 分钟，别把上午第一站排在这里；作为补偿它比别人晚关 90 分钟
- `dc-npg-saam` **2. National Portrait Gallery + Smithsonian American Art Museum**  
  门票：免费
- `dc-fords` **3. Ford's Theatre and Petersen House**  
  开放时间：官方口径：每日开放，入场时段 9:00–16:00、每半小时一档；Thanksgiving 与 12 月 25 日闭馆。官方建议留 2–3 小时走完四个部分，其中 Museum 约 30 分钟。但「每日开放」不等于「四个部分每天都开」：NPS 明确说明剧场本体可能因演出、装台、排练而关闭，且「The schedule varies considerably … please check the reservations schedule on the Ford's Theatre Society site for specific details on what is available on any given day or entry time」
- `dc-fords` **3. Ford's Theatre and Petersen House**  
  门票：免费；网上订票每张 $5.00 手续费；Acoustiguide 语音导览另加 $5/台
- `dc-archives` **4. National Archives Museum**  
  开放时间：官方原文：展区 每日 10:00–17:30，最后入场为闭馆前 30 分钟（即 17:00）；除 Thanksgiving 与 12 月 25 日外全年开放。定时票时段止于 16:30，官方解释是要留足时间让人看完 Rotunda。（注：今年夏天曾有到 7 月 5 日为止的 10:00–22:00 延长开放，该延长已结束，10 月不要指望晚场）
- `dc-archives` **4. National Archives Museum**  
  门票：免费（$1 仅为定时票手续费）
- `dc-archives` **4. National Archives Museum**  
  预约：不需预约，所有人都可以直接来。但官方「鼓励」订票以启用馆内新的个性化系统，共三种：（1）免费 general admission 票；（2）$1 定时票（timed-entry），唯一作用是跳过现场排队，入场时段 10:15–16:30、每 15 分钟一档；（3）6 人以上团体 $1 定时票。$1 是不可退的手续费，改期免费、取消不退。10 月、11 月、12 月 2026 的票已于 9 月 1 日 11:00 ET 开始释放。订票走 Etix，入口在 visit.archives.gov/visit/tickets。实务判断：旺季正午现场队伍可能排 30–60 分钟，$1 非常值得花；若你按建议在 10:00 开馆时到，则完全不必订
- `dc-nga` **5. National Gallery of Art (West Building + East Building)**  
  开放时间：官方原文：East Building 与 West Building 每日 10:00–17:00；Sculpture Garden 每日 10:00–17:00。全年仅 12 月 25 日与 1 月 1 日闭馆。East Building 的 Terrace Café 每日 10:00–16:00。17:00 早闭是这个点位最大的结构性缺陷：9 月下旬闭馆后还有 2 小时日光、10 月下旬还有 1 小时 15 分，请把这段时间预留给别处的室外机位，不要指望在馆内拍黄金时段
- `dc-nga` **5. National Gallery of Art (West Building + East Building)**  
  门票：免费（官方口径「Always free」）
- `dc-nmnh` **6. Smithsonian National Museum of Natural History**  
  开放时间：官方原文：「The museum is open seven days a week from 10 a.m. to 5:30 p.m., except December 25.」并特别注明「At 5:30 p.m., the doors close and all visitors must exit the building.」——17:30 是硬性清场，不是最后入场。馆内商店（Ground Floor, Evans Gallery 的 Gallery Store 与 Family Store）同为 10:00–17:30
- `dc-nmnh` **6. Smithsonian National Museum of Natural History**  
  门票：免费
- `dc-nmaahc` **7. National Museum of African American History and Culture (NMAAHC)**  
  开放时间：官方口径：周二至周日 10:00–17:30；周一 12:00–17:30；联邦假日当天 10:00 开门；仅 12 月 25 日闭馆。持票者可从票面时间起入场，最晚 16:00（团体票有 2 小时宽限期），之后按容量决定、不保证放行。周一晚开两小时是很容易踩的坑，别把周一上午安排到这里
- `dc-nmaahc` **7. National Museum of African American History and Culture (NMAAHC)**  
  门票：免费（定时票本身也免费，无手续费）
- `dc-nmaahc` **7. National Museum of African American History and Culture (NMAAHC)**  
  预约：必须持免费定时票（timed-entry pass），所有人不论年龄都要有，包括婴儿。官方已确认目前仍然要求定时票（这一点历史上反复变过，2019 年曾按淡旺季区分、9–2 月工作日可 walk-in，现在没有淡季豁免了）。放票有两个渠道：（1）提前票按滚动方式提前 30 天释放；（2）同日票每天上午 8:15 ET 之前在线释放，仅限网络、不在现场发。每个账号一次最多订 9 张，10 人以上须走 group passes。官方明确写「The museum cannot always accommodate walk-up visitors」，没票基本进不去。退役军人、现役军人与急救人员例外：无需提前订票，现场出示军方或工作证件并填表即可入场，可带最多 4 名同行者。订票入口 nmaahc.si.edu/visit。实务建议：先按 30 天提前票抢，抢不到再蹲 8:15 同日票，旺季同日票常在几分钟内清空，请提前登录 Smithsonian 账号、把人数填好等着刷
- `dc-castle` **8. Smithsonian Castle and the Enid A. Haupt Garden** **[标记为不可抵达]**  
  开放时间：Castle 室内：关闭。si.edu 的口径是「part of the first floor is open through September 7, 2026」，此后重新关闭，官方尚未公布永久重开日期。Enid A. Haupt Garden：每日 dawn 至 dusk，仅 12 月 25 日闭园。换算成钟点：9 月 25 日约 06:32–19:26、10 月 22 日约 06:57–18:47（按民用晨昏光时刻）。这是本区唯一能覆盖日出与日落全时段的点位，也是它在城堡关门后仍值得来的主要理由。参考：同属 Smithsonian Gardens 的 Freer Courtyard Garden 每日 10:00–17:30，Kogod Courtyard 每日 11:30–19:00
- `dc-castle` **8. Smithsonian Castle and the Enid A. Haupt Garden** **[标记为不可抵达]**  
  门票：免费
- `dc-castle` **8. Smithsonian Castle and the Enid A. Haupt Garden** **[标记为不可抵达]**  
  预约：不需预约（花园与外景无票务）。城堡室内本次无法预约也无法进入。花园有免费导览：3 月 13 日至 10 月 30 日每周五 10:00，5 月起加开每周三 10:00，视天气而定，最新排期见 gardens.si.edu

### dc / N. Virginia

- `great-falls-park-virginia` **1. Great Falls Park (Virginia side)**  
  开放时间：官方原文：Great Falls Park, overlooks, hiking trails, picnic areas and other outdoor areas, are open daily from 7:00 a.m. to thirty (30) minutes after sunset.（每日 7:00 至日落后 30 分钟；仅 12 月 25 日闭园）。换算到具体日期：9 月 25 日为 7:00–19:30，10 月 22 日为 7:00–18:50。访客中心 10:00–17:00；访客中心庭院洗手间 8:30–16:00（Old Carriage Road Trail 与 Matildaville Trail 的洗手间目前故障，现场设有移动厕所，全园开放时段可用）。小卖部通常仅周末 12:00–17:00 营业，工作日按季节
- `great-falls-park-virginia` **1. Great Falls Park (Virginia side)**  
  门票：持 America the Beautiful 年卡免入园费——本次行程直接刷卡进场即可。否则：$20/私人车辆（含车内全部乘员，七日内有效），步行、骑行或骑马入园 $10/人；另有 $35 的 Great Falls + C&amp;O Canal 双园年卡。园内一律不收现金，只接受 Master Card／VISA／Discover／American Express 与感应支付。线上预购的电子票（QR 码）务必在抵达前先下载到手机——园内手机信号很弱。2026 年免票日中在本次窗口内的是 9 月 17 日（Constitution Day）与 10 月 27 日（Theodore Roosevelt 诞辰）
- `theodore-roosevelt-island` **2. Theodore Roosevelt Island**  
  开放时间：NPS 官方口径：岛每日 6:00–22:00 开放（官方原文「The island is open from 6 am to 10 pm」）。NPS 提醒这是城市环境中的岛，天黑后请谨慎。Current Conditions 页面（最后更新 2025 年 11 月 14 日）未列任何关闭告示
- `theodore-roosevelt-island` **2. Theodore Roosevelt Island**  
  门票：完全免费
- `marine-corps-war-memorial` **3. United States Marine Corps War Memorial (Iwo Jima Memorial)**  
  开放时间：NPS 官方原文：The memorial grounds are open year-round from 6 am until midnight.（每日 6:00–24:00，全年无休）。需要注意但本次不受影响的一点：夏季 Sunset Parade 期间（6–7 月部分周二 18:00–21:00，2026 年另加 8 月 5 日与 8 月 12 日 17:30–20:30）纪念碑广场会对公众关闭，九月下旬至十月下旬没有此类活动，广场全天可用
- `marine-corps-war-memorial` **3. United States Marine Corps War Memorial (Iwo Jima Memorial)**  
  门票：完全免费
- `netherlands-carillon` **4. Netherlands Carillon**  
  开放时间：NPS 官方原文：The carillon grounds are open year-round from 6 am until midnight.（草坪与广场每日 6:00–24:00，全年无休）。塔身「closed to visitors at all times」，永久不可攀登。每日有自动演奏与整点报时；夏秋两季会安排客座演奏家的现场音乐会，具体场次需查 NPS 活动日历
- `netherlands-carillon` **4. Netherlands Carillon**  
  门票：完全免费
- `arlington-national-cemetery` **5. Arlington National Cemetery**  
  开放时间：官方口径：Arlington National Cemetery is open daily from 8 a.m. to 5 p.m.（每日 8:00–17:00）。Arlington House 与其博物馆、两处 Enslaved Quarters：9 月至次年 5 月 9:30–16:30（6–8 月为 9:00–16:30），宅邸最后入场 16:00，仅 New Year’s Day、Thanksgiving、Christmas 三天闭馆。tram 8:30–16:00 发车（ANC 官网写「every 20 minutes」，运营商官网写「every 30 minutes」，两处口径不一致，以现场告示为准）。另需注意：部分第三方来源称 4–9 月延长至 19:00 闭园，但 arlingtoncemetery.mil 现行页面只写 8:00–17:00，未能从官方渠道确认延长时段
- `arlington-national-cemetery` **5. Arlington National Cemetery**  
  门票：入园完全免费。可选的 interpretive tram tour 成人约 $21.50 起（军人／退伍军人票约 $11.50 起，20 人以上团体票约 $17.50 起）；持残障停车证者本人加一名同行者免费搭乘
- `old-town-alexandria` **6. Old Town Alexandria**  
  开放时间：街道与滨水区全天开放。Torpedo Factory Art Center：每日 10:00–18:00，但常因私人活动提前到 17:00 闭馆——2026 年 9–10 月已公告的日期是 9/18、9/19、9/26、9/27、10/3、10/10、10/11、10/17；另于 New Year’s Day、Easter、Independence Day、Thanksgiving（2026 年 11 月 26 日）、Christmas 闭馆。驻场艺术家各自订时间，建筑开门不等于工作室都有人
- `old-town-alexandria` **6. Old Town Alexandria**  
  门票：步行游览完全免费，Torpedo Factory Art Center 自 1974 年起免费开放，Alexandria Archaeology Museum 与 The Art League Gallery 亦免费
- `mount-vernon` **7. Mount Vernon**  
  开放时间：官方口径：4 月至 10 月 9:00–17:00；11 月至次年 3 月 9:00–16:00。全年 365 天开放，含所有节假日。九月下旬至十月下旬适用 9:00–17:00。Donald W. Reynolds Museum & Education Center 与 The Shops 比园区晚一小时关（4–10 月 9:00–18:00）。The Farm 与 Distillery & Gristmill 只在 4–10 月开放（Distillery & Gristmill 在 2.8 英里外，需自驾或搭接驳，单程约 12 分钟）
- `mount-vernon` **7. Mount Vernon**  
  门票：成人（12 岁以上）$30，青少年（6–11 岁）$16，0–5 岁免费。门票含历史区、园林、附属建筑、博物馆与语音导览。宅邸定时票线上预约每人另加 $2。15 岁及以下须成人陪同。停车全程免费

### dc / Georgetown 与外围

- `national-cathedral` **1. Washington National Cathedral**  
  开放时间：官方原文：「Our sightseeing hours vary day-to-day to accommodate the wide range of activities and ministries offered at the Cathedral. Your ticket is valid for the hours posted that day.」实际常见为 10:00–17:00 或 11:00–17:00，17:00 准时清场（closes promptly at 5 pm）。周日：官方明确写「Touring is not available during Sunday services」，周日基本不售自助参观票；某个特定周日午后是否放开参观未能确认，必须逐日查 cathedral.org 的日历。Garth 中庭与 All Souls Memorial Garden 因中央塔工程封闭，官方称「不早于 2026 年晚秋」重开
- `national-cathedral` **1. Washington National Cathedral**  
  门票：自助参观（Self-Guided Sightseeing）：成人 $15，5–12 岁儿童 $10，学生与长者周一至周三 8 折。票含 Bloomberg Connects 数字导览、主层与地下层、各展览，以及 Tower Observation Gallery「when available」——即观景廊是否开放逐日不定，不保证。导览类：Guided Spotlights Tour $20 / 儿童 $15（含 1 小时讲解，之后可继续自助参观）；Behind the Scenes Tour $35；Bell Tower Climb $50（爬 333 级到中央塔的鸣钟室，全程 70–90 分钟，有身高与年龄限制）。参加礼拜与私人祈祷永远免费
- `meridian-hill` **2. Meridian Hill Park (Malcolm X Park)**  
  开放时间：5 月至 10 月 05:00–24:00；11 月至次年 4 月 05:00–21:00。整个 9 月底至 10 月底的行程窗口都适用「开到午夜」这一档，这是本区唯一能从容拍夜景的点位。无闭园日
- `meridian-hill` **2. Meridian Hill Park (Malcolm X Park)**  
  门票：免费
- `dumbarton-oaks` **3. Dumbarton Oaks Gardens**  
  开放时间：常规季 3 月 1 日–10 月 31 日：周二至周日 14:00–18:00，17:30 停止入场，周一及联邦假日闭园。2026 年额外闭园日：10 月 8、9、10 日（当日不售票且季票不认）。冬季 11/1–12/31：14:00–17:00，16:30 停止入场，同样周一与联邦假日闭园。1/1–2/28 全季闭园。注意 10 月 12 日的 Columbus Day / Indigenous Peoples' Day 是周一，本就闭园，不额外冲突
- `dumbarton-oaks` **3. Dumbarton Oaks Gardens**  
  门票：常规季（3/1–10/31）$15/人，2 岁及以下免费。冬季（11/1–12/31）免票但仍需提前预约
- `dumbarton-oaks` **3. Dumbarton Oaks Gardens**  
  预约：必须提前在 Eventbrite 购定时票，现场没有售票点、没有候补、没有 standby。票为定时入场，持票可在标注时间到 17:30 之间入园；每户每日限 10 张；售出不退（仅当园方自行闭园时例外）；不可再次入场。2026 年季票已全部售罄
- `exorcist-steps` **4. The Exorcist Steps, Cady's Alley & Georgetown Rowhouses**  
  门票：免费
- `georgetown-canal` **5. C&O Canal Georgetown & Georgetown Waterfront Park**  
  门票：免费（C&amp;O Canal NHP 与 Georgetown Waterfront Park 均不收门票）
- `georgetown-canal` **5. C&O Canal Georgetown & Georgetown Waterfront Park**  
  预约：不需预约。运河游船（Georgetown Heritage）状态为 Closed，目标 2027 年春复航，本次无票可买
- `cedar-hill` **6. Frederick Douglass National Historic Site (Cedar Hill)**  
  开放时间：房屋导览仅在周二至周六进行（即周日与周一无法进屋）。标准场次：9:00、12:15、13:15、15:00、15:30，以及仅 4–10 月加开的 16:00 场，每场 30 分钟、上限 10 人。另有每天 11:30 的一场 Grounds Tour（户外，15–20 人）。访客中心 4–10 月 9:00–17:00（11–3 月 9:00–16:30）。提醒：NPS 导览页最后更新于 2025 年 8 月，2024 年曾因人手不足一度缩到每周只开三天，2026 年秋是否仍为周二至周六未能确认，出发前请致电 771-208-1499
- `cedar-hill` **6. Frederick Douglass National Historic Site (Cedar Hill)**  
  门票：免门票、免入园费。唯一的钱是 $1/张的网上预约服务费

## P2（36 条）


### dc / Philly Old City

- `reading-terminal-market` **1. Reading Terminal Market**  
  预约：不需预约
- `christ-church` **4. Christ Church & Christ Church Burial Ground**  
  预约：两处都接受 walk-in，不需预约。导览团现场参加即可，10 人以上团体建议先电话预约（215-922-1695 转 32）。官网也有在线预付页面。
- `liberty-bell-center` **5. Liberty Bell Center**  
  预约：不需预约、不需票，先到先得，但必须先过安检。
- `museum-american-revolution` **7. Museum of the American Revolution**  
  预约：建议线上买（便宜 $2 且能选时段）。现场票按时段发售、先到先得、可能售完。另有 Any Day 票（不指定日期时段，$27）。所有票均含当日与次日两天。

### dc / Philly Parkway

- `boathouse-row` **2. Boathouse Row**  
  预约：不需预约
- `fairmount-water-works` **3. Fairmount Water Works**  
  预约：不需预约
- `swann-memorial-fountain` **6. Swann Memorial Fountain / Logan Square**  
  预约：不需预约

### dc / National Mall

- `reflecting-pool-constitution-gardens` **1. Lincoln Memorial Reflecting Pool & Constitution Gardens**  
  预约：不需预约
- `vietnam-veterans-memorial` **2. Vietnam Veterans Memorial (The Wall)**  
  预约：不需预约
- `washington-monument` **3. Washington Monument**  
  预约：登顶必须定时票。recreation.gov 或 877-444-6777。提前票：参观日前 30 天的上午 10:00 ET 整点放出，每张收 $1.00 不可退手续费；另有一批「前一日票」在参观前一天 15:00 ET 放出（部分官方页面写作「前一日 10:00」，两种口径同时存在于 NPS 与 recreation.gov 页面，未能确认哪个为准，建议两个时间点都盯）。当日免费票在 Washington Monument Lodge（15th St，Madison 与 Jefferson Drive 之间）8:45 起发放，一人（16 岁以上）最多领 6 张、可指定时段，先到先得。旺季秒光，务必提前注册好账号并预先登录
- `wwii-memorial` **4. National World War II Memorial**  
  预约：不需预约
- `lincoln-memorial` **5. Lincoln Memorial**  
  预约：主殿与台阶：不需预约。Undercroft 博物馆：必须定时票（2 岁以上全员需票）。提前票 recreation.gov 或 877-444-6777，可提前 30 天预订，每日 11:00 ET 放出 30 天后那一天的库存，每单最多 6 张，票免费但收 $1.00/单 手续费；另有一部分提前票在参观前一日 16:00 ET 释出。当日免费票在 Korean War Veterans Memorial 售票亭（Daniel Chester French Drive）8:45 起先到先得，一人（16 岁以上）最多领 6 张，周末与旺季会提前排队
- `korean-war-veterans-memorial` **6. Korean War Veterans Memorial**  
  预约：不需预约
- `mlk-memorial` **7. Martin Luther King, Jr. Memorial**  
  预约：不需预约
- `fdr-memorial` **8. Franklin Delano Roosevelt Memorial**  
  预约：不需预约
- `jefferson-memorial` **9. Thomas Jefferson Memorial & Tidal Basin**  
  预约：不需预约

### dc / Capitol Hill

- `union-station-dc` **1. Union Station**  
  预约：不需预约
- `us-capitol` **3. United States Capitol**  
  预约：强烈建议预约，但不是强制。免费定时导览票滚动提前 90 天在 visitthecapitol.gov/visit/book-a-tour 自助预订，或通过参众议员办公室（公众申请窗口 7–90 天）；也可电话 202.226.8000。官方要求参观前至少 2 天补齐每位参观者姓名。没预约照样能进：Emancipation Hall 的 Information Desk 每天发放限量当天票，官方建议最迟 14:30 前到场。House／Senate Gallery 不含在导览内，需另领通行证——外国访客持本国有效身份证件（护照）到 Visitor Center 上层的 House 与 Senate Appointment Desk 现场索取，无需事先申请。中文导览每日 8:40 一场，需提前预约
- `us-botanic-garden` **5. United States Botanic Garden Conservatory**  
  预约：不需预约。官方原文：「Admission to the U.S. Botanic Garden is free. No tickets required.」唯一需要提前申请的是三脚架许可：提前至少一周写信给 Visitor Services Coordinator Victoria Gesell（victoria.gesell@aoc.gov），或到 Conservatory 服务台现场申请，官方明说「same-day permit requests are not guaranteed」

### dc / 博物馆群

- `dc-npg-saam` **2. National Portrait Gallery + Smithsonian American Art Museum**  
  预约：不需预约，没有任何票务系统，直接走进去
- `dc-fords` **3. Ford's Theatre and Petersen House**  
  预约：每人都必须有票，票本身免费，但网上订每张收 $5.00 手续费（NPS 原文：「The Ford's Theatre Society charges a $5.00 reservation fee for each ticket」）。每单限 6 张；该手续费在 NPS 免费入园日也不豁免，国家公园年卡不能抵扣。同日免费票当天 8:30 起在 box office 现场发放，每人限 6 张、数量有限，热门时段可能完全没有。NPS 建议至少提前一天买。20 人以上团体写 groups@fords.org。订票与班次日历：fords.org。关键操作：订票前必须打开 Ford's Theatre Society 的日历，逐个时段确认你那一档到底含不含 Theatre 与 Museum——这是本景点唯一真正需要动脑的一步
- `dc-nga` **5. National Gallery of Art (West Building + East Building)**  
  预约：不需预约，无票务系统
- `dc-nmnh` **6. Smithsonian National Museum of Natural History**  
  预约：不需预约，不需任何票。官方明确「No tickets are required」

### dc / N. Virginia

- `great-falls-park-virginia` **1. Great Falls Park (Virginia side)**  
  预约：不需预约。婚礼需另办许可（703-757-3101）；8 人以内、仅手持器材、不独占场地的常规摄影（含三脚架）不需要许可
- `theodore-roosevelt-island` **2. Theodore Roosevelt Island**  
  预约：不需预约
- `marine-corps-war-memorial` **3. United States Marine Corps War Memorial (Iwo Jima Memorial)**  
  预约：不需预约。仅商业拍摄、婚礼与团体活动需申请许可，电话 703-289-2513
- `netherlands-carillon` **4. Netherlands Carillon**  
  预约：不需预约
- `arlington-national-cemetery` **5. Arlington National Cemetery**  
  预约：不需预约，墓园与 Arlington House 均免票免预约。tram 车票可现场在 Welcome Center 购买或线上先买，也不需预约
- `old-town-alexandria` **6. Old Town Alexandria**  
  预约：不需预约。King Street、滨水区、Captain’s Row 与 Torpedo Factory Art Center 均免费开放
- `mount-vernon` **7. Mount Vernon**  
  预约：园区门票（grounds pass）不强制预约，可现场买；但宅邸参观需另配定时票。官方原文：「Entry to the Mansion requires a ticket, available during online checkout or at the gate.」强烈建议线上先订以拿到想要的时段——官方明示旺季与周末现场买时，最早可用的宅邸场次可能在抵达后两小时以上。线上预约宅邸时段每人加收 $2

### dc / Georgetown 与外围

- `national-cathedral` **1. Washington National Cathedral**  
  预约：自助参观建议提前在 cathedral.org 或 tix.cathedral.org 购票，现场也可买但热门时段会满。塔楼攀登与幕后导览必须提前预约，按讲解员排班开放，名额少。20 人以上团体必须提前申请
- `meridian-hill` **2. Meridian Hill Park (Malcolm X Park)**  
  预约：不需预约（举办活动才需要 special use permit）
- `exorcist-steps` **4. The Exorcist Steps, Cady's Alley & Georgetown Rowhouses**  
  开放时间：阶梯是公共通行权，24 小时开放无人管理；O/P Street 与 N Street 是普通市政道路，同样全天可达
- `exorcist-steps` **4. The Exorcist Steps, Cady's Alley & Georgetown Rowhouses**  
  预约：不需预约
- `georgetown-canal` **5. C&O Canal Georgetown & Georgetown Waterfront Park**  
  开放时间：Georgetown Waterfront Park 24 小时开放。C&amp;O Canal 纤道无固定闭园钟点，但 Georgetown 段 Mile 0.4–1 有施工绕行、Level 1 北墙坍塌点周边封闭，绕行路线走相邻街道与巷子，多绕 0.3 英里以内。NPS 现况页显示 Georgetown Visitor Center 为「Open」，但其具体每日开放钟点未能从官方渠道确认，需要盖 Passport 章的话请先致电 301-739-4200
- `cedar-hill` **6. Frederick Douglass National Historic Site (Cedar Hill)**  
  预约：房屋内部只能通过 ranger 导览进入。官方强烈建议预约：recreation.gov（Facility 234636）或电话 1-877-444-6777，每张票收 $1 不可退的预约服务费，最晚需提前一天预约，最早可提前 6 个月。未被预约掉的余票在访客中心免费先到先得，但热门时段经常提前很久就订满。11 人以上团体必须预约（1-877-559-6777，提前至少一周，同样 $1/人，学校团体统一 $10）
