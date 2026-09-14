/* ===== 全部景点总表 =====
   把四个地域的 data.js 汇到一页，做成可搜索、可按必去价值排序的清单。
   每个地域的 data.js 都声明 `var REGIONS = [...]`，后加载的会覆盖前一个，
   所以这里逐个顺序加载、每次加载完立刻取走结果，不能并行。 */

(function () {
  'use strict';

  var SOURCES = [
    { slug: 'nyc', label: 'New York 区域', color: '#4da3ff' },
    { slug: 'dc', label: 'Washington DC 区域', color: '#4bd18a' },
    { slug: 'yellowstone', label: 'Yellowstone + Grand Teton', color: '#ffd24d' },
    { slug: 'socal', label: '加州海岸', color: '#ff8a3d' }
  ];
  var V = '?v=20260914a';

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  var plain = function (s) { return String(s == null ? '' : s).replace(/<[^>]+>/g, ''); };

  function stars(score) {
    var full = Math.floor(score), half = score - full >= 0.5, s = '';
    for (var i = 0; i < full; i++) s += '★';
    if (half) s += '☆';
    for (var j = full + (half ? 1 : 0); j < 5; j++) s += '·';
    return s;
  }

  function loadOne(src, done) {
    var el = document.createElement('script');
    el.src = src.slug + '/data.js' + V;
    el.onload = function () {
      var regions = window.REGIONS || [];
      window.REGIONS = null;
      done(regions);
    };
    el.onerror = function () { done([]); };
    document.head.appendChild(el);
  }

  function loadAll(done) {
    var rows = [], i = 0;
    (function next() {
      if (i >= SOURCES.length) return done(rows);
      var src = SOURCES[i++];
      loadOne(src, function (regions) {
        regions.forEach(function (r) {
          (r.spots || []).forEach(function (s) {
            rows.push({ src: src, sub: r, s: s });
          });
        });
        next();
      });
    })();
  }

  /* 参观时长压成一个短标签，太长的直接截断——总表一行只有一行的位置 */
  function visitLabel(s) {
    var v = plain((s.access || {}).visit);
    if (!v) return '';
    var m = v.match(/[\d.]+\s*[–\-~]\s*[\d.]+\s*(小时|分钟|min|h)|[\d.]+\s*(小时|分钟|min|h)/);
    return m ? m[0] : v.slice(0, 12);
  }

  function renderRow(row) {
    var s = row.s;
    var thumb = (s.images && s.images[0] && s.images[0].url) || '';
    var href = row.src.slug + '/#' + s.id;
    var must = s.must != null ? s.must : null;
    var visit = visitLabel(s);
    return '<a class="xr-row' + (s.gone ? ' xr-gone' : '') + '" href="' + esc(href) + '">' +
      (thumb
        ? '<span class="xr-thumb"><img loading="lazy" src="' +
          esc(row.src.slug + '/' + thumb) + '" alt=""></span>'
        : '<span class="xr-thumb xr-thumb-empty"></span>') +
      '<span class="xr-main">' +
        '<span class="xr-name">' + esc(s.en) +
          (s.name ? ' <i>' + esc(s.name) + '</i>' : '') + '</span>' +
        '<span class="xr-where"><b style="color:' + esc(row.src.color) + '">' +
          esc(row.src.label) + '</b> · ' + esc(plain(row.sub.name)) + '</span>' +
        (s.tldr ? '<span class="xr-tldr">' + plain(s.tldr) + '</span>' : '') +
      '</span>' +
      '<span class="xr-side">' +
        (must != null
          ? '<span class="xr-must" title="必去价值 ' + must + '/5"><b>' + must +
            '</b><span class="xr-stars">' + stars(must) + '</span></span>'
          : '<span class="xr-must xr-nomust" title="该条目尚未评必去价值">' +
            (s.score != null ? '摄影 ' + s.score + '/5' : '—') + '</span>') +
        (visit ? '<span class="xr-visit">⏱ ' + esc(visit) + '</span>' : '') +
      '</span>' +
      '</a>';
  }

  function blob(row) {
    return [row.s.en, row.s.name, row.s.id, row.src.label, plain(row.sub.name),
      plain(row.s.tldr), (row.s.tags || []).map(function (t) { return t.t; }).join(' ')]
      .join(' ').toLowerCase();
  }

  function boot(rows) {
    rows.forEach(function (r) { r.blob = blob(r); });

    var host = document.getElementById('xr');
    var input = document.getElementById('q');
    var countEl = document.getElementById('q-count');
    var sortBtns = document.querySelectorAll('[data-sort]');
    var sort = 'must';

    function sorted() {
      var out = rows.slice();
      if (sort === 'must') {
        /* 没有 must 的条目（socal 旧数据）排在最后，而不是当 0 分混在里面 */
        out.sort(function (a, b) {
          var am = a.s.must, bm = b.s.must;
          if (am == null && bm == null) return 0;
          if (am == null) return 1;
          if (bm == null) return -1;
          return bm - am;
        });
      }
      return out;
    }

    function draw() {
      var q = (input.value || '').trim().toLowerCase();
      var list = sorted().filter(function (r) {
        return !q || r.blob.indexOf(q) > -1;
      });
      host.innerHTML = list.length
        ? list.map(renderRow).join('')
        : '<p class="xr-none">没有匹配的景点。换个关键词，或者清空搜索框。</p>';
      countEl.textContent = list.length + ' / ' + rows.length + ' 个景点';
    }

    input.addEventListener('input', draw);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { input.value = ''; draw(); }
    });
    Array.prototype.forEach.call(sortBtns, function (b) {
      b.addEventListener('click', function () {
        sort = b.dataset.sort;
        Array.prototype.forEach.call(sortBtns, function (x) {
          x.classList.toggle('on', x === b);
        });
        draw();
      });
    });

    document.getElementById('xr-loading').remove();
    draw();
  }

  loadAll(boot);
})();
