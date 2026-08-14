import React, { useState } from "react"
import { Link } from "gatsby"

const navLinks = [
  { label: "Home", href: "/builds/umbra/" },
  { label: "Collection", href: "/builds/umbra/collection" },
  { label: "Atelier", href: "/builds/umbra/atelier" },
  { label: "Journal", href: "/builds/umbra/journal" },
  { label: "Locations", href: "/builds/umbra/stockist" },
]

export default function UmbraNav({ current }) {
  const [open, setOpen] = useState(false)

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

      <button
        type="button"
        className={`nav-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-mobile-panel mono ${open ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={current === link.label ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}