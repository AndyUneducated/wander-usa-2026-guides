#!/usr/bin/env python3
"""抽出数据里「会过期、可被外部核对」的事实性声明，生成复核清单。

check_all.py 查的是内部一致性（字段齐不齐、排序对不对），它无法判断
「开放时间 10:00–17:00」是否真的正确。这个脚本把这类需要对外核对的声明
集中导出，交给复核研究员逐条比对官网。

优先级判定：
  P0  声明景点不可抵达/已消失（gone），或写了「关闭」「已拆除」——
      判错的代价最大：会让人白跑，或者错误地劝退一个还开着的地方
  P1  含具体日期、价格、时刻的声明——最容易过期
  P2  预约与门票要求
  P3  其余

用法：
  python3 tools/extract_claims.py                    # 全部地域，按优先级汇总
  python3 tools/extract_claims.py --region dc        # 单个地域
  python3 tools/extract_claims.py --p0               # 只看最高风险的
  python3 tools/extract_claims.py --out sheet.md     # 写成文件给研究员
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGIONS = ['socal', 'dc', 'nyc', 'yellowstone']

# 触发升级到 P1 的模式：具体时刻、日期、金额
RE_TIME = re.compile(r'\d{1,2}:\d{2}')
RE_DATE = re.compile(r'\d{1,2}\s*[/月]\s*\d{1,2}|\d{4}\s*年|周[一二三四五六日]')
RE_MONEY = re.compile(r'\$\s?\d|\d+\s*美元|免费')
# 只有「长期/无限期」性质的关闭才算 P0。
# 「周一闭馆」这类常规休息日是正常信息，不该混进最高优先级。
RE_INDEFINITE = re.compile(
    r'已拆|拆除|永久关闭|长期封闭|无限期|另行通知|无解封|无时间表|不可进入|'
    r'已移除|已停运|不再开放|停止开放|已焚毁|烧毁')


def load(region: str):
    """用 node 把 data.js 转成 JSON 读进来，避免自己写 JS 解析器。"""
    data = ROOT / region / 'data.js'
    if not data.exists():
        return []
    res = subprocess.run(
        ['node', '-e',
         'const fs=require("fs");'
         'const src=fs.readFileSync(process.argv[1],"utf8");'
         # 包一层函数，避免脚本里的 const 与 data.js 的 var REGIONS 撞名
         'const out=new Function(src+"; return REGIONS;")();'
         'process.stdout.write(JSON.stringify(out));',
         str(data)],
        capture_output=True, text=True)
    if res.returncode != 0:
        print(f'⚠️ {region}/data.js 读取失败：{res.stderr[:200]}', file=sys.stderr)
        return []
    return json.loads(res.stdout)


def priority(spot: dict, field: str, value: str) -> str:
    """gone 景点本身的判定单独在 collect() 里定为 P0，这里只管 access 各字段。

    一个 gone 景点的门票、停车信息判错的代价很小（反正去不了），
    所以不跟着升级，否则 P0 会被灌满而失去筛选意义。
    """
    v = value or ''
    if not spot.get('gone') and RE_INDEFINITE.search(v):
        return 'P0'
    if field == 'hours':
        return 'P1' if (RE_TIME.search(v) or RE_DATE.search(v)) else 'P2'
    if field == 'ticket':
        return 'P1' if RE_MONEY.search(v) else 'P2'
    if field == 'book':
        return 'P1' if RE_DATE.search(v) else 'P2'
    return 'P3'


LABEL = {'book': '预约', 'ticket': '门票', 'hours': '开放时间',
         'parking': '停车', 'walk': '步行'}


def collect(regions_filter=None):
    rows = []
    for region in REGIONS:
        if regions_filter and region != regions_filter:
            continue
        for sub in load(region):
            for sp in sub['spots']:
                base = {
                    'region': region,
                    'sub': sub.get('navName') or sub.get('name'),
                    'n': sp.get('n'),
                    'en': sp.get('en'),
                    'gone': bool(sp.get('gone')),
                    'score': sp.get('score'),
                    'id': sp.get('id'),
                }
                if sp.get('gone'):
                    rows.append({**base, 'field': 'gone',
                                 'label': '★不可抵达判定（需二次确认真的去不了）',
                                 'value': sp.get('goneWhy') or sp.get('tldr') or '（无说明）',
                                 'p': 'P0'})
                acc = sp.get('access') or {}
                for field in ('hours', 'ticket', 'book', 'parking', 'walk'):
                    v = acc.get(field)
                    if not v:
                        continue
                    v = re.sub(r'<[^>]+>', '', str(v)).strip()
                    rows.append({**base, 'field': field, 'label': LABEL[field],
                                 'value': v, 'p': priority(sp, field, v)})
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--region', choices=REGIONS)
    ap.add_argument('--p0', action='store_true', help='只输出 P0')
    ap.add_argument('--max-p', default='P3', choices=['P0', 'P1', 'P2', 'P3'])
    ap.add_argument('--out', help='写入文件')
    args = ap.parse_args()

    rows = collect(args.region)
    cap = 'P0' if args.p0 else args.max_p
    keep = [p for p in ('P0', 'P1', 'P2', 'P3') if p <= cap]
    rows = [r for r in rows if r['p'] in keep]

    lines = []
    counts = {p: 0 for p in ('P0', 'P1', 'P2', 'P3')}
    for r in rows:
        counts[r['p']] += 1

    lines.append('# 数据准确性复核清单\n')
    lines.append('每条都需要对着官方来源核对。改动请回写到 '
                 '`<region>/parts/*.js`（socal 直接改 `socal/data.js`），'
                 '然后重新跑 `tools/assemble.py`。\n')
    lines.append('| 优先级 | 条数 | 含义 |')
    lines.append('| --- | --- | --- |')
    lines.append(f'| P0 | {counts["P0"]} | 声明不可抵达或已关闭，判错代价最大 |')
    lines.append(f'| P1 | {counts["P1"]} | 含具体时刻/日期/价格，最易过期 |')
    lines.append(f'| P2 | {counts["P2"]} | 预约与门票要求 |')
    lines.append(f'| P3 | {counts["P3"]} | 停车与步行等 |')
    lines.append('')

    for p in keep:
        group = [r for r in rows if r['p'] == p]
        if not group:
            continue
        lines.append(f'\n## {p}（{len(group)} 条）\n')
        cur = None
        for r in group:
            tag = f'{r["region"]} / {r["sub"]}'
            if tag != cur:
                lines.append(f'\n### {tag}\n')
                cur = tag
            flag = ' **[标记为不可抵达]**' if r['gone'] and r['field'] != 'gone' else ''
            lines.append(f'- `{r["id"]}` **{r["n"]}. {r["en"]}**{flag}  \n'
                         f'  {r["label"]}：{r["value"]}')

    text = '\n'.join(lines) + '\n'
    if args.out:
        Path(args.out).write_text(text)
        print(f'已写入 {args.out}（{len(rows)} 条）')
    else:
        print(text)
    for p in ('P0', 'P1', 'P2', 'P3'):
        if counts[p]:
            print(f'  {p}: {counts[p]} 条', file=sys.stderr)
    return 0


if __name__ == '__main__':
    sys.exit(main())
