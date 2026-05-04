import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const enter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [data-magnetic]')) setHover(true);
    };
    const leave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [data-magnetic]')) setHover(false);
    };

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enter);
    window.addEventListener("mouseout", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enter);
      window.removeEventListener("mouseout", leave);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="cursor-dot hidden md:block"
        style={{ width: hover ? 0 : 8, height: hover ? 0 : 8 }}
      />
      <div
        ref={ring}
        className="hidden md:block"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hover ? 64 : 36,
          height: hover ? 64 : 36,
          border: "1px solid var(--accent-orange)",
          borderRadius: 999,
          pointerEvents: "none",
          zIndex: 199,
          transition: "width .25s, height .25s, background .25s",
          background: hover ? "color-mix(in oklab, #ff5b1f 14%, transparent)" : "transparent",
        }}
      />
    </>
  );
}