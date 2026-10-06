"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";

export function MagneticButton({
  children,
  href = "/research",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
  });

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        display: "inline-block",
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <Link href={href} className="magnetic-button">
        {children}
      </Link>
    </motion.div>
  );
}
