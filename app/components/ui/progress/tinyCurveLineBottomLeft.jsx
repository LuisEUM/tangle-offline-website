'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'

export default function TinyCurveBottomLeft ({ color, heigth, width }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['50% 50%', 'end center']
  })

  return (
    <section
      className=''
    >
      <motion.div ref={ref}>
        <figure
          style={{ filter: `drop-shadow(0px 0px 15px ${color})` }}
        >
          <svg
            style={{ filter: `drop-shadow(0px 0px 15px ${color})`, minHeight: heigth, minWidth: width }}
            width='42'
            height='42'
            fill='none'
          >
            <path
              className={`stroke-[${color}] opacity-20 stroke-[2px]`}
              d='M21,42c0-11.6-9.4-21-21-21'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress, filter: `drop-shadow(0px 0px 15px ${color})` }}

            />
            <motion.path
              className={`stroke-[${color}] stroke-[2px] fill-none]`}
              whileInView={{ pathLength: scrollYProgress }}
              d='M21,42c0-11.6-9.4-21-21-21'
              stroke={`${color}`}
              style={{ pathLength: scrollYProgress, filter: `drop-shadow(0px 0px 15px ${color})` }}
            />
          </svg>
        </figure>
      </motion.div>
    </section>
  )
}

TinyCurveBottomLeft.propTypes = {
  color: PropTypes.string,
  heigth: PropTypes.number,
  width: PropTypes.number
}

TinyCurveBottomLeft.defaultProps = {
  color: 'rgba(0,173,228,0.8)',
  heigth: 42,
  width: 42
}
