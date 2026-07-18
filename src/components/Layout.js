import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import websiteDiagram from "../images/websitediagram.png"
import clientPortalDiagram from "../images/clientportaldiagram.png"
import internalToolDiagram from "../images/internaltooldiagram.png"
import webAppDiagram from "../images/webappdiagram.png"

export const COMPANY_NAME = "[Company Name]"

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
]

export const projectTypes = [
  "Custom Website",
  "Client Portal",
  "Internal Tool",
  "Portal or Internal Tool",
  "Custom Web Application",
  "Not sure yet",
]

export const services = [
  {
    tag: "01",
    title: "Custom Websites",
    contactType: "Custom Website",
    image: websiteDiagram,
    body: "Marketing sites, product sites, and everything in between, designed to represent your business and built to perform.",
    detail:
      "A website built from scratch around your business, not squeezed into a template. We handle everything from the initial layout and content structure through responsive design, SEO basics, and a clean handoff so it's easy to maintain.",
  },
  {
    tag: "02",
    title: "Client Portals",
    contactType: "Client Portal",
    image: clientPortalDiagram,
    body: "Give the people you work with a place to log in, track progress, and get what they need without a phone call.",
    detail:
      "A secure, branded space for your clients to log in, see status updates, download files, or submit information. We design the flow around what your clients actually need to see, not a generic dashboard template.",
  },
  {
    tag: "03",
    title: "Internal Tools",
    contactType: "Internal Tool",
    image: internalToolDiagram,
    body: "Software your team uses behind the scenes, like inventory trackers, scheduling systems, or reporting dashboards, built to fit how you actually work.",
    detail:
      "Internal tools are the software your team relies on daily but customers never see, things like inventory systems, scheduling tools, order tracking, or reporting dashboards. Spreadsheets and off-the-shelf tools only get you so far. We build tools shaped around your team's actual process, so the tool fits the work instead of the other way around.",
  },
  {
    tag: "04",
    title: "Custom Web Applications",
    contactType: "Custom Web Application",
    image: webAppDiagram,
    body: "Portals, dashboards, and business tools that go beyond a standard website, built when nothing off-the-shelf fits.",
    detail:
      "For projects that don't fit neatly into 'website' or 'internal tool,' we scope and build custom web applications from the ground up, covering everything from the initial technical plan to a finished, working product.",
  },
]

export const pricingTiers = [
  {
    tag: "01",
    title: "Custom Website",
    contactType: "Custom Website",
    price: "Starting at $1,500",
    body: "A custom-designed site built to represent your business and bring in the right traffic. More complex sites are quoted higher.",
    includes: ["Custom design, no templates", "Mobile-responsive build", "Up to 5 pages", "Basic SEO setup"],
  },
  {
    tag: "02",
    title: "Portal or Internal Tool",
    contactType: "Portal or Internal Tool",
    price: "Starting at $3,500",
    body: "Covers straightforward tools like client portals, dashboards, admin systems, or business workflows. More complex functionality gets a custom quote.",
    includes: ["User accounts & permissions", "Custom dashboard", "Database integration", "Admin controls"],
  },
  {
    tag: "03",
    title: "Custom Web Application",
    contactType: "Custom Web Application",
    price: "Scoped individually",
    body: "For projects with no off-the-shelf equivalent. We scope it after we understand what you need.",
    includes: ["Discovery workshop", "Technical specification", "Dedicated design & dev team", "Ongoing support"],
  },
]

export const process = [
  { step: "01", title: "Idea", body: "We start with what you're trying to do and who it's for." },
  { step: "02", title: "Strategy", body: "We map the plan: scope, priorities, and how the pieces fit together." },
  { step: "03", title: "UI/UX Design", body: "We design how it looks and feels, screen by screen." },
  { step: "04", title: "User Flow", body: "We chart how people move through it, start to finish." },
  { step: "05", title: "Development", body: "We build it, custom code, made for your business." },
]

