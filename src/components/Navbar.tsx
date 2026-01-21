'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import styles from './Navbar.module.css'

const courses = [
  { 
    name: 'UI/UX Design', 
    href: '/courses/ui-ux-design', 
    description: 'Master user interface and experience design with industry tools.' 
  },
  { 
    name: 'Web Development', 
    href: '/courses/web-development', 
    description: 'Build modern websites with React, Node.js and more.' 
  },
  { 
    name: 'Graphic Design Professional', 
    href: '/courses/graphic-design', 
    description: 'Create stunning visuals with Adobe Creative Suite.' 
  },
  { 
    name: 'Game Development', 
    href: '/courses/game-development', 
    description: 'Build immersive games with Unity and C#.' 
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo-black.png"
            alt="Screen Shiksha"
            width={180}
            height={40}
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          
          <div 
            className={styles.dropdown}
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button className={styles.navLink}>
              Courses <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {coursesOpen && (
                <motion.div
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.dropdownGrid}>
                    {courses.map((course) => (
                      <Link 
                        key={course.href} 
                        href={course.href}
                        className={styles.dropdownItem}
                      >
                        <span className={styles.dropdownTitle}>{course.name}</span>
                        <span className={styles.dropdownDesc}>{course.description}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        <Link href="/contact" className={styles.ctaButton}>
          Book Demo
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            
            <div className={styles.mobileDropdown}>
              <button 
                className={styles.mobileLink}
                onClick={() => setCoursesOpen(!coursesOpen)}
              >
                Courses <ChevronDown size={16} className={coursesOpen ? styles.rotate : ''} />
              </button>
              <AnimatePresence>
                {coursesOpen && (
                  <motion.div
                    className={styles.mobileSubmenu}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {courses.map((course) => (
                      <Link 
                        key={course.href} 
                        href={course.href}
                        className={styles.mobileSubLink}
                        onClick={() => setIsOpen(false)}
                      >
                        {course.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/contact" className={styles.mobileCta} onClick={() => setIsOpen(false)}>
              Book Demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
