import { sanityClient } from "@/sanity/lib/client"
import { homePageSettingsQuery } from "@/sanity/lib/queries"
import { hasValidSanityEnv } from "@/sanity/env"

const fallbackHomePageSettings = {
  eyebrow: "Product leadership / AI learning / building in public",
  headline: "Product thinking with builder momentum.",
  intro:
    "I'm Ben Murr, a product leader exploring how AI can expand what a PM can build, ship and understand firsthand. This site captures the work, the learning and the practical experiments behind that shift.",
}

export async function getHomePageSettings() {
  if (hasValidSanityEnv) {
    try {
      const settings = await sanityClient.fetch(homePageSettingsQuery)

      if (settings) {
        return {
          ...fallbackHomePageSettings,
          ...settings,
        }
      }
    } catch (error) {
      console.error("Falling back to seeded homepage settings:", error)
    }
  }

  return fallbackHomePageSettings
}
