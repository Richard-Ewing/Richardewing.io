"use client";

import Link from 'next/link';
import ShineBorder from '@/components/magicui/shine-border';

const PricingPreview = () => {
    // FORCE_REFRESH_V2
    return (
        <section className="section">
            <div className="page-container">

                <div className="section-header text-center">
                    <h2>Intervention Protocols</h2>
                    <p>From quick gut-checks to full organizational turnarounds.</p>
                </div>

                <div className="grid-4 max-w-5xl mx-auto">

                    {/* Free Tier - Dual Action */}
                    <div className="card text-center flex flex-col justify-between h-full">
                        <div>
                            <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">Free</div>
                            <div className="text-2xl font-bold text-zinc-900 mb-2">$0</div>
                            <p className="text-zinc-950 text-sm font-semibold mb-4">Newsletter + Tools</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="https://theaieconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-cyan-50 border border-cyan-200 text-cyan-900 font-extrabold uppercase text-xs font-bold py-2 rounded hover:bg-cyan-100 transition-all">
                                Subscribe Free
                            </a>
                            <Link href="/tools" className="block w-full text-center bg-zinc-50 border border-zinc-400 text-zinc-950 font-bold uppercase text-xs font-bold py-2 rounded hover:bg-zinc-100 transition-all">
                                All Tools
                            </Link>
                        </div>
                    </div>

                    {/* Start Here - Featured */}
                    <ShineBorder className="card-featured text-center p-0" color={["#A855F7", "#00D4FF"]}>
                        <div className="p-6">
                            <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">★ Start Here</div>
                            <div className="text-2xl font-bold text-zinc-900 mb-2">$2,500</div>
                            <p className="text-zinc-950 text-sm font-semibold mb-4">Insolvency Diagnostic</p>
                            <a href="/api/buy/insolvency_diagnostic" className="block bg-purple-600 text-zinc-950 font-semibold rounded px-4 py-2 text-sm font-semibold hover:bg-purple-500 mb-3">Book Now</a>
                            <div className="border-t border-purple-200 pt-2 mt-2">
                                <p className="text-xs font-bold font-medium text-purple-500 mb-1">Not ready for full diagnostic?</p>
                                <a href="/api/buy/gut_check" className="text-zinc-950 text-xs font-bold hover:text-zinc-900 block underline decoration-dotted">
                                    Start with a 30-min Gut-Check ($450) →
                                </a>
                            </div>
                        </div>
                    </ShineBorder>

                    {/* Audit */}
                    <div className="card text-center">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">Audit</div>
                        <div className="text-2xl font-bold text-zinc-900 mb-2">$7,500</div>
                        <p className="text-zinc-950 text-sm font-semibold mb-4">R&D Capital Audit</p>
                        <a href="/api/buy/full_audit" className="text-cyan-900 font-extrabold text-sm font-semibold hover:underline">Book Audit →</a>
                    </div>

                    {/* Enterprise */}
                    <div className="card text-center">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">Enterprise</div>
                        <div className="text-2xl font-bold text-zinc-900 mb-2">$5K/mo</div>
                        <p className="text-zinc-950 text-sm font-semibold mb-4">Independent Oversight</p>
                        <a href="/api/buy/retainer" className="text-cyan-900 font-extrabold text-sm font-semibold hover:underline mb-2 block">Subscribe →</a>
                        <p className="text-zinc-900 text-xs font-bold font-medium italic mt-2 border-t border-zinc-400 pt-2">
                            Engagements are scoped against measurable capital outcomes.
                        </p>
                    </div>

                </div>

                <div className="text-center mt-8">
                    <Link href="/advisory" className="text-zinc-950 font-bold hover:text-zinc-900 text-sm">
                        See all pricing options →
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default PricingPreview;
