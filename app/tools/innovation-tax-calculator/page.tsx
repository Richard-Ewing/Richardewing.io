import { Metadata } from 'next';
import PDITool from '../pdi/content';

export const metadata: Metadata = {
    title: 'Innovation Tax Calculator',
    description: 'Calculate how much of your R&D engineering budget is trapped in maintenance OpEx vs. genuine new product development.',
    keywords: [
        'innovation tax calculator',
        'innovation tax',
        'technical debt calculator',
        'R&D capitalization audit',
        'zombie assets calculator',
        'AI economist tool',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/innovation-tax-calculator',
    },
    openGraph: {
        title: 'Innovation Tax Calculator | Audit Your R&D Spend',
        description: 'How much of your R&D budget is actually maintenance OpEx? Calculate your true innovation output.',
        url: 'https://www.richardewing.io/tools/innovation-tax-calculator',
        type: 'website',
    },
};

export default function Page() {
    return <PDITool />;
}
