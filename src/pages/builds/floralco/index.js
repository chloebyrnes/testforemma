import React, { useState } from "react"
import { Link } from "gatsby"
import FloralNav from "../../../components/builds/floralco/FloralNav"
import PlaceholderPhoto from "../../../components/builds/floralco/PlaceholderPhoto"
import FloralReveal from "../../../components/builds/floralco/FloralReveal"
import peonyImg from "./peonydream.png"
import marketBasketImg from "./marketbasket.png"
import wildflowerImg from "./wildflowermeadow.png"
import evergreenImg from "./theevergreen.png"
import morningMarketRunImg from "./morningmarketrun.png"
import sortingStemsImg from "./sortingstems.png"
import handTyingImg from "./handtying.png"
import readyForPickupImg from "./readyforpickup.png"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600&family=Karla:wght@400;500;600;700&display=swap');
  .fl-serif { font-family: 'Fraunces', serif; }
  .fl-body { font-family: 'Karla', sans-serif; }
  a, button {
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease;
  }
  a:hover, button:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`

const favorites = [
  { name: "The Peony Dream", price: "$68", tag: "Best Seller", image: peonyImg },
  { name: "Wildflower Meadow", price: "$54", tag: "Seasonal", image: wildflowerImg },
  { name: "The Evergreen", price: "$76", tag: "Limited", image: evergreenImg },
]

export default function FloralHomePage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <main className="fl-body" style={{ backgroundColor: "#FAF7F2", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <FloralNav current="Home" />

      <section>
        <FloralReveal className="grid sm:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-6 py-16 sm:px-12 sm:py-24">
            <p className="fl-body text-xs uppercase tracking-[0.3em]" style={{ color: "#E8A7B5" }}>
              Fresh &middot; Local &middot; Seasonal
            </p>
            <h1 className="fl-serif mt-4 text-5xl leading-tight sm:text-6xl" style={{ color: "#2B3A2F" }}>
              Petal House
            </h1>
            <p className="fl-body mt-5 max-w-md text-lg leading-relaxed" style={{ color: "#5B6B5D" }}>
              Flowers for every kind of day. We grow, cut, and hand-tie every bouquet ourselves,
              right here in the shop, so what you get is never more than a day old.
            </p>
            <Link
              to="/builds/floralco/shop"
              className="fl-body mt-8 inline-block px-5 py-2.5 text-xs uppercase tracking-[0.1em]"
              style={{ backgroundColor: "#5B7A5E", color: "#FFFFFF" }}
            >
              Shop Bouquets
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-1 self-start">
            <PlaceholderPhoto label="Morning market run" aspect="aspect-[4/3]" light src={morningMarketRunImg} />
            <PlaceholderPhoto label="Sorting stems" aspect="aspect-[4/3]" light src={sortingStemsImg} />
            <PlaceholderPhoto label="Hand-tying" aspect="aspect-[4/3]" light src={handTyingImg} />
            <PlaceholderPhoto label="Ready for pickup" aspect="aspect-[4/3]" light src={readyForPickupImg} />
          </div>
        </FloralReveal>
      </section>

      <section className="px-6 py-16 sm:px-12 sm:py-20" style={{ backgroundColor: "#F1E4D8" }}>
        <FloralReveal className="mx-auto grid max-w-5xl items-center gap-10 sm:grid-cols-2">
          <PlaceholderPhoto label="Flower of the month" light src={marketBasketImg} />
          <div>
            <p className="fl-body text-xs uppercase tracking-[0.3em]" style={{ color: "#E8A7B5" }}>
              Flower of the Month
            </p>
            <h2 className="fl-serif mt-2 text-4xl" style={{ color: "#2B3A2F" }}>
              Market Basket
            </h2>
            <p className="fl-body mt-3 text-lg leading-relaxed" style={{ color: "#5B6B5D" }}>
              Whatever's freshest that morning, gathered simply, no two ever alike. It's the
              most honest bouquet we make, a straight reflection of what's actually blooming
              right now.
            </p>
            <Link
              to="/builds/floralco/shop"
              className="fl-body mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] underline"
              style={{ color: "#5B7A5E" }}
            >
              Shop this bouquet →
            </Link>
          </div>
        </FloralReveal>
      </section>

      <section className="px-6 py-16 sm:px-12 sm:py-20">
        <FloralReveal>
          <h2 className="fl-serif text-center text-4xl" style={{ color: "#2B3A2F" }}>
            This Week's Favorites
          </h2>
          <p className="fl-body mx-auto mt-3 max-w-md text-center text-base" style={{ color: "#5B6B5D" }}>
            A rotating lineup based on what's actually blooming right now, not a catalog that
            never changes.
          </p>
        </FloralReveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-3">
          {favorites.map((b, i) => (
            <FloralReveal key={b.name} delay={i * 90}>
              <Link to="/builds/floralco/shop" className="block">
                <div className="relative">
                  <span
                    className="fl-body absolute left-2 top-2 z-10 px-3 py-1 text-[10px] uppercase tracking-[0.1em]"
                    style={{ backgroundColor: "#E8A7B5", color: "#FFFFFF" }}
                  >
                    {b.tag}
                  </span>
                  <PlaceholderPhoto label={b.name} light src={b.image} />
                </div>
                <p className="fl-serif mt-4 text-xl" style={{ color: "#2B3A2F" }}>{b.name}</p>
                <p className="fl-body mt-1 text-lg" style={{ color: "#5B7A5E" }}>{b.price}</p>
              </Link>
            </FloralReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 text-center sm:px-12 sm:py-20" style={{ backgroundColor: "#5B7A5E" }}>
        <FloralReveal>
          <p className="fl-serif text-5xl" style={{ color: "#E8A7B5" }}>"</p>
          <p className="fl-body mx-auto max-w-lg text-2xl italic" style={{ color: "#FFFFFF" }}>
            Every bouquet feels like it was picked just for me. My kitchen table has never looked
            this good.
          </p>
          <p className="fl-body mt-4 text-xs uppercase tracking-[0.2em]" style={{ color: "#E8A7B5" }}>
            A Happy Customer
          </p>
        </FloralReveal>
      </section>

      <section className="px-6 py-16 text-center sm:px-12 sm:py-20">
        <FloralReveal>
          <p className="fl-serif text-3xl" style={{ color: "#2B3A2F" }}>Stay in Bloom</p>
          <p className="fl-body mt-2 text-lg" style={{ color: "#5B6B5D" }}>
            One email a week, new arrangements and seasonal picks.
          </p>
          {subscribed ? (
            <p className="fl-body mt-6 text-sm uppercase tracking-[0.15em]" style={{ color: "#5B7A5E" }}>
              You're on the list. See you Sunday.
            </p>
          ) : (
            <div className="mx-auto mt-6 flex max-w-sm items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="fl-body flex-1 border px-5 py-3 text-base outline-none"
                style={{ borderColor: "#E8A7B5", backgroundColor: "#FFFFFF", color: "#2B3A2F" }}
              />
              <button
                type="button"
                onClick={() => email && setSubscribed(true)}
                className="fl-body flex-none px-6 py-3 text-xs uppercase tracking-[0.1em]"
                style={{ backgroundColor: "#5B7A5E", color: "#FFFFFF" }}
              >
                Join
              </button>
            </div>
          )}
        </FloralReveal>
      </section>

      <footer className="fl-body px-6 py-10 text-center sm:px-10" style={{ backgroundColor: "#2B3A2F", color: "#D7DAC5" }}>
        <p className="mt-3 text-sm uppercase tracking-[0.1em]" style={{ color: "#E8A7B5" }}>
          Open Tuesday through Saturday, 9am to 5pm
        </p>
        <Link
          to="/portfolio"
          className="fl-body mt-6 inline-block text-xs uppercase tracking-[0.15em] underline"
          style={{ color: "#E8A7B5" }}
        >
          ← Back to Ashlyn Studio Portfolio
        </Link>
      </footer>
    </main>
  )
}

export function Head() {
  return <title>Petal House</title>
}