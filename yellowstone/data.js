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
        "html": "<p>以下为 <a href=\"https://www.nps.gov/yell/planyourvisit/parkroads.htm\" target=\"_blank\" rel=\"noopener\">NPS 官方 Park Roads 页</a>公布的 <strong>2026 年预计通车日期</strong>（该页最后更新 2026-09-01）。路段在末日当天结束通车，次日 8:00 起禁止轮式车辆。所有日期均<strong>可能因降雪提前</strong>。</p><table><thead><tr><th>路段</th><th>2026 通车区间</th><th>对本区的意义</th></tr></thead><tbody><tr><td>Norris ↔ Canyon Village</td><td>4/17 – <strong>10/31</strong></td><td>从西/北进入 Canyon 的主通道</td></tr><tr><td>Mammoth ↔ Norris</td><td>4/17 – <strong>10/31</strong></td><td>Dunraven 关闭后从北面来的唯一路线</td></tr><tr><td>Canyon Village ↔ Bridge Bay（穿 Hayden Valley）</td><td>5/1 – <strong>10/31</strong></td><td>Hayden Valley、Mud Volcano 全在此段</td></tr><tr><td>East Entrance ↔ Fishing Bridge（Sylvan Pass）</td><td>5/1 – <strong>10/31</strong></td><td>Lake Butte Overlook 与 Cody 方向进出</td></tr><tr><td><strong>Canyon Village ↔ Tower Fall（Dunraven Pass）</strong></td><td>5/22 – <strong>10/12</strong></td><td><strong>提前 19 天关，务必注意</strong></td></tr><tr><td>Beartooth Hwy (US-212) / Chief Joseph (WY-296)</td><td>5/22 – <strong>10/12</strong></td><td>与 Dunraven 同日关</td></tr><tr><td>South Entrance ↔ West Thumb ↔ Lake Village</td><td>5/8 – <strong>10/31</strong></td><td>从 Grand Teton 方向北上</td></tr><tr><td>North Entrance ↔ Northeast Entrance</td><td>全年</td><td>唯一全年通车路段</td></tr></tbody></table><p><strong>注意 2026 年的主环路关闭日是 10 月 31 日（周六），不是历史上惯用的「11 月第一个周一」</strong>（2026 年的 11 月第一个周一是 11/2）。也就是说这个季节窗口的末端就是 10/31。</p><p><strong>Dunraven Pass 10 月 12 日关闭之后，从 Tower / Mammoth 到 Canyon 必须改走 Norris。</strong>Tower Junction → Canyon 走 Dunraven 约 19 英里；改走 Mammoth → Norris → Canyon 为 <strong>约 57 英里</strong>，多绕 38 英里、多花 1 小时 20 分以上，且 Mammoth 东南侧的 Gardner River High Bridge 施工到 10 月下旬为<strong>单车道放行、随时 15 分钟延误、24 小时不间断</strong>。10/12 之后从北面来看日出，等于凌晨 4 点前就得出发。</p><p><strong>Sylvan Pass 是本表最不可靠的一格。</strong>官方日期是 10/31，但它海拔 8,530 英尺、有主动雪崩控制作业，NPS 历史上多次在 9 月就因预报 5–9 英寸降雪临时关闭该路段。若 Lake Butte Overlook 是硬需求，出发当天必须先看路况地图，不要把它排成不可替换的一站。</p><p><strong>South Rim Drive、North Rim Drive、Brink of the Upper Falls Drive 三条支线，NPS 的 2026 道路表并未单独列出开闭日期</strong>——它们是 Norris–Canyon 与 Canyon–Bridge Bay 主段的支路，按常规随主段一同于 10/31 结束通车。<strong>这一点未能从官方渠道逐条确认</strong>，且降雪后支线常先于主路临时封闭，请以现场与路况地图为准。</p><p>实时查询：路况地图（上页）、电话 <strong>(307) 344-2117</strong> 录音、或发送短信 <strong>82190</strong> 至 <strong>888-777</strong> 订阅路况提醒。</p>"
      },
      {
        "type": "warn",
        "title": "Uncle Tom’s Trail 永久关闭 + 住宿末日",
        "html": "<p><strong>Uncle Tom’s Trail：不是季节性关闭，不是维修中，是永久关闭。</strong>那条 328 级金属台阶自 <strong>2019 年夏</strong>起关闭至今。Yellowstone 公共事务办公室（Linda Veress）明确表示该步道<strong>「permanently closed」，NPS 计划在未来拆除整座楼梯</strong>：结构已超设计寿命，踏板变形、扶手缺失、焊缝开裂、锈蚀严重；2019 年的翻修估价为 300–350 万美元，因造价上涨已被从峡谷改造工程中剔除，公园「不打算再对这座楼梯投入」。它已从 NPS 所有现行出版物中删除——<a href=\"https://www.nps.gov/yell/planyourvisit/canyonplan.htm\" target=\"_blank\" rel=\"noopener\">NPS 的 Canyon 区页面</a>现在只列 Artist Point、Upper Falls Viewpoints、Brink of the Lower Falls Trail、Red Rock Point。原来的「Uncle Tom’s Point」已改名为 <strong>Upper Falls Viewpoints</strong>（开放），停车场仍叫 Uncle Tom’s Parking Area，这是很多旧攻略混淆的来源。<strong>替代方案：Red Rock Point</strong>（下切约 500 英尺、约 100 级台阶，对岸低位视角）<strong>与 Brink of the Lower Falls Trail</strong>（下到瀑布唇口正上方），两条都开放。</p><p><strong>其余观景台本季均开放，且峡谷缘改造计划已收尾</strong>：Lookout Point 与 Grand View 于 2005 年、Artist Point 于 2007 年、<strong>Inspiration Point 于 2018 年</strong>（两年翻修后重开）、Brink of the Lower Falls 与 Red Rock Point 为最后一期，均已完工。本季无在建观景台。</p><p>住宿与补给数据来自 <a href=\"https://www.nps.gov/yell/planyourvisit/operating-dates.htm\" target=\"_blank\" rel=\"noopener\">NPS Operating Dates 页</a>（最后更新 2026-09-03）。设施在所列末日营业结束时关闭；营地为末日 11:00 清场。</p><table><thead><tr><th>设施</th><th>2026 末日</th></tr></thead><tbody><tr><td><strong>Canyon Lodge 客房（Lodging）</strong></td><td><strong>10/24</strong></td></tr><tr><td>Canyon Lodge Cabins 小木屋</td><td>10/4</td></tr><tr><td>Canyon Lodge Eatery / Gift Shop / M66 Lounge</td><td>10/25</td></tr><tr><td>Canyon Falls Café</td><td>10/4</td></tr><tr><td><strong>Canyon 加油站（Gas &amp; Store 店面）</strong></td><td><strong>10/31</strong>（刷卡油泵全年 24 小时）</td></tr><tr><td>Canyon General Store 杂货</td><td>10/11</td></tr><tr><td>Canyon Visitor Education Center 访客中心</td><td>10/31</td></tr><tr><td>Canyon Campground 营地</td><td><strong>9/19</strong></td></tr><tr><td>Canyon 防熊喷雾租借亭</td><td>10/10</td></tr><tr><td><strong>Lake Yellowstone Hotel 客房</strong></td><td><strong>10/10</strong></td></tr><tr><td>Lake Yellowstone Hotel 餐厅 / Deli / Gift Shop</td><td>10/11</td></tr><tr><td>Fishing Bridge 加油站（店面）</td><td>10/11</td></tr><tr><td>Fishing Bridge Visitor Center</td><td>10/3</td></tr><tr><td>Bridge Bay Campground</td><td>9/13</td></tr></tbody></table><p><strong>Canyon Lodge 确实是园内内陆住宿中撑得最晚的一家</strong>（10/24），Lake Yellowstone Hotel 比它早整整两周（10/10）。10/24 之后园内只剩 Mammoth Hot Springs Hotel（开到 2027 年 3 月）与 Old Faithful Snow Lodge（10/24）。也就是说 <strong>10 月 25–31 日这七天，想拍 Canyon 日出只能住 Mammoth 或出园</strong>，而这七天 Dunraven 已关，Mammoth → Canyon 要绕 Norris 走 57 英里。</p><p>注意：特许经营商 Yellowstone National Park Lodges 官网把 Canyon Lodge &amp; Cabins 写成 10/25、Lake Yellowstone Hotel 写成 10/11，与 NPS 表格差一天（前者含餐饮与商店，后者分列客房）。订房以订单确认为准。</p>"
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
          "手机无信号。日出前从 Canyon Lodge 开到这里约 15 分钟（约 4.5 英里），路上大概率遇野牛占道，请把这段预留成 25 分钟",
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
            "desc": "在 Mud Volcano 停车场以北约 200 米、<strong>公路的另一侧</strong>（东侧）的路侧观景点。停车即到。<strong>这是本条里唯一「看一眼就走」的点，10 分钟足够。</strong>主体是不断翻滚的灰黄色酸水（pH 1–2）与池边的黄色硫结壳。最佳时段：<strong>阴天或上午侧光</strong>；直射强光下灰黄色会拍得很脏。焦段 70–200mm 压缩水面翻滚纹理，或 100mm 微距拍池边硫结晶。<strong>栈道／护栏外禁入。</strong><strong>Sulphur Caldron 本体在 OSM 中没有对应实体节点，故省略 view 字段、地图上不出针脚</strong>；park 坐标取自 OSM 的路侧 pullout，附近有一块名为「Volcanic Landscape」的解说牌（44.62799, −110.43331）可作为现场参照。"
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
  }
];
