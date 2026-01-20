'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  fullWidth?: boolean
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''}`

  const motionProps = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={className}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}
