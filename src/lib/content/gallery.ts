export type GalleryPlace = "London" | "Manhattan" | "Mombasa" | "Haiti"

export interface GalleryPhoto {
  src: string
  alt: string
  caption: string
  place: GalleryPlace
}

const overseas = "/images/outreach/overseas"
const mombasa = "/images/outreach/mombasa"
const haiti = "/images/prophecy/haiti"

/** Add a photo: drop the file under public/images/outreach/ and list it here. */
export const galleryPhotos: GalleryPhoto[] = [
  ...[1, 2, 3, 4, 5].map((n) => ({
    src: `${overseas}/london-${n}.jpg`,
    alt: `London outreach — photo ${n}`,
    caption: "London outreach",
    place: "London" as const,
  })),
  ...[1, 2].map((n) => ({
    src: `${overseas}/manhattan-${n}.jpg`,
    alt: `Manhattan outreach — photo ${n}`,
    caption: "Manhattan outreach",
    place: "Manhattan" as const,
  })),
  {
    src: `${mombasa}/frere-town.jpg`,
    alt: "Full Gospel Frere Town outreach, Mombasa",
    caption: "Full Gospel Frere Town — prayer, evangelism and fellowship",
    place: "Mombasa",
  },
  {
    src: `${mombasa}/glory-tabernacle.jpg`,
    alt: "Glory Tabernacle prayer gathering, Mombasa",
    caption: "Glory Tabernacle — intercession and worship with the outreach team",
    place: "Mombasa",
  },
  {
    src: `${haiti}/haiti-flag-revelation.jpg`,
    alt: "Painting of the Haitian coat of arms with gold calligraphy, by Arlene D. Whiteman, 2008",
    caption: "Haitian Flag Revelation — a prophetic witness tied to Zechariah 4",
    place: "Haiti",
  },
  ...[
    "IBD_8825",
    "IBD_8826",
    "IBD_8829",
    "IBD_8830",
    "IBD_8831",
    "IBD_8832",
    "IBD_8833",
    "IBD_8834",
    "IBD_8837",
    "IBD_8839",
    "IBD_8840",
    "IBD_8843",
  ].map((file, index) => ({
    src: `${haiti}/${file}.jpg`,
    alt: `Greg's Haitian flag study — image ${index + 1} of 12`,
    caption: `Haitian flag series — frame ${index + 1}`,
    place: "Haiti" as const,
  })),
]

export const galleryPlaces: GalleryPlace[] = ["London", "Manhattan", "Mombasa", "Haiti"]
