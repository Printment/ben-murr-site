import { defineQuery } from "next-sanity"

const articleFields = `
  title,
  "slug": slug.current,
  publishDate,
  summary,
  coverImage,
  featured,
  seoTitle,
  seoDescription,
  category->{title, "slug": slug.current},
  tags[]->{title, "slug": slug.current},
  body
`

const aiToolFields = `
  title,
  "slug": slug.current,
  order,
  summary,
  coverImage,
  seoTitle,
  seoDescription,
  tags[]->{title, "slug": slug.current},
  whatItIs,
  whatIUseItFor,
  whereItWorksWell,
  drawbacksOrLimits,
  whoShouldUseIt,
  myVerdict
`

const aboutSectionFields = `
  title,
  navLabel,
  "slug": slug.current,
  order,
  summary,
  focusAreas,
  waysOfWorking,
  currentInterests,
  coverImage,
  seoTitle,
  seoDescription,
  tags[]->{title, "slug": slug.current},
  body
`

const aboutPageSettingsFields = `
  eyebrow,
  headline,
  intro,
  sectionsEyebrow,
  sectionsHeading
`

const homePageSettingsFields = `
  eyebrow,
  headline,
  intro
`

const blogPageSettingsFields = `
  eyebrow,
  headline,
  intro,
  featuredEyebrow,
  featuredHeading,
  archiveEyebrow,
  archiveHeading,
  seoTitle,
  seoDescription
`

const toolsPageSettingsFields = `
  eyebrow,
  headline,
  intro,
  libraryEyebrow,
  libraryHeading,
  seoTitle,
  seoDescription
`

export const allArticlesQuery = defineQuery(`
  *[_type == "article"] | order(publishDate desc) {
    ${articleFields}
  }
`)

export const allAiToolsQuery = defineQuery(`
  *[_type == "aiTool"] | order(order asc, title asc) {
    ${aiToolFields}
  }
`)

export const aiToolBySlugQuery = defineQuery(`
  *[_type == "aiTool" && slug.current == $slug][0] {
    ${aiToolFields}
  }
`)

export const articleBySlugQuery = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    ${articleFields}
  }
`)

export const allAboutSectionsQuery = defineQuery(`
  *[_type == "aboutSection"] | order(order asc, title asc) {
    ${aboutSectionFields}
  }
`)

export const aboutSectionBySlugQuery = defineQuery(`
  *[_type == "aboutSection" && slug.current == $slug][0] {
    ${aboutSectionFields}
  }
`)

export const aboutPageSettingsQuery = defineQuery(`
  *[_type == "aboutPageSettings"][0] {
    ${aboutPageSettingsFields}
  }
`)

export const homePageSettingsQuery = defineQuery(`
  *[_type == "homePageSettings"][0] {
    ${homePageSettingsFields}
  }
`)

export const blogPageSettingsQuery = defineQuery(`
  *[_type == "blogPageSettings"][0] {
    ${blogPageSettingsFields}
  }
`)

export const toolsPageSettingsQuery = defineQuery(`
  *[_type == "toolsPageSettings"][0] {
    ${toolsPageSettingsFields}
  }
`)
