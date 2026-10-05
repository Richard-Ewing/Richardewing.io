"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Check, 
    X, 
    AlertTriangle, 
    ArrowRight, 
    Sparkles, 
    ShieldCheck, 
    DollarSign,
    Zap,
    TrendingUp,
    Copy
} from 'lucide-react';

interface Constraint {
    id: string;
    label: string;
    description: string;
    active: boolean;
}

export default function LivingDecisionEngine() {
    // Interactive constraints (like Mardyn's constraint chips)
    const [constraints, setConstraints] = useState<Record<string, boolean>>({
        reviewTax: true,
        budgetCap: true,
        pruneGhostSeats: true,
        prodAccess: false,
    });

    const [copied, setCopied] = useState(false);

    const toggleConstraint = (key: string) => {
        setConstraints(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // Dynamic calculations based on active constraints
    const reviewTaxActive = constraints.reviewTax;
    const budgetCapActive = constraints.budgetCap;
    const pruneGhostActive = constraints.pruneGhostSeats;
    const prodAccessActive = constraints.prodAccess;

    // Option A: Unchecked Vendor Rollout
    const optACost = reviewTaxActive ? '$18,400' : '$800';
    const optACostNote = reviewTaxActive 
        ? '$800 seats + $17,600 senior babysitting payroll'
        : 'Assumes zero human review overhead (unrealistic)';
    const optAVelocity = reviewTaxActive ? '+6% net shipped' : '+40% lines typed';
    const optARisk = prodAccessActive ? 'Critical (Database Wipe Risk)' : reviewTaxActive ? 'High (Maintenance Backlog)' : 'Moderate';
    const optADisqualified = prodAccessActive || reviewTaxActive;

    // Option B: Sovereign Governed Runtime (Richard Ewing Model)
    const optBCost = pruneGhostActive ? '$2,800' : '$4,200';
    const optBCostNote = pruneGhostActive 
        ? 'Pruned 8 inactive ghost seats + deterministic review rules'
        : 'Includes seats + structured human verification gates';
    const optBVelocity = '+34% verified shipped';
    const optBRisk = 'Low (Automated Spending & Scope Caps)';

    // Dynamic Rationale based on toggled constraints
    let rationaleTitle = 'Recommendation: Governed AI Runtime';
    let rationaleBody = 'Unchecked autocomplete generates thousands of lines of plausible homework that burns senior engineering hours. Applying deterministic guardrails and seat hygiene protects gross margin while speeding up real customer releases.';

    if (prodAccessActive) {
        rationaleTitle = 'Decision Critical: Unchecked Autonomous Access Disqualified';
        rationaleBody = 'Giving autonomous AI agents direct production write access without deterministic guardrails creates severe outage risk. One unmonitored recursive loop can corrupt database records and spike your cloud invoice by thousands overnight.';
    } else if (!reviewTaxActive && !budgetCapActive) {
        rationaleTitle = 'Warning: Fantasy Accounting Detected';
        rationaleBody = 'Ignoring the senior review tax and cloud spending caps creates a honeymoon illusion. The vendor demo looks cheap, but month three will expose massive PR backlogs and surprise billing.';
    }

    const handleCopy = () => {
        const text = `AI Executive Decision Card (via richardewing.io)
-------------------------------------------------------
Scenario: 20-Engineer AI Tooling Rollout
Recommendation: Governed AI Runtime
Option A (Vendor Pitch): ${optACost}/mo (${optACostNote}) | Net Speed: ${optAVelocity} | Status: ${optADisqualified ? 'DISQUALIFIED' : 'ALTERNATIVE'}
Option B (Governed): ${optBCost}/mo (${optBCostNote}) | Net Speed: ${optBVelocity} | Status: RECOMMENDED
Verdict: ${rationaleBody}
Interactive Engine: https://www.richardewing.io/reality-check`;

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section className="w-full max-w-5xl mx-auto my-12 px-4 sm:px-0">
            {/* Visual Canvas Stage */}
            <div className="relative rounded-3xl bg-white border border-zinc-300/80 shadow-[0_25px_70px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.04)] p-6 sm:p-10 overflow-hidden">
                
                {/* Subtle Refraction Flare on Border */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 opacity-90" />

                {/* Top Scenario Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-200">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                            <span>The Living Decision Card · Interactive Scenario</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-grotesk tracking-tight">
                            Should We Roll Out AI Coding Assistants to 20 Engineers?
                        </h2>
                        <p className="text-sm text-zinc-600 mt-1 font-medium">
                            Toggle real operational constraints to see how real-world costs and risks physically mutate.
                        </p>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-xs font-bold text-zinc-800 transition-all self-start md:self-auto cursor-pointer"
                    >
                        {copied ? (
                            <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Copied Card</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5 text-zinc-600" />
                                <span>Export Decision</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Interactive Constraint Chips (Like Mardyn's Austin vs LA filters) */}
                <div className="py-6 border-b border-zinc-200">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 block mb-3">
                        Operational Constraints (Click to Toggle):
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                        {/* Chip 1: Senior Review Tax */}
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={() => toggleConstraint('reviewTax')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                                constraints.reviewTax
                                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400'
                            }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${constraints.reviewTax ? 'bg-pink-400' : 'bg-zinc-300'}`} />
                            <span>Include Senior Review Tax</span>
                        </motion.button>

                        {/* Chip 2: Budget Cap */}
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={() => toggleConstraint('budgetCap')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                                constraints.budgetCap
                                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400'
                            }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${constraints.budgetCap ? 'bg-cyan-400' : 'bg-zinc-300'}`} />
                            <span>Hard $5k Monthly Spending Cap</span>
                        </motion.button>

                        {/* Chip 3: Prune Ghost Seats */}
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={() => toggleConstraint('pruneGhostSeats')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                                constraints.pruneGhostSeats
                                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400'
                            }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${constraints.pruneGhostSeats ? 'bg-emerald-400' : 'bg-zinc-300'}`} />
                            <span>Prune Unused Ghost Seats</span>
                        </motion.button>

                        {/* Chip 4: Autonomous Prod Access */}
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={() => toggleConstraint('prodAccess')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                                constraints.prodAccess
                                    ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                                    : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400'
                            }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${constraints.prodAccess ? 'bg-white' : 'bg-zinc-300'}`} />
                            <span>Grant Autonomous Database Access</span>
                        </motion.button>
                    </div>
                </div>

                {/* Side-by-Side Living Decision Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    
                    {/* Option 1: Unchecked Vendor Rollout */}
                    <motion.div 
                        layout
                        className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                            optADisqualified 
                                ? 'bg-zinc-50/80 border-rose-300 shadow-sm' 
                                : 'bg-white border-zinc-300 shadow-md'
                        }`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-bold block">
                                    Option A
                                </span>
                                <h3 className="text-lg font-bold text-zinc-950 font-grotesk">
                                    Unchecked Vendor Rollout
                                </h3>
                            </div>
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                                optADisqualified 
                                    ? 'bg-rose-100 text-rose-800 border border-rose-300' 
                                    : 'bg-zinc-200 text-zinc-700'
                            }`}>
                                {optADisqualified ? 'Disqualified' : 'Alternative'}
                            </span>
                        </div>

                        {/* Financial & Velocity Facts */}
                        <div className="grid grid-cols-2 gap-4 py-4 my-2 border-y border-zinc-200/90 text-xs">
                            <div>
                                <span className="text-zinc-500 uppercase tracking-wider font-mono text-[10px] block">
                                    True Monthly Cost
                                </span>
                                <span className="text-xl font-extrabold text-zinc-950 font-mono mt-0.5 block">
                                    {optACost}
                                </span>
                                <span className="text-[11px] text-zinc-600 block mt-0.5 leading-tight">
                                    {optACostNote}
                                </span>
                            </div>
                            <div>
                                <span className="text-zinc-500 uppercase tracking-wider font-mono text-[10px] block">
                                    Net Released Velocity
                                </span>
                                <span className="text-xl font-extrabold text-zinc-950 font-mono mt-0.5 block">
                                    {optAVelocity}
                                </span>
                                <span className="text-[11px] text-zinc-600 block mt-0.5 leading-tight">
                                    Typing increased, but review queues stalled
                                </span>
                            </div>
                        </div>

                        {/* Advantages & Disadvantages */}
                        <div className="space-y-2 text-xs pt-2">
                            <div className="flex items-start gap-2 text-emerald-800">
                                <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                <span>Zero setup time; developers install extensions immediately.</span>
                            </div>
                            <div className="flex items-start gap-2 text-rose-700">
                                <X className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                <span>40% of generated pull requests contain unverified hallucinations.</span>
                            </div>
                            {prodAccessActive && (
                                <div className="flex items-start gap-2 text-rose-900 font-bold bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                                    <span>Constraint Violation: Agent has unmonitored write access to production database.</span>
                                </div>
                            )}
                            {reviewTaxActive && (
                                <div className="flex items-start gap-2 text-rose-800 text-[11px]">
                                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                    <span>Seniors spend 16 hrs/week doing line-by-line damage control.</span>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Option 2: Governed AI Runtime (Richard Ewing Model) */}
                    <motion.div 
                        layout
                        className="p-6 sm:p-7 rounded-2xl bg-emerald-50/40 border-2 border-emerald-500/80 shadow-lg relative overflow-hidden"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                                    Option B · Sovereign Model
                                </span>
                                <h3 className="text-lg font-bold text-zinc-950 font-grotesk">
                                    Governed AI Runtime &amp; Scope Caps
                                </h3>
                            </div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-600 text-white shadow-sm">
                                Recommended
                            </span>
                        </div>

                        {/* Financial & Velocity Facts */}
                        <div className="grid grid-cols-2 gap-4 py-4 my-2 border-y border-emerald-200 text-xs">
                            <div>
                                <span className="text-emerald-800 uppercase tracking-wider font-mono text-[10px] block font-bold">
                                    True Monthly Cost
                                </span>
                                <span className="text-xl font-extrabold text-emerald-950 font-mono mt-0.5 block">
                                    {optBCost}
                                </span>
                                <span className="text-[11px] text-zinc-600 block mt-0.5 leading-tight">
                                    {optBCostNote}
                                </span>
                            </div>
                            <div>
                                <span className="text-emerald-800 uppercase tracking-wider font-mono text-[10px] block font-bold">
                                    Net Released Velocity
                                </span>
                                <span className="text-xl font-extrabold text-emerald-950 font-mono mt-0.5 block">
                                    {optBVelocity}
                                </span>
                                <span className="text-[11px] text-zinc-600 block mt-0.5 leading-tight">
                                    Verified pull requests shipped with zero review stalls
                                </span>
                            </div>
                        </div>

                        {/* Advantages */}
                        <div className="space-y-2 text-xs pt-2">
                            <div className="flex items-start gap-2 text-emerald-900 font-medium">
                                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                <span>Hard token spending caps prevent weekend cloud invoice shocks.</span>
                            </div>
                            <div className="flex items-start gap-2 text-emerald-900 font-medium">
                                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                <span>Junior developers must explain generated logic before merging.</span>
                            </div>
                            <div className="flex items-start gap-2 text-emerald-900 font-medium">
                                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                <span>Ghost seats pruned automatically every 30 days of inactivity.</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Living Rationale Box (Like Mardyn's Recommendation Banner) */}
                <motion.div 
                    layout
                    className="p-5 sm:p-6 rounded-2xl bg-[#F5F0EB] border border-zinc-300 flex flex-col sm:flex-row items-start gap-4"
                >
                    <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-zinc-950 font-grotesk mb-1">
                            {rationaleTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                            {rationaleBody}
                        </p>
                    </div>

                    <div className="self-end sm:self-center shrink-0">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                        >
                            <span>Book $450 Audit</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
