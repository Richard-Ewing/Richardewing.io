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
    title: 'Product Economist Advisory, $29 Kit & Fractional CPO',
    description: 'Three distinct paths: Fix & scale your Product P&L ($29 Operating Kit to $2,500 Turnaround), ship a 0-to-1 AI product ($7,500), or hire a Fractional CPO.',
    alternates: {
        canonical: 'https://www.richardewing.io/services',
    },
    openGraph: {
        title: 'Product Economist Advisory, $29 Kit & Fractional CPO | Richard Ewing',
        description: 'Product P&L turnarounds, AI feature pricing, $29 Operating Kit + Live Workspace, 0-to-1 AI Build Sprints, PE Diligence, and Fractional CPO leadership.',
        url: 'https://www.richardewing.io/services',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Product Economist Advisory, $29 Kit & Fractional CPO | Richard Ewing',
        description: 'Product P&L turnarounds, AI feature pricing, $29 Operating Kit + Live Workspace, 0-to-1 AI Build Sprints, and Fractional CPO engagements.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

const pathAPackageKeys = [
    'free_assessment',
    'operating_kit',
    'gut_check',
    'insolvency_diagnostic',
];

const colorMap: Record<string, { bg: string; border: string; text: string; pill: string; btn: string }> = {
    free_assessment: { bg: 'bg-zinc-50/80', border: 'border-zinc-300', text: 'text-zinc-800', pill: 'bg-zinc-200 text-zinc-900', btn: 'bg-zinc-900 hover:bg-zinc-800 text-white font-bold' },
    operating_kit: { bg: 'bg-emerald-50/50', border: 'border-emerald-200', text: 'text-emerald-700', pill: 'bg-emerald-100 text-emerald-800', btn: 'bg-emerald-600 hover:bg-emerald-700 text-white font-bold' },
    gut_check: { bg: 'bg-amber-50/50', border: 'border-amber-200', text: 'text-amber-700', pill: 'bg-amber-100 text-amber-800', btn: 'bg-amber-600 hover:bg-amber-700 text-white font-bold' },
    insolvency_diagnostic: { bg: 'bg-cyan-50/50', border: 'border-cyan-200', text: 'text-cyan-700', pill: 'bg-cyan-100 text-cyan-800', btn: 'bg-cyan-600 hover:bg-cyan-700 text-white font-bold' },
    sponsored_research: { bg: 'bg-violet-50/50', border: 'border-violet-200', text: 'text-violet-700', pill: 'bg-violet-100 text-violet-800', btn: 'bg-violet-600 hover:bg-violet-700 text-white font-bold' },
    hallucination_tax_audit: { bg: 'bg-rose-50/50', border: 'border-rose-200', text: 'text-rose-700', pill: 'bg-rose-100 text-rose-800', btn: 'bg-rose-600 hover:bg-rose-700 text-white font-bold' },
    tech_due_diligence: { bg: 'bg-amber-50/50', border: 'border-amber-300', text: 'text-amber-800', pill: 'bg-amber-100 text-amber-900', btn: 'bg-amber-600 hover:bg-amber-700 text-white font-bold' },
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
                    <span>Product Economist Advisory</span><span>/</span><span className="text-indigo-700 font-extrabold">3 Distinct Buying Paths</span>
                </div>

                {/* Section 1: Hero Problem */}
                <ScrollReveal>
                    <section className="mb-16 text-left">
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-8 tracking-tight leading-[1.1]">
                            Your AI budget is growing. <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">Your gross margins are not.</span>
                        </h1>
                        <p className="text-xl text-zinc-800 leading-relaxed font-medium max-w-3xl mb-8">
                            As a <strong className="text-zinc-950">Product Economist</strong> with a CS degree and Finance MBA, I scaled enterprise SaaS from <strong className="text-zinc-950">$0 to $25M ARR</strong> at Tyler Technologies, turned around a stagnant <strong className="text-zinc-950">$20M P&amp;L (+200% YoY)</strong>, and built three live AI software platforms from scratch. Choose the exact path that matches your goal today:
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
                            <Link
                                href="/toolkit"
                                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs uppercase tracking-widest font-extrabold transition-all bg-amber-500 text-zinc-950 hover:bg-amber-400 shadow-md"
                            >
                                Get the $29 Operating Kit + Workspace →
                            </Link>
                            <CheckoutButton 
                                productId="gut_check" 
                                label={`Book $${COMMERCIAL_OFFERS.gut_check.price} P&L Tear-Down`} 
                                variant="primary"
                            />
                            <Link
                                href="/workspace"
                                className="flex items-center justify-center px-6 py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all bg-white border border-zinc-300 text-zinc-950 hover:bg-zinc-50"
                            >
                                Launch Live Workspace →
                            </Link>
                        </div>

                        {/* Executive Plain-English Summary Box: 3 Buying Paths */}
                        <div className="mb-12 bg-white border border-indigo-200 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-2 text-indigo-700 font-mono font-bold text-xs uppercase tracking-widest mb-3">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Three Distinct Buying Paths (Choose Your Goal)</span>
                            </div>
                            <div className="space-y-3 text-zinc-800 text-sm sm:text-base leading-relaxed font-medium">
                                <p>
                                    <a href="#path-a" className="text-indigo-700 font-bold hover:underline">Path A: Fix &amp; Scale an Existing Product&apos;s P&amp;L</a>: Start with the <strong>Free Diagnostic Suite ($0)</strong>, grab the <strong>$29 Operating Kit + Interactive Browser Workspace</strong>, book a <strong>$450 1-on-1 P&amp;L Tear-Down</strong>, or run a <strong>$2,500 2-Week Turnaround Sprint</strong>.
                                </p>
                                <p>
                                    <a href="#path-b" className="text-rose-700 font-bold hover:underline">Path B: Build a New 0-to-1 AI Product / Authority Engine</a>: For founders and executives who want working software shipped, not an audit. A fixed <strong>$7,500 21-Day Build Sprint</strong> to ship a live AI application or interactive diagnostic funnel.
                                </p>
                                <p>
                                    <a href="#path-c" className="text-purple-700 font-bold hover:underline">Path C: Executive Leadership, PE Diligence &amp; Sponsored Research</a>: Embedded <strong>$10,000/mo Fractional CPO</strong> (or full-time CPO/VP of Product), <strong>$15,000 PE M&amp;A Product Diligence</strong>, and <strong>$2,500+ Sponsored Benchmark Research</strong>.
                                </p>
                            </div>
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
                                    Get $29 Kit + Live Workspace →
                                </Link>
                            </div>

                            <div className="bg-white border border-zinc-300 p-5 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-2">
                                    <Briefcase className="w-4 h-4" />
                                    <span>For B2B AI Vendors &amp; PE Firms</span>
                                </div>
                                <p className="text-zinc-800 text-xs font-semibold leading-relaxed mb-3">
                                    Commission an independent economic benchmark or 2-week M&amp;A product P&amp;L due diligence.
                                </p>
                                <a href="#path-c" className="text-[11px] font-mono font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1">
                                    See Path C Executive Offers →
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

                {/* Section 6: 3 Distinct Buying Paths */}
                <ScrollReveal>
                    <section className="mb-24 space-y-20">
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-700 block mb-2">
                                Organized by Buyer Goal
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 mb-4">
                                Three Distinct Buying Paths
                            </h2>
                            <p className="text-zinc-700 text-base font-medium">
                                Fixing an existing product&apos;s P&amp;L, shipping a new 0-to-1 AI product, and hiring executive leadership or commissioning benchmark research are three different goals. Select the path built for your objective:
                            </p>
                        </div>

                        {/* PATH A: Fix & Scale an Existing Product's P&L */}
                        <div id="path-a" className="scroll-mt-28">
                            <div className="mb-8 p-6 rounded-2xl bg-indigo-950 text-white border border-indigo-800 shadow-lg">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                                        Path A • The P&amp;L Turnaround Progression Ladder
                                    </span>
                                    <span className="text-xs font-mono text-indigo-300 font-bold">
                                        Free Diagnostic → $29 Operating Kit → $450 Tear-Down → $2,500 Turnaround Sprint
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-white mb-2">
                                    Path A: Fix &amp; Scale an Existing Product&apos;s P&amp;L
                                </h3>
                                <p className="text-sm text-indigo-100 font-medium leading-relaxed">
                                    For CPOs, VPs of Product, CFOs, and CTOs who need to stop AI margin erosion, kill negative-carry zombie features, and align product roadmaps with EBITDA. Start self-serve for $0 or $29, then escalate only when you want 1-on-1 intervention.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6 relative">
                                {pathAPackageKeys.map((key, idx) => {
                                    const pkg = COMMERCIAL_OFFERS[key];
                                    const c = colorMap[key] || colorMap.operating_kit;
                                    const isPopular = pkg.highlighted;

                                    return (
                                        <React.Fragment key={key}>
                                            <div 
                                                id={key}
                                                className={`scroll-mt-28 relative rounded-3xl border ${isPopular ? 'border-2 border-emerald-500 bg-gradient-to-br from-emerald-50/40 via-white to-white shadow-xl shadow-emerald-500/10' : 'border-zinc-300 bg-white'} p-8 flex flex-col md:flex-row gap-8 justify-between hover:shadow-lg transition-all duration-300`}
                                            >
                                                {isPopular && (
                                                    <span className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-600 text-white shadow-sm">
                                                        Best Seller • Files + Live Workspace
                                                    </span>
                                                )}

                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest ${c.pill}`}>
                                                            Step 0{idx + 1} • {pkg.badge}
                                                        </span>
                                                    </div>

                                                    <h4 className="text-2xl font-bold text-zinc-950 mb-2 font-grotesk">{pkg.name}</h4>
                                                    <p className="text-sm text-zinc-700 font-semibold mb-4 max-w-xl leading-relaxed">
                                                        {pkg.description}
                                                    </p>

                                                    <ul className="space-y-1.5 mb-5 text-xs text-zinc-800 font-medium">
                                                        {pkg.features.map((feat, fIdx) => (
                                                            <li key={fIdx} className="flex items-start gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                                                                <span>{feat}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="mb-2 flex items-baseline gap-2">
                                                        <span className="text-4xl font-extrabold text-zinc-950 font-grotesk">
                                                            {pkg.price === 0 ? 'Free' : `$${pkg.price.toLocaleString()}`}
                                                        </span>
                                                        <span className="text-xs text-zinc-500 font-bold font-mono">
                                                            {pkg.price === 0 ? '25 live calculators' : key === 'operating_kit' ? '($79 Complete Bundle)' : 'one-time fixed fee'}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="w-full md:w-64 flex flex-col justify-end gap-2.5">
                                                    {pkg.primaryCTA.action === 'checkout' && pkg.primaryCTA.productId ? (
                                                        <CheckoutButton 
                                                            productId={pkg.primaryCTA.productId} 
                                                            label={pkg.primaryCTA.label} 
                                                            variant="primary"
                                                            icon="none"
                                                        />
                                                    ) : (
                                                        <Link 
                                                            href={pkg.primaryCTA.href || '/toolkit'} 
                                                            className={`flex items-center justify-center w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${c.btn}`}
                                                        >
                                                            {pkg.primaryCTA.label}
                                                        </Link>
                                                    )}
                                                    {key === 'operating_kit' && (
                                                        <div className="flex flex-col gap-1.5 pt-1">
                                                            <Link
                                                                href="/workspace"
                                                                className="text-center text-xs font-mono font-bold text-emerald-800 hover:text-emerald-950 underline"
                                                            >
                                                                Launch Interactive Browser Workspace →
                                                            </Link>
                                                            <Link
                                                                href="/toolkit"
                                                                className="text-center text-[11px] font-mono font-semibold text-zinc-600 hover:text-zinc-950 underline"
                                                            >
                                                                Preview All 5 Spreadsheet Models →
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {idx < pathAPackageKeys.length - 1 && (
                                                <div className="flex justify-center -my-2 z-10 relative">
                                                    <div className="bg-indigo-100 p-2 rounded-full border-4 border-[#F5F0EB] text-indigo-700 shadow-sm">
                                                        <ArrowDown className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </div>

                        {/* PATH B: Build a New 0-to-1 AI Product / Authority Engine */}
                        <div id="path-b" className="scroll-mt-28">
                            <div className="mb-8 p-6 rounded-2xl bg-rose-950 text-white border border-rose-800 shadow-lg">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-rose-500/30 text-rose-200 border border-rose-400/30">
                                        Path B • Working Software Shipped in 21 Days (Not an Audit)
                                    </span>
                                    <span className="text-xs font-mono text-rose-200 font-bold">
                                        Fixed-Scope 0-to-1 Architecture &amp; Production Build
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-white mb-2">
                                    Path B: Build a New 0-to-1 AI Product or Authority Engine
                                </h3>
                                <p className="text-sm text-rose-100 font-medium leading-relaxed">
                                    For founders, CEOs, and category leaders who don&apos;t want a consulting audit or a slide deck - they want a working AI product, interactive diagnostic calculator funnel, or AEO/GEO authority engine architected and shipped into production.
                                </p>
                            </div>

                            {(() => {
                                const buildPkg = COMMERCIAL_OFFERS.hallucination_tax_audit;
                                return (
                                    <div
                                        id="hallucination_tax_audit"
                                        className="scroll-mt-28 rounded-3xl border-2 border-rose-400 bg-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row gap-8 justify-between"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest bg-rose-100 text-rose-900">
                                                    {buildPkg.badge}
                                                </span>
                                                <span className="text-xs text-zinc-600 font-bold font-mono">
                                                    21-Day Shipped Deliverable
                                                </span>
                                            </div>
                                            <h4 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-3 font-grotesk">
                                                {buildPkg.name}
                                            </h4>
                                            <p className="text-sm text-zinc-700 font-semibold mb-5 max-w-xl leading-relaxed">
                                                {buildPkg.description}
                                            </p>
                                            <ul className="space-y-2 mb-6 text-xs text-zinc-800 font-medium">
                                                {buildPkg.features.map((feat, fIdx) => (
                                                    <li key={fIdx} className="flex items-start gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl font-extrabold text-zinc-950 font-grotesk">
                                                    ${buildPkg.price.toLocaleString()}
                                                </span>
                                                <span className="text-xs text-zinc-500 font-bold font-mono">
                                                    fixed 21-day build sprint
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-64 flex flex-col justify-end gap-3">
                                            <CheckoutButton
                                                productId="full_audit"
                                                label={buildPkg.primaryCTA.label}
                                                variant="primary"
                                                icon="none"
                                            />
                                            <Link
                                                href="/portfolio"
                                                className="text-center text-xs font-mono font-bold text-rose-800 hover:text-rose-950 underline"
                                            >
                                                Inspect 3 Live Platforms I Built →
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* PATH C: Executive Leadership, PE Diligence & Sponsored Research */}
                        <div id="path-c" className="scroll-mt-28">
                            <div className="mb-8 p-6 rounded-2xl bg-zinc-950 text-white border border-zinc-800 shadow-lg">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-violet-500/30 text-violet-200 border border-violet-400/30">
                                        Path C • Executive Leadership, M&amp;A Diligence &amp; Analyst Briefings
                                    </span>
                                    <span className="text-xs font-mono text-zinc-300 font-bold">
                                        For CEOs, Boards, PE Operating Partners &amp; B2B AI Vendors
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-white mb-2">
                                    Path C: Executive Leadership, PE Diligence &amp; Sponsored Research
                                </h3>
                                <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                                    Direct executive partnerships: bring Richard Ewing in as your Fractional CPO (or full-time CPO / VP of Product / Head of AI), commission 2-week Private Equity product P&amp;L due diligence, or sponsor an independent benchmark report.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {(['advisory_retainer', 'tech_due_diligence', 'sponsored_research'] as const).map((key) => {
                                    const pkg = COMMERCIAL_OFFERS[key];
                                    const c = colorMap[key] || colorMap.advisory_retainer;
                                    const isRetainer = key === 'advisory_retainer';

                                    return (
                                        <div
                                            key={key}
                                            id={key}
                                            className={`scroll-mt-28 rounded-3xl border ${isRetainer ? 'border-2 border-indigo-500 bg-zinc-950 text-white shadow-xl' : 'border-zinc-300 bg-white text-zinc-950'} p-8 flex flex-col md:flex-row gap-8 justify-between`}
                                        >
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest ${c.pill}`}>
                                                        {pkg.badge}
                                                    </span>
                                                </div>

                                                <h4 className={`text-2xl font-bold mb-2 font-grotesk ${isRetainer ? 'text-white' : 'text-zinc-950'}`}>
                                                    {pkg.name}
                                                </h4>
                                                <p className={`text-sm font-semibold mb-4 max-w-xl leading-relaxed ${isRetainer ? 'text-zinc-300' : 'text-zinc-700'}`}>
                                                    {pkg.description}
                                                </p>

                                                <ul className={`space-y-1.5 mb-5 text-xs font-medium ${isRetainer ? 'text-zinc-300' : 'text-zinc-800'}`}>
                                                    {pkg.features.map((feat, fIdx) => (
                                                        <li key={fIdx} className="flex items-start gap-2">
                                                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isRetainer ? 'text-emerald-400' : 'text-indigo-600'}`} />
                                                            <span>{feat}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="flex items-baseline gap-2">
                                                    <span className={`text-4xl font-extrabold font-grotesk ${isRetainer ? 'text-white' : 'text-zinc-950'}`}>
                                                        ${pkg.price.toLocaleString()}{key === 'sponsored_research' ? '+' : ''}
                                                    </span>
                                                    <span className={`text-xs font-bold font-mono ${isRetainer ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                                        {pkg.billingPeriod === 'monthly' ? '/month (or Full-Time Exec)' : key === 'sponsored_research' ? 'per briefing' : '2-week M&A diligence'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="w-full md:w-64 flex flex-col justify-end gap-2.5">
                                                <a
                                                    href={pkg.primaryCTA.href || `mailto:richardewing@exogram.ai?subject=Inquiry: ${pkg.name}`}
                                                    className={`flex items-center justify-center w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${isRetainer ? 'bg-amber-500 hover:bg-amber-400 text-zinc-950' : c.btn}`}
                                                >
                                                    {pkg.primaryCTA.label}
                                                </a>
                                                {isRetainer && (
                                                    <Link
                                                        href="/portfolio"
                                                        className="text-center text-xs font-mono font-bold text-amber-300 hover:text-white underline"
                                                    >
                                                        Inspect Executive Portfolio →
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
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
                                <span className="font-semibold text-zinc-800">Written Product P&amp;L &amp; AI margin analysis with dollar-denominated findings</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                                <span className="font-semibold text-zinc-800">CFO &amp; Board-ready executive summary + live workspace scenario files</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                                <span className="font-semibold text-zinc-800">90-day product turnaround &amp; zombie feature deprecation roadmap</span>
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

                {/* Section 8: Reconciled FAQ */}
                <ScrollReveal>
                    <section className="mb-24 border-t border-zinc-300 pt-16">
                        <h2 className="text-3xl font-bold font-grotesk text-zinc-950 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <FAQItem 
                                question="Which of the 3 buying paths is right for me?" 
                                answer="Choose Path A if you want to fix and scale an existing product's P&L (start with the $29 Operating Kit + Live Workspace, a $450 1-on-1 P&L Tear-Down, or a $2,500 2-Week Turnaround Sprint). Choose Path B ($7,500 0-to-1 AI Build Sprint) if you want working AI software or an interactive diagnostic funnel architected and shipped in 21 days. Choose Path C for $10,000/mo Fractional CPO leadership, $15,000 PE M&A due diligence, or $2,500+ Sponsored Benchmark Research."
                            />
                            <FAQItem 
                                question="What is the difference between the $29 Operating Kit, the $450 Tear-Down, and the $2,500 Turnaround Sprint?" 
                                answer={
                                    <span>
                                        The <strong>$29 Operating Kit</strong> ($79 with all 13 executive playbooks) gives you instant self-serve access to the 5 editable Excel/CSV models, the 12-slide CFO board deck, the 30-day turnaround runbook, AND the live interactive Product Economist Workspace (<Link href="/workspace" className="underline font-bold text-indigo-700">/workspace</Link>). The <strong>$450 Product P&amp;L Tear-Down</strong> is a live 60-minute 1-on-1 working session with Richard to stress-test your AI pricing tiers and cut zombie backlog waste (and includes the full $79 Kit). The <strong>$2,500 Turnaround Sprint</strong> is a 2-week hands-on engagement delivering a feature-by-feature ROI audit, AI tier packaging redesign, and your board defense deck.
                                    </span>
                                }
                            />
                            <FAQItem 
                                question="What happens in the $7,500 0-to-1 AI Product & Authority Engine Sprint?" 
                                answer="Unlike traditional consulting engagements that hand you a slide deck after 8 weeks, Path B is a 21-day build sprint. As the founder and architect of Exogram.ai, CareerWin.ai, and RichardEwing.io, I partner with you to design the unit economics and ship a live production AI workflow, interactive buyer diagnostic calculator, or AEO/GEO authority engine."
                            />
                            <FAQItem 
                                question="How much does Fractional CPO leadership cost, and are you open to full-time CPO / VP of Product roles?" 
                                answer="Fractional CPO / Product Economist retainers are $10,000/month (strictly capped at 2 active companies per quarter) and cover weekly executive product leadership, AI monetization governance, and monthly CFO/board reporting. I am also open to select full-time Chief Product Officer (CPO), VP of Product, and Head of AI Product opportunities."
                            />
                        </div>
                    </section>
                </ScrollReveal>

                {/* Section 9: Final CTA */}
                <ScrollReveal>
                    <section className="text-center bg-zinc-950 rounded-3xl p-12">
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-4">
                            Ready to run your product like a P&amp;L?
                        </h2>
                        <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base mb-8 font-medium">
                            Start with the $29 Operating Kit + Live Interactive Workspace, or book a 1-on-1 Product P&amp;L Tear-Down with Richard Ewing today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/toolkit" className="flex items-center justify-center px-8 py-4 rounded-xl text-sm uppercase tracking-widest font-extrabold transition-all bg-amber-500 text-zinc-950 hover:bg-amber-400">
                                Get $29 Operating Kit + Workspace →
                            </Link>
                            <CheckoutButton 
                                productId="gut_check" 
                                label={`Book $${COMMERCIAL_OFFERS.gut_check.price} P&L Tear-Down`} 
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
