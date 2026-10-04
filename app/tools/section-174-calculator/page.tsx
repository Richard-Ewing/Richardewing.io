import type { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import CFOCapitalizationTool from '../cfo-capitalization-audit/content';
import DirectAnswerBlock from '@/components/DirectAnswerBlock';

export const metadata: Metadata = {
  title: 'Section 174 AI Tax Calculator | Richard Ewing',
  description: 'Audit Section 174 software capitalization drag, calculate phantom tax liabilities from AI maintenance, and separate deductible OpEx in CFO language.',
  keywords: [
    'Section 174 calculator',
    'Section 174 software capitalization',
    'AI R&D tax credit audit',
    'OpEx vs CapEx software engineering',
    'IRS software amortization tax drag',
    'CFO software capitalization audit'
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/section-174-calculator',
  },
  openGraph: {
    title: 'Section 174 AI Tax Calculator | Richard Ewing',
    description: 'Calculate Section 174 software amortization drag and phantom tax liability from AI development.',
    url: 'https://www.richardewing.io/tools/section-174-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 174 AI Tax Calculator | Richard Ewing',
    description: 'Calculate Section 174 software amortization drag and phantom tax liability from AI development.',
  }
};

export default function Section174CalculatorPage() {
  return (
    <main className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8">
        <DirectAnswerBlock
          question="How does Section 174 affect AI software capitalization and tax liability?"
          answer="Under Section 174, software development must be amortized over 5 years domestically rather than expensed immediately. When engineering teams spend 50% to 65% of their payroll fixing non-deterministic AI bugs or maintenance, misclassifying that OpEx as capitalizable R&D creates phantom taxable income and major delayed cash tax burdens."
          category="TAX FORENSICS & R&D AUDITING"
          keyTakeaways={[
            "Domestic software development requires 5-year straight-line amortization with a 10% first-year half-year convention.",
            "Routine bug fixing, prompt maintenance, and model tuning are deductible current expenses, not capitalizable R&D.",
            "Misclassifying maintenance as R&D innovation creates artificial taxable income without cash flow to match."
          ]}
          definedTerm={{
            name: "Section 174 Software Capitalization Drag",
            termCode: "SECTION-174-DRAG",
            description: "The cash tax penalty resulting from mandatory 5-year amortization of software development expenses when maintenance labor is misreported as capitalizable R&D.",
            inDefinedTermSet: "https://www.richardewing.io/#definedtermset",
            inDefinedTermSetName: "AI Economics Defined Terms"
          }}
          citationUrl="https://www.richardewing.io/tools/section-174-calculator"
          authorName="Richard Ewing"
          authorTitle="AI Economist & Enterprise Cost Strategist"
          authorUrl="https://www.richardewing.io"
          renderJsonLd={true}
        />
      </div>

      <div className="space-y-8">
        <CFOCapitalizationTool />
        <div className="page-container max-w-4xl mx-auto px-6 mb-16">
          <CalculatorIntentProposal
            toolName="Section 174 AI Software Tax & Capitalization Audit"
            problemDomain="Misclassified Engineering OpEx & Section 174 Amortization Drag"
            calculatedMetricLabel="Typical R&D Misclassification"
            calculatedMetricValue="$800,000 to $3.5M in Disguised Maintenance OpEx"
            severityLevel="ELEVATED"
            primaryPathway={{
              destination: 'RICHARD_EWING_ADVISORY',
              relationshipType: 'ADVISES_ON',
              channel: 'EXECUTIVE_ADVISORY',
              headline: 'R&D Capital Audit & FinOps Financial Realignment',
              subtext: 'Retain Richard Ewing to conduct forensic sprint audits, classify genuine innovation vs maintenance, and structure defensible Section 174 capitalization ledgers.',
              actionUrl: '/workspace/finance',
              actionLabel: 'Inquire for CFO R&D Capital Audit ↗',
              targetRole: 'Chief Financial Officers & VPs of Finance'
            }}
            secondaryPathway={{
              destination: 'EXOGRAM_SOFTWARE',
              relationshipType: 'OPERATIONALIZES',
              channel: 'ENGINEERING_RUNTIME',
              headline: 'Automated Sprint Task Classification with Exogram',
              subtext: 'Exogram tracks developer and agent commits at the network proxy layer, automatically categorizing code changes into maintenance vs innovation tax buckets.',
              actionUrl: '/exogram',
              actionLabel: 'Explore Exogram Telemetry Ledger ↗',
              targetRole: 'Finance Directors & Corporate Controllers'
            }}
          />
        </div>
      </div>
    </main>
  );
}
