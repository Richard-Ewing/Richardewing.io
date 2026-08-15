import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Engineering Efficiency Benchmarks',
    description: 'Evaluate whether your engineering organization is underperforming stage-adjusted headcount and revenue benchmarks.',
    alternates: { canonical: 'https://www.richardewing.io/benchmarks' },
    openGraph: {
        title: 'Engineering Benchmarks  -  Industry Comparison Data',
        description: 'Benchmark your engineering economics against industry standards. Revenue per engineer, innovation tax rates, and AI cost metrics by stage and vertical.',
        url: 'https://www.richardewing.io/benchmarks',
        siteName: 'Richard Ewing',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
