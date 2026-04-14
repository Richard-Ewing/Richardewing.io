import React from 'react';
import { ShieldAlert, BookOpen, ChevronRight, LockKeyhole } from 'lucide-react';
import { BorderBeam } from '@/app/components/magicui/border-beam';
import Meteors from '@/app/components/magicui/meteors';
import Link from 'next/link';
import ReportUnlocker from './unlocker';

export const metadata = {
    title: 'The State of AI Engineering 2026',
    description: 'The definitive executive playbook on FTE displacement, CapEx vs OpEx of LLMs, and surviving the capability chasm.',
};

export default function StateOfAIEngineering() {
    return (
        <div className="min-h-screen bg-black text-white relative font-sans overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/20 via-black/5 to-transparent pointer-events-none"></div>
            
            <Meteors count={20} />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 sm:py-32">
                <Link href="/" className="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-zinc-900 transition-colors mb-12 uppercase tracking-widest">
                    <ChevronRight size={14} className="mr-1 rotate-180" /> Back to Base
                </Link>

                {/* Hero Section */}
                <div className="space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono uppercase tracking-widest">
                        <LockKeyhole size={14} /> Intelligence Suite V3 / Gated Asset
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-white to-zinc-500 leading-tight">
                        State of AI <br />Engineering <span className="text-purple-500">2026</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        The definitive executive playbook for surviving the generative capability chasm. Discover exactly when your LLM OpEx outpaces human FTE displacement—and how to stop the bleeding.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start opacity-0 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-forwards">
                    
                    {/* The Gate */}
                    <div className="relative w-full rounded-2xl bg-white border border-zinc-200 p-8 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]">
                        <BorderBeam duration={8} size={250} colorFrom="#a855f7" colorTo="#3b82f6" />
                        
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                   <BookOpen className="text-purple-400" size={24} /> Unlock The Playbook
                                </h3>
                                <p className="text-sm text-zinc-400">
                                    Enter your executive email to instantly unlock the 40-page report and map your dashboard telemetry.
                                </p>
                            </div>
                            
                            <ReportUnlocker />
                        </div>
                    </div>

                    {/* What's Inside */}
                    <div className="space-y-8 pl-4">
                        <div>
                            <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">What's Inside?</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-500/20">1</div>
                                    <div>
                                        <p className="text-zinc-200 font-medium">The SLM vs API Deficit</p>
                                        <p className="text-xs text-zinc-500 mt-1">Why wrapping OpenAI is a tactical advantage but a strategic liability long-term.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-purple-500/20">2</div>
                                    <div>
                                        <p className="text-zinc-200 font-medium">FTE Displacement Timelines</p>
                                        <p className="text-xs text-zinc-500 mt-1">Exact mathematics on replacing Junior devs with Copilot vs RAG architecture.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-rose-500/20"><ShieldAlert size={12} /></div>
                                    <div>
                                        <p className="text-zinc-200 font-medium">Hostile Valuation Protection</p>
                                        <p className="text-xs text-zinc-500 mt-1">How PE firms use your unoptimized token spend to gut your EBITDA during M&amp;A.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                            <p className="text-xs text-zinc-500 font-mono italic">
                                "This is the document I wish my CTO read before we burned $4M trying to build an internal Claude wrapper." 
                                <br/><span className="text-zinc-300 mt-2 block">— Director of R&D, Series C Fintech</span>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
