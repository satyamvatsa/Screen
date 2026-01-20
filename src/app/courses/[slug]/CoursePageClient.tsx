'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Calendar,
  Target,
  Briefcase
} from 'lucide-react'
import styles from './page.module.css'
import Button from '@/components/Button'

const courseData: { [key: string]: {
  title: string
  subtitle: string
  description: string
  duration: string
  projects: number
  rating: number
  students: string
  color: string
  highlights: string[]
  curriculum: { title: string; topics: string[] }[]
  skills: string[]
  careers: string[]
} } = {
  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Master the Art of User Experience',
    description: 'Elevate your design skills with our expert-led course, featuring interactive modules, real-world projects, and certification to boost your career. Learn to create stunning user interfaces and seamless user experiences.',
    duration: '12 months',
    projects: 15,
    rating: 4.9,
    students: '500+',
    color: 'var(--color-accent)',
    highlights: [
      'Live interactive classes with industry experts',
      'Hands-on projects with real clients',
      'Portfolio building & career support',
      'Industry-recognized certification',
      'Lifetime access to course materials',
      'Job placement assistance',
    ],
    curriculum: [
      {
        title: 'Foundation',
        topics: ['Design Principles', 'Color Theory', 'Typography', 'Layout & Composition'],
      },
      {
        title: 'UI Design',
        topics: ['Figma Mastery', 'Design Systems', 'Component Libraries', 'Responsive Design'],
      },
      {
        title: 'UX Research',
        topics: ['User Research Methods', 'Personas & Journey Maps', 'Wireframing', 'Prototyping'],
      },
      {
        title: 'Advanced',
        topics: ['Interaction Design', 'Motion Design', 'Usability Testing', 'Design Handoff'],
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing', 'User Research', 'Design Systems'],
    careers: ['UI Designer', 'UX Designer', 'Product Designer', 'Design Lead'],
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'Build the Future of the Web',
    description: 'Unlock the world of web development with our comprehensive course, offering hands-on projects, expert instruction, and career-boosting certification. Master both frontend and backend technologies.',
    duration: '12 months',
    projects: 20,
    rating: 4.8,
    students: '400+',
    color: 'var(--color-mint)',
    highlights: [
      'Full-stack development training',
      'Real-world project experience',
      'Git & deployment workflows',
      'Industry-recognized certification',
      'Code review sessions',
      'Interview preparation',
    ],
    curriculum: [
      {
        title: 'Frontend Basics',
        topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'Responsive Design', 'CSS Frameworks'],
      },
      {
        title: 'Frontend Advanced',
        topics: ['React.js', 'State Management', 'TypeScript', 'Next.js'],
      },
      {
        title: 'Backend Development',
        topics: ['Node.js', 'Express.js', 'Databases (SQL/NoSQL)', 'REST APIs'],
      },
      {
        title: 'DevOps & Deployment',
        topics: ['Git & GitHub', 'CI/CD', 'Cloud Deployment', 'Performance Optimization'],
      },
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS'],
    careers: ['Frontend Developer', 'Backend Developer', 'Full-stack Developer', 'Software Engineer'],
  },
  'graphic-design': {
    title: 'Graphic Design Professional',
    subtitle: 'Create Visual Magic',
    description: 'Unleash your creativity with our dynamic course, blending theory and practice to elevate your design skills and empower your artistic vision. Master industry-standard tools and techniques.',
    duration: '8 months',
    projects: 12,
    rating: 4.9,
    students: '350+',
    color: 'var(--color-lavender)',
    highlights: [
      'Adobe Creative Suite mastery',
      'Brand identity design projects',
      'Print & digital design skills',
      'Portfolio development',
      'Client project experience',
      'Freelance guidance',
    ],
    curriculum: [
      {
        title: 'Design Fundamentals',
        topics: ['Visual Principles', 'Color Psychology', 'Typography Mastery', 'Composition'],
      },
      {
        title: 'Digital Design',
        topics: ['Adobe Photoshop', 'Adobe Illustrator', 'Image Manipulation', 'Vector Graphics'],
      },
      {
        title: 'Brand Design',
        topics: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials'],
      },
      {
        title: 'Advanced Techniques',
        topics: ['Print Design', 'Packaging Design', 'Social Media Graphics', 'Motion Graphics Intro'],
      },
    ],
    skills: ['Photoshop', 'Illustrator', 'InDesign', 'Brand Design', 'Typography', 'Layout'],
    careers: ['Graphic Designer', 'Brand Designer', 'Visual Designer', 'Art Director'],
  },
  'game-development': {
    title: 'Game Development',
    subtitle: 'Create Immersive Gaming Experiences',
    description: 'Dive into game development with immersive projects, industry tools, and expert mentorship to build captivating gaming experiences. Learn to create games from concept to launch.',
    duration: '12 months',
    projects: 8,
    rating: 4.8,
    students: '200+',
    color: 'var(--color-sky)',
    highlights: [
      'Unity & Unreal Engine training',
      'Complete game development cycle',
      '2D and 3D game projects',
      'Game design principles',
      'Portfolio-ready games',
      'Industry networking events',
    ],
    curriculum: [
      {
        title: 'Game Design',
        topics: ['Game Theory', 'Level Design', 'Game Mechanics', 'Player Psychology'],
      },
      {
        title: 'Unity Development',
        topics: ['C# Programming', 'Unity Interface', '2D Game Development', 'Physics & Animation'],
      },
      {
        title: '3D Development',
        topics: ['3D Modeling Basics', '3D Game Mechanics', 'Lighting & Effects', 'Optimization'],
      },
      {
        title: 'Publishing',
        topics: ['Game Testing', 'Platform Publishing', 'Monetization', 'Marketing Basics'],
      },
    ],
    skills: ['Unity', 'C#', 'Game Design', '3D Modeling', 'Animation', 'Level Design'],
    careers: ['Game Developer', 'Game Designer', 'Unity Developer', 'Technical Artist'],
  },
}

export default function CoursePageClient() {
  const params = useParams()
  const slug = params.slug as string
  const course = courseData[slug]

  if (!course) {
    return (
      <div className={styles.notFound}>
        <h1>Course Not Found</h1>
        <p>The course you&apos;re looking for doesn&apos;t exist.</p>
        <Button href="/courses/ui-ux-design">View UI/UX Course</Button>
      </div>
    )
  }

  // Course schema for SEO
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'Screen Shiksha',
      sameAs: 'https://screenshiksha.com',
    },
    educationalLevel: 'Beginner to Advanced',
    timeRequired: course.duration === '12 months' ? 'P12M' : 'P8M',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: course.rating,
      reviewCount: parseInt(course.students),
      bestRating: 5,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      instructor: {
        '@type': 'Organization',
        name: 'Screen Shiksha Expert Trainers',
      },
    },
  }

  return (
    <>
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb} style={{ background: `radial-gradient(circle, ${course.color}20 0%, transparent 70%)` }} />
          <div className={styles.gridPattern} />
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <motion.div 
              className={styles.heroContent}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/#courses" className={styles.backLink}>
                ← Back to Courses
              </Link>
              <span className={styles.badge} style={{ background: `${course.color}15`, color: course.color, borderColor: `${course.color}30` }}>
                Professional Course
              </span>
              <h1>{course.title}</h1>
              <p className={styles.subtitle}>{course.subtitle}</p>
              <p className={styles.description}>{course.description}</p>
              
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <Clock size={20} />
                  <span>{course.duration}</span>
                </div>
                <div className={styles.stat}>
                  <BookOpen size={20} />
                  <span>{course.projects}+ Projects</span>
                </div>
                <div className={styles.stat}>
                  <Star size={20} fill="currentColor" />
                  <span>{course.rating} Rating</span>
                </div>
                <div className={styles.stat}>
                  <Users size={20} />
                  <span>{course.students} Students</span>
                </div>
              </div>

              <div className={styles.heroCta}>
                <Button href="/contact" size="large">
                  Enroll Now <ArrowRight size={18} />
                </Button>
                <Button href="/contact" variant="outline" size="large">
                  <Play size={16} /> Book Free Demo
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className={styles.heroCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.cardHeader} style={{ background: course.color }}>
                <h3>Course Highlights</h3>
              </div>
              <div className={styles.cardBody}>
                {course.highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlightItem}>
                    <CheckCircle size={18} style={{ color: course.color }} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <Button href="/contact" fullWidth>
                  Book Free Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className={styles.curriculum}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>Curriculum</span>
            <h2>What You&apos;ll Learn</h2>
            <p>A comprehensive curriculum designed to take you from beginner to professional</p>
          </motion.div>

          <div className={styles.curriculumGrid}>
            {course.curriculum.map((module, index) => (
              <motion.div
                key={index}
                className={styles.moduleCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={styles.moduleNumber} style={{ background: course.color }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3>{module.title}</h3>
                <ul>
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Careers Section */}
      <section className={styles.skillsCareers}>
        <div className={styles.container}>
          <div className={styles.skillsGrid}>
            <motion.div 
              className={styles.skillsCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.cardIcon}>
                <Target size={28} />
              </div>
              <h3>Skills You&apos;ll Master</h3>
              <div className={styles.skillTags}>
                {course.skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag} style={{ borderColor: course.color }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className={styles.careersCard}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.cardIcon}>
                <Briefcase size={28} />
              </div>
              <h3>Career Opportunities</h3>
              <div className={styles.careerList}>
                {course.careers.map((career, index) => (
                  <div key={index} className={styles.careerItem}>
                    <Award size={16} style={{ color: course.color }} />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
            <h2>Ready to Start Your {course.title} Journey?</h2>
            <p>
              Join thousands of students who have transformed their careers with Screen Shiksha. 
              Book a free demo to experience our teaching methodology.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contact" size="large">
                Book Free Demo <ArrowRight size={20} />
              </Button>
              <Button href="/contact" variant="secondary" size="large">
                <Calendar size={18} /> Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
