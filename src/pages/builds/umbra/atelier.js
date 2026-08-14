import React from "react"
import { Link } from "gatsby"
import { umbraStyles } from "../../../components/builds/umbra/umbraStyles"
import UmbraNav from "../../../components/builds/umbra/UmbraNav"
import UmbraNewsletterBand from "../../../components/builds/umbra/UmbraNewsletterBand"
import UmbraFooter from "../../../components/builds/umbra/UmbraFooter"

export default function UmbraAtelierPage() {
  return (
    <main className="page-fade-in" style={{ backgroundColor: "#FBF7EE" }}>
      <style>{umbraStyles}</style>
      <UmbraNav current="Atelier" />
      <section className="page-header">
        <span className="mono">The Atelier — Paris, 11th</span>
        <h1>Notes on cutting from absence, not the body.</h1>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className="manifesto">
        <div className="manifesto-inner">
          <div className="manifesto-quote">
            “We don't design clothes. <span className="mark">We design the space</span> the body leaves behind, and cut fabric to its edge.”
          </div>
          <div className="manifesto-body">
            <span className="num mono">Atelier note — pattern philosophy</span>
            <p>Every UMBRA piece starts as an absence: a chalk outline of the space around a body in motion, not the body itself. The pattern is drafted from that outline's edge.</p>
            <p>What's left is a garment with no excess — seams positioned where the shadow falls, hems cut to where the light stops.</p>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="philosophy" id="philosophy">
        <div className="philosophy-content">
          <span className="mono">The Atelier — Paris, 11th</span>
          <blockquote>A shadow doesn't need <span className="mark">a lining.</span><br/>Neither does the coat.</blockquote>
          <div className="philosophy-foot">
            <div><span>Construction</span>Every seam is left raw or bound by hand — nothing is hidden that doesn't need to be.</div>
            <div><span>Materials</span>Undyed wool, waxed Japanese cotton, and deadstock canvas sourced within 300km of the atelier.</div>
            <div><span>Runs</span>Each pattern is cut in batches of 40, numbered, and retired.</div>
          </div>
        </div>
      </section>
      <UmbraNewsletterBand />
      <UmbraFooter />
    </main>
  )
}

export function Head() {
  return <title>Atelier — UMBRA</title>
}