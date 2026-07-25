import React from 'react';
import type { Metadata } from 'next';
import BlurIn from '@/components/magicui/blur-in';
import ShineBorder from '@/components/magicui/shine-border';
import { BorderBeam } from '@/components/magicui/border-beam';
import Link from 'next/link';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import { COMMERCIAL_OFFERS } from '@/lib/platform/offers/offers';

export const metadata: Metadata = {
    title: 'AI Advisory Services & Packages | Richard Ewing',
    description: 'Fixed-scope diagnostic instruments, R&D capital audits, and fractional executive retainers for enterprise AI governance and unit economics control.',
    alternates: { canonical: 'https://www.richardewing.io/advisory' },
    openGraph: {
        title: 'AI Advisory Services & Packages | Richard Ewing',
        description: 'Fixed-scope diagnostic instruments, R&D capital audits, and fractional executive retainers for enterprise AI governance.',
        url: 'https://www.richardewing.io/advisory',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Advisory Services & Packages | Richard Ewing',
        description: 'Fixed-scope diagnostic instruments, R&D capital audits, and fractional executive retainers for enterprise AI governance.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function AdvisoryPage() {
    return (
        <main className="pt-20">
            <div className="page-container relative">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.05] pointer-events-none" />

                <section className="section-lg text-center relative z-10">
                    <div className="text-xs font-mono text-purple-900 font-extrabold uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded bg-purple-500 animate-pulse"></span>
                        AI Consulting & Implementation Strategy
                    </div>
                    <BlurIn word="Eliminate AI Billing Shock & Shadow AI Risks." className="text-5xl md:text-7xl font-bold font-grotesk tracking-tighter text-zinc-950 mb-6" />
                    <p className="text-zinc-950 font-bold text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
                        I do not sell $50,000 PowerPoint decks. I deploy specialized engineering taskforces to guarantee Strict Cost Caps, install Audit-Ready Governance, and ensure Zero Shadow AI liabilities.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold text-zinc-800 uppercase tracking-widest mt-8">
                        <span className="px-3 py-1 bg-zinc-200/80 rounded border border-zinc-300">100% Fixed Scope</span>
                        <span className="px-3 py-1 bg-zinc-200/80 rounded border border-zinc-300">Written Deliverables</span>
                        <span className="px-3 py-1 bg-zinc-200/80 rounded border border-zinc-300">Deterministic Controls</span>
                    </div>
                </section>

                {/* Staged Engagement Tiers */}
                <section className="py-12 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 mb-4">
                            The Engagement Progression
                        </h2>
                        <p className="text-zinc-800 font-semibold leading-relaxed">
                            Every relationship starts with a diagnostic. We quantify the problem before committing to ongoing advisory.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Tier 1: $450 Gut-Check */}
                        <div className="bg-white border border-zinc-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <div className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-2">Stage 01</div>
                                <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-2">Rapid Gut-Check</h3>
                                <div className="text-2xl font-mono font-bold text-zinc-950 mb-4">${COMMERCIAL_OFFERS.gut_check.price} <span className="text-xs text-zinc-500 font-normal">/ 30 min</span></div>
                                <p className="text-zinc-800 text-sm font-semibold mb-6">
                                    30-minute rapid-fire audit of your AI API bill, unit economics, and security posture. Immediate verdict.
                                </p>
                                <ul className="space-y-2 text-xs font-semibold text-zinc-800 mb-8">
                                    <li>✓ API & Cloud Bill Leak Scan</li>
                                    <li>✓ 1-on-1 Strategy Sync</li>
                                    <li>✓ Actionable Immediate Next Steps</li>
                                </ul>
                            </div>
                            <Link href="/services" className="w-full py-3 bg-zinc-950 text-white text-center font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors">
                                Book $450 Session
                            </Link>
                        </div>

                        {/* Tier 2: $2,500 Insolvency Diagnostic */}
                        <div className="bg-white border border-zinc-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <div className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-widest mb-2">Stage 02</div>
                                <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-2">Insolvency Audit</h3>
                                <div className="text-2xl font-mono font-bold text-zinc-950 mb-4">${COMMERCIAL_OFFERS.insolvency_diagnostic.price.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">/ 60 min</span></div>
                                <p className="text-zinc-800 text-sm font-semibold mb-6">
                                    60-minute deep-dive diagnostic with PDI calculation, AUEB benchmark, and written executive summary.
                                </p>
                                <ul className="space-y-2 text-xs font-semibold text-zinc-800 mb-8">
                                    <li>✓ Product Debt Index (PDI) Audit</li>
                                    <li>✓ Technical Insolvency Projection</li>
                                    <li>✓ Written Executive Deliverable</li>
                                </ul>
                            </div>
                            <Link href="/services" className="w-full py-3 bg-zinc-950 text-white text-center font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors">
                                Book $2,500 Audit
                            </Link>
                        </div>

                        {/* Tier 3: $7,500 Full R&D Capital Audit */}
                        <div className="bg-white border-2 border-purple-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative">
                            <span className="absolute -top-3 right-4 px-3 py-1 bg-purple-900 text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                                Deep Forensic
                            </span>
                            <div>
                                <div className="text-xs font-mono font-bold text-purple-900 uppercase tracking-widest mb-2">Stage 03</div>
                                <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-2">R&D Capital Audit</h3>
                                <div className="text-2xl font-mono font-bold text-zinc-950 mb-4">${COMMERCIAL_OFFERS.hallucination_audit.price.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">/ 3-week audit</span></div>
                                <p className="text-zinc-800 text-sm font-semibold mb-6">
                                    Full 3-week forensic analysis of engineering spend, codebase architecture, and model execution costs.
                                </p>
                                <ul className="space-y-2 text-xs font-semibold text-zinc-800 mb-8">
                                    <li>✓ Codebase & Architecture Audit</li>
                                    <li>✓ 40-Page Written Audit Package</li>
                                    <li>✓ Board-Ready Remediation Plan</li>
                                </ul>
                            </div>
                            <Link href="/services" className="w-full py-3 bg-purple-900 text-white text-center font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-purple-800 transition-colors">
                                Schedule Audit
                            </Link>
                        </div>

                        {/* Tier 4: $10,000/mo Advisory Retainer */}
                        <div className="bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                            <div>
                                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">Stage 04</div>
                                <h3 className="text-xl font-grotesk font-bold text-white mb-2">Advisory Retainer</h3>
                                <div className="text-2xl font-mono font-bold text-white mb-4">${COMMERCIAL_OFFERS.advisory_retainer.price.toLocaleString()} <span className="text-xs text-zinc-400 font-normal">/ month</span></div>
                                <p className="text-zinc-300 text-sm font-medium mb-6">
                                    Ongoing fractional technology direction, installing deterministic runtime controls and cost caps.
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-zinc-300 mb-8">
                                    <li>✓ Architectural Veto Power</li>
                                    <li>✓ CFO & Board Defense Syncs</li>
                                    <li>✓ Zero Shadow AI Governance</li>
                                </ul>
                            </div>
                            <a href="mailto:richardewing@exogram.ai?subject=Inquiry: Enterprise Retainer" className="w-full py-3 bg-white text-zinc-950 text-center font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors">
                                Inquire Availability
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
