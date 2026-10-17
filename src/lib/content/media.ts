/** Homepage hero: outreach photo gallery and downloadable scroll PDFs. */

export interface MediaItem {
  type: "image"
  src: string
  alt: string
}

const overseas = "/images/outreach/overseas"

export const outreachMedia: readonly MediaItem[] = [
  // London — previous outreach
  { type: "image", src: `${overseas}/london-1.jpg`, alt: "London outreach - moment 1" },
  { type: "image", src: `${overseas}/london-2.jpg`, alt: "London outreach - moment 2" },
  { type: "image", src: `${overseas}/london-3.jpg`, alt: "London outreach - moment 3" },
  { type: "image", src: `${overseas}/london-4.jpg`, alt: "London outreach - moment 4" },
  // Recent outreach — both photos are Manhattan (the second was mislabelled "Toronto")
  { type: "image", src: `${overseas}/manhattan-1.jpg`, alt: "Manhattan outreach mission - moment 1" },
  { type: "image", src: `${overseas}/manhattan-2.jpg`, alt: "Manhattan outreach mission - moment 2" },
]

export interface ScrollDocument {
  id: number
  title: string
  file: string
  /** Optional one-line summary shown on the /library page. */
  description?: string
}

export const scrollDocuments: readonly ScrollDocument[] = [
  { id: 1, title: "Latest Insight — Elocution", file: "/scrolls/Elocution.pdf" },
  { id: 2, title: "Scroll I — Foundation Light", file: "/scrolls/scroll-001.pdf" },
  { id: 3, title: "Scroll II — Awakening", file: "/scrolls/scroll-002.pdf" },
  {
    id: 4,
    title: "Intercessory Prayer",
    file: "/scrolls/intercessory-prayer.pdf",
  },
  {
    id: 5,
    title: "Israel, Africa & Haiti: Blood Connection",
    file: "/scrolls/israel-africa-haiti-blood-connection.pdf",
  },
  {
    id: 6,
    title: "Jesus, God in All — Exact Notes",
    file: "/scrolls/jesus-god-in-all-exact-notes.pdf",
  },
  {
    id: 7,
    title: "Jesus, God in All — Study Guide",
    file: "/scrolls/jesus-god-in-all-study-guide.pdf",
  },
  {
    id: 8,
    title: "Psalm 133: Wings of the Cherubim",
    file: "/scrolls/psalm-133-wings-of-the-cherubim.pdf",
  },
  {
    id: 9,
    title: "Salvation and the Jews — Creative Digital Edition",
    file: "/scrolls/salvation-the-jews-creative-digital.pdf",
  },
  {
    id: 10,
    title: "Salvation and the Jews — Part 1",
    file: "/scrolls/salvation-the-jews-part-1.pdf",
  },
  {
    id: 11,
    title: "Scroll: Jesus, God in All",
    file: "/scrolls/scroll-jesus-god-in-all.pdf",
  },
  {
    id: 12,
    title: "The New Creation: Understanding Salvation and the Reversal of the Curse",
    file: "/scrolls/new-creation-understanding-salvation-reversal-curse.pdf",
  },
  {
    id: 13,
    title: "The Prophetic Scroll of Psalm 133",
    file: "/scrolls/prophetic-scroll-psalm-133.pdf",
  },
  {
    id: 14,
    title: "The New Creation — Full Ebook",
    file: "/scrolls/new-creation-full-ebook.pdf",
  },
]
