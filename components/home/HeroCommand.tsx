"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";

const HeadsetScene = dynamic(() => import("./HeadsetScene"), {
  ssr: false,
  loading: () => <div className="headset-placeholder" />,
});

const responses = {
  economics: {
    question: "Why are AI margins getting worse?",
    answer:
      "Because intelligence introduces a variable cost into software. The more frequently a system reasons, the more its economics depend on inference.",
    signal: "INFERENCE COST",
    value: "+31.8%",
    sources: "04 SOURCES",
    latency: "0.04s",
  },
  governance: {
    question: "What should AI governance actually control?",
    answer:
      "Not the model. The actions around the model. Cost, permissions, data access, tool execution, and escalation should be governed before execution.",
    signal: "RUNTIME CONTROL",
    value: "ACTIVE",
    sources: "03 SOURCES",
    latency: "0.02s",
  },
  product: {
    question: "What changes for product leaders?",
    answer:
      "AI products need a new unit of economics. Features are no longer the only variable. Every intelligent action creates marginal cost.",
    signal: "PRODUCT ECONOMICS",
    value: "DYNAMIC",
    sources: "05 SOURCES",
    latency: "0.06s",
  },
  leverage: {
    question: "Where does AI create real economic leverage?",
    answer:
      "Where reasoning eliminates operational drag without compounding GPU bills. Governed workflows, deterministic routing, and high-margin decision engines.",
    signal: "CAPITAL LEVERAGE",
    value: "COMPOUNDING",
    sources: "03 SOURCES",
    latency: "0.03s",
  },
};

type Mode = keyof typeof responses;

export default function HeroCommand() {
  const [mode, setMode] = useState<Mode>("economics");
  const current = responses[mode];

  return (
    <section className="command-hero frontier-hero">
      <div className="hero-noise" />
      <div className="frontier-grid hero-grid" />
      <div className="frontier-glow glow-one" />
      <div className="frontier-glow glow-two" />

      <div className="hero-wrap hero-content">
        <div className="hero-topline hero-eyebrow">
          <span className="live-indicator">
            <i className="live-dot" />
            RICHARD EWING / AI ECONOMIST
          </span>
          <span className="hero-coordinates">47.6062° N / 122.3321° W</span>
        </div>

        <div className="hero-title frontier-title">
          <div className="hero-title-line">
            <span>Intelligence</span>
          </div>
          <div className="hero-title-line hero-title-offset title-indent">
            has a <span className="title-gradient">cost.</span>
          </div>
        </div>

        <div className="headset-wrapper">
          <HeadsetScene />
        </div>

        <div className="hero-interface">
          <div className="command-window">
            <div className="command-header">
              <div>
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <span>RICHARD / RESEARCH</span>
              <span>LIVE</span>
            </div>

            <div className="command-body">
              <div className="command-prompt">
                <span className="prompt-symbol">→</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.question}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {current.question}
                  </motion.span>
                </AnimatePresence>
                <span className="cursor" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.answer}
                  className="command-answer"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: 0.08 }}
                >
                  {current.answer}
                </motion.div>
              </AnimatePresence>

              <div className="command-meta">
                <span>{current.sources}</span>
                <span>GROUNDED</span>
                <span>{current.latency}</span>
              </div>
            </div>
          </div>

          <div className="hero-signal">
            <div className="signal-label">LIVE SIGNAL</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.signal}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="signal-name">{current.signal}</div>
                <div className="signal-value">{current.value}</div>
              </motion.div>
            </AnimatePresence>

            <div className="signal-chart">
              {Array.from({ length: 28 }).map((_, index) => (
                <span
                  key={index}
                  style={{
                    height: `${20 + ((index * 17) % 55)}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-controls">
          {(Object.keys(responses) as Mode[]).map((key, idx) => (
            <button
              key={key}
              type="button"
              className={mode === key ? "hero-control active" : "hero-control"}
              onClick={() => setMode(key)}
            >
              <span>0{idx + 1}</span>
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-bottom hero-scroll-indicator">
        <span>SCROLL TO THINK</span>
        <span className="hero-arrow">↓</span>
      </div>
    </section>
  );
}
