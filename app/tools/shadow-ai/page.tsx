import { Metadata } from 'next';
import ShadowContent from './content';

export const metadata: Metadata = {
    title: 'Shadow AI Risk Scanner',
    description: 'Scan employee AI app usage, identify unauthorized LLM endpoints, and prevent IP data leakage.',
    keywords: [
        'Shadow AI risk calculator',
        'LLM data leakage tool',
        'SOC2 AI compliance audit',
        'Prompt injection risk',
        'Enterprise AI security'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/shadow-ai',
    },
    openGraph: {
        title: 'Shadow AI SOC2 Exposure Matrix',
        description: 'Quantify the financial liability of unauthorized LLM endpoints and IP leakage across your engineering floor.',
        url: 'https://www.richardewing.io/tools/shadow-ai',
        type: 'website',
    },
};

export default function Page() {
    return <ShadowContent />;
}
