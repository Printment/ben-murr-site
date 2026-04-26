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
        <header className="article-hero-banner panel panel-hero">
          <div className="article-header">
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
          </div>

          <div className="article-hero-image">
            <ArticleVisual article={article} />
          </div>
        </header>

        <div className="article-content-wrap">
          <aside className="article-sidebar panel panel-inset">
            <p className="meta-line">Article snapshot</p>
            <div className="signal-row">
              <span className="signal-label">Published</span>
              <span className="signal-value">{formatDate(article.publishDate)}</span>
            </div>
            <div className="signal-row">
              <span className="signal-label">Theme</span>
              <span className="signal-value gold">{article.category?.title}</span>
            </div>
            <div className="signal-row">
              <span className="signal-label">Tags</span>
              <span className="signal-value cyan">{article.tags.length}</span>
            </div>
            {article.tags.length ? (
              <>
                <div className="divider" />
                <p className="meta-note">Topics</p>
                <div className="tag-row article-sidebar-tags">
                  {article.tags.map((tag) => (
                    <span className="tag" key={tag.slug}>
                      {tag.title}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </aside>

          <div className="article-body panel panel-raised">
            <PortableText value={article.body} components={portableTextComponents} />
          </div>
        </div>
      </article>
    </>
  )
}
