import React, { useState } from "react"
import { Link } from "gatsby"
import FloralNav from "../../../components/builds/floralco/FloralNav"
import PlaceholderPhoto from "../../../components/builds/floralco/PlaceholderPhoto"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
  .fl-serif { font-family: 'DM Serif Display', serif; }
  .fl-body { font-family: 'DM Sans', sans-serif; }
`

const favorites = [
  { name: "The Peony Dream", price: "$68" },
  { name: "Wildflower Meadow", price: "$54" },
  { name: "The Evergreen", price: "$76" },
]

export default function FloralHomePage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <main className="fl-body" style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <FloralNav current="Home" />

      <section className="px-6 pb-16 pt-16 text-center sm:px-10 sm:pt-20">
        <p className="fl-body text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
          Fresh &middot; Local &middot; Seasonal
        </p>
        <h1 className="fl-serif mx-auto mt-3 text-6xl sm:text-7xl" style={{ color: "#3A3E2C" }}>
          Petal &amp; Bloom Co.
        </h1>
        <p className="fl-body mx-auto mt-4 max-w-lg text-lg" style={{ color: "#5A5F45" }}>
          Flowers for every kind of day. We grow, cut, and hand-tie every bouquet ourselves,
          right here in the shop, so what you get is never more than a day old.
        </p>
        <Link
          to="/builds/floralco/shop"
          className="fl-body mt-9 inline-block px-10 py-4 text-sm uppercase tracking-[0.15em] shadow-sm transition-transform duration-300 hover:-translate-y-1"
          style={{ backgroundColor: "#6B7355", color: "#FFFFFF" }}
        >
          Shop Bouquets
        </Link>
      </section>

      <section className="px-6 py-14 sm:px-10">
        <PlaceholderPhoto label="Hero photo" aspect="aspect-[21/9]" className="mx-auto max-w-5xl" />
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#F4F5EF" }}>
        <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-2">
          <PlaceholderPhoto label="Flower of the month" />
          <div>
            <p className="fl-body text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
              Flower of the Month
            </p>
            <h2 className="fl-serif mt-2 text-4xl" style={{ color: "#3A3E2C" }}>
              Sunday Morning
            </h2>
            <p className="fl-body mt-3 text-lg leading-relaxed" style={{ color: "#5A5F45" }}>
              Ranunculus and anemones in soft cream tones, cut fresh every Sunday. A quiet, easy
              arrangement for a slow morning, and one of the few bouquets we make the exact same
              way every single week, because some things don't need changing.
            </p>
            <Link
              to="/builds/floralco/shop"
              className="fl-body mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] underline"
              style={{ color: "#6B7355" }}
            >
              Shop this bouquet →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="fl-serif text-center text-4xl" style={{ color: "#3A3E2C" }}>
          This Week's Favorites
        </h2>
        <p className="fl-body mx-auto mt-3 max-w-md text-center text-base" style={{ color: "#5A5F45" }}>
          A rotating lineup based on what's actually blooming right now, not a catalog that
          never changes.
        </p>
        <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-3">
          {favorites.map((b) => (
            <Link key={b.name} to="/builds/floralco/shop" className="block text-center">
              <PlaceholderPhoto label={b.name} />
              <p className="fl-serif mt-4 text-xl" style={{ color: "#3A3E2C" }}>{b.name}</p>
              <p className="fl-body mt-1 text-lg" style={{ color: "#6B7355" }}>{b.price}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#F4F5EF" }}>
        <h2 className="fl-serif text-center text-3xl" style={{ color: "#3A3E2C" }}>
          From the Shop Floor
        </h2>
        <p className="fl-body mx-auto mt-3 max-w-md text-center text-base" style={{ color: "#5A5F45" }}>
          A little behind the scenes, from the market run to the finished bouquet.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-4">
          <PlaceholderPhoto label="Morning market run" />
          <PlaceholderPhoto label="Sorting stems" />
          <PlaceholderPhoto label="Hand-tying" />
          <PlaceholderPhoto label="Ready for pickup" />
        </div>
      </section>

      <section className="px-6 py-16 text-center sm:px-10 sm:py-20" style={{ backgroundColor: "#3A3E2C" }}>
        <p className="fl-serif text-4xl" style={{ color: "#8A9468" }}>"</p>
        <p className="fl-body mx-auto max-w-lg text-2xl italic" style={{ color: "#FFFFFF" }}>
          Every bouquet feels like it was picked just for me. My kitchen table has never looked
          this good.
        </p>
        <p className="fl-body mt-4 text-xs uppercase tracking-[0.2em]" style={{ color: "#8A9468" }}>
          A Happy Customer
        </p>
      </section>

      <section className="px-6 py-16 text-center sm:px-10 sm:py-20">
        <p className="fl-serif text-3xl" style={{ color: "#3A3E2C" }}>Stay in Bloom</p>
        <p className="fl-body mt-2 text-lg" style={{ color: "#5A5F45" }}>
          One email a week, new arrangements and seasonal picks.
        </p>
        {subscribed ? (
          <p className="fl-body mt-6 text-sm uppercase tracking-[0.15em]" style={{ color: "#6B7355" }}>
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
              style={{ borderColor: "#8A9468", backgroundColor: "#FFFFFF", color: "#3A3E2C" }}
            />
            <button
              type="button"
              onClick={() => email && setSubscribed(true)}
              className="fl-body flex-none px-6 py-3 text-xs uppercase tracking-[0.1em] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#6B7355", color: "#FFFFFF" }}
            >
              Join
            </button>
          </div>
        )}
      </section>

      <footer className="fl-body px-6 py-10 text-center sm:px-10" style={{ backgroundColor: "#3A3E2C", color: "#EAE7D6" }}>
        <p className="fl-serif text-2xl" style={{ color: "#FFFFFF" }}>Petal &amp; Bloom Co.</p>
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
  return <title>Petal & Bloom Co.</title>
}