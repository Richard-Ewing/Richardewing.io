import React from "react";
import Link from "next/link";

export default function EngagementCTA() {
  return (
    <section className="ed-section ed-wrap ed-closing mb-16">
      <div>
        <span className="ed-index">05 / NEXT STEP</span>
        <h2 className="ed-h2">
          Make the next decision<br />
          a better-informed one.
        </h2>
      </div>
      <Link className="ed-button" href="/start-here">
        Start with the framework &rarr;
      </Link>
    </section>
  );
}
