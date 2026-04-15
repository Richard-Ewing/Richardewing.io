import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'APER vs Jellyfish — Engineering Metrics Comparison',
    description: 'Compare APER (Annual Productivity to Engineering Ratio) with Jellyfish for engineering metrics. See how revenue-per-engineer economics differs from engi...',
    keywords: ['APER vs Jellyfish', 'engineering metrics comparison', 'Jellyfish alternative', 'revenue per engineer', 'engineering productivity metrics'],
    alternates: { canonical: 'https://www.richardewing.io/compare/aper-vs-jellyfish' },
    openGraph: { title: 'APER vs Jellyfish — Engineering Metrics', description: 'Revenue-per-engineer economics vs. engineering management.', url: 'https://www.richardewing.io/compare/aper-vs-jellyfish', type: 'article' },
};

const dimensions = [
    { dimension: 'Core Question', aper: '"How much revenue does each engineer generate?"', jellyfish: '"How are engineers spending their time?"', winner: 'aper' },
    { dimension: 'Primary Audience', aper: 'CFOs, investors, board members', jellyfish: 'VPs of Engineering, Engineering Managers', winner: 'aper' },
    { dimension: 'Economic Output', aper: 'Revenue per engineer ratio with industry benchmarks', jellyfish: 'Time allocation reports and project costs', winner: 'aper' },
    { dimension: 'Data Source', aper: 'Revenue data + headcount (calculator-based)', jellyfish: 'JIRA, Git, calendar integrations', winner: 'jellyfish' },
    { dimension: 'Implementation', aper: '5-minute free calculator', jellyfish: 'Weeks of integration and onboarding', winner: 'aper' },
    { dimension: 'Team Visibility', aper: 'Organization-level economics', jellyfish: 'Team-level & individual allocation', winner: 'jellyfish' },
    { dimension: 'PE/Board Readability', aper: 'One number + benchmark comparison', jellyfish: 'Detailed dashboards (too complex for boards)', winner: 'aper' },
    { dimension: 'Pricing', aper: 'Free calculator + advisory', jellyfish: 'Enterprise pricing ($50K-$200K/year)', winner: 'aper' },
];

export default function CompareAPERJellyfishPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-400">Compare</Link><span>/</span><span className="text-emerald-400 font-bold">APER vs Jellyfish</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        APER vs{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Jellyfish</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">APER measures revenue-per-engineer economics for CFOs and investors. Jellyfish tracks engineering time allocation for VPs. Different audiences, different problems.</p>

                    <div className="overflow-x-auto mb-16">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-400">
                                    <th className="text-left py-4 px-4 text-zinc-950 font-mono uppercase tracking-widest text-xs">Dimension</th>
                                    <th className="text-left py-4 px-4 text-emerald-400 font-mono uppercase tracking-widest text-xs">APER</th>
                                    <th className="text-left py-4 px-4 text-blue-400 font-mono uppercase tracking-widest text-xs">Jellyfish</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dimensions.map((d, i) => (
                                    <tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50 transition-colors">
                                        <td className="py-4 px-4 text-zinc-950 font-medium">{d.dimension}</td>
                                        <td className={`py-4 px-4 ${d.winner === 'aper' ? 'text-emerald-400' : 'text-zinc-900'}`}>{d.aper}</td>
                                        <td className={`py-4 px-4 ${d.winner === 'jellyfish' ? 'text-blue-400' : 'text-zinc-900'}`}>{d.jellyfish}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Calculate Your APER — Free</h2>
                        <p className="text-zinc-950 mb-6">Find out how your revenue-per-engineer compares to industry benchmarks in 5 minutes.</p>
                        <Link href="/tools/aper" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Calculate APER →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
