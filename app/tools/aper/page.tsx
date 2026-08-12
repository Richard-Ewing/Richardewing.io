import { Metadata } from 'next';
import APERTool from './content';

export const metadata: Metadata = {
    title: 'AI Provider Efficiency Ratio (APER)',
    description: 'Calculate Revenue-Per-Engineer (APER) impact, evaluate team capacity, and benchmark engineering efficiency against stage benchmarks.',
    keywords: [
        'revenue per engineer',
        'engineering efficiency calculator',
        'APER diagnostic',
        'engineering headcount ROI',
        'SaaS efficiency benchmark',
        'organizational bloat detector',
        'Stripe revenue per engineer',
        'engineering productivity metric',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/aper',
    },
    openGraph: {
        title: 'APER Diagnostic | Revenue Per Engineer Calculator',
        description: 'The most dangerous number in SaaS. Calculate your true workforce efficiency.',
        url: 'https://www.richardewing.io/tools/aper',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'APER Diagnostic | Richard Ewing',
        description: 'Revenue Per Engineer benchmarking tool.',
    },
};

export default function Page() {
    return <APERTool />;
}
