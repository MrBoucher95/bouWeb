import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { sendMessage, plainText } from '../lib/mail'
import taping from '../assets/video/taping.mp4'

export const socials = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8.2h2.7V4.8H14c-2.6 0-4.4 1.7-4.4 4.7v1.9H7.2V15h2.4v8.2h3.5V15h2.9l.6-3.6h-3.5v-1.5c0-1.1.5-1.7 1.9-1.7Z" />
      </svg>
    ),
  },
  {
    id: 'messenger',
    label: 'Messenger',
    href: 'https://www.messenger.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.2 2 11.4c0 2.9 1.4 5.5 3.7 7.2V22l3.4-1.9c.9.2 1.9.4 2.9.4 5.5 0 10-4.2 10-9.1S17.5 2 12 2Zm1.1 12.2-2.4-2.6-4.7 2.6 5.2-5.6 2.4 2.6 4.7-2.6-5.2 5.6Z" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23 7.1a3 3 0 0 0-2.1-2.1C19.1 4.6 12 4.6 12 4.6s-7.1 0-8.9.4A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.8.4 8.9.4 8.9.4s7.1 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.1ZM9.8 15.5V8.5l6.1 3.5-6.1 3.5Z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm5.8-8.8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM12 4.8c-2 0-2.2 0-3 .1a5 5 0 0 0-1.7.4 3.3 3.3 0 0 0-1.2.8 3.3 3.3 0 0 0-.8 1.2 5 5 0 0 0-.4 1.7c-.1.8-.1 1-.1 3s0 2.2.1 3a5 5 0 0 0 .4 1.7 3.3 3.3 0 0 0 .8 1.2 3.3 3.3 0 0 0 1.2.8 5 5 0 0 0 1.7.4c.8.1 1 .1 3 .1s2.2 0 3-.1a5 5 0 0 0 1.7-.4 3.3 3.3 0 0 0 1.2-.8 3.3 3.3 0 0 0 .8-1.2 5 5 0 0 0 .4-1.7c.1-.8.1-1 .1-3s0-2.2-.1-3a5 5 0 0 0-.4-1.7 3.3 3.3 0 0 0-.8-1.2 3.3 3.3 0 0 0-1.2-.8 5 5 0 0 0-1.7-.4c-.8-.1-1-.1-3-.1Zm0-1.8c2 0 2.3 0 3.1.1a6.7 6.7 0 0 1 2.2.4 5.1 5.1 0 0 1 1.9 1.2 5.1 5.1 0 0 1 1.2 1.9 6.7 6.7 0 0 1 .4 2.2c.1.8.1 1.1.1 3.1s0 2.3-.1 3.1a6.7 6.7 0 0 1-.4 2.2 5.1 5.1 0 0 1-1.2 1.9 5.1 5.1 0 0 1-1.9 1.2 6.7 6.7 0 0 1-2.2.4c-.8.1-1.1.1-3.1.1s-2.3 0-3.1-.1a6.7 6.7 0 0 1-2.2-.4 5.1 5.1 0 0 1-1.9-1.2 5.1 5.1 0 0 1-1.2-1.9 6.7 6.7 0 0 1-.4-2.2C3 14.3 3 14 3 12s0-2.3.1-3.1a6.7 6.7 0 0 1 .4-2.2 5.1 5.1 0 0 1 1.2-1.9 5.1 5.1 0 0 1 1.9-1.2 6.7 6.7 0 0 1 2.2-.4C9.7 3 10 3 12 3Z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/math-boucher',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20.3 20h-2.8v-5.6c0-1.8-.8-2.4-1.8-2.4s-2 .9-2 2.5V20h-2.8V9.5h2.7v1.4c.5-.9 1.8-1.7 3.4-1.7 2.2 0 3.3 1.2 3.3 3.9V20Z" />
      </svg>
    ),
  },
]

const footFields = ['name', 'email', 'subject', 'message']

