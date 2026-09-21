/* ===== Explore toolbar: filter / sort / nearby / route =====

   This handbook serves three situations at once, and the toolbar is built around them:
     Planning at home -- sort by visit value, filter out what needs a booking, get
                         the skeleton of the trip down first
     Quick lookup on the road -- "I only have an hour", "what is free to enter now"
     Browsing nearby -- get a fix and sort by distance, or string the spots in hand
                        into a sensible order

   There are only two kinds of control: filter pills (multi-select, lit means on) and
   sort pills (single select). No dropdowns, no modals, no second-level panels; all
   state is written in whether a pill is lit or dim, so you can see at a glance what
   is filtered out right now and what the order is, and one more tap undoes it.

   Tickets and booking each have two opposite sides (free/paid, no-booking/booking
   required), and those are welded into one segmented control: only one side of a
   segment can be lit, and tapping the other switches over without turning the first
   off. Those four plus "<= 1 hour" and "visit 4+" make six conditions — nowhere near
   enough to need a dropdown, and a dropdown would hide "what is filtered out right
   now" behind a second tap, which is the worst thing when checking the handbook on
   the road.

   Filters and the top-bar search box stack (search narrows, filters narrow again), so
   visibility is decided in this file alone and app.js's search callback forwards here. */
(function () {
  'use strict';

  /* Declaration order is the order on the toolbar. Adjacent items with a group are
     welded into one segmented control and are mutually exclusive — "free" and "paid"
     lit at the same time would only ever filter down to a blank page. */
  var FILTERS = {
    free: {
      group: 'ticket', label: '免费', tip: '只看不要门票的',
      need: function (i) { return i.free; },
      pass: function (c) { return c.dataset.free === '1'; }
    },
    paid: {
      group: 'ticket', label: '收费', tip: '只看要买门票的（票价写得出金额的）',
      need: function (i) { return i.paid; },
      pass: function (c) { return c.dataset.paid === '1'; }
    },
    nobook: {
      group: 'book', label: '免预约', tip: '只看不需预约、直接去就能进的',
      need: function (i) { return i.booking === 'no'; },
      pass: function (c) { return c.dataset.book === 'no'; }
    },
    needbook: {
      group: 'book', label: '需预约', tip: '只看要提前订票的，在家规划时先把这些订掉',
      need: function (i) { return i.booking === 'yes'; },
      pass: function (c) { return c.dataset.book === 'yes'; }
    },
    quick: {
      label: '≤1 小时', tip: '只看一小时内能看完的，赶时间时用',
      need: function (i) { return i.mins != null; },
      pass: function (c) { return c.dataset.mins && parseFloat(c.dataset.mins) <= 60; }
    },
    must4: {
      /* Do not put glyphs like ★ in the label: the whole redesign was about no longer
         depending on whether a font has a star glyph, and writing one back onto a
         button just leaves the same hole open. */
      label: '游览 4 分+', tip: '只看游览价值 4 星及以上',
      need: function (i) { return i.must != null; },
      pass: function (c) { return parseFloat(c.dataset.must) >= 4; }
    }
  };

  /* Also laid out in declaration order. The two location-based sorts come first:
     standing at the roadside with the handbook open, "nearest to me" and "route" are
     about the only two you want to tap, and they do not belong at the end of the list. */
  var SORTS = {
    near: { label: '📍 离我最近', tip: '定位后按直线距离从近到远', geo: true },
    route: { label: '🚗 顺路', tip: '从我的位置出发，按沿途最近邻串一条顺序', geo: true },
    must: { label: '游览价值', tip: '游览价值从高到低', need: function (i) { return i.must != null; } },
    mins: { label: '用时短', tip: '参观时长从短到长', need: function (i) { return i.mins != null; } },
    n: { label: '按编号', tip: '恢复手册原本的地理顺序' }
  };

  var state = { filters: {}, sort: 'n', origin: null };
  var index = [], byId = {}, cards = [], bar = null, countEl = null;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function init() {
    index = window.WUIndex || [];
    if (!index.length) return;
    byId = {};
    index.forEach(function (i) { byId[i.id] = i; });
    cards = Array.prototype.slice.call(document.querySelectorAll('details.card'));
    if (!cards.length) return;
    buildBar();
    apply();
  }

  /* Only show controls this page can actually use: the socal book has no must and no
     visit duration, so giving it "visit 4★+" and "shortest first" would only ever
     produce a blank page when tapped. */
  function usable(def) {
    return !def.need || index.some(def.need);
  }

  /* Adjacent pills in the same group are welded into one segmented control (.xseg wipes
     out the inner rounded corners and borders); a pill on its own stays a standalone
     pill. When one side of a group does not occur anywhere in a handbook, the remaining
     side degrades naturally into a standalone pill and leaves no half-empty shell. */
  function filterPills(keys) {
    var html = '', seg = null;
    keys.forEach(function (k) {
      var g = FILTERS[k].group || null;
      var alone = g && keys.filter(function (x) { return FILTERS[x].group === g; }).length < 2;
      if (alone) g = null;
      if (g !== seg) {
        if (seg) html += '</span>';
        seg = g;
        if (g) html += '<span class="xseg">';
      }
      html += '<button type="button" class="xp" data-f="' + k + '" title="' +
        esc(FILTERS[k].tip) + '">' + esc(FILTERS[k].label) + '</button>';
    });
    return html + (seg ? '</span>' : '');
  }

  function buildBar() {
    var host = document.querySelector('.topbar');
    if (!host || document.getElementById('xbar')) return;

    var fKeys = Object.keys(FILTERS).filter(function (k) { return usable(FILTERS[k]); });
    var sKeys = Object.keys(SORTS).filter(function (k) { return usable(SORTS[k]); });
    var anyGeo = index.some(function (i) { return i.coord; });
    if (!anyGeo) sKeys = sKeys.filter(function (k) { return !SORTS[k].geo; });
    if (!fKeys.length && sKeys.length < 2) return;

    bar = document.createElement('div');
    bar.id = 'xbar';
    bar.className = 'xbar';
    bar.innerHTML = '<div class="xbar-inner">' +
      (fKeys.length
        ? '<div class="xg"><span class="xg-k">筛选</span>' + filterPills(fKeys) + '</div>'
        : '') +
      '<div class="xg"><span class="xg-k">排序</span>' +
      sKeys.map(function (k) {
        return '<button type="button" class="xp' + (k === 'n' ? ' on' : '') +
          '" data-s="' + k + '" title="' + esc(SORTS[k].tip) + '">' +
          esc(SORTS[k].label) + '</button>';
      }).join('') + '</div>' +
      '<span class="xbar-count" id="xbar-count"></span>' +
      '<button type="button" class="xp xp-reset" data-act="reset" hidden>清空</button>' +
      '</div>';
    host.parentNode.insertBefore(bar, host.nextSibling);
    countEl = bar.querySelector('#xbar-count');
    measure();
    window.addEventListener('resize', measure);

    bar.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      if (b.dataset.act === 'reset') { reset(); return; }
      if (b.dataset.f) {
        var key = b.dataset.f, on = !state.filters[key], g = FILTERS[key].group;
        /* Mutually exclusive within a group: tapping "paid" releases "free", no need to turn one off first */
        if (g) Object.keys(FILTERS).forEach(function (k) {
          if (FILTERS[k].group === g) state.filters[k] = false;
        });
        state.filters[key] = on;
        syncBar(); apply();
        return;
      }
      if (b.dataset.s) pickSort(b.dataset.s);
    });
  }

  /* The top bar wraps to two lines on narrow screens, and region name lengths change
     its height too, so the sticky offsets are measured. --topbar-h decides where the
     toolbar sticks, --stick-h how much headroom an anchor jump leaves; hardcode either
     in pixels and some viewport will bury the card head under the toolbar. */
  function measure() {
    var top = document.querySelector('.topbar');
    var th = top ? Math.round(top.getBoundingClientRect().height) : 53;
    var bh = bar ? Math.round(bar.getBoundingClientRect().height) : 0;
    var css = document.documentElement.style;
    css.setProperty('--topbar-h', th + 'px');
    css.setProperty('--stick-h', (th + bh + 12) + 'px');
  }

  function pickSort(key) {
    var def = SORTS[key];
    if (def && def.geo) {
      /* Locating is async, so put the button into a waiting state first; otherwise it looks like the tap missed */
      var btn = bar.querySelector('[data-s="' + key + '"]');
      if (btn) btn.classList.add('wait');
      window.WUGeo.locate().then(function (c) {
        state.origin = c;
        state.sort = key;
        if (btn) btn.classList.remove('wait');
        syncBar(); apply(); renderPanel();
      }).catch(function (err) {
        if (btn) btn.classList.remove('wait');
        if (window.WUCopy) window.WUCopy.toast(err.message, true);
      });
      return;
    }
    state.sort = key;
    dropPanel();
    syncBar(); apply();
  }

  function reset() {
    state.filters = {};
    state.sort = 'n';
    dropPanel();
    var q = document.getElementById('q');
    if (q) q.value = '';
    syncBar(); apply();
  }

  function syncBar() {
    if (!bar) return;
    bar.querySelectorAll('[data-f]').forEach(function (b) {
      b.classList.toggle('on', !!state.filters[b.dataset.f]);
    });
    bar.querySelectorAll('[data-s]').forEach(function (b) {
      b.classList.toggle('on', state.sort === b.dataset.s);
    });
    var dirty = state.sort !== 'n' || Object.keys(state.filters).some(function (k) {
      return state.filters[k];
    }) || !!(document.getElementById('q') || {}).value;
    bar.querySelector('.xp-reset').hidden = !dirty;
  }

  /* The one place visibility is decided: the search term and the filters stack. */
  function apply() {
    var q = ((document.getElementById('q') || {}).value || '').trim().toLowerCase();
    var active = Object.keys(state.filters).filter(function (k) { return state.filters[k]; });
    var hits = 0;

    cards.forEach(function (c) {
      var ok = !q || (c.dataset.search || '').indexOf(q) > -1;
      if (ok) {
        for (var i = 0; i < active.length; i++) {
          if (!FILTERS[active[i]].pass(c)) { ok = false; break; }
        }
      }
      c.hidden = !ok;
      if (ok) hits++;
      /* Whatever the search or filter hits auto-expands, and collapses again once the conditions are cleared */
      if (ok && (q || active.length)) c.open = true;
      if (!q && !active.length) c.open = false;
    });

    sortCards();

    /* A region with no matches at all is hidden whole, or the page is left with a string of shells that are just a heading and a map */
    document.querySelectorAll('#regions > section').forEach(function (sec) {
      sec.hidden = (!!q || !!active.length) && !sec.querySelector('details.card:not([hidden])');
    });

    var narrowed = !!q || !!active.length;
    if (countEl) {
      countEl.textContent = narrowed ? hits + ' / ' + cards.length + ' 个景点' : cards.length + ' 个景点';
      countEl.classList.toggle('zero', narrowed && hits === 0);
    }
    var qc = document.getElementById('q-count');
    if (qc) {
      qc.textContent = q ? hits + ' 个匹配' : '';
      qc.classList.toggle('zero', !!q && hits === 0);
    }
    syncBar();
  }

  /* Cards are reordered inside their own region. The number is printed on the card and
     the map pins are labelled with the same number, so reordering cannot break the
     correspondence between pins and cards. */
  function sortCards() {
    var order = null;
    if (state.sort === 'route' && state.origin) {
      order = {};
      window.WUGeo.chain(state.origin, index.filter(function (i) {
        var c = document.getElementById(i.id);
        return c && !c.hidden;
      })).forEach(function (i, k) { order[i.id] = k; });
    }

    document.querySelectorAll('#regions > section').forEach(function (sec) {
      var list = Array.prototype.slice.call(sec.querySelectorAll('details.card'));
      if (list.length < 2) return;
      /* Append back into the card's own parent; do not take the shortcut of writing
         sec.appendChild, which lifts the whole stack of cards out of .wrap and hangs it
         on the <section>, so the cards escape the text column and stretch across the
         viewport. This runs on first render too, so "cards much wider than the map"
         is guaranteed to show up. */
      var host = list[0].parentNode;
      var keyed = list.map(function (c, i) {
        return { el: c, i: i, k: sortKey(c, order) };
      });
      keyed.sort(function (a, b) {
        if (a.k === b.k) return a.i - b.i;       /* Equal keys keep their original order, so the sort is stable */
        return a.k - b.k;
      });
      keyed.forEach(function (x) { host.appendChild(x.el); });
    });
  }

  function sortKey(c, order) {
    var i = byId[c.id] || {};
    switch (state.sort) {
      case 'must':
        return i.must == null ? 99 : -i.must;
      case 'mins':
        return i.mins == null ? 1e6 : i.mins;
      case 'near':
        return state.origin && i.coord ? window.WUGeo.dist(state.origin, i.coord) : 1e6;
      case 'route':
        return order && order[c.id] != null ? order[c.id] : 1e6;
      default:
        return parseFloat(c.dataset.n) || 0;
    }
  }

  /* ---------- Nearby / route panel ----------
     Sorting only reorders the cards, but "which ten are nearest to me and how far is
     each one" has to be read across regions, so we open a separate panel at the very
     top of the content that just states the answer. */
  function renderPanel() {
    dropPanel();
    if (state.sort !== 'near' && state.sort !== 'route') return;
    var host = document.getElementById('regions');
    if (!host || !host.parentNode || !state.origin) return;

    var live = index.filter(function (i) {
      var c = document.getElementById(i.id);
      return c && !c.hidden && i.coord;
    });
    if (!live.length) return;

    var isNear = state.sort === 'near';
    var rows, head, lead;

    if (isNear) {
      rows = live.map(function (i) {
        return Object.assign({}, i, { d: window.WUGeo.dist(state.origin, i.coord) });
      }).sort(function (a, b) { return a.d - b.d; }).slice(0, 12);
      head = '离我最近';
      lead = '按当前位置到各景点的直线距离排序，只列最近的 ' + rows.length +
        ' 个。直线距离不等于车程，山区与跨河路段的实际车程可能是它的两三倍。' +
        '点景点名跳到卡片详情，点「导航」直接在地图应用里打开。';
    } else {
      rows = window.WUGeo.chain(state.origin, live).slice(0, 14).map(function (i) {
        return Object.assign({}, i, { d: i.leg });
      });
      head = '顺路串一条';
      lead = '从当前位置出发，每次选下一个最近的没去过的点，串出一条不折返的顺序。' +
        '这是给「手上这几个点大致按什么顺序走」用的参考，不是最优路线；' +
        '括号里是累计直线距离。实际开车请按导航与当天路况调整。';
    }

    var sec = document.createElement('section');
    sec.id = 'xp-panel';
    sec.className = 'xp-panel';
    sec.innerHTML = '<div class="wrap">' +
      '<h2>' + head + '<span class="count">' + rows.length + ' 个</span></h2>' +
      '<p class="section-lead">' + lead + '</p>' +
      '<ol class="near-list">' + rows.map(function (r, k) {
        var d = window.WUGeo.fmt(r.d);
        var extra = isNear
          ? '<span class="near-dir">' + window.WUGeo.bearing(state.origin, r.coord) + '</span>'
          : '<span class="near-dir">累计 ' + window.WUGeo.fmt(r.acc) + '</span>';
        return '<li class="near-li">' +
          '<span class="near-k">' + (k + 1) + '</span>' +
          '<a class="near-item" href="#' + esc(r.id) + '">' +
          '<span class="near-t">' + esc(r.en) +
          (r.name ? ' <i>' + esc(r.name) + '</i>' : '') + '</span>' +
          '<span class="near-meta">' +
          '<span class="near-d">' + d + '</span>' + extra +
          '<span class="near-r" style="color:' + esc(r.color) + '">' + esc(r.region) + '</span>' +
          (r.must != null ? '<span class="near-rt">' +
            window.WURating.stars(r.must, { size: 11 }) + '</span>' : '') +
          '</span></a>' +
          '<a class="near-go" target="_blank" rel="noopener" title="在地图应用里打开导航" ' +
          'href="https://www.google.com/maps/search/?api=1&query=' +
          r.coord[0] + ',' + r.coord[1] + '">导航</a>' +
          '</li>';
      }).join('') + '</ol></div>';
    host.parentNode.insertBefore(sec, host);
    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function dropPanel() {
    var p = document.getElementById('xp-panel');
    if (p) p.remove();
  }

  window.WUExplore = { init: init, apply: apply };
})();
