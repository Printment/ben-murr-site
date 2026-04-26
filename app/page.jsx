import Link from "next/link"
import { getAllArticles } from "@/lib/blog"
import { ArticleVisual } from "@/components/article-visual"

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
            PM can build, ship, and understand firsthand. This site captures the
            work, the learning, and the practical experiments behind that shift.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/blog">
              Read the blog
            </Link>
            <Link className="button button-secondary" href="/ai-projects">
              See AI projects
            </Link>
            <Link className="button button-ghost" href="/about">
              About Ben
            </Link>
          </div>
        </div>

        <aside className="hero-aside panel panel-inset" aria-label="Current focus">
          <div className="signal-row">
            <span className="signal-label">Current theme</span>
            <span className="signal-value">AI-assisted building</span>
          </div>
          <div className="signal-row">
            <span className="signal-label">Primary audience</span>
            <span className="signal-value gold">PM peers and recruiters</span>
          </div>
          <div className="signal-row">
            <span className="signal-label">Writing style</span>
            <span className="signal-value cyan">Practical and reflective</span>
          </div>
          <div className="divider" />
          <p className="meta-note">
            The site pairs product storytelling with hands-on experiments in AI
            tools, lightweight technical delivery, and learning in public.
          </p>
        </aside>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Focus areas</p>
          <h2>What this site is for</h2>
        </div>

        <div className="project-grid">
          <article className="card panel panel-raised">
            <p className="meta-line">01 / Writing and reflection</p>
            <h3>Blog</h3>
            <p>
              A growing archive of practical writing about learning technical
              craft as a product leader, building with AI, and turning ideas
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
            <p className="meta-line">02 / Practical experiments</p>
            <h3>AI Projects</h3>
            <p>
              Case studies and working examples from building transactional
              sites, tracking tools, and AI-assisted product experiments outside
              the usual PM comfort zone.
            </p>
            <div className="tag-row">
              <span className="tag">Codex</span>
              <span className="tag">Loveable</span>
              <span className="tag">Polsia</span>
            </div>
            <Link className="text-link" href="/ai-projects">
              Open project list
            </Link>
          </article>

          <article className="card panel panel-raised">
            <p className="meta-line">03 / Professional signal</p>
            <h3>Career View</h3>
            <p>
              A clear route into experience, achievements, and the broader story
              behind how I lead teams and learn by doing.
            </p>
            <div className="tag-row">
              <span className="tag">CV</span>
              <span className="tag">Achievements</span>
              <span className="tag">About</span>
            </div>
            <Link className="text-link" href="/cv">
              View professional summary
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
