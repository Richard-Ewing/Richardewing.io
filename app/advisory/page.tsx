"use client";

import React from 'react';
import BlurIn from '@/components/magicui/blur-in';
import ShineBorder from '@/components/magicui/shine-border';
import { BorderBeam } from '@/components/magicui/border-beam';

export default function AdvisoryPage() {
    return (
        <main className="pt-20">
            <div className="page-container">

                <section className="section-lg text-center">
                    <div className="text-xs text-purple-400 uppercase tracking-wide mb-4">Advisory Services</div>
                    <BlurIn word="Intervention Protocols." className="text-4xl md:text-5xl font-bold text-white mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
                        I don't do "consulting." These are surgical interventions designed to
                        stop the bleeding and install permanent capital discipline.
                    </p>
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-8">
                        Specializing in the identification and remediation of <span className="text-purple-400">AI Hallucination Debt</span>, <span className="text-cyan-400">Zombie Infrastructure</span>, and the <span className="text-red-400">Subprime Code Crisis</span>.
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

                        {/* Free Tier - Dual Action */}
                        <div className="card">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">Free</div>
                            <div className="text-3xl font-bold text-white mb-2">$0</div>
                            <div className="text-gray-400 mb-6">Newsletter + Tools</div>

                            <ul className="space-y-3 mb-6 text-sm text-gray-400">
                                <li>✓ Executive Briefings newsletter</li>
                                <li>✓ All 5 diagnostic tools</li>
                                <li>✓ R&D Audit Checklist PDF</li>
                            </ul>

                            <div className="flex flex-col gap-2">
                                <a href="https://theproducteconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold uppercase text-xs py-2 rounded hover:bg-cyan-500/20 transition-all">
                                    Subscribe Free
                                </a>
                                <a href="/tools" className="block w-full text-center bg-white/5 border border-white/10 text-white font-bold uppercase text-xs py-2 rounded hover:bg-white/10 transition-all">
                                    All Tools
                                </a>
                            </div>
                        </div>

                        {/* START HERE - $2,500 */}
                        <ShineBorder className="card-featured relative p-0 overflow-hidden" color={["#A855F7", "#00D4FF"]}>
                            <BorderBeam size={300} duration={12} delay={9} borderWidth={2} />
                            <div className="p-6 relative z-10">
                                <div className="text-xs text-purple-400 uppercase tracking-wide mb-4">★ Start Here</div>
                                <div className="text-3xl font-bold text-white mb-2">$2,500</div>
                                <div className="text-gray-400 mb-6">Insolvency Diagnostic</div>

                                <ul className="space-y-3 mb-6 text-sm text-gray-300">
                                    <li>✓ 60-minute Capital Exposure Assessment</li>
                                    <li>✓ Written Risk Exposure Report</li>
                                    <li>✓ 15-min follow-up call</li>
                                </ul>

                                <a href="/api/buy/insolvency_diagnostic" className="block w-full py-3 text-center rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500">
                                    Book Diagnostic
                                </a>

                                {/* Gut Check Upsell */}
                                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                                    <a href="/api/buy/gut_check" className="text-gray-400 hover:text-white text-xs block">
                                        Not ready for a full diagnostic?<br />
                                        Start with a 30-minute Gut-Check → $450
                                    </a>
                                </div>
                            </div>
                        </ShineBorder>

                        {/* AUDIT - $7,500 */}
                        <div className="card">
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-4">Professional</div>
                            <div className="text-3xl font-bold text-white mb-2">$7,500</div>
                            <div className="text-gray-400 mb-6">R&D Capital Audit</div>

                            <ul className="space-y-3 mb-6 text-sm text-gray-400">
                                <li>✓ Full 3-week forensic review of R&D capital allocation and AI inference costs</li>
                                <li>✓ Stakeholder interviews</li>
                                <li>✓ Board-ready deliverable</li>
                                <li>✓ Remediation roadmap</li>
                            </ul>

                            <a href="/api/buy/full_audit" className="block w-full py-3 text-center rounded-lg border border-white/20 text-white hover:bg-white/5">
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

                            <a href="/api/buy/retainer" className="block w-full py-3 text-center rounded-lg border border-white/20 text-white hover:bg-white/5 mb-4">
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
                            <a href="/api/buy/gut_check" className="text-xs text-purple-400 hover:text-white">Book Now →</a>
                        </div>

                        <div className="card">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-semibold text-white">AI Cost Governance</h3>
                                <span className="text-cyan-400 font-bold">$5,000</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">Dedicated analysis of your AI unit economics. Find your collapse point before you hit it.</p>
                            <a href="/api/buy/ai_cost_governance" className="text-xs text-purple-400 hover:text-white">Book Analysis →</a>
                        </div>

                    </div>
                </section>

                {/* Expanded Advisory Roles */}
                <section className="section-sm">
                    <div className="section-header text-center">
                        <h2>Board & Fractional Leadership</h2>
                        <p className="text-gray-400 text-sm mt-2">For Series B+ companies requiring sustained intervention.</p>
                    </div>

                    <div className="grid-3 max-w-5xl mx-auto">
                        <div className="card p-6">
                            <div className="text-xs text-purple-400 uppercase tracking-wide mb-3 font-mono">Fractional CPO</div>
                            <div className="text-3xl font-bold text-white mb-1">$10-15K<span className="text-lg text-zinc-500">/mo</span></div>
                            <p className="text-gray-400 text-sm mb-4">6-month minimum commitment</p>
                            <ul className="space-y-2 mb-6 text-sm text-gray-400">
                                <li>✓ 2-3 days/week embedded</li>
                                <li>✓ Product strategy & roadmap ownership</li>
                                <li>✓ Engineering economics oversight</li>
                                <li>✓ Board-level reporting</li>
                                <li>✓ Hiring/team architecture</li>
                            </ul>
                            <a href="/api/buy/fractional_cpo" className="block w-full py-3 text-center rounded-lg border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 font-bold text-sm transition-all">
                                Book Engagement →
                            </a>
                        </div>

                        <div className="card p-6">
                            <div className="text-xs text-cyan-400 uppercase tracking-wide mb-3 font-mono">Due Diligence Partner</div>
                            <div className="text-3xl font-bold text-white mb-1">$15K<span className="text-lg text-zinc-500">/deal</span></div>
                            <p className="text-gray-400 text-sm mb-4">PE/VC tech due diligence</p>
                            <ul className="space-y-2 mb-6 text-sm text-gray-400">
                                <li>✓ Pre-acquisition technical assessment</li>
                                <li>✓ Hidden liability identification</li>
                                <li>✓ Engineering team evaluation</li>
                                <li>✓ Technical debt quantification</li>
                                <li>✓ Investment committee deliverable</li>
                            </ul>
                            <a href="/api/buy/due_diligence" className="block w-full py-3 text-center rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-bold text-sm transition-all">
                                Secure Partner →
                            </a>
                        </div>

                        <div className="card p-6">
                            <div className="text-xs text-emerald-400 uppercase tracking-wide mb-3 font-mono">Board Observer</div>
                            <div className="text-3xl font-bold text-white mb-1">$2,500<span className="text-lg text-zinc-500">/mo</span></div>
                            <p className="text-gray-400 text-sm mb-4">Quarterly board meeting attendance</p>
                            <ul className="space-y-2 mb-6 text-sm text-gray-400">
                                <li>✓ Attend quarterly board meetings</li>
                                <li>✓ Independent technical oversight</li>
                                <li>✓ Pre-meeting briefing prep</li>
                                <li>✓ Written technical assessment</li>
                                <li>✓ Async advisory access</li>
                            </ul>
                            <a href="/api/buy/board_observer" className="block w-full py-3 text-center rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-bold text-sm transition-all">
                                Lock Seat →
                            </a>
                        </div>
                    </div>
                </section>

                {/* Links to other service pages */}
                <section className="section-sm max-w-3xl mx-auto">
                    <div className="grid-3">
                        <a href="/workshops" className="card p-5 hover:border-rose-500/30 transition-all text-center group">
                            <div className="text-2xl mb-2">🎤</div>
                            <div className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">Workshops & Speaking</div>
                            <div className="text-xs text-zinc-500 mt-1">From $5,000</div>
                        </a>
                        <a href="/advisory/licensing" className="card p-5 hover:border-purple-500/30 transition-all text-center group">
                            <div className="text-2xl mb-2">🏢</div>
                            <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">White-Label Licensing</div>
                            <div className="text-xs text-zinc-500 mt-1">From $1,500/mo</div>
                        </a>
                        <a href="/certification" className="card p-5 hover:border-amber-500/30 transition-all text-center group">
                            <div className="text-2xl mb-2">🎓</div>
                            <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">Get Certified (CPE)</div>
                            <div className="text-xs text-zinc-500 mt-1">$1,500</div>
                        </a>
                    </div>
                </section>

            </div>
        </main>
    );
}
