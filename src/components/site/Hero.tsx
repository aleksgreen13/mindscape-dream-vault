import hero from "@/assets/hero-vault.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      <div className="absolute inset-0">
        <img src={hero} alt="Glowing vault door in mystical forest" width={1920} height={1080} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Floating rune ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin] rounded-full border border-primary/20 animate-rune-spin pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] rounded-full border border-accent/10 animate-rune-spin pointer-events-none" style={{ animationDirection: "reverse" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs tracking-widest uppercase mb-8 backdrop-blur">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Coming 2026 · Pre-registration Open
        </div>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight">
          Unlock the <span className="text-gradient">Dream</span><br />
          Beyond the Vault.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A puzzle-adventure through a living dreamscape. Solve interconnected mysteries, decode ancient runes, and uncover a story buried deep in your own mind.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#waitlist" className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium animate-pulse-glow hover:scale-105 transition-transform">
            <span className="relative z-10">Join the Waitlist</span>
          </a>
          <a href="#gallery" className="px-8 py-4 rounded-full border border-border bg-card/40 backdrop-blur hover:bg-card/70 transition font-medium">
            Watch Gameplay
          </a>
        </div>
        <div className="mt-16 flex justify-center gap-8 text-xs uppercase tracking-widest text-muted-foreground/70">
          <span>iOS</span><span>·</span><span>Android</span><span>·</span><span>Steam</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 text-xs">
        <span className="tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </div>
    </section>
  );
}
