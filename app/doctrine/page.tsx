import React from 'react';
import type { Metadata } from 'next';
import ExecutiveSummaryBox from '../components/ExecutiveSummaryBox';
import FAQItem from '../components/FAQItem';

export const metadata: Metadata = {
    title: 'The Doctrine of Sovereignty & Strategy Diagnostics | Richard Ewing',
    description: 'The Doctrine of Sovereignty provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: { canonical: 'https://www.richardewing.io/doctrine' },
    openGraph: {
        title: 'The Doctrine of Sovereignty | Richard Ewing',
        description: 'Explore the immutable laws of software solvency: Capital Allocation > Agile Theater.',
        url: 'https://www.richardewing.io/doctrine',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Doctrine of Sovereignty | Richard Ewing',
        description: 'Explore the immutable laws of software solvency: Capital Allocation > Agile Theater.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

export default function DoctrinePage() {
    return (
        <main className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    'mainEntity': [
                        {
                            '@type': 'Question',
                            'name': 'What is the Doctrine of Sovereignty?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'It is a set of core principles defining the methodology of the AI Economist, emphasizing capital yield and deterministic execution over agile processes.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'What is the Technical Insolvency Date?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'The Technical Insolvency Date is the specific future quarter when an organization\'s accumulated technical debt maintenance consumes 100% of engineering capacity, leaving zero time for product innovation.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'What is the Innovation Tax?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'The Innovation Tax is the hidden operational cost of software maintenance that is misreported as new innovation investment in financial and board reporting.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'How does the doctrine prevent margin collapse?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'By establishing strict gross margin cost ceilings and implementing deterministic runtime security boundaries before probabilistic models execute actions.'
                            }
                        }
                    ]
                }) }}
            />
            <div className="page-container">

                {/* Hero */}
                <section className="section-lg">
                    <div className="max-w-3xl">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-4">The Doctrine</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
                            Sovereignty in<br />
                            <span className="text-cyan-900 font-extrabold font-semibold">AI Economics.</span>
                        </h1>
                        <p className="text-zinc-950 font-bold text-lg">
                            The following principles govern the methodology of the AI Economist.
                            They are not suggestions; they are the <span className="text-zinc-900">immutable laws</span> of software solvency.
                        </p>
                    </div>
                </section>

                <ExecutiveSummaryBox
                    whatBreaks="AI systems that cannot prove what is true"
                    whatItCosts="95% of GenAI pilots fail to reach production (MIT)"
                    whatCausesIt="No verification infrastructure between model output and action"
                    whatFixesIt={{ label: 'See the Verification Architecture', href: '/exogram/architecture' }}
                />

                {/* Principles - 2x2 */}
                <section className="section">
                    <div className="grid-2 max-w-4xl">

                        <div className="card">
                            <div className="text-xs font-bold text-zinc-900 font-bold mb-3">01</div>
                            <h3 className="text-lg font-semibold text-zinc-950 mb-3">Capital Allocation {'>'} Agile Theater</h3>
                            <p className="text-zinc-950 font-bold text-sm">
                                We do not measure success by velocity, story points, or features shipped.
                                We measure success by <span className="text-zinc-900">Return on Invested Capital (ROIC)</span>.
                            </p>
                        </div>

                        <div className="card">
                            <div className="text-xs font-bold text-zinc-900 font-bold mb-3">02</div>
                            <h3 className="text-lg font-semibold text-zinc-950 mb-3">The Truth is in the P&L</h3>
                            <p className="text-zinc-950 font-bold text-sm">
                                Users lie. NPS lies. Roadmaps lie. The <span className="text-zinc-900">Profit & Loss statement</span> tells
                                the only truth that matters.
                            </p>
                        </div>

                        <div className="card">
                            <div className="text-xs font-bold text-zinc-900 font-bold mb-3">03</div>
                            <h3 className="text-lg font-semibold text-zinc-950 mb-3">Kill Zombies Ruthlessly</h3>
                            <p className="text-zinc-950 font-bold text-sm">
                                A "Zombie Feature" is code that requires maintenance but generates zero incremental value.
                                We execute the <span className="text-zinc-900">Kill Switch Protocol</span>.
                            </p>
                        </div>

                        <div className="card">
                            <div className="text-xs font-bold text-zinc-900 font-bold mb-3">04</div>
                            <h3 className="text-lg font-semibold text-zinc-950 mb-3">Sovereignty Over Dependency</h3>
                            <p className="text-zinc-950 font-bold text-sm">
                                Do not build your house on rental land. <span className="text-zinc-900">Own your core IP.</span>
                                Build small, sharp tools that do one thing perfectly.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Definitions */}
                <section className="section">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-8">Strategic Definitions</h2>

                        <div className="space-y-8">

                            <div>
                                <h3 className="text-lg font-semibold text-cyan-900 font-extrabold font-semibold mb-2">Technical Insolvency Date</h3>
                                <p className="text-zinc-950">
                                    The <span className="text-zinc-900">Technical Insolvency Date</span> is the specific future quarter
                                    when an organization's technical debt maintenance will consume 100% of engineering capacity,
                                    leaving zero time for new development.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-purple-900 font-extrabold font-semibold mb-2">Innovation Tax</h3>
                                <p className="text-zinc-950">
                                    <span className="text-zinc-900">Innovation Tax</span> is the hidden cost of maintenance work that
                                    gets reported as innovation investment in financial and board reporting.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Quote */}
                <section className="section-sm">
                    <div className="max-w-2xl mx-auto text-center">
                        <blockquote className="card p-8">
                            <p className="text-xl text-zinc-950 italic mb-4">
                                "Technical debt isn't a cleanup problem. It's a balance sheet liability."
                            </p>
                            <cite className="text-purple-900 font-extrabold font-semibold text-sm">— RICHARD EWING, PRODUCT ECONOMIST</cite>
                        </blockquote>
                    </div>
                </section>

                {/* Publications */}
                <section className="section">
                    <div className="max-w-4xl">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-8">Recognition & Publications</h2>

                        <div className="grid-2">

                            <div className="card">
                                <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">Expert Contributor</div>
                                <h3 className="font-semibold text-zinc-950 mb-1">Built In</h3>
                                <p className="text-zinc-950 text-sm">Monthly columnist. Jan 2026 article featured in Editor's Newsletter.</p>
                            </div>

                            <div className="card">
                                <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">Contributor</div>
                                <h3 className="font-semibold text-zinc-950 mb-1">Mind the Product</h3>
                                <p className="text-zinc-950 text-sm">Feb 2026 article. Newsletter feature.</p>
                            </div>

                            <div className="card">
                                <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">Expert Contributor</div>
                                <h3 className="font-semibold text-zinc-950 mb-1">Foundry (CIO.com)</h3>
                                <p className="text-zinc-950 text-sm">Monthly columnist for enterprise technology network.</p>
                            </div>

                            <div className="card">
                                <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">Published</div>
                                <h3 className="font-semibold text-zinc-950 mb-1">HackerNoon</h3>
                                <p className="text-zinc-950 text-sm">4M+ monthly readers.</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16 border-t border-zinc-300 pt-12">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-3xl">
                        <FAQItem 
                            question="What is the Doctrine of Sovereignty?" 
                            answer="It is a set of core principles defining the methodology of the AI Economist, emphasizing capital yield and deterministic execution over agile processes."
                        />
                        <FAQItem 
                            question="What is the Technical Insolvency Date?" 
                            answer="The Technical Insolvency Date is the specific future quarter when an organization's accumulated technical debt maintenance consumes 100% of engineering capacity, leaving zero time for product innovation."
                        />
                        <FAQItem 
                            question="What is the Innovation Tax?" 
                            answer="The Innovation Tax is the hidden operational cost of software maintenance that is misreported as new innovation investment in financial and board reporting."
                        />
                        <FAQItem 
                            question="How does the doctrine prevent margin collapse?" 
                            answer="By establishing strict gross margin cost ceilings and implementing deterministic runtime security boundaries before probabilistic models execute actions."
                        />
                    </div>
                </section>

                {/* CTA */}
                <section className="section-sm text-center">
                    <p className="text-zinc-950 font-bold mb-6">Apply these principles to your organization.</p>
                    <a href="/services" className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-zinc-950 font-semibold hover:bg-purple-500">
                        Book an Intervention →
                    </a>
                </section>

            </div>
        </main>
    );
}

