"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlowCard } from "./ui/GlowCard";
import { NumberTicker } from "./ui/NumberTicker";
import { motion, AnimatePresence } from "framer-motion";

export function AUEBEngine() {
    const [price, setPrice] = useState(20);
    const [tokens, setTokens] = useState(500000);

    const cost = (tokens / 1000000) * 15;
    const margin = price > 0 ? ((price - cost) / price) * 100 : 0;
    const collapsePoint = cost > 0 ? (price / cost) : Infinity;

    const isHealthy = margin >= 60;
    const verdict = isHealthy
        ? "SOLVENT: Gross margins are healthy. Your pricing structure supports rapid scaling without unit economic collapse."
        : `CRITICAL: Pricing architecture failure detected. Your AI product becomes insolvent at ${collapsePoint.toFixed(1)}x usage growth. You are effectively scaling a loss.`;

    return (
        <GlowCard className="mb-12" glowColor={isHealthy ? "rgba(0, 240, 255, 0.4)" : "rgba(255, 51, 51, 0.4)"}>
            <div className="absolute top-0 right-0 bg-cyan-400/20 px-4 py-2 text-[10px] font-mono text-cyan-400 uppercase tracking-tighter rounded-bl-xl border-l border-b border-cyan-400/30">
                Interactive Tool
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10 p-4">
                <div className="lg:w-1/3">
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter uppercase">AI Unit Economics Benchmark&trade;</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Most AI products are pricing for insolvency. Use this benchmark to calculate your "Collapse Point"—the user growth usage multiplier where your margins flip negative.
                    </p>
                </div>

                <div className="lg:w-2/3 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1 tracking-widest">Monthly SaaS Price ($)</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                                className="w-full bg-black border border-white/10 p-4 text-white font-mono text-sm rounded-lg focus:border-cyan-400 outline-none transition-colors"
                            />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1 tracking-widest">Est. Tokens per User / Mo</label>
                            <input
                                type="number"
                                value={tokens}
                                onChange={(e) => setTokens(parseFloat(e.target.value) || 0)}
                                className="w-full bg-black border border-white/10 p-4 text-white font-mono text-sm rounded-lg focus:border-cyan-400 outline-none transition-colors"
                            />
                        </motion.div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-6 gap-6">
                        <div>
                            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">True Gross Margin</div>
                            <div className={cn("text-5xl font-bold tracking-tighter tabular-nums", isHealthy ? "text-cyan-400" : "text-red-500")}>
                                <NumberTicker value={margin} decimalPlaces={1} suffix="%" />
                            </div>
                        </div>
                        <div className="md:text-right">
                            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Insolvency Threshold</div>
                            <div className="text-2xl font-bold text-red-500 font-mono tabular-nums">
                                {isFinite(collapsePoint) ? (
                                    <span><NumberTicker value={collapsePoint} decimalPlaces={1} />x Growth</span>
                                ) : "Infinite"}
                            </div>
                        </div>
                    </div>

                    <motion.p
                        key={isHealthy ? "healthy" : "critical"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "mt-6 text-xs font-mono leading-relaxed p-4 rounded-lg border",
                            isHealthy ? "bg-cyan/5 border-cyan/20 text-cyan" : "bg-danger/5 border-danger/20 text-red-400"
                        )}
                    >
                        {verdict}
                    </motion.p>
                </div>
            </div>
        </GlowCard>
    );
}
