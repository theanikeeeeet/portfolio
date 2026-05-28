import { motion } from "framer-motion";
import { byCategory } from "@/data/videos";
import { VideoTile } from "./VideoTile";

export function Filmmaking() {
  const tiles = byCategory("motion");
  return (
    <section id="motion" className="px-6 md:px-12 py-32 md:py-44">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-2 font-mono-meta text-foreground/60">(05) — Motion Design</div>
        <h3 className="col-span-12 md:col-span-10 font-display text-[8vw] md:text-[5vw] leading-[1.02] tracking-tight">
          Vertical cuts, kinetic <span className="italic" style={{ color: "var(--accent-orange)" }}>type</span>, motion that scrolls.
        </h3>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="col-span-12 md:col-span-4 self-end space-y-6 order-last md:order-first"
        >
          <p className="text-lg leading-relaxed text-foreground/80">
            Designed for the thumb — punchy openings, kinetic captions, and timing
            that earns its second view. Built for stories told in 9:16.
          </p>
          <ul className="font-mono-meta text-foreground/60 space-y-2 border-t pt-4" style={{ borderColor: "var(--hairline)" }}>
            <li>Edit · Motion · Sound design</li>
            <li>Premiere · After Effects · Resolve</li>
            <li>Vertical-first delivery</li>
          </ul>
        </motion.div>

        {tiles.map((video, i) => (
          <div
            key={video.id}
            className={
              i === 0
                ? "col-span-12 md:col-span-4"
                : i === 1
                  ? "col-span-6 md:col-span-2"
                  : "col-span-6 md:col-span-2"
            }
          >
            <VideoTile video={video} index={i} aspectClass="aspect-[9/16]" />
            <div className="mt-3 flex items-center justify-between font-mono-meta text-foreground/60">
              <span className="truncate">{video.client}</span>
              <span className="inline-flex items-center gap-2 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-orange)" }} />
                {video.views}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}