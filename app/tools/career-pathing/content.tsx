'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Briefcase, GraduationCap, Network, PocketKnife, ArrowRight, Server, ShieldAlert, Zap, Search } from 'lucide-react';
import Link from 'next/link';
import { GlowCard } from '../../components/magicui/glow-card';
import { BorderBeam } from '../../components/magicui/border-beam';

export default function CareerPathingContent() {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });

    const resetQuestions = () => {
        setStep(1);
        setAnswers({ q1: '', q2: '', q3: '' });
    };

    const runAnalysis = () => {
        setStep(4);
    };

    const getRecommendation = () => {
        // AI Pivot
        if (answers.q2 === 'ai') {
            return {
                title: "You are attempting an AI Architecture Pivot.",
                diagnosis: "The market is punishing pure Web2 coders and rewarding domain experts who can integrate sovereign LLMs securely. You do not need to simply learn PyTorch. You need to learn AI Product Economics, agentic inference orchestration, and how to quantify AI ROI to your CFO.",
                tracks: [
                    { id: 'Track 11', name: 'AI Operations & Economics', desc: 'Master SLM vs LLM costs and inference infrastructure.' },
                    { id: 'Track 2', name: 'AI Engineering ROI', desc: 'Quantify exactly how AI will replace legacy OpEx.' },
                    { id: 'Track 30', name: 'Sovereign Models', desc: 'Building defensible, offline AI architectures.' }
                ],
                tool: { name: 'AUEB Diagnostic Tool', url: '/tools/aueb', desc: 'Run the AI Unit Economics Blueprint to price your transition.' },
                ctaLink: "/vault",
                icon: <Network className="w-8 h-8 text-sky-400 mb-4" />,
                color: "from-sky-900/40 via-black to-black border-sky-500/30"
            };
        }
        
        // System Design / Interviewing
        if (answers.q2 === 'interviews' || (answers.q1 === 'mid' && answers.q2 === 'ceiling')) {
            return {
                title: "Your System Design heuristics are failing you.",
                diagnosis: "You are likely passing the algorithmic screening but getting down-leveled in the Architecture and Economics rounds. You need to stop answering 'how' to build it, and start answering 'why' we should fund it.",
                tracks: [
                    { id: 'Track 5', name: 'DevOps & Platform Economics', desc: 'Understand the actual cost of scalable systems.' },
                    { id: 'Track 14', name: 'Cloud FinOps', desc: 'Learn the financial levers behind AWS/GCP architecture.' },
                    { id: 'Track 8', name: 'Serverless vs K8s', desc: 'Master the technical trade-offs of scaling compute.' }
                ],
                tool: { name: 'Audit Interview Simulator', url: '/tools/audit-interview', desc: 'Practice real-time System Design economics with our brutal AI interviewer.' },
                ctaLink: "/vault",
                icon: <Server className="w-8 h-8 text-violet-400 mb-4" />,
                color: "from-violet-900/40 via-black to-black border-violet-500/30"
            };
        }

        // IC to Management / Exec Transition
        if (answers.q2 === 'exec' || answers.q2 === 'ceiling' || answers.q1 === 'dir') {
            return {
                title: "You must pivot from Execution to Strategy.",
                diagnosis: "The tactical coding skills that got you to Senior IC will aggressively prevent you from reaching Director/VP. You must learn the exact vernacular your executive board uses: CapEx vs OpEx, M&A defensive structuring, and PDI debt scoring.",
                tracks: [
                    { id: 'Track 3', name: 'Executive R&D Capital', desc: 'Master CapEx amortization and OpEx reduction.' },
                    { id: 'Track 9', name: 'Engineering M&A', desc: 'Run technical due diligence for acquisitions.' },
                    { id: 'Track 36', name: 'Strategic Leadership', desc: 'How to manage managers and fight fires.' }
                ],
                tool: { name: 'PDI Debt Modeler', url: '/tools/pdi', desc: 'Quantify technical debt as a financial liability to present to your CFO.' },
                ctaLink: "/vault",
                icon: <GraduationCap className="w-8 h-8 text-orange-400 mb-4" />,
                color: "from-orange-900/40 via-black to-black border-orange-500/30"
            };
        }

        // Default: Resume / Fresh Grad / Break-in
        return {
            title: "Your professional branding is invisible to the ATS.",
            diagnosis: "You are likely blending in with 100,000 other laid-off or entry-level engineers. You need a highly tactical, deterministic playbook to bypass the recruiter screen and speak directly to the hiring Engineering Manager. You must demonstrate business impact, not just leetcode execution.",
            tracks: [
                { id: 'Track 15', name: 'The Resume Blackhole', desc: 'Tactical layout, parser bypasses, and high-impact framing.' },
                { id: 'Track 16', name: 'The Take-Home Assignment', desc: 'How to completely over-deliver on technical screens.' },
                { id: 'Track 55', name: 'Your 90-Day Onboarding', desc: 'How to become irreplaceable in your first 3 months.' }
            ],
            tool: { name: 'Audit Interview Simulator', url: '/tools/audit-interview', desc: 'Run endless mock behavioral rounds to sharpen your delivery.' },
            ctaLink: "/vault",
            icon: <Search className="w-8 h-8 text-emerald-400 mb-4" />,
            color: "from-emerald-900/40 via-black to-black border-emerald-500/30"
        };
    };

    return (
        <div className="max-w-4xl mx-auto w-full font-grotesk tracking-wide">
            
            <div className="mb-12 border-b border-white/10 pb-8 mt-12">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <h1 className="text-3xl font-bold text-white tracking-tight">C-Suite Career Architecture Funnel</h1>
                </div>
                <p className="text-zinc-400 max-w-2xl leading-relaxed">
                    The tech market has permanently shifted from a growth-at-all-costs model to an efficiency-first mandate. Run this 3-step diagnostic to map your exact A-to-Z learning trajectory.
                </p>
            </div>

            <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    
                    {/* Q1 */}
                    {step === 1 && (
                        <motion.div 
                            key="step-1"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            className="bg-black/40 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                        >
                            <BorderBeam size={200} duration={12} delay={0} />
                            <div className="text-[10px] font-mono text-cyan-400 mb-2 uppercase tracking-widest px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 inline-block rounded-full">Diagnostic 1/3</div>
                            <h2 className="text-2xl font-bold text-white mb-8 mt-4">What is your current or most recent professional designation?</h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { id: 'grad', label: 'Fresh Grad / Associate', desc: '0-2 YOE. Breaking into the industry.' },
                                    { id: 'mid', label: 'Mid-Level / Solid IC', desc: '3-6 YOE. Pushing for Senior/Staff.' },
                                    { id: 'senior', label: 'Senior / Staff / Lead', desc: '7+ YOE. Trailing the management ceiling.' },
                                    { id: 'dir', label: 'Director / VP Eng', desc: 'Managing managers, defending CapEx.' }
                                ].map(opt => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => { setAnswers({...answers, q1: opt.id}); setStep(2); }}
                                        className="text-left p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
                                    >
                                        <div className="font-bold text-lg text-zinc-200 group-hover:text-white mb-2">{opt.label}</div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-widest font-mono">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Q2 */}
                    {step === 2 && (
                        <motion.div 
                            key="step-2"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            className="bg-black/40 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                        >
                            <BorderBeam size={200} duration={12} delay={0} />
                            <div className="text-[10px] font-mono text-cyan-400 mb-2 uppercase tracking-widest px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 inline-block rounded-full">Diagnostic 2/3</div>
                            <h2 className="text-2xl font-bold text-white mb-8 mt-4">What is the exact obstacle blocking your trajectory right now?</h2>
                            
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { id: 'ats', label: 'The Resume Blackhole', desc: 'I am applying everywhere but my conversion rate is near zero.' },
                                    { id: 'interviews', label: 'Failing System Design / Economics Rounds', desc: 'I can code, but struggle to articulate massive scale and financial trade-offs.' },
                                    { id: 'ceiling', label: 'Trapped under the Promotion Ceiling', desc: 'I am stuck. The skills that got me here are failing me now.' },
                                    { id: 'ai', label: 'Pivoting to Autonomous AI', desc: 'I need to transition from standard Web2/SaaS into Sovereign LLMs.' },
                                    { id: 'exec', label: 'Transitioning to Executive Strategy', desc: 'I need to defend headcount, negotiate with CapEx pipelines, and speak to the Board.' }
                                ].map(opt => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => { setAnswers({...answers, q2: opt.id}); setStep(3); }}
                                        className="text-left p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group flex items-center justify-between"
                                    >
                                        <div>
                                            <div className="font-bold text-lg text-zinc-200 group-hover:text-white mb-2">{opt.label}</div>
                                            <div className="text-sm text-zinc-500">{opt.desc}</div>
                                        </div>
                                        <ChevronRight className="w-6 h-6 text-zinc-600 group-hover:text-cyan-400" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Q3 */}
                    {step === 3 && (
                        <motion.div 
                            key="step-3"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            className="bg-black/40 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                        >
                            <BorderBeam size={200} duration={12} delay={0} />
                            <div className="text-[10px] font-mono text-cyan-400 mb-2 uppercase tracking-widest px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 inline-block rounded-full">Diagnostic 3/3</div>
                            <h2 className="text-2xl font-bold text-white mb-8 mt-4">What is your targeted timeline to completely resolve this bottleneck?</h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { id: 'now', label: 'Active Burn', desc: 'Immediate transition. My runway is minimal or zero.' },
                                    { id: 'internal', label: 'Targeting Cycle', desc: 'Within 3 to 6 months for my next review.' },
                                    { id: 'longterm', label: 'Long-Term', desc: 'Building compounding, long-term enterprise value.' }
                                ].map(opt => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => { setAnswers({...answers, q3: opt.id}); runAnalysis(); }}
                                        className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group flex flex-col items-center justify-center"
                                    >
                                        <div className="font-bold text-xl text-zinc-200 group-hover:text-white mb-3">{opt.label}</div>
                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* RESULTS */}
                    {step === 4 && (
                        <motion.div 
                            key="step-4"
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className={`bg-gradient-to-bl border rounded-3xl p-8 lg:p-12 relative overflow-hidden ${getRecommendation().color}`}
                        >   
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] pointer-events-none rounded-full" />
                            <BorderBeam size={400} duration={15} delay={0} />
                            
                            <div className="flex flex-col md:flex-row gap-12 relative z-10">
                                <div className="flex-1">
                                    {getRecommendation().icon}
                                    <div className="text-[10px] font-mono text-white/50 mb-4 uppercase tracking-widest flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> A-to-Z Execution Architecture Deployed
                                    </div>

                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">{getRecommendation().title}</h2>
                                    <p className="text-zinc-300 text-base leading-relaxed mb-8">
                                        {getRecommendation().diagnosis}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4">
                                        <Link 
                                            href={getRecommendation().ctaLink}
                                            className="px-8 py-4 rounded-xl relative bg-white overflow-hidden group border border-white hover:border-zinc-300 transition-all font-bold text-black text-sm uppercase tracking-widest"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                Unlock Vault Curriculum <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 w-full h-full bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        </Link>
                                        <button 
                                            onClick={resetQuestions}
                                            className="px-8 py-4 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 font-bold text-sm tracking-wide uppercase transition-colors"
                                        >
                                            Recalibrate
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <GlowCard className="bg-black/80 border border-white/10 rounded-2xl p-6 relative overflow-hidden h-full">
                                        <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Phase 1: Your Sequenced Curriculum</h4>
                                        <div className="space-y-4">
                                            {getRecommendation().tracks.map((t, idx) => (
                                                <div key={idx} className="flex items-start gap-4">
                                                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[10px] text-zinc-400 flex-shrink-0 mt-1">{idx+1}</div>
                                                    <div>
                                                        <div className="font-bold text-white text-sm mb-1">{t.id}: {t.name}</div>
                                                        <div className="text-xs text-zinc-500">{t.desc}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </GlowCard>

                                    <GlowCard className="bg-black/80 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                        <h4 className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 inline-block rounded border border-cyan-500/20 uppercase tracking-widest mb-4">Phase 2: Live Intervention</h4>
                                        <h3 className="font-bold text-white text-lg mb-2">{getRecommendation().tool.name}</h3>
                                        <p className="text-xs text-zinc-400 mb-6">{getRecommendation().tool.desc}</p>
                                        <Link href={getRecommendation().tool.url} className="text-xs font-mono font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest flex items-center gap-2">
                                            Execute Tool <ChevronRight size={14} />
                                        </Link>
                                    </GlowCard>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
            
        </div>
    );
}
