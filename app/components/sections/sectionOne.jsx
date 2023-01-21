'use client'
import { motion } from 'framer-motion'
import HorizonatalLine from '../ui/progress/horizonatalLine'
import LettersAnimation from '../ui/animation/lettersAnimation'
import SectionAnimation from '../ui/animation/sectionsAnimation'
import WordsAnimation from '../ui/animation/wordsAnimation'
import ButtonApps from '../ui/buttons/buttonApps'
import CurveLineWithVertical from '../ui/progress/curveLineWithVertical'
import SectionTwo from './SectionTwo'
import { TaskContext } from '../../context/languageContext'
import { useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SectionOne () {
  const { textData } = useContext(TaskContext)
  const pathname = usePathname()

  useEffect(() => {
    const finalText = getText(pathname, textData)
    console.log(finalText)
  }, [])

  const titleVariants = {
    hidden: {
      scale: 0.1,
      opacity: 0,
      blur: '5px'
    },
    visible: {
      scale: 1,
      opacity: 1,
      blur: '0px',
      transition: {
        // delayChildren: 0.2,
        staggerChildren: 3,
        staggerDirection: 1
      }
    }
  }

  const fadeInAnimation = {
    hidden: {
      opacity: 0,
      blur: '5px'
    },
    visible: {
      opacity: 1,
      blur: '0px',
      transition: {
        // delayChildren: 0.2,
        staggerChildren: 1,
        staggerDirection: 1
      }
    }
  }

  const fadeInAnimationLong = {
    hidden: {
      opacity: 0,
      blur: '5px'
    },
    visible: {
      opacity: 1,
      blur: '0px',
      transition: {
        // delayChildren: 0.2,
        staggerChildren: 5,
        staggerDirection: 1
      }
    }
  }

  const child = {
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div variants={fadeInAnimationLong} initial='hidden' animate='visible' className='grid grid-cols-1 w-full '>
      <motion.div variants={fadeInAnimation} className='z-40 pt-[36rem] md:pt[42rem] lg:pt-96  bg-no-repeat lg:bg-right bg-center bg-cover bg-hero-mobile  lg:bg-hero-desktop '>
        <motion.div variants={titleVariants} initial='hidden' animate='visible' className='w-full  '>
          <motion.div variants={fadeInAnimation} className=' px-14 md:px-24 lg:px-40 max-w-full'>
            {/* <motion.div variants={fadeInAnimation} className='max-w-full '>
              <LettersAnimation className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-title' text='Tangle' tag='h1' />
            </motion.div> */}
            <motion.div>
              <LettersAnimation className='text-4xl md:text-6xl lg:text-7xl font-title' text='The offline <br/> world wide web' tag='h2' />
            </motion.div>
            <motion.div className='w-4/5 md:w-3/4 lg:w-1/2 mt-5 mb-12'>
              <WordsAnimation className='font-normal text-base  md:text-2xl lg:text-3xl font-body' text='A real-life social network to meet people, discover your city, and engage in offline.' tag='p' />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInAnimation} className='flex flex-row align-top items-start '>

            <motion.div variants={fadeInAnimation} className='relative mt-10 z-50 px-7 md:px-[4.75rem] lg:px-[9.25rem] max-w-full'>
              <motion.div variants={child} className=' flex ml-12 -mb-12 gap-4 align-top items-start absolute -top-6  z-10  '>
                <ButtonApps type='apple' />
                <ButtonApps />
              </motion.div>
              <motion.div variants={fadeInAnimation} className='flex'>
                <motion.div className='max-w-[42px] h-[150px]'>
                  <CurveLineWithVertical color='rgba(0,173,228,0.8)' />
                </motion.div>
                <motion.div className='-mt-[1px]'>
                  <HorizonatalLine heigth={42} width={250} color='rgba(0,173,228,0.8)' />
                </motion.div>
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>
        <motion.div variants={fadeInAnimation} className='-mt-96 h-96 bg-gradient-to-b from-transparent to-tangle-rich-black-FOGBRA-29' />

      </motion.div>

      <SectionAnimation>
        <SectionTwo />
      </SectionAnimation>

    </motion.div>
  )
}

function getText (pathname, textData) {
  switch (pathname) {
    case '/en':
      return textData.home.en
    case '/es':
      return textData.home.es
    case '/nl':
      return textData.home.nl
    default:
      return textData.home.en
  }
}
