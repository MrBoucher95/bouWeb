import { useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Faq.css'

export default function Faq() {
  const { t } = useLanguage()
  const { faq, home } = t

  useLayoutEffect(() => {
    const snap = () => {
      const ratio = window.devicePixelRatio || 1
      document.querySelectorAll('.faq-mark').forEach((mark) => {
        mark.style.translate = '0 -50%'
        const { top } = mark.getBoundingClientRect()
        const shift = (Math.round(top * ratio) - top * ratio) / ratio
        mark.style.translate = `0 calc(-50% + ${shift}px)`
      })
    }
    snap()
    window.addEventListener('resize', snap)
    return () => window.removeEventListener('resize', snap)
  }, [faq.groups])

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
          {faq.groups.map((group) => (
            <section className="faq-group" id={`faq-${group.id}`} key={group.id}>
              <h2>{group.title}</h2>
              {group.items.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>
                    {item.q}
                    <span className="faq-mark" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </summary>
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
