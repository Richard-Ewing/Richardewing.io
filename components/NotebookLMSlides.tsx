'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, BookOpen, Layers, Sparkles } from 'lucide-react';

export interface Slide {
  id: number;
  tag: string;
  title: string;
  takeaway: string;
  points: string[];
  metric?: {
    value: string;
    label: string;
  };
  notes?: string;
}

interface NotebookLMSlidesProps {
  deckTitle?: string;
  slides?: Slide[];
}

export default function NotebookLMSlides({
  deckTitle = "Executive Systems Briefing: AI Governance Architecture",
  slides = [
    {
      id: 1,
      tag: "Problem Space",
      title: "Context Rot in Long-Horizon Agent Chains",
      takeaway: "Agents degrade non-linearly when context windows fill with unverified scratchpad churn.",
      points: [
        "Unchecked tool-call outputs flood memory buffers.",
        "Error cascading begins when hallucinated outputs become upstream assumptions.",
        "Traditional prompt engineering fails to solve state-space drift."
      ],
      metric: {
        value: "4.8x",
        label: "Retry amplification rate without strict output bounding"
      },
      notes: "Context rot is not a model intelligence defect; it is an architectural isolation failure."
    },
    {
      id: 2,
      tag: "Mechanisms",
      title: "Deterministic Verification Gates (MOD v3.0)",
      takeaway: "Never allow an agent to declare completion without passing independent mechanical linters.",
      points: [
        "Pass 1: Unit & TypeScript static type check.",
        "Pass 2: Zero-drift regex and formatting verification.",
        "Pass 3: REWS editorial and design rule compliance.",
        "Pass 4: Full production build compilation."
      ],
      metric: {
        value: "100%",
        label: "Zero-drift guarantee on committed production builds"
      },
      notes: "Deterministic scripts must execute out-of-band to prevent model self-rationalization."
    },
    {
      id: 3,
      tag: "Architecture",
      title: "Branch Worktree Isolation Protocol",
      takeaway: "Summoning parallel agent swarms requires isolated git worktrees to prevent merge collisions.",
      points: [
        "Each subagent operates on an independent workspace branch.",
        "QA auditors validate branches before merge-back into main.",
        "Root workspace remains clean of intermediate scratch scripts."
      ],
      metric: {
        value: "5-Swarm",
        label: "Parallel agent execution capacity without lock contention"
      },
      notes: "Isolated workspaces allow multi-agent scaling with zero workspace contamination."
    }
  ]
}: NotebookLMSlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const totalSlides = slides.length;
  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, totalSlides]);

  return (
    <div className={`w-full my-8 transition-all duration-300 ${
      isFullscreen 
        ? 'fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl p-6 md:p-12 flex flex-col justify-between overflow-y-auto' 
        : 'bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-2xl relative'
    }`}>
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-200">{deckTitle}</h4>
            <p className="text-[11px] font-mono text-zinc-500">
              Slide {currentSlide + 1} of {totalSlides}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1 rounded-lg text-xs font-mono border transition-colors ${
              showNotes 
                ? 'bg-zinc-800 border-zinc-700 text-zinc-100' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
            title="Toggle Speaker Notes"
          >
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Notes
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Body */}
      <div className="py-8 min-h-[320px] flex flex-col justify-between">
        <div>
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] uppercase tracking-wider mb-3">
            {slide.tag}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight mb-4">
            {slide.title}
          </h3>
          <p className="text-sm md:text-base text-zinc-300 font-medium mb-6 leading-relaxed bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-800/60">
            {slide.takeaway}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-2.5">
              {slide.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {slide.metric && (
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                <span className="text-3xl md:text-4xl font-bold font-mono text-emerald-400 tracking-tight">
                  {slide.metric.value}
                </span>
                <span className="text-[11px] text-zinc-400 mt-1 uppercase font-mono tracking-wider">
                  {slide.metric.label}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Speaker / Executive Notes */}
        {showNotes && slide.notes && (
          <div className="mt-6 p-4 rounded-xl bg-zinc-900/90 border border-zinc-700/60 text-xs font-mono text-zinc-300">
            <span className="text-emerald-400 font-semibold uppercase tracking-wider text-[10px] block mb-1">
              Executive Context:
            </span>
            {slide.notes}
          </div>
        )}
      </div>

      {/* Slide Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
