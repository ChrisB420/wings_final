import type { ReactNode } from "react";

export function ScrollReader({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-10 pt-12 md:px-6 md:pb-14 md:pt-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_16%_0%,rgba(134,109,255,0.17),transparent_44%),radial-gradient(ellipse_at_86%_32%,rgba(46,180,221,0.1),transparent_38%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs tracking-[0.18em] text-primary uppercase">
            {kicker} <span aria-hidden="true">·</span> A teaching for the days ahead
          </p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </header>
        <div className="rounded-3xl border border-border/80 bg-card/75 px-5 py-7 shadow-[var(--shadow-border)] backdrop-blur-sm sm:px-8 md:px-12 md:py-12">
          {children}
        </div>
      </div>
    </section>
  );
}
