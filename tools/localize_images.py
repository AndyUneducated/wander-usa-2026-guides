#!/usr/bin/env python3
"""
Download remote images referenced in a region's data.js into that region's img/ directory,
and rewrite the URLs in data.js to local paths.

Pages then no longer depend on an external image host (Wikimedia rate-limits hotlinking hard),
and they still display reliably after publishing to GitHub Pages.
Safe to re-run: already-local paths are skipped, and files already downloaded are not fetched again.

Usage:
    python3 tools/localize_images.py --region yellowstone
    python3 tools/localize_images.py --region dc --check     # list pending URLs only

Progress monitoring:
    After each URL, status is written to <region>/img/.progress.json, with a heartbeat every 5 seconds.
    Pair with tools/watch_progress.py to watch progress live and tell whether a run is stuck.
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
    """python.org installs on macOS often lack root certs; prefer certifi."""
    try:
        import certifi

        return ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        return ssl.create_default_context()


SSL_CTX = _ssl_context()
ROOT = Path(__file__).resolve().parent.parent

# Wikimedia wants a recognizable User-Agent; otherwise 429s are common
UA = "wander-usa-2026-guides/1.0 (static travel report; contact via GitHub AndyUneducated)"

EXT_BY_TYPE = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
}

# Wikimedia only accepts a fixed set of thumbnail widths; other widths are rejected.
# Production sizes: https://w.wiki/GHai :
#   20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920, 3840
# Keep only the sizes that make sense for a web report. The old 1024/800/640
# values are not on the list, so they reliably returned
# "400 Use thumbnail sizes listed on..." — that is how three images failed.
WM_THUMB_SIZES = (1280, 960, 500, 330)

# Wikimedia rate limits are burst-sensitive: a few requests in a short window
# earn a stretch of 429s, after which even otherwise-fine URLs are refused.
# A global throttle keeps **any two** HTTP requests (including size fallbacks
# and retries) at least MIN_GAP apart.
MIN_GAP = 3.0
_last_request_at = 0.0


# ---------------------------------------------------------------- progress reporting


class Progress:
    """Write progress as JSON for live monitoring; a side thread heartbeats so we can tell if a run is dead."""

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
        """Even if a download is stuck on a socket, the heartbeat keeps updating so monitors can tell slow from dead."""
        while not self._stop.wait(5):
            with self._lock:
                self.state["updated_at"] = time.time()
                self._write()

    def _flush(self):
        with self._lock:
            self.state["updated_at"] = time.time()
            self._write()

    def _write(self):
        # Progress files are for monitoring only; a write failure must not abort the whole download.
        # On Windows, os.replace can sporadically raise PermissionError if antivirus or the indexer
        # briefly holds the target — that once killed the job at image 31/95. Retry a few times;
        # if it still fails, skip this write.
        tmp = self.path.with_suffix(".tmp")
        try:
            tmp.write_text(json.dumps(self.state, ensure_ascii=False, indent=1),
                           encoding="utf-8")
        except OSError:
            return
        for delay in (0, 0.05, 0.2, 0.5):
            if delay:
                time.sleep(delay)
            try:
                tmp.replace(self.path)
                return
            except PermissionError:
                continue
            except OSError:
                return

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


# ---------------------------------------------------------------- URL handling


def slugify(url: str) -> str:
    """Build a stable, readable, collision-resistant filename from a URL."""
    name = urllib.parse.unquote(url.rsplit("/", 1)[-1])
    name = re.sub(r"\.(jpg|jpeg|png|webp|gif|svg)$", "", name, flags=re.I)
    name = re.sub(r"^\d+px-", "", name)
    name = re.sub(r"[^A-Za-z0-9]+", "-", name).strip("-").lower()[:60]
    digest = hashlib.sha1(url.encode()).hexdigest()[:8]
    return f"{name or 'img'}-{digest}"


def commons_filename(url: str) -> str | None:
    """Pull the filename out of a Commons direct URL, e.g. …/commons/0/02/Foo.jpg → Foo.jpg"""
    m = re.match(
        r"https://upload\.wikimedia\.org/wikipedia/commons/(?:thumb/)?[0-9a-f]/[0-9a-f]{2}/([^/]+)",
        url,
    )
    return urllib.parse.unquote(m.group(1)) if m else None


def api_thumb_url(filename: str, width: int = 1280) -> str | None:
    """Ask the Commons API for a thumbnail URL.

    Requesting a thumbnail that has never been generated from upload.wikimedia.org
    trips origin rate limits (429). The API generates the thumbnail server-side
    and returns a ready URL on thumb.wikimedia.org, which is not under that
    same limit. That is the key to avoiding 429s.
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
    mime = (info.get("mime") or "").lower()
    original_width = info.get("width") or 0

    # Browsers will not render TIFF etc. (HAER architectural photos are often
    # image/tiff). Always swap in a server-generated JPEG/PNG thumbnail, even
    # if the original is sharper.
    web_safe = mime in ("image/jpeg", "image/png", "image/gif", "image/webp")
    if not web_safe:
        thumb = info.get("thumburl")
        return thumb.split("?")[0] if thumb else None

    # If the original is already narrower than the requested width, Wikimedia
    # refuses to upscale and returns 400 ("Use thumbnail sizes listed on...");
    # take the original in that case.
    if original_width and original_width <= width:
        url = info.get("url")
        return url.split("?")[0] if url else None

    thumb = info.get("thumburl") or info.get("url")
    return thumb.split("?")[0] if thumb else None


