import { Metadata } from 'next';
import CloudContent from './content';

export const metadata: Metadata = {
    title: 'Cloud Repatriation Calculator',
    description: 'Calculate bare-metal repatriation ROI, egress savings, and EBITDA margin recovery from cloud providers.',
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
