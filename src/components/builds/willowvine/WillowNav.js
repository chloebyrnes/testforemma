import React from "react"
import { Link } from "gatsby"

export default function WillowNav({ current }) {
  const links = [
    { label: "About", to: "/builds/willowvine/about" },
    { label: "Portal", to: "/builds/willowvine/portal" },
    { label: "Contact", to: "/builds/willowvine/contact" },
  ]
  return (
    <header
      className="wv-body flex items-center justify-between px-8 py-6 sm:px-14"
      style={{ backgroundColor: "#DDE0D3" }}
    >
      <Link to="/builds/willowvine/" className="flex items-center gap-2">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border"
          style={{ borderColor: "#A67C4E" }}
        >
          <span className="wv-serif text-sm" style={{ color: "#A67C4E" }}>W&amp;V</span>
        </span>
      </Link>
      <nav className="flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-xs uppercase tracking-[0.2em]"
            style={{ color: current === l.label ? "#A67C4E" : "#2B2B28" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}