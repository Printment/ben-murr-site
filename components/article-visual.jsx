import Image from "next/image"
import { getImageUrl } from "@/sanity/lib/image"

const visualClassMap = {
  featured: "article-visual-featured",
  codex: "article-visual-codex",
  commerce: "article-visual-commerce",
  tracking: "article-visual-tracking",
}

export function ArticleVisual({ article }) {
  const imageUrl = getImageUrl(article.coverImage)
  const visualClass = visualClassMap[article.visual] ?? "article-visual-featured"

  return (
    <div className={`article-visual ${visualClass}`}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={article.title}
          fill
          className="article-visual-image"
          sizes="(max-width: 960px) 100vw, 40vw"
        />
      ) : null}
    </div>
  )
}
