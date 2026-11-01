#!/usr/bin/env node
/**
 * Sovereign Retrieval Benchmark Harness (`.agents/scripts/run-retrieval-eval.mjs`)
 * ================================================================================
 * Clean-room mathematical retrieval evaluator & diff comparator (ADR-0020 Phase 4.2).
 *
 * Computes exact deterministic metrics:
 *   - Recall@k
 *   - Precision@k
 *   - nDCG@k (DCG@k / IDCG@k with graded relevance 2^rel - 1 / log2(rank + 1))
 *   - MRR (Mean Reciprocal Rank)
 *   - Hit@k
 *
 * Modes:
 *   node .agents/scripts/run-retrieval-eval.mjs
 *   node .agents/scripts/run-retrieval-eval.mjs --k 5 --output .scratch/retrieval-eval-latest.json
 *   node .agents/scripts/run-retrieval-eval.mjs --dataset path/to/gold.jsonl
 *   node .agents/scripts/run-retrieval-eval.mjs --live
 *   node .agents/scripts/run-retrieval-eval.mjs --diff baseline.json candidate.json [--strict]
 */

import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const SCRATCH_DIR = path.join(ROOT_DIR, '.scratch');

// ---------------------------------------------------------------------------
// In-Memory TypeScript Corpus Loader (Resolves extensionless `./` & `@/` TS imports)
// ---------------------------------------------------------------------------

const tsModuleCache = new Map();
const nodeRequire = Module.createRequire(import.meta.url);

function resolveTsPath(baseDir, specifier) {
  let candidateBase = specifier;
  if (specifier.startsWith('@/')) {
    candidateBase = path.join(ROOT_DIR, specifier.slice(2));
  } else if (specifier.startsWith('.')) {
    candidateBase = path.resolve(baseDir, specifier);
  } else {
    return null;
  }

  const candidates = [
    candidateBase,
    `${candidateBase}.ts`,
    `${candidateBase}.tsx`,
    `${candidateBase}.js`,
    path.join(candidateBase, 'index.ts'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) {
      return c;
    }
  }
  return null;
}

function loadTsFile(absPath) {
  const normalized = path.resolve(absPath);
  if (tsModuleCache.has(normalized)) {
    return tsModuleCache.get(normalized).exports;
  }

  const source = fs.readFileSync(normalized, 'utf8');
  const transpiled = ts.transpileModule(source, {
    fileName: normalized,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
    },
  });

  const mod = { exports: {} };
  tsModuleCache.set(normalized, mod);

  const dirname = path.dirname(normalized);
  const customRequire = (specifier) => {
    const resolvedTs = resolveTsPath(dirname, specifier);
    if (resolvedTs && (resolvedTs.endsWith('.ts') || resolvedTs.endsWith('.tsx'))) {
      return loadTsFile(resolvedTs);
    }
    if (resolvedTs) {
      return nodeRequire(resolvedTs);
    }
    return nodeRequire(specifier);
  };

  const wrapper = new Function(
    'exports',
    'require',
    'module',
    '__filename',
    '__dirname',
    transpiled.outputText
  );
  wrapper(mod.exports, customRequire, mod, normalized, dirname);
  return mod.exports;
}

// ---------------------------------------------------------------------------
// Exact Mathematical Retrieval Metrics
// ---------------------------------------------------------------------------

/**
 * Normalizes relevant gold annotations into a Map<docId, grade> where grade > 0.
 */
export function normalizeGoldMap(relevantRaw) {
  const gold = new Map();
  if (!relevantRaw) return gold;

  if (Array.isArray(relevantRaw)) {
    for (const entry of relevantRaw) {
      if (typeof entry === 'string' && entry.trim()) {
        gold.set(entry.trim(), 1);
      } else if (entry && typeof entry === 'object' && typeof entry.id === 'string' && entry.id.trim()) {
        const grade = Number(entry.grade ?? entry.relevance ?? 1);
        if (Number.isFinite(grade) && grade > 0) {
          gold.set(entry.id.trim(), grade);
        }
      }
    }
  } else if (typeof relevantRaw === 'object') {
    for (const [id, rawGrade] of Object.entries(relevantRaw)) {
      const grade = Number(rawGrade);
      if (id.trim() && Number.isFinite(grade) && grade > 0) {
        gold.set(id.trim(), grade);
      }
    }
  }
  return gold;
}

