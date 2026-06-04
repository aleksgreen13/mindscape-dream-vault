import s1 from "@/assets/scene-1.jpg";
import s2 from "@/assets/scene-2.jpg";
import s3 from "@/assets/scene-3.jpg";
import hero from "@/assets/hero-vault.jpg";

const shots = [
  { src: s1, title: "The Drift Isles", tag: "Chapter I" },
  { src: s2, title: "Hall of Echoes", tag: "Chapter II" },
  { src: hero, title: "Verdant Gate", tag: "Chapter III" },
  { src: s3, title: "The Threshold", tag: "Chapter IV" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs tracking-widest uppercase text-primary">Visuals</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Step inside the dream.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">A first look at the worlds you'll explore. More environments revealed weekly on our socials.</p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {shots.map((s, i) => (
            <figure key={s.title} className={`group relative overflow-hidden rounded-2xl border border-border/60 ${
              i === 0 ? "col-span-12 md:col-span-7 row-span-2 aspect-[16/10] md:aspect-auto" :
              i === 3 ? "col-span-12 md:col-span-5 aspect-[16/9]" :
              "col-span-6 md:col-span-5 aspect-[16/10]"
            }`}>
              <img src={s.src} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-xs uppercase tracking-widest text-primary">{s.tag}</div>
                <div className="font-display text-xl font-semibold mt-1">{s.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
