import React from "react"
import { Link } from "gatsby"
import { umbraStyles } from "../../../components/builds/umbra/umbraStyles"
import UmbraNav from "../../../components/builds/umbra/UmbraNav"
import UmbraNewsletterBand from "../../../components/builds/umbra/UmbraNewsletterBand"
import UmbraFooter from "../../../components/builds/umbra/UmbraFooter"

export default function UmbraHomePage() {
  return (
    <main style={{ backgroundColor: "#FBF7EE" }}>
      <style>{umbraStyles}</style>
      <UmbraNav />
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="hero-eyebrow mono">Collection 04 — Negative Space — SS27</span>
            <h1>Where the garment<br/>ends, <em>the shadow</em><br/>begins.</h1>
          </div>
          <div className="hero-side">
            <p>Nineteen silhouettes built around what tailoring removes, not what it adds. Cut in raw wool, waxed cotton and unlined canvas.</p>
            <Link className="hero-cta mono" to="/builds/umbra/collection/">View the collection <span className="arrow">→</span></Link>
          </div>
        </div>

        <div className="hero-bottom-rule mono">
          <span>Paris — Est. 2019</span>
          <span>Pattern archive 001—014</span>
          <span>Scroll</span>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Negative Space</span><span className="dim">Pattern No. 014-B</span>
          <span>Cut From Shadow</span><span className="dim">Atelier Paris</span>
          <span>Unlined Canvas</span><span className="dim">Collection 04</span>
          <span>Negative Space</span><span className="dim">Pattern No. 014-B</span>
          <span>Cut From Shadow</span><span className="dim">Atelier Paris</span>
          <span>Unlined Canvas</span><span className="dim">Collection 04</span>
        </div>
      </div>
      <UmbraNewsletterBand />
      <UmbraFooter />
    </main>
  )
}

export function Head() {
  return <title>UMBRA — Cut From Shadow</title>
}