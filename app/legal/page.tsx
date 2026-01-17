export default function LegalPage() {
    return (
        <main className="p-8 lg:p-16 flex flex-col justify-center min-h-screen relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="mb-4 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <span className="text-zinc-400">Signal</span>
                <span>/</span>
                <span className="text-white font-bold">Legal</span>
            </div>

            <div className="capsule-container rounded-[2rem] p-8 lg:p-16 border border-white/10 bg-surface/50 backdrop-blur-md relative z-10 animate-fade-in-up max-w-4xl">
                <span className="font-mono text-titanium text-xs uppercase tracking-[0.3em] mb-4 block">Compliance</span>
                <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none mb-8">
                    Legal &amp;<br />Terms of Use
                </h1>

                <div className="space-y-8 max-w-4xl">
                    <section>
                        <h2 className="text-2xl text-white font-bold mb-4">Terms of Service</h2>
                        <p className="text-zinc-400 leading-relaxed mb-4">
                            By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-bold mb-4">Privacy Policy</h2>
                        <p className="text-zinc-400 leading-relaxed mb-4">
                            Your privacy is critical. We do not sell your data. Any information collected via the &quot;Briefs&quot; subscription or &quot;Advisory&quot; inquiry forms is used solely for the purpose of communication regarding Richard Ewing&apos;s services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-bold mb-4">Intellectual Property</h2>
                        <p className="text-zinc-400 leading-relaxed mb-4">
                            The content on this website, including the &quot;APER Diagnostic,&quot; &quot;Q-PEP Protocol,&quot; and &quot;Product Debt Index,&quot; is the intellectual property of Richard Ewing. Unauthorized reproduction or commercial use without express written consent is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-bold mb-4">Disclaimer</h2>
                        <p className="text-zinc-400 leading-relaxed mb-4">
                            The materials on Richard Ewing&apos;s website are provided &quot;as is&quot;. Richard Ewing makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-white/10 text-zinc-500 text-sm font-mono">
                        Last Updated: January 2026
                    </div>
                </div>
            </div>
        </main>
    );
}
