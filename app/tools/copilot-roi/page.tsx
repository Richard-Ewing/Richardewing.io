import { Metadata } from 'next';
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
    return <CopilotROITool />;
}
