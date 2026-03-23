import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product Economics Curriculum Tracks | Richard Ewing',
    description: 'Three curriculum tracks for mastering product economics: Engineering Economics, AI Product Economics, and R&D Capital Management. From fundamentals to advanced frameworks.',
    keywords: ['product economics curriculum', 'engineering economics course', 'AI economics training', 'R&D capital management', 'technical debt certification'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks' },
    openGraph: { title: 'Product Economics Curriculum Tracks', description: 'Master product economics across three specialized tracks.', url: 'https://www.richardewing.io/curriculum/tracks', type: 'website' },
};

const tracks = [
    {
        title: 'Engineering Economics',
        subtitle: 'Track 1 — Foundations',
        description: 'The core curriculum for understanding engineering as an economic activity. From basic metrics to advanced debt modeling.',
        modules: [
            { name: '1.1 Engineering Productivity Metrics', topics: 'DORA Metrics, APER, Feature Velocity, Lead Time for Changes', status: 'Available' },
            { name: '1.2 Technical Debt Classification', topics: 'Code Debt, Architecture Debt, Infrastructure Debt, Dependency Debt', status: 'Available' },
            { name: '1.3 Innovation Tax Framework', topics: 'Maintenance Load, Innovation Tax calculation, Board Reporting', status: 'Available' },
            { name: '1.4 Technical Insolvency Date', topics: 'Predictive modeling, Insolvency triggers, Remediation planning', status: 'Available' },
            { name: '1.5 Product Debt Index', topics: 'PDI calculation, Benchmarking, Quarterly tracking', status: 'Available' },
            { name: '1.6 Board-Ready Reporting', topics: 'Executive summaries, Financial language, Trend analysis', status: 'Coming Soon' },
        ],
        color: 'cyan',
        icon: '📊',
        glossaryTerms: ['technical-debt', 'dora-metrics', 'innovation-tax', 'technical-insolvency-date', 'maintenance-load'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'APER Calculator', href: '/tools/aper' }],
    },
    {
        title: 'AI Product Economics',
        subtitle: 'Track 2 — AI-First',
        description: 'Understanding the economics of AI features: inference costs, model optimization, agentic workflows, and margin preservation.',
        modules: [
            { name: '2.1 AI COGS Analysis', topics: 'Inference costs, Token economics, API pricing models', status: 'Available' },
            { name: '2.2 Cost of Predictivity', topics: 'Per-prediction cost, AI ROI calculation, Break-even analysis', status: 'Available' },
            { name: '2.3 Agentic Workflow Economics', topics: 'Multi-step costs, Orchestration overhead, Agent governance', status: 'Available' },
            { name: '2.4 Model Optimization', topics: 'Quantization, Distillation, Caching, MoE architecture', status: 'Available' },
            { name: '2.5 AI Alignment & Safety', topics: 'RLHF economics, Red teaming costs, EAAP Protocol', status: 'Available' },
            { name: '2.6 Gross Margin Preservation', topics: 'AI cost scaling, Margin collapse prevention, Unit economics', status: 'Coming Soon' },
        ],
        color: 'violet',
        icon: '🤖',
        glossaryTerms: ['ai-cogs', 'cost-of-predictivity', 'orchestration-debt', 'ai-inference', 'mixture-of-experts'],
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }, { name: 'AI Scoring', href: '/tools/scoring' }],
    },
    {
        title: 'R&D Capital Management',
        subtitle: 'Track 3 — Executive',
        description: 'The executive track: managing engineering investment as a financial asset. For CTOs, PE partners, and board members.',
        modules: [
            { name: '3.1 R&D Capital Audit Methodology', topics: 'Discovery, Assessment, Modeling, Reporting', status: 'Available' },
            { name: '3.2 PE Due Diligence', topics: 'Pre-acquisition assessment, Risk quantification, Deal pricing', status: 'Available' },
            { name: '3.3 Portfolio Monitoring', topics: 'Quarterly cadence, Cross-company benchmarking, LP reporting', status: 'Available' },
            { name: '3.4 Value Creation Planning', topics: 'Post-acquisition roadmap, EBITDA alignment, Exit preparation', status: 'Coming Soon' },
            { name: '3.5 Enterprise Value per Engineer', topics: 'EV-SE calculation, M&A valuation, Comp analysis', status: 'Available' },
            { name: '3.6 Board Governance', topics: 'Technology committee structure, Fiduciary oversight, Risk reporting', status: 'Coming Soon' },
        ],
        color: 'emerald',
        icon: '💎',
        glossaryTerms: ['product-debt-index', 'ev-se', 'vc-due-diligence', 'architecture-review-board'],
        tools: [{ name: 'EV-SE Calculator', href: '/tools/ev-se' }, { name: 'Audit Interview', href: '/tools/audit-interview' }],
    },
];

const colorMap: Record<string, string> = { cyan: 'border-cyan-500/30 bg-cyan-500/5', violet: 'border-violet-500/30 bg-violet-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5' };
const textMap: Record<string, string> = { cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400' };
const gradMap: Record<string, string> = { cyan: 'from-cyan-500 to-blue-500', violet: 'from-violet-500 to-purple-500', emerald: 'from-emerald-500 to-teal-500' };

export default function CurriculumTracksPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-4">Curriculum</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                            Three Paths to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Mastery</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            From engineering metrics to AI economics to R&D capital management. Each track builds on the fundamentals with increasing depth. 400+ glossary definitions underpin every module.
                        </p>
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
                                        <div key={j} className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5">
                                            <div>
                                                <div className="text-white font-bold text-sm">{m.name}</div>
                                                <div className="text-xs text-zinc-500 mt-1">{m.topics}</div>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-mono ${m.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-zinc-500/10 text-zinc-500 border border-zinc-500/20'}`}>
                                                {m.status}
                                            </span>
                                        </div>
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
                </div>
            </div>
        </main>
    );
}
