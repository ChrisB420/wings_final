export interface Testimony {
  name: string
  location?: string
  text: string
}

/**
 * Published testimonies. Submissions arrive by email (see the form on
 * /gallery); with the person's permission, paste them here. The section stays
 * hidden until there is at least one.
 *
 *   { name: "Jane D.", location: "Mombasa", text: "…" },
 */
export const testimonies: Testimony[] = []
