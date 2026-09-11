import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { copy } from '../content/copy'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('boo-lang') || 'fr')

  useEffect(() => {
    localStorage.setItem('boo-lang', lang)
    document.documentElement.lang = lang
    document.title = copy[lang].meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', copy[lang].meta.description)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: copy[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
