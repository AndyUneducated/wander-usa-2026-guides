# 数据准确性复核清单

每条都需要对着官方来源核对。改动请回写到 `<region>/parts/*.js`（socal 直接改 `socal/data.js`），然后重新跑 `tools/assemble.py`。

| 优先级 | 条数 | 含义 |
| --- | --- | --- |
| P0 | 5 | 声明不可抵达或已关闭，判错代价最大 |
| P1 | 80 | 含具体时刻/日期/价格，最易过期 |
| P2 | 59 | 预约与门票要求 |
| P3 | 0 | 停车与步行等 |


## P0（5 条）


### socal / 中央海岸

- `mcway-falls` **2. McWay Falls, Julia Pfeiffer Burns SP**  
  ★不可抵达判定（需二次确认真的去不了）：9/3 起道路已能开到公园门口，但公园本身仍关闭至另行通知；且观景步道自 2024 年 11 月起就已长期封闭。
- `sand-dollar-jade` **3. Sand Dollar Beach · Jade Cove · Willow Creek Vista**  
  ★不可抵达判定（需二次确认真的去不了）：双重封锁：既在 Hwy 1 仍封闭的南段内，又被森林封闭令逐条点名。可以确定地排除，无需再抱期望。

### socal / SB + Malibu

- `point-dume` **8. Point Dume State Beach**  
  ★不可抵达判定（需二次确认真的去不了）：主通道因 8/1 海岸侵蚀无限期关闭。但崖顶保护区另有一个 Cliffside Drive 入口不经施工闸门，值得当天打电话确认。

### socal / 洛杉矶

- `hollywood-sign` **2. Hollywood Sign · Lake Hollywood Park · Mount Lee**  
  停车：本条目最大的坑。Lake Hollywood Park 一带 Canyon Lake Dr 为免费路边车位，但 2026 年 5 月起 PPD 320 扩区：周五、周六、周日及节假日禁止无证停车，违者开罚并拖车。→ 9/5（六）、9/6（日）、9/7（Labor Day）三天不可开车前往，只能安排 9/8 或 9/9。平日免费且通常有位，但周末即使合规日也会在 09:00 前坐满。Beachwood Gate 自 2017 年 4 月起永久关闭，九年未重开
- `wayfarers-chapel` **16. Wayfarers Chapel**  
  ★不可抵达判定（需二次确认真的去不了）：2024 年因滑坡拆解入库，原址与庭园全部封闭，重建希望 2027 年秋开工。请从行程中删除。

## P1（80 条）


### socal / 中央海岸

- `pfeiffer-beach` **1. Pfeiffer Beach · Keyhole Arch**  
  开放时间：日间使用区通常 09:00 至日落，日落后闸门上锁——拍完日落要立刻走，别拖到蓝调
- `pfeiffer-beach` **1. Pfeiffer Beach · Keyhole Arch**  
  门票：$15/车（Los Padres National Forest 日间使用费）
- `mcway-falls` **2. McWay Falls, Julia Pfeiffer Burns SP** **[标记为不可抵达]**  
  门票：正常年份 $10/车日间使用费
- `sand-dollar-jade` **3. Sand Dollar Beach · Jade Cove · Willow Creek Vista** **[标记为不可抵达]**  
  门票：正常年份 Sand Dollar $10/车，Jade Cove 免费
- `ragged-point` **4. Ragged Point · Young Creek Beach**  
  开放时间：崖上全天；餐厅周一至周六早餐 8–11、午餐 12–16、晚餐 17–20
- `ragged-point` **4. Ragged Point · Young Creek Beach**  
  门票：免费
- `daou` **5. DAOU Vineyards, Paso Robles**  
  开放时间：每日 10:00–17:00，仅接受预约
- `daou` **5. DAOU Vineyards, Paso Robles**  
  门票：Discover DAOU（60 分钟）$50/人；The Estate Experience（90 分钟）$95–110/人；Patrimony Immersion（2.5 小时，仅周一至周四）$275/人
