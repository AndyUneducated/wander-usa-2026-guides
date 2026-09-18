/* ===== 注册 Service Worker =====

   sw.js 放在站点根目录，这样它的作用域能覆盖四个地域的子目录。
   本文件自己在 assets/ 下，所以根目录要从自身地址反推——写死 '/sw.js'
   在 GitHub Pages 上是错的：那里站点挂在 /<仓库名>/ 下面，不是域名根。

   离线能力属于「有就更好」：拿不到（比如用 file:// 直接打开、或者浏览器
   不支持）就安静跳过，不影响任何正常浏览。 */
(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;
  /* file:// 下注册必然失败，直接不试，免得控制台里留一条没用的报错 */
  if (location.protocol === 'file:') return;

  var self_src = (document.currentScript && document.currentScript.src) || '';
  var root = self_src.replace(/assets\/sw-reg\.js.*$/, '');
  if (!root) return;

  window.addEventListener('load', function () {
    navigator.serviceWorker.register(root + 'sw.js', { scope: root })
      .catch(function () { /* 注册失败就当没有离线功能，不打扰用户 */ });
  });
})();
