import { useEffect, useLayoutEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import ServiceHero from '../components/ServiceHero'
import appVideo from '../assets/video/app.mp4'
import printVideo from '../assets/video/print.mp4'
import numeriqueVideo from '../assets/video/numerique.mp4'
import videoVideo from '../assets/video/video.mp4'
import printStill from '../assets/img/print01.jpg'
import printFace from '../assets/img/print02.jpg'
import printShot from '../assets/img/print03.jpg'
import appWatch from '../assets/img/app01.jpg'
import appBefore from '../assets/img/app02.jpg'
import appEssence from '../assets/img/app03.jpg'
import webWatch from '../assets/img/web03.jpg'
import webBefore from '../assets/img/web02.jpg'
import webEssence from '../assets/img/web01.jpg'
import videoWatch from '../assets/img/video01.jpg'
import videoBefore from '../assets/img/video02.jpg'
import videoEssence from '../assets/img/video03.jpg'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Service.css'
import '../assets/css/Faq.css'
import '../assets/css/NumeriqueFit.css'

const PAGE_VIDEO = {
  applications: appVideo,
  imprime: printVideo,
  numerique: numeriqueVideo,
  video: videoVideo,
}

const PAGE_SHOTS = {
  imprime: { a: printFace, b: printShot, c: printStill },
  applications: { a: appBefore, b: appEssence, c: appWatch },
  web: { a: webBefore, b: webEssence, c: webWatch },
  video: { a: videoBefore, b: videoEssence, c: videoWatch },
}

export default function ServicePage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const data = t.services[slug]
  const [active, setActive] = useState(0)

  useEffect(() => {
    setActive(0)
  }, [slug])

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
  }, [data?.faq])

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
        <p className="mb-proof">{data.subtitle}</p>
      </header>
      <ServiceHero
        mediaOnly
        showBanner={false}
        video={PAGE_VIDEO[slug]}
        loopAt={PAGE_VIDEO[slug] ? 15 : undefined}
        shotA={PAGE_SHOTS[slug]?.a}
        shotB={PAGE_SHOTS[slug]?.b}
        shotC={PAGE_SHOTS[slug]?.c}
      />
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
          <div className="col-lg-8">
            <article className="sv-panel">
              <h2>{group.title}</h2>
              {group.text ? <p className="sv-text">{group.text}</p> : null}
              <ul className="sv-plain">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {data.process?.length ? (
          <section className="sv-article sv-process">
            <h2>{data.processTitle}</h2>
            {data.process.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ) : null}

        {data.list?.length ? (
          <section className="sv-index">
            <h2>{data.listTitle}</h2>
            <ul className="sv-index-list">
              {data.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {data.faq?.length ? (
          <section className="sv-faq">
            <h2>{t.blog.faq}</h2>
            {data.faq.map((item) => (
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
