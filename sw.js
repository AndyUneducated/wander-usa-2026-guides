/* ===== Service Worker：让手册在没信号的地方还能用 =====

   为什么需要它：这本手册最需要被查阅的地方恰好是最没信号的地方——
   黄石园内大部分路段没有移动网络，Beartooth、Lamar Valley 更是全程无信号，
   数据里好几条都专门提醒了这件事。所以「在家先翻一遍、路上照样能查」
   是这本手册的刚性需求，不是锦上添花。

   缓存策略分三类，按内容的性质走：

     壳层（CSS / JS / 图标 / manifest）
       安装时就抓下来，之后缓存优先。体积小、变动少，先拿缓存能让
       每次打开都是秒开。

     文档与数据（HTML / data.js / intro.js）
       stale-while-revalidate：先用缓存立刻出页面，同时后台拉新版本存起来，
       下次打开就是新的。好处是离线一定能开、在线也不会永远停在旧版；
       代价是内容更新会晚一次访问生效，对一本以「核实日期」为单位更新的
       手册来说完全可以接受。

     图片与地图瓦片
       缓存优先 + 用到才存，并且限制条数。四个地域的照片合计约 268 MB，
       预缓存等于开局给用户灌 268 MB 流量，绝对不能做。所以只留「看过的
       会留下来」：在家翻过的景点，路上没网也还看得见图。

   缓存名里带版本号，换版本时 activate 会把旧的整批删掉。 */

const VERSION = 'wu-2026-09-20b';
const SHELL = 'shell-' + VERSION;
const DOCS = 'docs-' + VERSION;
const MEDIA = 'media-' + VERSION;      /* 图片，跨版本保留意义不大但也不必清 */
const TILES = 'tiles-' + VERSION;      /* 地图瓦片 */

/* 上限：超了就按先进先出丢掉最早的。数字是凭体积估的——
   图片单张平均 450 KB，500 张约 220 MB，够存一个地域翻过的量还不至于
   把手机存储吃穿；瓦片单张十几 KB，1200 张也就十几 MB。 */
const CAP = { [MEDIA]: 500, [TILES]: 1200 };

/* 安装时就抓的清单，相对 registration.scope 解析。
   这里只放没有查询串的地址：页面引用 CSS/JS 时都带 ?v=2026xxxx 的缓存戳，
   而 Cache API 的匹配是连查询串一起比的，把 './assets/app.js' 预存进来
   根本不会被 './assets/app.js?v=...' 命中，纯属白下一遍。带版本的资源
   交给运行时缓存——首次打开页面本来就要下载它们，顺手存下即可。
   所以预缓存的意义在于把各页面的 HTML 外壳先备齐，离线时打得开。 */
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
    /* 逐个抓：addAll 里任何一个 404 或 CDN 抽风会让整批失败，
       那样整个 SW 就装不上了。单个失败无所谓，运行时还能补。 */
    await Promise.all(SHELL_FILES.map(async (u) => {
      try { await c.add(new Request(u, { cache: 'reload' })); } catch (err) { /* 跳过 */ }
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

/* 超额后从最早的开始删。Cache API 的 keys() 是按写入顺序返回的，
   所以直接砍前面几个就是 FIFO。 */
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
  /* opaque 响应（跨域无 CORS）status 是 0，照样可以存，只是读不到内容。
     地图瓦片就属于这一类。 */
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
  if (hit) return hit;                      /* 有缓存就先给缓存，后台更新 */
  const res = await net;
  if (res) return res;
  /* 彻底没网又没缓存：导航请求退回首页，至少不是浏览器的错误页 */
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

  /* 地图瓦片：跨域、量大、内容永不变，缓存优先最合适 */
  if (/arcgisonline\.com|tile\.openstreetmap|basemaps\./.test(url.hostname)) {
    e.respondWith(cacheFirst(req, TILES));
    return;
  }
  /* Leaflet 走 CDN，带固定版本号，同样缓存优先 */
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
  /* 剩下的是文档与各地域的 data.js / intro.js */
  e.respondWith(staleWhileRevalidate(req, DOCS));
});
