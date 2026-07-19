import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"

const petals = [
  { label: "Home", to: "/builds/floralco/", dx: -120, dy: -10, color: "#F0C9D2" },
  { label: "Shop", to: "/builds/floralco/shop", dx: -85, dy: 85, color: "#8A9468" },
  { label: "About", to: "/builds/floralco/about", dx: 10, dy: 120, color: "#F0C9D2" },
  { label: "Contact", to: "/builds/floralco/contact", dx: 95, dy: 80, color: "#8A9468" },
]

export default function PetalMenu({ current }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  return (
    <div ref={ref} className="fixed right-6 top-6 z-50 sm:right-10 sm:top-8">
      <div
        className="pointer-events-none fixed inset-0 transition-opacity duration-500"
        style={{
          backgroundColor: "#4A5238",
          opacity: open ? 0.15 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        onClick={() => setOpen(false)}
      />

      <div className="relative h-16 w-16 sm:h-20 sm:w-20">
        {petals.map((p, idx) => {
          const isActive = current === p.label
          return (
            <Link
              key={p.label}
              to={p.to}
              onClick={() => setOpen(false)}
              className="floral-body absolute left-1/2 top-1/2 flex h-24 w-16 items-start justify-center pt-3 text-center text-xs uppercase tracking-[0.08em] shadow-md transition-transform duration-200 hover:scale-110"
              style={{
                backgroundColor: p.color,
                color: "#3F3626",
                fontWeight: isActive ? 700 : 500,
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                transformOrigin: "center top",
                transform: open
                  ? `translate(-50%, -50%) translate(${p.dx}px, ${p.dy}px) rotate(${idx % 2 === 0 ? -8 : 8}deg) scale(1)`
                  : "translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(0)",
                opacity: open ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 70}ms, opacity 0.35s ease ${idx * 70}ms`,
              }}
            >
              {p.label}
              {isActive && (
                <span
                  className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                  style={{ backgroundColor: "#3F3626" }}
                />
              )}
            </Link>
          )
        })}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-transform duration-300 sm:h-20 sm:w-20"
          style={{
            backgroundColor: "#6B7355",
            transform: `translate(-50%, -50%) rotate(${open ? 135 : 0}deg)`,
          }}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none">
            <circle cx="12" cy="12" r="3" fill="#F6E1E5" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <ellipse
                key={deg}
                cx="12"
                cy="6.5"
                rx="2.4"
                ry="4.2"
                fill="#F6E1E5"
                opacity="0.9"
                style={{ transformOrigin: "12px 12px", transform: `rotate(${deg}deg)` }}
              />
            ))}
          </svg>
        </button>
      </div>
    </div>
  )
}