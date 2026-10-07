import React from "react";
import Link from "next/link";

export default function EvidenceLinks() {
  return (
    <section className="ed-section ed-wrap">
      <div className="ed-proof">
        <div>
          <span className="ed-index">03 / FOLLOW THE WORK</span>
          <h2 className="ed-h2">
            The argument.<br />
            The method.<br />
            The person.
          </h2>
          <p className="ed-lede">
            Go deeper without turning the homepage into the entire library.
          </p>
        </div>
        <div className="ed-evidence">
          <Link href="/start-here">
            <span className="ed-eyebrow">Orientation</span>
            <h3 className="ed-h3">Start with the economics.</h3>
            <p>An introduction to the questions behind this work.</p>
            <span className="ed-caption">Start here &rarr;</span>
          </Link>
          <Link href="/glossary/product-economist">
            <span className="ed-eyebrow">Core concept</span>
            <h3 className="ed-h3">Product decisions are capital decisions.</h3>
            <p>Explore the Product Economist framework.</p>
            <span className="ed-caption">Read the definition &rarr;</span>
          </Link>
          <Link href="/speaking">
            <span className="ed-eyebrow">Executive briefings</span>
            <h3 className="ed-h3">Bring the discussion into the room.</h3>
            <p>Keynotes and briefings for leadership teams.</p>
            <span className="ed-caption">Explore speaking &rarr;</span>
          </Link>
          <Link href="/about">
            <span className="ed-eyebrow">Background</span>
            <h3 className="ed-h3">Meet Richard.</h3>
            <p>The perspective and experience behind the work.</p>
            <span className="ed-caption">About Richard &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
