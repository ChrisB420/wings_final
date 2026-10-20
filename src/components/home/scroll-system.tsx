import { Link } from "@tanstack/react-router";
import { ArrowRight, Scroll } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { listedTeachings, teachingHref, type Teaching } from "@/lib/content/teachings";

function ScrollCard({ teaching, index }: { teaching: Teaching; index: number }) {
  const comingSoon = teaching.status === "coming-soon";
  const card = (
    <Card
      className={`group relative h-full overflow-hidden rounded-2xl border-border/80 bg-card/80 shadow-[var(--shadow-border)] transition-[transform,border-color,box-shadow] duration-300 ${
        comingSoon
          ? "opacity-70"
          : "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-border-hover)]"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/10"
        aria-hidden="true"
      />
      <CardContent className="relative flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="flex size-12 items-center justify-center rounded-xl border border-primary/15 bg-primary/10">
            <teaching.icon aria-hidden="true" className="size-5 text-primary" />
          </span>
          <span className="pt-1 font-serif text-sm tracking-[0.12em] text-muted-foreground/70">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-6 flex flex-1 flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[0.68rem] tracking-[0.2em] text-primary uppercase">
              {teaching.level}
            </span>
            {comingSoon && (
              <span className="rounded-full border border-border px-2 py-0.5 text-[0.6rem] tracking-wider text-muted-foreground uppercase">
                Coming soon
              </span>
            )}
          </div>
          <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight group-hover:text-primary">
            {teaching.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {teaching.summary ?? teaching.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-foreground/80 uppercase">
            {comingSoon ? "In preparation" : "Open this scroll"}
            {!comingSoon && <ArrowRight aria-hidden="true" className="size-4" />}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return comingSoon ? (
    <div aria-disabled="true">{card}</div>
  ) : (
    <Link to={teachingHref(teaching)} className="group block">
      {card}
    </Link>
  );
}

export function ScrollSystem() {
  return (
    <section id="scrolls" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-xs tracking-[0.22em] text-primary uppercase">
            <Scroll className="size-4" />
            The Scroll System
          </p>
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">
            The Eternal Hope of <span className="text-primary">Revival</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Explore the new creation, prophetic restoration, and faith for the days ahead through
            this collection of guided teachings.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {listedTeachings.map((teaching, index) => (
            <ScrollCard key={teaching.slug} teaching={teaching} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/teachings"
            className="text-sm tracking-[0.16em] text-primary uppercase hover:underline"
          >
            Explore all teachings
          </Link>
        </div>
      </div>
    </section>
  );
}
