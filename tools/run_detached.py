#!/usr/bin/env python3
"""Run a command in a new session so it outlives the shell that started it.

Why this exists: image localization can take an hour or two. `nohup cmd &`
started from an agent shell is reaped when that session ends, and macOS has no
setsid. This script detaches with fork + os.setsid.

Usage:
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
    ap.add_argument('--log', required=True, help='write stdout/stderr to this file')
    ap.add_argument('--pidfile', help='write the child pid to this file')
    ap.add_argument('cmd', nargs=argparse.REMAINDER,
                    help='command to run after --')
    args = ap.parse_args()

    cmd = args.cmd[1:] if args.cmd and args.cmd[0] == '--' else args.cmd
    if not cmd:
        sys.exit('no command given; separate it with --')

    # first fork: parent returns immediately so the calling shell does not wait
    if os.fork() > 0:
        time.sleep(1.0)
        if args.pidfile and os.path.exists(args.pidfile):
            with open(args.pidfile) as f:
                print(f'detached, pid={f.read().strip()}, log {args.log}')
        else:
            print(f'detached, log {args.log}')
        os._exit(0)

    # child starts a new session, dropping the old session and controlling tty
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
