import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import styles from './Footer.module.css'

const footerLinks = {
  resources: [
    { name: 'Student Portfolio', href: '/portfolio' },
    { name: 'Articles', href: '/articles' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
  courses: [
    { name: 'UI/UX Design Course', href: '/courses/ui-ux-design' },
    { name: 'Web Development', href: '/courses/web-development' },
    { name: 'Graphic Design Professional', href: '/courses/graphic-design' },
    { name: 'Game Development', href: '/courses/game-development' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand Section */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoIcon}>S</span>
                <span className={styles.logoText}>Screen Shiksha</span>
              </Link>
              <p className={styles.tagline}>
                Empowering creative careers through expert-led live online training in UI/UX Design, Web Development, and Game Development.
              </p>
              <div className={styles.social}>
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Resources Links */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Resources</h4>
              <ul className={styles.linkList}>
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses Links */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Courses</h4>
              <ul className={styles.linkList}>
                {footerLinks.courses.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <Phone size={18} className={styles.contactIcon} />
                  <a href="tel:+919650582767">+91-96505 82767</a>
                </li>
                <li className={styles.contactItem}>
                  <Mail size={18} className={styles.contactIcon} />
                  <a href="mailto:info@screenshiksha.com">info@screenshiksha.com</a>
                </li>
                <li className={styles.contactItem}>
                  <MapPin size={18} className={styles.contactIcon} />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Screen Shiksha by Multiorigin. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
