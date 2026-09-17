import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Faq.css'

export default function Faq() {
  const { t } = useLanguage()
  const { faq, home } = t

  useEffect(() => {
    document.title = faq.metaTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', faq.metaDescription)
    return () => {
      document.title = t.meta.title
      if (meta) meta.setAttribute('content', t.meta.description)
    }
  }, [faq.metaTitle, faq.metaDescription, t.meta.title, t.meta.description])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.groups.flatMap((group) =>
      group.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    ),
  }

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="mb-hero">
        <p className="mb-news">
          {faq.eyebrow}
          <span>{faq.tag}</span>
        </p>
        <h1 className="mb-title">{faq.title}</h1>
        <p className="mb-proof">{faq.lead}</p>
      </header>

      <div className="container pb-5">
        <div className="faq-page">
          <nav className="faq-jump" aria-label={faq.title}>
            {faq.groups.map((group, index) => (
              <a key={group.id} href={`#faq-${group.id}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {group.title}
              </a>
            ))}
          </nav>

          {faq.groups.map((group, index) => (
            <section className="faq-group" id={`faq-${group.id}`} key={group.id}>
              <p className="mb-news">
                {String(index + 1).padStart(2, '0')}
                <span>{group.title}</span>
              </p>
              <h2>{group.title}</h2>
              {group.items.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </section>
          ))}
        </div>
      </div>

      <section className="mb-invite" aria-labelledby="mb-invite-title">
        <div className="container">
          <div className="mb-invite-card">
            <h2 id="mb-invite-title">{faq.ctaTitle}</h2>
            <p>{faq.ctaText}</p>
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
