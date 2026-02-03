"use client";

import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import Link from 'next/link';

const PricingPreview = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className={`py-24 px-6 bg-[var(--bg-secondary)] border-y border-white/5 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Intervention Protocols</h2>
                    <p className="text-gray-400">Surgical interventions for engineering organizations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <PricingCard
                        title="FREE"
                        price="$0"
                        features={["Newsletter", "5 Free Tools", "R&D Checklist"]}
                        cta="Subscribe Free"
                        href="#newsletter"
                    />

                    <PricingCard
                        title="★ START HERE"
                        price="$2,500"
                        sub="Insolvency Diagnostic"
                        features={["60-min deep dive", "Risk Report", "$50K Guarantee"]}
                        cta="Book Diagnostic"
                        href="/advisory"
                        highlight
                    />

                    <PricingCard
                        title="AUDIT"
                        price="$7,500"
                        sub="R&D Capital Audit"
                        features={["Full 2-3 week review", "Stakeholder interviews", "Board-ready report"]}
                        cta="Book Audit"
                        href="/advisory"
                    />

                    <PricingCard
                        title="ENTERPRISE"
                        price="$5K+"
                        sub="Retainer / Turnaround"
                        features={["Monthly oversight", "Board seat", "Full intervention"]}
                        cta="Inquire"
                        href="/advisory"
                    />

                </div>

                <div className="mt-12 text-center">
                    <Link href="/advisory" className="text-gray-400 hover:text-white underline underline-offset-4 decoration-[var(--accent-purple)]">
                        See detailed pricing, add-ons, and guarantees →
                    </Link>
                </div>

            </div>
        </section>
    );
};

const PricingCard = ({ title, price, sub, features, cta, href, highlight = false }: { title: string, price: string, sub?: string, features: string[], cta: string, href: string, highlight?: boolean }) => {
    return (
        <div className={`p-8 rounded-2xl flex flex-col border ${highlight ? 'bg-[var(--glass-bg)] border-[var(--accent-gold)] shadow-[0_0_20px_rgba(255,215,0,0.1)]' : 'bg-[var(--bg-primary)] border-white/10'}`}>
            <h3 className={`font-bold mb-2 ${highlight ? 'text-[var(--accent-gold)]' : 'text-gray-400'}`}>{title}</h3>
            <div className="text-3xl font-bold text-white mb-1">{price}</div>
            {sub && <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider">{sub}</div>}

            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-[var(--accent-cyan)]">✓</span> {feature}
                    </li>
                ))}
            </ul>

            <Link
                href={href}
                className={`w-full py-3 rounded-lg font-semibold text-center transition-colors 
                    ${highlight
                        ? 'bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
            >
                {cta}
            </Link>
        </div>
    );
}

export default PricingPreview;