export function computeQueryMetrics(retrievedIds, goldMap, k) {
  const safeK = Math.max(1, Math.floor(Number(k) || 5));
  // Deduplicate retrieved list preserving first-seen rank order
  const deduped = [];
  const seen = new Set();
  for (const rawId of retrievedIds || []) {
    const id = String(rawId || '').trim();
    if (id && !seen.has(id)) {
      seen.add(id);
      deduped.push(id);
    }
  }

  const topK = deduped.slice(0, safeK);
  const totalRelevant = goldMap.size;

  if (totalRelevant === 0) {
    return {
      recallAtK: 0,
      precisionAtK: 0,
      ndcgAtK: 0,
      mrr: 0,
      hitAtK: 0,
    };
  }

  let hitsInTopK = 0;
  let dcg = 0;
  let firstHitRank = 0;

  for (let i = 0; i < topK.length; i++) {
    const docId = topK[i];
    const rel = goldMap.get(docId) || 0;
    if (rel > 0) {
      hitsInTopK += 1;
      if (firstHitRank === 0) {
        firstHitRank = i + 1;
      }
      dcg += (Math.pow(2, rel) - 1) / Math.log2(i + 2);
    }
  }

  // Ideal DCG@k sorted descending by grade
  const idealGrades = Array.from(goldMap.values()).sort((a, b) => b - a).slice(0, safeK);
  let idcg = 0;
  for (let i = 0; i < idealGrades.length; i++) {
    idcg += (Math.pow(2, idealGrades[i]) - 1) / Math.log2(i + 2);
  }

  return {
    recallAtK: hitsInTopK / totalRelevant,
    precisionAtK: hitsInTopK / safeK,
    ndcgAtK: idcg > 0 ? dcg / idcg : 0,
    mrr: firstHitRank > 0 ? 1 / firstHitRank : 0,
    hitAtK: hitsInTopK > 0 ? 1 : 0,
  };
}

// ---------------------------------------------------------------------------
// Deterministic BM25 Indexer over Canonical Concepts + Research Corpus
// ---------------------------------------------------------------------------

const STOPWORDS = new Set([
  'the', 'and', 'for', 'with', 'that', 'this', 'from', 'into', 'your', 'are',
  'what', 'how', 'why', 'when', 'where', 'who', 'does', 'can', 'will', 'over',
  'under', 'their', 'they', 'have', 'has', 'had', 'not', 'but', 'you', 'our',
]);

function tokenize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .split(/\s+/)
    .filter((tok) => tok.length >= 2 && !STOPWORDS.has(tok));
}

function buildBm25Index(documents) {
  const docTokens = [];
  const df = new Map();
  let totalLen = 0;

  for (const doc of documents) {
    const tokens = tokenize(doc.searchableText);
    totalLen += tokens.length;
    const tf = new Map();
    for (const t of tokens) {
      tf.set(t, (tf.get(t) || 0) + 1);
    }
    for (const uniqueTerm of tf.keys()) {
      df.set(uniqueTerm, (df.get(uniqueTerm) || 0) + 1);
    }
    docTokens.push({ id: doc.id, len: tokens.length, tf, titleLower: doc.title.toLowerCase() });
  }

  const N = Math.max(1, documents.length);
  const avgdl = totalLen / N || 1;
  const k1 = 1.5;
  const b = 0.75;

  return {
    size: documents.length,
    search(query, limit = 10) {
      const qTerms = tokenize(query);
      if (qTerms.length === 0) return [];
      const qPhrase = String(query || '').toLowerCase().trim();

      const scored = [];
      for (const d of docTokens) {
        let score = 0;
        for (const term of qTerms) {
          const freq = d.tf.get(term) || 0;
          if (freq === 0) continue;
          const docFreq = df.get(term) || 0;
          const idf = Math.log(1 + (N - docFreq + 0.5) / (docFreq + 0.5));
          const denom = freq + k1 * (1 - b + b * (d.len / avgdl));
          score += idf * ((freq * (k1 + 1)) / denom);
        }
        if (score > 0 && qPhrase.length >= 4 && d.titleLower.includes(qPhrase)) {
          score *= 1.35;
        }
        if (score > 0) {
          scored.push({ id: d.id, score });
        }
      }

      scored.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
      return scored.slice(0, limit).map((s) => s.id);
    },
  };
}

