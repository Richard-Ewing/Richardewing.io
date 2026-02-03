"use client";

const FourHorsemen = () => {
    return (
        <section className="section-sm bg-black/30">
            <div className="page-container">

                <div className="section-header text-center">
                    <h2>The Four Horsemen of Technical Insolvency</h2>
                    <p>These are the patterns that kill product organizations silently.</p>
                </div>

                <div className="grid-2 max-w-4xl mx-auto">

                    <div className="card">
                        <h3 className="text-lg font-semibold text-white mb-2">1. Zombie Infrastructure</h3>
                        <p className="text-gray-400 text-sm">Legacy systems consuming 80%+ of engineering capacity silently.</p>
                    </div>

                    <div className="card">
                        <h3 className="text-lg font-semibold text-white mb-2">2. Feature Bloat</h3>
                        <p className="text-gray-400 text-sm">Features nobody uses but everyone maintains.</p>
                    </div>

                    <div className="card">
                        <h3 className="text-lg font-semibold text-white mb-2">3. AI Hallucination Debt</h3>
                        <p className="text-gray-400 text-sm">AI costs scaling faster than value created.</p>
                    </div>

                    <div className="card">
                        <h3 className="text-lg font-semibold text-white mb-2">4. Capital Misallocation</h3>
                        <p className="text-gray-400 text-sm">60% of R&D going to maintenance, reported as "innovation."</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FourHorsemen;
