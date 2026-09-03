/* ===== 渲染引擎：把 data.js 里的 REGIONS 渲染成分区地图 + 景点卡片 ===== */

(function () {
  'use strict';

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  /* 星级：支持半星 */
  function stars(score) {
    var full = Math.floor(score);
    var half = score - full >= 0.5;
    var s = '';
    for (var i = 0; i < full; i++) s += '★';
    if (half) s += '⯨';
    for (var j = full + (half ? 1 : 0); j < 5; j++) s += '☆';
    return s;
  }

  /* 坐标 → Apple / Google 导航链接。Apple Maps 在 macOS + iPhone 上直接开原生地图 */
  function geoLinks(coord, label) {
    if (!coord) return '';
    var lat = coord[0], lon = coord[1];
    var q = encodeURIComponent(label || '');
    return (
      '<a class="geo" target="_blank" rel="noopener" ' +
      'href="https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lon + '">' +
      '◎ ' + esc(label ? label + ' ' : '') + lat.toFixed(5) + ', ' + lon.toFixed(5) + '</a>' +
      '<a class="geo" target="_blank" rel="noopener" ' +
      'href="https://maps.apple.com/?ll=' + lat + ',' + lon + '&q=' + q + '">Apple 地图</a>'
    );
  }

  function renderCallouts(list) {
    if (!list || !list.length) return '';
    return list.map(function (c) {
      return '<div class="callout ' + (c.type || 'info') + '">' +
        (c.title ? '<span class="title">' + esc(c.title) + '</span>' : '') +
        c.html + '</div>';
    }).join('');
  }

  function renderList(v) {
    if (Array.isArray(v)) return '<ul>' + v.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
    return '<div class="v">' + v + '</div>';
  }

  function renderSpot(sp) {
    var links = '';
    if (sp.park) links += geoLinks(sp.park, '停车');
    if (sp.view) links += geoLinks(sp.view, '机位');
    if (!sp.park && !sp.view && sp.at) links += geoLinks(sp.at, '');
    return '<div class="spot">' +
      '<div class="sn">' + esc(sp.name) + '</div>' +
      '<div class="sd">' + sp.desc + '</div>' +
      (links ? '<div>' + links + '</div>' : '') +
      '</div>';
  }

  function renderAccess(a) {
    if (!a) return '';
    var rows = [
      ['预约', a.book], ['门票', a.ticket], ['开放时间', a.hours],
      ['停车', a.parking], ['步行距离', a.walk], ['无人机', a.drone]
    ].filter(function (r) { return r[1]; });
    return '<table class="access"><tbody>' + rows.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>';
    }).join('') + '</tbody></table>';
  }

  function renderImages(imgs) {
    if (!imgs || !imgs.length) return '';
    return '<div class="shots">' + imgs.map(function (im) {
      return '<figure class="shot" style="margin:0">' +
        '<a href="' + im.url + '" target="_blank" rel="noopener">' +
        '<img loading="lazy" src="' + im.url + '" alt="' + esc(im.cap) + '"></a>' +
        '<figcaption class="cap">' + esc(im.cap) + '</figcaption></figure>';
    }).join('') + '</div>';
  }

  function renderTags(tags) {
    if (!tags || !tags.length) return '';
    return '<div class="tags">' + tags.map(function (t) {
      return '<span class="tag ' + (t.c || '') + '">' + esc(t.t) + '</span>';
    }).join('') + '</div>';
  }

  function renderCard(s) {
    var h = '<article class="card" id="' + esc(s.id) + '">';
    h += '<div class="card-head">' +
      '<div class="card-num">' + s.n + '</div>' +
      '<div class="card-title"><h3>' + esc(s.name) + '</h3>' +
      '<div class="en">' + esc(s.en) + '</div>' + renderTags(s.tags) + '</div>' +
      '<div class="card-score"><div class="stars" title="摄影价值 ' + s.score + '/5">' +
      stars(s.score) + '</div><span class="score-label">摄影价值 ' + s.score + '/5</span></div>' +
      '</div>';

    h += '<div class="card-body">';
    if (s.highlights) h += '<div class="row"><div class="k">核心看点</div>' + renderList(s.highlights) + '</div>';
    if (s.photo) h += '<div class="row"><div class="k">摄影价值</div><div class="v">' + s.photo + '</div></div>';
    if (s.shots && s.shots.length) {
      h += '<div class="row"><div class="k">摄影机位（可直接导航）</div>' +
        s.shots.map(renderSpot).join('') + '</div>';
    }
    if (s.access) h += '<div class="row"><div class="k">可达性</div>' + renderAccess(s.access) + '</div>';
    if (s.notes) h += '<div class="row"><div class="k">注意事项</div>' + renderList(s.notes) + '</div>';
    if (s.images) h += '<div class="row"><div class="k">参考图</div>' + renderImages(s.images) + '</div>';
    h += '</div></article>';
    return h;
  }

  /* ---------- 地图 ---------- */
  function buildMap(el, region) {
    var map = L.map(el, { scrollWheelZoom: false });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19
    }).addTo(map);

    var bounds = [];
    region.spots.forEach(function (s) {
      var c = (s.shots && s.shots[0] && (s.shots[0].view || s.shots[0].park || s.shots[0].at)) || s.at;
      if (!c) return;
      bounds.push(c);
      var icon = L.divIcon({
        className: '',
        html: '<div class="pin" style="background:' + (region.color || '#ff8a3d') + '">' + s.n + '</div>',
        iconSize: [26, 26], iconAnchor: [13, 13]
      });
      L.marker(c, { icon: icon }).addTo(map).bindPopup(
        '<b>' + esc(s.name) + '</b><br>' +
        '<span style="color:#a0a6b3">' + esc(s.en) + '</span><br>' +
        '<span style="color:#ffd24d">' + stars(s.score) + '</span> ' + s.score + '/5<br>' +
        '<a href="#' + esc(s.id) + '">↓ 跳到详情</a> · ' +
        '<a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' +
        c[0] + ',' + c[1] + '">导航</a>'
      );
    });

    if (bounds.length > 1) map.fitBounds(bounds, { padding: [40, 40] });
    else if (bounds.length === 1) map.setView(bounds[0], 13);
    else map.setView(region.center || [34, -119], region.zoom || 8);

    /* 点一下才启用滚轮缩放，避免页面滚动被地图吃掉 */
    map.on('click', function () { map.scrollWheelZoom.enable(); });
    map.on('mouseout', function () { map.scrollWheelZoom.disable(); });
    return map;
  }

  /* ---------- 装配 ---------- */
  function render() {
    var root = document.getElementById('regions');
    var nav = document.getElementById('region-nav');
    if (!root || typeof REGIONS === 'undefined') return;

    REGIONS.forEach(function (r) {
      var sec = document.createElement('section');
      sec.id = r.id;
      sec.innerHTML =
        '<div class="wrap">' +
        '<h2>' + esc(r.name) + '<span class="count">' + r.spots.length + ' 个条目</span></h2>' +
        (r.lead ? '<p class="section-lead">' + r.lead + '</p>' : '') +
        renderCallouts(r.callouts) +
        '<div class="map" id="map-' + r.id + '"></div>' +
        '<p class="map-hint">地图中数字对应下方卡片编号；点击图钉可跳转详情或直接导航。地图需先点击一次才能用滚轮缩放。</p>' +
        r.spots.map(renderCard).join('') +
        '</div>';
      root.appendChild(sec);

      if (nav) {
        var a = document.createElement('a');
        a.href = '#' + r.id;
        a.textContent = r.navName || r.name;
        nav.appendChild(a);
      }
    });

    REGIONS.forEach(function (r) {
      var el = document.getElementById('map-' + r.id);
      if (el) buildMap(el, r);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
