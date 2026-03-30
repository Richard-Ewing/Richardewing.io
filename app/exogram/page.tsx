"use client";

import React from 'react';
import Link from 'next/link';
import BlurIn from '@/components/magicui/blur-in';
import { BorderBeam } from '@/components/magicui/border-beam';
import Meteors from '@/components/magicui/meteors';

export default function ExogramPage() {
    return (
        <main className="pt-20">
            <div className="page-container">

                {/* Hero */}
                <section className="section-lg text-center relative overflow-hidden">
                    <Meteors count={20} />

                    <div className="relative z-10">
                        {/* Logo */}
                        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                            { }
                            <img src="/images/exogram/logo-main.png" alt="Exogram Logo" className="w-full h-full object-contain" />
                        </div>

                        <BlurIn word="Exogram" className="text-4xl md:text-5xl font-bold text-white mb-4" />
                        <p className="text-xl text-purple-400 mb-4">
                            The Verification Infrastructure for AI
                        </p>
                        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                            AI systems generate language. Exogram maintains reality. A verification layer that sits between AI models and your application, ensuring every output is structurally valid, operationally safe, and auditably correct.
                        </p>

                        {/* Hero Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto items-center mt-8 mb-12">
                            <div className="flex justify-center md:justify-end w-full">
                                <div className="inline-flex items-center gap-3 px-5 h-[52px] w-[260px] rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    { }
                                    <img src="/assets/headshot.jpg" alt="Richard Ewing" className="w-8 h-8 rounded-full object-cover grayscale opacity-80" />
                                    <div className="text-left flex-1">
                                        <p className="text-white font-semibold text-xs leading-tight">Founded by Richard Ewing</p>
                                        <p className="text-gray-500 text-[10px] leading-tight">Product Economist</p>
                                    </div>
                                    <div className="pl-3 border-l border-white/10 h-6 flex items-center">
                                        <span className="text-green-500 text-[10px] font-mono tracking-wider">LIVE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-start w-full">
                                <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden inline-flex items-center justify-between px-5 h-[52px] w-[260px] rounded-xl bg-purple-600/10 text-white hover:bg-purple-600/20 transition-all group border border-transparent">
                                    <span className="font-semibold text-sm z-10">Visit Exogram.ai</span>
                                    <span className="group-hover:translate-x-1 transition-transform z-10">→</span>
                                    <BorderBeam size={60} duration={4} delay={2} borderWidth={1.5} colorFrom="#A855F7" colorTo="#00D4FF" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Problem */}
                <section className="section">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">The Problem</h2>
                        <p className="text-xl text-center text-gray-300 mb-12">
                            AI didn&apos;t fail because it&apos;s not smart enough.<br />
                            <span className="text-purple-400">It failed because it doesn&apos;t know what it&apos;s allowed to be wrong about.</span>
                        </p>
                        <div className="grid-2">
                            <div className="card">
                                <h3 className="font-semibold text-white mb-4">Modern AI Systems:</h3>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>• Generate fluent language without knowing truth</li>
                                    <li>• Forget prior decisions and context</li>
                                    <li>• Blend facts with confident confabulations</li>
                                    <li>• &quot;Remember&quot; errors as confidently as truth</li>
                                    <li>• Operate without operational boundaries</li>
                                    <li>• Process adversarial inputs without detection</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h3 className="font-semibold text-white mb-4">The Business Impact:</h3>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>• Hallucinations become policy decisions</li>
                                    <li>• Guesses become financial commitments</li>
                                    <li>• Memory corruption becomes liability</li>
                                    <li>• Trust becomes impossible at enterprise scale</li>
                                    <li>• Compliance violations accumulate silently</li>
                                    <li>• AI costs spiral without governance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Stack */}
                <section className="section bg-black/30 pt-0">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-white mb-8">The Stack</h2>
                        <p className="text-xl text-gray-300 mb-12">Exogram is the missing layer in the AI stack.</p>
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

                        <div className="mt-16 mb-4">
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                LLMs generate language. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">Exogram maintains reality.</span>
                            </p>
                            <p className="text-lg md:text-xl text-gray-400 mt-4 leading-relaxed max-w-3xl mx-auto">
                                Together, they enable intelligence that remembers, reasons, and can be trusted.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4-Layer Architecture Overview */}
                <section className="section">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4 text-center">Verification Architecture</h2>
                        <p className="text-zinc-400 text-center mb-12 max-w-xl mx-auto">Four independent verification layers. Adopt incrementally. Each one reduces AI risk measurably.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { name: 'Schema Integrity Engine', desc: 'Validates every AI output against structural contracts. Catches hallucinated fields, missing data, and type mismatches in <5ms.', metric: '<5ms validation', cardClass: 'p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5', badgeClass: 'text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30' },
                                { name: 'Boundary Control Protocol', desc: 'Enforces operational scope for AI agents using the EAAP protocol. Prevents unauthorized actions and scope creep.', metric: 'EAAP v1.0', cardClass: 'p-6 rounded-xl border border-purple-500/20 bg-purple-500/5', badgeClass: 'text-[10px] font-mono text-purple-400 px-2 py-0.5 rounded border border-purple-500/30' },
                                { name: 'Threat Prevention Layer', desc: 'Detects prompt injections, data exfiltration, PII leaks, and adversarial inputs with 99.2% accuracy.', metric: '99.2% detection', cardClass: 'p-6 rounded-xl border border-red-500/20 bg-red-500/5', badgeClass: 'text-[10px] font-mono text-red-400 px-2 py-0.5 rounded border border-red-500/30' },
                                { name: 'Memory Integrity System', desc: 'Cryptographic verification of AI memory. Prevents memory hallucinations and maintains cross-session consistency.', metric: 'Encrypted', cardClass: 'p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5', badgeClass: 'text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30' },
                            ].map(layer => (
                                <div key={layer.name} className={layer.cardClass}>
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-white font-bold">{layer.name}</h3>
                                        <span className={layer.badgeClass}>{layer.metric}</span>
                                    </div>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{layer.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/exogram/architecture" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                                Deep dive into the architecture →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Industry Use Cases Preview */}
                <section className="section bg-black/30">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Built for Every Industry Deploying AI</h2>
                        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">Healthcare, finance, legal, and enterprise teams trust Exogram to verify AI outputs before they reach users.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { icon: '🏥', label: 'Healthcare', stat: '99.8% accuracy' },
                                { icon: '🏦', label: 'Financial Services', stat: '100% audit trail' },
                                { icon: '⚖️', label: 'Legal', stat: 'Zero hallucinated citations' },
                                { icon: '🤖', label: 'AI Agents', stat: '100% action verification' },
                                { icon: '🛒', label: 'E-Commerce', stat: '40% fewer tickets' },
                                { icon: '📚', label: 'Education', stat: '98% factual accuracy' },
                            ].map(uc => (
                                <div key={uc.label} className="p-5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                                    <span className="text-3xl block mb-2">{uc.icon}</span>
                                    <p className="text-sm text-white font-semibold mb-1">{uc.label}</p>
                                    <p className="text-[11px] text-purple-400 font-mono">{uc.stat}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Link href="/exogram/use-cases" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                                See all use cases →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Subpage Navigation */}
                <section className="section">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">Explore Exogram</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/exogram/architecture" className="group p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40 transition-all">
                                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Deep Dive</span>
                                <h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-cyan-300 transition-colors">Architecture</h3>
                                <p className="text-sm text-zinc-400">4 verification layers, performance specs, and integration methods.</p>
                            </Link>
                            <Link href="/exogram/use-cases" className="group p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 transition-all">
                                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Industry</span>
                                <h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-purple-300 transition-colors">Use Cases</h3>
                                <p className="text-sm text-zinc-400">Healthcare, fintech, legal, and enterprise AI verification.</p>
                            </Link>
                            <Link href="/exogram/roadmap" className="group p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 transition-all">
                                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Direction</span>
                                <h3 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-emerald-300 transition-colors">Roadmap</h3>
                                <p className="text-sm text-zinc-400">What&apos;s shipped, in progress, and planned for Q2-Q4 2026.</p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Connection */}
                <section className="section">
                    <div className="max-w-3xl mx-auto">
                        <div className="card p-10 flex flex-col items-center text-center space-y-8">
                            <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl">
                                &quot;I write about why AI systems fail economically through my Product Economist work.<br />
                                <span className="text-purple-400">Exogram is what I&apos;m building to fix it.&quot;</span>
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-t border-white/10 pt-8 mt-4 items-center">
                                <div className="flex items-center justify-center md:justify-end gap-4 h-12">
                                    { }
                                    <img src="/assets/headshot.jpg" alt="Richard Ewing" className="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div className="text-left flex flex-col justify-center h-full">
                                        <p className="text-white font-semibold leading-none mb-1">Founded by Richard Ewing</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-gray-400 text-xs leading-none">Product Economist</p>
                                            <span className="text-emerald-500 text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20 leading-none flex items-center h-4">Live</span>
                                        </div>
                                    </div>
                                </div>
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
