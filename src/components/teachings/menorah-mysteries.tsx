export function MenorahMysteries() {
  const sections = [
    {
      title: "1. The Menorah as Divine Light",
      body: [
        "The Menorah is not man-made symbolism alone, but a divine structure revealed to Moses. It represents God’s light entering a fallen world.",
        "It is one cast piece — showing unity, not fragmentation — and reflects the fullness of divine presence.",
      ],
    },
    {
      title: "2. Structure of the Lampstand",
      body: [
        "Three branches extend left, three extend right, and one central shaft stands in the middle. This reflects balance, order, and divine symmetry.",
        "It symbolizes heaven meeting earth, and light flowing into darkness.",
      ],
    },
    {
      title: "3. The Seven Spirits of God",
      body: [
        "The Menorah reflects the sevenfold expression of God’s Spirit — divine wisdom, understanding, counsel, and power.",
        "It is a living revelation of how God interacts with creation.",
      ],
    },
    {
      title: "4. Light and Redemption",
      body: [
        "The Menorah connects to redemption through Christ — light overcoming darkness, and divine order restoring fallen creation.",
      ],
    },
    {
      title: "5. Symbolism of Israel and Prophecy",
      body: [
        "The Menorah is also tied to Israel’s identity, restoration, and prophetic rebirth. It reflects the unfolding of history under divine timing.",
      ],
    },
    {
      title: "6. Heaven and Earth Connection",
      body: [
        "Cherubim, palm imagery, and the Menorah together reflect a unified spiritual system — heaven touching earth through divine order.",
      ],
    },
    {
      title: "7. Final Revelation",
      body: [
        "The Menorah reveals God as light, truth, and restoration. Through grace, humanity is brought back into alignment with divine order.",
      ],
    },
  ];

  return (
    <article className="space-y-12 leading-relaxed text-muted-foreground">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="mb-2 font-serif text-xl font-semibold text-primary">{section.title}</h2>
          {section.body.map((p) => (
            <p key={p} className="mt-2 first:mt-0">
              {p}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
