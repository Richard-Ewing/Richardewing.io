import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Clock, Zap, TrendingUp, DollarSign, Calculator, HelpCircle } from 'lucide-react';
import ProofRail from '@/app/components/ProofRail';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
    title: 'AI Advisory Services & Packages | Richard Ewing',
    description: 'R&D Capital Audits, Inference Cost Optimization Sprints, and Board Advisor packages starting from $7,500. View our services and packages.',
    alternates: {
        canonical: 'https://www.richardewing.io/services',
    },
    openGraph: {
        title: 'AI Advisory Services & Packages | Richard Ewing',
        description: 'Quantifiable, data-backed tech audits and Fractional CPO/CTO engagements with guaranteed cost ceilings.',
        url: 'https://www.richardewing.io/services',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Advisory Services & Packages | Richard Ewing',
        description: 'Quantifiable, data-backed tech audits and Fractional CPO/CTO engagements with guaranteed cost ceilings.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

const packages = [
    {
        name: "Gut-Check Evaluation",
        price: "$450",
        period: "one-time",
        badge: "Entry",
        description: "Not sure if you have a cost or engineering velocity problem? A 30-minute rapid-fire session to assess your status.",
        deliverables: [
            "30-min live review with Richard Ewing",
            "Rapid scan of AWS / API billing metrics",
            "Immediate verdict on whether your setup is at risk",
            "1 actionable cost-saving remediation recommendation"
        ],
        cta: "Schedule Gut-Check",
        productId: "gut_check",
        color: "amber",
        timeline: "Same week"
    },
    {
        name: "60-Min Insolvency Audit",
        price: "$2,500",
        period: "one-time",
        badge: "Diagnostic",
        description: "We review your Product Debt Index (PDI) results and locate the exact engineering or model cost leaks.",
        deliverables: [
            "60-min strategic consultation",
            "Codebase PDI results analysis",
            "Written Risk Exposure Report (Red/Yellow/Green flags)",
            "Step-by-step roadmap to reduce capital waste"
        ],
        cta: "Book Insolvency Audit",
        productId: "insolvency_diagnostic",
        color: "cyan",
        timeline: "2-3 weeks"
    },
    {
        name: "R&D Capital Audit",
        price: "$7,500",
        period: "one-time",
        badge: "Forensic Audit",
        description: "A comprehensive 3-week forensic review of R&D capital allocation, AI inference spend, and team productivity.",
        deliverables: [
            "Comprehensive codebase and architectural audit",
            "Detailed AI Unit Economics modeling",
            "Board-ready financial and operational deliverables",
            "90-day custom remediation and implementation roadmap"
        ],
        cta: "Request Capital Audit",
        productId: "hallucination_tax_audit", // maps to existing product ids
        color: "rose",
        timeline: "3 weeks",
        popular: true
    },
    {
        name: "Fractional CPO / CTO Retainer",
        price: "$10,000",
        period: "/month",
        badge: "Retainer",
        description: "Senior product & tech leadership with a strict, guaranteed cost ceiling. We build cost-caps directly into your systems.",
        deliverables: [
            "10-15 hours/week of dedicated advisory",
            "Implementation of strict API token caps",
            "Zero Shadow AI compliance auditing",
            "Board meeting representation and preparation"
        ],
        cta: "Discuss Retainer",
        href: "mailto:richard@richardewing.io?subject=Inquiry: Fractional CTO Retainer",
        color: "indigo",
        timeline: "6-12 months"
    }
];

const colorMap: Record<string, { bg: string; border: string; text: string; pill: string; btn: string }> = {
    amber: { bg: 'bg-amber-50/50', border: 'border-amber-200', text: 'text-amber-700', pill: 'bg-amber-100 text-amber-800', btn: 'bg-amber-600 hover:bg-amber-700 text-zinc-950 font-bold' },
    cyan: { bg: 'bg-cyan-50/50', border: 'border-cyan-200', text: 'text-cyan-700', pill: 'bg-cyan-100 text-cyan-800', btn: 'bg-cyan-600 hover:bg-cyan-700 text-zinc-950 font-bold' },
    rose: { bg: 'bg-rose-50/50', border: 'border-rose-200', text: 'text-rose-700', pill: 'bg-rose-100 text-rose-800', btn: 'bg-rose-600 hover:bg-rose-700 text-zinc-950 font-bold' },
    indigo: { bg: 'bg-indigo-50/50', border: 'border-indigo-200', text: 'text-indigo-700', pill: 'bg-indigo-100 text-indigo-800', btn: 'bg-indigo-600 hover:bg-indigo-700 text-white font-bold' }
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-6xl mx-auto">
                
                {/* Breadcrumb */}
                <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Advisory</span><span>/</span><span className="text-cyan-900 font-extrabold">Services & Packages</span>
                </div>

                {/* Hero Header */}
                <section className="mb-16 border-b border-zinc-400 pb-16 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6 tracking-tight leading-none">
                        Advisory Services Built for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">Financial Predictability.</span>
                    </h1>
                    <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-3xl">
                        I do not write academic reports or sell slide decks. I deploy forensic evaluations to stop shadow AI cash bleed, eliminate token cost inflation, and install verified runtime cost-caps.
                    </p>
                </section>

                {/* Packages Grid */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-8 text-center sm:text-left">Engagement Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {packages.map((pkg, idx) => {
                            const c = colorMap[pkg.color];
                            return (
                                <div 
                                    key={idx} 
                                    className={`relative rounded-3xl border ${pkg.popular ? 'border-2 border-indigo-500 md:scale-[1.03] bg-gradient-to-br from-indigo-50/40 via-white to-white shadow-xl shadow-indigo-500/15' : 'border-zinc-300 bg-white'} p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300`}
                                >
                                    {pkg.popular && (
                                        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-indigo-600 text-white">
                                            Most Popular
                                        </span>
                                    )}

                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest ${c.pill}`}>
                                                {pkg.badge}
                                            </span>
                                            <span className="text-xs text-zinc-500 font-bold font-mono">
                                                Timeline: {pkg.timeline}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-zinc-950 mb-2 font-grotesk">{pkg.name}</h3>
                                        <p className="text-sm text-zinc-600 font-semibold mb-6">{pkg.description}</p>

                                        <div className="mb-6 flex items-baseline gap-1">
                                            <span className="text-4xl font-extrabold text-zinc-950 font-grotesk">{pkg.price}</span>
                                            <span className="text-xs text-zinc-500 font-bold font-mono">{pkg.period}</span>
                                        </div>

                                        <div className="border-t border-zinc-200 pt-6 mb-8">
                                            <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-widest mb-4">What's Included:</h4>
                                            <ul className="space-y-3">
                                                {pkg.deliverables.map((del, dIdx) => (
                                                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-900 font-semibold">
                                                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                        <span>{del}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        {pkg.productId ? (
                                            <CheckoutButton 
                                                productId={pkg.productId} 
                                                label={`${pkg.cta} →`} 
                                                variant={pkg.popular ? "primary" : "ghost"}
                                                icon="none"
                                            />
                                        ) : (
                                            <a 
                                                href={pkg.href} 
                                                className={`flex items-center justify-center w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${c.btn}`}
                                            >
                                                {pkg.cta} →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Timeline / Process Section */}
                <section className="mb-20 bg-white border border-zinc-300 rounded-3xl p-8 md:p-12 shadow-sm">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-10 text-center">Our Engagement Protocol</h2>
                    
                    {/* SVG Connector Flowchart Layout */}
                    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-4 relative">
                        {/* Step 1 */}
                        <div className="flex-1 text-center flex flex-col items-center bg-zinc-50 p-6 rounded-2xl border border-zinc-200 shadow-sm relative">
                            <div className="w-12 h-12 bg-indigo-600 border border-indigo-400 rounded-full flex items-center justify-center mb-4 font-mono font-bold text-white text-lg shadow-sm">1</div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">15-Min Discovery</h3>
                            <p className="text-xs text-zinc-600 leading-relaxed font-semibold max-w-xs">We hold a brief diagnostic call to align on your current engineering bottlenecks, billing patterns, and code velocity.</p>
                        </div>

                        {/* Connection Arrow 1 */}
                        <div className="hidden lg:flex items-center justify-center text-zinc-400">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>

                        {/* Step 2 */}
                        <div className="flex-1 text-center flex flex-col items-center bg-zinc-50 p-6 rounded-2xl border border-zinc-200 shadow-sm relative">
                            <div className="w-12 h-12 bg-indigo-600 border border-indigo-400 rounded-full flex items-center justify-center mb-4 font-mono font-bold text-white text-lg shadow-sm">2</div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">Forensic Diagnostic</h3>
                            <p className="text-xs text-zinc-600 leading-relaxed font-semibold max-w-xs">We audit the code using the Product Debt Index (PDI) framework, exposing zombie assets, leakages, and cost collapse thresholds.</p>
                        </div>

                        {/* Connection Arrow 2 */}
                        <div className="hidden lg:flex items-center justify-center text-zinc-400">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>

                        {/* Step 3 */}
                        <div className="flex-1 text-center flex flex-col items-center bg-zinc-50 p-6 rounded-2xl border border-zinc-200 shadow-sm relative">
                            <div className="w-12 h-12 bg-indigo-600 border border-indigo-400 rounded-full flex items-center justify-center mb-4 font-mono font-bold text-white text-lg shadow-sm">3</div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">Remediation Delivery</h3>
                            <p className="text-xs text-zinc-600 leading-relaxed font-semibold max-w-xs">We present a board-ready report and deploy deterministic cost-caps at the network layer to secure your unit margins permanently.</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-8 text-center">Client Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-sm">
                            <p className="text-sm text-zinc-800 leading-relaxed italic mb-6 font-medium">
                                "Richard's audit revealed that 43% of our engineering sprints were being spent maintaining deprecated AI integrations that we thought were core features. The remediation plan saved us over $180,000 in monthly OpEx within 45 days."
                            </p>
                            <div>
                                <h4 className="text-sm font-bold text-zinc-950 font-grotesk">Principal Operating Partner</h4>
                                <p className="text-xs text-zinc-500 font-bold font-mono">PE-Backed B2B SaaS Portfolio</p>
                            </div>
                        </div>
                        <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-sm">
                            <p className="text-sm text-zinc-800 leading-relaxed italic mb-6 font-medium">
                                "The inference cost Optimization sprint capped our API billing volatility before our product scaled to 50k users. We avoided a margin collapse that would have crushed our Series A metrics."
                            </p>
                            <div>
                                <h4 className="text-sm font-bold text-zinc-950 font-grotesk">VP of Engineering</h4>
                                <p className="text-xs text-zinc-500 font-bold font-mono">AI-First Legaltech SaaS</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="border-t border-zinc-300 pt-16">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            'mainEntity': [
                                {
                                    '@type': 'Question',
                                    'name': 'How much does a fractional CPO cost?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'Fractional CPO / CTO retainer packages are $10,000/month. This provides hands-on technology direction, cost-cap architecture setup, and monthly board-level reporting.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    'name': 'What is the difference between a Diagnostic and a full Audit?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'A Diagnostic ($2,500) evaluates code and identifies leaks over a 60-minute session. A full R&D Capital Audit ($7,500) is a 3-week engagement that includes comprehensive financial modeling, team productivity audits, and a 90-day custom remediation plan.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    'name': 'Who qualifies for the $450 Gut-Check Session?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'The Gut-Check Session is designed for founders, CTOs, and PE operating partners who need a rapid, objective evaluation of their current AI cost and velocity exposure without committing to a larger audit.'
                                    }
                                }
                            ]
                        }) }}
                    />
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-8 text-center sm:text-left">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-4xl">
                        <FAQItem 
                            question="How much does a fractional CPO / CTO cost?" 
                            answer="Fractional CPO / CTO retainer packages are $10,000/month. This provides hands-on technology direction, cost-cap architecture setup, and monthly board-level reporting."
                        />
                        <FAQItem 
                            question="What is the difference between a Diagnostic and a full Audit?" 
                            answer="A Diagnostic ($2,500) evaluates code and identifies leaks over a 60-minute session. A full R&D Capital Audit ($7,500) is a 3-week engagement that includes comprehensive financial modeling, team productivity audits, and a 90-day custom remediation plan."
                        />
                        <FAQItem 
                            question="Who qualifies for the $450 Gut-Check Session?" 
                            answer="The Gut-Check Session is designed for founders, CTOs, and PE operating partners who need a rapid, objective evaluation of their current AI cost and velocity exposure without committing to a larger audit."
                        />
                    </div>
                </section>

                <div className="mt-16 text-center border-t border-zinc-300 pt-12">
                    <Link href="/" className="text-zinc-950 font-bold hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-semibold font-mono uppercase tracking-widest justify-center">
                        ← Back to Homepage
                    </Link>
                </div>

            </div>
        </main>
    );
}
