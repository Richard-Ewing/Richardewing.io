import { Metadata } from 'next';
import { Suspense } from 'react';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import APERTool from './content';

export const metadata: Metadata = {
  title: 'Revenue Per Engineer Calculator (APER)',
  description:
    'Calculate ARR per engineer, benchmark R&D headcount yield against top-quartile SaaS peers, and model hiring vs margin impact for your next board deck.',
  keywords: [
    'revenue per engineer calculator',
    'ARR per engineer benchmark',
    'APER diagnostic',
    'engineering headcount ROI',
    'SaaS R&D efficiency benchmark',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/aper',
  },
  openGraph: {
    title: 'Revenue Per Engineer Calculator (APER) | Richard Ewing',
    description:
      'Calculate ARR per engineer, benchmark R&D headcount yield against top-quartile SaaS peers, and model hiring vs margin impact for your next board deck.',
    url: 'https://www.richardewing.io/tools/aper',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Revenue+Per+Engineer+Calculator+%28APER%29&category=Workforce+Yield',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revenue Per Engineer Calculator (APER) | Richard Ewing',
    description:
      'Calculate ARR per engineer, benchmark R&D headcount yield against top-quartile SaaS peers, and model hiring vs margin impact for your next board deck.',
    images: [
      'https://www.richardewing.io/api/og?title=Revenue+Per+Engineer+Calculator+%28APER%29&category=Workforce+Yield',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <ToolServerHeader
        slug="aper"
        eyebrow="Workforce Capital Yield · APER Benchmark"
        h1="Revenue Per Engineer Calculator & SaaS Benchmark (APER)"
        executiveAnswer="The Revenue Per Engineer Calculator (APER) measures Annual Recurring Revenue generated per full-time engineering headcount and benchmarks your R&D payroll multiplier against Series A through public B2B SaaS cohorts so CEOs, CFOs, and VPs of Engineering can justify hiring plans with hard yield math."
        appName="Revenue Per Engineer Calculator (APER)"
        appDescription="Executive SaaS workforce calculator measuring ARR per engineer, R&D payroll ratio, and hiring dilution against industry stage benchmarks."
        howToName="How to Benchmark Revenue Per Engineer Against SaaS Peers"
        howToDescription="Divide Annual Recurring Revenue by fully loaded engineering headcount and compare against stage-specific efficiency bands."
        steps={[
          { name: 'Enter ARR and growth rate', text: 'Input current Annual Recurring Revenue and year-over-year net revenue growth.' },
          { name: 'Input engineering headcount', text: 'Enter total full-time software engineers, contractors, and average fully burdened cost.' },
          { name: 'Compare against SaaS quartiles', text: 'Benchmark your ARR per engineer against $250K distressed, $400K healthy, and $750K+ top-decile cohorts.' },
          { name: 'Stress-test new headcount reqs', text: 'See how proposed hiring requisitions change your R&D payback ratio before signing offer letters.' },
        ]}
      />

      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto p-12 text-center text-zinc-500 font-mono text-xs">
            Loading APER Efficiency Diagnostic...
          </div>
        }
      >
        <APERTool />
      </Suspense>

      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        <ChainedDiagnosticNextStep
          chainName="CFO & Private Equity R&D Capital Chain"
          stepLabel="Step 2 of 3 · Connected Diagnostic Chain"
          currentToolSlug="aper"
          currentToolName="Revenue Per Engineer Calculator (APER)"
          defaultScorecardMetricLabel="Target SaaS Benchmark"
          defaultScorecardMetricValue="$350K to $650K ARR/Eng"
          defaultScorecardStatus="WORKFORCE YIELD"
          nextDiagnostic={{
            slug: 'pdi',
            title: 'Technical Debt Dollar Calculator (PDI)',
            reason: 'Low ARR per engineer is rarely a talent problem; it is usually maintenance drag. Quantify how much payroll is trapped in legacy upkeep.',
          }}
          secondaryDiagnostic={{
            slug: 'section-174-calculator',
            title: 'Section 174 R&D Tax Cost Calculator',
          }}
          commercialStep={{
            href: '/advisory',
            label: 'Book an Executive R&D Efficiency Review',
            priceTag: '$450 / $7,500',
            description: 'Align CEO, CFO, CPO, and VP of Engineering headcount plans around revenue yield instead of vanity story-point velocity.',
          }}
        />

        <DiagnosticCTA
          variant="warning"
          title="Adding headcount while feature shipping velocity stays flat?"
          subtitle="More engineers on a high-debt codebase slows everyone down. Audit your Revenue Per Engineer and maintenance drag before opening new reqs."
          metrics={['ARR / Engineer', 'Span of Control', 'Hiring ROI']}
        />
      </div>
    </div>
  );
}
