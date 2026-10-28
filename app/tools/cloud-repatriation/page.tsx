import { Metadata } from 'next';
import CloudContent from './content';

export const metadata: Metadata = {
    title: 'Cloud Repatriation Calculator',
    description: 'Calculate bare-metal repatriation ROI, egress savings, and EBITDA margin recovery from cloud providers. Financial modeling for infrastructure directors.',
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

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function Page() {
    return (
        <>
            <CloudContent />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="warning"
                    title="Paying hyperscaler markups on predictable steady-state compute?"
                    subtitle="Evaluate reserved capacity, egress elimination, and hybrid GPU/CPU repatriation payback with an independent FinOps teardown."
                    metrics={['Egress Cut', 'EBITDA Lift', '12-Mo Payback']}
                />
            </div>
        </>
    );
}
