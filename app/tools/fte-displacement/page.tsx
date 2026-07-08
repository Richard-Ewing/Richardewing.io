import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import FTEContent from './content';

export const metadata: Metadata = {
    title: 'Should You Replace That Role W & Strategy Diagnostics | Richard Ewing',
    description: 'Should You Replace That Role W provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
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
