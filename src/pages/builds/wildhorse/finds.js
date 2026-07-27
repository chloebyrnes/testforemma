import React, { useState } from "react"
import { Link } from "gatsby"
import WildhorseNav, { wh, fontFace } from "../../../components/builds/wildhorse/WildhorseNav"
import WildhorsePlaceholder from "../../../components/builds/wildhorse/WildhorsePlaceholder"
import WildhorseReveal from "../../../components/builds/wildhorse/WildhorseReveal"
import fringedSuedeImg from "./fringedsuedejacket.png"
import turquoiseRingImg from "./turquoiseclusterring.png"
import woolBlanketImg from "./wovenwoolblanket.png"
import pearlSnapImg from "./pearlsnapwesternshirt.png"
import leatherBeltImg from "./handtooledleatherbelt.png"
import hatBandImg from "./conchohatband.png"

const items = [
  { name: "Fringed Suede Jacket", era: "1970s", price: "$88", tag: "New Friday", image: fringedSuedeImg },
  { name: "Turquoise Cluster Ring", era: "Handmade, Local Silversmith", price: "$46", tag: "One of One", image: turquoiseRingImg },
  { name: "Woven Wool Blanket", era: "1960s", price: "$62", tag: "New Friday", image: woolBlanketImg },
  { name: "Pearl Snap Western Shirt", era: "1980s", price: "$38", tag: "Restocked", image: pearlSnapImg },
  { name: "Hand-Tooled Leather Belt", era: "1970s", price: "$54", tag: "One of One", image: leatherBeltImg },
  { name: "Concho Hat Band", era: "Vintage", price: "$28", tag: "New Friday", image: hatBandImg },
]

function FindDetails({ item, isSaved, onToggle }) {
  return (
    <div>
      <span
        className="wh-body inline-block px-3 py-1 text-[10px] uppercase tracking-[0.1em]"
        style={{ backgroundColor: wh.gold, color: wh.darkInk }}
      >
        {item.tag}
      </span>
      <p className="wh-display mt-3 text-3xl" style={{ color: wh.ink }}>{item.name}</p>
      <p className="wh-body mt-1 text-sm uppercase tracking-[0.05em]" style={{ color: wh.sage }}>{item.era}</p>
      <p className="wh-display mt-3 text-2xl" style={{ color: wh.rust }}>{item.price}</p>
      <button
        type="button"
        onClick={onToggle}
        className="wh-body mt-5 px-5 py-2.5 text-xs uppercase tracking-[0.15em]"
        style={{
          backgroundColor: isSaved ? "transparent" : wh.rust,
          color: isSaved ? wh.rust : wh.ink,
          border: isSaved ? `1px solid ${wh.rust}` : "none",
        }}
      >
        {isSaved ? "♥ Saved" : "♡ Save"}
      </button>
    </div>
  )
}

export default function WildhorseFindsPage() {
  const [saved, setSaved] = useState([])

  const toggleSave = (name) => {
    setSaved((s) => (s.includes(name) ? s.filter((n) => n !== name) : [...s, name]))
  }

  return (
    <main className="wh-body" style={{ backgroundColor: wh.bg, minHeight: "100vh" }}>
      <style>{fontFace}</style>
      <WildhorseNav current="The Finds" />

      <section className="px-6 pb-6 pt-16 sm:px-12 sm:pt-20">
        <WildhorseReveal className="max-w-2xl">
          <p className="wh-body text-xs uppercase tracking-[0.3em]" style={{ color: wh.gold }}>
            The Finds
          </p>
          <h1 className="wh-display mt-2 text-6xl sm:text-7xl" style={{ color: wh.ink }}>
            This Week's Arrivals
          </h1>
          <p className="wh-body mt-3 text-lg" style={{ color: wh.inkMuted }}>
            In-store only, on purpose. Save what catches your eye and come dig through it
            yourself before it's gone.
          </p>
        </WildhorseReveal>
      </section>

      <section className="px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-4xl divide-y" style={{ borderColor: wh.surface }}>
          {items.map((item, i) => {
            const isSaved = saved.includes(item.name)
            const imageFirst = i % 2 === 0
            return (
              <WildhorseReveal key={item.name} delay={i * 70} className="border-t py-10" style={{ borderColor: wh.surface }}>
                <div className="grid items-center gap-8 sm:grid-cols-[1fr_1.3fr]">
                  {imageFirst ? (
                    <>
                      <WildhorsePlaceholder label={item.name} aspect="aspect-[4/3]" src={item.image} />
                      <FindDetails item={item} isSaved={isSaved} onToggle={() => toggleSave(item.name)} />
                    </>
                  ) : (
                    <>
                      <div className="sm:order-2">
                        <WildhorsePlaceholder label={item.name} aspect="aspect-[4/3]" src={item.image} />
                      </div>
                      <div className="sm:order-1">
                        <FindDetails item={item} isSaved={isSaved} onToggle={() => toggleSave(item.name)} />
                      </div>
                    </>
                  )}
                </div>
              </WildhorseReveal>
            )
          })}
        </div>
      </section>

      <section className="px-6 py-16 text-center sm:px-12 sm:py-20" style={{ backgroundColor: wh.surface }}>
        <WildhorseReveal className="mx-auto max-w-xl">
          <p className="wh-display text-3xl" style={{ color: wh.gold }}>Everything Is In-Store Only</p>
          <p className="wh-body mt-3 text-lg leading-relaxed" style={{ color: wh.inkMuted }}>
            No online checkout, part of the fun is digging through it yourself.
          </p>
          <Link
            to="/builds/wildhorse/contact"
            className="wh-body mt-6 inline-block px-6 py-3 text-xs uppercase tracking-[0.2em]"
            style={{ backgroundColor: wh.gold, color: wh.darkInk }}
          >
            Get Directions
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
  return <title>The Finds | Wildhorse Vintage</title>
}