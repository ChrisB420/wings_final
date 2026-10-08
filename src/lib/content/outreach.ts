/** TEOM — The Evangelism Outreach Mombasa: types and starting data. */

export interface ScheduleItem {
  day: string
  time: string
  location: string
  focus: string
}

export interface ChurchItem {
  name: string
  pastor: string
  warriors: string[]
}

export interface EvidenceItem {
  title: string
  link: string
  notes: string
}

export interface TaskItem {
  date: string
  task: string
}

export const outreachMotto =
  "Moving the city of Mombasa into God's Shekinah Glory, where salvation will be found over the mercy seat under the wings of the cherubim."

export const outreachLeadership = [
  { role: "Director", name: "Gregory Schadt" },
  { role: "President - Field Lead", name: "Vanessa Juma" },
  { role: "General Secretary", name: "Chris Beda" },
] as const

export const weekdays = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
] as const

export const initialSchedule: ScheduleItem[] = [
  {
    day: "Saturday",
    time: "11:00–12:00",
    location: "Kengeleni Market",
    focus: "Public prayer and evangelism",
  },
  {
    day: "Sunday",
    time: "After service (30 minutes)",
    location: "Local partner church",
    focus: "Prayer and testimonies",
  },
]

export const initialChurches: ChurchItem[] = [
  {
    name: "Full Gospel Frere Town",
    pastor: "Partner Ministry",
    // Was a single comma-joined string, so the "x / 5" counter showed 1.
    warriors: [
      "Annabella",
      "John Musue",
      "Titus Omondi",
      "Veronicah Dede",
      "Gracie Wilfred",
    ],
  },
  { name: "Glory Tabernacle", pastor: "Pastor Kiki", warriors: ["Prayer Team"] },
  { name: "PCEA Milele", pastor: "Partner Ministry", warriors: ["Prayer Team"] },
  {
    name: "Breakthrough Chapel",
    pastor: "Partner Ministry",
    warriors: ["Prayer Team"],
  },
]

// Only two of the four photos exist in /public. The other two entries are
// kept without a link so they don't render a broken "View Media" link; drop
// the photos into public/images/outreach/mombasa/ and add the paths back.
export const initialEvidence: EvidenceItem[] = [
  {
    title: "Full Gospel Frere Town Outreach",
    link: "/images/outreach/mombasa/frere-town.jpg",
    notes: "Prayer, evangelism, and fellowship during outreach ministry.",
  },
  {
    title: "Glory Tabernacle Prayer Gathering",
    link: "/images/outreach/mombasa/glory-tabernacle.jpg",
    notes: "Intercession and worship session with outreach team.",
  },
  {
    title: "PCEA Milele Evangelism Mission",
    link: "",
    notes: "Street evangelism and community engagement.",
  },
  {
    title: "Breakthrough Chapel Fellowship",
    link: "",
    notes: "Prayer warriors and testimony session.",
  },
]
