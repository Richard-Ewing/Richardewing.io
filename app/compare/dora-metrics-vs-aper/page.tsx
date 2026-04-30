import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'DORA Metrics vs APER — Operational Velocity vs Economic Yield',
    description: 'DORA Metrics measure how fast engineers push code. APER (Annualized Productivity-to-Engineering Ratio) measures how much economic value that code generates.',
    keywords: ['dora metrics', 'aper', 'revenue per engineer', 'engineering productivity', 'dora metrics vs aper', 'engineering metrics'],
    alternates: { canonical: 'https://www.richardewing.io/compare/dora-metrics-vs-aper' },
    openGraph: { title: 'DORA Metrics vs APER — Velocity vs Value', description: 'Why high DORA metrics don\'t guarantee business success, and why CFOs are shifting to APER.', url: 'https://www.richardewing.io/compare/dora-metrics-vs-aper', type: 'article' },
};

const rows = [
    { dimension: 'What it measures', dora: 'Software delivery performance (speed and stability)', aper: 'Engineering economic yield (revenue per engineer)' },
    { dimension: 'Primary Audience', dora: 'Engineering Managers, DevOps Teams', aper: 'CFOs, Boards, Private Equity Operating Partners' },
    { dimension: 'Core KPIs', dora: 'Deployment Frequency, Lead Time, Change Failure Rate, MTTR', aper: 'Fully-Loaded Engineering Spend, Attributed EBITDA, Innovation Tax' },
    { dimension: 'The Blind Spot', dora: 'You can deploy useless features very, very fast', aper: 'It is a lagging indicator; poor APER today means poor architecture 18 months ago' },
    { dimension: 'Executive Question Answered', dora: '"Is our engineering pipeline efficient?"', aper: '"Are we getting a positive ROI on our $20M engineering payroll?"' },
    { dimension: 'Level of Abstraction', dora: 'Operational', aper: 'Financial' },
];

export default function DoraVsAperPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-900 font-extrabold font-semibold">Compare</Link><span>/</span><span className="text-cyan-900 font-extrabold font-semibold font-bold">DORA Metrics vs APER</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        DORA Metrics <span className="text-zinc-900">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">APER</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        DORA metrics prove that your factory lines are moving fast without breaking. <span className="text-emerald-600 font-bold">APER (Annualized Productivity-to-Engineering Ratio)</span> proves that the things coming off the factory line are actually worth selling.
                    </p>
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead><tr className="border-b border-zinc-400"><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">Dimension</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">DORA Metrics</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-emerald-600 uppercase tracking-widest">APER</th></tr></thead>
                            <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50"><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium font-bold">{row.dimension}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.dora}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.aper}</td></tr>))}</tbody>
                        </table>
                    </div>
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">The Verdict</h2>
                        <p className="text-zinc-950 mb-6"><strong>DORA Metrics measure output. APER measures outcomes.</strong> When an engineering team achieves "Elite" DORA status but the company\'s valuation remains flat, there is a disconnect between operational velocity and economic yield. To bridge the gap, engineering leaders must learn to translate DORA improvements directly into APER financial gains.</p>
                        <Link href="/tools/aper" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold font-bold hover:opacity-90 transition-opacity uppercase tracking-widest text-sm">Calculate Your APER Score →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
