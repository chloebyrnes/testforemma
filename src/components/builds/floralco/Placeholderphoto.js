import React from "react"

export default function PlaceholderPhoto({ label = "Photo", aspect = "aspect-square", className = "" }) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 border-2 border-dashed ${className}`}
      style={{ borderColor: "#8A9468", backgroundColor: "#F4F5EF" }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" style={{ color: "#6B7355" }}>
        <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 17 L9 12 L13 16 L16 13 L20 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="fl-body px-2 text-center text-xs uppercase tracking-[0.1em]" style={{ color: "#6B7355" }}>
        {label}
      </span>
    </div>
  )
}