export const accentCycle = ["#423F2F", "#BDB485"]

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@500;600;700&family=Pinyon+Script&family=Space+Grotesk:wght@500;600;700&family=Playfair+Display:wght@500;600;700&family=Poppins:wght@400;500;600&display=swap');

  html, body, #___gatsby, #gatsby-focus-wrapper {
    background-color: #F2EBDA;
  }
  .font-display { font-family: 'Cormorant Garamond', serif; }
  .font-script { font-family: 'Pinyon Script', cursive; }
  .font-mono { font-family: 'IBM Plex Mono', monospace; }
  .font-body { font-family: 'Inter', sans-serif; }

  .menu-panel {
    background-color: #C9AE99;
    border: 2px solid #423F2F;
    box-shadow: 0 10px 24px rgba(66, 63, 47, 0.2);
  }
  .menu-link {
    display: block;
    color: #423F2F;
    border-left: 3px solid transparent;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .menu-link:hover,
  .menu-link:focus-visible {
    background-color: #F2EBDA;
    color: #423F2F;
    border-left-color: #423F2F;
    outline: none;
  }
  .menu-link.active {
    background-color: #D5D6BA;
    border-left-color: #423F2F;
    font-weight: 600;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid #423F2F;
    outline-offset: 2px;
  }

  .btn-primary {
    background-color: #423F2F;
    color: #F2EBDA;
    transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }
  .btn-primary:hover {
    background-color: #5A5540;
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(66, 63, 47, 0.32);
  }
  .btn-secondary {
    background-color: #C9AE99;
    border: 1px solid #423F2F;
    color: #423F2F;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(66, 63, 47, 0.28);
  }
  .btn-arrow {
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .btn-primary:hover .btn-arrow,
  .btn-secondary:hover .btn-arrow {
    transform: translateX(4px);
  }

  .service-card, .pricing-card {
    border-left: 4px solid var(--accent, #423F2F);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .service-card:hover, .pricing-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 34px rgba(66, 63, 47, 0.18);
  }

  .back-to-top {
    transition: opacity 0.25s ease, transform 0.25s ease, background-color 0.2s ease;
  }
  .back-to-top:hover {
    background-color: #5A5540;
    transform: translateY(-3px);
  }

  .reveal {
    transform: translateY(24px);
    transition: transform 0.7s ease;
  }
  .reveal.visible {
    transform: translateY(0);
  }
`

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const [ref, visible] = useReveal()
  const Tag = as
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  )
}

export function CrosshairMark({ className = "", style = {} }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="none" aria-hidden="true">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

export function CornerMarks({ color = "#423F2F" }) {
  const base = "absolute h-5 w-5"
  return (
    <>
      <CrosshairMark className={`${base} -top-2 -left-2`} style={{ color, opacity: 0.5 }} />
      <CrosshairMark className={`${base} -top-2 -right-2`} style={{ color, opacity: 0.5 }} />
      <CrosshairMark className={`${base} -bottom-2 -left-2`} style={{ color, opacity: 0.5 }} />
      <CrosshairMark className={`${base} -bottom-2 -right-2`} style={{ color, opacity: 0.5 }} />
    </>
  )
}

export function WatercolorWash({ aspect = "aspect-[20/7]", className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden ${aspect} ${className}`} style={{ backgroundColor: "#F2EBDA" }}>
      <svg viewBox="0 0 1600 560" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="wc-rough" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="70" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="wc-rough2" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="2" seed="21" result="noise2" />
            <feDisplacementMap in="SourceGraphic" in2="noise2" scale="55" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <filter id="wc-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="grain" />
            <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0.26  0 0 0 0 0.24  0 0 0 0 0.18  0 0 0 0.05 0" />
          </filter>
        </defs>

        <ellipse cx="260" cy="180" rx="360" ry="220" fill="#D5D6BA" opacity="0.55" filter="url(#wc-rough)" />
        <ellipse cx="1300" cy="420" rx="420" ry="260" fill="#C9AE99" opacity="0.55" filter="url(#wc-rough)" />
        <ellipse cx="820" cy="80" rx="300" ry="160" fill="#BDB485" opacity="0.45" filter="url(#wc-rough2)" />
        <ellipse cx="1150" cy="120" rx="220" ry="150" fill="#D5D6BA" opacity="0.4" filter="url(#wc-rough2)" />
        <ellipse cx="480" cy="440" rx="280" ry="180" fill="#C9AE99" opacity="0.4" filter="url(#wc-rough2)" />
        <ellipse cx="60" cy="480" rx="220" ry="150" fill="#BDB485" opacity="0.35" filter="url(#wc-rough)" />

        <rect x="0" y="0" width="1600" height="560" filter="url(#wc-grain)" />
      </svg>
    </div>
  )
}

const lightBlueWhitePalette = {
  name: "Light Blue & White",
  bg: "#FFFFFF",
  surface: "#F9FBFD",
  ink: "#1F3A52",
  a1: "#DCEBF6",
  a2: "#9FC6E3",
  a3: "#4A83AF",
  font: "'Inter', sans-serif",
  layout: "classic",
  align: "left",
}

const mockupPalettes = [
  {
    name: "Default",
    bg: "#F2EBDA",
    surface: "#FEFEFB",
    ink: "#423F2F",
    a1: "#D5D6BA",
    a2: "#C9AE99",
    a3: "#BDB485",
    font: "'Cormorant Garamond', serif",
    layout: "classic",
    align: "left",
  },
  {
    name: "Black & White",
    bg: "#161616",
    surface: "#242424",
    ink: "#F2F2F2",
    a1: "#3A3A3A",
    a2: "#585858",
    a3: "#828282",
    font: "'Space Grotesk', sans-serif",
    layout: "minimal",
    align: "left",
  },
  {
    name: "Blush",
    bg: "#E8E1D1",
    surface: "#F4EFE4",
    ink: "#4B342C",
    a1: "#D8B69F",
    a2: "#C38380",
    a3: "#9C7164",
    font: "'Playfair Display', serif",
    layout: "editorial",
    align: "center",
  },
  {
    name: "Sage",
    bg: "#DFDAC2",
    surface: "#EBE6D2",
    ink: "#4E5138",
    a1: "#E5DCB1",
    a2: "#D4D3B3",
    a3: "#8D926F",
    font: "'Poppins', sans-serif",
    layout: "friendly",
    align: "right",
  },
  {
    name: "Cream & Burgundy",
    bg: "#F3EAD8",
    surface: "#FBF6EC",
    ink: "#3B2A22",
    a1: "#D8C3A0",
    a2: "#6E2A35",
    a3: "#8C5A3C",
    font: "'Pinyon Script', cursive",
    layout: "classic",
    align: "left",
  },
]

