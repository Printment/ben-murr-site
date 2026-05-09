import { defineField, defineType } from "sanity"

export const homePageSettingsType = defineType({
  name: "homePageSettings",
  title: "Homepage settings",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Hero eyebrow",
      type: "string",
      initialValue: "Product leadership / AI learning / building in public",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Hero headline",
      type: "string",
      initialValue: "Product thinking with builder momentum.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Hero intro",
      type: "text",
      rows: 4,
      initialValue:
        "I'm Ben Murr, a product leader exploring how AI can expand what a PM can build, ship and understand firsthand. This site captures the work, the learning and the practical experiments behind that shift.",
      validation: (Rule) => Rule.required().max(360),
    }),
  ],
})
