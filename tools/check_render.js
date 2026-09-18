/* ===== 核对数据是否符合渲染的假设 =====

   改版后页面有两个地方依赖数据的书写形式，而不只是字段有没有填：

     1. 速览条与筛选器要从 access 的富文本里抽出「时长／门票／开放／预约」。
        抽不出来的格子会退回截断原文，能看但不好看；抽取率太低就说明
        数据里的写法不统一，该回去改数据而不是放宽正则。

     2. 「看什么／怎么逛」每条只显示加粗首句做摘要（见 tools/SCHEMA.md）。
        没有加粗开头的条目会退回按句号切，切出来的句子往往不成话；
        首句过长的会在一行里放不下。

   所以这个脚本按地域统计抽取率与首句合规率，并把最差的几条点出来，
   方便直接去对应文件里改。

   用法：node tools/check_render.js
   抽取规则直接 require assets/facts.js，与页面同源，不会各写一份正则。 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const F = require(path.join(ROOT, 'assets', 'facts.js'));

/* 首句长度的合理区间，和 SCHEMA.md 里写给研究员的 20–45 字对应。
   留一点余量：45 字是写作目标，超过 90 字才真的需要回去改——
   收起状态下 CSS 会把首句钉成两行，90 字以内两行装得下，
   再长就会被截掉一截（点开能看全，但摘要清单的可扫性下降）。 */
const LEAD_MIN = 12;
const LEAD_MAX = 90;

function loadRegion(slug) {
  const parts = path.join(ROOT, slug, 'parts');
  const out = [];
  if (fs.existsSync(parts)) {
    for (const f of fs.readdirSync(parts).filter((x) => x.endsWith('.js'))) {
      const mod = require(path.join(parts, f));
      (mod.spots || []).forEach((s) => out.push({ file: `${slug}/parts/${f}`, s }));
    }
    return out;
  }
  /* socal 没有拆 parts，直接从 data.js 里取（它是 `var REGIONS = [...]`） */
  const src = fs.readFileSync(path.join(ROOT, slug, 'data.js'), 'utf8');
  const regions = eval(src + '; REGIONS');       // eslint-disable-line no-eval
  regions.forEach((r) => (r.spots || []).forEach((s) =>
    out.push({ file: `${slug}/data.js`, s })));
  return out;
}

function pct(n, d) {
  return d ? Math.round((n / d) * 100) + '%' : '—';
}

const REGIONS = ['nyc', 'dc', 'yellowstone', 'socal'];
const problems = [];
let grand = { spots: 0, leads: 0, bold: 0, long: 0, short: 0, empty: 0 };

console.log('=== 速览条字段抽取率 ===');
console.log('  地域            时长    门票    开放    预约');
for (const slug of REGIONS) {
  const rows = loadRegion(slug);
  const c = { dur: 0, price: 0, open: 0, book: 0 };
  for (const { s } of rows) {
    const f = F.facts(s);
    if (f.dur) c.dur++;
    if (f.price) c.price++;
    if (f.open) c.open++;
    if (f.booking) c.book++;
  }
  const n = rows.length;
  console.log(`  ${slug.padEnd(14)}${pct(c.dur, n).padStart(5)}` +
    `${pct(c.price, n).padStart(8)}${pct(c.open, n).padStart(8)}${pct(c.book, n).padStart(8)}` +
    `   (${n} 个景点)`);
}

console.log('\n=== 要点首句（摘要行）合规率 ===');
console.log('  地域            条数   加粗开头   过长(>60字)   过短(<12字)   点开是空的');
for (const slug of REGIONS) {
  const rows = loadRegion(slug);
  let leads = 0, bold = 0, long = 0, short = 0, empty = 0;
  for (const { file, s } of rows) {
    /* 只查这两节：页面只对它们做「加粗首句当摘要」的渲染。
       notes 是短句清单，仍然平铺显示，不受首句规范约束。 */
    for (const key of ['highlights', 'tour']) {
      const list = s[key];
      if (!Array.isArray(list)) continue;
      for (const item of list) {
        const p = F.splitLead(item);
        const lead = F.plainText(p.lead);
        const rest = F.plainText(p.rest);
        leads++;
        if (p.bold) bold++; else problems.push(
          { kind: '无加粗开头', file, id: s.id, key, text: lead.slice(0, 50) });
        if (lead.length > LEAD_MAX) {
          long++;
          problems.push({ kind: `首句 ${lead.length} 字偏长`, file, id: s.id, key,
            text: lead.slice(0, 50) });
        }
        if (lead.length < LEAD_MIN) short++;
        /* 加粗开头但正文不足阈值：页面会自动平铺，不算错，只是提示 */
        if (p.bold && rest.length < F.FLAT_UNDER) empty++;
      }
    }
    grand.spots++;
  }
  grand.leads += leads; grand.bold += bold; grand.long += long;
  grand.short += short; grand.empty += empty;
  console.log(`  ${slug.padEnd(14)}${String(leads).padStart(5)}` +
    `${pct(bold, leads).padStart(10)}${String(long).padStart(13)}` +
    `${String(short).padStart(13)}${String(empty).padStart(13)}`);
}

console.log(`\n  合计 ${grand.leads} 条要点，加粗开头 ${pct(grand.bold, grand.leads)}，` +
  `偏长 ${grand.long} 条，过短 ${grand.short} 条，会平铺显示 ${grand.empty} 条`);

/* 只列改版范围内三个地域的问题。socal 那批是摄影优先时代写的，
   本来就没按加粗开头的规范写，页面对它们退回按句号切，属已知情况。 */
const inScope = problems.filter((p) => !p.file.startsWith('socal/'));
if (inScope.length) {
  console.log(`\n=== 改版范围内待改的条目（${inScope.length} 条，列前 20）===`);
  inScope.slice(0, 20).forEach((p) => {
    console.log(`  [${p.kind}] ${p.file}  ${p.id}.${p.key}`);
    console.log(`      ${p.text}…`);
  });
} else {
  console.log('\n✅ 改版范围内的要点全部符合「加粗首句」规范');
}
