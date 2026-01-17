'use client';

import Image from 'next/image';
import { ScrollReveal } from '../components/magicui/scroll-reveal';

export default function ManifestoPage() {
    return (
        <div className="max-w-4xl w-full mx-auto relative z-10">
            {/* FX Background */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-12 lg:p-16 border border-white/10 bg-zinc-900/40 backdrop-blur-md relative z-10">
                    <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] mb-8 sm:mb-12 block text-center opacity-80">
                        The Doctrine of Sovereignty
                    </span>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white mb-12 sm:mb-16 text-center leading-[1.1] tracking-tight">
                        The Era of the <br /><span className="italic text-zinc-600">"Happy Builder"</span> is Over.
                    </h1>

                    <article className="prose prose-invert prose-lg mx-auto leading-relaxed text-zinc-300 max-w-none">
                        <p className="first-letter:text-5xl sm:first-letter:text-7xl first-letter:float-left first-letter:mr-3 sm:first-letter:mr-4 first-letter:text-white first-letter:font-serif text-zinc-300 text-base sm:text-lg">
                            For fifteen years, we have been told that the job of a Product Leader is to "empathize." We built "Feature Factories" disguised as "Agile Squads." We celebrated velocity while our unit economics quietly decayed.
                        </p>

                        <div className="my-10 sm:my-16 relative pl-4 sm:pl-8 border-l-2 border-gold/50">
                            <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-white leading-tight m-0">
                                "Innovation without Solvency is just Philanthropy."
                            </p>
                        </div>

                        <p className="text-zinc-300 mb-6 text-base sm:text-lg">
                            The ZIRP era is dead. The Board no longer cares about your "User Journey Maps." They care about <strong className="text-white font-bold">Yield</strong>. This is not a demotion; it is an evolution.
                        </p>

                        <p className="text-zinc-300 text-base sm:text-lg">
                            We are not just builders anymore. We are <strong className="text-white font-bold">Architects of Capital</strong>. We must learn to speak the language of the P&L, or we will be relegated to the children's table while the CFO makes the real roadmap decisions.
                        </p>

                        <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gold blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-800 border-2 border-white/10 overflow-hidden relative">
                                    <Image src="/assets/images/headshot.jpg" alt="Richard Ewing" fill className="object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                                </div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="font-serif text-white text-xl sm:text-2xl italic mb-1">Richard Ewing</div>
                                <div className="font-mono text-xs text-gold tracking-widest uppercase">The Product Economist</div>
                            </div>
                        </div>
                    </article>
                </div>
            </ScrollReveal>
        </div>
    );
}
