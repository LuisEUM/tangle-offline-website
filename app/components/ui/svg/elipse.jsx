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
  if (icon === 'zap') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60' style={{ background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 173, 228, 0) 100%)` }}>
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' width='18' height='18' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path variants={pathVariants} initial='hidden' animate='visible' d='M10.2435 1.96753L1.91016 11.9675H9.41016L8.57682 18.6342L16.9102 8.6342H9.41016L10.2435 1.96753Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          Sorry, your browser does not support inline SVG.
        </motion.svg>
      </motion.div>
    )
  } else if (icon === 'heart') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60' style={{ background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 173, 228, 0) 100%)` }}>
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' width='14' height='14' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <motion.path variants={pathVariants} d='M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          Sorry, your browser does not support inline SVG.
        </motion.svg>
      </motion.div>
    )
  } else if (icon === 'sad') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60' style={{ background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 173, 228, 0) 100%)` }}>
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' width='18' height='18' viewBox='1 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_1439_8962)'>
            <motion.path variants={pathVariants} d='M10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6025 1.66663 10.0001 1.66663C5.39771 1.66663 1.66675 5.39759 1.66675 9.99996C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M6.66675 12.5H13.3334' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M7.5 7.5H7.50833' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M12.5 7.5H12.5083' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          </g>
          <defs>
            <clipPath id='clip0_1439_8962'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
          Sorry, your browser does not support inline SVG.
        </motion.svg>
      </motion.div>
    )
  } else if (icon === 'happy') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60' style={{ background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 173, 228, 0) 100%)` }}>
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' width='18' height='18' viewBox='-1 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_1439_8969)'>
            <motion.path variants={pathVariants} d='M9.99996 18.3334C14.6023 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39759 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6025 5.39759 18.3334 9.99996 18.3334Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M6.66663 11.6667C6.66663 11.6667 7.91663 13.3334 9.99996 13.3334C12.0833 13.3334 13.3333 11.6667 13.3333 11.6667' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M7.5 7.5H7.50833' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M12.5 7.5H12.5083' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          </g>
          <defs>
            <clipPath id='clip0_1439_8969'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
          Sorry, your browser does not support inline SVG.
        </motion.svg>
      </motion.div>
    )
  } else if (icon === 'share') {
    return (
      <motion.div variants={svgVariants} initial='hidden' animate='visible' className='self-center w-fit flex p-3' height='60' width='60' style={{ background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(0, 173, 228, 0) 100%)` }}>
        <motion.svg variants={svgVariants} initial='hidden' animate='visible' width='18' height='18' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_1439_8976)'>
            <motion.path variants={pathVariants} d='M15.1621 6.70264C16.5428 6.70264 17.6621 5.58335 17.6621 4.20264C17.6621 2.82192 16.5428 1.70264 15.1621 1.70264C13.7814 1.70264 12.6621 2.82192 12.6621 4.20264C12.6621 5.58335 13.7814 6.70264 15.1621 6.70264Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M5.16211 12.5361C6.54282 12.5361 7.66211 11.4168 7.66211 10.0361C7.66211 8.65542 6.54282 7.53613 5.16211 7.53613C3.7814 7.53613 2.66211 8.65542 2.66211 10.0361C2.66211 11.4168 3.7814 12.5361 5.16211 12.5361Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M15.1621 18.3696C16.5428 18.3696 17.6621 17.2503 17.6621 15.8696C17.6621 14.4889 16.5428 13.3696 15.1621 13.3696C13.7814 13.3696 12.6621 14.4889 12.6621 15.8696C12.6621 17.2503 13.7814 18.3696 15.1621 18.3696Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M7.32056 11.2944L13.0122 14.6111' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <motion.path variants={pathVariants} d='M13.0039 5.46094L7.32056 8.7776' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          </g>
          <defs>
            <clipPath id='clip0_1439_8976'>
              <rect width='20' height='20' fill='white' transform='translate(0.162109 0.0361328)' />
            </clipPath>
          </defs>
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
