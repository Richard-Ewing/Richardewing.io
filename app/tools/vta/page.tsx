import { Metadata } from 'next';
import VTATool from './content';

export const metadata: Metadata = {
    title: 'Volatility Tax Auditor | Calculate Hidden AI Verification...',
    description: 'Calculate your AI Volatility Tax - the hidden human-in-the-loop verification cost required when deploying generative AI features that suffer from respon...',
    keywords: [
        'AI Volatility Tax',
        'human-in-the-loop cost',
        'AI margin collapse',
        'cost of predictivity',
        'AI response drift',
        'LLM validation cost',
        'compound AI systems',
        'behavioral auditing',
        'execution layer',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/vta',
    },
    openGraph: {
        title: 'Volatility Tax Auditor | AI Margin Calculator',
        description: 'Quantify the hidden labor tax of validating probabilistic AI outputs.',
        url: 'https://www.richardewing.io/tools/vta',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Volatility Tax Auditor | Richard Ewing',
        description: 'Calculate the human-in-the-loop cost destroying your AI feature margins.',
    },
};

export default function Page() {
    return <VTATool />;
}
