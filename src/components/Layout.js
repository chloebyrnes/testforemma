import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"

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
    body: "Marketing sites, product sites, and everything in between, designed to represent your business and built to perform.",
    detail:
      "A website built from scratch around your business, not squeezed into a template. We handle everything from the initial layout and content structure through responsive design, SEO basics, and a clean handoff so it's easy to maintain.",
  },
  {
    tag: "02",
    title: "Client Portals",
    contactType: "Client Portal",
    body: "Give the people you work with a place to log in, track progress, and get what they need without a phone call.",
    detail:
      "A secure, branded space for your clients to log in, see status updates, download files, or submit information. We design the flow around what your clients actually need to see, not a generic dashboard template.",
  },
  {
    tag: "03",
    title: "Internal Tools",
    contactType: "Internal Tool",
    body: "Software built around how your team actually works, not a generic dashboard you have to work around.",
    detail:
      "Spreadsheets and off-the-shelf tools only get you so far. We build internal dashboards, admin panels, and workflow tools shaped around your team's actual process, so the tool fits the work instead of the other way around.",
  },
  {
    tag: "04",
    title: "Custom Web Applications",
    contactType: "Custom Web Application",
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
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@500;600;700&family=Pinyon+Script&display=swap');

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
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
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
  const nodes = [{ x: 90 }, { x: 280 }, { x: 470 }, { x: 660 }, { x: 850 }]
  return (
    <svg viewBox="0 0 940 190" className="w-full h-auto" fill="none" aria-hidden="true">
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
      style={{ backgroundColor: "#F2EBDA" }}
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
