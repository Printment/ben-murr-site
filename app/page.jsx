import Link from "next/link"
import { getAllArticles } from "@/lib/blog"
import { ArticleVisual } from "@/components/article-visual"
import { formatDate } from "@/lib/utils"

export default async function HomePage() {
  const articles = await getAllArticles()
  const featured = articles.find((article) => article.featured) ?? articles[0]

  return (
    <>
      <section className="hero panel panel-hero">
        <div className="hero-copy">
          <p className="eyebrow">Product leadership / AI learning / building in public</p>
          <h1>Product thinking with builder momentum.</h1>
          <p className="hero-text">
            I&apos;m Ben Murr, a product leader exploring how AI can expand what a
            PM can build, ship and understand firsthand. This site captures the
            work, the learning and the practical experiments behind that shift.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/blog">
              Read the blog
            </Link>
            <Link className="button button-ghost" href="/about">
              About Ben
            </Link>
          </div>
        </div>

        {featured ? (
          <aside className="hero-aside hero-feature panel panel-inset" aria-label="Latest article">
            <p className="meta-line">Currently live</p>
            <div className="hero-feature-visual panel panel-raised">
              <ArticleVisual article={featured} />
            </div>
            <div className="signal-row">
              <span className="signal-label">Published</span>
              <span className="signal-value">{formatDate(featured.publishDate)}</span>
            </div>
            <div className="signal-row">
              <span className="signal-label">Theme</span>
              <span className="signal-value gold">{featured.category?.title}</span>
            </div>
            <h3 className="hero-feature-title">{featured.title}</h3>
            <p className="meta-note hero-feature-summary">{featured.summary}</p>
            <div className="tag-row hero-feature-tags">
              {featured.tags.slice(0, 3).map((tag) => (
                <span className="tag" key={tag.slug}>
                  {tag.title}
                </span>
              ))}
            </div>
            <Link className="text-link" href={`/blog/${featured.slug}`}>
              Read latest article
            </Link>
          </aside>
        ) : null}
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Focus areas</p>
          <h2>What this site is for</h2>
        </div>

        <div className="project-grid homepage-focus-grid">
          <article className="card panel panel-raised">
            <p className="meta-line">01 / Writing and reflection</p>
            <h3>Blog</h3>
            <p>
              A growing archive of practical writing about learning technical
              craft as a product leader, building with AI and turning ideas
              into working products.
            </p>
            <div className="tag-row">
              <span className="tag">AI for Product</span>
              <span className="tag">Hands-On Builds</span>
              <span className="tag">Leadership</span>
            </div>
            <Link className="text-link" href="/blog">
              Browse articles
            </Link>
          </article>

          <article className="card panel panel-raised">
            <p className="meta-line">02 / About Ben</p>
            <h3>About</h3>
            <p>
              A clearer view of how I work as a product leader, how I&apos;m using
              AI to grow technical fluency and the broader experience behind
              the work collected on this site.
            </p>
            <div className="tag-row">
              <span className="tag">Product Leadership</span>
              <span className="tag">AI-Assisted Building</span>
              <span className="tag">How I Work</span>
            </div>
            <Link className="text-link" href="/about">
              Explore about Ben
            </Link>
          </article>
        </div>
      </section>

      {featured ? (
        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Latest writing</p>
            <h2>Blog foundation preview</h2>
          </div>

          <div className="blog-preview panel panel-inset">
            <article className="blog-preview-copy">
              <p className="meta-line">Featured concept article</p>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <div className="tag-row">
                {featured.tags.slice(0, 4).map((tag) => (
                  <span className="tag" key={tag.slug}>
                    {tag.title}
                  </span>
                ))}
              </div>
              <Link className="button button-primary" href={`/blog/${featured.slug}`}>
                Read example article
              </Link>
            </article>
            <div className="blog-preview-visual panel panel-raised">
              <ArticleVisual article={featured} />
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
