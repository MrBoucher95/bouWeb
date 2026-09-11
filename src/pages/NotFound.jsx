import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <main className="page" style={{ paddingTop: '18vh' }}>
      <div className="page-inner">
        <p className="tag eyebrow">{t.notFound.code}</p>
        <h1>{t.notFound.title}</h1>
        <p className="lead" style={{ margin: '1rem 0 2rem' }}>
          {t.notFound.text}
        </p>
        <Link className="btn btn-fill" to="/">
          {t.notFound.back}
        </Link>
      </div>
    </main>
  )
}
