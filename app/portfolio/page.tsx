import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Award, TrendingUp, ShieldCheck, Briefcase, BookOpen, Cpu, GraduationCap, CheckCircle2, Mail } from 'lucide-react';
import AsSeenInBar from '@/components/social-proof/AsSeenInBar';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import PortfolioInteractiveShowcase from './PortfolioInteractiveShowcase';

export const metadata: Metadata = {
    title: 'Executive Product Economist & AI Builder Portfolio | Richard Ewing (CPO / VP)',
    description: 'Executive portfolio of Richard Ewing, Product & AI Economist: 15+ years scaling B2B SaaS ($0 to $25M ARR at Tyler Technologies, +200% YoY turnaround), CS + Finance MBA, and founder of Exogram & CareerWin.',
    alternates: {
        canonical: 'https://www.richardewing.io/portfolio',
    },
    openGraph: {
        title: 'Richard Ewing | Product Economist, CPO/VP Product & AI Systems Builder',
        description: '$0 to $25M ARR enterprise product scale, +200% YoY P&L turnaround, $5M cost reduction, 174+ published works, and 3 live AI platforms.',
        url: 'https://www.richardewing.io/portfolio',
        type: 'profile',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Richard Ewing | Executive Product Economist & AI Builder Portfolio',
        description: '$0 to $25M ARR enterprise product scale, +200% YoY P&L turnaround, CS + Finance MBA, and founder of Exogram.ai & CareerWin.ai.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const targetRoles = [
    'Chief Product Officer (CPO)',
    'VP of Product',
    'Product & AI Economist',
    'Head of AI Product',
    'Fractional CPO & Board Advisor',
];

const featuredArticles = [
    {
        outlet: 'CIO.com',
        badge: 'Enterprise FinOps & AI',
        title: 'Your Claude API Bill Is Higher Than Your Revenue: Why Simple Python Tasks Are Blowing Up AI Costs',
        takeaway: 'How unmonitored agent loops and frontier model over-provisioning destroy SaaS gross margins - and how to route tasks deterministically.',
        url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html',
    },
    {
        outlet: 'Mind the Product',
        badge: 'Product P&L Leadership',
        title: 'The 3 Financial Metrics Every Product Manager Needs on Their Scorecard',
        takeaway: 'Why story points and velocity fail in the boardroom, and how to align product teams around COGS efficiency, Net Dollar Retention, and payback.',
        url: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/',
    },
    {
        outlet: 'CIO.com',
        badge: 'R&D Capital Allocation',
        title: 'The Innovation Tax Audit: Is Your R&D Actually Just OpEx?',
        takeaway: 'Exposing how up to 73% of enterprise engineering budgets quietly fund legacy maintenance while being reported to the board as innovation.',
        url: 'https://www.cio.com/article/4158459/the-innovation-tax-audit-is-your-rd-actually-just-opex.html',
    },
    {
        outlet: 'Built In (Editor\'s Pick)',
        badge: 'Roadmap Turnarounds',
        title: 'Real Innovation Requires Deleting Code',
        takeaway: 'The operational playbook for identifying and sunsetting negative-carry "zombie features" to recover 30%+ engineering capacity.',
        url: 'https://builtin.com/articles/innovation-requires-deleting-code',
    },
    {
        outlet: 'CIO.com',
        badge: 'Executive Alignment',
        title: 'Why Your CFO Hates Your Agile Transformation',
        takeaway: 'Bridging the translation gap between engineering sprint rituals and CFO-level capital accountability.',
        url: 'https://www.cio.com/article/4143737/why-your-cfo-hates-your-agile-transformation.html',
    },
    {
        outlet: 'Built In',
        badge: 'AI Unit Economics',
        title: 'The Cost of Predictivity: Why AI Products Fail the Business Test',
        takeaway: 'Modeling the exact point where probabilistic model verification labor and inference costs exceed customer willingness to pay.',
        url: 'https://builtin.com/articles/ai-product-business-test',
    },
];

export default function PortfolioPage() {
    const profileSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
            '@type': 'Person',
            name: 'Richard Ewing',
            jobTitle: 'Enterprise Product Executive & AI Economist',
            description: '15+ years enterprise product leadership scaling B2B SaaS from $0 to $25M ARR (Tyler Technologies), driving 200% YoY P&L turnarounds, and architecting Exogram.ai and CareerWin.ai. B.S. in Computer Science and MBA in Finance.',
            url: 'https://www.richardewing.io/portfolio',
            sameAs: [
                'https://www.linkedin.com/in/richard-ewing-mba/',
                'https://www.mindtheproduct.com/profile/richard-ewing',
                'https://builtin.com/authors/richard-ewing',
            ],
            alumniOf: [
                {
                    '@type': 'CollegeOrUniversity',
                    name: 'City University of Seattle',
                },
            ],
        },
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
            />

            <div className="page-container max-w-6xl mx-auto px-6">
                {/* Top Status & Breadcrumb */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>/</span>
                        <span className="text-violet-700 font-extrabold">Executive &amp; Builder Portfolio</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-mono font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        <span>Available for Executive Leadership, Board Advisory &amp; Strategic Partnerships</span>
                    </div>
                </div>

                {/* Section 01: Executive Dossier Hero */}
                <section className="bg-white border-2 border-zinc-900 rounded-3xl p-8 sm:p-12 shadow-xl mb-12 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-8 space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {targetRoles.map((role) => (
                                    <span
                                        key={role}
                                        className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-zinc-100 border border-zinc-300 text-zinc-900"
                                    >
                                        {role}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-grotesk font-extrabold text-zinc-950 tracking-tight leading-[1.1]">
                                I Don&apos;t Just Manage Backlogs.{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-indigo-700 to-purple-700">
                                    I Scale P&amp;Ls and Ship Production AI.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-medium">
                                Most executives speak either Tech or Finance. With a <strong>B.S. in Computer Science</strong>, an <strong>MBA in Finance</strong>, and <strong>15+ years leading enterprise product organizations</strong> (including scaling 0-to-1 SaaS to <strong>$25M ARR at Tyler Technologies</strong>), I sit at the exact intersection of <strong>CPO strategy, CFO rigor, and hands-on AI architecture</strong>.
                            </p>

                            {/* Credentials Strip */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
                                    <GraduationCap className="w-5 h-5 text-violet-700 shrink-0" />
                                    <div className="text-xs">
                                        <div className="font-bold text-zinc-950">CS + Finance MBA</div>
                                        <div className="text-zinc-600">Technical &amp; Financial Fluency</div>
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
                                    <TrendingUp className="w-5 h-5 text-emerald-700 shrink-0" />
                                    <div className="text-xs">
                                        <div className="font-bold text-zinc-950">$0 → $25M ARR</div>
                                        <div className="text-zinc-600">Tyler Technologies Scale</div>
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
                                    <Cpu className="w-5 h-5 text-purple-700 shrink-0" />
                                    <div className="text-xs">
                                        <div className="font-bold text-zinc-950">3 Live AI Platforms</div>
                                        <div className="text-zinc-600">Exogram • CareerWin • 25 Tools</div>
                                    </div>
                                </div>
                            </div>

                            {/* Primary Action Bar */}
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <a
                                    href="mailto:richardewing@exogram.ai?subject=Executive%20Leadership%20%2F%20Advisory%20Conversation"
                                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                                >
                                    <Mail className="w-4 h-4 text-emerald-400" />
                                    Schedule Executive Intro
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/richard-ewing-mba/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-zinc-50 text-zinc-950 border-2 border-zinc-900 font-bold text-xs uppercase tracking-wider transition-all"
                                >
                                    LinkedIn Profile (11.1K+) <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                                <Link
                                    href="/toolkit"
                                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-violet-700 hover:text-violet-950 underline px-2 py-2"
                                >
                                    Inspect My P&amp;L Operating Kit ($29) →
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Executive Portrait & Dossier Card */}
                        <div className="lg:col-span-4">
                            <div className="bg-zinc-950 text-white rounded-3xl p-6 border border-zinc-800 shadow-2xl">
                                <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-violet-500 shadow-lg mb-5">
                                    <Image
                                        src="/assets/headshot.jpg"
                                        alt="Richard Ewing - Enterprise Product Executive & AI Economist"
                                        fill
                                        className="object-cover"
                                        sizes="128px"
                                        priority
                                    />
                                </div>
                                <div className="text-center mb-5">
                                    <h2 className="text-xl font-grotesk font-bold text-white">Richard Ewing, MBA</h2>
                                    <p className="text-xs font-mono text-violet-400 uppercase tracking-wider mt-1">
                                        Product Executive &amp; AI Economist
                                    </p>
                                </div>
                                <div className="space-y-2.5 text-xs border-t border-zinc-800 pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Experience:</span>
                                        <span className="font-bold text-white">15+ Years Enterprise Product</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Prior Scale:</span>
                                        <span className="font-bold text-emerald-400">Tyler Technologies ($25M ARR)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Ventures Built:</span>
                                        <span className="font-bold text-white">Exogram.ai &amp; CareerWin.ai</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">Published Corpus:</span>
                                        <span className="font-bold text-cyan-400">{RESEARCH_CORPUS.length}+ Articles &amp; Papers</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-400">AI Search Authority:</span>
                                        <span className="font-bold text-amber-400">778+ Verified Citations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* As Seen In Bar */}
                <div className="mb-14">
                    <AsSeenInBar />
                </div>

                {/* Section 02: Verified Corporate P&L & Turnaround Scoreboard */}
                <section className="mb-20">
                    <div className="mb-8">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-700 block mb-1">
                            01 / Verified Commercial Track Record
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-extrabold text-zinc-950">
                            Hard P&amp;L Outcomes Across Enterprise SaaS &amp; AI
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                                    0-to-1 Enterprise Scale
                                </span>
                                <div className="text-4xl font-mono font-extrabold text-zinc-950 mt-4 mb-2">
                                    $0 → $25M
                                </div>
                                <div className="text-sm font-bold text-zinc-900 mb-2">
                                    Annual Recurring Revenue (ARR)
                                </div>
                                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                                    Built and scaled a 0-to-1 enterprise SaaS product line at Tyler Technologies through disciplined enterprise packaging, roadmap execution, and customer expansion.
                                </p>
                            </div>
                            <div className="text-[11px] font-mono font-bold text-zinc-500 mt-4 pt-3 border-t border-zinc-200">
                                Verified Corporate Outcome
                            </div>
                        </div>

                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-violet-700 bg-violet-100 px-2.5 py-1 rounded-full">
                                    P&amp;L Turnaround
                                </span>
                                <div className="text-4xl font-mono font-extrabold text-zinc-950 mt-4 mb-2">
                                    +200% YoY
                                </div>
                                <div className="text-sm font-bold text-zinc-900 mb-2">
                                    Revenue Resurrection to $20M
                                </div>
                                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                                    Inherited a stagnant product P&amp;L, restructured tier pricing and sales alignment, and reallocated engineering capacity to high-margin customer problems.
                                </p>
                            </div>
                            <div className="text-[11px] font-mono font-bold text-zinc-500 mt-4 pt-3 border-t border-zinc-200">
                                Turnaround Execution
                            </div>
                        </div>

                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full">
                                    Capital Efficiency
                                </span>
                                <div className="text-4xl font-mono font-extrabold text-zinc-950 mt-4 mb-2">
                                    $5.0M Saved
                                </div>
                                <div className="text-sm font-bold text-zinc-900 mb-2">
                                    Strategic Cost &amp; Debt Reduction
                                </div>
                                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                                    Eliminated negative-carry &ldquo;zombie features&rdquo; and redundant infrastructure spend while simultaneously accelerating core roadmap shipping velocity.
                                </p>
                            </div>
                            <div className="text-[11px] font-mono font-bold text-zinc-500 mt-4 pt-3 border-t border-zinc-200">
                                Margin Preservation
                            </div>
                        </div>

                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100 px-2.5 py-1 rounded-full">
                                    Category Authority
                                </span>
                                <div className="text-4xl font-mono font-extrabold text-zinc-950 mt-4 mb-2">
                                    {RESEARCH_CORPUS.length}+ Works
                                </div>
                                <div className="text-sm font-bold text-zinc-900 mb-2">
                                    778+ AI Citations • 11.1K+ Audience
                                </div>
                                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                                    Published across CIO.com, Built In (Editor&apos;s Pick), Mind the Product, and HackerNoon. Creator of the Product Debt Index (PDI) and AI Unit Economics Benchmark.
                                </p>
                            </div>
                            <div className="text-[11px] font-mono font-bold text-zinc-500 mt-4 pt-3 border-t border-zinc-200">
                                Industry Thought Leader
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 03: Interactive Showcase of 3 Shipped Software Platforms */}
                <section className="mb-20">
                    <div className="mb-8">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-700 block mb-1">
                            02 / Hands-On Builder Proof (Click to Test Live)
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-extrabold text-zinc-950">
                            Three Production Software Ecosystems I Architected &amp; Shipped
                        </h2>
                        <p className="text-zinc-700 mt-2 text-base font-medium max-w-3xl">
                            Most product executives haven&apos;t shipped a line of production architecture in a decade. I personally architected and shipped all three of these live platforms from zero.
                        </p>
                    </div>

                    <PortfolioInteractiveShowcase />
                </section>

                {/* Section 04: The First 90 Days as Your CPO / VP of Product / Head of AI */}
                <section className="mb-20 bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 shadow-sm">
                    <div className="max-w-3xl mb-10">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-700 block mb-1">
                            03 / Executive Operating Cadence
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-extrabold text-zinc-950">
                            How I Run the First 90 Days as CPO, VP of Product, or Head of AI
                        </h2>
                        <p className="text-zinc-700 mt-2 text-base font-medium">
                            When a CEO, Board, or Private Equity Operating Partner brings me in to lead Product or AI, we don&apos;t spend 6 months &ldquo;getting up to speed.&rdquo; Here is the exact 90-day sequence:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                            <div className="text-xs font-mono font-bold uppercase text-rose-700 mb-2">
                                Days 01 - 30 • Forensic Baseline
                            </div>
                            <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">
                                Audit the Product P&amp;L, AI Bill &amp; Backlog
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                    <span>Map every engineering squad and cloud/LLM dollar against actual feature adoption and ARR.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                    <span>Identify the P90 power-user accounts and runaway prompts compressing gross margin.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                    <span>Interview top customers, churned accounts, Sales, CS, and Senior Engineers.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                            <div className="text-xs font-mono font-bold uppercase text-violet-700 mb-2">
                                Days 31 - 60 • Structural Surgery
                            </div>
                            <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">
                                Kill Zombie Features &amp; Fix Pricing Tiers
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                                    <span>Deprecate or freeze bottom-decile features that consume 30%+ of maintenance capacity.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                                    <span>Restructure AI packaging (seat + usage credit caps + model routing) to lock in a 75%+ margin floor.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                                    <span>Eliminate performative Agile ceremonies and align squads around commercial KPIs.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                            <div className="text-xs font-mono font-bold uppercase text-emerald-700 mb-2">
                                Days 61 - 90 • Compounding Velocity
                            </div>
                            <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">
                                Ship Revenue-Driving AI &amp; Board Scorecards
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Redirect recovered engineering capacity into high-NDR customer workflows that expand ARR.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Install a permanent monthly Product P&amp;L scorecard shared between Product, Engineering, and Finance.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Deliver the quarterly Board &amp; Investor roadmap backed by hard payback math.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 05: Selected Flagship Publications ("How I Think") */}
                <section className="mb-20">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-700 block mb-1">
                                04 / Published Executive Writing ({RESEARCH_CORPUS.length}+ Works)
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-grotesk font-extrabold text-zinc-950">
                                Selected Essays in CIO.com, Mind the Product &amp; Built In
                            </h2>
                        </div>
                        <Link
                            href="/research/publications"
                            className="text-xs font-mono font-bold text-violet-700 hover:underline"
                        >
                            View Full {RESEARCH_CORPUS.length}+ Publications Catalog →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredArticles.map((art, i) => (
                            <a
                                key={i}
                                href={art.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white border border-zinc-300 hover:border-zinc-900 rounded-3xl p-6 shadow-sm transition-all flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase mb-3">
                                        <span className="text-violet-700">{art.outlet}</span>
                                        <span className="text-zinc-500">{art.badge}</span>
                                    </div>
                                    <h3 className="text-lg font-grotesk font-bold text-zinc-950 group-hover:text-violet-700 transition-colors leading-snug mb-3">
                                        {art.title} ↗
                                    </h3>
                                    <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                                        {art.takeaway}
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-zinc-100 text-xs font-mono font-bold text-zinc-900 group-hover:text-violet-700">
                                    Read Published Article ↗
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Section 06: 3-Door "How We Can Work Together" Matrix */}
                <section className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                            05 / Direct Engagement Paths
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-extrabold">
                            Three Ways We Can Work Together
                        </h2>
                        <p className="text-zinc-400 mt-2 text-base font-medium">
                            No gatekeepers. Pick the path that matches what you are building or hiring for right now.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Door 1: Executive Leadership */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono font-bold uppercase text-emerald-400 mb-2">
                                    01 • Full-Time / Fractional Executive
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-white mb-3">
                                    CPO, VP of Product, Head of AI, or Fractional Leadership
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                                    Hiring an executive who can own the product P&amp;L, align with the CFO and CTO, and ship real AI products that expand gross margin? Let&apos;s schedule a direct conversation.
                                </p>
                            </div>
                            <a
                                href="mailto:richardewing@exogram.ai?subject=Executive%20Leadership%20Opportunity%20(CPO%20%2F%20VP%20Product%20%2F%20Head%20of%20AI)"
                                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-xl text-center transition-colors block"
                            >
                                Email Richard Directly →
                            </a>
                        </div>

                        {/* Door 2: Operating Kit & Product P&L Advisory */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono font-bold uppercase text-violet-400 mb-2">
                                    02 • Templates &amp; 1-on-1 Strategy
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-white mb-3">
                                    The $29 Operating Kit &amp; Product P&amp;L Tear-Downs
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                                    Download my 5 working P&amp;L spreadsheets, AI pricing stress-testers, and 12-slide CFO board decks for $29 - or book a live 1-on-1 Product &amp; Pricing Tear-Down session.
                                </p>
                            </div>
                            <div className="space-y-2.5">
                                <Link
                                    href="/toolkit"
                                    className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center transition-colors block"
                                >
                                    Get the $29 Operating Kit →
                                </Link>
                                <Link
                                    href="/services"
                                    className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs uppercase tracking-wider rounded-xl text-center transition-colors block"
                                >
                                    View Advisory &amp; Sprints →
                                </Link>
                            </div>
                        </div>

                        {/* Door 3: Sponsored Research & 0-to-1 AI Builds */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono font-bold uppercase text-amber-400 mb-2">
                                    03 • Media, Research &amp; 0-to-1 Builds
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-white mb-3">
                                    Sponsored Benchmarks, Analyst Briefings &amp; AI Prototyping
                                </h3>
                                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                                    Partner on an independent benchmark study, newsletter spotlight (11.1K+ LinkedIn, 1.4K+ subscribers), or a 0-to-1 interactive diagnostic and AI product sprint.
                                </p>
                            </div>
                            <a
                                href="mailto:richardewing@exogram.ai?subject=Sponsored%20Research%20%2F%200-to-1%20AI%20Build%20Inquiry"
                                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-xl text-center transition-colors block"
                            >
                                Partner With Richard →
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
