import React from "react"
import { Link } from "gatsby"
import { umbraStyles } from "../../../components/builds/umbra/umbraStyles"
import UmbraNav from "../../../components/builds/umbra/UmbraNav"
import UmbraNewsletterBand from "../../../components/builds/umbra/UmbraNewsletterBand"
import UmbraFooter from "../../../components/builds/umbra/UmbraFooter"

export default function UmbraHomePage() {
  return (
    <main className="page-fade-in" style={{ backgroundColor: "#FBF7EE" }}>
      <style>{umbraStyles}</style>
      <UmbraNav />
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="hero-eyebrow mono">Collection 05 — Negative Space — SS27</span>
            <h1>A study in modern <em>dressing.</em></h1>
          </div>
          <div className="hero-side">
            <p>Nineteen silhouettes built around what tailoring removes, not what it adds. Cut in raw wool, waxed cotton and unlined canvas.</p>
            <Link className="hero-cta mono" to="/builds/umbra/collection/">View the collection <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Negative Space</span><span className="dim">Pattern No. 014-B</span>
          <span>A Study in Modern Dressing</span><span className="dim">Atelier Paris</span>
          <span>Unlined Canvas</span><span className="dim">Collection 05</span>
          <span>Negative Space</span><span className="dim">Pattern No. 014-B</span>
          <span>A Study in Modern Dressing</span><span className="dim">Atelier Paris</span>
          <span>Unlined Canvas</span><span className="dim">Collection 05</span>
        </div>
      </div>
      <UmbraNewsletterBand />
      <UmbraFooter />
    </main>
  )
}

export function Head() {
  return <title>UMBRA — A Study in Modern Dressing</title>
}