/* ===== 全部景点总表 =====
   把四个地域的 data.js 汇到一页，做成可搜索、可按游览价值排序的清单。
   每个地域的 data.js 都声明 `var REGIONS = [...]`，后加载的会覆盖前一个，
   所以这里逐个顺序加载、每次加载完立刻取走结果，不能并行。 */

(function () {
  'use strict';

  var SOURCES = [
    { slug: 'nyc', label: 'New York + New England', color: '#4da3ff' },
    { slug: 'dc', label: 'Washington DC + Philadelphia', color: '#4bd18a' },
    { slug: 'yellowstone', label: 'Yellowstone + Grand Teton', color: '#ffd24d' },
    { slug: 'socal', label: 'Southern California', color: '#ff8a3d' }
  ];
  var V = '?v=20260920a';

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  var plain = function (s) { return String(s == null ? '' : s).replace(/<[^>]+>/g, ''); };

  /* 景点名做成可复制按钮（见 assets/copy.js）。整行是个跳转链接，
     copy.js 的处理器会拦掉点击，点名字只复制、不跳转。 */
  function cpNames(str, cls) {
    return window.WUCopy ? window.WUCopy.names(str, cls) : esc(str);
  }

  /* 星级走 assets/rating.js 的内联 SVG，不依赖字体里有没有 ★ 的字形 */
  function stars(score, size) {
    return window.WURating ? window.WURating.stars(score, { size: size || 12 }) : '';
  }

  /* 景点坐标：优先第一个机位的坐标，其次景点本身的坐标。
     和 app.js 里的 spotCoord 同一套口径，两边算出来的距离才对得上。 */
  function coordOf(s) {
    return (s.shots && s.shots[0] && (s.shots[0].view || s.shots[0].park || s.shots[0].at)) ||
      s.at || null;
  }

  /* 参观时长 → 分钟数，给「用时短优先」排序用。
     规则与地域手册页共用 assets/facts.js，两边排出来的顺序才一致。 */
  function mins(s) {
    return window.WUFacts.visitMins(plain((s.access || {}).visit));
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

  /* 参观时长压成一个短标签，抽不出区间的直接截断——总表一行只有一行的位置 */
  function visitLabel(s) {
    var v = plain((s.access || {}).visit);
    if (!v) return '';
    return window.WUFacts.durGist(v) || v.slice(0, 12);
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
        '<span class="xr-name">' + cpNames(s.en, 'cp-en') +
          (s.name ? ' <i>' + cpNames(s.name, 'cp-zh') + '</i>' : '') + '</span>' +
        '<span class="xr-where"><b style="color:' + esc(row.src.color) + '">' +
          esc(row.src.label) + '</b> · ' + esc(plain(row.sub.name)) + '</span>' +
        (s.tldr ? '<span class="xr-tldr">' + plain(s.tldr) + '</span>' : '') +
      '</span>' +
      '<span class="xr-side">' +
        (must != null
          ? '<span class="xr-must" title="游览价值 ' + must + '/5' +
            (window.WURating ? ' · ' + window.WURating.tier(must) : '') + '"><b>' + must +
            '</b><span class="xr-stars">' + stars(must) + '</span></span>'
          : '<span class="xr-must xr-nomust" title="该条目尚未评游览价值">' +
            (s.score != null ? '摄影 ' + s.score + '/5' : '—') + '</span>') +
        (visit ? '<span class="xr-visit">⏱ ' + esc(visit) + '</span>' : '') +
        /* 定位之后才有距离，平时这一格不存在 */
        (row.d != null
          ? '<span class="xr-dist">📍 ' + window.WUGeo.fmt(row.d) + '</span>' : '') +
      '</span>' +
      '</a>';
  }

  function blob(row) {
    return [row.s.en, row.s.name, row.s.id, row.src.label, plain(row.sub.name),
      plain(row.s.tldr), (row.s.tags || []).map(function (t) { return t.t; }).join(' ')]
      .join(' ').toLowerCase();
  }

  function boot(rows) {
    rows.forEach(function (r) {
      r.blob = blob(r);
      r.coord = coordOf(r.s);
      r.mins = mins(r.s);
    });

    var host = document.getElementById('xr');
    var input = document.getElementById('q');
    var countEl = document.getElementById('q-count');
    var sortBtns = document.querySelectorAll('[data-sort]');
    var sort = 'must';

    /* 缺值的条目一律排到最后，而不是当 0 分混在里面——
       socal 那批没有 must，按游览价值排时不该顶在中间。 */
    function byNum(get, desc) {
      return function (a, b) {
        var av = get(a), bv = get(b);
        if (av == null && bv == null) return 0;
        if (av == null) return 1;
        if (bv == null) return -1;
        return desc ? bv - av : av - bv;
      };
    }

    function sorted() {
      var out = rows.slice();
      if (sort === 'must') out.sort(byNum(function (r) { return r.s.must; }, true));
      else if (sort === 'visit') out.sort(byNum(function (r) { return r.mins; }, false));
      else if (sort === 'near') out.sort(byNum(function (r) { return r.d; }, false));
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
    function markOn(b) {
      Array.prototype.forEach.call(sortBtns, function (x) {
        x.classList.toggle('on', x === b);
      });
    }

    Array.prototype.forEach.call(sortBtns, function (b) {
      b.addEventListener('click', function () {
        /* 「离我最近」要先拿定位。定位是异步的，按钮先进等待态，
           失败就把原因说清楚并保持原排序，不要静默什么都不做。 */
        if (b.dataset.sort === 'near') {
          b.classList.add('wait');
          window.WUGeo.locate().then(function (c) {
            rows.forEach(function (r) {
              r.d = r.coord ? window.WUGeo.dist(c, r.coord) : null;
            });
            b.classList.remove('wait');
            sort = 'near';
            markOn(b);
            draw();
          }).catch(function (err) {
            b.classList.remove('wait');
            if (window.WUCopy) window.WUCopy.toast(err.message, true);
          });
          return;
        }
        sort = b.dataset.sort;
        markOn(b);
        draw();
      });
    });

    document.getElementById('xr-loading').remove();
    draw();
    if (window.WUCopy) window.WUCopy.bind();
  }

  loadAll(boot);
})();
