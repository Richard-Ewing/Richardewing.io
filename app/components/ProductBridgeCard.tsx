import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, TrendingUp } from 'lucide-react';

interface ProductBridgeCardProps {
  variant?: 'both' | 'exogram' | 'careerwin' | 'all';
  className?: string;
}

export default function ProductBridgeCard({ variant = 'all', className = '' }: ProductBridgeCardProps) {
  const showExogram = variant === 'all' || variant === 'both' || variant === 'exogram';
  const showCareerWin = variant === 'all' || variant === 'both' || variant === 'careerwin';
  const showAdvisory = variant === 'all' || variant === 'both';

  return (
    <div className={`my-12 ${className}`}>
      <div className="text-center mb-8">
        <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest block mb-2">
          Portfolio Architecture
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-grotesk text-zinc-950 mb-3">
          One Intelligence Architecture. Three Levels of Application.
        </h3>
        <p className="text-sm sm:text-base text-zinc-700 font-medium max-w-2xl mx-auto leading-relaxed">
          Exogram provides the underlying engine for recording context, preserving meaning, managing inference, and enforcing admissibility. CareerWin applies that engine to human career evidence, while our advisory practice applies it to enterprise AI capital and balance sheets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {showExogram && (
          <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 text-white rounded-3xl p-7 shadow-xl border border-zinc-800 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full font-mono text-[10px] uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>The Core Engine</span>
              </div>
              <h4 className="text-xl font-bold font-grotesk mb-1 text-white">Exogram Platform</h4>
              <p className="text-xs font-mono text-cyan-300 font-bold mb-3 uppercase tracking-wider">
                Enterprise Runtime Substrate
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                The underlying technology engine. Hashes state, preserves verified context, manages probabilistic inference, and stops unauthorized agent actions in 0.07ms.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
              <Link
                href="/exogram"
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold font-mono text-xs rounded-xl uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
              >
                Learn Exogram <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://exogram.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                Exogram.ai ↗
              </a>
            </div>
          </div>
        )}

        {showCareerWin && (
          <div className="bg-gradient-to-br from-indigo-950 to-zinc-900 text-white rounded-3xl p-7 shadow-xl border border-indigo-900/50 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full font-mono text-[10px] uppercase tracking-widest mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>First Application</span>
              </div>
              <h4 className="text-xl font-bold font-grotesk mb-1 text-white">CareerWin Platform</h4>
              <p className="text-xs font-mono text-indigo-300 font-bold mb-3 uppercase tracking-wider">
                Human Work Evidence Engine
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                The first production application of Exogram. Applies the evidence verification engine to human work history, turning vague claims into verified skills, leveling data, and compensation benchmarks.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-indigo-900/50">
              <Link
                href="/careerwin"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold font-mono text-xs rounded-xl uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
              >
                Learn CareerWin <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://careerwin.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                CareerWin.ai ↗
              </a>
            </div>
          </div>
        )}

        {showAdvisory && (
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 text-white rounded-3xl p-7 shadow-xl border border-zinc-700/60 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full font-mono text-[10px] uppercase tracking-widest mb-4">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Enterprise Advisory</span>
              </div>
              <h4 className="text-xl font-bold font-grotesk mb-1 text-white">RichardEwing.io</h4>
              <p className="text-xs font-mono text-emerald-300 font-bold mb-3 uppercase tracking-wider">
                AI Capital &amp; Unit Economics
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                Applies the same governance rules to company balance sheets. We audit engineering R&amp;D budgets, eliminate runaway token leakage, and deliver board-ready ROI frameworks.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
              <Link
                href="/services"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-mono text-xs rounded-xl uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
              >
                Explore Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/assessment"
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                Free Benchmark →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
