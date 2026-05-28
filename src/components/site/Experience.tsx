import { motion } from "framer-motion";
import { byCategory } from "@/data/videos";
import { VideoTile } from "./VideoTile";

export function Experience() {
  const items = byCategory("events");
  return (
    <section id="events" className="px-6 md:px-12 py-32 md:py-44">
      <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
        <div className="font-mono-meta text-foreground/60">(02) — Events & On-ground</div>
        <h3 className="font-display text-[8vw] md:text-[5vw] leading-none tracking-tight">
          Rooms I’ve <span className="italic" style={{ color: "var(--accent-orange)" }}>been in</span>.
        </h3>
      </div>

      <div className="-mx-6 md:-mx-12 overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-6 md:px-12 pb-4 min-w-max">
          {items.map((it, i) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className="w-[78vw] md:w-[28vw] shrink-0"
            >
              <VideoTile video={it} index={i} aspectClass="aspect-[4/5]" />
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 font-mono-meta text-foreground/60">
                <span className="text-foreground/45">Client</span>
                <span className="text-right text-foreground">{it.client}</span>
                <span className="text-foreground/45">Role</span>
                <span className="text-right">{it.role}</span>
                <span className="text-foreground/45">Views</span>
                <span className="text-right inline-flex items-center justify-end gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-orange)" }} />
                  {it.views}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}