"use client";

import Link from "next/link";
import RuntimeCode from "./RuntimeCode";

export default function ProductSurface() {
  return (
    <section className="product-section living-border">
      <div className="container">
        <div className="section-eyebrow">04 / BUILT</div>

        <div className="product-intro">
          <h2>
            Research becomes
            <br />
            <span>software.</span>
          </h2>
        </div>

        <div className="product-surface">
          <div className="product-copy">
            <span className="product-label">EXOGRAM / RUNTIME</span>

            <h3>
              Governance
              <br />
              before execution.
            </h3>

            <p>
              A deterministic control layer for intelligent systems. Enforces
              cryptographic state integrity, cost caps, and runtime permissions
              before autonomous agents mutate production data.
            </p>

            <Link href="/exogram">Explore Exogram ↗</Link>
          </div>

          <div
            className="runtime-stage"
            style={{
              padding: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", maxWidth: "520px" }}>
              <RuntimeCode />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
