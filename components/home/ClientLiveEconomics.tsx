"use client";

import dynamic from "next/dynamic";

const LiveEconomicsInternal = dynamic(() => import("./LiveEconomics"), {
  ssr: false,
  loading: () => (
    <section className="min-h-[360px] flex items-center justify-center rounded-2xl border border-zinc-200 bg-white/50 backdrop-blur-sm p-8">
      <div className="max-w-3xl text-center">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500">
          LIVE AI UNIT ECONOMICS &amp; MARGIN MODEL
        </span>
        <h2 className="text-2xl font-bold text-zinc-950 mt-2">
          Connect Inference Consumption Directly to Gross Margin
        </h2>
        <p className="text-sm text-zinc-700 mt-2">
          Interactive P&amp;L model calculating token cost per active seat, retry loop overhead, and gross margin preservation thresholds across enterprise SaaS workloads.
        </p>
      </div>
    </section>
  ),
});

export default function ClientLiveEconomics() {
  return <LiveEconomicsInternal />;
}
