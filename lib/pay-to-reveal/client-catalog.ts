/**
 * Client-Safe Public Catalog & Shared Type Contracts for ADR-0021 Pay-to-Reveal Products
 *
 * SECURITY BOUNDARY INVARIANT:
 * `'use client'` components MUST import shared types and UI presets strictly from this
 * module and NEVER from `vibe-security-engine.ts`, `department-playbook-engine.ts`,
 * `sealed-envelope.ts`, or `xlsx-compiler.ts`. This guarantees zero server-only SOP
 * blueprints or remediation payloads ever enter `_next/static/chunks/*.js`.
 */

export type ScanMode = 'url' | 'github' | 'code';
export type ScanFocusProfile = 'full' | 'supabase-rls' | 'mcp-agent';
export type FindingSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface BadgeTokenClaims {
  v: 1;
  auditId: string;
  target: string;
  score: number;
  grade: string;
  criticalCount: number;
  highCount: number;
  issuedAt: string;
  expiresAt: string;
  exp: number;
}

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
    | 'EDGE_HEADER_POSTURE'
    | 'SQL_INJECTION_SINK';
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

export type DepartmentId = 'finance' | 'operations' | 'support' | 'hr' | 'small_business';

export interface PlaybookCompileInput {
  department: DepartmentId;
  headcount: number;
  avgLoadedHourlyUsd: number;
  monthlyVolume: number;
  softwareStack: string[];
}

export interface GovernedSopFull {
  sopNumber: number;
  code: string;
  department: DepartmentId;
  departmentLabel: string;
  title: string;
  ownerRole: string;
  approverRole: string;
  riskTier: 'HIGH_CONTROL' | 'GUARDED' | 'LOW_RISK';
  monthlyHoursSaved: number;
  monthlyDollarRecovery: number;
  triggerCondition: string;
  autonomousSteps: string[];
  hardStopBoundary: string;
  humanSignOffRule: string;
  sanitizedPromptTemplate: string;
  auditTrailSpec: string;
}

export interface GovernedSopStub {
  sopNumber: number;
  code: string;
  title: string;
  ownerRole: string;
  riskTier: GovernedSopFull['riskTier'];
  monthlyHoursSaved: number;
  monthlyDollarRecovery: number;
}

export interface DepartmentPlaybookSealedPayload {
  department: DepartmentId;
  departmentLabel: string;
  buyerTitles: string;
  compiledAt: string;
  headcount: number;
  avgLoadedHourlyUsd: number;
  monthlyVolume: number;
  softwareStack: string[];
  monthlyRecoverableUsd: number;
  annualRecoverableUsd: number;
  monthlyHoursRecovered: number;
  estimatedMonthlyTokenCostUsd: number;
  netAnnualSavingsUsd: number;
  redLineWarning: {
    headline: string;
    controlStandard: string;
    prohibitedAction: string;
    financialConsequence: string;
    mandatoryGate: string;
  };
  sops: GovernedSopFull[];
  allDepartmentsBundle: Record<DepartmentId, GovernedSopFull[]>;
}

export interface DepartmentPlaybookPublicResponse {
  runId: string;
  department: DepartmentId;
  departmentLabel: string;
  buyerTitles: string;
  compiledAt: string;
  headcount: number;
  avgLoadedHourlyUsd: number;
  monthlyVolume: number;
  softwareStack: string[];
  monthlyRecoverableUsd: number;
  annualRecoverableUsd: number;
  monthlyHoursRecovered: number;
  estimatedMonthlyTokenCostUsd: number;
  netAnnualSavingsUsd: number;
  redLineWarning: DepartmentPlaybookSealedPayload['redLineWarning'];
  freeSop: GovernedSopFull;
  lockedSopStubs: GovernedSopStub[];
  workbookTabPreview: string[];
  sealedEnvelope: string;
}

export const DEPARTMENT_CATALOG: Record<
  DepartmentId,
  {
    label: string;
    buyerTitles: string;
    defaultHeadcount: number;
    defaultHourlyUsd: number;
    defaultMonthlyVolume: number;
    volumeUnitLabel: string;
    recommendedStack: string[];
  }
> = {
  finance: {
    label: 'Finance & Month-End Close',
    buyerTitles: 'CFO, VP of Finance, Controller, Director of Accounting',
    defaultHeadcount: 8,
    defaultHourlyUsd: 78,
    defaultMonthlyVolume: 1200,
    volumeUnitLabel: 'Monthly Invoices, Close Entries & Vendor Bills',
    recommendedStack: ['NetSuite', 'Ramp', 'Stripe', 'Excel', 'Slack'],
  },
  operations: {
    label: 'Operations, Vendors & Procurement',
    buyerTitles: 'COO, VP of Operations, Director of Supply Chain, Procurement Lead',
    defaultHeadcount: 12,
    defaultHourlyUsd: 62,
    defaultMonthlyVolume: 1800,
    volumeUnitLabel: 'Monthly POs, Vendor Renewals & Ops Exceptions',
    recommendedStack: ['Salesforce', 'Jira', 'Ramp', 'Google Sheets', 'Slack'],
  },
  support: {
    label: 'Customer Support & Revenue Retention',
    buyerTitles: 'Customer Support Manager, VP of Customer Experience, RevOps Lead',
    defaultHeadcount: 15,
    defaultHourlyUsd: 44,
    defaultMonthlyVolume: 6500,
    volumeUnitLabel: 'Monthly Support Tickets, Refund Requests & Escalations',
    recommendedStack: ['Zendesk', 'Stripe', 'Salesforce', 'Slack', 'Jira'],
  },
  hr: {
    label: 'HR, Recruiting & People Operations',
    buyerTitles: 'HR Director, VP of People, Talent Acquisition Lead, People Ops Manager',
    defaultHeadcount: 6,
    defaultHourlyUsd: 64,
    defaultMonthlyVolume: 900,
    volumeUnitLabel: 'Monthly Candidate Screens, Onboarding Packets & Policy Queries',
    recommendedStack: ['Workday', 'Greenhouse', 'Slack', 'Google Sheets', 'Excel'],
  },
  small_business: {
    label: 'Owner-Led Small Business Floor',
    buyerTitles: 'CEO, Founder, General Manager, Operations Manager',
    defaultHeadcount: 10,
    defaultHourlyUsd: 52,
    defaultMonthlyVolume: 1400,
    volumeUnitLabel: 'Monthly Quotes, Collections, Schedules & Customer Replies',
    recommendedStack: ['QuickBooks', 'Stripe', 'HubSpot', 'Excel', 'Slack'],
  },
};

export const AVAILABLE_STACK_TOOLS = [
  'NetSuite',
  'QuickBooks',
  'Ramp',
  'Stripe',
  'Zendesk',
  'Intercom',
  'Salesforce',
  'HubSpot',
  'Workday',
  'Greenhouse',
  'Jira',
  'Slack',
  'Excel',
  'Google Sheets',
] as const;
