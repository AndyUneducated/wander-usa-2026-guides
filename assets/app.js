/* ===== 渲染引擎：把 data.js 里的 REGIONS 渲染成分区地图 + 景点卡片 ===== */

(function () {
  'use strict';

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  /* 星级一律走 assets/rating.js 的内联 SVG。以前用 ★☆⯨ 拼字符，
     半星那个字符在多数 Windows 字体里没有字形，会渲染成一排黄色小方块。
     rating.js 没加载上时退回纯数字，不让整页跟着挂掉。 */
  function stars(score) {
    if (window.WURating) return window.WURating.stars(score, { size: 13 });
    return score + '/5';
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

  /* 卡头评分。游览价值与摄影价值两行并列、星级左端对齐，扫一眼就能比出高低。
     分档文字（「值得专程前往」等）只在悬停/点击时出现，卡头保持极简。
     socal 建站时只有摄影评分、没有 must 字段，这类条目只渲染摄影那一行，
     不会把摄影分冒充成游览分。 */
  function renderScore(s) {
    if (!window.WURating) return '';
    var b = window.WURating.block(s.must, s.score);
    return b ? '<div class="card-score">' + b + '</div>' : '';
  }

  /* 硬信息的抽取规则统一在 assets/facts.js 里，页面与校验脚本共用同一份，
     否则显示出来的值和 tools/check_render.js 算出来的值迟早对不上。 */
  var F = window.WUFacts;
  var plainText = F.plainText;
  var facts = F.facts;

  /* 收起状态下最该看到的一条硬信息：要待多久。
     完整的票价与开放时间在展开后的速览条与可达性表里。 */
  function renderMeta(f) {
    if (!f.visit) return '';
    return '<span class="meta-chip" title="' + esc(f.visit) + '">⏱ ' +
      esc(f.dur || f.visit.slice(0, 14)) + '</span>';
  }

  /* 展开后的第一屏：车上查手册时最常问的四件事，不用再往下翻可达性表。
     每格显示抽出来的短值，完整原文在 title 里，点一下也能跳到可达性表。 */
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

  /* ---------- 要点：摘要在外，详情在内 ----------
     数据的书写规范是每条要点以 <strong>一句话结论</strong> 开头
     （「怎么逛」100% 符合、「看什么」85% 符合，加粗首句平均 35–41 字）。
     所以首个加粗段天然就是这一条的摘要：默认只显示它，一行一条，
     整段详情收在里面点开。这样一张卡片展开后先是一份可扫的要点清单，
     想深入哪一条再展开哪一条，不必一上来读两千字。
     拆分规则见 assets/facts.js 的 splitLead。 */
  function renderPoints(list) {
    if (!list) return '';
    if (!Array.isArray(list)) return '<div class="v">' + list + '</div>';
    return '<ul class="pts">' + list.map(function (item) {
      var p = F.splitLead(item);
      /* 详情太短就不值得再加一层点击，整条平铺出来 */
      if (plainText(p.rest).length < F.FLAT_UNDER) {
        return '<li class="pt pt-flat">' + item + '</li>';
      }
      return '<li class="pt"><details><summary>' +
        '<span class="pt-lead">' + p.lead + '</span>' +
        '<span class="pt-more" aria-hidden="true"></span>' +
        '</summary><div class="pt-rest">' + p.rest + '</div></details></li>';
    }).join('') + '</ul>';
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
    var f = facts(s);
    /* 抽出来的硬信息挂到 data-* 上，筛选与排序直接读它们，不用再解析一遍富文本 */
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
      renderTags(s.tags, renderMeta(f)) + '</div>' +
      (s.gone ? '' : renderScore(s)) +
      '<span class="expand" aria-hidden="true">' +
      '<span class="lbl-shut">展开详情</span><span class="lbl-open">收起</span>' +
      '<span class="chev">▾</span></span>' +
      '</summary>';

    h += '<div class="card-body">';
    /* 展开后的信息架构，顺序即优先级：
         速览条   —— 时长／门票／开放／预约，路上查手册第一眼要的就是这四个
         看什么   —— 到了看哪几样东西（原「核心看点」）
         怎么逛   —— 按什么顺序走、跳过什么、厕所餐饮在哪（原「游览要点」）
       原来两块叫「核心看点」与「游览要点」，名字听着是一回事，读者自然觉得重复。
       其实前者讲「看的对象」、后者讲「走的方法」，改成「看什么／怎么逛」之后
       两块的分工一眼就清楚了，内容本身不用动。
       实用信息与注意事项在后，摄影两块最后，作为辅助。 */
    h += renderQuick(f);
    if (s.highlights) h += '<div class="row"><div class="k">看什么</div>' + renderPoints(s.highlights) + '</div>';
    if (s.tour) h += '<div class="row"><div class="k">怎么逛</div>' + renderPoints(s.tour) + '</div>';
    if (s.access) h += '<div class="row"><div class="k">实用信息</div>' + renderAccess(s.access) + '</div>';
    /* 注意事项不做折叠：它本来就是短句（整条中位 85 字，比要点短一半多），
       而且内容多半是安检、禁拍、季节封闭这类「不知道会吃亏」的约束。
       把半句安全提示藏在点击后面，省下的版面不值得。 */
    if (s.notes) h += '<div class="row"><div class="k">注意事项</div>' + renderList(s.notes) + '</div>';
    /* 摄影内容整体折叠：这本手册以游玩为主，机位是给有需要的人的附加信息，
       默认展开会把「看什么、要多久」挤到屏幕外面去。

       但加州海岸那批条目偏重摄影机位、没有 tour 字段，摄影内容就是它们的主体；
       一并折叠等于把整张卡片清空。所以只对带 tour 的条目折叠，
       其余条目仍按原样平铺显示。 */
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

  /* ---------- 附录折叠 ----------
     附录是五六节查表型数据，平铺开来比正文还长，滚到页尾得先划过一屏日出方位表。
     这里把每一节收成一张默认关着的卡片：标题只留主干，括号里的限定语降成小字，
     再自动标出「这一节说的是哪些景点」——读者扫标题就知道该点开哪一张。

     切分规则：一个 h3.apx-h 起一节，到下一个 h3.apx-h 为止。 */

  /* 这一节涉及哪些景点：拿正文文本去撞景点索引里的名字。
     附录表格第一列写的就是景点名，撞得相当准；撞不到的（例如按城市列的
     日出日落表）不硬凑，如实说「全区通用」。 */
  function apxScope(nodes) {
    var txt = nodes.map(function (n) { return n.textContent || ''; }).join(' ');
    var hits = [];
    (window.WUIndex || []).forEach(function (i) {
      /* 表里常写简称（The Met / Statue of Liberty），所以英文名再取一个
         「第一个连接词之前」的短形式。太短的名字容易误撞，直接不参与匹配。 */
      var keys = [i.en, String(i.en || '').split(/\s*[&（(:：·]/)[0].trim()];
      var hit = keys.some(function (k) { return k.length >= 6 && txt.indexOf(k) > -1; }) ||
        (i.name && i.name.length >= 3 && txt.indexOf(i.name) > -1);
      if (hit) hits.push(i);
    });
    /* 撞上一两个名字多半是正文里顺带提了一句，不代表这一节是讲它们的
       （日出日落表按城市列，却会捎带提到某个景点）。够三个才算数。 */
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
      /* 「（示例日期，EDT）」这类限定语从标题里摘出来降成小字，标题只留主干 */
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
        /* 平铺进附录容器，不要再套一层 div：foldAppendix 按「h3 起、下一个 h3 止」
           切分小节，多一层包裹这一节就会被漏掉。 */
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

    /* 把景点连坐标一起交给 explore.js：筛选、排序、附近、顺路都用这份索引。
       附录折叠也要拿它来判断每一节说的是哪些景点，所以得赶在两者之前建好。 */
    window.WUIndex = buildIndex(REGIONS);
    foldAppendix();

    /* 展开 / 收起全部 */
    root.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.card-toolbar button');
      if (!btn) return;
      var sec = document.getElementById(btn.dataset.region);
      if (!sec) return;
      var open = btn.dataset.act === 'open';
      sec.querySelectorAll('details.card').forEach(function (d) { d.open = open; });
    });

    /* 从地图图钉或目录跳过来时，自动展开目标卡片。
       目标也可能埋在折叠的附录小节里（分区提醒就是），所以逐层往上把
       祖先的 details 一并打开，否则浏览器会滚到一个收着的壳子上。 */
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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.addEventListener('hashchange', openFromHash);
    openFromHash();

    /* 打印/导出 PDF 前展开全部（浏览器默认会隐藏收起的 details，CSS 覆盖不了） */
    var printRestore = [];
    window.addEventListener('beforeprint', function () {
      printRestore = [];
      document.querySelectorAll('details.card, details.callout, details.apx-fold').forEach(function (d) {
        printRestore.push([d, d.open]);
        d.open = true;
      });
    });
    window.addEventListener('afterprint', function () {
      printRestore.forEach(function (p) { p[0].open = p[1]; });
    });

    /* 点评分那一行，把「值得专程前往」这类分档文字亮出来。
       触屏没有悬停，所以需要这个；又因为评分块长在 <summary> 里，
       必须拦掉冒泡，否则每看一次分档说明都会顺手把卡片撑开。 */
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

  /* 一份扁平的景点索引，带坐标与抽好的硬信息。explore.js 只认这个结构，
     all.html 那边也按同样的形状自己拼一份，两边共用同一套探索功能。 */
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

    /* 搜索与工具条的筛选是叠加的，所以可见性统一交给 explore.js 裁决，
       这里只负责把输入事件转过去。explore.js 没加载上时退回只按搜索词过滤。 */
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