- `moonstone` **6. Moonstone Beach, Cambria**  
  门票：免费
- `green-valley` **7. Green Valley Viewing Point, CA-46**  
  门票：免费
- `montana-de-oro` **8. Montaña de Oro State Park, Los Osos**  
  开放时间：日用区 06:00–22:00，可以拍完蓝调再走
- `montana-de-oro` **8. Montaña de Oro State Park, Los Osos**  
  门票：完全免费，官方明示无入园费也无停车费
- `oceano-dunes` **9. Oceano Dunes Visitor Center · Pismo Beach Pier**  
  开放时间：访客中心 周二至周六 12:00–16:00，周日与周一关闭；车辆上沙滩 07:00–22:00
- `oceano-dunes` **9. Oceano Dunes Visitor Center · Pismo Beach Pier**  
  门票：访客中心免费；步行进沙滩免费且无需通行证；车辆上沙滩 $5/车
- `guadalupe-dunes` **10. Rancho Guadalupe Dunes Preserve · Dunes Center**  
  开放时间：沙丘保护区每日 07:00 至黄昏（9 月黄昏约 19:45，可以拍到日落）；Dunes Center 周二至周六 10:00–15:00
- `guadalupe-dunes` **10. Rancho Guadalupe Dunes Preserve · Dunes Center**  
  门票：沙丘保护区无正式门票，入口大门处请求自愿捐款；Dunes Center 成人 $7、老年 $6、12 岁及以下免费

### socal / SB + Malibu

- `old-mission-sb` **1. Old Mission Santa Barbara**  
  开放时间：周一至周六 09:30–17:00，周日 12:30–17:00，均为 16:00 停止售票。周日上午 09:30–12:30 因弥撒不对游客开放教堂
- `old-mission-sb` **1. Old Mission Santa Barbara**  
  门票：成人 $17、65+ 与现役军人 $15、5–17 岁 $12、4 岁以下免费。草坪与立面外景不需买票就能拍，门票是进博物馆、中庭与墓园用的
- `sb-courthouse` **2. Santa Barbara County Courthouse**  
  开放时间：周一至周五 08:00–17:00，周末及法定休庭日 10:00–17:00，16:30 后不再放行访客，观景台闭馆前 30 分钟关闭。9/7 劳工节按 10:00–17:00 执行
- `sb-courthouse` **2. Santa Barbara County Courthouse**  
  门票：全程免费（含电梯）
- `stearns-butterfly` **3. Stearns Wharf · Butterfly Beach**  
  开放时间：Stearns Wharf 停车运营 08:00–22:00
- `stearns-butterfly` **3. Stearns Wharf · Butterfly Beach**  
  门票：均免费
- `point-mugu-rock` **4. Point Mugu Rock**  
  门票：免费
- `getty-villa` **5. The Getty Villa**  
  开放时间：每日 10:00–17:00，周二闭馆。劳工节正常开放。9/5、9/6、9/7、9/9 可去；9/8 闭馆
- `getty-villa` **5. The Getty Villa**  
  门票：门票免费
- `el-matador` **6. El Matador State Beach**  
  开放时间：08:00 至日落
- `el-matador` **6. El Matador State Beach**  
  门票：海滩免费，仅停车收费 $8–12（各来源报价不一，普遍 $10 上下，备好刷卡与零钱）
- `malibu-pier` **7. Malibu Pier**  
  门票：上桥免费
- `point-dume` **8. Point Dume State Beach** **[标记为不可抵达]**  
  开放时间：Birdview Avenue 入口每日 05:00–15:00 对行人和自行车也关闭（施工作业区，有承包商与警长副手驻场）

### socal / 洛杉矶

- `wisdom-tree` **1. Wisdom Tree · Burbank Peak · Cahuenga Peak**  
  门票：免费
- `hollywood-sign` **2. Hollywood Sign · Lake Hollywood Park · Mount Lee**  
  开放时间：户外无限制，但 Deronda 行人闸门日落后不能进入（9/5–9/9 即 19:07–19:13 后只能出不能进）。Griffith Park 步道规定日落关闭
