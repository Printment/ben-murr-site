import Link from "next/link"
import { getAllAboutSections } from "@/lib/about"
import { getAboutPageSettings } from "@/lib/about-page-settings"
import { ArticleVisual } from "@/components/article-visual"

export const revalidate = 60
export const metadata = { title: "About" }

export default async function AboutPage() {
  const [sections, settings] = await Promise.all([
    getAllAboutSections(),
    getAboutPageSettings(),
  ])

  return (
    <section className="about-hub about-hub-map">
      <div className="about-hub-main">
        <div className="about-hub-hero panel panel-hero">
          <div className="page-hero-copy">
            <p className="eyebrow">{settings.eyebrow}</p>
            <h1 className="page-title">{settings.headline}</h1>
            <p className="hero-text">{settings.intro}</p>
          </div>
        </div>

        {sections.length ? (
          <div className="about-map-shell">
            <div className="section-heading">
              <p className="eyebrow">{settings.sectionsEyebrow}</p>
              <h2>{settings.sectionsHeading}</h2>
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
