import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { estimatorConfig } from '../content/copy'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Estimate.css'

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
  const { estimate } = t
  const [service, setService] = useState(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)

  const config = service ? estimatorConfig[service] : null
  const question = config?.questions[step]
  const questionCount = config?.questions.length ?? 0

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

  const goQuestion = (index) => {
    if (!config || index > step) return
    setDone(false)
    setStep(index)
  }

  const actions = done ? (
    <div className="est-actions">
      <Link className="mb-btn mb-btn-fill" to="/contact">
        {estimate.discuss}
      </Link>
      <button type="button" className="mb-btn" onClick={reset}>
        {estimate.again}
      </button>
    </div>
  ) : service ? (
    <div className="est-actions">
      <button type="button" className="mb-btn" onClick={() => (step === 0 ? reset() : setStep((value) => value - 1))}>
        {estimate.prev}
      </button>
      <button
        type="button"
        className="mb-btn mb-btn-fill"
        disabled={!canContinue}
        onClick={() => (step === questionCount - 1 ? setDone(true) : setStep((value) => value + 1))}
      >
        {step === questionCount - 1 ? estimate.see : estimate.next}
      </button>
    </div>
  ) : null

  const body = !service ? (
    <>
      <h2>{estimate.which}</h2>
      <div className="est-options">
        {serviceIds.map((id) => {
          const item = estimatorConfig[id]
          return (
            <button key={id} type="button" className="est-opt" onClick={() => chooseService(id)}>
              <span>{t.nav[item.labelKey]}</span>
              <small>
                {estimate.from} {money(item.from, lang)}
              </small>
            </button>
          )
        })}
      </div>
    </>
  ) : done ? (
    <>
      <p className="tag">{estimate.yours}</p>
      <p className="est-total">{money(total, lang)}</p>
      <p className="est-note">{estimate.disclaimer}</p>
      {actions}
    </>
  ) : (
    <>
      <p className="est-kicker">
        {estimate.step} {step + 2} / {questionCount + 1}
      </p>
      <h2>{question.title[lang]}</h2>
      {question.multi ? <p className="est-note">{estimate.selectAll}</p> : null}
      <div className="est-options">
        {question.options.map((option) => {
          const selected = question.multi
            ? (answers[question.id] || []).includes(option.id)
            : answers[question.id] === option.id
          return (
            <button
              key={option.id}
              type="button"
              className={`est-opt${selected ? ' is-on' : ''}`}
              onClick={() => toggle(option.id)}
            >
              <span>{option.label[lang]}</span>
              <small>{option.included ? estimate.included : money(option.price, lang)}</small>
            </button>
          )
        })}
      </div>
      {actions}
    </>
  )

  return (
    <PageShell>
      <header className="mb-hero est-hero">
        <p className="mb-news">
          {t.nav.estimate}
          <span>{estimate.title}</span>
        </p>
        <h1 className="mb-title">{estimate.title}</h1>
        <p className="mb-proof">{estimate.lead}</p>
      </header>

      <div className="container pb-5">
        <div className="est-shell">
          <aside className="est-rail">
            <p className="tag">{estimate.step}</p>
            <ol>
              <li>
                <button type="button" className={!service ? 'is-on' : ''} onClick={reset}>
                  {estimate.which}
                </button>
              </li>
              {config
                ? config.questions.map((item, index) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={service && !done && step === index ? 'is-on' : ''}
                        disabled={!service || index > step}
                        onClick={() => goQuestion(index)}
                      >
                        {item.title[lang]}
                      </button>
                    </li>
                  ))
                : null}
              {config ? (
                <li>
                  <button type="button" className={done ? 'is-on' : ''} disabled={!done} onClick={() => setDone(true)}>
                    {estimate.yours}
                  </button>
                </li>
              ) : null}
            </ol>
            {service ? (
              <p className="est-rail-total">
                {estimate.total}
                <strong>{money(total, lang)}</strong>
              </p>
            ) : null}
          </aside>
          <div className="est-main">{body}</div>
        </div>
      </div>
    </PageShell>
  )
}
