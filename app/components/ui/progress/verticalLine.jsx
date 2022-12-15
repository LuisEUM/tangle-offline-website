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
      <div ref={ref} className='flex'>
        <figure className='progress '>
          <svg id='progress'>
            <line x1='20' y1='0' x2='20' y2='900' pathLength='1' className='bg' />
            <motion.line
              x1='20'
              y1='0'
              x2='20'
              y2='900'
              pathLength='1'
              className='indicator'
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  )
}

export default function VerticalLine () {
  return (
    <>
      <Item />
    </>
  )
}
