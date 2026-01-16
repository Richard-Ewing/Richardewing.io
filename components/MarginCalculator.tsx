"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlowCard } from "./ui/GlowCard";
import { NumberTicker } from "./ui/NumberTicker";
import { motion } from "framer-motion";

export function MarginCalculator() {
    const [revenue, setRevenue] = useState(1000000);
    const [cogs, setCogs] = useState(150000);
    const [personnel, setPersonnel] = useState(300000);

    const margin = revenue > 0 ? ((revenue - (cogs + personnel)) / revenue) * 100 : 0;
    const isHealthy = margin >= 60;

    return (
        <section id="margin-calculator" className="my-8">
            <GlowCard glowColor={isHealthy ? "rgba(0, 240, 255, 0.4)" : "rgba(255, 51, 51, 0.4)"}>
                <div className="px-4">
                    <h2 className="text-3xl font-bold text-white mb-2">Margin Calculator</h2>
                    <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-8">// SAAS GROSS MARGINS (WITH R&D COSTS)</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                            <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-2">Total Revenue ($)</label>
                            <input
                                type="number"
                                value={revenue}
                                onChange={(e) => setRevenue(parseFloat(e.target.value) || 0)}
                                className="w-full bg-black border border-white/20 rounded-lg p-3 text-white font-mono focus:border-cyan outline-none transition-colors"
                            />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                            <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-2">Hosting/AWS Costs ($)</label>
                            <input
                                type="number"
                                value={cogs}
                                onChange={(e) => setCogs(parseFloat(e.target.value) || 0)}
                                className="w-full bg-black border border-white/20 rounded-lg p-3 text-white font-mono focus:border-cyan outline-none transition-colors"
                            />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                            <label className="block text-[10px] font-mono text-danger uppercase mb-2">Support & Maint. Salaries ($)</label>
                            <input
                                type="number"
                                value={personnel}
                                onChange={(e) => setPersonnel(parseFloat(e.target.value) || 0)}
                                className="w-full bg-black border border-danger/30 rounded-lg p-3 text-white font-mono focus:border-danger outline-none transition-colors"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className={cn(
                            "bg-black p-6 rounded-xl border flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-500",
                            isHealthy ? "border-cyan/20 bg-cyan/5" : "border-danger/20 bg-danger/5"
                        )}
                        layout
                    >
                        <div className="text-center md:text-left">
                            <div className="text-xs font-mono text-zinc-500 uppercase">Gross Margin</div>
                            <div className={cn("text-5xl font-bold tabular-nums", isHealthy ? "text-cyan" : "text-danger")}>
                                <NumberTicker value={margin} decimalPlaces={1} suffix="%" />
                            </div>
                        </div>
                        {!isHealthy && (
                            <motion.a
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                href="/canonical/aper.html"
                                className="px-6 py-3 bg-danger text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-red-600 transition-all shadow-lg shadow-red-900/20"
                            >
                                Fix Your Margins (Download APER) &rarr;
                            </motion.a>
                        )}
                    </motion.div>
                </div>
            </GlowCard>
        </section>
    );
}
