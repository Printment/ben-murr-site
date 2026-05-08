import { sanityClient } from "@/sanity/lib/client"
import { toolsPageSettingsQuery } from "@/sanity/lib/queries"
import { hasValidSanityEnv } from "@/sanity/env"

const fallbackToolsPageSettings = {
  eyebrow: "AI Tools / Working set / Practical reference",
  headline: "A living reference for the AI tools I keep returning to.",
  intro:
    "A practical library of the AI tools I use, what they help with, where they work well and the trade-offs that matter once you move beyond the first demo.",
  libraryEyebrow: "Current tool library",
  libraryHeading: "Tools I use, test and keep returning to",
  seoTitle: "AI Tools",
  seoDescription:
    "A living reference for the AI tools Ben Murr uses, including what they do well, where they fall short and who they suit best.",
}

export async function getToolsPageSettings() {
  if (hasValidSanityEnv) {
    try {
      const settings = await sanityClient.fetch(toolsPageSettingsQuery)

      if (settings) {
        return {
          ...fallbackToolsPageSettings,
          ...settings,
        }
      }
    } catch (error) {
      console.error("Falling back to seeded tools page settings:", error)
    }
  }

  return fallbackToolsPageSettings
}
