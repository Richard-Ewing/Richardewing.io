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

export const metadata: Metadata = {
    title: 'AI Advisory Services - Diagnostics, Audits & Cost Governance | Richard Ewing',
    description: 'Your AI budget is growing. Your AI returns are not. Advisory services that measure, govern, and improve the economics of enterprise AI. From $450 diagnostics to fractional CPO retainers.',
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

const servicePackageKeys = ['gut_check', 'insolvency_diagnostic', 'hallucination_tax_audit', 'advisory_retainer'];

const colorMap: Record<string, { bg: string; border: string; text: string; pill: string; btn: string }> = {
    gut_check: { bg: 'bg-amber-50/50', border: 'border-amber-200', text: 'text-amber-700', pill: 'bg-amber-100 text-amber-800', btn: 'bg-amber-600 hover:bg-amber-700 text-zinc-950 font-bold' },
    insolvency_diagnostic: { bg: 'bg-cyan-50/50', border: 'border-cyan-200', text: 'text-cyan-700', pill: 'bg-cyan-100 text-cyan-800', btn: 'bg-cyan-600 hover:bg-cyan-700 text-zinc-950 font-bold' },
    hallucination_tax_audit: { bg: 'bg-rose-50/50', border: 'border-rose-200', text: 'text-rose-700', pill: 'bg-rose-100 text-rose-800', btn: 'bg-rose-600 hover:bg-rose-700 text-zinc-950 font-bold' },
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
                    <span>Advisory</span><span>/</span><span className="text-indigo-700 font-extrabold">Services & Packages</span>
                </div>

                {/* Section 1: Hero Problem */}
                <ScrollReveal>
                    <section className="mb-16 text-left">
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-8 tracking-tight leading-[1.1]">
                            Your AI budget is growing. <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">Your AI returns are not.</span>
                        </h1>
                        <p className="text-xl text-zinc-800 leading-relaxed font-medium max-w-3xl mb-8">
                            Companies are spending more on AI but cannot prove it produces financial returns. The CFO sees a growing line item. The CTO promises future value. Neither has the data to resolve the disagreement.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <CheckoutButton 
                                productId="gut_check" 
                                label={`Book $${COMMERCIAL_OFFERS.gut_check.price} Gut-Check`} 
                                variant="primary"
                            />
                            <Link href="/assessment" className="flex items-center justify-center px-6 py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all bg-white border border-zinc-300 text-zinc-950 hover:bg-zinc-50">
                                Run Free Benchmark
                            </Link>
                        </div>

                        {/* Executive Plain-English Summary Box */}
                        <div className="mb-12 bg-white border border-indigo-200 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-2 text-indigo-700 font-mono font-bold text-xs uppercase tracking-widest mb-3">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Executive Summary (CFO Plain-English Translation)</span>
                            </div>
                            <p className="text-zinc-800 text-sm sm:text-base leading-relaxed font-medium">
                                Unchecked AI infrastructure spend and unverified code creates technical debt that acts like a high-interest credit card. Our advisory engagements execute an <ExecutiveTooltip term="R&D Capital Audit">R&D Capital Audit</ExecutiveTooltip> to calculate your <ExecutiveTooltip term="Technical Insolvency Date">Technical Insolvency Date</ExecutiveTooltip> and reduce your <ExecutiveTooltip term="Product Debt Index (PDI)">Product Debt Index (PDI)</ExecutiveTooltip>. By converting <ExecutiveTooltip term="Vibe Coding Debt">Vibe Coding Debt</ExecutiveTooltip> into software assets under <ExecutiveTooltip term="Deterministic controls">Deterministic controls</ExecutiveTooltip>, we protect gross margins and restore predictable financial returns.
                            </p>
                        </div>

                        {/* Role-Specific Segmentation Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-300">
                            <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-2 text-purple-700 font-bold text-sm mb-2">
                                    <UserCheck className="w-4 h-4" />
                                    <span>For CTOs & VPs of Eng</span>
                                </div>
                                <p className="text-zinc-800 text-xs font-semibold leading-relaxed mb-3">
                                    Prove engineering ROI to the board and install hard cost caps before API overruns wreck your roadmap.
                                </p>
                                <Link href="/for-ctos" className="text-[11px] font-mono font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1">
                                    CTO Diagnostic Guide →
                                </Link>
                            </div>

                            <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-2">
                                    <BarChart3 className="w-4 h-4" />
                                    <span>For CFOs & Finance Leads</span>
                                </div>
                                <p className="text-zinc-800 text-xs font-semibold leading-relaxed mb-3">
                                    Turn the black-box AI line item into a predictable P&L asset with unit economics clarity.
                                </p>
                                <Link href="/for-boards" className="text-[11px] font-mono font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1">
                                    CFO Board Framework →
                                </Link>
                            </div>

                            <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-2">
                                    <Briefcase className="w-4 h-4" />
                                    <span>For PE Operating Partners</span>
                                </div>
                                <p className="text-zinc-800 text-xs font-semibold leading-relaxed mb-3">
                                    Forensic technical due diligence to uncover hidden AI liabilities before term sheet execution.
                                </p>
                                <Link href="/pricing" className="text-[11px] font-mono font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1">
                                    M&A Tech Diligence →
                                </Link>
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
                                                    {key === 'insolvency_diagnostic' ? (
                                                        <>Deep-dive session for teams with high <ExecutiveTooltip term="Product Debt Index (PDI)">Product Debt Index (PDI)</ExecutiveTooltip> or spiraling API costs. We analyze architecture bottlenecks and map out a 30-day capital recovery roadmap.</>
                                                    ) : key === 'hallucination_tax_audit' ? (
                                                        <>Engineers spend an average of 4.3 hrs/week manually validating AI outputs. Our <ExecutiveTooltip term="R&D Capital Audit">R&D Capital Audit</ExecutiveTooltip> measures total verification overhead and installs <ExecutiveTooltip term="Deterministic controls">Deterministic controls</ExecutiveTooltip>.</>
                                                    ) : (
                                                        pkg.description
                                                    )}
                                                </p>

                                                {/* Plain-English CFO Summary per package */}
                                                <div className="mb-6 bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-xs text-zinc-700">
                                                    <span className="font-mono text-[10px] font-bold uppercase text-zinc-500 block mb-1">CFO Financial Takeaway:</span>
                                                    {key === 'gut_check' && (
                                                        <span>Identifies active cloud overspending and fixes initial <ExecutiveTooltip term="Vibe Coding Debt">Vibe Coding Debt</ExecutiveTooltip> exposure in 30 minutes.</span>
                                                    )}
                                                    {key === 'insolvency_diagnostic' && (
                                                        <span>Pinpoints your exact <ExecutiveTooltip term="Technical Insolvency Date">Technical Insolvency Date</ExecutiveTooltip> and establishes hard dollar boundaries.</span>
                                                    )}
                                                    {key === 'hallucination_tax_audit' && (
                                                        <span>Full <ExecutiveTooltip term="R&D Capital Audit">R&D Capital Audit</ExecutiveTooltip> replacing wasted engineer hours with <ExecutiveTooltip term="Deterministic controls">Deterministic controls</ExecutiveTooltip>.</span>
                                                    )}
                                                    {key === 'advisory_retainer' && (
                                                        <span>Fractional CPO/CTO oversight guaranteeing zero billing surprises and a low <ExecutiveTooltip term="Product Debt Index (PDI)">Product Debt Index (PDI)</ExecutiveTooltip>.</span>
                                                    )}
                                                </div>

                                                <div className="mb-6 flex items-baseline gap-1">
                                                    <span className="text-4xl font-extrabold text-zinc-950 font-grotesk">${pkg.price.toLocaleString()}</span>
                                                    <span className="text-xs text-zinc-500 font-bold font-mono">{pkg.billingPeriod === 'monthly' ? '/month' : 'one-time'}</span>
                                                </div>
                                            </div>

                                            <div className="w-full md:w-64 flex flex-col justify-end">
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

                <div className="mt-16 text-center pt-12">
                    <Link href="/" className="text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-2 text-sm font-semibold font-mono uppercase tracking-widest justify-center">
                        ← Back to Homepage
                    </Link>
                </div>

            </div>
        </main>
    );
}
