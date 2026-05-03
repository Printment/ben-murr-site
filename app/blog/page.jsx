import Link from "next/link"
import { getAllArticles } from "@/lib/blog"
import { getBlogPageSettings } from "@/lib/blog-page-settings"
import { ArticleVisual } from "@/components/article-visual"
import { formatDate } from "@/lib/utils"

export const revalidate = 60

export async function generateMetadata() {
  const settings = await getBlogPageSettings()

  return {
    title: settings.seoTitle ?? "Blog",
    description:
      settings.seoDescription ??
      "Articles by Ben Murr on product leadership, AI-assisted building, hands-on experiments and learning technical craft.",
  }
}

export default async function BlogPage() {
  const [articles, settings] = await Promise.all([
    getAllArticles(),
    getBlogPageSettings(),
  ])
  const featured = articles.find((article) => article.featured) ?? articles[0]
  const archive = featured
    ? articles.filter((article) => article.slug !== featured.slug)
    : articles

  return (
      <>
      <section className="page-hero page-hero-blog panel panel-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">{settings.eyebrow}</p>
          <h1 className="page-title">{settings.headline}</h1>
          <p className="hero-text">{settings.intro}</p>
        </div>
      </section>

      {featured ? (
        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">{settings.featuredEyebrow}</p>
            <h2>{settings.featuredHeading}</h2>
          </div>

          <article className="featured-article panel panel-raised">
            <div className="featured-article-media">
              <ArticleVisual article={featured} />
            </div>
            <div className="featured-article-copy">
              <p className="meta-line">
                {formatDate(featured.publishDate)} / {featured.category?.title}
              </p>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <div className="tag-row">
                {featured.tags.map((tag) => (
                  <span className="tag" key={tag.slug}>
                    {tag.title}
                  </span>
                ))}
              </div>
              <Link className="button button-primary" href={`/blog/${featured.slug}`}>
                Read more
              </Link>
            </div>
          </article>
        </section>
      ) : null}

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">{settings.archiveEyebrow}</p>
          <h2>{settings.archiveHeading}</h2>
        </div>

        <div className="blog-list">
          {archive.map((article) => (
            <article className="blog-card panel panel-raised" key={article.slug}>
              <ArticleVisual article={article} />
              <div className="blog-card-copy">
                <p className="meta-line">
                  {formatDate(article.publishDate)} / {article.category?.title}
                </p>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="tag-row">
                  {article.tags.map((tag) => (
                    <span className="tag" key={tag.slug}>
                      {tag.title}
                    </span>
                  ))}
                </div>
              </div>
              <div className="blog-card-actions">
                <Link className="button button-secondary" href={`/blog/${article.slug}`}>
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
