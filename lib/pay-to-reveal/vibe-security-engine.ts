/**
 * Standalone Product #2: Vibe-Coded App & AI Agent Security Scanner Engine (ADR-0021)
 *
 * Clean-room multi-phase taint and boundary analyzer (`entrypoint -> propagation -> sink`).
 * Supports:
 *   1. SSRF-hardened live HTTPS URL header, client bundle, and Supabase PostgREST schema checks
 *   2. Public GitHub repository file-tree and critical route/migration inspection
 *   3. Pasted `.mcp.json`, `package.json`, Next.js API route, and SQL schema auditing
 */

export type ScanMode = 'url' | 'github' | 'code';
export type ScanFocusProfile = 'full' | 'supabase-rls' | 'mcp-agent';
export type FindingSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface TaintTrace {
  entrypoint: string;
  propagation: string;
  sink: string;
  evidenceSnippet: string;
}

export interface SecurityFindingFull {
  id: string;
  severity: FindingSeverity;
  category:
    | 'SUPABASE_RLS_BOUNDARY'
    | 'UNAUTHENTICATED_AI_SINK'
    | 'MCP_AGENT_POISONING'
    | 'SECRET_CREDENTIAL_EXPOSURE'
    | 'WEBHOOK_PAYMENT_SPOOFING'
    | 'EDGE_TRANSPORT_HEADERS';
  cwe: string;
  title: string;
  estimatedMonthlyExposureUsd: number;
  impactSummary: string;
  trace: TaintTrace;
  remediationCode: string;
  cursorFixPrompt: string;
}

export interface SecurityFindingStub {
  id: string;
  severity: FindingSeverity;
  category: SecurityFindingFull['category'];
  cwe: string;
  title: string;
  estimatedMonthlyExposureUsd: number;
}

export interface VibeScanInput {
  mode: ScanMode;
  targetUrl?: string;
  codeSnippet?: string;
  focusProfile?: ScanFocusProfile;
}

export interface VibeScanSealedPayload {
  targetLabel: string;
  mode: ScanMode;
  focusProfile: ScanFocusProfile;
  scannedAt: string;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  verdictLabel: string;
  estimatedMonthlyExposureUsd: number;
  scannedArtifacts: string[];
  findings: SecurityFindingFull[];
}

export interface VibeScanPublicResponse {
  runId: string;
  targetLabel: string;
  mode: ScanMode;
  scannedAt: string;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  verdictLabel: string;
  estimatedMonthlyExposureUsd: number;
  scannedArtifacts: string[];
  severityCounts: Record<FindingSeverity, number>;
  freeFinding: SecurityFindingFull | null;
  lockedStubs: SecurityFindingStub[];
  sealedEnvelope: string;
}

export const VIBE_SCAN_SAMPLE_PRESETS: Array<{
  id: string;
  label: string;
  mode: ScanMode;
  description: string;
  codeSnippet: string;
}> = [
  {
    id: 'nextjs-supabase-saas',
    label: 'Sample Vibe-Coded Next.js + Supabase App',
    mode: 'code',
    description: 'Unauthenticated LLM route, service-role client import, and missing RLS migration.',
    codeSnippet: [
      '// File: app/api/generate-plan/route.ts',
      "import { NextResponse } from 'next/server';",
      "import OpenAI from 'openai';",
      "import { createClient } from '@supabase/supabase-js';",
      '',
      'const supabase = createClient(',
      '  process.env.NEXT_PUBLIC_SUPABASE_URL!,',
      '  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!',
      ');',
      '',
      'export async function POST(req: Request) {',
      '  const { prompt, messages, orgId } = await req.json();',
      '  const client = new OpenAI({ apiKey: "MOCK_HARDCODED_OPENAI_CREDENTIAL_DEMO" });',
      '  const completion = await client.chat.completions.create({',
      "    model: 'gpt-4o',",
      '    messages: [{ role: "system", content: "Org context: " + prompt }, ...messages],',
      '  });',
      '  await supabase.from("billing_credits").update({ credits: 9999 }).eq("org_id", orgId);',
      '  return NextResponse.json({ answer: completion.choices[0].message.content });',
      '}',
      '',
      '-- File: supabase/migrations/20261101_init.sql',
      'CREATE TABLE public.customer_invoices (',
      '  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),',
      '  org_id uuid NOT NULL,',
      '  amount_cents integer NOT NULL,',
      '  stripe_customer_email text',
      ');',
      'CREATE POLICY "allow_all_updates" ON public.customer_invoices FOR UPDATE USING (true);',
    ].join('\n'),
  },
  {
    id: 'mcp-agent-config',
    label: 'Sample .mcp.json Agent Config',
    mode: 'code',
    description: 'Unpinned npx tool execution, root filesystem mount, and inline database secret.',
    codeSnippet: JSON.stringify(
      {
        mcpServers: {
          filesystem: {
            command: 'npx',
            args: ['-y', '@modelcontextprotocol/server-filesystem', '/'],
          },
          postgresProd: {
            command: 'npx',
            args: ['-y', 'mcp-postgres-community-unverified'],
            env: {
              DATABASE_ADMIN_PASSWORD: 'MOCK_PLAIN_DB_PASSWORD_IN_CONFIG',
              ALLOW_WRITE_QUERIES: 'true',
            },
          },
        },
      },
      null,
      2
    ),
  },
  {
    id: 'stripe-webhook-bypass',
    label: 'Sample Unverified Stripe Webhook + SQL Sink',
    mode: 'code',
    description: 'Forged webhook payload acceptance and raw string SQL interpolation.',
    codeSnippet: [
      '// File: app/api/webhooks/billing/route.ts',
      "import { NextResponse } from 'next/server';",
      '',
      'export async function POST(req: Request) {',
      '  const event = await req.json();',
      '  const secret = process.env.WEBHOOK_SHARED_SECRET;',
      '  if (secret && req.headers.get("x-webhook-secret") !== secret) {',
      '    return NextResponse.json({ error: "Denied" }, { status: 401 });',
      '  }',
      '  if (event.type === "checkout.session.completed") {',
      '    const userEmail = event.data.object.customer_email;',
      '    await prisma.$executeRawUnsafe(`UPDATE users SET plan = \'enterprise\' WHERE email = \'${userEmail}\'`);',
      '  }',
      '  return NextResponse.json({ ok: true });',
      '}',
    ].join('\n'),
  },
];

const BLOCKED_HOST_SUFFIXES = [
  '.localhost',
  '.local',
  '.internal',
  '.home.arpa',
  '.nip.io',
  '.sslip.io',
  '.xip.io',
];

const BLOCKED_EXACT_HOSTS = new Set([
  'localhost',
  '0.0.0.0',
  '127.0.0.1',
  '169.254.169.254',
  '100.100.100.200',
  'metadata.google.internal',
  'metadata',
  'richardewing.io',
  'www.richardewing.io',
]);

function isPrivateOrReservedIpv4(host: string): boolean {
  const m = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!m) return false;
  const octets = [Number(m[1]), Number(m[2]), Number(m[3]), Number(m[4])];
  if (octets.some((o) => Number.isNaN(o) || o < 0 || o > 255)) return true;

  const [a, b, c] = octets;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 0 && (c === 0 || c === 2)) return true;
  if (a === 192 && b === 168) return true;
  if (a === 198 && (b === 18 || b === 19 || b === 51)) return true;
  if (a === 203 && b === 0 && c === 113) return true;
  if (a >= 224) return true;
  return false;
}

