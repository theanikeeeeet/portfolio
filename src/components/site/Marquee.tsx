export function Marquee() {
  const items = [
    "Concerts",
    "Aftermovies",
    "Cinematic Edits",
    "Travel Films",
    "Event Reels",
    "Motion Graphics",
    "Creator Edits",
    "Photography",
    "Brand Activations",
  ];
  const row = (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {items.map((t) => (
        <span key={t} className="font-display text-[7vw] md:text-[5vw] leading-none">
          {t}
          <span style={{ color: "var(--accent-orange)" }}> ✦ </span>
        </span>
      ))}
    </div>
  );
  return (
    <section
      className="overflow-hidden border-y py-8 md:py-10"
      style={{ borderColor: "var(--hairline)" }}
    >
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </section>
  );
}