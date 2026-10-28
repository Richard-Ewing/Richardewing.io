import { Metadata } from 'next';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import AutomationCostCalculatorContent from './content';

const OG_IMAGE =
  'https://www.richardewing.io/api/og?title=Workflow%20Automation%20%26%20SaaS%20Cost%20Model&category=Zapier%20vs%20Make%20vs%20n8n%20vs%20Workers&ml=Step%20Tax%20Savings&mv=Up%20to%2078%25&s=OPS%20FINOPS';

export const metadata: Metadata = {
  title: 'Workflow Automation & SaaS Cost Model',
  description:
    'Compare Zapier, Make, self-hosted n8n, and Cloudflare Workers automation costs plus SaaS seat replacement savings for COOs, VPs of Ops, and Finance.',
  keywords: [
    'Zapier vs Make vs n8n cost calculator',
    'workflow automation ROI calculator',
    'n8n self hosted vs Zapier pricing',
    'SaaS seat consolidation calculator',
    'department AI automation cost model',
    'operations automation savings',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/automation-cost-calculator',
  },
  openGraph: {
    title: 'Workflow Automation & SaaS Cost Model | Richard Ewing',
    description:
      'Calculate true monthly TCO across Zapier, Make, self-hosted n8n, and Cloudflare Workers including broken-webhook rework and retired SaaS seats.',
    url: 'https://www.richardewing.io/tools/automation-cost-calculator',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workflow Automation & SaaS Cost Model | Richard Ewing',
    description:
      'Compare Zapier, Make, self-hosted n8n, and Cloudflare Workers TCO plus annual SaaS seat consolidation savings.',
    images: [OG_IMAGE],
  },
};

export default function AutomationCostCalculatorPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pb-24 space-y-10">
      <ToolServerHeader
        slug="automation-cost-calculator"
        eyebrow="Operations FinOps · Zapier vs Make vs n8n vs Edge Workers"
        h1="Department Workflow Automation & SaaS Seat Cost Calculator"
        executiveAnswer="Per-step task billing turns a $69 Zapier prototype into a $15,000/year invoice the moment an 8-step CRM or support workflow scales, while silent webhook failures eat Operations bandwidth. Built for COOs, VPs of Operations, Customer Support Managers, and Directors of Finance to compare true annual TCO and SaaS license consolidation."
        appName="Workflow Automation & SaaS Cost Model"
        appDescription="Interactive total-cost-of-ownership calculator comparing Zapier, Make, self-hosted n8n, and governed Cloudflare Workers plus retired SaaS seat savings."
        howToName="How to Calculate Workflow Automation & SaaS Consolidation ROI"
        howToDescription="Enter monthly workflow triggers, steps per workflow, LLM extraction calls, and retired SaaS licenses."
        steps={[
          {
            name: 'Input Monthly Workflow Runs & Step Count',
            text: 'Specify monthly trigger volume and internal filter/router steps to expose per-task billing multipliers.',
          },
          {
            name: 'Add LLM Extraction & Retired SaaS Licenses',
            text: 'Include AI classification calls per run and overlapping point-tool SaaS seats you plan to cancel.',
          },
          {
            name: 'Compare 4-Engine Annual TCO & Rework',
            text: 'Review total annual cost across Zapier, Make, self-hosted n8n, and Cloudflare Workers including manual error triage.',
          },
        ]}
      />

      <AutomationCostCalculatorContent />

      <div className="max-w-5xl mx-auto px-6 space-y-10">
        <ChainedDiagnosticNextStep
          chainName="Operations Automation & Headcount ROI Chain"
          stepLabel="Step 1 of 3 · Connected Diagnostic Chain"
          currentToolSlug="automation-cost-calculator"
          currentToolName="Workflow Automation & SaaS Cost Model"
          defaultScorecardMetricLabel="Annual Net OpEx Saved"
          defaultScorecardMetricValue="$28,400/yr"
          defaultScorecardStatus="CONSOLIDATION READY"
          nextDiagnostic={{
            slug: 'fte-displacement',
            title: 'Department AI Automation ROI Model',
            reason:
              'Pass your reclaimed workflow volume into the Department AI Automation ROI Model to quantify net labor capacity freed after exception-handling overhead.',
            defaultParams: { fte: 4 },
          }}
          secondaryDiagnostic={{
            slug: 'hallucination-tax',
            title: 'AI Hallucination Cost & QA Calculator',
          }}
          commercialStep={{
            href: '/services#insolvency_diagnostic',
            label: 'Book 14-Day Workflow Automation Sprint',
            priceTag: '$2,500 Fixed',
            description:
              'In two weeks, Richard replaces brittle per-step zaps and manual copy-paste bottlenecks with governed n8n or Cloudflare Worker pipelines wired directly into your CRM, Slack, and billing.',
          }}
        />

        <DiagnosticCTA
          variant="primary"
          title="Paying Thousands for Fragile Zaps and Overlapping SaaS Seats?"
          subtitle="Book the fixed-scope $2,500 14-Day AI Workflow Automation Sprint. We replace your #1 manual department bottleneck and brittle task-metered workflows with governed, schema-verified pipelines."
          buttonText="Book 14-Day Automation Sprint ($2,500) →"
        />
      </div>
    </main>
  );
}
