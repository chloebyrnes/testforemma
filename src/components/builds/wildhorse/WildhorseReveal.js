import React, { useState, useEffect, useRef } from "react"

export default function WildhorseReveal({ children, delay = 0, className = "", as = "div" }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${visible ? delay : 0}ms, transform 0.7s ease ${visible ? delay : 0}ms`,
      }}
    >
      {children}
    </Tag>
  )
}