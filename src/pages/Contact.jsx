import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useLanguage } from '../context/LanguageContext'
import { sendMessage, plainText } from '../lib/mail'
import '../assets/css/Contact.css'

const MAP_CENTER = '46.0561,-71.9601'
const MAP_EMBED = `https://maps.google.com/maps?ll=${MAP_CENTER}&z=12&hl=fr&t=m&output=embed`
const MAP_LINK = `https://www.google.com/maps/@${MAP_CENTER},12z`

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

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
    const notes = [
      form.phone.trim() && `${contact.phoneField}: ${form.phone.trim()}`,
      form.company.trim() && `${contact.company}: ${form.company.trim()}`,
    ].filter(Boolean)
    setStatus('pending')
    try {
      await sendMessage({
        ...form,
        message: notes.length ? `${form.message.trim()}\n\n${notes.join('\n')}` : form.message,
      })
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
          <div className="contact-meta">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                <p className="sr-only">{contact.addressLabel}</p>
                <p>{contact.address}</p>
                <p>{contact.postal}</p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <p className="sr-only">{contact.phoneLabel}</p>
                <a href={phoneHref}>{contact.phone}</a>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <p className="sr-only">{contact.emailLabel}</p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <form className="contact-form" onSubmit={submit} autoComplete="off">
              {status === 'sent' ? (
                <p className="contact-sent">{contact.sent}</p>
              ) : (
                <>
                  <div className="contact-form-grid">
                    <label className="contact-field">
                      <span>{contact.name}</span>
                      <input
                        required
                        type="text"
                        name="mbq-a"
                        autoComplete="off"
                        data-1p-ignore="true"
                        data-lpignore="true"
                        data-form-type="other"
                        value={form.name}
                        placeholder={contact.namePh}
                        onChange={(event) => update('name', event.target.value)}
                      />
                    </label>
                    <label className="contact-field">
                      <span>{contact.emailField}</span>
                      <input
                        required
                        type="text"
                        inputMode="email"
                        name="mbq-b"
                        autoComplete="off"
                        data-1p-ignore="true"
                        data-lpignore="true"
                        data-form-type="other"
                        value={form.email}
                        placeholder={contact.emailPh}
                        onChange={(event) => update('email', event.target.value)}
                      />
                    </label>
                    <label className="contact-field">
                      <span>{contact.phoneField}</span>
                      <input
                        type="text"
                        inputMode="tel"
                        name="mbq-e"
                        autoComplete="off"
                        data-1p-ignore="true"
                        data-lpignore="true"
                        data-form-type="other"
                        value={form.phone}
                        placeholder={contact.phonePh}
                        onChange={(event) => update('phone', event.target.value)}
                      />
                    </label>
                    <label className="contact-field">
                      <span>{contact.company}</span>
                      <input
                        type="text"
                        name="mbq-f"
                        autoComplete="off"
                        data-1p-ignore="true"
                        data-lpignore="true"
                        data-form-type="other"
                        value={form.company}
                        placeholder={contact.companyPh}
                        onChange={(event) => update('company', event.target.value)}
                      />
                    </label>
                    <label className="contact-field is-wide">
                      <span>{contact.subject}</span>
                      <input
                        required
                        type="text"
                        name="mbq-c"
                        autoComplete="off"
                        data-1p-ignore="true"
                        data-lpignore="true"
                        data-form-type="other"
                        value={form.subject}
                        placeholder={contact.subjectPh}
                        onChange={(event) => update('subject', event.target.value)}
                      />
                    </label>
                    <label className="contact-field is-wide">
                      <span>{contact.message}</span>
                      <textarea
                        required
                        rows={8}
                        autoComplete="off"
                        data-1p-ignore="true"
                        data-lpignore="true"
                        data-form-type="other"
                        value={form.message}
                        placeholder={contact.messagePh}
                        onChange={(event) => update('message', event.target.value)}
                      />
                    </label>
                  </div>
                  <div className="contact-actions">
                    <button type="submit" className="mb-btn mb-btn-fill" disabled={status === 'pending'}>
                      {status === 'pending' ? t.home2.formPending : contact.send}
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
