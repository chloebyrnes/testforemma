import React from "react"
import { Link, navigate } from "gatsby"
import willowVineLogo from "./willowandvine.png"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap');
  .wv-heading { font-family: 'Work Sans', sans-serif; font-weight: 600; }
  .wv-body { font-family: 'Work Sans', sans-serif; font-weight: 400; }
  .wv-field {
    border: 1px solid #ABB2AB;
    background-color: #FFFFFF;
  }
  a, button {
    cursor: pointer;
    transition: opacity 0.15s ease;
  }
  a:hover, button:hover {
    opacity: 0.85;
  }
`

export default function WillowLoginPage() {
  const goToPortal = () => {
    navigate("/builds/willowvine/portal")
  }

  return (
    <main
      className="wv-body flex min-h-screen flex-col items-center justify-center px-6 py-16 sm:px-10"
      style={{ backgroundColor: "#FAF6F0" }}
    >
      <style>{fontImports}</style>

      <div className="w-full max-w-sm">
        <div className="text-center">
          <img src={willowVineLogo} alt="Willow & Vine" className="mx-auto h-28 w-auto" />
          <h1 className="wv-heading mt-3 text-3xl" style={{ color: "#33302C" }}>
            Willow &amp; Vine
          </h1>
          <p className="wv-body mt-2 text-xs uppercase tracking-[0.3em]" style={{ color: "#C7908E" }}>
            Client Portal
          </p>
        </div>

        <div className="mt-10 border p-8" style={{ borderColor: "#ABB2AB", backgroundColor: "#FFFFFF" }}>
          <p
            className="wv-body mb-6 text-center text-xs leading-relaxed"
            style={{ color: "#C7908E" }}
          >
            This is a demo portal for portfolio purposes. The login below is already filled in,
            just click Log In.
          </p>

          <label className="wv-body mb-1 block text-xs uppercase tracking-[0.1em]" style={{ color: "#6B6660" }}>
            Username
          </label>
          <input
            type="text"
            readOnly
            defaultValue="sarahandjames"
            className="wv-field wv-body mb-4 w-full px-4 py-3 text-sm outline-none"
            style={{ color: "#33302C" }}
          />

          <label className="wv-body mb-1 block text-xs uppercase tracking-[0.1em]" style={{ color: "#6B6660" }}>
            Password
          </label>
          <input
            type="password"
            readOnly
            defaultValue="demopassword"
            className="wv-field wv-body mb-6 w-full px-4 py-3 text-sm outline-none"
            style={{ color: "#33302C" }}
          />

          <button
            type="button"
            onClick={goToPortal}
            className="wv-body w-full px-6 py-3.5 text-xs uppercase tracking-[0.2em]"
            style={{ backgroundColor: "#C7908E", color: "#FFFFFF" }}
          >
            Log In
          </button>

          <p className="wv-body mt-5 text-center text-xs" style={{ color: "#ABB2AB" }}>
            Remember Login Info? &nbsp;·&nbsp; Forgot Password?
          </p>
        </div>
      </div>

      <Link
        to="/portfolio"
        className="wv-body mt-14 text-xs uppercase tracking-[0.15em] underline"
        style={{ color: "#6B6660" }}
      >
        ← Back to Ashlyn Studio Portfolio
      </Link>
    </main>
  )
}

export function Head() {
  return <title>Client Login | Willow & Vine</title>
}