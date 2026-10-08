import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { publishedTeachings, teachingHref } from "@/lib/content/teachings";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/teachings/")({
  head: () => ({
    meta: [
      { title: `Teachings | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Explore the sacred teachings and prophetic revelations from Wings of the Cherubim.",
      },
    ],
  }),
  component: TeachingsPage,
});

function TeachingsPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Scroll System"
        title="Sacred Teachings"
        description="Explore the Scroll System — prophetic teachings, divine revelation, spiritual insight, and the mysteries of Scripture."
      />
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {publishedTeachings.map((teaching) => (
            <Link
              key={teaching.slug}
              to={teachingHref(teaching)}
              className="group rounded-2xl bg-card p-8 shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="text-xs tracking-[0.18em] text-primary uppercase">{teaching.level}</p>
              <h2 className="mt-4 font-serif text-3xl group-hover:text-primary">{teaching.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{teaching.description}</p>
              <p className="mt-6 text-sm tracking-[0.16em] text-primary uppercase">Enter Scroll</p>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-center text-muted-foreground">
          Prefer to read offline? Visit the{" "}
          <Link to="/library" className="text-primary hover:underline">
            Scroll Library
          </Link>{" "}
          for PDF downloads.
        </p>
      </section>
    </SiteShell>
  );
}
