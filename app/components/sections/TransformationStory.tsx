"use client";

import React from 'react';
import { 
  DollarSign, 
  EyeOff, 
  ShieldAlert, 
  AlertTriangle, 
  HeartCrack,
  BarChart3, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Handshake,
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';

const beforeItems = [
  { icon: DollarSign, text: "Unknown AI costs" },
  { icon: EyeOff, text: "Hidden engineering waste" },
  { icon: ShieldAlert, text: "Shadow AI exposure" },
  { icon: AlertTriangle, text: "Reactive governance" },
  { icon: HeartCrack, text: "Finance distrusts engineering" },
];

const afterItems = [
  { icon: BarChart3, text: "Measured AI spend with unit economics" },
  { icon: Target, text: "Known R&D capital allocation" },
  { icon: ShieldCheck, text: "Policy-enforced AI access controls" },
  { icon: TrendingUp, text: "Predictable margins with cost-caps" },
  { icon: Handshake, text: "CFO and CTO aligned on AI ROI" },
];

const TransformationStory = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="page-container relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight font-grotesk">
            The Reality of AI Investments
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
            Stop guessing where your AI budget is going. Turn chaotic R&D spend into predictable financial assets.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 relative">
          
          {/* Before Column */}
          <div className="flex-1 max-w-lg mx-auto w-full">
            <ScrollReveal>
              <div className="bg-zinc-900/80 border border-rose-900/30 rounded-2xl p-8 lg:p-10 shadow-2xl h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 font-semibold text-sm mb-8">
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  CURRENT STATE
                </div>
                
                <ul className="space-y-6">
                  {beforeItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-950 border border-rose-900 flex items-center justify-center mt-1">
                        <item.icon className="w-5 h-5 text-rose-500" />
                      </div>
                      <div>
                        <p className="text-zinc-300 font-medium text-lg leading-tight pt-2">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Center Divider / Arrow */}
          <div className="hidden lg:flex flex-col justify-center items-center relative z-20 w-12">
            <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-zinc-600 to-zinc-800"></div>
            <div className="relative bg-zinc-950 p-3 border border-zinc-700 rounded-full shadow-xl">
              <ArrowRight className="w-6 h-6 text-zinc-400" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mt-12 whitespace-nowrap rotate-90 lg:rotate-0 lg:mt-16">
              <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest bg-zinc-950 px-2">
                The AI Economics Audit
              </span>
            </div>
          </div>

          {/* Mobile Divider */}
          <div className="lg:hidden flex flex-col items-center justify-center py-4">
             <div className="h-12 w-px bg-gradient-to-b from-zinc-800 via-zinc-600 to-zinc-800 mb-4"></div>
             <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-700 shadow-xl flex items-center gap-2">
               <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                 The AI Economics Audit
               </span>
               <ArrowRight className="w-4 h-4 text-zinc-400" />
             </div>
             <div className="h-12 w-px bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-800 mt-4"></div>
          </div>

          {/* After Column */}
          <div className="flex-1 max-w-lg mx-auto w-full">
            <ScrollReveal delay={0.2}>
              <div className="bg-zinc-900/80 border border-emerald-900/30 rounded-2xl p-8 lg:p-10 shadow-2xl h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-8">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  TRANSFORMED STATE
                </div>
                
                <ul className="space-y-6">
                  {afterItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-950 border border-emerald-900 flex items-center justify-center mt-1">
                        <item.icon className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg leading-tight pt-2">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformationStory;
