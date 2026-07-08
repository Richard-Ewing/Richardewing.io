import { Metadata } from 'next';
import HallucinationTaxTool from './content';

export const metadata: Metadata = {
    title: '$67B Lost to AI Hallucinations & Strategy Diagnostics | Richard Ewing',
    description: '$67B Lost to AI Hallucinations provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: [
        'AI hallucination cost',
        'hallucination tax calculator',
        'AI verification overhead',
        'AI governance economics',
        'cost of AI errors',
        'AI production incidents',
        'AI output verification',
        'hallucination rate',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/hallucination-tax',
    },
    openGraph: {
        title: '$67B Lost to AI Hallucinations Globally | Calculate Your Hallucination Tax',
        description: 'Your team spends 4.3 hours/week verifying AI outputs — that is $14,200/employee/year in invisible labor. Calculate your organization\'s total Hallucination Tax.',
        url: 'https://www.richardewing.io/tools/hallucination-tax',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hallucination Tax Calculator | Richard Ewing',
        description: 'Calculate the true cost of AI hallucinations: verification labor, production incidents, and invisible payroll drain.',
    },
};

export default function Page() {
    return <HallucinationTaxTool />;
}
