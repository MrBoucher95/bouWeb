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
    document.title = data.metaTitle || `${data.title} — ${t.meta.title}`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', data.metaDescription || t.meta.description)
    return () => {
      document.title = t.meta.title
      if (meta) meta.setAttribute('content', t.meta.description)
    }
  }, [data, t.meta.title, t.meta.description])

  if (!data) return <Navigate to="/" replace />

  const group = data.groups[active]
  const contactLabel = data.actions?.[1] ?? t.home.ctaContact
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: data.title,
        description: data.metaDescription || data.intro,
        provider: {
          '@type': 'Person',
          name: 'Mathieu Boucher',
          url: typeof window !== 'undefined' ? window.location.origin : undefined,
        },
        areaServed: 'Québec',
      },
      data.faq?.length
        ? {
            '@type': 'FAQPage',
            mainEntity: data.faq.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }
        : null,
    ].filter(Boolean),
  }

  return (
    <PageShell className="mb-fit mb-fit-2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
        {data.intro || data.body?.length ? (
          <section className="sv-article" aria-labelledby="sv-article-title">
            <h2 id="sv-article-title">{data.sectionLead || data.sectionTitle}</h2>
            {data.intro ? <p className="sv-article-lead">{data.intro}</p> : null}
            {(data.body || []).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ) : null}

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

        {data.process?.length ? (
          <section className="sv-article sv-process">
            <h2>{data.processTitle}</h2>
            {data.process.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ) : null}

        {data.faq?.length ? (
          <section className="sv-faq">
            <h2>{t.blog.faq}</h2>
            {data.faq.map((item) => (
              <div className="sv-faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        ) : null}
      </div>

      <section className="mb-invite" aria-labelledby="mb-invite-title">
        <div className="container">
          <div className="mb-invite-card">
            <h2 id="mb-invite-title">{data.ctaTitle}</h2>
            <p>{data.ctaText}</p>
            <div className="mb-invite-cta">
              <Link className="mb-btn mb-btn-fill" to="/contact">
                {contactLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
