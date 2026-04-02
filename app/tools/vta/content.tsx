'use client';

import { useState } from 'react';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { motion } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import NumberTicker from '../../components/magicui/number-ticker';
import { BorderBeam } from '../../components/magicui/border-beam';
import { Target, Users, Cpu, DollarSign, Mail, ArrowRight, TrendingUp, AlertTriangle, Lock, Zap, FileSearch } from 'lucide-react';
import ToolGate from '../../components/tool-gate';
import { VaultUpsell, RecommendedTrack } from '../../components/VaultUpsell';

const BentoCard = ({ children, title, icon: Icon, className = '' }: { children: React.ReactNode; title: string; icon?: React.ComponentType<{ size?: number; className?: string }>; className?: string }) => (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 ${className}`}>
        <div className="flex items-center gap-2 mb-4">
            {Icon && <Icon size={20} className="text-blue-400" />}
            <h3 className="font-semibold text-white">{title}</h3>
        </div>
        {children}
    </div>
);

export default function VTATool() {
    // Audit Inputs
    const [monthlyInferences, setMonthlyInferences] = useState(10000);
    const [driftRate, setDriftRate] = useState(15); // % of outputs needing review
    const [verificationTime, setVerificationTime] = useState(5); // minutes per review
    const [hourlyRate, setHourlyRate] = useState(120); // $ per hour for verifier

    // Calculations
    const monthlyReviews = Math.floor(monthlyInferences * (driftRate / 100));
    const monthlyHours = (monthlyReviews * verificationTime) / 60;
    const monthlyTax = monthlyHours * hourlyRate;
    const annualTax = monthlyTax * 12;
    const hoursLostAnnual = monthlyHours * 12;
    const effectiveCostPerInference = monthlyTax / monthlyInferences;

    // View States
    const [showResults, setShowResults] = useState(false);
    const [isUnlocking, setIsUnlocking] = useState(false);

    const handleCalculate = () => {
        setIsUnlocking(true);
        setTimeout(() => {
            setShowResults(true);
            setIsUnlocking(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30">
            <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,rgba(0,0,0,0)_50%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                Volatility Tax Auditor <span className="text-blue-500">(VTA)</span>
                            </h1>
                            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                                Identify the hidden labor cost "tax" destroying your AI margins. Calculate the exact cost of human-in-the-loop verification required to mitigate AI response drift.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16" id="vta-calculator">
                        {/* INPUT PANEL */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl">
                                <BorderBeam className="opacity-20" size={300} duration={12} delay={0} />
                                <h2 className="text-2xl font-bold text-white mb-6">Execution Variables</h2>
                                <div className="space-y-6 relative z-10">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Monthly Target Inferences</label>
                                        <p className="text-xs text-slate-500 mb-3">Total queries hitting your AI service</p>
                                        <input
                                            type="range"
                                            min="1000"
                                            max="100000"
                                            step="1000"
                                            value={monthlyInferences}
                                            title="Monthly Inferences"
                                            aria-label="Monthly Target Inferences"
                                            onChange={(e) => setMonthlyInferences(Number(e.target.value))}
                                            className="w-full accent-blue-500 bg-white/10 h-2 rounded-lg appearance-none cursor-pointer"
                                        />
                                        <div className="text-right text-blue-400 font-mono mt-2">{monthlyInferences.toLocaleString()} interactions</div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">AI Response Drift Rate (%)</label>
                                        <p className="text-xs text-slate-500 mb-3">Percentage of outputs requiring human review</p>
                                        <input
                                            type="range"
                                            min="1"
                                            max="50"
                                            step="1"
                                            value={driftRate}
                                            title="Response Drift Rate"
                                            aria-label="AI Response Drift Rate"
                                            onChange={(e) => setDriftRate(Number(e.target.value))}
                                            className="w-full accent-red-500 bg-white/10 h-2 rounded-lg appearance-none cursor-pointer"
                                        />
                                        <div className="text-right text-red-400 font-mono mt-2">{driftRate}% drift</div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Verification Time (Minutes)</label>
                                        <p className="text-xs text-slate-500 mb-3">Time taken by a human to audit one flagged output</p>
                                        <input
                                            type="number"
                                            value={verificationTime}
                                            title="Verification Time"
                                            aria-label="Verification Time in Minutes"
                                            onChange={(e) => setVerificationTime(Number(e.target.value))}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Verifier Labor Base ($/Hour)</label>
                                        <p className="text-xs text-slate-500 mb-3">Fully burdened hourly rate of your engineering/audit staff</p>
                                        <input
                                            type="number"
                                            value={hourlyRate}
                                            title="Verifier Hourly Rate"
                                            aria-label="Verifier Labor Base Rate"
                                            onChange={(e) => setHourlyRate(Number(e.target.value))}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                                        />
                                    </div>

                                    <button
                                        onClick={handleCalculate}
                                        disabled={isUnlocking}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                                    >
                                        {isUnlocking ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span>Running Behavioral Audit...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Target size={20} />
                                                <span>Calculate Liability</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RESULTS PANEL */}
                        <div className="lg:col-span-7">
                            {!showResults ? (
                                <div className="h-full min-h-[400px] border border-white/10 bg-white/5 rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden backdrop-blur-xl">
                                    <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                                        <FileSearch size={40} className="text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Awaiting Audit Execution</h3>
                                    <p className="text-slate-400 max-w-sm">Configure your operational assumptions on the left to reveal the true cost of your AI implementation.</p>
                                </div>
                            ) : (
                                <ToolGate
                                    toolSlug="vta"
                                    toolName="Volatility Tax Auditor"
                                    mappedCurriculumId="5"
                                >
                                    <div className="space-y-6">
                                        {annualTax > 0 && <ToolCelebration show={true} toolName="VTA" />}

                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                                            <div className="flex items-center gap-2 text-white font-medium">
                                                <FileSearch size={20} className="text-blue-400" />
                                                Behavioral Audit Report
                                            </div>
                                            <ExportToPDFButton
                                                targetId="vta-calculator"
                                                fileName="VTA_Behavioral_Audit.pdf"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <GlowCard className="p-6">
                                                <div className="text-sm text-slate-400 mb-1">Annual Volatility Tax</div>
                                                <div className="text-4xl font-bold text-red-400 mb-2 font-mono">
                                                    $<NumberTicker value={annualTax} />
                                                </div>
                                                <p className="text-xs text-red-400/80">Pure human labor validation cost.</p>
                                            </GlowCard>

                                            <GlowCard className="p-6">
                                                <div className="text-sm text-slate-400 mb-1">Engineering Hours Burned</div>
                                                <div className="text-4xl font-bold text-white mb-2 font-mono">
                                                    <NumberTicker value={hoursLostAnnual} />
                                                </div>
                                                <p className="text-xs text-slate-500">Hours lost yearly to output auditing.</p>
                                            </GlowCard>
                                        </div>

                                        <BentoCard title="Margin Compression Analysis" icon={AlertTriangle} className="col-span-2">
                                            <div className="space-y-6">
                                                <div className="grid grid-cols-2 gap-4 text-sm">
                                                    <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                                                        <span className="text-slate-400 block mb-1">Effective Cost Per Interaction</span>
                                                        <span className="text-xl text-white font-mono">${effectiveCostPerInference.toFixed(2)}</span>
                                                    </div>
                                                    <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                                                        <span className="text-slate-400 block mb-1">Monthly Flagged Reviews</span>
                                                        <span className="text-xl text-white font-mono">{monthlyReviews.toLocaleString()}</span>
                                                    </div>
                                                </div>
                                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                                    <h4 className="text-red-400 font-semibold mb-2">Executive Summary</h4>
                                                    <p className="text-red-200/80 text-sm leading-relaxed">
                                                        Your AI is functionally a "Negative Carry" asset. While the raw API cost might be fractions of a cent per token, your true cost is <strong>${(effectiveCostPerInference).toFixed(2)}</strong> per inference due to the {driftRate}% drift anomaly rate. Unless you implement an "Execution Layer" to enforce deterministic bounding, this feature will chronically bleed EBITDA as you scale.
                                                    </p>
                                                </div>
                                            </div>
                                        </BentoCard>

                                        <div className="mt-12 pt-8 border-t border-white/10">
                                            <VaultUpsell 
                                                urgencyLevel={annualTax > 250000 ? 'critical' : 'growth'}
                                                recommendedTracks={[
                                                    { 
                                                        id: 'Track 5', 
                                                        title: 'Building AI Profitability Frameworks', 
                                                        desc: "Learn the 'Evergreen Ratio' and eliminate the Volatility Tax by deploying strict operational bounds on LLMs." 
                                                    }
                                                ]} 
                                            />
                                        </div>
                                    </div>
                                </ToolGate>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
