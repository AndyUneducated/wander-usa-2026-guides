/* =========================================================================
   REGIONS —— 分区景点数据
   当前为【样例预览】：仅填了 3 个条目用于确认版式，
   5 组联网研究返回后会替换为全量 47 个景点的实测数据。
   ========================================================================= */

var REGIONS = [
  {
    id: 'central-coast',
    name: '① San Jose → Santa Barbara 沿途',
    navName: '中央海岸',
    color: '#4da3ff',
    lead: 'Highway 1 中央海岸段。这一段的核心是「路本身」，机位大多是公路观景台（turnout），停车即拍，时间成本低但极依赖光线和路况。',
    callouts: [{
      type: 'warn',
      title: '待研究组确认：Big Sur 1 号公路通行状态',
      html: '<p>是否能从 Monterey 连续开到 San Simeon，直接决定第一天走海岸线还是绕 US-101。若有单向放行管制路段，还需按固定放行时刻安排出发时间。</p>'
    }],
    spots: [
      {
        id: 'bixby',
        n: 1,
        name: 'Bixby Creek 大桥',
        en: 'Bixby Creek Bridge, Big Sur',
        score: 4.5,
        tags: [{ t: '免费', c: 'free' }, { t: '无需预约', c: 'free' }, { t: '停车位少', c: 'risk' }],
        highlights: [
          '1932 年建成的单跨混凝土拱桥，Big Sur 最具辨识度的地标',
          '桥北侧观景台可同时收进桥身、海崖与太平洋，是这条路上信息量最大的一个机位'
        ],
        photo: '风光 <strong>5/5</strong>，人像 <strong>3/5</strong>。桥体线条干净，逆光和侧光都成立；<strong>下午到日落</strong>光线打在桥的西立面最好。缺点是机位单一、游客多，构图容易撞图。',
        shots: [
          {
            name: '桥北观景台（主机位）',
            desc: '桥北端西侧的正式 turnout，可俯拍整座桥。建议 24–70mm；想压缩桥与远山用 70–200mm。人多时往北再走 100 米有更干净的角度。',
            park: [36.37327, -121.90180],
            view: [36.37380, -121.90230]
          },
          {
            name: 'Castle Rock 高点',
            desc: '从北侧观景台往内陆的土路步行上坡约 5 分钟，可拍到桥 + 海岸线的高角度全景。土路无护栏，注意脚下。',
            view: [36.37500, -121.90050]
          }
        ],
        access: {
          book: '不需要',
          ticket: '免费',
          hours: '全天开放',
          parking: '桥两端各有免费 turnout，合计约 20 个车位，旺季常满；<strong>切勿停在车道内</strong>，此处事故多发',
          walk: '停车后 0–2 分钟即到主机位；Castle Rock 高点约 5–8 分钟上坡',
          drone: 'Big Sur 沿线多为州立公园管辖，<strong>禁飞</strong>'
        },
        notes: [
          '桥面人行道很窄且紧邻车道，站上桥拍照要格外注意来车',
          '此处常年有海雾，清晨可能完全看不见桥'
        ],
        images: [
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bixby_Creek_Bridge%2C_California%2C_USA_-_May_2013.jpg/1600px-Bixby_Creek_Bridge%2C_California%2C_USA_-_May_2013.jpg',
            cap: 'Bixby Creek Bridge 北侧观景台经典角度 · Wikimedia Commons'
          }
        ]
      }
    ]
  },
  {
    id: 'la',
    name: '③ Los Angeles',
    navName: '洛杉矶',
    color: '#ff8a3d',
    lead: '本次行程景点最密集的一区，建筑人文与海岸日落都集中在这里。难点全在交通和停车，而不是景点本身。',
    spots: [
      {
        id: 'griffith',
        n: 1,
        name: '格里菲斯天文台',
        en: 'Griffith Observatory',
        score: 5,
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
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Griffith_observatory_2006.jpg',
            cap: 'Griffith Observatory 建筑全貌 · Wikimedia Commons'
          }
        ]
      },
      {
        id: 'smp',
        n: 2,
        name: '圣莫尼卡栈桥（含 Pacific Park、West Coaster、圣莫尼卡海滩）',
        en: 'Santa Monica Pier · Pacific Park · West Coaster · Santa Monica Beach',
        score: 4,
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
          {
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Santa_monica_pier_entrance_evening.jpg',
            cap: 'Santa Monica Pier 入口夜景 · Wikimedia Commons'
          }
        ]
      }
    ]
  }
];
