'use client'
import { motion } from 'framer-motion'
import LettersAnimation from '../ui/animation/lettersAnimation'
import SectionAnimation from '../ui/animation/sectionsAnimation'
import WordsAnimation from '../ui/animation/wordsAnimation'
import ButtonApps from '../ui/buttons/buttonApps'
import CurveLine from '../ui/progress/curveLine'
import HorizonatalLine from '../ui/progress/horizonatalLine'
import SectionTwo from './SectionTwo'

export default function SectionOne () {
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
    <motion.div variants={fadeInAnimationLong} initial='hidden' animate='visible' className='flex flex-col'>

      <motion.div variants={fadeInAnimation} className='z-50 pt-96 w-screen bg-no-repeat md:bg-right bg-center bg-cover bg-hero-mobile  md:bg-hero-desktop '>
        <motion.div variants={titleVariants} initial='hidden' animate='visible' className='w-full px-24'>
          <motion.div variants={fadeInAnimation}>
            <motion.div variants={fadeInAnimation}>
              <LettersAnimation className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-title' text='Tangle' tag='h1' />
            </motion.div>
            <motion.div>
              <WordsAnimation className='text-base sm:text-xl md:text-2xl lg:text-3xl font-title' text='The offline world wide wed' tag='h2' />
            </motion.div>
            <motion.div>
              <WordsAnimation className='mt-2 mb-5 text-base max-w-3xl' text='A real-life social network to meet people, discover your city, and engage in offline hola.' />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInAnimation} className='flex flex-row align-top items-start '>

            <motion.div variants={fadeInAnimation} className='relative mt-10 z-50'>

              <motion.div variants={child} className=' flex ml-12 -mb-12 gap-4 align-top items-start absolute -top-6  z-10 '>
                <ButtonApps type='apple' />
                <ButtonApps />
              </motion.div>

              <motion.div variants={fadeInAnimation} className='flex'>
                <motion.div className='max-w-[42px] h-[150px] '>
                  <CurveLine />
                </motion.div>
                <motion.div className='max-w-[250px] h-[42px]'>
                  <HorizonatalLine />
                </motion.div>
              </motion.div>

            </motion.div>

          </motion.div>
        </motion.div>
        <motion.div variants={fadeInAnimation} className='-mt-96 h-96 w-screen bg-gradient-to-b from-transparent to-tangle-rich-black-FOGBRA-29' />

      </motion.div>

      <SectionAnimation>
        <SectionTwo />
      </SectionAnimation>

    </motion.div>
  )
}
