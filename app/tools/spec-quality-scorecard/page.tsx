import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import SpecQualityScorecardTool from './content';

export const metadata: Metadata = {
    title: 'Spec-Driven Development (SDD) Quality Scorecard | Linter Tool',
    description: 'Audit PRDs and feature requirements for machine-readable executable constraints before passing instructions to autonomous coding agents.',
    keywords: [
        'Spec-Driven Development',
        'SDD quality scorecard',
        'Executable PRD linter',
        'Prompt to code validation',
        'Claude Code spec linter',
        'Product management in AI'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/spec-quality-scorecard',
    },
    openGraph: {
        title: 'SDD Spec Quality Scorecard | Richard Ewing',
        description: 'Grade your feature specification before letting autonomous coding agents write a single line of code.',
        url: 'https://www.richardewing.io/tools/spec-quality-scorecard',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <SpecQualityScorecardTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="Spec-Driven Development (SDD) Scorecard"
                    problemDomain="Conversational Hallucinations &amp; Vague Requirement Drift"
                    calculatedMetricLabel="Typical Hallucination Reduction"
                    calculatedMetricValue="-85% Reduction in Multi-File Agent Drift"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Compile Specs into Deterministic Policies with Exogram',
                        subtext: 'Exogram parses markdown and JSON specifications directly into executable test fixtures and API schema gates before agents mutate repository files.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Spec Engine ↗',
                        targetRole: 'Chief Product Officers & Staff Engineers'
                    }}
                    secondaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'Spec-Driven Product Leadership Advisory',
                        subtext: 'Retain Richard Ewing to train product and engineering leaders on Spec-Driven Development, contract linting, and executable requirement design.',
                        actionUrl: '/workspace/products',
                        actionLabel: 'Inquire for SDD Strategy Advisory ↗',
                        targetRole: 'VPs of Product & Chief Product Officers'
                    }}
                />
            </div>
        </div>
    );
}
