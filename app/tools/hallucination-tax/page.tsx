import { Metadata } from 'next';
import HallucinationTaxTool from './content';

export const metadata: Metadata = {
    title: 'AI Hallucination Tax Calculator',
    description: 'Calculate the hidden manual verification costs, error remediation labor, and financial tax of AI model hallucinations.',
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
        title: 'Calculate Your AI Hallucination Tax',
        description: 'Your team spends 4.3 hours/week verifying AI outputs. Calculate your organization\'s total Hallucination Tax.',
        url: 'https://www.richardewing.io/tools/hallucination-tax',
        type: 'website',
    },
};

export default function Page() {
    return <HallucinationTaxTool />;
}
