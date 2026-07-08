import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Technical Debt vs Insolvency & Strategy Diagnostics | Richard Ewing',
    description: 'Technical Debt vs Insolvency provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['technical debt', 'technical insolvency', 'technical insolvency date', 'technical debt vs technical insolvency', 'innovation tax', 'engineering capacity'],
    alternates: { canonical: 'https://www.richardewing.io/compare/technical-debt-vs-technical-insolvency' },
    openGraph: { title: 'Technical Debt vs Technical Insolvency', description: 'Technical debt slows you down. Technical insolvency stops you completely. Find out when your engineering team will hit the wall.', url: 'https://www.richardewing.io/compare/technical-debt-vs-technical-insolvency', type: 'article' },
};

const rows = [
    { dimension: 'Definition', debt: 'The implied cost of future rework caused by taking shortcuts', insolvency: 'The point where maintenance consumes 100% of engineering capacity' },
    { dimension: 'Impact on Velocity', debt: 'Slows down feature delivery progressively', insolvency: 'Zero net-new feature delivery' },
    { dimension: 'Financial Metaphor', debt: 'Carrying a high-interest credit card balance', insolvency: 'Declaring bankruptcy' },
    { dimension: 'Executive Visibility', debt: 'Often invisible to the Board ("Engineers are just complaining")', insolvency: 'Highly visible ("Why haven\'t we shipped anything in 6 months?")' },
    { dimension: 'Required Action', debt: 'Allocate 20% of sprint capacity to refactoring', insolvency: 'Freeze all feature development and execute an emergency architecture rewrite' },
    { dimension: 'Metric Tracked', debt: 'Maintenance Percentage (e.g., 40%)', insolvency: 'Technical Insolvency Date (e.g., Q3 2027)' },
];

export default function TechDebtVsInsolvencyPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-900 font-extrabold font-semibold">Compare</Link><span>/</span><span className="text-cyan-900 font-extrabold font-semibold font-bold">Tech Debt vs Insolvency</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Technical Debt <span className="text-zinc-900">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Technical Insolvency</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Technical debt is a manageable financial instrument if paid down. <span className="text-red-600 font-bold">Technical Insolvency</span> is what happens when compounding technical debt overtakes the organization's total engineering capacity.
                    </p>
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead><tr className="border-b border-zinc-400"><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">Dimension</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">Technical Debt</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-red-600 uppercase tracking-widest">Technical Insolvency</th></tr></thead>
                            <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50"><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium font-bold">{row.dimension}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.debt}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.insolvency}</td></tr>))}</tbody>
                        </table>
                    </div>
                    <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">The Verdict</h2>
                        <p className="text-zinc-950 mb-6"><strong>Technical debt is abstract; Technical Insolvency is a calendar date.</strong> If your team spends 45% of its time on maintenance, and that grows by 3% each quarter, you will hit 100% in 18 quarters. That specific date is your <Link href="/glossary/technical-insolvency-date" className="text-red-600 font-bold hover:underline">Technical Insolvency Date (TID)</Link>. Presenting a concrete date to your Board is the only way to secure the budget needed to refactor legacy code.</p>
                        <Link href="/tools/pdi" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 text-zinc-950 font-semibold font-semibold font-bold hover:opacity-90 transition-opacity uppercase tracking-widest text-sm">Calculate Your Insolvency Date →</Link>
                    
                    <AdvisoryCTA variant="compare" />
</div>
                </div>
            </div>
        </main>
    );
}
