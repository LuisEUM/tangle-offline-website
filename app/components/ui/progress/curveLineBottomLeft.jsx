'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'

export default function CurveLineBottomLeft ({ color }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['100% 100%', 'start center']
  })

  return (
    <section className='mb-16'>
      <motion.div ref={ref}>
        <figure
          style={{ filter: `drop-shadow(0px 0px 20px ${color})` }}
        >
          <svg
            width='42'
            height='600'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ filter: `drop-shadow(0px 0px 20px ${color})` }}
          >
            <path
              className={`stroke-[${color}] opacity-20 stroke-[2px]`}
              pathLength='1'
              d='M20,0.50C20,30 20,90 20,109C20,129 43,129 43,129'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress, filter: `drop-shadow(0px 0px 20px ${color})` }}
            />
            <motion.path
              className={`stroke-[${color}] stroke-[2px] fill-none]`}
              whileInView={{ pathLength: scrollYProgress }}
              pathLength='1'
              d='M20,0.50C20,30 20,90 20,109C20,129 43,129 43,129'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </motion.div>
    </section>
  )
}

CurveLineBottomLeft.propTypes = {
  color: PropTypes.string
}

CurveLineBottomLeft.defaultProps = {
  color: 'rgba(0,173,228,0.8)'
}

// <svg width="42" height="150" viewBox="0 0 42 150" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M42 129C42 129 21 129 21 109C21 89 21 28.3333 21 0.499908" stroke="#BD3434"/>
// </svg>
