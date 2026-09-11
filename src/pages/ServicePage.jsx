import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function ServicePage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const data = t.services[slug]

  if (!data) return <Navigate to="/" replace />

  return (
    <main className="page" style={{ paddingTop: '7rem' }}>
      <div className="page-inner">
        <p className="tag eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p className="role" style={{ margin: '1rem 0 1.4rem', color: 'var(--sand)' }}>
          {data.subtitle}
        </p>
        <p className="lead">{data.intro}</p>
        {data.actions ? (
          <div className="btn-row" style={{ marginTop: '1.6rem' }}>
            <Link className="btn btn-fill" to="/estimation">
              {data.actions[0]}
            </Link>
            <Link className="btn" to="/contact">
              {data.actions[1]}
            </Link>
          </div>
        ) : null}

        <section className="section">
          <div className="section-head">
            <h2>{data.sectionTitle}</h2>
            {data.sectionLead ? <p className="lead">{data.sectionLead}</p> : null}
          </div>
          <div className="group-grid">
            {data.groups.map((group) => (
              <article key={group.title} className="group-card">
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>{data.listTitle}</h3>
          <ul className="chips">
            {data.list.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
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
    </main>
  )
}
