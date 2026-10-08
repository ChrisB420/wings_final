import { Link } from "@tanstack/react-router";

const updates = [
  {
    src: "/images/hero/wings-banner.jpg",
    title: "The Glory Vision",
    text: "Revelation of light, structure, and divine alignment.",
    href: "/teachings",
  },
  {
    src: "/images/outreach/overseas/london-1.jpg",
    title: "Scroll Activation",
    text: "Teachings becoming structured digital scrolls.",
    href: "/library",
  },
  {
    src: "/images/outreach/overseas/manhattan-1.jpg",
    title: "Outreach Movement",
    text: "Expansion into real-world ministry and gatherings.",
    href: "/outreach",
  },
] as const;

export function UpdatesGallery() {
  return (
    <section className="border-y border-border bg-secondary/50 py-24">
      <div className="mx-auto mb-14 max-w-3xl px-6 text-center">
        <p className="mb-3 text-xs tracking-[0.22em] text-primary uppercase">Archive</p>
        <h2 className="font-serif text-4xl font-semibold md:text-5xl">Vision Updates</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          A living archive of teachings, revelations, and mission movement within Wings of the
          Cherubim.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-3 md:px-6">
        {updates.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.src}
                alt=""
                className="media size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
