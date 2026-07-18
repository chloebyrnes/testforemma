import React from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, Reveal, ImagePlaceholder } from "../components/Layout"

export default function AboutPage() {
  return (
    <Layout currentPath="/about">
      <section className="relative mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#423F2F]/70">About</p>
              <h1 className="mt-4 font-display text-4xl text-[#423F2F] sm:text-5xl">
                Design and development, under one roof.
              </h1>
              <span className="mt-3 block h-1 w-28 rounded-full bg-[#C9AE99]" />
              <ImagePlaceholder label="Studio / Team Photo" aspect="aspect-[4/5]" className="mt-8 max-w-sm" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-[#423F2F]/80 sm:text-lg">
              <p>
                At {COMPANY_NAME}, we create custom websites and web applications that are built
                with care, purpose, and attention to detail. Every project is approached
                individually, combining thoughtful design with modern development to create
                digital experiences that feel intuitive, reliable, and built to last.
              </p>
              <p>
                We believe every business deserves a digital presence that's designed specifically
                for the way it operates. Rather than relying on templates or predefined solutions,
                each website and application is carefully planned and developed from the ground
                up, allowing every feature, interaction, and design decision to serve a clear
                purpose.
              </p>
              <p>
                Design and development are never treated as separate parts of the process. They
                work together from the very beginning, creating products that not only look
                cohesive but also perform seamlessly behind the scenes. The result is a website or
                application that feels polished, functions reliably, is simple to manage, and
                continues to support your business as it evolves.
              </p>
              <p>
                Whether you're starting from scratch or reimagining an existing website, our goal
                is to create digital products that feel considered, dependable, and uniquely
                yours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="relative border-t border-[#C9AE99] px-6 py-16 sm:px-10 sm:py-20"
      >
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#423F2F]/70">Let's get started</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-[#423F2F] sm:text-4xl">
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