- `hollywood-sign` **2. Hollywood Sign · Lake Hollywood Park · Mount Lee**  
  门票：全部免费
- `griffith` **3. Griffith Observatory**  
  开放时间：周二至周五 12:00–22:00；周六日 10:00–22:00；周一闭馆。场地与露台每天开放。免费公众望远镜观测：开馆日 19:00–21:30。Griffith Park 全园 05:00–22:30
- `griffith` **3. Griffith Observatory**  
  门票：建筑、场地、公共望远镜全部免费（1935 年捐赠契约规定不得收门票）。Samuel Oschin 天象厅成人 $12、55+ 与学生 $10、5–12 岁 $8，仅现场购当日场次，无法网购或预订
- `mulholland-overlooks` **4. Mulholland Scenic Overlooks (Jerome C. Daniel · Universal City)**  
  开放时间：Jerome C. Daniel 的闭园时间三说并存、未能确认：一说每日 07:00–18:00、一说至日落、一说闸门 19:00 关。9/5–9/9 日落为 19:07–19:13，若按 18:00 关闸执行则完全拍不到日落与蓝调。建议出发当日致电 MRCA (310) 589-3200 确认。Universal City Overlook 各来源一致为 每日 06:00–21:00
- `mulholland-overlooks` **4. Mulholland Scenic Overlooks (Jerome C. Daniel · Universal City)**  
  门票：免费
- `getty-center` **5. The Getty Center, Brentwood**  
  开放时间：周二至周五与周日 10:00–18:30；周六 10:00–21:00；周一闭馆。→ 9/7 Labor Day 闭馆；9/9 周三只开到 18:30，日落 19:07 之前就要离场；9/5 周六是全程唯一能在此拍到日落与蓝调的日子
- `getty-center` **5. The Getty Center, Brentwood**  
  门票：免费，含所有常设与临时展览
- `getty-center` **5. The Getty Center, Brentwood**  
  预约：必须提前在线预约限时入场票，getty.edu 或致电 (310) 440-7300。不保证 walk-in 有位，请提前数周预订，尤其 Labor Day 长周末的 9/5、9/6
- `rodeo-drive` **6. Rodeo Drive · Beverly Hills Sign · Via Rodeo**  
  开放时间：户外区域无限制。店铺通常 10:00/11:00–18:00/19:00，9/7 Labor Day 多家可能缩短营业，但不影响任何户外拍摄
- `rodeo-drive` **6. Rodeo Drive · Beverly Hills Sign · Via Rodeo**  
  门票：全部免费，Beverly Gardens Park 与 Rodeo Drive 均为开放公共空间
- `lacma` **7. LACMA · Urban Light · Levitated Mass**  
  开放时间：周一、周二、周四 11:00–18:00；周五 11:00–20:00；周六日 10:00–19:00；周三闭馆。9/9 周三进不去；9/7 Labor Day 按周一时间正常开放
- `lacma` **7. LACMA · Urban Light · Levitated Mass**  
  门票：成人 LA County 居民 $25、非居民 $30；65+ 与学生居民 $21、非居民 $26；17 岁以下居民免费。周一至周五 15:00 后 LA County 居民免费（需身份证明）。持 Metro 通票减 $2
- `vista-hermosa` **8. Vista Hermosa Natural Park**  
  开放时间：日出至日落，日落即闭园。9/5–9/9 日落 19:07–19:13。→ 可以拍到日落前的黄金时段（正是本机位最佳时段），但拍不到日落后的蓝调与城市灯光。实际执行：18:00 到场，18:15–19:10 密集拍摄，19:10 立刻撤离
- `vista-hermosa` **8. Vista Hermosa Natural Park**  
  门票：完全免费
- `disney-hall` **9. Walt Disney Concert Hall · Blue Ribbon Garden**  
  开放时间：屋顶花园官方未公布固定营业时间，实际是「建筑开放时即可进」。演出前约 90 分钟起会封闭、演出后 30–60 分钟重开。9/5–9/9 无 LA Phil 演出，但私人租用活动仍可能临时封锁（花园是热门婚宴场地），建议当天先致电 (213) 972-7300
