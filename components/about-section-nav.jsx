import Link from "next/link"

export function AboutSectionNav({ sections, activeSlug }) {
  return (
    <aside className="about-nav-panel panel panel-inset">
      <p className="meta-line">About sections</p>
      <nav className="about-nav-list" aria-label="About section navigation">
        {sections.map((section) => {
          const isActive = section.slug === activeSlug

          return (
            <Link
              key={section.slug}
              href={`/about/${section.slug}`}
              className={`about-nav-link${isActive ? " about-nav-link-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {section.navLabel}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
