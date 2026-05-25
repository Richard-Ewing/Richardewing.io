import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import PDITool from '../pdi/content';

export const metadata: Metadata = {
    title: 'How Much of Your R&D Budget Is Wasted on Maintenance? | Innovation Tax Calculator',
    description: `Most companies label maintenance work as "innovation." This calculator reveals the real split — how much of your engineering budget is disguised OpEx vs. genuine new product development.`,
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
    twitter: {
        card: 'summary_large_image',
        title: 'Innovation Tax Calculator | Richard Ewing',
        description: 'Quantify your Innovation Tax and reveal hidden maintenance costs.',
    },
};

export default function InnovationTaxPage() {
    return (
        <div className="innovation-tax-override">
            <PDITool />
        </div>
    );
}
