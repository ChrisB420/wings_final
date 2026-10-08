import { useCallback, useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { outreachMedia } from "@/lib/content/media";

const ROTATE_MS = 6000;
const RESUME_AFTER_MS = 10000;

export function MediaShowcase() {
  const total = outreachMedia.length;
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interactions, setInteractions] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setLoading(true);
    setError(false);
  }, []);

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setTimeout(() => goTo((active + 1) % total), ROTATE_MS);
    return () => clearTimeout(id);
  }, [paused, active, total, goTo]);

  useEffect(() => {
    if (!paused) return;
    const id = setTimeout(() => setPaused(false), RESUME_AFTER_MS);
    return () => clearTimeout(id);
  }, [paused, interactions]);

  function select(index: number) {
    goTo(index);
    setPaused(true);
    setInteractions((n) => n + 1);
  }

  const media = outreachMedia[active];
  if (!media) return null;

  return (
    <div className="mb-10 overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-border)]">
      <div className="relative h-[280px] w-full bg-secondary md:h-[560px]">
        {!error ? (
          <img
            key={`${media.src}-${retryKey}`}
            src={media.src}
            alt={media.alt}
            className="media size-full object-cover"
            onLoad={() => setLoading(false)}
            onError={() => {
              setError(true);
              setLoading(false);
            }}
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center">
            <AlertCircle className="mb-4 size-10 text-primary" />
            <p className="mb-4 text-muted-foreground">Failed to load media</p>
            <Button
              variant="outline"
              size="sm"
              className="min-h-11"
              onClick={() => {
                setRetryKey((k) => k + 1);
                setError(false);
                setLoading(true);
              }}
            >
              Retry
            </Button>
          </div>
        )}

        {loading && !error && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/40">
            <div className="size-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute bottom-6 left-6">
          <p className="mb-1 text-xs tracking-[0.2em] text-primary uppercase">Live Outreach</p>
          <h2 className="font-serif text-2xl text-foreground md:text-4xl">Across the Nations</h2>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 bg-secondary p-2 md:grid-cols-6">
        {outreachMedia.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => select(index)}
            aria-pressed={active === index}
            aria-label={`View media ${index + 1}: ${item.alt}`}
            className={`relative h-16 overflow-hidden rounded-md transition-[box-shadow] duration-150 md:h-20 ${
              active === index
                ? "shadow-[var(--shadow-border-hover)]"
                : "shadow-[var(--shadow-border)]"
            }`}
          >
            <img src={item.src} alt={item.alt} className="media size-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
