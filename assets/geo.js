/* ===== 定位与距离 =====

   给「离我最近」和「顺路排序」用的公共件。地域手册页与全部景点总表页
   都从这里取，保证两边算出来的距离和顺序是一回事。

   注意：浏览器的定位接口只在 HTTPS 或 localhost 下可用。
   本站发布在 GitHub Pages（HTTPS），线上没问题；本地用 file:// 直接打开
   会拿不到定位，这时按下面的 locate() 会如实报错，不静默失败。 */
(function () {
  'use strict';

  var R = 6371;   /* 地球平均半径，公里 */

  function rad(d) { return d * Math.PI / 180; }

  /* 两点球面距离，公里。逛景点的尺度上 haversine 足够准。 */
  function dist(a, b) {
    if (!a || !b) return Infinity;
    var dLat = rad(b[0] - a[0]), dLon = rad(b[1] - a[1]);
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(a[0])) * Math.cos(rad(b[0])) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
  }

  /* 距离显示：近处给米，远处给公里，非常远的只给整数，避免出现「1234.6 公里」 */
  function fmt(km) {
    if (!isFinite(km)) return '';
    if (km < 1) return Math.round(km * 1000) + ' 米';
    if (km < 10) return km.toFixed(1) + ' 公里';
    return Math.round(km) + ' 公里';
  }

  /* 八个方位，配合距离一起显示，比只给距离有用得多 */
  var DIRS = ['正北', '东北', '正东', '东南', '正南', '西南', '正西', '西北'];
  function bearing(a, b) {
    if (!a || !b) return '';
    var y = Math.sin(rad(b[1] - a[1])) * Math.cos(rad(b[0]));
    var x = Math.cos(rad(a[0])) * Math.sin(rad(b[0])) -
      Math.sin(rad(a[0])) * Math.cos(rad(b[0])) * Math.cos(rad(b[1] - a[1]));
    var deg = (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
    return DIRS[Math.round(deg / 45) % 8];
  }

  var last = null;      /* 缓存上一次定位，同一次会话里反复按不重复要权限 */

  /* 返回 Promise。成功给 [lat, lon]，失败给一个能直接显示给人看的错误。
     maxAge 默认五分钟：开车途中五分钟内的旧坐标还算能用，
     省得每次按按钮都等一次冷启动定位。 */
  function locate(opt) {
    opt = opt || {};
    if (last && !opt.fresh && Date.now() - last.t < 5 * 60 * 1000) {
      return Promise.resolve(last.c);
    }
    return new Promise(function (res, rej) {
      if (!navigator.geolocation) {
        rej(new Error('这个浏览器不支持定位'));
        return;
      }
      if (!window.isSecureContext && location.protocol !== 'http:') {
        rej(new Error('定位需要 HTTPS，本地直接打开文件时用不了'));
        return;
      }
      navigator.geolocation.getCurrentPosition(function (p) {
        last = { c: [p.coords.latitude, p.coords.longitude], t: Date.now() };
        res(last.c);
      }, function (err) {
        var msg = '定位失败';
        if (err.code === 1) msg = '定位被拒绝，请在浏览器地址栏的权限里允许本站定位';
        else if (err.code === 2) msg = '拿不到位置信号，室内或无网络时常见';
        else if (err.code === 3) msg = '定位超时，请再试一次';
        rej(new Error(msg));
      }, { enableHighAccuracy: false, timeout: 10000, maximumAge: opt.fresh ? 0 : 300000 });
    });
  }

  function cached() { return last ? last.c : null; }

  /* 顺路排序：从 start 出发的最近邻链。
     不是最优解（那是旅行商问题），但对「手上这十几个点大致按什么顺序串」
     这个问题，最近邻给出的顺序基本就是人自己会排的顺序，且结果稳定可预期。
     返回带 leg（上一站到本站的公里数）与 acc（累计公里数）的新数组。 */
  function chain(start, items) {
    var pool = items.filter(function (x) { return x.coord; });
    var out = [], cur = start, acc = 0;
    while (pool.length) {
      var bi = 0, bd = Infinity;
      for (var i = 0; i < pool.length; i++) {
        var d = dist(cur, pool[i].coord);
        if (d < bd) { bd = d; bi = i; }
      }
      var pick = pool.splice(bi, 1)[0];
      acc += bd;
      out.push(Object.assign({}, pick, { leg: bd, acc: acc }));
      cur = pick.coord;
    }
    return out;
  }

  window.WUGeo = {
    dist: dist, fmt: fmt, bearing: bearing,
    locate: locate, cached: cached, chain: chain
  };
})();
