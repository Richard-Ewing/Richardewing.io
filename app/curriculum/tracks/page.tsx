import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product Economics Curriculum — 60 Modules, 4 Tracks | Richard Ewing',
    description: 'Four curriculum tracks for mastering product economics: Engineering Economics, AI Product Economics, R&D Capital Management, and Capstone Applied Practice. 60 comprehensive modules.',
    keywords: ['product economics curriculum', 'engineering economics course', 'AI economics training', 'R&D capital management', 'technical debt certification', 'engineering leadership course'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks' },
    openGraph: { title: 'Product Economics Curriculum — 60 Modules', description: 'Master product economics across four specialized tracks.', url: 'https://www.richardewing.io/curriculum/tracks', type: 'website' },
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
            { id: '1-7', name: '1.7 Platform Engineering Economics', topics: 'IDP ROI, Golden Path Economics, Developer Experience Metrics', href: '/curriculum/tracks/engineering-economics/1-7' },
            { id: '1-8', name: '1.8 Engineering Hiring Economics', topics: 'Cost-per-Hire, Mis-Hire Impact, Retention ROI', href: '/curriculum/tracks/engineering-economics/1-8' },
            { id: '1-9', name: '1.9 Outsourcing & Contractor Economics', topics: 'Blended Rates, Knowledge Retention, Offshore Cost Analysis', href: '/curriculum/tracks/engineering-economics/1-9' },
            { id: '1-10', name: '1.10 Engineering Organization Design', topics: 'Team Sizing, Span of Control, IC vs Management Tracks', href: '/curriculum/tracks/engineering-economics/1-10' },
            { id: '1-11', name: '1.11 Technical Debt Quantification', topics: 'PDI Methodology, Dollar Conversion, CFO Communication', href: '/curriculum/tracks/engineering-economics/1-11' },
            { id: '1-12', name: '1.12 Engineering Benchmarking', topics: 'R&D Spend Benchmarks, Stage-Based APER, Performance Metrics', href: '/curriculum/tracks/engineering-economics/1-12' },
            { id: '1-13', name: '1.13 Engineering Budget Planning', topics: 'Zero-Based Budgeting, Headcount Modeling, Contingency Planning', href: '/curriculum/tracks/engineering-economics/1-13' },
            { id: '1-14', name: '1.14 M&A Engineering Integration', topics: 'Day 1-100 Playbook, Talent Retention, Tech Stack Consolidation', href: '/curriculum/tracks/engineering-economics/1-14' },
            { id: '1-15', name: '1.15 Engineering Economics Synthesis', topics: 'Complete Economic Model, Dashboard Design, Quarterly Reporting', href: '/curriculum/tracks/engineering-economics/1-15' },
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
            { id: '2-7', name: '2.7 AI Build vs Buy Decisions', topics: 'API vs Custom Model, Open Source vs Proprietary, Self-Host TCO', href: '/curriculum/tracks/ai-product-economics/2-7' },
            { id: '2-8', name: '2.8 RAG System Economics', topics: 'Embedding Costs, Retrieval Costs, Context Window Optimization', href: '/curriculum/tracks/ai-product-economics/2-8' },
            { id: '2-9', name: '2.9 AI Feature Profitability Analysis', topics: 'Feature-Level P&L, Revenue Attribution, Sunset Decisions', href: '/curriculum/tracks/ai-product-economics/2-9' },
            { id: '2-10', name: '2.10 GPU Infrastructure Economics', topics: 'GPU Pricing, Spot vs Reserved, Inference Batch Optimization', href: '/curriculum/tracks/ai-product-economics/2-10' },
            { id: '2-11', name: '2.11 AI Compliance & Risk Costs', topics: 'EU AI Act, Model Auditing, Bias Testing Budgets', href: '/curriculum/tracks/ai-product-economics/2-11' },
            { id: '2-12', name: '2.12 AI Team Composition', topics: 'ML Engineer Costs, Data Scientists, Prompt Engineers, AI PMs', href: '/curriculum/tracks/ai-product-economics/2-12' },
            { id: '2-13', name: '2.13 AI Product Lifecycle', topics: 'Prototype to Production 10x Cost, Scaling Patterns', href: '/curriculum/tracks/ai-product-economics/2-13' },
            { id: '2-14', name: '2.14 AI Marketplace Strategy', topics: 'API Monetization, Model-as-a-Service, Developer Ecosystems', href: '/curriculum/tracks/ai-product-economics/2-14' },
            { id: '2-15', name: '2.15 AI Economics Synthesis', topics: 'Complete AI Economic Model, Portfolio Analysis, Board Reporting', href: '/curriculum/tracks/ai-product-economics/2-15' },
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
            { id: '3-7', name: '3.7 Architecture Assessment', topics: 'Coupling Analysis, Scalability Modeling, Architecture Debt', href: '/curriculum/tracks/rd-capital-management/3-7' },
            { id: '3-8', name: '3.8 Testing & Quality Economics', topics: 'Bug Cost by Stage, Test Automation ROI, Quality Gates', href: '/curriculum/tracks/rd-capital-management/3-8' },
            { id: '3-9', name: '3.9 Dependency & Vendor Risk', topics: 'Dependency Auditing, License Compliance, Vendor Concentration', href: '/curriculum/tracks/rd-capital-management/3-9' },
            { id: '3-10', name: '3.10 Cloud Infrastructure Audit', topics: 'Cloud Cost Audit, Right-Sizing, Commitment Optimization', href: '/curriculum/tracks/rd-capital-management/3-10' },
            { id: '3-11', name: '3.11 Security Debt Assessment', topics: 'Vulnerability Exposure, Compliance Gaps, Remediation Economics', href: '/curriculum/tracks/rd-capital-management/3-11' },
            { id: '3-12', name: '3.12 Data Quality & Governance', topics: 'Data Quality Costs, Five Dimensions, Governance Frameworks', href: '/curriculum/tracks/rd-capital-management/3-12' },
            { id: '3-13', name: '3.13 DevOps Maturity Assessment', topics: 'CI/CD Pipeline ROI, Observability Investment, Incident Costs', href: '/curriculum/tracks/rd-capital-management/3-13' },
            { id: '3-14', name: '3.14 Technical Debt Communication', topics: 'CFO Translation, Board Presentations, Investor Due Diligence', href: '/curriculum/tracks/rd-capital-management/3-14' },
            { id: '3-15', name: '3.15 R&D Capital Synthesis', topics: 'Complete Framework, Quarterly Cadence, Investment Culture', href: '/curriculum/tracks/rd-capital-management/3-15' },
        ],
        color: 'emerald',
        icon: '💎',
        glossaryTerms: ['product-debt-index', 'ev-se', 'vc-due-diligence', 'architecture-review-board', 'vendor-lock-in', 'capex-vs-opex'],
        tools: [{ name: 'EV-SE Calculator', href: '/tools/ev-se' }, { name: 'Audit Interview', href: '/tools/audit-interview' }],
    },
    {
        title: 'Capstone & Applied Practice',
        subtitle: 'Track 4 — Capstone',
        description: 'Applied practice modules covering startup economics, platform engineering, org scaling, cloud FinOps, SaaS metrics, and the full R&D Capital Audit capstone project.',
        modules: [
            { id: '4-1', name: '4.1 Startup Engineering Economics', topics: 'Runway-Aware Engineering, MVP Economics, Series A Positioning', href: '/curriculum/tracks/capstone/4-1' },
            { id: '4-2', name: '4.2 Enterprise Platform Economics', topics: 'Platform Tax, Developer Experience ROI, Platform Team Economics', href: '/curriculum/tracks/capstone/4-2' },
            { id: '4-3', name: '4.3 Engineering Org Scaling', topics: 'Scaling Laws, Hiring Economics, Span of Control, Conway\'s Law', href: '/curriculum/tracks/capstone/4-3' },
            { id: '4-4', name: '4.4 Cloud FinOps & Infrastructure', topics: 'Cloud Cost Anatomy, Reservation Strategy, FinOps Culture', href: '/curriculum/tracks/capstone/4-4' },
            { id: '4-5', name: '4.5 SaaS Metrics Deep Dive', topics: 'NRR, CAC:LTV, Unit Economics, Rule of 40, Engineering Efficiency', href: '/curriculum/tracks/capstone/4-5' },
            { id: '4-6', name: '4.6 Capstone: Full R&D Capital Audit', topics: 'Complete Audit Project, Board-Ready Document, Investment Roadmap', href: '/curriculum/tracks/capstone/4-6' },
            { id: '4-7', name: '4.7 Case Study: SaaS Scale-Up', topics: 'Series B Audit, Scaling Challenges, Technical Debt Hotspots', href: '/curriculum/tracks/capstone/4-7' },
            { id: '4-8', name: '4.8 Case Study: PE Portfolio', topics: 'Post-Acquisition Audit, Platform Consolidation, Team Restructuring', href: '/curriculum/tracks/capstone/4-8' },
            { id: '4-9', name: '4.9 Case Study: AI Startup', topics: 'Burn Rate Optimization, Model Economics, Commercialization', href: '/curriculum/tracks/capstone/4-9' },
            { id: '4-10', name: '4.10 Case Study: Enterprise Modernization', topics: 'Legacy Migration, Dual-Speed IT, Strangler Fig Pattern', href: '/curriculum/tracks/capstone/4-10' },
            { id: '4-11', name: '4.11 Building Your Practice', topics: 'Engagement Design, Pricing, Deliverables, Client Management', href: '/curriculum/tracks/capstone/4-11' },
            { id: '4-12', name: '4.12 Tools Deep Dive', topics: 'Professional Tool Workflow, Cross-Referencing, Assessment Timing', href: '/curriculum/tracks/capstone/4-12' },
            { id: '4-13', name: '4.13 Presentation & Storytelling', topics: 'SCR Framework, Data Visualization, Executive Communication', href: '/curriculum/tracks/capstone/4-13' },
            { id: '4-14', name: '4.14 Continuous Improvement', topics: 'Engineering OKRs, Monthly Reviews, Automated Dashboards', href: '/curriculum/tracks/capstone/4-14' },
            { id: '4-15', name: '4.15 Final Capstone Assessment', topics: 'End-to-End Audit, Peer Review, Professional Presentation', href: '/curriculum/tracks/capstone/4-15' },
        ],
        color: 'amber',
        icon: '🏆',
        glossaryTerms: ['burn-rate', 'cac', 'arr', 'finops', 'developer-experience', 'cost-per-hire'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'APER Calculator', href: '/tools/aper' }, { name: 'AUEB Calculator', href: '/tools/aueb' }, { name: 'EV-SE Calculator', href: '/tools/ev-se' }],
    },
];

const colorMap: Record<string, string> = { cyan: 'border-cyan-500/30 bg-cyan-500/5', violet: 'border-violet-500/30 bg-violet-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5', amber: 'border-amber-500/30 bg-amber-500/5' };
const textMap: Record<string, string> = { cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400', amber: 'text-amber-400' };

export default function CurriculumTracksPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-4">Curriculum — 60 Modules</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                            Four Paths to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Mastery</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            From engineering metrics to AI economics to capital management to applied practice. 60 modules, 150+ lessons, each with hands-on exercises and tools. 420+ glossary definitions underpin every module.
                        </p>
                        <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">60</div>
                                <div className="text-xs text-zinc-500">Modules</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">150+</div>
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
