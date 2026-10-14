"use client";

import { useEffect, useRef } from "react";

interface Bird {
  x: number;
  y: number;
  s: number;
  p: number;
  speed: number;
}

export function StarlingField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let tick = 0;
    let isVisible = true;
    let birds: Bird[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (width === 0 || height === 0) return;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Bird count bounded to screen width
      const birdCount = Math.min(420, Math.floor(width * 0.38));
      birds = Array.from({ length: birdCount }, () => ({
        x: Math.random(),
        y: Math.random(),
        s: 0.6 + Math.random() * 1.4,
        p: Math.random() * Math.PI * 2,
        speed: 0.00012 + Math.random() * 0.00028,
      }));
    };

    const draw = () => {
      if (!isVisible) {
        rafId = requestAnimationFrame(draw);
        return;
      }

      tick++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < birds.length; i++) {
        const b = birds[i];
        const px = ((b.x + tick * b.speed) % 1) * width;
        // Concentration around right/upper portion
        const density = Math.exp(-Math.pow((b.x - 0.74) * 3.2, 2));
        const py = (0.2 + b.y * 0.52 + Math.sin(b.x * 8 + tick * 0.003 + b.p) * 0.05 - density * 0.035) * height;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(Math.sin(tick * 0.013 + b.p) * 0.35);
        ctx.strokeStyle = `rgba(39, 57, 47, ${0.12 + density * 0.48})`;
        ctx.lineWidth = b.s * 0.65;
        ctx.beginPath();
        ctx.moveTo(-b.s * 2, 0);
        ctx.quadraticCurveTo(-b.s * 0.5, -b.s * 1.5, 0, 0);
        ctx.quadraticCurveTo(b.s * 0.6, -b.s * 1.3, b.s * 2, 0);
        ctx.stroke();
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    // Pause when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    resize();
    rafId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="starling-field" aria-hidden="true" />;
}
