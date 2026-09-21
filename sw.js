/* ===== Service Worker: keep the handbook usable where there is no signal =====

   Why we need it: the places where you most need to look something up are
   exactly the places with no signal — most roads inside Yellowstone have no
   mobile network, and Beartooth and Lamar Valley have none the whole way.
   Several entries in the data call this out. So "read it at home, still look
   it up on the road" is a hard requirement here, not a nice-to-have.

   Three caching strategies, one per kind of content:

     Shell (CSS / JS / icons / manifest)
       Fetched at install time, cache-first after that. Small and rarely
       changes, so serving the cache first makes every open instant.

     Documents and data (HTML / data.js / intro.js)
       stale-while-revalidate: show the page from cache right away, and pull
       the new version in the background so the next open is current. Offline
       always opens and online never sticks on an old copy; the price is that
       content updates take one extra visit to land, which is fine for a
       handbook that updates in "verified date" steps.

     Images and map tiles
       Cache-first, stored only once used, with a cap on the entry count. The
       photos across the four regions add up to about 268 MB; precaching means
       dumping 268 MB of traffic on the user up front, which we absolutely
       cannot do. So only "what you looked at stays": spots you browsed at
       home still show their photos on the road with no network.

   Cache names carry a version number; on a version change activate deletes
   the whole old set. */

const VERSION = 'wu-2026-09-20b';
const SHELL = 'shell-' + VERSION;
const DOCS = 'docs-' + VERSION;
const MEDIA = 'media-' + VERSION;      /* Images; little point keeping them across versions, but no need to purge either */
const TILES = 'tiles-' + VERSION;      /* Map tiles */

/* Caps: once over, drop the oldest first-in-first-out. The numbers come from
   size estimates — images average 450 KB each, so 500 is about 220 MB, enough
   for one region's worth of browsing without eating the phone's storage;
   tiles are a dozen-odd KB each, so 1200 is only a dozen-odd MB. */
const CAP = { [MEDIA]: 500, [TILES]: 1200 };

/* The list fetched at install time, resolved relative to registration.scope.
   Only URLs without a query string belong here: pages reference CSS/JS with a
   ?v=2026xxxx cache stamp, and Cache API matching compares the query string
   too, so precaching './assets/app.js' would never be hit by
   './assets/app.js?v=...' — a wasted download. Versioned assets are left to
   the runtime cache; the first page open has to download them anyway, so we
   just store them on the way past. What precaching buys us is having each
   page's HTML shell ready so it opens offline. */
const SHELL_FILES = [
  './',
  './index.html',
  './all.html',
  './manifest.webmanifest',
  './assets/icon.svg',
  './nyc/index.html',
  './dc/index.html',
  './yellowstone/index.html',
  './socal/index.html',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL);
    /* Fetch one at a time: with addAll, a single 404 or a CDN hiccup fails
       the whole batch and the SW never installs. One miss is harmless — the
       runtime cache can still pick it up later. */
    await Promise.all(SHELL_FILES.map(async (u) => {
      try { await c.add(new Request(u, { cache: 'reload' })); } catch (err) { /* skip */ }
    }));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keep = new Set([SHELL, DOCS, MEDIA, TILES]);
    for (const k of await caches.keys()) {
      if (!keep.has(k)) await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

/* Over the cap, delete from the oldest end. Cache API keys() returns entries
   in insertion order, so chopping off the first few is FIFO. */
async function trim(name) {
  const cap = CAP[name];
  if (!cap) return;
  const c = await caches.open(name);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - cap; i++) await c.delete(keys[i]);
}

async function cacheFirst(req, name) {
  const c = await caches.open(name);
  const hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  /* Opaque responses (cross-origin without CORS) have status 0. We can still
     store them, we just cannot read the body. Map tiles are one of these. */
  if (res && (res.ok || res.type === 'opaque')) {
    await c.put(req, res.clone());
    trim(name);
  }
  return res;
}

async function staleWhileRevalidate(req, name) {
  const c = await caches.open(name);
  const hit = await c.match(req);
  const net = fetch(req).then(async (res) => {
    if (res && res.ok) await c.put(req, res.clone());
    return res;
  }).catch(() => null);
  if (hit) return hit;                      /* Serve the cache first, refresh in the background */
  const res = await net;
  if (res) return res;
  /* No network and nothing cached: send navigations back to the home page,
     which at least is not the browser's error page */
  if (req.mode === 'navigate') {
    const shell = await caches.open(SHELL);
    const home = await shell.match('./index.html');
    if (home) return home;
  }
  return new Response('离线，且这个页面还没有缓存过。', {
    status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  /* Map tiles: cross-origin, lots of them, contents never change — cache-first fits best */
  if (/arcgisonline\.com|tile\.openstreetmap|basemaps\./.test(url.hostname)) {
    e.respondWith(cacheFirst(req, TILES));
    return;
  }
  /* Leaflet comes from a CDN at a pinned version, so cache-first as well */
  if (url.hostname === 'unpkg.com') {
    e.respondWith(cacheFirst(req, SHELL));
    return;
  }
  if (!sameOrigin) return;

  if (/\/img\//.test(url.pathname) || /\.(jpe?g|png|webp|gif|avif)$/i.test(url.pathname)) {
    e.respondWith(cacheFirst(req, MEDIA));
    return;
  }
  if (/\.(css|svg|webmanifest)$/i.test(url.pathname) ||
      /\/assets\/.*\.js$/i.test(url.pathname)) {
    e.respondWith(cacheFirst(req, SHELL));
    return;
  }
  /* Everything left is documents and each region's data.js / intro.js */
  e.respondWith(staleWhileRevalidate(req, DOCS));
});
