import React from 'react';
import type { Metadata } from 'next';
import ProofRail from '@/app/components/ProofRail';
import { COMMERCIAL_OFFERS } from '@/lib/platform/offers/offers';

export const metadata: Metadata = {
    title: 'Advisory & Diagnostic Pricing | Richard Ewing',
    description: 'Transparent pricing for AI Economics diagnostics, R&D capital audits, and fractional executive retainers. Fixed scope, clear deliverables, guaranteed financial impact.',
    alternates: {
        canonical: 'https://www.richardewing.io/pricing',
    },
    openGraph: {
        title: 'Advisory & Diagnostic Pricing | Richard Ewing',
        description: 'Transparent pricing for AI Economics diagnostics, R&D capital audits, and fractional executive retainers.',
        url: 'https://www.richardewing.io/pricing',
        type: 'website',
    },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-12 border-b border-zinc-300 pb-8">
                    <div className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-3">
                        Commercial Terms
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Pricing & Engagement Models
                    </h1>
                    <p className="text-xl text-zinc-800 leading-relaxed font-semibold max-w-2xl">
                        No open-ended billing. No bloated consulting teams. I deliver fixed-scope diagnostic instruments and fractional executive direction.
                    </p>
                </div>

                <div className="mb-16">
                    <ProofRail />
                </div>

                {/* Pricing Tiers */}
                <div className="prose prose-lg max-w-none text-zinc-900 leading-relaxed">
                    
                    <div className="my-12 bg-white border border-zinc-300 p-8 sm:p-12 shadow-sm rounded-xl">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 border-b border-zinc-200 pb-6">
                            <h2 className="text-3xl font-grotesk font-bold text-zinc-950 m-0">The 60-Min Insolvency Audit</h2>
                            <div className="text-3xl font-mono font-bold text-zinc-950 mt-2 sm:mt-0">${COMMERCIAL_OFFERS.insolvency_diagnostic.price.toLocaleString()} <span className="text-lg text-zinc-500 font-medium">one-time</span></div>
                        </div>
                        
                        <p className="font-semibold">
                            For organizations experiencing sudden cloud cost spikes, declining engineering throughput, or unquantified technical debt. A rapid-fire, intensive diagnostic designed to pinpoint structural capital leaks.
                        </p>
                        
                        <h3 className="mt-8 mb-4">What happens:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8">
                            <li>We run your current architecture through the <strong>Product Debt Index (PDI)</strong> and the <strong>AI Unit Economics Benchmark (AUEB)</strong>.</li>
                            <li>We isolate the specific features, models, or legacy systems that are eroding your gross margin.</li>
                            <li>We calculate your Technical Insolvency Date—the quarter where maintenance costs will outpace your ability to ship new features.</li>
                            <li>I deliver a written executive brief and lead a 60-minute presentation with your leadership team.</li>
                        </ul>

                        <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-lg text-sm">
                            <strong>The Outcome:</strong> You walk away with absolute financial clarity. You will know exactly which engineering initiatives are generating value and which are quietly destroying capital.
                        </div>

                        <div className="mt-8">
                            <a href="/services" className="inline-block px-8 py-4 bg-zinc-950 text-white font-bold font-mono text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                                Book The Diagnostic
                            </a>
                        </div>
                    </div>

                    <div className="my-16 bg-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-xl rounded-xl text-zinc-300">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 border-b border-zinc-800 pb-6">
                            <h2 className="text-3xl font-grotesk font-bold text-white m-0">Fractional Advisory Retainer</h2>
                            <div className="text-3xl font-mono font-bold text-zinc-100 mt-2 sm:mt-0">${COMMERCIAL_OFFERS.advisory_retainer.price.toLocaleString()} <span className="text-lg text-zinc-500 font-medium">/ month</span></div>
                        </div>
                        
                        <p className="font-semibold">
                            For Series B+ organizations and Private Equity portfolios that require ongoing structural repair. I integrate directly with your executive team to operationalize the findings of the Diagnostic and prevent margin collapse at scale.
                        </p>
                        
                        <h3 className="mt-8 mb-4 text-white">What it includes:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8 text-zinc-400">
                            <li><strong>Architectural Veto Power:</strong> I review major technical decisions to prevent catastrophic long-term technical debt.</li>
                            <li><strong>Board Defense:</strong> I prepare the engineering reporting for your board, translating technical progress into financial outcomes.</li>
                            <li><strong>Vendor Extraction:</strong> I guide the negotiations and architectural transitions required to exit hostile cloud or AI vendor lock-in.</li>
                            <li><strong>Direct Access:</strong> Dedicated asynchronous channels and weekly syncs with your CTO and CFO.</li>
                        </ul>

                        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg text-sm text-zinc-400">
                            <strong>The Constraint:</strong> I strictly cap my advisory engagements to 4 active clients per quarter. This ensures I can provide the deep, structural attention required to actually fix the architecture.
                        </div>

                        <div className="mt-8">
                            <a href="mailto:richardewing@exogram.ai?subject=Fractional%20Advisory%20Inquiry" className="inline-block px-8 py-4 bg-white text-zinc-950 font-bold font-mono text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                                Inquire About Availability
                            </a>
                        </div>
                    </div>

                    <hr className="border-zinc-300 my-16" />

                    <div className="mb-16">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-8 border-b border-zinc-200 pb-4">Software & Curriculum Access</h2>
                        <p className="text-zinc-800 font-semibold mb-8">
                            For teams that want to execute the frameworks internally. Get immediate access to the <strong>Enterprise Vault</strong> — 218 technical modules, 18 curriculum tracks, and 4 proprietary diagnostic calculators.
                        </p>

                        <div className="bg-white border border-zinc-300 p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <div className="text-xl font-bold font-grotesk text-zinc-950">Enterprise Vault Subscription</div>
                                <div className="text-sm text-zinc-600 font-medium">Unlimited team access to curriculum, tools, and updates.</div>
                            </div>
                            <a href="/vault/join" className="px-6 py-3 bg-zinc-900 text-white font-bold font-mono text-xs uppercase tracking-widest rounded-lg hover:bg-zinc-800 transition-colors shrink-0">
                                Access Vault
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
