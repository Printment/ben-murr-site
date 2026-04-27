import { PortableText } from "@portabletext/react"
import { getImageUrl } from "@/sanity/lib/image"

const portableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    blockquote: ({ children }) => <blockquote className="article-quote">{children}</blockquote>,
  },
  types: {
    image: ({ value }) => {
      const imageUrl = value?.asset ? getImageUrl(value) : null

      if (!imageUrl) return null

      return (
        <figure className="article-inline-image">
          <img
            className="article-inline-image-element"
            src={imageUrl}
            alt={value.alt ?? ""}
          />
          {value.caption ? (
            <figcaption className="article-inline-caption">{value.caption}</figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

export function PortableRichText({ value }) {
  return <PortableText value={value} components={portableTextComponents} />
}
