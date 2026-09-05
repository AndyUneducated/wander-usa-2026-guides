#!/usr/bin/env python3
"""实时汇总各地域图片下载进度，并判断是否卡死。

localize_images.py 每处理完一个链接就更新 <region>/img/.progress.json，
并且有一个 5 秒心跳线程——即使某个下载卡在 socket 上，心跳也会继续走。
于是可以用两个不同的信号区分三种状态：

  运行中      心跳新鲜（<30s），done 在涨
  疑似卡住    心跳新鲜，但 done 长时间不动（限流冷却期会这样，属正常）
  进程已死    心跳过期（>60s）且 finished=false —— 需要人工介入

用法：
    python3 tools/watch_progress.py                 # 打印一次快照
    python3 tools/watch_progress.py --watch         # 持续刷新直到全部结束
    python3 tools/watch_progress.py --watch --interval 20 --max-min 90
"""

import argparse
import json
import os
import signal
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGIONS = ("yellowstone", "nyc", "dc")

HEARTBEAT_DEAD_AFTER = 60.0   # 心跳超过这么久没更新，判定进程已死
STALL_WARN_AFTER = 240.0      # done 超过这么久没涨，提示可能卡在限流冷却


def pid_alive(pid: int) -> bool:
    try:
        os.kill(pid, 0)
    except (OSError, TypeError):
        return False
    return True


def fmt_dur(sec: float) -> str:
    sec = int(sec)
    if sec < 60:
        return f"{sec}s"
    if sec < 3600:
        return f"{sec // 60}m{sec % 60:02d}s"
    return f"{sec // 3600}h{(sec % 3600) // 60:02d}m"


def read_all():
    out = []
    for slug in REGIONS:
        p = ROOT / slug / "img" / ".progress.json"
        if not p.exists():
            out.append({"region": slug, "missing": True})
            continue
        try:
            out.append(json.loads(p.read_text()))
        except (json.JSONDecodeError, OSError):
            out.append({"region": slug, "unreadable": True})
    return out


def snapshot(prev_done: dict, prev_change_at: dict):
    """打印一次快照，返回 (是否全部结束, 是否存在需要人工介入的问题)。"""
    now = time.time()
    all_done = True
    trouble = []

    print(f"—— {time.strftime('%H:%M:%S')} ——")
    for st in read_all():
        slug = st["region"]

        if st.get("missing"):
            print(f"  {slug:12s} 尚未开始")
            all_done = False
            continue
        if st.get("unreadable"):
            print(f"  {slug:12s} 进度文件损坏")
            all_done = False
            continue

        total = st.get("total", 0)
        done = st.get("done", 0)
        ok, sk, fa = st.get("ok", 0), st.get("skipped", 0), st.get("failed", 0)
        age = now - st.get("updated_at", 0)
        elapsed = now - st.get("started_at", now)
        finished = st.get("finished", False)
        pid = st.get("pid")

        # done 是否在推进
        if prev_done.get(slug) != done:
            prev_done[slug] = done
            prev_change_at[slug] = now
        stalled_for = now - prev_change_at.get(slug, now)

        pct = (done / total * 100) if total else 100.0
        bar_len = 24
        filled = int(bar_len * pct / 100)
        bar = "█" * filled + "·" * (bar_len - filled)

        if finished:
            status = "✅ " + st.get("phase", "done")
        elif age > HEARTBEAT_DEAD_AFTER or (pid and not pid_alive(pid)):
            status = f"❌ 进程已死（心跳停 {fmt_dur(age)}）"
            trouble.append(f"{slug}: 进程已死，需重启 —— 已完成 {done}/{total}")
            all_done = False
        elif stalled_for > STALL_WARN_AFTER:
            status = f"⚠️  {fmt_dur(stalled_for)} 无进展（可能在限流冷却）"
            all_done = False
        else:
            status = "⏳ " + st.get("phase", "running")
            all_done = False

        print(f"  {slug:12s} {bar} {done:3d}/{total:<3d} {pct:5.1f}%  "
              f"成功 {ok} 跳过 {sk} 失败 {fa}  用时 {fmt_dur(elapsed)}  {status}")

        cur = st.get("current")
        if cur and not finished:
            print(f"  {'':12s} 当前：{cur}")
        for f in st.get("recent_failures", [])[-3:]:
            print(f"  {'':12s} ✗ {f.get('why', '')[:70]}")

    if trouble:
        print("\n需要人工介入：")
        for t in trouble:
            print("  " + t)

    return all_done, bool(trouble)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--watch", action="store_true", help="持续刷新")
    ap.add_argument("--interval", type=int, default=15, help="刷新间隔秒")
    ap.add_argument("--max-min", type=int, default=120, help="最长监控分钟数")
    args = ap.parse_args()

    prev_done, prev_change_at = {}, {}
    deadline = time.time() + args.max_min * 60

    while True:
        all_done, trouble = snapshot(prev_done, prev_change_at)
        if not args.watch:
            return 0
        if all_done:
            print("\n全部地域已完成。")
            return 0
        if trouble:
            print("\n检测到已死进程，退出以便人工处理。")
            return 3
        if time.time() > deadline:
            print(f"\n达到 {args.max_min} 分钟监控上限，退出。")
            return 4
        print()
        time.sleep(args.interval)


if __name__ == "__main__":
    signal.signal(signal.SIGINT, lambda *_: (_ for _ in ()).throw(SystemExit(130)))
    raise SystemExit(main())
