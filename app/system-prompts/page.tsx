import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.richardewing.io/system-prompts' },
  title: 'AGENTS.md, SPEC.md & AI System Prompts',
  description:
    'Copy-paste starter AGENTS.md, SPEC.md, Supabase RLS security audit prompts, and CFO unit-economics templates for Cursor, Claude Code, and Antigravity.',
  openGraph: {
    title: 'AGENTS.md, SPEC.md & AI System Prompts | Richard Ewing',
    description:
      'Copy-paste AGENTS.md, SPEC.md, Supabase RLS audit prompts, and executive P&L system instructions.',
    url: 'https://www.richardewing.io/system-prompts',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=AGENTS.md%2C%20SPEC.md%20%26%20AI%20System%20Prompts&category=Starter%20Templates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGENTS.md, SPEC.md & AI System Prompts | Richard Ewing',
    description:
      'Copy-paste AGENTS.md, SPEC.md, Supabase RLS audit prompts, and CFO unit-economics system instructions.',
    images: [
      'https://www.richardewing.io/api/og?title=AGENTS.md%2C%20SPEC.md%20%26%20AI%20System%20Prompts&category=Starter%20Templates',
    ],
  },
};

const vibeTemplates = [
  {
    id: 'starter-agents-md',
    title: 'Starter AGENTS.md (Blast-Radius & Secret Guard)',
    audience: 'Founders, CTOs & Engineering Managers',
    description:
      'Drop into your repository root so Cursor, Claude Code, and Google Antigravity stop rewriting auth, Stripe billing, or leaking secrets.',
    validatorHref: '/tools/spec-quality-scorecard',
    validatorLabel: 'Score Your AGENTS.md in 60s →',
    template: `# AGENTS.md - Repository Execution Contract

## 1. Non-Negotiable Blast-Radius Guards (DO NOT TOUCH)
- NEVER modify authentication middleware, Stripe webhook signature checks, or database migrations without explicit human sign-off.
- NEVER place API keys, database URLs, or service_role tokens in client components, NEXT_PUBLIC_ variables, or test fixtures.
- NEVER inject fake fallback data or mock success responses inside production catch blocks. Return honest HTTP status codes.

## 2. Architecture & State Rules
- Server Components by default; isolate browser hooks and state in leaf "use client" components.
- Derive user_id and tenant_id strictly from verified server session tokens, never from request JSON bodies or query params.
- Cap automatic LLM SDK retries at 2 attempts and enforce per-workspace daily token ceilings.

## 3. Mandatory Pre-Commit Verification Gate
1. Run strict TypeScript check: npx tsc --noEmit
2. Run test suite for touched routes before reporting completion.
3. Verify git diff contains zero unintended edits outside the scoped feature files.`,
  },
  {
    id: 'starter-spec-md',
    title: 'Starter SPEC.md (Feature Contract Before Coding)',
    audience: 'CPOs, Product Ops Leads & Builders',
    description:
      'Force AI coding agents to agree on inputs, failure states, and out-of-scope files before generating a single line of application code.',
    validatorHref: '/tools/spec-quality-scorecard',
    validatorLabel: 'Validate Your SPEC.md →',
    template: `# SPEC.md - Feature Specification Contract

## 1. Operational Goal & User Outcome
- Target Role: [e.g., Customer Support Manager / CFO / SaaS Admin]
- Concrete Job-to-be-Done: [One plain-English sentence describing what changes for the user]

## 2. Explicit Out-of-Scope Files (Forbidden Zone)
- Forbidden Paths: [e.g., app/api/webhooks/stripe/*, middleware.ts, supabase/migrations/*]

## 3. Data & Security Invariants
- Auth Requirement: [Public / Authenticated Session / Org Admin]
- Row-Level Security Policy: [Exact auth.uid() = user_id or org_members check]
- Token / Cost Ceiling: [Max input/output tokens + HTTP 429 rate limit]

## 4. Failure Modes & Edge Cases
- Empty or malformed input -> Return HTTP 400 with field-level validation message.
- Upstream LLM timeout (>8s) -> Return HTTP 504 without charging user credits.
- Mobile viewport (375px) -> Zero horizontal scroll, sticky primary action visible.

## 5. Acceptance Checklist
- [ ] Unit + integration test covering happy path and unauthorized tenant rejection
- [ ] TypeScript strict build passes with zero errors`,
  },
  {
    id: 'supabase-rls-security-audit',
    title: 'Supabase Row-Level Security (RLS) & Webhook Forensic Prompt',
    audience: 'Founders, CISOs & Lead Engineers',
    description:
      'Run against your schema and API folder before launch to catch wide-open public tables, horizontal tenant leaks, and Stripe spoofing.',
    validatorHref: '/tools/vibe-coding-checklist',
    validatorLabel: 'Run 20-Point Launch Checklist →',
    template: `Act as an adversarial application security auditor reviewing a Next.js + Supabase + Stripe codebase before public launch.

Inspect all SQL migrations, API route handlers, and environment variable references. Flag every file and line number where any of the following defects exist:
1. Any table in the public schema missing ENABLE ROW LEVEL SECURITY or using USING (true) on SELECT/INSERT/UPDATE/DELETE.
2. Any reference to SUPABASE_SERVICE_ROLE_KEY outside strictly server-only modules, or any secret prefixed with NEXT_PUBLIC_ or VITE_.
3. Any API route reading userId, orgId, plan, or credits from req.json() or searchParams instead of the verified server auth session.
4. Stripe webhook handlers missing stripe.webhooks.constructEvent() signature verification or missing event.id idempotency deduplication.
5. LLM API routes missing per-user rate limits, token max_tokens bounds, or silent infinite retry loops.

Output a severity-ranked remediation table (CRITICAL / HIGH / MEDIUM) with exact SQL or TypeScript patches for each finding.`,
  },
];

