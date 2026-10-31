import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
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
              <Link href="/research" prefetch={false}>Research</Link>
              <Link href="/concepts" prefetch={false}>Concepts</Link>
              <Link href="/research/publications" prefetch={false}>Publications</Link>
              <Link href="/framework" prefetch={false}>Frameworks</Link>
              <Link href="/reality-check" prefetch={false}>Reality Check</Link>
            </div>
            <div>
              <span>BUILT</span>
              <Link href="/exogram" prefetch={false}>Exogram ↗</Link>
              <Link href="/careerwin" prefetch={false}>CareerWin ↗</Link>
              <Link href="/tools" prefetch={false}>Diagnostics ↗</Link>
            </div>
            <div>
              <span>CONNECT</span>
              <Link href="/about" prefetch={false}>About</Link>
              <Link href="/newsletter" prefetch={false}>Newsletter</Link>
              <Link href="/contact" prefetch={false}>Contact</Link>
              <Link href="/services" prefetch={false}>Advisory</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Richard Ewing</span>
          <span>AI Economist · Seattle / Remote</span>
        </div>
      </div>
    </footer>
  );
}
