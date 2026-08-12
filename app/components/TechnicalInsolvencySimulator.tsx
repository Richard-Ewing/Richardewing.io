'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, DollarSign, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TechnicalInsolvencySimulator() {
  const [rdBudget, setRdBudget] = useState<number>(10); // $M
  const [headcount, setHeadcount] = useState<number>(35); // engineers
  const [unverifiedAiPct, setUnverifiedAiPct] = useState<number>(45); // %

  // Calculations
  const wasteRatio = (unverifiedAiPct / 100) * 0.55 + 0.15; // 15% to 59% waste
  const annualWasteMillions = (rdBudget * wasteRatio).toFixed(2);
  const velocityDropPct = Math.round(unverifiedAiPct * 0.85);

  // Insolvency Projection (Months from now)
  const monthsToInsolvency = Math.max(3, Math.round(36 - unverifiedAiPct * 0.45));
  const today = new Date();
  const insolvencyDate = new Date(today.getFullYear(), today.getMonth() + monthsToInsolvency, 1);
  const formattedQuarter = `Q${Math.floor(insolvencyDate.getMonth() / 3) + 1} ${insolvencyDate.getFullYear()}`;

  return (
    <div className="bg-zinc-950 text-white rounded-3xl p-8 shadow-2xl border border-zinc-800 relative overflow-hidden my-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="text-center sm:text-left mb-8 border-b border-zinc-800 pb-6">
        <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-1">
          Interactive Financial Simulator
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-grotesk text-white">
          Technical Insolvency Date Simulator
        </h3>
        <p className="text-zinc-400 text-sm mt-2 font-medium">
          Adjust your engineering parameters to see when tech debt maintenance outpaces new feature velocity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sliders Side */}
        <div className="space-y-6">
          {/* Slider 1: R&D Budget */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-2">
              <span className="text-zinc-300">Annual R&D Engineering Budget</span>
              <span className="font-mono text-cyan-400 font-bold">${rdBudget}M / yr</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={rdBudget}
              onChange={(e) => setRdBudget(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>

          {/* Slider 2: Headcount */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-2">
              <span className="text-zinc-300">Engineering Headcount</span>
              <span className="font-mono text-indigo-400 font-bold">{headcount} Engineers</span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* Slider 3: AI Code Rate */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-2">
              <span className="text-zinc-300">Unverified AI-Generated Code %</span>
              <span className="font-mono text-red-400 font-bold">{unverifiedAiPct}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="80"
              value={unverifiedAiPct}
              onChange={(e) => setUnverifiedAiPct(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
          </div>
        </div>

        {/* Dynamic Results Display */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-red-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                Projected Technical Insolvency Date
              </span>
            </div>
            <motion.span
              key={formattedQuarter}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold font-mono text-red-400"
            >
              {formattedQuarter}
            </motion.span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                Annual Waste
              </span>
              <span className="text-xl font-bold font-mono text-white">${annualWasteMillions}M</span>
            </div>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                Velocity Penalty
              </span>
              <span className="text-xl font-bold font-mono text-amber-400">-{velocityDropPct}%</span>
            </div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            At a <strong className="text-white">{unverifiedAiPct}% AI code rate</strong>, your team will spend over <strong className="text-red-400">${annualWasteMillions}M</strong> next year verifying and fixing debt before feature output collapses.
          </p>

          <div className="pt-2">
            <Link
              href="/services"
              className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Audit Your Technical Insolvency Date <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
