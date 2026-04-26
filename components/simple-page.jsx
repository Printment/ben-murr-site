export function SimplePage({ eyebrow, title, body }) {
  return (
    <section className="simple-page panel panel-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="hero-text">{body}</p>
    </section>
  )
}
