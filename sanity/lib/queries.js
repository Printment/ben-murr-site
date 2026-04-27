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

export const allArticlesQuery = defineQuery(`
  *[_type == "article"] | order(publishDate desc) {
    ${articleFields}
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
