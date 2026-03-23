import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product Economics Curriculum — 18 Modules, 3 Tracks | Richard Ewing',
    description: 'Three curriculum tracks for mastering product economics: Engineering Economics, AI Product Economics, and R&D Capital Management. 18 comprehensive modules with exercises, assessments, and tools.',
    keywords: ['product economics curriculum', 'engineering economics course', 'AI economics training', 'R&D capital management', 'technical debt certification', 'engineering leadership course'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks' },
    openGraph: { title: 'Product Economics Curriculum — 18 Modules', description: 'Master product economics across three specialized tracks.', url: 'https://www.richardewing.io/curriculum/tracks', type: 'website' },
};

const tracks = [
    {
        title: 'Engineering Economics',
        subtitle: 'Track 1 — Foundations',
        description: 'The core curriculum for understanding engineering as an economic activity. From basic metrics to advanced budgeting and organizational design.',
        modules: [
            { id: '1-1', name: '1.1 Engineering Productivity Metrics', topics: 'DORA Metrics, APER, Feature Velocity, Board-Ready Reporting', href: '/curriculum/tracks/engineering-economics/1-1' },
            { id: '1-2', name: '1.2 Technical Debt Classification', topics: 'Code Debt, Architecture Debt, Infrastructure Debt, PDI Framework', href: '/curriculum/tracks/engineering-economics/1-2' },
            { id: '1-3', name: '1.3 Cost of Delay & Prioritization', topics: 'Cost of Delay, WSJF, Debt Interest Rates, Executive Framing', href: '/curriculum/tracks/engineering-economics/1-3' },
            { id: '1-4', name: '1.4 Team Topology & Conway\'s Law', topics: 'Conway\'s Law, Four Team Topologies, Cognitive Load, Coordination Tax', href: '/curriculum/tracks/engineering-economics/1-4' },
            { id: '1-5', name: '1.5 Build vs Buy Economics', topics: 'TCO Analysis, Integration Debt, Vendor Lock-In, Differentiation Test', href: '/curriculum/tracks/engineering-economics/1-5' },
            { id: '1-6', name: '1.6 Engineering Budget & Capex/Opex', topics: 'Budget Anatomy, Software Capitalization, R&D Tax Credits', href: '/curriculum/tracks/engineering-economics/1-6' },
        ],
        color: 'cyan',
        icon: '📊',
        glossaryTerms: ['technical-debt', 'dora-metrics', 'innovation-tax', 'technical-insolvency-date', 'maintenance-load', 'conways-law', 'cost-of-delay'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'APER Calculator', href: '/tools/aper' }],
    },
    {
        title: 'AI Product Economics',
        subtitle: 'Track 2 — AI-First',
        description: 'Understanding the economics of AI features: inference costs, model optimization, RAG architecture, governance costs, and pricing strategies.',
        modules: [
            { id: '2-1', name: '2.1 AI COGS Analysis', topics: 'AI COGS Equation, Token Economics, API Pricing Architecture', href: '/curriculum/tracks/ai-product-economics/2-1' },
            { id: '2-2', name: '2.2 Model Selection & Optimization', topics: 'Model Tiers, Routing Architecture, Fine-Tuning ROI, Distillation', href: '/curriculum/tracks/ai-product-economics/2-2' },
            { id: '2-3', name: '2.3 AI Feature Profitability', topics: 'Feature-Level P&L, Per-User Economics, The 10x Rule', href: '/curriculum/tracks/ai-product-economics/2-3' },
            { id: '2-4', name: '2.4 RAG Architecture Economics', topics: 'Embedding Costs, Vector DB Pricing, Chunking, Caching & Reranking', href: '/curriculum/tracks/ai-product-economics/2-4' },
            { id: '2-5', name: '2.5 AI Governance & Safety Costs', topics: 'Guardrail Tax, Red Teaming, Bias Testing, EU AI Act Compliance', href: '/curriculum/tracks/ai-product-economics/2-5' },
            { id: '2-6', name: '2.6 AI Product Pricing Strategy', topics: 'Value-Based Pricing, AI Credits, Pricing Experiments', href: '/curriculum/tracks/ai-product-economics/2-6' },
        ],
        color: 'violet',
        icon: '🤖',
        glossaryTerms: ['ai-cogs', 'cost-of-predictivity', 'orchestration-debt', 'ai-inference', 'rag', 'token-ai', 'guardrails'],
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }, { name: 'AI Scoring', href: '/tools/scoring' }],
    },
    {
        title: 'R&D Capital Management',
        subtitle: 'Track 3 — Executive',
        description: 'The executive track: managing engineering investment as a financial asset. For CTOs, PE partners, and board members.',
        modules: [
            { id: '3-1', name: '3.1 R&D Capital Audit Methodology', topics: 'Discovery Phase, Technical Assessment, Economic Modeling', href: '/curriculum/tracks/rd-capital-management/3-1' },
            { id: '3-2', name: '3.2 PE Due Diligence for Technology', topics: 'Technology Asset Valuation, Team Assessment, Debt as Deal Currency', href: '/curriculum/tracks/rd-capital-management/3-2' },
            { id: '3-3', name: '3.3 Board Reporting & Executive Communication', topics: '4-Quadrant Board Slide, KPI Dashboards, Investment Proposals', href: '/curriculum/tracks/rd-capital-management/3-3' },
            { id: '3-4', name: '3.4 M&A Technical Assessment', topics: 'Pre-Close Assessment, Integration Costs, Technology Synergies', href: '/curriculum/tracks/rd-capital-management/3-4' },
            { id: '3-5', name: '3.5 Vendor & Platform Risk Assessment', topics: 'Criticality Scoring, Concentration Risk, Exit Strategy Planning', href: '/curriculum/tracks/rd-capital-management/3-5' },
            { id: '3-6', name: '3.6 Remediation Roadmap & Execution', topics: 'ICE Prioritization, Wave Planning, Stakeholder Management', href: '/curriculum/tracks/rd-capital-management/3-6' },
        ],
        color: 'emerald',
        icon: '💎',
        glossaryTerms: ['product-debt-index', 'ev-se', 'vc-due-diligence', 'architecture-review-board', 'vendor-lock-in', 'capex-vs-opex'],
        tools: [{ name: 'EV-SE Calculator', href: '/tools/ev-se' }, { name: 'Audit Interview', href: '/tools/audit-interview' }],
    },
];

