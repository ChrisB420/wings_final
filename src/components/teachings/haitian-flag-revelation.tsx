import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function HaitianFlagRevelation() {
  const [haitiOpen, setHaitiOpen] = useState(false);

  return (
    <div className="my-12 overflow-hidden rounded-2xl border-2 border-[#8a78d8] bg-card shadow-[0_18px_50px_rgba(58,49,125,0.16)]">
      <button
        id="haitian-flag-revelation"
        type="button"
        onClick={() => setHaitiOpen((open) => !open)}
        aria-expanded={haitiOpen}
        aria-controls="haitian-flag-revelation-content"
        className="flex min-h-14 w-full items-center justify-between gap-4 bg-primary-foreground px-5 py-4 text-left font-serif font-bold tracking-wide text-primary md:px-7"
      >
        <span>Haitian Flag Revelation + Zechariah + Revelation</span>
        {haitiOpen ? (
          <ChevronUp className="size-5 shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="size-5 shrink-0" aria-hidden="true" />
        )}
      </button>

      {haitiOpen && (
        <div id="haitian-flag-revelation-content" className="p-4 md:p-8">
          <div className="mb-8 rounded-xl bg-gradient-to-b from-[#21154d] to-[#08152f] px-5 py-8 text-center text-[#f5f5ff] md:px-8">
            <h3 className="mb-6 text-2xl tracking-wide uppercase md:text-3xl">
              The Haitian Flag in The Bible
            </h3>
            <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed opacity-95">
              The line by line wording of Zechariah chapter 4, connecting into Revelation chapter 11
              verses 3, 4, and 5, is unveiled.
            </p>
            <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed opacity-95">
              These line by line words are brought to life as they are married into the four square
              inset of today&apos;s Haitian flag.
            </p>
            <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed opacity-95">
              The tapestry of light is revealed. The Kingdom of God coming to the earth is visually
              seen, along with the fiery judgment throne of God.
            </p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed opacity-95">
              The colors of purple and scarlet — the meeting of God and man — have birthed the
              Millennial Kingdom of God on earth.
            </p>
          </div>

          <div className="mb-8 rounded-xl border-2 border-[#c9c5eb] bg-[#f9f9ff] p-6 md:p-10">
            <h3 className="mb-8 text-center text-2xl text-[#49398f] md:text-3xl">
              Zechariah Chapter 4
            </h3>
            <div className="space-y-4">
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">1:</span>
                &quot;and the Angel who talked with me came back and walked with me, as a man is
                wakened out of his sleep.&quot;
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">2:</span>
                &quot;and he said to me, What do you see? And I said, I have looked, and behold a
                candlestick all of gold, with a bowl on the top of it, and seven lamps on it, and
                seven mouths to the seven lamps which are on the top of it.&quot;
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">3:</span>
                &quot;And Two Olive Trees by it, one on the right side of the bowl and the other on
                its left side.&quot;
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">4:</span>
                So I answered and spoke to the Angel who talked with me, saying, what are these my
                Lord?
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">5:</span>
                Then the Angel who talked with me answered and said to me, Do you not know what
                these are? And I said, No, my Lord, I do not know.
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">6:</span>
                Then he said to me, This is The Word of The Lord To Zerubbabel, saying, not by power
                nor by might, but by my spirit, says The Lord of hosts.
              </p>
            </div>

            <div className="my-8 rounded-lg border border-[#c9b580] bg-[#f5f0e6] p-6 text-center text-xl">
              <strong>
                Not by might, nor by power, but by my spirit, saith the LORD of hosts.
              </strong>
              <br />
              <span className="text-base">(Zechariah 4:6)</span>
            </div>

            <div className="space-y-4">
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">7:</span>
                Who are you, O great Mountain? Before Zerubbabel you shall become like a plain; and
                He shall bring forth the headstone of equity and of mercy.
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">8:</span>
                Moreover, The Word of the Lord came to me saying,
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">9:</span>
                The hands of Zerubbabel have laid the foundations of this house; His hands shall
                also finish it; and you shall know that the Lord of Hosts has sent me to you.
              </p>
            </div>
          </div>

          <div className="mb-8 rounded-xl border-2 border-[#c9b580] bg-[#fdfdfb] p-6 md:p-10">
            <h3 className="mb-4 text-center text-2xl text-[#8b6f47] md:text-3xl">
              Zechariah Chapter 4 (Continued)
            </h3>
            <h4 className="mb-8 text-center text-xl text-[#6b552f]">Connection to Revelation 11</h4>

            <div className="mb-8 space-y-4">
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">10:</span>
                &quot;For who has despised the day of small things? For they shall look and see The
                Plummet in the hands of Zerubbabel. These are The Seven Eyes of The Lord, which look
                over the whole earth.&quot;
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">11:</span>
                Then I answered and said to him, What are these Two Olive Trees on the right side of
                the candlestick and on its left side?
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">12:</span>
                And I answered the second time and said to him, What are these Two Olive Branches
                which are beside the Two Golden Pipes which pour the Golden Oil out of themselves?
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">13:</span>
                And he said to me, Do you not know what these are? And I said, no my Lord.
              </p>
              <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                <span className="mr-2 font-bold text-[#4a3c1e]">14:</span>
                Then said he, These are The Two Annointed Ones who stand by the Lord of the whole
                earth.
              </p>
            </div>

            <div className="my-8 rounded-lg border-2 border-[#0047ab] bg-[#f0f8ff] p-6">
              <h4 className="mb-4 text-center text-xl text-[#d21034]">
                The Haitian Flag in the Bible?
              </h4>
              <p className="mb-4">
                Some interpretations, particularly in certain prophetic or symbolic teachings, draw
                a connection between the imagery of the <strong>two olive trees</strong> and{" "}
                <strong>lampstands</strong> in Scripture and the design of the Haitian flag (blue
                and red vertical stripes with a central white panel and coat of arms featuring a
                palm tree).
              </p>
              <p className="mb-4">Revelation 11 explicitly links back to Zechariah 4:</p>

              <div className="my-4 space-y-3">
                <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                  <span className="mr-2 font-bold text-[#4a3c1e]">Rev 11:3:</span>
                  &quot;Then I will give power to my Two Witnesses, and they shall prophesy a
                  thousand and two hundred and three score days, clothed in sack cloth.&quot;
                </p>
                <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                  <span className="mr-2 font-bold text-[#4a3c1e]">4:</span>
                  &quot;These are The Two Olive Trees and the Two Candlesticks standing before the
                  Lord of the earth.&quot;
                </p>
                <p className="border-l-4 border-[#c9b580] pl-5 italic text-[#444]">
                  <span className="mr-2 font-bold text-[#4a3c1e]">5:</span>
                  &quot;And if any man desires to harm them, fire will consume their enemies; and if
                  any man desires to harm them, he must in this manner be killed.&quot;
                </p>
              </div>

              <p>
                While the Bible does not mention Haiti or any modern flag, some see prophetic
                significance in nations or symbols aligning with these ancient visions — viewing the
                two colors and central tree as echoing the two anointed ones sustaining God&apos;s
                light.
              </p>
            </div>

            <div className="rounded-lg border border-[#c9b580] bg-[#f5f0e6] p-6 text-center text-xl">
              <strong>
                These are the two olive trees, and the two candlesticks standing before the God of
                the earth.
              </strong>
              <br />
              <span className="text-base">(Revelation 11:4)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
