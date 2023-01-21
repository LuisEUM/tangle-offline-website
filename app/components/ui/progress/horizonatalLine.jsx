'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'

export default function HorizonatalLine ({ color, heigth, width }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start end', 'start end']
    offset: ['50% 50%', 'end center']

  })

  return (
    <section
      style={{ maxHeight: heigth, maxWidth: width }}
      className=''
    >
      <motion.div ref={ref}>
        <figure
          style={{ filter: `drop-shadow(0px 0px 15px ${color})`, minHeight: heigth, minWidth: width }}
        >
          <svg
            style={{ filter: `drop-shadow(0px 0px 15px ${color})`, minHeight: heigth, minWidth: width }}
            height='100%'
            width='100%'
          >
            <line
              x1='0'
              y1={heigth / 2}
              x2={width}
              y2={heigth / 2}
              className='stroke-[2px] opacity-20'
              stroke={`${color}`}
            />
            <motion.line
              x1='0'
              y1={heigth / 2}
              x2={width}
              y2={heigth / 2}
              className='stroke-[2px] fill-none'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </motion.div>
    </section>
  )
}

HorizonatalLine.propTypes = {
  color: PropTypes.string,
  heigth: PropTypes.number,
  width: PropTypes.number
}
