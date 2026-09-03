import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ProofRail from '@/app/components/ProofRail';
import PricingLadderStepper from '@/app/components/PricingLadderStepper';
import DeliverablePreview from '@/app/components/DeliverablePreview';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import { COMMERCIAL_OFFERS } from '@/lib/platform/offers/offers';

export const metadata: Metadata = {
    title: 'Advisory & Diagnostic Pricing',
    description: 'Transparent fixed-fee pricing for AI Economics diagnostics, R&D capital audits, and fractional executive advisory.',
    alternates: {
        canonical: 'https://www.richardewing.io/pricing',
    },
    openGraph: {
        title: 'Advisory & Diagnostic Pricing | Richard Ewing',
        description: 'Transparent pricing for AI Economics diagnostics and R&D capital audits. Secure fixed scope deliverables and guarantee financial impact.',
        url: 'https://www.richardewing.io/pricing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Advisory & Diagnostic Pricing | Richard Ewing',
        description: 'Transparent pricing for AI Economics diagnostics and R&D capital audits. Secure fixed scope deliverables and guarantee financial impact.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-12 border-b border-zinc-300 pb-8">
                    <div className="text-xs font-mono font-bold text-violet-900 uppercase tracking-widest mb-3">
                        Commercial Terms & Engagement Models
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Transparent Diagnostic & Advisory Pricing
                    </h1>
                    <p className="text-xl text-zinc-800 leading-relaxed font-semibold max-w-2xl">
                        No open-ended billing. No bloated consulting teams. Fixed-scope diagnostic instruments and fractional executive direction.
                    </p>
                </div>

                {/* Proof Rail */}
                <div className="mb-12">
                    <ProofRail />
                </div>

                {/* Pricing Progression Ladder */}
                <PricingLadderStepper />

                {/* Deliverable Visual Preview */}
                <DeliverablePreview />

                {/* Pricing Tiers Grid / Progression */}
                <div className="space-y-12 my-12">

                    {/* Tier 1: $450 Gut-Check Evaluation */}
                    <div className="bg-amber-50/60 border border-amber-200 p-8 sm:p-12 shadow-sm rounded-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                                Entry Executive Sync
                            </span>
                            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                                30-Minute Rapid Diagnostic
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 border-b border-amber-200 pb-6">
                            <div>
                                <h2 className="text-3xl font-grotesk font-bold text-zinc-950 m-0">Rapid Gut-Check Evaluation</h2>
                                <p className="text-sm text-zinc-700 font-medium mt-1">AWS bills, model retries, and engineering velocity sanity check</p>
                            </div>
                            <div className="text-3xl font-mono font-bold text-zinc-950 mt-4 sm:mt-0 shrink-0">
                                ${COMMERCIAL_OFFERS.gut_check.price.toLocaleString()} <span className="text-sm text-zinc-600 font-medium">one-time</span>
                            </div>
                        </div>

                        <p className="font-semibold text-zinc-800 mb-6">
                            Not sure if your AI bills or engineering velocity are out of control? A rapid 30-minute 1-on-1 session to analyze AWS bills, API commitments, and unit economics.
                        </p>

                        <h3 className="text-base font-bold text-zinc-950 mb-3">What is included:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-zinc-800">
                            <li><strong>Immediate Cost Leak Identification:</strong> Pinpoint un-governed API retries and model over-provisioning.</li>
                            <li><strong>Cloud Commitment Sanity Check:</strong> Audit GPU reserved instances vs active inference load.</li>
                            <li><strong>Remediation Blueprint:</strong> Deliver 3 immediate actions to reduce monthly burn.</li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <CheckoutButton
                                productId="gut_check"
                                label={`Book $${COMMERCIAL_OFFERS.gut_check.price} Gut-Check`}
                                variant="primary"
                            />
                            <span className="text-xs text-zinc-600 font-mono font-medium">
                                Instant scheduling via Stripe
                            </span>
                        </div>
                    </div>

                    {/* Tier 2: $2,500 Insolvency Audit */}
                    <div className="bg-white border border-zinc-300 p-8 sm:p-12 shadow-sm rounded-2xl">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 border-b border-zinc-200 pb-6">
                            <div>
                                <h2 className="text-3xl font-grotesk font-bold text-zinc-950 m-0">60-Min Technical Insolvency Audit</h2>
                                <p className="text-sm text-zinc-600 font-medium mt-1">Deep-dive technical working session</p>
                            </div>
                            <div className="text-3xl font-mono font-bold text-zinc-950 mt-4 sm:mt-0 shrink-0">
                                ${COMMERCIAL_OFFERS.insolvency_diagnostic.price.toLocaleString()} <span className="text-sm text-zinc-500 font-medium">one-time</span>
                            </div>
                        </div>
                        
                        <p className="font-semibold text-zinc-800 mb-6">
                            For organizations experiencing sudden cloud cost spikes, declining engineering throughput, or unquantified technical debt.
                        </p>
                        
                        <h3 className="text-base font-bold text-zinc-950 mb-3">What happens:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-zinc-800">
                            <li>We run your architecture through the <strong>Product Debt Index (PDI)</strong> and the <strong>AI Unit Economics Benchmark (AUEB)</strong>.</li>
                            <li>We isolate features or models eroding gross margin.</li>
                            <li>We calculate your Technical Insolvency Date - where maintenance outpaces feature shipping.</li>
                            <li>I deliver a written executive brief and lead a 60-minute sync with leadership.</li>
                        </ul>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
                            <CheckoutButton
                                productId="insolvency_diagnostic"
                                label={`Book $${COMMERCIAL_OFFERS.insolvency_diagnostic.price} Audit`}
                                variant="primary"
                            />
                            <Link href="/services" className="text-xs text-zinc-700 font-mono font-bold underline hover:text-zinc-950">
                                Compare all services →
                            </Link>
                        </div>
                    </div>

                    {/* Tier 3: $10,000/mo Retainer */}
                    <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-xl rounded-2xl text-zinc-300">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 border-b border-zinc-800 pb-6">
                            <div>
                                <h2 className="text-3xl font-grotesk font-bold text-white m-0">Fractional Advisory Retainer</h2>
                                <p className="text-sm text-zinc-400 font-medium mt-1">Ongoing executive CPO/CTO leadership</p>
                            </div>
                            <div className="text-3xl font-mono font-bold text-zinc-100 mt-4 sm:mt-0 shrink-0">
                                ${COMMERCIAL_OFFERS.advisory_retainer.price.toLocaleString()} <span className="text-sm text-zinc-500 font-medium">/ month</span>
                            </div>
                        </div>
                        
                        <p className="font-semibold text-zinc-200 mb-6">
                            For Series B+ organizations and Private Equity portfolios that require ongoing structural repair. I integrate directly with your executive team to operationalize findings and prevent margin collapse.
                        </p>
                        
                        <h3 className="text-base font-bold text-white mb-3">What it includes:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-zinc-400">
                            <li><strong>Architectural Veto Power:</strong> Prevent long-term technical liabilities.</li>
                            <li><strong>Board Defense:</strong> Prepare board-ready engineering reports translating code into EBITDA.</li>
                            <li><strong>Vendor Extraction:</strong> Guide negotiations and transitions off hostile vendor lock-in.</li>
                            <li><strong>Direct Access:</strong> Dedicated syncs with CTO and CFO.</li>
                        </ul>

                        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-xs text-zinc-400 mb-8">
                            <strong>Constraint:</strong> Strictly capped to 4 active advisory clients per quarter.
                        </div>

                        <div>
                            <a href="mailto:richardewing@exogram.ai?subject=Fractional%20Advisory%20Inquiry" className="inline-block px-8 py-4 bg-white text-zinc-950 font-bold font-mono text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors">
                                Inquire About Availability
                            </a>
                        </div>
                    </div>

                </div>

                {/* Commercial Governance & Legal Terms Notice */}
                <div className="mt-12 p-6 rounded-2xl bg-white border border-zinc-300 text-center text-xs text-zinc-700 font-mono shadow-sm">
                    <span className="font-bold text-zinc-950">Commercial Governance Notice: </span>
                    <span>All advisory bookings, audits, and digital vault licenses are governed by our </span>
                    <Link href="/legal#terms" className="underline font-bold text-zinc-950 hover:text-cyan-900">Terms of Use (TOC)</Link>
                    <span>, </span>
                    <Link href="/legal#advisory" className="underline font-bold text-zinc-950 hover:text-cyan-900">Advisory Scope</Link>
                    <span>, and </span>
                    <Link href="/legal#refunds" className="underline font-bold text-zinc-950 hover:text-cyan-900">Digital Refund Policy</Link>
                    <span>. Richard Ewing &bull; Registered Washington State LLC.</span>
                </div>

            </div>
        </main>
    );
}
