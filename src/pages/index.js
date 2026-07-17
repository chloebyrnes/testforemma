import React, { useState, useEffect, useRef } from "react"

const COMPANY_NAME = "[Company Name]"

const services = [
  {
    tag: "01",
    title: "Custom Websites",
    body: "Marketing sites, product sites, and everything in between, designed to represent your business and built to perform.",
  },
  {
    tag: "02",
    title: "Client Portals",
    body: "Give the people you work with a place to log in, track progress, and get what they need without a phone call.",
  },
  {
    tag: "03",
    title: "Internal Tools",
    body: "Software built around how your team actually works, not a generic dashboard you have to work around.",
  },
  {
    tag: "04",
    title: "Custom Web Applications",
    body: "Portals, dashboards, and business tools that go beyond a standard website, built when nothing off-the-shelf fits.",
  },
]

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

const sectionOrder = ["top", "services", "about", "pricing", "process", "contact"]

const pricingTiers = [
  {
    tag: "01",
    title: "Custom Website",
    price: "Starting at $1,500",
    body: "A custom-designed site built to represent your business and bring in the right traffic. More complex sites are quoted higher.",
    includes: ["Custom design, no templates", "Mobile-responsive build", "Up to 5 pages", "Basic SEO setup"],
  },
  {
    tag: "02",
    title: "Portal or Internal Tool",
    price: "Starting at $3,500",
    body: "Covers straightforward tools like client portals, dashboards, admin systems, or business workflows. More complex functionality gets a custom quote.",
    includes: ["User accounts & permissions", "Custom dashboard", "Database integration", "Admin controls"],
  },
  {
    tag: "03",
    title: "Custom Web Application",
    price: "Scoped individually",
    body: "For projects with no off-the-shelf equivalent. We scope it after we understand what you need.",
    includes: ["Discovery workshop", "Technical specification", "Dedicated design & dev team", "Ongoing support"],
  },
]

const process = [
  { step: "01", title: "Idea", body: "We start with what you're trying to do and who it's for." },
  { step: "02", title: "Strategy", body: "We map the plan: scope, priorities, and how the pieces fit together." },
  { step: "03", title: "UI/UX Design", body: "We design how it looks and feels, screen by screen." },
  { step: "04", title: "User Flow", body: "We chart how people move through it, start to finish." },
  { step: "05", title: "Development", body: "We build it, custom code, made for your business." },
]

const accentCycle = ["#423F2F", "#BDB485"]

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

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid #423F2F;
    outline-offset: 2px;
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

function Reveal({ children, delay = 0, className = "", as = "div" }) {
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

function useActiveSection() {
  const [active, setActive] = useState(sectionOrder[0])

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + 140
      let current = sectionOrder[0]
      for (const id of sectionOrder) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) current = id
      }
      setActive(current)
    }
    window.addEventListener("scroll", handler, { passive: true })
    handler()
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return active
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

