import Link from "next/link"
import { getAllAboutSections } from "@/lib/about"
import { AboutSectionNav } from "@/components/about-section-nav"

export const revalidate = 60
export const metadata = { title: "About" }

export default async function AboutPage() {
  const sections = await getAllAboutSections()
  const primarySection = sections[0]
  const additionalSections = sections.slice(1)

  return (
    <section className="about-hub">
      <AboutSectionNav sections={sections} />

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

          <aside className="about-hub-aside panel panel-inset">
            <p className="meta-line">Start here</p>
            <h3>{primarySection?.title ?? "About me"}</h3>
            <p>
              Start with the foundations, then add new sections over time for
              leadership principles, selected achievements, current projects or
              whatever becomes useful next.
            </p>
            {primarySection ? (
              <Link className="text-link" href={`/about/${primarySection.slug}`}>
                Open {primarySection.navLabel}
              </Link>
            ) : null}
          </aside>
        </div>

        {additionalSections.length ? (
          <div className="about-section-cards">
            {additionalSections.map((section) => (
              <article className="card panel panel-raised about-section-card" key={section.slug}>
                <p className="meta-line">Profile section</p>
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
                  Read section
                </Link>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
