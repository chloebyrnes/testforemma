import React, { useState } from "react"
import { Link } from "gatsby"
import FloralNav from "../../../components/builds/floralco/FloralNav"
import PlaceholderPhoto from "../../../components/builds/floralco/PlaceholderPhoto"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
  .fl-serif { font-family: 'DM Serif Display', serif; }
  .fl-body { font-family: 'DM Sans', sans-serif; }
  .fl-input {
    border-bottom: 2px solid #8A9468;
    transition: border-color 0.3s ease, transform 0.3s ease;
  }
  .fl-input:focus {
    border-color: #3A3E2C;
    transform: translateY(-2px);
  }
`

const faqs = [
  { q: "Do you deliver same-day?", a: "Yes, order by 2pm for same-day delivery within town." },
  { q: "Can I request specific flowers?", a: "Always. Tell us in the message field and we'll do our best." },
  { q: "Do you do weddings and events?", a: "We do, reach out at least a month ahead for larger orders." },
]

export default function FloralContactPage() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <main className="fl-body" style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <FloralNav current="Contact" />

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-md text-center">
          <p className="fl-body text-xs uppercase tracking-[0.3em]" style={{ color: "#6B7355" }}>
            Say Hello
          </p>
          <h1 className="fl-serif mt-2 text-5xl" style={{ color: "#3A3E2C" }}>
            Get in touch.
          </h1>
          <p className="fl-body mt-3 text-lg" style={{ color: "#5A5F45" }}>
            Questions, custom orders, or just want to say hi.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-md">
          {sent ? (
            <div className="text-center">
              <p className="fl-serif text-3xl" style={{ color: "#6B7355" }}>Thank you!</p>
              <p className="fl-body mt-3 text-xl" style={{ color: "#3A3E2C" }}>
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
                style={{ color: "#3A3E2C" }}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                rows={4}
                className="fl-input fl-body w-full bg-transparent px-2 py-3 text-lg outline-none"
                style={{ color: "#3A3E2C" }}
              />
              <button
                type="button"
                onClick={() => name && setSent(true)}
                className="fl-body w-full px-6 py-4 text-sm uppercase tracking-[0.15em] shadow-sm transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#6B7355", color: "#FFFFFF" }}
              >
                Send Message
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10">
        <PlaceholderPhoto label="Visit us in person" aspect="aspect-[21/9]" className="mx-auto max-w-5xl" />
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#F4F5EF" }}>
        <h2 className="fl-serif text-center text-3xl" style={{ color: "#3A3E2C" }}>
          A Few Common Questions
        </h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-8">
          {faqs.map((f) => (
            <div key={f.q}>
              <p className="fl-serif text-lg" style={{ color: "#3A3E2C" }}>{f.q}</p>
              <p className="fl-body mt-1 text-base" style={{ color: "#5A5F45" }}>{f.a}</p>
            </div>
          ))}
        </div>
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
  return <title>Contact | Petal & Bloom Co.</title>
}