import { useEffect } from 'react'
import { LogoPlane, useLogoScroll } from '../components/LogoMark'
import { useLanguage } from '../context/LanguageContext'
import mark from '../assets/img/mb_logo.svg'
import '../assets/css/Logo.css'

export default function Logo() {
  const { t } = useLanguage()
  const { logo } = t
  const { openingRef, progress, entered } = useLogoScroll()

  useEffect(() => {
    document.title = logo.metaTitle
    return () => {
      document.title = t.meta.title
    }
  }, [logo.metaTitle, t.meta.title])

  return (
    <div className={`logo-page${entered ? ' is-in' : ''}`} style={{ '--p': progress }}>
      <div className="logo-pin">
        <LogoPlane />

        <header className="logo-opening" ref={openingRef}>
          <h1 className="logo-opening-title">{logo.title}</h1>
        </header>

        <section className="logo-chapter">
          <div className="logo-rule" />
          <div className="logo-copy">
            <h2>{logo.lead}</h2>
          </div>
        </section>

        <section className="logo-chapter">
          <div className="logo-rule" />
          <div className="logo-copy">
            <p className="logo-note">{logo.systemEyebrow}</p>
            <h3>{logo.systemTitle}</h3>
            <p>{logo.systemText}</p>
          </div>
        </section>
      </div>

      <main className="logo-body">
        <section className="logo-chapter logo-chapter-release">
          <div className="logo-rule" />
          <div className="logo-copy">
            <p className="logo-pill">{logo.versionEyebrow}</p>
            <h3>{logo.versionTitle}</h3>
            <p>{logo.versionText}</p>
          </div>
        </section>

        <section className="logo-chapter logo-chapter-end">
          <div className="logo-rule" />
          <div className="logo-copy logo-copy-wide">
            <p className="logo-pill">{logo.useEyebrow}</p>
            <h3>{logo.useTitle}</h3>
            <p>{logo.useText}</p>
            <ul className="logo-rules">
              {logo.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
            <div className="logo-pair">
              <figure className="logo-swatch dark">
                <img src={mark} alt="" />
              </figure>
              <figure className="logo-swatch light">
                <img src={mark} alt="" />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
