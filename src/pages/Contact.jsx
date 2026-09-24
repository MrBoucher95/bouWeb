import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useLanguage } from '../context/LanguageContext'
import { sendMessage, plainText } from '../lib/mail'
import '../assets/css/Contact.css'

const fields = ['name', 'email', 'subject', 'message']
const MAP_CENTER = '46.0561,-71.9601'
const MAP_EMBED = `https://maps.google.com/maps?ll=${MAP_CENTER}&z=12&hl=fr&t=m&output=embed`
const MAP_LINK = `https://www.google.com/maps/@${MAP_CENTER},12z`

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const labels = [contact.name, contact.emailField, contact.subject, contact.message]
  const placeholders = [contact.namePh, contact.emailPh, contact.subjectPh, contact.messagePh]
  const field = fields[step]
  const phoneHref = `tel:${contact.phone.replace(/\s/g, '')}`

  const update = (key, value) => {
    const next = plainText(value)
    if (value !== next) return
    setForm((current) => ({ ...current, [key]: next }))
    if (status === 'error') setStatus('')
  }

  const submit = async (event) => {
    event.preventDefault()
    if (status === 'pending') return
    if (step < fields.length - 1) {
      setStep((value) => value + 1)
      return
    }
    setStatus('pending')
    try {
      await sendMessage(form)
      setStatus('sent')
    } catch (error) {
      setStatus(error?.code === 'activate' ? 'activate' : 'error')
    }
  }

  return (
    <PageShell>
      <header className="mb-hero contact-hero">
        <p className="mb-news">
          {contact.eyebrow}
          <span>{contact.mapLabel}</span>
        </p>
        <h1 className="mb-title">{contact.title}</h1>
      </header>
      <div className="container pb-5">
        <div className="contact-stage">
          <figure className="contact-map">
            <iframe
              title={contact.mapLabel}
              src={MAP_EMBED}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="contact-map-open" href={MAP_LINK} target="_blank" rel="noopener noreferrer">
              {contact.mapOpen}
            </a>
          </figure>
          <div className="contact-card">
            <div className="contact-meta">
              <div>
                <p className="tag">{contact.addressLabel}</p>
                <p>{contact.address}</p>
                <p>{contact.postal}</p>
              </div>
              <div>
                <p className="tag">{contact.phoneLabel}</p>
                <a href={phoneHref}>{contact.phone}</a>
              </div>
              <div>
                <p className="tag">{contact.emailLabel}</p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submit} autoComplete="off">
              <p className="contact-step">
                {t.estimate.step} {step + 1} / {fields.length}
              </p>
              {status === 'sent' ? (
                <p className="contact-sent">{contact.sent}</p>
              ) : (
                <>
                  <label className="contact-field">
                    <span>{labels[step]}</span>
                    {field === 'message' ? (
                      <textarea
                        required
                        autoComplete="off"
                        data-1p-ignore="true"
                        data-lpignore="true"
                        data-form-type="other"
                        value={form.message}
                        placeholder={placeholders[step]}
                        onChange={(event) => update('message', event.target.value)}
                      />
                    ) : (
                      <input
                        required
                        type="text"
                        inputMode={field === 'email' ? 'email' : 'text'}
                        name={field === 'name' ? 'mbq-a' : field === 'email' ? 'mbq-b' : 'mbq-c'}
                        autoComplete="off"
                        data-1p-ignore="true"
                        data-lpignore="true"
                        data-form-type="other"
                        value={form[field]}
                        placeholder={placeholders[step]}
                        onChange={(event) => update(field, event.target.value)}
                      />
                    )}
                  </label>
                  <div className="contact-actions">
                    {step > 0 ? (
                      <button type="button" className="mb-btn" onClick={() => setStep((value) => value - 1)}>
                        {contact.prev}
                      </button>
                    ) : null}
                    <button type="submit" className="mb-btn mb-btn-fill" disabled={status === 'pending'}>
                      {status === 'pending' ? t.home2.formPending : step === fields.length - 1 ? contact.send : contact.next}
                    </button>
                  </div>
                  {status === 'error' || status === 'activate' ? (
                    <p className="contact-sent is-err">{status === 'activate' ? contact.activate : contact.sendError}</p>
                  ) : null}
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <section className="mb-invite" aria-labelledby="mb-invite-title">
        <div className="container">
          <div className="mb-invite-card">
            <h2 id="mb-invite-title">{contact.ctaTitle}</h2>
            <p>{contact.ctaText}</p>
            <div className="mb-invite-cta">
              <Link className="mb-btn mb-btn-fill" to="/estimation">
                {contact.ctaEstimate}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
