import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface ProductBridgeCardProps {
  variant?: 'both' | 'exogram' | 'careerwin';
  className?: string;
}

export default function ProductBridgeCard({ variant = 'both', className = '' }: ProductBridgeCardProps) {
  return (
    <div className={`my-12 ${className}`}>
      <div className="text-center mb-6">
        <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest block mb-1">
          Platform Ecosystem
        </span>
        <h3 className="text-2xl font-bold font-grotesk text-zinc-950">
          The Two Pillars Founded by Richard Ewing
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(variant === 'both' || variant === 'exogram') && (
          <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 text-white rounded-3xl p-8 shadow-xl border border-zinc-800 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full font-mono text-[10px] uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Runtime Governance</span>
              </div>
              <h4 className="text-2xl font-bold font-grotesk mb-2 text-white">Exogram Platform</h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                A deterministic AI governance runtime. Intercept out-of-bounds agent actions, stop hallucinations, and enforce strict execution boundaries in 0.07ms.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
              <Link
                href="/exogram"
                className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold font-mono text-xs rounded-xl uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
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

        {(variant === 'both' || variant === 'careerwin') && (
          <div className="bg-gradient-to-br from-indigo-950 to-zinc-900 text-white rounded-3xl p-8 shadow-xl border border-indigo-900/50 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full font-mono text-[10px] uppercase tracking-widest mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Individual Career Intelligence</span>
              </div>
              <h4 className="text-2xl font-bold font-grotesk mb-2 text-white">CareerWin Platform</h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                Career intelligence for engineers and product leaders. Access role benchmarks, leveling intelligence, and data-backed compensation strategies.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-indigo-900/50">
              <Link
                href="/careerwin"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold font-mono text-xs rounded-xl uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
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
      </div>
    </div>
  );
}
