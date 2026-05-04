import { motion } from "framer-motion";

export function Nav() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Photo", href: "#photo" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6 text-white">
        <a href="#top" className="font-display text-xl tracking-tight">
          Aniket<span style={{ color: "var(--accent-orange)" }}>.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-meta hover:opacity-60 transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="font-mono-meta hidden md:inline-flex items-center gap-2 group">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-orange)" }} />
          Available 2026
        </a>
      </div>
    </motion.header>
  );
}