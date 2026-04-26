import Link from "next/link"
import { SiteNav } from "@/components/site-nav"

export function SiteHeader() {
  return (
    <header className="site-header panel panel-raised">
      <div className="masthead-bar" aria-hidden="true">
        <span className="masthead-chip">Ben Murr</span>
        <span className="masthead-rule" />
        <span className="masthead-chip">Product / AI / Building</span>
      </div>
      <div className="topbar">
        <Link className="brand" href="/" aria-label="Ben Murr home">
          <span className="brand-mark" />
          <span className="brand-copy">
            <span className="brand-name">Ben Murr</span>
            <span className="brand-meta">
              Product leadership with hands-on technical curiosity
            </span>
          </span>
        </Link>
        <SiteNav />
      </div>
    </header>
  )
}
