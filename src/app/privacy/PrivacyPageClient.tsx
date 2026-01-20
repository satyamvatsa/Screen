'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import styles from './page.module.css'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, including:
• Personal information (name, email address, phone number)
• Educational background and professional experience
• Payment information for course enrollment
• Communications you send to us

We also automatically collect certain information when you use our services, including:
• Device information and browser type
• IP address and location data
• Usage patterns and preferences
• Cookies and similar technologies`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:
• Provide, maintain, and improve our services
• Process transactions and send related information
• Send promotional communications (with your consent)
• Respond to your comments and questions
• Monitor and analyze trends and usage
• Detect and prevent fraudulent transactions
• Personalize your learning experience`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:

• With service providers who assist in our operations
• When required by law or to respond to legal requests
• To protect our rights and prevent fraud
• With your consent or at your direction

When sharing with service providers, we ensure they maintain appropriate security measures and use your information only for the purposes we specify.`,
  },
  {
    title: '4. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

These measures include:
• Encryption of data in transit and at rest
• Regular security assessments
• Access controls and authentication
• Secure data storage practices

However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '5. Cookies and Tracking',
    content: `We use cookies and similar tracking technologies to:
• Remember your preferences and settings
• Understand how you use our services
• Improve our website and services
• Deliver relevant content and advertisements

You can control cookies through your browser settings. Disabling cookies may affect some functionality of our services.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the following rights regarding your personal information:
• Access: Request a copy of your personal data
• Correction: Request correction of inaccurate data
• Deletion: Request deletion of your data
• Portability: Request transfer of your data
• Opt-out: Unsubscribe from marketing communications

To exercise these rights, contact us at info@screenshiksha.com. We will respond to your request within 30 days.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain your personal information for as long as necessary to:
• Provide our services to you
• Comply with legal obligations
• Resolve disputes and enforce agreements

When you request deletion, we will remove your data from our active systems. Some information may be retained in backups for a limited period as required by law.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16.

If you believe we have collected information from a child under 16, please contact us immediately and we will take steps to delete such information.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.

We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

Email: info@screenshiksha.com
Phone: +91-96505 82767

Screen Shiksha by Multiorigin
India`,
  },
]

export default function PrivacyPageClient() {
  return (
    <>
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
            <span className={styles.badge}>
              <Shield size={14} /> Legal
            </span>
            <h1>Privacy Policy</h1>
            <p>
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <span className={styles.lastUpdated}>Last updated: January 1, 2026</span>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              className={styles.section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h2>{section.title}</h2>
              <div className={styles.sectionContent}>
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
