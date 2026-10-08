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
        content: "Read or download the Wings of the Cherubim scrolls as PDFs — free to share.",
      },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Resources"
        title="Scroll Library"
        description="Every scroll in one place. Read online, download, and share freely."
      />
      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl space-y-4">
          {scrollDocuments.map((doc) => (
            <div
              key={doc.id}
              className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] sm:flex-row sm:items-center"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="size-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-xl">{doc.title}</h2>
                <p className="text-sm text-muted-foreground">
                  PDF{doc.description ? ` · ${doc.description}` : ""}
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm text-primary shadow-[var(--shadow-border)]"
                >
                  <ExternalLink className="size-4" /> Read
                </a>
                <a
                  href={doc.file}
                  download
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm text-primary-foreground"
                >
                  <Download className="size-4" /> Download
                </a>
              </div>
            </div>
          ))}
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
