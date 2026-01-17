'use client';

import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';

export default function DoctrinePage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                    <span className="font-mono text-emerald-500 text-xs uppercase tracking-widest mb-4 block">The Doctrine</span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Sovereignty in <br />
                        <span className="text-emerald-400">Product Economics.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed border-l-2 border-emerald-500/50 pl-6">
                        The following principles govern the methodology of the Product Economist. They are not suggestions; they are the immutable laws of software solvency.
                    </p>
                </div>
            </ScrollReveal>

            {/* 2x2 Grid - Clean without background numbers */}
            <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                    <GlowCard className="p-6 sm:p-8" glowColor="cyan">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-4">Capital Allocation &gt; Agile Theater</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            We do not measure success by velocity, story points, or features shipped. We measure success by <strong className="text-white">Return on Invested Capital (ROIC)</strong>. Every sprint is a deployment of capital. If a feature does not generate revenue or reduce risk, it is waste.
                        </p>
                    </GlowCard>

                    <GlowCard className="p-6 sm:p-8" glowColor="cyan">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-4">The Truth is in the P&amp;L</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Users lie. Net Promoter Scores (NPS) lie. Roadmaps lie. The <strong className="text-white">Profit &amp; Loss statement</strong> tells the only truth that matters. If the unit economics of a product are upside down, no amount of "user empathy" will save it.
                        </p>
                    </GlowCard>

                    <GlowCard className="p-6 sm:p-8" glowColor="cyan">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-4">Kill Zombies Ruthlessly</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            A "Zombie Feature" is code that requires maintenance (Cost) but generates zero incremental value (Revenue). We identify these features and execute the <strong className="text-white">Kill Switch Protocol</strong>. Deprecation is the highest form of optimization.
                        </p>
                    </GlowCard>

                    <GlowCard className="p-6 sm:p-8" glowColor="cyan">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-4">Sovereignty Over Dependency</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Do not build your house on rented land. Minimize dependency on third-party APIs, platforms, and bloated frameworks that you cannot control. Own your core IP. Build small, sharp tools that do one thing perfectly.
                        </p>
                    </GlowCard>
                </div>
            </ScrollReveal>

            {/* Recognition - Real publication credits */}
            <ScrollReveal delay={200}>
                <div className="capsule-container p-6 sm:p-10 rounded-2xl sm:rounded-[2rem]">
                    <h3 className="text-white font-bold text-xl sm:text-2xl mb-6 flex items-center gap-3">
                        <span className="w-1 h-6 bg-emerald-500 rounded-full" />
                        Recognition &amp; Publications
                    </h3>

                    {/* Publications Grid - Psychology: External validation builds trust */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <a href="https://builtin.com/authors/richard-ewing" target="_blank" rel="noopener noreferrer" className="group">
                            <GlowCard className="p-5 h-full" glowColor="cobalt">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="text-[10px] font-mono text-cobalt uppercase tracking-widest">Expert Contributor</div>
                                    <span className="text-zinc-500 group-hover:text-white transition">→</span>
                                </div>
                                <div className="text-lg font-bold text-white mb-2">Built In</div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Monthly columnist. January 2026 article featured in Editor's Newsletter: <span className="text-zinc-300">"AI Product Business Test"</span>
                                </p>
                            </GlowCard>
                        </a>

                        <a href="https://www.mindtheproduct.com" target="_blank" rel="noopener noreferrer" className="group">
                            <GlowCard className="p-5 h-full" glowColor="cyan">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Contributor</div>
                                    <span className="text-zinc-500 group-hover:text-white transition">→</span>
                                </div>
                                <div className="text-lg font-bold text-white mb-2">Mind the Product</div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    February 2026 article. Featured in their newsletter.
                                </p>
                            </GlowCard>
                        </a>

                        <a href="https://www.cio.com" target="_blank" rel="noopener noreferrer" className="group">
                            <GlowCard className="p-5 h-full" glowColor="gold">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="text-[10px] font-mono text-gold uppercase tracking-widest">Expert Contributor</div>
                                    <span className="text-zinc-500 group-hover:text-white transition">→</span>
                                </div>
                                <div className="text-lg font-bold text-white mb-2">Foundry (CIO.com)</div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Monthly columnist for enterprise technology network. February 2026 debut.
                                </p>
                            </GlowCard>
                        </a>

                        <a href="https://hackernoon.com/u/richardewing1" target="_blank" rel="noopener noreferrer" className="group">
                            <GlowCard className="p-5 h-full" glowColor="cyan">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Published</div>
                                    <span className="text-zinc-500 group-hover:text-white transition">→</span>
                                </div>
                                <div className="text-lg font-bold text-white mb-2">HackerNoon</div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Technology publication reaching 4M+ monthly readers.
                                </p>
                            </GlowCard>
                        </a>
                    </div>

                    {/* Awards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <GlowCard className="p-5 relative" glowColor="cobalt">
                            <div className="absolute top-0 right-0 bg-cobalt/10 px-3 py-1 rounded-bl-xl text-[10px] font-mono text-cobalt uppercase tracking-tighter">
                                Innovation Award
                            </div>
                            <div className="text-[10px] font-mono text-zinc-400 uppercase mb-2 mt-4">Public Sector</div>
                            <div className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">Digital Transformation Excellence</div>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Migration of 7.7M users to modern cloud infrastructure with zero downtime.
                            </p>
                        </GlowCard>

                        <GlowCard className="p-5 relative" glowColor="cyan">
                            <div className="absolute top-0 right-0 bg-emerald-500/10 px-3 py-1 rounded-bl-xl text-[10px] font-mono text-emerald-400 uppercase tracking-tighter">
                                Governor's Award
                            </div>
                            <div className="text-[10px] font-mono text-zinc-400 uppercase mb-2 mt-4">Washington State</div>
                            <div className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">The Extra Mile Award</div>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Selected by Gov. Jay Inslee for exceptional cross-functional collaboration.
                            </p>
                        </GlowCard>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
