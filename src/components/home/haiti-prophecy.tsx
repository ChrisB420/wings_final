/**
 * "Haiti — A Prophetic Witness"
 *
 * Painting: the Haitian coat of arms, by artist Arlene D. Whiteman (2008),
 * used here with Greg's confirmed rights. Credited to the artist per
 * standard practice for displaying a named, signed original work.
 */
export function HaitiProphecy() {
  return (
    <section className="border-y border-border bg-secondary/40 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs tracking-[0.22em] text-primary uppercase">A Prophetic Witness</p>
          <h2 className="font-serif text-3xl font-semibold md:text-5xl">
            The Haitian Flag <span className="text-primary">Revelation</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Held in concert with the return of Christ — a sign woven into the colors, the palm,
            and the word above it: &ldquo;Not by might, nor by power, but by my Spirit, says the
            LORD of hosts&rdquo; (Zechariah 4:6).
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-5">
          <figure className="md:col-span-3">
            <div className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-border)]">
              <img
                src="/images/prophecy/haiti/haiti-flag-revelation.jpg"
                srcSet="/images/prophecy/haiti/haiti-flag-revelation.jpg 1600w, /images/prophecy/haiti/haiti-flag-revelation-xl.jpg 2400w"
                sizes="(min-width: 768px) 60vw, 100vw"
                alt="Painting of the Haitian coat of arms with gold calligraphy lettering, by artist Arlene D. Whiteman, 2008, inscribed with Zechariah 4"
                loading="lazy"
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">
              Original painting by Arlene D. Whiteman, 2008 — shared with permission.
            </figcaption>
          </figure>

          <div className="md:col-span-2">
            <h3 className="mb-3 font-serif text-xl text-primary">Zechariah 4</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The coat of arms carries its own quiet prophecy — the palm standing tall and
              untouched, cannons laid down, chains broken at its feet, and the people&apos;s
              motto beneath it: <span className="italic">L&rsquo;Union Fait La Force</span> —
              &ldquo;In unity there is strength.&rdquo;
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              It is the same word spoken to Zerubbabel as he rebuilt the temple against every
              obstacle: the mountain of opposition would become a plain, not by human strength,
              but by the Spirit of the Lord. We hold this flag, and this word, as part of the
              watching and readiness this ministry is called to — for the nations, and for the
              appearing of Christ.
            </p>
            <a
              href="/teachings/faith-scroll"
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 font-semibold text-primary-foreground"
            >
              Read the Faith Scroll →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
