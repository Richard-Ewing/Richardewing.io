import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Audit Interview vs Traditional Interview — Why Behavioral...',
    description: 'Compare Richard Ewing\'s AI-powered Audit Interview with traditional behavioral and technical interviews. See why standardized, bias-reduced assessments...',
    keywords: ['audit interview vs traditional interview', 'AI hiring assessment', 'engineering interview comparison', 'bias-free interviewing', 'structured interview'],
    alternates: { canonical: 'https://www.richardewing.io/compare/audit-interview-vs-traditional' },
    openGraph: { title: 'Audit Interview vs Traditional Interview', description: 'Why AI-standardized assessments outperform gut-feel hiring.', url: 'https://www.richardewing.io/compare/audit-interview-vs-traditional', type: 'article' },
};

const dimensions = [
    { dimension: 'Standardization', audit: 'Identical questions for every candidate at each level', traditional: 'Varies by interviewer mood, preparation, and personal style', winner: 'audit' },
    { dimension: 'Bias Reduction', audit: 'AI-scored against fixed rubric — no interviewer bias', traditional: 'Subject to affinity bias, halo effect, similarity bias', winner: 'audit' },
    { dimension: 'Assessment Depth', audit: 'Multi-track (PM, Engineering, Leadership) with 5 grading levels', traditional: 'Usually single-dimension — can they code?', winner: 'audit' },
    { dimension: 'Time to Evaluate', audit: '15-30 minutes, instant scoring and committee review', traditional: '45-90 minutes per interviewer, hours of debrief', winner: 'audit' },
    { dimension: 'Cost Per Assessment', audit: 'Free tier available, scalable', traditional: '$500-2,000 per interview loop (4-6 engineer hours)', winner: 'audit' },
    { dimension: 'Candidate Experience', audit: 'Consistent, professional, no awkward silences', traditional: 'Varies wildly — depends on interviewer skill', winner: 'audit' },
    { dimension: 'Legal Defensibility', audit: 'Standardized = legally defensible hiring practice', traditional: 'Inconsistent = harder to defend against discrimination claims', winner: 'audit' },
    { dimension: 'Personal Touch', audit: 'AI-driven, less personal connection', traditional: 'Allows rapport building and culture fit assessment', winner: 'traditional' },
];

export default function CompareAuditVsTraditionalPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-400">Compare</Link><span>/</span><span className="text-cyan-400 font-bold">Audit Interview vs Traditional</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Audit Interview vs{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-400">Traditional Interview</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
                        Traditional interviews are inconsistent, biased, and expensive. The Audit Interview standardizes engineering assessment with AI-powered scoring, fixed rubrics, and committee review.
                    </p>

                    <div className="overflow-x-auto mb-16">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-200">
                                    <th className="text-left py-4 px-4 text-zinc-500 font-mono uppercase tracking-widest text-xs">Dimension</th>
                                    <th className="text-left py-4 px-4 text-cyan-400 font-mono uppercase tracking-widest text-xs">Audit Interview</th>
                                    <th className="text-left py-4 px-4 text-rose-400 font-mono uppercase tracking-widest text-xs">Traditional</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dimensions.map((d, i) => (
                                    <tr key={i} className="border-b border-zinc-200 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-4 px-4 text-white font-medium">{d.dimension}</td>
                                        <td className={`py-4 px-4 ${d.winner === 'audit' ? 'text-cyan-400' : 'text-zinc-500'}`}>{d.audit}</td>
                                        <td className={`py-4 px-4 ${d.winner === 'traditional' ? 'text-rose-400' : 'text-zinc-500'}`}>{d.traditional}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Try the Audit Interview</h2>
                        <p className="text-zinc-300 mb-6">Free, AI-powered engineering assessment. Get scored across 5 levels with instant committee review.</p>
                        <Link href="/tools/audit-interview" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:opacity-90 transition-opacity">Start Free Assessment →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
