import React from "react";
import Link from "next/link";
import CapitalFlowDiagram from "./CapitalFlowDiagram";

export default function EditorialHero() {
  return (
    <section className="ed-hero ed-wrap" aria-labelledby="hero-title">
      <div className="ed-hero-grid">
        <div>
          <p className="ed-eyebrow">Richard Ewing / AI Economist</p>
          <h1 id="hero-title" className="ed-h1">
            Make AI work.<br />
            Make the <em>economics</em> work, too.
          </h1>
          <p className="ed-lede">
            I help finance and technology leaders see what AI and engineering actually cost, and decide where to invest, intervene, or stop.
          </p>
          <div className="ed-actions">
            <a className="ed-button" href="#economics">
              Explore the economics &darr;
            </a>
            <Link className="ed-textlink" href="/start-here">
              Understand my approach &rarr;
            </Link>
          </div>
        </div>
        <CapitalFlowDiagram />
      </div>
    </section>
  );
}
