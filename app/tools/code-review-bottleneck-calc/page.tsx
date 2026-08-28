import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import CodeReviewBottleneckTool from './content';

export const metadata: Metadata = {
    title: 'AI Code Review Bottleneck & Payroll Drag Calculator | Engineering Diagnostic',
    description: 'Calculate the senior engineering hours, review queue latency, and payroll drag caused by un-gated AI-generated pull request floods.',
    keywords: [
        'AI code review bottleneck',
        'Senior engineer review drag',
        'Vibe coding PR flood',
        'Engineering payroll waste calculator',
        'PR review cycle time',
        'Automated compiler gate ROI'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/code-review-bottleneck-calc',
    },
    openGraph: {
        title: 'AI Code Review Bottleneck Calculator | Richard Ewing',
        description: 'Quantify the financial cost of senior engineers acting as human compilers for AI code.',
        url: 'https://www.richardewing.io/tools/code-review-bottleneck-calc',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <CodeReviewBottleneckTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="AI Code Review Bottleneck Calculator"
                    problemDomain="Synthetic PR Floods &amp; Human Compiler Fatigue"
                    calculatedMetricLabel="Typical Senior Capacity Recovery"
                    calculatedMetricValue="+25% to +40% Reclaimed Engineering Bandwidth"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Automate Pre-Review Verification with Exogram',
                        subtext: 'Exogram executes automated mechanical compiler gates, type verification, and semantic diff bounding before pull requests ever reach senior human engineers.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Compiler Gate ↗',
                        targetRole: 'VP of Engineering & Engineering Directors'
                    }}
                    secondaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'Engineering Efficiency & SDLC Throughput Audit',
                        subtext: 'Retain Richard Ewing to audit your PR review funnel, eliminate review queues, and install sovereign verification harnesses.',
                        actionUrl: '/workspace/engineering',
                        actionLabel: 'Inquire for SDLC Throughput Audit ↗',
                        targetRole: 'CTOs & Heads of Engineering'
                    }}
                />
            </div>
        </div>
    );
}
