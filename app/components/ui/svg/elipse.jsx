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

export const Ellipse = ({ icon, color }) => {
  console.log(icon)

  if (icon === 'zap') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60' style={{ background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 173, 228, 0) 100%)` }}>
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' width='18' height='18' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path variants={pathVariants} initial='hidden' animate='visible' d='M10.2435 1.96753L1.91016 11.9675H9.41016L8.57682 18.6342L16.9102 8.6342H9.41016L10.2435 1.96753Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          Sorry, your browser does not support inline SVG.
        </motion.svg>
      </motion.div>
    )
  } else if (icon === 'heart') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60' style={{ background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 173, 228, 0) 100%)` }}>
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' width='14' height='14' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path variants={pathVariants} d='M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          Sorry, your browser does not support inline SVG.
        </motion.svg>
      </motion.div>
    )
  } else {
    <svg height='60' width='60' style={{ background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 173, 228, 0) 100%)` }}>
      <ellipse className='fill-transparent stroke-transparent stroke-1' cx='100' cy='100' rx='100' ry='100' />
      Sorry, your browser does not support inline SVG.
    </svg>
  }
}

Ellipse.propTypes = {
  color: PropTypes.string
}

Ellipse.defaultProps = {
  color: 'rgba(0, 173, 228, 0.8)'
}
