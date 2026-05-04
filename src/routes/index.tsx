import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Cursor } from "@/components/site/Cursor";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Reel } from "@/components/site/Reel";
import { Photography } from "@/components/site/Photography";
import { Filmmaking } from "@/components/site/Filmmaking";
import { CreativeTech } from "@/components/site/CreativeTech";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="grain relative">
      <Loader />
      <SmoothScroll />
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Reel />
      <Photography />
      <Filmmaking />
      <CreativeTech />
      <Testimonials />
      <Contact />
    </main>
  );
}
