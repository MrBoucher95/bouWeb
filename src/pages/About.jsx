import PageShell from '../components/PageShell'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <PageShell>
      <header className="mb-hero">
        <p className="mb-news">
          {about.eyebrow}
          <span>{about.role}</span>
        </p>
        <h1 className="mb-title">{about.name}</h1>
      </header>
      <div className="container pb-5">
        <section className="mb-content">
          <h2>{about.title}</h2>
          <p className="mb-proof about-values">{about.values}</p>
          <div className="about-copy mb-copy">
            <p>{about.p1}</p>
            <p>{about.p2}</p>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
