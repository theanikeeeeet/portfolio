import { motion } from "framer-motion";
import street from "@/assets/street.jpg";
import portrait from "@/assets/portrait.jpg";
import travel from "@/assets/travel.jpg";
import concert from "@/assets/concert.jpg";
import backstage from "@/assets/backstage.jpg";
import filmset from "@/assets/filmset.jpg";

const photos = [
  { src: street, cap: "BLR · 22:14", h: "tall" },
  { src: travel, cap: "Spiti · 06:42", h: "wide" },
  { src: concert, cap: "Mumbai · Encore", h: "tall" },
  { src: portrait, cap: "Studio · No.7", h: "tall" },
  { src: backstage, cap: "Backstage · 01:08", h: "wide" },
  { src: filmset, cap: "On set · Take 4", h: "tall" },
];

export function Photography() {
  return (
    <section id="photo" className="px-6 md:px-12 py-32 md:py-44" style={{ background: "var(--warm-paper)" }}>
      <div className="flex items-end justify-between mb-16">
        <div className="font-mono-meta text-foreground/60">(04) — Photography</div>
        <h3 className="font-display text-[8vw] md:text-[5vw] leading-none tracking-tight text-right max-w-[14ch]">
          Stills from a <span className="italic" style={{ color: "var(--accent-orange)" }}>moving</span> life.
        </h3>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((p, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: (i % 3) * 0.08 }}
            className="mb-4 break-inside-avoid overflow-hidden rounded-sm hover-img-zoom"
          >
            <img
              src={p.src}
              alt={p.cap}
              loading="lazy"
              className={`w-full object-cover ${p.h === "tall" ? "aspect-[4/5]" : "aspect-[3/2]"}`}
            />
            <figcaption className="font-mono-meta text-foreground/60 mt-2 flex justify-between">
              <span>{p.cap}</span>
              <span>↗</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}