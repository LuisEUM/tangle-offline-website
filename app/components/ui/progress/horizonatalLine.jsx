'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'

export default function HorizonatalLine ({ color }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['50% 50%', 'end center']
  })

  return (
    <section className='mb-16'>
      <div ref={ref}>
        <motion.figure
          style={{ filter: `drop-shadow(0px 0px 15px ${color})` }}
        >
          <svg
            style={{ filter: `drop-shadow(0px 0px 15px ${color})` }}
          >
            <line
              x1='0'
              y1='20'
              x2='300'
              y2='20'
              pathLength='1'
              className='stroke-[2px] opacity-20'
              style={{ filter: `drop-shadow(0px 0px 15px ${color})` }}
              stroke={`${color}`}
            />
            <motion.line
              x1='0'
              y1='20'
              x2='300'
              y2='20'
              pathLength='1'
              className='stroke-[2px] fill-none'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </motion.figure>
      </div>
    </section>
  )
}

HorizonatalLine.propTypes = {
  color: PropTypes.string
}

HorizonatalLine.defaultProps = {
  color: 'rgba(0,173,228,0.8)'
}
