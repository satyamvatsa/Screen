'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import styles from './page.module.css'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the Screen Shiksha website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and others who access or use our platform, including students enrolled in our courses.`,
  },
  {
    title: '2. Course Enrollment',
    content: `Upon successful enrollment and payment, you will receive access to your chosen course. Course access is personal and non-transferable. You may not share your login credentials or course materials with others.

We reserve the right to modify course content, schedules, and instructors as needed to ensure the best learning experience. Students will be notified of any significant changes.`,
  },
  {
    title: '3. Payment Terms',
    content: `All payments must be made through our approved payment channels. Course fees are as displayed at the time of enrollment. EMI options are available for select courses, subject to eligibility.

Full payment or first EMI installment is required before course access is granted. Failure to complete EMI payments may result in suspension of course access.`,
  },
  {
    title: '4. Refund Policy',
    content: `We offer a 7-day refund policy from the date of enrollment. To request a refund, contact our support team within this period with your enrollment details.

After 7 days, refunds are considered on a case-by-case basis. No refunds will be issued after 30 days from enrollment or after accessing more than 25% of course content, whichever comes first.`,
  },
  {
    title: '5. Intellectual Property',
    content: `All course content, including videos, materials, assignments, and resources, are the intellectual property of Screen Shiksha and its instructors. You may not reproduce, distribute, or share this content without prior written permission.

Students retain ownership of their original work created during the course, but grant Screen Shiksha permission to use such work for promotional purposes with attribution.`,
  },
  {
    title: '6. Code of Conduct',
    content: `Students are expected to maintain professional behavior during all interactions. This includes:
• Respectful communication with instructors and fellow students
• No plagiarism or cheating on assignments
• No recording or redistributing live sessions without permission
• Timely submission of assignments and participation in classes

Violation of these guidelines may result in suspension or termination of course access.`,
  },
  {
    title: '7. Certificates',
    content: `Certificates are issued upon successful completion of the course, including all required assignments and projects. The certificate criteria may vary by course and will be communicated at the time of enrollment.

Certificates are for personal and professional use only. Misrepresentation of credentials or fraudulent use of certificates may result in revocation.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `Screen Shiksha provides educational content and guidance but does not guarantee employment outcomes or specific results. Career success depends on individual effort, market conditions, and other factors beyond our control.

We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.`,
  },
  {
    title: '9. Changes to Terms',
    content: `We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the new terms.

We encourage users to review this page periodically for updates.`,
  },
  {
    title: '10. Contact Information',
    content: `For questions about these Terms and Conditions, please contact us at:

Email: info@screenshiksha.com
Phone: +91-96505 82767

Our support team is available Monday through Saturday, 10:00 AM to 7:00 PM IST.`,
  },
]

export default function TermsPageClient() {
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
              <FileText size={14} /> Legal
            </span>
            <h1>Terms & Conditions</h1>
            <p>
              Please read these terms carefully before using our services.
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
