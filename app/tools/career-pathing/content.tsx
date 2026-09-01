'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Briefcase, GraduationCap, Network, PocketKnife, ArrowRight, Server, ShieldAlert, Zap, Search, Lock } from 'lucide-react';
import Link from 'next/link';
import { GlowCard } from '../../components/magicui/glow-card';
import { BorderBeam } from '../../components/magicui/border-beam';
import ToolCelebration from '../../components/ToolCelebration';
import ToolGate from '../../components/tool-gate';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';

export default function CareerPathingContent() {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
    const [showGate, setShowGate] = useState(false);

    const resetQuestions = () => {
        setStep(1);
        setAnswers({ q1: '', q2: '', q3: '' });
        setShowGate(false);
    };

    const runAnalysis = () => {
        setShowGate(true);
    };

    const processResults = () => {
        setStep(4);
    };

    const getRecommendation = () => {
        // AI Pivot
        if (answers.q2 === 'ai') {
            return {
                title: "You are attempting an AI Architecture Pivot.",
                diagnosis: "The market is punishing pure Web2 coders and rewarding domain experts who can integrate sovereign LLMs securely. You do not need to simply learn PyTorch. You need to learn AI AI Economics, agentic inference orchestration, and how to quantify AI ROI to your CFO.",
                tracks: [
                    { id: 'Track 11', name: 'AI Operations & Economics', desc: 'Master SLM vs LLM costs and inference infrastructure.' },
                    { id: 'Track 2', name: 'AI Engineering ROI', desc: 'Quantify exactly how AI will replace legacy OpEx.' },
                    { id: 'Track 30', name: 'Sovereign Models', desc: 'Building defensible, offline AI architectures.' }
                ],
                tool: { name: 'AUEB Diagnostic Tool', url: '/tools/aueb', desc: 'Run the AI Unit Economics Blueprint to price your transition.' },
                ctaLink: "/vault",
                icon: <Network className="w-8 h-8 text-sky-400 mb-4" />,
                color: "from-sky-900/40 via-transparent to-zinc-100 border-sky-500/30"
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
                color: "from-violet-900/40 via-transparent to-zinc-100 border-violet-500/30"
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
                icon: <GraduationCap className="w-8 h-8 text-orange-900 font-extrabold font-semibold mb-4" />,
                color: "from-orange-900/40 via-transparent to-zinc-100 border-orange-500/30"
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
            icon: <Search className="w-8 h-8 text-emerald-900 font-extrabold font-semibold mb-4" />,
            color: "from-emerald-900/40 via-transparent to-zinc-100 border-emerald-500/30"
        };
    };

    return (
        <div className="max-w-4xl mx-auto w-full font-grotesk tracking-wide">
            
            <div className="mb-12 border-b border-zinc-400 pb-8 mt-12">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <h1 className="text-3xl font-bold text-zinc-950 tracking-tight">C-Suite Career Architecture Funnel</h1>
                </div>
                <p className="text-zinc-900 max-w-2xl leading-relaxed">
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
                            className="bg-zinc-50 border border-zinc-400 rounded-3xl p-8 lg:p-12 relative overflow-hidden shrink-0"
                        >
                            <BorderBeam size={200} duration={12} delay={0} />
                            <div className="text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold mb-2 uppercase tracking-widest px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 inline-block rounded-full">Diagnostic 1/3</div>
                            <h2 className="text-2xl font-bold text-zinc-950 mb-8 mt-4">What is your current or most recent professional designation?</h2>
                            
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
                                        className="text-left p-6 rounded-2xl border border-zinc-400 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
                                    >
                                        <div className="font-bold text-lg text-zinc-950 font-bold group-hover:text-zinc-900 mb-2">{opt.label}</div>
                                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest font-mono">{opt.desc}</div>
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
                            className="bg-zinc-50 border border-zinc-400 rounded-3xl p-8 lg:p-12 relative overflow-hidden shrink-0"
                        >
                            <BorderBeam size={200} duration={12} delay={0} />
                            <div className="text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold mb-2 uppercase tracking-widest px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 inline-block rounded-full">Diagnostic 2/3</div>
                            <h2 className="text-2xl font-bold text-zinc-950 mb-8 mt-4">What is the exact obstacle blocking your trajectory right now?</h2>
                            
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
                                        className="text-left p-6 rounded-2xl border border-zinc-400 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group flex items-center justify-between"
                                    >
                                        <div>
                                            <div className="font-bold text-lg text-zinc-950 font-bold group-hover:text-zinc-900 mb-2">{opt.label}</div>
                                            <div className="text-sm font-semibold text-zinc-900 font-medium">{opt.desc}</div>
                                        </div>
                                        <ChevronRight className="w-6 h-6 text-zinc-950 font-bold group-hover:text-cyan-900 font-extrabold font-semibold" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Q3 */}
                    {step === 3 && !showGate && (
                        <motion.div 
                            key="step-3"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            className="bg-zinc-50 border border-zinc-400 rounded-3xl p-8 lg:p-12 relative overflow-hidden shrink-0"
                        >
                            <BorderBeam size={200} duration={12} delay={0} />
                            <div className="text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold mb-2 uppercase tracking-widest px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 inline-block rounded-full">Diagnostic 3/3</div>
                            <h2 className="text-2xl font-bold text-zinc-950 mb-8 mt-4">What is your targeted timeline to completely resolve this bottleneck?</h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { id: 'now', label: 'Active Burn', desc: 'Immediate transition. My runway is minimal or zero.' },
                                    { id: 'internal', label: 'Targeting Cycle', desc: 'Within 3 to 6 months for my next review.' },
                                    { id: 'longterm', label: 'Long-Term', desc: 'Building compounding, long-term enterprise value.' }
                                ].map(opt => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => { setAnswers({...answers, q3: opt.id}); runAnalysis(); }}
                                        className="text-center p-8 rounded-2xl border border-zinc-400 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group flex flex-col items-center justify-center"
                                    >
                                        <div className="font-bold text-xl text-zinc-950 font-bold group-hover:text-zinc-900 mb-3">{opt.label}</div>
                                        <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">{opt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {showGate && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
                            <ToolGate toolName="the Career Architecture diagnostic" onUnlock={() => { setShowGate(false); processResults(); }}>
                                <></>
                            </ToolGate>
                        </motion.div>
                    )}

                    {/* RESULTS */}
                    {step === 4 && (
                        <motion.div 
                            key="step-4"
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        >
                            <ToolCelebration show={step === 4} toolName="CAREER ARCHITECTURE" />

                            <div id="career-pathing-results-artifact" className="bg-white p-2 sm:p-6 rounded-3xl mt-8">
                                <div className="flex flex-col sm:flex-row items-center justify-between bg-white/60 border border-emerald-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-xs font-bold font-medium font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-zinc-950 mb-1">Career Architecture Dashboard</h2>
                                    </div>
                                    <div className="mt-4 sm:mt-0 flex gap-4">
                                        <button onClick={resetQuestions} className="px-4 py-2 border border-zinc-400 rounded-lg text-xs font-bold font-mono uppercase hover:bg-white/5 transition flex items-center gap-2">
                                            Recalibrate
                                        </button>
                                        <ExportToPDFButton targetId="career-pdf-export-zone" fileName={`Career_Architecture_Diagnostic.pdf`} />
                                    </div>
                                </div>

                                <div id="career-pdf-export-zone">
                                    <div className={`bg-gradient-to-bl border rounded-3xl p-8 lg:p-12 relative overflow-hidden ${getRecommendation().color}`}>   
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] pointer-events-none rounded-full" />
                            <BorderBeam size={400} duration={15} delay={0} />
                            
                            <div className="flex flex-col md:flex-row gap-12 relative z-10">
                                <div className="flex-1">
                                    {getRecommendation().icon}
                                    <div className="text-xs font-bold font-medium font-mono text-zinc-950 mb-4 uppercase tracking-widest flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-900 font-extrabold font-semibold" /> A-to-Z Execution Architecture Deployed
                                    </div>

                                    <h2 className="text-3xl lg:text-4xl font-bold text-zinc-950 mb-6 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">{getRecommendation().title}</h2>
                                    <p className="text-zinc-950 text-base leading-relaxed mb-8">
                                        {getRecommendation().diagnosis}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4">
                                        <Link 
                                            href={getRecommendation().ctaLink}
                                            className="px-8 py-4 rounded-xl relative bg-white overflow-hidden group border border-white hover:border-zinc-500 transition-all font-bold text-black text-sm font-semibold uppercase tracking-widest shrink-0"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                Access Vault Curriculum <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 w-full h-full bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        </Link>
                                        <button 
                                            onClick={resetQuestions}
                                            className="px-8 py-4 rounded-xl border border-zinc-400 text-zinc-900 hover:text-zinc-900 hover:bg-white/5 font-bold text-sm font-semibold tracking-wide uppercase transition-colors"
                                        >
                                            Recalibrate
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <GlowCard className="bg-white/80 border border-zinc-400 rounded-2xl p-6 relative overflow-hidden h-full shrink-0">
                                        <h4 className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-6 border-b border-zinc-400 pb-4">Phase 1: Your Sequenced Curriculum</h4>
                                        <div className="space-y-4">
                                            {getRecommendation().tracks.map((t, idx) => (
                                                <div key={idx} className="flex items-start gap-4">
                                                    <div className="w-6 h-6 rounded-full bg-white/5 border border-zinc-400 flex items-center justify-center font-mono text-xs font-bold font-medium text-zinc-900 flex-shrink-0 mt-1">{idx+1}</div>
                                                    <div>
                                                        <div className="font-bold text-zinc-950 text-sm font-semibold mb-1">{t.id}: {t.name}</div>
                                                        <div className="text-sm font-semibold font-medium text-zinc-950">{t.desc}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </GlowCard>

                                    <GlowCard className="bg-white/80 border border-zinc-400 rounded-2xl p-6 relative overflow-hidden shrink-0">
                                        <h4 className="text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold bg-cyan-500/10 px-2 py-1 inline-block rounded border border-cyan-500/20 uppercase tracking-widest mb-4">Phase 2: Live Intervention</h4>
                                        <h3 className="font-bold text-zinc-950 text-lg mb-2">{getRecommendation().tool.name}</h3>
                                        <p className="text-sm font-semibold font-medium text-zinc-950 mb-6">{getRecommendation().tool.desc}</p>
                                        <Link href={getRecommendation().tool.url} className="text-xs font-bold font-mono font-bold text-zinc-950 hover:text-cyan-900 font-extrabold font-semibold transition-colors uppercase tracking-widest flex items-center gap-2">
                                            Execute Tool <ChevronRight size={14} />
                                        </Link>
                                    </GlowCard>
                                </div>
                            </div>

                            {/* 3-STEP BOARD REMEDIATION PLAYBOOK */}
                            <div className="mt-12 pt-12 border-t border-zinc-400 relative z-10 text-left">
                                <h3 className="text-xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                    Phase 3: IC Career Advancement Playbook
                                </h3>
                                <p className="text-zinc-900 text-sm font-semibold mb-8">Execute this operational sequence immediately to break through your promotion ceiling and force executive recognition of your fiscal impact.</p>

                                <div className="space-y-4">
                                    {/* Step 1 */}
                                    <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-rose-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>
                                        <div className="bg-rose-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-rose-500/20">
                                            <span className="text-rose-400 font-bold font-mono">01</span>
                                        </div>
                                        <div className="relative z-10 w-full">
                                            <h4 className="text-zinc-950 font-bold mb-2">Audit Your P&L Proximity</h4>
                                            <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">If your work cannot be tied directly to top-line revenue generation or bottom-line compute reduction, you are viewed as an expendable cost center.</p>
                                            <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-rose-400 uppercase tracking-widest font-bold">
                                                    <Zap size={10} /> Execution Directive
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950">Run the PDI Audit on your current sprint backlog. Map exactly how much cloud run-rate your features are consuming vs. saving. Pitch the delta to your Engineering Manager.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-amber-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                                        <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-amber-500/20">
                                            <span className="text-amber-400 font-bold font-mono">02</span>
                                        </div>
                                        <div className="relative z-10 w-full">
                                            <h4 className="text-zinc-950 font-bold mb-2">Neutralize Subservient Communication</h4>
                                            <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">Directors do not want status updates. They want risk mitigation plans. If you only explain 'how' you built a feature, you will remain an IC forever.</p>
                                            <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-amber-400 uppercase tracking-widest font-bold">
                                                    <Zap size={10} /> Execution Directive
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950">Format your next async update as an "Executive Action Memo". Lead with the exact EBITDA impact, list the key person risks, and request approval for a specific architectural pivot.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-cyan-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                                        <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                                            <span className="text-cyan-900 font-extrabold font-semibold font-bold font-mono">03</span>
                                        </div>
                                        <div className="relative z-10 w-full">
                                            <h4 className="text-zinc-950 font-bold mb-2">Establish a Sovereign Agent Sub-Routine</h4>
                                            <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">The easiest way to jump titles is to orchestrate autonomous labor. If you can automate the busywork of 3 junior engineers, you instantly justify a Staff-level trajectory.</p>
                                            <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                                    <Zap size={10} /> Execution Directive
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950">Deploy a Langfuse telemetry stack over a local Llama 3 8B model to automate unit test generation for your team. Present the hours saved in your 1-on-1.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

                </AnimatePresence>
            </div>
            
        </div>
    );
}
