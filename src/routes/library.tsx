import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ExternalLink, FileText } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { scrollDocuments } from "@/lib/content/media";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: `Scroll Library | ${siteConfig.name}` },
      {
        name: "description",
        content:
          "Explore the Wings of the Cherubim source scrolls on salvation, prayer, new creation, and prophetic hope.",
      },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="New creation · prophetic hope"
        title="The Scroll Library"
        description="Explore the source writings on salvation, prayer, and the age to come. Read a scroll online or download it for later."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 border-b border-border/80 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs tracking-[0.18em] text-primary uppercase">Source writings</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                Read and revisit
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              These PDFs are the full scrolls. The guided teachings offer a shorter path into key
              themes.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {scrollDocuments.map((doc) => (
              <div
                key={doc.id}
                className="group flex h-full flex-col gap-5 rounded-2xl border border-border/80 bg-card/75 p-5 shadow-[var(--shadow-border)] transition-colors hover:border-primary/35 sm:flex-row sm:items-start sm:p-6"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10">
                  <FileText aria-hidden="true" className="size-5 text-primary" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {doc.description ?? "PDF source scroll"}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/25 px-4 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                    >
                      <ExternalLink aria-hidden="true" className="size-4" /> Read online
                    </a>
                    <a
                      href={doc.file}
                      download
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      <Download aria-hidden="true" className="size-4" /> Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="pt-6 text-center text-muted-foreground">
            Looking for the online teachings?{" "}
            <Link to="/teachings" className="text-primary hover:underline">
              Browse the Scroll System
            </Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
