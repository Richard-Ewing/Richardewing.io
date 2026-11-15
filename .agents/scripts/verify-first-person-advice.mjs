#!/usr/bin/env node
/**
 * Cross-Domain First-Person Educational Advice & Anti-Slop Verifier (ADR-0027)
 * Runs deterministic checks across richardewing.io, careerwin.ai, and exogram.ai.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const RW_ROOT = 'd:/Antigravity_RichardEwing.io';
const CW_ROOT = 'D:/Antigravity_CareerWin/.wt-seo-bing-chatgpt';
const EX_ROOT = 'D:/Antigravity_MNEMOSYNE/mnemosyne-app';

const SLOP_RE =
  /\b(seamless|seamlessly|robust|leverage|leveraging|unlock|unlocking|delve|foster|game-changer|revolutionary|transformative|navigate the landscape|at the end of the day|the bottom line|production-ready|missing layer|missing piece|empower|empowering|let that sink in|read that again|full stop|here is the thing|here's the thing)\b/gi;
const DASH_RE = /[\u2013\u2014]|&mdash;|&ndash;|&#8212;|&#8211;/g;
const FIRST_PERSON_RE = /\b(I|I've|I'd|I'm|my)\b/;

let errors = 0;
let passed = 0;

function pass(msg) {
  passed++;
  console.log(`  PASS  ${msg}`);
}

function fail(msg) {
  errors++;
  console.error(`  FAIL  ${msg}`);
}

function fiveWordOpener(text) {
  return String(text || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`*_"'()]/g, '')
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .slice(0, 5)
    .join(' ');
}

function checkUniqueOpeners(label, items, getter) {
  const seen = new Map();
  const dups = [];
  for (const [key, val] of items) {
    const opener = fiveWordOpener(getter(val));
    if (!opener || opener.split(/\s+/).length < 3) {
      dups.push(`${key}: missing/too-short opener ("${opener}")`);
      continue;
    }
    if (seen.has(opener)) {
      dups.push(`${key} shares "${opener}" with ${seen.get(opener)}`);
    } else {
      seen.set(opener, key);
    }
  }
  if (dups.length === 0) {
    pass(`${label}: ${items.length}/${items.length} unique 5-word openings`);
  } else {
    fail(`${label}: ${dups.length} duplicate/missing openers -> ${dups.slice(0, 5).join('; ')}`);
  }
}

console.log('=== Cross-Domain First-Person Advice & Anti-Slop Verifier (ADR-0027) ===');

// 1. Frozen homepage guard across all 3 repos
const homepageChecks = [
  ['richardewing.io', RW_ROOT, 'app/page.tsx'],
  ['careerwin.ai page.js', CW_ROOT, 'app/page.js'],
  ['careerwin.ai HomePageClient.js', CW_ROOT, 'app/HomePageClient.js'],
  ['exogram.ai', EX_ROOT, 'src/app/page.tsx'],
];

for (const [label, repo, rel] of homepageChecks) {
  if (!fs.existsSync(repo)) {
    fail(`Missing repo directory for ${label}: ${repo}`);
    continue;
  }
  try {
    const out = execSync(`git diff -- "${rel}"`, { cwd: repo, encoding: 'utf8' }).trim();
    if (out.length > 0) {
      fail(`Homepage modified on ${label} (${rel})!`);
    } else {
      pass(`Homepage untouched on ${label} (${rel})`);
    }
  } catch (e) {
    fail(`Git diff check failed on ${label}: ${e.message}`);
  }
}

// 2. Zero dashes & zero HWS slop across all target files
const scopedFiles = [
  [RW_ROOT, 'app/compare/cursor-problems/page.tsx'],
  [RW_ROOT, 'app/compare/ai-coding-agents/page.tsx'],
  [RW_ROOT, 'app/compare/why-anthropic-bills-spike-with-tool-use/page.tsx'],
  [RW_ROOT, 'app/compare/claude-md-is-not-governance/page.tsx'],
  [RW_ROOT, 'app/compare/why-cfos-are-shutting-down-ai-pilots/page.tsx'],
  [RW_ROOT, 'app/glossary/[slug]/page.tsx'],
  [RW_ROOT, 'app/glossary/auto-enrich.ts'],
  [RW_ROOT, 'app/glossary/terms.ts'],
  [RW_ROOT, 'app/lib/spoke-data.ts'],
  [CW_ROOT, 'lib/atsData.js'],
  [CW_ROOT, 'app/ats-screening/[system]/page.js'],
  [CW_ROOT, 'app/lib/competitorData.js'],
  [CW_ROOT, 'app/compare/[slug]/page.js'],
  [CW_ROOT, 'app/why-not-chatgpt/page.js'],
  [CW_ROOT, 'app/resume-examples/[role]/page.js'],
  [EX_ROOT, 'src/app/compare/[slug]/data.ts'],
  [EX_ROOT, 'src/app/compare/[slug]/page.tsx'],
  [EX_ROOT, 'src/app/use-cases/[slug]/data.ts'],
  [EX_ROOT, 'src/app/use-cases/[slug]/page.tsx'],
  [EX_ROOT, 'src/app/blog/claude-vs-chatgpt-vs-gemini-memory-comparison-2026/page.tsx'],
];

for (const [root, rel] of scopedFiles) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    fail(`Missing target file: ${full}`);
    continue;
  }
  const src = fs.readFileSync(full, 'utf8');
  const dashes = src.match(DASH_RE) || [];
  if (dashes.length > 0) {
    fail(`Found ${dashes.length} illegal en/em-dash(es) in ${rel}`);
  } else {
    pass(`Zero dashes in ${rel}`);
  }

  const sanitizedForSlop = src.replace(/ROBUST INTELLIGENCE|exogram-vs-robust-intelligence/g, '');
  const slopMatches = sanitizedForSlop.match(SLOP_RE) || [];
  if (slopMatches.length > 0) {
    fail(`Found ${slopMatches.length} banned slop word(s) in ${rel}: [${[...new Set(slopMatches.map(m => m.toLowerCase()))].join(', ')}]`);
  } else {
    pass(`Zero banned slop words in ${rel}`);
  }
}

// 3. RichardEwing.io checks
{
  const glossaryPage = fs.readFileSync(path.join(RW_ROOT, 'app/glossary/[slug]/page.tsx'), 'utf8');
  const autoEnrich = fs.readFileSync(path.join(RW_ROOT, 'app/glossary/auto-enrich.ts'), 'utf8');
  const mckinseyRe = /Assess your organization's current|Identify quick wins for|Create a 90-day/;
  if (mckinseyRe.test(glossaryPage) || mckinseyRe.test(autoEnrich)) {
    fail('RW glossary still contains generic McKinsey consulting template strings');
  } else {
    pass('RW glossary stripped generic consulting template boilerplate');
  }

  if (!FIRST_PERSON_RE.test(glossaryPage) || !glossaryPage.includes('**Step 1:') || !glossaryPage.includes('**Step 5:')) {
    fail('RW glossary/[slug]/page.tsx missing first-person operator steps or **Step 1..5 HowTo structure');
  } else {
    pass('RW glossary/[slug]/page.tsx has first-person operator steps + HowTo structure');
  }

  const rwCompareFiles = [
    'app/compare/cursor-problems/page.tsx',
    'app/compare/ai-coding-agents/page.tsx',
    'app/compare/why-anthropic-bills-spike-with-tool-use/page.tsx',
    'app/compare/claude-md-is-not-governance/page.tsx',
    'app/compare/why-cfos-are-shutting-down-ai-pilots/page.tsx',
  ];
  for (const rel of rwCompareFiles) {
    const s = fs.readFileSync(path.join(RW_ROOT, rel), 'utf8');
    const bodyMarker = s.includes('export default function') ? s.slice(s.indexOf('export default function')) : s;
    if (/What I |How I |What Happened When My|Why I Tell|I Tell |I've |I'd /.test(s) && FIRST_PERSON_RE.test(bodyMarker)) {
      pass(`RW comparison ${rel} contains first-person educational advice`);
    } else {
      fail(`RW comparison ${rel} missing first-person educational advice block`);
    }
  }
}

// 4. CareerWin.ai checks
async function verifyCareerWin() {
  const cwResume = fs.readFileSync(path.join(CW_ROOT, 'app/resume-examples/[role]/page.js'), 'utf8');
  const in2026Count = (cwResume.match(/"In 2026,/g) || []).length;
  if (in2026Count > 0) {
    fail(`CW resume-examples still has ${in2026Count} repetitive "In 2026," openings`);
  } else {
    pass('CW resume-examples has 0 repetitive "In 2026," openings');
  }
  if (!cwResume.includes('What I Look For First on a')) {
    fail('CW resume-examples missing "What I Look For First on a {name} Resume" heading');
  } else {
    pass('CW resume-examples uses first-person hiring insider section heading');
  }

  const atsMod = await import(pathToFileURL(path.join(CW_ROOT, 'lib/atsData.js')).href);
  const atsEntries = Object.entries(atsMod.atsData || {});
  const missingAts = atsEntries.filter(([, v]) => !v.insiderAdvice || !v.twoMinuteFix || !FIRST_PERSON_RE.test(v.insiderAdvice));
  if (missingAts.length > 0) {
    fail(`CW atsData missing first-person insiderAdvice/twoMinuteFix on: ${missingAts.map(([k]) => k).join(', ')}`);
  } else {
    pass(`CW atsData has first-person insiderAdvice + twoMinuteFix across all ${atsEntries.length} systems`);
    checkUniqueOpeners('CW atsData insiderAdvice', atsEntries, (v) => v.insiderAdvice);
  }

  const atsPage = fs.readFileSync(path.join(CW_ROOT, 'app/ats-screening/[system]/page.js'), 'utf8');
  if (atsPage.includes("'Person'") && atsPage.includes('Richard Ewing') && atsPage.includes('insiderAdvice') && atsPage.includes('twoMinuteFix')) {
    pass('CW ats-screening page credits Richard Ewing (Person) and renders insiderAdvice + twoMinuteFix');
  } else {
    fail('CW ats-screening page missing Richard Ewing Person schema or insiderAdvice/twoMinuteFix rendering');
  }

  const compMod = await import(pathToFileURL(path.join(CW_ROOT, 'app/lib/competitorData.js')).href);
  const compEntries = Object.entries(compMod.competitorData || {});
  const compIn2026 = compEntries.filter(([, v]) => JSON.stringify(v).includes('In 2026,'));
  if (compIn2026.length > 0) {
    fail(`CW competitorData still contains "In 2026," on: ${compIn2026.map(([k]) => k).join(', ')}`);
  } else {
    pass('CW competitorData has 0 "In 2026," formula openings');
  }
  const missingComp = compEntries.filter(([, v]) => !v.myInsiderTake || !v.whenCompetitorFits || !FIRST_PERSON_RE.test(v.myInsiderTake));
  if (missingComp.length > 0) {
    fail(`CW competitorData missing first-person myInsiderTake/whenCompetitorFits on ${missingComp.length} entries`);
  } else {
    pass(`CW competitorData has myInsiderTake + whenCompetitorFits across all ${compEntries.length} competitors`);
    checkUniqueOpeners('CW competitorData myInsiderTake', compEntries, (v) => v.myInsiderTake);
  }

  const cwComparePage = fs.readFileSync(path.join(CW_ROOT, 'app/compare/[slug]/page.js'), 'utf8');
  if (cwComparePage.includes('data.myInsiderTake') && cwComparePage.includes('data.whenCompetitorFits') && cwComparePage.includes('Richard Ewing')) {
    pass('CW compare/[slug]/page.js renders myInsiderTake + whenCompetitorFits + Person author');
  } else {
    fail('CW compare/[slug]/page.js not wired to myInsiderTake / whenCompetitorFits / Richard Ewing author');
  }

  const cwWhyNot = fs.readFileSync(path.join(CW_ROOT, 'app/why-not-chatgpt/page.js'), 'utf8');
  if (cwWhyNot.includes("'Person'") && cwWhyNot.includes('Richard Ewing') && cwWhyNot.includes('How I Use ChatGPT Myself')) {
    pass('CW why-not-chatgpt credits Richard Ewing (Person) and teaches first-person workflow');
  } else {
    fail('CW why-not-chatgpt missing Person attribution or first-person workflow block');
  }
}

// 5. Exogram.ai checks
function verifyExogram() {
  const exCompareData = fs.readFileSync(path.join(EX_ROOT, 'src/app/compare/[slug]/data.ts'), 'utf8');
  const exComparePage = fs.readFileSync(path.join(EX_ROOT, 'src/app/compare/[slug]/page.tsx'), 'utf8');
  const flagshipMatch = exCompareData.match(/export const FLAGSHIP_COMPARISON_SLUGS = \[([\s\S]*?)\] as const;/);
  const flagshipSlugs = flagshipMatch ? [...flagshipMatch[1].matchAll(/"([^"]+)"/g)].map(m => m[1]) : [];
  const noticedMatches = [...exCompareData.matchAll(/whatINoticed:\s*(?:"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)/g)];
  if (flagshipSlugs.length >= 50 && noticedMatches.length >= flagshipSlugs.length) {
    pass(`EX compare data has ${noticedMatches.length} builderFieldNote blocks covering ${flagshipSlugs.length} flagship slugs`);
    checkUniqueOpeners(
      'EX compare whatINoticed',
      noticedMatches.map((m, idx) => [`comp_${idx}`, m[1] || m[2]]),
      (v) => v
    );
  } else {
    fail(`EX compare data missing builderFieldNote across flagship slugs (flagship=${flagshipSlugs.length}, whatINoticed=${noticedMatches.length})`);
  }
  if (!exComparePage.includes('builderFieldNote') || !exComparePage.includes('Builder Field Note')) {
    fail('EX compare/[slug]/page.tsx does not render builderFieldNote');
  } else {
    pass('EX compare/[slug]/page.tsx renders builderFieldNote');
  }

  const exUseData = fs.readFileSync(path.join(EX_ROOT, 'src/app/use-cases/[slug]/data.ts'), 'utf8');
  const exUsePage = fs.readFileSync(path.join(EX_ROOT, 'src/app/use-cases/[slug]/page.tsx'), 'utf8');
  const brokeMatches = [...exUseData.matchAll(/whatBrokeFirst:\s*(?:"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)/g)];
  const diagTypeMatches = [...exUseData.matchAll(/diagramType:\s*['"](sentinel|dual-engine|portable-graph|living-graph)['"]/g)];
  if (brokeMatches.length >= 17 && diagTypeMatches.length >= 17) {
    pass(`EX use-cases data has ${brokeMatches.length} founderAdvice blocks and ${diagTypeMatches.length} diagramType entries`);
    checkUniqueOpeners(
      'EX use-cases whatBrokeFirst',
      brokeMatches.map((m, idx) => [`uc_${idx}`, m[1] || m[2]]),
      (v) => v
    );
  } else {
    fail(`EX use-cases missing founderAdvice or diagramType across 17 flagships (whatBrokeFirst=${brokeMatches.length}, diagramType=${diagTypeMatches.length})`);
  }

  const hasAll4Diagrams =
    exUsePage.includes('DualEngineArchitectureDiagram') &&
    exUsePage.includes('SiloedMemoryVsPortableGraphDiagram') &&
    exUsePage.includes('FastMcpSentinelDiagram') &&
    exUsePage.includes('LivingGraphTopologyDiagram') &&
    exUsePage.includes('founderAdvice');
  if (!hasAll4Diagrams) {
    fail('EX use-cases/[slug]/page.tsx missing all 4 architecture diagrams or founderAdvice rendering');
  } else {
    pass('EX use-cases/[slug]/page.tsx wires all 4 SVG diagrams (17/17 coverage) and founderAdvice');
  }

  const exBlog = fs.readFileSync(path.join(EX_ROOT, 'src/app/blog/claude-vs-chatgpt-vs-gemini-memory-comparison-2026/page.tsx'), 'utf8');
  if (exBlog.includes('SiloedMemoryVsPortableGraphDiagram') && FIRST_PERSON_RE.test(exBlog) && exBlog.includes('How I Split')) {
    pass('EX multi-model memory blog teaches first-person split and embeds SVG diagram');
  } else {
    fail('EX multi-model memory blog missing SiloedMemoryVsPortableGraphDiagram or first-person workflow teaching');
  }
}

await verifyCareerWin();
verifyExogram();

console.log(`\nSUMMARY: ${passed} passed, ${errors} failed.`);
process.exit(errors === 0 ? 0 : 1);
