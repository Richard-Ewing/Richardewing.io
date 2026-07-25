'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, ShieldCheck, Award, FileText, CheckCircle } from 'lucide-react';

export default function ExecutiveTrustBlock() {
  return (
    <div className="w-full bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 my-12 shadow-sm relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-mono font-bold text-purple-700 uppercase tracking-widest mb-4">
            Executive Trust & Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 mb-3">
            Why Enterprise Leaders Work With Richard Ewing
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-semibold leading-relaxed">
            15+ years in product architecture, $0→$25M ARR scaling, Tyler Technologies executive leadership, MBA in Finance, and BS in Computer Science.
          </p>
        </div>

        {/* 90-Second Video Script Card */}
        <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl border border-zinc-800">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
                <span>Executive Sync (90-Sec Overview)</span>
              </div>
              
              <h3 className="text-2xl font-grotesk font-bold text-white leading-tight">
                "What is an AI Economist?"
              </h3>

              <div className="p-4 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-zinc-300 italic leading-relaxed space-y-2">
                <p>
                  "Most organizations treat AI as a software feature. I treat AI as a financial balance sheet line item."
                </p>
                <p>
                  "When an LLM generates non-deterministic output, it consumes unbudgeted hyperscaler compute and engineering verification labor. I install deterministic runtime guardrails that guarantee hard cost-caps, eliminate shadow AI risk, and align R&D spend directly with EBITDA."
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-2">
                <span>By Richard Ewing</span>
                <span>•</span>
                <span>Founder of Exogram & CareerWin.ai</span>
              </div>
            </div>

            {/* Video Thumbnail Trigger */}
            <div className="w-full md:w-64 shrink-0 flex flex-col items-center justify-center p-6 bg-zinc-900 border border-zinc-800 rounded-2xl text-center group cursor-pointer hover:border-purple-500/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-purple-600 group-hover:bg-purple-500 text-white flex items-center justify-center mb-4 transition-all transform group-hover:scale-105 shadow-lg shadow-purple-500/30">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">Play 90-Sec Video</span>
              <span className="text-[10px] text-zinc-500 mt-1">HD • Audio Enabled</span>
            </div>

          </div>
        </div>

        {/* Publication & Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-bold text-zinc-950 text-sm mb-1">Tier-1 Publications</h4>
            <p className="text-xs text-zinc-600 font-semibold">Published in CIO.com, Built In, MindTheProduct, HackerNoon</p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 text-center">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-bold text-zinc-950 text-sm mb-1">Proprietary IP</h4>
            <p className="text-xs text-zinc-600 font-semibold">Production AI Governance Framework & Exogram Runtime Gating</p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 text-center">
            <FileText className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
            <h4 className="font-bold text-zinc-950 text-sm mb-1">Boardroom Deliverables</h4>
            <p className="text-xs text-zinc-600 font-semibold">Written risk reports, dollar-denominated findings, 90-day roadmaps</p>
          </div>
        </div>

      </div>
    </div>
  );
}
