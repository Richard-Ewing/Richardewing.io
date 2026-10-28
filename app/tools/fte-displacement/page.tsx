import { Metadata } from 'next';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import FTEContent from './content';

export const metadata: Metadata = {
  title: 'Department AI Automation ROI Model',
  description:
    'Model net payroll savings, human QA overhead, and API token costs when automating Customer Support, RevOps, and Finance workflows for CFO sign-off.',
  keywords: [
    'department AI automation ROI calculator',
    'customer support AI savings calculator',
    'FTE automation ROI model',
    'RevOps workflow automation ROI',
    'CFO AI business case calculator',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/fte-displacement',
  },
  openGraph: {
    title: 'Department AI Automation ROI Model | Richard Ewing',
    description:
      'Model net payroll savings, human QA overhead, and API token costs when automating Customer Support, RevOps, and Finance workflows for CFO sign-off.',
    url: 'https://www.richardewing.io/tools/fte-displacement',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Department+AI+Automation+ROI+Model&category=Operations+ROI',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Department AI Automation ROI Model | Richard Ewing',
    description:
      'Model net payroll savings, human QA overhead, and API token costs when automating Customer Support, RevOps, and Finance workflows for CFO sign-off.',
    images: [
      'https://www.richardewing.io/api/og?title=Department+AI+Automation+ROI+Model&category=Operations+ROI',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <ToolServerHeader
        slug="fte-displacement"
        eyebrow="Operational Efficiency · CFO Business Case"
        h1="Department AI Automation & Workflow ROI Calculator"
        executiveAnswer="The Department AI Automation ROI Model calculates net annual operating savings across Customer Support, RevOps, Finance, and Operations after subtracting LLM token invoices, human-in-the-loop QA review hours, and exception-handling escalations so COOs and CFOs fund workflows that actually pay back."
        appName="Department AI Automation ROI Model"
        appDescription="Operational AI ROI calculator comparing current BPO and department labor costs against automated workflow compute and human verification overhead."
        howToName="How to Model Net Department AI Automation Savings for Your CFO"
        howToDescription="Calculate net savings after accounting for automation deflection rate, token costs, and human QA review time."
        steps={[
          { name: 'Enter department ticket or task volume', text: 'Input monthly repetitive tickets, invoices, or lead-routing tasks and current labor cost per task.' },
          { name: 'Set realistic deflection rate', text: 'Choose the share of tasks safely resolved end-to-end without human escalation.' },
          { name: 'Include token and QA costs', text: 'Account for multi-step LLM API spend and human-in-the-loop quality spot-checking.' },
          { name: 'Export CFO payback readout', text: 'Review net monthly EBITDA expansion and copy the boardroom Slack scorecard.' },
        ]}
      />

      <FTEContent />

      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        <ChainedDiagnosticNextStep
          chainName="Operational Automation & SaaS Consolidation Chain"
          stepLabel="Step 2 of 3 · Connected Diagnostic Chain"
          currentToolSlug="fte-displacement"
          currentToolName="Department AI Automation ROI Model"
          defaultScorecardMetricLabel="Net Annual Operating Savings"
          defaultScorecardMetricValue="38% to 62% Cost Cut"
          defaultScorecardStatus="CFO BUSINESS CASE"
          nextDiagnostic={{
            slug: 'automation-cost-calculator',
            title: 'Department Automation & SaaS Replacement Calculator',
            reason: 'Compare Zapier, Make, self-hosted n8n, and Cloudflare Workers execution bills side-by-side to ensure middleware task fees do not eat your labor savings.',
          }}
          secondaryDiagnostic={{
            slug: 'hallucination-tax',
            title: 'AI Hallucination Cost & QA Calculator',
          }}
          commercialStep={{
            href: '/services',
            label: 'Book a 14-Day Workflow Automation Sprint',
            priceTag: '$2,500',
            description: 'Replace manual spreadsheet glue and overpriced per-task SaaS zaps with deterministic, audited department workflows in 14 days.',
          }}
        />

        <DiagnosticCTA
          variant="primary"
          title="Automating Customer Support, Finance, or RevOps workflows?"
          subtitle="Vendor ROI calculators hide exception rework and middleware overage fees. Validate your net payback before signing annual vendor contracts."
          metrics={['Support Ops', 'RevOps Glue', 'Net EBITDA']}
        />
      </div>
    </div>
  );
}
