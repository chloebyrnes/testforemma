import React from "react"
import { Link } from "gatsby"
import { umbraStyles } from "../../../components/builds/umbra/umbraStyles"
import UmbraNav from "../../../components/builds/umbra/UmbraNav"
import UmbraNewsletterBand from "../../../components/builds/umbra/UmbraNewsletterBand"
import UmbraFooter from "../../../components/builds/umbra/UmbraFooter"

export default function UmbraStockistPage() {
  return (
    <main className="page-fade-in" style={{ backgroundColor: "#FBF7EE" }}>
      <style>{umbraStyles}</style>
      <UmbraNav current="Locations" />
      <section className="page-header">
        <span className="mono">Locations</span>
        <h1>Where to find UMBRA in person.</h1>
        <p>The Paris atelier is open by appointment. UMBRA is also carried by a small number of partner stores.</p>
      </section>

      <div className="stockists-grid">
        <div className="stockist-card">
          <span className="mono">Atelier — Paris</span>
          <h3>UMBRA Atelier</h3>
          <p>14 Rue de Charonne<br/>75011 Paris<br/>By appointment</p>
        </div>
        <div className="stockist-card">
          <span className="mono">Location — London</span>
          <h3>Casa Nour</h3>
          <p>22 Redchurch Street<br/>London E2 7DJ<br/>Tue–Sat, 11–7</p>
        </div>
        <div className="stockist-card">
          <span className="mono">Location — New York</span>
          <h3>Fieldwork Supply Co.</h3>
          <p>184 Franklin Street<br/>New York, NY 10013<br/>Daily, 11–7</p>
        </div>
      </div>
      <UmbraNewsletterBand />
      <UmbraFooter />
    </main>
  )
}

export function Head() {
  return <title>Locations — UMBRA</title>
}