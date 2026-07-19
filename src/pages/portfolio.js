import React from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, Reveal, ImagePlaceholder } from "../components/Layout"

const projects = [
  { name: "Petal & Bloom Co.", category: "Custom Website", href: "/builds/FloralCo" },
  { name: "Project Two", category: "Client Portal" },
  { name: "Project Three", category: "Internal Tool" },
  { name: "Project Four", category: "Custom Web Application" },
  { name: "Project Five", category: "Custom Website" },
  { name: "Project Six", category: "Custom Web Application" },
]

export default function PortfolioPage() {
  return (
    <Layout currentPath="/portfolio">
      <section className="relative mx-auto max-w-6xl px-6 pb-6 pt-12 sm:px-10 sm:pt-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#434A2F]/70">Portfolio</p>
          <h1 className="font-display mt-4 text-4xl text-[#434A2F] sm:text-5xl [text-wrap:balance]">Selected Work</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#7A8755]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#434A2F]/80 sm:text-lg">
            A look at recent projects, from custom websites to full web applications. Case
            studies coming soon.
          </p>
        </Reveal>
      </section>

      <section className="relative border-t-4 border-[#7A8755] px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => {
              const content = (
                <>
                  <ImagePlaceholder label={`${project.name} example`} aspect="aspect-[4/3]" />
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F]/60">
                    {project.category}
                  </p>
                  <h2 className="font-display mt-1 text-xl text-[#434A2F]">{project.name}</h2>
                  {project.href && (
                    <span className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F] underline decoration-dotted underline-offset-4">
                      View site
                      <span>→</span>
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

      <section className="relative border-t border-[#B8A89E] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#434A2F]/70">Like what you see?</p>
          <h2 className="font-display mt-5 text-3xl leading-tight text-[#434A2F] sm:text-4xl">
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