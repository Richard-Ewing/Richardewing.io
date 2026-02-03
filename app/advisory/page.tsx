"use client";

import React from 'react';

export default function AdvisoryPage() {
    return (
        <main className="pt-20">
            <div className="page-container">

                {/* Hero */}
                <section className="section-lg text-center">
                    <div className="text-xs text-purple-400 uppercase tracking-wide mb-4">Advisory Services</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Intervention Protocols.
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        I don't do "consulting." These are surgical interventions designed to
                        stop the bleeding and install permanent capital discipline.
                    </p>

                    {/* Availability banner */}
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                        <span className="text-gray-400">Q2 2026 Availability:</span>
                        <span className="text-white">4 diagnostic slots</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-white">2 audit slots</span>
                    </div>
                </section>

                {/* Main pricing grid - 4 columns */}
                <section className="section">
                    <div className="grid-4 max-w-6xl mx-auto">

                        {/* FREE */}
                        <div className="card">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">Free</div>
                            <div className="text-3xl font-bold text-white mb-2">$0</div>
                            <div className="text-gray-400 mb-6">Newsletter + Tools</div>

                            <ul className="space-y-3 mb-6 text-sm text-gray-400">
                                <li>✓ Executive Briefings newsletter</li>
                                <li>✓ All 5 diagnostic tools</li>
                                <li>✓ R&D Audit Checklist PDF</li>
                            </ul>

                            <a href="/briefings" className="block w-full py-3 text-center rounded-lg border border-white/20 text-white hover:bg-white/5">
                                Run a Free Self-Diagnostic
                            </a>
                        </div>

                        {/* START HERE - $2,500 */}
                        <div className="card-featured relative">
                            <div className="text-xs text-purple-400 uppercase tracking-wide mb-4">★ Start Here</div>
                            <div className="text-3xl font-bold text-white mb-2">$2,500</div>
                            <div className="text-gray-400 mb-6">Insolvency Diagnostic</div>

                            <ul className="space-y-3 mb-6 text-sm text-gray-300">
                                <li>✓ 60-minute deep dive session</li>
                                <li>✓ Written Risk Exposure Report</li>
                                <li>✓ 15-min follow-up call</li>
                            </ul>

                            <a href="https://buy.stripe.com/8x25kw62O9HA6pDb8c2B203" className="block w-full py-3 text-center rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500">
                                Book Diagnostic
                            </a>

                            {/* Gut Check Upsell */}
                            <div className="mt-4 pt-4 border-t border-white/10 text-center">
                                <a href="https://buy.stripe.com/eVqbIU1My8Dw01f7W02B204" className="text-gray-400 hover:text-white text-xs block">
                                    Not ready for a full diagnostic?<br />
                                    Start with a 30-minute Gut-Check → $450
                                </a>
                            </div>
                        </div>

                        {/* AUDIT - $7,500 */}
                        <div className="card">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">Professional</div>
                            <div className="text-3xl font-bold text-white mb-2">$7,500</div>
                            <div className="text-gray-400 mb-6">R&D Capital Audit</div>

                            <ul className="space-y-3 mb-6 text-sm text-gray-400">
                                <li>✓ Full 2-3 week forensic review</li>
                                <li>✓ Stakeholder interviews</li>
                                <li>✓ Board-ready deliverable</li>
                                <li>✓ Remediation roadmap</li>
                            </ul>

                            <a href="https://buy.stripe.com/7sY14g76ScTM7tH2BG2B202" className="block w-full py-3 text-center rounded-lg border border-white/20 text-white hover:bg-white/5">
                                Book Audit
                            </a>
                        </div>

                        {/* ENTERPRISE */}
                        <div className="card">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">Enterprise</div>
                            <div className="text-3xl font-bold text-white mb-2">$5K/mo</div>
                            <div className="text-gray-400 mb-6">Independent Oversight</div>

                            <ul className="space-y-3 mb-6 text-sm text-gray-400">
                                <li>✓ $5K/mo oversight retainer</li>
                                <li>✓ Board-level economic sanity checks</li>
                                <li>✓ Asynchronous access</li>
                                <li>✓ Min. 3-month commitment</li>
                            </ul>

                            <a href="https://buy.stripe.com/14AdR24YK3jc15j4JO2B200" className="block w-full py-3 text-center rounded-lg border border-white/20 text-white hover:bg-white/5 mb-4">
                                Subscribe
                            </a>

                            <p className="text-gray-500 text-xs text-center px-2">
                                Engagements are scoped against measurable capital outcomes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Add-ons grid */}
                <section className="section-sm">
                    <div className="section-header text-center">
                        <h2>Additional Services</h2>
                    </div>

                    <div className="grid-2 max-w-3xl mx-auto">

                        <div className="card" id="gut-check">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-semibold text-white">30-Min Gut-Check</h3>
                                <span className="text-cyan-400 font-bold">$450</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">Not sure if you have a problem? You describe the situation, I tell you if it's on fire.</p>
                            <a href="https://buy.stripe.com/eVqbIU1My8Dw01f7W02B204" className="text-xs text-purple-400 hover:text-white">Book Now →</a>
                        </div>

                        <div className="card">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-semibold text-white">AI Cost Governance</h3>
                                <span className="text-cyan-400 font-bold">$5,000</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">Dedicated analysis of your AI unit economics. Find your collapse point before you hit it.</p>
                            <a href="https://buy.stripe.com/9B64gs4YK070dS57W02B201" className="text-xs text-purple-400 hover:text-white">Book Analysis →</a>
                        </div>

                    </div>
                </section>

                {/* Board roles */}
                <section className="section-sm">
                    <div className="max-w-3xl mx-auto">
                        <div className="card p-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Board & Fractional Leadership</h3>
                                    <p className="text-gray-400 mb-4">
                                        For Series B+ companies requiring sustained intervention. I serve as a
                                        Fractional CPO or Independent Board Director.
                                    </p>
                                    <div className="flex gap-4">
                                        <a href="#inquire-board" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm hover:bg-purple-500">
                                            Inquire About Board Roles
                                        </a>
                                        <a href="/principal" className="px-4 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5">
                                            Read Operating Principles
                                        </a>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-purple-400 uppercase">Availability</div>
                                    <div className="text-2xl font-bold text-white">1 Slot</div>
                                    <div className="text-gray-500 text-sm">Q2 2026</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
