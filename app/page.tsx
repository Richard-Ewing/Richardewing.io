import Link from "next/link";
import { WordRotate } from "@/components/magicui/word-rotate";
import { BlurIn } from "@/components/magicui/blur-in";

export default function Home() {
  return (
    <>
      <div className="mt-20 mb-12">
        <div className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
          <BlurIn word="Product Management is" className="inline-block" duration={0.8} /> <br />
          <WordRotate
            className="text-danger inline-block"
            words={["Capital Allocation.", "Risk Control.", "Financial Defense.", "Asset Management."]}
          />
        </div>

        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-light">
          Most engineering teams are functionally insolvent. They treat bandwidth like infinite inventory. Stop managing
          tickets. Start managing liquidity.
        </p>

        <div className="flex flex-col md:flex-row gap-6">

          <Link href="/advisory" className="group relative px-8 py-5 bg-white overflow-hidden rounded-xl w-full md:w-auto text-center">
            <div className="absolute inset-0 w-3 bg-danger transition-all duration-[250ms] ease-out group-hover:w-full" />
            <span className="relative text-black font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors">
              Stop The Bleeding (Book Audit)
            </span>
          </Link>

          <Link href="/system" className="px-8 py-5 border border-white/20 rounded-xl hover:border-cyan hover:bg-cyan/5 transition-all w-full md:w-auto text-center block">
            <span className="text-white font-bold uppercase tracking-widest text-xs">
              Run Diagnostic (Free)
            </span>
          </Link>

        </div>

        <div className="mt-8 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Status: Accepting Q1 Advisory Retainers
          </p>
        </div>
      </div>

      <section id="evidence" className="mt-4 border-t border-white/5 pt-12 animate-fade-in-up delay-200">
        <h2 className="text-sm text-zinc-500 font-mono uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
          <span className="w-1 h-1 bg-cobalt rounded-full" />
          Recent Interventions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="capsule-container p-8 rounded-3xl group hover:-translate-y-2 transition duration-500 bg-surface/50 border border-white/5 backdrop-blur-sm">
            <strong className="text-white text-2xl block mb-4 group-hover:text-cobalt transition">$0 to $25M ARR</strong>
            <p className="text-sm text-zinc-400 mb-6">Scaled flagship ERP product by enforcing strict unit economics.</p>
            <div className="inline-block bg-black/50 border border-white/5 px-3 py-2 rounded-lg text-[10px] font-mono text-cobalt uppercase">
              Result: 20% Churn Reduction
            </div>
          </div>
          <div className="capsule-container p-8 rounded-3xl group hover:-translate-y-2 transition duration-500 bg-surface/50 border border-white/5 backdrop-blur-sm">
            <strong className="text-white text-2xl block mb-4 group-hover:text-white transition">$5M Saved</strong>
            <p className="text-sm text-zinc-400 mb-6">Orchestrated Azure migration and sunsetted redundant legacy applications.</p>
            <div className="inline-block bg-black/50 border border-white/5 px-3 py-2 rounded-lg text-[10px] font-mono text-cobalt uppercase">
              Result: OpEx Reset
            </div>
          </div>
          <div className="capsule-container p-8 rounded-3xl group hover:-translate-y-2 transition duration-500 bg-surface/50 border border-white/5 backdrop-blur-sm">
            <strong className="text-white text-2xl block mb-4 group-hover:text-zinc-400 transition">Margin Restored</strong>
            <p className="text-sm text-zinc-400 mb-6">GenAI wrapper was costing $0.15 per query with $0.08 revenue.</p>
            <div className="inline-block bg-black/50 border border-white/5 px-3 py-2 rounded-lg text-[10px] font-mono text-cobalt uppercase">
              Result: Pricing Fixed
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
