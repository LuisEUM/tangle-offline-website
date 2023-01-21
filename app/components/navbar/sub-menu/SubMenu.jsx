'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { usePathname } from 'next/navigation'

function SubMenu ({
  isOpen,
  subIsOpen,
  setIsOpenList,
  categories,
  name,
  itemVariants,
  className
}) {
  const pathname = usePathname()

  return (
    <>
      <motion.ul
        variants={itemVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        whileTap={{ scale: 0.97 }}
        whileHover={{ color: 'black' }}
        className={`text-center text-tangle-rich-black-FOGBRA-29  font-bold  w-full content-center ${className}`}
        onClick={() => setIsOpenList(!subIsOpen)}
      >
        {name}
        <AnimatePresence>
          {isOpen &&
            subIsOpen &&
            categories.map((category, index) => (
              <motion.li
                // {...categoryListAnimation}
                variants={itemVariants}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                exit='closed'
                key={index}
                className='text-center border-b-2 text-neutral-600 font-normal mt-5 flex-row w-full content-center justify-center'
              >
                {getLanguague(pathname, category)}
              </motion.li>
            ))}
        </AnimatePresence>
      </motion.ul>
    </>
  )
}

export default SubMenu

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
