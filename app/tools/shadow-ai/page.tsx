import { Metadata } from 'next';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import ShadowContent from './content';

export const metadata: Metadata = {
  title: 'Enterprise Shadow AI Risk Calculator',
  description:
    'Estimate unauthorized employee LLM usage, intellectual property egress exposure, and SOC2 audit liability across engineering, legal, and finance teams.',
  keywords: [
    'enterprise shadow AI risk calculator',
    'shadow AI scanner',
    'LLM data leakage risk',
    'SOC2 AI compliance audit',
    'CISO shadow AI exposure',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/shadow-ai',
  },
  openGraph: {
    title: 'Enterprise Shadow AI Risk Calculator | Richard Ewing',
    description:
      'Estimate unauthorized employee LLM usage, intellectual property egress exposure, and SOC2 audit liability across engineering, legal, and finance teams.',
    url: 'https://www.richardewing.io/tools/shadow-ai',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Enterprise+Shadow+AI+Risk+Calculator&category=SOC2+%26+IP+Security',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Shadow AI Risk Calculator | Richard Ewing',
    description:
      'Estimate unauthorized employee LLM usage, intellectual property egress exposure, and SOC2 audit liability across engineering, legal, and finance teams.',
    images: [
      'https://www.richardewing.io/api/og?title=Enterprise+Shadow+AI+Risk+Calculator&category=SOC2+%26+IP+Security',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <ToolServerHeader
        slug="shadow-ai"
        eyebrow="SOC2 & IP Egress · Zero-Trust Audit"
        h1="Enterprise Shadow AI & Data Leakage Risk Calculator"
        executiveAnswer="The Enterprise Shadow AI Risk Calculator models unsanctioned employee chatbot, browser extension, and personal API key usage across engineering, finance, support, and legal teams so CISOs, CIOs, and General Counsel can quantify source-code and customer PII exposure before a SOC2 or customer audit."
        appName="Enterprise Shadow AI Risk Calculator"
        appDescription="Client-side Shadow AI exposure calculator estimating unauthorized LLM endpoints, PII leakage probability, and regulatory breach cost."
        howToName="How to Quantify Enterprise Shadow AI Exposure"
        howToDescription="Audit employee headcount, sensitive data access, and unsanctioned AI endpoints without uploading network logs."
        steps={[
          { name: 'Set workforce and data profile', text: 'Enter employee headcount and select regulated data classes handled (source code, PII, HIPAA, SOC2).' },
          { name: 'Audit endpoint controls', text: 'Indicate whether DLP, SSO enterprise LLM workspaces, or DNS egress filters are active.' },
          { name: 'Inspect local traffic heuristics', text: 'Optionally parse anonymized DNS or proxy CSV summaries locally in your browser with zero upload.' },
          { name: 'Generate CISO board readout', text: 'Quantify expected breach exposure and share the remediation scorecard with leadership.' },
        ]}
      />

      <ShadowContent />

      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        <ChainedDiagnosticNextStep
          chainName="Enterprise AI Security & Governance Chain"
          stepLabel="Step 2 of 3 · Connected Diagnostic Chain"
          currentToolSlug="shadow-ai"
          currentToolName="Enterprise Shadow AI Risk Calculator"
          defaultScorecardMetricLabel="Shadow AI Egress Risk"
          defaultScorecardMetricValue="SOC2 / IP Exposure"
          defaultScorecardStatus="ELEVATED EGRESS RISK"
          nextDiagnostic={{
            slug: 'mcp-security-auditor',
            title: 'MCP Security Checklist & Risk Auditor',
            reason: 'Shadow AI is no longer just copy-pasting into chat tabs. Audit local MCP servers running with live database and GitHub credentials on developer laptops.',
          }}
          secondaryDiagnostic={{
            slug: 'eu-ai-act-checker',
            title: 'EU AI Act Compliance Assessment',
          }}
          commercialStep={{
            href: '/exogram',
            label: 'Explore Exogram Governed Context Architecture',
            priceTag: 'Enterprise Governance',
            description: 'Give teams persistent, user-revocable AI memory inside sanctioned boundaries so employees stop pasting company secrets into consumer tools.',
          }}
        />

        <DiagnosticCTA
          variant="danger"
          title="Are employees pasting customer contracts and source code into personal AI accounts?"
          subtitle="Blocking AI domains without giving teams a governed alternative only drives usage onto personal devices. Build a practical governance policy."
          metrics={['Zero-Upload Scan', 'SOC2 Readiness', 'IP Protection']}
        />
      </div>
    </div>
  );
}
