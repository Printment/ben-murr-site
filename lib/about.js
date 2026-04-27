import { fallbackAboutSections } from "@/lib/fallback-about"
import { sanityClient } from "@/sanity/lib/client"
import { allAboutSectionsQuery, aboutSectionBySlugQuery } from "@/sanity/lib/queries"
import { hasValidSanityEnv } from "@/sanity/env"

function normalizeAboutSection(section, source = "sanity") {
  return {
    ...section,
    source,
    navLabel: section.navLabel ?? section.title,
    tags: section.tags ?? [],
    focusAreas: section.focusAreas ?? [],
    waysOfWorking: section.waysOfWorking ?? [],
    currentInterests: section.currentInterests ?? [],
    body: section.body ?? [],
  }
}

export async function getAllAboutSections() {
  if (hasValidSanityEnv) {
    try {
      const sections = await sanityClient.fetch(allAboutSectionsQuery)

      if (sections?.length) {
        return sections.map((section) => normalizeAboutSection(section, "sanity"))
      }
    } catch (error) {
      console.error("Falling back to seeded about content:", error)
    }
  }

  return fallbackAboutSections.map((section) => normalizeAboutSection(section, "fallback"))
}

export async function getAboutSectionBySlug(slug) {
  if (hasValidSanityEnv) {
    try {
      const section = await sanityClient.fetch(aboutSectionBySlugQuery, { slug })

      if (section) {
        return normalizeAboutSection(section, "sanity")
      }
    } catch (error) {
      console.error("Falling back to seeded about section:", error)
    }
  }

  const section = fallbackAboutSections.find((item) => item.slug === slug)
  return section ? normalizeAboutSection(section, "fallback") : null
}
