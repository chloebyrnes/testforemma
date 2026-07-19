import React, { useState } from "react"
import { Link } from "gatsby"
import FloralNav from "../../../components/builds/floralco/FloralNav"
import PlaceholderPhoto from "../../../components/builds/floralco/PlaceholderPhoto"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
  .fl-serif { font-family: 'DM Serif Display', serif; }
  .fl-body { font-family: 'DM Sans', sans-serif; }
  .fl-leaf { transition: transform 0.4s ease; }
  .fl-leaf:hover { transform: rotate(8deg) scale(1.1); }
`

const values = [
  { title: "Locally Grown", body: "Every stem comes from a farm within fifty miles of our stand." },
  { title: "Hand-Tied, Always", body: "No foam, no wire frames. Just twine and a steady hand." },
  { title: "Never Overdesigned", body: "We let the flowers do the talking, not the arranging." },
]

const timeline = [
  { year: "2019", body: "Started as a folding table at the Saturday farmers market." },
  { year: "2021", body: "Opened our first real storefront, three blocks from that same market." },
  { year: "2023", body: "Started partnering with five local growers within fifty miles." },
  { year: "Today", body: "Still hand-tying every single bouquet ourselves, every morning." },
]

export default function FloralAboutPage() {
  const [hoveredValue, setHoveredValue] = useState(null)

  return (
    <main className="fl-body" style={{ backgroundColor: "#3A3E2C", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <FloralNav current="About" />

      <section className="px-6 pb-12 pt-16 sm:px-10 sm:pt-20">
        <div className="mx-auto grid max-w-4xl items-center gap-12 sm:grid-cols-2">
          <div>
            <p className="fl-body text-xs uppercase tracking-[0.3em]" style={{ color: "#8A9468" }}>
              Our Story
            </p>
            <h1 className="fl-serif mt-2 text-5xl" style={{ color: "#FFFFFF" }}>
              Started at a market stand.
            </h1>
            <p className="fl-body mt-5 text-xl leading-relaxed" style={{ color: "#D7DAC5" }}>
              Petal &amp; Bloom Co. started as a small stand at the Saturday market. Today we
              source from local growers within fifty miles and hand-tie every bouquet to order,
              still doing it the same way we did that first Saturday.
            </p>
            <p className="fl-body mt-4 text-xl leading-relaxed" style={{ color: "#D7DAC5" }}>
              We believe flowers should feel personal, not perfect. Every arrangement is a
              little different because every season is a little different, and we'd rather work
              with what's actually blooming than force a look that isn't there.
            </p>
          </div>
          <PlaceholderPhoto label="Storefront photo" aspect="aspect-[4/5]" />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#454A36" }}>
        <h2 className="fl-serif text-center text-3xl" style={{ color: "#FFFFFF" }}>
          How We Got Here
        </h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-4">
          {timeline.map((t) => (
            <div key={t.year} className="text-center">
              <p className="fl-serif text-2xl" style={{ color: "#8A9468" }}>{t.year}</p>
              <p className="fl-body mt-2 text-sm leading-relaxed" style={{ color: "#D7DAC5" }}>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="fl-serif text-center text-3xl" style={{ color: "#FFFFFF" }}>
          Around the Stand
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
          <PlaceholderPhoto label="The team" />
          <PlaceholderPhoto label="Our growers" />
          <PlaceholderPhoto label="The stand" />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#2C2F21" }}>
        <h2 className="fl-serif text-center text-4xl" style={{ color: "#8A9468" }}>
          What We Believe
        </h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-3">
          {values.map((v, idx) => (
            <div
              key={v.title}
              className="text-center"
              onMouseEnter={() => setHoveredValue(idx)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <svg viewBox="0 0 24 24" className="fl-leaf mx-auto h-10 w-10" fill="none">
                <path
                  d="M12 21 C4 17 4 8 12 3 C20 8 20 17 12 21 Z"
                  fill={hoveredValue === idx ? "#FFFFFF" : "#8A9468"}
                  style={{ transition: "fill 0.3s ease" }}
                />
                <path d="M12 21 L12 10" stroke="#2C2F21" strokeWidth="0.8" />
              </svg>
              <p className="fl-serif mt-4 text-lg" style={{ color: "#FFFFFF" }}>{v.title}</p>
              <p className="fl-body mt-2 text-base leading-relaxed" style={{ color: "#D7DAC5" }}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="fl-body px-6 py-10 text-center sm:px-10" style={{ backgroundColor: "#2C2F21", color: "#D7DAC5" }}>
        <p className="mt-3 text-sm uppercase tracking-[0.1em]" style={{ color: "#8A9468" }}>
          Open Tuesday through Saturday, 9am to 5pm
        </p>
        <Link
          to="/portfolio"
          className="fl-body mt-6 inline-block text-xs uppercase tracking-[0.15em] underline"
          style={{ color: "#8A9468" }}
        >
          ← Back to Ash Studio Portfolio
        </Link>
      </footer>
    </main>
  )
}

export function Head() {
  return <title>About | Petal & Bloom Co.</title>
}