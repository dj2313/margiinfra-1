import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" }
  ]

  return (
    <motion.div 
      className={`fixed top-0 left-0 right-0 flex justify-center w-full z-50 transition-all duration-300
        ${scrolled ? 'py-2' : 'py-6'}`}
      animate={{ 
        height: scrolled ? '4rem' : '5rem',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
      }}
    >
      <div className={`flex items-center justify-between px-8 ${scrolled ? 'py-2' : 'py-3'} 
        ${isDark 
          ? (scrolled ? 'bg-navy-800' : 'bg-navy-800/90') 
          : (scrolled ? 'bg-white' : 'bg-white/90')} 
        backdrop-blur-md rounded-full shadow-lg w-full max-w-7xl relative transition-all duration-300`}>
        
        <div className="flex items-center">
          <motion.div
            className="flex items-center gap-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Updated Logo */}
            <div className="w-10 h-10 relative">
              <svg 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                <path 
                  d="M12 28V12L16 14L20 26L24 14L28 12V28" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient 
                    id="gradient" 
                    x1="0" 
                    y1="0" 
                    x2="40" 
                    y2="40" 
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#60A5FA" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                MARGI
              </span>
              <span className={`text-sm font-medium ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                INFRA
              </span>
            </div>
          </motion.div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <a 
                href={item.href}
                className={`text-sm transition-all duration-300 font-medium relative
                  ${isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                  after:bg-blue-500 after:transition-all hover:after:w-full`}
              >
                {item.title}
              </a>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <motion.button
            className={`p-2.5 rounded-full ${isDark ? 'bg-navy-700 hover:bg-navy-600' : 'bg-gray-100 hover:bg-gray-200'} 
              transition-all duration-300`}
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-gray-900" />
            )}
          </motion.button>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <a
              href="#contact"
              className={`inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium
                ${isDark ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}
                text-white rounded-full transition-all duration-300 shadow-lg 
                hover:shadow-blue-500/25 hover:scale-105 active:scale-95`}
            >
              Get Started
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden flex items-center p-2" 
            onClick={toggleMenu} 
            whileTap={{ scale: 0.95 }}
          >
            <Menu className={`h-6 w-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed inset-0 ${isDark ? 'bg-navy-900/98' : 'bg-white/98'} 
              backdrop-blur-md z-50 pt-24 px-6 md:hidden`}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              <X className={`h-6 w-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <a 
                    href={item.href} 
                    className={`text-base font-medium
                      ${isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}`}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white 
                    bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 
                    hover:to-blue-800 transition-all shadow-lg shadow-blue-500/25"
                  onClick={toggleMenu}
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export { Navbar1 }
