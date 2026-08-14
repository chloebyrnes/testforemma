import React from "react"

export default function UmbraPlaceholder({ label, className = "", src }) {
  if (src) {
    return <img src={src} alt={label} className={className} />
  }

  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-2 border ${className}`}
      style={{ borderColor: "#B98A4E", backgroundColor: "#F3EBD9", aspectRatio: "3/4", minHeight: "100%" }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#8A7A63" strokeWidth="1.4" />
        <circle cx="8.5" cy="9.5" r="1.6" stroke="#8A7A63" strokeWidth="1.4" />
        <path d="M4 17 L9 12 L13 16 L16 13 L20 17" stroke="#8A7A63" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        className="px-2 text-center"
        style={{ color: "#8A7A63", fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "0.06em", textTransform: "uppercase" }}
      >
        {label}
      </span>
    </div>
  )
}