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
      <p className="mb-news">
        {portfolio.eyebrow}
        <span>{portfolio.title}</span>
      </p>
      <header className="mb-hero">
        <h1 className="mb-title">{portfolio.title}</h1>
        <p className="mb-proof">{portfolio.lead}</p>
      </header>

      <div className="container pb-5">
        <section className="folio-section">
          <ProjectGrid projects={home.projects} />
        </section>

        <section className="cta-band">
          <h2>{portfolio.ctaTitle}</h2>
          <p className="lead">{portfolio.ctaText}</p>
          <div className="btn-row">
            <Link className="btn btn-fill" to="/contact">
              {home.ctaContact}
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
