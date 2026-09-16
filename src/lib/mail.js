export const CONTACT_MAIL = 'sesese77790@gmail.com'

export function sendMailto(form) {
  const subject = form.subject.trim()
  const body = `${form.name.trim()}\n${form.email.trim()}\n\n${form.message.trim()}`
  window.location.href = `mailto:${CONTACT_MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
