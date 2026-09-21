/* ===== Click a title to copy it =====
   The most common way this handbook gets used: you see a spot, paste its name into
   Google Maps to search for it, and save it. So every proper noun in a title is its
   own copy button — click one, copy that one.

   Both the region pages and the all-spots table need it, so it gets its own file.
   It hangs off window.WUCopy; the site is plain scripts, no bundler, no modules. */

(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* Split compound titles at proper-noun boundaries. Separators are a capture group
     so they stay in the result (the odd indexes) and are emitted verbatim; that way
     "Statue of Liberty & Ellis Island" becomes two buttons instead of one long string
     that Google Maps cannot find. Hyphens and apostrophes are not separators —
     names like Taggart-Bradley and Rocky's must not be split. */
  var SEP = /(\s*(?:[·•｜|/、，,;；]|＆|&|\band\b|与|和)\s*|（|）|\(|\))/;

  /* Render a title string into a set of copy buttons, keeping separators as they are.
     cls is what distinguishes the styling of the English and Chinese halves. */
  function names(str, cls) {
    return String(str == null ? '' : str).split(SEP).map(function (p, i) {
      if (!p) return '';
      if (i % 2) return esc(p);           /* Odd indexes are separators, not buttons */
      var t = p.trim();
      if (!t) return esc(p);
      return '<span class="cp ' + (cls || '') + '" role="button" tabindex="0" data-copy="' +
        esc(t) + '" title="点击复制「' + esc(t) + '」，可直接粘到 Google Maps 搜索">' +
        esc(p) + '</span>';
    }).join('');
  }

  var timer = null;
  function toast(msg, bad) {
    var el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.className = 'show' + (bad ? ' bad' : '');
    clearTimeout(timer);
    timer = setTimeout(function () { el.className = ''; }, 2000);
  }

  /* navigator.clipboard is unavailable when a local file is opened over file://, so
     fall back to execCommand. Live the site is https and takes the first path. */
  function legacy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-9999px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function run(el) {
    var text = el.getAttribute('data-copy') || el.textContent;
    function done(ok) {
      el.classList.add(ok ? 'cp-ok' : 'cp-bad');
      setTimeout(function () { el.classList.remove('cp-ok', 'cp-bad'); }, 1100);
      toast(ok ? '已复制「' + text + '」' : '复制失败，请手动选中标题', !ok);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { done(true); },
        function () { done(legacy(text)); }
      );
    } else {
      done(legacy(text));
    }
  }

  /* Titles sit inside a <summary> (region pages) or an <a> (all-spots table), where a
     click expands the card or jumps to the region page. Copying has to block both, or
     every copy also navigates the page. */
  function bind() {
    if (document.documentElement.hasAttribute('data-cp-bound')) return;
    document.documentElement.setAttribute('data-cp-bound', '1');
    document.addEventListener('click', function (e) {
      var el = e.target.closest && e.target.closest('.cp');
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      run(el);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
      var el = e.target.closest && e.target.closest('.cp');
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      run(el);
    });
  }

  window.WUCopy = { names: names, bind: bind, toast: toast };
})();