export function validateSafePublicHttpsUrl(rawUrl: string): URL {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl.trim());
  } catch {
    throw new Error('Enter a valid https:// URL (for example, https://example.com).');
  }

  if (parsed.protocol !== 'https:') {
    throw new Error('Only public https:// URLs are permitted for live security scanning.');
  }

  if (parsed.username || parsed.password) {
    throw new Error('URLs containing embedded credentials are blocked for security.');
  }

  if (parsed.port && parsed.port !== '443') {
    throw new Error('Live URL scanning only connects to standard HTTPS port 443.');
  }

  const host = parsed.hostname.toLowerCase();
  if (!host || host.endsWith('.') || host.includes('..') || !host.includes('.')) {
    throw new Error('Target hostname must be a canonical public Fully Qualified Domain Name without trailing dots.');
  }

  if (host.startsWith('[') || host.includes(':')) {
    throw new Error('IPv6 literal targets are blocked by the SSRF boundary filter.');
  }

  if (BLOCKED_EXACT_HOSTS.has(host)) {
    throw new Error(`Scanning ${host} is restricted by the SSRF boundary policy.`);
  }

  if (BLOCKED_HOST_SUFFIXES.some((suffix) => host.endsWith(suffix))) {
    throw new Error('Internal, loopback, and wildcard DNS rebinding domains are blocked.');
  }

  if (/^\d+\.\d+\.\d+\.\d+$/.test(host) && isPrivateOrReservedIpv4(host)) {
    throw new Error('Private, loopback, and cloud metadata IPv4 ranges are blocked.');
  }

  // Also block decimal/hex/octal encoded single-integer or dotted-hex IP tricks
  if (/^(?:0x[0-9a-f]+|\d+)$/i.test(host)) {
    throw new Error('Numeric IP encoding is blocked by the SSRF boundary filter.');
  }

  return parsed;
}

async function safeFetchResponse(
  initialUrl: URL,
  maxBytes = 131072,
  timeoutMs = 5500,
  extraHeaders?: Record<string, string>
): Promise<{ finalUrl: URL; status: number; headers: Headers; bodyText: string }> {
  let currentUrl = initialUrl;

  for (let hop = 0; hop <= 2; hop++) {
    const res = await fetch(currentUrl.toString(), {
      method: 'GET',
      redirect: 'manual',
      signal: AbortSignal.timeout(timeoutMs),
      headers: {
        'User-Agent': 'RichardEwing-SecurityScanner/1.0 (+https://www.richardewing.io/tools/vibe-security-scanner)',
        Accept: 'text/html,application/json,text/plain,*/*;q=0.8',
        ...extraHeaders,
      },
    });

    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get('location');
      if (!loc) {
        return { finalUrl: currentUrl, status: res.status, headers: res.headers, bodyText: '' };
      }
      const nextUrl = new URL(loc, currentUrl);
      currentUrl = validateSafePublicHttpsUrl(nextUrl.toString());
      continue;
    }

    const reader = res.body?.getReader();
    if (!reader) {
      return { finalUrl: currentUrl, status: res.status, headers: res.headers, bodyText: '' };
    }

    const chunks: Uint8Array[] = [];
    let received = 0;
    while (received < maxBytes) {
      const { done, value } = await reader.read();
      if (done || !value) break;
      const slice = received + value.length > maxBytes ? value.subarray(0, maxBytes - received) : value;
      chunks.push(slice);
      received += slice.length;
      if (received >= maxBytes) {
        await reader.cancel().catch(() => undefined);
        break;
      }
    }

    const merged = new Uint8Array(received);
    let offset = 0;
    for (const c of chunks) {
      merged.set(c, offset);
      offset += c.length;
    }

    return {
      finalUrl: currentUrl,
      status: res.status,
      headers: res.headers,
      bodyText: new TextDecoder().decode(merged),
    };
  }

  throw new Error('Target exceeded maximum safe HTTPS redirect hops (2).');
}

