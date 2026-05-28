import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { byCategory } from "@/data/videos";
import { VideoTile } from "./VideoTile";

export function Reel() {
  const tiles = byCategory("editing");
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="px-6 md:px-12 py-32 md:py-44">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-2 font-mono-meta text-foreground/60">(03) — Video Editing</div>
        <h3 className="col-span-12 md:col-span-10 font-display text-[8vw] md:text-[5vw] leading-[1.02] tracking-tight">
          Edits that <span className="italic" style={{ color: "var(--accent-orange)" }}>move</span> — promos, brand stories, cinematic cuts.
        </h3>
      </div>

      <div className="grid grid-cols-12 gap-8 md:gap-12">
        {/* Sticky preview pane */}
        <div className="col-span-12 md:col-span-5 order-2 md:order-1">
          <div className="md:sticky md:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={tiles[active]?.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <VideoTile video={tiles[active]} aspectClass="aspect-video" />
                <div className="mt-5 flex items-center justify-between font-mono-meta text-foreground/60">
                  <span>{tiles[active].client}</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-orange)" }} />
                    {tiles[active].views} views
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Editorial index */}
        <ol className="col-span-12 md:col-span-7 order-1 md:order-2 divide-y" style={{ borderColor: "var(--hairline)" }}>
          {tiles.map((t, i) => (
            <li
              key={t.id}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group grid grid-cols-12 gap-4 py-6 md:py-8 cursor-pointer transition-colors ${
                active === i ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
              style={{ borderColor: "var(--hairline)" }}
            >
              <span className="col-span-2 md:col-span-1 font-mono-meta text-foreground/50 pt-2">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div className="col-span-10 md:col-span-7">
                <div className="font-display text-2xl md:text-4xl leading-[1.05] tracking-tight">
                  {t.title}
                </div>
                <div className="mt-2 font-mono-meta text-foreground/55">
                  {t.role}
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 flex md:flex-col md:items-end justify-between md:justify-start gap-1 font-mono-meta text-foreground/55 md:pt-2">
                <span>{t.year}</span>
                <span className="text-foreground">{t.views}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}