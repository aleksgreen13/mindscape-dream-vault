import { Send, Camera, Play, Code2 } from "lucide-react";
const Twitter = Send;
const Instagram = Camera;
const Youtube = Play;
const Github = Code2;

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 pt-20 pb-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-display font-bold">M</div>
            <span className="font-display text-lg font-semibold">Mindscape Vaults</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
            A puzzle adventure crafted by Lucid Forge Studio. Built for dreamers, decoders, and the quietly curious.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 grid place-items-center rounded-full border border-border bg-card/40 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-primary mb-4">Game</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#gallery" className="hover:text-foreground">Gameplay</a></li>
            <li><a href="#" className="hover:text-foreground">Press Kit</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-primary mb-4">Studio</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:hello@mindscapevaults.com" className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Careers</a></li>
            <li><a href="#" className="hover:text-foreground">Discord</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/40 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <span>© 2026 Lucid Forge Studio. All rights reserved.</span>
        <span>Made with care · Dreams optional</span>
      </div>
    </footer>
  );
}
