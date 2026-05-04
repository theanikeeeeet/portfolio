import { motion } from "framer-motion";

const cards = [
  {
    name: "VibeCut",
    tag: "AI Video Editor",
    body: "An AI-assisted editor that cuts to the rhythm of your footage — beat-aware sequencing, smart B-roll, instant rough cuts.",
  },
  {
    name: "Motion UI Lab",
    tag: "Design System",
    body: "Reusable motion primitives in React — magnetic buttons, scroll choreography, scene transitions for cinematic web.",
  },
  {
    name: "FFmpeg Playground",
    tag: "Tooling",
    body: "Browser-side video transforms with React + FFmpeg.wasm — color, speed, captions, frame extraction.",
  },
];

export function CreativeTech() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-44" style={{ background: "var(--warm-paper)" }}>
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-2 font-mono-meta text-foreground/60">(06) — Creative Tech</div>
        <h3 className="col-span-12 md:col-span-10 font-display text-[8vw] md:text-[5vw] leading-[1.02] tracking-tight">
          Where <span className="italic" style={{ color: "var(--accent-orange)" }}>code</span> meets the cutting room.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.08 }}
            className="group relative p-8 md:p-10 rounded-sm border bg-card/50 backdrop-blur-sm overflow-hidden"
            style={{ borderColor: "var(--hairline)" }}
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"
              style={{ background: "radial-gradient(closest-side, rgba(255,91,31,0.5), transparent)" }}
            />
            <div className="font-mono-meta text-foreground/60">{c.tag}</div>
            <h4 className="font-display text-4xl md:text-5xl tracking-tight mt-4">{c.name}</h4>
            <p className="text-foreground/70 mt-6 leading-relaxed">{c.body}</p>
            <div className="mt-10 flex items-center gap-3 font-mono-meta">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-orange)" }} />
              In progress
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}