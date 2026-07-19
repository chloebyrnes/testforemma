import React, { useState } from "react"
import { Link } from "gatsby"
import PetalMenu from "../../../components/builds/floralco/petalmenu"
import peonyImg from "../../../images/floralco/peony.jpg"
import wildflowerImg from "../../../images/floralco/wildflower.jpg"
import sundayImg from "../../../images/floralco/sundaymorning.jpg"
import evergreenImg from "../../../images/floralco/evergreen.jpg"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');
  .fl-script { font-family: 'Parisienne', cursive; }
  .fl-serif { font-family: 'Playfair Display', serif; }
  .fl-body { font-family: 'Cormorant Garamond', serif; }
  .fl-blob {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    transition: border-radius 0.6s ease, transform 0.5s ease;
  }
  .fl-blob:hover {
    border-radius: 48% 52% 40% 60% / 45% 55% 45% 55%;
    transform: scale(1.03);
  }
  .fl-card-img { transition: transform 0.6s ease; }
  .fl-card:hover .fl-card-img { transform: scale(1.08); }
  .fl-added {
    animation: fl-pop 0.4s ease;
  }
  @keyframes fl-pop {
    0% { transform: scale(1); }
    40% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }
`

const bouquets = [
  {
    name: "The Peony Dream",
    price: "$68",
    blurb: "Blush peonies, ranunculus, and eucalyptus, gathered loose and full.",
    img: peonyImg,
    shape: "blob",
    tag: "Best Seller",
  },
  {
    name: "Wildflower Meadow",
    price: "$54",
    blurb: "A loose, garden-style mix in warm tones, like a field you'd wander into.",
    img: wildflowerImg,
    shape: "circle",
    tag: "Seasonal",
  },
  {
    name: "Sunday Morning",
    price: "$42",
    blurb: "Ranunculus and anemones, simple and sweet, cut fresh every Sunday.",
    img: sundayImg,
    shape: "blob",
    tag: "New",
  },
  {
    name: "The Evergreen",
    price: "$76",
    blurb: "Roses, dahlias, and seasonal greenery, our most romantic arrangement.",
    img: evergreenImg,
    shape: "circle",
    tag: "Limited",
  },
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
    <main className="fl-body" style={{ background: "linear-gradient(160deg, #FBF6F3 0%, #EDEEDD 60%, #F6E1E5 100%)", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <PetalMenu current="Shop" />

      <section className="px-6 pb-6 pt-16 text-center sm:px-10 sm:pt-24">
        <p className="fl-serif text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
          The Shop
        </p>
        <h1 className="fl-script mt-2 text-6xl" style={{ color: "#3F3626" }}>
          This Week's Bouquets
        </h1>
        <p className="fl-body mx-auto mt-3 max-w-md text-lg" style={{ color: "#75655D" }}>
          Cut fresh, hand-tied, and delivered within the day.
        </p>
        <p className="fl-serif mt-6 inline-block rounded-full px-5 py-2 text-xs uppercase tracking-[0.15em]" style={{ backgroundColor: "#6B7355", color: "#FBF6F3" }}>
          Cart ({cart.length})
        </p>
      </section>

      <section className="px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-14 sm:grid-cols-2">
          {bouquets.map((b) => (
            <div key={b.name} className="fl-card relative">
              <span
                className="fl-serif absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.1em] shadow-sm"
                style={{ backgroundColor: "#F0C9D2", color: "#3F3626" }}
              >
                {b.tag}
              </span>
              <div
                className={`w-full overflow-hidden shadow-md ${b.shape === "circle" ? "aspect-square rounded-full" : "fl-blob aspect-[4/5]"}`}
                style={{ border: "3px solid #F6E1E5" }}
              >
                <img src={b.img} alt={b.name} className="fl-card-img h-full w-full object-cover" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <p className="fl-serif text-xl" style={{ color: "#3F3626" }}>{b.name}</p>
                  <p className="fl-body mt-1 max-w-xs text-base" style={{ color: "#75655D" }}>{b.blurb}</p>
                  <p className="fl-serif mt-2 text-lg" style={{ color: "#6B7355" }}>{b.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(b.name)}
                  className={`flex-none rounded-full px-4 py-2 text-xs uppercase tracking-[0.1em] shadow-sm transition-transform hover:-translate-y-0.5 ${justAdded === b.name ? "fl-added" : ""}`}
                  style={{ backgroundColor: "#6B7355", color: "#FBF6F3" }}
                >
                  {justAdded === b.name ? "Added ✓" : "Add"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="fl-body px-6 py-10 text-center sm:px-10" style={{ backgroundColor: "#3F3626", color: "#F6E1E5" }}>
        <p className="fl-script text-2xl">Petal &amp; Bloom Co.</p>
        <p className="mt-3 text-base">hello@petalandbloom.co &middot; Open Tue-Sat, 9am-5pm</p>
        <p className="fl-serif mt-4 text-xs uppercase tracking-[0.15em]" style={{ color: "#F0C9D2" }}>
          © {new Date().getFullYear()} Petal &amp; Bloom Co.
        </p>
        <Link
          to="/portfolio"
          className="fl-serif mt-6 inline-block text-xs uppercase tracking-[0.15em] underline"
          style={{ color: "#F0C9D2" }}
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