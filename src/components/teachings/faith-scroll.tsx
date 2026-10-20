interface FaithScrollProps {
  /** Heading level for the scroll title: "h1" on its own page, "h2" when embedded. */
  titleAs?: "h1" | "h2"
  showTitle?: boolean
}

export function FaithScroll({
  titleAs: Title = "h1",
  showTitle = true,
}: FaithScrollProps) {
  return (
    <section className={showTitle ? "px-4 py-14 md:px-6 md:py-20" : ""}>
      <div className={showTitle ? "mx-auto max-w-4xl" : ""}>
        <article
          className={
            showTitle
              ? "rounded-3xl border border-border/80 bg-card/75 px-6 py-8 leading-relaxed text-muted-foreground shadow-[var(--shadow-border)] backdrop-blur-sm md:px-12 md:py-12"
              : "leading-relaxed text-muted-foreground"
          }
        >
          {showTitle && (
            <>
              <Title className="text-center font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                FAITH — Wings of the Cherubim
              </Title>
              <h2 className="mb-6 mt-3 text-center font-serif text-xl text-primary md:text-2xl">
                {"God's Shekinah Glory"}
              </h2>
            </>
          )}
          
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            <strong className="text-foreground">Theme:</strong> The Seven Lamps, the Living Word,
            and the Curse of Death
          </p>

          <hr className="my-8 border-border" />

          {/* The Wings of the Cherubim */}
          <h3 className="mb-4 mt-8 font-serif text-xl font-semibold text-primary">
            The Wings of the Cherubim: God's Shekinah Glory
          </h3>
          <p className="mb-4 leading-8">
            The Menorah is the picture of the symbol of the nation of Israel. It is the subliminal revelation of the fullness of the Creator God, His oneness, His threefold being, and His seven Spirits manifested in light.
          </p>
          <p className="mb-4 leading-8">
            The rainbow is refracted light. In unity it forms pure light, ascending from God, unified as one. As the six wings of the seraphim surround Him, the central shaft remains the fullness of {"God's"} righteousness.
          </p>
          <p className="mb-4 leading-8">
            This light is made manifest in the gift of light, descending from the throne of God. The ascending and descending light is a declaration of {"man's"} right of salvation.
          </p>

          <blockquote className="my-6 rounded-r-xl border-l-2 border-primary bg-primary/5 px-5 py-4 font-serif italic text-foreground">
            Revelation Insight Unveiled
          </blockquote>

          <ul className="mb-6 ml-6 list-disc space-y-2 leading-7 marker:text-primary">
            <li><strong className="text-foreground">1 Kings 6:24-25</strong> — The cherubim of {"Solomon's"} Temple, each touching the other.</li>
            <li><strong className="text-foreground">Ezekiel 1:6</strong> — Each living creature with four faces and four wings.</li>
          </ul>

          <hr className="my-8 border-border" />

          {/* The Living Word */}
          <h3 className="mb-4 mt-8 font-serif text-xl font-semibold text-primary">
            The Living Word of God
          </h3>
          <p className="mb-4 leading-8">
            The Word of God is living, powerful, and sharper than any two-edged sword, piercing even to the division of soul and spirit, joints and marrow. It is a discerner of the thoughts and intents of the heart (Hebrews 4:12).
          </p>
          <p className="mb-4 leading-8">
            This is the living Word of God. It is the death blow to division. Man can pass into eternal life only through this death-and-life union with his Creator.
          </p>
          <p className="mb-4 leading-8">
            This narrow way is the result of the curse placed on the earth in Genesis 3:15. The curse is a result of {"man's"} free will to know and choose evil.
          </p>

          <hr className="my-8 border-border" />

          {/* The Fall */}
          <h3 className="mb-4 mt-8 font-serif text-xl font-semibold text-primary">
            The Fall, Authority, and the Curse
          </h3>
          <p className="mb-4 leading-8">
            In his rebellion, authority was transferred to Lucifer. God declared a curse over man, woman, Satan, and the earth. The Book of Life was closed and sealed by seven seals — the seven Spirits of God.
          </p>
          <p className="mb-4 leading-8">
            No one could open it until the Lamb was found worthy. The seals represent judgment restrained by mercy, time bound within {"God's"} eternal sabbath, and the coming final judgment.
          </p>

          <hr className="my-8 border-border" />

          {/* The Condition of Man */}
          <h3 className="mb-4 mt-8 font-serif text-xl font-semibold text-primary">
            The Condition of Man
          </h3>
          <p className="mb-4 leading-8">
            As a result of this curse, all men are born spiritually dead. The eyes of the spiritual heart are blind. The question {"\"What will happen to me when I die?\""} lingers deep within every soul.
          </p>
          <p className="mb-4 leading-8">
            Religion, created by man to please God, cannot remove the curse. In spiritual death, man has no awareness of his need for salvation.
          </p>

          <hr className="my-8 border-border" />

          {/* The Pursuit of Vanity */}
          <h3 className="mb-4 mt-8 font-serif text-xl font-semibold text-primary">
            The Pursuit of Vanity
          </h3>
          <p className="mb-4 leading-8">
            Man passes through life seeking pleasure, wealth, and recognition, yet peace is never found. Joy is temporary. The question of death is never removed.
          </p>

          <hr className="my-8 border-border" />

          {/* The Call of Light */}
          <h3 className="mb-4 mt-8 font-serif text-xl font-semibold text-primary">
            The Call of Light
          </h3>
          <div className="my-6 space-y-2 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-6 text-center font-serif text-base font-medium text-foreground md:text-lg">
            <p>The descending light from God is mercy.</p>
            <p>The ascending light from man is faith.</p>
            <p className="mt-3 text-primary"><strong>Where they meet, salvation is revealed.</strong></p>
          </div>
          <p className="mb-4 leading-8">
            This is the message of <strong>Wings of the Cherubim</strong>: the light still shines, the seals will be opened by the Lamb, and the way back to life remains open through faith.
          </p>

          <hr className="my-8 border-border" />

          {/* Prayer */}
          <h3 className="mb-4 mt-8 font-serif text-xl font-semibold text-primary">
            Scroll-Sealing Prayer
          </h3>
          <div className="rounded-2xl border border-border bg-secondary/45 p-6 font-serif italic leading-8 text-muted-foreground md:p-8">
            <p>Father of Light,</p>
            <p>Creator of the heavens and the earth,</p>
            <p>We receive the descending light of Your mercy</p>
            <p>And lift the ascending light of faith.</p>
            <br />
            <p>Let the seals be opened by the Lamb,</p>
            <p>Let the eyes of the blind be awakened,</p>
            <p>Let the curse be broken by truth.</p>
            <br />
            <p>Cover this work with the Wings of the Cherubim.</p>
            <p>Let Your Shekinah Glory rest upon it.</p>
            <p>Lead many from darkness into eternal life.</p>
            <br />
            <p><strong>Amen.</strong></p>
          </div>

          {/* Key Verse */}
          <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
            <p className="font-serif italic leading-7 text-foreground">
              <strong>Zechariah 4:6</strong> — {"\"Not by might, nor by power, but by my Spirit, says the LORD of hosts.\""}
            </p>
          </div>

          {/* Video */}
          <div className="relative my-8 aspect-video overflow-hidden rounded-2xl border border-border bg-background">
            <iframe
              className="absolute inset-0 size-full"
              src="https://www.youtube-nocookie.com/embed/pywGUjvyBjA"
              title="Wings of the Cherubim Teaching"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </article>
      </div>
    </section>
  )
}
