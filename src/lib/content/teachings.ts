import {
  BookOpen,
  Eye,
  Flame,
  Globe,
  Scroll,
  Shield,
  Star,
  Sun,
  type LucideIcon,
} from "lucide-react"

export type TeachingStatus = "published" | "coming-soon"

export interface Teaching {
  slug: string
  title: string
  /** Longer blurb, used on the /teachings index. */
  description: string
  /** Short blurb, used on the homepage scroll grid. Falls back to description. */
  summary?: string
  level: string
  icon: LucideIcon
  status: TeachingStatus
  /** Published at its URL but not listed in menus, grids or prev/next. */
  unlisted?: boolean
}

/**
 * Every teaching/scroll on the site, in reading order.
 *
 * To add a teaching: create app/(site)/teachings/<slug>/page.tsx, add an entry
 * here with status "published". Listings and prev/next links update themselves.
 * "coming-soon" entries show on the homepage without linking anywhere.
 */
export const teachings: Teaching[] = [
  {
    slug: "creation",
    title: "Creation",
    description:
      "The First Command — Let there be light. Explore creation, vibration, sound, and divine manifestation.",
    level: "Genesis",
    icon: Sun,
    status: "published",
  },
  {
    slug: "divine-light",
    title: "Divine Light",
    description:
      "The rhythm of time, rainbow light, judgment, and eternal illumination.",
    summary:
      "Understanding God as the source of all light — both physical and spiritual.",
    level: "Foundation",
    icon: Flame,
    status: "published",
  },
  {
    slug: "menorah-mysteries",
    title: "Menorah Mysteries",
    description:
      "Understanding God’s Light, righteousness, divine connection, and the seven spirits.",
    summary:
      "The seven-branched lampstand revealing divine structure and order.",
    level: "Revelation",
    icon: Star,
    status: "published",
  },
  {
    slug: "faith-scroll",
    title: "Faith Scroll",
    description:
      "Teachings concerning prophecy, nations, spiritual revelation, and biblical alignment.",
    level: "Faith",
    icon: BookOpen,
    status: "published",
  },
  {
    slug: "nations",
    title: "Nations in God’s Plan",
    description: "How nations fit into the divine blueprint of redemption.",
    level: "Prophecy",
    icon: Globe,
    status: "coming-soon",
  },
  {
    slug: "spiritual-warfare",
    title: "Spiritual Warfare",
    description: "Understanding the battle between truth and deception.",
    summary: "The armor of God, discernment, and standing firm as deception increases.",
    level: "Wisdom",
    icon: Shield,
    status: "published",
  },
  {
    slug: "creation-redemption",
    title: "Creation & Redemption",
    description:
      "Patterns that reveal God’s design in creation and salvation.",
    level: "Mystery",
    icon: Eye,
    status: "coming-soon",
  },
  {
    slug: "prophetic-fulfillment",
    title: "Prophetic Fulfillment",
    description:
      "Understanding the prophetic timeline and God’s unfolding plan.",
    level: "Vision",
    icon: Scroll,
    status: "coming-soon",
  },
  {
    // Previously lived at /nuclear, unlinked from the site. Kept unlisted.
    slug: "nuclear",
    title: "Nuclear",
    description:
      "A prophetic study connecting ancient biblical judgments, desolation passages, and end-times interpretation discussions.",
    level: "Prophecy",
    icon: Flame,
    status: "published",
    unlisted: true,
  },
]

export const teachingHref = (t: Pick<Teaching, "slug">) =>
  `/teachings/${t.slug}`

/** Teachings shown in menus, grids and prev/next (excludes unlisted). */
export const listedTeachings = teachings.filter((t) => !t.unlisted)

export const publishedTeachings = listedTeachings.filter(
  (t) => t.status === "published"
)

export function getAdjacentTeachings(slug: string) {
  const i = publishedTeachings.findIndex((t) => t.slug === slug)
  if (i === -1) return { prev: undefined, next: undefined }
  return { prev: publishedTeachings[i - 1], next: publishedTeachings[i + 1] }
}
