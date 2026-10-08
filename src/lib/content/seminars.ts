export interface SeminarTopic {
  title: string
  description: string
}

export const seminarTopics: SeminarTopic[] = [
  {
    title: "Menorah Symbolism",
    description:
      "Discover the Menorah as God's very Throne, linked to the emerald rainbow of Revelation 4 and the divine colors of the Haitian Flag.",
  },
  {
    title: "Time and Eternity",
    description:
      "Unveil the truth of humanity as eternal beings, created before time, with profound insights from Ecclesiastes 3:15 and Aramaic Revelation.",
  },
  {
    title: "Salvation & The Holy Spirit",
    description:
      "Understand the Holy Spirit's indispensable role in our eternal destiny and the path to true salvation.",
  },
  {
    title: "Shofar Prophecy",
    description:
      "Explore the seven prophetic notes of the Shofar and their powerful ties to Zechariah 9 and end-time revelations.",
  },
  {
    title: "The Haitian Flag's Divine Blueprint",
    description:
      "A deep dive into the spiritual significance of its colors—heaven, earth, and the sacred meeting of God and man.",
  },
]

export interface SeminarSession {
  title: string
  /** ISO 8601 start time WITH offset, e.g. "2026-10-03T18:00:00+03:00". */
  start: string
  durationMinutes: number
}

/**
 * The upcoming seminar dates. Add them here and the /seminars page shows each
 * one in the visitor's own time zone, with Add-to-Calendar buttons.
 * Left empty on purpose — I don't know your dates. Example:
 *
 *   { title: "Session 1: Menorah Symbolism", start: "2026-10-03T18:00:00+03:00", durationMinutes: 90 },
 */
export const seminarSessions: SeminarSession[] = []
