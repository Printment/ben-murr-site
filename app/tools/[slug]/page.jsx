import Link from "next/link"
import { notFound } from "next/navigation"
import { PortableRichText } from "@/components/portable-rich-text"
import { getAllAiTools, getAiToolBySlug } from "@/lib/tools"

const sectionDefinitions = [
  { key: "whatItIs", title: "What it is" },
  { key: "whatIUseItFor", title: "What I use it for" },
  { key: "whereItWorksWell", title: "Where it works well" },
  { key: "drawbacksOrLimits", title: "Drawbacks or limits" },
  { key: "whoShouldUseIt", title: "Who should use it" },
  { key: "myVerdict", title: "My verdict" },
]

export const revalidate = 60

export async function generateStaticParams() {
  const tools = await getAllAiTools()

  return tools.map((tool) => ({
    slug: tool.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const tool = await getAiToolBySlug(slug)

  if (!tool) return {}

  return {
    title: tool.seoTitle ?? tool.title,
    description: tool.seoDescription ?? tool.summary,
  }
}

export default async function ToolDetailPage({ params }) {
  const { slug } = await params
  const tool = await getAiToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  return (
    <>
      <div className="article-breadcrumb">
        <Link className="text-link" href="/tools">
          Back to AI tools
        </Link>
      </div>

      <article className="tool-detail-layout">
        <header className="tool-detail-hero panel panel-hero">
          <div className="tool-detail-header">
            <p className="meta-line">AI tool / Reference page</p>
            <h1 className="tool-detail-title">{tool.title}</h1>
            <p className="tool-detail-deck">{tool.summary}</p>
            {tool.tags.length ? (
              <div className="tag-row">
                {tool.tags.map((tag) => (
                  <span className="tag" key={tag.slug}>
                    {tag.title}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <div className="tool-section-grid">
          {sectionDefinitions.map((section) => (
            <section className="tool-section-card panel panel-raised" key={section.key}>
              <p className="meta-line">{section.title}</p>
              <div className="tool-section-body">
                <PortableRichText value={tool[section.key]} />
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
