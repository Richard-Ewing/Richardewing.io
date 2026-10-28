import { Metadata } from 'next';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import DueDiligenceTool from './content';

export const metadata: Metadata = {
  title: 'PE Software & AI Due Diligence Audit',
  description:
    'Run a pre-close technical due diligence scan for Private Equity and M&A teams to price codebase debt, cloud bloat, and AI margin risk before LOI.',
  keywords: [
    'PE software due diligence checklist',
    'AI technical due diligence',
    'M&A software codebase audit',
    'private equity tech diligence',
    'valuation multiple impairment calculator',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/due-diligence',
  },
  openGraph: {
    title: 'PE Software & AI Due Diligence Audit | Richard Ewing',
    description:
      'Run a pre-close technical due diligence scan for Private Equity and M&A teams to price codebase debt, cloud bloat, and AI margin risk before LOI.',
    url: 'https://www.richardewing.io/tools/due-diligence',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=PE+Software+%26+AI+Due+Diligence+Audit&category=M%26A+Forensics',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PE Software & AI Due Diligence Audit | Richard Ewing',
    description:
      'Run a pre-close technical due diligence scan for Private Equity and M&A teams to price codebase debt, cloud bloat, and AI margin risk before LOI.',
    images: [
      'https://www.richardewing.io/api/og?title=PE+Software+%26+AI+Due+Diligence+Audit&category=M%26A+Forensics',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <ToolServerHeader
        slug="due-diligence"
        eyebrow="M&A Forensics · Deal Valuation Defense"
        h1="Private Equity Software & AI Technical Due Diligence Audit"
        executiveAnswer="The PE Software and AI Due Diligence Audit quantifies post-close CapEx remediation, cloud infrastructure bloat, key-person engineering concentration, and uncapped AI inference liabilities so Private Equity Operating Partners, CorpDev Directors, and CFOs can price technical risk before signing an LOI."
        appName="PE Software & AI Due Diligence Audit"
        appDescription="Pre-close technical due diligence calculator pricing software debt, cloud over-provisioning, and AI gross margin exposure for M&A and Private Equity buyers."
        howToName="How to Price Software and AI Technical Risk During M&A Due Diligence"
        howToDescription="Evaluate target ARR, cloud COGS, maintenance backlog, and AI vendor lock-in to calculate valuation impairment."
        steps={[
          { name: 'Input deal baseline', text: 'Enter target ARR, proposed valuation multiple, and total engineering headcount.' },
          { name: 'Score cloud and AI COGS', text: 'Assess infrastructure spend as a share of revenue and uncapped third-party LLM dependencies.' },
          { name: 'Quantify codebase debt', text: 'Evaluate test coverage, deployment frequency, and unverified AI-generated code debt.' },
          { name: 'Calculate purchase price adjustment', text: 'Generate an Investment Committee readout detailing Day-100 stabilization CapEx.' },
        ]}
      />

      <DueDiligenceTool />

      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        <ChainedDiagnosticNextStep
          chainName="CFO & Private Equity R&D Capital Chain"
          stepLabel="Step 2 of 3 · Connected Diagnostic Chain"
          currentToolSlug="due-diligence"
          currentToolName="PE Software & AI Due Diligence Audit"
          defaultScorecardMetricLabel="Estimated Valuation Adjustment"
          defaultScorecardMetricValue="0.8x to 2.2x ARR Risk"
          defaultScorecardStatus="IC DILIGENCE AUDIT"
          nextDiagnostic={{
            slug: 'section-174-calculator',
            title: 'Section 174 R&D Tax Cost Calculator',
            reason: 'Check whether the target company has misclassified routine maintenance OpEx as Section 174 capitalizable R&D, creating hidden cash tax exposure post-close.',
          }}
          secondaryDiagnostic={{
            slug: 'aper',
            title: 'Revenue Per Engineer Calculator (APER)',
          }}
          commercialStep={{
            href: '/advisory',
            label: 'Retain Independent M&A / PE Diligence Oversight',
            priceTag: '$7,500 Sprint',
            description: 'Independent pre-LOI and confirmatory technical due diligence readouts built for Investment Committees, PE Operating Partners, and acquirer CFOs.',
          }}
        />

        <DiagnosticCTA
          variant="danger"
          title="Evaluating a SaaS acquisition with 'AI-powered' claims?"
          subtitle="Don't inherit negative-margin AI features and unmaintained boilerplate at a 7x ARR multiple. Run an independent pre-close diligence review."
          metrics={['Pre-LOI Red Flags', 'EBITDA Margin', '100-Day Plan']}
        />
      </div>
    </div>
  );
}
