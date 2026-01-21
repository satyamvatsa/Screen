'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Briefcase } from 'lucide-react'
import styles from './page.module.css'
import Button from '@/components/Button'

const portfolioItems = [
  {
    name: 'Sai Surya',
    course: 'UI/UX Design',
    project: 'iVOTE: Bringing Elections Closer',
    description: 'An election empowerment platform with user-centric design and intuitive workflows that make voting information clear and accessible.',
    category: 'Mobile App Design',
    link: 'https://www.behance.net/gallery/211107221/iVOTE-Bringing-Elections-Closer',
  },
  {
    name: 'Kailash Nath',
    course: 'UI/UX Design',
    project: 'Parking Space',
    description: 'A smart parking app with clean UI and seamless user experience, designed to simplify finding and managing parking spaces.',
    category: 'Mobile App Design',
    link: 'https://www.behance.net/gallery/208313707/Parking-Space',
  },
  {
    name: 'Sai Surya',
    course: 'UI/UX Design',
    project: 'Subandhan Nidhi Web-App',
    description: 'A comprehensive financial management web app with intuitive dashboard and seamless user experience for efficient fund oversight.',
    category: 'Web App Design',
    link: 'https://www.behance.net/gallery/212632883/subandhan-nidhi-Web-App-UIUX-case-study',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function PortfolioPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb} />
          <div className={styles.gridPattern} />
        </div>
        
        <div className={styles.container}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.badge}>
              <Briefcase size={14} /> Student Work
            </span>
            <h1>Student Portfolio</h1>
            <p>
              Explore the amazing projects created by our talented students. 
              These portfolios showcase the skills and creativity developed through our courses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className={styles.portfolio}>
        <div className={styles.container}>
          <motion.div 
            className={styles.portfolioGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.portfolioCard}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className={styles.cardImage}>
                  <span className={styles.initials}>
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.category}>{item.category}</span>
                  <h3>{item.project}</h3>
                  <p>{item.description}</p>
                  <div className={styles.cardMeta}>
                    <div className={styles.student}>
                      <span className={styles.studentName}>{item.name}</span>
                      <span className={styles.studentCourse}>{item.course}</span>
                    </div>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.viewBtn}
                      aria-label={`View ${item.project} project`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Want to Build Your Portfolio?</h2>
            <p>
              Join our courses and create portfolio-worthy projects with guidance from industry experts.
            </p>
            <Button href="/contact" size="large">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
