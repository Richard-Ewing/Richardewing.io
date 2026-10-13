import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ProofRail from '@/app/components/ProofRail';
import PricingLadderStepper from '@/app/components/PricingLadderStepper';
import DeliverablePreview from '@/app/components/DeliverablePreview';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import { COMMERCIAL_OFFERS } from '@/lib/platform/offers/offers';

export const metadata: Metadata = {
    title: 'Pricing: $29 Operating Kit, Product P&L Advisory & Fractional CPO',
    description: 'Transparent fixed-fee pricing: $29 AI Economist Operating Kit, $450 Product P&L Tear-Down, $2,500 Turnaround Sprint, Sponsored Research, and Fractional CPO.',
    alternates: {
        canonical: 'https://www.richardewing.io/pricing',
    },
    openGraph: {
        title: 'Pricing: Operating Kit, Product P&L Advisory & Fractional CPO | Richard Ewing',
        description: 'Transparent pricing from the $29 Product & AI Economist Operating Kit to 1-on-1 P&L Tear-Downs and Fractional CPO leadership.',
        url: 'https://www.richardewing.io/pricing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pricing: Operating Kit, Product P&L Advisory & Fractional CPO | Richard Ewing',
        description: 'Transparent pricing from the $29 Product & AI Economist Operating Kit to 1-on-1 P&L Tear-Downs and Fractional CPO leadership.',
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
                        Commercial Terms &amp; Engagement Models
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Transparent Product &amp; AI Economics Pricing
                    </h1>
                    <p className="text-xl text-zinc-800 leading-relaxed font-semibold max-w-2xl">
                        No open-ended hourly billing. No bloated consulting teams. Start with the self-serve <strong className="text-zinc-950">$29 Operating Kit</strong>, book a fixed-scope <strong className="text-zinc-950">Product P&amp;L Tear-Down</strong>, or inquire about <strong className="text-zinc-950">Fractional CPO &amp; Sponsored Research</strong>.
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
                <div className="space-y-10 my-12">

                    {/* Tier 0: $29 / $79 Operating Kit */}
                    <div className="bg-emerald-50/70 border-2 border-emerald-400 p-8 sm:p-10 shadow-md rounded-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-600 text-white">
                                Best Seller · Instant Digital Download
                            </span>
                            <span className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider">
                                Self-Serve Templates &amp; Playbooks
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 border-b border-emerald-200 pb-6">
                            <div>
                                <h2 className="text-3xl font-grotesk font-bold text-zinc-950 m-0">{COMMERCIAL_OFFERS.operating_kit.name}</h2>
                                <p className="text-sm text-zinc-700 font-medium mt-1">{COMMERCIAL_OFFERS.operating_kit.subtitle}</p>
                            </div>
                            <div className="text-3xl font-mono font-bold text-zinc-950 mt-4 sm:mt-0 shrink-0">
                                ${COMMERCIAL_OFFERS.operating_kit.price} <span className="text-sm text-zinc-600 font-medium">($79 w/ Team Vault)</span>
                            </div>
                        </div>

                        <p className="font-semibold text-zinc-800 mb-6">
                            {COMMERCIAL_OFFERS.operating_kit.description}
                        </p>

                        <h3 className="text-base font-bold text-zinc-950 mb-3">What you download immediately:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-zinc-800">
                            {COMMERCIAL_OFFERS.operating_kit.features.map((feat, i) => (
                                <li key={i}>{feat}</li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <CheckoutButton
                                productId="premium_guide_29"
                                label="Buy Operating Kit ($29)"
                                variant="primary"
                            />
                            <Link href="/toolkit" className="text-xs text-emerald-900 font-mono font-bold underline hover:text-zinc-950">
                                Try the live interactive preview first →
                            </Link>
                        </div>
                    </div>

                    {/* Tier 1: $450 Product P&L Tear-Down */}
                    <div className="bg-amber-50/60 border border-amber-200 p-8 sm:p-10 shadow-sm rounded-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                                Entry Executive Working Session
                            </span>
                            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                                60-Minute 1-on-1 Session
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 border-b border-amber-200 pb-6">
                            <div>
                                <h2 className="text-3xl font-grotesk font-bold text-zinc-950 m-0">{COMMERCIAL_OFFERS.gut_check.name}</h2>
                                <p className="text-sm text-zinc-700 font-medium mt-1">{COMMERCIAL_OFFERS.gut_check.subtitle}</p>
                            </div>
                            <div className="text-3xl font-mono font-bold text-zinc-950 mt-4 sm:mt-0 shrink-0">
                                ${COMMERCIAL_OFFERS.gut_check.price.toLocaleString()} <span className="text-sm text-zinc-600 font-medium">one-time</span>
                            </div>
                        </div>

                        <p className="font-semibold text-zinc-800 mb-6">
                            {COMMERCIAL_OFFERS.gut_check.description}
                        </p>

                        <h3 className="text-base font-bold text-zinc-950 mb-3">What is included:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-zinc-800">
                            {COMMERCIAL_OFFERS.gut_check.features.map((feat, i) => (
                                <li key={i}>{feat}</li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <CheckoutButton
                                productId="gut_check"
                                label={`Book $${COMMERCIAL_OFFERS.gut_check.price} P&L Tear-Down`}
                                variant="primary"
                            />
                            <span className="text-xs text-zinc-600 font-mono font-medium">
                                Instant checkout via Stripe · Includes full $79 Operating Kit
                            </span>
                        </div>
                    </div>

                    {/* Tier 2: $2,500 Product P&L & Roadmap Turnaround Sprint */}
                    <div className="bg-white border border-zinc-300 p-8 sm:p-10 shadow-sm rounded-2xl">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 border-b border-zinc-200 pb-6">
                            <div>
                                <h2 className="text-3xl font-grotesk font-bold text-zinc-950 m-0">{COMMERCIAL_OFFERS.insolvency_diagnostic.name}</h2>
                                <p className="text-sm text-zinc-600 font-medium mt-1">{COMMERCIAL_OFFERS.insolvency_diagnostic.subtitle}</p>
                            </div>
                            <div className="text-3xl font-mono font-bold text-zinc-950 mt-4 sm:mt-0 shrink-0">
                                ${COMMERCIAL_OFFERS.insolvency_diagnostic.price.toLocaleString()} <span className="text-sm text-zinc-500 font-medium">one-time</span>
                            </div>
                        </div>
                        
                        <p className="font-semibold text-zinc-800 mb-6">
                            {COMMERCIAL_OFFERS.insolvency_diagnostic.description}
                        </p>
                        
                        <h3 className="text-base font-bold text-zinc-950 mb-3">What happens:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-zinc-800">
                            {COMMERCIAL_OFFERS.insolvency_diagnostic.features.map((feat, i) => (
                                <li key={i}>{feat}</li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
                            <CheckoutButton
                                productId="insolvency_diagnostic"
                                label={`Book $${COMMERCIAL_OFFERS.insolvency_diagnostic.price.toLocaleString()} Turnaround Sprint`}
                                variant="primary"
                            />
                            <Link href="/services" className="text-xs text-zinc-700 font-mono font-bold underline hover:text-zinc-950">
                                Compare all services →
                            </Link>
                        </div>
                    </div>

                    {/* Tier 2.5: $2,500+ Sponsored Benchmark Research & $7,500 0-to-1 AI Build Sprint */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-zinc-300 p-7 rounded-2xl shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-violet-100 text-violet-900">
                                    B2B Media &amp; GTM Authority
                                </span>
                                <h3 className="text-2xl font-grotesk font-bold text-zinc-950 mt-3 mb-1">
                                    {COMMERCIAL_OFFERS.sponsored_research.name}
                                </h3>
                                <div className="text-2xl font-mono font-bold text-zinc-950 mb-4">
                                    ${COMMERCIAL_OFFERS.sponsored_research.price.toLocaleString()}+ <span className="text-xs text-zinc-500">per briefing</span>
                                </div>
                                <p className="text-xs text-zinc-700 font-medium leading-relaxed mb-4">
                                    {COMMERCIAL_OFFERS.sponsored_research.description}
                                </p>
                            </div>
                            <a
                                href={COMMERCIAL_OFFERS.sponsored_research.primaryCTA.href}
                                className="inline-block w-full py-3.5 bg-violet-600 hover:bg-violet-700 text-white text-center font-bold font-mono text-xs uppercase tracking-widest rounded-xl transition-colors"
                            >
                                Request Media Kit &amp; Scope
                            </a>
                        </div>

                        <div className="bg-white border border-zinc-300 p-7 rounded-2xl shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-rose-100 text-rose-900">
                                    21-Day Shipped AI Product
                                </span>
                                <h3 className="text-2xl font-grotesk font-bold text-zinc-950 mt-3 mb-1">
                                    {COMMERCIAL_OFFERS.hallucination_tax_audit.name}
                                </h3>
                                <div className="text-2xl font-mono font-bold text-zinc-950 mb-4">
                                    ${COMMERCIAL_OFFERS.hallucination_tax_audit.price.toLocaleString()} <span className="text-xs text-zinc-500">fixed sprint</span>
                                </div>
                                <p className="text-xs text-zinc-700 font-medium leading-relaxed mb-4">
                                    {COMMERCIAL_OFFERS.hallucination_tax_audit.description}
                                </p>
                            </div>
                            <CheckoutButton
                                productId="hallucination_tax_audit"
                                label="Start $7,500 AI Build Sprint"
                                variant="primary"
                            />
                        </div>
                    </div>

                    {/* Tier 3: $10,000/mo Fractional CPO Retainer */}
                    <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-xl rounded-2xl text-zinc-300">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 border-b border-zinc-800 pb-6">
                            <div>
                                <h2 className="text-3xl font-grotesk font-bold text-white m-0">{COMMERCIAL_OFFERS.advisory_retainer.name}</h2>
                                <p className="text-sm text-zinc-400 font-medium mt-1">{COMMERCIAL_OFFERS.advisory_retainer.subtitle}</p>
                            </div>
                            <div className="text-3xl font-mono font-bold text-zinc-100 mt-4 sm:mt-0 shrink-0">
                                ${COMMERCIAL_OFFERS.advisory_retainer.price.toLocaleString()} <span className="text-sm text-zinc-500 font-medium">/ month</span>
                            </div>
                        </div>
                        
                        <p className="font-semibold text-zinc-200 mb-6">
                            {COMMERCIAL_OFFERS.advisory_retainer.description}
                        </p>
                        
                        <h3 className="text-base font-bold text-white mb-3">What it includes:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-8 text-sm text-zinc-400">
                            {COMMERCIAL_OFFERS.advisory_retainer.features.map((feat, i) => (
                                <li key={i}>{feat}</li>
                            ))}
                        </ul>

                        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-xs text-zinc-400 mb-8">
                            <strong>Constraint:</strong> Strictly capped to 2 active Fractional CPO / Advisory clients per quarter. Also open to select full-time VP of Product / Chief Product Officer / Head of AI Product roles.
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a href="mailto:richardewing@exogram.ai?subject=Fractional%20CPO%20%2F%20Executive%20Inquiry" className="inline-block px-8 py-4 bg-amber-500 text-zinc-950 font-extrabold font-mono text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-colors">
                                Inquire About Availability
                            </a>
                            <Link href="/portfolio" className="inline-block px-8 py-4 bg-zinc-800 text-white font-bold font-mono text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-700 transition-colors">
                                View Executive Portfolio →
                            </Link>
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

