import React from "react"
import { Link } from "gatsby"
import WillowNav from "../../../components/builds/willowvine/WillowNav"
import WillowPlaceholder from "../../../components/builds/willowvine/WillowPlaceholder"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@400;500;600&display=swap');
  .wv-serif { font-family: 'EB Garamond', serif; }
  .wv-body { font-family: 'Jost', sans-serif; }
`

export default function WillowAboutPage() {
  return (
    <main className="wv-body" style={{ backgroundColor: "#F5F3EC", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <WillowNav current="About" />

      <section className="px-6 py-20 sm:px-14 sm:py-28" style={{ backgroundColor: "#C17A4E" }}>
        <div className="mx-auto max-w-2xl">
          <h1 className="wv-serif text-4xl italic" style={{ color: "#FFFFFF" }}>About Willow &amp; Vine</h1>
          <p className="wv-body mt-8 text-lg leading-relaxed" style={{ color: "#F5E8DC" }}>
            Willow &amp; Vine plans weddings and events for people who want to be fully present
            on their own day. We handle the logistics, the vendors, and the thousand small
            decisions in between, and we keep you looped in through a private client portal
            built just for your event.
          </p>
          <h2 className="wv-serif mt-14 text-2xl italic" style={{ color: "#FFFFFF" }}>Personal, transparent planning</h2>
          <p className="wv-body mt-4 text-lg leading-relaxed" style={{ color: "#F5E8DC" }}>
            Every couple gets their own portal from day one, so you always know what's done,
            what's pending, and what needs your input next, without a single reply-all email
            thread.
          </p>
          <h2 className="wv-serif mt-14 text-2xl italic" style={{ color: "#FFFFFF" }}>Built around your day</h2>
          <p className="wv-body mt-4 text-lg leading-relaxed" style={{ color: "#F5E8DC" }}>
            We limit how many events we take on at once, so every client gets our full
            attention, not a fraction of it split across a dozen weddings.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-14 sm:py-28">
        <div className="mx-auto grid max-w-4xl items-center gap-12 sm:grid-cols-2">
          <WillowPlaceholder label="The team" aspect="aspect-[4/5]" />
          <div>
            <h2 className="wv-serif text-3xl italic" style={{ color: "#2B2B28" }}>The team</h2>
            <p className="wv-body mt-4 text-lg leading-relaxed" style={{ color: "#5A564E" }}>
              A small team of planners who've been doing this for over a decade, and who still
              get genuinely excited about cake tastings.
            </p>
          </div>
        </div>
      </section>

      <footer className="wv-body px-6 py-14 text-center sm:px-10" style={{ backgroundColor: "#C17A4E" }}>
        <Link
          to="/portfolio"
          className="wv-body text-xs uppercase tracking-[0.15em] underline"
          style={{ color: "#2B2B28" }}
        >
          ← Back to Ash Studio Portfolio
        </Link>
      </footer>
    </main>
  )
}

export function Head() {
  return <title>About | Willow & Vine</title>
}