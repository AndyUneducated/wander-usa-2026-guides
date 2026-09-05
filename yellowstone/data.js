/* 本文件由 tools/assemble.py 从 yellowstone/parts/*.js 自动生成，请勿直接编辑。
   要改内容请改对应片段后重新运行：python3 tools/assemble.py --region yellowstone
   景点已按纬度从北到南排序，n 字段为自动编号，与地图针脚一一对应。 */
var REGIONS = [
  {
    "id": "ys-mammoth-lamar",
    "name": "Yellowstone · Mammoth 与北环（Lamar Valley）",
    "navName": "Mammoth 与 Lamar",
    "color": "#ff8a3d",
    "lead": "这是整个 Yellowstone 在 9 月底至 10 月底唯一<strong>不受季节性封路影响</strong>的区域，也是本次行程里唯一一个「越晚去越占便宜」的子地区。官方口径原文：<strong>“The only road generally open year-round to regular vehicles is from the North Entrance at Gardiner, Montana, through the park to Cooke City, Montana (via Tower Junction).”</strong>换句话说，当 10 月 12 日 Dunraven Pass 关闭、10 月 31 日主环全线对汽车关闭之后，<strong>Mammoth—Tower—Lamar—Cooke City 这条线仍然照常通车</strong>，Mammoth Hot Springs Hotel 也一路开到 2027 年 3 月。所以「10 月下旬还能不能去北环」这个问题的答案是：能，而且那时人最少。真正会咬人的不是封路，是三件更琐碎的事——<strong>Mammoth 加油站 10 月 4 日关、Tower-Roosevelt 加油站 9 月 6 日就已经关、Roosevelt Lodge 9 月 7 日已经关</strong>，以及 Mammoth 出门半英里那座 Gardner River High Bridge 全天候单车道放行、每次最多等 15 分钟。这直接决定你几点出门才能赶上 Lamar 的日出。摄影上，本区的核心是两个完全不同的题材：<strong>Mammoth 的白色石灰华（曝光难题）</strong>与<strong>Lamar 的野生动物与晨雾（距离难题）</strong>，两者对器材的要求几乎没有交集。",
    "callouts": [
      {
        "type": "warn",
        "title": "2026 道路封闭日期表（官方 9/1 更新，出发前必须复查）",
        "html": "<p>以下全部取自 NPS 官方 Park Roads 页（nps.gov/yell/planyourvisit/parkroads.htm，最后更新 2026 年 9 月 1 日）。<strong>道路当天 08:00 开放，关闭日期随天气可提前。</strong></p><ul><li><strong>North Entrance（Gardiner）→ Mammoth → Tower → Lamar → Northeast Entrance（Cooke City）：全年开放</strong>。这是全园唯一一条常年对普通汽车开放的路，本子地区 8 个点全在这条线上</li><li><strong>Canyon Village ↔ Tower Fall（Dunraven Pass，经 Mount Washburn）：5/22 – <em>10 月 12 日</em></strong>。全园海拔最高的一段，最早关。10/12 之后从 Canyon north 上不来，只能绕 Norris–Mammoth</li><li><strong>Tower-Roosevelt ↔ Tower Fall：5/8 – <em>10 月 31 日</em></strong>。注意这是和 Dunraven 分开列的独立路段——<strong>Dunraven 10/12 关闭后，Tower Fall 本身仍可从北侧（Tower Junction）抵达到 10/31</strong>，这一点极易搞混</li><li><strong>Mammoth ↔ Norris、Norris ↔ Canyon、West Entrance ↔ Madison、Madison ↔ Old Faithful：4/17 – <em>10 月 31 日</em></strong></li><li><strong>South / East Entrance 各段、West Thumb ↔ Old Faithful（Craig Pass）：5/1 或 5/8 – <em>10 月 31 日</em></strong></li><li><strong>Beartooth Highway（US-212）与 Chief Joseph Scenic Byway（WY-296）：5/22 – <em>10 月 12 日</em></strong>。10/12 后 Cooke City 变成死胡同，只能原路退回 Lamar，这会影响你从东侧进出的所有方案</li></ul><p><strong>请不要沿用「主环在 11 月第一个周一关闭」这个流传很广的说法。</strong>2026 年的公布日期是 <strong>10 月 31 日（周六）</strong>，比「11 月第一个周一」（11/2）早两天。</p><p>两条支线土路的关闭日期是本页<strong>唯一未能从官方渠道拿到确切日期</strong>的项目，见下面 Blacktail Plateau Drive 与 Mammoth Hot Springs Terraces 两个景点的说明。</p>"
      },
      {
        "type": "warn",
        "title": "两座桥在施工，会直接吃掉你 45 分钟的日出提前量",
        "html": "<ul><li><strong>Gardner River High Bridge</strong>（Mammoth 东南 0.5 英里，去 Tower 的必经之路）：<strong>单车道放行，最长等 15 分钟，一天 24 小时、一周 7 天，从 4/13 持续到 2026 年 10 月下旬</strong>。更麻烦的是：<strong>9 月 7 日之后会有 5 次整夜完全封闭（21:00–04:00）</strong>，官方称会提前通知。一旦撞上，你当天就到不了 Lamar 拍日出——这是本区最需要提前查证的单点</li><li><strong>Yellowstone River Bridge</strong>（Northeast Entrance Road，Tower Junction 东侧）：<strong>铺装作业，最长等 30 分钟，持续到 11 月</strong>。新的 1,285 英尺主跨已经通车，2026 年剩余工程是观景台、拆除 1961 年旧桥与场地复原；Tower Junction 路口已向东南移了约 700 英尺，旧导航数据可能给错路口</li><li>全园还有<strong>碎石封层（chip sealing）</strong>作业，随机路段最长等 30 分钟</li></ul><p><strong>实操结论：从 Mammoth 到 Lamar 的 Confluence 路肩约 33 英里，限速 45 mph，正常 60–65 分钟；把两座桥的等待加满则是 1 小时 45 分钟到 2 小时。</strong>要赶 9 月 25 日 06:41 的民用曙光，<strong>04:45–05:00 就得从 Mammoth 出发</strong>，从 Gardiner 再往前推 20 分钟。路况电话录音 (307) 344-2117；发短信 82190 到 888-777 可订阅路况提醒。</p><p>另外两件已核实的好消息：<strong>Mammoth ↔ Norris 段 2026 年没有任何施工项目</strong>（那个多年重建工程已不在本年度延误清单上）；North Entrance Road 目前走的仍是 2022 洪水后临时改建的 <strong>Old Gardiner Road</strong>，永久新路（NPS 首选 “Center Alignment” 方案）预计 <strong>2027 年才动工</strong>，要修 5 个施工季，<strong>所以 2026 年秋天不会因为这个工程封路</strong>。</p>"
      },
      {
        "type": "warn",
        "title": "住宿 / 加油 / 商店 2026 关闭日期：加油是真会出事的那一项",
        "html": "<p><strong>加油（最要命）：</strong></p><ul><li><strong>Tower-Roosevelt 加油站：6/5 – 9 月 6 日</strong>。整个 9 月底至 10 月窗口内全程关闭</li><li><strong>Mammoth 加油站：5/15 – 10 月 4 日</strong>。10 月 4 日之后园内北部没有加油站</li><li>Canyon 4/24 – 10/31；Old Faithful Upper 5/1 – 10/18；Fishing Bridge 5/8 – 10/11；Grant 5/29 – 10/13</li><li>NPS 表格在站名后标注 “fuel available 24/7, year-round”（指刷卡自助泵），但同时又给出上述营业日期，两者口径矛盾。<strong>10 月 4 日之后 Mammoth 的刷卡泵是否仍供油，未能从官方渠道确认。</strong>不要赌——<strong>一律在 Gardiner（北门外）或 Cooke City 加满再进园</strong>。Lamar Valley 全线没有任何加油点</li></ul><p><strong>住宿：</strong></p><ul><li><strong>Mammoth Hot Springs Hotel &amp; Cabins：4/24/2026 – 2027 年 3 月 8 日</strong>（客房最后一晚 3/7）。全园营业期最长的酒店，<strong>整个 9 月底至 10 月底窗口都开着</strong>，是北环唯一的园内住宿</li><li><strong>Roosevelt Lodge Cabins：6/5 – 9 月 7 日（小木屋 9/6）。窗口开始前就已经关了</strong>，而且它是离 Lamar 最近的园内住宿——这一条基本决定了北环只能住 Mammoth 或园外的 Gardiner</li><li>Canyon Lodge 客房 10/24（餐饮 10/25，小木屋 10/4）；Old Faithful Snow Lodge 客房 10/24；Lake Yellowstone Hotel 10/10；Grant Village 10/10</li><li>Old Faithful Inn：NPS 表格写客房到 <strong>10/18</strong>，特许经营商官网写 <strong>10/12</strong>，<strong>两处官方口径不一致，未能核实哪个为准</strong></li></ul><p><strong>营地与商店：</strong>Mammoth Campground <strong>全年开放</strong>；Slough Creek Campground 6/15 – <strong>10/12</strong>；Tower Fall Campground 5/22 – <strong>9/27</strong>；<strong>Pebble Creek Campground 因 2022 洪灾无限期关闭</strong>。Tower Fall General Store 关到 <strong>10/4</strong>；Mammoth Terrace Grill 关到 <strong>10/12</strong>。<strong>Mammoth General Store、Albright Visitor Center、Mammoth 邮局与 Mammoth 诊所全年开放</strong>。</p>"
      },
      {
        "type": "warn",
        "title": "熊：9 月底至 10 月正是 hyperphagia，熊喷雾不是可选项",
        "html": "<p><strong>hyperphagia</strong> 指熊在入蛰前的疯狂进食期。NPS 原文：这段时间熊<strong>每天可增重 3 磅以上（more than three pounds per day）</strong>，9–10 月最重要的高热量食物是 whitebark pine 松子，松子歉收的年份熊会转向草根、浆果和<strong>有蹄类尸体</strong>——而 Lamar/Tower 一带正是全园尸体密度最高的区域。<strong>熊会在开阔谷地和步道上活动，不只在深山里。</strong></p><p><strong>硬规定：</strong>距熊与狼<strong>至少 100 码（91 米）</strong>，距其他一切动物（含 bison、elk）<strong>至少 25 码（23 米）</strong>。熊冲锋时<strong>站住别跑，等它进到 60 英尺（18 米）以内再喷</strong>；若发生接触，趴下护颈装死，背包不要卸。</p><p><strong>哪里买 / 哪里租：</strong></p><ul><li>购买：<strong>Mammoth General Store（全年开放）</strong>最稳；Gardiner 镇上也有多家</li><li>租赁（特许经营商 Bear Aware，$16 起、封顶 $28）：园内只有两处取件点，<strong>Canyon Visitor Education Center 旁的 kiosk</strong> 与 <strong>Old Faithful 的 yurt</strong>，每日 09:00–17:30。关闭日期两边口径略有出入：NPS 表格写 Canyon 到 <strong>10/10</strong>、Old Faithful 到 <strong>10/3</strong>；Bear Aware 官网写 Canyon 到 <strong>10/11</strong>、Old Faithful 到 <strong>10/4</strong>。<strong>两处都在园区内部，而且都不在北环上</strong>——住 Mammoth 的话专程去租不划算，直接在 Mammoth General Store 买一罐</li><li>Mammoth 与 Tower-Roosevelt 的加油站是 Bear Aware 的<strong>还件点</strong>，但如前所述它们分别 10/4 和 9/6 就关了</li><li><strong>熊喷雾不能带上飞机（托运也不行）</strong>，只能落地后在当地买或租</li></ul><p><strong>熊管理区（Bear Management Area）对本子地区在秋季没有影响，这一点已核实：</strong>Blacktail BMA 的封闭期是 <strong>3/10 – 6/30</strong>，秋天不封；Antelope BMA 封闭期 3/10 – 11/10，但官方明确 <strong>“The Dunraven Road, Grand Loop Road, Chittenden Road, and related turnouts are open”</strong>，即路面与路肩照常，只是不能徒步进入 Antelope Creek 流域；Washburn BMA 封闭期 8/1 – 11/10，影响的是 Mount Washburn 一带的徒步，不涉及 Lamar。<strong>Lamar Valley 与 Slough Creek 的路肩观景在秋季不受任何 BMA 限制。</strong></p>"
      },
      {
        "type": "info",
        "title": "日出日落钟点、谷地朝向几何、气温与电池（可直接照抄）",
        "html": "<p><strong>时区：Mountain Time。夏令时到 2026 年 11 月 1 日（周日）才结束——落在本窗口之外，所以 9 月底到 10 月 31 日全程都是 MDT（UTC−6），不需要做任何换算。</strong></p><ul><li><strong>Mammoth（44.977, −110.700）</strong>：9/25 民用曙光 <strong>06:43</strong>／日出 <strong>07:12（方位 90°）</strong>／日落 <strong>19:17（方位 270°）</strong>／民用暮光 19:46；10/12 07:03／07:33（99°）／18:45（261°）／19:15；10/22 07:16／<strong>07:46（105°）</strong>／<strong>18:28（256°）</strong>／18:58；10/31 07:28／07:59（109°）／18:14（251°）／18:45</li><li><strong>Lamar Valley Confluence（44.898, −110.240）</strong>：9/25 06:41／07:10／19:15／19:44；10/22 07:14／<strong>07:44</strong>／18:26／18:56</li><li><strong>重要修正：以上是平地平线时刻。</strong>Lamar 谷底南有 Specimen Ridge、北有 Druid Peak，<strong>阳光真正打到谷底通常比上表的日出晚 30–50 分钟</strong>，傍晚也提前同样多进入阴影（推算，非实测）。但要拍逆光晨雾，你需要的恰恰是<strong>民用曙光到日出之间</strong>那段谷底还没被直射光打到的时间——所以按上表的曙光时刻到位是对的</li></ul><p><strong>谷地几何（由 OSM 河道坐标推算）：Lamar Valley 主轴方位角约 118°／298°（东南偏东—西北偏西）。</strong>这个数字很有用：</p><ul><li>9/25 日出方位 <strong>90°</strong>，与谷轴差 <strong>28°</strong>——太阳从谷地左前方（北侧）升起，是<strong>侧逆光</strong>，适合给南岸 Specimen Ridge 的坡面做立体感</li><li>10/22 日出方位 <strong>104°</strong>，与谷轴只差 <strong>14°</strong>；10/31 是 <strong>109°</strong>，只差 <strong>9°</strong>。<strong>也就是说越接近 10 月底，太阳越是沿着谷地的轴线正对着你升起。</strong>站在任一路肩朝<strong>东南偏东（118°）看向上游</strong>，就是近乎正轴的逆光——这正是「河雾发光 + bison 轮廓光 + 呼吸白气」那张片子的成立条件。<strong>本区最强的一张照片，几何上属于 10 月下旬而不是 9 月。</strong></li><li>日落方位 9/25 是 270°、10/22 是 256°，与谷地下游轴（298°）差 28–42°，光从西南方斜切进来，先熄谷底、后熄北岸山脊——傍晚的好光在<strong>山脊上</strong>而不是谷底</li></ul><p><strong>气温（NOAA 30 年常态值，Mammoth 气象站海拔 6,194 英尺／1,888 米）：</strong>9 月均高 <strong>19.9°C</strong>／均低 <strong>2.8°C</strong>，月降雪 0.5 英寸；10 月均高 <strong>13.2°C</strong>／均低 <strong>−1.4°C</strong>，月降雪 <strong>3.7 英寸</strong>。<strong>Lamar 谷底海拔更高（约 6,500 英尺）且是冷空气汇集的盆地，日出前常比 Mammoth 再低 5–10°C</strong>（推算）：9 月底 −2 至 −5°C，10 月下旬 −10°C 上下是常态。</p><p><strong>这对拍摄有两个具体后果：</strong></p><ul><li><strong>好的一面：越冷，Mammoth 的蒸汽越壮观</strong>，Lamar 的河雾也越厚。气温低于 −5°C 时 Mammoth 台地的蒸汽量足以改变整个画面的性质。但要注意反效果——<strong>最冷的无风早晨蒸汽会把台地整个糊掉</strong>，什么都拍不到。理想是「冷 + 有微风」，或者站在上风侧</li><li><strong>坏的一面：锂电池在 −10°C 下可用容量通常掉 30–50%</strong>。室温显示满格的电池在 Lamar 的路肩上可能 40 分钟就趴窝。<strong>带 4–6 块，全部贴身放在冲锋衣内层口袋，用一块换一块，换下来的捂回去还能复活。</strong>另一件必须做的事：从 −10°C 的外面回到暖气车里或酒店房间之前，<strong>先把机身和镜头装进密封塑料袋再进门</strong>，否则冷镜片会瞬间结满冷凝水，而且水会渗进镜组，半小时内没法再用</li></ul>"
      }
    ],
    "spots": [
      {
        "id": "roosevelt-arch",
        "n": 1,
        "name": "罗斯福门",
        "en": "Roosevelt Arch, Gardiner (North Entrance)",
        "score": 3.5,
        "tldr": "1903 年玄武岩拱门，刻着「For the Benefit and Enjoyment of the People」。全年可开车穿过，秋季 rut 期门下常有公麋鹿。",
        "tags": [
          {
            "t": "免费（年票覆盖）",
            "c": "free"
          },
          {
            "t": "无需预约",
            "c": "free"
          },
          {
            "t": "全年 24 小时",
            "c": "free"
          },
          {
            "t": "单一主体，题材有限",
            "c": "risk"
          }
        ],
        "highlights": [
          "1903 年建成，设计者是 <strong>Robert Reamer</strong>——同一个人四年前刚设计了 Old Faithful Inn。拱高约 50 英尺（15 米），用的是本地开采的<strong>柱状玄武岩</strong>，粗粝的深灰色块面在低角度侧光下纹理极强",
          "门楣题字 <strong>“FOR THE BENEFIT AND ENJOYMENT OF THE PEOPLE”</strong> 出自 1872 年黄石建园法案，后来被 1916 年《国家公园管理局组织法》原样沿用。<strong>这行字是全美国家公园体系的宪法级句子，而它的物理原件就在这里</strong>",
          "为什么会有这么一座门：<strong>1903 年之前火车只到 Gardiner 西北几英里外的 Cinnabar, Montana</strong>，游客得在那里换乘马车进园。1903 年 Northern Pacific 铁路终于修进 Gardiner，需要一个够气派的仪式性门户。恰好 <strong>Theodore Roosevelt 当时正在园内游览，于是被请去为奠基石揭幕</strong>，拱门便随他的名字",
          "<strong>秋季 rut 期这里不是空景</strong>：Arch Park 的草坪是 Mammoth 之外第二个公麋鹿聚集点，傍晚常有单只公鹿在门前的草地上鸣叫。「公麋鹿 + 拱门」是本区辨识度最高的一张片子",
          "<strong>汽车全年可以直接开过拱门下方</strong>（NPS 原文 “Visitors can drive through the Roosevelt Arch year-round”），这一点在国家公园里相当罕见"
        ],
        "photo": "建筑 <strong>4/5</strong>，人文 <strong>4/5</strong>，风光 <strong>2.5/5</strong>。主体本身极上镜且有历史分量，背后是 Gallatin Range 的天际线；扣分在于它就是一个孤立物件，绕来绕去构图变化有限，而且周边是 Gardiner 的镇区与停车场，背景不干净。加分项全在光和麋鹿上。",
        "shots": [
          {
            "name": "Arch Park 一侧（西北面）拍题字立面 —— 主机位",
            "park": [
              45.03012,
              -110.70981
            ],
            "view": [
              45.02995,
              -110.70966
            ],
            "desc": "<strong>刻字的那一面朝西北（法线方位约 305°，由 OSM 拱门几何推算）。</strong>所以它<strong>只在傍晚拿到直射光</strong>：9/25 日落 19:17（方位 270°，与立面差 35°）、10/22 日落 18:28（方位 256°，差 50°）。<strong>方位差越大越是掠射光，玄武岩的粗糙面和刻字的凹槽起伏就越明显</strong>——因此 <strong>10 月下旬的傍晚反而比 9 月更适合拍这一面</strong>。最佳窗口是日落前 30 分钟到日落后 15 分钟。镜头 24–70mm 拍整体，70–200mm 单独压题字。<strong>拍完别走，蓝调时段（日落后 20–40 分钟）天空会压成深靛蓝，和暖色的石头形成很好的冷暖对比。拱门夜间是否有人工照明未能从官方渠道确认，请自行观察。</strong>"
          },
          {
            "name": "园区一侧（东南面）拍清晨正面光",
            "view": [
              45.02923,
              -110.70814
            ],
            "desc": "站在拱门东南侧的 North Entrance Road 路肩（此点为 OSM 道路节点，非正式停车位，<strong>请把车停回 Arch Park 再走过来，不要停在路面上</strong>，约 150 米）。这一面法线约 125°：<strong>9/25 日出方位 90°（差 35°，掠射）、10/22 日出方位 105°（差仅 20°，接近正面）</strong>。也就是 <strong>10 月下旬的日出光几乎正打在这一面上</strong>，07:46 之后 40 分钟内是暖金色平光。16–35mm 贴近仰拍可以把整个 Gallatin Range 的山脊收进门洞上方。注意从这个位置看拱门的视线方位是 305°，而太阳在你身后——<strong>是顺光不是逆光，不要指望穿门的日芒</strong>。"
          },
          {
            "name": "门洞下方仰拍 / 车流穿门",
            "view": [
              45.02949,
              -110.70866
            ],
            "desc": "走到拱门正下方仰拍拱券结构与石缝，广角 16–24mm，任何时段都可以拍（门洞内是常年阴影，光比反而好控制）。另一个变化：退到 50–80 米外用 <strong>135–200mm 压缩</strong>，等一辆车从门洞里驶出，用长焦把车、门洞和背后的山压在同一平面上。<strong>门洞是双向通车的实际路面，站在中间拍要有人望风，不要为了构图逗留。</strong>"
          }
        ],
        "access": {
          "book": "不需预约。Yellowstone 全园不需要车辆预约（NPS 原文：“vehicle reservations are not needed”）",
          "ticket": "<strong>持 America the Beautiful 年票免费</strong>。年票直接覆盖入园费，并且<strong>豁免非美国居民 16 岁以上每人 $100 的附加费</strong>（NPS 原文：该附加费 “unless admitted with an Annual or America the Beautiful Pass”）。未持票者私家车 $35／7 天。<strong>持票人必须本人在场并出示带照片的证件</strong>，收据或照片不能替代实体票",
          "hours": "官方口径：<strong>“Yellowstone is open 24 hours per day, 365 days per year”</strong>，入口在开放季不设夜间关卡，可 24 小时进出。拱门本身在北门外的 Gardiner 镇内，<strong>不受任何园内路段季节封闭影响，全年可达</strong>",
          "parking": "<strong>Arch Park 有免费停车与野餐区</strong>（45.03012, −110.70981），紧邻拱门。Gardiner 镇内街边停车免费。旺季与 rut 期傍晚车位会满，但 10 月已明显宽松",
          "walk": "停车到拱门 <strong>1–2 分钟／约 80 米</strong>，全程平地铺装。建议停留 30–45 分钟"
        },
        "notes": [
          "<strong>这里在国家公园边界之外、Gardiner 镇内，但麋鹿的 25 码（23 米）距离规定同样适用</strong>——rut 期公鹿会在镇区街道和草坪上活动，从旅馆门口出来时先看拐角",
          "进园必经的 North Entrance Road 是 2022 年洪水后临时改建的 <strong>Old Gardiner Road</strong>：铺装完好但坡陡弯多，冬季与雨雪天要慢。永久新路 2027 年才开工，2026 年秋不会因此封路",
          "<strong>熊喷雾请在 Gardiner 或园内 Mammoth General Store 购买</strong>（不能随飞机携带），本区所有下车徒步的点位都在熊活动区内",
          "拱门是国家历史地标的一部分，<strong>禁止攀爬、禁止在石面上做任何支撑</strong>；三脚架放在地面上使用没有问题",
          "Gardiner 是本区最可靠的补给点：<strong>加油、餐饮、住宿全年营业</strong>。考虑到园内 Mammoth 加油站 10 月 4 日就关，<strong>每次进园前在 Gardiner 加满是本区的标准动作</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/72/Sunrise_at_Roosevelt_Arch_%2833691940371%29.jpg",
            "cap": "日出时的 Roosevelt Arch · Yellowstone National Park (NPS) / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Roosevelt_Arch%2C_Yellowstone_gate_%2895954p%29.jpg",
            "cap": "拱门与 Gardiner 一侧全景 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Inscription_on_Roosevelt_Arch_%2833641927502%29.jpg",
            "cap": "门楣题字特写 · Yellowstone National Park (NPS) / 公有领域"
          }
        ]
      },
      {
        "id": "mammoth-elk-rut",
        "n": 2,
        "name": "猛犸村 · 麋鹿发情季",
        "en": "Mammoth Hot Springs Village · Elk Rut",
        "score": 4.5,
        "tldr": "9 月至 10 月中，公麋鹿在 Fort Yellowstone 的草坪上占群鸣叫。全球最容易接近的大型有蹄类求偶场，但 25 码红线由 ranger 现场执法。",
        "tags": [
          {
            "t": "免费（年票覆盖）",
            "c": "free"
          },
          {
            "t": "9 月中下旬为峰值",
            "c": "risk"
          },
          {
            "t": "25 码硬性距离",
            "c": "risk"
          },
          {
            "t": "需 400mm 以上",
            "c": "risk"
          },
          {
            "t": "公鹿会主动攻击",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Rut（发情期）时间：9 月初到 10 月中，峰值在 9 月中下旬。</strong>公鹿会圈起数头至十几头母鹿组成 harem，全天守群、驱赶对手、频繁鸣叫（bugle）。<strong>10 月下旬 rut 已明显转弱</strong>，鹿群仍在但鸣叫和角斗大幅减少——如果 rut 是你的主要目标，日期越靠近 9 月底越好",
          "<strong>为什么偏偏聚在这一小片草地上</strong>：Fort Yellowstone 是美国陆军 1891–1913 年间管理黄石时建的营区，那些红顶石砌建筑现在仍是园区总部与员工宿舍，而当年为营区铺设并持续灌溉的草坪，<strong>在旱季末期是方圆几十公里内唯一还绿着的高质量草料</strong>。加上建筑之间视野开阔、便于公鹿监视全场，以及人的存在客观上形成了一道对狼与熊的屏障——三个因素叠加，才有了这个极不自然的场面",
          "<strong>硬性距离是 25 码（23 米），NPS 的比喻是「两辆全尺寸巴士的长度」</strong>，在 Mammoth 与 Gardiner 同样适用，包括你停车的位置。<strong>rut 期 ranger 会现场管控</strong>：疏导车流、划定观看范围、要求人群后退或转移，必须服从",
          "<strong>NPS 对摄影者的官方建议是使用 300mm 或更长的镜头</strong>（原文 “Lenses with focal lengths of 300mm or greater are recommended for adequate reach”），并明确 “Give them room, use your zoom.”。这不是客气话——<strong>公鹿在 rut 期会主动冲撞车辆和行人，攻击可以毫无预兆</strong>，NPS 提示从建筑物出来前要先看拐角",
          "主要聚集点有三处：<strong>Albright Visitor Center 与 Officer’s Row 前的草坪</strong>、<strong>Mammoth Hot Springs Hotel 与邮局周边</strong>、以及园外 <strong>Gardiner 的 Arch Park</strong>；Gardner River 沿岸也常见"
        ],
        "photo": "野生动物 <strong>5/5</strong>，人文 <strong>4/5</strong>，风光 <strong>2/5</strong>。这是全世界少有的「可以从停车场用长焦拍到完整求偶行为」的地点，行为密度极高，而且历史建筑做背景让画面有别处没有的叙事性。扣分在于背景经常出现汽车、路灯、垃圾桶和游客——<strong>本机位真正的难点不是拍到鹿，是找到一个背景干净的角度</strong>。",
        "shots": [
          {
            "name": "Albright Visitor Center 与 Officer’s Row 草坪 —— 主机位",
            "park": [
              44.97628,
              -110.70029
            ],
            "view": [
              44.97643,
              -110.69954
            ],
            "desc": "<strong>最佳时段：日出后 1 小时内与日落前 1 小时至暮光</strong>（9/25 为 07:12–08:15 与 18:15–19:46；10/22 为 07:46–08:50 与 17:30–18:58）。鸣叫在晨昏和夜间最频繁，正午基本只有卧着反刍的鹿群。<strong>焦段：400mm 是主力。</strong>草坪上的鹿实际距离多在 40–80 米——在 60 米处用全画幅 400mm，一头体长约 2.4 米的公鹿占画面宽度约 44%，正好是全身带环境的构图；<strong>要拍头角特写则需要 600mm 或 400mm 加裁切</strong>。70–200mm 留给「公鹿 + Fort Yellowstone 红顶建筑」的环境叙事。<strong>拍鸣叫要逆光</strong>：冷早晨公鹿呼出的白气只有在背光下才看得见，所以清晨请站在鹿群的西侧朝东拍，让太阳在鹿的后方。快门 1/1000 秒以上防止甩头糊掉，连拍配合眼部对焦。<strong>把车当作掩体和挡板是这里最实用的技巧</strong>——摇下车窗架豆袋，既安全又不会惊动鹿群。"
          },
          {
            "name": "Mammoth Chapel 与酒店后侧草坪",
            "view": [
              44.97278,
              -110.69782
            ],
            "desc": "比访客中心一侧安静，游客少，<strong>背景是石砌小教堂与草坡，比停车场干净得多</strong>。同样是晨昏两个窗口。这里地势略有起伏，<strong>可以找到俯角，把地面的杂物压出画面</strong>，是本区最容易拍到干净背景的位置。400mm 为主。<strong>切勿站在公鹿与它的 harem 之间，也不要挡在两头对峙的公鹿之间</strong>——这两种位置是被攻击概率最高的场景。"
          },
          {
            "name": "Gardiner · Arch Park（公鹿 + 拱门）",
            "view": [
              45.03012,
              -110.70981
            ],
            "desc": "在园外 Gardiner 镇，距 Mammoth 约 5 英里／15–20 分钟车程。<strong>唯一能把「鸣叫的公鹿」与「Roosevelt Arch」放进同一张照片的位置</strong>，最佳是傍晚（拱门西北面此时有掠射暖光，见上一个景点的光线分析）。需要 <strong>200–400mm</strong> 把鹿与拱门压到同一平面上，站位要退得足够远才能形成压缩感。这个组合可遇不可求，<strong>不要为了等它而在傍晚原地耗掉两小时</strong>，把它当成从 Gardiner 进出园时顺路检查一眼的机会。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>持 America the Beautiful 年票免费</strong>",
          "hours": "<strong>“Yellowstone is open 24 hours per day, 365 days per year”</strong>，草坪与街区无门禁。<strong>Albright Visitor Center 全年开放</strong>（每日营业时间随季节调整，进园当天可在门口确认，也是问询台地活跃度与路况的最佳地点）。Mammoth 邮局、Mammoth General Store、Mammoth Medical Clinic 均<strong>全年开放</strong>",
          "parking": "Albright Visitor Center 门前、酒店周边与村内各处均有免费停车。<strong>rut 期高峰 ranger 可能封闭部分路段与停车位以疏散人群</strong>，按现场指示停放，绝对不要为了拍照停在行车道上",
          "walk": "<strong>基本为零</strong>——各机位都在停车位视线范围内，步行 1–3 分钟。这是本区唯一一个「可以全程在车边完成」的野生动物机位"
        },
        "notes": [
          "<strong>25 码（23 米）是硬性规定，不是建议。</strong>若麋鹿主动向你靠近，你有义务后退——「是它过来的」不构成免责",
          "<strong>被公鹿冲锋时：找一个坚实屏障（车辆、树木、建筑）挡在中间。附近没有屏障时 NPS 的建议是跑</strong>（这与遇熊的处置完全相反，不要混淆）",
          "<strong>严禁使用任何鹿哨或播放鸣叫录音。</strong>模仿 bugle 会把公鹿直接引到你面前，既违法又极度危险，而且会干扰整个鹿群的繁殖行为",
          "<strong>不要为了拍摄绕到鹿群背后或包抄。</strong>包围与追逐会造成应激，在 rut 期还会触发公鹿的防御性攻击；这也是 ranger 现场最常制止的行为",
          "离开旅馆、访客中心、卫生间等建筑物时<strong>先探头看拐角</strong>——NPS 特别列出这一条，因为门口撞见公鹿是 Mammoth 最常见的近距离遭遇场景",
          "<strong>本区同时是熊活动区，9 月底至 10 月为 hyperphagia 期，熊会被鹿群和潜在的尸体吸引到村庄边缘。</strong>在村内活动风险低，但只要离开铺装区就应携带熊喷雾（Mammoth General Store 全年有售），距熊与狼保持 100 码（91 米）",
          "<strong>Mammoth Hot Springs Hotel 开到 2027 年 3 月 8 日，是整个 rut 期唯一的园内住宿选择。</strong>住这里的额外好处是：草坪就在窗外，不用为了晨昏光线在黑暗中开长途山路"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Bull_elk_bugling%2C_Mammoth_Hot_Springs_%2826095965298%29.jpg",
            "cap": "Mammoth 草坪上鸣叫的公麋鹿 · Yellowstone National Park (NPS) / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Bull_elk_with_harem%2C_Mammoth_Hot_Springs_%2826095968758%29.jpg",
            "cap": "公鹿与它的 harem · Yellowstone National Park (NPS) / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/A_bull_elk_bugles_in_Arch_Park_at_sunset_%2848795777356%29.jpg",
            "cap": "Gardiner 的 Arch Park，公鹿在日落时鸣叫 · Yellowstone National Park (NPS) / 公有领域"
          }
        ]
      },
      {
        "id": "mammoth-terraces",
        "n": 3,
        "name": "猛犸热泉台地（下台地栈道 + 上台地环路）",
        "en": "Mammoth Hot Springs Terraces (Lower Terraces & Upper Terrace Drive)",
        "score": 4.5,
        "tldr": "世界最大的碳酸钙沉积泉。白色石灰华在直射光下是严重曝光陷阱，傍晚与阴天远好于正午；活跃泉眼逐年变，出发前必须现场确认。",
        "tags": [
          {
            "t": "免费（年票覆盖）",
            "c": "free"
          },
          {
            "t": "全年 24 小时",
            "c": "free"
          },
          {
            "t": "白色高光极难曝光",
            "c": "risk"
          },
          {
            "t": "活跃泉眼年年变",
            "c": "risk"
          },
          {
            "t": "上台地环路冬季关闭",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Terrace Mountain 是已知全世界最大的碳酸钙沉积温泉（largest known carbonate-depositing spring in the world）。</strong>地下的石灰岩被热水溶解，钙离子带到地表重新沉淀成石灰华（travertine），沉积速度快到<strong>几天之内就能看出变化</strong>，一年可以长出几十厘米",
          "<strong>这里的活跃状态每年都不一样，而这直接决定你能拍到什么。</strong>NPS 官方 FAQ 的说法是：泉水总量基本恒定，只是「水走阻力最小的路」，<strong>任何时刻大约只有 10% 的水在地表，另外 90% 在地下</strong>，所以某个泉眼干掉不等于系统衰退，只是水改道了",
          "<strong>具体到几个著名泉眼（这是本条最需要现场核实的信息）：</strong><strong>Minerva Terrace</strong>——1885 年 Frank J. Haynes 拍下它时就在流，长期是台地上最上镜的一处，但<strong>自 1980 年代起活动持续衰退，2000 年代初完全停止，此后基本维持干涸</strong>，NPS 官方页对它的措辞是 “Some years, they are dry.”；<strong>Canary Spring</strong>——以反复无常著称，历史记录里 1884 年 7 月活跃、10 月停摆、1885 年又复活，1914–1924 停、1954–1984 活，NPS 近年也公开发布过它突然转为休眠的对比照；<strong>Palette Spring 与 Cleopatra Spring</strong> 是下台地近二十年<strong>最稳定的两处</strong>，通常仍有明显水流与热噬菌群的橙褐色条带。<strong>以上为历史趋势，不等于你到访当天的状态——请把 Albright Visitor Center 的现场问询当成必做项。</strong>",
          "<strong>Liberty Cap</strong>：下台地入口处那根 37 英尺高的灰白色石柱，是一个<strong>已经死亡的热泉喷口</strong>——泉水常年从同一个小口垂直上涌，把石灰华一圈圈堆成塔状，直到水源断掉。它是整个台地区最容易构图的单体，且<strong>形态不会年年变</strong>，是活跃度不佳时的保底题材",
          "两个台地在体验和光线上完全是两回事：<strong>下台地（Lower Terraces）</strong>是几百级栈道台阶，整体朝北／西北，从村子边缘往上爬；<strong>上台地环路（Upper Terrace Drive）</strong>是一条<strong>1 英里（1.6 公里）单行铺装环路</strong>，可以开车贴到 Orange Spring Mound 这类特征旁边，还能俯瞰 Fort Yellowstone 与 Gardner River。NPS 明确提示两个台地之间的栈道<strong>陡且有数百级台阶，心肺不佳者建议改为开车走上台地环路</strong>"
        ],
        "photo": "风光 <strong>4.5/5</strong>，微距／细节 <strong>5/5</strong>，人像 <strong>2/5</strong>。石灰华的层理、鳞片状边坝（rimstone dam）与热噬菌群的橙黄条带是极难得的抽象题材，长焦局部几乎拍不完。扣分有两处：<strong>白色石灰华在直射日光下的动态范围超出传感器能力</strong>（详见下方机位说明），以及活跃度不确定导致「网上那张照片」经常复刻不了。人像分低是因为栈道窄、背景是滚烫的泉水，不适合摆拍。",
        "shots": [
          {
            "name": "Liberty Cap 与 Palette Spring（下台地北入口）—— 主机位",
            "park": [
              44.97278,
              -110.70386
            ],
            "view": [
              44.97247,
              -110.70526
            ],
            "desc": "从下台地东北停车场下车走 <strong>2–3 分钟</strong>即到，几乎零爬升，是全区性价比最高的一处。<strong>这一片整体朝北／西北，在 9 月底至 10 月的太阳轨迹下（日出 90°–109°、日落 270°–251°）全天都拿不到正面直射光</strong>——听起来像坏事，实际是这个题材最理想的条件：<strong>柔和的天光让白色石灰华不至于死白，橙褐色的热噬菌群条带反而能出色彩。</strong>所以这个机位<strong>全天可拍，阴天更好</strong>，不必迁就日出日落。镜头：24–70mm 拍 Liberty Cap 全身加背景台地，<strong>70–200mm 才是主力</strong>，专门压 Palette Spring 流水面上的鳞片状边坝与色带。<strong>必带 CPL</strong>：湿石灰华表面有一层强反光膜，偏振镜能压掉它、让色彩浮出来，但转到全效果会连「湿润感」一起杀掉，<strong>转到六七成效果就停</strong>。"
          },
          {
            "name": "Minerva Terrace 层理（下台地中段）",
            "view": [
              44.97178,
              -110.70516
            ],
            "desc": "沿栈道再向上约 5 分钟。<strong>请先接受一个前提：这里近二十年大概率是干的。</strong>但干涸状态自有价值——NPS 自己的解说词就是 “In dry areas, you can clearly see the many layers and the varying depths”，<strong>没有水膜遮挡时，层理和不同深度的沉积厚度反而看得最清楚</strong>，是拍黑白抽象和纹理特写的好素材。<strong>70–200mm 或 100mm 微距</strong>，找侧光时段（清晨或傍晚天光有方向性时）拍浮雕感。如果你到的那天它恰好在流——那是运气，立刻改用长焦拍色带，别犹豫。"
          },
          {
            "name": "Canary Spring / 主台地大观景平台（南端）",
            "park": [
              44.96839,
              -110.70775
            ],
            "view": [
              44.96697,
              -110.70548
            ],
            "desc": "<strong>这是整个台地区最具规模感的一处</strong>，巨大的阶梯状石灰华坡面向东铺开，正对 Gardner River 谷地与对面的 <strong>Mount Everts</strong>。从上台地环路的西侧停车场走栈道下来最省力（约 <strong>8–12 分钟</strong>），从下台地爬上来要多花 25 分钟和几百级台阶。<strong>朝东的坡面意味着它在日出后 07:12–10:00（9 月底）／07:46–10:30（10 月下旬）拿到直射光</strong>，低角度的光横扫过层层边坝，立体感最强——但这也是<strong>曝光最危险的时段</strong>。<strong>曝光做法（照抄）：必须拍 RAW；点测最亮的白色石灰华，把它放在 +1.7 至 +2 EV，即让高光刚好贴到直方图右缘而不溢出；用矩阵测光则需要 −1 至 −1.7 EV 曝光补偿并盯着高光警告。晴天正午（13:07 前后太阳高度 34°–45°）光比会超过 10 档，此时请直接放弃这个机位</strong>——要么改拍阴影里的细节，要么用 ±2 EV 三张包围后期合成。白平衡不要用自动：<strong>开阔阴影下自动白平衡会把白色石灰华拖成蓝色，手动设 5,200–5,600K</strong>。<strong>下午到日落（9/25 约 17:30–19:17，10/22 约 16:45–18:28）整片坡面转入阴影，天光柔和、蒸汽被侧后方的光打亮，这是本机位一天里真正的最佳时段。</strong>"
          },
          {
            "name": "Upper Terrace Drive · Orange Spring Mound",
            "park": [
              44.96538,
              -110.70807
            ],
            "view": [
              44.96648,
              -110.71491
            ],
            "desc": "1 英里单行铺装环路，沿途几处小停车位，<strong>可以把车开到离特征几十米的地方</strong>——在 10 月下旬 −10°C 的清晨，这个「不用走远」的属性价值很高。Orange Spring Mound 是一个覆满橙色藻膜的圆丘状泉体，形态独特且长期稳定。环路上还能俯瞰 Fort Yellowstone 的红顶建筑群与 Gardner River 谷地，<strong>是本区唯一能把「人文建筑 + 地热地貌」放进同一张画面的位置</strong>，用 70–200mm 压缩。<strong>关闭日期是本页最大的不确定项：NPS 只说 “open only during the summer season”，没有公布 2026 年的具体关闭日期，未能从官方渠道确认。</strong>已知的是一旦季节性除雪停止，这条路就转为滑雪／雪鞋线路。<strong>请把它当成「10 月中之后随时可能关」来规划</strong>，出发当天在 Albright Visitor Center 问一句即可，关了的话下台地栈道完全可以替代。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>持 America the Beautiful 年票免费</strong>，无额外费用",
          "hours": "官方口径 <strong>“Yellowstone is open 24 hours per day, 365 days per year”</strong>，台地栈道本身无门禁、无关门时间，可以拍到暮光再走。所在的 Mammoth 位于全年开放的北环上，<strong>不受 10/12 与 10/31 两个封路节点影响</strong>。<strong>Upper Terrace Drive 为季节性开放，2026 年具体关闭日期未能从官方渠道确认</strong>。园区路况录音 (307) 344-2117",
          "parking": "下台地沿栈道有四处免费停车场（东北 44.97278/−110.70386、东 44.97140/−110.70316、东南 44.96946/−110.70211、西 44.96839/−110.70775），均免费不限时。<strong>秋季平日基本随到随停</strong>，Upper Terrace Drive 沿线另有数个小型 turnout",
          "walk": "Liberty Cap／Palette Spring <strong>2–3 分钟／约 150 米</strong>；Minerva Terrace 约 <strong>8 分钟</strong>；从上台地西停车场下到 Canary Spring 观景台 <strong>8–12 分钟</strong>；<strong>若从下台地一路爬到上台地，是数百级陡台阶、约 25–35 分钟，NPS 明确不建议心肺疾病者尝试</strong>。走完下台地全部栈道加上台地环路，建议预留 2.5–3.5 小时"
        },
        "notes": [
          "<strong>石灰华极脆，且栈道之外的地表可能只有几厘米厚的硬壳，下面就是滚烫的水。任何情况下不得离开栈道，不得下水。</strong>NPS 原文对能否泡温泉的回答是 “No, the travertine features are very fragile.”",
          "<strong>栈道在 0°C 以下会结暗冰，尤其是被蒸汽常年打湿的路段</strong>——10 月的清晨这几乎是必然。带微齿冰爪或至少穿硬底防滑鞋，扛三脚架时更要注意",
          "<strong>蒸汽会在镜头前沿凝结成水膜</strong>，比想象中快得多。口袋里常备两块超细纤维布轮换，滤镜比裸镜片好擦；硫化物冷凝水对镀膜有腐蚀性，回车前把前镜片彻底擦干",
          "<strong>下台地整体朝北，秋季全天无直射光；主台地 Canary Spring 一带朝东，只有上午有直射光。所以「早上拍下台地、傍晚拍主台地」是错的，正确顺序恰好相反</strong>：上午先去 Canary Spring 抢低角度光，全天任何时候都可以补下台地",
          "<strong>本区处于熊活动区内，9 月底至 10 月为 hyperphagia 期。</strong>台地栈道位于开发区内、人多，风险相对低，但从 Upper Terrace Drive 走任何一段小路都应携带熊喷雾。<strong>Mammoth General Store 全年营业、可直接购买</strong>；距熊与狼 100 码（91 米）、距其他动物 25 码（23 米）",
          "<strong>麋鹿会走上台地栈道与停车场</strong>，rut 期尤其常见。公鹿挡在栈道上时不要绕过去，退回上一段等它自己走开",
          "Mammoth Terrace Grill <strong>10 月 12 日关门</strong>；此后园内北部的热食只剩 Mammoth Hot Springs Hotel 的餐厅（营业到 2027 年 3 月）与 Mammoth General Store"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Mammoth_Hot_Springs_%2878729p%29.jpg",
            "cap": "主台地全景，可见阶梯状边坝 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Palette_Spring_terraces_%2848021367501%29.jpg",
            "cap": "Palette Spring 的流水面与色带 · Yellowstone National Park (NPS) / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Orange_Spring_Mound_at_Mammoth_Hot_Springs.jpg",
            "cap": "上台地环路的 Orange Spring Mound · Brocken Inaglory / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "blacktail-plateau-drive",
        "n": 4,
        "name": "黑尾高原路",
        "en": "Blacktail Plateau Drive",
        "score": 3.5,
        "tldr": "6 英里单行碎石土路，穿过秋季转金的白杨林。全区唯一无法确认关闭日期的点位——请当成随时可能关，并备好路边替代方案。",
        "tags": [
          {
            "t": "免费（年票覆盖）",
            "c": "free"
          },
          {
            "t": "2026 关闭日期未能确认",
            "c": "risk"
          },
          {
            "t": "单行碎石土路",
            "c": "risk"
          },
          {
            "t": "泥泞时随时封闭",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>6 英里（9.7 公里）的单行碎石土路</strong>，由西向东穿过 Blacktail Plateau 的草甸与疏林，在 Mammoth 与 Tower–Roosevelt 之间提供一条比主路慢得多、也安静得多的替代路线。NPS 的描述是「a more rustic way to travel to Tower–Roosevelt」。经 OSM 核实：<strong>西端入口 44.95811, −110.54178，东端出口 44.92201, −110.44412，路面 gravel，单行方向为自西向东</strong>",
          "<strong>秋季的核心看点是白杨（aspen）</strong>。Blacktail Plateau 海拔约 7,000 英尺，白杨林在 <strong>9 月下旬至 10 月中旬</strong>转成金黄；海拔更低的 Mammoth 一带（6,200 英尺）会晚到 10 月初才进入盛期。<strong>单行土路的好处在这里体现得很明显：车速慢、可以随时停，而主路上根本没有地方停下来拍林间光</strong>",
          "<strong>关闭日期是本页唯一一处我无法给出确切答案的信息，必须坦白说明。</strong>NPS 官方页对这条路和 Upper Terrace Drive 的表述只有一句「Both of them are open only during the summer season」，<strong>2026 年的具体关闭日期在 NPS 的 Park Roads 页与 Operating Dates 页上都没有列出，未能从官方渠道确认。</strong>已知的两件事是：<strong>（一）它每年春季因位于 Blacktail BMA 内而开得最晚（BMA 封闭期 3/10–6/30）；（二）它在铺装路之前就会因泥泞或雪而临时关闭，且这种关闭可以发生在任何一天。</strong>按「无铺装支线比主环早关」的一般规律推断，<strong>10 月中旬之后能开的概率不高，但这是推断而非官方信息</strong>",
          "<strong>Rescue Creek 狼群（16 匹）的活动范围就覆盖 Blacktail Plateau 到 Tower Junction</strong>，这条路上有一定的遇狼可能；黑熊在这一带也很常见（Commons 上有 NPS 拍摄的「Blacktail Plateau Drive 黑熊」照片）"
        ],
        "photo": "风光 <strong>3.5/5</strong>，秋色 <strong>4/5</strong>，野生动物 <strong>3/5</strong>。白杨林的金黄配上土路的曲线是很标准也很好用的秋季题材，而且因为是单行慢速路，构图自由度远高于主路。扣分主要是<strong>可达性的不确定</strong>——一个可能进不去的点位没法给高分，以及题材在整个黄石的语境里并不稀缺。",
        "shots": [
          {
            "name": "西端入口段（从 Mammoth 方向进入）",
            "view": [
              44.95811,
              -110.54178
            ],
            "desc": "<strong>单行方向为自西向东，只能从这一端进入</strong>（坐标取自 OSM 路径起点，已核实）。入口在 Mammoth 以东约 9 英里的 Grand Loop Road 边。进入前<strong>先看入口处的告示牌</strong>——路况关闭时会在这里挂牌。这一段以开阔草甸为主，<strong>清晨（日出后 1 小时内）低角度光横扫草甸、草茎透光时最好看</strong>；9/25 是 07:12–08:15，10/22 是 07:46–08:50。24–70mm 为主。<strong>全程限速很低且路面松散，不要指望能开快。</strong>"
          },
          {
            "name": "中段白杨林与林间土路曲线",
            "view": [
              44.93137,
              -110.47678
            ],
            "desc": "<strong>坐标为 OSM 路径几何的中点，是推算位置而非某个具体停车点</strong>——这条路沿线没有正式停车场，只有可以靠边的宽处。这一段是白杨与针叶林交错的路段，也是秋色最集中的地方。<strong>拍法一</strong>：70–200mm 站在弯道外侧，把土路的 S 形曲线与两侧金黄的白杨压缩进画面。<strong>拍法二</strong>：24–70mm 走进林子几步（<strong>带熊喷雾</strong>），拍白杨的白色树干与金叶的垂直构图——<strong>白杨树干上常有黑色的疤痕，那是熊和麋鹿留下的抓痕与啃痕，是很好的细节</strong>。<strong>阴天或日出后的柔光最适合拍黄叶</strong>，正午顶光会让黄色发死。CPL 能压掉叶面反光、让黄色更饱和。"
          },
          {
            "name": "东端出口与 Petrified Tree",
            "view": [
              44.92201,
              -110.44412
            ],
            "desc": "东端出口（OSM 路径终点，已核实）接回 Grand Loop Road，距 <strong>Petrified Tree</strong>（44.91630, −110.43940）很近，那是一株被火山灰掩埋后硅化的古代红杉残桩，<strong>顺路两三分钟，可以作为这条路的收尾</strong>。出口一带地势渐低，视野向东打开，<strong>傍晚（9/25 约 18:15–19:15，10/22 约 17:30–18:26）西斜的光从背后打过来，前方的丘陵会一层层亮起来</strong>，适合 70–200mm 拍山峦层次。"
          },
          {
            "name": "【替代方案】土路关闭时：Blacktail Lakes 路边",
            "park": [
              44.9531,
              -110.60265
            ],
            "view": [
              44.9531,
              -110.60265
            ],
            "desc": "<strong>如果 Blacktail Plateau Drive 已经关闭（这在 10 月中之后是大概率事件），这是同一条主路上最好的替代。</strong>Blacktail Lakes（又称 Blacktail Ponds）就在 Grand Loop Road 边，有正式停车场，<strong>下车即到</strong>。静水池塘可以拍<strong>倒影</strong>——这是 Blacktail Plateau Drive 上没有的元素，清晨无风时对岸的山脊与黄草会完整倒映在水面上。<strong>最佳时段是日出后 30–60 分钟、水面还没起风的时候。</strong>24–70mm 拍倒影全景，70–200mm 拍局部。再往东约 2 英里的 <strong>Forces of the Northern Range</strong> 路边解说步道（停车场 44.95937, −110.56638）也有开阔的高原视野，同样是零步行。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>持 America the Beautiful 年票免费</strong>",
          "hours": "所在的 Grand Loop Road（Mammoth–Tower 段）<strong>全年开放</strong>。<strong>但 Blacktail Plateau Drive 本身是季节性支线，官方口径仅为「Both of them are open only during the summer season」，2026 年的具体关闭日期未能从官方渠道确认。</strong><strong>另外它可以在任何一天因路面泥泞或积雪临时关闭。</strong>出发当天请在 Albright Visitor Center 询问，或直接开到西端入口看告示牌；园区路况录音 (307) 344-2117",
          "parking": "<strong>沿线没有正式停车场</strong>，只能在路面较宽处靠边，<strong>必须完全让出行车宽度</strong>（这是一条单行道，后面的车绕不过去）。替代方案的 Blacktail Lakes 有正式免费停车场",
          "walk": "<strong>全程车行，机位均为零步行至几十米。</strong>开完 6 英里含停车拍摄约 <strong>45–75 分钟</strong>。<strong>注意这是单行道，一旦进入就无法掉头返回，必须开完全程</strong>"
        },
        "notes": [
          "<strong>这是本子地区唯一一个我无法确认能否进入的点位。</strong>请把它当作「顺路检查一下，开着就赚了」，<strong>不要为它单独安排时间，也不要把它排进任何依赖顺序的计划里</strong>",
          "<strong>单行道，只能自西向东，进入后无法掉头。</strong>如果对路况没把握，宁可不进——中途抛锚在这条路上是没有手机信号的",
          "<strong>碎石土路，雨雪后泥泞。</strong>低底盘车谨慎；园方历史上就常因 “poor driving conditions” 临时挂牌关闭这条路",
          "<strong>Blacktail BMA 的封闭期是 3 月 10 日至 6 月 30 日，秋季不封闭，已核实。</strong>所以秋季无法进入的原因只会是路况或季节性除雪停止，不会是熊管理",
          "<strong>Rescue Creek 狼群（16 匹）与黑熊都在这一带活动。</strong>下车进林子拍白杨必须携带熊喷雾并出声；距熊与狼 100 码（91 米）",
          "<strong>没有手机信号、没有卫生间、没有饮水。</strong>最近的设施在 Mammoth（西端入口以西约 9 英里）",
          "白杨转色的时间每年浮动：<strong>Blacktail Plateau（约 7,000 英尺）通常 9 月下旬至 10 月中旬，Mammoth 一带（6,200 英尺）会晚到 10 月初</strong>。这意味着「路还开着」和「叶子正黄」这两个条件的重叠窗口相当窄"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Blacktail_Plateau_Drive_%2815558554342%29.jpg",
            "cap": "Blacktail Plateau Drive 的草甸段 · Yellowstone National Park (NPS) / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Blacktail_Plateau_Drive_winds_through_the_trees_%2848266867617%29.jpg",
            "cap": "土路在林间的曲线 · Yellowstone National Park (NPS) / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Blacktail_Deer_Plateau_Drive%2C_Yellowstone_National_Park.jpg",
            "cap": "高原上的开阔视野 · John Manard / CC BY-SA 2.0"
          }
        ]
      },
      {
        "id": "undine-wraith-falls",
        "n": 5,
        "name": "温蒂瀑布与幽灵瀑布",
        "en": "Undine Falls & Wraith Falls",
        "score": 3,
        "tldr": "Mammoth–Tower 路上的两处顺路瀑布：Undine 零步行即到，Wraith 单程 0.5 英里。都朝西，午后到傍晚是正面光。",
        "tags": [
          {
            "t": "免费（年票覆盖）",
            "c": "free"
          },
          {
            "t": "全年可达",
            "c": "free"
          },
          {
            "t": "Undine 零步行",
            "c": "free"
          },
          {
            "t": "题材分量有限",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Undine Falls</strong>：Lava Creek 上的三级跌水，总落差 <strong>60 英尺（18.3 米）</strong>，<strong>观景台就在路边，下车走几十米即到</strong>。名字来自欧洲民间传说中的水精灵 undine。在 10 月下旬清晨零下十度、你还要赶 Lamar 日出的现实条件下，「不用走路」这个属性本身就是它最大的价值",
          "<strong>Wraith Falls</strong>：Lupine Creek 上一道贴着岩板下滑的长条形斜瀑，落差 <strong>79 英尺（24 米）</strong>。NPS 的描述是 “a short 1/2-mile (0.8-km) hike”，实测停车场到观景平台直线约 540 米、步行约 10 分钟，坡度平缓，<strong>是本区门槛最低的一段步道</strong>",
          "<strong>两处都在 Mammoth–Tower 路段上，而这条路全年开放</strong>，不受 10/12（Dunraven）与 10/31（主环）两个封闭节点影响。缺点也很实在：两者都是中小型瀑布，<strong>在一个有 Lamar Valley 和 Mammoth 台地的子地区里，它们的定位是「顺路补一张」而不是「专程去」</strong>"
        ],
        "photo": "风光 <strong>3/5</strong>，细节 <strong>3.5/5</strong>，人像 <strong>2/5</strong>。Undine 的三级结构在长焦下有层次，Wraith 的宽幅岩板斜瀑适合竖构图配周围的黄叶。扣分是两者的观景点都固定、可选角度极少，而且秋季正是黄石水量最低的时候，<strong>10 月的流量会明显小于夏季照片给你的印象</strong>。",
        "shots": [
          {
            "name": "Undine Falls 路边观景台",
            "park": [
              44.9433,
              -110.6404
            ],
            "view": [
              44.94372,
              -110.64047
            ],
            "desc": "停车场到观景台不到 50 米，<strong>全程铺装，无爬升</strong>。<strong>从观景台看瀑布的方位是东北偏东（约 75°，由 OSM 坐标推算）</strong>，即瀑布面朝西南——<strong>意味着清晨是逆光（07:12／07:46 后太阳正在你要拍的方向上），午后到傍晚才是正面光。</strong>最佳时段 <strong>14:00 至日落前 1 小时</strong>；阴天全天可拍且效果更均匀。镜头 70–200mm 压三级跌水的层次，24–70mm 收 Lava Creek 峡谷全景。<strong>慢门 1/4–2 秒</strong>配 ND 或 CPL 减光（秋季水量小，快门开太久会把水拍成一片没有结构的白棉花，<strong>1/4 秒往往比 2 秒好看</strong>）。"
          },
          {
            "name": "Wraith Falls 观景平台",
            "park": [
              44.94237,
              -110.62351
            ],
            "view": [
              44.93754,
              -110.62373
            ],
            "desc": "从停车场向<strong>正南</strong>（方位约 182°）步行约 540 米、10 分钟，穿过一小片草甸和疏林，末段有木栈道与观景平台。<strong>从平台看瀑布的方位是东南偏东（约 116°）</strong>，同样是<strong>清晨逆光、午后正面光</strong>。最佳时段 <strong>13:00–17:00</strong>。这是一道贴着倾斜岩板铺开的宽瀑而非垂直跌落，<strong>阴天或阴影下的柔光最能表现岩面上的水膜纹理</strong>，晴天正午反差过大。24–70mm 竖构图带上两侧的黄叶，70–200mm 拍水流在岩板上分股的局部。<strong>这条步道穿过草甸与灌丛，是本区两个点里唯一必须携带熊喷雾的一段</strong>——Commons 上就有 NPS 拍摄的「Wraith Falls 附近路边黑熊」照片，说明这一带熊很常见。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>持 America the Beautiful 年票免费</strong>",
          "hours": "<strong>“Yellowstone is open 24 hours per day, 365 days per year”</strong>，两处均为无门禁的路边点位。<strong>所在的 Mammoth–Tower 路段全年开放</strong>，但请注意从 Mammoth 过来必须经过施工中的 Gardner River High Bridge（单车道，最长等 15 分钟，24 小时）",
          "parking": "两处均有免费路边停车场（Undine 44.94330/−110.64040，Wraith 44.94237/−110.62351），各约十几个车位，<strong>秋季平日随到随停</strong>",
          "walk": "Undine <strong>1 分钟／不到 50 米</strong>；Wraith <strong>单程 10 分钟／约 540 米</strong>，往返含拍摄建议预留 40 分钟。两处合计 1 小时到 1.5 小时足够"
        },
        "notes": [
          "<strong>Wraith Falls 步道穿过草甸与灌丛，属于典型的熊活动地形，必须携带熊喷雾并出声行进</strong>；9 月底至 10 月是 hyperphagia 期，熊在低海拔草甸活动频繁",
          "<strong>10 月的流量会明显低于网络上的夏季照片</strong>，尤其 Wraith Falls 在枯水期会显得单薄。如果刚下过雨或早雪融化，效果会好很多",
          "Undine 观景台的护栏外是陡崖，<strong>不要翻越护栏找角度</strong>；两处的木栈道在霜冻早晨都会结暗冰",
          "两处均<strong>没有卫生间、没有饮水、没有手机信号</strong>。最近的设施在 Mammoth（约 5–6 英里以西）",
          "这两处离 Mammoth 只有十几分钟，<strong>最合理的用法是从 Lamar 拍完日出往回走时顺路停</strong>——那正好是它们的正面光时段，而清晨去反而是逆光"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/70/Undine_Falls_%28Yellowstone_National_Park%2C_northwestern_Wyoming%2C_USA%29_%2815946534709%29.jpg",
            "cap": "Undine Falls 三级跌水 · James St. John / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Wraith_Falls_%28Lupine_Creek%2C_Yellowstone_National_Park%2C_northwestern_Wyoming%2C_USA%29_%2816131851632%29.jpg",
            "cap": "Wraith Falls 贴岩板下滑的宽幅斜瀑 · James St. John / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Hiker_and_Wraith_Falls_%2852200512453%29.jpg",
            "cap": "观景平台与瀑布的尺度关系 · YellowstoneNPS / 公有领域"
          }
        ]
      },
      {
        "id": "slough-creek",
        "n": 6,
        "name": "斯洛溪",
        "en": "Slough Creek",
        "score": 4,
        "tldr": "Junction Butte 狼群的传统巢域，Lamar 一带最稳定的观狼点。2.2 英里搓板土路进去，营地 10/12 关闭但路本身通常仍可走。",
        "tags": [
          {
            "t": "免费（年票覆盖）",
            "c": "free"
          },
          {
            "t": "观狼首选",
            "c": "free"
          },
          {
            "t": "2.2 英里搓板土路",
            "c": "risk"
          },
          {
            "t": "营地 10/12 关闭",
            "c": "risk"
          },
          {
            "t": "土路关闭日期未确认",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Junction Butte 狼群（目前 15 匹，13 黑 2 灰）传统上就在 Slough Creek 一带做窝</strong>，是全园被观察记录最完整、最常被看到的族群。<strong>这也是 Slough Creek 值得从 Lamar 主线单独拐进来的唯一理由</strong>——它不是风景更好，是概率更高",
          "<strong>地形上它是一个从 Lamar 主谷向北伸出的支谷</strong>，Slough Creek 在里面切出一片开阔的河岸草甸，两侧是缓坡与疏林。这种「开阔但有边界」的地形正是狼活动最容易被观察到的类型——不像 Lamar 主谷那样一望无际到失去参照，也不像林区那样完全看不见",
          "<strong>进去的路是 2.2 英里的碎石土路，搓板路面明显，普通轿车慢行可进但会很颠。</strong>路况在雨雪后会迅速恶化。<strong>Slough Creek Campground 2026 年 10 月 12 日关闭</strong>，但<strong>营地关闭不等于道路关闭</strong>——<strong>这条支路在营地关闭后的确切开放状态未能从官方渠道确认</strong>，出发当天请在 Albright Visitor Center 或 Tower 一带的告示牌确认",
          "<strong>观狼者的实际做法</strong>：天没亮就把车开进去，在沿途路肩或者靠近营地的开阔处架观鸟镜，一站就是三四个小时。<strong>watcher 圈子把其中一处常用的小土丘叫 “Dave’s Hill”，但这个名字不在任何官方地图上，OSM 上也没有对应节点</strong>，只能到现场跟着人走"
        ],
        "photo": "野生动物 <strong>4.5/5</strong>，风光 <strong>3.5/5</strong>，人像 <strong>1.5/5</strong>。观狼概率是全区最高的，河岸草甸在秋色和晨雾下也很好看。扣分同 Lamar：<strong>狼的实际距离让摄影基本停留在记录层面</strong>，而且这里的谷地比 Lamar 主谷窄，日出后进光更晚、光线窗口更短。",
        "shots": [
          {
            "name": "Slough Creek Road 路口路肩（主路侧）",
            "park": [
              44.90945,
              -110.33499
            ],
            "view": [
              44.90945,
              -110.33499
            ],
            "desc": "就在 Northeast Entrance Road 与 Slough Creek Road 交叉口的路肩上，<strong>不用开进土路就能架镜子</strong>，是天气或路况不好时的稳妥选择。视野涵盖 Lamar 主谷西段与 Slough Creek 出口。<strong>到位时间：民用曙光</strong>（9/25 约 06:41，10/22 约 07:15）。主力 <strong>400mm 以上加观鸟镜</strong>。这个位置的好处是<strong>随时可以撤</strong>——如果 scope line 在往里面走，你也可以马上跟进去。"
          },
          {
            "name": "Slough Creek Trailhead 与营地一带草甸",
            "park": [
              44.94356,
              -110.30819
            ],
            "view": [
              44.94356,
              -110.30819
            ],
            "desc": "从路口沿土路向北北东行驶 <strong>2.2 英里／约 10–15 分钟（搓板路，慢行）</strong>，到 Slough Creek Trailhead 与 Campground（44.94819, −110.30845）一带。这里是支谷里最开阔的一段河岸草甸，<strong>秋季晨雾贴着 Slough Creek 铺开，配合两岸的黄色草甸很出片</strong>。光线：支谷大致南北向，<strong>日出后光会先照亮东侧的坡面，谷底进光比 Lamar 主谷更晚，耐心等到 08:30–09:00</strong>。24–70mm 拍河湾与雾，400mm 以上留给动物。<strong>营地 10 月 12 日关闭后此处更安静，但也意味着没有卫生间。</strong>"
          },
          {
            "name": "watcher 常用的观察土丘（当地称 Dave’s Hill）",
            "desc": "<strong>无 OSM 实体节点，也不在任何官方地图上，因此本机位省略坐标，地图上不会有针脚。</strong>它是土路沿线一处高出草甸十几米的小丘，视野比路面开阔很多，<strong>是观狼者最常聚集的位置</strong>。找它的唯一可靠方法是：清晨开进土路，<strong>看到路边停了一排车、坡上站着一排三脚架和观鸟镜，那就是了。</strong>上去之前请注意不要从别人的镜头前穿过，也不要大声说话——狼在 1–2 公里外仍然听得见人声并会改变路线。<strong>这一段要下车爬坡，熊喷雾必须上手。</strong>"
          }
        ],
        "access": {
          "book": "不需预约（Slough Creek Campground 需另行预订，但 2026 年 10 月 12 日即关闭）",
          "ticket": "<strong>持 America the Beautiful 年票免费</strong>",
          "hours": "<strong>“Yellowstone is open 24 hours per day, 365 days per year”</strong>；主路（Northeast Entrance Road）<strong>全年开放</strong>。<strong>Slough Creek Campground 2026 年 6/15 – 10/12。通往营地的 2.2 英里支路在营地关闭后是否仍对车辆开放，未能从官方渠道确认</strong>——这是本景点唯一的不确定项，请出发当天在 Albright Visitor Center 确认",
          "parking": "路口路肩免费；土路沿线有若干非正式路肩与营地停车场，均免费。<strong>观狼高峰时段（日出前后）路口和沿线车位会被占满，天不亮就得到</strong>",
          "walk": "路口机位<strong>零步行</strong>；营地一带停车后步行 <strong>2–5 分钟</strong>；观察土丘需爬升十几米、约 <strong>5 分钟</strong>。建议整个清晨（3–4 小时）都留给这里"
        },
        "notes": [
          "<strong>2.2 英里土路搓板明显，雨雪后泥泞。</strong>普通轿车可进但要慢；<strong>低底盘车与租来的两驱车在结冰或泥泞时请直接放弃，改在路口路肩观察</strong>",
          "<strong>必须携带熊喷雾并随手可及。</strong>Slough Creek 河岸草甸是熊的核心觅食区，9 月底至 10 月为 hyperphagia 期。<strong>距熊与狼 100 码（91 米）</strong>",
          "<strong>观狼礼节：不要在 scope line 前方走动，不要大声说话，不要开车灯照射谷地，不要用无线电或手机外放。</strong>这些行为会被现场其他人立刻制止，也确实会驱散狼群",
          "<strong>没有手机信号，没有加油，营地 10/12 后没有卫生间。</strong>进去之前在 Mammoth 或 Gardiner 解决所有补给",
          "<strong>清晨谷底温度会比 Mammoth 再低 5–10°C（推算），10 月下旬 −10°C 上下是常态。</strong>锂电池在这个温度下可用容量掉 30–50%，带 4–6 块贴身放；回暖气车前把机身装进密封袋防止冷凝",
          "<strong>2025 年犬瘟热使全园狼数从 108 降到 84</strong>，Junction Butte 群本身仍有 15 匹且相对稳定，但整体观狼概率低于前几年。<strong>把它当成「概率最高的一个点」，不是「一定看得到的点」</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Slough_Creek_%2895427p%29.jpg",
            "cap": "Slough Creek 支谷的河岸草甸 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Bison_at_Slough_Creek_%2895342%29.jpg",
            "cap": "Slough Creek 草甸上的野牛 · Rhododendrites / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Fall_hiker_on_the_Slough_Creek_Trail_%2844896254444%29.jpg",
            "cap": "秋季的 Slough Creek 步道 · Yellowstone National Park (NPS) / 公有领域"
          }
        ]
      },
      {
        "id": "tower-fall",
        "n": 7,
        "name": "塔瀑",
        "en": "Tower Fall",
        "score": 3.5,
        "tldr": "132 英尺瀑布配火山岩尖峰。通往瀑底的步道自 2004 年山体滑坡后永久关闭，只能在观景台拍——北侧 1.5 英里的 Calcite Springs 其实更值得。",
        "tags": [
          {
            "t": "免费（年票覆盖）",
            "c": "free"
          },
          {
            "t": "瀑底步道 2004 年起永久关闭",
            "c": "risk"
          },
          {
            "t": "Dunraven 10/12 关闭",
            "c": "risk"
          },
          {
            "t": "10/31 后不可达",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>132 英尺（40 米）</strong>的瀑布，从 Tower Creek 汇入 Yellowstone River 之前的最后一跌落下，两侧是一排火山角砾岩侵蚀成的尖峰。<strong>1870 年 Washburn 探险队为它命名</strong>，Washburn 本人的形容是「像一座塔楼被拆掉了雉堞却依然屹立的古堡（like some old castle with its turrets dismantled but still standing）」",
          "<strong>瀑顶那块著名的悬石</strong>：一百多年里它都看似摇摇欲坠地卡在瀑布口，早期探险者甚至下注赌它哪一小时会掉下去。<strong>它最终在 1986 年 6 月才真的掉了下来</strong>。写着「When will the boulder fall?」的解说牌又立了好几年，园区员工于是改问「那牌子什么时候拆」",
          "<strong>通往瀑布底部的步道自 2004 年起永久关闭，这一点必须说清楚。</strong>当年的岩崩与泥石流摧毁了下方观景平台，并破坏了沿 Tower Creek 那最后三分之一段步道的结构完整性。NPS 当时的公告措辞是「危险状况已超出常规修缮范畴」。<strong>二十多年过去仍无重开计划，末段已用围栏封死。所以「站在瀑布底下」这个画面在 2026 年是不可能实现的</strong>——网上很多攻略仍在推荐这条路线，那些内容全部过期",
          "<strong>仍然开放的两条：</strong>停车场到主观景台的 <strong>150 码铺装步道</strong>（这是唯一能看到瀑布的位置）；以及从观景台旁下切到 Yellowstone River 河岸的<strong>约 0.5 英里陡坡土路，落差约 250–300 英尺</strong>。后者在岔口处向左（通往瀑底）的那一支被封，<strong>向右到河边的那一支照常开放</strong>——河边看得到 Grand Canyon of the Yellowstone 的下游段与对岸 700 英尺高的 Specimen Ridge 山壁"
        ],
        "photo": "风光 <strong>3.5/5</strong>，地质 <strong>4/5</strong>，人像 <strong>1.5/5</strong>。瀑布加尖峰的组合确实上镜，但<strong>只有一个固定观景台、一个固定角度，几乎没有构图余地</strong>，这是扣分的主因。真正的加分项在 1.5 英里以北的 <strong>Calcite Springs Overlook</strong>——那里的柱状玄武岩「palisades」峡谷壁比瀑布本身更有分量，很多人开车路过就错过了。",
        "shots": [
          {
            "name": "Tower Fall 主观景台（唯一能看到瀑布的位置）",
            "park": [
              44.89023,
              -110.38648
            ],
            "view": [
              44.89326,
              -110.3857
            ],
            "desc": "从停车场（旁边就是 Tower Fall General Store）沿铺装步道走 <strong>150 码／约 3 分钟</strong>，几乎无爬升。<strong>从观景台看瀑布的方位是西北偏西（约 298°，由 OSM 坐标推算）</strong>，即瀑布所在的凹壁朝东南——<strong>只有上午能拿到直射光</strong>。但峡谷很深，<strong>上午的光会先照亮上方的尖峰而瀑布本体仍在阴影里，光比极大</strong>。<strong>最佳选择其实是阴天，或者上午 10:00 之前、下午 15:00 之后整个凹壁均匀处于阴影中的时段</strong>，此时可以用慢门把水流拍出结构而不炸高光。镜头：<strong>70–200mm 是主力</strong>（观景台到瀑布约 130 米，广角会把主体拍得很小），竖构图把尖峰与瀑布一起收进来。慢门 1/2–2 秒配 CPL，CPL 同时能压掉湿岩壁的反光。<strong>观景台空间不大，旺季架三脚架会挡路，秋季平日则很宽松。</strong>"
          },
          {
            "name": "Calcite Springs Overlook（本景点真正的重头）",
            "view": [
              44.90255,
              -110.39248
            ],
            "desc": "在 Tower Fall 以北约 1.5 英里的 Grand Loop Road 边，<strong>有独立停车场和一圈短栈道，步行 2–3 分钟</strong>。这里俯瞰 Yellowstone River 切出的峡谷，对岸整片是<strong>冷却收缩形成的柱状玄武岩崖壁</strong>，当地称 “the palisades”，垂直节理排列得像管风琴。崖底还有硫磺色的热液渗出点。<strong>这一处的画面分量明显高于 Tower Fall 本身</strong>，而且视野开阔、构图自由度大得多。光线：峡谷大致南北走向，<strong>上午与傍晚的低角度光会沿崖面横扫，把柱状节理的立体感拉满</strong>；正午顶光最差。24–70mm 与 70–200mm 各有用武之地。<strong>这里也是本区看 bighorn sheep 概率最高的位置之一</strong>，长焦不妨挂在身上。"
          },
          {
            "name": "下切到 Yellowstone River 河岸（0.5 英里陡坡）",
            "view": [
              44.88962,
              -110.39095
            ],
            "desc": "从观景台旁的岔口开始下切，<strong>单程约 0.5 英里、落差 250–300 英尺，往返 1 小时</strong>。起点海拔已有 6,500 英尺，<strong>下去容易上来难，NPS 与当地长期提醒量力而行</strong>。<strong>岔口处向左（沿 Tower Creek 通往瀑布底部）的那一支已封闭，不要进入。</strong>向右到河岸这一支正常开放，河边有沙滩，可以仰拍对岸 700 英尺高的岩壁。题材偏小众，<strong>只有在你时间充裕、且当天 Lamar 那边光线不给力时才值得走</strong>。沿途是林地和溪谷，<strong>必须带熊喷雾</strong>。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>持 America the Beautiful 年票免费</strong>",
          "hours": "<strong>“Yellowstone is open 24 hours per day, 365 days per year”</strong>，观景台无门禁。<strong>关键是路段日期：Tower-Roosevelt ↔ Tower Fall 段 2026 年开放至 10 月 31 日</strong>，所以从北侧（Tower Junction 方向）来，整个 9 月底至 10 月底窗口都到得了。<strong>但从 Canyon 方向经 Dunraven Pass 过来的那条路 10 月 12 日就关</strong>，两个日期极易混淆，请按你的来向确认",
          "parking": "Tower Fall 有大型免费停车场（44.89023, −110.38648），紧邻 Tower Fall General Store。Calcite Springs Overlook 另有独立免费停车场。<strong>Tower Fall General Store 10 月 4 日关门，Tower Fall Campground 9 月 27 日关门；Tower-Roosevelt 加油站 9 月 6 日就已关闭</strong>",
          "walk": "主观景台 <strong>3 分钟／150 码</strong>，铺装；Calcite Springs <strong>2–3 分钟</strong>；河岸步道<strong>往返约 1 小时／1 英里，落差 250–300 英尺</strong>。含 Calcite Springs 建议预留 1.5 小时"
        },
        "notes": [
          "<strong>再强调一次：通往瀑布底部的步道自 2004 年岩崩后永久关闭，末段有围栏，无重开计划。不要试图绕过围栏。</strong>你能拍到瀑布的位置只有主观景台一个",
          "<strong>10 月 12 日之后 Dunraven Pass 关闭</strong>，此后 Tower Fall 只能从 Tower Junction 一侧进入；<strong>10 月 31 日之后 Tower-Roosevelt ↔ Tower Fall 段也关闭，届时本景点在整个冬季不可达</strong>（届时可滑雪或雪鞋进入，但那不在本次窗口内）",
          "前往本景点必经 Tower Junction 东侧的 <strong>Yellowstone River Bridge 施工区，最长等 30 分钟，持续到 11 月</strong>。<strong>Tower Junction 路口已向东南移动约 700 英尺，旧的导航数据可能指错路</strong>",
          "<strong>Antelope BMA 的封闭期为 3/10 – 11/10，覆盖 Tower Fall 南侧的 Antelope Creek 流域。</strong>官方明确 Dunraven Road、Grand Loop Road、Chittenden Road 及相关路肩照常开放，<strong>路面和观景台不受影响，但不得徒步进入流域内部</strong>；另据规定 5/25–11/10 期间可在 Tower Fall Campground 至 Buffalo Picnic Area 之间的旧路步道上徒步",
          "<strong>必带熊喷雾</strong>——本区 9 月底至 10 月为 hyperphagia 期，Tower 一带尸体密度高，熊活动频繁。园内租赁点只在 Canyon 与 Old Faithful（且分别在 10/10 与 10/3 前后关闭），<strong>建议直接在 Mammoth General Store 或 Gardiner 购买</strong>",
          "<strong>这一段没有手机信号</strong>，最近的加油在 Gardiner 或 Cooke City（园内北部 10/4 后无油）",
          "瀑布名为 <strong>Tower Fall</strong>（单数）而非 Tower Falls，官方标识与地图一律用单数，搜索资料时用单数命中率更高"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Tower_Fall_%2828880933604%29.jpg",
            "cap": "主观景台视角的 Tower Fall 与火山岩尖峰 · Yellowstone National Park (NPS) / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tower_Fall_%2823266736344%29.jpg",
            "cap": "竖构图下瀑布与尖峰的比例关系 · Yellowstone National Park (NPS) / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/25/Yellowstone_River_near_Tower_Fall%2C_Yellowstone_National_Park%2C_2009.jpg",
            "cap": "Tower Fall 附近的 Yellowstone River 峡谷 · DimiTalen / CC0"
          }
        ]
      },
      {
        "id": "lamar-valley",
        "n": 8,
        "name": "拉马尔谷",
        "en": "Lamar Valley",
        "score": 5,
        "tldr": "全园野生动物密度最高的谷地，且全年通车。10 月下旬日出方位与谷轴只差 9–14°，是拍逆光河雾与野牛轮廓光的最佳几何。狼要靠观鸟镜，不是 400mm。",
        "tags": [
          {
            "t": "免费（年票覆盖）",
            "c": "free"
          },
          {
            "t": "全年通车",
            "c": "free"
          },
          {
            "t": "无信号无加油",
            "c": "risk"
          },
          {
            "t": "狼需观鸟镜",
            "c": "risk"
          },
          {
            "t": "日出前谷底约 −10°C",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这是本次行程里唯一「越晚去越好」的地方。</strong>当 10 月 12 日 Dunraven Pass 关闭、10 月 31 日主环全线关闭之后，Lamar 仍在那条<strong>全园唯一常年通车的 Gardiner–Cooke City 线</strong>上正常开放，而此时游客量已经跌到夏季的零头。<strong>「秋末黄石关门了」是彻底的误解——关的是内环，不是北环。</strong>",
          "<strong>谷地几何（由 OSM 河道坐标推算，这是本条最有实操价值的信息）：Lamar Valley 主轴方位角约 118°／298°。</strong>而日出方位 9/25 是 90°、10/22 是 <strong>104°</strong>、10/31 是 <strong>109°</strong>——<strong>越接近 10 月底，太阳越是沿着谷地的轴线正对着你升起，10 月 31 日只差 9°。</strong>站在任一路肩朝东南偏东看向上游，就是近乎正轴的逆光：河雾会整片透光发亮，野牛只剩一圈轮廓光，零下十度时它们呼出的白气会在逆光下拉成一道道可见的气柱。<strong>这是本子地区上限最高的一张照片，而它在几何上属于 10 月下旬而不是 9 月。</strong>",
          "<strong>关于狼，必须先把期望值压下来。</strong>2025 年底的官方统计是<strong>全园 84 匹狼、7–8 个族群，比 2024 年底的 108 匹、9 个族群大幅下降</strong>，原因是<strong>犬瘟热（canine distemper）爆发</strong>——当年 36 只幼崽只活下来 17 只，是有记录以来最低的幼崽存活数。目前北部山脉的两个主力族群是 <strong>Junction Butte（15 匹，13 黑 2 灰，传统上在 Slough Creek 一带做窝）</strong>与 <strong>Rescue Creek（16 匹，活动范围从 Blacktail Plateau 到 Tower Junction）</strong>；<strong>曾经最有名的 Lamar Canyon 族群已不再作为独立族群存在</strong>",
          "<strong>器材上的残酷算术：狼通常在 1–2 公里外。</strong>一匹体长约 1.2 米的狼在 1.5 公里处，用全画幅 400mm 拍，在 2,400 万像素机身上<strong>只占约 50 个像素宽</strong>——那是一个可辨认的斑点，不是一张照片。换 800mm 也只有约 100 像素。<strong>结论：想「看到」狼，你需要的是 20–60 倍观鸟镜（spotting scope），不是长焦镜头；想「拍到」狼，现实的成果是记录照而非作品照。</strong>真正能出片的是 bison、pronghorn、coyote 和晨雾，请把预期放在这些上",
          "<strong>其他动物的实际情况：</strong>bison 是这里最可靠的主体，成群数十至数百头，秋季常直接走在路面上（这会造成 “bison jam”，也是最好的拍摄机会）；pronghorn（叉角羚，北美陆地上跑得最快的动物）在开阔草地上常见；coyote 在路肩活动频繁且不太怕人，是唯一有机会用 400mm 拍满画面的犬科动物。<strong>路肩上那排架着观鸟镜的人（当地称 “the scope line”）是最可靠的情报源</strong>——他们通常乐意让你看一眼镜子并告诉你在看什么，礼貌地问就行"
        ],
        "photo": "野生动物 <strong>5/5</strong>，风光 <strong>4.5/5</strong>，人像 <strong>2/5</strong>。这是全美国最好的野生动物观察谷地，加上 10 月下旬近乎正轴的日出逆光几何，上限极高。<strong>但它对器材和耐心的要求也是全区最高的</strong>：没有 400mm 以上就基本只能拍风景，没有观鸟镜就基本看不到狼，不肯在 −10°C 的路肩上站两个小时就等不到光。这个 5 分是给「准备充分的人」的。",
        "shots": [
          {
            "name": "Confluence 汇流口路肩 —— 日出逆光晨雾主机位",
            "park": [
              44.87029,
              -110.19296
            ],
            "view": [
              44.87029,
              -110.19296
            ],
            "desc": "<strong>OSM 上少数几个有正式名称的路肩之一</strong>（named parking “Confluence”），位于 Lamar River 与 Soda Butte Creek 汇流处附近，<strong>是全谷水汽最集中、晨雾最厚的一段</strong>。<strong>到位时间：民用曙光。</strong>9/25 是 06:41，10/22 是 07:14。注意这是平地平线时刻，谷底两侧有 Specimen Ridge 与 Druid Peak，<strong>直射光真正打到谷底还要再晚 30–50 分钟（推算）</strong>，而那 30–50 分钟正是逆光晨雾最好看的时候，别以为到了日出时刻还没光就是白来了。<strong>朝东南偏东（118°）看向上游</strong>——10 月下旬太阳就从那个方向升起。镜头：<strong>70–200mm 与 100–400mm 各挂一机</strong>，长焦压缩能把河雾、野牛群和远山叠成层次；广角在这里基本用不上，谷太宽会显得空。<strong>包围曝光是必须的</strong>：逆光下雾的亮部与山体的暗部差 6–8 档。<strong>出发时间：从 Mammoth 约 33 英里，正常 60–65 分钟，加上两座桥的施工等待要算 1 小时 45 分至 2 小时。要赶 9/25 的 06:41，04:45–05:00 必须出发。</strong>"
          },
          {
            "name": "Lamar Buffalo Ranch / Institute 一带路肩 —— 野牛群与 scope line",
            "view": [
              44.89837,
              -110.23966
            ],
            "desc": "这一带（Lamar Buffalo Ranch 位于 44.89546, −110.23579）是谷地最开阔的一段，<strong>视野向东南可以一直看到几公里外，是观狼者架镜子最集中的位置</strong>。也是 bison 大群最常出现的草场。<strong>全天可拍</strong>：清晨逆光拍轮廓与呼吸白气，傍晚（9/25 日落 19:15、10/22 日落 18:26）光从西南斜切进来，<strong>会先熄谷底、后熄北岸的 Druid Peak 山脊，此时好光在山脊上而不在谷底</strong>——用 70–200mm 拍「暗谷 + 亮脊」的对比。主力焦段 <strong>400mm 以上</strong>。<strong>bison 距离规定同样是 25 码（23 米），而且它们会主动走近路面和车辆</strong>；遇到 bison jam 请留在车内，不要下车绕行、不要按喇叭催赶。"
          },
          {
            "name": "Soda Butte 石灰华锥 —— 唯一的近景前景",
            "view": [
              44.87795,
              -110.15238
            ],
            "desc": "谷地东段路边一座孤立的<strong>已基本停止活动的石灰华锥体</strong>，旁边就有停车位（44.87796, −110.15280），下车即到。<strong>这是整条 Lamar 唯一一个可以做近景前景的实体</strong>——谷地其余部分全是开阔草甸，拍风光时最缺的就是前景锚点。构图：24–35mm 把锥体放在下三分之一，后面接谷地与晨雾；或 70–200mm 把锥体与远处的野牛群压在一起。<strong>最佳时段是日出后 30–60 分钟</strong>，低角度暖光打在锥体粗糙的表面上质感最好。<strong>不要爬上锥体</strong>，它是受保护的地热遗迹，且表面很脆。"
          },
          {
            "name": "Lamar River Trailhead（当地俗称 Footbridge）—— 河湾与晨雾",
            "park": [
              44.86922,
              -110.1666
            ],
            "view": [
              44.86931,
              -110.16644
            ],
            "desc": "正式名称是 Lamar River Trailhead，<strong>watcher 圈子里习惯叫它 “Footbridge”，但这个名字不在任何官方地图上</strong>。这里离河道最近，<strong>河湾的雾在冷早晨会贴着水面铺开</strong>，是拍「雾 + 河曲 + 逆光」的最佳位置之一。同样是民用曙光到日出后 1 小时的窗口，朝东南偏东拍。<strong>停车场后方就是通往 Lamar 河谷深处的步道口</strong>——如果你打算走进去哪怕几百米，<strong>熊喷雾必须上手（不是放在包里）</strong>，这一带在秋季有大量有蹄类尸体，是熊的核心觅食区。70–200mm 与 100–400mm。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>持 America the Beautiful 年票免费</strong>。年票同时豁免非美国居民 16 岁以上每人 $100 的附加费",
          "hours": "<strong>“Yellowstone is open 24 hours per day, 365 days per year”</strong>。<strong>关键事实：Northeast Entrance Road（Tower Junction 至 Cooke City）全年开放</strong>，官方原文 “The only road generally open year-round to regular vehicles is from the North Entrance at Gardiner, Montana, through the park to Cooke City, Montana (via Tower Junction).”。<strong>Lamar Valley 全段在 10/12 与 10/31 两个封闭节点之后仍然照常通行。</strong>但需注意 <strong>Beartooth Highway（US-212）10 月 12 日关闭</strong>，此后 Cooke City 变成死胡同，只能原路退回",
          "parking": "<strong>全线数十处免费路肩 turnout，均不收费、不限时。</strong>经 OSM 核实的有名称的只有 “Confluence”（44.87029, −110.19296）一处，其余绝大多数<strong>没有任何标识牌，watcher 圈子的俗称（Hitching Post、Dorothy’s Knoll、Coyote Overlook 等）不在官方地图上，导航搜不到</strong>，请按经纬度定位。<strong>必须完全停进铺装路肩内，任何车轮压在行车道上都会被 ranger 要求移车</strong>",
          "walk": "<strong>所有主要机位都是零步行</strong>——停车即拍。这是本区在 −10°C 清晨最大的优势。建议单次停留 2–4 小时，日出场次至少留 3 小时"
        },
        "notes": [
          "<strong>手机信号在 Lamar 全线基本为零。</strong>园内基站只覆盖 Mammoth、Old Faithful、Canyon、Lake、Grant 等开发区，Mammoth 以东即断。<strong>必须提前下载离线地图，并把行程告诉别人</strong>，这里救援响应时间很长",
          "<strong>Lamar 全线没有加油站，也没有任何餐饮和商店。</strong>园内北部的 Tower-Roosevelt 加油站 <strong>9 月 6 日</strong>已关，Mammoth 加油站 <strong>10 月 4 日</strong>关。<strong>标准动作是每次进园前在 Gardiner 加满</strong>；从东侧来则在 Cooke City 加满",
          "<strong>必须携带熊喷雾并放在随手可及的位置（不是背包深处）。</strong>9 月底至 10 月是 hyperphagia 期，Lamar 是全园有蹄类尸体密度最高的区域，熊会在开阔谷地和河岸活动。<strong>距熊与狼 100 码（91 米），距 bison 与 elk 25 码（23 米）。</strong>熊冲锋时站住不跑，等进到 18 米内再喷",
          "<strong>2025 年犬瘟热导致狼群数量骤降（84 匹／7–8 群，比上年少 24 匹）</strong>，这意味着 2026 年秋天的观狼概率客观上低于前几年。<strong>请不要把「看到狼」当作行程成立的前提</strong>",
          "<strong>观鸟镜（spotting scope）在这里的价值高于任何一支镜头。</strong>如果没有，路肩上的 scope line 通常愿意让你看一眼——这是当地的默认礼节，但请先开口问，不要直接凑上去",
          "<strong>Bear Management Area 在秋季不影响 Lamar 的路肩观景，已核实</strong>：Blacktail BMA 只在 3/10–6/30 封闭；Antelope BMA 虽在 3/10–11/10 封闭但明确不含道路与路肩；Washburn BMA（8/1–11/10）在 Mount Washburn 一带，不涉及 Lamar",
          "<strong>限速 45 mph，且当地统计中交通事故是园内最常见的伤害原因</strong>——一个盯着 bison 分神的司机比任何动物都危险。看到动物请先靠边停稳再拿相机",
          "<strong>Slough Creek Campground 10 月 12 日关闭，Pebble Creek Campground 因 2022 洪灾无限期关闭。</strong>本区秋季唯一全年开放的营地是 Mammoth Campground；园内住宿只剩 Mammoth Hot Springs Hotel（Roosevelt Lodge 9 月 7 日已关）"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Lamar_Valley_bison_YNP1.jpg",
            "cap": "Lamar Valley 的野牛群与开阔谷地 · Acroterion / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/85/Wildlife_watching_in_Lamar_Valley_with_Yellowstone_Forever_%2836467647182%29.jpg",
            "cap": "路肩上架着观鸟镜的 scope line · Yellowstone National Park (NPS) / 公有领域"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Lamar_Valley_Pronghorn_grasses.jpg",
            "cap": "谷地草甸上的叉角羚 · Chris Light / CC BY-SA 4.0"
          }
        ]
      }
    ]
  },
  {
    "id": "ys-canyon-hayden",
    "name": "Yellowstone · Grand Canyon of the Yellowstone 与 Hayden Valley",
    "navName": "Canyon 与 Hayden",
    "color": "#ff8a3d",
    "lead": "这是全园摄影密度最高的一段：一条 20 英里长、1,000 英尺深的黄色峡谷，两条瀑布，和园内第二大的野生动物谷地，全部集中在 Canyon Junction 南侧 10 英里内。<strong>但这个季节它由三个日期定义：Dunraven Pass 于 10 月 12 日关闭、全园主环路于 10 月 31 日关闭、以及 Lower Falls 从 10 月 15 日之后一整天都晒不到太阳。</strong>前两个决定你能不能到，第三个决定你到了能拍成什么样。另外 <strong>Uncle Tom’s Trail 已被 NPS 永久关闭</strong>（不是季节性、不是维修中），本区按红卡处理，不要按旧攻略去找那 328 级台阶。",
    "callouts": [
      {
        "type": "warn",
        "title": "2026 道路关闭日期：本区最关键的一张表",
        "html": "<p>以下为 <a href=\"https://www.nps.gov/yell/planyourvisit/parkroads.htm\" target=\"_blank\" rel=\"noopener\">NPS 官方 Park Roads 页</a>公布的 <strong>2026 年预计通车日期</strong>（该页最后更新 2026-09-01）。路段在末日当天结束通车，次日 8:00 起禁止轮式车辆。所有日期均<strong>可能因降雪提前</strong>。</p><table><thead><tr><th>路段</th><th>2026 通车区间</th><th>对本区的意义</th></tr></thead><tbody><tr><td>Norris ↔ Canyon Village</td><td>4/17 – <strong>10/31</strong></td><td>从西/北进入 Canyon 的主通道</td></tr><tr><td>Mammoth ↔ Norris</td><td>4/17 – <strong>10/31</strong></td><td>Dunraven 关闭后从北面来的唯一路线</td></tr><tr><td>Canyon Village ↔ Bridge Bay（穿 Hayden Valley）</td><td>5/1 – <strong>10/31</strong></td><td>Hayden Valley、Mud Volcano 全在此段</td></tr><tr><td>East Entrance ↔ Fishing Bridge（Sylvan Pass）</td><td>5/1 – <strong>10/31</strong></td><td>Lake Butte Overlook 与 Cody 方向进出</td></tr><tr><td><strong>Canyon Village ↔ Tower Fall（Dunraven Pass）</strong></td><td>5/22 – <strong>10/12</strong></td><td><strong>提前 19 天关，务必注意</strong></td></tr><tr><td>Beartooth Hwy (US-212) / Chief Joseph (WY-296)</td><td>5/22 – <strong>10/12</strong></td><td>与 Dunraven 同日关</td></tr><tr><td>South Entrance ↔ West Thumb ↔ Lake Village</td><td>5/8 – <strong>10/31</strong></td><td>从 Grand Teton 方向北上</td></tr><tr><td>North Entrance ↔ Northeast Entrance</td><td>全年</td><td>唯一全年通车路段</td></tr></tbody></table><p><strong>注意 2026 年的主环路关闭日是 10 月 31 日（周六），不是历史上惯用的「11 月第一个周一」</strong>（2026 年的 11 月第一个周一是 11/2）。也就是说这个季节窗口的末端就是 10/31。</p><p><strong>Dunraven Pass 10 月 12 日关闭之后，从 Tower / Mammoth 到 Canyon 必须改走 Norris。</strong>Tower Junction → Canyon 走 Dunraven 是 <strong>19 英里</strong>；改走 Tower → Mammoth（18）→ Norris（21）→ Canyon（12）共 <strong>51 英里</strong>，多绕 32 英里、多花约 1 小时，且 Mammoth 东南侧的 Gardner River High Bridge 施工到 10 月下旬为<strong>单车道放行、随时 15 分钟延误、24 小时不间断</strong>。10/12 之后从北面来看日出，等于凌晨 4 点前就得出发。</p><p><strong>Sylvan Pass 是本表最不可靠的一格。</strong>官方日期是 10/31，但它海拔约 8,500 英尺、有主动雪崩控制作业，NPS 历史上多次在 9 月就因预报 5–9 英寸降雪临时关闭该路段。若 Lake Butte Overlook 是硬需求，出发当天必须先看路况地图，不要把它排成不可替换的一站。</p><p><strong>South Rim Drive、North Rim Drive、Brink of the Upper Falls Drive 三条支线，NPS 的 2026 道路表并未单独列出开闭日期</strong>——它们是 Norris–Canyon 与 Canyon–Bridge Bay 主段的支路，按常规随主段一同于 10/31 结束通车。<strong>这一点未能从官方渠道逐条确认</strong>，且降雪后支线常先于主路临时封闭，请以现场与路况地图为准。</p><p>实时查询：路况地图（上页）、电话 <strong>(307) 344-2117</strong> 录音、或发送短信 <strong>82190</strong> 至 <strong>888-777</strong> 订阅路况提醒。</p>"
      },
      {
        "type": "warn",
        "title": "Uncle Tom’s Trail 永久关闭 + 住宿末日",
        "html": "<p><strong>Uncle Tom’s Trail：不是季节性关闭，不是维修中，是永久关闭。</strong>那条 328 级金属台阶自 <strong>2019 年夏</strong>起关闭至今。Yellowstone 公共事务办公室（Linda Veress）明确表示该步道<strong>「permanently closed」，NPS 计划在未来拆除整座楼梯</strong>：结构已超设计寿命，踏板变形、扶手缺失、焊缝开裂、锈蚀严重；2019 年的翻修估价为 300–350 万美元，因造价上涨已被从峡谷改造工程中剔除，公园「不打算再对这座楼梯投入」。它已从 NPS 所有现行出版物中删除——<a href=\"https://www.nps.gov/yell/planyourvisit/canyonplan.htm\" target=\"_blank\" rel=\"noopener\">NPS 的 Canyon 区页面</a>现在只列 Artist Point、Upper Falls Viewpoints、Brink of the Lower Falls Trail、Red Rock Point。原来的「Uncle Tom’s Point」已改名为 <strong>Upper Falls Viewpoints</strong>（开放），停车场仍叫 Uncle Tom’s Parking Area，这是很多旧攻略混淆的来源。<strong>替代方案：Red Rock Point</strong>（下切约 500 英尺、约 100 级台阶，对岸低位视角）<strong>与 Brink of the Lower Falls Trail</strong>（下到瀑布唇口正上方），两条都开放。</p><p><strong>其余观景台本季均开放，且峡谷缘改造计划已收尾</strong>：Lookout Point 与 Grand View 于 2005 年、Artist Point 于 2007 年、<strong>Inspiration Point 于 2018 年</strong>（两年翻修后重开）、Brink of the Lower Falls 与 Red Rock Point 为最后一期，均已完工。本季无在建观景台。</p><p>住宿与补给数据来自 <a href=\"https://www.nps.gov/yell/planyourvisit/operating-dates.htm\" target=\"_blank\" rel=\"noopener\">NPS Operating Dates 页</a>（最后更新 2026-09-03）。设施在所列末日营业结束时关闭；营地为末日 11:00 清场。</p><table><thead><tr><th>设施</th><th>2026 末日</th></tr></thead><tbody><tr><td><strong>Canyon Lodge 客房（Lodging）</strong></td><td><strong>10/24</strong></td></tr><tr><td>Canyon Lodge Cabins 小木屋</td><td>10/4</td></tr><tr><td>Canyon Lodge Eatery / Gift Shop / M66 Lounge</td><td>10/25</td></tr><tr><td>Canyon Falls Café</td><td>10/4</td></tr><tr><td><strong>Canyon 加油站（Gas &amp; Store 店面）</strong></td><td><strong>10/31</strong>（刷卡油泵全年 24 小时）</td></tr><tr><td>Canyon General Store 杂货</td><td>10/11</td></tr><tr><td>Canyon Visitor Education Center 访客中心</td><td>10/31</td></tr><tr><td>Canyon Campground 营地</td><td><strong>9/19</strong></td></tr><tr><td>Canyon 防熊喷雾租借亭</td><td>10/10</td></tr><tr><td><strong>Lake Yellowstone Hotel 客房</strong></td><td><strong>10/10</strong></td></tr><tr><td>Lake Yellowstone Hotel 餐厅 / Deli / Gift Shop</td><td>10/11</td></tr><tr><td>Fishing Bridge 加油站（店面）</td><td>10/11</td></tr><tr><td>Fishing Bridge Visitor Center</td><td>10/3</td></tr><tr><td>Bridge Bay Campground</td><td>9/13</td></tr></tbody></table><p><strong>Canyon Lodge 确实是园内内陆住宿中撑得最晚的一家</strong>（10/24），Lake Yellowstone Hotel 比它早整整两周（10/10）。10/24 之后园内只剩 Mammoth Hot Springs Hotel（开到 2027 年 3 月）与 Old Faithful Snow Lodge（10/24）。也就是说 <strong>10 月 25–31 日这七天，想拍 Canyon 日出只能住 Mammoth 或出园</strong>，而这七天 Dunraven 已关，从 Mammoth 到 Canyon 要绕 Norris 走 33 英里、约 55 分钟。</p><p>注意：特许经营商 Yellowstone National Park Lodges 官网把 Canyon Lodge &amp; Cabins 写成 10/25、Lake Yellowstone Hotel 写成 10/11，与 NPS 表格差一天（前者含餐饮与商店，后者分列客房）。订房以订单确认为准。</p>"
      },
      {
        "type": "warn",
        "title": "灰熊、Bear Management Area 与安全",
        "html": "<p>Hayden Valley 是园内灰熊密度最高的地方之一。NPS 的原话：<strong>1970 年以来 Hayden Valley 发生的最近 10 起灰熊致人受伤事件中，有 8 起就发生在现划为 Bear Management Area 的范围内</strong>；园方生物学家曾在单具野牛尸体上同时记录到 <strong>23 只灰熊</strong>。</p><p>9 月下旬至 10 月是 <strong>hyperphagia（超量进食期）</strong>：熊为冬眠储脂，每天可增重 <strong>3 磅以上</strong>，摄入量可达 20,000 kcal/日，觅食时间更长、更大胆、对干扰的容忍度更低。9–10 月的首选食物是 whitebark pine 松子，松子歉收的年份熊会更多地转向有蹄类尸体——也就是更多地待在 Hayden Valley 的河谷草甸里。</p><p><strong><a href=\"https://www.nps.gov/yell/planyourvisit/safety.htm\" target=\"_blank\" rel=\"noopener\">NPS 现行指引</a>：</strong></p><ul><li><strong>随身携带防熊喷雾，握在手里或挂在腰带上，绝不能放在背包里。</strong>穿越视野受阻区域时应提前从枪套中取出握在手中</li><li><strong>三人及以上同行。</strong>1970 年以来被熊所伤的人中 <strong>91% 是独行或仅两人同行</strong>，三人以上的只占 9%</li><li>熊冲锋时<strong>站住不动</strong>，等它进到 <strong>60 英尺（18 米）以内再喷</strong>；被扑倒则趴地装死，背包不要卸，双手抱后颈、肘部护脸</li><li>与熊、狼保持 <strong>100 码（91 米）</strong>，与其他所有动物（含野牛）保持 <strong>25 码（23 米）</strong></li><li><strong>不要在黎明、黄昏或夜间徒步</strong>——这与「拍日出」直接冲突，见下</li><li>发现新鲜动物尸体<strong>立即原路撤离并上报</strong>；熊会守尸并攻击接近者</li><li>留在维护过的步道上。NPS 的研究显示离径徒步被熊袭击的概率明显更高</li></ul><p><strong>对摄影者的实操结论</strong>：Hayden Valley 的日出拍摄应当<strong>完全在铺装 pullout 上、贴着车、不离开路肩</strong>。天没亮就开到位、在车里等、光来了下车拍、拍完上车。Canyon Village 的防熊喷雾租借亭 2026 年营业至 <strong>10 月 10 日</strong>，之后只能在 Canyon / Fishing Bridge 的商店买（约 $50–60，且商店 10/11 关门），<strong>更稳妥的做法是入园前在 West Yellowstone、Gardiner 或 Cody 就买好</strong>。喷雾不能带上飞机，行程结束后可捐给出口处的回收箱。</p><p><strong>Bear Management Area 的确切限制与日期</strong>（<a href=\"https://home.nps.gov/yell/learn/management/upload/Yellowstone-Superintendent-s-Compendium.pdf\" target=\"_blank\" rel=\"noopener\">2026 年 Superintendent’s Compendium</a> 原文）：</p><ul><li><strong>Hayden Valley BMA</strong>（2024 年新设，16,453 英亩，<strong>位于 Grand Loop Road 以西</strong>）：<em>「From July 15–Sept. 15, travel is allowed only on designated trails (off-trail travel is prohibited).」</em><strong>即离径禁令的有效期是 7/15–9/15，到 9 月 15 日就结束。9 月下旬至 10 月下旬进园的话，法规上并不禁止在此离径行走。</strong>Mary Mountain Trail 全季开放（3/10–6/15 期间 Nez Perce 端至 Mary Lake 段关闭，且不允许从 Canyon 端穿越）。<strong>但「法规允许」不等于「应该做」</strong>：禁令覆盖 7–9 月是因为那时野牛尸体最集中，而 10 月的 hyperphagia 同样高风险，只是没有立法覆盖。本区所有机位均按「不离开铺装 pullout」设计</li><li><strong>Washburn BMA：8/1–11/10 全面封闭。</strong><strong>Antelope BMA：3/10–11/10 全面封闭。</strong>两者均在 Canyon 以北，且均明确写明 <strong>Dunraven Road、Grand Loop Road、Chittenden Road 及相关 turnout 不受影响</strong>——车上与路边观景台拍 Mount Washburn 方向没问题，但不能徒步进入封闭区</li></ul>"
      },
      {
        "type": "info",
        "title": "日出日落钟点、夏令时、气温与器材",
        "html": "<p>本区全部时间为 <strong>MDT（UTC−6）</strong>。<strong>2026 年夏令时于 11 月 1 日（周日）02:00 结束，恰好落在 10/31 主环路关闭日之后一天——整个「9 月下旬至 10 月下旬」窗口内不会遇到调表。</strong>若你在园外多待到 11/1，那天钟表回拨一小时，日出会突然变成 06:59 MST。</p><table><thead><tr><th>日期</th><th>民用晨光</th><th>日出（方位）</th><th>日落（方位）</th><th>民用暮光</th><th>正午太阳高度</th></tr></thead><tbody><tr><td>9/25</td><td>06:44</td><td><strong>07:12</strong>（90°）</td><td><strong>19:14</strong>（269°）</td><td>19:42</td><td>44.2°</td></tr><tr><td>9/30</td><td>06:50</td><td>07:18（93°）</td><td>19:05（267°）</td><td>19:33</td><td>42.3°</td></tr><tr><td>10/10</td><td>07:02</td><td>07:30（99°）</td><td>18:47（261°）</td><td>19:15</td><td>38.4°</td></tr><tr><td>10/22</td><td>07:17</td><td><strong>07:46</strong>（105°）</td><td><strong>18:26</strong>（255°）</td><td>18:55</td><td>34.0°</td></tr><tr><td>10/31</td><td>07:28</td><td>07:58（109°）</td><td>18:13（251°）</td><td>18:42</td><td>31.0°</td></tr></tbody></table><p>按 Canyon 区（44.72°N, 110.48°W）计算，Hayden Valley 与 Lake Butte 与之相差不超过 1 分钟。一个月内日出推迟 46 分钟、日落提前 48 分钟，<strong>可用光时长从 12 小时缩到 10 小时 15 分</strong>。好处是 10 月下旬 07:46 才日出，不必凌晨 4 点起床。</p><p>气温为 NOAA 1991–2020 气候平均值（Lake Yellowstone 站，海拔 7,892 英尺，与 Canyon 的 7,900 英尺几乎相同）：</p><table><thead><tr><th>月份</th><th>平均最高</th><th>平均最低</th><th>平均降雪</th></tr></thead><tbody><tr><td>9 月</td><td>61.4 °F / 16.3 °C</td><td><strong>34.1 °F / 1.2 °C</strong></td><td>2.4 in</td></tr><tr><td>10 月</td><td>46.0 °F / 7.8 °C</td><td><strong>25.2 °F / −3.8 °C</strong></td><td>3.1 in</td></tr><tr><td>11 月</td><td>32.6 °F / 0.3 °C</td><td>14.8 °F / −9.6 °C</td><td>—</td></tr></tbody></table><p>参考实况：<strong>2025 年 10 月有 25 个夜晚最低温 ≤ 32 °F，最低到 4 °F（−15.6 °C）</strong>；该站 10 月历史极端最低为 <strong>−16 °F（−26.7 °C，2020-10-26）</strong>。</p><p><strong>这不只是受冻，这是本季最重要的摄影条件。</strong>Yellowstone River 的水温在秋季远高于气温，气温每降到冰点以下，河面与热泉区的<strong>蒸汽产量就大幅上升</strong>——Hayden Valley 日出的河雾、Mud Volcano 的蒸汽柱、峡谷底部的雾气，全都是「昨夜低温 −5 °C、今晨无风」这种条件的产物。看到夜间预报 20 °F 以下且晴朗无风，第二天早上就必须出门。</p><p><strong>器材后果，按重要性排序：</strong></p><ul><li><strong>电池</strong>：−5 °C 下锂电池可用容量约掉三到四成，且掉电是「突然归零」而非线性下降。带 3–4 块，贴身内袋保温，换下来的电池回暖后往往还能再用一段</li><li><strong>结露</strong>：从 −5 °C 的路肩钻回开着暖风的车里，镜头前后组、传感器腔、取景器会立刻结雾，且雾在冷机身上化得极慢。做法是<strong>整机连镜头装进密封袋（袋里装着的是室外的冷空气）再进车</strong>，待机身回到车内温度后再开袋。反向同理：不要在车里预热器材</li><li><strong>不要在车内开暖风对着相机吹</strong>，这是最快制造内部结露的方式</li><li><strong>三脚架</strong>：金属腿在 −10 °C 会粘手，碳纤维好得多；带薄手套操作云台</li><li><strong>雪与霜</strong>：10 月平均降雪 3.1 英寸，Dunraven 与 Sylvan 两个高点更多。峡谷边的木栈道与金属台阶结霜后极滑，Brink of the Lower Falls 与 Red Rock Point 那种陡坡在霜期会被临时封闭</li></ul>"
      },
      {
        "type": "good",
        "title": "门票年卡（本季价值 $135/人）、手机信号与加油",
        "html": "<p>Yellowstone 私家车门票 <strong>$35 / 车 / 7 天</strong>，覆盖车上所有乘客，<strong>无需车辆预约</strong>（2026 年没有 timed-entry 制度）。五个入口均可现场刷卡或付现。</p><p><strong>关键的一条：自 2026 年 1 月 1 日起，16 岁及以上的非美国居民须在标准门票之外另付 $100/人 的 nonresident fee——但持 Annual Pass 或 America the Beautiful Pass 入园的人免除此项。</strong>见 <a href=\"https://www.nps.gov/yell/planyourvisit/fees.htm\" target=\"_blank\" rel=\"noopener\">NPS Fees &amp; Passes</a>（最后更新 2026-06-16）。<strong>你手上那张 ATB 年卡因此不只是省掉 $35，而是每人省掉 $135。</strong></p><p>使用要求：<strong>持卡人必须本人在场并出示带照片的身份证件</strong>；收据、照片、截图一律不接受；卡片丢失无法补办也无法查档。ATB 卡覆盖 NPS、USFWS、USFS、BLM、Bureau of Reclamation、USACE 的门票与日间使用费。另注意：<strong>从 South Entrance 进出（包括去 Jackson）会经过 Grand Teton，两园分别收费</strong>，ATB 卡两园通用。</p><p><strong>手机信号：Canyon Village 有信号，但只在村子里。</strong>Canyon 是园内五个有蜂窝覆盖的开发区之一（另有 Mammoth、Old Faithful、Grant Village、Tower-Roosevelt）。Verizon 覆盖最广（约占全园面积的 48%），中位下载约 3.9 Mbps。<strong>全园仅约 8% 的面积有信号</strong>：出了 Canyon Village 往南进 Hayden Valley、或下到峡谷任何一个观景台，基本无服务。Lodge 的 Wi-Fi 仅限住客且极慢。<strong>离线地图与离线的 NPS App 必备</strong>，不要指望在 Hayden Valley 现场查路况。</p><p><strong>加油：Canyon 加油站的刷卡油泵全年 24 小时可用</strong>，有人值守的 Gas &amp; Store 店面 2026 年营业至 <strong>10/31</strong>，但<strong>维修服务 9/6 就结束</strong>、拖车服务到 10/31。Fishing Bridge 加油站店面 10/11 关，Tower-Roosevelt 加油站 <strong>9/6</strong> 就关。园内路段长、没有备选，<strong>10 月中旬以后进园前把油加满，园内看到半箱就补</strong>，低温下续航也会打折。</p>"
      }
    ],
    "spots": [
      {
        "id": "artist-point",
        "n": 1,
        "name": "Artist Point（南缘）",
        "en": "Artist Point, South Rim",
        "score": 5,
        "tldr": "全园最著名的单一画面，但 10 月 15 日之后 Lower Falls 整天都晒不到太阳；9 月下旬的正确窗口是 08:15–09:15。",
        "tags": [
          {
            "t": "年卡覆盖",
            "c": "free"
          },
          {
            "t": "无需预约",
            "c": "free"
          },
          {
            "t": "停车即到",
            "c": "free"
          },
          {
            "t": "10/15 后瀑布全天无光",
            "c": "risk"
          },
          {
            "t": "10/31 起道路关闭",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这是「Grand Canyon of the Yellowstone」这张明信片的实际拍摄点</strong>：308 英尺高的 Lower Falls 位于画面正中远端，两侧是被热液「煮」过的流纹岩崖壁向下游收拢。峡谷在此深逾 1,000 英尺、宽 1,500–4,000 英尺，全长约 20 英里。观景台经 2007 年改造，铺装、无障碍，从停车场走 5 分钟就到",
          "<strong>那些黄色不是矿物染色，是岩石在「生锈」。</strong>NPS 的解释是：63 万年前 Yellowstone Caldera 喷发后，热液气体与热水把这里的流纹岩「烧熟」（hydrothermally altered），岩石中的铁化合物氧化、水合程度不同就呈现不同颜色，黄色主要来自铁与硫。这意味着<strong>颜色的饱和度高度依赖光线角度与湿度</strong>——雨后与低角度侧光下最浓",
          "<strong>Lower Falls 中央那条绿色条纹是水本身的颜色。</strong>瀑布唇口有一处凹槽，使那一段水流更深、不与空气混合、不起白沫，所以透出水体的本色。这是长焦压缩瀑布时唯一值得放大的细节，也是判断你的曝光有没有把高光推爆的现场标尺",
          "<strong>它不是 Thomas Moran 作画的地点</strong>——NPS 明确否认了这个流传很广的说法。一般认为 Moran 的速写取自 Moran Point，最终那幅《Grand Canyon of the Yellowstone》（1872 年由国会买下、直接促成了 Yellowstone 建园）是多个视角的合成",
          "秋季<strong>水量只有春季峰值的十二分之一</strong>：NPS 给出的范围是春季融雪期 63,500 加仑/秒、晚秋 5,000 加仑/秒。后果有两个——瀑布更细更「优雅」但气势弱，<strong>而且水雾几乎消失，这直接决定了本季看不到彩虹</strong>（见下）"
        ],
        "photo": "风光 <strong>5/5</strong>，人像 <strong>2/5</strong>，建筑 <strong>—</strong>。构图元素完备、机位无障碍、朝向正确（视线方位 255°，太阳从背后左肩来），这是本区唯一一个「站定不动就能出片」的点。扣分只在人像：观景台狭窄、栏杆入画、正午人挤人，且背景太强会吃掉主体。<strong>真正的难点全在时间，不在构图</strong>——见下面每个机位的钟点。",
        "shots": [
          {
            "name": "主观景台 —— Lower Falls 正面长轴构图",
            "park": [
              44.7209,
              -110.47884
            ],
            "view": [
              44.72127,
              -110.47941
            ],
            "desc": "从 South Rim Drive 尽头停车场沿铺装步道上行 5 分钟／约 150 米。<strong>视线方位 255°（西南西），到 Lower Falls 直线距离 1.38 公里（0.86 英里）</strong>，站位海拔 2,331 米、瀑布唇口 2,266 米。<strong>9 月 25 日的正确窗口是 08:15–09:15</strong>：瀑布唇口与上半幅在 08:12 才吃到直射光，而对岸北壁（Lookout Point 一侧，2,371–2,385 米）早在 07:30 前后就已见光——<strong>08:15 是「瀑布刚亮、崖壁还没被晒过头」的唯一交集</strong>。到 09:30 崖壁已连晒一个半小时，与阴影中的瀑布下半幅的光比超过 4 EV，单张压不住，只能靠包围曝光救。<strong>10 月 10 日窗口收缩到 09:08–09:52；10 月 15 日是最后一天（09:18–09:42）；10 月 16 日起 Lower Falls 全天不受直射。</strong>焦段：24–35mm 交代峡谷全貌与两侧崖壁收拢，70–200mm 压缩瀑布主体与绿条纹，100–400mm 单拍瀑布唇口纹理。<strong>CPL 是这里的必备件</strong>——它压掉湿岩与水面的散射反光，黄色崖壁的饱和度提升幅度比任何后期都大。（上述受光时刻由 10 米 NED 高程模型逐方位计算峡谷地平线后与太阳位置求交得出，属推算；同一模型对 8 月 15 日算出的瀑布底部受光区间 08:35–09:55，与摄影者长期报告的「09:45 出彩虹、10:00 消失」高度吻合，可作为该模型的旁证。10 米 DEM 在窄峡谷中有平滑误差，实际时刻可能有 ±10 分钟偏差。）"
          },
          {
            "name": "彩虹：本季看不到，原因有两个",
            "view": [
              44.72127,
              -110.47941
            ],
            "desc": "<strong>结论先说：9 月下旬至 10 月下旬，Artist Point 看不到 Lower Falls 的彩虹。</strong>那个传说中「每个晴天 09:45 准点出现、10:00 消失」的彩虹是真的，但它有两个本季无法满足的条件。<strong>其一是几何条件</strong>：多份摄影者记录（8 月中旬、6 月初、7 月中旬）指向同一个太阳位置，即 <strong>高度约 34°、方位约 105°</strong>——彩虹在反日点周围 42° 的圆锥上，要让这个圆锥切到瀑布底部的水雾，太阳高度与方位必须<strong>同时</strong>命中。而这个组合在一年中只出现在 <strong>4 月 26–28 日与 8 月 14–16 日</strong>各三天左右；9 月 25 日太阳走到方位 105° 时高度只有 13.6°，走到 34° 高度时方位已偏到 135°；10 月 22 日全天最高只有 34.0°，且那一刻太阳在正南 178°。几何上无解。<strong>其二是遮挡</strong>：同一高程模型显示<strong>从 9 月 1 日起瀑布底部落水潭已终日处于阴影中</strong>，就算几何对了也没有被照亮的水雾。<strong>其三补一刀</strong>：秋季流量降到 5,000 加仑/秒，只有峰值的 8%，水雾本身就少了一个量级。想拍这道彩虹，正确答案是<strong>八月中旬来，08:35–09:55 之间守在这里，09:45 前架好机</strong>。（本条为几何推算与公开报告交叉验证的结论，未能找到官方口径。）"
          },
          {
            "name": "10 月中旬的「顺峡谷落日」—— 反向利用同一个机位",
            "park": [
              44.7209,
              -110.47884
            ],
            "view": [
              44.72127,
              -110.47941
            ],
            "desc": "既然瀑布在 10 月中旬之后晒不到太阳，就把这个机位反过来用。<strong>Artist Point 到 Lower Falls 的方位是 255°，而 10 月 22 日的日落方位正好是 255°。</strong>也就是说 <strong>10 月 14–19 日这几天，太阳会沿峡谷主轴、几乎正对着 Lower Falls 的方向落下</strong>（当日太阳触及本地天际线的时刻：10/14 约 18:24、10/16 约 18:21、10/19 约 18:15；Artist Point 西侧天际线仅约 2°，遮挡很小）。这是一张纯逆光（contre-jour）画面：整条峡谷是暗的，瀑布是剪影里一道白，天空与远端谷口发亮。<strong>诚实评价：这是一张「有意思」而不是「漂亮」的照片</strong>，崖壁的黄色全部消失，靠的是层次与太阳星芒。f/11–f/16 收成星芒，包围曝光 5 张 ±2 EV 合成，或直接接受剪影。真正的甜点是日落后：<strong>18:26–18:55 的暮光期</strong>，天空的高色温冷光洒进峡谷，配合谷底可能出现的雾气，这时的动态范围反而是全天最容易处理的。（方位与时刻为天文计算 + 10 米 DEM 天际线推算。）"
          },
          {
            "name": "Point Sublime —— 沿 South Rim Trail 东行避开人群",
            "park": [
              44.7209,
              -110.47884
            ],
            "view": [
              44.7245,
              -110.45948
            ],
            "desc": "从 Artist Point 观景台继续沿 South Rim Trail 向东（下游）约 1.5 公里到 Point Sublime，往返约 1 小时。海拔 2,384 米，比 Artist Point 高 53 米。<strong>这里看不到瀑布</strong>，题材是峡谷本身——更宽的谷段、更完整的崖壁色带、以及几乎没有人。因为不依赖瀑布受光，<strong>它的最佳时段与 Artist Point 完全不冲突</strong>：日出后头一小时（9/25 的 07:15–08:10、10/22 的 07:50–08:45）低角度侧光扫过崖壁，是拍纹理与色带的最好时候，正好填上「瀑布还没亮」的那段空档。24–70mm 主力，70–200mm 压缩崖壁层次。注意 Superintendent’s Compendium 规定：<strong>Upper Falls 与 Inspiration Point 之间的峡谷内，步行仅限栈道与步道</strong>，不要为构图翻出护栏。此段无遮蔽、无信号，须带喷雾。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "含在园区门票内。<strong>America the Beautiful 年卡直接覆盖</strong>，另免 $100/人 的非居民附加费",
          "hours": "观景台<strong>全天开放、不设门禁</strong>（园区 24 小时开放，路段开放期内不夜间关闭）。<strong>唯一的时间限制是道路季节：South Rim Drive 所属的主段 2026 年通车至 10/31</strong>，NPS 未单独公布 South Rim Drive 的开闭日期，降雪后可能先于主路临时封闭",
          "parking": "South Rim Drive 尽头的大型免费停车场，<strong>不收费</strong>。10 月人流已大幅下降，但 09:00–15:00 仍会满；07:00 前到场基本随便停，这与最佳拍摄时段正好一致",
          "walk": "停车场到主观景台 <strong>5 分钟／约 150 米</strong>，铺装、缓上坡、可轮椅通行；延伸到 Point Sublime 单程约 1.5 公里、30 分钟，土路有起伏"
        },
        "notes": [
          "<strong>本区最容易踩的坑</strong>：按「日出去 Artist Point」执行，结果 07:12 到场时瀑布还要一小时才亮。正确顺序是<strong>先在 Point Sublime 或 South Rim Trail 拍崖壁侧光，08:10 前回到主观景台等瀑布见光</strong>",
          "<strong>10 月 16 日之后不要再为「拍到有光的 Lower Falls」而来这里</strong>。那之后的正确期待是：均匀阴影下的瀑布（其实很适合慢门与后期，反差小）、被侧光照亮的崖壁、以及 10 月中旬那几天的顺峡谷落日",
          "三脚架在观景台上允许，但平台窄、10 月虽人少仍需避免占道；栏杆是金属的，长焦时可作为额外支撑但会传导振动",
          "<strong>栏杆外一律禁入</strong>。峡谷边缘是被热液蚀变的酥松岩石，Superintendent’s Compendium 明文限制该段峡谷内的步行范围",
          "手机无信号。日出前从 Canyon Village 开到这里约 3.5 英里／10 分钟（Grand Loop Road 南下 2 英里转 South Rim Drive，再 1 英里到路尽头），路上大概率遇野牛占道，请把这段预留成 25 分钟",
          "停车场有厕所（季节性）；<strong>无餐饮、无饮水</strong>，最近的补给在 Canyon Village"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/26/Artist_Point_view_of_Yellowstone_Canyon_01.jpg",
            "cap": "Artist Point 主观景台视角，Lower Falls 位于画面远端 · Dirtsc / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/66/Artist_Point._Yellowstone._NP_%2830657776088%29.jpg",
            "cap": "崖壁氧化色带与峡谷收拢感 · Bernard Spragg. NZ / CC0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Visitors_at_Artist_Point_%2811983069053%29.jpg",
            "cap": "观景台实况与平台宽度 · Yellowstone National Park / Public domain"
          }
        ]
      },
      {
        "id": "north-rim-viewpoints",
        "n": 2,
        "name": "北缘观景带（Lookout Point · Grand View · Inspiration Point）",
        "en": "North Rim Drive: Lookout Point · Grand View · Inspiration Point",
        "score": 4.5,
        "tldr": "三处均开放，Inspiration Point 已于 2018 年翻修后重开；单向环路一趟串完，光线窗口比 Artist Point 宽得多。",
        "tags": [
          {
            "t": "三处均开放",
            "c": "free"
          },
          {
            "t": "年卡覆盖",
            "c": "free"
          },
          {
            "t": "单向环路",
            "c": "free"
          },
          {
            "t": "Red Rock 需下切 500 英尺",
            "c": "risk"
          },
          {
            "t": "10/31 起道路关闭",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Inspiration Point 的关闭已经结束。</strong>它经历了两年的整体翻修（是峡谷缘改造计划的第四期），<strong>2018 年重新开放</strong>，观景区被扩大、更安全也更无障碍，可同时看向上游与下游、体现峡谷的纵深尺度。在此之前 Lookout Point 与 Grand View 已于 2005 年完成改造、Artist Point 于 2007 年完成，最后一期（Brink of the Lower Falls 与 Red Rock Point）也已完工。<strong>换句话说，整个 Canyon Rim Overlooks 改造计划已经收尾，本季无在建观景台</strong>",
          "<strong>三处的角色完全不同，不要当成重复。</strong>Lookout Point（2,371 米）是北缘看 Lower Falls 的主机位，与 Artist Point 隔谷相望、光照条件不同；Grand View（2,385 米，本区最高）不看瀑布，看的是峡谷与河道本身的大跨度；Inspiration Point（2,357 米）在最下游，能远远看到瀑布，主打峡谷全长的纵深",
          "<strong>Red Rock Point 是一条独立的陡下切步道，从 Lookout Point 分出去</strong>，不到半英里内下降近 500 英尺：先是碎石路，然后变成土石，接一段栈道，最后近 100 级台阶到观景平台（海拔 2,282 米，比北缘低约 90 米）。<strong>NPS 不建议心脏、肺部或其他健康状况不佳者前往。</strong>它是 Uncle Tom’s Trail 关闭后最接近那种「低位、贴近瀑布」体验的替代，且人比 Lookout Point 少得多",
          "<strong>North Rim Drive 是单向的</strong>，从南往北单方向通行，Inspiration Point 在一条支路上（Inspiration Point Road）。这意味着<strong>如果你在 Lookout Point 拍完想回头补 Brink of the Lower Falls，必须绕回 Grand Loop Road 重新进一次</strong>，清晨这一趟绕行大约 10 分钟——安排顺序时先想清楚",
          "<strong>Lookout Point 是「看整条瀑布」的最佳单点。</strong>它与 Artist Point 的差别不只是角度：Artist Point 看的是「瀑布 + 峡谷两侧收拢」的经典构图，Lookout Point 更正对瀑布、更接近、并能看到落水潭。两者的受光时刻也不同，一个上午可以都吃到"
        ],
        "photo": "风光 <strong>4.5/5</strong>，人像 <strong>3/5</strong>。Lookout Point 与 Red Rock Point 是本区最强的两个 Lower Falls 机位（仅次于 Artist Point 的辨识度）；Grand View 的纯峡谷题材在阴天里比任何瀑布机位都好用；Inspiration Point 的平台够宽、栏杆低，是本区唯一勉强能拍环境人像的地方。<strong>关键优势：这三处的主体（黄色崖壁与河道）朝南至东南，从日出后一小时到中午都有光</strong>，不像 Artist Point 那样卡在一个几十分钟的窗口里。",
        "shots": [
          {
            "name": "Lookout Point —— 北缘看 Lower Falls 的主机位",
            "park": [
              44.72158,
              -110.48737
            ],
            "view": [
              44.72088,
              -110.48858
            ],
            "desc": "停车带就在观景台旁，步行 <strong>2–3 分钟／约 120 米</strong>，铺装、可轮椅。<strong>最佳时段 08:30–11:00</strong>（9/25）／<strong>09:00–11:30</strong>（10/22）。与 Artist Point 那个 08:15–09:15 的窄窗口<strong>不冲突</strong>，可以先南缘再北缘（两地开车约 12 分钟，含绕回 Grand Loop Road）。这个朝向是从北侧向西南看，太阳从左后方来，崖壁与瀑布同时受光的时间比南缘长得多。焦段 24–70mm 拍瀑布加峡谷环境，<strong>100–400mm 是这里的关键焦段</strong>——把 308 英尺瀑布与落水潭单独压出来，秋季水量小、水柱细，长焦更能交代形态。CPL 必带。"
          },
          {
            "name": "Red Rock Point —— 下切 500 英尺的低位平台",
            "park": [
              44.72158,
              -110.48737
            ],
            "view": [
              44.71986,
              -110.49022
            ],
            "desc": "从 Lookout Point 分出的独立步道，<strong>不到 0.5 英里下降近 500 英尺</strong>，碎石路转土石路，接栈道，最后近 100 级台阶。<strong>下行 15–20 分钟，上行 30–45 分钟。</strong>平台海拔 2,282 米，视角比北缘低约 90 米、更贴近瀑布。<strong>最佳时段 09:00–11:00</strong>——需要太阳升高到能照进峡谷内侧。16–35mm 交代低位仰视感，70–200mm 拍瀑布主体。<strong>NPS 明确不建议心肺状况不佳者下去</strong>，且这条路在大雨或霜期后会变得不安全，出发前请在 Lookout Point 看现场标识。一机一镜下切，三脚架带轻的。"
          },
          {
            "name": "Grand View —— 纯峡谷题材，阴天与正午的解法",
            "park": [
              44.72331,
              -110.48461
            ],
            "view": [
              44.72263,
              -110.48403
            ],
            "desc": "本区最高的观景台（2,385 米），停车即到，步行 <strong>2 分钟／约 100 米</strong>，与 Lookout Point 之间有本区最长的一段无障碍步道相连。<strong>这里看不到瀑布</strong>，主体是峡谷本体与下方的 Yellowstone River 河道。<strong>正因为不依赖瀑布受光，它是全天与全天候都能拍的机位</strong>：09:00–13:00 直射光下拍崖壁色带饱和度最高，阴天拍岩壁纹理与河道的墨绿反而更好。24–70mm 主力，70–200mm 压缩崖壁层次与河道弯道。这是本区唯一适合放在「中午没别处可去」时段的点。"
          },
          {
            "name": "Inspiration Point —— 峡谷纵深与上下游双向视野",
            "park": [
              44.72543,
              -110.46974
            ],
            "view": [
              44.72467,
              -110.46979
            ],
            "desc": "从单向的 North Rim Drive 拐上 Inspiration Point Road 支路到底，停车场到观景区 <strong>3–4 分钟／约 150 米</strong>，2018 年翻修后铺装、无障碍。位置最靠下游，<strong>能同时看向上游（远处的 Lower Falls）与下游（峡谷延伸）</strong>，主打的是 20 英里长峡谷的尺度感而不是瀑布细节。<strong>最佳时段 09:30–12:00</strong>，以及日落前一小时的西侧暖光（9/25 的 18:15–19:14、10/22 的 17:25–18:26）。16–35mm 拍纵深，70–200mm 把远处的瀑布从峡谷里抠出来。平台宽、栏杆低，本区拍环境人像唯一可用的地方。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "含在园区门票内，<strong>年卡覆盖</strong>",
          "hours": "四处观景台均<strong>全天开放、不设门禁</strong>。<strong>Red Rock Point 步道无官方公布的秋季关闭日期</strong>，与 Brink of the Lower Falls 同属冬季关闭的下切步道，霜期与雨后可能临时封闭，且本区域可能因熊活动关闭。North Rim Drive 所属主段 2026 年通车至 <strong>10/31</strong>（NPS 未单独公布 North Rim Drive 的开闭日期）",
          "parking": "四处各有免费停车场／停车带，均在观景台旁。Lookout Point 与 Grand View 的场地最大；Inspiration Point 在支路尽头，场地中等。10 月清晨全部空着",
          "walk": "Lookout Point 2–3 分钟／120 米；Grand View 2 分钟／100 米；Inspiration Point 3–4 分钟／150 米，以上均铺装可轮椅；<strong>Red Rock Point 单程不到 0.5 英里但落差近 500 英尺，往返 45–65 分钟</strong>"
        },
        "notes": [
          "<strong>North Rim Drive 单向通行</strong>，规划顺序时注意：进入后依次是 Brink of the Lower Falls → Lookout Point（含 Red Rock Point 支线）→ Grand View → Inspiration Point 支路 → 出口回 Canyon Village。<strong>漏掉的点必须绕回 Grand Loop Road 重进一次，约 10 分钟</strong>",
          "<strong>Red Rock Point 与 Brink of the Lower Falls 是本区两条下切步道，都从 North Rim Drive 出发</strong>。在 7,400–7,800 英尺高度上一个上午做两条是可行的，但请把它们分开安排，中间用 Grand View 这种「停车即到」的点缓冲",
          "<strong>Grand View 与 Mammoth 那一侧 Tower Fall 附近的峡谷视角是两个不同的地方</strong>，本条只覆盖 Canyon 的北缘观景带",
          "<strong>Washburn BMA 于 8/1–11/10 全面封闭、Antelope BMA 于 3/10–11/10 全面封闭</strong>，两者都在 Canyon 以北。<strong>Dunraven Road、Grand Loop Road、Chittenden Road 及 turnout 不受影响</strong>，但不要从北缘步道往北进入林区",
          "峡谷缘的护栏外一律禁入。Superintendent’s Compendium 规定<strong>Inspiration Point 与 Silver Cord Cascade 之间的峡谷内步行仅限指定步道与栈道</strong>",
          "四处均无信号、无餐饮；停车场有季节性厕所。从 Canyon Village 到 North Rim Drive 入口约 1.5 英里"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Fall_sunrise_at_Lookout_Point_Overlook_%2849015104423%29.jpg",
            "cap": "秋季日出时的 Lookout Point 实景 · Yellowstone National Park / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/53/Lower_Falls_from_Lookout_Point_%2853524958266%29.jpg",
            "cap": "Lookout Point 看 Lower Falls 与落水潭 · Yellowstone National Park / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Views_of_the_Grand_Canyon_of_the_Yellowstone_from_Inspiration_Point_%2848324443802%29.jpg",
            "cap": "翻修后的 Inspiration Point 与峡谷纵深 · Yellowstone National Park / Public domain"
          }
        ]
      },
      {
        "id": "brink-lower-falls",
        "n": 3,
        "name": "Brink of the Lower Falls（瀑布唇口）",
        "en": "Brink of the Lower Falls Trail, North Rim",
        "score": 4,
        "tldr": "开放。0.4 英里下切到 308 英尺瀑布的唇口正上方，回程爬升是本区最累的 25–40 分钟；水雾会糊镜。",
        "tags": [
          {
            "t": "开放（夏秋季）",
            "c": "free"
          },
          {
            "t": "年卡覆盖",
            "c": "free"
          },
          {
            "t": "下切陡峭",
            "c": "risk"
          },
          {
            "t": "结霜期临时封闭",
            "c": "risk"
          },
          {
            "t": "熊活动可致封闭",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>NPS 官方口径：这条步道在 0.4 英里内下降 600 英尺（180 米），往返 0.7 英里</strong>，十余个之字形急弯，官方注明「不建议心脏、肺部或其他健康状况不佳者前往」。<strong>需要说明的一点</strong>：10 米 NED 高程数据与公开的 GPS 轨迹都指向约 110–120 米（360–400 英尺）的实际落差，比官方数字小。<strong>官方数字未能核实其测量基准</strong>，但无论按哪个数，回程都是连续陡上",
          "<strong>终点是瀑布唇口正上方的观景平台</strong>，你站在 308 英尺跌水的起点，往下看是整条水柱和它砸出的落水潭。<strong>这是全园唯一能从上方俯视这条瀑布纵剖面的位置</strong>，与 Artist Point 的正面远景、Red Rock Point 的对岸低位构成三个完全不同的视角",
          "这里能验证「绿条纹」的成因：<strong>唇口有一处凹槽让那一段水更深、不掺气、不起沫</strong>，在唇口正上方能直接看到凹槽形状与那段深绿色水体的对应关系。这是长焦在 Artist Point 拍到的那条绿带的物理来源",
          "<strong>步道起点附近有一段短支线可以看到 Upper Falls</strong>，所以哪怕不打算下切（或步道因结霜封闭），来这个停车场也不算白来。这段支线是铺装、无障碍的。此外 2021 年这条步道完成了路面与护栏翻新，是 Canyon 峡谷缘长期改造计划的最后阶段之一（与 Red Rock Point 同批）"
        ],
        "photo": "风光 <strong>4/5</strong>，人像 <strong>2/5</strong>。视角独特性满分——俯视瀑布纵剖面是别处拿不到的画面；扣分在两点：<strong>广角装不下这个尺度、长焦又没有退路</strong>，实际最好用的是 16–24mm 贴着栏杆向下拍；以及平台被水雾持续打湿，器材维护成本高。本季有个额外好处：<strong>秋季流量只有峰值的 8%，水雾比夏季少很多，拍摄难度实际上是全年最低的</strong>——夏天这里根本没法架机。",
        "shots": [
          {
            "name": "唇口平台 —— 俯视瀑布纵剖面",
            "park": [
              44.71979,
              -110.497
            ],
            "view": [
              44.7182,
              -110.49631
            ],
            "desc": "停车场在 North Rim Drive 上（North Rim 停车带，44.71979, −110.49700），步道口在 44.71935, −110.49744。<strong>下行 15–20 分钟，回程上行 25–40 分钟</strong>（海拔 2,378→2,266 米，在 7,400–7,800 英尺高度上做连续陡上，不要低估）。<strong>最佳时段：日出后至 10:00</strong>——9/25 为 07:30–10:00、10/22 为 08:00–10:00。理由不是「光好」而是「光不好」：<strong>唇口正上方这个角度基本是俯拍，你要的是均匀的漫射光让水柱有层次，而不是直射光把水面高光打爆</strong>。阴天在这里是加分项。焦段 16–24mm 为主（贴栏杆向下，把水柱与落水潭同时收进），35–50mm 拍唇口凹槽与绿色水体细节。快门策略：<strong>不要一律慢门</strong>。1/500 s 以上凝固水花的颗粒感在这个距离上比丝绢化好看；要丝绢感则 1/4–1 s 配 ND，但秋季光线弱时常常不用 ND 就能做到。"
          },
          {
            "name": "起点支线 —— Upper Falls 视角（铺装、无障碍）",
            "park": [
              44.71979,
              -110.497
            ],
            "view": [
              44.71979,
              -110.497
            ],
            "desc": "步道最开始有一段铺装短支线可看 Upper Falls（109 英尺）。<strong>步道因霜滑或熊活动封闭时，这段仍然开放</strong>，是最省力的备案。距停车场 2–3 分钟。70–200mm 压缩瀑布主体。（该支线观景处无独立 OSM 实体，此处坐标用停车带中心，地图针脚略有偏移。）"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "含在园区门票内，<strong>年卡覆盖</strong>，步道本身无额外费用",
          "hours": "NPS 明确标注该步道 <strong>Season: Summer, Fall；This trail is closed in winter</strong>，未公布具体的秋季关闭日期——实际以降雪结霜为准，且 <strong>NPS 与 AllTrails 均标注「本区域可能因熊活动临时关闭」</strong>。所属路段（North Rim Drive）随主段通车至 10/31",
          "parking": "North Rim Drive 沿线的免费路侧停车带，车位有限（约 20–30 辆）；10 月清晨基本空着",
          "walk": "往返 0.7 英里／1.1 公里。<strong>下行 15–20 分钟、上行 25–40 分钟</strong>，全程之字形陡坡，铺装但结霜后极滑；无中途座椅"
        },
        "notes": [
          "<strong>水雾会在几分钟内在前镜片上铺满一层细密水膜，这是这里最实际的技术问题。</strong>做法：①带一支 UV/保护镜专门当挡雾片，脏了就整片换下来擦，不要反复擦镀膜镜片；②遮光罩装上，能挡掉相当一部分斜向来雾；③随身两块超细纤维布，一块干一块微湿，先湿擦再干擦；④<strong>不拍的时候镜头朝下并盖上盖</strong>，这比事后擦有效得多；⑤拍完立刻检查照片，水膜在 LCD 上看不出来但会在逆光里形成一片雾状光斑",
          "<strong>低温 + 水雾 = 结冰。</strong>10 月清晨这里的平台、栏杆与最后几十级台阶常有薄冰，带微钉鞋套（冰爪不必要，鞋套就够）。这也是步道被临时封闭的最常见原因",
          "<strong>回程比看起来更难受</strong>：海拔 7,400 英尺、连续陡上、清晨零下。建议一机一镜下切，三脚架带轻的那支，不要把整包器材背下去",
          "这条步道不允许宠物；无障碍性仅限起点支线",
          "与 Red Rock Point 共享同一条 North Rim Drive，两处都要下切；<strong>一个上午做两条下切在这个海拔上是现实的，但要留足恢复时间</strong>",
          "无手机信号，无饮水。步道上没有厕所，最近的在停车区（季节性）"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Brink_of_the_Lower_Falls_Trail_%2848637850307%29.jpg",
            "cap": "之字形下切步道实况 · Yellowstone National Park / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/98/New_pavement_and_railings_at_Brink_of_the_Lower_Falls_Trail_%283%29_%2851225605589%29.jpg",
            "cap": "2021 年翻新后的路面与护栏 · YellowstoneNPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Brink_of_the_Lower_Falls_viewing_area_%2853041959459%29.jpg",
            "cap": "唇口观景平台与俯视角度 · YellowstoneNPS / Public domain"
          }
        ]
      },
      {
        "id": "uncle-toms-trail",
        "n": 4,
        "gone": "已被 NPS 永久关闭",
        "name": "Uncle Tom’s Trail（328 级台阶）",
        "en": "Uncle Tom’s Trail, South Rim",
        "score": 4,
        "tldr": "不是季节性关闭、不是维修中——NPS 已确认永久关闭并计划拆除楼梯，自 2019 年夏起无人通行。",
        "tags": [
          {
            "t": "永久关闭",
            "c": "risk"
          },
          {
            "t": "计划拆除",
            "c": "risk"
          },
          {
            "t": "无重开时间表",
            "c": "risk"
          },
          {
            "t": "停车场仍在用",
            "c": "free"
          }
        ],
        "highlights": [
          "<strong>1898 年由导游 Tom Richardson 开辟</strong>，最初是 528 级木梯加绳梯的组合；游客先坐渡船过 Yellowstone River（Chittenden Bridge 尚未建成），爬上南缘，再顺绳梯下到峡谷里看瀑布，中途在下面吃一顿野餐再原路返回。1889 年曾有人申请在对岸崖壁上修一座巨型电梯，被时任园长 Boutelle 顶回去了",
          "<strong>改造后的版本是 328 级金属台阶，下到峡谷深度的约四分之三处</strong>，终点平台位于 Lower Falls 下游，距离近得能被水雾打湿——这是园内唯一一个「不用长焦就能把 308 英尺瀑布填满画面」的位置，也是它值得被记住的全部理由",
          "<strong>关闭过程</strong>：2017 年随 Upper Falls Viewpoint（原名 Uncle Tom’s Point）改造工程一并关闭，2018 年 10 月与 2019 年夏两次短暂重开，2019 年夏因结构安全被「无限期关闭」至今。园方描述楼梯状况为「poor」：踏板变形、扶手缺失、焊缝开裂、锈蚀，且落石造成多处绝路",
          "<strong>2019 年的翻修估价 300–350 万美元，因造价上涨被从峡谷整体改造工程中剔除。</strong>Yellowstone 公共事务办公室的正式表述是「permanently closed」，并称 NPS 计划在未来拆除整座楼梯、「不打算再对这座楼梯投入」。它已从 NPS 所有现行出版物中删除"
        ],
        "photo": "<strong>本次为 0。</strong>正常年份它是 4/5 的独特低位机位（近距离仰拍瀑布、水雾入画），但那个画面在可预见的未来不会再有。把这条替换成 <strong>Red Rock Point</strong>（对岸低位，同样下切约 500 英尺）与 <strong>Brink of the Lower Falls Trail</strong>（瀑布唇口正上方），两者合起来覆盖了它的大部分价值。",
        "shots": [
          {
            "name": "楼梯顶端（当前关闭，栈道已封）",
            "park": [
              44.71491,
              -110.49578
            ],
            "view": [
              44.71729,
              -110.49471
            ],
            "desc": "停车场仍在正常使用（现名 Uncle Tom’s Parking Area，是 Upper Falls Viewpoints 的停车场）。从这里沿 South Rim Trail 走过去，<strong>楼梯入口已封闭，不要越过封锁标识</strong>。这一带的替代拍摄价值在 South Rim Trail 本身：沿线可见 Crystal Falls（129 英尺，Cascade Creek 汇入峡谷处）与 Upper Falls 的侧向视角。"
          }
        ],
        "access": {
          "book": "—",
          "ticket": "—",
          "hours": "<strong>永久关闭，无重开时间表，NPS 计划拆除</strong>",
          "parking": "Uncle Tom’s Parking Area 仍开放（44.71491, −110.49578），是 Upper Falls Viewpoints 与 South Rim Trail 的正规停车场，免费",
          "walk": "不可进入"
        },
        "notes": [
          "<strong>务必与 Upper Falls Viewpoints 区分开</strong>：那个观景台就是原来的「Uncle Tom’s Point」，2017–2018 年改造后重开并改名，是开放的；关闭的是它下方那条下切台阶",
          "很多 2018 年之前出版的中文与英文攻略仍把这条列为「必走」，甚至有 2023 年的博客写成「因维修关闭」。<strong>按永久关闭处理即可，不要留期待</strong>",
          "不要试图从 South Rim Trail 上找绕行路径下切。Superintendent’s Compendium 明文规定 <strong>Upper Falls 与 Inspiration Point 之间的峡谷内步行仅限栈道与步道</strong>，违规可被引用；何况那是酥松的热液蚀变岩",
          "若你专程想要「站在瀑布正下方」的画面，园内目前唯一下到峡谷底部的步道是<strong>Seven Mile Hole Trail</strong>（往返 10.2 英里、强度大），而它到不了 Lower Falls 底部，只到下游的河边"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Descending_the_stairs_of_Uncle_Tom%27s_Trail_%2820700897544%29.jpg",
            "cap": "关闭前的 328 级台阶实况 · Yellowstone National Park / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Uncle_Tom%27s_Trail_as_seen_from_the_North_Rim_%2815649919967%29.jpg",
            "cap": "从北缘看这座悬在崖壁上的楼梯 · Yellowstone National Park / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/66/Lower_Falls_viewed_from_Uncle_Tom%27s_Trail_%2830494725907%29.jpg",
            "cap": "楼梯终点平台看 Lower Falls，这个视角现已不可复现 · Yellowstone National Park / Public domain"
          }
        ]
      },
      {
        "id": "upper-falls-brink",
        "n": 5,
        "name": "Upper Falls View 与 Brink of the Upper Falls",
        "en": "Upper Falls View · Brink of the Upper Falls",
        "score": 3.5,
        "tldr": "两个低成本、几乎不用走路的点，合起来 40 分钟；朝向决定了它们是全区唯一适合正午与阴天拍的地方。",
        "tags": [
          {
            "t": "开放",
            "c": "free"
          },
          {
            "t": "年卡覆盖",
            "c": "free"
          },
          {
            "t": "几乎不用走路",
            "c": "free"
          },
          {
            "t": "规模远小于 Lower Falls",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Upper Falls 高 109 英尺（33.2 米）</strong>，是 Lower Falls 的三分之一强。它的价值不在尺度而在<strong>可及性与视角多样性</strong>：Brink of the Upper Falls 能站到唇口边缘（几乎不用走路），Upper Falls View 则给出侧上方的全景",
          "<strong>Upper Falls View 就是原来的「Uncle Tom’s Point」</strong>，2017–2018 年完成改造后重开并改名为 Upper Falls Viewpoints。这是本区最容易被旧攻略搞混的一处——观景台是开放的，关闭的只是从这里下切的那条 328 级台阶",
          "<strong>Brink of the Upper Falls 有自己独立的支路</strong>，在 Grand Loop Road 上、位于 North Rim Drive 与 South Rim Drive 两个路口之间，很多人从主路一冲而过就漏掉了。停车场到唇口只有一两分钟平路",
          "<strong>顺手能带上 Crystal Falls</strong>：Cascade Creek 以 129 英尺的落差汇入峡谷，位于 Upper 与 Lower 两瀑之间，<strong>从 Upper Falls Viewpoints 东侧的 South Rim Trail 上可见</strong>。这是峡谷里第三条瀑布，绝大多数游客不知道它存在"
        ],
        "photo": "风光 <strong>3.5/5</strong>，人像 <strong>2/5</strong>。题材本身不如 Lower Falls，但有两个实际优势：<strong>其一，投入产出比最高</strong>——两个点合起来 40 分钟、几乎零爬升；<strong>其二，它们不依赖那个狭窄的受光窗口</strong>。Upper Falls 位置比 Lower Falls 靠上游、峡谷在此浅得多（唇口 2,324 米 vs 下游 2,266 米），受阴影影响远小，<strong>所以这是本区唯一在 10 月下旬和阴天里都还能正常出片的瀑布</strong>。当 Artist Point 那边彻底没戏的时候，这里是唯一的瀑布备案。",
        "shots": [
          {
            "name": "Brink of the Upper Falls —— 唇口边缘",
            "view": [
              44.71305,
              -110.49968
            ],
            "desc": "从 Grand Loop Road 转入 Brink of the Upper Falls Drive，停车场到唇口 <strong>1–2 分钟、约 80 米平路</strong>。视线基本朝北偏东俯视水流跌落。<strong>最佳时段：全天可拍，但 9:00–11:00 与阴天最好。</strong>这里峡谷浅，直射光反而会造成水面高光溢出；低角度早光会让水花过曝而岩石死黑。焦段 24–35mm 拍唇口与下游谷口的关系，50–85mm 拍水流被岩槽切分的纹理。慢门 1/2–2 s 配 CPL（不需要强 ND，秋季光线本身弱）。<strong>这个停车场无独立的 OSM 停车面数据，故省略 park 字段</strong>；路口在 Grand Loop Road 上有明确指示牌。"
          },
          {
            "name": "Upper Falls View（原 Uncle Tom’s Point）—— 侧上方全景",
            "park": [
              44.71491,
              -110.49578
            ],
            "view": [
              44.71464,
              -110.49723
            ],
            "desc": "从 South Rim Drive 第一个左转进 Upper Falls Viewpoints 停车场（即 Uncle Tom’s Parking Area），步行 <strong>3–5 分钟／约 200 米</strong>，铺装。有两个观景位，给出 Upper Falls 的侧上方与正侧向视角。<strong>最佳时段 09:00–12:00</strong>：这个朝向要等太阳升到一定高度才能照进瀑布所在的凹口。35–70mm 主力。<strong>顺路一定要往东多走几百米上 South Rim Trail 看 Crystal Falls</strong>，那是 129 英尺的支流跌水，几乎无人；这段属于「Upper Falls 与 Inspiration Point 之间」的管制范围，<strong>只能走在栈道与步道上</strong>。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "含在园区门票内，<strong>年卡覆盖</strong>",
          "hours": "两处均<strong>全天开放、不设门禁</strong>。限制来自道路季节：所属主段 2026 年通车至 <strong>10/31</strong>；<strong>NPS 未单独公布 South Rim Drive 与 Brink of the Upper Falls Drive 的开闭日期</strong>",
          "parking": "两处各有免费停车场。Upper Falls Viewpoints 的场地较大（原 Uncle Tom’s 停车场）；Brink of the Upper Falls 的场地较小，夏季常满，10 月不成问题",
          "walk": "Brink of the Upper Falls <strong>1–2 分钟／80 米</strong>；Upper Falls View <strong>3–5 分钟／200 米</strong>，均为铺装缓坡"
        },
        "notes": [
          "<strong>再强调一次命名</strong>：Upper Falls View / Upper Falls Viewpoints = 原 Uncle Tom’s Point，开放；Uncle Tom’s Trail（下切台阶）永久关闭；Uncle Tom’s Parking Area 是前者的停车场，仍在使用",
          "<strong>Upper 与 Lower 两条瀑布无法在同一个位置同时看到</strong>——NPS 的解释是峡谷在两瀑之间转了个弯。不要浪费时间找那个「都能拍到」的机位",
          "这两处是本区<strong>阴天与正午的唯一去处</strong>。行程安排上应当把它们当作弹性缓冲，而不是固定时段的目标",
          "栏杆外禁入；Superintendent’s Compendium 对 Upper Falls 至 Inspiration Point 区间有专门的步行限制",
          "Brink of the Upper Falls 的支路入口不显眼，从 Canyon Junction 南下时在North Rim Drive 与 South Rim Drive 两个路口之间，注意看牌",
          "两处均无信号、无餐饮；停车场有季节性厕所"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/90/Upper_Falls_of_the_Yellowstone_River%2C_Yellowstone.jpg",
            "cap": "Upper Falls 全景 · Supercarwaar / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Upper_Yellowstone_Falls_%2837028523416%29.jpg",
            "cap": "唇口附近的水流与岩槽 · Jason Jacobs / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/34/Grand_Canyon_of_the_Yellowstone_Upper_Falls_%288044053340%29.jpg",
            "cap": "Upper Falls 竖构图与下游谷口 · Tony Hisgett / CC BY 2.0"
          }
        ]
      },
      {
        "id": "hayden-valley",
        "n": 6,
        "name": "Hayden Valley（海登谷）",
        "en": "Hayden Valley",
        "score": 5,
        "tldr": "公路在河的西侧，所以日出时你正对着太阳与河雾——这是全园最好的逆光野生动物机位，且整季都在。",
        "tags": [
          {
            "t": "年卡覆盖",
            "c": "free"
          },
          {
            "t": "路边即拍",
            "c": "free"
          },
          {
            "t": "整季开放至 10/31",
            "c": "free"
          },
          {
            "t": "灰熊高密度区",
            "c": "risk"
          },
          {
            "t": "野牛占道常见",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>关键的地理事实，先说清楚：Grand Loop Road 在 Hayden Valley 段走在 Yellowstone River 的西侧。</strong>实测（OSM 路网与河道逐纬度比对）：北纬 44.640 处公路在河西 237 米、44.650 处 40 米、44.668 处 236 米、44.675 处 1,251 米。<strong>所以从所有 pullout 上你都是朝东／东北看过河去</strong>——这一条决定了本地全部的光线策略，而大多数攻略从不提",
          "<strong>结果就是：日出时太阳正从河谷对岸升起，河雾被完全逆光照亮。</strong>9 月 25 日日出方位 <strong>90°（正东）</strong>，10 月 22 日 <strong>105°（东南东）</strong>，正好落在你的视线方向上。这不是「顺便好看」，而是<strong>全园最可靠的逆光野生动物机位</strong>：野牛的呼气、河面蒸汽、草甸露水在逆光下全部发光，主体自然成为剪影或轮廓光",
          "<strong>物种清单与出现规律</strong>：野牛是全季常驻，8 月发情期（rut）后仍成群；灰熊在春季与初夏最常见（捕食新生牛犊与麋鹿犊），但秋季 hyperphagia 期仍频繁出现；狼常见（NPS 用词是「wolves are often seen as well」）；郊狼与狐狸几乎天天有；<strong>Alum Creek 一带的泥滩是水鸟区</strong>——鸭、雁、American white pelican 在河上，各种滨鸟在泥滩，以及白头海雕、northern harrier 与 <strong>sandhill crane（沙丘鹤）</strong>。沙丘鹤是这个季节的加分项：它们在秋季南迁前会在谷地停留，叫声在几公里外就能听到",
          "<strong>Hayden Valley 是被冰川湖沉积填平的谷底。</strong>最近一次冰期结束时这里是 Yellowstone Lake 向北延伸的一部分，湖底沉积的细粒黏土层至今仍不透水——这就是为什么这片谷地几乎没有树、只有连绵的草甸与蜿蜒的曲流河：<strong>树扎不下根，水下不去，河只能在软沉积里反复摆动</strong>。摄影上的直接后果是「没有任何东西遮挡视线」，你在路肩上就能看到几公里外的动物",
          "<strong>但这也是全园最危险的谷地。</strong>NPS 原文：1970 年以来 Hayden Valley 最近 10 起灰熊致人受伤事件中有 8 起发生在现划为 Bear Management Area 的范围内；园方生物学家曾在单具野牛尸体上记录到 23 只灰熊。2024 年新设的 <strong>Hayden Valley BMA（16,453 英亩）在公路以西</strong>，离径禁令期为 7/15–9/15——<strong>本季（9 月下旬起）该禁令已失效，但这只意味着法规不禁止，不意味着应该走进去</strong>"
        ],
        "photo": "风光 <strong>4.5/5</strong>，野生动物 <strong>5/5</strong>，人像 <strong>2/5</strong>。本区分量最重的一条。加分项：<strong>朝向正确（东向 = 日出逆光）、视线无遮挡、pullout 密集（十几处）、整季开放到 10/31、且冷夜必出河雾</strong>。扣分只在两点：<strong>动物距离通常在 200–800 米，600mm 才是舒服的焦段</strong>；以及安全上限制了你只能在路肩活动，构图机动性远不如看起来那么大。人像基本不用考虑——这里不是拍人的地方，是拍晨雾与动物的地方。",
        "shots": [
          {
            "name": "北端大型 pullout —— 逆光河雾主机位",
            "park": [
              44.66817,
              -110.47002
            ],
            "view": [
              44.66817,
              -110.47002
            ],
            "desc": "Hayden Valley 北端最大的一处铺装观景停车场，海拔 2,371 米，在公路西侧、Yellowstone River 以西约 236 米。（<strong>此处常被称作 Grizzly Overlook，但官方地图上没有这个名字</strong>，坐标取 OSM 停车面中心。）<strong>这是本区第一优先机位。</strong>视线朝东／东北越过河道，正对日出方位。<strong>最佳时段：民用晨光到日出后 45 分钟</strong>——9/25 为 <strong>06:44–07:57</strong>，10/22 为 <strong>07:17–08:31</strong>。前半段（日出前 25 分钟）拍冷调蓝雾与河道剪影；太阳一出地平线，河雾立刻被点燃成金色，<strong>这个「金雾」状态只持续 15–25 分钟，出太阳后雾也开始消散</strong>，所以必须在日出前架好机、试好曝光。焦段：24–70mm 拍谷地与雾带的整体关系，<strong>100–400mm 或 600mm 是主力</strong>——压缩雾层、把远处野牛群从雾里抠出来；逆光下点测野牛的受光边缘，让雾过曝一点反而对。曝光策略：<strong>直接对着太阳会全灭，把太阳放在画框边缘或让它藏在雾后</strong>。不要用 CPL（逆光下无效且吃掉一档半）；用渐变滤镜或包围曝光处理天空。"
          },
          {
            "name": "谷地中段 pullout 串 —— 找当天动物所在的位置",
            "park": [
              44.64668,
              -110.45902
            ],
            "view": [
              44.64668,
              -110.45902
            ],
            "desc": "中段有一连串路侧 pullout，从北到南依次约在：<strong>44.66684, −110.46738</strong>；<strong>44.66258, −110.46435</strong>；<strong>44.65827, −110.46336</strong>；<strong>44.65555, −110.46373</strong>；<strong>44.64706, −110.45937</strong>；<strong>44.64342, −110.45727</strong>；<strong>44.64102, −110.45538</strong>；<strong>44.63639, −110.45105</strong>（全部取自 OSM 的 street_side 停车面中心，均在公路西侧、视线朝东）。<strong>用法不是「每个都停」，而是先开一遍慢车找到当天动物的位置再回头停。</strong>这些 pullout 的朝向与光线条件基本一致，差别只在河道离路的远近（44.650 附近河几乎贴着路，是拍河面蒸汽最近的地方）。<strong>日落前一小时是这里的第二个窗口，而且性质完全相反</strong>：太阳在你背后（日落方位 269°→255°），<strong>河东岸的野牛群被暖色正面光照亮</strong>——这才是拍动物毛发细节与眼神的时候，9/25 的 18:15–19:14、10/22 的 17:25–18:26。也就是说：<strong>同一条路，早上拍气氛，傍晚拍细节。</strong>"
          },
          {
            "name": "Alum Creek 一带 —— 泥滩水鸟与沙丘鹤",
            "park": [
              44.6791,
              -110.48807
            ],
            "view": [
              44.6791,
              -110.48807
            ],
            "desc": "Alum Creek 在 <strong>44.67758, −110.48585</strong> 处从涵洞下穿过公路汇入谷地，附近有两处路侧 pullout（44.67910, −110.48807 与 44.68036, −110.48995）。NPS 特别点名<strong>这一带的泥滩是滨鸟集中处</strong>，也是白头海雕、northern harrier 与沙丘鹤的观察点。<strong>最佳时段与主机位相同（晨光期），但这里更依赖长焦</strong>：400–600mm 起步，鸟距离通常在 100–400 米。沙丘鹤靠声音定位——先停车摇下窗听，它们的鸣叫在无风的清晨能传几公里。这个位置的另一个用处：比主机位更靠北、地形略高，<strong>能俯看整片谷地的雾层分布，用来判断当天该往哪个 pullout 去</strong>。"
          },
          {
            "name": "Trout Creek 曲流 —— 长焦压缩的纯几何画面",
            "park": [
              44.64102,
              -110.45538
            ],
            "desc": "Trout Creek 在谷地西侧形成一组著名的极端曲流（河曲），OSM 河道数据显示其主要摆动段在 <strong>44.6346, −110.4849</strong> 一带，也就是<strong>在公路以西约 2.6 公里、位于 Hayden Valley BMA 范围内</strong>。<strong>所以这是一个只能用长焦从路肩拍的题材，不能走过去</strong>（本季 BMA 离径禁令虽已在 9/15 失效，但那是灰熊觅食核心区，不要为一张照片走 2.6 公里进无遮挡草甸）。从中段 pullout 用 <strong>400–600mm 向西压缩</strong>，在侧光下曲流的银亮水带与暗草甸形成纯抽象的几何构图。<strong>最佳时段与其他机位相反：日出后 1–2 小时向西看是顺光</strong>（9/25 的 08:15–09:15、10/22 的 08:45–09:45），此时河面反光最强、曲流轮廓最清晰。<strong>本机位的确切站位取决于当天视线通透度，故省略 view 字段，地图上无针脚。</strong>"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "含在园区门票内，<strong>年卡覆盖</strong>。所有 pullout 免费",
          "hours": "<strong>全天开放、不设门禁</strong>，园区 24 小时可进出。唯一限制是道路季节：Canyon Village ↔ Bridge Bay 路段 2026 年通车 <strong>5/1 – 10/31</strong>。此路段无夜间关闭，可以在天黑前就位",
          "parking": "沿 Grand Loop Road 有十余处铺装／碎石 pullout，全部免费。<strong>只能停在划定的 pullout 内，不得停在行车道或路肩草地上</strong>；10 月清晨基本空着，但一旦有熊或狼被发现会瞬间形成 bear jam",
          "walk": "<strong>全部机位为「停车即拍」，步行 0–20 米。</strong>本区所有拍摄都应在 pullout 铺装面上完成，不建议离开路肩"
        },
        "notes": [
          "<strong>安全上限最重要的一条：不要离开 pullout。</strong>这不是保守，是 NPS 的统计——1970 年以来被熊所伤的人中 91% 是独行或两人同行，而这条谷地里最近 10 起灰熊伤人有 8 起就在公路以西的草甸。喷雾握在手上（不是放包里），车门不锁但可以随时钻回去",
          "<strong>与熊、狼保持 100 码（91 米），与野牛等其他动物保持 25 码（23 米）。</strong>野牛在 Hayden Valley 会直接走上公路，<strong>遇到时留在车里、不要按喇叭、不要绕行草地</strong>，等它走",
          "<strong>发现新鲜动物尸体立即原路撤离并上报</strong>。秋季谷地里的野牛尸体会同时吸引多头灰熊，这是本地最危险的单一情形",
          "<strong>日出拍摄与「不要在黎明黄昏徒步」的 NPS 建议是有冲突的</strong>。解决办法不是放弃日出，而是<strong>把活动完全限制在车与 pullout 之间</strong>：天没亮就开到位、在车里等、光来了下车拍、拍完上车。这样风险是可接受的",
          "<strong>冷夜是这里的必要条件。</strong>10 月平均最低 25.2 °F（−3.8 °C）、2025 年 10 月有 25 个夜晚在冰点以下。看到前夜预报 20 °F 以下且无风晴朗，第二天早上必去；暖夜或有风的早上河雾会很稀薄",
          "<strong>Hayden Valley 无信号。</strong>从 Canyon Village 开到北端主 pullout 约 5 英里／12 分钟，但清晨遇野牛占道是常态，请预留 25 分钟",
          "<strong>整段无厕所、无饮水、无餐饮</strong>。最近的设施在北面的 Canyon Village（访客中心开到 10/31）与南面的 Mud Volcano 停车场（季节性厕所）",
          "顺路可加 <strong>LeHardys Rapids</strong>（谷地南端外、Fishing Bridge 方向），秋季能看到 cutthroat trout；它有独立的观景栈道与停车场，但<strong>不在本条的机位范围内，本条不给其坐标</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Fog_on_the_Yellowstone_River_in_Hayden_Valley.jpg",
            "cap": "Yellowstone River 上的晨雾，本区核心画面 · TigerScientist / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/14/Hayden_Valley_Buffalos_1.jpg",
            "cap": "Hayden Valley 的野牛群与开阔草甸 · Dirtsc / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hayden_Valley_Yellowstone_River_01.jpg",
            "cap": "从公路侧朝东望向河道与对岸谷地 · Dirtsc / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "mud-volcano-sulphur-caldron",
        "n": 7,
        "name": "Mud Volcano 与 Sulphur Caldron",
        "en": "Mud Volcano Area · Sulphur Caldron",
        "score": 3,
        "tldr": "园内最酸、最臭的热区，pH 1–2 相当于电瓶酸；冷早晨的蒸汽最壮观，但硫化氢也最浓。",
        "tags": [
          {
            "t": "年卡覆盖",
            "c": "free"
          },
          {
            "t": "栈道 0.9 英里",
            "c": "free"
          },
          {
            "t": "硫化氢刺激",
            "c": "risk"
          },
          {
            "t": "南段有陡阶梯",
            "c": "risk"
          },
          {
            "t": "题材不「漂亮」",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这里是全园最酸的一片。</strong>NPS 原文：Sulphur Caldron 的 pH 约为 <strong>1–2</strong>，「相当于汽车电瓶酸或胃酸」。成因链条很直接：深部岩浆脱气产生的硫化氢（H₂S）随蒸汽上升，在浅层被<strong>嗜硫微生物氧化成硫酸</strong>，硫酸把流纹岩溶解成湿黏土，气体再从黏土里冒出来——于是有了泥浆池、有了那股臭鸡蛋味，也有了这片区域独特的灰白色调",
          "<strong>Mud Volcano 位于 Yellowstone Caldera 底板抬升与沉降幅度最大的位置。</strong>多条断层在此交汇，地震频繁。Mud Volcano 喷口与 Old Faithful 附近的另一个主喷口所在的构造被称为 <strong>resurgent dome（复活穹丘）</strong>——地面随下方岩浆房的涨落而升降，科学家用它监测火山活动。<strong>换句话说，你站在的这块地是在肉眼看不见地呼吸的</strong>",
          "<strong>栈道全长约 0.9 英里（1.4 公里），环线</strong>，北段平缓可推轮椅，<strong>南段有台阶与陡坡，不适合轮椅与行动不便者</strong>。沿线主要看点：Dragon’s Mouth Spring（洞穴里发出低吼与拍水声的喷气孔，本区最有辨识度的单点）、Grizzly Fumarole、Mud Volcano、以及爬上坡顶后向右的 Sour Lake。<strong>坡上被蒸汽「煮死」的枯立木是这里最好的构图元素</strong>",
          "<strong>Sulphur Caldron 在 Mud Volcano 停车场以北、公路的另一侧</strong>，是一个独立的路侧观景点，两处之间可以走过去（有人行道与斑马线）。它的名字来自水中大量的游离硫。这是本条里唯一一个「看一眼就够」的点，但那种翻滚的灰黄浑水在近景里质感很强"
        ],
        "photo": "风光 <strong>2/5</strong>，细节／抽象 <strong>4/5</strong>，人像 <strong>1/5</strong>。<strong>诚实说：这里不好看。</strong>没有 Grand Prismatic 那样的色彩，主体是灰浆、灰白土、枯木与蒸汽。但它在两件事上是本区最强的：<strong>一是冷早晨的蒸汽——气温越低蒸汽柱越高越密，逆光下是极好的氛围题材</strong>；二是微距／中焦的抽象细节（泥浆气泡破裂的瞬间、硫结晶、被煮白的枯木纹理）。把它当作「广角出不了片、长焦和微距能出片」的地方来安排。",
        "shots": [
          {
            "name": "Dragon’s Mouth Spring —— 本区最有辨识度的单点",
            "park": [
              44.62472,
              -110.43315
            ],
            "view": [
              44.62519,
              -110.43479
            ],
            "desc": "从停车场沿栈道走 <strong>3–5 分钟／约 200 米</strong>，平缓。一个洞穴状喷气孔，水在洞里来回拍打发出低吼——<strong>它的声音比画面更有冲击力，值得录一段环境声</strong>。<strong>最佳时段：日出后一小时内的冷空气期</strong>（9/25 的 07:15–08:15、10/22 的 07:50–08:50）。低温 + 无风时洞口蒸汽最浓，且此时太阳低角度从东侧来，<strong>站在洞口西侧朝东逆光拍蒸汽，能拍出发光的蒸汽柱</strong>。焦段 35–85mm。慢门 1/8–1/2 s 让蒸汽拉成流态，但要避免过长导致蒸汽糊成一片白。<strong>镜头会被蒸汽里的酸性冷凝水打湿</strong>——这种水不是纯水，擦拭时先用干布吸走再用湿布，不要让它在镀膜上干掉。"
          },
          {
            "name": "坡顶枯木与泥浆池 —— 抽象与细节",
            "park": [
              44.62472,
              -110.43315
            ],
            "view": [
              44.62324,
              -110.43573
            ],
            "desc": "栈道南段爬上山坡（有台阶），Grizzly Fumarole 一带是被蒸汽杀死的枯立木最密集处。<strong>最佳时段：上午 08:30–11:00 的侧光</strong>，此时枯木有立体感、灰白土地有纹理；阴天也完全可用（反差小反而更好处理）。焦段：24–35mm 拍枯木林与蒸汽的场景关系，<strong>100mm 微距或 70–200mm 近摄段拍泥浆气泡破裂的瞬间</strong>——这是本地最独特的画面，1/500 s 以上凝固泥浆的抛物线。<strong>栈道是唯一合法站位，构图完全受限于栈道走向</strong>，所以要有耐心沿线走完再回头拍。"
          },
          {
            "name": "Sulphur Caldron —— 公路对侧的独立观景点",
            "park": [
              44.62693,
              -110.43269
            ],
            "desc": "在 Mud Volcano 停车场以北约 250 米、<strong>公路的另一侧</strong>（东侧）的路侧观景点。停车即到。<strong>这是本条里唯一「看一眼就走」的点，10 分钟足够。</strong>主体是不断翻滚的灰黄色酸水（pH 1–2）与池边的黄色硫结壳。最佳时段：<strong>阴天或上午侧光</strong>；直射强光下灰黄色会拍得很脏。焦段 70–200mm 压缩水面翻滚纹理，或 100mm 微距拍池边硫结晶。<strong>栈道／护栏外禁入。</strong><strong>Sulphur Caldron 本体在 OSM 中没有对应实体节点，故省略 view 字段、地图上不出针脚</strong>；park 坐标取自 OSM 的路侧 pullout，附近有一块名为「Volcanic Landscape」的解说牌（44.62799, −110.43331）可作为现场参照。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "含在园区门票内，<strong>年卡覆盖</strong>",
          "hours": "<strong>栈道全天开放、不设门禁</strong>。所属路段（Canyon Village ↔ Bridge Bay）2026 年通车 <strong>5/1 – 10/31</strong>。<strong>热区栈道无独立的季节关闭日期</strong>，但降雪结冰后木栈道会极滑，园方可能临时封闭部分路段",
          "parking": "Mud Volcano 有铺装停车场（44.62472, −110.43315），免费，容量中等，10 月不紧张；Sulphur Caldron 为公路东侧路侧 pullout",
          "walk": "Mud Volcano 环线 <strong>约 0.9 英里／1.4 公里，40–60 分钟</strong>。<strong>北段平缓可轮椅，南段有台阶与陡坡不可轮椅。</strong>Sulphur Caldron 为停车即到"
        },
        "notes": [
          "<strong>硫化氢（H₂S）是这里的实际健康问题，不只是「臭」。</strong>H₂S 是呼吸道与眼部刺激物，浓度高时会造成头痛、恶心与咽喉刺痛；<strong>它比空气重，会在低洼处与无风的冷空气层里积聚</strong>——也就是说<strong>「蒸汽最壮观的那个冷静早晨」恰好也是气体浓度最高的时候</strong>。实操：站在上风侧、不要长时间停在栈道低洼段、<strong>有哮喘或呼吸道疾病的人应缩短停留或直接跳过本条</strong>，感到头晕或咽喉刺痛立刻往高处与上风向撤",
          "<strong>H₂S 还会让人「闻不到危险」</strong>：高浓度下嗅觉会疲劳甚至麻痹，所以不要用「还闻得到吗」来判断安全，要用身体感觉",
          "<strong>酸性冷凝水会腐蚀器材。</strong>这里的水雾含稀硫酸，落在镜片镀膜、卡口触点与三脚架金属件上都会留痕。离开后<strong>用微湿的布把机身、镜头筒、脚架擦一遍</strong>，不要让它自然干掉。相机包外侧也会沾味，回车前拍打一下",
          "<strong>必须全程留在栈道上。</strong>NPS 原话：「Stay on boardwalks and trails. Thermal water can severely burn you.」这片区域的地表是被硫酸溶蚀的薄壳，踩下去是滚烫的酸泥",
          "本区在 Hayden Valley 南端出口处，<strong>与 Hayden Valley 同一条路，顺路串联零成本</strong>；从 Canyon Village 南下约 9.7 英里／20 分钟",
          "停车场有季节性厕所，无饮水无餐饮，无手机信号",
          "<strong>题材期待要放低。</strong>如果时间紧张，本条是本区八个点里最先该被砍掉的一个；但如果碰上零下十度、无风、有晨雾的早晨，它会是当天最出乎意料的一站"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mud_Volcano%2C_Yellowstone_NP.jpg",
            "cap": "Mud Volcano 泥浆池与被蒸汽煮死的枯木 · Supercarwaar / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Sulphur_Caldron_%2827615647381%29.jpg",
            "cap": "Sulphur Caldron 翻滚的酸水，pH 1–2 · Yellowstone National Park / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Mud_Volcano_Area%2C_view_towards_Dragon%27s_Mouth_Spring%2C_Yellowstone_National_Park%2C_2009.jpg",
            "cap": "栈道望向 Dragon’s Mouth Spring · DimiTalen / CC0"
          }
        ]
      },
      {
        "id": "lake-butte-overlook",
        "n": 8,
        "name": "Lake Butte Overlook",
        "en": "Lake Butte Overlook, East Entrance Road",
        "score": 4,
        "tldr": "朝向确认正确：正西俯瞰 Yellowstone Lake、西侧天际线几乎为零，是纯净日落点；但 Teton 在左后方 50 度外，不同框。",
        "tags": [
          {
            "t": "年卡覆盖",
            "c": "free"
          },
          {
            "t": "停车即到",
            "c": "free"
          },
          {
            "t": "日落方向正确",
            "c": "free"
          },
          {
            "t": "Sylvan Pass 可能提前关",
            "c": "risk"
          },
          {
            "t": "Teton 与日落不同框",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>海拔 2,539 米（8,331 英尺），比 Yellowstone Lake 湖面高约 590 英尺（180 米）。</strong>这个高差是它的全部价值所在——园内其他看湖的点几乎都在湖岸高度，<strong>只有这里能俯瞰湖面的整体形状、岛屿与远岸山脊的层次</strong>",
          "<strong>朝向经核算确认正确：观景台西侧的地形天际线仅约 0°（湖面海拔 2,360 米、平坦无遮挡）</strong>，而 9 月 25 日日落方位 <strong>269°（正西）</strong>、10 月 22 日 <strong>255°（西南西）</strong>。也就是说<strong>整个窗口期太阳都落在湖面上、正对你的视线，没有任何山体提前挡光</strong>。本地的实际日落时刻与天文日落几乎一致：9/25 约 19:11–19:14、10/22 约 18:24–18:26",
          "<strong>Teton Range 确实能看到，但不在日落画面里。</strong>实测方位：<strong>Grand Teton 在方位 206°、直线距离 95 公里（59 英里）</strong>；Mount Moran 在 208°、85 公里；更近的 Mount Sheridan 在 218°、34 公里。<strong>而落日在 255°–269°——两者相差 50–65 度。</strong>结论：普通镜头下不可能同框；<strong>只有 14mm 级别的超广角（水平视角约 114°）才能勉强把 206° 与 260° 同时收进一格</strong>，但那样两者都会小得看不出是什么。正确做法是<strong>用 200–400mm 单拍压缩在湖面之上的 Teton 山脊线，再转身拍日落</strong>",
          "<strong>Teton 的可见性有物理基础：</strong>95 公里距离上地球曲率加折射的下沉约 630 米，Grand Teton 海拔 4,199 米扣掉后仍高出观景台约 1,030 米，<strong>即视高约 0.6° 以上——晴朗且低层大气通透时清晰可见</strong>。但秋季山火烟霾与逆温层会把这条山脊线糊掉，这是「有些日子看得见有些看不见」的真实原因"
        ],
        "photo": "风光 <strong>4/5</strong>，人像 <strong>3/5</strong>。加分：<strong>高位俯瞰 + 正西朝向 + 西侧天际线为零 + 停车即到 + 有 Teton 作远景锚点</strong>，这是本区唯一一个纯粹的日落点（其余七个点全部偏向清晨）。扣分两处：<strong>Teton 与落日不同框</strong>，以及<strong>它挂在一条随时可能因雪提前关闭的路上</strong>，在行程里必须当作「可放弃项」而不是「压轴项」。",
        "shots": [
          {
            "name": "观景台主机位 —— 湖面日落",
            "park": [
              44.5101,
              -110.27474
            ],
            "view": [
              44.51021,
              -110.27501
            ],
            "desc": "从 East Entrance Road 拐上 Lake Butte 支路开到顶，停车场到观景台 <strong>1–2 分钟／约 40 米</strong>。<strong>最佳时段：日落前 40 分钟到民用暮光结束</strong>——9/25 为 <strong>18:35–19:42</strong>，10/22 为 <strong>17:45–18:55</strong>。真正的甜点是<strong>日落后那 25–30 分钟</strong>：太阳落下后湖面进入镜面状态，天空的余晖被湖水完整反射，而此时动态范围比日落瞬间小得多，单张就能拍全。焦段：24–35mm 拍湖面全景与天空，<strong>70–200mm 压缩湖面倒影与远岸山脊的层次</strong>。慢门 1–8 s 配 ND 或直接靠暮光的低照度，把湖面拍成丝面。<strong>器材注意：这里 8,331 英尺、无遮挡、日落后气温断崖式下降</strong>，10 月下旬拍到暮光结束时体感常在 −8 °C 以下且有风；手套、备用电池贴身放，脚架配重（有风）。"
          },
          {
            "name": "Teton Range 单拍 —— 长焦压缩山脊线",
            "park": [
              44.5101,
              -110.27474
            ],
            "view": [
              44.51021,
              -110.27501
            ],
            "desc": "同一个观景台，<strong>转向方位 206°（西南偏南）</strong>拍 Teton Range。<strong>最佳时段与日落机位不同</strong>：要拍清 95 公里外的山脊，需要的是通透度而不是暖光，<strong>日出后一小时（9/25 的 07:15–08:15、10/22 的 07:50–08:50）低层大气最稳、烟霾最少</strong>，此时 Teton 是逆光偏侧光的蓝灰剪影，层次最好。傍晚也可拍，但下午对流与烟霾会让远山发灰。焦段：<strong>200–400mm 起步，600mm 更好</strong>；95 公里距离上 400mm 才能让 Grand Teton 在画面里占到有意义的比例。构图上把 Yellowstone Lake 的远岸线压在山脊下方做前景带。<strong>如果一定要同框</strong>：14mm 竖向、把落日放在画面右侧、Teton 放在左侧远端——但这是记录而非作品。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "含在园区门票内，<strong>年卡覆盖</strong>",
          "hours": "观景台<strong>全天开放、不设门禁</strong>。<strong>唯一且关键的限制是 East Entrance Road（Sylvan Pass）：2026 年通车 5/1 – 10/31。</strong>该路段海拔高、有主动雪崩控制作业，NPS 历史上曾在 9 月因预报 5–9 英寸降雪而临时关闭它，<strong>并明确表示会「视情况关闭 East Entrance Road 至 Sylvan Pass 及其他路段」</strong>。出发当天务必先查路况地图或拨 (307) 344-2117",
          "parking": "Lake Butte 支路尽头的铺装停车场（44.51010, −110.27474），免费，容量约 20–30 辆；日落时段是这里唯一会有人的时候，但 10 月很宽松",
          "walk": "<strong>1–2 分钟／约 40 米</strong>，铺装平路，基本停车即到"
        },
        "notes": [
          "<strong>把它排成可放弃项。</strong>Sylvan Pass 是本区最不可靠的通道；若它关闭，本条的替代方案是 <strong>Lake Village / Fishing Bridge 一带的湖岸日落</strong>（湖岸高度、没有俯瞰感、也看不到 Teton，但方向一样正确）",
          "<strong>从 Fishing Bridge 路口到这里约 9 英里／车程 20 分钟</strong>（含支路），<strong>该里程为按图估算，未从官方渠道核实</strong>。从 Canyon Village 过来约 25 英里／50 分钟，<strong>意味着「Hayden Valley 拍日出 + Lake Butte 拍日落」是可以在同一天完成的</strong>，中间正好夹进 Mud Volcano",
          "<strong>住宿的时间账要算清</strong>：离这里最近的园内住宿是 Lake Yellowstone Hotel，但它 <strong>10/10 就关</strong>。10/10 之后拍完暮光（10/22 约 18:55）要开回 Canyon Lodge（约 50 分钟、夜路、大概率遇动物），而 Canyon Lodge 客房 10/24 也关。<strong>10/25–10/31 这七天，这个日落机位实际上没有合理的住宿配套</strong>",
          "<strong>夜路是这一条的真实风险</strong>：East Entrance Road 与 Lake 一带秋夜有大量麋鹿与野牛，园内限速 45 mph 且没有路灯。拍完暮光的回程请把车速再降一档",
          "这里在 Yellowstone Lake 东北岸的高地上，<strong>风比湖岸大得多</strong>，三脚架必须挂重物或压低重心；超广角拍日落时注意镜片被风吹上灰尘",
          "无信号、无厕所、无饮水。最近的设施在 Fishing Bridge（访客中心 10/3 关、加油站店面 10/11 关）",
          "<strong>Lake Butte 本身是一座山峰</strong>（44.51244, −110.26270，海拔更高），观景台在其西南侧的路边平台上，不需要登顶，也没有到顶的正规步道"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Teton_Range_from_Lake_Butte_Overlook_%2847995460877%29.jpg",
            "cap": "从 Lake Butte Overlook 长焦拍 Teton Range · Yellowstone National Park / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Views_of_Yellowstone_Lake_from_Lake_Butte_Overlook_%2854355010103%29.jpg",
            "cap": "高位俯瞰 Yellowstone Lake 湖面 · YellowstoneNPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Yellowstone_Lake_and_Teton_Mountains_as_seen_from_Lake_Butte_Overlook_%288a2e8466-47bf-4905-9dfe-5e03f78b9294%29.jpg",
            "cap": "湖面与远处 Teton 山脊同框（超广视角） · NPS / Jim Peaco / Public domain"
          }
        ]
      }
    ]
  },
  {
    "id": "ys-geyser-basins",
    "name": "Yellowstone · 间歇泉群与 West Thumb",
    "navName": "间歇泉群",
    "color": "#ff8a3d",
    "lead": "这一片是全球间歇泉密度最高的地方——地球上过半的间歇泉集中在 Firehole River 沿岸这 30 公里里。但 9 月底到 10 月底来拍，真正决定成败的不是构图，是三件已经写死的事：<strong>园区主环路 2026 年 10 月 31 日关闭</strong>（11 月 1 日起 Grand Loop 全线禁止民用车辆）、<strong>Old Faithful Inn 的 1904 年大堂在 10 月中旬随酒店一起锁门</strong>、<strong>Biscuit Basin 自 2024 年 7 月爆炸后至今全域封闭，2026 年 6 月 13 日又炸了一次</strong>。另外还有一条几乎没人提的坏消息：<strong>Firehole Lake Drive 因路面被地热烤化，2026 年整季对机动车关闭</strong>，Great Fountain Geyser 只能走进去。",
    "callouts": [
      {
        "type": "warn",
        "title": "2026 道路封闭日期表：10/31 是硬门槛",
        "html": "<p>以下全部取自 nps.gov/yell「Park Roads」页（该页 2026/9/1 更新）与 2026 版 <em>Superintendent’s Compendium</em>。Compendium 原文：「Starting November 1st until spring opening in April or May, the Grand Loop Road and park entrance roads are closed to wheeled motor vehicle use by the public」——<strong>所以「11 月第一个周一」这个流传很广的说法在 2026 年不成立，是 11 月 1 日（周日）</strong>，最后一个能开车的整天是 <strong>10 月 31 日</strong>。</p><ul><li><strong>West Entrance → Madison、Madison → Old Faithful、Madison → Norris、Mammoth → Norris、Norris → Canyon</strong>：4/17 – <strong>10/31</strong></li><li><strong>South Entrance → West Thumb、West Thumb → Old Faithful（Craig Pass）、West Thumb → Lake</strong>：5/8 – <strong>10/31</strong></li><li><strong>East Entrance → Fishing Bridge（Sylvan Pass）、Canyon → Bridge Bay</strong>：5/1 – <strong>10/31</strong></li><li><strong>Canyon → Tower Fall（Dunraven Pass）、Beartooth Highway、Chief Joseph Scenic Byway</strong>：5/22 – <strong>10/12</strong>（高海拔，比主环路早关 19 天）</li><li><strong>North Entrance → Northeast Entrance</strong>：全年开放，是 11 月之后唯一能开车进的走廊——但它离本区 100 公里以上，救不了间歇泉群</li></ul><p><strong>Firehole Lake Drive（Great Fountain / White Dome 所在的 3.3 英里单行道）：2026 年整季对机动车关闭。</strong>原因是路基下方地热把沥青烤软（2014 年首次因此封路），外加一座 1935 年的桥待修。园方发言人 Linda Veress 2026 年确认「目前没有施工，园方正在评估短期与长期方案」。<strong>步行与自行车允许通行</strong>。另有 2026/6/9 一位 NPS 道路维护人员的说法称园方接近开放「北门到 Firehole Lake」那一段双向通车（仅小车），Great Fountain 所在的南段仍只准步行——<strong>这条说法未能从官方渠道确认</strong>。</p><p><strong>Firehole Canyon Drive（2 英里单行道，Firehole Falls）：正常开放</strong>，Compendium 明确禁止大巴、拖挂与房车驶入，限速 25 mph。<strong>NPS 没有为它单独公布关闭日期</strong>，按 Compendium 的通则应与主环路同步于 11/1 关闭，但它是低海拔窄路，提前因降雪临时关闭完全可能。</p><p><strong>施工：Norris–Canyon 与 Norris–Madison 两段目前均无施工项目</strong>（已核对 NPS 实时路况数据库 road_construction 表，仅 Mammoth–Tower、Northeast Entrance、Fishing Bridge–Bridge Bay、West Entrance–Madison 四段有条目）。本区唯一相关的是 <strong>Old Faithful 以南 1.5 英里的 Firehole River Bridge，9 月内最多 15 分钟延误</strong>。</p><p>出发当天务必再查一次：nps.gov/yell/planyourvisit/parkroads.htm，或拨 <strong>(307) 344-2117</strong> 听录音，或发短信 <strong>82190 到 888-777</strong> 订阅路况提醒。<strong>注意：NPS 那张实时路况地图只覆盖主环路与各入口道，Firehole Lake Drive 与 Firehole Canyon Drive 根本不在图上</strong>，想确认这两条路只能打电话或到 Old Faithful 游客中心问 ranger。</p>"
      },
      {
        "type": "warn",
        "title": "住宿与设施关门日期：Old Faithful Inn 大堂可能只开到 10/12",
        "html": "<p><strong>这是本区最容易踩空的一项</strong>：Old Faithful Inn 的关门日期，NPS 与运营方 Xanterra 给的数字差了整整一周。</p><ul><li><strong>Xanterra 官方口径（yellowstonenationalparklodges.com 开关门日期页，同页还列了 2027 年数据）：Old Faithful Inn 2026/5/1 – <strong>2026/10/12</strong>（当日 11:00 退房结束营业）</strong></li><li><strong>NPS 口径（nps.gov/yell「Operating Dates」表，2026/9/3 更新）：Inn 客房末日 <strong>10/18</strong>，餐厅 / Bear Paw Deli / 礼品店末日 <strong>10/19</strong></strong></li></ul><p>其余九家住宿两边数字全部对得上（Xanterra 的日期永远比 NPS 的「末日」晚一天，即退房日），唯独 Inn 对不上。<strong>无法判断哪一边是过期数据。</strong>实务结论：<strong>10 月 12 日之前一定能进大堂；10 月 13–19 日属于赌运气；10 月 19 日之后一定进不去。</strong>若行程落在 10/13 之后且这个大堂是你的重点，出发前请直接致电 <strong>307-344-7311</strong> 确认。</p><p>其余关门日（NPS Operating Dates 表，均为「最后营业日」）：</p><ul><li><strong>Old Faithful Lodge Cabins</strong> 客房 10/3、餐厅与烘焙店 10/4</li><li><strong>Old Faithful Snow Lodge</strong> 客房 <strong>10/24</strong>、Obsidian 餐厅 10/25、Geyser Grill 与礼品店 <strong>10/31</strong>——<strong>这是本窗口末段唯一还能住在 Old Faithful 的地方</strong></li><li><strong>Lake Yellowstone Hotel</strong> 客房 <strong>10/10</strong>、餐厅与礼品店 10/11；<strong>Grant Village</strong> 客房 10/10、餐厅 10/11（这两家一关，West Thumb 附近就没有住宿了）</li><li><strong>Canyon Lodge</strong> 客房 10/24；<strong>Mammoth Hot Springs Hotel</strong> 开到 2027/3/7，本区唯一的全年选项</li><li>游客中心：<strong>Old Faithful Visitor Education Center 开到 10/31</strong>（间歇泉预报靠它）、Norris Geyser Basin Museum 10/3、Madison Information Station 10/3、Grant Visitor Center 10/3、<strong>West Thumb Information Station 已于 2026/7/13 关闭</strong></li><li>加油：园内所有加油站<strong>全年 24 小时刷卡自助加油</strong>；便利店部分 Old Faithful Upper 开到 10/18、Old Faithful Lower 9/13、Canyon 10/31、Grant 10/13、Mammoth 10/4。<strong>Madison 与 Norris 没有加油站</strong>，Madison 最近的油在 West Yellowstone（约 14 英里）或 Old Faithful（约 16 英里）</li><li>Old Faithful Medical Clinic 开到 10/27；Old Faithful General Store 开到 10/18</li></ul>"
      },
      {
        "type": "warn",
        "title": "热区安全：地面看着结实，其实是一层壳",
        "html": "<p>NPS 安全页原文：「The ground surrounding these features may look solid, but it can be just a thin crust with super-heated water below.」——<strong>这句话是字面意思，不是修辞。</strong>园方公开口径：<strong>已有 20 多人因跌入或走进热泉被烫伤致死</strong>，同期死于灰熊的是 8 人。USGS 直言热水是「Yellowstone 对游客最严重的威胁」，而不是熊、也不是超级火山。</p><p>2024 年 9 月，一名 60 岁游客在 Old Faithful 附近 Mallard Lake Trailhead 一带走出步道，<strong>踩穿薄壳、腿部二度与三度烧伤</strong>，直升机转运至爱达荷。2021 年一名游客在 Norris 走下木栈道，被判 <strong>7 天监禁加 1,000 美元罚款加 1,000 美元社区赔偿</strong>。这不是吓唬人的条文，是实际判决。</p><ul><li><strong>任何情况下不下木栈道。</strong>为了一个机位多站半米也不行——白色硅华壳与实地在低光下几乎无法分辨</li><li>不要碰热泉水与径流；不要抓挠微生物垫（那些颜色就是它们）</li><li>Compendium 明文：<strong>热区内禁止饮食</strong>（除非装在背包类容器内），<strong>水不受限</strong>。换句话说，凌晨拿一杯咖啡上栈道是违规的</li><li>宠物全面禁止上木栈道与进入热区，抱着、装推车里都不行</li><li><strong>硫化氢：这是 Norris 的专属问题。</strong>H₂S 与 CO₂ 都比空气重，在「异常寒冷且无风」的夜里会在低洼处积到危险浓度。2004 年 Norris Geyser Basin 就有<strong>五头野牛因此集体死亡</strong>。NPS 的处置口径只有一句：<strong>「If you begin to feel sick while exploring a geyser basin, leave the area immediately.」</strong>眼刺痛、头痛、恶心、头晕就立刻往高处、往上风走，不要「再拍一张」</li><li>Compendium 另外两条摄影相关规定：<strong>禁止使用无人值守 / 自动 / 移动侦测 / 遥控的拍摄设备</strong>（不能架好相机定时离开），以及<strong>全园禁止用人造光观察野生动物，含闪光灯</strong></li></ul>"
      },
      {
        "type": "tip",
        "title": "蒸汽 vs 颜色：本区的核心矛盾与决策规则",
        "html": "<p>冷空气让热泉水汽瞬间凝结成浓白蒸汽。这件事同时是本区<strong>最好的礼物</strong>和<strong>最大的破坏</strong>——它把逆光的间歇泉盆地变成史诗，也把 Grand Prismatic 的彩环彻底盖住。<strong>这两个目标在物理上不可兼得，必须分时段执行。</strong></p><p><strong>规则一：最冷的那个清晨（日出前后 90 分钟），只去拍蒸汽题材。</strong>Upper Geyser Basin、Norris、West Thumb 湖畔、Fountain Paint Pot、Great Fountain。此时低角度阳光穿过蒸汽形成体积光，是本区的招牌画面。</p><p><strong>规则二：Grand Prismatic Overlook 只在一天中太阳最高、气温最高的那段去。</strong>实算（44.52°N，MDT，未考虑地形遮挡）：</p><ul><li><strong>9 月 25 日</strong>：正午太阳高度 <strong>44.4°</strong>（13:15）。高度 ≥35° 的时段是 <strong>10:57–15:33</strong>，≥40° 是 <strong>11:43–14:46</strong>。→ 可用窗口 <strong>11:00–15:00</strong>，核心 11:45–14:45。夏天流传的「11:00–14:00」在这一天仍然成立</li><li><strong>10 月 22 日</strong>：正午太阳高度只有 <strong>34.2°</strong>——<strong>全天都到不了 35°</strong>。≥30° 只有 <strong>11:30–14:45</strong>，≥25° 是 10:40–15:35。→ 可用窗口收缩到 <strong>12:00–14:30</strong>。而且因为一天中的气温峰值在 14:00–16:00，<strong>10 月请优先取窗口的后半段（13:00–14:30）</strong>：此时太阳高度只比正午低 1–2°，但气温高好几度，蒸汽明显更薄。<strong>「夏天的 11:00–14:00」在 10 月底是错的，11:00 时太阳只有 27°。</strong></li><li><strong>10 月 31 日</strong>（最后一个能开车的日子）：正午 <strong>31.2°</strong>，≥30° 只剩 <strong>12:14–13:59</strong>，不到两小时</li></ul><p><strong>规则三：风比气温更能决定成败。</strong>10–15 mph 的风能在 5°C 的上午吹开 Grand Prismatic；而一个无风的 5°C 上午可能整天糊死。出发前看 Old Faithful 的 NPS 网络摄像头与风力预报，<strong>把 Overlook 排成一个「机动项」——哪天风大就哪天去</strong>，不要绑死日期。</p><p><strong>日出日落实算（Old Faithful，44.4605°N / −110.8281，MDT = UTC−6）：</strong></p><ul><li><strong>9/25</strong>：民用曙光 06:45 / 日出 <strong>07:13</strong>（方位 90°）/ 日落 <strong>19:17</strong>（方位 270°）/ 民用暮光 19:45</li><li><strong>10/22</strong>：民用曙光 07:18 / 日出 <strong>07:46</strong>（方位 105°）/ 日落 <strong>18:29</strong>（方位 255°）/ 民用暮光 18:58</li><li><strong>10/31</strong>：日出 07:58 / 日落 18:16</li><li><strong>夏令时：2026 年美国夏令时于 11 月 1 日（周日）02:00 结束。这一天在本窗口之外，甚至在道路关闭日 10/31 之后——整个行程不会遇到调表。</strong></li></ul><p>注意 9/25 到 10/22 之间，<strong>日出推迟 33 分钟、日落提前 48 分钟，白昼缩短 81 分钟</strong>。10 月底的一天实际可用光只有约 10 小时 40 分。</p>"
      },
      {
        "type": "info",
        "title": "低温、器材、门票、信号",
        "html": "<p><strong>海拔与气温。</strong>Old Faithful / Upper Geyser Basin 海拔约 <strong>7,300–7,500 英尺（2,225–2,290 米）</strong>，Great Fountain Geyser 实测 7,349 英尺。NOAA 1991–2020 常年值：<strong>9 月均高 18°C / 均低 −1°C；10 月均高 10°C / 均低 −6°C</strong>。9 月下旬实际区间通常是白天 14–20°C、夜间 −2 至 +2°C；10 月下旬白天 5–10°C、夜间 <strong>−8 至 −3°C</strong>。统计上 Old Faithful <strong>10 月平均有 28.2 个夜晚在冰点以下（一共 31 天）</strong>——意思是十月的清晨结冰不是可能性，是默认值。10 月常年降雪 9 英寸。</p><ul><li><strong>电池崩塌。</strong>锂电在 0°C 以下容量骤降，−5 至 −10°C 的清晨大约只剩标称的 40–60%。<strong>带 3 块以上备电，全部贴身放在冲锋衣内层口袋</strong>。「没电」的冷电池捂热后通常能再撑一轮，不要当场丢掉</li><li><strong>镜头结露。</strong>从 −5°C 的栈道直接走进 20°C 的 Old Faithful Inn 大堂或 Snow Lodge 餐厅，镜片会瞬间起雾，更麻烦的是<strong>机身内部也会凝水</strong>。正确做法：<strong>进门之前</strong>把相机装进密封袋挤出空气，室内静置 30–60 分钟再取出。反方向（暖到冷）没有这个问题</li><li><strong>蒸汽本身就在给你的前镜片加湿。</strong>站在喷气口下风侧几十秒镜片就花了。<strong>带 4 块以上超细纤维布轮换</strong>，湿布在低温下擦不干净。UV 镜在这里有实际价值（脏了直接换）</li><li><strong>木栈道在天亮前结冰。</strong>热泉径流淌上木板再冻住，形成透明薄冰，头灯下看不出来。带一副轻量冰爪（microspikes）比带三脚架更能提高清晨出片率</li><li>三脚架：Compendium 把 tripod / monopod 明确归入「handheld equipment」，<strong>普通游客在园内使用三脚架不需要许可</strong>。但木栈道很窄，请靠边、不要挡人</li></ul><p><strong>门票。</strong>私家车 7 日票 $35，America the Beautiful 年票 $80。<strong>持年票直接刷卡入园，不再另付任何费用。</strong>特别注意一条 2026 年的新规：<strong>非美国居民（16 岁以上）每人须另付 $100 的 nonresident fee，但「unless admitted with an Annual or America the Beautiful Pass」——持年票即豁免</strong>。所以这张年票在本行程里省的不止 $35。另外 <strong>10 月 27 日（Theodore Roosevelt 生日）是 2026 年免费入园日</strong>。从 South Entrance 进出会穿过 Grand Teton，那是<strong>另一个公园、另一份门票</strong>（年票同样覆盖）。</p><p><strong>信号与网络。</strong>NPS 官方口径：基站设在 Mammoth、Old Faithful、Canyon Village、Grant Village、Lake Village 与 Mount Washburn，「provide service to most developed areas」。实务上：<strong>Old Faithful 村内有信号（Verizon 最好，AT&amp;T 次之），走进 Upper Geyser Basin 深处或 Norris、Midway、Fairy Falls 步道就基本没有</strong>。<strong>Madison 不在基站名单里，那一带按没有信号准备。</strong>免费公共 Wi-Fi 只有三处：Albright Visitor Center、<strong>Old Faithful Visitor Education Center</strong>、West Yellowstone Visitor Information Center。<strong>务必离线下载全园地图</strong>，导航 App 会在半路失效。园内<strong>没有任何公共 EV 充电桩</strong>，只有 Xanterra 几家旅馆的 Level 2 慢充。</p>"
      }
    ],
    "spots": [
      {
        "id": "ys-norris-geyser-basin",
        "n": 1,
        "name": "诺里斯间歇泉盆地",
        "en": "Norris Geyser Basin",
        "score": 4.5,
        "tldr": "全园最热、最酸、变化最快的盆地，冷晨蒸汽最壮观；但 Steamboat 2026 年只喷过一次，别抱期待。",
        "tags": [
          {
            "t": "年票覆盖",
            "c": "free"
          },
          {
            "t": "硫化氢风险",
            "c": "risk"
          },
          {
            "t": "博物馆 10/3 关",
            "c": "risk"
          },
          {
            "t": "两条环线共 2.25 英里",
            "c": "paid"
          }
        ],
        "highlights": [
          "<strong>Yellowstone 最热、最酸、也最不稳定的热区</strong>。NPS 原话：许多热泉与喷气孔的温度<strong>超过沸点（200ºF / 93ºC）</strong>。它坐落在三条大断层与 64 万年前 Yellowstone Caldera 环形断裂的交汇处",
          "这里每年都会「换脸」。NPS 用了一个专有词叫 <strong>thermal disturbance</strong>：清澈的池子会突然变浑、剧烈沸腾，甚至临时变成间歇泉；原有的间歇泉停喷或改变周期；新泉眼凭空出现。一次扰动持续几天到一周多，<strong>成因至今没有完全搞清楚</strong>。摄影上的含义是：<strong>你在网上看到的任何一张 Norris 照片都可能已经不存在了</strong>",
          "<strong>Steamboat Geyser 在这里，世界现存最高的活间歇泉（主喷可达 300 英尺 / 90 米）。但现实预期是：你看不到。</strong>它在 2018 至 2023 年初狂喷了 165 次，而 2025 年全年只喷了 2 次（2/3、4/14），<strong>2026 年至今只喷过 1 次——2 月 27 日 19:01</strong>。USGS 每月简报 7 月、8 月都写着「only minor eruptive activity」。USGS 的 Michael Poland 说得很直白：<strong>「the sequence of frequent, predictable eruptions is probably over」</strong>。按最近 100 次间隔统计，中位数 10 天、均值 22 天、最长纪录 261 天——<strong>把它当成一个巨大的喷气孔来拍，喷发就当中彩票</strong>",
          "两条环线：<strong>Porcelain Basin</strong>（较短，约 0.75 英里，几乎无树的白色酸性荒原，是全园视觉上最「外星」的地方）与 <strong>Back Basin</strong>（约 1.5 英里，林间穿行，Steamboat、Echinus Geyser、Emerald Spring 都在这条上）。NPS 给的游览时长是 30–90 分钟",
          "颜色全部来自嗜热微生物，且直接对应水温：<strong>黄色含硫（60–83°C，就是它们在制造那股臭鸡蛋味）、红棕色含铁与高浓度砷（60°C 以下）、翠绿色藻垫（56°C 以下）、墨绿黑色 Zygogonium 藻（更凉）</strong>。拍局部时这套对应关系很有用——颜色即温度梯度"
        ],
        "photo": "风光 <strong>4.5/5</strong>，抽象 / 局部 <strong>5/5</strong>，人像 <strong>2/5</strong>。Porcelain Basin 那片白色酸壳配彩色径流是全园最强的抽象素材；扣分在于没有一个「标志性单体」可拍（Steamboat 基本不喷），且博物馆 10 月 3 日就关门，之后连厕所都没有。",
        "shots": [
          {
            "name": "Porcelain Basin 观景平台俯瞰（主机位）",
            "park": [
              44.72622,
              -110.70074
            ],
            "view": [
              44.72828,
              -110.70397
            ],
            "desc": "从博物馆西侧下坡即到，是全区唯一能一眼收下整片白色酸壳荒原的高点。<strong>最佳时段 07:15–09:00（9 月底）/ 07:50–09:30（10 月底）</strong>：低角度阳光斜射，蒸汽被打亮成一片体积光，同时白壳还没被顶光拍平。<strong>16–24mm 拍全景纵深</strong>（前景放彩色径流沟，中景蒸汽带，远景林线）；<strong>70–200mm 压缩</strong>把七八处喷气孔的蒸汽柱叠成一片，是这里最容易出片的做法。正午顶光会把白壳拍成一片死白，反差全无，<strong>不要在 11:00–14:00 来拍这里</strong>。偏振镜在这里要慎用——它会削掉蒸汽的通透感。"
          },
          {
            "name": "Back Basin · Emerald Spring 与 Steamboat 喷气孔",
            "view": [
              44.72565,
              -110.70427
            ],
            "desc": "Emerald Spring 因池底硫黄的黄色与深水的蓝叠加成罕见的祖母绿，<strong>是这条环线上最值得单拍的一池</strong>，35–85mm 俯视构图，正午前后（太阳最高时）颜色最饱和——这是本区少数「反规则」的点位，因为它是个小池子，蒸汽量不足以毁掉画面。再往南 300 米是 Steamboat（44.72350, −110.70303），<strong>即使不喷，它两个泉眼持续吐出的蒸汽柱在逆光下也很可观</strong>，用 70–200mm 拍蒸汽的形态变化。"
          },
          {
            "name": "Norris Geyser Basin Overlook（路边高点）",
            "view": [
              44.74121,
              -110.71219
            ],
            "desc": "在 Grand Loop Road 上、盆地以北约 1.8 公里的一处路边高点，<strong>是唯一不用下车、能远眺整个 Norris 盆地蒸汽云的机位</strong>。适合 <strong>100–300mm</strong> 压缩「一整片林子在冒烟」的画面，也是 Steamboat 万一喷发时最安全的远观位置（历史照片多从这里拍）。清晨逆光效果最好；下午侧逆光也可用。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>年票覆盖，不另收费</strong>",
          "hours": "<strong>盆地本身没有门禁，全天可入</strong>（NPS 该步道页标注 Season: Spring, Summer, Fall，Time of Day: Any Time）。<strong>Norris Geyser Basin Museum 与 Norris Park Store 最后营业日均为 2026/10/3</strong>，之后厕所与讲解台全部关闭。冬季（11 月起）此处只能靠雪地摩托抵达",
          "parking": "博物馆东侧有多个免费停车场（本页坐标取 44.72622, −110.70074）。<strong>停车场是本区已知的地热破坏点之一</strong>，路面有沉降坑，慢行",
          "walk": "停车场到 Porcelain Basin 观景平台约 <strong>150 米 / 3 分钟</strong>，但<strong>从博物馆下到盆地的那段坡陡且不平</strong>（NPS 无障碍说明明确提示）。走完两条环线约 <strong>2.25 英里 / 3.6 公里，1.5–2 小时</strong>"
        },
        "notes": [
          "<strong>硫化氢在这里是真问题，而且冷晨最危险。</strong>2004 年一个「异常寒冷且无风」的夜晚过后，Norris 有五头野牛因 CO₂ 与 H₂S 在近地面积聚而死。这两种气体都比空气重、往低处沉——<strong>而你想拍的那种无风冷晨正好是最容易积气的条件</strong>。感到眼刺痛、头痛、恶心就立刻离开低洼段",
          "硫化氢会让银饰发黑，也会腐蚀相机的电子触点。回车后把器材从包里拿出来通风，别闷一整晚",
          "<strong>Norris 的木栈道历史上因地面过热被烧焦而整段拆改</strong>（2018 年 Porcelain Basin 就有一段整体挪了 3 英尺）。如果现场有围挡，那是真的危险，不要绕过去",
          "这一带是灰熊活动区，10 月是熊进食高峰期（hyperphagia）。<strong>停车场到盆地这段虽然人多，仍建议随身带熊喷雾</strong>（Old Faithful 与 Canyon 有租借点，但 Norris 没有；Old Faithful 的 Bear Spray Rental Yurt 最后营业日 10/3）",
          "<strong>Norris–Canyon 与 Norris–Madison 两段公路 2026 年均无施工项目</strong>（已核对 NPS 实时施工数据库），两段都开到 10/31",
          "Norris 到 Old Faithful 单程约 <strong>50 公里 / 1 小时</strong>（经 Madison），<strong>不要把 Norris 的日出和 Old Faithful 的日出排在同一天</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/96/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Norris_Geyser_Basin_--_2022_--_2690.jpg",
            "cap": "Porcelain Basin 白色酸壳荒原 · Dietmar Rabich / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Steam_shadows%2C_Norris_Geyser_Basin_%2836f97b50-1dd8-b71b-0b68-82d8b2bcca66%29.jpg",
            "cap": "蒸汽在地面投下的影子 · Neal Herbert / NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Steamboat_Geyser_steam_phase_viewed_from_the_Norris_Geyser_Basin_Overlook_%2848678874817%29.jpg",
            "cap": "从 Norris Overlook 远观 Steamboat 蒸汽相 · NPS / Public domain"
          }
        ]
      },
      {
        "id": "ys-firehole-canyon-drive",
        "n": 2,
        "name": "火洞峡谷车道",
        "en": "Firehole Canyon Drive",
        "score": 3.5,
        "tldr": "2 英里单行道，40 英尺瀑布配 800 英尺厚的流纹岩崖壁；停车位极少，10 分钟就能拍完。",
        "tags": [
          {
            "t": "年票覆盖",
            "c": "free"
          },
          {
            "t": "禁大巴 / 拖挂 / 房车",
            "c": "risk"
          },
          {
            "t": "车位极少",
            "c": "risk"
          },
          {
            "t": "关闭日期未公布",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>我把它单列成一个条目而不是并入 Fountain Paint Pot</strong>——理由是它在 Madison Junction 南侧 0.5 英里，离 Fountain Paint Pot 有 14 公里，题材（瀑布与火山岩崖壁）也和热区完全不同，合并会让地图针脚落错位置",
          "<strong>Firehole Falls 落差约 40 英尺（12 米）</strong>，Firehole River 在这里切进一段<strong>厚达 800 英尺（240 米）的流纹岩熔岩流</strong>。这是本区唯一一处「峡谷 + 瀑布 + 深色岩壁」的组合，色调与遍地白壳的间歇泉盆地形成强烈对比",
          "单行道全长 2 英里，方向为南下（从 Madison Junction 一侧进）。<strong>Compendium 明文禁止大巴、拖挂车与房车驶入</strong>，限速 25 mph。路窄、可停车的路肩非常少，是这里最大的执行障碍",
          "<strong>Firehole Swim Area 目前关闭</strong>（NPS Current Conditions 页原文「Closed. Estimated opening date: no earlier than late summer/early fall.」）。对摄影没有影响，但意味着那一段的停车位也用不了"
        ],
        "photo": "风光 <strong>3.5/5</strong>，长曝水流 <strong>4/5</strong>，人像 <strong>2/5</strong>。峡谷本身在阴天与清晨柔光下最好拍，是本区唯一能做长曝丝滑水流的地方；扣分在于规模不大、机位单一、且几乎没有可站位的空间。",
        "shots": [
          {
            "name": "Firehole Falls 路边观景点",
            "park": [
              44.62947,
              -110.86284
            ],
            "view": [
              44.62881,
              -110.86333
            ],
            "desc": "瀑布正对面的路肩观景点，走几步就到。<strong>峡谷东西两侧崖壁很高，直射阳光只在中午前后短暂进入谷底</strong>——这反而是好事：<strong>阴天或 09:00 之前的全阴影状态是这里最佳的光线</strong>，光比小、水面无高光溢出。<strong>24–70mm</strong> 收瀑布加两侧岩壁；<strong>ND8–ND64 加 f/11，快门 1/2–2 秒</strong>做水流丝化。10 月是枯水期，水量比夏天小，不要指望汹涌。<strong>栏杆是可用的稳定支点</strong>，路肩太窄不适合架三脚架。"
          },
          {
            "name": "峡谷段路侧崖壁（车道中段）",
            "view": [
              44.62805,
              -110.86076
            ],
            "desc": "整条单行道穿行在流纹岩壁之间，<strong>真正值得拍的其实是崖壁本身的柱状节理与色带</strong>，而不是瀑布。<strong>35–85mm 拍岩壁纹理的抽象</strong>，<strong>日落前 1 小时（9/25 约 18:15 / 10/22 约 17:30）西侧崖壁被暖光照亮</strong>，东侧仍在阴影里，是唯一有明确层次的时刻。此段几乎无处停车，<strong>看到路肩就停，不要在道上慢行找位置（后车看不见你）</strong>。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>年票覆盖</strong>",
          "hours": "无门禁。<strong>NPS 没有为 Firehole Canyon Drive 单独公布 2026 年季节性关闭日期</strong>——按 Superintendent’s Compendium 的通则，它应与 Grand Loop 同步于 <strong>11 月 1 日</strong>关闭；<strong>但这一点未能从官方渠道单独确认</strong>，且窄路遇早雪可能提前关闭。它也不在 NPS 那张实时路况地图上，只能打 (307) 344-2117 问",
          "parking": "<strong>没有正式停车场，只有若干极小的路肩</strong>。瀑布处的路肩最大但也只容几台车。禁止大巴、拖挂与房车进入",
          "walk": "停车即到，全程步行不超过 30 米。开完整条路加拍摄约 <strong>20–40 分钟</strong>"
        },
        "notes": [
          "<strong>单行道，方向不可逆</strong>。错过瀑布只能开出去再从 Madison Junction 绕回来（约 10 分钟）",
          "限速 25 mph，路面窄且有急弯，秋季早晨背阴段可能结冰",
          "Madison Junction 附近的 <strong>Madison Information Station 最后营业日 10/3</strong>，Madison Campground 开到 10/17。此后这一带最近的厕所在 Old Faithful 或 West Yellowstone",
          "<strong>Madison 一带没有加油站，也基本没有手机信号</strong>。加油请在 West Yellowstone 或 Old Faithful 解决",
          "West Entrance Road（West Yellowstone–Madison）2026 年 8/17 至 9 月初有夜间 21:30–05:00 的<strong>钻探取芯作业，最多 15 分钟延误</strong>；若你在 9 月下旬清晨从 West Yellowstone 进园，这项作业届时应已结束，但值得出发前确认一次"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/35/Firehole_Falls_%2815_June_2023%29_%28Firehole_River%2C_Yellowstone%2C_Wyoming%2C_USA%29_1.jpg",
            "cap": "Firehole Falls · James St. John / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Firehole_River_%28Firehole_Canyon%2C_Yellowstone%2C_Wyoming%2C_USA%29_10.jpg",
            "cap": "峡谷段的流纹岩崖壁 · James St. John / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Winter_at_Firehole_Falls_%2824232310646%29.jpg",
            "cap": "低温季节的 Firehole Falls · NPS / Public domain"
          }
        ]
      },
      {
        "id": "ys-fountain-paint-pot",
        "n": 3,
        "name": "喷泉泥浆池与下间歇泉盆地",
        "en": "Fountain Paint Pot · Lower Geyser Basin",
        "score": 3.5,
        "tldr": "0.5 英里木栈道一次看齐四类热泉，泥浆池是全园最好拍的一处；秋季泥浆变稠，气泡形态最漂亮。",
        "tags": [
          {
            "t": "年票覆盖",
            "c": "free"
          },
          {
            "t": "0.5 英里平缓栈道",
            "c": "free"
          },
          {
            "t": "正规停车场",
            "c": "free"
          },
          {
            "t": "题材偏小",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这是全园唯一一条能在半英里内集齐四种水热类型的栈道</strong>：喷泉（Fountain / Clepsydra Geyser）、热泉（Silex Spring）、泥浆池（Fountain Paint Pot）、喷气孔（Fumarole）。教科书式的地质剖面，对讲故事的照片很有价值",
          "<strong>Fountain Paint Pot 的泥浆稠度随季节变化：春天融雪多、泥稀，秋天水少、泥稠。</strong>9 月底到 10 月正是一年里泥最稠的时候——<strong>气泡鼓起再破裂的形态最完整、最容易抓拍</strong>，这是选在这个窗口来的一个实际好处",
          "<strong>Clepsydra Geyser 几乎持续喷发</strong>（名字来自希腊语「水钟」，因为它曾经每三分钟准时喷一次）。它是本区少数「不用等」的间歇泉，任何时候到都在喷，<strong>是给整片盆地照片加一个动态主体的可靠办法</strong>",
          "<strong>Fountain Geyser 是 NPS 列出的六个预报间歇泉之外的常规喷发者</strong>，平均间隔 4.5–7 小时、持续 25–50 分钟、高约 50 英尺（15 米）。它不在预报名单上，靠碰",
          "栈道边有一片著名的「<strong>bobby socks trees</strong>」——被富含二氧化硅的热水浸泡的死树，硅质从根部往上沉积把树干下段染成白色，像穿了白袜子。逆光剪影配蒸汽是这里辨识度最高的一张"
        ],
        "photo": "风光 <strong>3/5</strong>，微距 / 局部 <strong>4.5/5</strong>，人像 <strong>2/5</strong>。泥浆池的高速抓拍与 bobby socks trees 的剪影是这里的两张牌；扣分在于整体规模小、大景构图缺乏纵深，容易变成「到此一游」。",
        "shots": [
          {
            "name": "Fountain Paint Pot 泥浆池（高速抓拍）",
            "park": [
              44.54792,
              -110.80788
            ],
            "view": [
              44.55061,
              -110.80624
            ],
            "desc": "从停车场沿栈道上坡约 200 米。<strong>这是全区最需要「快门优先」思维的机位</strong>：<strong>1/1000 秒以上冻结泥浆气泡爆开的瞬间</strong>，或 <strong>1/15–1/30 秒</strong>让泥浆拉出流动感——两种都成立，但要分开拍。<strong>100–200mm 或 100mm 微距</strong>，只取一小块泥面做纯抽象。连拍模式必开，气泡破裂无法预判。<strong>光线上要顺光或侧顺光</strong>（上午 09:00–11:00 最好），逆光时泥浆是深灰色，什么细节都没有。<strong>泥点会溅到镜头上，装 UV 镜。</strong>"
          },
          {
            "name": "Silex Spring 与 bobby socks trees 逆光剪影",
            "view": [
              44.5502,
              -110.80592
            ],
            "desc": "<strong>日出后 30–90 分钟（9/25 约 07:45–08:45 / 10/22 约 08:15–09:15）</strong>，太阳方位 90°–105° 正好在栈道东侧，<strong>把白袜子树与蒸汽同时打成逆光</strong>。<strong>24–70mm，把树干放在画面边缘做前景框，让蒸汽占据中间的高光区</strong>。测光按最亮的蒸汽给 +1 至 +1.7 EV，树干自然压成剪影。Silex Spring 本身在正午前后颜色最好（蓝绿到橙的完整温度梯度），可以同一天来两趟。"
          },
          {
            "name": "Clepsydra Geyser 持续喷发",
            "view": [
              44.55114,
              -110.80894
            ],
            "desc": "栈道最西端。<strong>它几乎全天在喷，是本条目最可靠的动态主体</strong>。<strong>70–200mm 压缩</strong>把它的水柱与背后 Fountain Geyser 的池子叠在一起；或用 <strong>16–35mm 贴近栈道栏杆</strong>拍水柱撑满画面的广角冲击。<strong>下午晚些时候（日落前 1–1.5 小时）西向逆光</strong>会让水柱变成一团金色，这是这个点位一天里最好的 20 分钟。快门 1/500 以上冻结水珠。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>年票覆盖</strong>",
          "hours": "无门禁，全天可入。所在的 Madison–Old Faithful 段公路 2026 年开放至 <strong>10/31</strong>",
          "parking": "<strong>Fountain Paint Pot Parking 是正规硬化停车场</strong>（44.54792, −110.80788），容量在本区算大，10 月几乎不会满。这里也是 Firehole Lake Drive 北门旁最方便的停车点",
          "walk": "停车场到栈道起点 <strong>50 米</strong>；整条环线 <strong>0.5 英里 / 0.8 公里，30–45 分钟</strong>，上坡段平缓，是本区最省力的一条"
        },
        "notes": [
          "整条栈道<strong>没有遮挡也没有座椅</strong>，10 月清晨风大时体感极低，戴上手套再出发（触屏手套在这里很值）",
          "泥浆池的泥会溅到栏杆与地板上，<strong>别把相机包放地上</strong>",
          "<strong>此处是本区离 Firehole Lake Drive 北门最近的正规停车场</strong>。但 2026 年 Firehole Lake Drive 对机动车关闭，Great Fountain 需从<strong>南门</strong>步行进入，不要从这里走（从北门走到 Great Fountain 要绕整条 3.3 英里单行道）",
          "这里有明确的野牛活动，秋季常见牛群直接躺在栈道旁。<strong>NPS 规定与野牛保持 25 码（23 米）</strong>，牛挡路就原路退回，不要绕，也不要试图从栈道边下去",
          "10 月的清晨栈道结冰概率很高，木板上的透明薄冰在头灯下看不见"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Fountain_Paint_Pot_%2816245193997%29.jpg",
            "cap": "Fountain Paint Pot 泥浆池 · NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/5f/%22Bobby_socks_trees%22_at_Fountain_Paint_Pots_%284b18bc86-3e16-4114-b8bb-f8611640bd89%29.jpg",
            "cap": "「白袜子树」bobby socks trees · NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Fountain_Geyser_--_2022_--_2443.jpg",
            "cap": "Fountain Geyser 喷发 · Dietmar Rabich / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "ys-firehole-lake-drive",
        "n": 4,
        "name": "火洞湖车道 · 大喷泉与白丘间歇泉",
        "en": "Firehole Lake Drive · Great Fountain Geyser & White Dome Geyser",
        "score": 4,
        "tldr": "全园唯一「可预报的大间歇泉正好赶上日落」的机位；但 2026 年整季禁车，单程要走 1.6 公里。",
        "tags": [
          {
            "t": "2026 全季禁车",
            "c": "risk"
          },
          {
            "t": "单程步行 1.6 公里",
            "c": "risk"
          },
          {
            "t": "需摸黑走回",
            "c": "risk"
          },
          {
            "t": "年票覆盖",
            "c": "free"
          }
        ],
        "highlights": [
          "<strong>Great Fountain Geyser 是 Lower Geyser Basin 里唯一被 NPS 正式预报的间歇泉</strong>。NPS 公布参数：<strong>平均间隔 11 小时 30 分（±2 小时）</strong>，<strong>持续 45–60 分钟</strong>，<strong>高 70–200+ 英尺（22–60+ 米）</strong>，喷发由一连串「爆发—静止」的循环组成，通常第一波最高",
          "<strong>它是本区唯一能主动「安排」到日落的大间歇泉，这才是它的真正价值。</strong>做法：早上到 Old Faithful 游客中心抄下当天 Great Fountain 的预报时刻，如果预报窗口的中心落在日落前后 2 小时内，这一晚就值得押它。<strong>预报可以现场收窄</strong>——NPS 与观测者的共识是：<strong>喷发前 70–100 分钟泉池开始溢流</strong>，此后约半小时池边开始出现小气泡，气泡长到 3 英尺（1 米）高就是喷发开始。<strong>看到溢流，就能把 ±2 小时收窄到大约 ±15 分钟</strong>",
          "它喷发时水会顺着泉口周围<strong>层层叠叠的硅华台阶</strong>漫下来，而这些浅水台阶在日落时会变成一整片反射晚霞的镜面。<strong>「Great Fountain 台阶日落」是本条目的招牌构图，即使不喷发也成立</strong>",
          "同一条路上的 <strong>White Dome Geyser 每 15–30 分钟喷一次，高约 30 英尺（9 米）</strong>，泉锥是一个高约 12 英尺、造型极辨识的白色硅华丘。<strong>等 Great Fountain 的空档就拍它，几乎不会白等</strong>",
          "<strong>坏消息也在这里：2026 年整季，Firehole Lake Drive 对机动车关闭。</strong>原因是路基下方的地热持续把沥青烤软（2014 年第一次因此封路），加上一座 1935 年的桥待修。园方发言人 2026 年的口径是「目前没有施工，园方正在评估短期与长期方案」。<strong>步行与自行车允许通行</strong>，且路上几乎无人——这条路现在反而是本区最安静的地方"
        ],
        "photo": "风光 <strong>4.5/5</strong>，间歇泉动态 <strong>4.5/5</strong>，人像 <strong>1.5/5</strong>。「大喷发 + 日落 + 反光台阶」的组合在全园独一份；综合分被 2026 年的禁车严重拉低——所有拍摄都要按「负重徒步 3.2 公里往返、摸黑走回」来规划。",
        "shots": [
          {
            "name": "Great Fountain Geyser 台阶日落（招牌机位）",
            "view": [
              44.53574,
              -110.80039
            ],
            "desc": "路侧原有的观景点，在泉口<strong>南南西方向约 95 米</strong>，视线朝北北东。<strong>9/25 日落 19:17（方位 270°）/ 10/22 日落 18:29（方位 255°）</strong>，太阳在你的左后方——<strong>泉锥与台阶得到正面暖光，而浅水台阶同时反射西边的晚霞，这就是那批经典照片的成因</strong>。<strong>最佳时段：日落前 30 分钟到日落后 25 分钟</strong>（蓝调时段台阶会变成粉紫色）。<strong>16–35mm 贴近台阶做前景倒影</strong>是首选；有喷发时换 <strong>24–70mm</strong> 让水柱占画面高度的三分之二。喷发瞬间快门 <strong>1/500 以上</strong>冻结水珠；无喷发时用 <strong>0.5–2 秒</strong>拍台阶浅水的镜面效果。<strong>三脚架在这里是必需的</strong>（蓝调时段手持没戏），路面宽、随便架。（方位与距离由 OSM 坐标推算。）"
          },
          {
            "name": "White Dome Geyser 泉锥",
            "view": [
              44.53934,
              -110.80284
            ],
            "desc": "沿路再往北约 400 米。<strong>每 15–30 分钟一次，是等待期间最好的消遣</strong>。这个泉锥形状极好，<strong>70–200mm 从南侧压缩拍它孤立在荒地上的剪影</strong>，日落前 40 分钟侧逆光最佳。喷发只有 2 分钟左右，<strong>提前把构图、对焦、参数全部锁死，看到水起来就连拍</strong>。注意从这里走回南门是 2.0 公里，摸黑走回请预留 25–30 分钟。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>年票覆盖</strong>",
          "hours": "<strong>2026 年整季对机动车关闭，仅允许步行与自行车。</strong>无门禁时间限制。有未经证实的说法称园方可能开放「北门到 Firehole Lake」一段双向小车通行，<strong>但 Great Fountain 与 White Dome 所在的南段无论如何仍是步行区</strong>。<strong>这条路不在 NPS 实时路况地图上</strong>，出发前只能拨 (307) 344-2117 或问 ranger",
          "parking": "<strong>南门（44.53533, −110.81772，与 Grand Loop Road 的路口）旁只有一小片非正式路肩，大约能停几台车，无 OSM 实体、地图无针脚。</strong>备选是 <strong>Fountain Paint Pot Parking（44.54792, −110.80788）</strong>，但那里靠近北门，走过去要绕整条 3.3 英里的路，不要选",
          "walk": "<strong>南门到 Great Fountain 沿路 1,586 米（约 1.0 英里），步行 20–25 分钟；再到 White Dome 追加 374 米。往返 Great Fountain + White Dome 约 4 公里，1 小时左右</strong>（沿 OSM 路网实测量算）。路面为铺装（虽然破损），坡度可忽略"
        },
        "notes": [
          "<strong>拍完日落必须摸黑走 1.6 公里回车上，这是本条目最需要提前想清楚的一件事。</strong>带头灯（不是手机手电）、带备用电池、走在路中间（路两侧就是热区）。<strong>10/22 民用暮光 18:58 结束，之后是完全的黑</strong>",
          "<strong>这段路上没有厕所、没有信号、10 月几乎没有别人。</strong>结伴，或至少让同行者知道你的计划",
          "一定<strong>随身带熊喷雾并放在腰挂 / 胸挂上</strong>。这是灰熊活动区，10 月是熊的进食高峰期，而你会在暮色中独自走在一条无人的路上——这是本区风险最高的组合",
          "骑车是合法且高效的替代方案（往返只要 15 分钟），但<strong>园内没有自行车租赁点在 10 月还开着</strong>（Old Faithful Bike Rentals 最后营业日 9/7），只能自带",
          "Great Fountain 偶尔会进入所谓 <strong>wild-phase</strong>：喷发时长大幅拉长、间隔可达三天，此期间完全无法预报。若游客中心当天没有给出 Great Fountain 预报，多半就是这个原因，直接放弃改去别处",
          "<strong>Compendium 另外规定 Firehole Lake Drive 禁止 6 吨以上车辆</strong>——即使将来重开，房车与拖挂也进不去"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/04/Great_Fountain_Geyser_terraces_at_sunset_%2830766842144%29.jpg",
            "cap": "Great Fountain 硅华台阶的日落反光 · NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Great_Fountain_Geyser_Sunset.jpg",
            "cap": "Great Fountain 日落喷发 · user:Flicka / CC BY-SA 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/White_Dome_Geyser_%2823756295554%29.jpg",
            "cap": "White Dome Geyser 泉锥 · NPS / Public domain"
          }
        ]
      },
      {
        "id": "ys-midway-geyser-basin",
        "n": 5,
        "name": "中途间歇泉盆地",
        "en": "Midway Geyser Basin",
        "score": 4.5,
        "tldr": "栈道从 Excelsior 巨坑上方横过，橙色径流沟本身就是一流题材；但在这里看不到 Grand Prismatic 的彩环。",
        "tags": [
          {
            "t": "年票覆盖",
            "c": "free"
          },
          {
            "t": "0.8 英里栈道",
            "c": "free"
          },
          {
            "t": "停车 10–18 时最紧张",
            "c": "risk"
          },
          {
            "t": "看不到彩环",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Excelsior Geyser Crater 是一个 200×300 英尺的爆炸坑</strong>，木栈道从它正上方横过，脚下是 199°F 的沸水与冲天蒸汽——<strong>这是全园最有压迫感的一段栈道</strong>。它现在是一个持续排水的巨型热泉，常年以每分钟数千加仑的量把热水灌进 Firehole River",
          "<strong>真正被低估的是那些橙色径流沟（runoff channels）</strong>。Grand Prismatic 溢出的热水沿着扇形沟渠流向 Firehole River，橙红色的嗜热微生物垫在沟里长成一道道放射状的条纹。<strong>这是一个独立成立的抽象摄影题材，比在这里勉强拍 Grand Prismatic 本体强得多</strong>",
          "<strong>必须先接受一个事实：在 Midway 的栈道上看不到 Grand Prismatic 的彩环。</strong>这池子直径 200–330 英尺（60–100 米）、深 121 英尺（37 米），是 Yellowstone 最大的热泉——站在它边上，你的视线高度不足以看出同心圆结构，只会看到一片蓝加一片白雾。<strong>要拍彩环必须去 Grand Prismatic Overlook（本区另设条目）。</strong>这两处是完全不同的两次拍摄，不能合并",
          "Turquoise Pool 与 Opal Pool 就在同一条栈道上，<strong>是这里少数在近距离也能拍出颜色的池子</strong>，正午前后蓝绿最纯",
          "Excelsior 在 1880 年代曾经是一个能喷到 300 英尺的巨型间歇泉，<strong>剧烈喷发把自己的泉道炸坏之后就再没恢复</strong>，1985 年有过一次持续 47 小时的意外复活。现在它只是安静地流"
        ],
        "photo": "风光 <strong>4/5</strong>，抽象 / 局部 <strong>5/5</strong>，人像 <strong>2.5/5</strong>。径流沟与 Excelsior 蒸汽是这里的两张牌，且都在冷晨表现更好；扣分只因为很多人带着「拍彩虹池」的期待来，然后失望。",
        "shots": [
          {
            "name": "Firehole River 上的木桥与径流扇（招牌机位）",
            "park": [
              44.52907,
              -110.83612
            ],
            "view": [
              44.52765,
              -110.83608
            ],
            "desc": "从停车场跨过 Firehole River 的那座木桥，以及桥后爬上台地的第一段栈道。<strong>这是全区拍橙色径流沟的唯一位置</strong>：热水从台地边缘倾泻而下汇入河里，扇形沟渠与河水的冷暖对比极强。<strong>最佳时段是日出后 30–90 分钟</strong>（9/25 约 07:45–08:45 / 10/22 约 08:15–09:15），低角度光斜射进沟里，橙色被打到最饱和，同时上方的蒸汽被逆光打亮。<strong>24–70mm 拍全景（把桥当引导线）；70–200mm 只取沟渠的纹理做纯抽象。</strong><strong>偏振镜在这里非常有用</strong>——它能压掉浅水面的反光，让水下的微生物垫颜色跳出来，这是本条目唯一强烈建议用 CPL 的地方。"
          },
          {
            "name": "Excelsior Geyser Crater 上方栈道",
            "view": [
              44.52627,
              -110.83674
            ],
            "desc": "栈道从大坑北缘横过。<strong>拍它的关键是解决「白茫茫一片」</strong>：不要在无风的冷晨来（什么也看不见），<strong>选有风的中午前后</strong>，蒸汽被吹成斜向的带状，坑缘与深蓝色的水面才能露出来。<strong>16–35mm 贴近栏杆向下拍</strong>，让坑缘的橙色硅华占前景。曝光按最亮的蒸汽给，欠 1 到 1.5 EV 再后期提暗部——<strong>蒸汽一旦过曝就再也救不回来</strong>。"
          },
          {
            "name": "Grand Prismatic 池边（近距离质感）",
            "view": [
              44.52528,
              -110.83827
            ],
            "desc": "<strong>放弃拍全貌，只拍边缘</strong>。池边的橙黄色微生物垫在近距离下是极好的抽象素材，<strong>70–200mm 或 100mm 微距</strong>取一小块，配合水汽做虚实层次。<strong>时段与规则二一致：太阳最高、气温最高的那两三个小时（9 月底 11:00–15:00，10 月底 12:00–14:30）</strong>，此时蒸汽最薄。清晨来这里等于白来。如果同一天要去 Overlook，<strong>先去 Overlook 再下来走 Midway</strong>，因为 Overlook 对时间的要求更苛刻。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>年票覆盖</strong>",
          "hours": "无门禁，全天可入。所在路段（Madison–Old Faithful）2026 年开放至 <strong>10/31</strong>",
          "parking": "<strong>Grand Prismatic Spring Parking（44.52907, −110.83612）</strong>，正规硬化停车场。NPS 官方提示「Limited parking, especially 10 am–6 pm」——但那是给夏天说的，<strong>10 月的工作日基本随到随停</strong>。注意这个停车场<strong>不是</strong>去 Overlook 用的那个",
          "walk": "停车场到栈道尽头往返约 <strong>0.8 英里 / 1.3 公里，30–45 分钟</strong>，全程平坦木栈道"
        },
        "notes": [
          "<strong>栈道全程在热区上方，且几乎没有护栏之外的空间</strong>。三脚架请立在栈道靠内侧，不要把脚伸到栏杆外",
          "<strong>Compendium 规定：Midway Geyser Basin 人行桥上下游各 200 码禁止钓鱼</strong>，与摄影无关但常有人不知道",
          "这一段的蒸汽量非常大，<strong>过桥后逆风的那 50 米镜头会立刻起雾</strong>。进场前先把镜头擦干净，进场后每两三分钟擦一次",
          "Midway 到 Fairy Falls Trailhead（去 Overlook 的停车场）开车只要 <strong>3 分钟 / 1.6 公里</strong>，<strong>但两处必须分两个时段拍，不要连着走</strong>",
          "2026 年 6 月 13 日 Biscuit Basin 的水热爆炸曾让 Firehole River 从 Biscuit Basin 一路到 Midway（约 6 公里）变成灰白色浑水。这类事件之后河水浑浊会持续一段时间，<strong>如果你到场发现河水不是清的，那不是污染，是上游又炸了</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Excelsior_Geyser_Crater_--_2022_--_2479.jpg",
            "cap": "Excelsior Geyser Crater · Dietmar Rabich / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/82/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Firehole_River%2C_Abflusskanal_des_Excelsior_Geysirs_--_2022_--_2572-4.jpg",
            "cap": "汇入 Firehole River 的橙色径流沟 · Dietmar Rabich / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Grand_Prismatic_Spring_--_2022_--_2514.jpg",
            "cap": "池边视角的 Grand Prismatic · Dietmar Rabich / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "ys-grand-prismatic-overlook",
        "n": 6,
        "name": "大棱镜泉观景台",
        "en": "Grand Prismatic Spring Overlook",
        "score": 5,
        "tldr": "唯一能看到彩环的地方，也是全园对时间最苛刻的机位：9 月底 11:00–15:00，10 月底收缩到 12:00–14:30。",
        "tags": [
          {
            "t": "年票覆盖",
            "c": "free"
          },
          {
            "t": "时间窗口极窄",
            "c": "risk"
          },
          {
            "t": "1.2 英里往返 / 爬升 105 英尺",
            "c": "paid"
          },
          {
            "t": "停车位很少",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这是全园唯一能真正看到 Grand Prismatic 同心彩环的地面机位。</strong>观景平台在泉体西南方约 240 米、高出约 32 米，俯角约 7.6°——刚好够把从中心的深蓝、到绿、黄、橙、红棕的整套色环压进一个平面",
          "<strong>颜色的物理原理决定了拍摄时间，这不是经验之谈。</strong>中心的深蓝来自纯水对红光的吸收（需要阳光直射并穿透进水体才成立）；外圈的橙红来自嗜热微生物垫的类胡萝卜素。<strong>太阳高度不够，光就无法穿进水里，中心那圈蓝拍不出来；气温太低，蒸汽会直接把整个池子盖住。这两件事都指向同一个结论：只能在正午前后拍。</strong>",
          "<strong>10 月的太阳比 9 月低得多，夏天那套「11:00–14:00」在 10 月底是错的。</strong>实算（44.52°N，MDT）：<strong>9 月 25 日正午太阳高度 44.4°</strong>，≥35° 的时段是 <strong>10:57–15:33</strong>；<strong>10 月 22 日正午只有 34.2°——全天都到不了 35°</strong>，≥30° 只剩 <strong>11:30–14:45</strong>；10 月 31 日正午 31.2°，≥30° 只有 12:14–13:59。<strong>10 月底 11:00 时太阳只有 27.2°，这个时刻在 9 月是可用的，在 10 月不是。</strong>",
          "<strong>NPS 给的步道数据：Fairy Falls Trailhead 出发，0.6 英里内爬升 105 英尺，往返 1.2 英里（1.9 公里），标为 Easy，建议时长 1–2 小时。</strong>带 GPS 实走的人普遍记录到单程 0.8 英里、爬升约 200 英尺——<strong>请按后者留时间</strong>。前 0.6 英里是平坦的碎石路（原为公路路基），最后 0.2 英里才是上坡土径",
          "<strong>Fairy Falls Trailhead 停车场在本季正常开放</strong>，它就在 Grand Loop Road 边上，随主路一起开到 10/31。NPS 页面明确写着「Parking is very limited」——但那是夏天的问题，10 月工作日通常有位。另需注意：<strong>2026 年 5 月因熊袭事件封闭的 Fairy Falls Trail 北段已于事后解除封闭</strong>，通往 Overlook 这一段当时就始终开放"
        ],
        "photo": "风光 <strong>5/5</strong>，抽象 <strong>4.5/5</strong>，人像 <strong>2/5</strong>。这是本次行程里单张照片上限最高的机位，没有之一；扣分只在于成败几乎完全由当天的风与气温决定，你能控制的只有到场时间。",
        "shots": [
          {
            "name": "观景平台正对彩环（唯一机位）",
            "park": [
              44.51525,
              -110.83248
            ],
            "view": [
              44.52353,
              -110.84004
            ],
            "desc": "<strong>时段是这个机位的全部。9 月底：11:00–15:00，核心 11:45–14:45。10 月底：12:00–14:30，且优先取后半段 13:00–14:30</strong>——此时太阳高度只比正午低 1–2°，但气温已接近全天最高，蒸汽明显更薄。视线方位约 <strong>36°（东北）</strong>，正午太阳在正南，<strong>光线从你正后方来，水面无眩光、穿透最深，这正是中午成立的原因</strong>。焦段（按 240 米距离与全画幅推算）：<strong>50–85mm 让彩环加外圈径流刚好撑满画面（这是主力焦段）；24–35mm 收整个 Midway 盆地与 Firehole River 的环境关系；135–200mm 只取色带做纯抽象</strong>。曝光：<strong>不要用偏振镜</strong>——CPL 会削弱水面反射同时压暗中心的蓝，得不偿失；按高光测光欠 0.7 EV，保住橙色不溢出；包围曝光 3 张应对蒸汽的忽明忽暗。手持完全够用，但平台有栏杆可当支点。"
          },
          {
            "name": "上坡土径中段的侧视角",
            "view": [
              44.5237,
              -110.83923
            ],
            "desc": "最后 0.2 英里上坡途中有几处开阔口，<strong>比平台低、更靠东，能拍到彩环的斜侧视角</strong>，色环会被压成椭圆但前景能纳入林线与倒木。价值在于<strong>平台上人多时这里是替代位</strong>，以及能拍到「人站在平台上看彩环」的尺度对比照。同样只在正午窗口内成立。坐标取自 OSM 步道路径中点，为路径上的近似位置。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>年票覆盖</strong>",
          "hours": "<strong>步道无门禁，NPS 标注 Season: Winter, Summer, Fall</strong>（秋季正常开放）。限制来自 Grand Loop Road：Madison–Old Faithful 段开到 <strong>10/31</strong>。<strong>另注意步道在 Overlook 以北通往 Fairy Falls 的部分是熊管理区，每年 3 月上旬至 5 月下旬另有季节性封闭，与本窗口无关</strong>",
          "parking": "<strong>Fairy Falls Trailhead 停车场（44.51525, −110.83248）</strong>，位于 Midway Geyser Basin 以南 1 英里的 Grand Loop Road 东侧。<strong>这不是 Midway 的那个停车场，别停错——停错要多走 2.6 公里</strong>。NPS 提示车位「very limited」",
          "walk": "<strong>NPS 口径：单程 0.6 英里 / 爬升 105 英尺；实走 GPS 普遍为单程 0.8 英里 / 爬升约 200 英尺。往返按 1.6 英里 / 2.6 公里、50–70 分钟（含拍摄另加）计算。</strong>前 0.6 英里为平坦碎石路，可推婴儿车；最后 0.2 英里为上坡土径，雨后泥泞、霜后打滑"
        },
        "notes": [
          "<strong>把这个点排成「机动项」，不要绑死日期。</strong>风比气温更能决定成败——10–15 mph 的风能在低温上午吹开池面，而一个无风的暖和上午也可能整天糊死。出发前看 Old Faithful 的 NPS 网络摄像头判断当天蒸汽状况",
          "<strong>清晨绝对不要来这里。</strong>日出时这里只有一锅白雾，你会走 2.6 公里去拍一张什么都没有的照片。同理，日落前后也不行",
          "这是<strong>熊管理区</strong>，且步道后段人少。<strong>务必带熊喷雾、放在腰挂上，结伴而行、边走边出声</strong>。2026 年 5 月 4 日就有两名徒步者在 Old Faithful 西北侧被带崽母灰熊袭击致伤（相关封闭现已解除）",
          "观景平台不大，旺季会挤，<strong>10 月通常只有几个人</strong>。三脚架可以架但请留出通道",
          "往返约一小时且全程无遮挡、无厕所（<strong>最近的厕所在 Midway 停车场</strong>）。10 月正午气温可能只有 5–8°C，但上坡会出汗，穿可脱的中层",
          "<strong>不要试图从 Midway 的栈道翻越或从河边靠近——那是热区且违法</strong>。要拍彩环只有这一条路"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/70/View_from_the_Grand_Prismatic_Overlook_Trail_%2835637694570%29.jpg",
            "cap": "观景台俯视彩环 · NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/84/Grand_Prismatic_Spring_from_Fairy_Falls_Trail_overlook_%28Midway_Geyser_Basin%2C_Yellowstone_National_Park%29_2021-08-10%2C_01.jpg",
            "cap": "Fairy Falls Trail 观景点视角 · Steven Pavlov / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Viewing_platform_on_the_Grand_Prismatic_Overlook_Trail_%2835187569644%29.jpg",
            "cap": "观景平台本身 · NPS / Public domain"
          }
        ]
      },
      {
        "id": "ys-old-faithful-upper-basin",
        "n": 7,
        "name": "老忠实与上间歇泉盆地",
        "en": "Old Faithful & Upper Geyser Basin",
        "score": 5,
        "tldr": "全球间歇泉密度最高的一平方英里，预报系统 10/31 前正常运行；Observation Point 全年开放。",
        "tags": [
          {
            "t": "年票覆盖",
            "c": "free"
          },
          {
            "t": "六个泉有官方预报",
            "c": "free"
          },
          {
            "t": "游客中心开到 10/31",
            "c": "free"
          },
          {
            "t": "栈道清晨结冰",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>预报系统的现状（已核实，2026 年秋季正常运行）：NPS ranger 目前对六个间歇泉做预报——Old Faithful、Castle、Grand、Daisy、Riverside、Great Fountain。</strong>获取方式有五条：<strong>①免费的 NPS App（离线可缓存）；②Old Faithful Visitor Education Center 大厅的预报板；③官网 nps.gov/yell/planyourvisit/geyser-activity.htm 的实时页面；④电话录音；⑤第三方的 GeyserTimes 网站与 App</strong>。<strong>关键限制：预报由游客中心的 ranger 发布，游客中心一关就没有预报。2026 年该中心开到 10/31，因此整个 9/25–10/22 窗口都有预报，不用担心。</strong>另一个有用的细节：<strong>游客中心开门前的清晨，ranger 是依靠基地里的间歇泉爱好者（geyser gazers）在线发布的观测和网络摄像头来做判断的</strong>——所以你在天亮前想知道情况，直接看 GeyserTimes 比等官网更快",
          "<strong>Old Faithful 的实际参数（NPS，截至 2025 年 1 月）：喷发间隔中位数 102 分钟 ± 10 分钟，实测区间 54–118 分钟；高度 106 至 180+ 英尺（32–55 米），平均 130 英尺；持续 1.5–5 分钟；每次喷出 3,700–8,400 加仑；泉口水温 203°F（95.6°C）。</strong>过去 30 年它的平均间隔只延长了约 30 分钟——所以「越来越不准」的说法是夸张的",
          "<strong>Observation Point 是把 Old Faithful 拍出「场面感」的唯一办法，且它全年开放</strong>（NPS 步道页标注 Season: Year Round）。从游客中心沿栈道逆时针走约 0.3 英里，在 Geyser Hill 标牌处右转、过 Firehole River 上的桥，桥后即是登山口；<strong>之字形上坡 0.5 英里到达，往返 1.6 英里，NPS 评为 Moderate</strong>。继续向西走 0.9 英里可接上 Solitary Geyser 再下到 Geyser Hill 栈道",
          "<strong>Grand Geyser 是世界上最高的可预报间歇泉</strong>（喷发可达 200 英尺），而 <strong>Castle Geyser 拥有全园最大的泉锥</strong>——这个硅华锥体估计积累了数千年，是整个盆地里最有「纪念碑感」的单体。两者都在预报名单上，<strong>把它们的预报时刻抄下来当天的行程就基本排好了</strong>",
          "<strong>Morning Glory Pool 在栈道最远端（往返约 3 公里）</strong>。它原本是纯净的钴蓝色，<strong>因为几十年来游客往里扔硬币、垃圾和石头堵塞了热水通道，水温下降，橙黄色的嗜热微生物得以在边缘扩张——今天那圈醒目的橙边其实是人为破坏的产物</strong>。拍它的时候值得知道这一点"
        ],
        "photo": "风光 <strong>5/5</strong>，间歇泉动态 <strong>5/5</strong>，人像 <strong>3/5</strong>。全球间歇泉密度最高的地方，一个上午能拍到的题材密度在本次行程里无人能及；扣分只在于 Old Faithful 本体因为被拍烂了，很难拍出新意——真正的收获在 Observation Point 与 Grand / Castle。",
        "shots": [
          {
            "name": "Observation Point 俯瞰喷发（招牌机位）",
            "park": [
              44.45794,
              -110.83073
            ],
            "view": [
              44.46471,
              -110.82444
            ],
            "desc": "<strong>这是唯一能俯视 Old Faithful 喷发、同时把整个 Upper Geyser Basin 与 Old Faithful Inn 收进同一画面的机位</strong>，也是这个条目值 5 分的原因。<strong>最佳时段是日出后的第一次喷发</strong>（9/25 日出 07:13 / 10/22 日出 07:46）：太阳从东方（方位 90°–105°）低角度射来，<strong>而你在喷口的东北侧，喷发水柱正好处于侧逆光，蒸汽被彻底打亮</strong>。<strong>务必提前 40 分钟从游客中心出发</strong>（走 0.3 英里栈道 + 爬 0.5 英里之字坡，摸黑加结冰要留足时间），到顶后按预报时刻等。<strong>24–70mm 是主力</strong>（收喷发加盆地加 Inn）；<strong>70–200mm 压缩</strong>把远处的 Inn 屋顶与喷发水柱叠在一起。快门 1/500 以上冻结水珠；曝光按最亮的蒸汽给，欠 1 EV。"
          },
          {
            "name": "喷口东南侧看台 · 逆光喷发",
            "park": [
              44.45794,
              -110.83073
            ],
            "view": [
              44.46046,
              -110.82815
            ],
            "desc": "喷口周围有一圈木质看台。<strong>秋冬清晨的第一喷是这里的招牌</strong>——气温在冰点以下时喷出的水柱几乎瞬间全部变成蒸汽，体量比夏天大一倍以上。<strong>站在喷口的西侧、朝东（对着刚升起的太阳）拍逆光</strong>：这是本区的签名画面，因为低角度阳光穿过巨大的蒸汽体形成通透的金色，而背景的深色林线把它衬得很干净。<strong>曝光方法：点测最亮的蒸汽、给 +1 到 +1.7 EV，让人物与栏杆自然压成剪影</strong>；或从矩阵测光欠 1.5–2 EV 再后期提暗部。<strong>f/11–f/16 可以在太阳被蒸汽半遮时得到干净的星芒</strong>。遮光罩在正对太阳时没用，用手或帽子挡住前镜片的杂光，<strong>并每隔一两分钟擦一次镜头</strong>——蒸汽会持续在前镜片上凝水。"
          },
          {
            "name": "Grand Geyser 与 Castle Geyser",
            "view": [
              44.46666,
              -110.83701
            ],
            "desc": "从游客中心沿栈道向西北约 0.8 公里。<strong>先在游客中心抄下这两个泉的预报时刻，然后按时刻表安排</strong>——这是本区最值得投入等待时间的两个目标。Grand 喷发可达 200 英尺且以多波次爆发，<strong>24–70mm 竖构图</strong>才装得下；Castle（44.46366, −110.83648）的巨大硅华锥体更适合<strong>35–85mm 侧逆光拍锥体质感</strong>，不喷发时也完全成立。<strong>下午晚些时候（日落前 1–1.5 小时）西向逆光</strong>会把两者的蒸汽染成金色。等待时间可能长达一小时，带保温杯（但记住热区内禁止饮食，只能喝水）。"
          },
          {
            "name": "Morning Glory Pool",
            "view": [
              44.47506,
              -110.84353
            ],
            "desc": "栈道最远端，从游客中心单程约 <strong>1.5 英里 / 2.4 公里</strong>，往返一个半小时。<strong>严格按「颜色规则」执行：只在太阳最高、气温最高的时段来</strong>（9 月底 11:00–15:00 / 10 月底 12:00–14:30），清晨来只能拍到一锅雾。<strong>35–85mm 从栈道俯视，构图把整个池子放正、让蓝到橙的渐变对称</strong>。<strong>偏振镜在这里有用</strong>——压掉水面反光后池底的层次会明显加深。同一趟路上会经过 Riverside Geyser（44.47347, −110.84092，也在预报名单上，喷发时水柱斜着射过 Firehole River，是很好的构图）。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>年票覆盖</strong>",
          "hours": "<strong>盆地与全部木栈道无门禁，全天可入</strong>（这意味着你可以在天亮前上 Observation Point）。<strong>Old Faithful Visitor Education Center 2026 年开到 10/31</strong>，预报板与免费 Wi-Fi 都在里面。所在路段开到 10/31",
          "parking": "Old Faithful 区域有多个大型免费停车场：West Parking（44.45794, −110.83073，离 Inn 与 Observation Point 登山口最近）、East Parking（44.45712, −110.82541）等。<strong>10 月完全不紧张</strong>",
          "walk": "West Parking 到 Old Faithful 喷口约 <strong>350 米 / 5 分钟</strong>；到 <strong>Observation Point 往返 1.6 英里 / 2.6 公里，含爬升，45–70 分钟</strong>；到 <strong>Morning Glory Pool 往返 3 英里 / 4.8 公里，1.5–2 小时</strong>。整个 Upper Geyser Basin 栈道网络走全约 5 英里"
        },
        "notes": [
          "<strong>木栈道在天亮前普遍结冰</strong>：热泉径流淌上木板再冻住，形成头灯下看不见的透明薄冰。<strong>轻量冰爪在这里是本区回报率最高的一件装备</strong>，尤其你要摸黑爬 Observation Point",
          "<strong>Observation Point 那段之字坡在结霜时明显打滑</strong>，NPS 把它评为 Moderate 不是虚的。摸黑上山务必用头灯而不是手机手电（要腾出手扶）",
          "预报有一个容易误解的点：<strong>官网页面写着「The last prediction made will remain up until a new prediction is available」</strong>——也就是说你看到的可能是几小时前的旧预报。以现场预报板与 NPS App 为准",
          "Old Faithful 区域<strong>有手机信号（Verizon 最好）、有免费 Wi-Fi（游客中心）</strong>，是本区唯一能可靠联网的地方。<strong>走进盆地深处（Morning Glory 一带）信号消失</strong>",
          "<strong>Old Faithful 以南 1.5 英里的 Firehole River Bridge 在 2026 年 9 月内有桥梁作业，最多 15 分钟延误</strong>。若你从 West Thumb 方向进来会遇到",
          "这一带是灰熊活动区，<strong>NPS 明确说明「from the trails in the park’s backcountry to the boardwalks and parking lots around Old Faithful」都是熊乡</strong>。<strong>Bear Spray Rental Yurt 最后营业日 10/3</strong>，之后只能自带或在 West Yellowstone 买",
          "燃油：Old Faithful Upper Gas Station 便利店开到 10/18、Lower 站 9/13，<strong>但两站的刷卡自助加油全年 24 小时可用</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Spring_Old_Faithful_eruption_from_Observation_Point.jpg",
            "cap": "从 Observation Point 俯瞰喷发 · NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/4/48/Old_Faithful_eruption_in_front_of_the_sun_%2836922264582%29.jpg",
            "cap": "逆光中的 Old Faithful 喷发 · NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/15/Morning_Glory_Pool%2C_Yellowstone.jpg",
            "cap": "Morning Glory Pool · Clément Bardot / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "ys-biscuit-black-sand-basin",
        "n": 8,
        "gone": "Biscuit Basin 自 2024/7 爆炸后全域封闭至今，本条目仅 Black Sand Basin 可拍",
        "name": "黑沙盆地与饼干盆地",
        "en": "Black Sand Basin & Biscuit Basin",
        "score": 3,
        "tldr": "Black Sand Basin 正常开放且几乎无人；Biscuit Basin 连停车场都封着，2026 年 6 月又炸了一次。",
        "tags": [
          {
            "t": "Biscuit Basin 封闭中",
            "c": "risk"
          },
          {
            "t": "Black Sand 正常开放",
            "c": "free"
          },
          {
            "t": "年票覆盖",
            "c": "free"
          },
          {
            "t": "两处相距 3 公里",
            "c": "paid"
          }
        ],
        "highlights": [
          "<strong>Biscuit Basin 的判定：仍然全域封闭，包括停车场与全部木栈道，2026 年秋季不可能进入。</strong>2024 年 7 月 23 日约 10:00，Black Diamond Pool 发生水热爆炸，把水、岩石、泥浆抛到数百英尺高，<strong>摧毁了池边一段木栈道</strong>，当时在场的人是跑着躲开的（无人受伤）。此后再未开放",
          "<strong>而且它还在继续炸。</strong>2026 年 6 月 13 日 05:09，监测设备记录到地震与次声信号，在 Black Diamond Pool 以北约 100 米开出<strong>一组新泉眼和一道 60 英尺（18 米）长、灌满沸水的裂缝</strong>；6 月 14–16 日地面塌陷形成一个 <strong>21×17 英尺的沸水池</strong>，6 月 18 日与 23 日这个新池子还喷了。当天 Firehole River 从 Biscuit Basin 一路到 Midway（约 6 公里）变成灰白色浑水。USGS 8 月简报又记录到 Black Diamond Pool 8 月 13 日晚约 22:00 的一次大喷",
          "<strong>NPS 2026 年的正式措辞：「The closure related to the 2024 Biscuit Basin hydrothermal explosion remains in place due to continued unpredictable hydrothermal activity.」</strong>Grand Loop Road 本身正常通行，但你只能在车里路过。园方 2025 年 5 月在栈道上装了监测相机、7 月装了地震 / 次声 / GPS 站，2026 年爆炸后又加装了一台视野更广的相机——<strong>这些都是「短期内不会重开」的信号</strong>",
          "<strong>好消息是 Black Sand Basin 完全正常开放</strong>，而且因为紧邻 Old Faithful 却几乎没人去，<strong>是本区人最少的一个盆地</strong>。这里的 Sunset Lake、Emerald Pool 与 Cliff Geyser 都在一条短栈道上，<strong>Cliff Geyser 直接坐落在 Iron Spring Creek 的岸边——「间歇泉在溪流里喷发」这个构图在全园找不到第二处</strong>",
          "名字里的「黑沙」来自这一带的<strong>黑色黑曜石碎屑</strong>，与其他盆地清一色的白色硅华完全不同，是这里唯一的视觉特征"
        ],
        "photo": "风光 <strong>3/5</strong>，局部 <strong>4/5</strong>，人像 <strong>2.5/5</strong>。Black Sand Basin 单独看是一个 3.5 分的小盆地，胜在无人与 Cliff Geyser 的溪边构图；整个条目被 Biscuit Basin 的封闭拖到 3 分——你损失了 Sapphire Pool 和 Jewel Geyser。",
        "shots": [
          {
            "name": "Cliff Geyser 与 Iron Spring Creek",
            "park": [
              44.46208,
              -110.85304
            ],
            "view": [
              44.46226,
              -110.85398
            ],
            "desc": "从停车场沿栈道走 3 分钟。<strong>这是本条目唯一的招牌构图</strong>：泉眼就在溪岸上，喷发时热水直接落进冷溪，蒸汽在水面上贴着流。<strong>日出后 30–60 分钟（9/25 约 07:45–08:15 / 10/22 约 08:15–08:45）逆光最好</strong>，此时蒸汽被打亮、溪水呈暗调。<strong>24–70mm 把溪流当引导线；1/4–1 秒的慢门</strong>让溪水丝化而蒸汽拉出流向，两者的运动速度差会形成很好的层次。三脚架必备。Cliff Geyser 喷发不规律（几分钟到几小时），到场先架好机位再等。"
          },
          {
            "name": "Sunset Lake 与 Emerald Pool",
            "view": [
              44.46282,
              -110.8548
            ],
            "desc": "Sunset Lake 是一个持续冒着大量蒸汽的浅热泉，边缘有很宽的橙色微生物垫。<strong>这一处要按「颜色规则」拍——正午前后（9 月底 11:00–15:00 / 10 月底 12:00–14:30）</strong>，蒸汽最薄时才能拍到水面颜色。<strong>35–85mm 拍池子加倒影，100mm 微距拍微生物垫的纹理</strong>。再往前是 Emerald Pool，一个更小但颜色更纯的绿池，同样是正午题材。"
          },
          {
            "name": "Biscuit Basin 路边（只能远观）",
            "desc": "<strong>此处无法进入，停车场与栈道全部封闭，不提供拍摄坐标。</strong>经过时可以在 Grand Loop Road 上看到 Black Diamond Pool 方向持续的蒸汽柱，但<strong>路边没有合法停车位，不要为了这个停车</strong>。若你想记录这件事，可以从 Midway 一侧观察 Firehole River 的水色——爆炸后河水会呈灰白色。（无可用机位，地图无针脚。）"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>年票覆盖</strong>",
          "hours": "<strong>Black Sand Basin：无门禁，全天可入，2026 年秋季正常开放。</strong><strong>Biscuit Basin：全域封闭（停车场 + 全部木栈道），无预计重开日期。</strong>两处所在的 Madison–Old Faithful 段公路开到 10/31",
          "parking": "Black Sand Basin 有独立的免费停车场（44.46208, −110.85304），容量小但 10 月足够。<strong>Biscuit Basin 停车场封闭中，Grand Loop Road 沿线也不要临时停靠</strong>",
          "walk": "Black Sand Basin 栈道环线约 <strong>0.3 英里 / 0.5 公里，20–30 分钟</strong>，全平。从 Old Faithful 开车过来约 <strong>4 分钟 / 3 公里</strong>"
        },
        "notes": [
          "<strong>不要试图接近 Biscuit Basin。</strong>2026 年 6 月的爆炸把石块抛出数十英尺、在地面开出 18 米长的沸水裂缝，而且发生在凌晨 5 点——没有任何预警。USGS 的评论是：<strong>「In Yellowstone, unstable ground is not always marked by a pool, spring, or visible vent.」</strong>",
          "Black Sand Basin 离 Old Faithful 只有 3 公里，<strong>适合塞进「等 Old Faithful 下一次喷发」的 90 分钟空档</strong>",
          "这里同样在 2026 年 5 月的熊管理封闭范围之外（当时官方明确列为「开放」），但仍是熊活动区，带熊喷雾",
          "停车场很小且入口不明显（在 Grand Loop Road 西侧），<strong>开过头很常见，注意看标牌</strong>",
          "Iron Spring Creek 岸边的栈道在清晨结霜后特别滑，此处几乎没有其他游客，摔了没人扶"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/14/Iron_Spring_Creek_at_Black_Sand_Basin_-_Yellowstone_National_Park_-_Wyoming.jpg",
            "cap": "Iron Spring Creek 与 Black Sand Basin · Tony Webster / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/28/Sunset_lake_20190714_132237_1.jpg",
            "cap": "Sunset Lake · G. Edward Johnson / CC BY 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Sapphire_Pool%2C_Biscuit_Basin_in_Yellowstone_DyeClan.com_-_panoramio.jpg",
            "cap": "Biscuit Basin 的 Sapphire Pool，现已封闭 · The Dye Clan / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "ys-old-faithful-inn",
        "n": 9,
        "name": "老忠实旅舍",
        "en": "Old Faithful Inn",
        "score": 4.5,
        "tldr": "1904 年的七层原木框架大堂，世界最大木结构之一；但 2026 年可能 10/12 就锁门，务必先确认日期。",
        "tags": [
          {
            "t": "大堂免费开放",
            "c": "free"
          },
          {
            "t": "关门日期有冲突",
            "c": "risk"
          },
          {
            "t": "室内光比极大",
            "c": "risk"
          },
          {
            "t": "三脚架政策未明",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>1903–1904 年冬天建成，设计者 Robert C. Reamer 接下这个委托时只有 29 岁</strong>，这是他的第一件重要作品。造价 14 万美元、家具另花 2.5 万，总面积 188,445 平方英尺，是 <strong>National Historic Landmark（1987 年列入）</strong>，也被普遍称为<strong>世界最大的原木建筑</strong>",
          "<strong>核心是那个大堂：屋顶尖端距地面「近 77 英尺」（NPS 自己的园刊原文），内部是一套支撑七层的原木框架——其中六层其实是屋顶结构本身。</strong>注意一个反直觉的事实：<strong>「全木建造」是个误解</strong>，NPS 园刊明确澄清只有 Old House 的一层是承重的未削原木（十一根高、逐根刻槽鞍接），上部山墙其实是锯材框架加木瓦。Haynes 导览册当年记载「一层就用了一万多根原木」",
          "<strong>Reamer 特意用扭曲、弯曲的树枝做内外支撑与栏杆</strong>，这是整栋建筑「rustic」气质的来源，也是拍局部时最好的题材。大堂有两层环廊，从二层廊道有木梯继续爬到框架里一个叫 <strong>Crow’s Nest</strong> 的平台（当年乐队在上面演奏），再往上到距地板 92 英尺的山墙顶",
          "<strong>Old House 的朝向是刻意转了 90 度</strong>，让抵达的客人从门廊看出去时Old Faithful 正好被门廊框住；门廊屋顶本身就是一个观喷平台。主立面则朝向 Firehole River 对岸的 Geyser Hill",
          "<strong>最关键的现实问题：2026 年的关门日期，NPS 与运营方 Xanterra 差了一周。</strong>Xanterra 官网写 <strong>10 月 12 日</strong>（同页 2027 年为 10 月 11 日），NPS Operating Dates 表（2026/9/3 更新）写客房末日 <strong>10 月 18 日</strong>、餐厅礼品店 10 月 19 日。<strong>其余九家住宿两边数字完全一致，唯独这家对不上，无法判断哪边过期。安全做法：把 10 月 12 日当作确定能进的最后一天。</strong>"
        ],
        "photo": "建筑 <strong>5/5</strong>，人像 <strong>3.5/5</strong>，风光 <strong>1/5</strong>。全美最好的木构室内空间之一，且不用买票就能进大堂；扣分在于光比极大（山墙高窗到阴影常超过 9 EV）、能站的位置有限、且随时可能已经关门。",
        "shots": [
          {
            "name": "大堂正中仰拍原木框架（主机位）",
            "park": [
              44.46063,
              -110.83169
            ],
            "view": [
              44.45962,
              -110.83134
            ],
            "desc": "<strong>最佳时段是上午 10:00–12:00 与下午 14:00–16:00</strong>：此时山墙高窗与老虎窗有直射光进来，在原木框架上打出清晰的几何投影；而清晨与傍晚整个大堂是一片平淡的暖褐色，出片率大跌。<strong>14–20mm 超广是必需的</strong>（空间窄、高度大，24mm 收不下框架全貌），站在石砌壁炉前方的下沉区正中近乎垂直上仰。<strong>务必包围曝光 3–5 张做 HDR</strong>，窗口与阴影处光比常超过 9 EV，单张一定顾此失彼。参数起点：<strong>f/4，ISO 1600–3200，1/40 秒，机身防抖开</strong>；若能架三脚架则 f/8、ISO 400、长曝。"
          },
          {
            "name": "二层环廊俯拍大堂",
            "view": [
              44.45962,
              -110.83134
            ],
            "desc": "<strong>这是唯一能同时俯拍大堂地面、壁炉与上方框架的位置</strong>，也是拍「巨大空间中的小人物」尺度对比的最佳点——让同伴站在壁炉前的下沉区，从环廊俯拍。<strong>24–35mm 平视对面的木栏杆序列；85mm 单拍那座手工铜与锻铁大钟的细节</strong>。环廊木地板会因人走动而轻微震动，慢门时要等人走过去。（此坐标为 Old Faithful Inn 建筑本体的 OSM 中心点，室内各机位共用。）"
          },
          {
            "name": "门廊屋顶观喷平台与建筑外立面",
            "view": [
              44.45962,
              -110.83134
            ],
            "desc": "门廊的二层屋顶是对公众开放的观喷平台，<strong>能拍到「Old Faithful 喷发 + Inn 的木瓦屋檐做前景」这个只有这里成立的构图</strong>。<strong>日落前 30 分钟（9/25 约 18:45 / 10/22 约 18:00）</strong>暖光正好打在西向立面上。<strong>16–35mm 带屋檐做前景；70–200mm 单压喷发水柱。</strong>建筑外立面本身建议退到停车场西侧用 24–35mm 拍全貌，<strong>蓝调时段（日落后 15–30 分钟）室内灯光透出木格窗，是外景最好的 20 分钟</strong>。"
          }
        ],
        "access": {
          "book": "<strong>参观大堂不需预约，非住客也可自由进入</strong>。Inn 提供免费的 history tour（由讲解员带看 Old House 内部与一间老式客房），<strong>报名方式与秋季是否仍开班未能从官方渠道确认</strong>，到场问前台",
          "ticket": "<strong>进入大堂免费</strong>（园区门票年票已覆盖）",
          "hours": "<strong>这是本条目最重要的核实项，且两个官方来源冲突：</strong>Xanterra 开关门日期页写 <strong>2026/5/1 – 2026/10/12</strong>（当日 11:00 结束）；NPS Operating Dates 表（2026/9/3 更新）写客房末日 <strong>10/18</strong>、餐厅 / Bear Paw Deli / 礼品店末日 <strong>10/19</strong>。<strong>10/12 之前一定能进；10/13–10/19 属于赌运气；10/19 之后一定进不去。行程落在 10/13 之后请致电 307-344-7311 确认。</strong>关门后整栋建筑上锁，大堂不对外开放；此时 Old Faithful 区域唯一还开的旅馆是 <strong>Snow Lodge（客房到 10/24，Geyser Grill 到 10/31）</strong>，但那是 1999 年的新建筑，没有可拍的木构大堂",
          "parking": "Inn 有专用停车场（44.46063, −110.83169），以及 Old Faithful 区域的 West Parking（44.45794, −110.83073）等多个大型免费停车场，10 月完全不紧张",
          "walk": "停车即到。大堂到 Old Faithful 喷口步行约 <strong>250 米 / 4 分钟</strong>"
        },
        "notes": [
          "<strong>白平衡是这里的主要技术难点。</strong>光源是 Reamer 设计成烛台造型的白炽灯（约 2800–3000K）与山墙高窗进来的日光（约 5500K）混合。<strong>自动白平衡会取中间值，把原木拍成一片发灰的土黄</strong>。<strong>务必拍 RAW</strong>，然后二选一：设 <strong>3200–3800K</strong> 保住木头的暖调、接受窗口偏蓝（推荐，蓝窗反而增加层次）；或设 <strong>5200K 日光</strong>接受整体重琥珀色调（这实际上很符合这个空间的气质）。不要指望后期一键修好——混合色温只能局部调",
          "<strong>ISO 策略：手持时 ISO 1600–6400 是正常范围，不要为了低噪点把快门拖到 1/15。</strong>大堂比肉眼感觉暗得多，f/2.8 大光圈广角在这里价值极高",
          "<strong>三脚架政策：Yellowstone 的 Superintendent’s Compendium 把 tripod 与 monopod 明确归入「handheld equipment」，即在园内使用不需要拍摄许可。但 Inn 由 Xanterra 特许经营，酒店自身是否另有规定未能从官方渠道确认。</strong>实务建议：<strong>人少的清晨或晚间低调使用小三脚架，被劝阻就收起来</strong>；主力方案仍按手持 + 高 ISO + 包围曝光准备",
          "<strong>结露：从 −5°C 的室外直接进 20°C 的大堂，镜头会立刻起雾且机身内部也会凝水。</strong>进门前把相机装密封袋挤出空气，室内静置 30–60 分钟再拿出来。这一条在本区比在任何地方都重要，因为你一天里会反复进出",
          "<strong>这是一栋运营中的酒店</strong>，大堂是客人休息与办理入住的地方。不要挡住前台与楼梯通道、不要用闪光灯、不要拍摄客人",
          "2004–2012 年做过一轮大规模抗震与修复改造，<strong>大堂壁炉周围的下沉区是那次按 Reamer 原设计复原的</strong>——也就是说你现在看到的比 1990 年代更接近 1904 年的样子"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Old_Faithful_Inn_lobby_at_night_%2835725047566%29.jpg",
            "cap": "大堂与七层原木框架 · NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/5/50/Old_Faithful_Inn%2C_architectural_detail_in_lobby_%289411164540%29.jpg",
            "cap": "大堂木构细部 · NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Yellowstone_National_Park_%28WY%2C_USA%29%2C_Upper_Geyser_Basin%2C_Old_Faithful_Inn_--_2022_--_2642.jpg",
            "cap": "Old Faithful Inn 外立面 · Dietmar Rabich / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "ys-west-thumb-geyser-basin",
        "n": 10,
        "name": "西拇指间歇泉盆地",
        "en": "West Thumb Geyser Basin",
        "score": 4,
        "tldr": "热泉直接开在 Yellowstone Lake 岸边，是全园唯一的「热区 + 湖景」组合；日出机位在这里。",
        "tags": [
          {
            "t": "年票覆盖",
            "c": "free"
          },
          {
            "t": "0.6 英里平缓栈道",
            "c": "free"
          },
          {
            "t": "信息站已于 7/13 关闭",
            "c": "risk"
          },
          {
            "t": "湖畔风大体感低",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这是本区唯一「热泉直接开在大湖岸边」的地方，也是它与其他八个盆地的根本差别。</strong>其他盆地的背景是林线与荒地，这里的背景是 Yellowstone Lake 与对岸的 Absaroka 山脉——<strong>你终于有了地平线和远景层次</strong>",
          "<strong>West Thumb 本身是一个「套娃火山口」：它是约 17.4 万年前一次火山爆发形成的破火山口，塌陷后灌水成为 Yellowstone Lake 的一个延伸湾。</strong>NPS 的比较很有画面感——<strong>它的尺寸和俄勒冈的 Crater Lake 差不多，却只是 60 万年前那个巨型 Yellowstone Caldera 里面的一个小坑</strong>。热源据信只在地下 10,000 英尺（3,000 米）处，比别处浅得多",
          "<strong>Fishing Cone 是这里的招牌：一个直接立在湖水里的间歇泉锥。</strong>1870 年 Washburn 探险队第一次记录下当地人的做法——<strong>在冷湖里钓上一条鳟鱼，不摘钩，直接甩进沸腾的泉眼里煮熟</strong>。这个「Chowder Pot」的把戏后来成了全美闻名的游客项目，<strong>但因为不断有人被烫伤、脚也踩坏了泉锥，现已完全禁止</strong>。Fishing Cone 只有 1919 与 1939 两年有喷发记录，<strong>春夏湖水位高时整个锥体会被淹没——秋季来反而是能拍到它露出水面的季节</strong>",
          "<strong>Abyss Pool 深 53 英尺（16 米），是全园最深的热泉之一</strong>，颜色在绿松石蓝、翡翠绿与褐色之间变化。1883 年一位游客形容它是「a great, pure, sparkling sapphire, rippling with heat」。旁边的 Black Pool 深 35–40 英尺",
          "<strong>栈道是双环：外环 0.5 英里、内环 0.25 英里，NPS 给的总长是 0.6 英里（1 公里）环线，30–60 分钟</strong>，全程平坦，有无障碍车位。这是本区最省力的一条"
        ],
        "photo": "风光 <strong>4.5/5</strong>，人像 <strong>3/5</strong>，抽象 <strong>3.5/5</strong>。「蒸汽 + 湖面 + 远山」的三层结构在全园独一份，日出机位质量极高；扣分因为单体热泉的规模都不大，且离 Old Faithful 有 1 小时车程，在只有一两个清晨的行程里很难和 Upper Geyser Basin 抢时间。",
        "shots": [
          {
            "name": "湖畔栈道 · Fishing Cone 与日出（招牌机位）",
            "park": [
              44.41576,
              -110.57423
            ],
            "view": [
              44.41729,
              -110.57026
            ],
            "desc": "外环最东段，泉锥就在栈道外侧的湖水里。<strong>这是本区最好的日出机位之一：9/25 日出 07:12（方位 90° 正东）/ 10/22 日出 07:45（方位 105° 东南偏东），而湖面正在东南方向</strong>——<strong>太阳直接从湖对岸升起，你可以把泉锥、湖面反光、湖上蒸汽和远山一次收进画面</strong>。<strong>最佳时段是民用曙光到日出后 40 分钟</strong>（9/25 约 06:44–07:52 / 10/22 约 07:17–08:25）。<strong>24–70mm 为主，把泉锥放在三分点、湖面留出反光带</strong>；<strong>70–200mm 压缩</strong>让远山与蒸汽叠成层次。曙光段用三脚架 + 1–4 秒长曝把湖面拍平；日出后改手持追蒸汽的形态。<strong>湖畔风大，三脚架要挂重物</strong>。"
          },
          {
            "name": "Abyss Pool 与 Black Pool",
            "view": [
              44.41701,
              -110.57197
            ],
            "desc": "内环上，两池相邻。<strong>按「颜色规则」，这两池要留到太阳最高的时段</strong>（9 月底 11:00–15:00 / 10 月底 12:00–14:30），此时深水的蓝绿才出得来。<strong>35–85mm 从栈道俯视，用偏振镜压掉水面反光</strong>——深池对 CPL 的响应比浅池明显得多，这里值得带。Abyss 深 16 米，能拍出「看不到底」的通透感，是本区少数适合做「深渊」意象的池子。"
          },
          {
            "name": "栈道北段 · 蒸汽漫过湖面",
            "view": [
              44.41591,
              -110.57374
            ],
            "desc": "栈道起点（trailhead）附近往北看的一段。<strong>在气温 −5°C 以下的清晨，湖岸的热泉蒸汽会贴着水面横向漫开数十米</strong>，与湖面自身的蒸发雾混在一起，<strong>这是本区唯一能拍到「蒸汽在开阔水面上流动」的地方</strong>。<strong>16–35mm 低机位贴近水面</strong>，或 <strong>85–200mm</strong> 只取一层蒸汽做极简。曝光按蒸汽的高光给，欠 0.7–1 EV。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "<strong>年票覆盖</strong>",
          "hours": "<strong>盆地无门禁，全天可入</strong>（NPS 步道页标注 Season: Summer, Fall；Time of Day: Any Time）。<strong>West Thumb Information Station 已于 2026 年 7 月 13 日关闭</strong>，秋季不会再开。进出这里的两段公路（South Entrance–West Thumb、West Thumb–Old Faithful 的 Craig Pass 段）2026 年均开放至 <strong>10/31</strong>",
          "parking": "<strong>West Thumb Geyser Basin Parking（44.41576, −110.57423）</strong>，正规免费停车场，紧邻栈道起点，设有无障碍车位",
          "walk": "停车场到栈道起点 <strong>30 米</strong>；<strong>外环 0.5 英里、内环 0.25 英里，NPS 标注环线 0.6 英里 / 1 公里，30–60 分钟</strong>，全平"
        },
        "notes": [
          "<strong>湖畔清晨的体感温度远低于气温</strong>：这里海拔 7,733 英尺、正对开阔湖面，10 月清晨 −6°C 加上湖风相当于 −12°C 以下。<strong>防风外层、厚手套、帽子一件不能少</strong>",
          "<strong>最近的住宿是 Grant Village（客房末日 10/10）与 Lake Yellowstone Hotel（客房末日 10/10）。10 月 11 日之后，想在这里拍日出就只能从 Old Faithful 出发——单程约 1 小时车程 / 39 公里，意味着 10 月底要 06:15 前出发，且要摸黑翻 Craig Pass（海拔 8,262 英尺，最容易结冰的一段）。</strong>这是本条目最大的执行障碍，务必提前评估",
          "<strong>Compendium 规定：禁止在任何热区 25 码以内靠岸或下水，以及禁止在 Little Thumb Creek 到 West Thumb 热区南端之间的湖岸靠岸</strong>。不要为了低机位走到湖滩上",
          "这一带没有加油站（最近在 Grant Village，便利店开到 10/13，<strong>刷卡自助加油全年 24 小时可用</strong>），也基本没有手机信号",
          "Grant Visitor Center 最后营业日 10/3；West Thumb 停车场有厕所但秋季可能关闭，<strong>出发前在 Old Faithful 或 Grant Village 解决</strong>",
          "秋季常有野牛与麋鹿在栈道附近活动，湖畔视野开阔更容易提前发现；<strong>NPS 规定与野牛 / 麋鹿保持 25 码、与熊 / 狼保持 100 码</strong>"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/West_Thumb_Geyser_Basin_sunrise_%2836920812466%29.jpg",
            "cap": "West Thumb 湖畔日出 · NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Fishing_Cone_at_West_Thumb_Geyser_Basin_on_Yellowstone_Lake_%28e04eb640-206d-43bc-baf7-d40348849121%29.jpg",
            "cap": "湖水中的 Fishing Cone · Neal Herbert / NPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/2d/West_Thumb_Geyser_Basin_%2848350384107%29.jpg",
            "cap": "West Thumb 盆地与 Yellowstone Lake · NPS / Public domain"
          }
        ]
      }
    ]
  },
  {
    "id": "grand-teton",
    "name": "Grand Teton 与 Jackson",
    "navName": "Grand Teton",
    "color": "#4bd18a",
    "lead": "这个子地区只有一条主线逻辑：<strong>Teton Range 南北走向、整体立在河谷的西侧</strong>，所以山体在日出时是正面受光、在日落时是逆光。本区十个点里有七个是<strong>纯日出题材</strong>，只有 Signal Mountain 一个真正意义上的日落点，Jackson 镇是唯一的夜间题材。接下来是两个必须先接受的现实。第一，<strong>秋色的峰值在 9 月 18 日至 10 月 2 日前后，10 月中旬之后 Oxbow Bend 和蛇河沿线的棉白杨基本已经落光</strong>——如果你的日期落在 10 月下旬，来这里就不再是「拍金色倒影」，而是「拍初雪与霜」，价值主张完全不同，请提前调整预期。第二，<strong>2026 年 Moose-Wilson Road 自 9 月 8 日起因二期改建全线封闭至 11 月 15 日</strong>，传统的驼鹿观察路线整条报废，替代方案只能是 Gros Ventre 一带。好消息是主干道没问题：<strong>Teton Park Road 开到 10 月 31 日、US-26/89/191 全年开放</strong>，而 10 月的游客量只有 7 月的零头，Mormon Row 日出不再是三十台三脚架抢位。真正会卡住你的是<strong>食宿与加油的关门日</strong>——Jackson Lake Lodge 10 月 4 日、Signal Mountain 10 月 11 日、Colter Bay 加油站 10 月 9 日，10 月中旬之后园内基本没有补给，一切要从 Jackson 出发。",
    "callouts": [
      {
        "type": "warn",
        "title": "2026 年园内道路封闭日期表——本区最重要的一张表",
        "html": "<p>全部核对自 <a href=\"https://www.nps.gov/grte/planyourvisit/roads.htm\">nps.gov/grte 官方 Park Roads 页</a>（最后更新 2026 年 9 月 2 日）与 <a href=\"https://www.nps.gov/grte/planyourvisit/road-construction.htm\">Road Construction 页</a>（最后更新 2026 年 9 月 4 日）。</p><ul><li><strong>US-26/89/191（外环 / North Park Road）：全年开放</strong>，从 Jackson 一路铲雪通到 Flagg Ranch。这是本区一切方案的兜底路线。但注意 <strong>Leeks Marina 至 Lizard Creek Campground 段仍在施工</strong>：白天 06:00–21:00 延误 15 分钟，<strong>夜间 21:00–06:00 延误最长 1 小时</strong>，且施工段附近的 turnout 全部关闭。夜里去 Yellowstone 或从北面赶 Oxbow Bend 日出的话，这一小时必须算进去。</li><li><strong>Teton Park Road（内环，Taggart Lake Trailhead ↔ Signal Mountain Lodge）：11 月 1 日 – 4 月 30 日封闭。</strong>官方原文「closed November 1 to April 30」，2026 年沿用。11 月 1 日之后到积雪前仍可步行与骑行，之后转为压雪的非机动通道。<strong>也就是说 10 月 31 日是最后一个能开车走 Jenny Lake 那一侧的日子。</strong></li><li><strong>Signal Mountain Summit Road：11 月 1 日封闭。</strong>需要注意的是 <strong>2026 年官方 Park Roads 页并没有单独列出这条路的日期</strong>，「11 月 1 日」来自 NPS 历年新闻稿口径（「Teton Park, Moose-Wilson, and Signal Mountain Summit roads are closed to public motor vehicle use beginning November 1」）与 Jackson Hole 官方旅游局页面。它海拔高、路窄多弯，<strong>一场早雪就可能提前关</strong>，出发当天必须查实时路况图。</li><li><strong>Moose-Wilson Road（Laurance S. Rockefeller Preserve ↔ Moose）：2026 年 9 月 8 日起全线封闭至 11 月 15 日，车辆与自行车都不行。</strong>这是 Moose-Wilson Road Phase II 改建（2026 年 5 月 – 2027 年），官方 2026 年时间表原文：「May 1 – June 19: Closure / June 20 – September 7: Delay of 45 minutes or longer / <strong>September 8 – November 15: Closure</strong>」。<strong>你的整个窗口都在封闭期内。</strong>紧接着 11 月 1 日又叠加常规冬季封闭（至次年 5 月中）。</li><li><strong>Death Canyon Road 与 Death Canyon Trailhead：2026 年 5 月 – 2027 年 6 月全时段封闭</strong>，行人也不行。Phelps Lake 只能从 Granite Canyon 或 LSR Preserve 走，停车位极少。</li><li><strong>Teton Park Road / Moose 入口环岛工程：5 月 1 日 – 11 月 15 日，延误 20 分钟</strong>（不含入口站排队）。<strong>算日出机位时这 20 分钟必须扣掉</strong>——从 Jackson 走内环去 Jenny Lake 拍日出会撞上它。<strong>Menor’s Ferry Road 工作日全天封闭</strong>。</li><li><strong>Schwabacher Landing Road：NPS 口径「typically closed mid-October to mid-May」</strong>，是条约 1 英里的碎石支路，约 20 个车位。9 月下旬可靠，<strong>10 月下旬有实质概率已经关了</strong>。</li><li><strong>Antelope Flats Road / Mormon Row Road、Deadmans Bar、Pilgrim Creek、Two Ocean：官方归类为「closed seasonally based on conditions」，无固定日期</strong>，惯例也是 11 月 1 日前后。</li><li><strong>Grassy Lake Road（Rockefeller Parkway，Flagg Ranch 往西）：按条件关闭、冬季不铲雪</strong>，没有公布日期。它是未铺装路，10 月一场雨雪就会烂掉，除非你有高底盘车否则不必列入计划。</li><li><strong>Jenny Lake Scenic Drive（单行观景环路）：5 月 1 日 – 10 月 31 日开放。</strong></li></ul><p>实时路况：<a href=\"https://go.nps.gov/tetonroads\">go.nps.gov/tetonroads</a> 的 Live Road Status Map，或电话 <strong>307-739-3682</strong>（园内路况专线）。州级路况 <a href=\"http://www.wyoroad.info\">wyoroad.info</a> 或手机拨 511。</p>"
      },
      {
        "type": "warn",
        "title": "秋色时间窗：峰值 9/18–10/2，10 月下旬大概率已经光秃",
        "html": "<p>这是本区最容易把整趟行程判死的一项。<strong>Grand Teton 谷底的 quaking aspen 与 narrowleaf cottonwood 变色窗口极短</strong>，而 Oxbow Bend、Schwabacher Landing、蛇河沿线的全部价值都建立在这段金色上。</p><p>物候数据（fallphotoguide.com 对 Oxbow Bend 的历史模型）：<strong>初变色 8/27–9/5 · 接近峰值 9/5–9/13 · 峰值 9/13–9/21 · 过峰 9/21–10/1 · <u>10 月 1 日 – 10 月 15 日为「bare」（落光）</u></strong>，典型峰值日 9 月 17 日。同源数据给 Snake River Overlook 峰值 9 月 16 日、Schwabacher Landing 峰值 9 月 18 日。<strong>2026 年实测（9 月 5 日）：Oxbow Bend 处于「初变色 10–25%」，模型预计还有约 13 天到峰值，即 9 月 18 日前后</strong>，与历史均值基本吻合、略偏晚。</p><p><strong>结论，说白话：</strong></p><ul><li><strong>9 月 20 日 – 9 月 30 日：这是你要的那一周。</strong>金色棉白杨 + 无风水面 + 全部设施还开着 + 人比夏天少。这段时间来，Oxbow Bend 值 5 分。</li><li><strong>10 月 1 日 – 10 月 10 日：过峰但还有残色</strong>，山上开始有初雪，「金 + 白」的组合其实很好看。设施陆续关门。</li><li><strong>10 月 15 日之后：棉白杨基本落光，Oxbow Bend 前景是灰褐色的枝干和枯柳。</strong>这时候 Oxbow Bend 仍然能拍——Mount Moran 加倒影这个构图本身不依赖树叶——但它已经不是「全园最好的一张照片」了，真正的题材变成霜、雾凇、初雪和野生动物。<strong>如果你能选日期，别选 10 月下旬来拍秋色；如果日期已定在 10 月下旬，请把预期从「秋色」改成「初冬」，把重心从 Oxbow Bend 移到 Mormon Row 的霜和 Gros Ventre 的驼鹿。</strong></li></ul><p><strong>未能核实：</strong>没有任何机构发布 2026 年 Grand Teton 秋色的官方预报。上述判断来自历史物候模型 + 2026 年 9 月初的实测进度，一次早霜或一场大风就能把峰值提前或直接结束。出发前一周请看 NPS 的 <a href=\"https://www.nps.gov/grte/planyourvisit/conditions.htm\">Alerts &amp; Current Conditions</a> 与园区网络摄像头。</p>"
      },
      {
        "type": "warn",
        "title": "食宿、加油、访客中心 2026 年关门日——10/4 与 10/11 是两个断崖",
        "html": "<p>全部来自 <a href=\"https://www.nps.gov/grte/planyourvisit/hours.htm\">nps.gov/grte 官方 Operating Hours &amp; Seasons 页</a>的 2026 年表格。这直接决定你能不能在 Oxbow Bend 附近过夜去拍日出。</p><ul><li><strong>10 月 3 日：</strong>Jackson Lake Lodge 的 Blue Heron Lounge、Corrals。</li><li><strong>10 月 4 日（第一个断崖）：<u>Jackson Lake Lodge 全部关闭</u></strong>（含 Mural Room、Pioneer Grill、商店、咖啡车）、<strong>Jenny Lake Lodge 与餐厅</strong>、<strong>Jenny Lake General Store</strong>、Headwaters Lodge（Flagg Ranch）、Jackson Hole Aerial Tram。→ <strong>10 月 5 日起，Oxbow Bend 半小时车程内没有任何住宿。</strong></li><li><strong>10 月 9 日：Colter Bay 便利店与加油站</strong>（此前 24 小时自助）。</li><li><strong>10 月 10 日：</strong>Gros Ventre Campground、Colter Bay RV Park 与洗衣淋浴、Peaks Restaurant、Needles Gift Store、Deadmans Bar。</li><li><strong>10 月 11 日（第二个断崖）：<u>Signal Mountain Lodge 全部关闭</u></strong>——含 Trapper Grill、Timbers、营地、淋浴，以及 <strong>Signal Mountain General Store 与加油站</strong>。→ <strong>10 月 12 日起，园内西侧完全没有补给。</strong></li><li><strong>10 月 12 日：Jenny Lake Visitor Center。</strong></li><li><strong>10 月 18 日：Headwaters（Flagg Ranch）便利店与加油站——这是园内最后一个加油点。</strong></li><li><strong>10 月 31 日：Craig Thomas Discovery and Visitor Center（Moose）、Menor’s Ferry Historic District、String Lake 独木舟下水点。</strong>Craig Thomas 是本区营业最久的访客中心，10 月下旬唯一能拿纸质地图、问路况、买 pass 的地方。</li><li>已经关掉的：Colter Bay Visitor Center（9/30）、Jenny Lake Campground 与 Colter Bay 各设施（9/27）、Signal Mountain Marina 与 Leeks Marina（9/20）、Laurance S. Rockefeller Preserve Center（9/20）。</li></ul><p><strong>加油的硬结论：10 月 18 日之后，从 Jackson 到 Yellowstone 之间没有任何加油站。</strong>Jackson 镇是唯一全年可靠的补给点，离开 Jackson 前把油加满，来回 Oxbow Bend 一趟约 110 英里。</p>"
      },
      {
        "type": "info",
        "title": "本区的几何基本盘：山在西边，所以几乎全是日出题材",
        "html": "<p><strong>Teton Range 南北走向，整体位于 Jackson Hole 河谷的西侧，山脚没有前山缓冲，直接从平坦谷底拔起约 7,000 英尺。</strong>这个几何决定了一切：<strong>太阳从东边的 Gros Ventre 山脉后面升起时，山体东壁被正面照亮；太阳落到 Teton 山脊背后时，你看到的是逆光剪影。</strong></p><p>实算日照数据（America/Denver 时区，NOAA 太阳位置算法，已用 Oxbow Bend 9 月 17 日的第三方数据交叉校验一致）：</p><ul><li><strong>9 月 25 日：</strong>民用晨光 06:44 · <strong>日出 07:13（方位 91°，正东）</strong> · 日落 19:15（方位 269°，正西） · 民用暮光结束 19:43</li><li><strong>10 月 22 日：</strong>民用晨光 07:16 · <strong>日出 07:46（方位 105°，东偏南 15°）</strong> · 日落 18:28（方位 255°） · 民用暮光结束 18:57</li><li><strong>10 月 31 日（夏令时最后一天）：</strong>日出 07:57 · 日落 18:14</li><li><strong>11 月 1 日 02:00 夏令时结束</strong>，钟表拨回一小时：日出 06:58 · 日落 17:13。<strong>这一天正好也是 Teton Park Road 与 Signal Mountain Summit Road 的封闭日</strong>——如果你的行程压到月底，这两件事会在同一个早上撞在一起。「9 月下旬至 10 月下旬」这个窗口本身不跨夏令时切换。</li></ul><p><strong>各机位到主峰的实算方位与仰角</strong>（用于判断哪个点什么时候会进山影，推算，海拔取地形近似值）：</p><ul><li>Oxbow Bend → Mount Moran：方位 <strong>259°</strong>、18.7 km、仰角 5.5°。9/25 日落方位 269°，<strong>太阳几乎正好落进 Mount Moran 背后，直射光比日历日落早约 30 分钟结束</strong>。</li><li>Snake River Overlook → Grand Teton：方位 <strong>265°</strong>、14.4 km、仰角 8.3°，<strong>直射光提前约 45 分钟结束</strong>。</li><li>Mormon Row → Grand Teton：方位 <strong>309°</strong>（西北），Mount Moran 方位 335°。日出方位 91–105° 恰好从谷仓正面照过去，山也是顺光。<strong>教科书级的日出点。</strong></li><li>Schwabacher Landing → Grand Teton：方位 287°、11.1 km、<strong>仰角 11.2°，直射光提前约 60 分钟结束</strong>。</li><li>Taggart Lake → Grand Teton：方位 317°、仅 5.6 km、<strong>仰角 20.8°</strong>——山太近太高，<strong>湖面在日落前 1.5–2 小时就进山影</strong>。</li></ul><p><strong>反过来，日出侧也有遮挡：</strong>东边的 Gros Ventre 山脊会把谷底真正见光的时间比日历日出推后约 10–20 分钟（推算）。但<strong>山顶不受影响，Mount Moran 峰顶在日历日出时刻就已经开始转红</strong>。「峰顶已亮、水面还暗」的那 15 分钟，正是 Oxbow Bend 与 Mormon Row 要抓的那一张。请按<strong>日历日出前 45 分钟到位</strong>安排。</p>"
      },
      {
        "type": "tip",
        "title": "熊、低温、门票、信号：出门前的五件事",
        "html": "<ul><li><strong>熊：9 月下旬到 10 月是 hyperphagia（增食期），全年冲突最高的时段。</strong>NPS 现行公告原文要求「travel in groups of three or more, make noise, and carry bear spray」，<strong>法定距离：熊与狼 100 码（约 91 米），其他动物 25 码</strong>，车内车外一视同仁。熊喷雾必须是 <strong>EPA 注册、标注「for deterring attacks by bears」、有效成分 1–2% capsaicinoids、喷射时长 ≥6 秒、射程 ≥25 英尺</strong>的产品，普通防身喷雾无效。NPS 的使用口径：<strong>只在熊冲锋时用，拔掉保险，向熊前腿方向略微下压，在 15–30 英尺距离连喷 1–2 秒</strong>形成雾墙。一般遭遇（熊没冲过来）时<strong>不要喷</strong>，慢慢后退。<strong>2026 年是热干夏季、浆果歉收年</strong>——参考量级：2024 年（歉收年）Jackson 辖区加园区记录到 164 起黑熊冲突与 22 起灰熊冲突，2025 年（丰收年）只有 31 起与 4 起。<strong>今年请当成歉收年对待。</strong>喷雾不能带上飞机，在 Jackson 的户外店买或租。</li><li><strong>低温与器材：</strong>NOAA 1991–2020 常年值（Moose 1 NNE 站，海拔 6,466 英尺）——<strong>9 月均高 68°F/20°C、均低 35°F/1.5°C；10 月均高 53°F/11.5°C、均低 25°F/-4°C</strong>。Jackson 逐日值：10 月 22 日均高 53°F、均低 23°F（-5°C），该站 10 月 26 日的历史极低是 <strong>-9°F（-23°C）</strong>。Moose 一年有约 234 天最低气温在冰点以下。→ <strong>锂电池在 -5°C 下容量掉三到四成，日出机位请备三块以上并贴身放在内层口袋</strong>；<strong>拍完从户外进车内或进屋前，先把机身镜头装进密封袋再进温暖环境</strong>，否则镜片和传感器腔内会结露，擦不掉且要等一小时。三脚架碳纤维管在 -5°C 下扳扣会变涩，戴薄手套操作。</li><li><strong>霜是资产不是麻烦。</strong>晴朗无风的夜里，Mormon Row 与 Antelope Flats 的 sagebrush 会挂一层白霜，日出侧光下整片鼠尾草滩会发亮——<strong>这是这个季节 Mormon Row 相对夏天唯一的、也是决定性的加分项</strong>。要拿到它，需要前一夜晴朗、无风、最低温低于 -2°C，10 月满足条件的早晨很多。</li><li><strong>门票：你的 America the Beautiful 年票直接覆盖，不需要另外买任何东西。</strong>常规票价为私家车 <strong>$35 / 7 天</strong>，园区年票 $70。<strong>另一件重要的事：非美国居民 16 岁以上要额外付 $100/人的 nonresident fee，但官方明确写着「unless admitted with an Annual or America the Beautiful Pass」——持年票即免。</strong>入园验票时需要出示<strong>带照片的证件</strong>，年票是记名的。<strong>Grand Teton 全园不收现金</strong>，只刷卡。本区不需要任何 timed entry 或车辆预约。</li><li><strong>手机信号：全园只有两座基站。</strong>可用区域基本限于 Jackson 谷地南段、Moose、Jenny Lake 一带、Colter Bay / Jackson Lake Lodge 周边与 Flagg Ranch；运营商里 <strong>Verizon 在 Jackson Lake Lodge 与 Colter Bay 附近最可靠，AT&amp;T 与 T-Mobile 大段无服务</strong>。<strong>Oxbow Bend、Signal Mountain 顶、Gros Ventre 上游基本没有信号。</strong>离线地图与离线的日出时刻表必备，别指望现场查路况。</li><li><strong>Elk reduction（园内减鹿计划）：本次窗口内不受影响。</strong>见下方 Gros Ventre 条目的详细说明。</li></ul>"
      }
    ],
    "spots": [
      {
        "id": "jackson-lake-lodge-dam",
        "n": 1,
        "name": "Jackson Lake Lodge 与 Jackson Lake Dam",
        "en": "Jackson Lake Lodge · Jackson Lake Dam",
        "score": 4,
        "tldr": "二层大堂 60 英尺落地窗把 Mount Moran 框成一幅画；但 10 月 4 日整栋关门，之后只剩水坝。",
        "tags": [
          {
            "t": "国家公园门票（年票覆盖）",
            "c": "paid"
          },
          {
            "t": "酒店 10/4 关闭",
            "c": "risk"
          },
          {
            "t": "大堂免费进入",
            "c": "free"
          },
          {
            "t": "室内禁三脚架（推定）",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Jackson Lake Lodge 建成于 1955 年，由 Gilbert Stanley Underwood（曾任美国联邦政府总建筑师）为 John D. Rockefeller Jr. 的 Grand Teton Lodge and Transportation Company 设计，是 Mission 66 时期的代表作，2003 年列为 National Historic Landmark。</strong>它刻意不建在景观核心里，而是退到一道天然台地边缘——<strong>整栋楼的存在理由就是那个视野</strong>。",
          "<strong>二层「Upper Lobby」的落地窗高 36 英尺、宽 60 英尺</strong>，朝西正对 <strong>Willow Flats 湿地 → Jackson Lake → Jackson Lake Dam → Teton 山脊</strong>，<strong>Mount Moran 方位 254°、距 16.6 公里</strong>，正好落在窗框的中偏左。这是全美最著名的「用建筑框住风景」的室内空间之一，<strong>进楼免费、不用住店</strong>。",
          "<strong>楼后有露台，露台再往北是 Lunch Tree Hill。</strong>1926 年 Horace Albright 带 Rockefeller 走到这个小丘上看风景，Rockefeller 当场被说服、后来买下大量土地捐给联邦——<strong>Grand Teton 国家公园能扩到今天的范围，起点就是这个小丘上的一顿午餐</strong>，Rockefeller 自己给它取的名。丘顶有纪念铭牌，铺装步道可达。",
          "<strong>Jackson Lake Dam 是垦务局（Bureau of Reclamation）的灌溉工程，不是发电站。</strong>1906–07 年的原木笼坝 1910 年溃决，1911–1916 年重建为混凝土加土石坝，<strong>把天然的 Jackson Lake 水位抬高了约 39 英尺，蓄水 847,000 英亩英尺</strong>——这些水属于 Minidoka Project，供给 100 多英里外 Idaho 的农田。<strong>抬高水位淹死了岸边整片森林，大萧条时期由 CCC 的年轻人清理并烧掉。1980 年代整个水库被放空、坝体加固到可抗 M7.5 地震。</strong>",
          "<strong>一个对拍摄很实际的后果：因为它是灌溉水库，Jackson Lake 在夏末秋初会被大量放水。</strong><strong>9 月下旬到 10 月，湖面明显下降，岸边会露出大片泥滩、砾石与当年被淹死的树桩。</strong>这既是减分（湖岸线难看、倒影带上泥滩）也是加分（枯树桩是极好的前景元素），取决于你怎么用。"
        ],
        "photo": "建筑 <strong>4.5/5</strong>，风光 <strong>4/5</strong>，人像 <strong>3.5/5</strong>。<strong>「60 英尺落地窗 + 雪山」是本区唯一的高质量室内建筑题材</strong>，也是全区唯一的雨雪天备案。扣分：<strong>窗户朝西，日落时是正对太阳，几乎必然过曝或严重眩光；而且 10 月 4 日之后整栋关门。</strong>水坝一带 4 分给的是水位低时的枯树桩前景与开阔水面。",
        "shots": [
          {
            "name": "Upper Lobby 落地窗（室内，需在 10/4 前）",
            "park": [
              43.87727,
              -110.57743
            ],
            "view": [
              43.87727,
              -110.57743
            ],
            "desc": "<strong>从主停车场进楼是 Lower Lobby，上楼梯到二层就是那个 60 × 36 英尺的窗。</strong><strong>最佳时段是清晨 07:00–09:00</strong>：Mount Moran 正面受光、室内还在阴影里，而<strong>傍晚窗户正对落日，逆光加玻璃眩光，基本拍不了</strong>——这一点和大量旅游文章的说法相反。次佳是<strong>日落后的蓝调（约 19:20–19:40 / 10 月约 18:35–18:55）</strong>：室内灯亮起、窗外还有余晖，室内外亮度差最小，这一版最好拍。<strong>镜头：16–35mm 拍「室内空间 + 整扇窗」的建筑关系，24–70mm 拍窗景本身。</strong><strong>玻璃反光是主要敌人</strong>：把镜头贴近玻璃、用手或衣物挡住侧面杂光，或直接用偏振镜。<strong>室内三脚架政策未能从官方渠道确认</strong>——这是私营特许经营的酒店大堂，实务上高峰时段会被劝阻，请按手持准备（f/2.8、ISO 1600–6400）。"
          },
          {
            "name": "后露台与 Lunch Tree Hill（室外，全年可达）",
            "park": [
              43.87727,
              -110.57743
            ],
            "view": [
              43.8805,
              -110.57854
            ],
            "desc": "<strong>Upper Lobby 后门出去是大露台，露台向北有一条铺装步道上 Lunch Tree Hill，步行 5–8 分钟、爬升很小。</strong><strong>丘顶视野和窗里一样但没有玻璃，而且人少得多。</strong>最佳时段<strong>日出后 30–90 分钟</strong>（Moran 正面受光、Willow Flats 湿地起雾）。<strong>Willow Flats 是驼鹿与麋鹿的核心栖息地，清晨常能在湿地里看到它们</strong>——<strong>400mm 以上配三脚架，距离足够安全</strong>。<strong>24–70mm 拍湿地 + 湖 + 山的三层结构，70–200mm 抽 Moran。</strong>注意 Willow Flats 每年 5 月 15 日 – 7 月 15 日禁止进入（护幼），秋季不在封闭期，但仍不要下到湿地里。<strong>酒店 10 月 4 日关闭后，主楼进不去，但停车场与 Lunch Tree Hill 步道通常仍可从路边接近</strong>（未能从官方渠道确认关门后的具体管制范围，请以现场标识为准）。"
          },
          {
            "name": "Jackson Lake Dam 观景点与坝下蛇河",
            "park": [
              43.85849,
              -110.58637
            ],
            "view": [
              43.85727,
              -110.58939
            ],
            "desc": "<strong>Teton Park Road 从坝顶横穿而过，坝的两端都有停车与观景设施（含解说牌、洗手间、无障碍通道）。</strong><strong>最佳时段：日出后 30 分钟内。</strong>坝面向西看 Jackson Lake 与 Mount Moran（方位 261°、距 15.2 公里），<strong>清晨湖面无风时的倒影质量接近 Oxbow Bend，而且视野更开阔</strong>。<strong>秋季水位下降露出的枯树桩与砾石滩是极好的前景</strong>，用 16–35mm 贴低机位把树桩放在近处。<strong>坝下游的 Snake River Launch 一带能拍到河水从坝下奔出的段落</strong>，这里也是本区观察白头海雕与钓鱼者的固定点。<strong>70–200mm 抽坝体的混凝土结构线条 + 背后山脊</strong>，是一个有工业感的反差构图。<strong>这一段属于 Teton Park Road，11 月 1 日随之封闭。</strong>"
          }
        ],
        "access": {
          "book": "大堂参观不需预约。住宿与 Mural Room 餐厅需预订（Grand Teton Lodge Company），但 2026 年 10 月 4 日后停业。",
          "ticket": "园区门票 <strong>$35 / 车 / 7 天</strong>，<strong>年票覆盖</strong>。<strong>进入酒店大堂与露台完全免费，不需住店。</strong>",
          "hours": "<strong>Jackson Lake Lodge 2026 年 5 月 15 日 – 10 月 4 日营业</strong>（Mural Room、Pioneer Grill、商店、咖啡车同为 10 月 4 日；Blue Heron Lounge 与马厩 10 月 3 日）。<strong>10 月 5 日起整栋关闭，室内机位彻底不可用。</strong><strong>Jackson Lake Dam 一带全天开放，但随 Teton Park Road 于 11 月 1 日封闭</strong>（从北面经 Jackson Lake Junction 走 US-89 仍可全年通行到 Oxbow Bend 一侧）。",
          "parking": "酒店有大型免费停车场（松树间分区）；水坝两端各有免费停车与洗手间。均不收费、无需许可。",
          "walk": "停车场到 Upper Lobby <strong>2–3 分钟</strong>；Upper Lobby 到 Lunch Tree Hill 顶 <strong>5–8 分钟 / 铺装步道</strong>；水坝停车到观景点 <strong>1–3 分钟</strong>。"
        },
        "notes": [
          "<strong>2026 年 10 月 4 日是最后一天。</strong>如果你的日期在 10 月 5 日之后，这个条目就只剩水坝那一半，请据此调整评分预期。",
          "<strong>落地窗朝西，傍晚是逆光</strong>——最佳室内时段是清晨与日落后的蓝调，不是日落本身。",
          "<strong>室内三脚架政策未能从官方渠道确认</strong>，按手持准备。玻璃反光用偏振镜或贴近玻璃解决。",
          "<strong>Willow Flats 是驼鹿与麋鹿的核心栖息地</strong>，不要下到湿地里；观察请用长焦并守住 25 码。",
          "<strong>秋季 Jackson Lake 因灌溉放水而水位明显下降</strong>，岸线会露出泥滩与枯树桩。这既可能毁掉倒影，也可能成为最好的前景，到现场再定构图。",
          "<strong>Colter Bay 加油站 10 月 9 日关、Signal Mountain 加油站 10 月 11 日关</strong>，这一带 10 月中旬之后加不到油。",
          "这一带（Jackson Lake Lodge 与 Colter Bay 周边）是全园手机信号相对最好的地方，<strong>Verizon 可用，AT&T 与 T-Mobile 基本无服务</strong>。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Mount_Moran_from_the_lobby_of_the_Jackson_Lake_Lodge,_WY.jpg",
            "cap": "从二层大堂落地窗看 Mount Moran · Zeete / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Willow_Flats_area_and_Teton_Range_in_Grand_Teton_National_Park.jpg",
            "cap": "Willow Flats 湿地与 Teton 山脊 · Michael Gäbler / CC BY 3.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Jackson_Lake_and_Jackson_Lake_Dam,_Grand_Teton_National_Park_20110818_1.jpg",
            "cap": "Jackson Lake 与水坝 · DXR / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "oxbow-bend",
        "n": 2,
        "name": "Oxbow Bend 牛轭湾",
        "en": "Oxbow Bend",
        "score": 5,
        "tldr": "全园第一机位：Mount Moran 在死水面上的完整倒影，路边下车即到。但只在日出成立，且 10 月中旬后棉白杨落光。",
        "tags": [
          {
            "t": "国家公园门票（年票覆盖）",
            "c": "paid"
          },
          {
            "t": "停车即到",
            "c": "free"
          },
          {
            "t": "仅日出成立",
            "c": "risk"
          },
          {
            "t": "10 月中后无秋色",
            "c": "risk"
          },
          {
            "t": "无手机信号",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Mount Moran（12,610 英尺 / 3,844 米，2014 年激光雷达测值）自 Jackson Lake 水面拔起约 5,800 英尺</strong>，正面朝东，山体中央有一条几乎垂直贯穿的黑色 <strong>diabase 岩脉（the Black Dike）</strong>，东壁上还挂着形似平底锅的 <strong>Skillet Glacier</strong>——这两个特征让 Moran 成为全山脉最容易辨认、也最上镜的一座峰，1922 年 7 月 22 日才首登。",
          "所谓 oxbow 是<strong>蛇河在 Jackson Lake Dam 下游遗弃的一段旧河曲</strong>：主流改道后留下这段几乎不流动的死水。<strong>「几乎不流动」就是这里的全部技术前提</strong>——它是 Grand Teton 唯一一处能在无风清晨拿到完整山体镜面倒影、而且开车到岸边只要走十步的地方。",
          "<strong>10 月中旬前，对岸密集的 narrowleaf cottonwood 与 quaking aspen 会形成一条金色带，正好压在深色水面与灰白山体之间</strong>，这三层色阶是这张照片被称作「全园最好的一张」的真正原因。物候模型给出的典型峰值是 9 月 17 日，<strong>10 月 1 日以后进入落叶期</strong>。",
          "这里同时是全园密度最高的野生动物点之一：<strong>驼鹿在柳丛里觅食、白鹈鹕与号手天鹅停歇、白头海雕在对岸枯木顶上定点、水獭在浅滩活动</strong>。带 400mm 以上的话，日出后一小时是最好的动物时段——但请守住 100 码（熊、狼）与 25 码（其他）的法定距离。",
          "<strong>致命的时段限制：Mount Moran 从这里看方位角 259°，仰角 5.5°；而 9 月 25 日日落方位 269°。</strong>也就是说太阳几乎正好沉进 Moran 背后，<strong>直射光比日历日落早约 30 分钟就结束，之后山体是纯逆光剪影</strong>。这里的傍晚不是没得拍（暮色剪影与倒影仍有画面），但<strong>「Oxbow Bend 拍日落」是一个被大量旅游文章重复的错误建议</strong>。"
        ],
        "photo": "风光 <strong>5/5</strong>，野生动物 <strong>4.5/5</strong>，人像 <strong>3/5</strong>。正面受光的雪山 + 镜面死水 + 前景金树 + 零步行距离，构图元素齐备到近乎作弊，这是本区唯一无条件给 5 分的点。扣分只在时段极窄（一天里只有日出后 60–90 分钟真正成立）与人多。人像 3 分是因为岸边站位窄、背景是山不是人，只能拍环境肖像。",
        "shots": [
          {
            "name": "Oxbow Bend Turnout 主观景点（第一机位）",
            "park": [
              43.86626,
              -110.5475
            ],
            "view": [
              43.86608,
              -110.54758
            ],
            "desc": "<strong>US-89/191/287 路侧铺装 turnout，位于 Jackson Lake Junction 以东约 1 英里，停车到水边不足 30 米。</strong>最佳时段 <strong>9/25：06:30–08:15（日出 07:13）；10/22：07:05–08:45（日出 07:46）</strong>——请按<strong>日历日出前 45 分钟</strong>到位，因为东侧 Gros Ventre 山脊会把谷底见光推后 10–20 分钟（推算），而<strong>山顶在日出时刻就已经开始转红，「峰顶亮、水面暗」的那 15 分钟是这里最好的一张</strong>。<strong>镜头：24–70mm 是主力</strong>（35–50mm 能把 Moran 与倒影上下对称地放满画幅）；<strong>16–35mm 只在前景有具体物体（枯木、岸边草丛）时才用</strong>，否则广角会把山推得太小；<strong>70–200mm 抽 Moran 的黑色岩脉与 Skillet Glacier 细节，配上一小块倒影，是这里第二好的构图。</strong><strong>必须用偏振镜，但要反着用</strong>——正常消反光的角度会把倒影一起消掉，请转到反光最强的位置。曝光上山顶与水面的动态范围可达 4–5 档，建议包围三张后期合成，或用软渐变灰。"
          },
          {
            "name": "风与雾：为什么必须在 09:00 前收工",
            "view": [
              43.86608,
              -110.54758
            ],
            "desc": "<strong>倒影的成败只取决于风。</strong>山地河谷夜间是下坡的重力流，天亮前风速通常接近零，水面呈镜面；<strong>日出后太阳开始加热谷底，热力上坡风一般在日出后 1–2 小时启动</strong>（推算，无官方观测），一旦起风，哪怕只有 2–3 m/s，倒影就会碎成一片色块，长曝也救不回来。<strong>实操：把「有效拍摄窗口」定义为日出前 45 分钟到日出后 75 分钟，9 月下旬即 06:30–08:30，10 月下旬即 07:00–09:00。</strong>另外<strong>当夜间气温降到露点以下、水温高于气温时，水面会起一层薄雾</strong>，10 月的清晨出现概率明显高于 9 月——这是这里最好的加分条件，也是 10 月下旬来这里为数不多的补偿。雾天请把曝光加 +0.7 到 +1 档，否则会拍成灰。"
          },
          {
            "name": "Oxbow Bend Trail / 西侧岸线（换视角，避开人群）",
            "park": [
              43.86626,
              -110.5475
            ],
            "view": [
              43.87232,
              -110.55627
            ],
            "desc": "主观景台以西北的一段沿岸小径，把机位往西挪约 1 公里，<strong>Mount Moran 的方位角会略向北移，前景水面更开阔，且人少一个量级</strong>。代价是要走 10–15 分钟不平整的土路，天黑时需要头灯。这里更适合 <strong>70–200mm 做局部构图</strong>，也是找驼鹿的主要范围（柳丛密集）。<strong>单独走请务必带熊喷雾并出声</strong>，这一段视线被柳丛遮挡，是典型的近距离遭遇地形。"
          }
        ],
        "access": {
          "book": "不需预约。Grand Teton 全园无 timed entry、无车辆预约。",
          "ticket": "园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>，且免掉非美居民 $100/人的附加费。园区不收现金。",
          "hours": "<strong>24 小时开放，全年无休。</strong>turnout 无门禁、无关闭时间，可以在天黑前到位等日出。所在的 US-89/191/287 是全年开放的主干道。",
          "parking": "路侧铺装 turnout，<strong>免费</strong>，约 20–30 个车位。<strong>秋季日出前 45 分钟基本会满</strong>，10 月下旬压力小很多。严禁停在行车道上。",
          "walk": "<strong>不到 1 分钟 / 约 20–30 米</strong>，平坦。西侧岸线机位需另走 10–15 分钟土路。"
        },
        "notes": [
          "<strong>这里不是日落点。</strong>Mount Moran 方位 259°、仰角 5.5°，9 月下旬直射光在 18:45 前后就结束（日历日落 19:15）。想拍日落请去 Signal Mountain。",
          "<strong>10 月 5 日起，半小时车程内没有任何住宿</strong>（Jackson Lake Lodge 10/4 关、Signal Mountain Lodge 10/11 关）。之后要拍这里的日出，意味着从 Jackson 出发、单程约 55 英里 / 70 分钟，凌晨 5 点前出门。",
          "<strong>US-89 上 Leeks Marina 至 Lizard Creek 段的夜间施工延误最长 1 小时（21:00–06:00）</strong>。从北面（Yellowstone 方向）赶日出的话，这一小时必须预留。",
          "<strong>无手机信号。</strong>离线地图、离线日出时刻表、满电的备用电源必备。",
          "<strong>清晨路上有大量野生动物</strong>，摸黑开车限速 45 mph 以下，驼鹿在暗色路面上几乎看不见。",
          "偏振镜要「反用」——转到保留反光的角度，别把倒影消没了。",
          "<strong>不要为了机位下到泥岸</strong>：岸线是软泥且冬季结薄冰，同时这是驼鹿的核心觅食区，靠近违反 25 码规定。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Oxbow_Bend_-_Grand_Teton_National_Park_-_Wyoming.jpg",
            "cap": "Oxbow Bend 与 Mount Moran 倒影 · Watts / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Oxbow_Bend_Morning.jpg",
            "cap": "清晨死水面上的完整倒影 · Eric Kilby / CC BY-SA 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Oxbow_bend.jpg",
            "cap": "主观景点全景视角 · Chris Light / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "signal-mountain",
        "n": 3,
        "name": "Signal Mountain Summit Road 与 Jackson Point Overlook",
        "en": "Signal Mountain Summit Road · Jackson Point Overlook",
        "score": 4.5,
        "tldr": "本区唯一真正成立的日落点：从 800 英尺高处俯瞰蛇河曲流与整个河谷。11 月 1 日封路，早雪会提前关。",
        "tags": [
          {
            "t": "国家公园门票（年票覆盖）",
            "c": "paid"
          },
          {
            "t": "唯一的日落点",
            "c": "free"
          },
          {
            "t": "11/1 封路、早雪提前",
            "c": "risk"
          },
          {
            "t": "禁房车与拖挂",
            "c": "risk"
          },
          {
            "t": "顶上无信号",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>一条长约 5 英里、爬升约 800–1,000 英尺的窄而多弯的铺装山路，从 Teton Park Road 岔出（在 Signal Mountain Lodge 以南约 1 英里），单程车程约 20 分钟。</strong>顶上有两处观景台：<strong>朝西南的 Jackson Point Overlook</strong>（主机位）和<strong>朝东北的 Emma Matilda Overlook</strong>。",
          "<strong>这是本区唯一在傍晚成立的点，原因需要说清楚，因为它跟直觉相反。</strong>Teton 山脊在西侧，日落时依然是逆光——<strong>Mount Moran 从这里方位 266°、仰角 5.3°，太阳会在日历日落前约 30 分钟就沉进山脊背后（推算）</strong>。所以<strong>这里的日落主体不是山，是脚下的河谷</strong>：你比谷底高出约 800 英尺，<strong>蛇河在下面拧成一连串曲流，被西南方向的低角度暖光照亮，在深色的鼠尾草底子上读成一条条发亮的银带</strong>——这个俯视关系在谷底任何一个点都拿不到。",
          "<strong>三个具体的傍晚题材：</strong>（1）<strong>日落前 60–30 分钟</strong>：蛇河曲流受光最好，长焦压缩；（2）<strong>太阳沉入山脊的那一刻</strong>，从 Jackson Point Overlook 可以拍到<strong>太阳正好落在 Grand Teton 或 Mount Moran 侧后方的星芒</strong>（f/16 收光圈出芒）；（3）<strong>日落后 10–25 分钟的余晖</strong>——山体已在地球阴影里，但高处峰顶仍会挂上一层弱的粉红。<strong>诚实地说，第三项在这里比在正对山的机位弱，别把它当主目标。</strong>",
          "<strong>朝东的 Emma Matilda Overlook 在傍晚反而是顺光</strong>：Gros Ventre 山脉、Emma Matilda Lake 与 Two Ocean Lake 一带被落日正面照亮，<strong>而且日落后东侧天空会出现地球阴影带（Belt of Venus）</strong>——粉带压在深蓝的地影上，这一张在西侧机位是拍不到的。",
          "<strong>封闭日期：11 月 1 日。</strong>需要说明的是 <strong>2026 年 NPS 官方 Park Roads 页并未单独列出这条路的日期</strong>，「11 月 1 日」来自 NPS 历年新闻稿口径与 Jackson Hole 官方旅游页；<strong>由于它海拔高、路面窄，一场早雪就可能提前关，且顶上无手机信号</strong>，出发当天必须先在山下查实时路况图。"
        ],
        "photo": "风光 <strong>4.5/5</strong>，人像 <strong>3/5</strong>，野生动物 <strong>2.5/5</strong>。<strong>俯视视角 + 蛇河曲流 + 360 度视野 + 唯一可用的黄昏时段</strong>，在整个子地区里的战略价值极高。扣分：山体在傍晚始终是逆光或剪影，想要「被照亮的 Teton」这里给不了；观景台空间不大，人多时机位紧张。",
        "shots": [
          {
            "name": "Jackson Point Overlook（西南向，日落主机位）",
            "park": [
              43.84589,
              -110.57561
            ],
            "view": [
              43.84589,
              -110.57561
            ],
            "desc": "<strong>顶上停车场往西南的观景平台，停车到位不足 2 分钟。</strong>最佳时段 <strong>9/25：18:00–19:45（日落 19:15、暮光结束 19:43）；10/22：17:15–19:00（日落 18:28、暮光结束 18:57）</strong>。<strong>注意直射光在日历日落前约 30 分钟就被山脊挡掉</strong>（9/25 约 18:45、10/22 约 18:00），所以<strong>「黄金光」的真实窗口比日历时间早半小时，请提前到位。</strong><strong>镜头：70–200mm 是这里的主力</strong>，用来压缩蛇河曲流的层次、把远处的曲流段与近处的树林叠成图案；<strong>16–35mm 拍河谷 + 山脊的宽幅，24–70mm 过渡</strong>。<strong>拍太阳落进山脊的星芒用 f/16，注意保护取景器和眼睛。</strong><strong>暮光段（日落后 15–30 分钟）请上三脚架，1–4 秒曝光</strong>，此时河谷灯火极少，蓝调很干净。"
          },
          {
            "name": "Emma Matilda Overlook（东北向，地影与 Belt of Venus）",
            "view": [
              43.84893,
              -110.56717
            ],
            "desc": "顶上另一侧的观景点，<strong>朝东北看 Emma Matilda Lake、Two Ocean Lake 与 Gros Ventre / Absaroka 山脉。</strong><strong>傍晚这一侧是顺光</strong>，日落前 30 分钟远山被暖光正面照亮；<strong>日落后 10–20 分钟，东方地平线上会升起一条粉色的 Belt of Venus 压在深蓝的地球阴影上</strong>，这是本区最容易拍到、也最容易被忽略的一张。<strong>24–70mm 或 70–200mm，需要三脚架</strong>（此时亮度已经不足以手持）。也可以在这里拍日出——朝东是正面迎光，但整个山脉会被压成剪影，价值不如西侧。"
          },
          {
            "name": "上山路上的中段 turnout（备选，拍 Jackson Lake）",
            "desc": "<strong>Summit Road 中段有几处小 turnout，能看到 Jackson Lake 与 Mount Moran 的组合，角度比顶上更偏北。</strong>这几个 turnout 没有 OSM 实体节点，<strong>故省略 view 坐标，地图上不会有针脚</strong>；实际操作是上山时留意路右侧，看到视野打开就停。<strong>时段与顶上一致；这里更适合 70–200mm 抽 Jackson Lake 水面的反光带。</strong><strong>注意：路窄且无护栏，停车时必须完全驶出行车道</strong>，秋季下山时段车不多但速度快。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。",
          "hours": "<strong>白天开放，无门禁时间；季节性封闭日为 11 月 1 日</strong>（NPS 历年新闻稿口径，<strong>2026 年官方 Park Roads 页未单独列出该路日期</strong>，且<strong>可能因早雪提前关闭</strong>）。它依附于 Teton Park Road，后者同样 11 月 1 日封闭。",
          "parking": "<strong>顶上有小型免费停车场</strong>，约 20–30 位。<strong>官方禁止房车（RV）与拖挂车上山</strong>，路窄多弯。日落前 30 分钟秋季通常仍有位。",
          "walk": "<strong>1–2 分钟</strong>，停车场直连两处观景台，平坦短径。"
        },
        "notes": [
          "<strong>直射光比日历日落早约 30 分钟结束</strong>（Mount Moran 仰角 5.3°，推算）。把「日落时刻」当成「收工时刻」会错过整个黄金光。",
          "<strong>顶上无手机信号</strong>，且下山是 5 英里窄弯路。带头灯，暮光拍完之后下山全程摸黑。",
          "<strong>禁止房车与拖挂上山。</strong>",
          "<strong>10 月 11 日之后 Signal Mountain Lodge、餐厅、商店与加油站全部关闭</strong>，山脚下没有任何补给或洗手间。",
          "<strong>早雪会让这条路提前关闭</strong>，且高海拔路段结冰早于谷底。当天先查 <a href=\"https://go.nps.gov/tetonroads\">go.nps.gov/tetonroads</a> 或拨 307-739-3682。",
          "上山途中是黑熊常见区域，路边停车下车拍照前先四周看一眼。",
          "顶上风大且比谷底冷 3–5°C，暮光段站 40 分钟需要真正的防风层与手套。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Grand_Teton_National_Park_at_Signal_Mountain_Road.jpg",
            "cap": "Signal Mountain Road 上俯瞰河谷全景 · Wing-Chi Poon / CC BY-SA 2.5"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/27/Signal_Mountain_-_Grand_Teton_National_Park_-_Wyoming.jpg",
            "cap": "顶上观景台视角 · Dougtone / CC BY-SA 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Signal_Mountain_Lodge_GTNP1.jpg",
            "cap": "山脚下的 Signal Mountain Lodge · Acroterion / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "jenny-lake",
        "n": 4,
        "name": "Jenny Lake · String Lake · Hidden Falls 与 Inspiration Point",
        "en": "Jenny Lake · String Lake · Hidden Falls · Inspiration Point",
        "score": 4.5,
        "tldr": "渡船 9/30 停航，之后去 Hidden Falls 往返多走 4 英里；观景环路开到 10/31。",
        "tags": [
          {
            "t": "国家公园门票（年票覆盖）",
            "c": "paid"
          },
          {
            "t": "渡船 9/30 停航",
            "c": "risk"
          },
          {
            "t": "渡船 $20 往返",
            "c": "paid"
          },
          {
            "t": "10 月徒步单程加 2 英里",
            "c": "risk"
          },
          {
            "t": "熊活动区",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>Jenny Lake 是冰川刻出来的槽谷湖，紧贴 Teewinot Mountain 与 Cascade Canyon 出口</strong>，山离湖岸只有几公里，<strong>Grand Teton 从东岸看仰角高达 15.9°</strong>——这是全园「山最压人」的湖，也是全园最挤的地方之一。",
          "<strong>最关键的 2026 数据：Jenny Lake Boating 的渡船与游船 <u>9 月 30 日是本季最后一天</u>，包括全部服务。</strong>9 月 8 日起已改为 <strong>09:00–17:00</strong>（此前 07:00–19:00），每 10–15 分钟一班、不接受预订、到东岸码头现场买票。<strong>票价：成人往返 $20 / 单程 $15，62 岁以上往返 $18 / 单程 $15，儿童往返 $15 / 单程 $12。</strong>同期还有 10:00 与 12:00 两班 scenic cruise（成人 $30，建议预订，307-734-9227）。",
          "<strong>渡船停航后的实际后果要说清楚：</strong>渡船省掉的是<strong>单程 2 英里的环湖步行</strong>。<strong>10 月 1 日起，从东岸游客中心走到 Hidden Falls 变成单程约 2.5 英里、到 Inspiration Point 单程约 3 英里</strong>，往返 5–6 英里、爬升约 400–1,000 英尺，而 10 月的日照只有 10 小时出头。<strong>这不是「难」，是要多花 2–3 小时，且要在天黑前下山。</strong>",
          "<strong>Hidden Falls 落差约 100 英尺，藏在 Cascade Creek 的峡口里；Inspiration Point 再往上约 0.5 英里、爬升约 400 英尺，是一处岩台，能俯瞰整个 Jackson Hole 河谷与 Jenny Lake 全貌。</strong>瀑布本身在<strong>上午 09:00–11:00</strong>是柔和的漫射光（峡口深、直射光进不去），是最好的时段。",
          "<strong>String Lake 是本区被低估的一处。</strong>它极浅、几乎不流动，<strong>正对 Mount Moran（方位 325°、距 6.9 公里、仰角 14.4°）</strong>，清晨无风时倒影质量不输 Oxbow Bend，而且<strong>因为山近，Moran 在画面里的体量大得多</strong>。游客绝大多数在夏天来这里泡水，秋天几乎没人。<strong>Jenny Lake Scenic Drive 与 String Lake 一带的通行取决于 Teton Park Road，10 月 31 日之后全部封闭。</strong>"
        ],
        "photo": "风光 <strong>4.5/5</strong>，人像 <strong>4/5</strong>，野生动物 <strong>3/5</strong>。山近、湖静、可选机位多；扣分在于 <strong>Jenny Lake 东岸虽然在日出时是顺光，但岸线被密林封住、开阔机位极少，湖又窄，构图很受限</strong>，真正好用的是 String Lake（水更浅更静、角度更开）与地势更高的 Jenny Lake Overlook。西岸的 Hidden Falls 与 Inspiration Point 是本区少数适合上午拍的目标。人像 4 分：湖岸砾石滩、栈桥、林间步道都好用。",
        "shots": [
          {
            "name": "String Lake 南岸（本条目最佳风光机位）",
            "park": [
              43.78445,
              -110.72739
            ],
            "view": [
              43.78445,
              -110.72739
            ],
            "desc": "<strong>从 North Jenny Lake Junction 西转，沿路北行到第一个停车场即 String Lake Trailhead。</strong>最佳时段 <strong>日出前 30 分钟到日出后 60 分钟（9/25 约 06:45–08:15；10/22 约 07:15–08:45）</strong>，<strong>Mount Moran 方位 325°，日出方位 91–105°，是斜侧顺光，山体立体感比 Oxbow Bend 的正面光更好。</strong>湖极浅、水几乎不动，<strong>无风时能拿到接近完美的倒影，而且山只有 6.9 公里远，24mm 就能撑满画面</strong>。<strong>16–35mm 拍水面 + 山的对称构图，24–70mm 主力，70–200mm 抽 Moran 的黑色岩脉。</strong>偏振镜反用保留倒影。<strong>10 月下旬这里的车位几乎空着</strong>，是本条目最省心的一站。"
          },
          {
            "name": "Jenny Lake Overlook（Jenny Lake Scenic Drive 上）",
            "view": [
              43.76812,
              -110.71779
            ],
            "desc": "<strong>单行的 Jenny Lake Scenic Drive（全长约 3 英里，从 North Jenny Lake Junction 进入）路侧的观景点，5 月 1 日 – 10 月 31 日开放。</strong>视角比湖岸高，<strong>能同时收进 Jenny Lake 全湖面、Cascade Canyon 出口与 Teewinot / Grand Teton 的山脊线</strong>。最佳时段<strong>上午 08:00–10:00</strong>——太阳升高之后山体受光更均匀，日出瞬间这个角度反而太暗。<strong>24–70mm 与 70–200mm 都好用；这里是本区最适合接全景片的位置之一。</strong>注意这条路是单行道，错过出口要绕回 Teton Park Road 重新进。"
          },
          {
            "name": "Hidden Falls · Inspiration Point（西岸，需渡船或绕湖）",
            "park": [
              43.75148,
              -110.72233
            ],
            "view": [
              43.76632,
              -110.7512
            ],
            "desc": "<strong>9 月 30 日前：</strong>从 Jenny Lake Visitor Center 步行 100–150 码到东岸码头（<strong>坐标 43.75186, -110.72573</strong>），渡船 09:00–17:00、每 10–15 分钟一班、约 10 分钟到西岸码头（<strong>43.76728, -110.74405</strong>），再走 <strong>0.5 英里到 Hidden Falls、1 英里到 Inspiration Point（爬升约 400 英尺）</strong>。<strong>10 月 1 日起：</strong>渡船停航，必须沿 Jenny Lake Loop Trail 绕南岸走，<strong>单程 2.5–3 英里、往返 5–6 英里、3–4 小时</strong>。<strong>最佳时段：上午 09:00–11:00</strong>——峡口深，直射光进不来，瀑布是均匀的漫射光，<strong>而 Inspiration Point 朝东南俯瞰河谷，上午同样是顺光</strong>。<strong>镜头：瀑布用 24–70mm 加 ND，1/2–2 秒的慢门；Inspiration Point 用 16–35mm 拍河谷大场景、70–200mm 抽 Jenny Lake 的湖岸线条。</strong>三脚架在这一段步道上完全合法。<strong>10 月的下午 16:00 之后峡谷内已经很暗，请把返程时间倒推好。</strong>"
          }
        ],
        "access": {
          "book": "园区不需预约。<strong>渡船不接受预订</strong>（现场买票）；scenic cruise 建议预订，307-734-9227。",
          "ticket": "园区门票 <strong>$35 / 车 / 7 天</strong>，<strong>年票覆盖</strong>。<strong>渡船另收：成人往返 $20 / 单程 $15；62+ 往返 $18 / 单程 $15；2–12 岁往返 $15 / 单程 $12。Scenic cruise 成人 $30 / 老人 $27 / 儿童 $25。</strong>",
          "hours": "<strong>湖区与步道 24 小时开放。</strong><strong>Jenny Lake Boating 2026 年 9 月 30 日为本季最后一天</strong>，9/8–9/30 运营时间 09:00–17:00。<strong>Jenny Lake Visitor Center 10 月 12 日关闭；Jenny Lake General Store 与 Jenny Lake Lodge 10 月 4 日关闭；Jenny Lake Campground 已于 9 月 27 日关闭。</strong><strong>Jenny Lake Scenic Drive 5 月 1 日 – 10 月 31 日开放；整个区域随 Teton Park Road 于 11 月 1 日封闭。</strong>",
          "parking": "South Jenny Lake 与 String Lake 均为免费铺装／碎石停车场。夏季中午必满，<strong>10 月下旬基本随到随停</strong>。",
          "walk": "游客中心到东岸码头 <strong>100–150 码 / 2 分钟</strong>；西岸码头到 Hidden Falls <strong>0.5 英里</strong>、到 Inspiration Point <strong>1 英里 / 爬升 400 英尺</strong>；<strong>渡船停航后从东岸绕行单程 2.5–3 英里</strong>。String Lake 停车即到湖岸。"
        },
        "notes": [
          "<strong>渡船 2026 年 9 月 30 日停航，这是本条目最重要的一个日期。</strong>10 月来的话请直接按「往返 6 英里徒步」做计划，别到现场才发现。",
          "<strong>从 Jackson 走内环去 Jenny Lake 会撞上 Moose 入口环岛的 20 分钟延误（5/1–11/15）</strong>，赶日出必须多留半小时。",
          "<strong>Jenny Lake 东岸日出时是顺光，但岸线被密林封住、开阔机位极少</strong>——想在这一带拍日出，优先 String Lake 或 Jenny Lake Overlook。另外<strong>山近而高（西侧山脊仰角约 11–16°），湖面在日历日落前约 1 小时就失去直射光（推算），傍晚不成立</strong>。",
          "<strong>Cascade Canyon 一带是黑熊与灰熊的高频活动区</strong>，NPS 明确要求三人以上结队、持续出声、随身带熊喷雾。10 月是增食期，风险更高。",
          "<strong>Jenny Lake Ranger Station 已于 9 月 7 日关闭</strong>，10 月要拿路况或后山许可只能去 Moose 的 Craig Thomas 访客中心（开到 10 月 31 日）。",
          "<strong>Inspiration Point 上方的步道秋季可能有薄冰</strong>，尤其是背阴的岩阶段，微钉鞋套值得带。",
          "String Lake 独木舟下水点开放到 10 月 31 日（随 Teton Park Road 封闭而关），但 10 月水温接近冰点，不建议下水。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Aerial_image_of_Jenny_Lake_(view_from_the_east).jpg",
            "cap": "Jenny Lake 与 Cascade Canyon 出口 · Carsten Steger / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Jenny_Lake_from_Inspiration_Point_2024.jpg",
            "cap": "从 Inspiration Point 俯瞰 Jenny Lake 与河谷 · Larry D. Moore / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Grand_Teton_National_Park._Hidden_Falls._01.JPG",
            "cap": "Hidden Falls · Miguel Hermoso Cuesta / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "snake-river-overlook",
        "n": 5,
        "name": "Snake River Overlook 蛇河观景台",
        "en": "Snake River Overlook",
        "score": 3,
        "tldr": "Ansel Adams 1942 年那张的原址，但树长高了——他拍的那个前景已经不存在，河湾的 S 形现在被挡住大半。",
        "tags": [
          {
            "t": "国家公园门票（年票覆盖）",
            "c": "paid"
          },
          {
            "t": "停车场大、无需步行",
            "c": "free"
          },
          {
            "t": "经典构图已不可复制",
            "c": "risk"
          },
          {
            "t": "仅日出成立",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>1942 年 Ansel Adams 在这里拍下《The Tetons and the Snake River》</strong>，是他受内政部委托为国家公园做壁画项目时的作品，也是他最广为流传的一张——<strong>2020 年一幅壁画尺寸的原作在 Sotheby’s 以 98.8 万美元成交，创下他作品的最高纪录</strong>。这张照片后来被放进旅行者一号的金唱片。",
          "<strong>但你必须先接受这件事：Adams 拍的那个画面已经不存在了。</strong>八十多年里，观景台与河之间的松树和灌木长了上来，<strong>原作里那条从画面左下角蜿蜒进纵深的蛇河 S 形曲线，现在下半段被树冠完全挡住</strong>。这不是某个季节的问题，也不是站位问题——<strong>它是永久性的，除非公园去砍树，而公园不会</strong>。",
          "<strong>现在你实际能看到什么：</strong>台地上一片开阔的鼠尾草滩，中景是一条深色的针叶林带，林带上方<strong>能看到蛇河的一小段亮面（大致在画面中偏右），但看不到完整的 S</strong>，再往上是从 Buck Mountain 到 Mount Moran 的完整山脊。换句话说：<strong>它现在是一个「不错的宽幅山景 + 一小段河」的观景台，而不是一个可复制经典的机位。</strong>现场右侧有 NPS 的解说牌讲这段历史，也算一个题材。",
          "几何上它其实还不错：<strong>Grand Teton 方位 265°、距 14.4 公里、仰角 8.3°</strong>，日出时整排山脊正面受光，前景鼠尾草滩在低角度侧光下纹理很好。<strong>但仰角 8.3° 意味着直射光比日历日落早约 45 分钟结束</strong>，傍晚同样不成立。"
        ],
        "photo": "风光 <strong>3.5/5</strong>，人像 <strong>2.5/5</strong>，纪实 <strong>4/5</strong>。给 3 分不是因为难看，而是因为<strong>大多数人来这里是为了复刻 Adams，而这件事已经做不到了</strong>，落差本身会毁掉体验。把它当成「一个视野宽、停车方便、日出光很好的台地机位」，评价会公道很多。纪实 4 分是因为「摄影史地标 + 已被时间改变」这个主题本身就值得拍一张对照。",
        "shots": [
          {
            "name": "观景台右侧（Adams 原址一带）",
            "park": [
              43.7539,
              -110.62409
            ],
            "view": [
              43.7539,
              -110.62409
            ],
            "desc": "<strong>US-89/191 路侧的大型铺装停车场，容得下房车，下车即到栏杆。解说牌在观景区偏右侧，Adams 的机位就在那一带。</strong>最佳时段 <strong>9/25：06:45–07:50；10/22：07:20–08:20</strong>，即日出前后各半小时。<strong>镜头：这里唯一能救回来的构图是长焦。用 70–200mm（甚至 200–400mm）抽出中景那一小段亮起来的河面 + 上方山脊</strong>，压缩之后河与山的比例关系反而接近原作的观感，而<strong>广角只会忠实记录下那排挡住河的树</strong>。24–70mm 适合拍「前景鼠尾草滩 + 山脊」的横幅，把河当成一个次要元素。<strong>建议拍一张黑白转换的版本</strong>——原作是黑白，去掉颜色后树带与河面的明度关系会更清楚，也更容易和原作做对照。"
          },
          {
            "name": "南侧 Teton Point Overlook（备选，视野略不同）",
            "view": [
              43.71791,
              -110.66031
            ],
            "desc": "<strong>沿 US-191 往南约 3 英里的另一个铺装 turnout</strong>，同样是台地俯视，<strong>前景树的遮挡情况和 Snake River Overlook 不同，某些年份这里能看到更完整的一段河道</strong>。它离山更近（Grand Teton 距离约 12.5 公里），山体在画面里更大。同样是日出机位，时段与主机位一致。如果你为了 Adams 而来又不想失望，<strong>建议两个点连着看，选当年遮挡较轻的那个</strong>。这个 turnout 停车位比 Snake River Overlook 少，但秋季从不满。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。",
          "hours": "<strong>24 小时开放。</strong>位于全年开放的 US-26/89/191 上，冬季也能到。",
          "parking": "<strong>大型铺装停车场，免费</strong>，房车与拖挂可停。秋季几乎不会满。",
          "walk": "<strong>0–1 分钟</strong>，停车场直接连观景平台，无高差，轮椅可达。"
        },
        "notes": [
          "<strong>不要指望复刻 1942 年那张。</strong>树的生长是不可逆的，网上仍在流传的「Ansel Adams 机位」教程多数用的是几十年前的照片。",
          "<strong>唯一有效的技术对策是长焦压缩</strong>（70–200mm 起步），把可见的那段河面单独抽出来。",
          "<strong>这里不是日落点</strong>：Grand Teton 仰角 8.3°，直射光比日历日落早约 45 分钟结束。",
          "台地上风比河谷大，日出前体感温度会明显低于气温，防风外层必备。",
          "停车场大且靠主干道，是本区少数适合房车与行动不便者的机位。",
          "这一带属于 Elk Hunt Area 75 的范围边缘，但<strong>US-191 两侧各 1/4 英里全年禁止狩猎</strong>，且减鹿计划 2026 年的日期是 11 月 14 日至 12 月 6 日，不影响本次窗口。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/21/Adams_The_Tetons_and_the_Snake_River.jpg",
            "cap": "1942 年原作《The Tetons and the Snake River》 · Ansel Adams / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Grand_Teton_from_the_Snake_River_Overlook.jpg",
            "cap": "现今从观景台看出去的实况，前景树带已长起 · Frank Kovalchek / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Snake_River_Overlook.JPG",
            "cap": "观景台现场视角 · Fredlyfish4 / CC BY-SA 3.0"
          }
        ]
      },
      {
        "id": "schwabacher-landing",
        "n": 6,
        "name": "Schwabacher Landing 河岸下水点",
        "en": "Schwabacher Landing",
        "score": 4.5,
        "tldr": "海狸坝把河水拦成静水，能拍到整条 Teton 山脊的完整倒影。碎石支路 10 月中旬后可能已封，出发前必查。",
        "tags": [
          {
            "t": "国家公园门票（年票覆盖）",
            "c": "paid"
          },
          {
            "t": "碎石路 1 英里",
            "c": "risk"
          },
          {
            "t": "10 月中后可能封路",
            "c": "risk"
          },
          {
            "t": "仅约 20 车位",
            "c": "risk"
          }
        ],
        "highlights": [
          "这是<strong>全园唯一能在河面高度（而不是台地上）拍到 Teton 山脊完整倒影的公共点位</strong>。从 Moose Junction 沿 US-191 北行约 4 英里，向西拐进一条约 1 英里的碎石支路，一直下到蛇河的一条支汊边。",
          "<strong>倒影不是靠河，是靠海狸。</strong>河汊被一连串 beaver dam 拦成几段几乎不流动的水塘，正是这些静水塘把 Grand Teton、Middle Teton、Mount Owen、Teewinot 一整排山脊完整地翻到水里。<strong>海狸坝的位置每年都会变</strong>——某一年最好的那个水塘，第二年可能已经泄空，所以到现场要沿步道走一段找当年状态最好的一段。",
          "和 Oxbow Bend 相比，这里的<strong>山更近（Grand Teton 距离 11.1 公里，Oxbow 是 24.7 公里）、山体在画面里更大、山脊层次更完整</strong>，但代价是仰角高达 <strong>11.2°</strong>——<strong>直射光比日历日落早约 60 分钟结束（推算）</strong>，9 月下旬也就是 18:15 前后就没光了。这里比 Oxbow Bend 更彻底地只属于早晨。",
          "NPS 官方把这里列为可申请的婚礼场地，页面里给出了几项对拍摄有用的硬数据：<strong>约 20 个车位、有旱厕、地面平整、步道为土路、「早晨非常繁忙、中午中等、傍晚非常繁忙」</strong>，以及关键的一句——<strong>「Typically closed mid-October to mid-May」</strong>。"
        ],
        "photo": "风光 <strong>5/5</strong>，人像 <strong>3.5/5</strong>，野生动物 <strong>3.5/5</strong>。完整山脊 + 河面高度 + 静水倒影，构图密度高于 Oxbow Bend；扣分在于车位极少、路况季节性不稳、机位窄导致人挤人。人像 3.5 分：河岸有几段干净的砾石滩可以站人，但清晨低温加逆着人流，实操不轻松。",
        "shots": [
          {
            "name": "北端停车场 + 海狸塘倒影（主机位）",
            "park": [
              43.71151,
              -110.67059
            ],
            "view": [
              43.71151,
              -110.67059
            ],
            "desc": "碎石路尽头的北侧停车场，<strong>下车沿土路北行 3–10 分钟就是几处海狸塘</strong>。最佳时段 <strong>9/25：06:35–08:00；10/22：07:10–08:30</strong>，山顶转红比谷底见光早 10–20 分钟。<strong>Grand Teton 方位 287°，日出方位 91–105°——太阳在你正后方偏南，整排山脊是完美的正面受光。</strong><strong>镜头：24–70mm 主力，28–35mm 端最容易把整条山脊 + 完整倒影上下塞进一张。</strong><strong>16–35mm 用来带前景的枯枝与水草</strong>；70–200mm 抽 Grand Teton 与 Teewinot 的双峰关系。快门方面水面越静越好，无需长曝；<strong>ND 在这里没有用处，倒影要的是瞬时的锐度不是丝滑</strong>。偏振镜同样要转到保留反光的角度。"
          },
          {
            "name": "碎石支路入口（先在这里确认能不能进去）",
            "view": [
              43.70283,
              -110.67023
            ],
            "desc": "<strong>US-191 上的路口，距 Moose Junction 北约 4 英里。</strong>这条支路属于 NPS 归类的「secondary road, closed seasonally based on conditions」，<strong>官方口径是通常 10 月中旬到 5 月中旬关闭</strong>，但没有公布确切日期。<strong>路口有闸门；如果闸门锁着，就是真的进不去，不要试图步行 1 英里再走回来赶日出——来不及。</strong>路面是压实碎石，两驱轿车在干燥时没问题，<strong>雨后或初雪后会车辙泥泞</strong>。摸黑下坡开这一段，请提前把远光调好并慢行，路两侧无护栏。"
          }
        ],
        "access": {
          "book": "不需预约（举办仪式才需 NPS 许可，每天仅发一张、全年上限 60 张）。",
          "ticket": "园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。",
          "hours": "<strong>24 小时开放</strong>，但<strong>支路按季节关闭，NPS 口径「typically closed mid-October to mid-May」</strong>。9 月下旬可靠，10 月下旬有实质概率已封。",
          "parking": "<strong>约 20 个车位</strong>，免费，分南北两个小场。<strong>秋季日出前 40 分钟满位</strong>，满了只能原路退出去，路上无处掉头。",
          "walk": "停车到最近的海狸塘 <strong>3–10 分钟 / 200–600 米</strong>，土路平坦，天黑需头灯。"
        },
        "notes": [
          "<strong>出发当天必查 <a href=\"https://go.nps.gov/tetonroads\">go.nps.gov/tetonroads</a> 或拨 307-739-3682 确认支路是否还开</strong>——这是本条目最大的不确定项。",
          "<strong>10 月下旬如果这条路已封，最近的等效替代是 Blacktail Ponds Overlook（往南 3 英里，US-191 路侧，全年可停）</strong>，但那是台地俯视、不是河面高度，倒影完整度差一截。",
          "<strong>这里比 Oxbow Bend 更不适合日落</strong>：Grand Teton 仰角 11.2°，直射光提前约一小时结束。",
          "<strong>海狸坝的位置和水位年年不同</strong>，别照着网上某张老照片找机位，到现场沿步道走一遍再决定。",
          "河岸是驼鹿常出没的柳丛地形，<strong>带熊喷雾、出声、不要为了角度钻进灌木</strong>。",
          "低温下这里比台地上更冷（冷空气沉在河谷），日出前实测常比 Jackson 低 3–5°C，多带一层。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Schwabacher_Landing_Sunrise_-_Grand_Teton_National_Park_-_Flickr_-_aparlette.jpg",
            "cap": "海狸塘上的日出倒影 · Andrew Parlette / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/73/Schwabachers_Landing_(48975245721).jpg",
            "cap": "河汊与完整 Teton 山脊 · GrandTetonNPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Schwabacher_landing_reflection_Grand_Teton_national_park_-_Flickr_-_Mferbfriske.jpg",
            "cap": "静水段的镜面反射 · Mferbfriske / CC BY-SA 2.0"
          }
        ]
      },
      {
        "id": "taggart-bradley-lakes",
        "n": 7,
        "name": "Taggart Lake 与 Bradley Lake 步道",
        "en": "Taggart Lake · Bradley Lake Trailhead",
        "score": 3.5,
        "tldr": "3–5 英里的中等徒步换一个山就在眼前的湖。2026 北段步道封闭到 11/15，需走替代路线；湖面下午很早进山影。",
        "tags": [
          {
            "t": "国家公园门票（年票覆盖）",
            "c": "paid"
          },
          {
            "t": "往返 3–6 英里",
            "c": "risk"
          },
          {
            "t": "北段步道封闭至 11/15",
            "c": "risk"
          },
          {
            "t": "上午最佳",
            "c": "free"
          },
          {
            "t": "熊活动区",
            "c": "risk"
          }
        ],
        "highlights": [
          "<strong>这是本区唯一需要真正走一段路才能到的机位，回报是「山就在眼前」。</strong><strong>从 Taggart Lake 看 Grand Teton 方位 317°、距离仅 5.6 公里、仰角 20.8°</strong>——对比一下：Oxbow Bend 距离 24.7 公里、仰角 4.9°。<strong>这里的山在画幅里的体量是 Oxbow Bend 的四倍以上。</strong>",
          "两个湖都是<strong>冰川末端的终碛湖</strong>：冰川从 Avalanche Canyon 与 Garnet Canyon 推下来，在谷口堆出弧形的碎石垄，融水积在垄后就成了湖。<strong>Taggart Lake 往返约 3–4 英里、爬升约 400 英尺；加上 Bradley Lake 的环线往返约 5–6 英里、爬升约 600–800 英尺</strong>，路况良好、坡度平缓，属于「中等偏易」。",
          "<strong>2026 年的具体限制必须先讲：NPS 明确「The northern segment of Taggart Lake Trail, between the first junction and Bradley Lake Trail, will be closed through November 15, 2026 for trail rehabilitation」。</strong><strong>好消息是 Taggart Lake Trailhead 与停车场保持开放，两个湖仍可经标示的替代路线到达</strong>，但<strong>常规的「Taggart–Bradley 环线」这一趟走不成</strong>，实际是走一条进去、原路或另一条出来。现场必须按标识走，不要进封闭段。",
          "<strong>时段上的关键事实：山太近太高，湖面下午很早就进山影。</strong>Grand Teton 从湖边仰角 20.8°，<strong>推算湖面在日历日落前 1.5–2 小时就完全失去直射光</strong>——9 月 25 日大约 17:20、10 月 22 日大约 16:45。<strong>所以这里是上午的地方：日出后 1–3 小时（09:00–11:00）山体正面受光、湖面通常仍无风，是最好的窗口。</strong>这也正好和「渡船停航后 Jenny Lake 变成半日徒步」错开，两者可以分在不同的上午。",
          "<strong>2016 年的火烧区仍在恢复中</strong>，步道前半段穿过一片以 lodgepole pine 幼树与灌木为主的开阔地——这段视野比成熟林好得多，<strong>秋天灌木层会转成红褐色，是很好的前景</strong>，也是这条路线在秋季相对夏季的加分项。"
        ],
        "photo": "风光 <strong>4/5</strong>，人像 <strong>3.5/5</strong>，野生动物 <strong>2.5/5</strong>。<strong>山体在画面里的体量是本区最大的，湖岸有大量可用的石滩与倒木前景。</strong>扣分：需要走 1.5–3 小时、下午光线不可用、2026 年步道有封闭段。人像 3.5 分：湖岸开阔、背景是压人的山壁，环境肖像效果好，但要模特陪你走 4 英里。",
        "shots": [
          {
            "name": "Taggart Lake 东岸（主机位）",
            "park": [
              43.69314,
              -110.73294
            ],
            "view": [
              43.7041,
              -110.75512
            ],
            "desc": "<strong>从 Bradley-Taggart Trailhead 出发，单程约 1.6–2 英里、爬升约 400 英尺、步行 45–60 分钟。</strong><strong>最佳时段 09:00–11:00</strong>：山体正面受光、湖面通常仍平静、光线已经足够但还没到正午的平光。<strong>镜头：16–35mm 是这里的正解</strong>——山近到广角才能装下，而且湖岸有大量圆石与倒木可以做近前景；<strong>24–70mm 拍常规的湖 + 山，70–200mm 抽 Grand Teton 与 Avalanche Canyon 的岩壁细节。</strong><strong>偏振镜在这里作用很大</strong>：湖面反光重，转到消反光角度能让水色变深、山影更清楚（这一处和倒影机位相反，消反光是对的）。<strong>下午 17:00 之后湖面完全进山影（推算），不要把这里排在傍晚。</strong>"
          },
          {
            "name": "Bradley Lake（再往北，人更少）",
            "park": [
              43.69314,
              -110.73294
            ],
            "view": [
              43.71233,
              -110.75172
            ],
            "desc": "<strong>Taggart Lake 以北约 1 英里，往返总计 5–6 英里、爬升 600–800 英尺。</strong><strong>2026 年北段步道（first junction 至 Bradley Lake Trail 之间）封闭至 11 月 15 日，必须走现场标示的替代路线</strong>，实际距离与爬升会略有变化，出发前在 Craig Thomas 访客中心（开到 10 月 31 日）确认当日走法。<strong>Bradley Lake 比 Taggart 更深、四周林木更密，正对 Garnet Canyon 与 Middle Teton</strong>，<strong>人流通常只有 Taggart 的三分之一</strong>。时段同样是上午 09:00–11:00。<strong>24–70mm 主力，70–200mm 抽 Middle Teton 的岩壁。</strong>"
          }
        ],
        "access": {
          "book": "不需预约（日间徒步无需许可；过夜露营需 backcountry permit）。",
          "ticket": "园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。",
          "hours": "<strong>步道 24 小时开放</strong>，但<strong>北段（first junction 至 Bradley Lake Trail）封闭至 2026 年 11 月 15 日</strong>；<strong>Taggart Lake Trailhead 与停车场保持开放</strong>。整个区域位于 Teton Park Road 上，<strong>11 月 1 日随之封闭</strong>。",
          "parking": "<strong>Bradley-Taggart Trailhead 免费停车场</strong>，夏季上午 09:00 前必满，<strong>10 月下旬基本随到随停</strong>。有旱厕。<strong>Trailhead 与步道本身也在 2026 年的改建范围内（官方状态「Partially open. Construction ongoing」），可能遇到局部围挡。</strong>",
          "walk": "Taggart Lake 单程 <strong>1.6–2 英里 / 45–60 分钟 / 爬升约 400 英尺</strong>；加 Bradley Lake 总计 <strong>5–6 英里 / 3–4 小时 / 爬升 600–800 英尺</strong>。路面为压实土石，无技术难度。"
        },
        "notes": [
          "<strong>2026 年 11 月 15 日前，Taggart Lake Trail 北段封闭，常规环线走不成。</strong>请按现场标识走替代路线，不要进封闭段。",
          "<strong>这是上午的地方。</strong>Grand Teton 仰角 20.8°，湖面在日历日落前 1.5–2 小时就进山影（推算）。",
          "<strong>Cascade / Avalanche Canyon 一带是黑熊与灰熊活动区</strong>，NPS 要求三人以上结队、出声、带熊喷雾。10 月是增食期。",
          "<strong>10 月步道背阴处可能有薄冰与残雪</strong>，微钉鞋套值得带；出发前查 NPS 的 Backcountry &amp; Trail Conditions 页。",
          "<strong>Teton Park Road 11 月 1 日封闭</strong>，之后这个 trailhead 只能靠步行或滑雪进入。",
          "沿途没有饮水，10 月气温低容易忘记喝水，至少带 1.5 升。",
          "这一带无手机信号，把行程告诉别人再出发。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Taggart_Lake_(21072005605).jpg",
            "cap": "Taggart Lake 与正对的 Teton 岩壁 · H.L.I.T. / CC BY 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/31/Taggart_Lake_(8983168016).jpg",
            "cap": "湖岸石滩与山体 · Heidi / CC BY-SA 2.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Taggart_Lake_(29805486345).jpg",
            "cap": "Taggart Lake 全景 · mellow cat / CC BY 2.0"
          }
        ]
      },
      {
        "id": "gros-ventre-wildlife",
        "n": 8,
        "name": "Gros Ventre Road 与 Blacktail Ponds（驼鹿与叉角羚）",
        "en": "Gros Ventre Road · Blacktail Ponds Overlook",
        "score": 3.5,
        "tldr": "Moose-Wilson Road 本窗口全程封闭，找驼鹿只能来 Gros Ventre 河边柳丛，清晨黄昏概率最高。",
        "tags": [
          {
            "t": "国家公园门票（年票覆盖）",
            "c": "paid"
          },
          {
            "t": "Moose-Wilson 已封闭",
            "c": "risk"
          },
          {
            "t": "需 400mm 以上",
            "c": "risk"
          },
          {
            "t": "需运气",
            "c": "risk"
          },
          {
            "t": "路边可停",
            "c": "free"
          }
        ],
        "highlights": [
          "<strong>必须先讲清楚 Moose-Wilson Road 的状况，因为几乎所有指南都会把它列为找驼鹿的首选，而 2026 年它不可用。</strong>NPS 官方 2026 年时间表：<strong>「September 8 – November 15: Closure between Laurance S. Rockefeller Preserve and Moose」——车辆与自行车都不行。</strong>这是 Moose-Wilson Road Phase II 改建（把道路北段改接到新建的 Moose 环岛），工期到 2027 年。紧接着 11 月 1 日又叠加常规冬季封闭。<strong>你的整个窗口都在封闭期内，那条沿路两侧长满 hawthorn 与 chokecherry、每年秋天黑熊排队吃果子的路，这一趟去不了。</strong>同期 <strong>Death Canyon Road 与 Trailhead 也是 2026 年 5 月至 2027 年 6 月全时段封闭，行人也不行</strong>。",
          "<strong>替代方案是 Gros Ventre 一带。</strong>从 US-26/89/191 上的 Gros Ventre Junction 往东，沿 Gros Ventre River 走 Lower Gros Ventre Road 经 Kelly 再往上游，<strong>河两侧是连片的柳丛与棉白杨林——这正是驼鹿在秋季的主要栖息与发情地形</strong>。这条路属于 US-26/89/191 体系外的次级道路，但通到 Kelly 的路段是全年通行的（Kelly 是有人居住的社区）。",
          "<strong>Blacktail Ponds Overlook 是另一个可靠点位</strong>：US-26/89/191 路侧的铺装 turnout，<strong>俯瞰一片由海狸活动形成的湿地池塘与蛇河河曲，背后是 Grand Teton（方位 314°、距 11.8 公里）</strong>。它既是野生动物点（驼鹿、海狸、水鸟），也是 <strong>Schwabacher Landing 支路封闭时最近的倒影替代机位</strong>——虽然是台地俯视、不是水面高度，完整度差一截，但它在全年开放的主干道上、永远能停。",
          "<strong>Antelope Flats 一带是叉角羚（pronghorn）的地方。</strong>这些是北美跑得最快的陆生动物（时速可达 55 英里），<strong>每年秋天从 Jackson Hole 出发向南迁徙约 150 英里到 Upper Green River Basin 越冬</strong>——这条被称作「Path of the Pronghorn」的通道是北美有记录的最古老的哺乳动物迁徙路线之一，至少已延续 6,000 年。<strong>9 月下旬到 10 月正是它们开始南移的时候</strong>，在 Antelope Flats Road 与 Mormon Row 周边的开阔鼠尾草滩上概率最高。",
          "<strong>关于 elk reduction（园内减鹿计划），这是绝大多数指南不提、但你应该知道的一件事：</strong>Grand Teton 是极少数在园界内合法开展有组织狩猎的国家公园（依据 1950 年扩界时的立法授权）。<strong>核查结果：Wyoming Game &amp; Fish 2026 年第 7 章规章给出 Elk Hunt Area 75（即园内区域）的季节为 <u>2026 年 11 月 14 日至 12 月 6 日</u>。</strong><strong>也就是说，9 月下旬至 10 月下旬的整个窗口内，园内不会有减鹿计划活动，这一项对你没有影响。</strong>另外即便在计划期内：<strong>Antelope Flats 段与 Deadmans Bar 至 Ditch Creek 的 Snake River Bottom 段全季关闭、Hunt Area 79 全季关闭、US-191 两侧各 1/4 英里禁猎、建筑物半英里内禁猎</strong>，且参与者必须穿荧光橙／粉、携带熊喷雾、使用无铅弹。"
        ],
        "photo": "野生动物 <strong>4/5</strong>，风光 <strong>3/5</strong>，人像 <strong>2/5</strong>。这是本区唯一以动物为主目标的条目，<strong>但成败取决于运气与耐心，不取决于机位</strong>——所以综合分只给 3.5。Blacktail Ponds 的风光价值是备用性质的。人像 2 分：没有可用的人物背景，纯功能性点位。",
        "shots": [
          {
            "name": "Blacktail Ponds Overlook（铺装 turnout，全年可停）",
            "park": [
              43.66669,
              -110.69538
            ],
            "view": [
              43.66709,
              -110.69698
            ],
            "desc": "<strong>US-26/89/191 上距 Moose Junction 北约 1.3 英里的铺装观景点，全年开放、停车即到。</strong><strong>动物：清晨 06:30–08:30 与傍晚 17:30 至天黑</strong>，俯瞰海狸湿地找驼鹿与海狸，<strong>400–600mm 配三脚架或豆袋</strong>。<strong>风光：日出前后 30 分钟</strong>，Grand Teton 方位 314°，是斜侧顺光；<strong>24–70mm 拍湿地 + 河曲 + 山的三层，70–200mm 抽山脊。</strong><strong>这里是 Schwabacher Landing 支路 10 月封闭后最近的倒影替代方案</strong>——从台地上往下拍，倒影完整度不如河面高度，但胜在永远能到。注意 turnout 到湿地有明显高差，不要下切。"
          },
          {
            "name": "Lower Gros Ventre Road / Kelly 一带河谷（驼鹿主区）",
            "park": [
              43.6334,
              -110.62691
            ],
            "view": [
              43.6334,
              -110.62691
            ],
            "desc": "<strong>从 Gros Ventre Junction 往东沿 Gros Ventre River 行驶，经 Kelly 社区，河两侧的柳丛与棉白杨林是驼鹿密度最高的一带。</strong><strong>最佳时段：日出前 30 分钟到日出后 90 分钟（9/25 约 06:45–08:45；10/22 约 07:15–09:15），以及日落前 90 分钟到天黑。</strong><strong>操作方式是慢速开车 + 停车扫视，不是徒步找</strong>——驼鹿在柳丛里几乎看不见，但过路的车队会告诉你哪里有。<strong>镜头：400mm 起步，600mm 更好；秋季雄鹿的鹿角完整，是一年里最好的时候</strong>。<strong>务必在车内或车旁拍，驼鹿在发情期（9 月中至 10 月上旬）具有真实攻击性，法定距离 25 码只是最低要求。</strong><strong>停车必须完全驶出行车道</strong>，Gros Ventre Road 窄且无路肩。<strong>Gros Ventre Campground 已于 10 月 10 日关闭</strong>，之后这一带没有洗手间。"
          },
          {
            "name": "Antelope Flats Road（叉角羚与 bison）",
            "view": [
              43.66489,
              -110.69444
            ],
            "desc": "<strong>从 US-26/89/191 往东进入的那段开阔鼠尾草滩，一路通到 Mormon Row。</strong><strong>叉角羚在开阔地上，比柳丛里的驼鹿好找得多</strong>，<strong>清晨与傍晚的低角度光下，鼠尾草滩会变成暖金色，叉角羚的白色臀斑非常抢眼</strong>。<strong>400–600mm；如果能把动物 + Teton 山脊放在一张里（用 200–400mm 后退拍），价值远高于纯动物特写。</strong>这一带也常有 bison 群。<strong>bison 秋季仍具攻击性，25 码是最低距离，车是最好的掩体。</strong><strong>Antelope Flats Road 属「按条件季节性关闭」的次级道路，无公布日期，惯例 11 月 1 日前后关。</strong>"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。Kelly 社区与 Gros Ventre 上游部分路段在园界外，不另收费。",
          "hours": "<strong>24 小时开放。</strong>Blacktail Ponds Overlook 位于全年开放的 US-26/89/191 上；<strong>Lower Gros Ventre Road 至 Kelly 全年通行</strong>；<strong>Antelope Flats Road 与 Gros Ventre Road 上游段为「按条件季节性关闭」，无公布日期。</strong><strong>Moose-Wilson Road（LSR Preserve ↔ Moose）2026 年 9 月 8 日 – 11 月 15 日全线封闭。</strong>",
          "parking": "Blacktail Ponds 为铺装 turnout，免费；Gros Ventre 与 Antelope Flats 沿线为路侧停车，免费，<strong>必须完全驶出行车道</strong>。",
          "walk": "<strong>全部为车内或车旁拍摄，不需要步行。</strong>Blacktail Ponds 停车到栏杆 1 分钟。"
        },
        "notes": [
          "<strong>Moose-Wilson Road 在 2026 年 9 月 8 日至 11 月 15 日全线封闭</strong>，任何把它列为驼鹿首选的攻略在这个窗口内都已失效。",
          "<strong>驼鹿发情期为 9 月中至 10 月上旬，雄鹿具真实攻击性。</strong>不要下车靠近，不要挡在它和水／母鹿之间，法定 25 码是最低值。",
          "<strong>2026 年减鹿计划的日期是 11 月 14 日 – 12 月 6 日，不在你的窗口内。</strong>若行程意外延到 11 月中之后，请在开放区域穿荧光橙或荧光粉。",
          "<strong>秋季是熊的增食期，Gros Ventre 河谷的棉白杨林里有黑熊</strong>。下车前先扫一圈，带熊喷雾。",
          "<strong>停车必须完全离开行车道</strong>——园内每年都有因为「动物堵车」导致的追尾。开双闪，别站在路面上。",
          "<strong>Gros Ventre Campground 10 月 10 日关闭</strong>，之后这一带没有洗手间与饮水。",
          "这一带手机信号断续，Kelly 附近尚可，往上游很快就没有了。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Bull_Moose_in_Gros_Ventre_River_(48905336898).jpg",
            "cap": "Gros Ventre River 中的公驼鹿 · GrandTetonNPS / Public domain"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Moose_at_Gros_Ventre_(29704126705).jpg",
            "cap": "Gros Ventre 一带的驼鹿 · GrandTetonNPS / Public domain"
          }
        ]
      },
      {
        "id": "mormon-row",
        "n": 9,
        "name": "Mormon Row 摩门排屋历史区（Moulton 谷仓）",
        "en": "Mormon Row Historic District",
        "score": 5,
        "tldr": "木谷仓正对 Teton 山脊、日出正面顺光，秋天鼠尾草滩挂霜是决定性加分。2026 全季施工，机器和噪音会入镜。",
        "tags": [
          {
            "t": "国家公园门票（年票覆盖）",
            "c": "paid"
          },
          {
            "t": "停车即到",
            "c": "free"
          },
          {
            "t": "2026 全季施工中",
            "c": "risk"
          },
          {
            "t": "日出人最多",
            "c": "risk"
          },
          {
            "t": "霜期加分",
            "c": "free"
          }
        ],
        "highlights": [
          "<strong>1890 年代起，一批摩门教徒从 Idaho 的 Teton Valley 翻山过来，在这条南北向的土路两侧成排定居</strong>，刻意挨着建以便共享灌溉渠与互助——这就是「Row」的由来。鼎盛时有 27 户人家。<strong>1997 年整片被列入 National Register of Historic Places。</strong>",
          "<strong>T. A. Moulton Barn 是全美被拍摄次数最多的谷仓，没有之一。</strong>Thomas Alma Moulton 和儿子们从 1910 年代动工，<strong>断断续续盖了大约三十年才完工</strong>——这也是它形态奇特的原因：屋脊线不对称、正面有个明显的斜披，因为它不是一次性设计出来的，而是随着家里牲口数量增加一段段接上去的。",
          "<strong>往北约 300 米是 John Moulton Barn（T.A. 的兄弟）</strong>，造型更方正、旁边还有那栋被称作 Pink House 的粉色住宅与几座附属建筑，<strong>构图上比 T.A. 谷仓更「成组」，也明显人少</strong>。想避开三脚架墙就往北走。",
          "<strong>方位几何完美：从谷仓看 Grand Teton 方位 309°、Mount Moran 方位 335°，都在西北；而 9 月 25 日日出方位 91°、10 月 22 日 105°。</strong>摄影者站在土路上朝西北拍，<strong>太阳从背后偏南方向打过来，同时照亮谷仓朝东的木板墙面和整排山体，是彻头彻尾的顺光</strong>。<strong>反过来在日落时，太阳在方位 255–269°，位于山脊的南侧偏低处，谷仓朝向镜头的那一面完全落在阴影里</strong>——所以<strong>结论明确：Mormon Row 是日出题材，黄昏在这里只能拍剪影，不能拍谷仓的木质纹理。</strong>",
          "<strong>2026 年的坏消息与好消息各一条。</strong>坏消息：<strong>Mormon Row 历史区正在进行多年改建项目的最后一期，工期 2026 年 6 月至 11 月</strong>，NPS 原文「Visitors will likely hear and see construction equipment in the vicinity of the historic district impacting the viewshed and soundscape」——<strong>翻译过来就是：机械设备可能进画，噪音一定有。</strong>好消息：<strong>历史区全季保持开放，没有任何封闭</strong>，而且项目内容正是修一个铺装停车场（含大巴位）、旱厕、遮阳棚与规范化的步道观景点，2027 年还会加一个 Grand Teton Association 的设施。"
        ],
        "photo": "建筑 <strong>5/5</strong>，风光 <strong>5/5</strong>，人像 <strong>4/5</strong>。风化木质纹理 + 雪山 + 平坦鼠尾草前景 + 完美的日出方位，这是全园人文与自然结合得最好的一处。<strong>加分项是这个季节独有的霜</strong>：晴朗无风的夜后，鼠尾草滩会挂一层白，侧光下整片发亮。扣分只在施工与人多。人像 4 分：谷仓可以做背景框，但清晨机位前站人会挡住其他摄影者，请自觉。",
        "shots": [
          {
            "name": "T. A. Moulton Barn 东侧土路（经典机位）",
            "view": [
              43.66069,
              -110.665
            ],
            "desc": "<strong>站在谷仓东侧的 Mormon Row 土路上朝西北拍。这是那张你见过一百次的照片的位置。</strong>最佳时段 <strong>9/25：06:50–08:00（日出 07:13）；10/22：07:25–08:40（日出 07:46）</strong>。<strong>关键在最早的那 10 分钟</strong>：谷底还没见光、Grand Teton 峰顶已经转成橙红，谷仓是深色剪影——这一版比「全亮」的版本层次好得多。之后 15–20 分钟谷仓被照亮，切换到常规版本。<strong>镜头：70–200mm 是这里的正解</strong>，用 100–135mm 把山脊压到谷仓正后方、让山看起来像贴在屋顶上；<strong>24–70mm 拍带鼠尾草前景的环境版</strong>；16–35mm 慎用，广角会把山推远、谷仓变成一个小方块。<strong>光圈 f/8–f/11 保证从前景草到山脊都在景深内</strong>，谷仓木纹需要足够的解析力。有霜的早晨请用侧逆光角度（稍微往北挪几步），让霜晶挂上边缘光。"
          },
          {
            "name": "John Moulton Barn / Pink House 一组（往北，人少）",
            "desc": "<strong>沿 Mormon Row 土路从 T.A. 谷仓往北约 300 米。</strong>建筑更成组：方正的谷仓 + 粉色住宅 + 几座附属棚屋，<strong>可以用一个画面讲「一户人家」而不只是「一座谷仓」</strong>，而且这里的三脚架密度通常只有南边的三分之一。时段与主机位相同。<strong>24–70mm 拍建筑组合，70–200mm 单独抽粉色住宅配山脊</strong>——粉色墙面在日出暖光下会偏得很好看。<strong>此处无可靠的 OSM 实体节点可引用，故省略 view 坐标，地图上不会有针脚</strong>；导航请以 T.A. Moulton Barn 为目标后沿土路北行。"
          },
          {
            "name": "Mormon Row 北端观景点（全区俯瞰）",
            "view": [
              43.67246,
              -110.66453
            ],
            "desc": "土路北端靠近 Antelope Flats Road 的一处观景位置。<strong>这里视野最开阔，适合拍「一整排建筑散布在鼠尾草滩上、背后是完整山脊」的宽幅</strong>，是唯一能表达出「Row」这个概念的机位。<strong>24–70mm 的 24–35mm 端或全景接片。</strong>清晨这里也常有 bison 群和 pronghorn 从 Antelope Flats 方向过来，<strong>400mm 以上可以拍「动物 + 谷仓 + 山」的三元素</strong>，但请守住 25 码距离，bison 在秋季发情期后仍具攻击性。"
          }
        ],
        "access": {
          "book": "不需预约",
          "ticket": "园区门票 <strong>$35 / 车 / 7 天</strong>；<strong>持 America the Beautiful 年票免费</strong>。",
          "hours": "<strong>24 小时开放，历史区 2026 年全季不关闭。</strong>但建筑内部不对外开放，只能外部拍摄。",
          "parking": "<strong>免费。</strong>目前是沿 Mormon Row 土路的非正式路侧停车，<strong>2026 年正在施工新建铺装停车场（含大巴位与旱厕），工期到 11 月</strong>，施工期间可用车位与位置可能临时变动。<strong>日出前 40 分钟车位就开始紧张</strong>（10 月下旬明显缓解）。严禁把车开进草地。",
          "walk": "<strong>0–5 分钟。</strong>停车即在谷仓旁；从 T.A. 谷仓走到 John Moulton 一组约 300 米 / 4 分钟，土路平坦。"
        },
        "notes": [
          "<strong>2026 年 6 月至 11 月全区施工，施工机械会进入取景范围、噪音全天存在。</strong>NPS 已明示「impacting the viewshed and soundscape」。往北走 200 米通常能避开大部分机械。",
          "<strong>这是日出点，不是日落点。</strong>日落时谷仓朝向镜头的一面完全在阴影中。",
          "<strong>不要触碰或攀爬历史建筑</strong>，也不要为了角度踩进围栏。这些是 1997 年列入 NRHP 的登录建筑。",
          "<strong>霜是本季最值得等的条件</strong>：需要前一夜晴朗、无风、最低温低于 -2°C。10 月满足的早晨很多，9 月下旬也时有。",
          "<strong>进入 Mormon Row 的 Antelope Flats Road 属于「按条件季节性关闭」的次级道路，无公布日期，惯例 11 月 1 日前后关</strong>。出发前查实时路况图。",
          "土路在雨后或融雪后会泥泞，两驱轿车慢行没问题，但别停在软路肩上。",
          "这一带（Antelope Flats 部分）虽在 Elk Hunt Area 75 边界内，但<strong>官方明确 Antelope Flats 段全季对减鹿计划关闭</strong>，且 2026 年计划日期为 11/14–12/6，与本次窗口无关。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Sunrise,_Mormon_Row_barns,_Grand_Teton_National_Park.jpg",
            "cap": "日出时的 Moulton 谷仓与 Teton 山脊 · DASH713 / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/f/f5/T.A._Molten_Barn,_Mormon_Row,_GTNP.jpg",
            "cap": "T. A. Moulton Barn 正面 · megmpete / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Mormon_Row,_GTNP.jpg",
            "cap": "Mormon Row 建筑群与鼠尾草滩 · megmpete / CC BY-SA 4.0"
          }
        ]
      },
      {
        "id": "jackson-town",
        "n": 10,
        "name": "Jackson 镇：Town Square 鹿角拱门与 Million Dollar Cowboy Bar",
        "en": "Town of Jackson · Town Square Antler Arches · Million Dollar Cowboy Bar",
        "score": 3.5,
        "tldr": "四座鹿角拱门全部在位（2007–2015 逐座重建）。本区唯一的夜间与室内题材，也是唯一全年补给点。",
        "tags": [
          {
            "t": "完全免费（广场）",
            "c": "free"
          },
          {
            "t": "全年开放",
            "c": "free"
          },
          {
            "t": "Cowboy Bar 严格 21+",
            "c": "risk"
          },
          {
            "t": "博物馆 $18",
            "c": "paid"
          }
        ],
        "highlights": [
          "<strong>四座鹿角拱门站在 George Washington Memorial Park（俗称 Town Square）的四个角上。</strong>第一座由 Jackson Hole Rotary Club 在 1953 年建于西南角（至今仍是最热门的一角），其余三座在 1966–1969 年补齐。<strong>每座用超过 2,000 支鹿角、总重约 14,000 磅</strong>，角与角之间靠摩擦力与摆放咬合，只有外缘几支上了螺丝防偷。",
          "<strong>核实结果：四座拱门目前全部在位，且都不是原件。</strong>鹿角的寿命约 50 年，Rotary Club 与镇政府用九年时间逐座重建：<strong>2007 年第一座、2009 年东南角、2011 年东北角、2013 年西北角，2015 年 6 月最后一座（东北／西北角，报道口径略有出入）完工。</strong>当年的公共工程主管 Larry Pardee 表示这批预计能撑到 <strong>2050 年前后</strong>。旧拱门被拍卖，最后一座拍出 $59,000。<strong>未能核实：有二手来源提到 2026 年秋季可能对拱门做维护工程（含脚手架与临时人行道封闭），但该来源日期自相矛盾、无法从 Town of Jackson 官方渠道确认，请到现场以实际情况为准。</strong>",
          "<strong>鹿角的来源是个值得知道的细节：全部来自镇北的 National Elk Refuge。</strong>每年冬天有数千头麋鹿在那里越冬，<strong>春天公鹿在离开前自然脱角</strong>，由 Boy Scouts 拾集后在 Town Square 拍卖，收益部分回流给避难所。<strong>没有一头鹿为这些拱门死过。</strong>",
          "<strong>Million Dollar Cowboy Bar 就在广场北侧（25 N. Cache Street），自 1937 年起营业至今。</strong><strong>那些真皮马鞍吧凳是 1973 年新东家 C.A. Poindexter 装上去的——他一次买了 20 副二手马鞍，每副 $97</strong>，同时把这里改造成 country western 的现场演出场地（1975 年 Waylon Jennings、1976 年 Willie Nelson）。室内是原木、松节疤木质地面与镶银的马具装饰。<strong>硬性限制：全时段严格 21 岁以上，必须出示实体证件，无例外。每日 11:00–01:00；周一至周六 20:30 有现场乐队，周日 DJ。</strong>",
          "<strong>National Museum of Wildlife Art 值得单列出来说：值得去。</strong>它在镇北 2.5 英里的一处山丘上，<strong>建筑本身是一座仿砂岩崖壁的低伏结构，从公路上几乎看不见</strong>，正下方就是 National Elk Refuge。<strong>免费的 3/4 英里 Sculpture Trail 沿山坡布置了 20 多件野生动物雕塑，背景是 Elk Refuge 与 Gros Ventre 山脉</strong>——<strong>「雕塑剪影 + 真实山景」这个组合是本区独一无二的题材，而且它朝东，日出时是顺光。</strong><strong>2026 年 5 月 1 日 – 10 月 31 日每天 10:00–17:00；11 月 1 日起改为周二至周日。成人 $18、65+ $16。Sculpture Trail 免费，随馆开放时间。</strong>"
        ],
        "photo": "人文 <strong>4/5</strong>，夜景 <strong>4/5</strong>，风光 <strong>2/5</strong>。<strong>这是整个子地区唯一的夜间题材、唯一的室内人文题材，也是坏天气时唯一能拍的地方。</strong>广场四角的木廊、拱门、以及入夜后店招牌的暖光，蓝调时段很好看。扣分：白天广场就是一个游客密集的小公园，画面很杂；风光 2 分是因为镇内看不到 Teton 山脊（被 East Gros Ventre Butte 挡住）。",
        "shots": [
          {
            "name": "西南角鹿角拱门（最热门的一座）",
            "park": [
              43.47997,
              -110.7618
            ],
            "view": [
              43.47977,
              -110.76214
            ],
            "desc": "<strong>1953 年第一座拱门的位置，也是所有明信片用的那一角（Broadway 与 Cache 路口）。</strong><strong>最佳时段是蓝调：9/25 约 19:20–19:45（日落 19:15）；10/22 约 18:35–19:00（日落 18:28）。</strong>这时街灯与店招牌已亮、天空还有深蓝，鹿角的复杂结构会被路灯从下方勾出层次——<strong>白天顶光下拱门会拍成一团灰白的乱枝，蓝调是唯一能把它拍好看的时段。</strong><strong>镜头：16–35mm 从拱门下方往上仰拍、把整座拱门与背后的天空一起框住</strong>；<strong>24–70mm 拍拱门 + 街景；70–200mm 抽单支鹿角的纹理。</strong><strong>三脚架：位于市政公园与人行道，非商业用途通常无人干涉，但人流大，请收紧脚架并注意行人。</strong>清晨 07:00 前是唯一能拍到「无人的拱门」的时间。"
          },
          {
            "name": "Million Dollar Cowboy Bar（室内，马鞍吧凳）",
            "park": [
              43.47997,
              -110.7618
            ],
            "view": [
              43.47988,
              -110.76253
            ],
            "desc": "<strong>25 N. Cache Street，广场北侧，每日 11:00–01:00。</strong><strong>拍马鞍吧凳最好的时间是 11:00–15:00 的下午空场</strong>——晚上 20:30 有乐队之后人满且光线全是彩色演出灯，拍不了静物。<strong>光线极暗：f/1.4–f/2、ISO 3200–12800、1/60 秒起步。</strong><strong>35mm 或 50mm 大光圈定焦是这里唯一合适的配置</strong>，<strong>不要用闪光灯</strong>（会毁掉气氛也会被制止），三脚架在营业中的酒吧内不现实。<strong>严格 21+，必须带实体证件</strong>（护照或驾照，电子件不行）。构图上：<strong>沿吧台压低机位、用 f/1.4 让一排马鞍向纵深虚化</strong>，是这里最有辨识度的一张。拍店内其他客人前请征得同意。"
          },
          {
            "name": "National Museum of Wildlife Art 与 Sculpture Trail",
            "park": [
              43.51907,
              -110.74895
            ],
            "view": [
              43.51907,
              -110.74895
            ],
            "desc": "<strong>2820 Rungius Road，镇北 2.5 英里，US-26/89/191 路东的山丘上，开车 6–8 分钟。</strong><strong>3/4 英里的 Sculpture Trail 免费、随馆开放时间（10 月 31 日前每天 10:00–17:00）。</strong><strong>最佳时段：开馆的 10:00–11:30</strong>——步道朝东俯瞰 National Elk Refuge 与 Gros Ventre 山脉，<strong>上午是顺光，雕塑的青铜表面与远山同时受光</strong>；傍晚这一侧会先进入山丘的阴影。<strong>镜头：24–70mm 拍「雕塑 + 山景」的关系，70–200mm 把远山压到雕塑背后</strong>——这个压缩关系是这条步道的核心玩法。<strong>室内展馆成人 $18、65+ $16、5–18 岁首位 $10，可现场买票，无需预约。</strong><strong>室内三脚架政策未能从官方渠道确认，按手持准备。</strong><strong>这是本区最好的雨雪天备案</strong>：室内有大量 19–20 世纪野生动物题材绘画（含 Carl Rungius 的核心收藏），而且暖和。"
          }
        ],
        "access": {
          "book": "广场与拱门不需预约；Cowboy Bar 不接受订位（除售票演出）；博物馆可现场买票，无需预约。",
          "ticket": "<strong>Town Square 与四座拱门完全免费</strong>；Sculpture Trail <strong>免费</strong>；<strong>National Museum of Wildlife Art 成人 $18、65 岁以上 $16、5–18 岁首位 $10、其后每位 $5、4 岁以下免费</strong>（现场出示证件有本地与军人折扣）；Cowboy Bar 免入场费，酒水另付。",
          "hours": "<strong>Town Square 与拱门 24 小时开放、全年无休。</strong><strong>Million Dollar Cowboy Bar 每日 11:00–01:00</strong>，周一至周六 20:30 现场乐队、周日 DJ，<strong>全时段 21+</strong>。<strong>National Museum of Wildlife Art：5 月 1 日 – 10 月 31 日每天 10:00–17:00；11 月 1 日 – 4 月 30 日周二至周日 10:00–17:00（周一闭馆）</strong>，另于国庆日、退伍军人节、感恩节、12/25–26、元旦与总统日闭馆。",
          "parking": "<strong>Jackson 镇内有路边停车与多处公共停车场</strong>，广场周边旺季紧张，步行或叫车更省事。<strong>博物馆有自己的免费停车场。</strong>",
          "walk": "广场四角之间步行 1–2 分钟；广场到 Cowboy Bar <strong>1 分钟</strong>；博物馆停车到 Sculpture Trail 起点 <strong>2 分钟</strong>，整条步道 <strong>3/4 英里 / 25–40 分钟</strong>，有坡但铺装良好。"
        },
        "notes": [
          "<strong>四座拱门确认全部在位</strong>（2007–2015 逐座重建，预计使用到 2050 年前后）。<strong>未能核实的是：某二手来源提到 2026 年秋可能有维护工程与临时封闭，无法从官方渠道确认。</strong>",
          "<strong>Million Dollar Cowboy Bar 全时段严格 21 岁以上，必须出示实体证件，官方原文「No exceptions」。</strong>",
          "<strong>拱门只在蓝调时段好拍。</strong>白天顶光会把它拍成一团灰白乱枝。",
          "<strong>Jackson 是本次行程唯一全年可靠的加油与补给点。</strong>园内加油站 10 月 9 日至 10 月 18 日间陆续关闭，离开镇子前请加满油。",
          "<strong>熊喷雾不能带上飞机</strong>，在 Jackson 的户外店购买或租用，离开时可以在部分店铺回收。",
          "<strong>镇内看不到 Teton 山脊</strong>（被 East Gros Ventre Butte 挡住），别指望在 Town Square 拍到雪山背景。",
          "博物馆的 Sculpture Trail 朝东，<strong>上午顺光、傍晚进阴影</strong>，别排在下班前去。"
        ],
        "images": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Elk_antler_arch_at_Jackson_Square,_Jackson,_WY_2022-07-11.jpg",
            "cap": "Town Square 鹿角拱门 · Schwerdf / CC BY 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Antler_Base.jpg",
            "cap": "拱门基座的鹿角咬合细节 · Sirguh / CC BY-SA 4.0"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Million_Dollar_Cowboy_Bar_(Jackson,_Wyoming)_001.jpg",
            "cap": "Million Dollar Cowboy Bar 外观 · Leonard J. DeFrancisci / CC BY-SA 3.0"
          }
        ]
      }
    ]
  }
];
