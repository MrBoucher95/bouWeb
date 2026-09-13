import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ServiceHero from '../components/ServiceHero'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Service.css'

export default function ServicePage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const data = t.services[slug]
  const [active, setActive] = useState(0)

  useEffect(() => {
    setActive(0)
  }, [slug])

  if (!data) return <Navigate to="/" replace />

  const group = data.groups[active]
  const estimateLabel = data.actions?.[0] ?? t.nav.estimate
  const contactLabel = data.actions?.[1] ?? t.home.ctaContact
  const banner = data.banner

  return (
    <main className="sv-page">
      <ServiceHero
        title={data.title}
        subtitle={data.subtitle}
        intro={data.intro}
        actions={[
          { to: '/estimation', label: estimateLabel, fill: true },
          { to: '/contact', label: contactLabel },
        ]}
        banner={banner}
      />

      <div className="page">
        <div className="page-inner">
          <section className="sv-split">
            <nav className="sv-nav" aria-label={data.sectionTitle}>
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
            <article className="sv-panel">
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

          <section className="cta-band">
            <h2>{data.ctaTitle}</h2>
            <p className="lead">{data.ctaText}</p>
            <Link className="btn btn-fill" to="/contact">
              {t.home.ctaContact}
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
