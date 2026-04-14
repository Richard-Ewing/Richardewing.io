"use client";

import NumberTicker from '@/components/magicui/number-ticker';

const ClientOutcomes = () => {
    return (
        <section className="section-sm">
            <div className="page-container">

                <div className="section-header text-center">
                    <h2>Recent Audit Findings</h2>
                </div>

                <div className="grid-2 max-w-4xl mx-auto">

                    {/* Finding 1 */}
                    <div className="card">
                        <div className="text-xs text-purple-600 uppercase tracking-wide mb-2">Series C Platform</div>
                        <div className="text-3xl font-bold text-zinc-900 mb-2">$<NumberTicker value={1.2} decimalPlaces={1} />M</div>
                        <p className="text-zinc-950 text-sm">maintenance costs reported as "innovation"</p>
                        <p className="text-zinc-900 text-xs mt-4">73% of "new features" were debt payments</p>
                    </div>

                    {/* Finding 2 */}
                    <div className="card">
                        <div className="text-xs text-cyan-600 uppercase tracking-wide mb-2">B2B SaaS</div>
                        <div className="text-3xl font-bold text-zinc-900 mb-2"><NumberTicker value={34} />%</div>
                        <p className="text-zinc-950 text-sm">AI cost reduction achieved</p>
                        <p className="text-zinc-900 text-xs mt-4">Output maintained, CFO now requires framework</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ClientOutcomes;
