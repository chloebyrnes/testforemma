import React from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, CornerMarks, CrosshairMark } from "../components/Layout"

export default function NotFoundPage() {
  return (
    <Layout currentPath="/404">
      <section className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
        <div className="relative mx-auto max-w-lg text-center">
          <CornerMarks />
          <CrosshairMark className="mx-auto h-10 w-10 text-[#111111]" />
          <h1 className="mt-4 font-display text-4xl text-[#111111] sm:text-5xl">
            This page hasn't been drafted yet.
          </h1>
          <p className="mt-3 font-script text-2xl text-[#111111] sm:text-3xl">
            Let's get you back on track.
          </p>
          <p className="mt-6 max-w-md mx-auto text-base leading-relaxed text-[#111111]/80 sm:text-lg">
            The page you're looking for doesn't exist, or it moved. Head back home and we'll
            point you in the right direction.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              Go Home
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function Head() {
  return <title>Page Not Found | {COMPANY_NAME}</title>
}