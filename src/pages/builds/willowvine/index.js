import React from "react"
import { Link } from "gatsby"
import WillowNav from "../../../components/builds/willowvine/WillowNav"
import WillowPlaceholder from "../../../components/builds/willowvine/WillowPlaceholder"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@400;500;600&display=swap');
  .wv-serif { font-family: 'EB Garamond', serif; }
  .wv-body { font-family: 'Jost', sans-serif; }
`

const featured = ["Real Weddings", "Bridal Digest", "The Occasion", "Vow & Co", "Simply Wed"]

export default function WillowHomePage() {
  return (
    <main className="wv-body" style={{ backgroundColor: "#F5F3EC", minHeight: "100vh" }}>
      <style>{fontImports}</style>
      <WillowNav current="Home" />

      <section className="relative">
        <WillowPlaceholder label="Hero photo" aspect="aspect-[16/9]" className="border-0" />
        <div className="absolute inset-x-0 bottom-10 text-center sm:bottom-16">
          <h1 className="wv-serif text-4xl uppercase tracking-[0.25em] sm:text-5xl" style={{ color: "#2B2B28" }}>
            Willow <span className="italic underline decoration-1 underline-offset-4">&amp;</span> Vine
          </h1>
          <p className="wv-body mt-4 text-xs uppercase tracking-[0.35em]" style={{ color: "#2B2B28" }}>
            Bespoke Celebrations
          </p>
        </div>
      </section>

      <section className="px-6 py-24 text-center sm:px-10">
        <div className="mx-auto h-16 w-px" style={{ backgroundColor: "#A67C4E" }} />
        <p className="wv-serif mx-auto mt-10 max-w-xl text-2xl italic leading-relaxed" style={{ color: "#B57A4E" }}>
          We plan weddings and manage every detail through a private client portal, so you
          always know exactly where things stand.
        </p>
        <p className="wv-serif mt-6 text-2xl italic" style={{ color: "#B57A4E" }}>
          Thoughtful, transparent, effortless.
        </p>
        <div className="mx-auto mt-10 h-16 w-px" style={{ backgroundColor: "#A67C4E" }} />
      </section>

      <section className="px-6 pb-20 sm:px-10">
        <WillowPlaceholder label="Studio reel" aspect="aspect-video" className="mx-auto max-w-3xl" />
      </section>

      <section className="px-6 py-16 text-center sm:px-10">
        <p className="wv-serif text-2xl italic" style={{ color: "#B57A4E" }}>As seen in</p>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {featured.map((f) => (
            <span key={f} className="wv-serif text-lg" style={{ color: "#2B2B28" }}>{f}</span>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10" style={{ backgroundColor: "#C17A4E" }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="wv-body text-xs uppercase tracking-[0.3em]" style={{ color: "#F5F3EC" }}>
            Built For Our Clients
          </p>
          <h2 className="wv-serif mt-4 text-4xl italic" style={{ color: "#FFFFFF" }}>
            Your entire wedding, in one place.
          </h2>
          <p className="wv-body mx-auto mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "#F5E8DC" }}>
            Every couple gets a private portal to track planning progress, review contracts and
            files, check off their to-do list, and message us directly, no more digging through
            email threads.
          </p>

          <div className="mx-auto mt-12 grid max-w-2xl gap-8 sm:grid-cols-3">
            <div>
              <p className="wv-serif text-3xl italic" style={{ color: "#FFFFFF" }}>68%</p>
              <p className="wv-body mt-1 text-xs uppercase tracking-[0.15em]" style={{ color: "#F5E8DC" }}>Budget Tracked Live</p>
            </div>
            <div>
              <p className="wv-serif text-3xl italic" style={{ color: "#FFFFFF" }}>24/7</p>
              <p className="wv-body mt-1 text-xs uppercase tracking-[0.15em]" style={{ color: "#F5E8DC" }}>Portal Access</p>
            </div>
            <div>
              <p className="wv-serif text-3xl italic" style={{ color: "#FFFFFF" }}>1</p>
              <p className="wv-body mt-1 text-xs uppercase tracking-[0.15em]" style={{ color: "#F5E8DC" }}>Place For Everything</p>
            </div>
          </div>

          <div className="mt-12">
            <WillowPlaceholder label="Portal preview" aspect="aspect-[16/9]" className="mx-auto max-w-2xl" light />
          </div>

          <Link
            to="/builds/willowvine/portal"
            className="wv-body mt-10 inline-block px-10 py-4 text-xs uppercase tracking-[0.2em]"
            style={{ backgroundColor: "#FFFFFF", color: "#C17A4E" }}
          >
            View the Client Portal
          </Link>
        </div>
      </section>

      <footer className="wv-body px-6 py-20 text-center sm:px-10" style={{ backgroundColor: "#C17A4E" }}>
        <h2 className="wv-serif text-4xl uppercase tracking-[0.2em]" style={{ color: "#2B2B28" }}>
          Willow <span className="italic underline decoration-1 underline-offset-4">&amp;</span> Vine
        </h2>
        <p className="wv-body mt-3 text-xs uppercase tracking-[0.3em]" style={{ color: "#2B2B28" }}>
          Bespoke Celebrations
        </p>
        <p className="mt-8 text-base" style={{ color: "#3A322A" }}>Get in touch</p>
        <p className="mt-1 text-base" style={{ color: "#3A322A" }}>hello@willowandvine.co</p>
        <p className="mt-10 text-sm" style={{ color: "#3A322A" }}>All rights reserved Willow &amp; Vine</p>
        <p className="text-sm" style={{ color: "#3A322A" }}>© {new Date().getFullYear()}</p>
        <Link
          to="/portfolio"
          className="wv-body mt-8 inline-block text-xs uppercase tracking-[0.15em] underline"
          style={{ color: "#3A322A" }}
        >
          ← Back to Ash Studio Portfolio
        </Link>
      </footer>
    </main>
  )
}

export function Head() {
  return <title>Willow & Vine</title>
}