const colorMap: Record<string, string> = { cyan: 'border-cyan-500/30 bg-cyan-500/5', violet: 'border-violet-500/30 bg-violet-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5' };
const textMap: Record<string, string> = { cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400' };

export default function CurriculumTracksPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-4">Curriculum — 18 Modules</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                            Three Paths to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Mastery</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            From engineering metrics to AI economics to R&D capital management. 18 modules, 60+ lessons, each with hands-on exercises and real-world tools. 420+ glossary definitions underpin every module.
                        </p>
                        <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">18</div>
                                <div className="text-xs text-zinc-500">Modules</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">60+</div>
                                <div className="text-xs text-zinc-500">Lessons</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">420+</div>
                                <div className="text-xs text-zinc-500">Glossary Terms</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">5</div>
                                <div className="text-xs text-zinc-500">Free Tools</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {tracks.map((track, i) => (
                            <div key={i} className={`rounded-2xl border p-8 sm:p-10 ${colorMap[track.color]}`}>
                                <div className="flex items-start gap-4 mb-8">
                                    <span className="text-4xl">{track.icon}</span>
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">{track.subtitle}</div>
                                        <h2 className={`text-2xl font-grotesk font-bold ${textMap[track.color]}`}>{track.title}</h2>
                                        <p className="text-zinc-400 mt-2">{track.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    {track.modules.map((m, j) => (
                                        <Link key={j} href={m.href} className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 transition-colors group">
                                            <div>
                                                <div className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors">{m.name}</div>
                                                <div className="text-xs text-zinc-500 mt-1">{m.topics}</div>
                                            </div>
                                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                Start →
                                            </span>
                                        </Link>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2">Related Glossary</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {track.glossaryTerms.map(t => (
                                                <Link key={t} href={`/glossary/${t}`} className="px-2 py-1 rounded-md bg-white/5 text-xs text-zinc-400 hover:text-white transition-colors">{t.replace(/-/g, ' ')}</Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2">Tools</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {track.tools.map(t => (
                                                <Link key={t.href} href={t.href} className={`px-3 py-1 rounded-md text-xs font-bold ${textMap[track.color]} hover:underline`}>{t.name} →</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12">
                            <h2 className="text-3xl font-grotesk font-bold text-white mb-4">Ready to Go Deeper?</h2>
                            <p className="text-zinc-400 max-w-xl mx-auto mb-8">Our curriculum gives you the frameworks. Our advisory gives you the implementation. Book a session to apply these concepts to your specific organization.</p>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <Link href="/advisory" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity">Book Advisory Session</Link>
                                <Link href="/tools/pdi" className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-violet-500/30 transition-colors font-bold">Try Free Tools →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
