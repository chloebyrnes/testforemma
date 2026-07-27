import React, { useState } from "react"
import { Link } from "gatsby"
import WildhorseNav, { wh, fontFace } from "../../../components/builds/wildhorse/WildhorseNav"
import WildhorsePlaceholder from "../../../components/builds/wildhorse/WildhorsePlaceholder"
import WildhorseReveal from "../../../components/builds/wildhorse/WildhorseReveal"
import heroImg from "./heroimage.png"

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11am – 6pm" },
  { day: "Wednesday", time: "11am – 6pm" },
  { day: "Thursday", time: "11am – 6pm" },
  { day: "Friday", time: "11am – 6pm" },
  { day: "Saturday", time: "10am – 7pm" },
  { day: "Sunday", time: "12pm – 5pm" },
]

export default function WildhorseContactPage() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <main className="wh-body" style={{ backgroundColor: wh.bg, minHeight: "100vh" }}>
      <style>{fontFace}</style>
      <WildhorseNav current="Visit" />

      <section className="px-6 py-16 sm:px-12 sm:py-20">
        <WildhorseReveal className="mx-auto max-w-md text-center">
          <p className="wh-body text-xs uppercase tracking-[0.3em]" style={{ color: wh.gold }}>
            Visit Us
          </p>
          <h1 className="wh-display mt-2 text-4xl sm:text-6xl" style={{ color: wh.ink }}>
            Come On In
          </h1>
          <p className="wh-body mt-3 text-lg" style={{ color: wh.inkMuted }}>
            412 Mesa Street, Marfa, TX 79843
          </p>
        </WildhorseReveal>
      </section>

      <section className="px-6 pb-16 sm:px-12">
        <WildhorseReveal>
          <WildhorsePlaceholder label="Storefront" aspect="aspect-[21/9]" className="mx-auto max-w-5xl" src={heroImg} />
        </WildhorseReveal>
      </section>

      <section className="px-6 py-16 sm:px-12 sm:py-20" style={{ backgroundColor: wh.surface }}>
        <div className="mx-auto grid max-w-4xl gap-14 sm:grid-cols-2">
          <WildhorseReveal>
            <h2 className="wh-display text-4xl" style={{ color: wh.gold }}>Hours</h2>
            <div className="mt-5 space-y-2">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between border-b pb-2 text-sm" style={{ borderColor: wh.bg }}>
                  <span className="wh-body uppercase tracking-[0.05em]" style={{ color: wh.ink }}>{h.day}</span>
                  <span className="wh-body" style={{ color: h.time === "Closed" ? wh.rust : wh.inkMuted }}>{h.time}</span>
                </div>
              ))}
            </div>
          </WildhorseReveal>

          <WildhorseReveal delay={100}>
            <h2 className="wh-display text-4xl" style={{ color: wh.gold }}>Get in Touch</h2>
            {sent ? (
              <p className="wh-body mt-5 text-lg" style={{ color: wh.inkMuted }}>
                Thanks, {name.split(" ")[0]}, we'll write you back soon.
              </p>
            ) : (
              <div className="mt-5 space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="wh-body w-full border px-3 py-2.5 text-base outline-none"
                  style={{ borderColor: wh.gold, backgroundColor: wh.bg, color: wh.ink }}
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's up?"
                  rows={4}
                  className="wh-body w-full border px-3 py-2.5 text-base outline-none"
                  style={{ borderColor: wh.gold, backgroundColor: wh.bg, color: wh.ink }}
                />
                <button
                  type="button"
                  onClick={() => name && setSent(true)}
                  className="wh-body w-full px-6 py-3.5 text-xs uppercase tracking-[0.2em]"
                  style={{ backgroundColor: wh.rust, color: wh.ink }}
                >
                  Send
                </button>
              </div>
            )}
          </WildhorseReveal>
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
  return <title>Visit | Wildhorse Vintage</title>
}