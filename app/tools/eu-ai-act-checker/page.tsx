import { Metadata } from 'next';
import EUAIActChecker from './content';

export const metadata: Metadata = {
    title: 'EU AI Act Compliance Assessment',
    description: 'Determine your regulatory risk tier and technical documentation obligations under the EU AI Act.',
    keywords: [
        'EU AI Act compliance',
        'AI governance audit',
        'EU AI Act 2026',
        'AI regulation compliance checker',
        'AI Act fines',
        'AI compliance assessment',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/eu-ai-act-checker',
    },
    openGraph: {
        title: 'EU AI Act Enforcement Starts August 2026  -  Score Your Readiness',
        description: 'Fines up to 7% of global turnover. Score your compliance across 8 areas in 3 minutes.',
        url: 'https://www.richardewing.io/tools/eu-ai-act-checker',
        type: 'website',
    },
};

export default function Page() {
    return <EUAIActChecker />;
}
