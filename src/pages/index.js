import React from "react"
import { Link } from "gatsby"
import Layout, {
  COMPANY_NAME,
  services,
  accentCycle,
  Reveal,
  CornerMarks,
  ImagePlaceholder,
  BlueprintDiagram,
  WebsiteMockup,
  PortalMockup,
  InternalToolMockup,
  WebAppMockup,
} from "../components/Layout"

function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-14 pt-8 sm:px-10 sm:pb-16 sm:pt-12">
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
        Custom websites &amp; web applications, built around your business.
      </h1>
      <p className="mt-3 font-script text-2xl text-[#423F2F] sm:text-3xl lg:whitespace-nowrap lg:text-4xl">
        Your idea. Thoughtfully designed. Custom built.
      </p>

      <div className="mt-10 grid items-start gap-14 lg:grid-cols-2">
        <div>
          <p className="max-w-xl text-base leading-relaxed text-[#423F2F]/80 sm:text-lg">
            {COMPANY_NAME} is a design and development studio building custom websites, web
            applications, and digital tools around the way your business works. From the initial
            idea through strategy, UI/UX design, and development, we help shape your vision and
            build it from the ground up.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              Start Your Project
              <span className="btn-arrow">→</span>
            </Link>
            <Link
              to="/services"
              className="btn-secondary group inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              Explore Our Services
              <span className="btn-arrow">→</span>
            </Link>
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

function ServicesTeaser() {
  return (
    <section
      className="relative border-t-4 border-[#BDB485] px-6 py-12 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-screen-2xl">
        <Reveal>
          <h2 className="font-display text-3xl text-[#423F2F] sm:text-4xl">What we build</h2>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#BDB485]" />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-[#423F2F] bg-[#423F2F] sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.tag} delay={i * 90}>
              <Link
                to={`/contact?type=${encodeURIComponent(s.contactType)}`}
                className="service-card block h-full p-8 focus-visible:outline-none"
                style={{ "--accent": accentCycle[i % accentCycle.length], backgroundColor: "#D5D6BA" }}
              >
                {s.tag === "01" ? (
                  <div className="mb-5" onClick={(e) => e.preventDefault()}>
                    <WebsiteMockup />
                  </div>
                ) : s.tag === "02" ? (
                  <div className="mb-5" onClick={(e) => e.preventDefault()}>
                    <PortalMockup />
                  </div>
                ) : s.tag === "03" ? (
                  <div className="mb-5" onClick={(e) => e.preventDefault()}>
                    <InternalToolMockup />
                  </div>
                ) : (
                  <div className="mb-5" onClick={(e) => e.preventDefault()}>
                    <WebAppMockup />
                  </div>
                )}
                <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "#423F2F" }}>
                  {s.tag}
                </p>
                <h3 className="mt-4 font-display text-2xl text-[#423F2F]">{s.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#423F2F]/80">{s.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#423F2F] underline decoration-dotted underline-offset-4">
                  Get a quote
                  <span>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#423F2F] underline decoration-dotted underline-offset-4"
          >
            View all services
            <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function ClosingCTA() {
  return (
    <section
      className="relative border-t border-[#C9AE99] px-6 py-16 sm:px-10 sm:py-20"
    >
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <div className="relative">
          <CornerMarks color="#BDB485" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]/70">Let's get started</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-[#423F2F] sm:text-4xl">
            Have an idea? Let's put it on paper, then build it.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              Start Your Project
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function IndexPage() {
  return (
    <Layout currentPath="/">
      <Hero />
      <ServicesTeaser />
      <ClosingCTA />
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <title>{COMPANY_NAME} Custom Websites &amp; Web Applications</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@500;600;700&family=Pinyon+Script&display=swap"
        rel="stylesheet"
      />
    </>
  )
}