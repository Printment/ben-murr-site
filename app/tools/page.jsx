import Link from "next/link"
import { getAllAiTools } from "@/lib/tools"
import { getToolsPageSettings } from "@/lib/tools-page-settings"

export const revalidate = 60

export async function generateMetadata() {
  const settings = await getToolsPageSettings()

  return {
    title: settings.seoTitle ?? "AI Tools",
    description: settings.seoDescription,
  }
}

export default async function ToolsPage() {
  const [tools, settings] = await Promise.all([
    getAllAiTools(),
    getToolsPageSettings(),
  ])

  return (
    <section className="tools-hub">
      <div className="tools-hub-hero panel panel-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">{settings.eyebrow}</p>
          <h1 className="page-title tools-page-title">{settings.headline}</h1>
          <p className="hero-text">{settings.intro}</p>
        </div>
      </div>

      {tools.length ? (
        <div className="tools-library-shell">
          <div className="section-heading">
            <p className="eyebrow">{settings.libraryEyebrow}</p>
            <h2>{settings.libraryHeading}</h2>
          </div>

          <div className="tools-library-grid">
            {tools.map((tool) => (
              <article className="card panel panel-raised tool-card" key={tool.slug}>
                <div className="tool-card-copy">
                  <div className="tool-card-header">
                    <h3>{tool.title}</h3>
                  </div>
                  <p>{tool.summary}</p>
                  {tool.tags.length ? (
                    <div className="tag-row">
                      {tool.tags.slice(0, 3).map((tag) => (
                        <span className="tag" key={tag.slug}>
                          {tag.title}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <Link className="text-link" href={`/tools/${tool.slug}`}>
                    Open tool page
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
