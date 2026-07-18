import React, { useState } from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, pricingTiers, accentCycle, Reveal, ImagePlaceholder } from "../components/Layout"

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <Layout currentPath="/pricing">
      <section className="relative mx-auto max-w-6xl px-6 pb-6 pt-12 sm:px-10 sm:pt-16">
        <div className="relative mb-10">
          <ImagePlaceholder label="Pricing Header Image (recommended 1600x700)" aspect="aspect-[20/7]" />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-28"
            style={{ background: "linear-gradient(to bottom, rgba(242,235,218,0) 0%, #F2EBDA 100%)" }}
          />
        </div>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]/70">Pricing</p>
          <h1 className="mt-4 font-display text-4xl text-[#423F2F] sm:text-5xl">Pricing</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#BDB485]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#423F2F]/80 sm:text-lg">
            Every project is scoped after we understand what you're building. These ranges give
            you a starting point.
          </p>
        </Reveal>
      </section>

      <section
        className="relative border-t-4 border-[#BDB485] px-6 py-12 sm:px-10 sm:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden border border-[#423F2F] bg-[#423F2F] sm:grid-cols-3">
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
                      <h2 className="mt-4 font-display text-xl text-[#423F2F]">{tier.title}</h2>
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
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.tag} className="flex justify-center">
                <Link
                  to={`/contact?type=${encodeURIComponent(tier.contactType)}`}
                  className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
                >
                  Get This Quote
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative border-t border-[#C9AE99] px-6 py-16 sm:px-10 sm:py-20"
      >
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]/70">Have a project in mind?</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-[#423F2F] sm:text-4xl">
            Let's get you an accurate quote.
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
        </Reveal>
      </section>
    </Layout>
  )
}

export function Head() {
  return <title>Pricing | {COMPANY_NAME}</title>
}