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
      ['建议参观时长', a.visit], ['预约', a.book], ['门票', a.ticket], ['开放时间', a.hours],
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

  /* 标题里每个专名都做成可复制按钮，点哪个复制哪个（见 assets/copy.js）。
     点标题不再展开卡片，展开交给卡头其余部分——否则每复制一次都会顺手
     把卡片撑开。copy.js 没加载上时退回纯文本标题，不让整页渲染跟着挂掉。 */
  function renderTitle(s) {
    var cp = window.WUCopy;
    if (!cp) {
      return '<h3>' + esc(s.en) +
        (s.name ? ' <span class="zh">' + esc(s.name) + '</span>' : '') + '</h3>';
    }
    return '<h3>' + cp.names(s.en, 'cp-en') +
      (s.name ? ' <span class="zh">' + cp.names(s.name, 'cp-zh') + '</span>' : '') + '</h3>';
  }

  function renderTags(tags, extra) {
    var items = (tags || []).map(function (t) {
      return '<span class="tag ' + (t.c || '') + '">' + esc(t.t) + '</span>';
    }).join('');
    if (!items && !extra) return '';
    return '<div class="tags">' + (extra || '') + items + '</div>';
  }

  /* 卡头评分。主评分是「必去价值」（传统旅游价值），摄影价值作为副行。
     socal 建站时只有摄影评分，没有 must 字段，这类条目仍按摄影价值显示，
     否则会把摄影分当成必去分展示出去。 */
  function renderScore(s) {
    var hasMust = s.must != null;
    var prim = hasMust ? s.must : s.score;
    if (prim == null) return '';
    var label = (hasMust ? '必去价值 ' : '摄影价值 ') + prim + '/5';
    return '<div class="card-score">' +
      '<div class="stars" title="' + label + '">' + stars(prim) + '</div>' +
      '<span class="score-label">' + label + '</span>' +
      (hasMust && s.score != null
        ? '<span class="score-sub">摄影 ' + s.score + '/5</span>' : '') +
      '</div>';
  }

  /* 收起状态下最该看到的一条硬信息：要待多久。
     完整的票价与开放时间在展开后的可达性表里。 */
  function renderMeta(s) {
    var visit = (s.access || {}).visit;
    if (!visit) return '';
    /* visit 是带 <strong> 的富文本，卡头只要个短标签，所以取首个数字区间 */
    var plain = String(visit).replace(/<[^>]+>/g, '');
    var m = plain.match(/[\d.]+\s*[–\-~]\s*[\d.]+\s*(小时|分钟|min|h)|[\d.]+\s*(小时|分钟|min|h)/);
    return '<span class="meta-chip" title="' + esc(plain) + '">⏱ ' +
      esc(m ? m[0] : plain.slice(0, 14)) + '</span>';
  }

  /* 供搜索框匹配的纯文本。标签与 tldr 里的信息量最大，正文太长反而会让
     搜索结果失去区分度，所以只索引标题、结论与标签。 */
  function searchBlob(s, regionName) {
    return [s.en, s.name, s.id, regionName, String(s.tldr || ''),
      (s.tags || []).map(function (t) { return t.t; }).join(' ')]
      .join(' ').replace(/<[^>]+>/g, '').toLowerCase();
  }

  function renderCard(s, regionName) {
    /* details/summary：默认收起，点标题展开。打印时 CSS 会强制全部展开 */
    var thumb = (s.images && s.images[0] && s.images[0].url) || '';
    var h = '<details class="card' + (s.gone ? ' gone' : '') + '" id="' + esc(s.id) +
      '" data-search="' + esc(searchBlob(s, regionName)) + '">';
    h += '<summary class="card-head">' +
      /* gone 的点位也保留编号：否则可见编号会出现空档，
         且同一分区有多个 gone 时地图上会出现多个无法区分的标记。
         「不可抵达」靠红色与删除线表达，见 style.css 的 .card.gone .card-num */
      '<div class="card-num">' + s.n + '</div>' +
      (thumb
        ? '<div class="card-thumb"><img loading="lazy" src="' + thumb + '" alt=""></div>'
        : '<div class="card-thumb card-thumb-empty" aria-hidden="true"></div>') +
        '<div class="card-title">' + renderTitle(s) +
      (s.gone ? '<span class="gone-flag">' + esc(s.gone) + '</span>' : '') +
      (s.tldr ? '<div class="tldr">' + s.tldr + '</div>' : '') +
      renderTags(s.tags, renderMeta(s)) + '</div>' +
      (s.gone ? '' : renderScore(s)) +
      '<span class="expand" aria-hidden="true">' +
      '<span class="lbl-shut">展开详情</span><span class="lbl-open">收起</span>' +
      '<span class="chev">▾</span></span>' +
      '</summary>';

    h += '<div class="card-body">';
    /* 顺序即优先级：普通游客先看「看什么、怎么逛、要多久」，
       摄影相关的两块排在可达性之后，作为辅助信息。 */
    if (s.highlights) h += '<div class="row"><div class="k">核心看点</div>' + renderList(s.highlights) + '</div>';
    if (s.tour) h += '<div class="row"><div class="k">游览要点</div>' + renderList(s.tour) + '</div>';
    if (s.access) h += '<div class="row"><div class="k">可达性</div>' + renderAccess(s.access) + '</div>';
    if (s.notes) h += '<div class="row"><div class="k">注意事项</div>' + renderList(s.notes) + '</div>';
    /* 摄影内容整体折叠：这本手册以游玩为主，机位是给有需要的人的附加信息，
       默认展开会把「看什么、要多久」挤到屏幕外面去。

       但加州海岸那批条目偏重摄影机位、没有 tour 字段，摄影内容就是它们的主体；
       一并折叠等于把整张卡片清空。所以只对带 tour 的条目折叠，
       其余条目仍按原样平铺显示。 */
    var fold = !!(s.tour && s.tour.length);
    if (s.photo || (s.shots && s.shots.length)) {
      h += '<details class="photo-fold"' + (fold ? '' : ' open') + '><summary>📷 摄影参考' +
        (s.score != null ? '（摄影价值 ' + s.score + '/5' +
          (s.shots && s.shots.length ? ' · ' + s.shots.length + ' 个机位' : '') + '）' : '') +
        '</summary><div class="photo-fold-body">' +
        (s.photo ? '<div class="row"><div class="k">摄影价值</div><div class="v">' + s.photo + '</div></div>' : '') +
        (s.shots && s.shots.length
          ? '<div class="row"><div class="k">机位（可直接导航）</div>' +
            s.shots.map(renderSpot).join('') + '</div>'
          : '') +
        '</div></details>';
    }
    if (s.images) h += '<div class="row"><div class="k">参考图</div>' + renderImages(s.images) + '</div>';
    h += '</div></details>';
    return h;
  }

  /* ---------- 地图 ---------- */

  /* 子地区配色。多数地域的 data.js 给所有子地区写了同一个 color（那是整本
     手册的主色），直接拿来用的话总地图上七个子地区全是一个颜色、图例也就白搭了。
     所以只在各子地区颜色本来就互不相同时沿用数据里的值，否则按调色板分配。 */
  var PALETTE = ['#ff8a3d', '#4dd0e1', '#f06292', '#9ccc65', '#ba68c8',
                 '#ffd54f', '#4fc3f7', '#ff8a65', '#aed581', '#7986cb'];
  var COLORS = [];

  function initColors(regions) {
    var uniq = {};
    regions.forEach(function (r) { if (r.color) uniq[r.color] = 1; });
    var distinct = Object.keys(uniq).length >= regions.length;
    COLORS = regions.map(function (r, i) {
      return distinct ? r.color : PALETTE[i % PALETTE.length];
    });
  }

  function regionColor(r, i) { return COLORS[i] || r.color || PALETTE[i % PALETTE.length]; }

  function baseMap(el) {
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
    /* 点一下才启用滚轮缩放，避免页面滚动被地图吃掉 */
    map.on('click', function () { map.scrollWheelZoom.enable(); });
    map.on('mouseout', function () { map.scrollWheelZoom.disable(); });
    return map;
  }

  function spotCoord(s) {
    return (s.shots && s.shots[0] && (s.shots[0].view || s.shots[0].park || s.shots[0].at)) || s.at;
  }

  function addSpotMarker(map, s, c, color, subName) {
    var icon = L.divIcon({
      className: '',
      html: '<div class="pin' + (s.gone ? ' pin-gone' : '') + '" style="background:' +
        (s.gone ? '#ff6b6b' : color) + '">' + s.n + '</div>',
      iconSize: [26, 26], iconAnchor: [13, 13]
    });
    L.marker(c, { icon: icon, title: s.en }).addTo(map).bindPopup(
      '<b>' + esc(s.en) + '</b>' + (s.name ? ' <span style="color:#a0a6b3">' + esc(s.name) + '</span>' : '') + '<br>' +
      (subName ? '<span style="color:' + color + ';font-weight:700">' + esc(subName) + '</span><br>' : '') +
      (s.gone
        ? '<span style="color:#ff6b6b;font-weight:700">' + esc(s.gone) + '</span><br>'
        : '<span style="color:#ffd24d">' + stars(s.must != null ? s.must : s.score) + '</span> ' +
          (s.must != null
            ? '必去 ' + s.must + '/5' + (s.score != null ? ' · 摄影 ' + s.score + '/5' : '')
            : s.score + '/5') + '<br>') +
      '<a href="#' + esc(s.id) + '">↓ 跳到详情</a> · ' +
      '<a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' +
      c[0] + ',' + c[1] + '">导航</a>'
    );
  }

  function buildMap(el, region, i) {
    var map = baseMap(el);
    var bounds = [];
    region.spots.forEach(function (s) {
      var c = spotCoord(s);
      if (!c) return;
      bounds.push(c);
      addSpotMarker(map, s, c, regionColor(region, i), '');
    });

    if (bounds.length > 1) map.fitBounds(bounds, { padding: [40, 40] });
    else if (bounds.length === 1) map.setView(bounds[0], 13);
    else map.setView(region.center || [34, -119], region.zoom || 8);
    return map;
  }

  /* 全区总地图：一本手册里所有子地区的景点标在同一张图上，颜色区分子地区。
     分区地图只能回答「这个子地区里怎么串」，看不出整趟路线的骨架——
     哪几个子地区其实挨着、哪个是甩出去的支线，都要在这张图上才看得出来。 */
  function buildAllMap(regions) {
    var el = document.getElementById('map-all');
    if (!el) return;
    var map = baseMap(el);
    var bounds = [];
    regions.forEach(function (r, i) {
      (r.spots || []).forEach(function (s) {
        var c = spotCoord(s);
        if (!c) return;
        bounds.push(c);
        addSpotMarker(map, s, c, regionColor(r, i), r.navName || r.name);
      });
    });
    if (bounds.length > 1) map.fitBounds(bounds, { padding: [30, 30] });
    else if (bounds.length === 1) map.setView(bounds[0], 11);
  }

  function renderAllMap(regions) {
    var host = document.getElementById('regions');
    if (!host || !host.parentNode) return;
    var total = regions.reduce(function (n, r) { return n + (r.spots || []).length; }, 0);
    var legend = regions.map(function (r, i) {
      return '<a class="lg" href="#' + esc(r.id) + '">' +
        '<i style="background:' + regionColor(r, i) + '"></i>' +
        esc(r.navName || r.name) + '<b>' + (r.spots || []).length + '</b></a>';
    }).join('');

    var sec = document.createElement('section');
    sec.id = 'all-map';
    sec.innerHTML = '<div class="wrap">' +
      '<h2>全区总地图<span class="count">' + total + ' 个景点</span></h2>' +
      '<p class="section-lead">这一本手册里的景点全部标在这张图上，颜色对应子地区，编号与卡片一致。' +
      '先在这里看清各子地区的相对位置与支线距离，再往下看单个子地区的分区地图与卡片。' +
      '点图钉可以跳到卡片详情或直接导航。</p>' +
      '<div class="map map-all" id="map-all"></div>' +
      '<div class="map-legend">' + legend + '</div></div>';
    host.parentNode.insertBefore(sec, host);
  }

  /* ---------- 装配 ---------- */
  function render() {
    var root = document.getElementById('regions');
    var nav = document.getElementById('region-nav');
    if (!root || typeof REGIONS === 'undefined') return;

    initColors(REGIONS);
    renderAllMap(REGIONS);
    if (nav) {
      var am = document.createElement('a');
      am.href = '#all-map';
      am.textContent = '总地图';
      nav.appendChild(am);
    }

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
        '<span class="toolbar-hint">点景点名即复制，可直接粘到 Google Maps 搜索收藏</span>' +
        '</div>' +
        r.spots.map(function (s) { return renderCard(s, r.name); }).join('') +
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

    buildAllMap(REGIONS);
    REGIONS.forEach(function (r, i) {
      var el = document.getElementById('map-' + r.id);
      if (el) buildMap(el, r, i);
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

    wrapWideTables();
    buildSearch();
    if (window.WUCopy) window.WUCopy.bind();
  }

  /* ---------- 搜索 ----------
     装在 sticky 顶栏里，全页所有分区的卡片一起过滤。匹配为空的分区整块隐藏，
     否则页面上会留下一串只有标题和地图的空壳。 */
  function buildSearch() {
    var bar = document.querySelector('.topbar-inner');
    if (!bar || document.getElementById('q')) return;
    var cards = Array.prototype.slice.call(document.querySelectorAll('details.card'));
    if (!cards.length) return;

    var box = document.createElement('div');
    box.className = 'searchbox';
    box.innerHTML =
      '<input id="q" type="search" autocomplete="off" placeholder="搜索景点（名称 / 标签 / 结论）">' +
      '<span class="search-count" id="q-count"></span>';
    bar.appendChild(box);

    var input = box.querySelector('#q');
    var count = box.querySelector('#q-count');

    function apply() {
      var q = input.value.trim().toLowerCase();
      var hits = 0;
      cards.forEach(function (c) {
        var ok = !q || (c.dataset.search || '').indexOf(q) > -1;
        c.hidden = !ok;
        if (ok) hits++;
        if (q && ok) c.open = true;
        if (!q) c.open = false;
      });
      /* 分区与其地图一起隐藏 */
      document.querySelectorAll('#regions > section').forEach(function (sec) {
        var any = sec.querySelector('details.card:not([hidden])');
        sec.hidden = !!q && !any;
      });
      count.textContent = q ? hits + ' 个匹配' : '';
      count.classList.toggle('zero', !!q && hits === 0);
    }

    /* 结果在总览与地图下面，不滚一下等于看不见。只在刚开始输入时滚一次，
       之后每敲一个字都滚会把页面拽得停不下来。 */
    var wasEmpty = true;
    input.addEventListener('input', function () {
      apply();
      var nowEmpty = !input.value.trim();
      if (wasEmpty && !nowEmpty) {
        var first = document.querySelector('#regions > section:not([hidden])');
        if (first) first.scrollIntoView({ block: 'start' });
      }
      wasEmpty = nowEmpty;
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { input.value = ''; apply(); input.blur(); }
    });
  }

  /* 把还没套滚动容器的表格包进 .tbl-scroll。
     子地区数据里的 callout 是研究员手写的 HTML，常常直接放裸 <table>，
     在窄视口下会把整个文档撑宽、出现横向滚动条。这里统一兜底。 */
  function wrapWideTables() {
    document.querySelectorAll('table').forEach(function (t) {
      if (t.closest('.tbl-scroll')) return;
      var wrap = document.createElement('div');
      wrap.className = 'tbl-scroll';
      t.parentNode.insertBefore(wrap, t);
      wrap.appendChild(t);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
