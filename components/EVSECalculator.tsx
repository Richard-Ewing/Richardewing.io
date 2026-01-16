"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NumberTicker } from "./ui/NumberTicker";
import { GlowCard } from "./ui/GlowCard";
import { BorderBeam } from "./magicui/border-beam";

export function EVSECalculator() {
    const [revenue, setRevenue] = useState(1000000);
    const [multiple, setMultiple] = useState(6);

    // Add visual feedback state
    const [isUpdating, setIsUpdating] = useState(false);

    const baseCase = (revenue * multiple) * 0.7;
    const downCase = (revenue * multiple) * 0.3;
    const delta = (revenue * multiple) - downCase;

    useEffect(() => {
        setIsUpdating(true);
        const timer = setTimeout(() => setIsUpdating(false), 300);
        return () => clearTimeout(timer);
    }, [revenue, multiple]);

    const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

    return (
        <GlowCard className="mt-20 overflow-hidden relative group/beam" glowColor="rgba(0, 240, 255, 0.4)">
            <BorderBeam size={400} duration={12} delay={9} colorFrom="#00F0FF" colorTo="#0055FF" />
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tighter">Enterprise Value Scenario Engine&trade;</h3>
                        <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">// FINANCIAL DEFENSE MODELING</p>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block mr-2" />
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">SYSTEM ACTIVE</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-2 tracking-widest">Est. Annual Revenue Impact ($)</label>
                        <input
                            type="number"
                            value={revenue}
                            onChange={(e) => setRevenue(parseFloat(e.target.value) || 0)}
                            className="w-full bg-black border border-white/10 p-4 text-white font-mono focus:border-cyan-400 outline-none transition-all rounded-lg text-lg"
                        />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-2 tracking-widest">Valuation Multiple (e.g., 6x)</label>
                        <input
                            type="number"
                            value={multiple}
                            onChange={(e) => setMultiple(parseFloat(e.target.value) || 0)}
                            className="w-full bg-black border border-white/10 p-4 text-white font-mono focus:border-cyan-400 outline-none transition-all rounded-lg text-lg"
                        />
                    </motion.div>
                </div>

                <div className="space-y-8 bg-black/40 p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                    {/* Background pulse on update */}
                    <AnimatePresence>
                        {isUpdating && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-cyan-500 pointer-events-none"
                            />
                        )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end relative z-10">
                        <div>
                            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Scenario: Probable (0.7p)</div>
                            <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter tabular-nums">
                                <NumberTicker value={baseCase} prefix="$" />
                            </div>
                        </div>
                        <div className="md:text-right">
                            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Downside Risk (0.3p)</div>
                            <div className="text-2xl md:text-3xl font-bold text-red-500 tracking-tighter tabular-nums">
                                <NumberTicker value={downCase} prefix="$" />
                            </div>
                        </div>
                    </div>

                    {/* Animated Bar Visualizer */}
                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden flex">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-white"
                        />
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "30%" }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="h-full bg-red-500"
                        />
                    </div>

                    <p className="text-xs font-mono text-zinc-400 italic leading-relaxed">
                        The board is approving a plan optimized for the upside. However, your downside scenario implies a destruction of <strong className="text-red-400">{fmt.format(delta)}</strong> in Enterprise Value. A defense strategy is required.
                    </p>
                </div>

                <div className="mt-10 text-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#booking"
                        className="inline-block bg-white text-black font-bold uppercase text-[10px] px-8 py-4 rounded-full tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                    >
                        Request Roadmap Defense Review
                    </motion.a>
                </div>
            </div>
        </GlowCard>
    );
}
