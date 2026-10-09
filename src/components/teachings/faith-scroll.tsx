"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaithScrollProps {
  /** Heading level for the scroll title: "h1" on its own page, "h2" when embedded. */
  titleAs?: "h1" | "h2"
}

export function FaithScroll({ titleAs: Title = "h1" }: FaithScrollProps) {
  const [haitiOpen, setHaitiOpen] = useState(false)

  return (
    <section className="py-20 px-4 bg-[#f5ecd9]">
      <div className="max-w-4xl mx-auto">
        {/* Main Faith Teaching */}
        <article className="relative rounded-lg p-8 md:p-12 text-[#2e2a24] font-serif leading-relaxed">
          {/* Parchment texture overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none rounded-lg" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`
               }} 
          />
          
          <Title className="font-serif text-3xl md:text-4xl text-center text-[#c9a24d] tracking-wide mb-2">
            FAITH — Wings of the Cherubim
          </Title>
          <h2 className="font-serif text-xl md:text-2xl text-center text-[#c9a24d] tracking-wide mb-6">
            {"God's Shekinah Glory"}
          </h2>
          
          <p className="text-center italic mb-8">
            <strong>Theme:</strong> The Seven Lamps, the Living Word, and the Curse of Death
          </p>

          <hr className="border-t border-[#2e2a24]/20 my-8" />

          {/* The Wings of the Cherubim */}
          <h3 className="font-serif text-xl text-[#c9a24d] tracking-wide mt-8 mb-4">
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

          <blockquote className="border-l-4 border-[#c9a24d] pl-4 my-6 italic">
            <strong>Revelation Insight Unveiled</strong>
          </blockquote>

          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>1 Kings 6:24-25</strong> — The cherubim of {"Solomon's"} Temple, each touching the other.</li>
            <li><strong>Ezekiel 1:6</strong> — Each living creature with four faces and four wings.</li>
          </ul>

          <hr className="border-t border-[#2e2a24]/20 my-8" />

          {/* The Living Word */}
          <h3 className="font-serif text-xl text-[#c9a24d] tracking-wide mt-8 mb-4">
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

          <hr className="border-t border-[#2e2a24]/20 my-8" />

          {/* The Fall */}
          <h3 className="font-serif text-xl text-[#c9a24d] tracking-wide mt-8 mb-4">
            The Fall, Authority, and the Curse
          </h3>
          <p className="mb-4">
            In his rebellion, authority was transferred to Lucifer. God declared a curse over man, woman, Satan, and the earth. The Book of Life was closed and sealed by seven seals — the seven Spirits of God.
          </p>
          <p className="mb-4">
            No one could open it until the Lamb was found worthy. The seals represent judgment restrained by mercy, time bound within {"God's"} eternal sabbath, and the coming final judgment.
          </p>

          <hr className="border-t border-[#2e2a24]/20 my-8" />

          {/* The Condition of Man */}
          <h3 className="font-serif text-xl text-[#c9a24d] tracking-wide mt-8 mb-4">
            The Condition of Man
          </h3>
          <p className="mb-4">
            As a result of this curse, all men are born spiritually dead. The eyes of the spiritual heart are blind. The question {"\"What will happen to me when I die?\""} lingers deep within every soul.
          </p>
          <p className="mb-4">
            Religion, created by man to please God, cannot remove the curse. In spiritual death, man has no awareness of his need for salvation.
          </p>

          <hr className="border-t border-[#2e2a24]/20 my-8" />

          {/* The Pursuit of Vanity */}
          <h3 className="font-serif text-xl text-[#c9a24d] tracking-wide mt-8 mb-4">
            The Pursuit of Vanity
          </h3>
          <p className="mb-4">
            Man passes through life seeking pleasure, wealth, and recognition, yet peace is never found. Joy is temporary. The question of death is never removed.
          </p>

          <hr className="border-t border-[#2e2a24]/20 my-8" />

          {/* The Call of Light */}
          <h3 className="font-serif text-xl text-[#c9a24d] tracking-wide mt-8 mb-4">
            The Call of Light
          </h3>
          <div className="text-center font-semibold text-lg my-6">
            <p>The descending light from God is mercy.</p>
            <p>The ascending light from man is faith.</p>
            <p className="text-[#c9a24d] mt-2"><strong>Where they meet, salvation is revealed.</strong></p>
          </div>
          <p className="mb-4">
            This is the message of <strong>Wings of the Cherubim</strong>: the light still shines, the seals will be opened by the Lamb, and the way back to life remains open through faith.
          </p>

          <hr className="border-t border-[#2e2a24]/20 my-8" />

          {/* Prayer */}
          <h3 className="font-serif text-xl text-[#c9a24d] tracking-wide mt-8 mb-4">
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
          <div className="bg-[#e6f0ff] border-l-8 border-[#1e3a8a] p-5 my-8 text-center rounded-lg">
            <p className="italic font-bold text-[#1e3a8a]">
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

          {/* Haitian Flag Revelation - Collapsible */}
          <div className="my-8 border-2 border-[#c9a24d] rounded-xl overflow-hidden">
            <button
              id="haitian-flag-revelation"
              onClick={() => setHaitiOpen(!haitiOpen)}
              className="flex w-full items-center justify-between bg-primary-foreground p-4 text-left font-serif font-bold tracking-wide text-primary"
            >
              <span>Haitian Flag Revelation + Zechariah + Revelation</span>
              {haitiOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            {haitiOpen && (
              <div className="p-6">
                {/* Haiti Bible Section */}
                <div className="text-center py-8 px-4 bg-gradient-to-b from-[#1a0033] to-[#05000c] text-[#f5f5f5] rounded-lg mb-8">
                  <h2 className="text-2xl md:text-3xl tracking-widest uppercase mb-6">
                    The Haitian Flag in The Bible
                  </h2>
                  <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4 opacity-95">
                    The line by line wording of Zechariah chapter 4, connecting into Revelation chapter 11 verses 3, 4, and 5, is unveiled.
                  </p>
                  <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4 opacity-95">
                    These line by line words are brought to life as they are married into the four square inset of {"today's"} Haitian flag.
                  </p>
                  <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4 opacity-95">
                    The tapestry of light is revealed. The Kingdom of God coming to the earth is visually seen, along with the fiery judgment throne of God.
                  </p>
                  <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-95">
                    The colors of purple and scarlet — the meeting of God and man — have birthed the Millennial Kingdom of God on earth.
                  </p>
                </div>

                {/* Zechariah Section */}
                <div className="bg-[#fdfdfb] border-2 border-[#c9b580] rounded-xl p-6 md:p-10 mb-8">
                  <h2 className="text-center text-[#8b6f47] text-2xl md:text-3xl mb-8">Zechariah Chapter 4</h2>
                  
                  <div className="space-y-4">
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">1:</span>
                      {"\"and the Angel who talked with me came back and walked with me, as a man is wakened out of his sleep.\""}
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">2:</span>
                      {"\"and he said to me, What do you see? And I said, I have looked, and behold a candlestick all of gold, with a bowl on the top of it, and seven lamps on it, and seven mouths to the seven lamps which are on the top of it.\""}
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">3:</span>
                      {"\"And Two Olive Trees by it, one on the right side of the bowl and the other on it's left side.\""}
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">4:</span>
                      So I answered and spoke to the Angel who talked with me, saying, what are these my Lord?
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">5:</span>
                      Then the Angel who talked with me answered and said to me, Do you not know what these are? And I said, No, my Lord, I do not know.
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">6:</span>
                      Then he said to me, This is The Word of The Lord To Zerubbabel, saying, not by power nor by might, but by my spirit, says The Lord of hosts.
                    </p>
                  </div>

                  <div className="bg-[#f5f0e6] p-6 rounded-lg text-center text-xl my-8 border border-[#c9b580]">
                    <strong>Not by might, nor by power, but by my spirit, saith the LORD of hosts.</strong>
                    <br />
                    <span className="text-base">(Zechariah 4:6)</span>
                  </div>

                  <div className="space-y-4">
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">7:</span>
                      Who are you, O great Mountain? Before Zerubbabel you shall become like a plain; and He shall bring forth the headstone of equity and of mercy.
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">8:</span>
                      Moreover, The Word of the Lord came to me saying,
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">9:</span>
                      The hands of Zerubbabel have laid the foundations of this house; His hands shall also finish it; and you shall know that the Lord of Hosts has sent me to you.
                    </p>
                  </div>
                </div>

                {/* Zechariah 4:10-14 + Revelation */}
                <div className="bg-[#fdfdfb] border-2 border-[#c9b580] rounded-xl p-6 md:p-10 mb-8">
                  <h2 className="text-center text-[#8b6f47] text-2xl md:text-3xl mb-4">
                    Zechariah Chapter 4 (Continued)
                  </h2>
                  <h3 className="text-center text-[#6b552f] text-xl mb-8">
                    Connection to Revelation 11
                  </h3>

                  <div className="space-y-4 mb-8">
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">10:</span>
                      {"\"For who has despised the day of small things? For they shall look and see The Plummet in the hands of Zerubbabel. These are The Seven Eyes of The Lord, which look over the whole earth.\""}
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">11:</span>
                      Then I answered and said to him, What are these Two Olive Trees on the right side of the candlestick and on {"it's"} left side?
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">12:</span>
                      And I answered the second time and said to him, What are these Two Olive Branches which are beside the Two Golden Pipes which pour the Golden Oil out of themselves?
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">13:</span>
                      And he said to me, Do you not know what these are? And I said, no my Lord.
                    </p>
                    <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                      <span className="font-bold text-[#4a3c1e] mr-2">14:</span>
                      Then said he, These are The Two Annointed Ones who stand by the Lord of the whole earth.
                    </p>
                  </div>

                  {/* Haiti Connection */}
                  <div className="bg-[#f0f8ff] p-6 rounded-lg border-2 border-[#0047ab] my-8">
                    <h3 className="text-center text-[#d21034] text-xl mb-4">
                      The Haitian Flag in the Bible?
                    </h3>
                    <p className="mb-4">
                      Some interpretations, particularly in certain prophetic or symbolic teachings, draw a connection between the imagery of the <strong>two olive trees</strong> and <strong>lampstands</strong> in Scripture and the design of the Haitian flag (blue and red vertical stripes with a central white panel and coat of arms featuring a palm tree).
                    </p>
                    <p className="mb-4">Revelation 11 explicitly links back to Zechariah 4:</p>
                    
                    <div className="space-y-3 my-4">
                      <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                        <span className="font-bold text-[#4a3c1e] mr-2">Rev 11:3:</span>
                        {"\"Then I will give power to my Two Witnesses, and they shall prophesy a thousand and two hundred and three score days, clothed in sack cloth.\""}
                      </p>
                      <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                        <span className="font-bold text-[#4a3c1e] mr-2">4:</span>
                        {"\"These are The Two Olive Trees and the Two Candlesticks standing before the Lord of the earth.\""}
                      </p>
                      <p className="pl-5 border-l-4 border-[#c9b580] italic text-[#444]">
                        <span className="font-bold text-[#4a3c1e] mr-2">5:</span>
                        {"\"And if any man desires to harm them, fire will consume their enemies; and if any man desires to harm them, he must in this manner be killed.\""}
                      </p>
                    </div>

                    <p>
                      While the Bible does not mention Haiti or any modern flag, some see prophetic significance in nations or symbols aligning with these ancient visions—viewing the two colors and central tree as echoing the two anointed ones sustaining {"God's"} light.
                    </p>
                  </div>

                  <div className="bg-[#f5f0e6] p-6 rounded-lg text-center text-xl border border-[#c9b580]">
                    <strong>These are the two olive trees, and the two candlesticks standing before the God of the earth.</strong>
                    <br />
                    <span className="text-base">(Revelation 11:4)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}
