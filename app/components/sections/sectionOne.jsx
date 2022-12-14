'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import ButtonApps from '../ui/buttons/buttonApps'

export default function SectionOne () {
  const titleVariants = {
    hidden: {
      scale: 0.1,
      opacity: 0,
      blur: '5px',
      translateX: '-300%'
    },
    visible: {
      scale: 1,
      opacity: 1,
      blur: '0px',
      translateX: '0%',
      transition: {
        // delayChildren: 0.2,
        staggerChildren: 0.5,
        staggerDirection: 1,
        duration: 2
      }
    }
  }

  return (
    <>
      <div className=' pt-96 px-24 pb-24  w-screen bg-no-repeat md:bg-right bg-center bg-cover bg-hero-mobile  md:bg-hero-desktop'>
        <motion.div variants={titleVariants} initial='hidden' animate='visible' className='w-full '>
          <motion.h1 variants={titleVariants} className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-title '>tangle offline</motion.h1>
          <motion.h2 variants={titleVariants} className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title'>the real social network</motion.h2>
          <motion.div variants={titleVariants} className='flex gap-12 mt-10'>
            <Ellipse icon='zap' className='h-16 p-12 justify-self-center self-center place-content-center' />
            {/* <Ellipse icon='heart' /> */}
            <div className='flex gap-4'>
              <ButtonApps type='apple' />
              <ButtonApps />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className='-mt-96 h-96 w-screen bg-gradient-to-b from-transparent to-tangle-rich-black-FOGBRA-29' />
      <div className='mt-2'>
        Find people to hang out with, have social interactions, think creatively, and build strong communication skills. Do all of this, and more, on Tangle, by joining events and taking part in activities happening all around your city. 
      </div>
    </>
  )
}
