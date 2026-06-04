export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-display font-bold shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
            M
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">Mindscape <span className="text-gradient">Vaults</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#gallery" className="hover:text-foreground transition-colors">Gameplay</a>
          <a href="#waitlist" className="hover:text-foreground transition-colors">Waitlist</a>
        </nav>
        <a href="#waitlist" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]">
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
