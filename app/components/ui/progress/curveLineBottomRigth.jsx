'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'

export default function CurveLineBottomRigth ({ color }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })

  return (
    <section className='mb-16'>
      <motion.div ref={ref}>
        <figure
          style={{ filter: `drop-shadow(0px 0px 15px ${color})` }}
        >
          <svg
            width='82'
            height='150'
            fill='none'
            style={{ filter: `drop-shadow(0px 0px 15px ${color})` }}
          >
            <path
              className={`stroke-[${color}] opacity-20 stroke-[2px]`}
              pathLength='1'
              // d='M20,0.50C20,30 20,90 20,109C20,129 43,129 43,129'
              d='M0 21C0 21 21 21 21 41C21 61 21 121.667 21 149.5'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress, filter: `drop-shadow(0px 0px 15px ${color})` }}
            />
            <motion.path
              className={`stroke-[${color}] stroke-[2px] fill-none]`}
              whileInView={{ pathLength: scrollYProgress }}
              pathLength='1'
              // d='M20,0.50C20,30 20,90 20,109C20,129 43,129 43,129'
              d='M0 21C0 21 21 21 21 41C21 61 21 121.667 21 149.5'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </motion.div>
    </section>
  )
}

CurveLineBottomRigth.propTypes = {
  color: PropTypes.string
}

CurveLineBottomRigth.defaultProps = {
  color: 'rgba(0,173,228,0.8)'
}
