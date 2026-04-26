export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  "gdxn4o16"

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || "production"

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-25"

export const hasValidSanityEnv = Boolean(
  (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || projectId) &&
    (process.env.NEXT_PUBLIC_SANITY_DATASET || dataset)
)
