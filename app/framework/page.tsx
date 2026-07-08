import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import EcosystemMap from '@/app/components/EcosystemMap';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
    title: 'The Production AI Governance F & Strategy Diagnostics | Richard Ewing',
    description: 'The Production AI Governance F provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: {
        canonical: 'https://www.richardewing.io/framework',
    },
    openGraph: {
        title: 'The Production AI Governance Framework | Richard Ewing',
        description: 'Explore the 6-pillar framework (Economics, Product, Engineering, Security, Operations, and Runtime Governance) to control production AI systems sustainably.',
        url: 'https://www.richardewing.io/framework',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Production AI Governance Framework',
        description: 'Explore the 6-pillar framework (Economics, Product, Engineering, Security, Operations, and Runtime Governance) to control production AI systems sustainably.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const pillars = [
    { slug: 'economics', name: 'Economics', action: 'Measure', desc: 'Distill inference margins, synthetic COGS, and R&D opex/capex capitalization.', color: 'cyan', icon: '📊' },
    { slug: 'product', name: 'Product', action: 'Decide', desc: 'Govern features, manage product debt indices, and prevent margin collapse.', color: 'emerald', icon: '🎯' },
    { slug: 'engineering', name: 'Engineering', action: 'Build', desc: 'Mitigate vibe coding, calculate technical insolvency dates, and scale platforms.', color: 'purple', icon: '⚙️' },
    { slug: 'security', name: 'Security', action: 'Protect', desc: 'Secure agent execution boundaries, implement kill switches, and block shadow AI.', color: 'amber', icon: '🛡️' },
    { slug: 'operations', name: 'Operations', action: 'Operate', desc: 'Evaluate cloud TCO, repatriate workloads, and run token usage simulations.', color: 'rose', icon: '🔄' },
];

export default function FrameworkLandingPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto">
                
                {/* Section Header */}
                <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Operations</span><span>/</span><span className="text-cyan-900 font-extrabold">The Framework</span>
                </div>

                {/* Hero Thesis Section */}
                <section className="mb-16 border-b border-zinc-400 pb-16">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6 leading-tight">
                        Organizations are deploying AI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">faster than they can govern it.</span>
                    </h1>
                    <p className="text-xl text-zinc-900 leading-relaxed font-semibold mb-8 max-w-3xl">
                        My research focuses on the economic, engineering, operational, and security systems required to keep AI sustainable after deployment.
                    </p>
                    <div className="inline-block border-l-4 border-indigo-600 bg-indigo-50/50 p-6 rounded-r-xl">
                        <span className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider block mb-2">Axiomatic Model</span>
                        <h2 className="text-2xl font-bold font-grotesk text-zinc-950">The Production AI Governance Framework</h2>
                    </div>
                </section>

                {/* Why This Exists Section */}
                <section className="mb-20 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-4">Why This Exists</h3>
                    <div className="text-zinc-900 leading-relaxed space-y-4 font-semibold text-sm sm:text-base">
                        <p>Most AI discussions focus on model capabilities. My work focuses on what happens after deployment.</p>
                        <p>As AI systems become embedded in products, organizations face a new class of problems involving economics, governance, security, reliability, and operational control.</p>
                        <p>The Production AI Governance Framework exists to help organizations understand, measure, and manage those challenges.</p>
                    </div>
                </section>

                {/* Master Action Diagram (Converging on Runtime Governance) */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold font-grotesk text-zinc-950">The Convergence Model</h3>
                        <p className="text-sm text-zinc-900 mt-1 max-w-md mx-auto">Five operational disciplines converging into a single runtime enforcement layer.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        {/* 5 Input Pillars Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
                            {pillars.map(p => (
                                <Link key={p.slug} href={`/framework/${p.slug}`} className="group block">
                                    <div className="bg-white border border-zinc-300 p-5 rounded-2xl text-center flex flex-col items-center h-full hover:border-indigo-500 transition-colors shadow-sm relative">
                                        <div className="text-2xl mb-2">{p.icon}</div>
                                        <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider">{p.action}</span>
                                        <h4 className="font-bold text-zinc-950 mt-1 text-sm group-hover:text-indigo-900 transition-colors">{p.name}</h4>
                                        <p className="text-[11px] text-zinc-900 font-semibold mt-2 leading-relaxed flex-grow">{p.desc}</p>
                                        <span className="text-[10px] font-mono font-bold text-indigo-900 mt-3 block opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Convergence Paths */}
                        <div className="w-full max-w-md flex flex-col items-center my-6">
                            <div className="w-full h-px bg-zinc-300 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] flex justify-between">
                                    <div className="w-px h-6 bg-zinc-300" />
                                    <div className="w-px h-6 bg-zinc-300" />
                                    <div className="w-px h-6 bg-zinc-300" />
                                    <div className="w-px h-6 bg-zinc-300" />
                                    <div className="w-px h-6 bg-zinc-300" />
                                </div>
                            </div>
                            <div className="h-8 w-px bg-zinc-300 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
                            </div>
                        </div>

                        {/* Convergence Node: Runtime Governance */}
                        <Link href="/framework/runtime-governance" className="w-full max-w-sm group">
                            <div className="p-6 rounded-2xl border-2 border-indigo-400 bg-indigo-50/50 hover:border-indigo-600 transition-colors text-center relative shadow-md">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity" />
                                <div className="text-3xl mb-2">🛡️</div>
                                <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-widest block mb-1">THE CONVERGENCE POINT (ENFORCE)</span>
                                <h4 className="text-lg font-bold text-zinc-950 group-hover:text-indigo-950 transition-colors">Runtime Governance</h4>
                                <p className="text-xs text-zinc-900 font-semibold mt-2 leading-relaxed">
                                    Deterministic boundary execution. This is where frameworks convert to runtime physical control. (Exogram Platform)
                                </p>
                                <span className="text-[10px] font-mono font-bold text-indigo-900 mt-4 block">Deploy Controls &rarr;</span>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Ecosystem Map Section */}
                <section className="mb-20 border-t border-zinc-300 pt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold font-grotesk text-zinc-950">Integration Mesh</h3>
                        <p className="text-sm text-zinc-900 mt-1">Explore how research, diagnostics, academy courses, and software controls interact.</p>
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
                                    'name': 'What is the Production AI Governance Framework?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'It is a 6-pillar operational system coordinating Economics, Product, Engineering, Security, Operations, and Runtime Governance. It is designed to prevent cost spiral, code volatility, security gaps, and compliance failures in deployed AI systems.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    'name': 'What is the main objective of Runtime Governance?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'Runtime Governance is the final convergence point. It implements deterministic network-layer interception (using Exogram) to enforce cost ceilings, security rules, and action admissibility policies before model execution.'
                                    }
                                }
                            ]
                        }) }}
                    />
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <FAQItem
                            question="What is the Production AI Governance Framework?"
                            answer="It is a 6-pillar operational system coordinating Economics, Product, Engineering, Security, Operations, and Runtime Governance. It is designed to prevent cost spiral, code volatility, security gaps, and compliance failures in deployed AI systems."
                        />
                        <FAQItem
                            question="What is the main objective of Runtime Governance?"
                            answer="Runtime Governance is the final convergence point. It implements deterministic network-layer interception (using Exogram) to enforce cost ceilings, security rules, and action admissibility policies before model execution."
                        />
                    </div>
                </section>

                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
