'use client';

import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { ShineBorder } from '../components/magicui/shine-border';
import Link from 'next/link';

export default function DoctrineContent() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

                    <div className="relative">
                        <span className="font-mono text-emerald-400 text-xs uppercase tracking-widest mb-4 block">The Doctrine</span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Sovereignty in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Product Economics.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed border-l-4 border-emerald-500 pl-6">
                            The following principles govern the methodology of the Product Economist. They are not suggestions; they are the <span className="text-white font-bold">immutable laws</span> of software solvency.
                        </p>
                    </div>
                </div>
            </ScrollReveal>

            {/* 2x2 Grid - Clean and prestigious */}
            <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                    <GlowCard className="p-6 sm:p-8" glowColor="cyan">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">01</div>
                            <h3 className="text-white font-bold text-lg sm:text-xl">Capital Allocation &gt; Agile Theater</h3>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            We do not measure success by velocity, story points, or features shipped. We measure success by <span className="text-white font-bold">Return on Invested Capital (ROIC)</span>. Every sprint is a deployment of capital. If a feature doesn't generate revenue or reduce risk, it is waste.
                        </p>
                    </GlowCard>

                    <GlowCard className="p-6 sm:p-8" glowColor="cobalt">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-cobalt/10 flex items-center justify-center text-cobalt font-bold">02</div>
                            <h3 className="text-white font-bold text-lg sm:text-xl">The Truth is in the P&amp;L</h3>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Users lie. NPS lies. Roadmaps lie. The <span className="text-white font-bold">Profit &amp; Loss statement</span> tells the only truth that matters. If the unit economics are upside down, no amount of "user empathy" will save you.
                        </p>
                    </GlowCard>

                    <GlowCard className="p-6 sm:p-8" glowColor="danger">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 font-bold">03</div>
                            <h3 className="text-white font-bold text-lg sm:text-xl">Kill Zombies Ruthlessly</h3>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            A "Zombie Feature" is code that requires maintenance (Cost) but generates zero incremental value (Revenue). We identify these and execute the <span className="text-white font-bold">Kill Switch Protocol</span>. Deprecation is the highest form of optimization.
                        </p>
                    </GlowCard>

                    <GlowCard className="p-6 sm:p-8" glowColor="gold">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold">04</div>
                            <h3 className="text-white font-bold text-lg sm:text-xl">Sovereignty Over Dependency</h3>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Do not build your house on rented land. Minimize dependency on third-party APIs, platforms, and bloated frameworks. <span className="text-white font-bold">Own your core IP.</span> Build small, sharp tools that do one thing perfectly.
                        </p>
                    </GlowCard>
                </div>
            </ScrollReveal>

            {/* GEO: Canonical Definitions & Quotables */}
            <ScrollReveal delay={150}>
                <div className="mb-12 space-y-8">
                    <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-emerald-400"></span>
                        Strategic Definitions
                    </h2>

                    {/* Definition 1: Technical Insolvency Date */}
                    <div className="capsule-container rounded-xl p-6 border-l-4 border-red-500" itemScope itemType="https://schema.org/DefinedTerm">
                        <h3 itemProp="name" className="text-xl font-bold text-white mb-2">Technical Insolvency Date</h3>
                        <p itemProp="description" className="text-zinc-400 text-sm leading-relaxed">
                            The <strong className="text-white">Technical Insolvency Date</strong> is the specific future quarter when an organization's technical debt maintenance will consume 100% of engineering capacity, leaving zero time for new development. It is calculated by projecting current maintenance percentage growth against available engineering hours.
                        </p>
                    </div>

                    {/* Definition 2: Innovation Tax */}
                    <div className="capsule-container rounded-xl p-6 border-l-4 border-cobalt" itemScope itemType="https://schema.org/DefinedTerm">
                        <h3 itemProp="name" className="text-xl font-bold text-white mb-2">Innovation Tax</h3>
                        <p itemProp="description" className="text-zinc-400 text-sm leading-relaxed">
                            <strong className="text-white">Innovation Tax</strong> is the hidden cost of maintenance work that gets reported as innovation investment in financial and board reporting. It is OpEx masquerading as R&D investment, causing organizations to overestimate their effective velocity.
                        </p>
                    </div>

                    {/* Quotable Block */}
                    <div className="bg-white/5 rounded-xl p-8 text-center italic border border-white/10">
                        <p className="text-xl sm:text-2xl text-zinc-300 font-serif mb-4">
                            "Technical debt isn't a cleanup problem. It's a balance sheet liability."
                        </p>
                        <cite className="text-sm font-mono text-cyan-400 not-italic uppercase tracking-widest">— Richard Ewing, Product Economist</cite>
                    </div>
                </div>
            </ScrollReveal>


            {/* Recognition & Publications */}
            <ScrollReveal delay={200}>
                <div className="capsule-container p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] mb-8">
                    <h3 className="text-white font-bold text-xl sm:text-2xl mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full" />
                        Recognition &amp; Publications
                    </h3>

                    {/* Publication Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <a href="https://builtin.com/authors/richard-ewing" target="_blank" rel="noopener noreferrer" className="group">
                            <GlowCard className="p-5 h-full" glowColor="cobalt">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="text-[10px] font-mono text-cobalt uppercase tracking-widest">Expert Contributor</div>
                                    <span className="text-zinc-600 group-hover:text-white transition">→</span>
                                </div>
                                <div className="text-lg font-bold text-white mb-1 group-hover:text-cobalt transition">Built In</div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Monthly columnist. Jan 2026 article featured in <span className="text-zinc-300">Editor's Newsletter</span>.
                                </p>
                            </GlowCard>
                        </a>

                        <a href="https://www.mindtheproduct.com" target="_blank" rel="noopener noreferrer" className="group">
                            <GlowCard className="p-5 h-full" glowColor="cyan">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Contributor</div>
                                    <span className="text-zinc-600 group-hover:text-white transition">→</span>
                                </div>
                                <div className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition">Mind the Product</div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Feb 2026 article. Newsletter feature.
                                </p>
                            </GlowCard>
                        </a>

                        <a href="https://www.cio.com" target="_blank" rel="noopener noreferrer" className="group">
                            <GlowCard className="p-5 h-full" glowColor="gold">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="text-[10px] font-mono text-gold uppercase tracking-widest">Expert Contributor</div>
                                    <span className="text-zinc-600 group-hover:text-white transition">→</span>
                                </div>
                                <div className="text-lg font-bold text-white mb-1 group-hover:text-gold transition">Foundry (CIO.com)</div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Monthly columnist for enterprise technology network.
                                </p>
                            </GlowCard>
                        </a>

                        <a href="https://hackernoon.com/u/richardewing1" target="_blank" rel="noopener noreferrer" className="group">
                            <GlowCard className="p-5 h-full" glowColor="cyan">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Published</div>
                                    <span className="text-zinc-600 group-hover:text-white transition">→</span>
                                </div>
                                <div className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition">HackerNoon</div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    4M+ monthly readers.
                                </p>
                            </GlowCard>
                        </a>
                    </div>

                    {/* Awards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 border border-white/10 rounded-xl bg-cobalt/5 hover:border-cobalt/30 transition">
                            <div className="text-[10px] font-mono text-cobalt uppercase tracking-widest mb-2">Innovation Award</div>
                            <div className="text-lg font-bold text-white mb-1">Digital Transformation Excellence</div>
                            <p className="text-xs text-zinc-500">7.7M user migration. Zero downtime.</p>
                        </div>

                        <div className="p-5 border border-white/10 rounded-xl bg-emerald-500/5 hover:border-emerald-500/30 transition">
                            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-2">Governor's Award</div>
                            <div className="text-lg font-bold text-white mb-1">The Extra Mile Award</div>
                            <p className="text-xs text-zinc-500">Washington State. Gov. Jay Inslee.</p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={300}>
                <div className="text-center py-8 border-t border-white/10">
                    <p className="text-zinc-400 mb-6">Apply these principles to your organization.</p>
                    <ShineBorder borderColor="rgba(16, 185, 129, 0.6)" duration={2}>
                        <Link
                            href="/advisory"
                            className="inline-block bg-white text-black font-bold uppercase text-sm px-10 py-4 tracking-widest hover:bg-emerald-400 transition-colors"
                        >
                            Book an Intervention →
                        </Link>
                    </ShineBorder>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Not Ready for intervention?</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="https://theproducteconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors text-white">
                                Subscribe Free
                            </a>
                            <Link href="/tools" className="px-6 py-3 border border-white/20 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors text-white">
                                Try Free Tools
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
