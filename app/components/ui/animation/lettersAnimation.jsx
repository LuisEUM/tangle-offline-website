import React from 'react'
import { motion } from 'framer-motion'

export default function LettersAnimation ({ text, tag, className }) {
  const words = text.split(' ')

  if (tag === 'h1') {
    return (
      <h1
        className={`${className}`}
      >
        <Item words={words} className={className} />
      </h1>
    )
  } else if (tag === 'h2') {
    return (
      <h2
        className={`${className}`}
      >
        <Item words={words} className={className} />
      </h2>
    )
  } else if (tag === 'h3') {
    return (
      <h3
        className={`${className}`}
      >
        <Item words={words} className={className} />
      </h3>
    )
  } else if (tag === 'h4') {
    return (
      <h4
        className={`${className}`}
      >
        <Item words={words} className={className} />
      </h4>
    )
  } else if (tag === 'h5') {
    return (
      <h5
        className={`${className}`}
      >
        <Item words={words} className={className} />
      </h5>
    )
  } else if (tag === 'h6') {
    return (
      <h6
        className={`${className}`}
      >
        <Item words={words} className={className} />
      </h6>
    )
  } else {
    return (
      <p
        className={`${className}`}
      >
        <Item words={words} className={className} />
      </p>
    )
  }
}

function Item ({ words, className }) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 * i }
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

  return (
    <motion.span variants={container} initial='hidden' animate='visible'>
      {words.map((word, index) => {
        if (word === '<br/>') {
          return <br key={index} />
        }
        if (word === '<span>') {
          return <motion.span key={index} variants={child} className='text-tangle-cyan-process'>{words[index + 1]}</motion.span>
        }
        if (words[index - 1] === '<span>') {
          return ''
        }
        if (word === '</span>') {
          return ''
        }
        if (word === '<em>') {
          return <motion.em key={index} variants={child}>{words[index + 1]}</motion.em>
        }
        if (words[index - 1] === '<em>') {
          return ''
        }
        if (word === '</em>') {
          return ''
        }
        return (
          <motion.span
            key={index}
            style={{ marginRight: '5px' }}
            className={`${className} inline-flex`}
          >
            {word.split('').map((letter, i) => (
              <motion.span
                variants={child}
                key={i}
              >
                {letter}
              </motion.span>
            ))}
            {'\u00A0'}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
