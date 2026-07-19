import React, { useState } from "react"
import { Link } from "gatsby"
import PetalMenu from "../../../components/builds/floralco/petalmenu"
import VintagePhoto from "../../../components/builds/floralco/VintagePhoto"
import peonyImg from "../../../images/floralco/peony.jpg"
import wildflowerImg from "../../../images/floralco/wildflower.jpg"
import evergreenImg from "../../../images/floralco/evergreen.jpg"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&display=swap');
  .fl-script { font-family: 'Caveat', cursive; }
  .fl-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
  .fl-body { font-family: 'Fraunces', serif; font-optical-sizing: auto; font-weight: 400; }
`

const favorites = [
  { name: "The Peony Dream", price: "$68", img: peonyImg, rotate: -2 },
  { name: "Wildflower Meadow", price: "$54", img: wildflowerImg, rotate: 1.5 },
  { name: "The Evergreen", price: "$76", img: evergreenImg, rotate: -1 },
]

export default function FloralHomePage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <main className="fl-body" style={{ backgroundColor: "#F7F3EA", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <PetalMenu current="Home" />

      <section className="px-6 pb-20 pt-16 text-center sm:px-10 sm:pt-24">
        <p className="fl-serif text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
          Fresh &middot; Local &middot; Seasonal
        </p>
        <h1 className="fl-script mx-auto mt-3 text-6xl sm:text-7xl" style={{ color: "#3A3E2C" }}>
          Petal &amp; Bloom Co.
        </h1>
        <p className="fl-serif mx-auto mt-4 max-w-md text-xl italic" style={{ color: "#5A5F45" }}>
          Flowers for every kind of day.
        </p>
        <p className="fl-body mx-auto mt-4 max-w-md text-lg" style={{ color: "#6E735C" }}>
          Hand-tied bouquets, delivered weekly or just when you need one.
        </p>
        <Link
          to="/builds/floralco/shop"
          className="fl-serif mt-9 inline-block px-10 py-4 text-sm uppercase tracking-[0.15em] shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{ backgroundColor: "#6B7355", color: "#F7F3EA" }}
        >
          Shop Bouquets
        </Link>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#EAE7D6" }}>
        <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-2">
          <div className="relative mx-auto">
            <VintagePhoto src={wildflowerImg} alt="Flower of the Month" rotate={-2} />
            <span
              className="fl-script absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full text-sm shadow-md"
              style={{ backgroundColor: "#6B7355", color: "#F7F3EA" }}
            >
              New!
            </span>
          </div>
          <div>
            <p className="fl-serif text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
              Flower of the Month
            </p>
            <h2 className="fl-script mt-2 text-4xl" style={{ color: "#3A3E2C" }}>
              Sunday Morning
            </h2>
            <p className="fl-body mt-3 text-lg leading-relaxed" style={{ color: "#6E735C" }}>
              Ranunculus and anemones in soft cream tones, cut fresh every Sunday. A quiet, easy
              arrangement for a slow morning.
            </p>
            <Link
              to="/builds/floralco/shop"
              className="fl-serif mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] underline"
              style={{ color: "#6B7355" }}
            >
              Shop this bouquet →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="fl-script text-center text-5xl" style={{ color: "#3A3E2C" }}>
          This Week's Favorites
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-12 sm:grid-cols-3">
          {favorites.map((b) => (
            <Link key={b.name} to="/builds/floralco/shop" className="block text-center">
              <VintagePhoto src={b.img} alt={b.name} rotate={b.rotate} className="mx-auto" />
              <p className="fl-serif mt-5 text-xl" style={{ color: "#3A3E2C" }}>{b.name}</p>
              <p className="fl-body mt-1 text-lg" style={{ color: "#6B7355" }}>{b.price}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#EAE7D6" }}>
        <h2 className="fl-script text-center text-4xl" style={{ color: "#3A3E2C" }}>
          From the Shop Floor
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-10 sm:grid-cols-3">
          <VintagePhoto label="Photo coming soon" rotate={-2} className="mx-auto" />
          <VintagePhoto label="Photo coming soon" rotate={2} className="mx-auto" />
          <VintagePhoto label="Photo coming soon" rotate={-1} className="mx-auto" />
        </div>
      </section>

      <section className="px-6 py-16 text-center sm:px-10 sm:py-20" style={{ backgroundColor: "#3A3E2C" }}>
        <p className="fl-script text-5xl" style={{ color: "#8A9468" }}>"</p>
        <p className="fl-body mx-auto max-w-lg text-2xl italic" style={{ color: "#F7F3EA" }}>
          Every bouquet feels like it was picked just for me. My kitchen table has never looked
          this good.
        </p>
        <p className="fl-serif mt-4 text-xs uppercase tracking-[0.2em]" style={{ color: "#8A9468" }}>
          A Happy Customer
        </p>
      </section>

      <section className="px-6 py-16 text-center sm:px-10 sm:py-20">
        <p className="fl-script text-4xl" style={{ color: "#3A3E2C" }}>Stay in Bloom</p>
        <p className="fl-body mt-2 text-lg" style={{ color: "#6E735C" }}>
          One email a week, new arrangements and seasonal picks.
        </p>
        {subscribed ? (
          <p className="fl-serif mt-6 text-sm uppercase tracking-[0.15em]" style={{ color: "#6B7355" }}>
            You're on the list. See you Sunday.
          </p>
        ) : (
          <div className="mx-auto mt-6 flex max-w-sm items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="fl-body flex-1 rounded-full border px-5 py-3 text-base outline-none"
              style={{ borderColor: "#8A9468", backgroundColor: "#FFFFFF", color: "#3A3E2C" }}
            />
            <button
              type="button"
              onClick={() => email && setSubscribed(true)}
              className="fl-serif flex-none rounded-full px-6 py-3 text-xs uppercase tracking-[0.1em] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#6B7355", color: "#F7F3EA" }}
            >
              Join
            </button>
          </div>
        )}
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
  return <title>Petal & Bloom Co.</title>
}