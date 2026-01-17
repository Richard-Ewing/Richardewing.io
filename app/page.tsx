'use client';

import Link from 'next/link';
import { WordRotate } from './components/magicui/word-rotate';
import { NumberTicker } from './components/magicui/number-ticker';
import { ShineBorder } from './components/magicui/shine-border';
import { Meteors } from './components/magicui/meteors';
import { ScrollReveal } from './components/magicui/scroll-reveal';
import { GlowCard } from './components/magicui/glow-card';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Effects */}
      <Meteors count={15} />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[128px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-cobalt/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* Hero Section - Above the Fold */}
      <section className="flex-1 flex flex-col justify-center max-w-4xl relative z-10 py-8 sm:py-12">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6 w-fit">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          Available for Q1 2026
        </div>

        {/* Main Headline - Psychology: Loss aversion is 2x more powerful than gains */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4">
          Stop Bleeding Money on
        </h1>
        <WordRotate
          words={["AI They Don't Understand.", "Features Nobody Uses.", "Headcount Without ROI.", "Zombie Infrastructure."]}
          className="text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt tracking-tight leading-[1.1] mb-8"
          duration={3000}
        />

        {/* Value Proposition - Clear, specific, benefit-focused */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
          I'm Richard Ewing, a <span className="text-white font-semibold">Product Economist</span>.
          I run forensic audits that find the capital leaks inside your AI investments—then I help you plug them.
        </p>

        {/* Social Proof - Psychology: Authority + Social Validation */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 pb-8 border-b border-white/10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Featured in:</span>
          <a href="https://builtin.com/articles/ai-product-business-test" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition">Built In</a>
          <a href="https://foundry.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition">Foundry</a>
          <a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition">TechCrunch</a>
        </div>

        {/* Stats Bar - Psychology: Specific numbers build credibility */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-10">
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-4xl font-bold text-white">
              <NumberTicker value={2} prefix="$" suffix="B+" />
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 font-mono uppercase tracking-widest">Waste Identified</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-4xl font-bold text-white">
              <NumberTicker value={15} suffix="y" />
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 font-mono uppercase tracking-widest">Experience</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-4xl font-bold text-white">
              <NumberTicker value={100} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 font-mono uppercase tracking-widest">Audits Done</div>
          </div>
        </div>

        {/* CTA Buttons - Psychology: Primary action stands out, secondary provides safe option */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <ShineBorder borderColor="rgba(0, 240, 255, 0.6)" duration={2}>
            <Link
              href="/advisory"
              className="block bg-white text-black font-bold uppercase text-sm px-8 py-4 tracking-widest text-center hover:bg-cyan-400 transition-colors"
            >
              Get Your Free Audit →
            </Link>
          </ShineBorder>
          <Link
            href="/manifesto"
            className="bg-transparent border border-white/30 text-white font-bold uppercase text-sm px-8 py-4 rounded-xl hover:bg-white/5 transition-all tracking-widest text-center"
          >
            Read My Manifesto
          </Link>
        </div>
      </section>

      {/* Below the Fold - Proof Points */}
      <ScrollReveal className="max-w-4xl relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-4">
          <span className="w-8 h-0.5 bg-cyan-400" />
          Signature Interventions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <GlowCard className="p-6 sm:p-8" glowColor="cyan">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
              Case A • The Infinite Loop
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
              <NumberTicker value={2400000} prefix="$" />
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest mb-4">Annualized Savings</div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Implemented Q-PEP™ Kill Switch for an enterprise insurer. Token costs exceeded human labor by 40% due to retry loops. Capped variance at 15%.
            </p>
          </GlowCard>

          <GlowCard className="p-6 sm:p-8" glowColor="cobalt">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
              Case B • The M&amp;A Mirage
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-cobalt mb-2">12%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest mb-4">Real Margin (vs 80% Claimed)</div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Forensic UEV audit for a PE firm acquiring a vertical SaaS AI company. Revealed inference costs were subsidized by VC cash.
            </p>
          </GlowCard>
        </div>
      </ScrollReveal>

      {/* Trust Section */}
      <ScrollReveal delay={200} className="max-w-4xl relative z-10 mt-16 mb-8">
        <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">The Uncomfortable Truth</div>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-6">
            Most AI programs don't fail because the models are wrong. They fail because <span className="text-white font-semibold">no one owns the economic truth</span> of probabilistic systems.
          </p>
          <p className="text-sm text-zinc-500 italic">
            I don't optimize models. I don't run "Innovation Workshops." I diagnose which initiatives are quietly destroying value—and which ones should be shut down immediately.
          </p>
        </div>
      </ScrollReveal>

      {/* Final CTA - Psychology: Repeat the call to action */}
      <ScrollReveal delay={300} className="max-w-4xl relative z-10 py-12 border-t border-white/10 mt-8">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready to Find the Leaks?</h3>
          <p className="text-zinc-400 mb-6">Book a free 30-minute diagnostic call.</p>
          <Link
            href="/advisory"
            className="inline-block bg-white text-black font-bold uppercase text-sm px-10 py-4 rounded-xl hover:bg-cyan-400 transition-colors tracking-widest"
          >
            Start Your Audit →
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
