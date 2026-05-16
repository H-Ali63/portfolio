"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.2 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-accent-mint via-accent-cyan to-accent-amber shadow-[0_0_18px_rgba(49,214,160,0.45)]"
      style={{ scaleX }}
    />
  );
}
