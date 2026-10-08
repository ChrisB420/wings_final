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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,164,108,0.08),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        {kicker ? (
          <p className="mb-4 text-xs tracking-[0.22em] text-primary uppercase">
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
