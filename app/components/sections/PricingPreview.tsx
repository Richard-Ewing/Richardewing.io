"use client";

import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

const PricingPreview = () => {
    return (
        <section className="section">
            <div className="page-container">

                <div className="max-w-3xl mx-auto">
                    <div className="card-featured p-10 text-center relative overflow-hidden">
                        {/* Background accent */}
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:20px_20px]" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-violet-100 border border-violet-200 flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-7 h-7 text-violet-600" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Ready to See What's Hidden?</h2>
                            <p className="text-zinc-800 mb-8 max-w-xl mx-auto text-lg">
                                Every enterprise has capital leaks. Most just haven't been measured yet. Start with a free tool or go straight to a strategic advisory call.
                            </p>


                            <p className="text-zinc-600 text-xs font-semibold mb-8">
                                How it works: 15-min call → Free diagnostic report → Remediation plan if needed.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-zinc-600 uppercase tracking-widest font-mono">
                                <span>Free Tools Available</span>
                                <span className="text-zinc-700">·</span>
                                <span>Engagements from $450</span>
                                <span className="text-zinc-700">·</span>
                                <Link href="/pricing" className="text-violet-600 hover:text-violet-500 transition-colors">See All Pricing →</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingPreview;
