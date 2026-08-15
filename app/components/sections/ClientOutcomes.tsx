"use client";

import NumberTicker from '@/components/magicui/number-ticker';
import Link from 'next/link';
import { TrendingUp, ArrowDown, ArrowUp, ArrowRight } from 'lucide-react';

const ClientOutcomes = () => {
    return (
        <section className="section-sm">
            <div className="page-container">

                <div className="section-header text-center">
                    <h2>Audit Outcomes  -  Before & After</h2>
                    <p>Real results from R&D Capital Audits. Dollar-denominated findings with measurable remediation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    {/* Finding 1  -  Capital Misallocation */}
                    <div className="card relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-rose-500"></div>
                        <div className="pt-3">
                            <div className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-3 font-mono">Series C Platform</div>
                            <div className="text-3xl font-bold text-zinc-900 mb-3">$<NumberTicker value={1.2} decimalPlaces={1} />M</div>
                            <p className="text-zinc-900 text-sm font-semibold mb-4">maintenance costs reported as &ldquo;innovation&rdquo;</p>
                            <div className="border-t border-zinc-200 pt-4 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                                    <ArrowDown className="w-3 h-3 text-rose-500" />
                                    <span>Before: 73% of R&D allocated to maintenance</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                                    <ArrowUp className="w-3 h-3 text-emerald-500" />
                                    <span>After: Board redirected $800K to actual innovation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Finding 2  -  AI Cost Reduction */}
                    <div className="card relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-violet-500"></div>
                        <div className="pt-3">
                            <div className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-3 font-mono">B2B SaaS</div>
                            <div className="text-3xl font-bold text-zinc-900 mb-3"><NumberTicker value={34} />%</div>
                            <p className="text-zinc-900 text-sm font-semibold mb-4">AI cost reduction achieved</p>
                            <div className="border-t border-zinc-200 pt-4 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                                    <ArrowDown className="w-3 h-3 text-rose-500" />
                                    <span>Before: $14,200/mo retry & token waste</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                                    <ArrowUp className="w-3 h-3 text-emerald-500" />
                                    <span>After: $2,900/mo with deterministic routing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Finding 3  -  Engineering Capacity Recovery */}
                    <div className="card relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                        <div className="pt-3">
                            <div className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-3 font-mono">Enterprise FinTech</div>
                            <div className="text-3xl font-bold text-zinc-900 mb-3"><NumberTicker value={42} />%</div>
                            <p className="text-zinc-900 text-sm font-semibold mb-4">engineering capacity recovered</p>
                            <div className="border-t border-zinc-200 pt-4 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                                    <ArrowDown className="w-3 h-3 text-rose-500" />
                                    <span>Before: 60% of sprints on zombie features</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                                    <ArrowUp className="w-3 h-3 text-emerald-500" />
                                    <span>After: 31 negative-carry features eliminated</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* CTA after social proof */}
                <div className="text-center mt-10">
                    <p className="text-zinc-600 text-sm mb-4 font-medium">
                        Results from anonymized R&D Capital Audit engagements.
                    </p>
                    <Link href="/services" className="inline-flex items-center gap-2 text-violet-700 font-bold hover:text-violet-500 transition-colors group">
                        See how an audit works for your organization
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ClientOutcomes;
