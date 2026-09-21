/* ===== Pulling hard facts out of rich text =====

   All four access fields are rich text written by hand by the researchers (with
   <strong>, often a whole paragraph), and dropping that straight into a card head,
   a quick-look bar or a filter does not work. This file turns "how long do I need,
   what does it cost, when is it open, do I need a booking" into short values you can
   compare and filter on. If nothing can be extracted it returns null and the caller
   decides what to fall back to; we never guess and never invent.

   It also provides splitLead: split a key point into a bold lead sentence (the
   summary) and everything after it (the detail).

   This file is used from both the browser and node (tools/check_render.js requires it
   to check that the site data matches what the rendering assumes), hence the two
   export paths at the bottom. The extraction rules live in exactly one place — if the
   three callers each wrote their own regex, the values shown on the page and the
   values the checker computes would drift apart sooner or later. */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.WUFacts = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function plainText(v) {
    return String(v == null ? '' : v).replace(/<[^>]+>/g, '').trim();
  }

  var DUR_RE = /([\d.]+)\s*(?:[–\-~至]\s*([\d.]+)\s*)?(小时|分钟|天)/;

  /* Visit duration to minutes, taking the low end of a range ("2-4 hours" is 120).
     Filtering for "I only have an hour" is about the minimum commitment, hence low end. */
  function visitMins(plain) {
    var m = DUR_RE.exec(plain);
    if (m) {
      var k = m[3] === '小时' ? 60 : m[3] === '天' ? 480 : 1;
      return Math.round(parseFloat(m[1]) * k);
    }
    if (/半天/.test(plain)) return 240;
    if (/一整天|一天|全天/.test(plain)) return 480;
    return null;
  }

  function durGist(plain) {
    var m = /[\d.]+\s*[–\-~至]\s*[\d.]+\s*(?:小时|分钟|天)|[\d.]+\s*(?:小时|分钟|天)|半天|一整天/.exec(plain);
    return m ? m[0].replace(/\s+/g, ' ') : null;
  }

  /* ===== Free or paid =====

     The ticket field is a whole paragraph of researched prose, so "does the word for
     free appear anywhere in it" cannot decide the question: "free under 16", "free for
     members" and "free on Thursday evenings" are all discount tiers at a paid venue,
     and conversely the amount in "the park is free, the zoo inside is $10.95 for
     adults" is not an admission fee. Matching over the whole paragraph is what we did
     first, and it called 77 of New York's 79 entries free — a useless filter.

     Luckily this data is written consistently: the verdict is always in the first
     sentence and the exceptions follow it.
       "The plaza is free. Museum: adults $36..."      -> free
       "Adults $30, ages 7-17 $14, ages 0-6 free"      -> paid
     So we only look at the first sentence that commits to something (the one with a
     free-admission word or a $ amount in it), and within that sentence whichever comes
     first wins. The leading verification stamp is stripped first — it often says
     "ticket prices and free-admission terms unchanged", which would mark a paid venue
     as free. */
  var FREE_RE = /免费|免票|不收费|不收门票|无门票|无入园费/;
  var PRICE_RE = /\$\s?[\d.]+(?:\s*[–\-~]\s*\$?\s?[\d.]+)?/;

  function ticketVerdict(plain) {
    var t = String(plain == null ? '' : plain).replace(/^\s*【[^】]*】\s*/, '');
    var parts = t.split(/[。！\n]/);
    for (var i = 0; i < parts.length; i++) {
      var f = parts[i].search(FREE_RE), p = parts[i].search(PRICE_RE);
      if (f < 0 && p < 0) continue;
      return (f >= 0 && (p < 0 || f < p)) ? 'free' : 'paid';
    }
    return null;
  }

  function isFree(plain) { return ticketVerdict(plain) === 'free'; }
  function isPaid(plain) { return ticketVerdict(plain) === 'paid'; }

  function ticketGist(plain) {
    if (isFree(plain)) return '免费';
    var m = PRICE_RE.exec(plain);
    return m ? m[0].replace(/\s+/g, '') : null;
  }

  function hoursGist(plain) {
    if (/24\s*小时/.test(plain)) return '24 小时';
    var m = /\d{1,2}:\d{2}\s*[–\-~]\s*\d{1,2}:\d{2}/.exec(plain);
    return m ? m[0].replace(/\s+/g, '') : null;
  }

  /* Returns 'no' (no booking needed) / 'yes' (booking required) / null (cannot tell).
     Order matters: "no booking needed" must be tested first, or the "booking required"
     pattern matches it away. */
  function bookState(plain) {
    if (!plain) return null;
    if (/不需预约|无需预约|不必预约|不需要预约|不需预订|无需预订/.test(plain)) return 'no';
    if (/需.{0,6}预约|须预约|要预约|需预订|建议预订|建议预约|需定时票|需要门票预约/.test(plain)) return 'yes';
    return null;
  }

  /* The filterable attributes of one spot, feeding the quick-look bar, the filters and "nearby spots". */
  function facts(s) {
    var a = s.access || {};
    var visit = plainText(a.visit), ticket = plainText(a.ticket),
        hours = plainText(a.hours), book = plainText(a.book);
    var price = ticketGist(ticket);
    return {
      visit: visit, ticket: ticket, hours: hours, book: book,
      mins: visitMins(visit),
      dur: durGist(visit),
      price: price,
      open: hoursGist(hours),
      booking: bookState(book),
      free: isFree(ticket),
      paid: isPaid(ticket)
    };
  }

  /* Split a key point into summary and detail.
     The data convention is that every point opens with <strong>a one-sentence
     conclusion</strong> (see tools/SCHEMA.md), so the first bold run is naturally the
     summary. Older entries with no bold opener fall back to splitting at the first
     sentence-ending punctuation. */
  function splitLead(html) {
    var s = String(html);
    var m = /^\s*<strong>([\s\S]*?)<\/strong>\s*/.exec(s);
    if (m) return { lead: m[1], rest: s.slice(m[0].length), bold: true };
    var t = /^([\s\S]{0,70}?[。！？])([\s\S]*)$/.exec(s);
    if (t) return { lead: t[1], rest: t[2], bold: false };
    return { lead: s, rest: '', bold: false };
  }

  /* A detail shorter than this is not worth another click, so the page lays the whole point out flat */
  var FLAT_UNDER = 24;

  return {
    plainText: plainText,
    visitMins: visitMins,
    durGist: durGist,
    ticketGist: ticketGist,
    isFree: isFree,
    isPaid: isPaid,
    hoursGist: hoursGist,
    bookState: bookState,
    facts: facts,
    splitLead: splitLead,
    FLAT_UNDER: FLAT_UNDER
  };
});
