import { Metadata } from 'next';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import HallucinationTaxTool from './content';

export const metadata: Metadata = {
  title: 'AI Hallucination Cost & QA Calculator',
  description:
    'Calculate the hidden payroll cost of human-in-the-loop verification, error rework, and customer churn caused by LLM hallucinations in production.',
  keywords: [
    'AI hallucination cost calculator',
    'LLM verification labor cost',
    'human in the loop QA cost',
    'hallucination tax',
    'enterprise AI error rate ROI',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/hallucination-tax',
  },
  openGraph: {
    title: 'AI Hallucination Cost & QA Calculator | Richard Ewing',
    description:
      'Calculate the hidden payroll cost of human-in-the-loop verification, error rework, and customer churn caused by LLM hallucinations in production.',
    url: 'https://www.richardewing.io/tools/hallucination-tax',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=AI+Hallucination+Cost+%26+QA+Calculator&category=Quality+Economics',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Hallucination Cost & QA Calculator | Richard Ewing',
    description:
      'Calculate the hidden payroll cost of human-in-the-loop verification, error rework, and customer churn caused by LLM hallucinations in production.',
    images: [
      'https://www.richardewing.io/api/og?title=AI+Hallucination+Cost+%26+QA+Calculator&category=Quality+Economics',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <ToolServerHeader
        slug="hallucination-tax"
        eyebrow="Quality Economics · Verification Payroll Drag"
        h1="AI Hallucination Cost & Human QA Tax Calculator"
        executiveAnswer="The AI Hallucination Cost and QA Calculator quantifies the annual payroll hours, customer support escalations, and SLA penalties triggered when staff must manually fact-check probabilistic AI outputs across legal, finance, healthcare, and customer-facing SaaS workflows."
        appName="AI Hallucination Cost & QA Calculator"
        appDescription="Financial diagnostic calculating hidden human verification labor, incident remediation, and churn liability caused by production AI hallucinations."
        howToName="How to Calculate Your Organization's AI Hallucination Tax"
        howToDescription="Quantify weekly verification hours, error frequency, and downstream remediation cost across AI-assisted teams."
        steps={[
          { name: 'Enter team size and hourly cost', text: 'Specify how many employees review or rely on AI outputs and their fully burdened hourly rate.' },
          { name: 'Input weekly verification time', text: 'Set hours per person spent double-checking citations, numbers, code, or customer drafts.' },
          { name: 'Model escaped defect cost', text: 'Include monthly incidents that reach customers and the cost to remediate each error.' },
          { name: 'Compare deterministic gating ROI', text: 'See how much annual payroll is recovered by enforcing deterministic schema and source checks.' },
        ]}
      />

      <HallucinationTaxTool />

      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        <ChainedDiagnosticNextStep
          chainName="AI Reliability & Margin Protection Chain"
          stepLabel="Step 1 of 3 · Connected Diagnostic Chain"
          currentToolSlug="hallucination-tax"
          currentToolName="AI Hallucination Cost & QA Calculator"
          defaultScorecardMetricLabel="Annual Verification Payroll Tax"
          defaultScorecardMetricValue="4.3 hrs/wk per Seat"
          defaultScorecardStatus="HIDDEN QA DRAG"
          nextDiagnostic={{
            slug: 'fte-displacement',
            title: 'Department AI Automation ROI Model',
            reason: 'Factor your real human QA verification overhead directly into your department automation model so your CFO business case survives audit.',
          }}
          secondaryDiagnostic={{
            slug: 'vta',
            title: 'AI Volatility Tax (VTA) Calculator',
          }}
          commercialStep={{
            href: '/exogram',
            label: 'Inspect Exogram Deterministic Verification',
            priceTag: 'Architecture + $450 Audit',
            description: 'See how source-qualified context assembly and 3-gate runtime checks stop unverified claims before staff waste hours reviewing them.',
          }}
        />

        <DiagnosticCTA
          variant="danger"
          title="Spending 4+ hours per employee every week fact-checking AI outputs?"
          subtitle="If humans have to verify every output by hand, you bought an expensive typing assistant, not automation. Fix your verification architecture."
          metrics={['4.3h/wk Review', 'Escaped Errors', 'Margin Erosion']}
        />
      </div>
    </div>
  );
}
