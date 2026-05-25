import { Metadata } from 'next';
import PDITool from './content';

export const metadata: Metadata = {
    title: 'Product Debt Index | Insolvency Date Calculator',
    description: 'When will maintenance exceed engineering capacity? Calculate your Technical Insolvency Date before it arrives. Free boardroom-ready diagnostic.',
    keywords: [
        'product debt index',
        'technical debt calculator',
        'engineering debt cost',
        'refactoring ROI',
        'technical insolvency date',
        'AI economist tool',
        'free technical debt tool',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/pdi',
    },
    openGraph: {
        title: 'Product Debt Index | Quantify Hidden Tech Debt',
        description: 'Are you building assets or just servicing liabilities? Calculate your true engineering ROI.',
        url: 'https://www.richardewing.io/tools/pdi',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Product Debt Index Calculator | Richard Ewing',
        description: 'Quantify your hidden technical debt in dollar terms. Free diagnostic tool.',
    },
};

export default function Page() {
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Calculate Your Technical Insolvency Date',
        description: 'Use the Product Debt Index (PDI) to determine when maintenance load will exceed engineering capacity.',
        totalTime: 'PT4M',
        tool: { '@type': 'HowToTool', name: 'PDI Calculator' },
        step: [
            { '@type': 'HowToStep', position: 1, name: 'Enter team size', text: 'Input your total engineering headcount and average fully-loaded cost per engineer.' },
            { '@type': 'HowToStep', position: 2, name: 'Estimate maintenance allocation', text: 'Estimate the percentage of engineering time currently spent on maintenance vs. new features.' },
            { '@type': 'HowToStep', position: 3, name: 'Set growth parameters', text: 'Define your expected maintenance growth rate and hiring capacity.' },
            { '@type': 'HowToStep', position: 4, name: 'Calculate insolvency date', text: 'The calculator projects your Technical Insolvency Date — the quarter when maintenance consumes 100% of capacity.' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <PDITool />
        </>
    );
}
