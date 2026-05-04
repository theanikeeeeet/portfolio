import { motion } from "framer-motion";
import filmset from "@/assets/filmset.jpg";
import travel from "@/assets/travel.jpg";

export function Filmmaking() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-44">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-2 font-mono-meta text-foreground/60">(05) — Filmmaking</div>
        <h3 className="col-span-12 md:col-span-10 font-display text-[8vw] md:text-[5vw] leading-[1.02] tracking-tight">
          Stories framed in <span className="italic" style={{ color: "var(--accent-orange)" }}>24 frames</span> a second.
        </h3>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="col-span-12 md:col-span-8 relative overflow-hidden rounded-sm aspect-[16/9] hover-img-zoom"
        >
          <img src={filmset} alt="Behind the scenes" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <div className="font-mono-meta opacity-80">Case Study · 2025</div>
            <div className="font-display text-3xl md:text-5xl tracking-tight mt-2 max-w-[18ch]">
              The Quiet Loud — short film
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="col-span-12 md:col-span-4 self-end space-y-6"
        >
          <p className="text-lg leading-relaxed text-foreground/80">
            A storyboard-led practice. From scribbles on a notebook to color-graded
            timelines — every frame earns its place.
          </p>
          <ul className="font-mono-meta text-foreground/60 space-y-2 border-t pt-4" style={{ borderColor: "var(--hairline)" }}>
            <li>Direction · Edit · Grade</li>
            <li>R3D · BRAW · S-Log3</li>
            <li>Resolve · Premiere · AE</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="col-span-12 md:col-span-6 md:col-start-4 relative overflow-hidden rounded-sm aspect-[16/10] hover-img-zoom"
        >
          <img src={travel} alt="Travel film still" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white">
            <div className="font-mono-meta opacity-80">Travel Film · 2024</div>
            <div className="font-display text-3xl tracking-tight mt-1">North · 04:12</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}