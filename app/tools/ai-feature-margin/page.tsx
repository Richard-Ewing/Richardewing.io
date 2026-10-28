import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import AIFeatureMarginTool from './content';

export const metadata: Metadata = {
  title: 'Claude & OpenAI API Margin Calculator',
  description:
    'Calculate gross margin per AI feature across Claude, OpenAI, and Gemini APIs. Stress-test P50, P90, and P99 power-user token usage before you set price.',
  keywords: [
    'Claude API cost calculator',
    'OpenAI API margin calculator',
    'AI feature gross margin',
    'token cost per user',
    'SaaS AI unit economics',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/ai-feature-margin',
  },
  openGraph: {
    title: 'Claude & OpenAI API Margin Calculator | Richard Ewing',
    description:
      'Calculate gross margin per AI feature across Claude, OpenAI, and Gemini APIs. Stress-test P50, P90, and P99 power-user token usage before you set price.',
    url: 'https://www.richardewing.io/tools/ai-feature-margin',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Claude+%26+OpenAI+API+Margin+Calculator&category=AI+Unit+Economics',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude & OpenAI API Margin Calculator | Richard Ewing',
    description:
      'Calculate gross margin per AI feature across Claude, OpenAI, and Gemini APIs. Stress-test P50, P90, and P99 power-user token usage before you set price.',
    images: [
      'https://www.richardewing.io/api/og?title=Claude+%26+OpenAI+API+Margin+Calculator&category=AI+Unit+Economics',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <ToolServerHeader
        slug="ai-feature-margin"
        eyebrow="Feature-Level COGS · Token Margin Model"
        h1="Claude & OpenAI API Feature Margin Calculator"
        executiveAnswer="The Claude and OpenAI API Feature Margin Calculator measures net gross margin per AI feature across median (P50), heavy (P90), and runaway power-user (P99) token cohorts so CPOs, CFOs, and Product Ops Leads can spot negative-margin features before launch."
        appName="Claude & OpenAI API Margin Calculator"
        appDescription="Feature-level LLM gross margin calculator modeling input tokens, output tokens, retry loops, and subscription revenue across Claude, OpenAI, and Gemini APIs."
        howToName="How to Calculate Gross Margin on an AI Software Feature"
        howToDescription="Model prompt tokens, completion tokens, and customer usage percentiles against monthly feature price."
        steps={[
          { name: 'Enter monthly price per user', text: 'Input the monthly ARPU or add-on fee attributed to the AI feature.' },
          { name: 'Configure token payload', text: 'Set average input context tokens, output tokens, and multi-step agent retry multipliers.' },
          { name: 'Stress-test P90 and P99 cohorts', text: 'Compare median user cost against your top 10% and top 1% power users.' },
          { name: 'Set hard credit guardrails', text: 'Export your break-even query cap and route overflow volume to lower-cost models.' },
        ]}
      />

      <AIFeatureMarginTool />

      <div className="page-container max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <ChainedDiagnosticNextStep
          chainName="AI Pricing & Gross Margin Chain"
          stepLabel="Step 1 of 3 · Connected Diagnostic Chain"
          currentToolSlug="ai-feature-margin"
          currentToolName="Claude & OpenAI API Margin Calculator"
          defaultScorecardMetricLabel="Flat-Tier Gross Margin Drag"
          defaultScorecardMetricValue="-15% to -40% GM"
          defaultScorecardStatus="NEGATIVE-CARRY RISK"
          nextDiagnostic={{
            slug: 'aueb',
            title: 'AI Credit vs Seat Calculator (AUEB)',
            reason: 'Carry your per-feature token assumptions into the full AUEB seat-vs-credit benchmark to design profitable $29, $49, and $99 hybrid tiers.',
          }}
          secondaryDiagnostic={{
            slug: 'slm-vs-api',
            title: 'Self-Host LLM vs API Cost Calculator',
          }}
          commercialStep={{
            href: '/operating-kit',
            label: 'Get the AI Unit Economics Operating Kit',
            priceTag: '$29 / $79',
            description: 'Download editable CFO margin spreadsheets and book a $450 Unstick session or $7,500 Pricing Sprint if your flagship AI feature is losing money.',
          }}
        />

        <CalculatorIntentProposal
          toolName="Claude & OpenAI API Margin Calculator"
          problemDomain="Negative-Carry AI Features &amp; Uncapped Token Erosion"
          calculatedMetricLabel="Typical Margin Compression"
          calculatedMetricValue="-15% to -40% Gross Margin Erosion on Flat Tiers"
          severityLevel="ELEVATED"
          primaryPathway={{
            destination: 'EXOGRAM_SOFTWARE',
            relationshipType: 'OPERATIONALIZES',
            channel: 'ENGINEERING_RUNTIME',
            headline: 'Install Adaptive Consumption Caps with Exogram',
            subtext: 'Exogram enforces per-user token credit limits and routes routine prompts to lower-cost models before customer accounts turn gross-margin negative.',
            actionUrl: '/exogram',
            actionLabel: 'Explore Exogram Token Gateway ↗',
            targetRole: 'Chief Product Officers & VPs of Product',
          }}
          secondaryPathway={{
            destination: 'RICHARD_EWING_ADVISORY',
            relationshipType: 'ADVISES_ON',
            channel: 'EXECUTIVE_ADVISORY',
            headline: 'AI Pricing Strategy & Feature Margin Audit',
            subtext: 'Work with Richard Ewing to audit your feature portfolio, cap runaway token loops, and transition to hybrid credit pricing.',
            actionUrl: '/services',
            actionLabel: 'View Fixed-Fee Advisory Sprints ↗',
            targetRole: 'CFOs, CPOs & Heads of Product',
          }}
        />
      </div>
    </div>
  );
}
