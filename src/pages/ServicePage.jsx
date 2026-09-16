import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import ServiceHero from '../components/ServiceHero'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Service.css'
import '../assets/css/NumeriqueFit.css'

export default function ServicePage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const data = t.services[slug]
  const [active, setActive] = useState(0)

  useEffect(() => {
    setActive(0)
  }, [slug])

  useEffect(() => {
    if (!data) return
    document.title = `${data.title} — ${t.meta.title}`
  }, [data, t.meta.title])

  if (!data) return <Navigate to="/" replace />

  const group = data.groups[active]
  const contactLabel = data.actions?.[1] ?? t.home.ctaContact

  return (
    <PageShell className="mb-fit mb-fit-2">
      <header className="mb-hero">
        <p className="mb-news">
          {t.nav.services}
          <span>{data.title}</span>
        </p>
        <h1 className="mb-title">
          {data.title}.
          <span>{data.titleAccent}</span>
        </h1>
        <div className="mb-actions">
          <a className="mb-btn mb-btn-fill" href="#mb-fit-split">
            {data.sectionTitle}
          </a>
        </div>
        <p className="mb-proof">{data.subtitle}</p>
      </header>
      <ServiceHero mediaOnly showBanner={false} />
      <div className="container py-5">
        <section id="mb-fit-split" className="sv-split row g-4 align-items-start">
          <nav className="sv-nav col-lg-4" aria-label={data.sectionTitle}>
            {data.groups.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === active ? 'is-on' : ''}
                onClick={() => setActive(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.title}
              </button>
            ))}
          </nav>
          <article className="sv-panel col-lg-8">
            <h2>{group.title}</h2>
            <p className="sv-text">{group.text}</p>
            <ul className="sv-plain">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="sv-index">
          <h2>{data.listTitle}</h2>
          <ul className="sv-index-list">
            {data.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-fit-cta">
          <h2>{data.ctaTitle}</h2>
          <p>{data.ctaText}</p>
          <Link className="mb-btn mb-btn-fill" to="/contact">
            {contactLabel}
          </Link>
        </section>
      </div>
    </PageShell>
  )
}
