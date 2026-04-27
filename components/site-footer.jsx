import Link from "next/link"

export function SiteFooter() {
  return (
    <>
      <footer className="footer panel panel-raised">
        <div className="footer-copy-wrap">
          <p className="footer-title">Ben Murr</p>
          <p className="footer-copy">
            Product leadership, AI-assisted building and practical writing about
            learning technical craft in public.
          </p>
        </div>
        <Link className="text-link" href="/blog">
          Go to blog
        </Link>
      </footer>
      <div className="footer-legal">
        <p className="footer-note">(c) Ben Murr 2026. Made with enthusiasm, curiosity and a bit of fun.</p>
      </div>
    </>
  )
}
