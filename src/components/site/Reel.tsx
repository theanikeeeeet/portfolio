import { byCategory } from "@/data/videos";
import { VideoTile } from "./VideoTile";

const layout = [
  "md:col-span-7 md:row-span-2 aspect-[16/10]",
  "md:col-span-5 aspect-[4/5]",
  "md:col-span-5 aspect-[16/10]",
  "md:col-span-7 aspect-[16/9]",
];

export function Reel() {
  const tiles = byCategory("editing");
  return (
    <section id="work" className="px-6 md:px-12 py-32 md:py-44">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-2 font-mono-meta text-foreground/60">(03) — Video Editing</div>
        <h3 className="col-span-12 md:col-span-10 font-display text-[8vw] md:text-[5vw] leading-[1.02] tracking-tight">
          Edits that <span className="italic" style={{ color: "var(--accent-orange)" }}>move</span> — promos, brand stories, cinematic cuts.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {tiles.map((video, i) => (
          <VideoTile
            key={video.id}
            video={video}
            index={i}
            aspectClass=""
            className={layout[i % layout.length]}
          />
        ))}
      </div>
    </section>
  );
}