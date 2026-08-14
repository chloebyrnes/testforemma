import React from "react"

export default function UmbraNewsletterBand() {
  return (
    <section className="band" id="contact">
      <div className="band-inner">
        <h2>Notes from the atelier, before they reach the shop floor.</h2>
        <form className="band-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="your email address" />
          <button type="submit">Subscribe →</button>
        </form>
      </div>
    </section>
  )
}