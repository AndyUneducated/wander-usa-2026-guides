/* ===== The all-spots table =====
   Pulls the data.js of all four regions into one page as a searchable list that can
   be sorted by visit value. Every region's data.js declares `var REGIONS = [...]`, so
   a later load overwrites the previous one — we load them one at a time and take the
   result away immediately after each load. They cannot be loaded in parallel. */

(function () {
  'use strict';

  var SOURCES = [
    { slug: 'nyc', label: 'New York + New England', color: '#4da3ff' },
    { slug: 'dc', label: 'Washington DC + Philadelphia', color: '#4bd18a' },
    { slug: 'yellowstone', label: 'Yellowstone + Grand Teton', color: '#a78bfa' },
    { slug: 'socal', label: 'Southern California', color: '#f06292' }
  ];
  var V = '?v=20260920b';

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  var plain = function (s) { return String(s == null ? '' : s).replace(/<[^>]+>/g, ''); };

  /* Spot names become copy buttons (see assets/copy.js). The whole row is a link, but
     the copy.js handler swallows the click, so clicking a name copies without navigating. */
  function cpNames(str, cls) {
    return window.WUCopy ? window.WUCopy.names(str, cls) : esc(str);
  }

  /* Stars go through the inline SVG in assets/rating.js, so we do not depend on a font having a ★ glyph */
  function stars(score, size) {
    return window.WURating ? window.WURating.stars(score, { size: size || 12 }) : '';
  }

  /* Spot coordinate: prefer the first shooting position, otherwise the spot's own
     coordinate. Same rule as spotCoord in app.js, so both sides compute equal distances. */
  function coordOf(s) {
    return (s.shots && s.shots[0] && (s.shots[0].view || s.shots[0].park || s.shots[0].at)) ||
      s.at || null;
  }

  /* Visit duration to minutes, for the "shortest first" sort. The rule is shared with
     the region handbook pages via assets/facts.js so both produce the same ordering. */
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

  /* Squeeze the visit duration into a short label; if no range can be extracted just truncate — a table row only has one line of room */
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
        /* There is no distance until we have a location fix; normally this cell does not exist */
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

    /* Entries with a missing value always sort to the end rather than being mixed in
       as a 0 — the socal batch has no must, and should not land in the middle of a
       visit-value sort. */
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
        /* "Nearest to me" needs a location fix first. That is async, so the button goes
           into a waiting state; on failure say why and keep the current sort rather
           than silently doing nothing. */
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
