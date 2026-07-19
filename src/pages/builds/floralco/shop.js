import React, { useState } from "react"
import { Link } from "gatsby"
import PetalMenu from "../../../components/builds/floralco/petalmenu"
import vintagephoto from "../../../components/builds/floralco/vintagephoto"
import peonyImg from "../../../images/floralco/peony.jpg"
import wildflowerImg from "../../../images/floralco/wildflower.jpg"
import sundayImg from "../../../images/floralco/sundaymorning.jpg"
import evergreenImg from "../../../images/floralco/evergreen.jpg"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&display=swap');
  .fl-script { font-family: 'Caveat', cursive; }
  .fl-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
  .fl-body { font-family: 'Fraunces', serif; font-optical-sizing: auto; font-weight: 400; }
  .fl-added { animation: fl-pop 0.4s ease; }
  @keyframes fl-pop {
    0% { transform: scale(1); }
    40% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }
`

const bouquets = [
  { name: "The Peony Dream", price: "$68", blurb: "Blush peonies, ranunculus, and eucalyptus, gathered loose and full.", img: peonyImg, rotate: -2, tag: "Best Seller" },
  { name: "Wildflower Meadow", price: "$54", blurb: "A loose, garden-style mix in warm tones, like a field you'd wander into.", img: wildflowerImg, rotate: 2, tag: "Seasonal" },
  { name: "Sunday Morning", price: "$42", blurb: "Ranunculus and anemones, simple and sweet, cut fresh every Sunday.", img: sundayImg, rotate: -1.5, tag: "New" },
  { name: "The Evergreen", price: "$76", blurb: "Roses, dahlias, and seasonal greenery, our most romantic arrangement.", img: evergreenImg, rotate: 1, tag: "Limited" },
  { name: "Market Basket", price: "$36", blurb: "Whatever's freshest that morning, gathered simply.", img: null, rotate: -1, tag: "Coming Soon" },
  { name: "Golden Hour", price: "$58", blurb: "Warm dahlias and marigolds for that late-summer glow.", img: null, rotate: 2, tag: "Coming Soon" },
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
    <main className="fl-body" style={{ backgroundColor: "#F7F3EA", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <PetalMenu current="Shop" />

      <section className="px-6 pb-6 pt-16 text-center sm:px-10 sm:pt-24">
        <p className="fl-serif text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
          The Shop
        </p>
        <h1 className="fl-script mt-2 text-6xl" style={{ color: "#3A3E2C" }}>
          This Week's Bouquets
        </h1>
        <p className="fl-body mx-auto mt-3 max-w-md text-lg" style={{ color: "#6E735C" }}>
          Cut fresh, hand-tied, and delivered within the day.
        </p>
        <p className="fl-serif mt-6 inline-block rounded-full px-5 py-2 text-xs uppercase tracking-[0.15em]" style={{ backgroundColor: "#6B7355", color: "#F7F3EA" }}>
          Cart ({cart.length})
        </p>
      </section>

      <section className="px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-x-10 gap-y-16 sm:grid-cols-2">
          {bouquets.map((b) => (
            <div key={b.name} className="relative text-center sm:text-left">
              <span
                className="fl-serif absolute left-2 top-2 z-10 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.1em] shadow-sm"
                style={{ backgroundColor: "#8A9468", color: "#F7F3EA" }}
              >
                {b.tag}
              </span>
              <vintagephoto src={b.img} alt={b.name} label={b.name} rotate={b.rotate} className="mx-auto sm:mx-0" />
              <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <p className="fl-serif text-xl" style={{ color: "#3A3E2C" }}>{b.name}</p>
                  <p className="fl-body mt-1 max-w-xs text-base" style={{ color: "#6E735C" }}>{b.blurb}</p>
                  <p className="fl-serif mt-2 text-lg" style={{ color: "#6B7355" }}>{b.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(b.name)}
                  className={`flex-none rounded-full px-4 py-2 text-xs uppercase tracking-[0.1em] shadow-sm transition-transform hover:-translate-y-0.5 ${justAdded === b.name ? "fl-added" : ""}`}
                  style={{ backgroundColor: "#6B7355", color: "#F7F3EA" }}
                >
                  {justAdded === b.name ? "Added ✓" : "Add"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="fl-body px-6 py-10 text-center sm:px-10" style={{ backgroundColor: "#3A3E2C", color: "#EAE7D6" }}>
        <p className="fl-script text-2xl">Petal &amp; Bloom Co.</p>
        <p className="mt-3 text-base">hello@petalandbloom.co &middot; Open Tue-Sat, 9am-5pm</p>
        <p className="fl-serif mt-4 text-xs uppercase tracking-[0.15em]" style={{ color: "#8A9468" }}>
          © {new Date().getFullYear()} Petal &amp; Bloom Co.
        </p>
        <Link
          to="/portfolio"
          className="fl-serif mt-6 inline-block text-xs uppercase tracking-[0.15em] underline"
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