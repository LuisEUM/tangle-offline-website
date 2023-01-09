'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'

export default function CurvelLine ({ color }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['50% 100%', 'end center']
  })

  return (
    <section
      className='mb-16'
    >
      <motion.div ref={ref}>
        <figure
          style={{ filter: `drop-shadow(0px 0px 15px ${color})` }}
        >
          <svg
            style={{ filter: `drop-shadow(0px 0px 15px ${color})` }}
            width='42'
            height='150'
            fill='none'
          >
            <path
              className={`stroke-[${color}] opacity-20 stroke-[2px]`}
              d='M42 20C40 20 21 21 21 41C20 61 21 121.667 21 900'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress, filter: `drop-shadow(0px 0px 15px ${color})` }}
            />
            <motion.path
              className={`stroke-[${color}] stroke-[2px] fill-none]`}
              whileInView={{ pathLength: scrollYProgress }}
              d='M42 20C40 20 21 21 21 41C20 61 21 121.667 21 900'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress, filter: `drop-shadow(0px 0px 15px ${color})` }}
            />
          </svg>
        </figure>
      </motion.div>
    </section>
  )
}

CurvelLine.propTypes = {
  color: PropTypes.string
}

CurvelLine.defaultProps = {
  color: 'rgba(0,173,228,0.8)'
}
