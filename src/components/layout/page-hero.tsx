export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border px-4 pb-14 pt-16 md:px-6 md:pb-20 md:pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_22%_0%,rgba(134,109,255,0.18),transparent_55%),radial-gradient(ellipse_at_88%_60%,rgba(46,180,221,0.08),transparent_48%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        {kicker ? (
          <p className="mb-4 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs tracking-[0.22em] text-primary uppercase shadow-[0_0_28px_rgba(184,165,255,0.1)]">
            {kicker}
          </p>
        ) : null}
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
