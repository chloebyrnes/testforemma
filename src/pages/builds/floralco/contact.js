import React, { useState } from "react"
import { Link } from "gatsby"
import FloralNav from "../../../components/builds/floralco/FloralNav"
import PlaceholderPhoto from "../../../components/builds/floralco/PlaceholderPhoto"
import FloralReveal from "../../../components/builds/floralco/FloralReveal"

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
  .fl-input {
    border-bottom: 2px solid #E8A7B5;
    transition: border-color 0.3s ease, transform 0.3s ease;
  }
  .fl-input:focus {
    border-color: #5B7A5E;
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
    <main className="fl-body" style={{ backgroundColor: "#FAF7F2", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <FloralNav current="Contact" />

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <FloralReveal className="mx-auto max-w-md text-center">
          <p className="fl-body text-xs uppercase tracking-[0.3em]" style={{ color: "#E8A7B5" }}>
            Say Hello
          </p>
          <h1 className="fl-serif mt-2 text-5xl" style={{ color: "#2B3A2F" }}>
            Get in touch.
          </h1>
          <p className="fl-body mt-3 text-lg" style={{ color: "#5B6B5D" }}>
            Questions, custom orders, or just want to say hi.
          </p>
        </FloralReveal>

        <FloralReveal delay={100} className="mx-auto mt-12 max-w-md">
          {sent ? (
            <div className="text-center">
              <p className="fl-serif text-3xl" style={{ color: "#5B7A5E" }}>Thank you!</p>
              <p className="fl-body mt-3 text-xl" style={{ color: "#2B3A2F" }}>
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
                style={{ color: "#2B3A2F" }}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                rows={4}
                className="fl-input fl-body w-full bg-transparent px-2 py-3 text-lg outline-none"
                style={{ color: "#2B3A2F" }}
              />
              <button
                type="button"
                onClick={() => name && setSent(true)}
                className="fl-body w-full px-6 py-4 text-sm uppercase tracking-[0.15em]"
                style={{ backgroundColor: "#5B7A5E", color: "#FFFFFF" }}
              >
                Send Message
              </button>
            </div>
          )}
        </FloralReveal>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20" style={{ backgroundColor: "#F1E4D8" }}>
        <FloralReveal>
          <h2 className="fl-serif text-center text-3xl" style={{ color: "#2B3A2F" }}>
            A Few Common Questions
          </h2>
        </FloralReveal>
        <div className="mx-auto mt-10 max-w-2xl space-y-8">
          {faqs.map((f, i) => (
            <FloralReveal key={f.q} delay={i * 90}>
              <p className="fl-serif text-lg" style={{ color: "#2B3A2F" }}>{f.q}</p>
              <p className="fl-body mt-1 text-base" style={{ color: "#5B6B5D" }}>{f.a}</p>
            </FloralReveal>
          ))}
        </div>
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
  return <title>Contact | Petal House</title>
}