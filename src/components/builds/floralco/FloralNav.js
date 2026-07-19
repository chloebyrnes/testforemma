import React from "react"
import { Link } from "gatsby"
import logo from "../../../images/floralco/floralcologo.png"

export default function FloralNav({ current }) {
  const links = [
    { label: "Home", to: "/builds/floralco/" },
    { label: "Shop", to: "/builds/floralco/shop" },
    { label: "About", to: "/builds/floralco/about" },
    { label: "Contact", to: "/builds/floralco/contact" },
  ]
  return (
    <header
      className="fl-body flex flex-col items-center gap-5 px-6 py-8 sm:px-10"
      style={{ borderBottom: "1px solid #8A9468" }}
    >
      <Link to="/builds/floralco/" className="flex items-center">
        <img src={logo} alt="Petal & Bloom Co." className="h-16 w-auto sm:h-20" />
      </Link>
      <nav className="flex flex-wrap items-center justify-center gap-6">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-sm uppercase tracking-[0.1em]"
            style={{
              color: "#FFFFFF",
              fontWeight: current === l.label ? 700 : 400,
              borderBottom: current === l.label ? "2px solid #8A9468" : "2px solid transparent",
            }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}