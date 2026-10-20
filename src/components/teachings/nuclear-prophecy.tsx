export function NuclearProphecy() {
  const prophecies = [
    {
      title: "Isaiah 17:1",
      year: "760 BC",
      text: `"Damascus shall cease to be a city, and it shall be a ruinous heap."`,
      note: "Damascus is one of the oldest continuously inhabited cities in history.",
    },
    {
      title: "Ezekiel 29",
      year: "595 BC",
      text: `"Egypt will be desolate and waste. No foot of man shall pass through it for forty years."`,
      note: "Linked by some to a future desolation and cleansing period.",
    },
    {
      title: "Amos 1:7–15",
      year: "787 BC",
      text: `Judgment upon Gaza, Ashkelon, Ekron, and Ashdod.`,
      note: "Philistine cities connected with future judgment.",
    },
    {
      title: "Zephaniah 2:1–7",
      year: "630 BC",
      text: `"Gaza shall be forsaken, and Ashkelon a desolation."`,
      note: "Connected to millennial kingdom discussions.",
    },
    {
      title: "Zechariah 9",
      year: "520 BC",
      text: `"The remnant of the Philistines shall perish."`,
      note: "Mentions Gaza, Ekron, Ashdod, and Ashkelon.",
    },
    {
      title: "Zechariah 14:12",
      year: "520 BC",
      text: `"Their flesh shall waste away while they stand on their feet."`,
      note: "Often interpreted symbolically or prophetically in end-times discussions.",
    },
  ];

  return (
    <div className="space-y-12 leading-relaxed text-muted-foreground">
      <div className="grid gap-4 sm:grid-cols-2">
        {prophecies.map((item) => (
          <section
            key={item.title}
            className="rounded-2xl border border-border bg-secondary/35 p-5 sm:p-6"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-serif text-xl font-semibold text-foreground">{item.title}</h2>
              <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs tracking-wide text-primary">
                {item.year}
              </span>
            </div>
            <blockquote className="rounded-r-lg border-l-2 border-primary bg-primary/5 px-4 py-3 font-serif italic text-foreground">
              {item.text}
            </blockquote>
            <p className="mt-4 text-sm leading-7">{item.note}</p>
          </section>
        ))}
      </div>

      <section className="border-t border-border pt-10">
        <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
          Zechariah 14:12 — The Plague
        </h2>
        <div className="mt-5 space-y-6">
          <p>
            “Their flesh shall waste away while they stand on their feet; their eyes shall consume
            away in their sockets; and their tongue shall consume away in their mouth.”
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-secondary/35 p-5">
              <h3 className="font-serif text-lg font-semibold text-primary">Body</h3>
              <p className="mt-2 text-sm leading-7">“Their flesh shall waste away while they stand.”</p>
            </div>
            <div className="rounded-xl border border-border bg-secondary/35 p-5">
              <h3 className="font-serif text-lg font-semibold text-primary">Spirit</h3>
              <p className="mt-2 text-sm leading-7">“Their eyes shall consume away in their sockets.”</p>
            </div>
            <div className="rounded-xl border border-border bg-secondary/35 p-5">
              <h3 className="font-serif text-lg font-semibold text-primary">Soul</h3>
              <p className="mt-2 text-sm leading-7">“Their tongue shall consume away in their mouth.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border pt-10">
        <h2 className="mb-5 font-serif text-2xl font-semibold text-foreground md:text-3xl">
          Ekron Notes
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-secondary/35 p-5">
            <h3 className="font-serif text-lg font-semibold text-primary">2 Kings 1:6</h3>
            <p className="mt-2 text-sm leading-7">Baalzebub (Beelzebub) was the god of Ekron.</p>
          </div>
          <div className="rounded-xl border border-border bg-secondary/35 p-5">
            <h3 className="font-serif text-lg font-semibold text-primary">1 Samuel 5:10</h3>
            <p className="mt-2 text-sm leading-7">
              The Ark of God was brought into Ekron, causing fear among the Philistines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
