import React, { useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "../assets/assets";
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { getTheme, toggleTheme } from '../assets/utils/theme'

const MotionNav = motion.nav
const MotionA = motion.a
const MotionButton = motion.button
const MotionDiv = motion.div

const Header = ({ currentPathname = '/', onNavigate }) => {
  const [isDark, setIsDark] = useState(() => getTheme() === 'dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme()
    setIsDark(getTheme() === 'dark')
  }

  const handleNavClick = (event, href) => {
    setMobileMenuOpen(false)

    if (href.startsWith('/') && onNavigate) {
      event.preventDefault()
      onNavigate(href)
    }
  }

  const isActiveRoute = (href) => currentPathname === href

  return (
    <>
      <MotionNav
        initial={{ y: -50, opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ y: 0, opacity: 1, backdropFilter: "blur(20px)" }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="fixed w-full z-50 shadow-xl bg-white/70 dark:bg-black/10 border border-slate-200/70 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <MotionA
              href='/'
              onClick={(event) => handleNavClick(event, '/')}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              The Pukhraj Show
            </MotionA>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <MotionA
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                  className={`relative group hover:text-neo-secondary ${
                    isActiveRoute(item.href) ? 'text-neo-secondary' : ''
                  }`}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{ y: -3 }}
                >
                  {item.label}
                </MotionA>
              ))}
            </div>

            {/* Mobile menu icon */}
            <div className='flex space-x-4'>
              <MotionButton
                onClick={handleToggleTheme}
                whileTap={{ scale: 0.8, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center"
              >
                {isDark ? (
                  <FiSun className="w-6 h-6 text-yellow-300" />
                ) : (
                  <FiMoon className="w-6 h-6 text-neo-dark" />
                )}
              </MotionButton>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className='lg:hidden p-2 rounded-full bg-transparent'
              >
                <FiMenu className='w-6 h-6' />
              </button>
            </div>
          </div>
        </div>
      </MotionNav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <MotionDiv
          initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
          animate={{ backdropFilter: "blur(20px)", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='fixed inset-0 z-50 flex items-center justify-center bg-transparent'
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className='absolute top-6 right-6 p-2 rounded-full glass dark:glass'
            aria-label='Close mobile menu'
          >
            <FiX className='w-6 h-6' />
          </button>
          <MotionDiv
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='space-y-10 text-center'
          >
            {navItems.map((item, index) => (
              <MotionA
                key={index}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                className={`block text-xl font-bold hover:text-neo-secondary ${
                  isActiveRoute(item.href) ? 'text-neo-secondary' : ''
                }`}
              >
                {item.label}
              </MotionA>
            ))}
          </MotionDiv>
        </MotionDiv>
      )}
    </>
  );
};

export default Header;
