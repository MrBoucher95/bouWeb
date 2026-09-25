import { useEffect, useLayoutEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookMessenger, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import taping from '../assets/video/taping.mp4'

export const socials = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    id: 'messenger',
    label: 'Messenger',
    href: 'https://www.messenger.com/',
    icon: <FontAwesomeIcon icon={faFacebookMessenger} />,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/math-boucher/',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
]

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
  const { nav, home, home2 } = t
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
          <div className="mb-newslet-cta">
            <h2>{home2.formTitle}</h2>
            <p>{home2.formLead}</p>
            <Link className="mb-newslet-submit" to="/contact">
              {home.ctaContact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
