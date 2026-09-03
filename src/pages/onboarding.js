import React, { useState, useRef } from "react"
import Layout, { COMPANY_NAME } from "../components/Layout"

const inputClass =
  "w-full border bg-[var(--ash-white)] px-4 py-3 font-body text-sm text-[var(--ash-ink)] placeholder:text-[var(--ash-ink)]/50 outline-none transition-colors focus:border-[var(--ash-ink)]"
const inputStyle = { borderColor: "#6E9AC9" }

const imageAccept = "image/png, image/jpeg, image/jpg, image/webp, .png, .jpg, .jpeg, .webp"

const projectTypeOptions = ["Custom Website", "Client Portal", "Internal Tool", "Custom Web Application", "Not sure yet"]
const yesNoOptions = ["Yes", "No"]
const descriptionPrefOptions = ["Clean it up for me", "Use it exactly as written"]
const colorPrefOptions = ["I have colors in mind", "Recommend colors for me"]
const domainOptions = ["I have one", "I need help getting one", "Not sure yet"]

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6E9AC9]">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl text-[var(--ash-ink)] sm:text-3xl">{title}</h2>
    </div>
  )
}

function Field({ label, hint, required, children }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-[var(--ash-ink)]">
        {label} {required && <span style={{ color: "#6E9AC9" }}>*</span>}
      </label>
      {hint && <p className="mb-2 text-xs text-[var(--ash-ink)]">{hint}</p>}
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
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors focus-visible:outline-none ${
              selected
                ? "text-[var(--ash-white)]"
                : "text-[var(--ash-ink)] hover:bg-[#6E9AC9]/15"
            }`}
            style={{
              borderColor: "#6E9AC9",
              backgroundColor: selected ? "#6E9AC9" : "transparent",
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
        stroke="#6E9AC9"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16v2.5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V16"
        stroke="#6E9AC9"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UploadDropzone({ id, name, multiple, fileNames, onFilesChange }) {
  const hasFiles = fileNames.length > 0
  return (
    <div>
      <label
        htmlFor={id}
        className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-[#F2F2F2] px-6 py-10 text-center transition-colors hover:bg-[#6E9AC9]/20 ${
          hasFiles ? "border-2" : "border-2 border-dashed"
        }`}
        style={{ borderColor: "#6E9AC9" }}
      >
        {hasFiles ? (
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--ash-ink)" }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="var(--ash-white)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12l5 5L20 6" />
            </svg>
          </span>
        ) : (
          <UploadIcon />
        )}
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--ash-ink)]">
          {hasFiles
            ? `${fileNames.length} file${fileNames.length > 1 ? "s" : ""} selected`
            : "Click to upload"}
        </p>
        {multiple && (
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ash-ink)]">
            You can select more than one at once
          </p>
        )}
        <p className="text-xs text-[var(--ash-ink)]">PNG, JPG, or WEBP</p>
        {hasFiles && (
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ash-ink)]">
            Click to replace
          </p>
        )}
        <input
          id={id}
          name={name}
          type="file"
          accept={imageAccept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => onFilesChange(Array.from(e.target.files || []))}
        />
      </label>
      {hasFiles && (
        <ul className="mt-3 space-y-1.5">
          {fileNames.map((name) => (
            <li
              key={name}
              className="flex items-center gap-2 border px-3 py-2 font-mono text-xs text-[var(--ash-ink)]"
              style={{ borderColor: "#6E9AC9", backgroundColor: "var(--ash-white)" }}
            >
              <span style={{ color: "#6E9AC9" }}>✓</span> {name}
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
  const [showErrors, setShowErrors] = useState(false)

  const [logoFiles, setLogoFiles] = useState([])
  const [galleryFiles, setGalleryFiles] = useState([])

  const hasSubmittedRef = useRef(false)

  const setField = (field) => (val) => setValues((v) => ({ ...v, [field]: val }))
  const handleChange = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }))

  const isValid = values.name.trim() && values.businessName.trim() && values.email.trim() && values.projectType

  const showPortalField = values.projectType === "Client Portal" || values.projectType === "Custom Web Application"
  const showToolField = values.projectType === "Internal Tool" || values.projectType === "Custom Web Application"
  const showSpecificsSection = showPortalField || showToolField

  const handleFormSubmit = (e) => {
    if (!isValid) {
      e.preventDefault()
      setShowErrors(true)
      return
    }
    setSubmitting(true)
    hasSubmittedRef.current = true
    // No preventDefault here: this lets the browser do a real native multipart
    // form POST (targeting the hidden iframe below) instead of a fetch/AJAX
    // request, since Netlify Forms only reliably attaches uploaded files on
    // genuine native submissions.
  }

  const handleIframeLoad = () => {
    // The iframe fires a load event on initial mount too (about:blank), so
    // only treat this as a real submission if the form was actually sent.
    if (!hasSubmittedRef.current) return
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <Layout currentPath="/onboarding">
      <div
        style={{
          "--ash-bg": "#FFFFFF",
          "--ash-surface": "#FFFFFF",
          "--ash-surface-soft": "#FFFFFF",
          backgroundColor: "var(--ash-bg)",
        }}
      >
      <iframe name="hidden-onboarding-iframe" title="hidden" style={{ display: "none" }} onLoad={handleIframeLoad} />

      {/*
        Hidden static form so Netlify's build bot can detect the form and its
        fields (including the two file inputs) in the generated HTML. This
        form is never shown or interacted with, the visible form below is
        what people actually fill out, and handleFormSubmit posts the real
        data to Netlify using this form's name.
      */}
      <form name="client-onboarding" data-netlify="true" encType="multipart/form-data" hidden>
        <input type="text" name="name" />
        <input type="text" name="businessName" />
        <input type="email" name="email" />
        <input type="text" name="phone" />
        <input type="text" name="projectType" />
        <input type="file" name="logo" />
        <input type="text" name="needsLogoHelp" />
        <input type="file" name="galleryPhotos" multiple />
        <input type="text" name="styleVibe" />
        <input type="text" name="colorPreference" />
        <input type="text" name="colorScheme" />
        <input type="text" name="companyDescription" />
        <input type="text" name="descriptionPreference" />
        <input type="text" name="aboutMe" />
        <input type="text" name="slogans" />
        <input type="text" name="companyGoal" />
        <input type="text" name="hasWebsite" />
        <input type="text" name="currentPlatform" />
        <input type="text" name="currentSiteUrl" />
        <input type="text" name="domainStatus" />
        <input type="text" name="portalGoal" />
        <input type="text" name="toolDescription" />
        <input type="text" name="inspirationSites" />
        <input type="text" name="socialLinks" />
        <input type="text" name="additionalNotes" />
      </form>

      <section className="relative mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--ash-ink)]">Client Onboarding</p>
        <h1 className="mt-4 font-display text-3xl text-[var(--ash-ink)] sm:text-4xl [text-wrap:balance]">
          Let's get your project started
        </h1>
        <span className="mt-3 block h-1 w-28 rounded-full bg-[#6E9AC9]" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ash-ink)] sm:text-lg">
          The more you can share here, the less back-and-forth we'll need later. Nothing except
          the basics at the top is required, fill in whatever applies to your project and skip
          the rest.
        </p>

        {submitted ? (
          <div className="mt-14 border border-[#6E9AC9]/30 p-8" style={{ backgroundColor: "#6E9AC9" }}>
            <p className="font-display text-2xl text-[var(--ash-ink)]">Thanks, {values.name.split(" ")[0]}.</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ash-ink)]">
              We've got everything you sent over and will follow up soon at {values.email}.
            </p>
          </div>
        ) : (
          <form
            name="client-onboarding"
            method="POST"
            data-netlify="true"
            encType="multipart/form-data"
            target="hidden-onboarding-iframe"
            onSubmit={handleFormSubmit}
            className="mt-14 space-y-20 [&>div+div]:border-t [&>div+div]:border-[var(--ash-accent-2)] [&>div+div]:pt-20"
          >
            <input type="hidden" name="form-name" value="client-onboarding" />

            {/* Your Business */}
            <div>
              <SectionHeading eyebrow="01" title="Your Business" />
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your Name" required>
                    <input type="text" name="name" value={values.name} onChange={handleChange("name")} placeholder="Jane Smith" className={inputClass} style={inputStyle} />
                    {showErrors && !values.name.trim() && <p className="mt-1 font-mono text-xs" style={{ color: "#6E9AC9" }}>Required</p>}
                  </Field>
                  <Field label="Business Name" required>
                    <input type="text" name="businessName" value={values.businessName} onChange={handleChange("businessName")} placeholder="Your Business" className={inputClass} style={inputStyle} />
                    {showErrors && !values.businessName.trim() && <p className="mt-1 font-mono text-xs" style={{ color: "#6E9AC9" }}>Required</p>}
                  </Field>
                  <Field label="Email" required>
                    <input type="email" name="email" value={values.email} onChange={handleChange("email")} placeholder="jane@business.com" className={inputClass} style={inputStyle} />
                    {showErrors && !values.email.trim() && <p className="mt-1 font-mono text-xs" style={{ color: "#6E9AC9" }}>Required</p>}
                  </Field>
                  <Field label="Phone (optional)">
                    <input type="text" name="phone" value={values.phone} onChange={handleChange("phone")} placeholder="(555) 555-0100" className={inputClass} style={inputStyle} />
                  </Field>
                </div>
                <Field label="What are we building?" required>
                  <input type="hidden" name="projectType" value={values.projectType} />
                  <PillGroup name="Project Type" options={projectTypeOptions} value={values.projectType} onChange={setField("projectType")} />
                  {showErrors && !values.projectType && <p className="mt-2 font-mono text-xs" style={{ color: "#6E9AC9" }}>Required</p>}
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
                    name="logo"
                    multiple
                    fileNames={logoFiles.map((f) => f.name)}
                    onFilesChange={setLogoFiles}
                  />
                </Field>
                <label className="flex items-center gap-2 font-body text-sm text-[var(--ash-ink)]">
                  <input
                    type="checkbox"
                    name="needsLogoHelp"
                    value="yes"
                    checked={values.needsLogoHelp}
                    onChange={(e) => setValues((v) => ({ ...v, needsLogoHelp: e.target.checked }))}
                  />
                  I don't have a logo yet and would like help designing one
                </label>

                <Field label="Photos to Feature" hint="Gallery, product, team photos, whatever you'd like on the site. Select as many files as you'd like, it's also fine to send more later.">
                  <UploadDropzone
                    id="gallery-upload"
                    name="galleryPhotos"
                    multiple
                    fileNames={galleryFiles.map((f) => f.name)}
                    onFilesChange={setGalleryFiles}
                  />
                </Field>

                <Field label="Style & Aesthetic" hint="A few words or references for the visual direction, for example: minimal and modern, warm and traditional, bold and colorful.">
                  <input
                    type="text"
                    name="styleVibe"
                    value={values.styleVibe}
                    onChange={handleChange("styleVibe")}
                    placeholder="Describe the look and feel you're going for"
                    className={inputClass} style={inputStyle}
                  />
                </Field>

                <Field label="Color Scheme">
                  <input type="hidden" name="colorPreference" value={values.colorPreference} />
                  <PillGroup name="Color Preference" options={colorPrefOptions} value={values.colorPreference} onChange={setField("colorPreference")} />
                  {values.colorPreference === "I have colors in mind" && (
                    <input
                      type="text"
                      name="colorScheme"
                      value={values.colorScheme}
                      onChange={handleChange("colorScheme")}
                      placeholder="Hex codes, brand guide link, or just describe it"
                      className={`${inputClass} mt-3`} style={inputStyle}
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
                  <textarea name="companyDescription" value={values.companyDescription} onChange={handleChange("companyDescription")} rows={4} className={inputClass} style={inputStyle} />
                  <input type="hidden" name="descriptionPreference" value={values.descriptionPreference} />
                  <div className="mt-3">
                    <PillGroup name="Description Preference" options={descriptionPrefOptions} value={values.descriptionPreference} onChange={setField("descriptionPreference")} />
                  </div>
                </Field>
                <Field label="About / About Me Section" hint="Your story, background, or whatever you'd want visitors to know about you or your team.">
                  <textarea name="aboutMe" value={values.aboutMe} onChange={handleChange("aboutMe")} rows={4} className={inputClass} style={inputStyle} />
                </Field>
                <Field label="Slogans or Taglines (optional)">
                  <input type="text" name="slogans" value={values.slogans} onChange={handleChange("slogans")} placeholder="Any phrases you use or want to use" className={inputClass} style={inputStyle} />
                </Field>
                <Field label="What's the Goal of the Company?" hint="This helps us make better design decisions, it won't necessarily appear on the site.">
                  <textarea name="companyGoal" value={values.companyGoal} onChange={handleChange("companyGoal")} rows={3} className={inputClass} style={inputStyle} />
                </Field>
              </div>
            </div>

            {/* Current Site & Domain */}
            <div>
              <SectionHeading eyebrow="04" title="Current Site & Domain" />
              <div className="space-y-6">
                <Field label="Do you currently have a website?">
                  <input type="hidden" name="hasWebsite" value={values.hasWebsite} />
                  <PillGroup name="Has Website" options={yesNoOptions} value={values.hasWebsite} onChange={setField("hasWebsite")} />
                </Field>
                {values.hasWebsite === "Yes" && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="What is it built on?">
                      <input
                        type="text"
                        name="currentPlatform"
                        value={values.currentPlatform}
                        onChange={handleChange("currentPlatform")}
                        placeholder="Shopify, Wix, Squarespace, etc."
                        className={inputClass} style={inputStyle}
                      />
                    </Field>
                    <Field label="Current Site URL">
                      <input type="text" name="currentSiteUrl" value={values.currentSiteUrl} onChange={handleChange("currentSiteUrl")} placeholder="yourbusiness.com" className={inputClass} style={inputStyle} />
                    </Field>
                  </div>
                )}
                <Field label="Domain Name">
                  <input type="hidden" name="domainStatus" value={values.domainStatus} />
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
                      <textarea name="portalGoal" value={values.portalGoal} onChange={handleChange("portalGoal")} rows={3} className={inputClass} style={inputStyle} />
                    </Field>
                  )}
                  {showToolField && (
                    <Field label="Internal Tool Description" hint="Describe what the tool needs to do for your team.">
                      <textarea name="toolDescription" value={values.toolDescription} onChange={handleChange("toolDescription")} rows={3} className={inputClass} style={inputStyle} />
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
                  <textarea name="inspirationSites" value={values.inspirationSites} onChange={handleChange("inspirationSites")} rows={3} className={inputClass} style={inputStyle} />
                </Field>
                <Field label="Social Media Links (optional)" hint="Helpful for pulling existing photos, tone, or content.">
                  <input type="text" name="socialLinks" value={values.socialLinks} onChange={handleChange("socialLinks")} className={inputClass} style={inputStyle} />
                </Field>
                <Field label="Anything Else We Should Know?">
                  <textarea name="additionalNotes" value={values.additionalNotes} onChange={handleChange("additionalNotes")} rows={4} className={inputClass} style={inputStyle} />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors focus-visible:outline-none"
              style={{
                backgroundColor: submitting ? "#B9CCE0" : "#6E9AC9",
                color: "var(--ash-white)",
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              {submitting ? "Sending..." : "Submit"}
              <span className="btn-arrow">→</span>
            </button>
          </form>
        )}
      </section>
      </div>
    </Layout>
  )
}

export function Head() {
  return <title>ashlyn studio | Client Onboarding</title>
}