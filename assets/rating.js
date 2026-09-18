/* ===== 星级评分渲染 =====

   原先星级是用 ★ / ☆ / ⯨ 三个字符拼的，半星那个 ⯨（U+2BE8）在 Windows 常见
   字体里基本没有字形覆盖，落到兜底字体后渲染成一排黄色小方块／横线，整条评分
   就废了。这里改成内联 SVG：星形自己画，填充比例用 clipPath 裁，
   跟系统装了什么字体完全无关，任意小数分值都能精确表示。

   两个评分（游览价值 / 摄影价值）共用这一套，所以单独成文件，
   app.js 与 all.js 都从这里取。 */
(function () {
  'use strict';

  /* 五角星路径，画在 0 0 20 20 的格子里 */
  var STAR = 'M10 1.6l2.47 5.28 5.78.74-4.24 3.98 1.08 5.72L10 14.6l-5.09 2.72 ' +
             '1.08-5.72L1.75 7.62l5.78-.74z';

  var uid = 0;

  /* score 为 0–max 的任意小数。返回一段内联 SVG。
     size 是单颗星的边长（px），整条宽度是 size*max。 */
  function stars(score, opt) {
    opt = opt || {};
    var max = opt.max || 5;
    var size = opt.size || 14;
    var gap = opt.gap == null ? 2 : opt.gap;
    var v = Math.max(0, Math.min(max, Number(score) || 0));

    var cell = 20 + gap;                 /* 每颗星在 viewBox 里占的横向格距 */
    var vbW = cell * max - gap;
    var id = 'st' + (++uid);
    var full = [], empty = [];
    for (var i = 0; i < max; i++) {
      var tx = i * cell;
      empty.push('<path transform="translate(' + tx + ',0)" d="' + STAR + '" class="st-off"/>');
      full.push('<path transform="translate(' + tx + ',0)" d="' + STAR + '" class="st-on"/>');
    }
    /* 裁切宽度按分值走：4.5 分就裁到第 4.5 颗星的中线，半星自然出现 */
    var clipW = v <= 0 ? 0 : (v >= max ? vbW : v * cell - gap / 2);

    return '<svg class="st" viewBox="0 0 ' + vbW + ' 20" ' +
      'width="' + (size * max + (size / 20) * gap * (max - 1)) + '" height="' + size + '" ' +
      'aria-hidden="true" focusable="false">' +
      '<defs><clipPath id="' + id + '"><rect x="0" y="0" width="' + clipW + '" height="20"/></clipPath></defs>' +
      '<g>' + empty.join('') + '</g>' +
      '<g clip-path="url(#' + id + ')">' + full.join('') + '</g>' +
      '</svg>';
  }

  /* 把分数翻成人话。用户选择只在悬停/点击时显示，所以这串文字
     进 title 与展开区，不占卡头版面。分档口径与 SCHEMA.md 的评分标准一致。 */
  function tier(v) {
    if (v == null) return '';
    if (v >= 4.75) return '值得专程前往';
    if (v >= 4) return '强烈推荐';
    if (v >= 3) return '顺路推荐';
    if (v >= 2) return '有余力再去';
    if (v >= 1) return '可以跳过';
    return '不建议';
  }

  /* 卡头上的双评分块。游览价值在上、摄影价值在下，两行的星级左端对齐，
     扫一眼就能比出高低。socal 那批条目只有摄影评分，这时只渲染一行，
     并且不会把摄影分冒充成游览分。 */
  function block(must, photo, opt) {
    opt = opt || {};
    var size = opt.size || 13;
    var rows = [];
    if (must != null) {
      rows.push(row('游览', must, tier(must), size, 'rt-must'));
    }
    if (photo != null) {
      rows.push(row('摄影', photo, null, size, 'rt-photo'));
    }
    if (!rows.length) return '';
    return '<div class="rt">' + rows.join('') + '</div>';
  }

  function row(label, v, tierText, size, cls) {
    var t = label + '价值 ' + v + '/5' + (tierText ? ' · ' + tierText : '');
    return '<div class="rt-row ' + cls + '" title="' + t + '">' +
      '<span class="rt-lbl">' + label + '</span>' +
      stars(v, { size: size }) +
      '<span class="rt-num">' + v + '</span>' +
      (tierText ? '<span class="rt-tier">' + tierText + '</span>' : '') +
      '</div>';
  }

  window.WURating = { stars: stars, tier: tier, block: block };
})();
