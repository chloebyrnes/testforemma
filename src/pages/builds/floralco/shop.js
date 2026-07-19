import React, { useState } from "react"
import { Link } from "gatsby"
import FloralNav from "../../../components/builds/floralco/FloralNav"
import PlaceholderPhoto from "../../../components/builds/floralco/PlaceholderPhoto"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
  .fl-serif { font-family: 'DM Serif Display', serif; }
  .fl-body { font-family: 'DM Sans', sans-serif; }
  .fl-added { animation: fl-pop 0.4s ease; }
  @keyframes fl-pop {
    0% { transform: scale(1); }
    40% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }
`

const bouquets = [
  { name: "The Peony Dream", price: "$68", blurb: "Blush peonies, ranunculus, and eucalyptus, gathered loose and full.", tag: "Best Seller" },
  { name: "Wildflower Meadow", price: "$54", blurb: "A loose, garden-style mix in warm tones, like a field you'd wander into.", tag: "Seasonal" },
  { name: "Sunday Morning", price: "$42", blurb: "Ranunculus and anemones, simple and sweet, cut fresh every Sunday.", tag: "New" },
  { name: "The Evergreen", price: "$76", blurb: "Roses, dahlias, and seasonal greenery, our most romantic arrangement.", tag: "Limited" },
  { name: "Market Basket", price: "$36", blurb: "Whatever's freshest that morning, gathered simply, no two ever alike.", tag: "Coming Soon" },
  { name: "Golden Hour", price: "$58", blurb: "Warm dahlias and marigolds for that late-summer glow.", tag: "Coming Soon" },
]

export default function FloralShopPage() {
  const [cart, setCart] = useState([])
  const [justAdded, setJustAdded] = useState(null)

  const addToCart = (name) => {
    setCart((c) => [...c, name])
    setJustAdded(name)
    setTimeout(() => setJustAdded(null), 400)
  }

  return (
    <main className="fl-body" style={{ backgroundColor: "#3A3E2C", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <FloralNav current="Shop" />

      <section className="px-6 pb-6 pt-16 text-center sm:px-10 sm:pt-20">
        <p className="fl-body text-xs uppercase tracking-[0.3em]" style={{ color: "#8A9468" }}>
          The Shop
        </p>
        <h1 className="fl-serif mt-2 text-6xl" style={{ color: "#FFFFFF" }}>
          This Week's Bouquets
        </h1>
        <p className="fl-body mx-auto mt-3 max-w-md text-lg" style={{ color: "#D7DAC5" }}>
          Cut fresh, hand-tied, and delivered within the day. Everything below was picked this
          morning, so what's in stock changes weekly.
        </p>
        <p className="fl-body mt-6 inline-block px-5 py-2 text-xs uppercase tracking-[0.15em]" style={{ backgroundColor: "#FFFFFF", color: "#3A3E2C" }}>
          Cart ({cart.length})
        </p>
      </section>

      <section className="px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-x-10 gap-y-14 sm:grid-cols-2">
          {bouquets.map((b) => (
            <div key={b.name} className="relative">
              <span
                className="fl-body absolute left-2 top-2 z-10 px-3 py-1 text-[10px] uppercase tracking-[0.1em]"
                style={{ backgroundColor: "#8A9468", color: "#FFFFFF" }}
              >
                {b.tag}
              </span>
              <PlaceholderPhoto label={b.name} aspect="aspect-[4/3]" />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="fl-serif text-xl" style={{ color: "#FFFFFF" }}>{b.name}</p>
                  <p className="fl-body mt-1 max-w-xs text-base" style={{ color: "#D7DAC5" }}>{b.blurb}</p>
                  <p className="fl-body mt-2 text-lg" style={{ color: "#8A9468" }}>{b.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(b.name)}
                  className={`flex-none px-4 py-2 text-xs uppercase tracking-[0.1em] shadow-sm transition-transform hover:-translate-y-0.5 ${justAdded === b.name ? "fl-added" : ""}`}
                  style={{ backgroundColor: "#FFFFFF", color: "#3A3E2C" }}
                >
                  {justAdded === b.name ? "Added ✓" : "Add"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#454A36" }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="fl-serif text-3xl" style={{ color: "#FFFFFF" }}>How Delivery Works</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="fl-serif text-2xl" style={{ color: "#8A9468" }}>01</p>
              <p className="fl-body mt-2 text-base" style={{ color: "#D7DAC5" }}>Order by 2pm for same-day delivery in town.</p>
            </div>
            <div>
              <p className="fl-serif text-2xl" style={{ color: "#8A9468" }}>02</p>
              <p className="fl-body mt-2 text-base" style={{ color: "#D7DAC5" }}>We hand-tie and wrap every order fresh.</p>
            </div>
            <div>
              <p className="fl-serif text-2xl" style={{ color: "#8A9468" }}>03</p>
              <p className="fl-body mt-2 text-base" style={{ color: "#D7DAC5" }}>Delivered by hand, no boxes left on doorsteps.</p>
            </div>
          </div>
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
  return <title>Shop | Petal & Bloom Co.</title>
}