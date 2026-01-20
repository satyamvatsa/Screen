'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Play, 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  Laptop,
  Palette,
  Gamepad2,
  Code,
  MessageCircle,
  Target,
  Zap,
  Star
} from 'lucide-react'
import styles from './page.module.css'
import Button from '@/components/Button'

const courses = [
  {
    title: 'UI/UX Design',
    description: 'Elevate your design skills with our expert-led course, featuring interactive modules, real-world projects, and certification to boost your career.',
    duration: '12 months',
    icon: Palette,
    color: 'var(--color-accent)',
    href: '/courses/ui-ux-design',
  },
  {
    title: 'Web Development',
    description: 'Unlock the world of web development with our comprehensive course, offering hands-on projects, expert instruction, and career-boosting certification.',
    duration: '12 months',
    icon: Code,
    color: 'var(--color-mint)',
    href: '/courses/web-development',
  },
  {
    title: 'Graphic Design',
    description: 'Unleash your creativity with our dynamic course, blending theory and practice to elevate your design skills and empower your artistic vision.',
    duration: '8 months',
    icon: Laptop,
    color: 'var(--color-lavender)',
    href: '/courses/graphic-design',
  },
  {
    title: 'Game Development',
    description: 'Dive into game development with immersive projects, industry tools, and expert mentorship to build captivating gaming experiences.',
    duration: '12 months',
    icon: Gamepad2,
    color: 'var(--color-sky)',
    href: '/courses/game-development',
  },
]

const features = [
  {
    icon: Users,
    title: 'Learn from Industry Experts',
    description: 'Our trainers are professionals with extensive industry experience, providing practical insights and real-world knowledge.',
  },
  {
    icon: MessageCircle,
    title: 'Interactive Environment',
    description: 'Our classes are designed to be engaging and interactive, allowing you to actively participate and collaborate.',
  },
  {
    icon: Clock,
    title: 'Flexible Learning Options',
    description: 'Choose from a variety of course schedules and timings that suit your availability and learning preferences.',
  },
]

const methodology = [
  {
    icon: BookOpen,
    title: 'System Program',
    description: 'The course is divided into sequential and logical stages of actual project development, helping you master the material easily.',
  },
  {
    icon: Target,
    title: 'Emphasis on Practice',
    description: 'The course consists of 80% practice, as close as possible to working on a real project in a design studio.',
  },
  {
    icon: Award,
    title: 'Results-Oriented',
    description: 'By the end of the course, you will have an understanding of how to make projects on your own.',
  },
  {
    icon: Zap,
    title: 'Qualitative Feedback',
    description: 'Expect answers within 24 hours, support chat on WhatsApp, and closed webinars with project analysis.',
  },
]

const stats = [
  { number: '1000+', label: 'Students Trained' },
  { number: '50+', label: 'Expert Trainers' },
  { number: '95%', label: 'Success Rate' },
  { number: '4.9', label: 'Student Rating' },
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gridPattern} />
        </div>
        
        <div className={styles.container}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={styles.badge}>
              <Star size={14} fill="currentColor" /> Design Your Career
            </span>
            <h1 className={styles.heroTitle}>
              Unlock Your Potential with{' '}
              <span className={styles.highlight}>Live Online Training</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Join our live online courses in UI/UX Design, Web Development, and Game Development 
              to gain the skills you need to succeed in today&apos;s creative industry.
            </p>
            <div className={styles.heroCta}>
              <Button href="/contact" size="large">
                Book Free Demo <ArrowRight size={20} />
              </Button>
              <Button href="#courses" variant="outline" size="large">
                <Play size={18} /> Explore Courses
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.visualCard}>
              <div className={styles.cardDecor} />
              <div className={styles.cardContent}>
                <div className={styles.miniCard}>
                  <Palette size={24} />
                  <span>UI/UX Design</span>
                </div>
                <div className={styles.miniCard}>
                  <Code size={24} />
                  <span>Web Development</span>
                </div>
                <div className={styles.miniCard}>
                  <Gamepad2 size={24} />
                  <span>Game Dev</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className={styles.statsBar}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.container}>
            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section id="courses" className={styles.courses}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>Our Programs</span>
            <h2>Unlock Your Potential with Screen Shiksha</h2>
            <p>
              High-quality professional training in UI/UX Design, Web Development, 
              and Game Development. Our live online classes ensure interactive learning experiences.
            </p>
          </motion.div>

          <motion.div 
            className={styles.courseGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className={styles.courseCard}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.courseIcon} style={{ background: course.color }}>
                  <course.icon size={28} color="white" />
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className={styles.courseMeta}>
                  <span className={styles.duration}>
                    <Clock size={16} /> {course.duration}
                  </span>
                  <Link href={course.href} className={styles.courseLink}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className={styles.courseCta}>
            <Button href="/contact">Book a Demo</Button>
            <Button href="#" variant="outline">Download Brochure</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featuresLayout}>
            <motion.div 
              className={styles.featuresContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionTag}>Why Choose Us</span>
              <h2>Experience Live Online Classes with Expert Trainers</h2>
              <p>
                At Screen Shiksha, we offer high-quality professional training in UI/UX Design, 
                Web Development, and Game Development. Our classes are conducted live online, 
                ensuring interactive sessions and personalized guidance from our experienced trainers.
              </p>
              
              <div className={styles.featureList}>
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className={styles.featureIcon}>
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className={styles.featuresVisual}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.visualWrapper}>
                <div className={styles.visualShape1} />
                <div className={styles.visualShape2} />
                <div className={styles.liveClassCard}>
                  <div className={styles.liveIndicator}>
                    <span className={styles.liveDot} />
                    LIVE
                  </div>
                  <h4>Interactive Learning Sessions</h4>
                  <p>Join real-time classes with expert trainers</p>
                  <div className={styles.avatarGroup}>
                    <div className={styles.avatar}>S</div>
                    <div className={styles.avatar}>P</div>
                    <div className={styles.avatar}>A</div>
                    <span>+50 students</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className={styles.methodology}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>Our Approach</span>
            <h2>Methodology, Course Program & Feedback</h2>
            <p>
              Our structured approach ensures you learn effectively and build real-world skills
            </p>
          </motion.div>

          <motion.div 
            className={styles.methodGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {methodology.map((item, index) => (
              <motion.div
                key={index}
                className={styles.methodCard}
                variants={fadeInUp}
              >
                <div className={styles.methodIcon}>
                  <item.icon size={28} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
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
            <h2>Ready to Start Your Creative Journey?</h2>
            <p>
              Book a free demo class and experience our live online learning environment. 
              Take the first step towards your dream career today.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contact" size="large">
                Book Free Demo <ArrowRight size={20} />
              </Button>
              <Button href="/courses/ui-ux-design" variant="secondary" size="large">
                View Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
