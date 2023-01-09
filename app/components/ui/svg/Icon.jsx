'use client'
import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const svgVariants = {
  hidden: {
    scale: 0.1,
    opacity: 0,
    blur: '5px'
  },
  visible: {
    scale: 1,
    opacity: 1,
    blur: '0px',
    transition: {
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 2
      },
      scale: {
        type: 'spring',
        damping: 20,
        stiffness: 600,
        restDelta: 0.05,
        delay: 2
      },
      opacity: {
        delay: 3
      }
    }
  }
}

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      delay: 0.5
    }
  }
}

export const Icon = ({ icon, color }) => {
  console.log(icon)

  if (icon === 'sun') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60'>
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' width='51' height='55' viewBox='0 0 51 55' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path variants={pathVariants} d='M36.3333 27.5001C36.3333 24.6269 35.1919 21.8714 33.1603 19.8398C31.1286 17.8081 28.3731 16.6667 25.5 16.6667C22.6268 16.6667 19.8713 17.8081 17.8396 19.8398C15.808 21.8714 14.6666 24.6269 14.6666 27.5001' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M25.5 8L25.5 1.5' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M8.64478 10.6433L11.7214 13.72' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M1.66663 27.5H5.99996' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M45 27.5H49.3333' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M39.2786 13.72L42.3552 10.6433' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M14.6666 27.4999C14.6666 30.3731 15.808 33.1286 17.8396 35.1602C19.8712 37.1919 22.6267 38.3333 25.4999 38.3333C28.3731 38.3333 31.1286 37.1919 33.1602 35.1602C35.1919 33.1286 36.3333 30.3731 36.3333 27.4999' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M25.5 47L25.5 53.5' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M42.3551 44.3567L39.2784 41.28' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M49.3333 27.5H44.9999' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M6 27.5H1.66667' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M11.7213 41.28L8.64465 44.3567' stroke='#01E132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </motion.svg>
      </motion.div>
    )
  } else if (icon === 'search') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60'>
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' width='53' height='53' viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path variants={pathVariants} d='M24.2917 41.9583C34.0487 41.9583 41.9583 34.0487 41.9583 24.2917C41.9583 14.5346 34.0487 6.625 24.2917 6.625C14.5346 6.625 6.625 14.5346 6.625 24.2917C6.625 34.0487 14.5346 41.9583 24.2917 41.9583Z' stroke='#00E432' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M46.375 46.375L36.7688 36.7688' stroke='#00E432' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </motion.svg>
      </motion.div>
    )
  } else if (icon === 'map') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60'>
        <motion.svg variants={svgVariants} width='53' height='53' viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path variants={pathVariants} d='M2.66663 13.4999V48.1666L17.8333 39.4999L35.1666 48.1666L50.3333 39.4999V4.83325L35.1666 13.4999L17.8333 4.83325L2.66663 13.4999Z' stroke='#01D12E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M17.8334 4.83325V39.4999' stroke='#01D12E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          <motion.path variants={pathVariants} d='M35.1666 13.5V48.1667' stroke='#01D12E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </motion.svg>
      </motion.div>
    )
  } else {
    <svg height='60' width='60' style={{ background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 173, 228, 0) 100%)` }}>
      <Icon className='fill-transparent stroke-transparent stroke-1' cx='100' cy='100' rx='100' ry='100' />
      Sorry, your browser does not support inline SVG.
    </svg>
  }
}

Icon.propTypes = {
  color: PropTypes.string
}

Icon.defaultProps = {
  color: 'rgba(0, 173, 228, 0.8)'
}
