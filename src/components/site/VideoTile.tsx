import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { VideoItem } from "@/data/videos";

function fmt(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type Props = {
  video: VideoItem;
  className?: string;
  aspectClass?: string;
  index?: number;
};

export function VideoTile({ video, className = "", aspectClass, index = 0 }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (hover) {
      el.muted = true;
      el.play().catch(() => {});
    } else {
      el.pause();
      try {
        el.currentTime = 0;
      } catch {}
    }
  }, [hover]);

  const aspect =
    aspectClass ?? (video.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video");

  return (
    <>
      <motion.figure
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: (index % 4) * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
        className={`group relative overflow-hidden rounded-sm cursor-pointer ${aspect} ${className}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen(true)}
      >
        <img
          src={video.poster}
          alt={video.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
        />
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          muted
          playsInline
          loop
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between text-white">
          <div className="min-w-0">
            <div className="font-mono-meta opacity-70 truncate">
              {video.year} · {fmt(video.durationSec)}
            </div>
            <div className="font-display text-xl md:text-2xl tracking-tight mt-1 truncate">
              {video.title}
            </div>
          </div>
          <div
            className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ background: "var(--accent-orange)" }}
            aria-hidden
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </figcaption>
      </motion.figure>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setOpen(false)}
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 md:top-8 md:right-8 h-11 w-11 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center font-mono-meta"
            >
              ✕
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full ${
                video.orientation === "portrait"
                  ? "max-w-[420px] aspect-[9/16]"
                  : "max-w-6xl aspect-video"
              } bg-black rounded-sm overflow-hidden shadow-2xl`}
            >
              <video
                src={video.src}
                poster={video.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-contain bg-black"
              />
            </motion.div>
            <div className="absolute bottom-6 left-0 right-0 text-center text-white px-6">
              <div className="font-display text-2xl md:text-3xl tracking-tight">{video.title}</div>
              <div className="font-mono-meta text-white/60 mt-1">{video.caption}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}