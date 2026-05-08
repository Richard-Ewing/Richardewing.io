import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Case Studies — R&D Capital Audit Results & Impact',
    description: 'Real-world R&D Capital Audit case studies showing measurable impact: technical debt reduction, engineering velocity improvement, AI cost optimization, a...',
    keywords: ['R&D audit case studies', 'technical debt results', 'engineering audit ROI', 'PE due diligence case study', 'AI economist case studies'],
    alternates: { canonical: 'https://www.richardewing.io/case-studies' },
    openGraph: { title: 'Case Studies — R&D Capital Audit Results', description: 'Measurable impact from R&D Capital Audits.', url: 'https://www.richardewing.io/case-studies', type: 'website' },
};

const caseStudies = [
    {
        title: 'PE Due Diligence: Series C SaaS (FinTech)',
        subtitle: 'Pre-Acquisition Technical Assessment',
        situation: 'Private equity firm evaluating a $180M Series C FinTech acquisition. CTO presented a clean technology story. The board needed independent validation before closing.',
        findings: ['Technical Insolvency Date: 14 months away', 'Innovation Tax: 58% (critical)', 'Hidden infrastructure debt: $4.2M in deferred cloud migration', 'AI model retraining pipeline: no automation, manual-only'],
        impact: ['Renegotiated acquisition price by $12M based on debt quantification', 'Created 18-month remediation roadmap with quarterly milestones', 'Avoided a potential $8M surprise infrastructure migration post-acquisition'],
        metrics: { saved: '$12M', innovationTax: '58% → 34%', timeline: '6 weeks' },
        color: 'cyan',
        icon: '🔍',
    },
    {
        title: 'SaaS Scaling: Growth-Stage Product (B2B)',
        subtitle: 'Engineering Velocity Recovery',
        situation: 'B2B SaaS company with 45 engineers shipping 3x slower than 12 months prior. CEO couldn\'t explain to the board why feature velocity collapsed despite growing the team 2x.',
        findings: ['Maintenance load consuming 65% of engineering capacity', 'No feature flags — every deploy was a full release', 'Monolith architecture creating merge conflicts that cost 15 hours/week', 'Zero observability — MTTR averaged 4+ hours'],
        impact: ['Reduced Innovation Tax from 65% to 32% in 9 months', 'Implemented strangler fig migration from monolith', 'Deployed feature flag infrastructure (LaunchDarkly)', 'MTTR reduced from 4+ hours to 28 minutes'],
        metrics: { saved: '$3.8M/yr', innovationTax: '65% → 32%', timeline: '9 months' },
        color: 'emerald',
        icon: '📈',
    },
    {
        title: 'AI Cost Optimization: ML-Heavy Product (HealthTech)',
        subtitle: 'Inference Cost Reduction',
        situation: 'HealthTech company with AI-powered diagnostic tool. Gross margins dropped from 72% to 41% as AI inference costs scaled with customer growth. Board demanded margin recovery.',
        findings: ['AI COGS: $0.47 per inference (target: $0.08)', 'No model optimization — running full-precision GPT-4 for every query', 'Redundant API calls: average 3.2 LLM calls per user request', 'No caching layer — identical queries re-processed every time'],
        impact: ['Reduced inference cost from $0.47 to $0.06 per query', 'Implemented response caching (85% cache hit rate)', 'Migrated simple queries to fine-tuned open-source model', 'Gross margins recovered from 41% to 68%'],
        metrics: { saved: '$2.1M/yr', margin: '41% → 68%', timeline: '4 months' },
        color: 'violet',
        icon: '🤖',
    },
];

const colorMap: Record<string, string> = { cyan: 'border-cyan-500/30 bg-cyan-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5', violet: 'border-violet-500/30 bg-violet-500/5' };
const textMap: Record<string, string> = { cyan: 'text-cyan-900 font-extrabold font-semibold', emerald: 'text-emerald-900 font-extrabold font-semibold', violet: 'text-violet-400' };
const gradMap: Record<string, string> = { cyan: 'from-cyan-500 to-blue-500', emerald: 'from-emerald-500 to-teal-500', violet: 'from-violet-500 to-purple-500' };

export default function CaseStudiesPage() {
    const schema = {
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        name: 'R&D Capital Audit Case Studies',
        description: 'Real-world case studies showing measurable impact from R&D Capital Audits.',
        url: 'https://www.richardewing.io/case-studies',
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-bold font-mono text-rose-500 uppercase tracking-widest mb-4">Case Studies</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            Measurable{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-400">Impact</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto">
                            R&D Capital Audits produce quantifiable results. Here are representative examples of how we&apos;ve helped PE firms, boards, and engineering leaders.
                        </p>
                    </div>

                    <div className="space-y-12 mb-16">
                        {caseStudies.map((cs, i) => (
                            <div key={i} className={`rounded-2xl border p-8 sm:p-10 ${colorMap[cs.color]}`}>
                                <div className="flex items-start gap-4 mb-6">
                                    <span className="text-4xl">{cs.icon}</span>
                                    <div>
                                        <h2 className={`text-2xl font-grotesk font-bold ${textMap[cs.color]}`}>{cs.title}</h2>
                                        <div className="text-sm font-semibold text-zinc-950 font-mono uppercase tracking-widest">{cs.subtitle}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                    <div className="rounded-xl bg-zinc-100 p-4 text-center">
                                        <div className={`text-2xl font-bold ${textMap[cs.color]}`}>{cs.metrics.saved}</div>
                                        <div className="text-xs font-bold text-zinc-900 font-bold">Saved</div>
                                    </div>
                                    <div className="rounded-xl bg-zinc-100 p-4 text-center">
                                        <div className={`text-2xl font-bold ${textMap[cs.color]}`}>{cs.metrics.innovationTax || cs.metrics.margin}</div>
                                        <div className="text-xs font-bold text-zinc-900 font-bold">{cs.metrics.innovationTax ? 'Innovation Tax' : 'Gross Margin'}</div>
                                    </div>
                                    <div className="rounded-xl bg-zinc-100 p-4 text-center">
                                        <div className={`text-2xl font-bold ${textMap[cs.color]}`}>{cs.metrics.timeline}</div>
                                        <div className="text-xs font-bold text-zinc-900 font-bold">Timeline</div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Situation</h3>
                                    <p className="text-zinc-900">{cs.situation}</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-sm font-semibold font-mono text-rose-400 uppercase tracking-widest mb-3">Findings</h3>
                                        <ul className="space-y-2">
                                            {cs.findings.map((f, j) => <li key={j} className="text-sm font-semibold text-zinc-900 font-medium flex items-start gap-2"><span className="text-rose-400 mt-0.5">⚠</span>{f}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold font-mono text-emerald-900 font-extrabold font-semibold uppercase tracking-widest mb-3">Impact</h3>
                                        <ul className="space-y-2">
                                            {cs.impact.map((im, j) => <li key={j} className="text-sm font-semibold text-zinc-900 font-medium flex items-start gap-2"><span className="text-emerald-900 font-extrabold font-semibold mt-0.5">✓</span>{im}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-10 text-center">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">Get Your Custom Audit</h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto">Every R&D Capital Audit is tailored to your company&apos;s technology stack, team structure, and business context. Results delivered in 2-6 weeks.</p>
                        <Link href="/advisory" className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-rose-500 to-violet-500 text-zinc-950 font-semibold text-lg font-bold hover:opacity-90 transition-opacity">Book Your R&D Audit →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
