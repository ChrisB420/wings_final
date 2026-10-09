"use client"

interface FaithScrollProps {
  /** Heading level for the scroll title: "h1" on its own page, "h2" when embedded. */
  titleAs?: "h1" | "h2"
}

export function FaithScroll({ titleAs: Title = "h1" }: FaithScrollProps) {
  return (
    <section className="py-20 px-4 bg-[#edf0ff]">
      <div className="max-w-4xl mx-auto">
        {/* Main Faith Teaching */}
        <article className="relative rounded-lg p-8 md:p-12 text-[#242743] font-serif leading-relaxed shadow-[0_24px_80px_rgba(47,57,119,0.12)]">
          {/* Parchment texture overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none rounded-lg" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`
               }} 
          />
          
          <Title className="font-serif text-3xl md:text-4xl text-center text-[#5743a8] tracking-wide mb-2">
            FAITH — Wings of the Cherubim
          </Title>
          <h2 className="font-serif text-xl md:text-2xl text-center text-[#5743a8] tracking-wide mb-6">
            {"God's Shekinah Glory"}
          </h2>
          
          <p className="text-center italic mb-8">
            <strong>Theme:</strong> The Seven Lamps, the Living Word, and the Curse of Death
          </p>

          <hr className="border-t border-[#737eae]/25 my-8" />

          {/* The Wings of the Cherubim */}
          <h3 className="font-serif text-xl text-[#5743a8] tracking-wide mt-8 mb-4">
            The Wings of the Cherubim: God's Shekinah Glory
          </h3>
          <p className="mb-4">
            The Menorah is the picture of the symbol of the nation of Israel. It is the subliminal revelation of the fullness of the Creator God, His oneness, His threefold being, and His seven Spirits manifested in light.
          </p>
          <p className="mb-4">
            The rainbow is refracted light. In unity it forms pure light, ascending from God, unified as one. As the six wings of the seraphim surround Him, the central shaft remains the fullness of {"God's"} righteousness.
          </p>
          <p className="mb-4">
            This light is made manifest in the gift of light, descending from the throne of God. The ascending and descending light is a declaration of {"man's"} right of salvation.
          </p>

          <blockquote className="border-l-4 border-[#8a78d8] pl-4 my-6 italic">
            <strong>Revelation Insight Unveiled</strong>
          </blockquote>

          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>1 Kings 6:24-25</strong> — The cherubim of {"Solomon's"} Temple, each touching the other.</li>
            <li><strong>Ezekiel 1:6</strong> — Each living creature with four faces and four wings.</li>
          </ul>

          <hr className="border-t border-[#737eae]/25 my-8" />

          {/* The Living Word */}
          <h3 className="font-serif text-xl text-[#5743a8] tracking-wide mt-8 mb-4">
            The Living Word of God
          </h3>
          <p className="mb-4">
            The Word of God is living, powerful, and sharper than any two-edged sword, piercing even to the division of soul and spirit, joints and marrow. It is a discerner of the thoughts and intents of the heart (Hebrews 4:12).
          </p>
          <p className="mb-4">
            This is the living Word of God. It is the death blow to division. Man can pass into eternal life only through this death-and-life union with his Creator.
          </p>
          <p className="mb-4">
            This narrow way is the result of the curse placed on the earth in Genesis 3:15. The curse is a result of {"man's"} free will to know and choose evil.
          </p>

          <hr className="border-t border-[#737eae]/25 my-8" />

          {/* The Fall */}
          <h3 className="font-serif text-xl text-[#5743a8] tracking-wide mt-8 mb-4">
            The Fall, Authority, and the Curse
          </h3>
          <p className="mb-4">
            In his rebellion, authority was transferred to Lucifer. God declared a curse over man, woman, Satan, and the earth. The Book of Life was closed and sealed by seven seals — the seven Spirits of God.
          </p>
          <p className="mb-4">
            No one could open it until the Lamb was found worthy. The seals represent judgment restrained by mercy, time bound within {"God's"} eternal sabbath, and the coming final judgment.
          </p>

          <hr className="border-t border-[#737eae]/25 my-8" />

          {/* The Condition of Man */}
          <h3 className="font-serif text-xl text-[#5743a8] tracking-wide mt-8 mb-4">
            The Condition of Man
          </h3>
          <p className="mb-4">
            As a result of this curse, all men are born spiritually dead. The eyes of the spiritual heart are blind. The question {"\"What will happen to me when I die?\""} lingers deep within every soul.
          </p>
          <p className="mb-4">
            Religion, created by man to please God, cannot remove the curse. In spiritual death, man has no awareness of his need for salvation.
          </p>

          <hr className="border-t border-[#737eae]/25 my-8" />

          {/* The Pursuit of Vanity */}
          <h3 className="font-serif text-xl text-[#5743a8] tracking-wide mt-8 mb-4">
            The Pursuit of Vanity
          </h3>
          <p className="mb-4">
            Man passes through life seeking pleasure, wealth, and recognition, yet peace is never found. Joy is temporary. The question of death is never removed.
          </p>

          <hr className="border-t border-[#737eae]/25 my-8" />

          {/* The Call of Light */}
          <h3 className="font-serif text-xl text-[#5743a8] tracking-wide mt-8 mb-4">
            The Call of Light
          </h3>
          <div className="text-center font-semibold text-lg my-6">
            <p>The descending light from God is mercy.</p>
            <p>The ascending light from man is faith.</p>
            <p className="text-[#5743a8] mt-2"><strong>Where they meet, salvation is revealed.</strong></p>
          </div>
          <p className="mb-4">
            This is the message of <strong>Wings of the Cherubim</strong>: the light still shines, the seals will be opened by the Lamb, and the way back to life remains open through faith.
          </p>

          <hr className="border-t border-[#737eae]/25 my-8" />

          {/* Prayer */}
          <h3 className="font-serif text-xl text-[#5743a8] tracking-wide mt-8 mb-4">
            Scroll-Sealing Prayer
          </h3>
          <div className="italic bg-white/60 p-6 rounded-lg">
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
          <div className="bg-[#e2eaff] border-l-8 border-[#6552c7] p-5 my-8 text-center rounded-lg">
            <p className="italic font-bold text-[#2e3674]">
              <strong>Zechariah 4:6</strong> — {"\"Not by might, nor by power, but by my Spirit, says the LORD of hosts.\""}
            </p>
          </div>

          {/* Video */}
          <div className="relative w-full pt-[56.25%] my-8">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
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
