import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-glow glow-a" />
      <div className="hero-glow glow-b" />
      <div className="container hero-container">
        <div className="hero-kicker">
          <span className="status-dot" /> RICHARD EWING / AI ECONOMIST
        </div>
        <h1>
          Intelligence <br /> has a cost.
        </h1>
        <div className="hero-bottom">
          <p>
            I study the economics of intelligent systems, from inference and software margins to governance and capital allocation.
          </p>
          <div className="hero-links">
            <Link className="pill primary" href="/research">
              Explore research <span>↗</span>
            </Link>
            <Link className="pill" href="/start-here">
              Start here
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-index">
        <span>01</span>
        <span>/</span>
        <span>06</span>
      </div>
    </section>
  );
}
