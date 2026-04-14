"use client";

import React from 'react';

export default function DoctrinePage() {
    return (
        <main className="pt-20">
            <div className="page-container">

                {/* Hero */}
                <section className="section-lg">
                    <div className="max-w-3xl">
                        <div className="text-xs text-cyan-400 uppercase tracking-wide mb-4">The Doctrine</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
                            Sovereignty in<br />
                            <span className="text-cyan-400">Product Economics.</span>
                        </h1>
                        <p className="text-zinc-800 text-lg">
                            The following principles govern the methodology of the Product Economist.
                            They are not suggestions; they are the <span className="text-zinc-900">immutable laws</span> of software solvency.
                        </p>
                    </div>
                </section>

                {/* Principles - 2x2 */}
                <section className="section">
                    <div className="grid-2 max-w-4xl">

                        <div className="card">
                            <div className="text-xs text-purple-400 mb-3">01</div>
                            <h3 className="text-lg font-semibold text-zinc-950 mb-3">Capital Allocation {'>'} Agile Theater</h3>
                            <p className="text-zinc-800 text-sm">
                                We do not measure success by velocity, story points, or features shipped.
                                We measure success by <span className="text-zinc-900">Return on Invested Capital (ROIC)</span>.
                            </p>
                        </div>

                        <div className="card">
                            <div className="text-xs text-cyan-400 mb-3">02</div>
                            <h3 className="text-lg font-semibold text-zinc-950 mb-3">The Truth is in the P&L</h3>
                            <p className="text-zinc-800 text-sm">
                                Users lie. NPS lies. Roadmaps lie. The <span className="text-zinc-900">Profit & Loss statement</span> tells
                                the only truth that matters.
                            </p>
                        </div>

                        <div className="card">
                            <div className="text-xs text-purple-400 mb-3">03</div>
                            <h3 className="text-lg font-semibold text-zinc-950 mb-3">Kill Zombies Ruthlessly</h3>
                            <p className="text-zinc-800 text-sm">
                                A "Zombie Feature" is code that requires maintenance but generates zero incremental value.
                                We execute the <span className="text-zinc-900">Kill Switch Protocol</span>.
                            </p>
                        </div>

                        <div className="card">
                            <div className="text-xs text-cyan-400 mb-3">04</div>
                            <h3 className="text-lg font-semibold text-zinc-950 mb-3">Sovereignty Over Dependency</h3>
                            <p className="text-zinc-800 text-sm">
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
                                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Technical Insolvency Date</h3>
                                <p className="text-zinc-950">
                                    The <span className="text-zinc-900">Technical Insolvency Date</span> is the specific future quarter
                                    when an organization's technical debt maintenance will consume 100% of engineering capacity,
                                    leaving zero time for new development.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-purple-400 mb-2">Innovation Tax</h3>
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
                            <cite className="text-purple-400 text-sm">— RICHARD EWING, PRODUCT ECONOMIST</cite>
                        </blockquote>
                    </div>
                </section>

                {/* Publications */}
                <section className="section">
                    <div className="max-w-4xl">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-8">Recognition & Publications</h2>

                        <div className="grid-2">

                            <div className="card">
                                <div className="text-xs text-purple-400 uppercase tracking-wide mb-2">Expert Contributor</div>
                                <h3 className="font-semibold text-zinc-950 mb-1">Built In</h3>
                                <p className="text-zinc-950 text-sm">Monthly columnist. Jan 2026 article featured in Editor's Newsletter.</p>
                            </div>

                            <div className="card">
                                <div className="text-xs text-cyan-400 uppercase tracking-wide mb-2">Contributor</div>
                                <h3 className="font-semibold text-zinc-950 mb-1">Mind the Product</h3>
                                <p className="text-zinc-950 text-sm">Feb 2026 article. Newsletter feature.</p>
                            </div>

                            <div className="card">
                                <div className="text-xs text-purple-400 uppercase tracking-wide mb-2">Expert Contributor</div>
                                <h3 className="font-semibold text-zinc-950 mb-1">Foundry (CIO.com)</h3>
                                <p className="text-zinc-950 text-sm">Monthly columnist for enterprise technology network.</p>
                            </div>

                            <div className="card">
                                <div className="text-xs text-cyan-400 uppercase tracking-wide mb-2">Published</div>
                                <h3 className="font-semibold text-zinc-950 mb-1">HackerNoon</h3>
                                <p className="text-zinc-950 text-sm">4M+ monthly readers.</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-sm text-center">
                    <p className="text-zinc-800 mb-6">Apply these principles to your organization.</p>
                    <a href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500">
                        Book an Intervention →
                    </a>
                </section>

            </div>
        </main>
    );
}
