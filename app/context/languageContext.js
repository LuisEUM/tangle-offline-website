'use client'
import { usePathname } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import textData from '../data/text.json'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const pathname = usePathname()
  const [text, setText] = useState(null)
  const [menu, setMenu] = useState(null)

  useEffect(() => {
    const finalText = getText(pathname, textData)

    setText(finalText)
    console.log(text)
  }, [])

  if ((text || menu) === null) {
    return (<p>loading...</p>)
  }

  return <LanguageContext.Provider value={{ text }}>{children}</LanguageContext.Provider>
}

function getText (pathname, textData) {
  switch (pathname) {
    case '/en':
      return textData.en
    case '/es':
      return textData.es
    case '/nl':
      return textData.nl
    default:
      return textData.en
  }
}
