import React, { useState } from "react"
import { Link } from "gatsby"
import FloralNav from "../../../components/builds/floralco/FloralNav"
import PlaceholderPhoto from "../../../components/builds/floralco/PlaceholderPhoto"
import FloralReveal from "../../../components/builds/floralco/FloralReveal"
import peonyImg from "./peonydream.png"
import wildflowerImg from "./wildflowermeadow.png"
import sundayImg from "./sundaymorning.png"
import evergreenImg from "./theevergreen.png"
import marketBasketImg from "./marketbasket.png"
import goldenHourImg from "./goldenhour.png"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600&family=Karla:wght@400;500;600;700&display=swap');
  .fl-serif { font-family: 'Fraunces', serif; }
  .fl-body { font-family: 'Karla', sans-serif; }
  a, button {
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  a:hover, button:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`

const bouquets = [
  { name: "The Peony Dream", price: 68, blurb: "Blush peonies, ranunculus, and eucalyptus, gathered loose and full.", tag: "Best Seller", image: peonyImg },
  { name: "Wildflower Meadow", price: 54, blurb: "A loose, garden-style mix in warm tones, like a field you'd wander into.", tag: "Seasonal", image: wildflowerImg },
  { name: "Sunday Morning", price: 42, blurb: "Ranunculus and anemones, simple and sweet, cut fresh every Sunday.", tag: "New", image: sundayImg },
  { name: "The Evergreen", price: 76, blurb: "Roses, dahlias, and seasonal greenery, our most romantic arrangement.", tag: "Limited", image: evergreenImg },
  { name: "Market Basket", price: 36, blurb: "Whatever's freshest that morning, gathered simply, no two ever alike.", tag: "Coming Soon", image: marketBasketImg },
  { name: "Golden Hour", price: 58, blurb: "Warm dahlias and marigolds for that late-summer glow.", tag: "Coming Soon", image: goldenHourImg },
]

export default function FloralShopPage() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (bouquet) => {
    setCart((c) => (c.some((item) => item.name === bouquet.name) ? c : [...c, bouquet]))
  }

  const removeFromCart = (name) => {
    setCart((c) => c.filter((item) => item.name !== name))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="fl-body" style={{ backgroundColor: "#FAF7F2", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <FloralNav current="Shop" cartCount={cart.length} onCartClick={() => setCartOpen((v) => !v)} />

      {cartOpen && (
        <div className="px-6 pt-6 sm:px-10">
          <div className="mx-auto max-w-sm border p-5 text-left" style={{ borderColor: "#E8A7B5", backgroundColor: "#FFFFFF" }}>
            {cart.length === 0 ? (
              <p className="fl-body text-sm" style={{ color: "#5B6B5D" }}>Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                      <span style={{ color: "#2B3A2F" }}>{item.name}</span>
                      <div className="flex items-center gap-3">
                        <span style={{ color: "#5B7A5E" }}>${item.price}</span>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.name)}
                          className="fl-body text-xs uppercase tracking-[0.05em] underline"
                          style={{ color: "#5B6B5D" }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t pt-3 text-sm font-semibold" style={{ borderColor: "#F1E4D8", color: "#2B3A2F" }}>
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <section className="px-6 pb-6 pt-16 text-center sm:px-10 sm:pt-20">
        <FloralReveal>
          <p className="fl-body text-xs uppercase tracking-[0.3em]" style={{ color: "#E8A7B5" }}>
            The Shop
          </p>
          <h1 className="fl-serif mt-2 text-5xl sm:text-6xl" style={{ color: "#2B3A2F" }}>
            This Week's Bouquets
          </h1>
          <p className="fl-body mx-auto mt-3 max-w-md text-lg" style={{ color: "#5B6B5D" }}>
            Cut fresh, hand-tied, and delivered within the day. Everything below was picked this
            morning, so what's in stock changes weekly.
          </p>
        </FloralReveal>
      </section>

      <section className="px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-x-10 gap-y-14 sm:grid-cols-2">
          {bouquets.map((b, i) => (
            <FloralReveal key={b.name} delay={i * 90} className="relative">
              <span
                className="fl-body absolute left-2 top-2 z-10 px-3 py-1 text-[10px] uppercase tracking-[0.1em]"
                style={{ backgroundColor: "#E8A7B5", color: "#FFFFFF" }}
              >
                {b.tag}
              </span>
              <PlaceholderPhoto label={b.name} aspect="aspect-[4/3]" light src={b.image} />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="fl-serif text-xl" style={{ color: "#2B3A2F" }}>{b.name}</p>
                  <p className="fl-body mt-1 max-w-xs text-base" style={{ color: "#5B6B5D" }}>{b.blurb}</p>
                  <p className="fl-body mt-2 text-lg" style={{ color: "#5B7A5E" }}>${b.price}</p>
                </div>
                {cart.some((item) => item.name === b.name) ? (
                  <span
                    className="flex-none px-4 py-2 text-xs uppercase tracking-[0.1em]"
                    style={{ backgroundColor: "#F1E4D8", color: "#5B7A5E" }}
                  >
                    Added ✓
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => addToCart(b)}
                    className="flex-none px-4 py-2 text-xs uppercase tracking-[0.1em]"
                    style={{ backgroundColor: "#5B7A5E", color: "#FFFFFF" }}
                  >
                    Add
                  </button>
                )}
              </div>
            </FloralReveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#F1E4D8" }}>
        <FloralReveal className="mx-auto max-w-3xl text-center">
          <h2 className="fl-serif text-3xl" style={{ color: "#2B3A2F" }}>How Delivery Works</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="fl-serif text-2xl" style={{ color: "#E8A7B5" }}>01</p>
              <p className="fl-body mt-2 text-base" style={{ color: "#5B6B5D" }}>Order by 2pm for same-day delivery in town.</p>
            </div>
            <div>
              <p className="fl-serif text-2xl" style={{ color: "#E8A7B5" }}>02</p>
              <p className="fl-body mt-2 text-base" style={{ color: "#5B6B5D" }}>We hand-tie and wrap every order fresh.</p>
            </div>
            <div>
              <p className="fl-serif text-2xl" style={{ color: "#E8A7B5" }}>03</p>
              <p className="fl-body mt-2 text-base" style={{ color: "#5B6B5D" }}>Delivered by hand, no boxes left on doorsteps.</p>
            </div>
          </div>
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
  return <title>Shop | Petal House</title>
}