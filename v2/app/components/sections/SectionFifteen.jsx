'use client'
import { useEffect, useState } from 'react'
import './SectionFifteen.css'
import Waves from '../waves/Waves'
import CountrySelector from '../forms/CountrySelector'
import { AnimatePresence, motion } from 'framer-motion'

export default function SectionFifteen ({ text }) {
  const [index, setIndex] = useState(0)
  const currentWord = text.cities[index]
  useEffect(() => {
    const i = setInterval(() => {
      setIndex((i) => (i + 1) % text.cities.length)
    }, 4000)

    return () => {
      clearInterval(i)
    }
  }, [text.cities.length])

  const variants = {
    initial: {
      opacity: 0,
      scale: 0
    },
    enter: {
      opacity: 1,
      scale: 1
    },
    exit: {
      position: 'absolute',
      opacity: 0,
      scale: 0
    }
  }

  return (
    <div className='px-2 md:px-14 lg:px-32 w-full relative'>
      <div className=' flex flex-col align-middle content-center justify-center pb-64 pt-24 md:pb-72 md:pt-32 lg:pb-80 lg:pt-36'>
        <div className='items-center align-middle content-center justify-center flex'>
          <p className='header-invite  text-black  text-5xl md:text-7xl lg:text-8xl text-center font-bold  inline-block relative  self-baseline'>
            {text.header} <br />
            <AnimatePresence>
              <motion.span
                variants={variants}
                initial='initial'
                animate='enter'
                exit='exit'
                transition={{
                  duration: 3,
                  type: 'spring',
                  stiffness: 300,
                  damping: 24
                }}
                className='invite-place text-6xl md:text-8xl lg:text-9xl font-bold inline-block relative w-[max-content] self-baseline overflow-hidden min-h-[60px] text-center'
              >
                <motion.strong
                  className='invite-place text-6xl md:text-8xl lg:text-9xl font-bold inline-block relative w-[max-content] self-baseline mt-2  px-2'
                  variants={variants}
                  initial='initial'
                  animate='enter'
                  exit='exit'
                  key={currentWord}
                  transition={{
                    duration: 3,
                    type: 'spring',
                    stiffness: 300,
                    damping: 24
                  }}
                >
                  {currentWord || text.cities[0]}
                </motion.strong>
                <span className='text-6xl md:text-8xl lg:text-9xl text-black header-invite self-baseline'>?</span>
              </motion.span>
            </AnimatePresence>
          </p>
        </div>

        <p className='invite-text text-lg md:text-2xl mt-12 mb-6 text-center font-semibold'>{text.description}</p>
        <CountrySelector text={text} />
        <Waves />
      </div>
    </div>
  )
}
