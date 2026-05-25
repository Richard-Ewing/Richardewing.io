import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Is Your Engineering Team Underperforming? | R&D Benchmarks',
    description: 'Benchmark your revenue per engineer, technical debt insolvency timeline, and R&D capital waste against elite SaaS, fintech, and healthtech peers.',
    alternates: { canonical: 'https://www.richardewing.io/benchmarks' },
    openGraph: {
        title: 'Engineering Benchmarks — Industry Comparison Data',
        description: 'Benchmark your engineering economics against industry standards. Revenue per engineer, innovation tax rates, and AI cost metrics by stage and vertical.',
        url: 'https://www.richardewing.io/benchmarks',
        siteName: 'Richard Ewing',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