const executivePrompts = [
  {
    id: 'tech-debt-financializer',
    title: 'Technical Debt Financializer',
    audience: 'CTOs, VPs of Engineering & CFOs',
    description:
      'Translates Jira backlogs and incident logs into CFO-ready financial impact statements (maintenance OpEx drag and insolvency runway).',
    prompt: `You are an IT Financial Auditor translating engineering maintenance debt into strict P&L terms for a CFO and CEO.

Do NOT use vague phrases like "code quality," "clean architecture," or "developer experience."
Quantify:
1. Maintenance Cost (Annual OpEx drag in dollars assuming $165,000 loaded cost per engineer).
2. Opportunity Cost (Delayed net-new product capabilities and ARR impact).
3. Incident Exposure (Expected revenue and SLA credit loss from a Sev-1 outage).
4. Technical Insolvency Date (The exact quarter when maintenance consumes 100% of sprint capacity).

Format the output as a one-page board memo followed by an executive summary table.

Inputs:
[INSERT SPRINT ALLOCATION & BACKLOG ITEMS HERE]`,
  },
  {
    id: 'ai-margin-calculator',
    title: 'AI Feature Gross Margin Stress-Tester',
    audience: 'CPOs, VPs of Product & FinOps Managers',
    description:
      'Audits proposed AI features for P90/P99 power-user margin inversion before engineering commits sprint capacity.',
    prompt: `Audit the following proposed AI SaaS feature for gross margin sustainability across P50, P90, and P99 customer usage cohorts.

Given our model choice, input/output token counts, tool-call retry rate, and monthly seat price, calculate:
1. Raw inference cost per completed user workflow (including tool-schema context overhead).
2. Monthly seat cost at P50 (120 runs), P90 (650 runs), and P99 (2,400 runs).
3. The exact monthly usage count where a $29, $49, or $99 seat turns gross-margin negative.
4. Concrete architectural fixes: 75% prefix prompt caching, 80/20 Flash model routing, and pooled workspace credit caps.

Feature PRD:
[INSERT AI FEATURE SPEC & PRICING TIER HERE]`,
  },
  {
    id: 'sunset-protocol-drafter',
    title: 'Zombie Feature Sunset Memo',
    audience: 'CPOs, Product Directors & COOs',
    description:
      'Drafts the financial justification and customer transition plan for retiring low-adoption, high-maintenance features.',
    prompt: `Draft a crisp executive Sunset Memo for retiring an underused software feature that drains ongoing engineering maintenance and cloud spend.

Include:
1. Annual Negative Carry (engineering hours + cloud/inference cost vs actual ARR retained).
2. Velocity Recovery (roadmap capacity freed for core customer priorities).
3. 60-day deprecation schedule with data export safe harbors.
4. Plain-English email from the Customer Support Manager to the <3% of active accounts, showing the faster workflow replacing it.

Feature telemetry:
[INSERT FEATURE ADOPTION & COST METRICS HERE]`,
  },
];

