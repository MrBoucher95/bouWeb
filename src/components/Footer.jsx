import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const socials = [
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

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="footer-copy">
        <p>{t.footer}</p>
        <Link to="/blog">{t.nav.blog}</Link>
      </div>
      <ul className="footer-socials">
        {socials.map((social) => (
          <li key={social.id}>
            <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
