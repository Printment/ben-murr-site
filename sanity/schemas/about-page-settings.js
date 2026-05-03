import { defineField, defineType } from "sanity"

export const aboutPageSettingsType = defineType({
  name: "aboutPageSettings",
  title: "About page settings",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Hero eyebrow",
      type: "string",
      initialValue: "About / Profile / How I work",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Hero headline",
      type: "string",
      initialValue: "A steadier view of the person behind the experiments.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Hero intro",
      type: "text",
      rows: 4,
      initialValue:
        "The blog is where I write in motion. This space is where I explain how I work, what I care about and how AI is changing the way I build, learn and lead.",
      validation: (Rule) => Rule.required().max(320),
    }),
    defineField({
      name: "sectionsEyebrow",
      title: "Sections eyebrow",
      type: "string",
      initialValue: "Explore the profile",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionsHeading",
      title: "Sections heading",
      type: "string",
      initialValue: "Sections that grow with the work",
      validation: (Rule) => Rule.required(),
    }),
  ],
})
