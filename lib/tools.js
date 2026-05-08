import { fallbackAiTools } from "@/lib/fallback-tools"
import { sanityClient } from "@/sanity/lib/client"
import { allAiToolsQuery, aiToolBySlugQuery } from "@/sanity/lib/queries"
import { hasValidSanityEnv } from "@/sanity/env"

function normalizeAiTool(tool, source = "sanity") {
  return {
    ...tool,
    source,
    tags: tool.tags ?? [],
    whatItIs: tool.whatItIs ?? [],
    whatIUseItFor: tool.whatIUseItFor ?? [],
    whereItWorksWell: tool.whereItWorksWell ?? [],
    drawbacksOrLimits: tool.drawbacksOrLimits ?? [],
    whoShouldUseIt: tool.whoShouldUseIt ?? [],
    myVerdict: tool.myVerdict ?? [],
  }
}

export async function getAllAiTools() {
  if (hasValidSanityEnv) {
    try {
      const tools = await sanityClient.fetch(allAiToolsQuery)

      if (tools?.length) {
        return tools.map((tool) => normalizeAiTool(tool, "sanity"))
      }
    } catch (error) {
      console.error("Falling back to seeded AI tools:", error)
    }
  }

  return fallbackAiTools.map((tool) => normalizeAiTool(tool, "fallback"))
}

export async function getAiToolBySlug(slug) {
  if (hasValidSanityEnv) {
    try {
      const tool = await sanityClient.fetch(aiToolBySlugQuery, { slug })

      if (tool) {
        return normalizeAiTool(tool, "sanity")
      }
    } catch (error) {
      console.error("Falling back to seeded AI tool:", error)
    }
  }

  const tool = fallbackAiTools.find((item) => item.slug === slug)
  return tool ? normalizeAiTool(tool, "fallback") : null
}
