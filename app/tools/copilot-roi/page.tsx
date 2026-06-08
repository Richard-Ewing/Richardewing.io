import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import CopilotROITool from './content';

export const metadata: Metadata = {
    title: 'Copilot ROI Negative? Stop 40% Code Review Waste',
    description: 'VP Eng: AI tool costs out of control? GitHub Copilot can cost $19/dev/month but add 40% more review time. Calculate your true ROI & stop billing shock with richardewing.io.',
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
