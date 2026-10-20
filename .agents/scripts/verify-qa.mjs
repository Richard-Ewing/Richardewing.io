import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

console.log('=== Running MOD v4.0 QA Verification Script ===');

let errorCount = 0;
let warningCount = 0;

// 1. Check Root Directory Hygiene
const rootFiles = fs.readdirSync(rootDir);
const forbiddenRootPatterns = [/^tmp_.*$/i, /^debug.*\.txt$/i, /^temp_.*$/i, /^\.scratch_tmp.*$/i];

rootFiles.forEach(file => {
  if (forbiddenRootPatterns.some(pattern => pattern.test(file))) {
    console.error(`[HYGIENE ERROR] Forbidden temporary file found in workspace root: ${file}`);
    errorCount++;
  }
});

// 2. Audit .agents System Files & Git Modified Files for Em-Dashes
let filesToAudit = [];

// A. Always audit .agents directory
function getAgentFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === '.agents') return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getAgentFiles(filePath));
    } else if (/\.(md|json|mjs|ts)$/i.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}
filesToAudit = filesToAudit.concat(getAgentFiles(path.join(rootDir, '.agents')));

// B. Audit git modified / staged files if inside a git repository
try {
  const gitOutput = execSync('git status --porcelain', { cwd: rootDir, encoding: 'utf8' });
  const modifiedLines = gitOutput.split('\n').filter(Boolean);
  modifiedLines.forEach(line => {
    let file = line.trim();
    if (file.includes('->')) {
      file = file.split('->')[1].trim();
    } else {
      file = file.split(/\s+/).slice(1).join(' ');
    }
    const isBinary = /\.(png|jpe?g|gif|webp|ico|woff2?|ttf|eot|mp3|mp4|webm|pdf|zip|tar|gz)$/i.test(file);
    const isLockfile = file.endsWith('package-lock.json') || file.endsWith('yarn.lock') || file.endsWith('pnpm-lock.yaml');
    if (file && !isBinary && !isLockfile) {
      const fullPath = path.join(rootDir, file);
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile() && !filesToAudit.includes(fullPath)) {
        filesToAudit.push(fullPath);
      }
    }
  });
} catch (e) {
  // Fallback if git command fails
}

