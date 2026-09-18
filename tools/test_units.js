/* ===== 纯函数单元测试 =====

   assets/rating.js（星级 SVG、分档文字）与 assets/facts.js（硬信息抽取、
   要点拆分）都不碰 DOM，所以可以直接在 node 里测，不需要开浏览器。
   页面级的行为（点筛选、排序、地图）由 tools/test_pages.py 用真浏览器测。

   用法：node tools/test_units.js    （退出码非 0 表示有失败）*/

const path = require('path');
const ROOT = path.resolve(__dirname, '..');

/* rating.js 是写给浏览器的，挂在 window 上，这里给个壳让它能加载 */
global.window = {};
require(path.join(ROOT, 'assets', 'rating.js'));
const R = global.window.WURating;
const F = require(path.join(ROOT, 'assets', 'facts.js'));

let pass = 0;
const fails = [];

function ok(name, cond, got) {
  if (cond) { pass++; return; }
  fails.push(name + (got === undefined ? '' : `  实际：${JSON.stringify(got)}`));
}

function eq(name, actual, expected) {
  ok(name, actual === expected, actual);
}

/* ---------- 星级 SVG ---------- */
console.log('=== 星级 SVG ===');
console.log('   分值   裁切/总宽    空星 实星   分档');

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
  ok(`${v} 分：画满 5 颗空星与 5 颗实星`, p.off === 5 && p.on === 5, p);
  ok(`${v} 分：裁切宽度不超出画布`, p.clip >= 0 && p.clip <= p.box, p);
}

/* 关键回归点：以前半星用 ⯨（U+2BE8）这个字符，Windows 常见字体没有它的
   字形，整条评分会渲染成一排黄色小方块。现在必须完全没有星形字符。 */
ok('星级里不含任何星形字符（这是黄横线 bug 的根因）',
  !/[\u2605\u2606\u2BE8]/.test(R.stars(4.5) + R.block(4.5, 2.5)));

eq('5 分整条填满', parse(R.stars(5)).ratio, 1);
eq('0 分完全不填', parse(R.stars(0)).clip, 0);
ok('2.5 分约填一半', Math.abs(parse(R.stars(2.5)).ratio - 0.5) < 0.04,
  parse(R.stars(2.5)).ratio);
ok('4.5 分介于 4 分与 5 分之间',
  parse(R.stars(4)).clip < parse(R.stars(4.5)).clip &&
  parse(R.stars(4.5)).clip < parse(R.stars(5)).clip);
ok('超范围的分值被夹住，不会画出界',
  parse(R.stars(9)).ratio === 1 && parse(R.stars(-2)).clip === 0);

/* 同一页上有几百条星级，clipPath 的 id 必须各不相同，
   否则后面的会串用前面的裁切宽度，分数全显示成同一个值。 */
const ids = new Set();
for (let i = 0; i < 300; i++) ids.add(R.stars(3).match(/id="(st\d+)"/)[1]);
eq('300 条星级的 clipPath id 互不重复', ids.size, 300);

/* ---------- 分档文字 ---------- */
console.log('\n=== 分档文字（悬停显示）===');
const tiers = [[5, '值得专程前往'], [4.5, '强烈推荐'], [4, '强烈推荐'],
               [3.5, '顺路推荐'], [3, '顺路推荐'], [2, '有余力再去'], [1, '可以跳过']];
for (const [v, want] of tiers) {
  eq(`${v} 分 → ${want}`, R.tier(v), want);
  console.log(`   ${String(v).padStart(4)} → ${R.tier(v)}`);
}
eq('没有评分时不给分档', R.tier(null), '');

/* ---------- 双评分块 ---------- */
console.log('\n=== 双评分并列 ===');
const both = R.block(5, 2.5);
eq('两个分都有时渲染两行', (both.match(/rt-row/g) || []).length, 2);
ok('游览在前、摄影在后', both.indexOf('rt-must') < both.indexOf('rt-photo'));
ok('游览那行带分档文字', /rt-must[\s\S]*rt-tier/.test(both));
ok('摄影那行不带分档文字（避免卡头两行都在说话）',
  (both.match(/rt-tier/g) || []).length === 1);
/* socal 那批条目只有摄影评分，绝不能把摄影分冒充成游览分显示 */
const photoOnly = R.block(null, 4);
ok('只有摄影分时不渲染游览行', !/rt-must/.test(photoOnly));
ok('只有摄影分时仍渲染摄影行', /rt-photo/.test(photoOnly));
eq('两个分都没有时返回空串', R.block(null, null), '');
console.log('   5 / 2.5 → 两行；仅摄影 4 → 一行；皆无 → 空');

/* ---------- 硬信息抽取 ---------- */
console.log('\n=== 硬信息抽取 ===');
const cases = [
  ['visitMins', '<strong>2.5–4 小时</strong>；只看重点 75 分钟', 150],
  ['visitMins', '45 分钟', 45],
  /* 写了具体区间就按区间算，「半天」只是个同义的前缀，
     明确的 3 小时比笼统的「半天 = 4 小时」更该采信 */
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
/* 顺序陷阱：「不需预约」里含「需…预约」，必须先判否定式 */
eq('「不需预约」不会被误判成需预约', F.bookState('不需预约，直接刷卡进场'), 'no');
console.log('   时长/门票/开放/预约 共 ' + cases.length + ' 个样例');

/* ---------- 要点拆分 ---------- */
console.log('\n=== 要点拆分（摘要 + 详情）===');
const lead1 = F.splitLead('<strong>地下展厅 2026 年夏重开。</strong>入口在主台阶两侧的侧门，留 20–30 分钟。');
eq('加粗首句被取为摘要', lead1.lead, '地下展厅 2026 年夏重开。');
ok('加粗段之后的内容进详情', lead1.rest.indexOf('入口在主台阶') === 0, lead1.rest);
eq('标记为合规写法', lead1.bold, true);

const lead2 = F.splitLead('庭园免费且开放到日落。房子必须买票，$20 起。');
eq('没有加粗时按首个句末标点切', lead2.lead, '庭园免费且开放到日落。');
eq('并标记为不合规写法', lead2.bold, false);

const lead3 = F.splitLead('<strong>只有一句加粗、后面没内容</strong>');
eq('详情为空时不报错', lead3.rest.trim(), '');
ok('这种条目会被页面平铺显示',
  F.plainText(lead3.rest).length < F.FLAT_UNDER);

console.log('\n' + '='.repeat(58));
if (fails.length) {
  console.log(`\n❌ 失败 ${fails.length} 项（通过 ${pass} 项）：`);
  fails.forEach((f) => console.log('  - ' + f));
  process.exit(1);
}
console.log(`\n✅ 全部通过（${pass} 项断言）`);
