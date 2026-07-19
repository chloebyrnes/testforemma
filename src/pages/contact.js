import React, { useState, useEffect } from "react"
import Layout, { COMPANY_NAME, Reveal, projectTypes } from "../components/Layout"

const inputClass =
  "w-full border border-[#434A2F]/40 bg-[#F5F5F5] px-4 py-3 font-body text-sm text-[#434A2F] placeholder:text-[#434A2F]/40 outline-none transition-colors focus:border-[#434A2F]"

const budgetOptions = ["Under $2,000", "$2,000-$5,000", "$5,000-$15,000", "$15,000+", "Not sure yet"]
const timelineOptions = ["ASAP", "1-3 months", "3-6 months", "Flexible, no rush"]

function PillGroup({ options, value, onChange, name }) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {options.map((option) => {
        const selected = value === option
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option)}
            className="rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors focus-visible:outline-none"
            style={{
              borderColor: "#434A2F",
              backgroundColor: selected ? "#434A2F" : "transparent",
              color: selected ? "#F5F5F5" : "#434A2F",
            }}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

export default function ContactPage({ location }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    website: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  useEffect(() => {
    if (!location || !location.search) return
    const params = new URLSearchParams(location.search)
    const type = params.get("type")
    if (type && projectTypes.includes(type)) {
      setValues((v) => ({ ...v, projectType: type }))
    }
  }, [location])

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
  }

  const setField = (field) => (val) => {
    setValues((v) => ({ ...v, [field]: val }))
  }

  const isValid =
    values.name.trim() &&
    values.email.trim() &&
    values.projectType &&
    values.budget &&
    values.timeline &&
    values.message.trim()

  const handleSubmit = () => {
    if (!isValid) {
      setShowErrors(true)
      return
    }
    setSubmitted(true)
  }

  return (
    <Layout currentPath="/contact">
      <section className="relative mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#434A2F]/70">Contact</p>
          <h1 className="mt-4 font-display text-4xl text-[#434A2F] sm:text-5xl [text-wrap:balance]">Let's get started</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[#B8A89E]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#434A2F]/80 sm:text-lg">
            Tell us a bit about what you're building. We'll get back to you within a couple of
            business days.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            {submitted ? (
              <div className="border border-[#434A2F]/30 p-8" style={{ backgroundColor: "#EAE7DC" }}>
                <p className="font-display text-2xl text-[#434A2F]">Thanks, {values.name.split(" ")[0]}.</p>
                <p className="mt-3 text-sm leading-relaxed text-[#434A2F]/80">
                  We've got your message and will be in touch soon at {values.email}.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F]/70">
                    Name
                  </label>
                  <input
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                  {showErrors && !values.name.trim() && (
                    <p className="mt-1 font-mono text-xs" style={{ color: "#434A2F" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F]/70">
                    Email
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                  {showErrors && !values.email.trim() && (
                    <p className="mt-1 font-mono text-xs" style={{ color: "#434A2F" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F]/70">
                    Website (optional)
                  </label>
                  <input
                    type="text"
                    value={values.website}
                    onChange={handleChange("website")}
                    placeholder="yourbusiness.com, or type N/A if you don't have one"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F]/70">
                    Project Type
                  </label>
                  <PillGroup
                    name="Project Type"
                    options={projectTypes}
                    value={values.projectType}
                    onChange={setField("projectType")}
                  />
                  {showErrors && !values.projectType && (
                    <p className="mt-2 font-mono text-xs" style={{ color: "#434A2F" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F]/70">
                    Budget
                  </label>
                  <PillGroup
                    name="Budget"
                    options={budgetOptions}
                    value={values.budget}
                    onChange={setField("budget")}
                  />
                  {showErrors && !values.budget && (
                    <p className="mt-2 font-mono text-xs" style={{ color: "#434A2F" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F]/70">
                    Timeline
                  </label>
                  <PillGroup
                    name="Timeline"
                    options={timelineOptions}
                    value={values.timeline}
                    onChange={setField("timeline")}
                  />
                  {showErrors && !values.timeline && (
                    <p className="mt-2 font-mono text-xs" style={{ color: "#434A2F" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[#434A2F]/70">
                    Message
                  </label>
                  <textarea
                    value={values.message}
                    onChange={handleChange("message")}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={inputClass}
                  />
                  <p className="mt-2 text-xs leading-relaxed text-[#434A2F]/60">
                    The more detail you give us here, the better we can understand what you're
                    looking for, things like what problem you're solving, who it's for, and any
                    sites or tools you like the look of all help.
                  </p>
                  {showErrors && !values.message.trim() && (
                    <p className="mt-1 font-mono text-xs" style={{ color: "#434A2F" }}>Required</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn-primary group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
                >
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-8 border-l border-[#434A2F]/20 pl-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#434A2F]/70">Email</p>
                <a href="mailto:hello@example.com" className="mt-2 block font-display text-xl text-[#434A2F]">
                  hello@example.com
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#434A2F]/70">Response Time</p>
                <p className="mt-2 text-sm leading-relaxed text-[#434A2F]/80">
                  We typically reply within 1-2 business days.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#434A2F]/70">Based In</p>
                <p className="mt-2 text-sm leading-relaxed text-[#434A2F]/80">City, State</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

export function Head() {
  return <title>Contact | {COMPANY_NAME}</title>
}