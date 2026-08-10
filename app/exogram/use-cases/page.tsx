import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Exogram Use Cases & Strategy Diagnostics | Richard Ewing',
    description: 'Exogram Use Cases provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: { canonical: 'https://www.richardewing.io/exogram/use-cases' },
};

const useCases = [
    {
        icon: '🏥', title: 'Healthcare AI', industry: 'HealthTech',
        problem: 'AI-generated clinical summaries contain hallucinated medications, dosages, or contradicted patient history — creating patient safety risk and HIPAA violations.',
        solution: 'Schema Integrity Engine validates every clinical output against known drug databases and patient records. Boundary Control prevents AI from making recommendations outside its approved scope.',
        impact: '99.8% reduction in hallucinated medical data. Zero HIPAA violations from AI outputs.',
        regulations: ['HIPAA', 'FDA 21 CFR Part 11', 'HITECH'],
    },
    {
        icon: '🏦', title: 'Financial Services AI', industry: 'FinTech',
        problem: 'AI-generated financial reports, trading recommendations, or compliance documents contain fabricated figures, misattributed sources, or regulatory violations.',
        solution: 'Schema validation ensures numerical accuracy. Threat Prevention blocks prompt injection attacks targeting financial AI systems. Memory Integrity maintains audit trails.',
        impact: '100% audit trail compliance. 95% reduction in manual review time for AI-generated reports.',
        regulations: ['SOX', 'SEC Rule 17a-4', 'MiFID II', 'Basel III'],
    },
    {
        icon: '⚖️', title: 'Legal AI', industry: 'LegalTech',
        problem: 'AI-powered legal research tools cite non-existent cases (hallucinated citations), generate contracts with contradictory clauses, or violate privilege boundaries.',
        solution: 'Schema Integrity cross-references every legal citation against verified case databases. Boundary Control enforces privilege scoping. Memory system tracks precedent consistency.',
        impact: 'Zero hallucinated case citations. 80% faster contract review with verified output.',
        regulations: ['Model Rules of Professional Conduct', 'ABA Ethics Opinion 512'],
    },
    {
        icon: '🤖', title: 'AI Agent Orchestration', industry: 'Enterprise',
        problem: 'Autonomous AI agents operate beyond their intended scope, make unauthorized API calls, access restricted data, or cascade errors across interconnected systems.',
        solution: 'EAAP protocol verifies every agent action against its admissibility scope before execution. Boundary Control prevents scope creep. Threat Prevention blocks adversarial manipulation.',
        impact: '100% action admissibility verification. Zero unauthorized agent operations in production.',
        regulations: ['NIST AI RMF', 'EU AI Act', 'ISO/IEC 42001'],
    },
    {
        icon: '🛒', title: 'E-Commerce AI', industry: 'Retail',
        problem: 'AI-powered product recommendations, descriptions, and search results contain fabricated features, incorrect pricing, or discriminatory content.',
        solution: 'Schema validation against product catalogs ensures accuracy. PII detection prevents customer data leakage. Content safety scoring blocks biased or discriminatory outputs.',
        impact: '99.5% product accuracy. 40% reduction in customer support tickets from AI errors.',
        regulations: ['FTC Guidelines', 'CAN-SPAM', 'CCPA'],
    },
    {
        icon: '📚', title: 'EdTech AI', industry: 'Education',
        problem: 'AI tutors provide incorrect answers, fabricate historical events, generate inappropriate content, or fail to adapt to student learning levels.',
        solution: 'Schema validation against verified knowledge bases. Boundary Control enforces age-appropriate content scoping. Memory Integrity maintains accurate student progress.',
        impact: '98% factual accuracy in AI tutoring. Zero inappropriate content incidents.',
        regulations: ['FERPA', 'COPPA', 'CIPA'],
    },
];

export default function ExogramUseCasesPage() {
    return (
        <main className="pt-24 pb-20">
            <div className="page-container max-w-5xl mx-auto">
                <div className="text-xs font-bold text-zinc-950 mb-8">
                    <Link href="/exogram" className="hover:text-zinc-900 transition-colors">Exogram</Link>
                    <span className="mx-2">→</span>
                    <span className="text-zinc-950 font-bold">Use Cases</span>
                </div>

                <section className="text-center mb-16">
                    <p className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest mb-4">Industry Applications</p>
                    <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Cases.</span>
                    </h1>
                    <p className="text-lg text-zinc-900 max-w-2xl mx-auto">
                        Every industry deploying AI faces the same problem: outputs that can&apos;t be trusted.
                        Exogram provides the verification layer that makes AI enterprise-ready.
                    </p>
                </section>

                <div className="space-y-8">
                    {useCases.map(uc => (
                        <section key={uc.title} className="rounded-2xl border border-zinc-400 bg-white/[0.03] p-8 hover:border-purple-500/20 transition-colors">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="text-4xl">{uc.icon}</span>
                                <div>
                                    <span className="text-xs font-bold font-medium font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest">{uc.industry}</span>
                                    <h2 className="text-2xl font-grotesk font-bold text-zinc-900">{uc.title}</h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-3">Problem</h3>
                                    <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">{uc.problem}</p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold font-mono text-emerald-900 font-extrabold font-semibold uppercase tracking-widest mb-3">Solution</h3>
                                    <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">{uc.solution}</p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-3">Impact</h3>
                                    <p className="text-sm font-semibold text-zinc-950 font-semibold mb-3">{uc.impact}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {uc.regulations.map(r => (
                                            <span key={r} className="text-xs font-bold font-medium font-mono text-zinc-950 px-2 py-0.5 rounded border border-zinc-400 bg-zinc-50">{r}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                <section className="mt-16 text-center">
                    <div className="card p-10 border-purple-500/20 bg-purple-900/10">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Your Industry Not Listed?</h2>
                        <p className="text-zinc-900 mb-6 max-w-lg mx-auto">Exogram&apos;s verification layers are industry-agnostic. If your AI system produces outputs that need to be trusted, Exogram can verify them.</p>
                        <div className="flex justify-center gap-4">
                            <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-600 text-zinc-950 font-semibold font-bold rounded-lg hover:bg-purple-500 transition-colors text-sm">
                                Visit Exogram.ai →
                            </a>
                            <Link href="/services" className="px-6 py-3 bg-white/5 border border-zinc-400 text-zinc-950 font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                                Discuss Your Use Case →
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
