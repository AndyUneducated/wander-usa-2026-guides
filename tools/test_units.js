/* ===== Pure-function unit tests =====

   assets/rating.js (star SVG, tier copy) and assets/facts.js (hard-fact
   extraction, key-point splitting) never touch the DOM, so they can run
   in node with no browser. Page-level behavior (filters, sort, maps)
   is covered by tools/test_pages.py in a real browser.

   Usage: node tools/test_units.js    (non-zero exit means failures) */

const path = require('path');
const ROOT = path.resolve(__dirname, '..');

/* rating.js is written for the browser and hangs off window; give it a shell so it can load */
global.window = {};
require(path.join(ROOT, 'assets', 'rating.js'));
const R = global.window.WURating;
const F = require(path.join(ROOT, 'assets', 'facts.js'));

let pass = 0;
const fails = [];

function ok(name, cond, got) {
  if (cond) { pass++; return; }
  fails.push(name + (got === undefined ? '' : `  actual: ${JSON.stringify(got)}`));
}

function eq(name, actual, expected) {
  ok(name, actual === expected, actual);
}

/* ---------- star SVG ---------- */
console.log('=== Star SVG ===');
console.log('   score  clip/total     empty filled  tier');

function parse(svg) {
  const box = parseFloat(svg.match(/viewBox="0 0 ([\d.]+)/)[1]);
  const clip = parseFloat(svg.match(/<rect x="0" y="0" width="([\d.]+)"/)[1]);
  return {
    box, clip,
    ratio: clip / box,
    off: (svg.match(/st-off/g) || []).length,
    on: (svg.match(/st-on/g) || []).length
  };
}

for (const v of [5, 4.5, 4, 3, 2.5, 1, 0]) {
  const p = parse(R.stars(v));
  console.log(`   ${String(v).padStart(4)}   ${p.clip.toFixed(1).padStart(6)}/${p.box.toFixed(1)}` +
    `  = ${String(Math.round(p.ratio * 100)).padStart(3)}%   ${p.off}   ${p.on}` +
    `   ${R.tier(v)}`);
  ok(`${v}: draws 5 empty stars and 5 filled stars`, p.off === 5 && p.on === 5, p);
  ok(`${v}: clip width stays within the canvas`, p.clip >= 0 && p.clip <= p.box, p);
}

/* Critical regression: half-stars used to use ⯨ (U+2BE8). Common Windows
   fonts have no glyph for it, so the whole rating rendered as a row of
   yellow squares. There must be no star characters at all now. */
ok('star markup contains no star characters (root cause of the yellow-bar bug)',
  !/[\u2605\u2606\u2BE8]/.test(R.stars(4.5) + R.block(4.5, 2.5)));

eq('5 fills the whole row', parse(R.stars(5)).ratio, 1);
eq('0 fills nothing', parse(R.stars(0)).clip, 0);
ok('2.5 fills about half', Math.abs(parse(R.stars(2.5)).ratio - 0.5) < 0.04,
  parse(R.stars(2.5)).ratio);
ok('4.5 sits between 4 and 5',
  parse(R.stars(4)).clip < parse(R.stars(4.5)).clip &&
  parse(R.stars(4.5)).clip < parse(R.stars(5)).clip);
ok('out-of-range scores are clamped and do not draw past the canvas',
  parse(R.stars(9)).ratio === 1 && parse(R.stars(-2)).clip === 0);

/* A page has hundreds of star rows; clipPath ids must be unique, or later
   rows reuse an earlier clip width and every score looks the same. */
const ids = new Set();
for (let i = 0; i < 300; i++) ids.add(R.stars(3).match(/id="(st\d+)"/)[1]);
eq('clipPath ids across 300 star rows are unique', ids.size, 300);

/* ---------- tier copy ---------- */
console.log('\n=== Tier copy (shown on hover) ===');
const tiers = [[5, '值得专程前往'], [4.5, '强烈推荐'], [4, '强烈推荐'],
               [3.5, '顺路推荐'], [3, '顺路推荐'], [2, '有余力再去'], [1, '可以跳过']];
for (const [v, want] of tiers) {
  eq(`${v} → ${want}`, R.tier(v), want);
  console.log(`   ${String(v).padStart(4)} → ${R.tier(v)}`);
}
eq('no score means no tier copy', R.tier(null), '');

/* ---------- dual-score block ---------- */
console.log('\n=== Dual scores side by side ===');
const both = R.block(5, 2.5);
eq('renders two rows when both scores are present', (both.match(/rt-row/g) || []).length, 2);
ok('visit row comes before photo row', both.indexOf('rt-must') < both.indexOf('rt-photo'));
ok('visit row includes tier copy', /rt-must[\s\S]*rt-tier/.test(both));
ok('photo row has no tier copy (avoids two talking headers)',
  (both.match(/rt-tier/g) || []).length === 1);
/* socal entries often have only a photo score; never show that as the visit score */
const photoOnly = R.block(null, 4);
ok('photo-only: no visit row', !/rt-must/.test(photoOnly));
ok('photo-only: still renders the photo row', /rt-photo/.test(photoOnly));
eq('both missing returns an empty string', R.block(null, null), '');
console.log('   5 / 2.5 → two rows; photo-only 4 → one row; neither → empty');

/* ---------- hard-fact extraction ---------- */
console.log('\n=== Hard-fact extraction ===');
const cases = [
  ['visitMins', '<strong>2.5–4 小时</strong>；只看重点 75 分钟', 150],
  ['visitMins', '45 分钟', 45],
  /* If a concrete range is given, use the range. "半天" is only a synonym
     prefix; an explicit 3 hours beats the vague "半天 = 4 hours" mapping. */
  ['visitMins', '半天（3–4 小时）', 180],
  ['visitMins', '半天', 240],
  ['visitMins', '说不清', null],
  ['durGist', '<strong>2.5–4 小时</strong>；只看重点 75 分钟', '2.5–4 小时'],
  ['durGist', '30–45 分钟', '30–45 分钟'],
  ['ticketGist', '<strong>免费</strong>', '免费'],
  ['ticketGist', '成人 $30、老年 $22', '$30'],
  ['ticketGist', '成人 $25–$30', '$25–$30'],
  ['hoursGist', '<strong>24 小时开放</strong>', '24 小时'],
  ['hoursGist', '每天 10:00–17:30，12 月 25 日闭馆', '10:00–17:30'],
  ['bookState', '<strong>不需预约</strong>', 'no'],
  ['bookState', '需在官网预约定时票', 'yes'],
  ['bookState', '建议预订', 'yes'],
  ['bookState', '', null]
];
for (const [fn, input, want] of cases) {
  const got = F[fn](F.plainText(input));
  eq(`${fn}("${input.slice(0, 26)}") → ${want}`, got, want);
}
/* Order trap: "不需预约" contains "需…预约"; the negative form must win */
eq('"不需预约" is not misclassified as booking required', F.bookState('不需预约，直接刷卡进场'), 'no');
console.log('   duration/tickets/hours/booking: ' + cases.length + ' samples');

/* ---------- key-point splitting ---------- */
console.log('\n=== Key-point split (lead + detail) ===');
const lead1 = F.splitLead('<strong>地下展厅 2026 年夏重开。</strong>入口在主台阶两侧的侧门，留 20–30 分钟。');
eq('bold first sentence is taken as the lead', lead1.lead, '地下展厅 2026 年夏重开。');
ok('text after the bold span goes into the detail', lead1.rest.indexOf('入口在主台阶') === 0, lead1.rest);
eq('marked as the compliant form', lead1.bold, true);

const lead2 = F.splitLead('庭园免费且开放到日落。房子必须买票，$20 起。');
eq('with no bold, split at the first sentence-ending punctuation', lead2.lead, '庭园免费且开放到日落。');
eq('and marked as the non-compliant form', lead2.bold, false);

const lead3 = F.splitLead('<strong>只有一句加粗、后面没内容</strong>');
eq('empty detail does not throw', lead3.rest.trim(), '');
ok('this kind of entry is flattened on the page',
  F.plainText(lead3.rest).length < F.FLAT_UNDER);

console.log('\n' + '='.repeat(58));
if (fails.length) {
  console.log(`\n❌ ${fails.length} failure(s) (${pass} passed):`);
  fails.forEach((f) => console.log('  - ' + f));
  process.exit(1);
}
console.log(`\n✅ All passed (${pass} assertions)`);