function loadLocalCorpusDocuments() {
  const { CANONICAL_CONCEPTS } = loadTsFile(path.join(ROOT_DIR, 'app/lib/concept-corpus.ts'));
  const { RESEARCH_CORPUS } = loadTsFile(path.join(ROOT_DIR, 'app/lib/research-corpus.ts'));

  const docs = [];
  const seenIds = new Set();

  for (const c of CANONICAL_CONCEPTS || []) {
    const id = `concept:${c.slug}`;
    if (seenIds.has(id)) continue;
    seenIds.add(id);
    docs.push({
      id,
      title: c.title || c.slug,
      searchableText: [
        c.slug.replace(/-/g, ' '),
        c.title,
        c.title,
        c.domain,
        c.definition,
        c.whyItMatters,
        c.positionStatement || '',
        c.aeo?.shortDefinition || '',
      ].join(' '),
    });
  }

  for (const r of RESEARCH_CORPUS || []) {
    const id = `research:${r.id}`;
    if (seenIds.has(id)) continue;
    seenIds.add(id);
    docs.push({
      id,
      title: r.title || r.id,
      searchableText: [
        r.id.replace(/-/g, ' '),
        r.title,
        r.title,
        r.domain,
        r.publisher,
        r.thesis,
        ...(r.relatedConceptIds || []).map((s) => s.replace(/-/g, ' ')),
      ].join(' '),
    });
  }

  return {
    docs,
    conceptCount: (CANONICAL_CONCEPTS || []).length,
    researchCount: (RESEARCH_CORPUS || []).length,
  };
}

