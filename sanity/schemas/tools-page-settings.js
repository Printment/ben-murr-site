import { defineField, defineType } from "sanity"

export const toolsPageSettingsType = defineType({
  name: "toolsPageSettings",
  title: "AI Tools page settings",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Hero eyebrow",
      type: "string",
      initialValue: "AI Tools / Working set / Practical reference",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Hero headline",
      type: "string",
      initialValue: "A living reference for the AI tools I keep returning to.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Hero intro",
      type: "text",
      rows: 4,
      initialValue:
        "A practical library of the AI tools I use, what they help with, where they work well and the trade-offs that matter once you move beyond the first demo.",
      validation: (Rule) => Rule.required().max(320),
    }),
    defineField({
      name: "libraryEyebrow",
      title: "Library eyebrow",
      type: "string",
      initialValue: "Current tool library",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "libraryHeading",
      title: "Library heading",
      type: "string",
      initialValue: "Tools I use, test and keep returning to",
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
