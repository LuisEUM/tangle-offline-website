import React from 'react'
import { motion } from 'framer-motion'

export default function LettersAnimation ({ text, tag, className }) {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  if (tag === 'h1') {
    return (
      <motion.h1
        style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
        variants={container}
        initial='hidden'
        animate='visible'
        className={`${className}`}
      >
        <Item letters={letters} child={child} className={className} />
      </motion.h1>
    )
  } else if (tag === 'h2') {
    return (
      <motion.h2
        style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
        variants={container}
        initial='hidden'
        animate='visible'
        className={`${className}`}
      >
        <Item letters={letters} child={child} className={className} />
      </motion.h2>
    )
  } else if (tag === 'h3') {
    return (
      <motion.h3
        style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
        variants={container}
        initial='hidden'
        animate='visible'
        className={`${className}`}
      >
        <Item letters={letters} child={child} className={className} />
      </motion.h3>
    )
  } else if (tag === 'h4') {
    return (
      <motion.h4
        style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
        variants={container}
        initial='hidden'
        animate='visible'
        className={`${className}`}
      >
        <Item letters={letters} child={child} className={className} />
      </motion.h4>
    )
  } else if (tag === 'h5') {
    return (
      <motion.h5
        style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
        variants={container}
        initial='hidden'
        animate='visible'
        className={`${className}`}
      >
        <Item letters={letters} child={child} className={className} />
      </motion.h5>
    )
  } else if (tag === 'h6') {
    return (
      <motion.h6
        style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
        variants={container}
        initial='hidden'
        animate='visible'
        className={`${className}`}
      >
        <Item letters={letters} child={child} className={className} />
      </motion.h6>
    )
  } else {
    return (
      <motion.p
        style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
        variants={container}
        initial='hidden'
        animate='visible'
        className={`${className}`}
      >
        <Item letters={letters} child={child} className={className} />
      </motion.p>
    )
  }
}

function Item ({ letters, child, className }) {
  return (
    letters.map((letter, index) => (
      <motion.span variants={child} key={index} className={`${className} inline-flex`}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))
  )
}
