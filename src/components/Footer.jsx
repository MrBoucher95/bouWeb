import { useEffect, useLayoutEffect, useState } from 'react'
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
const footerQuery = '(max-width: 560px)'

function useNarrowFooter() {
  const [narrow, setNarrow] = useState(() => window.matchMedia(footerQuery).matches)

  useEffect(() => {
    const media = window.matchMedia(footerQuery)
    const sync = () => setNarrow(media.matches)
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return narrow
}

export default function Footer() {
  const { t } = useLanguage()
  const { nav, home2, contact } = t
  const [status, setStatus] = useState('')
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [openCols, setOpenCols] = useState({})
  const narrow = useNarrowFooter()

  useLayoutEffect(() => {
    if (!narrow) return undefined
    const snap = () => {
      const ratio = window.devicePixelRatio || 1
      document.querySelectorAll('.mb-foot-mark').forEach((mark) => {
        mark.style.translate = '0 -50%'
        const { top } = mark.getBoundingClientRect()
        const shift = (Math.round(top * ratio) - top * ratio) / ratio
        mark.style.translate = `0 calc(-50% + ${shift}px)`
      })
    }
    snap()
    window.addEventListener('resize', snap)
    return () => window.removeEventListener('resize', snap)
  }, [narrow])
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
      links: [
        { label: nav.web, to: '/services/web' },
        { label: nav.apps, to: '/services/applications' },
        { label: nav.print, to: '/services/imprime' },
        { label: nav.digital, to: '/services/numerique' },
        { label: nav.video, to: '/services/video' },
      ],
    },
    {
      title: home2.colStudio,
      links: [
        { label: nav.home, to: '/' },
        { label: nav.about, to: '/a-propos' },
        { label: nav.contact, to: '/contact' },
      ],
    },
    {
      title: home2.colWork,
      links: [
        { label: nav.portfolio, to: '/portfolio' },
        { label: nav.estimate, to: '/estimation' },
      ],
    },
    {
      title: home2.colResources,
      links: [
        { label: nav.blog, to: '/blog' },
        { label: nav.faq, to: '/faq' },
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
    } catch (error) {
      setStatus(error?.code === 'activate' ? 'activate' : 'send-error')
    }
  }

  return (
    <footer className="mb-foot">
      <div className="mb-foot-inner">
        <div className="container">
          <div className="mb-foot-cols">
            {columns.map((column) => (
              <details
                key={column.title}
                className="mb-foot-col"
                open={!narrow || Boolean(openCols[column.title])}
                onToggle={(event) => {
                  const isOpen = event.currentTarget.open
                  setOpenCols((current) =>
                    current[column.title] === isOpen ? current : { ...current, [column.title]: isOpen },
                  )
                }}
              >
                <summary>
                  <h3>
                    {column.href ? <Link to={column.href}>{column.title}</Link> : column.title}
                  </h3>
                  <span className="mb-foot-mark" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </summary>
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
              </details>
            ))}
          </div>

          <div className="mb-foot-bar">
            <p className="mb-foot-copy">
              <strong>© 2026 m-boucher</strong>{t.footer.replace(/^© 2026 m-boucher/, '')}
            </p>
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
                <p
                  className={`mb-newslet-msg${status === 'error' || status === 'send-error' || status === 'activate' ? ' is-on' : ''}`}
                  role="alert"
                >
                  {status === 'error'
                    ? home2.formError
                    : status === 'activate'
                      ? contact.activate
                      : status === 'send-error'
                        ? contact.sendError
                        : ''}
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </footer>
  )
}
