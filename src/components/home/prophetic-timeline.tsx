import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  era: string;
  title: string;
  reference: string;
  text: string;
}

const entries: TimelineEntry[] = [
  {
    era: "The Promise",
    title: "A Covenant to a People",
    reference: "Genesis 12:1-3 · 17:7",
    text: "God calls a people to Himself and binds Himself to them by an everlasting covenant — the first thread in a plan stretching to the return of Christ.",
  },
  {
    era: "The Warning",
    title: "Scattered, and Gathered Again",
    reference: "Ezekiel 36:24 · Isaiah 11:11-12",
    text: "The prophets speak of scattering among the nations — and, just as plainly, of a second gathering back to the land in the last days.",
  },
  {
    era: "The Rebirth",
    title: "A Nation Reborn",
    reference: "Isaiah 66:8",
    text: "\"Shall a nation be born at once?\" In 1948, after nearly two thousand years, a nation was. Widely taught as one of the clearest prophetic markers of this generation.",
  },
  {
    era: "The Signs",
    title: "Wars, Knowledge, and Speed",
    reference: "Matthew 24:6-8 · Daniel 12:4",
    text: "Wars and rumors of wars, and knowledge — and travel — increasing beyond anything prior generations could imagine. Signs meant not to alarm, but to prepare.",
  },
  {
    era: "The Days of Noah",
    title: "Normalized Departure from God",
    reference: "Matthew 24:37-39",
    text: "Life carrying on as though nothing were coming, even as the hour draws near. A pattern the Lord Himself named as the marker of His return.",
  },
  {
    era: "The Commission",
    title: "The Gospel to Every Nation",
    reference: "Matthew 24:14",
    text: "\"This gospel of the kingdom shall be preached in all the world... and then shall the end come.\" Outreach is not incidental to the last days — it is the appointed condition for them.",
  },
  {
    era: "The Blessed Hope",
    title: "Looking for His Appearing",
    reference: "Titus 2:13 · Revelation 22:20",
    text: "Every scroll, every outreach, every testimony on this site points to one hope: \"Even so, come, Lord Jesus.\"",
  },
];

function useRevealed() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function TimelineRow({ entry, index }: { entry: TimelineEntry; index: number }) {
  const { ref, visible } = useRevealed();
  const fromLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] items-start gap-4 md:gap-8">
      <div
        className={
          fromLeft
            ? `hidden text-right transition-all duration-700 ease-out md:block ${
                visible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
              }`
            : "hidden md:block"
        }
      >
        {fromLeft && <Card entry={entry} align="right" />}
      </div>

      <div className="flex flex-col items-center">
        <span
          className={`z-10 flex size-4 shrink-0 rounded-full border-2 border-primary bg-background transition-all duration-500 ${
            visible ? "scale-100 bg-primary" : "scale-75"
          }`}
        />
        <span className="mt-1 w-px flex-1 bg-border" />
      </div>

      <div
        className={
          !fromLeft
            ? `hidden text-left transition-all duration-700 ease-out md:block ${
                visible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`
            : "hidden md:block"
        }
      >
        {!fromLeft && <Card entry={entry} align="left" />}
      </div>

      <div className={`col-span-3 -mt-6 md:hidden ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        <Card entry={entry} align="left" />
      </div>
    </div>
  );
}

function Card({ entry, align }: { entry: TimelineEntry; align: "left" | "right" }) {
  return (
    <div className={`inline-block max-w-md rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] ${align === "right" ? "text-right" : "text-left"}`}>
      <p className="mb-1 text-xs font-semibold tracking-[0.18em] text-primary uppercase">{entry.era}</p>
      <h3 className="mb-1 font-serif text-lg font-semibold">{entry.title}</h3>
      <p className="mb-2 text-xs text-primary/70">{entry.reference}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{entry.text}</p>
    </div>
  );
}

export function PropheticTimeline() {
  return (
    <section id="prophetic-timeline" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs tracking-[0.22em] text-primary uppercase">Before He Returns</p>
          <h2 className="font-serif text-3xl font-semibold md:text-5xl">
            The Road to <span className="text-primary">His Appearing</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Scripture traces a single unbroken line from the covenant to the return of Christ.
            Scroll to walk it.
          </p>
        </div>
        <div className="space-y-2 md:space-y-0">
          {entries.map((entry, i) => (
            <TimelineRow key={entry.title} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
