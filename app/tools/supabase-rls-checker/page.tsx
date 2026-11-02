import React, { Suspense } from 'react';
import { Metadata } from 'next';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import VibeSecurityScannerClient from '@/components/tools/VibeSecurityScannerClient';

export const metadata: Metadata = {
  title: 'Supabase RLS & PostgREST Security Checker',
  description:
    'Audit live Supabase URLs and SQL migrations for missing Row Level Security, USING (true) write policies, and service_role client leaks in seconds.',
  keywords: [
    'Supabase RLS checker',
    'Supabase security scanner',
    'PostgREST OpenAPI exposure',
    'Supabase Row Level Security audit',
    'NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY leak',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/supabase-rls-checker',
  },
  openGraph: {
    title: 'Supabase RLS & PostgREST Security Checker | Richard Ewing',
    description:
      'Audit live Supabase URLs and SQL migrations for missing Row Level Security, USING (true) write policies, and service_role client leaks in seconds.',
    url: 'https://www.richardewing.io/tools/supabase-rls-checker',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Supabase+RLS+%26+PostgREST+Security+Checker&category=Database+Security',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supabase RLS & PostgREST Security Checker | Richard Ewing',
    description:
      'Audit live Supabase URLs and SQL migrations for missing Row Level Security, USING (true) write policies, and service_role client leaks in seconds.',
    images: [
      'https://www.richardewing.io/api/og?title=Supabase+RLS+%26+PostgREST+Security+Checker&category=Database+Security',
    ],
  },
};

const SUPABASE_FAQS = [
  {
    question: 'Why are vibe-coded Supabase apps frequently breached without SQL injection?',
    answer:
      'Supabase exposes tables in the public schema over PostgREST using the anon JWT shipped in frontend JavaScript. Whenever an AI coding tool creates a table without ALTER TABLE ... ENABLE ROW LEVEL SECURITY, or writes a USING (true) update policy, anyone can dump or overwrite customer rows directly from browser DevTools.',
  },
  {
    question: 'How does the live Supabase PostgREST check work?',
    answer:
      'When you scan a live HTTPS app URL, the engine inspects public JS bundles for exposed Supabase project origins and performs a read-only OpenAPI schema check against /rest/v1/ to flag publicly enumerable tables.',
  },
];

export default function SupabaseRlsCheckerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SUPABASE_FAQS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ToolServerHeader
        slug="supabase-rls-checker"
        eyebrow="Database Boundary Audit &middot; Supabase &amp; PostgREST"
        h1="Supabase Row Level Security (RLS) &amp; PostgREST Checker"
        executiveAnswer="The Supabase RLS and PostgREST Security Checker audits SQL migration files, Next.js client bundles, and live HTTPS application URLs to catch public tables missing ENABLE ROW LEVEL SECURITY, permissive USING (true) write policies, and leaked service_role credentials."
        appName="Supabase RLS & PostgREST Security Checker"
        appDescription="Automated Supabase Row Level Security (RLS) and PostgREST exposure scanner with copy-paste SQL policy fixes."
        howToName="How to Check Supabase Row Level Security (RLS) and Anon Key Exposure"
        howToDescription="Paste your SQL schema or enter your live HTTPS app URL to verify RLS enforcement and PostgREST table isolation."
        steps={[
          {
            name: 'Paste SQL migrations or enter live HTTPS URL',
            text: 'Provide your supabase/migrations/*.sql schema or live production domain.',
          },
          {
            name: 'Inspect exposed tables and service_role leaks',
            text: 'Review the free Finding #1 trace showing exact unguarded tables or permissive USING (true) predicates.',
          },
          {
            name: 'Apply strict tenant-isolated RLS SQL patches',
            text: 'Copy the generated ALTER TABLE ... FORCE ROW LEVEL SECURITY policies and re-scan to confirm closure.',
          },
        ]}
      />

      <Suspense
        fallback={
          <div className="max-w-5xl mx-auto px-6 py-12 font-mono text-xs text-[#66716a]">
            Loading Supabase RLS Checker...
          </div>
        }
      >
        <VibeSecurityScannerClient
          initialFocusProfile="supabase-rls"
          returnPath="/tools/supabase-rls-checker"
        />
      </Suspense>

      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        <div className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl p-6 sm:p-8 space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-bold">
            Supabase &amp; Postgres Governance FAQ
          </p>
          <h2 className="font-serif text-2xl font-bold text-[#162e26]">
            Locking Down PostgREST &amp; Row Level Security
          </h2>
          <div className="space-y-3 pt-2">
            {SUPABASE_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="bg-[#FAF9F6] border border-[#24332b]/15 rounded-lg p-4"
              >
                <summary className="cursor-pointer font-serif text-base font-bold text-[#1e2924] list-none flex items-center justify-between gap-3">
                  <span>{faq.question}</span>
                  <span className="font-mono text-xs text-[#b77a35]">+</span>
                </summary>
                <p className="mt-3 font-sans text-sm text-[#4a5850] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <ChainedDiagnosticNextStep
          chainName="Full-Stack AI Security & Governance Chain"
          stepLabel="Connected Security Diagnostic"
          currentToolSlug="supabase-rls-checker"
          currentToolName="Supabase RLS & PostgREST Security Checker"
          defaultScorecardMetricLabel="Database RLS Boundary"
          defaultScorecardMetricValue="PostgREST Tenant Check"
          defaultScorecardStatus="CRITICAL DATA BOUNDARY"
          nextDiagnostic={{
            slug: 'vibe-security-scanner',
            title: 'Vibe-Coded App & AI Agent Security Scanner',
            reason:
              'Expand your database check into a full-stack audit covering unauthenticated OpenAI/Anthropic routes, Stripe webhooks, and .mcp.json configs.',
          }}
          secondaryDiagnostic={{
            slug: 'mcp-security-auditor',
            title: 'MCP Security Checklist & Risk Auditor',
          }}
          commercialStep={{
            href: '/advisory',
            label: 'Schedule a Production Security & Architecture Review',
            priceTag: '$450 Session / $5,000 Audit',
            description:
              'Work directly with Richard Ewing to harden tenant isolation, LLM cost circuit breakers, and SOC2 audit controls.',
          }}
        />
      </section>
    </div>
  );
}
