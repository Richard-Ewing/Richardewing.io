import { Metadata } from 'next';
import { Suspense } from 'react';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ScorecardCheckoutDrawer from '@/app/components/ScorecardCheckoutDrawer';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import { FrameworkDiagnosticBridge } from '@/components/seo/FrameworkDiagnosticBridge';
import PDITool from './content';

export const metadata: Metadata = {
  title: 'Technical Debt Dollar Calculator (PDI)',
  description:
    'Convert software technical debt and bug-fix drag into exact payroll dollars and project the quarter when maintenance consumes 100% of R&D capacity.',
  keywords: [
    'technical debt dollar calculator',
    'product debt index',
    'technical debt cost calculator',
    'engineering maintenance cost',
    'technical insolvency date',
    'refactoring ROI calculator',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/pdi',
  },
  openGraph: {
    title: 'Technical Debt Dollar Calculator (PDI) | Richard Ewing',
    description:
      'Convert software technical debt and bug-fix drag into exact payroll dollars and project the quarter when maintenance consumes 100% of R&D capacity.',
    url: 'https://www.richardewing.io/tools/pdi',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Technical+Debt+Dollar+Calculator+%28PDI%29&category=R%26D+Capital+Audit',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Debt Dollar Calculator (PDI) | Richard Ewing',
    description:
      'Convert software technical debt and bug-fix drag into exact payroll dollars and project the quarter when maintenance consumes 100% of R&D capacity.',
    images: [
      'https://www.richardewing.io/api/og?title=Technical+Debt+Dollar+Calculator+%28PDI%29&category=R%26D+Capital+Audit',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <ToolServerHeader
        slug="pdi"
        eyebrow="R&D Capital Forensics · Product Debt Index"
        h1="Technical Debt Dollar Calculator (Product Debt Index)"
        executiveAnswer="The Technical Debt Dollar Calculator (PDI) translates abstract engineering backlog complaints into exact annual payroll waste and calculates your Technical Insolvency Date: the specific quarter when legacy maintenance and bug fixes consume 100% of engineering capacity and freeze roadmap delivery."
        appName="Technical Debt Dollar Calculator (PDI)"
        appDescription="Financial calculator converting engineering maintenance percentage and headcount compensation into annual technical debt dollars and Technical Insolvency Date."
        howToName="How to Calculate Technical Debt in Dollars and Your Insolvency Date"
        howToDescription="Quantify annual maintenance payroll drag and project when legacy upkeep overtakes net-new feature capacity."
        steps={[
          { name: 'Input engineering headcount and cost', text: 'Enter total developers and fully burdened annual compensation per engineer.' },
          { name: 'Estimate maintenance vs roadmap split', text: 'Specify the real share of sprint hours spent on bug fixes, incidents, and legacy upkeep.' },
          { name: 'Model debt compounding rate', text: 'Factor in quarterly complexity growth from rushed releases or unverified AI code.' },
          { name: 'Export CFO remediation business case', text: 'Present exact dollar payback for refactoring sprints to your CEO, CFO, and board.' },
        ]}
      />

      <Suspense
        fallback={
          <div className="max-w-5xl mx-auto p-8 text-center text-zinc-500 font-mono text-xs">
            Loading PDI Diagnostic...
          </div>
        }
      >
        <PDITool />
      </Suspense>

      <div className="page-container max-w-4xl mx-auto px-6 mb-16 space-y-12">
        <ChainedDiagnosticNextStep
          chainName="CFO & Private Equity R&D Capital Chain"
          stepLabel="Step 1 of 3 · Connected Diagnostic Chain"
          currentToolSlug="pdi"
          currentToolName="Technical Debt Dollar Calculator (PDI)"
          defaultScorecardMetricLabel="Annual R&D Maintenance Drag"
          defaultScorecardMetricValue="35% to 55% of Payroll"
          defaultScorecardStatus="INSOLVENCY HORIZON"
          nextDiagnostic={{
            slug: 'due-diligence',
            title: 'PE Software & AI Due Diligence Audit',
            reason: 'See how acquirers and Private Equity operating partners translate your technical debt dollar figure directly into an enterprise valuation multiple discount.',
          }}
          secondaryDiagnostic={{
            slug: 'section-174-calculator',
            title: 'Section 174 R&D Tax Cost Calculator',
          }}
          commercialStep={{
            href: '/advisory',
            label: 'Commission a 3-Week R&D Capital Audit',
            priceTag: '$7,500',
            description: 'Independent forensic review of engineering allocation, zombie infrastructure, and AI spend with a board-ready remediation package.',
          }}
        />

        <ScorecardCheckoutDrawer
          metricLabel="Typical R&D Carrying Cost Drag"
          metricValue="25% to 55% of Capacity"
          source="pdi"
        />

        <CalculatorIntentProposal
          toolName="Technical Debt Dollar Calculator (PDI)"
          problemDomain="Compounding Technical Debt &amp; Maintenance Insolvency"
          calculatedMetricLabel="Typical R&amp;D Carrying Cost Drag"
          calculatedMetricValue="25% to 55% of Engineering Capacity"
          severityLevel="CRITICAL"
          primaryPathway={{
            destination: 'RICHARD_EWING_ADVISORY',
            relationshipType: 'ADVISES_ON',
            channel: 'EXECUTIVE_ADVISORY',
            headline: 'Commission a Technical Due Diligence & PDI Audit',
            subtext: 'Retain Richard Ewing to audit software capital allocation, quantify balance sheet technical debt, and present remediation roadmaps to the board.',
            actionUrl: '/schedule?source=pdi',
            actionLabel: 'Book 30-Min PDI Triage ↗',
            targetRole: 'PE Operating Partners, CFOs & CPOs',
          }}
          secondaryPathway={{
            destination: 'EXOGRAM_SOFTWARE',
            relationshipType: 'OPERATIONALIZES',
            channel: 'ENGINEERING_RUNTIME',
            headline: 'Preserve Architectural Context Across Sprints',
            subtext: 'Exogram keeps architecture decisions, incident history, and active constraints intact so teams stop re-introducing solved bugs.',
            actionUrl: '/exogram',
            actionLabel: 'Inspect Exogram Architecture ↗',
            targetRole: 'VPs of Engineering & Staff Architects',
          }}
        />

        <FrameworkDiagnosticBridge variant="diagnostic-to-framework" />

        <DiagnosticCTA
          title="Is maintenance quietly eating half your engineering payroll?"
          subtitle="Stop arguing about refactoring in technical jargon. Hand your CFO the exact dollar cost of inaction and fund the fix."
          metrics={['45% Maintenance', 'Roadmap Freeze', 'Multiple Drag']}
          hideCheckoutDrawer={true}
        />
      </div>
    </div>
  );
}
