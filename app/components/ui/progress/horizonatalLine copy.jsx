'use client'

import './styles.css'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

function Item () {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })

  return (
    <section className='mb-16'>
      <div ref={ref} className='flex '>
        <figure className='progress horizontal'>
          <svg id='progress horizontal'>
            <line x1='10' y1='10' x2='900' y2='10' pathLength='1' className='bg horizontal' />
            <motion.line
              x1='10'
              y1='10'
              x2='900'
              y2='10'
              pathLength='1'
              className='indicator horizontal'
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  )
}

export default function HorizonatalLine () {
  return (
    <>
      <Item />
    </>
  )
}
