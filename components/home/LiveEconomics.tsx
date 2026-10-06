"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export default function LiveEconomics() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 120,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 120,
    damping: 18,
  });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  function move(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      className="economics-section scroll-kinetic living-border"
      onMouseMove={move}
      onMouseLeave={reset}
    >
      <div className="container">
        <div className="section-eyebrow">01 / THE ECONOMICS</div>

        <div className="economics-headline">
          <h2>
            Software scales.
            <br />
            <span>Inference compounds.</span>
          </h2>

          <p>
            The economics of intelligent software are fundamentally different
            from the economics of traditional SaaS. Intelligence introduces
            marginal cost into previously fixed-cost digital experiences.
          </p>
        </div>

        <motion.div
          className="economics-interface"
          style={{
            rotateX,
            rotateY,
          }}
        >
          <div className="economics-interface-top">
            <span>AI ECONOMICS / SYSTEM 01</span>
            <span>LIVE MODEL</span>
          </div>

          <div className="economics-metrics">
            <Metric label="INFERENCE COST" value="$0.0184" delta="+12.4%" />
            <Metric label="REQUEST VOLUME" value="84.2K" delta="+28.1%" />
            <Metric label="GROSS MARGIN" value="71.4%" delta="-4.8%" />
          </div>

          <div className="economics-chart">
            <svg viewBox="0 0 1000 280" preserveAspectRatio="none">
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#72e7ff" stopOpacity=".18" />
                  <stop offset="100%" stopColor="#72e7ff" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="
                  M0 220
                  C80 210 110 180 160 192
                  C220 207 240 145 300 160
                  C370 178 400 110 460 128
                  C520 145 560 94 620 111
                  C680 129 710 75 770 88
                  C830 101 870 58 920 69
                  C950 74 975 45 1000 50
                  L1000 280
                  L0 280 Z
                "
                fill="url(#area)"
              />

              <path
                d="
                  M0 220
                  C80 210 110 180 160 192
                  C220 207 240 145 300 160
                  C370 178 400 110 460 128
                  C520 145 560 94 620 111
                  C680 129 710 75 770 88
                  C830 101 870 58 920 69
                  C950 74 975 45 1000 50
                "
                fill="none"
                stroke="#72e7ff"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="economics-footer">
            <span>JAN</span>
            <span>MAR</span>
            <span>MAY</span>
            <span>JUL</span>
            <span>SEP</span>
            <span>OCT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{delta}</small>
    </div>
  );
}
