import React, { Suspense } from 'react';
import { Metadata } from 'next';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import VibeSecurityScannerClient from '@/components/tools/VibeSecurityScannerClient';

export const metadata: Metadata = {
  title: 'Vibe-Coded App & AI Agent Security Scanner',
  description:
    'Scan Next.js API routes, Supabase RLS schemas, .mcp.json manifests, and live URLs for AI wallet drains and leaks. Free trace #1 plus instant fixes.',
  keywords: [
    'vibe coding security scanner',
    'AI app security scanner',
    'MCP security scanner',
    'Next.js AI API security audit',
    'Supabase RLS vulnerability scanner',
    'Cursor and Lovable app security check',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/vibe-security-scanner',
  },
  openGraph: {
    title: 'Vibe-Coded App & AI Agent Security Scanner | Richard Ewing',
    description:
      'Scan Next.js API routes, Supabase RLS schemas, .mcp.json manifests, and live URLs for AI wallet drains and leaks. Free trace #1 plus instant fixes.',
    url: 'https://www.richardewing.io/tools/vibe-security-scanner',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Vibe-Coded+App+%26+AI+Agent+Security+Scanner&category=Application+Security',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe-Coded App & AI Agent Security Scanner | Richard Ewing',
    description:
      'Scan Next.js API routes, Supabase RLS schemas, .mcp.json manifests, and live URLs for AI wallet drains and leaks. Free trace #1 plus instant fixes.',
    images: [
      'https://www.richardewing.io/api/og?title=Vibe-Coded+App+%26+AI+Agent+Security+Scanner&category=Application+Security',
    ],
  },
};

const FAQ_ITEMS = [
  {
    question: 'What vulnerabilities does the Vibe-Coded App & AI Agent Security Scanner detect?',
    answer:
      'The scanner traces entrypoint-to-sink paths across missing Supabase Row Level Security (RLS), client-exposed service_role keys, unauthenticated OpenAI/Anthropic wallet-drain endpoints, unpinned npx -y MCP server manifests, forged Stripe webhooks, and missing production CSP/HSTS headers.',
  },
  {
    question: 'Does the live HTTPS URL scan run destructive attacks against my production site?',
    answer:
      'No. Live URL scanning is strictly passive and SSRF-hardened: it inspects public HTTP response headers, public client bundle references, and read-only PostgREST OpenAPI schema exposure without mutating any data.',
  },
  {
    question: 'What is included free versus in the $29 and $49 passes?',
    answer:
      'Every scan reveals your 0-100 Security Clearance Score, monthly financial risk estimate, and Finding #1 in full entrypoint-to-sink detail with a 1-click Cursor/Claude fix prompt for free. The $29 Single Scan Pass opens all remaining traces and 24-hour verification re-scans; the $49 Founder & CTO Clearance Pack adds a Signed Buyer Security Clearance PDF, 30-day unlimited re-scans, and an HMAC-verified badge.',
  },
];

export default function VibeSecurityScannerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
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
        slug="vibe-security-scanner"
        eyebrow="Standalone Product &middot; Application &amp; Agentic Taint Scanner"
        h1="Vibe-Coded App &amp; AI Agent Security Scanner"
        executiveAnswer="The Vibe-Coded App and AI Agent Security Scanner inspects live HTTPS apps, public GitHub repositories, Supabase SQL migrations, Next.js API routes, and .mcp.json manifests to catch unauthenticated LLM wallet drains, missing Row Level Security, and supply-chain RCE before enterprise buyers or attackers do."
        appName="Vibe-Coded App & AI Agent Security Scanner"
        appDescription="Zero-gate application and MCP security scanner producing entrypoint-to-sink traces, Cursor/Claude fix prompts, and signed buyer clearance reports."
        howToName="How to Scan a Vibe-Coded SaaS App or AI Agent for Security Flaws"
        howToDescription="Run an entrypoint-to-sink security audit across your live URL, GitHub repo, or pasted route/SQL/.mcp.json artifacts."
        steps={[
          {
            name: 'Choose target surface',
            text: 'Paste Next.js route/SQL/.mcp.json code, enter a live HTTPS production URL, or supply a public GitHub repository.',
          },
          {
            name: 'Inspect free Clearance Score and Finding #1',
            text: 'Review your 0-100 clearance score, monthly dollar exposure, and full entrypoint-to-sink trace plus 1-click fix prompt on Finding #1.',
          },
          {
            name: 'Patch all traces and export buyer clearance',
            text: 'Open remaining server-sealed traces ($29), apply the Cursor/Claude patches, and export a Signed Security Clearance PDF + HMAC badge ($49).',
          },
        ]}
      />

      <Suspense
        fallback={
          <div className="max-w-5xl mx-auto px-6 py-12 font-mono text-xs text-[#66716a]">
            Loading Security Scanner Console...
          </div>
        }
      >
        <VibeSecurityScannerClient
          initialFocusProfile="full"
          returnPath="/tools/vibe-security-scanner"
        />
      </Suspense>

      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        <div className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl p-6 sm:p-8 space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-bold">
            Buyer &amp; Engineering FAQ
          </p>
          <h2 className="font-serif text-2xl font-bold text-[#162e26]">
            How Entrypoint-to-Sink Security Scanning Works
          </h2>
          <div className="space-y-3 pt-2">
            {FAQ_ITEMS.map((faq) => (
              <details
                key={faq.question}
                className="group bg-[#FAF9F6] border border-[#24332b]/15 rounded-lg p-4"
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
          chainName="AI Application Security & Unit Margin Chain"
          stepLabel="Connected Executive Diagnostic"
          currentToolSlug="vibe-security-scanner"
          currentToolName="Vibe-Coded App & AI Agent Security Scanner"
          defaultScorecardMetricLabel="Perimeter & Sink Posture"
          defaultScorecardMetricValue="Automated Taint Scan"
          defaultScorecardStatus="SOC2 & BUYER REVIEW"
          nextDiagnostic={{
            slug: 'supabase-rls-checker',
            title: 'Supabase RLS & PostgREST Security Checker',
            reason:
              'Run a dedicated Row Level Security and public PostgREST schema check across your database migrations and client bundles.',
          }}
          secondaryDiagnostic={{
            slug: 'department-ai-playbook',
            title: 'Department AI Risk & SOP Playbook Builder',
          }}
          commercialStep={{
            href: '/advisory',
            label: 'Book Hands-On Executive Technical Due Diligence',
            priceTag: '$450 Session / $5,000 Audit',
            description:
              'Need a formal principal-level architecture and security review for an enterprise deal or investor diligence? Work directly with Richard Ewing.',
          }}
        />
      </section>
    </div>
  );
}
