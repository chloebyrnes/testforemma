import React, { useState } from "react"
import { Link } from "gatsby"
import WildhorseNav, { wh, fontFace } from "../../../components/builds/wildhorse/WildhorseNav"
import WildhorsePlaceholder from "../../../components/builds/wildhorse/WildhorsePlaceholder"
import WildhorseReveal from "../../../components/builds/wildhorse/WildhorseReveal"
import coffeeFindsImg from "./coffeecuratedfinds.png"
import matchaMorningsImg from "./matchamornings.png"
import vintageSwapImg from "./vintageswapnight.png"
import liveMusicImg from "./livemusicinshop.png"

const events = [
  {
    name: "Coffee & Curated Finds",
    date: "First Saturday, monthly",
    time: "9am – 11am",
    blurb: "Come early, grab a cup, and get first pick of the week's new arrivals before we open to everyone else.",
    image: coffeeFindsImg,
  },
  {
    name: "Matcha Mornings",
    date: "Every other Wednesday",
    time: "8am – 10am",
    blurb: "A slow, quiet morning with matcha from a local roaster and good conversation among the racks.",
    image: matchaMorningsImg,
  },
  {
    name: "Vintage Swap Night",
    date: "Last Friday, monthly",
    time: "6pm – 8pm",
    blurb: "Bring a piece you don't wear anymore, swap it for something new to you. No cash, just trades.",
    image: vintageSwapImg,
  },
  {
    name: "Live Music in the Shop",
    date: "Occasional Saturdays",
    time: "7pm – 9pm",
    blurb: "Local musicians play a short acoustic set among the racks. Follow along for dates, announced a couple weeks out.",
    image: liveMusicImg,
  },
]

export default function WildhorseEventsPage() {
  const [rsvped, setRsvped] = useState([])

  const toggleRsvp = (name) => {
    setRsvped((r) => (r.includes(name) ? r.filter((n) => n !== name) : [...r, name]))
  }

  return (
    <main className="wh-body" style={{ backgroundColor: wh.bg, minHeight: "100vh" }}>
      <style>{fontFace}</style>
      <WildhorseNav current="Events" />

      <section className="px-6 pb-6 pt-16 sm:px-12 sm:pt-20">
        <WildhorseReveal className="max-w-2xl">
          <p className="wh-body text-xs uppercase tracking-[0.3em]" style={{ color: wh.gold }}>
            Events
          </p>
          <h1 className="wh-display mt-2 text-4xl sm:text-6xl md:text-7xl" style={{ color: wh.ink }}>
            Come Sit a While
          </h1>
          <p className="wh-body mt-3 text-lg" style={{ color: wh.inkMuted }}>
            The shop doubles as a hangout. Here's what's coming up.
          </p>
        </WildhorseReveal>
      </section>

      <section className="px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {events.map((e, i) => {
            const isRsvped = rsvped.includes(e.name)
            return (
              <WildhorseReveal key={e.name} delay={i * 90}>
                <div className="h-full border-2" style={{ borderColor: wh.surface, backgroundColor: wh.surface }}>
                  <WildhorsePlaceholder label={e.name} aspect="aspect-[16/9]" bordered={false} src={e.image} />
                  <div className="p-6">
                    <p className="wh-body text-xs uppercase tracking-[0.15em]" style={{ color: wh.sage }}>
                      {e.date} &middot; {e.time}
                    </p>
                    <h2 className="wh-display mt-2 text-2xl" style={{ color: wh.ink }}>{e.name}</h2>
                    <p className="wh-body mt-3 text-sm leading-relaxed" style={{ color: wh.inkMuted }}>
                      {e.blurb}
                    </p>
                    <button
                      type="button"
                      onClick={() => toggleRsvp(e.name)}
                      className="wh-body mt-5 px-5 py-2.5 text-xs uppercase tracking-[0.1em]"
                      style={{
                        backgroundColor: isRsvped ? "transparent" : wh.rust,
                        color: isRsvped ? wh.rust : wh.ink,
                        border: isRsvped ? `1px solid ${wh.rust}` : "none",
                      }}
                    >
                      {isRsvped ? "You're on the list ✓" : "I'll Be There"}
                    </button>
                  </div>
                </div>
              </WildhorseReveal>
            )
          })}
        </div>
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
  return <title>Events | Wildhorse Vintage</title>
}