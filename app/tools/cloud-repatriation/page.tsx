import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import CloudContent from './content';

export const metadata: Metadata = {
    title: 'Cloud Repatriation Calculator | EBITDA Recapture',
    description: 'Calculate the exact EBITDA recapture of repatriating from AWS to bare-metal. Model the breakeven point for cloud exit economics.',
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
