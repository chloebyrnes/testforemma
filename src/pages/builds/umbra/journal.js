import React from "react"
import { Link } from "gatsby"
import { umbraStyles } from "../../../components/builds/umbra/umbraStyles"
import UmbraNav from "../../../components/builds/umbra/UmbraNav"
import UmbraNewsletterBand from "../../../components/builds/umbra/UmbraNewsletterBand"
import UmbraFooter from "../../../components/builds/umbra/UmbraFooter"

export default function UmbraJournalPage() {
  return (
    <main style={{ backgroundColor: "#FBF7EE" }}>
      <style>{umbraStyles}</style>
      <UmbraNav current="Journal" />
      <section className="page-header">
        <span className="mono">Journal</span>
        <h1>Field notes from the atelier.</h1>
      </section>

      {/* ================= JOURNAL ================= */}
      <section className="journal-page" id="journal">
        <div className="journal-item">
          <span className="mono">Field notes — 03.26</span>
          <h3>Inside the pattern archive: what Run 014 kept from Run 013</h3>
          <p>A short walk through the fittings that carried over between seasons, and the two that didn't survive.</p>
        </div>
        <div className="journal-item">
          <span className="mono">Interview — 02.26</span>
          <h3>Our head cutter on drafting from absence, not the body</h3>
          <p>Twenty years pattern-cutting, and the last four spent unlearning most of it.</p>
        </div>
        <div className="journal-item">
          <span className="mono">Materials — 01.26</span>
          <h3>Why we stopped lining coats, and what happened to the returns</h3>
          <p>A note on raw seams, and what customers said in the first year of going unlined.</p>
        </div>
      </section>
      <UmbraNewsletterBand />
      <UmbraFooter />
    </main>
  )
}

export function Head() {
  return <title>Journal — UMBRA</title>
}