import Link from "next/link"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { getAllArticles, getArticleBySlug } from "@/lib/blog"
import { ArticleVisual } from "@/components/article-visual"
import { formatDate } from "@/lib/utils"
import { getImageUrl } from "@/sanity/lib/image"

export const revalidate = 60

const portableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    blockquote: ({ children }) => <blockquote className="article-quote">{children}</blockquote>,
  },
  types: {
    image: ({ value }) => {
      const imageUrl = value?.asset ? getImageUrl(value) : null

      if (!imageUrl) return null

      return (
        <figure className="article-inline-image">
          <img
            className="article-inline-image-element"
            src={imageUrl}
            alt={value.alt ?? ""}
          />
          {value.caption ? (
            <figcaption className="article-inline-caption">{value.caption}</figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) return {}

  return {
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.summary,
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <div className="article-breadcrumb">
        <Link className="text-link" href="/blog">
          Back to blog
        </Link>
      </div>

      <article className="article-layout">
        <header className="article-header panel panel-hero">
          <p className="meta-line">
            {formatDate(article.publishDate)} / {article.category?.title}
          </p>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-deck">{article.summary}</p>
          <div className="tag-row">
            {article.tags.map((tag) => (
              <span className="tag" key={tag.slug}>
                {tag.title}
              </span>
            ))}
          </div>
        </header>

        <div className="article-hero-image panel panel-raised">
          <ArticleVisual article={article} />
        </div>

        <div className="article-content-wrap">
          <aside className="article-sidebar panel panel-inset">
            <p className="meta-line">Article metadata</p>
            <div className="signal-row">
              <span className="signal-label">Audience</span>
              <span className="signal-value">PM peers</span>
            </div>
            <div className="signal-row">
              <span className="signal-label">Theme</span>
              <span className="signal-value gold">{article.category?.title}</span>
            </div>
            <div className="signal-row">
              <span className="signal-label">Status</span>
              <span className="signal-value cyan">
                {article.source === "sanity" ? "Sanity content" : "Fallback seed"}
              </span>
            </div>
            <div className="divider" />
            <p className="meta-note">
              This page is ready for live Sanity content once project credentials
              are added and the Studio is populated.
            </p>
          </aside>

          <div className="article-body panel panel-raised">
            <PortableText value={article.body} components={portableTextComponents} />
          </div>
        </div>
      </article>
    </>
  )
}