def url_variants(url: str) -> list[str]:
    """Candidate download URLs: prefer thumbnails, fall back to the original last."""
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
        # SVG thumbnails use a .png suffix; everything else keeps its extension
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


def download(url: str, retries: int = 5) -> tuple[bytes, str]:
    """Download an image. Back off for a long time on 429 (limits are per-minute; second-scale retries are useless).

    After a few hundred files Wikimedia tightens the limit; backoff has to grow
    by minutes, or the last few dozen will keep failing.
    """
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
                cool = 60 * (2 ** attempt)  # 60s / 2min / 4min / 8min
                log(f"    HTTP 429 rate limited, cooling {cool}s…")
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


# ---------------------------------------------------------------- main flow


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--region", required=True, help="Region directory name, e.g. yellowstone / nyc / dc")
    ap.add_argument("--check", action="store_true", help="List pending download URLs only; do not download")
    args = ap.parse_args()

    region_dir = ROOT / args.region
    data = region_dir / "data.js"
    img_dir = region_dir / "img"
    credits = img_dir / "CREDITS.md"
    progress_path = img_dir / ".progress.json"

    # Rewrite target: if the region has parts/, data.js is generated by
    # tools/assemble.py, so editing data.js would be overwritten on the next
    # assemble — rewrite the fragment sources instead.
    parts_dir = region_dir / "parts"
    if parts_dir.is_dir():
        targets = sorted(parts_dir.glob("*.js"))
        log(f"[{args.region}] rewrite targets are {len(targets)} fragment file(s)"
            f" (data.js is generated by assemble.py; editing it would be overwritten)")
    elif data.exists():
        targets = [data]
    else:
        log(f"Cannot find {data}, and {parts_dir} is missing")
        return 1

    # Fragments use JS single quotes; assemble.py's data.js uses JSON double quotes — accept both
    URL_RE = re.compile(r"""["']?url["']?\s*:\s*(['"])(https?://[^'"]+)\1""")
    sources = {p: p.read_text() for p in targets}
    urls = sorted({m.group(2) for s in sources.values() for m in URL_RE.finditer(s)})

    if not urls:
        log(f"[{args.region}] no remote image URLs; nothing to do.")
        img_dir.mkdir(parents=True, exist_ok=True)
        Progress(progress_path, 0, args.region).close("nothing-to-do")
        return 0

    log(f"[{args.region}] found {len(urls)} remote image URL(s)")
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
            log(f"[{i}/{len(urls)}] already present, skip  {existing[0].name}")
            prog.tick("skipped")
            continue

        log(f"[{i}/{len(urls)}] download  {url[:88]}")
        body = ctype = None
        last_err = None

        # Prefer API-resolved thumb.wikimedia.org URLs to avoid origin rate limits on upload
        candidates = []
        fname = commons_filename(url)
        if fname:
            # The API query itself can 429. Hitting upload immediately only makes
            # the limit worse, so cool down and retry the API; treat direct URLs
            # as a last resort.
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
                        log(f"    API rate limited, cooling {cool}s then retrying…")
                        time.sleep(cool)
                        continue
                    log(f"    API lookup failed, falling back to direct URL: {e}")
                    break
                except Exception as e:
                    log(f"    API lookup failed, falling back to direct URL: {e}")
                    break
        candidates += [u for u in url_variants(url) if u not in candidates]

        for cand in candidates:
            try:
                body, ctype = download(cand)
                if cand != url:
                    log(f"    switched to a working size  …/{cand.rsplit('/', 1)[-1][:50]}")
                break
            except Exception as e:
                last_err = e

        if body is None:
            log(f"    failed: {last_err}")
            failures.append((url, str(last_err)))
            prog.tick("failed", url, str(last_err))
            continue

        if not ctype.startswith("image/"):
            why = f"content-type={ctype or 'unknown'}"
            log(f"    skip: response is not an image ({why})")
            failures.append((url, why))
            prog.tick("failed", url, why)
            continue

        # What we save must be a format the browser can render. If TIFF is stored
        # as .jpg, the page shows a permanently broken image that is hard to debug.
        if ctype not in EXT_BY_TYPE:
            why = f"browser cannot render format {ctype}"
            log(f"    skip: {why}")
            failures.append((url, why))
            prog.tick("failed", url, why)
            continue

        path = img_dir / (stem + EXT_BY_TYPE.get(ctype, ".jpg"))
        path.write_bytes(body)
        mapping[url] = f"img/{path.name}"
        log(f"    → {path.name}  ({len(body) / 1024:.0f} KB)")
        prog.tick("ok")

    # Rewrite sources (fragments or data.js); replace both quote styles
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
        log(f"\n[{args.region}] rewrote {len(mapping)} URL(s) to local paths in {rewritten} file(s)")
        if parts_dir.is_dir():
            log(f"[{args.region}] reassembling data.js")
            subprocess.run(
                [sys.executable, str(ROOT / "tools" / "assemble.py"),
                 "--region", args.region],
                check=False)

    # Generate an attribution file to satisfy CC attribution.
    # Merge existing rows so a partial remaining-images run does not wipe CREDITS.
    existing_rows: dict[str, str] = {}
    if credits.exists():
        for line in credits.read_text(encoding="utf-8").splitlines():
            m = re.match(r"\| `([^`]+)` \| <([^>]+)> \|", line)
            if m:
                existing_rows[m.group(1)] = m.group(2)
    for url, local in mapping.items():
        existing_rows[Path(local).name] = url
    lines = [
        f"# Image Credits · {args.region}",
        "",
        "The images in this directory were downloaded from Wikimedia Commons and other public",
        "repositories. Copyright remains with the original authors, and the images are used under",
        "their original licenses (mostly CC BY-SA / CC0 / Public Domain) for location-scouting",
        "reference only. For commercial use, check the specific license of each image yourself.",
        "",
        "| Local file | Source URL |",
        "| --- | --- |",
    ]
    for name, url in sorted(existing_rows.items()):
        lines.append(f"| `{name}` | <{url}> |")
    credits.write_text("\n".join(lines) + "\n", encoding="utf-8")
    log(f"Attribution list written to {credits.relative_to(ROOT)}")

    if failures:
        prog.close("done-with-failures")
        log(f"\n[{args.region}] {len(failures)} URL(s) failed and need a human:")
        for url, why in failures:
            log(f"  {why}  {url}")
        return 2

    prog.close("done")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
