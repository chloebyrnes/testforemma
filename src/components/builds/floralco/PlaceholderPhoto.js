import React from "react"

export default function PlaceholderPhoto({ label, aspect = "aspect-[4/3]", className = "", light = false, src }) {
  if (src) {
    return (
      <div
        className={`${aspect} w-full overflow-hidden border-[3px] border-dotted ${className}`}
        style={{ borderColor: "#E8A7B5" }}
      >
        <img src={src} alt={label} className="h-full w-full object-cover" />
      </div>
    )
  }

  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 border-[3px] border-dotted ${className}`}
      style={{ borderColor: "#E8A7B5", backgroundColor: light ? "#FFFFFF" : "#F3E9E0" }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#5B7A5E" strokeWidth="1.4" />
        <circle cx="8.5" cy="9.5" r="1.6" stroke="#5B7A5E" strokeWidth="1.4" />
        <path d="M4 17 L9 12 L13 16 L16 13 L20 17" stroke="#5B7A5E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        className="px-2 text-center text-[10px] uppercase tracking-[0.15em]"
        style={{ color: "#5B7A5E", fontFamily: "'Karla', sans-serif" }}
      >
        {label}
      </span>
    </div>
  )
}