import React, { useState } from "react"
import { Link } from "gatsby"

const fontImports = `
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@400;500;600&display=swap');
  .wv-serif { font-family: 'EB Garamond', serif; }
  .wv-body { font-family: 'Jost', sans-serif; }
`

const initialChecklist = [
  { task: "Book venue", done: true },
  { task: "Send save-the-dates", done: true },
  { task: "Finalize florist contract", done: true },
  { task: "Choose catering menu", done: false },
  { task: "Order invitations", done: false },
  { task: "Final dress fitting", done: false },
  { task: "Confirm guest count with caterer", done: false },
  { task: "Rehearsal dinner details", done: false },
]

const files = [
  { name: "Signed Contract.pdf", date: "Mar 2" },
  { name: "Venue Floor Plan.pdf", date: "Apr 14" },
  { name: "Vendor Contact List.pdf", date: "May 20" },
  { name: "Day-Of Timeline.pdf", date: "Jun 8" },
]

export default function WillowPortalPage() {
  const [tab, setTab] = useState("Dashboard")
  const [checklist, setChecklist] = useState(initialChecklist)
  const [reply, setReply] = useState("")
  const [sent, setSent] = useState(false)

  const tabs = ["Dashboard", "Checklist", "Files", "Messages"]
  const completed = checklist.filter((c) => c.done).length
  const progress = Math.round((completed / checklist.length) * 100)

  const toggleTask = (idx) => {
    setChecklist((c) => c.map((item, i) => (i === idx ? { ...item, done: !item.done } : item)))
  }

  return (
    <main className="wv-body" style={{ backgroundColor: "#F5F3EC", minHeight: "100vh" }}>
      <style>{fontImports}</style>

      <header className="flex items-center justify-between px-6 py-6 sm:px-10" style={{ borderBottom: "1px solid #A67C4E" }}>
        <Link to="/builds/willowvine/" className="wv-serif text-2xl" style={{ color: "#2B2B28" }}>
          Willow &amp; Vine
        </Link>
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full wv-body text-xs"
            style={{ backgroundColor: "#A67C4E", color: "#F5F3EC" }}
          >
            SJ
          </div>
          <span className="text-sm" style={{ color: "#2B2B28" }}>Sarah &amp; James</span>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
        <p className="wv-body text-xs uppercase tracking-[0.3em]" style={{ color: "#A67C4E" }}>
          Client Portal
        </p>
        <h1 className="wv-serif mt-2 text-4xl italic" style={{ color: "#2B2B28" }}>
          Welcome back, Sarah &amp; James
        </h1>

        <div className="mt-8 flex gap-2 border-b" style={{ borderColor: "#A67C4E" }}>
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className="wv-body px-5 py-3 text-xs uppercase tracking-[0.1em]"
              style={{
                backgroundColor: tab === t ? "#2B2B28" : "transparent",
                color: tab === t ? "#F5F3EC" : "#2B2B28",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "Dashboard" && (
            <div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="border p-5" style={{ borderColor: "#A67C4E", backgroundColor: "#EFE9DD" }}>
                  <p className="wv-serif text-3xl" style={{ color: "#2B2B28" }}>142</p>
                  <p className="wv-body mt-1 text-xs uppercase tracking-[0.1em]" style={{ color: "#5A564E" }}>Days Until Wedding</p>
                </div>
                <div className="border p-5" style={{ borderColor: "#A67C4E", backgroundColor: "#EFE9DD" }}>
                  <p className="wv-serif text-3xl" style={{ color: "#2B2B28" }}>118 / 130</p>
                  <p className="wv-body mt-1 text-xs uppercase tracking-[0.1em]" style={{ color: "#5A564E" }}>Guests Confirmed</p>
                </div>
                <div className="border p-5" style={{ borderColor: "#A67C4E", backgroundColor: "#EFE9DD" }}>
                  <p className="wv-serif text-3xl" style={{ color: "#2B2B28" }}>68%</p>
                  <p className="wv-body mt-1 text-xs uppercase tracking-[0.1em]" style={{ color: "#5A564E" }}>Budget Spent</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.1em]" style={{ color: "#5A564E" }}>
                  <span>Planning Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden" style={{ backgroundColor: "#EFE9DD" }}>
                  <div className="h-full" style={{ width: `${progress}%`, backgroundColor: "#A67C4E" }} />
                </div>
              </div>

              <div className="mt-8">
                <p className="wv-body text-xs uppercase tracking-[0.1em]" style={{ color: "#5A564E" }}>Upcoming</p>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "#EFE9DD" }}>
                    <span className="text-sm" style={{ color: "#2B2B28" }}>Cake tasting</span>
                    <span className="wv-body text-xs" style={{ color: "#A67C4E" }}>Jul 28</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "#EFE9DD" }}>
                    <span className="text-sm" style={{ color: "#2B2B28" }}>Dress fitting</span>
                    <span className="wv-body text-xs" style={{ color: "#A67C4E" }}>Aug 4</span>
                  </div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="text-sm" style={{ color: "#2B2B28" }}>Final walkthrough with venue</span>
                    <span className="wv-body text-xs" style={{ color: "#A67C4E" }}>Aug 19</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "Checklist" && (
            <div>
              <p className="wv-body text-sm" style={{ color: "#5A564E" }}>
                {completed} of {checklist.length} tasks complete
              </p>
              <div className="mt-4 divide-y" style={{ borderColor: "#EFE9DD" }}>
                {checklist.map((item, idx) => (
                  <button
                    key={item.task}
                    type="button"
                    onClick={() => toggleTask(idx)}
                    className="flex w-full items-center gap-3 border-t py-3 text-left"
                    style={{ borderColor: "#EFE9DD" }}
                  >
                    <span
                      className="flex h-5 w-5 flex-none items-center justify-center border text-xs"
                      style={{
                        borderColor: "#2B2B28",
                        backgroundColor: item.done ? "#2B2B28" : "transparent",
                        color: "#F5F3EC",
                      }}
                    >
                      {item.done ? "✓" : ""}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: item.done ? "#5A564E" : "#2B2B28",
                        textDecoration: item.done ? "line-through" : "none",
                      }}
                    >
                      {item.task}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === "Files" && (
            <div>
              <div className="divide-y" style={{ borderColor: "#EFE9DD" }}>
                {files.map((file) => (
                  <div key={file.name} className="flex items-center justify-between border-t py-4" style={{ borderColor: "#EFE9DD" }}>
                    <div>
                      <p className="text-sm" style={{ color: "#2B2B28" }}>{file.name}</p>
                      <p className="wv-body text-xs" style={{ color: "#5A564E" }}>{file.date}</p>
                    </div>
                    <span
                      className="wv-body px-3 py-1.5 text-xs uppercase tracking-[0.1em]"
                      style={{ backgroundColor: "#EFE9DD", color: "#2B2B28" }}
                    >
                      Download
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "Messages" && (
            <div>
              <div className="space-y-3">
                <div className="inline-block max-w-[80%] px-4 py-2 text-sm" style={{ backgroundColor: "#EFE9DD", color: "#2B2B28" }}>
                  Hi Sarah & James, just following up on the catering menu, any thoughts on the tasting?
                </div>
                <div className="ml-auto block max-w-[80%] px-4 py-2 text-right text-sm" style={{ backgroundColor: "#2B2B28", color: "#F5F3EC" }}>
                  Loved the short rib, leaning toward that as the main.
                </div>
                <div className="inline-block max-w-[80%] px-4 py-2 text-sm" style={{ backgroundColor: "#EFE9DD", color: "#2B2B28" }}>
                  Perfect, I'll confirm with the caterer this week.
                </div>
              </div>
              {sent ? (
                <p className="wv-body mt-4 text-xs" style={{ color: "#5A564E" }}>Message sent.</p>
              ) : (
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Write a reply..."
                    className="wv-body flex-1 border px-3 py-2 text-sm outline-none"
                    style={{ borderColor: "#A67C4E", backgroundColor: "#FFFFFF", color: "#2B2B28" }}
                  />
                  <button
                    type="button"
                    onClick={() => reply && setSent(true)}
                    className="wv-body px-4 py-2 text-xs uppercase tracking-[0.1em]"
                    style={{ backgroundColor: "#2B2B28", color: "#F5F3EC" }}
                  >
                    Send
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <footer className="wv-body px-6 py-10 text-center sm:px-10" style={{ backgroundColor: "#2B2B28", color: "#EFE9DD" }}>
        <Link
          to="/portfolio"
          className="wv-body text-xs uppercase tracking-[0.15em] underline"
          style={{ color: "#A67C4E" }}
        >
          ← Back to Ash Studio Portfolio
        </Link>
      </footer>
    </main>
  )
}

export function Head() {
  return <title>Client Portal | Willow & Vine Events</title>
}