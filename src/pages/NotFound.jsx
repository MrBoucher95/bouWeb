import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useLanguage } from '../context/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <PageShell>
      <header className="mb-hero">
        <p className="mb-news">
          {t.notFound.code}
          <span>{t.nav.home}</span>
        </p>
        <h1 className="mb-title">{t.notFound.title}</h1>
        <p className="mb-proof">{t.notFound.text}</p>
        <div className="mb-actions">
          <Link className="mb-btn mb-btn-fill" to="/">
            {t.notFound.back}
          </Link>
        </div>
      </header>
    </PageShell>
  )
}
