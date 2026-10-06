"use client";

import Link from "next/link";

export default function SignalFooter() {
  return (
    <footer className="footer living-border">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-mark">RE</div>
            <h2>
              Think clearly. <br /> Build deliberately.
            </h2>
          </div>
          <div className="footer-nav">
            <div>
              <span>EXPLORE</span>
              <Link href="/research">Research</Link>
              <Link href="/concepts">Ideas</Link>
              <Link href="/framework">Frameworks</Link>
              <Link href="/reality-check">Reality Check</Link>
            </div>
            <div>
              <span>BUILT</span>
              <Link href="/exogram">Exogram ↗</Link>
              <Link href="/careerwin">CareerWin ↗</Link>
              <Link href="/tools">Diagnostics ↗</Link>
            </div>
            <div>
              <span>CONNECT</span>
              <Link href="/about">About</Link>
              <Link href="/newsletter">Newsletter</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/start-here">Start here</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>(c) 2026 Richard Ewing</span>
          <span>AI Economist . Seattle / Remote</span>
        </div>
      </div>
    </footer>
  );
}
