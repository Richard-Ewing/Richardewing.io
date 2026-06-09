import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import CopilotROITool from './content';

export const metadata: Metadata = {
    title: 'VP Eng: Is Copilot Costing You $58K/Dev in Vibe Coding Debt?',
    description: 'Stop the AI billing shock. Calculate how raw generative AI velocity is violently degraded by code review bottlenecks and hidden technical debt.',
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
    twitter: {
        card: 'summary_large_image',
        title: 'Copilot ROI Forecaster | Richard Ewing',
        description: 'Calculate if AI coding assistants actually generate positive ROAI for your engineering team.',
    },
};

export default function Page() {
    return <CopilotROITool />;
}
