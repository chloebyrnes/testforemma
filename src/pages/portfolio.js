import React from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, Reveal, ImagePlaceholder } from "../components/Layout"
import willowLogo from "./builds/willowvine/willowandvine.png"

const projects = [
  { name: "Petal & Bloom Co.", category: "Custom Website", href: "/builds/floralco/" },
  { name: "Willow & Vine Events", category: "Client Portal", href: "/builds/willowvine/", preview: "willowvine" },
  { name: "Northbay Supply Co.", category: "Internal Tool", href: "/builds/northbay/login" },
  { name: "Project Four", category: "Custom Web Application" },
  { name: "Project Five", category: "Custom Website" },
  { name: "Project Six", category: "Custom Web Application" },
]

function WillowVinePreview() {
  const navItems = ["Home", "My Events", "My Profile", "Contact"]
  return (
    <div className="flex aspect-[4/3] w-full overflow-hidden border" style={{ borderColor: "#A2947A" }}>
      <div className="flex w-2/5 flex-none flex-col items-center gap-3 px-3 py-4" style={{ backgroundColor: "#83715B" }}>
        <img src={willowLogo} alt="Willow & Vine" className="h-8 w-auto" />
        <div className="mt-2 flex w-full flex-col gap-1.5">
          {navItems.map((label, i) => (
            <div
              key={label}
              className="truncate rounded-sm px-2 py-1 text-center text-[7px] uppercase tracking-wide"
              style={{ backgroundColor: i === 0 ? "#A9776F" : "transparent", color: "#FAF6F0" }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4" style={{ backgroundColor: "#FAF6F0" }}>
        <div className="h-1.5 w-14 rounded-sm" style={{ backgroundColor: "#C7908E" }} />
        <div className="mt-2 h-3 w-28 rounded-sm" style={{ backgroundColor: "#33302C", opacity: 0.18 }} />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-square rounded-sm border" style={{ borderColor: "#ABB2AB", backgroundColor: "#ECEEEA" }} />
          ))}
        </div>
        <div className="mt-4 h-2 w-full rounded-sm" style={{ backgroundColor: "#ECEEEA" }}>
          <div className="h-full w-1/2 rounded-sm" style={{ backgroundColor: "#C7908E" }} />
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <Layout currentPath="/portfolio">
      <section className="relative mx-auto max-w-6xl px-6 pb-6 pt-12 sm:px-10 sm:pt-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Portfolio</p>
          <h1 className="font-display mt-4 text-4xl text-[var(--ash-ink)] sm:text-5xl [text-wrap:balance]">Selected Work</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[var(--ash-surface)]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ash-ink)]/80 sm:text-lg">
            A look at recent projects, from custom websites to full web applications. Case
            studies coming soon.
          </p>
        </Reveal>
      </section>

      <section className="relative border-t-4 border-[var(--ash-surface)] px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => {
              const content = (
                <>
                  {project.preview === "willowvine" ? (
                    <WillowVinePreview />
                  ) : (
                    <ImagePlaceholder label={`${project.name} example`} aspect="aspect-[4/3]" />
                  )}
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]/60">
                    {project.category}
                  </p>
                  <h2 className="font-display mt-1 text-xl text-[var(--ash-ink)]">{project.name}</h2>
                  {project.href && (
                    <span className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)] underline decoration-dotted underline-offset-4">
                      View site
                      <span className="font-menu">→</span>
                    </span>
                  )}
                </>
              )
              return (
                <Reveal key={project.name} delay={i * 90}>
                  {project.href ? (
                    <Link to={project.href} className="block">
                      {content}
                    </Link>
                  ) : (
                    <div>{content}</div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative border-t border-[var(--ash-accent-2)] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Like what you see?</p>
          <h2 className="font-display mt-5 text-3xl leading-tight text-[var(--ash-ink)] sm:text-4xl">
            Let's build something for you next.
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
  return <title>Portfolio | {COMPANY_NAME}</title>
}