// 3. Perform Em-Dash, Stat & Accessibility Verification
filesToAudit.forEach(filePath => {
  const relativePath = path.relative(rootDir, filePath);
  if (relativePath.includes('verify-qa.mjs') || relativePath.includes('audit-agent-skills.mjs')) return;

  const content = fs.readFileSync(filePath, 'utf8');

  // Rule A: Zero Em-Dashes
  if (/\.(md|mdx|tsx|ts|jsx|js|html|txt)$/i.test(relativePath)) {
    const emDashMatch = content.match(/—/g);
    if (emDashMatch) {
      console.error(`[STYLE ERROR] Found ${emDashMatch.length} illegal em-dash(es) in ${relativePath}`);
      errorCount++;
    }
  }

  // Rule B: Unsourced Stats Fallback Check
  if (content.includes('[HUMAN_INPUT:SOURCE]') && !relativePath.endsWith('SKILL.md')) {
    console.warn(`[STAT WARNING] Found unverified stat fallback in ${relativePath}`);
    warningCount++;
  }

  // Rule C: Basic Image Alt Check for Modified TSX/JSX
  if (/\.(tsx|jsx)$/i.test(relativePath)) {
    const rawImgMatches = content.match(/<img\s+[^>]+>/g) || [];
    rawImgMatches.forEach(tag => {
      if (!tag.includes('alt=') || /alt=["']\s*["']/.test(tag)) {
        console.warn(`[A11Y WARNING] Image tag missing non-empty alt prop in ${relativePath}`);
        warningCount++;
      }
    });
  }

  // Rule D: Zero Secret Key & Private Credential Leakage
  const secretPatterns = [
    { regex: /(?:^|[^a-zA-Z0-9_-])sk-[a-zA-Z0-9_-]{20,}/i, name: 'OpenAI / Model Secret API Key' },
    { regex: /(?:^|[^a-zA-Z0-9_-])sk-ant-[a-zA-Z0-9_-]{20,}/i, name: 'Anthropic Secret API Key' },
    { regex: /(?:^|[^a-zA-Z0-9_-])AIza[0-9A-Za-z-_]{35}/i, name: 'Google Cloud API Key' },
    { regex: /(?:^|[^a-zA-Z0-9_-])(?:ghp|gho|ghu|ghs|ghr)_[a-zA-Z0-9]{36,}/i, name: 'GitHub Personal Access Token' },
    { regex: /(?:^|[^a-zA-Z0-9_-])AKIA[0-9A-Z]{16}/i, name: 'AWS Access Key ID' },
    { regex: /(?:^|[^a-zA-Z0-9_-])pcsk_[a-zA-Z0-9_-]{20,}/i, name: 'Pinecone Secret Key' },
    { regex: /(?:^|[^a-zA-Z0-9_-])sbp_[a-zA-Z0-9]{20,}/i, name: 'Supabase Secret Token' },
    { regex: /-----BEGIN (?:RSA |EC |OPENSSH |DSA |PGP )?PRIVATE KEY-----/, name: 'Private Cryptographic Key' },
    { regex: /(?:postgres|postgresql|mysql|mongodb(?:\+srv)?):\/\/[a-zA-Z0-9_.-]+:[^@\s/]+@[a-zA-Z0-9_.-]+/i, name: 'Database URL with Embedded Password' }
  ];

  for (const { regex, name } of secretPatterns) {
    if (regex.test(content)) {
      console.error(`[SECURITY ERROR] Potential ${name} detected in ${relativePath}! Publishing secrets is strictly prohibited.`);
      errorCount++;
    }
  }

  // Rule E: Banned AI Marketing Buzzwords & Synthetic Jargon (HWS v2.0)
  if (/\.(tsx|jsx|ts)$/i.test(relativePath) && (relativePath.startsWith('app') || relativePath.startsWith('components'))) {
    const bannedWordPatterns = [
      { name: 'unlock', regex: /\bunlock(s|ed|ing)?\b/i },
      { name: 'delve', regex: /\bdelve(s|d|ing)?\b/i },
      { name: 'seamless', regex: /\bseamless(ly)?\b/i },
      { name: 'production-ready', regex: /\bproduction-ready\b/i },
      { name: 'missing layer', regex: /\bmissing layer\b/i },
      { name: 'missing piece', regex: /\bmissing piece\b/i },
    ];

    const lines = content.split('\n');
    lines.forEach((line, lineIdx) => {
      const isAllowedCode = [
        'tools_library_unlock',
        'unlocked_items',
        'unlocked_assets',
        'isUnlocking',
        'onUnlock',
        'handleUnlock',
        'has_unlocked_ai_report',
        'lead_gate_',
        'unlockedItems',
        'unlockedAssets',
        'UNLOCKED ASSETS',
        'Avoid \'delve\'',
        'No buzzwords',
        'banned'
      ].some(allow => line.includes(allow));

      if (isAllowedCode) return;

      for (const { name, regex } of bannedWordPatterns) {
        if (regex.test(line)) {
          console.error(`[HWS STYLE ERROR] Banned buzzword '${name}' detected in ${relativePath}:${lineIdx + 1} -> "${line.trim()}"`);
          errorCount++;
        }
      }
    });
  }
});

// Rule F: Audit Git Status for Untracked/Staged .env or Credential Files
try {
  const gitStatusOutput = execSync('git status --porcelain', { cwd: rootDir, encoding: 'utf8' });
  const gitLines = gitStatusOutput.split('\n').filter(Boolean);
  gitLines.forEach(line => {
    const file = line.trim().split(/\s+/).slice(1).join(' ');
    const base = path.basename(file);
    if (/^\.env(\..+)?$/i.test(base) && !base.endsWith('.example')) {
      console.error(`[SECURITY ERROR] Attempting to track/stage environment secret file: ${file}`);
      errorCount++;
    }
    if (/credentials?\.json$/i.test(base) || /service-account.*\.json$/i.test(base)) {
      console.error(`[SECURITY ERROR] Attempting to track/stage credential JSON file: ${file}`);
      errorCount++;
    }
  });
} catch (e) {
  // Ignore if git command fails
}

// 4. Validate Security Headers in middleware.ts
const middlewarePath = path.join(rootDir, 'middleware.ts');
if (fs.existsSync(middlewarePath)) {
  const mwContent = fs.readFileSync(middlewarePath, 'utf8');
  if (!mwContent.includes('Strict-Transport-Security') || !mwContent.includes('X-Frame-Options')) {
    console.error(`[SECURITY ERROR] middleware.ts is missing standard enterprise security headers`);
    errorCount++;
  }
}

// 5. Research Corpus Schema & Type Invariant Gate
const corpusPath = path.join(rootDir, 'app/lib/research-corpus.ts');
if (fs.existsSync(corpusPath)) {
  const corpusContent = fs.readFileSync(corpusPath, 'utf8');
  const validDomains = ['AI Economics', 'AI Governance', 'Software Economics', 'Engineering Leadership', 'Product Leadership', 'Career Economics'];
  const domainMatches = [...corpusContent.matchAll(/domain:\s*['"]([^'"]+)['"]/g)];
  domainMatches.forEach(m => {
    const domainVal = m[1];
    if (!validDomains.includes(domainVal)) {
      console.error(`[CORPUS TYPE ERROR] Invalid domain '${domainVal}' found in research-corpus.ts! Must be one of: ${validDomains.join(', ')}`);
      errorCount++;
    }
  });

  const validPublishers = ['CIO.com', 'Built In', 'Mind the Product', 'HackerNoon', 'Beehiiv', 'LinkedIn'];
  const pubMatches = [...corpusContent.matchAll(/publisher:\s*['"]([^'"]+)['"]/g)];
  pubMatches.forEach(m => {
    const pubVal = m[1];
    if (!validPublishers.includes(pubVal)) {
      console.error(`[CORPUS TYPE ERROR] Invalid publisher '${pubVal}' found in research-corpus.ts! Must be one of: ${validPublishers.join(', ')}`);
      errorCount++;
    }
  });
}

// 6. Concept Relationship Invariant Gate (relatedConceptSlugs)
const validConceptRelationships = [
  'implements', 'measures', 'requires', 'supports', 'extends', 'derived_from',
  'predicts', 'contradicts', 'depends_on', 'refines', 'simplifies', 'generalizes',
  'explains', 'formalizes', 'causes', 'correlates_with'
];
const conceptFiles = fs.readdirSync(path.join(rootDir, 'app/lib')).filter(f => f.startsWith('concept-corpus') && f.endsWith('.ts'));
for (const cf of conceptFiles) {
  const filePath = path.join(rootDir, 'app/lib', cf);
  const content = fs.readFileSync(filePath, 'utf8');
  const slugBlocks = [...content.matchAll(/relatedConceptSlugs:\s*\[([\s\S]*?)\]/g)];
  for (const block of slugBlocks) {
    const relMatches = [...block[1].matchAll(/relationship:\s*['"]([^'"]+)['"](?!\s+as\s+any)/g)];
    for (const m of relMatches) {
      const rel = m[1];
      if (!validConceptRelationships.includes(rel)) {
        console.error(`[CONCEPT TYPE ERROR] Invalid relationship '${rel}' in ${cf} relatedConceptSlugs! Must be one of: ${validConceptRelationships.join(', ')}`);
        errorCount++;
      }
    }
  }
}

// 7. SEO, Crawlability & Hosting Hygiene Gates
// 7A. Zero Legacy Hosting Artifacts
const legacyArtifacts = ['vercel.json', 'vercel_status.txt', '.vercel'];
for (const artifact of legacyArtifacts) {
  if (fs.existsSync(path.join(rootDir, artifact))) {
    console.error(`[HOSTING ERROR] Legacy Vercel artifact '${artifact}' found in workspace root! Site is hosted exclusively on Cloudflare.`);
    errorCount++;
  }
}

// 7B. Primary Nav Sitemap Coverage
const siteDataPath = path.join(rootDir, 'lib/site-data.ts');
const sitemapPath = path.join(rootDir, 'app/sitemap.ts');
if (fs.existsSync(siteDataPath) && fs.existsSync(sitemapPath)) {
  const siteDataContent = fs.readFileSync(siteDataPath, 'utf8');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const disallowedBlock = sitemapContent.match(/const\s+REDIRECT_DISALLOWED\s*=\s*new\s+Set\(\[([\s\S]*?)\]\)/);
  const disallowedSet = new Set(
    disallowedBlock
      ? [...disallowedBlock[1].matchAll(/['"]([^'"]+)['"]/g)].map(m => m[1])
      : []
  );
  const navBlock = siteDataContent.match(/export\s+const\s+nav\s*=\s*\[[\s\S]*?\];/);
  if (!navBlock) {
    console.error(`[SEO ERROR] Could not locate 'export const nav = [...]' in lib/site-data.ts!`);
    errorCount++;
  } else {
    const navHrefs = [...navBlock[0].matchAll(/href:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
    for (const href of navHrefs) {
      const cleanHref = href.split('#')[0];
      if (disallowedSet.has(cleanHref)) {
        console.error(`[SEO ERROR] Primary navigation route '${cleanHref}' is inside REDIRECT_DISALLOWED in app/sitemap.ts!`);
        errorCount++;
      }
    }
  }
}

// 7C. Glossary KEEP_TERMS Parity
const execTermsPath = path.join(rootDir, 'app/glossary/terms/executive-leadership-2026.ts');
const pillarsMappingPath = path.join(rootDir, 'app/glossary/pillarsMapping.ts');
const termsDir = path.join(rootDir, 'app/glossary/terms');
if (fs.existsSync(execTermsPath) && fs.existsSync(pillarsMappingPath) && fs.existsSync(termsDir)) {
  const execTermsContent = fs.readFileSync(execTermsPath, 'utf8');
  const pillarsContent = fs.readFileSync(pillarsMappingPath, 'utf8');
  const keepBlock = pillarsContent.match(/export\s+const\s+KEEP_TERMS[\s\S]*?\];/);
  const keepSlugs = new Set(
    keepBlock ? [...keepBlock[0].matchAll(/['"]([^'"]+)['"]/g)].map(m => m[1]) : []
  );
  const execSlugs = [...execTermsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  for (const slug of execSlugs) {
    if (!keepSlugs.has(slug)) {
      console.error(`[SEO ERROR] Executive glossary term '${slug}' in executive-leadership-2026.ts is missing from KEEP_TERMS in pillarsMapping.ts!`);
      errorCount++;
    }
  }
  const allDefinedTermSlugs = new Set();
  const rootTermsPath = path.join(rootDir, 'app/glossary/terms.ts');
  if (fs.existsSync(rootTermsPath)) {
    const rtc = fs.readFileSync(rootTermsPath, 'utf8');
    for (const m of rtc.matchAll(/slug:\s*['"]([^'"]+)['"]/g)) {
      allDefinedTermSlugs.add(m[1]);
    }
  }
  for (const tf of fs.readdirSync(termsDir).filter(f => f.endsWith('.ts'))) {
    const tc = fs.readFileSync(path.join(termsDir, tf), 'utf8');
    for (const m of tc.matchAll(/slug:\s*['"]([^'"]+)['"]/g)) {
      allDefinedTermSlugs.add(m[1]);
    }
  }
  for (const ks of keepSlugs) {
    if (!allDefinedTermSlugs.has(ks)) {
      console.error(`[SEO ERROR] KEEP_TERMS slug '${ks}' in pillarsMapping.ts does not exist in any app/glossary/terms/*.ts file!`);
      errorCount++;
    }
  }
}

// 7D. Zero Double-Branded <title> Tags & 7E. Local Image Asset Existence
function getAppRouteFiles(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(getAppRouteFiles(p));
    else if (f === 'page.tsx' || f === 'layout.tsx') res.push(p);
  }
  return res;
}
const allAppRouteFiles = getAppRouteFiles(path.join(rootDir, 'app'));
for (const rf of allAppRouteFiles) {
  const rel = path.relative(rootDir, rf).replace(/\\/g, '/');
  if (rel === 'app/layout.tsx') continue;
  const rc = fs.readFileSync(rf, 'utf8');
  const stripped = rc
    .replace(/openGraph\s*:\s*\{[\s\S]*?\n\s*\}/g, '')
    .replace(/twitter\s*:\s*\{[\s\S]*?\n\s*\}/g, '');
  const doubleBrandMatch = stripped.match(/(?<!absolute\s*:\s*)title\s*:\s*([`'"].*?\|\s*Richard Ewing.*?[`'"])/);
  if (doubleBrandMatch) {
    console.error(`[SEO ERROR] Double-branded plain-string title in ${rel}: ${doubleBrandMatch[1]}. Omit '| Richard Ewing' or use title: { absolute: '...' }.`);
    errorCount++;
  }
}

// 7E. Local Image Asset Existence across app/ routes and schemas
for (const sfPath of [...allAppRouteFiles, path.join(rootDir, 'app/lib/schemas.ts')]) {
  if (fs.existsSync(sfPath)) {
    const rel = path.relative(rootDir, sfPath).replace(/\\/g, '/');
    const sfc = fs.readFileSync(sfPath, 'utf8');
    const assetRefs = [...sfc.matchAll(/https:\/\/www\.richardewing\.io(\/(?:assets|images)\/[^'"\s)]+)/g)].map(m => m[1]);
    for (const ref of assetRefs) {
      const diskPath = path.join(rootDir, 'public', ref);
      if (!fs.existsSync(diskPath)) {
        console.error(`[SEO ERROR] Broken local image asset '${ref}' referenced in ${rel} (missing at public${ref})!`);
        errorCount++;
      }
    }
  }
}

// 7F. Root Layout Keyword Isolation & Site-Shell SSR Crawlability
const rootLayoutPath = path.join(rootDir, 'app/layout.tsx');
if (fs.existsSync(rootLayoutPath)) {
  const rlc = fs.readFileSync(rootLayoutPath, 'utf8');
  if (rlc.includes('homepageKeywords')) {
    console.error(`[SEO ERROR] app/layout.tsx must not inject homepageKeywords globally! Keep homepageKeywords scoped to app/page.tsx.`);
    errorCount++;
  }
}
const siteShellPath = path.join(rootDir, 'components/site-shell.tsx');
if (fs.existsSync(siteShellPath)) {
  const ssc = fs.readFileSync(siteShellPath, 'utf8');
  if (/\{\s*openGroup\s*===\s*group\.label\s*\?/.test(ssc)) {
    console.error(`[SEO ERROR] components/site-shell.tsx must not conditionally unmount dropdown links behind '{openGroup === group.label ?'! Render in SSR DOM for crawlability.`);
    errorCount++;
  }
  for (const redirectLegal of ['/privacy', '/terms', '/disclaimers']) {
    if (new RegExp(`href=['"]${redirectLegal}['"]`).test(ssc)) {
      console.error(`[SEO ERROR] components/site-shell.tsx contains redirect link '${redirectLegal}'! Link directly to '/legal'.`);
      errorCount++;
    }
  }
}

// 8. Agent Skills Security & Hygiene Gate
try {
  const auditOutput = execSync(`node "${path.join(__dirname, 'audit-agent-skills.mjs')}"`, { encoding: 'utf8' });
  console.log(auditOutput.trim());
} catch (err) {
  console.error(`[SECURITY ERROR] audit-agent-skills.mjs failed:\n${err.stdout || err.message}`);
  errorCount++;
}

console.log('\n--- Verification Summary ---');
console.log(`Files audited: ${filesToAudit.length}`);
console.log(`Errors: ${errorCount}`);
console.log(`Warnings: ${warningCount}`);

if (errorCount > 0) {
  console.error('❌ QA Verification Failed! Please resolve errors before committing.');
  process.exit(1);
} else {
  console.log('✅ All QA Checks Passed Cleanly.');
  process.exit(0);
}
