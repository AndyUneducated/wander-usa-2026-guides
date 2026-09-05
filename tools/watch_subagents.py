#!/usr/bin/env python3
"""监控研究 subagent 是否卡死，并核对它们该交的文件是否已落盘。

用两个独立信号判断状态，避免误杀正在长时间联网检索的 agent：

  transcript 新鲜度   .jsonl 的 mtime。写工具调用时会持续更新
  产物是否落盘        parts/ 下对应的片段文件是否存在、大小是否合理

组合出四种状态：

  ✅ 已交付      片段文件存在且能通过 node --check
  ⏳ 进行中      transcript 在动（< STALE_MIN 分钟），片段还没出现
  ⚠️  可疑        transcript 停了 STALE_MIN–DEAD_MIN 分钟，可能在长检索
  ❌ 疑似卡死    transcript 停了超过 DEAD_MIN 分钟且无产物 —— 该断掉重派

用法：
    python3 tools/watch_subagents.py
    python3 tools/watch_subagents.py --watch --interval 60
"""

import argparse
import json
import subprocess
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TRANSCRIPTS = Path.home() / '.cursor' / 'projects'

STALE_MIN = 8.0    # transcript 停这么久开始可疑
DEAD_MIN = 20.0    # 停这么久且无产物，判定卡死

# 派活时约定的产物路径 → 便于核对。key 是给人看的任务名
EXPECTED = {
    'dc': [
        '01-philadelphia-oldcity.js',
        '02-philadelphia-parkway.js',
        '03-national-mall.js',
        '04-capitol-hill.js',
        '05-museums.js',
        '06-northern-virginia.js',
        '07-dc-neighborhoods.js',
    ],
    'nyc': [
        '01-salem-north-shore.js',
        '02-boston-cambridge.js',
        '03-hudson-valley.js',
        '04-manhattan-uptown.js',
        '05-manhattan-downtown.js',
        '06-brooklyn.js',
    ],
    'yellowstone': [
        '01-bitterroot.js',
        '02-butte-paradise.js',
        '03-mammoth-lamar.js',
        '04-beartooth-chief-joseph.js',
        '05-canyon-hayden.js',
        '06-geyser-basins.js',
        '08-grand-teton.js',
    ],
}


def find_transcripts():
    """找出所有 subagent transcript，返回 (mtime, 行数, 路径)。"""
    out = []
    for p in TRANSCRIPTS.glob('*/agent-transcripts/*/subagents/*.jsonl'):
        try:
            st = p.stat()
        except OSError:
            continue
        out.append((st.st_mtime, p))
    return sorted(out, reverse=True)


def check_part(region: str, fname: str):
    """返回 (状态字符串, 景点数或 None)。"""
    p = ROOT / region / 'parts' / fname
    if not p.exists():
        return 'missing', None
    if p.stat().st_size < 2000:
        return 'too-small', None
    res = subprocess.run(['node', '-e',
                          'const r=require(process.argv[1]);'
                          'process.stdout.write(String((r.spots||[]).length))',
                          str(p)], capture_output=True, text=True)
    if res.returncode != 0:
        return 'broken', None
    try:
        return 'ok', int(res.stdout.strip())
    except ValueError:
        return 'broken', None


def fmt_ago(minutes: float) -> str:
    if minutes < 60:
        return f'{minutes:.0f} 分钟前'
    return f'{minutes / 60:.1f} 小时前'


def snapshot() -> bool:
    """打印一次快照。返回 True 表示全部产物已交付。"""
    now = time.time()
    print(f'—— {time.strftime("%H:%M:%S")} 产物核对 ——')

    all_ok = True
    for region, files in EXPECTED.items():
        rows = []
        for f in files:
            state, n = check_part(region, f)
            if state == 'ok':
                rows.append(f'  ✅ {f:34s} {n:2d} 个景点')
            else:
                all_ok = False
                label = {'missing': '未交付', 'too-small': '文件过小',
                         'broken': '无法 require'}[state]
                rows.append(f'  ⬜ {f:34s} {label}')
        done = sum(1 for r in rows if r.lstrip().startswith('✅'))
        print(f'{region}  {done}/{len(files)} 已交付')
        for r in rows:
            print(r)

    print(f'\n—— transcript 活跃度（仅供参考，判断卡死请以上面的产物核对为准）——')
    print('   说明：subagent 在密集调用工具时不会即时写 transcript，'
          '行数停滞很常见。\n'
          '   只有「产物未交付」+「transcript 长时间停滞」同时成立，才值得断掉重派。')
    ts = find_transcripts()
    if not ts:
        print('  没找到任何 subagent transcript')
    shown = 0
    for mtime, path in ts:
        age_min = (now - mtime) / 60
        if age_min > 180:      # 三小时以上的当作历史记录，不再列出
            continue
        try:
            lines = sum(1 for _ in path.open())
        except OSError:
            lines = -1
        if age_min > DEAD_MIN:
            mark = '⚠️  长时间停滞'
        elif age_min > STALE_MIN:
            mark = '·  短暂停滞'
        else:
            mark = '⏳ 活跃'
        print(f'  {mark:12s} {path.stem[:8]}  {lines:4d} 行  最后活动 {fmt_ago(age_min)}')
        shown += 1
    if shown == 0:
        print('  近三小时内没有活跃的 subagent')

    return all_ok


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--watch', action='store_true')
    ap.add_argument('--interval', type=int, default=60)
    ap.add_argument('--max-min', type=int, default=120)
    args = ap.parse_args()

    deadline = time.time() + args.max_min * 60
    while True:
        if snapshot():
            print('\n全部产物已交付。')
            return 0
        if not args.watch:
            return 0
        if time.time() > deadline:
            print(f'\n达到 {args.max_min} 分钟上限，退出。')
            return 4
        print()
        time.sleep(args.interval)


if __name__ == '__main__':
    raise SystemExit(main())
