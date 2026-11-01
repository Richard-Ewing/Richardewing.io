#!/usr/bin/env node
/**
 * Sovereign Curriculum Health & Source-Drift Fingerprinter
 * (`.agents/scripts/check-curriculum-health.mjs`)
 * ========================================================
 * Build-time Vault Academy Moat & 5-Step Asset Engine auditor (ADR-0020 Phase 4.3).
 *
 * Parses:
 *   - `app/lib/curriculum-data.ts` (`modules`)
 *   - `app/lib/curriculum-tracks-ui.ts` (`tracks` + `pipelineSpine`)
 *   - `app/lib/concept-corpus.ts` (`CANONICAL_CONCEPTS`)
 *   - `app/lib/research-corpus.ts` (`RESEARCH_CORPUS`)
 *
 * Computes deterministic SHA-256 content & upstream dependency fingerprints for
 * every module, audits 5-Step Asset Engine coverage (`Research -> Concept ->
 * Framework -> Diagnostic -> Implementation`), compares against
 * `.scratch/curriculum-fingerprints.json`, and writes
 * `.scratch/curriculum-health-report.json`.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import Module from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const SCRATCH_DIR = path.join(ROOT_DIR, '.scratch');
const FINGERPRINT_PATH = path.join(SCRATCH_DIR, 'curriculum-fingerprints.json');
const REPORT_PATH = path.join(SCRATCH_DIR, 'curriculum-health-report.json');

// ---------------------------------------------------------------------------
// In-Memory TypeScript Module Loader
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

function sha256(payload) {
  const str = typeof payload === 'string' ? payload : JSON.stringify(payload);
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

function normalizeKey(raw) {
  return String(raw || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

// ---------------------------------------------------------------------------
// Main Curriculum Health & Dependency Drift Audit
// ---------------------------------------------------------------------------

function main() {
  const args = new Set(process.argv.slice(2));
  const updateBaseline = args.has('--update-baseline');
  const isStrict = args.has('--strict');
  const isStrictMoat = args.has('--strict-moat');

  const { modules, getModule } = loadTsFile(path.join(ROOT_DIR, 'app/lib/curriculum-data.ts'));
  const { tracks } = loadTsFile(path.join(ROOT_DIR, 'app/lib/curriculum-tracks-ui.ts'));
  const { CANONICAL_CONCEPTS } = loadTsFile(path.join(ROOT_DIR, 'app/lib/concept-corpus.ts'));
  const { RESEARCH_CORPUS } = loadTsFile(path.join(ROOT_DIR, 'app/lib/research-corpus.ts'));

  // Index concepts by slug and normalized title
  const conceptBySlug = new Map();
  const conceptByNorm = new Map();
  for (const c of CANONICAL_CONCEPTS || []) {
    const digest = sha256({
      slug: c.slug,
      title: c.title,
      definition: c.definition,
      whyItMatters: c.whyItMatters,
      claims: c.claims || [],
    });
    const record = { slug: c.slug, title: c.title, domain: c.domain, hash: digest };
    conceptBySlug.set(c.slug, record);
    conceptByNorm.set(normalizeKey(c.slug), record);
    conceptByNorm.set(normalizeKey(c.title), record);
  }

  // Index research articles by id, domain, and relatedConceptIds
  const researchByConcept = new Map();
  const researchByDomain = new Map();
  const researchById = new Map();
  for (const r of RESEARCH_CORPUS || []) {
    const digest = sha256({
      id: r.id,
      title: r.title,
      thesis: r.thesis,
      date: r.date || '',
    });
    const record = { id: r.id, title: r.title, domain: r.domain, hash: digest };
    researchById.set(r.id, record);

    const domList = researchByDomain.get(r.domain) || [];
    domList.push(record);
    researchByDomain.set(r.domain, domList);

    for (const cid of r.relatedConceptIds || []) {
      const list = researchByConcept.get(cid) || [];
      list.push(record);
      researchByConcept.set(cid, list);
    }
  }

  // Map UI tracks by title, module slug, and track folder prefix
  const trackByTitle = new Map();
  const trackByModuleSlug = new Map();
  const trackByFolderPrefix = new Map();
  for (const tr of tracks || []) {
    trackByTitle.set(tr.title, tr);
    for (const m of tr.modules || []) {
      if (m.href) {
        const slug = m.href.replace('/vault/curriculum/tracks/', '');
        trackByModuleSlug.set(slug, tr);
        const folder = slug.split('/')[0];
        if (folder && slug.includes('/')) {
          trackByFolderPrefix.set(folder, tr);
        }
      }
      if (m.id) {
        trackByModuleSlug.set(m.id, tr);
      }
    }
  }

  // Load previous fingerprints if present
  let previousFingerprints = null;
  if (fs.existsSync(FINGERPRINT_PATH)) {
    try {
      previousFingerprints = JSON.parse(fs.readFileSync(FINGERPRINT_PATH, 'utf8'));
    } catch {
      previousFingerprints = null;
    }
  }

  const nextModuleFingerprints = {};
  const staleUpstreamModules = [];
  const updatedModules = [];
  const addedModules = [];
  const incompleteMoatModules = [];
  const zeroLessonModules = [];
  const waitlistModules = [];

  const moduleSlugs = Object.keys(modules || {}).sort();
  let liveCount = 0;

  for (const slug of moduleSlugs) {
    const mod = typeof getModule === 'function' ? getModule(slug) || modules[slug] : modules[slug];
    if (!mod) continue;

    if (mod.status === 'waitlist') {
      waitlistModules.push(slug);
      continue;
    }
    liveCount += 1;

    const folderPrefix = slug.includes('/') ? slug.split('/')[0] : '';
    const parentTrack =
      trackByModuleSlug.get(slug) ||
      trackByModuleSlug.get(mod.moduleId) ||
      trackByTitle.get(mod.trackName) ||
      (folderPrefix ? trackByFolderPrefix.get(folderPrefix) : null) ||
      null;

    // Resolve upstream concept dependencies
    const matchedConcepts = new Map();
    for (const term of parentTrack?.glossaryTerms || []) {
      const hit = conceptBySlug.get(term) || conceptByNorm.get(normalizeKey(term));
      if (hit) matchedConcepts.set(hit.slug, hit);
    }
    if (parentTrack?.pipelineSpine?.concept) {
      const hit = conceptByNorm.get(normalizeKey(parentTrack.pipelineSpine.concept));
      if (hit) matchedConcepts.set(hit.slug, hit);
    }
    const titleNorm = normalizeKey(mod.title);
    for (const [normKey, rec] of conceptByNorm.entries()) {
      if (normKey.length >= 8 && titleNorm.includes(normKey)) {
        matchedConcepts.set(rec.slug, rec);
      }
    }

    // Resolve upstream research dependencies
    const matchedResearch = new Map();
    for (const cSlug of matchedConcepts.keys()) {
      for (const rHit of researchByConcept.get(cSlug) || []) {
        matchedResearch.set(rHit.id, rHit);
      }
    }
    for (const artUrl of mod.relatedArticles || []) {
      const tail = String(artUrl).split('/').filter(Boolean).pop() || '';
      const normTail = normalizeKey(tail);
      for (const [rId, rRec] of researchById.entries()) {
        if (normalizeKey(rId).includes(normTail) && normTail.length >= 8) {
          matchedResearch.set(rId, rRec);
        }
      }
    }

    const sortedConcepts = Array.from(matchedConcepts.values()).sort((a, b) =>
      a.slug.localeCompare(b.slug)
    );
    const sortedResearch = Array.from(matchedResearch.values()).sort((a, b) =>
      a.id.localeCompare(b.id)
    );

    const upstreamHash = sha256({
      pipelineSpine: parentTrack?.pipelineSpine || null,
      concepts: sortedConcepts.map((c) => ({ slug: c.slug, hash: c.hash })),
      research: sortedResearch.map((r) => ({ id: r.id, hash: r.hash })),
    });

    const moduleHash = sha256({
      moduleId: mod.moduleId,
      title: mod.title,
      description: mod.description,
      trackName: mod.trackName,
      takeaways: mod.takeaways || [],
      lessons: (mod.lessons || []).map((les) => ({
        title: les.title,
        content: les.content,
        details: les.details,
        exercise: les.exercise,
      })),
      embeddedTool: mod.embeddedTool || null,
    });

    // Audit 5-Step Sovereign Asset Engine coverage
    const hasResearch =
      Boolean(parentTrack?.pipelineSpine?.research) ||
      sortedResearch.length > 0 ||
      (Array.isArray(mod.relatedArticles) && mod.relatedArticles.length > 0);
    const hasConcept =
      Boolean(parentTrack?.pipelineSpine?.concept) ||
      sortedConcepts.length > 0 ||
      (Array.isArray(parentTrack?.glossaryTerms) && parentTrack.glossaryTerms.length > 0);
    const hasFramework =
      Boolean(parentTrack?.pipelineSpine?.framework) ||
      (Array.isArray(mod.takeaways) && mod.takeaways.length >= 2);
    const hasDiagnostic =
      Boolean(parentTrack?.pipelineSpine?.diagnostic) ||
      Boolean(mod.embeddedTool) ||
      (Array.isArray(parentTrack?.tools) && parentTrack.tools.length > 0) ||
      (Array.isArray(mod.lessons) &&
        mod.lessons.some((l) => Array.isArray(l.details) && l.details.length > 0));
    const hasImplementation =
      Boolean(parentTrack?.pipelineSpine?.implementation) ||
      (Array.isArray(mod.lessons) &&
        mod.lessons.length > 0 &&
        mod.lessons.every((l) => typeof l.exercise === 'string' && l.exercise.trim().length >= 15));

    const missingSteps = [];
    if (!hasResearch) missingSteps.push('Research');
    if (!hasConcept) missingSteps.push('Concept');
    if (!hasFramework) missingSteps.push('Framework');
    if (!hasDiagnostic) missingSteps.push('Diagnostic');
    if (!hasImplementation) missingSteps.push('Implementation');

    const lessonCount = Array.isArray(mod.lessons) ? mod.lessons.length : 0;
    if (lessonCount === 0) {
      zeroLessonModules.push(slug);
    }

    if (missingSteps.length > 0 || lessonCount === 0) {
      incompleteMoatModules.push({
        slug,
        moduleId: mod.moduleId,
        trackName: mod.trackName,
        lessonCount,
        missingSteps,
      });
    }

    nextModuleFingerprints[slug] = {
      moduleId: mod.moduleId,
      trackName: mod.trackName,
      lessonCount,
      conceptDepCount: sortedConcepts.length,
      researchDepCount: sortedResearch.length,
      moduleHash,
      upstreamHash,
      assetEngineComplete: missingSteps.length === 0,
    };

    const prev = previousFingerprints?.modules?.[slug];
    if (!prev) {
      if (previousFingerprints) {
        addedModules.push(slug);
      }
    } else {
      if (prev.upstreamHash !== upstreamHash && prev.moduleHash === moduleHash) {
        staleUpstreamModules.push({
          slug,
          moduleId: mod.moduleId,
          trackName: mod.trackName,
          reason: 'Upstream research or canonical concept changed without module content refresh',
        });
      } else if (prev.moduleHash !== moduleHash) {
        updatedModules.push(slug);
      }
    }
  }

  fs.mkdirSync(SCRATCH_DIR, { recursive: true });

  const shouldWriteBaseline = !previousFingerprints || updateBaseline;
  if (shouldWriteBaseline) {
    const snapshotPayload = {
      generatedAt: new Date().toISOString(),
      totalLiveModules: liveCount,
      conceptCorpusCount: (CANONICAL_CONCEPTS || []).length,
      researchCorpusCount: (RESEARCH_CORPUS || []).length,
      modules: nextModuleFingerprints,
    };
    fs.writeFileSync(FINGERPRINT_PATH, JSON.stringify(snapshotPayload, null, 2) + '\n', 'utf8');
  }

  const report = {
    generatedAt: new Date().toISOString(),
    baselineInitializedOrUpdated: shouldWriteBaseline,
    summary: {
      totalRegisteredModules: moduleSlugs.length,
      liveModulesAudited: liveCount,
      waitlistModulesSkipped: waitlistModules.length,
      zeroLessonCount: zeroLessonModules.length,
      uiTracksCount: (tracks || []).length,
      canonicalConceptsIndexed: (CANONICAL_CONCEPTS || []).length,
      researchArticlesIndexed: (RESEARCH_CORPUS || []).length,
      assetEngineCompleteCount: liveCount - incompleteMoatModules.length,
      incompleteMoatCount: incompleteMoatModules.length,
      staleUpstreamCount: staleUpstreamModules.length,
      updatedModulesCount: updatedModules.length,
      addedModulesCount: addedModules.length,
    },
    staleUpstreamModules,
    zeroLessonModules,
    incompleteMoatModules,
    updatedModules,
    addedModules,
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2) + '\n', 'utf8');

  console.log(
    `[CURRICULUM HEALTH] Live Modules=${liveCount} | Tracks=${(tracks || []).length} | 5-Step Moat Complete=${report.summary.assetEngineCompleteCount}/${liveCount}`
  );
  console.log(
    `  Stale Upstream=${staleUpstreamModules.length} | Zero-Lesson=${zeroLessonModules.length} | Unspined Legacy=${incompleteMoatModules.length}`
  );
  console.log(`  Report written: ${path.relative(ROOT_DIR, REPORT_PATH)}`);

  if (isStrict && (staleUpstreamModules.length > 0 || zeroLessonModules.length > 0)) {
    console.error(
      `[CURRICULUM HEALTH FAILED] Stale upstream=${staleUpstreamModules.length}, zero-lesson=${zeroLessonModules.length}.`
    );
    process.exit(1);
  }

  if (isStrictMoat && incompleteMoatModules.length > 0) {
    console.error(
      `[CURRICULUM HEALTH FAILED] ${incompleteMoatModules.length} live module(s) missing 5-Step Asset Engine spine.`
    );
    process.exit(1);
  }
}

try {
  main();
  process.exit(0);
} catch (err) {
  console.error(`[CURRICULUM HEALTH FATAL] ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
