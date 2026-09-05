# 加州海岸摄影自驾执行报告（2026.9.5–9.9）

从 San Jose 出发的 5 天自驾环线摄影执行报告：中央海岸 → Santa Barbara → Los Angeles → Laguna Beach → San Diego → I-5 返程。

**在线阅读**：https://andyuneducated.github.io/socal-roadtrip-report/

## 内容

按地理位置分为 5 个片区，每个片区一张交互地图（Leaflet + OpenStreetMap），图钉编号对应下方景点卡片。每个景点包含：

- **核心看点** —— 值得去的理由
- **摄影价值** —— 分风光 / 建筑 / 人像三个维度评分
- **摄影机位** —— 精确到可导航的坐标，区分「停车点」与「实际机位」，附最佳时段与镜头建议
- **可达性** —— 是否需预约、票价、停车是否方便与费用、停车后步行到机位需要多久
- **参考图** —— 来自 Wikimedia Commons 的实拍参考

相距很近的景点已合并为单个条目（例如 Victoria Beach 与 Pirate Tower、Santa Monica Pier 与 Pacific Park / West Coaster）。

## 本地预览

```bash
python3 -m http.server 8123
# 打开 http://127.0.0.1:8123
```

纯静态页面，无构建步骤。

## 结构

```
index.html          页面骨架
assets/style.css    样式
assets/data.js      景点数据（分区 → 景点 → 机位）
assets/app.js       渲染引擎：地图与卡片
assets/intro.js     总览与行程骨架
```

要增改景点，只需编辑 `assets/data.js`。

## 免责说明

开放时间、票价、停车费与道路封闭状态会变动，出发前请再次核对官方页面与 Caltrans 实时路况。参考图片版权归原作者所有，仅作取景参考。
