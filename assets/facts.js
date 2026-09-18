/* ===== 从富文本里抽硬信息 =====

   access 的四个字段都是研究员手写的富文本（带 <strong>、常常一整段），
   直接塞进卡头、速览条或筛选器里没法用。这里负责把「要待多久、多少钱、
   几点开、要不要预约」抽成能比较、能筛选的短值。抽不到就返回 null，
   由调用方决定退回什么，不猜、不编。

   同时提供 splitLead：把一条要点拆成「加粗首句 = 摘要」与「其余 = 详情」。

   这个文件同时给浏览器和 node 用（tools/check_render.js 会 require 它来
   核对全站数据是否符合渲染的假设），所以末尾做了两种导出。
   抽取规则只写在这一处——三个调用方各写一份正则的话，
   页面上显示的值和校验脚本算出来的值迟早会对不上。 */
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

  /* 参观时长 → 分钟数，取区间下限（「2–4 小时」算 120）。
     筛选「我只有一小时」时关心的是最低投入，所以取下限。 */
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

  function ticketGist(plain) {
    if (/免费|免票|不收费|无门票/.test(plain)) return '免费';
    var m = /\$\s?[\d.]+(?:\s*[–\-~]\s*\$?\s?[\d.]+)?/.exec(plain);
    return m ? m[0].replace(/\s+/g, '') : null;
  }

  function hoursGist(plain) {
    if (/24\s*小时/.test(plain)) return '24 小时';
    var m = /\d{1,2}:\d{2}\s*[–\-~]\s*\d{1,2}:\d{2}/.exec(plain);
    return m ? m[0].replace(/\s+/g, '') : null;
  }

  /* 返回 'no'（不需预约）/ 'yes'（需预约）/ null（说不清）。
     顺序要紧：「不需预约」必须先判，否则会被「需预约」抢先匹配掉。 */
  function bookState(plain) {
    if (!plain) return null;
    if (/不需预约|无需预约|不必预约|不需要预约|不需预订|无需预订/.test(plain)) return 'no';
    if (/需.{0,6}预约|须预约|要预约|需预订|建议预订|建议预约|需定时票|需要门票预约/.test(plain)) return 'yes';
    return null;
  }

  /* 一个景点的可筛选属性，同时喂给速览条、筛选器和「附近景点」。 */
  function facts(s) {
    var a = s.access || {};
    var visit = plainText(a.visit), ticket = plainText(a.ticket),
        hours = plainText(a.hours), book = plainText(a.book);
    return {
      visit: visit, ticket: ticket, hours: hours, book: book,
      mins: visitMins(visit),
      dur: durGist(visit),
      price: ticketGist(ticket),
      open: hoursGist(hours),
      booking: bookState(book),
      free: /免费|免票|不收费|无门票/.test(ticket)
    };
  }

  /* 把一条要点拆成摘要与详情。
     数据的书写规范是每条以 <strong>一句话结论</strong> 开头（见 tools/SCHEMA.md），
     所以首个加粗段天然就是摘要。没有加粗开头的旧条目退回按首个句末标点切。 */
  function splitLead(html) {
    var s = String(html);
    var m = /^\s*<strong>([\s\S]*?)<\/strong>\s*/.exec(s);
    if (m) return { lead: m[1], rest: s.slice(m[0].length), bold: true };
    var t = /^([\s\S]{0,70}?[。！？])([\s\S]*)$/.exec(s);
    if (t) return { lead: t[1], rest: t[2], bold: false };
    return { lead: s, rest: '', bold: false };
  }

  /* 详情短于这个字数就不值得再加一层点击，页面会把整条平铺显示 */
  var FLAT_UNDER = 24;

  return {
    plainText: plainText,
    visitMins: visitMins,
    durGist: durGist,
    ticketGist: ticketGist,
    hoursGist: hoursGist,
    bookState: bookState,
    facts: facts,
    splitLead: splitLead,
    FLAT_UNDER: FLAT_UNDER
  };
});
