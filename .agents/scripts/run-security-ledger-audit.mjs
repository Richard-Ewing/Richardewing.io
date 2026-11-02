#!/usr/bin/env node
/**
 * Sovereign Stateful Security Ledger & Edge Boundary Auditor
 * Implements .agents/skills/cloudflare-edge-security-audit/SKILL.md (MOD v4.0 / ADR-0018)
 *
 * Clean-room adaptation of cloudflare/security-audit-skill + cloudflare/skills + trailofbits.
 * Persists SHA-256 coverage ledgers and structured verdicts inside .scratch/security-audit/.
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const AUDIT_DIR = path.join(ROOT_DIR, '.scratch', 'security-audit');

if (!fs.existsSync(AUDIT_DIR)) {
  fs.mkdirSync(AUDIT_DIR, { recursive: true });
}

const LEDGER_PATH = path.join(AUDIT_DIR, 'coverage-ledger.json');
const FINDINGS_PATH = path.join(AUDIT_DIR, 'findings.json');
const ARCH_PATH = path.join(AUDIT_DIR, 'architecture.md');
const REPORT_PATH = path.join(AUDIT_DIR, 'REPORT.md');

function sha256(content) {
  return crypto.createHash('sha256').update(content, 'utf8').digest('hex');
}

function collectAuditUnits() {
  const units = [];

  const rootTargets = ['middleware.ts', 'wrangler.jsonc', 'next.config.ts'];
  for (const rel of rootTargets) {
    const full = path.join(ROOT_DIR, rel);
    if (fs.existsSync(full)) {
      units.push({ relPath: rel.replace(/\\/g, '/'), fullPath: full, surface: 'edge-boundary' });
    }
  }

  function walkApi(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkApi(full);
      } else if (/\.(ts|tsx|js)$/i.test(entry.name)) {
        const rel = path.relative(ROOT_DIR, full).replace(/\\/g, '/');
        let surface = 'api-route';
        if (rel.includes('/admin/')) surface = 'admin-api';
        else if (rel.includes('/webhooks/')) surface = 'webhook-ingestion';
        else if (rel.includes('/ai-advisor/') || rel.includes('/voice/') || rel.includes('/expand')) surface = 'llm-compute';
        else if (rel.includes('/buy/') || rel.includes('/checkout')) surface = 'commerce';
        units.push({ relPath: rel, fullPath: full, surface });
      }
    }
  }

  walkApi(path.join(ROOT_DIR, 'app', 'api'));
  return units;
}

function scanClientServiceRoleLeaks() {
  const leaks = [];
  function walkClientFiles(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (['node_modules', '.next', 'api'].includes(entry.name)) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkClientFiles(full);
      } else if (/\.(tsx|ts)$/i.test(entry.name)) {
        const content = fs.readFileSync(full, 'utf8');
        const isClient = /^\s*['"]use client['"]/.test(content);
        const importsServerPayEngine =
          /from\s+['"][^'"]*pay-to-reveal\/(?:vibe-security-engine|department-playbook-engine|sealed-envelope|xlsx-compiler)['"]/.test(
            content
          );
        if (
          isClient &&
          (/supabaseAdmin/.test(content) ||
            /SUPABASE_SERVICE_ROLE_KEY/.test(content) ||
            importsServerPayEngine)
        ) {
          leaks.push(path.relative(ROOT_DIR, full).replace(/\\/g, '/'));
        }
      }
    }
  }
  walkClientFiles(path.join(ROOT_DIR, 'app'));
  walkClientFiles(path.join(ROOT_DIR, 'components'));
  return leaks;
}

function runDeterministicHunters(unit, content) {
  const candidates = [];

  // Class 2A: Fail-open Bearer ${secret} interpolation when secret may be undefined
  const bearerInterp = content.match(/authHeader\s*===\s*`Bearer\s+\$\{([^}]+)\}`/);
  if (bearerInterp) {
    const expr = bearerInterp[1].trim();
    // Verify that the file explicitly guards truthiness of the secret variable on the same or prior check
    const varName = expr.replace(/^process\.env\./, '');
    const hasExplicitGuard =
      new RegExp(`Boolean\\(\\s*${varName}\\b`).test(content) ||
      new RegExp(`if\\s*\\(\\s*!${varName}\\b`).test(content) ||
      new RegExp(`${varName}\\s*&&\\s*${varName}\\.length`).test(content) ||
      new RegExp(`${varName}\\s*&&\\s*authHeader\\s*===`).test(content);

    if (!hasExplicitGuard) {
      candidates.push({
        id: `SEC-BEARER-UNDEF-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_2_FAIL_OPEN_AUTH',
        severity: 'HIGH',
        verdict: 'confirmed',
        summary: `Fail-open Bearer comparison (${expr}): if the secret env var is unset at runtime, 'Authorization: Bearer undefined' evaluates true.`,
        remediation: 'Require Boolean(secret && secret.length >= 16 && authHeader === `Bearer ${secret}`) before granting cron/webhook access.'
      });
    }
  }

  // Class 2B: Fail-open webhook guard `if (secret && authHeader !== ...)`
  if (/if\s*\(\s*secret\s*&&\s*authHeader\s*!==/.test(content)) {
    candidates.push({
      id: `SEC-WEBHOOK-FAILOPEN-${unit.relPath}`,
      unit: unit.relPath,
      attackClass: 'CLASS_2_FAIL_OPEN_AUTH',
      severity: 'HIGH',
      verdict: 'confirmed',
      summary: 'Webhook skips authentication completely when secret env var is missing (`if (secret && authHeader !== ...)`).',
      remediation: 'Fail closed: `if (!secret || authHeader !== \\`Bearer ${secret}\\`) return 401`.'
    });
  }

  // Class 1A: Apex Open Redirect guard in middleware.ts
  if (unit.relPath === 'middleware.ts') {
    if (!/destination\.origin\s*!==/.test(content) || !/replace\(\/\^\[\/\\\\\]\+\//.test(content)) {
      candidates.push({
        id: `SEC-OPEN-REDIRECT-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_1_EDGE_OPEN_REDIRECT',
        severity: 'HIGH',
        verdict: 'confirmed',
        summary: 'Edge middleware redirects raw request path without stripping leading double-slashes or verifying destination origin.',
        remediation: 'Sanitize leading slashes (`targetPath.replace(/^[/\\\\]+/, "")`) and enforce `destination.origin === baseOrigin` before returning 301.'
      });
    }
  }

  // Class 2C: Unauthenticated or non-allowlisted /api/admin/* endpoint
  if (unit.surface === 'admin-api') {
    const hasClerkOrCron = /\b(?:auth|clerkAuth|currentUser)\s*\(/.test(content) || /CRON_SECRET/.test(content);
    const hasAdminEmailAllowlist = /ADMIN_EMAILS/.test(content);
    if (!hasClerkOrCron || !hasAdminEmailAllowlist) {
      candidates.push({
        id: `SEC-ADMIN-NOAUTH-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_2_ADMIN_BOUNDARY',
        severity: 'CRITICAL',
        verdict: 'confirmed',
        summary: 'Admin API route lacks Clerk ADMIN_EMAILS allowlist enforcement or fail-closed CRON_SECRET verification.',
        remediation: 'Enforce Clerk `currentUser()` email allowlist (`ADMIN_EMAILS`) and fail-closed `CRON_SECRET` gate at top of handler.'
      });
    }
  }

  // Class 3: Public unauthenticated webhook writing unbounded JSON into supabaseAdmin
  if (unit.surface === 'webhook-ingestion' && /supabaseAdmin/.test(content) && !/Stripe-Signature/.test(content) && !/CRON_SECRET/.test(content) && !/INGEST_WEBHOOK_SECRET/.test(content)) {
    const hasSizeCap = /content-length|MAX_PAYLOAD|length\s*>\s*\d{4,}/i.test(content);
    if (!hasSizeCap) {
      candidates.push({
        id: `SEC-SUPABASE-DOS-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_3_SUPABASE_INGESTION_DOS',
        severity: 'MEDIUM',
        verdict: 'confirmed',
        summary: 'Unauthenticated telemetry ingestion writes unbounded JSON payloads via supabaseAdmin without byte-size limits.',
        remediation: 'Enforce a strict raw body byte cap (<= 16KB) and sanitize string fields before inserting.'
      });
    }
  }

  // Class 4: Stripe Webhook Payment Status, Fail-Closed Secret & Product Price Entitlement Verification
  if (unit.relPath === 'app/api/webhooks/stripe/route.ts') {
    const hasEmptyWebhookSecretFallback = /constructEvent\([\s\S]{0,160}\|\|\s*['"]['"]/.test(content);
    if (
      hasEmptyWebhookSecretFallback ||
      !/payment_status/.test(content) ||
      !/getMinimumExpectedCents|amount_subtotal/.test(content)
    ) {
      candidates.push({
        id: `SEC-STRIPE-ENTITLEMENT-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_4_STRIPE_ENTITLEMENT_BYPASS',
        severity: 'CRITICAL',
        verdict: 'confirmed',
        summary: 'Stripe webhook allows empty secret fallback or grants Clerk entitlements without verifying session.payment_status === "paid" and catalog price thresholds.',
        remediation: 'Fail closed when STRIPE_WEBHOOK_SECRET is missing, verify `session.payment_status === "paid"`, and compare `amount_total`/`amount_subtotal` against `PRODUCTS` catalog prices.'
      });
    }
  }

  // Class 5A: Paid AI Advisor API routes must verify subscription entitlement
  if (unit.relPath.startsWith('app/api/ai-advisor/')) {
    if (!/has_ai_advisor_access/.test(content)) {
      candidates.push({
        id: `SEC-ADVISOR-PAYWALL-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_5_PAID_LLM_BYPASS',
        severity: 'HIGH',
        verdict: 'confirmed',
        summary: 'AI Integration Advisor route checks Clerk login (`auth()`) without enforcing paid `has_ai_advisor_access` / `has_yearly_subscription` metadata.',
        remediation: 'Check `user.publicMetadata?.has_ai_advisor_access === true || user.publicMetadata?.has_yearly_subscription === true`.'
      });
    }
  }

  // Class 5B: Anonymous LLM / TTS compute routes must enforce Cloudflare IP rate limiting
  if (unit.relPath === 'app/api/expand/route.ts' || unit.relPath.startsWith('app/api/voice/')) {
    if (!/cf-connecting-ip/.test(content) || !/status:\s*429/.test(content)) {
      candidates.push({
        id: `SEC-LLM-RATELIMIT-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_5_LLM_COMPUTE_EXHAUSTION',
        severity: 'MEDIUM',
        verdict: 'confirmed',
        summary: 'Anonymous Gemini text/audio generation route lacks `cf-connecting-ip` rate limiting.',
        remediation: 'Enforce bounded sliding-window rate limiting keyed by `cf-connecting-ip` returning HTTP 429.'
      });
    }
  }

  // Class 6 (ADR-0021): Pay-to-Reveal Sealed-Envelope & Checkout Boundary Enforcement
  if (unit.relPath === 'app/api/tools/open-run/route.ts') {
    const checksPaidStatus = /payment_status\s*===\s*['"]paid['"]/.test(content);
    const checksRunIdMatch = /metadata\?\.runId\s*===\s*runId/.test(content);
    const checksMinPrice = /priceCents\s*\*\s*0\.5/.test(content);
    if (!checksPaidStatus || !checksRunIdMatch || !checksMinPrice) {
      candidates.push({
        id: `SEC-PAY-TO-REVEAL-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_6_PAY_TO_REVEAL_BOUNDARY',
        severity: 'CRITICAL',
        verdict: 'confirmed',
        summary: 'Pay-to-Reveal open-run route lacks fail-closed Stripe payment_status, runId metadata binding, or catalog price verification.',
        remediation: 'Verify session.payment_status === "paid", session.metadata?.runId === runId, and effectivePaidCents >= priceCents * 0.5.'
      });
    }
  }

  if (
    unit.relPath === 'app/api/tools/vibe-scan/route.ts' ||
    unit.relPath === 'app/api/tools/playbook-compile/route.ts' ||
    unit.relPath === 'app/api/tools/pay-checkout/route.ts' ||
    unit.relPath === 'app/api/tools/open-run/route.ts' ||
    unit.relPath === 'app/api/tools/verify-badge/route.ts'
  ) {
    if (/supabaseAdmin|@\/lib\/supabase/.test(content)) {
      candidates.push({
        id: `SEC-TOOLS-ZERO-SUPABASE-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_6_PAY_TO_REVEAL_BOUNDARY',
        severity: 'HIGH',
        verdict: 'confirmed',
        summary: 'Pay-to-Reveal standalone tool route imports Supabase, violating the ADR-0021 Zero-Supabase stateless invariant.',
        remediation: 'Use stateless AES-256-GCM sealed envelopes and verified Stripe session.metadata without Supabase persistence.'
      });
    }
  }

  if (
    unit.relPath === 'app/api/tools/vibe-scan/route.ts' ||
    unit.relPath === 'app/api/tools/playbook-compile/route.ts' ||
    unit.relPath === 'app/api/tools/pay-checkout/route.ts'
  ) {
    if (!/cf-connecting-ip/.test(content) || !/status:\s*429/.test(content) || !/MAX_PAYLOAD_BYTES/.test(content)) {
      candidates.push({
        id: `SEC-TOOLS-PERIMETER-${unit.relPath}`,
        unit: unit.relPath,
        attackClass: 'CLASS_6_PAY_TO_REVEAL_BOUNDARY',
        severity: 'HIGH',
        verdict: 'confirmed',
        summary: 'Standalone tool API route lacks cf-connecting-ip rate limiting (429) or MAX_PAYLOAD_BYTES cap.',
        remediation: 'Enforce cf-connecting-ip sliding-window rate limiting and raw request byte caps.'
      });
    }
  }

  // Hosting Invariant & Mock Payload Hygiene in Production API Routes
  if (/Vercel env vars/i.test(content)) {
    candidates.push({
      id: `HYG-STALE-HOSTING-${unit.relPath}`,
      unit: unit.relPath,
      attackClass: 'CLASS_1_EDGE_CONFIG_DRIFT',
      severity: 'LOW',
      verdict: 'confirmed',
      summary: 'API error output references legacy Vercel env vars instead of Cloudflare Wrangler secrets.',
      remediation: 'Update setup guidance to reference Cloudflare Workers / `npx wrangler secret put`.'
    });
  }

  return candidates;
}

// Execute Audit
console.log('=== Sovereign Stateful Security Ledger Audit (MOD v4.0) ===\n');

let previousLedger = { units: {} };
if (fs.existsSync(LEDGER_PATH)) {
  try {
    previousLedger = JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf8'));
  } catch {
    previousLedger = { units: {} };
  }
}

const units = collectAuditUnits();
const nextLedgerUnits = {};
const allFindings = [];
let unchangedCount = 0;
let auditedNowCount = 0;

for (const unit of units) {
  const content = fs.readFileSync(unit.fullPath, 'utf8');
  const hash = sha256(content);
  const prev = previousLedger.units?.[unit.relPath];
  const unitFindings = runDeterministicHunters(unit, content);

  if (prev && prev.sha256 === hash && unitFindings.length === 0) {
    unchangedCount++;
  } else {
    auditedNowCount++;
  }

  allFindings.push(...unitFindings);

  nextLedgerUnits[unit.relPath] = {
    surface: unit.surface,
    sha256: hash,
    status: unitFindings.length === 0 ? 'verified_clean' : 'findings_open',
    openFindingCount: unitFindings.length,
    lastAuditedAt: new Date().toISOString()
  };
}

// Global Client Bundle Service-Role Check
const clientLeaks = scanClientServiceRoleLeaks();
for (const leak of clientLeaks) {
  allFindings.push({
    id: `SEC-CLIENT-SVCROLE-${leak}`,
    unit: leak,
    attackClass: 'CLASS_3_SUPABASE_RLS_BYPASS',
    severity: 'CRITICAL',
    verdict: 'confirmed',
    summary: 'Client component imports supabaseAdmin, SUPABASE_SERVICE_ROLE_KEY, or server-only pay-to-reveal engines.',
    remediation: 'Move privileged database logic into an authenticated Server Route Handler.'
  });
}

const ledgerPayload = {
  schemaVersion: '1.0.0',
  methodology: 'Cloudflare 6-Phase Coverage Ledger + Hunter/Disprover Separation (ADR-0018)',
  generatedAt: new Date().toISOString(),
  totalUnits: units.length,
  unchangedVerifiedUnits: unchangedCount,
  scannedOrUpdatedUnits: auditedNowCount,
  confirmedFindingsCount: allFindings.filter((f) => f.verdict === 'confirmed').length,
  units: nextLedgerUnits
};

fs.writeFileSync(LEDGER_PATH, JSON.stringify(ledgerPayload, null, 2), 'utf8');
fs.writeFileSync(FINDINGS_PATH, JSON.stringify({ generatedAt: ledgerPayload.generatedAt, findings: allFindings }, null, 2), 'utf8');

const archDoc = `# Security Audit Trust Boundaries & Surface Map

- **Edge Perimeter**: \`middleware.ts\`, \`wrangler.jsonc\` (Cloudflare Workers V8 Isolates, Zone \`26b036cd0321b744617c0cc041c0f225\`)
- **Authentication**: Clerk (\`@clerk/nextjs\`) + fail-closed \`CRON_SECRET\` / \`INGEST_WEBHOOK_SECRET\` headers
- **Privileged Persistence**: Supabase Postgres via \`supabaseAdmin\` (server-only)
- **Payments & Entitlements**: Stripe webhook signature verification (\`/api/webhooks/stripe\`) + Payment Links
- **Total Tracked Units in Coverage Ledger**: ${units.length}
`;
fs.writeFileSync(ARCH_PATH, archDoc, 'utf8');

const reportLines = [
  '# Stateful Security Audit Report',
  '',
  `- **Timestamp**: ${ledgerPayload.generatedAt}`,
  `- **Tracked Edge & API Units**: ${units.length} (${unchangedCount} unchanged hash hits, ${auditedNowCount} freshly evaluated)`,
  `- **Client Bundle Service-Role Leaks**: ${clientLeaks.length}`,
  `- **Confirmed Open Findings**: ${ledgerPayload.confirmedFindingsCount}`,
  ''
];

if (allFindings.length === 0) {
  reportLines.push('## Verdict: 100% CLEAN', '', 'Zero confirmed vulnerabilities detected across all tracked units.');
} else {
  reportLines.push('## Open Confirmed Findings', '');
  for (const f of allFindings) {
    reportLines.push(`- **[${f.severity}] \`${f.unit}\` (${f.attackClass})**: ${f.summary}`);
    reportLines.push(`  - *Fix*: ${f.remediation}`);
  }
}

fs.writeFileSync(REPORT_PATH, reportLines.join('\n') + '\n', 'utf8');

console.log(`Tracked Units: ${units.length} | Client Leaks: ${clientLeaks.length} | Confirmed Findings: ${allFindings.length}`);
for (const f of allFindings) {
  console.log(`  [${f.severity}] ${f.unit}: ${f.summary}`);
}
console.log(`\nCoverage ledger written to .scratch/security-audit/coverage-ledger.json`);

if (process.argv.includes('--strict') && allFindings.length > 0) {
  process.exit(1);
}
process.exit(0);
