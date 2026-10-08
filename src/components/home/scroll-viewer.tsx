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
    <div className="mb-12 grid gap-4 md:grid-cols-4">
      <div className="rounded-2xl bg-card p-4 shadow-[var(--shadow-border)]">
        <div className="mb-4 flex items-center gap-2 text-primary">
          <FileText className="size-5" aria-hidden="true" />
          <h3 className="font-medium">Sacred Scrolls</h3>
        </div>
        <div className="space-y-2">
          {scrollDocuments.map((doc) => (
            <button
              key={doc.id}
              type="button"
              onClick={() => select(doc)}
              aria-pressed={active.id === doc.id}
              className={`w-full min-h-11 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors duration-150 ${
                active.id === doc.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {doc.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-border)] md:col-span-3">
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
          <h3 className="truncate font-medium text-primary">{active.title}</h3>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={active.file}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${active.title} in a new tab`}
              className="flex size-11 items-center justify-center text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="size-5" />
            </a>
            <a
              href={active.file}
              download
              aria-label={`Download ${active.title}`}
              className="flex size-11 items-center justify-center text-muted-foreground hover:text-primary"
            >
              <Download className="size-5" />
            </a>
          </div>
        </div>
        <div className="relative min-h-[420px] flex-1 overflow-hidden bg-secondary md:min-h-[620px]">
          {loading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/50">
              <FileText className="mb-3 size-10 text-primary" />
              <p className="font-serif text-xl text-primary">{active.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">Loading scroll…</p>
            </div>
          )}
          <iframe
            key={active.file}
            src={`${active.file}#toolbar=0&navpanes=0`}
            title={`View ${active.title}`}
            className="relative z-0 h-full min-h-[420px] w-full md:min-h-[620px]"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
