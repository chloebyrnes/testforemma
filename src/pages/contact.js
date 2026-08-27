import React, { useState, useEffect } from "react"
import Layout, { COMPANY_NAME, Reveal, projectTypes } from "../components/Layout"

const inputClass =
  "w-full border bg-[var(--ash-white)] px-4 py-3 font-body text-sm text-[var(--ash-ink)] placeholder:text-[var(--ash-ink)]/50 outline-none transition-colors focus:border-[var(--ash-ink)]"
const inputStyle = { borderColor: "var(--ash-ink)" }

const budgetOptions = ["Under $2,000", "$2,000-$5,000", "$5,000-$15,000", "$15,000+", "Not sure yet"]
const timelineOptions = ["ASAP", "1-3 months", "3-6 months", "Flexible, no rush"]

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

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
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors focus-visible:outline-none ${
              selected
                ? "border-[var(--ash-ink)] bg-[var(--ash-accent)] text-[var(--ash-ink)]"
                : "border-[var(--ash-ink)] bg-[var(--ash-white)] text-[var(--ash-ink)] hover:bg-[var(--ash-accent)]"
            }`}
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
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

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
    setSubmitting(true)
    setSubmitError(false)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...values,
      }),
    })
      .then((response) => {
        setSubmitting(false)
        if (response.ok) {
          setSubmitted(true)
        } else {
          console.error("Netlify form submission failed with status", response.status)
          setSubmitError(true)
        }
      })
      .catch((err) => {
        console.error("Netlify form submission failed", err)
        setSubmitting(false)
        setSubmitError(true)
      })
  }

  return (
    <Layout currentPath="/contact">
      <div
        style={{
          "--ash-bg": "#FFFFFF",
          "--ash-surface": "#FFFFFF",
          "--ash-surface-soft": "#FFFFFF",
          backgroundColor: "var(--ash-bg)",
        }}
      >
      {/*
        Hidden static form so Netlify's build bot can detect the form and its
        fields in the generated HTML. This form is never shown or interacted
        with, the visible form below is what people actually fill out, and
        handleSubmit posts the real data to Netlify using this form's name.
      */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="projectType" />
        <input type="text" name="budget" />
        <input type="text" name="timeline" />
        <input type="text" name="website" />
        <textarea name="message" />
        <input type="text" name="bot-field" />
      </form>

      <section className="relative mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]">Contact</p>
          <h1 className="mt-4 font-display text-4xl text-[var(--ash-ink)] sm:text-5xl [text-wrap:balance]">Let's get started</h1>
          <span className="mt-3 block h-1 w-28 rounded-full bg-[var(--ash-accent-2)]" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ash-ink)] sm:text-lg">
            Tell us a bit about what you're building. We'll get back to you within a couple of
            business days.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="p-8" style={{ backgroundColor: "var(--ash-white)" }}>
            {submitted ? (
              <div>
                <p className="font-display text-2xl text-[var(--ash-ink)]">Thanks, {values.name.split(" ")[0]}.</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ash-ink)]">
                  We've got your message and will be in touch soon at {values.email}.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-xs text-[var(--ash-ink)]">
                  Fields marked with <span style={{ color: "#B23A2C" }}>*</span> are required.
                </p>
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]">
                    Name <span style={{ color: "#B23A2C" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                    placeholder="Jane Smith"
                    className={inputClass} style={inputStyle}
                  />
                  {showErrors && !values.name.trim() && (
                    <p className="mt-1 font-mono text-xs" style={{ color: "var(--ash-ink)" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]">
                    Email <span style={{ color: "#B23A2C" }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    placeholder="jane@company.com"
                    className={inputClass} style={inputStyle}
                  />
                  {showErrors && !values.email.trim() && (
                    <p className="mt-1 font-mono text-xs" style={{ color: "var(--ash-ink)" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]">
                    Website (optional)
                  </label>
                  <input
                    type="text"
                    value={values.website}
                    onChange={handleChange("website")}
                    placeholder="yourbusiness.com, or type N/A if you don't have one"
                    className={inputClass} style={inputStyle}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]">
                    Project Type <span style={{ color: "#B23A2C" }}>*</span>
                  </label>
                  <PillGroup
                    name="Project Type"
                    options={projectTypes}
                    value={values.projectType}
                    onChange={setField("projectType")}
                  />
                  {showErrors && !values.projectType && (
                    <p className="mt-2 font-mono text-xs" style={{ color: "var(--ash-ink)" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]">
                    Budget <span style={{ color: "#B23A2C" }}>*</span>
                  </label>
                  <PillGroup
                    name="Budget"
                    options={budgetOptions}
                    value={values.budget}
                    onChange={setField("budget")}
                  />
                  {showErrors && !values.budget && (
                    <p className="mt-2 font-mono text-xs" style={{ color: "var(--ash-ink)" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]">
                    Timeline <span style={{ color: "#B23A2C" }}>*</span>
                  </label>
                  <PillGroup
                    name="Timeline"
                    options={timelineOptions}
                    value={values.timeline}
                    onChange={setField("timeline")}
                  />
                  {showErrors && !values.timeline && (
                    <p className="mt-2 font-mono text-xs" style={{ color: "var(--ash-ink)" }}>Required</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]">
                    Message <span style={{ color: "#B23A2C" }}>*</span>
                  </label>
                  <textarea
                    value={values.message}
                    onChange={handleChange("message")}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={inputClass} style={inputStyle}
                  />
                  <p className="mt-2 text-xs leading-relaxed text-[var(--ash-ink)]">
                    The more detail you give us here, the better we can understand what you're
                    looking for, things like what problem you're solving, who it's for, and any
                    sites or tools you like the look of all help.
                  </p>
                  {showErrors && !values.message.trim() && (
                    <p className="mt-1 font-mono text-xs" style={{ color: "var(--ash-ink)" }}>Required</p>
                  )}
                </div>

                {submitError && (
                  <p className="font-mono text-xs" style={{ color: "var(--ash-accent-hover)" }}>
                    Something went wrong sending that. Please try again in a moment.
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isValid || submitting}
                  className="btn-primary group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-8 border-l border-[var(--ash-surface)]/20 pl-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ash-ink)]">Email</p>
                <a href="mailto:contact@ashlynstudio.com" className="mt-2 block font-display text-xl text-[var(--ash-ink)]">
                  contact@ashlynstudio.com
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ash-ink)]">Response Time</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ash-ink)]">
                  We typically reply within 1-2 business days.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ash-ink)]">Based In</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ash-ink)]">Tampa Bay, Florida</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      </div>
    </Layout>
  )
}

export function Head() {
  return <title>ashlyn studio | Contact</title>
}