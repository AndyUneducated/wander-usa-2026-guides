#!/usr/bin/env python3
"""
把某个地域 data.js 里引用的远程图片下载到该地域的 img/ 目录，并改写 data.js 的 URL 为本地路径。

页面因此不再依赖外部图床（Wikimedia 对热链限流很重），发布到 GitHub Pages 后也能稳定显示。
可重复执行：已经是本地路径的会跳过，已下载过的文件不会重复下载。

用法：
    python3 tools/localize_images.py --region yellowstone
    python3 tools/localize_images.py --region dc --check     # 只列出待下载链接

进度监控：
    每处理完一个链接就把状态写入 <region>/img/.progress.json，并且每 5 秒刷新一次心跳。
    配合 tools/watch_progress.py 可以实时看到进度、判断是否卡住。
"""

import argparse
import hashlib
import json
import os
import re
import ssl
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path


def _ssl_context() -> ssl.SSLContext:
    """macOS 的 python.org 安装常缺根证书，优先用 certifi。"""
    try:
        import certifi

        return ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        return ssl.create_default_context()


SSL_CTX = _ssl_context()
ROOT = Path(__file__).resolve().parent.parent

# Wikimedia 要求带上能识别来源的 User-Agent，否则容易吃 429
UA = "wander-usa-2026-guides/1.0 (static travel report; contact via GitHub AndyUneducated)"

EXT_BY_TYPE = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
}

# Wikimedia 只接受固定几档缩略图宽度，其它宽度会返回 400。
# 1280px 对网页报告足够，且比原图小一到两个数量级（原图常有 6000–15000px 宽）。
WM_THUMB_SIZES = (1280, 1024, 800, 640)

# Wikimedia 的限流是突发敏感的：短时间连打几个请求会整段吃 429，
# 之后连本来正常的地址也会被拒。用全局节流器保证**任何两次** HTTP 请求都隔开足够时间，
# 包括尺寸回退与重试在内。
MIN_GAP = 3.0
_last_request_at = 0.0


# ---------------------------------------------------------------- 进度上报


class Progress:
    """把处理进度写成 JSON，供外部实时监控；另起线程刷心跳，便于判断是否卡死。"""

    def __init__(self, path: Path, total: int, region: str):
        self.path = path
        self.state = {
            "region": region,
            "pid": os.getpid(),
            "total": total,
            "done": 0,
            "ok": 0,
            "skipped": 0,
            "failed": 0,
            "current": None,
            "phase": "starting",
            "started_at": time.time(),
            "updated_at": time.time(),
            "finished": False,
            "recent_failures": [],
        }
        self._lock = threading.Lock()
        self._stop = threading.Event()
        self._flush()
        self._hb = threading.Thread(target=self._heartbeat, daemon=True)
        self._hb.start()

    def _heartbeat(self):
        """即使某个下载卡在 socket 上，心跳也会继续更新，让监控端能区分「慢」和「死」。"""
        while not self._stop.wait(5):
            with self._lock:
                self.state["updated_at"] = time.time()
                self._write()

    def _flush(self):
        with self._lock:
            self.state["updated_at"] = time.time()
            self._write()

    def _write(self):
        tmp = self.path.with_suffix(".tmp")
        tmp.write_text(json.dumps(self.state, ensure_ascii=False, indent=1))
        tmp.replace(self.path)

    def set(self, **kw):
        with self._lock:
            self.state.update(kw)
        self._flush()

    def tick(self, result: str, url: str = "", why: str = ""):
        with self._lock:
            self.state["done"] += 1
            self.state[result] = self.state.get(result, 0) + 1
            if result == "failed":
                self.state["recent_failures"] = (
                    self.state["recent_failures"] + [{"url": url, "why": why}]
                )[-10:]
        self._flush()

    def close(self, phase: str):
        self._stop.set()
        self.set(phase=phase, finished=True, current=None)


def log(msg: str):
    print(msg, flush=True)


# ---------------------------------------------------------------- URL 处理


def slugify(url: str) -> str:
    """由 URL 生成稳定、可读、不冲突的文件名。"""
    name = urllib.parse.unquote(url.rsplit("/", 1)[-1])
    name = re.sub(r"\.(jpg|jpeg|png|webp|gif|svg)$", "", name, flags=re.I)
    name = re.sub(r"^\d+px-", "", name)
    name = re.sub(r"[^A-Za-z0-9]+", "-", name).strip("-").lower()[:60]
    digest = hashlib.sha1(url.encode()).hexdigest()[:8]
    return f"{name or 'img'}-{digest}"


def commons_filename(url: str) -> str | None:
    """从 Commons 直链里取出文件名，例如 …/commons/0/02/Foo.jpg → Foo.jpg"""
    m = re.match(
        r"https://upload\.wikimedia\.org/wikipedia/commons/(?:thumb/)?[0-9a-f]/[0-9a-f]{2}/([^/]+)",
        url,
    )
    return urllib.parse.unquote(m.group(1)) if m else None


