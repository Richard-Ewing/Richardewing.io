"use client";

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

export default function ExogramPage() {
    return (
        <div className="min-h-screen">

            {/* JSON-LD for LLM/SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Exogram",
                        "description": "The Verification Infrastructure for AI — the missing trust layer between AI models and applications, maintaining context, meaning, and truth.",
                        "url": "https://exogram.ai",
                        "applicationCategory": "AI Infrastructure",
                        "operatingSystem": "Cloud",
                        "founder": {
                            "@type": "Person",
                            "name": "Richard Ewing",
                            "jobTitle": "Product Economist",
                            "url": "https://richardewing.io"
                        },
                        "sameAs": ["https://exogram.ai"]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        {/* Placeholder Logo */}
                        <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-purple)] to-blue-600 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                            E
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Exogram</h1>
                    <p className="text-2xl text-[var(--accent-purple)] mb-12">The Verification Infrastructure for AI</p>

                    <div className="flex flex-col items-center justify-center p-6 bg-[var(--bg-secondary)] rounded-2xl border border-white/10 max-w-lg mx-auto mb-12">
                        <div className="text-sm text-gray-400 mb-2 uppercase tracking-widest">Founder</div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--accent-purple)]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/avatar.jpg" alt="Richard Ewing" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-left">
                                <div className="text-white font-bold text-lg">Richard Ewing</div>
                                <div className="text-[var(--accent-cyan)] text-sm">Product Economist</div>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 w-full flex justify-between items-center text-xs">
                            <span className="text-gray-500">STATUS</span>
                            <span className="text-green-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                Live / Active Development
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 px-6 bg-[var(--bg-secondary)] border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 text-center">The Problem</h2>

                    <p className="text-3xl md:text-4xl font-bold text-center mb-16 leading-tight">
                        AI didn't fail because it's not smart enough.<br />
                        <span className="text-gray-500">It failed because it doesn't know what it's allowed to be wrong about.</span>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Modern AI Systems</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex gap-3"><span className="text-red-500">✖</span> Generate fluent language without knowing truth</li>
                                <li className="flex gap-3"><span className="text-red-500">✖</span> Forget prior decisions instantly</li>
                                <li className="flex gap-3"><span className="text-red-500">✖</span> Blend facts with guesses indiscriminately</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">The Result</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex gap-3"><span className="text-orange-500">⚠</span> Hallucinations become policy</li>
                                <li className="flex gap-3"><span className="text-orange-500">⚠</span> Guesses become commitments</li>
                                <li className="flex gap-3"><span className="text-orange-500">⚠</span> Memory becomes a liability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12">The Solution</h2>
                    <p className="text-2xl text-white mb-12">Exogram is the missing layer in the AI stack.</p>

                    <div className="space-y-4 max-w-lg mx-auto mb-16 font-mono text-sm">
                        <div className="p-4 rounded border border-white/10 bg-[var(--bg-secondary)] text-gray-500 flex justify-between">
                            <span>Layer 1: COMPUTE</span> <span>GPUs, Infrastructure</span>
                        </div>
                        <div className="flex justify-center text-gray-700">↓</div>
                        <div className="p-4 rounded border border-white/10 bg-[var(--bg-secondary)] text-gray-500 flex justify-between">
                            <span>Layer 2: MODELS</span> <span>OpenAI, Anthropic</span>
                        </div>
                        <div className="flex justify-center text-[var(--accent-purple)] font-bold">↓</div>
                        <div className="p-6 rounded-lg border-2 border-[var(--accent-purple)] bg-[var(--accent-purple)]/10 text-white flex justify-between shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                            <span className="font-bold">Layer 3: VERIFICATION</span> <span className="text-[var(--accent-purple)]">★ EXOGRAM</span>
                        </div>
                        <div className="flex justify-center text-gray-700">↓</div>
                        <div className="p-4 rounded border border-white/10 bg-[var(--bg-secondary)] text-gray-500 flex justify-between">
                            <span>Layer 4: APPLICATIONS</span> <span>Agents, Copilots, SaaS</span>
                        </div>
                    </div>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        LLMs generate language. <strong className="text-white">Exogram maintains reality.</strong><br />
                        Together, they enable intelligence that remembers, reasons, and can be trusted.
                    </p>
                </div>
            </section>

            {/* Connection & CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] text-center">
                <div className="max-w-3xl mx-auto">
                    <blockquote className="text-2xl font-light italic text-gray-300 mb-8">
                        "I write about why AI systems fail economically through my Product Economist work.
                        Exogram is what I'm building to fix it."
                    </blockquote>
                    <div className="text-[var(--accent-purple)] font-bold mb-12">— Richard Ewing</div>

                    <a
                        href="https://exogram.ai"
                        target="_blank"
                        className="inline-block px-8 py-4 rounded-lg bg-[var(--accent-purple)] text-white font-bold text-lg hover:bg-[var(--accent-purple)]/80 transition-all hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                    >
                        Visit Exogram.ai →
                    </a>
                </div>
            </section>

        </div>
    );
}
