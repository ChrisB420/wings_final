import { Link } from "@tanstack/react-router";
import { Scroll } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { listedTeachings, teachingHref, type Teaching } from "@/lib/content/teachings";

function ScrollCard({ teaching }: { teaching: Teaching }) {
  const comingSoon = teaching.status === "coming-soon";
  const card = (
    <Card
      className={`h-full rounded-2xl bg-card shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 ${
        comingSoon ? "opacity-60" : "group-hover:shadow-[var(--shadow-border-hover)]"
      }`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <teaching.icon className="size-6 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs tracking-wider text-primary uppercase">{teaching.level}</span>
              {comingSoon && (
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] tracking-wider text-muted-foreground uppercase">
                  Coming soon
                </span>
              )}
            </div>
            <h3 className="mt-1 mb-2 font-serif text-xl font-semibold">{teaching.title}</h3>
            <p className="text-sm text-muted-foreground">{teaching.summary ?? teaching.description}</p>
          </div>
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
            Revelations Organized as <span className="text-primary">Scrolls</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Each scroll is a guided teaching journey — not just a page.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {listedTeachings.map((teaching) => (
            <ScrollCard key={teaching.slug} teaching={teaching} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/teachings"
            className="text-sm tracking-[0.16em] text-primary uppercase hover:underline"
          >
            Begin your journey through the scrolls
          </Link>
        </div>
      </div>
    </section>
  );
}
