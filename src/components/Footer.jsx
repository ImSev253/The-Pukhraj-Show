import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const MotionFooter = motion.footer
const MotionA = motion.a

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear()

  const handleBackToTop = (event) => {
    if (onNavigate) {
      event.preventDefault()
      onNavigate('/')
    }
  }

  return (
    <MotionFooter
      id='footer'
      className='relative z-10 border-t border-white/10 bg-black/20 py-8 backdrop-blur-xl'
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
          <div className='space-y-2'>
            <p className='text-lg font-bold gradient-text'>The Pukhraj Show</p>
            <p className='text-sm text-white/65'>
              Copyright &copy; {year} The Pukhraj Show. All rights reserved.
            </p>
          </div>

          <div className='flex flex-col items-start gap-3 sm:items-end'>
            <MotionA
              href='/'
              onClick={handleBackToTop}
              whileHover={{ y: -2, x: 2 }}
              whileTap={{ scale: 0.98 }}
              className='inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white'
            >
              Back to top
              <FiArrowUp className='h-4 w-4' />
            </MotionA>

            <p className='text-xs uppercase tracking-[0.22em] text-white/45'>
              Designed by Web Me Services
            </p>
          </div>
        </div>
      </div>
    </MotionFooter>
  )
}
