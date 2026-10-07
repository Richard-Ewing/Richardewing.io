import React from "react";

export default function CapitalFlowDiagram() {
  return (
    <div className="ed-diagram" role="group" aria-labelledby="diagram-title">
      <div className="ed-diagram-top">
        <span className="ed-tag">The operating thesis</span>
        <span className="ed-caption">01 / CAPITAL &rarr; OUTCOME</span>
      </div>
      <h3 id="diagram-title" className="ed-h3">A feature is also a financial decision.</h3>
      <svg viewBox="0 0 460 245" role="img" aria-labelledby="svg-title svg-desc">
        <title id="svg-title">From engineering investment to financial outcomes</title>
        <desc id="svg-desc">
          Engineering and AI usage contribute costs. These should be evaluated against customer outcomes and contribution margin before capital is committed.
        </desc>
        <path className="path" d="M160 48 C205 48 175 121 220 121 M160 194 C205 194 175 121 220 121" />
        <path className="path accent" d="M290 121 H344" />
        <rect className="node" x="1" y="18" width="159" height="62" rx="2" />
        <text x="16" y="43">ENGINEERING</text>
        <text className="small" x="16" y="63">Build + maintain</text>
        <rect className="node" x="1" y="164" width="159" height="62" rx="2" />
        <text x="16" y="189">AI USAGE</text>
        <text className="small" x="16" y="209">Inference + operations</text>
        <circle className="node" cx="254" cy="121" r="35" />
        <text textAnchor="middle" x="254" y="118">UNIT</text>
        <text textAnchor="middle" x="254" y="134">ECONOMICS</text>
        <rect className="node" x="344" y="79" width="114" height="84" rx="2" />
        <text className="label" x="357" y="105">VALUE</text>
        <text className="small" x="357" y="126">Outcome</text>
        <text className="small" x="357" y="145">Contribution</text>
      </svg>
      <div className="ed-diagram-footer">
        <span className="ed-caption">
          Measure the unit.<br />Then allocate the capital.
        </span>
        <span className="ed-caption text-right">
          Original conceptual diagram.<br />Not a live dashboard.
        </span>
      </div>
    </div>
  );
}
