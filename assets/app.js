/* ===== Rendering engine: turn REGIONS from data.js into per-region maps + spot cards ===== */

(function () {
  'use strict';

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  /* Star ratings always go through the inline SVG in assets/rating.js. They used to be
     spelled out with ★☆⯨; the half-star character has no glyph in most Windows fonts
     and rendered as a row of yellow squares. If rating.js did not load, fall back to a
     bare number instead of taking the whole page down with it. */
  function stars(score) {
    if (window.WURating) return window.WURating.stars(score, { size: 13 });
    return score + '/5';
  }

  /* Coordinates to Apple / Google navigation links. Apple Maps opens the native map directly on macOS + iPhone */
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

  /* Every proper noun in the title is its own copy button — click one, copy that one
     (see assets/copy.js). Clicking the title no longer expands the card; expanding is
     left to the rest of the card head, or every copy would also pop the card open.
     If copy.js did not load, fall back to a plain title so the page still renders. */
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

  /* Card-head scores. Visit value and photo value sit on two rows with their stars
     left-aligned, so you can compare at a glance. The tier text ("worth a special trip"
     and friends) only shows on hover/click; the card head stays minimal. socal was
     built with photo scores only and no must field, so those entries render just the
     photo row and never pass a photo score off as a visit score. */
  function renderScore(s) {
    if (!window.WURating) return '';
    var b = window.WURating.block(s.must, s.score);
    return b ? '<div class="card-score">' + b + '</div>' : '';
  }

  /* The rules for extracting hard facts all live in assets/facts.js, shared by the page
     and the checking scripts; otherwise the values displayed and the values
     tools/check_render.js computes would drift apart sooner or later. */
  var F = window.WUFacts;
  var plainText = F.plainText;
  var facts = F.facts;

  /* The one hard fact worth seeing while collapsed: how long you need there.
     Full prices and opening hours are in the quick-look bar and access table once expanded. */
  function renderMeta(f) {
    if (!f.visit) return '';
    return '<span class="meta-chip" title="' + esc(f.visit) + '">⏱ ' +
      esc(f.dur || f.visit.slice(0, 14)) + '</span>';
  }

  /* The first screen after expanding: the four things most often asked when checking the
     handbook in the car, so you need not scroll down to the access table. Each cell shows
     the extracted short value, the full original is in the title, and a tap jumps to the table. */
  function renderQuick(f) {
    var items = [
      ['⏱', '时长', f.dur, f.visit],
      ['🎟', '门票', f.price, f.ticket],
      ['🕐', '开放', f.open, f.hours],
      ['📅', '预约', f.booking === 'no' ? '不需预约' : f.booking === 'yes' ? '需预约' : null, f.book]
    ].filter(function (x) { return x[3]; });
    if (!items.length) return '';
    return '<div class="quick">' + items.map(function (x) {
      var val = x[2] || (x[3].length > 13 ? x[3].slice(0, 13) + '…' : x[3]);
      return '<div class="qk" title="' + esc(x[3]) + '">' +
        '<span class="qk-k">' + x[0] + ' ' + x[1] + '</span>' +
        '<span class="qk-v">' + esc(val) + '</span></div>';
    }).join('') + '</div>';
  }

  /* ---------- Key points: summary outside, detail inside ----------
     The data convention is that every point opens with <strong>a one-sentence
     conclusion</strong> ("how to tour" complies 100%, "what to see" 85%, bold openers
     average 35-41 characters), so the first bold run is naturally the summary of that
     point: by default only it is shown, one line per point, with the whole detail
     folded inside. An expanded card is then a scannable checklist of points, and you
     expand whichever one you want rather than reading two thousand characters up front.
     The splitting rule is splitLead in assets/facts.js. */
  function renderPoints(list) {
    if (!list) return '';
    if (!Array.isArray(list)) return '<div class="v">' + list + '</div>';
    return '<ul class="pts">' + list.map(function (item) {
      var p = F.splitLead(item);
      /* A detail this short is not worth another click, so lay the whole point out flat */
      if (plainText(p.rest).length < F.FLAT_UNDER) {
        return '<li class="pt pt-flat">' + item + '</li>';
      }
      return '<li class="pt"><details><summary>' +
        '<span class="pt-lead">' + p.lead + '</span>' +
        '<span class="pt-more" aria-hidden="true"></span>' +
        '</summary><div class="pt-rest">' + p.rest + '</div></details></li>';
    }).join('') + '</ul>';
  }

  /* Plain text for the search box to match on. Tags and tldr carry the most information;
     the body text is so long it would blur the results instead, so we only index the
     title, the conclusion and the tags. */
  function searchBlob(s, regionName) {
    return [s.en, s.name, s.id, regionName, String(s.tldr || ''),
      (s.tags || []).map(function (t) { return t.t; }).join(' ')]
      .join(' ').replace(/<[^>]+>/g, '').toLowerCase();
  }

  function renderCard(s, regionName) {
    /* details/summary: collapsed by default, click the title to expand. When printing, CSS force-expands everything */
    var thumb = (s.images && s.images[0] && s.images[0].url) || '';
    var f = facts(s);
    /* The extracted hard facts hang off data-*, so filtering and sorting read them directly instead of parsing the rich text again */
    var h = '<details class="card' + (s.gone ? ' gone' : '') + '" id="' + esc(s.id) +
      '" data-search="' + esc(searchBlob(s, regionName)) + '"' +
      ' data-must="' + (s.must == null ? '' : s.must) + '"' +
      ' data-photo="' + (s.score == null ? '' : s.score) + '"' +
      ' data-mins="' + (f.mins == null ? '' : f.mins) + '"' +
      ' data-book="' + (f.booking || '') + '"' +
      ' data-free="' + (f.free ? '1' : '') + '"' +
      ' data-paid="' + (f.paid ? '1' : '') + '"' +
      ' data-n="' + s.n + '">';
    h += '<summary class="card-head">' +
      /* Gone spots keep their number too: otherwise the visible numbering has holes in
         it, and with several gone spots in one region the map gets several markers you
         cannot tell apart. "Unreachable" is carried by the red colour and the strikethrough,
         see .card.gone .card-num in style.css */
      '<div class="card-num">' + s.n + '</div>' +
      (thumb
        ? '<div class="card-thumb"><img loading="lazy" src="' + thumb + '" alt=""></div>'
        : '<div class="card-thumb card-thumb-empty" aria-hidden="true"></div>') +
        '<div class="card-title">' + renderTitle(s) +
      (s.gone ? '<span class="gone-flag">' + esc(s.gone) + '</span>' : '') +
      (s.tldr ? '<div class="tldr">' + s.tldr + '</div>' : '') +
      renderTags(s.tags, renderMeta(f)) + '</div>' +
      (s.gone ? '' : renderScore(s)) +
      '<span class="expand" aria-hidden="true">' +
      '<span class="lbl-shut">展开详情</span><span class="lbl-open">收起</span>' +
      '<span class="chev">▾</span></span>' +
      '</summary>';

    h += '<div class="card-body">';
    /* Information architecture after expanding; the order is the priority:
         quick-look bar -- duration/ticket/hours/booking, the four things you look at
                           first when checking the handbook on the road
         what to see    -- the things you actually go and look at (was "core highlights")
         how to tour    -- what order to walk it, what to skip, where the toilets and
                           food are (was "touring tips")
       The two blocks used to be called "core highlights" and "touring tips"; the names
       sound like the same thing, so readers naturally felt they were duplicates. The
       first is really about what you look at and the second about how you walk it, and
       renaming them to "what to see" / "how to tour" makes the split obvious at a
       glance without touching the content itself.
       Practical info and warnings come after, and the two photography blocks last, as extras. */
    h += renderQuick(f);
    if (s.highlights) h += '<div class="row"><div class="k">看什么</div>' + renderPoints(s.highlights) + '</div>';
    if (s.tour) h += '<div class="row"><div class="k">怎么逛</div>' + renderPoints(s.tour) + '</div>';
    if (s.access) h += '<div class="row"><div class="k">实用信息</div>' + renderAccess(s.access) + '</div>';
    /* Warnings are never folded: they are short sentences to begin with (median 85
       characters per item, less than half the length of a key point), and mostly they
       are constraints like security screening, photo bans and seasonal closures — the
       kind you pay for not knowing. Hiding half a sentence of safety advice behind a
       click does not save enough space to be worth it. */
    if (s.notes) h += '<div class="row"><div class="k">注意事项</div>' + renderList(s.notes) + '</div>';
    /* The photography block folds as a whole: this handbook is mainly about visiting, and
       shooting positions are extra information for those who want them; expanded by
       default they push "what to see" and "how long" off the screen.

       But the California coast entries lean on shooting positions and have no tour field,
       so photography is their main body — folding it as well would empty the whole card.
       So we only fold for entries that have a tour, and the rest stay laid out flat. */
    var fold = !!(s.tour && s.tour.length);
    if (s.photo || (s.shots && s.shots.length)) {
      h += '<details class="photo-fold"' + (fold ? '' : ' open') + '><summary>' +
        '<span class="pf-t">📷 摄影参考</span>' +
        (s.score != null ? '<span class="pf-s">' + stars(s.score) + '</span>' : '') +
        (s.shots && s.shots.length
          ? '<span class="pf-n">' + s.shots.length + ' 个机位</span>' : '') +
        '</summary><div class="photo-fold-body">' +
        (s.photo ? '<div class="row"><div class="k">摄影点评</div><div class="v">' + s.photo + '</div></div>' : '') +
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

  /* ---------- Maps ---------- */

  /* Sub-region colours. In most regions data.js gives every sub-region the same color
     (the main colour of the whole handbook); used as is, all seven sub-regions on the
     overview map come out one colour and the legend is worthless. So we only keep the
     values from the data when the sub-region colours already differ from each other,
     and otherwise hand them out from the palette. */
  var PALETTE = ['#4d9bff', '#3fcbdd', '#f06292', '#9ccc65', '#ba68c8',
                 '#7986cb', '#4bd18a', '#a78bfa', '#5ac8fa', '#e57373'];
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
    /* Base map is Esri Dark Gray Canvas: no key needed, and the dark tone matches the
       site palette. The CARTO dark_all we used before now requires an API key and
       returns tiles watermarked "API KEY REQUIRED". Dark Gray Base carries no place
       names, so a Reference layer is stacked on top for the labels. */
    var ESRI = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/';
    var ESRI_ATTR = 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ';
    L.tileLayer(ESRI + 'World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: ESRI_ATTR, maxZoom: 16
    }).addTo(map);
    L.tileLayer(ESRI + 'World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16, pane: 'shadowPane'
    }).addTo(map);
    /* Wheel zoom only switches on after a click, so the map does not swallow page scrolling */
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
        : '<span class="pop-rt">' + stars(s.must != null ? s.must : s.score) + '</span> ' +
          (s.must != null
            ? '游览 ' + s.must + '/5' + (s.score != null ? ' · 摄影 ' + s.score + '/5' : '')
            : '摄影 ' + s.score + '/5') + '<br>') +
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

  /* All-region overview map: every spot from every sub-region of one handbook on a
     single map, colour-coded by sub-region. A sub-region map can only answer "how do I
     string this sub-region together" and shows nothing of the skeleton of the trip —
     which sub-regions actually sit next to each other, and which one is the detour
     hanging off the side, is only visible on this map. */
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

  /* ---------- Folding the appendix ----------
     The appendix is five or six sections of lookup-table data; laid out flat it is longer
     than the body text, and scrolling to the end of the page means wading through a
     screenful of sunrise-bearing tables. Here each section is folded into a card that is
     closed by default: the title keeps only its main clause, the qualifier in parentheses
     drops to small print, and we automatically mark which spots the section covers — scan
     the titles and you know which card to open.

     Splitting rule: an h3.apx-h starts a section, which runs until the next h3.apx-h. */

  /* Which spots a section involves: run its body text against the names in the spot
     index. The first column of the appendix tables is the spot name, so the hits are
     quite accurate; where nothing hits (a sunrise/sunset table listed by city, say) we
     do not force it and honestly say it applies to the whole region. */
  function apxScope(nodes) {
    var txt = nodes.map(function (n) { return n.textContent || ''; }).join(' ');
    var hits = [];
    (window.WUIndex || []).forEach(function (i) {
      /* The tables often use short names (The Met / Statue of Liberty), so we derive a
         second short form of the English name: everything before the first connector.
         Names that are too short hit by accident, so they do not take part in matching. */
      var keys = [i.en, String(i.en || '').split(/\s*[&（(:：·]/)[0].trim()];
      var hit = keys.some(function (k) { return k.length >= 6 && txt.indexOf(k) > -1; }) ||
        (i.name && i.name.length >= 3 && txt.indexOf(i.name) > -1);
      if (hit) hits.push(i);
    });
    /* Hitting one or two names usually just means the text mentions them in passing and
       the section is not about them (a sunrise/sunset table is listed by city but will
       still name a spot here and there). Three hits is the threshold for counting. */
    if (hits.length < 3) return '全区通用';
    var names = hits.slice(0, 3).map(function (i) { return i.name || i.en; });
    return hits.length + ' 个景点 · ' + names.join('、') + (hits.length > 3 ? ' 等' : '');
  }

  function foldAppendix() {
    var body = document.getElementById('appendix-body');
    if (!body) return;
    var groups = [], cur = null;
    Array.prototype.slice.call(body.childNodes).forEach(function (n) {
      if (n.nodeType === 1 && n.classList && n.classList.contains('apx-h')) {
        cur = { h: n, body: [] };
        groups.push(cur);
      } else if (cur) {
        cur.body.push(n);
      }
    });
    if (!groups.length) return;

    groups.forEach(function (g) {
      var raw = (g.h.textContent || '').trim();
      var key = '';
      var m = /^([A-Z])[.．、]\s*/.exec(raw);
      if (m) { key = m[1]; raw = raw.slice(m[0].length); }
      /* Qualifiers like "(example date, EDT)" are lifted out of the title and dropped to small print; the title keeps only its main clause */
      var note = '';
      var p = /（([^）]*)）\s*$/.exec(raw);
      if (p) { note = p[1]; raw = raw.slice(0, p.index).trim(); }

      var d = document.createElement('details');
      d.className = 'apx-fold';
      if (key) d.id = 'apx-' + key.toLowerCase();
      d.innerHTML = '<summary class="apx-sum">' +
        (key ? '<span class="apx-key">' + esc(key) + '</span>' : '') +
        '<span class="apx-t">' + esc(raw) + '</span>' +
        (note ? '<span class="apx-note">' + esc(note) + '</span>' : '') +
        '<span class="apx-scope">' + esc(g.h.dataset.scope || apxScope(g.body)) + '</span>' +
        '<span class="apx-chev" aria-hidden="true">▾</span>' +
        '</summary><div class="apx-fold-body"></div>';
      var into = d.querySelector('.apx-fold-body');
      body.insertBefore(d, g.h);
      g.h.remove();
      g.body.forEach(function (n) { into.appendChild(n); });
    });
  }

  /* ---------- Assembly ---------- */
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
      /* Up-front reminders all move to the appendix; a region's body goes straight into map + cards */
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

    /* The appendix link goes after all the regions */
    if (nav) {
      var ap = document.createElement('a');
      ap.href = '#appendix';
      ap.textContent = '附录';
      nav.appendChild(ap);
    }

    /* Gather every region's up-front reminders into the appendix (intro.js has already filled sections A-D) */
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
        /* Lay these out flat in the appendix container, do not wrap them in another div:
           foldAppendix splits sections on "starts at an h3, ends at the next h3", and one
           more layer of wrapping makes this section get skipped. */
        var wrap = document.createElement('div');
        wrap.innerHTML = '<h3 class="apx-h" data-scope="' + blocks.length +
          ' 个子地区的共性提醒">F. 分区提醒与关键约束</h3>' +
          '<p class="section-lead">正文里每个分区直接从景点卡片开始，这些前置提醒集中放在这里。' +
          '每块标题右侧可跳回对应分区。</p>' + blocks.join('');
        while (wrap.firstChild) apxBody.appendChild(wrap.firstChild);
      }
    }

    buildAllMap(REGIONS);
    REGIONS.forEach(function (r, i) {
      var el = document.getElementById('map-' + r.id);
      if (el) buildMap(el, r, i);
    });

    /* Hand the spots and their coordinates to explore.js: filtering, sorting, nearby and
       route all use this index. Folding the appendix also needs it to work out which
       spots each section talks about, so it has to be built before both of them. */
    window.WUIndex = buildIndex(REGIONS);
    foldAppendix();

    /* Expand all / collapse all */
    root.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.card-toolbar button');
      if (!btn) return;
      var sec = document.getElementById(btn.dataset.region);
      if (!sec) return;
      var open = btn.dataset.act === 'open';
      sec.querySelectorAll('details.card').forEach(function (d) { d.open = open; });
    });

    /* When arriving from a map pin or the table of contents, expand the target card
       automatically. The target may also be buried in a folded appendix section (the
       region reminders are), so we walk up and open every ancestor details as well, or
       the browser scrolls to a closed shell. */
    function openFromHash() {
      var id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;
      var d = el.closest('details');
      while (d) {
        d.open = true;
        d = d.parentNode && d.parentNode.closest ? d.parentNode.closest('details') : null;
      }
      /* The "overview" entry in the contents points at the whole section while the body
         is folded inside it; only walking up to ancestors lands on a closed heading bar. */
      var inner = el.querySelector && el.querySelector('details.sec-fold');
      if (inner) inner.open = true;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.addEventListener('hashchange', openFromHash);
    openFromHash();

    /* Expand everything before printing / exporting to PDF (browsers hide collapsed details by default and CSS cannot override it) */
    var printRestore = [];
    window.addEventListener('beforeprint', function () {
      printRestore = [];
      document.querySelectorAll('details.card, details.callout, details.apx-fold, details.sec-fold').forEach(function (d) {
        printRestore.push([d, d.open]);
        d.open = true;
      });
    });
    window.addEventListener('afterprint', function () {
      printRestore.forEach(function (p) { p[0].open = p[1]; });
    });

    /* Clicking the score row reveals tier text such as "worth a special trip".
       Touchscreens have no hover, so this is needed; and because the score block grows
       inside the <summary>, the bubbling has to be stopped, or every look at the tier
       text would also pop the card open. */
    root.addEventListener('click', function (e) {
      var row = e.target.closest && e.target.closest('.rt-row');
      if (!row) return;
      e.preventDefault();
      e.stopPropagation();
      var box = row.parentNode;
      box.classList.toggle('rt-show');
    });

    wrapWideTables();
    buildSearch();
    if (window.WUCopy) window.WUCopy.bind();
    if (window.WUExplore) window.WUExplore.init();
  }

  /* A flat index of spots with coordinates and pre-extracted hard facts. explore.js only
     understands this structure, and all.html builds its own in the same shape, so both
     sides share one set of explore features. */
  function buildIndex(regions) {
    var out = [];
    regions.forEach(function (r, i) {
      (r.spots || []).forEach(function (s) {
        var f = facts(s);
        out.push({
          id: s.id, n: s.n, en: s.en, name: s.name || '',
          region: r.navName || r.name, color: regionColor(r, i),
          coord: spotCoord(s), must: s.must, photo: s.score,
          mins: f.mins, booking: f.booking, free: f.free, paid: f.paid,
          dur: f.dur, gone: s.gone || ''
        });
      });
    });
    return out;
  }

  /* ---------- Search ----------
     Lives in the sticky top bar and filters the cards of every region on the page at
     once. A region with no matches is hidden whole, or the page is left with a string
     of shells that are just a heading and a map. */
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

    /* Search and the toolbar filters stack, so visibility is decided by explore.js alone
       and this only forwards the input events over there. If explore.js did not load,
       fall back to filtering by the search term only. */
    function apply() {
      if (window.WUExplore && window.WUExplore.apply) {
        window.WUExplore.apply();
        return;
      }
      var q = input.value.trim().toLowerCase();
      var hits = 0;
      cards.forEach(function (c) {
        var ok = !q || (c.dataset.search || '').indexOf(q) > -1;
        c.hidden = !ok;
        if (ok) hits++;
        if (q && ok) c.open = true;
        if (!q) c.open = false;
      });
      /* A region is hidden together with its map */
      document.querySelectorAll('#regions > section').forEach(function (sec) {
        var any = sec.querySelector('details.card:not([hidden])');
        sec.hidden = !!q && !any;
      });
      count.textContent = q ? hits + ' 个匹配' : '';
      count.classList.toggle('zero', !!q && hits === 0);
    }

    /* The results sit below the overview and the map, so without a scroll you see
       nothing. Scroll once, when typing starts; scrolling on every keystroke after that
       drags the page around endlessly. */
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

  /* Wrap tables that are not already in a scroll container into .tbl-scroll.
     The callouts in the sub-region data are HTML hand-written by the researchers and
     often drop in a bare <table>, which in a narrow viewport widens the whole document
     and produces a horizontal scrollbar. This is the blanket fallback. */
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
