import React from "react";

export default function MethodRows() {
  return (
    <section className="ed-section ed-wrap" id="method">
      <div className="ed-section-head">
        <div>
          <span className="ed-index">01 / THE METHOD</span>
          <h2 className="ed-h2">
            From technical activity<br />
            to economic clarity.
          </h2>
        </div>
        <p>
          The work is not another dashboard of engineering activity. It is a clearer connection between what your systems do, what they cost, and the decisions you can defend.
        </p>
      </div>
      <div className="ed-rows">
        <article className="ed-row">
          <span className="num">01</span>
          <h3 className="ed-h3">See the real unit.</h3>
          <p>
            Separate a successful customer outcome from a request, retry, or token. Choose the denominator before you celebrate the metric.
          </p>
        </article>
        <article className="ed-row">
          <span className="num">02</span>
          <h3 className="ed-h3">Trace the cost.</h3>
          <p>
            Bring inference, infrastructure, and ongoing maintenance into the same discussion. Make assumptions visible rather than hiding them in a total.
          </p>
        </article>
        <article className="ed-row">
          <span className="num">03</span>
          <h3 className="ed-h3">Decide what earns its place.</h3>
          <p>
            Use the economics to guide investment and operating controls: not simply to produce another report.
          </p>
        </article>
      </div>
    </section>
  );
}
