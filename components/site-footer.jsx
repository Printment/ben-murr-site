import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="footer panel panel-raised">
      <p className="footer-title">Ben Murr</p>
      <p className="footer-copy">
        Product leadership, AI-assisted building, and practical writing about
        learning technical craft in public.
      </p>
      <Link className="text-link" href="/blog">
        Go to blog
      </Link>
    </footer>
  )
}
