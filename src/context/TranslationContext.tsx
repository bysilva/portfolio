// TranslationContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react'
import translations from '@/utils/translations'

type Locale = 'en' | 'es'
type TranslationKeys = keyof (typeof translations)[Locale]

interface TranslationContextType {
  locale: Locale
  changeLanguage: (newLocale: Locale) => void
  t: (key: TranslationKeys) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
)

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedLocale = (localStorage.getItem('locale') as Locale) || 'en'
  const [locale, setLocale] = useState<Locale>(storedLocale)

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = (key: TranslationKeys) => translations[locale][key]

  return (
    <TranslationContext.Provider value={{ locale, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
