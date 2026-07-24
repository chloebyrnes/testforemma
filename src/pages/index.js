import React from "react"
import { Link } from "gatsby"
import Layout, {
  COMPANY_NAME,
  process,
  Reveal,
  CornerMarks,
  BlueprintDiagram,
  StageIcon,
} from "../components/Layout"

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-14 pt-8 sm:px-10 sm:pb-16 sm:pt-12">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]">
        Design &amp; Development Studio
      </p>
      <h1 className="mt-4 font-display text-2xl leading-[1.15] text-[var(--ash-ink)] sm:text-3xl xl:whitespace-nowrap xl:text-3xl [text-wrap:balance]">
        Custom websites &amp; web applications, built around your business.
      </h1>
      <p className="mt-3 font-script text-xl text-[var(--ash-ink)] sm:text-2xl xl:whitespace-nowrap xl:text-2xl [text-wrap:balance]">
        Your idea. Thoughtfully designed. Custom built.
      </p>

      <div className="mt-10 grid items-start gap-14 lg:grid-cols-2">
        <div>
          <p className="max-w-xl text-base leading-relaxed text-[var(--ash-ink)]/80 sm:text-lg">
            {COMPANY_NAME} is a design and development studio building custom websites, web
            applications, and digital tools around the way your business works. From the initial
            idea through strategy, UI/UX design, and development, we help shape your vision and
            build it from the ground up.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-6 py-3 font-menu text-lg lowercase tracking-[0.02em] focus-visible:outline-none"
            >
              start your project
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
          <CornerMarks color="var(--ash-accent-2)" />
          <div className="border border-[var(--ash-accent-2)] bg-[var(--ash-surface)]/40 p-4 sm:p-6">
            <BlueprintDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessTeaser() {
  return (
    <section
      className="relative border-t-4 border-[var(--ash-surface)] px-6 py-12 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl text-[var(--ash-ink)] sm:text-4xl">How it comes together</h2>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[var(--ash-surface)]" />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ash-ink)]/80">
            Five stages, start to finish. Every project moves through the same sequence, so
            nothing gets built before it's been thought through.
          </p>
        </Reveal>
        <div className="mt-14">
          <ol className="grid gap-10 sm:grid-cols-5">
            {process.map((p, i) => {
              const isLast = i === process.length - 1
              return (
                <Reveal key={p.step} as="li" delay={i * 80} className="relative list-none pl-0">
                  <div className="relative flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 flex-none items-center justify-center rounded-full border"
                      style={{
                        borderColor: "var(--ash-accent)",
                        backgroundColor: isLast ? "var(--ash-accent)" : "var(--ash-surface-soft)",
                      }}
                    >
                      <StageIcon index={i} light={isLast} />
                    </span>
                    <span className="h-px flex-1 bg-[var(--ash-surface)]" />
                    {!isLast && (
                      <span className="pointer-events-none absolute left-full top-1/2 ml-4 hidden -translate-y-1/2 text-[var(--ash-ink)]/60 sm:block">
                        →
                      </span>
                    )}
                  </div>
                  <p className="mt-4 font-mono text-xs text-[var(--ash-ink)]/70">{p.step}</p>
                  <h3 className="mt-1 font-display text-lg text-[var(--ash-ink)]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ash-ink)]/80">{p.body}</p>
                </Reveal>
              )
            })}
          </ol>
        </div>
        <Reveal delay={200}>
          <Link
            to="/process"
            className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)] underline decoration-dotted underline-offset-4"
          >
            View full process
            <span className="font-menu">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function ClosingCTA() {
  return (
    <section
      className="relative border-t border-[var(--ash-accent-2)] px-6 py-16 sm:px-10 sm:py-20"
    >
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <div className="relative">
          <CornerMarks color="var(--ash-surface)" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Let's get started</p>
          <h2 className="mt-5 font-display text-2xl leading-tight text-[var(--ash-ink)] sm:text-3xl xl:whitespace-nowrap [text-wrap:balance]">
            Have an idea? Let's put it on paper, then build it.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-menu text-lg lowercase tracking-[0.02em] focus-visible:outline-none"
            >
              start your project
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
      <ProcessTeaser />
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
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@500;600;700&family=Pinyon+Script&family=Bodoni+Moda:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
        rel="stylesheet"
      />
    </>
  )
}