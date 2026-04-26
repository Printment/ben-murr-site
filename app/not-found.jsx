import Link from "next/link"

export default function NotFound() {
  return (
    <section className="simple-page panel panel-hero">
      <p className="eyebrow">Not found</p>
      <h1 className="page-title">That page doesn&apos;t exist yet.</h1>
      <p className="hero-text">
        The route may not be published yet, or the article slug may not exist.
      </p>
      <Link className="button button-primary" href="/blog">
        Return to blog
      </Link>
    </section>
  )
}
