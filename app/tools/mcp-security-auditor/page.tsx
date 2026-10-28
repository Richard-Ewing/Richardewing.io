import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import MCPAuditorTool from './content';

export const metadata: Metadata = {
  title: 'MCP Security Checklist & Risk Auditor',
  description:
    'Audit Model Context Protocol (MCP) servers against tool poisoning, STDIO credential leaks, and OWASP agentic risks. Generate a CISO remediation score.',
  keywords: [
    'MCP security checklist',
    'Model Context Protocol security auditor',
    'OWASP MCP Top 10',
    'tool poisoning attack',
    'enterprise AI agent security',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/mcp-security-auditor',
  },
  openGraph: {
    title: 'MCP Security Checklist & Risk Auditor | Richard Ewing',
    description:
      'Audit Model Context Protocol (MCP) servers against tool poisoning, STDIO credential leaks, and OWASP agentic risks. Generate a CISO remediation score.',
    url: 'https://www.richardewing.io/tools/mcp-security-auditor',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=MCP+Security+Checklist+%26+Risk+Auditor&category=Agentic+Security',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCP Security Checklist & Risk Auditor | Richard Ewing',
    description:
      'Audit Model Context Protocol (MCP) servers against tool poisoning, STDIO credential leaks, and OWASP agentic risks. Generate a CISO remediation score.',
    images: [
      'https://www.richardewing.io/api/og?title=MCP+Security+Checklist+%26+Risk+Auditor&category=Agentic+Security',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <ToolServerHeader
        slug="mcp-security-auditor"
        eyebrow="Agentic Security · CISO Audit Matrix"
        h1="Model Context Protocol (MCP) Security Checklist & Risk Auditor"
        executiveAnswer="The MCP Security Checklist and Risk Auditor evaluates enterprise Model Context Protocol servers across unpinned tool schemas, local STDIO credential exposure, indirect prompt-injection poisoning, and missing OAuth scopes so CISOs and Security Engineering Managers can lock down agentic tool access."
        appName="MCP Security Checklist & Risk Auditor"
        appDescription="Interactive CISO security checklist scoring Model Context Protocol (MCP) deployments against tool poisoning, STDIO secret exposure, and lateral exfiltration."
        howToName="How to Audit Enterprise Model Context Protocol (MCP) Servers"
        howToDescription="Evaluate MCP server manifests, transport isolation, credential scoping, and runtime approval gates."
        steps={[
          { name: 'Inventory connected MCP servers', text: 'Count developer laptop STDIO servers and shared production HTTP/SSE MCP endpoints.' },
          { name: 'Check manifest pinning and auth', text: 'Verify cryptographic hash pinning on tool descriptions and scoped OAuth token isolation.' },
          { name: 'Test indirect injection vectors', text: 'Assess whether untrusted external data can trigger write or delete tools without human sign-off.' },
          { name: 'Export CISO remediation plan', text: 'Copy the executive security scorecard to Slack and prioritize high-blast-radius controls.' },
        ]}
      />

      <MCPAuditorTool />

      <div className="page-container max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <ChainedDiagnosticNextStep
          chainName="Enterprise AI Security & Governance Chain"
          stepLabel="Step 1 of 3 · Connected Diagnostic Chain"
          currentToolSlug="mcp-security-auditor"
          currentToolName="MCP Security Checklist & Risk Auditor"
          defaultScorecardMetricLabel="Agentic Attack Surface"
          defaultScorecardMetricValue="Unpinned MCP Tools"
          defaultScorecardStatus="CRITICAL CISO RISK"
          nextDiagnostic={{
            slug: 'shadow-ai',
            title: 'Enterprise Shadow AI Risk Calculator',
            reason: 'Pair your MCP server risk score with an employee Shadow AI scan to quantify unauthorized LLM data egress and SOC2 audit exposure.',
          }}
          secondaryDiagnostic={{
            slug: 'prompt-injection-sandbox',
            title: 'Prompt Injection Intrusion Sandbox',
          }}
          commercialStep={{
            href: '/exogram',
            label: 'Inspect Exogram 3-Gate Runtime Verification',
            priceTag: 'Architecture + $2,500 Audit',
            description: 'Enforce deterministic action admissibility, credential isolation, and revocable context governance before AI agents touch production systems.',
          }}
        />

        <CalculatorIntentProposal
          toolName="MCP Security Checklist &amp; Risk Auditor"
          problemDomain="Unsanitized STDIO Transports &amp; Shadow MCP Exfiltration"
          calculatedMetricLabel="Typical Attack Surface Risk"
          calculatedMetricValue="HIGH &bull; Unpinned Tool Schemas &amp; Unbounded STDIO Execution"
          severityLevel="CRITICAL"
          primaryPathway={{
            destination: 'EXOGRAM_SOFTWARE',
            relationshipType: 'OPERATIONALIZES',
            channel: 'ENGINEERING_RUNTIME',
            headline: 'Enforce Zero-Trust Runtime Gates with Exogram',
            subtext: 'Exogram qualifies context provenance and enforces explicit action boundaries before agents execute state-mutating operations.',
            actionUrl: '/exogram',
            actionLabel: 'Explore Exogram Governance ↗',
            targetRole: 'CISOs & AI Security Architects',
          }}
          secondaryPathway={{
            destination: 'RICHARD_EWING_ADVISORY',
            relationshipType: 'ADVISES_ON',
            channel: 'EXECUTIVE_ADVISORY',
            headline: 'Enterprise AI Governance & Threat Modeling Audit',
            subtext: 'Retain Richard Ewing to audit developer and production MCP integrations, eliminate secret leakage, and satisfy enterprise security reviews.',
            actionUrl: '/services',
            actionLabel: 'Inquire for Security Governance Audit ↗',
            targetRole: 'CISOs & VPs of Security Engineering',
          }}
        />
      </div>
    </div>
  );
}
