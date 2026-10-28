import { Metadata } from 'next';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import VibeCodingChecklistContent from './content';

const OG_IMAGE =
  'https://www.richardewing.io/api/og?title=Vibe-Coded%20App%20Security%20%26%20Launch%20Audit&category=20-Point%20Launch%20Checklist&ml=Critical%20Gates&mv=20%20Checks&s=PRE-LAUNCH%20AUDIT';

export const metadata: Metadata = {
  title: 'Vibe-Coded App Security & Launch Audit',
  description:
    'Score your Cursor, Claude Code, Lovable, or Bolt app across 20 Supabase RLS, secret leak, Stripe webhook, and LLM token-cap security gates in 2 mins.',
  keywords: [
    'vibe coding security checklist',
    'Cursor app production checklist',
    'Claude Code security audit',
    'Supabase RLS launch checklist',
    'Lovable Bolt production security',
    'vibe coded SaaS launch audit',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/vibe-coding-checklist',
  },
  openGraph: {
    title: 'Vibe-Coded App Security & Launch Audit | Richard Ewing',
    description:
      'Interactive 20-point pre-launch security, Supabase RLS, Stripe webhook, and token circuit-breaker scorer for AI-built apps.',
    url: 'https://www.richardewing.io/tools/vibe-coding-checklist',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe-Coded App Security & Launch Audit | Richard Ewing',
    description:
      'Audit Supabase RLS, bundle secret leaks, Stripe webhooks, and LLM spend caps before taking paying users.',
    images: [OG_IMAGE],
  },
};

export default function VibeCodingChecklistPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pb-24 space-y-10">
      <ToolServerHeader
        slug="vibe-coding-checklist"
        eyebrow="Vibe-to-Customer Rescue · 20-Point Pre-Launch Gate"
        h1="Vibe-Coded App Launch & Security Checklist"
        executiveAnswer="AI coding tools get prototypes to 80% in a weekend, then quietly ship open Supabase tables, exposed client API keys, unverified Stripe webhooks, and uncapped LLM loops. Built for Founders, CTOs, Engineering Managers, and Product Ops Leads to verify 20 non-negotiable launch controls in two minutes."
        appName="Vibe-Coded App Security & Launch Audit"
        appDescription="Interactive 20-point launch readiness scorer checking Supabase Row-Level Security, bundle secret leaks, Stripe webhook idempotency, rate limits, and LLM spend caps."
        howToName="How to Audit a Vibe-Coded App Before Taking Paying Customers"
        howToDescription="Check 20 security, billing, and reliability gates across database RLS, secrets, Stripe webhooks, and spec boundaries."
        steps={[
          {
            name: 'Verify Database RLS & Auth Tokens',
            text: 'Confirm Row-Level Security is active on every public table and zero service-role keys ship to the browser.',
          },
          {
            name: 'Check Stripe Webhooks & Token Circuit Breakers',
            text: 'Verify cryptographic webhook signatures, idempotency keys, and per-workspace daily LLM spend ceilings.',
          },
          {
            name: 'Lock Spec Boundaries & Export Readout',
            text: 'Install AGENTS.md and SPEC.md blast-radius guards, then share your launch scorecard or book a 60-minute unstick review.',
          },
        ]}
      />

      <VibeCodingChecklistContent />

      <div className="max-w-5xl mx-auto px-6 space-y-10">
        <ChainedDiagnosticNextStep
          chainName="Vibe-to-Customer Rescue Chain"
          stepLabel="Step 1 of 3 · Connected Diagnostic Chain"
          currentToolSlug="vibe-coding-checklist"
          currentToolName="Vibe-Coded App Security & Launch Audit"
          defaultScorecardMetricLabel="Launch Readiness"
          defaultScorecardMetricValue="15/100 (7 Blockers)"
          defaultScorecardStatus="AUDIT REQUIRED"
          nextDiagnostic={{
            slug: 'spec-quality-scorecard',
            title: 'AGENTS.md & SPEC.md Audit Scorecard',
            reason:
              'Once your immediate RLS and billing holes are identified, score your AGENTS.md and SPEC.md files so Cursor or Claude Code never re-introduces them on the next prompt.',
          }}
          secondaryDiagnostic={{
            slug: 'negative-carry-code-auditor',
            title: 'Vibe-Coded App Debt & Risk Auditor',
          }}
          commercialStep={{
            href: '/operating-kit',
            label: 'Get AGENTS.md + SPEC.md Kit or Book $450 Unstick',
            priceTag: '$29 Kit / $450 Live',
            description:
              'Download the exact SPEC.md & AGENTS.md templates in the $29 Survival Kit, or book a 60-minute live screen-share session ($450) or 21-Day 0-to-1 Build Sprint ($7,500).',
          }}
        />

        <DiagnosticCTA
          variant="danger"
          title="Stuck at 80% on a Vibe-Coded App With Paying Users Waiting?"
          subtitle="Get the $29 Builder & Operator Survival Kit with copy-paste SPEC.md and AGENTS.md templates, book a 60-minute live screen-share Unstick Session ($450), or hand off the full Next.js + Supabase RLS + Stripe build in 21 days ($7,500)."
          buttonText="Unstick or Harden My App →"
        />
      </div>
    </main>
  );
}
