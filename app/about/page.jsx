import Link from "next/link"
import { getAllAboutSections } from "@/lib/about"
import { ArticleVisual } from "@/components/article-visual"

export const revalidate = 60
export const metadata = { title: "About" }

export default async function AboutPage() {
  const sections = await getAllAboutSections()

  return (
    <section className="about-hub about-hub-map">
      <div className="about-hub-main">
        <div className="about-hub-hero panel panel-hero">
          <div className="page-hero-copy">
            <p className="eyebrow">About / Profile / How I work</p>
            <h1 className="page-title">A steadier view of the person behind the experiments.</h1>
            <p className="hero-text">
              The blog is where I write in motion. This space is where I explain
              how I work, what I care about and how AI is changing the way I
              build, learn and lead.
            </p>
          </div>
        </div>

        {sections.length ? (
          <div className="about-map-shell">
            <div className="section-heading">
              <p className="eyebrow">Explore the profile</p>
              <h2>Sections that grow with the work</h2>
            </div>

            <div className="about-map-grid">
              {sections.map((section, index) => (
                <article
                  className={`card panel panel-raised about-map-card${index === 0 ? " about-map-card-featured" : ""}`}
                  key={section.slug}
                >
                  <div className="about-map-card-visual">
                    <ArticleVisual article={{ ...section, visual: "featured" }} />
                  </div>

                  <div className="about-map-card-copy">
                    <h3>{section.title}</h3>
                    <p>{section.summary}</p>
                    {section.tags.length ? (
                      <div className="tag-row">
                        {section.tags.slice(0, 3).map((tag) => (
                          <span className="tag" key={tag.slug}>
                            {tag.title}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <Link className="text-link" href={`/about/${section.slug}`}>
                      {index === 0 ? `Open ${section.navLabel}` : "Read section"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