export default function SystemPromptsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where do AGENTS.md and SPEC.md live in my repository?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Place AGENTS.md in your repository root so Cursor, Claude Code, and Google Antigravity load your blast-radius and security rules automatically on every turn. Place SPEC.md in the root or docs/specs/ directory before starting each feature.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I test if my AGENTS.md and app are safe for paying customers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Paste your spec into the free AGENTS.md & SPEC.md Audit Scorecard (/tools/spec-quality-scorecard) and run the 20-point Vibe-Coded App Launch & Security Checklist (/tools/vibe-coding-checklist) before enabling live Stripe checkout.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are system prompts alone insufficient for production AI governance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prompts are advisory text instructions that probabilistic models can ignore under context pressure or prompt injection. Production systems require deterministic server-side session checks, Row-Level Security, token circuit breakers, and runtime proxies such as Exogram.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where can I get the complete production AGENTS.md, SPEC.md, and Excel P&L models?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The full production-tested template suite and 5 editable Excel/CSV AI pricing and P&L models are included in The Builder, PM & Operator Survival Kit at /operating-kit.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1e2924] pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#66716a]">
          <Link href="/" className="hover:text-[#162e26]">Home</Link>
          <span>/</span>
          <span className="font-bold text-[#162e26]">AGENTS.md, SPEC.md &amp; Prompts</span>
        </nav>

        <header className="space-y-5 border-b border-[#24332b]/12 pb-10">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
            Copy-Paste Repository Contracts &amp; Executive Prompts
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#162e26] leading-[1.1]">
            AGENTS.md, SPEC.md &amp; Executive AI Prompts
          </h1>
          <p
            itemProp="description"
            className="text-lg text-[#4a5850] leading-relaxed max-w-3xl"
          >
            Starter repository guardrails and financial audit prompts for Founders, CTOs, CPOs, CFOs, and Product Ops Leads. Lock down Cursor, Claude Code, and Google Antigravity before shipping to paying customers, then validate your setup in our interactive scorecards.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/tools/spec-quality-scorecard"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#162e26] hover:bg-[#29473b] text-white font-bold text-sm transition-all"
            >
              Score Your AGENTS.md &amp; SPEC.md <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools/vibe-coding-checklist"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#24332b]/20 hover:border-[#162e26] text-[#162e26] font-bold text-sm transition-all"
            >
              Run 20-Point Vibe App Launch Audit →
            </Link>
          </div>
        </header>

        {/* Section 1: Vibe-to-Production Starter Templates */}
        <section id="vibe-production-templates" className="space-y-8 scroll-mt-28">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
              Part 01 · Vibe-to-Production Guardrails
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-1">
              Copy-Paste AGENTS.md, SPEC.md &amp; Supabase RLS Audit Templates
            </h2>
          </div>

          <div className="space-y-8">
            {vibeTemplates.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="rounded-3xl bg-white border border-[#24332b]/15 p-6 sm:p-8 shadow-sm space-y-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#162e26]/10 text-xs font-mono font-bold text-[#162e26]">
                      For {item.audience}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#162e26]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4a5850] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href={item.validatorHref}
                    className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#b77a35] hover:opacity-95 text-white text-xs font-bold transition-all shrink-0"
                  >
                    {item.validatorLabel}
                  </Link>
                </div>

                <div className="rounded-2xl bg-[#FAF9F6] border border-[#24332b]/15 p-5 overflow-x-auto">
                  <pre className="font-mono text-xs sm:text-sm text-[#1e2924] whitespace-pre-wrap leading-relaxed">
                    {item.template}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Executive Financial & Portfolio Prompts */}
        <section className="space-y-8 pt-6 border-t border-[#24332b]/12">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
              Part 02 · CFO, CPO &amp; CTO Financial Prompts
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-1">
              Executive P&amp;L &amp; Portfolio Audit Prompts
            </h2>
          </div>

          <div className="space-y-8">
            {executivePrompts.map((p) => (
              <div
                key={p.id}
                className="rounded-3xl bg-white border border-[#24332b]/15 p-6 sm:p-8 shadow-sm space-y-4"
              >
                <div className="space-y-1.5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#b77a35]/12 text-xs font-mono font-bold text-[#8a571d]">
                    For {p.audience}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#162e26]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#4a5850]">{p.description}</p>
                </div>

                <div className="rounded-2xl bg-[#FAF9F6] border border-[#24332b]/15 p-5 overflow-x-auto">
                  <pre className="font-mono text-xs sm:text-sm text-[#1e2924] whitespace-pre-wrap leading-relaxed">
                    {p.prompt}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-8 border-t border-[#24332b]/12 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#162e26] text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <FAQItem
              question="Where do AGENTS.md and SPEC.md live in my repository?"
              answer="Place AGENTS.md in your repository root so Cursor, Claude Code, and Google Antigravity load your blast-radius and security rules automatically on every turn. Place SPEC.md in the root or docs/specs/ directory before starting each feature."
            />
            <FAQItem
              question="How do I test if my AGENTS.md and app are safe for paying customers?"
              answer="Paste your spec into the free AGENTS.md & SPEC.md Audit Scorecard (/tools/spec-quality-scorecard) and run the 20-point Vibe-Coded App Launch & Security Checklist (/tools/vibe-coding-checklist) before enabling live Stripe checkout."
            />
            <FAQItem
              question="Why are system prompts alone insufficient for production AI governance?"
              answer="Prompts are advisory text instructions that probabilistic models can ignore under context pressure or prompt injection. Production systems require deterministic server-side session checks, Row-Level Security, token circuit breakers, and runtime proxies such as Exogram."
            />
            <FAQItem
              question="Where can I get the complete AGENTS.md, SPEC.md, and Excel P&L models?"
              answer="The full field-tested template suite and 5 editable Excel/CSV AI pricing and P&L models are included in The Builder, PM & Operator Survival Kit at /operating-kit."
            />
          </div>
        </section>

        {/* Conversion Banner */}
        <section className="rounded-3xl bg-[#162e26] text-white p-8 sm:p-10 text-center space-y-5">
          <h2 className="font-serif text-3xl font-bold">
            Need the Full Editable Kit or a Live Code &amp; Pricing Review?
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Download all 5 Excel P&amp;L models and full repository templates in the $29 Survival Kit, or book a hands-on diagnostic sprint.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-1">
            <Link
              href="/operating-kit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#b77a35] hover:opacity-95 text-white font-bold text-sm rounded-xl transition-all"
            >
              Get the $29 Survival Kit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl transition-all"
            >
              View $450 Unstick &amp; Build Sprints →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
