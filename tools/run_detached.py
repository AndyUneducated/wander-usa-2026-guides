#!/usr/bin/env python3
"""把一条命令放到全新的会话里跑，使其不受启动它的 shell 生死影响。

存在的原因：图片本地化要跑一两个小时，用 `nohup cmd &` 起在 agent 的
shell 会话里，会话结束时进程会被一起回收；macOS 又没有 setsid 可用。
这里用 fork + os.setsid 自己做一次脱离。

用法：
  python3 tools/run_detached.py --log /tmp/x.log -- python3 tools/localize_images.py --region dc
"""
from __future__ import annotations

import argparse
import os
import subprocess
import sys
import time


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--log', required=True, help='stdout/stderr 输出到该文件')
    ap.add_argument('--pidfile', help='把子进程 pid 写到该文件')
    ap.add_argument('cmd', nargs=argparse.REMAINDER,
                    help='-- 之后是要执行的命令')
    args = ap.parse_args()

    cmd = args.cmd[1:] if args.cmd and args.cmd[0] == '--' else args.cmd
    if not cmd:
        sys.exit('没有给出要执行的命令；用 -- 分隔')

    # 第一次 fork：父进程立刻返回，让调用它的 shell 不必等待
    if os.fork() > 0:
        time.sleep(1.0)
        if args.pidfile and os.path.exists(args.pidfile):
            with open(args.pidfile) as f:
                print(f'已脱离启动，pid={f.read().strip()}，日志 {args.log}')
        else:
            print(f'已脱离启动，日志 {args.log}')
        os._exit(0)

    # 子进程自立门户，脱离原来的会话与控制终端
    os.setsid()

    with open(args.log, 'ab', buffering=0) as log:
        os.dup2(log.fileno(), 1)
        os.dup2(log.fileno(), 2)
        devnull = os.open(os.devnull, os.O_RDONLY)
        os.dup2(devnull, 0)
        p = subprocess.Popen(cmd)
        if args.pidfile:
            with open(args.pidfile, 'w') as f:
                f.write(str(p.pid))
        p.wait()
    os._exit(0)


if __name__ == '__main__':
    main()
