import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, ArrowRight, FileSpreadsheet, Presentation, Calculator, Briefcase, Award } from 'lucide-react';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import ProofRail from '@/app/components/ProofRail';
import AsSeenInBar from '@/components/social-proof/AsSeenInBar';
import ToolkitInteractivePreview from './ToolkitInteractivePreview';

export const metadata: Metadata = {
    title: 'The Product & AI Economist Operating Kit ($29) | Richard Ewing',
    description: 'Download 5 battle-tested P&L spreadsheets, AI feature pricing calculators, Zombie Feature kill-list matrices, and 12-slide CFO board deck templates.',
    alternates: {
        canonical: 'https://www.richardewing.io/toolkit',
    },
    openGraph: {
        title: 'The Product & AI Economist Operating Kit ($29) | Richard Ewing',
        description: 'Zero fluff. The exact financial models, AI pricing stress-testers, and board deck templates used to scale $0 to $25M ARR and cut $5M in product waste.',
        url: 'https://www.richardewing.io/toolkit',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Product & AI Economist Operating Kit ($29) | Richard Ewing',
        description: '5 working P&L models, AI pricing stress-testers, and 12-slide CFO board deck templates by Richard Ewing.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const kitModules = [
    {
        number: '01',
        badge: 'Financial Spreadsheet + Interactive Model',
        title: 'The AI Feature Pricing & Margin Stress-Tester',
        problemSolved: 'You priced your product in flat monthly seats, but OpenAI, Anthropic, and AWS bill you by the token.',
        description: 'Plug in your model API costs, average prompt lengths, retry rates, and seat price. Instantly calculate your P50, P90, and P99 customer gross margins, identify the exact usage threshold where heavy users become unprofitable, and model seat-plus-credit hybrid tiers.',
        includedFiles: [
            'AI_Unit_Economics_Stress_Tester.xlsx / .csv (Editable Formulas)',
            'P50 / P90 / P99 Token Margin Collapse Calculator',
            'Seat vs. Usage vs. Outcome Tier Pricing Decision Matrix',
        ],
    },
    {
        number: '02',
        badge: 'Backlog Audit Matrix ($5M Cost-Cut System)',
        title: 'The "Zombie Feature" Kill-List & R&D Capital Matrix',
        problemSolved: 'Your engineering team is working 60-hour weeks, yet your core roadmap barely moves because 70% of capacity is trapped maintaining old features.',
        description: 'The exact spreadsheet matrix I used to cut $5M in negative-margin product bloat and scale $0 to $25M ARR. Score every feature in your product by Fully-Loaded Engineering Maintenance Hours + Cloud Carry Cost vs. Attributed ARR and Active Seat Adoption.',
        includedFiles: [
            'Zombie_Feature_Kill_List_Matrix.xlsx / .csv',
            'Customer Deprecation & Migration Communication Templates',
            'Engineering Capacity Reallocation Calculator',
        ],
    },
    {
        number: '03',
        badge: 'Executive Presentation System',
        title: 'The 12-Slide CFO & Board Defense Deck Blueprint',
        problemSolved: 'Your CFO eyes glaze over when you show sprint velocity, story points, or DORA metrics in quarterly business reviews.',
        description: 'Word-for-word slide structures, financial tables, and talking tracks that translate product roadmaps, technical debt refactoring, and AI infrastructure investments into EBITDA, Payback Period, Net Dollar Retention (NDR), and Gross Margin preservation.',
        includedFiles: [
            '12-Slide Quarterly Product P&L & Board Review Blueprint',
            'The "Why We Need to Refactor" CFO ROI Business Case Template',
            'Headcount & Compute Capital Request One-Pager',
        ],
    },
    {
        number: '04',
        badge: 'Operational Execution Runbook',
        title: 'The First-30-Days Product P&L Turnaround Playbook',
        problemSolved: 'Stepping into a new VP of Product, CPO, Director, or CTO role - or inheriting a messy product with flat growth and angry stakeholders.',
        description: 'A day-by-day 30-day execution checklist. Week 1: Shadow AI & Cloud Bill Forensics. Week 2: Backlog P&L Audit & Customer Tier Segmentation. Week 3: Killing Zombie Features & Restoring Shipping Velocity. Week 4: Presenting the 90-Day Turnaround Plan to the CEO and Board.',
        includedFiles: [
            '30-Day Executive Turnaround Checklist & Stakeholder Interview Script',
            'Weekly CEO / CFO Product P&L Flash Report Template',
            'Vendor & Cloud Contract Renegotiation Checklist',
        ],
    },
    {
        number: '05',
        badge: 'Career & Executive Positioning Dossier',
        title: 'The "Product Economist" Executive Interview & Comp Guide',
        problemSolved: 'Competing against 800 other Product Managers, Directors, or VPs who all sound like generic "Agile backlog managers."',
        description: 'How to reposition your resume, LinkedIn, and executive interview narrative around P&L ownership, ARR expansion, and unit economics so CEOs, Boards, and PE firms see you as a commercial leader worth $220K-$400K+ total compensation.',
        includedFiles: [
            'Executive P&L Resume Bullet Transformation Guide (Before & After)',
            'Top 15 CEO / CFO Final-Round Interview Questions & Answers',
            '90-Day CPO / VP of Product Case Study Presentation Template',
        ],
    },
];

export default function ToolkitPage() {
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'The Product & AI Economist Operating Kit (2026 Edition)',
        description: '5 actionable financial models, AI feature pricing stress-testers, Zombie Feature kill-lists, and 12-slide CFO board deck templates by Richard Ewing.',
        brand: {
            '@type': 'Brand',
            name: 'Richard Ewing - Product & AI Economist',
        },
        offers: {
            '@type': 'Offer',
            url: 'https://www.richardewing.io/toolkit',
            priceCurrency: 'USD',
            price: '29.00',
            availability: 'https://schema.org/InStock',
        },
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            <div className="page-container max-w-5xl mx-auto px-6">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span>/</span>
                    <span className="text-violet-700 font-extrabold">The Product &amp; AI Economist Operating Kit</span>
                </div>

                {/* Hero */}
                <section className="bg-white border-2 border-zinc-900 rounded-3xl p-8 sm:p-12 shadow-xl mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                        <span>Zero Fluff • 5 Spreadsheets &amp; Playbooks + Live Browser Workspace • Instant Access</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-grotesk font-extrabold text-zinc-950 tracking-tight leading-[1.1] mb-6">
                        Stop Looking Like a Backlog Manager.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-indigo-700">
                            Run Your Product Like a P&amp;L.
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-medium max-w-3xl mb-8">
                        Most guides give you 40 pages of theory you never use. This is the exact operating kit - editable Excel/CSV spreadsheets, AI pricing stress-testers, Zombie Feature kill-lists, 12-slide CFO board decks, <strong>plus instant access to the Live Interactive Product Economist Workspace</strong> - built from scaling enterprise SaaS from <strong>$0 to $25M ARR</strong> (Tyler Technologies), driving <strong>200% YoY growth to $20M</strong>, and cutting <strong>$5M in product waste</strong>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 mb-8">
                        <div>
                            <div className="text-xs font-mono font-bold uppercase text-violet-700 mb-1">
                                Standard Edition (Instant Unlock)
                            </div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-mono font-extrabold text-zinc-950">$29</span>
                                <span className="text-sm text-zinc-500 line-through font-mono">$299 value</span>
                                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                                    90% Off Impulse Price
                                </span>
                            </div>
                            <p className="text-xs text-zinc-600 font-medium mb-4">
                                Includes all 5 core Excel/CSV spreadsheets, CFO board deck templates, 30-day turnaround checklist, executive career playbook, and <strong>Live Interactive Workspace (`/workspace`)</strong> access.
                            </p>
                            <CheckoutButton
                                productId="premium_guide_29"
                                label="Unlock Operating Kit Now - $29 →"
                                variant="primary"
                            />
                        </div>

                        <div className="border-t md:border-t-0 md:border-l border-zinc-200 pt-6 md:pt-0 md:pl-6">
                            <div className="text-xs font-mono font-bold uppercase text-amber-700 mb-1">
                                Complete Executive Bundle (+13 Deep-Dive Playbooks)
                            </div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-mono font-extrabold text-zinc-950">$79</span>
                                <span className="text-sm text-zinc-500 line-through font-mono">$649 value</span>
                                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                                    Most Popular
                                </span>
                            </div>
                            <p className="text-xs text-zinc-600 font-medium mb-4">
                                Everything in the $29 Operating Kit + Live Workspace PLUS all 13 specialized executive guides (PE Due Diligence, Consumption Pricing, Cloud FinOps, Agentic AI Costs &amp; more).
                            </p>
                            <CheckoutButton
                                productId="premium_guide_79"
                                label="Get Complete Kit + All 13 Playbooks - $79 →"
                                variant="secondary"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-600 font-medium pt-4 border-t border-zinc-200">
                        <span>✓ Instant Download (.XLSX, .CSV, .MD) + Live Browser Studio (<Link href="/workspace" className="text-violet-700 font-bold underline">Preview /workspace</Link>)</span>
                        <span>✓ Expense-Ready Stripe Receipt Included</span>
                        <span>✓ Built by Richard Ewing (Product Economist, CS + Finance MBA)</span>
                    </div>
                </section>

                <ProofRail />
                <div className="my-8">
                    <AsSeenInBar />
                </div>

                {/* Live Interactive Preview */}
                <ToolkitInteractivePreview />

                {/* Detailed Breakdown of All 5 Actionable Modules */}
                <section className="my-16">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-700 block mb-2">
                            What Is Inside The Box
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-extrabold text-zinc-950">
                            5 Plug-and-Play Instruments You Can Use in Monday&apos;s Meeting
                        </h2>
                        <p className="text-zinc-700 mt-3 text-base font-medium">
                            Every tool in this kit is designed to do one thing: make you the smartest, most financially grounded leader in the room.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {kitModules.map((mod) => (
                            <div
                                key={mod.number}
                                className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-violet-400 transition-colors"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-zinc-950 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                                            {mod.number}
                                        </span>
                                        <div>
                                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-700 block">
                                                {mod.badge}
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-zinc-950">
                                                {mod.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950 font-semibold mb-4">
                                    <strong>The Problem It Solves:</strong> {mod.problemSolved}
                                </div>

                                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium mb-6">
                                    {mod.description}
                                </p>

                                <div className="border-t border-zinc-200 pt-4">
                                    <div className="text-xs font-mono font-bold uppercase text-zinc-500 mb-3">
                                        Included Deliverables:
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {mod.includedFiles.map((file, i) => (
                                            <div key={i} className="flex items-start gap-2 text-xs font-bold text-zinc-900 bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{file}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom Conversion Block */}
                <section className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl border border-zinc-800">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                        1,000,000x Value • Zero Consulting Bloat
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-grotesk font-extrabold mb-4">
                        Get the Complete Product &amp; AI Economist Operating Kit Today
                    </h2>
                    <p className="text-zinc-300 max-w-2xl mx-auto text-base mb-8 font-medium">
                        Spend $29 once and walk into your next CFO review, board meeting, or VP of Product interview with the exact math that built a $25M ARR product line.
                    </p>

                    <div className="max-w-md mx-auto space-y-4">
                        <CheckoutButton
                            productId="premium_guide_29"
                            label="Download Operating Kit ($29) →"
                            variant="secondary"
                        />
                        <div className="text-xs text-zinc-400 font-mono">
                            Need hands-on help applying these models to your company?{' '}
                            <Link href="/services" className="text-emerald-400 underline font-bold">
                                See 1-on-1 Advisory &amp; Turnaround Sprints →
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
