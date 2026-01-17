export default function DoctrinePage() {
    return (
        <main className="p-8 lg:p-24 flex flex-col justify-center min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="capsule-container rounded-[2rem] p-12 w-full mb-8 animate-fade-in-up">
                <span className="font-mono text-emerald-500 text-xs uppercase tracking-widest mb-4 block">The Doctrine</span>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                    Sovereignty in <br />
                    <span className="text-emerald-400">Product Economics.</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed border-l-2 border-emerald-500/50 pl-6">
                    The following principles govern the methodology of the Product Economist. They are not suggestions; they are the immutable laws of software solvency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-100">
                <div className="capsule-container p-10 rounded-3xl hover:border-emerald-500/30 transition duration-500 group">
                    <div className="font-mono text-8xl text-zinc-800 group-hover:text-emerald-900/50 absolute top-4 right-6 transition-colors select-none font-bold">
                        01
                    </div>
                    <div className="relative">
                        <h3 className="text-white font-bold text-xl mb-4">Capital Allocation &gt; Agile Theater</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            We do not measure success by velocity, story points, or features shipped. We measure success by <strong>Return on Invested Capital (ROIC)</strong>. Every sprint is a deployment of capital. If a feature does not generate revenue or reduce risk, it is waste.
                        </p>
                    </div>
                </div>

                <div className="capsule-container p-10 rounded-3xl hover:border-emerald-500/30 transition duration-500 group">
                    <div className="font-mono text-8xl text-zinc-800 group-hover:text-emerald-900/50 absolute top-4 right-6 transition-colors select-none font-bold">
                        02
                    </div>
                    <div className="relative">
                        <h3 className="text-white font-bold text-xl mb-4">The Truth is in the P&L</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Users lie. Net Promoter Scores (NPS) lie. Roadmaps lie. The <strong>Profit & Loss statement</strong> tells the only truth that matters. If the unit economics of a product are upside down, no amount of "user empathy" will save it.
                        </p>
                    </div>
                </div>

                <div className="capsule-container p-10 rounded-3xl hover:border-emerald-500/30 transition duration-500 group">
                    <div className="font-mono text-8xl text-zinc-800 group-hover:text-emerald-900/50 absolute top-4 right-6 transition-colors select-none font-bold">
                        03
                    </div>
                    <div className="relative">
                        <h3 className="text-white font-bold text-xl mb-4">Kill Zombies Ruthlessly</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            A "Zombie Feature" is code that requires maintenance (Cost) but generates zero incremental value (Revenue). We identify these features and execute the <strong>Kill Switch Protocol</strong>. Deprecation is the highest form of optimization.
                        </p>
                    </div>
                </div>

                <div className="capsule-container p-10 rounded-3xl hover:border-emerald-500/30 transition duration-500 group">
                    <div className="font-mono text-8xl text-zinc-800 group-hover:text-emerald-900/50 absolute top-4 right-6 transition-colors select-none font-bold">
                        04
                    </div>
                    <div className="relative">
                        <h3 className="text-white font-bold text-xl mb-4">Sovereignty Over Dependency</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Do not build your house on rented land. Minimize dependency on third-party APIs, platforms, and bloated frameworks that you cannot control. Own your core IP. Build small, sharp tools that do one thing perfectly.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 capsule-container p-12 rounded-[2rem] animate-fade-in-up delay-200">
                <h3 className="text-white font-bold mb-8 flex items-center gap-3">
                    <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                    Recognition
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 border border-white/10 bg-zinc-900/30 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-cobalt/10 px-3 py-1 rounded-bl-xl text-[10px] font-mono text-cobalt uppercase tracking-tighter">
                            Innovation Award
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase mb-2">Public Sector</div>
                        <div className="text-lg font-bold text-white mb-2 leading-tight">Digital Transformation Excellence</div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            Awarded for the successful migration of 7.7M users to a modern cloud infrastructure with zero downtime.
                        </p>
                    </div>

                    <div className="p-6 border border-white/10 bg-zinc-900/30 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-emerald-500/10 px-3 py-1 rounded-bl-xl text-[10px] font-mono text-emerald-400 uppercase tracking-tighter">
                            Governor's Award
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase mb-2">Washington State</div>
                        <div className="text-lg font-bold text-white mb-2 leading-tight">The Last Mile Award</div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                            Selected from ~65,000 state employees by Gov. Jay Inslee for excellence in operational transformation.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
