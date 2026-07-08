import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import CloudContent from './content';

export const metadata: Metadata = {
    title: 'Is AWS Eating Your EBITDA? & Strategy Diagnostics | Richard Ewing',
    description: 'Is AWS Eating Your EBITDA? provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: [
        'Cloud repatriation calculator',
        'AWS vs Bare Metal',
        'FinOps EBITDA tool',
        'Basecamp cloud migration',
        'AWS egress cost calculator'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/cloud-repatriation',
    },
    openGraph: {
        title: 'Cloud Repatriation FinOps Engine',
        description: 'Stop paying the 80% AWS margin. Calculate your exact bare-metal ROI.',
        url: 'https://www.richardewing.io/tools/cloud-repatriation',
        type: 'website',
    },
};

export default function Page() {
    return <CloudContent />;
}
