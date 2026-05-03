import { sanityClient } from "@/sanity/lib/client"
import { blogPageSettingsQuery } from "@/sanity/lib/queries"
import { hasValidSanityEnv } from "@/sanity/env"

const fallbackBlogPageSettings = {
  eyebrow: "Blog / Articles / Notes from the work",
  headline: "Writing about product, AI and learning by building.",
  intro:
    "A running archive of practical reflections, hands-on experiments and lessons from moving closer to the technical work as a product leader.",
  featuredEyebrow: "Featured article",
  featuredHeading: "Current highlight",
  archiveEyebrow: "All articles",
  archiveHeading: "Reverse chronological archive",
  seoTitle: "Blog",
  seoDescription:
    "Articles by Ben Murr on product leadership, AI-assisted building, hands-on experiments and learning technical craft.",
}

export async function getBlogPageSettings() {
  if (hasValidSanityEnv) {
    try {
      const settings = await sanityClient.fetch(blogPageSettingsQuery)

      if (settings) {
        return {
          ...fallbackBlogPageSettings,
          ...settings,
        }
      }
    } catch (error) {
      console.error("Falling back to seeded blog page settings:", error)
    }
  }

  return fallbackBlogPageSettings
}
