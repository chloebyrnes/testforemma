import React from "react"
import { Link } from "gatsby"
import WildhorseNav, { wh, fontFace } from "../../../components/builds/wildhorse/WildhorseNav"
import WildhorsePlaceholder from "../../../components/builds/wildhorse/WildhorsePlaceholder"
import WildhorseReveal from "../../../components/builds/wildhorse/WildhorseReveal"
import heroImg from "./heroimage.png"
import fringedSuedeImg from "./fringedsuedejacket.png"
import turquoiseRingImg from "./turquoiseclusterring.png"
import woolBlanketImg from "./wovenwoolblanket.png"

const marqueeText = "NEW ARRIVALS EVERY FRIDAY ★ ONE OF ONE, ONCE IT'S GONE IT'S GONE ★ "

export default function WildhorseHomePage() {
  return (
    <main className="wh-body" style={{ backgroundColor: wh.bg, minHeight: "100vh" }}>
      <style>{fontFace}</style>
      <WildhorseNav current="Home" />

      <section className="relative">
        <WildhorsePlaceholder label="Storefront at golden hour" aspect="aspect-[16/10] sm:aspect-[21/9]" bordered={false} src={heroImg} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(28,23,18,0) 30%, rgba(28,23,18,0.92) 92%)" }}
        />
        <WildhorseReveal className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-12 sm:pb-16">
          <p className="wh-body text-xs uppercase tracking-[0.35em]" style={{ color: wh.gold }}>
            Curated Vintage &middot; Marfa, Texas
          </p>
          <h1 className="wh-display mt-2 text-6xl leading-[0.9] sm:text-8xl" style={{ color: wh.ink }}>
            Wildhorse<br />Vintage
          </h1>
          <Link
            to="/builds/wildhorse/finds"
            className="wh-body mt-6 inline-block px-7 py-3.5 text-xs uppercase tracking-[0.2em]"
            style={{ backgroundColor: wh.rust, color: wh.ink }}
          >
            See What's New
          </Link>
        </WildhorseReveal>
      </section>

      <div className="overflow-hidden py-3" style={{ backgroundColor: wh.gold }}>
        <div className="wh-display whitespace-nowrap text-xl" style={{ color: wh.darkInk }}>
          {marqueeText.repeat(6)}
        </div>
      </div>

      <section className="px-6 py-16 sm:px-12 sm:py-24">
        <WildhorseReveal>
          <p className="wh-body text-xs uppercase tracking-[0.3em]" style={{ color: wh.gold }}>
            Hand-Picked
          </p>
          <h2 className="wh-display mt-2 text-5xl" style={{ color: wh.ink }}>Worn-In &amp; One-Of-A-Kind</h2>
          <p className="wh-body mt-4 max-w-lg text-lg leading-relaxed" style={{ color: wh.inkMuted }}>
            Western wear, turquoise, and leather with a past. We source and curate all week,
            everything hits the floor fresh every Friday morning.
          </p>
        </WildhorseReveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3 sm:grid-rows-2">
          <WildhorseReveal className="sm:col-span-2 sm:row-span-2">
            <WildhorsePlaceholder label="Fringed Suede Jacket" aspect="aspect-[4/3] sm:aspect-auto sm:h-full" src={fringedSuedeImg} />
          </WildhorseReveal>
          <WildhorseReveal delay={90}>
            <WildhorsePlaceholder label="Turquoise Cluster Ring" aspect="aspect-square" src={turquoiseRingImg} />
          </WildhorseReveal>
          <WildhorseReveal delay={180}>
            <WildhorsePlaceholder label="Woven Wool Blanket" aspect="aspect-square" src={woolBlanketImg} />
          </WildhorseReveal>
        </div>

        <WildhorseReveal delay={200}>
          <Link
            to="/builds/wildhorse/finds"
            className="wh-body mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] underline"
            style={{ color: wh.gold }}
          >
            Browse this week's finds →
          </Link>
        </WildhorseReveal>
      </section>

      <section className="px-6 py-16 sm:px-12 sm:py-24" style={{ backgroundColor: wh.surface }}>
        <WildhorseReveal className="mx-auto max-w-3xl text-center">
          <p className="wh-display text-4xl leading-tight sm:text-5xl" style={{ color: wh.ink }}>
            Pull up a crate.<br />Stay as long as you like.
          </p>
          <p className="wh-body mx-auto mt-5 max-w-md text-lg leading-relaxed" style={{ color: wh.inkMuted }}>
            Coffee &amp; matcha meetups, vintage swaps, and the occasional live set, right here
            among the racks.
          </p>
          <Link
            to="/builds/wildhorse/events"
            className="wh-body mt-6 inline-block px-6 py-3 text-xs uppercase tracking-[0.2em]"
            style={{ border: `1px solid ${wh.gold}`, color: wh.gold }}
          >
            See Upcoming Events
          </Link>
        </WildhorseReveal>
      </section>

      <section className="px-6 py-16 sm:px-12 sm:py-24">
        <WildhorseReveal
          className="mx-auto max-w-3xl border-2 px-8 py-10 text-center sm:px-14 sm:py-14"
          style={{ borderColor: wh.gold, backgroundColor: wh.surface }}
        >
          <p className="wh-display text-3xl" style={{ color: wh.gold }}>Shop Hours</p>
          <div className="mt-5 space-y-1 wh-body text-base" style={{ color: wh.ink }}>
            <p>Tuesday – Friday: 11am – 6pm</p>
            <p>Saturday: 10am – 7pm</p>
            <p>Sunday: 12pm – 5pm</p>
            <p style={{ color: wh.rust }}>Monday: Closed</p>
          </div>
          <div className="mx-auto mt-6 h-px w-16" style={{ backgroundColor: wh.gold }} />
          <p className="wh-body mt-6 text-base" style={{ color: wh.inkMuted }}>412 Mesa Street, Marfa, TX 79843</p>
          <Link
            to="/builds/wildhorse/contact"
            className="wh-body mt-4 inline-block text-xs uppercase tracking-[0.15em] underline"
            style={{ color: wh.gold }}
          >
            Get directions →
          </Link>
        </WildhorseReveal>
      </section>

      <footer className="wh-body px-6 py-10 text-center sm:px-10" style={{ backgroundColor: wh.surface, color: wh.inkMuted }}>
        <p className="wh-display text-lg" style={{ color: wh.gold }}>Est. Wildhorse Vintage</p>
        <Link
          to="/portfolio"
          className="wh-body mt-4 inline-block text-xs uppercase tracking-[0.15em] underline"
          style={{ color: wh.gold }}
        >
          ← Back to Ashlyn Studio Portfolio
        </Link>
      </footer>
    </main>
  )
}

export function Head() {
  return <title>Wildhorse Vintage</title>
}