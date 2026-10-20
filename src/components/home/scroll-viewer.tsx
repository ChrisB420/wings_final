import { useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import { scrollDocuments, type ScrollDocument } from "@/lib/content/media";

export function ScrollViewer() {
  const [active, setActive] = useState<ScrollDocument>(scrollDocuments[0]);
  const [loading, setLoading] = useState(true);

  function select(doc: ScrollDocument) {
    if (doc.id === active.id) return;
    setActive(doc);
    setLoading(true);
  }

  return (
    <section aria-labelledby="source-scrolls-title" className="mb-14">
      <header className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs tracking-[0.2em] text-primary uppercase">
            The source writings
          </p>
          <h2
            id="source-scrolls-title"
            className="font-serif text-2xl font-semibold text-foreground md:text-3xl"
          >
            Read the Scrolls
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Open a PDF here, or read it on its own and download it for later.
          </p>
        </div>
        <span className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
          {scrollDocuments.length} source writings
        </span>
      </header>

      <div className="grid gap-4 md:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="min-w-0 rounded-2xl border border-border/80 bg-card/80 p-3 shadow-[var(--shadow-border)]">
          <div className="mb-3 flex items-center gap-2 px-2 pt-1 text-primary">
            <FileText aria-hidden="true" className="size-4" />
            <h3 className="text-sm font-semibold">Choose a scroll</h3>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 md:max-h-[620px] md:flex-col md:overflow-x-hidden md:overflow-y-auto">
            {scrollDocuments.map((doc) => (
              <button
                key={doc.id}
                type="button"
                onClick={() => select(doc)}
                aria-pressed={active.id === doc.id}
                className={`min-h-11 min-w-[15rem] shrink-0 rounded-xl px-4 py-3 text-left text-sm font-medium leading-snug transition-colors duration-150 md:min-w-0 ${
                  active.id === doc.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-muted"
                }`}
              >
                {doc.title}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/80 shadow-[var(--shadow-border)]">
          <div className="flex min-h-16 items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
            <h3 className="min-w-0 truncate font-serif text-base font-semibold text-foreground sm:text-lg">
              {active.title}
            </h3>
            <div className="flex shrink-0 items-center gap-1">
              <a
                href={active.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${active.title} in a new tab`}
                className="flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <ExternalLink aria-hidden="true" className="size-5" />
              </a>
              <a
                href={active.file}
                download
                aria-label={`Download ${active.title}`}
                className="flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Download aria-hidden="true" className="size-5" />
              </a>
            </div>
          </div>
          <div className="relative min-h-[380px] flex-1 overflow-hidden bg-secondary/60 md:min-h-[620px]">
            {loading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 px-5 text-center">
                <FileText aria-hidden="true" className="mb-3 size-9 text-primary" />
                <p className="font-serif text-lg text-foreground">{active.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">Opening source scroll…</p>
              </div>
            )}
            <iframe
              key={active.file}
              src={`${active.file}#toolbar=0&navpanes=0`}
              title={`View ${active.title}`}
              className="relative z-0 h-full min-h-[380px] w-full md:min-h-[620px]"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
