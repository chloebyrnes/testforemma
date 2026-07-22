import React from "react"

export default function WillowPlaceholder({ label = "Photo", aspect = "aspect-square", className = "", light = false }) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 border ${className}`}
      style={{
        borderColor: light ? "rgba(255,255,255,0.4)" : "#A67C4E",
        backgroundColor: light ? "rgba(255,255,255,0.08)" : "#EFE9DD",
      }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" style={{ color: light ? "#FFFFFF" : "#A67C4E" }}>
        <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 17 L9 12 L13 16 L16 13 L20 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="wv-body px-2 text-center text-xs uppercase tracking-[0.15em]" style={{ color: light ? "#FFFFFF" : "#2B2B28" }}>
        {label}
      </span>
    </div>
  )
}