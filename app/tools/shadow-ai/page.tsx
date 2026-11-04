import { Metadata } from 'next';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import ShadowContent from './content';

export const metadata: Metadata = {
  title: 'Shadow AI Risk & Breach Calculator',
  description:
    'Shadow AI is unsanctioned employee use of chatbots, coding assistants, and personal API keys. Calculate PII egress risk and SOC2 breach exposure.',
  keywords: [
    'shadow AI',
    'what is shadow AI',
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
    title: 'Shadow AI Risk & Breach Calculator | Richard Ewing',
    description:
      'Shadow AI is unsanctioned employee use of chatbots, coding assistants, and personal API keys. Calculate PII egress risk and SOC2 breach exposure.',
    url: 'https://www.richardewing.io/tools/shadow-ai',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Shadow+AI+Risk+%26+Breach+Calculator&category=SOC2+%26+IP+Security',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadow AI Risk & Breach Calculator | Richard Ewing',
    description:
      'Shadow AI is unsanctioned employee use of chatbots, coding assistants, and personal API keys. Calculate PII egress risk and SOC2 breach exposure.',
    images: [
      'https://www.richardewing.io/api/og?title=Shadow+AI+Risk+%26+Breach+Calculator&category=SOC2+%26+IP+Security',
    ],
  },
};

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Shadow AI in the enterprise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Shadow AI is the unsanctioned use of public chatbots, browser extensions, personal API keys, and local coding agents by employees outside IT and security governance, exposing proprietary source code, financial records, and customer PII.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do CISOs and General Counsel reduce Shadow AI risk without slowing teams down?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Blanket firewall blocks push employees onto personal phones and laptops. Effective remediation pairs endpoint discovery with a sanctioned zero-data-retention workspace and scoped non-human credentials for approved tools.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ToolServerHeader
        slug="shadow-ai"
        eyebrow="SOC2 & IP Egress · Zero-Trust Audit"
        h1="Shadow AI Risk & Enterprise Data Leakage Calculator"
        executiveAnswer="Shadow AI is unsanctioned employee use of public chatbots, browser extensions, personal API keys, and local coding agents outside IT security controls. CISOs, CIOs, CFOs, and General Counsel use this calculator to quantify source-code egress, customer PII exposure, and SOC2 audit liability across engineering, finance, support, and legal teams."
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
