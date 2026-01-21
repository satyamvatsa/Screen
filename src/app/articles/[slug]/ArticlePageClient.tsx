'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowLeft, Clock, Calendar, User, Share2, Linkedin, Twitter, Facebook } from 'lucide-react'
import styles from './page.module.css'
import Button from '@/components/Button'
import { articleData } from './articleData'

export default function ArticlePageClient() {
  const params = useParams()
  const slug = params.slug as string
  const article = articleData[slug]

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h1>Article Not Found</h1>
        <p>The article you&apos;re looking for doesn&apos;t exist.</p>
        <Button href="/articles">Back to Articles</Button>
      </div>
    )
  }

  const shareUrl = `https://screenshiksha.com/articles/${slug}`

  // Article schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': shareUrl,
    headline: article.title,
    description: article.excerpt,
    image: `https://screenshiksha.com/og-articles/${slug}.png`,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://screenshiksha.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Screen Shiksha',
      logo: {
        '@type': 'ImageObject',
        url: 'https://screenshiksha.com/logo-black.png',
        width: 200,
        height: 60,
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': shareUrl,
    },
    articleSection: article.category,
    keywords: article.keywords.join(', '),
    wordCount: article.content.reduce((acc, block) => {
      if (typeof block.content === 'string') {
        return acc + block.content.split(' ').length
      }
      return acc + (block.content as string[]).join(' ').split(' ').length
    }, 0),
    inLanguage: 'en-IN',
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://screenshiksha.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Articles',
        item: 'https://screenshiksha.com/articles',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: shareUrl,
      },
    ],
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb} />
        </div>
        
        <div className={styles.container}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/articles" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to Articles
            </Link>
            <span className={styles.categoryBadge}>{article.category}</span>
            <h1>{article.title}</h1>
            <div className={styles.meta}>
              <span><Calendar size={16} /> {article.date}</span>
              <span><Clock size={16} /> {article.readTime}</span>
              <span><User size={16} /> {article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className={styles.articleSection}>
        <div className={styles.container}>
          <div className={styles.articleLayout}>
            <motion.article 
              className={styles.articleContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {article.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return <p key={index}>{block.content as string}</p>
                  case 'heading':
                    return <h2 key={index}>{block.content as string}</h2>
                  case 'list':
                    return (
                      <ul key={index}>
                        {(block.content as string[]).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )
                  case 'quote':
                    return <blockquote key={index}>{block.content as string}</blockquote>
                  default:
                    return null
                }
              })}
            </motion.article>

            <aside className={styles.sidebar}>
              <div className={styles.shareBox}>
                <h4><Share2 size={18} /> Share this article</h4>
                <div className={styles.shareLinks}>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareLink}
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareLink}
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareLink}
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              <div className={styles.ctaBox}>
                <h4>Want to Learn More?</h4>
                <p>Join our courses and master these skills with expert guidance.</p>
                <Button href="/contact" size="small">
                  Book Free Demo
                </Button>
              </div>
            </aside>
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
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>
              Turn this knowledge into real skills with our expert-led courses. 
              Get hands-on experience, build your portfolio, and launch your career.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contact" size="large">
                Book Free Demo
              </Button>
              <Button href="/articles" variant="outline" size="large">
                Read More Articles
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
