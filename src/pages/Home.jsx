import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import PitchSection from '../components/PitchSection'
import QuoteSwiper from '../components/QuoteSwiper'
import ServicesSection from '../components/ServicesSection'
import WorkGallery from '../components/WorkGallery'
import { useLanguage } from '../context/LanguageContext'
import { PROJECT_IMAGES } from '../lib/projectImages'

export default function Home() {
  const { t } = useLanguage()
  const { home, home2 } = t

  useEffect(() => {
    document.title = t.meta.title
  }, [t.meta.title])

  return (
    <PageShell>
      <header className="mb-hero">
        <p className="mb-news">{home2.kicker}</p>
        <h1 className="mb-title">{home.name}</h1>
        <p className="mb-lead">{home2.lead}</p>
        <div className="mb-actions">
          <a className="mb-btn mb-btn-fill" href="#mb-services">
            {home2.ctaPrimary}
          </a>
        </div>
        <p className="mb-proof">{home2.proof}</p>
      </header>

      <WorkGallery images={PROJECT_IMAGES} />

      <PitchSection />

      <ServicesSection />

      <QuoteSwiper
        quotes={home.quotes}
        eyebrow={home.quotesEyebrow}
        title={home.quotesTitle}
        prevLabel={home.quotesPrev}
        nextLabel={home.quotesNext}
      />

      <section className="mb-invite" aria-labelledby="mb-invite-title">
        <div className="container">
          <div className="mb-invite-card">
            <h2 id="mb-invite-title">{home2.footerTitle}</h2>
            <p>{home2.footerText}</p>
            <div className="mb-invite-cta">
              <Link className="mb-btn mb-btn-fill" to="/estimation">
                {home2.footerCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
