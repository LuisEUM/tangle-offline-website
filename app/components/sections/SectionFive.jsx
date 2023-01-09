'use client'
import { useInView, motion } from 'framer-motion'
import { useRef } from 'react'
import HorizonatalLineBottom from '../ui/progress/horizonatalLineBottom'
import TinyCurveBottomLeft from '../ui/progress/tinyCurveLineBottomLeft'
import VerticalLine from '../ui/progress/verticalLine'

export default function SectionFive () {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.50 * i
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

  return (
    <div className='grid grid-cols-1 relative max-w-full'>
      <div className='flex w-full flex-col  max-w-full'>
        <div className='flex pl-5 max-w-full relative mx-2 md:mx-14 lg:mx-32'>
          <div className='-rotate-180 h-[42px]'>
            <TinyCurveBottomLeft color='red' heigth={42} width={42} />
          </div>
          <div className='w-1/2 max-w-full  h-[42px]  overflow-hidden'>
            <HorizonatalLineBottom heigth={42} width={3000} color='red' />
          </div>
          <div className='w-1/2 max-w-full  h-[42px]  overflow-hidden -rotate-180'>
            <HorizonatalLineBottom heigth={42} width={3000} color='red' />
          </div>
          <div className='mr-5 '>
            <div className='mr-48 md:mr-0 lg:mr-0'>
              <TinyCurveBottomLeft color='red' heigth={42} width={42} />
              <div className=' md:max-h-60  overflow-hidden'>
                <VerticalLine color='red' heigth={625} width={42} />
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
            <motion.div className='gird grid-cols-1  shadow h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5' variants={child}>
              <div className='flex flex-col align-middle content-center justify-center h-full'>
                <h3 className='text-center font-bold text-[#D90026] text-4xl lg:text-5xl mb-3'>160 times</h3>
                <p className='text-center'>a day an average person picks up a mobile phone</p>
              </div>
            </motion.div>
            <motion.div className='gird grid-cols-1 shadow h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5' variants={child}>
              <div className='flex flex-col align-middle content-center justify-center h-full'>
                <h3 className='text-center font-bold text-[#D90026] text-4xl lg:text-5xl mb-3'>2.5 hours</h3>
                <p className='text-center'>spent on social media, 80% of people consider a waste of time </p>
              </div>
            </motion.div>
            <motion.div className='gird grid-cols-1  shadow h-full bg-tangle-oxford-blue rounded-lg px-5 py-10 my-5' variants={child}>
              <div className='flex flex-col align-middle content-center justify-center h-full'>
                <h3 className='text-center font-bold text-[#D90026] text-4xl lg:text-5xl mb-3'>62 Days</h3>
                <p className='text-center'>a year wasted on social media and online entertainment</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
