import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import EcosystemMap from '@/app/components/EcosystemMap';
import ResearchTimeline from '@/app/components/client/ResearchTimeline';
import FAQItem from '@/app/components/FAQItem';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export const metadata: Metadata = {
    title: 'AI Governance Research Timeline',
    description: 'Chronological research evolution timeline covering AI unit economics, deterministic governance, and runtime cost control architectures.',
    alternates: {
        canonical: 'https://www.richardewing.io/research',
    },
    openGraph: {
        title: 'Research Evolution Timeline AI Governance | Richard Ewing',
        description: 'Research Evolution Timeline provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
        url: 'https://www.richardewing.io/research',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Research Evolution Timeline AI Governance | Richard Ewing',
        description: 'Research Evolution Timeline provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
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

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/research/publications" className="px-5 py-3 rounded-xl bg-cyan-900 text-white font-mono font-bold text-xs hover:bg-cyan-800 transition shadow-sm">
                            Browse Publications Catalog (80+ Works) →
                        </Link>
                        <Link href="/concepts" className="px-5 py-3 rounded-xl bg-zinc-900 text-white font-mono font-bold text-xs hover:bg-zinc-800 transition shadow-sm">
                            Explore Canonical Concepts →
                        </Link>
                    </div>
                </section>

                {/* Live Multi-Channel Publications Grid */}
                <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest block mb-1">
                                Real-Time Feed • Multi-Channel Research
                            </span>
                            <h2 className="text-2xl font-grotesk font-bold text-zinc-950">
                                Recent Published Works &amp; Laboratory Briefings
                            </h2>
                        </div>
                        <Link href="/research/publications" className="text-xs font-mono font-bold text-cyan-900 hover:underline">
                            View All 80+ Works →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {RESEARCH_CORPUS.slice(0, 4).map(work => (
                            <a
                                key={work.id}
                                href={work.url}
                                target={work.url.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-[10px] font-mono font-bold text-cyan-900 uppercase mb-2">
                                        <span>{work.publisher}</span>
                                        {work.date && <span>{work.date}</span>}
                                    </div>
                                    <h3 className="text-sm font-bold text-zinc-950 group-hover:text-cyan-800 transition-colors mb-2 leading-snug">
                                        {work.title} ↗
                                    </h3>
                                    <p className="text-xs text-zinc-700 font-medium line-clamp-3">
                                        {work.thesis}
                                    </p>
                                </div>
                                <span className="text-xs font-mono font-bold text-cyan-900 mt-4 block">Read Work ↗</span>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Why This Exists Section (Worldview Compression Component) */}
                <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-4">Why This Exists</h3>
                    <p className="text-zinc-900 leading-relaxed font-semibold text-sm sm:text-base mb-6">
                        Most AI discussions focus on model capabilities. My work focuses on what happens after deployment. 
                        As AI systems become embedded in products, organizations face a new class of problems involving economics, governance, security, reliability, and operational control. 
                        The Production AI Governance Framework exists to help organizations understand, measure, and manage those challenges.
                    </p>
                    <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <div className="text-sm font-bold text-zinc-950">100+ Published Works Cataloged</div>
                            <div className="text-xs text-zinc-600 font-medium">Across CIO.com, Built In, Beehiiv, LinkedIn, Mind the Product, & HackerNoon.</div>
                        </div>
                        <Link
                            href="/research/publications"
                            className="px-5 py-2.5 bg-cyan-900 hover:bg-cyan-950 text-white font-bold text-sm rounded-xl transition shadow-sm whitespace-nowrap"
                        >
                            Browse 100+ Publications Catalog →
                        </Link>
                    </div>
                </section>

                {/* Vertical Timeline */}
                <ResearchTimeline phases={phases} />

                {/* Ecosystem Map Section */}
                <section className="mb-20 border-t border-zinc-300 pt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold font-grotesk text-zinc-950">Ecosystem Alignment Map</h3>
                        <p className="text-sm text-zinc-900 mt-1">Every publication, tool, and software system mapped back to the core research program.</p>
                    </div>
                    <EcosystemMap />
                </section>

                {/* FAQ Section */}
                <section className="mb-16 border-t border-zinc-300 pt-12">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            'mainEntity': [
                                {
                                    '@type': 'Question',
                                    'name': 'How was the Production AI Governance research conducted?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'The research program spans 6 distinct phases from 2024 to 2026+. It began with core software economics and R&D capital efficiency studies, progressed through product debt quantification and AI unit economics, and culminated in the design of Exogram as a runtime security control plane.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    'name': 'Where can I read the published research papers?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'Main findings are published in tier-1 publications like CIO.com, Built In, and Mind the Product. More technical reference specifications are hosted on GitHub and Exogram.ai.'
                                    }
                                }
                            ]
                        }) }}
                    />
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <FAQItem 
                            question="How was the Production AI Governance research conducted?" 
                            answer="The research program spans 6 distinct phases from 2024 to 2026+. It began with core software economics and R&D capital efficiency studies, progressed through product debt quantification and AI unit economics, and culminated in the design of Exogram as a runtime security control plane."
                        />
                        <FAQItem 
                            question="Where can I read the published research papers?" 
                            answer="Main findings are published in tier-1 publications like CIO.com, Built In, and Mind the Product. More technical reference specifications are hosted on GitHub and Exogram.ai."
                        />
                    </div>
                </section>

                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
