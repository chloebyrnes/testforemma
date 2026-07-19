import React, { useState } from "react"
import { Link } from "gatsby"
import PetalMenu from "../../../components/builds/floralco/petalmenu"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');
  .fl-script { font-family: 'Parisienne', cursive; }
  .fl-serif { font-family: 'Playfair Display', serif; }
  .fl-body { font-family: 'Cormorant Garamond', serif; }
  .fl-input {
    border-bottom: 2px solid #F0C9D2;
    transition: border-color 0.3s ease, transform 0.3s ease;
  }
  .fl-input:focus {
    border-color: #6B7355;
    transform: translateY(-2px);
  }
  .fl-bloom-btn {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .fl-bloom-btn:hover {
    transform: scale(1.05) rotate(-1deg);
    box-shadow: 0 12px 24px rgba(107, 115, 85, 0.35);
  }
`

export default function FloralContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <main className="fl-body" style={{ background: "linear-gradient(160deg, #F6E1E5 0%, #FBF6F3 50%, #EDEEDD 100%)", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <PetalMenu current="Contact" />

      <section className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-24">
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute -left-10 top-10 h-40 w-40 opacity-20 sm:h-56 sm:w-56" fill="none">
          <path d="M12 21 C4 17 4 8 12 3 C20 8 20 17 12 21 Z" fill="#8A9468" />
        </svg>
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute -right-8 bottom-10 h-32 w-32 opacity-20 sm:h-44 sm:w-44" fill="none">
          <path d="M12 21 C4 17 4 8 12 3 C20 8 20 17 12 21 Z" fill="#F0C9D2" />
        </svg>

        <div className="relative mx-auto max-w-md text-center">
          <p className="fl-serif text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
            Say Hello
          </p>
          <h1 className="fl-script mt-2 text-6xl" style={{ color: "#3F3626" }}>
            Get in touch.
          </h1>
        </div>

        <div className="relative mx-auto mt-12 max-w-md">
          {sent ? (
            <div className="text-center">
              <p className="fl-script text-4xl" style={{ color: "#6B7355" }}>Thank you!</p>
              <p className="fl-body mt-3 text-xl" style={{ color: "#3F3626" }}>
                {name.split(" ")[0]}, we'll get back to you soon.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="fl-input fl-body w-full bg-transparent px-2 py-3 text-lg outline-none"
                style={{ color: "#3F3626" }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="fl-input fl-body w-full bg-transparent px-2 py-3 text-lg outline-none"
                style={{ color: "#3F3626" }}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                rows={4}
                className="fl-input fl-body w-full bg-transparent px-2 py-3 text-lg outline-none"
                style={{ color: "#3F3626" }}
              />
              <button
                type="button"
                onClick={() => name && email && setSent(true)}
                className="fl-bloom-btn fl-serif w-full px-6 py-4 text-sm uppercase tracking-[0.15em] shadow-md"
                style={{ backgroundColor: "#6B7355", color: "#FBF6F3", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
              >
                Send Message
              </button>
            </div>
          )}
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
  return <title>Contact | Petal & Bloom Co.</title>
}