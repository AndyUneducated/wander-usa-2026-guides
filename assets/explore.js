/* ===== 探索工具条：筛选 / 排序 / 附近 / 顺路 =====

   这本手册同时要服侍三种场景，工具条就是按这三种场景设计的：
     在家规划  —— 按游览价值排序、筛掉需要预约的，先把骨架定下来
     路上速查  —— 「我只有一小时」「现在免费能进的有哪些」
     就近浏览  —— 定位后按距离排序，或者把手上这几个点按顺路串起来

   交互上只有两种控件：筛选药丸（可多选，点亮即生效）与排序药丸（单选）。
   没有下拉菜单、没有弹窗、没有二级面板，所有状态都写在药丸的亮/暗上，
   一眼能看出「现在筛掉了什么、按什么排的」，再点一下就还原。

   门票与预约各有正反两面（免费/收费、免预约/需预约），它们被拼成一个
   连体的分段控件：同一段里只能亮一个，点另一个就换过去，不用先关再开。
   这四个加上「≤1 小时」「游览 4 分+」一共六个条件——还没到需要下拉的量，
   而下拉会把「现在筛掉了什么」藏进第二次点击里，正是路上查手册最怕的。

   筛选与顶栏搜索框是叠加关系（搜索缩小范围，筛选再缩小一层），
   所以可见性由本文件统一裁决，app.js 的搜索回调转发到这里。 */
(function () {
  'use strict';

  /* 声明顺序即工具条上的排列顺序。带 group 的相邻项拼成一个分段控件，
     同组互斥——「免费」与「收费」同时亮着只会筛出一页空白。 */
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
      /* 标签里不要用 ★ 这类字形：整个改版就是为了不再依赖字体有没有星形字形，
         按钮上再写一个回去等于留个坑。 */
      label: '游览 4 分+', tip: '只看游览价值 4 星及以上',
      need: function (i) { return i.must != null; },
      pass: function (c) { return parseFloat(c.dataset.must) >= 4; }
    }
  };

  /* 同样按声明顺序排列。两个定位类排最前：站在路边打开手册时，
     「离我最近」「顺路」几乎是唯一想点的两个，它们不该排在列表末尾。 */
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

  /* 只放这一页真的用得上的控件：socal 那本没有 must 与参观时长，
     给它显示「游览 4★+」和「用时短」只会点出一页空白。 */
  function usable(def) {
    return !def.need || index.some(def.need);
  }

  /* 相邻的同组药丸拼成一个分段控件（.xseg 负责把中间的圆角与描边抹掉），
     单独成项的照旧是一颗独立药丸。同一组里某一面整本手册都没有的时候，
     剩下那一面自然退化成独立药丸，不会留下半截空壳。 */
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
        /* 同组互斥：点「收费」就把「免费」松开，不用先关再开 */
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

  /* 顶栏在窄屏会折成两行、地域名长短也会影响高度，所以粘顶的偏移量实测。
     --topbar-h 决定工具条粘在哪，--stick-h 决定锚点跳转要留多少白，
     两者写死像素的话换个视口就会把卡头压在工具条底下。 */
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
      /* 定位是异步的，先把按钮打成等待态，别让人以为没点上 */
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

  /* 可见性的唯一裁决处：搜索词与筛选是叠加的。 */
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
      /* 搜到/筛到的结果自动展开，清空条件时收回去 */
      if (ok && (q || active.length)) c.open = true;
      if (!q && !active.length) c.open = false;
    });

    sortCards();

    /* 一个匹配都没有的分区整块收掉，否则页面上会留下一串只有标题和地图的空壳 */
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

  /* 卡片在各自的分区里重排。编号写在卡片上、地图图钉也按编号标，
     所以重排之后图钉与卡片的对应关系不会乱。 */
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
      /* 追加回卡片原本的父节点，不能图省事写 sec.appendChild：那样会把整叠卡片
         从 .wrap 里拎出来挂到 <section> 上，卡片就此脱离正文栏、横着撑满视口。
         这一步在首次渲染时就会跑，所以「卡片比地图宽一大截」是必现的。 */
      var host = list[0].parentNode;
      var keyed = list.map(function (c, i) {
        return { el: c, i: i, k: sortKey(c, order) };
      });
      keyed.sort(function (a, b) {
        if (a.k === b.k) return a.i - b.i;       /* 同分保持原顺序，排序结果才稳定 */
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

  /* ---------- 附近 / 顺路面板 ----------
     排序只是把卡片重排，但「离我最近的十个是谁、分别多远」需要跨分区看，
     所以另开一块面板放在正文最前面，直接给结论。 */
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
