"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlowCard } from "./ui/GlowCard";
import { NumberTicker } from "./ui/NumberTicker";
import { motion } from "framer-motion";

export function APICostCalculator() {
    const [price, setPrice] = useState(20);
    const [queries, setQueries] = useState(500);
    const [tokens, setTokens] = useState(1000);
    const [costPer1k, setCostPer1k] = useState(0.03);

    const totalTokens = queries * tokens;
    const totalCost = (totalTokens / 1000) * costPer1k;
    const margin = price > 0 ? ((price - totalCost) / price) * 100 : 0;

    const isHealthy = margin >= 40;

    return (
        <section id="api-calculator" className="my-12">
            <GlowCard glowColor={isHealthy ? "rgba(0, 240, 255, 0.4)" : "rgba(255, 51, 51, 0.4)"}>
                <div className="px-4">
                    <h2 className="text-2xl font-bold text-white mb-2">ChatGPT API Cost Calculator</h2>
                    <p className="font-mono text-xs text-cyan uppercase tracking-widest mb-6">// ESTIMATE TOKEN COSTS & MARGINS</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {[
                            { label: "User Price ($/mo)", val: price, set: setPrice, step: 1 },
                            { label: "Queries / User / Mo", val: queries, set: setQueries, step: 10 },
                            { label: "Avg Tokens / Query", val: tokens, set: setTokens, step: 100 },
                            { label: "Cost Per 1k Tokens ($)", val: costPer1k, set: setCostPer1k, step: 0.001 }
                        ].map((field, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                                <label className="text-xs font-mono text-zinc-400 block mb-1">{field.label}</label>
                                <input
                                    type="number"
                                    value={field.val}
                                    step={field.step}
                                    onChange={(e) => field.set(parseFloat(e.target.value) || 0)}
                                    className="w-full bg-black border border-white/20 rounded-lg p-2 text-white text-sm focus:border-cyan outline-none transition-colors"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-4 gap-4">
                        <div>
                            <div className="text-xs font-mono uppercase text-zinc-500">Gross Margin</div>
                            <div className={cn("text-3xl font-bold tabular-nums", isHealthy ? "text-cyan" : "text-danger")}>
                                <NumberTicker value={margin} decimalPlaces={1} suffix="%" />
                            </div>
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="/canonical/innovation-tax.html"
                            className="px-4 py-2 bg-cyan/10 text-cyan border border-cyan/50 font-bold uppercase text-[10px] rounded hover:bg-cyan hover:text-black transition-all"
                        >
                            Read: The Innovation Tax
                        </motion.a>
                    </div>
                </div>
            </GlowCard>
        </section>
    );
}
