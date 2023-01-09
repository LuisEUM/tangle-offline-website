import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionEleven () {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.001 * i
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
        damping: 50,
        stiffness: 100
      }
    },
    hidden: {
      opacity: -1,
      x: -20,
      y: 10,
      transition: {
        type: 'spring',
        damping: 50,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className='h-screen px-2 md:px-14 lg:px-32 w-full grid grid-cols-4 grid-rows-4 align-middle justify-center content-center gap-5'
      variants={container}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <motion.div className='h-full w-full row-span-1 col-span-2 rounded-2xl bg-no-repeat bg-center bg-cover bg-img-coffe' variants={child} />
      <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-img-coffe row-span-1' variants={child} />
      <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-img-coffe  row-span-2 col-span-1' variants={child} />
      <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-img-coffe col-span-3 row-span-2' variants={child} />
      <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-img-coffe row-span-1 col-span-1' variants={child} />
      <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-img-coffe row-span-1 col-span-2' variants={child} />
      <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-img-coffe row-span-1 col-span-2' variants={child} />
    </motion.div>
  )
}
