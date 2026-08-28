import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import AARITool from './content';

export const metadata: Metadata = {
    title: 'Autonomous Agent Readiness Index (AARI) | Diagnostic Tool',
    description: 'A 15-point multi-vector diagnostic evaluating codebase architecture, type strictness, and test harness completeness before turning on autonomous coding agents.',
    keywords: [
        'Autonomous Agent Readiness Index',
        'Claude Code readiness',
        'Google Antigravity setup',
        'Agentic SDLC audit',
        'AI coding tool governance',
        'Coding agent benchmark'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/aari',
    },
    openGraph: {
        title: 'Autonomous Agent Readiness Index | Richard Ewing',
        description: 'Audit your repository readiness for autonomous coding agents before incurring drift liability.',
        url: 'https://www.richardewing.io/tools/aari',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <AARITool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="Autonomous Agent Readiness Index (AARI)"
                    problemDomain="Unconstrained Agentic Drift &amp; Non-Deterministic Regressions"
                    calculatedMetricLabel="Typical Multi-Agent Drift Liability"
                    calculatedMetricValue="$45,000 to $180,000 / Year in Senior Review Drag"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Install Deterministic Execution Boundaries with Exogram',
                        subtext: 'Exogram enforces sub-millisecond proxy gates, bounding autonomous AI coding agents to verified sub-trees, test harnesses, and type assertions before pull request submission.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Runtime Gate ↗',
                        targetRole: 'VP of Engineering & Staff Software Architects'
                    }}
                    secondaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'Agentic SDLC & Repository Governance Advisory',
                        subtext: 'Retain Richard Ewing to audit your software development lifecycle, establish sovereign subagent sandboxes, and configure deterministic rule suites.',
                        actionUrl: '/workspace/strategy',
                        actionLabel: 'Inquire for SDLC Governance Audit ↗',
                        targetRole: 'CTOs & Engineering Directors'
                    }}
                />
            </div>
        </div>
    );
}
