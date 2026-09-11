import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const links = [
  { to: '/', key: 'home' },
  { to: '/a-propos', key: 'about' },
  { to: '/services/imprime', key: 'print' },
  { to: '/services/numerique', key: 'digital' },
  { to: '/services/web', key: 'web' },
  { to: '/services/applications', key: 'apps' },
  { to: '/services/drone', key: 'drone' },
  { to: '/estimation', key: 'estimate' },
  { to: '/contact', key: 'contact' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <nav className="footer-links">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {t.nav[link.key]}
          </Link>
        ))}
      </nav>
      <p>{t.footer}</p>
    </footer>
  )
}