def api_thumb_url(filename: str, width: int = 1280) -> str | None:
    """用 Commons API 换取缩略图地址。

    直接向 upload.wikimedia.org 请求「尚未生成过」的缩略图会触发源站限流（429），
    而 API 会在服务端完成缩略图生成，并返回 thumb.wikimedia.org 上已就绪的地址，
    该主机不受同一套限流约束。这是绕开 429 的关键。
    """
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "format": "json",
            "prop": "imageinfo",
            "iiprop": "url|size|mime",
            "iiurlwidth": width,
            "titles": "File:" + filename,
        }
    )
    req = urllib.request.Request(
        "https://commons.wikimedia.org/w/api.php?" + q, headers={"User-Agent": UA}
    )
    with urllib.request.urlopen(req, timeout=30, context=SSL_CTX) as resp:
        data = json.load(resp)
    pages = list(data.get("query", {}).get("pages", {}).values())
    if not pages or "imageinfo" not in pages[0]:
        return None
    info = pages[0]["imageinfo"][0]
    # 原图本身比请求宽度还窄时，Wikimedia 拒绝放大并回 400
    # （"Use thumbnail sizes listed on..."），此时直接取原图。
    original_width = info.get("width") or 0
    if original_width and original_width <= width:
        url = info.get("url")
        return url.split("?")[0] if url else None
    thumb = info.get("thumburl") or info.get("url")
    return thumb.split("?")[0] if thumb else None


def url_variants(url: str) -> list[str]:
    """生成候选下载地址：优先缩略图，最后才退回原图。"""
    m = re.match(r"(.*/thumb/)(.+?)/(\d+)px-(.+)$", url)
    if m:
        prefix, filepath, width, tail = m.groups()
        out = [url] if int(width) in WM_THUMB_SIZES else []
        for w in WM_THUMB_SIZES:
            cand = f"{prefix}{filepath}/{w}px-{tail}"
            if cand not in out:
                out.append(cand)
        out.append(prefix.replace("/thumb/", "/") + filepath)
        return out

    m = re.match(
        r"(https://upload\.wikimedia\.org/wikipedia/commons/)([0-9a-f]/[0-9a-f]{2}/)(.+)$", url
    )
    if m:
        base, shard, fname = m.groups()
        # SVG 的缩略图后缀是 .png，其余保持原扩展名
        tail = fname + ".png" if fname.lower().endswith(".svg") else fname
        out = [f"{base}thumb/{shard}{fname}/{w}px-{tail}" for w in WM_THUMB_SIZES]
        out.append(url)
        return out

    return [url]


def _throttle() -> None:
    global _last_request_at
    wait = MIN_GAP - (time.monotonic() - _last_request_at)
    if wait > 0:
        time.sleep(wait)
    _last_request_at = time.monotonic()


def download(url: str, retries: int = 3) -> tuple[bytes, str]:
    """下载图片。遇到 429 长时间退避（限流按分钟计，秒级重试没有意义）。"""
    last = None
    for attempt in range(retries):
        _throttle()
        req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "image/*"})
        try:
            with urllib.request.urlopen(req, timeout=45, context=SSL_CTX) as resp:
                ctype = resp.headers.get("Content-Type", "").split(";")[0].strip()
                return resp.read(), ctype
        except urllib.error.HTTPError as e:
            last = e
            if e.code == 429 and attempt < retries - 1:
                cool = 45 * (attempt + 1)
                log(f"    HTTP 429 限流，冷却 {cool}s…")
                time.sleep(cool)
                continue
            if e.code in (500, 502, 503, 504) and attempt < retries - 1:
                time.sleep(5)
                continue
            raise
        except Exception as e:
            last = e
            if attempt < retries - 1:
                time.sleep(5)
                continue
            raise
    raise last  # pragma: no cover


