#!/usr/bin/env python3
"""Live summary of image-download progress per region, plus stall detection.

localize_images.py updates <region>/img/.progress.json after each URL, and a
5-second heartbeat thread keeps ticking even if a download is stuck on a socket.
Those two signals distinguish three states:

  running       heartbeat is fresh (<30s) and done is increasing
  likely stalled  heartbeat is fresh but done has not moved for a long time
                  (rate-limit cooldown looks like this; often normal)
  process dead  heartbeat expired (>60s) and finished=false — needs a human

Usage:
    python3 tools/watch_progress.py                 # print one snapshot
    python3 tools/watch_progress.py --watch         # refresh until everything finishes
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

HEARTBEAT_DEAD_AFTER = 60.0   # treat the process as dead if the heartbeat is this stale
STALL_WARN_AFTER = 240.0      # warn if done has not increased for this long (likely rate-limit cooldown)


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
    """Print one snapshot; return (all finished, any issue that needs a human)."""
    now = time.time()
    all_done = True
    trouble = []

    print(f"—— {time.strftime('%H:%M:%S')} ——")
    for st in read_all():
        slug = st["region"]

        if st.get("missing"):
            print(f"  {slug:12s} not started yet")
            all_done = False
            continue
        if st.get("unreadable"):
            print(f"  {slug:12s} progress file is corrupt")
            all_done = False
            continue

        total = st.get("total", 0)
        done = st.get("done", 0)
        ok, sk, fa = st.get("ok", 0), st.get("skipped", 0), st.get("failed", 0)
        age = now - st.get("updated_at", 0)
        elapsed = now - st.get("started_at", now)
        finished = st.get("finished", False)
        pid = st.get("pid")

        # whether done is advancing
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
            status = f"❌ process dead (heartbeat stopped {fmt_dur(age)} ago)"
            trouble.append(f"{slug}: process dead, needs restart — {done}/{total} done")
            all_done = False
        elif stalled_for > STALL_WARN_AFTER:
            status = f"⚠️  no progress for {fmt_dur(stalled_for)} (likely rate-limit cooldown)"
            all_done = False
        else:
            status = "⏳ " + st.get("phase", "running")
            all_done = False

        print(f"  {slug:12s} {bar} {done:3d}/{total:<3d} {pct:5.1f}%  "
              f"ok {ok} skipped {sk} failed {fa}  elapsed {fmt_dur(elapsed)}  {status}")

        cur = st.get("current")
        if cur and not finished:
            print(f"  {'':12s} current: {cur}")
        for f in st.get("recent_failures", [])[-3:]:
            print(f"  {'':12s} ✗ {f.get('why', '')[:70]}")

    if trouble:
        print("\nneeds human intervention:")
        for t in trouble:
            print("  " + t)

    return all_done, bool(trouble)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--watch", action="store_true", help="keep refreshing")
    ap.add_argument("--interval", type=int, default=15, help="refresh interval in seconds")
    ap.add_argument("--max-min", type=int, default=120, help="maximum minutes to watch")
    args = ap.parse_args()

    prev_done, prev_change_at = {}, {}
    deadline = time.time() + args.max_min * 60

    while True:
        all_done, trouble = snapshot(prev_done, prev_change_at)
        if not args.watch:
            return 0
        if all_done:
            print("\nall regions finished.")
            return 0
        if trouble:
            print("\ndead process detected; exiting so a human can handle it.")
            return 3
        if time.time() > deadline:
            print(f"\nhit the {args.max_min}-minute watch limit; exiting.")
            return 4
        print()
        time.sleep(args.interval)


if __name__ == "__main__":
    signal.signal(signal.SIGINT, lambda *_: (_ for _ in ()).throw(SystemExit(130)))
    raise SystemExit(main())
