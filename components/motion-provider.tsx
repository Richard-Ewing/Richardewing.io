"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero staggered entrance
      const heroItems = document.querySelectorAll(".hero-copy > *");
      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      }

      // Scroll reveals for section content
      const revealElements = gsap.utils.toArray<HTMLElement>(".reveal");
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, document.body);

    return () => ctx.revert();
  }, [pathname]);

  return <>{children}</>;
}
