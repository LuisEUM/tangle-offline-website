'use client'
import { motion } from 'framer-motion'
import ButtonApps from '../ui/buttons/buttonApps'
import CurveLine from '../ui/progress/curveLine'
import HorizonatalLine from '../ui/progress/horizonatalLine'

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
      <div className=' pt-96 px-24  w-screen  bg-no-repeat md:bg-right bg-center bg-cover bg-hero-mobile  md:bg-hero-desktop '>
        <motion.div variants={titleVariants} initial='hidden' animate='visible' className='w-full '>
          <motion.h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-title '>the offline </motion.h1>
          <motion.h3 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-title '>world wide wed</motion.h3>
          <motion.p className='mt-2 mb-5 text-2xl max-w-3xl'>A real-life social network to meet people, discover your city, and engage in offline activities. </motion.p>
          <motion.div className='flex align-top items-start '>
            <div className='mt-5'>

              <div className='max-w-[42px] h-[150px] '>
                <CurveLine />
              </div>
              {/* <div className='max-w-[42px] h-[150px] bg-amber-300'>
                <VerticalLine />
              </div> */}
            </div>

            <div className='relative mt-5'>
              <div className='flex ml-12 -mb-12 gap-4 align-top items-start absolute -top-6  z-10 '>
                <ButtonApps type='apple' />
                <ButtonApps />
              </div>
              <div className='max-w-[250px] h-[42px]  absolute top-0 z-0'>
                <HorizonatalLine />
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
      <div className='-mt-96 h-96 w-screen  bg-gradient-to-b from-transparent to-tangle-rich-black-FOGBRA-29' />

    </>
  )
}
