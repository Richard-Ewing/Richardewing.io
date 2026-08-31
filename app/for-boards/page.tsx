import type { Metadata } from 'next';
import Link from 'next/link';
import TechnicalInsolvencySimulator from '@/app/components/TechnicalInsolvencySimulator';

export const metadata: Metadata = {
    title: 'AI Governance for Board Members',
    description: 'Board-level fiduciary guidance on governing enterprise AI investments, evaluating technical debt, and assessing risk.',
    keywords: ['board technology oversight', 'R&D capital board reporting', 'technical debt for boards', 'CTO board presentation', 'engineering metrics for directors'],
    alternates: { canonical: 'https://www.richardewing.io/for-boards' },
    openGraph: { title: 'For Board Members  -  R&D Capital Visibility', description: 'Board-ready engineering reports in financial language.', url: 'https://www.richardewing.io/for-boards', type: 'website' },
};

const boardQuestions = [
    { question: 'What is our corporate exposure to un-monitored AI risk and shadow delegation?', answer: 'The Board AI Governance Scorecard benchmarks fiduciary duty, SOX 404 agent signing limits, and capital efficiency.', metric: 'Board AI Risk Scorecard', link: '/tools/board-risk-scorecard' },
    { question: 'How much of our engineering budget is spent on maintenance vs innovation?', answer: 'The Innovation Tax metric measures this. Average is 40-60%. High-performing teams: 20-30%.', metric: 'Innovation Tax', link: '/glossary/innovation-tax' },
    { question: 'What is our Section 174 tax drag and phantom taxable income liability?', answer: 'The CFO R&D Capitalization Audit forensically separates deductible maintenance OpEx from 5-year amortizable R&D.', metric: 'CFO Capitalization Audit', link: '/tools/cfo-capitalization-audit' },
    { question: 'When will technical debt make new features impossible?', answer: 'The Technical Insolvency Date predicts when maintenance load exceeds total capacity. Some companies are already past it.', metric: 'Technical Insolvency Date', link: '/glossary/technical-insolvency-date' },
    { question: 'How productive is our engineering team compared to benchmarks?', answer: 'APER (Annualized Productive Engineering Revenue) measures revenue generated per engineer. Industry benchmarks available.', metric: 'APER', link: '/tools/aper' },
    { question: 'Are our AI features profitable or margin-negative?', answer: 'AI COGS analysis reveals the variable cost per AI query. Many companies discover their AI features lose money at current margins.', metric: 'AI Unit Economics', link: '/tools/aueb' },
    { question: 'What is the dollar value of our technical debt and AI boilerplate?', answer: 'The Product Debt Index and Negative-Carry Code Auditor translate code entropy into dollar-denominated balance sheet liabilities.', metric: 'Negative-Carry Code Auditor', link: '/tools/negative-carry-code-auditor' },
];

export default function ForBoardsPage() {
    const schema = {
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'R&D Capital Board Reporting', provider: { '@type': 'Person', name: 'Richard Ewing' },
        description: 'Board-ready engineering reports in financial language.',
        url: 'https://www.richardewing.io/for-boards',
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-bold font-mono text-amber-500 uppercase tracking-widest mb-4">For Board Members & Directors</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            Your CTO Speaks Engineering.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">You Need Financial Language.</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto mb-8">
                            R&D Capital Audits translate technical complexity into board-ready financial metrics. Know the real cost of your technology investment  -  not the optimistic narrative.
                        </p>
                        <Link href="/services" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Request Board Briefing →</Link>
                    </div>

                    <TechnicalInsolvencySimulator />

                    <div className="mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-8 text-center">Questions Boards Should Be Asking</h2>
                        <div className="space-y-4">
                            {boardQuestions.map((q, i) => (
                                <div key={i} className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
                                    <h3 className="text-lg font-bold text-zinc-950 mb-2">&ldquo;{q.question}&rdquo;</h3>
                                    <p className="text-zinc-900 mb-3">{q.answer}</p>
                                    <Link href={q.link} className="text-xs font-bold font-mono text-amber-400 hover:text-amber-800 font-bold uppercase tracking-widest">
                                        Measure with {q.metric} →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-6 text-center">
                            <div className="text-3xl font-bold text-amber-400 mb-2">$$$</div>
                            <div className="text-sm font-semibold text-zinc-900 font-medium">Debt quantified in dollars, not story points</div>
                        </div>
                        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-6 text-center">
                            <div className="text-3xl font-bold text-amber-400 mb-2">Q1-Q4</div>
                            <div className="text-sm font-semibold text-zinc-900 font-medium">Quarterly reporting cadence for fiduciary oversight</div>
                        </div>
                        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-6 text-center">
                            <div className="text-3xl font-bold text-amber-400 mb-2">1 Page</div>
                            <div className="text-sm font-semibold text-zinc-900 font-medium">Executive summary, not 50-page engineering reports</div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-10 text-center">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">Board-Ready in 2 Weeks</h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto">Full R&D Capital Audit with executive summary, risk assessment, and remediation roadmap. Delivered as a board presentation, not a technical document.</p>
                        <Link href="/services" className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 font-semibold text-lg font-bold hover:opacity-90 transition-opacity">Schedule Board Briefing →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
