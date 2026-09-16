import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import taping from '../assets/video/taping.mp4'
import { socials } from './Footer'

export default function Home2Footer() {
  const { t } = useLanguage()
  const { nav, home2 } = t
  const [status, setStatus] = useState('')
  const [email, setEmail] = useState('')

  const columns = [
    {
      title: home2.colServices,
      href: '/services/web',
      links: [
        { label: nav.web, to: '/services/web' },
        { label: nav.apps, to: '/services/applications' },
        { label: nav.print, to: '/services/imprime' },
        { label: nav.digital, to: '/services/numerique' },
        { label: nav.drone, to: '/services/drone' },
      ],
    },
    {
      title: home2.colWork,
      href: '/portfolio',
      links: [
        { label: nav.portfolio, to: '/portfolio' },
        { label: nav.logo, to: '/logo' },
        { label: nav.home, to: '/' },
        { label: nav.home2, to: '/accueil-2' },
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

  function onSubmit(event) {
    event.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus('error')
      return
    }
    setStatus('pending')
    window.setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 700)
  }

  return (
    <footer className="j2-foot">
      <div className="j2-foot-inner">
        <div className="j2-foot-wrap">
          <div className="j2-foot-top">
            <h2>{home2.footerTitle}</h2>
            <p>{home2.footerText}</p>
            <div className="j2-foot-cta">
              <Link className="j2-btn j2-btn-fill" to="/estimation">
                {home2.footerCta}
              </Link>
            </div>
          </div>

          <div className="j2-foot-cols">
            {columns.map((column) => (
              <div key={column.title} className="j2-foot-col">
                <h3>
                  {column.href ? <Link to={column.href}>{column.title}</Link> : column.title}
                </h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <span>{link.label}</span>
                          <span className="j2-foot-arrow" aria-hidden="true">
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

          <div className="j2-foot-bar">
            <p>{t.footer}</p>
            <div className="j2-foot-socials">
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
          <p className="j2-foot-notice">{home2.notice}</p>
        </div>
      </div>

      <div className="j2-newslet">
        <div className="j2-foot-wrap">
          <figure className="j2-newslet-sticker" aria-hidden="true">
            <video src={taping} autoPlay loop muted playsInline />
          </figure>
          <form className="j2-newslet-form" onSubmit={onSubmit} noValidate aria-label={home2.newsTitle}>
            <h2>{home2.newsTitle}</h2>
            <div className="j2-newslet-row" role="group">
              <label htmlFor="j2-news-email" className="sr-only">
                {home2.newsLabel}
              </label>
              <input
                id="j2-news-email"
                type="email"
                name="email"
                placeholder={home2.newsPlaceholder}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (status === 'error') setStatus('')
                }}
                aria-invalid={status === 'error'}
                autoComplete="email"
              />
              <button className="j2-newslet-submit" type="submit" aria-label={home2.newsSubmit}>
                {home2.newsSubmit}
              </button>
            </div>
            <p className={`j2-newslet-msg${status === 'error' ? ' is-on' : ''}`} role="alert">
              {status === 'error' ? home2.newsError : ''}
            </p>
            <p className={`j2-newslet-msg is-ok${status === 'success' ? ' is-on' : ''}`} role="status">
              {home2.newsSuccess}
            </p>
            <p className={`j2-newslet-msg${status === 'pending' ? ' is-on' : ''}`} role="status">
              {status === 'pending' ? home2.newsPending : ''}
            </p>
          </form>
        </div>
      </div>
    </footer>
  )
}
