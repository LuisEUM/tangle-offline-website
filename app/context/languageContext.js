'use client'
import { usePathname } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import textData from '../data/text.json'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const pathname = usePathname()
  const [text, setText] = useState(null)

  useEffect(() => {
    const finalText = getText(pathname, textData)

    setText(finalText)
  }, [])

  if ((text) === null) {
    return (<p>loading...</p>)
  }

  return <LanguageContext.Provider value={{ text }}>{children}</LanguageContext.Provider>
}

function getText (pathname, textData) {
  if (pathname.includes('/es')) {
    return textData.es
  } else if (pathname.includes('/es')) {
    return textData.es
  } else if (pathname.includes('/nl')) {
    return textData.nl
  } else {
    return textData.en
  }
}
