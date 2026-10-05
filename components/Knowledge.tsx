import Link from "next/link";

export default function Knowledge() {
  return (
    <section className="knowledge">
      <div className="knowledge-background" />
      <div className="container knowledge-container">
        <div className="knowledge-copy">
          <div className="section-meta">
            <span>THE KNOWLEDGE FIELD</span>
          </div>
          <h2>
            Research <br /> becomes <br /> <em>systems.</em>
          </h2>
          <p>
            Ideas become frameworks. Frameworks become products. Products generate new questions.
          </p>
          <Link href="/concepts" className="text-link">
            Explore the concepts <span>↗</span>
          </Link>
        </div>
        <div className="knowledge-visual">
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <div className="orbit orbit-3" />
          <Link href="/framework" className="knowledge-node node-center">
            <span>AI</span>
            <strong>ECONOMICS</strong>
          </Link>
          <Link href="/concepts/inference-dividend-model" className="knowledge-node node-a">
            INFERENCE
          </Link>
          <Link href="/roi" className="knowledge-node node-b">
            CAPITAL
          </Link>
          <Link href="/exogram" className="knowledge-node node-c">
            GOVERNANCE
          </Link>
          <Link href="/framework" className="knowledge-node node-d">
            PRODUCT
          </Link>
          <Link href="/runtime-architecture" className="knowledge-node node-e">
            RUNTIME
          </Link>
          <div className="knowledge-line line-a" />
          <div className="knowledge-line line-b" />
          <div className="knowledge-line line-c" />
          <div className="knowledge-line line-d" />
          <div className="knowledge-line line-e" />
        </div>
      </div>
    </section>
  );
}
