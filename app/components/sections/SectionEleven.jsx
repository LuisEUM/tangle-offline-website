'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Carrousel from '../ui/carrousel/Carrousel'
import dataImages from '../../data/images.json'

export default function SectionEleven ({ text }) {
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
    <>
      <motion.div
        className='h-screen px-2 md:px-14 lg:px-32 w-full hidden md:grid grid-cols-4 grid-rows-4 align-middle justify-center content-center gap-5'
        variants={container}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        ref={ref}
      >
        <motion.div className='h-full w-full row-span-1 col-span-2 rounded-2xl bg-no-repeat bg-center bg-cover bg-collage-1' variants={child} />
        <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-collage-2 row-span-1' variants={child} />
        <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-collage-3  row-span-2 col-span-1' variants={child} />
        <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-collage-4 col-span-3 row-span-2' variants={child} />
        <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-collage-5 row-span-1 col-span-1' variants={child} />
        <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-collage-6 row-span-1 col-span-2' variants={child} />
        <motion.div className='h-full w-full rounded-2xl bg-no-repeat bg-center bg-cover bg-collage-7 row-span-1 col-span-2' variants={child} />
      </motion.div>

      <Carrousel bullets className='lg:hidden md:hidden xl:hidden -mb-6 mx-5' immagesArray={dataImages.carrousel} />
    </>

  )
}
