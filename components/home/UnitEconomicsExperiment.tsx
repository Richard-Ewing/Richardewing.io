"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FIXED_REVENUE = 24000;
const FIXED_REQUESTS = 80000;
const FIXED_PLATFORM = 1200;

const springConfig = {
  type: "spring",
  stiffness: 380,
  damping: 32,
  mass: 0.8,
};

export default function UnitEconomicsExperiment() {
  const [inferenceCost, setInferenceCost] = useState(0.15); // Default $0.15

  const contribution = useMemo(() => {
    return FIXED_REVENUE - (FIXED_REQUESTS * inferenceCost) - FIXED_PLATFORM;
  }, [inferenceCost]);

  const isPositive = contribution >= 0;

  return (
    <div className="w-full bg-[var(--surface)] border border-[var(--line-strong)] rounded-xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] flex flex-col gap-8 transition-colors duration-200">
      
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h4 className="text-[var(--ink)] font-grotesk text-xl font-medium tracking-[-0.025em] mb-2">
              Unit Economics Explorer
            </h4>
            <p className="text-[var(--text-secondary)] font-sans text-sm max-w-sm">
              Adjust the inference cost per request to observe the compound effect on total contribution margin at scale.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-[var(--surface-subtle)] p-5 rounded-lg border border-[var(--line)]">
            <div className="flex justify-between items-end">
              <label htmlFor="inference-slider" className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                Inference Cost
              </label>
              <span className="font-mono text-lg font-medium text-[var(--ink)]">
                ${inferenceCost.toFixed(2)}
              </span>
            </div>
            <div className="relative h-6 flex items-center">
              <input
                id="inference-slider"
                type="range"
                min="0.01"
                max="0.50"
                step="0.01"
                value={inferenceCost}
                onChange={(e) => setInferenceCost(parseFloat(e.target.value))}
                className="w-full appearance-none bg-zinc-200 h-2 rounded-full outline-none cursor-pointer accent-[var(--accent)] hover:accent-[var(--accent-hover)] transition-all"
                style={{
                  /* Using custom CSS to override default styling could go here, but accent-color works well for a minimal approach */
                }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[var(--line)]">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[var(--muted)] uppercase">Revenue</span>
              <span className="font-mono text-sm text-[var(--ink)]">${FIXED_REVENUE.toLocaleString()}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[var(--muted)] uppercase">Requests</span>
              <span className="font-mono text-sm text-[var(--ink)]">{FIXED_REQUESTS.toLocaleString()}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[var(--muted)] uppercase">Fixed Platform</span>
              <span className="font-mono text-sm text-[var(--ink)]">${FIXED_PLATFORM.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-8 bg-[var(--surface-subtle)] rounded-xl border border-[var(--line)]">
          <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-4">
            Contribution Margin
          </span>
          <div className="relative h-20 w-full flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={contribution}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={springConfig}
                className={`font-serif text-5xl md:text-6xl tracking-[-0.04em] ${
                  isPositive ? "text-[var(--accent-emerald)]" : "text-[var(--accent-crimson)]"
                }`}
              >
                ${Math.abs(contribution).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                {!isPositive && <span className="absolute -left-6 top-0">-</span>}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
