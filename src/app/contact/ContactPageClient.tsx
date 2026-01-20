'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle
} from 'lucide-react'
import styles from './page.module.css'
import Button from '@/components/Button'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91-96505 82767',
    link: 'tel:+919650582767',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@screenshiksha.com',
    link: 'mailto:info@screenshiksha.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Sat: 10:00 AM - 7:00 PM',
    link: null,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'India',
    link: null,
  },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
]

const courses = [
  'UI/UX Design',
  'Web Development',
  'Graphic Design',
  'Game Development',
]

const faqs = [
  {
    question: 'What is the class format?',
    answer: 'All our classes are conducted live online, allowing real-time interaction with instructors and fellow students.',
  },
  {
    question: 'Do you provide placement support?',
    answer: 'Yes, we offer comprehensive placement support including portfolio reviews, mock interviews, and job referrals.',
  },
  {
    question: 'Can I get a free demo?',
    answer: 'Absolutely! Fill out the form above to book a free demo class and experience our teaching methodology.',
  },
  {
    question: 'What are the payment options?',
    answer: 'We offer flexible payment plans including EMI options. Contact us for detailed pricing information.',
  },
]

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
              <MessageCircle size={14} /> Get in Touch
            </span>
            <h1>Let&apos;s Start Your Learning Journey</h1>
            <p>
              Have questions about our courses? Want to book a demo? 
              We&apos;re here to help you take the first step towards your dream career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <motion.div 
              className={styles.formSection}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Book a Free Demo</h2>
              <p>Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              {isSubmitted ? (
                <motion.div 
                  className={styles.successMessage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={48} />
                  <h3>Thank You!</h3>
                  <p>Your request has been submitted successfully. Our team will contact you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="course">Select Course *</label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any questions or specific requirements?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" fullWidth size="large">
                    <Send size={18} /> Submit Request
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className={styles.infoSection}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.infoCard}>
                <h3>Contact Information</h3>
                <p>Reach out to us through any of these channels</p>

                <div className={styles.infoList}>
                  {contactInfo.map((item, index) => (
                    <div key={index} className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <item.icon size={20} />
                      </div>
                      <div>
                        <span className={styles.infoLabel}>{item.title}</span>
                        {item.link ? (
                          <a href={item.link} className={styles.infoValue}>
                            {item.value}
                          </a>
                        ) : (
                          <span className={styles.infoValue}>{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.socialSection}>
                  <h4>Follow Us</h4>
                  <div className={styles.socialLinks}>
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
              </div>

              <div className={styles.mapPlaceholder}>
                <div className={styles.mapContent}>
                  <MapPin size={32} />
                  <p>We are an online-first institute serving students across India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionTag}>FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our courses and services</p>
          </motion.div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={styles.faqCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
