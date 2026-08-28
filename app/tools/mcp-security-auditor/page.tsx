import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import MCPAuditorTool from './content';

export const metadata: Metadata = {
    title: 'Model Context Protocol (MCP) Security Auditor | Zero-Trust Diagnostic',
    description: 'Audit your enterprise Model Context Protocol (MCP) servers, STDIO transport exposure, tool poisoning risks, and OWASP MCP Top 10 compliance.',
    keywords: [
        'Model Context Protocol security',
        'MCP vulnerability scanner',
        'OWASP MCP Top 10',
        'Tool poisoning attack',
        'Shadow MCP auditor',
        'STDIO transport security'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/mcp-security-auditor',
    },
    openGraph: {
        title: 'MCP Security Auditor | Richard Ewing',
        description: 'Quantify your enterprise attack surface across unmanaged Model Context Protocol connections.',
        url: 'https://www.richardewing.io/tools/mcp-security-auditor',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <MCPAuditorTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="MCP Security &amp; Tool-Poisoning Auditor"
                    problemDomain="Unsanitized STDIO Transports &amp; Shadow MCP Exfiltration"
                    calculatedMetricLabel="Typical Attack Surface Risk"
                    calculatedMetricValue="HIGH &bull; Unpinned Tool Schemas &amp; Unbounded STDIO Execution"
                    severityLevel="CRITICAL"
                    primaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Deploy Zero-Trust MCP Gateways with Exogram',
                        subtext: 'Exogram intercepts all Model Context Protocol requests at the proxy layer, enforcing static manifest pinning, payload sanitization, and human-in-the-loop auth tokens.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram MCP Gateway ↗',
                        targetRole: 'Chief Information Security Officers & AI Architects'
                    }}
                    secondaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'Enterprise AI Governance & Threat Modeling Audit',
                        subtext: 'Retain Richard Ewing to audit your enterprise AI tool integrations, establish zero-trust boundary controls, and prevent lateral tool exfiltration.',
                        actionUrl: '/workspace/governance',
                        actionLabel: 'Inquire for MCP Security Audit ↗',
                        targetRole: 'CISOs & VP of Security Engineering'
                    }}
                />
            </div>
        </div>
    );
}
