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
  ]

  return (
    <section className="relative bg-black text-stone-100 min-h-screen overflow-hidden pt-32 pb-20 px-6 md:px-16">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-orange-400">
            NUCLEAR
          </h1>

          <div className="w-40 h-[2px] bg-orange-500 mx-auto mt-6 mb-6" />

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-stone-300 leading-8">
            A prophetic study connecting ancient biblical judgments,
            desolation passages, and end-times interpretation discussions.
          </p>
        </div>

        {/* Prophecy Cards */}
        <div className="grid gap-10">
          {prophecies.map((item, index) => (
            <div
              key={index}
              className="border border-orange-700/40 bg-zinc-900/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <h2 className="text-3xl font-bold text-orange-300">
                  {item.title}
                </h2>

                <span className="border border-orange-600 px-4 py-2 rounded-full text-sm tracking-widest text-orange-200">
                  {item.year}
                </span>
              </div>

              <blockquote className="border-l-4 border-orange-500 pl-6 italic text-xl text-stone-200 leading-9">
                {item.text}
              </blockquote>

              <p className="mt-6 text-stone-300 leading-8">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        {/* Zechariah 14 Section */}
        <div className="mt-24 border border-red-700/40 rounded-3xl p-10 bg-red-950/20">
          <h2 className="text-4xl font-bold text-red-300 mb-8">
            Zechariah 14:12 — The Plague
          </h2>

          <div className="space-y-6 text-lg leading-9 text-stone-200">
            <p>
              “Their flesh shall waste away while they stand on their feet;
              their eyes shall consume away in their sockets;
              and their tongue shall consume away in their mouth.”
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="border border-red-700 rounded-2xl p-6">
                <h3 className="text-red-300 text-xl font-bold mb-3">
                  Body
                </h3>

                <p>
                  “Their flesh shall waste away while they stand.”
                </p>
              </div>

              <div className="border border-red-700 rounded-2xl p-6">
                <h3 className="text-red-300 text-xl font-bold mb-3">
                  Spirit
                </h3>

                <p>
                  “Their eyes shall consume away in their sockets.”
                </p>
              </div>

              <div className="border border-red-700 rounded-2xl p-6">
                <h3 className="text-red-300 text-xl font-bold mb-3">
                  Soul
                </h3>

                <p>
                  “Their tongue shall consume away in their mouth.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ekron Notes */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-orange-300 mb-8">
            Ekron Notes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="border border-orange-700/40 rounded-2xl p-8 bg-zinc-900/60">
              <h3 className="text-2xl font-bold text-orange-200 mb-4">
                2 Kings 1:6
              </h3>

              <p className="text-stone-300 leading-8">
                Baalzebub (Beelzebub) was the god of Ekron.
              </p>
            </div>

            <div className="border border-orange-700/40 rounded-2xl p-8 bg-zinc-900/60">
              <h3 className="text-2xl font-bold text-orange-200 mb-4">
                1 Samuel 5:10
              </h3>

              <p className="text-stone-300 leading-8">
                The Ark of God was brought into Ekron,
                causing fear among the Philistines.
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <div className="inline-block border border-orange-600 rounded-full px-8 py-4">
            <p className="tracking-[0.3em] text-orange-300 uppercase text-sm">
              Wings of the Cherubim
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
