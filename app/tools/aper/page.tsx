import { Metadata } from 'next';
import APERTool from './content';

export const metadata: Metadata = {
    title: 'APER Calculator | Revenue Per Engineer Benchmark',
    description: 'Benchmark Revenue Per Engineer against Stripe, Figma, and Linear. Detect organizational bloat before it destroys R&D capital efficiency.',
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
        description: 'Revenue Per Engineer calculator. Benchmark against Stripe, Figma, Linear. Free tool.',
    },
};

export default function Page() {
    return <APERTool />;
}
