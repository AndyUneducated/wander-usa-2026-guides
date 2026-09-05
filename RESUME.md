# 中断恢复笔记

**中断时间**：2026-09-05 09:35（本地网络断开）
**最后提交**：`5f3d06d` — 已推送到 origin，工作区干净，没有未保存的东西。

## 全站当前状态

四个地域全部有数据，`tools/check_all.py` 无问题，线上 5 个页面 × 2 个视口浏览器测试全部通过。

| 地域 | 子地区 | 景点 | 机位 | 图片 |
| --- | --- | --- | --- | --- |
| socal | 6 | 47 | 141 | 135 |
| dc | 7 | 49 | 159 | 146 |
| nyc | 6 | 47 | 159 | 140 |
| yellowstone | 7 | 60 | 172 | 175 |

线上地址：https://andyuneducated.github.io/wander-usa-2026-guides/

## 恢复后要做的三件事

### 1. 准确性复核：还剩 3 份没做完

清单在 `tools/review/claims-<region>.md`。**已完成的不要重做。**

| 片段 | 状态 |
| --- | --- |
| `socal/data.js` 全部 | ✅ 完成 |
| `dc/parts/*.js` 全部 | ✅ 完成 |
| `nyc/parts/01-salem-north-shore.js` | ✅ 完成 |
| `nyc/parts/02-boston-cambridge.js` | ✅ 完成 |
| `nyc/parts/03-hudson-valley.js` | ✅ 完成 |
| `nyc/parts/04-manhattan-midtown.js` | ✅ 完成 |
| `nyc/parts/05-manhattan-downtown.js` | ❌ 待做 |
| `nyc/parts/06-brooklyn.js` | ❌ 待做 |
| `yellowstone/parts/01-bitterroot.js` | ❌ 待做 |
| `yellowstone/parts/02-butte-paradise.js` | ❌ 待做 |
| `yellowstone/parts/04-beartooth-chief-joseph.js` | ❌ 待做 |
| `yellowstone/parts/03-mammoth-lamar.js` | ❌ 待做 |
| `yellowstone/parts/05-canyon-hayden.js` | ❌ 待做 |
| `yellowstone/parts/06-geyser-basins.js` | ❌ 待做 |
| `yellowstone/parts/08-grand-teton.js` | ❌ 待做 |

**派研究员时的两条硬性约束**，两条都是踩过坑才加的：

- **一个片段只能有一位研究员。** 这个项目已经因为两位同时写同一个文件丢过工作：`dc/parts/02-philadelphia-parkway.js` 派了两位，后一位的完整版把前一位查出的 Fairmount Water Works 开放时间覆盖掉了，事后才手工补回。`yellowstone/parts/06-geyser-basins.js` 也被覆盖过一次，从 git 恢复的。
- **要求边查边写，不要研究完再一起存。** 纽约和黄石的第一轮复核都是超时挂掉的，纽约那位因为是逐个文件写的，4 个文件的成果保住了；黄石那位一次性做 178 条声明，什么都没留下。**黄石那份清单必须拆开派**，别再整份丢给一个研究员。

### 2. 剩 6 张远程图片没本地化

不是数据错误。Wikimedia 在对本机 IP 限流（HTTP 429），换 IP 能正常访问，所以线上访客看得到图。本地已有 590 张全部校验有效。

```
python3 tools/verify_images.py --local-only   # 确认本地图完好
python3 tools/localize_images.py --region dc          # 剩 2 张
python3 tools/localize_images.py --region yellowstone # 剩 4 张
```

限流很顽固，我最后是用「先冷却 45 分钟再试」的循环在跑（已停掉）。要重启就用 `tools/run_detached.py` 起，macOS 的 `nohup` 不能真正脱离终端，直接后台跑会被杀。

### 3. 全量测试

```
python3 tools/check_all.py                 # 数据完整性
python3 tools/test_pages.py                # 本地浏览器测试，两个视口
python3 tools/test_pages.py --base https://andyuneducated.github.io/wander-usa-2026-guides/
```

## 还没解决的一件事

删除两个旧 GitHub 仓库（`wander-usa-2026`、`socal-roadtrip-report`）需要 `delete_repo` 权限，我没法代跑交互式命令。你要删的话：

```
gh auth refresh -s delete_repo
gh repo delete AndyUneducated/wander-usa-2026 --yes
gh repo delete AndyUneducated/socal-roadtrip-report --yes
```

socal 的提交历史已经通过 `git subtree` 完整并进本仓库，旧仓库删了不会丢东西。

## 工具速查

| 工具 | 作用 |
| --- | --- |
| `assemble.py --region <r>` | 把 `parts/*.js` 合成 `data.js`，按纬度从北到南排序并重编号；会跳过还没有景点的骨架片段 |
| `check_all.py` | 全站完整性：必填字段、坐标、图片、排序、链接 |
| `test_pages.py` | Playwright 浏览器测试；会强制展开所有折叠区并把图片改成 eager，所以能查到藏在折叠里的坏图 |
| `verify_images.py` | 直接查 Commons API 与本地文件魔数，能抓出浏览器测不出来的文件名拼写错误 |
| `snapshot_parts.py --save/--check` | 片段快照与回退检测，防并发覆盖 |
| `extract_claims.py` | 从数据里抽高风险声明生成复核清单 |
| `reorder_north_south.py --region <r>` | 重新按纬度排序 |
| `run_detached.py` | 起真正脱离终端的后台任务（macOS 用） |
