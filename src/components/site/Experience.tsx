import { motion } from "framer-motion";
import stadium from "@/assets/stadium.jpg";
import backstage from "@/assets/backstage.jpg";
import concert from "@/assets/concert.jpg";
import filmset from "@/assets/filmset.jpg";

const items = [
  { year: "2025", title: "Coldplay · Music of the Spheres", role: "Backstage & Artist Ops", img: stadium },
  { year: "2025", title: "Under25 — Zero1 Fest", role: "Event Production", img: backstage },
  { year: "2024", title: "Arijit Singh Live", role: "Artist Management", img: concert },
  { year: "2024", title: "BookMyShow Venue Ops", role: "On-ground Operations", img: filmset },
  { year: "2024", title: "Skillbox Ticketing", role: "Brand Ops", img: backstage },
  { year: "2023", title: "Festival Logistics", role: "Production", img: concert },
];

export function Experience() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-44">
      <div className="flex items-end justify-between mb-16">
        <div className="font-mono-meta text-foreground/60">(02) — Lived Experience</div>
        <h3 className="font-display text-[8vw] md:text-[5vw] leading-none tracking-tight">
          Rooms I’ve <span className="italic" style={{ color: "var(--accent-orange)" }}>been in</span>.
        </h3>
      </div>

      <div className="-mx-6 md:-mx-12 overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-6 md:px-12 pb-4 min-w-max">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative w-[78vw] md:w-[28vw] shrink-0"
            >
              <div className="overflow-hidden rounded-sm aspect-[4/5] hover-img-zoom">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <div className="font-mono-meta text-foreground/60">{it.year}</div>
                  <div className="font-display text-2xl md:text-3xl mt-1 tracking-tight">{it.title}</div>
                </div>
                <div className="font-mono-meta text-foreground/60 text-right max-w-[12ch]">{it.role}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}