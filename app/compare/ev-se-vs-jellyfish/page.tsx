import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'EV-SE Engine vs Jellyfish',
    description: 'Compare risk-adjusted SaaS valuation modeling vs engineering resource allocation metrics.',
    keywords: ['jellyfish alternative', 'engineering metrics tool', 'evergreen ratio', 'engineering sustainability', 'engineering economics vs metrics'],
    alternates: { canonical: 'https://www.richardewing.io/compare/ev-se-vs-jellyfish' },
    openGraph: { title: 'EV-SE vs Jellyfish  -  Economics vs Metrics', description: 'Jellyfish tracks what engineers did. EV-SE tells you if it matters economically.', url: 'https://www.richardewing.io/compare/ev-se-vs-jellyfish', type: 'article' },
};

const rows = [
    { dimension: 'What it measures', evse: 'Engineering sustainability over time', jelly: 'Engineering team activity metrics' },
    { dimension: 'Output', evse: 'Sustainability score, investment allocation analysis', jelly: 'Dashboards, reports, team comparisons' },
    { dimension: 'Question answered', evse: '"Is your engineering investment sustainable?"', jelly: '"What are engineers working on?"' },
    { dimension: 'Audience', evse: 'CTOs, CFOs, board members', jelly: 'Engineering managers, VPs of Engineering' },
    { dimension: 'Approach', evse: 'Economic modeling of R&D capital allocation', jelly: 'Jira/GitHub data aggregation and visualization' },
    { dimension: 'Cost', evse: 'Free (richardewing.io/tools/ev-se)', jelly: '$20K-$100K+/yr enterprise contracts' },
    { dimension: 'Board-ready?', evse: '✅ Produces investment-grade analysis', jelly: '⚠️ Dashboards  -  requires interpretation' },
];

export default function EVSEvsJellyfishPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-900 font-extrabold font-semibold">Compare</Link><span>/</span><span className="text-cyan-900 font-extrabold font-semibold font-bold">EV-SE vs Jellyfish</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        EV-SE <span className="text-zinc-900">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Jellyfish</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Jellyfish tracks what engineers are working on. EV-SE tells you <span className="text-zinc-950 font-bold">whether that work is economically sustainable</span>. Activity metrics ≠ economic sustainability.
                    </p>
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead><tr className="border-b border-zinc-400"><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">Dimension</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-teal-400 uppercase tracking-widest">EV-SE</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-900 uppercase tracking-widest">Jellyfish</th></tr></thead>
                            <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50"><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium font-bold">{row.dimension}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.evse}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.jelly}</td></tr>))}</tbody>
                        </table>
                    </div>
                    <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">The Verdict</h2>
                        <p className="text-zinc-950 mb-6"><strong>Use both  -  for different purposes.</strong> Jellyfish shows engineering activity. EV-SE evaluates whether that activity creates lasting value. Tracking without economic analysis is measurement without meaning.</p>
                        <Link href="/tools/ev-se" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Try the Free EV-SE Calculator →</Link>
                    
                    <AdvisoryCTA variant="compare" />
</div>
                </div>
            </div>
        </main>
    );
}
