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
        {/* Status Badge - Psychology: Scarcity + Urgency */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6 w-fit animate-pulse">
          <span className="w-2 h-2 bg-cyan-400 rounded-full" />
          Now Accepting Q1 2026 Engagements
        </div>

        {/* Main Headline - Psychology: Loss aversion is 2x more powerful than gains */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-4">
          Your AI Investment is<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Bleeding Cash.</span>
        </h1>

        <div className="mb-8">
          <span className="text-zinc-500 text-xl sm:text-2xl">I find the leaks in </span>
          <WordRotate
            words={["AI they don't understand.", "Features nobody uses.", "Headcount without ROI.", "Zombie Infrastructure."]}
            className="text-xl sm:text-2xl font-bold text-white"
            duration={3000}
          />
        </div>

        {/* Value Proposition - Clear, specific, benefit-focused */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
          I'm <span className="text-white font-bold">Richard Ewing</span>, a Product Economist.
          I run forensic audits that find the capital leaks inside your AI investments—then I help you plug them.
          <span className="text-cyan-400"> No consulting theater. Just hard numbers.</span>
        </p>

        {/* Social Proof - Psychology: Authority + External Validation */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8 pb-8 border-b border-white/10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Published in:</span>
          <a href="https://builtin.com/authors/richard-ewing" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-transparent hover:border-white transition">Built In</a>
          <a href="https://www.cio.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-transparent hover:border-white transition">Foundry</a>
          <a href="https://hackernoon.com/u/richardewing1" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-transparent hover:border-white transition">HackerNoon</a>
          <a href="https://www.mindtheproduct.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-transparent hover:border-white transition">Mind the Product</a>
        </div>

        {/* Stats Bar - Psychology: Specific numbers build instant credibility */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-10">
          <div className="text-center sm:text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
            <div className="text-2xl sm:text-4xl font-bold text-cyan-400">
              <NumberTicker value={25} prefix="$" suffix="M" />
            </div>
            <div className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase tracking-widest">ARR Scaled</div>
          </div>
          <div className="text-center sm:text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
            <div className="text-2xl sm:text-4xl font-bold text-white">
              <NumberTicker value={15} suffix="+" />
            </div>
            <div className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase tracking-widest">Years Experience</div>
          </div>
          <div className="text-center sm:text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
            <div className="text-2xl sm:text-4xl font-bold text-gold">
              <NumberTicker value={7} suffix="M+" />
            </div>
            <div className="text-[10px] sm:text-xs text-zinc-500 font-mono uppercase tracking-widest">Users Scaled</div>
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
          <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-cobalt" />
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
              Enterprise insurer. AI token costs exceeded human labor by 40% due to retry loops. Implemented Q-PEP™ Kill Switch. <span className="text-white font-semibold">Capped variance at 15%.</span>
            </p>
          </GlowCard>

          <GlowCard className="p-6 sm:p-8" glowColor="cobalt">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
              Case B • The M&amp;A Mirage
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">12%</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest mb-4">Real Margin (vs 80% Claimed)</div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              PE firm acquiring vertical SaaS AI company. Forensic UEV audit revealed inference costs were VC-subsidized. <span className="text-white font-semibold">Saved them from a catastrophic acquisition.</span>
            </p>
          </GlowCard>
        </div>
      </ScrollReveal>

      {/* The Uncomfortable Truth - Capsule */}
      <ScrollReveal delay={200} className="max-w-4xl relative z-10 mt-16 mb-8">
        <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 border-l-4 border-cyan-500">
          <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">The Uncomfortable Truth</div>
          <p className="text-xl sm:text-2xl text-white font-bold leading-relaxed mb-6">
            Most AI programs don't fail because the models are wrong.
          </p>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
            They fail because <span className="text-red-500 font-bold">no one owns the economic truth</span> of probabilistic systems.
            I don't optimize models. I don't run "Innovation Workshops." I diagnose which initiatives are quietly destroying value—and which ones should be <span className="text-white font-bold">shut down immediately.</span>
          </p>
        </div>
      </ScrollReveal>

      {/* Final CTA - Psychology: Repeat the call to action */}
      <ScrollReveal delay={300} className="max-w-4xl relative z-10 py-12 border-t border-white/10 mt-8">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Find the Leaks?</h3>
          <p className="text-zinc-400 mb-6 max-w-md mx-auto">Book a free 30-minute diagnostic call. I'll tell you exactly where you're bleeding—no pitch deck, no upsell.</p>
          <ShineBorder borderColor="rgba(0, 240, 255, 0.6)" duration={2}>
            <Link
              href="/advisory"
              className="inline-block bg-white text-black font-bold uppercase text-sm px-12 py-4 tracking-widest hover:bg-cyan-400 transition-colors"
            >
              Start Your Audit →
            </Link>
          </ShineBorder>
        </div>
      </ScrollReveal>
    </div>
  );
}
