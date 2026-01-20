'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Script from 'next/script'
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react'
import styles from './page.module.css'
import Button from '@/components/Button'

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is Screen Shiksha?',
        answer: 'Screen Shiksha is an online education platform offering professional courses in UI/UX Design, Web Development, Graphic Design, and Game Development. We provide live interactive classes led by industry experts.',
      },
      {
        question: 'How are the classes conducted?',
        answer: 'All our classes are conducted live online via video conferencing platforms. This allows for real-time interaction with instructors, live Q&A sessions, and collaborative learning with fellow students.',
      },
      {
        question: 'What are the class timings?',
        answer: 'We offer flexible batch timings including weekday (evening) and weekend batches to accommodate working professionals and students. Specific timings are shared during enrollment.',
      },
    ],
  },
  {
    category: 'Courses',
    questions: [
      {
        question: 'What courses do you offer?',
        answer: 'We offer professional courses in UI/UX Design (12 months), Web Development (12 months), Graphic Design Professional (8 months), and Game Development (12 months). Each course includes hands-on projects and industry certification.',
      },
      {
        question: 'Do I need prior experience to enroll?',
        answer: 'No prior experience is required for most of our courses. Our programs are designed to take you from beginner to professional level. We start with fundamentals and gradually progress to advanced concepts.',
      },
      {
        question: 'Will I receive a certificate after completion?',
        answer: 'Yes, upon successful completion of the course and projects, you will receive an industry-recognized certificate from Screen Shiksha that you can add to your resume and LinkedIn profile.',
      },
    ],
  },
  {
    category: 'Payment & Fees',
    questions: [
      {
        question: 'What are the payment options?',
        answer: 'We offer multiple payment options including full payment, EMI plans (3, 6, or 12 months), and pay-after-placement options for select courses. Contact us for detailed pricing and payment plans.',
      },
      {
        question: 'Is there a refund policy?',
        answer: 'Yes, we offer a refund within the first 7 days of the course if you\'re not satisfied with the program. After this period, refunds are provided on a case-by-case basis. Please refer to our terms for details.',
      },
      {
        question: 'Are there any scholarships available?',
        answer: 'We offer merit-based scholarships and early bird discounts. Contact our admissions team to learn about current scholarship opportunities and eligibility criteria.',
      },
    ],
  },
  {
    category: 'Career Support',
    questions: [
      {
        question: 'Do you provide placement assistance?',
        answer: 'Yes, we offer comprehensive placement support including resume building, portfolio reviews, mock interviews, and job referrals to our partner companies. Our placement team actively helps students secure positions.',
      },
      {
        question: 'What kind of projects will I work on?',
        answer: 'You\'ll work on real-world projects throughout the course, including individual assignments and team projects. These projects are designed to build your portfolio and demonstrate your skills to potential employers.',
      },
      {
        question: 'Can I access course materials after completion?',
        answer: 'Yes, you get lifetime access to all course recordings, resources, and materials. You can revisit the content anytime to refresh your knowledge or learn new updates.',
      },
    ],
  },
]

// Generate FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap(cat => 
    cat.questions.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }))
  ),
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.faqItem}>
      <button 
        className={`${styles.faqQuestion} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown size={20} className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.faqAnswer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQsPageClient() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              <HelpCircle size={14} /> Support
            </span>
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about our courses, enrollment process, 
              payment options, and career support services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className={styles.faqs}>
        <div className={styles.container}>
          {faqCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              className={styles.faqCategory}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.faqList}>
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </motion.div>
          ))}
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
            <MessageCircle size={48} className={styles.ctaIcon} />
            <h2>Still Have Questions?</h2>
            <p>
              Our team is here to help. Get in touch and we&apos;ll respond within 24 hours.
            </p>
            <Button href="/contact" size="large">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
