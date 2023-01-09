'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'

export default function VerticalLine ({ color, heigth, width }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['50% 100%', 'end center']
  })

  return (
    <section
      style={{ minHeight: heigth, maxWidth: width }}
      className='max-h-full'
    >
      <div ref={ref}>
        <figure
          style={{ filter: `drop-shadow(0px 0px 15px ${color})`, minHeight: heigth, minWidth: width }}
          // className='bg-blue-400'
        >
          <svg
            style={{ filter: `drop-shadow(0px 0px 15px ${color})`, minHeight: heigth, minWidth: width }}
            // className='bg-red-400'
            height='100%'
            width='100%'
          >
            <line
              x1='21'
              y1='0'
              x2='21'
              y2={heigth}
              className='stroke-[2px] opacity-20'
              stroke={`${color}`}
            />
            <motion.line
              x1='21'
              y1='0'
              x2='21'
              y2={heigth}
              className='stroke-[2px] fill-none'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  )
}

VerticalLine.propTypes = {
  color: PropTypes.string,
  heigth: PropTypes.number,
  width: PropTypes.number
}

VerticalLine.defaultProps = {
  color: 'rgba(0,173,228,0.8)',
  heigth: 150,
  width: 42
}
