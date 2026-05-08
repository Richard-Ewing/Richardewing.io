import { Metadata } from 'next';
import PDITool from '../pdi/content';

export const metadata: Metadata = {
    title: 'Innovation Tax Calculator | Richard Ewing',
    description: 'Calculate your Innovation Tax and quantify how much of your R&D budget is actually OpEx disguised as innovation. Free forensic tool based on the Product Debt Index.',
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
