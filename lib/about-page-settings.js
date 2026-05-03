import { sanityClient } from "@/sanity/lib/client"
import { aboutPageSettingsQuery } from "@/sanity/lib/queries"
import { hasValidSanityEnv } from "@/sanity/env"

const fallbackAboutPageSettings = {
  eyebrow: "About / Profile / How I work",
  headline: "A steadier view of the person behind the experiments.",
  intro:
    "The blog is where I write in motion. This space is where I explain how I work, what I care about and how AI is changing the way I build, learn and lead.",
  sectionsEyebrow: "Explore the profile",
  sectionsHeading: "Sections that grow with the work",
}

export async function getAboutPageSettings() {
  if (hasValidSanityEnv) {
    try {
      const settings = await sanityClient.fetch(aboutPageSettingsQuery)

      if (settings) {
        return {
          ...fallbackAboutPageSettings,
          ...settings,
        }
      }
    } catch (error) {
      console.error("Falling back to seeded about page settings:", error)
    }
  }

  return fallbackAboutPageSettings
}
