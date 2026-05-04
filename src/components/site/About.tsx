import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-32 md:py-44">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 font-mono-meta text-foreground/60">
          (01) — About
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display text-[7vw] md:text-[4.2vw] leading-[1.02] tracking-tight"
          >
            A Bangalore-based creative blending{" "}
            <span className="italic" style={{ color: "var(--accent-orange)" }}>
              technology
            </span>
            , visuals, and real-world moments — across concerts, films, festivals and the
            quiet stories in between.
          </motion.h2>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="col-span-12 md:col-span-5 md:col-start-2"
        >
          <div className="overflow-hidden rounded-sm hover-img-zoom">
            <img
              src={portrait}
              alt="Aniket Raj portrait"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-3 flex justify-between font-mono-meta text-foreground/60">
            <span>Aniket Raj</span>
            <span>BLR · 2026</span>
          </div>
        </motion.div>

        <div className="col-span-12 md:col-span-4 md:col-start-8 self-end space-y-8 text-foreground/80">
          <p className="text-lg md:text-xl leading-relaxed">
            I’m a Computer Science student moonlighting as a freelance creative —
            editing video, running events, shooting cameras, and building tools at the
            edge of film and software.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            From backstage at Coldplay to ticketing ops at Skillbox, from artist
            management to building <span style={{ color: "var(--accent-orange)" }}>VibeCut</span> —
            an AI-powered editor — every project is a chance to make something people
            actually feel.
          </p>
          <ul className="font-mono-meta text-foreground/60 grid grid-cols-2 gap-y-2 pt-4 border-t" style={{ borderColor: "var(--hairline)" }}>
            <li>Video Editor</li><li>Filmmaker</li>
            <li>Event Manager</li><li>Photographer</li>
            <li>Videographer</li><li>Creative Tech</li>
          </ul>
        </div>
      </div>
    </section>
  );
}