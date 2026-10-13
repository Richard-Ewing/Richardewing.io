import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import EcosystemMap from '@/app/components/EcosystemMap';
import PrincipalContent from '../components/principal-content';
import ExecutiveSummaryBox from '../components/ExecutiveSummaryBox';
import FAQItem from '@/app/components/FAQItem';
import AsSeenInBar from '@/components/social-proof/AsSeenInBar';
import ProductBridgeCard from '@/app/components/ProductBridgeCard';
import { GooglePreferredBadge } from '../components/GooglePreferredBadge';

export const metadata: Metadata = {
    title: 'About Richard Ewing | Product & AI Economist',
    description: 'Richard Ewing is a Product & AI Economist ($0 to $25M ARR at Tyler Technologies, +200% YoY P&L turnaround, CS + Finance MBA) and founder of Exogram & CareerWin.',
    alternates: {
        canonical: 'https://www.richardewing.io/about',
    },
    openGraph: {
        title: 'About Richard Ewing | Product & AI Economist ($0 to $25M ARR)',
        description: 'Product & AI Economist and founder of Exogram and CareerWin. Scales enterprise SaaS P&Ls, cuts Zombie Feature waste, and governs production AI unit economics.',
        url: 'https://www.richardewing.io/about',
        type: 'profile',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Richard Ewing | Product & AI Economist',
        description: 'Product & AI Economist ($0 to $25M ARR, CS + Finance MBA) and founder of Exogram & CareerWin.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.richardewing.io/#person',
    'name': 'Richard Ewing',
    'jobTitle': 'Product & AI Economist',
    'description': 'Enterprise Product & AI Economist ($0 to $25M ARR at Tyler Technologies, $20M P&L turnaround +200% YoY, CS + Finance MBA) and founder of Exogram and CareerWin. Advises CEOs, CFOs, CPOs, and PE boards on product P&L turnarounds, pricing architecture, and AI unit economics.',
    'url': 'https://www.richardewing.io',
    'image': 'https://www.richardewing.io/assets/images/headshot.jpg',
    'sameAs': [
        'https://www.linkedin.com/in/richard-ewing-mba/',
        'https://x.com/Richard85626233',
        'https://www.mindtheproduct.com/profile/richard-ewing'
    ],
    'knowsAbout': [
        'Product Economics',
        'Product P&L Management',
        'SaaS Pricing & Packaging',
        'AI Economics',
        'R&D Auditing',
        'Technical Debt Valuation',
        'AI Unit Economics',
        'AI Capital Auditing',
        'Capital Allocation',
        'Engineering ROI',
        'AI Hallucination Debt',
        'Zombie Infrastructure',
        'Deterministic AI Infrastructure',
        'AI Cost Governance',
        'Gross Margin Preservation',
        'Runtime Admissibility'
    ],
    'founder': [
        {
            '@type': 'Organization',
            'name': 'Exogram',
            'url': 'https://exogram.ai',
            'sameAs': ['https://www.linkedin.com/company/exogram-ai/']
        },
        {
            '@type': 'Organization',
            'name': 'CareerWin',
            'url': 'https://careerwin.ai'
        }
    ],
    'brand': {
        '@type': 'Brand',
        'name': 'The Product & AI Economist',
        'url': 'https://www.richardewing.io'
    }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <div className="page-container max-w-4xl mx-auto">
                
                {/* Breadcrumb */}
                <div className="mb-10 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Executive</span><span>/</span><span className="text-cyan-900 font-extrabold">About The Principal • Product &amp; AI Economist</span>
                </div>

                {/* Section 1: The Problem */}
                <section className="mb-16 border-b border-zinc-400 pb-16">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Every product is a P&amp;L. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">AI just made bad unit economics fatal.</span>
                    </h1>
                    <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-3xl">
                        I am a <strong>Product Economist</strong> (with a sharp specialty in <strong>AI Unit Economics</strong>). Over the past 15+ years, I have scaled enterprise B2B SaaS from <strong>$0 to $25M ARR</strong> at Tyler Technologies, turned around a <strong>$20M product P&amp;L (+200% YoY)</strong>, cut <strong>$5M in negative-margin feature waste</strong>, and built three live AI software platforms.
                    </p>
                </section>

                <div className="mb-16">
                    <AsSeenInBar />
                </div>

                {/* Why This Exists Section (Worldview Compression Component) */}
                <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-4">Why &ldquo;Product Economist&rdquo; Is the Master Discipline</h3>
                    <p className="text-zinc-900 leading-relaxed font-semibold text-sm sm:text-base">
                        Most product leaders are trained to manage Agile backlogs and story points while ignoring COGS, gross margin, and engineering payroll carry cost. And most AI discussions focus on model capabilities rather than what happens to your P&amp;L after deployment. With a B.S. in Computer Science and an MBA in Finance, my work unites both: treating every product roadmap, pricing tier, and AI workflow as a capital allocation system.
                    </p>
                </section>

                {/* Section 2: The Framework */}
                <section className="mb-16 border-b border-zinc-300 pb-12">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-4">The Solution: One Intelligence Architecture</h2>
                    <p className="text-sm text-zinc-900 leading-relaxed font-semibold mb-6">
                        To address the operational entropy of scaling models, my research is distilled into a universal five-layer intelligence architecture: **The Ledger**, **Context**, **Meaning**, **Inference Management**, and **Admissibility**. 
                        This core engine powers **Exogram** as an enterprise runtime control plane, drives **CareerWin** as a human work verification platform, and guides our executive advisory practice for enterprise boards and PE firms.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/framework" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm uppercase tracking-wider shadow transition-colors">
                            Explore The Framework &rarr;
                        </Link>
                        <Link href="/start-here" className="px-6 py-3 bg-white border border-zinc-300 text-zinc-950 hover:bg-zinc-50 font-bold rounded-xl text-sm uppercase tracking-wider transition-colors">
                            Follow Onboarding Sequence &rarr;
                        </Link>
                        <Link href="/careers" className="px-6 py-3 bg-white border border-zinc-300 text-zinc-950 hover:bg-zinc-50 font-bold rounded-xl text-sm uppercase tracking-wider transition-colors">
                            2026 Career Pathfinder &rarr;
                        </Link>
                        <Link href="/book" className="px-6 py-3 bg-white border border-zinc-300 text-zinc-950 hover:bg-zinc-50 font-bold rounded-xl text-sm uppercase tracking-wider transition-colors">
                            The Pragmatic AI Builder &rarr;
                        </Link>
                    </div>
                </section>

                {/* Section 3: The Evidence (Ecosystem Map) */}
                <section className="mb-16 border-b border-zinc-300 pb-12">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-4">The Evidence</h2>
                    <p className="text-sm text-zinc-900 leading-relaxed font-semibold mb-6">
                        This research program is verified across multi-year essays published in major tech outlets, open-source repositories, educational courses, and running SaaS systems.
                    </p>
                    <EcosystemMap />
                    <div className="text-center mt-6 flex flex-wrap justify-center items-center gap-4">
                        <Link href="/research" className="text-xs font-bold font-mono text-cyan-900 hover:text-cyan-950 uppercase tracking-widest">
                            View Chronological Research Timeline &rarr;
                        </Link>
                        <span className="text-zinc-400 font-bold">•</span>
                        <Link href="/articles/frameworks/technical-insolvency-date" className="text-xs font-bold font-mono text-indigo-900 hover:text-indigo-950 uppercase tracking-widest">
                            Technical Insolvency Date Spec &rarr;
                        </Link>
                        <span className="text-zinc-400 font-bold">•</span>
                        <Link href="/articles/frameworks/shadow-agents" className="text-xs font-bold font-mono text-purple-900 hover:text-purple-950 uppercase tracking-widest">
                            Shadow Agents Spec &rarr;
                        </Link>
                    </div>
                </section>

                {/* Section 3.5: Companies Founded by Richard Ewing */}
                <section className="mb-16 border-b border-zinc-300 pb-12">
                    <ProductBridgeCard />
                </section>

                {/* Section 4: Background (Biographical Details) */}
                <section className="mb-20 pt-8">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Background & Credentials</h2>
                    <div className="mb-8">
                        <ExecutiveSummaryBox
                            whatBreaks="R&D capital reported as innovation when 73% funds maintenance"
                            whatItCosts="$1.2M+ annually in misallocated engineering spend"
                            whatCausesIt="No financial translation layer between engineering and the board"
                            whatFixesIt={{ label: 'R&D Capital Audit', href: '/services' }}
                            ctaLabel="Book an Audit"
                            ctaHref='/services'
                        />
                    </div>
                    <PrincipalContent />
                </section>

                {/* FAQ Section */}
                <section className="mb-16 border-t border-zinc-300 pt-12">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            'mainEntity': [
                                {
                                    '@type': 'Question',
                                    'name': 'What is AI governance?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'AI governance is the system of constraints, cost caps, and verification policies that prevent probabilistic models from causing margin erosion, security breaches, or regulatory liabilities. It turns volatile models into predictable enterprise assets operating under strict runtime control.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    'name': 'What is an AI Economist?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'An AI Economist serves as the translation layer between engineering output and CFO-level financial outcomes, auditing R&D spend and optimizing unit economics.'
                                    }
                                }
                            ]
                        }) }}
                    />
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <FAQItem 
                            question="What is AI governance?" 
                            answer="AI governance is the system of constraints, cost caps, and verification policies that prevent probabilistic models from causing margin erosion, security breaches, or regulatory liabilities. It turns volatile models into predictable enterprise assets operating under strict runtime control."
                        />
                        <FAQItem 
                            question="What is an AI Economist?" 
                            answer="An AI Economist serves as the translation layer between engineering output and CFO-level financial outcomes, auditing R&D spend and optimizing unit economics."
                        />
                    </div>
                </section>

                {/* Google Preferred Source Official Credential */}
                <GooglePreferredBadge variant="card" className="my-16" />

                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
