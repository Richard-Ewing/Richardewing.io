"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DiagnosticState {
  monthlySpend: number;
  teamSize: string;
  primaryTool: string;
  costDriver: string;
  shippedRatio: string;
  email: string;
  name: string;
}

export function RealityCheckDiagnostic() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<DiagnosticState>({
    monthlySpend: 125000,
    teamSize: "11-50 engineers",
    primaryTool: "Custom LLM APIs & Coding Assistants",
    costDriver: "Inference Volume & Retry Spikes",
    shippedRatio: "Output stalled despite higher token usage",
    email: "",
    name: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Dynamic calculations based on Concept B benchmark ratios
  const annualSpend = state.monthlySpend * 12;
  const savingsOpportunity = Math.round(annualSpend * 0.2853);

  const buckets = [
    { label: "Unused capacity", pct: 38, amount: Math.round(savingsOpportunity * 0.38) },
    { label: "Inefficient workflows", pct: 24, amount: Math.round(savingsOpportunity * 0.24) },
    { label: "Over-provisioning", pct: 22, amount: Math.round(savingsOpportunity * 0.22) },
    { label: "Low-value use cases", pct: 16, amount: Math.round(savingsOpportunity * 0.16) },
  ];

  const steps = [
    { id: 1, label: "Usage" },
    { id: 2, label: "Team" },
    { id: 3, label: "Costs" },
    { id: 4, label: "Outcomes" },
    { id: 5, label: "Your plan" },
  ];

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="reality-check-container max-w-5xl mx-auto">
      {/* 5-Step Stepper Header */}
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-5 mb-8 overflow-x-auto">
        {steps.map((s) => (
          <button
            key={s.id}
            onClick={() => setStep(s.id)}
            className={`flex items-center gap-2 text-xs font-mono py-1 px-3 rounded-full transition-colors whitespace-nowrap ${
              step === s.id
                ? "bg-[var(--forest)] text-white font-bold"
                : step > s.id
                ? "bg-zinc-200 text-zinc-800"
                : "text-[var(--muted)] hover:text-zinc-900"
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                step === s.id ? "bg-[var(--gold)] text-white" : "bg-zinc-300"
              }`}
            >
              {s.id}
            </span>
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Panel */}
        <div className="lg:col-span-7 bg-[#faf8f2] border border-[var(--line)] rounded-xl p-8 shadow-sm">
          {step === 1 && (
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)]">
                Step 01 / Spend Telemetry
              </span>
              <h2 className="font-serif text-2xl font-medium text-[var(--ink)]">
                How much are you spending on AI each month?
              </h2>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Include model APIs (OpenAI, Anthropic, Google), developer tools, specialized infrastructure, and AI SaaS seats.
              </p>

              <div className="py-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-600 mb-2">
                  <span>Monthly spend</span>
                  <span className="font-bold text-lg text-[var(--forest)] font-sans">
                    ${state.monthlySpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={1000000}
                  step={5000}
                  value={state.monthlySpend}
                  onChange={(e) =>
                    setState({ ...state, monthlySpend: Number(e.target.value) })
                  }
                  className="w-full accent-[var(--gold)] cursor-pointer h-2 bg-zinc-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-2">
                  <span>$5,000</span>
                  <span>$250,000</span>
                  <span>$500,000</span>
                  <span>$1,000,000+</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  Takes 2 minutes · No account required
                </span>
                <button className="button button-gold" onClick={handleNext}>
                  Next: Your team ↗
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)]">
                Step 02 / Organization
              </span>
              <h2 className="font-serif text-2xl font-medium text-[var(--ink)]">
                What is the size and composition of your engineering team?
              </h2>
              <div className="space-y-2">
                {[
                  "1 - 10 engineers",
                  "11 - 50 engineers",
                  "51 - 200 engineers",
                  "200+ engineers",
                ].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setState({ ...state, teamSize: sz })}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs font-sans transition-colors ${
                      state.teamSize === sz
                        ? "border-[var(--forest)] bg-[var(--forest)] text-white font-medium"
                        : "border-[var(--line)] bg-white text-zinc-800 hover:border-zinc-400"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button className="button button-outline" onClick={handleBack}>
                  ← Back
                </button>
                <button className="button button-gold" onClick={handleNext}>
                  Next: Primary costs ↗
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)]">
                Step 03 / Cost Drivers
              </span>
              <h2 className="font-serif text-2xl font-medium text-[var(--ink)]">
                Where is the majority of your AI budget currently allocated?
              </h2>
              <div className="space-y-2">
                {[
                  "Inference Volume & Retry Spikes",
                  "Developer Copilot / Coding Assistant Seats",
                  "Custom Model Fine-Tuning & GPU Hosting",
                  "Vendor RAG & Vector Database Infrastructure",
                ].map((driver) => (
                  <button
                    key={driver}
                    onClick={() => setState({ ...state, costDriver: driver })}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs font-sans transition-colors ${
                      state.costDriver === driver
                        ? "border-[var(--forest)] bg-[var(--forest)] text-white font-medium"
                        : "border-[var(--line)] bg-white text-zinc-800 hover:border-zinc-400"
                    }`}
                  >
                    {driver}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button className="button button-outline" onClick={handleBack}>
                  ← Back
                </button>
                <button className="button button-gold" onClick={handleNext}>
                  Next: Outcomes ↗
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)]">
                Step 04 / Operational Output
              </span>
              <h2 className="font-serif text-2xl font-medium text-[var(--ink)]">
                How has engineering velocity changed since adopting AI?
              </h2>
              <div className="space-y-2">
                {[
                  "Output stalled despite higher token usage",
                  "Code volume increased, but PR review time doubled",
                  "Noticeable speed gains with unpredictable gross margins",
                  "Unsure - lack unified telemetry across teams",
                ].map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setState({ ...state, shippedRatio: ratio })}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs font-sans transition-colors ${
                      state.shippedRatio === ratio
                        ? "border-[var(--forest)] bg-[var(--forest)] text-white font-medium"
                        : "border-[var(--line)] bg-white text-zinc-800 hover:border-zinc-400"
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button className="button button-outline" onClick={handleBack}>
                  ← Back
                </button>
                <button className="button button-gold" onClick={handleNext}>
                  Generate Plan ↗
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)]">
                Step 05 / Action Plan
              </span>
              <h2 className="font-serif text-2xl font-medium text-[var(--ink)]">
                Your AI Economics Scorecard
              </h2>
              <div className="p-4 bg-white rounded-lg border border-[var(--line)] text-xs space-y-2 text-zinc-800">
                <div>
                  <strong>Monthly Spend:</strong> ${state.monthlySpend.toLocaleString()} ($
                  {annualSpend.toLocaleString()}/yr)
                </div>
                <div>
                  <strong>Identified Annual Opportunity:</strong>{" "}
                  <span className="text-emerald-800 font-bold">
                    ${savingsOpportunity.toLocaleString()}
                  </span>
                </div>
                <div>
                  <strong>Primary Bottleneck:</strong> {state.costDriver}
                </div>
                <div>
                  <strong>Velocity Drag:</strong> {state.shippedRatio}
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-[var(--muted)] mb-3">
                  Send this scorecard to your team or discuss a tailored 2-week pricing sprint.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link className="button button-gold" href="/advisory">
                    Discuss with Richard ↗
                  </Link>
                  <button
                    className="button button-outline"
                    onClick={() => window.print()}
                  >
                    Print / Save PDF
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: Dynamic Opportunity Math */}
        <div className="lg:col-span-5 bg-[var(--forest2)] text-white rounded-xl p-8 shadow-lg">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d8c7a8]">
                Estimated Opportunity
              </span>
              <div className="text-3xl font-serif font-bold text-white mt-2">
                ${savingsOpportunity.toLocaleString()}
              </div>
              <p className="text-xs text-zinc-300 mt-1">
                annual savings opportunity identified from ${annualSpend.toLocaleString()}/yr baseline
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              {buckets.map((b) => (
                <div key={b.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-300">{b.label}</span>
                    <span className="font-bold text-[#d8c7a8]">
                      {b.pct}% (${b.amount.toLocaleString()})
                    </span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[var(--gold)] h-full rounded-full transition-all duration-300"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-zinc-400 leading-relaxed font-sans">
              * Modeled using cross-industry AI unit economics benchmarks from published Fiduciary research across enterprise SaaS deployments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
