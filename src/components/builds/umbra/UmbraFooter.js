import React from "react"
import { Link } from "gatsby"

export default function UmbraFooter() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="fcol">
          <Link className="flogo serif" to="/builds/umbra/">UMBRA</Link>
        </div>
        <div className="fcol">
          <span className="mono">Atelier</span>
          <a href="#">14 Rue de Charonne</a>
          <a href="#">75011 Paris</a>
          <a href="#">By appointment</a>
        </div>
        <div className="fcol">
          <span className="mono">Collection</span>
          <Link to="/builds/umbra/collection">Lookbook</Link>
          <Link to="/builds/umbra/collection">Archive</Link>
          <Link to="/builds/umbra/stockist">Locations</Link>
        </div>
        <div className="fcol">
          <span className="mono">Studio</span>
          <Link to="/builds/umbra/journal">Journal</Link>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>
        <div className="fcol">
          <span className="mono">Follow</span>
          <a href="#">Instagram</a>
          <a href="#">Substack</a>
        </div>
      </div>
      <div className="foot-bottom mono">
        <span>© Umbra Atelier, Paris</span>
        <span>Pattern archive 001—014</span>
        <span><Link to="/portfolio">← Back to Ashlyn Studio Portfolio</Link></span>
      </div>
    </footer>
  )
}