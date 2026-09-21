/* ===== Location and distance =====

   Shared helper for "nearest to me" and the route sort. Both the region handbook
   pages and the all-spots table pull from here, so the distances and the ordering
   they compute are guaranteed to be the same thing.

   Note: the browser geolocation API only works over HTTPS or on localhost. The site
   is published on GitHub Pages (HTTPS) so it is fine live; opened locally over
   file:// there is no location, and locate() below says so instead of failing silently. */
(function () {
  'use strict';

  var R = 6371;   /* Mean radius of the Earth, in km */

  function rad(d) { return d * Math.PI / 180; }

  /* Great-circle distance between two points, in km. At sightseeing scale haversine is plenty accurate. */
  function dist(a, b) {
    if (!a || !b) return Infinity;
    var dLat = rad(b[0] - a[0]), dLon = rad(b[1] - a[1]);
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(a[0])) * Math.cos(rad(b[0])) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
  }

  /* Distance display: metres up close, km further out, whole km when very far, so we never print "1234.6 km" */
  function fmt(km) {
    if (!isFinite(km)) return '';
    if (km < 1) return Math.round(km * 1000) + ' 米';
    if (km < 10) return km.toFixed(1) + ' 公里';
    return Math.round(km) + ' 公里';
  }

  /* Eight compass points, shown together with the distance — far more useful than distance alone */
  var DIRS = ['正北', '东北', '正东', '东南', '正南', '西南', '正西', '西北'];
  function bearing(a, b) {
    if (!a || !b) return '';
    var y = Math.sin(rad(b[1] - a[1])) * Math.cos(rad(b[0]));
    var x = Math.cos(rad(a[0])) * Math.sin(rad(b[0])) -
      Math.sin(rad(a[0])) * Math.cos(rad(b[0])) * Math.cos(rad(b[1] - a[1]));
    var deg = (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
    return DIRS[Math.round(deg / 45) % 8];
  }

  var last = null;      /* Cache the last fix so repeated taps in one session do not re-ask for permission */

  /* Returns a Promise: [lat, lon] on success, or an error whose message can be shown
     to the user as is. maxAge defaults to five minutes — while driving, a coordinate
     that old is still usable, and it saves a cold-start fix on every button press. */
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

  /* Route sort: a nearest-neighbour chain starting from start.
     Not optimal (that would be the travelling salesman problem), but for "roughly what
     order should I string these dozen-odd spots in" nearest neighbour lands on about
     the order a person would pick anyway, and it is stable and predictable.
     Returns a new array with leg (km from the previous stop) and acc (cumulative km). */
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