- `disney-hall` **9. Walt Disney Concert Hall · Blue Ribbon Garden**  
  门票：免费
- `bradbury` **10. Bradbury Building**  
  开放时间：官方：周一至周五 9:00–17:00；周六日仅 10:00–14:00。周末窗口很短且刚好覆盖最佳光线的前半段，9/5 与 9/6 请务必在 11:00–13:30 之间到，别拖到 14:00。9/7 Labor Day 是否开放未能确认——楼内有 LAPD 办公机构，节假日关闭可能性较高，建议致电 (213) 592-3222 确认
- `bradbury` **10. Bradbury Building**  
  门票：免费
- `sixth-street-viaduct` **11. Sixth Street Viaduct (Ribbon of Light)**  
  门票：免费，24/7 开放（行人与自行车）
- `baldwin-hills` **12. Baldwin Hills Scenic Overlook**  
  开放时间：每日 8:00 至日落。→ 9/5–9/9 闭园为 19:07–19:13，拍不到日落后的蓝调与城市灯光；且 8:00 才开门意味着拍不到 6:31 的日出，「日出机位」实际只能拍到清晨光。Visitor Center 仅周五至周日 9:30–16:30（9/7、9/8 关闭，不影响拍摄）
- `santa-monica-pier` **13. Santa Monica Pier · Pacific Park · West Coaster · Route 66 End of the Trail**  
  开放时间：栈桥每日 6:00 至 23:00。Pacific Park：9/5、9/6 为 11:00–23:00（已确认）；9/7、9/8 推测同样但未能确认；9/9 提前 18:00 关闭（官方明确公告）。→ 9/9 当晚拍不到亮灯摩天轮的蓝调照片（当日日落 19:09），灯光蓝调务必安排在 9/5–9/8
- `santa-monica-pier` **13. Santa Monica Pier · Pacific Park · West Coaster · Route 66 End of the Trail**  
  门票：栈桥免费；Pacific Park 免门票入园，设施按次单独计费每项 $6–20。线上预购 Pacific Wheel 或 West Coaster 单次 $14（现场 $20）。另有当日无限次腕带。Pacific Wheel 不接受单人乘坐
- `venice-canals` **14. Venice Canal Historic District**  
  门票：免费，24 小时开放（官方建议白天 6:00–21:00 造访）
- `muscle-beach` **15. Muscle Beach Venice · Venice Boardwalk · Venice Sign**  
  门票：免费。Muscle Beach 围栏健身区内部使用需付费，但从外围拍摄免费
- `point-vicente` **17. Point Vicente Lighthouse · Interpretive Center**  
  开放时间：崖顶步道全天可达。灯塔塔身由 U.S. Coast Guard 管理，通常不对外开放内部（历史上仅每月一次开放日），2026 年 9 月安排未能确认
- `point-vicente` **17. Point Vicente Lighthouse · Interpretive Center**  
  门票：崖顶步道与观景台免费。Interpretive Center 2026 年 9 月开放时间与门票未能确认（历史上为低价或免费、周一可能闭馆），请行前查 rpvca.gov——但户外崖顶机位不受此影响
- `point-fermin` **18. Point Fermin Lighthouse · Point Fermin Park · Sunken City**  
  开放时间：灯塔周二至周日 13:00–16:00，周一固定闭馆，且重大节日与园内特别活动期间可能关闭。→ 9/7 周一加 Labor Day 双重命中，几乎确定无法进入，请改约 9/8 或 9/9 下午。公园 6:30–22:00
- `point-fermin` **18. Point Fermin Lighthouse · Point Fermin Park · Sunken City**  
  门票：灯塔与公园均免费，欢迎捐款

### socal / Laguna

- `heisler` **1. Heisler Park Beach Stairway**  
  开放时间：海滩开放 05:00–01:00
- `heisler` **1. Heisler Park Beach Stairway**  
  门票：免费
