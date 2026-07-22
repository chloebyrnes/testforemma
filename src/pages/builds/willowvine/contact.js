import React, { useState } from "react"
import { Link } from "gatsby"
import WillowNav from "../../../components/builds/willowvine/WillowNav"
import WillowPlaceholder from "../../../components/builds/willowvine/WillowPlaceholder"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@400;500;600&display=swap');
  .wv-serif { font-family: 'EB Garamond', serif; }
  .wv-body { font-family: 'Jost', sans-serif; }
  .wv-field {
    border: 1px solid #D8CFC0;
    background-color: #FFFFFF;
    transition: border-color 0.2s ease;
  }
  .wv-field:focus {
    border-color: #A67C4E;
  }
`

export default function WillowContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <main className="wv-body" style={{ backgroundColor: "#F5F3EC", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <WillowNav current="Contact" />

      <WillowPlaceholder label="Evening event photo" aspect="aspect-[21/9]" className="border-0" />

      <section className="px-6 py-20 text-center sm:px-10" style={{ backgroundColor: "#C08D82" }}>
        <p className="wv-serif mx-auto max-w-lg text-2xl italic leading-relaxed" style={{ color: "#FFFFFF" }}>
          We are so excited to hear from you. For any enquiries or a complimentary consultation,
          please get in touch.
        </p>
        <p className="wv-serif mt-6 text-xl italic" style={{ color: "#FFFFFF" }}>Love, Willow &amp; Vine</p>
      </section>

      <section className="px-6 py-20 sm:px-14">
        <div className="mx-auto grid max-w-4xl gap-14 sm:grid-cols-2">
          <div>
            <h2 className="wv-serif text-2xl italic" style={{ color: "#2B2B28" }}>Get in touch</h2>
            <p className="wv-body mt-4 text-base" style={{ color: "#5A564E" }}>hello@willowandvine.co</p>
            <h2 className="wv-serif mt-12 text-2xl italic" style={{ color: "#2B2B28" }}>Studio</h2>
            <p className="wv-body mt-4 text-base leading-relaxed" style={{ color: "#5A564E" }}>
              By appointment only<br />Taking new inquiries for next season
            </p>
          </div>

          <div>
            <h2 className="wv-serif text-2xl italic" style={{ color: "#2B2B28" }}>Inquiry form</h2>
            {sent ? (
              <p className="wv-body mt-6 text-base" style={{ color: "#5A564E" }}>
                Thank you, {name.split(" ")[0]}. We'll be in touch soon.
              </p>
            ) : (
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="wv-field wv-body w-full px-4 py-3 text-base outline-none"
                  style={{ color: "#2B2B28" }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="wv-field wv-body w-full px-4 py-3 text-base outline-none"
                  style={{ color: "#2B2B28" }}
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us a bit about your event"
                  rows={4}
                  className="wv-field wv-body w-full px-4 py-3 text-base outline-none"
                  style={{ color: "#2B2B28" }}
                />
                <button
                  type="button"
                  onClick={() => name && email && setSent(true)}
                  className="wv-body w-full border px-6 py-3.5 text-xs uppercase tracking-[0.2em]"
                  style={{ borderColor: "#A67C4E", color: "#A67C4E" }}
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="wv-body px-6 py-14 text-center sm:px-10" style={{ backgroundColor: "#C17A4E" }}>
        <Link
          to="/portfolio"
          className="wv-body text-xs uppercase tracking-[0.15em] underline"
          style={{ color: "#2B2B28" }}
        >
          ← Back to Ash Studio Portfolio
        </Link>
      </footer>
    </main>
  )
}

export function Head() {
  return <title>Contact | Willow & Vine</title>
}