const DEFAULT_GOLD_FIXTURE = [
  {
    id: 'q01',
    query: 'Inference Dividend Model edge validation semantic caching model tiering',
    relevant: [
      { id: 'concept:inference-dividend-model', grade: 3 },
      { id: 'research:linkedin-inference-dividend-model', grade: 2 },
    ],
  },
  {
    id: 'q02',
    query: 'IRS Section 174 software R&D capitalization phantom cash tax trap AI code velocity',
    relevant: [
      { id: 'research:beehiiv-section-174-ai-tax-trap-software-capitalization', grade: 3 },
      { id: 'concept:section-174-capitalization', grade: 2 },
    ],
  },
  {
    id: 'q03',
    query: 'award winning AI contract onboarding project cloud bill 40 percent exception queue',
    relevant: [
      { id: 'research:cio-audited-award-winning-ai-project-cloud-bill', grade: 3 },
      { id: 'concept:consumption-meter-trap', grade: 2 },
    ],
  },
  {
    id: 'q04',
    query: 'Google Antigravity 2.0 hybrid cloud local LiteRT Gemma 4 26B Gemini 3.8 Flash architecture',
    relevant: [
      { id: 'research:google-antigravity-hybrid-cloud-local-architecture', grade: 3 },
      { id: 'concept:hybrid-cloud-local-runtime', grade: 2 },
    ],
  },
  {
    id: 'q05',
    query: 'enterprise ATS Workday Greenhouse PDF resume parser 74 percent discard rate benchmark',
    relevant: [
      { id: 'research:careerwin-2026-enterprise-ats-ai-resume-benchmark-study', grade: 3 },
      { id: 'concept:ai-resume-detection-forensics', grade: 2 },
    ],
  },
  {
    id: 'q06',
    query: 'AI tokenomics COGS token cost per query feature margin floor gross margin',
    relevant: [
      { id: 'concept:ai-tokenomics-cogs', grade: 3 },
      { id: 'concept:cpo-feature-margin-floor', grade: 2 },
    ],
  },
  {
    id: 'q07',
    query: 'Product Debt Index PDI technical debt interest servicing velocity drag',
    relevant: [{ id: 'concept:product-debt-index', grade: 3 }],
  },
  {
    id: 'q08',
    query: 'Action Per Engineering Dollar APER revenue per engineer productivity ratio',
    relevant: [{ id: 'concept:aper-metric', grade: 3 }],
  },
  {
    id: 'q09',
    query: 'AI volatility tax retry inflation unpredicted retry loops multi agent token spend',
    relevant: [
      { id: 'concept:ai-volatility-tax', grade: 3 },
      { id: 'concept:retry-inflation', grade: 2 },
    ],
  },
  {
    id: 'q10',
    query: 'supervisory review queue human exception handling eating automation savings',
    relevant: [
      { id: 'concept:supervisory-review-queue', grade: 3 },
      { id: 'research:cio-audited-award-winning-ai-project-cloud-bill', grade: 2 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Diff Mode (`--diff baseline.json candidate.json [--strict]`)
// ---------------------------------------------------------------------------

function round4(n) {
  return Math.round(Number(n || 0) * 10000) / 10000;
}

function formatDelta(delta) {
  const r = round4(delta);
  return r >= 0 ? `+${r.toFixed(4)}` : r.toFixed(4);
}

function runDiffMode(baselinePath, candidatePath, isStrict) {
  const absBase = path.resolve(ROOT_DIR, baselinePath);
  const absCand = path.resolve(ROOT_DIR, candidatePath);
  if (!fs.existsSync(absBase)) {
    console.error(`[RETRIEVAL DIFF ERROR] Baseline report not found: ${absBase}`);
    process.exit(1);
  }
  if (!fs.existsSync(absCand)) {
    console.error(`[RETRIEVAL DIFF ERROR] Candidate report not found: ${absCand}`);
    process.exit(1);
  }

  const base = JSON.parse(fs.readFileSync(absBase, 'utf8'));
  const cand = JSON.parse(fs.readFileSync(absCand, 'utf8'));
  if (!base?.queryCount || !cand?.queryCount || !base?.summary || !cand?.summary) {
    console.error('[RETRIEVAL DIFF ERROR] Both baseline and candidate reports must contain non-zero queryCount and summary objects.');
    process.exit(1);
  }
  const bSum = base.summary;
  const cSum = cand.summary;

  const metrics = ['recallAtK', 'precisionAtK', 'ndcgAtK', 'mrr', 'hitAtK'];
  console.log(`=== Retrieval Evaluation Diff (k=${cand.k ?? base.k ?? 5}) ===`);
  console.log(`Baseline : ${path.relative(ROOT_DIR, absBase)} (${base.queryCount} queries)`);
  console.log(`Candidate: ${path.relative(ROOT_DIR, absCand)} (${cand.queryCount} queries)\n`);

  const deltas = {};
  for (const m of metrics) {
    const bv = Number(bSum[m] ?? 0);
    const cv = Number(cSum[m] ?? 0);
    const diff = cv - bv;
    deltas[m] = round4(diff);
    console.log(
      `  ${m.padEnd(14)}: ${bv.toFixed(4)} -> ${cv.toFixed(4)} (${formatDelta(diff)})`
    );
  }

  if (isStrict && (deltas.ndcgAtK < -0.005 || deltas.recallAtK < -0.005)) {
    console.error(
      `\n[RETRIEVAL DIFF FAILED] Strict gate tripped: nDCG@k delta=${deltas.ndcgAtK.toFixed(4)}, Recall@k delta=${deltas.recallAtK.toFixed(4)} (tolerance -0.0050).`
    );
    process.exit(1);
  }

  console.log('\n[PASS] Retrieval evaluation diff completed.');
  process.exit(0);
}

// ---------------------------------------------------------------------------
// CLI Entrypoint
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const opts = {
    k: 5,
    dataset: null,
    output: path.join(SCRATCH_DIR, 'retrieval-eval-latest.json'),
    live: false,
    strict: false,
    diff: null,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--live') {
      opts.live = true;
    } else if (a === '--strict') {
      opts.strict = true;
    } else if (a === '--k' && argv[i + 1]) {
      opts.k = Math.max(1, parseInt(argv[++i], 10) || 5);
    } else if (a.startsWith('--k=')) {
      opts.k = Math.max(1, parseInt(a.slice(4), 10) || 5);
    } else if (a === '--dataset' && argv[i + 1]) {
      opts.dataset = argv[++i];
    } else if (a.startsWith('--dataset=')) {
      opts.dataset = a.slice(10);
    } else if (a === '--output' && argv[i + 1]) {
      opts.output = path.resolve(ROOT_DIR, argv[++i]);
    } else if (a.startsWith('--output=')) {
      opts.output = path.resolve(ROOT_DIR, a.slice(9));
    } else if (a === '--diff') {
      opts.diff = [argv[i + 1], argv[i + 2]];
      i += 2;
    }
  }
  return opts;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));

  if (opts.diff) {
    if (!opts.diff[0] || !opts.diff[1]) {
      console.error('Usage: node .agents/scripts/run-retrieval-eval.mjs --diff <baseline.json> <candidate.json> [--strict]');
      process.exit(1);
    }
    runDiffMode(opts.diff[0], opts.diff[1], opts.strict);
    return;
  }

  // Load dataset
  let queries = DEFAULT_GOLD_FIXTURE;
  let datasetLabel = 'builtin:canonical-concepts-and-research-gold-v1';

  if (opts.dataset) {
    const absDataset = path.resolve(ROOT_DIR, opts.dataset);
    if (!fs.existsSync(absDataset)) {
      console.error(`[RETRIEVAL EVAL ERROR] Dataset file not found: ${absDataset}`);
      process.exit(1);
    }
    const rawLines = fs
      .readFileSync(absDataset, 'utf8')
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    if (rawLines.length === 0) {
      console.error(`[RETRIEVAL EVAL ERROR] Dataset file is empty: ${absDataset}`);
      process.exit(1);
    }

    queries = rawLines.map((line, idx) => {
      try {
        const parsed = JSON.parse(line);
        if (!parsed || typeof parsed.query !== 'string' || !parsed.query.trim()) {
          throw new Error('Missing non-empty "query" string');
        }
        return {
          id: parsed.id || `row_${idx + 1}`,
          query: parsed.query.trim(),
          relevant: parsed.relevant || parsed.gold || [],
          retrieved: Array.isArray(parsed.retrieved) ? parsed.retrieved : null,
        };
      } catch (err) {
        console.error(`[RETRIEVAL EVAL ERROR] Invalid JSONL at line ${idx + 1}: ${err.message}`);
        process.exit(1);
      }
    });
    datasetLabel = path.relative(ROOT_DIR, absDataset).replace(/\\/g, '/');
  }

  let corpusMeta = { totalDocs: 0, conceptCount: 0, researchCount: 0 };
  let bm25 = null;
  let liveSearchFn = null;

  if (opts.live) {
    // Load local env files without overriding explicit shell env
    const dotenvMod = await import('dotenv').catch(() => null);
    if (dotenvMod?.default) {
      for (const envName of ['.env.local', '.env.production.local', '.env']) {
        const envPath = path.join(ROOT_DIR, envName);
        if (fs.existsSync(envPath)) {
          dotenvMod.default.config({ path: envPath, override: false, quiet: true });
        }
      }
    }
    const exogramMod = await import('../../lib/exogram.ts');
    liveSearchFn = exogramMod.vaultSearchStrict;
  } else {
    const needsCorpus = queries.some((q) => !Array.isArray(q.retrieved));
    if (needsCorpus) {
      const loaded = loadLocalCorpusDocuments();
      corpusMeta = {
        totalDocs: loaded.docs.length,
        conceptCount: loaded.conceptCount,
        researchCount: loaded.researchCount,
      };
      bm25 = buildBm25Index(loaded.docs);
    }
  }

  const perQuery = [];
  const totals = {
    recallAtK: 0,
    precisionAtK: 0,
    ndcgAtK: 0,
    mrr: 0,
    hitAtK: 0,
  };

  for (const row of queries) {
    let retrievedIds = row.retrieved;
    if (!Array.isArray(retrievedIds)) {
      if (opts.live) {
        // Throws honest transport/auth Error if EXOGRAM_API_KEY is missing or HTTP fails
        const liveRes = await liveSearchFn(row.query, Math.max(opts.k, 10));
        retrievedIds = (liveRes.results || []).map((r) => r.id || r.source || r.claim);
      } else {
        retrievedIds = bm25.search(row.query, Math.max(opts.k, 10));
      }
    }

    const goldMap = normalizeGoldMap(row.relevant);
    const m = computeQueryMetrics(retrievedIds, goldMap, opts.k);

    totals.recallAtK += m.recallAtK;
    totals.precisionAtK += m.precisionAtK;
    totals.ndcgAtK += m.ndcgAtK;
    totals.mrr += m.mrr;
    totals.hitAtK += m.hitAtK;

    perQuery.push({
      id: row.id,
      query: row.query,
      goldIds: Array.from(goldMap.keys()),
      topRetrieved: retrievedIds.slice(0, opts.k),
      metrics: {
        recallAtK: round4(m.recallAtK),
        precisionAtK: round4(m.precisionAtK),
        ndcgAtK: round4(m.ndcgAtK),
        mrr: round4(m.mrr),
        hitAtK: round4(m.hitAtK),
      },
    });
  }

  const denom = Math.max(1, queries.length);
  const summary = {
    recallAtK: round4(totals.recallAtK / denom),
    precisionAtK: round4(totals.precisionAtK / denom),
    ndcgAtK: round4(totals.ndcgAtK / denom),
    mrr: round4(totals.mrr / denom),
    hitAtK: round4(totals.hitAtK / denom),
  };

  const report = {
    generatedAt: new Date().toISOString(),
    mode: opts.live ? 'live_exogram_vault' : 'local_bm25_corpus',
    dataset: datasetLabel,
    k: opts.k,
    queryCount: queries.length,
    corpus: corpusMeta,
    summary,
    queries: perQuery,
  };

  fs.mkdirSync(path.dirname(opts.output), { recursive: true });
  fs.writeFileSync(opts.output, JSON.stringify(report, null, 2) + '\n', 'utf8');

  console.log(
    `[RETRIEVAL EVAL] Mode=${report.mode} | Docs=${corpusMeta.totalDocs} | Queries=${queries.length} | k=${opts.k}`
  );
  console.log(
    `  Recall@${opts.k}=${summary.recallAtK.toFixed(4)} | Precision@${opts.k}=${summary.precisionAtK.toFixed(4)} | nDCG@${opts.k}=${summary.ndcgAtK.toFixed(4)} | MRR=${summary.mrr.toFixed(4)} | Hit@${opts.k}=${summary.hitAtK.toFixed(4)}`
  );
  console.log(`  Report written: ${path.relative(ROOT_DIR, opts.output)}`);
}

if (path.resolve(process.argv[1] || '') === __filename) {
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(`[RETRIEVAL EVAL FATAL] ${err instanceof Error ? err.message : String(err)}`);
      process.exit(1);
    });
}
