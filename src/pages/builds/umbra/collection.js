import React from "react"
import { Link } from "gatsby"
import { umbraStyles } from "../../../components/builds/umbra/umbraStyles"
import UmbraNav from "../../../components/builds/umbra/UmbraNav"
import UmbraNewsletterBand from "../../../components/builds/umbra/UmbraNewsletterBand"
import UmbraFooter from "../../../components/builds/umbra/UmbraFooter"
import UmbraPlaceholder from "../../../components/builds/umbra/UmbraPlaceholder"

export default function UmbraCollectionPage() {
  return (
    <main className="page-fade-in" style={{ backgroundColor: "#FBF7EE" }}>
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
        <div className="edit-inner">
          <div className="edit-head">
            <h2 className="serif">Shop the archive</h2>
            <p>Three pieces from Pattern Run 014. Each is numbered and will not be recut once the run sells out.</p>
          </div>
          <div className="edit-grid">

            <div className="piece">
              <div className="piece-figure">
                <UmbraPlaceholder label="The Unstructured Blazer" />
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
                <UmbraPlaceholder label="Shadow-Line Trouser" />
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
                <UmbraPlaceholder label="Waxed Field Overcoat" />
              </div>
              <div className="piece-name">Waxed Field Overcoat</div>
              <div className="piece-code mono">Pattern No. 014-D / Run of 40</div>
              <div className="piece-row">
                <span className="piece-price mono">$1,240</span>
                <a className="piece-link mono" href="#">Enquire</a>
              </div>
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