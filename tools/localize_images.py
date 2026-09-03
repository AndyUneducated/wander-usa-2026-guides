#!/usr/bin/env python3
"""
把 assets/data.js 里引用的远程图片下载到 assets/img/，并把 data.js 中的 URL 改写为本地路径。

这样页面不再依赖外部图床（Wikimedia 会对热链做限流），发布到 GitHub Pages 后也能稳定显示。
可重复执行：已经是本地路径的会跳过，已下载过的文件不会重复下载。

用法：
    python3 tools/localize_images.py            # 下载并改写
    python3 tools/localize_images.py --check    # 只检查，不改动
"""

import hashlib
import re
import ssl
import sys
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
DATA = ROOT / "assets" / "data.js"
IMG_DIR = ROOT / "assets" / "img"
CREDITS = ROOT / "assets" / "img" / "CREDITS.md"

# Wikimedia 要求带上能识别来源的 User-Agent，否则容易吃 429
UA = "socal-roadtrip-report/1.0 (static travel report; contact via GitHub AndyUneducated)"

EXT_BY_TYPE = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
}


def slugify(url: str) -> str:
    """由 URL 生成稳定、可读、不冲突的文件名。"""
    name = urllib.parse.unquote(url.rsplit("/", 1)[-1])
    name = re.sub(r"\.(jpg|jpeg|png|webp|gif)$", "", name, flags=re.I)
    name = re.sub(r"^\d+px-", "", name)
    name = re.sub(r"[^A-Za-z0-9]+", "-", name).strip("-").lower()[:60]
    digest = hashlib.sha1(url.encode()).hexdigest()[:8]
    return f"{name or 'img'}-{digest}"


# Wikimedia 只接受固定几档缩略图宽度，其它宽度会返回 400。
# 1280px 对网页报告足够，且比原图小一到两个数量级（原图常有 6000–15000px 宽）。
WM_THUMB_SIZES = (1280, 1024, 800, 640)


def url_variants(url: str) -> list[str]:
    """生成候选下载地址：优先缩略图，最后才退回原图。

    data.js 里写的多是 Commons 原图地址，例如
        …/commons/c/c7/Foo.jpg
    对应的缩略图地址是
        …/commons/thumb/c/c7/Foo.jpg/1280px-Foo.jpg
    直接下原图会拖到几十 MB 一张，所以这里统一先转缩略图。
    """
    # 已经是 thumb 链接
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

    # Commons 原图链接 → 先转成缩略图
    m = re.match(r"(https://upload\.wikimedia\.org/wikipedia/commons/)([0-9a-f]/[0-9a-f]{2}/)(.+)$", url)
    if m:
        base, shard, fname = m.groups()
        # SVG 的缩略图后缀是 .png，其余保持原扩展名
        tail = fname + ".png" if fname.lower().endswith(".svg") else fname
        out = [f"{base}thumb/{shard}{fname}/{w}px-{tail}" for w in WM_THUMB_SIZES]
        out.append(url)  # 全部缩略图都失败才退回原图
        return out

    return [url]


def download(url: str, retries: int = 4) -> tuple[bytes, str]:
    """下载图片，遇到 429/5xx 做指数退避重试。返回 (内容, content-type)。"""
    delay = 3.0
    last = None
    for attempt in range(retries):
        req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "image/*"})
        try:
            with urllib.request.urlopen(req, timeout=45, context=SSL_CTX) as resp:
                return resp.read(), resp.headers.get("Content-Type", "").split(";")[0].strip()
        except urllib.error.HTTPError as e:
            last = e
            if e.code in (429, 500, 502, 503, 504) and attempt < retries - 1:
                print(f"    HTTP {e.code}，{delay:.0f}s 后重试…")
                time.sleep(delay)
                delay *= 2
                continue
            raise
        except Exception as e:  # 网络抖动
            last = e
            if attempt < retries - 1:
                time.sleep(delay)
                delay *= 2
                continue
            raise
    raise last  # pragma: no cover


def main() -> int:
    check_only = "--check" in sys.argv

    if not DATA.exists():
        print(f"找不到 {DATA}")
        return 1

    source = DATA.read_text()
    urls = sorted(set(re.findall(r"url:\s*'(https?://[^']+)'", source)))

    if not urls:
        print("data.js 中没有远程图片链接，无需处理。")
        return 0

    print(f"发现 {len(urls)} 个远程图片链接")
    if check_only:
        for u in urls:
            print("  " + u)
        return 0

    IMG_DIR.mkdir(parents=True, exist_ok=True)
    mapping: dict[str, str] = {}
    failures: list[tuple[str, str]] = []

    for i, url in enumerate(urls, 1):
        stem = slugify(url)
        existing = list(IMG_DIR.glob(stem + ".*"))
        if existing:
            mapping[url] = f"assets/img/{existing[0].name}"
            print(f"[{i}/{len(urls)}] 已存在，跳过  {existing[0].name}")
            continue

        print(f"[{i}/{len(urls)}] 下载  {url[:88]}")
        body = ctype = None
        last_err = None
        for cand in url_variants(url):
            try:
                body, ctype = download(cand)
                if cand != url:
                    print(f"    改用可用尺寸  …/{cand.rsplit('/', 1)[-1][:50]}")
                break
            except Exception as e:
                last_err = e
        if body is None:
            print(f"    失败：{last_err}")
            failures.append((url, str(last_err)))
            continue

        if not ctype.startswith("image/"):
            print(f"    跳过：返回的不是图片（{ctype or '未知类型'}）")
            failures.append((url, f"content-type={ctype}"))
            continue

        path = IMG_DIR / (stem + EXT_BY_TYPE.get(ctype, ".jpg"))
        path.write_bytes(body)
        mapping[url] = f"assets/img/{path.name}"
        print(f"    → {path.name}  ({len(body) / 1024:.0f} KB)")
        time.sleep(1.0)  # 对 Wikimedia 友好一点，避免再次触发限流

    # 改写 data.js
    out = source
    for url, local in mapping.items():
        out = out.replace(f"url: '{url}'", f"url: '{local}'")
    if out != source:
        DATA.write_text(out)
        print(f"\ndata.js 已改写 {len(mapping)} 个链接为本地路径")

    # 生成署名文件，满足 CC 协议的署名要求
    lines = [
        "# 图片来源与署名",
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
    CREDITS.write_text("\n".join(lines) + "\n")
    print(f"署名清单已写入 {CREDITS.relative_to(ROOT)}")

    if failures:
        print(f"\n{len(failures)} 个链接失败，需要人工处理：")
        for url, why in failures:
            print(f"  {why}  {url}")
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
