import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllAboutSections, getAboutSectionBySlug } from "@/lib/about"
import { AboutSectionNav } from "@/components/about-section-nav"
import { PortableRichText } from "@/components/portable-rich-text"
import { ArticleVisual } from "@/components/article-visual"

export const revalidate = 60

export async function generateMetadata({ params }) {
  const { slug } = await params
  const section = await getAboutSectionBySlug(slug)

  if (!section) return {}

  return {
    title: section.seoTitle ?? section.title,
    description: section.seoDescription ?? section.summary,
  }
}

export default async function AboutSectionPage({ params }) {
  const { slug } = await params
  const [sections, section] = await Promise.all([
    getAllAboutSections(),
    getAboutSectionBySlug(slug),
  ])

  if (!section) {
    notFound()
  }

  return (
    <>
      <div className="article-breadcrumb">
        <Link className="text-link" href="/about">
          Back to about
        </Link>
      </div>

      <section className="about-section-layout">
        <AboutSectionNav sections={sections} activeSlug={section.slug} />

        <article className="about-section-main">
          <header className="about-section-hero panel panel-hero">
            <div className="about-section-hero-copy">
              <p className="meta-line">Profile section</p>
              <h1 className="about-section-title">{section.title}</h1>
              <p className="about-section-deck">{section.summary}</p>
              {section.tags.length ? (
                <div className="tag-row">
                  {section.tags.map((tag) => (
                    <span className="tag" key={tag.slug}>
                      {tag.title}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <aside className="about-section-side panel panel-inset">
              <div className="about-section-side-visual">
                <ArticleVisual article={{ ...section, visual: "featured" }} />
              </div>

              <div className="about-section-side-list">
                {section.focusAreas.length ? (
                  <div className="signal-row">
                    <span className="signal-label">Focus</span>
                    <span className="signal-value">{section.focusAreas[0]}</span>
                  </div>
                ) : null}
                {section.waysOfWorking.length ? (
                  <div className="signal-row">
                    <span className="signal-label">Works best on</span>
                    <span className="signal-value gold">{section.waysOfWorking[0]}</span>
                  </div>
                ) : null}
                {section.currentInterests.length ? (
                  <div className="signal-row">
                    <span className="signal-label">Currently developing</span>
                    <span className="signal-value cyan">{section.currentInterests[0]}</span>
                  </div>
                ) : null}
              </div>
            </aside>
          </header>

          <div className="about-section-content">
            <div className="article-body panel panel-raised">
              <PortableRichText value={section.body} />
            </div>

            <aside className="about-section-reference panel panel-inset">
              <p className="meta-line">Section notes</p>

              {section.focusAreas.length ? (
                <div>
                  <p className="signal-label">Focus areas</p>
                  <ul className="about-note-list">
                    {section.focusAreas.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {section.waysOfWorking.length ? (
                <div>
                  <p className="signal-label">Ways of working</p>
                  <ul className="about-note-list">
                    {section.waysOfWorking.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {section.currentInterests.length ? (
                <div>
                  <p className="signal-label">Current interests</p>
                  <ul className="about-note-list">
                    {section.currentInterests.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>
        </article>
      </section>
    </>
  )
}
