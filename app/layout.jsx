import "./globals.css"
import { SiteShell } from "@/components/site-shell"

export const metadata = {
  title: {
    default: "Ben Murr | Product Leadership, AI, and Hands-On Building",
    template: "%s | Ben Murr",
  },
  description:
    "Product leadership, AI-assisted building, and practical writing about learning technical craft in public.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="chrome-grid" aria-hidden="true" />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
