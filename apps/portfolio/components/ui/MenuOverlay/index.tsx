'use client'

import useMenuStore from '@/sdk/store/menu'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import MenuClose from '../MenuClose'
import Social from '../Social'

const sideVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
}

export const MenuOverlay = () => {
  const { isMenuOpen } = useMenuStore()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.aside
          className="fixed top-0 left-0 z-20 h-full bg-slate-800 dark:bg-indigo-500 drop-shadow-2xl"
          initial={{ width: 0 }}
          animate={{
            width: 300,
          }}
          exit={{
            width: 0,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className="relative flex flex-col items-center w-full h-full py-10"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            <div className="absolute top-2 right-2">
              <MenuClose />
            </div>
            <Social />
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default MenuOverlay
