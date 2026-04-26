import { createImageUrlBuilder } from "@sanity/image-url"
import { projectId, dataset, hasValidSanityEnv } from "@/sanity/env"

const builder = createImageUrlBuilder({
  projectId,
  dataset,
})

export function getImageUrl(source) {
  if (!hasValidSanityEnv || !source) {
    return null
  }

  try {
    return builder.image(source).width(1600).fit("max").auto("format").url()
  } catch {
    return null
  }
}
