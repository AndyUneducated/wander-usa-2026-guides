/* ===== 标题点击即复制 =====
   这份手册最常见的用法是：看到一个景点，把它的名字粘到 Google Maps 里搜一下、
   加进收藏夹。所以标题里每个专名都做成独立的可复制按钮，点哪个复制哪个。

   地域页与总表页都要用，所以单独成文件。挂在 window.WUCopy 上，
   全站用的是不带打包工具的裸 script，没有模块系统。 */

(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* 复合标题按专名切开。分隔符用捕获组留在结果里（奇数位），原样输出，
     这样「Statue of Liberty & Ellis Island」会变成两个按钮而不是一个长串，
     粘到 Google Maps 里才搜得到。连字符与撇号不算分隔符——
     Taggart-Bradley、Rocky's 这类名字不能被切开。 */
  var SEP = /(\s*(?:[·•｜|/、，,;；]|＆|&|\band\b|与|和)\s*|（|）|\(|\))/;

  /* 把一段标题文本渲染成若干可复制按钮，分隔符原样保留。
     cls 用来区分中英文两段的样式。 */
  function names(str, cls) {
    return String(str == null ? '' : str).split(SEP).map(function (p, i) {
      if (!p) return '';
      if (i % 2) return esc(p);           /* 奇数位是分隔符，不做成按钮 */
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

  /* 用 file:// 直接打开本地文件时 navigator.clipboard 不可用，退回 execCommand。
     线上是 https，走前一条路径。 */
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

  /* 标题在 <summary>（地域页）或 <a>（总表页）内部，点击的默认行为是展开卡片、
     或者跳转到地域页。复制时这两件事都得拦住，否则每复制一次页面就跳一次。 */
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
