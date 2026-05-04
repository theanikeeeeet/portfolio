import { motion } from "framer-motion";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "YouTube", href: "https://youtube.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 md:px-12 pt-32 md:pt-44 pb-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[60vw] w-[60vw] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(closest-side, rgba(255,91,31,0.4), transparent 70%)" }}
      />
      <div className="relative">
        <div className="font-mono-meta text-foreground/60">(08) — Contact</div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-[14vw] md:text-[11vw] leading-[0.92] tracking-[-0.03em] mt-8"
        >
          Let’s build <br />
          something <span className="italic" style={{ color: "var(--accent-orange)" }}>unforgettable</span>.
        </motion.h2>

        <div className="mt-20 grid grid-cols-12 gap-6">
          <a
            href="mailto:hello@aniketraj.in"
            className="col-span-12 md:col-span-8 group flex flex-wrap items-center gap-4 border-y py-8 md:py-12"
            style={{ borderColor: "var(--hairline)" }}
          >
            <span className="font-mono-meta text-foreground/60">Write</span>
            <span className="font-display text-3xl md:text-6xl tracking-tight scribble">
              hello@aniketraj.in
            </span>
            <span
              className="ml-auto h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-45"
              style={{ background: "var(--accent-orange)" }}
              aria-hidden
            >
              ↗
            </span>
          </a>

          <div className="col-span-12 md:col-span-4 self-end">
            <ul className="grid grid-cols-2 gap-y-3 font-mono-meta">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="group inline-flex items-center gap-2 hover:opacity-60 transition-opacity">
                    <span className="h-px w-4 bg-foreground/40 group-hover:w-8 transition-all" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 flex flex-col md:flex-row justify-between gap-6 font-mono-meta text-foreground/60 border-t pt-8" style={{ borderColor: "var(--hairline)" }}>
          <div>© 2026 — Aniket Raj</div>
          <div>Bangalore · Available worldwide</div>
          <div>Designed & built with care</div>
        </div>
      </div>
    </section>
  );
}