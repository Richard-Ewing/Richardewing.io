import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ScorecardCheckoutDrawer from '@/app/components/ScorecardCheckoutDrawer';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import { FrameworkDiagnosticBridge } from '@/components/seo/FrameworkDiagnosticBridge';
import AUEBTool from './content';

export const metadata: Metadata = {
  title: 'AI Unit Economics: Seat vs Credit Pricing',
  description:
    'Model SaaS AI unit economics: compare flat seat pricing against credit tiers, calculate LLM cost per user, and spot where gross margin turns negative.',
  keywords: [
    'AI unit economics software',
    'AI credit vs seat calculator',
    'AI unit economics',
    'LLM cost calculator',
    'AI margin collapse',
    'Claude and OpenAI API pricing',
    'SaaS usage pricing model',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/aueb',
  },
  openGraph: {
    title: 'AI Unit Economics: Seat vs Credit Pricing | Richard Ewing',
    description:
      'Model SaaS AI unit economics: compare flat seat pricing against credit tiers, calculate LLM cost per user, and spot where gross margin turns negative.',
    url: 'https://www.richardewing.io/tools/aueb',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=AI+Credit+vs+Seat+Calculator+%28AUEB%29&category=AI+Pricing+Audit',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Unit Economics: Seat vs Credit Pricing | Richard Ewing',
    description:
      'Model SaaS AI unit economics: compare flat seat pricing against credit tiers, calculate LLM cost per user, and spot where gross margin turns negative.',
    images: [
      'https://www.richardewing.io/api/og?title=AI+Credit+vs+Seat+Calculator+%28AUEB%29&category=AI+Pricing+Audit',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <ToolServerHeader
        slug="aueb"
        eyebrow="AI Pricing & Margin Defense · AUEB"
        h1="AI Credit vs Seat Pricing Calculator (AUEB)"
        executiveAnswer="The AI Credit vs Seat Pricing Calculator (AUEB) models per-user token inference costs against flat monthly SaaS subscriptions so CEOs, CFOs, and CPOs can identify the exact power-user query volume where a $29, $49, or $99 seat turns gross-margin negative and structure profitable credit tiers."
        appName="AI Credit vs Seat Calculator (AUEB)"
        appDescription="Interactive SaaS unit economics calculator comparing flat seat subscriptions against metered AI credit tiers across Claude, OpenAI, Gemini, and self-hosted models."
        howToName="How to Calculate Your AI Seat vs Credit Collapse Point"
        howToDescription="Use the AUEB calculator to pinpoint the monthly query volume where inference bills wipe out your SaaS subscription margin."
        steps={[
          { name: 'Select model tier', text: 'Choose your production LLM or enter custom input and output pricing per million tokens.' },
          { name: 'Enter query volume', text: 'Specify average prompt and completion tokens per task and monthly tasks per active seat.' },
          { name: 'Set subscription price', text: 'Enter your monthly seat price ($29, $49, $99, or enterprise ARPU) to establish baseline margin.' },
          { name: 'Review credit cap threshold', text: 'Inspect your net gross margin percentage and exact monthly query cap needed to protect 75%+ SaaS margins.' },
        ]}
      />

      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto p-12 text-center text-zinc-500 font-mono text-xs">
            Loading AUEB Margin Audit...
          </div>
        }
      >
        <AUEBTool />
      </Suspense>

      <div className="page-container max-w-4xl mx-auto px-6 mb-16 space-y-12">
        <ChainedDiagnosticNextStep
          chainName="AI Pricing & Gross Margin Chain"
          stepLabel="Step 2 of 3 · Connected Diagnostic Chain"
          currentToolSlug="aueb"
          currentToolName="AI Credit vs Seat Calculator (AUEB)"
          defaultScorecardMetricLabel="Recoverable Annual Token Margin"
          defaultScorecardMetricValue="$120K to $650K / yr"
          defaultScorecardStatus="MARGIN COLLAPSE RISK"
          nextDiagnostic={{
            slug: 'slm-vs-api',
            title: 'Self-Host LLM vs API Cost Calculator',
            reason: 'Once you see where cloud API tokens compress your seat margin, calculate the exact daily query volume where routing routine traffic to dedicated GPUs cuts inference spend by 60% to 80%.',
          }}
          secondaryDiagnostic={{
            slug: 'ai-feature-margin',
            title: 'Claude & OpenAI API Margin Calculator',
          }}
          commercialStep={{
            href: '/operating-kit',
            label: 'Download AI Unit Economics Operating Kit',
            priceTag: '$29 / $79',
            description: 'Get the CFO-ready token pricing spreadsheets, credit-tier contract language, and book a $450 Unstick session if your renewal margins are under water.',
          }}
        />

        <ScorecardCheckoutDrawer
          metricLabel="Typical Recoverable Token Dividend"
          metricValue="$120K to $650K+ / yr"
          source="aueb"
        />

        <CalculatorIntentProposal
          toolName="AI Credit vs Seat Calculator (AUEB)"
          problemDomain="Inference Token Squeeze &amp; Gross Margin Erosion"
          calculatedMetricLabel="Typical Recoverable Token Dividend"
          calculatedMetricValue="$120k to $650k+ / year"
          severityLevel="ELEVATED"
          primaryPathway={{
            destination: 'EXOGRAM_SOFTWARE',
            relationshipType: 'OPERATIONALIZES',
            channel: 'ENGINEERING_RUNTIME',
            headline: 'Deploy Edge Semantic Caching & Runtime Quotas',
            subtext: 'Exogram enforces per-account token budgets and deterministic context assembly so power users never blow through subscription gross margins.',
            actionUrl: '/exogram/docs',
            actionLabel: 'Inspect Exogram Runtime Proxy ↗',
            targetRole: 'VPs of Engineering & Infrastructure Directors',
          }}
          secondaryPathway={{
            destination: 'RICHARD_EWING_ADVISORY',
            relationshipType: 'ADVISES_ON',
            channel: 'EXECUTIVE_ADVISORY',
            headline: 'Commission an AI Token Pricing & FinOps Audit',
            subtext: 'Work directly with Richard Ewing to restructure flat SaaS tiers into hybrid seat-plus-credit contracts before your next board review.',
            actionUrl: '/services/ai-cost-audit',
            actionLabel: 'Inquire for Advisory Audit ↗',
            targetRole: 'CFOs, CPOs & VPs of Engineering',
          }}
        />

        <FrameworkDiagnosticBridge variant="diagnostic-to-framework" />

        <DiagnosticCTA
          title="Is your AI API bill growing faster than net-new ARR?"
          subtitle="Stop subsidizing uncapped token consumption on flat-rate seats. Book a 60-minute P&L teardown to redesign your credit tiers before renewal season."
          metrics={['$100K+ API Bills', 'Token Sprawl', 'Negative Margin']}
          hideCheckoutDrawer={true}
        />

        <div className="mt-12 bg-white border border-zinc-300 rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-bold font-grotesk text-zinc-950">
            Related Benchmarks &amp; Pricing Research
          </h3>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/benchmark/llm-cost-and-margin-index"
              className="px-4 py-2 bg-[#162e26] text-white font-mono text-xs font-bold rounded-xl hover:bg-[#29473b] transition"
            >
              2026 LLM Cost &amp; SaaS Margin Index →
            </Link>
            <a
              href="https://builtin.com/articles/frontier-model"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-cyan-800 transition"
            >
              Read &quot;What Is a Frontier Model?&quot; on Built In ↗
            </a>
            <Link
              href="/concepts/frontier-model-economics"
              className="px-4 py-2 bg-emerald-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-emerald-800 transition"
            >
              Frontier Economics Concept →
            </Link>
            <Link
              href="/concepts/inference-dividend-model"
              className="px-4 py-2 bg-zinc-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-zinc-800 transition"
            >
              Inference Dividend Concept →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
