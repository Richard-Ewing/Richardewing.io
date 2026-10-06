"use client";

import { useEffect, ReactNode } from "react";
import SiteNav from "@/components/SiteNav";
import Cursor from "./Cursor";
import SmoothScroll from "./SmoothScroll";
import HeroCommand from "./HeroCommand";
import ScrollScene from "./ScrollScene";
import LiveEconomics from "./LiveEconomics";
import ResearchStream from "./ResearchStream";
import KnowledgeGraph from "./KnowledgeGraph";
import ProductSurface from "./ProductSurface";
import SignalFooter from "./SignalFooter";

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`scroll-reveal ${className}`}>{children}</div>;
}

export default function HomeShell() {
  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      root.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="re-home homepage-root">
      <Cursor />
      <SmoothScroll />
      <SiteNav />

      <HeroCommand />

      <Reveal>
        <ScrollScene />
      </Reveal>

      <Reveal>
        <LiveEconomics />
      </Reveal>

      <Reveal>
        <ResearchStream />
      </Reveal>

      <Reveal>
        <KnowledgeGraph />
      </Reveal>

      <Reveal>
        <ProductSurface />
      </Reveal>

      <SignalFooter />
    </main>
  );
}
