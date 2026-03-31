import { Metadata } from 'next';
import PDITool from './content';

export const metadata: Metadata = {
    title: 'Product Debt Index Calculator | Richard Ewing',
    description: 'Calculate your Product Debt Index and quantify hidden technical debt in dollar terms. Free forensic diagnostic tool from Richard Ewing, Product Economis...',
    keywords: [
        'product debt index',
        'technical debt calculator',
        'engineering debt cost',
        'refactoring ROI',
        'technical insolvency date',
        'product economist tool',
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
    return <PDITool />;
}
