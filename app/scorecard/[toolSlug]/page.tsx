import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, CheckCircle2, Calculator } from 'lucide-react';

const TOOL_CATALOG: Record<string, { name: string; summary: string }> = {
  'aueb': {
    name: 'AI Credit vs Seat Calculator (AUEB)',
    summary: 'Stress-test flat SaaS seat pricing against AI credit consumption and token inference costs.',
  },
  'ai-feature-margin': {
    name: 'Claude & OpenAI API Margin Calculator',
    summary: 'Model feature-level unit gross margins across P50, P90, and P99 customer token cohorts.',
  },
  'slm-vs-api': {
    name: 'Self-Host LLM vs API Cost Calculator',
    summary: 'Find the daily query volume where dedicated GPU clusters beat proprietary cloud LLM APIs.',
  },
  'spec-quality-scorecard': {
    name: 'AGENTS.md & SPEC.md Audit Scorecard',
    summary: 'Score repository rules, acceptance criteria, and blast-radius guards before running coding agents.',
  },
  'negative-carry-code-auditor': {
    name: 'Vibe-Coded App Debt & Risk Auditor',
    summary: 'Quantify annual maintenance drag and M&A valuation write-downs from unverified AI code.',
  },
  'fte-displacement': {
    name: 'Department AI Automation ROI Model',
    summary: 'Calculate net payroll savings after human QA overhead and API token spend across operations.',
  },
  'hallucination-tax': {
    name: 'AI Hallucination Cost & QA Calculator',
    summary: 'Quantify the hidden labor cost of verifying probabilistic model outputs in production.',
  },
  'mcp-security-auditor': {
    name: 'MCP Security Checklist & Risk Auditor',
    summary: 'Audit Model Context Protocol servers against tool poisoning, STDIO leaks, and OWASP risks.',
  },
  'shadow-ai': {
    name: 'Enterprise Shadow AI Risk Calculator',
    summary: 'Estimate unauthorized employee LLM usage, IP egress exposure, and SOC2 compliance risk.',
  },
  'pdi': {
    name: 'Technical Debt Dollar Calculator (PDI)',
    summary: 'Convert engineering maintenance drag into payroll dollars and project your Technical Insolvency Date.',
  },
  'due-diligence': {
    name: 'PE Software & AI Due Diligence Audit',
    summary: 'Price codebase technical debt, cloud bloat, and AI margin exposure before signing an LOI.',
  },
  'aper': {
    name: 'Revenue Per Engineer Calculator (APER)',
    summary: 'Benchmark ARR per engineer against top-quartile SaaS peers for CFO and board reviews.',
  },
  'section-174-calculator': {
    name: 'Section 174 R&D Tax Cost Calculator',
    summary: 'Model IRS Section 174 5-year software amortization drag and misclassified maintenance OpEx.',
  },
  'vibe-coding-checklist': {
    name: 'Vibe-Coded App Launch & Security Checklist',
    summary: 'Run a 20-point pre-launch security, auth, billing, and margin audit on AI-built applications.',
  },
  'automation-cost-calculator': {
    name: 'Department Automation & SaaS Replacement Calculator',
    summary: 'Compare Zapier, Make, n8n, and Cloudflare Workers against legacy SaaS seat spend.',
  },
};

function sanitizeSlug(raw: string): string {
  return raw.toLowerCase().replace(/[^a-z0-9-]/g, '');
}

type SearchParamsMap = Record<string, string | string[] | undefined>;

