
'use client';

import Link from 'next/link';
import { BlurIn } from './components/magicui/blur-in';
import { WordRotate } from './components/magicui/word-rotate';

export default function Home() {
  return (
    <div className="max-w-4xl w-full z-10 flex flex-col justify-center min-h-[80vh]">
      {/* Background FX replicated from legacy */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="mb-8">
        <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
          I help boards stop<br />bleeding money on
        </h1>
        <WordRotate
          words={["AI they don't understand.", "Features nobody uses.", "Headcount without ROI.", "Zombie Infrastructure."]}
          className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt tracking-tight leading-none"
          duration={3000}
        />
      </div>

      <div className="flex gap-6 mb-12 border-b border-white/10 pb-8 animate-fade-in-up delay-100">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1">FEATURED IN:</span>
        <a href="https://builtin.com/articles/ai-product-business-test" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-white/20 hover:border-white transition pb-0.5">Built In</a>
        <a href="https://foundry.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-white/20 hover:border-white transition pb-0.5">Foundry</a>
        <a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-white/20 hover:border-white transition pb-0.5">TechCrunch</a>
      </div>

      <div className="animate-fade-in-up delay-200">
        <h3 className="text-white font-bold text-2xl mb-4">The Uncomfortable Truth</h3>
        <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-2xl">
          Most AI programs don&rsquo;t fail because the models are wrong. They fail because no one owns the economic
          truth of probabilistic systems.
        </p>
      </div>

      <div className="capsule-container rounded-2xl p-8 bg-black/40 border border-white/10 mb-12 animate-fade-in-up delay-300">
        <span className="font-mono text-xs text-cobalt uppercase tracking-widest mb-2 block">THE MANDATE</span>
        <p className="text-white font-bold text-lg mb-4">
          I enforce economic reality inside product portfolios where AI has made costs probabilistic and
          accountability blurry.
        </p>
        <p className="text-sm text-zinc-400 italic">
          I do not optimize models. I do not run &quot;Innovation Workshops.&quot; I diagnose which initiatives are quietly
          destroying value—and which ones should be shut down immediately.
        </p>
      </div>

      <div className="flex gap-4 mb-20 animate-fade-in-up delay-300">
        <Link href="/advisory" className="bg-white text-black font-bold uppercase text-xs px-8 py-4 rounded-lg hover:bg-cobalt hover:text-white transition-all tracking-widest shadow-lg hover:shadow-cobalt/20">
          Work With Me
        </Link>
        <Link href="/manifesto" className="bg-transparent border border-white text-white font-bold uppercase text-xs px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all tracking-widest">
          Read Manifesto
        </Link>
      </div>

      {/* Signatures */}
      <h2 className="text-3xl font-bold text-white mb-8 border-t border-white/10 pt-12 animate-fade-in-up delay-500">
        Signature Interventions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-500">
        <div className="p-6 border border-white/10 bg-zinc-900/30 rounded-xl hover:border-cobalt/50 transition duration-300">
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
            Scenario A &bull; The Infinite Loop
          </h3>
          <div className="text-3xl font-bold text-cobalt mb-1">$2.4M</div>
          <div className="text-xs text-zinc-400 uppercase tracking-widest mb-4">Annualized Savings</div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Implemented Q-PEP&trade; Kill Switch for an enterprise insurer. Token costs exceeded human labor by 40% due to retry loops.
          </p>
        </div>

        <div className="p-6 border border-white/10 bg-zinc-900/30 rounded-xl hover:border-cobalt/50 transition duration-300">
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
            Scenario B &bull; The M&A Mirage
          </h3>
          <div className="text-3xl font-bold text-cobalt mb-1">12%</div>
          <div className="text-xs text-zinc-400 uppercase tracking-widest mb-4">Real Margin (vs 80%)</div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Forensic UEV audit for a PE firm looking to acquire a vertical SaaS AI company. Revealed inference costs were subsidized by VC cash.
          </p>
        </div>
      </div>
    </div>
  );
}
