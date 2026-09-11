import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const fields = ['name', 'email', 'subject', 'message']

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t
  const [step, setStep] = useState(0)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const labels = [contact.name, contact.emailField, contact.subject, contact.message]
  const placeholders = [contact.namePh, contact.emailPh, contact.subjectPh, contact.messagePh]
  const field = fields[step]

  const update = (value) => setForm((current) => ({ ...current, [field]: value }))

  const submit = (event) => {
    event.preventDefault()
    if (step < fields.length - 1) {
      setStep((value) => value + 1)
      return
    }
    setSent(true)
  }

  return (
    <main className="page" style={{ paddingTop: '7rem' }}>
      <div className="page-inner">
        <p className="tag eyebrow">{contact.eyebrow}</p>
        <h1>{contact.title}</h1>

        <div className="contact-grid section">
          <aside className="info-card">
            <div>
              <p className="eyebrow">{contact.addressLabel}</p>
              <p>{contact.address}</p>
              <p>{contact.postal}</p>
            </div>
            <div>
              <p className="eyebrow">{contact.phoneLabel}</p>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </div>
            <div>
              <p className="eyebrow">{contact.emailLabel}</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </aside>

          <form className="form" onSubmit={submit}>
            <p className="step-label eyebrow">
              {t.estimate.step} {step + 1} / {fields.length}
            </p>
            {sent ? (
              <p className="lead">{contact.sent}</p>
            ) : (
              <>
                <label className="field">
                  <span className="eyebrow">{labels[step]}</span>
                  {field === 'message' ? (
                    <textarea
                      required
                      value={form.message}
                      placeholder={placeholders[step]}
                      onChange={(event) => update(event.target.value)}
                    />
                  ) : (
                    <input
                      required
                      type={field === 'email' ? 'email' : 'text'}
                      value={form[field]}
                      placeholder={placeholders[step]}
                      onChange={(event) => update(event.target.value)}
                    />
                  )}
                </label>
                <div className="btn-row">
                  {step > 0 ? (
                    <button type="button" className="btn" onClick={() => setStep((value) => value - 1)}>
                      {contact.prev}
                    </button>
                  ) : null}
                  <button type="submit" className="btn btn-fill">
                    {step === fields.length - 1 ? contact.send : contact.next}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </main>
  )
}
