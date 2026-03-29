'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Briefcase, GraduationCap, Network, PocketKnife, ArrowRight, Server } from 'lucide-react';
import Link from 'next/link';

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
        if (answers.q2 === 'ai_pivot') {
            return {
                title: "You are attempting an AI Architecture Pivot.",
                diagnosis: "The market is punishing pure coders and rewarding domain experts who can integrate sovereign LLMs securely. You do not need to learn PyTorch. You need to learn AI Product Economics and inference orchestration.",
                tracks: "Track 2 (AI Economics), Tracks 23-30 (Meta-Trends)",
                ctaLink: "/vault",
                icon: <Network className="w-8 h-8 text-sky-400 mb-4" />,
                color: "from-sky-900/20 to-black border-sky-500/30"
            };
        }
        
        // System Design / Interviewing
        if (answers.q2 === 'system_design') {
            return {
                title: "Your System Design heuristics are failing.",
                diagnosis: "You are likely passing the algorithmic screen but getting down-leveled in the Architecture and Economics rounds. You need to stop answering 'how' to build it, and start answering 'why' we should fund it.",
                tracks: "Tracks 5-14 (Architecture), Tracks 1-4 (Core Economics)",
                ctaLink: "/vault",
                icon: <Server className="w-8 h-8 text-violet-400 mb-4" />,
                color: "from-violet-900/20 to-black border-violet-500/30"
            };
        }

        // IC to Management / Director
        if (answers.q1 === 'em' || answers.q3 === 'senior') {
            return {
                title: "You are transitioning from Execution to Strategy.",
                diagnosis: "The skills that got you to Senior IC will aggressively prevent you from reaching Director. You must learn the exact vernacular your CFO uses, specifically CAPEX vs OPEX, DORA mapping, and PDI scoring.",
                tracks: "Tracks 36-41 (Leadership), Track 3 (Executive R&D Capital)",
                ctaLink: "/vault",
                icon: <GraduationCap className="w-8 h-8 text-orange-400 mb-4" />,
                color: "from-orange-900/20 to-black border-orange-500/30"
            };
        }

        // Default: Resume / Break-in
        return {
            title: "Your professional branding is invisible to the ATS.",
            diagnosis: "You are likely blending in with 10,000 other laid-off engineers. You need a highly tactical, deterministic playbook to bypass the recruiter screen and speak directly to the hiring Engineering Manager.",
            tracks: "Tracks 15-17 (Tactical Playbooks), Tracks 55-57 (Career Trajectory)",
            ctaLink: "/vault",
            icon: <PocketKnife className="w-8 h-8 text-emerald-400 mb-4" />,
            color: "from-emerald-900/20 to-black border-emerald-500/30"
        };
    };

    // Removed lazy icon definition

    return (
        <div className="max-w-4xl mx-auto w-full font-grotesk tracking-wide">
            
            <div className="mb-12 border-b border-white/10 pb-8 mt-12">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Career Architecture Funnel</h1>
                </div>
                <p className="text-zinc-400 max-w-2xl leading-relaxed">
                    The tech market has permanently shifted. Run this 3-step diagnostic to determine exactly why your career is stalled and which Curriculum Tracks you need to break through the ceiling.
                </p>
            </div>

            <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    
                    {/* Q1 */}
                    {step === 1 && (
                        <motion.div 
                            key="step-1"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest">Diagnostic 1/3</div>
                            <h2 className="text-xl font-bold text-white mb-6">What is your current or most recent professional designation?</h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { id: 'ic', label: 'Individual Contributor (IC)', desc: 'SWE, DevOps, Data Engineer' },
                                    { id: 'tpm', label: 'Product / TPM', desc: 'Product Manager, Tech Lead' },
                                    { id: 'em', label: 'Engineering Manager', desc: 'Line Manager, Team Lead' },
                                    { id: 'dir', label: 'Director / VPE', desc: 'Managing Managers, Exec' }
                                ].map(opt => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => { setAnswers({...answers, q1: opt.id}); setStep(2); }}
                                        className="text-left p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
                                    >
                                        <div className="font-bold text-zinc-200 group-hover:text-white mb-1">{opt.label}</div>
                                        <div className="text-sm text-zinc-500">{opt.desc}</div>
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
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest">Diagnostic 2/3</div>
                            <h2 className="text-xl font-bold text-white mb-6">What is the exact obstacle blocking your trajectory right now?</h2>
                            
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { id: 'resume', label: 'Stuck in the ATS / Resume Screen', desc: 'I am applying but my conversion rate to the first interview is near zero.' },
                                    { id: 'system_design', label: 'Failing System Design / Economics Rounds', desc: 'I can code, but I struggle to articulate architecture and financial trade-offs.' },
                                    { id: 'promo_ceiling', label: 'Trapped under the Promotion Ceiling', desc: 'I have been a Senior IC for years and cannot crack Staff, Principal, or EM.' },
                                    { id: 'ai_pivot', label: 'Transitioning to AI / Meta-Trends', desc: 'I need to pivot from standard full-stack/Web2 into Sovereign AI and LLM Orchestration.' }
                                ].map(opt => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => { setAnswers({...answers, q2: opt.id}); setStep(3); }}
                                        className="text-left p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group flex items-center justify-between"
                                    >
                                        <div>
                                            <div className="font-bold text-zinc-200 group-hover:text-white mb-1">{opt.label}</div>
                                            <div className="text-sm text-zinc-500">{opt.desc}</div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400" />
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
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest">Diagnostic 3/3</div>
                            <h2 className="text-xl font-bold text-white mb-6">What is your total accumulated industry seniority?</h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { id: 'junior', label: '0 - 3 Years', desc: 'Junior / Mid' },
                                    { id: 'mid', label: '4 - 7 Years', desc: 'Solid Mid / Senior' },
                                    { id: 'senior', label: '8+ Years', desc: 'Senior / Staff / Lead' }
                                ].map(opt => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => { setAnswers({...answers, q3: opt.id}); runAnalysis(); }}
                                        className="text-center p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
                                    >
                                        <div className="font-bold text-xl text-zinc-200 group-hover:text-white mb-2">{opt.label}</div>
                                        <div className="text-sm font-mono text-zinc-500 uppercase">{opt.desc}</div>
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
                            className={`bg-gradient-to-br border rounded-2xl p-8 sm:p-12 relative overflow-hidden ${getRecommendation().color}`}
                        >   
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] pointer-events-none rounded-full" />
                            
                            {getRecommendation().icon}
                            
                            <div className="text-xs font-mono text-white/50 mb-4 uppercase tracking-widest flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Matrix Analysis Complete
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4">{getRecommendation().title}</h2>
                            <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-2xl">
                                {getRecommendation().diagnosis}
                            </p>

                            <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-8 max-w-2xl">
                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3">Target Curriculum Architecture</h4>
                                <div className="text-lg font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                                    {getRecommendation().tracks}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 flex-wrap">
                                <Link 
                                    href={getRecommendation().ctaLink}
                                    className="px-8 py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide uppercase hover:bg-zinc-200 transition-colors flex items-center gap-2"
                                >
                                    Unlock The Vault Pass <ArrowRight className="w-4 h-4" />
                                </Link>
                                <button 
                                    onClick={resetQuestions}
                                    className="px-8 py-4 rounded-xl border border-white/10 text-zinc-400 hover:text-white font-bold text-sm tracking-wide uppercase transition-colors"
                                >
                                    Recalibrate
                                </button>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
            
        </div>
    );
}
