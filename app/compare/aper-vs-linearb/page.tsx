import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'APER vs LinearB — Engineering Judgment vs Engineering Met...',
    description: 'APER (AI Performance Economics Rating) vs LinearB comparison. APER evaluates engineers on economic judgment. LinearB tracks engineering activity metrics...',
    keywords: ['linearb alternative', 'engineering metrics tool', 'engineering judgment assessment', 'aper vs linearb', 'developer productivity measurement'],
    alternates: { canonical: 'https://www.richardewing.io/compare/aper-vs-linearb' },
    openGraph: { title: 'APER vs LinearB — Judgment vs Activity', description: 'LinearB tracks what engineers did. APER evaluates whether they made economically sound decisions.', url: 'https://www.richardewing.io/compare/aper-vs-linearb', type: 'article' },
};

const rows = [
    { dimension: 'What it measures', aper: 'Engineering judgment and economic reasoning', lb: 'Engineering activity and cycle time metrics' },
    { dimension: 'Output', aper: 'Performance rating based on economic impact', lb: 'Dashboards, benchmarks, team analytics' },
    { dimension: 'Question answered', aper: '"Can this engineer make economically sound decisions?"', lb: '"How productive are my engineers?"' },
    { dimension: 'Use case', aper: 'Hiring, performance reviews, promotions', lb: 'Sprint planning, bottleneck detection, team health' },
    { dimension: 'Approach', aper: 'AI-powered economic reasoning assessment', lb: 'Git/Jira data aggregation and analysis' },
    { dimension: 'Cost', aper: 'Free (richardewing.io/tools/aper)', lb: '$20K-$80K+/yr enterprise contracts' },
    { dimension: 'AI-proof?', aper: '✅ Tests judgment AI can\'t replicate', lb: '⚠️ Measures metrics AI can inflate' },
];

export default function APERvsLinearBPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-400">Compare</Link><span>/</span><span className="text-violet-400 font-bold">APER vs LinearB</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        APER <span className="text-zinc-900">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">LinearB</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        LinearB tracks how fast engineers move. APER evaluates whether they <span className="text-zinc-950 font-bold">make economically sound engineering decisions</span>. Speed without judgment is just fast failure.
                    </p>
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead><tr className="border-b border-zinc-400"><th className="text-left py-4 px-4 text-xs font-mono text-zinc-800 uppercase tracking-widest">Dimension</th><th className="text-left py-4 px-4 text-xs font-mono text-violet-400 uppercase tracking-widest">APER</th><th className="text-left py-4 px-4 text-xs font-mono text-zinc-900 uppercase tracking-widest">LinearB</th></tr></thead>
                            <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50"><td className="py-4 px-4 text-sm text-zinc-900 font-bold">{row.dimension}</td><td className="py-4 px-4 text-sm text-zinc-900">{row.aper}</td><td className="py-4 px-4 text-sm text-zinc-800">{row.lb}</td></tr>))}</tbody>
                        </table>
                    </div>
                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">The Verdict</h2>
                        <p className="text-zinc-950 mb-6"><strong>Metrics without judgment is measurement without meaning.</strong> LinearB tells you engineers are moving fast. APER tells you they are moving in a direction that creates economic value. Use both — but APER for the decisions that matter.</p>
                        <Link href="/tools/aper" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold hover:opacity-90 transition-opacity">Try the Free APER Assessment →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
