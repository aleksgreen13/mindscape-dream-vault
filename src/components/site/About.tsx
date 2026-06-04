import scene from "@/assets/scene-3.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition" />
          <img src={scene} alt="Explorer before the vault" width={1280} height={800} loading="lazy" className="relative rounded-2xl border border-border/60 w-full" />
        </div>
        <div>
          <span className="text-xs tracking-widest uppercase text-primary">The Concept</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            A world built from <span className="text-gradient">forgotten thoughts.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Mindscape Vaults drops you into a digital dream — a labyrinth of vaults, each one a fragment of a stranger's memory. Every chamber is a puzzle. Every puzzle is a clue. Every clue rewrites the story.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Inspired by escape rooms, narrative adventure, and the quiet thrill of discovering something no one else has seen, Mindscape Vaults turns problem-solving into pure exploration.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "60+", l: "Vaults" },
              { n: "12hr+", l: "Story" },
              { n: "∞", l: "Replay" },
            ].map((s) => (
              <div key={s.l} className="text-center p-4 rounded-xl border border-border/60 bg-card/40 backdrop-blur">
                <div className="font-display text-3xl font-bold text-gradient">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
