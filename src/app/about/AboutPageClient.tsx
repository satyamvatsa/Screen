'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Lightbulb, Users, Award, BookOpen, Sparkles, CheckCircle } from 'lucide-react'
import styles from './page.module.css'
import Button from '@/components/Button'

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We\'re committed to making quality education accessible to everyone, empowering students to build successful creative careers.',
  },
  {
    icon: Heart,
    title: 'Student-Centered',
    description: 'Every decision we make is guided by what\'s best for our students. Your success is our success.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly evolve our curriculum and teaching methods to stay ahead of industry trends.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We foster a supportive learning environment where students can grow, collaborate, and network.',
  },
]

const team = [
  {
    name: 'Expert Mentors',
    role: 'Industry Professionals',
    description: 'Our trainers bring years of real-world experience from top companies and studios.',
  },
  {
    name: 'Career Advisors',
    role: 'Placement Support',
    description: 'Dedicated team to help you land your dream job with portfolio reviews and interview prep.',
  },
  {
    name: 'Teaching Assistants',
    role: 'Student Support',
    description: '24/7 support to answer your questions and help you through challenging projects.',
  },
]

const milestones = [
  { year: '2020', title: 'Founded', description: 'Screen Shiksha was born with a vision to transform creative education.' },
  { year: '2021', title: 'First Batch', description: 'Successfully trained our first batch of 50 UI/UX designers.' },
  { year: '2022', title: 'Expansion', description: 'Added Web Development and Game Development courses.' },
  { year: '2023', title: '1000+ Alumni', description: 'Celebrated training over 1000 students across all programs.' },
  { year: '2024', title: 'Industry Partners', description: 'Partnered with leading tech companies for placements.' },
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

export default function AboutPageClient() {
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
              <Sparkles size={14} /> About Us
            </span>
            <h1>Empowering Creative Careers Through Expert Training</h1>
            <p>
              At Screen Shiksha, we believe everyone deserves access to world-class education. 
              Our mission is to transform passionate learners into industry-ready professionals 
              through live, interactive online training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <motion.div 
              className={styles.storyContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionTag}>Our Story</span>
              <h2>From a Vision to Reality</h2>
              <p>
                Screen Shiksha started with a simple idea: to bridge the gap between traditional 
                education and industry requirements. We noticed that many talented individuals 
                lacked access to quality training in creative fields like UI/UX Design, Web Development, 
                and Game Development.
              </p>
              <p>
                Our founders, with decades of combined industry experience, decided to create a 
                platform where learning is interactive, practical, and results-oriented. Today, 
                we&apos;re proud to have helped over 1000 students launch and advance their creative careers.
              </p>
              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <CheckCircle size={20} className={styles.checkIcon} />
                  <span>Live interactive classes</span>
                </div>
                <div className={styles.highlight}>
                  <CheckCircle size={20} className={styles.checkIcon} />
                  <span>Industry-expert trainers</span>
                </div>
                <div className={styles.highlight}>
                  <CheckCircle size={20} className={styles.checkIcon} />
                  <span>Project-based learning</span>
                </div>
                <div className={styles.highlight}>
                  <CheckCircle size={20} className={styles.checkIcon} />
                  <span>Career support</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className={styles.storyVisual}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.visualWrapper}>
                <div className={styles.visualShape1} />
                <div className={styles.visualShape2} />
                <div className={styles.storyCard}>
                  <div className={styles.cardIcon}>
                    <BookOpen size={32} />
                  </div>
                  <h4>Our Commitment</h4>
                  <p>We&apos;re committed to providing the highest quality education that prepares you for real-world challenges.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>Our Values</span>
            <h2>What Drives Us Forward</h2>
            <p>
              Our core values shape everything we do, from curriculum design to student support
            </p>
          </motion.div>

          <motion.div 
            className={styles.valuesGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className={styles.valueIcon}>
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timeline}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>Our Journey</span>
            <h2>Milestones That Define Us</h2>
          </motion.div>

          <div className={styles.timelineWrapper}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>Our Team</span>
            <h2>Meet the People Behind Your Success</h2>
            <p>
              A dedicated team of professionals committed to your growth and success
            </p>
          </motion.div>

          <motion.div 
            className={styles.teamGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className={styles.teamCard}
                variants={fadeInUp}
              >
                <div className={styles.teamAvatar}>
                  <Award size={32} />
                </div>
                <h3>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <p>{member.description}</p>
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
            <h2>Ready to Join Our Community?</h2>
            <p>
              Take the first step towards your dream career. Book a free demo and 
              experience the Screen Shiksha difference.
            </p>
            <Button href="/contact" size="large">
              Book Free Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
