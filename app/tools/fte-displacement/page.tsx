import { Metadata } from 'next';
import FTEContent from './content';

export const metadata: Metadata = {
    title: 'Agentic FTE Displacement Matrix | Richard Ewing',
    description: 'Calculate the exact EBITDA expansion of replacing human Tier-1 support with autonomous LLM agents.',
    keywords: [
        'AI agent ROI calculator',
        'Customer support automation cost',
        'Tier 1 BPO displacement',
        'Agentic workflow savings',
        'AI margin expansion',
        'SaaS gross margin optimization'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/fte-displacement',
    },
    openGraph: {
        title: 'Agentic FTE Displacement Matrix',
        description: 'Stop paying BPOs for Tier-1 routing. Calculate the margin expansion of shipping an autonomous agentic architecture.',
        url: 'https://www.richardewing.io/tools/fte-displacement',
        type: 'website',
    },
};

export default function Page() {
    return <FTEContent />;
}
