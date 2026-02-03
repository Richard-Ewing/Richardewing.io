'use client';

import Image from 'next/image';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import ShineBorder from '../components/magicui/shine-border';
import Link from 'next/link';

export default function ManifestoPage() {
    return (
        <div className="max-w-4xl w-full mx-auto relative z-10">
            {/* FX Background */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-12 lg:p-16 border border-white/10 bg-zinc-900/40 relative z-10 overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />

                    <div className="relative">
                        <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] mb-8 sm:mb-12 block text-center opacity-80">
                            The Doctrine of Sovereignty
                        </span>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white mb-12 sm:mb-16 text-center leading-[1.1] tracking-tight">
                            The Era of the <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">"Happy Builder"</span><br />
                            <span className="text-gold">is Over.</span>
                        </h1>

                        <article className="prose prose-invert prose-lg mx-auto leading-relaxed text-zinc-300 max-w-none">
                            <p className="first-letter:text-6xl sm:first-letter:text-8xl first-letter:float-left first-letter:mr-3 sm:first-letter:mr-4 first-letter:text-gold first-letter:font-serif text-zinc-300 text-base sm:text-lg">
                                For fifteen years, we have been told that the job of a Product Leader is to "empathize." We built "Feature Factories" disguised as "Agile Squads." We celebrated velocity while our unit economics quietly decayed. We shipped features that users didn't want with money we didn't have.
                            </p>

                            <div className="my-10 sm:my-16 relative pl-6 sm:pl-8 border-l-4 border-gold">
                                <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white leading-tight m-0">
                                    "Innovation without Solvency<br />is just Philanthropy."
                                </p>
                            </div>

                            <p className="text-zinc-300 mb-6 text-base sm:text-lg">
                                The ZIRP era is <span className="text-red-500 font-bold">dead</span>. The Board no longer cares about your "User Journey Maps." They care about <span className="text-white font-bold">Yield</span>. This is not a demotion; it is an evolution. The survivors will be those who learn to speak the language of capital.
                            </p>

                            <div className="capsule-container rounded-xl p-6 sm:p-8 my-10">
                                <div className="font-mono text-xs text-gold uppercase tracking-widest mb-4">The New Mandate</div>
                                <p className="text-white font-bold text-lg sm:text-xl mb-4">
                                    We are not just builders anymore. We are Architects of Capital.
                                </p>
                                <p className="text-zinc-400 text-sm sm:text-base">
                                    We must learn to speak the language of the P&L, or we will be relegated to the children's table while the CFO makes the real roadmap decisions. The Product Economist exists to bridge this gap—to give technical leaders the financial fluency they need to command the room.
                                </p>
                            </div>

                            <p className="text-zinc-300 text-base sm:text-lg">
                                This is not a condemnation of creativity. It is a call to <span className="text-white font-bold">responsible creativity</span>. Build what matters. Kill what doesn't. Own the numbers. That is the path to sovereignty.
                            </p>

                            <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-gold/30 blur-xl opacity-30 group-hover:opacity-60 transition-opacity rounded-full" />
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-zinc-800 border-2 border-white/10 overflow-hidden relative">
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
                </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={200}>
                <div className="text-center py-12 mt-8">
                    <p className="text-zinc-400 mb-6">Ready to become an Architect of Capital?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ShineBorder borderColor="rgba(212, 175, 55, 0.6)" duration={2}>
                            <Link
                                href="/advisory"
                                className="inline-block bg-white text-black font-bold uppercase text-sm px-8 py-4 tracking-widest hover:bg-gold transition-colors"
                            >
                                Work With Me →
                            </Link>
                        </ShineBorder>
                        <Link
                            href="/doctrine"
                            className="inline-block border border-white/30 text-white font-bold uppercase text-sm px-8 py-4 rounded-xl tracking-widest hover:bg-white/5 transition-colors"
                        >
                            Read The Doctrine
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
