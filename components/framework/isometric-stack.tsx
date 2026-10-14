"use client";

import React, { useState } from "react";

interface Layer {
  id: string;
  num: string;
  name: string;
  sub: string;
  desc: string;
  metrics: string[];
}

const LAYERS: Layer[] = [
  {
    id: "outcome",
    num: "05",
    name: "Outcome",
    sub: "Business Value & ROI",
    desc: "The ultimate business justification. Quantifying net margin contribution, engineering velocity gains, and capital ROI before scaling inference budgets.",
    metrics: ["Gross Margin Floor (>70%)", "ROI Multiplier (>2.5x)", "Customer Retention Delta"],
  },
  {
    id: "application",
    num: "04",
    name: "Application",
    sub: "Product & End-User Cases",
    desc: "The interface and workflow layer. Where users interact with AI capabilities, and where exception handling and user retry drag either make or break unit economics.",
    metrics: ["Task Completion Rate", "Human-in-the-Loop Drag", "User Retry Frequency"],
  },
  {
    id: "model",
    num: "03",
    name: "Model",
    sub: "Performance, Routing & Cost",
    desc: "The intelligence routing layer. Dynamically routing simple tasks to lightweight on-device or SLM endpoints and reserving frontier reasoning models for high-ambiguity steps.",
    metrics: ["Model Routing Efficiency", "Prompt Cache Hit Rate (>60%)", "P95 Token Latency"],
  },
  {
    id: "infrastructure",
    num: "02",
    name: "Infrastructure",
    sub: "Compute, APIs & Tools",
    desc: "The underlying execution substrate. Managing token pipelines, vector index lookups, GPU instance reservations, and external tool API rate limits.",
    metrics: ["Cost Per Megatoken", "Tool Execution Timeout Rate", "Reserved vs On-Demand Spend"],
  },
  {
    id: "governance",
    num: "01",
    name: "Governance",
    sub: "Policy, Risk & Runtime Control",
    desc: "The non-negotiable security and fiduciary foundation. Deterministic boundary enforcement, budget caps, audit trails, and data exfiltration kill switches.",
    metrics: ["Deterministic Rate Limiting", "Prompt Injection Defense", "Audit Trail Completeness"],
  },
];

export function IsometricStack() {
  const [activeLayer, setActiveLayer] = useState<string>("outcome");

  const current = LAYERS.find((l) => l.id === activeLayer) || LAYERS[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Column: Pillar List & Details */}
      <div className="lg:col-span-5 space-y-4">
        <div className="space-y-2">
          {LAYERS.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between ${
                activeLayer === layer.id
                  ? "bg-[var(--forest)] text-white border-[var(--forest)] shadow-md"
                  : "bg-[#faf8f2] border-[var(--line)] text-zinc-800 hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono text-xs ${
                    activeLayer === layer.id ? "text-[var(--gold)]" : "text-zinc-500"
                  }`}
                >
                  {layer.num}
                </span>
                <span className="font-serif text-base font-medium">{layer.name}</span>
              </div>
              <span className="text-xs opacity-70">{layer.sub}</span>
            </button>
          ))}
        </div>

        {/* Selected Layer Detail Card */}
        <div className="p-6 bg-white border border-[var(--line)] rounded-xl mt-6">
          <div className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-widest mb-1">
            Layer {current.num} Focus
          </div>
          <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2">
            {current.name}: {current.sub}
          </h3>
          <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
            {current.desc}
          </p>
          <div className="space-y-1.5 border-t border-[var(--line)] pt-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              Key Fiduciary Metrics:
            </div>
            {current.metrics.map((m) => (
              <div key={m} className="flex items-center gap-2 text-xs text-zinc-800">
                <span className="text-[var(--gold)]">▪</span>
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: 3D Isometric Layer Graphic */}
      <div className="lg:col-span-7 flex justify-center py-8">
        <div className="relative w-full max-w-md h-[460px] flex flex-col justify-between items-center perspective-[1000px]">
          {LAYERS.map((layer, idx) => {
            const isSelected = activeLayer === layer.id;
            return (
              <div
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`w-full max-w-sm h-16 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between px-6 border shadow-md transform-gpu ${
                  isSelected
                    ? "scale-105 border-[var(--gold)] ring-2 ring-[var(--gold)]/30 -translate-y-1"
                    : "border-white/20 hover:scale-[1.02] hover:-translate-y-0.5"
                }`}
                style={{
                  background: isSelected
                    ? "linear-gradient(135deg, #1E3327 0%, #2A4838 100%)"
                    : `linear-gradient(135deg, rgba(30, 51, 39, ${0.85 - idx * 0.1}) 0%, rgba(25, 33, 29, ${0.9 - idx * 0.1}) 100%)`,
                  color: "#ffffff",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--gold)] font-bold">
                    {layer.num}
                  </span>
                  <span className="font-serif text-lg font-medium tracking-tight">
                    {layer.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-zinc-300">
                    {layer.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
