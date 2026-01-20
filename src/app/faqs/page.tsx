import type { Metadata } from 'next'
import FAQsPageClient from './FAQsPageClient'

export const metadata: Metadata = {
  title: 'FAQs - Frequently Asked Questions',
  description: 'Find answers to common questions about Screen Shiksha courses, enrollment, payment options, placement support, and more. Get all the information you need before joining.',
  keywords: ['Screen Shiksha FAQ', 'course questions', 'UI UX course FAQ', 'enrollment questions', 'payment options', 'placement assistance'],
  alternates: {
    canonical: 'https://screenshiksha.com/faqs',
  },
  openGraph: {
    title: 'FAQs - Screen Shiksha',
    description: 'Get answers to all your questions about our courses and enrollment process.',
    url: 'https://screenshiksha.com/faqs',
  },
}

export default function FAQsPage() {
  return <FAQsPageClient />
}
