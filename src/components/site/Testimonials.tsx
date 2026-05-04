import { motion } from "framer-motion";

const notes = [
  { q: "Calm in chaos — the kind of person you want backstage when the show’s about to start.", who: "Festival Producer · Zero1" },
  { q: "Edits with a real sense of music. Cuts feel like they’re breathing.", who: "Independent Artist" },
  { q: "Reliable, fast, and always one step ahead on the run-of-show.", who: "Venue Ops Lead · BMS" },
  { q: "Brings a creator’s eye and an engineer’s rigor to every brief.", who: "Brand Manager" },
];

export function Testimonials() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-44">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-2 font-mono-meta text-foreground/60">(07) — Field Notes</div>
        <h3 className="col-span-12 md:col-span-10 font-display text-[8vw] md:text-[5vw] leading-[1.02] tracking-tight">
          Words from <span className="italic" style={{ color: "var(--accent-orange)" }}>the rooms</span>.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notes.map((n, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.08 }}
            className={`p-8 md:p-12 rounded-sm border ${i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-12"}`}
            style={{ borderColor: "var(--hairline)", background: "color-mix(in oklab, var(--accent-orange) 4%, var(--background))" }}
          >
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight">
              “{n.q}”
            </p>
            <footer className="font-mono-meta text-foreground/60 mt-8">— {n.who}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}