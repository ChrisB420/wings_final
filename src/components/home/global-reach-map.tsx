import { useState } from "react";
import { galleryPhotos, type GalleryPlace } from "@/lib/content/gallery";

interface Pin {
  place: GalleryPlace;
  x: number; // percent, left
  y: number; // percent, top
  blurb: string;
  href: string;
}

const pins: Pin[] = [
  {
    place: "London",
    x: 49.7,
    y: 24,
    blurb: "Outreach and teaching among the nations gathered in the city.",
    href: "/gallery",
  },
  {
    place: "Manhattan",
    x: 27.5,
    y: 30,
    blurb: "Street evangelism and prayer in the heart of the city.",
    href: "/gallery",
  },
  {
    place: "Mombasa",
    x: 60,
    y: 55,
    blurb: "The Evangelism Outreach Mombasa (TEOM) — churches, prayer warriors, weekly outreach.",
    href: "/outreach",
  },
  {
    place: "Haiti",
    x: 23,
    y: 44,
    blurb: "A prophetic witness — the Haitian flag held in concert with the return of Christ (Zechariah 4).",
    href: "/teachings/faith-scroll",
  },
];

function photoCount(place: GalleryPlace) {
  return galleryPhotos.filter((p) => p.place === place).length;
}

export function GlobalReachMap() {
  const [active, setActive] = useState<GalleryPlace | null>(null);
  const activePin = pins.find((p) => p.place === active) ?? null;

  return (
    <section className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs tracking-[0.22em] text-primary uppercase">Moving the Nations</p>
          <h2 className="font-serif text-3xl font-semibold md:text-5xl">
            Wherever The Wings <span className="text-primary">Are Landing</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Tap a light to see what God is doing there.
          </p>
        </div>

        <div
          className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-[radial-gradient(circle_at_1px_1px,theme(colors.foreground/8%)_1px,transparent_0)] [background-size:16px_16px]"
          style={{ backgroundColor: "color-mix(in oklab, var(--color-secondary) 60%, transparent)" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.primary/10%),transparent_70%)]" />

          {pins.map((pin) => {
            const isActive = active === pin.place;
            return (
              <button
                key={pin.place}
                type="button"
                aria-label={`${pin.place} outreach`}
                onClick={() => setActive(isActive ? null : pin.place)}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-primary/40 group-hover:bg-primary/60" />
                <span
                  className={`relative block size-3.5 rounded-full border-2 border-background shadow-md transition-transform ${
                    isActive ? "scale-125 bg-primary" : "bg-primary/80 group-hover:scale-110"
                  }`}
                />
                <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-full bg-card px-2 py-0.5 text-[11px] font-medium whitespace-nowrap text-foreground opacity-0 shadow-[var(--shadow-border)] transition-opacity group-hover:opacity-100">
                  {pin.place}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-6 max-w-lg">
          {activePin ? (
            <div className="rounded-2xl bg-card p-6 text-center shadow-[var(--shadow-border)]">
              <h3 className="font-serif text-xl text-primary">{activePin.place}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activePin.blurb}</p>
              {photoCount(activePin.place) > 0 && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {photoCount(activePin.place)} photo{photoCount(activePin.place) === 1 ? "" : "s"} from the field
                </p>
              )}
              <a href={activePin.href} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                See more →
              </a>
            </div>
          ) : (
            <p className="text-center text-sm text-muted-foreground">
              London · Manhattan · Mombasa · Haiti — tap a light above
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