# ---------------------------------------------------------------- 主流程


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--region", required=True, help="地域目录名，如 yellowstone / nyc / dc")
    ap.add_argument("--check", action="store_true", help="只列出待下载链接，不实际下载")
    args = ap.parse_args()

    region_dir = ROOT / args.region
    data = region_dir / "data.js"
    img_dir = region_dir / "img"
    credits = img_dir / "CREDITS.md"
    progress_path = img_dir / ".progress.json"

    # 改写目标：如果该地域有 parts/，data.js 是 tools/assemble.py 生成的，
    # 直接改 data.js 会在下次拼装时被覆盖，所以必须改片段源文件。
    parts_dir = region_dir / "parts"
    if parts_dir.is_dir():
        targets = sorted(parts_dir.glob("*.js"))
        log(f"[{args.region}] 改写目标为 {len(targets)} 个片段文件"
            f"（data.js 由 assemble.py 生成，改它会被覆盖）")
    elif data.exists():
        targets = [data]
    else:
        log(f"找不到 {data}，也没有 {parts_dir}")
        return 1

    # 片段用 JS 单引号，assemble 生成的 data.js 用 JSON 双引号，两种都要认
    URL_RE = re.compile(r"""["']?url["']?\s*:\s*(['"])(https?://[^'"]+)\1""")
    sources = {p: p.read_text() for p in targets}
    urls = sorted({m.group(2) for s in sources.values() for m in URL_RE.finditer(s)})

    if not urls:
        log(f"[{args.region}] 没有远程图片链接，无需处理。")
        img_dir.mkdir(parents=True, exist_ok=True)
        Progress(progress_path, 0, args.region).close("nothing-to-do")
        return 0

    log(f"[{args.region}] 发现 {len(urls)} 个远程图片链接")
    if args.check:
        for u in urls:
            log("  " + u)
        return 0

    img_dir.mkdir(parents=True, exist_ok=True)
    prog = Progress(progress_path, len(urls), args.region)
    prog.set(phase="downloading")

    mapping: dict[str, str] = {}
    failures: list[tuple[str, str]] = []

    for i, url in enumerate(urls, 1):
        stem = slugify(url)
        prog.set(current=f"[{i}/{len(urls)}] {stem}")

        existing = [p for p in img_dir.glob(stem + ".*") if p.suffix != ".tmp"]
        if existing:
            mapping[url] = f"img/{existing[0].name}"
            log(f"[{i}/{len(urls)}] 已存在，跳过  {existing[0].name}")
            prog.tick("skipped")
            continue

        log(f"[{i}/{len(urls)}] 下载  {url[:88]}")
        body = ctype = None
        last_err = None

        # 优先走 API 换取的 thumb.wikimedia.org 地址，避开 upload 主机的源站限流
        candidates = []
        fname = commons_filename(url)
        if fname:
            # API 查询本身也会吃 429。此时立刻改打 upload 主机只会让限流更重，
            # 所以先冷却再重试 API，把直链当最后手段。
            for attempt in range(3):
                try:
                    _throttle()
                    thumb = api_thumb_url(fname)
                    if thumb:
                        candidates.append(thumb)
                    break
                except urllib.error.HTTPError as e:
                    if e.code == 429 and attempt < 2:
                        cool = 60 * (attempt + 1)
                        log(f"    API 限流，冷却 {cool}s 后重试…")
                        time.sleep(cool)
                        continue
                    log(f"    API 查询失败，改用直链：{e}")
                    break
                except Exception as e:
                    log(f"    API 查询失败，改用直链：{e}")
                    break
        candidates += [u for u in url_variants(url) if u not in candidates]

        for cand in candidates:
            try:
                body, ctype = download(cand)
                if cand != url:
                    log(f"    改用可用尺寸  …/{cand.rsplit('/', 1)[-1][:50]}")
                break
            except Exception as e:
                last_err = e

        if body is None:
            log(f"    失败：{last_err}")
            failures.append((url, str(last_err)))
            prog.tick("failed", url, str(last_err))
            continue

        if not ctype.startswith("image/"):
            why = f"content-type={ctype or '未知'}"
            log(f"    跳过：返回的不是图片（{why}）")
            failures.append((url, why))
            prog.tick("failed", url, why)
            continue

        path = img_dir / (stem + EXT_BY_TYPE.get(ctype, ".jpg"))
        path.write_bytes(body)
        mapping[url] = f"img/{path.name}"
        log(f"    → {path.name}  ({len(body) / 1024:.0f} KB)")
        prog.tick("ok")

    # 改写源文件（片段或 data.js），两种引号格式都替换
    prog.set(phase="rewriting", current=None)
    rewritten = 0
    for path, source in sources.items():
        out = source
        for url, local in mapping.items():
            for qc in ("'", '"'):
                out = out.replace(f"url: {qc}{url}{qc}", f"url: {qc}{local}{qc}")
                out = out.replace(f'"url": {qc}{url}{qc}', f'"url": {qc}{local}{qc}')
        if out != source:
            path.write_text(out)
            rewritten += 1
    if rewritten:
        log(f"\n[{args.region}] 已在 {rewritten} 个文件中改写 {len(mapping)} 个链接为本地路径")
        if parts_dir.is_dir():
            log(f"[{args.region}] 重新拼装 data.js")
            subprocess.run(
                [sys.executable, str(ROOT / "tools" / "assemble.py"),
                 "--region", args.region],
                check=False)

    # 生成署名文件，满足 CC 协议的署名要求
    lines = [
        f"# 图片来源与署名 · {args.region}",
        "",
        "本目录图片下载自 Wikimedia Commons 等公开图库，版权归原作者，",
        "按其原始许可协议（多为 CC BY-SA / CC0 / Public Domain）使用，仅作取景参考。",
        "如需商用请自行核对每张图片的具体许可。",
        "",
        "| 本地文件 | 原始地址 |",
        "| --- | --- |",
    ]
    for url, local in sorted(mapping.items(), key=lambda kv: kv[1]):
        lines.append(f"| `{Path(local).name}` | <{url}> |")
    credits.write_text("\n".join(lines) + "\n")
    log(f"署名清单已写入 {credits.relative_to(ROOT)}")

    if failures:
        prog.close("done-with-failures")
        log(f"\n[{args.region}] {len(failures)} 个链接失败，需要人工处理：")
        for url, why in failures:
            log(f"  {why}  {url}")
        return 2

    prog.close("done")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
