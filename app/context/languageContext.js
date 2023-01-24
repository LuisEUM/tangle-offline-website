'use client'
import { createContext } from 'react'
import textDataAll from '../data/text.json'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const textData = textDataAll

  return <LanguageContext.Provider value={{ textData }}>{children}</LanguageContext.Provider>
}
