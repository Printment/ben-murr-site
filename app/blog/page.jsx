import Link from "next/link"
import { getAllArticles } from "@/lib/blog"
import { ArticleVisual } from "@/components/article-visual"
import { formatDate } from "@/lib/utils"

export const revalidate = 60

export const metadata = {
  title: "Blog",
  description:
    "Articles by Ben Murr on product leadership, AI-assisted building, hands-on experiments, and learning technical craft.",
}

export default async function BlogPage() {
  const articles = await getAllArticles()
  const featured = articles.find((article) => article.featured) ?? articles[0]
  const archive = featured
    ? articles.filter((article) => article.slug !== featured.slug)
    : articles

  return (
    <>
      <section className="page-hero panel panel-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">Blog / Articles / Notes from the work</p>
          <h1 className="page-title">Writing about product, AI, and learning by building.</h1>
          <p className="hero-text">
            A running archive of practical reflections, hands-on experiments,
            and lessons from moving closer to the technical work as a product
            leader.
          </p>
        </div>
        <aside className="page-hero-aside panel panel-inset">
          <p className="meta-line">Editorial focus</p>
          <div className="tag-row">
            <span className="tag">AI for Product</span>
            <span className="tag">Hands-On Builds</span>
            <span className="tag">Experiments</span>
            <span className="tag">Leadership</span>
          </div>
          <p className="meta-note">
            Ordered by publish date, newest first. Each entry carries a summary,
            visual, tags, and a route into the full article page.
          </p>
        </aside>
      </section>

      {featured ? (
        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Featured article</p>
            <h2>Current highlight</h2>
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
          <p className="eyebrow">All articles</p>
          <h2>Reverse chronological archive</h2>
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
