import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import AARITool from './content';

export const metadata: Metadata = {
    title: 'Autonomous Agent Readiness Index (AARI)',
    description: 'A 15-point forensic diagnostic evaluating codebase architecture and test harness completeness before deploying autonomous AI coding agents.',
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
            <ToolServerHeader
                slug="aari"
                eyebrow="Engineering Governance · Autonomous Agent Readiness Index"
                h1="Autonomous Agent Readiness Index (AARI)"
                executiveAnswer="Autonomous coding agents multiply repository architecture: they accelerate clean test harnesses and wreck untyped, coupled codebases. Score your repository across 15 deterministic gates for CTOs, VPs of Engineering, and Engineering Managers before granting multi-file write permissions."
                appName="Autonomous Agent Readiness Index (AARI)"
                appDescription="15-point forensic diagnostic evaluating codebase architecture, test coverage, and sandbox readiness for autonomous AI coding agents."
                howToName="How to Audit Repository Readiness for Autonomous Coding Agents"
                howToDescription="Score type boundaries, test determinism, secret isolation, and CI gates in two minutes."
                steps={[
                    { name: 'Score Architecture & Type Gates', text: 'Grade strict typing, module isolation, and schema validation across your primary repository.' },
                    { name: 'Audit Test & Sandbox Controls', text: 'Verify deterministic CI execution, blast-radius guards, and credential isolation.' },
                    { name: 'Review Drift Liability Readout', text: 'Inspect your AARI readiness score and annual senior engineering review drag exposure.' },
                ]}
            />
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
