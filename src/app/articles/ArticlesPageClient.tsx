'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Clock, ArrowRight } from 'lucide-react'
import styles from './page.module.css'

const articles = [
  {
    title: 'Getting Started with UI/UX Design: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of user interface and user experience design, including essential tools, principles, and best practices for beginners.',
    category: 'UI/UX Design',
    readTime: '8 min read',
    date: 'Jan 15, 2026',
    slug: 'getting-started-with-ui-ux-design',
  },
  {
    title: 'Top 10 Web Development Trends to Watch in 2026',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to serverless architecture and beyond.',
    category: 'Web Development',
    readTime: '6 min read',
    date: 'Jan 12, 2026',
    slug: 'top-10-web-development-trends-2026',
  },
  {
    title: 'Building Your Design Portfolio: Tips from Industry Experts',
    excerpt: 'Discover how to create a standout portfolio that showcases your skills and attracts potential employers or clients.',
    category: 'Career',
    readTime: '10 min read',
    date: 'Jan 10, 2026',
    slug: 'building-your-design-portfolio',
  },
  {
    title: 'The Psychology of Color in Brand Design',
    excerpt: 'Understand how colors influence perception and emotions, and learn to use color theory effectively in your design projects.',
    category: 'Graphic Design',
    readTime: '7 min read',
    date: 'Jan 8, 2026',
    slug: 'psychology-of-color-in-brand-design',
  },
  {
    title: 'Introduction to Game Development with Unity',
    excerpt: 'A comprehensive guide to getting started with Unity game engine, covering the basics of C# programming and game mechanics.',
    category: 'Game Development',
    readTime: '12 min read',
    date: 'Jan 5, 2026',
    slug: 'introduction-to-game-development-unity',
  },
  {
    title: 'Responsive Design Best Practices for Modern Websites',
    excerpt: 'Master the art of creating websites that look great on any device with these proven responsive design techniques.',
    category: 'Web Development',
    readTime: '9 min read',
    date: 'Jan 3, 2026',
    slug: 'responsive-design-best-practices',
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

export default function ArticlesPageClient() {
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
              <BookOpen size={14} /> Resources
            </span>
            <h1>Articles & Insights</h1>
            <p>
              Stay updated with the latest trends, tips, and tutorials in design and development. 
              Learn from industry experts and enhance your skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.articles}>
        <div className={styles.container}>
          <motion.div 
            className={styles.articlesGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {articles.map((article, index) => (
              <motion.article
                key={index}
                className={styles.articleCard}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Link href={`/articles/${article.slug}`} className={styles.cardLink}>
                  <div className={styles.articleImage}>
                    <span className={styles.categoryBadge}>{article.category}</span>
                  </div>
                  <div className={styles.articleContent}>
                    <div className={styles.articleMeta}>
                      <span>{article.date}</span>
                      <span className={styles.dot}>•</span>
                      <span><Clock size={14} /> {article.readTime}</span>
                    </div>
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                    <span className={styles.readMore}>
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
