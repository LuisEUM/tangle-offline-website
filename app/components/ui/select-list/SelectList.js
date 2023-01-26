'use client'
import './Select.css'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import languagesOptionsData from '../../../data/menu.languages.json'

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
export default function SelectList () {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const currentLanguage = languagesOptionsData.filter((category) => category.pathname === pathname)
  const [selectedCategory, setSelectedCategory] = useState(currentLanguage[0].official_name)

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
            <path d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M2 12H22' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        </div>
        <p className='fs-6 fw-normal text-secondary mx-2 font-semibold '>
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
            <path d='M1 1L7 7L13 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen &&
          <motion.ul
            variants={{
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
            }}
            className={`select-list w-28 absolute bg-white top-16 right-8 ${isOpen ? 'p-2' : 'hidden'}`}
            exit='closed'
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            <AnimatePresence>
              {isOpen && languagesOptionsData.map((category, i) => (
                <motion.li
                  key={category.id}
                  className='text-center text-base last:border-b-0  border-b-2 text-neutral-600 font-normal first:mt-0 mt-2 flex-row w-full content-center justify-center'
                  whileHover={{ color: 'rgb(24,31,49)', fontSize: '18px' }}
                  whileTap={{ color: 'rgb(24,31,49)', fontSize: '14px' }}
                  variants={itemVariants}
                  initial='closed'
                  animate={isOpen ? 'open' : 'closed'}
                  exit='closed'
                  value={category.id}
                  onClick={() => {
                    setIsOpen(false)
                    setSelectedCategory(category)
                  }}
                >
                  {getLanguague(pathname, category)}
                </motion.li>
              )
              )}
            </AnimatePresence>
          </motion.ul>}
      </AnimatePresence>
    </motion.nav>
  )
}

function getLanguague (pathname, category) {
  switch (pathname) {
    case '/en':
      return (<a href={`/${category.id}`}> {category.name_en} </a>)
    case '/es':
      return (<a href={`/${category.id}`}> {category.name_es} </a>)
    case '/nl':
      return (<a href={`/${category.id}`}> {category.name_nl} </a>)
    default:
      return (<a href={`/${category.id}`}> {category.name_en} </a>)
  }
}
