import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.max(1, Math.floor(Math.random() * 9));
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
      setCount(n);
    }, 70);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[300] flex items-end justify-between px-6 py-8 md:px-12 md:py-12"
          style={{ background: "var(--background)" }}
        >
          <div className="font-mono-meta text-foreground/60">Aniket Raj — Portfolio ’26</div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[18vw] leading-none md:text-[10vw]">
              {String(count).padStart(2, "0")}
            </span>
            <span className="font-mono-meta text-foreground/60">%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}