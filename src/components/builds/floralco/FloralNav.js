import React from "react"
import { Link } from "gatsby"

const navLinks = [
  { label: "Home", href: "/builds/floralco/" },
  { label: "Shop", href: "/builds/floralco/shop" },
  { label: "Contact", href: "/builds/floralco/contact" },
]

export default function FloralNav({ current, cartCount = 0, onCartClick = null }) {
  return (
    <header
      className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-12"
      style={{ borderBottom: "1px solid #E7DCD0", backgroundColor: "#FAF7F2" }}
    >
      <Link to="/builds/floralco/" className="fl-serif text-2xl" style={{ color: "#2B3A2F" }}>
        Petal House
      </Link>
      <nav className="flex items-center gap-6 sm:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="fl-body text-xs uppercase tracking-[0.15em] transition-colors"
            style={{
              color: current === link.label ? "#5B7A5E" : "#7A8577",
              borderBottom: current === link.label ? "2px solid #5B7A5E" : "2px solid transparent",
              paddingBottom: "4px",
            }}
          >
            {link.label}
          </Link>
        ))}
        {onCartClick ? (
          <button type="button" onClick={onCartClick} className="relative flex items-center text-lg" aria-label="View cart">
            🛒
            {cartCount > 0 && (
              <span
                className="fl-body absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full text-[9px]"
                style={{ backgroundColor: "#E8A7B5", color: "#FFFFFF" }}
              >
                {cartCount}
              </span>
            )}
          </button>
        ) : (
          <Link to="/builds/floralco/shop" className="relative flex items-center text-lg" aria-label="View cart">
            🛒
          </Link>
        )}
      </nav>
    </header>
  )
}