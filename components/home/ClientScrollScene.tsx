"use client";

import dynamic from "next/dynamic";

const ScrollSceneInternal = dynamic(() => import("./ScrollScene"), {
  ssr: false,
  loading: () => (
    <section className="scroll-scene scroll-kinetic living-border min-h-[420px] flex items-center justify-center">
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
        </div>
      </div>
    </section>
  ),
});

export default function ClientScrollScene() {
  return <ScrollSceneInternal />;
}
