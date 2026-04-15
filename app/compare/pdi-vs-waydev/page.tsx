import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'PDI vs Waydev — Engineering Intelligence Comparison',
    description: 'Compare the Product Debt Index (PDI) with Waydev for engineering intelligence. See how economic-first technical debt measurement differs from git-analyt...',
    keywords: ['PDI vs Waydev', 'technical debt measurement comparison', 'engineering analytics tools', 'Waydev alternative', 'Product Debt Index'],
    alternates: { canonical: 'https://www.richardewing.io/compare/pdi-vs-waydev' },
    openGraph: { title: 'PDI vs Waydev — Engineering Intelligence Comparison', description: 'Economic debt measurement vs. git analytics.', url: 'https://www.richardewing.io/compare/pdi-vs-waydev', type: 'article' },
};

const dimensions = [
    { dimension: 'Primary Metric', pdi: 'Technical Insolvency Date — when debt exceeds capacity', waydev: 'Developer activity metrics — commits, PRs, cycle time', winner: 'pdi' },
    { dimension: 'Economic Output', pdi: 'Dollar-denominated debt liability with quarterly amortization', waydev: 'Developer productivity dashboards and reports', winner: 'pdi' },
    { dimension: 'Board Readability', pdi: 'Financial language: "Your R&D has $2.4M in technical debt"', waydev: 'Engineering language: "Average PR size is 342 lines"', winner: 'pdi' },
    { dimension: 'Data Source', pdi: 'Assessment-based — architecture review + team interviews', waydev: 'Git-connected — automated pull from repositories', winner: 'waydev' },
    { dimension: 'Setup Time', pdi: '10 minutes (free calculator)', waydev: 'Hours (git integration, user setup)', winner: 'pdi' },
    { dimension: 'Ongoing Monitoring', pdi: 'Periodic audits (quarterly recommended)', waydev: 'Continuous real-time dashboards', winner: 'waydev' },
    { dimension: 'Team Privacy', pdi: 'No individual developer tracking', waydev: 'Individual developer activity visible (controversial)', winner: 'pdi' },
    { dimension: 'Pricing', pdi: 'Free tier + advisory engagement', waydev: '$15-30 per developer per month', winner: 'pdi' },
];

export default function ComparePDIWaydevPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-800 font-semibold">Compare</Link><span>/</span><span className="text-cyan-800 font-semibold font-bold">PDI vs Waydev</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Product Debt Index vs{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Waydev</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        PDI quantifies technical debt in dollars. Waydev tracks developer activity from git data. One speaks finance, the other speaks engineering. They solve different problems.
                    </p>

                    <div className="overflow-x-auto mb-16">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-400">
                                    <th className="text-left py-4 px-4 text-zinc-950 font-mono uppercase tracking-widest text-xs">Dimension</th>
                                    <th className="text-left py-4 px-4 text-cyan-800 font-semibold font-mono uppercase tracking-widest text-xs">PDI</th>
                                    <th className="text-left py-4 px-4 text-emerald-800 font-semibold font-mono uppercase tracking-widest text-xs">Waydev</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dimensions.map((d, i) => (
                                    <tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50 transition-colors">
                                        <td className="py-4 px-4 text-zinc-950 font-medium">{d.dimension}</td>
                                        <td className={`py-4 px-4 ${d.winner === 'pdi' ? 'text-cyan-800 font-semibold' : 'text-zinc-900'}`}>{d.pdi}</td>
                                        <td className={`py-4 px-4 ${d.winner === 'waydev' ? 'text-emerald-800 font-semibold' : 'text-zinc-900'}`}>{d.waydev}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Try PDI — Free</h2>
                        <p className="text-zinc-950 mb-6">Calculate your Product Debt Index and Technical Insolvency Date in 10 minutes. No git integration required.</p>
                        <Link href="/tools/pdi" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Calculate Your PDI →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
