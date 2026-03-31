import { Metadata } from 'next';
import APERTool from './content';

export const metadata: Metadata = {
    title: 'APER Efficiency Diagnostic | Revenue Per Engineer Calculator',
    description: 'Calculate your Revenue Per Engineer and benchmark against Stripe ($3.2M), Figma ($2.8M), and Linear ($2.1M). Detect organizational bloat. Free diagnosti...',
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
