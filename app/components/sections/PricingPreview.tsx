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
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Free</div>
                            <div className="text-2xl font-bold text-white mb-2">$0</div>
                            <p className="text-gray-400 text-sm mb-4">Newsletter + Tools</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="https://theproducteconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold uppercase text-xs py-2 rounded hover:bg-cyan-500/20 transition-all">
                                Subscribe Free
                            </a>
                            <Link href="/tools" className="block w-full text-center bg-white/5 border border-white/10 text-white font-bold uppercase text-xs py-2 rounded hover:bg-white/10 transition-all">
                                All Tools
                            </Link>
                        </div>
                    </div>

                    {/* Start Here - Featured */}
                    <ShineBorder className="card-featured text-center p-0" color={["#A855F7", "#00D4FF"]}>
                        <div className="p-6">
                            <div className="text-xs text-purple-400 uppercase tracking-wide mb-2">★ Start Here</div>
                            <div className="text-2xl font-bold text-white mb-2">$2,500</div>
                            <p className="text-gray-400 text-sm mb-4">Insolvency Diagnostic</p>
                            <a href="/api/buy/insolvency_diagnostic" className="block bg-purple-600 text-white rounded px-4 py-2 text-sm hover:bg-purple-500 mb-3">Book Now</a>
                            <div className="border-t border-purple-500/20 pt-2 mt-2">
                                <p className="text-[10px] text-purple-300 mb-1">Not ready for full diagnostic?</p>
                                <a href="/api/buy/gut_check" className="text-gray-400 text-xs hover:text-white block underline decoration-dotted">
                                    Start with a 30-min Gut-Check ($450) →
                                </a>
                            </div>
                        </div>
                    </ShineBorder>

                    {/* Audit */}
                    <div className="card text-center">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Audit</div>
                        <div className="text-2xl font-bold text-white mb-2">$7,500</div>
                        <p className="text-gray-400 text-sm mb-4">R&D Capital Audit</p>
                        <a href="/api/buy/full_audit" className="text-cyan-400 text-sm hover:underline">Book Audit →</a>
                    </div>

                    {/* Enterprise */}
                    <div className="card text-center">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Enterprise</div>
                        <div className="text-2xl font-bold text-white mb-2">$5K/mo</div>
                        <p className="text-gray-400 text-sm mb-4">Independent Oversight</p>
                        <a href="/api/buy/retainer" className="text-cyan-400 text-sm hover:underline mb-2 block">Subscribe →</a>
                        <p className="text-gray-600 text-[10px] italic mt-2 border-t border-white/5 pt-2">
                            Engagements are scoped against measurable capital outcomes.
                        </p>
                    </div>

                </div>

                <div className="text-center mt-8">
                    <Link href="/advisory" className="text-gray-400 hover:text-white text-sm">
                        See all pricing options →
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default PricingPreview;
