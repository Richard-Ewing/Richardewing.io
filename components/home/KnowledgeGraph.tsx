"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

export default function KnowledgeGraph() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((time) => {
    if (!ref.current) return;

    const nodes = ref.current.querySelectorAll("[data-node]");

    nodes.forEach((node, index) => {
      const amplitude = index === 0 ? 2 : 5;
      const speed = index === 0 ? 0.0005 : 0.001;
      const y = Math.sin(time * speed + index) * amplitude;

      (node as HTMLElement).style.transform = `translate(-50%, calc(-50% + ${y}px))`;
    });
  });

  return (
    <section className="graph-section living-border">
      <div className="container graph-layout">
        <div className="graph-copy">
          <div className="section-eyebrow">03 / KNOWLEDGE FIELD</div>

          <h2>
            Ideas become
            <br />
            <span>systems.</span>
          </h2>

          <p>
            Research connects to frameworks. Frameworks connect to products.
            Products create new research. A self-reinforcing intellectual graph
            grounded in enterprise reality.
          </p>

          <Link href="/concepts" className="text-link" style={{ marginTop: "24px", display: "inline-flex" }}>
            Explore canonical concepts <span>↗</span>
          </Link>
        </div>

        <div className="graph-stage" ref={ref}>
          <svg className="graph-lines" viewBox="0 0 600 600">
            <line x1="300" y1="300" x2="300" y2="85" />
            <line x1="300" y1="300" x2="490" y2="190" />
            <line x1="300" y1="300" x2="490" y2="410" />
            <line x1="300" y1="300" x2="110" y2="410" />
            <line x1="300" y1="300" x2="110" y2="190" />
          </svg>

          <GraphNode
            center
            label="AI ECONOMICS"
            x="50%"
            y="50%"
            href="/framework"
          />

          <GraphNode
            label="INFERENCE"
            x="50%"
            y="14%"
            href="/concepts/inference-dividend-model"
            dataNode
          />

          <GraphNode
            label="CAPITAL"
            x="82%"
            y="32%"
            href="/roi"
            dataNode
          />

          <GraphNode
            label="GOVERNANCE"
            x="82%"
            y="68%"
            href="/exogram"
            dataNode
          />

          <GraphNode
            label="PRODUCT"
            x="18%"
            y="68%"
            href="/framework"
            dataNode
          />

          <GraphNode
            label="RUNTIME"
            x="18%"
            y="32%"
            href="/runtime-architecture"
            dataNode
          />
        </div>
      </div>
    </section>
  );
}

function GraphNode({
  label,
  x,
  y,
  center = false,
  dataNode = false,
  href = "/framework",
}: {
  label: string;
  x: string;
  y: string;
  center?: boolean;
  dataNode?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      data-node={dataNode || undefined}
      className={center ? "graph-node center" : "graph-node"}
      style={{
        left: x,
        top: y,
      }}
    >
      {label}
    </Link>
  );
}
