'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'
import LettersAnimation from '../ui/animation/lettersAnimation'

export default function SectionTwelve ({ text }) {
  return (
    <div className='px-2 md:px-14 lg:px-32 w-full'>
      <div className='flex gap-12'>
        <div className='bg- flex justify-center content-center  align-middle relative h-[315px] lg:h-[325px] overflow-hidden'>
          <div className='bg- flex justify-center content-center  align-middle gap-0 md:gap-4 lg:gap-6'>
            <div className=' flex h-[63px] ml-0.5 bg-tangle-rich-black-FOGBRA-29 rounded-full  px-5 py-10 self-start mt-20' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
              <Ellipse icon='zap' className='h-16 p-12 my-5 max-w-[30px]' color='rgba(0, 173, 228, 0.8)' />
            </div>
            <div className=' py-5'>
              <div className='flex flex-col mt-20 align-middle content-top justify-top pr-10'>
                <motion.div className='max-w-full pt-2'>
                  <WordsAnimation key={text.subHeader} className='text-base sm:text-lg md:text-xl lg:text-2xl font-main_bold' text={text.subHeader} tag='h4' />
                </motion.div>
                <div className='max-w-full py-2'>
                  <LettersAnimation key={text.header} className='text-3xl md:text-6xl lg:text-6xl font-main_black ' text={text.header} tag='h3' />
                </div>
              </div>
            </div>
          </div>
          <div className='bg-yellow- flex absolute -z-30 left-5 top-0'>
            <VerticalLine width={42} heigth={400} color='rgba(0,173,228,0.8)' />
          </div>
        </div>
      </div>
    </div>
  )
}
