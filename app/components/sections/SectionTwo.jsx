'use client'
import { Ellipse } from '../ui/svg/elipse'
import { motion } from 'framer-motion'
import './particles.css'
import ParticlesBackground from '../particles/particlesBackground'
import VerticalLine from '../ui/progress/verticalLine'

export default function SectionOne () {
  return (
    <>
      <div className='relative  w-screen '>
        <div className='px-24 pb-24 w-screen md:bg-right bg-center bg-cover  '>
          <motion.div className='flex gap-12'>
            <div>
              <div className='my-5'>
                <Ellipse icon='heart' className='bg-blue-800 h-16 p-12 my-5 max-w-[42px]' />
              </div>
              <div className='max-w-[42px] h-[150px]'>
                <VerticalLine />
              </div>
              <div className='max-w-[42px] h-[150px]'>
                <VerticalLine />
              </div>
            </div>

            <div className='w-1/2 mt-5 flex flex-col align-middle content-center justify-center'>
              <h4 className='mt-2 text-2xl font-bold'>Tangle Offline is changing how people interact</h4>
              <h3 className='mt-2 text-6xl font-bold'>We bring <span className='text-tangle-cyan-process'>thousands</span> of people  out to <em>Bowling</em></h3>
            </div>
          </motion.div>
        </div>
        <ParticlesBackground />
        <div>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
          <p>espacio</p>
        </div>
      </div>
    </>
  )
}
