import React from "react"
import { Link } from "gatsby"
import { umbraStyles } from "../../../components/builds/umbra/umbraStyles"
import UmbraNav from "../../../components/builds/umbra/UmbraNav"
import UmbraNewsletterBand from "../../../components/builds/umbra/UmbraNewsletterBand"
import UmbraFooter from "../../../components/builds/umbra/UmbraFooter"
import UmbraPlaceholder from "../../../components/builds/umbra/UmbraPlaceholder"

export default function UmbraCollectionPage() {
  return (
    <main style={{ backgroundColor: "#FBF7EE" }}>
      <style>{umbraStyles}</style>
      <UmbraNav current="Collection" />
      <section className="page-header">
        <span className="mono">Collection 04 — Negative Space — SS27</span>
        <h1>The full collection, cut from what the body leaves behind.</h1>
        <p>Nineteen silhouettes built around negative space rather than the body itself. Shown here: five key looks, followed by three pieces available now from the archive.</p>
      </section>

      {/* ================= LOOKBOOK ================= */}
      <section id="lookbook">
        <div className="lookbook-head">
          <h2 className="serif">The Edit — Look 01–05</h2>
          <span className="mono">Collection 04 / SS27</span>
        </div>
        <div className="lookbook-grid">

          <div className="look">
            <span className="look-idx mono">Look 01</span>
            <UmbraPlaceholder label="Wool gabardine coat" />
            <span className="look-cap mono">Wool gabardine coat</span>
          </div>

          <div className="look">
            <span className="look-idx mono">Look 02</span>
            <UmbraPlaceholder label="Asymmetric shirt-dress" />
            <span className="look-cap mono">Asymmetric shirt-dress</span>
          </div>

          <div className="look">
            <span className="look-idx mono">Look 03</span>
            <UmbraPlaceholder label="Cropped canvas jacket" />
            <span className="look-cap mono">Cropped canvas jacket</span>
          </div>

          <div className="look landscape">
            <span className="look-idx mono">Look 04</span>
            <UmbraPlaceholder label="Paired tailoring — trouser set" />
            <span className="look-cap mono">Paired tailoring — trouser set</span>
          </div>

          <div className="look landscape">
            <span className="look-idx mono">Look 05</span>
            <UmbraPlaceholder label="Waxed cotton overshirt" />
            <span className="look-cap mono">Waxed cotton overshirt</span>
          </div>

        </div>
      </section>

      {/* ================= EDIT / SHOP ================= */}
      <section className="edit">
        <div className="edit-head">
          <h2 className="serif">Shop the archive</h2>
          <p>Three pieces from Pattern Run 014. Each is numbered and will not be recut once the run sells out.</p>
        </div>
        <div className="edit-grid">

          <div className="piece">
            <div className="piece-figure">
              <svg viewBox="0 0 200 300"><path d="M100 30 C82 30 74 48 74 64 L60 110 L54 260 L82 260 L90 160 L100 200 L110 160 L118 260 L146 260 L140 110 L126 64 C126 48 118 30 100 30Z" fill="none" stroke="#14120F" stroke-width="1.6"/></svg>
            </div>
            <div className="piece-name">The Unstructured Blazer</div>
            <div className="piece-code mono">Pattern No. 014-B / Run of 40</div>
            <div className="piece-row">
              <span className="piece-price mono">$890</span>
              <a className="piece-link mono" href="#">Enquire</a>
            </div>
          </div>

          <div className="piece">
            <div className="piece-figure">
              <svg viewBox="0 0 200 300"><path d="M100 30 C86 30 78 46 78 60 L66 120 L60 260 L86 260 L96 150 L100 190 L104 150 L114 260 L140 260 L134 120 L122 60 C122 46 114 30 100 30Z" fill="none" stroke="#14120F" stroke-width="1.6"/></svg>
            </div>
            <div className="piece-name">Shadow-Line Trouser</div>
            <div className="piece-code mono">Pattern No. 014-C / Run of 40</div>
            <div className="piece-row">
              <span className="piece-price mono">$460</span>
              <a className="piece-link mono" href="#">Enquire</a>
            </div>
          </div>

          <div className="piece">
            <div className="piece-figure">
              <svg viewBox="0 0 200 300"><path d="M100 34 C84 34 76 52 76 66 L64 116 L58 260 L86 260 L94 170 L100 210 L106 170 L114 260 L142 260 L136 116 L124 66 C124 52 116 34 100 34Z" fill="none" stroke="#14120F" stroke-width="1.6"/></svg>
            </div>
            <div className="piece-name">Waxed Field Overcoat</div>
            <div className="piece-code mono">Pattern No. 014-D / Run of 40</div>
            <div className="piece-row">
              <span className="piece-price mono">$1,240</span>
              <a className="piece-link mono" href="#">Enquire</a>
            </div>
          </div>

        </div>
      </section>
      <UmbraNewsletterBand />
      <UmbraFooter />
    </main>
  )
}

export function Head() {
  return <title>Collection — UMBRA</title>
}