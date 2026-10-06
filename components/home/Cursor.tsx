"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    setMounted(true);

    const move = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const enter = () => setActive(true);
    const leave = () => setActive(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll("a, button, [data-cursor]");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className={active ? "custom-cursor active" : "custom-cursor"}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 35,
        mass: 0.2,
      }}
    >
      <span />
    </motion.div>
  );
}
