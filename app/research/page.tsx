import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import EcosystemMap from '@/app/components/EcosystemMap';

export const metadata: Metadata = {
    title: 'Research Evolution Timeline | Production AI Governance',
    description: 'Explore the multi-year chronological progression of the Production AI Governance research program across 6 distinct intellectual phases from 2024 to 2026+.',
    alternates: {
        canonical: 'https://www.richardewing.io/research',
    },
    openGraph: {
        title: 'Research Evolution Timeline | Richard Ewing',
        description: 'Mapping the body of evidence: how AI unit economics, product debt, agentic security, and control mechanics evolved into Exogram.',
        url: 'https://www.richardewing.io/research',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Research Evolution Timeline | Richard Ewing',
        description: 'Chronological intellectual evolution of the Production AI Governance framework.',
    },
};

const phases = [
    {
        number: 'Phase 1',
        title: 'Economics',
        timeline: '2024 – 2025',
        focus: 'Distilling the unit economics of LLM inference, indexing raw engineering throughput, and auditing R&D capital allocation.',
        deliverables: [
            { label: 'The Innovation Tax (CIO.com)', url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html' },
            { label: 'Why Your CFO Hates Agile (CIO.com)', url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html' },
            { label: 'Manning Book Proposal', url: '#' },
        ],
        color: 'border-cyan-400 bg-cyan-50/10 text-cyan-900',
    },
    {
        number: 'Phase 2',
        title: 'Governance',
        timeline: '2025',
        focus: 'Establishing the Product Debt Index (PDI) to convert undocumented technical debt into boardroom-ready exit valuation metrics.',
        deliverables: [
            { label: '3 Financial Metrics Every PM Needs (Mind the Product)', url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/' },
            { label: 'Real Innovation Requires Deleting Code (Built In)', url: 'https://builtin.com/articles/innovation-requires-deleting-code' },
            { label: 'Product Debt Index Calculator (PDI)', url: '/tools/pdi' },
        ],
        color: 'border-emerald-400 bg-emerald-50/10 text-emerald-900',
    },
    {
        number: 'Phase 3',
        title: 'Operational AI',
        timeline: '2025',
        focus: 'Solving the Cost of Predictivity. Modeling AI margin collapse points, cloud FinOps repatriation breakevens, and small model alternatives.',
        deliverables: [
            { label: 'The Cost of Predictivity (Built In)', url: 'https://builtin.com/articles/ai-product-business-test' },
            { label: 'Claude API Bill Blowup (CIO.com)', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html' },
            { label: 'SLM vs API Arbitrage Simulator', url: '/tools/slm-vs-api' },
        ],
        color: 'border-indigo-400 bg-indigo-50/10 text-indigo-900',
    },
    {
        number: 'Phase 4',
        title: 'Agent Security',
        timeline: '2026',
        focus: 'Identifying security liabilities in autonomous systems. Mapping jailbreaks, shadow AI data leaks, and sandbox evasion vectors.',
        deliverables: [
            { label: 'Your AI Agent Needs a Kill Switch (Built In)', url: 'https://builtin.com/articles/ai-agent-kill-switch' },
            { label: 'Shadow AI Scanner (Audit Tool)', url: '/tools/shadow-ai' },
            { label: 'Prompt Evasion Red Teaming Sandbox', url: '/tools/prompt-injection-sandbox' },
        ],
        color: 'border-amber-400 bg-amber-50/10 text-amber-900',
    },
    {
        number: 'Phase 5',
        title: 'Runtime Governance',
        timeline: '2026',
        focus: 'Shifting from passive observability to deterministic physical control boundaries. Building state-verification engines.',
        deliverables: [
            { label: 'The Technical Insolvency Date (The Canon)', url: '/articles/technical-insolvency-date' },
            { label: 'AI Unit Economics Audit Framework', url: '/tools/aueb' },
            { label: 'Deterministic Execution Sandbox (Sandbox)', url: 'https://exogram.ai/proving-ground' },
        ],
        color: 'border-rose-400 bg-rose-50/10 text-rose-900',
    },
    {
        number: 'Phase 6',
        title: 'Exogram',
        timeline: '2026+',
        focus: 'Deployment of the sovereign Exogram runtime interceptor. The physical proxy layer enforcing zero-trust governance.',
        deliverables: [
            { label: 'Exogram.ai Proving Ground', url: 'https://exogram.ai/analyze' },
            { label: 'Sovereign Run-Time Policies (SECS)', url: 'https://github.com/Richard-Ewing/synthetic-enterprise-cognition' },
        ],
        color: 'border-purple-400 bg-purple-50/10 text-purple-900',
    },
];

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Evidence</span><span>/</span><span className="text-cyan-900 font-extrabold">Research Timeline</span>
                </div>

                <section className="mb-16 border-b border-zinc-400 pb-16">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        How The Governance <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">System Emerged.</span>
                    </h1>
                    <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-2xl">
                        The intellectual evolution mapping the progression from foundational AI unit economics up to deterministic runtime enforcement.
                    </p>
                </section>

                {/* Why This Exists Section (Worldview Compression Component) */}
                <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-4">Why This Exists</h3>
                    <p className="text-zinc-900 leading-relaxed font-semibold text-sm sm:text-base">
                        Most AI discussions focus on model capabilities. My work focuses on what happens after deployment. 
                        As AI systems become embedded in products, organizations face a new class of problems involving economics, governance, security, reliability, and operational control. 
                        The Production AI Governance Framework exists to help organizations understand, measure, and manage those challenges.
                    </p>
                </section>

                {/* Vertical Timeline */}
                <section className="mb-20 relative">
                    {/* Center line */}
                    <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-300 -translate-x-1/2" />

                    <div className="space-y-12">
                        {phases.map((phase, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={phase.number} className={`flex flex-col sm:flex-row items-start sm:items-center relative ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 -translate-x-1/2 z-10" />

                                    {/* Content Card */}
                                    <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-8">
                                        <div className={`p-6 bg-white border border-zinc-300 rounded-3xl shadow-sm hover:border-indigo-500 transition-colors ${phase.color}`}>
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-xs font-mono font-bold uppercase tracking-wider bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded">
                                                    {phase.number}
                                                </span>
                                                <span className="text-xs font-mono font-bold text-zinc-950">
                                                    {phase.timeline}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold font-grotesk text-zinc-950 mb-2">
                                                {phase.title}
                                            </h3>
                                            <p className="text-xs text-zinc-900 leading-relaxed font-semibold mb-4">
                                                {phase.focus}
                                            </p>
                                            
                                            {/* Deliverable Links */}
                                            <div className="pt-3 border-t border-zinc-200">
                                                <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-2">Core Deliverables</span>
                                                <div className="flex flex-col gap-1.5">
                                                    {phase.deliverables.map((del, dIdx) => (
                                                        <Link 
                                                            key={dIdx} 
                                                            href={del.url}
                                                            target={del.url.startsWith('http') ? '_blank' : undefined}
                                                            rel={del.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                            className="text-xs font-bold text-cyan-900 hover:text-cyan-950 transition-colors inline-flex items-center gap-1"
                                                        >
                                                            • {del.label} <span className="opacity-60 text-[9px]">{del.url.startsWith('http') ? '↗' : '→'}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Invisible spacer to balance the flex row */}
                                    <div className="hidden sm:block w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Ecosystem Map Section */}
                <section className="mb-20 border-t border-zinc-300 pt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold font-grotesk text-zinc-950">Ecosystem Alignment Map</h3>
                        <p className="text-sm text-zinc-900 mt-1">Every publication, tool, and software system mapped back to the core research program.</p>
                    </div>
                    <EcosystemMap />
                </section>

                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
