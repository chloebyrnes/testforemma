import React from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, process, Reveal, StageIcon } from "../components/Layout"

export default function ProcessPage() {
  return (
    <Layout currentPath="/process">
      <section className="relative mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Process</p>
          <h1 className="mt-4 font-display text-4xl text-[var(--ash-ink)] sm:text-5xl [text-wrap:balance]">How it comes together</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[var(--ash-accent-2)]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ash-ink)]/80 sm:text-lg">
            Five stages, start to finish. Every project moves through the same sequence, so
            nothing gets built before it's been thought through.
          </p>
        </Reveal>
        <div className="mt-16">
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
                  <h2 className="mt-1 font-display text-lg text-[var(--ash-ink)]">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ash-ink)]/80">{p.body}</p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>

      <section
        className="relative border-t border-[var(--ash-accent-2)] px-6 py-16 sm:px-10 sm:py-20"
      >
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Ready for stage one?</p>
          <h2 className="mt-5 font-display text-2xl leading-tight text-[var(--ash-ink)] sm:text-3xl xl:whitespace-nowrap [text-wrap:balance]">
            Let's start with the idea.
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
  return <title>Process | {COMPANY_NAME}</title>
}