'use client'
import { AnimatePresence, motion } from 'framer-motion'
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
  const currentLanguage = categories.filter((category) => pathname.includes(category.pathname))

  return (
    <>
      <motion.ul
        variants={itemVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        whileTap={{ scale: 0.97 }}
        whileHover={{ color: 'black' }}
        className={`text-center  font-bold  w-full content-center ${className}`}
        onClick={() => setIsOpenList(!subIsOpen)}
      >
        <div className='flex justify-between align-middle items-center hover:text-tangle-green-blue-crayola'>
          <p className='hover:text-tangle-green-blue-crayola '>{name}</p>
          <div className={`${subIsOpen ? 'rotate-90' : ''}`}>
            <svg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path className='hover:stroke-tangle-green-blue-crayola' d='M1 13.5L7 7.5L1 1.5' stroke='#0D111B' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </div>
        </div>
        <AnimatePresence>
          {isOpen &&
            subIsOpen &&
            categories.map((category, index) => (
              <motion.li
                variants={itemVariants}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                exit='closed'
                key={index}
                className='text-left border-b-2 hover:text-tangle-green-blue-crayola  text-neutral-600 font-normal mt-5 flex-row w-full content-center justify-center'
              >
                <a href={`${currentLanguage[0].pathname === category.pathname ? pathname : (category.pathname + pathname.slice(3))}`} className={`${currentLanguage[0].pathname === category.pathname ? 'text-tangle-green-blue-crayola' : ''}`}> {category.name} </a>
              </motion.li>
            ))}
        </AnimatePresence>
      </motion.ul>
    </>
  )
}

export default SubMenu
