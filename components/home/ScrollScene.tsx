"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ScrollScene() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-80, 0, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.72, 1, 0.72]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="scroll-scene scroll-kinetic living-border">
      <div className="container">
        <div className="scroll-scene-grid">
          <div className="scroll-scene-copy">
            <span>THE INFERENCE PROBLEM</span>
            <h2>
              Every intelligent
              <br />
              action has
              <em> economics.</em>
            </h2>
            <p>
              As systems reason more often, inference becomes part of the
              product operating model. Margins compress unless intelligence is
              governed before execution.
            </p>
          </div>

          <div className="scroll-artifact">
            <motion.div
              className="artifact-orbit"
              style={{
                rotate,
                x,
                scale,
                opacity,
              }}
            >
              <div className="artifact-core">
                <span>INFERENCE</span>
                <strong>$0.0184</strong>
                <small>/ ACTION</small>
              </div>

              <div className="artifact-ring ring-one" />
              <div className="artifact-ring ring-two" />
              <div className="artifact-ring ring-three" />

              <div className="artifact-node node-top">TOKENS</div>
              <div className="artifact-node node-right">LATENCY</div>
              <div className="artifact-node node-bottom">MARGIN</div>
              <div className="artifact-node node-left">VOLUME</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