function analyzeSourceBundleOrCode(
  sourceText: string,
  artifactName: string,
  findings: SecurityFindingFull[]
): void {
  const pushUnique = (finding: SecurityFindingFull) => {
    if (!findings.some((f) => f.id === finding.id)) {
      findings.push(finding);
    }
  };

  // 1. Supabase Service Role Key exposed to client or NEXT_PUBLIC_
  if (
    /NEXT_PUBLIC_[A-Z0-9_]{0,80}SERVICE_ROLE/i.test(sourceText) ||
    (/["']use client["']/.test(sourceText) && /SERVICE_ROLE_KEY/i.test(sourceText))
  ) {
    pushUnique({
      id: 'SUPA-001-SERVICE-ROLE-CLIENT',
      severity: 'CRITICAL',
      category: 'SUPABASE_RLS_BOUNDARY',
      cwe: 'CWE-798',
      title: 'Supabase Service Role Key Exposed in Client-Reachable Bundle',
      estimatedMonthlyExposureUsd: 18500,
      impactSummary:
        'The Supabase service_role key bypasses every Row Level Security (RLS) policy across your entire database. Shipping it under a NEXT_PUBLIC_ variable or client component lets any visitor read, overwrite, or wipe every customer row.',
      trace: {
        entrypoint: `${artifactName} (Client-visible environment binding)`,
        propagation: 'Bundled into browser JavaScript payload via NEXT_PUBLIC_ or client module graph',
        sink: 'createClient(url, serviceRoleKey) -> unrestricted PostgREST superuser access',
        evidenceSnippet: 'NEXT_PUBLIC_*SERVICE_ROLE* or client-side SERVICE_ROLE_KEY reference detected',
      },
      remediationCode: [
        '// 1. Immediately rotate your service_role secret in Supabase Dashboard -> Settings -> API.',
        '// 2. In browser code, use ONLY the anon public key:',
        'export const supabaseBrowser = createClient(',
        '  process.env.NEXT_PUBLIC_SUPABASE_URL!,',
        '  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!',
        ');',
        '// 3. Keep SUPABASE_SERVICE_ROLE_KEY strictly inside server-only route handlers with import "server-only".',
      ].join('\n'),
      cursorFixPrompt:
        'Audit every file importing @supabase/supabase-js. Remove all NEXT_PUBLIC_*SERVICE_ROLE* variables, isolate SUPABASE_SERVICE_ROLE_KEY strictly inside server-only modules with `import "server-only"`, and verify every client component uses NEXT_PUBLIC_SUPABASE_ANON_KEY with strict RLS policies.',
    });
  }

  // 2. SQL CREATE TABLE without ENABLE ROW LEVEL SECURITY
  const createTableMatches = [
    ...sourceText.matchAll(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?(?:public\.)?([a-zA-Z0-9_]+)/gi),
  ];
  if (createTableMatches.length > 0) {
    for (const match of createTableMatches) {
      const tableName = match[1];
      const rlsRegex = new RegExp(
        `ALTER\\s+TABLE\\s+(?:ONLY\\s+)?(?:public\\.)?${tableName}\\s+ENABLE\\s+ROW\\s+LEVEL\\s+SECURITY`,
        'i'
      );
      if (!rlsRegex.test(sourceText)) {
        pushUnique({
          id: `SUPA-002-MISSING-RLS-${tableName.toUpperCase().slice(0, 24)}`,
          severity: 'CRITICAL',
          category: 'SUPABASE_RLS_BOUNDARY',
          cwe: 'CWE-284',
          title: `Public Table "${tableName}" Created Without Row Level Security (RLS)`,
          estimatedMonthlyExposureUsd: 14000,
          impactSummary: `In Supabase and PostgREST setups, any table created in the public schema without ENABLE ROW LEVEL SECURITY is readable and writable directly from the browser using your public anon key.`,
          trace: {
            entrypoint: `HTTPS GET/POST /rest/v1/${tableName} with public anon API key`,
            propagation: `${artifactName} creates public.${tableName} with RLS disabled by default`,
            sink: `Direct unauthenticated table dump and row mutation on public.${tableName}`,
            evidenceSnippet: `CREATE TABLE public.${tableName} (...) -- missing ALTER TABLE ... ENABLE ROW LEVEL SECURITY`,
          },
          remediationCode: [
            `ALTER TABLE public.${tableName} ENABLE ROW LEVEL SECURITY;`,
            `ALTER TABLE public.${tableName} FORCE ROW LEVEL SECURITY;`,
            '',
            `CREATE POLICY "${tableName}_tenant_isolation" ON public.${tableName}`,
            '  FOR ALL',
            '  TO authenticated',
            '  USING (org_id = (SELECT auth.jwt() ->> \'org_id\')::uuid)',
            '  WITH CHECK (org_id = (SELECT auth.jwt() ->> \'org_id\')::uuid);',
          ].join('\n'),
          cursorFixPrompt: `Generate a SQL migration enabling and forcing Row Level Security on public.${tableName} and every other table in the public schema. Revoke default anon write privileges and scope SELECT/INSERT/UPDATE/DELETE strictly to authenticated tenant IDs.`,
        });
        break;
      }
    }
  }

  // 3. Permissive RLS Policy USING (true) on write operations
  if (/CREATE\s+POLICY[\s\S]{0,160}FOR\s+(?:ALL|UPDATE|DELETE|INSERT)[\s\S]{0,140}(?:USING|WITH\s+CHECK)\s*\(\s*true\s*\)/i.test(sourceText)) {
    pushUnique({
      id: 'SUPA-003-PERMISSIVE-RLS-TRUE',
      severity: 'CRITICAL',
      category: 'SUPABASE_RLS_BOUNDARY',
      cwe: 'CWE-732',
      title: 'Permissive RLS Write Policy ("USING (true)") Allows Cross-Tenant Tampering',
      estimatedMonthlyExposureUsd: 11200,
      impactSummary:
        'Enabling RLS while setting USING (true) or WITH CHECK (true) on INSERT, UPDATE, or DELETE policies creates false compliance: any signed-in user (or anon caller) can overwrite another customer record.',
      trace: {
        entrypoint: 'Authenticated or anon PostgREST PATCH / DELETE request',
        propagation: `${artifactName} evaluates RLS policy predicate (true)`,
        sink: 'Cross-tenant row overwrite or deletion in production Postgres',
        evidenceSnippet: 'CREATE POLICY ... FOR UPDATE/ALL ... USING (true)',
      },
      remediationCode: [
        '-- Drop overly permissive write policy and bind to verified auth.uid()',
        'DROP POLICY IF EXISTS "allow_all_updates" ON public.customer_invoices;',
        'CREATE POLICY "owner_only_update" ON public.customer_invoices',
        '  FOR UPDATE TO authenticated',
        '  USING ((SELECT auth.uid()) = user_id)',
        '  WITH CHECK ((SELECT auth.uid()) = user_id);',
      ].join('\n'),
      cursorFixPrompt:
        'Scan all SQL migrations for RLS policies containing USING (true) or WITH CHECK (true) on INSERT, UPDATE, DELETE, or ALL. Replace every wildcard predicate with strict `(SELECT auth.uid()) = user_id` or verified tenant membership checks.',
    });
  }

  // 4. Unauthenticated LLM / Inference Route (Denial-of-Wallet Sink)
  const callsLlm =
    /\b(?:OpenAI|Anthropic|GoogleGenAI|generateText|streamText|chat\.completions\.create|messages\.create)\b/.test(
      sourceText
    );
  const exportsPost = /export\s+async\s+function\s+POST\b/.test(sourceText);
  const hasAuthGate =
    /\b(?:auth\s*\(|currentUser\s*\(|getServerSession\s*\(|supabase\.auth\.getUser|verifyToken|verifyRescanToken)\b/.test(
      sourceText
    );
  const hasRateLimit = /\b(?:rateLimit|Ratelimit|cf-connecting-ip|x-forwarded-for|slidingWindow)\b/i.test(
    sourceText
  );

  if (callsLlm && exportsPost && (!hasAuthGate || !hasRateLimit)) {
    pushUnique({
      id: 'AI-001-UNAUTH-WALLET-DRAIN',
      severity: 'CRITICAL',
      category: 'UNAUTHENTICATED_AI_SINK',
      cwe: 'CWE-770',
      title: 'Unprotected AI Inference Endpoint Exposed to Automated Wallet Drain',
      estimatedMonthlyExposureUsd: 9600,
      impactSummary:
        'An HTTP POST route invokes a frontier LLM API without both caller authentication and per-IP rate limiting. Automated bots can loop max-context completions against this route and burn thousands of dollars in OpenAI or Anthropic credits overnight.',
      trace: {
        entrypoint: `${artifactName} -> export async function POST(req)`,
        propagation: 'Unthrottled req.json() body forwarded directly into model completion call',
        sink: 'Paid upstream LLM API (chat.completions.create / messages.create / streamText)',
        evidenceSnippet: `POST handler invokes LLM SDK (${!hasAuthGate ? 'no session auth gate' : 'no IP rate limiter'})`,
      },
      remediationCode: [
        'export async function POST(req: Request) {',
        '  const { userId } = await auth();',
        '  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });',
        '',
        '  const rawBody = await req.text();',
        '  if (rawBody.length > 16_384) {',
        '    return NextResponse.json({ error: "Payload exceeds 16KB cap" }, { status: 413 });',
        '  }',
        '  // Enforce per-user / cf-connecting-ip sliding window quota + max_tokens ceiling',
        '}',
      ].join('\n'),
      cursorFixPrompt:
        'Harden every API route calling OpenAI, Anthropic, Gemini, or Vercel AI SDK: require authenticated session verification, enforce a 16KB request body cap, clamp messages array length and max_tokens, and add a per-IP/per-user sliding-window rate limiter returning HTTP 429.',
    });
  }

  // 5. Hardcoded API key or plaintext secret in source/config
  const keyPrefixA = 'sk-' + '[a-zA-Z0-9_-]{20,}';
  const keyPrefixB = 'AIza' + '[0-9A-Za-z_-]{35}';
  const keyPrefixC = 'sbp_' + '[a-zA-Z0-9]{20,}';
  const keyPrefixD = '-{5}BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-{5}';
  const hardcodedSecretRegex = new RegExp(
    `(${keyPrefixA}|${keyPrefixB}|${keyPrefixC}|${keyPrefixD}|apiKey\\s*:\\s*["'][^"'\\s]{12,}["']|PASSWORD["']?\\s*:\\s*["'][^"'\\s]{8,}["'])`,
    'i'
  );

  if (hardcodedSecretRegex.test(sourceText)) {
    pushUnique({
      id: 'SEC-001-INLINE-SECRET',
      severity: 'CRITICAL',
      category: 'SECRET_CREDENTIAL_EXPOSURE',
      cwe: 'CWE-798',
      title: 'Inline API Key or Plaintext Database Credential Found in Source/Config',
      estimatedMonthlyExposureUsd: 15000,
      impactSummary:
        'A literal API credential, database password, or private key is embedded directly inside source or MCP configuration text instead of injected from gitignored runtime secrets.',
      trace: {
        entrypoint: `${artifactName} committed or shared in plaintext`,
        propagation: 'Static credential string copied into build output, git history, or developer logs',
        sink: 'Unauthorized external API billing or direct production database login',
        evidenceSnippet: 'Literal apiKey / PASSWORD / secret token assignment detected in source',
      },
      remediationCode: [
        '// Remove literal credential from source and rotate key immediately:',
        'const apiKey = process.env.UPSTREAM_PROVIDER_API_KEY;',
        'if (!apiKey) {',
        '  throw new Error("Missing UPSTREAM_PROVIDER_API_KEY in server environment");',
        '}',
      ].join('\n'),
      cursorFixPrompt:
        'Remove all hardcoded API keys, tokens, and database passwords from source files and JSON configs. Replace with server-only process.env lookups, verify `.env*.local` is in `.gitignore`, and list every credential that must be rotated.',
    });
  }

  // 6. MCP Server Supply-Chain / Root Filesystem / Unpinned npx -y
  if (/"mcpServers"\s*:/.test(sourceText) || /@modelcontextprotocol/i.test(sourceText)) {
    const hasUnpinnedNpx =
      /"npx"[\s\S]{0,120}"-y"[\s\S]{0,120}"(@?[a-z0-9-_./]+)"/i.test(sourceText) &&
      !/"(@?[a-z0-9-_./]+@\d+\.\d+\.\d+)"/i.test(sourceText);
    const hasRootFsMount = /server-filesystem["']\s*,\s*["'](?:\s*\/|[A-Za-z]:\\|\.\.)["']/i.test(sourceText);

    if (hasUnpinnedNpx || hasRootFsMount) {
      pushUnique({
        id: 'MCP-001-UNPINNED-STDIO-RCE',
        severity: 'CRITICAL',
        category: 'MCP_AGENT_POISONING',
        cwe: 'CWE-829',
        title: hasRootFsMount
          ? 'MCP Server Granted Unrestricted Root Filesystem Access'
          : 'Unpinned "npx -y" MCP Server Executes Unverified Upstream Code',
        estimatedMonthlyExposureUsd: 16400,
        impactSummary:
          'Running MCP servers via `npx -y` without an exact semantic version pin (`@x.y.z`) pulls and executes arbitrary npm registry updates with full host privileges, while mounting `/` exposes `~/.ssh`, `.aws`, and `.env` secrets to indirect prompt injection.',
        trace: {
          entrypoint: `${artifactName} -> mcpServers STDIO process spawn`,
          propagation: 'Indirect prompt injection in untrusted repo/ticket triggers MCP tool invocation',
          sink: hasRootFsMount
            ? 'Host root filesystem read/write (`/` or `C:\\`) -> credential exfiltration'
            : 'Unpinned `npx -y` child_process execution on host machine',
          evidenceSnippet: hasRootFsMount
            ? 'args: ["-y", "@modelcontextprotocol/server-filesystem", "/"]'
            : 'command: "npx", args: ["-y", "<unpinned-package>"]',
        },
        remediationCode: JSON.stringify(
          {
            mcpServers: {
              filesystemScoped: {
                command: 'npx',
                args: [
                  '--no-install',
                  '@modelcontextprotocol/server-filesystem@2026.1.0',
                  './sandbox-workspace-only',
                ],
              },
            },
          },
          null,
          2
        ),
        cursorFixPrompt:
          'Audit `.mcp.json` and lock every MCP package to an exact immutable version (`@x.y.z`), remove `-y` auto-install flags in favor of vetted lockfile dependencies, scope filesystem mounts to an isolated subdirectory, and move inline `env` secrets to OS keychain references.',
      });
    }
  }

  // 7. Webhook Fail-Open Secret Check or Missing Signature Verification
  const looksLikeWebhook = /webhook|checkout\.session\.completed|customer\.subscription/i.test(sourceText);
  const hasConstructEvent = /constructEvent|svix|timingSafeEqual/i.test(sourceText);
  const hasFailOpenSecret = /if\s*\(\s*[a-zA-Z0-9_]{1,64}\s*&&\s*[^)\r\n]{1,160}!==/.test(sourceText);

  if ((looksLikeWebhook && exportsPost && !hasConstructEvent) || hasFailOpenSecret) {
    pushUnique({
      id: 'WEB-001-UNVERIFIED-WEBHOOK',
      severity: 'CRITICAL',
      category: 'WEBHOOK_PAYMENT_SPOOFING',
      cwe: 'CWE-345',
      title: hasFailOpenSecret
        ? 'Fail-Open Auth Conditional (`if (secret && header !== secret)`) Permits Bypass'
        : 'Billing Webhook Processes JSON Events Without Cryptographic Signature Verification',
      estimatedMonthlyExposureUsd: 7800,
      impactSummary:
        'An attacker can POST a forged `checkout.session.completed` JSON payload directly to your webhook URL and grant themselves paid enterprise access without paying a cent.',
      trace: {
        entrypoint: `${artifactName} -> POST webhook handler`,
        propagation: hasFailOpenSecret
          ? 'Missing env var causes `if (secret && ...)` guard to evaluate false and fail open'
          : 'Unverified `await req.json()` trusted without `stripe.webhooks.constructEvent`',
        sink: 'Database entitlement or subscription upgrade mutation',
        evidenceSnippet: hasFailOpenSecret
          ? 'if (secret && req.headers.get(...) !== secret)'
          : 'const event = await req.json() // missing signature check',
      },
      remediationCode: [
        'const sig = req.headers.get("stripe-signature");',
        'const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;',
        'if (!sig || !webhookSecret) {',
        '  return NextResponse.json({ error: "Fail-closed: missing signature or secret" }, { status: 400 });',
        '}',
        'const rawBody = await req.text();',
        'const event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);',
      ].join('\n'),
      cursorFixPrompt:
        'Audit all webhook and internal cron routes. Replace every `req.json()` billing webhook with raw-body `stripe.webhooks.constructEvent(rawBody, sig, secret)` verification, and rewrite every `if (secret && ...)` check so missing server secrets immediately return HTTP 500/401 (fail-closed).',
    });
  }

  // 8. SQL Injection / Command Injection / Prompt Injection Sinks
  if (/\$executeRawUnsafe|\$queryRawUnsafe|child_process[\s\S]{0,120}\bexec\s*\(/i.test(sourceText)) {
    pushUnique({
      id: 'INJ-001-UNSAFE-EXECUTION-SINK',
      severity: 'CRITICAL',
      category: 'MCP_AGENT_POISONING',
      cwe: 'CWE-89',
      title: 'Unsanitized String Interpolation Reaches Raw SQL or Shell Execution Sink',
      estimatedMonthlyExposureUsd: 19200,
      impactSummary:
        'User-controlled or LLM-generated text is interpolated directly into `$executeRawUnsafe`, `$queryRawUnsafe`, or `child_process.exec`, allowing full database exfiltration or remote command execution.',
      trace: {
        entrypoint: `${artifactName} -> external input or model tool argument`,
        propagation: 'Template literal string concatenation bypasses parameterized query binding',
        sink: '$executeRawUnsafe / $queryRawUnsafe / child_process.exec',
        evidenceSnippet: '$executeRawUnsafe(`... ${...} ...`) or exec(...) sink detected',
      },
      remediationCode: [
        '// Replace $executeRawUnsafe string interpolation with parameterized tagged template:',
        'await prisma.$executeRaw`UPDATE users SET plan = ${plan} WHERE email = ${userEmail}`;',
      ].join('\n'),
      cursorFixPrompt:
        'Eliminate every call to `$executeRawUnsafe`, `$queryRawUnsafe`, `eval`, and `child_process.exec` across the repository. Convert SQL queries to parameterized tagged templates (`$executeRaw` / `$queryRaw`) and shell invocations to allowlisted `execFile` arrays.',
    });
  }

  // 9. Prompt Injection + Unbounded Context Array in LLM calls
  if (
    callsLlm &&
    (/\.{3}messages\b/.test(sourceText) || /content:\s*[`"'][^`"']*\$\{|\+\s*prompt\b/.test(sourceText))
  ) {
    pushUnique({
      id: 'AI-002-SYSTEM-PROMPT-CONTAMINATION',
      severity: 'HIGH',
      category: 'UNAUTHENTICATED_AI_SINK',
      cwe: 'CWE-74',
      title: 'Untrusted User Input Concatenated Into System Prompt & Unbounded Message History',
      estimatedMonthlyExposureUsd: 4200,
      impactSummary:
        'Concatenating raw user strings into the `system` role message allows instruction override, while spreading `...messages` directly from `req.json()` lets callers inject fake `assistant`/`system` turns and 100K-token payloads.',
      trace: {
        entrypoint: `${artifactName} -> req.json() { prompt, messages }`,
        propagation: 'System prompt string concatenation + unvalidated `...messages` spread',
        sink: 'LLM completion context window and downstream database update',
        evidenceSnippet: 'messages: [{ role: "system", content: ... + prompt }, ...messages]',
      },
      remediationCode: [
        'const safeHistory = Array.isArray(messages)',
        '  ? messages',
        '      .slice(-12)',
        '      .filter((m) => m.role === "user" || m.role === "assistant")',
        '      .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }))',
        '  : [];',
      ].join('\n'),
      cursorFixPrompt:
        'Separate immutable `system` instructions from untrusted `user` inputs in all LLM calls. Strip any caller-supplied `system` or `tool` roles from `messages`, cap conversation history to the last 12 turns, and enforce a 2,000-character limit per message.',
    });
  }

  // 10. Unescaped dangerouslySetInnerHTML
  if (/dangerouslySetInnerHTML/.test(sourceText) && !/DOMPurify|sanitize|JSON\.stringify/i.test(sourceText)) {
    pushUnique({
      id: 'XSS-001-UNESCAPED-HTML',
      severity: 'HIGH',
      category: 'EDGE_TRANSPORT_HEADERS',
      cwe: 'CWE-79',
      title: 'Unescaped dangerouslySetInnerHTML Renders Untrusted or Model-Generated HTML',
      estimatedMonthlyExposureUsd: 5400,
      impactSummary:
        'Rendering LLM markdown or external fields through `dangerouslySetInnerHTML` without HTML sanitization allows stored or reflected XSS to steal session tokens.',
      trace: {
        entrypoint: `${artifactName} -> dynamic HTML string prop`,
        propagation: 'Bypasses React automatic text escaping without DOMPurify sanitization',
        sink: 'Browser DOM script execution via dangerouslySetInnerHTML',
        evidenceSnippet: 'dangerouslySetInnerHTML={{ __html: ... }} without sanitizer',
      },
      remediationCode: [
        "import DOMPurify from 'isomorphic-dompurify';",
        '// Sanitize before rendering or render structured AST tokens without raw HTML:',
        '<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(untrustedHtml) }} />',
      ].join('\n'),
      cursorFixPrompt:
        'Audit every occurrence of `dangerouslySetInnerHTML`. Keep only static server-controlled JSON-LD `JSON.stringify(...)` blocks and replace dynamic/LLM HTML rendering with structured React token components or `DOMPurify.sanitize`.',
    });
  }
}

async function scanLiveHttpsUrl(
  rawUrl: string,
  findings: SecurityFindingFull[],
  scannedArtifacts: string[]
): Promise<string> {
  const safeUrl = validateSafePublicHttpsUrl(rawUrl);
  const rootRes = await safeFetchResponse(safeUrl, 163840, 6000);
  scannedArtifacts.push(`HTTPS ${rootRes.status} ${rootRes.finalUrl.origin}${rootRes.finalUrl.pathname}`);

  const h = rootRes.headers;
  const csp = h.get('content-security-policy');
  const hsts = h.get('strict-transport-security');
  const xfo = h.get('x-frame-options');
  const xcto = h.get('x-content-type-options');
  const acao = h.get('access-control-allow-origin');
  const acac = h.get('access-control-allow-credentials');

  if (acao === '*' && acac === 'true') {
    findings.push({
      id: 'HDR-001-CORS-CREDENTIALS',
      severity: 'CRITICAL',
      category: 'EDGE_TRANSPORT_HEADERS',
      cwe: 'CWE-942',
      title: 'Wildcard CORS Origin Paired With Credentials Exposure',
      estimatedMonthlyExposureUsd: 8900,
      impactSummary:
        'Returning `Access-Control-Allow-Origin: *` alongside `Access-Control-Allow-Credentials: true` signals misconfigured cross-origin trust that often pairs with reflected Origin headers on authenticated API routes.',
      trace: {
        entrypoint: `Cross-origin browser fetch to ${rootRes.finalUrl.origin}`,
        propagation: 'Permissive CORS response headers allow untrusted origin reads',
        sink: 'Authenticated API response exfiltration',
        evidenceSnippet: 'Access-Control-Allow-Origin: * + Access-Control-Allow-Credentials: true',
      },
      remediationCode: [
        '// Restrict CORS strictly to explicit trusted origins:',
        'const ALLOWED = new Set(["https://app.example.com"]);',
        'const origin = req.headers.get("origin") || "";',
        'if (ALLOWED.has(origin)) headers.set("Access-Control-Allow-Origin", origin);',
      ].join('\n'),
      cursorFixPrompt:
        'Audit middleware and API route CORS headers. Remove wildcard `*` origins on authenticated routes and enforce an explicit origin allowlist.',
    });
  }

  if (!csp) {
    findings.push({
      id: 'HDR-002-MISSING-CSP',
      severity: 'HIGH',
      category: 'EDGE_TRANSPORT_HEADERS',
      cwe: 'CWE-693',
      title: 'Missing Content-Security-Policy (CSP) Leaves Browser Open to Script Exfiltration',
      estimatedMonthlyExposureUsd: 3800,
      impactSummary:
        'Without a Content-Security-Policy header restricting `script-src`, `connect-src`, and `frame-ancestors`, any third-party script or markdown XSS bug can silently exfiltrate session tokens to an external server.',
      trace: {
        entrypoint: `GET ${rootRes.finalUrl.href} HTTP response headers`,
        propagation: 'Browser loads document with zero script-src or connect-src restrictions',
        sink: 'Unrestricted inline script execution and arbitrary outbound data exfiltration',
        evidenceSnippet: 'content-security-policy: <absent>',
      },
      remediationCode: [
        '// In middleware.ts or next.config.ts headers():',
        '{',
        '  key: "Content-Security-Policy",',
        '  value: "default-src \'self\'; script-src \'self\' \'unsafe-inline\'; frame-ancestors \'none\'; base-uri \'self\'; object-src \'none\';"',
        '}',
      ].join('\n'),
      cursorFixPrompt:
        'Add a hardened `Content-Security-Policy` header in `middleware.ts` or `next.config.ts` locking down `default-src`, `frame-ancestors`, `object-src`, and `base-uri` without breaking required analytics or Stripe checkout frames.',
    });
  }

  if (!hsts) {
    findings.push({
      id: 'HDR-003-MISSING-HSTS',
      severity: 'MEDIUM',
      category: 'EDGE_TRANSPORT_HEADERS',
      cwe: 'CWE-319',
      title: 'Missing Strict-Transport-Security (HSTS) Header on Production Domain',
      estimatedMonthlyExposureUsd: 1600,
      impactSummary:
        'Browsers visiting over public Wi-Fi are not instructed to pin HTTPS-only transport (`max-age=63072000; includeSubDomains`), permitting SSL-stripping downgrade attempts on first navigation.',
      trace: {
        entrypoint: `Initial browser navigation to ${rootRes.finalUrl.hostname}`,
        propagation: 'HTTP response omits Strict-Transport-Security enforcement directive',
        sink: 'Cleartext session cookie or bearer token interception risk',
        evidenceSnippet: 'strict-transport-security: <absent>',
      },
      remediationCode:
        '{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }',
      cursorFixPrompt:
        'Configure `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` across all application responses in `middleware.ts`.',
    });
  }

  if (!xfo && (!csp || !/frame-ancestors/i.test(csp))) {
    findings.push({
      id: 'HDR-004-CLICKJACKING',
      severity: 'MEDIUM',
      category: 'EDGE_TRANSPORT_HEADERS',
      cwe: 'CWE-1021',
      title: 'Missing Clickjacking Protection (No X-Frame-Options or CSP frame-ancestors)',
      estimatedMonthlyExposureUsd: 1400,
      impactSummary:
        'Your live application can be embedded inside an invisible attacker `<iframe>` to trick signed-in users into clicking destructive account, API-key, or billing actions.',
      trace: {
        entrypoint: `Cross-origin <iframe src="${rootRes.finalUrl.origin}">`,
        propagation: 'Neither X-Frame-Options nor CSP frame-ancestors blocks framing',
        sink: 'UI redressing / involuntary authenticated state mutation',
        evidenceSnippet: 'x-frame-options: <absent> & frame-ancestors: <absent>',
      },
      remediationCode: '{ key: "X-Frame-Options", value: "DENY" }',
      cursorFixPrompt:
        'Add `X-Frame-Options: DENY` and `frame-ancestors \'none\'` in CSP headers for all authenticated and public application routes.',
    });
  }

  if (!xcto) {
    findings.push({
      id: 'HDR-005-NOSNIFF',
      severity: 'LOW',
      category: 'EDGE_TRANSPORT_HEADERS',
      cwe: 'CWE-16',
      title: 'Missing X-Content-Type-Options: nosniff Header',
      estimatedMonthlyExposureUsd: 650,
      impactSummary:
        'Without `X-Content-Type-Options: nosniff`, browsers can MIME-sniff user-uploaded files into executable HTML/JavaScript.',
      trace: {
        entrypoint: `GET ${rootRes.finalUrl.origin} asset/API responses`,
        propagation: 'Browser MIME-type sniffing enabled by default',
        sink: 'Script execution from uploaded non-HTML content',
        evidenceSnippet: 'x-content-type-options: <absent>',
      },
      remediationCode: '{ key: "X-Content-Type-Options", value: "nosniff" }',
      cursorFixPrompt: 'Set `X-Content-Type-Options: nosniff` globally in `middleware.ts`.',
    });
  }

  // Inspect HTML + up to 2 same-origin JS bundles for exposed Supabase PostgREST or leaked keys
  const combinedClientSources: string[] = [rootRes.bodyText];
  const scriptSrcMatches = [
    ...rootRes.bodyText.matchAll(/<script[^>]+src=["']([^"']+\.js(?:\?[^"']*)?)["']/gi),
  ].slice(0, 2);

  for (const sm of scriptSrcMatches) {
    try {
      const candidateUrl = new URL(sm[1], rootRes.finalUrl);
      if (candidateUrl.origin === rootRes.finalUrl.origin) {
        const safeChunkUrl = validateSafePublicHttpsUrl(candidateUrl.toString());
        const chunkRes = await safeFetchResponse(safeChunkUrl, 98304, 3500);
        if (chunkRes.status === 200 && chunkRes.bodyText) {
          scannedArtifacts.push(`JS Bundle ${safeChunkUrl.pathname.slice(0, 64)}`);
          combinedClientSources.push(chunkRes.bodyText);
        }
      }
    } catch {
      // Ignore unreachable chunk
    }
  }

  const allClientText = combinedClientSources.join('\n');

  if (/sourceMappingURL=[^\s"'<>]{1,512}\.js\.map/i.test(allClientText)) {
    findings.push({
      id: 'SRC-001-PROD-SOURCEMAP',
      severity: 'MEDIUM',
      category: 'SECRET_CREDENTIAL_EXPOSURE',
      cwe: 'CWE-540',
      title: 'Production JavaScript Source Maps Publicly Referenced in Client Bundle',
      estimatedMonthlyExposureUsd: 2100,
      impactSummary:
        'Shipping `.js.map` source maps in production lets competitors and attackers reconstruct your full TypeScript source tree, internal API routes, and business logic comments.',
      trace: {
        entrypoint: `${rootRes.finalUrl.origin} client JS bundle`,
        propagation: '//# sourceMappingURL=*.js.map directive exposed publicly',
        sink: 'Full client source tree reconstruction',
        evidenceSnippet: '//# sourceMappingURL=...js.map',
      },
      remediationCode: '// In next.config.ts:\nproductionBrowserSourceMaps: false,',
      cursorFixPrompt:
        'Disable `productionBrowserSourceMaps` in `next.config.ts` (or upload source maps privately to error monitoring only and delete `.map` files from public static assets).',
    });
  }

  // Check for Supabase URL + anon JWT inside client bundle and probe OpenAPI PostgREST exposure
  const supaUrlMatch = allClientText.match(/https:\/\/([a-z0-9]{15,28})\.supabase\.co/i);
  const jwtMatch = allClientText.match(/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\.[a-zA-Z0-9_-]{30,}\.[a-zA-Z0-9_-]{20,}/);
  if (supaUrlMatch && jwtMatch) {
    const supaOrigin = `https://${supaUrlMatch[1]}.supabase.co`;
    scannedArtifacts.push(`Supabase PostgREST ${supaOrigin}/rest/v1/`);
    try {
      const restUrl = validateSafePublicHttpsUrl(`${supaOrigin}/rest/v1/`);
      const restRes = await safeFetchResponse(restUrl, 65536, 3500, {
        apikey: jwtMatch[0],
        Authorization: `Bearer ${jwtMatch[0]}`,
        Accept: 'application/openapi+json',
      });
      if (restRes.status === 200 && /"definitions"\s*:|"paths"\s*:/.test(restRes.bodyText)) {
        const pathNames = [...restRes.bodyText.matchAll(/"\/([a-zA-Z0-9_]+)"\s*:/g)]
          .map((m) => m[1])
          .filter((p) => p !== 'rpc')
          .slice(0, 6);
        if (pathNames.length > 0) {
          findings.push({
            id: 'SUPA-004-OPENAPI-SCHEMA-EXPOSED',
            severity: 'HIGH',
            category: 'SUPABASE_RLS_BOUNDARY',
            cwe: 'CWE-200',
            title: `Supabase PostgREST Publicly Exposes ${pathNames.length}+ Table Schemas to Anonymous Callers`,
            estimatedMonthlyExposureUsd: 8400,
            impactSummary: `Using the public anon JWT embedded in your frontend bundle, any caller can query ${supaOrigin}/rest/v1/ and enumerate live table definitions (${pathNames.join(', ')}). Any single table missing an RLS policy is immediately dumpable.`,
            trace: {
              entrypoint: `Client JS bundle -> ${supaOrigin} + anon JWT`,
              propagation: 'GET /rest/v1/ with Accept: application/openapi+json returns full database schema',
              sink: `Exposed public PostgREST endpoints: ${pathNames.map((p) => `/${p}`).join(', ')}`,
              evidenceSnippet: `HTTP 200 ${supaOrigin}/rest/v1/ -> paths: [${pathNames.join(', ')}]`,
            },
            remediationCode: [
              '-- Audit every table in public for missing RLS immediately:',
              'SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = \'public\';',
              '-- Restrict PostgREST exposed schemas or revoke anon schema introspection:',
              'REVOKE USAGE ON SCHEMA public FROM anon; -- if all access goes through server routes',
            ].join('\n'),
            cursorFixPrompt: `Audit our Supabase project (${supaOrigin}): list every table in schema \`public\`, verify \`rowsecurity = true\` on 100% of tables, and move sensitive admin/billing tables into a private non-exposed schema.`,
          });
        }
      }
    } catch {
      // Non-fatal if Supabase endpoint rejects introspection
    }
  }

  return rootRes.finalUrl.hostname;
}

async function scanPublicGitHubRepo(
  rawRepoInput: string,
  findings: SecurityFindingFull[],
  scannedArtifacts: string[]
): Promise<string> {
  const cleaned = rawRepoInput
    .trim()
    .replace(/^https?:\/\/github\.com\//i, '')
    .replace(/\.git$/i, '')
    .replace(/\/+$/, '');
  const parts = cleaned.split('/').filter(Boolean);
  if (parts.length < 2 || !/^[a-zA-Z0-9_.-]+$/.test(parts[0]) || !/^[a-zA-Z0-9_.-]+$/.test(parts[1])) {
    throw new Error('Enter a valid public GitHub repository (for example, https://github.com/owner/repo).');
  }

  const repoSlug = `${parts[0]}/${parts[1]}`;
  const repoMetaUrl = validateSafePublicHttpsUrl(`https://api.github.com/repos/${repoSlug}`);
  const metaRes = await safeFetchResponse(repoMetaUrl, 65536, 5000);
  if (metaRes.status === 404) {
    throw new Error(
      `GitHub repository "${repoSlug}" was not found or is private. Paste your route, SQL, or .mcp.json in the Code tab to scan private repos safely.`
    );
  }
  if (metaRes.status !== 200) {
    throw new Error(`GitHub API returned HTTP ${metaRes.status} for ${repoSlug}.`);
  }

  const metaJson = JSON.parse(metaRes.bodyText) as { default_branch?: string };
  const branch = metaJson.default_branch || 'main';
  scannedArtifacts.push(`github:${repoSlug}@${branch}`);

  const treeUrl = validateSafePublicHttpsUrl(
    `https://api.github.com/repos/${repoSlug}/git/trees/${encodeURIComponent(branch)}?recursive=1`
  );
  const treeRes = await safeFetchResponse(treeUrl, 262144, 5500);
  if (treeRes.status === 200) {
    let treeJson: { tree?: Array<{ path?: string; type?: string; size?: number }> } = {};
    try {
      treeJson = JSON.parse(treeRes.bodyText) as {
        tree?: Array<{ path?: string; type?: string; size?: number }>;
      };
    } catch {
      treeJson = { tree: [] };
    }
    const blobs = (treeJson.tree || []).filter((n) => n.type === 'blob' && typeof n.path === 'string');

    // Flag committed .env files in public GitHub tree!
    const committedEnv = blobs.find(
      (b) =>
        /(?:^|\/)\.env(?:\.local|\.production|\.development)?$/i.test(b.path || '') &&
        !/example|sample|template/i.test(b.path || '')
    );
    if (committedEnv?.path) {
      findings.push({
        id: 'GIT-001-COMMITTED-DOTENV',
        severity: 'CRITICAL',
        category: 'SECRET_CREDENTIAL_EXPOSURE',
        cwe: 'CWE-538',
        title: `Environment File "${committedEnv.path}" Committed Directly to Public GitHub Repo`,
        estimatedMonthlyExposureUsd: 22000,
        impactSummary: `A live environment file (${committedEnv.path}) is tracked in public git history on ${repoSlug}. Secret scanners harvest public GitHub commits within 60 seconds of push.`,
        trace: {
          entrypoint: `Public GitHub tree ${repoSlug}@${branch}`,
          propagation: `${committedEnv.path} committed without .gitignore exclusion`,
          sink: 'Public credential harvesting bots and unauthorized cloud/API access',
          evidenceSnippet: `Tracked blob in public git tree: ${committedEnv.path}`,
        },
        remediationCode: [
          '# 1. Rotate every key that ever appeared in that file immediately.',
          `git rm --cached ${committedEnv.path}`,
          'echo ".env*" >> .gitignore',
          'echo "!.env.example" >> .gitignore',
        ].join('\n'),
        cursorFixPrompt: `Remove ${committedEnv.path} from git tracking, harden .gitignore to block all .env* files except .env.example, and audit git log for leaked keys requiring rotation.`,
      });
    }

    // Prioritize high-signal files to inspect
    const candidateFiles = blobs
      .filter((b) => {
        const p = b.path || '';
        return (
          (b.size || 0) <= 65536 &&
          (/(?:^|\/)(?:\.mcp\.json|mcp\.json|package\.json|middleware\.ts)$/i.test(p) ||
            /app\/api\/.*\/route\.(?:ts|js)$/i.test(p) ||
            /supabase\/migrations\/.*\.sql$/i.test(p))
        );
      })
      .slice(0, 5);

    for (const file of candidateFiles) {
      if (!file.path) continue;
      try {
        const rawFileUrl = validateSafePublicHttpsUrl(
          `https://raw.githubusercontent.com/${repoSlug}/${encodeURIComponent(branch)}/${file.path}`
        );
        const fileRes = await safeFetchResponse(rawFileUrl, 65536, 4000);
        if (fileRes.status === 200 && fileRes.bodyText) {
          scannedArtifacts.push(file.path);
          analyzeSourceBundleOrCode(fileRes.bodyText, file.path, findings);
        }
      } catch {
        // Continue scanning remaining files
      }
    }

    const hasMiddleware = blobs.some((b) => /^(?:src\/)?middleware\.(?:ts|js)$/i.test(b.path || ''));
    const hasApiRoutes = blobs.some((b) => /app\/api\/.*\/route\.(?:ts|js)$/i.test(b.path || ''));
    if (hasApiRoutes && !hasMiddleware) {
      findings.push({
        id: 'GIT-002-NO-EDGE-MIDDLEWARE',
        severity: 'MEDIUM',
        category: 'EDGE_TRANSPORT_HEADERS',
        cwe: 'CWE-693',
        title: 'Next.js App Exposes /app/api Routes With No Global middleware.ts Perimeter',
        estimatedMonthlyExposureUsd: 2400,
        impactSummary:
          'This repository exposes server API route handlers without a central `middleware.ts` enforcing security headers, auth session boundaries, or bot throttling.',
        trace: {
          entrypoint: `${repoSlug} -> app/api/*/route.ts`,
          propagation: 'No root middleware.ts perimeter intercepting inbound edge requests',
          sink: 'Individual route handlers must each remember auth, CORS, and CSP headers',
          evidenceSnippet: 'app/api/**/route.ts present; middleware.ts absent from tree',
        },
        remediationCode:
          '// Create middleware.ts to enforce CSP, HSTS, X-Frame-Options, and route auth matchers centrally.',
        cursorFixPrompt:
          'Create a root `middleware.ts` enforcing HSTS, CSP, X-Frame-Options: DENY, X-Content-Type-Options: nosniff, and centralized authentication guards across protected `/api/*` and dashboard routes.',
      });
    }
  }

  return `github.com/${repoSlug}`;
}

const SEVERITY_ORDER: Record<FindingSeverity, number> = {
  CRITICAL: 0,
  HIGH: 1,
  MEDIUM: 2,
  LOW: 3,
};

const SEVERITY_DEDUCTION: Record<FindingSeverity, number> = {
  CRITICAL: 26,
  HIGH: 14,
  MEDIUM: 7,
  LOW: 3,
};

function computeScoreAndGrade(findings: SecurityFindingFull[]): {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  verdictLabel: string;
} {
  if (findings.length === 0) {
    return {
      score: 96,
      grade: 'A',
      verdictLabel: 'Passes Baseline Automated Perimeter Checks',
    };
  }

  const totalDeduction = findings.reduce((acc, f) => acc + SEVERITY_DEDUCTION[f.severity], 0);
  const score = Math.max(8, Math.min(95, 100 - totalDeduction));

  if (score >= 88) {
    return { score, grade: 'A', verdictLabel: 'Low Exposure - Ready for Buyer Security Review' };
  }
  if (score >= 75) {
    return { score, grade: 'B', verdictLabel: 'Moderate Hardening Needed Before Enterprise Sign-Off' };
  }
  if (score >= 58) {
    return { score, grade: 'C', verdictLabel: 'Elevated Risk - Fails SOC2 / Enterprise Vendor Triage' };
  }
  if (score >= 40) {
    return { score, grade: 'D', verdictLabel: 'High Breach & Wallet-Drain Exposure Detected' };
  }
  return { score, grade: 'F', verdictLabel: 'Critical Exposure - Immediate Production Remediation Required' };
}

export async function runVibeSecurityScan(input: VibeScanInput): Promise<VibeScanSealedPayload> {
  const focusProfile: ScanFocusProfile = input.focusProfile || 'full';
  const findings: SecurityFindingFull[] = [];
  const scannedArtifacts: string[] = [];
  let targetLabel = 'Pasted Source / Config';

  if (input.mode === 'url') {
    if (!input.targetUrl?.trim()) {
      throw new Error('Enter a live https:// application URL to scan.');
    }
    targetLabel = await scanLiveHttpsUrl(input.targetUrl, findings, scannedArtifacts);
    if (input.codeSnippet?.trim()) {
      scannedArtifacts.push('Supplemental Pasted Snippet');
      analyzeSourceBundleOrCode(input.codeSnippet, 'Pasted Snippet', findings);
    }
  } else if (input.mode === 'github') {
    if (!input.targetUrl?.trim()) {
      throw new Error('Enter a public GitHub repository URL (https://github.com/owner/repo).');
    }
    targetLabel = await scanPublicGitHubRepo(input.targetUrl, findings, scannedArtifacts);
  } else {
    const snippet = (input.codeSnippet || '').trim();
    if (snippet.length < 16) {
      throw new Error('Paste at least 16 characters of .mcp.json, SQL migration, package.json, or API route code.');
    }
    scannedArtifacts.push('Pasted Code / Config Artifact');
    analyzeSourceBundleOrCode(snippet, 'Pasted Artifact', findings);
    if (/mcpServers/i.test(snippet)) {
      targetLabel = '.mcp.json Agent Manifest';
    } else if (/CREATE\s+TABLE|CREATE\s+POLICY/i.test(snippet)) {
      targetLabel = 'Supabase / Postgres SQL Schema';
    } else if (/export\s+async\s+function\s+(?:POST|GET)/i.test(snippet)) {
      targetLabel = 'Next.js Server Route Handler';
    } else {
      targetLabel = 'Application Source Artifact';
    }
  }

  // Canonical ordering guarantees `findings[0]` (`freeFinding`) cannot be rotated across
  // `focusProfile` values to reveal multiple unpaid traces on the same target.
  findings.sort(
    (a, b) =>
      SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity] || a.id.localeCompare(b.id)
  );
  if (findings.length > 2 && focusProfile !== 'full') {
    const head = findings[0];
    const tail = findings.slice(1).sort((a, b) => {
      const targetCategory =
        focusProfile === 'supabase-rls' ? 'SUPABASE_RLS_BOUNDARY' : 'MCP_AGENT_POISONING';
      const aMatch = a.category === targetCategory ? 0 : 1;
      const bMatch = b.category === targetCategory ? 0 : 1;
      if (aMatch !== bMatch) return aMatch - bMatch;
      return SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity] || a.id.localeCompare(b.id);
    });
    findings.splice(0, findings.length, head, ...tail);
  }

  const { score, grade, verdictLabel } = computeScoreAndGrade(findings);
  const estimatedMonthlyExposureUsd = findings.reduce(
    (sum, f) => sum + f.estimatedMonthlyExposureUsd,
    0
  );

  return {
    targetLabel,
    mode: input.mode,
    focusProfile,
    scannedAt: new Date().toISOString(),
    score,
    grade,
    verdictLabel,
    estimatedMonthlyExposureUsd,
    scannedArtifacts,
    findings,
  };
}

export function buildPublicVibeScanResponse(
  runId: string,
  payload: VibeScanSealedPayload,
  sealedEnvelope: string
): VibeScanPublicResponse {
  const severityCounts: Record<FindingSeverity, number> = {
    CRITICAL: 0,
    HIGH: 0,
    MEDIUM: 0,
    LOW: 0,
  };
  for (const f of payload.findings) {
    severityCounts[f.severity]++;
  }

  const freeFinding = payload.findings.length > 0 ? payload.findings[0] : null;
  const lockedStubs: SecurityFindingStub[] = payload.findings.slice(1).map((f) => ({
    id: f.id,
    severity: f.severity,
    category: f.category,
    cwe: f.cwe,
    title: f.title,
    estimatedMonthlyExposureUsd: f.estimatedMonthlyExposureUsd,
  }));

  return {
    runId,
    targetLabel: payload.targetLabel,
    mode: payload.mode,
    scannedAt: payload.scannedAt,
    score: payload.score,
    grade: payload.grade,
    verdictLabel: payload.verdictLabel,
    estimatedMonthlyExposureUsd: payload.estimatedMonthlyExposureUsd,
    scannedArtifacts: payload.scannedArtifacts,
    severityCounts,
    freeFinding,
    lockedStubs,
    sealedEnvelope,
  };
}
