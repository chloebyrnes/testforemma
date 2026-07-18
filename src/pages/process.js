import React from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, process, Reveal } from "../components/Layout"

function StageIcon({ index, light = false }) {
  const stroke = light ? "#F2EBDA" : "#423F2F"
  const icons = [
    <g key="idea" stroke={stroke} strokeWidth="1.4" strokeLinecap="round">
      <path d="M12 2v4M12 20v4M2 12h4M20 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8" />
    </g>,
    <g key="strategy">
      <circle cx="12" cy="12" r="7" stroke={stroke} strokeWidth="1.4" fill="none" />
      <circle cx="12" cy="12" r="2" fill={stroke} />
    </g>,
    <path
      key="design"
      d="M6 18 L16 8 L19 11 L9 21 L5 21 Z"
      stroke={stroke}
      strokeWidth="1.3"
      fill="none"
      strokeLinejoin="round"
    />,
    <path
      key="flow"
      d="M4 12 H16 M11 6 L18 12 L11 18"
      stroke={stroke}
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      key="dev"
      d="M8 6 L2 12 L8 18 M16 6 L22 12 L16 18"
      stroke={stroke}
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ]
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      {icons[index]}
    </svg>
  )
}

export default function ProcessPage() {
  return (
    <Layout currentPath="/process">
      <section className="relative mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]/70">Process</p>
          <h1 className="mt-4 font-display text-4xl text-[#423F2F] sm:text-5xl">How it comes together</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#C9AE99]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#423F2F]/80 sm:text-lg">
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
                        borderColor: "#423F2F",
                        backgroundColor: isLast ? "#423F2F" : "#D5D6BA",
                      }}
                    >
                      <StageIcon index={i} light={isLast} />
                    </span>
                    <span className="h-px flex-1 bg-[#423F2F]" />
                    {!isLast && (
                      <span className="pointer-events-none absolute left-full top-1/2 ml-4 hidden -translate-y-1/2 text-[#423F2F]/60 sm:block">
                        →
                      </span>
                    )}
                  </div>
                  <p className="mt-4 font-mono text-xs text-[#423F2F]/70">{p.step}</p>
                  <h2 className="mt-1 font-display text-lg text-[#423F2F]">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#423F2F]/80">{p.body}</p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>

      <section
        className="relative border-t border-[#C9AE99] px-6 py-16 sm:px-10 sm:py-20"
      >
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]/70">Ready for stage one?</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-[#423F2F] sm:text-4xl">
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