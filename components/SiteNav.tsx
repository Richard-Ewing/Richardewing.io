"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" prefetch={false} className="brand" aria-label="Richard Ewing Home">
          <span className="brand-mark">RE</span>
        </Link>
        <nav className="desktop-nav">
          <Link href="/research" prefetch={false}>Research</Link>
          <Link href="/concepts" prefetch={false}>Concepts</Link>
          <Link href="/research/publications" prefetch={false}>Publications</Link>
          <Link href="/framework" prefetch={false}>Frameworks</Link>
          <Link href="/about" prefetch={false}>About</Link>
        </nav>
        <Link href="/start-here" prefetch={false} className="nav-cta">
          Start here <span>↗</span>
        </Link>
        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
      {open && (
        <div className="mobile-panel">
          <Link href="/research" prefetch={false} onClick={() => setOpen(false)}>Research</Link>
          <Link href="/concepts" prefetch={false} onClick={() => setOpen(false)}>Concepts</Link>
          <Link href="/research/publications" prefetch={false} onClick={() => setOpen(false)}>Publications</Link>
          <Link href="/framework" prefetch={false} onClick={() => setOpen(false)}>Frameworks</Link>
          <Link href="/about" prefetch={false} onClick={() => setOpen(false)}>About</Link>
          <Link href="/start-here" prefetch={false} onClick={() => setOpen(false)}>Start here ↗</Link>
        </div>
      )}
    </header>
  );
}
