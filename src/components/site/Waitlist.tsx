import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="waitlist" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-[3rem] blur-3xl" />
        <div className="relative rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden grain">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="relative">
            <span className="text-xs tracking-widest uppercase text-primary">Early Access</span>
            <h2 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
              Be the first<br />through the <span className="text-gradient">vault.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Join the waitlist for closed beta access, an exclusive in-game artifact, and dev updates straight from the studio.
            </p>

            {done ? (
              <div className="mt-10 inline-flex items-center gap-3 px-6 py-4 rounded-full bg-primary/10 border border-primary/30 text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> You're on the list. Welcome, dreamer.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
                className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@dreamer.io"
                  className="flex-1 px-5 py-4 rounded-full bg-input border border-border focus:border-primary outline-none transition placeholder:text-muted-foreground/60"
                />
                <button type="submit" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium animate-pulse-glow hover:scale-105 transition-transform">
                  Reserve Spot
                </button>
              </form>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <span>✦ Beta key priority</span>
              <span>✦ Exclusive lantern skin</span>
              <span>✦ No spam, ever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
