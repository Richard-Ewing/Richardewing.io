import { Metadata } from 'next';
import CopilotROITool from './content';

export const metadata: Metadata = {
    title: 'Copilot ROI Forecaster | AI Coding Economics Calculator',
    description: 'Calculate the true ROAI of AI coding assistants. Model how generative AI velocity increases are degraded by code review bottlenecks and Vibe Coding Debt.',
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
