import type { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import CFOCapitalizationTool from '../cfo-capitalization-audit/content';
import DirectAnswerBlock from '@/components/DirectAnswerBlock';

export const metadata: Metadata = {
  title: 'Section 174 R&D Tax Cost Calculator',
  description:
    'Calculate IRS Section 174 5-year software amortization drag, phantom taxable income, and cash tax exposure when AI maintenance is misbooked as R&D.',
  keywords: [
    'Section 174 R&D tax calculator',
    'Section 174 software capitalization',
    'IRS software amortization calculator',
    'OpEx vs CapEx software engineering',
    'CFO R&D tax audit',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/section-174-calculator',
  },
  openGraph: {
    title: 'Section 174 R&D Tax Cost Calculator | Richard Ewing',
    description:
      'Calculate IRS Section 174 5-year software amortization drag, phantom taxable income, and cash tax exposure when AI maintenance is misbooked as R&D.',
    url: 'https://www.richardewing.io/tools/section-174-calculator',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Section+174+R%26D+Tax+Cost+Calculator&category=CFO+Tax+Forensics',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 174 R&D Tax Cost Calculator | Richard Ewing',
    description:
      'Calculate IRS Section 174 5-year software amortization drag, phantom taxable income, and cash tax exposure when AI maintenance is misbooked as R&D.',
    images: [
      'https://www.richardewing.io/api/og?title=Section+174+R%26D+Tax+Cost+Calculator&category=CFO+Tax+Forensics',
    ],
  },
};

export default function Section174CalculatorPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <ToolServerHeader
        slug="section-174-calculator"
        eyebrow="CFO Tax Forensics · OpEx vs CapEx Audit"
        h1="IRS Section 174 Software R&D Tax Cost Calculator"
        executiveAnswer="The Section 174 R&D Tax Cost Calculator models the first-year cash tax hit caused by mandatory 5-year amortization of domestic software development expenses and quantifies how much phantom taxable income CFOs and Corporate Controllers eliminate by separating deductible bug-fix maintenance from true R&D."
        appName="Section 174 R&D Tax Cost Calculator"
        appDescription="CFO financial calculator quantifying IRS Section 174 5-year software amortization drag and cash tax savings from accurate maintenance OpEx classification."
        howToName="How to Calculate Section 174 Software Amortization Cash Tax Impact"
        howToDescription="Separate capitalizable R&D payroll from routine bug-fix and prompt-maintenance OpEx to calculate first-year tax exposure."
        steps={[
          { name: 'Enter annual R&D payroll', text: 'Input total domestic software engineering compensation and cloud development spend.' },
          { name: 'Compare reported vs actual R&D', text: 'Contrast management-reported innovation allocation against actual sprint maintenance hours.' },
          { name: 'Apply half-year amortization rule', text: 'Model the 10% year-one deduction convention and 21% corporate tax impact on deferred expenses.' },
          { name: 'Export CFO audit schedule', text: 'Share the OpEx reclassification summary with your Corporate Controller and tax advisors.' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8">
        <DirectAnswerBlock
          question="How does Section 174 affect AI software capitalization and tax liability?"
          answer="Under Section 174, domestic software development must be amortized over 5 years (10% deduction in year one under the mid-year convention) rather than expensed immediately. When engineering teams spend 50% to 65% of their payroll fixing non-deterministic AI bugs or legacy maintenance, misclassifying that routine upkeep as capitalizable R&D creates phantom taxable income and avoidable cash tax outlays."
          category="TAX FORENSICS & R&D AUDITING"
          keyTakeaways={[
            'Domestic software R&D requires 5-year straight-line amortization with a 10% first-year mid-year convention.',
            'Routine bug fixing, incident response, and prompt maintenance are deductible current operating expenses, not capitalizable R&D.',
            'Separating maintenance from net-new development protects cash flow and gives the board honest R&D yield telemetry.',
          ]}
          definedTerm={{
            name: 'Section 174 Software Capitalization Drag',
            termCode: 'SECTION-174-DRAG',
            description:
              'The cash tax penalty resulting from mandatory 5-year amortization of software development expenses when routine maintenance labor is misreported as capitalizable R&D.',
            inDefinedTermSet: 'https://www.richardewing.io/#definedtermset',
            inDefinedTermSetName: 'AI Economics Defined Terms',
          }}
          citationUrl="https://www.richardewing.io/tools/section-174-calculator"
          authorName="Richard Ewing"
          authorTitle="Product & AI Economist"
          authorUrl="https://www.richardewing.io"
          renderJsonLd={true}
        />
      </div>

      <div className="space-y-8">
        <CFOCapitalizationTool hideDiagnosticCTA={true} />

        <div className="page-container max-w-4xl mx-auto px-6 pb-20 space-y-10">
          <ChainedDiagnosticNextStep
            chainName="CFO & Private Equity R&D Capital Chain"
            stepLabel="Step 2 of 3 · Connected Diagnostic Chain"
            currentToolSlug="section-174-calculator"
            currentToolName="Section 174 R&D Tax Cost Calculator"
            defaultScorecardMetricLabel="Disguised Maintenance OpEx"
            defaultScorecardMetricValue="$800K to $3.5M"
            defaultScorecardStatus="CFO TAX AUDIT"
            nextDiagnostic={{
              slug: 'pdi',
              title: 'Technical Debt Dollar Calculator (PDI)',
              reason: 'Quantify your sprint-level maintenance burden in PDI to substantiate your OpEx vs R&D split for finance and board reporting.',
            }}
            secondaryDiagnostic={{
              slug: 'due-diligence',
              title: 'PE Software & AI Due Diligence Audit',
            }}
            commercialStep={{
              href: '/advisory',
              label: 'Commission an R&D Capital Allocation Audit',
              priceTag: '$7,500 Sprint',
              description: 'Forensic 3-week audit of engineering time allocation, maintenance drag, and AI inference OpEx built for CFOs and Controllers.',
            }}
          />

          <DiagnosticCTA
            variant="warning"
            title="Booking 75% of engineering payroll as R&D while velocity stalls?"
            subtitle="Align your engineering sprint ledger with CFO tax reality before overpaying cash taxes on routine bug-fix labor."
            metrics={['Section 174', 'OpEx vs CapEx', 'Cash Tax Shield']}
          />

          <CalculatorIntentProposal
            toolName="Section 174 R&amp;D Tax Cost Calculator"
            problemDomain="Misclassified Engineering OpEx &amp; Section 174 Amortization Drag"
            calculatedMetricLabel="Typical R&amp;D Misclassification"
            calculatedMetricValue="$800,000 to $3.5M in Disguised Maintenance OpEx"
            severityLevel="ELEVATED"
            primaryPathway={{
              destination: 'RICHARD_EWING_ADVISORY',
              relationshipType: 'ADVISES_ON',
              channel: 'EXECUTIVE_ADVISORY',
              headline: 'R&D Capital Audit & FinOps Financial Realignment',
              subtext: 'Retain Richard Ewing to conduct forensic sprint audits, classify genuine innovation vs maintenance, and align engineering reporting with finance.',
              actionUrl: '/advisory',
              actionLabel: 'Inquire for CFO R&D Capital Audit ↗',
              targetRole: 'Chief Financial Officers & Directors of Finance',
            }}
            secondaryPathway={{
              destination: 'EXOGRAM_SOFTWARE',
              relationshipType: 'OPERATIONALIZES',
              channel: 'ENGINEERING_RUNTIME',
              headline: 'Structured Engineering Decision Provenance with Exogram',
              subtext: 'Keep clean provenance records distinguishing architecture builds from incident remediation across engineering workflows.',
              actionUrl: '/exogram',
              actionLabel: 'Explore Exogram Provenance ↗',
              targetRole: 'Finance Directors & VPs of Engineering',
            }}
          />
        </div>
      </div>
    </main>
  );
}
