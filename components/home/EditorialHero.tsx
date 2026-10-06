import React from "react";
import UnitEconomicsExperiment from "./UnitEconomicsExperiment";

export default function EditorialHero() {
  return (
    <section className="relative w-full max-w-[var(--max)] mx-auto px-6 md:px-12 lg:px-24 py-[clamp(72px,8vw,120px)] flex flex-col gap-[clamp(32px,5vw,80px)]">
      <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
        <h1 className="text-[clamp(40px,6vw,80px)] leading-[1.05] tracking-[-0.045em] text-[var(--ink)] font-serif">
          Software scales.<br />
          Inference compounds.<br />
          Protect your margins.
        </h1>
        <p className="text-[clamp(18px,2vw,22px)] leading-[1.65] text-[var(--text-secondary)] max-w-[50ch] font-sans">
          The next era of software is governed by unit economics. As AI integrates into your core product loops, the cost of compute shifts from fixed infrastructure to variable marginal costs. We build architecture that scales profitability alongside adoption.
        </p>
      </div>

      <div className="w-full max-w-4xl pt-8 border-t border-[var(--line)]">
        <h3 className="text-sm uppercase tracking-widest font-mono text-[var(--muted)] mb-8">
          01 / The Method
        </h3>
        <UnitEconomicsExperiment />
      </div>
    </section>
  );
}
