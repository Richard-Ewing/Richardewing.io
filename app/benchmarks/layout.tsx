import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Is Your Engineering Team Under & Strategy Diagnostics | Richard Ewing',
    description: 'Is Your Engineering Team Under provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
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
