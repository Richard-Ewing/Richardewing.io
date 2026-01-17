export default function LegalPage() {
    return (
        <main className="p-8 lg:p-24 flex flex-col justify-center min-h-screen relative overflow-hidden">
            <div className="max-w-3xl mx-auto w-full">
                <div className="capsule-container rounded-[2rem] p-12 animate-fade-in-up">
                    <h1 className="text-3xl font-bold text-white mb-8">Legal & Identity</h1>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl text-white font-bold mb-4">Terms of Service</h2>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any local laws.
                            </p>
                            <p className="text-zinc-400 leading-relaxed">
                                The materials contained in this website are protected by applicable copyright and trademark law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-white font-bold mb-4">Intellectual Property</h2>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                All content, including the "Product Economist," "PDI," "Q-PEP," and "The Kill Switch Protocol" frameworks, is the intellectual property of Richard Ewing. Unauthorized reproduction or commercial use without express written consent is prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl text-white font-bold mb-4">Disclaimer</h2>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                The materials on Richard Ewing&#39;s website are provided "as is". Richard Ewing makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-white/10 text-zinc-500 text-sm font-mono">
                            Last Updated: January 2026
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
