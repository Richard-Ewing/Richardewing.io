import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import CopilotROITool from './content';

export const metadata: Metadata = {
    title: 'GitHub Copilot ROI Calculator',
    description: 'Calculate the true financial ROI, code churn impact, and review overhead of AI coding tools.',
    keywords: [
        'GitHub Copilot ROI',
        'Cursor ROI calculator',
        'AI coding assistant economics',
        'Vibe coding debt',
        'engineering productivity AI',
        'cost of predictivity',
        'ROAI',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/copilot-roi',
    },
    openGraph: {
        title: 'Copilot ROI Forecaster | Measure AI Execution Drag',
        description: 'Prove the actual margin value of your AI developer tools.',
        url: 'https://www.richardewing.io/tools/copilot-roi',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <CopilotROITool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="Copilot ROI Forecaster"
                    problemDomain="AI Code Churn &amp; Senior Review Tax"
                    calculatedMetricLabel="Typical Review Overhead Tax"
                    calculatedMetricValue="18% to 35% of Senior Bandwidth"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'CAREERWIN_PLATFORM',
                        relationshipType: 'ADDRESSES',
                        channel: 'CAREER_INTELLIGENCE',
                        headline: 'Evaluate True Engineering Trajectory with Context Engines',
                        subtext: 'CareerWin evaluates software engineering impact through systems leadership and architectural quality rather than commit volume.',
                        actionUrl: '/careerwin',
                        actionLabel: 'Explore CareerWin Intelligence ↗',
                        targetRole: 'Senior Staff Engineers & Engineering Managers'
                    }}
                    secondaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'R&D Productivity & AI Tooling Economics Audit',
                        subtext: 'Retain Richard Ewing to benchmark AI developer tool ROI, code churn rates, and engineering capacity allocation.',
                        actionUrl: '/workspace/engineering',
                        actionLabel: 'Inquire for Engineering Audit ↗',
                        targetRole: 'VPs of Engineering & CTOs'
                    }}
                />
            </div>
        </div>
    );
}
