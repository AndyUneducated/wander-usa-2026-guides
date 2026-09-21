/* ===== Star rating rendering =====

   Stars used to be spelled out with the three characters ★ / ☆ / ⯨. The half star
   ⯨ (U+2BE8) has almost no glyph coverage in common Windows fonts, so it fell
   through to a fallback font and rendered as a row of yellow squares/dashes, which
   ruined the whole rating. This draws inline SVG instead: we draw the star shape
   ourselves and clip the fill ratio with a clipPath, so it is completely
   independent of the installed fonts and any fractional score is exact.

   Both ratings (visit value / photo value) share this, hence its own file;
   app.js and all.js both pull from here. */
(function () {
  'use strict';

  /* Five-pointed star path, drawn on a 0 0 20 20 grid */
  var STAR = 'M10 1.6l2.47 5.28 5.78.74-4.24 3.98 1.08 5.72L10 14.6l-5.09 2.72 ' +
             '1.08-5.72L1.75 7.62l5.78-.74z';

  var uid = 0;

  /* score is any fractional value from 0 to max. Returns a chunk of inline SVG.
     size is the edge length of one star (px); the whole row is size*max wide. */
  function stars(score, opt) {
    opt = opt || {};
    var max = opt.max || 5;
    var size = opt.size || 14;
    var gap = opt.gap == null ? 2 : opt.gap;
    var v = Math.max(0, Math.min(max, Number(score) || 0));

    var cell = 20 + gap;                 /* Horizontal pitch of one star in the viewBox */
    var vbW = cell * max - gap;
    var id = 'st' + (++uid);
    var full = [], empty = [];
    for (var i = 0; i < max; i++) {
      var tx = i * cell;
      empty.push('<path transform="translate(' + tx + ',0)" d="' + STAR + '" class="st-off"/>');
      full.push('<path transform="translate(' + tx + ',0)" d="' + STAR + '" class="st-on"/>');
    }
    /* Clip width tracks the score: 4.5 clips to the midline of the 5th star, so the half star falls out naturally */
    var clipW = v <= 0 ? 0 : (v >= max ? vbW : v * cell - gap / 2);

    return '<svg class="st" viewBox="0 0 ' + vbW + ' 20" ' +
      'width="' + (size * max + (size / 20) * gap * (max - 1)) + '" height="' + size + '" ' +
      'aria-hidden="true" focusable="false">' +
      '<defs><clipPath id="' + id + '"><rect x="0" y="0" width="' + clipW + '" height="20"/></clipPath></defs>' +
      '<g>' + empty.join('') + '</g>' +
      '<g clip-path="url(#' + id + ')">' + full.join('') + '</g>' +
      '</svg>';
  }

  /* Put the score into plain words. We show it only on hover/click, so this text goes
     into the title and the expanded area and takes no card-head room. The tier
     boundaries match the rating standard in SCHEMA.md. */
  function tier(v) {
    if (v == null) return '';
    if (v >= 4.75) return '值得专程前往';
    if (v >= 4) return '强烈推荐';
    if (v >= 3) return '顺路推荐';
    if (v >= 2) return '有余力再去';
    if (v >= 1) return '可以跳过';
    return '不建议';
  }

  /* The dual-score block in the card head. Visit value on top, photo value below,
     star rows left-aligned so you can compare them at a glance. The socal entries
     only have a photo score, so those render a single row and we never pass the
     photo score off as a visit score. */
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
