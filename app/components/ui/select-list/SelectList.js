'use client'
import './Select.css'
import { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageContext } from '../../../context/languageContext'
import { deleteCookie, setCookie } from 'cookies-next'

const itemVariants = {
  open: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      staggerChildren: 1
    }
  }),
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      staggerChildren: 1,
      staggerDirection: -1
    }
  }
}

const mobileNavbar = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3
    }
  }
}

export default function SelectList () {
  const { text, setLanguageCookie } = useContext(LanguageContext)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(text.menu[0].current_language)
  const languageOptions = text.menu[0].languages_options

  useEffect(() => {
    setSelectedCategory(text.menu[0].current_language)
  }, [text])

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className=' flex flex-col self-center'
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className='select-list relative cursor-pointer w-full flex justify-between items-center text-left '
      >
        <div className='self-center'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M2 12H22' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </div>
        <p className='fs-6 fw-normal text-secondary mx-2 font-main_regular '>
          {selectedCategory || 'Language'}
        </p>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className='select-list'
        >

          <svg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1L7 7L13 1' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>

        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen &&
          <motion.ul
            variants={mobileNavbar}
            className={`select-list w-28 absolute bg-white top-16 right-8 ${isOpen ? 'p-2' : 'hidden'}`}
            exit='closed'
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            <AnimatePresence>
              {isOpen && (
                <>
                  {languageOptions && languageOptions.map((category, index) => (
                    <motion.li
                      key={index}
                      className='text-center text-base last:border-b-0  border-b-2 text-neutral-600 font-main_light first:mt-0 mt-2 flex-row w-full content-center justify-center'
                      whileHover={{ color: 'rgb(24,31,49)', fontSize: '18px' }}
                      whileTap={{ color: 'rgb(24,31,49)', fontSize: '14px' }}
                      variants={itemVariants}
                      initial='closed'
                      animate={isOpen ? 'open' : 'closed'}
                      exit='closed'
                      value={category.id}
                      onClick={() => {
                        setIsOpen(false)
                        deleteCookie('language')
                        setCookie('language', category.pathname)
                        setLanguageCookie(category.pathname)
                      }}
                    >
                      {category.name}
                    </motion.li>
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.ul>}
      </AnimatePresence>
    </motion.nav>
  )
}
