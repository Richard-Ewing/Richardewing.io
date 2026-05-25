import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ShadowContent from './content';

export const metadata: Metadata = {
    title: 'Are Employees Leaking Data to ChatGPT? | Shadow AI Risk Scanner',
    description: '73% of employees use unauthorized AI tools at work. Calculate your SOC2 exposure, data leak blast radius, and compliance liability from Shadow AI usage before auditors find it.',
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
