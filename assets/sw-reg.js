/* ===== Register the Service Worker =====

   sw.js sits at the site root so its scope covers all four region subdirectories.
   This file lives in assets/, so the root has to be derived from our own URL —
   hardcoding '/sw.js' is wrong on GitHub Pages: there the site hangs off
   /<repo-name>/, not the domain root.

   Offline support is a nice-to-have: if we cannot get it (opened over file://, or
   an unsupported browser) skip quietly; normal browsing is unaffected. */
(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;
  /* Registration always fails under file://, so do not try: no useless console error */
  if (location.protocol === 'file:') return;

  var self_src = (document.currentScript && document.currentScript.src) || '';
  var root = self_src.replace(/assets\/sw-reg\.js.*$/, '');
  if (!root) return;

  window.addEventListener('load', function () {
    navigator.serviceWorker.register(root + 'sw.js', { scope: root })
      .catch(function () { /* If registration fails, go without offline support and do not bother the user */ });
  });
})();
