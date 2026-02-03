"use client";

import React from 'react';

export default function ExogramPage() {
    return (
        <main className="pt-20">
            <div className="page-container">

                {/* Hero */}
                <section className="section-lg text-center">

                    {/* Logo */}
                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/exogram/logo-main.png" alt="Exogram Logo" className="w-full h-full object-contain" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Exogram
                    </h1>
                    <p className="text-xl text-purple-400 mb-8">
                        The Verification Infrastructure for AI
                    </p>

                    {/* Founder card */}
                    <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 mb-8">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/assets/headshot.jpg" alt="Richard Ewing" className="w-12 h-12 rounded-full object-cover" />
                        <div className="text-left">
                            <p className="text-white font-semibold">Founded by Richard Ewing</p>
                            <p className="text-gray-400 text-sm">Product Economist</p>
                        </div>
                        <div className="pl-4 border-l border-white/10">
                            <p className="text-xs text-gray-500">Status</p>
                            <p className="text-green-400 text-sm">Live</p>
                        </div>
                    </div>

                    <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500">
                        Visit Exogram.ai →
                    </a>

                </section>

                {/* The Problem */}
                <section className="section">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">The Problem</h2>

                        <p className="text-xl text-center text-gray-300 mb-12">
                            AI didn't fail because it's not smart enough.<br />
                            <span className="text-purple-400">It failed because it doesn't know what it's allowed to be wrong about.</span>
                        </p>

                        <div className="grid-2">
                            <div className="card">
                                <h3 className="font-semibold text-white mb-4">Modern AI Systems:</h3>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>• Generate fluent language without knowing truth</li>
                                    <li>• Forget prior decisions</li>
                                    <li>• Blend facts with guesses</li>
                                    <li>• "Remember" errors as confidently as truth</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3 className="font-semibold text-white mb-4">The Result:</h3>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>• Hallucinations become policy</li>
                                    <li>• Guesses become commitments</li>
                                    <li>• Memory becomes liability</li>
                                    <li>• Trust becomes impossible</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Solution */}
                <section className="section bg-black/30">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-white mb-8">The Solution</h2>
                        <p className="text-xl text-gray-300 mb-12">
                            Exogram is the missing layer in the AI stack.
                        </p>

                        {/* Stack diagram */}
                        <div className="space-y-4 max-w-md mx-auto">
                            <div className="px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-left">
                                <span className="text-gray-500 text-sm">Layer 1</span>
                                <span className="text-white ml-4">COMPUTE</span>
                                <span className="text-gray-500 ml-4">→ GPUs, infrastructure</span>
                            </div>
                            <div className="px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-left">
                                <span className="text-gray-500 text-sm">Layer 2</span>
                                <span className="text-white ml-4">MODELS</span>
                                <span className="text-gray-500 ml-4">→ OpenAI, Anthropic, etc.</span>
                            </div>
                            <div className="px-6 py-4 rounded-lg bg-purple-600/20 border-2 border-purple-500 text-left">
                                <span className="text-purple-400 text-sm">Layer 3</span>
                                <span className="text-white ml-4 font-bold">VERIFICATION</span>
                                <span className="text-purple-400 ml-4">→ EXOGRAM</span>
                            </div>
                            <div className="px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-left">
                                <span className="text-gray-500 text-sm">Layer 4</span>
                                <span className="text-white ml-4">APPLICATIONS</span>
                                <span className="text-gray-500 ml-4">→ Agents, Copilots, SaaS</span>
                            </div>
                        </div>

                        <p className="text-gray-400 mt-12">
                            LLMs generate language. <span className="text-white">Exogram maintains reality.</span><br />
                            Together, they enable intelligence that remembers, reasons, and can be trusted.
                        </p>
                    </div>
                </section>

                {/* Connection */}
                <section className="section">
                    <div className="max-w-3xl mx-auto">
                        <div className="card p-10 flex flex-col items-center text-center space-y-8">
                            <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl">
                                "I write about why AI systems fail economically through my Product Economist work.<br />
                                <span className="text-purple-400">Exogram is what I'm building to fix it."</span>
                            </p>

                            {/* Founder & CTAs Container - Side by Side on Desktop */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-t border-white/10 pt-8 mt-4 items-center">

                                {/* Founder Attribution - Right Aligned on Desktop to kiss the center line */}
                                <div className="flex items-center justify-center md:justify-end gap-4 h-12">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/assets/headshot.jpg" alt="Richard Ewing" className="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div className="text-left flex flex-col justify-center h-full">
                                        <p className="text-white font-semibold leading-none mb-1">Founded by Richard Ewing</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-gray-400 text-xs leading-none">Product Economist</p>
                                            <span className="text-emerald-500 text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20 leading-none flex items-center h-4">Live</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTAs - Left Aligned on Desktop to kiss the center line */}
                                <div className="flex items-center justify-center md:justify-start h-12">
                                    <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-2.5 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] h-10">
                                        Visit Exogram.ai →
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
