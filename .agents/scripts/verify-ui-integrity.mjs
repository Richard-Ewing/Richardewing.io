#!/usr/bin/env node
/**
 * Sovereign Graph-Aware AST Commercial & UI Integrity Gate (`verify-ui-integrity.mjs`)
 * Clean-room assimilation of `Nutlope/hallmark` (`--before` / `--kept` + Floor Gates 10a, 34, 70)
 * built natively on `ts-morph` - ADR-0020.
 *
 * Modes:
 *   1. `node .agents/scripts/verify-ui-integrity.mjs --before <file-or-dir>`
 *      Walks target `.tsx` entrypoints and locally imported child components, snapshotting
 *      hrefs, commercial conversion components, API fetch endpoints, form handlers, headings,
 *      phase state hooks, and `dangerouslySetInnerHTML` occurrences into `.scratch/ui-ledger/before.json`.
 *   2. `node .agents/scripts/verify-ui-integrity.mjs --kept <file-or-dir> [--dropped item1,item2]`
 *      Compares post-edit component graph against `.scratch/ui-ledger/before.json`.
 *      Refactoring JSX into a `"use client"` child passes cleanly; dropping any commercial
 *      link, conversion component, or API endpoint fails with exit code 1.
 *   3. `node .agents/scripts/verify-ui-integrity.mjs [--floor]`
 *      Runs Concept-B-safe floor gates on git-modified `.tsx` and `.css` files (wired into `verify-qa.mjs`):
 *        - Fake-Send Blocker (Gate 70): `<form>` setting success state without `fetch(`, `action=`, or `useForm`.
 *        - Horizontal Scroll Bleed (Gate 34): `w-[100vw]` or `width: 100vw` scrollbar overflow trap.
 *        - Layout Thrash Warning/Block (Gate 10a): `transition-all` / `transition: all` on layout containers.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { Project, SyntaxKind } from 'ts-morph';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const LEDGER_DIR = path.join(ROOT_DIR, '.scratch', 'ui-ledger');
const LEDGER_FILE = path.join(LEDGER_DIR, 'before.json');

const COMMERCIAL_COMPONENTS = new Set([
  'ScorecardCheckoutDrawer',
  'PayGate',
  'AdvisoryCTA',
  'StructuredData',
  'NewsletterForm',
  'AdvisorRoadmap',
  'ExogramBlueprintCapture',
  'ScheduleDiagnosticBanner',
]);

function normalizeRel(filePath) {
  return path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
}

function resolveLocalModule(fromFile, spec) {
  let candidateBase = null;
  if (spec.startsWith('@/')) {
    candidateBase = path.join(ROOT_DIR, spec.slice(2));
  } else if (spec.startsWith('./') || spec.startsWith('../')) {
    candidateBase = path.resolve(path.dirname(fromFile), spec);
  } else {
    return null;
  }

  const extensions = ['', '.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts'];
  for (const ext of extensions) {
    const full = candidateBase + ext;
    if (fs.existsSync(full) && fs.statSync(full).isFile()) {
      return full;
    }
  }
  return null;
}

function collectEntryFiles(targetArg) {
  const fullTarget = path.resolve(ROOT_DIR, targetArg);
  if (!fs.existsSync(fullTarget)) {
    console.error(`[UI INTEGRITY ERROR] Target path does not exist: ${targetArg}`);
    process.exit(1);
  }
  const stat = fs.statSync(fullTarget);
  if (stat.isFile()) return [fullTarget];

  const files = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!['node_modules', '.next', '.git'].includes(entry.name)) walk(full);
      } else if (/\.(tsx|ts)$/i.test(entry.name)) {
        files.push(full);
      }
    }
  }
  walk(fullTarget);
  return files;
}

function extractComponentGraphSnapshot(targetArg) {
  const entryFiles = collectEntryFiles(targetArg);
  const project = new Project({
    skipAddingFilesFromTsConfig: true,
    compilerOptions: { allowJs: true, jsx: 4 },
  });

  const visited = new Set();
  const queue = [...entryFiles];

  while (queue.length > 0) {
    const current = queue.shift();
    const norm = path.normalize(current);
    if (visited.has(norm)) continue;
    visited.add(norm);

    const sf = project.addSourceFileAtPathIfExists(norm);
    if (!sf) continue;

    for (const imp of sf.getImportDeclarations()) {
      const spec = imp.getModuleSpecifierValue();
      const resolved = resolveLocalModule(norm, spec);
      if (resolved && !visited.has(path.normalize(resolved))) {
        // Follow component & UI helper imports within app/ and components/
        const rel = normalizeRel(resolved);
        if (rel.startsWith('components/') || rel.startsWith('app/')) {
          queue.push(resolved);
        }
      }
    }
  }

  const hrefs = new Set();
  const commercialMounts = new Set();
  const apiEndpoints = new Set();
  const formHandlers = new Set();
  const interactiveHooks = new Set();
  let h1Count = 0;
  let h2Count = 0;
  let dangerousInnerHtmlCount = 0;
  let phaseStepCount = 0;

  for (const fileFull of visited) {
    const sf = project.getSourceFile(fileFull);
    if (!sf) continue;
    const rawText = sf.getFullText();

    // Count PHASES entries if defined in component graph
    const phasesDecl = sf.getVariableDeclaration('PHASES');
    if (phasesDecl) {
      const arr = phasesDecl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
      if (arr) {
        phaseStepCount += arr.getElements().length;
      }
    }

    // Walk JSX opening and self-closing elements
    const jsxNodes = [
      ...sf.getDescendantsOfKind(SyntaxKind.JsxOpeningElement),
      ...sf.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement),
    ];

    for (const jsx of jsxNodes) {
      const tagName = jsx.getTagNameNode().getText();

      if (tagName === 'h1') h1Count++;
      if (tagName === 'h2') h2Count++;
      if (COMMERCIAL_COMPONENTS.has(tagName)) {
        commercialMounts.add(tagName);
      }

      for (const attr of jsx.getAttributes()) {
        if (attr.getKind() !== SyntaxKind.JsxAttribute) continue;
        const name = attr.getNameNode().getText();

        if (name === 'dangerouslySetInnerHTML') {
          dangerousInnerHtmlCount++;
        }

        if (name === 'href') {
          const init = attr.getInitializer();
          if (init) {
            if (init.getKind() === SyntaxKind.StringLiteral) {
              hrefs.add(init.getLiteralValue());
            } else if (init.getKind() === SyntaxKind.JsxExpression) {
              const expr = init.getExpression();
              if (expr) {
                if (expr.getKind() === SyntaxKind.StringLiteral || expr.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) {
                  hrefs.add(expr.getLiteralText());
                } else if (expr.getKind() === SyntaxKind.TemplateExpression) {
                  const head = expr.getHead().getLiteralText();
                  if (head.startsWith('/') || head.startsWith('http')) {
                    hrefs.add(`${head}*`);
                  }
                }
              }
            }
          }
        }

        if (tagName === 'form' && (name === 'onSubmit' || name === 'action')) {
          formHandlers.add(`form[${name}]`);
        }

        if (name === 'onClick' || name === 'onSubmit' || name === 'onKeyDown') {
          interactiveHooks.add(`${tagName}[${name}]`);
        }
      }
    }

    // Extract fetch('/api/...') calls via AST CallExpressions
    for (const call of sf.getDescendantsOfKind(SyntaxKind.CallExpression)) {
      const callee = call.getExpression().getText();
      if (callee === 'fetch') {
        const firstArg = call.getArguments()[0];
        if (firstArg) {
          if (firstArg.getKind() === SyntaxKind.StringLiteral || firstArg.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) {
            const urlVal = firstArg.getLiteralText();
            if (urlVal.startsWith('/api/')) apiEndpoints.add(urlVal);
          } else if (firstArg.getKind() === SyntaxKind.TemplateExpression) {
            const head = firstArg.getHead().getLiteralText();
            if (head.startsWith('/api/')) apiEndpoints.add(`${head}*`);
          }
        }
      }
    }

    // Also catch string references to /schedule?source=... in config objects
    for (const m of rawText.matchAll(/['"`](\/schedule(?:\?source=[a-zA-Z0-9_-]+)?)['"`]/g)) {
      hrefs.add(m[1]);
    }
  }

  return {
    target: normalizeRel(path.resolve(ROOT_DIR, targetArg)),
    capturedAt: new Date().toISOString(),
    graphFiles: [...visited].map(normalizeRel).sort(),
    hrefs: [...hrefs].sort(),
    commercialMounts: [...commercialMounts].sort(),
    apiEndpoints: [...apiEndpoints].sort(),
    formHandlers: [...formHandlers].sort(),
    interactiveHooks: [...interactiveHooks].sort(),
    h1Count,
    h2Count,
    phaseStepCount,
    dangerousInnerHtmlCount,
  };
}

function getGitModifiedUiFiles() {
  const results = [];
  try {
    const out = execSync('git status --porcelain', { cwd: ROOT_DIR, encoding: 'utf8' });
    for (const rawLine of out.split('\n').filter(Boolean)) {
      let rel = rawLine.trim();
      if (rel.includes('->')) {
        rel = rel.split('->')[1].trim();
      } else {
        rel = rel.split(/\s+/).slice(1).join(' ');
      }
      if (/\.(tsx|jsx|css)$/i.test(rel) && (rel.startsWith('app/') || rel.startsWith('components/'))) {
        const full = path.join(ROOT_DIR, rel);
        if (fs.existsSync(full) && fs.statSync(full).isFile()) {
          results.push({ relPath: rel.replace(/\\/g, '/'), fullPath: full });
        }
      }
    }
  } catch {
    // Ignore git invocation error outside repo
  }
  return results;
}

function runFloorGates(targetFiles) {
  let errors = 0;
  let warnings = 0;

  for (const file of targetFiles) {
    const content = fs.readFileSync(file.fullPath, 'utf8');

    // Floor Gate 70: Fake-Send Form Blocker
    if (/\.(tsx|jsx)$/i.test(file.relPath) && /<form[\s>]/.test(content)) {
      const setsSuccessState = /\bset(?:Submitted|Sent|Success|Subscribed)\s*\(\s*true\s*\)/.test(content);
      const hasRealTransport =
        /\bfetch\s*\(/.test(content) ||
        /\buseForm\s*\(/.test(content) ||
        /<form[^>]+action=/.test(content) ||
        /\bonSubmitAction\b/.test(content);

      if (setsSuccessState && !hasRealTransport) {
        console.error(
          `[UI FLOOR ERROR - GATE 70] Fake form send detected in ${file.relPath}: sets success state without fetch(), action=, or useForm().`
        );
        errors++;
      }
    }

    // Floor Gate 34: 100vw Horizontal Scroll Bleed Trap
    if (/\bw-\[100vw\]\b/.test(content) || /width\s*:\s*100vw\b/.test(content)) {
      if (!/overflow-x-hidden/.test(content) && !/overflow-x:\s*hidden/.test(content)) {
        console.error(
          `[UI FLOOR ERROR - GATE 34] Horizontal scrollbar trap ('100vw' without overflow-x-hidden) in ${file.relPath}. Use 'w-full' instead.`
        );
        errors++;
      }
    }

    // Floor Gate 10a: Layout Thrashing transition-all / transition: all
    if (/\.css$/i.test(file.relPath) && /transition\s*:\s*all\b/.test(content)) {
      console.error(
        `[UI FLOOR ERROR - GATE 10a] 'transition: all' layout thrash detected in ${file.relPath}. Specify exact CSS properties (transform, opacity, color).`
      );
      errors++;
    } else if (/\.(tsx|jsx)$/i.test(file.relPath) && /\btransition-all\b/.test(content)) {
      console.warn(
        `[UI FLOOR WARNING - GATE 10a] 'transition-all' found in modified component ${file.relPath}. Prefer 'transition-colors', 'transition-opacity', or 'transition-transform'.`
      );
      warnings++;
    }
  }

  return { errors, warnings, checkedCount: targetFiles.length };
}

// CLI Dispatch
const args = process.argv.slice(2);
const beforeIdx = args.indexOf('--before');
const keptIdx = args.indexOf('--kept');
const droppedIdx = args.indexOf('--dropped');
const allowedDrops = new Set(
  droppedIdx !== -1 && args[droppedIdx + 1]
    ? args[droppedIdx + 1].split(',').map((s) => s.trim()).filter(Boolean)
    : []
);

if (beforeIdx !== -1) {
  const target = args[beforeIdx + 1];
  if (!target) {
    console.error('Usage: node .agents/scripts/verify-ui-integrity.mjs --before <file-or-dir>');
    process.exit(1);
  }
  if (!fs.existsSync(LEDGER_DIR)) {
    fs.mkdirSync(LEDGER_DIR, { recursive: true });
  }
  let store = { snapshots: {} };
  if (fs.existsSync(LEDGER_FILE)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(LEDGER_FILE, 'utf8'));
      if (parsed && typeof parsed.snapshots === 'object') store = parsed;
    } catch {
      store = { snapshots: {} };
    }
  }
  const snap = extractComponentGraphSnapshot(target);
  store.latestTarget = snap.target;
  store.snapshots[snap.target] = snap;
  fs.writeFileSync(LEDGER_FILE, JSON.stringify(store, null, 2), 'utf8');
  console.log(
    `[UI LEDGER --before] Snapshotted ${snap.target} (${snap.graphFiles.length} graph file(s), ${snap.hrefs.length} href(s), ${snap.commercialMounts.length} conversion mount(s), ${snap.apiEndpoints.length} API endpoint(s), dangerouslySetInnerHTML=${snap.dangerousInnerHtmlCount}).`
  );
  process.exit(0);
}

if (keptIdx !== -1) {
  const target = args[keptIdx + 1];
  if (!target) {
    console.error('Usage: node .agents/scripts/verify-ui-integrity.mjs --kept <file-or-dir>');
    process.exit(1);
  }
  if (!fs.existsSync(LEDGER_FILE)) {
    console.error(`[UI LEDGER ERROR] Missing baseline ${LEDGER_FILE}. Run --before ${target} first.`);
    process.exit(1);
  }
  const store = JSON.parse(fs.readFileSync(LEDGER_FILE, 'utf8'));
  const normTarget = normalizeRel(path.resolve(ROOT_DIR, target));
  const beforeSnap = store.snapshots?.[normTarget] || (store.target === normTarget ? store : null);
  if (!beforeSnap) {
    console.error(`[UI LEDGER ERROR] No --before snapshot recorded for '${normTarget}'.`);
    process.exit(1);
  }

  const afterSnap = extractComponentGraphSnapshot(target);
  const regressions = [];

  for (const href of beforeSnap.hrefs) {
    if (!afterSnap.hrefs.includes(href) && !allowedDrops.has(href)) {
      regressions.push(`Dropped link href: '${href}'`);
    }
  }
  for (const mount of beforeSnap.commercialMounts) {
    if (!afterSnap.commercialMounts.includes(mount) && !allowedDrops.has(mount)) {
      regressions.push(`Dropped commercial component mount: '<${mount} />'`);
    }
  }
  for (const api of beforeSnap.apiEndpoints) {
    if (!afterSnap.apiEndpoints.includes(api) && !allowedDrops.has(api)) {
      regressions.push(`Dropped API fetch endpoint: '${api}'`);
    }
  }
  for (const fh of beforeSnap.formHandlers) {
    if (!afterSnap.formHandlers.includes(fh) && !allowedDrops.has(fh)) {
      regressions.push(`Dropped form submission handler: '${fh}'`);
    }
  }
  for (const hook of beforeSnap.interactiveHooks) {
    if (!afterSnap.interactiveHooks.includes(hook) && !allowedDrops.has(hook)) {
      regressions.push(`Dropped interactive handler: '${hook}'`);
    }
  }
  if (beforeSnap.phaseStepCount > 0 && afterSnap.phaseStepCount < beforeSnap.phaseStepCount) {
    regressions.push(`Reduced PHASES count from ${beforeSnap.phaseStepCount} to ${afterSnap.phaseStepCount}`);
  }
  if (beforeSnap.h1Count > 0 && afterSnap.h1Count === 0 && !allowedDrops.has('h1')) {
    regressions.push(`Dropped <h1> heading (${beforeSnap.h1Count} -> 0)`);
  }

  // Also run floor gates on all files in afterSnap graph
  const graphFileObjs = afterSnap.graphFiles.map((rel) => ({
    relPath: rel,
    fullPath: path.join(ROOT_DIR, rel),
  }));
  const floor = runFloorGates(graphFileObjs);

  console.log(
    `[UI LEDGER --kept] Verified ${normTarget} (${afterSnap.graphFiles.length} graph file(s)):`
  );
  console.log(
    `  Links: ${beforeSnap.hrefs.length} -> ${afterSnap.hrefs.length} | Conversion Mounts: ${beforeSnap.commercialMounts.length} -> ${afterSnap.commercialMounts.length} | API Endpoints: ${beforeSnap.apiEndpoints.length} -> ${afterSnap.apiEndpoints.length}`
  );
  console.log(
    `  PHASES: ${beforeSnap.phaseStepCount} -> ${afterSnap.phaseStepCount} | dangerouslySetInnerHTML: ${beforeSnap.dangerousInnerHtmlCount} -> ${afterSnap.dangerousInnerHtmlCount}`
  );

  if (regressions.length > 0 || floor.errors > 0) {
    for (const r of regressions) {
      console.error(`  [REGRESSION] ${r}`);
    }
    process.exit(1);
  }
  console.log('  [PASS] 100% of commercial links, mounts, phases, and handlers preserved.');
  process.exit(0);
}

// Default Mode C: Run Concept-B-safe Floor Gates on git-modified UI files
const modifiedUiFiles = getGitModifiedUiFiles();
const floorResult = runFloorGates(modifiedUiFiles);
console.log(
  `[UI INTEGRITY FLOOR GATE] Checked ${floorResult.checkedCount} modified UI file(s) (Errors=${floorResult.errors}, Warnings=${floorResult.warnings}).`
);
if (floorResult.errors > 0) {
  process.exit(1);
}
process.exit(0);
