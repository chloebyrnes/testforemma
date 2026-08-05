import React, { useState, useRef } from "react"
import Layout, { COMPANY_NAME } from "../components/Layout"

const inputClass =
  "w-full border border-[var(--ash-surface)] bg-[var(--ash-white)] px-4 py-3 font-body text-sm text-[var(--ash-ink)] placeholder:text-[var(--ash-ink)]/40 outline-none transition-colors focus:border-[var(--ash-accent)]"

const imageAccept = "image/png, image/jpeg, image/jpg, image/webp, .png, .jpg, .jpeg, .webp"

const projectTypeOptions = ["Custom Website", "Client Portal", "Internal Tool", "Custom Web Application", "Not sure yet"]
const yesNoOptions = ["Yes", "No"]
const descriptionPrefOptions = ["Clean it up for me", "Use it exactly as written"]
const colorPrefOptions = ["I have colors in mind", "Recommend colors for me"]
const domainOptions = ["I have one", "I need help getting one", "Not sure yet"]

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ash-accent)]">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl text-[var(--ash-ink)] sm:text-3xl">{title}</h2>
    </div>
  )
}

function Field({ label, hint, required, children }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]/70">
        {label} {required && <span style={{ color: "var(--ash-accent)" }}>*</span>}
      </label>
      {hint && <p className="mb-2 text-xs text-[var(--ash-ink)]/60">{hint}</p>}
      {children}
    </div>
  )
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
            className="rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors focus-visible:outline-none"
            style={{
              borderColor: "var(--ash-surface)",
              backgroundColor: selected ? "var(--ash-accent)" : "transparent",
              color: selected ? "var(--ash-white)" : "var(--ash-ink)",
            }}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <path
        d="M12 16V4M12 4L7 9M12 4l5 5"
        stroke="var(--ash-accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16v2.5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V16"
        stroke="var(--ash-accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UploadDropzone({ id, multiple, fileNames, onFilesChange }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors hover:bg-[var(--ash-surface-soft)]"
        style={{ borderColor: "var(--ash-accent-2)", backgroundColor: "var(--ash-white)" }}
      >
        <UploadIcon />
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--ash-ink)]">
          Click to upload{multiple ? " or select multiple files" : ""}
        </p>
        <p className="text-xs text-[var(--ash-ink)]/50">PNG, JPG, or WEBP</p>
        <input
          id={id}
          type="file"
          accept={imageAccept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => onFilesChange(Array.from(e.target.files || []))}
        />
      </label>
      {fileNames.length > 0 && (
        <ul className="mt-2 space-y-1">
          {fileNames.map((name) => (
            <li key={name} className="font-mono text-xs text-[var(--ash-ink)]/70">
              ✓ {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function OnboardingPage() {
  const [values, setValues] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    projectType: "",
    needsLogoHelp: false,
    styleVibe: "",
    colorScheme: "",
    colorPreference: "",
    companyDescription: "",
    descriptionPreference: "",
    aboutMe: "",
    slogans: "",
    companyGoal: "",
    hasWebsite: "",
    currentPlatform: "",
    currentSiteUrl: "",
    domainStatus: "",
    portalGoal: "",
    toolDescription: "",
    inspirationSites: "",
    socialLinks: "",
    additionalNotes: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  const [logoFiles, setLogoFiles] = useState([])
  const [galleryFiles, setGalleryFiles] = useState([])

  const setField = (field) => (val) => setValues((v) => ({ ...v, [field]: val }))
  const handleChange = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }))

  const isValid = values.name.trim() && values.businessName.trim() && values.email.trim() && values.projectType

  const showPortalField = values.projectType === "Client Portal" || values.projectType === "Custom Web Application"
  const showToolField = values.projectType === "Internal Tool" || values.projectType === "Custom Web Application"
  const showSpecificsSection = showPortalField || showToolField

  const handleSubmit = () => {
    if (!isValid) {
      setShowErrors(true)
      return
    }
    setSubmitting(true)
    setSubmitError(false)

    const formData = new FormData()
    formData.append("form-name", "client-onboarding")
    Object.entries(values).forEach(([key, val]) => {
      formData.append(key, typeof val === "boolean" ? (val ? "yes" : "no") : val)
    })
    logoFiles.forEach((file) => formData.append("logo", file))
    galleryFiles.forEach((file) => formData.append("galleryPhotos", file))

    fetch("/", { method: "POST", body: formData })
      .then((response) => {
        setSubmitting(false)
        if (response.ok) {
          setSubmitted(true)
        } else {
          setSubmitError(true)
        }
      })
      .catch(() => {
        setSubmitting(false)
        setSubmitError(true)
      })
  }

  return (
    <Layout currentPath="/onboarding">
      {/*
        Hidden static form so Netlify's build bot can detect this form and
        every field, including the file inputs, at deploy time. The visible
        form below is what clients actually fill out; handleSubmit posts a
        FormData object built from that state using this form's name.
      */}
      <form name="client-onboarding" data-netlify="true" encType="multipart/form-data" hidden>
        <input type="text" name="name" />
        <input type="text" name="businessName" />
        <input type="email" name="email" />
        <input type="text" name="phone" />
        <input type="text" name="projectType" />
        <input type="text" name="needsLogoHelp" />
        <input type="file" name="logo" multiple />
        <input type="file" name="galleryPhotos" multiple />
        <input type="text" name="styleVibe" />
        <input type="text" name="colorScheme" />
        <input type="text" name="colorPreference" />
        <textarea name="companyDescription" />
        <input type="text" name="descriptionPreference" />
        <textarea name="aboutMe" />
        <input type="text" name="slogans" />
        <textarea name="companyGoal" />
        <input type="text" name="hasWebsite" />
        <input type="text" name="currentPlatform" />
        <input type="text" name="currentSiteUrl" />
        <input type="text" name="domainStatus" />
        <textarea name="portalGoal" />
        <textarea name="toolDescription" />
        <textarea name="inspirationSites" />
        <input type="text" name="socialLinks" />
        <textarea name="additionalNotes" />
      </form>

      <section className="relative mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]/70">Client Onboarding</p>
        <h1 className="mt-4 font-display text-3xl text-[var(--ash-ink)] sm:text-4xl [text-wrap:balance]">
          Let's get your project started
        </h1>
        <span className="mt-3 block h-1 w-28 rounded-full bg-[var(--ash-accent-2)]" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ash-ink)]/80 sm:text-lg">
          The more you can share here, the less back-and-forth we'll need later. Nothing except
          the basics at the top is required, fill in whatever applies to your project and skip
          the rest.
        </p>

        {submitted ? (
          <div className="mt-14 border border-[var(--ash-surface)]/30 p-8" style={{ backgroundColor: "var(--ash-surface-soft)" }}>
            <p className="font-display text-2xl text-[var(--ash-ink)]">Thanks, {values.name.split(" ")[0]}.</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ash-ink)]/80">
              We've got everything you sent over and will follow up soon at {values.email}.
            </p>
          </div>
        ) : (
          <div className="mt-14 space-y-16">
            {/* Your Business */}
            <div>
              <SectionHeading eyebrow="01" title="Your Business" />
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your Name" required>
                    <input type="text" value={values.name} onChange={handleChange("name")} placeholder="Jane Smith" className={inputClass} />
                    {showErrors && !values.name.trim() && <p className="mt-1 font-mono text-xs" style={{ color: "var(--ash-accent)" }}>Required</p>}
                  </Field>
                  <Field label="Business Name" required>
                    <input type="text" value={values.businessName} onChange={handleChange("businessName")} placeholder="Your Business" className={inputClass} />
                    {showErrors && !values.businessName.trim() && <p className="mt-1 font-mono text-xs" style={{ color: "var(--ash-accent)" }}>Required</p>}
                  </Field>
                  <Field label="Email" required>
                    <input type="email" value={values.email} onChange={handleChange("email")} placeholder="jane@business.com" className={inputClass} />
                    {showErrors && !values.email.trim() && <p className="mt-1 font-mono text-xs" style={{ color: "var(--ash-accent)" }}>Required</p>}
                  </Field>
                  <Field label="Phone (optional)">
                    <input type="text" value={values.phone} onChange={handleChange("phone")} placeholder="(555) 555-0100" className={inputClass} />
                  </Field>
                </div>
                <Field label="What are we building?" required>
                  <PillGroup name="Project Type" options={projectTypeOptions} value={values.projectType} onChange={setField("projectType")} />
                  {showErrors && !values.projectType && <p className="mt-2 font-mono text-xs" style={{ color: "var(--ash-accent)" }}>Required</p>}
                </Field>
              </div>
            </div>

            {/* Branding & Visuals */}
            <div>
              <SectionHeading eyebrow="02" title="Branding & Visuals" />
              <div className="space-y-6">
                <Field label="Logo Upload" hint="Skip this if you don't have one yet, just check the box below.">
                  <UploadDropzone
                    id="logo-upload"
                    multiple
                    fileNames={logoFiles.map((f) => f.name)}
                    onFilesChange={setLogoFiles}
                  />
                </Field>
                <label className="flex items-center gap-2 font-body text-sm text-[var(--ash-ink)]">
                  <input
                    type="checkbox"
                    checked={values.needsLogoHelp}
                    onChange={(e) => setValues((v) => ({ ...v, needsLogoHelp: e.target.checked }))}
                  />
                  I don't have a logo yet and would like help designing one
                </label>

                <Field label="Photos to Feature" hint="Gallery, product, team photos, whatever you'd like on the site. Select as many files as you'd like, it's also fine to send more later.">
                  <UploadDropzone
                    id="gallery-upload"
                    multiple
                    fileNames={galleryFiles.map((f) => f.name)}
                    onFilesChange={setGalleryFiles}
                  />
                </Field>

                <Field label="Style & Aesthetic" hint="A few words or references for the visual direction, for example: minimal and modern, warm and traditional, bold and colorful.">
                  <input
                    type="text"
                    value={values.styleVibe}
                    onChange={handleChange("styleVibe")}
                    placeholder="Describe the look and feel you're going for"
                    className={inputClass}
                  />
                </Field>

                <Field label="Color Scheme">
                  <PillGroup name="Color Preference" options={colorPrefOptions} value={values.colorPreference} onChange={setField("colorPreference")} />
                  {values.colorPreference === "I have colors in mind" && (
                    <input
                      type="text"
                      value={values.colorScheme}
                      onChange={handleChange("colorScheme")}
                      placeholder="Hex codes, brand guide link, or just describe it"
                      className={`${inputClass} mt-3`}
                    />
                  )}
                </Field>
              </div>
            </div>

            {/* Content & Voice */}
            <div>
              <SectionHeading eyebrow="03" title="Content & Voice" />
              <div className="space-y-6">
                <Field label="Company Description" hint="A few sentences about what your business does and who it's for.">
                  <textarea value={values.companyDescription} onChange={handleChange("companyDescription")} rows={4} className={inputClass} />
                  <div className="mt-3">
                    <PillGroup name="Description Preference" options={descriptionPrefOptions} value={values.descriptionPreference} onChange={setField("descriptionPreference")} />
                  </div>
                </Field>
                <Field label="About / About Me Section" hint="Your story, background, or whatever you'd want visitors to know about you or your team.">
                  <textarea value={values.aboutMe} onChange={handleChange("aboutMe")} rows={4} className={inputClass} />
                </Field>
                <Field label="Slogans or Taglines (optional)">
                  <input type="text" value={values.slogans} onChange={handleChange("slogans")} placeholder="Any phrases you use or want to use" className={inputClass} />
                </Field>
                <Field label="What's the Goal of the Company?" hint="This helps us make better design decisions, it won't necessarily appear on the site.">
                  <textarea value={values.companyGoal} onChange={handleChange("companyGoal")} rows={3} className={inputClass} />
                </Field>
              </div>
            </div>

            {/* Current Site & Domain */}
            <div>
              <SectionHeading eyebrow="04" title="Current Site & Domain" />
              <div className="space-y-6">
                <Field label="Do you currently have a website?">
                  <PillGroup name="Has Website" options={yesNoOptions} value={values.hasWebsite} onChange={setField("hasWebsite")} />
                </Field>
                {values.hasWebsite === "Yes" && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="What is it built on?">
                      <input
                        type="text"
                        value={values.currentPlatform}
                        onChange={handleChange("currentPlatform")}
                        placeholder="Shopify, Wix, Squarespace, etc."
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Current Site URL">
                      <input type="text" value={values.currentSiteUrl} onChange={handleChange("currentSiteUrl")} placeholder="yourbusiness.com" className={inputClass} />
                    </Field>
                  </div>
                )}
                <Field label="Domain Name">
                  <PillGroup name="Domain Status" options={domainOptions} value={values.domainStatus} onChange={setField("domainStatus")} />
                </Field>
              </div>
            </div>

            {/* Project Specifics, only shown if relevant to the selected project type */}
            {showSpecificsSection && (
              <div>
                <SectionHeading eyebrow="05" title="Project Specifics" />
                <div className="space-y-6">
                  {showPortalField && (
                    <Field label="Client Portal Goal" hint="What should clients be able to do with it, and what problem is it solving?">
                      <textarea value={values.portalGoal} onChange={handleChange("portalGoal")} rows={3} className={inputClass} />
                    </Field>
                  )}
                  {showToolField && (
                    <Field label="Internal Tool Description" hint="Describe what the tool needs to do for your team.">
                      <textarea value={values.toolDescription} onChange={handleChange("toolDescription")} rows={3} className={inputClass} />
                    </Field>
                  )}
                </div>
              </div>
            )}

            {/* Anything Else */}
            <div>
              <SectionHeading eyebrow={showSpecificsSection ? "06" : "05"} title="Anything Else" />
              <div className="space-y-6">
                <Field label="Sites You Like" hint="Any websites, yours or someone else's, whose look or feel you'd want us to draw from.">
                  <textarea value={values.inspirationSites} onChange={handleChange("inspirationSites")} rows={3} className={inputClass} />
                </Field>
                <Field label="Social Media Links (optional)" hint="Helpful for pulling existing photos, tone, or content.">
                  <input type="text" value={values.socialLinks} onChange={handleChange("socialLinks")} className={inputClass} />
                </Field>
                <Field label="Anything Else We Should Know?">
                  <textarea value={values.additionalNotes} onChange={handleChange("additionalNotes")} rows={4} className={inputClass} />
                </Field>
              </div>
            </div>

            {submitError && (
              <p className="font-mono text-xs" style={{ color: "var(--ash-accent-hover)" }}>
                Something went wrong sending that. Please try again in a moment.
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="btn-primary group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] focus-visible:outline-none"
            >
              {submitting ? "Sending..." : "Submit"}
              <span className="btn-arrow">→</span>
            </button>
          </div>
        )}
      </section>
    </Layout>
  )
}

export function Head() {
  return <title>Client Onboarding | {COMPANY_NAME}</title>
}