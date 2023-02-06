'use client'
import HorizonatalLine from '../ui/progress/horizonatalLine'
import CurveLine from '../ui/progress/curveLine'
import VerticalLine from '../ui/progress/verticalLine'
import { Icon } from '../ui/svg/Icon'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.75 * i,
      staggerDirection: -1
    }
  })
}

const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 400
    }
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 400
    }
  }
}

export default function SectionEight ({ text }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <div className='grid grid-cols-1 relative max-w-full z-30'>
      <div className='flex w-full flex-col max-w-full'>
        <div className='flex pl-5 max-w-full relative mx-2 md:mx-14 lg:mx-32 -scale-x-100'>
          <div className='-rotate-180 h-[42px]'>
            <CurveLine color='rgb(1, 209, 46)' heigth={42} width={42} />
          </div>
          <div className='w-1/2 max-w-full  h-[42px]  overflow-hidden'>
            <HorizonatalLine heigth={42} width={3000} color='rgb(1, 209, 46)' />
          </div>
          <div className='w-1/2 max-w-full  h-[42px]  overflow-hidden -rotate-180'>
            <HorizonatalLine heigth={42} width={3000} color='rgb(1, 209, 46)' />
          </div>
          <div className='mr-5 '>
            <div className='mr-48 md:mr-0 lg:mr-0'>
              <CurveLine color='rgb(1, 209, 46)' heigth={42} width={42} />
              <div className=' md:max-h-60  overflow-hidden'>
                <VerticalLine color='rgb(1, 209, 46)' heigth={625} width={42} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full  items-center align-middle absolute top-0 -mt-28 px-5'>
          <motion.div
            className='grid grid-cols-1 h-48 md:grid-cols-3 gap-y-5 gap-x-4 lg:gap-6 max-w-4xl'
            variants={container}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            ref={ref}
          >
            <motion.div className='grid grid-cols-1 justify-center align-middle items-center content-center h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5 shadow' variants={child}>
              <div className=' flex h-[63px] m-auto rounded-full '>
                <Icon icon='sun' className='h-16 p-12 my-5 max-w-[30px] ' color='rgb(1, 209, 46)' />
              </div>
              <h3 className='text-center font-bold text-white text-xl lg:text-2xl mb-3'>{text.headerCardOne}</h3>
            </motion.div>
            <motion.div className='grid grid-cols-1 justify-center align-middle items-center content-center h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5 shadow' variants={child}>
              <div className=' flex h-[63px] m-auto rounded-full '>
                <Icon icon='search' className='h-16 p-12 my-5 max-w-[30px] ' color='rgb(1, 209, 46)' />
              </div>
              <h3 className='text-center font-bold text-white text-xl lg:text-2xl mb-3'>{text.headerCardTwo}</h3>
            </motion.div>
            <motion.div className='grid grid-cols-1 justify-center align-middle items-center content-center h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5 shadow' variants={child}>
              <div className=' flex h-[63px] m-auto rounded-full '>
                <Icon icon='map' className='h-16 p-12 my-5 max-w-[30px] ' color='rgb(1, 209, 46)' />
              </div>
              <h3 className='text-center font-bold text-white text-xl lg:text-2xl mb-3'>{text.headerCardThree} </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
