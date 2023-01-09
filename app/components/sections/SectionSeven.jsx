'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import VerticalLine from '../ui/progress/verticalLine'
import WordsAnimation from '../ui/animation/wordsAnimation'
import LettersAnimation from '../ui/animation/lettersAnimation'

export default function SectionSeven () {
  return (
    <div className='px-2 md:px-14 lg:px-32 w-full'>
      <motion.div className='  '>
        <div>
          <div className='flex gap-12 '>
            <div className='bg- flex justify-center content-center  align-middle relative h-[550px] bg-green-'>
              <div className='bg- flex justify-center content-center  align-middle gap-6 bg-blue-'>
                <div className='bg-red- py-5 bg-red-'>
                  <div className='flex flex-col mt-10 align-middle content-top justify-top   pl-10'>
                    <motion.div className='max-w-full pt-2'>
                      <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-title text-end' text='Solution' tag='h4' />
                    </motion.div>
                    <motion.div className='max-w-full self-end'>
                      <LettersAnimation className='py-2 text-3xl md:text-6xl lg:text-6xl font-bold text-end ' text='Focus on what matters' tag='h3' />
                    </motion.div>
                    <motion.div className='max-w-full md:w-full lg:w-3/5 pl-2 bg-yellow- self-end'>
                      <WordsAnimation className='text-base sm:text-lg md:text-xl lg:text-2xl font-body text-end' text='Find people to hang out with, have social interactions, think creatively, and build strong communication skills. Do all of this, and more, on Tangle, by joining events and taking part in activities happening all around your city.' tag='p' />
                    </motion.div>
                  </div>
                </div>
                <div className=' flex h-[63px] mr-0.5 bg-tangle-rich-black-FOGBRA-29 rounded-full px-5 py-10 mt-10' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(13, 17, 28, 1) 85%, rgba(13, 17, 28, 0.6) 100%)' }}>
                  <Ellipse icon='heart' className='h-16 p-12 my-5 max-w-[30px] ' color='rgb(1, 209, 46, 0.4)' />
                </div>
              </div>
              <div className='bg-yellow- flex absolute -z-30 right-5 top-0 '>
                <VerticalLine color='rgb(1, 209, 46)' width={42} heigth={550} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
