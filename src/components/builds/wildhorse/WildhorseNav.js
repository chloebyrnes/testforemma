import React from "react"
import { Link } from "gatsby"
import bouWesternFont from "../../../fonts/bou_western/BouWeste.ttf"

export const wh = {
  bg: "#1C1712",
  surface: "#2A2119",
  surfaceLight: "#F4EDE4",
  ink: "#EDE1CF",
  inkMuted: "#B5A791",
  rust: "#B5563C",
  gold: "#C99A44",
  sage: "#7C8B6F",
  darkInk: "#2A2119",
}

export const fontFace = `
  @font-face {
    font-family: 'Bou Western';
    src: url(${bouWesternFont}) format('truetype');
    font-display: swap;
  }
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&display=swap');
  .wh-display { font-family: 'Bou Western', cursive; letter-spacing: 0.02em; }
  .wh-body { font-family: 'Karla', sans-serif; }
  a, button {
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  a:hover, button:hover {
    transform: translateY(-2px);
    opacity: 0.88;
  }
`

const navLinks = [
  { label: "Home", href: "/builds/wildhorse/" },
  { label: "The Finds", href: "/builds/wildhorse/finds" },
  { label: "Events", href: "/builds/wildhorse/events" },
  { label: "Visit", href: "/builds/wildhorse/contact" },
]

export default function WildhorseNav({ current }) {
  return (
    <header
      className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-12"
      style={{ borderBottom: `1px solid ${wh.surface}`, backgroundColor: wh.bg }}
    >
      <Link to="/builds/wildhorse/" className="wh-display text-3xl" style={{ color: wh.gold }}>
        Wildhorse Vintage
      </Link>
      <nav className="flex flex-wrap gap-6 sm:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="wh-body text-xs uppercase tracking-[0.2em] transition-colors"
            style={{
              color: current === link.label ? wh.gold : wh.inkMuted,
              borderBottom: current === link.label ? `2px solid ${wh.gold}` : "2px solid transparent",
              paddingBottom: "4px",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}