- `victoria-pirate` **2. Victoria Beach & Pirate Tower (La Tour)**  
  开放时间：海滩 05:00–01:00
- `victoria-pirate` **2. Victoria Beach & Pirate Tower (La Tour)**  
  门票：免费；塔为私产且常年锁闭，只能外部拍摄
- `treasure-island` **3. Treasure Island Beach**  
  开放时间：海滩 05:00–01:00
- `treasure-island` **3. Treasure Island Beach**  
  门票：免费，海滩与崖顶步道全公共

### socal / San Diego

- `gliderport` **1. Torrey Pines Gliderport**  
  开放时间：官方 tandem 运营 09:00–17:00（看风况）。但飞行社说明更精确：秋冬 11:00–16:00 风况最佳，春夏 09:00 到 19:00 甚至更晚都常可飞——9 月初属夏季尾，日落时段大概率仍有伞在天上
- `gliderport` **1. Torrey Pines Gliderport**  
  门票：免费。Tandem 体验若有兴趣：滑翔伞 $175–200 起，悬挂滑翔翼 $225 起，现金付款有折扣，先到先服务
- `salk` **2. Salk Institute for Biological Studies**  
  开放时间：周末、节假日、私人活动期间全部闭园。本次行程只有 9/9（周三）可行
- `salk` **2. Salk Institute for Biological Studies**  
  门票：$25 / 人
- `salk` **2. Salk Institute for Biological Studies**  
  预约：必须提前线上注册。公众团每周三、四、五 10:00 与 11:30，约 1 小时。私人团周一至周五 09:00–15:00，1–10 人 $250，须提前至少 10 个工作日申请
- `scripps-pier` **3. Ellen Browning Scripps Memorial Pier (UCSD)**  
  开放时间：沙滩全天；Kellogg Park 停车场全年 22:00–04:00 禁停
- `scripps-pier` **3. Ellen Browning Scripps Memorial Pier (UCSD)**  
  门票：免费（沙滩公共）
- `scripps-pier` **3. Ellen Browning Scripps Memorial Pier (UCSD)**  
  预约：沙滩拍摄不需预约。唯一合法登桥途径是 Birch Aquarium 的 Sunset Scripps Pier Walk：90 分钟导览，会员 $30、公众 $40，9 岁以上可参加，须提前在 aquarium.ucsd.edu 在线订票，集合点在栈桥入口闸门（8650 Kennel Way）。该项目为季节性，通常 9 月至次年 4 月运行，当前列为「部分周六与周日，持续至 2026 年 12 月」——请立刻去查 9/5、9/6、9/8、9/9 是否有场次
- `mount-soledad` **4. Mount Soledad National Veterans Memorial**  
  开放时间：每日 07:00–22:00，大门 22:00 准时上锁，切勿把车留在场内
- `mount-soledad` **4. Mount Soledad National Veterans Memorial**  
  门票：永久免费（纪念碑由捐赠资助运营）
- `sunset-cliffs` **5. Sunset Cliffs Natural Park, Point Loma**  
  门票：免费
- `uss-midway` **6. USS Midway Museum**  
  开放时间：每日 10:00–17:00，最后入场 16:00。建议游览 3–5 小时，可当日再入场
- `uss-midway` **6. USS Midway Museum**  
  门票：成人 $39 线上 / $41 现场；青少年 $29/$31；退伍军人 $26；现役与后备役免费（仅现场票亭）；3 岁及以下免费；EBT 持卡人 $5/人

### socal / 沙漠支线

- `salton-sea` **1. Salton Sea · Bombay Beach**  
  门票：Bombay Beach 免费；Sonny Bono NWR 完全免费；Salton Sea SRA 需缴州立公园日间停车费
- `salvation-mountain` **2. Salvation Mountain, Niland**  
  门票：完全免费。无门票、无纪念品店，现场工作人员不主动索要捐款

## P2（59 条）


### socal / 中央海岸

- `pfeiffer-beach` **1. Pfeiffer Beach · Keyhole Arch**  
  预约：不需预约
