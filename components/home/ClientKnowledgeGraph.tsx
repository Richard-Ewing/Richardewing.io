"use client";

import dynamic from "next/dynamic";

const KnowledgeGraphInternal = dynamic(() => import("./KnowledgeGraph"), {
  ssr: false,
  loading: () => (
    <section className="graph-section living-border min-h-[380px] flex items-center justify-center">
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
        </div>
      </div>
    </section>
  ),
});

export default function ClientKnowledgeGraph() {
  return <KnowledgeGraphInternal />;
}
