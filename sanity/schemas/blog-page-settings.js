import { defineField, defineType } from "sanity"

export const blogPageSettingsType = defineType({
  name: "blogPageSettings",
  title: "Blog page settings",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Hero eyebrow",
      type: "string",
      initialValue: "Blog / Articles / Notes from the work",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Hero headline",
      type: "string",
      initialValue: "Writing about product, AI and learning by building.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Hero intro",
      type: "text",
      rows: 4,
      initialValue:
        "A running archive of practical reflections, hands-on experiments and lessons from moving closer to the technical work as a product leader.",
      validation: (Rule) => Rule.required().max(320),
    }),
    defineField({
      name: "featuredEyebrow",
      title: "Featured section eyebrow",
      type: "string",
      initialValue: "Featured article",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredHeading",
      title: "Featured section heading",
      type: "string",
      initialValue: "Current highlight",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "archiveEyebrow",
      title: "Archive section eyebrow",
      type: "string",
      initialValue: "All articles",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "archiveHeading",
      title: "Archive section heading",
      type: "string",
      initialValue: "Reverse chronological archive",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
    }),
  ],
})
