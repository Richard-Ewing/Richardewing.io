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
                        <Link href="/briefings" className="text-cyan-400 text-sm hover:underline">Subscribe →</Link>
                    </div>

                    {/* Start Here - Featured */}
                    <div className="card-featured text-center">
                        <div className="text-xs text-purple-400 uppercase tracking-wide mb-2">★ Start Here</div>
                        <div className="text-2xl font-bold text-white mb-2">$2,500</div>
                        <p className="text-gray-400 text-sm mb-4">Insolvency Diagnostic</p>
                        <Link href="/advisory" className="text-purple-400 text-sm hover:underline">Book Now →</Link>
                    </div>

                    {/* Audit */}
                    <div className="card text-center">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Audit</div>
                        <div className="text-2xl font-bold text-white mb-2">$7,500</div>
                        <p className="text-gray-400 text-sm mb-4">R&D Capital Audit</p>
                        <Link href="/advisory" className="text-cyan-400 text-sm hover:underline">Book Audit →</Link>
                    </div>

                    {/* Enterprise */}
                    <div className="card text-center">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Enterprise</div>
                        <div className="text-2xl font-bold text-white mb-2">$5K+</div>
                        <p className="text-gray-400 text-sm mb-4">Retainer / Turnaround</p>
                        <Link href="/advisory" className="text-cyan-400 text-sm hover:underline">Inquire →</Link>
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
