"use client";

import Link from 'next/link';
import Image from 'next/image';
import { AsSeenIn } from '@/components/AsSeenIn';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COMMERCIAL_OFFERS } from '@/lib/platform/offers/offers';
import PricingLadderStepper from '@/app/components/PricingLadderStepper';


const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full bg-gradient-to-br from-rose-300/50 via-violet-200/40 to-transparent blur-3xl animate-drift-slow" />
                <div className="absolute bottom-[-15%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-purple-300/40 via-indigo-200/30 to-transparent blur-3xl animate-drift-slow-reverse" />
                <div className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full bg-gradient-to-bl from-amber-200/30 via-rose-100/25 to-transparent blur-3xl animate-drift-subtle" />
                {/* Subtle premium grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
                {/* Soft center highlight gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45)_0%,transparent_75%)] pointer-events-none" />
            </div>

            <div className="page-container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left: Text content */}
                    <div className="flex-1 text-center lg:text-left">

                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/80 shadow-sm mb-6">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm font-semibold text-zinc-700 tracking-wide">Richard Ewing — AI Economist & Platform Architect</span>
                        </div>

                        {/* Direct Positioning Byline */}
                        <p className="text-base text-zinc-900 mb-6 max-w-xl leading-relaxed font-bold">
                            Richard Ewing is an AI Economist and Founder of <Link href="/exogram" className="text-purple-700 underline font-extrabold hover:text-purple-900">Exogram</Link> (enterprise AI governance) and <a href="https://careerwin.ai/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline font-extrabold hover:text-indigo-900">CareerWin.ai</a> (career intelligence).
                        </p>

                        {/* H1 Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-zinc-950 mb-6 leading-[1.15] max-w-2xl tracking-tight font-grotesk">
                            I help CTOs and CFOs answer three questions:
                        </h1>

                        {/* 3-Question Bullet Framework */}
                        <div className="space-y-3 mb-8 text-left bg-white/60 backdrop-blur-sm border border-zinc-300 p-5 rounded-2xl max-w-xl shadow-sm">
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                                <p className="text-sm text-zinc-900 font-semibold">Where is our AI spend actually going?</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                                <p className="text-sm text-zinc-900 font-semibold">Which engineering initiatives produce revenue vs. burn?</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                                <p className="text-sm text-zinc-900 font-semibold">How do we enforce governance before regulatory fines hit?</p>
                            </div>
                        </div>



                        {/* Dominant Primary Assessment CTA + Secondary Gut-Check Link */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 mb-8">
                            <Link
                                href="/assessment"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 hover:-translate-y-0.5 uppercase tracking-wider text-xs"
                            >
                                Take Free 15-Q AI Economics Assessment
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/services#gut_check"
                                className="text-xs font-mono font-bold text-zinc-700 hover:text-purple-700 underline transition-colors"
                            >
                                Or book a ${COMMERCIAL_OFFERS.gut_check.price} Gut-Check Diagnostic directly →
                            </Link>
                        </div>

                        {/* Credibility - Knowledge Platform */}
                        <div className="mb-6 space-y-3">
                            <div>
                                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-1">Audience Reach</span>
                                <p className="text-zinc-600 text-xs font-medium leading-relaxed">
                                    <span className="font-bold text-zinc-900">11,141</span> LinkedIn followers · <span className="font-bold text-zinc-900">1,366</span> newsletter subscribers · <span className="font-bold text-zinc-900">778</span> AI search citations
                                </p>
                            </div>
                            <div>
                                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-1">Knowledge Engine</span>
                                <p className="text-zinc-600 text-xs font-medium leading-relaxed">
                                    <span className="font-bold text-zinc-900">19</span> frameworks · <span className="font-bold text-zinc-900">56</span> definitions · <span className="font-bold text-zinc-900">136</span> articles · <span className="font-bold text-zinc-900">25</span> diagnostic tools
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Headshot */}
                    <div className="flex-shrink-0 relative">
                        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                            {/* Gradient ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 via-purple-400 to-rose-400 p-[3px]">
                                <div className="w-full h-full rounded-full overflow-hidden bg-[#F5F0EB]">
                                    <Image
                                        src="/assets/headshot.jpg"
                                        alt="Richard Ewing - AI Economist"
                                        fill
                                        className="object-cover rounded-full"
                                        sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Horizontal Pricing Progression Ladder */}
                <div className="mt-12">
                    <PricingLadderStepper />
                </div>

                {/* As Seen In */}
                <div className="mt-12">
                    <AsSeenIn />
                </div>

            </div>
        </section>
    );
};

export default Hero;