- `mcway-falls` **2. McWay Falls, Julia Pfeiffer Burns SP** **[标记为不可抵达]**  
  开放时间：因山火全园关闭，无解封时间表
- `mcway-falls` **2. McWay Falls, Julia Pfeiffer Burns SP** **[标记为不可抵达]**  
  预约：—
- `sand-dollar-jade` **3. Sand Dollar Beach · Jade Cove · Willow Creek Vista** **[标记为不可抵达]**  
  开放时间：Hwy 1 封闭：Pacific Valley（MM16）至 Monterey/SLO 县界（MM0.09），无解封时间表
- `sand-dollar-jade` **3. Sand Dollar Beach · Jade Cove · Willow Creek Vista** **[标记为不可抵达]**  
  预约：—
- `ragged-point` **4. Ragged Point · Young Creek Beach**  
  预约：观景不需要（餐厅建议预约 805-927-5708）
- `daou` **5. DAOU Vineyards, Paso Robles**  
  预约：强制要求。官方原文：每一张桌子都需预订，即便吧台也不保证 walk-in。工作日多数时段可当天约；周末需提前 2–4 周
- `moonstone` **6. Moonstone Beach, Cambria**  
  开放时间：全天
- `moonstone` **6. Moonstone Beach, Cambria**  
  预约：不需要
- `green-valley` **7. Green Valley Viewing Point, CA-46**  
  开放时间：全天
- `green-valley` **7. Green Valley Viewing Point, CA-46**  
  预约：不需要
- `montana-de-oro` **8. Montaña de Oro State Park, Los Osos**  
  预约：不需要
- `oceano-dunes` **9. Oceano Dunes Visitor Center · Pismo Beach Pier**  
  预约：不需要
- `guadalupe-dunes` **10. Rancho Guadalupe Dunes Preserve · Dunes Center**  
  预约：均不需要（Dunes Center 欢迎预约）

### socal / SB + Malibu

- `old-mission-sb` **1. Old Mission Santa Barbara**  
  预约：自助游览无需预约（10 人以下）
- `sb-courthouse` **2. Santa Barbara County Courthouse**  
  预约：不需要
- `stearns-butterfly` **3. Stearns Wharf · Butterfly Beach**  
  预约：不需要
- `point-mugu-rock` **4. Point Mugu Rock**  
  开放时间：全天
- `point-mugu-rock` **4. Point Mugu Rock**  
  预约：不需要
- `getty-villa` **5. The Getty Villa**  
  预约：必须预约免费定时入场票，线上或致电 (310) 440-7300，不接受 walk-in。旺季请提前订，想避人流选最早时段
- `el-matador` **6. El Matador State Beach**  
  预约：不需要
- `malibu-pier` **7. Malibu Pier**  
  开放时间：日出至日落，全年 365 天开放（官网首页原文为 OPEN SUNRISE TO SUNSET, 365 DAYS）
- `malibu-pier` **7. Malibu Pier**  
  预约：不需要
- `point-dume` **8. Point Dume State Beach** **[标记为不可抵达]**  
  门票：免门票
- `point-dume` **8. Point Dume State Beach** **[标记为不可抵达]**  
  预约：不需要

### socal / 洛杉矶

- `wisdom-tree` **1. Wisdom Tree · Burbank Peak · Cahuenga Peak**  
  开放时间：步道规定日落关闭
- `wisdom-tree` **1. Wisdom Tree · Burbank Peak · Cahuenga Peak**  
  预约：不需预约
- `hollywood-sign` **2. Hollywood Sign · Lake Hollywood Park · Mount Lee**  
  预约：不需预约
- `griffith` **3. Griffith Observatory**  
  预约：不需预约
- `mulholland-overlooks` **4. Mulholland Scenic Overlooks (Jerome C. Daniel · Universal City)**  
  预约：不需预约
- `rodeo-drive` **6. Rodeo Drive · Beverly Hills Sign · Via Rodeo**  
  预约：不需预约
