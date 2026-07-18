import React from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, services, accentCycle, Reveal, ImagePlaceholder } from "../components/Layout"

export default function ServicesPage() {
  return (
    <Layout currentPath="/services">
      <section className="relative mx-auto max-w-6xl px-6 pb-6 pt-12 sm:px-10 sm:pt-16">
        <div className="relative mb-10">
          <ImagePlaceholder label="Services Header Image (recommended 1600x700)" aspect="aspect-[20/7]" />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-28"
            style={{ background: "linear-gradient(to bottom, rgba(242,235,218,0) 0%, #F2EBDA 100%)" }}
          />
        </div>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]/70">Services</p>
          <h1 className="mt-4 font-display text-4xl text-[#423F2F] sm:text-5xl">What we build</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#BDB485]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#423F2F]/80 sm:text-lg">
            Four ways we typically work with businesses, from a straightforward marketing site to
            a fully custom web application. Every project starts with a conversation about what
            you actually need.
          </p>
        </Reveal>
      </section>

      <section
        className="relative border-t-4 border-[#BDB485] px-6 py-12 sm:px-10 sm:py-16"
        style={{ backgroundColor: "#F1E8DA" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden border border-[#423F2F] bg-[#423F2F] sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.tag} delay={i * 90}>
                <Link
                  to={`/contact?type=${encodeURIComponent(s.contactType)}`}
                  className="service-card block h-full p-8 focus-visible:outline-none"
                  style={{ "--accent": accentCycle[i % accentCycle.length], backgroundColor: "#D5D6BA" }}
                >
                  <ImagePlaceholder label={`${s.title} example`} aspect="aspect-[4/3]" className="mb-5" />
                  <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "#423F2F" }}>
                    {s.tag}
                  </p>
                  <h2 className="mt-4 font-display text-2xl text-[#423F2F]">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#423F2F]/80">{s.detail}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#423F2F] underline decoration-dotted underline-offset-4">
                    Get a quote
                    <span>→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative border-t border-[#C9AE99] px-6 py-16 sm:px-10 sm:py-20"
        style={{ backgroundColor: "#EDDAC8" }}
      >
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]/70">Not sure which fits?</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-[#423F2F] sm:text-4xl">
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