export function WebsiteMockup() {
  const [tab, setTab] = useState("Home")
  const tabs = ["Home", "About", "Contact"]
  const [sent, setSent] = useState(false)
  const [paletteIndex, setPaletteIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const p = mockupPalettes[paletteIndex]

  const stop = (fn) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    fn()
  }

  const cardRadius = p.layout === "friendly" ? "rounded-xl" : p.layout === "minimal" ? "rounded-none" : "rounded-sm"
  const frameRadius = p.layout === "friendly" ? "rounded-2xl" : "rounded-none"
  const btnRadius = p.layout === "friendly" ? "rounded-full" : p.layout === "minimal" ? "rounded-none" : "rounded-sm"
  const heroAlign =
    p.align === "center"
      ? "text-center items-center"
      : p.align === "right"
      ? "text-right items-end"
      : "text-left items-start"

  const NavBar = () => {
    if (p.layout === "minimal") {
      return (
        <div className="relative flex items-center justify-between border-b px-4 py-3" style={{ borderColor: `${p.ink}33`, backgroundColor: p.bg }}>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: p.ink }}>{tab}</span>
          <button
            type="button"
            onClick={stop(() => setMenuOpen((v) => !v))}
            className="flex flex-col gap-1"
            aria-label="Menu"
          >
            <span className="block h-[1.5px] w-5" style={{ backgroundColor: p.ink }} />
            <span className="block h-[1.5px] w-5" style={{ backgroundColor: p.ink }} />
            <span className="block h-[1.5px] w-5" style={{ backgroundColor: p.ink }} />
          </button>
          {menuOpen && (
            <div className="absolute right-4 top-full z-10 mt-1 w-36 border" style={{ borderColor: p.ink, backgroundColor: p.bg }}>
              {tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={stop(() => {
                    setTab(t)
                    setMenuOpen(false)
                  })}
                  className="block w-full px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-[0.1em]"
                  style={{ backgroundColor: tab === t ? p.ink : "transparent", color: tab === t ? p.bg : p.ink }}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
      )
    }
    return (
      <div
        className={`flex gap-1 border-b px-4 pt-3 ${p.layout === "editorial" ? "justify-center" : ""}`}
        style={{ borderColor: `${p.ink}33`, backgroundColor: p.bg }}
      >
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={stop(() => setTab(t))}
            className={`${btnRadius === "rounded-full" ? "rounded-t-full" : "rounded-t-sm"} px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors`}
            style={{
              backgroundColor: tab === t ? p.ink : "transparent",
              color: tab === t ? p.bg : p.ink,
            }}
          >
            {t}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#423F2F]/60">Try a style:</span>
        {mockupPalettes.map((pal, idx) => (
          <button
            key={pal.name}
            type="button"
            onClick={stop(() => {
              setPaletteIndex(idx)
              setMenuOpen(false)
            })}
            className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] transition-colors"
            style={{
              borderColor: "#423F2F",
              backgroundColor: idx === paletteIndex ? "#423F2F" : "transparent",
              color: idx === paletteIndex ? "#F2EBDA" : "#423F2F",
            }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full border"
              style={{ backgroundColor: pal.ink, borderColor: idx === paletteIndex ? "#F2EBDA" : "#423F2F" }}
            />
            {pal.name}
          </button>
        ))}
      </div>
      <p className="mb-3 font-mono text-[9px] italic text-[#423F2F]/50">
        Just examples, we'll design something unique for your brand.
      </p>

      <div className={`w-full overflow-hidden border transition-colors duration-300 ${frameRadius}`} style={{ borderColor: p.ink, backgroundColor: p.bg }}>
        <div className="flex items-center gap-2 border-b px-4 py-2.5 transition-colors duration-300" style={{ borderColor: `${p.ink}4D`, backgroundColor: p.a1 }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.ink }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.ink }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.ink }} />
          <span
            className="ml-2 flex-1 truncate rounded-sm px-3 py-1 font-mono text-[10px]"
            style={{ backgroundColor: p.bg, color: p.ink }}
          >
            yourbusiness.com
          </span>
        </div>

        <NavBar />

        <div className="p-6 transition-colors duration-300 sm:p-8" style={{ backgroundColor: p.bg }}>
          {tab === "Home" && (
            <div className={`flex flex-col ${heroAlign}`}>
              {p.layout === "minimal" ? (
                <div className="flex w-full flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${p.ink}99` }}>Welcome to</p>
                    <p className="mt-1 text-2xl uppercase tracking-tight sm:text-3xl" style={{ color: p.ink, fontFamily: p.font }}>
                      Your Business Name
                    </p>
                    <p className="mt-2 max-w-xs text-sm" style={{ color: `${p.ink}B3` }}>
                      A short line about what you do, who you help, and why they should choose you.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={stop(() => {})}
                    className={`inline-block flex-none ${btnRadius} px-6 py-3 font-mono text-xs uppercase tracking-[0.1em]`}
                    style={{ backgroundColor: p.ink, color: p.bg }}
                  >
                    Get Started
                  </button>
                </div>
              ) : (
                <>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${p.ink}99` }}>Welcome to</p>
                  <p className="mt-1 text-2xl sm:text-3xl" style={{ color: p.ink, fontFamily: p.font }}>
                    Your Business Name
                  </p>
                  {p.layout === "editorial" && <span className="mt-2 h-px w-16" style={{ backgroundColor: p.a3 }} />}
                  <p className={`mt-2 max-w-md text-sm ${p.layout === "editorial" ? "mx-auto" : ""}`} style={{ color: `${p.ink}B3` }}>
                    A short line about what you do, who you help, and why they should choose you.
                  </p>
                  <button
                    type="button"
                    onClick={stop(() => {})}
                    className={`mt-4 inline-block ${btnRadius} px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em]`}
                    style={{ backgroundColor: p.ink, color: p.bg }}
                  >
                    Get Started
                  </button>
                </>
              )}

              <p className="mt-8 w-full font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${p.ink}99` }}>What we offer</p>

              {p.layout === "minimal" && (
                <div className="mt-3 w-full divide-y" style={{ borderColor: `${p.ink}33` }}>
                  {["Service A", "Service B", "Service C"].map((label) => (
                    <div key={label} className="flex items-center justify-between border-t py-3" style={{ borderColor: `${p.ink}33` }}>
                      <span className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: p.ink }}>{label}</span>
                      <span style={{ color: p.ink }}>→</span>
                    </div>
                  ))}
                </div>
              )}

              {p.layout === "editorial" && (
                <div className="mt-3 grid w-full grid-cols-2 gap-4">
                  {["Service A", "Service B"].map((label, idx) => (
                    <div key={label} className="relative border p-4" style={{ borderColor: `${p.ink}26`, backgroundColor: p.surface }}>
                      {idx === 0 && (
                        <span
                          className="absolute -top-2 right-3 rounded-full px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.08em]"
                          style={{ backgroundColor: p.a3, color: p.ink }}
                        >
                          Popular
                        </span>
                      )}
                      <div className="aspect-[4/3] w-full" style={{ backgroundColor: idx === 0 ? p.a1 : p.a2 }} />
                      <p className="mt-3 text-sm" style={{ color: p.ink, fontFamily: p.font }}>{label}</p>
                    </div>
                  ))}
                </div>
              )}

              {(p.layout === "classic" || p.layout === "friendly") && (
                <div className={`mt-3 grid w-full grid-cols-3 gap-3`}>
                  {["Service A", "Service B", "Service C"].map((label, idx) => (
                    <div key={label} className={`border p-3 ${cardRadius}`} style={{ borderColor: `${p.ink}33`, backgroundColor: p.surface }}>
                      <div className={`aspect-square w-full ${p.layout === "friendly" ? "rounded-lg" : ""}`} style={{ backgroundColor: [p.a1, p.a2, p.a3][idx] }} />
                      <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: p.ink }}>{label}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className={`mt-8 w-full ${p.layout === "editorial" ? "border-t border-b py-5 text-center" : "border-l-2 pl-4"}`} style={{ borderColor: p.a2 }}>
                <p className="text-sm italic" style={{ color: `${p.ink}CC`, fontFamily: p.font }}>
                  "Working with them was easy from start to finish, exactly what we needed."
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: `${p.ink}80` }}>A Happy Client</p>
              </div>
            </div>
          )}

          {tab === "About" && (
            <div className={heroAlign.includes("center") ? "text-center" : ""}>
              <p className="text-xl sm:text-2xl" style={{ color: p.ink, fontFamily: p.font }}>Our Story</p>
              <p className={`mt-2 max-w-md text-sm leading-relaxed ${p.layout === "editorial" ? "mx-auto" : ""}`} style={{ color: `${p.ink}B3` }}>
                A short paragraph about the business, how it got started, and the values that
                guide the work. This is where visitors get a sense of who they're working with.
              </p>
              <div className={`mt-5 aspect-[3/1] w-full ${p.layout === "friendly" ? "rounded-xl" : ""}`} style={{ backgroundColor: p.a1 }} />

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${p.ink}99` }}>Meet the team</p>
              <div className={`mt-3 flex gap-4 ${p.layout === "editorial" ? "justify-center" : ""}`}>
                {[0, 1, 2].map((n) => (
                  <div key={n} className="text-center">
                    <div className="mx-auto h-12 w-12 rounded-full" style={{ backgroundColor: [p.a1, p.a2, p.a3][n] }} />
                    <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.08em]" style={{ color: `${p.ink}B3` }}>Team {n + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "Contact" && (
            <div className={p.layout === "editorial" ? "text-center" : "grid gap-8 sm:grid-cols-[1.3fr_1fr]"}>
              {sent ? (
                <p className="text-xl" style={{ color: p.ink, fontFamily: p.font }}>Thanks, we'll be in touch.</p>
              ) : (
                <div className={`space-y-3 ${p.layout === "editorial" ? "mx-auto max-w-xs" : ""}`}>
                  <div className={`h-10 w-full border ${cardRadius}`} style={{ borderColor: `${p.ink}4D`, backgroundColor: p.surface }} />
                  <div className={`h-10 w-full border ${cardRadius}`} style={{ borderColor: `${p.ink}4D`, backgroundColor: p.surface }} />
                  <div className={`h-20 w-full border ${cardRadius}`} style={{ borderColor: `${p.ink}4D`, backgroundColor: p.surface }} />
                  <button
                    type="button"
                    onClick={stop(() => setSent(true))}
                    className={`${btnRadius} px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em]`}
                    style={{ backgroundColor: p.ink, color: p.bg }}
                  >
                    Send
                  </button>
                </div>
              )}
              {p.layout !== "editorial" && (
                <div className="space-y-3 border-l pl-6 text-sm" style={{ borderColor: `${p.ink}33`, color: `${p.ink}B3` }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${p.ink}99` }}>Email</p>
                  <p>hello@yourbusiness.com</p>
                  <p className="pt-2 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${p.ink}99` }}>Hours</p>
                  <p>Mon-Fri, 9am-5pm</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



