import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import VTATool from './content';

export const metadata: Metadata = {
    title: 'How Much Does AI Hallucination & Strategy Diagnostics | Richard Ewing',
    description: `How Much Does AI Hallucination provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.'re losing.`,
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
