/* ===== Check that data matches what the renderer assumes =====

   After the rewrite, two places on the page depend on how the data is written,
   not just whether fields are filled:

     1. The facts bar and filters pull duration / tickets / hours / reservation
        out of access rich text. Cells that fail extraction fall back to a truncated
        original, which is readable but ugly; a low extraction rate means the
        wording in the data is inconsistent — go fix the data, do not loosen the regex.

     2. "What to see / how to visit" shows only the bold first sentence as a summary
        (see tools/SCHEMA.md). Items without a bold lead fall back to splitting on
        periods, and those splits often read poorly; a first sentence that is too
        long will not fit on one line.

   So this script reports extraction rate and lead-sentence compliance by region,
   and lists the worst items so you can edit the matching files.

   Usage: node tools/check_render.js
   Extraction rules are require()'d from assets/facts.js, same as the page,
   so we do not keep a second copy of the regex. */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const F = require(path.join(ROOT, 'assets', 'facts.js'));

/* Reasonable lead length, matching the 20–45 character target in SCHEMA.md for researchers.
   Leave some slack: 45 is the writing goal; only over 90 really needs a rewrite —
   collapsed CSS pins the lead to two lines, and two lines fit about 90 characters;
   longer leads get clipped (expanding shows the rest, but the summary list is harder to scan). */
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
  /* socal is not split into parts; take it from data.js (`var REGIONS = [...]`) */
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

console.log('=== Facts-bar field extraction rate ===');
console.log('  region         dur   tickets   hours    book');
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
    `   (${n} spots)`);
}

console.log('\n=== Lead-sentence (summary line) compliance ===');
console.log('  region        count   bold lead   too long(>60)  too short(<12)  empty when expanded');
for (const slug of REGIONS) {
  const rows = loadRegion(slug);
  let leads = 0, bold = 0, long = 0, short = 0, empty = 0;
  for (const { file, s } of rows) {
    /* Only these two sections: the page only uses "bold first sentence as summary" on them.
       notes is a list of short lines, still shown flat, and is not bound by the lead rule. */
    for (const key of ['highlights', 'tour']) {
      const list = s[key];
      if (!Array.isArray(list)) continue;
      for (const item of list) {
        const p = F.splitLead(item);
        const lead = F.plainText(p.lead);
        const rest = F.plainText(p.rest);
        leads++;
        if (p.bold) bold++; else problems.push(
          { kind: 'no bold lead', file, id: s.id, key, text: lead.slice(0, 50) });
        if (lead.length > LEAD_MAX) {
          long++;
          problems.push({ kind: `lead ${lead.length} chars (too long)`, file, id: s.id, key,
            text: lead.slice(0, 50) });
        }
        if (lead.length < LEAD_MIN) short++;
        /* Bold lead but body under the threshold: the page flattens automatically; not an error, just a note */
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

console.log(`\n  Total ${grand.leads} key points, bold lead ${pct(grand.bold, grand.leads)}, ` +
  `${grand.long} too long, ${grand.short} too short, ${grand.empty} shown flat`);

/* Only list problems in the three rewritten regions. The socal set was written in the
   photography-first era and never followed the bold-lead rule; the page falls back to
   splitting on periods, which is known. */
const inScope = problems.filter((p) => !p.file.startsWith('socal/'));
if (inScope.length) {
  console.log(`\n=== Items to fix in the rewrite scope (${inScope.length} items, first 20) ===`);
  inScope.slice(0, 20).forEach((p) => {
    console.log(`  [${p.kind}] ${p.file}  ${p.id}.${p.key}`);
    console.log(`      ${p.text}…`);
  });
} else {
  console.log('\n✅ All key points in the rewrite scope follow the bold-lead rule');
}
