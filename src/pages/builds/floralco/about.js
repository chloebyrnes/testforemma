import React, { useState } from "react"
import { Link } from "gatsby"
import PetalMenu from "../../../components/builds/floralco/petalmenu"
import evergreenImg from "../../../images/floralco/evergreen.jpg"
import peonyImg from "../../../images/floralco/peony.jpg"

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
  .fl-leaf {
    transition: transform 0.4s ease;
  }
  .fl-leaf:hover {
    transform: rotate(8deg) scale(1.1);
  }
`

const values = [
  { title: "Locally Grown", body: "Every stem comes from a farm within fifty miles of our stand." },
  { title: "Hand-Tied, Always", body: "No foam, no wire frames. Just twine and a steady hand." },
  { title: "Never Overdesigned", body: "We let the flowers do the talking, not the arranging." },
]

export default function FloralAboutPage() {
  const [hoveredValue, setHoveredValue] = useState(null)

  return (
    <main className="fl-body" style={{ background: "linear-gradient(160deg, #EDEEDD 0%, #FBF6F3 45%, #F6E1E5 100%)", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <PetalMenu current="About" />

      <section className="px-6 pb-12 pt-16 sm:px-10 sm:pt-24">
        <div className="mx-auto grid max-w-4xl items-center gap-12 sm:grid-cols-2">
          <div>
            <p className="fl-serif text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
              Our Story
            </p>
            <h1 className="fl-script mt-2 text-6xl" style={{ color: "#3F3626" }}>
              Started at a market stand.
            </h1>
            <p className="fl-body mt-5 text-xl leading-relaxed" style={{ color: "#75655D" }}>
              Petal &amp; Bloom Co. started as a small stand at the Saturday market. Today we
              source from local growers within fifty miles and hand-tie every bouquet to order,
              still doing it the same way we did that first Saturday.
            </p>
            <p className="fl-body mt-4 text-xl leading-relaxed" style={{ color: "#75655D" }}>
              We believe flowers should feel personal, not perfect. Every arrangement is a
              little different because every season is a little different.
            </p>
          </div>
          <div className="relative">
            <div className="fl-blob aspect-[4/5] w-full overflow-hidden shadow-lg" style={{ border: "3px solid #F0C9D2" }}>
              <img src={evergreenImg} alt="Petal & Bloom Co. arrangement" className="h-full w-full object-cover" />
            </div>
            <div
              className="absolute -bottom-8 -left-8 h-28 w-28 overflow-hidden rounded-full shadow-md sm:h-36 sm:w-36"
              style={{ border: "4px solid #FBF6F3" }}
            >
              <img src={peonyImg} alt="Peonies" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#3F3626" }}>
        <h2 className="fl-script text-center text-5xl" style={{ color: "#F0C9D2" }}>
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
                  fill={hoveredValue === idx ? "#F0C9D2" : "#8A9468"}
                  style={{ transition: "fill 0.3s ease" }}
                />
                <path d="M12 21 L12 10" stroke="#3F3626" strokeWidth="0.8" />
              </svg>
              <p className="fl-serif mt-4 text-lg" style={{ color: "#F6E1E5" }}>{v.title}</p>
              <p className="fl-body mt-2 text-base leading-relaxed" style={{ color: "#D9C4BC" }}>{v.body}</p>
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
  return <title>About | Petal & Bloom Co.</title>
}