export function PortalMockup() {
  const portalPalettes = [mockupPalettes[0], lightBlueWhitePalette, mockupPalettes[1]]

  const [tab, setTab] = useState("Dashboard")
  const tabs = ["Dashboard", "Files", "Messages"]
  const [paletteIndex, setPaletteIndex] = useState(0)
  const [reply, setReply] = useState("")
  const [sent, setSent] = useState(false)
  const p = portalPalettes[paletteIndex]

  const stop = (fn) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    fn()
  }

  const files = [
    { name: "Project Brief.pdf", date: "Jul 2" },
    { name: "Contract.pdf", date: "Jun 28" },
    { name: "Brand Assets.zip", date: "Jun 20" },
    { name: "Invoice 003.pdf", date: "Jun 14" },
    { name: "Style Guide.pdf", date: "Jun 8" },
  ]

  const stats = [
    { label: "Status", value: "In Progress" },
    { label: "Files Shared", value: "8" },
    { label: "New Messages", value: "3" },
  ]

  const activity = [
    { text: "Team uploaded Brand Assets.zip", time: "2 days ago" },
    { text: "Invoice 003 was paid", time: "4 days ago" },
    { text: "Project moved to In Progress", time: "1 week ago" },
    { text: "Kickoff call completed", time: "2 weeks ago" },
  ]

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#423F2F]/60">Try a style:</span>
        {portalPalettes.map((pal, idx) => (
          <button
            key={pal.name}
            type="button"
            onClick={stop(() => setPaletteIndex(idx))}
            className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] transition-colors"
            style={{
              borderColor: "#423F2F",
              backgroundColor: idx === paletteIndex ? "#423F2F" : "transparent",
              color: idx === paletteIndex ? "#F2EBDA" : "#423F2F",
            }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full border"
              style={{ backgroundColor: pal.ink, borderColor: idx === paletteIndex ? "#F2EBDA" : "#423F2F" }}
            />
            {pal.name}
          </button>
        ))}
      </div>
      <p className="mb-3 font-mono text-[9px] italic text-[#423F2F]/50">
        Just examples, we'll design something unique for your brand.
      </p>

      <div className="flex w-full overflow-hidden border transition-colors duration-300" style={{ borderColor: p.ink, backgroundColor: p.bg }}>
        <div className="flex w-40 flex-none flex-col border-r py-6" style={{ borderColor: `${p.ink}33`, backgroundColor: p.surface }}>
          <div className="flex flex-col items-center px-3 text-center">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full font-mono text-xs"
              style={{ backgroundColor: p.a2, color: p.ink }}
            >
              CN
            </div>
            <p className="mt-2 text-sm" style={{ color: p.ink, fontFamily: p.font }}>Client Name</p>
            <p className="font-mono text-[8px] uppercase tracking-[0.08em]" style={{ color: `${p.ink}80` }}>Acme Co.</p>
          </div>
          <div className="mt-6 flex flex-col gap-1 px-3">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={stop(() => setTab(t))}
                className="rounded-sm px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.1em] transition-colors"
                style={{
                  backgroundColor: tab === t ? p.ink : "transparent",
                  color: tab === t ? p.bg : p.ink,
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 border-b px-4 py-2.5 transition-colors duration-300" style={{ borderColor: `${p.ink}4D`, backgroundColor: p.a1 }}>
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.ink }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.ink }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.ink }} />
            <span className="ml-2 flex-1 truncate rounded-sm px-3 py-1 font-mono text-[10px]" style={{ backgroundColor: p.bg, color: p.ink }}>
              portal.yourbusiness.com
            </span>
          </div>

          <div className="p-6 transition-colors duration-300 sm:p-8" style={{ backgroundColor: p.bg }}>
            {tab === "Dashboard" && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${p.ink}99` }}>Welcome back</p>
                <p className="mt-1 text-2xl sm:text-3xl" style={{ color: p.ink, fontFamily: p.font }}>Client Name</p>
                <p className="mt-2 max-w-md text-sm" style={{ color: `${p.ink}B3` }}>
                  Here's what's happening with your project.
                </p>

                <div className="mt-6 w-full">
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: `${p.ink}99` }}>
                    <span>Project Progress</span>
                    <span>65%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden" style={{ backgroundColor: p.a1 }}>
                    <div className="h-full" style={{ width: "65%", backgroundColor: p.a3 }} />
                  </div>
                </div>

                <div className="mt-6 grid w-full grid-cols-3 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="border p-3" style={{ borderColor: `${p.ink}33`, backgroundColor: p.surface }}>
                      <p className="text-lg" style={{ color: p.ink, fontFamily: p.font }}>{s.value}</p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: `${p.ink}80` }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${p.ink}99` }}>Recent Activity</p>
                <div className="mt-3 divide-y" style={{ borderColor: `${p.ink}26` }}>
                  {activity.map((a) => (
                    <div key={a.text} className="flex items-center justify-between border-t py-3" style={{ borderColor: `${p.ink}26` }}>
                      <span className="text-sm" style={{ color: `${p.ink}D9` }}>{a.text}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.08em]" style={{ color: `${p.ink}70` }}>{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "Files" && (
              <div>
                <p className="text-xl sm:text-2xl" style={{ color: p.ink, fontFamily: p.font }}>Shared Files</p>
                <div className="mt-4 divide-y" style={{ borderColor: `${p.ink}26` }}>
                  {files.map((file) => (
                    <div key={file.name} className="flex items-center justify-between border-t py-3" style={{ borderColor: `${p.ink}26` }}>
                      <div>
                        <p className="text-sm" style={{ color: p.ink }}>{file.name}</p>
                        <p className="font-mono text-[9px] uppercase tracking-[0.08em]" style={{ color: `${p.ink}70` }}>{file.date}</p>
                      </div>
                      <span className="rounded-sm px-3 py-1 font-mono text-[9px] uppercase tracking-[0.08em]" style={{ backgroundColor: p.a1, color: p.ink }}>
                        Download
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "Messages" && (
              <div>
                <p className="text-xl sm:text-2xl" style={{ color: p.ink, fontFamily: p.font }}>Messages</p>
                <div className="mt-4 space-y-3">
                  <div className="inline-block max-w-[80%] rounded-sm px-4 py-2 text-sm" style={{ backgroundColor: p.a1, color: p.ink }}>
                    Hi, just checking in on the project status.
                  </div>
                  <div className="ml-auto block max-w-[80%] rounded-sm px-4 py-2 text-right text-sm" style={{ backgroundColor: p.ink, color: p.bg }}>
                    Right on track, update coming this week.
                  </div>
                  <div className="inline-block max-w-[80%] rounded-sm px-4 py-2 text-sm" style={{ backgroundColor: p.a1, color: p.ink }}>
                    Sounds great, thanks for the update.
                  </div>
                </div>
                {sent ? (
                  <p className="mt-4 font-mono text-xs" style={{ color: `${p.ink}99` }}>Message sent.</p>
                ) : (
                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      placeholder="Write a reply..."
                      className="flex-1 rounded-sm border px-3 py-2 text-sm outline-none"
                      style={{ borderColor: `${p.ink}4D`, backgroundColor: p.surface, color: p.ink }}
                    />
                    <button
                      type="button"
                      onClick={stop(() => setSent(true))}
                      className="rounded-sm px-4 py-2 font-mono text-xs uppercase tracking-[0.1em]"
                      style={{ backgroundColor: p.ink, color: p.bg }}
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}



export function InternalToolMockup() {
  const toolPalettes = [mockupPalettes[0], lightBlueWhitePalette, mockupPalettes[1]]

  const [tab, setTab] = useState("Inventory")
  const tabs = ["Inventory", "Orders", "Reports"]
  const [paletteIndex, setPaletteIndex] = useState(0)
  const p = toolPalettes[paletteIndex]

  const stop = (fn) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    fn()
  }

  const inventory = [
    { item: "Cotton Tote Bag", sku: "CTB-001", stock: 142, status: "In Stock" },
    { item: "Ceramic Mug", sku: "CMG-014", stock: 8, status: "Low Stock" },
    { item: "Wool Blanket", sku: "WBL-022", stock: 0, status: "Out of Stock" },
    { item: "Candle Set", sku: "CDS-007", stock: 63, status: "In Stock" },
  ]

  const statusColor = (status) => {
    if (status === "Out of Stock" || status === "Cancelled") return p.a3
    if (status === "Low Stock" || status === "Pending") return p.a2
    return p.a1
  }

  const orders = [
    { id: "#1042", customer: "Alyssa R.", status: "Shipped", date: "Jul 15" },
    { id: "#1041", customer: "Marcus T.", status: "Pending", date: "Jul 15" },
    { id: "#1040", customer: "Devon K.", status: "Delivered", date: "Jul 14" },
    { id: "#1039", customer: "Priya S.", status: "Cancelled", date: "Jul 13" },
  ]

  const chartData = [40, 65, 50, 80, 60, 90, 70]

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#423F2F]/60">Try a style:</span>
        {toolPalettes.map((pal, idx) => (
          <button
            key={pal.name}
            type="button"
            onClick={stop(() => setPaletteIndex(idx))}
            className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] transition-colors"
            style={{
              borderColor: "#423F2F",
              backgroundColor: idx === paletteIndex ? "#423F2F" : "transparent",
              color: idx === paletteIndex ? "#F2EBDA" : "#423F2F",
            }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full border"
              style={{ backgroundColor: pal.ink, borderColor: idx === paletteIndex ? "#F2EBDA" : "#423F2F" }}
            />
            {pal.name}
          </button>
        ))}
      </div>
      <p className="mb-3 font-mono text-[9px] italic text-[#423F2F]/50">
        Just examples, we'll design something unique for your business.
      </p>

      <div className="w-full overflow-hidden border transition-colors duration-300" style={{ borderColor: p.ink, backgroundColor: p.bg }}>
        <div className="flex items-center gap-2 border-b px-4 py-2.5 transition-colors duration-300" style={{ borderColor: `${p.ink}4D`, backgroundColor: p.a1 }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.ink }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.ink }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.ink }} />
          <span className="ml-2 flex-1 truncate rounded-sm px-3 py-1 font-mono text-[10px]" style={{ backgroundColor: p.bg, color: p.ink }}>
            internal.yourbusiness.com
          </span>
        </div>

        <div className="flex gap-1 border-b px-4 pt-3" style={{ borderColor: `${p.ink}33`, backgroundColor: p.bg }}>
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={stop(() => setTab(t))}
              className="rounded-t-sm px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors"
              style={{ backgroundColor: tab === t ? p.ink : "transparent", color: tab === t ? p.bg : p.ink }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="p-6 transition-colors duration-300 sm:p-8" style={{ backgroundColor: p.bg }}>
          {tab === "Inventory" && (
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xl sm:text-2xl" style={{ color: p.ink, fontFamily: p.font }}>Inventory</p>
                <span className="rounded-sm px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em]" style={{ backgroundColor: p.ink, color: p.bg }}>
                  + Add Item
                </span>
              </div>
              <div className="mt-2 h-9 w-full max-w-xs border" style={{ borderColor: `${p.ink}4D`, backgroundColor: p.surface }} />

              <div className="mt-5 grid grid-cols-4 gap-2 border-b pb-2 font-mono text-[9px] uppercase tracking-[0.08em]" style={{ borderColor: `${p.ink}33`, color: `${p.ink}80` }}>
                <span>Item</span>
                <span>SKU</span>
                <span>Stock</span>
                <span>Status</span>
              </div>
              {inventory.map((row) => (
                <div key={row.sku} className="grid grid-cols-4 items-center gap-2 border-b py-3 text-sm" style={{ borderColor: `${p.ink}1F`, color: p.ink }}>
                  <span>{row.item}</span>
                  <span className="font-mono text-xs" style={{ color: `${p.ink}99` }}>{row.sku}</span>
                  <span>{row.stock}</span>
                  <span
                    className="inline-block w-fit rounded-full px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.06em]"
                    style={{ backgroundColor: statusColor(row.status), color: p.ink }}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {tab === "Orders" && (
            <div>
              <p className="text-xl sm:text-2xl" style={{ color: p.ink, fontFamily: p.font }}>Orders</p>
              <div className="mt-5 grid grid-cols-4 gap-2 border-b pb-2 font-mono text-[9px] uppercase tracking-[0.08em]" style={{ borderColor: `${p.ink}33`, color: `${p.ink}80` }}>
                <span>Order</span>
                <span>Customer</span>
                <span>Status</span>
                <span>Date</span>
              </div>
              {orders.map((o) => (
                <div key={o.id} className="grid grid-cols-4 items-center gap-2 border-b py-3 text-sm" style={{ borderColor: `${p.ink}1F`, color: p.ink }}>
                  <span className="font-mono text-xs">{o.id}</span>
                  <span>{o.customer}</span>
                  <span
                    className="inline-block w-fit rounded-full px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.06em]"
                    style={{ backgroundColor: statusColor(o.status), color: p.ink }}
                  >
                    {o.status}
                  </span>
                  <span className="font-mono text-xs" style={{ color: `${p.ink}99` }}>{o.date}</span>
                </div>
              ))}
            </div>
          )}

          {tab === "Reports" && (
            <div>
              <p className="text-xl sm:text-2xl" style={{ color: p.ink, fontFamily: p.font }}>Reports</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Revenue (30d)", value: "$18,420" },
                  { label: "Orders (30d)", value: "142" },
                  { label: "Avg. Order", value: "$129" },
                ].map((s) => (
                  <div key={s.label} className="border p-3" style={{ borderColor: `${p.ink}33`, backgroundColor: p.surface }}>
                    <p className="text-lg" style={{ color: p.ink, fontFamily: p.font }}>{s.value}</p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: `${p.ink}80` }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: `${p.ink}99` }}>Weekly Orders</p>
              <div className="mt-3 flex h-32 items-end gap-3">
                {chartData.map((v, idx) => (
                  <div key={idx} className="flex-1" style={{ height: `${v}%`, backgroundColor: idx === chartData.length - 1 ? p.a3 : p.a1 }} />
                ))}
              </div>
              <div className="mt-2 flex gap-3 font-mono text-[8px] uppercase tracking-[0.06em]" style={{ color: `${p.ink}70` }}>
                {["M", "T", "W", "T", "F", "S", "S"].map((d, idx) => (
                  <span key={idx} className="flex-1 text-center">{d}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function ImagePlaceholder({ label, aspect = "aspect-[16/9]", className = "" }) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-[#423F2F] bg-[#D5D6BA]/40 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#423F2F]" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 17 L9 12 L13 16 L16 13 L20 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="px-2 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-[#423F2F]">
        {label}
      </span>
    </div>
  )
}

function FlowerToggle({ open }) {
  const petalAngles = [0, 60, 120, 180, 240, 300]
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 14 L12 21"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        style={{ transition: "opacity 0.3s ease", opacity: open ? 0 : 1 }}
      />
      <ellipse
        cx="12"
        cy="9"
        rx="3"
        ry="5.2"
        fill="currentColor"
        style={{
          transformOrigin: "12px 9px",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: open ? 0 : 1,
          transform: open ? "scale(0.4)" : "scale(1)",
        }}
      />
      {petalAngles.map((deg, idx) => (
        <ellipse
          key={deg}
          cx="12"
          cy="12"
          rx="2"
          ry="4.6"
          fill="#C9AE99"
          style={{
            transformOrigin: "12px 12px",
            transform: open ? `rotate(${deg}deg) translateY(-5px) scale(1)` : `rotate(${deg}deg) translateY(-1px) scale(0)`,
            opacity: open ? 1 : 0,
            transition: `transform 0.35s ease ${idx * 30}ms, opacity 0.3s ease ${idx * 30}ms`,
          }}
        />
      ))}
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="#423F2F"
        style={{
          transformOrigin: "12px 12px",
          transition: "transform 0.3s ease 0.15s",
          transform: open ? "scale(1)" : "scale(0)",
        }}
      />
    </svg>
  )
}

export function ProcessDiagram() {
  const nodes = [
    { x: 90, label: "Idea" },
    { x: 280, label: "Strategy" },
    { x: 470, label: "Design" },
    { x: 660, label: "User Flow" },
    { x: 850, label: "Development" },
  ]
  return (
    <svg viewBox="0 0 940 220" className="w-full h-auto" fill="none" aria-hidden="true">
      <path
        d="M90 110 L850 110"
        stroke="#423F2F"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />
      {nodes.slice(1).map((n) => (
        <path
          key={n.x}
          d={`M${n.x - 18} 104 L${n.x - 4} 110 L${n.x - 18} 116`}
          stroke="#423F2F"
          strokeWidth="1.5"
          fill="none"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={n.x}>
          <circle
            cx={n.x}
            cy={110}
            r="26"
            fill={i === nodes.length - 1 ? "#423F2F" : "#D5D6BA"}
            stroke="#423F2F"
            strokeWidth="1.5"
          />
        </g>
      ))}

      <g stroke="#423F2F" strokeWidth="1.4" strokeLinecap="round" fill="none">
        <path d={`M${nodes[0].x} 96 L${nodes[0].x} 100`} />
        <path d={`M${nodes[0].x} 120 L${nodes[0].x} 124`} />
        <path d={`M${nodes[0].x - 12} 110 L${nodes[0].x - 8} 110`} />
        <path d={`M${nodes[0].x + 8} 110 L${nodes[0].x + 12} 110`} />
        <path d={`M${nodes[0].x - 8} 100 L${nodes[0].x - 5} 103`} />
        <path d={`M${nodes[0].x + 5} 117 L${nodes[0].x + 8} 120`} />
      </g>

      <circle cx={nodes[1].x} cy="110" r="7" stroke="#423F2F" strokeWidth="1.4" fill="none" />
      <circle cx={nodes[1].x} cy="110" r="2" fill="#423F2F" />

      <path
        d={`M${nodes[2].x - 7} 117 L${nodes[2].x + 6} 104 L${nodes[2].x + 10} 108 L${nodes[2].x - 3} 121 Z`}
        stroke="#423F2F"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />

      <path
        d={`M${nodes[3].x - 10} 110 L${nodes[3].x + 6} 110 M${nodes[3].x + 1} 104 L${nodes[3].x + 8} 110 L${nodes[3].x + 1} 116`}
        stroke="#423F2F"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d={`M${nodes[4].x - 10} 104 L${nodes[4].x - 16} 110 L${nodes[4].x - 10} 116 M${nodes[4].x + 10} 104 L${nodes[4].x + 16} 110 L${nodes[4].x + 10} 116`}
        stroke="#F2EBDA"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {nodes.map((n) => (
        <text
          key={n.x}
          x={n.x}
          y={165}
          textAnchor="middle"
          fill="#423F2F"
          fontSize="13"
          fontFamily="Cormorant Garamond, serif"
        >
          {n.label}
        </text>
      ))}
    </svg>
  )
}

export function BlueprintDiagram() {
  return (
    <svg viewBox="0 0 900 280" className="w-full h-auto" fill="none" aria-hidden="true">
      <rect x="20" y="20" width="240" height="200" fill="#D5D6BA" stroke="#423F2F" strokeWidth="1.25" strokeDasharray="4 4" />
      <g stroke="#423F2F" strokeWidth="1.25">
        <path d="M40 60 q10 -6 24 2 t22 -4 q14 10 28 -2" strokeDasharray="3 3" />
        <path d="M50 90 q30 20 60 4" strokeDasharray="3 3" />
        <circle cx="130" cy="50" r="14" strokeDasharray="2 3" />
        <path d="M60 130 l140 0" strokeDasharray="3 3" />
      </g>
      <text x="30" y="245" fill="#423F2F" fontSize="12" fontFamily="IBM Plex Mono, monospace" letterSpacing="1">A / IDEA</text>

      <path d="M275 120 L320 120" stroke="#423F2F" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M312 114 L322 120 L312 126" stroke="#423F2F" strokeWidth="1.5" fill="none" />

      <rect x="330" y="20" width="240" height="200" fill="#D5D6BA" stroke="#423F2F" strokeWidth="1.25" strokeDasharray="4 4" />
      <g stroke="#7A7550" strokeWidth="1.5">
        <rect x="350" y="40" width="200" height="24" />
        <rect x="350" y="76" width="90" height="60" />
        <rect x="450" y="76" width="100" height="28" />
        <rect x="450" y="112" width="100" height="24" />
        <rect x="350" y="148" width="200" height="18" />
        <rect x="350" y="176" width="120" height="18" />
      </g>
      <text x="340" y="245" fill="#7A7550" fontSize="12" fontFamily="IBM Plex Mono, monospace" letterSpacing="1">B / DESIGN</text>

      <path d="M585 120 L630 120" stroke="#423F2F" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M622 114 L632 120 L622 126" stroke="#423F2F" strokeWidth="1.5" fill="none" />

      <rect x="640" y="20" width="240" height="200" fill="#423F2F" stroke="#BDB485" strokeWidth="1.5" />
      <rect x="660" y="40" width="200" height="24" rx="3" fill="#F2EBDA" />
      <rect x="660" y="76" width="90" height="60" rx="3" fill="#7A7550" />
      <rect x="660" y="76" width="90" height="60" rx="3" fill="none" stroke="#C9AE99" />
      <rect x="760" y="76" width="100" height="28" rx="3" fill="#C9AE99" />
      <rect x="760" y="112" width="100" height="24" rx="3" fill="#2A281C" stroke="#C9AE99" />
      <rect x="660" y="148" width="200" height="18" rx="3" fill="#2A281C" />
      <rect x="660" y="176" width="120" height="18" rx="9" fill="#C9AE99" />
      <text x="650" y="245" fill="#423F2F" fontSize="12" fontFamily="IBM Plex Mono, monospace" letterSpacing="1">C / BUILT</text>
    </svg>
  )
}

function Nav({ currentPath }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  return (
    <header className="relative z-30 mx-auto max-w-6xl px-6 py-6 sm:px-10">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-[#423F2F]">
          <CrosshairMark className="h-5 w-5 text-[#423F2F]" />
          {COMPANY_NAME}
        </Link>
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="primary-menu"
            className="flex items-center gap-3 rounded-sm border border-[#423F2F] px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-[#423F2F] transition-all duration-200 hover:bg-[#423F2F] hover:text-[#F2EBDA] hover:-translate-y-0.5 focus-visible:outline-none"
          >
            <span className="relative inline-block h-4 w-10">
              <span
                className="absolute inset-0 transition-opacity duration-300"
                style={{ opacity: open ? 0 : 1 }}
              >
                Menu
              </span>
              <span
                className="absolute inset-0 transition-opacity duration-300"
                style={{ opacity: open ? 1 : 0 }}
              >
                Close
              </span>
            </span>
            <FlowerToggle open={open} />
          </button>

          {open && (
            <nav id="primary-menu" className="menu-panel absolute right-0 top-full mt-2 w-56 py-2">
              {navLinks.map((link) => {
                const isActive = link.href === currentPath
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`menu-link px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#C9AE99] px-6 py-5 sm:px-10" style={{ backgroundColor: "#E7C5AD" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#423F2F]/70 sm:flex-row sm:gap-4">
        <span>{COMPANY_NAME}</span>
        <span>© {new Date().getFullYear()} All rights reserved</span>
      </div>
    </footer>
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="back-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm"
      style={{
        backgroundColor: "#423F2F",
        color: "#F2EBDA",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transform: show ? "translateY(0)" : "translateY(12px)",
      }}
    >
      ↑
    </a>
  )
}

export default function Layout({ children, currentPath = "/" }) {
  return (
    <main
      id="top"
      className="min-h-screen font-body text-[#423F2F] selection:bg-[#423F2F] selection:text-[#F2EBDA]"
      style={{ background: "linear-gradient(to bottom, #EDEFDA 0%, #F2EBDA 20%, #E7C5AD 100%)" }}
    >
      <style>{globalStyles}</style>
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(201,174,153,0.10), transparent 45%), radial-gradient(circle at 85% 70%, rgba(213,214,186,0.14), transparent 50%)",
        }}
      />
      <Nav currentPath={currentPath} />
      {children}
      <Footer />
      <BackToTop />
    </main>
  )
}