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

  /* ===== 免费还是收费 =====

     票价字段是一整段考证过的散文，光看「这段里有没有出现『免费』」是判不出来的：
     「16 岁以下免费」「会员免费」「周四晚间免费」说的都是收费馆的减免档，
     反过来「公园免费，园内动物园成人 $10.95」里的金额也不是门票。
     早先按全段匹配，纽约 79 条里 77 条被判成免费，这个筛选等于没有。

     好在这批数据的写法是一致的：结论永远在第一句，例外情况跟在后面。
       「广场免费。博物馆：成人 $36…」            → 免费
       「成人 $30、7–17 岁 $14、0–6 岁免费」       → 收费
     所以只看第一个「表了态」的句子（出现免费字样或 $ 金额的那句），
     句内谁在前听谁的。开头的【…核实】考证戳先摘掉——它里面常写
     「票价与免费条件均无变化」，会把收费馆误判成免费。 */
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
    isFree: isFree,
    isPaid: isPaid,
    hoursGist: hoursGist,
    bookState: bookState,
    facts: facts,
    splitLead: splitLead,
    FLAT_UNDER: FLAT_UNDER
  };
});
