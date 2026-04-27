"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
]

export function SiteNav() {
  const pathname = usePathname()

  return (
    <nav className="nav" aria-label="Primary">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || (item.href === "/blog" && pathname.startsWith("/blog/"))

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link${isActive ? " nav-link-active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
