import React from "react"
import { wh } from "./WildhorseNav"

export default function WildhorsePlaceholder({ label, aspect = "aspect-[4/3]", className = "", src, bordered = true }) {
  const borderClass = bordered ? "border-2 border-dashed" : ""

  if (src) {
    return (
      <div
        className={`${aspect} w-full overflow-hidden ${borderClass} ${className}`}
        style={bordered ? { borderColor: wh.gold } : undefined}
      >
        <img src={src} alt={label} className="h-full w-full object-cover" />
      </div>
    )
  }

  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 ${borderClass} ${className}`}
      style={{ borderColor: bordered ? wh.gold : "transparent", backgroundColor: wh.surface }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke={wh.sage} strokeWidth="1.4" />
        <circle cx="8.5" cy="9.5" r="1.6" stroke={wh.sage} strokeWidth="1.4" />
        <path d="M4 17 L9 12 L13 16 L16 13 L20 17" stroke={wh.sage} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        className="px-2 text-center text-[10px] uppercase tracking-[0.15em]"
        style={{ color: wh.inkMuted, fontFamily: "'Karla', sans-serif" }}
      >
        {label}
      </span>
    </div>
  )
}