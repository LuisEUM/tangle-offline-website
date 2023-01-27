'use client'
import React from 'react'
import { motion } from 'framer-motion'
import LettersAnimation from '../ui/animation/lettersAnimation'
import WordsAnimation from '../ui/animation/wordsAnimation'
import VerticalLine from '../ui/progress/verticalLine'

export default function SectionThirteen ({ text }) {
  return (
    <>
      <div className=' px-2 md:px-14 lg:px-32 w-full flex flex-col align-middle justify-center content-center '>
        <div className='h-full grid grid-cols-1 gap-y-12 lg:grid-cols-2  align-middle justify-center content-center bg-tangle-oxford-blue p-8 md:p-10 lg:p-16 rounded-2xl'>
          <div className='m-auto lg:pr-16 order-2'>
            <motion.div className='max-w-full mb-10'>
              <LettersAnimation className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#00ADE4] ' text={text.header} tag='h3' />
            </motion.div>
            <motion.div className='max-w-full mb-7 md:mb-8  lg:mb-20'>
              <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-body' text={text.description} tag='p' />
            </motion.div>
            <a href={text.button_url} className='self-center'>
              <motion.button className='bg-[#0086D3] rounded-full w-full py-3'>
                {text.button}
              </motion.button>
            </a>
          </div>
          <div className='m-auto lg:pl-16 h-[165px] md:h-[372px] lg:h-[400px] w-full order-1 lg:order-2'>
            <div className='h-full rounded-2xl w-full bg-no-repeat bg-center bg-cover bg-img-coffe' />
          </div>
        </div>
      </div>
      <div className='flex px-5 max-w-full relative mx-2 md:mx-14 lg:mx-32'>
        <div className='max-h-28 md:max-h-52 overflow-hidden'>
          <VerticalLine heigth={625} width={42} color='rgba(0,173,228,0.8)' />
        </div>
      </div>
    </>
  )
}
