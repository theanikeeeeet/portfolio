import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const reveal: Variants = {
    hidden: { y: "110%" },
    show: (i: number) => ({
      y: 0,
      transition: { delay: 1.6 + i * 0.08, duration: 1.05, ease: [0.2, 0.8, 0.2, 1] as const },
    }),
  };

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Soft orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[60vw] w-[60vw] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, rgba(255,91,31,0.45), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[50vw] w-[50vw] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(closest-side, rgba(255,180,120,0.6), transparent 70%)" }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 px-6 md:px-12 pt-36 md:pt-44">
        {/* Top meta row */}
        <div className="flex justify-between items-start font-mono-meta text-foreground/60">
          <div>
            <div>Bangalore, IN</div>
            <div>12.97°N · 77.59°E</div>
          </div>
          <div className="text-right max-w-[16ch]">
            Portfolio of a creative technologist & filmmaker
          </div>
        </div>

        {/* Massive headline */}
        <h1 className="mt-20 md:mt-28 font-display text-[14vw] md:text-[10.5vw] leading-[0.92] tracking-[-0.03em]">
          <span className="block overflow-hidden">
            <motion.span variants={reveal} initial="hidden" animate="show" custom={0} className="block">
              I create visuals,
            </motion.span>
          </span>
          <span className="block overflow-hidden md:pl-[18vw]">
            <motion.span variants={reveal} initial="hidden" animate="show" custom={1} className="block italic">
              moments<span style={{ color: "var(--accent-orange)" }}>,</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={reveal} initial="hidden" animate="show" custom={2} className="block">
              & experiences people
            </motion.span>
          </span>
          <span className="block overflow-hidden md:pl-[36vw]">
            <motion.span variants={reveal} initial="hidden" animate="show" custom={3} className="block">
              <span className="scribble">remember</span>.
            </motion.span>
          </span>
        </h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.9 }}
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16"
        >
          <p className="font-mono-meta max-w-md text-foreground/70 leading-relaxed">
            Video Editing · Events · Films · Concerts · Photography ·{" "}
            <span style={{ color: "var(--accent-orange)" }}>Creative Tech</span>
          </p>
          <div className="flex items-center gap-3 font-mono-meta text-foreground/60">
            <span className="inline-block h-px w-10 bg-foreground/40" />
            Scroll
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}