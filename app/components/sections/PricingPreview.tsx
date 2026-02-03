"use client";

import Link from 'next/link';

const PricingPreview = () => {
    return (
        <section className="section">
            <div className="page-container">

                <div className="section-header text-center">
                    <h2>Intervention Protocols</h2>
                    <p>From quick gut-checks to full organizational turnarounds.</p>
                </div>

                <div className="grid-4 max-w-5xl mx-auto">

                    {/* Free */}
                    <div className="card text-center">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Free</div>
                        <div className="text-2xl font-bold text-white mb-2">$0</div>
                        <p className="text-gray-400 text-sm mb-4">Newsletter + Tools</p>
                        <Link href="/briefings" className="text-cyan-400 text-sm hover:underline">Run a Free Self-Diagnostic →</Link>
                    </div>

                    {/* Start Here - Featured */}
                    <div className="card-featured text-center">
                        <div className="text-xs text-purple-400 uppercase tracking-wide mb-2">★ Start Here</div>
                        <div className="text-2xl font-bold text-white mb-2">$2,500</div>
                        <p className="text-gray-400 text-sm mb-4">Insolvency Diagnostic</p>
                        <a href="https://buy.stripe.com/8x25kw62O9HA6pDb8c2B203" className="block bg-purple-600 text-white rounded px-4 py-2 text-sm hover:bg-purple-500 mb-3">Book Now</a>
                        <div className="border-t border-purple-500/20 pt-2 mt-2">
                            <p className="text-[10px] text-purple-300 mb-1">Not ready for full diagnostic?</p>
                            <a href="https://buy.stripe.com/eVqbIU1My8Dw01f7W02B204" className="text-gray-400 text-xs hover:text-white block underline decoration-dotted">
                                Start with a 30-min Gut-Check ($450) →
                            </a>
                        </div>
                    </div>

                    {/* Audit */}
                    <div className="card text-center">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Audit</div>
                        <div className="text-2xl font-bold text-white mb-2">$7,500</div>
                        <p className="text-gray-400 text-sm mb-4">R&D Capital Audit</p>
                        <a href="https://buy.stripe.com/7sY14g76ScTM7tH2BG2B202" className="text-cyan-400 text-sm hover:underline">Book Audit →</a>
                    </div>

                    {/* Enterprise */}
                    <div className="card text-center">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Enterprise</div>
                        <div className="text-2xl font-bold text-white mb-2">$5K/mo</div>
                        <p className="text-gray-400 text-sm mb-4">Independent Oversight</p>
                        <a href="https://buy.stripe.com/14AdR24YK3jc15j4JO2B200" className="text-cyan-400 text-sm hover:underline mb-2 block">Subscribe →</a>
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
