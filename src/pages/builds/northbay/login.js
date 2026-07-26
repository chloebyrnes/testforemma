import React from "react"
import { Link, navigate } from "gatsby"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
  .nb-body { font-family: 'Manrope', sans-serif; }
  a, button {
    cursor: pointer;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }
  a:hover, button:hover {
    transform: translateY(-2px);
    opacity: 0.88;
  }
`

export default function NorthbayLoginPage() {
  const goToDashboard = () => {
    navigate("/builds/northbay/")
  }

  return (
    <main className="nb-body flex min-h-screen items-center justify-center px-6" style={{ backgroundColor: "#0F172A" }}>
      <style>{fontImports}</style>
      <div className="w-full max-w-sm">
        <div className="text-center">
          <div
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg text-sm font-semibold"
            style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
          >
            NB
          </div>
          <p className="mt-4 text-xl font-semibold" style={{ color: "#FFFFFF" }}>Northbay Supply Co.</p>
          <p className="mt-1 text-sm" style={{ color: "#94A3B8" }}>Warehouse Operations Portal</p>
        </div>

        <div className="mt-8 space-y-4 rounded-lg p-6" style={{ backgroundColor: "#1E293B" }}>
          <p className="text-center text-xs leading-relaxed" style={{ color: "#93C5FD" }}>
            This is a demo dashboard for portfolio purposes. The login below is already filled
            in, just click Sign In.
          </p>

          <div>
            <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "#94A3B8" }}>Email</label>
            <input
              type="email"
              readOnly
              defaultValue="jordan@northbaysupply.com"
              className="nb-body mt-1.5 w-full rounded-md border px-3 py-2.5 text-sm outline-none"
              style={{ borderColor: "#334155", backgroundColor: "#0F172A", color: "#FFFFFF" }}
            />
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "#94A3B8" }}>Password</label>
            <input
              type="password"
              readOnly
              defaultValue="demopassword"
              className="nb-body mt-1.5 w-full rounded-md border px-3 py-2.5 text-sm outline-none"
              style={{ borderColor: "#334155", backgroundColor: "#0F172A", color: "#FFFFFF" }}
            />
          </div>
          <button
            type="button"
            onClick={goToDashboard}
            className="nb-body w-full rounded-md py-2.5 text-sm font-medium"
            style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
          >
            Sign In
          </button>
        </div>

        <Link
          to="/portfolio"
          className="nb-body mt-8 block text-center text-xs uppercase tracking-[0.1em] underline"
          style={{ color: "#64748B" }}
        >
          ← Back to Ashlyn Studio Portfolio
        </Link>
      </div>
    </main>
  )
}

export function Head() {
  return <title>Sign In | Northbay Supply Co.</title>
}