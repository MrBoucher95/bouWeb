export const CONTACT_MAIL = 'mrboucher95@gmail.com'

export function plainText(value) {
  if (typeof value !== 'string') return ''
  if (/<\/?[a-z][\s\S]*?>/i.test(value) || value.includes('data-discover') || value.includes('&quot;')) {
    return ''
  }
  return value
}

export class MailError extends Error {
  constructor(code) {
    super(code)
    this.code = code
  }
}

export async function sendMessage(form) {
  const name = form.name.trim()
  const email = form.email.trim()
  const subject = form.subject.trim()
  const message = form.message.trim()
  if (!name || !email || !subject || !message) throw new MailError('incomplete')

  const key = import.meta.env.VITE_WEB3FORMS_KEY
  let response
  try {
    response = key
      ? await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: key,
            name,
            email,
            subject,
            message,
            from_name: name,
            replyto: email,
          }),
        })
      : await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_MAIL)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _replyto: email,
            _subject: subject,
            _template: 'box',
            _captcha: 'false',
          }),
        })
  } catch {
    throw new MailError('network')
  }

  const data = await response.json().catch(() => ({}))
  const ok = data.success === true || data.success === 'true'
  if (response.ok && ok) return
  if (/activat/i.test(String(data.message || ''))) throw new MailError('activate')
  throw new MailError('send')
}
