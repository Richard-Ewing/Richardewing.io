"use client";

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

export default function AdvisoryPage() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div className="min-h-screen pb-24">

            {/* Header */}
            <section className="pt-12 pb-12 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Intervention Protocols</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                    I don't do "consulting." These are surgical interventions.
                </p>
                <div className="inline-block py-2 px-4 rounded-full bg-[var(--bg-secondary)] border border-white/10 text-sm font-mono text-[var(--accent-purple)]">
                    Q2 2026 AVAILABILITY: 4 diagnostic slots • 2 audit slots remaining
                </div>
            </section>

            {/* Pricing Grid */}
            <section ref={ref} className={`px-6 max-w-7xl mx-auto mb-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Free Tier */}
                    <PricingCard
                        title="FREE"
                        price="$0"
                        description="Perfect for: Learning the framework"
                        features={[
                            "Newsletter",
                            "5 Free Tools",
                            "R&D Audit Checklist"
                        ]}
                        ctaText="SUBSCRIBE"
                        ctaHref="#newsletter"
                        variant="neutral"
                    />

                    {/* Start Here - Featured */}
                    <PricingCard
                        title="★ START HERE"
                        price="$2,500"
                        subtitle="INSOLVENCY DIAGNOSTIC"
                        description="✓ 60-min deep dive\n✓ Risk Report\n✓ $50K guarantee"
                        features={[
                            "Confidential Review",
                            "Metric Analysis",
                            "Immediate Savings"
                        ]}
                        ctaText="BOOK NOW"
                        ctaHref="https://buy.stripe.com/placeholder"
                        variant="featured"
                    />

                    {/* Professional */}
                    <PricingCard
                        title="PROFESSIONAL"
                        price="$7,500"
                        subtitle="R&D CAPITAL AUDIT"
                        description="✓ Full 2-3 week review\n✓ Stakeholder interviews\n✓ Board-ready deliverable"
                        features={[
                            "Full Access Review",
                            "Detailed Roadmap",
                            "Executive Presentation"
                        ]}
                        ctaText="BOOK AUDIT"
                        ctaHref="https://cal.com/richardewing/audit-intro"
                        variant="neutral"
                    />

                </div>
            </section>

            {/* Add-ons Grid */}
            <section className="px-6 max-w-5xl mx-auto mb-24">
                <h3 className="text-xl font-bold mb-8 text-center text-gray-500 uppercase tracking-widest">Enterprise & Add-ons</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AddOnCard
                        title="GUT-CHECK CALL"
                        price="$450"
                        desc="30-min rapid assessment. Is it on fire? Yes/No."
                        cta="BOOK →"
                    />
                    <AddOnCard
                        title="AI COST GOVERNANCE"
                        price="$5,000"
                        desc="Dedicated AI economics review. Find collapse points."
                        cta="BOOK →"
                    />
                    <AddOnCard
                        title="OVERSIGHT RETAINER"
                        price="$5,000/month"
                        desc="Monthly board-level economic sanity checks."
                        cta="START RETAINER →"
                    />
                    <AddOnCard
                        title="TURNAROUND"
                        price="$40,000+"
                        desc="Full organizational intervention. Custom scope."
                        cta="INQUIRE →"
                    />
                </div>
            </section>

            {/* Board & Fractional */}
            <section className="px-6 max-w-4xl mx-auto mb-24">
                <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-white/10 text-center">
                    <h3 className="text-2xl font-bold mb-4">Board & Fractional Leadership</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        For Series B+ companies requiring sustained intervention.
                        I serve as a Fractional CPO or Independent Board Director.
                    </p>
                    <p className="text-[var(--accent-purple)] mb-8 font-mono text-sm">
                        Currently accepting: 1 slot available for Q2 2026
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="mailto:richard@richardewing.io" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
                            Inquire about Board Roles →
                        </Link>
                        <Link href="/manifesto" className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 text-gray-300 transition-colors">
                            Read Operating Principles →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="px-6 max-w-3xl mx-auto text-center">
                <div className="p-1 rounded-2xl bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-crimson)]">
                    <div className="bg-[var(--bg-primary)] rounded-xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold mb-6">The $50,000 Guarantee</h3>
                        <p className="text-lg text-gray-300 mb-6">
                            Every Insolvency Diagnostic I've conducted has surfaced at least <strong className="text-white">$50,000</strong> in hidden capital risk or misallocation.
                        </p>
                        <p className="text-lg text-gray-300 mb-6">
                            If yours doesn't, I'll refund the full <strong className="text-white">$2,500</strong>.
                        </p>
                        <p className="text-[var(--accent-cyan)] font-bold">
                            In 12 audits, I've never had to.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}

const PricingCard = ({ title, price, subtitle, description, features, ctaText, ctaHref, variant }: any) => { // Using any for quick proto, usually interface
    const isFeatured = variant === 'featured';
    return (
        <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300
        ${isFeatured
                ? 'bg-[var(--glass-bg)] border-[var(--accent-purple)] shadow-[0_0_30px_rgba(168,85,247,0.15)] transform md:-translate-y-4'
                : 'bg-[var(--bg-primary)] border-white/10'
            }
    `}>
            {isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent-purple)] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest shadow-lg">
                    MOST POPULAR
                </div>
            )}

            <div className="mb-6 text-center">
                <h3 className={`font-bold mb-2 ${isFeatured ? 'text-[var(--accent-purple)]' : 'text-gray-400'}`}>{title}</h3>
                <div className="text-4xl font-bold text-white mb-2">{price}</div>
                {subtitle && <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{subtitle}</div>}
            </div>

            <div className="mb-8 space-y-4 min-h-[100px] whitespace-pre-line text-center text-gray-300">
                {description}
            </div>

            <div className="space-y-3 mb-8 border-t border-white/10 pt-8 flex-grow">
                {features.map((f: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="text-[var(--accent-cyan)] font-bold">✓</span>
                        {f}
                    </div>
                ))}
            </div>

            <Link
                href={ctaHref}
                className={`block w-full py-3 rounded-lg font-bold text-center transition-all
                ${isFeatured
                        ? 'bg-[var(--accent-purple)] text-white hover:bg-[var(--accent-purple)]/90 shadow-lg'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }
            `}
            >
                {ctaText}
            </Link>
        </div>
    );
}

const AddOnCard = ({ title, price, desc, cta }: any) => (
    <div className="p-6 rounded-xl bg-[var(--glass-bg)] border border-white/10 hover:border-white/20 transition-all flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="flex-grow">
            <h4 className="font-bold text-white text-lg">{title}</h4>
            <div className="text-[var(--accent-cyan)] font-mono mb-2">{price}</div>
            <p className="text-sm text-gray-400">{desc}</p>
        </div>
        <button className="px-4 py-2 rounded border border-white/20 hover:bg-white/5 text-sm font-bold whitespace-nowrap">
            {cta}
        </button>
    </div>
);
