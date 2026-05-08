import { defineField, defineType } from "sanity"

function richSectionField(name, title) {
  return defineField({
    name,
    title,
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
  })
}

export const aiToolType = defineType({
  name: "aiTool",
  title: "AI tool",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required().max(260),
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
    richSectionField("whatItIs", "What it is"),
    richSectionField("whatIUseItFor", "What I use it for"),
    richSectionField("whereItWorksWell", "Where it works well"),
    richSectionField("drawbacksOrLimits", "Drawbacks or limits"),
    richSectionField("whoShouldUseIt", "Who should use it"),
    richSectionField("myVerdict", "My verdict"),
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
