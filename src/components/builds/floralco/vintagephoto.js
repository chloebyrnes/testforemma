import React from "react"

export default function vintagephoto({ src, alt = "", label = "Photo", rotate = 0, className = "" }) {
  return (
    <div
      className={`inline-block bg-[#F7F3EA] p-3 pb-8 shadow-lg ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, boxShadow: "0 10px 24px rgba(58,62,44,0.25)" }}
    >
      <div className="border" style={{ borderColor: "#3A3E2C" }}>
        {src ? (
          <img src={src} alt={alt} className="block h-full w-full object-cover" style={{ filter: "sepia(0.15) saturate(0.85)" }} />
        ) : (
          <div className="flex aspect-square w-full flex-col items-center justify-center gap-2" style={{ backgroundColor: "#EAE7D6" }}>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" style={{ color: "#6B7355" }}>
              <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
              <path d="M4 17 L9 12 L13 16 L16 13 L20 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="fl-body px-2 text-center text-xs uppercase tracking-[0.1em]" style={{ color: "#6B7355" }}>
              {label}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}