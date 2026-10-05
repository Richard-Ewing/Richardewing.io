import Link from "next/link";

export default function ExplorePrompt() {
  return (
    <section className="prompt-section">
      <div className="prompt-box">
        <span className="prompt-label">ASK THE RESEARCH</span>
        <h3>What do you want to understand?</h3>
        <Link href="/reality-check" className="prompt-input">
          <span>Why are AI margins getting worse?</span>
          <span>↗</span>
        </Link>
        <div className="prompt-tags">
          <Link href="/framework" className="prompt-tag">AI economics</Link>
          <Link href="/concepts/inference-dividend-model" className="prompt-tag">Inference</Link>
          <Link href="/exogram" className="prompt-tag">Governance</Link>
          <Link href="/reality-check" className="prompt-tag">Reality Check</Link>
          <Link href="/tools" className="prompt-tag">Diagnostics</Link>
        </div>
      </div>
    </section>
  );
}
