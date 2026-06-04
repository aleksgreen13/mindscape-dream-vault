import { Brain, Sparkles, Map, Users, Zap, Lock } from "lucide-react";

const features = [
  { icon: Brain, title: "Interconnected Puzzles", body: "Every vault links to the next. Solutions ripple across the entire dreamscape." },
  { icon: Sparkles, title: "Living Narrative", body: "A story that rewrites itself based on the order you uncover its fragments." },
  { icon: Map, title: "Hand-crafted Worlds", body: "Six biomes of dream architecture, from sunken libraries to cloud-bound ruins." },
  { icon: Zap, title: "Fluid Controls", body: "One-tap interactions designed for mobile, with full controller support on desktop." },
  { icon: Users, title: "Co-op Vaults", body: "Optional asynchronous co-op — leave clues for friends inside their dreams." },
  { icon: Lock, title: "No Pay-to-Solve", body: "One purchase. No ads, no hints behind paywalls. Just you and the vault." },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs tracking-widest uppercase text-primary">Features</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Built for puzzle obsessives.</h2>
          <p className="mt-4 text-muted-foreground text-lg">Every system in Mindscape Vaults is designed around one feeling: the click of an idea falling into place.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="group relative p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: "radial-gradient(circle at top right, oklch(0.78 0.18 155 / 0.15), transparent 60%)" }} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center mb-5 group-hover:bg-primary/20 transition">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.body}</p>
                <span className="absolute top-0 right-0 text-xs text-muted-foreground/40 font-mono">0{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
