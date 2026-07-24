import React, { useState } from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, pricingTiers, accentCycle, Reveal } from "../components/Layout"

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <Layout currentPath="/pricing">
      <section className="relative mx-auto max-w-6xl px-6 pb-6 pt-12 sm:px-10 sm:pt-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Pricing</p>
          <h1 className="mt-4 font-display text-4xl text-[var(--ash-ink)] sm:text-5xl [text-wrap:balance]">Pricing</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[var(--ash-surface)]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ash-ink)]/80 sm:text-lg">
            Every project is scoped after we understand what you're building. These ranges give
            you a starting point.
          </p>
        </Reveal>
      </section>

      <section
        className="relative border-t-4 border-[var(--ash-surface)] px-6 py-12 sm:px-10 sm:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden border border-[var(--ash-surface)] bg-[var(--ash-surface)] sm:grid-cols-3">
            {pricingTiers.map((tier, i) => {
              const isOpen = openIndex === i
              const borderAccent = accentCycle[i % accentCycle.length]
              return (
                <Reveal key={tier.tag} delay={i * 90}>
                  <div
                    className="pricing-card flex h-full flex-col p-8"
                    style={{ "--accent": borderAccent, backgroundColor: "var(--ash-surface-soft)" }}
                  >
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ash-ink)" }}>
                        {tier.tag}
                      </p>
                      <h2 className="mt-4 font-display text-xl text-[var(--ash-ink)]">{tier.title}</h2>
                      <p className="mt-2 font-mono text-sm text-[var(--ash-ink)]/80">{tier.price}</p>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--ash-ink)]/80">{tier.body}</p>
                    </div>
                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] underline decoration-dotted underline-offset-4"
                        style={{ color: "var(--ash-ink)" }}
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
                        <ul className="mt-5 space-y-2 border-t border-[var(--ash-surface)]/30 pt-5">
                          {tier.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-[var(--ash-ink)]">
                              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: "var(--ash-accent)" }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--ash-surface)33" }}>
                      <Link
                        to={`/contact?type=${encodeURIComponent(tier.contactType)}`}
                        className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
                      >
                        Get This Quote
                        <span className="btn-arrow">→</span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="relative border-t border-[var(--ash-accent-2)] px-6 py-16 sm:px-10 sm:py-20"
      >
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Have a project in mind?</p>
          <h2 className="mt-5 font-display text-2xl leading-tight text-[var(--ash-ink)] sm:text-3xl xl:whitespace-nowrap [text-wrap:balance]">
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