import React, { useState } from "react"
import { Link } from "gatsby"

const bouquets = [
  { name: "The Peony Dream", price: "$68", blurb: "Blush peonies, ranunculus, and eucalyptus." },
  { name: "Wildflower Meadow", price: "$54", blurb: "A loose, garden-style mix in warm tones." },
  { name: "Sunday Morning", price: "$42", blurb: "Ranunculus and anemones, simple and sweet." },
  { name: "The Evergreen", price: "$76", blurb: "Roses, dahlias, and seasonal greenery." },
]

export default function FloralCoPage() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <main style={{ backgroundColor: "#FBF6F3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .floral-serif { font-family: 'Playfair Display', serif; }
        .floral-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <header
        className="floral-body flex items-center justify-between px-6 py-5 sm:px-10"
        style={{ borderBottom: "1px solid #E7CFC7", backgroundColor: "#FBF6F3" }}
      >
        <span className="floral-serif text-xl" style={{ color: "#5B4A42" }}>
          Petal &amp; Bloom Co.
        </span>
        <div className="flex items-center gap-6">
          <a href="#shop" className="hidden text-sm sm:inline" style={{ color: "#5B4A42" }}>Shop</a>
          <a href="#about" className="hidden text-sm sm:inline" style={{ color: "#5B4A42" }}>About</a>
          <a href="#contact" className="hidden text-sm sm:inline" style={{ color: "#5B4A42" }}>Contact</a>
          <button
            type="button"
            onClick={() => setCartCount((c) => c + 1)}
            className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.1em]"
            style={{ backgroundColor: "#8A9A7E", color: "#FBF6F3" }}
          >
            Cart ({cartCount})
          </button>
        </div>
      </header>

      <section className="px-6 py-16 text-center sm:px-10 sm:py-24" style={{ backgroundColor: "#F3E3DD" }}>
        <p className="floral-body text-xs uppercase tracking-[0.25em]" style={{ color: "#8A9A7E" }}>
          Fresh, Local, Seasonal
        </p>
        <h1 className="floral-serif mx-auto mt-4 max-w-xl text-4xl sm:text-5xl" style={{ color: "#5B4A42" }}>
          Flowers for every kind of day.
        </h1>
        <p className="floral-body mx-auto mt-4 max-w-md text-base" style={{ color: "#75655D" }}>
          Hand-tied bouquets, delivered weekly or just when you need one.
        </p>
        <a
          href="#shop"
          className="floral-body mt-8 inline-block rounded-full px-8 py-3 text-sm uppercase tracking-[0.1em] transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: "#5B4A42", color: "#FBF6F3" }}
        >
          Shop Bouquets
        </a>
      </section>

      <section id="shop" className="px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="floral-serif text-center text-2xl sm:text-3xl" style={{ color: "#5B4A42" }}>
          This Week's Bouquets
        </h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bouquets.map((b) => (
            <div key={b.name}>
              <div
                className="flex aspect-square w-full items-center justify-center"
                style={{ backgroundColor: "#E7CFC7" }}
              >
                <span className="floral-body text-xs uppercase tracking-[0.15em]" style={{ color: "#8A6F63" }}>
                  Photo
                </span>
              </div>
              <p className="floral-serif mt-4 text-lg" style={{ color: "#5B4A42" }}>{b.name}</p>
              <p className="floral-body mt-1 text-sm" style={{ color: "#75655D" }}>{b.blurb}</p>
              <p className="floral-body mt-2 text-sm" style={{ color: "#8A9A7E" }}>{b.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#F3E3DD" }}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="floral-serif text-2xl sm:text-3xl" style={{ color: "#5B4A42" }}>Our Story</h2>
          <p className="floral-body mt-4 text-base leading-relaxed" style={{ color: "#75655D" }}>
            Petal &amp; Bloom Co. started as a small stand at the Saturday market. Today we source
            from local growers within fifty miles and hand-tie every bouquet to order, still doing
            it the same way we did that first Saturday.
          </p>
        </div>
      </section>

      <footer id="contact" className="floral-body px-6 py-10 text-center sm:px-10" style={{ backgroundColor: "#5B4A42", color: "#FBF6F3" }}>
        <p className="text-sm">hello@petalandbloom.co &middot; Open Tue-Sat, 9am-5pm</p>
        <p className="mt-4 text-xs uppercase tracking-[0.15em]" style={{ color: "#D9C4BC" }}>
          © {new Date().getFullYear()} Petal &amp; Bloom Co.
        </p>
        <Link
          to="/portfolio"
          className="mt-6 inline-block text-xs uppercase tracking-[0.15em] underline"
          style={{ color: "#D9C4BC" }}
        >
          ← Back to Ash Studio Portfolio
        </Link>
      </footer>
    </main>
  )
}

export function Head() {
  return <title>Petal & Bloom Co. (Example Site)</title>
}