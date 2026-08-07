import React from "react"
import { Link } from "gatsby"
import Layout, { COMPANY_NAME, Reveal, ImagePlaceholder } from "../components/Layout"
import willowLogo from "./builds/willowvine/willowandvine.png"

const projects = [
  { name: "Wildhorse Vintage", category: "Custom Website", href: "/builds/wildhorse/", preview: "wildhorse" },
  { name: "Willow & Vine Events", category: "Client Portal", href: "/builds/willowvine/", preview: "willowvine" },
  { name: "Northbay Supply Co.", category: "Internal Tool", href: "/builds/northbay/login", preview: "northbay" },
  { name: "Petal House", category: "Custom Website", href: "/builds/floralco/", preview: "floralco" },
  { name: "Umbra", category: "Custom Website", href: "/builds/umbra/", preview: "umbra" },
  { name: "Bloom & Bramble", category: "Custom Website", href: "/builds/bloomandbramble/", preview: "bloomandbramble" },
]

function BloomAndBramblePreview() {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden border" style={{ borderColor: "#3B473C", backgroundColor: "#FBF6EA" }}>
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-[10px] italic" style={{ color: "#3B473C", fontFamily: "Georgia, serif" }}>
          Bloom <span style={{ color: "#AD7271" }}>&amp; Bramble</span>
        </span>
        <div className="flex gap-1">
          {["#C6C09C", "#FCC88A", "#B7CBDB", "#E79897"].map((c, i) => (
            <span key={i} className="h-2.5 w-6 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
      <div className="px-3 pb-3">
        <p className="text-[7px] uppercase tracking-wide" style={{ color: "#AD7271" }}>Hudson Valley Wedding Florist</p>
        <p className="mt-1 text-[14px] italic leading-tight" style={{ color: "#3B473C", fontFamily: "Georgia, serif" }}>
          Where the garden meets the aisle
        </p>
        <div className="mt-2 grid grid-cols-4 gap-1">
          {["#D8CFAE", "#EBDEC0", "#F1E7CE", "#F5EDDA"].map((c, i) => (
            <div key={i} className="aspect-[3/4]" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function UmbraPreview() {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden border" style={{ borderColor: "#2E2015", backgroundColor: "#FBF7EE" }}>
      <div className="flex items-center justify-between px-3 py-2" style={{ backgroundColor: "#2E2015" }}>
        <span className="text-[9px] italic" style={{ color: "#FBF7EE", fontFamily: "Georgia, serif" }}>UMBRA</span>
        <div className="flex gap-1.5">
          {["Collection", "Atelier", "Journal"].map((t) => (
            <span key={t} className="text-[6px] uppercase tracking-wide" style={{ color: "#FBF7EE" }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="p-3">
        <span
          className="inline-block px-1.5 py-0.5 text-[6px] uppercase tracking-wide"
          style={{ border: "1px solid #B98A4E", color: "#B98A4E", backgroundColor: "#FBF7EE" }}
        >
          Collection 04
        </span>
        <div className="mt-1.5 text-[15px] italic leading-tight" style={{ color: "#2E2015", fontFamily: "Georgia, serif" }}>
          Where the garment ends
        </div>
        <div className="mt-2 grid grid-cols-3 gap-0.5">
          <div className="col-span-2 row-span-2 aspect-square" style={{ backgroundColor: "#F3EBD9" }} />
          <div className="aspect-square" style={{ backgroundColor: "#E4D8BF" }} />
          <div className="aspect-square" style={{ backgroundColor: "#E4D8BF" }} />
        </div>
      </div>
    </div>
  )
}

function WildhorsePreview() {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden border" style={{ borderColor: "#2A2119" }}>
      <div className="flex items-center justify-center border-2 border-dashed" style={{ borderColor: "#C99A44", backgroundColor: "#2A2119", height: "58%" }}>
        <div className="text-center">
          <div className="mx-auto h-1 w-12 rounded-sm" style={{ backgroundColor: "#C99A44" }} />
          <div className="mx-auto mt-2 h-5 w-28 rounded-sm" style={{ backgroundColor: "#EDE1CF", opacity: 0.85 }} />
          <div className="mx-auto mt-2 h-2 w-16 rounded-sm" style={{ backgroundColor: "#B5563C" }} />
        </div>
      </div>
      <div className="overflow-hidden py-1" style={{ backgroundColor: "#C99A44" }}>
        <span className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: "#2A2119" }}>
          &nbsp;New Arrivals Every Friday ★ New Arrivals Every Friday ★ New Arrivals&nbsp;
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1 p-2" style={{ backgroundColor: "#1C1712" }}>
        <div className="col-span-2 row-span-2 aspect-square border-2 border-dashed" style={{ borderColor: "#C99A44", backgroundColor: "#2A2119" }} />
        <div className="aspect-square border-2 border-dashed" style={{ borderColor: "#C99A44", backgroundColor: "#2A2119" }} />
        <div className="aspect-square border-2 border-dashed" style={{ borderColor: "#C99A44", backgroundColor: "#2A2119" }} />
      </div>
    </div>
  )
}

function WillowVinePreview() {
  const navItems = ["Home", "My Events", "My Profile", "Contact"]
  return (
    <div className="flex aspect-[4/3] w-full overflow-hidden border" style={{ borderColor: "#A2947A" }}>
      <div className="flex w-2/5 flex-none flex-col items-center gap-3 px-3 py-4" style={{ backgroundColor: "#83715B" }}>
        <img src={willowLogo} alt="Willow & Vine" className="h-8 w-auto" />
        <div className="mt-2 flex w-full flex-col gap-1.5">
          {navItems.map((label, i) => (
            <div
              key={label}
              className="truncate rounded-sm px-2 py-1 text-center text-[7px] uppercase tracking-wide"
              style={{ backgroundColor: i === 0 ? "#A9776F" : "transparent", color: "#FAF6F0" }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4" style={{ backgroundColor: "#FAF6F0" }}>
        <div className="h-1.5 w-14 rounded-sm" style={{ backgroundColor: "#C7908E" }} />
        <div className="mt-2 h-3 w-28 rounded-sm" style={{ backgroundColor: "#33302C", opacity: 0.18 }} />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-square rounded-sm border" style={{ borderColor: "#ABB2AB", backgroundColor: "#ECEEEA" }} />
          ))}
        </div>
        <div className="mt-4 h-2 w-full rounded-sm" style={{ backgroundColor: "#ECEEEA" }}>
          <div className="h-full w-1/2 rounded-sm" style={{ backgroundColor: "#C7908E" }} />
        </div>
      </div>
    </div>
  )
}

function PetalHousePreview() {
  const navItems = ["Home", "Shop", "Contact"]
  return (
    <div className="aspect-[4/3] w-full overflow-hidden border" style={{ borderColor: "#E7DCD0" }}>
      <div className="flex items-center justify-between border-b px-3 py-2" style={{ borderColor: "#E7DCD0", backgroundColor: "#FAF7F2" }}>
        <span className="text-[8px] font-semibold" style={{ color: "#2B3A2F" }}>Petal House</span>
        <div className="flex items-center gap-2">
          {navItems.map((t) => (
            <span key={t} className="text-[6px] uppercase tracking-wide" style={{ color: "#7A8577" }}>{t}</span>
          ))}
          <span className="text-[9px]">🛒</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3" style={{ backgroundColor: "#FAF7F2" }}>
        <div>
          <div className="h-1.5 w-10 rounded-sm" style={{ backgroundColor: "#E8A7B5" }} />
          <div className="mt-1.5 h-3 w-16 rounded-sm" style={{ backgroundColor: "#2B3A2F", opacity: 0.18 }} />
          <div className="mt-2 h-2 w-4 rounded-sm" style={{ backgroundColor: "#5B7A5E" }} />
        </div>
        <div className="grid grid-cols-2 gap-0.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/3] border border-dotted" style={{ borderColor: "#E8A7B5", backgroundColor: "#F3E9E0" }} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 px-3 pb-3" style={{ backgroundColor: "#FAF7F2" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative">
            <span
              className="absolute left-0.5 top-0.5 z-10 rounded-sm px-1 text-[5px]"
              style={{ backgroundColor: "#E8A7B5", color: "#FFFFFF" }}
            >
              •
            </span>
            <div className="aspect-square rounded-sm border-2 border-dashed" style={{ borderColor: "#E8A7B5", backgroundColor: "#F3E9E0" }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function NorthbayPreview() {
  const tabItems = ["Dashboard", "Inventory", "Orders", "Reports"]
  const bars = [40, 65, 50, 80, 60, 90, 70]
  return (
    <div className="aspect-[4/3] w-full overflow-hidden border" style={{ borderColor: "#E2E8F0" }}>
      <div className="flex items-center gap-2 border-b px-3 py-2" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
        <div
          className="flex h-5 w-5 flex-none items-center justify-center rounded text-[7px] font-semibold"
          style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
        >
          NB
        </div>
        <span className="truncate text-[7px] font-semibold" style={{ color: "#0F172A" }}>Northbay Supply Co.</span>
      </div>
      <div className="flex gap-2 border-b px-3 pt-1.5" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
        {tabItems.map((t, i) => (
          <span
            key={t}
            className="pb-1.5 text-[6px] font-medium"
            style={{
              color: i === 0 ? "#2563EB" : "#94A3B8",
              borderBottom: i === 0 ? "1.5px solid #2563EB" : "1.5px solid transparent",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="p-3" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="grid grid-cols-4 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-sm border p-1.5" style={{ borderColor: "#E2E8F0", backgroundColor: "#FFFFFF" }}>
              <div className="h-2 w-4 rounded-sm" style={{ backgroundColor: "#0F172A", opacity: 0.15 }} />
            </div>
          ))}
        </div>
        <div className="mt-2 flex h-10 items-end gap-1">
          {bars.map((v, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${v}%`, backgroundColor: "#2563EB" }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <Layout currentPath="/portfolio">
      <section className="relative mx-auto max-w-6xl px-6 pb-6 pt-12 sm:px-10 sm:pt-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Portfolio</p>
          <h1 className="font-display mt-4 text-4xl text-[var(--ash-ink)] sm:text-5xl [text-wrap:balance]">Selected Work</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[var(--ash-surface)]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ash-ink)]/80 sm:text-lg">
            A look at the kind of work we do, from custom websites to full web applications.
            These are example builds showing different styles and features, not real client
            projects.
          </p>
        </Reveal>
      </section>

      <section className="relative border-t-4 border-[var(--ash-surface)] px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => {
              const preview =
                project.preview === "willowvine" ? (
                  <WillowVinePreview />
                ) : project.preview === "northbay" ? (
                  <NorthbayPreview />
                ) : project.preview === "floralco" ? (
                  <PetalHousePreview />
                ) : project.preview === "wildhorse" ? (
                  <WildhorsePreview />
                ) : project.preview === "umbra" ? (
                  <UmbraPreview />
                ) : project.preview === "bloomandbramble" ? (
                  <BloomAndBramblePreview />
                ) : (
                  <ImagePlaceholder label={`${project.name} example`} aspect="aspect-[4/3]" />
                )
              const content = (
                <>
                  <div>
                    {preview}
                  </div>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]/60">
                    {project.category}
                  </p>
                  <h2 className="font-display mt-1 text-xl text-[var(--ash-ink)]">{project.name}</h2>
                  {project.href && (
                    <span className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)] underline decoration-dotted underline-offset-4">
                      View site
                      <span className="font-menu">→</span>
                    </span>
                  )}
                </>
              )
              return (
                <Reveal key={project.name} delay={i * 90}>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
                      {content}
                    </a>
                  ) : (
                    <div className="group">{content}</div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative border-t border-[var(--ash-accent-2)] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Like what you see?</p>
          <h2 className="font-display mt-5 text-3xl leading-tight text-[var(--ash-ink)] sm:text-4xl">
            Let's build something for you next.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              Start Your Project
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  )
}

export function Head() {
  return <title>Portfolio | {COMPANY_NAME}</title>
}