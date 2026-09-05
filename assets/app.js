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
      ['停车', a.parking], ['步行距离', a.walk]
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
    /* details/summary：默认收起，点标题展开。打印时 CSS 会强制全部展开 */
    var h = '<details class="card' + (s.gone ? ' gone' : '') + '" id="' + esc(s.id) + '">';
    h += '<summary class="card-head">' +
      /* gone 的点位也保留编号：否则可见编号会出现空档，
         且同一分区有多个 gone 时地图上会出现多个无法区分的标记。
         「不可抵达」靠红色与删除线表达，见 style.css 的 .card.gone .card-num */
      '<div class="card-num">' + s.n + '</div>' +
        '<div class="card-title"><h3>' + esc(s.en) +
        (s.name ? ' <span class="zh">' + esc(s.name) + '</span>' : '') + '</h3>' +
      (s.gone ? '<span class="gone-flag">' + esc(s.gone) + '</span>' : '') +
      (s.tldr ? '<div class="tldr">' + s.tldr + '</div>' : '') +
      renderTags(s.tags) + '</div>' +
      (s.gone ? '' :
        '<div class="card-score"><div class="stars" title="摄影价值 ' + s.score + '/5">' +
        stars(s.score) + '</div><span class="score-label">摄影价值 ' + s.score + '/5</span></div>') +
      '<span class="expand" aria-hidden="true">' +
      '<span class="lbl-shut">展开详情</span><span class="lbl-open">收起</span>' +
      '<span class="chev">▾</span></span>' +
      '</summary>';

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
    h += '</div></details>';
    return h;
  }

  /* ---------- 地图 ---------- */
  function buildMap(el, region) {
    var map = L.map(el, { scrollWheelZoom: false });
    /* 底图用 Esri Dark Gray Canvas：免密钥，且深色和本站配色一致。
       原先用的 CARTO dark_all 已改为需要 API key，会返回「API KEY REQUIRED」水印图。
       Dark Gray Base 不含地名，所以要再叠一层 Reference 做标注。 */
    var ESRI = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/';
    var ESRI_ATTR = 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ';
    L.tileLayer(ESRI + 'World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: ESRI_ATTR, maxZoom: 16
    }).addTo(map);
    L.tileLayer(ESRI + 'World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16, pane: 'shadowPane'
    }).addTo(map);

    var bounds = [];
    region.spots.forEach(function (s) {
      var c = (s.shots && s.shots[0] && (s.shots[0].view || s.shots[0].park || s.shots[0].at)) || s.at;
      if (!c) return;
      bounds.push(c);
      var icon = L.divIcon({
        className: '',
        html: '<div class="pin' + (s.gone ? ' pin-gone' : '') + '" style="background:' +
          (s.gone ? '#ff6b6b' : (region.color || '#ff8a3d')) + '">' + s.n + '</div>',
        iconSize: [26, 26], iconAnchor: [13, 13]
      });
      L.marker(c, { icon: icon }).addTo(map).bindPopup(
        '<b>' + esc(s.en) + '</b>' + (s.name ? ' <span style="color:#a0a6b3">' + esc(s.name) + '</span>' : '') + '<br>' +
        (s.gone
          ? '<span style="color:#ff6b6b;font-weight:700">' + esc(s.gone) + '</span><br>'
          : '<span style="color:#ffd24d">' + stars(s.score) + '</span> ' + s.score + '/5<br>') +
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
      /* 前置提醒统一移到附录，分区正文直接进入地图 + 卡片 */
      var hasNotes = (r.callouts && r.callouts.length) || r.lead;
      sec.innerHTML =
        '<div class="wrap">' +
        '<h2>' + esc(r.name) + '<span class="count">' + r.spots.length + ' 个条目</span></h2>' +
        (hasNotes
          ? '<p class="section-lead"><a class="apx-link" href="#apx-' + r.id + '">↓ 本区提醒与关键约束见附录</a></p>'
          : '') +
        '<div class="map" id="map-' + r.id + '"></div>' +
        '<p class="map-hint">地图中数字对应下方卡片编号；点击图钉可跳转详情或直接导航。地图需先点击一次才能用滚轮缩放。</p>' +
        '<div class="card-toolbar">' +
        '<button type="button" data-act="open" data-region="' + r.id + '">展开全部</button>' +
        '<button type="button" data-act="close" data-region="' + r.id + '">收起全部</button>' +
        '</div>' +
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

    /* 附录链接排在所有分区之后 */
    if (nav) {
      var ap = document.createElement('a');
      ap.href = '#appendix';
      ap.textContent = '附录';
      nav.appendChild(ap);
    }

    /* 把各分区的前置提醒汇总到附录（intro.js 已先填好 A–D 节） */
    var apxBody = document.getElementById('appendix-body');
    if (apxBody) {
      var blocks = REGIONS.filter(function (r) {
        return (r.callouts && r.callouts.length) || r.lead;
      }).map(function (r) {
        return '<div id="apx-' + r.id + '">' +
          '<h4 class="apx-sub">' + esc(r.name) +
          ' <a class="apx-back" href="#' + r.id + '">↑ 回到该区卡片</a></h4>' +
          (r.lead ? '<p class="section-lead">' + r.lead + '</p>' : '') +
          renderCallouts(r.callouts) + '</div>';
      });
      if (blocks.length) {
        var wrap = document.createElement('div');
        wrap.innerHTML = '<h3 class="apx-h">F. 分区提醒与关键约束</h3>' +
          '<p class="section-lead">正文里每个分区直接从景点卡片开始，这些前置提醒集中放在这里。' +
          '每块标题右侧可跳回对应分区。</p>' + blocks.join('');
        apxBody.appendChild(wrap);
      }
    }

    REGIONS.forEach(function (r) {
      var el = document.getElementById('map-' + r.id);
      if (el) buildMap(el, r);
    });

    /* 展开 / 收起全部 */
    root.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.card-toolbar button');
      if (!btn) return;
      var sec = document.getElementById(btn.dataset.region);
      if (!sec) return;
      var open = btn.dataset.act === 'open';
      sec.querySelectorAll('details.card').forEach(function (d) { d.open = open; });
    });

    /* 从地图图钉或目录跳过来时，自动展开目标卡片 */
    function openFromHash() {
      var id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      var el = document.getElementById(id);
      if (el && el.tagName === 'DETAILS') {
        el.open = true;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    window.addEventListener('hashchange', openFromHash);
    openFromHash();

    /* 打印/导出 PDF 前展开全部（浏览器默认会隐藏收起的 details，CSS 覆盖不了） */
    var printRestore = [];
    window.addEventListener('beforeprint', function () {
      printRestore = [];
      document.querySelectorAll('details.card, details.callout').forEach(function (d) {
        printRestore.push([d, d.open]);
        d.open = true;
      });
    });
    window.addEventListener('afterprint', function () {
      printRestore.forEach(function (p) { p[0].open = p[1]; });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
