# Ben Murr Blog / Sanity Foundation

This document defines the content model and page structure for the future Sanity CMS integration.

## Editorial Positioning

- Voice: professional first, personal in tone, practical and reflective
- Audience: PM peers, potential employers, recruiters, and curious builders
- Theme: learning technical craft and AI-assisted delivery through hands-on work

## Blog Page Types

### 1. Blog index page

Purpose:
- list all articles in reverse chronological order
- highlight the newest or featured article

Each article card should show:
- title
- cover image
- summary
- publish date
- category
- tags
- read more button

### 2. Article detail page

Purpose:
- display the full article

Each article page should show:
- title
- publish date
- category
- tags
- hero image
- article body
- optional author metadata
- back to blog link

## Recommended Sanity Content Types

### Article

Fields:
- title
- slug
- publishDate
- summary
- coverImage
- category
- tags
- featured
- body
- seoTitle
- seoDescription

### Category

Fields:
- title
- slug
- description

Suggested starter categories:
- AI for Product
- Hands-On Builds
- Experiments
- Leadership

### Tag

Fields:
- title
- slug

Suggested starter tags:
- AI
- Product Management
- Codex
- ChatGPT
- Vercel
- Design System
- Prototyping
- No-Code
- Agentic Workflows

## Suggested Sanity Schema Shape

```ts
// article
{
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "publishDate", type: "datetime" },
    { name: "summary", type: "text", rows: 3 },
    { name: "coverImage", type: "image", options: { hotspot: true } },
    { name: "category", type: "reference", to: [{ type: "category" }] },
    { name: "tags", type: "array", of: [{ type: "reference", to: [{ type: "tag" }] }] },
    { name: "featured", type: "boolean" },
    { name: "body", type: "array", of: [{ type: "block" }] },
    { name: "seoTitle", type: "string" },
    { name: "seoDescription", type: "text", rows: 3 }
  ]
}
```

## Routing Plan

- `/blog.html` today
- future CMS version:
  - `/blog`
  - `/blog/[slug]`

## Build Order

1. Keep the current static blog index and article template as visual references
2. Integrate Sanity as the content source
3. Replace hard-coded blog cards with Sanity-driven content
4. Replace the sample article page with dynamic article routes
5. Add image uploads, categories, tags, and featured article logic

## Why This Foundation

This approach lets the site evolve in a low-risk way:
- the visual system is already defined
- the blog structure is already visible
- Sanity can be layered in without changing the editorial model later