function CrosshairMark({ className = "", style = {} }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="none" aria-hidden="true">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function CornerMarks({ color = "#423F2F" }) {
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

function ImagePlaceholder({ label, aspect = "aspect-[16/9]", className = "" }) {
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

function BlueprintDiagram() {
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

function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
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
        <a href="#top" className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-[#423F2F]">
          <CrosshairMark className="h-5 w-5 text-[#423F2F]" />
          {COMPANY_NAME}
        </a>
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
                const isActive = link.href === `#${active}`
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`menu-link px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pb-14 pt-8 sm:px-10 sm:pb-16 sm:pt-12">
      <div className="relative mb-10">
        <ImagePlaceholder label="Hero Image (recommended 1600x700)" aspect="aspect-[20/7]" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-28"
          style={{ background: "linear-gradient(to bottom, rgba(242,235,218,0) 0%, #F2EBDA 100%)" }}
        />
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]">
        Design &amp; Development Studio
      </p>
      <h1 className="mt-4 font-display text-3xl leading-[1.1] text-[#423F2F] sm:text-4xl lg:whitespace-nowrap lg:text-[2.75rem]">
        Custom websites &amp; software, built around your business.
      </h1>
      <p className="mt-3 font-script text-2xl text-[#423F2F] sm:text-3xl lg:whitespace-nowrap lg:text-4xl">
        Your idea. Thoughtfully designed. Custom built.
      </p>

      <div className="mt-10 grid items-start gap-14 lg:grid-cols-2">
        <div>
          <p className="max-w-xl text-base leading-relaxed text-[#423F2F]/80 sm:text-lg">
            {COMPANY_NAME} is a design and development studio building custom websites, web
            applications, and digital tools around the way your business works. We work with
            businesses from the initial idea through strategy, UI/UX design, user flow, and
            development to create experiences that are both thoughtful and functional.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#423F2F]/80 sm:text-lg">
            Whether you need a custom website, client portal, internal business tool, or
            web-based application, our design team helps structure your vision and plan how it
            should look, feel, and function. From there, our development team brings it to life,
            built specifically for your business, your customers, and the way you work.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              Start Your Project
              <span className="btn-arrow">→</span>
            </a>
            <a
              href="#services"
              className="btn-secondary group inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              Explore Our Services
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <CornerMarks />
          <div className="border border-[#423F2F] bg-[#D5D6BA]/40 p-4 sm:p-6">
            <BlueprintDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="relative border-t-4 border-[#BDB485] px-6 py-12 sm:px-10 sm:py-16" style={{ backgroundColor: "#F1E8DA" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl text-[#423F2F] sm:text-4xl">What we build</h2>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#BDB485]" />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-[#423F2F] bg-[#423F2F] sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.tag} delay={i * 90}>
              <div
                className="service-card h-full p-8"
                style={{ "--accent": accentCycle[i % accentCycle.length], backgroundColor: "#D5D6BA" }}
              >
                <ImagePlaceholder label={`${s.title} example`} aspect="aspect-[4/3]" className="mb-5" />
                <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "#423F2F" }}>
                  {s.tag}
                </p>
                <h3 className="mt-4 font-display text-2xl text-[#423F2F]">{s.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#423F2F]/80">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative border-t-4 border-[#C9AE99] px-6 py-12 sm:px-10 sm:py-16" style={{ backgroundColor: "#EFE1D1" }}>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#423F2F]/70">About</p>
            <h2 className="mt-4 font-display text-3xl text-[#423F2F] sm:text-4xl">
              Design and development, under one roof.
            </h2>
            <span className="mt-3 block h-1 w-28 rounded-full bg-[#C9AE99]" />
            <ImagePlaceholder label="Studio / Team Photo" aspect="aspect-[4/5]" className="mt-8 max-w-sm" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 text-base leading-relaxed text-[#423F2F]/80">
            <p>
              {COMPANY_NAME} was built around a simple idea: the businesses that need custom
              software rarely need a template, and they rarely need design and development handled
              by two teams that never talk to each other.
            </p>
            <p>
              We keep design and development in the same room. Our designers plan how something
              should look, feel, and function before a line of code is written, and our developers
              build it exactly as planned, no translation lost along the way.
            </p>
            <p>
              That foundation comes from years of hands-on development experience, understanding
              how sites need to be structured, how people move through them, and what's technically
              feasible before a design decision gets made.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Pricing() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="pricing" className="relative border-t-4 border-[#BDB485] px-6 py-12 sm:px-10 sm:py-16" style={{ backgroundColor: "#EDDAC8" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl text-[#423F2F] sm:text-4xl">Pricing</h2>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#BDB485]" />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#423F2F]/80">
            Every project is scoped after we understand what you're building. These ranges give
            you a starting point.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-[#423F2F] bg-[#423F2F] sm:grid-cols-3">
          {pricingTiers.map((tier, i) => {
            const isOpen = openIndex === i
            const borderAccent = accentCycle[i % accentCycle.length]
            return (
              <Reveal key={tier.tag} delay={i * 90}>
                <div
                  className="pricing-card flex h-full flex-col p-8"
                  style={{ "--accent": borderAccent, backgroundColor: "#D5D6BA" }}
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "#423F2F" }}>
                      {tier.tag}
                    </p>
                    <h3 className="mt-4 font-display text-xl text-[#423F2F]">{tier.title}</h3>
                    <p className="mt-2 font-mono text-sm text-[#423F2F]/80">{tier.price}</p>
                    <p className="mt-4 text-sm leading-relaxed text-[#423F2F]/80">{tier.body}</p>
                  </div>
                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] underline decoration-dotted underline-offset-4"
                      style={{ color: "#423F2F" }}
                    >
                      {isOpen ? "Show Less" : "Learn More"}
                      <span
                        className="inline-block transition-transform duration-200"
                        style={{ transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)" }}
                      >
                        →
                      </span>
                    </button>
                    {isOpen && (
                      <ul className="mt-5 space-y-2 border-t border-[#423F2F]/30 pt-5">
                        {tier.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[#423F2F]">
                            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: "#423F2F" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="relative border-t-4 border-[#C9AE99] px-6 py-12 sm:px-10 sm:py-16" style={{ backgroundColor: "#EBD3BF" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl text-[#423F2F] sm:text-4xl">How it comes together</h2>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#C9AE99]" />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#423F2F]/80">
            Five stages, start to finish. Every project moves through the same sequence, so
            nothing gets built before it's been thought through.
          </p>
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-5">
          {process.map((p, i) => (
            <Reveal key={p.step} as="li" delay={i * 80} className="relative list-none pl-0">
              <div className="relative flex items-center gap-3">
                <span className="font-mono text-sm" style={{ color: "#423F2F" }}>
                  {p.step}
                </span>
                <span className="h-px flex-1" style={{ backgroundColor: accentCycle[i % accentCycle.length] }} />
                {i < process.length - 1 && (
                  <span className="pointer-events-none absolute left-full top-1/2 ml-4 hidden -translate-y-1/2 text-[#423F2F]/60 sm:block">
                    →
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-lg text-[#423F2F]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#423F2F]/80">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ClosingCTA() {
  return (
    <section id="contact" className="relative border-t border-[#C9AE99] px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#E9CCB6" }}>
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <div className="relative">
          <CornerMarks color="#BDB485" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]/70">Let's get started</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-[#423F2F] sm:text-4xl">
            Have an idea? Let's put it on paper, then build it.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              Start Your Project
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#C9AE99] px-6 py-8 sm:px-10" style={{ backgroundColor: "#E7C5AD" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.15em] text-[#423F2F]/70 sm:flex-row">
        <span>{COMPANY_NAME}</span>
        <span>© {new Date().getFullYear()} All rights reserved</span>
      </div>
    </footer>
  )
}

export default function IndexPage() {
  return (
    <main
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
      <Nav />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Process />
      <ClosingCTA />
      <Footer />
      <BackToTop />
    </main>
  )
}

export function Head() {
  return (
    <>
      <title>{COMPANY_NAME} Custom Websites &amp; Software</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@500;600;700&family=Pinyon+Script&display=swap"
        rel="stylesheet"
      />
    </>
  )
}
