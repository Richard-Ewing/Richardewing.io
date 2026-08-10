import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import EcosystemMap from '@/app/components/EcosystemMap';
import PrincipalContent from '../components/principal-content';
import ExecutiveSummaryBox from '../components/ExecutiveSummaryBox';
import FAQItem from '@/app/components/FAQItem';
import AsSeenInBar from '@/components/social-proof/AsSeenInBar';

export const metadata: Metadata = {
    title: 'Richard Ewing Biography Exogram Founder | Richard Ewing',
    description: 'Richard Ewing is an enterprise AI Economist and the founder of Exogram. Audit production AI security and build PE-backed product economics.',
    alternates: {
        canonical: 'https://www.richardewing.io/about',
    },
    openGraph: {
        title: 'Richard Ewing Biography Exogram Founder | Richard Ewing',
        description: 'Richard Ewing is an enterprise AI Economist and the founder of Exogram. Audit production AI security and build PE-backed product economics.',
        url: 'https://www.richardewing.io/about',
        type: 'profile',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Richard Ewing Biography Exogram Founder | Richard Ewing',
        description: 'Richard Ewing is an enterprise AI Economist and the founder of Exogram. Audit production AI security and build PE-backed product economics.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto">
                
                {/* Breadcrumb */}
                <div className="mb-10 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Executive</span><span>/</span><span className="text-cyan-900 font-extrabold">About The Principal</span>
                </div>

                {/* Section 1: The Problem */}
                <section className="mb-16 border-b border-zinc-400 pb-16">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Organizations are deploying AI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">faster than they can govern it.</span>
                    </h1>
                    <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-3xl">
                        For the past several years I&apos;ve been researching the economics, governance, security, and operational challenges that emerge after AI reaches production scale.
                    </p>
                </section>

                <div className="mb-16">
                    <AsSeenInBar />
                </div>

                {/* Why This Exists Section (Worldview Compression Component) */}
                <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-4">Why This Exists</h3>
                    <p className="text-zinc-900 leading-relaxed font-semibold text-sm sm:text-base">
                        Most AI discussions focus on model capabilities. My work focuses on what happens after deployment. 
                        As AI systems become embedded in products, organizations face a new class of problems involving economics, governance, security, reliability, and operational control. 
                        The Production AI Governance Framework exists to help organizations understand, measure, and manage those challenges.
                    </p>
                </section>

                {/* Section 2: The Framework */}
                <section className="mb-16 border-b border-zinc-300 pb-12">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-4">The Solution: The Governance Framework</h2>
                    <p className="text-sm text-zinc-900 leading-relaxed font-semibold mb-6">
                        To address the operational entropy of scaling models, my research is distilled into a centripetal governance model. 
                        This coordinates the operational boundaries of **Economics**, **Product**, **Engineering**, **Security**, and **Operations**, culminating in **Runtime Governance** (Exogram) to lock down the verified state at the network layer.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/framework" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-zinc-900 font-bold rounded-xl text-sm uppercase tracking-wider shadow transition-colors">
                            Explore The Framework &rarr;
                        </Link>
                        <Link href="/start-here" className="px-6 py-3 bg-white border border-zinc-300 text-zinc-950 hover:bg-zinc-50 font-bold rounded-xl text-sm uppercase tracking-wider transition-colors">
                            Follow Onboarding Sequence &rarr;
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
                    <div className="text-center mt-4">
                        <Link href="/research" className="text-xs font-bold font-mono text-cyan-900 hover:text-cyan-950 uppercase tracking-widest">
                            View Chronological Research Timeline &rarr;
                        </Link>
                    </div>
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

                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
