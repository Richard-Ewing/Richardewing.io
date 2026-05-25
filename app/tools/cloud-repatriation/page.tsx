import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import CloudContent from './content';

export const metadata: Metadata = {
    title: 'Is AWS Eating Your EBITDA? | Cloud Repatriation Savings Calculator',
    description: 'Your AWS bill grows 20% per year. Calculate the exact EBITDA you recapture by moving workloads off-cloud. Model the breakeven point for bare-metal vs. renting.',
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
