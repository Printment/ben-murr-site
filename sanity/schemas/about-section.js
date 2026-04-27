import { defineField, defineType } from "sanity"

export const aboutSectionType = defineType({
  name: "aboutSection",
  title: "About section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "navLabel",
      title: "Navigation label",
      type: "string",
      description: "Optional shorter label for the left-hand navigation.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(280),
    }),
    defineField({
      name: "focusAreas",
      title: "Focus areas",
      type: "array",
      of: [{ type: "string" }],
      description: "Short points that describe the main themes of this section.",
    }),
    defineField({
      name: "waysOfWorking",
      title: "Ways of working",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional notes on how you tend to operate or contribute.",
    }),
    defineField({
      name: "currentInterests",
      title: "Current interests",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional themes, capabilities or areas you are currently developing.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
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
