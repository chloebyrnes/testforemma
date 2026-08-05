import React from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, Reveal } from "../components/Layout"

export default function AboutPage() {
  return (
    <Layout currentPath="/about">
      <section className="relative mx-auto max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ash-ink)]/70">About</p>
          <div className="mt-4">
            <h1 className="float-left mr-8 mb-2 max-w-sm font-display text-4xl leading-[1.15] text-[var(--ash-ink)] sm:text-5xl [text-wrap:balance]">
              Design and development, under one roof.
            </h1>
            <div className="space-y-5 text-base leading-relaxed text-[var(--ash-ink)]/80 sm:text-lg">
              <p>
                {COMPANY_NAME} is a small, family-run, women-owned design and development
                studio. We build custom websites and web applications with the precision and
                care we'd want for our own business: purposeful, built to last, and never
                generic.
              </p>
              <p>
                We don't work from templates. Every project starts with how your business
                actually operates, and every page, feature, and interaction is planned and built
                around that, rather than fitted into a predefined structure.
              </p>
              <p>
                Design and development happen together, not as separate stages. That's what
                makes the finished product cohesive on the surface and dependable underneath: a
                site or application that looks right, performs well, and is straightforward to
                maintain.
              </p>
              <p>
                Whether you're starting a new project or rebuilding an existing site, the goal
                stays the same: a digital product that's considered, reliable, and built
                specifically for you.
              </p>
            </div>
            <div className="clear-both" />
          </div>
          <span className="mt-8 block h-1 w-28 rounded-full bg-[var(--ash-accent-2)]" />
        </Reveal>
      </section>

      <section
        className="relative border-t border-[var(--ash-accent-2)] px-6 py-16 sm:px-10 sm:py-20"
      >
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Let's get started</p>
          <h2 className="mt-5 font-display text-2xl leading-tight text-[var(--ash-ink)] sm:text-3xl xl:whitespace-nowrap [text-wrap:balance]">
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
        </Reveal>
      </section>
    </Layout>
  )
}

export function Head() {
  return <title>About | {COMPANY_NAME}</title>
}