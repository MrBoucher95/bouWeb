import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import ProjectGrid from '../components/ProjectGrid'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Portfolio.css'

export default function Portfolio() {
  const { t } = useLanguage()
  const { portfolio, home } = t

  useEffect(() => {
    document.title = portfolio.metaTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', portfolio.metaDescription)
    return () => {
      document.title = t.meta.title
      if (meta) meta.setAttribute('content', t.meta.description)
    }
  }, [portfolio.metaTitle, portfolio.metaDescription, t.meta.title, t.meta.description])

  return (
    <PageShell>
      <header className="mb-hero">
        <p className="mb-news">
          {portfolio.eyebrow}
          <span>{portfolio.title}</span>
        </p>
        <h1 className="mb-title">{portfolio.title}</h1>
        <p className="mb-proof">{portfolio.lead}</p>
      </header>

      <div className="container pb-5">
        <section className="folio-section">
          <ProjectGrid projects={home.projects} />
        </section>
      </div>

      <section className="mb-invite" aria-labelledby="mb-invite-title">
        <div className="container">
          <div className="mb-invite-card">
            <h2 id="mb-invite-title">{portfolio.ctaTitle}</h2>
            <p>{portfolio.ctaText}</p>
            <div className="mb-invite-cta">
              <Link className="mb-btn mb-btn-fill" to="/contact">
                {home.ctaContact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
