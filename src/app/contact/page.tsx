import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us - Book Free Demo Class',
  description: 'Get in touch with Screen Shiksha. Book a free demo class, ask questions about our courses, or learn about enrollment. Call +91-96505 82767 or email info@screenshiksha.com.',
  keywords: ['contact Screen Shiksha', 'book demo class', 'UI UX course inquiry', 'design course admission', 'free demo'],
  alternates: {
    canonical: 'https://screenshiksha.com/contact',
  },
  openGraph: {
    title: 'Contact Screen Shiksha - Book Your Free Demo',
    description: 'Ready to start your design career? Contact us for a free demo class and course information.',
    url: 'https://screenshiksha.com/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
