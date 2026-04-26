import { fallbackArticles } from "@/lib/fallback-content"
import { sanityClient } from "@/sanity/lib/client"
import { allArticlesQuery, articleBySlugQuery } from "@/sanity/lib/queries"
import { hasValidSanityEnv } from "@/sanity/env"

function normalizeArticle(article, source = "sanity") {
  return {
    ...article,
    source,
    tags: article.tags ?? [],
    category: article.category ?? { title: "Uncategorised", slug: "uncategorised" },
    body: article.body ?? [],
  }
}

export async function getAllArticles() {
  if (hasValidSanityEnv) {
    try {
      const articles = await sanityClient.fetch(allArticlesQuery)

      if (articles?.length) {
        return articles.map((article) => normalizeArticle(article, "sanity"))
      }
    } catch (error) {
      console.error("Falling back to seeded blog content:", error)
    }
  }

  return fallbackArticles.map((article) => normalizeArticle(article, "fallback"))
}

export async function getArticleBySlug(slug) {
  if (hasValidSanityEnv) {
    try {
      const article = await sanityClient.fetch(articleBySlugQuery, { slug })

      if (article) {
        return normalizeArticle(article, "sanity")
      }
    } catch (error) {
      console.error("Falling back to seeded article content:", error)
    }
  }

  const article = fallbackArticles.find((item) => item.slug === slug)
  return article ? normalizeArticle(article, "fallback") : null
}
