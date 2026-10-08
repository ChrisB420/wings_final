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
]
