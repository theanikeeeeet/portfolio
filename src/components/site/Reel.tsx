import { motion } from "framer-motion";
import concert from "@/assets/concert.jpg";
import travel from "@/assets/travel.jpg";
import creator from "@/assets/creator.jpg";
import timeline from "@/assets/timeline.jpg";
import filmset from "@/assets/filmset.jpg";
import stadium from "@/assets/stadium.jpg";

const tiles = [
  { t: "Coldplay · Aftermovie", cat: "Concert · 4K", img: stadium, span: "md:col-span-7 md:row-span-2 aspect-[16/10]" },
  { t: "Bangalore Nights", cat: "Cinematic", img: creator, span: "md:col-span-5 aspect-[4/5]" },
  { t: "Ladakh Diaries", cat: "Travel Film", img: travel, span: "md:col-span-5 aspect-[16/10]" },
  { t: "Festival Cut", cat: "Event Reel", img: concert, span: "md:col-span-4 aspect-square" },
  { t: "Motion Study 03", cat: "Motion Graphics", img: timeline, span: "md:col-span-3 aspect-square" },
  { t: "Behind The Frame", cat: "BTS · 16:9", img: filmset, span: "md:col-span-12 aspect-[21/9]" },
];

export function Reel() {
  return (
    <section id="work" className="px-6 md:px-12 py-32 md:py-44">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-2 font-mono-meta text-foreground/60">(03) — Reel</div>
        <h3 className="col-span-12 md:col-span-10 font-display text-[8vw] md:text-[5vw] leading-[1.02] tracking-tight">
          Edits that <span className="italic" style={{ color: "var(--accent-orange)" }}>move</span> — concerts, films, motion, memory.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {tiles.map((tile, i) => (
          <motion.figure
            key={tile.t}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, delay: (i % 4) * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            className={`group relative overflow-hidden rounded-sm hover-img-zoom ${tile.span}`}
          >
            <img src={tile.img} alt={tile.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7 flex items-end justify-between text-white">
              <div>
                <div className="font-mono-meta opacity-70">{tile.cat}</div>
                <div className="font-display text-2xl md:text-3xl tracking-tight mt-1">{tile.t}</div>
              </div>
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: "var(--accent-orange)" }}
                aria-hidden
              >
                ▶
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}