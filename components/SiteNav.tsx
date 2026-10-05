"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Richard Ewing Home">
          <span className="brand-mark">RE</span>
        </Link>
        <nav className="desktop-nav">
          <Link href="/research">Research</Link>
          <Link href="/concepts">Ideas</Link>
          <Link href="/framework">Frameworks</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link href="/start-here" className="nav-cta">
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
          <Link href="/research" onClick={() => setOpen(false)}>Research</Link>
          <Link href="/concepts" onClick={() => setOpen(false)}>Ideas</Link>
          <Link href="/framework" onClick={() => setOpen(false)}>Frameworks</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/start-here" onClick={() => setOpen(false)}>Start here ↗</Link>
        </div>
      )}
    </header>
  );
}
