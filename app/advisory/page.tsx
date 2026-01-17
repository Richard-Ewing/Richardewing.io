
'use client';

import { GatewayCard } from '../components/gateway-card';

export default function AdvisoryPage() {
    return (
        <div className="max-w-4xl w-full z-10 animate-fade-in-up">
            <div className="mb-8 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Intervention</span><span>/</span><span className="text-white font-bold">Advisory</span>
            </div>

            <div className="capsule-container rounded-[2rem] p-8 border border-white/10 bg-zinc-900/40 backdrop-blur-md relative z-10 mb-12">
                <span className="font-mono text-titanium text-xs uppercase tracking-[0.3em] mb-4 block">Access Levels</span>
                <h1 className="text-5xl font-bold text-white tracking-tight leading-none mb-12">
                    Intervention<br />Protocols
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Level 01 */}
                    <div className="p-6 border border-white/5 bg-zinc-900/30 rounded-xl hover:scale-[1.02] transition duration-500 min-h-[320px] flex flex-col justify-between">
                        <div>
                            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">
                                Level 01 &bull; Retainer
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Fractional CPO</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Embed as interim Chief Product Officer to restructure org chart and capital allocation.
                            </p>
                        </div>
                        <div className="mt-8">
                            <span className="text-white font-bold text-lg block">$25k</span>
                            <span className="text-zinc-600 text-xs uppercase tracking-widest">/ Month</span>
                        </div>
                    </div>

                    {/* Level 02 */}
                    <div className="p-6 border border-white/5 bg-zinc-900/30 rounded-xl hover:scale-[1.02] transition duration-500 min-h-[320px] flex flex-col justify-between">
                        <div>
                            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">
                                Level 02 &bull; Audit
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Due Diligence</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Technical and economic audit of software assets for PE/VC investors pre-deal.
                            </p>
                        </div>
                        <div className="mt-8">
                            <span className="text-white font-bold text-lg block">$15k</span>
                            <span className="text-zinc-600 text-xs uppercase tracking-widest">/ Week</span>
                        </div>
                    </div>

                    {/* Level 03 */}
                    <div className="p-6 border border-white/5 bg-zinc-900/30 rounded-xl hover:scale-[1.02] transition duration-500 min-h-[320px] flex flex-col justify-between">
                        <div>
                            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">
                                Level 03 &bull; Surgery
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Turnaround</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Q-PEP implementation to reverse unit-economic insolvency. The "Kill Switch" protocol.
                            </p>
                        </div>
                        <div className="mt-8">
                            <span className="text-white font-bold text-lg block">$40k</span>
                            <span className="text-zinc-600 text-xs uppercase tracking-widest">/ Month</span>
                        </div>
                    </div>

                    {/* Level 04 */}
                    <div className="p-6 border border-white/5 bg-zinc-900/30 rounded-xl hover:scale-[1.02] transition duration-500 min-h-[320px] flex flex-col justify-between">
                        <div>
                            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2">
                                Level 04 &bull; Syllabus
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Private Workshops</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Two-day intensive workshop for your exec team. "How to stop burning cash and start building equity."
                            </p>
                        </div>
                        <div className="mt-8">
                            <span className="text-white font-bold text-lg block">$15k</span>
                            <span className="text-zinc-600 text-xs uppercase tracking-widest">Per Session</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* EVSE Gateway */}
            <section className="mb-12 py-8 px-6 border-t border-white/5">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-white/10 w-16"></div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Enterprise Value Calculator</h2>
                        <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mt-2">// FINANCIAL DEFENSE MODELING</p>
                    </div>
                </div>

                <GatewayCard
                    title="EV Scenario Engine™"
                    href="/tools/ev-se"
                    color="cyan"
                    description="Launch Financial Defense Model"
                />
            </section>

            {/* Contact Section */}
            <section className="mt-12 border-t border-white/5 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <span className="font-mono text-cyan-500 text-xs uppercase tracking-widest mb-2 block">Direct Line</span>
                        <h2 className="text-3xl font-bold text-white">Initiate Protocol</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-zinc-400">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                            <a href="mailto:richardewing1@gmail.com" className="hover:text-white transition">richardewing1@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                            <span>(360) 480-6052</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-zinc-700 rounded-full"></span>
                            <a href="https://www.linkedin.com/in/richard-ewing-mba" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn Profile</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