function pickFirst(val: string | string[] | undefined, fallback = ''): string {
  if (Array.isArray(val)) return val[0] || fallback;
  return val || fallback;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ toolSlug: string }>;
  searchParams: Promise<SearchParamsMap>;
}): Promise<Metadata> {
  const { toolSlug } = await params;
  const sp = await searchParams;
  const safeSlug = sanitizeSlug(toolSlug);
  const entry = TOOL_CATALOG[safeSlug] || {
    name: 'Executive AI Economics Scorecard',
    summary: 'Interactive financial readout generated on richardewing.io.',
  };

  const metricLabel = pickFirst(sp.ml || sp.metricLabel, 'Primary Readout').slice(0, 60);
  const metricValue = pickFirst(sp.mv || sp.metricValue, 'Live Audit Ready').slice(0, 48);
  const status = pickFirst(sp.s || sp.status, 'EXECUTIVE AUDIT').slice(0, 36);

  const ogParams = new URLSearchParams({
    title: entry.name,
    category: 'Executive Scorecard',
    ml: metricLabel,
    mv: metricValue,
    s: status,
  });

  const ogImageUrl = `https://www.richardewing.io/api/og?${ogParams.toString()}`;
  const canonicalToolUrl = `https://www.richardewing.io/tools/${safeSlug}`;
  const cardTitle = `${metricValue} (${metricLabel}) | ${entry.name}`;
  const cardDesc = `${status}: ${metricLabel} = ${metricValue}. ${entry.summary}`;

  return {
    title: {
      absolute: cardTitle.slice(0, 68),
    },
    description: cardDesc.slice(0, 154),
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: canonicalToolUrl,
    },
    openGraph: {
      title: cardTitle,
      description: cardDesc,
      url: `https://www.richardewing.io/scorecard/${safeSlug}`,
      type: 'website',
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: cardTitle,
      description: cardDesc,
      images: [ogImageUrl],
    },
  };
}

export default async function SharedScorecardPage({
  params,
  searchParams,
}: {
  params: Promise<{ toolSlug: string }>;
  searchParams: Promise<SearchParamsMap>;
}) {
  const { toolSlug } = await params;
  const sp = await searchParams;
  const safeSlug = sanitizeSlug(toolSlug);
  const entry = TOOL_CATALOG[safeSlug] || {
    name: 'Executive AI Economics Scorecard',
    summary: 'Interactive financial readout generated on richardewing.io.',
  };

  const metricLabel = pickFirst(sp.ml || sp.metricLabel, 'Primary Audit Readout');
  const metricValue = pickFirst(sp.mv || sp.metricValue, 'Interactive Scenario');
  const status = pickFirst(sp.s || sp.status, 'EXECUTIVE AUDIT');

  const forwardParams = new URLSearchParams();
  for (const [k, v] of Object.entries(sp)) {
    if (k === 'ml' || k === 'mv' || k === 's' || k === 'metricLabel' || k === 'metricValue' || k === 'status') {
      continue;
    }
    const str = pickFirst(v);
    if (str) forwardParams.set(k, str);
  }
  const toolHref = forwardParams.toString()
    ? `/tools/${safeSlug}?${forwardParams.toString()}`
    : `/tools/${safeSlug}`;

  const isCritical = /critical|collapse|insolven|high|danger|negative/i.test(status);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1e2924] pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white border border-[#24332b]/15 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
              <Calculator className="w-4 h-4" />
              Shared Executive Scorecard
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                isCritical
                  ? 'bg-red-500/10 text-red-700 border border-red-500/25'
                  : 'bg-emerald-500/10 text-emerald-800 border border-emerald-500/25'
              }`}
            >
              {isCritical ? <ShieldAlert className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
              {status}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] leading-tight">
            {entry.name}
          </h1>

          <div className="rounded-2xl bg-[#162e26] text-white p-6 sm:p-8 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#d8c7a8]">
              {metricLabel}
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              {metricValue}
            </div>
          </div>

          <p className="text-base text-[#4a5850] leading-relaxed">
            {entry.summary} Open the live calculator below to adjust token volumes, seat pricing, headcount, or tax assumptions for your own P&amp;L.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href={toolHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#162e26] hover:bg-[#29473b] text-white font-bold text-sm transition-all shadow-sm"
            >
              Open Live Calculator &amp; Adjust Inputs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/operating-kit"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FAF9F6] border border-[#24332b]/20 hover:bg-[#ebe7dc] text-[#162e26] font-bold text-sm transition-all"
            >
              Get the $29 Operating Kit →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-[#24332b]/12 bg-white/70 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
              Need Independent CFO / Board Sign-Off?
            </div>
            <p className="text-sm text-[#4a5850] mt-1">
              Book a 60-minute Unstick &amp; P&amp;L Teardown Session directly with Richard Ewing.
            </p>
          </div>
          <a
            href="/api/buy/gut_check"
            rel="nofollow noopener"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#b77a35] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            Book $450 Session →
          </a>
        </div>
      </div>
    </main>
  );
}
