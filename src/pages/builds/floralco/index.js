import React, { useState } from "react"
import { Link } from "gatsby"
import PetalMenu from "../../../components/builds/floralco/petalmenu"
import backgroundImg from "../../../images/floralco/background.jpg"
import peonyImg from "../../../images/floralco/peony.jpg"
import wildflowerImg from "../../../images/floralco/wildflower.jpg"
import evergreenImg from "../../../images/floralco/evergreen.jpg"
import sundayImg from "../../../images/floralco/sundaymorning.jpg"

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
  .fl-wave { display: block; width: 100%; height: 40px; }
`

function WaveDivider({ fill = "#FBF6F3" }) {
  return (
    <svg viewBox="0 0 1200 40" className="fl-wave" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,20 C150,45 350,-5 600,20 C850,45 1050,-5 1200,20 L1200,40 L0,40 Z" fill={fill} />
    </svg>
  )
}

const favorites = [
  { name: "The Peony Dream", price: "$68", img: peonyImg, shape: "blob" },
  { name: "Wildflower Meadow", price: "$54", img: wildflowerImg, shape: "circle" },
  { name: "The Evergreen", price: "$76", img: evergreenImg, shape: "blob" },
]

export default function FloralHomePage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <main className="fl-body" style={{ background: "linear-gradient(160deg, #FBF6F3 0%, #F6E1E5 55%, #EDEEDD 100%)", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <PetalMenu current="Home" />

      <section className="relative overflow-hidden px-6 pb-20 pt-16 text-center sm:px-10 sm:pt-24">
        <img
          src={backgroundImg}
          alt=""
          className="fl-blob pointer-events-none absolute -left-20 -top-20 h-72 w-72 object-cover opacity-25 sm:h-[26rem] sm:w-[26rem]"
          style={{ filter: "saturate(0.6) sepia(0.15)" }}
        />
        <div className="relative">
          <p className="fl-serif text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
            Fresh &middot; Local &middot; Seasonal
          </p>
          <h1 className="fl-script mx-auto mt-3 text-6xl sm:text-7xl" style={{ color: "#3F3626" }}>
            Petal &amp; Bloom Co.
          </h1>
          <p className="fl-serif mx-auto mt-4 max-w-md text-xl italic" style={{ color: "#5B5240" }}>
            Flowers for every kind of day.
          </p>
          <p className="fl-body mx-auto mt-4 max-w-md text-lg" style={{ color: "#75655D" }}>
            Hand-tied bouquets, delivered weekly or just when you need one.
          </p>
          <Link
            to="/builds/floralco/shop"
            className="fl-serif mt-9 inline-block px-10 py-4 text-sm uppercase tracking-[0.15em] shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: "#6B7355", color: "#FBF6F3", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          >
            Shop Bouquets
          </Link>
        </div>
      </section>

      <WaveDivider fill="#F6E1E5" />

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#F6E1E5" }}>
        <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-2">
          <div className="relative">
            <div
              className="fl-blob aspect-square w-full overflow-hidden shadow-lg"
              style={{ border: "3px solid #F0C9D2" }}
            >
              <img src={sundayImg} alt="Flower of the Month" className="h-full w-full object-cover" />
            </div>
            <span
              className="fl-script absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full text-sm shadow-md"
              style={{ backgroundColor: "#6B7355", color: "#F6E1E5" }}
            >
              New!
            </span>
          </div>
          <div>
            <p className="fl-serif text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
              Flower of the Month
            </p>
            <h2 className="fl-script mt-2 text-4xl" style={{ color: "#3F3626" }}>
              Sunday Morning
            </h2>
            <p className="fl-body mt-3 text-lg leading-relaxed" style={{ color: "#75655D" }}>
              Ranunculus and anemones in soft blush and cream, cut fresh every Sunday. A quiet,
              easy arrangement for a slow morning.
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

      <WaveDivider fill="#EDEEDD" />

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#EDEEDD" }}>
        <h2 className="fl-script text-center text-5xl" style={{ color: "#3F3626" }}>
          This Week's Favorites
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-3">
          {favorites.map((b) => (
            <Link key={b.name} to="/builds/floralco/shop" className="fl-card block text-center">
              <div
                className={`mx-auto w-full overflow-hidden shadow-md ${b.shape === "circle" ? "aspect-square rounded-full" : "fl-blob aspect-[4/5]"}`}
                style={{ border: "3px solid #FBF6F3" }}
              >
                <img src={b.img} alt={b.name} className="fl-card-img h-full w-full object-cover" />
              </div>
              <p className="fl-serif mt-5 text-xl" style={{ color: "#3F3626" }}>{b.name}</p>
              <p className="fl-body mt-1 text-lg" style={{ color: "#6B7355" }}>{b.price}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 text-center sm:px-10 sm:py-20" style={{ backgroundColor: "#3F3626" }}>
        <p className="fl-script text-5xl" style={{ color: "#F0C9D2" }}>"</p>
        <p className="fl-body mx-auto max-w-lg text-2xl italic" style={{ color: "#FBF6F3" }}>
          Every bouquet feels like it was picked just for me. My kitchen table has never looked
          this good.
        </p>
        <p className="fl-serif mt-4 text-xs uppercase tracking-[0.2em]" style={{ color: "#F0C9D2" }}>
          A Happy Customer
        </p>
      </section>

      <section className="px-6 py-16 text-center sm:px-10 sm:py-20" style={{ backgroundColor: "#F6E1E5" }}>
        <p className="fl-script text-4xl" style={{ color: "#3F3626" }}>Stay in Bloom</p>
        <p className="fl-body mt-2 text-lg" style={{ color: "#75655D" }}>
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
              style={{ borderColor: "#F0C9D2", backgroundColor: "#FFFFFF", color: "#3F3626" }}
            />
            <button
              type="button"
              onClick={() => email && setSubscribed(true)}
              className="fl-serif flex-none rounded-full px-6 py-3 text-xs uppercase tracking-[0.1em] transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#6B7355", color: "#FBF6F3" }}
            >
              Join
            </button>
          </div>
        )}
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
  return <title>Petal & Bloom Co.</title>
}