import React, { useState } from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, services, accentCycle, Reveal, WebsiteMockup, PortalMockup, InternalToolMockup, WebAppMockup } from "../components/Layout"

const mockupComponents = {
  "01": WebsiteMockup,
  "02": PortalMockup,
  "03": InternalToolMockup,
  "04": WebAppMockup,
}

export default function ServicesPage() {
  const [openTags, setOpenTags] = useState([])

  const toggle = (tag) => {
    setOpenTags((tags) => (tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]))
  }

  return (
    <Layout currentPath="/services">
      <section className="relative mx-auto max-w-6xl px-6 pb-6 pt-12 sm:px-10 sm:pt-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#434A2F]/70">Services</p>
          <h1 className="mt-4 font-display text-4xl text-[#434A2F] sm:text-5xl [text-wrap:balance]">What we build</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#7A8755]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#434A2F]/80 sm:text-lg">
            Four ways we typically work with businesses, from a straightforward marketing site to
            a fully custom web application. Every project starts with a conversation about what
            you actually need.
          </p>
        </Reveal>
      </section>

      <section className="relative border-t-4 border-[#7A8755] px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-px overflow-hidden border border-[#434A2F] bg-[#434A2F]">
          {services.map((s, i) => {
            const isOpen = openTags.includes(s.tag)
            const Mockup = mockupComponents[s.tag]
            const accent = accentCycle[i % accentCycle.length]
            return (
              <Reveal key={s.tag} delay={i * 90}>
                <div className="p-8" style={{ backgroundColor: "#EAE7DC", borderLeft: `4px solid ${accent}` }}>
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <div className="max-w-2xl">
                      <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: accent }}>
                        {s.tag}
                      </p>
                      <h2 className="mt-3 font-display text-2xl text-[#434A2F] sm:text-3xl">{s.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-[#434A2F]/80 sm:text-base">{s.detail}</p>
                      <Link
                        to={`/contact?type=${encodeURIComponent(s.contactType)}`}
                        className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F] underline decoration-dotted underline-offset-4"
                      >
                        Get a quote
                        <span>→</span>
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggle(s.tag)}
                      aria-expanded={isOpen}
                      className="btn-secondary hidden flex-none rounded-sm px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none sm:inline-flex"
                    >
                      {isOpen ? "Hide Examples ▲" : "View Examples ▾"}
                    </button>
                    <p className="font-mono text-xs italic text-[#434A2F]/60 sm:hidden">
                      Interactive examples are best viewed on desktop.
                    </p>
                  </div>

                  {isOpen && (
                    <div className="mt-8 hidden border-t pt-8 sm:block" style={{ borderColor: "#434A2F33" }}>
                      <Mockup />
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="relative border-t border-[#B8A89E] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#434A2F]/70">Not sure which fits?</p>
          <h2 className="mt-5 font-display text-2xl leading-tight text-[#434A2F] sm:text-3xl xl:whitespace-nowrap [text-wrap:balance]">
            Let's talk about what you're building.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/pricing"
              className="btn-secondary group inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              See Pricing
              <span className="btn-arrow">→</span>
            </Link>
            <Link
              to="/contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              Start Your Project
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  )
}

export function Head() {
  return <title>Services | {COMPANY_NAME}</title>
}