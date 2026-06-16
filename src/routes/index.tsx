import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { Gallery } from "@/components/site/Gallery";
import { Waitlist } from "@/components/site/Waitlist";
import { Footer } from "@/components/site/Footer";
import { PuzzleChat } from "@/components/site/PuzzleChat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mindscape Vaults — A Puzzle Adventure Through the Dream" },
      { name: "description", content: "Unlock interconnected dream vaults in a cinematic puzzle adventure. Join the waitlist for early access to Mindscape Vaults." },
      { property: "og:title", content: "Mindscape Vaults" },
      { property: "og:description", content: "A puzzle adventure through a living dreamscape. Join the waitlist." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Waitlist />
      <Footer />
    </main>
  );
}
