import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryPhotos, galleryPlaces, type GalleryPlace } from "@/lib/content/gallery";

type Filter = "All" | GalleryPlace;

export function PhotoGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);
  const photos = filter === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.place === filter);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {(["All", ...galleryPlaces] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f);
              setOpen(null);
            }}
            aria-pressed={filter === f}
            className={`min-h-11 rounded-full px-5 text-sm tracking-wide transition-colors duration-150 ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "text-foreground/80 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Open photo: ${photo.caption}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="media size-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 text-left text-xs text-foreground/90">
              {photo.caption}
            </span>
          </button>
        ))}
      </div>
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 flex size-11 items-center justify-center text-foreground/80 hover:text-foreground"
          >
            <X className="size-8" />
          </button>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photo"
                className="absolute left-2 flex size-11 items-center justify-center text-foreground/80 md:left-6"
              >
                <ChevronLeft className="size-10" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photo"
                className="absolute right-2 flex size-11 items-center justify-center text-foreground/80 md:right-6"
              >
                <ChevronRight className="size-10" />
              </button>
            </>
          )}
          <div className="relative h-[75vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} className="size-full object-contain" />
          </div>
          <p className="mt-4 text-center text-sm text-foreground/80">{current.caption}</p>
        </div>
      )}
    </>
  );
}
