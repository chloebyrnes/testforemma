import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import willowVineLogo from "./willowandvine.png"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap');
  .wv-heading { font-family: 'Work Sans', sans-serif; font-weight: 600; }
  .wv-body { font-family: 'Work Sans', sans-serif; font-weight: 400; }
  a, button {
    cursor: pointer;
    transition: opacity 0.15s ease;
  }
  a:hover, button:hover {
    opacity: 0.85;
  }
`

const wv = {
  bg: "#FAF6F0",
  surface: "#ECEEEA",
  ink: "#33302C",
  inkMuted: "#6B6660",
  dark: "#83715B",
  darkActive: "#A9776F",
  accent: "#ABB2AB",
  rose: "#C7908E",
  peach: "#D3A583",
  cream: "#FAF6F0",
  totalFeeBg: "#E4E7E3",
  retainerBg: "#F0DBD8",
  balanceDueBg: "#F6E3D0",
  balanceDueText: "#6B3E2E",
}

const mockEvent = {
  date: "Oct 12",
  year: "2026",
  type: "Wedding Celebration",
  package: "Partial Planning Package",
  status: "Booked",
  eventId: "4821",
  venue: "Cypress Manor",
  venueCity: "Savannah, GA",
  packagePrice: 4200,
  retainer: 2100,
  paid: 2100,
}

const initialChecklist = [
  {
    title: "12+ Months Out",
    tasks: [
      { task: "Establish a budget", done: true },
      { task: "Set 2-3 preferred dates for wedding", done: true },
      { task: "Create your guest list", done: true },
      { task: "Begin vendor research", done: true },
      { task: "Book your venue & catering", done: true },
      { task: "Create a weather backup plan", done: true },
    ],
  },
  {
    title: "11+ Months Out",
    tasks: [
      { task: "Determine wedding style & colors", done: true },
      { task: "Propose to your wedding party", done: true },
      { task: "Hire vendors", done: true },
      { task: "Shop for wedding dresses, suits & accessories", done: true },
    ],
  },
  {
    title: "9+ Months Out",
    tasks: [
      { task: "Schedule your engagement shoot", done: true },
      { task: "Send save-the-date cards", done: true },
      { task: "Create a gift registry", done: true },
      { task: "Plan pre-wedding parties", done: true },
      { task: "Shop for pre-wedding event outfits", done: true },
      { task: "Renew or get passports if necessary", done: true },
    ],
  },
  {
    title: "8+ Months Out",
    tasks: [
      { task: "Book your hair & makeup trial", done: true },
      { task: "Reserve hotel room blocks", done: true },
      { task: "Book transportation", done: true },
      { task: "Finalize vendor hires", done: true },
      { task: "Make childcare arrangements or book entertainment for guests' kids", done: false },
    ],
  },
  {
    title: "6+ Months Out",
    tasks: [
      { task: "Purchase wedding rings", done: true },
      { task: "Purchase gifts & misc items", done: false },
      { task: "Sign up for dance lessons", done: false },
      { task: "Schedule rehearsals & tastings", done: false },
    ],
  },
  {
    title: "4+ Months Out",
    tasks: [
      { task: "Send out wedding invitations", done: true },
      { task: "Write your vows", done: false },
      { task: "Discuss ceremony details with officiant", done: true },
      { task: "Get a marriage license", done: false },
      { task: "Dress fitting", done: false },
      { task: "Work on wedding toast and speeches", done: false },
      { task: "Write your partner a day-of note & pack gift", done: false },
      { task: "Review wedding music list", done: false },
    ],
  },
  {
    title: "4+ Weeks Out",
    tasks: [
      { task: "Finalize RSVP list", done: false },
      { task: "Finalize menu selections", done: false },
      { task: "Finalize details & payments with vendors", done: false },
      { task: "Finalize wedding day timeline", done: false },
      { task: "Print day-of stationery", done: false },
      { task: "Pick up marriage license", done: false },
      { task: "Final dress/suit fitting", done: false },
    ],
  },
  {
    title: "1-2 Weeks Out",
    tasks: [
      { task: "Pack day-of essentials & emergency kit", done: false },
      { task: "Pack necessary documents", done: false },
      { task: "Have attire steamed or pressed", done: false },
    ],
  },
]

const files = [
  { name: "Signed Contract.pdf", date: "Mar 2" },
  { name: "Venue Floor Plan.pdf", date: "Apr 14" },
  { name: "Vendor Contact List.pdf", date: "May 20" },
  { name: "Day-Of Timeline.pdf", date: "Jun 8" },
]

const documents = [
  { name: "Service Agreement.pdf" },
  { name: "Payment Receipt - Retainer.pdf" },
  { name: "Photography Add-on Agreement.pdf" },
]

const sidebarItems = ["Home", "My Events", "My Profile", "Contact"]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M7 3h7l5 5v13H7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}
function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15 20c.2-2 1.6-3.6 3.6-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PillIcon({ children }) {
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-full"
      style={{ backgroundColor: wv.surface, color: wv.ink }}
    >
      {children}
    </div>
  )
}

function Countdown() {
  const [remaining, setRemaining] = useState(null)

  useEffect(() => {
    const target = Date.now() + 103 * 24 * 60 * 60 * 1000
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setRemaining({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!remaining) return null

  const units = [
    { label: "Days", value: remaining.days },
    { label: "Hours", value: remaining.hours },
    { label: "Minutes", value: remaining.minutes },
    { label: "Seconds", value: remaining.seconds },
  ]

  return (
    <div className="mt-6 grid max-w-md grid-cols-4 gap-3">
      {units.map((u) => (
        <div key={u.label} className="border p-3 text-center" style={{ borderColor: wv.accent, backgroundColor: wv.surface }}>
          <p className="wv-heading text-2xl" style={{ color: wv.ink }}>{String(u.value).padStart(2, "0")}</p>
          <p className="wv-body mt-1 text-[10px] uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>{u.label}</p>
        </div>
      ))}
    </div>
  )
}

function PlanningTools({ checklist, toggleTask, completed, totalTasks, progress }) {
  const [planTab, setPlanTab] = useState(null)

  return (
    <div>
      <div className="mt-2">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>
          <span>Planning Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden" style={{ backgroundColor: wv.surface }}>
          <div className="h-full" style={{ width: `${progress}%`, backgroundColor: wv.rose }} />
        </div>
      </div>

      <p className="wv-body mt-8 text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Planning Tools</p>
      <div className="mt-4 flex flex-wrap gap-6">
        <button type="button" onClick={() => setPlanTab(planTab === "Checklist" ? null : "Checklist")} className="flex flex-col items-center gap-2">
          <PillIcon><CheckIcon /></PillIcon>
          <span className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: wv.ink }}>Checklist</span>
        </button>
        <button type="button" onClick={() => setPlanTab(planTab === "Files" ? null : "Files")} className="flex flex-col items-center gap-2">
          <PillIcon><FileIcon /></PillIcon>
          <span className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: wv.ink }}>Files</span>
        </button>
        <button type="button" onClick={() => setPlanTab(planTab === "Guests" ? null : "Guests")} className="flex flex-col items-center gap-2">
          <PillIcon><PeopleIcon /></PillIcon>
          <span className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: wv.ink }}>Guest List</span>
        </button>
      </div>

      {planTab && (
        <div className="mt-8 border-t pt-8" style={{ borderColor: wv.surface }}>
          {planTab === "Checklist" && (
            <div>
              <p className="wv-body text-sm" style={{ color: wv.inkMuted }}>
                {completed} of {totalTasks} tasks complete
              </p>
              <div className="mt-4 space-y-8">
                {checklist.map((group, gi) => (
                  <div key={group.title}>
                    <p className="wv-body text-xs uppercase tracking-[0.15em]" style={{ color: wv.rose }}>{group.title}</p>
                    <div className="mt-2 divide-y" style={{ borderColor: wv.surface }}>
                      {group.tasks.map((item, ti) => (
                        <button
                          key={item.task}
                          type="button"
                          onClick={() => toggleTask(gi, ti)}
                          className="flex w-full items-center gap-3 border-t py-3 text-left"
                          style={{ borderColor: wv.surface }}
                        >
                          <span
                            className="flex h-5 w-5 flex-none items-center justify-center border text-xs"
                            style={{
                              borderColor: wv.ink,
                              backgroundColor: item.done ? wv.ink : "transparent",
                              color: wv.cream,
                            }}
                          >
                            {item.done ? "✓" : ""}
                          </span>
                          <span
                            className="text-sm"
                            style={{
                              color: item.done ? wv.inkMuted : wv.ink,
                              textDecoration: item.done ? "line-through" : "none",
                            }}
                          >
                            {item.task}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {planTab === "Files" && (
            <div className="divide-y" style={{ borderColor: wv.surface }}>
              {files.map((file) => (
                <div key={file.name} className="flex items-center justify-between border-t py-4" style={{ borderColor: wv.surface }}>
                  <div>
                    <p className="text-sm" style={{ color: wv.ink }}>{file.name}</p>
                    <p className="wv-body text-xs" style={{ color: wv.inkMuted }}>{file.date}</p>
                  </div>
                  <span
                    className="wv-body px-3 py-1.5 text-xs uppercase tracking-[0.1em]"
                    style={{ backgroundColor: wv.surface, color: wv.ink }}
                  >
                    Download
                  </span>
                </div>
              ))}
            </div>
          )}

          {planTab === "Guests" && (
            <div>
              <p className="wv-body text-sm" style={{ color: wv.inkMuted }}>118 of 130 invited guests confirmed</p>
              <div className="mt-4 divide-y" style={{ borderColor: wv.surface }}>
                {["Alice & Tom Reeves", "The Whitfield Family", "Priya Anand", "Marcus & Dana Lowe"].map((g) => (
                  <div key={g} className="flex items-center justify-between border-t py-3 text-sm" style={{ borderColor: wv.surface, color: wv.ink }}>
                    <span>{g}</span>
                    <span className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: wv.rose }}>Confirmed</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function EventDetailsPanel() {
  const [requestSent, setRequestSent] = useState(false)
  const balanceDue = mockEvent.packagePrice - mockEvent.paid

  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <p className="wv-body text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Event Date / Times</p>
          <p className="mt-3 text-sm" style={{ color: wv.ink }}>Event Date: {mockEvent.date} {mockEvent.year}</p>
          <p className="mt-1 text-sm" style={{ color: wv.ink }}>Start Time: 5:00 PM</p>
          <p className="mt-1 text-sm" style={{ color: wv.ink }}>End Time: 11:00 PM</p>
        </div>
        <div>
          <p className="wv-body text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Event Description</p>
          <p className="mt-3 text-sm" style={{ color: wv.ink }}>Event Type: {mockEvent.type}</p>
          <p className="mt-1 text-sm" style={{ color: wv.ink }}>Booking Status: {mockEvent.status}</p>
          <p className="mt-1 text-sm" style={{ color: wv.ink }}>Event ID: {mockEvent.eventId}</p>
        </div>
        <div>
          <p className="wv-body text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Service Details</p>
          <div className="mt-3 border px-4 py-3" style={{ borderColor: wv.accent }}>
            <p className="text-sm" style={{ color: wv.ink }}>{mockEvent.package}</p>
          </div>
        </div>
        <div>
          <p className="wv-body text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Venue Information</p>
          <p className="mt-3 text-sm" style={{ color: wv.ink }}>{mockEvent.venue}</p>
          <p className="mt-1 text-sm" style={{ color: wv.ink }}>{mockEvent.venueCity}</p>
        </div>
      </div>

      <p className="wv-body mt-10 text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Payments &amp; Finances</p>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="wv-body border-b pb-2 text-xs uppercase tracking-[0.1em]" style={{ borderColor: wv.accent, color: wv.inkMuted }}>
            Fee Details
          </p>
          <div className="mt-3 flex justify-between text-sm" style={{ color: wv.ink }}>
            <span>{mockEvent.package}</span>
            <span>${mockEvent.packagePrice.toLocaleString()}.00</span>
          </div>
          <p className="mt-2 text-xs italic" style={{ color: wv.inkMuted }}>No add-ons</p>
        </div>
        <div>
          <p className="wv-body border-b pb-2 text-xs uppercase tracking-[0.1em]" style={{ borderColor: wv.accent, color: wv.inkMuted }}>
            Payment History
          </p>
          <div className="mt-3 flex justify-between text-sm" style={{ color: wv.ink }}>
            <span>Retainer - Card ending 4021</span>
            <span>${mockEvent.retainer.toLocaleString()}.00</span>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-sm">
        <div className="flex justify-between py-2 text-sm" style={{ color: wv.ink }}>
          <span>Package &amp; Add-ons</span>
          <span>${mockEvent.packagePrice.toLocaleString()}.00</span>
        </div>
        <div className="flex justify-between px-3 py-2 text-sm" style={{ backgroundColor: wv.totalFeeBg, color: wv.ink }}>
          <span>Total Fee</span>
          <span>${mockEvent.packagePrice.toLocaleString()}.00</span>
        </div>
        <div className="flex justify-between px-3 py-2 text-sm" style={{ backgroundColor: wv.retainerBg, color: wv.ink }}>
          <span>Retainer Payment</span>
          <span>${mockEvent.retainer.toLocaleString()}.00</span>
        </div>
        <div className="flex justify-between py-2 text-sm" style={{ color: wv.ink }}>
          <span>Payments</span>
          <span>-${mockEvent.paid.toLocaleString()}.00</span>
        </div>
        <div className="flex justify-between px-3 py-2 text-sm font-semibold" style={{ backgroundColor: wv.balanceDueBg, color: wv.balanceDueText }}>
          <span>Balance Due</span>
          <span>${balanceDue.toLocaleString()}.00</span>
        </div>
      </div>

      <p className="wv-body mt-10 text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Documents</p>
      <div className="mt-3 divide-y" style={{ borderColor: wv.surface }}>
        {documents.map((d) => (
          <div key={d.name} className="flex items-center justify-between border-t py-3" style={{ borderColor: wv.surface }}>
            <span className="text-sm" style={{ color: wv.ink }}>{d.name}</span>
            <span
              className="wv-body px-3 py-1.5 text-xs uppercase tracking-[0.1em]"
              style={{ backgroundColor: wv.surface, color: wv.ink }}
            >
              View
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-8" style={{ borderColor: wv.surface }}>
        <p className="wv-body text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Request Changes</p>
        <p className="wv-body mt-2 max-w-lg text-sm" style={{ color: wv.inkMuted }}>
          Please make sure the details above are correct. If something needs to change, let us
          know and we'll follow up.
        </p>
        {requestSent ? (
          <p className="wv-body mt-4 text-xs" style={{ color: wv.rose }}>Request sent, we'll be in touch.</p>
        ) : (
          <button
            type="button"
            onClick={() => setRequestSent(true)}
            className="wv-body mt-4 px-6 py-3 text-xs uppercase tracking-[0.15em]"
            style={{ backgroundColor: wv.rose, color: "#FFFFFF" }}
          >
            Request Changes
          </button>
        )}
      </div>
    </div>
  )
}

function MakePaymentPanel() {
  const [paid, setPaid] = useState(false)
  const balanceDue = mockEvent.packagePrice - mockEvent.paid

  return (
    <div className="max-w-sm">
      <p className="wv-body text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Balance Due</p>
      <p className="wv-heading mt-1 text-3xl" style={{ color: wv.ink }}>${balanceDue.toLocaleString()}.00</p>

      {paid ? (
        <p className="wv-body mt-6 text-sm" style={{ color: wv.rose }}>
          Payment received, thank you. A receipt has been emailed to you.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          <div>
            <label className="wv-body mb-1 block text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Card Number</label>
            <input
              type="text"
              readOnly
              defaultValue="4242 4242 4242 4242"
              className="wv-body w-full border px-3 py-2 text-sm outline-none"
              style={{ borderColor: wv.accent, backgroundColor: "#FFFFFF", color: wv.ink }}
            />
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="wv-body mb-1 block text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Expiry</label>
              <input
                type="text"
                readOnly
                defaultValue="04 / 29"
                className="wv-body w-full border px-3 py-2 text-sm outline-none"
                style={{ borderColor: wv.accent, backgroundColor: "#FFFFFF", color: wv.ink }}
              />
            </div>
            <div className="flex-1">
              <label className="wv-body mb-1 block text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>CVC</label>
              <input
                type="text"
                readOnly
                defaultValue="123"
                className="wv-body w-full border px-3 py-2 text-sm outline-none"
                style={{ borderColor: wv.accent, backgroundColor: "#FFFFFF", color: wv.ink }}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setPaid(true)}
            className="wv-body w-full px-6 py-3 text-xs uppercase tracking-[0.15em]"
            style={{ backgroundColor: wv.ink, color: "#FFFFFF" }}
          >
            Pay ${balanceDue.toLocaleString()}.00
          </button>
          <p className="wv-body text-center text-[10px] italic" style={{ color: wv.inkMuted }}>
            Demo only, no real payment is processed.
          </p>
        </div>
      )}
    </div>
  )
}

export default function WillowPortalPage() {
  const [screen, setScreen] = useState("home")
  const [expandedPanel, setExpandedPanel] = useState(null)
  const [checklist, setChecklist] = useState(initialChecklist)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const allTasks = checklist.flatMap((group) => group.tasks)
  const completed = allTasks.filter((c) => c.done).length
  const totalTasks = allTasks.length
  const remaining = totalTasks - completed
  const progress = Math.round((completed / totalTasks) * 100)

  const toggleTask = (groupIdx, taskIdx) => {
    setChecklist((groups) =>
      groups.map((group, gi) =>
        gi !== groupIdx
          ? group
          : {
              ...group,
              tasks: group.tasks.map((item, ti) => (ti === taskIdx ? { ...item, done: !item.done } : item)),
            }
      )
    )
  }

  const togglePanel = (name) => {
    setExpandedPanel((current) => (current === name ? null : name))
  }

  const activeSidebar =
    screen === "myEvents" ? "My Events" : screen === "profile" ? "My Profile" : screen === "contact" ? "Contact" : "Home"

  return (
    <main className="wv-body flex min-h-screen flex-col md:flex-row" style={{ backgroundColor: wv.bg }}>
      <style>{fontImports}</style>

      <div className="flex items-center justify-between px-6 py-4 md:hidden" style={{ backgroundColor: wv.dark }}>
        <Link to="/builds/willowvine/portal" onClick={() => { setScreen("home"); setMobileMenuOpen(false) }} className="flex items-center gap-2">
          <img src={willowVineLogo} alt="Willow & Vine" className="h-9 w-auto" />
          <span className="wv-heading text-sm" style={{ color: wv.cream }}>Willow &amp; Vine</span>
        </Link>
        <button
          type="button"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Menu"
          className="flex h-8 w-8 flex-col items-center justify-center gap-1"
        >
          <span className="block h-[2px] w-5" style={{ backgroundColor: wv.cream }} />
          <span className="block h-[2px] w-5" style={{ backgroundColor: wv.cream }} />
          <span className="block h-[2px] w-5" style={{ backgroundColor: wv.cream }} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="flex flex-col gap-1 px-6 py-4 md:hidden" style={{ backgroundColor: wv.darkActive }}>
          {sidebarItems.map((item) => {
            const key = item === "My Events" ? "myEvents" : item === "My Profile" ? "profile" : item.toLowerCase()
            const isActive = activeSidebar === item
            return (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setScreen(key)
                  setMobileMenuOpen(false)
                }}
                className="wv-body px-3 py-2.5 text-left text-xs uppercase tracking-[0.1em]"
                style={{
                  color: wv.cream,
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: isActive ? "underline" : "none",
                }}
              >
                {item}
              </button>
            )
          })}
          <Link
            to="/builds/willowvine/"
            onClick={() => setMobileMenuOpen(false)}
            className="wv-body px-3 py-2.5 text-xs uppercase tracking-[0.1em] underline"
            style={{ color: wv.peach }}
          >
            Logout
          </Link>
        </div>
      )}

      <aside className="hidden w-56 flex-none flex-col justify-between px-6 py-8 md:flex" style={{ backgroundColor: wv.dark }}>
        <div>
          <Link to="/builds/willowvine/portal" onClick={() => setScreen("home")} className="block text-center">
            <img src={willowVineLogo} alt="Willow & Vine" className="mx-auto h-24 w-auto" />
            <p className="wv-heading mt-2 text-xl" style={{ color: wv.cream }}>
              Willow &amp; Vine
            </p>
          </Link>
          <p className="wv-body mt-1 text-center text-xs uppercase tracking-[0.2em]" style={{ color: wv.peach }}>
            Client Portal
          </p>

          <nav className="mt-10 flex flex-col gap-1">
            {sidebarItems.map((item) => {
              const key = item === "My Events" ? "myEvents" : item === "My Profile" ? "profile" : item.toLowerCase()
              const isActive = activeSidebar === item
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setScreen(key)}
                  className="wv-body border-l-2 px-4 py-2.5 text-left text-xs uppercase tracking-[0.1em]"
                  style={{
                    borderColor: isActive ? wv.peach : "transparent",
                    backgroundColor: isActive ? wv.darkActive : "transparent",
                    color: wv.cream,
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {item}
                </button>
              )
            })}
          </nav>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3 border-t pt-4" style={{ borderColor: wv.darkActive }}>
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full wv-body text-xs"
              style={{ backgroundColor: wv.rose, color: "#FFFFFF" }}
            >
              SJ
            </div>
            <span className="wv-body text-xs" style={{ color: wv.cream }}>Sarah &amp; James</span>
          </div>
          <Link
            to="/builds/willowvine/"
            className="wv-body block px-4 py-2.5 text-xs uppercase tracking-[0.1em] underline"
            style={{ color: wv.peach }}
          >
            Logout
          </Link>
        </div>
      </aside>

      <div className="flex-1 px-6 py-10 sm:px-12">
        {screen === "home" && (
          <div>
            <p className="wv-body text-xs uppercase tracking-[0.3em]" style={{ color: wv.rose }}>Home</p>
            <h1 className="wv-heading mt-2 text-4xl" style={{ color: wv.ink }}>
              Welcome back, Sarah &amp; James
            </h1>
            <p className="wv-body mt-3 text-sm" style={{ color: wv.inkMuted }}>
              Here's where things stand with your event.
            </p>

            <Countdown />

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="border p-5" style={{ borderColor: wv.accent, backgroundColor: wv.surface }}>
                <p className="wv-heading text-3xl" style={{ color: wv.ink }}>118 / 130</p>
                <p className="wv-body mt-1 text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Guests Confirmed</p>
              </div>
              <div className="border p-5" style={{ borderColor: wv.accent, backgroundColor: wv.surface }}>
                <p className="wv-heading text-3xl" style={{ color: wv.ink }}>{progress}%</p>
                <p className="wv-body mt-1 text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Planning Complete</p>
              </div>
              <div className="border p-5" style={{ borderColor: wv.accent, backgroundColor: wv.surface }}>
                <p className="wv-heading text-3xl" style={{ color: wv.ink }}>{remaining}</p>
                <p className="wv-body mt-1 text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Items Left to Complete</p>
              </div>
            </div>

            <div className="mt-10 border-t pt-8" style={{ borderColor: wv.surface }}>
              <p className="wv-body text-xs uppercase tracking-[0.3em]" style={{ color: wv.rose }}>Plan My Event</p>
              <h2 className="wv-heading mt-2 text-2xl" style={{ color: wv.ink }}>
                {mockEvent.date} {mockEvent.year}
              </h2>
              <div className="mt-6">
                <PlanningTools checklist={checklist} toggleTask={toggleTask} completed={completed} totalTasks={totalTasks} progress={progress} />
              </div>
            </div>
          </div>
        )}

        {screen === "myEvents" && (
          <div>
            <p className="wv-body text-xs uppercase tracking-[0.3em]" style={{ color: wv.rose }}>My Events</p>
            <h1 className="wv-heading mt-2 text-3xl" style={{ color: wv.ink }}>Events</h1>

            <p className="wv-body mt-8 text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Upcoming Events</p>
            <div className="mt-3 flex flex-wrap items-center gap-6 border p-6" style={{ borderColor: wv.accent, backgroundColor: "#FFFFFF" }}>
              <div className="text-center" style={{ minWidth: "72px" }}>
                <div className="px-3 py-2" style={{ backgroundColor: wv.peach }}>
                  <p className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: wv.ink }}>{mockEvent.date.split(" ")[0]}</p>
                </div>
                <div className="border border-t-0 px-3 py-2" style={{ borderColor: wv.accent }}>
                  <p className="wv-heading text-2xl" style={{ color: wv.ink }}>{mockEvent.date.split(" ")[1]}</p>
                  <p className="wv-body text-[10px]" style={{ color: wv.inkMuted }}>{mockEvent.year}</p>
                </div>
              </div>

              <div className="flex-1" style={{ minWidth: "220px" }}>
                <p className="text-sm" style={{ color: wv.ink }}>Event Type: {mockEvent.type}</p>
                <p className="mt-1 text-sm" style={{ color: wv.ink }}>Package: {mockEvent.package}</p>
                <p className="mt-1 text-sm" style={{ color: wv.ink }}>Booking Status: {mockEvent.status}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => togglePanel("plan")}
                  className="wv-body px-5 py-3 text-xs uppercase tracking-[0.1em]"
                  style={{ backgroundColor: expandedPanel === "plan" ? wv.ink : wv.rose, color: "#FFFFFF" }}
                >
                  Plan My Event
                </button>
                <button
                  type="button"
                  onClick={() => togglePanel("details")}
                  className="wv-body border px-5 py-3 text-xs uppercase tracking-[0.1em]"
                  style={{
                    borderColor: wv.accent,
                    backgroundColor: expandedPanel === "details" ? wv.surface : "transparent",
                    color: wv.ink,
                  }}
                >
                  Event Details
                </button>
                <button
                  type="button"
                  onClick={() => togglePanel("payment")}
                  className="wv-body px-5 py-3 text-xs uppercase tracking-[0.1em]"
                  style={{ backgroundColor: expandedPanel === "payment" ? wv.ink : wv.peach, color: expandedPanel === "payment" ? "#FFFFFF" : wv.ink }}
                >
                  Make a Payment
                </button>
              </div>
            </div>

            {expandedPanel && (
              <div className="mt-6 border p-6" style={{ borderColor: wv.accent, backgroundColor: "#FFFFFF" }}>
                {expandedPanel === "plan" && (
                  <PlanningTools checklist={checklist} toggleTask={toggleTask} completed={completed} totalTasks={totalTasks} progress={progress} />
                )}
                {expandedPanel === "details" && <EventDetailsPanel />}
                {expandedPanel === "payment" && <MakePaymentPanel />}
              </div>
            )}

            <p className="wv-body mt-10 text-xs uppercase tracking-[0.15em]" style={{ color: wv.inkMuted }}>Past Events</p>
            <p className="wv-body mt-3 text-sm italic" style={{ color: wv.inkMuted }}>none found</p>
          </div>
        )}

        {screen === "profile" && (
          <div>
            <p className="wv-body text-xs uppercase tracking-[0.3em]" style={{ color: wv.rose }}>My Profile</p>
            <h1 className="wv-heading mt-2 text-3xl" style={{ color: wv.ink }}>Sarah &amp; James</h1>

            <div className="mt-8 max-w-md space-y-4">
              <div>
                <p className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Email</p>
                <p className="mt-1 text-sm" style={{ color: wv.ink }}>sarahandjames@example.com</p>
              </div>
              <div>
                <p className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Phone</p>
                <p className="mt-1 text-sm" style={{ color: wv.ink }}>(912) 555-0148</p>
              </div>
              <div>
                <p className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Mailing Address</p>
                <p className="mt-1 text-sm" style={{ color: wv.ink }}>214 Magnolia Lane, Savannah, GA 31401</p>
              </div>
            </div>
          </div>
        )}

        {screen === "contact" && (
          <div>
            <p className="wv-body text-xs uppercase tracking-[0.3em]" style={{ color: wv.rose }}>Contact</p>
            <h1 className="wv-heading mt-2 text-3xl" style={{ color: wv.ink }}>Get in Touch</h1>

            <ContactForm />
          </div>
        )}

        <div className="mt-16 border-t pt-6" style={{ borderColor: wv.surface }}>
          <Link
            to="/portfolio"
            className="wv-body text-xs uppercase tracking-[0.15em] underline"
            style={{ color: wv.inkMuted }}
          >
            ← Back to Ashlyn Studio Portfolio
          </Link>
        </div>
      </div>
    </main>
  )
}

function ContactForm() {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <div className="mt-8 grid gap-10 sm:grid-cols-2">
      <div>
        {sent ? (
          <p className="wv-body text-sm" style={{ color: wv.inkMuted }}>
            Thanks, we've received your message and will reply soon.
          </p>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="wv-body mb-1 block text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="wv-body w-full border px-3 py-2 text-sm outline-none"
                style={{ borderColor: wv.accent, backgroundColor: "#FFFFFF", color: wv.ink }}
              />
            </div>
            <div>
              <label className="wv-body mb-1 block text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="wv-body w-full border px-3 py-2 text-sm outline-none"
                style={{ borderColor: wv.accent, backgroundColor: "#FFFFFF", color: wv.ink }}
              />
            </div>
            <button
              type="button"
              onClick={() => subject && message && setSent(true)}
              className="wv-body px-6 py-3 text-xs uppercase tracking-[0.15em]"
              style={{ backgroundColor: wv.rose, color: "#FFFFFF" }}
            >
              Send Message
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4 text-sm" style={{ color: wv.ink }}>
        <p className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: wv.inkMuted }}>Our Contact Information</p>
        <p>(912) 555-0199</p>
        <p>hello@willowandvine.co</p>
        <p>214 Magnolia Lane, Savannah, GA 31401</p>
      </div>
    </div>
  )
}

export function Head() {
  return <title>Client Portal | Willow & Vine</title>
}