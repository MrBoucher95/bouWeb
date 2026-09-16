import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { estimatorConfig } from '../content/copy'
import { useLanguage } from '../context/LanguageContext'

const serviceIds = Object.keys(estimatorConfig)

function money(value, lang) {
  return new Intl.NumberFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function Estimate() {
  const { lang, t } = useLanguage()
  const [service, setService] = useState(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)

  const config = service ? estimatorConfig[service] : null
  const question = config?.questions[step]

  const total = useMemo(() => {
    if (!config) return 0
    return config.questions.reduce((sum, item) => {
      const value = answers[item.id]
      if (!value) return sum
      const selected = item.multi ? value : [value]
      return (
        sum +
        item.options
          .filter((option) => selected.includes(option.id))
          .reduce((inner, option) => inner + option.price, 0)
      )
    }, 0)
  }, [answers, config])

  const chooseService = (id) => {
    setService(id)
    setStep(0)
    setAnswers({})
    setDone(false)
  }

  const toggle = (optionId) => {
    if (!question) return
    setAnswers((current) => {
      if (question.multi) {
        const list = current[question.id] || []
        return {
          ...current,
          [question.id]: list.includes(optionId)
            ? list.filter((id) => id !== optionId)
            : [...list, optionId],
        }
      }
      return { ...current, [question.id]: optionId }
    })
  }

  const canContinue = question
    ? question.multi
      ? (answers[question.id] || []).length > 0
      : Boolean(answers[question.id])
    : false

  const reset = () => {
    setService(null)
    setStep(0)
    setAnswers({})
    setDone(false)
  }

  return (
    <PageShell>
      <p className="mb-news">
        {t.nav.estimate}
        <span>{t.estimate.title}</span>
      </p>
      <header className="mb-hero">
        <h1 className="mb-title">{t.estimate.title}</h1>
        <p className="mb-proof">{t.estimate.lead}</p>
      </header>

      <div className="container pb-5">
        <div className="estimator">
          {!service ? (
            <>
              <h2>{t.estimate.which}</h2>
              <div className="option-list">
                {serviceIds.map((id) => {
                  const item = estimatorConfig[id]
                  return (
                    <button key={id} type="button" className="option" onClick={() => chooseService(id)}>
                      <span>{t.nav[item.labelKey]}</span>
                      <small>
                        {t.estimate.from} {money(item.from, lang)}
                      </small>
                    </button>
                  )
                })}
              </div>
            </>
          ) : done ? (
            <>
              <p className="eyebrow">{t.estimate.yours}</p>
              <p className="total">{money(total, lang)}</p>
              <p className="lead">{t.estimate.disclaimer}</p>
              <div className="btn-row mt-4">
                <Link className="btn btn-fill" to="/contact">
                  {t.estimate.discuss}
                </Link>
                <button type="button" className="btn btn-fill" onClick={reset}>
                  {t.estimate.again}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="step-label eyebrow">
                {t.estimate.step} {step + 2} / {config.questions.length + 1}
              </p>
              <h2>{question.title[lang]}</h2>
              {question.multi ? <p className="lead">{t.estimate.selectAll}</p> : null}
              <div className="option-list">
                {question.options.map((option) => {
                  const selected = question.multi
                    ? (answers[question.id] || []).includes(option.id)
                    : answers[question.id] === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={`option${selected ? ' active' : ''}`}
                      onClick={() => toggle(option.id)}
                    >
                      <span>{option.label[lang]}</span>
                      <small>{option.included ? t.estimate.included : money(option.price, lang)}</small>
                    </button>
                  )
                })}
              </div>
              <div className="btn-row">
                <button
                  type="button"
                  className="btn btn-fill"
                  onClick={() => (step === 0 ? reset() : setStep((value) => value - 1))}
                >
                  {t.estimate.prev}
                </button>
                <button
                  type="button"
                  className="btn btn-fill"
                  disabled={!canContinue}
                  onClick={() =>
                    step === config.questions.length - 1 ? setDone(true) : setStep((value) => value + 1)
                  }
                >
                  {step === config.questions.length - 1 ? t.estimate.see : t.estimate.next}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </PageShell>
  )
}
