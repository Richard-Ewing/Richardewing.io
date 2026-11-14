#!/usr/bin/env node
/**
 * Sovereign Mechanical ADR-to-Code Drift Detector (`check-adr-drift.mjs`)
 * Clean-room assimilation of `google/elephant-goldfish-model` (`egm-drift-report`) - ADR-0020.
 *
 * Audits `Accepted` ADRs in `docs/adr/ADR-*.md` against live workspace files,
 * `ts-morph` exported TypeScript symbols, Worker edge shield invariants, and
 * fail-closed security contracts. Outputs a delta-only report to `.scratch/adr-drift-report.md`.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Project } from 'ts-morph';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const ADR_DIR = path.join(ROOT_DIR, 'docs', 'adr');
const SCRATCH_DIR = path.join(ROOT_DIR, '.scratch');
const REPORT_PATH = path.join(SCRATCH_DIR, 'adr-drift-report.md');

const isStrict = process.argv.includes('--strict');

if (!fs.existsSync(SCRATCH_DIR)) {
  fs.mkdirSync(SCRATCH_DIR, { recursive: true });
}

// Known historical renames, intentionally deleted legacy redirect shells, or illustrative example paths in earlier ADRs
const HISTORICAL_PATH_REMAPS = new Map([
  ['docs/adr/ADR-0005-centralized-dependencies.md', 'Illustrative Chris Nevin example in ADR-0005'],
  ['app/frameworks/page.tsx', 'Legacy redirect shell intentionally removed per ADR-0011'],
  ['app/frameworks/', 'Legacy redirect directory intentionally removed per ADR-0011'],
  ['app/principal/page.tsx', 'Legacy redirect shell intentionally removed per ADR-0011'],
  ['app/principal/', 'Legacy redirect directory intentionally removed per ADR-0011'],
  ['public/canonical/', 'Legacy static canonical directory superseded by dynamic canonicals per ADR-0011'],
  ['public/llms.txt', 'Moved from static public file to dynamic route handler app/llms.txt/route.ts per ADR-0011/0017'],
  ['public/llms-full.txt', 'Moved from static public file to dynamic route handler app/llms-full.txt/route.ts per ADR-0011/0017'],
  ['docs/[slug]', 'Shorthand for app/exogram/docs/[slug] in ADR-0015'],
  ['components/SiteNav.tsx', 'Optional sibling marketing shell reference in ADR-0019'],
  ['components/SiteFooter.tsx', 'Optional sibling marketing shell reference in ADR-0019'],
  ['.agents/rules/always_on_mod_execution.md', 'Consolidated into .agents/AGENTS.md per ADR-0025 to eliminate duplicate 36.7KB rule budget truncation'],
]);

const PATH_TOKEN_RE = /`((?:app|lib|components|scripts|\.agents|docs|public)\/[a-zA-Z0-9_./[\]*<>-]+|middleware\.ts|wrangler\.jsonc|next\.config\.ts|open-next\.config\.ts|package\.json)`/g;

function extractStatus(markdown) {
  const match = markdown.match(/##\s+Status\s*\r?\n\s*([^\r\n]+)/i);
  return match ? match[1].trim() : 'Unknown';
}

function extractTitle(markdown, fallback) {
  const match = markdown.match(/^#\s+([^\r\n]+)/m);
  return match ? match[1].trim() : fallback;
}

function resolveWildcardParent(relRef) {
  const parts = relRef.split('/');
  const cleanParts = [];
  for (const part of parts) {
    if (part.includes('*') || part.includes('<') || part.includes('>') || part === '...') {
      break;
    }
    cleanParts.push(part);
  }
  return cleanParts.join('/');
}

console.log('=== Running Sovereign ADR-to-Code Drift Detector (ADR-0020) ===');

const adrFiles = fs.existsSync(ADR_DIR)
  ? fs
      .readdirSync(ADR_DIR)
      .filter((f) => /^ADR-\d{4}-.*\.md$/i.test(f))
      .sort()
  : [];

const missingFeatures = [];
const incompleteModels = [];
const logicShortcuts = [];
const architecturalDivergences = [];
const historicalNotes = [];
const referencedExistingTsFiles = new Set();

let acceptedCount = 0;
let supersededOrOtherCount = 0;

for (const fileName of adrFiles) {
  const fullPath = path.join(ADR_DIR, fileName);
  const content = fs.readFileSync(fullPath, 'utf8');
  const status = extractStatus(content);
  const title = extractTitle(content, fileName);
  const adrId = fileName.slice(0, 8);

  if (!/^Accepted\b/i.test(status)) {
    supersededOrOtherCount++;
    continue;
  }
  acceptedCount++;

  const seenRefs = new Set();
  for (const match of content.matchAll(PATH_TOKEN_RE)) {
    const rawRef = match[1].trim().replace(/[,:;)]+$/, '');
    if (seenRefs.has(rawRef)) continue;
    seenRefs.add(rawRef);

    // Handle wildcard / template pattern references by checking parent directory
    if (rawRef.includes('*') || rawRef.includes('<') || rawRef.includes('>')) {
      const parentRel = resolveWildcardParent(rawRef);
      if (parentRel) {
        const parentFull = path.join(ROOT_DIR, parentRel);
        if (!fs.existsSync(parentFull)) {
          missingFeatures.push({
            adr: adrId,
            title,
            target: rawRef,
            detail: `Parent directory '${parentRel}' for wildcard contract does not exist.`,
          });
        }
      }
      continue;
    }

    const targetFull = path.join(ROOT_DIR, rawRef);
    if (!fs.existsSync(targetFull)) {
      if (HISTORICAL_PATH_REMAPS.has(rawRef)) {
        historicalNotes.push({
          adr: adrId,
          target: rawRef,
          note: HISTORICAL_PATH_REMAPS.get(rawRef),
        });
      } else {
        missingFeatures.push({
          adr: adrId,
          title,
          target: rawRef,
          detail: 'Referenced repository file or directory is missing from live tree.',
        });
      }
    } else {
      const stat = fs.statSync(targetFull);
      if (stat.isFile() && /\.(ts|tsx)$/i.test(rawRef)) {
        referencedExistingTsFiles.add(rawRef);
      }
    }
  }
}

// Critical Invariant 1: ADR-0019 Pre-OpenNext Worker Edge Shield
const patchWorkerPath = path.join(ROOT_DIR, 'scripts', 'patch-worker.mjs');
if (!fs.existsSync(patchWorkerPath)) {
  architecturalDivergences.push({
    adr: 'ADR-0019',
    target: 'scripts/patch-worker.mjs',
    detail: 'Missing pre-OpenNext edge shield patcher script.',
  });
} else {
  const pwContent = fs.readFileSync(patchWorkerPath, 'utf8');
  if (!pwContent.includes('__RW_ADR_0019_EDGE_SHIELD__')) {
    architecturalDivergences.push({
      adr: 'ADR-0019',
      target: 'scripts/patch-worker.mjs',
      detail: 'Missing `__RW_ADR_0019_EDGE_SHIELD__` sentinel marker in Worker patcher.',
    });
  }
}

// Critical Invariant 2: AST & Export Contract Verification via ts-morph
const tsProject = new Project({
  skipAddingFilesFromTsConfig: true,
  compilerOptions: { allowJs: true, jsx: 4 },
});

const contractExpectations = [
  {
    adr: 'ADR-0020',
    relPath: 'lib/sovereign-ui-stream.ts',
    requiredExports: [
      'defineWidgetCatalog',
      'compileCatalogPrompt',
      'createIncrementalUiParser',
      'hydrateLegacyRoadmapJson',
    ],
  },
  {
    adr: 'ADR-0020',
    relPath: 'lib/exogram.ts',
    requiredExports: [
      'vaultStore',
      'vaultSearch',
      'vaultSearchStrict',
      'evaluateAction',
      'storeBusinessFact',
      'searchBusinessContext',
    ],
  },
  {
    adr: 'ADR-0020',
    relPath: 'app/api/ai-advisor/chat/route.ts',
    requiredExports: ['POST'],
  },
  {
    adr: 'ADR-0021',
    relPath: 'lib/pay-to-reveal/sealed-envelope.ts',
    requiredExports: [
      'PAY_TO_REVEAL_CATALOG',
      'sealServerPayload',
      'openServerPayload',
      'signRescanToken',
      'verifyRescanToken',
      'signBadgeToken',
      'verifyBadgeToken',
    ],
  },
  {
    adr: 'ADR-0021',
    relPath: 'lib/pay-to-reveal/xlsx-compiler.ts',
    requiredExports: ['compileXlsxWorkbook', 'uint8ArrayToBase64'],
  },
  {
    adr: 'ADR-0021',
    relPath: 'lib/pay-to-reveal/vibe-security-engine.ts',
    requiredExports: [
      'validateSafePublicHttpsUrl',
      'runVibeSecurityScan',
      'buildPublicVibeScanResponse',
    ],
  },
  {
    adr: 'ADR-0021',
    relPath: 'lib/pay-to-reveal/department-playbook-engine.ts',
    requiredExports: [
      'compileDepartmentPlaybook',
      'buildPublicPlaybookResponse',
      'buildDepartmentXlsxSheets',
    ],
  },
  {
    adr: 'ADR-0021',
    relPath: 'app/api/tools/open-run/route.ts',
    requiredExports: ['POST'],
  },
];

for (const contract of contractExpectations) {
  const full = path.join(ROOT_DIR, contract.relPath);
  if (!fs.existsSync(full)) {
    // Already caught in missingFeatures if ADR-0020 is Accepted; skip duplicate AST parse
    continue;
  }
  const sourceFile = tsProject.addSourceFileAtPath(full);
  const exportedDeclarations = sourceFile.getExportedDeclarations();
  for (const sym of contract.requiredExports) {
    if (!exportedDeclarations.has(sym)) {
      incompleteModels.push({
        adr: contract.adr,
        target: contract.relPath,
        detail: `Missing required exported symbol \`${sym}\`.`,
      });
    }
  }
}

// Critical Invariant 3: Logic Shortcuts & Fail-Closed Auth Checks across ADR-referenced TS files
const shortcutPattern = /\b(?:TODO|FIXME|HACK|MOCK_FALLBACK)\b/;
for (const relPath of referencedExistingTsFiles) {
  const full = path.join(ROOT_DIR, relPath);
  const content = fs.readFileSync(full, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (shortcutPattern.test(line) && (line.includes('//') || line.includes('/*'))) {
      logicShortcuts.push({
        adr: 'ACTIVE-TREE',
        target: `${relPath}:${idx + 1}`,
        detail: line.trim().slice(0, 140),
      });
    }
  });

  const codeWithoutComments = content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');

  if (relPath === 'lib/exogram.ts') {
    if (/return\s+\{\}\s+as\s+T/.test(codeWithoutComments)) {
      architecturalDivergences.push({
        adr: 'ADR-0020',
        target: 'lib/exogram.ts',
        detail: 'Silent fail-open `return {} as T` still present in `exogramFetch`; must fail closed on `evaluateAction()`.',
      });
    }
  }

  if (relPath === 'components/AdvisorChat.tsx') {
    if (/\bdangerouslySetInnerHTML\s*=/.test(codeWithoutComments)) {
      architecturalDivergences.push({
        adr: 'ADR-0020',
        target: 'components/AdvisorChat.tsx',
        detail: 'Unescaped `dangerouslySetInnerHTML` still present in `AdvisorChat.tsx`.',
      });
    }
  }
}

// Critical Invariant 4: Fail-open Bearer check across app/api/
function walkApiRoutes(dir) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkApiRoutes(full));
    else if (/\.(ts|tsx|js)$/i.test(entry.name)) results.push(full);
  }
  return results;
}

for (const apiFile of walkApiRoutes(path.join(ROOT_DIR, 'app', 'api'))) {
  const rel = path.relative(ROOT_DIR, apiFile).replace(/\\/g, '/');
  const content = fs.readFileSync(apiFile, 'utf8');
  if (/if\s*\(\s*secret\s*&&\s*authHeader\s*!==/.test(content)) {
    architecturalDivergences.push({
      adr: 'ADR-0018',
      target: rel,
      detail: 'Fail-open webhook secret check (`if (secret && authHeader !== ...)`).',
    });
  }
}

const totalActiveDrift =
  missingFeatures.length +
  incompleteModels.length +
  logicShortcuts.length +
  architecturalDivergences.length;

const reportLines = [
  '# ADR-to-Code Mechanical Drift Report (Delta-Only)',
  '',
  `- **Generated At**: ${new Date().toISOString()}`,
  `- **Accepted ADRs Audited**: ${acceptedCount} (Skipped non-Accepted: ${supersededOrOtherCount})`,
  `- **ADR-Referenced TS/TSX Modules Checked**: ${referencedExistingTsFiles.size}`,
  `- **Active Drift Count**: ${totalActiveDrift}`,
  '',
];

if (totalActiveDrift === 0) {
  reportLines.push('## Status: ZERO ACTIVE DRIFT', '');
  reportLines.push('All Accepted ADR file references, Worker edge shield markers, fail-closed guards, and exported TypeScript contracts match the live repository.');
} else {
  if (missingFeatures.length > 0) {
    reportLines.push('## 1. Missing Features / Missing Referenced Paths', '');
    for (const item of missingFeatures) {
      reportLines.push(`- **[${item.adr}] \`${item.target}\`**: ${item.detail}`);
    }
    reportLines.push('');
  }
  if (incompleteModels.length > 0) {
    reportLines.push('## 2. Incomplete Models / Missing Exports', '');
    for (const item of incompleteModels) {
      reportLines.push(`- **[${item.adr}] \`${item.target}\`**: ${item.detail}`);
    }
    reportLines.push('');
  }
  if (logicShortcuts.length > 0) {
    reportLines.push('## 3. Logic Shortcuts (`TODO` / `FIXME` / `MOCK`)', '');
    for (const item of logicShortcuts) {
      reportLines.push(`- **[${item.adr}] \`${item.target}\`**: \`${item.detail}\``);
    }
    reportLines.push('');
  }
  if (architecturalDivergences.length > 0) {
    reportLines.push('## 4. Architectural Divergences', '');
    for (const item of architecturalDivergences) {
      reportLines.push(`- **[${item.adr}] \`${item.target}\`**: ${item.detail}`);
    }
    reportLines.push('');
  }
}

if (historicalNotes.length > 0) {
  reportLines.push('', '## Historical Illustrative / Cross-Repo Notes (Non-Blocking)', '');
  for (const h of historicalNotes) {
    reportLines.push(`- **[${h.adr}] \`${h.target}\`**: ${h.note}`);
  }
}

fs.writeFileSync(REPORT_PATH, reportLines.join('\n') + '\n', 'utf8');

console.log(
  `Accepted ADRs: ${acceptedCount} | TS Modules: ${referencedExistingTsFiles.size} | Active Drift: ${totalActiveDrift}`
);
if (totalActiveDrift > 0) {
  for (const item of [
    ...missingFeatures,
    ...incompleteModels,
    ...logicShortcuts,
    ...architecturalDivergences,
  ]) {
    console.log(`  [DRIFT] [${item.adr}] ${item.target} -> ${item.detail}`);
  }
}
console.log(`Report written to .scratch/adr-drift-report.md`);

if (isStrict && totalActiveDrift > 0) {
  process.exit(1);
}
process.exit(0);
