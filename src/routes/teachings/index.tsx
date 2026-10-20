import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { publishedTeachings, teachingHref } from "@/lib/content/teachings";
import { siteConfig } from "@/lib/site";

function TeachingCard({
  teaching,
  index,
}: {
  teaching: (typeof publishedTeachings)[number];
  index: number;
}) {
  return (
    <Link
      to={teachingHref(teaching)}
      className="group relative flex h-full min-h-56 flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-6 shadow-[var(--shadow-border)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-border-hover)] md:p-7"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/10"
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10">
          <teaching.icon aria-hidden="true" className="size-5 text-primary" />
        </span>
        <span className="pt-1 font-serif text-sm tracking-[0.12em] text-muted-foreground/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="relative mt-6 flex flex-1 flex-col">
        <p className="text-[0.68rem] tracking-[0.2em] text-primary uppercase">
          {teaching.level}
        </p>
        <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
          {teaching.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {teaching.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-foreground/80 uppercase transition-colors group-hover:text-primary">
          Open this scroll
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

export const Route = createFileRoute("/teachings/")({
  head: () => ({
    meta: [
      { title: `Teachings & Insights | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Explore teachings on new creation, salvation, prophetic restoration, and faith for the days ahead.",
      },
    ],
  }),
  component: TeachingsPage,
});

function TeachingsPage() {
  const firstTeaching = publishedTeachings[0];

  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden border-b border-border/70 px-4 pb-14 pt-16 md:px-6 md:pb-20 md:pt-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_4%,rgba(134,109,255,0.2),transparent_43%),radial-gradient(ellipse_at_86%_42%,rgba(46,180,221,0.1),transparent_38%)]"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[0.68rem] tracking-[0.2em] text-primary uppercase">
              <Sparkles aria-hidden="true" className="size-3.5" />
              Eternal hope · prophetic awakening
            </p>
            <h1 className="max-w-3xl font-serif text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Revival for the
              <br />
              <span className="text-primary">Age to Come</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Explore the Word through teachings on new creation, salvation, prophetic restoration,
              and faith for the days ahead.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {firstTeaching && (
                <Link
                  to={teachingHref(firstTeaching)}
                  className="inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_34px_rgba(104,87,214,0.25)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(104,87,214,0.38)]"
                >
                  Begin with Creation
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              )}
              <a
                href="#reading-path"
                className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Browse the scrolls
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center md:max-w-md">
            <div
              className="absolute inset-[8%] rounded-full border border-primary/10"
              aria-hidden="true"
            />
            <div
              className="absolute inset-[18%] rounded-full border border-dashed border-primary/20"
              aria-hidden="true"
            />
            <div
              className="absolute inset-[28%] rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex size-36 items-center justify-center rounded-full border border-primary/25 bg-[radial-gradient(circle_at_35%_28%,rgba(184,165,255,0.3),rgba(17,26,53,0.88)_72%)] shadow-[0_0_70px_rgba(104,87,214,0.2)] sm:size-44">
              <BookOpen
                aria-hidden="true"
                className="size-16 text-primary sm:size-20"
                strokeWidth={1}
              />
            </div>
            <div className="absolute right-[8%] top-[20%] size-2 rounded-full bg-accent shadow-[0_0_18px_rgba(99,223,242,0.9)]" />
            <div className="absolute bottom-[14%] left-[13%] size-1.5 rounded-full bg-primary shadow-[0_0_16px_rgba(184,165,255,0.8)]" />
            <p className="absolute bottom-[5%] text-center text-[0.65rem] tracking-[0.26em] text-muted-foreground uppercase">
              The Scroll System
            </p>
          </div>
        </div>
      </section>

      <section id="reading-path" className="scroll-mt-24 px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 flex flex-col gap-4 border-b border-border/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.68rem] tracking-[0.2em] text-primary uppercase">
                A path through the teachings
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                Read for the days ahead
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Begin with creation, explore the promise of restoration, or follow the teaching that
              speaks to you. Read each scroll at your own pace.
            </p>
          </div>

          {publishedTeachings.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {publishedTeachings.map((teaching, index) => (
                <TeachingCard key={teaching.slug} teaching={teaching} index={index} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-border bg-card p-8 text-muted-foreground">
              New teachings are being prepared. Please check back soon.
            </p>
          )}

          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border/80 bg-secondary/45 p-6 text-center sm:flex-row sm:text-left md:p-8">
            <div>
              <p className="font-serif text-xl font-semibold">Take the teachings with you</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Browse the library for resources you can read and revisit offline.
              </p>
            </div>
            <Link
              to="/library"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm text-primary transition-colors hover:bg-primary/10"
            >
              Visit the Scroll Library
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
