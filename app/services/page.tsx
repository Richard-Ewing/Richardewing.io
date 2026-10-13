import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, AlertTriangle, CheckCircle2, ArrowDown, UserCheck, Briefcase, BarChart3 } from 'lucide-react';
import ProofRail from '@/app/components/ProofRail';
import DeliverablePreview from '@/app/components/DeliverablePreview';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import FAQItem from '@/app/components/FAQItem';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';
import { COMMERCIAL_OFFERS } from '@/lib/platform/offers/offers';
import AsSeenInBar from '@/components/social-proof/AsSeenInBar';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';
import ExecutiveTooltip from '@/components/ExecutiveTooltip';
import { GooglePreferredBadge } from '@/app/components/GooglePreferredBadge';

export const metadata: Metadata = {
    title: 'AI Product Advisory, Operating Kit & Fractional CPO',
    description: 'Product P&L turnarounds, AI feature pricing, $29 Operating Kit, Sponsored Research, 0-to-1 AI Build Sprints, and Fractional CPO leadership by Richard Ewing.',
    alternates: {
        canonical: 'https://www.richardewing.io/services',
    },
    openGraph: {
        title: 'AI Product Advisory, Operating Kit & Fractional CPO | Richard Ewing',
        description: 'Product P&L turnarounds, AI feature pricing, $29 Operating Kit, Sponsored Research, and Fractional CPO engagements.',
        url: 'https://www.richardewing.io/services',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Product Advisory, Operating Kit & Fractional CPO | Richard Ewing',
        description: 'Product P&L turnarounds, AI feature pricing, $29 Operating Kit, Sponsored Research, and Fractional CPO engagements.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

const servicePackageKeys = [
    'operating_kit',
    'gut_check',
    'insolvency_diagnostic',
    'sponsored_research',
    'hallucination_tax_audit',
    'advisory_retainer'
];

const colorMap: Record<string, { bg: string; border: string; text: string; pill: string; btn: string }> = {
    operating_kit: { bg: 'bg-emerald-50/50', border: 'border-emerald-200', text: 'text-emerald-700', pill: 'bg-emerald-100 text-emerald-800', btn: 'bg-emerald-600 hover:bg-emerald-700 text-white font-bold' },
    gut_check: { bg: 'bg-amber-50/50', border: 'border-amber-200', text: 'text-amber-700', pill: 'bg-amber-100 text-amber-800', btn: 'bg-amber-600 hover:bg-amber-700 text-white font-bold' },
    insolvency_diagnostic: { bg: 'bg-cyan-50/50', border: 'border-cyan-200', text: 'text-cyan-700', pill: 'bg-cyan-100 text-cyan-800', btn: 'bg-cyan-600 hover:bg-cyan-700 text-white font-bold' },
    sponsored_research: { bg: 'bg-violet-50/50', border: 'border-violet-200', text: 'text-violet-700', pill: 'bg-violet-100 text-violet-800', btn: 'bg-violet-600 hover:bg-violet-700 text-white font-bold' },
    hallucination_tax_audit: { bg: 'bg-rose-50/50', border: 'border-rose-200', text: 'text-rose-700', pill: 'bg-rose-100 text-rose-800', btn: 'bg-rose-600 hover:bg-rose-700 text-white font-bold' },
    advisory_retainer: { bg: 'bg-indigo-50/50', border: 'border-indigo-200', text: 'text-indigo-700', pill: 'bg-indigo-100 text-indigo-800', btn: 'bg-indigo-600 hover:bg-indigo-700 text-white font-bold' }
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <BreadcrumbSchema items={[
                { name: 'Services', url: 'https://www.richardewing.io/services' }
            ]} />
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Breadcrumb */}
                <div className="mb-12 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Advisory &amp; Offers</span><span>/</span><span className="text-indigo-700 font-extrabold">4-Pillar Offer Architecture</span>
                </div>

                {/* Section 1: Hero Problem */}
                <ScrollReveal>
                    <section className="mb-16 text-left">
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-8 tracking-tight leading-[1.1]">
                            Your AI budget is growing. <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">Your gross margins are not.</span>
                        </h1>
                        <p className="text-xl text-zinc-800 leading-relaxed font-medium max-w-3xl mb-8">
                            I scaled SaaS products from <strong className="text-zinc-950">$0 to $25M ARR</strong>, turned around a stagnant <strong className="text-zinc-950">$20M P&amp;L (+200% YoY)</strong>, and built two live AI platforms from scratch. Whether you want the self-serve <strong className="text-zinc-950">$29 Operating Kit</strong>, a 1-on-1 Product P&amp;L Tear-Down, Sponsored Research, a 0-to-1 AI Build Sprint, or Fractional CPO leadership, every offer is fixed-scope and built on real P&amp;L math.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
                            <Link
                                href="/toolkit"
                                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs uppercase tracking-widest font-extrabold transition-all bg-amber-500 text-zinc-950 hover:bg-amber-400 shadow-md"
                            >
                                Get the $29 Operating Kit →
                            </Link>
                            <CheckoutButton 
                                productId="gut_check" 
                                label={`Book $${COMMERCIAL_OFFERS.gut_check.price} P&L Tear-Down`} 
                                variant="primary"
                            />
                            <a
                                href="mailto:richardewing@exogram.ai?subject=Free%2015-Min%20Executive%20Intro%20Request"
                                className="flex items-center justify-center px-6 py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all bg-white border border-zinc-300 text-zinc-950 hover:bg-zinc-50"
                            >
                                Free 15-Min Executive Intro
                            </a>
                        </div>

                        {/* Executive Plain-English Summary Box */}
                        <div className="mb-12 bg-white border border-indigo-200 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-2 text-indigo-700 font-mono font-bold text-xs uppercase tracking-widest mb-3">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Four Ways We Work Together (Zero Fluff)</span>
                            </div>
                            <p className="text-zinc-800 text-sm sm:text-base leading-relaxed font-medium">
                                <strong>1. Digital Operating Kit ($29 / $79):</strong> Download the 5 working Excel/CSV models, 12-slide CFO board deck, and 30-day CPO turnaround runbook immediately.<br />
                                <strong>2. Product Strategy, Pricing &amp; P&amp;L Advisory ($450 - $10k/mo):</strong> 1-on-1 pricing tear-downs, 2-week roadmap turnarounds, and Fractional CPO leadership.<br />
                                <strong>3. Sponsored Benchmark Research ($2,500+):</strong> Co-authored whitepapers and executive briefings distributed across 174+ publications and 12,500+ technology leaders.<br />
                                <strong>4. 0-to-1 AI Product &amp; Authority Build Sprint ($7,500):</strong> Ship a production-grade AI diagnostic tool and authority engine in 21 days.
                            </p>
                        </div>

                        {/* Role-Specific Segmentation Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-300">
                            <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-2 text-purple-700 font-bold text-sm mb-2">
                                    <UserCheck className="w-4 h-4" />
                                    <span>For CEOs, Founders &amp; Recruiters</span>
                                </div>
                                <p className="text-zinc-800 text-xs font-semibold leading-relaxed mb-3">
                                    Evaluating Richard Ewing for VP of Product, Chief Product Officer, Head of AI Product, or Fractional CPO?
                                </p>
                                <Link href="/portfolio" className="text-[11px] font-mono font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1">
                                    Inspect Executive Portfolio →
                                </Link>
                            </div>

                            <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-2">
                                    <BarChart3 className="w-4 h-4" />
                                    <span>For CFOs &amp; Product Leaders</span>
                                </div>
                                <p className="text-zinc-800 text-xs font-semibold leading-relaxed mb-3">
                                    Stress-test AI feature margins, kill zombie features, and align engineering roadmaps with EBITDA.
                                </p>
                                <Link href="/toolkit" className="text-[11px] font-mono font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1">
                                    Preview $29 Operating Kit →
                                </Link>
                            </div>

                            <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-2">
                                    <Briefcase className="w-4 h-4" />
                                    <span>For B2B AI Vendors &amp; GTM</span>
                                </div>
                                <p className="text-zinc-800 text-xs font-semibold leading-relaxed mb-3">
                                    Commission an independent economic benchmark or executive briefing for your enterprise buyers.
                                </p>
                                <a href="#sponsored_research" className="text-[11px] font-mono font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1">
                                    Sponsored Research Specs →
                                </a>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                <div className="mb-24">
                    <ProofRail />
                    <AsSeenInBar />
                </div>

                {/* Section 2: Deliverable Output Preview */}
                <DeliverablePreview />

                {/* Section 3: Cost of doing nothing */}
                <ScrollReveal>
                    <section className="mb-24">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-8">The cost of doing nothing</h2>
                        <div className="space-y-4">
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm flex gap-4 items-start">
                                <div className="mt-1 bg-red-100 p-2 rounded-full text-red-700 shrink-0">
                                    <AlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-950 text-lg mb-2">Compound waste</h3>
                                    <p className="text-zinc-700">Every quarter without measurement compounds the waste. We estimate 15-30% of AI inference spend produces no business value.</p>
                                </div>
                            </div>
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm flex gap-4 items-start">
                                <div className="mt-1 bg-red-100 p-2 rounded-full text-red-700 shrink-0">
                                    <AlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-950 text-lg mb-2">Hidden liabilities</h3>
                                    <p className="text-zinc-700">Shadow AI creates liability that surfaces during due diligence or security audits, expanding your <ExecutiveTooltip term="Vibe Coding Debt">Vibe Coding Debt</ExecutiveTooltip>.</p>
                                </div>
                            </div>
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm flex gap-4 items-start">
                                <div className="mt-1 bg-red-100 p-2 rounded-full text-red-700 shrink-0">
                                    <AlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-950 text-lg mb-2">Features without profit</h3>
                                    <p className="text-zinc-700">Engineering teams build features faster but cannot explain whether those features make money without an <ExecutiveTooltip term="R&D Capital Audit">R&D Capital Audit</ExecutiveTooltip>.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 4: Symptoms you recognize */}
                <ScrollReveal>
                    <section className="mb-24">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-8">Symptoms you recognize</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Our AI bill tripled but nobody can explain why.",
                                "The CFO keeps asking where AI ROI went.",
                                "Engineers are using AI tools we did not approve.",
                                "We are deploying models faster than we can govern them.",
                                "Board wants AI metrics we cannot produce.",
                                "Technical debt is accelerating, moving us closer to our Technical Insolvency Date."
                            ].map((symptom, idx) => (
                                <div key={idx} className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
                                    <p className="text-zinc-800 font-medium italic">
                                        "{symptom.includes('Technical Insolvency Date') ? (
                                            <>
                                                Technical debt is accelerating, moving us closer to our <ExecutiveTooltip term="Technical Insolvency Date">Technical Insolvency Date</ExecutiveTooltip>.
                                            </>
                                        ) : symptom}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 5: How we diagnose */}
                <ScrollReveal>
                    <section className="mb-24 bg-zinc-950 text-zinc-50 rounded-3xl p-8 sm:p-12">
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-8">How we diagnose</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-indigo-300">Unit economics analysis</h3>
                                <p className="text-zinc-400 text-sm">We calculate your exact cost per inference and cost per useful output to establish baseline margins.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-indigo-300">Shadow AI discovery</h3>
                                <p className="text-zinc-400 text-sm">We map unsanctioned model and API usage across your engineering team to quantify financial risk exposure.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-indigo-300">Capital allocation mapping</h3>
                                <p className="text-zinc-400 text-sm">We perform an <ExecutiveTooltip term="R&D Capital Audit" className="text-indigo-300">R&D Capital Audit</ExecutiveTooltip> to determine what percentage of your engineering budget produces durable software assets.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-indigo-300">Governance gap analysis</h3>
                                <p className="text-zinc-400 text-sm">We audit existing guards versus where <ExecutiveTooltip term="Deterministic controls" className="text-indigo-300">Deterministic controls</ExecutiveTooltip> are required for hard budget enforcement.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 6: Engagement packages */}
                <ScrollReveal>
                    <section className="mb-24">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4 text-center">The Progression</h2>
                        <p className="text-zinc-600 text-center mb-12 max-w-2xl mx-auto">We do not sell a menu of services. We follow a strict diagnostic progression to ensure you only pay for the intervention you need.</p>
                        
                        <div className="flex flex-col gap-6 relative">
                            {servicePackageKeys.map((key, idx) => {
                                const pkg = COMMERCIAL_OFFERS[key];
                                const c = colorMap[key] || colorMap.indigo;
                                const isPopular = pkg.highlighted;

                                return (
                                    <React.Fragment key={idx}>
                                        <div 
                                            id={key}
                                            className={`relative rounded-3xl border ${isPopular ? 'border-2 border-indigo-500 bg-gradient-to-br from-indigo-50/40 via-white to-white shadow-xl shadow-indigo-500/15' : 'border-zinc-300 bg-white'} p-8 flex flex-col md:flex-row gap-8 justify-between hover:shadow-lg transition-all duration-300`}
                                        >
                                            {isPopular && (
                                                <span className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-indigo-600 text-white shadow-sm">
                                                    Most Popular
                                                </span>
                                            )}

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest ${c.pill}`}>
                                                        {pkg.badge}
                                                    </span>
                                                    <span className="text-xs text-zinc-500 font-bold font-mono">
                                                        Stage: {pkg.stage.replace('_', ' ')}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-bold text-zinc-950 mb-2 font-grotesk">{pkg.name}</h3>
                                                <p className="text-sm text-zinc-600 font-semibold mb-4 max-w-xl">
                                                    {pkg.description}
                                                </p>

                                                <ul className="space-y-1.5 mb-5 text-xs text-zinc-700 font-medium">
                                                    {pkg.features.map((feat, fIdx) => (
                                                        <li key={fIdx} className="flex items-start gap-2">
                                                            <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                                                            <span>{feat}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="mb-6 flex items-baseline gap-1">
                                                    <span className="text-4xl font-extrabold text-zinc-950 font-grotesk">${pkg.price.toLocaleString()}</span>
                                                    <span className="text-xs text-zinc-500 font-bold font-mono">{pkg.billingPeriod === 'monthly' ? '/month' : 'one-time'}</span>
                                                </div>
                                            </div>

                                            <div className="w-full md:w-64 flex flex-col justify-end gap-2.5">
                                                {pkg.primaryCTA.action === 'checkout' && pkg.primaryCTA.productId ? (
                                                    <CheckoutButton 
                                                        productId={pkg.primaryCTA.productId} 
                                                        label={pkg.primaryCTA.label} 
                                                        variant={isPopular ? "primary" : "ghost"}
                                                        icon="none"
                                                    />
                                                ) : (
                                                    <a 
                                                        href={pkg.primaryCTA.href || `mailto:richardewing@exogram.ai?subject=Inquiry: ${pkg.name}`} 
                                                        className={`flex items-center justify-center w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${c.btn}`}
                                                    >
                                                        {pkg.primaryCTA.label}
                                                    </a>
                                                )}
                                                {key === 'operating_kit' && (
                                                    <Link
                                                        href="/toolkit"
                                                        className="text-center text-xs font-mono font-bold text-emerald-800 hover:text-emerald-950 underline"
                                                    >
                                                        Interactive Live Preview →
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                        {idx < servicePackageKeys.length - 1 && (
                                            <div className="flex justify-center -my-2 z-10 relative">
                                                <div className="bg-zinc-200 p-2 rounded-full border-4 border-[#F5F0EB] text-zinc-500">
                                                    <ArrowDown className="w-4 h-4" />
                                                </div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 7: What every engagement produces */}
                <ScrollReveal>
                    <section className="mb-24 bg-indigo-50 border border-indigo-100 rounded-3xl p-8 sm:p-12">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-8">What every engagement produces</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                                <span className="font-semibold text-zinc-800">Written risk report with dollar-denominated findings</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                                <span className="font-semibold text-zinc-800">Board-ready executive summary</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                                <span className="font-semibold text-zinc-800">90-day remediation roadmap</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                                <span className="font-semibold text-zinc-800">Ongoing measurement framework with <ExecutiveTooltip term="Deterministic controls">Deterministic controls</ExecutiveTooltip></span>
                            </li>
                        </ul>
                    </section>
                </ScrollReveal>

                {/* Section 7.5: Ecosystem Product Bridge */}
                <ScrollReveal>
                    <ProductBridgeCard />
                </ScrollReveal>

                {/* Section 8: FAQ */}
                <ScrollReveal>
                    <section className="mb-24 border-t border-zinc-300 pt-16">
                        <h2 className="text-3xl font-bold font-grotesk text-zinc-950 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <FAQItem 
                                question="How much does a fractional CPO / CTO cost?" 
                                answer="Fractional CPO / CTO retainer packages are $10,000/month. This provides hands-on technology direction, cost-cap architecture setup, and monthly board-level reporting."
                            />
                            <FAQItem 
                                question="What is the difference between a Diagnostic and a full Audit?" 
                                answer={
                                    <span>
                                        A Diagnostic ($2,500) evaluates code and identifies your <ExecutiveTooltip term="Technical Insolvency Date">Technical Insolvency Date</ExecutiveTooltip> over a 60-minute session. A full <ExecutiveTooltip term="R&D Capital Audit">R&D Capital Audit</ExecutiveTooltip> ($7,500) is a 3-week engagement that includes comprehensive financial modeling, team productivity audits, and a 90-day custom remediation plan.
                                    </span>
                                }
                            />
                            <FAQItem 
                                question="Who qualifies for the $450 Gut-Check Session?" 
                                answer="The Gut-Check Session is designed for founders, CTOs, and PE operating partners who need a rapid, objective evaluation of their current AI cost and velocity exposure without committing to a larger audit."
                            />
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 9: Final CTA */}
                <ScrollReveal>
                    <section className="text-center bg-zinc-950 rounded-3xl p-12">
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-8">
                            Start with the question: Is AI actually making your company money?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/assessment" className="flex items-center justify-center px-8 py-4 rounded-xl text-sm uppercase tracking-widest font-bold transition-all bg-white text-zinc-950 hover:bg-zinc-200">
                                Run Free Benchmark
                            </Link>
                            <CheckoutButton 
                                productId="gut_check" 
                                label={`Book $${COMMERCIAL_OFFERS.gut_check.price} Gut-Check`} 
                                variant="primary"
                            />
                        </div>
                    </section>
                </ScrollReveal>

                {/* Google Preferred Source AEO Callout */}
                <GooglePreferredBadge variant="card" />

                {/* Commercial Governance & Legal Terms Notice */}
                <div className="mt-12 p-6 rounded-2xl bg-white border border-indigo-200 text-center text-xs text-zinc-700 font-mono shadow-sm">
                    <span className="font-bold text-zinc-950">Commercial Advisory Notice: </span>
                    <span>All advisory packages, diagnostic working sessions, and audits are governed by our </span>
                    <Link href="/legal#terms" className="underline font-bold text-zinc-950 hover:text-indigo-900">Terms of Use (TOC)</Link>
                    <span>, </span>
                    <Link href="/legal#advisory" className="underline font-bold text-zinc-950 hover:text-indigo-900">Advisory Scope</Link>
                    <span>, and </span>
                    <Link href="/legal#disclaimers" className="underline font-bold text-zinc-950 hover:text-indigo-900">Advisory Disclaimers</Link>
                    <span>. Richard Ewing &bull; Registered Washington State LLC.</span>
                </div>

                <div className="mt-12 text-center pt-8">
                    <Link href="/" className="text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-2 text-sm font-semibold font-mono uppercase tracking-widest justify-center">
                        ← Back to Homepage
                    </Link>
                </div>

            </div>
        </main>
    );
}