- `lacma` **7. LACMA · Urban Light · Levitated Mass**  
  预约：入馆需限时预约票，强烈建议提前在 lacma.org 预订，现场票时段常售罄。室外作品免费且不需门票
- `vista-hermosa` **8. Vista Hermosa Natural Park**  
  预约：不需预约
- `disney-hall` **9. Walt Disney Concert Hall · Blue Ribbon Garden**  
  预约：不需要。免费自助语音导览每日 10:00–15:00（最后一场 14:00 开始），约 60 分钟，在 Grand Avenue Lobby 的 Tour Check-In 台开始，由 John Lithgow 配音，扫码收听，无需预约。导览不含音乐厅内部，且会因演出或彩排临时变更
- `bradbury` **10. Bradbury Building**  
  预约：不需预约
- `sixth-street-viaduct` **11. Sixth Street Viaduct (Ribbon of Light)**  
  开放时间：无固定时间，但会因街道霸占事件而临时封闭机动车道（尤其夜间），随机且无法预知
- `sixth-street-viaduct` **11. Sixth Street Viaduct (Ribbon of Light)**  
  预约：不需预约
- `baldwin-hills` **12. Baldwin Hills Scenic Overlook**  
  门票：公园本身无入园门票
- `baldwin-hills` **12. Baldwin Hills Scenic Overlook**  
  预约：不需预约
- `santa-monica-pier` **13. Santa Monica Pier · Pacific Park · West Coaster · Route 66 End of the Trail**  
  预约：不需预约
- `venice-canals` **14. Venice Canal Historic District**  
  预约：不需预约
- `muscle-beach` **15. Muscle Beach Venice · Venice Boardwalk · Venice Sign**  
  预约：不需预约
- `wayfarers-chapel` **16. Wayfarers Chapel** **[标记为不可抵达]**  
  开放时间：原址与周边庭园全部封闭
- `wayfarers-chapel` **16. Wayfarers Chapel** **[标记为不可抵达]**  
  门票：—
- `wayfarers-chapel` **16. Wayfarers Chapel** **[标记为不可抵达]**  
  预约：—
- `point-vicente` **17. Point Vicente Lighthouse · Interpretive Center**  
  预约：不需预约
- `point-fermin` **18. Point Fermin Lighthouse · Point Fermin Park · Sunken City**  
  预约：不需预约。灯塔内部仅限导览参观，13:00、14:00、15:00 三场先到先得，每场限 8 人（空间狭小），约 45–60 分钟。大型团体或私人导览须提前致电 (310) 241-0684

### socal / Laguna

- `heisler` **1. Heisler Park Beach Stairway**  
  预约：不需要
- `victoria-pirate` **2. Victoria Beach & Pirate Tower (La Tour)**  
  预约：不需要
- `treasure-island` **3. Treasure Island Beach**  
  预约：不需要

### socal / San Diego

- `gliderport` **1. Torrey Pines Gliderport**  
  预约：不需要，观景免费
- `mount-soledad` **4. Mount Soledad National Veterans Memorial**  
  预约：不需要
- `sunset-cliffs` **5. Sunset Cliffs Natural Park, Point Loma**  
  开放时间：公园全天；注意车辆宵禁
- `sunset-cliffs` **5. Sunset Cliffs Natural Park, Point Loma**  
  预约：不需要
- `uss-midway` **6. USS Midway Museum**  
  预约：非必需但强烈建议：官网预订每张便宜 $2 并可跳过入场排队。现役军人优惠必须现场票亭办理

### socal / 沙漠支线

- `salton-sea` **1. Salton Sea · Bombay Beach**  
  开放时间：Bombay Beach 无门禁；Ski Inn 营业时间不定，建议先电话
- `salton-sea` **1. Salton Sea · Bombay Beach**  
  预约：三处均无需预约
- `salvation-mountain` **2. Salvation Mountain, Niland**  
  开放时间：日出至日落，全年 365 天
- `salvation-mountain` **2. Salvation Mountain, Niland**  
  预约：不需要
