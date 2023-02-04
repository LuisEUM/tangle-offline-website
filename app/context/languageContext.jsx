'use client'
import { createContext, useEffect, useRef, useState } from 'react'
import textData from '../data/text.json'
import imageData from '../data/images.json'
import LettersAnimation from '../components/ui/animation/lettersAnimation'
import { AnimatePresence, LayoutGroup, motion, useInView } from 'framer-motion'
import { getCookie, setCookie } from 'cookies-next'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [languageCookie, setLanguageCookie] = useState(getCookie('language'))
  const [text, setText] = useState(null)
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const container = {
    hidden: { opacity: 0 },
    show: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.25 * i
      }
    })
  }

  const child = {
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: [0.6, 0.1, -0.05, 0.95],
        duration: 3
      }
    },
    hidden: {
      opacity: 0,
      scale: 0,
      y: 200
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 0,
      x: 0
    }
  }

  useEffect(() => {
    if (getCookie('language') || languageCookie === undefined) {
      setCookie('language', 'en')
    }

    const finalText = getText(languageCookie, textData)
    setText(finalText)
  }, [languageCookie])

  return (
    <LayoutGroup>
      <AnimatePresence>
        {(loading || (text === null))
          ? (
            <motion.div
              key='loader'
              className='h-screen grid grid-cols-1 align-middle justify-around overflow-hidden'
              variants={container}
              initial='hidden'
              animate={isInView ? 'show' : 'hidden'}
              ref={ref}
            >
              <motion.img
                layout
                src={imageData.logos[0]}
                alt=''
                className='w-1/4 self-end mx-auto '
                variants={child}
                layoutId='navbarLogo'
                onAnimationComplete={() => { setLoading(false) }}
                onLayoutAnimationComplete={() => console.log('Done the animation')}
              />
              <motion.div
                className='max-w-full bg-transparent'
                variants={child}
                key='Loading'
                initial='hidden'
                animate='show'
                exit='exit'
              >
                <LettersAnimation
                  className='text-center font-bold bg-transparent'
                  text='Loading...'
                  tag='p'
                />
              </motion.div>
            </motion.div>
            )
          : (
            <LanguageContext.Provider value={{ text, setLanguageCookie }}>{children}</LanguageContext.Provider>
            )}
      </AnimatePresence>
    </LayoutGroup>
  )

  // return <LanguageContext.Provider value={{ text }}>{children}</LanguageContext.Provider>
}

function getText (languageCookie, textData) {
  if (languageCookie.includes('en')) {
    return textData.en
  } else if (languageCookie.includes('es')) {
    return textData.es
  } else if (languageCookie.includes('nl')) {
    return textData.nl
  } else {
    return textData.en
  }
}
