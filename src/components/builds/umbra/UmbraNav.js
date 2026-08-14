import React from "react"
import { Link } from "gatsby"

const navLinks = [
  { label: "Collection", href: "/builds/umbra/collection" },
  { label: "Atelier", href: "/builds/umbra/atelier" },
  { label: "Journal", href: "/builds/umbra/journal" },
  { label: "Stockists", href: "/builds/umbra/stockist" },
]

export default function UmbraNav({ current }) {
  return (
    <nav className="nav">
      <Link className="nav-logo" to="/builds/umbra/">UMBRA</Link>
      <div className="nav-links mono">
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href} className={current === link.label ? "active" : ""}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}