export default function Footer() {
  const { t } = useLanguage()
  const { nav, home2, contact } = t
  const [status, setStatus] = useState('')
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const field = footFields[step]
  const labels = [contact.name, contact.emailField, contact.subject, contact.message]
  const placeholders = [contact.namePh, contact.emailPh, contact.subjectPh, contact.messagePh]

  const update = (key, value) => {
    const next = plainText(value)
    if (value !== next) return
    setForm((current) => ({ ...current, [key]: next }))
    if (status === 'error') setStatus('')
  }

  const valid = (key, value) => {
    const trimmed = value.trim()
    if (key === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
    return trimmed.length > 0
  }

  const columns = [
    {
      title: home2.colServices,
      href: '/services/web',
      links: [
        { label: nav.web, to: '/services/web' },
        { label: nav.apps, to: '/services/applications' },
        { label: nav.print, to: '/services/imprime' },
        { label: nav.digital, to: '/services/numerique' },
        { label: nav.video, to: '/services/video' },
      ],
    },
    {
      title: home2.colWork,
      href: '/portfolio',
      links: [
        { label: nav.portfolio, to: '/portfolio' },
        { label: nav.logo, to: '/logo' },
        { label: nav.home, to: '/' },
      ],
    },
    {
      title: home2.colResources,
      links: [
        { label: nav.estimate, to: '/estimation' },
        { label: nav.blog, to: '/blog' },
        { label: nav.contact, to: '/contact' },
      ],
    },
    {
      title: home2.colStudio,
      links: [
        { label: nav.about, to: '/a-propos' },
        { label: nav.contact, to: '/contact' },
        { label: nav.blog, to: '/blog' },
      ],
    },
    {
      title: home2.colConnect,
      links: [
        { label: nav.contact, to: '/contact' },
        { label: nav.estimate, to: '/estimation' },
      ],
    },
  ]

  async function onSubmit(event) {
    event.preventDefault()
    if (status === 'pending') return
    if (!valid(field, form[field])) {
      setStatus('error')
      return
    }
    if (step < footFields.length - 1) {
      setStep((value) => value + 1)
      setStatus('')
      return
    }
    setStatus('pending')
    try {
      await sendMessage(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setStep(0)
    } catch {
      setStatus('send-error')
    }
  }

  return (
    <footer className="mb-foot">
      <div className="mb-foot-inner">
        <div className="container">
          <div className="mb-foot-cols">
            {columns.map((column) => (
              <div key={column.title} className="mb-foot-col">
                <h3>
                  {column.href ? <Link to={column.href}>{column.title}</Link> : column.title}
                </h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <span>{link.label}</span>
                          <span className="mb-foot-arrow" aria-hidden="true">
                            ↗︎
                          </span>
                        </a>
                      ) : (
                        <Link to={link.to}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-foot-bar">
            <p>{t.footer}</p>
            <div className="mb-foot-socials">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <p className="mb-foot-notice">{home2.notice}</p>
        </div>
      </div>

      <div className="mb-newslet">
        <div className="container">
          <figure className="mb-newslet-sticker" aria-hidden="true">
            <video src={taping} autoPlay loop muted playsInline />
          </figure>
          <form className="mb-newslet-form" onSubmit={onSubmit} noValidate autoComplete="off" aria-label={home2.formTitle}>
            <h2>{home2.formTitle}</h2>
            {status === 'success' ? (
              <p className="mb-newslet-msg is-ok is-on" role="status">
                {contact.sent}
              </p>
            ) : (
              <>
                <p className="mb-newslet-step">
                  {t.estimate.step} {step + 1} / {footFields.length}
                </p>
                <label className="mb-newslet-field" htmlFor={`footer-${field}`}>
                  <span>{labels[step]}</span>
                  {field === 'message' ? (
                    <textarea
                      key="message"
                      id="footer-message"
                      name="mbq-d"
                      rows={4}
                      required
                      autoComplete="off"
                      data-1p-ignore="true"
                      data-lpignore="true"
                      data-form-type="other"
                      spellCheck={false}
                      placeholder={placeholders[step]}
                      value={form.message}
                      onChange={(event) => update('message', event.target.value)}
                      onInput={(event) => update('message', event.target.value)}
                      aria-invalid={status === 'error'}
                    />
                  ) : (
                    <input
                      key={field}
                      id={`footer-${field}`}
                      type="text"
                      inputMode={field === 'email' ? 'email' : 'text'}
                      name={field === 'name' ? 'mbq-a' : field === 'email' ? 'mbq-b' : 'mbq-c'}
                      autoComplete="off"
                      data-1p-ignore="true"
                      data-lpignore="true"
                      data-form-type="other"
                      spellCheck={false}
                      required
                      readOnly
                      onFocus={(event) => event.currentTarget.removeAttribute('readonly')}
                      placeholder={placeholders[step]}
                      value={form[field]}
                      onChange={(event) => update(field, event.target.value)}
                      onInput={(event) => update(field, event.target.value)}
                      aria-invalid={status === 'error'}
                    />
                  )}
                </label>
                <div className="mb-newslet-actions">
                  {step > 0 ? (
                    <button type="button" className="mb-newslet-prev" onClick={() => setStep((value) => value - 1)}>
                      {contact.prev}
                    </button>
                  ) : null}
                  <button className="mb-newslet-submit" type="submit" disabled={status === 'pending'}>
                    {status === 'pending'
                      ? home2.formPending
                      : step === footFields.length - 1
                        ? contact.send
                        : contact.next}
                  </button>
                </div>
                <p className={`mb-newslet-msg${status === 'error' || status === 'send-error' ? ' is-on' : ''}`} role="alert">
                  {status === 'error' ? home2.formError : status === 'send-error' ? contact.sendError : ''}
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </footer>
  )
}
