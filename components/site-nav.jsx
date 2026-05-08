"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/tools", label: "AI Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  {
    href: "mailto:hello@benmurr.com?subject=Hello%20Ben",
    label: "Contact",
    isExternal: true,
  },
]

export function SiteNav() {
  const pathname = usePathname()

  return (
    <nav className="nav" aria-label="Primary">
      {navItems.map((item) => {
        const isActive =
          !item.isExternal && (pathname === item.href || pathname.startsWith(`${item.href}/`))

        if (item.isExternal) {
          return (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          )
        }

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
